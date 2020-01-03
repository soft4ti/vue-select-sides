<template>
  <input
    type="text"
    v-model="inputVal"
    :placeholder="$t('searchPlaceholder')"
  />
</template>

<script>
export default {
  name: "v-search",
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
