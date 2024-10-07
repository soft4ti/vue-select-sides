<template>
  <div class="ex-lib">
    <vue-select-sides
      type="grouped"
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

// vueSelectSides.install({ locale: "en_US" });

export default {
  components: {
    vueSelectSides,
  },
  data() {
    return {
      selected: {
        sudeste: ["minas-gerais"],
        norte: ["acre", "roraima"],
      },
      list: [
        {
          value: "sul",
          label: "Sul",
          disabled: true,
          children: [
            {
              value: "santa-catarina",
              label: "Santa Catarina",
            },
            {
              value: "rio-grande-do-sul",
              label: "Rio Grande do Sul",
            },
            {
              value: "parana",
              label: "Paraná",
            },
          ],
        },
        {
          value: "sudeste",
          label: "Sudeste",
          children: [
            {
              value: "minas-gerais",
              label: "Minas Gerais",
            },
            {
              value: "sao-paulo",
              label: "São Paulo",
            },
            {
              value: "espirito-santo",
              label: "Espírito Santo",
            },
            {
              value: "rio-de-janeiro",
              label: "Rio de Janeiro",
            },
          ],
        },
        {
          value: "norte",
          label: "Norte",
          disabled: true,
          children: [
            {
              value: "acre",
              label: "Acre",
              disabled: true,
            },
            {
              value: "amapa",
              label: "Amapá",
              disabled: true,
            },
            {
              value: "roraima",
              label: "Roraima",
              disabled: true,
            },
            {
              value: "tocantins",
              label: "Tocantins",
              disabled: true,
            },
            {
              value: "para",
              label: "Pará",
              disabled: true,
            },
            {
              value: "rondonia",
              label: "Rondônia",
              disabled: true,
            },
            {
              value: "amazonas",
              label: "Amazonas",
              disabled: true,
            },
          ],
        },
        {
          value: "centro-oeste",
          label: "Centro Oeste",
          children: [
            {
              value: "mato-grosso",
              label: "Mato Grosso",
            },
            {
              value: "mato-grosso-do-sul",
              label: "Mato Grosso do Sul",
            },
            {
              value: "goias",
              label: "Goiás",
            },
            {
              value: "distrito-federal",
              label: "Distrito Federal",
            },
          ],
        },
        {
          value: "nordeste",
          label: "Nordeste",
          children: [
            {
              value: "bahia",
              label: "Bahia",
            },
            {
              value: "sergipe",
              label: "Sergipe",
            },
            {
              value: "alagoas",
              label: "Alagoas",
            },
            {
              value: "paraiba",
              label: "Paraíba",
            },
            {
              value: "pernambuco",
              label: "Pernambuco",
            },
            {
              value: "rio-grande-do-norte",
              label: "Rio Grande do Norte",
            },
            {
              value: "ceara",
              label: "Ceará",
            },
            {
              value: "piaui",
              label: "Piauí",
            },
            {
              value: "maranhao",
              label: "Maranhão",
            },
            {
              value: "mato-grosso",
              label: "Mato Grosso",
            },
            {
              value: "mato-grosso-do-sul",
              label: "Mato Grosso do Sul",
            },
            {
              value: "goias",
              label: "Goiás",
            },
            {
              value: "distrito-federal",
              label: "Distrito Federal",
            },
          ],
        },
      ],
    };
  },
};
</script>
