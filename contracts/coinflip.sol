// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Coinflip{
    address public owner;
    uint256 public poolBalance;
    address public user;
    uint256 public fees;
    uint256 public randomNum;
    bool public result;
    CoinflipChoice choice;
    event CoinflipResult(bool result);
    event FundsDeposited(address indexed owner, uint256 amount);
    event BetDeposited(address indexed user, uint256 amount);

     constructor() {
        owner = msg.sender;
    }

    enum CoinflipChoice{
        HEADS,
        TAILS
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the father can perform this");
        _;
    }
    
    function flip(CoinflipChoice choice) external payable returns (uint256){
        require(msg.value == 0.1 ether || msg.value == 0.5 ether || msg.value == 1 ether || msg.value == 2 ether || msg.value == 3 ether || msg.value == 5 ether, "stupid bozo cant even bet");
        require(address(this).balance > 5 ether, "pool is empty bozo");
        fees = 
        return 2;
    }

    function withdrawPoolBalance() public onlyOwner payable  {
        require(address(this).balance > 0 ether, "pool is empty bozo");
        payable(owner).transfer(address(this).balance);
        poolBalance = 0;
    }

    function addPoolBalance() public onlyOwner payable  {
        require(msg.value > 0 ether, "add more bozo");
        poolBalance += msg.value;
        emit FundsDeposited(msg.sender, msg.value);
    }
}
