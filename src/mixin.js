export default {
  watch: {
    dataSelected(newItems, oldItems) {
      this.$emit("update-selected", newItems, oldItems);
    }
  },
  model: {
    prop: "model",
    event: "change"
  },
  props: {
    model: {
      type: [Object, Array],
      default: undefined
    }
  }
};
