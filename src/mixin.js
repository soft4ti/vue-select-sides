import { reorder } from "./utils";

export default {
  watch: {
    dataSelected(newItems, oldItems) {
      this.$emit("update-selected", newItems, oldItems);
    },
    orderBy() {
      this.$set(this, "listLeft", reorder(this, this.dataList));
      this.$set(this, "listRight", reorder(this, this.dataList));
    }
  },
  model: {
    prop: "model",
    event: "change"
  }
};
