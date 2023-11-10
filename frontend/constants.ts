export const contractAddress = "0xDE6A32C6b36fe7BAc4Dcc706700224E0c7CBf32A";
export const contractABI = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "loser",
            "type": "address"
        }
    ],
    "name": "LoseEvent",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "winner",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "WinEvent",
    "type": "event"
},
{
    "inputs": [],
    "name": "addPoolBalance",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "bet",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint8",
            "name": "choice",
            "type": "uint8"
        }
    ],
    "name": "flip",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "getBetHistory",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "betAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "outcome",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "betWinnings",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "internalType": "struct Coinflip.Bet[]",
            "name": "",
            "type": "tuple[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "owner",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "result",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "withdrawPoolBalance",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}]

