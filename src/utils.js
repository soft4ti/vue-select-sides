const clone = json => JSON.parse(JSON.stringify(json));

const normalizeText = text => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export { normalizeText, clone };
