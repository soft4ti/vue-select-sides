<template>
  <div class="ex">
    <header>
      <div>
        <img src="../static/logo.png" />
      </div>
      <h2>Vue select sides</h2>
      <h3>Examples</h3>
      <br />
      <a :href="repo" target="_blank">{{ repo }}</a>
    </header>
    <hr />

    <div :class="`the-body ${affix}`">
      <nav>
        <div>
          <ul>
            <li><strong>Mirror</strong></li>
            <ul>
              <li><a href="#mirror-basic">01) Basic</a></li>
              <li><a href="#mirror-with-selecteds">02) With selecteds</a></li>
              <li><a href="#mirror-only-list">03) Only list</a></li>
              <li><a href="#mirror-sort-list">04) Sort list</a></li>
              <li>
                <a href="#mirror-placeholder-search">
                  05) Placeholder search
                </a>
              </li>
              <li>
                <a href="#mirror-with-disabled"> 06) With disabled </a>
              </li>
            </ul>
          </ul>
          <ul>
            <li><strong>Grouped</strong></li>
            <ul>
              <li><a href="#grouped-basic">01) Basic</a></li>
              <li><a href="#grouped-with-selecteds">02) With selecteds</a></li>
              <li><a href="#grouped-only-list">03) Only list</a></li>
              <li><a href="#grouped-sort-list">04) Sort list</a></li>
              <li>
                <a href="#grouped-sort-selected-first">
                  05) Sort selected first
                </a>
              </li>
              <li>
                <a href="#grouped-placeholder-search">
                  06) Placeholder search
                </a>
              </li>
              <li><a href="#grouped-with-disabled">07) With disabled</a></li>
            </ul>
          </ul>
        </div>
      </nav>
      <section>
        <div id="mirror-basic" class="ex-section">
          <div class="ex-section-title">
            <h3>01) Mirror - basic</h3>
            <a :href="`${repoExamples}mirror-basic.vue`" target="_blank">
              View source
            </a>
          </div>
          <example-mirror-01></example-mirror-01>
        </div>
        <hr />
        <div id="mirror-with-selecteds" class="ex-section">
          <div class="ex-section-title">
            <h3>02) Mirror - with selecteds</h3>
            <a
              :href="`${repoExamples}mirror-with-selecteds.vue`"
              target="_blank"
            >
              View source
            </a>
          </div>
          <example-mirror-02></example-mirror-02>
        </div>
        <hr />

        <div id="mirror-only-list" class="ex-section">
          <div class="ex-section-title">
            <h3>03) Mirror - only list (search and footer removed)</h3>
            <a :href="`${repoExamples}mirror-only-list.vue`" target="_blank">
              View source
            </a>
          </div>
          <example-mirror-03></example-mirror-03>
        </div>
        <hr />

        <div id="mirror-sort-list" class="ex-section">
          <div class="ex-section-title">
            <h3>04) Mirror - sort list</h3>
            <a :href="`${repoExamples}mirror-sort-list.vue`" target="_blank">
              View source
            </a>
          </div>
          <example-mirror-04></example-mirror-04>
        </div>
        <hr />

        <div id="mirror-placeholder-search" class="ex-section">
          <div class="ex-section-title">
            <h3>05) Mirror - placeholder search</h3>
            <a
              :href="`${repoExamples}mirror-placeholder-search.vue`"
              target="_blank"
            >
              View source
            </a>
          </div>
          <example-mirror-05></example-mirror-05>
        </div>
        <hr />

        <div id="mirror-with-disabled" class="ex-section">
          <div class="ex-section-title">
            <h3>06) Mirror - with disabled</h3>
            <a
              :href="`${repoExamples}mirror-with-disabled.vue`"
              target="_blank"
            >
              View source
            </a>
          </div>
          <example-mirror-06></example-mirror-06>
        </div>
        <hr />

        <div id="grouped-basic" class="ex-section">
          <div class="ex-section-title">
            <h3>01) Grouped - basic</h3>
            <a :href="`${repoExamples}grouped-basic.vue`" target="_blank">
              View source
            </a>
          </div>
          <example-grouped-01></example-grouped-01>
        </div>
        <hr />

        <div id="grouped-with-selecteds" class="ex-section">
          <div class="ex-section-title">
            <h3>02) Grouped - with selecteds</h3>
            <a
              :href="`${repoExamples}grouped-with-selecteds.vue`"
              target="_blank"
            >
              View source
            </a>
          </div>
          <example-grouped-02></example-grouped-02>
        </div>
        <hr />

        <div id="grouped-only-list" class="ex-section">
          <div class="ex-section-title">
            <h3>03) Grouped - only list (search and footer removed)</h3>
            <a :href="`${repoExamples}grouped-only-list.vue`" target="_blank">
              View source
            </a>
          </div>
          <example-grouped-03></example-grouped-03>
        </div>
        <hr />

        <div id="grouped-sort-list" class="ex-section">
          <div class="ex-section-title">
            <h3>04) Grouped - sort list</h3>
            <a :href="`${repoExamples}grouped-sort-list.vue`" target="_blank">
              View source
            </a>
          </div>
          <example-grouped-04></example-grouped-04>
        </div>
        <hr />

        <div id="grouped-sort-selected-first" class="ex-section">
          <div class="ex-section-title">
            <h3>05) Grouped - sort selected to top list</h3>
            <a
              :href="`${repoExamples}grouped-sort-selected-first.vue`"
              target="_blank"
            >
              View source
            </a>
          </div>
          <example-grouped-05></example-grouped-05>
        </div>
        <hr />

        <div id="grouped-placeholder-search" class="ex-section">
          <div class="ex-section-title">
            <h3>06) Grouped - placeholder search</h3>
            <a
              :href="`${repoExamples}grouped-placeholder-search.vue`"
              target="_blank"
            >
              View source
            </a>
          </div>
          <example-grouped-06></example-grouped-06>
        </div>
        <hr />

        <div id="grouped-with-disabled" class="ex-section">
          <div class="ex-section-title">
            <h3>07) Grouped - placeholder search</h3>
            <a
              :href="`${repoExamples}grouped-with-disabled.vue`"
              target="_blank"
            >
              View source
            </a>
          </div>
          <example-grouped-07></example-grouped-07>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import exampleMirror01 from "./components/mirror-basic.vue";
