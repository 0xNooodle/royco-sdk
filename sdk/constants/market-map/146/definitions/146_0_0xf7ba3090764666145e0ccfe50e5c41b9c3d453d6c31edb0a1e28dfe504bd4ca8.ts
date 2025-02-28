import { defineMarket } from "@/sdk/constants";

export default defineMarket({
  id: `146_0_0xf7ba3090764666145e0ccfe50e5c41b9c3d453d6c31edb0a1e28dfe504bd4ca8`,
  name: `Deposit S to earn yield with Origin and Silo`,
  description: `When wS is deposited, it is converted into OS, wrapped into wOS, and then is deposited into Silo to earn OS yield, Silo points, and any Royco incentives.`,
  is_verified: true,
 // category: "???",
  // incentive_ids: [],
  // external_incentives: [],
  native_yield: [
    {
      token_id: "146-0xb1e25689d55734fd3fffc939c4c3eb52dff8a794", // Lowercase so I don't die.
      label: "OS Native Yield",
      annual_change_ratio: async () => {
        let annual_change_ratio = 0;

        try {
          const req = await fetch(
            "https://api.originprotocol.com/api/v2/os/apr/trailing",
          );

          const data = (await req.json()) as {
            apr: number; // 1 = 1%
            apy: number; // 1 = 1%
          };

          annual_change_ratio = data.apr / 100; // Fix so .01 = 1%
        } catch (err) {
          // Omit error for clean server logs
        }

        return annual_change_ratio;
      },
    },
  ],
});
});
