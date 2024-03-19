import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Factory", (m) => {
  const owner = m.getParameter("owner");
  const factory = m.contract("UniswapV2Factory", [owner]);

  return { factory };
});