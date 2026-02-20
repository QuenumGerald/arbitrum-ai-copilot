import { request, gql } from 'graphql-request'

const SUBGRAPH_URL = 'https://api.studio.thegraph.com/query/xxxx/arbitrum-subgraph/0.0.1' // TODO: replace with real endpoint

export interface Pool {
  id: string
  name: string
  apy: number
  tvl: number
  liquidity: number
  risk: number // 0-1
}

export async function fetchPools(): Promise<Pool[]> {
  const query = gql`
    query {
      pools(orderBy: tvl, orderDirection: desc, first: 20) {
        id
        name
        apy
        tvl
        liquidity
      }
    }
  `
  try {
    const data = await request<{ pools: Pool[] }>(SUBGRAPH_URL, query)
    // Map risk = 1 - (liquidity / tvl) as simple heuristic
    return data.pools.map(p => ({
      ...p,
      risk: Math.max(0, 1 - (p.liquidity / p.tvl))
    }))
  } catch (error) {
    console.error('GraphQL error:', error)
    return []
  }
}