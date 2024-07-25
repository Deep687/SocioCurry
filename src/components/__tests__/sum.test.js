import { describe, it, expect } from "vitest";
import Sum from "../sum";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(Sum(1, 2)).toBe(3);
  });

  it("adds -1 + -1 to equal -2", () => {
    expect(Sum(-1, -1)).toBe(-2);
  });
});
