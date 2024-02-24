<h3 align="center">
   Crypto All In One
   <br>
</h3>

<div align="center">
   <p align="center">This package streamlines the rapid development of cutting-edge decentralized applications.</p>
</div>

## Note: This package is still in development and is not yet ready for production use.

This package is built upon the foundations of [Web3Modal](https://docs.walletconnect.com/web3modal/about) and [Wagmi](https://wagmi.sh/react/why), and holds immense appreciation for the creators of these tools.

## Table of Contents

  - [Features](#features)
  - [Installing](#installing)
  - [Example](#example)
  - [Credits](#credits)
  - [License](#license)

## Features
* Hook:
- Custom hook for authenticate suport multi chain/multi wallet: Done
- Custom hook for get balance: Done
* Function:
- Function for staking: Done
- Function for swap: Inprocess
- Function for yield farm: Inprocess
* Component:
- Swap: Inprocess
- Search Token: Inprocess
- Stake: Inprocess
- Yield Farm: Inprocess

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installing

### Package manager

Using npm:

```bash
$ npm install crypto-all-in-one
```

Using bower:

```bash
$ bower install crypto-all-in-one
```

Using yarn:

```bash
$ yarn add crypto-all-in-one
```

Using pnpm:

```bash
$ pnpm add crypto-all-in-one
```

After installation, you need to create a .env file containing the necessary smart contracts to fully utilize the functionalities of the dapp:

> **Note**: You need to get the smart contracts from the blockchain you are working with. Suport with PancakeSwap V2 Contract, PancakeSwap V2 Router, Staking Contract, and Token Contract

```js
NEXT_PUBLIC__FACTORY_SWAP = 

NEXT_PUBLIC__ROUTER_SWAP = 

NEXT_PUBLIC__STAKING_NATIVE = 

NEXT_PUBLIC__STAKING_MAIN_TOKEN = 

NEXT_PUBLIC__WRAP_NATIVE_ADDRESS = 

NEXT_PUBLIC__MAIN_TOKEN_ADDRESS = 
```

```js
import { CryptoWrapper } from 'crypto-all-in-one';
```

## Example

> **Note**: You need project Id to use this package
> Go here to get your project id [Wallet Connect Sign In](https://cloud.walletconnect.com/sign-in)

```js
<CryptoWrapper projectId='<YOUR_PROJECT_ID>'>
  {/* YOUR COMPONENTS GO HERE */}
</CryptoWrapper>
```

> **Note**: default chain is BSC testnet, you can change to any chain you want by push chain list to this component
```js
import chains from 'crypto-all-in-one';
const {bsc, base} = chains;
<CryptoWrapper projectId='<YOUR_PROJECT_ID>' chainList={[bsc, base]}>
  {/* YOUR COMPONENTS GO HERE */}
</CryptoWrapper>
```

Using authenticate hook

```js
const { address, connect, disconnect, status, loading } = useCustomConnectWallet();
```

Using balance hook

```js
const { balance, setMaxBalanceValue } = useCustomBalance()
```
> **Note**: you can get any blance of any token by push token address to this hook, and max number you want fixed
```js
const { balance, setMaxBalanceValue } = useCustomBalance('YOUR_TOKEN_ADRESS', 'DECIMAL_FIXED')
```

## License

[MIT](LICENSE)