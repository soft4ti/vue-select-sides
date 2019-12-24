<template>
  <a href="#" @click="toggleAll(items)">
    Deselect All
  </a>
</template>

<script>
export default {
  name: "deselectAll",
  display: "Deselect All",
  props: {
    click: Function,
    items: Array
  },
  methods: {
    toggleAll(items) {
      console.log(items);
      // return items.map(item => {
      //   if (item.visible === true) {
      //     item.selected = false;
      //   }
      //   return item;
      // });
    }
  }
};
</script>
