<template>
  <span :title="$t('totalSelected')">{{ value }}</span>
</template>

<script>
export default {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
};
</script>
