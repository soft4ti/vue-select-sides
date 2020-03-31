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
export default {
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
