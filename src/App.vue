<template>
  <div>
    <h2>Mirror</h2>
    <vue-select-sides
      class="example"
      type="mirror"
      :list="mirror.list"
      :selected="mirror.selectedItem"
      :order-by="mirror.orderBy"
      :sort-selected-up="mirror.sortSelectedUp"
      :search="mirror.search"
      :toggle-all="mirror.toggleAll"
      :lang="lang"
      @change="updatedItems"
    ></vue-select-sides>
    <hr />

    <h2>Grouped</h2>
    <vue-select-sides
      class="example"
      type="grouped"
      :list="grouped.list"
      :selected="grouped.selected"
      :selected-item="grouped.selectedItem"
      :selected-parent="grouped.selectedParent"
      :order-by="grouped.orderBy"
      :sort-selected-up="grouped.sortSelectedUp"
      :search="grouped.search"
      :toggle-all="grouped.toggleAll"
      :lang="lang"
      @change="updatedItems"
    ></vue-select-sides>
  </div>
</template>

<script>
const vueSelectSides = require("./core.vue").default;

export default {
  components: {
    vueSelectSides
  },
  methods: {
    updatedItems(a) {
      console.log(a);
    }
  },
  data() {
    return {
      lang: "en_US",

      mirror: {
        toggleAll: true,
        search: true,
        orderBy: "ASC",
        sortSelectedUp: true,
        selectedItem: ["sudeste", "centro-oeste"],
        list: [
          {
            value: "sul",
            label: "Sul"
          },
          {
            value: "sudeste",
            label: "Sudeste"
          },
          {
            value: "norte",
            label: "Norte"
          },
          {
            value: "centro-oeste",
            label: "Centro Oeste"
          },
          {
            value: "nordeste",
            label: "Nordeste"
          }
        ]
      },

      grouped: {
        toggleAll: true,
        search: true,
        orderBy: "ASC",
        sortSelectedUp: true,
        selected: {},
        selectedItem: ["minas-gerais", "roraima", "amapa"],
        selectedParent: ["sudeste", "norte"],
        list: [
          {
            value: "sul",
            label: "Sul",
            children: [
              {
                value: "santa-catarina",
                label: "Santa Catarina"
              },
              {
                value: "rio-grande-do-sul",
                label: "Rio Grande do Sul"
              },
              {
                value: "parana",
                label: "Paraná"
              }
            ]
          },
          {
            value: "sudeste",
            label: "Sudeste",
            children: [
              {
                value: "minas-gerais",
                label: "Minas Gerais"
              },
              {
                value: "sao-paulo",
                label: "São Paulo"
              },
              {
                value: "espirito-santo",
                label: "Espírito Santo"
              },
              {
                value: "rio-de-janeiro",
                label: "Rio de Janeiro"
              }
            ]
          },
          {
            value: "norte",
            label: "Norte",
            children: [
              {
                value: "acre",
                label: "Acre"
              },
              {
                value: "amapa",
                label: "Amapá"
              },
              {
                value: "roraima",
                label: "Roraima"
              },
              {
                value: "tocantins",
                label: "Tocantins"
              },
              {
                value: "para",
                label: "Pará"
              },
              {
                value: "rondonia",
                label: "Rondônia"
              },
              {
                value: "amazonas",
                label: "Amazonas"
              }
            ]
          },
          {
            value: "centro-oeste",
            label: "Centro Oeste",
            children: [
              {
                value: "mato-grosso",
                label: "Mato Grosso"
              },
              {
                value: "mato-grosso-do-sul",
                label: "Mato Grosso do Sul"
              },
              {
                value: "goias",
                label: "Goiás"
              },
              {
                value: "distrito-federal",
                label: "Distrito Federal"
              }
            ]
          },
          {
            value: "nordeste",
            label: "Nordeste",
            children: [
              {
                value: "bahia",
                label: "Bahia"
              },
              {
                value: "sergipe",
                label: "Sergipe"
              },
              {
                value: "alagoas",
                label: "Alagoas"
              },
              {
                value: "paraiba",
                label: "Paraíba"
              },
              {
                value: "pernambuco",
                label: "Pernambuco"
              },
              {
                value: "rio-grande-do-norte",
                label: "Rio Grande do Norte"
              },
              {
                value: "ceara",
                label: "Ceará"
              },
              {
                value: "piaui",
                label: "Piauí"
              },
              {
                value: "maranhao",
                label: "Maranhão"
              },
              {
                value: "mato-grosso",
                label: "Mato Grosso"
              },
              {
                value: "mato-grosso-do-sul",
                label: "Mato Grosso do Sul"
              },
              {
                value: "goias",
                label: "Goiás"
              },
              {
                value: "distrito-federal",
                label: "Distrito Federal"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style>
.example {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 600px;
  margin: 0 auto;
}

.vm2s {
  height: 500px;
}

.vm2s-list {
  box-shadow: 0px 0px 10px #e1e1e1;
  border-radius: 4px;
}
.vm2s-list-search {
  border: none;
  padding: 12px 14px;
  border-bottom: 2px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  outline: none;
}

.vm2s-list-search:focus {
  border-color: #f57f1e;
}

.vm2s-footer {
  align-items: flex-end;
  display: flex;
  flex: 1 0 auto;
}
.vm2s-footer > div {
  display: flex;
  padding: 10px;
  background-color: #242934;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.vm2s-footer > div * {
  color: white;
  font-size: 0.7rem;
}
.vm2s-footer .vm2s-footer-separator {
  margin: 0px 6px;
}

.vm2s-span {
  color: #e1e1e1;
}

.vm2s-list-ul {
  padding: 8px 10px 10px 10px;
}

.vm2s-list-ul li span {
  border-radius: 4px;
}

.vm2s-list-ul li span {
  padding: 5px 12px;
  margin-top: 2px;
}

.vm2s-list-ul > li:not(.is-parent) > span {
}

.vm2s-list-ul > li.is-parent > span {
  font-weight: bold;
  padding-left: 0px;
}

.vm2s-list-ul li span {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vm2s-list-ul li.active:not(.is-parent) > span {
  background-color: #f57f1e;
  border-color: transparent;
  color: white;
}

.vm2s-list-ul li:not(.is-parent) > span {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #f4f4f4;
}

.vm2s-list-ul li.no-results > span,
.vm2s-list-ul li.no-selection > span {
  cursor: default;
  background-color: #fafafa;
  border-color: transparent;
}

.vm2s-list-ul > li > ul > li span {
}

.vm2s-list-badge {
  font-size: 8px;
  color: white;
  padding: 2px 4px 0px 4px;
  border-radius: 20px;
  min-width: 14px;
  height: 14px;
  background: rgba(0, 0, 0, 0.15);
  font-weight: bold;
}
</style>
