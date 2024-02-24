import React from 'react'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'
import { publicProvider } from 'wagmi/providers/public'

import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { CryptoWrapperType } from '../helpers/type';


import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { bscTestnet } from 'viem/chains'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// config crypto


function CryptoWrapper({ children, projectId, chainlist = [bscTestnet] }: CryptoWrapperType) {
  const chains = chainlist
  const { publicClient } = configureChains(chains, [walletConnectProvider({ projectId }), publicProvider()])

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
      new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
      new EIP6963Connector({ chains }),
      new InjectedConnector({ chains, options: { shimDisconnect: true } }),
      new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
    ],
    publicClient
  })
  createWeb3Modal({ wagmiConfig, projectId, chains })

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        {children}
      </WagmiConfig>

    </>
  )
}

export default CryptoWrapper