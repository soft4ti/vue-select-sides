<template>
  <div class="ex-lib">
    <vue-select-sides
      type="mirror"
      :order-by="order"
      v-model="selected"
      :list="list"
    ></vue-select-sides>
    <div class="ex-result">
      <h4>Result</h4>
      <div class="ex-label-radio">
        <label>
          <input type="radio" id="asc" value="asc" v-model="order" />
          ASC
        </label>
        <label>
          <input type="radio" id="desc" value="desc" v-model="order" />
          DESC
        </label>
      </div>
      <pre><b>Order</b>: {{ order }}.<br><br>{{ selected }}</pre>
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
      order: "asc",
      selected: [],
      list: [
        {
          value: "norte",
          label: "Norte"
        },
        {
          value: "sul",
          label: "Sul"
        },
        {
          value: "centro-oeste",
          label: "Centro Oeste"
        },
        {
          value: "sudeste",
          label: "Sudeste"
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

<style lang="scss" scoped>
.ex-label-radio {
  padding: 10px 0px 2px;
  display: flex;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 15px;

    input {
      padding: 0px;
      margin: 0px 5px 0px 0px;
    }
  }
}

pre {
  height: 322px !important;
}
</style>
