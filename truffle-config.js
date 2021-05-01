module.exports = {
  networks: {
    development: {
      // If using Ganache, cross-reference with the GUI once for corrrect parameters. 
      // Also add this file there, in the settings so that the GUI can be used rather than the console to see blockchain statistics/logs/deployments 
      host: "127.0.0.1",
      port: 7545,//port may require changes. 
      network_id: "*" // Match any network id
    },
    // Use command "truffle migrate --reset live" to deploy contract on 'live' network's blockchain, inside the Command prompt or modify packaage.json file with this command.
    // live: {
    //   host: "178.25.19.88", // Random IP for example purposes (do not use)
    //   port: 80,
    //   network_id: 1,        // Ethereum public network
      // optional config values:
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
      // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - function that returns a web3 provider instance (see below.)
      //          - if specified, host and port are ignored.
      // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
      // confirmations: - number of confirmations to wait between deployments (default: 0)
      // timeoutBlocks: - if a transaction is not mined, keep waiting for this number of blocks (default is 50)
      // deploymentPollingInterval: - duration between checks for completion of deployment transactions
      // disableConfirmationListener: - true to disable web3's confirmation listener
    // },
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic from your metamask here, "https://ropsten.infura.io/v3/YOUR-PROJECT-ID");
    //   },
    //   network_id: '3',
    // },
    // or connect via Metamask wallet provider with your account on the ropsten network.
    // ropsten: {
    //   host:"https://api.infura.io/v1/jsonrpc/ropsten"
    //   network_id: '3',
    // },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
