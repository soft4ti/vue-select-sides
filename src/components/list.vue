<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      v-show="hasChildren ? item.selected : item.visible"
      @click="
        !hasChildren ? toggleItem(item, item.selected, item.children) : false
      "
    >
      <strong
        style="display: flex; align-items: center; justify-content: space-between"
      >
        {{ item.selectedDefault }} - {{ item.label }}
        <small
          v-if="!hasChildren && totalSelected(item.children) !== 0"
          style="display: flex; align-items: center; justify-content: center; font-size: 7px; color: white; border-radius: 50%; width: 10px; height: 10px; background: green;padding: 2px;"
        >
          {{ totalSelected(item.children) }}
        </small>
      </strong>

      <ul v-if="hasChildren">
        <li
          v-for="(children, indexChild) in item.children"
          :key="index + indexChild"
          @click="toggleItem(children, children.selected, [])"
          v-show="children.visible"
        >
          {{ children.selected }}: {{ children.label }}
        </li>
        <no-results v-show="totalChildren(item.children) === 0"></no-results>
      </ul>
    </li>
    <no-results
      v-show="totalChildren(items) === 0 && !hasChildren"
    ></no-results>
  </ul>
</template>

<script>
const { clone } = require("../utils");
const noResults = require("./noResults.vue").default;

export default {
  name: "list",
  display: "List",
  mounted() {
    this.$set(this, "itemsClone", clone(this.items));
  },
  components: {
    noResults
  },
  props: {
    hasChildren: Boolean,
    items: Array
  },
  methods: {
    totalChildren(o) {
      return o.filter(function(a) {
        return a.visible === true;
      }).length;
    },
    totalSelected(o) {
      return o.filter(function(a) {
        return a.selected === true;
      }).length;
    },

    toggleItem(item, isSelected, children) {
      this.$emit("updated-item", item, !isSelected, children);
    }
  },
  data() {
    return {
      itemsClone: []
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
</style>
