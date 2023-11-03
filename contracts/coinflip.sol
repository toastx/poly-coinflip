// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Coinflip{
    address public owner;
    uint256 private poolBalance;
    address public user;
    uint256 public bet;
    uint8 private fees = 4;
    uint256 public randomNum;
    uint256 public betWinnings;
    uint256 randNonce;
    bool public result;
   
    event WinEvent(address indexed winner, uint256 amount);
    event LoseEvent(address indexed loser);
    
     constructor() {
        owner = msg.sender;
    }
    function randMod() public returns(uint)
    {
        randNonce++;
        return uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce)));
    } 

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the father can perform this");
        _;
    }

    
    function flip(uint8 choice) external payable {
        require(msg.value == 0.1 ether || msg.value == 0.5 ether || msg.value == 1 ether || msg.value == 2 ether || msg.value == 3 ether || msg.value == 5 ether, "stupid bozo cant even bet");
        require(address(this).balance > 5 ether, "pool is empty bozo");
        bet = msg.value;
        randomNum = randMod();
        if (choice == randomNum%2){
            result = true;
            
        }
        else{
            result = false;
            emit LoseEvent(msg.sender);
        }
        
        if(result){
            betWinnings =  bet *2 - (bet * fees/100);
            emit WinEvent(msg.sender, betWinnings);
            (bool callsuccess,) = payable(msg.sender).call{value: betWinnings}("");
            require(callsuccess,"failed transaction");
            poolBalance-=betWinnings;
        }
    
    }

    function withdrawPoolBalance() public onlyOwner payable  {
        require(address(this).balance > 0 ether, "pool is empty bozo");
        payable(owner).transfer(address(this).balance);
        poolBalance = 0;
    }

    function addPoolBalance() public onlyOwner payable  {
        require(msg.value > 0 ether, "add more bozo");
        poolBalance += msg.value;
        
    }
}
