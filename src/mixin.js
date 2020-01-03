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
  },
  props: {
    placeholderSearchLeft: {
      type: [String, Boolean]
    },
    placeholderSearchRight: {
      type: [String, Boolean]
    },
    type: {
      type: String
    },
    search: {
      type: Boolean
    },
    total: {
      type: Boolean
    },
    toggleAll: {
      type: Boolean
    },
    orderBy: {
      type: String
    },
    sortSelectedUp: {
      type: Boolean
    }
  }
};
