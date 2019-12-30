<template>
  <div class="vm2s">
    <div class="vm2s-list">
      <v-search class="vm2s-list-search" v-model="searchL"></v-search>
      <v-list
        :hasChildren="false"
        :items="filteredListL"
        @updated-item="updateItem"
      ></v-list>
      <div class="vm2s-footer">
        <div>
          <v-selectAll
            :items="listLeft"
            @update-select-all="updateLeftSelectAll"
          ></v-selectAll>
          <div class="vm2s-footer-separator">/</div>
          <v-deselectAll
            :items="listLeft"
            @update-deselect-all="updateLeftDeselectAll"
          ></v-deselectAll>
        </div>
      </div>
    </div>
    <div class="vm2s-span">
      &lsaquo; &rsaquo;
    </div>
    <div class="vm2s-list">
      <v-search class="vm2s-list-search" v-model="searchR"></v-search>
      <v-list
        :hasChildren="true"
        :items="filteredListR"
        @updated-item="updateItem"
      ></v-list>
      <div class="vm2s-footer">
        <div>
          <v-selectAll
            :items="listRight"
            @update-select-all="updateRightSelectAll"
          ></v-selectAll>
          <div class="vm2s-footer-separator">/</div>
          <v-deselectAll
            :items="listRight"
            @update-deselect-all="updateRightDeselectAll"
          ></v-deselectAll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeText, clone } from "./utils";

const vSelectAll = require("./components/selectAll.vue").default;
const vDeselectAll = require("./components/deselectAll.vue").default;
const vSearch = require("./components/search.vue").default;
const vList = require("./components/list.vue").default;
const sortBy = require("sort-by");

export default {
  name: "multi-sides",
  display: "Multi-sides",
  components: {
    vSelectAll,
    vDeselectAll,
    vSearch,
    vList
  },
  methods: {
    reorder(data) {
      let orderBy = ["-selectedDefault", "label"];

      data.sort(sortBy(...orderBy)).map(item => {
        if (item.children) item.children.sort(sortBy(...orderBy));
        return item;
      });

      return data;
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
      let selectedItems = clone(this.selectedItems);

      if (Object.keys(parent).length > 0) {
        if (selectedItems[parent.value] === undefined) {
          if (parent.visible) {
            selectedItems[parent.value] = [];
          }
        }

        if (selected) {
          if (item.visible) {
            selectedItems[parent.value].push(item.value);
          }
        } else {
          if (item.visible) {
            selectedItems[parent.value] = this.removeItemArray(
              selectedItems[parent.value],
              item.value
            );
          }
        }
      } else {
        if (selected) {
          if (selectedItems[item.value] === undefined) {
            selectedItems[item.value] = [];
          }
        } else {
          delete selectedItems[item.value];
        }
      }

      this.$set(this, "selectedItems", selectedItems);
    },
    getSelectedParent() {
      let propsSelectedGrouped = Object.keys(this.propsSelectedGrouped);
      let concat = [...propsSelectedGrouped, ...this.propsSelectedParent];

      return [...new Set(concat)];
    },
    getSelectedItem() {
      let vm = this;
      let propsSelectedGrouped = [];
      let concat = [];

      Object.keys(vm.propsSelectedGrouped).forEach(parent => {
        vm.propsSelectedGrouped[parent].forEach(child => {
          propsSelectedGrouped.push(child);
        });
      });

      concat = [...propsSelectedGrouped, ...vm.propsSelectedItem];

      return [...new Set(concat)];
    }
  },
  beforeMount() {
    // Languages
    const enabledLangs = ["pt_BR", "en_US"];

    if (enabledLangs.indexOf(this.lang) >= 0) {
      this.$i18n.locale = this.lang;
    }

    // Organize selecteds
    let selectedsParent = this.getSelectedParent();
    let selectedsItem = this.getSelectedItem();

    this.propsList.filter(item => {
      let value = item.value;

      if (selectedsParent.indexOf(value) >= 0) {
        item.selectedDefault = true;
      } else {
        item.selectedDefault = false;
      }

      if (item.children) {
        item.children.filter(item => {
          let valueChildren = item.value;

          // Has selected
          if (selectedsItem.indexOf(valueChildren) >= 0) {
            item.selectedDefault = true;
          } else {
            item.selectedDefault = false;
          }
        });
      }

      this.propsList = this.reorder(this.propsList);

      return item;
    });
  },
  mounted() {
    let vm = this;

    // Organiza o array de selecionados
    this.propsList.map(item => {
      if (item.selectedDefault) {
        if (this.selectedItems[item.value] === undefined) {
          this.selectedItems[item.value] = [];
        }
      }

      if (item.children) {
        item.children.map(children => {
          if (children.selectedDefault) {
            this.selectedItems[item.value].push(children.value);
          }
        });
      }
    });

    // Organiza a listLeft
    this.listLeft = this.propsList.filter(item => {
      item.visible = true;

      if (item.children) {
        item.children = item.children.map(children => {
          if (vm.selectedItems[item.value] !== undefined) {
            if (vm.selectedItems[item.value].indexOf(children.value) >= 0) {
              children.selected = true;
            } else {
              children.selected = false;
            }
          }

          return children;
        });

        return item.children;
      }

      return item;
    });
  },
  computed: {
    filteredListL() {
      let vm = this;
      let search = normalizeText(this.searchL);
      let selected = Object.keys(this.selectedItems);

      let listLeft = clone(this.listLeft);

      listLeft = listLeft.filter(item => {
        let label = normalizeText(item.label);

        // Has selected
        if (selected.indexOf(item.value) >= 0) {
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

        if (item.children) {
          item.children = item.children.map(children => {
            children.selected = false;
            if (vm.selectedItems[item.value] !== undefined) {
              if (vm.selectedItems[item.value].indexOf(children.value) >= 0) {
                children.selected = true;
              } else {
                children.selected = false;
              }
            }
            return children;
          });

          item.totalChildrenSelected = item.children.filter(function(a) {
            return a.selected === true;
          }).length;

          return item.children;
        }

        return item;
      });

      this.$set(this, "listLeft", listLeft);

      return listLeft;
    },
    filteredListR() {
      let vm = this;
      let search = normalizeText(vm.searchR);

      let listRight = vm.listLeft.filter(function sub(item) {
        if (item.children) {
          item.children = item.children.map(children => {
            let label = normalizeText(children.label);

            if (label.includes(search)) {
              children.visible = true;
            } else {
              children.visible = false;
            }

            if (vm.selectedItems[item.value] !== undefined) {
              if (vm.selectedItems[item.value].indexOf(children.value) >= 0) {
                children.selected = true;
              } else {
                children.selected = false;
              }
            }

            return children;
          });

          return item.children;
        }

        return item;
      });

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
      finishedListLeft: false,
      selectedItems: {},
      propsSelectedGrouped: {},
      propsSelectedParent: ["sudeste", "norte"],
      propsSelectedItem: ["minas-gerais", "roraima", "amapa"],
      listLeft: [],
      listRight: [],
      propsList: [
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

.vm2s-list-ul li.no-results > span,
.vm2s-list-ul li.no-selection > span {
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
  user-select: none;
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
</style>
