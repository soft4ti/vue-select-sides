<template>
  <div class="thebody">
    <div class="vm2s">
      <div class="vm2s-list">
        <search class="vm2s-list-search" v-model="searchL"></search>
        <list
          :hasChildren="false"
          :items="filteredListL"
          @updated-item="updateItem"
        ></list>
        <selectAll
          :items="listLeft"
          @update-select-all="updateLeftSelectAll"
        ></selectAll>
        <deselectAll
          :items="listLeft"
          @update-deselect-all="updateLeftDeselectAll"
        ></deselectAll>
      </div>
      <div class="vm2s-span"></div>
      <div class="vm2s-list">
        <search class="vm2s-list-search" v-model="searchR"></search>
        <list
          :hasChildren="true"
          :items="filteredListR"
          @updated-item="updateItem"
        ></list>
        <selectAll
          :items="listRight"
          @update-select-all="updateRightSelectAll"
        ></selectAll>
        <deselectAll
          :items="listRight"
          @update-deselect-all="updateRightDeselectAll"
        ></deselectAll>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeText, clone } from "./utils";
// clone
const selectAll = require("./components/selectAll.vue").default;
const deselectAll = require("./components/deselectAll.vue").default;
const search = require("./components/search.vue").default;
const list = require("./components/list.vue").default;
const sortBy = require("sort-by");

export default {
  name: "multi-sides",
  display: "Multi-sides",
  components: {
    selectAll,
    deselectAll,
    search,
    list
  },
  methods: {
    reorder(data) {
      let data2 = clone(data);
      // data.sort(sortBy("-children.valueasads"));
      // data.sort(sortBy("-selectedDefault", "label", "children.label"));

      // data.filter(() => {

      // })
      data2.sort(sortBy("-selectedDefault", "label"));

      // data2.forEach(item => {
      //   item.children.sort(sortBy("-selectedDefault", "label"));
      //   console.log(item.children);
      // });
      // console.log("============================");

      data2.map(item => {
        console.log(JSON.stringify(item));
        if (item.children) {
          item.children.sort(sortBy("-selectedDefault", "label"));
        }

        return item;
      });

      return data2;

      // return data2;
      // return data;
    },
    updateLeftSelectAll() {
      let vm = this;

      vm.listLeft.map(item => {
        if (item.visible === true) {
          vm.updateItem(item, true, item.children);
        }
      });
    },
    updateLeftDeselectAll() {
      let vm = this;

      vm.listLeft.map(item => {
        if (item.visible === true) {
          vm.updateItem(item, false, item.children);
        }
      });
    },
    updateRightSelectAll() {
      let vm = this;

      vm.listRight.map(item => {
        item.children.map(children => {
          if (item.selected === true) {
            vm.updateItem(children, true, []);
          }
        });
      });
    },
    updateRightDeselectAll() {
      let vm = this;

      vm.listRight.map(item => {
        item.children.map(children => {
          if (item.selected === true) {
            vm.updateItem(children, false, []);
          }
        });
      });
    },
    removeItemArray(array, value) {
      return array.filter(e => String(e) !== String(value));
    },
    updateItem(item, selected, children) {
      let list = [];

      if (children.length === 0) {
        list = "selected";
      } else {
        list = "selectedParent";
        if (selected === false) {
          children.forEach(v => this.updateItem(v, selected, []));
        }
      }

      if (selected) {
        this[list].push(item.value);
      } else {
        this[list] = this.removeItemArray(this[list], item.value);
      }
    },
    getSelectedParent() {
      let selectedGrouped = Object.keys(this.selectedGrouped);
      let concat = [...selectedGrouped, ...this.selectedParent];

      return [...new Set(concat)];
    },
    getSelectedItem() {
      let vm = this;
      let selectedGrouped = [];
      let concat = [];

      Object.keys(vm.selectedGrouped).forEach(parent => {
        vm.selectedGrouped[parent].forEach(child => {
          selectedGrouped.push(child);
        });
      });

      concat = [...selectedGrouped, ...vm.selected];

      return [...new Set(concat)];
    }
  },
  beforeMount() {
    const enabledLangs = ["pt_BR", "en_US"];

    if (enabledLangs.indexOf(this.lang) >= 0) {
      this.$i18n.locale = this.lang;
    }
  },
  computed: {
    filteredListL() {
      let vm = this;
      let search = normalizeText(this.searchL);
      let selectedsParent = this.getSelectedParent();
      let selectedsItem = this.getSelectedItem();

      let listLeft = this.list.filter(item => {
        let value = item.value;
        let label = normalizeText(item.label);

        // Has selected
        if (selectedsItem.indexOf(value) >= 0) {
          item.selected = true;
          if (vm.listLeft.length === 0) {
            item.selectedDefault = true;
          }
        } else {
          item.selected = false;
          if (vm.listLeft.length === 0) {
            item.selectedDefault = false;
          }
        }

        if (selectedsParent.indexOf(value) >= 0) {
          item.selected = true;
          if (vm.listLeft.length === 0) {
            item.selectedDefault = true;
          }
        } else {
          item.selected = false;
          if (vm.listLeft.length === 0) {
            item.selectedDefault = false;
          }
        }

        // Has search
        if (label.includes(search)) {
          item.visible = true;
        } else {
          item.visible = false;
        }

        return item;
      });

      // if (this.options.orderBy === "asc") {
      //   data.sort(sortBy("text"));
      // }

      // if (this.options.orderBy === "desc") {
      //   data.sort(sortBy("-text"));
      // }

      // if (this.options.sortSelectedFirst === true) {
      //   data.sort(sortBy("-selected"));
      // }

      // return data;
      console.log(JSON.stringify(listLeft));
      this.$set(this, "listLeft", this.reorder(listLeft));

      return this.listLeft;
    },
    filteredListR() {
      let vm = this;
      let search = normalizeText(vm.searchR);
      let selecteds = vm.getSelectedItem();

      let listRight = vm.listLeft.filter(function sub(o) {
        let value = o.value;
        let label = normalizeText(o.label);
        let children = o.children;

        if (children) {
          children = children.filter(sub);
          return children;
        }

        // Has selected
        if (selecteds.indexOf(value) >= 0) {
          if (vm.listRight.length === 0) {
            o.selectedDefault = true;
          }
          o.selected = true;
        } else {
          if (vm.listRight.length === 0) {
            o.selectedDefault = false;
          }
          o.selected = false;
        }

        // Has search
        if (label.includes(search)) {
          o.visible = true;
        } else {
          o.visible = false;
        }

        return o;
      });

      // listRight = this.reorder(listRight);

      this.$set(this, "listRight", listRight);

      return this.listRight;
    }
  },
  updated() {},
  data() {
    return {
      lang: "pt_BR",
      searchL: "",
      searchR: "",
      selectedGrouped: {},
      selectedParent: ["sudeste", "norte"],
      selected: ["minas-gerais", "roraima", "amapa"],
      listLeft: [],
      listRight: [],
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
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.vm2s,
.vm2s ul li {
  padding: 0px;
  margin: 0px;
}

.vm2s,
.vm2s *,
.vm2s *::before,
.vm2s *::after {
  box-sizing: border-box;
}
.vm2s a {
  text-decoration: none;
}

.vm2s {
  /* temp */
  width: 600px;
  margin: 0 auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* temp */

  display: flex;
  justify-content: space-between;
}

.vm2s-list {
  width: 100%;
}

.vm2s-span {
  width: 10%;
}

.vm2s-list-search {
  width: 100%;
}
</style>
