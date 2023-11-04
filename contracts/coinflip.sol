// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Coinflip{
    address public owner;
    uint256 private poolBalance;
    uint256 public bet;
    uint8 private fees = 4;
    uint256 private randomNum;
    uint256 private winnings= 0;
    uint256 private netBets = 0;
    uint256 private netWinnings = 0;
    uint256 randNonce;
    uint256 randNonce2;
    bool public result;
    bool private isLocked;

    struct Bet {
        address user;
        uint256 betAmount;
        bool outcome;
        uint256 betWinnings;
        uint256 timestamp;
    }

    mapping(address => Bet[]) internal  userBets;

    event WinEvent(address indexed winner, uint256 amount);
    event LoseEvent(address indexed loser);
    
     constructor() {
        owner = msg.sender;
    }

    function randMod() internal  returns(uint)
    {
        randNonce++;
        randNonce2 = randNonce*2 + block.timestamp;
        return uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce,randNonce2)));
    } 

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the father can perform this");
        _;
    }

    
    function flip(uint8 choice) external payable {
        require(msg.value == 0.1 ether || msg.value == 0.5 ether || msg.value == 1 ether || msg.value == 2 ether || msg.value == 3 ether || msg.value == 5 ether, "stupid bozo cant even bet");
        require(address(this).balance > 5 ether, "pool is empty bozo");
        require(!isLocked, "A flip is already in progress");
        isLocked = true;

        bet = msg.value;
        randomNum = randMod();
        if (choice == randomNum%2){
            result = true;
            netWinnings+=bet;
            
        }
        else{
            result = false;
            emit LoseEvent(msg.sender);
        }

        if(result){
            winnings =  (bet - (bet * fees/100))*2;
            emit WinEvent(msg.sender, winnings);
            (bool callsuccess,) = payable(msg.sender).call{value: winnings}("");
            require(callsuccess,"failed transaction");
            poolBalance-=winnings;
        }

        userBets[msg.sender].push(Bet(msg.sender, bet, result, winnings, block.timestamp));
        
        netBets += bet;
        winnings = 0;
        bet = 0;
        randomNum = 0;
        isLocked = false;

    
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

    function getBetHistory() external view returns (Bet[] memory) {
        return userBets[msg.sender];
    }

    
}
