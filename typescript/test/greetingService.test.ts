import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildGreeting } from "../src/greetingService.ts";

describe("buildGreeting", () => {
  it("greets without a supplied name", () => {
    assert.equal(buildGreeting(), "Hello!");
  });

  it("greets a supplied name", () => {
    assert.equal(buildGreeting("Engineer"), "Hello, Engineer!");
  });

  it("trims surrounding whitespace", () => {
    assert.equal(buildGreeting("  Celo  "), "Hello, Celo!");
  });
});
