# Hackathon Arbitrum AI Copilot – TODO List

**Deadline soumission** : 22 fév 2026 16h59 UTC  
**Repo** : https://github.com/QuenumGerald/arbitrum-ai-copilot  
**État** : 10h59 CET 20/02/2026 – Interface complète, scoring OK, transaction à implémenter

---

## ✅ Already Done
- [x] Vite + Vue 3 + TS setup
- [x] RainbowKit + Wagmi config (Arbitrum Goerli)
- [x] StrategyInput component (Vue)
- [x] GraphQL client (The Graph) – fetch pools Arbitrum
- [x] Scoring algorithm (APY/TVL/Liquidity)
- [x] UI wallet connect + display best pool

---

## 🚨 Urgent – To Do (before submission)

### 1. Transaction Execution (critical)
- [ ] Create a simple Solidity contract for "deposit" on Goerli testnet (or use an existing Uniswap pool mock)
- [ ] Deploy the contract to Goerli (via Remix or hardhat)
- [ ] In `App.vue`, implement `executeStrategy()` using `useSendTransaction` from wagmi
- [ ] Sign and send a real tx from connected wallet to the deployed contract
- [ ] Display tx hash and explorer link in UI
- [ ] Handle errors (user rejects, insufficient gas)

**Deliverable**: button "Execute on Goerli" that sends a real transaction and shows confirmation.

---

### 2. Deploy & Configure
- [ ] Deploy the Arbitrum AI Copilot frontend to Vercel/Netlify (or keep local for video)
- [ ] Ensure Goerli testnet is selected in wagmi config
- [ ] Add contract address and ABI to `src/graphql/arbitrum-subgraph.ts` (if needed)

---

### 3. Demo Video (< 3 min)
- [ ] Record screen:
  1. Connect wallet (MetaMask + Goerli)
  2. Enter strategy: " Invest 1000 USDC in safest yield farm on Arbitrum "
  3. Show loading and results (best pool displayed)
  4. Click "Execute" and show tx sent + hash
  5. Show tx on Arbitrum Goerli explorer
- [ ] Edit video (add captions, cuts)
- [ ] Upload to YouTube (unlisted) or Loom

---

### 4. Submission on HackQuest
- [ ] Fill project details (title, description, team, tech stack)
  - Mention existing traction: "Alkimo.app already has paying customers – this is an extension for DeFi on Arbitrum"
- Paste video URL
- Link to GitHub repo (already created)
- Submit before 22 fév 16h59 UTC

---

### 5. Optional Enhancements (if time)
- [ ] Add DeepSeek API for natural language parsing (parsing amount, risk)
- [ ] Cache The Graph responses in localStorage
- [ ] Add multiple pool options with compare table
- [ ] Add risk meter visualization

---

## 📞 Support
- If stuck on contract: use a minimal mock that just emits an event
- If stuck on wagmi tx: use `writeContract` with a simple `deposit(uint256 amount)` function
- Test on Goerli first with small amount (0.001 ETH for gas)

---

**Remember**: The hackathon values *working product* on Arbitrum. Even a simple deposit tx is enough if it works and is demonstrated. Focus on completing steps 1-4.

Good luck – you got this! ⚡