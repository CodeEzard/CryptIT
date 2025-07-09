const main = async () => {
  console.log("🚀 Starting CryptIT Smart Contract deployment...");
  
  const [deployer] = await hre.ethers.getSigners();
  console.log("📱 Deploying contracts with account:", deployer.address);
  console.log("💰 Account balance:", (await deployer.getBalance()).toString());

  const cryptITFactory = await hre.ethers.getContractFactory("CryptITTransactions");
  const cryptITContract = await cryptITFactory.deploy();

  await cryptITContract.deployed();

  console.log("✅ CryptIT Contract deployed successfully!");
  console.log("📍 Contract address:", cryptITContract.address);
  console.log("🔗 Transaction hash:", cryptITContract.deployTransaction.hash);
  console.log("⛽ Gas used:", cryptITContract.deployTransaction.gasLimit.toString());
  
  // Verify deployment
  const transactionCount = await cryptITContract.getTransactionCount();
  console.log("📊 Initial transaction count:", transactionCount.toString());
  
  console.log("🎉 Deployment completed successfully!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  }
};

runMain();