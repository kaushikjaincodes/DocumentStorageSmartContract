const { ethers ,JsonRpcProvider } = require("ethers");
const fs = require("fs");

const instance = "http://127.0.0.1:6000"; 

// wallet key for signing 
const PRIVATE_KEY = "0x76934b59fbc4b7695e2055cc5da53e26f4eceda32abf2d1534ca1f7dbc029842"; 

const CONTRACT_ADDRESS = "0x33013E23ce2AA8705080b13da93D90Af0F501979"; 


const provider = new JsonRpcProvider(instance);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// smart contract ki ABI
const abi = [
    "event DocumentIssued(string indexed id, string name, string gender, string dob)",
    "function issueDocument(string memory name, string memory gender, string memory id, string memory dob) public",
    "function getDocument(string memory id) public view returns (string memory name, string memory gender, string memory documentId, string memory dob, bool exists)"
];

// Create a contract instance, for the following wallet
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);


async function issueDocument(name, gender, id, dob) {
    try {
        const tx = await contract.issueDocument(name, gender, id, dob);
        await tx.wait();
        console.log("Document issued successfully!");
    } catch (error) {
        console.error("Error issuing document:", error);
    }
}


async function getDocument(id) {
    try {
        const doc = await contract.getDocument(id);
        const docObject = {
            name: doc[0],
            gender: doc[1],
            id: doc[2],
            dob: doc[3], 
            isActive: doc[4]
          };
        const ret = JSON.stringify(docObject);
        console.log(ret);
        
          return ret;
    } catch (error) {
        console.error("Error getting document:", error);
    }
}

module.exports = { issueDocument, getDocument };


// async function main() {
    
//     // await issueDocument( "Firdos Alam","MALE","582650716351","08/10/2007");

//     await getDocument("582650716351");
// }

// main()
//     .then(() => console.log("Done"))
//     .catch(error => console.error("Error:", error));
