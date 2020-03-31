<template>
  <component
    class="vss"
    v-model="model"
    :is="getComponent()"
    :type="params.type"
    :list="listClone"
    :search="params.search"
    :total="params.total"
    :toggle-all="params.toggleAll"
    :order-by="params.orderBy"
    :placeholder-search-left="params.placeholderSearchLeft"
    :placeholder-search-right="params.placeholderSearchRight"
    :sort-selected-up="params.sortSelectedUp"
    @update-selected="updateSelected"
  >
  </component>
</template>

<script>
import i18n from "./i18n";
import { clone } from "./utils";

const grouped = require("./modules/grouped").default;
const mirror = require("./modules/mirror").default;

export default {
  i18n,
  name: "core-select-sides",
  display: "Core select sides",
  components: { mirror, grouped },
  props: {
    list: {
      required: true,
      type: [Array, Object]
    },
    type: {
      type: String,
      default: undefined // "grouped"
    },
    orderBy: {
      type: String,
      default: undefined
    },
    placeholderSearchLeft: {
      type: [String, Boolean],
      default: undefined // false
    },
    placeholderSearchRight: {
      type: [String, Boolean],
      default: undefined // false
    },
    sortSelectedUp: {
      type: Boolean,
      default: undefined // false
    },
    search: {
      type: Boolean,
      default: undefined // true
    },
    total: {
      type: Boolean,
      default: undefined // true
    },
    toggleAll: {
      type: Boolean,
      default: undefined // true
    },
    model: {
      type: [Object, Array],
      default: undefined
    }
  },
  watch: {
    list(newVal) {
      this.$set(this, "listClone", clone(newVal));
    },
    type(newVal) {
      this.$set(this.params, "type", newVal);
    },
    search(newVal) {
      this.$set(this.params, "search", newVal);
    },
    total(newVal) {
      this.$set(this.params, "total", newVal);
    },
    toggleAll(newVal) {
      this.$set(this.params, "toggleAll", newVal);
    },
    orderBy(newVal) {
      this.$set(this.params, "orderBy", newVal);
    },
    placeholderSearchLeft(newVal) {
      this.$set(this.params, "placeholderSearchLeft", newVal);
    },
    placeholderSearchRight(newVal) {
      this.$set(this.params, "placeholderSearchRight", newVal);
    },
    sortSelectedUp(newVal) {
      this.$set(this.params, "sortSelectedUp", newVal);
    }
  },
  model: {
    prop: "model",
    event: "change"
  },
  methods: {
    updateSelected(items) {
      this.$emit("change", items);
    },
    getComponent() {
      return this.params.type;
    },
    selectLocale(locale) {
      if (this.enabledLocales.indexOf(locale) >= 0) {
        this.$i18n.locale = locale;
      }
    },
    setDefaultParams() {
      let vm = this;

      let items = {
        type: vm.type,
        orderBy: vm.orderBy,
        placeholderSearchLeft: vm.placeholderSearchLeft,
        placeholderSearchRight: vm.placeholderSearchRight,
        sortSelectedUp: vm.sortSelectedUp,
        search: vm.search,
        total: vm.total,
        toggleAll: vm.toggleAll
      };

      Object.keys(items).forEach(key => {
        let value = items[key];

        if (value === undefined) {
          if (vm.defaultOptions[key] !== undefined) {
            vm.$set(vm.params, key, vm.defaultOptions[key]);
          }
        } else {
          vm.$set(vm.params, key, value);
        }
      });

      if (vm.defaultOptions.locale !== undefined) {
        vm.selectLocale(vm.defaultOptions.locale);
      }
    }
  },
  beforeMount() {
    this.setDefaultParams();
    this.$set(this, "listClone", clone(this.list));
  },
  data() {
    return {
      listClone: [],
      locale: "en_US",
      enabledLocales: ["pt_BR", "en_US", "es_ES", "fr_FR"],
      params: {
        type: "mirror",
        orderBy: undefined,
        placeholderSearchLeft: false,
        placeholderSearchRight: false,
        sortSelectedUp: false,
        search: true,
        total: true,
        toggleAll: true
      }
    };
  }
};
</script>
