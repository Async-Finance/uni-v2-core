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
```

# Deploy zksync
Change default network to any zksync network(eg. zkSyncTestnetSepolia) in `hardhat.config.ts`
```
yarn deploy-zksync
```