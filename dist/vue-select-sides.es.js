import { Fragment as e, Text as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, effectScope as u, getCurrentInstance as d, h as f, inject as p, isRef as m, normalizeClass as h, onBeforeMount as g, onMounted as _, onUnmounted as v, openBlock as y, ref as b, renderList as x, resolveComponent as S, resolveDynamicComponent as C, shallowRef as w, toDisplayString as T, vModelText as ee, vShow as E, watch as D, withDirectives as O } from "vue";
// src/sort-by.js
var te = (...e) => {
	let t = e.filter((e) => typeof e == "string"), n = e.find((e) => typeof e == "function");
	return (e, r) => {
		for (let i of t) {
			let t = 1;
			i[0] === "-" && (t = -1, i = i.substring(1));
			let a = ne(e, i), o = ne(r, i);
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
}, ne = (e, t) => t.split(".").reduce((e, t) => e?.[t], e), k = (e) => JSON.parse(JSON.stringify(e)), A = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), re = (e, t) => {
	let n = [];
	e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label"));
	let r = (e, t) => e === "label" && typeof t == "string" ? A(t) : t;
	return t.sort(te(...n, r)).map((e) => (e.children && e.children.sort(te(...n, r)), e)), t;
}, ie = (e, t) => e.filter((e) => String(e) !== String(t)), j = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ae = {
	name: "v-select-all",
	display: "Select all",
	emits: ["update-select-all"],
	props: { items: Array }
};
function oe(e, t, n, r, i, o) {
	return y(), a("a", {
		href: "javascript:void(0)",
		onClick: t[0] ||= (t) => e.$emit("update-select-all")
	}, T(e.$t("selectAll")), 1);
}
var se = /*#__PURE__*/ j(ae, [["render", oe]]), ce = {
	name: "v-deselect-all",
	display: "Deselect all",
	emits: ["update-deselect-all"],
	props: {
		click: Function,
		items: Array
	}
};
function le(e, t, n, r, i, o) {
	return y(), a("a", {
		href: "javascript:void(0)",
		onClick: t[0] ||= (t) => e.$emit("update-deselect-all")
	}, T(e.$t("deselectAll")), 1);
}
var ue = /*#__PURE__*/ j(ce, [["render", le]]), de = {
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
}, fe = ["placeholder"];
function pe(e, t, n, r, i, o) {
	return O((y(), a("input", {
		type: "text",
		"onUpdate:modelValue": t[0] ||= (e) => i.inputVal = e,
		placeholder: i.thePlaceholder
	}, null, 8, fe)), [[ee, i.inputVal]]);
}
var me = /*#__PURE__*/ j(de, [["render", pe]]), he = {
	name: "v-no-results",
	display: "No results",
	methods: {}
}, ge = { class: "no-results" };
function _e(e, t, n, r, i, s) {
	return y(), a("li", ge, [o("span", null, T(e.$t("searchNoResult")), 1)]);
}
var ve = /*#__PURE__*/ j(he, [["render", _e]]), ye = {
	name: "v-no-selection",
	display: "No selection",
	methods: {}
}, be = { class: "no-selection" };
function xe(e, t, n, r, i, s) {
	return y(), a("li", be, [o("span", null, T(e.$t("searchParentSelected")), 1)]);
}
// src/components/list.vue
var Se = {
	name: "v-list",
	display: "List",
	mounted() {},
	components: {
		"v-no-results": ve,
		"v-no-selection": /* @__PURE__ */ j(ye, [["render", xe]])
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
}, Ce = { class: "vss-list-ul" }, we = ["onClick"], Te = { style: {} }, Ee = {
	key: 0,
	class: "vss-list-badge"
}, De = { key: 0 }, Oe = ["onClick"];
function ke(t, n, r, l, u, d) {
	let f = S("v-no-results"), p = S("v-no-selection");
	return y(), a("ul", Ce, [
		(y(!0), a(e, null, x(r.items, (t, n) => O((y(), a("li", {
			key: n,
			onClick: (e) => !r.hasChildren && d.toggleItem(t, {}, t.selected),
			class: h(d.liClass(t, r.hasChildren))
		}, [o("span", Te, [s(T(t.label) + " ", 1), d.showCounter(t) ? (y(), a("small", Ee, T(t.totalChildrenSelected), 1)) : i("", !0)]), r.hasChildren ? (y(), a("ul", De, [(y(!0), a(e, null, x(t.children, (e, r) => O((y(), a("li", {
			key: `${n}-${r}`,
			onClick: (n) => d.toggleItem(e, t, e.selected),
			class: h(d.liClass(e, !1))
		}, [o("span", null, T(e.label), 1)], 10, Oe)), [[E, e.visible]])), 128)), O(c(f, null, null, 512), [[E, d.totalItems(t.children) === 0]])])) : i("", !0)], 10, we)), [[E, d.showParent(t)]])), 128)),
		O(c(p, null, null, 512), [[E, d.showNoSelection(r.items)]]),
		O(c(f, null, null, 512), [[E, d.showNoResultParent(r.items)]])
	]);
}
var Ae = /*#__PURE__*/ j(Se, [["render", ke]]), je = {
	name: "v-separator",
	display: "Separator"
}, M = { class: "vss-span" };
function Me(e, t, n, r, i, o) {
	return y(), a("div", M, " ‹ › ");
}
var Ne = /*#__PURE__*/ j(je, [["render", Me]]), Pe = {
	name: "v-total",
	display: "Total",
	props: { value: { type: Number } }
}, Fe = ["title"];
function Ie(e, t, n, r, i, o) {
	return y(), a("span", { title: e.$t("totalSelected") }, T(n.value), 9, Fe);
}
var Le = /*#__PURE__*/ j(Pe, [["render", Ie]]), Re = {
	emits: ["update-selected"],
	watch: {
		modelValue(e, t) {
			JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
		},
		dataSelected(e, t) {
			this.$emit("update-selected", e, t);
		},
		orderBy() {
			this.listLeft = re(this, this.dataList), this.listRight = re(this, this.dataList);
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
}, ze = {
	name: "grouped-select-sides",
	display: "Grouped select sides",
	mixins: [Re],
	components: {
		"v-select-all": se,
		"v-deselect-all": ue,
		"v-search": me,
		"v-separator": Ne,
		"v-list": Ae,
		"v-total": Le
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
			let r = k(this.dataSelected);
			Object.keys(t).length > 0 ? (r[t.value] === void 0 && t.visible && (r[t.value] = []), n ? e.visible && r[t.value].indexOf(e.value) === -1 && r[t.value].push(e.value) : e.visible && (r[t.value] = ie(r[t.value], e.value))) : n ? r[e.value] === void 0 && (r[e.value] = []) : delete r[e.value], this.dataSelected = r;
		},
		prepareList() {
			let e = this, t = {};
			e.dataListOriginal = k(e.list);
			let n = Object.keys(e.modelValue), r = e.list.filter((r) => {
				let i = r.value, a = n.indexOf(i) >= 0;
				return a ? (r.selectedDefault = !0, t[i] = []) : r.selectedDefault = !1, r.children && r.children.filter((n) => {
					let r = n.value;
					a && (e.modelValue[i].indexOf(r) >= 0 ? (n.selectedDefault = !0, t[i].push(r)) : n.selectedDefault = !1);
				}), r;
			});
			e.dataSelected = t, e.dataList = re({
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
			let e = this, t = A(this.searchL), n = Object.keys(this.dataSelected), r = k(this.listLeft);
			return r = r.filter((r) => {
				let i = A(r.label);
				return r.selected = n.indexOf(r.value) >= 0, r.visible = !!i.includes(t), r.children ? (r.children = r.children.map((t) => (t.selected = !1, e.dataSelected[r.value] !== void 0 && (t.selected = e.dataSelected[r.value].indexOf(t.value) >= 0), t)), r.totalChildrenSelected = r.children.filter(function(e) {
					return e.selected === !0;
				}).length, r.children) : r;
			}), r;
		},
		filteredListR() {
			let e = this, t = A(e.searchR), n = k(this.listLeft);
			return n = e.listRight.filter(function(n) {
				return n.children ? (n.children = n.children.map((r) => (r.visible = !!A(r.label).includes(t), e.dataSelected[n.value] !== void 0 && (r.selected = e.dataSelected[n.value].indexOf(r.value) >= 0), r)), n.children) : n;
			}), n;
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
}, Be = { class: "vss-list" }, Ve = { class: "vss-inner-list" }, He = { class: "vss-footer" }, Ue = { class: "vss-footer-bg" }, We = {
	key: 1,
	class: "vss-footer-separator"
}, Ge = { class: "vss-list" }, Ke = { class: "vss-inner-list" }, qe = { class: "vss-footer" }, Je = { class: "vss-footer-bg" }, Ye = {
	key: 1,
	class: "vss-footer-separator"
};
function Xe(e, t, n, s, l, u) {
	let d = S("v-search"), f = S("v-list"), p = S("v-select-all"), m = S("v-deselect-all"), h = S("v-total"), g = S("v-separator");
	return y(), a("div", null, [
		o("div", Be, [o("div", Ve, [
			e.search ? (y(), r(d, {
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
			O(o("div", He, [o("div", Ue, [o("div", null, [
				e.toggleAll ? (y(), r(p, {
					key: 0,
					items: l.listLeft,
					onUpdateSelectAll: u.updateLeftSelectAll
				}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0),
				e.toggleAll ? (y(), a("div", We, "/")) : i("", !0),
				e.toggleAll ? (y(), r(m, {
					key: 2,
					items: l.listLeft,
					onUpdateDeselectAll: u.updateLeftDeselectAll
				}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)
			]), e.total ? (y(), r(h, {
				key: 0,
				value: Object.keys(l.dataSelected).length
			}, null, 8, ["value"])) : i("", !0)])], 512), [[E, e.toggleAll || e.total]])
		])]),
		c(g),
		o("div", Ge, [o("div", Ke, [
			e.search ? (y(), r(d, {
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
			O(o("div", qe, [o("div", Je, [o("div", null, [
				e.toggleAll ? (y(), r(p, {
					key: 0,
					items: l.listRight,
					onUpdateSelectAll: u.updateRightSelectAll
				}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0),
				e.toggleAll ? (y(), a("div", Ye, "/")) : i("", !0),
				e.toggleAll ? (y(), r(m, {
					key: 2,
					items: l.listRight,
					onUpdateDeselectAll: u.updateRightDeselectAll
				}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)
			]), e.total ? (y(), r(h, {
				key: 0,
				value: u.totalChildrenSelected
			}, null, 8, ["value"])) : i("", !0)])], 512), [[E, e.toggleAll || e.total]])
		])])
	]);
}
var Ze = /*#__PURE__*/ j(ze, [["render", Xe]]), Qe = {
	name: "mirror-select-sides",
	display: "Mirror select sides",
	mixins: [Re],
	components: {
		"v-select-all": se,
		"v-deselect-all": ue,
		"v-search": me,
		"v-separator": Ne,
		"v-list": Ae,
		"v-total": Le
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
			let r = k(this.dataSelected);
			n ? r.push(e.value) : r = ie(r, e.value), this.dataSelected = r;
		},
		prepareList() {
			this.dataListOriginal = k(this.list);
			let e = this, t = [], n = e.list.filter((n) => {
				let r = n.value;
				return e.modelValue.indexOf(r) >= 0 ? (n.selectedDefault = !0, t.push(r)) : n.selectedDefault = !1, n;
			});
			e.dataSelected = t, e.dataList = re(e, n);
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
			let e = A(this.searchL), t = this.dataSelected, n = k(this.listLeft);
			return n = n.filter((n) => {
				let r = A(n.label);
				return t.indexOf(n.value) >= 0 ? (n.selected = !0, n.visible = !1) : (n.selected = !1, n.visible = !0), n.visible = !!(r.includes(e) && n.visible === !0), n;
			}), n;
		},
		filteredListR() {
			let e = this, t = A(e.searchR), n = this.dataSelected, r = k(e.listLeft);
			return r = r.filter((e) => {
				let r = A(e.label);
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
}, $e = { class: "vss-list" }, et = { class: "vss-inner-list" }, tt = { class: "vss-footer" }, nt = { class: "vss-footer-bg" }, rt = { class: "vss-list" }, it = { class: "vss-inner-list" }, at = { class: "vss-footer" }, ot = { class: "vss-footer-bg" };
function st(e, t, n, s, l, u) {
	let d = S("v-search"), f = S("v-list"), p = S("v-select-all"), m = S("v-total"), h = S("v-separator"), g = S("v-deselect-all");
	return y(), a("div", null, [
		o("div", $e, [o("div", et, [
			e.search ? (y(), r(d, {
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
			O(o("div", tt, [o("div", nt, [o("div", null, [e.toggleAll ? (y(), r(p, {
				key: 0,
				items: l.listLeft,
				onUpdateSelectAll: u.updateLeftSelectAll
			}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0)]), e.total ? (y(), r(m, {
				key: 0,
				value: l.dataSelected.length
			}, null, 8, ["value"])) : i("", !0)])], 512), [[E, e.toggleAll || e.total]])
		])]),
		c(h),
		o("div", rt, [o("div", it, [
			e.search ? (y(), r(d, {
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
			O(o("div", at, [o("div", ot, [o("div", null, [e.toggleAll ? (y(), r(g, {
				key: 0,
				items: l.listRight,
				onUpdateDeselectAll: u.updateRightDeselectAll
			}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)])])], 512), [[E, e.toggleAll || e.total]])
		])])
	]);
}
// src/vue-select-sides.vue
var ct = {
	name: "vue-select-sides",
	display: "Core select sides",
	components: {
		"mirror-select-sides": /* @__PURE__ */ j(Qe, [["render", st]]),
		"grouped-select-sides": Ze
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
			this.listClone = k(e);
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
		this.setDefaultParams(), this.listClone = k(this.list);
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
function lt(e, t, n, i, a, o) {
	return y(), r(C(o.getComponent()), {
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
var ut = /*#__PURE__*/ j(ct, [["render", lt]]), dt = {
	selectAll: "Vybrat vše ",
	deselectAll: "Odebrat vše ",
	searchPlaceholder: "Hledej...",
	searchNoResult: "Žádný výsledek...",
	searchParentSelected: "Nic není vybráno...",
	totalSelected: "Spolu vybrané"
}, ft = {
	selectAll: "Select all",
	deselectAll: "Deselect all",
	searchPlaceholder: "Search...",
	searchNoResult: "No result...",
	searchParentSelected: "No items selected...",
	totalSelected: "Total items selected"
}, pt = {
	selectAll: "Seleccionar todos",
	deselectAll: "Deseleccionar todos",
	searchPlaceholder: "Buscar...",
	searchNoResult: "Sin resultados...",
	searchParentSelected: "Ningún elemento seleccionado...",
	totalSelected: "Elementos seleccionados"
}, mt = {
	selectAll: "Ajouter tout",
	deselectAll: "Supprimer tout",
	searchPlaceholder: "Recherche...",
	searchNoResult: "Pas de résultat...",
	searchParentSelected: "Sélection vide...",
	totalSelected: "Éléments sélectionnés"
}, ht = {
	selectAll: "Wybierz wszystko",
	deselectAll: "Wyczyść zaznaczenie",
	searchPlaceholder: "Szukaj...",
	searchNoResult: "Brak wyników...",
	searchParentSelected: "Nie wybrano żadnych elementów...",
	totalSelected: "Liczba wybranych elementów"
}, gt = {
	selectAll: "Selecionar todos",
	deselectAll: "Remover todos",
	searchPlaceholder: "Pesquisar...",
	searchNoResult: "Sem nenhum resultado...",
	searchParentSelected: "Nenhum item selecionado...",
	totalSelected: "Total de itens selecionados"
}, _t = {
	selectAll: "Vybrať všetko",
	deselectAll: "Odobrať všetko",
	searchPlaceholder: "Hľadaj...",
	searchNoResult: "Žiadny výsledok...",
	searchParentSelected: "Nič nie je vybrané...",
	totalSelected: "Spolu vybrané"
}, vt = {
	selectAll: "Hepsini Seç",
	deselectAll: "Hepsini Çıkar",
	searchPlaceholder: "Ara...",
	searchNoResult: "Sonuç Bulunamadı...",
	searchParentSelected: "Hiçbiri Seçilmedi...",
	totalSelected: "Hepsi Seçildi"
};
// node_modules/@intlify/shared/dist/shared.mjs
function N(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var yt = {};
function bt(e) {
	yt[e] || (yt[e] = !0, N(e));
}
var xt = typeof window < "u", P, St;
if (process.env.NODE_ENV !== "production") {
	let e = xt && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (P = (t) => {
		e.mark(t);
	}, St = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var Ct = /\{([0-9a-zA-Z]+)\}/g;
function wt(e, ...t) {
	return t.length === 1 && H(t[0]) && (t = t[0]), t && t.hasOwnProperty || (t = {}), e.replace(Ct, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var Tt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Et = (e, t, n) => Dt({
	l: e,
	k: t,
	s: n
}), Dt = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), F = (e) => typeof e == "number" && isFinite(e), Ot = (e) => Vt(e) === "[object Date]", kt = (e) => Vt(e) === "[object RegExp]", At = (e) => U(e) && Object.keys(e).length === 0, I = Object.assign, jt = Object.create, L = (e = null) => jt(e), Mt, Nt = () => Mt ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : L();
function Pt(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ft(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function It(e) {
	return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${Ft(n)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${Ft(n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && N("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((t) => {
		e = e.replace(t, "$1javascript&#58;");
	}), e;
}
var Lt = Object.prototype.hasOwnProperty;
function Rt(e, t) {
	return Lt.call(e, t);
}
var R = Array.isArray, z = (e) => typeof e == "function", B = (e) => typeof e == "string", V = (e) => typeof e == "boolean", H = (e) => typeof e == "object" && !!e, zt = (e) => H(e) && z(e.then) && z(e.catch), Bt = Object.prototype.toString, Vt = (e) => Bt.call(e), U = (e) => {
	if (!H(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === null || t.constructor === Object;
}, Ht = (e) => e == null ? "" : R(e) || U(e) && e.toString === Bt ? JSON.stringify(e, null, 2) : String(e);
function Ut(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var Wt = 2;
function Gt(e, t = 0, n = e.length) {
	let r = e.split(/\r?\n/), i = 0, a = [];
	for (let e = 0; e < r.length; e++) if (i += r[e].length + 1, i >= t) {
		for (let o = e - Wt; o <= e + Wt || n > i; o++) {
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
function Kt(e) {
	let t = e;
	return () => ++t;
}
function qt() {
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
var Jt = (e) => !H(e) || R(e);
function Yt(e, t) {
	if (Jt(e) || Jt(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (H(e[r]) && !H(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : L()), Jt(t[r]) || Jt(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
// node_modules/@intlify/message-compiler/dist/message-compiler.esm-browser.js
function Xt(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function Zt(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var Qt = /\{([0-9a-zA-Z]+)\}/g;
function $t(e, ...t) {
	return t.length === 1 && nn(t[0]) && (t = t[0]), t && t.hasOwnProperty || (t = {}), e.replace(Qt, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var en = Object.assign, tn = (e) => typeof e == "string", nn = (e) => typeof e == "object" && !!e;
function rn(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var an = {
	USE_MODULO_SYNTAX: 1,
	__EXTEND_POINT__: 2
}, on = { [an.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'." };
function sn(e, t, ...n) {
	let r = $t(on[e] || "", ...n || []), i = {
		message: String(r),
		code: e
	};
	return t && (i.location = t), i;
}
var W = {
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
	UNHANDLED_MINIFIER_NODE_TYPE: 16,
	__EXTEND_POINT__: 17
}, cn = {
	[W.EXPECTED_TOKEN]: "Expected token: '{0}'",
	[W.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
	[W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
	[W.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
	[W.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
	[W.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
	[W.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
	[W.EMPTY_PLACEHOLDER]: "Empty placeholder",
	[W.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
	[W.INVALID_LINKED_FORMAT]: "Invalid linked format",
	[W.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
	[W.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
	[W.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
	[W.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
	[W.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
	[W.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function ln(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = $t((i || cn)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function un(e) {
	throw e;
}
var dn = /<\/?[\w\s="/.':;#-\/]+>/, fn = (e) => dn.test(e), pn = " ", mn = "\r", G = "\n", hn = "\u2028", gn = "\u2029";
function _n(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === mn && t[e + 1] === G, s = (e) => t[e] === G, c = (e) => t[e] === gn, l = (e) => t[e] === hn, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? G : t[e], g = () => h(n), _ = () => h(n + a);
	function v() {
		return a = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n];
	}
	function y() {
		return o(n + a) && a++, a++, t[n + a];
	}
	function b() {
		n = 0, r = 1, i = 1, a = 0;
	}
	function x(e = 0) {
		a = e;
	}
	function S() {
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
		resetPeek: x,
		skipToPeek: S
	};
}
var vn = void 0, yn = "'", bn = "tokenizer";
function xn(e, t = {}) {
	let n = t.location !== !1, r = _n(e), i = () => r.index(), a = () => Xt(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
		currentType: 14,
		offset: s,
		startLoc: o,
		endLoc: o,
		lastType: 14,
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
			let r = ln(e, n ? Zt(a.startLoc, t) : null, {
				domain: bn,
				args: i
			});
			u(r);
		}
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = Zt(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 14);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(W.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === pn || e.currentPeek() === G;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === vn) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === vn) return !1;
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
	function x(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = e.currentPeek() === yn;
		return e.resetPeek(), r;
	}
	function S(e, t) {
		let { currentType: n } = t;
		if (n !== 8) return !1;
		h(e);
		let r = e.currentPeek() === ".";
		return e.resetPeek(), r;
	}
	function C(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function w(e, t) {
		let { currentType: n } = t;
		if (n !== 8 && n !== 12) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function T(e, t) {
		let { currentType: n } = t;
		if (n !== 10) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "%" || t === "|" || t === ":" || t === "." || t === pn || !t ? !1 : t === G ? (e.peek(), r()) : D(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function ee(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function E(e) {
		let t = h(e), n = e.currentPeek() === "%" && e.peek() === "{";
		return e.resetPeek(), {
			isModulo: n,
			hasSpace: t.length > 0
		};
	}
	function D(e, t = !0) {
		let n = (t = !1, r = "", i = !1) => {
			let a = e.currentPeek();
			return a === "{" ? r !== "%" && t : a === "@" || !a ? r === "%" || t : a === "%" ? (e.peek(), n(t, "%", !0)) : a === "|" ? r === "%" || i ? !0 : r !== pn && r !== G : a === pn ? (e.peek(), n(!0, pn, i)) : a !== G || (e.peek(), n(!0, G, i));
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function O(e, t) {
		let n = e.currentChar();
		if (n !== vn) return t(n) ? (e.next(), n) : null;
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function ne(e) {
		return O(e, te);
	}
	function k(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function A(e) {
		return O(e, k);
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function ie(e) {
		return O(e, re);
	}
	function j(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function ae(e) {
		return O(e, j);
	}
	function oe(e) {
		let t = "", n = "";
		for (; t = ie(e);) n += t;
		return n;
	}
	function se(e) {
		g(e);
		let t = e.currentChar();
		return t !== "%" && d(W.EXPECTED_TOKEN, a(), 0, t), e.next(), "%";
	}
	function ce(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			if (n === "%") {
				if (D(e)) t += n, e.next();
				else break;
			} else if (n === pn || n === G) {
				if (D(e)) t += n, e.next();
				else if (ee(e)) break;
				else t += n, e.next();
			} else t += n, e.next();
		}
		return t;
	}
	function le(e) {
		g(e);
		let t = "", n = "";
		for (; t = A(e);) n += t;
		return e.currentChar() === vn && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function ue(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${oe(e)}`) : t += oe(e), e.currentChar() === vn && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function de(e) {
		return e !== yn && e !== G;
	}
	function fe(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = O(e, de);) n += t === "\\" ? pe(e) : t;
		let r = e.currentChar();
		return r === G || r === vn ? (d(W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === G && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function pe(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return me(e, t, 4);
			case "U": return me(e, t, 6);
			default: return d(W.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function me(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ae(e);
			if (!n) {
				d(W.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function he(e) {
		return e !== "{" && e !== "}" && e !== pn && e !== G;
	}
	function ge(e) {
		g(e);
		let t = "", n = "";
		for (; t = O(e, he);) n += t;
		return n;
	}
	function _e(e) {
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		return n;
	}
	function ve(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "%" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === pn ? n : (n += r, e.next(), t(n));
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
			case "{": return t.braceNest >= 1 && d(W.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(W.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), n = xe(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (ee(e)) return t.braceNest > 0 && d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, ye(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 5 || t.currentType === 6 || t.currentType === 7)) return d(W.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, Se(e, t);
				if (r = y(e, t)) return n = f(t, 5, le(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 6, ue(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 7, fe(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 13, ge(e)), d(W.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function xe(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch (n !== 8 && n !== 9 && n !== 12 && n !== 10 || i !== G && i !== pn || d(W.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 8, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 9, ".");
			case ":": return g(e), e.next(), f(t, 10, ":");
			default: return ee(e) ? (r = f(t, 1, ye(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), xe(e, t)) : C(e, t) ? (g(e), f(t, 12, _e(e))) : T(e, t) ? (g(e), i === "{" ? be(e, t) || r : f(t, 11, ve(e))) : (n === 8 && d(W.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, Se(e, t));
		}
	}
	function Se(e, t) {
		let n = { type: 14 };
		if (t.braceNest > 0) return be(e, t) || p(t);
		if (t.inLinked) return xe(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return be(e, t) || p(t);
			case "}": return d(W.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return xe(e, t) || p(t);
			default: {
				if (ee(e)) return n = f(t, 1, ye(e)), t.braceNest = 0, t.inLinked = !1, n;
				let { isModulo: r, hasSpace: i } = E(e);
				if (r) return i ? f(t, 0, ce(e)) : f(t, 4, se(e));
				if (D(e)) return f(t, 0, ce(e));
				break;
			}
		}
		return n;
	}
	function Ce() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === vn ? f(c, 14) : Se(r, c);
	}
	return {
		nextToken: Ce,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Sn = "parser", Cn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function wn(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Tn(e = {}) {
	let t = e.location !== !1, { onError: n, onWarn: r } = e;
	function i(e, r, i, a, ...o) {
		let s = e.currentPosition();
		if (s.offset += a, s.column += a, n) {
			let e = ln(r, t ? Zt(i, s) : null, {
				domain: Sn,
				args: o
			});
			n(e);
		}
	}
	function a(e, n, i, a, ...o) {
		let s = e.currentPosition();
		if (s.offset += a, s.column += a, r) {
			let e = t ? Zt(i, s) : null;
			r(sn(n, e, o));
		}
	}
	function o(e, n, r) {
		let i = { type: e };
		return t && (i.start = n, i.end = n, i.loc = {
			start: r,
			end: r
		}), i;
	}
	function s(e, n, r, i) {
		i && (e.type = i), t && (e.end = n, e.loc && (e.loc.end = r));
	}
	function c(e, t) {
		let n = e.context(), r = o(3, n.offset, n.startLoc);
		return r.value = t, s(r, e.currentOffset(), e.currentPosition()), r;
	}
	function l(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), i = o(5, n, r);
		return i.index = parseInt(t, 10), e.nextToken(), s(i, e.currentOffset(), e.currentPosition()), i;
	}
	function u(e, t, n) {
		let { lastOffset: r, lastStartLoc: i } = e.context(), a = o(4, r, i);
		return a.key = t, n === !0 && (a.modulo = !0), e.nextToken(), s(a, e.currentOffset(), e.currentPosition()), a;
	}
	function d(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), i = o(9, n, r);
		return i.value = t.replace(Cn, wn), e.nextToken(), s(i, e.currentOffset(), e.currentPosition()), i;
	}
	function f(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: r, lastStartLoc: a } = n, c = o(8, r, a);
		return t.type === 12 ? (t.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, En(t)), c.value = t.value || "", s(c, e.currentOffset(), e.currentPosition()), { node: c }) : (i(e, W.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", s(c, r, a), {
			nextConsumeToken: t,
			node: c
		});
	}
	function p(e, t) {
		let n = e.context(), r = o(7, n.offset, n.startLoc);
		return r.value = t, s(r, e.currentOffset(), e.currentPosition()), r;
	}
	function m(e) {
		let t = e.context(), n = o(6, t.offset, t.startLoc), r = e.nextToken();
		if (r.type === 9) {
			let t = f(e);
			n.modifier = t.node, r = t.nextConsumeToken || e.nextToken();
		}
		switch (r.type !== 10 && i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(r)), r = e.nextToken(), r.type === 2 && (r = e.nextToken()), r.type) {
			case 11:
				r.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(r)), n.key = p(e, r.value || "");
				break;
			case 5:
				r.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(r)), n.key = u(e, r.value || "");
				break;
			case 6:
				r.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(r)), n.key = l(e, r.value || "");
				break;
			case 7:
				r.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(r)), n.key = d(e, r.value || "");
				break;
			default: {
				i(e, W.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
				let a = e.context(), c = o(7, a.offset, a.startLoc);
				return c.value = "", s(c, a.offset, a.startLoc), n.key = c, s(n, a.offset, a.startLoc), {
					nextConsumeToken: r,
					node: n
				};
			}
		}
		return s(n, e.currentOffset(), e.currentPosition()), { node: n };
	}
	function h(e) {
		let t = e.context(), n = o(2, t.currentType === 1 ? e.currentOffset() : t.offset, t.currentType === 1 ? t.endLoc : t.startLoc);
		n.items = [];
		let r = null, f = null;
		do {
			let o = r || e.nextToken();
			switch (r = null, o.type) {
				case 0:
					o.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(o)), n.items.push(c(e, o.value || ""));
					break;
				case 6:
					o.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(o)), n.items.push(l(e, o.value || ""));
					break;
				case 4:
					f = !0;
					break;
				case 5:
					o.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(o)), n.items.push(u(e, o.value || "", !!f)), f &&= (a(e, an.USE_MODULO_SYNTAX, t.lastStartLoc, 0, En(o)), null);
					break;
				case 7:
					o.value ?? i(e, W.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, En(o)), n.items.push(d(e, o.value || ""));
					break;
				case 8: {
					let t = m(e);
					n.items.push(t.node), r = t.nextConsumeToken || null;
					break;
				}
			}
		} while (t.currentType !== 14 && t.currentType !== 1);
		return s(n, t.currentType === 1 ? t.lastOffset : e.currentOffset(), t.currentType === 1 ? t.lastEndLoc : e.currentPosition()), n;
	}
	function g(e, t, n, r) {
		let a = e.context(), c = r.items.length === 0, l = o(1, t, n);
		l.cases = [], l.cases.push(r);
		do {
			let t = h(e);
			c ||= t.items.length === 0, l.cases.push(t);
		} while (a.currentType !== 14);
		return c && i(e, W.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), s(l, e.currentOffset(), e.currentPosition()), l;
	}
	function _(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = h(e);
		return t.currentType === 14 ? i : g(e, n, r, i);
	}
	function v(n) {
		let r = xn(n, en({}, e)), a = r.context(), c = o(0, a.offset, a.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = _(r), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), a.currentType !== 14 && i(r, W.UNEXPECTED_LEXICAL_ANALYSIS, a.lastStartLoc, 0, n[a.offset] || ""), s(c, r.currentOffset(), r.currentPosition()), c;
	}
	return { parse: v };
}
function En(e) {
	if (e.type === 14) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Dn(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function On(e, t) {
	for (let n = 0; n < e.length; n++) kn(e[n], t);
}
function kn(e, t) {
	switch (e.type) {
		case 1:
			On(e.cases, t), t.helper("plural");
			break;
		case 2:
			On(e.items, t);
			break;
		case 6:
			kn(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4: t.helper("interpolate"), t.helper("named");
	}
}
function An(e, t = {}) {
	let n = Dn(e);
	n.helper("normalize"), e.body && kn(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function jn(e) {
	let t = e.body;
	return t.type === 2 ? Mn(t) : t.cases.forEach((e) => Mn(e)), e;
}
function Mn(e) {
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
			e.static = rn(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var Nn = "minifier";
function Pn(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			Pn(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) Pn(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) Pn(n[e]);
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
			Pn(t.key), t.k = t.key, delete t.key, t.modifier && (Pn(t.modifier), t.m = t.modifier, delete t.modifier);
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
		default: throw ln(W.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: Nn,
			args: [e.type]
		});
	}
	delete e.type;
}
var Fn = "parser";
function In(e, t) {
	let { sourceMap: n, filename: r, breakLineCode: i, needIndent: a } = t, o = t.location !== !1, s = {
		filename: r,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode: i,
		needIndent: a,
		indentLevel: 0
	};
	o && e.loc && (s.source = e.loc.source);
	let c = () => s;
	function l(e, t) {
		s.code += e;
	}
	function u(e, t = !0) {
		let n = t ? i : "";
		l(a ? n + "  ".repeat(e) : n);
	}
	function d(e = !0) {
		let t = ++s.indentLevel;
		e && u(t);
	}
	function f(e = !0) {
		let t = --s.indentLevel;
		e && u(t);
	}
	function p() {
		u(s.indentLevel);
	}
	return {
		context: c,
		push: l,
		indent: d,
		deindent: f,
		newline: p,
		helper: (e) => `_${e}`,
		needIndent: () => s.needIndent
	};
}
function Ln(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), Vn(e, t.key), t.modifier ? (e.push(", "), Vn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Rn(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (Vn(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function zn(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (Vn(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function Bn(e, t) {
	t.body ? Vn(e, t.body) : e.push("null");
}
function Vn(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			Bn(e, t);
			break;
		case 1:
			zn(e, t);
			break;
		case 2:
			Rn(e, t);
			break;
		case 6:
			Ln(e, t);
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
		default: throw ln(W.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: Fn,
			args: [t.type]
		});
	}
}
var Hn = (e, t = {}) => {
	let n = tn(t.mode) ? t.mode : "normal", r = tn(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, a = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, o = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = In(e, {
		mode: n,
		filename: r,
		sourceMap: i,
		breakLineCode: a,
		needIndent: o
	});
	c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), s.length > 0 && (c.push(`const { ${rn(s.map((e) => `${e}: _${e}`), ", ")} } = ctx`), c.newline()), c.push("return "), Vn(c, e), c.deindent(o), c.push("}"), delete e.helpers;
	let { code: l, map: u } = c.context();
	return {
		ast: e,
		code: l,
		map: u ? u.toJSON() : void 0
	};
};
function Un(e, t = {}) {
	let n = en({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null || n.optimize, o = Tn(n).parse(e);
	return r ? (a && jn(o), i && Pn(o), {
		ast: o,
		code: ""
	}) : (An(o, n), Hn(o, n));
}
// node_modules/@intlify/core-base/dist/core-base.mjs
function Wn() {
	typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Nt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Nt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Nt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function K(e) {
	return H(e) && er(e) === 0 && (Rt(e, "b") || Rt(e, "body"));
}
var Gn = ["b", "body"];
function Kn(e) {
	return sr(e, Gn);
}
var qn = ["c", "cases"];
function Jn(e) {
	return sr(e, qn, []);
}
var Yn = ["s", "static"];
function Xn(e) {
	return sr(e, Yn);
}
var Zn = ["i", "items"];
function Qn(e) {
	return sr(e, Zn, []);
}
var $n = ["t", "type"];
function er(e) {
	return sr(e, $n);
}
var tr = ["v", "value"];
function nr(e, t) {
	let n = sr(e, tr);
	if (n != null) return n;
	throw lr(t);
}
var rr = ["m", "modifier"];
function ir(e) {
	return sr(e, rr);
}
var ar = ["k", "key"];
function or(e) {
	let t = sr(e, ar);
	if (t) return t;
	throw lr(6);
}
function sr(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Rt(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var cr = [
	...Gn,
	...qn,
	...Yn,
	...Zn,
	...ar,
	...rr,
	...tr,
	...$n
];
function lr(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
var ur = [];
ur[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, ur[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, ur[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, ur[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, ur[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, ur[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, ur[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var dr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function fr(e) {
	return dr.test(e);
}
function pr(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function mr(e) {
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
function hr(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : fr(t) ? pr(t) : "*" + t;
}
function gr(e) {
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
			if (i = 0, o === void 0 || (o = hr(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = mr(a), d = ur[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var _r = /* @__PURE__ */ new Map();
function vr(e, t) {
	return H(e) ? e[t] : null;
}
function yr(e, t) {
	if (!H(e)) return null;
	let n = _r.get(t);
	if (n || (n = gr(t), n && _r.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (cr.includes(e) && K(i)) return null;
		let t = i[e];
		if (t === void 0 || z(i)) return null;
		i = t, a++;
	}
	return i;
}
var br = (e) => e, xr = (e) => "", Sr = "text", Cr = (e) => e.length === 0 ? "" : Ut(e), wr = Ht;
function Tr(e, t) {
	return e = Math.abs(e), t === 2 ? e ? +(e > 1) : 1 : e ? Math.min(e, 2) : 0;
}
function Er(e) {
	let t = F(e.pluralIndex) ? e.pluralIndex : -1;
	return e.named && (F(e.named.count) || F(e.named.n)) ? F(e.named.count) ? e.named.count : F(e.named.n) ? e.named.n : t : t;
}
function Dr(e, t) {
	t.count ||= e, t.n ||= e;
}
function Or(e = {}) {
	let t = e.locale, n = Er(e), r = H(e.pluralRules) && B(t) && z(e.pluralRules[t]) ? e.pluralRules[t] : Tr, i = H(e.pluralRules) && B(t) && z(e.pluralRules[t]) ? Tr : void 0, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || L();
	F(e.pluralIndex) && Dr(n, c);
	let l = (e) => c[e];
	function u(t) {
		return (z(e.messages) ? e.messages(t) : H(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : xr);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : br, f = U(e.processor) && z(e.processor.normalize) ? e.processor.normalize : Cr, p = U(e.processor) && z(e.processor.interpolate) ? e.processor.interpolate : wr, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? H(n) ? (a = n.modifier || a, i = n.type || i) : B(n) && (a = n || a) : t.length === 2 && (B(n) && (a = n || a), B(r) && (i = r || i));
			let o = u(e)(m), s = i === "vnode" && R(o) && a ? o[0] : o;
			return a ? d(a)(s, i) : s;
		},
		message: u,
		type: U(e.processor) && B(e.processor.type) ? e.processor.type : Sr,
		interpolate: p,
		normalize: f,
		values: I(L(), o, c)
	};
	return m;
}
var kr = null;
function Ar(e) {
	kr = e;
}
function jr(e, t, n) {
	kr && kr.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Mr = /* #__PURE__*/ Nr("function:translate");
function Nr(e) {
	return (t) => kr && kr.emit(e, t);
}
var Pr = an.__EXTEND_POINT__, Fr = Kt(Pr), q = {
	NOT_FOUND_KEY: Pr,
	FALLBACK_TO_TRANSLATE: Fr(),
	CANNOT_FORMAT_NUMBER: Fr(),
	FALLBACK_TO_NUMBER_FORMAT: Fr(),
	CANNOT_FORMAT_DATE: Fr(),
	FALLBACK_TO_DATE_FORMAT: Fr(),
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Fr(),
	__EXTEND_POINT__: Fr()
}, Ir = {
	[q.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
	[q.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
	[q.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
	[q.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
	[q.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
	[q.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
	[q.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Lr(e, ...t) {
	return wt(Ir[e], ...t);
}
var Rr = W.__EXTEND_POINT__, zr = Kt(Rr), J = {
	INVALID_ARGUMENT: Rr,
	INVALID_DATE_ARGUMENT: zr(),
	INVALID_ISO_DATE_ARGUMENT: zr(),
	NOT_SUPPORT_NON_STRING_MESSAGE: zr(),
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: zr(),
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: zr(),
	NOT_SUPPORT_LOCALE_TYPE: zr(),
	__EXTEND_POINT__: zr()
};
function Br(e) {
	return ln(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: Vr });
}
var Vr = {
	[J.INVALID_ARGUMENT]: "Invalid arguments",
	[J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Hr(e, t) {
	return t.locale == null ? Wr(e.locale) : Wr(t.locale);
}
var Ur;
function Wr(e) {
	if (B(e)) return e;
	if (z(e)) {
		if (e.resolvedOnce && Ur != null) return Ur;
		if (e.constructor.name === "Function") {
			let t = e();
			if (zt(t)) throw Br(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Ur = t;
		}
		throw Br(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	}
	throw Br(J.NOT_SUPPORT_LOCALE_TYPE);
}
function Gr(e, t, n) {
	return [.../* @__PURE__ */ new Set([n, ...R(t) ? t : H(t) ? Object.keys(t) : B(t) ? [t] : [n]])];
}
function Kr(e, t, n) {
	let r = B(n) ? n : Zr, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; R(e);) e = qr(a, e, t);
		let o = R(t) || !U(t) ? t : t.default ? t.default : null;
		e = B(o) ? [o] : o, R(e) && qr(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function qr(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && V(r); i++) {
		let a = t[i];
		B(a) && (r = Jr(e, t[i], n));
	}
	return r;
}
function Jr(e, t, n) {
	let r, i = t.split("-");
	do
		r = Yr(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function Yr(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (R(n) || U(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Xr = "9.14.5", Zr = "en-US", Qr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function $r() {
	return {
		upper: (e, t) => t === "text" && B(e) ? e.toUpperCase() : t === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && B(e) ? e.toLowerCase() : t === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && B(e) ? Qr(e) : t === "vnode" && H(e) && "__v_isVNode" in e ? Qr(e.children) : e
	};
}
var ei;
function ti(e) {
	ei = e;
}
var ni;
function ri(e) {
	ni = e;
}
var ii;
function ai(e) {
	ii = e;
}
var oi = null, si = /* @__NO_SIDE_EFFECTS__ */ () => oi, ci = null, li = (e) => {
	ci = e;
}, ui = () => ci, di = 0;
function fi(e = {}) {
	let t = z(e.onWarn) ? e.onWarn : N, n = B(e.version) ? e.version : Xr, r = B(e.locale) || z(e.locale) ? e.locale : Zr, i = z(r) ? Zr : r, a = R(e.fallbackLocale) || U(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = U(e.messages) ? e.messages : pi(i), s = U(e.datetimeFormats) ? e.datetimeFormats : pi(i), c = U(e.numberFormats) ? e.numberFormats : pi(i), l = I(L(), e.modifiers, $r()), u = e.pluralRules || L(), d = z(e.missing) ? e.missing : null, f = V(e.missingWarn) || kt(e.missingWarn) ? e.missingWarn : !0, p = V(e.fallbackWarn) || kt(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = z(e.postTranslation) ? e.postTranslation : null, _ = U(e.processor) ? e.processor : null, v = !V(e.warnHtmlMessage) || e.warnHtmlMessage, y = !!e.escapeParameter, b = z(e.messageCompiler) ? e.messageCompiler : ei;
	process.env.NODE_ENV !== "production" && z(e.messageCompiler) && bt(Lr(q.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let x = z(e.messageResolver) ? e.messageResolver : ni || vr, S = z(e.localeFallbacker) ? e.localeFallbacker : ii || Gr, C = H(e.fallbackContext) ? e.fallbackContext : void 0, w = e, T = H(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = H(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), E = H(w.__meta) ? w.__meta : {};
	di++;
	let D = {
		version: n,
		cid: di,
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
		messageResolver: x,
		localeFallbacker: S,
		fallbackContext: C,
		onWarn: t,
		__meta: E
	};
	return D.datetimeFormats = s, D.numberFormats = c, D.__datetimeFormatters = T, D.__numberFormatters = ee, process.env.NODE_ENV !== "production" && (D.__v_emitter = w.__v_emitter == null ? void 0 : w.__v_emitter), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && jr(D, n, E), D;
}
var pi = (e) => ({ [e]: L() });
function mi(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function hi(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function gi(e, t, n, r, i) {
	let { missing: a, onWarn: o } = e;
	if (process.env.NODE_ENV !== "production") {
		let r = e.__v_emitter;
		r && r.emit("missing", {
			locale: n,
			key: t,
			type: i,
			groupId: `${i}:${t}`
		});
	}
	if (a !== null) {
		let r = a(e, n, t, i);
		return B(r) ? r : t;
	}
	return process.env.NODE_ENV !== "production" && hi(r, t) && o(Lr(q.NOT_FOUND_KEY, {
		key: t,
		locale: n
	})), t;
}
function _i(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function vi(e, t) {
	return e !== t && e.split("-")[0] === t.split("-")[0];
}
function yi(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (vi(e, t[r])) return !0;
	return !1;
}
function bi(e) {
	return (t) => xi(t, e);
}
function xi(e, t) {
	let n = Kn(t);
	if (n == null) throw lr(0);
	if (er(n) === 1) {
		let t = Jn(n);
		return e.plural(t.reduce((t, n) => [...t, Si(e, n)], []));
	}
	return Si(e, n);
}
function Si(e, t) {
	let n = Xn(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = Qn(t).reduce((t, n) => [...t, Ci(e, n)], []);
		return e.normalize(n);
	}
}
function Ci(e, t) {
	let n = er(t);
	switch (n) {
		case 3: return nr(t, n);
		case 9: return nr(t, n);
		case 4: {
			let r = t;
			if (Rt(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (Rt(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw lr(n);
		}
		case 5: {
			let r = t;
			if (Rt(r, "i") && F(r.i)) return e.interpolate(e.list(r.i));
			if (Rt(r, "index") && F(r.index)) return e.interpolate(e.list(r.index));
			throw lr(n);
		}
		case 6: {
			let n = t, r = ir(n), i = or(n);
			return e.linked(Ci(e, i), r ? Ci(e, r) : void 0, e.type);
		}
		case 7: return nr(t, n);
		case 8: return nr(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var wi = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ti(e, t) {
	t && fn(e) && N(wt(wi, { source: e }));
}
var Ei = (e) => e, Di = L();
function Oi(e) {
	e.code === an.USE_MODULO_SYNTAX && N(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function ki(e, t = {}) {
	let n = !1, r = t.onError || un;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...Un(e, t),
		detectError: n
	};
}
var Ai = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
	if (!B(e)) throw Br(J.NOT_SUPPORT_NON_STRING_MESSAGE);
	process.env.NODE_ENV !== "production" && (t.onWarn = Oi);
	{
		let n = !V(t.warnHtmlMessage) || t.warnHtmlMessage;
		process.env.NODE_ENV !== "production" && Ti(e, n);
		let r = (t.onCacheKey || Ei)(e), i = Di[r];
		if (i) return i;
		let { code: a, detectError: o } = ki(e, t), s = Function(`return ${a}`)();
		return o ? s : Di[r] = s;
	}
};
function ji(e, t) {
	if (process.env.NODE_ENV !== "production" && (t.onWarn = Oi), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && B(e)) {
		let n = !V(t.warnHtmlMessage) || t.warnHtmlMessage;
		process.env.NODE_ENV !== "production" && Ti(e, n);
		let r = (t.onCacheKey || Ei)(e), i = Di[r];
		if (i) return i;
		let { ast: a, detectError: o } = ki(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = bi(a);
		return o ? s : Di[r] = s;
	}
	{
		if (process.env.NODE_ENV !== "production" && !K(e)) return N(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
		let n = e.cacheKey;
		return n ? Di[n] || (Di[n] = bi(e)) : bi(e);
	}
}
var Mi = () => "", Ni = (e) => z(e);
function Pi(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = zi(...t), u = V(l.missingWarn) ? l.missingWarn : e.missingWarn, d = V(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = V(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = B(l.default) || V(l.default) ? V(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : "", h = n || m !== "", g = Hr(e, l);
	f && Fi(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || L()
	] : Ii(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(B(b) || K(b) || Ni(b)) && h && (b = m, x = b), !p && (!(B(b) || K(b) || Ni(b)) || !B(v))) return i ? -1 : c;
	if (process.env.NODE_ENV !== "production" && B(b) && e.messageCompiler == null) return N(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
	let S = !1, C = Ni(b) ? b : Li(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = Ri(e, C, Or(Hi(e, v, y, l))), T = r ? r(w, c) : w;
	if (f && B(T) && (T = It(T)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
		let t = {
			timestamp: Date.now(),
			key: B(c) ? c : Ni(b) ? b.key : "",
			locale: v || (Ni(b) ? b.locale : ""),
			format: B(b) ? b : Ni(b) ? b.source : "",
			message: T
		};
		t.meta = I({}, e.__meta, /* @__PURE__ */ si() || {}), Mr(t);
	}
	return T;
}
function Fi(e) {
	R(e.list) ? e.list = e.list.map((e) => B(e) ? Pt(e) : e) : H(e.named) && Object.keys(e.named).forEach((t) => {
		B(e.named[t]) && (e.named[t] = Pt(e.named[t]));
	});
}
function Ii(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = L(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		if (f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !vi(n, f) && mi(i, t) && s(Lr(q.FALLBACK_TO_TRANSLATE, {
			key: t,
			target: f
		})), process.env.NODE_ENV !== "production" && n !== f) {
			let n = e.__v_emitter;
			n && n.emit("fallback", {
				type: g,
				key: t,
				from: m,
				to: h,
				groupId: `${g}:${t}`
			});
		}
		d = o[f] || L();
		let l = null, _, v;
		if (process.env.NODE_ENV !== "production" && xt && (l = window.performance.now(), _ = "intlify-message-resolve-start", v = "intlify-message-resolve-end", P && P(_)), (p = c(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && xt) {
			let n = window.performance.now(), r = e.__v_emitter;
			r && l && p && r.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: n - l,
				groupId: `${g}:${t}`
			}), _ && v && P && St && (P(v), St("intlify message resolve", _, v));
		}
		if (B(p) || K(p) || Ni(p)) break;
		if (!yi(f, u)) {
			let n = gi(e, t, f, a, g);
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
function Li(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (Ni(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = null, l, u;
	process.env.NODE_ENV !== "production" && xt && (c = window.performance.now(), l = "intlify-message-compilation-start", u = "intlify-message-compilation-end", P && P(l));
	let d = o(r, Bi(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && xt) {
		let n = window.performance.now(), i = e.__v_emitter;
		i && c && i.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: n - c,
			groupId: `translate:${t}`
		}), l && u && P && St && (P(u), St("intlify message compilation", l, u));
	}
	return d.locale = n, d.key = t, d.source = r, d;
}
function Ri(e, t, n) {
	let r = null, i, a;
	process.env.NODE_ENV !== "production" && xt && (r = window.performance.now(), i = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", P && P(i));
	let o = t(n);
	if (process.env.NODE_ENV !== "production" && xt) {
		let n = window.performance.now(), s = e.__v_emitter;
		s && r && s.emit("message-evaluation", {
			type: "message-evaluation",
			value: o,
			time: n - r,
			groupId: `translate:${t.key}`
		}), i && a && P && St && (P(a), St("intlify message evaluation", i, a));
	}
	return o;
}
function zi(...e) {
	let [t, n, r] = e, i = L();
	if (!B(t) && !F(t) && !Ni(t) && !K(t)) throw Br(J.INVALID_ARGUMENT);
	let a = F(t) ? String(t) : (Ni(t), t);
	return F(n) ? i.plural = n : B(n) ? i.default = n : U(n) && !At(n) ? i.named = n : R(n) && (i.list = n), F(r) ? i.plural = r : B(r) ? i.default = r : U(r) && I(i, r), [a, i];
}
function Bi(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = Vi(r), a = `Message compilation error: ${t.message}`, o = t.location && i && Gt(i, t.location.start.offset, t.location.end.offset), s = e.__v_emitter;
				s && i && s.emit("compile-error", {
					message: i,
					error: t.message,
					start: t.location && t.location.start.offset,
					end: t.location && t.location.end.offset,
					groupId: `translate:${n}`
				}), console.error(o ? `${a}\n${o}` : a);
			} else throw t;
		},
		onCacheKey: (e) => Et(t, n, e)
	};
}
function Vi(e) {
	if (B(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function Hi(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r) => {
			let i = o(n, r);
			if (i == null && u) {
				let [, , e] = Ii(u, r, t, s, c, l);
				i = o(e, r);
			}
			if (B(i) || K(i)) {
				let n = !1, a = Li(e, r, t, i, r, () => {
					n = !0;
				});
				return n ? Mi : a;
			}
			return Ni(i) ? i : Mi;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), F(r.plural) && (d.pluralIndex = r.plural), d;
}
var Ui = typeof Intl < "u", Wi = {
	dateTimeFormat: Ui && Intl.DateTimeFormat !== void 0,
	numberFormat: Ui && Intl.NumberFormat !== void 0
};
function Gi(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Wi.dateTimeFormat) return a(Lr(q.CANNOT_FORMAT_DATE)), "";
	let [c, l, u, d] = qi(...t), f = V(u.missingWarn) ? u.missingWarn : e.missingWarn, p = V(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Hr(e, u), g = o(e, i, h);
	if (!B(c) || c === "") return new Intl.DateTimeFormat(h, d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "datetime format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && mi(p, c) && a(Lr(q.FALLBACK_TO_DATE_FORMAT, {
			key: c,
			target: v
		})), process.env.NODE_ENV !== "production" && h !== v) {
			let t = e.__v_emitter;
			t && t.emit("fallback", {
				type: S,
				key: c,
				from: b,
				to: x,
				groupId: `${S}:${c}`
			});
		}
		if (_ = n[v] || {}, y = _[c], U(y)) break;
		gi(e, c, v, f, S), b = x;
	}
	if (!U(y) || !B(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	At(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.DateTimeFormat(v, I({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Ki = [
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
function qi(...e) {
	let [t, n, r, i] = e, a = L(), o = L(), s;
	if (B(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Br(J.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Br(J.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (Ot(t)) {
		if (isNaN(t.getTime())) throw Br(J.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (F(t)) s = t;
	else throw Br(J.INVALID_ARGUMENT);
	return B(n) ? a.key = n : U(n) && Object.keys(n).forEach((e) => {
		Ki.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), B(r) ? a.locale = r : U(r) && (o = r), U(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Ji(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function Yi(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (process.env.NODE_ENV !== "production" && !Wi.numberFormat) return a(Lr(q.CANNOT_FORMAT_NUMBER)), "";
	let [c, l, u, d] = Zi(...t), f = V(u.missingWarn) ? u.missingWarn : e.missingWarn, p = V(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = !!u.part, h = Hr(e, u), g = o(e, i, h);
	if (!B(c) || c === "") return new Intl.NumberFormat(h, d).format(l);
	let _ = {}, v, y = null, b = h, x = null, S = "number format";
	for (let t = 0; t < g.length; t++) {
		if (v = x = g[t], process.env.NODE_ENV !== "production" && h !== v && mi(p, c) && a(Lr(q.FALLBACK_TO_NUMBER_FORMAT, {
			key: c,
			target: v
		})), process.env.NODE_ENV !== "production" && h !== v) {
			let t = e.__v_emitter;
			t && t.emit("fallback", {
				type: S,
				key: c,
				from: b,
				to: x,
				groupId: `${S}:${c}`
			});
		}
		if (_ = n[v] || {}, y = _[c], U(y)) break;
		gi(e, c, v, f, S), b = x;
	}
	if (!U(y) || !B(v)) return r ? -1 : c;
	let C = `${v}__${c}`;
	At(d) || (C = `${C}__${JSON.stringify(d)}`);
	let w = s.get(C);
	return w || (w = new Intl.NumberFormat(v, I({}, y, d)), s.set(C, w)), m ? w.formatToParts(l) : w.format(l);
}
var Xi = [
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
function Zi(...e) {
	let [t, n, r, i] = e, a = L(), o = L();
	if (!F(t)) throw Br(J.INVALID_ARGUMENT);
	let s = t;
	return B(n) ? a.key = n : U(n) && Object.keys(n).forEach((e) => {
		Xi.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), B(r) ? a.locale = r : U(r) && (o = r), U(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Qi(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
Wn();
// node_modules/@vue/devtools-api/lib/esm/env.js
function $i() {
	return ea().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ea() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var ta = typeof Proxy == "function", na = "devtools-plugin:setup", ra = "plugin:settings:set", ia, aa;
function oa() {
	return ia === void 0 && (typeof window < "u" && window.performance ? (ia = !0, aa = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (ia = !0, aa = globalThis.perf_hooks.performance) : ia = !1), ia;
}
function sa() {
	return oa() ? aa.now() : Date.now();
}
// node_modules/@vue/devtools-api/lib/esm/proxy.js
var ca = class {
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
				return sa();
			}
		}, t && t.on(ra, (e, t) => {
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
function la(e, t) {
	let n = e, r = ea(), i = $i(), a = ta && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(na, e, t);
	else {
		let e = a ? new ca(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
// node_modules/vue-i18n/dist/vue-i18n.mjs
var ua = "9.14.5";
function da() {
	typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Nt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Nt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Nt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Nt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Nt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
var fa = q.__EXTEND_POINT__, pa = Kt(fa), Y = {
	FALLBACK_TO_ROOT: fa,
	NOT_SUPPORTED_PRESERVE: pa(),
	NOT_SUPPORTED_FORMATTER: pa(),
	NOT_SUPPORTED_PRESERVE_DIRECTIVE: pa(),
	NOT_SUPPORTED_GET_CHOICE_INDEX: pa(),
	COMPONENT_NAME_LEGACY_COMPATIBLE: pa(),
	NOT_FOUND_PARENT_SCOPE: pa(),
	IGNORE_OBJ_FLATTEN: pa(),
	NOTICE_DROP_ALLOW_COMPOSITION: pa(),
	NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: pa()
}, ma = {
	[Y.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[Y.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
	[Y.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
	[Y.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
	[Y.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
	[Y.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
	[Y.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[Y.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[Y.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
	[Y.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function X(e, ...t) {
	return wt(ma[e], ...t);
}
var ha = J.__EXTEND_POINT__, Z = Kt(ha), Q = {
	UNEXPECTED_RETURN_TYPE: ha,
	INVALID_ARGUMENT: Z(),
	MUST_BE_CALL_SETUP_TOP: Z(),
	NOT_INSTALLED: Z(),
	NOT_AVAILABLE_IN_LEGACY_MODE: Z(),
	REQUIRED_VALUE: Z(),
	INVALID_VALUE: Z(),
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Z(),
	NOT_INSTALLED_WITH_PROVIDE: Z(),
	UNEXPECTED_ERROR: Z(),
	NOT_COMPATIBLE_LEGACY_VUE_I18N: Z(),
	BRIDGE_SUPPORT_VUE_2_ONLY: Z(),
	MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Z(),
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Z(),
	__EXTEND_POINT__: Z()
};
function $(e, ...t) {
	return ln(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: ga,
		args: t
	});
}
var ga = {
	[Q.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
	[Q.INVALID_ARGUMENT]: "Invalid argument",
	[Q.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
	[Q.NOT_INSTALLED]: "Need to install with `app.use` function",
	[Q.UNEXPECTED_ERROR]: "Unexpected error",
	[Q.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
	[Q.REQUIRED_VALUE]: "Required in value: {0}",
	[Q.INVALID_VALUE]: "Invalid value",
	[Q.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
	[Q.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
	[Q.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
	[Q.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
	[Q.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
	[Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, _a = /* #__PURE__*/ Tt("__translateVNode"), va = /* #__PURE__*/ Tt("__datetimeParts"), ya = /* #__PURE__*/ Tt("__numberParts"), ba = /* #__PURE__*/ Tt("__enableEmitter"), xa = /* #__PURE__*/ Tt("__disableEmitter"), Sa = Tt("__setPluralRules");
Tt("__intlifyMeta");
var Ca = /* #__PURE__*/ Tt("__injectWithOption"), wa = /* #__PURE__*/ Tt("__dispose");
function Ta(e) {
	if (!H(e) || K(e)) return e;
	for (let t in e) if (Rt(e, t)) {
		if (!t.includes(".")) H(e[t]) && Ta(e[t]);
		else {
			let n = t.split("."), r = n.length - 1, i = e, a = !1;
			for (let e = 0; e < r; e++) {
				if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
				if (n[e] in i || (i[n[e]] = L()), !H(i[n[e]])) {
					process.env.NODE_ENV !== "production" && N(X(Y.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
					break;
				}
				i = i[n[e]];
			}
			if (a || (K(i) ? cr.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !K(i)) {
				let e = i[n[r]];
				H(e) && Ta(e);
			}
		}
	}
	return e;
}
function Ea(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = U(n) ? n : R(r) ? L() : { [e]: L() };
	if (R(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || L(), Yt(n, o[t])) : Yt(n, o);
		} else B(e) && Yt(JSON.parse(e), o);
	}), i == null && a) for (let e in o) Rt(o, e) && Ta(o[e]);
	return o;
}
function Da(e) {
	return e.type;
}
function Oa(e, t, n) {
	let r = H(t.messages) ? t.messages : L();
	"__i18nGlobal" in n && (r = Ea(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), H(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (H(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function ka(e) {
	return c(t, null, e, 0);
}
var Aa = () => [], ja = () => !1, Ma = 0;
function Na(e) {
	return ((t, n, r, i) => e(n, r, d() || void 0, i));
}
function Pa(e = {}, t) {
	let { __root: r, __injectWithOption: i } = e, a = r === void 0, o = e.flatJson, s = xt ? b : w, c = !!e.translateExistCompatible;
	process.env.NODE_ENV !== "production" && c && bt(X(Y.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
	let l = !V(e.inheritLocale) || e.inheritLocale, u = s(r && l ? r.locale.value : B(e.locale) ? e.locale : Zr), d = s(r && l ? r.fallbackLocale.value : B(e.fallbackLocale) || R(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value), f = s(Ea(u.value, e)), p = s(U(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), m = s(U(e.numberFormats) ? e.numberFormats : { [u.value]: {} }), h = r ? r.missingWarn : V(e.missingWarn) || kt(e.missingWarn) ? e.missingWarn : !0, g = r ? r.fallbackWarn : V(e.fallbackWarn) || kt(e.fallbackWarn) ? e.fallbackWarn : !0, _ = r ? r.fallbackRoot : !V(e.fallbackRoot) || e.fallbackRoot, v = !!e.fallbackFormat, y = z(e.missing) ? e.missing : null, x = z(e.missing) ? Na(e.missing) : null, S = z(e.postTranslation) ? e.postTranslation : null, C = r ? r.warnHtmlMessage : !V(e.warnHtmlMessage) || e.warnHtmlMessage, T = !!e.escapeParameter, ee = r ? r.modifiers : U(e.modifiers) ? e.modifiers : {}, E = e.pluralRules || r && r.pluralRules, O;
	O = (() => {
		a && li(null);
		let t = {
			version: ua,
			locale: u.value,
			fallbackLocale: d.value,
			messages: f.value,
			modifiers: ee,
			pluralRules: E,
			missing: x === null ? void 0 : x,
			missingWarn: h,
			fallbackWarn: g,
			fallbackFormat: v,
			unresolving: !0,
			postTranslation: S === null ? void 0 : S,
			warnHtmlMessage: C,
			escapeParameter: T,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = p.value, t.numberFormats = m.value, t.__datetimeFormatters = U(O) ? O.__datetimeFormatters : void 0, t.__numberFormatters = U(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (t.__v_emitter = U(O) ? O.__v_emitter : void 0);
		let n = fi(t);
		return a && li(n), n;
	})(), _i(O, u.value, d.value);
	function te() {
		return [
			u.value,
			d.value,
			f.value,
			p.value,
			m.value
		];
	}
	let ne = n({
		get: () => u.value,
		set: (e) => {
			u.value = e, O.locale = u.value;
		}
	}), k = n({
		get: () => d.value,
		set: (e) => {
			d.value = e, O.fallbackLocale = d.value, _i(O, u.value, e);
		}
	}), A = n(() => f.value), re = /* #__PURE__*/ n(() => p.value), ie = /* #__PURE__*/ n(() => m.value);
	function j() {
		return z(S) ? S : null;
	}
	function ae(e) {
		S = e, O.postTranslation = e;
	}
	function oe() {
		return y;
	}
	function se(e) {
		e !== null && (x = Na(e)), y = e, O.missing = x;
	}
	function ce(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let le = (e, t, n, i, o, s) => {
		te();
		let c;
		try {
			process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (O.fallbackContext = r ? ui() : void 0), c = e(O);
		} finally {
			process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (O.fallbackContext = void 0);
		}
		if (n !== "translate exists" && F(c) && c === -1 || n === "translate exists" && !c) {
			let [e, a] = t();
			if (process.env.NODE_ENV !== "production" && r && B(e) && ce(n, a) && (_ && (mi(g, e) || hi(h, e)) && N(X(Y.FALLBACK_TO_ROOT, {
				key: e,
				type: n
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = O;
				t && _ && t.emit("fallback", {
					type: n,
					key: e,
					to: "global",
					groupId: `${n}:${e}`
				});
			}
			return r && _ ? i(r) : o(e);
		}
		if (s(c)) return c;
		/* istanbul ignore next */
		throw $(Q.UNEXPECTED_RETURN_TYPE);
	};
	function ue(...e) {
		return le((t) => Reflect.apply(Pi, null, [t, ...e]), () => zi(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => B(e));
	}
	function de(...e) {
		let [t, n, r] = e;
		if (r && !H(r)) throw $(Q.INVALID_ARGUMENT);
		return ue(t, n, I({ resolvedMessage: !0 }, r || {}));
	}
	function fe(...e) {
		return le((t) => Reflect.apply(Gi, null, [t, ...e]), () => qi(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => B(e));
	}
	function pe(...e) {
		return le((t) => Reflect.apply(Yi, null, [t, ...e]), () => Zi(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => B(e));
	}
	function me(e) {
		return e.map((e) => B(e) || F(e) || V(e) ? ka(String(e)) : e);
	}
	let he = {
		normalize: me,
		interpolate: (e) => e,
		type: "vnode"
	};
	function ge(...e) {
		return le((t) => {
			let n, r = t;
			try {
				r.processor = he, n = Reflect.apply(Pi, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => zi(...e), "translate", (t) => t[_a](...e), (e) => [ka(e)], (e) => R(e));
	}
	function _e(...e) {
		return le((t) => Reflect.apply(Yi, null, [t, ...e]), () => Zi(...e), "number format", (t) => t[ya](...e), Aa, (e) => B(e) || R(e));
	}
	function ve(...e) {
		return le((t) => Reflect.apply(Gi, null, [t, ...e]), () => qi(...e), "datetime format", (t) => t[va](...e), Aa, (e) => B(e) || R(e));
	}
	function ye(e) {
		E = e, O.pluralRules = E;
	}
	function be(e, t) {
		return le(() => {
			if (!e) return !1;
			let n = Ce(B(t) ? t : u.value), r = O.messageResolver(n, e);
			return c ? r != null : K(r) || Ni(r) || B(r);
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), ja, (e) => V(e));
	}
	function xe(e) {
		let t = null, n = Kr(O, d.value, u.value);
		for (let r = 0; r < n.length; r++) {
			let i = f.value[n[r]] || {}, a = O.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function Se(e) {
		return xe(e) ?? (r && r.tm(e) || {});
	}
	function Ce(e) {
		return f.value[e] || {};
	}
	function we(e, t) {
		if (o) {
			let n = { [e]: t };
			for (let e in n) Rt(n, e) && Ta(n[e]);
			t = n[e];
		}
		f.value[e] = t, O.messages = f.value;
	}
	function Te(e, t) {
		f.value[e] = f.value[e] || {};
		let n = { [e]: t };
		if (o) for (let e in n) Rt(n, e) && Ta(n[e]);
		t = n[e], Yt(t, f.value[e]), O.messages = f.value;
	}
	function Ee(e) {
		return p.value[e] || {};
	}
	function De(e, t) {
		p.value[e] = t, O.datetimeFormats = p.value, Ji(O, e, t);
	}
	function Oe(e, t) {
		p.value[e] = I(p.value[e] || {}, t), O.datetimeFormats = p.value, Ji(O, e, t);
	}
	function ke(e) {
		return m.value[e] || {};
	}
	function Ae(e, t) {
		m.value[e] = t, O.numberFormats = m.value, Qi(O, e, t);
	}
	function je(e, t) {
		m.value[e] = I(m.value[e] || {}, t), O.numberFormats = m.value, Qi(O, e, t);
	}
	Ma++, r && xt && (D(r.locale, (e) => {
		l && (u.value = e, O.locale = e, _i(O, u.value, d.value));
	}), D(r.fallbackLocale, (e) => {
		l && (d.value = e, O.fallbackLocale = e, _i(O, u.value, d.value));
	}));
	let M = {
		id: Ma,
		locale: ne,
		fallbackLocale: k,
		get inheritLocale() {
			return l;
		},
		set inheritLocale(e) {
			l = e, e && r && (u.value = r.locale.value, d.value = r.fallbackLocale.value, _i(O, u.value, d.value));
		},
		get availableLocales() {
			return Object.keys(f.value).sort();
		},
		messages: A,
		get modifiers() {
			return ee;
		},
		get pluralRules() {
			return E || {};
		},
		get isGlobal() {
			return a;
		},
		get missingWarn() {
			return h;
		},
		set missingWarn(e) {
			h = e, O.missingWarn = h;
		},
		get fallbackWarn() {
			return g;
		},
		set fallbackWarn(e) {
			g = e, O.fallbackWarn = g;
		},
		get fallbackRoot() {
			return _;
		},
		set fallbackRoot(e) {
			_ = e;
		},
		get fallbackFormat() {
			return v;
		},
		set fallbackFormat(e) {
			v = e, O.fallbackFormat = v;
		},
		get warnHtmlMessage() {
			return C;
		},
		set warnHtmlMessage(e) {
			C = e, O.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return T;
		},
		set escapeParameter(e) {
			T = e, O.escapeParameter = e;
		},
		t: ue,
		getLocaleMessage: Ce,
		setLocaleMessage: we,
		mergeLocaleMessage: Te,
		getPostTranslationHandler: j,
		setPostTranslationHandler: ae,
		getMissingHandler: oe,
		setMissingHandler: se,
		[Sa]: ye
	};
	return M.datetimeFormats = re, M.numberFormats = ie, M.rt = de, M.te = be, M.tm = Se, M.d = fe, M.n = pe, M.getDateTimeFormat = Ee, M.setDateTimeFormat = De, M.mergeDateTimeFormat = Oe, M.getNumberFormat = ke, M.setNumberFormat = Ae, M.mergeNumberFormat = je, M[Ca] = i, M[_a] = ge, M[va] = ve, M[ya] = _e, process.env.NODE_ENV !== "production" && (M[ba] = (e) => {
		O.__v_emitter = e;
	}, M[xa] = () => {
		O.__v_emitter = void 0;
	}), M;
}
function Fa(e) {
	let t = B(e.locale) ? e.locale : Zr, n = B(e.fallbackLocale) || R(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = z(e.missing) ? e.missing : void 0, i = V(e.silentTranslationWarn) || kt(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = V(e.silentFallbackWarn) || kt(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = !V(e.fallbackRoot) || e.fallbackRoot, s = !!e.formatFallbackMessages, c = U(e.modifiers) ? e.modifiers : {}, l = e.pluralizationRules, u = z(e.postTranslation) ? e.postTranslation : void 0, d = !B(e.warnHtmlInMessage) || e.warnHtmlInMessage !== "off", f = !!e.escapeParameterHtml, p = !V(e.sync) || e.sync;
	process.env.NODE_ENV !== "production" && e.formatter && N(X(Y.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && N(X(Y.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
	let m = e.messages;
	if (U(e.sharedMessages)) {
		let t = e.sharedMessages;
		m = Object.keys(t).reduce((e, n) => (I(e[n] || (e[n] = {}), t[n]), e), m || {});
	}
	let { __i18n: h, __root: g, __injectWithOption: _ } = e, v = e.datetimeFormats, y = e.numberFormats, b = e.flatJson, x = e.translateExistCompatible;
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
		translateExistCompatible: x,
		__i18n: h,
		__root: g,
		__injectWithOption: _
	};
}
function Ia(e = {}, t) {
	{
		let t = Pa(Fa(e)), { __extender: n } = e, r = {
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
			get formatter() {
				return process.env.NODE_ENV !== "production" && N(X(Y.NOT_SUPPORTED_FORMATTER)), { interpolate() {
					return [];
				} };
			},
			set formatter(e) {
				process.env.NODE_ENV !== "production" && N(X(Y.NOT_SUPPORTED_FORMATTER));
			},
			get missing() {
				return t.getMissingHandler();
			},
			set missing(e) {
				t.setMissingHandler(e);
			},
			get silentTranslationWarn() {
				return V(t.missingWarn) ? !t.missingWarn : t.missingWarn;
			},
			set silentTranslationWarn(e) {
				t.missingWarn = V(e) ? !e : e;
			},
			get silentFallbackWarn() {
				return V(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
			},
			set silentFallbackWarn(e) {
				t.fallbackWarn = V(e) ? !e : e;
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
			get preserveDirectiveContent() {
				return process.env.NODE_ENV !== "production" && N(X(Y.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
			},
			set preserveDirectiveContent(e) {
				process.env.NODE_ENV !== "production" && N(X(Y.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
			},
			get pluralizationRules() {
				return t.pluralRules || {};
			},
			__composer: t,
			t(...e) {
				let [n, r, i] = e, a = {}, o = null, s = null;
				if (!B(n)) throw $(Q.INVALID_ARGUMENT);
				let c = n;
				return B(r) ? a.locale = r : R(r) ? o = r : U(r) && (s = r), R(i) ? o = i : U(i) && (s = i), Reflect.apply(t.t, t, [
					c,
					o || s || {},
					a
				]);
			},
			rt(...e) {
				return Reflect.apply(t.rt, t, [...e]);
			},
			tc(...e) {
				let [n, r, i] = e, a = { plural: 1 }, o = null, s = null;
				if (!B(n)) throw $(Q.INVALID_ARGUMENT);
				let c = n;
				return B(r) ? a.locale = r : F(r) ? a.plural = r : R(r) ? o = r : U(r) && (s = r), B(i) ? a.locale = i : R(i) ? o = i : U(i) && (s = i), Reflect.apply(t.t, t, [
					c,
					o || s || {},
					a
				]);
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
			},
			getChoiceIndex(e, t) {
				return process.env.NODE_ENV !== "production" && N(X(Y.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
			}
		};
		return r.__extender = n, process.env.NODE_ENV !== "production" && (r.__enableEmitter = (e) => {
			let n = t;
			n[ba] && n[ba](e);
		}, r.__disableEmitter = () => {
			let e = t;
			e[xa] && e[xa]();
		}), r;
	}
}
var La = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Ra({ slots: t }, n) {
	return n.length === 1 && n[0] === "default" ? (t.default ? t.default() : []).reduce((t, n) => [...t, ...n.type === e ? n.children : [n]], []) : n.reduce((e, n) => {
		let r = t[n];
		return r && (e[n] = r()), e;
	}, L());
}
function za(t) {
	return e;
}
var Ba = /* @__PURE__ */ l({
	name: "i18n-t",
	props: I({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => F(e) || !isNaN(e)
		}
	}, La),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || So({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = Object.keys(n).filter((e) => e !== "_"), o = L();
			e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = B(e.plural) ? +e.plural : e.plural);
			let s = Ra(t, a), c = i[_a](e.keypath, s, o), l = I(L(), r), u = B(e.tag) || H(e.tag) ? e.tag : za();
			return f(u, l, c);
		};
	}
});
function Va(e) {
	return R(e) && !B(e[0]);
}
function Ha(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = { part: !0 }, o = L();
		e.locale && (t.locale = e.locale), B(e.format) ? t.key = e.format : H(e.format) && (B(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce((t, r) => n.includes(r) ? I(L(), t, { [r]: e.format[r] }) : t, L()));
		let s = r(e.value, t, o), c = [t.key];
		R(s) ? c = s.map((e, t) => {
			let n = i[e.type], r = n ? n({
				[e.type]: e.value,
				index: t,
				parts: s
			}) : [e.value];
			return Va(r) && (r[0].key = `${e.type}-${t}`), r;
		}) : B(s) && (c = [s]);
		let l = I(L(), a), u = B(e.tag) || H(e.tag) ? e.tag : za();
		return f(u, l, c);
	};
}
var Ua = /* @__PURE__ */ l({
	name: "i18n-n",
	props: I({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, La),
	setup(e, t) {
		let n = e.i18n || So({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ha(e, t, Xi, (...e) => n[ya](...e));
	}
}), Wa = /* @__PURE__ */ l({
	name: "i18n-d",
	props: I({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, La),
	setup(e, t) {
		let n = e.i18n || So({
			useScope: e.scope,
			__useComponent: !0
		});
		return Ha(e, t, Ki, (...e) => n[va](...e));
	}
});
function Ga(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function Ka(e) {
	let t = (t) => {
		let { instance: n, modifiers: r, value: i } = t;
		/* istanbul ignore if */
		if (!n || !n.$) throw $(Q.UNEXPECTED_ERROR);
		let a = Ga(e, n.$);
		process.env.NODE_ENV !== "production" && r.preserve && N(X(Y.NOT_SUPPORTED_PRESERVE));
		let o = qa(i);
		return [Reflect.apply(a.t, a, [...Ja(o)]), a];
	};
	return {
		created: (n, r) => {
			let [i, a] = t(r);
			xt && e.global === a && (n.__i18nWatcher = D(a.locale, () => {
				r.instance && r.instance.$forceUpdate();
			})), n.__composer = a, n.textContent = i;
		},
		unmounted: (e) => {
			xt && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = qa(t);
				e.textContent = Reflect.apply(n.t, n, [...Ja(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function qa(e) {
	if (B(e)) return { path: e };
	if (U(e)) {
		if (!("path" in e)) throw $(Q.REQUIRED_VALUE, "path");
		return e;
	}
	throw $(Q.INVALID_VALUE);
}
function Ja(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return B(n) && (o.locale = n), F(i) && (o.plural = i), F(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function Ya(e, t, ...n) {
	let r = U(n[0]) ? n[0] : {}, i = !!r.useI18nComponentName, a = !V(r.globalInstall) || r.globalInstall;
	process.env.NODE_ENV !== "production" && a && i && N(X(Y.COMPONENT_NAME_LEGACY_COMPATIBLE, { name: Ba.name })), a && ([i ? "i18n" : Ba.name, "I18nT"].forEach((t) => e.component(t, Ba)), [Ua.name, "I18nN"].forEach((t) => e.component(t, Ua)), [Wa.name, "I18nD"].forEach((t) => e.component(t, Wa))), e.directive("t", Ka(t));
}
var Xa = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
	"vue-i18n-resource-inspector": "I18n Resources",
	"vue-i18n-timeline": "Vue I18n"
}, Za = { "vue-i18n-resource-inspector": "Search for scopes ..." }, Qa = { "vue-i18n-timeline": 16764185 }, $a = "vue-i18n: composer properties", eo;
async function to(e, t) {
	return new Promise((n, r) => {
		try {
			la({
				id: "vue-devtools-plugin-vue-i18n",
				label: Xa["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [$a],
				app: e
			}, (r) => {
				eo = r, r.on.visitComponentTree(({ componentInstance: e, treeNode: n }) => {
					ro(e, n, t);
				}), r.on.inspectComponent(({ componentInstance: e, instanceData: n }) => {
					e.vnode.el && e.vnode.el.__VUE_I18N__ && n && (t.mode === "legacy" ? e.vnode.el.__VUE_I18N__ !== t.global.__composer && io(n, e.vnode.el.__VUE_I18N__) : io(n, e.vnode.el.__VUE_I18N__));
				}), r.addInspector({
					id: "vue-i18n-resource-inspector",
					label: Xa["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: Za["vue-i18n-resource-inspector"]
				}), r.on.getInspectorTree((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && uo(n, t);
				});
				let i = /* @__PURE__ */ new Map();
				r.on.getInspectorState(async (n) => {
					if (n.app === e && n.inspectorId === "vue-i18n-resource-inspector") {
						if (r.unhighlightElement(), mo(n, t), n.nodeId === "global") {
							if (!i.has(n.app)) {
								let [e] = await r.getComponentInstances(n.app);
								i.set(n.app, e);
							}
							r.highlightElement(i.get(n.app));
						} else {
							let e = fo(n.nodeId, t);
							e && r.highlightElement(e);
						}
					}
				}), r.on.editInspectorState((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && _o(n, t);
				}), r.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: Xa["vue-i18n-timeline"],
					color: Qa["vue-i18n-timeline"]
				}), n(!0);
			});
		} catch (e) {
			console.error(e), r(!1);
		}
	});
}
function no(e) {
	return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function ro(e, t, n) {
	let r = n.mode === "composition" ? n.global : n.global.__composer;
	if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
		let n = {
			label: `i18n (${no(e)} Scope)`,
			textColor: 0,
			backgroundColor: 16764185
		};
		t.tags.push(n);
	}
}
function io(e, t) {
	let n = $a;
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
		value: ao(t.messages.value)
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
function ao(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		z(r) && "source" in r ? t[n] = lo(r) : K(r) && r.loc && r.loc.source ? t[n] = r.loc.source : H(r) ? t[n] = ao(r) : t[n] = r;
	}), t;
}
var oo = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function so(e) {
	return e.replace(/[<>"&]/g, co);
}
function co(e) {
	return oo[e] || e;
}
function lo(e) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${e.source ? `("${so(e.source)}")` : "(?)"}`
	} };
}
function uo(e, t) {
	e.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	let n = t.mode === "composition" ? t.global : t.global.__composer;
	for (let [r, i] of t.__instances) {
		let a = t.mode === "composition" ? i : i.__composer;
		n !== a && e.rootNodes.push({
			id: a.id.toString(),
			label: `${no(r)} Scope`
		});
	}
}
function fo(e, t) {
	let n = null;
	if (e !== "global") {
		for (let [r, i] of t.__instances.entries()) if (i.id.toString() === e) {
			n = r;
			break;
		}
	}
	return n;
}
function po(e, t) {
	if (e === "global") return t.mode === "composition" ? t.global : t.global.__composer;
	{
		let n = Array.from(t.__instances.values()).find((t) => t.id.toString() === e);
		return n ? t.mode === "composition" ? n : n.__composer : null;
	}
}
function mo(e, t) {
	let n = po(e.nodeId, t);
	return n && (e.state = ho(n)), null;
}
function ho(e) {
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
		value: ao(e.messages.value)
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
function go(e, t) {
	if (eo) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), eo.addTimelineEvent({
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
function _o(e, t) {
	let n = po(e.nodeId, t);
	if (n) {
		let [t] = e.path;
		t === "locale" && B(e.state.value) ? n.locale.value = e.state.value : t === "fallbackLocale" && (B(e.state.value) || R(e.state.value) || H(e.state.value)) ? n.fallbackLocale.value = e.state.value : t === "inheritLocale" && V(e.state.value) && (n.inheritLocale = e.state.value);
	}
}
function vo(e, t, n) {
	return {
		beforeCreate() {
			let r = d();
			/* istanbul ignore if */
			if (!r) throw $(Q.UNEXPECTED_ERROR);
			let i = this.$options;
			if (i.i18n) {
				let r = i.i18n;
				if (i.__i18n && (r.__i18n = i.__i18n), r.__root = t, this === this.$root) this.$i18n = yo(e, r);
				else {
					r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = Ia(r);
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else if (i.__i18n) {
				if (this === this.$root) this.$i18n = yo(e, i);
				else {
					this.$i18n = Ia({
						__i18n: i.__i18n,
						__injectWithOption: !0,
						__extender: n.__vueI18nExtend,
						__root: t
					});
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else this.$i18n = e;
			i.__i18nGlobal && Oa(t, i, i), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$tc = (...e) => this.$i18n.tc(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = (e) => this.$i18n.tm(e), n.__setInstance(r, this.$i18n);
		},
		mounted() {
			/* istanbul ignore if */
			if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
				let e = this.$i18n;
				this.$el.__VUE_I18N__ = e.__composer;
				let t = this.__v_emitter = qt();
				e.__enableEmitter && e.__enableEmitter(t), t.on("*", go);
			}
		},
		unmounted() {
			let e = d();
			/* istanbul ignore if */
			if (!e) throw $(Q.UNEXPECTED_ERROR);
			let t = this.$i18n;
			process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", go), delete this.__v_emitter), this.$i18n && (t.__disableEmitter && t.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender), n.__deleteInstance(e), delete this.$i18n;
		}
	};
}
function yo(e, t) {
	e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Sa](t.pluralizationRules || e.pluralizationRules);
	let n = Ea(e.locale, {
		messages: t.messages,
		__i18n: t.__i18n
	});
	return Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
}
var bo = /* #__PURE__*/ Tt("global-vue-i18n");
function xo(e = {}, t) {
	let n = __VUE_I18N_LEGACY_API__ && V(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = !V(e.globalInjection) || e.globalInjection, i = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, a = /* @__PURE__ */ new Map(), [o, s] = Co(e, n), c = /* #__PURE__*/ Tt(process.env.NODE_ENV === "production" ? "" : "vue-i18n");
	process.env.NODE_ENV !== "production" && n && i && N(X(Y.NOTICE_DROP_ALLOW_COMPOSITION));
	function l(e) {
		return a.get(e) || null;
	}
	function u(e, t) {
		a.set(e, t);
	}
	function d(e) {
		a.delete(e);
	}
	{
		let e = {
			get mode() {
				return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
			},
			get allowComposition() {
				return i;
			},
			async install(t, ...i) {
				if (process.env.NODE_ENV !== "production" && (t.__VUE_I18N__ = e), t.__VUE_I18N_SYMBOL__ = c, t.provide(t.__VUE_I18N_SYMBOL__, e), U(i[0])) {
					let t = i[0];
					e.__composerExtend = t.__composerExtend, e.__vueI18nExtend = t.__vueI18nExtend;
				}
				let a = null;
				!n && r && (a = No(t, e.global)), __VUE_I18N_FULL_INSTALL__ && Ya(t, e, ...i), __VUE_I18N_LEGACY_API__ && n && t.mixin(vo(s, s.__composer, e));
				let o = t.unmount;
				if (t.unmount = () => {
					a && a(), e.dispose(), o();
				}, process.env.NODE_ENV !== "production") {
					if (!await to(t, e)) throw $(Q.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
					let r = qt();
					if (n) {
						let e = s;
						e.__enableEmitter && e.__enableEmitter(r);
					} else {
						let e = s;
						e[ba] && e[ba](r);
					}
					r.on("*", go);
				}
			},
			get global() {
				return s;
			},
			dispose() {
				o.stop();
			},
			__instances: a,
			__getInstance: l,
			__setInstance: u,
			__deleteInstance: d
		};
		return e;
	}
}
function So(e = {}) {
	let t = d();
	if (t == null) throw $(Q.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw $(Q.NOT_INSTALLED);
	let n = wo(t), r = Eo(n), i = Da(t), a = To(e, i);
	if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
		if (!n.allowComposition) throw $(Q.NOT_AVAILABLE_IN_LEGACY_MODE);
		return Ao(t, a, r, e);
	}
	if (a === "global") return Oa(r, e, i), r;
	if (a === "parent") {
		let i = Do(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && N(X(Y.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = I({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Pa(n), o.__composerExtend && (s[wa] = o.__composerExtend(s)), ko(o, t, s), o.__setInstance(t, s);
	}
	return s;
}
function Co(e, t, n) {
	let r = u();
	{
		let n = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Ia(e)) : r.run(() => Pa(e));
		if (n == null) throw $(Q.UNEXPECTED_ERROR);
		return [r, n];
	}
}
function wo(e) {
	{
		let t = p(e.isCE ? bo : e.appContext.app.__VUE_I18N_SYMBOL__);
		/* istanbul ignore if */
		if (!t) throw $(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
		return t;
	}
}
function To(e, t) {
	return At(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Eo(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Do(e, t, n = !1) {
	let r = null, i = t.root, a = Oo(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition") r = t.__getInstance(a);
		else if (__VUE_I18N_LEGACY_API__) {
			let e = t.__getInstance(a);
			e != null && (r = e.__composer, n && r && !r[Ca] && (r = null));
		}
		if (r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Oo(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ko(e, t, n) {
	let r = null;
	_(() => {
		if (process.env.NODE_ENV !== "production" && t.vnode.el) {
			t.vnode.el.__VUE_I18N__ = n, r = qt();
			let e = n;
			e[ba] && e[ba](r), r.on("*", go);
		}
	}, t), v(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", go), i[xa] && i[xa](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[wa];
		a && (a(), delete i[wa]);
	}, t);
}
function Ao(e, t, r, i = {}) {
	let a = t === "local", o = w(null);
	if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw $(Q.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
	let s = V(i.inheritLocale) ? i.inheritLocale : !B(i.locale), c = b(!a || s ? r.locale.value : B(i.locale) ? i.locale : Zr), l = b(!a || s ? r.fallbackLocale.value : B(i.fallbackLocale) || R(i.fallbackLocale) || U(i.fallbackLocale) || i.fallbackLocale === !1 ? i.fallbackLocale : c.value), u = b(Ea(c.value, i)), d = b(U(i.datetimeFormats) ? i.datetimeFormats : { [c.value]: {} }), f = b(U(i.numberFormats) ? i.numberFormats : { [c.value]: {} }), p = a ? r.missingWarn : V(i.missingWarn) || kt(i.missingWarn) ? i.missingWarn : !0, m = a ? r.fallbackWarn : V(i.fallbackWarn) || kt(i.fallbackWarn) ? i.fallbackWarn : !0, h = a ? r.fallbackRoot : !V(i.fallbackRoot) || i.fallbackRoot, _ = !!i.fallbackFormat, v = z(i.missing) ? i.missing : null, y = z(i.postTranslation) ? i.postTranslation : null, x = a ? r.warnHtmlMessage : !V(i.warnHtmlMessage) || i.warnHtmlMessage, S = !!i.escapeParameter, C = a ? r.modifiers : U(i.modifiers) ? i.modifiers : {}, T = i.pluralRules || a && r.pluralRules;
	function ee() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let E = n({
		get: () => o.value ? o.value.locale.value : c.value,
		set: (e) => {
			o.value && (o.value.locale.value = e), c.value = e;
		}
	}), D = n({
		get: () => o.value ? o.value.fallbackLocale.value : l.value,
		set: (e) => {
			o.value && (o.value.fallbackLocale.value = e), l.value = e;
		}
	}), O = n(() => o.value ? o.value.messages.value : u.value), te = n(() => d.value), ne = n(() => f.value);
	function k() {
		return o.value ? o.value.getPostTranslationHandler() : y;
	}
	function A(e) {
		o.value && o.value.setPostTranslationHandler(e);
	}
	function re() {
		return o.value ? o.value.getMissingHandler() : v;
	}
	function ie(e) {
		o.value && o.value.setMissingHandler(e);
	}
	function j(e) {
		return ee(), e();
	}
	function ae(...e) {
		return o.value ? j(() => Reflect.apply(o.value.t, null, [...e])) : j(() => "");
	}
	function oe(...e) {
		return o.value ? Reflect.apply(o.value.rt, null, [...e]) : "";
	}
	function se(...e) {
		return o.value ? j(() => Reflect.apply(o.value.d, null, [...e])) : j(() => "");
	}
	function ce(...e) {
		return o.value ? j(() => Reflect.apply(o.value.n, null, [...e])) : j(() => "");
	}
	function le(e) {
		return o.value ? o.value.tm(e) : {};
	}
	function ue(e, t) {
		return o.value ? o.value.te(e, t) : !1;
	}
	function de(e) {
		return o.value ? o.value.getLocaleMessage(e) : {};
	}
	function fe(e, t) {
		o.value && (o.value.setLocaleMessage(e, t), u.value[e] = t);
	}
	function pe(e, t) {
		o.value && o.value.mergeLocaleMessage(e, t);
	}
	function me(e) {
		return o.value ? o.value.getDateTimeFormat(e) : {};
	}
	function he(e, t) {
		o.value && (o.value.setDateTimeFormat(e, t), d.value[e] = t);
	}
	function ge(e, t) {
		o.value && o.value.mergeDateTimeFormat(e, t);
	}
	function _e(e) {
		return o.value ? o.value.getNumberFormat(e) : {};
	}
	function ve(e, t) {
		o.value && (o.value.setNumberFormat(e, t), f.value[e] = t);
	}
	function ye(e, t) {
		o.value && o.value.mergeNumberFormat(e, t);
	}
	let be = {
		get id() {
			return o.value ? o.value.id : -1;
		},
		locale: E,
		fallbackLocale: D,
		messages: O,
		datetimeFormats: te,
		numberFormats: ne,
		get inheritLocale() {
			return o.value ? o.value.inheritLocale : s;
		},
		set inheritLocale(e) {
			o.value && (o.value.inheritLocale = e);
		},
		get availableLocales() {
			return o.value ? o.value.availableLocales : Object.keys(u.value);
		},
		get modifiers() {
			return o.value ? o.value.modifiers : C;
		},
		get pluralRules() {
			return o.value ? o.value.pluralRules : T;
		},
		get isGlobal() {
			return o.value ? o.value.isGlobal : !1;
		},
		get missingWarn() {
			return o.value ? o.value.missingWarn : p;
		},
		set missingWarn(e) {
			o.value && (o.value.missingWarn = e);
		},
		get fallbackWarn() {
			return o.value ? o.value.fallbackWarn : m;
		},
		set fallbackWarn(e) {
			o.value && (o.value.missingWarn = e);
		},
		get fallbackRoot() {
			return o.value ? o.value.fallbackRoot : h;
		},
		set fallbackRoot(e) {
			o.value && (o.value.fallbackRoot = e);
		},
		get fallbackFormat() {
			return o.value ? o.value.fallbackFormat : _;
		},
		set fallbackFormat(e) {
			o.value && (o.value.fallbackFormat = e);
		},
		get warnHtmlMessage() {
			return o.value ? o.value.warnHtmlMessage : x;
		},
		set warnHtmlMessage(e) {
			o.value && (o.value.warnHtmlMessage = e);
		},
		get escapeParameter() {
			return o.value ? o.value.escapeParameter : S;
		},
		set escapeParameter(e) {
			o.value && (o.value.escapeParameter = e);
		},
		t: ae,
		getPostTranslationHandler: k,
		setPostTranslationHandler: A,
		getMissingHandler: re,
		setMissingHandler: ie,
		rt: oe,
		d: se,
		n: ce,
		tm: le,
		te: ue,
		getLocaleMessage: de,
		setLocaleMessage: fe,
		mergeLocaleMessage: pe,
		getDateTimeFormat: me,
		setDateTimeFormat: he,
		mergeDateTimeFormat: ge,
		getNumberFormat: _e,
		setNumberFormat: ve,
		mergeNumberFormat: ye
	};
	function xe(e) {
		e.locale.value = c.value, e.fallbackLocale.value = l.value, Object.keys(u.value).forEach((t) => {
			e.mergeLocaleMessage(t, u.value[t]);
		}), Object.keys(d.value).forEach((t) => {
			e.mergeDateTimeFormat(t, d.value[t]);
		}), Object.keys(f.value).forEach((t) => {
			e.mergeNumberFormat(t, f.value[t]);
		}), e.escapeParameter = S, e.fallbackFormat = _, e.fallbackRoot = h, e.fallbackWarn = m, e.missingWarn = p, e.warnHtmlMessage = x;
	}
	return g(() => {
		if (e.proxy == null || e.proxy.$i18n == null) throw $(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let n = o.value = e.proxy.$i18n.__composer;
		t === "global" ? (c.value = n.locale.value, l.value = n.fallbackLocale.value, u.value = n.messages.value, d.value = n.datetimeFormats.value, f.value = n.numberFormats.value) : a && xe(n);
	}), be;
}
var jo = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], Mo = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function No(e, t) {
	let n = Object.create(null);
	return jo.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw $(Q.UNEXPECTED_ERROR);
		let i = m(r.value) ? {
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
	}), e.config.globalProperties.$i18n = n, Mo.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw $(Q.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, Mo.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
if (da(), __INTLIFY_JIT_COMPILATION__ ? ti(ji) : ti(Ai), ri(yr), ai(Kr), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
	let e = Nt();
	e.__INTLIFY__ = !0, Ar(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
// src/i18n.js
function Po() {
	let e = /* #__PURE__ */ Object.assign({
		"./locales/cz_CZ.json": dt,
		"./locales/en_US.json": ft,
		"./locales/es_ES.json": pt,
		"./locales/fr_FR.json": mt,
		"./locales/pl_PL.json": ht,
		"./locales/pt_BR.json": gt,
		"./locales/sk_SK.json": _t,
		"./locales/tr_TR.json": vt
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
var Fo = xo({
	locale: "en_US",
	fallbackLocale: "en_US",
	messages: Po()
});
ut.install = (e, t) => {
	e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(Fo), e.component("vueSelectSides", ut);
};
var Io = ut;
export { Io as default };
