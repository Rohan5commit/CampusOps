import { describe, it, expect, beforeEach } from "vitest";
import { summarizeMeeting, answerQuestion } from "../lib/ai";

beforeEach(() => {
  delete process.env.NIM_API_KEY;
});

describe("ai fallback", () => {
  it("returns deterministic summary shape", async () => {
    const res = await summarizeMeeting("notes");
    expect(res.summary.length).toBeGreaterThan(10);
    expect(res.actionItems.length).toBeGreaterThan(0);
    expect(Array.isArray(res.decisions)).toBe(true);
  });

  it("returns answer with citations", async () => {
    const res = await answerQuestion("ctx", "q", ["Doc1"]);
    expect(res.answer.length).toBeGreaterThan(10);
    expect(res.citations).toContain("Doc1");
  });
});
