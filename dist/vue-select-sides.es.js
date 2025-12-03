import { createElementBlock as ne, openBlock as W, toDisplayString as Ue, withDirectives as Te, vModelText as us, createElementVNode as Q, resolveComponent as fe, Fragment as Dt, renderList as vn, normalizeClass as Nn, createCommentVNode as se, createTextVNode as fs, vShow as Re, createVNode as Ae, createBlock as ue, resolveDynamicComponent as _s, effectScope as ds, ref as Ze, shallowRef as al, computed as be, watch as Xt, isRef as ms, defineComponent as an, getCurrentInstance as Lt, h as ol, inject as ps, onBeforeMount as hs, onMounted as Es, onUnmounted as gs, Text as vs } from "vue";
const Ln = (...e) => {
  const t = e.filter((s) => typeof s == "string"), n = e.find((s) => typeof s == "function");
  return (s, r) => {
    for (let l of t) {
      let a = 1;
      l[0] === "-" && (a = -1, l = l.substring(1));
      let o = On(s, l), c = On(r, l);
      n && (o = n(l, o), c = n(l, c));
      const f = o === void 0, p = c === void 0;
      if (!(f && p)) {
        if (f) return 1;
        if (p) return -1;
        if (o < c) return -1 * a;
        if (o > c) return 1 * a;
      }
    }
    return 0;
  };
}, On = (e, t) => t.split(".").reduce((n, s) => n?.[s], e), Ie = (e) => JSON.parse(JSON.stringify(e)), Fe = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), kt = (e, t) => {
  let n = [];
  return e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label")), t.sort(Ln(...n)).map((s) => (s.children && s.children.sort(Ln(...n)), s)), t;
}, il = (e, t) => e.filter((n) => String(n) !== String(t)), Le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Ns = {
  name: "v-select-all",
  display: "Select all",
  emits: ["update-select-all"],
  props: {
    items: Array
  }
};
function Ls(e, t, n, s, r, l) {
  return W(), ne("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-select-all"))
  }, Ue(e.$t("selectAll")), 1);
}
const cl = /* @__PURE__ */ Le(Ns, [["render", Ls]]), Os = {
  name: "v-deselect-all",
  display: "Deselect all",
  emits: ["update-deselect-all"],
  props: {
    click: Function,
    items: Array
  }
};
function Ts(e, t, n, s, r, l) {
  return W(), ne("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-deselect-all"))
  }, Ue(e.$t("deselectAll")), 1);
}
const ul = /* @__PURE__ */ Le(Os, [["render", Ts]]), bs = {
  name: "v-search",
  display: "Search",
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
  beforeMount() {
    this.placeholder ? this.thePlaceholder = this.placeholder : this.thePlaceholder = this.$t("searchPlaceholder");
  },
  watch: {
    inputVal(e) {
      this.$emit("update:modelValue", e);
    }
  },
  data() {
    return {
      inputVal: this.value,
      thePlaceholder: ""
    };
  }
}, Is = ["placeholder"];
function Ss(e, t, n, s, r, l) {
  return Te((W(), ne("input", {
    type: "text",
    "onUpdate:modelValue": t[0] || (t[0] = (a) => r.inputVal = a),
    placeholder: r.thePlaceholder
  }, null, 8, Is)), [
    [us, r.inputVal]
  ]);
}
const fl = /* @__PURE__ */ Le(bs, [["render", Ss]]), As = {
  name: "v-no-results",
  display: "No results",
  methods: {}
}, ys = { class: "no-results" };
function Ps(e, t, n, s, r, l) {
  return W(), ne("li", ys, [
    Q("span", null, Ue(e.$t("searchNoResult")), 1)
  ]);
}
const Cs = /* @__PURE__ */ Le(As, [["render", Ps]]), Rs = {
  name: "v-no-selection",
  display: "No selection",
  methods: {}
}, Ds = { class: "no-selection" };
function ks(e, t, n, s, r, l) {
  return W(), ne("li", Ds, [
    Q("span", null, Ue(e.$t("searchParentSelected")), 1)
  ]);
}
const Ms = /* @__PURE__ */ Le(Rs, [["render", ks]]), Fs = {
  name: "v-list",
  display: "List",
  mounted() {
  },
  components: {
    "v-no-results": Cs,
    "v-no-selection": Ms
  },
  props: {
    hasChildren: {
      type: Boolean
    },
    items: {
      type: Array
    },
    enableCounter: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String
    },
    side: {
      type: String
    }
  },
  emits: ["updated-item"],
  methods: {
    showNoResultParent(e) {
      if (this.type === "grouped")
        return this.totalItems(e) === 0 && !this.hasChildren;
      if (this.side === "left")
        return e.length === 0 || this.totalParentSelected(e) === e.length || e.length > 0 && this.totalItems(e) === 0;
      if (this.side === "right")
        return e.length === 0 || this.totalParentSelected(e) !== 0 && e.length > 0 && this.totalItems(e) === 0;
    },
    showNoSelection(e) {
      if (this.type === "grouped")
        return this.totalParentSelected(e) === 0 && this.hasChildren || e.length === 0;
      if (this.side === "left")
        return !1;
      if (this.side === "right")
        return e.length !== 0 && this.totalParentSelected(e) === 0;
    },
    showCounter(e) {
      return this.enableCounter ? !this.hasChildren && e.totalChildrenSelected !== 0 : !1;
    },
    showParent(e) {
      return this.hasChildren ? e.selected : e.visible;
    },
    liClass(e, t) {
      let n = [];
      return t && n.push("is-parent"), e.selected && n.push("active"), e.disabled && n.push("is-disabled"), n;
    },
    totalItems(e) {
      return e.filter(function(t) {
        return t.visible === !0;
      }).length;
    },
    totalParentSelected(e) {
      return e.filter(function(t) {
        return t.selected === !0;
      }).length;
    },
    toggleItem(e, t, n) {
      if (e.disabled == !0)
        return !1;
      this.$emit("updated-item", e, t, !n);
    }
  },
  data() {
    return {};
  }
}, Us = { class: "vss-list-ul" }, ws = ["onClick"], Vs = { style: {} }, $s = {
  key: 0,
  class: "vss-list-badge"
}, Ws = { key: 0 }, Gs = ["onClick"];
function Hs(e, t, n, s, r, l) {
  const a = fe("v-no-results"), o = fe("v-no-selection");
  return W(), ne("ul", Us, [
    (W(!0), ne(Dt, null, vn(n.items, (c, f) => Te((W(), ne("li", {
      key: f,
      onClick: (p) => n.hasChildren ? !1 : l.toggleItem(c, {}, c.selected),
      class: Nn(l.liClass(c, n.hasChildren))
    }, [
      Q("span", Vs, [
        fs(Ue(c.label) + " ", 1),
        l.showCounter(c) ? (W(), ne("small", $s, Ue(c.totalChildrenSelected), 1)) : se("", !0)
      ]),
      n.hasChildren ? (W(), ne("ul", Ws, [
        (W(!0), ne(Dt, null, vn(c.children, (p, v) => Te((W(), ne("li", {
          key: `${f}-${v}`,
          onClick: (d) => l.toggleItem(p, c, p.selected),
          class: Nn(l.liClass(p, !1))
        }, [
          Q("span", null, Ue(p.label), 1)
        ], 10, Gs)), [
          [Re, p.visible]
        ])), 128)),
        Te(Ae(a, null, null, 512), [
          [Re, l.totalItems(c.children) === 0]
        ])
      ])) : se("", !0)
    ], 10, ws)), [
      [Re, l.showParent(c)]
    ])), 128)),
    Te(Ae(o, null, null, 512), [
      [Re, l.showNoSelection(n.items)]
    ]),
    Te(Ae(a, null, null, 512), [
      [Re, l.showNoResultParent(n.items)]
    ])
  ]);
}
const _l = /* @__PURE__ */ Le(Fs, [["render", Hs]]), Ys = {
  name: "v-separator",
  display: "Separator"
}, Bs = { class: "vss-span" };
function xs(e, t, n, s, r, l) {
  return W(), ne("div", Bs, " ‹ › ");
}
const dl = /* @__PURE__ */ Le(Ys, [["render", xs]]), js = {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
}, Ks = ["title"];
function Xs(e, t, n, s, r, l) {
  return W(), ne("span", {
    title: e.$t("totalSelected")
  }, Ue(n.value), 9, Ks);
}
const ml = /* @__PURE__ */ Le(js, [["render", Xs]]), pl = {
  emits: ["update-selected"],
  watch: {
    modelValue(e, t) {
      JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
    },
    dataSelected(e, t) {
      this.$emit("update-selected", e, t);
    },
    orderBy() {
      this.listLeft = kt(this, this.dataList), this.listRight = kt(this, this.dataList);
    },
    list(e) {
      JSON.stringify(e) !== JSON.stringify(this.dataListOriginal) && (this.prepareList(), this.prepareListLeft());
    }
  },
  props: {
    placeholderSearchLeft: {
      type: [String, Boolean]
    },
    placeholderSearchRight: {
      type: [String, Boolean]
    },
    type: {
      type: String
    },
    search: {
      type: Boolean
    },
    total: {
      type: Boolean
    },
    toggleAll: {
      type: Boolean
    },
    orderBy: {
      type: String
    },
    sortSelectedUp: {
      type: Boolean
    }
  }
}, Js = {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [pl],
  components: {
    "v-select-all": cl,
    "v-deselect-all": ul,
    "v-search": fl,
    "v-separator": dl,
    "v-list": _l,
    "v-total": ml
  },
  props: {
    list: {
      required: !0,
      type: [Array, Object]
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    updateLeftSelectAll() {
      let e = this;
      e.listLeft.map((t) => {
        t.visible === !0 && !t.disabled && e.updateItem(t, {}, !0);
      });
    },
    updateLeftDeselectAll() {
      let e = this;
      e.listLeft.map((t) => {
        t.visible === !0 && !t.disabled && e.updateItem(t, {}, !1);
      });
    },
    updateRightSelectAll() {
      let e = this;
      e.listRight.map((t) => {
        t.children.map((n) => {
          t.selected === !0 && !t.disabled && e.updateItem(n, t, !0);
        });
      });
    },
    updateRightDeselectAll() {
      let e = this;
      e.listRight.map((t) => {
        t.children.map((n) => {
          t.selected === !0 && !t.disabled && e.updateItem(n, t, !1);
        });
      });
    },
    updateItem(e, t, n) {
      let s = Ie(this.dataSelected);
      Object.keys(t).length > 0 ? (s[t.value] === void 0 && t.visible && (s[t.value] = []), n ? e.visible && s[t.value].indexOf(e.value) === -1 && s[t.value].push(e.value) : e.visible && (s[t.value] = il(
        s[t.value],
        e.value
      ))) : n ? s[e.value] === void 0 && (s[e.value] = []) : delete s[e.value], this.dataSelected = s;
    },
    prepareList() {
      let e = this, t = {};
      e.dataListOriginal = Ie(e.list);
      let n = Object.keys(e.modelValue), s = e.list.filter((r) => {
        let l = r.value, a = n.indexOf(l) >= 0;
        return a ? (r.selectedDefault = !0, t[l] = []) : r.selectedDefault = !1, r.children && r.children.filter((o) => {
          let c = o.value;
          a && (e.modelValue[l].indexOf(c) >= 0 ? (o.selectedDefault = !0, t[l].push(c)) : o.selectedDefault = !1);
        }), r;
      });
      e.dataSelected = t, e.dataList = kt(e, s);
    },
    prepareListLeft() {
      let e = this;
      this.listLeft = this.dataList.filter((t) => (t.visible = !0, t.children ? (t.children = t.children.map((n) => (e.dataSelected[t.value] !== void 0 && (e.dataSelected[t.value].indexOf(n.value) >= 0 ? n.selected = !0 : n.selected = !1), n)), t.children) : t));
    }
  },
  beforeMount() {
    this.prepareList();
  },
  mounted() {
    this.prepareListLeft();
  },
  computed: {
    totalChildrenSelected() {
      return Object.keys(this.dataSelected).map((e) => this.dataSelected[e].length).reduce((e, t) => e + t, 0);
    },
    filteredListL() {
      let e = this, t = Fe(this.searchL), n = Object.keys(this.dataSelected), s = Ie(this.listLeft);
      return s = s.filter((r) => {
        let l = Fe(r.label);
        return n.indexOf(r.value) >= 0 ? r.selected = !0 : r.selected = !1, l.includes(t) ? r.visible = !0 : r.visible = !1, r.children ? (r.children = r.children.map((a) => (a.selected = !1, e.dataSelected[r.value] !== void 0 && (e.dataSelected[r.value].indexOf(a.value) >= 0 ? a.selected = !0 : a.selected = !1), a)), r.totalChildrenSelected = r.children.filter(function(a) {
          return a.selected === !0;
        }).length, r.children) : r;
      }), s;
    },
    filteredListR() {
      let e = this, t = Fe(e.searchR), n = Ie(this.listLeft);
      return n = e.listRight.filter(function(r) {
        return r.children ? (r.children = r.children.map((l) => (Fe(l.label).includes(t) ? l.visible = !0 : l.visible = !1, e.dataSelected[r.value] !== void 0 && (e.dataSelected[r.value].indexOf(l.value) >= 0 ? l.selected = !0 : l.selected = !1), l)), r.children) : r;
      }), n;
    }
  },
  watch: {
    filteredListL(e) {
      this.listRight = e;
    }
  },
  data() {
    return {
      dataList: [],
      dataListOriginal: [],
      dataSelected: {},
      listLeft: [],
      listRight: [],
      searchL: "",
      searchR: ""
    };
  }
}, Qs = { class: "vss-list" }, qs = { class: "vss-inner-list" }, Zs = { class: "vss-footer" }, zs = { class: "vss-footer-bg" }, er = {
  key: 1,
  class: "vss-footer-separator"
}, tr = { class: "vss-list" }, nr = { class: "vss-inner-list" }, lr = { class: "vss-footer" }, sr = { class: "vss-footer-bg" }, rr = {
  key: 1,
  class: "vss-footer-separator"
};
function ar(e, t, n, s, r, l) {
  const a = fe("v-search"), o = fe("v-list"), c = fe("v-select-all"), f = fe("v-deselect-all"), p = fe("v-total"), v = fe("v-separator");
  return W(), ne("div", null, [
    Q("div", Qs, [
      Q("div", qs, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: r.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (d) => r.searchL = d)
        }, null, 8, ["placeholder", "modelValue"])) : se("", !0),
        Ae(o, {
          "has-children": !1,
          type: e.type,
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", Zs, [
          Q("div", zs, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(c, {
                key: 0,
                items: r.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : se("", !0),
              e.toggleAll ? (W(), ne("div", er, "/")) : se("", !0),
              e.toggleAll ? (W(), ue(f, {
                key: 2,
                items: r.listLeft,
                onUpdateDeselectAll: l.updateLeftDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : se("", !0)
            ]),
            e.total ? (W(), ue(p, {
              key: 0,
              value: Object.keys(r.dataSelected).length
            }, null, 8, ["value"])) : se("", !0)
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ]),
    Ae(v),
    Q("div", tr, [
      Q("div", nr, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: r.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (d) => r.searchR = d)
        }, null, 8, ["placeholder", "modelValue"])) : se("", !0),
        Ae(o, {
          "has-children": !0,
          type: e.type,
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", lr, [
          Q("div", sr, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(c, {
                key: 0,
                items: r.listRight,
                onUpdateSelectAll: l.updateRightSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : se("", !0),
              e.toggleAll ? (W(), ne("div", rr, "/")) : se("", !0),
              e.toggleAll ? (W(), ue(f, {
                key: 2,
                items: r.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : se("", !0)
            ]),
            e.total ? (W(), ue(p, {
              key: 0,
              value: l.totalChildrenSelected
            }, null, 8, ["value"])) : se("", !0)
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const or = /* @__PURE__ */ Le(Js, [["render", ar]]), ir = {
  name: "mirror-select-sides",
  display: "Mirror select sides",
  mixins: [pl],
  components: {
    "v-select-all": cl,
    "v-deselect-all": ul,
    "v-search": fl,
    "v-separator": dl,
    "v-list": _l,
    "v-total": ml
  },
  props: {
    list: {
      required: !0,
      type: [Array, Object]
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateLeftSelectAll() {
      let e = this;
      e.listLeft.map((t) => {
        t.visible === !0 && !t.disabled && e.updateItem(t, {}, !0);
      });
    },
    updateRightDeselectAll() {
      let e = this;
      this.dataSelected = [], e.listRight.map((t) => {
        t.visible === !0 && !t.disabled && e.updateItem(t, {}, !1);
      });
    },
    updateItem(e, t, n) {
      let s = Ie(this.dataSelected);
      n ? s.push(e.value) : s = il(s, e.value), this.dataSelected = s;
    },
    prepareList() {
      this.dataListOriginal = Ie(this.list);
      let e = this, t = [], n = e.list.filter((s) => {
        let r = s.value;
        return e.modelValue.indexOf(r) >= 0 ? (s.selectedDefault = !0, t.push(r)) : s.selectedDefault = !1, s;
      });
      e.dataSelected = t, e.dataList = kt(e, n);
    },
    prepareListLeft() {
      this.listLeft = this.dataList.filter((e) => (e.visible = !0, e));
    }
  },
  beforeMount() {
    this.prepareList();
  },
  mounted() {
    this.prepareListLeft();
  },
  computed: {
    filteredListL() {
      let e = Fe(this.searchL), t = this.dataSelected, n = Ie(this.listLeft);
      return n = n.filter((s) => {
        let r = Fe(s.label);
        return t.indexOf(s.value) >= 0 ? (s.selected = !0, s.visible = !1) : (s.selected = !1, s.visible = !0), r.includes(e) && s.visible === !0 ? s.visible = !0 : s.visible = !1, s;
      }), n;
    },
    filteredListR() {
      let e = this, t = Fe(e.searchR), n = this.dataSelected, s = Ie(e.listLeft);
      return s = s.filter((r) => {
        let l = Fe(r.label);
        return n.indexOf(r.value) >= 0 ? (r.selected = !0, r.visible = !0) : (r.selected = !1, r.visible = !1), l.includes(t) && r.visible === !0 ? r.visible = !0 : r.visible = !1, r;
      }), s;
    }
  },
  data() {
    return {
      dataList: [],
      dataListOriginal: [],
      dataSelected: [],
      listLeft: [],
      listRight: [],
      searchL: "",
      searchR: ""
    };
  }
}, cr = { class: "vss-list" }, ur = { class: "vss-inner-list" }, fr = { class: "vss-footer" }, _r = { class: "vss-footer-bg" }, dr = { class: "vss-list" }, mr = { class: "vss-inner-list" }, pr = { class: "vss-footer" }, hr = { class: "vss-footer-bg" };
function Er(e, t, n, s, r, l) {
  const a = fe("v-search"), o = fe("v-list"), c = fe("v-select-all"), f = fe("v-total"), p = fe("v-separator"), v = fe("v-deselect-all");
  return W(), ne("div", null, [
    Q("div", cr, [
      Q("div", ur, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: r.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (d) => r.searchL = d)
        }, null, 8, ["placeholder", "modelValue"])) : se("", !0),
        Ae(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "left",
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", fr, [
          Q("div", _r, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(c, {
                key: 0,
                items: r.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : se("", !0)
            ]),
            e.total ? (W(), ue(f, {
              key: 0,
              value: r.dataSelected.length
            }, null, 8, ["value"])) : se("", !0)
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ]),
    Ae(p),
    Q("div", dr, [
      Q("div", mr, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: r.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (d) => r.searchR = d)
        }, null, 8, ["placeholder", "modelValue"])) : se("", !0),
        Ae(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "right",
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", pr, [
          Q("div", hr, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(v, {
                key: 0,
                items: r.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : se("", !0)
            ])
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const gr = /* @__PURE__ */ Le(ir, [["render", Er]]), vr = {
  // i18n,
  name: "vue-select-sides",
  display: "Core select sides",
  components: {
    "mirror-select-sides": gr,
    "grouped-select-sides": or
  },
  props: {
    list: {
      required: !0,
      type: [Array, Object]
    },
    type: {
      type: String,
      default: void 0
      // "grouped"
    },
    orderBy: {
      type: String,
      default: void 0
    },
    placeholderSearchLeft: {
      type: [String, Boolean],
      default: void 0
      // false
    },
    placeholderSearchRight: {
      type: [String, Boolean],
      default: void 0
      // false
    },
    sortSelectedUp: {
      type: Boolean,
      default: void 0
      // false
    },
    search: {
      type: Boolean,
      default: void 0
      // true
    },
    total: {
      type: Boolean,
      default: void 0
      // true
    },
    toggleAll: {
      type: Boolean,
      default: void 0
      // true
    },
    modelValue: {
      type: [Object, Array],
      default: void 0
    }
  },
  emits: ["update:model-value"],
  watch: {
    list(e) {
      this.listClone = Ie(e);
    },
    type(e) {
      this.params.type = e;
    },
    search(e) {
      this.params.search = e;
    },
    total(e) {
      this.params.total = e;
    },
    toggleAll(e) {
      this.params.toggleAll = e;
    },
    orderBy(e) {
      this.params.orderBy = e;
    },
    placeholderSearchLeft(e) {
      this.params.placeholderSearchLeft = e;
    },
    placeholderSearchRight(e) {
      this.params.placeholderSearchRight = e;
    },
    sortSelectedUp(e) {
      this.params.sortSelectedUp = e;
    }
  },
  methods: {
    updateSelected(e) {
      this.$emit("update:model-value", e);
    },
    getComponent() {
      return this.params.type == "mirror" ? "mirror-select-sides" : "grouped-select-sides";
    },
    selectLocale(e) {
      this.enabledLocales.indexOf(e) >= 0 && (this.$i18n.locale = e);
    },
    setDefaultParams() {
      let e = this, t = {
        type: e.type,
        orderBy: e.orderBy,
        placeholderSearchLeft: e.placeholderSearchLeft,
        placeholderSearchRight: e.placeholderSearchRight,
        sortSelectedUp: e.sortSelectedUp,
        search: e.search,
        total: e.total,
        toggleAll: e.toggleAll
      };
      Object.keys(t).forEach((n) => {
        let s = t[n];
        s === void 0 ? e.defaultOptions[n] !== void 0 && (e.params[n] = e.defaultOptions[n]) : e.params[n] = s;
      }), e.defaultOptions.locale !== void 0 && e.selectLocale(e.defaultOptions.locale);
    }
  },
  computed: {
    modelProp: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:model-value", e);
      }
    }
  },
  beforeMount() {
    this.setDefaultParams(), this.listClone = Ie(this.list);
  },
  data() {
    return {
      listClone: [],
      locale: "en_US",
      enabledLocales: [
        "pt_BR",
        "en_US",
        "es_ES",
        "fr_FR",
        "tr_TR",
        "pl_PL",
        "cz_CZ",
        "sk_SK"
      ],
      params: {
        type: "mirror",
        orderBy: void 0,
        placeholderSearchLeft: !1,
        placeholderSearchRight: !1,
        sortSelectedUp: !1,
        search: !0,
        total: !0,
        toggleAll: !0
      }
    };
  }
};
function Nr(e, t, n, s, r, l) {
  return W(), ue(_s(l.getComponent()), {
    class: "vss",
    type: r.params.type,
    list: r.listClone,
    search: r.params.search,
    total: r.params.total,
    "toggle-all": r.params.toggleAll,
    "order-by": r.params.orderBy,
    "placeholder-search-left": r.params.placeholderSearchLeft,
    "placeholder-search-right": r.params.placeholderSearchRight,
    "sort-selected-up": r.params.sortSelectedUp,
    modelValue: l.modelProp,
    "onUpdate:modelValue": t[0] || (t[0] = (a) => l.modelProp = a),
    onUpdateSelected: l.updateSelected
  }, null, 40, ["type", "list", "search", "total", "toggle-all", "order-by", "placeholder-search-left", "placeholder-search-right", "sort-selected-up", "modelValue", "onUpdateSelected"]);
}
const hl = /* @__PURE__ */ Le(vr, [["render", Nr]]), Lr = "Vybrat vše ", Or = "Odebrat vše ", Tr = "Hledej...", br = "Žádný výsledek...", Ir = "Nic není vybráno...", Sr = "Spolu vybrané", Ar = {
  selectAll: Lr,
  deselectAll: Or,
  searchPlaceholder: Tr,
  searchNoResult: br,
  searchParentSelected: Ir,
  totalSelected: Sr
}, yr = "Select all", Pr = "Deselect all", Cr = "Search...", Rr = "No result...", Dr = "No items selected...", kr = "Total items selected", Mr = {
  selectAll: yr,
  deselectAll: Pr,
  searchPlaceholder: Cr,
  searchNoResult: Rr,
  searchParentSelected: Dr,
  totalSelected: kr
}, Fr = "Seleccionar todos", Ur = "Deseleccionar todos", wr = "Buscar...", Vr = "Sin resultados...", $r = "Ningún elemento seleccionado...", Wr = "Elementos seleccionados", Gr = {
  selectAll: Fr,
  deselectAll: Ur,
  searchPlaceholder: wr,
  searchNoResult: Vr,
  searchParentSelected: $r,
  totalSelected: Wr
}, Hr = "Ajouter tout", Yr = "Supprimer tout", Br = "Recherche...", xr = "Pas de résultat...", jr = "Sélection vide...", Kr = "Éléments sélectionnés", Xr = {
  selectAll: Hr,
  deselectAll: Yr,
  searchPlaceholder: Br,
  searchNoResult: xr,
  searchParentSelected: jr,
  totalSelected: Kr
}, Jr = "Wybierz wszystko", Qr = "Wyczyść zaznaczenie", qr = "Szukaj...", Zr = "Brak wyników...", zr = "Nie wybrano żadnych elementów...", ea = "Liczba wybranych elementów", ta = {
  selectAll: Jr,
  deselectAll: Qr,
  searchPlaceholder: qr,
  searchNoResult: Zr,
  searchParentSelected: zr,
  totalSelected: ea
}, na = "Selecionar todos", la = "Remover todos", sa = "Pesquisar...", ra = "Sem nenhum resultado...", aa = "Nenhum item selecionado...", oa = "Total de itens selecionados", ia = {
  selectAll: na,
  deselectAll: la,
  searchPlaceholder: sa,
  searchNoResult: ra,
  searchParentSelected: aa,
  totalSelected: oa
}, ca = "Vybrať všetko", ua = "Odobrať všetko", fa = "Hľadaj...", _a = "Žiadny výsledok...", da = "Nič nie je vybrané...", ma = "Spolu vybrané", pa = {
  selectAll: ca,
  deselectAll: ua,
  searchPlaceholder: fa,
  searchNoResult: _a,
  searchParentSelected: da,
  totalSelected: ma
}, ha = "Hepsini Seç", Ea = "Hepsini Çıkar", ga = "Ara...", va = "Sonuç Bulunamadı...", Na = "Hiçbiri Seçilmedi...", La = "Hepsi Seçildi", Oa = {
  selectAll: ha,
  deselectAll: Ea,
  searchPlaceholder: ga,
  searchNoResult: va,
  searchParentSelected: Na,
  totalSelected: La
};
function ee(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Tn = {};
function El(e) {
  Tn[e] || (Tn[e] = !0, ee(e));
}
const Ne = typeof window < "u";
let me, Be;
if (process.env.NODE_ENV !== "production") {
  const e = Ne && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (me = (t) => {
    e.mark(t);
  }, Be = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const Ta = /\{([0-9a-zA-Z]+)\}/g;
function on(e, ...t) {
  return t.length === 1 && V(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ta, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const ye = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ba = (e, t, n) => Ia({ l: e, k: t, s: n }), Ia = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), z = (e) => typeof e == "number" && isFinite(e), Sa = (e) => vl(e) === "[object Date]", we = (e) => vl(e) === "[object RegExp]", Ut = (e) => F(e) && Object.keys(e).length === 0, re = Object.assign, Aa = Object.create, x = (e = null) => Aa(e);
let bn;
const De = () => bn || (bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : x());
function In(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Sn(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ya(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (s, r, l) => `${r}="${Sn(l)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (s, r, l) => `${r}='${Sn(l)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && ee("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((s) => {
    e = e.replace(s, "$1javascript&#58;");
  }), e;
}
const Pa = Object.prototype.hasOwnProperty;
function ve(e, t) {
  return Pa.call(e, t);
}
const X = Array.isArray, B = (e) => typeof e == "function", I = (e) => typeof e == "string", U = (e) => typeof e == "boolean", V = (e) => e !== null && typeof e == "object", Ca = (e) => V(e) && B(e.then) && B(e.catch), gl = Object.prototype.toString, vl = (e) => gl.call(e), F = (e) => {
  if (!V(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Ra = (e) => e == null ? "" : X(e) || F(e) && e.toString === gl ? JSON.stringify(e, null, 2) : String(e);
function Da(e, t = "") {
  return e.reduce((n, s, r) => r === 0 ? n + s : n + t + s, "");
}
const An = 2;
function ka(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let r = 0;
  const l = [];
  for (let a = 0; a < s.length; a++)
    if (r += s[a].length + 1, r >= t) {
      for (let o = a - An; o <= a + An || n > r; o++) {
        if (o < 0 || o >= s.length)
          continue;
        const c = o + 1;
        l.push(`${c}${" ".repeat(3 - String(c).length)}|  ${s[o]}`);
        const f = s[o].length;
        if (o === a) {
          const p = t - (r - f) + 1, v = Math.max(1, n > r ? f - p : n - t);
          l.push("   |  " + " ".repeat(p) + "^".repeat(v));
        } else if (o > a) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, f), 1);
            l.push("   |  " + "^".repeat(p));
          }
          r += f + 1;
        }
      }
      break;
    }
  return l.join(`
`);
}
function wt(e) {
  let t = e;
  return () => ++t;
}
function cn() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, s) {
      const r = e.get(n);
      r && r.push(s) || e.set(n, [s]);
    },
    off(n, s) {
      const r = e.get(n);
      r && r.splice(r.indexOf(s) >>> 0, 1);
    },
    emit(n, s) {
      (e.get(n) || []).slice().map((r) => r(s)), (e.get("*") || []).slice().map((r) => r(n, s));
    }
  };
}
const Pt = (e) => !V(e) || X(e);
function Rt(e, t) {
  if (Pt(e) || Pt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: r } = n.pop();
    Object.keys(s).forEach((l) => {
      l !== "__proto__" && (V(s[l]) && !V(r[l]) && (r[l] = Array.isArray(s[l]) ? [] : x()), Pt(r[l]) || Pt(s[l]) ? r[l] = s[l] : n.push({ src: s[l], des: r[l] }));
    });
  }
}
function Ma(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Mt(e, t, n) {
  return { start: e, end: t };
}
const Fa = /\{([0-9a-zA-Z]+)\}/g;
function Nl(e, ...t) {
  return t.length === 1 && Ua(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Fa, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const Ll = Object.assign, yn = (e) => typeof e == "string", Ua = (e) => e !== null && typeof e == "object";
function Ol(e, t = "") {
  return e.reduce((n, s, r) => r === 0 ? n + s : n + t + s, "");
}
const Vt = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, wa = {
  [Vt.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Va(e, t, ...n) {
  const s = Nl(wa[e], ...n || []), r = { message: String(s), code: e };
  return t && (r.location = t), r;
}
const M = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, $a = {
  // tokenizer error messages
  [M.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [M.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [M.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [M.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [M.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [M.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [M.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [M.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [M.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [M.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [M.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [M.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [M.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [M.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [M.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function lt(e, t, n = {}) {
  const { domain: s, messages: r, args: l } = n, a = Nl((r || $a)[e] || "", ...l || []), o = new SyntaxError(String(a));
  return o.code = e, t && (o.location = t), o.domain = s, o;
}
function Wa(e) {
  throw e;
}
const Ga = /<\/?[\w\s="/.':;#-\/]+>/, Ha = (e) => Ga.test(e), Pe = " ", Ya = "\r", oe = `
`, Ba = "\u2028", xa = "\u2029";
function ja(e) {
  const t = e;
  let n = 0, s = 1, r = 1, l = 0;
  const a = (O) => t[O] === Ya && t[O + 1] === oe, o = (O) => t[O] === oe, c = (O) => t[O] === xa, f = (O) => t[O] === Ba, p = (O) => a(O) || o(O) || c(O) || f(O), v = () => n, d = () => s, S = () => r, C = () => l, y = (O) => a(O) || c(O) || f(O) ? oe : t[O], P = () => y(n), k = () => y(n + l);
  function R() {
    return l = 0, p(n) && (s++, r = 0), a(n) && n++, n++, r++, t[n];
  }
  function _() {
    return a(n + l) && l++, l++, t[n + l];
  }
  function h() {
    n = 0, s = 1, r = 1, l = 0;
  }
  function L(O = 0) {
    l = O;
  }
  function E() {
    const O = n + l;
    for (; O !== n; )
      R();
    l = 0;
  }
  return {
    index: v,
    line: d,
    column: S,
    peekOffset: C,
    charAt: y,
    currentChar: P,
    currentPeek: k,
    next: R,
    peek: _,
    reset: h,
    resetPeek: L,
    skipToPeek: E
  };
}
const Me = void 0, Ka = ".", Pn = "'", Xa = "tokenizer";
function Ja(e, t = {}) {
  const n = t.location !== !1, s = ja(e), r = () => s.index(), l = () => Ma(s.line(), s.column(), s.index()), a = l(), o = r(), c = {
    currentType: 14,
    offset: o,
    startLoc: a,
    endLoc: a,
    lastType: 14,
    lastOffset: o,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, f = () => c, { onError: p } = t;
  function v(i, u, g, ...D) {
    const J = f();
    if (u.column += g, u.offset += g, p) {
      const j = n ? Mt(J.startLoc, u) : null, Y = lt(i, j, {
        domain: Xa,
        args: D
      });
      p(Y);
    }
  }
  function d(i, u, g) {
    i.endLoc = l(), i.currentType = u;
    const D = { type: u };
    return n && (D.loc = Mt(i.startLoc, i.endLoc)), g != null && (D.value = g), D;
  }
  const S = (i) => d(
    i,
    14
    /* TokenTypes.EOF */
  );
  function C(i, u) {
    return i.currentChar() === u ? (i.next(), u) : (v(M.EXPECTED_TOKEN, l(), 0, u), "");
  }
  function y(i) {
    let u = "";
    for (; i.currentPeek() === Pe || i.currentPeek() === oe; )
      u += i.currentPeek(), i.peek();
    return u;
  }
  function P(i) {
    const u = y(i);
    return i.skipToPeek(), u;
  }
  function k(i) {
    if (i === Me)
      return !1;
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function R(i) {
    if (i === Me)
      return !1;
    const u = i.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function _(i, u) {
    const { currentType: g } = u;
    if (g !== 2)
      return !1;
    y(i);
    const D = k(i.currentPeek());
    return i.resetPeek(), D;
  }
  function h(i, u) {
    const { currentType: g } = u;
    if (g !== 2)
      return !1;
    y(i);
    const D = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), J = R(D);
    return i.resetPeek(), J;
  }
  function L(i, u) {
    const { currentType: g } = u;
    if (g !== 2)
      return !1;
    y(i);
    const D = i.currentPeek() === Pn;
    return i.resetPeek(), D;
  }
  function E(i, u) {
    const { currentType: g } = u;
    if (g !== 8)
      return !1;
    y(i);
    const D = i.currentPeek() === ".";
    return i.resetPeek(), D;
  }
  function O(i, u) {
    const { currentType: g } = u;
    if (g !== 9)
      return !1;
    y(i);
    const D = k(i.currentPeek());
    return i.resetPeek(), D;
  }
  function A(i, u) {
    const { currentType: g } = u;
    if (!(g === 8 || g === 12))
      return !1;
    y(i);
    const D = i.currentPeek() === ":";
    return i.resetPeek(), D;
  }
  function T(i, u) {
    const { currentType: g } = u;
    if (g !== 10)
      return !1;
    const D = () => {
      const j = i.currentPeek();
      return j === "{" ? k(i.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === Pe || !j ? !1 : j === oe ? (i.peek(), D()) : w(i, !1);
    }, J = D();
    return i.resetPeek(), J;
  }
  function K(i) {
    y(i);
    const u = i.currentPeek() === "|";
    return i.resetPeek(), u;
  }
  function de(i) {
    const u = y(i), g = i.currentPeek() === "%" && i.peek() === "{";
    return i.resetPeek(), {
      isModulo: g,
      hasSpace: u.length > 0
    };
  }
  function w(i, u = !0) {
    const g = (J = !1, j = "", Y = !1) => {
      const m = i.currentPeek();
      return m === "{" ? j === "%" ? !1 : J : m === "@" || !m ? j === "%" ? !0 : J : m === "%" ? (i.peek(), g(J, "%", !0)) : m === "|" ? j === "%" || Y ? !0 : !(j === Pe || j === oe) : m === Pe ? (i.peek(), g(!0, Pe, Y)) : m === oe ? (i.peek(), g(!0, oe, Y)) : !0;
    }, D = g();
    return u && i.resetPeek(), D;
  }
  function ae(i, u) {
    const g = i.currentChar();
    return g === Me ? Me : u(g) ? (i.next(), g) : null;
  }
  function st(i) {
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function rt(i) {
    return ae(i, st);
  }
  function Oe(i) {
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function at(i) {
    return ae(i, Oe);
  }
  function ot(i) {
    const u = i.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function it(i) {
    return ae(i, ot);
  }
  function ct(i) {
    const u = i.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function ut(i) {
    return ae(i, ct);
  }
  function pe(i) {
    let u = "", g = "";
    for (; u = it(i); )
      g += u;
    return g;
  }
  function Ke(i) {
    P(i);
    const u = i.currentChar();
    return u !== "%" && v(M.EXPECTED_TOKEN, l(), 0, u), i.next(), "%";
  }
  function Xe(i) {
    let u = "";
    for (; ; ) {
      const g = i.currentChar();
      if (g === "{" || g === "}" || g === "@" || g === "|" || !g)
        break;
      if (g === "%")
        if (w(i))
          u += g, i.next();
        else
          break;
      else if (g === Pe || g === oe)
        if (w(i))
          u += g, i.next();
        else {
          if (K(i))
            break;
          u += g, i.next();
        }
      else
        u += g, i.next();
    }
    return u;
  }
  function ft(i) {
    P(i);
    let u = "", g = "";
    for (; u = at(i); )
      g += u;
    return i.currentChar() === Me && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), g;
  }
  function _t(i) {
    P(i);
    let u = "";
    return i.currentChar() === "-" ? (i.next(), u += `-${pe(i)}`) : u += pe(i), i.currentChar() === Me && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u;
  }
  function dt(i) {
    return i !== Pn && i !== oe;
  }
  function At(i) {
    P(i), C(i, "'");
    let u = "", g = "";
    for (; u = ae(i, dt); )
      u === "\\" ? g += mt(i) : g += u;
    const D = i.currentChar();
    return D === oe || D === Me ? (v(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), D === oe && (i.next(), C(i, "'")), g) : (C(i, "'"), g);
  }
  function mt(i) {
    const u = i.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return i.next(), `\\${u}`;
      case "u":
        return Je(i, u, 4);
      case "U":
        return Je(i, u, 6);
      default:
        return v(M.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, u), "";
    }
  }
  function Je(i, u, g) {
    C(i, u);
    let D = "";
    for (let J = 0; J < g; J++) {
      const j = ut(i);
      if (!j) {
        v(M.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${u}${D}${i.currentChar()}`);
        break;
      }
      D += j;
    }
    return `\\${u}${D}`;
  }
  function pt(i) {
    return i !== "{" && i !== "}" && i !== Pe && i !== oe;
  }
  function ht(i) {
    P(i);
    let u = "", g = "";
    for (; u = ae(i, pt); )
      g += u;
    return g;
  }
  function Et(i) {
    let u = "", g = "";
    for (; u = rt(i); )
      g += u;
    return g;
  }
  function b(i) {
    const u = (g) => {
      const D = i.currentChar();
      return D === "{" || D === "%" || D === "@" || D === "|" || D === "(" || D === ")" || !D || D === Pe ? g : (g += D, i.next(), u(g));
    };
    return u("");
  }
  function G(i) {
    P(i);
    const u = C(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return P(i), u;
  }
  function gt(i, u) {
    let g = null;
    switch (i.currentChar()) {
      case "{":
        return u.braceNest >= 1 && v(M.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), i.next(), g = d(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), P(i), u.braceNest++, g;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && v(M.EMPTY_PLACEHOLDER, l(), 0), i.next(), g = d(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && P(i), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), g;
      case "@":
        return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), g = We(i, u) || S(u), u.braceNest = 0, g;
      default: {
        let J = !0, j = !0, Y = !0;
        if (K(i))
          return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), g = d(u, 1, G(i)), u.braceNest = 0, u.inLinked = !1, g;
        if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7))
          return v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u.braceNest = 0, vt(i, u);
        if (J = _(i, u))
          return g = d(u, 5, ft(i)), P(i), g;
        if (j = h(i, u))
          return g = d(u, 6, _t(i)), P(i), g;
        if (Y = L(i, u))
          return g = d(u, 7, At(i)), P(i), g;
        if (!J && !j && !Y)
          return g = d(u, 13, ht(i)), v(M.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, g.value), P(i), g;
        break;
      }
    }
    return g;
  }
  function We(i, u) {
    const { currentType: g } = u;
    let D = null;
    const J = i.currentChar();
    switch ((g === 8 || g === 9 || g === 12 || g === 10) && (J === oe || J === Pe) && v(M.INVALID_LINKED_FORMAT, l(), 0), J) {
      case "@":
        return i.next(), D = d(
          u,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, D;
      case ".":
        return P(i), i.next(), d(
          u,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return P(i), i.next(), d(
          u,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return K(i) ? (D = d(u, 1, G(i)), u.braceNest = 0, u.inLinked = !1, D) : E(i, u) || A(i, u) ? (P(i), We(i, u)) : O(i, u) ? (P(i), d(u, 12, Et(i))) : T(i, u) ? (P(i), J === "{" ? gt(i, u) || D : d(u, 11, b(i))) : (g === 8 && v(M.INVALID_LINKED_FORMAT, l(), 0), u.braceNest = 0, u.inLinked = !1, vt(i, u));
    }
  }
  function vt(i, u) {
    let g = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return gt(i, u) || S(u);
    if (u.inLinked)
      return We(i, u) || S(u);
    switch (i.currentChar()) {
      case "{":
        return gt(i, u) || S(u);
      case "}":
        return v(M.UNBALANCED_CLOSING_BRACE, l(), 0), i.next(), d(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return We(i, u) || S(u);
      default: {
        if (K(i))
          return g = d(u, 1, G(i)), u.braceNest = 0, u.inLinked = !1, g;
        const { isModulo: J, hasSpace: j } = de(i);
        if (J)
          return j ? d(u, 0, Xe(i)) : d(u, 4, Ke(i));
        if (w(i))
          return d(u, 0, Xe(i));
        break;
      }
    }
    return g;
  }
  function Ht() {
    const { currentType: i, offset: u, startLoc: g, endLoc: D } = c;
    return c.lastType = i, c.lastOffset = u, c.lastStartLoc = g, c.lastEndLoc = D, c.offset = r(), c.startLoc = l(), s.currentChar() === Me ? d(
      c,
      14
      /* TokenTypes.EOF */
    ) : vt(s, c);
  }
  return {
    nextToken: Ht,
    currentOffset: r,
    currentPosition: l,
    context: f
  };
}
const Qa = "parser", qa = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Za(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function za(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: s } = e;
  function r(_, h, L, E, ...O) {
    const A = _.currentPosition();
    if (A.offset += E, A.column += E, n) {
      const T = t ? Mt(L, A) : null, K = lt(h, T, {
        domain: Qa,
        args: O
      });
      n(K);
    }
  }
  function l(_, h, L, E, ...O) {
    const A = _.currentPosition();
    if (A.offset += E, A.column += E, s) {
      const T = t ? Mt(L, A) : null;
      s(Va(h, T, O));
    }
  }
  function a(_, h, L) {
    const E = { type: _ };
    return t && (E.start = h, E.end = h, E.loc = { start: L, end: L }), E;
  }
  function o(_, h, L, E) {
    t && (_.end = h, _.loc && (_.loc.end = L));
  }
  function c(_, h) {
    const L = _.context(), E = a(3, L.offset, L.startLoc);
    return E.value = h, o(E, _.currentOffset(), _.currentPosition()), E;
  }
  function f(_, h) {
    const L = _.context(), { lastOffset: E, lastStartLoc: O } = L, A = a(5, E, O);
    return A.index = parseInt(h, 10), _.nextToken(), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function p(_, h, L) {
    const E = _.context(), { lastOffset: O, lastStartLoc: A } = E, T = a(4, O, A);
    return T.key = h, L === !0 && (T.modulo = !0), _.nextToken(), o(T, _.currentOffset(), _.currentPosition()), T;
  }
  function v(_, h) {
    const L = _.context(), { lastOffset: E, lastStartLoc: O } = L, A = a(9, E, O);
    return A.value = h.replace(qa, Za), _.nextToken(), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function d(_) {
    const h = _.nextToken(), L = _.context(), { lastOffset: E, lastStartLoc: O } = L, A = a(8, E, O);
    return h.type !== 12 ? (r(_, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), A.value = "", o(A, E, O), {
      nextConsumeToken: h,
      node: A
    }) : (h.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, ge(h)), A.value = h.value || "", o(A, _.currentOffset(), _.currentPosition()), {
      node: A
    });
  }
  function S(_, h) {
    const L = _.context(), E = a(7, L.offset, L.startLoc);
    return E.value = h, o(E, _.currentOffset(), _.currentPosition()), E;
  }
  function C(_) {
    const h = _.context(), L = a(6, h.offset, h.startLoc);
    let E = _.nextToken();
    if (E.type === 9) {
      const O = d(_);
      L.modifier = O.node, E = O.nextConsumeToken || _.nextToken();
    }
    switch (E.type !== 10 && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(E)), E = _.nextToken(), E.type === 2 && (E = _.nextToken()), E.type) {
      case 11:
        E.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(E)), L.key = S(_, E.value || "");
        break;
      case 5:
        E.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(E)), L.key = p(_, E.value || "");
        break;
      case 6:
        E.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(E)), L.key = f(_, E.value || "");
        break;
      case 7:
        E.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(E)), L.key = v(_, E.value || "");
        break;
      default: {
        r(_, M.UNEXPECTED_EMPTY_LINKED_KEY, h.lastStartLoc, 0);
        const O = _.context(), A = a(7, O.offset, O.startLoc);
        return A.value = "", o(A, O.offset, O.startLoc), L.key = A, o(L, O.offset, O.startLoc), {
          nextConsumeToken: E,
          node: L
        };
      }
    }
    return o(L, _.currentOffset(), _.currentPosition()), {
      node: L
    };
  }
  function y(_) {
    const h = _.context(), L = h.currentType === 1 ? _.currentOffset() : h.offset, E = h.currentType === 1 ? h.endLoc : h.startLoc, O = a(2, L, E);
    O.items = [];
    let A = null, T = null;
    do {
      const w = A || _.nextToken();
      switch (A = null, w.type) {
        case 0:
          w.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(w)), O.items.push(c(_, w.value || ""));
          break;
        case 6:
          w.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(w)), O.items.push(f(_, w.value || ""));
          break;
        case 4:
          T = !0;
          break;
        case 5:
          w.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(w)), O.items.push(p(_, w.value || "", !!T)), T && (l(_, Vt.USE_MODULO_SYNTAX, h.lastStartLoc, 0, ge(w)), T = null);
          break;
        case 7:
          w.value == null && r(_, M.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ge(w)), O.items.push(v(_, w.value || ""));
          break;
        case 8: {
          const ae = C(_);
          O.items.push(ae.node), A = ae.nextConsumeToken || null;
          break;
        }
      }
    } while (h.currentType !== 14 && h.currentType !== 1);
    const K = h.currentType === 1 ? h.lastOffset : _.currentOffset(), de = h.currentType === 1 ? h.lastEndLoc : _.currentPosition();
    return o(O, K, de), O;
  }
  function P(_, h, L, E) {
    const O = _.context();
    let A = E.items.length === 0;
    const T = a(1, h, L);
    T.cases = [], T.cases.push(E);
    do {
      const K = y(_);
      A || (A = K.items.length === 0), T.cases.push(K);
    } while (O.currentType !== 14);
    return A && r(_, M.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), o(T, _.currentOffset(), _.currentPosition()), T;
  }
  function k(_) {
    const h = _.context(), { offset: L, startLoc: E } = h, O = y(_);
    return h.currentType === 14 ? O : P(_, L, E, O);
  }
  function R(_) {
    const h = Ja(_, Ll({}, e)), L = h.context(), E = a(0, L.offset, L.startLoc);
    return t && E.loc && (E.loc.source = _), E.body = k(h), e.onCacheKey && (E.cacheKey = e.onCacheKey(_)), L.currentType !== 14 && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, _[L.offset] || ""), o(E, h.currentOffset(), h.currentPosition()), E;
  }
  return { parse: R };
}
function ge(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function eo(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function Cn(e, t) {
  for (let n = 0; n < e.length; n++)
    un(e[n], t);
}
function un(e, t) {
  switch (e.type) {
    case 1:
      Cn(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Cn(e.items, t);
      break;
    case 6: {
      un(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function to(e, t = {}) {
  const n = eo(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && un(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function no(e) {
  const t = e.body;
  return t.type === 2 ? Rn(t) : t.cases.forEach((n) => Rn(n)), e;
}
function Rn(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n];
      if (!(s.type === 3 || s.type === 9) || s.value == null)
        break;
      t.push(s.value);
    }
    if (t.length === e.items.length) {
      e.static = Ol(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const lo = "minifier";
function ze(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      ze(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        ze(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        ze(n[s]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      ze(t.key), t.k = t.key, delete t.key, t.modifier && (ze(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      throw lt(M.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: lo,
        args: [e.type]
      });
  }
  delete e.type;
}
const so = "parser";
function ro(e, t) {
  const { filename: n, breakLineCode: s, needIndent: r } = t, l = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: r,
    indentLevel: 0
  };
  l && e.loc && (a.source = e.loc.source);
  const o = () => a;
  function c(y, P) {
    a.code += y;
  }
  function f(y, P = !0) {
    const k = P ? s : "";
    c(r ? k + "  ".repeat(y) : k);
  }
  function p(y = !0) {
    const P = ++a.indentLevel;
    y && f(P);
  }
  function v(y = !0) {
    const P = --a.indentLevel;
    y && f(P);
  }
  function d() {
    f(a.indentLevel);
  }
  return {
    context: o,
    push: c,
    indent: p,
    deindent: v,
    newline: d,
    helper: (y) => `_${y}`,
    needIndent: () => a.needIndent
  };
}
function ao(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tt(e, t.key), t.modifier ? (e.push(", "), tt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function oo(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const r = t.items.length;
  for (let l = 0; l < r && (tt(e, t.items[l]), l !== r - 1); l++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function io(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const r = t.cases.length;
    for (let l = 0; l < r && (tt(e, t.cases[l]), l !== r - 1); l++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function co(e, t) {
  t.body ? tt(e, t.body) : e.push("null");
}
function tt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      co(e, t);
      break;
    case 1:
      io(e, t);
      break;
    case 2:
      oo(e, t);
      break;
    case 6:
      ao(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw lt(M.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: so,
        args: [t.type]
      });
  }
}
const uo = (e, t = {}) => {
  const n = yn(t.mode) ? t.mode : "normal", s = yn(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], o = ro(e, {
    filename: s,
    breakLineCode: r,
    needIndent: l
  });
  o.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(l), a.length > 0 && (o.push(`const { ${Ol(a.map((p) => `${p}: _${p}`), ", ")} } = ctx`), o.newline()), o.push("return "), tt(o, e), o.deindent(l), o.push("}"), delete e.helpers;
  const { code: c, map: f } = o.context();
  return {
    ast: e,
    code: c,
    map: f ? f.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fo(e, t = {}) {
  const n = Ll({}, t), s = !!n.jit, r = !!n.minify, l = n.optimize == null ? !0 : n.optimize, o = za(n).parse(e);
  return s ? (l && no(o), r && ze(o), { ast: o, code: "" }) : (to(o, n), uo(o, n));
}
function _o() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (De().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (De().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (De().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ee(e) {
  return V(e) && fn(e) === 0 && (ve(e, "b") || ve(e, "body"));
}
const Tl = ["b", "body"];
function mo(e) {
  return Ve(e, Tl);
}
const bl = ["c", "cases"];
function po(e) {
  return Ve(e, bl, []);
}
const Il = ["s", "static"];
function ho(e) {
  return Ve(e, Il);
}
const Sl = ["i", "items"];
function Eo(e) {
  return Ve(e, Sl, []);
}
const Al = ["t", "type"];
function fn(e) {
  return Ve(e, Al);
}
const yl = ["v", "value"];
function Ct(e, t) {
  const n = Ve(e, yl);
  if (n != null)
    return n;
  throw Ot(t);
}
const Pl = ["m", "modifier"];
function go(e) {
  return Ve(e, Pl);
}
const Cl = ["k", "key"];
function vo(e) {
  const t = Ve(e, Cl);
  if (t)
    return t;
  throw Ot(
    6
    /* NodeTypes.Linked */
  );
}
function Ve(e, t, n) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if (ve(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const Rl = [
  ...Tl,
  ...bl,
  ...Il,
  ...Sl,
  ...Cl,
  ...Pl,
  ...yl,
  ...Al
];
function Ot(e) {
  return new Error(`unhandled node type: ${e}`);
}
const $e = [];
$e[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
$e[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
$e[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
$e[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
$e[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
$e[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
$e[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const No = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Lo(e) {
  return No.test(e);
}
function Oo(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function To(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function bo(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Lo(t) ? Oo(t) : "*" + t;
}
function Io(e) {
  const t = [];
  let n = -1, s = 0, r = 0, l, a, o, c, f, p, v;
  const d = [];
  d[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = o : a += o;
  }, d[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, d[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    d[
      0
      /* Actions.APPEND */
    ](), r++;
  }, d[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, s = 4, d[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, a === void 0 || (a = bo(a), a === !1))
        return !1;
      d[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function S() {
    const C = e[n + 1];
    if (s === 5 && C === "'" || s === 6 && C === '"')
      return n++, o = "\\" + C, d[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, l = e[n], !(l === "\\" && S())) {
      if (c = To(l), v = $e[s], f = v[c] || v.l || 8, f === 8 || (s = f[0], f[1] !== void 0 && (p = d[f[1]], p && (o = l, p() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const Dn = /* @__PURE__ */ new Map();
function So(e, t) {
  return V(e) ? e[t] : null;
}
function Ao(e, t) {
  if (!V(e))
    return null;
  let n = Dn.get(t);
  if (n || (n = Io(t), n && Dn.set(t, n)), !n)
    return null;
  const s = n.length;
  let r = e, l = 0;
  for (; l < s; ) {
    const a = n[l];
    if (Rl.includes(a) && Ee(r))
      return null;
    const o = r[a];
    if (o === void 0 || B(r))
      return null;
    r = o, l++;
  }
  return r;
}
const yo = (e) => e, Po = (e) => "", Co = "text", Ro = (e) => e.length === 0 ? "" : Da(e), Do = Ra;
function kn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function ko(e) {
  const t = z(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (z(e.named.count) || z(e.named.n)) ? z(e.named.count) ? e.named.count : z(e.named.n) ? e.named.n : t : t;
}
function Mo(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Fo(e = {}) {
  const t = e.locale, n = ko(e), s = V(e.pluralRules) && I(t) && B(e.pluralRules[t]) ? e.pluralRules[t] : kn, r = V(e.pluralRules) && I(t) && B(e.pluralRules[t]) ? kn : void 0, l = (k) => k[s(n, k.length, r)], a = e.list || [], o = (k) => a[k], c = e.named || x();
  z(e.pluralIndex) && Mo(n, c);
  const f = (k) => c[k];
  function p(k) {
    const R = B(e.messages) ? e.messages(k) : V(e.messages) ? e.messages[k] : !1;
    return R || (e.parent ? e.parent.message(k) : Po);
  }
  const v = (k) => e.modifiers ? e.modifiers[k] : yo, d = F(e.processor) && B(e.processor.normalize) ? e.processor.normalize : Ro, S = F(e.processor) && B(e.processor.interpolate) ? e.processor.interpolate : Do, C = F(e.processor) && I(e.processor.type) ? e.processor.type : Co, P = {
    list: o,
    named: f,
    plural: l,
    linked: (k, ...R) => {
      const [_, h] = R;
      let L = "text", E = "";
      R.length === 1 ? V(_) ? (E = _.modifier || E, L = _.type || L) : I(_) && (E = _ || E) : R.length === 2 && (I(_) && (E = _ || E), I(h) && (L = h || L));
      const O = p(k)(P), A = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        L === "vnode" && X(O) && E ? O[0] : O
      );
      return E ? v(E)(A, L) : A;
    },
    message: p,
    type: C,
    interpolate: S,
    normalize: d,
    values: re(x(), a, c)
  };
  return P;
}
let Tt = null;
function Uo(e) {
  Tt = e;
}
function wo(e, t, n) {
  Tt && Tt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Vo = /* @__PURE__ */ $o(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function $o(e) {
  return (t) => Tt && Tt.emit(e, t);
}
const Dl = Vt.__EXTEND_POINT__, He = wt(Dl), ie = {
  NOT_FOUND_KEY: Dl,
  // 2
  FALLBACK_TO_TRANSLATE: He(),
  // 3
  CANNOT_FORMAT_NUMBER: He(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: He(),
  // 5
  CANNOT_FORMAT_DATE: He(),
  // 6
  FALLBACK_TO_DATE_FORMAT: He(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: He(),
  // 8
  __EXTEND_POINT__: He()
  // 9
}, Wo = {
  [ie.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ie.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ie.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ie.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ie.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ie.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function xe(e, ...t) {
  return on(Wo[e], ...t);
}
const kl = M.__EXTEND_POINT__, Ye = wt(kl), le = {
  INVALID_ARGUMENT: kl,
  // 17
  INVALID_DATE_ARGUMENT: Ye(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Ye(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Ye(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Ye(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Ye(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Ye(),
  // 23
  __EXTEND_POINT__: Ye()
  // 24
};
function Se(e) {
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: Go } : void 0);
}
const Go = {
  [le.INVALID_ARGUMENT]: "Invalid arguments",
  [le.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [le.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [le.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [le.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [le.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [le.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function _n(e, t) {
  return t.locale != null ? Mn(t.locale) : Mn(e.locale);
}
let Yt;
function Mn(e) {
  if (I(e))
    return e;
  if (B(e)) {
    if (e.resolvedOnce && Yt != null)
      return Yt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ca(t))
        throw Se(le.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Yt = t;
    } else
      throw Se(le.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Se(le.NOT_SUPPORT_LOCALE_TYPE);
}
function Ho(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...X(t) ? t : V(t) ? Object.keys(t) : I(t) ? [t] : [n]
  ])];
}
function Ml(e, t, n) {
  const s = I(n) ? n : nt, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let l = r.__localeChainCache.get(s);
  if (!l) {
    l = [];
    let a = [n];
    for (; X(a); )
      a = Fn(l, a, t);
    const o = X(t) || !F(t) ? t : t.default ? t.default : null;
    a = I(o) ? [o] : o, X(a) && Fn(l, a, !1), r.__localeChainCache.set(s, l);
  }
  return l;
}
function Fn(e, t, n) {
  let s = !0;
  for (let r = 0; r < t.length && U(s); r++) {
    const l = t[r];
    I(l) && (s = Yo(e, t[r], n));
  }
  return s;
}
function Yo(e, t, n) {
  let s;
  const r = t.split("-");
  do {
    const l = r.join("-");
    s = Bo(e, l, n), r.splice(-1, 1);
  } while (r.length && s === !0);
  return s;
}
function Bo(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (X(n) || F(n)) && n[r] && (s = n[r]);
  }
  return s;
}
const xo = "9.14.5", $t = -1, nt = "en-US", Ft = "", Un = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function jo() {
  return {
    upper: (e, t) => t === "text" && I(e) ? e.toUpperCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && I(e) ? e.toLowerCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && I(e) ? Un(e) : t === "vnode" && V(e) && "__v_isVNode" in e ? Un(e.children) : e
  };
}
let Fl;
function wn(e) {
  Fl = e;
}
let Ul;
function Ko(e) {
  Ul = e;
}
let wl;
function Xo(e) {
  wl = e;
}
let Vl = null;
const Jo = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Vl = e;
}, Qo = /* @__NO_SIDE_EFFECTS__ */ () => Vl;
let $l = null;
const Vn = (e) => {
  $l = e;
}, qo = () => $l;
let $n = 0;
function Zo(e = {}) {
  const t = B(e.onWarn) ? e.onWarn : ee, n = I(e.version) ? e.version : xo, s = I(e.locale) || B(e.locale) ? e.locale : nt, r = B(s) ? nt : s, l = X(e.fallbackLocale) || F(e.fallbackLocale) || I(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = F(e.messages) ? e.messages : Bt(r), o = F(e.datetimeFormats) ? e.datetimeFormats : Bt(r), c = F(e.numberFormats) ? e.numberFormats : Bt(r), f = re(x(), e.modifiers, jo()), p = e.pluralRules || x(), v = B(e.missing) ? e.missing : null, d = U(e.missingWarn) || we(e.missingWarn) ? e.missingWarn : !0, S = U(e.fallbackWarn) || we(e.fallbackWarn) ? e.fallbackWarn : !0, C = !!e.fallbackFormat, y = !!e.unresolving, P = B(e.postTranslation) ? e.postTranslation : null, k = F(e.processor) ? e.processor : null, R = U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, h = B(e.messageCompiler) ? e.messageCompiler : Fl;
  process.env.NODE_ENV !== "production" && B(e.messageCompiler) && El(xe(ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const L = B(e.messageResolver) ? e.messageResolver : Ul || So, E = B(e.localeFallbacker) ? e.localeFallbacker : wl || Ho, O = V(e.fallbackContext) ? e.fallbackContext : void 0, A = e, T = V(A.__datetimeFormatters) ? A.__datetimeFormatters : /* @__PURE__ */ new Map(), K = V(A.__numberFormatters) ? A.__numberFormatters : /* @__PURE__ */ new Map(), de = V(A.__meta) ? A.__meta : {};
  $n++;
  const w = {
    version: n,
    cid: $n,
    locale: s,
    fallbackLocale: l,
    messages: a,
    modifiers: f,
    pluralRules: p,
    missing: v,
    missingWarn: d,
    fallbackWarn: S,
    fallbackFormat: C,
    unresolving: y,
    postTranslation: P,
    processor: k,
    warnHtmlMessage: R,
    escapeParameter: _,
    messageCompiler: h,
    messageResolver: L,
    localeFallbacker: E,
    fallbackContext: O,
    onWarn: t,
    __meta: de
  };
  return w.datetimeFormats = o, w.numberFormats = c, w.__datetimeFormatters = T, w.__numberFormatters = K, process.env.NODE_ENV !== "production" && (w.__v_emitter = A.__v_emitter != null ? A.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && wo(w, n, de), w;
}
const Bt = (e) => ({ [e]: x() });
function Wt(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Wl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function dn(e, t, n, s, r) {
  const { missing: l, onWarn: a } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = e.__v_emitter;
    o && o.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (l !== null) {
    const o = l(e, n, t, r);
    return I(o) ? o : t;
  } else
    return process.env.NODE_ENV !== "production" && Wl(s, t) && a(xe(ie.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Nt(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Gl(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function zo(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (Gl(e, t[s]))
      return !0;
  return !1;
}
function xt(e) {
  return (n) => ei(n, e);
}
function ei(e, t) {
  const n = mo(t);
  if (n == null)
    throw Ot(
      0
      /* NodeTypes.Resource */
    );
  if (fn(n) === 1) {
    const l = po(n);
    return e.plural(l.reduce((a, o) => [
      ...a,
      Wn(e, o)
    ], []));
  } else
    return Wn(e, n);
}
function Wn(e, t) {
  const n = ho(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = Eo(t).reduce((r, l) => [...r, Jt(e, l)], []);
    return e.normalize(s);
  }
}
function Jt(e, t) {
  const n = fn(t);
  switch (n) {
    case 3:
      return Ct(t, n);
    case 9:
      return Ct(t, n);
    case 4: {
      const s = t;
      if (ve(s, "k") && s.k)
        return e.interpolate(e.named(s.k));
      if (ve(s, "key") && s.key)
        return e.interpolate(e.named(s.key));
      throw Ot(n);
    }
    case 5: {
      const s = t;
      if (ve(s, "i") && z(s.i))
        return e.interpolate(e.list(s.i));
      if (ve(s, "index") && z(s.index))
        return e.interpolate(e.list(s.index));
      throw Ot(n);
    }
    case 6: {
      const s = t, r = go(s), l = vo(s);
      return e.linked(Jt(e, l), r ? Jt(e, r) : void 0, e.type);
    }
    case 7:
      return Ct(t, n);
    case 8:
      return Ct(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ti = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Hl(e, t) {
  t && Ha(e) && ee(on(ti, { source: e }));
}
const Yl = (e) => e;
let et = x();
function Bl(e) {
  e.code === Vt.USE_MODULO_SYNTAX && ee(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function xl(e, t = {}) {
  let n = !1;
  const s = t.onError || Wa;
  return t.onError = (r) => {
    n = !0, s(r);
  }, { ...fo(e, t), detectError: n };
}
const ni = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!I(e))
    throw Se(le.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Bl);
  {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Hl(e, n);
    const r = (t.onCacheKey || Yl)(e), l = et[r];
    if (l)
      return l;
    const { code: a, detectError: o } = xl(e, t), c = new Function(`return ${a}`)();
    return o ? c : et[r] = c;
  }
};
function li(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Bl), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && I(e)) {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Hl(e, n);
    const r = (t.onCacheKey || Yl)(e), l = et[r];
    if (l)
      return l;
    const { ast: a, detectError: o } = xl(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = xt(a);
    return o ? c : et[r] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !Ee(e))
      return ee(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const n = e.cacheKey;
    if (n) {
      const s = et[n];
      return s || (et[n] = xt(e));
    } else
      return xt(e);
  }
}
const Gn = () => "", he = (e) => B(e);
function Hn(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: r, messageCompiler: l, fallbackLocale: a, messages: o } = e, [c, f] = Qt(...t), p = U(f.missingWarn) ? f.missingWarn : e.missingWarn, v = U(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, d = U(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, S = !!f.resolvedMessage, C = I(f.default) || U(f.default) ? U(f.default) ? l ? c : () => c : f.default : n ? l ? c : () => c : "", y = n || C !== "", P = _n(e, f);
  d && si(f);
  let [k, R, _] = S ? [
    c,
    P,
    o[P] || x()
  ] : jl(e, c, P, a, v, p), h = k, L = c;
  if (!S && !(I(h) || Ee(h) || he(h)) && y && (h = C, L = h), !S && (!(I(h) || Ee(h) || he(h)) || !I(R)))
    return r ? $t : c;
  if (process.env.NODE_ENV !== "production" && I(h) && e.messageCompiler == null)
    return ee(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let E = !1;
  const O = () => {
    E = !0;
  }, A = he(h) ? h : Kl(e, c, R, h, L, O);
  if (E)
    return h;
  const T = ii(e, R, _, f), K = Fo(T), de = ri(e, A, K);
  let w = s ? s(de, c) : de;
  if (d && I(w) && (w = ya(w)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ae = {
      timestamp: Date.now(),
      key: I(c) ? c : he(h) ? h.key : "",
      locale: R || (he(h) ? h.locale : ""),
      format: I(h) ? h : he(h) ? h.source : "",
      message: w
    };
    ae.meta = re({}, e.__meta, /* @__PURE__ */ Qo() || {}), Vo(ae);
  }
  return w;
}
function si(e) {
  X(e.list) ? e.list = e.list.map((t) => I(t) ? In(t) : t) : V(e.named) && Object.keys(e.named).forEach((t) => {
    I(e.named[t]) && (e.named[t] = In(e.named[t]));
  });
}
function jl(e, t, n, s, r, l) {
  const { messages: a, onWarn: o, messageResolver: c, localeFallbacker: f } = e, p = f(e, s, n);
  let v = x(), d, S = null, C = n, y = null;
  const P = "translate";
  for (let k = 0; k < p.length; k++) {
    if (d = y = p[k], process.env.NODE_ENV !== "production" && n !== d && !Gl(n, d) && Wt(r, t) && o(xe(ie.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: d
    })), process.env.NODE_ENV !== "production" && n !== d) {
      const L = e.__v_emitter;
      L && L.emit("fallback", {
        type: P,
        key: t,
        from: C,
        to: y,
        groupId: `${P}:${t}`
      });
    }
    v = a[d] || x();
    let R = null, _, h;
    if (process.env.NODE_ENV !== "production" && Ne && (R = window.performance.now(), _ = "intlify-message-resolve-start", h = "intlify-message-resolve-end", me && me(_)), (S = c(v, t)) === null && (S = v[t]), process.env.NODE_ENV !== "production" && Ne) {
      const L = window.performance.now(), E = e.__v_emitter;
      E && R && S && E.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: S,
        time: L - R,
        groupId: `${P}:${t}`
      }), _ && h && me && Be && (me(h), Be("intlify message resolve", _, h));
    }
    if (I(S) || Ee(S) || he(S))
      break;
    if (!zo(d, p)) {
      const L = dn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        d,
        l,
        P
      );
      L !== t && (S = L);
    }
    C = y;
  }
  return [S, d, v];
}
function Kl(e, t, n, s, r, l) {
  const { messageCompiler: a, warnHtmlMessage: o } = e;
  if (he(s)) {
    const d = s;
    return d.locale = d.locale || n, d.key = d.key || t, d;
  }
  if (a == null) {
    const d = (() => s);
    return d.locale = n, d.key = t, d;
  }
  let c = null, f, p;
  process.env.NODE_ENV !== "production" && Ne && (c = window.performance.now(), f = "intlify-message-compilation-start", p = "intlify-message-compilation-end", me && me(f));
  const v = a(s, ai(e, n, r, s, o, l));
  if (process.env.NODE_ENV !== "production" && Ne) {
    const d = window.performance.now(), S = e.__v_emitter;
    S && c && S.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: d - c,
      groupId: `translate:${t}`
    }), f && p && me && Be && (me(p), Be("intlify message compilation", f, p));
  }
  return v.locale = n, v.key = t, v.source = s, v;
}
function ri(e, t, n) {
  let s = null, r, l;
  process.env.NODE_ENV !== "production" && Ne && (s = window.performance.now(), r = "intlify-message-evaluation-start", l = "intlify-message-evaluation-end", me && me(r));
  const a = t(n);
  if (process.env.NODE_ENV !== "production" && Ne) {
    const o = window.performance.now(), c = e.__v_emitter;
    c && s && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: a,
      time: o - s,
      groupId: `translate:${t.key}`
    }), r && l && me && Be && (me(l), Be("intlify message evaluation", r, l));
  }
  return a;
}
function Qt(...e) {
  const [t, n, s] = e, r = x();
  if (!I(t) && !z(t) && !he(t) && !Ee(t))
    throw Se(le.INVALID_ARGUMENT);
  const l = z(t) ? String(t) : (he(t), t);
  return z(n) ? r.plural = n : I(n) ? r.default = n : F(n) && !Ut(n) ? r.named = n : X(n) && (r.list = n), z(s) ? r.plural = s : I(s) ? r.default = s : F(s) && re(r, s), [l, r];
}
function ai(e, t, n, s, r, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (a) => {
      if (l && l(a), process.env.NODE_ENV !== "production") {
        const o = oi(s), c = `Message compilation error: ${a.message}`, f = a.location && o && ka(o, a.location.start.offset, a.location.end.offset), p = e.__v_emitter;
        p && o && p.emit("compile-error", {
          message: o,
          error: a.message,
          start: a.location && a.location.start.offset,
          end: a.location && a.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(f ? `${c}
${f}` : c);
      } else
        throw a;
    },
    onCacheKey: (a) => ba(t, n, a)
  };
}
function oi(e) {
  if (I(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function ii(e, t, n, s) {
  const { modifiers: r, pluralRules: l, messageResolver: a, fallbackLocale: o, fallbackWarn: c, missingWarn: f, fallbackContext: p } = e, d = {
    locale: t,
    modifiers: r,
    pluralRules: l,
    messages: (S) => {
      let C = a(n, S);
      if (C == null && p) {
        const [, , y] = jl(p, S, t, o, c, f);
        C = a(y, S);
      }
      if (I(C) || Ee(C)) {
        let y = !1;
        const k = Kl(e, S, t, C, S, () => {
          y = !0;
        });
        return y ? Gn : k;
      } else return he(C) ? C : Gn;
    }
  };
  return e.processor && (d.processor = e.processor), s.list && (d.list = s.list), s.named && (d.named = s.named), z(s.plural) && (d.pluralIndex = s.plural), d;
}
const Yn = typeof Intl < "u", Xl = {
  dateTimeFormat: Yn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Yn && typeof Intl.NumberFormat < "u"
};
function Bn(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: r, onWarn: l, localeFallbacker: a } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Xl.dateTimeFormat)
    return l(xe(ie.CANNOT_FORMAT_DATE)), Ft;
  const [c, f, p, v] = qt(...t), d = U(p.missingWarn) ? p.missingWarn : e.missingWarn, S = U(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, C = !!p.part, y = _n(e, p), P = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!I(c) || c === "")
    return new Intl.DateTimeFormat(y, v).format(f);
  let k = {}, R, _ = null, h = y, L = null;
  const E = "datetime format";
  for (let T = 0; T < P.length; T++) {
    if (R = L = P[T], process.env.NODE_ENV !== "production" && y !== R && Wt(S, c) && l(xe(ie.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: R
    })), process.env.NODE_ENV !== "production" && y !== R) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: E,
        key: c,
        from: h,
        to: L,
        groupId: `${E}:${c}`
      });
    }
    if (k = n[R] || {}, _ = k[c], F(_))
      break;
    dn(e, c, R, d, E), h = L;
  }
  if (!F(_) || !I(R))
    return s ? $t : c;
  let O = `${R}__${c}`;
  Ut(v) || (O = `${O}__${JSON.stringify(v)}`);
  let A = o.get(O);
  return A || (A = new Intl.DateTimeFormat(R, re({}, _, v)), o.set(O, A)), C ? A.formatToParts(f) : A.format(f);
}
const Jl = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function qt(...e) {
  const [t, n, s, r] = e, l = x();
  let a = x(), o;
  if (I(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw Se(le.INVALID_ISO_DATE_ARGUMENT);
    const f = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    o = new Date(f);
    try {
      o.toISOString();
    } catch {
      throw Se(le.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Sa(t)) {
    if (isNaN(t.getTime()))
      throw Se(le.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (z(t))
    o = t;
  else
    throw Se(le.INVALID_ARGUMENT);
  return I(n) ? l.key = n : F(n) && Object.keys(n).forEach((c) => {
    Jl.includes(c) ? a[c] = n[c] : l[c] = n[c];
  }), I(s) ? l.locale = s : F(s) && (a = s), F(r) && (a = r), [l.key || "", o, l, a];
}
function xn(e, t, n) {
  const s = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    s.__datetimeFormatters.has(l) && s.__datetimeFormatters.delete(l);
  }
}
function jn(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: r, onWarn: l, localeFallbacker: a } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Xl.numberFormat)
    return l(xe(ie.CANNOT_FORMAT_NUMBER)), Ft;
  const [c, f, p, v] = Zt(...t), d = U(p.missingWarn) ? p.missingWarn : e.missingWarn, S = U(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, C = !!p.part, y = _n(e, p), P = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!I(c) || c === "")
    return new Intl.NumberFormat(y, v).format(f);
  let k = {}, R, _ = null, h = y, L = null;
  const E = "number format";
  for (let T = 0; T < P.length; T++) {
    if (R = L = P[T], process.env.NODE_ENV !== "production" && y !== R && Wt(S, c) && l(xe(ie.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: R
    })), process.env.NODE_ENV !== "production" && y !== R) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: E,
        key: c,
        from: h,
        to: L,
        groupId: `${E}:${c}`
      });
    }
    if (k = n[R] || {}, _ = k[c], F(_))
      break;
    dn(e, c, R, d, E), h = L;
  }
  if (!F(_) || !I(R))
    return s ? $t : c;
  let O = `${R}__${c}`;
  Ut(v) || (O = `${O}__${JSON.stringify(v)}`);
  let A = o.get(O);
  return A || (A = new Intl.NumberFormat(R, re({}, _, v)), o.set(O, A)), C ? A.formatToParts(f) : A.format(f);
}
const Ql = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Zt(...e) {
  const [t, n, s, r] = e, l = x();
  let a = x();
  if (!z(t))
    throw Se(le.INVALID_ARGUMENT);
  const o = t;
  return I(n) ? l.key = n : F(n) && Object.keys(n).forEach((c) => {
    Ql.includes(c) ? a[c] = n[c] : l[c] = n[c];
  }), I(s) ? l.locale = s : F(s) && (a = s), F(r) && (a = r), [l.key || "", o, l, a];
}
function Kn(e, t, n) {
  const s = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    s.__numberFormatters.has(l) && s.__numberFormatters.delete(l);
  }
}
_o();
function ci() {
  return ql().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ql() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const ui = typeof Proxy == "function", fi = "devtools-plugin:setup", _i = "plugin:settings:set";
let qe, zt;
function di() {
  var e;
  return qe !== void 0 || (typeof window < "u" && window.performance ? (qe = !0, zt = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (qe = !0, zt = globalThis.perf_hooks.performance) : qe = !1), qe;
}
function mi() {
  return di() ? zt.now() : Date.now();
}
class pi {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const a in t.settings) {
        const o = t.settings[a];
        s[a] = o.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let l = Object.assign({}, s);
    try {
      const a = localStorage.getItem(r), o = JSON.parse(a);
      Object.assign(l, o);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return l;
      },
      setSettings(a) {
        try {
          localStorage.setItem(r, JSON.stringify(a));
        } catch {
        }
        l = a;
      },
      now() {
        return mi();
      }
    }, n && n.on(_i, (a, o) => {
      a === this.plugin.id && this.fallbacks.setSettings(o);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, o) => this.target ? this.target.on[o] : (...c) => {
        this.onQueue.push({
          method: o,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, o) => this.target ? this.target[o] : o === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(o) ? (...c) => (this.targetQueue.push({
        method: o,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[o](...c)) : (...c) => new Promise((f) => {
        this.targetQueue.push({
          method: o,
          args: c,
          resolve: f
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function hi(e, t) {
  const n = e, s = ql(), r = ci(), l = ui && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !l))
    r.emit(fi, e, t);
  else {
    const a = l ? new pi(n, r) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
const Ei = "9.14.5";
function gi() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (De().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (De().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (De().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (De().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (De().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Zl = ie.__EXTEND_POINT__, Ce = wt(Zl), q = {
  FALLBACK_TO_ROOT: Zl,
  // 9
  NOT_SUPPORTED_PRESERVE: Ce(),
  // 10
  NOT_SUPPORTED_FORMATTER: Ce(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Ce(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: Ce(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: Ce(),
  // 14
  NOT_FOUND_PARENT_SCOPE: Ce(),
  // 15
  IGNORE_OBJ_FLATTEN: Ce(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: Ce(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Ce()
  // 18
}, vi = {
  [q.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [q.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [q.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [q.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [q.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [q.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [q.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [q.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [q.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [q.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function _e(e, ...t) {
  return on(vi[e], ...t);
}
const zl = le.__EXTEND_POINT__, ce = wt(zl), $ = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: zl,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: ce(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ce(),
  // 26
  NOT_INSTALLED: ce(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: ce(),
  // 28
  // directive module errors
  REQUIRED_VALUE: ce(),
  // 29
  INVALID_VALUE: ce(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ce(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: ce(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: ce(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ce(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ce(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ce(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ce(),
  // 37
  // for enhancement
  __EXTEND_POINT__: ce()
  // 38
};
function te(e, ...t) {
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: Ni, args: t } : void 0);
}
const Ni = {
  [$.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [$.INVALID_ARGUMENT]: "Invalid argument",
  [$.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [$.NOT_INSTALLED]: "Need to install with `app.use` function",
  [$.UNEXPECTED_ERROR]: "Unexpected error",
  [$.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [$.REQUIRED_VALUE]: "Required in value: {0}",
  [$.INVALID_VALUE]: "Invalid value",
  [$.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [$.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [$.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [$.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [$.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [$.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, en = /* @__PURE__ */ ye("__translateVNode"), tn = /* @__PURE__ */ ye("__datetimeParts"), nn = /* @__PURE__ */ ye("__numberParts"), je = /* @__PURE__ */ ye("__enableEmitter"), bt = /* @__PURE__ */ ye("__disableEmitter"), es = ye("__setPluralRules"), ts = /* @__PURE__ */ ye("__injectWithOption"), ln = /* @__PURE__ */ ye("__dispose");
function It(e) {
  if (!V(e) || Ee(e))
    return e;
  for (const t in e)
    if (ve(e, t))
      if (!t.includes("."))
        V(e[t]) && It(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let r = e, l = !1;
        for (let a = 0; a < s; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in r || (r[n[a]] = x()), !V(r[n[a]])) {
            process.env.NODE_ENV !== "production" && ee(_e(q.IGNORE_OBJ_FLATTEN, {
              key: n[a]
            })), l = !0;
            break;
          }
          r = r[n[a]];
        }
        if (l || (Ee(r) ? Rl.includes(n[s]) || delete e[t] : (r[n[s]] = e[t], delete e[t])), !Ee(r)) {
          const a = r[n[s]];
          V(a) && It(a);
        }
      }
  return e;
}
function Gt(e, t) {
  const { messages: n, __i18n: s, messageResolver: r, flatJson: l } = t, a = F(n) ? n : X(s) ? x() : { [e]: x() };
  if (X(s) && s.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: c, resource: f } = o;
      c ? (a[c] = a[c] || x(), Rt(f, a[c])) : Rt(f, a);
    } else
      I(o) && Rt(JSON.parse(o), a);
  }), r == null && l)
    for (const o in a)
      ve(a, o) && It(a[o]);
  return a;
}
function ns(e) {
  return e.type;
}
function ls(e, t, n) {
  let s = V(t.messages) ? t.messages : x();
  "__i18nGlobal" in n && (s = Gt(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(s);
  r.length && r.forEach((l) => {
    e.mergeLocaleMessage(l, s[l]);
  });
  {
    if (V(t.datetimeFormats)) {
      const l = Object.keys(t.datetimeFormats);
      l.length && l.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (V(t.numberFormats)) {
      const l = Object.keys(t.numberFormats);
      l.length && l.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Xn(e) {
  return Ae(vs, null, e, 0);
}
const Jn = "__INTLIFY_META__", Qn = () => [], Li = () => !1;
let qn = 0;
function Zn(e) {
  return ((t, n, s, r) => e(n, s, Lt() || void 0, r));
}
const Oi = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Lt();
  let t = null;
  return e && (t = ns(e)[Jn]) ? { [Jn]: t } : null;
};
function mn(e = {}, t) {
  const { __root: n, __injectWithOption: s } = e, r = n === void 0, l = e.flatJson, a = Ne ? Ze : al, o = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && o && El(_e(q.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let c = U(e.inheritLocale) ? e.inheritLocale : !0;
  const f = a(
    // prettier-ignore
    n && c ? n.locale.value : I(e.locale) ? e.locale : nt
  ), p = a(
    // prettier-ignore
    n && c ? n.fallbackLocale.value : I(e.fallbackLocale) || X(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value
  ), v = a(Gt(f.value, e)), d = a(F(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }), S = a(F(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
  let C = n ? n.missingWarn : U(e.missingWarn) || we(e.missingWarn) ? e.missingWarn : !0, y = n ? n.fallbackWarn : U(e.fallbackWarn) || we(e.fallbackWarn) ? e.fallbackWarn : !0, P = n ? n.fallbackRoot : U(e.fallbackRoot) ? e.fallbackRoot : !0, k = !!e.fallbackFormat, R = B(e.missing) ? e.missing : null, _ = B(e.missing) ? Zn(e.missing) : null, h = B(e.postTranslation) ? e.postTranslation : null, L = n ? n.warnHtmlMessage : U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const O = n ? n.modifiers : F(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || n && n.pluralRules, T;
  T = (() => {
    r && Vn(null);
    const m = {
      version: Ei,
      locale: f.value,
      fallbackLocale: p.value,
      messages: v.value,
      modifiers: O,
      pluralRules: A,
      missing: _ === null ? void 0 : _,
      missingWarn: C,
      fallbackWarn: y,
      fallbackFormat: k,
      unresolving: !0,
      postTranslation: h === null ? void 0 : h,
      warnHtmlMessage: L,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = d.value, m.numberFormats = S.value, m.__datetimeFormatters = F(T) ? T.__datetimeFormatters : void 0, m.__numberFormatters = F(T) ? T.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (m.__v_emitter = F(T) ? T.__v_emitter : void 0);
    const N = Zo(m);
    return r && Vn(N), N;
  })(), Nt(T, f.value, p.value);
  function de() {
    return [
      f.value,
      p.value,
      v.value,
      d.value,
      S.value
    ];
  }
  const w = be({
    get: () => f.value,
    set: (m) => {
      f.value = m, T.locale = f.value;
    }
  }), ae = be({
    get: () => p.value,
    set: (m) => {
      p.value = m, T.fallbackLocale = p.value, Nt(T, f.value, m);
    }
  }), st = be(() => v.value), rt = /* @__PURE__ */ be(() => d.value), Oe = /* @__PURE__ */ be(() => S.value);
  function at() {
    return B(h) ? h : null;
  }
  function ot(m) {
    h = m, T.postTranslation = m;
  }
  function it() {
    return R;
  }
  function ct(m) {
    m !== null && (_ = Zn(m)), R = m, T.missing = _;
  }
  function ut(m, N) {
    return m !== "translate" || !N.resolvedMessage;
  }
  const pe = (m, N, H, Z, ke, yt) => {
    de();
    let Qe;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (T.fallbackContext = n ? qo() : void 0), Qe = m(T);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (T.fallbackContext = void 0);
    }
    if (H !== "translate exists" && // for not `te` (e.g `t`)
    z(Qe) && Qe === $t || H === "translate exists" && !Qe) {
      const [Ge, cs] = N();
      if (process.env.NODE_ENV !== "production" && n && I(Ge) && ut(H, cs) && (P && (Wt(y, Ge) || Wl(C, Ge)) && ee(_e(q.FALLBACK_TO_ROOT, {
        key: Ge,
        type: H
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: gn } = T;
        gn && P && gn.emit("fallback", {
          type: H,
          key: Ge,
          to: "global",
          groupId: `${H}:${Ge}`
        });
      }
      return n && P ? Z(n) : ke(Ge);
    } else {
      if (yt(Qe))
        return Qe;
      throw te($.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ke(...m) {
    return pe((N) => Reflect.apply(Hn, null, [N, ...m]), () => Qt(...m), "translate", (N) => Reflect.apply(N.t, N, [...m]), (N) => N, (N) => I(N));
  }
  function Xe(...m) {
    const [N, H, Z] = m;
    if (Z && !V(Z))
      throw te($.INVALID_ARGUMENT);
    return Ke(N, H, re({ resolvedMessage: !0 }, Z || {}));
  }
  function ft(...m) {
    return pe((N) => Reflect.apply(Bn, null, [N, ...m]), () => qt(...m), "datetime format", (N) => Reflect.apply(N.d, N, [...m]), () => Ft, (N) => I(N));
  }
  function _t(...m) {
    return pe((N) => Reflect.apply(jn, null, [N, ...m]), () => Zt(...m), "number format", (N) => Reflect.apply(N.n, N, [...m]), () => Ft, (N) => I(N));
  }
  function dt(m) {
    return m.map((N) => I(N) || z(N) || U(N) ? Xn(String(N)) : N);
  }
  const mt = {
    normalize: dt,
    interpolate: (m) => m,
    type: "vnode"
  };
  function Je(...m) {
    return pe(
      (N) => {
        let H;
        const Z = N;
        try {
          Z.processor = mt, H = Reflect.apply(Hn, null, [Z, ...m]);
        } finally {
          Z.processor = null;
        }
        return H;
      },
      () => Qt(...m),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[en](...m),
      (N) => [Xn(N)],
      (N) => X(N)
    );
  }
  function pt(...m) {
    return pe(
      (N) => Reflect.apply(jn, null, [N, ...m]),
      () => Zt(...m),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[nn](...m),
      Qn,
      (N) => I(N) || X(N)
    );
  }
  function ht(...m) {
    return pe(
      (N) => Reflect.apply(Bn, null, [N, ...m]),
      () => qt(...m),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[tn](...m),
      Qn,
      (N) => I(N) || X(N)
    );
  }
  function Et(m) {
    A = m, T.pluralRules = A;
  }
  function b(m, N) {
    return pe(() => {
      if (!m)
        return !1;
      const H = I(N) ? N : f.value, Z = We(H), ke = T.messageResolver(Z, m);
      return o ? ke != null : Ee(ke) || he(ke) || I(ke);
    }, () => [m], "translate exists", (H) => Reflect.apply(H.te, H, [m, N]), Li, (H) => U(H));
  }
  function G(m) {
    let N = null;
    const H = Ml(T, p.value, f.value);
    for (let Z = 0; Z < H.length; Z++) {
      const ke = v.value[H[Z]] || {}, yt = T.messageResolver(ke, m);
      if (yt != null) {
        N = yt;
        break;
      }
    }
    return N;
  }
  function gt(m) {
    const N = G(m);
    return N ?? (n ? n.tm(m) || {} : {});
  }
  function We(m) {
    return v.value[m] || {};
  }
  function vt(m, N) {
    if (l) {
      const H = { [m]: N };
      for (const Z in H)
        ve(H, Z) && It(H[Z]);
      N = H[m];
    }
    v.value[m] = N, T.messages = v.value;
  }
  function Ht(m, N) {
    v.value[m] = v.value[m] || {};
    const H = { [m]: N };
    if (l)
      for (const Z in H)
        ve(H, Z) && It(H[Z]);
    N = H[m], Rt(N, v.value[m]), T.messages = v.value;
  }
  function i(m) {
    return d.value[m] || {};
  }
  function u(m, N) {
    d.value[m] = N, T.datetimeFormats = d.value, xn(T, m, N);
  }
  function g(m, N) {
    d.value[m] = re(d.value[m] || {}, N), T.datetimeFormats = d.value, xn(T, m, N);
  }
  function D(m) {
    return S.value[m] || {};
  }
  function J(m, N) {
    S.value[m] = N, T.numberFormats = S.value, Kn(T, m, N);
  }
  function j(m, N) {
    S.value[m] = re(S.value[m] || {}, N), T.numberFormats = S.value, Kn(T, m, N);
  }
  qn++, n && Ne && (Xt(n.locale, (m) => {
    c && (f.value = m, T.locale = m, Nt(T, f.value, p.value));
  }), Xt(n.fallbackLocale, (m) => {
    c && (p.value = m, T.fallbackLocale = m, Nt(T, f.value, p.value));
  }));
  const Y = {
    id: qn,
    locale: w,
    fallbackLocale: ae,
    get inheritLocale() {
      return c;
    },
    set inheritLocale(m) {
      c = m, m && n && (f.value = n.locale.value, p.value = n.fallbackLocale.value, Nt(T, f.value, p.value));
    },
    get availableLocales() {
      return Object.keys(v.value).sort();
    },
    messages: st,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return C;
    },
    set missingWarn(m) {
      C = m, T.missingWarn = C;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(m) {
      y = m, T.fallbackWarn = y;
    },
    get fallbackRoot() {
      return P;
    },
    set fallbackRoot(m) {
      P = m;
    },
    get fallbackFormat() {
      return k;
    },
    set fallbackFormat(m) {
      k = m, T.fallbackFormat = k;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(m) {
      L = m, T.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(m) {
      E = m, T.escapeParameter = m;
    },
    t: Ke,
    getLocaleMessage: We,
    setLocaleMessage: vt,
    mergeLocaleMessage: Ht,
    getPostTranslationHandler: at,
    setPostTranslationHandler: ot,
    getMissingHandler: it,
    setMissingHandler: ct,
    [es]: Et
  };
  return Y.datetimeFormats = rt, Y.numberFormats = Oe, Y.rt = Xe, Y.te = b, Y.tm = gt, Y.d = ft, Y.n = _t, Y.getDateTimeFormat = i, Y.setDateTimeFormat = u, Y.mergeDateTimeFormat = g, Y.getNumberFormat = D, Y.setNumberFormat = J, Y.mergeNumberFormat = j, Y[ts] = s, Y[en] = Je, Y[tn] = ht, Y[nn] = pt, process.env.NODE_ENV !== "production" && (Y[je] = (m) => {
    T.__v_emitter = m;
  }, Y[bt] = () => {
    T.__v_emitter = void 0;
  }), Y;
}
function Ti(e) {
  const t = I(e.locale) ? e.locale : nt, n = I(e.fallbackLocale) || X(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, s = B(e.missing) ? e.missing : void 0, r = U(e.silentTranslationWarn) || we(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, l = U(e.silentFallbackWarn) || we(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = U(e.fallbackRoot) ? e.fallbackRoot : !0, o = !!e.formatFallbackMessages, c = F(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, p = B(e.postTranslation) ? e.postTranslation : void 0, v = I(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, d = !!e.escapeParameterHtml, S = U(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && ee(_e(q.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && ee(_e(q.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let C = e.messages;
  if (F(e.sharedMessages)) {
    const E = e.sharedMessages;
    C = Object.keys(E).reduce((A, T) => {
      const K = A[T] || (A[T] = {});
      return re(K, E[T]), A;
    }, C || {});
  }
  const { __i18n: y, __root: P, __injectWithOption: k } = e, R = e.datetimeFormats, _ = e.numberFormats, h = e.flatJson, L = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: C,
    flatJson: h,
    datetimeFormats: R,
    numberFormats: _,
    missing: s,
    missingWarn: r,
    fallbackWarn: l,
    fallbackRoot: a,
    fallbackFormat: o,
    modifiers: c,
    pluralRules: f,
    postTranslation: p,
    warnHtmlMessage: v,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: S,
    translateExistCompatible: L,
    __i18n: y,
    __root: P,
    __injectWithOption: k
  };
}
function sn(e = {}, t) {
  {
    const n = mn(Ti(e)), { __extender: s } = e, r = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(l) {
        n.locale.value = l;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(l) {
        n.fallbackLocale.value = l;
      },
      // messages
      get messages() {
        return n.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return n.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return n.availableLocales;
      },
      // formatter
      get formatter() {
        return process.env.NODE_ENV !== "production" && ee(_e(q.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(l) {
        process.env.NODE_ENV !== "production" && ee(_e(q.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(l) {
        n.setMissingHandler(l);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return U(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(l) {
        n.missingWarn = U(l) ? !l : l;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return U(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(l) {
        n.fallbackWarn = U(l) ? !l : l;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(l) {
        n.fallbackFormat = l;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(l) {
        n.setPostTranslationHandler(l);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(l) {
        n.inheritLocale = l;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(l) {
        n.warnHtmlMessage = l !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(l) {
        n.escapeParameter = l;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && ee(_e(q.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(l) {
        process.env.NODE_ENV !== "production" && ee(_e(q.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...l) {
        const [a, o, c] = l, f = {};
        let p = null, v = null;
        if (!I(a))
          throw te($.INVALID_ARGUMENT);
        const d = a;
        return I(o) ? f.locale = o : X(o) ? p = o : F(o) && (v = o), X(c) ? p = c : F(c) && (v = c), Reflect.apply(n.t, n, [
          d,
          p || v || {},
          f
        ]);
      },
      rt(...l) {
        return Reflect.apply(n.rt, n, [...l]);
      },
      // tc
      tc(...l) {
        const [a, o, c] = l, f = { plural: 1 };
        let p = null, v = null;
        if (!I(a))
          throw te($.INVALID_ARGUMENT);
        const d = a;
        return I(o) ? f.locale = o : z(o) ? f.plural = o : X(o) ? p = o : F(o) && (v = o), I(c) ? f.locale = c : X(c) ? p = c : F(c) && (v = c), Reflect.apply(n.t, n, [
          d,
          p || v || {},
          f
        ]);
      },
      // te
      te(l, a) {
        return n.te(l, a);
      },
      // tm
      tm(l) {
        return n.tm(l);
      },
      // getLocaleMessage
      getLocaleMessage(l) {
        return n.getLocaleMessage(l);
      },
      // setLocaleMessage
      setLocaleMessage(l, a) {
        n.setLocaleMessage(l, a);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(l, a) {
        n.mergeLocaleMessage(l, a);
      },
      // d
      d(...l) {
        return Reflect.apply(n.d, n, [...l]);
      },
      // getDateTimeFormat
      getDateTimeFormat(l) {
        return n.getDateTimeFormat(l);
      },
      // setDateTimeFormat
      setDateTimeFormat(l, a) {
        n.setDateTimeFormat(l, a);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(l, a) {
        n.mergeDateTimeFormat(l, a);
      },
      // n
      n(...l) {
        return Reflect.apply(n.n, n, [...l]);
      },
      // getNumberFormat
      getNumberFormat(l) {
        return n.getNumberFormat(l);
      },
      // setNumberFormat
      setNumberFormat(l, a) {
        n.setNumberFormat(l, a);
      },
      // mergeNumberFormat
      mergeNumberFormat(l, a) {
        n.mergeNumberFormat(l, a);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(l, a) {
        return process.env.NODE_ENV !== "production" && ee(_e(q.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return r.__extender = s, process.env.NODE_ENV !== "production" && (r.__enableEmitter = (l) => {
      const a = n;
      a[je] && a[je](l);
    }, r.__disableEmitter = () => {
      const l = n;
      l[bt] && l[bt]();
    }), r;
  }
}
const pn = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function bi({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, r) => [
    ...s,
    // prettier-ignore
    ...r.type === Dt ? r.children : [r]
  ], []) : t.reduce((n, s) => {
    const r = e[s];
    return r && (n[s] = r()), n;
  }, x());
}
function ss(e) {
  return Dt;
}
const Ii = /* @__PURE__ */ an({
  /* eslint-disable */
  name: "i18n-t",
  props: re({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => z(e) || !isNaN(e)
    }
  }, pn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: s } = t, r = e.i18n || En({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const l = Object.keys(n).filter((v) => v !== "_"), a = x();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = I(e.plural) ? +e.plural : e.plural);
      const o = bi(t, l), c = r[en](e.keypath, o, a), f = re(x(), s), p = I(e.tag) || V(e.tag) ? e.tag : ss();
      return ol(p, f, c);
    };
  }
}), jt = Ii;
function Si(e) {
  return X(e) && !I(e[0]);
}
function rs(e, t, n, s) {
  const { slots: r, attrs: l } = t;
  return () => {
    const a = { part: !0 };
    let o = x();
    e.locale && (a.locale = e.locale), I(e.format) ? a.key = e.format : V(e.format) && (I(e.format.key) && (a.key = e.format.key), o = Object.keys(e.format).reduce((d, S) => n.includes(S) ? re(x(), d, { [S]: e.format[S] }) : d, x()));
    const c = s(e.value, a, o);
    let f = [a.key];
    X(c) ? f = c.map((d, S) => {
      const C = r[d.type], y = C ? C({ [d.type]: d.value, index: S, parts: c }) : [d.value];
      return Si(y) && (y[0].key = `${d.type}-${S}`), y;
    }) : I(c) && (f = [c]);
    const p = re(x(), l), v = I(e.tag) || V(e.tag) ? e.tag : ss();
    return ol(v, p, f);
  };
}
const Ai = /* @__PURE__ */ an({
  /* eslint-disable */
  name: "i18n-n",
  props: re({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, pn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || En({
      useScope: e.scope,
      __useComponent: !0
    });
    return rs(e, t, Ql, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[nn](...s)
    ));
  }
}), zn = Ai, yi = /* @__PURE__ */ an({
  /* eslint-disable */
  name: "i18n-d",
  props: re({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, pn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || En({
      useScope: e.scope,
      __useComponent: !0
    });
    return rs(e, t, Jl, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[tn](...s)
    ));
  }
}), el = yi;
function Pi(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const s = n.__getInstance(t);
    return s != null ? s.__composer : e.global.__composer;
  }
}
function Ci(e) {
  const t = (a) => {
    const { instance: o, modifiers: c, value: f } = a;
    if (!o || !o.$)
      throw te($.UNEXPECTED_ERROR);
    const p = Pi(e, o.$);
    process.env.NODE_ENV !== "production" && c.preserve && ee(_e(q.NOT_SUPPORTED_PRESERVE));
    const v = tl(f);
    return [
      Reflect.apply(p.t, p, [...nl(v)]),
      p
    ];
  };
  return {
    created: (a, o) => {
      const [c, f] = t(o);
      Ne && e.global === f && (a.__i18nWatcher = Xt(f.locale, () => {
        o.instance && o.instance.$forceUpdate();
      })), a.__composer = f, a.textContent = c;
    },
    unmounted: (a) => {
      Ne && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: o }) => {
      if (a.__composer) {
        const c = a.__composer, f = tl(o);
        a.textContent = Reflect.apply(c.t, c, [
          ...nl(f)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [o] = t(a);
      return { textContent: o };
    }
  };
}
function tl(e) {
  if (I(e))
    return { path: e };
  if (F(e)) {
    if (!("path" in e))
      throw te($.REQUIRED_VALUE, "path");
    return e;
  } else
    throw te($.INVALID_VALUE);
}
function nl(e) {
  const { path: t, locale: n, args: s, choice: r, plural: l } = e, a = {}, o = s || {};
  return I(n) && (a.locale = n), z(r) && (a.plural = r), z(l) && (a.plural = l), [t, o, a];
}
function Ri(e, t, ...n) {
  const s = F(n[0]) ? n[0] : {}, r = !!s.useI18nComponentName, l = U(s.globalInstall) ? s.globalInstall : !0;
  process.env.NODE_ENV !== "production" && l && r && ee(_e(q.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: jt.name
  })), l && ([r ? "i18n" : jt.name, "I18nT"].forEach((a) => e.component(a, jt)), [zn.name, "I18nN"].forEach((a) => e.component(a, zn)), [el.name, "I18nD"].forEach((a) => e.component(a, el))), e.directive("t", Ci(t));
}
const Kt = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, Di = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, ki = {
  "vue-i18n-timeline": 16764185
}, as = "vue-i18n: composer properties";
let rn;
async function Mi(e, t) {
  return new Promise((n, s) => {
    try {
      hi({
        id: "vue-devtools-plugin-vue-i18n",
        label: Kt[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [as],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (r) => {
        rn = r, r.on.visitComponentTree(({ componentInstance: a, treeNode: o }) => {
          Fi(a, o, t);
        }), r.on.inspectComponent(({ componentInstance: a, instanceData: o }) => {
          a.vnode.el && a.vnode.el.__VUE_I18N__ && o && (t.mode === "legacy" ? a.vnode.el.__VUE_I18N__ !== t.global.__composer && ll(o, a.vnode.el.__VUE_I18N__) : ll(o, a.vnode.el.__VUE_I18N__));
        }), r.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Kt[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: Di[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), r.on.getInspectorTree((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && Wi(a, t);
        });
        const l = /* @__PURE__ */ new Map();
        r.on.getInspectorState(async (a) => {
          if (a.app === e && a.inspectorId === "vue-i18n-resource-inspector")
            if (r.unhighlightElement(), Hi(a, t), a.nodeId === "global") {
              if (!l.has(a.app)) {
                const [o] = await r.getComponentInstances(a.app);
                l.set(a.app, o);
              }
              r.highlightElement(l.get(a.app));
            } else {
              const o = Gi(a.nodeId, t);
              o && r.highlightElement(o);
            }
        }), r.on.editInspectorState((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && Bi(a, t);
        }), r.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Kt[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: ki[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), n(!0);
      });
    } catch (r) {
      console.error(r), s(!1);
    }
  });
}
function os(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Fi(e, t, n) {
  const s = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== s) {
    const r = {
      label: `i18n (${os(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(r);
  }
}
function ll(e, t) {
  const n = as;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: hn(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function hn(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const s = e[n];
    B(s) && "source" in s ? t[n] = $i(s) : Ee(s) && s.loc && s.loc.source ? t[n] = s.loc.source : V(s) ? t[n] = hn(s) : t[n] = s;
  }), t;
}
const Ui = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function wi(e) {
  return e.replace(/[<>"&]/g, Vi);
}
function Vi(e) {
  return Ui[e] || e;
}
function $i(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${wi(e.source)}")` : "(?)"}`
    }
  };
}
function Wi(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [s, r] of t.__instances) {
    const l = t.mode === "composition" ? r : r.__composer;
    n !== l && e.rootNodes.push({
      id: l.id.toString(),
      label: `${os(s)} Scope`
    });
  }
}
function Gi(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [s, r] of t.__instances.entries())
      if (r.id.toString() === e) {
        n = s;
        break;
      }
  }
  return n;
}
function is(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((s) => s.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Hi(e, t) {
  const n = is(e.nodeId, t);
  return n && (e.state = Yi(n)), null;
}
function Yi(e) {
  const t = {}, n = "Locale related info", s = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = s;
  const r = "Locale messages info", l = [
    {
      type: r,
      key: "messages",
      editable: !1,
      value: hn(e.messages.value)
    }
  ];
  t[r] = l;
  {
    const a = "Datetime formats info", o = [
      {
        type: a,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[a] = o;
    const c = "Datetime formats info", f = [
      {
        type: c,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[c] = f;
  }
  return t;
}
function St(e, t) {
  if (rn) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), rn.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function Bi(e, t) {
  const n = is(e.nodeId, t);
  if (n) {
    const [s] = e.path;
    s === "locale" && I(e.state.value) ? n.locale.value = e.state.value : s === "fallbackLocale" && (I(e.state.value) || X(e.state.value) || V(e.state.value)) ? n.fallbackLocale.value = e.state.value : s === "inheritLocale" && U(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function xi(e, t, n) {
  return {
    beforeCreate() {
      const s = Lt();
      if (!s)
        throw te($.UNEXPECTED_ERROR);
      const r = this.$options;
      if (r.i18n) {
        const l = r.i18n;
        if (r.__i18n && (l.__i18n = r.__i18n), l.__root = t, this === this.$root)
          this.$i18n = sl(e, l);
        else {
          l.__injectWithOption = !0, l.__extender = n.__vueI18nExtend, this.$i18n = sn(l);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (r.__i18n)
        if (this === this.$root)
          this.$i18n = sl(e, r);
        else {
          this.$i18n = sn({
            __i18n: r.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const l = this.$i18n;
          l.__extender && (l.__disposer = l.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      r.__i18nGlobal && ls(t, r, r), this.$t = (...l) => this.$i18n.t(...l), this.$rt = (...l) => this.$i18n.rt(...l), this.$tc = (...l) => this.$i18n.tc(...l), this.$te = (l, a) => this.$i18n.te(l, a), this.$d = (...l) => this.$i18n.d(...l), this.$n = (...l) => this.$i18n.n(...l), this.$tm = (l) => this.$i18n.tm(l), n.__setInstance(s, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const s = this.$i18n;
        this.$el.__VUE_I18N__ = s.__composer;
        const r = this.__v_emitter = cn();
        s.__enableEmitter && s.__enableEmitter(r), r.on("*", St);
      }
    },
    unmounted() {
      const s = Lt();
      if (!s)
        throw te($.UNEXPECTED_ERROR);
      const r = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", St), delete this.__v_emitter), this.$i18n && (r.__disableEmitter && r.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__disposer && (r.__disposer(), delete r.__disposer, delete r.__extender), n.__deleteInstance(s), delete this.$i18n;
    }
  };
}
function sl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[es](t.pluralizationRules || e.pluralizationRules);
  const n = Gt(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((s) => e.mergeLocaleMessage(s, n[s])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((s) => e.mergeDateTimeFormat(s, t.datetimeFormats[s])), t.numberFormats && Object.keys(t.numberFormats).forEach((s) => e.mergeNumberFormat(s, t.numberFormats[s])), e;
}
const ji = /* @__PURE__ */ ye("global-vue-i18n");
function Ki(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && U(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, s = U(e.globalInjection) ? e.globalInjection : !0, r = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, l = /* @__PURE__ */ new Map(), [a, o] = Xi(e, n), c = /* @__PURE__ */ ye(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && r && ee(_e(q.NOTICE_DROP_ALLOW_COMPOSITION));
  function f(d) {
    return l.get(d) || null;
  }
  function p(d, S) {
    l.set(d, S);
  }
  function v(d) {
    l.delete(d);
  }
  {
    const d = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return r;
      },
      // install plugin
      async install(S, ...C) {
        if (process.env.NODE_ENV !== "production" && (S.__VUE_I18N__ = d), S.__VUE_I18N_SYMBOL__ = c, S.provide(S.__VUE_I18N_SYMBOL__, d), F(C[0])) {
          const k = C[0];
          d.__composerExtend = k.__composerExtend, d.__vueI18nExtend = k.__vueI18nExtend;
        }
        let y = null;
        !n && s && (y = lc(S, d.global)), __VUE_I18N_FULL_INSTALL__ && Ri(S, d, ...C), __VUE_I18N_LEGACY_API__ && n && S.mixin(xi(o, o.__composer, d));
        const P = S.unmount;
        if (S.unmount = () => {
          y && y(), d.dispose(), P();
        }, process.env.NODE_ENV !== "production") {
          if (!await Mi(S, d))
            throw te($.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const R = cn();
          if (n) {
            const _ = o;
            _.__enableEmitter && _.__enableEmitter(R);
          } else {
            const _ = o;
            _[je] && _[je](R);
          }
          R.on("*", St);
        }
      },
      // global accessor
      get global() {
        return o;
      },
      dispose() {
        a.stop();
      },
      // @internal
      __instances: l,
      // @internal
      __getInstance: f,
      // @internal
      __setInstance: p,
      // @internal
      __deleteInstance: v
    };
    return d;
  }
}
function En(e = {}) {
  const t = Lt();
  if (t == null)
    throw te($.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw te($.NOT_INSTALLED);
  const n = Ji(t), s = qi(n), r = ns(t), l = Qi(e, r);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw te($.NOT_AVAILABLE_IN_LEGACY_MODE);
    return tc(t, l, s, e);
  }
  if (l === "global")
    return ls(s, e, r), s;
  if (l === "parent") {
    let c = Zi(n, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && ee(_e(q.NOT_FOUND_PARENT_SCOPE)), c = s), c;
  }
  const a = n;
  let o = a.__getInstance(t);
  if (o == null) {
    const c = re({}, e);
    "__i18n" in r && (c.__i18n = r.__i18n), s && (c.__root = s), o = mn(c), a.__composerExtend && (o[ln] = a.__composerExtend(o)), ec(a, t, o), a.__setInstance(t, o);
  }
  return o;
}
function Xi(e, t, n) {
  const s = ds();
  {
    const r = __VUE_I18N_LEGACY_API__ && t ? s.run(() => sn(e)) : s.run(() => mn(e));
    if (r == null)
      throw te($.UNEXPECTED_ERROR);
    return [s, r];
  }
}
function Ji(e) {
  {
    const t = ps(e.isCE ? ji : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw te(e.isCE ? $.NOT_INSTALLED_WITH_PROVIDE : $.UNEXPECTED_ERROR);
    return t;
  }
}
function Qi(e, t) {
  return Ut(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function qi(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Zi(e, t, n = !1) {
  let s = null;
  const r = t.root;
  let l = zi(t, n);
  for (; l != null; ) {
    const a = e;
    if (e.mode === "composition")
      s = a.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = a.__getInstance(l);
      o != null && (s = o.__composer, n && s && !s[ts] && (s = null));
    }
    if (s != null || r === l)
      break;
    l = l.parent;
  }
  return s;
}
function zi(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ec(e, t, n) {
  let s = null;
  Es(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, s = cn();
      const r = n;
      r[je] && r[je](s), s.on("*", St);
    }
  }, t), gs(() => {
    const r = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (s && s.off("*", St), r[bt] && r[bt](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const l = r[ln];
    l && (l(), delete r[ln]);
  }, t);
}
function tc(e, t, n, s = {}) {
  const r = t === "local", l = al(null);
  if (r && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw te($.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = U(s.inheritLocale) ? s.inheritLocale : !I(s.locale), o = Ze(
    // prettier-ignore
    !r || a ? n.locale.value : I(s.locale) ? s.locale : nt
  ), c = Ze(
    // prettier-ignore
    !r || a ? n.fallbackLocale.value : I(s.fallbackLocale) || X(s.fallbackLocale) || F(s.fallbackLocale) || s.fallbackLocale === !1 ? s.fallbackLocale : o.value
  ), f = Ze(Gt(o.value, s)), p = Ze(F(s.datetimeFormats) ? s.datetimeFormats : { [o.value]: {} }), v = Ze(F(s.numberFormats) ? s.numberFormats : { [o.value]: {} }), d = r ? n.missingWarn : U(s.missingWarn) || we(s.missingWarn) ? s.missingWarn : !0, S = r ? n.fallbackWarn : U(s.fallbackWarn) || we(s.fallbackWarn) ? s.fallbackWarn : !0, C = r ? n.fallbackRoot : U(s.fallbackRoot) ? s.fallbackRoot : !0, y = !!s.fallbackFormat, P = B(s.missing) ? s.missing : null, k = B(s.postTranslation) ? s.postTranslation : null, R = r ? n.warnHtmlMessage : U(s.warnHtmlMessage) ? s.warnHtmlMessage : !0, _ = !!s.escapeParameter, h = r ? n.modifiers : F(s.modifiers) ? s.modifiers : {}, L = s.pluralRules || r && n.pluralRules;
  function E() {
    return [
      o.value,
      c.value,
      f.value,
      p.value,
      v.value
    ];
  }
  const O = be({
    get: () => l.value ? l.value.locale.value : o.value,
    set: (b) => {
      l.value && (l.value.locale.value = b), o.value = b;
    }
  }), A = be({
    get: () => l.value ? l.value.fallbackLocale.value : c.value,
    set: (b) => {
      l.value && (l.value.fallbackLocale.value = b), c.value = b;
    }
  }), T = be(() => l.value ? l.value.messages.value : f.value), K = be(() => p.value), de = be(() => v.value);
  function w() {
    return l.value ? l.value.getPostTranslationHandler() : k;
  }
  function ae(b) {
    l.value && l.value.setPostTranslationHandler(b);
  }
  function st() {
    return l.value ? l.value.getMissingHandler() : P;
  }
  function rt(b) {
    l.value && l.value.setMissingHandler(b);
  }
  function Oe(b) {
    return E(), b();
  }
  function at(...b) {
    return l.value ? Oe(() => Reflect.apply(l.value.t, null, [...b])) : Oe(() => "");
  }
  function ot(...b) {
    return l.value ? Reflect.apply(l.value.rt, null, [...b]) : "";
  }
  function it(...b) {
    return l.value ? Oe(() => Reflect.apply(l.value.d, null, [...b])) : Oe(() => "");
  }
  function ct(...b) {
    return l.value ? Oe(() => Reflect.apply(l.value.n, null, [...b])) : Oe(() => "");
  }
  function ut(b) {
    return l.value ? l.value.tm(b) : {};
  }
  function pe(b, G) {
    return l.value ? l.value.te(b, G) : !1;
  }
  function Ke(b) {
    return l.value ? l.value.getLocaleMessage(b) : {};
  }
  function Xe(b, G) {
    l.value && (l.value.setLocaleMessage(b, G), f.value[b] = G);
  }
  function ft(b, G) {
    l.value && l.value.mergeLocaleMessage(b, G);
  }
  function _t(b) {
    return l.value ? l.value.getDateTimeFormat(b) : {};
  }
  function dt(b, G) {
    l.value && (l.value.setDateTimeFormat(b, G), p.value[b] = G);
  }
  function At(b, G) {
    l.value && l.value.mergeDateTimeFormat(b, G);
  }
  function mt(b) {
    return l.value ? l.value.getNumberFormat(b) : {};
  }
  function Je(b, G) {
    l.value && (l.value.setNumberFormat(b, G), v.value[b] = G);
  }
  function pt(b, G) {
    l.value && l.value.mergeNumberFormat(b, G);
  }
  const ht = {
    get id() {
      return l.value ? l.value.id : -1;
    },
    locale: O,
    fallbackLocale: A,
    messages: T,
    datetimeFormats: K,
    numberFormats: de,
    get inheritLocale() {
      return l.value ? l.value.inheritLocale : a;
    },
    set inheritLocale(b) {
      l.value && (l.value.inheritLocale = b);
    },
    get availableLocales() {
      return l.value ? l.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return l.value ? l.value.modifiers : h;
    },
    get pluralRules() {
      return l.value ? l.value.pluralRules : L;
    },
    get isGlobal() {
      return l.value ? l.value.isGlobal : !1;
    },
    get missingWarn() {
      return l.value ? l.value.missingWarn : d;
    },
    set missingWarn(b) {
      l.value && (l.value.missingWarn = b);
    },
    get fallbackWarn() {
      return l.value ? l.value.fallbackWarn : S;
    },
    set fallbackWarn(b) {
      l.value && (l.value.missingWarn = b);
    },
    get fallbackRoot() {
      return l.value ? l.value.fallbackRoot : C;
    },
    set fallbackRoot(b) {
      l.value && (l.value.fallbackRoot = b);
    },
    get fallbackFormat() {
      return l.value ? l.value.fallbackFormat : y;
    },
    set fallbackFormat(b) {
      l.value && (l.value.fallbackFormat = b);
    },
    get warnHtmlMessage() {
      return l.value ? l.value.warnHtmlMessage : R;
    },
    set warnHtmlMessage(b) {
      l.value && (l.value.warnHtmlMessage = b);
    },
    get escapeParameter() {
      return l.value ? l.value.escapeParameter : _;
    },
    set escapeParameter(b) {
      l.value && (l.value.escapeParameter = b);
    },
    t: at,
    getPostTranslationHandler: w,
    setPostTranslationHandler: ae,
    getMissingHandler: st,
    setMissingHandler: rt,
    rt: ot,
    d: it,
    n: ct,
    tm: ut,
    te: pe,
    getLocaleMessage: Ke,
    setLocaleMessage: Xe,
    mergeLocaleMessage: ft,
    getDateTimeFormat: _t,
    setDateTimeFormat: dt,
    mergeDateTimeFormat: At,
    getNumberFormat: mt,
    setNumberFormat: Je,
    mergeNumberFormat: pt
  };
  function Et(b) {
    b.locale.value = o.value, b.fallbackLocale.value = c.value, Object.keys(f.value).forEach((G) => {
      b.mergeLocaleMessage(G, f.value[G]);
    }), Object.keys(p.value).forEach((G) => {
      b.mergeDateTimeFormat(G, p.value[G]);
    }), Object.keys(v.value).forEach((G) => {
      b.mergeNumberFormat(G, v.value[G]);
    }), b.escapeParameter = _, b.fallbackFormat = y, b.fallbackRoot = C, b.fallbackWarn = S, b.missingWarn = d, b.warnHtmlMessage = R;
  }
  return hs(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw te($.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const b = l.value = e.proxy.$i18n.__composer;
    t === "global" ? (o.value = b.locale.value, c.value = b.fallbackLocale.value, f.value = b.messages.value, p.value = b.datetimeFormats.value, v.value = b.numberFormats.value) : r && Et(b);
  }), ht;
}
const nc = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], rl = ["t", "rt", "d", "n", "tm", "te"];
function lc(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return nc.forEach((r) => {
    const l = Object.getOwnPropertyDescriptor(t, r);
    if (!l)
      throw te($.UNEXPECTED_ERROR);
    const a = ms(l.value) ? {
      get() {
        return l.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        l.value.value = o;
      }
    } : {
      get() {
        return l.get && l.get();
      }
    };
    Object.defineProperty(n, r, a);
  }), e.config.globalProperties.$i18n = n, rl.forEach((r) => {
    const l = Object.getOwnPropertyDescriptor(t, r);
    if (!l || !l.value)
      throw te($.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${r}`, l);
  }), () => {
    delete e.config.globalProperties.$i18n, rl.forEach((r) => {
      delete e.config.globalProperties[`$${r}`];
    });
  };
}
gi();
__INTLIFY_JIT_COMPILATION__ ? wn(li) : wn(ni);
Ko(Ao);
Xo(Ml);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = De();
  e.__INTLIFY__ = !0, Uo(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function sc() {
  const e = /* @__PURE__ */ Object.assign({
    "./locales/cz_CZ.json": Ar,
    "./locales/en_US.json": Mr,
    "./locales/es_ES.json": Gr,
    "./locales/fr_FR.json": Xr,
    "./locales/pl_PL.json": ta,
    "./locales/pt_BR.json": ia,
    "./locales/sk_SK.json": pa,
    "./locales/tr_TR.json": Oa
  }), t = {};
  for (const n in e) {
    const s = n.match(/([A-Za-z0-9-_]+)(?=\.)/i)[0];
    if (s && s.length > 1) {
      const r = s;
      t[r] = e[n];
    }
  }
  return t;
}
const rc = Ki({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: sc()
}), ac = (e, t) => {
  e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(rc), e.component("vueSelectSides", hl);
};
hl.install = ac;
export {
  hl as default
};
