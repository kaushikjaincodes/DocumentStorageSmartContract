async function main() {
  
  const DocumentVerification = await ethers.getContractFactory("DocumentVerification");
  console.log("Deploying DocumentVerification contract...");

  
  const documentVerification = await DocumentVerification.deploy();
  
 
  await documentVerification.deployTransaction.wait();

  console.log("DocumentVerification deployed to:", documentVerification.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
