<template>
  <component
    class="vss"
    v-model="model"
    :is="getComponent()"
    :lang="lang"
    :list="list"
    :search="search"
    :toggle-all="toggleAll"
    :order-by="orderBy"
    :sort-selected-up="sortSelectedUp"
    @update-selected="updateSelected"
  >
  </component>
</template>

<script>
import i18n from "./i18n";

const types = require("./types").default;
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
      default: "grouped"
    },
    lang: {
      type: String,
      default: "en_US"
    },
    orderBy: {
      type: String,
      default: undefined
    },
    sortSelectedUp: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: true
    },
    toggleAll: {
      type: Boolean,
      default: true
    },
    model: {
      type: [Object, Array],
      default: undefined
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
      if (types[this.type] !== undefined) {
        return this.type;
      } else {
        throw new Error(`The prop type does not exist: "${this.type}"`);
      }
    }
  },
  beforeMount() {
    // Languages
    const enabledLangs = ["pt_BR", "en_US"];

    if (enabledLangs.indexOf(this.lang) >= 0) {
      this.$i18n.locale = this.lang;
    }
  }
};
</script>
