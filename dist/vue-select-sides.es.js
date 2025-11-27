import { createElementBlock as ne, openBlock as W, toDisplayString as Ue, withDirectives as Te, vModelText as mr, createElementVNode as Q, resolveComponent as fe, Fragment as Dt, renderList as Nn, normalizeClass as Ln, createCommentVNode as re, createTextVNode as pr, vShow as Re, createVNode as Ae, createBlock as ue, resolveDynamicComponent as hr, effectScope as Er, ref as Ze, shallowRef as ol, computed as be, watch as Xt, isRef as gr, defineComponent as on, getCurrentInstance as Lt, h as il, inject as vr, onBeforeMount as Nr, onMounted as Lr, onUnmounted as Or, Text as Tr } from "vue";
var br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cl = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = n();
  })(br, function() {
    var t = Object.prototype.toString, n = Object.prototype.hasOwnProperty;
    function r(d) {
      if (!d || c(d) && d.length === 0)
        return !0;
      for (var p in d)
        if (n.call(d, p))
          return !1;
      return !0;
    }
    function s(d) {
      return t.call(d);
    }
    function l(d) {
      return typeof d == "number" || s(d) === "[object Number]";
    }
    function a(d) {
      return typeof d == "string" || s(d) === "[object String]";
    }
    function o(d) {
      return typeof d == "object" && s(d) === "[object Object]";
    }
    function c(d) {
      return typeof d == "object" && typeof d.length == "number" && s(d) === "[object Array]";
    }
    function f(d) {
      return typeof d == "boolean" || s(d) === "[object Boolean]";
    }
    function E(d) {
      var p = parseInt(d);
      return p.toString() === d ? p : d;
    }
    function v(d, p, O, C) {
      if (l(p) && (p = [p]), r(p))
        return d;
      if (a(p))
        return v(d, p.split("."), O, C);
      var D = E(p[0]);
      if (p.length === 1) {
        var _ = d[D];
        return (_ === void 0 || !C) && (d[D] = O), _;
      }
      return d[D] === void 0 && (l(D) ? d[D] = [] : d[D] = {}), v(d[D], p.slice(1), O, C);
    }
    function m(d, p) {
      if (l(p) && (p = [p]), !r(d)) {
        if (r(p))
          return d;
        if (a(p))
          return m(d, p.split("."));
        var O = E(p[0]), C = d[O];
        if (p.length === 1)
          C !== void 0 && (c(d) ? d.splice(O, 1) : delete d[O]);
        else if (d[O] !== void 0)
          return m(d[O], p.slice(1));
        return d;
      }
    }
    var T = {};
    return T.ensureExists = function(d, p, O) {
      return v(d, p, O, !0);
    }, T.set = function(d, p, O, C) {
      return v(d, p, O, C);
    }, T.insert = function(d, p, O, C) {
      var D = T.get(d, p);
      C = ~~C, c(D) || (D = [], T.set(d, p, D)), D.splice(C, 0, O);
    }, T.empty = function(d, p) {
      if (r(p))
        return d;
      if (!r(d)) {
        var O, C;
        if (!(O = T.get(d, p)))
          return d;
        if (a(O))
          return T.set(d, p, "");
        if (f(O))
          return T.set(d, p, !1);
        if (l(O))
          return T.set(d, p, 0);
        if (c(O))
          O.length = 0;
        else if (o(O))
          for (C in O)
            n.call(O, C) && delete O[C];
        else
          return T.set(d, p, null);
      }
    }, T.push = function(d, p) {
      var O = T.get(d, p);
      c(O) || (O = [], T.set(d, p, O)), O.push.apply(O, Array.prototype.slice.call(arguments, 2));
    }, T.coalesce = function(d, p, O) {
      for (var C, D = 0, _ = p.length; D < _; D++)
        if ((C = T.get(d, p[D])) !== void 0)
          return C;
      return O;
    }, T.get = function(d, p, O) {
      if (l(p) && (p = [p]), r(p))
        return d;
      if (r(d))
        return O;
      if (a(p))
        return T.get(d, p.split("."), O);
      var C = E(p[0]);
      return p.length === 1 ? d[C] === void 0 ? O : d[C] : T.get(d[C], p.slice(1), O);
    }, T.del = function(d, p) {
      return m(d, p);
    }, T;
  });
})(cl);
var Sr = cl.exports, On = Sr, ul, fl, Jt;
Jt = function(e) {
  return function(t) {
    return typeof t === e;
  };
};
fl = function(t, n) {
  var r = 1, s = n || function(l, a) {
    return a;
  };
  return t[0] === "-" && (r = -1, t = t.substr(1)), function(a, o) {
    var c, f = s(t, On.get(a, t)), E = s(t, On.get(o, t));
    return f < E && (c = -1), f > E && (c = 1), f === E && (c = 0), c * r;
  };
};
ul = function() {
  var t = Array.prototype.slice.call(arguments), n = t.filter(Jt("string")), r = t.filter(Jt("function"))[0];
  return function(l, a) {
    for (var o = n.length, c = 0, f = 0; c === 0 && f < o; )
      c = fl(n[f], r)(l, a), f++;
    return c;
  };
};
var Ar = ul;
const Tn = /* @__PURE__ */ Ir(Ar), Ie = (e) => JSON.parse(JSON.stringify(e)), Fe = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), kt = (e, t) => {
  let n = [];
  return e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label")), t.sort(Tn(...n)).map((r) => (r.children && r.children.sort(Tn(...n)), r)), t;
}, _l = (e, t) => e.filter((n) => String(n) !== String(t)), Le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, yr = {
  name: "v-select-all",
  display: "Select all",
  emits: ["update-select-all"],
  props: {
    items: Array
  }
};
function Pr(e, t, n, r, s, l) {
  return W(), ne("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-select-all"))
  }, Ue(e.$t("selectAll")), 1);
}
const dl = /* @__PURE__ */ Le(yr, [["render", Pr]]), Cr = {
  name: "v-deselect-all",
  display: "Deselect all",
  emits: ["update-deselect-all"],
  props: {
    click: Function,
    items: Array
  }
};
function Rr(e, t, n, r, s, l) {
  return W(), ne("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-deselect-all"))
  }, Ue(e.$t("deselectAll")), 1);
}
const ml = /* @__PURE__ */ Le(Cr, [["render", Rr]]), Dr = {
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
}, kr = ["placeholder"];
function Mr(e, t, n, r, s, l) {
  return Te((W(), ne("input", {
    type: "text",
    "onUpdate:modelValue": t[0] || (t[0] = (a) => s.inputVal = a),
    placeholder: s.thePlaceholder
  }, null, 8, kr)), [
    [mr, s.inputVal]
  ]);
}
const pl = /* @__PURE__ */ Le(Dr, [["render", Mr]]), Fr = {
  name: "v-no-results",
  display: "No results",
  methods: {}
}, Ur = { class: "no-results" };
function wr(e, t, n, r, s, l) {
  return W(), ne("li", Ur, [
    Q("span", null, Ue(e.$t("searchNoResult")), 1)
  ]);
}
const Vr = /* @__PURE__ */ Le(Fr, [["render", wr]]), $r = {
  name: "v-no-selection",
  display: "No selection",
  methods: {}
}, Wr = { class: "no-selection" };
function Gr(e, t, n, r, s, l) {
  return W(), ne("li", Wr, [
    Q("span", null, Ue(e.$t("searchParentSelected")), 1)
  ]);
}
const Hr = /* @__PURE__ */ Le($r, [["render", Gr]]), Br = {
  name: "v-list",
  display: "List",
  mounted() {
  },
  components: {
    "v-no-results": Vr,
    "v-no-selection": Hr
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
}, Yr = { class: "vss-list-ul" }, xr = ["onClick"], jr = { style: {} }, Kr = {
  key: 0,
  class: "vss-list-badge"
}, Xr = { key: 0 }, Jr = ["onClick"];
function Qr(e, t, n, r, s, l) {
  const a = fe("v-no-results"), o = fe("v-no-selection");
  return W(), ne("ul", Yr, [
    (W(!0), ne(Dt, null, Nn(n.items, (c, f) => Te((W(), ne("li", {
      key: f,
      onClick: (E) => n.hasChildren ? !1 : l.toggleItem(c, {}, c.selected),
      class: Ln(l.liClass(c, n.hasChildren))
    }, [
      Q("span", jr, [
        pr(Ue(c.label) + " ", 1),
        l.showCounter(c) ? (W(), ne("small", Kr, Ue(c.totalChildrenSelected), 1)) : re("", !0)
      ]),
      n.hasChildren ? (W(), ne("ul", Xr, [
        (W(!0), ne(Dt, null, Nn(c.children, (E, v) => Te((W(), ne("li", {
          key: `${f}-${v}`,
          onClick: (m) => l.toggleItem(E, c, E.selected),
          class: Ln(l.liClass(E, !1))
        }, [
          Q("span", null, Ue(E.label), 1)
        ], 10, Jr)), [
          [Re, E.visible]
        ])), 128)),
        Te(Ae(a, null, null, 512), [
          [Re, l.totalItems(c.children) === 0]
        ])
      ])) : re("", !0)
    ], 10, xr)), [
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
const hl = /* @__PURE__ */ Le(Br, [["render", Qr]]), qr = {
  name: "v-separator",
  display: "Separator"
}, Zr = { class: "vss-span" };
function zr(e, t, n, r, s, l) {
  return W(), ne("div", Zr, " ‹ › ");
}
const El = /* @__PURE__ */ Le(qr, [["render", zr]]), es = {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
}, ts = ["title"];
function ns(e, t, n, r, s, l) {
  return W(), ne("span", {
    title: e.$t("totalSelected")
  }, Ue(n.value), 9, ts);
}
const gl = /* @__PURE__ */ Le(es, [["render", ns]]), vl = {
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
}, ls = {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [vl],
  components: {
    "v-select-all": dl,
    "v-deselect-all": ml,
    "v-search": pl,
    "v-separator": El,
    "v-list": hl,
    "v-total": gl
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
      let r = Ie(this.dataSelected);
      Object.keys(t).length > 0 ? (r[t.value] === void 0 && t.visible && (r[t.value] = []), n ? e.visible && r[t.value].indexOf(e.value) === -1 && r[t.value].push(e.value) : e.visible && (r[t.value] = _l(
        r[t.value],
        e.value
      ))) : n ? r[e.value] === void 0 && (r[e.value] = []) : delete r[e.value], this.dataSelected = r;
    },
    prepareList() {
      let e = this, t = {};
      e.dataListOriginal = Ie(e.list);
      let n = Object.keys(e.modelValue), r = e.list.filter((s) => {
        let l = s.value, a = n.indexOf(l) >= 0;
        return a ? (s.selectedDefault = !0, t[l] = []) : s.selectedDefault = !1, s.children && s.children.filter((o) => {
          let c = o.value;
          a && (e.modelValue[l].indexOf(c) >= 0 ? (o.selectedDefault = !0, t[l].push(c)) : o.selectedDefault = !1);
        }), s;
      });
      e.dataSelected = t, e.dataList = kt(e, r);
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
      let e = this, t = Fe(this.searchL), n = Object.keys(this.dataSelected), r = Ie(this.listLeft);
      return r = r.filter((s) => {
        let l = Fe(s.label);
        return n.indexOf(s.value) >= 0 ? s.selected = !0 : s.selected = !1, l.includes(t) ? s.visible = !0 : s.visible = !1, s.children ? (s.children = s.children.map((a) => (a.selected = !1, e.dataSelected[s.value] !== void 0 && (e.dataSelected[s.value].indexOf(a.value) >= 0 ? a.selected = !0 : a.selected = !1), a)), s.totalChildrenSelected = s.children.filter(function(a) {
          return a.selected === !0;
        }).length, s.children) : s;
      }), r;
    },
    filteredListR() {
      let e = this, t = Fe(e.searchR), n = Ie(this.listLeft);
      return n = e.listRight.filter(function(s) {
        return s.children ? (s.children = s.children.map((l) => (Fe(l.label).includes(t) ? l.visible = !0 : l.visible = !1, e.dataSelected[s.value] !== void 0 && (e.dataSelected[s.value].indexOf(l.value) >= 0 ? l.selected = !0 : l.selected = !1), l)), s.children) : s;
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
}, rs = { class: "vss-list" }, ss = { class: "vss-inner-list" }, as = { class: "vss-footer" }, os = { class: "vss-footer-bg" }, is = {
  key: 1,
  class: "vss-footer-separator"
}, cs = { class: "vss-list" }, us = { class: "vss-inner-list" }, fs = { class: "vss-footer" }, _s = { class: "vss-footer-bg" }, ds = {
  key: 1,
  class: "vss-footer-separator"
};
function ms(e, t, n, r, s, l) {
  const a = fe("v-search"), o = fe("v-list"), c = fe("v-select-all"), f = fe("v-deselect-all"), E = fe("v-total"), v = fe("v-separator");
  return W(), ne("div", null, [
    Q("div", rs, [
      Q("div", ss, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: s.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchL = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Ae(o, {
          "has-children": !1,
          type: e.type,
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", as, [
          Q("div", os, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(c, {
                key: 0,
                items: s.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : re("", !0),
              e.toggleAll ? (W(), ne("div", is, "/")) : re("", !0),
              e.toggleAll ? (W(), ue(f, {
                key: 2,
                items: s.listLeft,
                onUpdateDeselectAll: l.updateLeftDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : re("", !0)
            ]),
            e.total ? (W(), ue(E, {
              key: 0,
              value: Object.keys(s.dataSelected).length
            }, null, 8, ["value"])) : re("", !0)
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ]),
    Ae(v),
    Q("div", cs, [
      Q("div", us, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: s.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (m) => s.searchR = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Ae(o, {
          "has-children": !0,
          type: e.type,
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", fs, [
          Q("div", _s, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(c, {
                key: 0,
                items: s.listRight,
                onUpdateSelectAll: l.updateRightSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : re("", !0),
              e.toggleAll ? (W(), ne("div", ds, "/")) : re("", !0),
              e.toggleAll ? (W(), ue(f, {
                key: 2,
                items: s.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : re("", !0)
            ]),
            e.total ? (W(), ue(E, {
              key: 0,
              value: l.totalChildrenSelected
            }, null, 8, ["value"])) : re("", !0)
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const ps = /* @__PURE__ */ Le(ls, [["render", ms]]), hs = {
  name: "mirror-select-sides",
  display: "Mirror select sides",
  mixins: [vl],
  components: {
    "v-select-all": dl,
    "v-deselect-all": ml,
    "v-search": pl,
    "v-separator": El,
    "v-list": hl,
    "v-total": gl
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
      let r = Ie(this.dataSelected);
      n ? r.push(e.value) : r = _l(r, e.value), this.dataSelected = r;
    },
    prepareList() {
      this.dataListOriginal = Ie(this.list);
      let e = this, t = [], n = e.list.filter((r) => {
        let s = r.value;
        return e.modelValue.indexOf(s) >= 0 ? (r.selectedDefault = !0, t.push(s)) : r.selectedDefault = !1, r;
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
      return n = n.filter((r) => {
        let s = Fe(r.label);
        return t.indexOf(r.value) >= 0 ? (r.selected = !0, r.visible = !1) : (r.selected = !1, r.visible = !0), s.includes(e) && r.visible === !0 ? r.visible = !0 : r.visible = !1, r;
      }), n;
    },
    filteredListR() {
      let e = this, t = Fe(e.searchR), n = this.dataSelected, r = Ie(e.listLeft);
      return r = r.filter((s) => {
        let l = Fe(s.label);
        return n.indexOf(s.value) >= 0 ? (s.selected = !0, s.visible = !0) : (s.selected = !1, s.visible = !1), l.includes(t) && s.visible === !0 ? s.visible = !0 : s.visible = !1, s;
      }), r;
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
}, Es = { class: "vss-list" }, gs = { class: "vss-inner-list" }, vs = { class: "vss-footer" }, Ns = { class: "vss-footer-bg" }, Ls = { class: "vss-list" }, Os = { class: "vss-inner-list" }, Ts = { class: "vss-footer" }, bs = { class: "vss-footer-bg" };
function Is(e, t, n, r, s, l) {
  const a = fe("v-search"), o = fe("v-list"), c = fe("v-select-all"), f = fe("v-total"), E = fe("v-separator"), v = fe("v-deselect-all");
  return W(), ne("div", null, [
    Q("div", Es, [
      Q("div", gs, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: s.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchL = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Ae(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "left",
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", vs, [
          Q("div", Ns, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(c, {
                key: 0,
                items: s.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : re("", !0)
            ]),
            e.total ? (W(), ue(f, {
              key: 0,
              value: s.dataSelected.length
            }, null, 8, ["value"])) : re("", !0)
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ]),
    Ae(E),
    Q("div", Ls, [
      Q("div", Os, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: s.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (m) => s.searchR = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Ae(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "right",
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Te(Q("div", Ts, [
          Q("div", bs, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(v, {
                key: 0,
                items: s.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : re("", !0)
            ])
          ])
        ], 512), [
          [Re, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const Ss = /* @__PURE__ */ Le(hs, [["render", Is]]), As = {
  // i18n,
  name: "vue-select-sides",
  display: "Core select sides",
  components: {
    "mirror-select-sides": Ss,
    "grouped-select-sides": ps
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
        let r = t[n];
        r === void 0 ? e.defaultOptions[n] !== void 0 && (e.params[n] = e.defaultOptions[n]) : e.params[n] = r;
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
function ys(e, t, n, r, s, l) {
  return W(), ue(hr(l.getComponent()), {
    class: "vss",
    type: s.params.type,
    list: s.listClone,
    search: s.params.search,
    total: s.params.total,
    "toggle-all": s.params.toggleAll,
    "order-by": s.params.orderBy,
    "placeholder-search-left": s.params.placeholderSearchLeft,
    "placeholder-search-right": s.params.placeholderSearchRight,
    "sort-selected-up": s.params.sortSelectedUp,
    modelValue: l.modelProp,
    "onUpdate:modelValue": t[0] || (t[0] = (a) => l.modelProp = a),
    onUpdateSelected: l.updateSelected
  }, null, 40, ["type", "list", "search", "total", "toggle-all", "order-by", "placeholder-search-left", "placeholder-search-right", "sort-selected-up", "modelValue", "onUpdateSelected"]);
}
const Nl = /* @__PURE__ */ Le(As, [["render", ys]]), Ps = "Vybrat vše ", Cs = "Odebrat vše ", Rs = "Hledej...", Ds = "Žádný výsledek...", ks = "Nic není vybráno...", Ms = "Spolu vybrané", Fs = {
  selectAll: Ps,
  deselectAll: Cs,
  searchPlaceholder: Rs,
  searchNoResult: Ds,
  searchParentSelected: ks,
  totalSelected: Ms
}, Us = "Select all", ws = "Deselect all", Vs = "Search...", $s = "No result...", Ws = "No items selected...", Gs = "Total items selected", Hs = {
  selectAll: Us,
  deselectAll: ws,
  searchPlaceholder: Vs,
  searchNoResult: $s,
  searchParentSelected: Ws,
  totalSelected: Gs
}, Bs = "Seleccionar todos", Ys = "Deseleccionar todos", xs = "Buscar...", js = "Sin resultados...", Ks = "Ningún elemento seleccionado...", Xs = "Elementos seleccionados", Js = {
  selectAll: Bs,
  deselectAll: Ys,
  searchPlaceholder: xs,
  searchNoResult: js,
  searchParentSelected: Ks,
  totalSelected: Xs
}, Qs = "Ajouter tout", qs = "Supprimer tout", Zs = "Recherche...", zs = "Pas de résultat...", ea = "Sélection vide...", ta = "Éléments sélectionnés", na = {
  selectAll: Qs,
  deselectAll: qs,
  searchPlaceholder: Zs,
  searchNoResult: zs,
  searchParentSelected: ea,
  totalSelected: ta
}, la = "Wybierz wszystko", ra = "Wyczyść zaznaczenie", sa = "Szukaj...", aa = "Brak wyników...", oa = "Nie wybrano żadnych elementów...", ia = "Liczba wybranych elementów", ca = {
  selectAll: la,
  deselectAll: ra,
  searchPlaceholder: sa,
  searchNoResult: aa,
  searchParentSelected: oa,
  totalSelected: ia
}, ua = "Selecionar todos", fa = "Remover todos", _a = "Pesquisar...", da = "Sem nenhum resultado...", ma = "Nenhum item selecionado...", pa = "Total de itens selecionados", ha = {
  selectAll: ua,
  deselectAll: fa,
  searchPlaceholder: _a,
  searchNoResult: da,
  searchParentSelected: ma,
  totalSelected: pa
}, Ea = "Vybrať všetko", ga = "Odobrať všetko", va = "Hľadaj...", Na = "Žiadny výsledok...", La = "Nič nie je vybrané...", Oa = "Spolu vybrané", Ta = {
  selectAll: Ea,
  deselectAll: ga,
  searchPlaceholder: va,
  searchNoResult: Na,
  searchParentSelected: La,
  totalSelected: Oa
}, ba = "Hepsini Seç", Ia = "Hepsini Çıkar", Sa = "Ara...", Aa = "Sonuç Bulunamadı...", ya = "Hiçbiri Seçilmedi...", Pa = "Hepsi Seçildi", Ca = {
  selectAll: ba,
  deselectAll: Ia,
  searchPlaceholder: Sa,
  searchNoResult: Aa,
  searchParentSelected: ya,
  totalSelected: Pa
};
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ee(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const bn = {};
function Ll(e) {
  bn[e] || (bn[e] = !0, ee(e));
}
const Ne = typeof window < "u";
let me, Ye;
if (process.env.NODE_ENV !== "production") {
  const e = Ne && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (me = (t) => {
    e.mark(t);
  }, Ye = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Ra = /\{([0-9a-zA-Z]+)\}/g;
function cn(e, ...t) {
  return t.length === 1 && V(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ra, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const ye = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Da = (e, t, n) => ka({ l: e, k: t, s: n }), ka = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), z = (e) => typeof e == "number" && isFinite(e), Ma = (e) => Tl(e) === "[object Date]", we = (e) => Tl(e) === "[object RegExp]", Ut = (e) => F(e) && Object.keys(e).length === 0, se = Object.assign, Fa = Object.create, x = (e = null) => Fa(e);
let In;
const De = () => In || (In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : x());
function Sn(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function An(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ua(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, s, l) => `${s}="${An(l)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, s, l) => `${s}='${An(l)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && ee("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const wa = Object.prototype.hasOwnProperty;
function ve(e, t) {
  return wa.call(e, t);
}
const X = Array.isArray, Y = (e) => typeof e == "function", P = (e) => typeof e == "string", U = (e) => typeof e == "boolean", V = (e) => e !== null && typeof e == "object", Va = (e) => V(e) && Y(e.then) && Y(e.catch), Ol = Object.prototype.toString, Tl = (e) => Ol.call(e), F = (e) => {
  if (!V(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, $a = (e) => e == null ? "" : X(e) || F(e) && e.toString === Ol ? JSON.stringify(e, null, 2) : String(e);
function Wa(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const yn = 2;
function Ga(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const l = [];
  for (let a = 0; a < r.length; a++)
    if (s += r[a].length + 1, s >= t) {
      for (let o = a - yn; o <= a + yn || n > s; o++) {
        if (o < 0 || o >= r.length)
          continue;
        const c = o + 1;
        l.push(`${c}${" ".repeat(3 - String(c).length)}|  ${r[o]}`);
        const f = r[o].length;
        if (o === a) {
          const E = t - (s - f) + 1, v = Math.max(1, n > s ? f - E : n - t);
          l.push("   |  " + " ".repeat(E) + "^".repeat(v));
        } else if (o > a) {
          if (n > s) {
            const E = Math.max(Math.min(n - s, f), 1);
            l.push("   |  " + "^".repeat(E));
          }
          s += f + 1;
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
function un() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const s = e.get(n);
      s && s.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const s = e.get(n);
      s && s.splice(s.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((s) => s(r)), (e.get("*") || []).slice().map((s) => s(n, r));
    }
  };
}
const Pt = (e) => !V(e) || X(e);
function Rt(e, t) {
  if (Pt(e) || Pt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((l) => {
      l !== "__proto__" && (V(r[l]) && !V(s[l]) && (s[l] = Array.isArray(r[l]) ? [] : x()), Pt(s[l]) || Pt(r[l]) ? s[l] = r[l] : n.push({ src: r[l], des: s[l] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ha(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Mt(e, t, n) {
  return { start: e, end: t };
}
const Ba = /\{([0-9a-zA-Z]+)\}/g;
function bl(e, ...t) {
  return t.length === 1 && Ya(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ba, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Il = Object.assign, Pn = (e) => typeof e == "string", Ya = (e) => e !== null && typeof e == "object";
function Sl(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Vt = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, xa = {
  [Vt.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function ja(e, t, ...n) {
  const r = bl(xa[e], ...n || []), s = { message: String(r), code: e };
  return t && (s.location = t), s;
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
}, Ka = {
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
  const { domain: r, messages: s, args: l } = n, a = bl((s || Ka)[e] || "", ...l || []), o = new SyntaxError(String(a));
  return o.code = e, t && (o.location = t), o.domain = r, o;
}
function Xa(e) {
  throw e;
}
const Ja = /<\/?[\w\s="/.':;#-\/]+>/, Qa = (e) => Ja.test(e), Pe = " ", qa = "\r", oe = `
`, Za = "\u2028", za = "\u2029";
function eo(e) {
  const t = e;
  let n = 0, r = 1, s = 1, l = 0;
  const a = (S) => t[S] === qa && t[S + 1] === oe, o = (S) => t[S] === oe, c = (S) => t[S] === za, f = (S) => t[S] === Za, E = (S) => a(S) || o(S) || c(S) || f(S), v = () => n, m = () => r, T = () => s, d = () => l, p = (S) => a(S) || c(S) || f(S) ? oe : t[S], O = () => p(n), C = () => p(n + l);
  function D() {
    return l = 0, E(n) && (r++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function _() {
    return a(n + l) && l++, l++, t[n + l];
  }
  function g() {
    n = 0, r = 1, s = 1, l = 0;
  }
  function I(S = 0) {
    l = S;
  }
  function N() {
    const S = n + l;
    for (; S !== n; )
      D();
    l = 0;
  }
  return {
    index: v,
    line: m,
    column: T,
    peekOffset: d,
    charAt: p,
    currentChar: O,
    currentPeek: C,
    next: D,
    peek: _,
    reset: g,
    resetPeek: I,
    skipToPeek: N
  };
}
const Me = void 0, to = ".", Cn = "'", no = "tokenizer";
function lo(e, t = {}) {
  const n = t.location !== !1, r = eo(e), s = () => r.index(), l = () => Ha(r.line(), r.column(), r.index()), a = l(), o = s(), c = {
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
  }, f = () => c, { onError: E } = t;
  function v(i, u, L, ...k) {
    const J = f();
    if (u.column += L, u.offset += L, E) {
      const j = n ? Mt(J.startLoc, u) : null, B = lt(i, j, {
        domain: no,
        args: k
      });
      E(B);
    }
  }
  function m(i, u, L) {
    i.endLoc = l(), i.currentType = u;
    const k = { type: u };
    return n && (k.loc = Mt(i.startLoc, i.endLoc)), L != null && (k.value = L), k;
  }
  const T = (i) => m(
    i,
    14
    /* TokenTypes.EOF */
  );
  function d(i, u) {
    return i.currentChar() === u ? (i.next(), u) : (v(M.EXPECTED_TOKEN, l(), 0, u), "");
  }
  function p(i) {
    let u = "";
    for (; i.currentPeek() === Pe || i.currentPeek() === oe; )
      u += i.currentPeek(), i.peek();
    return u;
  }
  function O(i) {
    const u = p(i);
    return i.skipToPeek(), u;
  }
  function C(i) {
    if (i === Me)
      return !1;
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function D(i) {
    if (i === Me)
      return !1;
    const u = i.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function _(i, u) {
    const { currentType: L } = u;
    if (L !== 2)
      return !1;
    p(i);
    const k = C(i.currentPeek());
    return i.resetPeek(), k;
  }
  function g(i, u) {
    const { currentType: L } = u;
    if (L !== 2)
      return !1;
    p(i);
    const k = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), J = D(k);
    return i.resetPeek(), J;
  }
  function I(i, u) {
    const { currentType: L } = u;
    if (L !== 2)
      return !1;
    p(i);
    const k = i.currentPeek() === Cn;
    return i.resetPeek(), k;
  }
  function N(i, u) {
    const { currentType: L } = u;
    if (L !== 8)
      return !1;
    p(i);
    const k = i.currentPeek() === ".";
    return i.resetPeek(), k;
  }
  function S(i, u) {
    const { currentType: L } = u;
    if (L !== 9)
      return !1;
    p(i);
    const k = C(i.currentPeek());
    return i.resetPeek(), k;
  }
  function R(i, u) {
    const { currentType: L } = u;
    if (!(L === 8 || L === 12))
      return !1;
    p(i);
    const k = i.currentPeek() === ":";
    return i.resetPeek(), k;
  }
  function A(i, u) {
    const { currentType: L } = u;
    if (L !== 10)
      return !1;
    const k = () => {
      const j = i.currentPeek();
      return j === "{" ? C(i.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === Pe || !j ? !1 : j === oe ? (i.peek(), k()) : w(i, !1);
    }, J = k();
    return i.resetPeek(), J;
  }
  function K(i) {
    p(i);
    const u = i.currentPeek() === "|";
    return i.resetPeek(), u;
  }
  function de(i) {
    const u = p(i), L = i.currentPeek() === "%" && i.peek() === "{";
    return i.resetPeek(), {
      isModulo: L,
      hasSpace: u.length > 0
    };
  }
  function w(i, u = !0) {
    const L = (J = !1, j = "", B = !1) => {
      const h = i.currentPeek();
      return h === "{" ? j === "%" ? !1 : J : h === "@" || !h ? j === "%" ? !0 : J : h === "%" ? (i.peek(), L(J, "%", !0)) : h === "|" ? j === "%" || B ? !0 : !(j === Pe || j === oe) : h === Pe ? (i.peek(), L(!0, Pe, B)) : h === oe ? (i.peek(), L(!0, oe, B)) : !0;
    }, k = L();
    return u && i.resetPeek(), k;
  }
  function ae(i, u) {
    const L = i.currentChar();
    return L === Me ? Me : u(L) ? (i.next(), L) : null;
  }
  function rt(i) {
    const u = i.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function st(i) {
    return ae(i, rt);
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
    let u = "", L = "";
    for (; u = it(i); )
      L += u;
    return L;
  }
  function Ke(i) {
    O(i);
    const u = i.currentChar();
    return u !== "%" && v(M.EXPECTED_TOKEN, l(), 0, u), i.next(), "%";
  }
  function Xe(i) {
    let u = "";
    for (; ; ) {
      const L = i.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (w(i))
          u += L, i.next();
        else
          break;
      else if (L === Pe || L === oe)
        if (w(i))
          u += L, i.next();
        else {
          if (K(i))
            break;
          u += L, i.next();
        }
      else
        u += L, i.next();
    }
    return u;
  }
  function ft(i) {
    O(i);
    let u = "", L = "";
    for (; u = at(i); )
      L += u;
    return i.currentChar() === Me && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), L;
  }
  function _t(i) {
    O(i);
    let u = "";
    return i.currentChar() === "-" ? (i.next(), u += `-${pe(i)}`) : u += pe(i), i.currentChar() === Me && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u;
  }
  function dt(i) {
    return i !== Cn && i !== oe;
  }
  function At(i) {
    O(i), d(i, "'");
    let u = "", L = "";
    for (; u = ae(i, dt); )
      u === "\\" ? L += mt(i) : L += u;
    const k = i.currentChar();
    return k === oe || k === Me ? (v(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), k === oe && (i.next(), d(i, "'")), L) : (d(i, "'"), L);
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
  function Je(i, u, L) {
    d(i, u);
    let k = "";
    for (let J = 0; J < L; J++) {
      const j = ut(i);
      if (!j) {
        v(M.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${u}${k}${i.currentChar()}`);
        break;
      }
      k += j;
    }
    return `\\${u}${k}`;
  }
  function pt(i) {
    return i !== "{" && i !== "}" && i !== Pe && i !== oe;
  }
  function ht(i) {
    O(i);
    let u = "", L = "";
    for (; u = ae(i, pt); )
      L += u;
    return L;
  }
  function Et(i) {
    let u = "", L = "";
    for (; u = st(i); )
      L += u;
    return L;
  }
  function y(i) {
    const u = (L) => {
      const k = i.currentChar();
      return k === "{" || k === "%" || k === "@" || k === "|" || k === "(" || k === ")" || !k || k === Pe ? L : (L += k, i.next(), u(L));
    };
    return u("");
  }
  function G(i) {
    O(i);
    const u = d(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return O(i), u;
  }
  function gt(i, u) {
    let L = null;
    switch (i.currentChar()) {
      case "{":
        return u.braceNest >= 1 && v(M.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), i.next(), L = m(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), O(i), u.braceNest++, L;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && v(M.EMPTY_PLACEHOLDER, l(), 0), i.next(), L = m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && O(i), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), L;
      case "@":
        return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), L = We(i, u) || T(u), u.braceNest = 0, L;
      default: {
        let J = !0, j = !0, B = !0;
        if (K(i))
          return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), L = m(u, 1, G(i)), u.braceNest = 0, u.inLinked = !1, L;
        if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7))
          return v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u.braceNest = 0, vt(i, u);
        if (J = _(i, u))
          return L = m(u, 5, ft(i)), O(i), L;
        if (j = g(i, u))
          return L = m(u, 6, _t(i)), O(i), L;
        if (B = I(i, u))
          return L = m(u, 7, At(i)), O(i), L;
        if (!J && !j && !B)
          return L = m(u, 13, ht(i)), v(M.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, L.value), O(i), L;
        break;
      }
    }
    return L;
  }
  function We(i, u) {
    const { currentType: L } = u;
    let k = null;
    const J = i.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (J === oe || J === Pe) && v(M.INVALID_LINKED_FORMAT, l(), 0), J) {
      case "@":
        return i.next(), k = m(
          u,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, k;
      case ".":
        return O(i), i.next(), m(
          u,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return O(i), i.next(), m(
          u,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return K(i) ? (k = m(u, 1, G(i)), u.braceNest = 0, u.inLinked = !1, k) : N(i, u) || R(i, u) ? (O(i), We(i, u)) : S(i, u) ? (O(i), m(u, 12, Et(i))) : A(i, u) ? (O(i), J === "{" ? gt(i, u) || k : m(u, 11, y(i))) : (L === 8 && v(M.INVALID_LINKED_FORMAT, l(), 0), u.braceNest = 0, u.inLinked = !1, vt(i, u));
    }
  }
  function vt(i, u) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return gt(i, u) || T(u);
    if (u.inLinked)
      return We(i, u) || T(u);
    switch (i.currentChar()) {
      case "{":
        return gt(i, u) || T(u);
      case "}":
        return v(M.UNBALANCED_CLOSING_BRACE, l(), 0), i.next(), m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return We(i, u) || T(u);
      default: {
        if (K(i))
          return L = m(u, 1, G(i)), u.braceNest = 0, u.inLinked = !1, L;
        const { isModulo: J, hasSpace: j } = de(i);
        if (J)
          return j ? m(u, 0, Xe(i)) : m(u, 4, Ke(i));
        if (w(i))
          return m(u, 0, Xe(i));
        break;
      }
    }
    return L;
  }
  function Ht() {
    const { currentType: i, offset: u, startLoc: L, endLoc: k } = c;
    return c.lastType = i, c.lastOffset = u, c.lastStartLoc = L, c.lastEndLoc = k, c.offset = s(), c.startLoc = l(), r.currentChar() === Me ? m(
      c,
      14
      /* TokenTypes.EOF */
    ) : vt(r, c);
  }
  return {
    nextToken: Ht,
    currentOffset: s,
    currentPosition: l,
    context: f
  };
}
const ro = "parser", so = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ao(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function oo(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function s(_, g, I, N, ...S) {
    const R = _.currentPosition();
    if (R.offset += N, R.column += N, n) {
      const A = t ? Mt(I, R) : null, K = lt(g, A, {
        domain: ro,
        args: S
      });
      n(K);
    }
  }
  function l(_, g, I, N, ...S) {
    const R = _.currentPosition();
    if (R.offset += N, R.column += N, r) {
      const A = t ? Mt(I, R) : null;
      r(ja(g, A, S));
    }
  }
  function a(_, g, I) {
    const N = { type: _ };
    return t && (N.start = g, N.end = g, N.loc = { start: I, end: I }), N;
  }
  function o(_, g, I, N) {
    t && (_.end = g, _.loc && (_.loc.end = I));
  }
  function c(_, g) {
    const I = _.context(), N = a(3, I.offset, I.startLoc);
    return N.value = g, o(N, _.currentOffset(), _.currentPosition()), N;
  }
  function f(_, g) {
    const I = _.context(), { lastOffset: N, lastStartLoc: S } = I, R = a(5, N, S);
    return R.index = parseInt(g, 10), _.nextToken(), o(R, _.currentOffset(), _.currentPosition()), R;
  }
  function E(_, g, I) {
    const N = _.context(), { lastOffset: S, lastStartLoc: R } = N, A = a(4, S, R);
    return A.key = g, I === !0 && (A.modulo = !0), _.nextToken(), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function v(_, g) {
    const I = _.context(), { lastOffset: N, lastStartLoc: S } = I, R = a(9, N, S);
    return R.value = g.replace(so, ao), _.nextToken(), o(R, _.currentOffset(), _.currentPosition()), R;
  }
  function m(_) {
    const g = _.nextToken(), I = _.context(), { lastOffset: N, lastStartLoc: S } = I, R = a(8, N, S);
    return g.type !== 12 ? (s(_, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), R.value = "", o(R, N, S), {
      nextConsumeToken: g,
      node: R
    }) : (g.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, ge(g)), R.value = g.value || "", o(R, _.currentOffset(), _.currentPosition()), {
      node: R
    });
  }
  function T(_, g) {
    const I = _.context(), N = a(7, I.offset, I.startLoc);
    return N.value = g, o(N, _.currentOffset(), _.currentPosition()), N;
  }
  function d(_) {
    const g = _.context(), I = a(6, g.offset, g.startLoc);
    let N = _.nextToken();
    if (N.type === 9) {
      const S = m(_);
      I.modifier = S.node, N = S.nextConsumeToken || _.nextToken();
    }
    switch (N.type !== 10 && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(N)), N = _.nextToken(), N.type === 2 && (N = _.nextToken()), N.type) {
      case 11:
        N.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(N)), I.key = T(_, N.value || "");
        break;
      case 5:
        N.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(N)), I.key = E(_, N.value || "");
        break;
      case 6:
        N.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(N)), I.key = f(_, N.value || "");
        break;
      case 7:
        N.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(N)), I.key = v(_, N.value || "");
        break;
      default: {
        s(_, M.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const S = _.context(), R = a(7, S.offset, S.startLoc);
        return R.value = "", o(R, S.offset, S.startLoc), I.key = R, o(I, S.offset, S.startLoc), {
          nextConsumeToken: N,
          node: I
        };
      }
    }
    return o(I, _.currentOffset(), _.currentPosition()), {
      node: I
    };
  }
  function p(_) {
    const g = _.context(), I = g.currentType === 1 ? _.currentOffset() : g.offset, N = g.currentType === 1 ? g.endLoc : g.startLoc, S = a(2, I, N);
    S.items = [];
    let R = null, A = null;
    do {
      const w = R || _.nextToken();
      switch (R = null, w.type) {
        case 0:
          w.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(w)), S.items.push(c(_, w.value || ""));
          break;
        case 6:
          w.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(w)), S.items.push(f(_, w.value || ""));
          break;
        case 4:
          A = !0;
          break;
        case 5:
          w.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(w)), S.items.push(E(_, w.value || "", !!A)), A && (l(_, Vt.USE_MODULO_SYNTAX, g.lastStartLoc, 0, ge(w)), A = null);
          break;
        case 7:
          w.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, ge(w)), S.items.push(v(_, w.value || ""));
          break;
        case 8: {
          const ae = d(_);
          S.items.push(ae.node), R = ae.nextConsumeToken || null;
          break;
        }
      }
    } while (g.currentType !== 14 && g.currentType !== 1);
    const K = g.currentType === 1 ? g.lastOffset : _.currentOffset(), de = g.currentType === 1 ? g.lastEndLoc : _.currentPosition();
    return o(S, K, de), S;
  }
  function O(_, g, I, N) {
    const S = _.context();
    let R = N.items.length === 0;
    const A = a(1, g, I);
    A.cases = [], A.cases.push(N);
    do {
      const K = p(_);
      R || (R = K.items.length === 0), A.cases.push(K);
    } while (S.currentType !== 14);
    return R && s(_, M.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function C(_) {
    const g = _.context(), { offset: I, startLoc: N } = g, S = p(_);
    return g.currentType === 14 ? S : O(_, I, N, S);
  }
  function D(_) {
    const g = lo(_, Il({}, e)), I = g.context(), N = a(0, I.offset, I.startLoc);
    return t && N.loc && (N.loc.source = _), N.body = C(g), e.onCacheKey && (N.cacheKey = e.onCacheKey(_)), I.currentType !== 14 && s(g, M.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, _[I.offset] || ""), o(N, g.currentOffset(), g.currentPosition()), N;
  }
  return { parse: D };
}
function ge(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function io(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function Rn(e, t) {
  for (let n = 0; n < e.length; n++)
    fn(e[n], t);
}
function fn(e, t) {
  switch (e.type) {
    case 1:
      Rn(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Rn(e.items, t);
      break;
    case 6: {
      fn(e.key, t), t.helper(
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
function co(e, t = {}) {
  const n = io(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && fn(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function uo(e) {
  const t = e.body;
  return t.type === 2 ? Dn(t) : t.cases.forEach((n) => Dn(n)), e;
}
function Dn(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = Sl(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const fo = "minifier";
function ze(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      ze(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        ze(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        ze(n[r]);
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
        domain: fo,
        args: [e.type]
      });
  }
  delete e.type;
}
const _o = "parser";
function mo(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t, l = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  l && e.loc && (a.source = e.loc.source);
  const o = () => a;
  function c(p, O) {
    a.code += p;
  }
  function f(p, O = !0) {
    const C = O ? r : "";
    c(s ? C + "  ".repeat(p) : C);
  }
  function E(p = !0) {
    const O = ++a.indentLevel;
    p && f(O);
  }
  function v(p = !0) {
    const O = --a.indentLevel;
    p && f(O);
  }
  function m() {
    f(a.indentLevel);
  }
  return {
    context: o,
    push: c,
    indent: E,
    deindent: v,
    newline: m,
    helper: (p) => `_${p}`,
    needIndent: () => a.needIndent
  };
}
function po(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tt(e, t.key), t.modifier ? (e.push(", "), tt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ho(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let l = 0; l < s && (tt(e, t.items[l]), l !== s - 1); l++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Eo(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let l = 0; l < s && (tt(e, t.cases[l]), l !== s - 1); l++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function go(e, t) {
  t.body ? tt(e, t.body) : e.push("null");
}
function tt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      go(e, t);
      break;
    case 1:
      Eo(e, t);
      break;
    case 2:
      ho(e, t);
      break;
    case 6:
      po(e, t);
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
        domain: _o,
        args: [t.type]
      });
  }
}
const vo = (e, t = {}) => {
  const n = Pn(t.mode) ? t.mode : "normal", r = Pn(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], o = mo(e, {
    filename: r,
    breakLineCode: s,
    needIndent: l
  });
  o.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(l), a.length > 0 && (o.push(`const { ${Sl(a.map((E) => `${E}: _${E}`), ", ")} } = ctx`), o.newline()), o.push("return "), tt(o, e), o.deindent(l), o.push("}"), delete e.helpers;
  const { code: c, map: f } = o.context();
  return {
    ast: e,
    code: c,
    map: f ? f.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function No(e, t = {}) {
  const n = Il({}, t), r = !!n.jit, s = !!n.minify, l = n.optimize == null ? !0 : n.optimize, o = oo(n).parse(e);
  return r ? (l && uo(o), s && ze(o), { ast: o, code: "" }) : (co(o, n), vo(o, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Lo() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (De().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (De().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (De().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ee(e) {
  return V(e) && _n(e) === 0 && (ve(e, "b") || ve(e, "body"));
}
const Al = ["b", "body"];
function Oo(e) {
  return Ve(e, Al);
}
const yl = ["c", "cases"];
function To(e) {
  return Ve(e, yl, []);
}
const Pl = ["s", "static"];
function bo(e) {
  return Ve(e, Pl);
}
const Cl = ["i", "items"];
function Io(e) {
  return Ve(e, Cl, []);
}
const Rl = ["t", "type"];
function _n(e) {
  return Ve(e, Rl);
}
const Dl = ["v", "value"];
function Ct(e, t) {
  const n = Ve(e, Dl);
  if (n != null)
    return n;
  throw Ot(t);
}
const kl = ["m", "modifier"];
function So(e) {
  return Ve(e, kl);
}
const Ml = ["k", "key"];
function Ao(e) {
  const t = Ve(e, Ml);
  if (t)
    return t;
  throw Ot(
    6
    /* NodeTypes.Linked */
  );
}
function Ve(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (ve(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const Fl = [
  ...Al,
  ...yl,
  ...Pl,
  ...Cl,
  ...Ml,
  ...kl,
  ...Dl,
  ...Rl
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
const yo = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Po(e) {
  return yo.test(e);
}
function Co(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ro(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Do(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Po(t) ? Co(t) : "*" + t;
}
function ko(e) {
  const t = [];
  let n = -1, r = 0, s = 0, l, a, o, c, f, E, v;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = o : a += o;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), s++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, a === void 0 || (a = Do(a), a === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function T() {
    const d = e[n + 1];
    if (r === 5 && d === "'" || r === 6 && d === '"')
      return n++, o = "\\" + d, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, l = e[n], !(l === "\\" && T())) {
      if (c = Ro(l), v = $e[r], f = v[c] || v.l || 8, f === 8 || (r = f[0], f[1] !== void 0 && (E = m[f[1]], E && (o = l, E() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const kn = /* @__PURE__ */ new Map();
function Mo(e, t) {
  return V(e) ? e[t] : null;
}
function Fo(e, t) {
  if (!V(e))
    return null;
  let n = kn.get(t);
  if (n || (n = ko(t), n && kn.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, l = 0;
  for (; l < r; ) {
    const a = n[l];
    if (Fl.includes(a) && Ee(s))
      return null;
    const o = s[a];
    if (o === void 0 || Y(s))
      return null;
    s = o, l++;
  }
  return s;
}
const Uo = (e) => e, wo = (e) => "", Vo = "text", $o = (e) => e.length === 0 ? "" : Wa(e), Wo = $a;
function Mn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Go(e) {
  const t = z(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (z(e.named.count) || z(e.named.n)) ? z(e.named.count) ? e.named.count : z(e.named.n) ? e.named.n : t : t;
}
function Ho(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Bo(e = {}) {
  const t = e.locale, n = Go(e), r = V(e.pluralRules) && P(t) && Y(e.pluralRules[t]) ? e.pluralRules[t] : Mn, s = V(e.pluralRules) && P(t) && Y(e.pluralRules[t]) ? Mn : void 0, l = (C) => C[r(n, C.length, s)], a = e.list || [], o = (C) => a[C], c = e.named || x();
  z(e.pluralIndex) && Ho(n, c);
  const f = (C) => c[C];
  function E(C) {
    const D = Y(e.messages) ? e.messages(C) : V(e.messages) ? e.messages[C] : !1;
    return D || (e.parent ? e.parent.message(C) : wo);
  }
  const v = (C) => e.modifiers ? e.modifiers[C] : Uo, m = F(e.processor) && Y(e.processor.normalize) ? e.processor.normalize : $o, T = F(e.processor) && Y(e.processor.interpolate) ? e.processor.interpolate : Wo, d = F(e.processor) && P(e.processor.type) ? e.processor.type : Vo, O = {
    list: o,
    named: f,
    plural: l,
    linked: (C, ...D) => {
      const [_, g] = D;
      let I = "text", N = "";
      D.length === 1 ? V(_) ? (N = _.modifier || N, I = _.type || I) : P(_) && (N = _ || N) : D.length === 2 && (P(_) && (N = _ || N), P(g) && (I = g || I));
      const S = E(C)(O), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && X(S) && N ? S[0] : S
      );
      return N ? v(N)(R, I) : R;
    },
    message: E,
    type: d,
    interpolate: T,
    normalize: m,
    values: se(x(), a, c)
  };
  return O;
}
let Tt = null;
function Yo(e) {
  Tt = e;
}
function xo(e, t, n) {
  Tt && Tt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const jo = /* @__PURE__ */ Ko(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Ko(e) {
  return (t) => Tt && Tt.emit(e, t);
}
const Ul = Vt.__EXTEND_POINT__, He = wt(Ul), ie = {
  NOT_FOUND_KEY: Ul,
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
}, Xo = {
  [ie.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ie.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ie.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ie.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ie.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ie.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function xe(e, ...t) {
  return cn(Xo[e], ...t);
}
const wl = M.__EXTEND_POINT__, Be = wt(wl), le = {
  INVALID_ARGUMENT: wl,
  // 17
  INVALID_DATE_ARGUMENT: Be(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Be(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Be(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Be(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Be(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Be(),
  // 23
  __EXTEND_POINT__: Be()
  // 24
};
function Se(e) {
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: Jo } : void 0);
}
const Jo = {
  [le.INVALID_ARGUMENT]: "Invalid arguments",
  [le.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [le.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [le.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [le.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [le.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [le.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function dn(e, t) {
  return t.locale != null ? Fn(t.locale) : Fn(e.locale);
}
let Bt;
function Fn(e) {
  if (P(e))
    return e;
  if (Y(e)) {
    if (e.resolvedOnce && Bt != null)
      return Bt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Va(t))
        throw Se(le.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Bt = t;
    } else
      throw Se(le.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Se(le.NOT_SUPPORT_LOCALE_TYPE);
}
function Qo(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...X(t) ? t : V(t) ? Object.keys(t) : P(t) ? [t] : [n]
  ])];
}
function Vl(e, t, n) {
  const r = P(n) ? n : nt, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let l = s.__localeChainCache.get(r);
  if (!l) {
    l = [];
    let a = [n];
    for (; X(a); )
      a = Un(l, a, t);
    const o = X(t) || !F(t) ? t : t.default ? t.default : null;
    a = P(o) ? [o] : o, X(a) && Un(l, a, !1), s.__localeChainCache.set(r, l);
  }
  return l;
}
function Un(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && U(r); s++) {
    const l = t[s];
    P(l) && (r = qo(e, t[s], n));
  }
  return r;
}
function qo(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const l = s.join("-");
    r = Zo(e, l, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Zo(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (X(n) || F(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const zo = "9.14.5", $t = -1, nt = "en-US", Ft = "", wn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function ei() {
  return {
    upper: (e, t) => t === "text" && P(e) ? e.toUpperCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && P(e) ? e.toLowerCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && P(e) ? wn(e) : t === "vnode" && V(e) && "__v_isVNode" in e ? wn(e.children) : e
  };
}
let $l;
function Vn(e) {
  $l = e;
}
let Wl;
function ti(e) {
  Wl = e;
}
let Gl;
function ni(e) {
  Gl = e;
}
let Hl = null;
const li = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Hl = e;
}, ri = /* @__NO_SIDE_EFFECTS__ */ () => Hl;
let Bl = null;
const $n = (e) => {
  Bl = e;
}, si = () => Bl;
let Wn = 0;
function ai(e = {}) {
  const t = Y(e.onWarn) ? e.onWarn : ee, n = P(e.version) ? e.version : zo, r = P(e.locale) || Y(e.locale) ? e.locale : nt, s = Y(r) ? nt : r, l = X(e.fallbackLocale) || F(e.fallbackLocale) || P(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = F(e.messages) ? e.messages : Yt(s), o = F(e.datetimeFormats) ? e.datetimeFormats : Yt(s), c = F(e.numberFormats) ? e.numberFormats : Yt(s), f = se(x(), e.modifiers, ei()), E = e.pluralRules || x(), v = Y(e.missing) ? e.missing : null, m = U(e.missingWarn) || we(e.missingWarn) ? e.missingWarn : !0, T = U(e.fallbackWarn) || we(e.fallbackWarn) ? e.fallbackWarn : !0, d = !!e.fallbackFormat, p = !!e.unresolving, O = Y(e.postTranslation) ? e.postTranslation : null, C = F(e.processor) ? e.processor : null, D = U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, g = Y(e.messageCompiler) ? e.messageCompiler : $l;
  process.env.NODE_ENV !== "production" && Y(e.messageCompiler) && Ll(xe(ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const I = Y(e.messageResolver) ? e.messageResolver : Wl || Mo, N = Y(e.localeFallbacker) ? e.localeFallbacker : Gl || Qo, S = V(e.fallbackContext) ? e.fallbackContext : void 0, R = e, A = V(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), K = V(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), de = V(R.__meta) ? R.__meta : {};
  Wn++;
  const w = {
    version: n,
    cid: Wn,
    locale: r,
    fallbackLocale: l,
    messages: a,
    modifiers: f,
    pluralRules: E,
    missing: v,
    missingWarn: m,
    fallbackWarn: T,
    fallbackFormat: d,
    unresolving: p,
    postTranslation: O,
    processor: C,
    warnHtmlMessage: D,
    escapeParameter: _,
    messageCompiler: g,
    messageResolver: I,
    localeFallbacker: N,
    fallbackContext: S,
    onWarn: t,
    __meta: de
  };
  return w.datetimeFormats = o, w.numberFormats = c, w.__datetimeFormatters = A, w.__numberFormatters = K, process.env.NODE_ENV !== "production" && (w.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && xo(w, n, de), w;
}
const Yt = (e) => ({ [e]: x() });
function Wt(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Yl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function mn(e, t, n, r, s) {
  const { missing: l, onWarn: a } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = e.__v_emitter;
    o && o.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (l !== null) {
    const o = l(e, n, t, s);
    return P(o) ? o : t;
  } else
    return process.env.NODE_ENV !== "production" && Yl(r, t) && a(xe(ie.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Nt(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function xl(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function oi(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (xl(e, t[r]))
      return !0;
  return !1;
}
function xt(e) {
  return (n) => ii(n, e);
}
function ii(e, t) {
  const n = Oo(t);
  if (n == null)
    throw Ot(
      0
      /* NodeTypes.Resource */
    );
  if (_n(n) === 1) {
    const l = To(n);
    return e.plural(l.reduce((a, o) => [
      ...a,
      Gn(e, o)
    ], []));
  } else
    return Gn(e, n);
}
function Gn(e, t) {
  const n = bo(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Io(t).reduce((s, l) => [...s, Qt(e, l)], []);
    return e.normalize(r);
  }
}
function Qt(e, t) {
  const n = _n(t);
  switch (n) {
    case 3:
      return Ct(t, n);
    case 9:
      return Ct(t, n);
    case 4: {
      const r = t;
      if (ve(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (ve(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ot(n);
    }
    case 5: {
      const r = t;
      if (ve(r, "i") && z(r.i))
        return e.interpolate(e.list(r.i));
      if (ve(r, "index") && z(r.index))
        return e.interpolate(e.list(r.index));
      throw Ot(n);
    }
    case 6: {
      const r = t, s = So(r), l = Ao(r);
      return e.linked(Qt(e, l), s ? Qt(e, s) : void 0, e.type);
    }
    case 7:
      return Ct(t, n);
    case 8:
      return Ct(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ci = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function jl(e, t) {
  t && Qa(e) && ee(cn(ci, { source: e }));
}
const Kl = (e) => e;
let et = x();
function Xl(e) {
  e.code === Vt.USE_MODULO_SYNTAX && ee(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function Jl(e, t = {}) {
  let n = !1;
  const r = t.onError || Xa;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...No(e, t), detectError: n };
}
const ui = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!P(e))
    throw Se(le.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Xl);
  {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && jl(e, n);
    const s = (t.onCacheKey || Kl)(e), l = et[s];
    if (l)
      return l;
    const { code: a, detectError: o } = Jl(e, t), c = new Function(`return ${a}`)();
    return o ? c : et[s] = c;
  }
};
function fi(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Xl), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && P(e)) {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && jl(e, n);
    const s = (t.onCacheKey || Kl)(e), l = et[s];
    if (l)
      return l;
    const { ast: a, detectError: o } = Jl(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = xt(a);
    return o ? c : et[s] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !Ee(e))
      return ee(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = et[n];
      return r || (et[n] = xt(e));
    } else
      return xt(e);
  }
}
const Hn = () => "", he = (e) => Y(e);
function Bn(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: l, fallbackLocale: a, messages: o } = e, [c, f] = qt(...t), E = U(f.missingWarn) ? f.missingWarn : e.missingWarn, v = U(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, m = U(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, T = !!f.resolvedMessage, d = P(f.default) || U(f.default) ? U(f.default) ? l ? c : () => c : f.default : n ? l ? c : () => c : "", p = n || d !== "", O = dn(e, f);
  m && _i(f);
  let [C, D, _] = T ? [
    c,
    O,
    o[O] || x()
  ] : Ql(e, c, O, a, v, E), g = C, I = c;
  if (!T && !(P(g) || Ee(g) || he(g)) && p && (g = d, I = g), !T && (!(P(g) || Ee(g) || he(g)) || !P(D)))
    return s ? $t : c;
  if (process.env.NODE_ENV !== "production" && P(g) && e.messageCompiler == null)
    return ee(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let N = !1;
  const S = () => {
    N = !0;
  }, R = he(g) ? g : ql(e, c, D, g, I, S);
  if (N)
    return g;
  const A = hi(e, D, _, f), K = Bo(A), de = di(e, R, K);
  let w = r ? r(de, c) : de;
  if (m && P(w) && (w = Ua(w)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ae = {
      timestamp: Date.now(),
      key: P(c) ? c : he(g) ? g.key : "",
      locale: D || (he(g) ? g.locale : ""),
      format: P(g) ? g : he(g) ? g.source : "",
      message: w
    };
    ae.meta = se({}, e.__meta, /* @__PURE__ */ ri() || {}), jo(ae);
  }
  return w;
}
function _i(e) {
  X(e.list) ? e.list = e.list.map((t) => P(t) ? Sn(t) : t) : V(e.named) && Object.keys(e.named).forEach((t) => {
    P(e.named[t]) && (e.named[t] = Sn(e.named[t]));
  });
}
function Ql(e, t, n, r, s, l) {
  const { messages: a, onWarn: o, messageResolver: c, localeFallbacker: f } = e, E = f(e, r, n);
  let v = x(), m, T = null, d = n, p = null;
  const O = "translate";
  for (let C = 0; C < E.length; C++) {
    if (m = p = E[C], process.env.NODE_ENV !== "production" && n !== m && !xl(n, m) && Wt(s, t) && o(xe(ie.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && n !== m) {
      const I = e.__v_emitter;
      I && I.emit("fallback", {
        type: O,
        key: t,
        from: d,
        to: p,
        groupId: `${O}:${t}`
      });
    }
    v = a[m] || x();
    let D = null, _, g;
    if (process.env.NODE_ENV !== "production" && Ne && (D = window.performance.now(), _ = "intlify-message-resolve-start", g = "intlify-message-resolve-end", me && me(_)), (T = c(v, t)) === null && (T = v[t]), process.env.NODE_ENV !== "production" && Ne) {
      const I = window.performance.now(), N = e.__v_emitter;
      N && D && T && N.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: T,
        time: I - D,
        groupId: `${O}:${t}`
      }), _ && g && me && Ye && (me(g), Ye("intlify message resolve", _, g));
    }
    if (P(T) || Ee(T) || he(T))
      break;
    if (!oi(m, E)) {
      const I = mn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        l,
        O
      );
      I !== t && (T = I);
    }
    d = p;
  }
  return [T, m, v];
}
function ql(e, t, n, r, s, l) {
  const { messageCompiler: a, warnHtmlMessage: o } = e;
  if (he(r)) {
    const m = r;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (a == null) {
    const m = () => r;
    return m.locale = n, m.key = t, m;
  }
  let c = null, f, E;
  process.env.NODE_ENV !== "production" && Ne && (c = window.performance.now(), f = "intlify-message-compilation-start", E = "intlify-message-compilation-end", me && me(f));
  const v = a(r, mi(e, n, s, r, o, l));
  if (process.env.NODE_ENV !== "production" && Ne) {
    const m = window.performance.now(), T = e.__v_emitter;
    T && c && T.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: m - c,
      groupId: `translate:${t}`
    }), f && E && me && Ye && (me(E), Ye("intlify message compilation", f, E));
  }
  return v.locale = n, v.key = t, v.source = r, v;
}
function di(e, t, n) {
  let r = null, s, l;
  process.env.NODE_ENV !== "production" && Ne && (r = window.performance.now(), s = "intlify-message-evaluation-start", l = "intlify-message-evaluation-end", me && me(s));
  const a = t(n);
  if (process.env.NODE_ENV !== "production" && Ne) {
    const o = window.performance.now(), c = e.__v_emitter;
    c && r && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: a,
      time: o - r,
      groupId: `translate:${t.key}`
    }), s && l && me && Ye && (me(l), Ye("intlify message evaluation", s, l));
  }
  return a;
}
function qt(...e) {
  const [t, n, r] = e, s = x();
  if (!P(t) && !z(t) && !he(t) && !Ee(t))
    throw Se(le.INVALID_ARGUMENT);
  const l = z(t) ? String(t) : (he(t), t);
  return z(n) ? s.plural = n : P(n) ? s.default = n : F(n) && !Ut(n) ? s.named = n : X(n) && (s.list = n), z(r) ? s.plural = r : P(r) ? s.default = r : F(r) && se(s, r), [l, s];
}
function mi(e, t, n, r, s, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      if (l && l(a), process.env.NODE_ENV !== "production") {
        const o = pi(r), c = `Message compilation error: ${a.message}`, f = a.location && o && Ga(o, a.location.start.offset, a.location.end.offset), E = e.__v_emitter;
        E && o && E.emit("compile-error", {
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
    onCacheKey: (a) => Da(t, n, a)
  };
}
function pi(e) {
  if (P(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function hi(e, t, n, r) {
  const { modifiers: s, pluralRules: l, messageResolver: a, fallbackLocale: o, fallbackWarn: c, missingWarn: f, fallbackContext: E } = e, m = {
    locale: t,
    modifiers: s,
    pluralRules: l,
    messages: (T) => {
      let d = a(n, T);
      if (d == null && E) {
        const [, , p] = Ql(E, T, t, o, c, f);
        d = a(p, T);
      }
      if (P(d) || Ee(d)) {
        let p = !1;
        const C = ql(e, T, t, d, T, () => {
          p = !0;
        });
        return p ? Hn : C;
      } else return he(d) ? d : Hn;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), z(r.plural) && (m.pluralIndex = r.plural), m;
}
const Yn = typeof Intl < "u", Zl = {
  dateTimeFormat: Yn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Yn && typeof Intl.NumberFormat < "u"
};
function xn(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: l, localeFallbacker: a } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Zl.dateTimeFormat)
    return l(xe(ie.CANNOT_FORMAT_DATE)), Ft;
  const [c, f, E, v] = Zt(...t), m = U(E.missingWarn) ? E.missingWarn : e.missingWarn, T = U(E.fallbackWarn) ? E.fallbackWarn : e.fallbackWarn, d = !!E.part, p = dn(e, E), O = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!P(c) || c === "")
    return new Intl.DateTimeFormat(p, v).format(f);
  let C = {}, D, _ = null, g = p, I = null;
  const N = "datetime format";
  for (let A = 0; A < O.length; A++) {
    if (D = I = O[A], process.env.NODE_ENV !== "production" && p !== D && Wt(T, c) && l(xe(ie.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: D
    })), process.env.NODE_ENV !== "production" && p !== D) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: N,
        key: c,
        from: g,
        to: I,
        groupId: `${N}:${c}`
      });
    }
    if (C = n[D] || {}, _ = C[c], F(_))
      break;
    mn(e, c, D, m, N), g = I;
  }
  if (!F(_) || !P(D))
    return r ? $t : c;
  let S = `${D}__${c}`;
  Ut(v) || (S = `${S}__${JSON.stringify(v)}`);
  let R = o.get(S);
  return R || (R = new Intl.DateTimeFormat(D, se({}, _, v)), o.set(S, R)), d ? R.formatToParts(f) : R.format(f);
}
const zl = [
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
function Zt(...e) {
  const [t, n, r, s] = e, l = x();
  let a = x(), o;
  if (P(t)) {
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
  } else if (Ma(t)) {
    if (isNaN(t.getTime()))
      throw Se(le.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (z(t))
    o = t;
  else
    throw Se(le.INVALID_ARGUMENT);
  return P(n) ? l.key = n : F(n) && Object.keys(n).forEach((c) => {
    zl.includes(c) ? a[c] = n[c] : l[c] = n[c];
  }), P(r) ? l.locale = r : F(r) && (a = r), F(s) && (a = s), [l.key || "", o, l, a];
}
function jn(e, t, n) {
  const r = e;
  for (const s in n) {
    const l = `${t}__${s}`;
    r.__datetimeFormatters.has(l) && r.__datetimeFormatters.delete(l);
  }
}
function Kn(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: l, localeFallbacker: a } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Zl.numberFormat)
    return l(xe(ie.CANNOT_FORMAT_NUMBER)), Ft;
  const [c, f, E, v] = zt(...t), m = U(E.missingWarn) ? E.missingWarn : e.missingWarn, T = U(E.fallbackWarn) ? E.fallbackWarn : e.fallbackWarn, d = !!E.part, p = dn(e, E), O = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    p
  );
  if (!P(c) || c === "")
    return new Intl.NumberFormat(p, v).format(f);
  let C = {}, D, _ = null, g = p, I = null;
  const N = "number format";
  for (let A = 0; A < O.length; A++) {
    if (D = I = O[A], process.env.NODE_ENV !== "production" && p !== D && Wt(T, c) && l(xe(ie.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: D
    })), process.env.NODE_ENV !== "production" && p !== D) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: N,
        key: c,
        from: g,
        to: I,
        groupId: `${N}:${c}`
      });
    }
    if (C = n[D] || {}, _ = C[c], F(_))
      break;
    mn(e, c, D, m, N), g = I;
  }
  if (!F(_) || !P(D))
    return r ? $t : c;
  let S = `${D}__${c}`;
  Ut(v) || (S = `${S}__${JSON.stringify(v)}`);
  let R = o.get(S);
  return R || (R = new Intl.NumberFormat(D, se({}, _, v)), o.set(S, R)), d ? R.formatToParts(f) : R.format(f);
}
const er = [
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
function zt(...e) {
  const [t, n, r, s] = e, l = x();
  let a = x();
  if (!z(t))
    throw Se(le.INVALID_ARGUMENT);
  const o = t;
  return P(n) ? l.key = n : F(n) && Object.keys(n).forEach((c) => {
    er.includes(c) ? a[c] = n[c] : l[c] = n[c];
  }), P(r) ? l.locale = r : F(r) && (a = r), F(s) && (a = s), [l.key || "", o, l, a];
}
function Xn(e, t, n) {
  const r = e;
  for (const s in n) {
    const l = `${t}__${s}`;
    r.__numberFormatters.has(l) && r.__numberFormatters.delete(l);
  }
}
Lo();
function Ei() {
  return tr().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function tr() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const gi = typeof Proxy == "function", vi = "devtools-plugin:setup", Ni = "plugin:settings:set";
let qe, en;
function Li() {
  var e;
  return qe !== void 0 || (typeof window < "u" && window.performance ? (qe = !0, en = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (qe = !0, en = globalThis.perf_hooks.performance) : qe = !1), qe;
}
function Oi() {
  return Li() ? en.now() : Date.now();
}
class Ti {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const a in t.settings) {
        const o = t.settings[a];
        r[a] = o.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let l = Object.assign({}, r);
    try {
      const a = localStorage.getItem(s), o = JSON.parse(a);
      Object.assign(l, o);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return l;
      },
      setSettings(a) {
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch {
        }
        l = a;
      },
      now() {
        return Oi();
      }
    }, n && n.on(Ni, (a, o) => {
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
function bi(e, t) {
  const n = e, r = tr(), s = Ei(), l = gi && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !l))
    s.emit(vi, e, t);
  else {
    const a = l ? new Ti(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ii = "9.14.5";
function Si() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (De().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (De().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (De().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (De().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (De().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const nr = ie.__EXTEND_POINT__, Ce = wt(nr), q = {
  FALLBACK_TO_ROOT: nr,
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
}, Ai = {
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
  return cn(Ai[e], ...t);
}
const lr = le.__EXTEND_POINT__, ce = wt(lr), $ = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: lr,
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
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: yi, args: t } : void 0);
}
const yi = {
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
}, tn = /* @__PURE__ */ ye("__translateVNode"), nn = /* @__PURE__ */ ye("__datetimeParts"), ln = /* @__PURE__ */ ye("__numberParts"), je = /* @__PURE__ */ ye("__enableEmitter"), bt = /* @__PURE__ */ ye("__disableEmitter"), rr = ye("__setPluralRules"), sr = /* @__PURE__ */ ye("__injectWithOption"), rn = /* @__PURE__ */ ye("__dispose");
function It(e) {
  if (!V(e) || Ee(e))
    return e;
  for (const t in e)
    if (ve(e, t))
      if (!t.includes("."))
        V(e[t]) && It(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, l = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = x()), !V(s[n[a]])) {
            process.env.NODE_ENV !== "production" && ee(_e(q.IGNORE_OBJ_FLATTEN, {
              key: n[a]
            })), l = !0;
            break;
          }
          s = s[n[a]];
        }
        if (l || (Ee(s) ? Fl.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !Ee(s)) {
          const a = s[n[r]];
          V(a) && It(a);
        }
      }
  return e;
}
function Gt(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: l } = t, a = F(n) ? n : X(r) ? x() : { [e]: x() };
  if (X(r) && r.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: c, resource: f } = o;
      c ? (a[c] = a[c] || x(), Rt(f, a[c])) : Rt(f, a);
    } else
      P(o) && Rt(JSON.parse(o), a);
  }), s == null && l)
    for (const o in a)
      ve(a, o) && It(a[o]);
  return a;
}
function ar(e) {
  return e.type;
}
function or(e, t, n) {
  let r = V(t.messages) ? t.messages : x();
  "__i18nGlobal" in n && (r = Gt(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((l) => {
    e.mergeLocaleMessage(l, r[l]);
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
function Jn(e) {
  return Ae(Tr, null, e, 0);
}
const Qn = "__INTLIFY_META__", qn = () => [], Pi = () => !1;
let Zn = 0;
function zn(e) {
  return (t, n, r, s) => e(n, r, Lt() || void 0, s);
}
const Ci = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Lt();
  let t = null;
  return e && (t = ar(e)[Qn]) ? { [Qn]: t } : null;
};
function pn(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0, l = e.flatJson, a = Ne ? Ze : ol, o = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && o && Ll(_e(q.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let c = U(e.inheritLocale) ? e.inheritLocale : !0;
  const f = a(
    // prettier-ignore
    n && c ? n.locale.value : P(e.locale) ? e.locale : nt
  ), E = a(
    // prettier-ignore
    n && c ? n.fallbackLocale.value : P(e.fallbackLocale) || X(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value
  ), v = a(Gt(f.value, e)), m = a(F(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }), T = a(F(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
  let d = n ? n.missingWarn : U(e.missingWarn) || we(e.missingWarn) ? e.missingWarn : !0, p = n ? n.fallbackWarn : U(e.fallbackWarn) || we(e.fallbackWarn) ? e.fallbackWarn : !0, O = n ? n.fallbackRoot : U(e.fallbackRoot) ? e.fallbackRoot : !0, C = !!e.fallbackFormat, D = Y(e.missing) ? e.missing : null, _ = Y(e.missing) ? zn(e.missing) : null, g = Y(e.postTranslation) ? e.postTranslation : null, I = n ? n.warnHtmlMessage : U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter;
  const S = n ? n.modifiers : F(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || n && n.pluralRules, A;
  A = (() => {
    s && $n(null);
    const h = {
      version: Ii,
      locale: f.value,
      fallbackLocale: E.value,
      messages: v.value,
      modifiers: S,
      pluralRules: R,
      missing: _ === null ? void 0 : _,
      missingWarn: d,
      fallbackWarn: p,
      fallbackFormat: C,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: I,
      escapeParameter: N,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    h.datetimeFormats = m.value, h.numberFormats = T.value, h.__datetimeFormatters = F(A) ? A.__datetimeFormatters : void 0, h.__numberFormatters = F(A) ? A.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (h.__v_emitter = F(A) ? A.__v_emitter : void 0);
    const b = ai(h);
    return s && $n(b), b;
  })(), Nt(A, f.value, E.value);
  function de() {
    return [
      f.value,
      E.value,
      v.value,
      m.value,
      T.value
    ];
  }
  const w = be({
    get: () => f.value,
    set: (h) => {
      f.value = h, A.locale = f.value;
    }
  }), ae = be({
    get: () => E.value,
    set: (h) => {
      E.value = h, A.fallbackLocale = E.value, Nt(A, f.value, h);
    }
  }), rt = be(() => v.value), st = /* @__PURE__ */ be(() => m.value), Oe = /* @__PURE__ */ be(() => T.value);
  function at() {
    return Y(g) ? g : null;
  }
  function ot(h) {
    g = h, A.postTranslation = h;
  }
  function it() {
    return D;
  }
  function ct(h) {
    h !== null && (_ = zn(h)), D = h, A.missing = _;
  }
  function ut(h, b) {
    return h !== "translate" || !b.resolvedMessage;
  }
  const pe = (h, b, H, Z, ke, yt) => {
    de();
    let Qe;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = n ? si() : void 0), Qe = h(A);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = void 0);
    }
    if (H !== "translate exists" && // for not `te` (e.g `t`)
    z(Qe) && Qe === $t || H === "translate exists" && !Qe) {
      const [Ge, dr] = b();
      if (process.env.NODE_ENV !== "production" && n && P(Ge) && ut(H, dr) && (O && (Wt(p, Ge) || Yl(d, Ge)) && ee(_e(q.FALLBACK_TO_ROOT, {
        key: Ge,
        type: H
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: vn } = A;
        vn && O && vn.emit("fallback", {
          type: H,
          key: Ge,
          to: "global",
          groupId: `${H}:${Ge}`
        });
      }
      return n && O ? Z(n) : ke(Ge);
    } else {
      if (yt(Qe))
        return Qe;
      throw te($.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ke(...h) {
    return pe((b) => Reflect.apply(Bn, null, [b, ...h]), () => qt(...h), "translate", (b) => Reflect.apply(b.t, b, [...h]), (b) => b, (b) => P(b));
  }
  function Xe(...h) {
    const [b, H, Z] = h;
    if (Z && !V(Z))
      throw te($.INVALID_ARGUMENT);
    return Ke(b, H, se({ resolvedMessage: !0 }, Z || {}));
  }
  function ft(...h) {
    return pe((b) => Reflect.apply(xn, null, [b, ...h]), () => Zt(...h), "datetime format", (b) => Reflect.apply(b.d, b, [...h]), () => Ft, (b) => P(b));
  }
  function _t(...h) {
    return pe((b) => Reflect.apply(Kn, null, [b, ...h]), () => zt(...h), "number format", (b) => Reflect.apply(b.n, b, [...h]), () => Ft, (b) => P(b));
  }
  function dt(h) {
    return h.map((b) => P(b) || z(b) || U(b) ? Jn(String(b)) : b);
  }
  const mt = {
    normalize: dt,
    interpolate: (h) => h,
    type: "vnode"
  };
  function Je(...h) {
    return pe(
      (b) => {
        let H;
        const Z = b;
        try {
          Z.processor = mt, H = Reflect.apply(Bn, null, [Z, ...h]);
        } finally {
          Z.processor = null;
        }
        return H;
      },
      () => qt(...h),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[tn](...h),
      (b) => [Jn(b)],
      (b) => X(b)
    );
  }
  function pt(...h) {
    return pe(
      (b) => Reflect.apply(Kn, null, [b, ...h]),
      () => zt(...h),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[ln](...h),
      qn,
      (b) => P(b) || X(b)
    );
  }
  function ht(...h) {
    return pe(
      (b) => Reflect.apply(xn, null, [b, ...h]),
      () => Zt(...h),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[nn](...h),
      qn,
      (b) => P(b) || X(b)
    );
  }
  function Et(h) {
    R = h, A.pluralRules = R;
  }
  function y(h, b) {
    return pe(() => {
      if (!h)
        return !1;
      const H = P(b) ? b : f.value, Z = We(H), ke = A.messageResolver(Z, h);
      return o ? ke != null : Ee(ke) || he(ke) || P(ke);
    }, () => [h], "translate exists", (H) => Reflect.apply(H.te, H, [h, b]), Pi, (H) => U(H));
  }
  function G(h) {
    let b = null;
    const H = Vl(A, E.value, f.value);
    for (let Z = 0; Z < H.length; Z++) {
      const ke = v.value[H[Z]] || {}, yt = A.messageResolver(ke, h);
      if (yt != null) {
        b = yt;
        break;
      }
    }
    return b;
  }
  function gt(h) {
    const b = G(h);
    return b ?? (n ? n.tm(h) || {} : {});
  }
  function We(h) {
    return v.value[h] || {};
  }
  function vt(h, b) {
    if (l) {
      const H = { [h]: b };
      for (const Z in H)
        ve(H, Z) && It(H[Z]);
      b = H[h];
    }
    v.value[h] = b, A.messages = v.value;
  }
  function Ht(h, b) {
    v.value[h] = v.value[h] || {};
    const H = { [h]: b };
    if (l)
      for (const Z in H)
        ve(H, Z) && It(H[Z]);
    b = H[h], Rt(b, v.value[h]), A.messages = v.value;
  }
  function i(h) {
    return m.value[h] || {};
  }
  function u(h, b) {
    m.value[h] = b, A.datetimeFormats = m.value, jn(A, h, b);
  }
  function L(h, b) {
    m.value[h] = se(m.value[h] || {}, b), A.datetimeFormats = m.value, jn(A, h, b);
  }
  function k(h) {
    return T.value[h] || {};
  }
  function J(h, b) {
    T.value[h] = b, A.numberFormats = T.value, Xn(A, h, b);
  }
  function j(h, b) {
    T.value[h] = se(T.value[h] || {}, b), A.numberFormats = T.value, Xn(A, h, b);
  }
  Zn++, n && Ne && (Xt(n.locale, (h) => {
    c && (f.value = h, A.locale = h, Nt(A, f.value, E.value));
  }), Xt(n.fallbackLocale, (h) => {
    c && (E.value = h, A.fallbackLocale = h, Nt(A, f.value, E.value));
  }));
  const B = {
    id: Zn,
    locale: w,
    fallbackLocale: ae,
    get inheritLocale() {
      return c;
    },
    set inheritLocale(h) {
      c = h, h && n && (f.value = n.locale.value, E.value = n.fallbackLocale.value, Nt(A, f.value, E.value));
    },
    get availableLocales() {
      return Object.keys(v.value).sort();
    },
    messages: rt,
    get modifiers() {
      return S;
    },
    get pluralRules() {
      return R || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(h) {
      d = h, A.missingWarn = d;
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(h) {
      p = h, A.fallbackWarn = p;
    },
    get fallbackRoot() {
      return O;
    },
    set fallbackRoot(h) {
      O = h;
    },
    get fallbackFormat() {
      return C;
    },
    set fallbackFormat(h) {
      C = h, A.fallbackFormat = C;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(h) {
      I = h, A.warnHtmlMessage = h;
    },
    get escapeParameter() {
      return N;
    },
    set escapeParameter(h) {
      N = h, A.escapeParameter = h;
    },
    t: Ke,
    getLocaleMessage: We,
    setLocaleMessage: vt,
    mergeLocaleMessage: Ht,
    getPostTranslationHandler: at,
    setPostTranslationHandler: ot,
    getMissingHandler: it,
    setMissingHandler: ct,
    [rr]: Et
  };
  return B.datetimeFormats = st, B.numberFormats = Oe, B.rt = Xe, B.te = y, B.tm = gt, B.d = ft, B.n = _t, B.getDateTimeFormat = i, B.setDateTimeFormat = u, B.mergeDateTimeFormat = L, B.getNumberFormat = k, B.setNumberFormat = J, B.mergeNumberFormat = j, B[sr] = r, B[tn] = Je, B[nn] = ht, B[ln] = pt, process.env.NODE_ENV !== "production" && (B[je] = (h) => {
    A.__v_emitter = h;
  }, B[bt] = () => {
    A.__v_emitter = void 0;
  }), B;
}
function Ri(e) {
  const t = P(e.locale) ? e.locale : nt, n = P(e.fallbackLocale) || X(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Y(e.missing) ? e.missing : void 0, s = U(e.silentTranslationWarn) || we(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, l = U(e.silentFallbackWarn) || we(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = U(e.fallbackRoot) ? e.fallbackRoot : !0, o = !!e.formatFallbackMessages, c = F(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, E = Y(e.postTranslation) ? e.postTranslation : void 0, v = P(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, T = U(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && ee(_e(q.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && ee(_e(q.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let d = e.messages;
  if (F(e.sharedMessages)) {
    const N = e.sharedMessages;
    d = Object.keys(N).reduce((R, A) => {
      const K = R[A] || (R[A] = {});
      return se(K, N[A]), R;
    }, d || {});
  }
  const { __i18n: p, __root: O, __injectWithOption: C } = e, D = e.datetimeFormats, _ = e.numberFormats, g = e.flatJson, I = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: d,
    flatJson: g,
    datetimeFormats: D,
    numberFormats: _,
    missing: r,
    missingWarn: s,
    fallbackWarn: l,
    fallbackRoot: a,
    fallbackFormat: o,
    modifiers: c,
    pluralRules: f,
    postTranslation: E,
    warnHtmlMessage: v,
    escapeParameter: m,
    messageResolver: e.messageResolver,
    inheritLocale: T,
    translateExistCompatible: I,
    __i18n: p,
    __root: O,
    __injectWithOption: C
  };
}
function sn(e = {}, t) {
  {
    const n = pn(Ri(e)), { __extender: r } = e, s = {
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
        let E = null, v = null;
        if (!P(a))
          throw te($.INVALID_ARGUMENT);
        const m = a;
        return P(o) ? f.locale = o : X(o) ? E = o : F(o) && (v = o), X(c) ? E = c : F(c) && (v = c), Reflect.apply(n.t, n, [
          m,
          E || v || {},
          f
        ]);
      },
      rt(...l) {
        return Reflect.apply(n.rt, n, [...l]);
      },
      // tc
      tc(...l) {
        const [a, o, c] = l, f = { plural: 1 };
        let E = null, v = null;
        if (!P(a))
          throw te($.INVALID_ARGUMENT);
        const m = a;
        return P(o) ? f.locale = o : z(o) ? f.plural = o : X(o) ? E = o : F(o) && (v = o), P(c) ? f.locale = c : X(c) ? E = c : F(c) && (v = c), Reflect.apply(n.t, n, [
          m,
          E || v || {},
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
    return s.__extender = r, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (l) => {
      const a = n;
      a[je] && a[je](l);
    }, s.__disableEmitter = () => {
      const l = n;
      l[bt] && l[bt]();
    }), s;
  }
}
const hn = {
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
function Di({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Dt ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, x());
}
function ir(e) {
  return Dt;
}
const ki = /* @__PURE__ */ on({
  /* eslint-disable */
  name: "i18n-t",
  props: se({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => z(e) || !isNaN(e)
    }
  }, hn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || gn({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const l = Object.keys(n).filter((v) => v !== "_"), a = x();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = P(e.plural) ? +e.plural : e.plural);
      const o = Di(t, l), c = s[tn](e.keypath, o, a), f = se(x(), r), E = P(e.tag) || V(e.tag) ? e.tag : ir();
      return il(E, f, c);
    };
  }
}), jt = ki;
function Mi(e) {
  return X(e) && !P(e[0]);
}
function cr(e, t, n, r) {
  const { slots: s, attrs: l } = t;
  return () => {
    const a = { part: !0 };
    let o = x();
    e.locale && (a.locale = e.locale), P(e.format) ? a.key = e.format : V(e.format) && (P(e.format.key) && (a.key = e.format.key), o = Object.keys(e.format).reduce((m, T) => n.includes(T) ? se(x(), m, { [T]: e.format[T] }) : m, x()));
    const c = r(e.value, a, o);
    let f = [a.key];
    X(c) ? f = c.map((m, T) => {
      const d = s[m.type], p = d ? d({ [m.type]: m.value, index: T, parts: c }) : [m.value];
      return Mi(p) && (p[0].key = `${m.type}-${T}`), p;
    }) : P(c) && (f = [c]);
    const E = se(x(), l), v = P(e.tag) || V(e.tag) ? e.tag : ir();
    return il(v, E, f);
  };
}
const Fi = /* @__PURE__ */ on({
  /* eslint-disable */
  name: "i18n-n",
  props: se({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, hn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || gn({
      useScope: e.scope,
      __useComponent: !0
    });
    return cr(e, t, er, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ln](...r)
    ));
  }
}), el = Fi, Ui = /* @__PURE__ */ on({
  /* eslint-disable */
  name: "i18n-d",
  props: se({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, hn),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || gn({
      useScope: e.scope,
      __useComponent: !0
    });
    return cr(e, t, zl, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[nn](...r)
    ));
  }
}), tl = Ui;
function wi(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Vi(e) {
  const t = (a) => {
    const { instance: o, modifiers: c, value: f } = a;
    if (!o || !o.$)
      throw te($.UNEXPECTED_ERROR);
    const E = wi(e, o.$);
    process.env.NODE_ENV !== "production" && c.preserve && ee(_e(q.NOT_SUPPORTED_PRESERVE));
    const v = nl(f);
    return [
      Reflect.apply(E.t, E, [...ll(v)]),
      E
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
        const c = a.__composer, f = nl(o);
        a.textContent = Reflect.apply(c.t, c, [
          ...ll(f)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [o] = t(a);
      return { textContent: o };
    }
  };
}
function nl(e) {
  if (P(e))
    return { path: e };
  if (F(e)) {
    if (!("path" in e))
      throw te($.REQUIRED_VALUE, "path");
    return e;
  } else
    throw te($.INVALID_VALUE);
}
function ll(e) {
  const { path: t, locale: n, args: r, choice: s, plural: l } = e, a = {}, o = r || {};
  return P(n) && (a.locale = n), z(s) && (a.plural = s), z(l) && (a.plural = l), [t, o, a];
}
function $i(e, t, ...n) {
  const r = F(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName, l = U(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && l && s && ee(_e(q.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: jt.name
  })), l && ([s ? "i18n" : jt.name, "I18nT"].forEach((a) => e.component(a, jt)), [el.name, "I18nN"].forEach((a) => e.component(a, el)), [tl.name, "I18nD"].forEach((a) => e.component(a, tl))), e.directive("t", Vi(t));
}
const Kt = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, Wi = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Gi = {
  "vue-i18n-timeline": 16764185
}, ur = "vue-i18n: composer properties";
let an;
async function Hi(e, t) {
  return new Promise((n, r) => {
    try {
      bi({
        id: "vue-devtools-plugin-vue-i18n",
        label: Kt[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [ur],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        an = s, s.on.visitComponentTree(({ componentInstance: a, treeNode: o }) => {
          Bi(a, o, t);
        }), s.on.inspectComponent(({ componentInstance: a, instanceData: o }) => {
          a.vnode.el && a.vnode.el.__VUE_I18N__ && o && (t.mode === "legacy" ? a.vnode.el.__VUE_I18N__ !== t.global.__composer && rl(o, a.vnode.el.__VUE_I18N__) : rl(o, a.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Kt[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: Wi[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), s.on.getInspectorTree((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && Xi(a, t);
        });
        const l = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (a) => {
          if (a.app === e && a.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), Qi(a, t), a.nodeId === "global") {
              if (!l.has(a.app)) {
                const [o] = await s.getComponentInstances(a.app);
                l.set(a.app, o);
              }
              s.highlightElement(l.get(a.app));
            } else {
              const o = Ji(a.nodeId, t);
              o && s.highlightElement(o);
            }
        }), s.on.editInspectorState((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && Zi(a, t);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Kt[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: Gi[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), n(!0);
      });
    } catch (s) {
      console.error(s), r(!1);
    }
  });
}
function fr(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Bi(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const s = {
      label: `i18n (${fr(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function rl(e, t) {
  const n = ur;
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
    value: En(t.messages.value)
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
function En(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Y(r) && "source" in r ? t[n] = Ki(r) : Ee(r) && r.loc && r.loc.source ? t[n] = r.loc.source : V(r) ? t[n] = En(r) : t[n] = r;
  }), t;
}
const Yi = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function xi(e) {
  return e.replace(/[<>"&]/g, ji);
}
function ji(e) {
  return Yi[e] || e;
}
function Ki(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${xi(e.source)}")` : "(?)"}`
    }
  };
}
function Xi(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, s] of t.__instances) {
    const l = t.mode === "composition" ? s : s.__composer;
    n !== l && e.rootNodes.push({
      id: l.id.toString(),
      label: `${fr(r)} Scope`
    });
  }
}
function Ji(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, s] of t.__instances.entries())
      if (s.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function _r(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Qi(e, t) {
  const n = _r(e.nodeId, t);
  return n && (e.state = qi(n)), null;
}
function qi(e) {
  const t = {}, n = "Locale related info", r = [
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
  t[n] = r;
  const s = "Locale messages info", l = [
    {
      type: s,
      key: "messages",
      editable: !1,
      value: En(e.messages.value)
    }
  ];
  t[s] = l;
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
  if (an) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), an.addTimelineEvent({
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
function Zi(e, t) {
  const n = _r(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && P(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (P(e.state.value) || X(e.state.value) || V(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && U(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function zi(e, t, n) {
  return {
    beforeCreate() {
      const r = Lt();
      if (!r)
        throw te($.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const l = s.i18n;
        if (s.__i18n && (l.__i18n = s.__i18n), l.__root = t, this === this.$root)
          this.$i18n = sl(e, l);
        else {
          l.__injectWithOption = !0, l.__extender = n.__vueI18nExtend, this.$i18n = sn(l);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = sl(e, s);
        else {
          this.$i18n = sn({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const l = this.$i18n;
          l.__extender && (l.__disposer = l.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      s.__i18nGlobal && or(t, s, s), this.$t = (...l) => this.$i18n.t(...l), this.$rt = (...l) => this.$i18n.rt(...l), this.$tc = (...l) => this.$i18n.tc(...l), this.$te = (l, a) => this.$i18n.te(l, a), this.$d = (...l) => this.$i18n.d(...l), this.$n = (...l) => this.$i18n.n(...l), this.$tm = (l) => this.$i18n.tm(l), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const s = this.__v_emitter = un();
        r.__enableEmitter && r.__enableEmitter(s), s.on("*", St);
      }
    },
    unmounted() {
      const r = Lt();
      if (!r)
        throw te($.UNEXPECTED_ERROR);
      const s = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", St), delete this.__v_emitter), this.$i18n && (s.__disableEmitter && s.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function sl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[rr](t.pluralizationRules || e.pluralizationRules);
  const n = Gt(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const ec = /* @__PURE__ */ ye("global-vue-i18n");
function tc(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && U(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = U(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, l = /* @__PURE__ */ new Map(), [a, o] = nc(e, n), c = /* @__PURE__ */ ye(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && s && ee(_e(q.NOTICE_DROP_ALLOW_COMPOSITION));
  function f(m) {
    return l.get(m) || null;
  }
  function E(m, T) {
    l.set(m, T);
  }
  function v(m) {
    l.delete(m);
  }
  {
    const m = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return s;
      },
      // install plugin
      async install(T, ...d) {
        if (process.env.NODE_ENV !== "production" && (T.__VUE_I18N__ = m), T.__VUE_I18N_SYMBOL__ = c, T.provide(T.__VUE_I18N_SYMBOL__, m), F(d[0])) {
          const C = d[0];
          m.__composerExtend = C.__composerExtend, m.__vueI18nExtend = C.__vueI18nExtend;
        }
        let p = null;
        !n && r && (p = fc(T, m.global)), __VUE_I18N_FULL_INSTALL__ && $i(T, m, ...d), __VUE_I18N_LEGACY_API__ && n && T.mixin(zi(o, o.__composer, m));
        const O = T.unmount;
        if (T.unmount = () => {
          p && p(), m.dispose(), O();
        }, process.env.NODE_ENV !== "production") {
          if (!await Hi(T, m))
            throw te($.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const D = un();
          if (n) {
            const _ = o;
            _.__enableEmitter && _.__enableEmitter(D);
          } else {
            const _ = o;
            _[je] && _[je](D);
          }
          D.on("*", St);
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
      __setInstance: E,
      // @internal
      __deleteInstance: v
    };
    return m;
  }
}
function gn(e = {}) {
  const t = Lt();
  if (t == null)
    throw te($.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw te($.NOT_INSTALLED);
  const n = lc(t), r = sc(n), s = ar(t), l = rc(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw te($.NOT_AVAILABLE_IN_LEGACY_MODE);
    return cc(t, l, r, e);
  }
  if (l === "global")
    return or(r, e, s), r;
  if (l === "parent") {
    let c = ac(n, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && ee(_e(q.NOT_FOUND_PARENT_SCOPE)), c = r), c;
  }
  const a = n;
  let o = a.__getInstance(t);
  if (o == null) {
    const c = se({}, e);
    "__i18n" in s && (c.__i18n = s.__i18n), r && (c.__root = r), o = pn(c), a.__composerExtend && (o[rn] = a.__composerExtend(o)), ic(a, t, o), a.__setInstance(t, o);
  }
  return o;
}
function nc(e, t, n) {
  const r = Er();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => sn(e)) : r.run(() => pn(e));
    if (s == null)
      throw te($.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function lc(e) {
  {
    const t = vr(e.isCE ? ec : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw te(e.isCE ? $.NOT_INSTALLED_WITH_PROVIDE : $.UNEXPECTED_ERROR);
    return t;
  }
}
function rc(e, t) {
  return Ut(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function sc(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ac(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let l = oc(t, n);
  for (; l != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = a.__getInstance(l);
      o != null && (r = o.__composer, n && r && !r[sr] && (r = null));
    }
    if (r != null || s === l)
      break;
    l = l.parent;
  }
  return r;
}
function oc(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ic(e, t, n) {
  let r = null;
  Lr(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = un();
      const s = n;
      s[je] && s[je](r), r.on("*", St);
    }
  }, t), Or(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", St), s[bt] && s[bt](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const l = s[rn];
    l && (l(), delete s[rn]);
  }, t);
}
function cc(e, t, n, r = {}) {
  const s = t === "local", l = ol(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw te($.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = U(r.inheritLocale) ? r.inheritLocale : !P(r.locale), o = Ze(
    // prettier-ignore
    !s || a ? n.locale.value : P(r.locale) ? r.locale : nt
  ), c = Ze(
    // prettier-ignore
    !s || a ? n.fallbackLocale.value : P(r.fallbackLocale) || X(r.fallbackLocale) || F(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : o.value
  ), f = Ze(Gt(o.value, r)), E = Ze(F(r.datetimeFormats) ? r.datetimeFormats : { [o.value]: {} }), v = Ze(F(r.numberFormats) ? r.numberFormats : { [o.value]: {} }), m = s ? n.missingWarn : U(r.missingWarn) || we(r.missingWarn) ? r.missingWarn : !0, T = s ? n.fallbackWarn : U(r.fallbackWarn) || we(r.fallbackWarn) ? r.fallbackWarn : !0, d = s ? n.fallbackRoot : U(r.fallbackRoot) ? r.fallbackRoot : !0, p = !!r.fallbackFormat, O = Y(r.missing) ? r.missing : null, C = Y(r.postTranslation) ? r.postTranslation : null, D = s ? n.warnHtmlMessage : U(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, _ = !!r.escapeParameter, g = s ? n.modifiers : F(r.modifiers) ? r.modifiers : {}, I = r.pluralRules || s && n.pluralRules;
  function N() {
    return [
      o.value,
      c.value,
      f.value,
      E.value,
      v.value
    ];
  }
  const S = be({
    get: () => l.value ? l.value.locale.value : o.value,
    set: (y) => {
      l.value && (l.value.locale.value = y), o.value = y;
    }
  }), R = be({
    get: () => l.value ? l.value.fallbackLocale.value : c.value,
    set: (y) => {
      l.value && (l.value.fallbackLocale.value = y), c.value = y;
    }
  }), A = be(() => l.value ? l.value.messages.value : f.value), K = be(() => E.value), de = be(() => v.value);
  function w() {
    return l.value ? l.value.getPostTranslationHandler() : C;
  }
  function ae(y) {
    l.value && l.value.setPostTranslationHandler(y);
  }
  function rt() {
    return l.value ? l.value.getMissingHandler() : O;
  }
  function st(y) {
    l.value && l.value.setMissingHandler(y);
  }
  function Oe(y) {
    return N(), y();
  }
  function at(...y) {
    return l.value ? Oe(() => Reflect.apply(l.value.t, null, [...y])) : Oe(() => "");
  }
  function ot(...y) {
    return l.value ? Reflect.apply(l.value.rt, null, [...y]) : "";
  }
  function it(...y) {
    return l.value ? Oe(() => Reflect.apply(l.value.d, null, [...y])) : Oe(() => "");
  }
  function ct(...y) {
    return l.value ? Oe(() => Reflect.apply(l.value.n, null, [...y])) : Oe(() => "");
  }
  function ut(y) {
    return l.value ? l.value.tm(y) : {};
  }
  function pe(y, G) {
    return l.value ? l.value.te(y, G) : !1;
  }
  function Ke(y) {
    return l.value ? l.value.getLocaleMessage(y) : {};
  }
  function Xe(y, G) {
    l.value && (l.value.setLocaleMessage(y, G), f.value[y] = G);
  }
  function ft(y, G) {
    l.value && l.value.mergeLocaleMessage(y, G);
  }
  function _t(y) {
    return l.value ? l.value.getDateTimeFormat(y) : {};
  }
  function dt(y, G) {
    l.value && (l.value.setDateTimeFormat(y, G), E.value[y] = G);
  }
  function At(y, G) {
    l.value && l.value.mergeDateTimeFormat(y, G);
  }
  function mt(y) {
    return l.value ? l.value.getNumberFormat(y) : {};
  }
  function Je(y, G) {
    l.value && (l.value.setNumberFormat(y, G), v.value[y] = G);
  }
  function pt(y, G) {
    l.value && l.value.mergeNumberFormat(y, G);
  }
  const ht = {
    get id() {
      return l.value ? l.value.id : -1;
    },
    locale: S,
    fallbackLocale: R,
    messages: A,
    datetimeFormats: K,
    numberFormats: de,
    get inheritLocale() {
      return l.value ? l.value.inheritLocale : a;
    },
    set inheritLocale(y) {
      l.value && (l.value.inheritLocale = y);
    },
    get availableLocales() {
      return l.value ? l.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return l.value ? l.value.modifiers : g;
    },
    get pluralRules() {
      return l.value ? l.value.pluralRules : I;
    },
    get isGlobal() {
      return l.value ? l.value.isGlobal : !1;
    },
    get missingWarn() {
      return l.value ? l.value.missingWarn : m;
    },
    set missingWarn(y) {
      l.value && (l.value.missingWarn = y);
    },
    get fallbackWarn() {
      return l.value ? l.value.fallbackWarn : T;
    },
    set fallbackWarn(y) {
      l.value && (l.value.missingWarn = y);
    },
    get fallbackRoot() {
      return l.value ? l.value.fallbackRoot : d;
    },
    set fallbackRoot(y) {
      l.value && (l.value.fallbackRoot = y);
    },
    get fallbackFormat() {
      return l.value ? l.value.fallbackFormat : p;
    },
    set fallbackFormat(y) {
      l.value && (l.value.fallbackFormat = y);
    },
    get warnHtmlMessage() {
      return l.value ? l.value.warnHtmlMessage : D;
    },
    set warnHtmlMessage(y) {
      l.value && (l.value.warnHtmlMessage = y);
    },
    get escapeParameter() {
      return l.value ? l.value.escapeParameter : _;
    },
    set escapeParameter(y) {
      l.value && (l.value.escapeParameter = y);
    },
    t: at,
    getPostTranslationHandler: w,
    setPostTranslationHandler: ae,
    getMissingHandler: rt,
    setMissingHandler: st,
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
  function Et(y) {
    y.locale.value = o.value, y.fallbackLocale.value = c.value, Object.keys(f.value).forEach((G) => {
      y.mergeLocaleMessage(G, f.value[G]);
    }), Object.keys(E.value).forEach((G) => {
      y.mergeDateTimeFormat(G, E.value[G]);
    }), Object.keys(v.value).forEach((G) => {
      y.mergeNumberFormat(G, v.value[G]);
    }), y.escapeParameter = _, y.fallbackFormat = p, y.fallbackRoot = d, y.fallbackWarn = T, y.missingWarn = m, y.warnHtmlMessage = D;
  }
  return Nr(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw te($.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const y = l.value = e.proxy.$i18n.__composer;
    t === "global" ? (o.value = y.locale.value, c.value = y.fallbackLocale.value, f.value = y.messages.value, E.value = y.datetimeFormats.value, v.value = y.numberFormats.value) : s && Et(y);
  }), ht;
}
const uc = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], al = ["t", "rt", "d", "n", "tm", "te"];
function fc(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return uc.forEach((s) => {
    const l = Object.getOwnPropertyDescriptor(t, s);
    if (!l)
      throw te($.UNEXPECTED_ERROR);
    const a = gr(l.value) ? {
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
    Object.defineProperty(n, s, a);
  }), e.config.globalProperties.$i18n = n, al.forEach((s) => {
    const l = Object.getOwnPropertyDescriptor(t, s);
    if (!l || !l.value)
      throw te($.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, l);
  }), () => {
    delete e.config.globalProperties.$i18n, al.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Si();
__INTLIFY_JIT_COMPILATION__ ? Vn(fi) : Vn(ui);
ti(Fo);
ni(Vl);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = De();
  e.__INTLIFY__ = !0, Yo(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function _c() {
  const e = /* @__PURE__ */ Object.assign({
    "./locales/cz_CZ.json": Fs,
    "./locales/en_US.json": Hs,
    "./locales/es_ES.json": Js,
    "./locales/fr_FR.json": na,
    "./locales/pl_PL.json": ca,
    "./locales/pt_BR.json": ha,
    "./locales/sk_SK.json": Ta,
    "./locales/tr_TR.json": Ca
  }), t = {};
  for (const n in e) {
    const r = n.match(/([A-Za-z0-9-_]+)(?=\.)/i)[0];
    if (r && r.length > 1) {
      const s = r;
      t[s] = e[n];
    }
  }
  return t;
}
const dc = tc({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: _c()
}), mc = (e, t) => {
  e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(dc), e.component("vueSelectSides", Nl);
};
Nl.install = mc;
export {
  Nl as default
};
