<template>
  <div class="thebody">
    <div class="vm2s">
      <div>
        <search v-model="searchL"></search>
        <list
          :hasChildren="false"
          :items="filteredListL"
          @updated-item="updateItem"
        ></list>
        <selectAll :items="filteredListL"></selectAll>
        <deselectAll :items="filteredListL"></deselectAll>
      </div>
      <div>
        <search v-model="searchR"></search>
        <list
          :hasChildren="true"
          :items="filteredListR"
          @updated-item="updateItem"
        ></list>
        <selectAll :items="filteredListR"></selectAll>
        <deselectAll :items="filteredListR"></deselectAll>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeText } from "./utils";
// clone
const selectAll = require("./components/selectAll.vue").default;
const deselectAll = require("./components/deselectAll.vue").default;
const search = require("./components/search.vue").default;
const list = require("./components/list.vue").default;

export default {
  name: "multiselect",
  display: "Multiselect",
  components: {
    selectAll,
    deselectAll,
    search,
    list
  },
  methods: {
    removeItemArray(array, value) {
      return array.filter(e => String(e) !== String(value));
    },
    updateItems() {},
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

      console.log(list);
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
    // let vm = this;
    // Preparar o this.list...
    // Verificar os "selecteds"
    /*
    vm.list.map(function sub(item) {
      item.visible = true;
      item.selected = false;

      // if (vm.selected.indexOf(item.value) !== -1) {
      // item.selected = true;

      // console.log(item);
      // if (item.parent_value) {
      // }
      // }

      if (item.children) {
        // item.children.push(item);
        // vm.$set(item.children, "parent_value", item.value);
        return item.children.map(sub);
      }

      return item;
    });
    */
    // console.log(bla);
    // Verificar a ordem que deve ser exibida
    // Retornar uma lista clonada para poder alterar tudo
  },
  computed: {
    filteredListL() {
      let search = normalizeText(this.searchL);
      let selectedsParent = this.getSelectedParent();
      let selectedsItem = this.getSelectedItem();

      let listLeft = this.list.filter(item => {
        let value = item.value;
        let label = normalizeText(item.label);

        // Has selected
        if (selectedsItem.indexOf(value) >= 0) {
          item.selected = true;
        } else {
          item.selected = false;
        }

        if (selectedsParent.indexOf(value) >= 0) {
          item.selected = true;
        } else {
          item.selected = false;
        }

        // Has search
        if (label.includes(search)) {
          item.visible = true;
        } else {
          item.visible = false;
        }

        return item;
      });

      this.$set(this, "listLeft", listLeft);

      return this.listLeft;
    },
    filteredListR() {
      let search = normalizeText(this.searchR);
      let selecteds = this.getSelectedItem();

      return this.listLeft.filter(function sub(o) {
        let value = o.value;
        let label = normalizeText(o.label);
        let children = o.children;

        // console.log(selecteds);
        // console.log(value);

        if (children) {
          children = children.filter(sub);
          return children;
        }

        // Has selected
        if (selecteds.indexOf(value) >= 0) {
          o.selected = true;
        } else {
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
    }
  },
  updated() {},
  data() {
    return {
      searchL: "",
      searchR: "",
      selectedGrouped: {
        // sudeste: ["minas-gerais"],
        // norte: ["roraima", "amapa"]
      },
      selectedParent: ["sudeste", "norte"],
      selected: ["minas-gerais", "roraima", "amapa"],
      listLeft: [],
      list: [
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

.vm2s {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
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
}
</style>
