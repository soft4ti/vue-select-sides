const sortBy = require("sort-by");

const clone = json => JSON.parse(JSON.stringify(json));

const normalizeText = text => {
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

  data.sort(sortBy(...orderBy)).map(item => {
    if (item.children) item.children.sort(sortBy(...orderBy));
    return item;
  });

  return data;
};

const removeItemArray = (array, value) => {
  return array.filter(e => String(e) !== String(value));
};

export { normalizeText, clone, reorder, removeItemArray };
