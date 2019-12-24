<template>
  <input type="text" v-model="inputVal" />
</template>

<script>
export default {
  name: "search",
  display: "Search",
  props: ["value"],
  watch: {
    inputVal(val) {
      this.$emit("input", val);
    }
  },
  data() {
    return { inputVal: this.value };
  }
};
</script>
