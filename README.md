# Arbitrum AI Copilot

AI-powered DeFi strategist for Arbitrum. Describe your goal in plain language, get pool recommendations, and execute on-chain with one click.

**Built for Arbitrum Open House NYC Buildathon** (deadline: 22 Feb 2026)

## 🚀 Features
- Natural language strategy input
- Real-time pool data via The Graph
- Rule-based scoring (APY, TVL, Liquidity)
- One-click execute on Arbitrum Goerli via RainbowKit
- Minimal UI – works in seconds

## 🛠 Tech Stack
- Vue 3 + TypeScript + Vite
- RainbowKit + Wagmi (wallet connect)
- The Graph (Arbitrum subgraph)
- Rule-based scoring (no external AI calls)
- BlazerJob for task orchestration

## 📦 Quickstart
```bash
npm install
npm run dev
```

Configure `.env`:
```
VITE_WALLETCONNECT_PROJECT_ID=your_project_id
```

## 🎯 Demo
1. Connect wallet (Goerli testnet)
2. Enter strategy: "Invest 1000 USDC in safest yield farm"
3. Click Analyze → see best pool with score
4. Click Execute → sign tx, get hash

## 💡 Note
This project builds on the traction of [Alkimo.app](https://alkimo.app) – already has paying customers, proving the AI agent concept works.

## 📝 License
MIT