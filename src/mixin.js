export default {
  watch: {
    dataSelected(newItems, oldItems) {
      this.$emit("update-selected", newItems, oldItems);
    }
  }
};
