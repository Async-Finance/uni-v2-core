import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@matterlabs/hardhat-zksync-node";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

import "dotenv/config";


const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: "0.8.18",
      settings: { optimizer: { enabled: true, runs: 200 } }
    }]
  },
  zksolc: {
    version: '1.3.13'
  },
  defaultNetwork: "zkLink",
  networks: {
    Merlin: {
      url: "https://rpc.merlinchain.io",
      accounts: [process.env.SECRET_KEY || ''],
    },
    MerlinTestnet: {
      url: "https://testnet-rpc.merlinchain.io",
      accounts: [process.env.SECRET_KEY || ''],
    },
    zkLink: {
      url: "https://rpc.zklink.io",
      zksync: true,
      ethNetwork: "mainnet",
      verifyURL: "https://explorer.zklink.io/contract_verification",
      accounts: [process.env.SECRET_KEY || ''],
    },
    zkLinkTestnet: {
      url: "https://goerli.rpc.zklink.io",
      zksync: true,
      ethNetwork: "goerli",
      verifyURL: "https://goerli.explorer.zklink.io/contract_verification",
      accounts: [process.env.SECRET_KEY || ''],
    },
    zkSyncTestnetSepolia: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
    },
    zkSyncTestnetGoerli: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "goerli",
      zksync: true,
      verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
    },
    zkSyncMainnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
      verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
  },
  etherscan: {
    apiKey: {
      MerlinTestnet: "merlintestnet",
      Merlin: 'merlin',
    },
    customChains: [
      {
        network: "MerlinTestnet",
        chainId: 686868,
        urls: {
          apiURL: "https://testnet-scan.merlinchain.io/api",
          browserURL: "https://testnet-scan.merlinchain.io"
        }
      },
      {
        network: "Merlin",
        chainId: 4200,
        urls: {
          apiURL: "https://scan.merlinchain.io/api",
          browserURL: "https://scan.merlinchain.io"
        }
      },
      {
        network: "zkLink",
        chainId: 810180,
        urls: {
          apiURL: "https://explorer.zklink.io/contracts/verify",
          browserURL: "https://explorer.zklink.io"
        }
      },
      {
        network: "zkLinkTestnet",
        chainId: 810182,
        urls: {
          apiURL: "https://goerli.explorer.zklink.io/contracts/verify",
          browserURL: "https://goerli.explorer.zklink.io"
        }
      }
    ]
  },
  sourcify: {
    enabled: true
  }
};

export default config;
