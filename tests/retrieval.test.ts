import { describe, it, expect } from "vitest";
import { rankContext } from "../lib/retrieval";

describe("rankContext", () => {
  it("ranks docs by overlap", () => {
    const docs = [
      { name: "A", content: "sponsor tiers audience metrics timeline" },
      { name: "B", content: "kitchen shopping list groceries" }
    ];
    const out = rankContext("How to improve sponsor metrics?", docs, 1);
    expect(out[0].name).toBe("A");
  });
});
