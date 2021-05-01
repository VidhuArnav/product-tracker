# product-tracker
A Blockchain enabled DApp for Supply chains

This is a web-based Etheruem DApp made using Truffle.

## Setup
### Install Node
<br><a href="https://nodejs.org/en/">Install</a> Node on your system to be able to run javascripts in native environment if not already installed.
### Setting up compatible Metamask
<br>The Set-up for this web-app for regular use requires an older version of Metamask <a href="https://github.com/MetaMask/metamask-extension/releases/tag/v6.6.1">extension</a>.
* Download the zip file for the extension for your browser by clicking on the above link. Extract the zip folder into a local depository. 
* Open your browser and navigate to 'manage extensions'.
* Toggle switch to developer mode. Disable all previous versions of Metamask.
* Click on 'Load Unpacked' and browse to the earlier extracted folder and select that folder.

### Setting up local blockchain on Ganche and other dependencies. 
<br>In case the project needs to be run/tested on a local blockchain download <a href="http://truffleframework.com/ganache">Ganache</a> to quickly setup your local blockchain.
<br>This is also advisable since doing transactions on any blockchain costs gas fees. Therefore one might want to test it somewhere else first.
### Connecting Metamask to Ganache; Custom RPC server setup
  * Once the local blockchain is set-up(please read this <a href="https://www.trufflesuite.com/docs/ganache/workspaces/the-quickstart-workspace">guide</a>), we need to connect Metamask with the local blockchain.
  * To do this open your browser and click on the metamask extension.
  * By default the Metamask had created your account on the Ethereum Mainnet. We need to click on the 'Mainnet' to open a drop-down menu. In the dropdown we will then be able to see Ethereum test servers.
  * We need to connect to a custom RPC. The details can be copied from the Ganache GUI that has our local blockchain running for us. The default Chain Id is currently 1337 for Ganche.
  * Once on RPC is configured on Metamask we also need to add our first account/block from the local Ganache blockchain since that is where we will have deployed our contracts by default. For this we copy the private key from the Ganache GUI by clicking on the key icon on the first block/account.
  * Then head on over to Metamask on the browser and click on the circular profile icon which lists all accounts in your wallet. Select import account and paste the  private key. Your Local Blockchain is now connected to the Metamask which will act as a go between the app and your wallet.

### Optional
<br>One can <a href="https://www.trufflesuite.com/docs/ganache/truffle-projects/linking-a-truffle-project">show</a> our local Ganache Blockchain where our Truffle project is located in order to track transactions/deployments etc in an easier manner. This is also available in Metamask and as the web DApp all transactions are logged there too.

### Launch

* Simply double click on the 'product-tracker.exe' for x86 Windows systems and 'product-tracker-32.exe' for the 32-bit Windows system, once you have cloned the repository.
* First launch of the app downloads necessary node_modules from npm. Subsequent launches are faster.
* The app is good to go in your browser once one permissions are granted in Metamask to link to your local Ganache blockchain account. Once done the account name is displayed on top-right as shown below.

![image](https://user-images.githubusercontent.com/57732921/115723783-f2955d00-a39d-11eb-97dc-bb7ab258e941.png)
### Additional
<br>Read comments in truffle-config.js for help in deploying project contracts on blockchains of other networks like ropsten, kovan, etc.
