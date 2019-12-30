<template>
  <ul class="vm2s-list-ul">
    <li
      v-for="(item, index) in items"
      :key="index"
      v-show="showParent(item)"
      @click="!hasChildren ? toggleItem(item, {}, item.selected) : false"
      :class="liClass(item, hasChildren)"
    >
      <span style="">
        {{ item.label }}
        <small v-if="showCounter(item)" class="vm2s-list-badge">
          {{ item.totalChildrenSelected }}
        </small>
      </span>

      <ul v-if="hasChildren">
        <li
          v-for="(children, indexChild) in item.children"
          :key="index + indexChild"
          @click="toggleItem(children, item, children.selected)"
          v-show="children.visible"
          :class="liClass(children, false)"
        >
          <span>
            {{ children.label }}
          </span>
        </li>
        <no-results v-show="totalChildren(item.children) === 0"></no-results>
      </ul>
    </li>
    <no-selection
      v-show="
        (totalParentSelected(items) === 0 && hasChildren) || items.length === 0
      "
    ></no-selection>

    <no-results
      v-show="totalChildren(items) === 0 && !hasChildren"
    ></no-results>
  </ul>
</template>

<script>
const noResults = require("./noResults.vue").default;
const noSelection = require("./noSelection.vue").default;

export default {
  name: "list",
  display: "List",
  mounted() {},
  components: {
    noResults,
    noSelection
  },
  props: {
    hasChildren: {
      type: Boolean
    },
    items: {
      type: Array
    },
    enableCounter: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    showCounter(item) {
      if (!this.enableCounter) return false;

      return !this.hasChildren && item.totalChildrenSelected !== 0;
    },
    showParent(item) {
      return this.hasChildren ? item.selected : item.visible;
    },
    liClass(item, hasChildren) {
      let output = [];

      if (hasChildren) {
        output.push("is-parent");
      }

      if (item.selected) {
        output.push("active");
      }

      return output;
    },
    totalChildren(o) {
      return o.filter(function(a) {
        return a.visible === true;
      }).length;
    },
    totalParentSelected(o) {
      return o.filter(function(a) {
        return a.selected === true;
      }).length;
    },

    toggleItem(item, parent, isSelected) {
      this.$emit("updated-item", item, parent, !isSelected);
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.vm2s-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.vm2s-list-ul {
  overflow-y: auto;
}

.vm2s-list-ul li {
  line-height: 1.5;
}
</style>
