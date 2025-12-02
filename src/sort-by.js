/**
 * Função que replica o comportamento do sort-by
 * Suporta múltiplos critérios de ordenação e ordem reversa com "-"
 * Suporta função de mapeamento opcional (último parâmetro)
 */
const sortBy = (...args) => {
  // Separa propriedades (strings) da função de mapeamento (function)
  const properties = args.filter((arg) => typeof arg === "string");
  const mapFn = args.find((arg) => typeof arg === "function");

  return (a, b) => {
    for (let property of properties) {
      let sortOrder = 1;

      // Se começar com "-", ordena decrescente
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substring(1);
      }

      // Pega o valor da propriedade (suporta nested objects)
      let valueA = getNestedValue(a, property);
      let valueB = getNestedValue(b, property);

      // Aplica a função de mapeamento se existir
      if (mapFn) {
        valueA = mapFn(property, valueA);
        valueB = mapFn(property, valueB);
      }

      // Compara os valores
      if (valueA < valueB) return -1 * sortOrder;
      if (valueA > valueB) return 1 * sortOrder;
    }
    return 0;
  };
};

/**
 * Pega valores de propriedades aninhadas (ex: "user.name")
 */
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((current, prop) => {
    return current?.[prop];
  }, obj);
};

export default sortBy;
