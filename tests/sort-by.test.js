import { describe, it, expect } from "vitest";
import sortBy from "../src/sort-by"; // ajuste caso o path real seja outro

describe("Sort()", () => {
  it("returns a function", () => {
    expect(typeof sortBy()).toBe("function");
  });
});

describe("Sort(prop)", () => {
  it("sorts an array of objects using given property name", () => {
    const array = [
      { x: 4, y: 1, z: { a: 2 } },
      { x: 3, y: 1, z: { a: 3 } },
      { x: 2, y: 3, z: { a: 3 } },
      { x: 1, y: 2, z: { a: 1 } },
    ];

    array.sort(sortBy("x"));

    expect(array[0]).toEqual({ x: 1, y: 2, z: { a: 1 } });
    expect(array[3]).toEqual({ x: 4, y: 1, z: { a: 2 } });
  });

  it("sorts case-insensitively by applying a function", () => {
    const array = [
      { name: "Hummingbird" },
      { name: "swallow" },
      { name: "Finch" },
      { name: "Sparrow" },
      { name: "cuckoos" },
    ];

    array.sort(sortBy("name"));

    expect(array.map((a) => a.name)).toEqual([
      "Finch",
      "Hummingbird",
      "Sparrow",
      "cuckoos",
      "swallow",
    ]);

    array.sort(
      sortBy("name", (key, value) => {
        return key === "name" ? value.toLowerCase() : value;
      })
    );

    expect(array.map((a) => a.name)).toEqual([
      "cuckoos",
      "Finch",
      "Hummingbird",
      "Sparrow",
      "swallow",
    ]);
  });
});

describe("Sort(prop, prop)", () => {
  it("sorts using multiple properties", () => {
    const array = [
      { x: 4, y: 1 },
      { x: 3, y: 1 },
      { x: 2, y: 3 },
      { x: 1, y: 2 },
    ];

    array.sort(sortBy("y", "x"));

    expect(array[0]).toEqual({ x: 3, y: 1 });
    expect(array[3]).toEqual({ x: 2, y: 3 });
  });
});

describe("Sort(-prop)", () => {
  it("reverses sort order", () => {
    const array = [
      { x: 4, y: 1 },
      { x: 3, y: 1 },
      { x: 2, y: 3 },
      { x: 1, y: 2 },
    ];

    array.sort(sortBy("-y", "x"));

    expect(array[0]).toEqual({ x: 2, y: 3 });
    expect(array[3]).toEqual({ x: 4, y: 1 });
  });
});

describe("Sort(prop.prop)", () => {
  it("sorts nested properties", () => {
    const array = [
      { x: 4, y: 1, z: { a: 2 } },
      { x: 3, y: 1, z: { a: 3 } },
      { x: 2, y: 3, z: { a: 3 } },
      { x: 1, y: 2, z: { a: 1 } },
    ];

    array.sort(sortBy("z.a", "y"));

    expect(array[0]).toEqual({ x: 1, y: 2, z: { a: 1 } });
    expect(array[3]).toEqual({ x: 2, y: 3, z: { a: 3 } });
  });
});

describe("Sort(-prop.prop)", () => {
  it("reverse sorts nested properties", () => {
    const array = [
      { x: 4, y: 1, z: { a: 2 } },
      { x: 3, y: 1, z: { a: 3 } },
      { x: 2, y: 3, z: { a: 3 } },
      { x: 1, y: 2, z: { a: 1 } },
    ];

    array.sort(sortBy("-z.a", "y"));

    expect(array[0]).toEqual({ x: 3, y: 1, z: { a: 3 } });
    expect(array[3]).toEqual({ x: 1, y: 2, z: { a: 1 } });
  });
});
