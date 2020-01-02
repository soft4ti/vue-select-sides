<template>
  <div class="ex-lib">
    <vue-select-sides
      type="mirror"
      v-model="selected"
      :list="list"
      :search="search"
      :toggle-all="toggleAll"
    ></vue-select-sides>
    <div class="ex-result">
      <h4>Result</h4>
      <pre>{{ selected }}</pre>
    </div>
  </div>
</template>

<script>
import vueSelectSides from "../../src/index";

export default {
  components: {
    vueSelectSides
  },
  data() {
    return {
      search: false,
      toggleAll: false,
      selected: [],
      list: [
        {
          value: "sul",
          label: "Sul"
        },
        {
          value: "sudeste",
          label: "Sudeste"
        },
        {
          value: "norte",
          label: "Norte"
        },
        {
          value: "centro-oeste",
          label: "Centro Oeste"
        },
        {
          value: "nordeste",
          label: "Nordeste"
        }
      ]
    };
  }
};
</script>
