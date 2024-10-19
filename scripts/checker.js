const { ethers , JsonRpcProvider  } = require("ethers");

async function main() {

  const provider = new JsonRpcProvider("HTTP://127.0.0.1:6000");

  const contractAddress = "0x46a0868603f26F26dA7af340a47Ff255f8a2e1a3"; 

  const bytecode = await provider.getCode(contractAddress);

  if (bytecode === "0x") {
    console.log(`No contract found at address ${contractAddress}`);
  } else {
    console.log(`Contract exists at address ${contractAddress}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error("Error:", error);
    process.exit(1);
  });
