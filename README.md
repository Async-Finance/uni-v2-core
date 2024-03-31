# Setup
Create a file `.env`
```
SECRET_KEY=YOUR_WALLET_SECRET_KEY
```

# Compile
`yarn compile`

# Test
TODO...

# Deploy
## Deploy Factory.sol
Change the `owner` Param in `ignition/parameters.json`.
```
yarn deploy
```

# Deploy zksync

Change default network to any zksync network(eg. zkSyncTestnetSepolia) in `hardhat.config.ts`

```
yarn deploy-zksync
```


Forked from [Uniswap v2-core](https://github.com/Uniswap/v2-core)
Make some changes

* `UniswapV2Factory.sol` Change `createPair` Function. Use `new UniswapV2Pair()` to create pair instead of using `create2`
* Upgrade solidity version from `0.5.16` to `0.8.0`