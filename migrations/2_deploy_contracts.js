var ProductTracker = artifacts.require("./ProductTracker.sol");

module.exports = function(deployer) {
  deployer.deploy(ProductTracker);
};