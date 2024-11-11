const Healthcare = artifacts.require("Healthcare");

module.exports = async function (deployer) {
  const ownerAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with a valid address
  const contractName = "Healthcare Contract";
  await deployer.deploy(Healthcare, ownerAddress, contractName);
};
