import { openBlock as W, createElementBlock as ne, toDisplayString as Fe, withDirectives as Oe, vModelText as rr, createElementVNode as Q, resolveComponent as fe, Fragment as Dt, renderList as Nn, normalizeClass as Ln, createTextVNode as sr, createCommentVNode as re, vShow as Ce, createVNode as Se, createBlock as ue, resolveDynamicComponent as ar, defineComponent as on, h as al, getCurrentInstance as Lt, effectScope as or, inject as ir, onMounted as cr, onUnmounted as ur, shallowRef as ol, ref as Ze, computed as Te, onBeforeMount as fr, watch as Xt, isRef as _r, Text as dr } from "vue";
var mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var il = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = n();
  })(mr, function() {
    var t = Object.prototype.toString, n = Object.prototype.hasOwnProperty;
    function r(d) {
      if (!d || i(d) && d.length === 0)
        return !0;
      for (var E in d)
        if (n.call(d, E))
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
    function i(d) {
      return typeof d == "object" && typeof d.length == "number" && s(d) === "[object Array]";
    }
    function f(d) {
      return typeof d == "boolean" || s(d) === "[object Boolean]";
    }
    function h(d) {
      var E = parseInt(d);
      return E.toString() === d ? E : d;
    }
    function v(d, E, N, y) {
      if (l(E) && (E = [E]), r(E))
        return d;
      if (a(E))
        return v(d, E.split("."), N, y);
      var R = h(E[0]);
      if (E.length === 1) {
        var _ = d[R];
        return (_ === void 0 || !y) && (d[R] = N), _;
      }
      return d[R] === void 0 && (l(R) ? d[R] = [] : d[R] = {}), v(d[R], E.slice(1), N, y);
    }
    function m(d, E) {
      if (l(E) && (E = [E]), !r(d)) {
        if (r(E))
          return d;
        if (a(E))
          return m(d, E.split("."));
        var N = h(E[0]), y = d[N];
        if (E.length === 1)
          y !== void 0 && (i(d) ? d.splice(N, 1) : delete d[N]);
        else if (d[N] !== void 0)
          return m(d[N], E.slice(1));
        return d;
      }
    }
    var T = {};
    return T.ensureExists = function(d, E, N) {
      return v(d, E, N, !0);
    }, T.set = function(d, E, N, y) {
      return v(d, E, N, y);
    }, T.insert = function(d, E, N, y) {
      var R = T.get(d, E);
      y = ~~y, i(R) || (R = [], T.set(d, E, R)), R.splice(y, 0, N);
    }, T.empty = function(d, E) {
      if (r(E))
        return d;
      if (!r(d)) {
        var N, y;
        if (!(N = T.get(d, E)))
          return d;
        if (a(N))
          return T.set(d, E, "");
        if (f(N))
          return T.set(d, E, !1);
        if (l(N))
          return T.set(d, E, 0);
        if (i(N))
          N.length = 0;
        else if (o(N))
          for (y in N)
            n.call(N, y) && delete N[y];
        else
          return T.set(d, E, null);
      }
    }, T.push = function(d, E) {
      var N = T.get(d, E);
      i(N) || (N = [], T.set(d, E, N)), N.push.apply(N, Array.prototype.slice.call(arguments, 2));
    }, T.coalesce = function(d, E, N) {
      for (var y, R = 0, _ = E.length; R < _; R++)
        if ((y = T.get(d, E[R])) !== void 0)
          return y;
      return N;
    }, T.get = function(d, E, N) {
      if (l(E) && (E = [E]), r(E))
        return d;
      if (r(d))
        return N;
      if (a(E))
        return T.get(d, E.split("."), N);
      var y = h(E[0]);
      return E.length === 1 ? d[y] === void 0 ? N : d[y] : T.get(d[y], E.slice(1), N);
    }, T.del = function(d, E) {
      return m(d, E);
    }, T;
  });
})(il);
var hr = il.exports, On = hr, cl, ul, Jt;
Jt = function(e) {
  return function(t) {
    return typeof t === e;
  };
};
ul = function(t, n) {
  var r = 1, s = n || function(l, a) {
    return a;
  };
  return t[0] === "-" && (r = -1, t = t.substr(1)), function(a, o) {
    var i, f = s(t, On.get(a, t)), h = s(t, On.get(o, t));
    return f < h && (i = -1), f > h && (i = 1), f === h && (i = 0), i * r;
  };
};
cl = function() {
  var t = Array.prototype.slice.call(arguments), n = t.filter(Jt("string")), r = t.filter(Jt("function"))[0];
  return function(l, a) {
    for (var o = n.length, i = 0, f = 0; i === 0 && f < o; )
      i = ul(n[f], r)(l, a), f++;
    return i;
  };
};
var Er = cl;
const Tn = /* @__PURE__ */ pr(Er), be = (e) => JSON.parse(JSON.stringify(e)), Me = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), kt = (e, t) => {
  let n = [];
  return e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label")), t.sort(Tn(...n)).map((r) => (r.children && r.children.sort(Tn(...n)), r)), t;
}, fl = (e, t) => e.filter((n) => String(n) !== String(t)), Ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, gr = {
  name: "v-select-all",
  display: "Select all",
  emits: ["update-select-all"],
  props: {
    items: Array
  }
};
function vr(e, t, n, r, s, l) {
  return W(), ne("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-select-all"))
  }, Fe(e.$t("selectAll")), 1);
}
const _l = /* @__PURE__ */ Ne(gr, [["render", vr]]), Nr = {
  name: "v-deselect-all",
  display: "Deselect all",
  emits: ["update-deselect-all"],
  props: {
    click: Function,
    items: Array
  }
};
function Lr(e, t, n, r, s, l) {
  return W(), ne("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-deselect-all"))
  }, Fe(e.$t("deselectAll")), 1);
}
const dl = /* @__PURE__ */ Ne(Nr, [["render", Lr]]), Or = {
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
}, Tr = ["placeholder"];
function br(e, t, n, r, s, l) {
  return Oe((W(), ne("input", {
    type: "text",
    "onUpdate:modelValue": t[0] || (t[0] = (a) => s.inputVal = a),
    placeholder: s.thePlaceholder
  }, null, 8, Tr)), [
    [rr, s.inputVal]
  ]);
}
const ml = /* @__PURE__ */ Ne(Or, [["render", br]]), Ir = {
  name: "v-no-results",
  display: "No results",
  methods: {}
}, Sr = { class: "no-results" };
function Ar(e, t, n, r, s, l) {
  return W(), ne("li", Sr, [
    Q("span", null, Fe(e.$t("searchNoResult")), 1)
  ]);
}
const yr = /* @__PURE__ */ Ne(Ir, [["render", Ar]]), Pr = {
  name: "v-no-selection",
  display: "No selection",
  methods: {}
}, Cr = { class: "no-selection" };
function Rr(e, t, n, r, s, l) {
  return W(), ne("li", Cr, [
    Q("span", null, Fe(e.$t("searchParentSelected")), 1)
  ]);
}
const Dr = /* @__PURE__ */ Ne(Pr, [["render", Rr]]), kr = {
  name: "v-list",
  display: "List",
  mounted() {
  },
  components: {
    "v-no-results": yr,
    "v-no-selection": Dr
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
}, Mr = { class: "vss-list-ul" }, Fr = ["onClick"], Ur = { style: {} }, wr = {
  key: 0,
  class: "vss-list-badge"
}, Vr = { key: 0 }, $r = ["onClick"];
function Wr(e, t, n, r, s, l) {
  const a = fe("v-no-results"), o = fe("v-no-selection");
  return W(), ne("ul", Mr, [
    (W(!0), ne(Dt, null, Nn(n.items, (i, f) => Oe((W(), ne("li", {
      key: f,
      onClick: (h) => n.hasChildren ? !1 : l.toggleItem(i, {}, i.selected),
      class: Ln(l.liClass(i, n.hasChildren))
    }, [
      Q("span", Ur, [
        sr(Fe(i.label) + " ", 1),
        l.showCounter(i) ? (W(), ne("small", wr, Fe(i.totalChildrenSelected), 1)) : re("", !0)
      ]),
      n.hasChildren ? (W(), ne("ul", Vr, [
        (W(!0), ne(Dt, null, Nn(i.children, (h, v) => Oe((W(), ne("li", {
          key: `${f}-${v}`,
          onClick: (m) => l.toggleItem(h, i, h.selected),
          class: Ln(l.liClass(h, !1))
        }, [
          Q("span", null, Fe(h.label), 1)
        ], 10, $r)), [
          [Ce, h.visible]
        ])), 128)),
        Oe(Se(a, null, null, 512), [
          [Ce, l.totalItems(i.children) === 0]
        ])
      ])) : re("", !0)
    ], 10, Fr)), [
      [Ce, l.showParent(i)]
    ])), 128)),
    Oe(Se(o, null, null, 512), [
      [Ce, l.showNoSelection(n.items)]
    ]),
    Oe(Se(a, null, null, 512), [
      [Ce, l.showNoResultParent(n.items)]
    ])
  ]);
}
const pl = /* @__PURE__ */ Ne(kr, [["render", Wr]]), Gr = {
  name: "v-separator",
  display: "Separator"
}, Hr = { class: "vss-span" };
function Br(e, t, n, r, s, l) {
  return W(), ne("div", Hr, " ‹ › ");
}
const hl = /* @__PURE__ */ Ne(Gr, [["render", Br]]), Yr = {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
}, xr = ["title"];
function jr(e, t, n, r, s, l) {
  return W(), ne("span", {
    title: e.$t("totalSelected")
  }, Fe(n.value), 9, xr);
}
const El = /* @__PURE__ */ Ne(Yr, [["render", jr]]), gl = {
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
}, Kr = {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [gl],
  components: {
    "v-select-all": _l,
    "v-deselect-all": dl,
    "v-search": ml,
    "v-separator": hl,
    "v-list": pl,
    "v-total": El
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
      let r = be(this.dataSelected);
      Object.keys(t).length > 0 ? (r[t.value] === void 0 && t.visible && (r[t.value] = []), n ? e.visible && r[t.value].indexOf(e.value) === -1 && r[t.value].push(e.value) : e.visible && (r[t.value] = fl(
        r[t.value],
        e.value
      ))) : n ? r[e.value] === void 0 && (r[e.value] = []) : delete r[e.value], this.dataSelected = r;
    },
    prepareList() {
      let e = this, t = {};
      e.dataListOriginal = be(e.list);
      let n = Object.keys(e.modelValue), r = e.list.filter((s) => {
        let l = s.value, a = n.indexOf(l) >= 0;
        return a ? (s.selectedDefault = !0, t[l] = []) : s.selectedDefault = !1, s.children && s.children.filter((o) => {
          let i = o.value;
          a && (e.modelValue[l].indexOf(i) >= 0 ? (o.selectedDefault = !0, t[l].push(i)) : o.selectedDefault = !1);
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
      let e = this, t = Me(this.searchL), n = Object.keys(this.dataSelected), r = be(this.listLeft);
      return r = r.filter((s) => {
        let l = Me(s.label);
        return n.indexOf(s.value) >= 0 ? s.selected = !0 : s.selected = !1, l.includes(t) ? s.visible = !0 : s.visible = !1, s.children ? (s.children = s.children.map((a) => (a.selected = !1, e.dataSelected[s.value] !== void 0 && (e.dataSelected[s.value].indexOf(a.value) >= 0 ? a.selected = !0 : a.selected = !1), a)), s.totalChildrenSelected = s.children.filter(function(a) {
          return a.selected === !0;
        }).length, s.children) : s;
      }), r;
    },
    filteredListR() {
      let e = this, t = Me(e.searchR), n = be(this.listLeft);
      return n = e.listRight.filter(function(s) {
        return s.children ? (s.children = s.children.map((l) => (Me(l.label).includes(t) ? l.visible = !0 : l.visible = !1, e.dataSelected[s.value] !== void 0 && (e.dataSelected[s.value].indexOf(l.value) >= 0 ? l.selected = !0 : l.selected = !1), l)), s.children) : s;
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
}, Xr = { class: "vss-list" }, Jr = { class: "vss-inner-list" }, Qr = { class: "vss-footer" }, qr = { class: "vss-footer-bg" }, Zr = {
  key: 1,
  class: "vss-footer-separator"
}, zr = { class: "vss-list" }, es = { class: "vss-inner-list" }, ts = { class: "vss-footer" }, ns = { class: "vss-footer-bg" }, ls = {
  key: 1,
  class: "vss-footer-separator"
};
function rs(e, t, n, r, s, l) {
  const a = fe("v-search"), o = fe("v-list"), i = fe("v-select-all"), f = fe("v-deselect-all"), h = fe("v-total"), v = fe("v-separator");
  return W(), ne("div", null, [
    Q("div", Xr, [
      Q("div", Jr, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: s.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchL = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Se(o, {
          "has-children": !1,
          type: e.type,
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Oe(Q("div", Qr, [
          Q("div", qr, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(i, {
                key: 0,
                items: s.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : re("", !0),
              e.toggleAll ? (W(), ne("div", Zr, "/")) : re("", !0),
              e.toggleAll ? (W(), ue(f, {
                key: 2,
                items: s.listLeft,
                onUpdateDeselectAll: l.updateLeftDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : re("", !0)
            ]),
            e.total ? (W(), ue(h, {
              key: 0,
              value: Object.keys(s.dataSelected).length
            }, null, 8, ["value"])) : re("", !0)
          ])
        ], 512), [
          [Ce, e.toggleAll || e.total]
        ])
      ])
    ]),
    Se(v),
    Q("div", zr, [
      Q("div", es, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: s.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (m) => s.searchR = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Se(o, {
          "has-children": !0,
          type: e.type,
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Oe(Q("div", ts, [
          Q("div", ns, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(i, {
                key: 0,
                items: s.listRight,
                onUpdateSelectAll: l.updateRightSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : re("", !0),
              e.toggleAll ? (W(), ne("div", ls, "/")) : re("", !0),
              e.toggleAll ? (W(), ue(f, {
                key: 2,
                items: s.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : re("", !0)
            ]),
            e.total ? (W(), ue(h, {
              key: 0,
              value: l.totalChildrenSelected
            }, null, 8, ["value"])) : re("", !0)
          ])
        ], 512), [
          [Ce, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const ss = /* @__PURE__ */ Ne(Kr, [["render", rs]]), as = {
  name: "mirror-select-sides",
  display: "Mirror select sides",
  mixins: [gl],
  components: {
    "v-select-all": _l,
    "v-deselect-all": dl,
    "v-search": ml,
    "v-separator": hl,
    "v-list": pl,
    "v-total": El
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
      let r = be(this.dataSelected);
      n ? r.push(e.value) : r = fl(r, e.value), this.dataSelected = r;
    },
    prepareList() {
      this.dataListOriginal = be(this.list);
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
      let e = Me(this.searchL), t = this.dataSelected, n = be(this.listLeft);
      return n = n.filter((r) => {
        let s = Me(r.label);
        return t.indexOf(r.value) >= 0 ? (r.selected = !0, r.visible = !1) : (r.selected = !1, r.visible = !0), s.includes(e) && r.visible === !0 ? r.visible = !0 : r.visible = !1, r;
      }), n;
    },
    filteredListR() {
      let e = this, t = Me(e.searchR), n = this.dataSelected, r = be(e.listLeft);
      return r = r.filter((s) => {
        let l = Me(s.label);
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
}, os = { class: "vss-list" }, is = { class: "vss-inner-list" }, cs = { class: "vss-footer" }, us = { class: "vss-footer-bg" }, fs = { class: "vss-list" }, _s = { class: "vss-inner-list" }, ds = { class: "vss-footer" }, ms = { class: "vss-footer-bg" };
function ps(e, t, n, r, s, l) {
  const a = fe("v-search"), o = fe("v-list"), i = fe("v-select-all"), f = fe("v-total"), h = fe("v-separator"), v = fe("v-deselect-all");
  return W(), ne("div", null, [
    Q("div", os, [
      Q("div", is, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: s.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchL = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Se(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "left",
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Oe(Q("div", cs, [
          Q("div", us, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(i, {
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
          [Ce, e.toggleAll || e.total]
        ])
      ])
    ]),
    Se(h),
    Q("div", fs, [
      Q("div", _s, [
        e.search ? (W(), ue(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: s.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (m) => s.searchR = m)
        }, null, 8, ["placeholder", "modelValue"])) : re("", !0),
        Se(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "right",
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Oe(Q("div", ds, [
          Q("div", ms, [
            Q("div", null, [
              e.toggleAll ? (W(), ue(v, {
                key: 0,
                items: s.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : re("", !0)
            ])
          ])
        ], 512), [
          [Ce, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const hs = /* @__PURE__ */ Ne(as, [["render", ps]]), Es = {
  // i18n,
  name: "vue-select-sides",
  display: "Core select sides",
  components: {
    "mirror-select-sides": hs,
    "grouped-select-sides": ss
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
      this.listClone = be(e);
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
    this.setDefaultParams(), this.listClone = be(this.list);
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
function gs(e, t, n, r, s, l) {
  return W(), ue(ar(l.getComponent()), {
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
const vl = /* @__PURE__ */ Ne(Es, [["render", gs]]), vs = "Vybrat vše ", Ns = "Odebrat vše ", Ls = "Hledej...", Os = "Žádný výsledek...", Ts = "Nic není vybráno...", bs = "Spolu vybrané", Is = {
  selectAll: vs,
  deselectAll: Ns,
  searchPlaceholder: Ls,
  searchNoResult: Os,
  searchParentSelected: Ts,
  totalSelected: bs
}, Ss = "Select all", As = "Deselect all", ys = "Search...", Ps = "No result...", Cs = "No items selected...", Rs = "Total items selected", Ds = {
  selectAll: Ss,
  deselectAll: As,
  searchPlaceholder: ys,
  searchNoResult: Ps,
  searchParentSelected: Cs,
  totalSelected: Rs
}, ks = "Seleccionar todos", Ms = "Deseleccionar todos", Fs = "Buscar...", Us = "Sin resultados...", ws = "Ningún elemento seleccionado...", Vs = "Elementos seleccionados", $s = {
  selectAll: ks,
  deselectAll: Ms,
  searchPlaceholder: Fs,
  searchNoResult: Us,
  searchParentSelected: ws,
  totalSelected: Vs
}, Ws = "Ajouter tout", Gs = "Supprimer tout", Hs = "Recherche...", Bs = "Pas de résultat...", Ys = "Sélection vide...", xs = "Éléments sélectionnés", js = {
  selectAll: Ws,
  deselectAll: Gs,
  searchPlaceholder: Hs,
  searchNoResult: Bs,
  searchParentSelected: Ys,
  totalSelected: xs
}, Ks = "Wybierz wszystko", Xs = "Wyczyść zaznaczenie", Js = "Szukaj...", Qs = "Brak wyników...", qs = "Nie wybrano żadnych elementów...", Zs = "Liczba wybranych elementów", zs = {
  selectAll: Ks,
  deselectAll: Xs,
  searchPlaceholder: Js,
  searchNoResult: Qs,
  searchParentSelected: qs,
  totalSelected: Zs
}, ea = "Selecionar todos", ta = "Remover todos", na = "Pesquisar...", la = "Sem nenhum resultado...", ra = "Nenhum item selecionado...", sa = "Total de itens selecionados", aa = {
  selectAll: ea,
  deselectAll: ta,
  searchPlaceholder: na,
  searchNoResult: la,
  searchParentSelected: ra,
  totalSelected: sa
}, oa = "Vybrať všetko", ia = "Odobrať všetko", ca = "Hľadaj...", ua = "Žiadny výsledok...", fa = "Nič nie je vybrané...", _a = "Spolu vybrané", da = {
  selectAll: oa,
  deselectAll: ia,
  searchPlaceholder: ca,
  searchNoResult: ua,
  searchParentSelected: fa,
  totalSelected: _a
}, ma = "Hepsini Seç", pa = "Hepsini Çıkar", ha = "Ara...", Ea = "Sonuç Bulunamadı...", ga = "Hiçbiri Seçilmedi...", va = "Hepsi Seçildi", Na = {
  selectAll: ma,
  deselectAll: pa,
  searchPlaceholder: ha,
  searchNoResult: Ea,
  searchParentSelected: ga,
  totalSelected: va
};
/*!
  * shared v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const ve = typeof window < "u";
let me, Ye;
if (process.env.NODE_ENV !== "production") {
  const e = ve && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (me = (t) => {
    e.mark(t);
  }, Ye = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const La = /\{([0-9a-zA-Z]+)\}/g;
function cn(e, ...t) {
  return t.length === 1 && w(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(La, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Ae = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Oa = (e, t, n) => Ta({ l: e, k: t, s: n }), Ta = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), z = (e) => typeof e == "number" && isFinite(e), ba = (e) => Ll(e) === "[object Date]", Ue = (e) => Ll(e) === "[object RegExp]", Ut = (e) => F(e) && Object.keys(e).length === 0, se = Object.assign, Ia = Object.create, x = (e = null) => Ia(e);
let bn;
const Re = () => bn || (bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : x());
function In(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Sa = Object.prototype.hasOwnProperty;
function ge(e, t) {
  return Sa.call(e, t);
}
const X = Array.isArray, Y = (e) => typeof e == "function", C = (e) => typeof e == "string", U = (e) => typeof e == "boolean", w = (e) => e !== null && typeof e == "object", Aa = (e) => w(e) && Y(e.then) && Y(e.catch), Nl = Object.prototype.toString, Ll = (e) => Nl.call(e), F = (e) => {
  if (!w(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, ya = (e) => e == null ? "" : X(e) || F(e) && e.toString === Nl ? JSON.stringify(e, null, 2) : String(e);
function Pa(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Sn = 2;
function Ca(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const l = [];
  for (let a = 0; a < r.length; a++)
    if (s += r[a].length + 1, s >= t) {
      for (let o = a - Sn; o <= a + Sn || n > s; o++) {
        if (o < 0 || o >= r.length)
          continue;
        const i = o + 1;
        l.push(`${i}${" ".repeat(3 - String(i).length)}|  ${r[o]}`);
        const f = r[o].length;
        if (o === a) {
          const h = t - (s - f) + 1, v = Math.max(1, n > s ? f - h : n - t);
          l.push("   |  " + " ".repeat(h) + "^".repeat(v));
        } else if (o > a) {
          if (n > s) {
            const h = Math.max(Math.min(n - s, f), 1);
            l.push("   |  " + "^".repeat(h));
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
function ee(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const An = {};
function Ol(e) {
  An[e] || (An[e] = !0, ee(e));
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
const Pt = (e) => !w(e) || X(e);
function Rt(e, t) {
  if (Pt(e) || Pt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((l) => {
      l !== "__proto__" && (w(r[l]) && !w(s[l]) && (s[l] = Array.isArray(r[l]) ? [] : x()), Pt(s[l]) || Pt(r[l]) ? s[l] = r[l] : n.push({ src: r[l], des: s[l] }));
    });
  }
}
/*!
  * message-compiler v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ra(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Mt(e, t, n) {
  return { start: e, end: t };
}
const Da = /\{([0-9a-zA-Z]+)\}/g;
function Tl(e, ...t) {
  return t.length === 1 && ka(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Da, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const bl = Object.assign, yn = (e) => typeof e == "string", ka = (e) => e !== null && typeof e == "object";
function Il(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Vt = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Ma = {
  [Vt.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Fa(e, t, ...n) {
  const r = Tl(Ma[e], ...n || []), s = { message: String(r), code: e };
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
}, Ua = {
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
  const { domain: r, messages: s, args: l } = n, a = Tl((s || Ua)[e] || "", ...l || []), o = new SyntaxError(String(a));
  return o.code = e, t && (o.location = t), o.domain = r, o;
}
function wa(e) {
  throw e;
}
const Va = /<\/?[\w\s="/.':;#-\/]+>/, $a = (e) => Va.test(e), ye = " ", Wa = "\r", oe = `
`, Ga = "\u2028", Ha = "\u2029";
function Ba(e) {
  const t = e;
  let n = 0, r = 1, s = 1, l = 0;
  const a = (S) => t[S] === Wa && t[S + 1] === oe, o = (S) => t[S] === oe, i = (S) => t[S] === Ha, f = (S) => t[S] === Ga, h = (S) => a(S) || o(S) || i(S) || f(S), v = () => n, m = () => r, T = () => s, d = () => l, E = (S) => a(S) || i(S) || f(S) ? oe : t[S], N = () => E(n), y = () => E(n + l);
  function R() {
    return l = 0, h(n) && (r++, s = 0), a(n) && n++, n++, s++, t[n];
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
  function L() {
    const S = n + l;
    for (; S !== n; )
      R();
    l = 0;
  }
  return {
    index: v,
    line: m,
    column: T,
    peekOffset: d,
    charAt: E,
    currentChar: N,
    currentPeek: y,
    next: R,
    peek: _,
    reset: g,
    resetPeek: I,
    skipToPeek: L
  };
}
const ke = void 0, Ya = ".", Pn = "'", xa = "tokenizer";
function ja(e, t = {}) {
  const n = t.location !== !1, r = Ba(e), s = () => r.index(), l = () => Ra(r.line(), r.column(), r.index()), a = l(), o = s(), i = {
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
  }, f = () => i, { onError: h } = t;
  function v(c, u, O, ...k) {
    const J = f();
    if (u.column += O, u.offset += O, h) {
      const j = n ? Mt(J.startLoc, u) : null, B = lt(c, j, {
        domain: xa,
        args: k
      });
      h(B);
    }
  }
  function m(c, u, O) {
    c.endLoc = l(), c.currentType = u;
    const k = { type: u };
    return n && (k.loc = Mt(c.startLoc, c.endLoc)), O != null && (k.value = O), k;
  }
  const T = (c) => m(
    c,
    14
    /* TokenTypes.EOF */
  );
  function d(c, u) {
    return c.currentChar() === u ? (c.next(), u) : (v(M.EXPECTED_TOKEN, l(), 0, u), "");
  }
  function E(c) {
    let u = "";
    for (; c.currentPeek() === ye || c.currentPeek() === oe; )
      u += c.currentPeek(), c.peek();
    return u;
  }
  function N(c) {
    const u = E(c);
    return c.skipToPeek(), u;
  }
  function y(c) {
    if (c === ke)
      return !1;
    const u = c.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function R(c) {
    if (c === ke)
      return !1;
    const u = c.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function _(c, u) {
    const { currentType: O } = u;
    if (O !== 2)
      return !1;
    E(c);
    const k = y(c.currentPeek());
    return c.resetPeek(), k;
  }
  function g(c, u) {
    const { currentType: O } = u;
    if (O !== 2)
      return !1;
    E(c);
    const k = c.currentPeek() === "-" ? c.peek() : c.currentPeek(), J = R(k);
    return c.resetPeek(), J;
  }
  function I(c, u) {
    const { currentType: O } = u;
    if (O !== 2)
      return !1;
    E(c);
    const k = c.currentPeek() === Pn;
    return c.resetPeek(), k;
  }
  function L(c, u) {
    const { currentType: O } = u;
    if (O !== 8)
      return !1;
    E(c);
    const k = c.currentPeek() === ".";
    return c.resetPeek(), k;
  }
  function S(c, u) {
    const { currentType: O } = u;
    if (O !== 9)
      return !1;
    E(c);
    const k = y(c.currentPeek());
    return c.resetPeek(), k;
  }
  function D(c, u) {
    const { currentType: O } = u;
    if (!(O === 8 || O === 12))
      return !1;
    E(c);
    const k = c.currentPeek() === ":";
    return c.resetPeek(), k;
  }
  function A(c, u) {
    const { currentType: O } = u;
    if (O !== 10)
      return !1;
    const k = () => {
      const j = c.currentPeek();
      return j === "{" ? y(c.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === ye || !j ? !1 : j === oe ? (c.peek(), k()) : V(c, !1);
    }, J = k();
    return c.resetPeek(), J;
  }
  function K(c) {
    E(c);
    const u = c.currentPeek() === "|";
    return c.resetPeek(), u;
  }
  function de(c) {
    const u = E(c), O = c.currentPeek() === "%" && c.peek() === "{";
    return c.resetPeek(), {
      isModulo: O,
      hasSpace: u.length > 0
    };
  }
  function V(c, u = !0) {
    const O = (J = !1, j = "", B = !1) => {
      const p = c.currentPeek();
      return p === "{" ? j === "%" ? !1 : J : p === "@" || !p ? j === "%" ? !0 : J : p === "%" ? (c.peek(), O(J, "%", !0)) : p === "|" ? j === "%" || B ? !0 : !(j === ye || j === oe) : p === ye ? (c.peek(), O(!0, ye, B)) : p === oe ? (c.peek(), O(!0, oe, B)) : !0;
    }, k = O();
    return u && c.resetPeek(), k;
  }
  function ae(c, u) {
    const O = c.currentChar();
    return O === ke ? ke : u(O) ? (c.next(), O) : null;
  }
  function rt(c) {
    const u = c.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function st(c) {
    return ae(c, rt);
  }
  function Le(c) {
    const u = c.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function at(c) {
    return ae(c, Le);
  }
  function ot(c) {
    const u = c.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function it(c) {
    return ae(c, ot);
  }
  function ct(c) {
    const u = c.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function ut(c) {
    return ae(c, ct);
  }
  function pe(c) {
    let u = "", O = "";
    for (; u = it(c); )
      O += u;
    return O;
  }
  function Ke(c) {
    N(c);
    const u = c.currentChar();
    return u !== "%" && v(M.EXPECTED_TOKEN, l(), 0, u), c.next(), "%";
  }
  function Xe(c) {
    let u = "";
    for (; ; ) {
      const O = c.currentChar();
      if (O === "{" || O === "}" || O === "@" || O === "|" || !O)
        break;
      if (O === "%")
        if (V(c))
          u += O, c.next();
        else
          break;
      else if (O === ye || O === oe)
        if (V(c))
          u += O, c.next();
        else {
          if (K(c))
            break;
          u += O, c.next();
        }
      else
        u += O, c.next();
    }
    return u;
  }
  function ft(c) {
    N(c);
    let u = "", O = "";
    for (; u = at(c); )
      O += u;
    return c.currentChar() === ke && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), O;
  }
  function _t(c) {
    N(c);
    let u = "";
    return c.currentChar() === "-" ? (c.next(), u += `-${pe(c)}`) : u += pe(c), c.currentChar() === ke && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u;
  }
  function dt(c) {
    return c !== Pn && c !== oe;
  }
  function At(c) {
    N(c), d(c, "'");
    let u = "", O = "";
    for (; u = ae(c, dt); )
      u === "\\" ? O += mt(c) : O += u;
    const k = c.currentChar();
    return k === oe || k === ke ? (v(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), k === oe && (c.next(), d(c, "'")), O) : (d(c, "'"), O);
  }
  function mt(c) {
    const u = c.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return c.next(), `\\${u}`;
      case "u":
        return Je(c, u, 4);
      case "U":
        return Je(c, u, 6);
      default:
        return v(M.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, u), "";
    }
  }
  function Je(c, u, O) {
    d(c, u);
    let k = "";
    for (let J = 0; J < O; J++) {
      const j = ut(c);
      if (!j) {
        v(M.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${u}${k}${c.currentChar()}`);
        break;
      }
      k += j;
    }
    return `\\${u}${k}`;
  }
  function pt(c) {
    return c !== "{" && c !== "}" && c !== ye && c !== oe;
  }
  function ht(c) {
    N(c);
    let u = "", O = "";
    for (; u = ae(c, pt); )
      O += u;
    return O;
  }
  function Et(c) {
    let u = "", O = "";
    for (; u = st(c); )
      O += u;
    return O;
  }
  function P(c) {
    const u = (O) => {
      const k = c.currentChar();
      return k === "{" || k === "%" || k === "@" || k === "|" || k === "(" || k === ")" || !k || k === ye ? O : (O += k, c.next(), u(O));
    };
    return u("");
  }
  function G(c) {
    N(c);
    const u = d(
      c,
      "|"
      /* TokenChars.Pipe */
    );
    return N(c), u;
  }
  function gt(c, u) {
    let O = null;
    switch (c.currentChar()) {
      case "{":
        return u.braceNest >= 1 && v(M.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), c.next(), O = m(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), N(c), u.braceNest++, O;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && v(M.EMPTY_PLACEHOLDER, l(), 0), c.next(), O = m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && N(c), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), O;
      case "@":
        return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), O = We(c, u) || T(u), u.braceNest = 0, O;
      default: {
        let J = !0, j = !0, B = !0;
        if (K(c))
          return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), O = m(u, 1, G(c)), u.braceNest = 0, u.inLinked = !1, O;
        if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7))
          return v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u.braceNest = 0, vt(c, u);
        if (J = _(c, u))
          return O = m(u, 5, ft(c)), N(c), O;
        if (j = g(c, u))
          return O = m(u, 6, _t(c)), N(c), O;
        if (B = I(c, u))
          return O = m(u, 7, At(c)), N(c), O;
        if (!J && !j && !B)
          return O = m(u, 13, ht(c)), v(M.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, O.value), N(c), O;
        break;
      }
    }
    return O;
  }
  function We(c, u) {
    const { currentType: O } = u;
    let k = null;
    const J = c.currentChar();
    switch ((O === 8 || O === 9 || O === 12 || O === 10) && (J === oe || J === ye) && v(M.INVALID_LINKED_FORMAT, l(), 0), J) {
      case "@":
        return c.next(), k = m(
          u,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, k;
      case ".":
        return N(c), c.next(), m(
          u,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return N(c), c.next(), m(
          u,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return K(c) ? (k = m(u, 1, G(c)), u.braceNest = 0, u.inLinked = !1, k) : L(c, u) || D(c, u) ? (N(c), We(c, u)) : S(c, u) ? (N(c), m(u, 12, Et(c))) : A(c, u) ? (N(c), J === "{" ? gt(c, u) || k : m(u, 11, P(c))) : (O === 8 && v(M.INVALID_LINKED_FORMAT, l(), 0), u.braceNest = 0, u.inLinked = !1, vt(c, u));
    }
  }
  function vt(c, u) {
    let O = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return gt(c, u) || T(u);
    if (u.inLinked)
      return We(c, u) || T(u);
    switch (c.currentChar()) {
      case "{":
        return gt(c, u) || T(u);
      case "}":
        return v(M.UNBALANCED_CLOSING_BRACE, l(), 0), c.next(), m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return We(c, u) || T(u);
      default: {
        if (K(c))
          return O = m(u, 1, G(c)), u.braceNest = 0, u.inLinked = !1, O;
        const { isModulo: J, hasSpace: j } = de(c);
        if (J)
          return j ? m(u, 0, Xe(c)) : m(u, 4, Ke(c));
        if (V(c))
          return m(u, 0, Xe(c));
        break;
      }
    }
    return O;
  }
  function Ht() {
    const { currentType: c, offset: u, startLoc: O, endLoc: k } = i;
    return i.lastType = c, i.lastOffset = u, i.lastStartLoc = O, i.lastEndLoc = k, i.offset = s(), i.startLoc = l(), r.currentChar() === ke ? m(
      i,
      14
      /* TokenTypes.EOF */
    ) : vt(r, i);
  }
  return {
    nextToken: Ht,
    currentOffset: s,
    currentPosition: l,
    context: f
  };
}
const Ka = "parser", Xa = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ja(e, t, n) {
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
function Qa(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function s(_, g, I, L, ...S) {
    const D = _.currentPosition();
    if (D.offset += L, D.column += L, n) {
      const A = t ? Mt(I, D) : null, K = lt(g, A, {
        domain: Ka,
        args: S
      });
      n(K);
    }
  }
  function l(_, g, I, L, ...S) {
    const D = _.currentPosition();
    if (D.offset += L, D.column += L, r) {
      const A = t ? Mt(I, D) : null;
      r(Fa(g, A, S));
    }
  }
  function a(_, g, I) {
    const L = { type: _ };
    return t && (L.start = g, L.end = g, L.loc = { start: I, end: I }), L;
  }
  function o(_, g, I, L) {
    t && (_.end = g, _.loc && (_.loc.end = I));
  }
  function i(_, g) {
    const I = _.context(), L = a(3, I.offset, I.startLoc);
    return L.value = g, o(L, _.currentOffset(), _.currentPosition()), L;
  }
  function f(_, g) {
    const I = _.context(), { lastOffset: L, lastStartLoc: S } = I, D = a(5, L, S);
    return D.index = parseInt(g, 10), _.nextToken(), o(D, _.currentOffset(), _.currentPosition()), D;
  }
  function h(_, g, I) {
    const L = _.context(), { lastOffset: S, lastStartLoc: D } = L, A = a(4, S, D);
    return A.key = g, I === !0 && (A.modulo = !0), _.nextToken(), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function v(_, g) {
    const I = _.context(), { lastOffset: L, lastStartLoc: S } = I, D = a(9, L, S);
    return D.value = g.replace(Xa, Ja), _.nextToken(), o(D, _.currentOffset(), _.currentPosition()), D;
  }
  function m(_) {
    const g = _.nextToken(), I = _.context(), { lastOffset: L, lastStartLoc: S } = I, D = a(8, L, S);
    return g.type !== 12 ? (s(_, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), D.value = "", o(D, L, S), {
      nextConsumeToken: g,
      node: D
    }) : (g.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ee(g)), D.value = g.value || "", o(D, _.currentOffset(), _.currentPosition()), {
      node: D
    });
  }
  function T(_, g) {
    const I = _.context(), L = a(7, I.offset, I.startLoc);
    return L.value = g, o(L, _.currentOffset(), _.currentPosition()), L;
  }
  function d(_) {
    const g = _.context(), I = a(6, g.offset, g.startLoc);
    let L = _.nextToken();
    if (L.type === 9) {
      const S = m(_);
      I.modifier = S.node, L = S.nextConsumeToken || _.nextToken();
    }
    switch (L.type !== 10 && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(L)), L = _.nextToken(), L.type === 2 && (L = _.nextToken()), L.type) {
      case 11:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(L)), I.key = T(_, L.value || "");
        break;
      case 5:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(L)), I.key = h(_, L.value || "");
        break;
      case 6:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(L)), I.key = f(_, L.value || "");
        break;
      case 7:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(L)), I.key = v(_, L.value || "");
        break;
      default: {
        s(_, M.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const S = _.context(), D = a(7, S.offset, S.startLoc);
        return D.value = "", o(D, S.offset, S.startLoc), I.key = D, o(I, S.offset, S.startLoc), {
          nextConsumeToken: L,
          node: I
        };
      }
    }
    return o(I, _.currentOffset(), _.currentPosition()), {
      node: I
    };
  }
  function E(_) {
    const g = _.context(), I = g.currentType === 1 ? _.currentOffset() : g.offset, L = g.currentType === 1 ? g.endLoc : g.startLoc, S = a(2, I, L);
    S.items = [];
    let D = null, A = null;
    do {
      const V = D || _.nextToken();
      switch (D = null, V.type) {
        case 0:
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(V)), S.items.push(i(_, V.value || ""));
          break;
        case 6:
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(V)), S.items.push(f(_, V.value || ""));
          break;
        case 4:
          A = !0;
          break;
        case 5:
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(V)), S.items.push(h(_, V.value || "", !!A)), A && (l(_, Vt.USE_MODULO_SYNTAX, g.lastStartLoc, 0, Ee(V)), A = null);
          break;
        case 7:
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ee(V)), S.items.push(v(_, V.value || ""));
          break;
        case 8: {
          const ae = d(_);
          S.items.push(ae.node), D = ae.nextConsumeToken || null;
          break;
        }
      }
    } while (g.currentType !== 14 && g.currentType !== 1);
    const K = g.currentType === 1 ? g.lastOffset : _.currentOffset(), de = g.currentType === 1 ? g.lastEndLoc : _.currentPosition();
    return o(S, K, de), S;
  }
  function N(_, g, I, L) {
    const S = _.context();
    let D = L.items.length === 0;
    const A = a(1, g, I);
    A.cases = [], A.cases.push(L);
    do {
      const K = E(_);
      D || (D = K.items.length === 0), A.cases.push(K);
    } while (S.currentType !== 14);
    return D && s(_, M.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function y(_) {
    const g = _.context(), { offset: I, startLoc: L } = g, S = E(_);
    return g.currentType === 14 ? S : N(_, I, L, S);
  }
  function R(_) {
    const g = ja(_, bl({}, e)), I = g.context(), L = a(0, I.offset, I.startLoc);
    return t && L.loc && (L.loc.source = _), L.body = y(g), e.onCacheKey && (L.cacheKey = e.onCacheKey(_)), I.currentType !== 14 && s(g, M.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, _[I.offset] || ""), o(L, g.currentOffset(), g.currentPosition()), L;
  }
  return { parse: R };
}
function Ee(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function qa(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function Cn(e, t) {
  for (let n = 0; n < e.length; n++)
    fn(e[n], t);
}
function fn(e, t) {
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
function Za(e, t = {}) {
  const n = qa(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && fn(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function za(e) {
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
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = Il(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const eo = "minifier";
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
        domain: eo,
        args: [e.type]
      });
  }
  delete e.type;
}
const to = "parser";
function no(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: l } = t, a = t.location !== !1, o = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: l,
    indentLevel: 0
  };
  a && e.loc && (o.source = e.loc.source);
  const i = () => o;
  function f(N, y) {
    o.code += N;
  }
  function h(N, y = !0) {
    const R = y ? s : "";
    f(l ? R + "  ".repeat(N) : R);
  }
  function v(N = !0) {
    const y = ++o.indentLevel;
    N && h(y);
  }
  function m(N = !0) {
    const y = --o.indentLevel;
    N && h(y);
  }
  function T() {
    h(o.indentLevel);
  }
  return {
    context: i,
    push: f,
    indent: v,
    deindent: m,
    newline: T,
    helper: (N) => `_${N}`,
    needIndent: () => o.needIndent
  };
}
function lo(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tt(e, t.key), t.modifier ? (e.push(", "), tt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ro(e, t) {
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
function so(e, t) {
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
function ao(e, t) {
  t.body ? tt(e, t.body) : e.push("null");
}
function tt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ao(e, t);
      break;
    case 1:
      so(e, t);
      break;
    case 2:
      ro(e, t);
      break;
    case 6:
      lo(e, t);
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
        domain: to,
        args: [t.type]
      });
  }
}
const oo = (e, t = {}) => {
  const n = yn(t.mode) ? t.mode : "normal", r = yn(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, l = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], i = no(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: l,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), o.length > 0 && (i.push(`const { ${Il(o.map((v) => `${v}: _${v}`), ", ")} } = ctx`), i.newline()), i.push("return "), tt(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: f, map: h } = i.context();
  return {
    ast: e,
    code: f,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function io(e, t = {}) {
  const n = bl({}, t), r = !!n.jit, s = !!n.minify, l = n.optimize == null ? !0 : n.optimize, o = Qa(n).parse(e);
  return r ? (l && za(o), s && ze(o), { ast: o, code: "" }) : (Za(o, n), oo(o, n));
}
/*!
  * core-base v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function co() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Re().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Re().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Re().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ve = [];
Ve[
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
Ve[
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
Ve[
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
Ve[
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
Ve[
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
Ve[
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
Ve[
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
const uo = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function fo(e) {
  return uo.test(e);
}
function _o(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function mo(e) {
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
function po(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : fo(t) ? _o(t) : "*" + t;
}
function ho(e) {
  const t = [];
  let n = -1, r = 0, s = 0, l, a, o, i, f, h, v;
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
      if (s = 0, a === void 0 || (a = po(a), a === !1))
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
      if (i = mo(l), v = Ve[r], f = v[i] || v.l || 8, f === 8 || (r = f[0], f[1] !== void 0 && (h = m[f[1]], h && (o = l, h() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Dn = /* @__PURE__ */ new Map();
function Eo(e, t) {
  return w(e) ? e[t] : null;
}
function go(e, t) {
  if (!w(e))
    return null;
  let n = Dn.get(t);
  if (n || (n = ho(t), n && Dn.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, l = 0;
  for (; l < r; ) {
    const a = s[n[l]];
    if (a === void 0 || Y(s))
      return null;
    s = a, l++;
  }
  return s;
}
const vo = (e) => e, No = (e) => "", Lo = "text", Oo = (e) => e.length === 0 ? "" : Pa(e), To = ya;
function kn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function bo(e) {
  const t = z(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (z(e.named.count) || z(e.named.n)) ? z(e.named.count) ? e.named.count : z(e.named.n) ? e.named.n : t : t;
}
function Io(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function So(e = {}) {
  const t = e.locale, n = bo(e), r = w(e.pluralRules) && C(t) && Y(e.pluralRules[t]) ? e.pluralRules[t] : kn, s = w(e.pluralRules) && C(t) && Y(e.pluralRules[t]) ? kn : void 0, l = (y) => y[r(n, y.length, s)], a = e.list || [], o = (y) => a[y], i = e.named || x();
  z(e.pluralIndex) && Io(n, i);
  const f = (y) => i[y];
  function h(y) {
    const R = Y(e.messages) ? e.messages(y) : w(e.messages) ? e.messages[y] : !1;
    return R || (e.parent ? e.parent.message(y) : No);
  }
  const v = (y) => e.modifiers ? e.modifiers[y] : vo, m = F(e.processor) && Y(e.processor.normalize) ? e.processor.normalize : Oo, T = F(e.processor) && Y(e.processor.interpolate) ? e.processor.interpolate : To, d = F(e.processor) && C(e.processor.type) ? e.processor.type : Lo, N = {
    list: o,
    named: f,
    plural: l,
    linked: (y, ...R) => {
      const [_, g] = R;
      let I = "text", L = "";
      R.length === 1 ? w(_) ? (L = _.modifier || L, I = _.type || I) : C(_) && (L = _ || L) : R.length === 2 && (C(_) && (L = _ || L), C(g) && (I = g || I));
      const S = h(y)(N), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && X(S) && L ? S[0] : S
      );
      return L ? v(L)(D, I) : D;
    },
    message: h,
    type: d,
    interpolate: T,
    normalize: m,
    values: se(x(), a, i)
  };
  return N;
}
let Ot = null;
function Ao(e) {
  Ot = e;
}
function yo(e, t, n) {
  Ot && Ot.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Po = /* @__PURE__ */ Co(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Co(e) {
  return (t) => Ot && Ot.emit(e, t);
}
const Sl = Vt.__EXTEND_POINT__, He = wt(Sl), ie = {
  NOT_FOUND_KEY: Sl,
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
}, Ro = {
  [ie.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ie.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ie.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ie.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ie.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ie.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function xe(e, ...t) {
  return cn(Ro[e], ...t);
}
const Al = M.__EXTEND_POINT__, Be = wt(Al), le = {
  INVALID_ARGUMENT: Al,
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
function Ie(e) {
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: Do } : void 0);
}
const Do = {
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
let Bt;
function Mn(e) {
  if (C(e))
    return e;
  if (Y(e)) {
    if (e.resolvedOnce && Bt != null)
      return Bt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Aa(t))
        throw Ie(le.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Bt = t;
    } else
      throw Ie(le.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ie(le.NOT_SUPPORT_LOCALE_TYPE);
}
function ko(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...X(t) ? t : w(t) ? Object.keys(t) : C(t) ? [t] : [n]
  ])];
}
function yl(e, t, n) {
  const r = C(n) ? n : nt, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let l = s.__localeChainCache.get(r);
  if (!l) {
    l = [];
    let a = [n];
    for (; X(a); )
      a = Fn(l, a, t);
    const o = X(t) || !F(t) ? t : t.default ? t.default : null;
    a = C(o) ? [o] : o, X(a) && Fn(l, a, !1), s.__localeChainCache.set(r, l);
  }
  return l;
}
function Fn(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && U(r); s++) {
    const l = t[s];
    C(l) && (r = Mo(e, t[s], n));
  }
  return r;
}
function Mo(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const l = s.join("-");
    r = Fo(e, l, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Fo(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (X(n) || F(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Uo = "9.14.2", $t = -1, nt = "en-US", Ft = "", Un = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function wo() {
  return {
    upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && w(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && w(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && C(e) ? Un(e) : t === "vnode" && w(e) && "__v_isVNode" in e ? Un(e.children) : e
  };
}
let Pl;
function wn(e) {
  Pl = e;
}
let Cl;
function Vo(e) {
  Cl = e;
}
let Rl;
function $o(e) {
  Rl = e;
}
let Dl = null;
const Wo = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Dl = e;
}, Go = /* @__NO_SIDE_EFFECTS__ */ () => Dl;
let kl = null;
const Vn = (e) => {
  kl = e;
}, Ho = () => kl;
let $n = 0;
function Bo(e = {}) {
  const t = Y(e.onWarn) ? e.onWarn : ee, n = C(e.version) ? e.version : Uo, r = C(e.locale) || Y(e.locale) ? e.locale : nt, s = Y(r) ? nt : r, l = X(e.fallbackLocale) || F(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = F(e.messages) ? e.messages : Yt(s), o = F(e.datetimeFormats) ? e.datetimeFormats : Yt(s), i = F(e.numberFormats) ? e.numberFormats : Yt(s), f = se(x(), e.modifiers, wo()), h = e.pluralRules || x(), v = Y(e.missing) ? e.missing : null, m = U(e.missingWarn) || Ue(e.missingWarn) ? e.missingWarn : !0, T = U(e.fallbackWarn) || Ue(e.fallbackWarn) ? e.fallbackWarn : !0, d = !!e.fallbackFormat, E = !!e.unresolving, N = Y(e.postTranslation) ? e.postTranslation : null, y = F(e.processor) ? e.processor : null, R = U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, g = Y(e.messageCompiler) ? e.messageCompiler : Pl;
  process.env.NODE_ENV !== "production" && Y(e.messageCompiler) && Ol(xe(ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const I = Y(e.messageResolver) ? e.messageResolver : Cl || Eo, L = Y(e.localeFallbacker) ? e.localeFallbacker : Rl || ko, S = w(e.fallbackContext) ? e.fallbackContext : void 0, D = e, A = w(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), K = w(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), de = w(D.__meta) ? D.__meta : {};
  $n++;
  const V = {
    version: n,
    cid: $n,
    locale: r,
    fallbackLocale: l,
    messages: a,
    modifiers: f,
    pluralRules: h,
    missing: v,
    missingWarn: m,
    fallbackWarn: T,
    fallbackFormat: d,
    unresolving: E,
    postTranslation: N,
    processor: y,
    warnHtmlMessage: R,
    escapeParameter: _,
    messageCompiler: g,
    messageResolver: I,
    localeFallbacker: L,
    fallbackContext: S,
    onWarn: t,
    __meta: de
  };
  return V.datetimeFormats = o, V.numberFormats = i, V.__datetimeFormatters = A, V.__numberFormatters = K, process.env.NODE_ENV !== "production" && (V.__v_emitter = D.__v_emitter != null ? D.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && yo(V, n, de), V;
}
const Yt = (e) => ({ [e]: x() });
function Wt(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ml(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function dn(e, t, n, r, s) {
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
    return C(o) ? o : t;
  } else
    return process.env.NODE_ENV !== "production" && Ml(r, t) && a(xe(ie.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Nt(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Fl(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Yo(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Fl(e, t[r]))
      return !0;
  return !1;
}
function xt(e) {
  return (n) => xo(n, e);
}
function xo(e, t) {
  const n = Ko(t);
  if (n == null)
    throw Tt(
      0
      /* NodeTypes.Resource */
    );
  if (mn(n) === 1) {
    const l = Jo(n);
    return e.plural(l.reduce((a, o) => [
      ...a,
      Wn(e, o)
    ], []));
  } else
    return Wn(e, n);
}
const jo = ["b", "body"];
function Ko(e) {
  return $e(e, jo);
}
const Xo = ["c", "cases"];
function Jo(e) {
  return $e(e, Xo, []);
}
function Wn(e, t) {
  const n = qo(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = zo(t).reduce((s, l) => [...s, Qt(e, l)], []);
    return e.normalize(r);
  }
}
const Qo = ["s", "static"];
function qo(e) {
  return $e(e, Qo);
}
const Zo = ["i", "items"];
function zo(e) {
  return $e(e, Zo, []);
}
function Qt(e, t) {
  const n = mn(t);
  switch (n) {
    case 3:
      return Ct(t, n);
    case 9:
      return Ct(t, n);
    case 4: {
      const r = t;
      if (ge(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (ge(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Tt(n);
    }
    case 5: {
      const r = t;
      if (ge(r, "i") && z(r.i))
        return e.interpolate(e.list(r.i));
      if (ge(r, "index") && z(r.index))
        return e.interpolate(e.list(r.index));
      throw Tt(n);
    }
    case 6: {
      const r = t, s = li(r), l = si(r);
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
const ei = ["t", "type"];
function mn(e) {
  return $e(e, ei);
}
const ti = ["v", "value"];
function Ct(e, t) {
  const n = $e(e, ti);
  if (n)
    return n;
  throw Tt(t);
}
const ni = ["m", "modifier"];
function li(e) {
  return $e(e, ni);
}
const ri = ["k", "key"];
function si(e) {
  const t = $e(e, ri);
  if (t)
    return t;
  throw Tt(
    6
    /* NodeTypes.Linked */
  );
}
function $e(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (ge(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
function Tt(e) {
  return new Error(`unhandled node type: ${e}`);
}
const ai = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ul(e, t) {
  t && $a(e) && ee(cn(ai, { source: e }));
}
const wl = (e) => e;
let et = x();
function Vl(e) {
  e.code === Vt.USE_MODULO_SYNTAX && ee(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function we(e) {
  return w(e) && mn(e) === 0 && (ge(e, "b") || ge(e, "body"));
}
function $l(e, t = {}) {
  let n = !1;
  const r = t.onError || wa;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...io(e, t), detectError: n };
}
const oi = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!C(e))
    throw Ie(le.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Vl);
  {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Ul(e, n);
    const s = (t.onCacheKey || wl)(e), l = et[s];
    if (l)
      return l;
    const { code: a, detectError: o } = $l(e, t), i = new Function(`return ${a}`)();
    return o ? i : et[s] = i;
  }
};
function ii(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Vl), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Ul(e, n);
    const s = (t.onCacheKey || wl)(e), l = et[s];
    if (l)
      return l;
    const { ast: a, detectError: o } = $l(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), i = xt(a);
    return o ? i : et[s] = i;
  } else {
    if (process.env.NODE_ENV !== "production" && !we(e))
      return ee(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = et[n];
      return r || (et[n] = xt(e));
    } else
      return xt(e);
  }
}
const Gn = () => "", he = (e) => Y(e);
function Hn(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: l, fallbackLocale: a, messages: o } = e, [i, f] = qt(...t), h = U(f.missingWarn) ? f.missingWarn : e.missingWarn, v = U(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, m = U(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, T = !!f.resolvedMessage, d = C(f.default) || U(f.default) ? U(f.default) ? l ? i : () => i : f.default : n ? l ? i : () => i : "", E = n || d !== "", N = _n(e, f);
  m && ci(f);
  let [y, R, _] = T ? [
    i,
    N,
    o[N] || x()
  ] : Wl(e, i, N, a, v, h), g = y, I = i;
  if (!T && !(C(g) || we(g) || he(g)) && E && (g = d, I = g), !T && (!(C(g) || we(g) || he(g)) || !C(R)))
    return s ? $t : i;
  if (process.env.NODE_ENV !== "production" && C(g) && e.messageCompiler == null)
    return ee(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let L = !1;
  const S = () => {
    L = !0;
  }, D = he(g) ? g : Gl(e, i, R, g, I, S);
  if (L)
    return g;
  const A = di(e, R, _, f), K = So(A), de = ui(e, D, K), V = r ? r(de, i) : de;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ae = {
      timestamp: Date.now(),
      key: C(i) ? i : he(g) ? g.key : "",
      locale: R || (he(g) ? g.locale : ""),
      format: C(g) ? g : he(g) ? g.source : "",
      message: V
    };
    ae.meta = se({}, e.__meta, /* @__PURE__ */ Go() || {}), Po(ae);
  }
  return V;
}
function ci(e) {
  X(e.list) ? e.list = e.list.map((t) => C(t) ? In(t) : t) : w(e.named) && Object.keys(e.named).forEach((t) => {
    C(e.named[t]) && (e.named[t] = In(e.named[t]));
  });
}
function Wl(e, t, n, r, s, l) {
  const { messages: a, onWarn: o, messageResolver: i, localeFallbacker: f } = e, h = f(e, r, n);
  let v = x(), m, T = null, d = n, E = null;
  const N = "translate";
  for (let y = 0; y < h.length; y++) {
    if (m = E = h[y], process.env.NODE_ENV !== "production" && n !== m && !Fl(n, m) && Wt(s, t) && o(xe(ie.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && n !== m) {
      const I = e.__v_emitter;
      I && I.emit("fallback", {
        type: N,
        key: t,
        from: d,
        to: E,
        groupId: `${N}:${t}`
      });
    }
    v = a[m] || x();
    let R = null, _, g;
    if (process.env.NODE_ENV !== "production" && ve && (R = window.performance.now(), _ = "intlify-message-resolve-start", g = "intlify-message-resolve-end", me && me(_)), (T = i(v, t)) === null && (T = v[t]), process.env.NODE_ENV !== "production" && ve) {
      const I = window.performance.now(), L = e.__v_emitter;
      L && R && T && L.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: T,
        time: I - R,
        groupId: `${N}:${t}`
      }), _ && g && me && Ye && (me(g), Ye("intlify message resolve", _, g));
    }
    if (C(T) || we(T) || he(T))
      break;
    if (!Yo(m, h)) {
      const I = dn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        l,
        N
      );
      I !== t && (T = I);
    }
    d = E;
  }
  return [T, m, v];
}
function Gl(e, t, n, r, s, l) {
  const { messageCompiler: a, warnHtmlMessage: o } = e;
  if (he(r)) {
    const m = r;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (a == null) {
    const m = () => r;
    return m.locale = n, m.key = t, m;
  }
  let i = null, f, h;
  process.env.NODE_ENV !== "production" && ve && (i = window.performance.now(), f = "intlify-message-compilation-start", h = "intlify-message-compilation-end", me && me(f));
  const v = a(r, fi(e, n, s, r, o, l));
  if (process.env.NODE_ENV !== "production" && ve) {
    const m = window.performance.now(), T = e.__v_emitter;
    T && i && T.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: m - i,
      groupId: `translate:${t}`
    }), f && h && me && Ye && (me(h), Ye("intlify message compilation", f, h));
  }
  return v.locale = n, v.key = t, v.source = r, v;
}
function ui(e, t, n) {
  let r = null, s, l;
  process.env.NODE_ENV !== "production" && ve && (r = window.performance.now(), s = "intlify-message-evaluation-start", l = "intlify-message-evaluation-end", me && me(s));
  const a = t(n);
  if (process.env.NODE_ENV !== "production" && ve) {
    const o = window.performance.now(), i = e.__v_emitter;
    i && r && i.emit("message-evaluation", {
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
  if (!C(t) && !z(t) && !he(t) && !we(t))
    throw Ie(le.INVALID_ARGUMENT);
  const l = z(t) ? String(t) : (he(t), t);
  return z(n) ? s.plural = n : C(n) ? s.default = n : F(n) && !Ut(n) ? s.named = n : X(n) && (s.list = n), z(r) ? s.plural = r : C(r) ? s.default = r : F(r) && se(s, r), [l, s];
}
function fi(e, t, n, r, s, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      if (l && l(a), process.env.NODE_ENV !== "production") {
        const o = _i(r), i = `Message compilation error: ${a.message}`, f = a.location && o && Ca(o, a.location.start.offset, a.location.end.offset), h = e.__v_emitter;
        h && o && h.emit("compile-error", {
          message: o,
          error: a.message,
          start: a.location && a.location.start.offset,
          end: a.location && a.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(f ? `${i}
${f}` : i);
      } else
        throw a;
    },
    onCacheKey: (a) => Oa(t, n, a)
  };
}
function _i(e) {
  if (C(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function di(e, t, n, r) {
  const { modifiers: s, pluralRules: l, messageResolver: a, fallbackLocale: o, fallbackWarn: i, missingWarn: f, fallbackContext: h } = e, m = {
    locale: t,
    modifiers: s,
    pluralRules: l,
    messages: (T) => {
      let d = a(n, T);
      if (d == null && h) {
        const [, , E] = Wl(h, T, t, o, i, f);
        d = a(E, T);
      }
      if (C(d) || we(d)) {
        let E = !1;
        const y = Gl(e, T, t, d, T, () => {
          E = !0;
        });
        return E ? Gn : y;
      } else return he(d) ? d : Gn;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), z(r.plural) && (m.pluralIndex = r.plural), m;
}
const Bn = typeof Intl < "u", Hl = {
  dateTimeFormat: Bn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Bn && typeof Intl.NumberFormat < "u"
};
function Yn(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: l, localeFallbacker: a } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Hl.dateTimeFormat)
    return l(xe(ie.CANNOT_FORMAT_DATE)), Ft;
  const [i, f, h, v] = Zt(...t), m = U(h.missingWarn) ? h.missingWarn : e.missingWarn, T = U(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, d = !!h.part, E = _n(e, h), N = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    E
  );
  if (!C(i) || i === "")
    return new Intl.DateTimeFormat(E, v).format(f);
  let y = {}, R, _ = null, g = E, I = null;
  const L = "datetime format";
  for (let A = 0; A < N.length; A++) {
    if (R = I = N[A], process.env.NODE_ENV !== "production" && E !== R && Wt(T, i) && l(xe(ie.FALLBACK_TO_DATE_FORMAT, {
      key: i,
      target: R
    })), process.env.NODE_ENV !== "production" && E !== R) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: L,
        key: i,
        from: g,
        to: I,
        groupId: `${L}:${i}`
      });
    }
    if (y = n[R] || {}, _ = y[i], F(_))
      break;
    dn(e, i, R, m, L), g = I;
  }
  if (!F(_) || !C(R))
    return r ? $t : i;
  let S = `${R}__${i}`;
  Ut(v) || (S = `${S}__${JSON.stringify(v)}`);
  let D = o.get(S);
  return D || (D = new Intl.DateTimeFormat(R, se({}, _, v)), o.set(S, D)), d ? D.formatToParts(f) : D.format(f);
}
const Bl = [
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
  if (C(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw Ie(le.INVALID_ISO_DATE_ARGUMENT);
    const f = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    o = new Date(f);
    try {
      o.toISOString();
    } catch {
      throw Ie(le.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ba(t)) {
    if (isNaN(t.getTime()))
      throw Ie(le.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (z(t))
    o = t;
  else
    throw Ie(le.INVALID_ARGUMENT);
  return C(n) ? l.key = n : F(n) && Object.keys(n).forEach((i) => {
    Bl.includes(i) ? a[i] = n[i] : l[i] = n[i];
  }), C(r) ? l.locale = r : F(r) && (a = r), F(s) && (a = s), [l.key || "", o, l, a];
}
function xn(e, t, n) {
  const r = e;
  for (const s in n) {
    const l = `${t}__${s}`;
    r.__datetimeFormatters.has(l) && r.__datetimeFormatters.delete(l);
  }
}
function jn(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: l, localeFallbacker: a } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Hl.numberFormat)
    return l(xe(ie.CANNOT_FORMAT_NUMBER)), Ft;
  const [i, f, h, v] = zt(...t), m = U(h.missingWarn) ? h.missingWarn : e.missingWarn, T = U(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, d = !!h.part, E = _n(e, h), N = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    E
  );
  if (!C(i) || i === "")
    return new Intl.NumberFormat(E, v).format(f);
  let y = {}, R, _ = null, g = E, I = null;
  const L = "number format";
  for (let A = 0; A < N.length; A++) {
    if (R = I = N[A], process.env.NODE_ENV !== "production" && E !== R && Wt(T, i) && l(xe(ie.FALLBACK_TO_NUMBER_FORMAT, {
      key: i,
      target: R
    })), process.env.NODE_ENV !== "production" && E !== R) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: L,
        key: i,
        from: g,
        to: I,
        groupId: `${L}:${i}`
      });
    }
    if (y = n[R] || {}, _ = y[i], F(_))
      break;
    dn(e, i, R, m, L), g = I;
  }
  if (!F(_) || !C(R))
    return r ? $t : i;
  let S = `${R}__${i}`;
  Ut(v) || (S = `${S}__${JSON.stringify(v)}`);
  let D = o.get(S);
  return D || (D = new Intl.NumberFormat(R, se({}, _, v)), o.set(S, D)), d ? D.formatToParts(f) : D.format(f);
}
const Yl = [
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
    throw Ie(le.INVALID_ARGUMENT);
  const o = t;
  return C(n) ? l.key = n : F(n) && Object.keys(n).forEach((i) => {
    Yl.includes(i) ? a[i] = n[i] : l[i] = n[i];
  }), C(r) ? l.locale = r : F(r) && (a = r), F(s) && (a = s), [l.key || "", o, l, a];
}
function Kn(e, t, n) {
  const r = e;
  for (const s in n) {
    const l = `${t}__${s}`;
    r.__numberFormatters.has(l) && r.__numberFormatters.delete(l);
  }
}
co();
function mi() {
  return xl().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function xl() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const pi = typeof Proxy == "function", hi = "devtools-plugin:setup", Ei = "plugin:settings:set";
let qe, en;
function gi() {
  var e;
  return qe !== void 0 || (typeof window < "u" && window.performance ? (qe = !0, en = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (qe = !0, en = globalThis.perf_hooks.performance) : qe = !1), qe;
}
function vi() {
  return gi() ? en.now() : Date.now();
}
class Ni {
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
        return vi();
      }
    }, n && n.on(Ei, (a, o) => {
      a === this.plugin.id && this.fallbacks.setSettings(o);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, o) => this.target ? this.target.on[o] : (...i) => {
        this.onQueue.push({
          method: o,
          args: i
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, o) => this.target ? this.target[o] : o === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(o) ? (...i) => (this.targetQueue.push({
        method: o,
        args: i,
        resolve: () => {
        }
      }), this.fallbacks[o](...i)) : (...i) => new Promise((f) => {
        this.targetQueue.push({
          method: o,
          args: i,
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
function Li(e, t) {
  const n = e, r = xl(), s = mi(), l = pi && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !l))
    s.emit(hi, e, t);
  else {
    const a = l ? new Ni(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Oi = "9.14.2";
function Ti() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Re().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Re().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Re().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Re().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Re().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const jl = ie.__EXTEND_POINT__, Pe = wt(jl), q = {
  FALLBACK_TO_ROOT: jl,
  // 9
  NOT_SUPPORTED_PRESERVE: Pe(),
  // 10
  NOT_SUPPORTED_FORMATTER: Pe(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Pe(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: Pe(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: Pe(),
  // 14
  NOT_FOUND_PARENT_SCOPE: Pe(),
  // 15
  IGNORE_OBJ_FLATTEN: Pe(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: Pe(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Pe()
  // 18
}, bi = {
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
  return cn(bi[e], ...t);
}
const Kl = le.__EXTEND_POINT__, ce = wt(Kl), $ = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Kl,
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
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: Ii, args: t } : void 0);
}
const Ii = {
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
}, tn = /* @__PURE__ */ Ae("__translateVNode"), nn = /* @__PURE__ */ Ae("__datetimeParts"), ln = /* @__PURE__ */ Ae("__numberParts"), je = /* @__PURE__ */ Ae("__enableEmitter"), bt = /* @__PURE__ */ Ae("__disableEmitter"), Xl = Ae("__setPluralRules"), Jl = /* @__PURE__ */ Ae("__injectWithOption"), rn = /* @__PURE__ */ Ae("__dispose");
function It(e) {
  if (!w(e))
    return e;
  for (const t in e)
    if (ge(e, t))
      if (!t.includes("."))
        w(e[t]) && It(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, l = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] in s || (s[n[a]] = x()), !w(s[n[a]])) {
            process.env.NODE_ENV !== "production" && ee(_e(q.IGNORE_OBJ_FLATTEN, {
              key: n[a]
            })), l = !0;
            break;
          }
          s = s[n[a]];
        }
        l || (s[n[r]] = e[t], delete e[t]), w(s[n[r]]) && It(s[n[r]]);
      }
  return e;
}
function Gt(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: l } = t, a = F(n) ? n : X(r) ? x() : { [e]: x() };
  if (X(r) && r.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: i, resource: f } = o;
      i ? (a[i] = a[i] || x(), Rt(f, a[i])) : Rt(f, a);
    } else
      C(o) && Rt(JSON.parse(o), a);
  }), s == null && l)
    for (const o in a)
      ge(a, o) && It(a[o]);
  return a;
}
function Ql(e) {
  return e.type;
}
function ql(e, t, n) {
  let r = w(t.messages) ? t.messages : x();
  "__i18nGlobal" in n && (r = Gt(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((l) => {
    e.mergeLocaleMessage(l, r[l]);
  });
  {
    if (w(t.datetimeFormats)) {
      const l = Object.keys(t.datetimeFormats);
      l.length && l.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (w(t.numberFormats)) {
      const l = Object.keys(t.numberFormats);
      l.length && l.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Xn(e) {
  return Se(dr, null, e, 0);
}
const Jn = "__INTLIFY_META__", Qn = () => [], Si = () => !1;
let qn = 0;
function Zn(e) {
  return (t, n, r, s) => e(n, r, Lt() || void 0, s);
}
const Ai = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Lt();
  let t = null;
  return e && (t = Ql(e)[Jn]) ? { [Jn]: t } : null;
};
function pn(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0, l = e.flatJson, a = ve ? Ze : ol, o = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && o && Ol(_e(q.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let i = U(e.inheritLocale) ? e.inheritLocale : !0;
  const f = a(
    // prettier-ignore
    n && i ? n.locale.value : C(e.locale) ? e.locale : nt
  ), h = a(
    // prettier-ignore
    n && i ? n.fallbackLocale.value : C(e.fallbackLocale) || X(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value
  ), v = a(Gt(f.value, e)), m = a(F(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }), T = a(F(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
  let d = n ? n.missingWarn : U(e.missingWarn) || Ue(e.missingWarn) ? e.missingWarn : !0, E = n ? n.fallbackWarn : U(e.fallbackWarn) || Ue(e.fallbackWarn) ? e.fallbackWarn : !0, N = n ? n.fallbackRoot : U(e.fallbackRoot) ? e.fallbackRoot : !0, y = !!e.fallbackFormat, R = Y(e.missing) ? e.missing : null, _ = Y(e.missing) ? Zn(e.missing) : null, g = Y(e.postTranslation) ? e.postTranslation : null, I = n ? n.warnHtmlMessage : U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter;
  const S = n ? n.modifiers : F(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || n && n.pluralRules, A;
  A = (() => {
    s && Vn(null);
    const p = {
      version: Oi,
      locale: f.value,
      fallbackLocale: h.value,
      messages: v.value,
      modifiers: S,
      pluralRules: D,
      missing: _ === null ? void 0 : _,
      missingWarn: d,
      fallbackWarn: E,
      fallbackFormat: y,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: I,
      escapeParameter: L,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    p.datetimeFormats = m.value, p.numberFormats = T.value, p.__datetimeFormatters = F(A) ? A.__datetimeFormatters : void 0, p.__numberFormatters = F(A) ? A.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (p.__v_emitter = F(A) ? A.__v_emitter : void 0);
    const b = Bo(p);
    return s && Vn(b), b;
  })(), Nt(A, f.value, h.value);
  function de() {
    return [
      f.value,
      h.value,
      v.value,
      m.value,
      T.value
    ];
  }
  const V = Te({
    get: () => f.value,
    set: (p) => {
      f.value = p, A.locale = f.value;
    }
  }), ae = Te({
    get: () => h.value,
    set: (p) => {
      h.value = p, A.fallbackLocale = h.value, Nt(A, f.value, p);
    }
  }), rt = Te(() => v.value), st = /* @__PURE__ */ Te(() => m.value), Le = /* @__PURE__ */ Te(() => T.value);
  function at() {
    return Y(g) ? g : null;
  }
  function ot(p) {
    g = p, A.postTranslation = p;
  }
  function it() {
    return R;
  }
  function ct(p) {
    p !== null && (_ = Zn(p)), R = p, A.missing = _;
  }
  function ut(p, b) {
    return p !== "translate" || !b.resolvedMessage;
  }
  const pe = (p, b, H, Z, De, yt) => {
    de();
    let Qe;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = n ? Ho() : void 0), Qe = p(A);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = void 0);
    }
    if (H !== "translate exists" && // for not `te` (e.g `t`)
    z(Qe) && Qe === $t || H === "translate exists" && !Qe) {
      const [Ge, lr] = b();
      if (process.env.NODE_ENV !== "production" && n && C(Ge) && ut(H, lr) && (N && (Wt(E, Ge) || Ml(d, Ge)) && ee(_e(q.FALLBACK_TO_ROOT, {
        key: Ge,
        type: H
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: vn } = A;
        vn && N && vn.emit("fallback", {
          type: H,
          key: Ge,
          to: "global",
          groupId: `${H}:${Ge}`
        });
      }
      return n && N ? Z(n) : De(Ge);
    } else {
      if (yt(Qe))
        return Qe;
      throw te($.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ke(...p) {
    return pe((b) => Reflect.apply(Hn, null, [b, ...p]), () => qt(...p), "translate", (b) => Reflect.apply(b.t, b, [...p]), (b) => b, (b) => C(b));
  }
  function Xe(...p) {
    const [b, H, Z] = p;
    if (Z && !w(Z))
      throw te($.INVALID_ARGUMENT);
    return Ke(b, H, se({ resolvedMessage: !0 }, Z || {}));
  }
  function ft(...p) {
    return pe((b) => Reflect.apply(Yn, null, [b, ...p]), () => Zt(...p), "datetime format", (b) => Reflect.apply(b.d, b, [...p]), () => Ft, (b) => C(b));
  }
  function _t(...p) {
    return pe((b) => Reflect.apply(jn, null, [b, ...p]), () => zt(...p), "number format", (b) => Reflect.apply(b.n, b, [...p]), () => Ft, (b) => C(b));
  }
  function dt(p) {
    return p.map((b) => C(b) || z(b) || U(b) ? Xn(String(b)) : b);
  }
  const mt = {
    normalize: dt,
    interpolate: (p) => p,
    type: "vnode"
  };
  function Je(...p) {
    return pe(
      (b) => {
        let H;
        const Z = b;
        try {
          Z.processor = mt, H = Reflect.apply(Hn, null, [Z, ...p]);
        } finally {
          Z.processor = null;
        }
        return H;
      },
      () => qt(...p),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[tn](...p),
      (b) => [Xn(b)],
      (b) => X(b)
    );
  }
  function pt(...p) {
    return pe(
      (b) => Reflect.apply(jn, null, [b, ...p]),
      () => zt(...p),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[ln](...p),
      Qn,
      (b) => C(b) || X(b)
    );
  }
  function ht(...p) {
    return pe(
      (b) => Reflect.apply(Yn, null, [b, ...p]),
      () => Zt(...p),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[nn](...p),
      Qn,
      (b) => C(b) || X(b)
    );
  }
  function Et(p) {
    D = p, A.pluralRules = D;
  }
  function P(p, b) {
    return pe(() => {
      if (!p)
        return !1;
      const H = C(b) ? b : f.value, Z = We(H), De = A.messageResolver(Z, p);
      return o ? De != null : we(De) || he(De) || C(De);
    }, () => [p], "translate exists", (H) => Reflect.apply(H.te, H, [p, b]), Si, (H) => U(H));
  }
  function G(p) {
    let b = null;
    const H = yl(A, h.value, f.value);
    for (let Z = 0; Z < H.length; Z++) {
      const De = v.value[H[Z]] || {}, yt = A.messageResolver(De, p);
      if (yt != null) {
        b = yt;
        break;
      }
    }
    return b;
  }
  function gt(p) {
    const b = G(p);
    return b ?? (n ? n.tm(p) || {} : {});
  }
  function We(p) {
    return v.value[p] || {};
  }
  function vt(p, b) {
    if (l) {
      const H = { [p]: b };
      for (const Z in H)
        ge(H, Z) && It(H[Z]);
      b = H[p];
    }
    v.value[p] = b, A.messages = v.value;
  }
  function Ht(p, b) {
    v.value[p] = v.value[p] || {};
    const H = { [p]: b };
    if (l)
      for (const Z in H)
        ge(H, Z) && It(H[Z]);
    b = H[p], Rt(b, v.value[p]), A.messages = v.value;
  }
  function c(p) {
    return m.value[p] || {};
  }
  function u(p, b) {
    m.value[p] = b, A.datetimeFormats = m.value, xn(A, p, b);
  }
  function O(p, b) {
    m.value[p] = se(m.value[p] || {}, b), A.datetimeFormats = m.value, xn(A, p, b);
  }
  function k(p) {
    return T.value[p] || {};
  }
  function J(p, b) {
    T.value[p] = b, A.numberFormats = T.value, Kn(A, p, b);
  }
  function j(p, b) {
    T.value[p] = se(T.value[p] || {}, b), A.numberFormats = T.value, Kn(A, p, b);
  }
  qn++, n && ve && (Xt(n.locale, (p) => {
    i && (f.value = p, A.locale = p, Nt(A, f.value, h.value));
  }), Xt(n.fallbackLocale, (p) => {
    i && (h.value = p, A.fallbackLocale = p, Nt(A, f.value, h.value));
  }));
  const B = {
    id: qn,
    locale: V,
    fallbackLocale: ae,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(p) {
      i = p, p && n && (f.value = n.locale.value, h.value = n.fallbackLocale.value, Nt(A, f.value, h.value));
    },
    get availableLocales() {
      return Object.keys(v.value).sort();
    },
    messages: rt,
    get modifiers() {
      return S;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(p) {
      d = p, A.missingWarn = d;
    },
    get fallbackWarn() {
      return E;
    },
    set fallbackWarn(p) {
      E = p, A.fallbackWarn = E;
    },
    get fallbackRoot() {
      return N;
    },
    set fallbackRoot(p) {
      N = p;
    },
    get fallbackFormat() {
      return y;
    },
    set fallbackFormat(p) {
      y = p, A.fallbackFormat = y;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(p) {
      I = p, A.warnHtmlMessage = p;
    },
    get escapeParameter() {
      return L;
    },
    set escapeParameter(p) {
      L = p, A.escapeParameter = p;
    },
    t: Ke,
    getLocaleMessage: We,
    setLocaleMessage: vt,
    mergeLocaleMessage: Ht,
    getPostTranslationHandler: at,
    setPostTranslationHandler: ot,
    getMissingHandler: it,
    setMissingHandler: ct,
    [Xl]: Et
  };
  return B.datetimeFormats = st, B.numberFormats = Le, B.rt = Xe, B.te = P, B.tm = gt, B.d = ft, B.n = _t, B.getDateTimeFormat = c, B.setDateTimeFormat = u, B.mergeDateTimeFormat = O, B.getNumberFormat = k, B.setNumberFormat = J, B.mergeNumberFormat = j, B[Jl] = r, B[tn] = Je, B[nn] = ht, B[ln] = pt, process.env.NODE_ENV !== "production" && (B[je] = (p) => {
    A.__v_emitter = p;
  }, B[bt] = () => {
    A.__v_emitter = void 0;
  }), B;
}
function yi(e) {
  const t = C(e.locale) ? e.locale : nt, n = C(e.fallbackLocale) || X(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Y(e.missing) ? e.missing : void 0, s = U(e.silentTranslationWarn) || Ue(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, l = U(e.silentFallbackWarn) || Ue(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = U(e.fallbackRoot) ? e.fallbackRoot : !0, o = !!e.formatFallbackMessages, i = F(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, h = Y(e.postTranslation) ? e.postTranslation : void 0, v = C(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, T = U(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && ee(_e(q.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && ee(_e(q.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let d = e.messages;
  if (F(e.sharedMessages)) {
    const L = e.sharedMessages;
    d = Object.keys(L).reduce((D, A) => {
      const K = D[A] || (D[A] = {});
      return se(K, L[A]), D;
    }, d || {});
  }
  const { __i18n: E, __root: N, __injectWithOption: y } = e, R = e.datetimeFormats, _ = e.numberFormats, g = e.flatJson, I = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: d,
    flatJson: g,
    datetimeFormats: R,
    numberFormats: _,
    missing: r,
    missingWarn: s,
    fallbackWarn: l,
    fallbackRoot: a,
    fallbackFormat: o,
    modifiers: i,
    pluralRules: f,
    postTranslation: h,
    warnHtmlMessage: v,
    escapeParameter: m,
    messageResolver: e.messageResolver,
    inheritLocale: T,
    translateExistCompatible: I,
    __i18n: E,
    __root: N,
    __injectWithOption: y
  };
}
function sn(e = {}, t) {
  {
    const n = pn(yi(e)), { __extender: r } = e, s = {
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
        const [a, o, i] = l, f = {};
        let h = null, v = null;
        if (!C(a))
          throw te($.INVALID_ARGUMENT);
        const m = a;
        return C(o) ? f.locale = o : X(o) ? h = o : F(o) && (v = o), X(i) ? h = i : F(i) && (v = i), Reflect.apply(n.t, n, [
          m,
          h || v || {},
          f
        ]);
      },
      rt(...l) {
        return Reflect.apply(n.rt, n, [...l]);
      },
      // tc
      tc(...l) {
        const [a, o, i] = l, f = { plural: 1 };
        let h = null, v = null;
        if (!C(a))
          throw te($.INVALID_ARGUMENT);
        const m = a;
        return C(o) ? f.locale = o : z(o) ? f.plural = o : X(o) ? h = o : F(o) && (v = o), C(i) ? f.locale = i : X(i) ? h = i : F(i) && (v = i), Reflect.apply(n.t, n, [
          m,
          h || v || {},
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
function Pi({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Dt ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, x());
}
function Zl(e) {
  return Dt;
}
const Ci = /* @__PURE__ */ on({
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
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = C(e.plural) ? +e.plural : e.plural);
      const o = Pi(t, l), i = s[tn](e.keypath, o, a), f = se(x(), r), h = C(e.tag) || w(e.tag) ? e.tag : Zl();
      return al(h, f, i);
    };
  }
}), jt = Ci;
function Ri(e) {
  return X(e) && !C(e[0]);
}
function zl(e, t, n, r) {
  const { slots: s, attrs: l } = t;
  return () => {
    const a = { part: !0 };
    let o = x();
    e.locale && (a.locale = e.locale), C(e.format) ? a.key = e.format : w(e.format) && (C(e.format.key) && (a.key = e.format.key), o = Object.keys(e.format).reduce((m, T) => n.includes(T) ? se(x(), m, { [T]: e.format[T] }) : m, x()));
    const i = r(e.value, a, o);
    let f = [a.key];
    X(i) ? f = i.map((m, T) => {
      const d = s[m.type], E = d ? d({ [m.type]: m.value, index: T, parts: i }) : [m.value];
      return Ri(E) && (E[0].key = `${m.type}-${T}`), E;
    }) : C(i) && (f = [i]);
    const h = se(x(), l), v = C(e.tag) || w(e.tag) ? e.tag : Zl();
    return al(v, h, f);
  };
}
const Di = /* @__PURE__ */ on({
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
    return zl(e, t, Yl, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ln](...r)
    ));
  }
}), zn = Di, ki = /* @__PURE__ */ on({
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
    return zl(e, t, Bl, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[nn](...r)
    ));
  }
}), el = ki;
function Mi(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Fi(e) {
  const t = (a) => {
    const { instance: o, modifiers: i, value: f } = a;
    if (!o || !o.$)
      throw te($.UNEXPECTED_ERROR);
    const h = Mi(e, o.$);
    process.env.NODE_ENV !== "production" && i.preserve && ee(_e(q.NOT_SUPPORTED_PRESERVE));
    const v = tl(f);
    return [
      Reflect.apply(h.t, h, [...nl(v)]),
      h
    ];
  };
  return {
    created: (a, o) => {
      const [i, f] = t(o);
      ve && e.global === f && (a.__i18nWatcher = Xt(f.locale, () => {
        o.instance && o.instance.$forceUpdate();
      })), a.__composer = f, a.textContent = i;
    },
    unmounted: (a) => {
      ve && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: o }) => {
      if (a.__composer) {
        const i = a.__composer, f = tl(o);
        a.textContent = Reflect.apply(i.t, i, [
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
  if (C(e))
    return { path: e };
  if (F(e)) {
    if (!("path" in e))
      throw te($.REQUIRED_VALUE, "path");
    return e;
  } else
    throw te($.INVALID_VALUE);
}
function nl(e) {
  const { path: t, locale: n, args: r, choice: s, plural: l } = e, a = {}, o = r || {};
  return C(n) && (a.locale = n), z(s) && (a.plural = s), z(l) && (a.plural = l), [t, o, a];
}
function Ui(e, t, ...n) {
  const r = F(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName, l = U(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && l && s && ee(_e(q.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: jt.name
  })), l && ([s ? "i18n" : jt.name, "I18nT"].forEach((a) => e.component(a, jt)), [zn.name, "I18nN"].forEach((a) => e.component(a, zn)), [el.name, "I18nD"].forEach((a) => e.component(a, el))), e.directive("t", Fi(t));
}
const Kt = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, wi = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Vi = {
  "vue-i18n-timeline": 16764185
}, er = "vue-i18n: composer properties";
let an;
async function $i(e, t) {
  return new Promise((n, r) => {
    try {
      Li({
        id: "vue-devtools-plugin-vue-i18n",
        label: Kt[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [er],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        an = s, s.on.visitComponentTree(({ componentInstance: a, treeNode: o }) => {
          Wi(a, o, t);
        }), s.on.inspectComponent(({ componentInstance: a, instanceData: o }) => {
          a.vnode.el && a.vnode.el.__VUE_I18N__ && o && (t.mode === "legacy" ? a.vnode.el.__VUE_I18N__ !== t.global.__composer && ll(o, a.vnode.el.__VUE_I18N__) : ll(o, a.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Kt[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: wi[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), s.on.getInspectorTree((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && xi(a, t);
        });
        const l = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (a) => {
          if (a.app === e && a.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), Ki(a, t), a.nodeId === "global") {
              if (!l.has(a.app)) {
                const [o] = await s.getComponentInstances(a.app);
                l.set(a.app, o);
              }
              s.highlightElement(l.get(a.app));
            } else {
              const o = ji(a.nodeId, t);
              o && s.highlightElement(o);
            }
        }), s.on.editInspectorState((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && Ji(a, t);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Kt[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: Vi[
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
function tr(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Wi(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const s = {
      label: `i18n (${tr(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function ll(e, t) {
  const n = er;
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
    Y(r) && "source" in r ? t[n] = Yi(r) : we(r) && r.loc && r.loc.source ? t[n] = r.loc.source : w(r) ? t[n] = En(r) : t[n] = r;
  }), t;
}
const Gi = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Hi(e) {
  return e.replace(/[<>"&]/g, Bi);
}
function Bi(e) {
  return Gi[e] || e;
}
function Yi(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Hi(e.source)}")` : "(?)"}`
    }
  };
}
function xi(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, s] of t.__instances) {
    const l = t.mode === "composition" ? s : s.__composer;
    n !== l && e.rootNodes.push({
      id: l.id.toString(),
      label: `${tr(r)} Scope`
    });
  }
}
function ji(e, t) {
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
function nr(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Ki(e, t) {
  const n = nr(e.nodeId, t);
  return n && (e.state = Xi(n)), null;
}
function Xi(e) {
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
    const i = "Datetime formats info", f = [
      {
        type: i,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[i] = f;
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
function Ji(e, t) {
  const n = nr(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && C(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (C(e.state.value) || X(e.state.value) || w(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && U(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function Qi(e, t, n) {
  return {
    beforeCreate() {
      const r = Lt();
      if (!r)
        throw te($.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const l = s.i18n;
        if (s.__i18n && (l.__i18n = s.__i18n), l.__root = t, this === this.$root)
          this.$i18n = rl(e, l);
        else {
          l.__injectWithOption = !0, l.__extender = n.__vueI18nExtend, this.$i18n = sn(l);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = rl(e, s);
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
      s.__i18nGlobal && ql(t, s, s), this.$t = (...l) => this.$i18n.t(...l), this.$rt = (...l) => this.$i18n.rt(...l), this.$tc = (...l) => this.$i18n.tc(...l), this.$te = (l, a) => this.$i18n.te(l, a), this.$d = (...l) => this.$i18n.d(...l), this.$n = (...l) => this.$i18n.n(...l), this.$tm = (l) => this.$i18n.tm(l), n.__setInstance(r, this.$i18n);
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
function rl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Xl](t.pluralizationRules || e.pluralizationRules);
  const n = Gt(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const qi = /* @__PURE__ */ Ae("global-vue-i18n");
function Zi(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && U(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = U(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, l = /* @__PURE__ */ new Map(), [a, o] = zi(e, n), i = /* @__PURE__ */ Ae(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && s && ee(_e(q.NOTICE_DROP_ALLOW_COMPOSITION));
  function f(m) {
    return l.get(m) || null;
  }
  function h(m, T) {
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
        if (process.env.NODE_ENV !== "production" && (T.__VUE_I18N__ = m), T.__VUE_I18N_SYMBOL__ = i, T.provide(T.__VUE_I18N_SYMBOL__, m), F(d[0])) {
          const y = d[0];
          m.__composerExtend = y.__composerExtend, m.__vueI18nExtend = y.__vueI18nExtend;
        }
        let E = null;
        !n && r && (E = ic(T, m.global)), __VUE_I18N_FULL_INSTALL__ && Ui(T, m, ...d), __VUE_I18N_LEGACY_API__ && n && T.mixin(Qi(o, o.__composer, m));
        const N = T.unmount;
        if (T.unmount = () => {
          E && E(), m.dispose(), N();
        }, process.env.NODE_ENV !== "production") {
          if (!await $i(T, m))
            throw te($.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const R = un();
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
      __setInstance: h,
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
  const n = ec(t), r = nc(n), s = Ql(t), l = tc(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw te($.NOT_AVAILABLE_IN_LEGACY_MODE);
    return ac(t, l, r, e);
  }
  if (l === "global")
    return ql(r, e, s), r;
  if (l === "parent") {
    let i = lc(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && ee(_e(q.NOT_FOUND_PARENT_SCOPE)), i = r), i;
  }
  const a = n;
  let o = a.__getInstance(t);
  if (o == null) {
    const i = se({}, e);
    "__i18n" in s && (i.__i18n = s.__i18n), r && (i.__root = r), o = pn(i), a.__composerExtend && (o[rn] = a.__composerExtend(o)), sc(a, t, o), a.__setInstance(t, o);
  }
  return o;
}
function zi(e, t, n) {
  const r = or();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => sn(e)) : r.run(() => pn(e));
    if (s == null)
      throw te($.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function ec(e) {
  {
    const t = ir(e.isCE ? qi : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw te(e.isCE ? $.NOT_INSTALLED_WITH_PROVIDE : $.UNEXPECTED_ERROR);
    return t;
  }
}
function tc(e, t) {
  return Ut(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function nc(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function lc(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let l = rc(t, n);
  for (; l != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = a.__getInstance(l);
      o != null && (r = o.__composer, n && r && !r[Jl] && (r = null));
    }
    if (r != null || s === l)
      break;
    l = l.parent;
  }
  return r;
}
function rc(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function sc(e, t, n) {
  let r = null;
  cr(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = un();
      const s = n;
      s[je] && s[je](r), r.on("*", St);
    }
  }, t), ur(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", St), s[bt] && s[bt](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const l = s[rn];
    l && (l(), delete s[rn]);
  }, t);
}
function ac(e, t, n, r = {}) {
  const s = t === "local", l = ol(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw te($.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = U(r.inheritLocale) ? r.inheritLocale : !C(r.locale), o = Ze(
    // prettier-ignore
    !s || a ? n.locale.value : C(r.locale) ? r.locale : nt
  ), i = Ze(
    // prettier-ignore
    !s || a ? n.fallbackLocale.value : C(r.fallbackLocale) || X(r.fallbackLocale) || F(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : o.value
  ), f = Ze(Gt(o.value, r)), h = Ze(F(r.datetimeFormats) ? r.datetimeFormats : { [o.value]: {} }), v = Ze(F(r.numberFormats) ? r.numberFormats : { [o.value]: {} }), m = s ? n.missingWarn : U(r.missingWarn) || Ue(r.missingWarn) ? r.missingWarn : !0, T = s ? n.fallbackWarn : U(r.fallbackWarn) || Ue(r.fallbackWarn) ? r.fallbackWarn : !0, d = s ? n.fallbackRoot : U(r.fallbackRoot) ? r.fallbackRoot : !0, E = !!r.fallbackFormat, N = Y(r.missing) ? r.missing : null, y = Y(r.postTranslation) ? r.postTranslation : null, R = s ? n.warnHtmlMessage : U(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, _ = !!r.escapeParameter, g = s ? n.modifiers : F(r.modifiers) ? r.modifiers : {}, I = r.pluralRules || s && n.pluralRules;
  function L() {
    return [
      o.value,
      i.value,
      f.value,
      h.value,
      v.value
    ];
  }
  const S = Te({
    get: () => l.value ? l.value.locale.value : o.value,
    set: (P) => {
      l.value && (l.value.locale.value = P), o.value = P;
    }
  }), D = Te({
    get: () => l.value ? l.value.fallbackLocale.value : i.value,
    set: (P) => {
      l.value && (l.value.fallbackLocale.value = P), i.value = P;
    }
  }), A = Te(() => l.value ? l.value.messages.value : f.value), K = Te(() => h.value), de = Te(() => v.value);
  function V() {
    return l.value ? l.value.getPostTranslationHandler() : y;
  }
  function ae(P) {
    l.value && l.value.setPostTranslationHandler(P);
  }
  function rt() {
    return l.value ? l.value.getMissingHandler() : N;
  }
  function st(P) {
    l.value && l.value.setMissingHandler(P);
  }
  function Le(P) {
    return L(), P();
  }
  function at(...P) {
    return l.value ? Le(() => Reflect.apply(l.value.t, null, [...P])) : Le(() => "");
  }
  function ot(...P) {
    return l.value ? Reflect.apply(l.value.rt, null, [...P]) : "";
  }
  function it(...P) {
    return l.value ? Le(() => Reflect.apply(l.value.d, null, [...P])) : Le(() => "");
  }
  function ct(...P) {
    return l.value ? Le(() => Reflect.apply(l.value.n, null, [...P])) : Le(() => "");
  }
  function ut(P) {
    return l.value ? l.value.tm(P) : {};
  }
  function pe(P, G) {
    return l.value ? l.value.te(P, G) : !1;
  }
  function Ke(P) {
    return l.value ? l.value.getLocaleMessage(P) : {};
  }
  function Xe(P, G) {
    l.value && (l.value.setLocaleMessage(P, G), f.value[P] = G);
  }
  function ft(P, G) {
    l.value && l.value.mergeLocaleMessage(P, G);
  }
  function _t(P) {
    return l.value ? l.value.getDateTimeFormat(P) : {};
  }
  function dt(P, G) {
    l.value && (l.value.setDateTimeFormat(P, G), h.value[P] = G);
  }
  function At(P, G) {
    l.value && l.value.mergeDateTimeFormat(P, G);
  }
  function mt(P) {
    return l.value ? l.value.getNumberFormat(P) : {};
  }
  function Je(P, G) {
    l.value && (l.value.setNumberFormat(P, G), v.value[P] = G);
  }
  function pt(P, G) {
    l.value && l.value.mergeNumberFormat(P, G);
  }
  const ht = {
    get id() {
      return l.value ? l.value.id : -1;
    },
    locale: S,
    fallbackLocale: D,
    messages: A,
    datetimeFormats: K,
    numberFormats: de,
    get inheritLocale() {
      return l.value ? l.value.inheritLocale : a;
    },
    set inheritLocale(P) {
      l.value && (l.value.inheritLocale = P);
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
    set missingWarn(P) {
      l.value && (l.value.missingWarn = P);
    },
    get fallbackWarn() {
      return l.value ? l.value.fallbackWarn : T;
    },
    set fallbackWarn(P) {
      l.value && (l.value.missingWarn = P);
    },
    get fallbackRoot() {
      return l.value ? l.value.fallbackRoot : d;
    },
    set fallbackRoot(P) {
      l.value && (l.value.fallbackRoot = P);
    },
    get fallbackFormat() {
      return l.value ? l.value.fallbackFormat : E;
    },
    set fallbackFormat(P) {
      l.value && (l.value.fallbackFormat = P);
    },
    get warnHtmlMessage() {
      return l.value ? l.value.warnHtmlMessage : R;
    },
    set warnHtmlMessage(P) {
      l.value && (l.value.warnHtmlMessage = P);
    },
    get escapeParameter() {
      return l.value ? l.value.escapeParameter : _;
    },
    set escapeParameter(P) {
      l.value && (l.value.escapeParameter = P);
    },
    t: at,
    getPostTranslationHandler: V,
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
  function Et(P) {
    P.locale.value = o.value, P.fallbackLocale.value = i.value, Object.keys(f.value).forEach((G) => {
      P.mergeLocaleMessage(G, f.value[G]);
    }), Object.keys(h.value).forEach((G) => {
      P.mergeDateTimeFormat(G, h.value[G]);
    }), Object.keys(v.value).forEach((G) => {
      P.mergeNumberFormat(G, v.value[G]);
    }), P.escapeParameter = _, P.fallbackFormat = E, P.fallbackRoot = d, P.fallbackWarn = T, P.missingWarn = m, P.warnHtmlMessage = R;
  }
  return fr(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw te($.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const P = l.value = e.proxy.$i18n.__composer;
    t === "global" ? (o.value = P.locale.value, i.value = P.fallbackLocale.value, f.value = P.messages.value, h.value = P.datetimeFormats.value, v.value = P.numberFormats.value) : s && Et(P);
  }), ht;
}
const oc = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], sl = ["t", "rt", "d", "n", "tm", "te"];
function ic(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return oc.forEach((s) => {
    const l = Object.getOwnPropertyDescriptor(t, s);
    if (!l)
      throw te($.UNEXPECTED_ERROR);
    const a = _r(l.value) ? {
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
  }), e.config.globalProperties.$i18n = n, sl.forEach((s) => {
    const l = Object.getOwnPropertyDescriptor(t, s);
    if (!l || !l.value)
      throw te($.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, l);
  }), () => {
    delete e.config.globalProperties.$i18n, sl.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Ti();
__INTLIFY_JIT_COMPILATION__ ? wn(ii) : wn(oi);
Vo(go);
$o(yl);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Re();
  e.__INTLIFY__ = !0, Ao(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function cc() {
  const e = /* @__PURE__ */ Object.assign({
    "./locales/cz_CZ.json": Is,
    "./locales/en_US.json": Ds,
    "./locales/es_ES.json": $s,
    "./locales/fr_FR.json": js,
    "./locales/pl_PL.json": zs,
    "./locales/pt_BR.json": aa,
    "./locales/sk_SK.json": da,
    "./locales/tr_TR.json": Na
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
const uc = Zi({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: cc()
}), fc = (e, t) => {
  e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(uc), e.component("vueSelectSides", vl);
};
vl.install = fc;
export {
  vl as default
};
