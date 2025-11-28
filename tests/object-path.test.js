import { describe, it, expect } from "vitest";
import sortBy from "../src/object-path";

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

    expect(array[0].x).toBe(1);
    expect(array[0].y).toBe(2);
    expect(array[3].x).toBe(4);
    expect(array[3].y).toBe(1);
  });

  it("sorts an array case-insensitively by applying a function", () => {
    let array = [
      { name: "Hummingbird" },
      { name: "swallow" },
      { name: "Finch" },
      { name: "Sparrow" },
      { name: "cuckoos" },
    ];

    array.sort(sortBy("name"));

    expect(array[0].name).toBe("Finch");
    expect(array[1].name).toBe("Hummingbird");
    expect(array[2].name).toBe("Sparrow");
    expect(array[3].name).toBe("cuckoos");
    expect(array[4].name).toBe("swallow");

    array.sort(
      sortBy("name", (key, value) => {
        return key === "name" ? value.toLowerCase() : value;
      })
    );

    expect(array[0].name).toBe("cuckoos");
    expect(array[1].name).toBe("Finch");
    expect(array[2].name).toBe("Hummingbird");
    expect(array[3].name).toBe("Sparrow");
    expect(array[4].name).toBe("swallow");
  });
});

describe("Sort(prop, prop)", () => {
  it("sorts an array of objects using multiple property names", () => {
    const array = [
      { x: 4, y: 1, z: { a: 2 } },
      { x: 3, y: 1, z: { a: 3 } },
      { x: 2, y: 3, z: { a: 3 } },
      { x: 1, y: 2, z: { a: 1 } },
    ];

    array.sort(sortBy("y", "x"));

    expect(array[0].x).toBe(3);
    expect(array[0].y).toBe(1);
    expect(array[3].x).toBe(2);
    expect(array[3].y).toBe(3);
  });
});

describe("Sort(-prop)", () => {
  it("reverses the sort order", () => {
    const array = [
      { x: 4, y: 1, z: { a: 2 } },
      { x: 3, y: 1, z: { a: 3 } },
      { x: 2, y: 3, z: { a: 3 } },
      { x: 1, y: 2, z: { a: 1 } },
    ];

    array.sort(sortBy("-y", "x"));

    expect(array[0].x).toBe(2);
    expect(array[0].y).toBe(3);
    expect(array[3].x).toBe(4);
    expect(array[3].y).toBe(1);
  });
});

describe("Sort(prop.prop)", () => {
  it("sorts an array of objects with nested properties", () => {
    const array = [
      { x: 4, y: 1, z: { a: 2 } },
      { x: 3, y: 1, z: { a: 3 } },
      { x: 2, y: 3, z: { a: 3 } },
      { x: 1, y: 2, z: { a: 1 } },
    ];

    array.sort(sortBy("z.a", "y"));

    expect(array[0].x).toBe(1);
    expect(array[0].y).toBe(2);
    expect(array[3].x).toBe(2);
    expect(array[3].y).toBe(3);
  });
});

describe("Sort(-prop.prop)", () => {
  it("reverse sorts an array of objects with nested properties", () => {
    const array = [
      { x: 4, y: 1, z: { a: 2 } },
      { x: 3, y: 1, z: { a: 3 } },
      { x: 2, y: 3, z: { a: 3 } },
      { x: 1, y: 2, z: { a: 1 } },
    ];

    array.sort(sortBy("-z.a", "y"));

    expect(array[0].x).toBe(3);
    expect(array[0].y).toBe(1);
    expect(array[3].x).toBe(1);
    expect(array[3].y).toBe(2);
  });
});
