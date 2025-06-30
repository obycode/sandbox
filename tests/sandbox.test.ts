import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;
const m: Map<number, number> = new Map<number, number>();

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/clarinet/feature-guides/test-contract-with-clarinet-sdk
*/

describe("example tests", () => {
  it("ensures simnet is well initalised", () => {
    m.set(1, 2);
    expect(simnet.blockHeight).toBeDefined();
  });

  it("shows an example", () => {
    const { result } = simnet.callPublicFn(
      "SP2QEZ06AGJ3RKJPBV14SY1V5BBFNAW33D96YPGZF.BNS-V2",
      "transfer",
      [
        Cl.uint(311012),
        Cl.principal("SP1E7DEJG95E0EBZFFGEFGE0QX6Y0CR5V79615FB2"),
        Cl.principal("SP1HJZE02RCQMJCA35CPT8PEZS7Q7KSX2CF37XCG6"),
      ],
      "SP1E7DEJG95E0EBZFFGEFGE0QX6Y0CR5V79615FB2"
    );
    expect(result).toBeOk(Cl.uint(1));
  });
});
