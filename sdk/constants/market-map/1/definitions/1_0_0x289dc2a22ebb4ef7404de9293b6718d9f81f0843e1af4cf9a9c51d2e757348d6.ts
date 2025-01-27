import { defineMarket } from "@/sdk/constants";

export default defineMarket({
  id: `1_0_0x289dc2a22ebb4ef7404de9293b6718d9f81f0843e1af4cf9a9c51d2e757348d6`,
  name: `Provide WBTC-SBTC Liquidity on Kodiak`,
  description: `Deposit WBTC-SBTC Uniswap V2 LP token(s) on Ethereum Mainnet and bridge these assets to Berachain. On Berachain, provide liquidity in the WBTC-SBTC Kodiak Island, an automated liquidity management vault that tokenizes a &quot;concentrated&quot; range Uniswap V3 style liquidity position. 

Earn DEX LP fees, as well as rewards from Berachain, Stakestone, and Kodiak. This is part of the Berachain&#x27;s Boyco pre-deposit campaign.  

3% of the Kodiak token supply is allocated to Boyco, proportional to TVL * multiplier.  This specific market has a ~2x multiplier for Bodiak points. More info on Kodiak's Boyco rewards: https://docs.kodiak.finance/kodiak-boyco`,
  is_verified: false,
  category: `boyco`,

  external_incentives: [
    {
      token_id: "1-0x7122985656e38bdc0302db86685bb972b145bd3c",
      label: "StakeStone Boyco Bonus",

      value: async ({ roycoClient, chainClient }) => {
        const value = "6x";
        return value;
      },
    },
    {
      token_id: "1-0x31dd27d7479b09f1c96aa94681845c0eb0026ef8",
      label: "DEX Fees",

      value: async ({ roycoClient, chainClient }) => {
        const value = "Variable Rate";
        return value;
      },
    },
  ],
});
