<template>
  <a href="javascript:void(0)" @click="$emit('update-deselect-all')">
    {{ $t("deselectAll") }}
  </a>
</template>

<script>
export default {
  name: "v-deselect-all",
  display: "Deselect all",
  emits: ["update-deselect-all"],
  props: {
    click: Function,
    items: Array,
  },
};
</script>
