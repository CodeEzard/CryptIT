// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CryptITTransactions {
    uint256 transactionCount;
    address private owner;
    
    // Mapping to track user transaction counts
    mapping(address => uint256) private userTransactionCounts;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
        console.log("CryptIT Smart Contract deployed by:", msg.sender);
    }

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        userTransactionCounts[msg.sender] += 1;
        
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
    
    function getUserTransactionCount(address user) public view returns (uint256) {
        return userTransactionCounts[user];
    }
    
    function getOwner() public view returns (address) {
        return owner;
    }
    
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner cannot be the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}