<template>
  <component
    class="vss"
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
    v-model="modelProp"
    @update-selected="updateSelected"
  >
  </component>
</template>

<script>
// import i18n from "./i18n";
import { clone } from "./utils";
import grouped from "./modules/grouped.vue";
import mirror from "./modules/mirror.vue";

export default {
  // i18n,
  name: "vue-select-sides",
  display: "Core select sides",
  components: {
    "mirror-select-sides": mirror,
    "grouped-select-sides": grouped,
  },
  props: {
    list: {
      required: true,
      type: [Array, Object],
    },
    type: {
      type: String,
      default: undefined, // "grouped"
    },
    orderBy: {
      type: String,
      default: undefined,
    },
    placeholderSearchLeft: {
      type: [String, Boolean],
      default: undefined, // false
    },
    placeholderSearchRight: {
      type: [String, Boolean],
      default: undefined, // false
    },
    sortSelectedUp: {
      type: Boolean,
      default: undefined, // false
    },
    search: {
      type: Boolean,
      default: undefined, // true
    },
    total: {
      type: Boolean,
      default: undefined, // true
    },
    toggleAll: {
      type: Boolean,
      default: undefined, // true
    },
    model: {
      type: [Object, Array],
      default: undefined,
    },
  },
  watch: {
    list(newVal) {
      console.log("abacaxi", newVal);
      this.listClone = clone(newVal);
    },
    type(newVal) {
      this.params.type = newVal;
    },
    search(newVal) {
      this.params.search = newVal;
    },
    total(newVal) {
      this.params.total = newVal;
    },
    toggleAll(newVal) {
      this.params.toggleAll = newVal;
    },
    orderBy(newVal) {
      this.params.orderBy = newVal;
    },
    placeholderSearchLeft(newVal) {
      this.params.placeholderSearchLeft = newVal;
    },
    placeholderSearchRight(newVal) {
      this.params.placeholderSearchRight = newVal;
    },
    sortSelectedUp(newVal) {
      this.params.sortSelectedUp = newVal;
    },
  },
  model: {
    prop: "model",
    event: "update",
  },
  methods: {
    updateSelected(items) {
      console.log("Updated selected value:", items);
      this.$emit("update:model-value", items);
    },
    getComponent() {
      // console.log(
      //   "Selected component:",
      //   this.params.type == "mirror"
      //     ? "mirror-select-sides"
      //     : "grouped-select-sides"
      // );
      return this.params.type == "mirror"
        ? "mirror-select-sides"
        : "grouped-select-sides";
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
        toggleAll: vm.toggleAll,
      };

      Object.keys(items).forEach((key) => {
        let value = items[key];

        if (value === undefined) {
          if (vm.defaultOptions[key] !== undefined) {
            vm.params[key] = vm.defaultOptions[key];
          }
        } else {
          vm.params[key] = value;
        }
      });

      if (vm.defaultOptions.locale !== undefined) {
        vm.selectLocale(vm.defaultOptions.locale);
      }
    },
  },
  computed: {
    modelProp: {
      get() {
        return this.model;
      },
      set(value) {
        this.$emit("update:model-value", value);
      },
    },
  },
  beforeMount() {
    this.setDefaultParams();
    this.listClone = clone(this.list);
  },
  data() {
    return {
      listClone: [],
      locale: "en_US",
      enabledLocales: ["pt_BR", "en_US", "es_ES", "fr_FR", "tr_TR", "pl_PL"],
      params: {
        type: "mirror",
        orderBy: undefined,
        placeholderSearchLeft: false,
        placeholderSearchRight: false,
        sortSelectedUp: false,
        search: true,
        total: true,
        toggleAll: true,
      },
    };
  },
};
</script>
