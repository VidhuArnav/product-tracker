# product-tracker
A Blockchain enabled DApp for Supply chains

This is a web-based Etheruem DApp made using Truffle.

## Setup
### Setting up compatible Metamask
<br>The Set-up for this web-app for regular use requires an older version of Metamask <a href="https://github.com/MetaMask/metamask-extension/releases/tag/v6.6.1">extension</a>.
* Download the zip file for the extension for your browser by clicking on the above link. Extract the zip folder into a local depository. 
* Open your browser and navigate to 'manage extensions'.
* Toggle switch to developer mode. Disable all previous versions of Metamask.
* Click on 'Load Unpacked' and browse to the earlier extracted folder and select that folder.
### Setting up local blockchain on Ganche and other dependencies. 
<br>In case the project needs to be run/tested on a local blockchain download <a href="http://truffleframework.com/ganache">Ganache</a> to quickly setup your local blockchain.
<br>This is also advisable since doing transactions on any blockchain costs gas fees.
  * Once the local blockchain is set-up(please read this <a href="https://www.trufflesuite.com/docs/ganache/workspaces/the-quickstart-workspace">guide</a>), we need to connect Metamask with the local blockchain.
  * To do this open your browser and click on the metamask extension.
  * By default the Metamask had created your account on the Ethereum Mainnet. We need to click on the 'Mainnet'. In the dropdown we will then be able to see Ethereum test servers.
  * We need to connect to a custom RPC. The details can be copy pasted from the Ganache Gui that has our local blockchain running for us. The default Chain Id is currently 1337 for Ganche.
  * Once on RPC is configured on Metamask we also need to add our first account/block from the blockchain. For this we copy the private key from the Ganache GUI by clicking on the key icon on the first block.
  * Then head on over to Metamask on the browser and click on the circular profile icon to which lists all your accounts. Select import account and paste the key. Your Local Blockchain is now connected to the Metamask which will act as a go between the app and your wallet.
<br>Next we need to <a href="https://www.trufflesuite.com/docs/ganache/truffle-projects/linking-a-truffle-project">show</a> our Blockchain where our Truffle project is located.

### Launch

* On a new command prompt,
  * Navigate to the project directory using cd command
  * Type command "truffle migrate" to deploy the contract onto the blockchain. You might be able to see the changes in Ganche GUI. You can explore your contracts and events etc also there.
* On a new command prompt, navigate to the project directory using cd command.
* Run command "npm run dev" to launch our webDApp on the browser using liteserver. 
* Allow permissions on the Metamask to allow the the webDApp to get access to our current account.
* Once your account shows up on the top right corner like this we are good to go!

![image](https://user-images.githubusercontent.com/57732921/115723783-f2955d00-a39d-11eb-97dc-bb7ab258e941.png)
