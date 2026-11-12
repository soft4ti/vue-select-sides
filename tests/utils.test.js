import { describe, it, expect } from "vitest";
import { addUniqueValues } from "../src/utils";

describe("addUniqueValues()", () => {
  it("adds new values", () => {
    expect(addUniqueValues(["a"], ["b", "c"])).toEqual(["a", "b", "c"]);
  });

  it("ignores values already present (select all clicked twice)", () => {
    const all = ["a", "b", "c"];
    const first = addUniqueValues([], all);
    const second = addUniqueValues(first, all);

    expect(first).toEqual(all);
    expect(second).toEqual(all);
  });

  it("does not duplicate values repeated inside the input", () => {
    expect(addUniqueValues([], ["a", "a", "b"])).toEqual(["a", "b"]);
  });

  it("treats number and string representations as equal", () => {
    expect(addUniqueValues([1], ["1", 2])).toEqual([1, 2]);
  });

  it("does not mutate the original array", () => {
    const original = ["a"];
    addUniqueValues(original, ["b"]);

    expect(original).toEqual(["a"]);
  });
});
