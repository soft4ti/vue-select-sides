<template>
  <ul class="vm2s-list-ul">
    <li
      v-for="(item, index) in items"
      :key="index"
      v-show="hasChildren ? item.selected : item.visible"
      @click="!hasChildren ? toggleItem(item, {}, item.selected) : false"
      :class="liClass(item, hasChildren)"
    >
      <span style="">
        {{ item.label }}
        <small
          v-if="!hasChildren && item.totalChildrenSelected !== 0"
          class="vm2s-list-badge"
        >
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
    hasChildren: Boolean,
    items: Array
  },
  methods: {
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
