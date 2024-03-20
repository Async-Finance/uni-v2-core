import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import "dotenv/config";
import { Wallet } from 'zksync-ethers';

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the v2 factory contract`);

  // Initialize the wallet.
  const wallet = new Wallet(process.env.SECRET_KEY || '');
  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("UniswapV2Factory");
  const fee = await deployer.estimateDeployFee(artifact, [wallet.address]);
  console.log("estimateDeployFee -> ", fee.toString());

  console.log(`Deploying ${artifact.contractName}...`);
  const v2factory = await deployer.deploy(artifact, [wallet.address]);

  // Show the contract info.
  const contractAddress = v2factory.target;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
  await hre.run("verify:verify", {
    address: contractAddress,
    contract: "contracts/UniswapV2Factory.sol:UniswapV2Factory",
    constructorArguments: [wallet.address],
  });
}
