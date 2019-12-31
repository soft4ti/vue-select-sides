<template>
  <div>
    <h2>Mirror</h2>
    <vue-select-sides
      class="example"
      type="mirror"
      :list="mirror.list"
      :selected="mirror.selected"
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
    updatedItems(newValues) {
      console.log(newValues);
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
        selected: ["sudeste", "centro-oeste"],
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
        selected: {
          sudeste: ["minas-gerais"],
          norte: ["acre", "roraima"]
        },
        // selectedItem: ["minas-gerais", "roraima", "amapa"],
        // selectedParent: ["sudeste", "norte"],
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

<style lang="scss">
@import "./styles/themes/soft.scss";

.example {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 600px;
  margin: 0 auto;
}

.vss {
  height: 500px;
}
</style>
