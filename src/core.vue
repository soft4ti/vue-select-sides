<template>
  <component
    class="vm2s"
    :is="getComponent()"
    :lang="lang"
    :list="dataList"
    :selected="selected"
    :selected-item="selectedItem"
    :selected-parent="selectedParent"
    :search="search"
    :toggle-all="toggleAll"
    :order-by="orderBy"
    :sort-selected-up="sortSelectedUp"
    @update-selected="updateSelected"
  >
  </component>
</template>

<script>
const types = require("./types").default;
const grouped = require("./grouped").default;
const mirror = require("./mirror").default;

export default {
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
    selectedItem: {
      type: Array
    },
    selectedParent: {
      type: Array
    },
    selected: {
      type: [Object, Array]
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
    }
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
    this.$set(this, "dataList", this.list);

    // Languages
    const enabledLangs = ["pt_BR", "en_US"];

    if (enabledLangs.indexOf(this.lang) >= 0) {
      this.$i18n.locale = this.lang;
    }
  },
  data() {
    return {
      dataList: [],
      dataSelected: {}
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
  display: flex;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-between;
}

.vm2s-list-badge {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vm2s-span,
.vm2s-list-ul li {
  user-select: none;
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
</style>
