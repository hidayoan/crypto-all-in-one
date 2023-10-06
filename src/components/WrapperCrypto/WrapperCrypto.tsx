import React from "react";
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { base } from 'wagmi/chains'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

export interface WrapperCryptoProps {
  children: React.ReactNode;
  projectId: string;
  chains: any[];
}

const WrapperCrypto = ({ children, projectId, chains }: WrapperCryptoProps) => {
  const { publicClient } = configureChains(chains, [w3mProvider({ projectId: projectId })])
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId: projectId, chains }),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        {children}
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={chains?.[0]?.chainId}
      />
    </>
  )

}

export default WrapperCrypto