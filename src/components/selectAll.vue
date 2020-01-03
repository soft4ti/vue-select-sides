<template>
  <a href="javascript:void(0)" @click="$emit('update-select-all')">
    {{ $t("selectAll") }}
  </a>
</template>

<script>
export default {
  name: "v-select-all",
  display: "Select all",
  props: {
    items: Array
  }
};
</script>
