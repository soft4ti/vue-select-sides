import { reorder } from "./utils";

export default {
  emits: ["update-selected"],
  watch: {
    model(newItems, oldItems) {
      if (JSON.stringify(newItems) !== JSON.stringify(oldItems)) {
        this.dataSelected = newItems;
      }
    },
    dataSelected(newItems, oldItems) {
      this.$emit("update-selected", newItems, oldItems);
    },
    orderBy() {
      this.listLeft = reorder(this, this.dataList);
      this.listRight = reorder(this, this.dataList);
    },
    list(newItems) {
      if (JSON.stringify(newItems) !== JSON.stringify(this.dataListOriginal)) {
        this.prepareList();
        this.prepareListLeft();
      }
    },
  },
  model: {
    prop: "model",
    event: "change",
  },
  props: {
    placeholderSearchLeft: {
      type: [String, Boolean],
    },
    placeholderSearchRight: {
      type: [String, Boolean],
    },
    type: {
      type: String,
    },
    search: {
      type: Boolean,
    },
    total: {
      type: Boolean,
    },
    toggleAll: {
      type: Boolean,
    },
    orderBy: {
      type: String,
    },
    sortSelectedUp: {
      type: Boolean,
    },
  },
};
