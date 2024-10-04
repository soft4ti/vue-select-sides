<template>
  <input type="text" v-model="inputVal" :placeholder="thePlaceholder" />
</template>

<script>
export default {
  name: "v-search",
  display: "Search",
  props: ["value", "placeholder"],
  beforeMount() {
    if (this.placeholder) {
      this.thePlaceholder = this.placeholder;
    } else {
      this.thePlaceholder = this.$t("searchPlaceholder");
    }
  },
  watch: {
    inputVal(val) {
      this.$emit("input", val);
    },
  },
  data() {
    return {
      inputVal: this.value,
      thePlaceholder: "",
    };
  },
};
</script>
