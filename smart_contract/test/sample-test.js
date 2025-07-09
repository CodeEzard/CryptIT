const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CryptITTransactions", function () {
  let cryptITContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    
    const CryptITFactory = await ethers.getContractFactory("CryptITTransactions");
    cryptITContract = await CryptITFactory.deploy();
    await cryptITContract.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await cryptITContract.getOwner()).to.equal(owner.address);
    });

    it("Should start with zero transactions", async function () {
      expect(await cryptITContract.getTransactionCount()).to.equal(0);
    });
  });

  describe("Transactions", function () {
    it("Should add transactions correctly", async function () {
      const amount = ethers.utils.parseEther("1.0");
      
      await cryptITContract.addToBlockchain(
        addr1.address,
        amount,
        "Test transaction",
        "celebration"
      );

      expect(await cryptITContract.getTransactionCount()).to.equal(1);
      expect(await cryptITContract.getUserTransactionCount(owner.address)).to.equal(1);
    });

    it("Should emit Transfer event", async function () {
      const amount = ethers.utils.parseEther("1.0");
      
      await expect(cryptITContract.addToBlockchain(
        addr1.address,
        amount,
        "Test transaction",
        "celebration"
      )).to.emit(cryptITContract, "Transfer");
    });
  });

  describe("Ownership", function () {
    it("Should transfer ownership correctly", async function () {
      await cryptITContract.transferOwnership(addr1.address);
      expect(await cryptITContract.getOwner()).to.equal(addr1.address);
    });

    it("Should prevent non-owners from transferring ownership", async function () {
      await expect(
        cryptITContract.connect(addr1).transferOwnership(addr2.address)
      ).to.be.revertedWith("Only the contract owner can call this function");
    });
  });
});
