import { Fragment as e, Text as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, effectScope as u, getCurrentInstance as d, getCurrentScope as f, h as p, inject as m, isRef as h, normalizeClass as g, onMounted as _, onScopeDispose as v, onUnmounted as y, openBlock as b, ref as ee, renderList as te, resolveComponent as x, resolveDynamicComponent as S, shallowRef as ne, toDisplayString as C, vModelText as re, vShow as w, watch as ie, withDirectives as T } from "vue";
// src/sort-by.js
var ae = (...e) => {
	let t = e.filter((e) => typeof e == "string"), n = e.find((e) => typeof e == "function");
	return (e, r) => {
		for (let i of t) {
			let t = 1;
			i[0] === "-" && (t = -1, i = i.substring(1));
			let a = oe(e, i), o = oe(r, i);
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
}, oe = (e, t) => t.split(".").reduce((e, t) => e?.[t], e), E = (e) => JSON.parse(JSON.stringify(e)), D = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), se = (e, t) => {
	let n = [];
	e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label"));
	let r = (e, t) => e === "label" && typeof t == "string" ? D(t) : t;
	return t.sort(ae(...n, r)).map((e) => (e.children && e.children.sort(ae(...n, r)), e)), t;
}, ce = (e, t) => e.filter((e) => String(e) !== String(t)), le = (e, t) => {
	let n = [...e], r = new Set(e.map((e) => String(e)));
	return t.forEach((e) => {
		let t = String(e);
		r.has(t) || (r.add(t), n.push(e));
	}), n;
}, ue = (e, t) => {
	let n = new Set(t.map((e) => String(e)));
	return e.filter((e) => !n.has(String(e)));
}, O = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, de = {
	name: "v-select-all",
	display: "Select all",
	emits: ["update-select-all"],
	props: { items: Array }
};
function fe(e, t, n, r, i, o) {
	return b(), a("a", {
		href: "javascript:void(0)",
		onClick: t[0] ||= (t) => e.$emit("update-select-all")
	}, C(e.$t("selectAll")), 1);
}
var pe = /*#__PURE__*/ O(de, [["render", fe]]), me = {
	name: "v-deselect-all",
	display: "Deselect all",
	emits: ["update-deselect-all"],
	props: {
		click: Function,
		items: Array
	}
};
function he(e, t, n, r, i, o) {
	return b(), a("a", {
		href: "javascript:void(0)",
		onClick: t[0] ||= (t) => e.$emit("update-deselect-all")
	}, C(e.$t("deselectAll")), 1);
}
var ge = /*#__PURE__*/ O(me, [["render", he]]), _e = {
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
}, ve = ["placeholder"];
function ye(e, t, n, r, i, o) {
	return T((b(), a("input", {
		type: "text",
		"onUpdate:modelValue": t[0] ||= (e) => i.inputVal = e,
		placeholder: i.thePlaceholder
	}, null, 8, ve)), [[re, i.inputVal]]);
}
var be = /*#__PURE__*/ O(_e, [["render", ye]]), xe = {
	name: "v-no-results",
	display: "No results",
	methods: {}
}, Se = { class: "no-results" };
function Ce(e, t, n, r, i, s) {
	return b(), a("li", Se, [o("span", null, C(e.$t("searchNoResult")), 1)]);
}
var we = /*#__PURE__*/ O(xe, [["render", Ce]]), Te = {
	name: "v-no-selection",
	display: "No selection",
	methods: {}
}, Ee = { class: "no-selection" };
function De(e, t, n, r, i, s) {
	return b(), a("li", Ee, [o("span", null, C(e.$t("searchParentSelected")), 1)]);
}
// src/components/list.vue
var Oe = {
	name: "v-list",
	display: "List",
	mounted() {},
	components: {
		"v-no-results": we,
		"v-no-selection": /* @__PURE__ */ O(Te, [["render", De]])
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
}, ke = { class: "vss-list-ul" }, Ae = ["onClick"], je = { style: {} }, Me = {
	key: 0,
	class: "vss-list-badge"
}, Ne = { key: 0 }, Pe = ["onClick"];
function Fe(t, n, r, l, u, d) {
	let f = x("v-no-results"), p = x("v-no-selection");
	return b(), a("ul", ke, [
		(b(!0), a(e, null, te(r.items, (t, n) => T((b(), a("li", {
			key: n,
			onClick: (e) => !r.hasChildren && d.toggleItem(t, {}, t.selected),
			class: g(d.liClass(t, r.hasChildren))
		}, [o("span", je, [s(C(t.label) + " ", 1), d.showCounter(t) ? (b(), a("small", Me, C(t.totalChildrenSelected), 1)) : i("", !0)]), r.hasChildren ? (b(), a("ul", Ne, [(b(!0), a(e, null, te(t.children, (e, r) => T((b(), a("li", {
			key: `${n}-${r}`,
			onClick: (n) => d.toggleItem(e, t, e.selected),
			class: g(d.liClass(e, !1))
		}, [o("span", null, C(e.label), 1)], 10, Pe)), [[w, e.visible]])), 128)), T(c(f, null, null, 512), [[w, d.totalItems(t.children) === 0]])])) : i("", !0)], 10, Ae)), [[w, d.showParent(t)]])), 128)),
		T(c(p, null, null, 512), [[w, d.showNoSelection(r.items)]]),
		T(c(f, null, null, 512), [[w, d.showNoResultParent(r.items)]])
	]);
}
var k = /*#__PURE__*/ O(Oe, [["render", Fe]]), Ie = {
	name: "v-separator",
	display: "Separator"
}, Le = { class: "vss-span" };
function Re(e, t, n, r, i, o) {
	return b(), a("div", Le, " ‹ › ");
}
var ze = /*#__PURE__*/ O(Ie, [["render", Re]]), Be = {
	name: "v-total",
	display: "Total",
	props: { value: { type: Number } }
}, Ve = ["title"];
function He(e, t, n, r, i, o) {
	return b(), a("span", { title: e.$t("totalSelected") }, C(n.value), 9, Ve);
}
var Ue = /*#__PURE__*/ O(Be, [["render", He]]), We = {
	emits: ["update-selected"],
	watch: {
		modelValue(e, t) {
			JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
		},
		dataSelected(e, t) {
			this.$emit("update-selected", e, t);
		},
		orderBy() {
			this.listLeft = se(this, this.dataList), this.listRight = se(this, this.dataList);
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
}, Ge = {
	name: "grouped-select-sides",
	display: "Grouped select sides",
	mixins: [We],
	components: {
		"v-select-all": pe,
		"v-deselect-all": ge,
		"v-search": be,
		"v-separator": ze,
		"v-list": k,
		"v-total": Ue
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
			e.filteredListL.forEach((t) => {
				t.visible === !0 && !t.disabled && e.updateItem(t, {}, !0);
			});
		},
		updateLeftDeselectAll() {
			let e = this;
			e.filteredListL.forEach((t) => {
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
			let r = E(this.dataSelected);
			Object.keys(t).length > 0 ? (r[t.value] === void 0 && t.visible && (r[t.value] = []), n ? e.visible && r[t.value].indexOf(e.value) === -1 && r[t.value].push(e.value) : e.visible && (r[t.value] = ce(r[t.value], e.value))) : n ? r[e.value] === void 0 && (r[e.value] = []) : delete r[e.value], this.dataSelected = r;
		},
		prepareList() {
			let e = this, t = {};
			e.dataListOriginal = E(e.list);
			let n = Object.keys(e.modelValue), r = e.list.filter((r) => {
				let i = r.value, a = n.indexOf(i) >= 0;
				return a ? (r.selectedDefault = !0, t[i] = []) : r.selectedDefault = !1, r.children && r.children.filter((n) => {
					let r = n.value;
					a && (e.modelValue[i].indexOf(r) >= 0 ? (n.selectedDefault = !0, t[i].push(r)) : n.selectedDefault = !1);
				}), r;
			});
			e.dataSelected = t, e.dataList = se({
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
			let e = this, t = D(this.searchL), n = Object.keys(this.dataSelected), r = E(this.listLeft);
			return r = r.filter((r) => {
				let i = D(r.label);
				return r.selected = n.indexOf(r.value) >= 0, r.visible = !!i.includes(t), r.children ? (r.children = r.children.map((t) => (t.selected = !1, e.dataSelected[r.value] !== void 0 && (t.selected = e.dataSelected[r.value].indexOf(t.value) >= 0), t)), r.totalChildrenSelected = r.children.filter(function(e) {
					return e.selected === !0;
				}).length, r.children) : r;
			}), r;
		},
		filteredListR() {
			let e = this, t = D(e.searchR);
			return e.listRight.filter(function(n) {
				return n.children ? (n.children = n.children.map((r) => (r.visible = !!D(r.label).includes(t), e.dataSelected[n.value] !== void 0 && (r.selected = e.dataSelected[n.value].indexOf(r.value) >= 0), r)), n.children) : n;
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
}, Ke = { class: "vss-list" }, qe = { class: "vss-inner-list" }, Je = { class: "vss-footer" }, Ye = { class: "vss-footer-bg" }, Xe = {
	key: 1,
	class: "vss-footer-separator"
}, Ze = { class: "vss-list" }, Qe = { class: "vss-inner-list" }, $e = { class: "vss-footer" }, et = { class: "vss-footer-bg" }, tt = {
	key: 1,
	class: "vss-footer-separator"
};
function nt(e, t, n, s, l, u) {
	let d = x("v-search"), f = x("v-list"), p = x("v-select-all"), m = x("v-deselect-all"), h = x("v-total"), g = x("v-separator");
	return b(), a("div", null, [
		o("div", Ke, [o("div", qe, [
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
			T(o("div", Je, [o("div", Ye, [o("div", null, [
				e.toggleAll ? (b(), r(p, {
					key: 0,
					items: l.listLeft,
					onUpdateSelectAll: u.updateLeftSelectAll
				}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0),
				e.toggleAll ? (b(), a("div", Xe, "/")) : i("", !0),
				e.toggleAll ? (b(), r(m, {
					key: 2,
					items: l.listLeft,
					onUpdateDeselectAll: u.updateLeftDeselectAll
				}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)
			]), e.total ? (b(), r(h, {
				key: 0,
				value: Object.keys(l.dataSelected).length
			}, null, 8, ["value"])) : i("", !0)])], 512), [[w, e.toggleAll || e.total]])
		])]),
		c(g),
		o("div", Ze, [o("div", Qe, [
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
			T(o("div", $e, [o("div", et, [o("div", null, [
				e.toggleAll ? (b(), r(p, {
					key: 0,
					items: l.listRight,
					onUpdateSelectAll: u.updateRightSelectAll
				}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0),
				e.toggleAll ? (b(), a("div", tt, "/")) : i("", !0),
				e.toggleAll ? (b(), r(m, {
					key: 2,
					items: l.listRight,
					onUpdateDeselectAll: u.updateRightDeselectAll
				}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)
			]), e.total ? (b(), r(h, {
				key: 0,
				value: u.totalChildrenSelected
			}, null, 8, ["value"])) : i("", !0)])], 512), [[w, e.toggleAll || e.total]])
		])])
	]);
}
var rt = /*#__PURE__*/ O(Ge, [["render", nt]]), it = {
	name: "mirror-select-sides",
	display: "Mirror select sides",
	mixins: [We],
	components: {
		"v-select-all": pe,
		"v-deselect-all": ge,
		"v-search": be,
		"v-separator": ze,
		"v-list": k,
		"v-total": Ue
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
			let e = this.filteredListL.filter((e) => e.visible === !0 && !e.disabled).map((e) => e.value), t = le(this.dataSelected, e);
			t.length !== this.dataSelected.length && (this.dataSelected = t);
		},
		updateRightDeselectAll() {
			let e = this.filteredListR.filter((e) => e.visible === !0).map((e) => e.value), t = ue(this.dataSelected, e);
			t.length !== this.dataSelected.length && (this.dataSelected = t);
		},
		updateItem(e, t, n) {
			let r = E(this.dataSelected);
			r = n ? le(r, [e.value]) : ce(r, e.value), this.dataSelected = r;
		},
		prepareList() {
			this.dataListOriginal = E(this.list);
			let e = this, t = [], n = e.list.filter((n) => {
				let r = n.value;
				return e.modelValue.indexOf(r) >= 0 ? (n.selectedDefault = !0, t.push(r)) : n.selectedDefault = !1, n;
			});
			e.dataSelected = t, e.dataList = se(e, n);
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
			let e = D(this.searchL), t = this.dataSelected, n = E(this.listLeft);
			return n = n.filter((n) => {
				let r = D(n.label);
				return t.indexOf(n.value) >= 0 ? (n.selected = !0, n.visible = !1) : (n.selected = !1, n.visible = !0), n.visible = !!(r.includes(e) && n.visible === !0), n;
			}), n;
		},
		filteredListR() {
			let e = this, t = D(e.searchR), n = this.dataSelected, r = E(e.listLeft);
			return r = r.filter((e) => {
				let r = D(e.label);
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
}, at = { class: "vss-list" }, ot = { class: "vss-inner-list" }, st = { class: "vss-footer" }, ct = { class: "vss-footer-bg" }, lt = { class: "vss-list" }, ut = { class: "vss-inner-list" }, dt = { class: "vss-footer" }, ft = { class: "vss-footer-bg" };
function pt(e, t, n, s, l, u) {
	let d = x("v-search"), f = x("v-list"), p = x("v-select-all"), m = x("v-total"), h = x("v-separator"), g = x("v-deselect-all");
	return b(), a("div", null, [
		o("div", at, [o("div", ot, [
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
			T(o("div", st, [o("div", ct, [o("div", null, [e.toggleAll ? (b(), r(p, {
				key: 0,
				items: l.listLeft,
				onUpdateSelectAll: u.updateLeftSelectAll
			}, null, 8, ["items", "onUpdateSelectAll"])) : i("", !0)]), e.total ? (b(), r(m, {
				key: 0,
				value: l.dataSelected.length
			}, null, 8, ["value"])) : i("", !0)])], 512), [[w, e.toggleAll || e.total]])
		])]),
		c(h),
		o("div", lt, [o("div", ut, [
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
			T(o("div", dt, [o("div", ft, [o("div", null, [e.toggleAll ? (b(), r(g, {
				key: 0,
				items: l.listRight,
				onUpdateDeselectAll: u.updateRightDeselectAll
			}, null, 8, ["items", "onUpdateDeselectAll"])) : i("", !0)])])], 512), [[w, e.toggleAll || e.total]])
		])])
	]);
}
// src/vue-select-sides.vue
var mt = {
	name: "vue-select-sides",
	display: "Core select sides",
	components: {
		"mirror-select-sides": /* @__PURE__ */ O(it, [["render", pt]]),
		"grouped-select-sides": rt
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
			this.listClone = E(e);
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
		this.setDefaultParams(), this.listClone = E(this.list);
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
function ht(e, t, n, i, a, o) {
	return b(), r(S(o.getComponent()), {
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
var gt = /*#__PURE__*/ O(mt, [["render", ht]]), _t = {
	selectAll: "Vybrat vše ",
	deselectAll: "Odebrat vše ",
	searchPlaceholder: "Hledej...",
	searchNoResult: "Žádný výsledek...",
	searchParentSelected: "Nic není vybráno...",
	totalSelected: "Spolu vybrané"
}, vt = {
	selectAll: "Select all",
	deselectAll: "Deselect all",
	searchPlaceholder: "Search...",
	searchNoResult: "No result...",
	searchParentSelected: "No items selected...",
	totalSelected: "Total items selected"
}, yt = {
	selectAll: "Seleccionar todos",
	deselectAll: "Deseleccionar todos",
	searchPlaceholder: "Buscar...",
	searchNoResult: "Sin resultados...",
	searchParentSelected: "Ningún elemento seleccionado...",
	totalSelected: "Elementos seleccionados"
}, bt = {
	selectAll: "Ajouter tout",
	deselectAll: "Supprimer tout",
	searchPlaceholder: "Recherche...",
	searchNoResult: "Pas de résultat...",
	searchParentSelected: "Sélection vide...",
	totalSelected: "Éléments sélectionnés"
}, xt = {
	selectAll: "Wybierz wszystko",
	deselectAll: "Wyczyść zaznaczenie",
	searchPlaceholder: "Szukaj...",
	searchNoResult: "Brak wyników...",
	searchParentSelected: "Nie wybrano żadnych elementów...",
	totalSelected: "Liczba wybranych elementów"
}, St = {
	selectAll: "Selecionar todos",
	deselectAll: "Remover todos",
	searchPlaceholder: "Pesquisar...",
	searchNoResult: "Sem nenhum resultado...",
	searchParentSelected: "Nenhum item selecionado...",
	totalSelected: "Total de itens selecionados"
}, Ct = {
	selectAll: "Vybrať všetko",
	deselectAll: "Odobrať všetko",
	searchPlaceholder: "Hľadaj...",
	searchNoResult: "Žiadny výsledok...",
	searchParentSelected: "Nič nie je vybrané...",
	totalSelected: "Spolu vybrané"
}, wt = {
	selectAll: "Hepsini Seç",
	deselectAll: "Hepsini Çıkar",
	searchPlaceholder: "Ara...",
	searchNoResult: "Sonuç Bulunamadı...",
	searchParentSelected: "Hiçbiri Seçilmedi...",
	totalSelected: "Hepsi Seçildi"
}, A = typeof window < "u", j, Tt;
if (process.env.NODE_ENV !== "production") {
	let e = A && window.performance;
	e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (j = (t) => {
		e.mark(t);
	}, Tt = (t, n, r) => {
		e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
	});
}
var Et = /\{([0-9a-zA-Z]+)\}/g;
function Dt(e, ...t) {
	return t.length === 1 && H(t[0]) && (t = t[0]), t && t.hasOwnProperty || (t = {}), e.replace(Et, (e, n) => t.hasOwnProperty(n) ? t[n] : "");
}
var M = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ot = (e, t, n) => kt({
	l: e,
	k: t,
	s: n
}), kt = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), N = (e) => typeof e == "number" && isFinite(e);
function At(e, t) {
	return B(t) || N(t) ? `${e}:${t}` : e;
}
var jt = (e) => Vt(e) === "[object Date]", Mt = (e) => Vt(e) === "[object RegExp]", Nt = (e) => U(e) && Object.keys(e).length === 0, P = Object.assign, Pt = Object.create, F = (e = null) => Pt(e), Ft, It = () => Ft ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : F(), Lt = Object.prototype.hasOwnProperty;
function I(e, t) {
	return Lt.call(e, t);
}
function L(e, t) {
	let n = e[t];
	return I(e, t) ? n : void 0;
}
function Rt(e) {
	return I(Object.prototype, e);
}
var R = Array.isArray, z = (e) => typeof e == "function", B = (e) => typeof e == "string", V = (e) => typeof e == "boolean", H = (e) => typeof e == "object" && !!e, zt = (e) => H(e) && z(e.then) && z(e.catch), Bt = Object.prototype.toString, Vt = (e) => Bt.call(e), U = (e) => Vt(e) === "[object Object]", Ht = (e) => e == null ? "" : R(e) || U(e) && e.toString === Bt ? JSON.stringify(e, null, 2) : String(e);
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
function W(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var Kt = {};
function qt(e) {
	Kt[e] || (Kt[e] = !0, W(e));
}
function Jt(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Yt(e) {
	return e.replace(/&(?![a-z0-9#]{2,6};)/gi, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var Xt = /^javascript:/i, Zt = /^(?:href|xlink:href|src|action|formaction)$/i, Qt = /&#(?:x([0-9a-f]+)|(\d+));?/gi, $t = /&(?:Tab|NewLine);/g, en = /&colon;?/gi, tn = /[\u0000-\u0020\u007f-\u009f]/g, nn = /^on\w/i, rn = /^srcdoc$/i, an = /^(?:base|animate|set|script|plaintext)$/i, on = /^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i, sn = /<(\/?)([a-z][^\t\n\f\r />]*)/iy, cn = /([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y, ln = /<!--(?:>|->|[\s\S]*?--!?>)/y;
function un(e, t, n) {
	let r = t || n;
	if (!r) return e;
	let i = Number.parseInt(r, t ? 16 : 10);
	return i <= 127 ? String.fromCharCode(i) : e;
}
function dn(e) {
	let t = e.replace(Qt, un).replace($t, "").replace(en, ":").replace(tn, "");
	return Xt.test(t);
}
function fn(e) {
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
		n += e.slice(r, a), n += dn(d) ? "url(about:blank)" : e.slice(a, s + 1), r = s + 1;
	}
	return n + e.slice(r);
}
function pn(e, t) {
	return Zt.test(e) && dn(t) ? "about:blank" : Yt(e.toLowerCase() === "style" ? fn(t) : t);
}
function mn(e) {
	return e.replace(/</g, "&lt;");
}
function hn(e, t, n, r) {
	let i = e;
	if (nn.test(e) ? (r.eventHandler = !0, i = `&#111;n${e.slice(2)}`) : rn.test(e) && (r.srcdoc = !0, i = `&#115;${e.slice(1)}`), t === void 0) return i;
	let a = n || "";
	return `${i}=${a}${pn(e, t)}${a}`;
}
var G = 0, gn = 1, _n = 2, vn = /^(?:area|base|basefont|bgsound|br|col|embed|frame|hr|image|img|input|keygen|link|meta|param|source|track|wbr|html|head|body|frameset)$/, yn = /^(?:b|big|blockquote|body|br|center|code|dd|div|dl|dt|em|embed|h[1-6]|head|hr|i|img|li|listing|menu|meta|nobr|ol|p|pre|ruby|s|small|span|strong|strike|sub|sup|table|tt|u|ul|var)$/, bn = /^(?:address|article|aside|blockquote|center|details|dialog|dir|div|dl|fieldset|figcaption|figure|footer|header|hgroup|main|menu|nav|ol|p|search|section|summary|ul|h[1-6]|pre|listing|form|li|dd|dt|plaintext|table|hr|xmp)$/, xn = /^(?:applet|caption|html|table|td|th|marquee|object|template|button)$/, Sn = /^(?:foreignobject|desc|title)$/, Cn = /^(?:foreignobject|desc|mi|mo|mn|ms|mtext|annotation-xml)$/, wn = /^(?:mi|mo|mn|ms|mtext)$/, Tn = /^(?:text\/html|application\/xhtml\+xml)$/i;
function En(e) {
	return e.replace(/[A-Z]+/g, (e) => e.toLowerCase());
}
function Dn(e, t) {
	return !!e && e.namespace !== G && (!e.integration || wn.test(e.name) && (t === "mglyph" || t === "malignmark")) && (e.name !== "annotation-xml" || t !== "svg");
}
function On(e, t) {
	return yn.test(e) || e === "font" && (t.has("color") || t.has("face") || t.has("size"));
}
function kn(e, t, n) {
	let r = "";
	for (let i = e.length - 1; i >= t; i--) {
		let t = e[i];
		t.namespace === G && t.name === "form" ? n[t.part] = mn(n[t.part]) : r += `</${t.name}>`;
	}
	return e.length = t, r;
}
function An(e, t) {
	let n = e.length;
	for (; n > 0 && e[n - 1].namespace !== G && !e[n - 1].integration;) n--;
	return kn(e, n, t);
}
function jn(e, t, n, r, i) {
	let a = t.length + 1, o = "", s = e[e.length - 1];
	if (Dn(s, n)) {
		if (!On(n, r)) return i || e.push({
			name: n,
			namespace: s.namespace,
			integration: s.namespace === gn ? Sn.test(n) : wn.test(n) || n === "annotation-xml" && Tn.test((r.get("encoding") || "").replace(Qt, un)),
			part: a
		}), o;
		o = An(e, t);
	}
	if (bn.test(n)) for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (r.namespace === G ? xn.test(r.name) : r.integration) break;
		if (r.namespace === G && r.name === "p") {
			o += kn(e, n, t);
			break;
		}
	}
	if (!Cn.test(n)) return n === "svg" || n === "math" ? i || e.push({
		name: n,
		namespace: n === "svg" ? gn : _n,
		integration: !1,
		part: a
	}) : vn.test(n) || e.push({
		name: n,
		namespace: G,
		integration: !1,
		part: a
	}), o;
}
function Mn(e, t, n) {
	let r = "";
	(n === "p" || n === "br") && (r = An(e, t));
	let i = e.length - 1;
	for (; i >= 0 && e[i].namespace !== G && e[i].name !== n;) i--;
	if (!(i >= 0 && e[i].namespace !== G)) for (; i >= 0 && (e[i].namespace !== G || e[i].name !== n);) i--;
	return i < 0 ? n === "br" || n === "p" ? r : void 0 : (r += kn(e, i + 1, t), e.length = i, r);
}
function Nn(e, t, n) {
	sn.lastIndex = t;
	let r = sn.exec(e);
	if (!r) return;
	let [, i, a] = r, o = r[0], s = /* @__PURE__ */ new Map(), c;
	for (cn.lastIndex = sn.lastIndex; c = cn.exec(e);) {
		let [r, l, u, d, f, p, m, h] = c;
		if (u) {
			let n = cn.lastIndex;
			return [
				i ? e.slice(t, n) : o + r,
				a,
				n,
				!i && l.endsWith("/"),
				s
			];
		}
		if (f && !m) break;
		if (!i) {
			let e = f ? p : h, t = En(d);
			s.has(t) || s.set(t, e || ""), o += l + hn(d, e, f, n);
		}
	}
	return [
		o,
		a,
		-1,
		!1,
		s
	];
}
function Pn(e, t, n) {
	for (let r = e.indexOf("</", t); r !== -1; r = e.indexOf("</", r + 2)) {
		let t = Nn(e, r, {});
		if (t && t[1].toLowerCase() === n.toLowerCase()) return t[2] === -1 ? -1 : r;
	}
	return -1;
}
function Fn(e) {
	let t = {}, n = [], r = [], i = 0, a;
	for (; (a = e.indexOf("<", i)) !== -1;) {
		n.push(e.slice(i, a)), i = a + 1;
		let o = Nn(e, a, t);
		if (o) {
			let [s, c, l, u, d] = o;
			if (l === -1) {
				t.unclosed = !0, n.push(mn(e.slice(a))), i = e.length;
				break;
			}
			if (i = l, s[1] === "/") {
				let e = Mn(r, n, En(c));
				e === void 0 ? t.closed = !0 : (e && (t.closed = !0), n.push(e + s));
			} else if (an.test(c)) t.element = !0, n.push(mn(s));
			else {
				let a = "";
				if (on.test(c)) {
					let r = Pn(e, l, c);
					if (r === -1) {
						t.unclosed = !0, n.push(mn(s));
						continue;
					}
					a = mn(e.slice(l, r)), i = r;
				}
				let o = jn(r, n, En(c), d, u);
				o === void 0 ? (t.closed = !0, n.push(mn(s) + a)) : n.push(o, s + a);
			}
		} else ln.lastIndex = a, ln.test(e) ? (n.push(e.slice(a, ln.lastIndex)), i = ln.lastIndex) : (e.startsWith("<!--", a) && (t.unclosed = !0), n.push("&lt;"));
	}
	n.push(e.slice(i));
	for (let e = r.length - 1; e >= 0; e--) {
		let i = r[e];
		t.closed = !0, i.namespace === G && i.name === "form" ? n[i.part] = mn(n[i.part]) : n.push(`</${i.name}>`);
	}
	return process.env.NODE_ENV !== "production" && (t.eventHandler && W("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), t.srcdoc && W("Potentially dangerous srcdoc attribute detected in translation. Consider removing srcdoc from your translation messages."), t.element && W("Potentially dangerous element (<base>, <animate>, <set>, <script> or <plaintext>) detected in translation. Consider removing it from your translation messages."), t.unclosed && W("Unclosed tag, comment or element (such as <textarea>) detected in translation. Consider closing it in your translation messages."), t.closed && W("Unclosed or misnested elements detected in translation. Consider closing every element in the right order in your translation messages.")), n.join("");
}
function In() {
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
var Ln = (e) => !H(e) || R(e);
function Rn(e, t) {
	if (Ln(e) || Ln(t) || t === Object.prototype) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			if (r === "__proto__") return;
			let i = e[r];
			if (R(i)) {
				let e = [];
				e.length = i.length, t[r] = e, n.push({
					src: i,
					des: e
				});
			} else H(i) ? ((!H(t[r]) || R(t[r])) && (t[r] = F()), n.push({
				src: i,
				des: t[r]
			})) : t[r] = i;
		});
	}
}
// node_modules/@intlify/message-compiler/dist/message-compiler.mjs
function zn(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function Bn(e, t, n) {
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
}, Vn = {
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
function Hn(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = process.env.NODE_ENV === "production" ? e : Dt((i || Vn)[e] || "", ...a || []), s = SyntaxError(String(o));
	return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Un(e) {
	throw e;
}
var Wn = /<\/?[\w\s="/.':;#-\/]+>/, Gn = (e) => Wn.test(e), q = " ", Kn = "\r", J = "\n", qn = "\u2028", Jn = "\u2029";
function Yn(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Kn && t[e + 1] === J, s = (e) => t[e] === J, c = (e) => t[e] === Jn, l = (e) => t[e] === qn, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? J : t[e], g = () => h(n), _ = () => h(n + a);
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
	function te() {
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
		skipToPeek: te
	};
}
var Xn = void 0, Zn = "	", Qn = "'", $n = "tokenizer";
function er(e, t = {}) {
	let n = t.location !== !1, r = Yn(e), i = () => r.index(), a = () => zn(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
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
			let r = Hn(e, n ? Bn(a.startLoc, t) : null, {
				domain: $n,
				args: i
			});
			u(r);
		}
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = Bn(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
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
		if (e === Xn) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === Xn) return !1;
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
		let r = e.currentPeek() === Qn;
		return e.resetPeek(), r;
	}
	function te(e, t) {
		let { currentType: n } = t;
		if (n !== 7) return !1;
		h(e);
		let r = e.currentPeek() === ".";
		return e.resetPeek(), r;
	}
	function x(e, t) {
		let { currentType: n } = t;
		if (n !== 8) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function S(e, t) {
		let { currentType: n } = t;
		if (n !== 7 && n !== 11) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function ne(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === q || !t ? !1 : t === J ? (e.peek(), r()) : re(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function C(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function re(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? r !== q && r !== J : i === q ? (e.peek(), n(!0, q)) : i !== J || (e.peek(), n(!0, J));
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function w(e, t) {
		let n = e.currentChar();
		if (n !== Xn) return t(n) ? (e.next(), n) : null;
	}
	function ie(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function T(e) {
		return w(e, ie);
	}
	function ae(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function oe(e) {
		return w(e, ae);
	}
	function E(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function D(e) {
		return w(e, E);
	}
	function se(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function ce(e) {
		return w(e, se);
	}
	function le(e) {
		let t = "", n = "";
		for (; t = D(e);) n += t;
		return n;
	}
	function ue(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === q || n === J) {
				if (re(e)) t += n, e.next();
				else if (C(e)) break;
				else t += n, e.next();
			} else t += n, e.next();
		}
		return t;
	}
	function O(e) {
		g(e);
		let t = "", n = "";
		for (; t = oe(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== Xn && r !== q && r !== J && r !== "　") {
			let t = _e(e);
			return d(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === Xn && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function de(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${le(e)}`) : t += le(e), e.currentChar() === Xn && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function fe(e) {
		return e !== Qn && e !== J;
	}
	function pe(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = w(e, fe);) n += t === "\\" ? me(e) : t;
		let r = e.currentChar();
		return r === J || r === Xn ? (d(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === J && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function me(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return he(e, t, 4);
			case "U": return he(e, t, 6);
			default: return d(K.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function he(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ce(e);
			if (!n) {
				d(K.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function ge(e) {
		return e !== "{" && e !== "}" && e !== q && e !== J;
	}
	function _e(e) {
		g(e);
		let t = "", n = "";
		for (; t = w(e, ge);) n += t;
		return n;
	}
	function ve(e) {
		let t = "", n = "";
		for (; t = T(e);) n += t;
		return n;
	}
	function ye(e) {
		return e !== "{" && e !== "@" && e !== "|" && e !== "(" && e !== ")" && e !== q && e !== Zn && e !== J;
	}
	function be(e) {
		for (; e.currentChar() === Zn;) e.next();
		let t = "", n;
		for (; (n = e.currentChar()) && ye(n);) t += n, e.next();
		return t;
	}
	function xe(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function Se(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(K.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(K.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), n = Ce(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (C(e)) return t.braceNest > 0 && d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, xe(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(K.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, we(e, t);
				if (r = y(e, t)) return n = f(t, 4, O(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, de(e)), g(e), n;
				if (o = ee(e, t)) return n = f(t, 6, pe(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, _e(e)), d(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function Ce(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch (n !== 7 && n !== 8 && n !== 11 && n !== 9 || i !== J && i !== q || d(K.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return C(e) ? (r = f(t, 1, xe(e)), t.braceNest = 0, t.inLinked = !1, r) : te(e, t) || S(e, t) ? (g(e), Ce(e, t)) : x(e, t) ? (g(e), f(t, 11, ve(e))) : ne(e, t) ? (g(e), i === "{" ? Se(e, t) || r : f(t, 10, be(e))) : (n === 7 && d(K.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, we(e, t));
		}
	}
	function we(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return Se(e, t) || p(t);
		if (t.inLinked) return Ce(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return Se(e, t) || p(t);
			case "}": return d(K.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return Ce(e, t) || p(t);
			default:
				if (C(e)) return n = f(t, 1, xe(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (re(e)) return f(t, 0, ue(e));
		}
		return n;
	}
	function Te() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === Xn ? f(c, 13) : we(r, c);
	}
	return {
		nextToken: Te,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var tr = "parser", nr = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, rr = /\\([\\@{}|])/g;
function ir(e, t) {
	return t;
}
function ar(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function or(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		if (s.offset += a, s.column += a, n) {
			let e = Hn(r, t ? Bn(i, s) : null, {
				domain: tr,
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
		return r.value = t.replace(rr, ir), a(r, e.currentOffset(), e.currentPosition()), r;
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
		return o.value = t.replace(nr, ar), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, sr(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
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
		switch (o.type !== 9 && r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(o)), n.key = l(e, o.value || "");
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
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, K.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, sr(i)), n.items.push(l(e, i.value || ""));
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
		let o = er(n, P({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, K.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function sr(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function cr(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function lr(e, t) {
	for (let n = 0; n < e.length; n++) ur(e[n], t);
}
function ur(e, t) {
	switch (e.type) {
		case 1:
			lr(e.cases, t), t.helper("plural");
			break;
		case 2:
			lr(e.items, t);
			break;
		case 6:
			ur(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4: t.helper("interpolate"), t.helper("named");
	}
}
function dr(e, t = {}) {
	let n = cr(e);
	n.helper("normalize"), e.body && ur(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function fr(e) {
	let t = e.body;
	return t.type === 2 ? pr(t) : t.cases.forEach((e) => pr(e)), e;
}
function pr(e) {
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
			e.static = Ut(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
var mr = "minifier";
function hr(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			hr(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) hr(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) hr(n[e]);
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
			hr(t.key), t.k = t.key, delete t.key, t.modifier && (hr(t.modifier), t.m = t.modifier, delete t.modifier);
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
		default: if (process.env.NODE_ENV !== "production") throw Hn(K.UNHANDLED_MINIFIER_NODE_TYPE, null, {
			domain: mr,
			args: [e.type]
		});
	}
	delete e.type;
}
var gr = "parser";
function _r(e, t) {
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
function vr(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), Sr(e, t.key), t.modifier ? (e.push(", "), Sr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function yr(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (Sr(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function br(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (Sr(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function xr(e, t) {
	t.body ? Sr(e, t.body) : e.push("null");
}
function Sr(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			xr(e, t);
			break;
		case 1:
			br(e, t);
			break;
		case 2:
			yr(e, t);
			break;
		case 6:
			vr(e, t);
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
		default: if (process.env.NODE_ENV !== "production") throw Hn(K.UNHANDLED_CODEGEN_NODE_TYPE, null, {
			domain: gr,
			args: [t.type]
		});
	}
}
var Cr = (e, t = {}) => {
	let n = B(t.mode) ? t.mode : "normal", r = B(t.filename) ? t.filename : "message.intl";
	t.sourceMap;
	let i = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], s = _r(e, {
		filename: r,
		breakLineCode: i,
		needIndent: a
	});
	s.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), s.indent(a), o.length > 0 && (s.push(`const { ${Ut(o.map((e) => `${e}: _${e}`), ", ")} } = ctx`), s.newline()), s.push("return "), Sr(s, e), s.deindent(a), s.push("}"), delete e.helpers;
	let { code: c, map: l } = s.context();
	return {
		ast: e,
		code: c,
		map: l ? l.toJSON() : void 0
	};
};
function wr(e, t = {}) {
	let n = P({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null || n.optimize, o = or(n).parse(e);
	return r ? (a && fr(o), i && hr(o), {
		ast: o,
		code: ""
	}) : (dr(o, n), Cr(o, n));
}
// node_modules/@intlify/core-base/dist/core-base.mjs
function Tr() {
	typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (It().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (It().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Er(e) {
	return H(e) && Ir(e) === 0 && (I(e, "b") || I(e, "body"));
}
var Dr = ["b", "body"];
function Or(e) {
	return Ur(e, Dr);
}
var kr = ["c", "cases"];
function Ar(e) {
	return Ur(e, kr, []);
}
var jr = ["s", "static"];
function Mr(e) {
	return Ur(e, jr);
}
var Nr = ["i", "items"];
function Pr(e) {
	return Ur(e, Nr, []);
}
var Fr = ["t", "type"];
function Ir(e) {
	return Ur(e, Fr);
}
var Lr = ["v", "value"];
function Rr(e, t) {
	let n = Ur(e, Lr);
	if (n != null) return n;
	throw Gr(t);
}
var zr = ["m", "modifier"];
function Br(e) {
	return Ur(e, zr);
}
var Vr = ["k", "key"];
function Hr(e) {
	let t = Ur(e, Vr);
	if (t) return t;
	throw Gr(6);
}
function Ur(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (I(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var Wr = [
	...Dr,
	...kr,
	...jr,
	...Nr,
	...Vr,
	...zr,
	...Lr,
	...Fr
];
function Gr(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function Kr(e) {
	return (t) => qr(t, e);
}
function qr(e, t) {
	let n = Or(t);
	if (n == null) throw Gr(0);
	if (Ir(n) === 1) {
		let t = Ar(n);
		return e.plural(t.reduce((t, n) => [...t, Jr(e, n)], []));
	}
	return Jr(e, n);
}
function Jr(e, t) {
	let n = Mr(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = Pr(t).reduce((t, n) => [...t, Yr(e, n)], []);
		return e.normalize(n);
	}
}
function Yr(e, t) {
	let n = Ir(t);
	switch (n) {
		case 3: return Rr(t, n);
		case 9: return Rr(t, n);
		case 4: {
			let r = t;
			if (I(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (I(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw Gr(n);
		}
		case 5: {
			let r = t;
			if (I(r, "i") && N(r.i)) return e.interpolate(e.list(r.i));
			if (I(r, "index") && N(r.index)) return e.interpolate(e.list(r.index));
			throw Gr(n);
		}
		case 6: {
			let n = t, r = Br(n), i = Hr(n);
			return e.linked(Yr(e, i), r ? Yr(e, r) : void 0, e.type);
		}
		case 7: return Rr(t, n);
		case 8: return Rr(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var Xr = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Zr(e, t) {
	t && Gn(e) && W(Dt(Xr, { source: e }));
}
var Qr = (e) => e, $r = F();
function ei(e, t = {}) {
	let n = !1, r = t.onError || Un;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...wr(e, t),
		detectError: n
	};
}
/* #__NO_SIDE_EFFECTS__ */
function ti(e, t) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && B(e)) {
		let n = !V(t.warnHtmlMessage) || t.warnHtmlMessage;
		process.env.NODE_ENV !== "production" && Zr(e, n);
		let r = (t.onCacheKey || Qr)(e), i = $r[r];
		if (i) return i;
		let { ast: a, detectError: o } = ei(e, {
			...t,
			location: process.env.NODE_ENV !== "production",
			jit: !0
		}), s = Kr(a);
		return o ? s : $r[r] = s;
	}
	{
		if (!Er(e)) return process.env.NODE_ENV !== "production" && W(`Cannot compile the message of '${t.key}' key, because the message compiler is not included in this build. Pre-compile the message. So translate function returns the message as is.`), (() => e);
		let n = e.cacheKey;
		return n ? $r[n] || ($r[n] = Kr(e)) : Kr(e);
	}
}
var ni = null;
function ri(e) {
	ni = e;
}
function ii(e, t, n) {
	ni && ni.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var ai = /* #__PURE__*/ oi("function:translate");
function oi(e) {
	return (t) => ni && ni.emit(e, t);
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
function si(e) {
	return Hn(e, null, process.env.NODE_ENV === "production" ? void 0 : { messages: ci });
}
var ci = {
	[Y.INVALID_ARGUMENT]: "Invalid arguments",
	[Y.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
	[Y.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
	[Y.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
	[Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
	[Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
	[Y.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function li(e, t) {
	return t.locale == null ? di(e.locale) : di(t.locale);
}
var ui;
function di(e) {
	if (B(e)) return e;
	if (z(e)) {
		if (e.resolvedOnce && ui != null) return ui;
		if (e.constructor.name === "Function") {
			let t = e();
			if (zt(t)) throw si(Y.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return ui = t;
		}
		throw si(Y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	}
	throw si(Y.NOT_SUPPORT_LOCALE_TYPE);
}
function fi(e, t, n) {
	return [.../* @__PURE__ */ new Set([n, ...R(t) ? t : H(t) ? Object.keys(t).filter((e) => e !== "default") : B(t) ? [t] : [n]])];
}
function pi(e, t, n) {
	let r = B(n) ? n : Ai, i = e, a;
	H(t) ? (i.__localeChainObjectCache ||= /* @__PURE__ */ new WeakMap(), a = i.__localeChainObjectCache.get(t), a || (a = /* @__PURE__ */ new Map(), i.__localeChainObjectCache.set(t, a))) : (i.__localeChainCache ||= /* @__PURE__ */ new Map(), a = i.__localeChainCache.get(t), a || (a = /* @__PURE__ */ new Map(), i.__localeChainCache.set(t, a)));
	let o = a.get(r);
	if (o) return o;
	let s = [], c = [n];
	for (; R(c);) c = mi(s, c, t);
	let l = R(t) || !U(t) ? t : t.default ? t.default : null;
	return c = B(l) ? [l] : l, R(c) && mi(s, c, !1), a.set(r, s), s;
}
function mi(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && V(r); i++) {
		let a = t[i];
		B(a) && (r = hi(e, t[i], n));
	}
	return r;
}
function hi(e, t, n) {
	let r, i = t.split("-");
	do
		r = gi(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function gi(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (R(n) || U(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var _i = [];
_i[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, _i[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, _i[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, _i[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, _i[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, _i[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, _i[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var vi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function yi(e) {
	return vi.test(e);
}
function bi(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function xi(e) {
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
function Si(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : yi(t) ? bi(t) : "*" + t;
}
function Ci(e) {
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
			if (i = 0, o === void 0 || (o = Si(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = xi(a), d = _i[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var wi = /* @__PURE__ */ new Map();
function Ti(e, t) {
	return H(e) ? L(e, t) : null;
}
function Ei(e, t) {
	if (!H(e)) return null;
	let n = wi.get(t);
	if (n || (n = Ci(t), n && wi.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (Wr.includes(e) && Er(i) || !H(i) || !I(i, e)) return null;
		let t = i[e];
		if (t === void 0 || z(i)) return null;
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
}, Di = {
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
function Oi(e, ...t) {
	return Dt(Di[e], ...t);
}
var ki = "11.4.22", Ai = "en-US", ji = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Mi() {
	return {
		upper: (e, t) => t === "text" && B(e) ? e.toUpperCase() : t === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && B(e) ? e.toLowerCase() : t === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && B(e) ? ji(e) : t === "vnode" && H(e) && "__v_isVNode" in e ? ji(e.children) : e
	};
}
var Ni;
function Pi(e) {
	Ni = e;
}
var Fi;
function Ii(e) {
	Fi = e;
}
var Li;
function Ri(e) {
	Li = e;
}
var zi = null, Bi = /* @__NO_SIDE_EFFECTS__ */ () => zi, Vi = null, Hi = (e) => {
	Vi = e;
}, Ui = () => Vi, Wi = 0;
function Gi(e = {}) {
	let t = z(e.onWarn) ? e.onWarn : W, n = B(e.version) ? e.version : ki, r = B(e.locale) || z(e.locale) ? e.locale : Ai, i = z(r) ? Ai : r, a = R(e.fallbackLocale) || U(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = U(e.messages) ? e.messages : Ki(i), s = U(e.datetimeFormats) ? e.datetimeFormats : Ki(i), c = U(e.numberFormats) ? e.numberFormats : Ki(i), l = P(F(), e.modifiers, Mi()), u = e.pluralRules || F(), d = z(e.missing) ? e.missing : null, f = V(e.missingWarn) || Mt(e.missingWarn) ? e.missingWarn : !0, p = V(e.fallbackWarn) || Mt(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = z(e.postTranslation) ? e.postTranslation : null, _ = U(e.processor) ? e.processor : null, v = !V(e.warnHtmlMessage) || e.warnHtmlMessage, y = !!e.escapeParameter, b = z(e.messageCompiler) ? e.messageCompiler : Ni;
	process.env.NODE_ENV !== "production" && z(e.messageCompiler) && qt(Oi(X.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
	let ee = z(e.messageResolver) ? e.messageResolver : Fi || Ti, te = z(e.localeFallbacker) ? e.localeFallbacker : Li || fi, x = H(e.fallbackContext) ? e.fallbackContext : void 0, S = e, ne = H(S.__datetimeFormatters) ? S.__datetimeFormatters : /* @__PURE__ */ new Map(), C = H(S.__numberFormatters) ? S.__numberFormatters : /* @__PURE__ */ new Map(), re = H(S.__meta) ? S.__meta : {};
	Wi++;
	let w = {
		version: n,
		cid: Wi,
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
		localeFallbacker: te,
		fallbackContext: x,
		onWarn: t,
		__meta: re
	};
	return w.datetimeFormats = s, w.numberFormats = c, w.__datetimeFormatters = ne, w.__numberFormatters = C, process.env.NODE_ENV !== "production" && (w.__v_emitter = S.__v_emitter == null ? void 0 : S.__v_emitter), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && ii(w, n, re), w;
}
var Ki = (e) => ({ [e]: F() });
function qi(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Ji(e, t) {
	return e instanceof RegExp ? e.test(t) : e;
}
function Yi(e, t, n, r, i) {
	let { missing: a, onWarn: o } = e;
	if (process.env.NODE_ENV !== "production") {
		let r = e.__v_emitter;
		r && r.emit("missing", {
			locale: n,
			key: t,
			type: i,
			groupId: At(i, t)
		});
	}
	if (a !== null) {
		let r = a(e, n, t, i);
		return B(r) ? r : t;
	}
	return process.env.NODE_ENV !== "production" && Ji(r, t) && o(Oi(X.NOT_FOUND_KEY, {
		key: t,
		locale: n,
		resource: i === "datetime format" ? "datetime formats" : i === "number format" ? "number formats" : "messages"
	})), t;
}
function Xi(e, t) {
	let n = e;
	H(t) ? n.__localeChainObjectCache?.delete(t) : n.__localeChainCache?.delete(t);
}
function Zi(e, t, n) {
	Xi(e, n), e.fallbackContext && Xi(e.fallbackContext, n), e.localeFallbacker(e, n, t);
}
function Qi(e, t) {
	return e !== t && e.split("-")[0] === t.split("-")[0];
}
function $i(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Qi(e, t[r])) return !0;
	return !1;
}
function ea(e, t, n, r, i, a, o) {
	let { fallbackLocale: s, localeFallbacker: c, onWarn: l } = e, u = c(e, s, n), d = n;
	for (let s = 0; s < u.length; s++) {
		let c = u[s];
		if (process.env.NODE_ENV !== "production" && n !== c && qi(a, t) && l(Oi(o === "datetime format" ? X.FALLBACK_TO_DATE_FORMAT : X.FALLBACK_TO_NUMBER_FORMAT, {
			key: t,
			target: c
		})), process.env.NODE_ENV !== "production" && n !== c) {
			let n = e.__v_emitter;
			n && n.emit("fallback", {
				type: o,
				key: t,
				from: d,
				to: c,
				groupId: At(o, t)
			});
		}
		if (U(L(L(r, c) || {}, t)) && B(c)) return c;
		Yi(e, t, c, i, o), d = c;
	}
	return null;
}
function ta(e, t, n) {
	let r = `${e}__${t}`;
	return U(n) && !Nt(n) && (r = `${r}__${JSON.stringify(n)}`), r;
}
function na(e, t, n) {
	for (let r in n) {
		let n = `${t}__${r}`;
		for (let t of e.keys()) (t === n || t.startsWith(`${n}__`)) && e.delete(t);
	}
}
function ra(e, t, n, r) {
	let [, i, a, o] = e, s = n;
	return B(i) ? t.key = i : U(i) && Object.keys(i).forEach((e) => {
		r.includes(e) ? s[e] = i[e] : t[e] = i[e];
	}), B(a) ? t.locale = a : U(a) && (s = a), U(o) && (s = o), s;
}
var ia = typeof Intl < "u", aa = {
	dateTimeFormat: ia && Intl.DateTimeFormat !== void 0,
	numberFormat: ia && Intl.NumberFormat !== void 0
};
function oa(e, ...t) {
	let { datetimeFormats: n, unresolving: r, onWarn: i } = e, { __datetimeFormatters: a } = e;
	if (process.env.NODE_ENV !== "production" && !aa.dateTimeFormat) return i(Oi(X.CANNOT_FORMAT_DATE)), "";
	if (!B(t[0]) && !jt(t[0]) && !N(t[0])) return process.env.NODE_ENV !== "production" && i(Oi(X.INVALID_DATE_ARGUMENT, { value: String(t[0]) })), "";
	let [o, s, c, l] = ca(...t), u = V(c.missingWarn) ? c.missingWarn : e.missingWarn, d = V(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = !!c.part, p = li(e, c);
	if (!B(o) || o === "") {
		let e = new Intl.DateTimeFormat(p.replace(/!/g, ""), l);
		return f ? e.formatToParts(s) : e.format(s);
	}
	let m = ea(e, o, p, n, u, d, "datetime format");
	if (!B(m)) return r ? -1 : o;
	let h = n[m][o], g = ta(m, o, l), _ = a.get(g);
	return _ || (_ = new Intl.DateTimeFormat(m, P({}, h, l)), a.set(g, _)), f ? _.formatToParts(s) : _.format(s);
}
var sa = [
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
function ca(...e) {
	let [t] = e, n = F(), r = F(), i;
	if (B(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw si(Y.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		i = new Date(n);
		try {
			i.toISOString();
		} catch {
			throw si(Y.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (jt(t)) {
		if (isNaN(t.getTime())) throw si(Y.INVALID_DATE_ARGUMENT);
		i = t;
	} else if (N(t)) i = t;
	else throw si(Y.INVALID_ARGUMENT);
	let a = ra(e, n, r, sa);
	return [
		n.key || "",
		i,
		n,
		a
	];
}
function la(e, t, n) {
	na(e.__datetimeFormatters, t, n);
}
function ua(e, ...t) {
	let { numberFormats: n, unresolving: r, onWarn: i } = e, { __numberFormatters: a } = e;
	if (process.env.NODE_ENV !== "production" && !aa.numberFormat) return i(Oi(X.CANNOT_FORMAT_NUMBER)), "";
	if (!N(t[0])) return process.env.NODE_ENV !== "production" && i(Oi(X.INVALID_NUMBER_ARGUMENT, { value: String(t[0]) })), "";
	let [o, s, c, l] = fa(...t), u = V(c.missingWarn) ? c.missingWarn : e.missingWarn, d = V(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = !!c.part, p = li(e, c);
	if (!B(o) || o === "") {
		let e = new Intl.NumberFormat(p.replace(/!/g, ""), l);
		return f ? e.formatToParts(s) : e.format(s);
	}
	let m = ea(e, o, p, n, u, d, "number format");
	if (!B(m)) return r ? -1 : o;
	let h = n[m][o], g = ta(m, o, l), _ = a.get(g);
	return _ || (_ = new Intl.NumberFormat(m, P({}, h, l)), a.set(g, _)), f ? _.formatToParts(s) : _.format(s);
}
var da = [
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
function fa(...e) {
	let [t] = e, n = F(), r = F();
	if (!N(t)) throw si(Y.INVALID_ARGUMENT);
	let i = t, a = ra(e, n, r, da);
	return [
		n.key || "",
		i,
		n,
		a
	];
}
function pa(e, t, n) {
	na(e.__numberFormatters, t, n);
}
var ma = (e) => e, ha = (e) => "", ga = "text", _a = (e) => e.length === 0 ? "" : Ut(e), va = Ht;
function ya(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function ba(e) {
	let t = N(e.pluralIndex) ? e.pluralIndex : -1;
	return N(e.named?.count) ? e.named.count : N(e.named?.n) ? e.named.n : t;
}
function xa(e = {}) {
	let t = e.locale, n = ba(e), r = B(t) && e.pluralRules && z(L(e.pluralRules, t)) ? e.pluralRules[t] : ya, i = r === ya ? void 0 : ya, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || F(), l = N(e.pluralIndex), u = (t) => {
		let n = Rt(t) ? L(c, t) : c[t];
		return l && !n && (t === "count" || t === "n") ? e.pluralIndex : n;
	};
	function d(t, n) {
		return (z(e.messages) ? e.messages(t, !!n) : H(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : ha);
	}
	let f = (t) => e.modifiers ? L(e.modifiers, t) : ma, p = z(e.processor?.normalize) ? e.processor.normalize : _a, m = z(e.processor?.interpolate) ? e.processor.interpolate : va, h = {
		list: s,
		named: u,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? H(n) ? (a = n.modifier || a, i = n.type || i) : B(n) && (a = n || a) : t.length === 2 && (B(n) && (a = n || a), B(r) && (i = r || i));
			let o = d(e, !0)(h), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && R(s) && a ? s[0] : s;
			if (!a) return c;
			let l = f(a);
			return z(l) ? l(c, i) : (process.env.NODE_ENV !== "production" && qt(`Not found '${a}' modifier for the linked message of '${e}' key. Use a built-in modifier, or set a custom modifier with 'modifiers' option. So the linked message is used as is.`), c);
		},
		message: d,
		type: B(e.processor?.type) ? e.processor.type : ga,
		interpolate: m,
		normalize: p,
		values: P(F(), o, c, l ? {
			count: u("count"),
			n: u("n")
		} : {})
	};
	return h;
}
var Sa = () => "", Ca = (e) => z(e), wa = (e) => B(e) || Er(e) || Ca(e);
function Ta(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = Ma(...t), u = V(l.missingWarn) ? l.missingWarn : e.missingWarn, d = V(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = V(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = B(l.default) || V(l.default) ? V(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (B(m) || z(m)), g = li(e, l);
	f && Ea(l);
	let [_, v, y] = p ? [
		c,
		g,
		L(s, g) || F()
	] : ka(e, c, g, o, d, u), b = _, ee = c;
	if (!p && !wa(b) && h && (b = m, ee = b), !p && (!wa(b) || !B(v))) return i ? -1 : c;
	process.env.NODE_ENV !== "production" && B(b) && e.messageCompiler == null && W("The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function returns the message as is.");
	let te = !1, x = Ca(b) ? b : Aa(e, c, v, b, ee, () => {
		te = !0;
	});
	if (te) return b;
	let S = ja(e, x, xa(Fa(e, v, y, l, f))), ne = r ? r(S, c) : S;
	if (f && B(ne) && (ne = Fn(ne)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
		let t = {
			timestamp: Date.now(),
			key: B(c) ? c : Ca(b) ? b.key : "",
			locale: v || (Ca(b) ? b.locale : ""),
			format: B(b) ? b : Ca(b) ? b.source : "",
			message: ne
		};
		t.meta = P({}, e.__meta, /* @__PURE__ */ Bi() || {}), ai(t);
	}
	return ne;
}
function Ea(e) {
	if (R(e.list) && (e.list = e.list.map((e) => B(e) ? Jt(e) : e)), H(e.named)) {
		let t = e.named, n = F();
		for (let e of Object.keys(t)) {
			let r = t[e];
			n[e] = B(r) ? Jt(r) : r;
		}
		e.named = n;
	}
}
function Da(e) {
	return B(e) ? e : Jt(Ht(e));
}
function Oa(e, t) {
	return !t || z(e?.interpolate) ? e : P({}, e, { interpolate: Da });
}
function ka(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = F(), f, p = null, m = n, h = null, g = "translate";
	for (let r = 0; r < u.length; r++) {
		f = h = u[r], process.env.NODE_ENV !== "production" && n !== f && !Qi(n, f) && qi(i, t) && s(Oi(X.FALLBACK_TO_TRANSLATE, {
			key: t,
			target: f
		}));
		let l = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter;
		process.env.NODE_ENV !== "production" && n !== f && l && l.emit("fallback", {
			type: g,
			key: t,
			from: m,
			to: h,
			groupId: At(g, t)
		}), d = L(o, f) || F();
		let _ = null, v, y;
		if (process.env.NODE_ENV !== "production" && A && l && (_ = window.performance.now(), v = "intlify-message-resolve-start", y = "intlify-message-resolve-end", j && j(v)), (p = c(d, t)) === null && (p = L(d, t)), process.env.NODE_ENV !== "production" && A && l) {
			let e = window.performance.now();
			l && _ && p && l.emit("message-resolve", {
				type: "message-resolve",
				key: t,
				message: p,
				time: e - _,
				groupId: At(g, t)
			}), v && y && j && Tt && (j(y), Tt("intlify message resolve", v, y));
		}
		if (wa(p)) break;
		if (!$i(f, u)) {
			let n = Yi(e, t, f, a, g);
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
function Aa(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (Ca(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, l = null, u, d;
	process.env.NODE_ENV !== "production" && A && c && (l = window.performance.now(), u = "intlify-message-compilation-start", d = "intlify-message-compilation-end", j && j(u));
	let f = o(r, Na(e, n, i, r, s, a));
	if (process.env.NODE_ENV !== "production" && A && c) {
		let e = window.performance.now();
		c && l && c.emit("message-compilation", {
			type: "message-compilation",
			message: r,
			time: e - l,
			groupId: At("translate", t)
		}), u && d && j && Tt && (j(d), Tt("intlify message compilation", u, d));
	}
	return f.locale = n, f.key = t, f.source = r, f;
}
function ja(e, t, n) {
	let r = process.env.NODE_ENV === "production" ? void 0 : e.__v_emitter, i = null, a, o;
	process.env.NODE_ENV !== "production" && A && r && (i = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", j && j(a));
	let s = t(n);
	if (process.env.NODE_ENV !== "production" && A && r) {
		let e = window.performance.now();
		r && i && r.emit("message-evaluation", {
			type: "message-evaluation",
			value: s,
			time: e - i,
			groupId: At("translate", t.key)
		}), a && o && j && Tt && (j(o), Tt("intlify message evaluation", a, o));
	}
	return s;
}
function Ma(...e) {
	let [t, n, r] = e, i = F();
	if (!B(t) && !N(t) && !Ca(t) && !Er(t)) throw si(Y.INVALID_ARGUMENT);
	let a = N(t) ? String(t) : (Ca(t), t);
	return N(n) ? i.plural = n : B(n) ? i.default = n : U(n) && !Nt(n) ? i.named = n : R(n) && (i.list = n), N(r) ? i.plural = r : B(r) ? i.default = r : U(r) && P(i, r), [a, i];
}
function Na(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (t) => {
			if (a && a(t), process.env.NODE_ENV !== "production") {
				let i = Pa(r), a = t.location && i && Gt(i, t.location.start.offset, t.location.end.offset), o = e.__v_emitter;
				o && i && o.emit("compile-error", {
					message: i,
					error: t.message,
					start: t.location && t.location.start.offset,
					end: t.location && t.location.end.offset,
					groupId: At("translate", n)
				});
				let s = `Message compilation error: ${t.message}`;
				throw SyntaxError(a ? `${s}\n${a}` : s);
			}
			throw t;
		},
		onCacheKey: (e) => Ot(t, n, e)
	};
}
function Pa(e) {
	if (B(e)) return e;
	if (e.loc && e.loc.source) return e.loc.source;
}
function Fa(e, t, n, r, i) {
	let { modifiers: a, pluralRules: o, messageResolver: s, fallbackLocale: c, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, f = {
		locale: t,
		modifiers: a,
		pluralRules: o,
		messages: (r, i) => {
			let a = s(n, r);
			if (a == null && (d || i)) {
				let [n, , i] = ka(d || e, r, t, c, l, u);
				a = n ?? s(i, r);
			}
			if (B(a) || Er(a)) {
				let n = !1, i = Aa(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? Sa : i;
			}
			return Ca(a) ? a : Sa;
		}
	}, p = Oa(e.processor, i);
	return p && (f.processor = p), r.list && (f.list = r.list), r.named && (f.named = r.named), N(r.plural) && (f.pluralIndex = r.plural), f;
}
Tr();
// node_modules/@vue/devtools-api/lib/esm/env.js
function Ia() {
	return La().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function La() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var Ra = typeof Proxy == "function", za = "devtools-plugin:setup", Ba = "plugin:settings:set", Va, Ha;
function Ua() {
	return Va === void 0 && (typeof window < "u" && window.performance ? (Va = !0, Ha = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (Va = !0, Ha = globalThis.perf_hooks.performance) : Va = !1), Va;
}
function Wa() {
	return Ua() ? Ha.now() : Date.now();
}
// node_modules/@vue/devtools-api/lib/esm/proxy.js
var Ga = class {
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
				return Wa();
			}
		}, t && t.on(Ba, (e, t) => {
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
function Ka(e, t) {
	let n = e, r = La(), i = Ia(), a = Ra && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(za, e, t);
	else {
		let e = a ? new Ga(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
// node_modules/vue-i18n/dist/vue-i18n.mjs
var qa = "11.4.22";
function Ja() {
	typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (It().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (It().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (It().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (It().__INTLIFY_PROD_DEVTOOLS__ = !1);
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
	return Hn(e, null, process.env.NODE_ENV === "production" ? void 0 : {
		messages: Ya,
		args: t
	});
}
var Ya = {
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
}, Xa = /* #__PURE__*/ M("__translateVNode"), Za = /* #__PURE__*/ M("__datetimeParts"), Qa = /* #__PURE__*/ M("__numberParts"), $a = /* #__PURE__*/ M("__enableEmitter"), eo = /* #__PURE__*/ M("__disableEmitter"), to = M("__setPluralRules");
M("__intlifyMeta");
var no = /* #__PURE__*/ M("__injectWithOption"), ro = /* #__PURE__*/ M("__dispose"), $ = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15,
	IGNORE_UNSAFE_LOCALE: 16
}, io = {
	[$.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
	[$.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
	[$.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
	[$.DEPRECATE_LEGACY_MODE]: "Legacy API mode has been deprecated in v11. Use Composition API mode instead.\nAbout how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html",
	[$.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
	[$.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component.",
	[$.IGNORE_UNSAFE_LOCALE]: "Ignore '{locale}' locale: it is a property name of Object.prototype"
};
function ao(e, ...t) {
	return Dt(io[e], ...t);
}
var oo = null;
{
	let e = It().__VUE_INSTANCE_SETTERS__;
	R(e) && e.push((e) => {
		oo = e;
	});
}
function so(e) {
	return Rt(e) ? (process.env.NODE_ENV !== "production" && W(ao($.IGNORE_UNSAFE_LOCALE, { locale: e })), !0) : !1;
}
function co(e) {
	if (!H(e) || Er(e)) return e;
	for (let t in e) if (I(e, t)) {
		if (!t.includes(".")) H(e[t]) && co(e[t]);
		else {
			let n = t.split("."), r = n.length - 1, i = e, a = !1;
			for (let e = 0; e < r; e++) {
				if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
				if (n[e] in i || (i[n[e]] = F()), !H(i[n[e]])) {
					process.env.NODE_ENV !== "production" && W(ao($.IGNORE_OBJ_FLATTEN, { key: n[e] })), a = !0;
					break;
				}
				if (Er(i[n[e]]) && (Wr.includes(n[e + 1]) || n[e + 1] === "cacheKey")) {
					a = !0;
					break;
				}
				i = i[n[e]];
			}
			a || (i[n[r]] = e[t], delete e[t]);
			let o = i[n[r]];
			H(o) && co(o);
		}
	}
	return e;
}
function lo(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = U(n) ? n : R(r) ? F() : { [e]: F() };
	if (R(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			if (t) {
				if (so(t)) return;
				o[t] = L(o, t) || F(), Rn(n, o[t]);
			} else Rn(n, o);
		} else B(e) && Rn(JSON.parse(e), o);
	}), i == null && a) for (let e in o) I(o, e) && co(o[e]);
	return o;
}
function uo(e) {
	return e.type;
}
function fo(e, t, n) {
	let r = H(t.messages) ? t.messages : F();
	"__i18nGlobal" in n && (r = lo(e.locale.value, {
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
function po(e) {
	return c(t, null, e, 0);
}
function mo() {
	return oo ?? d();
}
var ho = () => [], go = () => !1, _o = 0;
function vo(e) {
	return ((t, n, r, i) => e(n, r, mo() || void 0, i));
}
function yo(e = {}) {
	let { __root: t, __injectWithOption: r } = e, i = t === void 0, a = e.flatJson, o = A ? ee : ne, s = !V(e.inheritLocale) || e.inheritLocale, c = o(t && s ? t.locale.value : B(e.locale) ? e.locale : Ai), l = o(t && s ? t.fallbackLocale.value : B(e.fallbackLocale) || R(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(lo(c.value, e)), d = o(U(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(U(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : V(e.missingWarn) || Mt(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : V(e.fallbackWarn) || Mt(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : !V(e.fallbackRoot) || e.fallbackRoot, g = !!e.fallbackFormat, _ = z(e.missing) ? e.missing : null, v = z(e.missing) ? vo(e.missing) : null, y = z(e.postTranslation) ? e.postTranslation : null, b = t ? t.warnHtmlMessage : !V(e.warnHtmlMessage) || e.warnHtmlMessage, te = !!e.escapeParameter, x = t ? t.modifiers : U(e.modifiers) ? e.modifiers : {}, S = e.pluralRules || t && t.pluralRules, C;
	C = (() => {
		i && Hi(null);
		let t = {
			version: qa,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: x,
			pluralRules: S,
			missing: v === null ? void 0 : v,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: y === null ? void 0 : y,
			warnHtmlMessage: b,
			escapeParameter: te,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value;
		let n = Gi(t);
		return i && Hi(n), n;
	})(), Zi(C, c.value, l.value);
	function re() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let w = n({
		get: () => c.value,
		set: (e) => {
			C.locale = e, c.value = e;
		}
	});
	function T(e) {
		i || (C.fallbackContext = Ui());
		try {
			return e();
		} finally {
			i || (C.fallbackContext = void 0);
		}
	}
	function ae(e) {
		T(() => Zi(C, c.value, e));
	}
	let oe = n({
		get: () => l.value,
		set: (e) => {
			l.value = e, C.fallbackLocale = l.value, ae(l.value);
		}
	}), E = n(() => u.value), D = /* #__PURE__*/ n(() => d.value), se = /* #__PURE__*/ n(() => f.value);
	function ce() {
		return z(y) ? y : null;
	}
	function le(e) {
		y = e, C.postTranslation = e;
	}
	function ue() {
		return _;
	}
	function O(e) {
		e !== null && (v = vo(e)), _ = e, C.missing = v;
	}
	function de(e, t) {
		return e !== "translate" || !t.resolvedMessage;
	}
	let fe = (e, n, r, i, a, o) => {
		re();
		let s;
		try {
			process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s = T(() => e(C));
		} finally {
			process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__;
		}
		if (r !== "translate exists" && N(s) && s === -1 || r === "translate exists" && !s) {
			let [e, o] = n();
			if (process.env.NODE_ENV !== "production" && t && B(e) && de(r, o) && (h && (qi(m, e) || Ji(p, e)) && W(ao($.FALLBACK_TO_ROOT, {
				key: e,
				type: r
			})), process.env.NODE_ENV !== "production")) {
				let { __v_emitter: t } = C;
				t && h && t.emit("fallback", {
					type: r,
					key: e,
					to: "global",
					groupId: At(r, e)
				});
			}
			return t && h ? i(t) : a(e);
		}
		if (o(s)) return s;
		/* istanbul ignore next */
		throw Q(Z.UNEXPECTED_RETURN_TYPE);
	};
	function pe(...e) {
		return fe((t) => Reflect.apply(Ta, null, [t, ...e]), () => Ma(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => B(e));
	}
	function me(...e) {
		let [t, n, r] = e;
		if (r && !H(r)) throw Q(Z.INVALID_ARGUMENT);
		return pe(t, n, P({ resolvedMessage: !0 }, r || {}));
	}
	function he(...e) {
		return fe((t) => Reflect.apply(oa, null, [t, ...e]), () => ca(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => B(e) || R(e));
	}
	function ge(...e) {
		return fe((t) => Reflect.apply(ua, null, [t, ...e]), () => fa(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => B(e) || R(e));
	}
	function _e(e) {
		return e.map((e) => B(e) || N(e) || V(e) ? po(String(e)) : e);
	}
	let ve = {
		normalize: _e,
		interpolate: (e) => e,
		type: "vnode"
	};
	function ye(...e) {
		return fe((t) => {
			let n, r = t;
			try {
				r.processor = ve, n = Reflect.apply(Ta, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => Ma(...e), "translate", (t) => t[Xa](...e), (e) => [po(e)], (e) => R(e));
	}
	function be(...e) {
		return fe((t) => Reflect.apply(ua, null, [t, ...e]), () => fa(...e), "number format", (t) => t[Qa](...e), ho, (e) => B(e) || R(e));
	}
	function xe(...e) {
		return fe((t) => Reflect.apply(oa, null, [t, ...e]), () => ca(...e), "datetime format", (t) => t[Za](...e), ho, (e) => B(e) || R(e));
	}
	function Se(e) {
		S = e, C.pluralRules = S;
	}
	function Ce(e, t) {
		let n = De(e), r = C.messageResolver(n, t);
		return r === null ? L(n, t) : r;
	}
	function we(e, t) {
		return fe(() => {
			if (!e) return !1;
			let n = B(t) ? t : c.value, r = B(t) ? [n] : C.localeFallbacker(C, l.value, n);
			for (let t = 0; t < r.length; t++) if (wa(Ce(r[t], e))) return !0;
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), go, (e) => V(e));
	}
	function Te(e) {
		let t = null, n = C.localeFallbacker(C, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = Ce(n[r], e);
			if (i != null) {
				t = i;
				break;
			}
		}
		return t;
	}
	function Ee(e) {
		return Te(e) ?? (t && t.tm(e) || {});
	}
	function De(e) {
		return L(u.value, e) || {};
	}
	function Oe(e, t) {
		so(e) || (a && co(t), u.value[e] = t, C.messages = u.value);
	}
	function ke(e, t) {
		so(e) || (u.value[e] = L(u.value, e) || {}, a && co(t), Rn(t, u.value[e]), C.messages = u.value);
	}
	function Ae(e) {
		return L(d.value, e) || {};
	}
	function je(e, t) {
		so(e) || (d.value[e] = t, C.datetimeFormats = d.value, la(C, e, t));
	}
	function Me(e, t) {
		so(e) || (d.value[e] = P(L(d.value, e) || {}, t), C.datetimeFormats = d.value, la(C, e, t));
	}
	function Ne(e) {
		return L(f.value, e) || {};
	}
	function Pe(e, t) {
		so(e) || (f.value[e] = t, C.numberFormats = f.value, pa(C, e, t));
	}
	function Fe(e, t) {
		so(e) || (f.value[e] = P(L(f.value, e) || {}, t), C.numberFormats = f.value, pa(C, e, t));
	}
	_o++, ie(l, () => ae(l.value), {
		deep: !0,
		flush: "sync"
	}), t && A && (ie(t.locale, (e) => {
		s && (c.value = e, C.locale = e, Zi(C, c.value, l.value));
	}), ie(t.fallbackLocale, (e) => {
		s && (l.value = e, C.fallbackLocale = l.value, Zi(C, c.value, l.value));
	}));
	let k = {
		id: _o,
		locale: w,
		fallbackLocale: oe,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (w.value = t.locale.value, oe.value = t.fallbackLocale.value);
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: E,
		get modifiers() {
			return x;
		},
		get pluralRules() {
			return S || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, C.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, C.fallbackWarn = m;
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
			g = e, C.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return b;
		},
		set warnHtmlMessage(e) {
			b = e, C.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return te;
		},
		set escapeParameter(e) {
			te = e, C.escapeParameter = e;
		},
		t: pe,
		getLocaleMessage: De,
		setLocaleMessage: Oe,
		mergeLocaleMessage: ke,
		getPostTranslationHandler: ce,
		setPostTranslationHandler: le,
		getMissingHandler: ue,
		setMissingHandler: O,
		[to]: Se
	};
	return k.datetimeFormats = D, k.numberFormats = se, k.rt = me, k.te = we, k.tm = Ee, k.d = he, k.n = ge, k.getDateTimeFormat = Ae, k.setDateTimeFormat = je, k.mergeDateTimeFormat = Me, k.getNumberFormat = Ne, k.setNumberFormat = Pe, k.mergeNumberFormat = Fe, k[no] = r, k[Xa] = ye, k[Za] = xe, k[Qa] = be, process.env.NODE_ENV !== "production" && (k[$a] = (e) => {
		C.__v_emitter = e;
	}, k[eo] = () => {
		C.__v_emitter = void 0;
	}), k;
}
var bo = "vue-i18n: composer properties", xo = {
	"vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
	"vue-i18n-resource-inspector": "Vue I18n DevTools",
	"vue-i18n-timeline": "Vue I18n"
}, So = { "vue-i18n-resource-inspector": "Search for scopes ..." }, Co = { "vue-i18n-timeline": 16764185 }, wo;
async function To(e, t) {
	return new Promise((n, r) => {
		try {
			Ka({
				id: "vue-devtools-plugin-vue-i18n",
				label: xo["vue-devtools-plugin-vue-i18n"],
				packageName: "vue-i18n",
				homepage: "https://vue-i18n.intlify.dev",
				logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
				componentStateTypes: [bo],
				app: e
			}, (r) => {
				wo = r, r.on.visitComponentTree(({ componentInstance: e, treeNode: n }) => {
					Do(e, n, t);
				}), r.on.inspectComponent(({ componentInstance: e, instanceData: n }) => {
					e.__VUE_I18N__ && n && (t.mode === "legacy" ? e.__VUE_I18N__ !== t.global.__composer && Oo(n, e.__VUE_I18N__) : Oo(n, e.__VUE_I18N__));
				}), r.addInspector({
					id: "vue-i18n-resource-inspector",
					label: xo["vue-i18n-resource-inspector"],
					icon: "language",
					treeFilterPlaceholder: So["vue-i18n-resource-inspector"]
				}), r.on.getInspectorTree((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && Po(n, t);
				});
				let i = /* @__PURE__ */ new Map();
				r.on.getInspectorState(async (n) => {
					if (n.app === e && n.inspectorId === "vue-i18n-resource-inspector") {
						if (r.unhighlightElement(), Lo(n, t), n.nodeId === "global") {
							if (!i.has(n.app)) {
								let [e] = await r.getComponentInstances(n.app);
								i.set(n.app, e);
							}
							r.highlightElement(i.get(n.app));
						} else {
							let e = Fo(n.nodeId, t);
							e && r.highlightElement(e);
						}
					}
				}), r.on.editInspectorState((n) => {
					n.app === e && n.inspectorId === "vue-i18n-resource-inspector" && Bo(n, t);
				}), r.addTimelineLayer({
					id: "vue-i18n-timeline",
					label: xo["vue-i18n-timeline"],
					color: Co["vue-i18n-timeline"]
				}), n(!0);
			});
		} catch (e) {
			console.error(e), r(!1);
		}
	});
}
function Eo(e) {
	return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Do(e, t, n) {
	let r = n.mode === "composition" ? n.global : n.global.__composer;
	if (e && e.__VUE_I18N__ && e.__VUE_I18N__ !== r) {
		let n = {
			label: `i18n (${Eo(e)} Scope)`,
			textColor: 0,
			backgroundColor: 16764185
		};
		t.tags.push(n);
	}
}
function Oo(e, t) {
	let n = bo;
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
		value: ko(t.messages.value)
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
function ko(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		let r = e[n];
		z(r) && "source" in r ? t[n] = No(r) : Er(r) && r.loc && r.loc.source ? t[n] = r.loc.source : H(r) ? t[n] = ko(r) : t[n] = r;
	}), t;
}
var Ao = {
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"&": "&amp;"
};
function jo(e) {
	return e.replace(/[<>"&]/g, Mo);
}
function Mo(e) {
	return Ao[e] || e;
}
function No(e) {
	return { _custom: {
		type: "function",
		display: `<span>ƒ</span> ${e.source ? `("${jo(e.source)}")` : "(?)"}`
	} };
}
function Po(e, t) {
	e.rootNodes.push({
		id: "global",
		label: "Global Scope"
	});
	let n = t.mode === "composition" ? t.global : t.global.__composer;
	for (let [r, i] of t.__instances) {
		let a = t.mode === "composition" ? i : i.__composer;
		n !== a && e.rootNodes.push({
			id: a.id.toString(),
			label: `${Eo(r)} Scope`
		});
	}
}
function Fo(e, t) {
	let n = null;
	if (e !== "global") {
		for (let [r, i] of t.__instances.entries()) if (i.id.toString() === e) {
			n = r;
			break;
		}
	}
	return n;
}
function Io(e, t) {
	if (e === "global") return t.mode === "composition" ? t.global : t.global.__composer;
	{
		let n = Array.from(t.__instances.values()).find((t) => t.id.toString() === e);
		return n ? t.mode === "composition" ? n : n.__composer : null;
	}
}
function Lo(e, t) {
	let n = Io(e.nodeId, t);
	return n && (e.state = Ro(n)), null;
}
function Ro(e) {
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
		value: ko(e.messages.value)
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
function zo(e, t) {
	if (wo) {
		let n;
		t && "groupId" in t && (n = t.groupId, delete t.groupId), wo.addTimelineEvent({
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
function Bo(e, t) {
	let n = Io(e.nodeId, t);
	if (n) {
		let [t] = e.path;
		t === "locale" && B(e.state.value) ? n.locale.value = e.state.value : t === "fallbackLocale" && (B(e.state.value) || R(e.state.value) || H(e.state.value)) ? n.fallbackLocale.value = e.state.value : t === "inheritLocale" && V(e.state.value) && (n.inheritLocale = e.state.value);
	}
}
var Vo = /* @__PURE__ */ new WeakMap();
function Ho(e) {
	if (!Mt(e)) return !e;
	let t = Vo.get(e);
	return t || (t = RegExp(`^(?![\\s\\S]*(?:${e.source}))`, e.flags.replace(/[gy]/g, "")), Vo.set(e, t), Vo.set(t, e)), t;
}
function Uo(e) {
	let t = B(e.locale) ? e.locale : Ai, n = B(e.fallbackLocale) || R(e.fallbackLocale) || U(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = z(e.missing) ? e.missing : void 0, i = V(e.silentTranslationWarn) || Mt(e.silentTranslationWarn) ? Ho(e.silentTranslationWarn) : !0, a = V(e.silentFallbackWarn) || Mt(e.silentFallbackWarn) ? Ho(e.silentFallbackWarn) : !0, o = !V(e.fallbackRoot) || e.fallbackRoot, s = !!e.formatFallbackMessages, c = U(e.modifiers) ? e.modifiers : {}, l = e.pluralizationRules, u = z(e.postTranslation) ? e.postTranslation : void 0, d = !B(e.warnHtmlInMessage) || e.warnHtmlInMessage !== "off", f = !!e.escapeParameterHtml, p = !V(e.sync) || e.sync, m = e.messages;
	if (U(e.sharedMessages)) {
		let t = e.sharedMessages;
		m = Object.keys(t).reduce((e, n) => (so(n) || P(L(e, n) || (e[n] = {}), t[n]), e), m || {});
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
function Wo(e = {}) {
	let t = yo(Uo(e)), { __extender: n } = e, r = {
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
			return Ho(t.missingWarn);
		},
		set silentTranslationWarn(e) {
			t.missingWarn = Ho(e);
		},
		get silentFallbackWarn() {
			return Ho(t.fallbackWarn);
		},
		set silentFallbackWarn(e) {
			t.fallbackWarn = Ho(e);
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
		n[$a] && n[$a](e);
	}, r.__disableEmitter = () => {
		let e = t;
		e[eo] && e[eo]();
	}), r;
}
function Go(e, t, n) {
	return {
		beforeCreate() {
			let r = mo();
			/* istanbul ignore if */
			if (!r) throw Q(Z.UNEXPECTED_ERROR);
			let i = this.$options;
			if (i.i18n) {
				let r = P({}, i.i18n);
				if (i.__i18n && (r.__i18n = i.__i18n), r.__root = t, this === this.$root) this.$i18n = Ko(e, r);
				else {
					r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = Wo(r);
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else if (i.__i18n) {
				if (this === this.$root) this.$i18n = Ko(e, i);
				else {
					this.$i18n = Wo({
						__i18n: i.__i18n,
						__injectWithOption: !0,
						__extender: n.__vueI18nExtend,
						__root: t
					});
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else this.$i18n = e;
			i.__i18nGlobal && fo(t, i, i), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = (e) => this.$i18n.tm(e), n.__setInstance(r, this.$i18n);
		},
		mounted() {
			/* istanbul ignore if */
			if (process.env.NODE_ENV !== "production" && this.$i18n) {
				let e = mo();
				if (!e) return;
				let t = this.$i18n;
				e.__VUE_I18N__ = t.__composer;
				let n = this.__v_emitter = In();
				t.__enableEmitter && t.__enableEmitter(n), n.on("*", zo);
			}
		},
		unmounted() {
			let e = mo();
			/* istanbul ignore if */
			if (!e) throw Q(Z.UNEXPECTED_ERROR);
			let t = this.$i18n;
			process.env.NODE_ENV !== "production" && e.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", zo), delete this.__v_emitter), t && (t.__disableEmitter && t.__disableEmitter(), delete e.__VUE_I18N__)), t && (delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t?.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender), n.__deleteInstance(e), delete this.$i18n);
		}
	};
}
function Ko(e, t) {
	e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[to](t.pluralizationRules || e.pluralizationRules);
	let n = lo(e.locale, {
		messages: t.messages,
		__i18n: t.__i18n
	});
	return Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
}
var qo = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Jo({ slots: t }, n) {
	return n.length === 1 && n[0] === "default" ? (t.default ? t.default() : []).reduce((t, n) => [...t, ...n.type === e ? n.children : [n]], []) : n.reduce((e, n) => {
		let r = t[n];
		return r && (e[n] = r()), e;
	}, F());
}
function Yo() {
	return e;
}
var Xo = /* @__PURE__ */ l({
	name: "i18n-t",
	props: P({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => N(e) || !isNaN(e)
		}
	}, qo),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || ss({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = () => {
				let r = Object.keys(n).filter((e) => e[0] !== "_"), a = F();
				e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = B(e.plural) ? +e.plural : e.plural);
				let o = Jo(t, r);
				return i[Xa](e.keypath, o, a);
			}, o = P(F(), r), s = B(e.tag) || H(e.tag) ? e.tag : Yo();
			return H(s) ? p(s, o, { default: a }) : p(s, o, a());
		};
	}
});
function Zo(e) {
	return R(e) && !B(e[0]);
}
function Qo(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = () => {
			let t = { part: !0 }, a = F();
			e.locale && (t.locale = e.locale), B(e.format) ? t.key = e.format : H(e.format) && (B(e.format.key) && (t.key = e.format.key), a = Object.keys(e.format).reduce((t, r) => n.includes(r) ? P(F(), t, { [r]: e.format[r] }) : t, F()));
			let o = r(e.value, t, a), s = [t.key];
			return R(o) ? s = o.map((e, t) => {
				let n = i[e.type], r = n ? n({
					[e.type]: e.value,
					index: t,
					parts: o
				}) : [e.value];
				return Zo(r) && (r[0].key = `${e.type}-${t}`), r;
			}) : B(o) && (s = [o]), s;
		}, o = P(F(), a), s = B(e.tag) || H(e.tag) ? e.tag : Yo();
		return H(s) ? p(s, o, { default: t }) : p(s, o, t());
	};
}
var $o = /* @__PURE__ */ l({
	name: "i18n-n",
	props: P({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, qo),
	setup(e, t) {
		let n = e.i18n || ss({
			useScope: e.scope,
			__useComponent: !0
		});
		return Qo(e, t, da, (...e) => n[Qa](...e));
	}
});
function es(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function ts(e) {
	let t = (t) => {
		process.env.NODE_ENV !== "production" && qt(ao($.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE));
		let { instance: n, value: r } = t;
		/* istanbul ignore if */
		if (!n || !n.$) throw Q(Z.UNEXPECTED_ERROR);
		let i = es(e, n.$), a = ns(r);
		return [Reflect.apply(i.t, i, [...rs(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			A && (e.__i18nWatcher = ie(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			A && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = ns(t);
				e.textContent = Reflect.apply(n.t, n, [...rs(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function ns(e) {
	if (B(e)) return { path: e };
	if (U(e)) {
		if (!("path" in e)) throw Q(Z.REQUIRED_VALUE, "path");
		return e;
	}
	throw Q(Z.INVALID_VALUE);
}
function rs(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return B(n) && (o.locale = n), N(i) && (o.plural = i), N(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function is(e, t, ...n) {
	let r = U(n[0]) ? n[0] : {};
	(!V(r.globalInstall) || r.globalInstall) && ([Xo.name, "I18nT"].forEach((t) => e.component(t, Xo)), [$o.name, "I18nN"].forEach((t) => e.component(t, $o)), [vs.name, "I18nD"].forEach((t) => e.component(t, vs))), e.directive("t", ts(t));
}
var as = /* #__PURE__*/ M("global-vue-i18n");
function os(e = {}) {
	let t = __VUE_I18N_LEGACY_API__ && V(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__;
	process.env.NODE_ENV !== "production" && t && qt(ao($.DEPRECATE_LEGACY_MODE));
	let n = !V(e.globalInjection) || e.globalInjection, r = /* @__PURE__ */ new Map(), [i, a] = cs(e, t), o = /* #__PURE__*/ M(process.env.NODE_ENV === "production" ? "" : "vue-i18n");
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
			if (process.env.NODE_ENV !== "production" && (e.__VUE_I18N__ = u), e.__VUE_I18N_SYMBOL__ = o, e.provide(e.__VUE_I18N_SYMBOL__, u), U(r[0])) {
				let e = r[0];
				u.__composerExtend = e.__composerExtend, u.__vueI18nExtend = e.__vueI18nExtend;
			}
			let i = null;
			!t && n && (i = _s(e, u.global)), __VUE_I18N_FULL_INSTALL__ && is(e, u, ...r), __VUE_I18N_LEGACY_API__ && t && e.mixin(Go(a, a.__composer, u));
			let s = e.unmount;
			e.unmount = () => {
				i && i(), u.dispose(), s();
			}, process.env.NODE_ENV !== "production" && To(e, u).then((e) => {
				if (!e) throw Q(Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
				let n = In();
				if (t) {
					let e = a;
					e.__enableEmitter && e.__enableEmitter(n);
				} else {
					let e = a;
					e[$a] && e[$a](n);
				}
				n.on("*", zo);
			}).catch(() => {
				process.env.NODE_ENV !== "production" && W(Ya[Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]);
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
function ss(e = {}) {
	let t = mo();
	if (t == null) throw Q(Z.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Q(Z.NOT_INSTALLED);
	let n = ls(t), r = ds(n), i = uo(t), a = us(e, i);
	if (a === "global") return fo(r, e, i), r;
	if (a === "parent") {
		let i = fs(n, t, e.__useComponent);
		return i ??= (process.env.NODE_ENV !== "production" && W(ao($.NOT_FOUND_PARENT_SCOPE)), r), i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw Q(Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = P({}, e);
		a.__root = fs(n, t) || r;
		let o = yo(a);
		i.__composerExtend && (o[ro] = i.__composerExtend(o));
		let s = null;
		if (process.env.NODE_ENV !== "production") {
			s = In();
			let e = o;
			e[$a] && e[$a](s), s.on("*", zo);
		}
		return f() && v(() => {
			if (process.env.NODE_ENV !== "production") {
				s && s.off("*", zo);
				let e = o;
				e[eo] && e[eo]();
			}
			let e = o[ro];
			e && (e(), delete o[ro]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = P({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = yo(n), o.__composerExtend && (s[ro] = o.__composerExtend(s)), ms(o, t, s), o.__setInstance(t, s);
	} else process.env.NODE_ENV !== "production" && a === "local" && W(ao($.DUPLICATE_USE_I18N_CALLING));
	return s;
}
function cs(e, t) {
	let n = u(), r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Wo(e)) : n.run(() => yo(e));
	if (r == null) throw Q(Z.UNEXPECTED_ERROR);
	return [n, r];
}
function ls(e) {
	let t = m(e.isCE ? as : e.appContext.app.__VUE_I18N_SYMBOL__);
	/* istanbul ignore if */
	if (!t) throw Q(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
	return t;
}
function us(e, t) {
	return Nt(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ds(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function fs(e, t, n = !1) {
	let r = null, i = t.root, a = ps(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition") r = t.__getInstance(a);
		else if (__VUE_I18N_LEGACY_API__) {
			let e = t.__getInstance(a);
			e != null && (r = e.__composer, n && r && !r[no] && (r = null));
		}
		if (r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function ps(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ms(e, t, n) {
	let r = null;
	_(() => {
		if (process.env.NODE_ENV !== "production") {
			t.__VUE_I18N__ = n, r = In();
			let e = n;
			e[$a] && e[$a](r), r.on("*", zo);
		}
	}, t), y(() => {
		let i = n;
		process.env.NODE_ENV !== "production" && (r && r.off("*", zo), i[eo] && i[eo](), delete t.__VUE_I18N__), e.__deleteInstance(t);
		let a = i[ro];
		a && (a(), delete i[ro]);
	}, t);
}
var hs = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], gs = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function _s(e, t) {
	let n = Object.create(null);
	return hs.forEach((e) => {
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
	}), e.config.globalProperties.$i18n = n, gs.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw Q(Z.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, gs.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var vs = /* @__PURE__ */ l({
	name: "i18n-d",
	props: P({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, qo),
	setup(e, t) {
		let n = e.i18n || ss({
			useScope: e.scope,
			__useComponent: !0
		});
		return Qo(e, t, sa, (...e) => n[Za](...e));
	}
});
if (Ja(), Pi(ti), Ii(Ei), Ri(pi), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
	let e = It();
	e.__INTLIFY__ = !0, ri(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
// src/i18n.js
function ys() {
	let e = /* #__PURE__ */ Object.assign({
		"./locales/cz_CZ.json": _t,
		"./locales/en_US.json": vt,
		"./locales/es_ES.json": yt,
		"./locales/fr_FR.json": bt,
		"./locales/pl_PL.json": xt,
		"./locales/pt_BR.json": St,
		"./locales/sk_SK.json": Ct,
		"./locales/tr_TR.json": wt
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
var bs = os({
	legacy: !1,
	locale: "en_US",
	fallbackLocale: "en_US",
	messages: ys()
});
gt.install = (e, t) => {
	e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(bs), e.component("vueSelectSides", gt);
};
var xs = gt;
export { xs as default };
