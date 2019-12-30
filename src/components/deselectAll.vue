<template>
  <a href="javascript:void(0)" @click="$emit('update-deselect-all')">
    {{ $t("deselectAll") }}
  </a>
</template>

<script>
export default {
  name: "deselectAll",
  display: "Deselect all",
  props: {
    click: Function,
    items: Array
  }
};
</script>
