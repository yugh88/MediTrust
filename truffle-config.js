require('dotenv').config();  // To load environment variables from a .env file
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // Network configurations
  networks: {
    // Local development network (Ganache)
    development: {
      host: "127.0.0.1",        // Localhost
      port: 7545,               // Default Ganache port
      network_id: "*",          // Matches any network id
    },

    // Goerli test network
    goerli: {
      provider: () => new HDWalletProvider(
        process.env.PRIVATE_KEY,  // Private key stored in .env file
        `https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID`
      ),
      network_id: 5,             // Goerli network ID
      gas: 4500000,              // Gas limit for transactions
      gasPrice: 10000000000,     // Gas price in wei (10 Gwei)
    }
  },

  // Compiler configurations
  compilers: {
    solc: {
      version: "0.8.0",          // Solidity compiler version
      settings: {
        optimizer: {
          enabled: true,         // Enable Solidity optimizer
          runs: 200              // Optimizer settings (runs parameter)
        }
      }
    }
  },

  // Plugin configurations (optional)
  plugins: [
    "truffle-plugin-verify"    // Verify contracts on Etherscan (optional)
  ],

  // Configure the migrations folder (default is 'migrations')
  migrations_directory: "./migrations"
};
