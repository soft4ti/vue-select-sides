<template>
  <div class="ex">
    <div class="ex-section">
      <h2>Mirror</h2>
      <div class="ex-lib">
        <vue-select-sides
          type="mirror"
          v-model="mirror.selected"
          :list="mirror.list"
          :order-by="mirror.orderBy"
          :sort-selected-up="mirror.sortSelectedUp"
          :search="mirror.search"
          :toggle-all="mirror.toggleAll"
          :lang="lang"
          @change="updatedItemsMirror"
        ></vue-select-sides>
        <div class="ex-result">
          <h4>Result</h4>
          <pre>{{ mirror.selected }}</pre>
        </div>
      </div>
    </div>
    <hr />

    <div class="ex-section">
      <h2>Grouped</h2>
      <div class="ex-lib">
        <vue-select-sides
          type="grouped"
          v-model="grouped.selected"
          :list="grouped.list"
          :order-by="grouped.orderBy"
          :sort-selected-up="grouped.sortSelectedUp"
          :search="grouped.search"
          :toggle-all="grouped.toggleAll"
          :lang="lang"
          @change="updatedItemsGrouped"
        ></vue-select-sides>
        <div class="ex-result">
          <h4>Result</h4>
          <pre>{{ selectedGrouped }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSelectSides from "../src/index";

export default {
  components: {
    vueSelectSides
  },
  methods: {
    updatedItemsMirror(newValues) {
      this.$set(this, "selectedMirror", newValues);
    },
    updatedItemsGrouped(newValues) {
      this.$set(this, "selectedGrouped", newValues);
    }
  },
  data() {
    return {
      lang: "en_US",

      selectedMirror: [],
      selectedGrouped: {},

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
@import "../styles/themes/soft.scss";

.vss {
  height: 400px;
}

// Layout example
.ex {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  hr {
    border-style: solid;
    border-color: transparent;
    border-top-color: #f1f1f1;
    margin: 35px 0px;
  }

  .ex-section {
    width: 70%;
    margin: 0 auto;

    .ex-lib {
      display: flex;
      .vss {
        width: 65%;
      }
      .ex-result {
        margin-left: 2.5rem;
        width: 35%;

        h4 {
          margin: 0px;
        }

        pre {
          background: #f1f1f1;
          padding: 10px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
