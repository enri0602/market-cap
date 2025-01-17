import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FLDT = "577f0b1342f8f8f4aed3388b80a8535812950c7a892495c0ecdf0f1e0014df10464c4454";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FLDT, [
    "addr1w9sl503298lcpaqxtny68ex0cvxm42r2zzg2f8q9z2ggk9gw90cus",
    "addr1w9y5n85ltkjtwe53w5ngchsr9k3lvxnqhh3hvgmhy94e9ashq6g7s",
    "addr1wys3y9grqekln0f762mksc7daw9t53l5pappcvzz7w4zzlcuj8003",
    "addr1w8tc2gyudj9xnp4rfs5mefcnv3l4czqmvyd2es9yazy74hczqczwu",
    "addr1w96g27xgq67hsr8y4uha962jz7740ewqavwxftzycs4lpqgtynjww",
    "addr1w9jcqztr0988uurdsaz63ln47e08qq6yndu40umtz22glrs32sezm",
    "addr1wxw27ym03fwrvlcztx76p7t9spu4n0zmqg35jesjwnakuesr8q9wx",
    "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr",
    "addr1q9gxe8vx0kvv5g6gv4n5wmsxexjqsjftc599qqcp2vkmmwh7snv5yhw2qqvdev3c7wn6s3xhrnx25eg6zcqjxj9vrv2s0e38ze",
    "addr1v88anmxf0wh2uhck5cnltuft8x3k5pclc8e4mpdr8ju23mcjjd05d"
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
