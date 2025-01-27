import { defineMarket } from "@/sdk/constants";

export default defineMarket({
  id: `1_0_0xd70673b98af7096f575717d70fbf2fa935dd719926b55c0e011480678cdac563`,
  name: `Provide sUSDa-USDa Liquidity on Kodiak`,
  description: `Deposit sUSDa-USDa Uniswap V2 LP token(s) on Ethereum Mainnet and bridge these assets to Berachain. On Berachain, provide liquidity in the sUSDa-USDa Kodiak Island, an automated liquidity management vault that tokenizes a &quot;concentrated&quot; range Uniswap V3 style liquidity position. 

Earn DEX LP fees, as well as rewards from Berachain, Avalon, and Kodiak. This is part of the Berachain'&#x27;'s Boyco pre-deposit campaign.  

3% of the Kodiak token supply is allocated to Boyco, proportional to TVL * multiplier. This specific market has a ~1x multiplier for Bodiak points. More info on Kodiak's Boyco rewards: https://docs.kodiak.finance/kodiak-boyco`,
  is_verified: true,
  category: `boyco`,
  incentive_ids: ["1-0x31dd27d7479b09f1c96aa94681845c0eb0026ef8"],
  external_incentives: [
    {
      token_id: "1-0x8a60e489004ca22d775c5f2c657598278d17d9c2",
      label: "Avalon AVL Rewards",

      value: async ({ roycoClient, chainClient }) => {
        const value = "TBD";
        return value;
      },
    },
    {
      token_id: "1-0x8a60e489004ca22d775c5f2c657598278d17d9c2",
      label: "Avalon sUSDa Yield",

      value: async ({ roycoClient, chainClient }) => {
        const value = "Variable Rate (on sUSDa tvl)";
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
