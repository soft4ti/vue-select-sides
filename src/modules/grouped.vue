<template>
  <div>
    <div class="vss-list">
      <div class="vss-inner-list">
        <v-search
          :placeholder="placeholderSearchLeft"
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
          :placeholder="placeholderSearchRight"
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

import selectAll from "../components/selectAll.vue";
import deselectAll from "../components/deselectAll.vue";
import search from "../components/search.vue";
import list from "../components/list.vue";
import separator from "../components/separator.vue";
import total from "../components/total.vue";
import mixin from "../mixin";

export default {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [mixin],
  components: {
    "v-select-all": selectAll.default,
    "v-deselect-all": deselectAll.default,
    "v-search": search.default,
    "v-separator": list.default,
    "v-list": separator.default,
    "v-total": total.default,
  },
  props: {
    list: {
      required: true,
      type: [Array, Object],
    },
    model: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    updateLeftSelectAll() {
      let vm = this;

      vm.listLeft.map((item) => {
        if (item.visible === true && !item.disabled) {
          vm.updateItem(item, {}, true);
        }
      });
    },
    updateLeftDeselectAll() {
      let vm = this;

      vm.listLeft.map((item) => {
        if (item.visible === true && !item.disabled) {
          vm.updateItem(item, {}, false);
        }
      });
    },
    updateRightSelectAll() {
      let vm = this;

      vm.listRight.map((item) => {
        item.children.map((children) => {
          if (item.selected === true && !item.disabled) {
            vm.updateItem(children, item, true);
          }
        });
      });
    },
    updateRightDeselectAll() {
      let vm = this;
      vm.listRight.map((item) => {
        item.children.map((children) => {
          if (item.selected === true && !item.disabled) {
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
      this.dataSelected = dataSelected;
    },

    prepareList() {
      let vm = this;
      let foundSelected = {};
      vm.dataListOriginal = clone(vm.list);
      let keyParentsSelected = Object.keys(vm.model);
      let dataList = vm.list.filter((item) => {
        let valueParent = item.value;
        let existsParentSelected = keyParentsSelected.indexOf(valueParent) >= 0;

        if (existsParentSelected) {
          item.selectedDefault = true;
          foundSelected[valueParent] = [];
        } else {
          item.selectedDefault = false;
        }
        if (item.children) {
          item.children.filter((item) => {
            let valueChildren = item.value;

            // Has selected
            if (existsParentSelected) {
              let existsChildrenSelected =
                vm.model[valueParent].indexOf(valueChildren) >= 0;

              if (existsChildrenSelected) {
                item.selectedDefault = true;
                foundSelected[valueParent].push(valueChildren);
              } else {
                item.selectedDefault = false;
              }
            }
          });
        }
        return item;
      });
      vm.dataSelected = foundSelected;
      vm.dataList = reorder(vm, dataList);
    },
    prepareListLeft() {
      let vm = this;

      // Organiza a listLeft
      this.listLeft = this.dataList.filter((item) => {
        item.visible = true;
        if (item.children) {
          item.children = item.children.map((children) => {
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
  },
  beforeMount() {
    this.prepareList();
  },
  mounted() {
    this.prepareListLeft();
  },
  computed: {
    totalChildrenSelected() {
      return Object.keys(this.dataSelected)
        .map((ab) => {
          return this.dataSelected[ab].length;
        })
        .reduce((a, b) => a + b, 0);
    },
    filteredListL() {
      let vm = this;
      let search = normalizeText(this.searchL);
      let selected = Object.keys(this.dataSelected);

      let listLeft = clone(this.listLeft);

      listLeft = listLeft.filter((item) => {
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
          item.children = item.children.map((children) => {
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
          item.totalChildrenSelected = item.children.filter(function (a) {
            return a.selected === true;
          }).length;
          return item.children;
        }
        return item;
      });
      // this.listLeft = listLeft;
      return listLeft;
    },
    filteredListR() {
      let vm = this;
      let search = normalizeText(vm.searchR);

      let listRight = vm.listLeft.filter(function sub(item) {
        if (item.children) {
          item.children = item.children.map((children) => {
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
      // this.listRight = listRight;
      return listRight;
    },
  },
  data() {
    return {
      dataList: [],
      dataListOriginal: [],
      dataSelected: {},
      listLeft: [],
      listRight: [],
      searchL: "",
      searchR: "",
    };
  },
};
</script>
