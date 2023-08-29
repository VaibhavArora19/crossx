require("@nomicfoundation/hardhat-toolbox");
//dotenv
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
      viaIR: true,
    },
  },

  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s2.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY],
    },
    avalanche: {
      url: "https://rpc.ankr.com/avalanche_fuji",
      accounts: [process.env.PRIVATE_KEY],
    },
    arbitrum: {
      url: "https://endpoints.omniatech.io/v1/arbitrum/goerli/public",
      accounts: [process.env.PRIVATE_KEY],
    },

    optimism: {
      url: "https://goerli.optimism.io",
      accounts: [process.env.PRIVATE_KEY],
    },

    hyperspace: {
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGON_API_KEY,
      optimisticGoerli: process.env.OPTIMISM_API_KEY,
      bscTestnet: process.env.BSC_API_KEY,
      goerli: process.env.GOERLI_API_KEY,
      arbitrumGoerli: process.env.ARBITRUM_API_KEY,
      avalancheFujiTestnet: process.env.AVALANCHE_API_KEY,
    },
  },
  customChains: [
    {
      network: "chiado",
      chainId: 5,
      urls: {
        apiURL: "https://api-goerli.etherscan.io/api",
        browserURL: "https://goerli.etherscan.io",
      },
    },
  ],
};
