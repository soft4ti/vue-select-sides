<template>
  <a href="#" @click="toggleAll(items)">
    Select All
  </a>
</template>

<script>
export default {
  name: "selectAll",
  display: "selectAll",
  props: {
    items: Array
  },
  methods: {
    toggleAll(items) {
      console.log(items);
      // return items.map(item => {
      //   if (item.visible === true) {
      //     item.selected = true;
      //   }
      //   return item;
      // });
    }
  }
};
</script>