import exampleMirror02 from "./components/mirror-with-selecteds.vue";
import exampleMirror03 from "./components/mirror-only-list.vue";
import exampleMirror04 from "./components/mirror-sort-list.vue";
import exampleMirror05 from "./components/mirror-placeholder-search.vue";
import exampleMirror06 from "./components/mirror-with-disabled.vue";

import exampleGrouped01 from "./components/grouped-basic.vue";
import exampleGrouped02 from "./components/grouped-with-selecteds.vue";
import exampleGrouped03 from "./components/grouped-only-list.vue";
import exampleGrouped04 from "./components/grouped-sort-list.vue";
import exampleGrouped05 from "./components/grouped-sort-selected-first.vue";
import exampleGrouped06 from "./components/grouped-placeholder-search.vue";
import exampleGrouped07 from "./components/grouped-with-disabled.vue";

import { repository } from "../package.json";

const repo = repository.url;
const repoExamples = repo + `/blob/master/example/components/`;

export default {
  components: {
    exampleMirror01,
    exampleMirror02,
    exampleMirror03,
    exampleMirror04,
    exampleMirror05,
    exampleMirror06,
    exampleGrouped01,
    exampleGrouped02,
    exampleGrouped03,
    exampleGrouped04,
    exampleGrouped05,
    exampleGrouped06,
    exampleGrouped07,
  },
  methods: {
    scrolling() {
      if (window.scrollY >= 275) {
        this.affix = "affixed";
      } else {
        this.affix = "";
      }
    },
  },
  data() {
    return {
      affix: "",
      repoExamples: repoExamples,
      repo: repo,
    };
  },
  mounted() {
    console.log("example/app.vue mounted");
    window.addEventListener("scroll", this.scrolling);
  },
};
</script>

<style lang="scss">
@import "../styles/themes/soft.scss";

$default-height: 300px;

.vss {
  height: $default-height;
}

// Layout example
header {
  margin: 30px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    max-height: 120px;
    margin-bottom: 10px;
  }

  h2,
  h3 {
    margin: 5px;
  }

  a {
    color: $selected-color;
    text-decoration: none;
  }
}

.the-body {
  width: 80%;
  margin: 0 auto;
  display: flex;

  &.affixed {
    nav {
      margin-top: 0px;
      position: fixed;
      top: 30px;
    }

    section {
      margin-left: 15rem;
    }
  }

  nav {
    margin-top: 30px;
    background-color: $default-item-background;
    border-radius: $border-radius-base;
    width: 15rem;
    height: calc(100vh - 60px);
    overflow-y: auto;

    > div {
      padding: 25px 30px;
    }

    ul {
      list-style: none;
      margin: 0px 0px 15px;
      padding: 0px;
      li {
        line-height: 1.5;

        a {
          text-decoration: none;
          color: $dark;

          &:hover {
            color: $selected-color;
          }
        }
      }
      > ul {
        padding-left: 15px;
      }
    }
  }

  section {
    padding-left: 2rem;
    width: 74%;
  }
}

.ex {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  hr {
    border-style: solid;
    border-color: transparent;
    border-top-color: #f1f1f1;
    margin: 35px 0px 0px;
  }

  .ex-section {
    // width: 70%;
    // margin: 0 auto;
    padding-top: 30px;

    .ex-section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        text-decoration: none;
        background-color: $selected-color;
        padding: 10px;
        border-radius: $border-radius-base;
        color: $white;
        font-size: $font-size-base;
      }
    }

    .ex-lib {
      display: flex;
      .vss {
        width: 65%;
      }
      .ex-result {
        margin-left: 2.5rem;
        width: 35%;

        h4 {
          margin: 0px;
        }

        pre {
          height: $default-height - 50px;
          overflow-y: auto;
          background: #f1f1f1;
          padding: 10px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
