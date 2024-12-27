import { openBlock as W, createElementBlock as te, toDisplayString as ke, withDirectives as Ne, vModelText as Zl, createElementVNode as J, resolveComponent as ue, Fragment as At, renderList as mn, normalizeClass as pn, createTextVNode as zl, createCommentVNode as le, vShow as ye, createVNode as be, createBlock as ce, resolveDynamicComponent as er, defineComponent as nn, h as el, getCurrentInstance as gt, effectScope as tr, inject as nr, onMounted as lr, onUnmounted as rr, shallowRef as tl, ref as Je, computed as Le, onBeforeMount as sr, watch as Bt, isRef as ar, Text as or } from "vue";
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nl = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = n();
  })(ir, function() {
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
})(nl);
var ur = nl.exports, hn = ur, ll, rl, xt;
xt = function(e) {
  return function(t) {
    return typeof t === e;
  };
};
rl = function(t, n) {
  var r = 1, s = n || function(l, a) {
    return a;
  };
  return t[0] === "-" && (r = -1, t = t.substr(1)), function(a, o) {
    var i, f = s(t, hn.get(a, t)), h = s(t, hn.get(o, t));
    return f < h && (i = -1), f > h && (i = 1), f === h && (i = 0), i * r;
  };
};
ll = function() {
  var t = Array.prototype.slice.call(arguments), n = t.filter(xt("string")), r = t.filter(xt("function"))[0];
  return function(l, a) {
    for (var o = n.length, i = 0, f = 0; i === 0 && f < o; )
      i = rl(n[f], r)(l, a), f++;
    return i;
  };
};
var fr = ll;
const En = /* @__PURE__ */ cr(fr), Oe = (e) => JSON.parse(JSON.stringify(e)), De = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), yt = (e, t) => {
  let n = [];
  return e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label")), t.sort(En(...n)).map((r) => (r.children && r.children.sort(En(...n)), r)), t;
}, sl = (e, t) => e.filter((n) => String(n) !== String(t)), ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, _r = {
  name: "v-select-all",
  display: "Select all",
  emits: ["update-select-all"],
  props: {
    items: Array
  }
};
function dr(e, t, n, r, s, l) {
  return W(), te("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-select-all"))
  }, ke(e.$t("selectAll")), 1);
}
const al = /* @__PURE__ */ ge(_r, [["render", dr]]), mr = {
  name: "v-deselect-all",
  display: "Deselect all",
  emits: ["update-deselect-all"],
  props: {
    click: Function,
    items: Array
  }
};
function pr(e, t, n, r, s, l) {
  return W(), te("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (a) => e.$emit("update-deselect-all"))
  }, ke(e.$t("deselectAll")), 1);
}
const ol = /* @__PURE__ */ ge(mr, [["render", pr]]), hr = {
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
}, Er = ["placeholder"];
function gr(e, t, n, r, s, l) {
  return Ne((W(), te("input", {
    type: "text",
    "onUpdate:modelValue": t[0] || (t[0] = (a) => s.inputVal = a),
    placeholder: s.thePlaceholder
  }, null, 8, Er)), [
    [Zl, s.inputVal]
  ]);
}
const il = /* @__PURE__ */ ge(hr, [["render", gr]]), vr = {
  name: "v-no-results",
  display: "No results",
  methods: {}
}, Nr = { class: "no-results" };
function Lr(e, t, n, r, s, l) {
  return W(), te("li", Nr, [
    J("span", null, ke(e.$t("searchNoResult")), 1)
  ]);
}
const Or = /* @__PURE__ */ ge(vr, [["render", Lr]]), Tr = {
  name: "v-no-selection",
  display: "No selection",
  methods: {}
}, br = { class: "no-selection" };
function Ir(e, t, n, r, s, l) {
  return W(), te("li", br, [
    J("span", null, ke(e.$t("searchParentSelected")), 1)
  ]);
}
const Sr = /* @__PURE__ */ ge(Tr, [["render", Ir]]), Ar = {
  name: "v-list",
  display: "List",
  mounted() {
  },
  components: {
    "v-no-results": Or,
    "v-no-selection": Sr
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
}, yr = { class: "vss-list-ul" }, Pr = ["onClick"], Cr = { style: {} }, Rr = {
  key: 0,
  class: "vss-list-badge"
}, Dr = { key: 0 }, kr = ["onClick"];
function Mr(e, t, n, r, s, l) {
  const a = ue("v-no-results"), o = ue("v-no-selection");
  return W(), te("ul", yr, [
    (W(!0), te(At, null, mn(n.items, (i, f) => Ne((W(), te("li", {
      key: f,
      onClick: (h) => n.hasChildren ? !1 : l.toggleItem(i, {}, i.selected),
      class: pn(l.liClass(i, n.hasChildren))
    }, [
      J("span", Cr, [
        zl(ke(i.label) + " ", 1),
        l.showCounter(i) ? (W(), te("small", Rr, ke(i.totalChildrenSelected), 1)) : le("", !0)
      ]),
      n.hasChildren ? (W(), te("ul", Dr, [
        (W(!0), te(At, null, mn(i.children, (h, v) => Ne((W(), te("li", {
          key: `${f}-${v}`,
          onClick: (m) => l.toggleItem(h, i, h.selected),
          class: pn(l.liClass(h, !1))
        }, [
          J("span", null, ke(h.label), 1)
        ], 10, kr)), [
          [ye, h.visible]
        ])), 128)),
        Ne(be(a, null, null, 512), [
          [ye, l.totalItems(i.children) === 0]
        ])
      ])) : le("", !0)
    ], 10, Pr)), [
      [ye, l.showParent(i)]
    ])), 128)),
    Ne(be(o, null, null, 512), [
      [ye, l.showNoSelection(n.items)]
    ]),
    Ne(be(a, null, null, 512), [
      [ye, l.showNoResultParent(n.items)]
    ])
  ]);
}
const cl = /* @__PURE__ */ ge(Ar, [["render", Mr]]), Fr = {
  name: "v-separator",
  display: "Separator"
}, Ur = { class: "vss-span" };
function wr(e, t, n, r, s, l) {
  return W(), te("div", Ur, " ‹ › ");
}
const ul = /* @__PURE__ */ ge(Fr, [["render", wr]]), Vr = {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
}, $r = ["title"];
function Wr(e, t, n, r, s, l) {
  return W(), te("span", {
    title: e.$t("totalSelected")
  }, ke(n.value), 9, $r);
}
const fl = /* @__PURE__ */ ge(Vr, [["render", Wr]]), _l = {
  emits: ["update-selected"],
  watch: {
    modelValue(e, t) {
      JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
    },
    dataSelected(e, t) {
      this.$emit("update-selected", e, t);
    },
    orderBy() {
      this.listLeft = yt(this, this.dataList), this.listRight = yt(this, this.dataList);
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
}, Gr = {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [_l],
  components: {
    "v-select-all": al,
    "v-deselect-all": ol,
    "v-search": il,
    "v-separator": ul,
    "v-list": cl,
    "v-total": fl
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
      let r = Oe(this.dataSelected);
      Object.keys(t).length > 0 ? (r[t.value] === void 0 && t.visible && (r[t.value] = []), n ? e.visible && r[t.value].indexOf(e.value) === -1 && r[t.value].push(e.value) : e.visible && (r[t.value] = sl(
        r[t.value],
        e.value
      ))) : n ? r[e.value] === void 0 && (r[e.value] = []) : delete r[e.value], this.dataSelected = r;
    },
    prepareList() {
      let e = this, t = {};
      e.dataListOriginal = Oe(e.list);
      let n = Object.keys(e.modelValue), r = e.list.filter((s) => {
        let l = s.value, a = n.indexOf(l) >= 0;
        return a ? (s.selectedDefault = !0, t[l] = []) : s.selectedDefault = !1, s.children && s.children.filter((o) => {
          let i = o.value;
          a && (e.modelValue[l].indexOf(i) >= 0 ? (o.selectedDefault = !0, t[l].push(i)) : o.selectedDefault = !1);
        }), s;
      });
      e.dataSelected = t, e.dataList = yt(e, r);
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
      let e = this, t = De(this.searchL), n = Object.keys(this.dataSelected), r = Oe(this.listLeft);
      return r = r.filter((s) => {
        let l = De(s.label);
        return n.indexOf(s.value) >= 0 ? s.selected = !0 : s.selected = !1, l.includes(t) ? s.visible = !0 : s.visible = !1, s.children ? (s.children = s.children.map((a) => (a.selected = !1, e.dataSelected[s.value] !== void 0 && (e.dataSelected[s.value].indexOf(a.value) >= 0 ? a.selected = !0 : a.selected = !1), a)), s.totalChildrenSelected = s.children.filter(function(a) {
          return a.selected === !0;
        }).length, s.children) : s;
      }), r;
    },
    filteredListR() {
      let e = this, t = De(e.searchR), n = Oe(this.listLeft);
      return n = e.listRight.filter(function(s) {
        return s.children ? (s.children = s.children.map((l) => (De(l.label).includes(t) ? l.visible = !0 : l.visible = !1, e.dataSelected[s.value] !== void 0 && (e.dataSelected[s.value].indexOf(l.value) >= 0 ? l.selected = !0 : l.selected = !1), l)), s.children) : s;
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
}, Hr = { class: "vss-list" }, Br = { class: "vss-inner-list" }, xr = { class: "vss-footer" }, Yr = { class: "vss-footer-bg" }, jr = {
  key: 1,
  class: "vss-footer-separator"
}, Kr = { class: "vss-list" }, Xr = { class: "vss-inner-list" }, Jr = { class: "vss-footer" }, Qr = { class: "vss-footer-bg" }, qr = {
  key: 1,
  class: "vss-footer-separator"
};
function Zr(e, t, n, r, s, l) {
  const a = ue("v-search"), o = ue("v-list"), i = ue("v-select-all"), f = ue("v-deselect-all"), h = ue("v-total"), v = ue("v-separator");
  return W(), te("div", null, [
    J("div", Hr, [
      J("div", Br, [
        e.search ? (W(), ce(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: s.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchL = m)
        }, null, 8, ["placeholder", "modelValue"])) : le("", !0),
        be(o, {
          "has-children": !1,
          type: e.type,
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Ne(J("div", xr, [
          J("div", Yr, [
            J("div", null, [
              e.toggleAll ? (W(), ce(i, {
                key: 0,
                items: s.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : le("", !0),
              e.toggleAll ? (W(), te("div", jr, "/")) : le("", !0),
              e.toggleAll ? (W(), ce(f, {
                key: 2,
                items: s.listLeft,
                onUpdateDeselectAll: l.updateLeftDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : le("", !0)
            ]),
            e.total ? (W(), ce(h, {
              key: 0,
              value: Object.keys(s.dataSelected).length
            }, null, 8, ["value"])) : le("", !0)
          ])
        ], 512), [
          [ye, e.toggleAll || e.total]
        ])
      ])
    ]),
    be(v),
    J("div", Kr, [
      J("div", Xr, [
        e.search ? (W(), ce(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: s.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (m) => s.searchR = m)
        }, null, 8, ["placeholder", "modelValue"])) : le("", !0),
        be(o, {
          "has-children": !0,
          type: e.type,
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Ne(J("div", Jr, [
          J("div", Qr, [
            J("div", null, [
              e.toggleAll ? (W(), ce(i, {
                key: 0,
                items: s.listRight,
                onUpdateSelectAll: l.updateRightSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : le("", !0),
              e.toggleAll ? (W(), te("div", qr, "/")) : le("", !0),
              e.toggleAll ? (W(), ce(f, {
                key: 2,
                items: s.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : le("", !0)
            ]),
            e.total ? (W(), ce(h, {
              key: 0,
              value: l.totalChildrenSelected
            }, null, 8, ["value"])) : le("", !0)
          ])
        ], 512), [
          [ye, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const zr = /* @__PURE__ */ ge(Gr, [["render", Zr]]), es = {
  name: "mirror-select-sides",
  display: "Mirror select sides",
  mixins: [_l],
  components: {
    "v-select-all": al,
    "v-deselect-all": ol,
    "v-search": il,
    "v-separator": ul,
    "v-list": cl,
    "v-total": fl
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
      let r = Oe(this.dataSelected);
      n ? r.push(e.value) : r = sl(r, e.value), this.dataSelected = r;
    },
    prepareList() {
      this.dataListOriginal = Oe(this.list);
      let e = this, t = [], n = e.list.filter((r) => {
        let s = r.value;
        return e.modelValue.indexOf(s) >= 0 ? (r.selectedDefault = !0, t.push(s)) : r.selectedDefault = !1, r;
      });
      e.dataSelected = t, e.dataList = yt(e, n);
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
      let e = De(this.searchL), t = this.dataSelected, n = Oe(this.listLeft);
      return n = n.filter((r) => {
        let s = De(r.label);
        return t.indexOf(r.value) >= 0 ? (r.selected = !0, r.visible = !1) : (r.selected = !1, r.visible = !0), s.includes(e) && r.visible === !0 ? r.visible = !0 : r.visible = !1, r;
      }), n;
    },
    filteredListR() {
      let e = this, t = De(e.searchR), n = this.dataSelected, r = Oe(e.listLeft);
      return r = r.filter((s) => {
        let l = De(s.label);
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
}, ts = { class: "vss-list" }, ns = { class: "vss-inner-list" }, ls = { class: "vss-footer" }, rs = { class: "vss-footer-bg" }, ss = { class: "vss-list" }, as = { class: "vss-inner-list" }, os = { class: "vss-footer" }, is = { class: "vss-footer-bg" };
function cs(e, t, n, r, s, l) {
  const a = ue("v-search"), o = ue("v-list"), i = ue("v-select-all"), f = ue("v-total"), h = ue("v-separator"), v = ue("v-deselect-all");
  return W(), te("div", null, [
    J("div", ts, [
      J("div", ns, [
        e.search ? (W(), ce(a, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: s.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (m) => s.searchL = m)
        }, null, 8, ["placeholder", "modelValue"])) : le("", !0),
        be(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "left",
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Ne(J("div", ls, [
          J("div", rs, [
            J("div", null, [
              e.toggleAll ? (W(), ce(i, {
                key: 0,
                items: s.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : le("", !0)
            ]),
            e.total ? (W(), ce(f, {
              key: 0,
              value: s.dataSelected.length
            }, null, 8, ["value"])) : le("", !0)
          ])
        ], 512), [
          [ye, e.toggleAll || e.total]
        ])
      ])
    ]),
    be(h),
    J("div", ss, [
      J("div", as, [
        e.search ? (W(), ce(a, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: s.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (m) => s.searchR = m)
        }, null, 8, ["placeholder", "modelValue"])) : le("", !0),
        be(o, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "right",
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Ne(J("div", os, [
          J("div", is, [
            J("div", null, [
              e.toggleAll ? (W(), ce(v, {
                key: 0,
                items: s.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : le("", !0)
            ])
          ])
        ], 512), [
          [ye, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const us = /* @__PURE__ */ ge(es, [["render", cs]]), fs = {
  // i18n,
  name: "vue-select-sides",
  display: "Core select sides",
  components: {
    "mirror-select-sides": us,
    "grouped-select-sides": zr
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
      this.listClone = Oe(e);
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
    this.setDefaultParams(), this.listClone = Oe(this.list);
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
function _s(e, t, n, r, s, l) {
  return W(), ce(er(l.getComponent()), {
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
const dl = /* @__PURE__ */ ge(fs, [["render", _s]]), ds = "Vybrat vše ", ms = "Odebrat vše ", ps = "Hledej...", hs = "Žádný výsledek...", Es = "Nic není vybráno...", gs = "Spolu vybrané", vs = {
  selectAll: ds,
  deselectAll: ms,
  searchPlaceholder: ps,
  searchNoResult: hs,
  searchParentSelected: Es,
  totalSelected: gs
}, Ns = "Select all", Ls = "Deselect all", Os = "Search...", Ts = "No result...", bs = "No items selected...", Is = "Total items selected", Ss = {
  selectAll: Ns,
  deselectAll: Ls,
  searchPlaceholder: Os,
  searchNoResult: Ts,
  searchParentSelected: bs,
  totalSelected: Is
}, As = "Seleccionar todos", ys = "Deseleccionar todos", Ps = "Buscar...", Cs = "Sin resultados...", Rs = "Ningún elemento seleccionado...", Ds = "Elementos seleccionados", ks = {
  selectAll: As,
  deselectAll: ys,
  searchPlaceholder: Ps,
  searchNoResult: Cs,
  searchParentSelected: Rs,
  totalSelected: Ds
}, Ms = "Ajouter tout", Fs = "Supprimer tout", Us = "Recherche...", ws = "Pas de résultat...", Vs = "Sélection vide...", $s = "Éléments sélectionnés", Ws = {
  selectAll: Ms,
  deselectAll: Fs,
  searchPlaceholder: Us,
  searchNoResult: ws,
  searchParentSelected: Vs,
  totalSelected: $s
}, Gs = "Wybierz wszystko", Hs = "Wyczyść zaznaczenie", Bs = "Szukaj...", xs = "Brak wyników...", Ys = "Nie wybrano żadnych elementów...", js = "Liczba wybranych elementów", Ks = {
  selectAll: Gs,
  deselectAll: Hs,
  searchPlaceholder: Bs,
  searchNoResult: xs,
  searchParentSelected: Ys,
  totalSelected: js
}, Xs = "Selecionar todos", Js = "Remover todos", Qs = "Pesquisar...", qs = "Sem nenhum resultado...", Zs = "Nenhum item selecionado...", zs = "Total de itens selecionados", ea = {
  selectAll: Xs,
  deselectAll: Js,
  searchPlaceholder: Qs,
  searchNoResult: qs,
  searchParentSelected: Zs,
  totalSelected: zs
}, ta = "Vybrať všetko", na = "Odobrať všetko", la = "Hľadaj...", ra = "Žiadny výsledok...", sa = "Nič nie je vybrané...", aa = "Spolu vybrané", oa = {
  selectAll: ta,
  deselectAll: na,
  searchPlaceholder: la,
  searchNoResult: ra,
  searchParentSelected: sa,
  totalSelected: aa
}, ia = "Hepsini Seç", ca = "Hepsini Çıkar", ua = "Ara...", fa = "Sonuç Bulunamadı...", _a = "Hiçbiri Seçilmedi...", da = "Hepsi Seçildi", ma = {
  selectAll: ia,
  deselectAll: ca,
  searchPlaceholder: ua,
  searchNoResult: fa,
  searchParentSelected: _a,
  totalSelected: da
};
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ee = typeof window < "u";
let de, Ge;
if (process.env.NODE_ENV !== "production") {
  const e = Ee && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (de = (t) => {
    e.mark(t);
  }, Ge = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const pa = /\{([0-9a-zA-Z]+)\}/g;
function ln(e, ...t) {
  return t.length === 1 && w(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(pa, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Ie = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ha = (e, t, n) => Ea({ l: e, k: t, s: n }), Ea = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Z = (e) => typeof e == "number" && isFinite(e), ga = (e) => pl(e) === "[object Date]", Me = (e) => pl(e) === "[object RegExp]", Dt = (e) => F(e) && Object.keys(e).length === 0, re = Object.assign;
let gn;
const Pe = () => gn || (gn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const va = Object.prototype.hasOwnProperty;
function Pt(e, t) {
  return va.call(e, t);
}
const K = Array.isArray, x = (e) => typeof e == "function", C = (e) => typeof e == "string", U = (e) => typeof e == "boolean", w = (e) => e !== null && typeof e == "object", Na = (e) => w(e) && x(e.then) && x(e.catch), ml = Object.prototype.toString, pl = (e) => ml.call(e), F = (e) => {
  if (!w(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, La = (e) => e == null ? "" : K(e) || F(e) && e.toString === ml ? JSON.stringify(e, null, 2) : String(e);
function Oa(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Nn = 2;
function Ta(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const l = [];
  for (let a = 0; a < r.length; a++)
    if (s += r[a].length + 1, s >= t) {
      for (let o = a - Nn; o <= a + Nn || n > s; o++) {
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
function kt(e) {
  let t = e;
  return () => ++t;
}
function z(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ln = {};
function hl(e) {
  Ln[e] || (Ln[e] = !0, z(e));
}
function rn() {
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
const It = (e) => !w(e) || K(e);
function St(e, t) {
  if (It(e) || It(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((l) => {
      w(r[l]) && !w(s[l]) && (s[l] = Array.isArray(r[l]) ? [] : {}), It(s[l]) || It(r[l]) ? s[l] = r[l] : n.push({ src: r[l], des: s[l] });
    });
  }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function ba(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ct(e, t, n) {
  return { start: e, end: t };
}
const Ia = /\{([0-9a-zA-Z]+)\}/g;
function El(e, ...t) {
  return t.length === 1 && Sa(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ia, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const gl = Object.assign, On = (e) => typeof e == "string", Sa = (e) => e !== null && typeof e == "object";
function vl(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Mt = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Aa = {
  [Mt.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function ya(e, t, ...n) {
  const r = El(Aa[e], ...n || []), s = { message: String(r), code: e };
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
}, Pa = {
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
function et(e, t, n = {}) {
  const { domain: r, messages: s, args: l } = n, a = El((s || Pa)[e] || "", ...l || []), o = new SyntaxError(String(a));
  return o.code = e, t && (o.location = t), o.domain = r, o;
}
function Ca(e) {
  throw e;
}
const Ra = /<\/?[\w\s="/.':;#-\/]+>/, Da = (e) => Ra.test(e), Se = " ", ka = "\r", ae = `
`, Ma = "\u2028", Fa = "\u2029";
function Ua(e) {
  const t = e;
  let n = 0, r = 1, s = 1, l = 0;
  const a = (S) => t[S] === ka && t[S + 1] === ae, o = (S) => t[S] === ae, i = (S) => t[S] === Fa, f = (S) => t[S] === Ma, h = (S) => a(S) || o(S) || i(S) || f(S), v = () => n, m = () => r, T = () => s, d = () => l, E = (S) => a(S) || i(S) || f(S) ? ae : t[S], N = () => E(n), y = () => E(n + l);
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
const Re = void 0, wa = ".", Tn = "'", Va = "tokenizer";
function $a(e, t = {}) {
  const n = t.location !== !1, r = Ua(e), s = () => r.index(), l = () => ba(r.line(), r.column(), r.index()), a = l(), o = s(), i = {
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
    const X = f();
    if (u.column += O, u.offset += O, h) {
      const Y = n ? Ct(X.startLoc, u) : null, B = et(c, Y, {
        domain: Va,
        args: k
      });
      h(B);
    }
  }
  function m(c, u, O) {
    c.endLoc = l(), c.currentType = u;
    const k = { type: u };
    return n && (k.loc = Ct(c.startLoc, c.endLoc)), O != null && (k.value = O), k;
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
    for (; c.currentPeek() === Se || c.currentPeek() === ae; )
      u += c.currentPeek(), c.peek();
    return u;
  }
  function N(c) {
    const u = E(c);
    return c.skipToPeek(), u;
  }
  function y(c) {
    if (c === Re)
      return !1;
    const u = c.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function R(c) {
    if (c === Re)
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
    const k = c.currentPeek() === "-" ? c.peek() : c.currentPeek(), X = R(k);
    return c.resetPeek(), X;
  }
  function I(c, u) {
    const { currentType: O } = u;
    if (O !== 2)
      return !1;
    E(c);
    const k = c.currentPeek() === Tn;
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
      const Y = c.currentPeek();
      return Y === "{" ? y(c.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === Se || !Y ? !1 : Y === ae ? (c.peek(), k()) : V(c, !1);
    }, X = k();
    return c.resetPeek(), X;
  }
  function j(c) {
    E(c);
    const u = c.currentPeek() === "|";
    return c.resetPeek(), u;
  }
  function _e(c) {
    const u = E(c), O = c.currentPeek() === "%" && c.peek() === "{";
    return c.resetPeek(), {
      isModulo: O,
      hasSpace: u.length > 0
    };
  }
  function V(c, u = !0) {
    const O = (X = !1, Y = "", B = !1) => {
      const p = c.currentPeek();
      return p === "{" ? Y === "%" ? !1 : X : p === "@" || !p ? Y === "%" ? !0 : X : p === "%" ? (c.peek(), O(X, "%", !0)) : p === "|" ? Y === "%" || B ? !0 : !(Y === Se || Y === ae) : p === Se ? (c.peek(), O(!0, Se, B)) : p === ae ? (c.peek(), O(!0, ae, B)) : !0;
    }, k = O();
    return u && c.resetPeek(), k;
  }
  function se(c, u) {
    const O = c.currentChar();
    return O === Re ? Re : u(O) ? (c.next(), O) : null;
  }
  function tt(c) {
    const u = c.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function nt(c) {
    return se(c, tt);
  }
  function ve(c) {
    const u = c.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function lt(c) {
    return se(c, ve);
  }
  function rt(c) {
    const u = c.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function st(c) {
    return se(c, rt);
  }
  function at(c) {
    const u = c.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function ot(c) {
    return se(c, at);
  }
  function me(c) {
    let u = "", O = "";
    for (; u = st(c); )
      O += u;
    return O;
  }
  function xe(c) {
    N(c);
    const u = c.currentChar();
    return u !== "%" && v(M.EXPECTED_TOKEN, l(), 0, u), c.next(), "%";
  }
  function Ye(c) {
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
      else if (O === Se || O === ae)
        if (V(c))
          u += O, c.next();
        else {
          if (j(c))
            break;
          u += O, c.next();
        }
      else
        u += O, c.next();
    }
    return u;
  }
  function it(c) {
    N(c);
    let u = "", O = "";
    for (; u = lt(c); )
      O += u;
    return c.currentChar() === Re && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), O;
  }
  function ct(c) {
    N(c);
    let u = "";
    return c.currentChar() === "-" ? (c.next(), u += `-${me(c)}`) : u += me(c), c.currentChar() === Re && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u;
  }
  function ut(c) {
    return c !== Tn && c !== ae;
  }
  function Tt(c) {
    N(c), d(c, "'");
    let u = "", O = "";
    for (; u = se(c, ut); )
      u === "\\" ? O += ft(c) : O += u;
    const k = c.currentChar();
    return k === ae || k === Re ? (v(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), k === ae && (c.next(), d(c, "'")), O) : (d(c, "'"), O);
  }
  function ft(c) {
    const u = c.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return c.next(), `\\${u}`;
      case "u":
        return je(c, u, 4);
      case "U":
        return je(c, u, 6);
      default:
        return v(M.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, u), "";
    }
  }
  function je(c, u, O) {
    d(c, u);
    let k = "";
    for (let X = 0; X < O; X++) {
      const Y = ot(c);
      if (!Y) {
        v(M.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${u}${k}${c.currentChar()}`);
        break;
      }
      k += Y;
    }
    return `\\${u}${k}`;
  }
  function _t(c) {
    return c !== "{" && c !== "}" && c !== Se && c !== ae;
  }
  function dt(c) {
    N(c);
    let u = "", O = "";
    for (; u = se(c, _t); )
      O += u;
    return O;
  }
  function mt(c) {
    let u = "", O = "";
    for (; u = nt(c); )
      O += u;
    return O;
  }
  function P(c) {
    const u = (O) => {
      const k = c.currentChar();
      return k === "{" || k === "%" || k === "@" || k === "|" || k === "(" || k === ")" || !k || k === Se ? O : (O += k, c.next(), u(O));
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
  function pt(c, u) {
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
        return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), O = we(c, u) || T(u), u.braceNest = 0, O;
      default: {
        let X = !0, Y = !0, B = !0;
        if (j(c))
          return u.braceNest > 0 && v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), O = m(u, 1, G(c)), u.braceNest = 0, u.inLinked = !1, O;
        if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7))
          return v(M.UNTERMINATED_CLOSING_BRACE, l(), 0), u.braceNest = 0, ht(c, u);
        if (X = _(c, u))
          return O = m(u, 5, it(c)), N(c), O;
        if (Y = g(c, u))
          return O = m(u, 6, ct(c)), N(c), O;
        if (B = I(c, u))
          return O = m(u, 7, Tt(c)), N(c), O;
        if (!X && !Y && !B)
          return O = m(u, 13, dt(c)), v(M.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, O.value), N(c), O;
        break;
      }
    }
    return O;
  }
  function we(c, u) {
    const { currentType: O } = u;
    let k = null;
    const X = c.currentChar();
    switch ((O === 8 || O === 9 || O === 12 || O === 10) && (X === ae || X === Se) && v(M.INVALID_LINKED_FORMAT, l(), 0), X) {
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
        return j(c) ? (k = m(u, 1, G(c)), u.braceNest = 0, u.inLinked = !1, k) : L(c, u) || D(c, u) ? (N(c), we(c, u)) : S(c, u) ? (N(c), m(u, 12, mt(c))) : A(c, u) ? (N(c), X === "{" ? pt(c, u) || k : m(u, 11, P(c))) : (O === 8 && v(M.INVALID_LINKED_FORMAT, l(), 0), u.braceNest = 0, u.inLinked = !1, ht(c, u));
    }
  }
  function ht(c, u) {
    let O = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return pt(c, u) || T(u);
    if (u.inLinked)
      return we(c, u) || T(u);
    switch (c.currentChar()) {
      case "{":
        return pt(c, u) || T(u);
      case "}":
        return v(M.UNBALANCED_CLOSING_BRACE, l(), 0), c.next(), m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return we(c, u) || T(u);
      default: {
        if (j(c))
          return O = m(u, 1, G(c)), u.braceNest = 0, u.inLinked = !1, O;
        const { isModulo: X, hasSpace: Y } = _e(c);
        if (X)
          return Y ? m(u, 0, Ye(c)) : m(u, 4, xe(c));
        if (V(c))
          return m(u, 0, Ye(c));
        break;
      }
    }
    return O;
  }
  function Vt() {
    const { currentType: c, offset: u, startLoc: O, endLoc: k } = i;
    return i.lastType = c, i.lastOffset = u, i.lastStartLoc = O, i.lastEndLoc = k, i.offset = s(), i.startLoc = l(), r.currentChar() === Re ? m(
      i,
      14
      /* TokenTypes.EOF */
    ) : ht(r, i);
  }
  return {
    nextToken: Vt,
    currentOffset: s,
    currentPosition: l,
    context: f
  };
}
const Wa = "parser", Ga = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ha(e, t, n) {
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
function Ba(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function s(_, g, I, L, ...S) {
    const D = _.currentPosition();
    if (D.offset += L, D.column += L, n) {
      const A = t ? Ct(I, D) : null, j = et(g, A, {
        domain: Wa,
        args: S
      });
      n(j);
    }
  }
  function l(_, g, I, L, ...S) {
    const D = _.currentPosition();
    if (D.offset += L, D.column += L, r) {
      const A = t ? Ct(I, D) : null;
      r(ya(g, A, S));
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
    return D.value = g.replace(Ga, Ha), _.nextToken(), o(D, _.currentOffset(), _.currentPosition()), D;
  }
  function m(_) {
    const g = _.nextToken(), I = _.context(), { lastOffset: L, lastStartLoc: S } = I, D = a(8, L, S);
    return g.type !== 12 ? (s(_, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), D.value = "", o(D, L, S), {
      nextConsumeToken: g,
      node: D
    }) : (g.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, he(g)), D.value = g.value || "", o(D, _.currentOffset(), _.currentPosition()), {
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
    switch (L.type !== 10 && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(L)), L = _.nextToken(), L.type === 2 && (L = _.nextToken()), L.type) {
      case 11:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(L)), I.key = T(_, L.value || "");
        break;
      case 5:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(L)), I.key = h(_, L.value || "");
        break;
      case 6:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(L)), I.key = f(_, L.value || "");
        break;
      case 7:
        L.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(L)), I.key = v(_, L.value || "");
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
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(V)), S.items.push(i(_, V.value || ""));
          break;
        case 6:
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(V)), S.items.push(f(_, V.value || ""));
          break;
        case 4:
          A = !0;
          break;
        case 5:
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(V)), S.items.push(h(_, V.value || "", !!A)), A && (l(_, Mt.USE_MODULO_SYNTAX, g.lastStartLoc, 0, he(V)), A = null);
          break;
        case 7:
          V.value == null && s(_, M.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, he(V)), S.items.push(v(_, V.value || ""));
          break;
        case 8: {
          const se = d(_);
          S.items.push(se.node), D = se.nextConsumeToken || null;
          break;
        }
      }
    } while (g.currentType !== 14 && g.currentType !== 1);
    const j = g.currentType === 1 ? g.lastOffset : _.currentOffset(), _e = g.currentType === 1 ? g.lastEndLoc : _.currentPosition();
    return o(S, j, _e), S;
  }
  function N(_, g, I, L) {
    const S = _.context();
    let D = L.items.length === 0;
    const A = a(1, g, I);
    A.cases = [], A.cases.push(L);
    do {
      const j = E(_);
      D || (D = j.items.length === 0), A.cases.push(j);
    } while (S.currentType !== 14);
    return D && s(_, M.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function y(_) {
    const g = _.context(), { offset: I, startLoc: L } = g, S = E(_);
    return g.currentType === 14 ? S : N(_, I, L, S);
  }
  function R(_) {
    const g = $a(_, gl({}, e)), I = g.context(), L = a(0, I.offset, I.startLoc);
    return t && L.loc && (L.loc.source = _), L.body = y(g), e.onCacheKey && (L.cacheKey = e.onCacheKey(_)), I.currentType !== 14 && s(g, M.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, _[I.offset] || ""), o(L, g.currentOffset(), g.currentPosition()), L;
  }
  return { parse: R };
}
function he(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function xa(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function bn(e, t) {
  for (let n = 0; n < e.length; n++)
    sn(e[n], t);
}
function sn(e, t) {
  switch (e.type) {
    case 1:
      bn(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      bn(e.items, t);
      break;
    case 6: {
      sn(e.key, t), t.helper(
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
function Ya(e, t = {}) {
  const n = xa(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && sn(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function ja(e) {
  const t = e.body;
  return t.type === 2 ? In(t) : t.cases.forEach((n) => In(n)), e;
}
function In(e) {
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
      e.static = vl(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Ka = "minifier";
function Qe(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Qe(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Qe(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Qe(n[r]);
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
      Qe(t.key), t.k = t.key, delete t.key, t.modifier && (Qe(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw et(M.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Ka,
        args: [e.type]
      });
  }
  delete e.type;
}
const Xa = "parser";
function Ja(e, t) {
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
function Qa(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Ze(e, t.key), t.modifier ? (e.push(", "), Ze(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function qa(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let l = 0; l < s && (Ze(e, t.items[l]), l !== s - 1); l++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Za(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let l = 0; l < s && (Ze(e, t.cases[l]), l !== s - 1); l++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function za(e, t) {
  t.body ? Ze(e, t.body) : e.push("null");
}
function Ze(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      za(e, t);
      break;
    case 1:
      Za(e, t);
      break;
    case 2:
      qa(e, t);
      break;
    case 6:
      Qa(e, t);
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
      throw et(M.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Xa,
        args: [t.type]
      });
  }
}
const eo = (e, t = {}) => {
  const n = On(t.mode) ? t.mode : "normal", r = On(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, l = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], i = Ja(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: l,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), o.length > 0 && (i.push(`const { ${vl(o.map((v) => `${v}: _${v}`), ", ")} } = ctx`), i.newline()), i.push("return "), Ze(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: f, map: h } = i.context();
  return {
    ast: e,
    code: f,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function to(e, t = {}) {
  const n = gl({}, t), r = !!n.jit, s = !!n.minify, l = n.optimize == null ? !0 : n.optimize, o = Ba(n).parse(e);
  return r ? (l && ja(o), s && Qe(o), { ast: o, code: "" }) : (Ya(o, n), eo(o, n));
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function no() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pe().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Pe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ue = [];
Ue[
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
Ue[
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
Ue[
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
Ue[
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
Ue[
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
Ue[
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
Ue[
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
const lo = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ro(e) {
  return lo.test(e);
}
function so(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ao(e) {
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
function oo(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ro(t) ? so(t) : "*" + t;
}
function io(e) {
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
      if (s = 0, a === void 0 || (a = oo(a), a === !1))
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
      if (i = ao(l), v = Ue[r], f = v[i] || v.l || 8, f === 8 || (r = f[0], f[1] !== void 0 && (h = m[f[1]], h && (o = l, h() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Sn = /* @__PURE__ */ new Map();
function co(e, t) {
  return w(e) ? e[t] : null;
}
function uo(e, t) {
  if (!w(e))
    return null;
  let n = Sn.get(t);
  if (n || (n = io(t), n && Sn.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, l = 0;
  for (; l < r; ) {
    const a = s[n[l]];
    if (a === void 0 || x(s))
      return null;
    s = a, l++;
  }
  return s;
}
const fo = (e) => e, _o = (e) => "", mo = "text", po = (e) => e.length === 0 ? "" : Oa(e), ho = La;
function An(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Eo(e) {
  const t = Z(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Z(e.named.count) || Z(e.named.n)) ? Z(e.named.count) ? e.named.count : Z(e.named.n) ? e.named.n : t : t;
}
function go(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function vo(e = {}) {
  const t = e.locale, n = Eo(e), r = w(e.pluralRules) && C(t) && x(e.pluralRules[t]) ? e.pluralRules[t] : An, s = w(e.pluralRules) && C(t) && x(e.pluralRules[t]) ? An : void 0, l = (y) => y[r(n, y.length, s)], a = e.list || [], o = (y) => a[y], i = e.named || {};
  Z(e.pluralIndex) && go(n, i);
  const f = (y) => i[y];
  function h(y) {
    const R = x(e.messages) ? e.messages(y) : w(e.messages) ? e.messages[y] : !1;
    return R || (e.parent ? e.parent.message(y) : _o);
  }
  const v = (y) => e.modifiers ? e.modifiers[y] : fo, m = F(e.processor) && x(e.processor.normalize) ? e.processor.normalize : po, T = F(e.processor) && x(e.processor.interpolate) ? e.processor.interpolate : ho, d = F(e.processor) && C(e.processor.type) ? e.processor.type : mo, N = {
    list: o,
    named: f,
    plural: l,
    linked: (y, ...R) => {
      const [_, g] = R;
      let I = "text", L = "";
      R.length === 1 ? w(_) ? (L = _.modifier || L, I = _.type || I) : C(_) && (L = _ || L) : R.length === 2 && (C(_) && (L = _ || L), C(g) && (I = g || I));
      const S = h(y)(N), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && K(S) && L ? S[0] : S
      );
      return L ? v(L)(D, I) : D;
    },
    message: h,
    type: d,
    interpolate: T,
    normalize: m,
    values: re({}, a, i)
  };
  return N;
}
let vt = null;
function No(e) {
  vt = e;
}
function Lo(e, t, n) {
  vt && vt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Oo = /* @__PURE__ */ To(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function To(e) {
  return (t) => vt && vt.emit(e, t);
}
const Nl = Mt.__EXTEND_POINT__, $e = kt(Nl), oe = {
  NOT_FOUND_KEY: Nl,
  // 2
  FALLBACK_TO_TRANSLATE: $e(),
  // 3
  CANNOT_FORMAT_NUMBER: $e(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: $e(),
  // 5
  CANNOT_FORMAT_DATE: $e(),
  // 6
  FALLBACK_TO_DATE_FORMAT: $e(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: $e(),
  // 8
  __EXTEND_POINT__: $e()
  // 9
}, bo = {
  [oe.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [oe.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [oe.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [oe.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [oe.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [oe.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [oe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function He(e, ...t) {
  return ln(bo[e], ...t);
}
const Ll = M.__EXTEND_POINT__, We = kt(Ll), ne = {
  INVALID_ARGUMENT: Ll,
  // 17
  INVALID_DATE_ARGUMENT: We(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: We(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: We(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: We(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: We(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: We(),
  // 23
  __EXTEND_POINT__: We()
  // 24
};
function Te(e) {
  return et(e, null, process.env.NODE_ENV !== "production" ? { messages: Io } : void 0);
}
const Io = {
  [ne.INVALID_ARGUMENT]: "Invalid arguments",
  [ne.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ne.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ne.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ne.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ne.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ne.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function an(e, t) {
  return t.locale != null ? yn(t.locale) : yn(e.locale);
}
let $t;
function yn(e) {
  if (C(e))
    return e;
  if (x(e)) {
    if (e.resolvedOnce && $t != null)
      return $t;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Na(t))
        throw Te(ne.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return $t = t;
    } else
      throw Te(ne.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Te(ne.NOT_SUPPORT_LOCALE_TYPE);
}
function So(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...K(t) ? t : w(t) ? Object.keys(t) : C(t) ? [t] : [n]
  ])];
}
function Ol(e, t, n) {
  const r = C(n) ? n : ze, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let l = s.__localeChainCache.get(r);
  if (!l) {
    l = [];
    let a = [n];
    for (; K(a); )
      a = Pn(l, a, t);
    const o = K(t) || !F(t) ? t : t.default ? t.default : null;
    a = C(o) ? [o] : o, K(a) && Pn(l, a, !1), s.__localeChainCache.set(r, l);
  }
  return l;
}
function Pn(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && U(r); s++) {
    const l = t[s];
    C(l) && (r = Ao(e, t[s], n));
  }
  return r;
}
function Ao(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const l = s.join("-");
    r = yo(e, l, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function yo(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (K(n) || F(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Po = "9.14.1", Ft = -1, ze = "en-US", Rt = "", Cn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Co() {
  return {
    upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && w(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && w(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && C(e) ? Cn(e) : t === "vnode" && w(e) && "__v_isVNode" in e ? Cn(e.children) : e
  };
}
let Tl;
function Rn(e) {
  Tl = e;
}
let bl;
function Ro(e) {
  bl = e;
}
let Il;
function Do(e) {
  Il = e;
}
let Sl = null;
const ko = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Sl = e;
}, Mo = /* @__NO_SIDE_EFFECTS__ */ () => Sl;
let Al = null;
const Dn = (e) => {
  Al = e;
}, Fo = () => Al;
let kn = 0;
function Uo(e = {}) {
  const t = x(e.onWarn) ? e.onWarn : z, n = C(e.version) ? e.version : Po, r = C(e.locale) || x(e.locale) ? e.locale : ze, s = x(r) ? ze : r, l = K(e.fallbackLocale) || F(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = F(e.messages) ? e.messages : { [s]: {} }, o = F(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, i = F(e.numberFormats) ? e.numberFormats : { [s]: {} }, f = re({}, e.modifiers || {}, Co()), h = e.pluralRules || {}, v = x(e.missing) ? e.missing : null, m = U(e.missingWarn) || Me(e.missingWarn) ? e.missingWarn : !0, T = U(e.fallbackWarn) || Me(e.fallbackWarn) ? e.fallbackWarn : !0, d = !!e.fallbackFormat, E = !!e.unresolving, N = x(e.postTranslation) ? e.postTranslation : null, y = F(e.processor) ? e.processor : null, R = U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, g = x(e.messageCompiler) ? e.messageCompiler : Tl;
  process.env.NODE_ENV !== "production" && x(e.messageCompiler) && hl(He(oe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const I = x(e.messageResolver) ? e.messageResolver : bl || co, L = x(e.localeFallbacker) ? e.localeFallbacker : Il || So, S = w(e.fallbackContext) ? e.fallbackContext : void 0, D = e, A = w(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), j = w(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), _e = w(D.__meta) ? D.__meta : {};
  kn++;
  const V = {
    version: n,
    cid: kn,
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
    __meta: _e
  };
  return V.datetimeFormats = o, V.numberFormats = i, V.__datetimeFormatters = A, V.__numberFormatters = j, process.env.NODE_ENV !== "production" && (V.__v_emitter = D.__v_emitter != null ? D.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Lo(V, n, _e), V;
}
function Ut(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function yl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function on(e, t, n, r, s) {
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
    return process.env.NODE_ENV !== "production" && yl(r, t) && a(He(oe.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Et(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Pl(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function wo(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Pl(e, t[r]))
      return !0;
  return !1;
}
function Wt(e) {
  return (n) => Vo(n, e);
}
function Vo(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, s = r.c || r.cases;
    return e.plural(s.reduce((l, a) => [
      ...l,
      Mn(e, a)
    ], []));
  } else
    return Mn(e, n);
}
function Mn(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((s, l) => [...s, Yt(e, l)], []);
    return e.normalize(r);
  }
}
function Yt(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const r = t;
      return r.v || r.value;
    }
    case 9: {
      const r = t;
      return r.v || r.value;
    }
    case 4: {
      const r = t;
      return e.interpolate(e.named(r.k || r.key));
    }
    case 5: {
      const r = t;
      return e.interpolate(e.list(r.i != null ? r.i : r.index));
    }
    case 6: {
      const r = t, s = r.m || r.modifier;
      return e.linked(Yt(e, r.k || r.key), s ? Yt(e, s) : void 0, e.type);
    }
    case 7: {
      const r = t;
      return r.v || r.value;
    }
    case 8: {
      const r = t;
      return r.v || r.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const $o = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Cl(e, t) {
  t && Da(e) && z(ln($o, { source: e }));
}
const Rl = (e) => e;
let qe = /* @__PURE__ */ Object.create(null);
function Dl(e) {
  e.code === Mt.USE_MODULO_SYNTAX && z(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
const Fe = (e) => w(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function kl(e, t = {}) {
  let n = !1;
  const r = t.onError || Ca;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...to(e, t), detectError: n };
}
const Wo = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!C(e))
    throw Te(ne.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Dl);
  {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Cl(e, n);
    const s = (t.onCacheKey || Rl)(e), l = qe[s];
    if (l)
      return l;
    const { code: a, detectError: o } = kl(e, t), i = new Function(`return ${a}`)();
    return o ? i : qe[s] = i;
  }
};
function Go(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Dl), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
    const n = U(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Cl(e, n);
    const s = (t.onCacheKey || Rl)(e), l = qe[s];
    if (l)
      return l;
    const { ast: a, detectError: o } = kl(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), i = Wt(a);
    return o ? i : qe[s] = i;
  } else {
    if (process.env.NODE_ENV !== "production" && !Fe(e))
      return z(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = qe[n];
      return r || (qe[n] = Wt(e));
    } else
      return Wt(e);
  }
}
const Fn = () => "", pe = (e) => x(e);
function Un(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: l, fallbackLocale: a, messages: o } = e, [i, f] = jt(...t), h = U(f.missingWarn) ? f.missingWarn : e.missingWarn, v = U(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, m = U(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, T = !!f.resolvedMessage, d = C(f.default) || U(f.default) ? U(f.default) ? l ? i : () => i : f.default : n ? l ? i : () => i : "", E = n || d !== "", N = an(e, f);
  m && Ho(f);
  let [y, R, _] = T ? [
    i,
    N,
    o[N] || {}
  ] : Ml(e, i, N, a, v, h), g = y, I = i;
  if (!T && !(C(g) || Fe(g) || pe(g)) && E && (g = d, I = g), !T && (!(C(g) || Fe(g) || pe(g)) || !C(R)))
    return s ? Ft : i;
  if (process.env.NODE_ENV !== "production" && C(g) && e.messageCompiler == null)
    return z(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let L = !1;
  const S = () => {
    L = !0;
  }, D = pe(g) ? g : Fl(e, i, R, g, I, S);
  if (L)
    return g;
  const A = jo(e, R, _, f), j = vo(A), _e = Bo(e, D, j), V = r ? r(_e, i) : _e;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const se = {
      timestamp: Date.now(),
      key: C(i) ? i : pe(g) ? g.key : "",
      locale: R || (pe(g) ? g.locale : ""),
      format: C(g) ? g : pe(g) ? g.source : "",
      message: V
    };
    se.meta = re({}, e.__meta, /* @__PURE__ */ Mo() || {}), Oo(se);
  }
  return V;
}
function Ho(e) {
  K(e.list) ? e.list = e.list.map((t) => C(t) ? vn(t) : t) : w(e.named) && Object.keys(e.named).forEach((t) => {
    C(e.named[t]) && (e.named[t] = vn(e.named[t]));
  });
}
function Ml(e, t, n, r, s, l) {
  const { messages: a, onWarn: o, messageResolver: i, localeFallbacker: f } = e, h = f(e, r, n);
  let v = {}, m, T = null, d = n, E = null;
  const N = "translate";
  for (let y = 0; y < h.length; y++) {
    if (m = E = h[y], process.env.NODE_ENV !== "production" && n !== m && !Pl(n, m) && Ut(s, t) && o(He(oe.FALLBACK_TO_TRANSLATE, {
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
    v = a[m] || {};
    let R = null, _, g;
    if (process.env.NODE_ENV !== "production" && Ee && (R = window.performance.now(), _ = "intlify-message-resolve-start", g = "intlify-message-resolve-end", de && de(_)), (T = i(v, t)) === null && (T = v[t]), process.env.NODE_ENV !== "production" && Ee) {
      const I = window.performance.now(), L = e.__v_emitter;
      L && R && T && L.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: T,
        time: I - R,
        groupId: `${N}:${t}`
      }), _ && g && de && Ge && (de(g), Ge("intlify message resolve", _, g));
    }
    if (C(T) || Fe(T) || pe(T))
      break;
    if (!wo(m, h)) {
      const I = on(
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
function Fl(e, t, n, r, s, l) {
  const { messageCompiler: a, warnHtmlMessage: o } = e;
  if (pe(r)) {
    const m = r;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (a == null) {
    const m = () => r;
    return m.locale = n, m.key = t, m;
  }
  let i = null, f, h;
  process.env.NODE_ENV !== "production" && Ee && (i = window.performance.now(), f = "intlify-message-compilation-start", h = "intlify-message-compilation-end", de && de(f));
  const v = a(r, xo(e, n, s, r, o, l));
  if (process.env.NODE_ENV !== "production" && Ee) {
    const m = window.performance.now(), T = e.__v_emitter;
    T && i && T.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: m - i,
      groupId: `translate:${t}`
    }), f && h && de && Ge && (de(h), Ge("intlify message compilation", f, h));
  }
  return v.locale = n, v.key = t, v.source = r, v;
}
function Bo(e, t, n) {
  let r = null, s, l;
  process.env.NODE_ENV !== "production" && Ee && (r = window.performance.now(), s = "intlify-message-evaluation-start", l = "intlify-message-evaluation-end", de && de(s));
  const a = t(n);
  if (process.env.NODE_ENV !== "production" && Ee) {
    const o = window.performance.now(), i = e.__v_emitter;
    i && r && i.emit("message-evaluation", {
      type: "message-evaluation",
      value: a,
      time: o - r,
      groupId: `translate:${t.key}`
    }), s && l && de && Ge && (de(l), Ge("intlify message evaluation", s, l));
  }
  return a;
}
function jt(...e) {
  const [t, n, r] = e, s = {};
  if (!C(t) && !Z(t) && !pe(t) && !Fe(t))
    throw Te(ne.INVALID_ARGUMENT);
  const l = Z(t) ? String(t) : (pe(t), t);
  return Z(n) ? s.plural = n : C(n) ? s.default = n : F(n) && !Dt(n) ? s.named = n : K(n) && (s.list = n), Z(r) ? s.plural = r : C(r) ? s.default = r : F(r) && re(s, r), [l, s];
}
function xo(e, t, n, r, s, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      if (l && l(a), process.env.NODE_ENV !== "production") {
        const o = Yo(r), i = `Message compilation error: ${a.message}`, f = a.location && o && Ta(o, a.location.start.offset, a.location.end.offset), h = e.__v_emitter;
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
    onCacheKey: (a) => ha(t, n, a)
  };
}
function Yo(e) {
  if (C(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function jo(e, t, n, r) {
  const { modifiers: s, pluralRules: l, messageResolver: a, fallbackLocale: o, fallbackWarn: i, missingWarn: f, fallbackContext: h } = e, m = {
    locale: t,
    modifiers: s,
    pluralRules: l,
    messages: (T) => {
      let d = a(n, T);
      if (d == null && h) {
        const [, , E] = Ml(h, T, t, o, i, f);
        d = a(E, T);
      }
      if (C(d) || Fe(d)) {
        let E = !1;
        const y = Fl(e, T, t, d, T, () => {
          E = !0;
        });
        return E ? Fn : y;
      } else return pe(d) ? d : Fn;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Z(r.plural) && (m.pluralIndex = r.plural), m;
}
const wn = typeof Intl < "u", Ul = {
  dateTimeFormat: wn && typeof Intl.DateTimeFormat < "u",
  numberFormat: wn && typeof Intl.NumberFormat < "u"
};
function Vn(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: l, localeFallbacker: a } = e, { __datetimeFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Ul.dateTimeFormat)
    return l(He(oe.CANNOT_FORMAT_DATE)), Rt;
  const [i, f, h, v] = Kt(...t), m = U(h.missingWarn) ? h.missingWarn : e.missingWarn, T = U(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, d = !!h.part, E = an(e, h), N = a(
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
    if (R = I = N[A], process.env.NODE_ENV !== "production" && E !== R && Ut(T, i) && l(He(oe.FALLBACK_TO_DATE_FORMAT, {
      key: i,
      target: R
    })), process.env.NODE_ENV !== "production" && E !== R) {
      const j = e.__v_emitter;
      j && j.emit("fallback", {
        type: L,
        key: i,
        from: g,
        to: I,
        groupId: `${L}:${i}`
      });
    }
    if (y = n[R] || {}, _ = y[i], F(_))
      break;
    on(e, i, R, m, L), g = I;
  }
  if (!F(_) || !C(R))
    return r ? Ft : i;
  let S = `${R}__${i}`;
  Dt(v) || (S = `${S}__${JSON.stringify(v)}`);
  let D = o.get(S);
  return D || (D = new Intl.DateTimeFormat(R, re({}, _, v)), o.set(S, D)), d ? D.formatToParts(f) : D.format(f);
}
const wl = [
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
function Kt(...e) {
  const [t, n, r, s] = e, l = {};
  let a = {}, o;
  if (C(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw Te(ne.INVALID_ISO_DATE_ARGUMENT);
    const f = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    o = new Date(f);
    try {
      o.toISOString();
    } catch {
      throw Te(ne.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ga(t)) {
    if (isNaN(t.getTime()))
      throw Te(ne.INVALID_DATE_ARGUMENT);
    o = t;
  } else if (Z(t))
    o = t;
  else
    throw Te(ne.INVALID_ARGUMENT);
  return C(n) ? l.key = n : F(n) && Object.keys(n).forEach((i) => {
    wl.includes(i) ? a[i] = n[i] : l[i] = n[i];
  }), C(r) ? l.locale = r : F(r) && (a = r), F(s) && (a = s), [l.key || "", o, l, a];
}
function $n(e, t, n) {
  const r = e;
  for (const s in n) {
    const l = `${t}__${s}`;
    r.__datetimeFormatters.has(l) && r.__datetimeFormatters.delete(l);
  }
}
function Wn(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: l, localeFallbacker: a } = e, { __numberFormatters: o } = e;
  if (process.env.NODE_ENV !== "production" && !Ul.numberFormat)
    return l(He(oe.CANNOT_FORMAT_NUMBER)), Rt;
  const [i, f, h, v] = Xt(...t), m = U(h.missingWarn) ? h.missingWarn : e.missingWarn, T = U(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, d = !!h.part, E = an(e, h), N = a(
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
    if (R = I = N[A], process.env.NODE_ENV !== "production" && E !== R && Ut(T, i) && l(He(oe.FALLBACK_TO_NUMBER_FORMAT, {
      key: i,
      target: R
    })), process.env.NODE_ENV !== "production" && E !== R) {
      const j = e.__v_emitter;
      j && j.emit("fallback", {
        type: L,
        key: i,
        from: g,
        to: I,
        groupId: `${L}:${i}`
      });
    }
    if (y = n[R] || {}, _ = y[i], F(_))
      break;
    on(e, i, R, m, L), g = I;
  }
  if (!F(_) || !C(R))
    return r ? Ft : i;
  let S = `${R}__${i}`;
  Dt(v) || (S = `${S}__${JSON.stringify(v)}`);
  let D = o.get(S);
  return D || (D = new Intl.NumberFormat(R, re({}, _, v)), o.set(S, D)), d ? D.formatToParts(f) : D.format(f);
}
const Vl = [
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
function Xt(...e) {
  const [t, n, r, s] = e, l = {};
  let a = {};
  if (!Z(t))
    throw Te(ne.INVALID_ARGUMENT);
  const o = t;
  return C(n) ? l.key = n : F(n) && Object.keys(n).forEach((i) => {
    Vl.includes(i) ? a[i] = n[i] : l[i] = n[i];
  }), C(r) ? l.locale = r : F(r) && (a = r), F(s) && (a = s), [l.key || "", o, l, a];
}
function Gn(e, t, n) {
  const r = e;
  for (const s in n) {
    const l = `${t}__${s}`;
    r.__numberFormatters.has(l) && r.__numberFormatters.delete(l);
  }
}
no();
function Ko() {
  return $l().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function $l() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Xo = typeof Proxy == "function", Jo = "devtools-plugin:setup", Qo = "plugin:settings:set";
let Xe, Jt;
function qo() {
  var e;
  return Xe !== void 0 || (typeof window < "u" && window.performance ? (Xe = !0, Jt = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Xe = !0, Jt = globalThis.perf_hooks.performance) : Xe = !1), Xe;
}
function Zo() {
  return qo() ? Jt.now() : Date.now();
}
class zo {
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
        return Zo();
      }
    }, n && n.on(Qo, (a, o) => {
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
function ei(e, t) {
  const n = e, r = $l(), s = Ko(), l = Xo && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !l))
    s.emit(Jo, e, t);
  else {
    const a = l ? new zo(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const ti = "9.14.1";
function ni() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Pe().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Pe().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Pe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pe().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Wl = oe.__EXTEND_POINT__, Ae = kt(Wl), Q = {
  FALLBACK_TO_ROOT: Wl,
  // 9
  NOT_SUPPORTED_PRESERVE: Ae(),
  // 10
  NOT_SUPPORTED_FORMATTER: Ae(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Ae(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: Ae(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: Ae(),
  // 14
  NOT_FOUND_PARENT_SCOPE: Ae(),
  // 15
  IGNORE_OBJ_FLATTEN: Ae(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: Ae(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Ae()
  // 18
}, li = {
  [Q.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Q.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Q.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Q.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Q.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Q.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Q.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Q.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Q.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [Q.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function fe(e, ...t) {
  return ln(li[e], ...t);
}
const Gl = ne.__EXTEND_POINT__, ie = kt(Gl), $ = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Gl,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: ie(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ie(),
  // 26
  NOT_INSTALLED: ie(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: ie(),
  // 28
  // directive module errors
  REQUIRED_VALUE: ie(),
  // 29
  INVALID_VALUE: ie(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ie(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: ie(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: ie(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ie(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ie(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ie(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ie(),
  // 37
  // for enhancement
  __EXTEND_POINT__: ie()
  // 38
};
function ee(e, ...t) {
  return et(e, null, process.env.NODE_ENV !== "production" ? { messages: ri, args: t } : void 0);
}
const ri = {
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
}, Qt = /* @__PURE__ */ Ie("__translateVNode"), qt = /* @__PURE__ */ Ie("__datetimeParts"), Zt = /* @__PURE__ */ Ie("__numberParts"), Be = /* @__PURE__ */ Ie("__enableEmitter"), Nt = /* @__PURE__ */ Ie("__disableEmitter"), Hl = Ie("__setPluralRules"), Bl = /* @__PURE__ */ Ie("__injectWithOption"), zt = /* @__PURE__ */ Ie("__dispose");
function Lt(e) {
  if (!w(e))
    return e;
  for (const t in e)
    if (Pt(e, t))
      if (!t.includes("."))
        w(e[t]) && Lt(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, l = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] in s || (s[n[a]] = {}), !w(s[n[a]])) {
            process.env.NODE_ENV !== "production" && z(fe(Q.IGNORE_OBJ_FLATTEN, {
              key: n[a]
            })), l = !0;
            break;
          }
          s = s[n[a]];
        }
        l || (s[n[r]] = e[t], delete e[t]), w(s[n[r]]) && Lt(s[n[r]]);
      }
  return e;
}
function wt(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: l } = t, a = F(n) ? n : K(r) ? {} : { [e]: {} };
  if (K(r) && r.forEach((o) => {
    if ("locale" in o && "resource" in o) {
      const { locale: i, resource: f } = o;
      i ? (a[i] = a[i] || {}, St(f, a[i])) : St(f, a);
    } else
      C(o) && St(JSON.parse(o), a);
  }), s == null && l)
    for (const o in a)
      Pt(a, o) && Lt(a[o]);
  return a;
}
function xl(e) {
  return e.type;
}
function Yl(e, t, n) {
  let r = w(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = wt(e.locale.value, {
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
function Hn(e) {
  return be(or, null, e, 0);
}
const Bn = "__INTLIFY_META__", xn = () => [], si = () => !1;
let Yn = 0;
function jn(e) {
  return (t, n, r, s) => e(n, r, gt() || void 0, s);
}
const ai = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = gt();
  let t = null;
  return e && (t = xl(e)[Bn]) ? { [Bn]: t } : null;
};
function cn(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0, l = e.flatJson, a = Ee ? Je : tl, o = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && o && hl(fe(Q.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let i = U(e.inheritLocale) ? e.inheritLocale : !0;
  const f = a(
    // prettier-ignore
    n && i ? n.locale.value : C(e.locale) ? e.locale : ze
  ), h = a(
    // prettier-ignore
    n && i ? n.fallbackLocale.value : C(e.fallbackLocale) || K(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value
  ), v = a(wt(f.value, e)), m = a(F(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }), T = a(F(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
  let d = n ? n.missingWarn : U(e.missingWarn) || Me(e.missingWarn) ? e.missingWarn : !0, E = n ? n.fallbackWarn : U(e.fallbackWarn) || Me(e.fallbackWarn) ? e.fallbackWarn : !0, N = n ? n.fallbackRoot : U(e.fallbackRoot) ? e.fallbackRoot : !0, y = !!e.fallbackFormat, R = x(e.missing) ? e.missing : null, _ = x(e.missing) ? jn(e.missing) : null, g = x(e.postTranslation) ? e.postTranslation : null, I = n ? n.warnHtmlMessage : U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter;
  const S = n ? n.modifiers : F(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || n && n.pluralRules, A;
  A = (() => {
    s && Dn(null);
    const p = {
      version: ti,
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
    const b = Uo(p);
    return s && Dn(b), b;
  })(), Et(A, f.value, h.value);
  function _e() {
    return [
      f.value,
      h.value,
      v.value,
      m.value,
      T.value
    ];
  }
  const V = Le({
    get: () => f.value,
    set: (p) => {
      f.value = p, A.locale = f.value;
    }
  }), se = Le({
    get: () => h.value,
    set: (p) => {
      h.value = p, A.fallbackLocale = h.value, Et(A, f.value, p);
    }
  }), tt = Le(() => v.value), nt = /* @__PURE__ */ Le(() => m.value), ve = /* @__PURE__ */ Le(() => T.value);
  function lt() {
    return x(g) ? g : null;
  }
  function rt(p) {
    g = p, A.postTranslation = p;
  }
  function st() {
    return R;
  }
  function at(p) {
    p !== null && (_ = jn(p)), R = p, A.missing = _;
  }
  function ot(p, b) {
    return p !== "translate" || !b.resolvedMessage;
  }
  const me = (p, b, H, q, Ce, bt) => {
    _e();
    let Ke;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = n ? Fo() : void 0), Ke = p(A);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = void 0);
    }
    if (H !== "translate exists" && // for not `te` (e.g `t`)
    Z(Ke) && Ke === Ft || H === "translate exists" && !Ke) {
      const [Ve, ql] = b();
      if (process.env.NODE_ENV !== "production" && n && C(Ve) && ot(H, ql) && (N && (Ut(E, Ve) || yl(d, Ve)) && z(fe(Q.FALLBACK_TO_ROOT, {
        key: Ve,
        type: H
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: dn } = A;
        dn && N && dn.emit("fallback", {
          type: H,
          key: Ve,
          to: "global",
          groupId: `${H}:${Ve}`
        });
      }
      return n && N ? q(n) : Ce(Ve);
    } else {
      if (bt(Ke))
        return Ke;
      throw ee($.UNEXPECTED_RETURN_TYPE);
    }
  };
  function xe(...p) {
    return me((b) => Reflect.apply(Un, null, [b, ...p]), () => jt(...p), "translate", (b) => Reflect.apply(b.t, b, [...p]), (b) => b, (b) => C(b));
  }
  function Ye(...p) {
    const [b, H, q] = p;
    if (q && !w(q))
      throw ee($.INVALID_ARGUMENT);
    return xe(b, H, re({ resolvedMessage: !0 }, q || {}));
  }
  function it(...p) {
    return me((b) => Reflect.apply(Vn, null, [b, ...p]), () => Kt(...p), "datetime format", (b) => Reflect.apply(b.d, b, [...p]), () => Rt, (b) => C(b));
  }
  function ct(...p) {
    return me((b) => Reflect.apply(Wn, null, [b, ...p]), () => Xt(...p), "number format", (b) => Reflect.apply(b.n, b, [...p]), () => Rt, (b) => C(b));
  }
  function ut(p) {
    return p.map((b) => C(b) || Z(b) || U(b) ? Hn(String(b)) : b);
  }
  const ft = {
    normalize: ut,
    interpolate: (p) => p,
    type: "vnode"
  };
  function je(...p) {
    return me(
      (b) => {
        let H;
        const q = b;
        try {
          q.processor = ft, H = Reflect.apply(Un, null, [q, ...p]);
        } finally {
          q.processor = null;
        }
        return H;
      },
      () => jt(...p),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[Qt](...p),
      (b) => [Hn(b)],
      (b) => K(b)
    );
  }
  function _t(...p) {
    return me(
      (b) => Reflect.apply(Wn, null, [b, ...p]),
      () => Xt(...p),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[Zt](...p),
      xn,
      (b) => C(b) || K(b)
    );
  }
  function dt(...p) {
    return me(
      (b) => Reflect.apply(Vn, null, [b, ...p]),
      () => Kt(...p),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b) => b[qt](...p),
      xn,
      (b) => C(b) || K(b)
    );
  }
  function mt(p) {
    D = p, A.pluralRules = D;
  }
  function P(p, b) {
    return me(() => {
      if (!p)
        return !1;
      const H = C(b) ? b : f.value, q = we(H), Ce = A.messageResolver(q, p);
      return o ? Ce != null : Fe(Ce) || pe(Ce) || C(Ce);
    }, () => [p], "translate exists", (H) => Reflect.apply(H.te, H, [p, b]), si, (H) => U(H));
  }
  function G(p) {
    let b = null;
    const H = Ol(A, h.value, f.value);
    for (let q = 0; q < H.length; q++) {
      const Ce = v.value[H[q]] || {}, bt = A.messageResolver(Ce, p);
      if (bt != null) {
        b = bt;
        break;
      }
    }
    return b;
  }
  function pt(p) {
    const b = G(p);
    return b ?? (n ? n.tm(p) || {} : {});
  }
  function we(p) {
    return v.value[p] || {};
  }
  function ht(p, b) {
    if (l) {
      const H = { [p]: b };
      for (const q in H)
        Pt(H, q) && Lt(H[q]);
      b = H[p];
    }
    v.value[p] = b, A.messages = v.value;
  }
  function Vt(p, b) {
    v.value[p] = v.value[p] || {};
    const H = { [p]: b };
    if (l)
      for (const q in H)
        Pt(H, q) && Lt(H[q]);
    b = H[p], St(b, v.value[p]), A.messages = v.value;
  }
  function c(p) {
    return m.value[p] || {};
  }
  function u(p, b) {
    m.value[p] = b, A.datetimeFormats = m.value, $n(A, p, b);
  }
  function O(p, b) {
    m.value[p] = re(m.value[p] || {}, b), A.datetimeFormats = m.value, $n(A, p, b);
  }
  function k(p) {
    return T.value[p] || {};
  }
  function X(p, b) {
    T.value[p] = b, A.numberFormats = T.value, Gn(A, p, b);
  }
  function Y(p, b) {
    T.value[p] = re(T.value[p] || {}, b), A.numberFormats = T.value, Gn(A, p, b);
  }
  Yn++, n && Ee && (Bt(n.locale, (p) => {
    i && (f.value = p, A.locale = p, Et(A, f.value, h.value));
  }), Bt(n.fallbackLocale, (p) => {
    i && (h.value = p, A.fallbackLocale = p, Et(A, f.value, h.value));
  }));
  const B = {
    id: Yn,
    locale: V,
    fallbackLocale: se,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(p) {
      i = p, p && n && (f.value = n.locale.value, h.value = n.fallbackLocale.value, Et(A, f.value, h.value));
    },
    get availableLocales() {
      return Object.keys(v.value).sort();
    },
    messages: tt,
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
    t: xe,
    getLocaleMessage: we,
    setLocaleMessage: ht,
    mergeLocaleMessage: Vt,
    getPostTranslationHandler: lt,
    setPostTranslationHandler: rt,
    getMissingHandler: st,
    setMissingHandler: at,
    [Hl]: mt
  };
  return B.datetimeFormats = nt, B.numberFormats = ve, B.rt = Ye, B.te = P, B.tm = pt, B.d = it, B.n = ct, B.getDateTimeFormat = c, B.setDateTimeFormat = u, B.mergeDateTimeFormat = O, B.getNumberFormat = k, B.setNumberFormat = X, B.mergeNumberFormat = Y, B[Bl] = r, B[Qt] = je, B[qt] = dt, B[Zt] = _t, process.env.NODE_ENV !== "production" && (B[Be] = (p) => {
    A.__v_emitter = p;
  }, B[Nt] = () => {
    A.__v_emitter = void 0;
  }), B;
}
function oi(e) {
  const t = C(e.locale) ? e.locale : ze, n = C(e.fallbackLocale) || K(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = x(e.missing) ? e.missing : void 0, s = U(e.silentTranslationWarn) || Me(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, l = U(e.silentFallbackWarn) || Me(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = U(e.fallbackRoot) ? e.fallbackRoot : !0, o = !!e.formatFallbackMessages, i = F(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, h = x(e.postTranslation) ? e.postTranslation : void 0, v = C(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, T = U(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && z(fe(Q.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && z(fe(Q.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let d = e.messages;
  if (F(e.sharedMessages)) {
    const L = e.sharedMessages;
    d = Object.keys(L).reduce((D, A) => {
      const j = D[A] || (D[A] = {});
      return re(j, L[A]), D;
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
function en(e = {}, t) {
  {
    const n = cn(oi(e)), { __extender: r } = e, s = {
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
        return process.env.NODE_ENV !== "production" && z(fe(Q.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(l) {
        process.env.NODE_ENV !== "production" && z(fe(Q.NOT_SUPPORTED_FORMATTER));
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
        return process.env.NODE_ENV !== "production" && z(fe(Q.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(l) {
        process.env.NODE_ENV !== "production" && z(fe(Q.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
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
          throw ee($.INVALID_ARGUMENT);
        const m = a;
        return C(o) ? f.locale = o : K(o) ? h = o : F(o) && (v = o), K(i) ? h = i : F(i) && (v = i), Reflect.apply(n.t, n, [
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
          throw ee($.INVALID_ARGUMENT);
        const m = a;
        return C(o) ? f.locale = o : Z(o) ? f.plural = o : K(o) ? h = o : F(o) && (v = o), C(i) ? f.locale = i : K(i) ? h = i : F(i) && (v = i), Reflect.apply(n.t, n, [
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
        return process.env.NODE_ENV !== "production" && z(fe(Q.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return s.__extender = r, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (l) => {
      const a = n;
      a[Be] && a[Be](l);
    }, s.__disableEmitter = () => {
      const l = n;
      l[Nt] && l[Nt]();
    }), s;
  }
}
const un = {
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
function ii({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === At ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function jl(e) {
  return At;
}
const ci = /* @__PURE__ */ nn({
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
      validator: (e) => Z(e) || !isNaN(e)
    }
  }, un),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || _n({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const l = Object.keys(n).filter((v) => v !== "_"), a = {};
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = C(e.plural) ? +e.plural : e.plural);
      const o = ii(t, l), i = s[Qt](e.keypath, o, a), f = re({}, r), h = C(e.tag) || w(e.tag) ? e.tag : jl();
      return el(h, f, i);
    };
  }
}), Gt = ci;
function ui(e) {
  return K(e) && !C(e[0]);
}
function Kl(e, t, n, r) {
  const { slots: s, attrs: l } = t;
  return () => {
    const a = { part: !0 };
    let o = {};
    e.locale && (a.locale = e.locale), C(e.format) ? a.key = e.format : w(e.format) && (C(e.format.key) && (a.key = e.format.key), o = Object.keys(e.format).reduce((m, T) => n.includes(T) ? re({}, m, { [T]: e.format[T] }) : m, {}));
    const i = r(e.value, a, o);
    let f = [a.key];
    K(i) ? f = i.map((m, T) => {
      const d = s[m.type], E = d ? d({ [m.type]: m.value, index: T, parts: i }) : [m.value];
      return ui(E) && (E[0].key = `${m.type}-${T}`), E;
    }) : C(i) && (f = [i]);
    const h = re({}, l), v = C(e.tag) || w(e.tag) ? e.tag : jl();
    return el(v, h, f);
  };
}
const fi = /* @__PURE__ */ nn({
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
  }, un),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || _n({
      useScope: e.scope,
      __useComponent: !0
    });
    return Kl(e, t, Vl, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Zt](...r)
    ));
  }
}), Kn = fi, _i = /* @__PURE__ */ nn({
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
  }, un),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || _n({
      useScope: e.scope,
      __useComponent: !0
    });
    return Kl(e, t, wl, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[qt](...r)
    ));
  }
}), Xn = _i;
function di(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function mi(e) {
  const t = (a) => {
    const { instance: o, modifiers: i, value: f } = a;
    if (!o || !o.$)
      throw ee($.UNEXPECTED_ERROR);
    const h = di(e, o.$);
    process.env.NODE_ENV !== "production" && i.preserve && z(fe(Q.NOT_SUPPORTED_PRESERVE));
    const v = Jn(f);
    return [
      Reflect.apply(h.t, h, [...Qn(v)]),
      h
    ];
  };
  return {
    created: (a, o) => {
      const [i, f] = t(o);
      Ee && e.global === f && (a.__i18nWatcher = Bt(f.locale, () => {
        o.instance && o.instance.$forceUpdate();
      })), a.__composer = f, a.textContent = i;
    },
    unmounted: (a) => {
      Ee && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: o }) => {
      if (a.__composer) {
        const i = a.__composer, f = Jn(o);
        a.textContent = Reflect.apply(i.t, i, [
          ...Qn(f)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [o] = t(a);
      return { textContent: o };
    }
  };
}
function Jn(e) {
  if (C(e))
    return { path: e };
  if (F(e)) {
    if (!("path" in e))
      throw ee($.REQUIRED_VALUE, "path");
    return e;
  } else
    throw ee($.INVALID_VALUE);
}
function Qn(e) {
  const { path: t, locale: n, args: r, choice: s, plural: l } = e, a = {}, o = r || {};
  return C(n) && (a.locale = n), Z(s) && (a.plural = s), Z(l) && (a.plural = l), [t, o, a];
}
function pi(e, t, ...n) {
  const r = F(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName, l = U(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && l && s && z(fe(Q.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: Gt.name
  })), l && ([s ? "i18n" : Gt.name, "I18nT"].forEach((a) => e.component(a, Gt)), [Kn.name, "I18nN"].forEach((a) => e.component(a, Kn)), [Xn.name, "I18nD"].forEach((a) => e.component(a, Xn))), e.directive("t", mi(t));
}
const Ht = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, hi = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Ei = {
  "vue-i18n-timeline": 16764185
}, Xl = "vue-i18n: composer properties";
let tn;
async function gi(e, t) {
  return new Promise((n, r) => {
    try {
      ei({
        id: "vue-devtools-plugin-vue-i18n",
        label: Ht[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Xl],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        tn = s, s.on.visitComponentTree(({ componentInstance: a, treeNode: o }) => {
          vi(a, o, t);
        }), s.on.inspectComponent(({ componentInstance: a, instanceData: o }) => {
          a.vnode.el && a.vnode.el.__VUE_I18N__ && o && (t.mode === "legacy" ? a.vnode.el.__VUE_I18N__ !== t.global.__composer && qn(o, a.vnode.el.__VUE_I18N__) : qn(o, a.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Ht[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: hi[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), s.on.getInspectorTree((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && bi(a, t);
        });
        const l = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (a) => {
          if (a.app === e && a.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), Si(a, t), a.nodeId === "global") {
              if (!l.has(a.app)) {
                const [o] = await s.getComponentInstances(a.app);
                l.set(a.app, o);
              }
              s.highlightElement(l.get(a.app));
            } else {
              const o = Ii(a.nodeId, t);
              o && s.highlightElement(o);
            }
        }), s.on.editInspectorState((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && yi(a, t);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Ht[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: Ei[
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
function Jl(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function vi(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const s = {
      label: `i18n (${Jl(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function qn(e, t) {
  const n = Xl;
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
    value: fn(t.messages.value)
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
function fn(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    x(r) && "source" in r ? t[n] = Ti(r) : Fe(r) && r.loc && r.loc.source ? t[n] = r.loc.source : w(r) ? t[n] = fn(r) : t[n] = r;
  }), t;
}
const Ni = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Li(e) {
  return e.replace(/[<>"&]/g, Oi);
}
function Oi(e) {
  return Ni[e] || e;
}
function Ti(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Li(e.source)}")` : "(?)"}`
    }
  };
}
function bi(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, s] of t.__instances) {
    const l = t.mode === "composition" ? s : s.__composer;
    n !== l && e.rootNodes.push({
      id: l.id.toString(),
      label: `${Jl(r)} Scope`
    });
  }
}
function Ii(e, t) {
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
function Ql(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Si(e, t) {
  const n = Ql(e.nodeId, t);
  return n && (e.state = Ai(n)), null;
}
function Ai(e) {
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
      value: fn(e.messages.value)
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
function Ot(e, t) {
  if (tn) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), tn.addTimelineEvent({
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
function yi(e, t) {
  const n = Ql(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && C(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (C(e.state.value) || K(e.state.value) || w(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && U(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function Pi(e, t, n) {
  return {
    beforeCreate() {
      const r = gt();
      if (!r)
        throw ee($.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const l = s.i18n;
        if (s.__i18n && (l.__i18n = s.__i18n), l.__root = t, this === this.$root)
          this.$i18n = Zn(e, l);
        else {
          l.__injectWithOption = !0, l.__extender = n.__vueI18nExtend, this.$i18n = en(l);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = Zn(e, s);
        else {
          this.$i18n = en({
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
      s.__i18nGlobal && Yl(t, s, s), this.$t = (...l) => this.$i18n.t(...l), this.$rt = (...l) => this.$i18n.rt(...l), this.$tc = (...l) => this.$i18n.tc(...l), this.$te = (l, a) => this.$i18n.te(l, a), this.$d = (...l) => this.$i18n.d(...l), this.$n = (...l) => this.$i18n.n(...l), this.$tm = (l) => this.$i18n.tm(l), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const s = this.__v_emitter = rn();
        r.__enableEmitter && r.__enableEmitter(s), s.on("*", Ot);
      }
    },
    unmounted() {
      const r = gt();
      if (!r)
        throw ee($.UNEXPECTED_ERROR);
      const s = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Ot), delete this.__v_emitter), this.$i18n && (s.__disableEmitter && s.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Zn(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Hl](t.pluralizationRules || e.pluralizationRules);
  const n = wt(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const Ci = /* @__PURE__ */ Ie("global-vue-i18n");
function Ri(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && U(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = U(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, l = /* @__PURE__ */ new Map(), [a, o] = Di(e, n), i = /* @__PURE__ */ Ie(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && s && z(fe(Q.NOTICE_DROP_ALLOW_COMPOSITION));
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
        !n && r && (E = Gi(T, m.global)), __VUE_I18N_FULL_INSTALL__ && pi(T, m, ...d), __VUE_I18N_LEGACY_API__ && n && T.mixin(Pi(o, o.__composer, m));
        const N = T.unmount;
        if (T.unmount = () => {
          E && E(), m.dispose(), N();
        }, process.env.NODE_ENV !== "production") {
          if (!await gi(T, m))
            throw ee($.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const R = rn();
          if (n) {
            const _ = o;
            _.__enableEmitter && _.__enableEmitter(R);
          } else {
            const _ = o;
            _[Be] && _[Be](R);
          }
          R.on("*", Ot);
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
function _n(e = {}) {
  const t = gt();
  if (t == null)
    throw ee($.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw ee($.NOT_INSTALLED);
  const n = ki(t), r = Fi(n), s = xl(t), l = Mi(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw ee($.NOT_AVAILABLE_IN_LEGACY_MODE);
    return $i(t, l, r, e);
  }
  if (l === "global")
    return Yl(r, e, s), r;
  if (l === "parent") {
    let i = Ui(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && z(fe(Q.NOT_FOUND_PARENT_SCOPE)), i = r), i;
  }
  const a = n;
  let o = a.__getInstance(t);
  if (o == null) {
    const i = re({}, e);
    "__i18n" in s && (i.__i18n = s.__i18n), r && (i.__root = r), o = cn(i), a.__composerExtend && (o[zt] = a.__composerExtend(o)), Vi(a, t, o), a.__setInstance(t, o);
  }
  return o;
}
function Di(e, t, n) {
  const r = tr();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => en(e)) : r.run(() => cn(e));
    if (s == null)
      throw ee($.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function ki(e) {
  {
    const t = nr(e.isCE ? Ci : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw ee(e.isCE ? $.NOT_INSTALLED_WITH_PROVIDE : $.UNEXPECTED_ERROR);
    return t;
  }
}
function Mi(e, t) {
  return Dt(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Fi(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ui(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let l = wi(t, n);
  for (; l != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const o = a.__getInstance(l);
      o != null && (r = o.__composer, n && r && !r[Bl] && (r = null));
    }
    if (r != null || s === l)
      break;
    l = l.parent;
  }
  return r;
}
function wi(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Vi(e, t, n) {
  let r = null;
  lr(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = rn();
      const s = n;
      s[Be] && s[Be](r), r.on("*", Ot);
    }
  }, t), rr(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Ot), s[Nt] && s[Nt](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const l = s[zt];
    l && (l(), delete s[zt]);
  }, t);
}
function $i(e, t, n, r = {}) {
  const s = t === "local", l = tl(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw ee($.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = U(r.inheritLocale) ? r.inheritLocale : !C(r.locale), o = Je(
    // prettier-ignore
    !s || a ? n.locale.value : C(r.locale) ? r.locale : ze
  ), i = Je(
    // prettier-ignore
    !s || a ? n.fallbackLocale.value : C(r.fallbackLocale) || K(r.fallbackLocale) || F(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : o.value
  ), f = Je(wt(o.value, r)), h = Je(F(r.datetimeFormats) ? r.datetimeFormats : { [o.value]: {} }), v = Je(F(r.numberFormats) ? r.numberFormats : { [o.value]: {} }), m = s ? n.missingWarn : U(r.missingWarn) || Me(r.missingWarn) ? r.missingWarn : !0, T = s ? n.fallbackWarn : U(r.fallbackWarn) || Me(r.fallbackWarn) ? r.fallbackWarn : !0, d = s ? n.fallbackRoot : U(r.fallbackRoot) ? r.fallbackRoot : !0, E = !!r.fallbackFormat, N = x(r.missing) ? r.missing : null, y = x(r.postTranslation) ? r.postTranslation : null, R = s ? n.warnHtmlMessage : U(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, _ = !!r.escapeParameter, g = s ? n.modifiers : F(r.modifiers) ? r.modifiers : {}, I = r.pluralRules || s && n.pluralRules;
  function L() {
    return [
      o.value,
      i.value,
      f.value,
      h.value,
      v.value
    ];
  }
  const S = Le({
    get: () => l.value ? l.value.locale.value : o.value,
    set: (P) => {
      l.value && (l.value.locale.value = P), o.value = P;
    }
  }), D = Le({
    get: () => l.value ? l.value.fallbackLocale.value : i.value,
    set: (P) => {
      l.value && (l.value.fallbackLocale.value = P), i.value = P;
    }
  }), A = Le(() => l.value ? l.value.messages.value : f.value), j = Le(() => h.value), _e = Le(() => v.value);
  function V() {
    return l.value ? l.value.getPostTranslationHandler() : y;
  }
  function se(P) {
    l.value && l.value.setPostTranslationHandler(P);
  }
  function tt() {
    return l.value ? l.value.getMissingHandler() : N;
  }
  function nt(P) {
    l.value && l.value.setMissingHandler(P);
  }
  function ve(P) {
    return L(), P();
  }
  function lt(...P) {
    return l.value ? ve(() => Reflect.apply(l.value.t, null, [...P])) : ve(() => "");
  }
  function rt(...P) {
    return l.value ? Reflect.apply(l.value.rt, null, [...P]) : "";
  }
  function st(...P) {
    return l.value ? ve(() => Reflect.apply(l.value.d, null, [...P])) : ve(() => "");
  }
  function at(...P) {
    return l.value ? ve(() => Reflect.apply(l.value.n, null, [...P])) : ve(() => "");
  }
  function ot(P) {
    return l.value ? l.value.tm(P) : {};
  }
  function me(P, G) {
    return l.value ? l.value.te(P, G) : !1;
  }
  function xe(P) {
    return l.value ? l.value.getLocaleMessage(P) : {};
  }
  function Ye(P, G) {
    l.value && (l.value.setLocaleMessage(P, G), f.value[P] = G);
  }
  function it(P, G) {
    l.value && l.value.mergeLocaleMessage(P, G);
  }
  function ct(P) {
    return l.value ? l.value.getDateTimeFormat(P) : {};
  }
  function ut(P, G) {
    l.value && (l.value.setDateTimeFormat(P, G), h.value[P] = G);
  }
  function Tt(P, G) {
    l.value && l.value.mergeDateTimeFormat(P, G);
  }
  function ft(P) {
    return l.value ? l.value.getNumberFormat(P) : {};
  }
  function je(P, G) {
    l.value && (l.value.setNumberFormat(P, G), v.value[P] = G);
  }
  function _t(P, G) {
    l.value && l.value.mergeNumberFormat(P, G);
  }
  const dt = {
    get id() {
      return l.value ? l.value.id : -1;
    },
    locale: S,
    fallbackLocale: D,
    messages: A,
    datetimeFormats: j,
    numberFormats: _e,
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
    t: lt,
    getPostTranslationHandler: V,
    setPostTranslationHandler: se,
    getMissingHandler: tt,
    setMissingHandler: nt,
    rt,
    d: st,
    n: at,
    tm: ot,
    te: me,
    getLocaleMessage: xe,
    setLocaleMessage: Ye,
    mergeLocaleMessage: it,
    getDateTimeFormat: ct,
    setDateTimeFormat: ut,
    mergeDateTimeFormat: Tt,
    getNumberFormat: ft,
    setNumberFormat: je,
    mergeNumberFormat: _t
  };
  function mt(P) {
    P.locale.value = o.value, P.fallbackLocale.value = i.value, Object.keys(f.value).forEach((G) => {
      P.mergeLocaleMessage(G, f.value[G]);
    }), Object.keys(h.value).forEach((G) => {
      P.mergeDateTimeFormat(G, h.value[G]);
    }), Object.keys(v.value).forEach((G) => {
      P.mergeNumberFormat(G, v.value[G]);
    }), P.escapeParameter = _, P.fallbackFormat = E, P.fallbackRoot = d, P.fallbackWarn = T, P.missingWarn = m, P.warnHtmlMessage = R;
  }
  return sr(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw ee($.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const P = l.value = e.proxy.$i18n.__composer;
    t === "global" ? (o.value = P.locale.value, i.value = P.fallbackLocale.value, f.value = P.messages.value, h.value = P.datetimeFormats.value, v.value = P.numberFormats.value) : s && mt(P);
  }), dt;
}
const Wi = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], zn = ["t", "rt", "d", "n", "tm", "te"];
function Gi(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Wi.forEach((s) => {
    const l = Object.getOwnPropertyDescriptor(t, s);
    if (!l)
      throw ee($.UNEXPECTED_ERROR);
    const a = ar(l.value) ? {
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
  }), e.config.globalProperties.$i18n = n, zn.forEach((s) => {
    const l = Object.getOwnPropertyDescriptor(t, s);
    if (!l || !l.value)
      throw ee($.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, l);
  }), () => {
    delete e.config.globalProperties.$i18n, zn.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
ni();
__INTLIFY_JIT_COMPILATION__ ? Rn(Go) : Rn(Wo);
Ro(uo);
Do(Ol);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Pe();
  e.__INTLIFY__ = !0, No(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function Hi() {
  const e = /* @__PURE__ */ Object.assign({
    "./locales/cz_CZ.json": vs,
    "./locales/en_US.json": Ss,
    "./locales/es_ES.json": ks,
    "./locales/fr_FR.json": Ws,
    "./locales/pl_PL.json": Ks,
    "./locales/pt_BR.json": ea,
    "./locales/sk_SK.json": oa,
    "./locales/tr_TR.json": ma
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
const Bi = Ri({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: Hi()
}), xi = (e, t) => {
  e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(Bi), e.component("vueSelectSides", dl);
};
dl.install = xi;
export {
  dl as default
};
