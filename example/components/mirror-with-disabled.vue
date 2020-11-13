<template>
  <div class="ex-lib">
    <vue-select-sides
      type="mirror"
      v-model="selected"
      :list="list"
    ></vue-select-sides>
    <div class="ex-result">
      <h4>Result</h4>
      <pre>{{ selected }}</pre>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vueSelectSides from "../../src/index";

Vue.use(vueSelectSides, {
  locale: "en_US"
});

export default {
  components: {
    vueSelectSides
  },
  data() {
    return {
      selected: ["sudeste", "centro-oeste"],
      list: [
        {
          value: "sul",
          label: "Sul"
        },
        {
          value: "sudeste",
          label: "Sudeste",
          disabled: true
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
          label: "Nordeste",
          disabled: true
        }
      ]
    };
  }
};
</script>
