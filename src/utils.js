import sortBy from "./sort-by";

const clone = (json) => JSON.parse(JSON.stringify(json));

const normalizeText = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const reorder = (vm, data) => {
  let orderBy = [];

  if (vm.sortSelectedUp) {
    orderBy.push("-selectedDefault");
  }

  if (vm.orderBy) {
    if (vm.orderBy.toLowerCase() === "asc") {
      orderBy.push("label");
    }

    if (vm.orderBy.toLowerCase() === "desc") {
      orderBy.push("-label");
    }
  }

  const labelNormalizer = (prop, val) =>
    prop === "label" && typeof val === "string" ? normalizeText(val) : val;

  data.sort(sortBy(...orderBy, labelNormalizer)).map((item) => {
    if (item.children) item.children.sort(sortBy(...orderBy, labelNormalizer));
    return item;
  });

  return data;
};

const removeItemArray = (array, value) => {
  return array.filter((e) => String(e) !== String(value));
};

const addUniqueValues = (array, values) => {
  const output = [...array];
  const existing = new Set(array.map((e) => String(e)));

  values.forEach((value) => {
    const key = String(value);
    if (!existing.has(key)) {
      existing.add(key);
      output.push(value);
    }
  });

  return output;
};

export { normalizeText, clone, reorder, removeItemArray, addUniqueValues };
