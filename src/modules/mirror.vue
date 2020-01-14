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
          :enable-counter="false"
          :has-children="false"
          :type="type"
          side="left"
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
            </div>
            <v-total :value="dataSelected.length" v-if="total"></v-total>
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
          :enable-counter="false"
          :has-children="false"
          :type="type"
          side="right"
          :items="filteredListR"
          @updated-item="updateItem"
        ></v-list>
        <div class="vss-footer" v-show="toggleAll || total">
          <div class="vss-footer-bg">
            <div>
              <v-deselect-all
                v-if="toggleAll"
                :items="listRight"
                @update-deselect-all="updateRightDeselectAll"
              ></v-deselect-all>
            </div>
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
  name: "mirror-select-sides",
  display: "Mirror select sides",
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
    model: {
      type: Array,
      default: undefined
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
    updateRightDeselectAll() {
      let vm = this;

      vm.listRight.map(item => {
        if (item.visible === true) {
          vm.updateItem(item, {}, false);
        }
      });
    },
    updateItem(item, parent, selected) {
      let dataSelected = clone(this.dataSelected);

      if (selected) {
        dataSelected.push(item.value);
      } else {
        dataSelected = removeItemArray(dataSelected, item.value);
      }

      this.$set(this, "dataSelected", dataSelected);
    },

    prepareList() {
      this.$set(this, "dataListOriginal", clone(this.list));

      let vm = this;
      let foundSelected = [];
      let dataList = vm.list.filter(item => {
        let value = item.value;

        if (vm.model.indexOf(value) >= 0) {
          item.selectedDefault = true;
          foundSelected.push(value);
        } else {
          item.selectedDefault = false;
        }

        return item;
      });

      vm.$set(vm, "dataSelected", foundSelected);
      vm.$set(vm, "dataList", reorder(vm, dataList));
    },

    prepareListLeft() {
      this.listLeft = this.dataList.filter(item => {
        item.visible = true;
        return item;
      });
    }
  },
  beforeMount() {
    this.prepareList();
  },
  mounted() {
    this.prepareListLeft();
  },
  computed: {
    filteredListL() {
      let search = normalizeText(this.searchL);
      let selected = this.dataSelected;
      let listLeft = clone(this.listLeft);

      listLeft = listLeft.filter(item => {
        let label = normalizeText(item.label);

        // Has selected
        if (selected.indexOf(item.value) >= 0) {
          item.selected = true;
          item.visible = false;
        } else {
          item.selected = false;
          item.visible = true;
        }

        // Has search
        if (label.includes(search) && item.visible === true) {
          item.visible = true;
        } else {
          item.visible = false;
        }

        return item;
      });

      this.$set(this, "listLeft", listLeft);

      return listLeft;
    },
    filteredListR() {
      let vm = this;
      let search = normalizeText(vm.searchR);
      let selected = this.dataSelected;
      let listRight = clone(vm.listLeft);

      listRight = listRight.filter(item => {
        let label = normalizeText(item.label);

        // Has selected
        if (selected.indexOf(item.value) >= 0) {
          item.selected = true;
          item.visible = true;
        } else {
          item.selected = false;
          item.visible = false;
        }

        // Has search
        if (label.includes(search) && item.visible === true) {
          item.visible = true;
        } else {
          item.visible = false;
        }

        return item;
      });

      this.$set(this, "listRight", listRight);

      return listRight;
    }
  },
  data() {
    return {
      dataList: [],
      dataListOriginal: [],
      dataSelected: [],
      listLeft: [],
      listRight: [],
      searchL: "",
      searchR: ""
    };
  }
};
</script>
