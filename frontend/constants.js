const contractAddress = "0x8cbC3C78b38f82933c360348739afD7ef0CD21b9"
// const contractAddress = "0x6B1b2bed91137659E08e56d6CbC11DbF9e18bDaB"

const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hasher",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_verifier",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_relayer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_loanPercent",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_weth",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "commitment",
          "type": "uint256"
        }
      ],
      "name": "CommitmentAlreadyRegistered",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "IndexOutOfBound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidProof",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidRoot",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MerkleTreeFull",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NullifierAlreadyUsed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PaymentFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "WrongAmountDeposited",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "root",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256[10]",
          "name": "hashPairings",
          "type": "uint256[10]"
        },
        {
          "indexed": false,
          "internalType": "uint8[10]",
          "name": "pairDirections",
          "type": "uint8[10]"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "premium",
          "type": "uint256"
        }
      ],
      "name": "FlashLoanEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nullifierHash",
          "type": "uint256"
        }
      ],
      "name": "Withdrawal",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "commitment",
          "type": "uint256"
        }
      ],
      "name": "commitments",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isRegistered",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "denomination",
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
          "internalType": "uint256",
          "name": "_commitment",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "receiverAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "executeFlashLoanSimple",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hasher",
      "outputs": [
        {
          "internalType": "contract Hasher",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "root",
          "type": "uint256"
        }
      ],
      "name": "knownRoots",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isKnown",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "level",
          "type": "uint8"
        }
      ],
      "name": "lastLevelHash",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "levelHash",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextLeafIndex",
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
          "internalType": "uint256",
          "name": "nullifier",
          "type": "uint256"
        }
      ],
      "name": "nullifiers",
      "outputs": [
        {
          "internalType": "bool",
          "name": "hasBeenUsed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "treeLevel",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "verifier",
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
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

module.exports = {
    contractAddress,
    contractABI
}