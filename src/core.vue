<template>
  <div class="vm2s">
    <div class="vm2s-list">
      <search class="vm2s-list-search " v-model="searchL"></search>
      <list
        :hasChildren="false"
        :items="filteredListL"
        @updated-item="updateItem"
      ></list>
      <div class="vm2s-footer">
        <div>
          <selectAll
            :items="listLeft"
            @update-select-all="updateLeftSelectAll"
          ></selectAll>
          <div class="vm2s-footer-separator">/</div>
          <deselectAll
            :items="listLeft"
            @update-deselect-all="updateLeftDeselectAll"
          ></deselectAll>
        </div>
      </div>
    </div>
    <div class="vm2s-span">
      &lsaquo; &rsaquo;
    </div>
    <div class="vm2s-list">
      <search class="vm2s-list-search" v-model="searchR"></search>
      <list
        :hasChildren="true"
        :items="filteredListR"
        @updated-item="updateItem"
      ></list>
      <div class="vm2s-footer">
        <div>
          <selectAll
            :items="listRight"
            @update-select-all="updateRightSelectAll"
          ></selectAll>
          <div class="vm2s-footer-separator">/</div>
          <deselectAll
            :items="listRight"
            @update-deselect-all="updateRightDeselectAll"
          ></deselectAll>
        </div>
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
        // console.log(JSON.stringify(item));
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
          vm.updateItem(item, {}, true);
        }
      });
    },
    updateLeftDeselectAll() {
      let vm = this;

      vm.listLeft.map(item => {
        if (item.visible === true) {
          vm.updateItem(item, {}, false);
        }
      });
    },
    updateRightSelectAll() {
      let vm = this;

      vm.listRight.map(item => {
        item.children.map(children => {
          if (item.selected === true) {
            vm.updateItem(children, item, true);
          }
        });
      });
    },
    updateRightDeselectAll() {
      let vm = this;

      vm.listRight.map(item => {
        item.children.map(children => {
          if (item.selected === true) {
            vm.updateItem(children, item, false);
          }
        });
      });
    },
    removeItemArray(array, value) {
      return array.filter(e => String(e) !== String(value));
    },
    updateItem(item, parent, selected) {
      // updateItem(item, selected, children) {

      /*
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

      */

      // ATENCAOOOOOOOOOOOOO
      // NO MOUNTED, É NECESSARIO CRIAR O SELECTEDGROUPED COM BASE NOS "SELECTEDS" DO JSON
      // E DESBINDAR O  this.selectedParent &&&&&& this.selected

      // console.log(this.selectedGrouped);
      // console.log(this.selectedGrouped[parent.value] === undefined);

      if (Object.keys(parent).length > 0) {
        /// ja é filho e adiciona no escopo do pai
        if (this.selectedGrouped[parent.value] === undefined) {
          this.selectedGrouped[parent.value] = [];
        }

        if (selected) {
          console.log(this.selectedGrouped);
          this.selectedGrouped[parent.value].push(item.value);
          console.log(this.selectedGrouped);
        } else {
          this.selectedGrouped[parent.value] = this.removeItemArray(
            this.selectedGrouped[parent.value],
            item.value
          );
        }
      } else {
        if (selected) {
          this.selectedGrouped[parent.value] = [];
        } else {
          delete this.selectedGrouped[parent.value];
        }
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
      // console.log(JSON.stringify(listLeft));
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
      lang: "en_US",
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
    };
  }
};
</script>

<style>
.vm2s,
.vm2s ul,
.vm2s ul li {
  list-style-type: none;
  margin: 0px;
}

.vm2s ul ul {
  padding: 0px;
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

.vm2s * {
  font-size: 0.9rem;
}

.vm2s {
  /* temp */
  width: 600px;
  height: 500px;
  margin: 0 auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* temp */

  display: flex;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-between;
}

.vm2s-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.vm2s-list-ul {
  overflow-y: auto;
  padding: 8px 10px 10px 10px;
}

.vm2s-list-ul li {
  line-height: 1.5;
}

.vm2s-list-ul li span {
  padding: 5px 12px;
  margin-top: 2px;
}

.vm2s-list-ul > li:not(.is-parent) > span {
  /* background-color: red; */
}

.vm2s-list-ul > li.is-parent > span {
  /* background-color: #e01111cc; */
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

.vm2s-list-ul li.no-results > span {
  cursor: default;
  background-color: #fafafa;
  border-color: transparent;
}

.vm2s-list-ul > li > ul > li span {
  /*background-color: purple;*/
}

.vm2s-list-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: white;
  padding: 2px 4px 0px 4px;
  border-radius: 20px;
  min-width: 14px;
  height: 14px;
  background: rgba(0, 0, 0, 0.15);
  font-weight: bold;
}

.vm2s-span {
  width: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vm2s-list-search {
  width: 100%;
}

/* PRIVATE */
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

.vm2s-list-ul li span {
  border-radius: 4px;
}

/*
vm2s-footer vm2s-list vm2s-list-search vm2s-list-ul
*/
</style>
