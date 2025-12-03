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

describe("Edge Cases", () => {
  it("handles empty arrays", () => {
    const array = [];
    array.sort(sortBy("x"));
    expect(array).toEqual([]);
  });

  it("handles arrays with one element", () => {
    const array = [{ x: 1 }];
    array.sort(sortBy("x"));
    expect(array).toEqual([{ x: 1 }]);
  });

  it("handles objects with all equal values", () => {
    const array = [
      { x: 1, id: "a" },
      { x: 1, id: "b" },
      { x: 1, id: "c" },
    ];

    array.sort(sortBy("x"));

    // Deve manter a ordem original (stable sort)
    expect(array[0].id).toBe("a");
    expect(array[1].id).toBe("b");
    expect(array[2].id).toBe("c");
  });
});

describe("Undefined and Null Values", () => {
  it("handles undefined values in properties", () => {
    const array = [
      { x: 3, y: 2 },
      { x: 1 }, // y é undefined
      { x: 2, y: 1 },
      { x: 4, y: 3 },
    ];

    array.sort(sortBy("y", "x"));

    // undefined deve ser tratado como "maior" e ir pro final
    expect(array[0]).toEqual({ x: 2, y: 1 });
    expect(array[1]).toEqual({ x: 3, y: 2 });
    expect(array[2]).toEqual({ x: 4, y: 3 });
    expect(array[3]).toEqual({ x: 1 }); // undefined vai pro final
  });

  it("handles null values in properties", () => {
    const array = [
      { x: 3, y: 2 },
      { x: 1, y: null },
      { x: 2, y: 1 },
      { x: 4, y: 3 },
    ];

    array.sort(sortBy("y", "x"));

    // null deve ser tratado como menor que qualquer número
    expect(array[0]).toEqual({ x: 1, y: null });
    expect(array[1]).toEqual({ x: 2, y: 1 });
    expect(array[2]).toEqual({ x: 3, y: 2 });
    expect(array[3]).toEqual({ x: 4, y: 3 });
  });

  it("handles mix of null, undefined and values", () => {
    const array = [{ x: 3 }, { x: 1, y: null }, { x: 2, y: 5 }, { x: 4 }];

    array.sort(sortBy("y", "x"));

    expect(array[0]).toEqual({ x: 1, y: null }); // null primeiro
    expect(array[1]).toEqual({ x: 2, y: 5 }); // valor real
    // undefined vai pro final
    expect(array[2].x).toBe(3);
    expect(array[3].x).toBe(4);
  });
});

describe("Mixed Data Types", () => {
  it("handles mix of numbers and strings", () => {
    const array = [{ x: "10" }, { x: 2 }, { x: "3" }, { x: 1 }];

    array.sort(sortBy("x"));

    // Comparação lexicográfica: 1 < 2 < "10" < "3"
    expect(array[0]).toEqual({ x: 1 });
    expect(array[1]).toEqual({ x: 2 });
    expect(array[2]).toEqual({ x: "10" });
    expect(array[3]).toEqual({ x: "3" });
  });

  it("handles boolean values", () => {
    const array = [
      { x: true, name: "A" },
      { x: false, name: "B" },
      { x: true, name: "C" },
      { x: false, name: "D" },
    ];

    array.sort(sortBy("x", "name"));

    expect(array[0].name).toBe("B"); // false < true
    expect(array[1].name).toBe("D");
    expect(array[2].name).toBe("A");
    expect(array[3].name).toBe("C");
  });

  it("handles Date objects", () => {
    const array = [
      { date: new Date("2024-03-15") },
      { date: new Date("2024-01-10") },
      { date: new Date("2024-12-20") },
    ];

    array.sort(sortBy("date"));

    expect(array[0].date.getMonth()).toBe(0); // Janeiro
    expect(array[1].date.getMonth()).toBe(2); // Março
    expect(array[2].date.getMonth()).toBe(11); // Dezembro
  });
});

describe("Deep Nested Properties", () => {
  it("sorts deeply nested properties (3+ levels)", () => {
    const array = [
      { a: { b: { c: { d: 4 } } } },
      { a: { b: { c: { d: 1 } } } },
      { a: { b: { c: { d: 3 } } } },
      { a: { b: { c: { d: 2 } } } },
    ];

    array.sort(sortBy("a.b.c.d"));

    expect(array[0].a.b.c.d).toBe(1);
    expect(array[3].a.b.c.d).toBe(4);
  });

  it("handles missing intermediate nested properties", () => {
    const array = [
      { a: { b: { c: 3 } } },
      { a: { b: null } }, // b existe mas é null
      { a: {} }, // b não existe
      { a: { b: { c: 1 } } },
    ];

    array.sort(sortBy("a.b.c"));

    // Valores válidos devem vir primeiro
    expect(array[0].a.b.c).toBe(1);
    expect(array[1].a.b.c).toBe(3);
  });
});

