<template>
  <a href="javascript:void(0)" @click="$emit('update-select-all')">
    {{ $t("selectAll") }}
  </a>
</template>

<script>
export default {
  name: "selectAll",
  display: "selectAll",
  props: {
    items: Array
  }
};
</script>
