<template>
  <ul class="vss-list-ul">
    <li
      v-for="(item, index) in items"
      :key="index"
      v-show="showParent(item)"
      @click="!hasChildren ? toggleItem(item, {}, item.selected) : false"
      :class="liClass(item, hasChildren)"
    >
      <span style="">
        {{ item.label }}
        <small v-if="showCounter(item)" class="vss-list-badge">
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
        <no-results v-show="totalItems(item.children) === 0"></no-results>
      </ul>
    </li>
    <no-selection v-show="showNoSelection(items)"></no-selection>

    <no-results v-show="showNoResultParent(items)"></no-results>
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
    },
    type: {
      type: String
    },
    side: {
      type: String
    }
  },
  methods: {
    showNoResultParent(items) {
      if (this.type === "grouped") {
        return this.totalItems(items) === 0 && !this.hasChildren;
      } else {
        if (this.side === "left") {
          return (
            items.length === 0 ||
            this.totalParentSelected(items) === items.length ||
            (items.length > 0 && this.totalItems(items) === 0)
          );
        }
        if (this.side === "right") {
          return (
            items.length === 0 ||
            (this.totalParentSelected(items) !== 0 &&
              items.length > 0 &&
              this.totalItems(items) === 0)
          );
        }
      }
    },
    showNoSelection(items) {
      if (this.type === "grouped") {
        return (
          (this.totalParentSelected(items) === 0 && this.hasChildren) ||
          items.length === 0
        );
      } else {
        if (this.side === "left") {
          return false;
        }
        if (this.side === "right") {
          return items.length !== 0 && this.totalParentSelected(items) === 0;
        }
      }
    },
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
    totalItems(o) {
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