describe("Multiple Properties with Mixed Order", () => {
  it("sorts with alternating asc/desc orders", () => {
    const array = [
      { x: 1, y: 1, z: 1 },
      { x: 2, y: 1, z: 2 },
      { x: 1, y: 2, z: 1 },
      { x: 2, y: 2, z: 2 },
    ];

    array.sort(sortBy("-x", "y", "-z"));

    expect(array[0]).toEqual({ x: 2, y: 1, z: 2 }); // x=2(desc), y=1(asc), z=2(desc)
    expect(array[1]).toEqual({ x: 2, y: 2, z: 2 }); // x=2(desc), y=2(asc), z=2(desc)
    expect(array[2]).toEqual({ x: 1, y: 1, z: 1 });
    expect(array[3]).toEqual({ x: 1, y: 2, z: 1 });
  });
});

describe("Map Function Advanced Cases", () => {
  it("applies map function to multiple properties", () => {
    const array = [
      { first: "John", last: "DOE" },
      { first: "jane", last: "Smith" },
      { first: "Bob", last: "anderson" },
    ];

    array.sort(
      sortBy("last", "first", (key, value) => {
        return value.toLowerCase();
      })
    );

    expect(array[0].last).toBe("anderson");
    expect(array[1].last).toBe("DOE");
    expect(array[2].last).toBe("Smith");
  });

  it("map function with nested properties", () => {
    const array = [
      { user: { name: "CHARLIE" } },
      { user: { name: "alice" } },
      { user: { name: "Bob" } },
    ];

    array.sort(
      sortBy("user.name", (key, value) => {
        return key === "user.name" ? value.toLowerCase() : value;
      })
    );

    expect(array[0].user.name).toBe("alice");
    expect(array[1].user.name).toBe("Bob");
    expect(array[2].user.name).toBe("CHARLIE");
  });

  it("map function with numeric string conversion", () => {
    const array = [{ version: "10.2" }, { version: "2.1" }, { version: "1.9" }];

    // Ordena como strings (lexicográfico)
    const copy1 = [...array];
    copy1.sort(sortBy("version"));
    expect(copy1[0].version).toBe("1.9");
    expect(copy1[1].version).toBe("10.2");
    expect(copy1[2].version).toBe("2.1");

    // Ordena como números (com map function)
    const copy2 = [...array];
    copy2.sort(
      sortBy("version", (key, value) => {
        return parseFloat(value);
      })
    );
    expect(copy2[0].version).toBe("1.9");
    expect(copy2[1].version).toBe("2.1");
    expect(copy2[2].version).toBe("10.2");
  });
});

describe("Special Characters and Unicode", () => {
  it("sorts strings with accents and special characters", () => {
    const array = [
      { name: "Östberg" },
      { name: "Ødegård" },
      { name: "Öberg" },
      { name: "Olsen" },
    ];

    array.sort(sortBy("name"));

    // Ordem Unicode/lexicográfica
    expect(array[0].name).toBe("Olsen");
    // Os outros dependem da implementação Unicode
  });

  it("sorts with emojis", () => {
    const array = [{ icon: "🦊" }, { icon: "🐱" }, { icon: "🐶" }];

    // Não deve dar erro
    expect(() => {
      array.sort(sortBy("icon"));
    }).not.toThrow();
  });
});

describe("Performance and Stability", () => {
  it("handles large arrays efficiently", () => {
    const array = Array.from({ length: 1000 }, (_, i) => ({
      x: Math.floor(Math.random() * 100),
      y: i,
    }));

    const start = Date.now();
    array.sort(sortBy("x", "y"));
    const duration = Date.now() - start;

    // Deve completar em tempo razoável (< 100ms)
    expect(duration).toBeLessThan(100);

    // Verifica que está ordenado
    for (let i = 1; i < array.length; i++) {
      expect(array[i].x).toBeGreaterThanOrEqual(array[i - 1].x);
    }
  });

  it("maintains stable sort for equal values", () => {
    const array = [
      { x: 1, id: 0 },
      { x: 1, id: 1 },
      { x: 1, id: 2 },
      { x: 1, id: 3 },
      { x: 1, id: 4 },
    ];

    array.sort(sortBy("x"));

    // JavaScript Array.sort é stable desde ES2019
    expect(array.map((item) => item.id)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("Edge Cases with sortBy() without arguments", () => {
  it("returns a valid comparator even without arguments", () => {
    const array = [3, 1, 2];
    const comparator = sortBy();

    expect(typeof comparator).toBe("function");

    // Deve retornar 0 sempre (todos iguais)
    expect(comparator({ x: 1 }, { x: 2 })).toBe(0);
  });
});
