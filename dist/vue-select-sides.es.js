import { Fragment as e, Text as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, effectScope as u, getCurrentInstance as d, getCurrentScope as f, h as p, inject as m, isRef as h, normalizeClass as g, onMounted as _, onScopeDispose as v, onUnmounted as y, openBlock as b, ref as ee, renderList as x, resolveComponent as S, resolveDynamicComponent as C, shallowRef as te, toDisplayString as w, vModelText as ne, vShow as T, watch as re, withDirectives as E } from "vue";
// src/sort-by.js
var ie = (...e) => {
	let t = e.filter((e) => typeof e == "string"), n = e.find((e) => typeof e == "function");
	return (e, r) => {
		for (let i of t) {
			let t = 1;
			i[0] === "-" && (t = -1, i = i.substring(1));
			let a = ae(e, i), o = ae(r, i);
			n && (a = n(i, a), o = n(i, o));
			let s = a === void 0, c = o === void 0;
			if (!(s && c)) {
				if (s) return 1;
				if (c) return -1;
				if (a < o) return -1 * t;
				if (a > o) return 1 * t;
			}
		}
		return 0;
	};
}, ae = (e, t) => t.split(".").reduce((e, t) => e?.[t], e), D = (e) => JSON.parse(JSON.stringify(e)), O = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), oe = (e, t) => {
	let n = [];
	e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label"));
	let r = (e, t) => e === "label" && typeof t == "string" ? O(t) : t;
	return t.sort(ie(...n, r)).map((e) => (e.children && e.children.sort(ie(...n, r)), e)), t;
}, se = (e, t) => e.filter((e) => String(e) !== String(t)), k = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ce = {
	name: "v-select-all",
	display: "Select all",
	emits: ["update-select-all"],
	props: { items: Array }
};
function le(e, t, n, r, i, o) {
	return b(), a("a", {
		href: "javascript:void(0)",
		onClick: t[0] ||= (t) => e.$emit("update-select-all")
	}, w(e.$t("selectAll")), 1);
}
var ue = /*#__PURE__*/ k(ce, [["render", le]]), de = {
	name: "v-deselect-all",
	display: "Deselect all",
	emits: ["update-deselect-all"],
	props: {
		click: Function,
		items: Array
	}
};
function fe(e, t, n, r, i, o) {
	return b(), a("a", {
		href: "javascript:void(0)",
		onClick: t[0] ||= (t) => e.$emit("update-deselect-all")
	}, w(e.$t("deselectAll")), 1);
}
var pe = /*#__PURE__*/ k(de, [["render", fe]]), me = {
	name: "v-search",
	display: "Search",
	props: ["modelValue", "placeholder"],
	emits: ["update:modelValue"],
	beforeMount() {
		this.thePlaceholder = this.placeholder ? this.placeholder : this.$t("searchPlaceholder");
	},
	watch: { inputVal(e) {
		this.$emit("update:modelValue", e);
	} },
	data() {
		return {
			inputVal: this.value,
			thePlaceholder: ""
		};
	}
}, he = ["placeholder"];
function ge(e, t, n, r, i, o) {
	return E((b(), a("input", {
		type: "text",
		"onUpdate:modelValue": t[0] ||= (e) => i.inputVal = e,
		placeholder: i.thePlaceholder
	}, null, 8, he)), [[ne, i.inputVal]]);
}
var _e = /*#__PURE__*/ k(me, [["render", ge]]), ve = {
	name: "v-no-results",
	display: "No results",
	methods: {}
}, ye = { class: "no-results" };
function be(e, t, n, r, i, s) {
	return b(), a("li", ye, [o("span", null, w(e.$t("searchNoResult")), 1)]);
}
var xe = /*#__PURE__*/ k(ve, [["render", be]]), Se = {
	name: "v-no-selection",
	display: "No selection",
	methods: {}
}, Ce = { class: "no-selection" };
function we(e, t, n, r, i, s) {
	return b(), a("li", Ce, [o("span", null, w(e.$t("searchParentSelected")), 1)]);
}
// src/components/list.vue
var Te = {
	name: "v-list",
	display: "List",
	mounted() {},
	components: {
		"v-no-results": xe,
		"v-no-selection": /* @__PURE__ */ k(Se, [["render", we]])
	},
	props: {
		hasChildren: { type: Boolean },
		items: { type: Array },
		enableCounter: {
			type: Boolean,
			default: !0
		},
		type: { type: String },
		side: { type: String }
	},
	emits: ["updated-item"],
	methods: {
		showNoResultParent(e) {
			if (this.type === "grouped") return this.totalItems(e) === 0 && !this.hasChildren;
			if (this.side === "left") return e.length === 0 || this.totalParentSelected(e) === e.length || e.length > 0 && this.totalItems(e) === 0;
			if (this.side === "right") return e.length === 0 || this.totalParentSelected(e) !== 0 && e.length > 0 && this.totalItems(e) === 0;
		},
		showNoSelection(e) {
			if (this.type === "grouped") return this.totalParentSelected(e) === 0 && this.hasChildren || e.length === 0;
			if (this.side === "left") return !1;
			if (this.side === "right") return e.length !== 0 && this.totalParentSelected(e) === 0;
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
			return e.filter(function(e) {
				return e.visible === !0;
			}).length;
		},
		totalParentSelected(e) {
			return e.filter(function(e) {
				return e.selected === !0;
			}).length;
		},
		toggleItem(e, t, n) {
			if (e.disabled == 1) return !1;
			this.$emit("updated-item", e, t, !n);
		}
	},
	data() {
		return {};
	}
}, Ee = { class: "vss-list-ul" }, De = ["onClick"], Oe = { style: {} }, ke = {
	key: 0,
	class: "vss-list-badge"
}, Ae = { key: 0 }, je = ["onClick"];
function Me(t, n, r, l, u, d) {
	let f = S("v-no-results"), p = S("v-no-selection");
	return b(), a("ul", Ee, [
		(b(!0), a(e, null, x(r.items, (t, n) => E((b(), a("li", {
			key: n,
			onClick: (e) => !r.hasChildren && d.toggleItem(t, {}, t.selected),
			class: g(d.liClass(t, r.hasChildren))
		}, [o("span", Oe, [s(w(t.label) + " ", 1), d.showCounter(t) ? (b(), a("small", ke, w(t.totalChildrenSelected), 1)) : i("", !0)]), r.hasChildren ? (b(), a("ul", Ae, [(b(!0), a(e, null, x(t.children, (e, r) => E((b(), a("li", {
			key: `${n}-${r}`,
			onClick: (n) => d.toggleItem(e, t, e.selected),
			class: g(d.liClass(e, !1))
		}, [o("span", null, w(e.label), 1)], 10, je)), [[T, e.visible]])), 128)), E(c(f, null, null, 512), [[T, d.totalItems(t.children) === 0]])])) : i("", !0)], 10, De)), [[T, d.showParent(t)]])), 128)),
		E(c(p, null, null, 512), [[T, d.showNoSelection(r.items)]]),
		E(c(f, null, null, 512), [[T, d.showNoResultParent(r.items)]])
	]);
}
var Ne = /*#__PURE__*/ k(Te, [["render", Me]]), Pe = {
	name: "v-separator",
	display: "Separator"
}, A = { class: "vss-span" };
function Fe(e, t, n, r, i, o) {
	return b(), a("div", A, " ‹ › ");
}
var Ie = /*#__PURE__*/ k(Pe, [["render", Fe]]), Le = {
	name: "v-total",
	display: "Total",
	props: { value: { type: Number } }
}, Re = ["title"];
function ze(e, t, n, r, i, o) {
	return b(), a("span", { title: e.$t("totalSelected") }, w(n.value), 9, Re);
}
var Be = /*#__PURE__*/ k(Le, [["render", ze]]), Ve = {
	emits: ["update-selected"],
	watch: {
		modelValue(e, t) {
			JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
		},
		dataSelected(e, t) {
			this.$emit("update-selected", e, t);
		},
		orderBy() {
			this.listLeft = oe(this, this.dataList), this.listRight = oe(this, this.dataList);
		},
		list(e) {
			JSON.stringify(e) !== JSON.stringify(this.dataListOriginal) && (this.prepareList(), this.prepareListLeft());
		}
	},
	props: {
		placeholderSearchLeft: { type: [String, Boolean] },
		placeholderSearchRight: { type: [String, Boolean] },
		type: { type: String },
		search: { type: Boolean },
		total: { type: Boolean },
		toggleAll: { type: Boolean },
		orderBy: { type: String },
		sortSelectedUp: { type: Boolean }
	}
}, He = {
	name: "grouped-select-sides",
	display: "Grouped select sides",
	mixins: [Ve],
	components: {
		"v-select-all": ue,
		"v-deselect-all": pe,
		"v-search": _e,
		"v-separator": Ie,
		"v-list": Ne,
		"v-total": Be
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
			this.toggleRightChildren(!0);
		},
		updateRightDeselectAll() {
			this.toggleRightChildren(!1);
		},
		toggleRightChildren(e) {
			this.listRight.forEach((t) => {
				t.selected === !0 && (t.children || []).forEach((n) => {
					n.disabled || this.updateItem(n, t, e);
				});
			});
		},
		updateItem(e, t, n) {
			let r = D(this.dataSelected);
			Object.keys(t).length > 0 ? (r[t.value] === void 0 && t.visible && (r[t.value] = []), n ? e.visible && r[t.value].indexOf(e.value) === -1 && r[t.value].push(e.value) : e.visible && (r[t.value] = se(r[t.value], e.value))) : n ? r[e.value] === void 0 && (r[e.value] = []) : delete r[e.value], this.dataSelected = r;
		},
		prepareList() {
			let e = this, t = {};
			e.dataListOriginal = D(e.list);
			let n = Object.keys(e.modelValue), r = e.list.filter((r) => {
				let i = r.value, a = n.indexOf(i) >= 0;
				return a ? (r.selectedDefault = !0, t[i] = []) : r.selectedDefault = !1, r.children && r.children.filter((n) => {
					let r = n.value;
					a && (e.modelValue[i].indexOf(r) >= 0 ? (n.selectedDefault = !0, t[i].push(r)) : n.selectedDefault = !1);
				}), r;
			});
			e.dataSelected = t, e.dataList = oe({
				sortSelectedUp: !0,
				orderBy: e.orderBy || "asc"
			}, r);
		},
		prepareListLeft() {
			let e = this;
			this.listLeft = this.dataList.filter((t) => (t.visible = !0, t.children ? (t.children = t.children.map((n) => (e.dataSelected[t.value] !== void 0 && (n.selected = e.dataSelected[t.value].indexOf(n.value) >= 0), n)), t.children) : t));
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
			let e = this, t = O(this.searchL), n = Object.keys(this.dataSelected), r = D(this.listLeft);
			return r = r.filter((r) => {
				let i = O(r.label);
				return r.selected = n.indexOf(r.value) >= 0, r.visible = !!i.includes(t), r.children ? (r.children = r.children.map((t) => (t.selected = !1, e.dataSelected[r.value] !== void 0 && (t.selected = e.dataSelected[r.value].indexOf(t.value) >= 0), t)), r.totalChildrenSelected = r.children.filter(function(e) {
					return e.selected === !0;
				}).length, r.children) : r;
			}), r;
		},
		filteredListR() {
			let e = this, t = O(e.searchR);
			return e.listRight.filter(function(n) {
				return n.children ? (n.children = n.children.map((r) => (r.visible = !!O(r.label).includes(t), e.dataSelected[n.value] !== void 0 && (r.selected = e.dataSelected[n.value].indexOf(r.value) >= 0), r)), n.children) : n;
			});
		}
	},
	watch: { filteredListL(e) {
		this.listRight = e;
	} },
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
}, Ue = { class: "vss-list" }, We = { class: "vss-inner-list" }, Ge = { class: "vss-footer" }, Ke = { class: "vss-footer-bg" }, qe = {
	key: 1,
	class: "vss-footer-separator"
}, Je = { class: "vss-list" }, Ye = { class: "vss-inner-list" }, Xe = { class: "vss-footer" }, Ze = { class: "vss-footer-bg" }, Qe = {
	key: 1,
	class: "vss-footer-separator"
};
function $e(e, t, n, s, l, u) {
	let d = S("v-search"), f = S("v-list"), p = S("v-select-all"), m = S("v-deselect-all"), h = S("v-total"), g = S("v-separator");
	return b(), a("div", null, [
		o("div", Ue, [o("div", We, [
			e.search ? (b(), r(d, {
				key: 0,
				placeholder: e.placeholderSearchLeft,
				class: "vss-list-search",
				modelValue: l.searchL,
				"onUpdate:modelValue": t[0] ||= (e) => l.searchL = e
			}, null, 8, ["placeholder", "modelValue"])) : i("", !0),
			c(f, {
				"has-children": !1,
				type: e.type,
				items: u.filteredListL,
				onUpdatedItem: u.updateItem
			}, null, 8, [
				"type",
				"items",
				"onUpdatedItem"
			]),
			E(o("div", Ge, [o("div", Ke, [o("div", null, [
				e.toggleAll ? (b(), r(p, {
					key: 0,
					items: l.listLeft,
					onUpdateSelectAll: u.updateLeftSelectAll
				}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0),
				e.toggleAll ? (b(), a("div", qe, "/")) : i("", !0),
				e.toggleAll ? (b(), r(m, {
					key: 2,
					items: l.listLeft,
					onUpdateDeselectAll: u.updateLeftDeselectAll
				}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)
			]), e.total ? (b(), r(h, {
				key: 0,
				value: Object.keys(l.dataSelected).length
			}, null, 8, ["value"])) : i("", !0)])], 512), [[T, e.toggleAll || e.total]])
		])]),
		c(g),
		o("div", Je, [o("div", Ye, [
			e.search ? (b(), r(d, {
				key: 0,
				placeholder: e.placeholderSearchRight,
				class: "vss-list-search",
				modelValue: l.searchR,
				"onUpdate:modelValue": t[1] ||= (e) => l.searchR = e
			}, null, 8, ["placeholder", "modelValue"])) : i("", !0),
			c(f, {
				"has-children": !0,
				type: e.type,
				items: u.filteredListR,
				onUpdatedItem: u.updateItem
			}, null, 8, [
				"type",
				"items",
				"onUpdatedItem"
			]),
			E(o("div", Xe, [o("div", Ze, [o("div", null, [
				e.toggleAll ? (b(), r(p, {
					key: 0,
					items: l.listRight,
					onUpdateSelectAll: u.updateRightSelectAll
				}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0),
				e.toggleAll ? (b(), a("div", Qe, "/")) : i("", !0),
				e.toggleAll ? (b(), r(m, {
					key: 2,
					items: l.listRight,
					onUpdateDeselectAll: u.updateRightDeselectAll
				}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)
			]), e.total ? (b(), r(h, {
				key: 0,
				value: u.totalChildrenSelected
			}, null, 8, ["value"])) : i("", !0)])], 512), [[T, e.toggleAll || e.total]])
		])])
	]);
}
var et = /*#__PURE__*/ k(He, [["render", $e]]), tt = {
	name: "mirror-select-sides",
	display: "Mirror select sides",
	mixins: [Ve],
	components: {
		"v-select-all": ue,
		"v-deselect-all": pe,
		"v-search": _e,
		"v-separator": Ie,
		"v-list": Ne,
		"v-total": Be
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
			let r = D(this.dataSelected);
			n ? r.push(e.value) : r = se(r, e.value), this.dataSelected = r;
		},
		prepareList() {
			this.dataListOriginal = D(this.list);
			let e = this, t = [], n = e.list.filter((n) => {
				let r = n.value;
				return e.modelValue.indexOf(r) >= 0 ? (n.selectedDefault = !0, t.push(r)) : n.selectedDefault = !1, n;
			});
			e.dataSelected = t, e.dataList = oe(e, n);
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
			let e = O(this.searchL), t = this.dataSelected, n = D(this.listLeft);
			return n = n.filter((n) => {
				let r = O(n.label);
				return t.indexOf(n.value) >= 0 ? (n.selected = !0, n.visible = !1) : (n.selected = !1, n.visible = !0), n.visible = !!(r.includes(e) && n.visible === !0), n;
			}), n;
		},
		filteredListR() {
			let e = this, t = O(e.searchR), n = this.dataSelected, r = D(e.listLeft);
			return r = r.filter((e) => {
				let r = O(e.label);
				return n.indexOf(e.value) >= 0 ? (e.selected = !0, e.visible = !0) : (e.selected = !1, e.visible = !1), e.visible = !!(r.includes(t) && e.visible === !0), e;
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
}, nt = { class: "vss-list" }, rt = { class: "vss-inner-list" }, it = { class: "vss-footer" }, at = { class: "vss-footer-bg" }, ot = { class: "vss-list" }, st = { class: "vss-inner-list" }, ct = { class: "vss-footer" }, lt = { class: "vss-footer-bg" };
function ut(e, t, n, s, l, u) {
	let d = S("v-search"), f = S("v-list"), p = S("v-select-all"), m = S("v-total"), h = S("v-separator"), g = S("v-deselect-all");
	return b(), a("div", null, [
		o("div", nt, [o("div", rt, [
			e.search ? (b(), r(d, {
				key: 0,
				placeholder: e.placeholderSearchLeft,
				class: "vss-list-search",
				modelValue: l.searchL,
				"onUpdate:modelValue": t[0] ||= (e) => l.searchL = e
			}, null, 8, ["placeholder", "modelValue"])) : i("", !0),
			c(f, {
				"enable-counter": !1,
				"has-children": !1,
				type: e.type,
				side: "left",
				items: u.filteredListL,
				onUpdatedItem: u.updateItem
			}, null, 8, [
				"type",
				"items",
				"onUpdatedItem"
			]),
			E(o("div", it, [o("div", at, [o("div", null, [e.toggleAll ? (b(), r(p, {
				key: 0,
				items: l.listLeft,
				onUpdateSelectAll: u.updateLeftSelectAll
			}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0)]), e.total ? (b(), r(m, {
				key: 0,
				value: l.dataSelected.length
			}, null, 8, ["value"])) : i("", !0)])], 512), [[T, e.toggleAll || e.total]])
		])]),
		c(h),
		o("div", ot, [o("div", st, [
			e.search ? (b(), r(d, {
				key: 0,
				placeholder: e.placeholderSearchRight,
				class: "vss-list-search",
				modelValue: l.searchR,
				"onUpdate:modelValue": t[1] ||= (e) => l.searchR = e
			}, null, 8, ["placeholder", "modelValue"])) : i("", !0),
			c(f, {
				"enable-counter": !1,
				"has-children": !1,
				type: e.type,
				side: "right",
				items: u.filteredListR,
				onUpdatedItem: u.updateItem
			}, null, 8, [
				"type",
				"items",
				"onUpdatedItem"
			]),
			E(o("div", ct, [o("div", lt, [o("div", null, [e.toggleAll ? (b(), r(g, {
				key: 0,
				items: l.listRight,
				onUpdateDeselectAll: u.updateRightDeselectAll
			}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)])])], 512), [[T, e.toggleAll || e.total]])
		])])
	]);
}
// src/vue-select-sides.vue
var dt = {
	name: "vue-select-sides",
	display: "Core select sides",
	components: {
		"mirror-select-sides": /* @__PURE__ */ k(tt, [["render", ut]]),
		"grouped-select-sides": et
	},
	props: {
		list: {
			required: !0,
			type: [Array, Object]
		},
		type: {
			type: String,
			default: void 0
		},
		orderBy: {
			type: String,
			default: void 0
		},
		placeholderSearchLeft: {
			type: [String, Boolean],
			default: void 0
		},
		placeholderSearchRight: {
			type: [String, Boolean],
			default: void 0
		},
		sortSelectedUp: {
			type: Boolean,
			default: void 0
		},
		search: {
			type: Boolean,
			default: void 0
		},
		total: {
			type: Boolean,
			default: void 0
		},
		toggleAll: {
			type: Boolean,
			default: void 0
		},
		modelValue: {
			type: [Object, Array],
			default: void 0
		}
	},
	emits: ["update:model-value"],
	watch: {
		list(e) {
			this.listClone = D(e);
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
	computed: { modelProp: {
		get() {
			return this.modelValue;
		},
		set(e) {
			this.$emit("update:model-value", e);
		}
	} },
	beforeMount() {
		this.setDefaultParams(), this.listClone = D(this.list);
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
function ft(e, t, n, i, a, o) {
	return b(), r(C(o.getComponent()), {
		class: "vss",
		type: a.params.type,
		list: a.listClone,
		search: a.params.search,
		total: a.params.total,
		"toggle-all": a.params.toggleAll,
		"order-by": a.params.orderBy,
		"placeholder-search-left": a.params.placeholderSearchLeft,
		"placeholder-search-right": a.params.placeholderSearchRight,
		"sort-selected-up": a.params.sortSelectedUp,
		modelValue: o.modelProp,
		"onUpdate:modelValue": t[0] ||= (e) => o.modelProp = e,
		onUpdateSelected: o.updateSelected
	}, null, 40, [
		"type",
		"list",
		"search",
		"total",
		"toggle-all",
		"order-by",
		"placeholder-search-left",
		"placeholder-search-right",
		"sort-selected-up",
		"modelValue",
		"onUpdateSelected"
	]);
}
var pt = /*#__PURE__*/ k(dt, [["render", ft]]), mt = {
	selectAll: "Vybrat vše ",
	deselectAll: "Odebrat vše ",
	searchPlaceholder: "Hledej...",
	searchNoResult: "Žádný výsledek...",
	searchParentSelected: "Nic není vybráno...",
	totalSelected: "Spolu vybrané"
}, ht = {
	selectAll: "Select all",
	deselectAll: "Deselect all",
	searchPlaceholder: "Search...",
	searchNoResult: "No result...",
	searchParentSelected: "No items selected...",
	totalSelected: "Total items selected"
}, gt = {
	selectAll: "Seleccionar todos",
	deselectAll: "Deseleccionar todos",
	searchPlaceholder: "Buscar...",
	searchNoResult: "Sin resultados...",
	searchParentSelected: "Ningún elemento seleccionado...",
	totalSelected: "Elementos seleccionados"
}, _t = {
	selectAll: "Ajouter tout",
	deselectAll: "Supprimer tout",
	searchPlaceholder: "Recherche...",
	searchNoResult: "Pas de résultat...",
	searchParentSelected: "Sélection vide...",
	totalSelected: "Éléments sélectionnés"
}, vt = {
	selectAll: "Wybierz wszystko",
	deselectAll: "Wyczyść zaznaczenie",
	searchPlaceholder: "Szukaj...",
	searchNoResult: "Brak wyników...",
	searchParentSelected: "Nie wybrano żadnych elementów...",
	totalSelected: "Liczba wybranych elementów"
}, yt = {
	selectAll: "Selecionar todos",
	deselectAll: "Remover todos",
	searchPlaceholder: "Pesquisar...",
	searchNoResult: "Sem nenhum resultado...",
	searchParentSelected: "Nenhum item selecionado...",
	totalSelected: "Total de itens selecionados"
}, bt = {
	selectAll: "Vybrať všetko",
	deselectAll: "Odobrať všetko",
	searchPlaceholder: "Hľadaj...",
	searchNoResult: "Žiadny výsledok...",
	searchParentSelected: "Nič nie je vybrané...",
	totalSelected: "Spolu vybrané"
}, xt = {
	selectAll: "Hepsini Seç",
	deselectAll: "Hepsini Çıkar",
	searchPlaceholder: "Ara...",
	searchNoResult: "Sonuç Bulunamadı...",
	searchParentSelected: "Hiçbiri Seçilmedi...",
	totalSelected: "Hepsi Seçildi"
}, j = typeof window < "u", M, St;
if (process.env.NODE_ENV !== "production") {
	let e = j && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (M = (t) => {
		e.mark(t);
	}, St = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var Ct = /\{([0-9a-zA-Z]+)\}/g;
function wt(e, ...t) {
	return t.length === 1 && U(t[0]) && (t = t[0]), t && t.hasOwnProperty || (t = {}), e.replace(Ct, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var N = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Tt = (e, t, n) => Et({
	l: e,
	k: t,
	s: n
}), Et = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), P = (e) => typeof e == "number" && isFinite(e);
function Dt(e, t) {
	return V(t) || P(t) ? `${e}:${t}` : e;
}
var Ot = (e) => Rt(e) === "[object Date]", kt = (e) => Rt(e) === "[object RegExp]", At = (e) => W(e) && Object.keys(e).length === 0, F = Object.assign, jt = Object.create, I = (e = null) => jt(e), Mt, Nt = () => Mt ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : I(), Pt = Object.prototype.hasOwnProperty;
function L(e, t) {
	return Pt.call(e, t);
}
function R(e, t) {
	let n = e[t];
	return L(e, t) ? n : void 0;
}
function Ft(e) {
	return L(Object.prototype, e);
}
var z = Array.isArray, B = (e) => typeof e == "function", V = (e) => typeof e == "string", H = (e) => typeof e == "boolean", U = (e) => typeof e == "object" && !!e, It = (e) => U(e) && B(e.then) && B(e.catch), Lt = Object.prototype.toString, Rt = (e) => Lt.call(e), W = (e) => Rt(e) === "[object Object]", zt = (e) => e == null ? "" : z(e) || W(e) && e.toString === Lt ? JSON.stringify(e, null, 2) : String(e);
function Bt(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var Vt = 2;
function Ht(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - Vt; o <= e + Vt || n > i; o++) {
			if (o < 0 || o >= r.length) continue;
			let s = o + 1;
			a.push(`${s}${" ".repeat(3 - String(s).length)}|  ${r[o]}`);
			let c = r[o].length;
			if (o === e) {
				let e = t - (i - c) + 1, r = Math.max(1, n > i ? c - e : n - t);
				a.push("   |  " + " ".repeat(e) + "^".repeat(r));
			} else if (o > e) {
				if (n > i) {
					let e = Math.max(Math.min(n - i, c), 1);
					a.push("   |  " + "^".repeat(e));
				}
				i += c + 1;
			}
		}
		break;
	}
	return a.join("\n");
}
function G(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var Ut = {};
function Wt(e) {
	Ut[e] || (Ut[e] = !0, G(e));
}
function Gt(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Kt(e) {
	return e.replace(/&(?![a-z0-9#]{2,6};)/gi, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var qt = /^javascript:/i, Jt = /^(?:href|xlink:href|src|action|formaction)$/i, Yt = /&#(?:x([0-9a-f]+)|(\d+));?/gi, Xt = /&(?:Tab|NewLine);/g, Zt = /&colon;?/gi, Qt = /[\u0000-\u0020\u007f-\u009f]/g, $t = /(?:^|[\s"'<>/])on\w+\s*=\s*["']?[^"'>]+["']?/i, en = /(^|[\s"'<>/])on(\w+\s*=)/gi, tn = /(?:^|[\s"'<>/])srcdoc\s*=/i, nn = /(^|[\s"'<>/])s(rcdoc\s*=)/gi, rn = /<(?:base|animate|set|script)(?=[\s/>]|$)/i, an = /<(base|animate|set|script)(?=[\s/>]|$)/gi, on = /(^|[\s"'<>/])((?:href|xlink:href|src|action|formaction)\s*=\s*)([^\s"'=<>`]+)/gi;
function sn(e, t, n) {
	let r = t || n;
	if (!r) return e;
	let i = Number.parseInt(r, t ? 16 : 10);
	return i <= 127 ? String.fromCharCode(i) : e;
}
function cn(e) {
	let t = e.replace(Yt, sn).replace(Xt, "").replace(Zt, ":").replace(Qt, "");
	return qt.test(t);
}
function ln(e) {
	let t = /url\s*\(/gi, n = "", r = 0, i;
	for (; (i = t.exec(e)) !== null;) {
		let a = i.index, o = t.lastIndex - 1, s = o + 1, c = 1, l = null;
		for (; s < e.length; s++) {
			let t = e[s];
			if (l) t === l && (l = null);
			else if (t === "\"" || t === "'") l = t;
			else if (t === "(") c++;
			else if (t === ")" && (c--, c === 0)) break;
		}
		if (c !== 0) break;
		let u = e.slice(o + 1, s).trim(), d = u.startsWith("\"") && u.endsWith("\"") || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1).trim() : u;
		n += e.slice(r, a), n += cn(d) ? "url(about:blank)" : e.slice(a, s + 1), r = s + 1;
	}
	return n + e.slice(r);
}
function un(e, t) {
	return Jt.test(e) && cn(t) ? "about:blank" : Kt(e.toLowerCase() === "style" ? ln(t) : t);
}
function dn(e) {
	return e = e.replace(/([\w:-]+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${un(t, n)}"`), e = e.replace(/([\w:-]+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${un(t, n)}'`), $t.test(e) && (process.env.NODE_ENV !== "production" && G("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(en, "$1&#111;n$2")), tn.test(e) && (process.env.NODE_ENV !== "production" && G("Potentially dangerous srcdoc attribute detected in translation. Consider removing srcdoc from your translation messages."), e = e.replace(nn, "$1&#115;$2")), rn.test(e) && (process.env.NODE_ENV !== "production" && G("Potentially dangerous element (<base>, <animate>, <set> or <script>) detected in translation. Consider removing it from your translation messages."), e = e.replace(an, "&lt;$1")), e = e.replace(on, (e, t, n, r) => cn(r) ? `${t}${n}about:blank` : e), e;
}
function fn() {
	let e = /* @__PURE__ */ new Map();
	return {
		events: e,
		on(t, n) {
			let r = e.get(t);
			r && r.push(n) || e.set(t, [n]);
		},
		off(t, n) {
			let r = e.get(t);
			r && r.splice(r.indexOf(n) >>> 0, 1);
		},
		emit(t, n) {
			(e.get(t) || []).slice().map((e) => e(n)), (e.get("*") || []).slice().map((e) => e(t, n));
		}
	};
}
var pn = (e) => !U(e) || z(e);
function mn(e, t) {
	if (pn(e) || pn(t) || t === Object.prototype) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			if (r === "__proto__") return;
			let i = e[r];
			if (z(i)) {
				let e = [];
				e.length = i.length, t[r] = e, n.push({
					src: i,
					des: e
				});
			} else U(i) ? ((!U(t[r]) || z(t[r])) && (t[r] = I()), n.push({
				src: i,
				des: t[r]
			})) : t[r] = i;
		});
	}
}
// node_modules/@intlify/message-compiler/dist/message-compiler.mjs
function hn(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function gn(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var K = {
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
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
}, _n = {
	[K.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[K.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[K.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[K.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[K.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[K.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[K.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[K.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[K.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[K.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[K.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[K.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[K.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[K.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[K.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function vn(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : wt((i || _n)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function yn(e) {
	throw e;
}
var bn = /<\/?[\w\s="/.':;#-\/]+>/, xn = (e) => bn.test(e), q = " ", Sn = "\r", J = "\n", Cn = "\u2028", wn = "\u2029";
function Tn(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Sn && t[e + 1] === J, s = (e) => t[e] === J, c = (e) => t[e] === wn, l = (e) => t[e] === Cn, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? J : t[e], g = () => h(n), _ = () => h(n + a);
	function v() {
		return a = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n];
	}
	function y() {
		return o(n + a) && a++, a++, t[n + a];
	}
	function b() {
		n = 0, r = 1, i = 1, a = 0;
	}
	function ee(e = 0) {
		a = e;
	}
	function x() {
		let e = n + a;
		for (; e !== n;) v();
		a = 0;
	}
	return {
		index: d,
		line: f,
		column: p,
		peekOffset: m,
		charAt: h,
		currentChar: g,
		currentPeek: _,
		next: v,
		peek: y,
		reset: b,
		resetPeek: ee,
		skipToPeek: x
	};
}
var En = void 0, Dn = "'", On = "tokenizer";
function kn(e, t = {}) {
	let n = t.location !== !1, r = Tn(e), i = () => r.index(), a = () => hn(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
		currentType: 13,
		offset: s,
		startLoc: o,
		endLoc: o,
		lastType: 13,
		lastOffset: s,
		lastStartLoc: o,
		lastEndLoc: o,
		braceNest: 0,
		inLinked: !1,
		text: ""
	}, l = () => c, { onError: u } = t;
	function d(e, t, r, ...i) {
		let a = l();
		if (t.column += r, t.offset += r, u) {
			let r = vn(e, n ? gn(a.startLoc, t) : null, {
				domain: On,
				args: i
			});
			u(r);
		}
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = gn(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(K.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === q || e.currentPeek() === J;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === En) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === En) return !1;
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function y(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function b(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = v(e.currentPeek() === "-" ? e.peek() : e.currentPeek());
		return e.resetPeek(), r;
	}
	function ee(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = e.currentPeek() === Dn;
		return e.resetPeek(), r;
	}
	function x(e, t) {
		let { currentType: n } = t;
		if (n !== 7) return !1;
		h(e);
		let r = e.currentPeek() === ".";
		return e.resetPeek(), r;
	}
	function S(e, t) {
		let { currentType: n } = t;
		if (n !== 8) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function C(e, t) {
		let { currentType: n } = t;
		if (n !== 7 && n !== 11) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function te(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === q || !t ? !1 : t === J ? (e.peek(), r()) : ne(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function w(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function ne(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? r !== q && r !== J : i === q ? (e.peek(), n(!0, q)) : i !== J || (e.peek(), n(!0, J));
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function T(e, t) {
		let n = e.currentChar();
		if (n !== En) return t(n) ? (e.next(), n) : null;
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function E(e) {
		return T(e, re);
	}
	function ie(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ae(e) {
		return T(e, ie);
	}
	function D(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function O(e) {
		return T(e, D);
	}
	function oe(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function se(e) {
		return T(e, oe);
	}
	function k(e) {
		let t = "", n = "";
		for (; t = O(e);) n += t;
		return n;
	}
	function ce(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === q || n === J) {
				if (ne(e)) t += n, e.next();
				else if (w(e)) break;
				else t += n, e.next();
			} else t += n, e.next();
		}
		return t;
	}
	function le(e) {
		g(e);
		let t = "", n = "";
		for (; t = ae(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== En && r !== q && r !== J && r !== "　") {
			let t = ge(e);
			return d(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === En && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function ue(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${k(e)}`) : t += k(e), e.currentChar() === En && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function de(e) {
		return e !== Dn && e !== J;
	}
	function fe(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = T(e, de);) n += t === "\\" ? pe(e) : t;
		let r = e.currentChar();
		return r === J || r === En ? (d(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === J && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function pe(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return me(e, t, 4);
			case "U": return me(e, t, 6);
			default: return d(K.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function me(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = se(e);
			if (!n) {
				d(K.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function he(e) {
		return e !== "{" && e !== "}" && e !== q && e !== J;
	}
	function ge(e) {
		g(e);
		let t = "", n = "";
		for (; t = T(e, he);) n += t;
		return n;
	}
	function _e(e) {
		let t = "", n = "";
		for (; t = E(e);) n += t;
		return n;
	}
	function ve(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === q ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function ye(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function be(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(K.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(K.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), n = xe(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (w(e)) return t.braceNest > 0 && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, ye(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, Se(e, t);
				if (r = y(e, t)) return n = f(t, 4, le(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, ue(e)), g(e), n;
				if (o = ee(e, t)) return n = f(t, 6, fe(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, ge(e)), d(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function xe(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch (n !== 7 && n !== 8 && n !== 11 && n !== 9 || i !== J && i !== q || d(K.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return w(e) ? (r = f(t, 1, ye(e)), t.braceNest = 0, t.inLinked = !1, r) : x(e, t) || C(e, t) ? (g(e), xe(e, t)) : S(e, t) ? (g(e), f(t, 11, _e(e))) : te(e, t) ? (g(e), i === "{" ? be(e, t) || r : f(t, 10, ve(e))) : (n === 7 && d(K.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, Se(e, t));
		}
	}
	function Se(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return be(e, t) || p(t);
		if (t.inLinked) return xe(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return be(e, t) || p(t);
			case "}": return d(K.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return xe(e, t) || p(t);
			default:
				if (w(e)) return n = f(t, 1, ye(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (ne(e)) return f(t, 0, ce(e));
		}
		return n;
	}
	function Ce() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === En ? f(c, 13) : Se(r, c);
	}
	return {
		nextToken: Ce,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var An = "parser", jn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Mn = /\\([\\@{}|])/g;
function Nn(e, t) {
	return t;
}
function Pn(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Fn(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		if (s.offset += a, s.column += a, n) {
			let e = vn(r, t ? gn(i, s) : null, {
				domain: An,
				args: o
			});
			n(e);
		}
	}
	function i(e, n, r) {
		let i = { type: e };
		return t && (i.start = n, i.end = n, i.loc = {
			start: r,
			end: r
		}), i;
	}
	function a(e, n, r, i) {
		t && (e.end = n, e.loc && (e.loc.end = r));
	}
	function o(e, t) {
		let n = e.context(), r = i(3, n.offset, n.startLoc);
		return r.value = t.replace(Mn, Nn), a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function s(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(5, n, r);
		return o.index = parseInt(t, 10), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function c(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(4, n, r);
		return o.key = t, e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function l(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(9, n, r);
		return o.value = t.replace(jn, Pn), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, In(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
			nextConsumeToken: t,
			node: c
		});
	}
	function d(e, t) {
		let n = e.context(), r = i(7, n.offset, n.startLoc);
		return r.value = t, a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function f(e) {
		let t = e.context(), n = i(6, t.offset, t.startLoc), o = e.nextToken();
		if (o.type === 8) {
			let t = u(e);
			n.modifier = t.node, o = t.nextConsumeToken || e.nextToken();
		}
		switch (o.type !== 9 && r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, K.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
				let s = e.context(), c = i(7, s.offset, s.startLoc);
				return c.value = "", a(c, s.offset, s.startLoc), n.key = c, a(n, s.offset, s.startLoc), {
					nextConsumeToken: o,
					node: n
				};
			}
		}
		return a(n, e.currentOffset(), e.currentPosition()), { node: n };
	}
	function p(e) {
		let t = e.context(), n = i(2, t.currentType === 1 ? e.currentOffset() : t.offset, t.currentType === 1 ? t.endLoc : t.startLoc);
		n.items = [];
		let u = null;
		do {
			let i = u || e.nextToken();
			switch (u = null, i.type) {
				case 0:
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, In(i)), n.items.push(l(e, i.value || ""));
					break;
				case 7: {
					let t = f(e);
					n.items.push(t.node), u = t.nextConsumeToken || null;
					break;
				}
			}
		} while (t.currentType !== 13 && t.currentType !== 1);
		return a(n, t.currentType === 1 ? t.lastOffset : e.currentOffset(), t.currentType === 1 ? t.lastEndLoc : e.currentPosition()), n;
	}
	function m(e, t, n, o) {
		let s = e.context(), c = o.items.length === 0, l = i(1, t, n);
		l.cases = [], l.cases.push(o);
		do {
			let t = p(e);
			c ||= t.items.length === 0, l.cases.push(t);
		} while (s.currentType !== 13);
		return c && r(e, K.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = kn(n, F({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, K.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function In(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ln(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Rn(e, t) {
	for (let n = 0; n < e.length; n++) zn(e[n], t);
}
function zn(e, t) {
	switch (e.type) {
		case 1:
			Rn(e.cases, t), t.helper("plural");
			break;
		case 2:
			Rn(e.items, t);
			break;
		case 6:
			zn(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4: t.helper("interpolate"), t.helper("named");
	}
}
function Bn(e, t = {}) {
	let n = Ln(e);
	n.helper("normalize"), e.body && zn(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function Vn(e) {
	let t = e.body;
	return t.type === 2 ? Hn(t) : t.cases.forEach((e) => Hn(e)), e;
}
function Hn(e) {
	if (e.items.length === 1) {
		let t = e.items[0];
		(t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
	} else {
		let t = [];
		for (let n = 0; n < e.items.length; n++) {
			let r = e.items[n];
			if (r.type !== 3 && r.type !== 9 || r.value == null) break;
			t.push(r.value);
		}
		if (t.length === e.items.length) {
			e.static = Bt(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var Un = "minifier";
function Wn(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			Wn(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) Wn(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) Wn(n[e]);
			t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			let t = e;
			t.value && (t.v = t.value, delete t.value);
			break;
		}
		case 6: {
			let t = e;
			Wn(t.key), t.k = t.key, delete t.key, t.modifier && (Wn(t.modifier), t.m = t.modifier, delete t.modifier);
			break;
		}
		case 5: {
			let t = e;
			t.i = t.index, delete t.index;
			break;
		}
		case 4: {
			let t = e;
			t.k = t.key, delete t.key;
			break;
		}
		default: if (process.env.NODE_ENV !== "production") throw vn(K.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: Un,
			args: [e.type]
		});
	}
	delete e.type;
}
var Gn = "parser";
function Kn(e, t) {
	let { filename: n, breakLineCode: r, needIndent: i } = t, a = t.location !== !1, o = {
		filename: n,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode: r,
		needIndent: i,
		indentLevel: 0
	};
	a && e.loc && (o.source = e.loc.source);
	let s = () => o;
	function c(e, t) {
		o.code += e;
	}
	function l(e, t = !0) {
		let n = t ? r : "";
		c(i ? n + "  ".repeat(e) : n);
	}
	function u(e = !0) {
		let t = ++o.indentLevel;
		e && l(t);
	}
	function d(e = !0) {
		let t = --o.indentLevel;
		e && l(t);
	}
	function f() {
		l(o.indentLevel);
	}
	return {
		context: s,
		push: c,
		indent: u,
		deindent: d,
		newline: f,
		helper: (e) => `_${e}`,
		needIndent: () => o.needIndent
	};
}
function qn(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), Zn(e, t.key), t.modifier ? (e.push(", "), Zn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Jn(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (Zn(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function Yn(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (Zn(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function Xn(e, t) {
	t.body ? Zn(e, t.body) : e.push("null");
}
function Zn(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			Xn(e, t);
			break;
		case 1:
			Yn(e, t);
			break;
		case 2:
			Jn(e, t);
			break;
		case 6:
			qn(e, t);
			break;
		case 8:
			e.push(JSON.stringify(t.value), t);
			break;
		case 7:
			e.push(JSON.stringify(t.value), t);
			break;
		case 5:
			e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
			break;
		case 4:
			e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
			break;
		case 9:
			e.push(JSON.stringify(t.value), t);
			break;
		case 3:
			e.push(JSON.stringify(t.value), t);
			break;
		default: if (process.env.NODE_ENV !== "production") throw vn(K.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: Gn,
			args: [t.type]
		});
	}
}
var Qn = (e, t = {}) => {
	let n = V(t.mode) ? t.mode : "normal", r = V(t.filename) ? t.filename : "message.intl";
	t.sourceMap;
	let i = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], s = Kn(e, {
		filename: r,
		breakLineCode: i,
		needIndent: a
	});
	s.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), s.indent(a), o.length > 0 && (s.push(`const { ${Bt(o.map((e) => `${e}: _${e}`), ", ")} } = ctx`), s.newline()), s.push("return "), Zn(s, e), s.deindent(a), s.push("}"), delete e.helpers;
	let { code: c, map: l } = s.context();
	return {
		ast: e,
		code: c,
		map: l ? l.toJSON() : void 0
	};
};
function $n(e, t = {}) {
	let n = F({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null || n.optimize, o = Fn(n).parse(e);
	return r ? (a && Vn(o), i && Wn(o), {
		ast: o,
		code: ""
	}) : (Bn(o, n), Qn(o, n));
}
// node_modules/@intlify/core-base/dist/core-base.mjs
function er() {
	typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Nt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Nt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function tr(e) {
	return U(e) && dr(e) === 0 && (L(e, "b") || L(e, "body"));
}
var nr = ["b", "body"];
function rr(e) {
	return vr(e, nr);
}
var ir = ["c", "cases"];
function ar(e) {
	return vr(e, ir, []);
}
var or = ["s", "static"];
function sr(e) {
	return vr(e, or);
}
var cr = ["i", "items"];
function lr(e) {
	return vr(e, cr, []);
}
var ur = ["t", "type"];
function dr(e) {
	return vr(e, ur);
}
var fr = ["v", "value"];
function pr(e, t) {
	let n = vr(e, fr);
	if (n != null) return n;
	throw br(t);
}
var mr = ["m", "modifier"];
function hr(e) {
	return vr(e, mr);
}
var gr = ["k", "key"];
function _r(e) {
	let t = vr(e, gr);
	if (t) return t;
	throw br(6);
}
function vr(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (L(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var yr = [
	...nr,
	...ir,
	...or,
	...cr,
	...gr,
	...mr,
	...fr,
	...ur
];
function br(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function xr(e) {
	return (t) => Sr(t, e);
}
function Sr(e, t) {
	let n = rr(t);
	if (n == null) throw br(0);
	if (dr(n) === 1) {
		let t = ar(n);
		return e.plural(t.reduce((t, n) => [...t, Cr(e, n)], []));
	}
	return Cr(e, n);
}
function Cr(e, t) {
	let n = sr(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = lr(t).reduce((t, n) => [...t, wr(e, n)], []);
		return e.normalize(n);
	}
}
function wr(e, t) {
	let n = dr(t);
	switch (n) {
		case 3: return pr(t, n);
		case 9: return pr(t, n);
		case 4: {
			let r = t;
			if (L(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (L(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw br(n);
		}
		case 5: {
			let r = t;
			if (L(r, "i") && P(r.i)) return e.interpolate(e.list(r.i));
			if (L(r, "index") && P(r.index)) return e.interpolate(e.list(r.index));
			throw br(n);
		}
		case 6: {
			let n = t, r = hr(n), i = _r(n);
			return e.linked(wr(e, i), r ? wr(e, r) : void 0, e.type);
		}
		case 7: return pr(t, n);
		case 8: return pr(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var Tr = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Er(e, t) {
	t && xn(e) && G(wt(Tr, { source: e }));
}
var Dr = (e) => e, Or = I();
function kr(e, t = {}) {
	let n = !1, r = t.onError || yn;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...$n(e, t),
		detectError: n
	};
}
/* #__NO_SIDE_EFFECTS__ */
function Ar(e, t) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && V(e)) {
		let n = !H(t.warnHtmlMessage) || t.warnHtmlMessage;
		process.env.NODE_ENV !== "production" && Er(e, n);
		let r = (t.onCacheKey || Dr)(e), i = Or[r];
		if (i) return i;
		let { ast: a, detectError: o } = kr(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = xr(a);
		return o ? s : Or[r] = s;
	}
	{
		if (!tr(e)) return process.env.NODE_ENV !== "production" && G(`Cannot compile the message of '${t.key}' key, because the message compiler is not included in this build. Pre-compile the message. So translate function returns the message as is.`), (() => e);
		let n = e.cacheKey;
		return n ? Or[n] || (Or[n] = xr(e)) : xr(e);
	}
}
var jr = null;
function Mr(e) {
	jr = e;
}
function Nr(e, t, n) {
	jr && jr.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Pr = /* #__PURE__*/ Fr("function:translate");
function Fr(e) {
	return (t) => jr && jr.emit(e, t);
}
var Y = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function Ir(e) {
	return vn(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: Lr });
}
var Lr = {
	[Y.INVALID_ARGUMENT]: "Invalid arguments",
	[Y.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[Y.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[Y.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[Y.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Rr(e, t) {
	return t.locale == null ? Br(e.locale) : Br(t.locale);
}
var zr;
function Br(e) {
	if (V(e)) return e;
	if (B(e)) {
		if (e.resolvedOnce && zr != null) return zr;
		if (e.constructor.name === "Function") {
			let t = e();
			if (It(t)) throw Ir(Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return zr = t;
		}
		throw Ir(Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	}
	throw Ir(Y.NOT_SUPPORT_LOCALE_TYPE);
}
function Vr(e, t, n) {
	return [.../* @__PURE__ */ new Set([n, ...z(t) ? t : U(t) ? Object.keys(t).filter((e) => e !== "default") : V(t) ? [t] : [n]])];
}
function Hr(e, t, n) {
	let r = V(n) ? n : ai, i = e, a;
	U(t) ? (i.__localeChainObjectCache ||= /* @__PURE__ */ new WeakMap(), a = i.__localeChainObjectCache.get(t), a || (a = /* @__PURE__ */ new Map(), i.__localeChainObjectCache.set(t, a))) : (i.__localeChainCache ||= /* @__PURE__ */ new Map(), a = i.__localeChainCache.get(t), a || (a = /* @__PURE__ */ new Map(), i.__localeChainCache.set(t, a)));
	let o = a.get(r);
	if (o) return o;
	let s = [], c = [n];
	for (; z(c);) c = Ur(s, c, t);
	let l = z(t) || !W(t) ? t : t.default ? t.default : null;
	return c = V(l) ? [l] : l, z(c) && Ur(s, c, !1), a.set(r, s), s;
}
function Ur(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && H(r); i++) {
		let a = t[i];
		V(a) && (r = Wr(e, t[i], n));
	}
	return r;
}
function Wr(e, t, n) {
	let r, i = t.split("-");
	do
		r = Gr(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function Gr(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (z(n) || W(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Kr = [];
Kr[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, Kr[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, Kr[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, Kr[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, Kr[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, Kr[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, Kr[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var qr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Jr(e) {
	return qr.test(e);
}
function Yr(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Xr(e) {
	if (e == null) return "o";
	switch (e.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return e;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function Zr(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Jr(t) ? Yr(t) : "*" + t;
}
function Qr(e) {
	let t = [], n = -1, r = 0, i = 0, a, o, s, c, l, u, d, f = [];
	f[0] = () => {
		o === void 0 ? o = s : o += s;
	}, f[1] = () => {
		o !== void 0 && (t.push(o), o = void 0);
	}, f[2] = () => {
		f[0](), i++;
	}, f[3] = () => {
		if (i > 0) i--, r = 4, f[0]();
		else {
			if (i = 0, o === void 0 || (o = Zr(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = Xr(a), d = Kr[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var $r = /* @__PURE__ */ new Map();
function ei(e, t) {
	return U(e) ? R(e, t) : null;
}
function ti(e, t) {
	if (!U(e)) return null;
	let n = $r.get(t);
	if (n || (n = Qr(t), n && $r.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (yr.includes(e) && tr(i) || !U(i) || !L(i, e)) return null;
		let t = i[e];
		if (t === void 0 || B(i)) return null;
		i = t, a++;
	}
	return i;
}
var X = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
}, ni = {
	[X.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale {resource}.",
	[X.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
	[X.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
	[X.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
	[X.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
	[X.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
	[X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.",
	[X.INVALID_NUMBER_ARGUMENT]: "Invalid argument for number formatting: expected a number but received '{value}'.",
	[X.INVALID_DATE_ARGUMENT]: "Invalid argument for datetime formatting: expected a Date, number, or ISO string but received '{value}'."
};
function ri(e, ...t) {
	return wt(ni[e], ...t);
}
var ii = "11.4.18", ai = "en-US", oi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function si() {
	return {
		upper: (e, t) => t === "text" && V(e) ? e.toUpperCase() : t === "vnode" && U(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && V(e) ? e.toLowerCase() : t === "vnode" && U(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && V(e) ? oi(e) : t === "vnode" && U(e) && "__v_isVNode" in e ? oi(e.children) : e
	};
}
var ci;
function li(e) {
	ci = e;
}
var ui;
function di(e) {
	ui = e;
}
var fi;
function pi(e) {
	fi = e;
}
var mi = null, hi = /* @__NO_SIDE_EFFECTS__ */ () => mi, gi = null, _i = (e) => {
	gi = e;
}, vi = () => gi, yi = 0;
function bi(e = {}) {
	let t = B(e.onWarn) ? e.onWarn : G, n = V(e.version) ? e.version : ii, r = V(e.locale) || B(e.locale) ? e.locale : ai, i = B(r) ? ai : r, a = z(e.fallbackLocale) || W(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = W(e.messages) ? e.messages : xi(i), s = W(e.datetimeFormats) ? e.datetimeFormats : xi(i), c = W(e.numberFormats) ? e.numberFormats : xi(i), l = F(I(), e.modifiers, si()), u = e.pluralRules || I(), d = B(e.missing) ? e.missing : null, f = H(e.missingWarn) || kt(e.missingWarn) ? e.missingWarn : !0, p = H(e.fallbackWarn) || kt(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = B(e.postTranslation) ? e.postTranslation : null, _ = W(e.processor) ? e.processor : null, v = !H(e.warnHtmlMessage) || e.warnHtmlMessage, y = !!e.escapeParameter, b = B(e.messageCompiler) ? e.messageCompiler : ci;
	process.env.NODE_ENV !== "production" && B(e.messageCompiler) && Wt(ri(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let ee = B(e.messageResolver) ? e.messageResolver : ui || ei, x = B(e.localeFallbacker) ? e.localeFallbacker : fi || Vr, S = U(e.fallbackContext) ? e.fallbackContext : void 0, C = e, te = U(C.__datetimeFormatters) ? C.__datetimeFormatters : /* @__PURE__ */ new Map(), w = U(C.__numberFormatters) ? C.__numberFormatters : /* @__PURE__ */ new Map(), ne = U(C.__meta) ? C.__meta : {};
	yi++;
	let T = {
		version: n,
		cid: yi,
		locale: r,
		fallbackLocale: a,
		messages: o,
		modifiers: l,
		pluralRules: u,
		missing: d,
		missingWarn: f,
		fallbackWarn: p,
		fallbackFormat: m,
		unresolving: h,
		postTranslation: g,
		processor: _,
		warnHtmlMessage: v,
		escapeParameter: y,
		messageCompiler: b,
		messageResolver: ee,
		localeFallbacker: x,
		fallbackContext: S,
		onWarn: t,
		__meta: ne
	};
	return T.datetimeFormats = s, T.numberFormats = c, T.__datetimeFormatters = te, T.__numberFormatters = w, process.env.NODE_ENV !== "production" && (T.__v_emitter = C.__v_emitter == null ? void 0 : C.__v_emitter), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Nr(T, n, ne), T;
}
var xi = (e) => ({ [e]: I() });
function Si(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Ci(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function wi(e, t, n, r, i) {
	let { missing: a, onWarn: o } = e;
	if (process.env.NODE_ENV !== "production") {
		let r = e.__v_emitter;
		r && r.emit("missing", {
			locale: n,
			key: t,
			type: i,
			groupId: Dt(i, t)
		});
	}
	if (a !== null) {
		let r = a(e, n, t, i);
		return V(r) ? r : t;
	}
	return process.env.NODE_ENV !== "production" && Ci(r, t) && o(ri(X.NOT_FOUND_KEY, {
		key: t,
		locale: n,
		resource: i === "datetime format" ? "datetime formats" : i === "number format" ? "number formats" : "messages"
	})), t;
}
function Ti(e, t) {
	let n = e;
	U(t) ? n.__localeChainObjectCache?.delete(t) : n.__localeChainCache?.delete(t);
}
function Ei(e, t, n) {
	Ti(e, n), e.fallbackContext && Ti(e.fallbackContext, n), e.localeFallbacker(e, n, t);
}
function Di(e, t) {
	return e !== t && e.split("-")[0] === t.split("-")[0];
}
function Oi(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Di(e, t[r])) return !0;
	return !1;
}
function ki(e, t, n, r, i, a, o) {
	let { fallbackLocale: s, localeFallbacker: c, onWarn: l } = e, u = c(e, s, n), d = n;
	for (let s = 0; s < u.length; s++) {
		let c = u[s];
		if (process.env.NODE_ENV !== "production" && n !== c && Si(a, t) && l(ri(o === "datetime format" ? X.FALLBACK_TO_DATE_FORMAT : X.FALLBACK_TO_NUMBER_FORMAT, {
			key: t,
			target: c
		})), process.env.NODE_ENV !== "production" && n !== c) {
			let n = e.__v_emitter;
			n && n.emit("fallback", {
				type: o,
				key: t,
				from: d,
				to: c,
				groupId: Dt(o, t)
			});
		}
		if (W(R(R(r, c) || {}, t)) && V(c)) return c;
		wi(e, t, c, i, o), d = c;
	}
	return null;
}
function Ai(e, t, n) {
	let r = `${e}__${t}`;
	return W(n) && !At(n) && (r = `${r}__${JSON.stringify(n)}`), r;
}
function ji(e, t, n) {
	for (let r in n) {
		let n = `${t}__${r}`;
		for (let t of e.keys()) (t === n || t.startsWith(`${n}__`)) && e.delete(t);
	}
}
function Mi(e, t, n, r) {
	let [, i, a, o] = e, s = n;
	return V(i) ? t.key = i : W(i) && Object.keys(i).forEach((e) => {
		r.includes(e) ? s[e] = i[e] : t[e] = i[e];
	}), V(a) ? t.locale = a : W(a) && (s = a), W(o) && (s = o), s;
}
var Ni = typeof Intl < "u", Pi = {
	dateTimeFormat: Ni && Intl.DateTimeFormat !== void 0,
	numberFormat: Ni && Intl.NumberFormat !== void 0
};
function Fi(e, ...t) {
	let { datetimeFormats: n, unresolving: r, onWarn: i } = e, { __datetimeFormatters: a } = e;
	if (process.env.NODE_ENV !== "production" && !Pi.dateTimeFormat) return i(ri(X.CANNOT_FORMAT_DATE)), "";
	if (!V(t[0]) && !Ot(t[0]) && !P(t[0])) return process.env.NODE_ENV !== "production" && i(ri(X.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [o, s, c, l] = Li(...t), u = H(c.missingWarn) ? c.missingWarn : e.missingWarn, d = H(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = !!c.part, p = Rr(e, c);
	if (!V(o) || o === "") {
		let e = new Intl.DateTimeFormat(p.replace(/!/g, ""), l);
		return f ? e.formatToParts(s) : e.format(s);
	}
	let m = ki(e, o, p, n, u, d, "datetime format");
	if (!V(m)) return r ? -1 : o;
	let h = n[m][o], g = Ai(m, o, l), _ = a.get(g);
	return _ || (_ = new Intl.DateTimeFormat(m, F({}, h, l)), a.set(g, _)), f ? _.formatToParts(s) : _.format(s);
}
var Ii = [
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
function Li(...e) {
	let [t] = e, n = I(), r = I(), i;
	if (V(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Ir(Y.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		i = new Date(n);
		try {
			i.toISOString();
		} catch {
			throw Ir(Y.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (Ot(t)) {
		if (isNaN(t.getTime())) throw Ir(Y.INVALID_DATE_ARGUMENT);
		i = t;
	} else if (P(t)) i = t;
	else throw Ir(Y.INVALID_ARGUMENT);
	let a = Mi(e, n, r, Ii);
	return [
		n.key || "",
		i,
		n,
		a
	];
}
function Ri(e, t, n) {
	ji(e.__datetimeFormatters, t, n);
}
function zi(e, ...t) {
	let { numberFormats: n, unresolving: r, onWarn: i } = e, { __numberFormatters: a } = e;
	if (process.env.NODE_ENV !== "production" && !Pi.numberFormat) return i(ri(X.CANNOT_FORMAT_NUMBER)), "";
	if (!P(t[0])) return process.env.NODE_ENV !== "production" && i(ri(X.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [o, s, c, l] = Vi(...t), u = H(c.missingWarn) ? c.missingWarn : e.missingWarn, d = H(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = !!c.part, p = Rr(e, c);
	if (!V(o) || o === "") {
		let e = new Intl.NumberFormat(p.replace(/!/g, ""), l);
		return f ? e.formatToParts(s) : e.format(s);
	}
	let m = ki(e, o, p, n, u, d, "number format");
	if (!V(m)) return r ? -1 : o;
	let h = n[m][o], g = Ai(m, o, l), _ = a.get(g);
	return _ || (_ = new Intl.NumberFormat(m, F({}, h, l)), a.set(g, _)), f ? _.formatToParts(s) : _.format(s);
}
var Bi = [
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
function Vi(...e) {
	let [t] = e, n = I(), r = I();
	if (!P(t)) throw Ir(Y.INVALID_ARGUMENT);
	let i = t, a = Mi(e, n, r, Bi);
	return [
		n.key || "",
		i,
		n,
		a
	];
}
function Hi(e, t, n) {
	ji(e.__numberFormatters, t, n);
}
var Ui = (e) => e, Wi = (e) => "", Gi = "text", Ki = (e) => e.length === 0 ? "" : Bt(e), qi = zt;
function Ji(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Yi(e) {
	let t = P(e.pluralIndex) ? e.pluralIndex : -1;
	return P(e.named?.count) ? e.named.count : P(e.named?.n) ? e.named.n : t;
}
function Xi(e = {}) {
	let t = e.locale, n = Yi(e), r = V(t) && e.pluralRules && B(R(e.pluralRules, t)) ? e.pluralRules[t] : Ji, i = r === Ji ? void 0 : Ji, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || I(), l = P(e.pluralIndex), u = (t) => {
		let n = Ft(t) ? R(c, t) : c[t];
		return l && !n && (t === "count" || t === "n") ? e.pluralIndex : n;
	};
	function d(t, n) {
		return (B(e.messages) ? e.messages(t, !!n) : U(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Wi);
	}
	let f = (t) => e.modifiers ? R(e.modifiers, t) : Ui, p = B(e.processor?.normalize) ? e.processor.normalize : Ki, m = B(e.processor?.interpolate) ? e.processor.interpolate : qi, h = {
		list: s,
		named: u,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? U(n) ? (a = n.modifier || a, i = n.type || i) : V(n) && (a = n || a) : t.length === 2 && (V(n) && (a = n || a), V(r) && (i = r || i));
			let o = d(e, !0)(h), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && z(s) && a ? s[0] : s;
			if (!a) return c;
			let l = f(a);
			return B(l) ? l(c, i) : (process.env.NODE_ENV !== "production" && Wt(`Not found '${a}' modifier for the linked message of '${e}' key. Use a built-in modifier, or set a custom modifier with 'modifiers' option. So the linked message is used as is.`), c);
		},
		message: d,
		type: V(e.processor?.type) ? e.processor.type : Gi,
		interpolate: m,
		normalize: p,
		values: F(I(), o, c, l ? {
			count: u("count"),
			n: u("n")
		} : {})
	};
	return h;
}
var Zi = () => "", Qi = (e) => B(e), $i = (e) => V(e) || tr(e) || Qi(e);
function ea(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = aa(...t), u = H(l.missingWarn) ? l.missingWarn : e.missingWarn, d = H(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = H(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = V(l.default) || H(l.default) ? H(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (V(m) || B(m)), g = Rr(e, l);
	f && ta(l);
	let [_, v, y] = p ? [
		c,
		g,
		R(s, g) || I()
	] : na(e, c, g, o, d, u), b = _, ee = c;
	if (!p && !$i(b) && h && (b = m, ee = b), !p && (!$i(b) || !V(v))) return i ? -1 : c;
	process.env.NODE_ENV !== "production" && V(b) && e.messageCompiler == null && G("The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function returns the message as is.");
	let x = !1, S = Qi(b) ? b : ra(e, c, v, b, ee, () => {
		x = !0;
	});
	if (x) return b;
	let C = ia(e, S, Xi(ca(e, v, y, l))), te = r ? r(C, c) : C;
	if (f && V(te) && (te = dn(te)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
		let t = {
			timestamp: Date.now(),
			key: V(c) ? c : Qi(b) ? b.key : "",
			locale: v || (Qi(b) ? b.locale : ""),
			format: V(b) ? b : Qi(b) ? b.source : "",
			message: te
		};
		t.meta = F({}, e.__meta, /* @__PURE__ */ hi() || {}), Pr(t);
	}
	return te;
}
function ta(e) {
	if (z(e.list) && (e.list = e.list.map((e) => V(e) ? Gt(e) : e)), U(e.named)) {
		let t = e.named, n = I();
		for (let e of Object.keys(t)) {
			let r = t[e];
			n[e] = V(r) ? Gt(r) : r;
		}
		e.named = n;
	}
}
function na(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = I(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Di(n, f) && Si(i, t) && s(ri(X.FALLBACK_TO_TRANSLATE, {
			key: t,
			target: f
		}));
		let l = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter;
		process.env.NODE_ENV !== "production" && n !== f && l && l.emit("fallback", {
			type: g,
			key: t,
			from: m,
			to: h,
			groupId: Dt(g, t)
		}), d = R(o, f) || I();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && j && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", M && M(v)), (p = c(d, t)) === null && (p = R(d, t)), process.env.NODE_ENV !== "production" && j && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: Dt(g, t)
			}), v && y && M && St && (M(y), St("intlify message resolve", v, y));
		}
		if ($i(p)) break;
		if (!Oi(f, u)) {
			let n = wi(e, t, f, a, g);
			n !== t && (p = n);
		}
		m = h;
	}
	return [
		p,
		f,
		d
	];
}
function ra(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (Qi(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, l = null, u, d;
	process.env.NODE_ENV !== "production" && j && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", M && M(u));
	let f = o(r, oa(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && j && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: Dt("translate", t)
		}), u && d && M && St && (M(d), St("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function ia(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && j && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", M && M(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && j && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: Dt("translate", t.key)
		}), a && o && M && St && (M(o), St("intlify message evaluation", a, o));
	}
	return s;
}
function aa(...e) {
	let [t, n, r] = e, i = I();
	if (!V(t) && !P(t) && !Qi(t) && !tr(t)) throw Ir(Y.INVALID_ARGUMENT);
	let a = P(t) ? String(t) : (Qi(t), t);
	return P(n) ? i.plural = n : V(n) ? i.default = n : W(n) && !At(n) ? i.named = n : z(n) && (i.list = n), P(r) ? i.plural = r : V(r) ? i.default = r : W(r) && F(i, r), [a, i];
}
function oa(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = sa(r), a = t.location && i && Ht(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
				o && i && o.emit("compile-error", {
					message: i,
					error: t.message,
					start: t.location && t.location.start.offset,
					end: t.location && t.location.end.offset,
					groupId: Dt("translate", n)
				});
				let s = `Message compilation error: ${t.message}`;
				throw SyntaxError(a ? `${s}\n${a}` : s);
			}
			throw t;
		},
		onCacheKey: (e) => Tt(t, n, e)
	};
}
function sa(e) {
	if (V(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function ca(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = na(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (V(a) || tr(a)) {
				let n = !1, i = ra(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? Zi : i;
			}
			return Qi(a) ? a : Zi;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), P(r.plural) && (d.pluralIndex = r.plural), d;
}
er();
// node_modules/@vue/devtools-api/lib/esm/env.js
function la() {
	return ua().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ua() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var da = typeof Proxy == "function", fa = "devtools-plugin:setup", pa = "plugin:settings:set", ma, ha;
function ga() {
	return ma === void 0 && (typeof window < "u" && window.performance ? (ma = !0, ha = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (ma = !0, ha = globalThis.perf_hooks.performance) : ma = !1), ma;
}
function _a() {
	return ga() ? ha.now() : Date.now();
}
// node_modules/@vue/devtools-api/lib/esm/proxy.js
var va = class {
	constructor(e, t) {
		this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
		let n = {};
		if (e.settings) for (let t in e.settings) n[t] = e.settings[t].defaultValue;
		let r = `__vue-devtools-plugin-settings__${e.id}`, i = Object.assign({}, n);
		try {
			let e = localStorage.getItem(r), t = JSON.parse(e);
			Object.assign(i, t);
		} catch {}
		this.fallbacks = {
			getSettings() {
				return i;
			},
			setSettings(e) {
				try {
					localStorage.setItem(r, JSON.stringify(e));
				} catch {}
				i = e;
			},
			now() {
				return _a();
			}
		}, t && t.on(pa, (e, t) => {
			e === this.plugin.id && this.fallbacks.setSettings(t);
		}), this.proxiedOn = new Proxy({}, { get: (e, t) => this.target ? this.target.on[t] : (...e) => {
			this.onQueue.push({
				method: t,
				args: e
			});
		} }), this.proxiedTarget = new Proxy({}, { get: (e, t) => this.target ? this.target[t] : t === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(t) ? (...e) => (this.targetQueue.push({
			method: t,
			args: e,
			resolve: () => {}
		}), this.fallbacks[t](...e)) : (...e) => new Promise((n) => {
			this.targetQueue.push({
				method: t,
				args: e,
				resolve: n
			});
		}) });
	}
	async setRealTarget(e) {
		this.target = e;
		for (let e of this.onQueue) this.target.on[e.method](...e.args);
		for (let e of this.targetQueue) e.resolve(await this.target[e.method](...e.args));
	}
};
// node_modules/@vue/devtools-api/lib/esm/index.js
function ya(e, t) {
	let n = e, r = ua(), i = la(), a = da && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(fa, e, t);
	else {
		let e = a ? new va(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
// node_modules/vue-i18n/dist/vue-i18n.mjs
var ba = "11.4.18";
function xa() {
	typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Nt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Nt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Nt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Nt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
var Z = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function Q(e, ...t) {
	return vn(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: Sa,
		args: t
	});
}
var Sa = {
	[Z.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
	[Z.INVALID_ARGUMENT]: "Invalid argument",
	[Z.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
	[Z.NOT_INSTALLED]: "Need to install with `app.use` function",
	[Z.UNEXPECTED_ERROR]: "Unexpected error",
	[Z.REQUIRED_VALUE]: "Required in value: {0}",
	[Z.INVALID_VALUE]: "Invalid value",
	[Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
	[Z.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
	[Z.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
	[Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Ca = /* #__PURE__*/ N("__translateVNode"), wa = /* #__PURE__*/ N("__datetimeParts"), Ta = /* #__PURE__*/ N("__numberParts"), Ea = /* #__PURE__*/ N("__enableEmitter"), Da = /* #__PURE__*/ N("__disableEmitter"), Oa = N("__setPluralRules");
N("__intlifyMeta");
var ka = /* #__PURE__*/ N("__injectWithOption"), Aa = /* #__PURE__*/ N("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15,
	IGNORE_UNSAFE_LOCALE: 16
}, ja = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component.",
	[$.IGNORE_UNSAFE_LOCALE]: "Ignore '{locale}' locale: it is a property name of Object.prototype"
};
function Ma(e, ...t) {
	return wt(ja[e], ...t);
}
var Na = null;
{
	let e = Nt().__VUE_INSTANCE_SETTERS__;
	z(e) && e.push((e) => {
		Na = e;
	});
}
function Pa(e) {
	return Ft(e) ? (process.env.NODE_ENV !== "production" && G(Ma($.IGNORE_UNSAFE_LOCALE, { locale: e })), !0) : !1;
}
function Fa(e) {
	if (!U(e) || tr(e)) return e;
	for (let t in e) if (L(e, t)) {
		if (!t.includes(".")) U(e[t]) && Fa(e[t]);
		else {
			let n = t.split("."), r = n.length - 1, i = e, a = !1;
			for (let e = 0; e < r; e++) {
				if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
				if (n[e] in i || (i[n[e]] = I()), !U(i[n[e]])) {
					process.env.NODE_ENV !== "production" && G(Ma($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
					break;
				}
				if (tr(i[n[e]]) && (yr.includes(n[e + 1]) || n[e + 1] === "cacheKey")) {
					a = !0;
					break;
				}
				i = i[n[e]];
			}
			a || (i[n[r]] = e[t], delete e[t]);
			let o = i[n[r]];
			U(o) && Fa(o);
		}
	}
	return e;
}
function Ia(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = W(n) ? n : z(r) ? I() : { [e]: I() };
	if (z(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			if (t) {
				if (Pa(t)) return;
				o[t] = R(o, t) || I(), mn(n, o[t]);
			} else mn(n, o);
		} else V(e) && mn(JSON.parse(e), o);
	}), i == null && a) for (let e in o) L(o, e) && Fa(o[e]);
	return o;
}
function La(e) {
	return e.type;
}
function Ra(e, t, n) {
	let r = U(t.messages) ? t.messages : I();
	"__i18nGlobal" in n && (r = Ia(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), U(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (U(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function za(e) {
	return c(t, null, e, 0);
}
function Ba() {
	return Na ?? d();
}
var Va = () => [], Ha = () => !1, Ua = 0;
function Wa(e) {
	return ((t, n, r, i) => e(n, r, Ba() || void 0, i));
}
function Ga(e = {}) {
	let { __root: t, __injectWithOption: r } = e, i = t === void 0, a = e.flatJson, o = j ? ee : te, s = !H(e.inheritLocale) || e.inheritLocale, c = o(t && s ? t.locale.value : V(e.locale) ? e.locale : ai), l = o(t && s ? t.fallbackLocale.value : V(e.fallbackLocale) || z(e.fallbackLocale) || W(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(Ia(c.value, e)), d = o(W(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(W(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : H(e.missingWarn) || kt(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : H(e.fallbackWarn) || kt(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : !H(e.fallbackRoot) || e.fallbackRoot, g = !!e.fallbackFormat, _ = B(e.missing) ? e.missing : null, v = B(e.missing) ? Wa(e.missing) : null, y = B(e.postTranslation) ? e.postTranslation : null, b = t ? t.warnHtmlMessage : !H(e.warnHtmlMessage) || e.warnHtmlMessage, x = !!e.escapeParameter, S = t ? t.modifiers : W(e.modifiers) ? e.modifiers : {}, C = e.pluralRules || t && t.pluralRules, w;
	w = (() => {
		i && _i(null);
		let t = {
			version: ba,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: S,
			pluralRules: C,
			missing: v === null ? void 0 : v,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: y === null ? void 0 : y,
			warnHtmlMessage: b,
			escapeParameter: x,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value;
		let n = bi(t);
		return i && _i(n), n;
	})(), Ei(w, c.value, l.value);
	function ne() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let T = n({
		get: () => c.value,
		set: (e) => {
			w.locale = e, c.value = e;
		}
	});
	function E(e) {
		i || (w.fallbackContext = vi());
		try {
			return e();
		} finally {
			i || (w.fallbackContext = void 0);
		}
	}
	function ie(e) {
		E(() => Ei(w, c.value, e));
	}
	let ae = n({
		get: () => l.value,
		set: (e) => {
			l.value = e, w.fallbackLocale = l.value, ie(l.value);
		}
	}), D = n(() => u.value), O = /* #__PURE__*/ n(() => d.value), oe = /* #__PURE__*/ n(() => f.value);
	function se() {
		return B(y) ? y : null;
	}
	function k(e) {
		y = e, w.postTranslation = e;
	}
	function ce() {
		return _;
	}
	function le(e) {
		e !== null && (v = Wa(e)), _ = e, w.missing = v;
	}
	function ue(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let de = (e, n, r, i, a, o) => {
		ne();
		let s;
		try {
			process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s = E(() => e(w));
		} finally {
			process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__;
		}
		if (r !== "translate exists" && P(s) && s === -1 || r === "translate exists" && !s) {
			let [e, o] = n();
			if (process.env.NODE_ENV !== "production" && t && V(e) && ue(r, o) && (h && (Si(m, e) || Ci(p, e)) && G(Ma($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = w;
				t && h && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: Dt(r, e)
				});
			}
			return t && h ? i(t) : a(e);
		}
		if (o(s)) return s;
		/* istanbul ignore next */
		throw Q(Z.UNEXPECTED_RETURN_TYPE);
	};
	function fe(...e) {
		return de((t) => Reflect.apply(ea, null, [t, ...e]), () => aa(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => V(e));
	}
	function pe(...e) {
		let [t, n, r] = e;
		if (r && !U(r)) throw Q(Z.INVALID_ARGUMENT);
		return fe(t, n, F({ resolvedMessage: !0 }, r || {}));
	}
	function me(...e) {
		return de((t) => Reflect.apply(Fi, null, [t, ...e]), () => Li(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => V(e) || z(e));
	}
	function he(...e) {
		return de((t) => Reflect.apply(zi, null, [t, ...e]), () => Vi(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => V(e) || z(e));
	}
	function ge(e) {
		return e.map((e) => V(e) || P(e) || H(e) ? za(String(e)) : e);
	}
	let _e = {
		normalize: ge,
		interpolate: (e) => e,
		type: "vnode"
	};
	function ve(...e) {
		return de((t) => {
			let n, r = t;
			try {
				r.processor = _e, n = Reflect.apply(ea, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => aa(...e), "translate", (t) => t[Ca](...e), (e) => [za(e)], (e) => z(e));
	}
	function ye(...e) {
		return de((t) => Reflect.apply(zi, null, [t, ...e]), () => Vi(...e), "number format", (t) => t[Ta](...e), Va, (e) => V(e) || z(e));
	}
	function be(...e) {
		return de((t) => Reflect.apply(Fi, null, [t, ...e]), () => Li(...e), "datetime format", (t) => t[wa](...e), Va, (e) => V(e) || z(e));
	}
	function xe(e) {
		C = e, w.pluralRules = C;
	}
	function Se(e, t) {
		let n = Ee(e), r = w.messageResolver(n, t);
		return r === null ? R(n, t) : r;
	}
	function Ce(e, t) {
		return de(() => {
			if (!e) return !1;
			let n = V(t) ? t : c.value, r = V(t) ? [n] : w.localeFallbacker(w, l.value, n);
			for (let t = 0; t < r.length; t++) if ($i(Se(r[t], e))) return !0;
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), Ha, (e) => H(e));
	}
	function we(e) {
		let t = null, n = w.localeFallbacker(w, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = Se(n[r], e);
			if (i != null) {
				t = i;
				break;
			}
		}
		return t;
	}
	function Te(e) {
		return we(e) ?? (t && t.tm(e) || {});
	}
	function Ee(e) {
		return R(u.value, e) || {};
	}
	function De(e, t) {
		Pa(e) || (a && Fa(t), u.value[e] = t, w.messages = u.value);
	}
	function Oe(e, t) {
		Pa(e) || (u.value[e] = R(u.value, e) || {}, a && Fa(t), mn(t, u.value[e]), w.messages = u.value);
	}
	function ke(e) {
		return R(d.value, e) || {};
	}
	function Ae(e, t) {
		Pa(e) || (d.value[e] = t, w.datetimeFormats = d.value, Ri(w, e, t));
	}
	function je(e, t) {
		Pa(e) || (d.value[e] = F(R(d.value, e) || {}, t), w.datetimeFormats = d.value, Ri(w, e, t));
	}
	function Me(e) {
		return R(f.value, e) || {};
	}
	function Ne(e, t) {
		Pa(e) || (f.value[e] = t, w.numberFormats = f.value, Hi(w, e, t));
	}
	function Pe(e, t) {
		Pa(e) || (f.value[e] = F(R(f.value, e) || {}, t), w.numberFormats = f.value, Hi(w, e, t));
	}
	Ua++, re(l, () => ie(l.value), {
		deep: !0,
		flush: "sync"
	}), t && j && (re(t.locale, (e) => {
		s && (c.value = e, w.locale = e, Ei(w, c.value, l.value));
	}), re(t.fallbackLocale, (e) => {
		s && (l.value = e, w.fallbackLocale = l.value, Ei(w, c.value, l.value));
	}));
	let A = {
		id: Ua,
		locale: T,
		fallbackLocale: ae,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (T.value = t.locale.value, ae.value = t.fallbackLocale.value);
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: D,
		get modifiers() {
			return S;
		},
		get pluralRules() {
			return C || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, w.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, w.fallbackWarn = m;
		},
		get fallbackRoot() {
			return h;
		},
		set fallbackRoot(e) {
			h = e;
		},
		get fallbackFormat() {
			return g;
		},
		set fallbackFormat(e) {
			g = e, w.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return b;
		},
		set warnHtmlMessage(e) {
			b = e, w.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return x;
		},
		set escapeParameter(e) {
			x = e, w.escapeParameter = e;
		},
		t: fe,
		getLocaleMessage: Ee,
		setLocaleMessage: De,
		mergeLocaleMessage: Oe,
		getPostTranslationHandler: se,
		setPostTranslationHandler: k,
		getMissingHandler: ce,
		setMissingHandler: le,
		[Oa]: xe
	};
	return A.datetimeFormats = O, A.numberFormats = oe, A.rt = pe, A.te = Ce, A.tm = Te, A.d = me, A.n = he, A.getDateTimeFormat = ke, A.setDateTimeFormat = Ae, A.mergeDateTimeFormat = je, A.getNumberFormat = Me, A.setNumberFormat = Ne, A.mergeNumberFormat = Pe, A[ka] = r, A[Ca] = ve, A[wa] = be, A[Ta] = ye, process.env.NODE_ENV !== "production" && (A[Ea] = (e) => {
		w.__v_emitter = e;
	}, A[Da] = () => {
		w.__v_emitter = void 0;
	}), A;
}
var Ka = "vue-i18n: composer properties", qa = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
	"vue-i18n-resource-inspector": "Vue I18n DevTools",
	"vue-i18n-timeline": "Vue I18n"
}, Ja = { "vue-i18n-resource-inspector": "Search for scopes ..." }, Ya = { "vue-i18n-timeline": 16764185 }, Xa;
async function Za(e, t) {
	return new Promise((n, r) => {
		try {
			ya({
				id: "vue-devtools-plugin-vue-i18n",
				label: qa["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [Ka],
				app: e
			}, (r) => {
				Xa = r, r.on.visitComponentTree(({ componentInstance: e, treeNode: n }) => {
					$a(e, n, t);
				}), r.on.inspectComponent(({ componentInstance: e, instanceData: n }) => {
					e.__VUE_I18N__ && n && (t.mode === "legacy" ? e.__VUE_I18N__ !== t.global.__composer && eo(n, e.__VUE_I18N__) : eo(n, e.__VUE_I18N__));
				}), r.addInspector({
					id: "vue-i18n-resource-inspector",
					label: qa["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: Ja["vue-i18n-resource-inspector"]
				}), r.on.getInspectorTree((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && oo(n, t);
				});
				let i = /* @__PURE__ */ new Map();
				r.on.getInspectorState(async (n) => {
					if (n.app === e && n.inspectorId === "vue-i18n-resource-inspector") {
						if (r.unhighlightElement(), lo(n, t), n.nodeId === "global") {
							if (!i.has(n.app)) {
								let [e] = await r.getComponentInstances(n.app);
								i.set(n.app, e);
							}
							r.highlightElement(i.get(n.app));
						} else {
							let e = so(n.nodeId, t);
							e && r.highlightElement(e);
						}
					}
				}), r.on.editInspectorState((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && po(n, t);
				}), r.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: qa["vue-i18n-timeline"],
					color: Ya["vue-i18n-timeline"]
				}), n(!0);
			});
		} catch (e) {
			console.error(e), r(!1);
		}
	});
}
function Qa(e) {
	return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function $a(e, t, n) {
	let r = n.mode === "composition" ? n.global : n.global.__composer;
	if (e && e.__VUE_I18N__ && e.__VUE_I18N__ !== r) {
		let n = {
			label: `i18n (${Qa(e)} Scope)`,
			textColor: 0,
			backgroundColor: 16764185
		};
		t.tags.push(n);
	}
}
function eo(e, t) {
	let n = Ka;
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
		value: to(t.messages.value)
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
function to(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		B(r) && "source" in r ? t[n] = ao(r) : tr(r) && r.loc && r.loc.source ? t[n] = r.loc.source : U(r) ? t[n] = to(r) : t[n] = r;
	}), t;
}
var no = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function ro(e) {
	return e.replace(/[<>"&]/g, io);
}
function io(e) {
	return no[e] || e;
}
function ao(e) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${e.source ? `("${ro(e.source)}")` : "(?)"}`
	} };
}
function oo(e, t) {
	e.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	let n = t.mode === "composition" ? t.global : t.global.__composer;
	for (let [r, i] of t.__instances) {
		let a = t.mode === "composition" ? i : i.__composer;
		n !== a && e.rootNodes.push({
			id: a.id.toString(),
			label: `${Qa(r)} Scope`
		});
	}
}
function so(e, t) {
	let n = null;
	if (e !== "global") {
		for (let [r, i] of t.__instances.entries()) if (i.id.toString() === e) {
			n = r;
			break;
		}
	}
	return n;
}
function co(e, t) {
	if (e === "global") return t.mode === "composition" ? t.global : t.global.__composer;
	{
		let n = Array.from(t.__instances.values()).find((t) => t.id.toString() === e);
		return n ? t.mode === "composition" ? n : n.__composer : null;
	}
}
function lo(e, t) {
	let n = co(e.nodeId, t);
	return n && (e.state = uo(n)), null;
}
function uo(e) {
	let t = {}, n = "Locale related info";
	t[n] = [
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
	let r = "Locale messages info";
	t[r] = [{
		type: r,
		key: "messages",
		editable: !1,
		value: to(e.messages.value)
	}];
	{
		let n = "Datetime formats info";
		t[n] = [{
			type: n,
			key: "datetimeFormats",
			editable: !1,
			value: e.datetimeFormats.value
		}];
		let r = "Datetime formats info";
		t[r] = [{
			type: r,
			key: "numberFormats",
			editable: !1,
			value: e.numberFormats.value
		}];
	}
	return t;
}
function fo(e, t) {
	if (Xa) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), Xa.addTimelineEvent({
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
function po(e, t) {
	let n = co(e.nodeId, t);
	if (n) {
		let [t] = e.path;
		t === "locale" && V(e.state.value) ? n.locale.value = e.state.value : t === "fallbackLocale" && (V(e.state.value) || z(e.state.value) || U(e.state.value)) ? n.fallbackLocale.value = e.state.value : t === "inheritLocale" && H(e.state.value) && (n.inheritLocale = e.state.value);
	}
}
var mo = /* @__PURE__ */ new WeakMap();
function ho(e) {
	if (!kt(e)) return !e;
	let t = mo.get(e);
	return t || (t = RegExp(`^(?![\\s\\S]*(?:${e.source}))`, e.flags.replace(/[gy]/g, "")), mo.set(e, t), mo.set(t, e)), t;
}
function go(e) {
	let t = V(e.locale) ? e.locale : ai, n = V(e.fallbackLocale) || z(e.fallbackLocale) || W(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = B(e.missing) ? e.missing : void 0, i = H(e.silentTranslationWarn) || kt(e.silentTranslationWarn) ? ho(e.silentTranslationWarn) : !0, a = H(e.silentFallbackWarn) || kt(e.silentFallbackWarn) ? ho(e.silentFallbackWarn) : !0, o = !H(e.fallbackRoot) || e.fallbackRoot, s = !!e.formatFallbackMessages, c = W(e.modifiers) ? e.modifiers : {}, l = e.pluralizationRules, u = B(e.postTranslation) ? e.postTranslation : void 0, d = !V(e.warnHtmlInMessage) || e.warnHtmlInMessage !== "off", f = !!e.escapeParameterHtml, p = !H(e.sync) || e.sync, m = e.messages;
	if (W(e.sharedMessages)) {
		let t = e.sharedMessages;
		m = Object.keys(t).reduce((e, n) => (Pa(n) || F(R(e, n) || (e[n] = {}), t[n]), e), m || {});
	}
	let { __i18n: h, __root: g, __injectWithOption: _ } = e, v = e.datetimeFormats, y = e.numberFormats, b = e.flatJson;
	return {
		locale: t,
		fallbackLocale: n,
		messages: m,
		flatJson: b,
		datetimeFormats: v,
		numberFormats: y,
		missing: r,
		missingWarn: i,
		fallbackWarn: a,
		fallbackRoot: o,
		fallbackFormat: s,
		modifiers: c,
		pluralRules: l,
		postTranslation: u,
		warnHtmlMessage: d,
		escapeParameter: f,
		messageResolver: e.messageResolver,
		inheritLocale: p,
		__i18n: h,
		__root: g,
		__injectWithOption: _
	};
}
function _o(e = {}) {
	let t = Ga(go(e)), { __extender: n } = e, r = {
		id: t.id,
		get locale() {
			return t.locale.value;
		},
		set locale(e) {
			t.locale.value = e;
		},
		get fallbackLocale() {
			return t.fallbackLocale.value;
		},
		set fallbackLocale(e) {
			t.fallbackLocale.value = e;
		},
		get messages() {
			return t.messages.value;
		},
		get datetimeFormats() {
			return t.datetimeFormats.value;
		},
		get numberFormats() {
			return t.numberFormats.value;
		},
		get availableLocales() {
			return t.availableLocales;
		},
		get missing() {
			return t.getMissingHandler();
		},
		set missing(e) {
			t.setMissingHandler(e);
		},
		get silentTranslationWarn() {
			return ho(t.missingWarn);
		},
		set silentTranslationWarn(e) {
			t.missingWarn = ho(e);
		},
		get silentFallbackWarn() {
			return ho(t.fallbackWarn);
		},
		set silentFallbackWarn(e) {
			t.fallbackWarn = ho(e);
		},
		get modifiers() {
			return t.modifiers;
		},
		get formatFallbackMessages() {
			return t.fallbackFormat;
		},
		set formatFallbackMessages(e) {
			t.fallbackFormat = e;
		},
		get postTranslation() {
			return t.getPostTranslationHandler();
		},
		set postTranslation(e) {
			t.setPostTranslationHandler(e);
		},
		get sync() {
			return t.inheritLocale;
		},
		set sync(e) {
			t.inheritLocale = e;
		},
		get warnHtmlInMessage() {
			return t.warnHtmlMessage ? "warn" : "off";
		},
		set warnHtmlInMessage(e) {
			t.warnHtmlMessage = e !== "off";
		},
		get escapeParameterHtml() {
			return t.escapeParameter;
		},
		set escapeParameterHtml(e) {
			t.escapeParameter = e;
		},
		get pluralizationRules() {
			return t.pluralRules || {};
		},
		__composer: t,
		t(...e) {
			return Reflect.apply(t.t, t, [...e]);
		},
		rt(...e) {
			return Reflect.apply(t.rt, t, [...e]);
		},
		te(e, n) {
			return t.te(e, n);
		},
		tm(e) {
			return t.tm(e);
		},
		getLocaleMessage(e) {
			return t.getLocaleMessage(e);
		},
		setLocaleMessage(e, n) {
			t.setLocaleMessage(e, n);
		},
		mergeLocaleMessage(e, n) {
			t.mergeLocaleMessage(e, n);
		},
		d(...e) {
			return Reflect.apply(t.d, t, [...e]);
		},
		getDateTimeFormat(e) {
			return t.getDateTimeFormat(e);
		},
		setDateTimeFormat(e, n) {
			t.setDateTimeFormat(e, n);
		},
		mergeDateTimeFormat(e, n) {
			t.mergeDateTimeFormat(e, n);
		},
		n(...e) {
			return Reflect.apply(t.n, t, [...e]);
		},
		getNumberFormat(e) {
			return t.getNumberFormat(e);
		},
		setNumberFormat(e, n) {
			t.setNumberFormat(e, n);
		},
		mergeNumberFormat(e, n) {
			t.mergeNumberFormat(e, n);
		}
	};
	return r.__extender = n, process.env.NODE_ENV !== "production" && (r.__enableEmitter = (e) => {
		let n = t;
		n[Ea] && n[Ea](e);
	}, r.__disableEmitter = () => {
		let e = t;
		e[Da] && e[Da]();
	}), r;
}
function vo(e, t, n) {
	return {
		beforeCreate() {
			let r = Ba();
			/* istanbul ignore if */
			if (!r) throw Q(Z.UNEXPECTED_ERROR);
			let i = this.$options;
			if (i.i18n) {
				let r = F({}, i.i18n);
				if (i.__i18n && (r.__i18n = i.__i18n), r.__root = t, this === this.$root) this.$i18n = yo(e, r);
				else {
					r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = _o(r);
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else if (i.__i18n) {
				if (this === this.$root) this.$i18n = yo(e, i);
				else {
					this.$i18n = _o({
						__i18n: i.__i18n,
						__injectWithOption: !0,
						__extender: n.__vueI18nExtend,
						__root: t
					});
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else this.$i18n = e;
			i.__i18nGlobal && Ra(t, i, i), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = (e) => this.$i18n.tm(e), n.__setInstance(r, this.$i18n);
		},
		mounted() {
			/* istanbul ignore if */
			if (process.env.NODE_ENV !== "production" && this.$i18n) {
				let e = Ba();
				if (!e) return;
				let t = this.$i18n;
				e.__VUE_I18N__ = t.__composer;
				let n = this.__v_emitter = fn();
				t.__enableEmitter && t.__enableEmitter(n), n.on("*", fo);
			}
		},
		unmounted() {
			let e = Ba();
			/* istanbul ignore if */
			if (!e) throw Q(Z.UNEXPECTED_ERROR);
			let t = this.$i18n;
			process.env.NODE_ENV !== "production" && e.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", fo), delete this.__v_emitter), t && (t.__disableEmitter && t.__disableEmitter(), delete e.__VUE_I18N__)), t && (delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t?.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender), n.__deleteInstance(e), delete this.$i18n);
		}
	};
}
function yo(e, t) {
	e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Oa](t.pluralizationRules || e.pluralizationRules);
	let n = Ia(e.locale, {
		messages: t.messages,
		__i18n: t.__i18n
	});
	return Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
}
var bo = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function xo({ slots: t }, n) {
	return n.length === 1 && n[0] === "default" ? (t.default ? t.default() : []).reduce((t, n) => [...t, ...n.type === e ? n.children : [n]], []) : n.reduce((e, n) => {
		let r = t[n];
		return r && (e[n] = r()), e;
	}, I());
}
function So() {
	return e;
}
var Co = /* @__PURE__ */ l({
	name: "i18n-t",
	props: F({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => P(e) || !isNaN(e)
		}
	}, bo),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Po({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = () => {
				let r = Object.keys(n).filter((e) => e[0] !== "_"), a = I();
				e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = V(e.plural) ? +e.plural : e.plural);
				let o = xo(t, r);
				return i[Ca](e.keypath, o, a);
			}, o = F(I(), r), s = V(e.tag) || U(e.tag) ? e.tag : So();
			return U(s) ? p(s, o, { default: a }) : p(s, o, a());
		};
	}
});
function wo(e) {
	return z(e) && !V(e[0]);
}
function To(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = () => {
			let t = { part: !0 }, a = I();
			e.locale && (t.locale = e.locale), V(e.format) ? t.key = e.format : U(e.format) && (V(e.format.key) && (t.key = e.format.key), a = Object.keys(e.format).reduce((t, r) => n.includes(r) ? F(I(), t, { [r]: e.format[r] }) : t, I()));
			let o = r(e.value, t, a), s = [t.key];
			return z(o) ? s = o.map((e, t) => {
				let n = i[e.type], r = n ? n({
					[e.type]: e.value,
					index: t,
					parts: o
				}) : [e.value];
				return wo(r) && (r[0].key = `${e.type}-${t}`), r;
			}) : V(o) && (s = [o]), s;
		}, o = F(I(), a), s = V(e.tag) || U(e.tag) ? e.tag : So();
		return U(s) ? p(s, o, { default: t }) : p(s, o, t());
	};
}
var Eo = /* @__PURE__ */ l({
	name: "i18n-n",
	props: F({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, bo),
	setup(e, t) {
		let n = e.i18n || Po({
			useScope: e.scope,
			__useComponent: !0
		});
		return To(e, t, Bi, (...e) => n[Ta](...e));
	}
});
function Do(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function Oo(e) {
	let t = (t) => {
		process.env.NODE_ENV !== "production" && Wt(Ma($.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
		let { instance: n, value: r } = t;
		/* istanbul ignore if */
		if (!n || !n.$) throw Q(Z.UNEXPECTED_ERROR);
		let i = Do(e, n.$), a = ko(r);
		return [Reflect.apply(i.t, i, [...Ao(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			j && (e.__i18nWatcher = re(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			j && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = ko(t);
				e.textContent = Reflect.apply(n.t, n, [...Ao(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function ko(e) {
	if (V(e)) return { path: e };
	if (W(e)) {
		if (!("path" in e)) throw Q(Z.REQUIRED_VALUE, "path");
		return e;
	}
	throw Q(Z.INVALID_VALUE);
}
function Ao(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return V(n) && (o.locale = n), P(i) && (o.plural = i), P(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function jo(e, t, ...n) {
	let r = W(n[0]) ? n[0] : {};
	(!H(r.globalInstall) || r.globalInstall) && ([Co.name, "I18nT"].forEach((t) => e.component(t, Co)), [Eo.name, "I18nN"].forEach((t) => e.component(t, Eo)), [Go.name, "I18nD"].forEach((t) => e.component(t, Go))), e.directive("t", Oo(t));
}
var Mo = /* #__PURE__*/ N("global-vue-i18n");
function No(e = {}) {
	let t = __VUE_I18N_LEGACY_API__ && H(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__;
	process.env.NODE_ENV !== "production" && t && Wt(Ma($.DEPRECATE_LEGACY_MODE));
	let n = !H(e.globalInjection) || e.globalInjection, r = /* @__PURE__ */ new Map(), [i, a] = Fo(e, t), o = /* #__PURE__*/ N(process.env.NODE_ENV === "production" ? "" : "vue-i18n");
	function s(e) {
		return r.get(e) || null;
	}
	function c(e, t) {
		r.set(e, t);
	}
	function l(e) {
		r.delete(e);
	}
	let u = {
		get mode() {
			return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
		},
		install(e, ...r) {
			if (process.env.NODE_ENV !== "production" && (e.__VUE_I18N__ = u), e.__VUE_I18N_SYMBOL__ = o, e.provide(e.__VUE_I18N_SYMBOL__, u), W(r[0])) {
				let e = r[0];
				u.__composerExtend = e.__composerExtend, u.__vueI18nExtend = e.__vueI18nExtend;
			}
			let i = null;
			!t && n && (i = Wo(e, u.global)), __VUE_I18N_FULL_INSTALL__ && jo(e, u, ...r), __VUE_I18N_LEGACY_API__ && t && e.mixin(vo(a, a.__composer, u));
			let s = e.unmount;
			e.unmount = () => {
				i && i(), u.dispose(), s();
			}, process.env.NODE_ENV !== "production" && Za(e, u).then((e) => {
				if (!e) throw Q(Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
				let n = fn();
				if (t) {
					let e = a;
					e.__enableEmitter && e.__enableEmitter(n);
				} else {
					let e = a;
					e[Ea] && e[Ea](n);
				}
				n.on("*", fo);
			}).catch(() => {
				process.env.NODE_ENV !== "production" && G(Sa[Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]);
			});
		},
		get global() {
			return a;
		},
		dispose() {
			i.stop();
		},
		__instances: r,
		__getInstance: s,
		__setInstance: c,
		__deleteInstance: l
	};
	return u;
}
function Po(e = {}) {
	let t = Ba();
	if (t == null) throw Q(Z.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Q(Z.NOT_INSTALLED);
	let n = Io(t), r = Ro(n), i = La(t), a = Lo(e, i);
	if (a === "global") return Ra(r, e, i), r;
	if (a === "parent") {
		let i = zo(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && G(Ma($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw Q(Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = F({}, e);
		a.__root = zo(n, t) || r;
		let o = Ga(a);
		i.__composerExtend && (o[Aa] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = fn();
			let e = o;
			e[Ea] && e[Ea](s), s.on("*", fo);
		}
		return f() && v(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", fo);
				let e = o;
				e[Da] && e[Da]();
			}
			let e = o[Aa];
			e && (e(), delete o[Aa]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = F({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Ga(n), o.__composerExtend && (s[Aa] = o.__composerExtend(s)), Vo(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && G(Ma($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function Fo(e, t) {
	let n = u(), r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => _o(e)) : n.run(() => Ga(e));
	if (r == null) throw Q(Z.UNEXPECTED_ERROR);
	return [n, r];
}
function Io(e) {
	let t = m(e.isCE ? Mo : e.appContext.app.__VUE_I18N_SYMBOL__);
	/* istanbul ignore if */
	if (!t) throw Q(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
	return t;
}
function Lo(e, t) {
	return At(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ro(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function zo(e, t, n = !1) {
	let r = null, i = t.root, a = Bo(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition") r = t.__getInstance(a);
		else if (__VUE_I18N_LEGACY_API__) {
			let e = t.__getInstance(a);
			e != null && (r = e.__composer, n && r && !r[ka] && (r = null));
		}
		if (r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Bo(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Vo(e, t, n) {
	let r = null;
	_(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = fn();
			let e = n;
			e[Ea] && e[Ea](r), r.on("*", fo);
		}
	}, t), y(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", fo), i[Da] && i[Da](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[Aa];
		a && (a(), delete i[Aa]);
	}, t);
}
var Ho = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], Uo = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function Wo(e, t) {
	let n = Object.create(null);
	return Ho.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw Q(Z.UNEXPECTED_ERROR);
		let i = h(r.value) ? {
			get() {
				return r.value.value;
			},
			set(e) {
				r.value.value = e;
			}
		} : { get() {
			return r.get && r.get();
		} };
		Object.defineProperty(n, e, i);
	}), e.config.globalProperties.$i18n = n, Uo.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw Q(Z.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, Uo.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var Go = /* @__PURE__ */ l({
	name: "i18n-d",
	props: F({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, bo),
	setup(e, t) {
		let n = e.i18n || Po({
			useScope: e.scope,
			__useComponent: !0
		});
		return To(e, t, Ii, (...e) => n[wa](...e));
	}
});
if (xa(), li(Ar), di(ti), pi(Hr), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
	let e = Nt();
	e.__INTLIFY__ = !0, Mr(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
// src/i18n.js
function Ko() {
	let e = /* #__PURE__ */ Object.assign({
		"./locales/cz_CZ.json": mt,
		"./locales/en_US.json": ht,
		"./locales/es_ES.json": gt,
		"./locales/fr_FR.json": _t,
		"./locales/pl_PL.json": vt,
		"./locales/pt_BR.json": yt,
		"./locales/sk_SK.json": bt,
		"./locales/tr_TR.json": xt
	}), t = {};
	for (let n in e) {
		let r = n.match(/([A-Za-z0-9-_]+)(?=\.)/i)[0];
		if (r && r.length > 1) {
			let i = r;
			t[i] = e[n];
		}
	}
	return t;
}
var qo = No({
	legacy: !1,
	locale: "en_US",
	fallbackLocale: "en_US",
	messages: Ko()
});
pt.install = (e, t) => {
	e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(qo), e.component("vueSelectSides", pt);
};
var Jo = pt;
export { Jo as default };
