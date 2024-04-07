import hre, { ignition } from 'hardhat';
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { expect } from 'chai';

describe("Factory", function () {
  const FactoryModule = buildModule("Factory", (m) => {
    const owner = m.getParameter("owner");
    const factory = m.contract("UniswapV2Factory", [owner]);
    return { factory };
  });

  const TokenModule = buildModule("Token", (m) => {
    const name = m.getParameter("name");
    const symbol = m.getParameter("symbol");
    const token = m.contract("ERC20", [name, symbol]);
    return { token };
  });

  it("Check Factory", async function() {
    const _accounts = await hre.ethers.getSigners();
    const owner = _accounts[0];
    const {factory} = await ignition.deploy(FactoryModule, {
      parameters: {
        Factory: {
          owner: await owner.getAddress(),
        }
      }
    });
    const {token: token0} = await ignition.deploy(TokenModule, {
      parameters: {
        Token: {
          name: "Token0",
          symbol: "T0",
        }
      }
    });
    const {token: token1} = await ignition.deploy(TokenModule, {
      parameters: {
        Token: {
          name: "Token1",
          symbol: "T1",
        }
      }
    });
    const token0Addr = await token0.getAddress();
    const token1Addr = await token1.getAddress();
    await factory.createPair(token0Addr, token1Addr);
    const pairAddress = await factory.getPair(token0Addr, token1Addr);
    console.log(pairAddress);
    await factory.createPair(token0Addr, token1Addr);
  })
});