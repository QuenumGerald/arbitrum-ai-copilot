<script setup lang="ts">
import { ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'

const emit = defineEmits(['analyze'])

const strategyInput = ref('')

function handleSubmit() {
  if (strategyInput.value.trim()) {
    emit('analyze', strategyInput.value)
  }
}
</script>

<template>
  <div class="strategy-input">
    <h2>AI DeFi Strategist</h2>
    <p>Describe your investment goal in natural language</p>
    <textarea v-model="strategyInput" placeholder="e.g. Invest 1000 USDC in the safest yield farm on Arbitrum" rows="3" />
    <button @click="handleSubmit" :disabled="!strategyInput.trim()">Analyze</button>
  </div>
</template>

<style scoped>
.strategy-input {
  margin: 1rem;
}
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>