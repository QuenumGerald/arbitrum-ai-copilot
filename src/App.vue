<script setup lang="ts">
import { ref, computed } from 'vue'
import { mainnet, arbitrum, arbitrumGoerli } from 'wagmi/chains'
import { WagmiProvider, useAccount, useConnect, useDisconnect } from 'wagmi/vue'
import { config } from './wagmi.config'
import StrategyInput from './components/StrategyInput.vue'
import { fetchPools, Pool } from './graphql/arbitrum-subgraph'

const { isConnected, address } = useAccount()
const { connect, connectors } = useConnect()
const { disconnect } = useDisconnect()

const pools = ref<Pool[]>([])
const bestPool = ref<Pool | null>(null)
const loading = ref(false)
const executedTx = ref<string | null>(null)

async function handleAnalyze(strategy: string) {
  loading.value = true
  // Simple rule-based parsing (mock for demo)
  // In real: parse strategy for amount, risk tolerance, etc.
  pools.value = await fetchPools()
  if (pools.value.length > 0) {
    // Score: apy*0.4 + tvl*0.3 + liquidity*0.2 - risk*0.1 (normalized)
    bestPool.value = pools.value[0]
  }
  loading.value = false
}

async function executeStrategy() {
  // Here we would use wagmi to send a transaction on Arbitrum Goerli
  // For demo, we just set a fake tx hash
  executedTx.value = '0x' + Math.random().toString(16).slice(2) + '...'
}
</script>

<template>
  <div class="container">
    <header>
      <h1>⚡ Arbitrum AI Copilot</h1>
      <div v-if="isConnected">
        <p>Connected: {{ address }}</p>
        <button @click="disconnect()">Disconnect</button>
      </div>
      <div v-else>
        <button v-for="c in connectors" :key="c.id" @click="connect({ connector: c })">
          Connect {{ c.name }}
        </button>
      </div>
    </header>

    <main>
      <StrategyInput @analyze="handleAnalyze" />

      <div v-if="loading">Loading pools...</div>
      <div v-else-if="bestPool">
        <h2>Recommended Pool</h2>
        <pre>{{ bestPool }}</pre>
        <button @click="executeStrategy">Execute on Goerli</button>
      </div>

      <div v-if="executedTx">
        <h3>Transaction Sent!</h3>
        <p>Tx: {{ executedTx }}</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  margin: 0.25rem;
  padding: 0.5rem 1rem;
}
</style>
