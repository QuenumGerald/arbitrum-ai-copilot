import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { arbitrum, arbitrumGoerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrumGoerli],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Arbitrum AI Copilot',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // TODO: replace
  chains
})

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
  chains
})