<template>
  <div>
    <div class="vss-list">
      <div class="vss-inner-list">
        <v-search
          class="vss-list-search"
          v-if="search"
          v-model="searchL"
        ></v-search>
        <v-list
          :has-children="false"
          :type="type"
          :items="filteredListL"
          @updated-item="updateItem"
        ></v-list>
        <div class="vss-footer" v-show="toggleAll || total">
          <div class="vss-footer-bg">
            <div>
              <v-select-all
                v-if="toggleAll"
                :items="listLeft"
                @update-select-all="updateLeftSelectAll"
              ></v-select-all>
              <div v-if="toggleAll" class="vss-footer-separator">/</div>
              <v-deselect-all
                v-if="toggleAll"
                :items="listLeft"
                @update-deselect-all="updateLeftDeselectAll"
              ></v-deselect-all>
            </div>
            <v-total
              :value="Object.keys(dataSelected).length"
              v-if="total"
            ></v-total>
          </div>
        </div>
      </div>
    </div>
    <v-separator></v-separator>
    <div class="vss-list">
      <div class="vss-inner-list">
        <v-search
          class="vss-list-search"
          v-if="search"
          v-model="searchR"
        ></v-search>
        <v-list
          :has-children="true"
          :type="type"
          :items="filteredListR"
          @updated-item="updateItem"
        ></v-list>
        <div class="vss-footer" v-show="toggleAll || total">
          <div class="vss-footer-bg">
            <div>
              <v-select-all
                v-if="toggleAll"
                :items="listRight"
                @update-select-all="updateRightSelectAll"
              ></v-select-all>
              <div v-if="toggleAll" class="vss-footer-separator">/</div>
              <v-deselect-all
                v-if="toggleAll"
                :items="listRight"
                @update-deselect-all="updateRightDeselectAll"
              ></v-deselect-all>
            </div>
            <v-total :value="totalChildrenSelected" v-if="total"></v-total>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { normalizeText, clone, reorder, removeItemArray } from "../utils";

const vSelectAll = require("../components/selectAll.vue").default;
const vDeselectAll = require("../components/deselectAll.vue").default;
const vSearch = require("../components/search.vue").default;
const vList = require("../components/list.vue").default;
const vSeparator = require("../components/separator.vue").default;
const vTotal = require("../components/total.vue").default;
const mixin = require("../mixin").default;

export default {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [mixin],
  components: {
    vSelectAll,
    vDeselectAll,
    vSearch,
    vSeparator,
    vList,
    vTotal
  },
  props: {
    list: {
      required: true,
      type: [Array, Object]
    },
    search: {
      type: Boolean
    },
    total: {
      type: Boolean
    },
    toggleAll: {
      type: Boolean
    },
    orderBy: {
      type: String
    },
    sortSelectedUp: {
      type: Boolean
    },
    model: {
      type: Object,
      default: undefined
    },
    type: {
      type: String
    }
  },
  methods: {
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
    updateItem(item, parent, selected) {
      let dataSelected = clone(this.dataSelected);

      if (Object.keys(parent).length > 0) {
        if (dataSelected[parent.value] === undefined) {
          if (parent.visible) {
            dataSelected[parent.value] = [];
          }
        }

        if (selected) {
          if (item.visible) {
            if (dataSelected[parent.value].indexOf(item.value) === -1) {
              dataSelected[parent.value].push(item.value);
            }
          }
        } else {
          if (item.visible) {
            dataSelected[parent.value] = removeItemArray(
              dataSelected[parent.value],
              item.value
            );
          }
        }
      } else {
        if (selected) {
          if (dataSelected[item.value] === undefined) {
            dataSelected[item.value] = [];
          }
        } else {
          delete dataSelected[item.value];
        }
      }

      this.$set(this, "dataSelected", dataSelected);
    }
  },
  beforeMount() {
    this.$set(this, "dataSelected", this.model);
    this.$set(this, "dataList", this.list);

    let vm = this;
    let keyParentsSelected = Object.keys(vm.dataSelected);

    let dataList = vm.dataList.filter(item => {
      let valueParent = item.value;
      let existsParentSelected = keyParentsSelected.indexOf(valueParent) >= 0;

      if (existsParentSelected) {
        item.selectedDefault = true;
      } else {
        item.selectedDefault = false;
      }

      if (item.children) {
        item.children.filter(item => {
          let valueChildren = item.value;

          // Has selected
          if (existsParentSelected) {
            let existsChildrenSelected =
              vm.dataSelected[valueParent].indexOf(valueChildren) >= 0;

            if (existsChildrenSelected) {
              item.selectedDefault = true;
            } else {
              item.selectedDefault = false;
            }
          }
        });
      }

      return item;
    });

    this.$set(this, "dataList", reorder(vm, dataList));
  },
  mounted() {
    let vm = this;

    // Organiza a listLeft
    this.listLeft = this.dataList.filter(item => {
      item.visible = true;

      if (item.children) {
        item.children = item.children.map(children => {
          if (vm.dataSelected[item.value] !== undefined) {
            if (vm.dataSelected[item.value].indexOf(children.value) >= 0) {
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
    totalChildrenSelected() {
      return Object.keys(this.dataSelected)
        .map(ab => {
          return this.dataSelected[ab].length;
        })
        .reduce((a, b) => a + b, 0);
    },
    filteredListL() {
      let vm = this;
      let search = normalizeText(this.searchL);
      let selected = Object.keys(this.dataSelected);

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
            if (vm.dataSelected[item.value] !== undefined) {
              if (vm.dataSelected[item.value].indexOf(children.value) >= 0) {
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

            if (vm.dataSelected[item.value] !== undefined) {
              if (vm.dataSelected[item.value].indexOf(children.value) >= 0) {
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
  data() {
    return {
      dataList: [],
      dataSelected: {},
      listLeft: [],
      listRight: [],
      searchL: "",
      searchR: ""
    };
  }
};
</script>
