var is = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nn = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = n();
  })(is, function() {
    var t = Object.prototype.toString, n = Object.prototype.hasOwnProperty;
    function s(u) {
      if (!u || c(u) && u.length === 0)
        return !0;
      for (var d in u)
        if (n.call(u, d))
          return !1;
      return !0;
    }
    function r(u) {
      return t.call(u);
    }
    function i(u) {
      return typeof u == "number" || r(u) === "[object Number]";
    }
    function o(u) {
      return typeof u == "string" || r(u) === "[object String]";
    }
    function l(u) {
      return typeof u == "object" && r(u) === "[object Object]";
    }
    function c(u) {
      return typeof u == "object" && typeof u.length == "number" && r(u) === "[object Array]";
    }
    function p(u) {
      return typeof u == "boolean" || r(u) === "[object Boolean]";
    }
    function h(u) {
      var d = parseInt(u);
      return d.toString() === u ? d : u;
    }
    function a(u, d, _, S) {
      if (i(d) && (d = [d]), s(d))
        return u;
      if (o(d))
        return a(u, d.split("."), _, S);
      var N = h(d[0]);
      if (d.length === 1) {
        var J = u[N];
        return (J === void 0 || !S) && (u[N] = _), J;
      }
      return u[N] === void 0 && (i(N) ? u[N] = [] : u[N] = {}), a(u[N], d.slice(1), _, S);
    }
    function f(u, d) {
      if (i(d) && (d = [d]), !s(u)) {
        if (s(d))
          return u;
        if (o(d))
          return f(u, d.split("."));
        var _ = h(d[0]), S = u[_];
        if (d.length === 1)
          S !== void 0 && (c(u) ? u.splice(_, 1) : delete u[_]);
        else if (u[_] !== void 0)
          return f(u[_], d.slice(1));
        return u;
      }
    }
    var g = {};
    return g.ensureExists = function(u, d, _) {
      return a(u, d, _, !0);
    }, g.set = function(u, d, _, S) {
      return a(u, d, _, S);
    }, g.insert = function(u, d, _, S) {
      var N = g.get(u, d);
      S = ~~S, c(N) || (N = [], g.set(u, d, N)), N.splice(S, 0, _);
    }, g.empty = function(u, d) {
      if (s(d))
        return u;
      if (!s(u)) {
        var _, S;
        if (!(_ = g.get(u, d)))
          return u;
        if (o(_))
          return g.set(u, d, "");
        if (p(_))
          return g.set(u, d, !1);
        if (i(_))
          return g.set(u, d, 0);
        if (c(_))
          _.length = 0;
        else if (l(_))
          for (S in _)
            n.call(_, S) && delete _[S];
        else
          return g.set(u, d, null);
      }
    }, g.push = function(u, d) {
      var _ = g.get(u, d);
      c(_) || (_ = [], g.set(u, d, _)), _.push.apply(_, Array.prototype.slice.call(arguments, 2));
    }, g.coalesce = function(u, d, _) {
      for (var S, N = 0, J = d.length; N < J; N++)
        if ((S = g.get(u, d[N])) !== void 0)
          return S;
      return _;
    }, g.get = function(u, d, _) {
      if (i(d) && (d = [d]), s(d))
        return u;
      if (s(u))
        return _;
      if (o(d))
        return g.get(u, d.split("."), _);
      var S = h(d[0]);
      return d.length === 1 ? u[S] === void 0 ? _ : u[S] : g.get(u[S], d.slice(1), _);
    }, g.del = function(u, d) {
      return f(u, d);
    }, g;
  });
})(nn);
var ls = nn.exports, Tt = ls, sn, rn, _t;
_t = function(e) {
  return function(t) {
    return typeof t === e;
  };
};
rn = function(t, n) {
  var s = 1, r = n || function(i, o) {
    return o;
  };
  return t[0] === "-" && (s = -1, t = t.substr(1)), function(o, l) {
    var c, p = r(t, Tt.get(o, t)), h = r(t, Tt.get(l, t));
    return p < h && (c = -1), p > h && (c = 1), p === h && (c = 0), c * s;
  };
};
sn = function() {
  var t = Array.prototype.slice.call(arguments), n = t.filter(_t("string")), s = t.filter(_t("function"))[0];
  return function(i, o) {
    for (var l = n.length, c = 0, p = 0; c === 0 && p < l; )
      c = rn(n[p], s)(i, o), p++;
    return c;
  };
};
var cs = sn;
const Mt = /* @__PURE__ */ os(cs), Z = (e) => JSON.parse(JSON.stringify(e)), re = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), je = (e, t) => {
  let n = [];
  return e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label")), t.sort(Mt(...n)).map((s) => (s.children && s.children.sort(Mt(...n)), s)), t;
}, on = (e, t) => e.filter((n) => String(n) !== String(t));
/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function as(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const F = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, us = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], me = () => {
}, fs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, ds = Object.prototype.hasOwnProperty, D = (e, t) => ds.call(e, t), E = Array.isArray, ae = (e) => et(e) === "[object Map]", ln = (e) => et(e) === "[object Set]", x = (e) => typeof e == "function", U = (e) => typeof e == "string", he = (e) => typeof e == "symbol", C = (e) => e !== null && typeof e == "object", ps = (e) => (C(e) || x(e)) && x(e.then) && x(e.catch), cn = Object.prototype.toString, et = (e) => cn.call(e), an = (e) => et(e).slice(8, -1), un = (e) => et(e) === "[object Object]", Ot = (e) => U(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, hs = /-(\w)/g, Ke = fn(
  (e) => e.replace(hs, (t, n) => n ? n.toUpperCase() : "")
), We = fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), pe = (e, t) => !Object.is(e, t), gs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, _s = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ut = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ft;
const dn = () => Ft || (Ft = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wt(e) {
  if (E(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = U(s) ? Ss(s) : wt(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (U(e) || C(e))
    return e;
}
const vs = /;(?![^(]*\))/g, ms = /:([^]+)/, ys = /\/\*[^]*?\*\//g;
function Ss(e) {
  const t = {};
  return e.replace(ys, "").split(vs).forEach((n) => {
    if (n) {
      const s = n.split(ms);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Re(e) {
  let t = "";
  if (U(e))
    t = e;
  else if (E(e))
    for (let n = 0; n < e.length; n++) {
      const s = Re(e[n]);
      s && (t += s + " ");
    }
  else if (C(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const pn = (e) => !!(e && e.__v_isRef === !0), ee = (e) => U(e) ? e : e == null ? "" : E(e) || C(e) && (e.toString === cn || !x(e.toString)) ? pn(e) ? ee(e.value) : JSON.stringify(e, hn, 2) : String(e), hn = (e, t) => pn(t) ? hn(e, t.value) : ae(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[lt(s, i) + " =>"] = r, n),
    {}
  )
} : ln(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => lt(n))
} : he(t) ? lt(t) : C(t) && !E(t) && !un(t) ? String(t) : t, lt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    he(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let b;
const ct = /* @__PURE__ */ new WeakSet();
class bs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ct.has(this) && (ct.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Es(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bt(this), _n(this);
    const t = b, n = W;
    b = this, W = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && b !== this && oe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), vn(this), b = t, W = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Rt(t);
      this.deps = this.depsTail = void 0, Bt(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ct.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    vt(this) && this.run();
  }
  get dirty() {
    return vt(this);
  }
}
let gn = 0, we, Ne;
function Es(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ne, Ne = e;
    return;
  }
  e.next = we, we = e;
}
function Nt() {
  gn++;
}
function Dt() {
  if (--gn > 0)
    return;
  if (Ne) {
    let t = Ne;
    for (Ne = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; we; ) {
    let t = we;
    for (we = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function _n(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vn(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Rt(s), ws(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function vt(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Os(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Os(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ze))
    return;
  e.globalVersion = ze;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !vt(e)) {
    e.flags &= -3;
    return;
  }
  const n = b, s = W;
  b = e, W = !0;
  try {
    _n(e);
    const r = e.fn(e._value);
    (t.version === 0 || pe(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    b = n, W = s, vn(e), e.flags &= -3;
  }
}
function Rt(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Rt(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ws(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let W = !0;
const mn = [];
function tt() {
  mn.push(W), W = !1;
}
function nt() {
  const e = mn.pop();
  W = e === void 0 ? !0 : e;
}
function Bt(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = b;
    b = void 0;
    try {
      t();
    } finally {
      b = n;
    }
  }
}
let ze = 0;
class Ns {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ds {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!b || !W || b === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== b)
      n = this.activeLink = new Ns(b, this), b.deps ? (n.prevDep = b.depsTail, b.depsTail.nextDep = n, b.depsTail = n) : b.deps = b.depsTail = n, yn(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = b.depsTail, n.nextDep = void 0, b.depsTail.nextDep = n, b.depsTail = n, b.deps === n && (b.deps = s);
    }
    return process.env.NODE_ENV !== "production" && b.onTrack && b.onTrack(
      j(
        {
          effect: b
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ze++, this.notify(t);
  }
  notify(t) {
    Nt();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            j(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Dt();
    }
  }
}
function yn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        yn(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const mt = /* @__PURE__ */ new WeakMap(), ue = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), yt = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), xe = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function V(e, t, n) {
  if (W && b) {
    let s = mt.get(e);
    s || mt.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ds()), r.map = s, r.key = n), process.env.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function ie(e, t, n, s, r, i) {
  const o = mt.get(e);
  if (!o) {
    ze++;
    return;
  }
  const l = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: i
    }) : c.trigger());
  };
  if (Nt(), t === "clear")
    o.forEach(l);
  else {
    const c = E(e), p = c && Ot(n);
    if (c && n === "length") {
      const h = Number(s);
      o.forEach((a, f) => {
        (f === "length" || f === xe || !he(f) && f >= h) && l(a);
      });
    } else
      switch (n !== void 0 && l(o.get(n)), p && l(o.get(xe)), t) {
        case "add":
          c ? p && l(o.get("length")) : (l(o.get(ue)), ae(e) && l(o.get(yt)));
          break;
        case "delete":
          c || (l(o.get(ue)), ae(e) && l(o.get(yt)));
          break;
        case "set":
          ae(e) && l(o.get(ue));
          break;
      }
  }
  Dt();
}
function ge(e) {
  const t = m(e);
  return t === e ? t : (V(t, "iterate", xe), T(e) ? t : t.map(I));
}
function st(e) {
  return V(e = m(e), "iterate", xe), e;
}
const Rs = {
  __proto__: null,
  [Symbol.iterator]() {
    return at(this, Symbol.iterator, I);
  },
  concat(...e) {
    return ge(this).concat(
      ...e.map((t) => E(t) ? ge(t) : t)
    );
  },
  entries() {
    return at(this, "entries", (e) => (e[1] = I(e[1]), e));
  },
  every(e, t) {
    return Q(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Q(this, "filter", e, t, (n) => n.map(I), arguments);
  },
  find(e, t) {
    return Q(this, "find", e, t, I, arguments);
  },
  findIndex(e, t) {
    return Q(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Q(this, "findLast", e, t, I, arguments);
  },
  findLastIndex(e, t) {
    return Q(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Q(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ut(this, "includes", e);
  },
  indexOf(...e) {
    return ut(this, "indexOf", e);
  },
  join(e) {
    return ge(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ut(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Q(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Se(this, "pop");
  },
  push(...e) {
    return Se(this, "push", e);
  },
  reduce(e, ...t) {
    return Ht(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ht(this, "reduceRight", e, t);
  },
  shift() {
    return Se(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Q(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Se(this, "splice", e);
  },
  toReversed() {
    return ge(this).toReversed();
  },
  toSorted(e) {
    return ge(this).toSorted(e);
  },
  toSpliced(...e) {
    return ge(this).toSpliced(...e);
  },
  unshift(...e) {
    return Se(this, "unshift", e);
  },
  values() {
    return at(this, "values", I);
  }
};
function at(e, t, n) {
  const s = st(e), r = s[t]();
  return s !== e && !T(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const xs = Array.prototype;
function Q(e, t, n, s, r, i) {
  const o = st(e), l = o !== e && !T(e), c = o[t];
  if (c !== xs[t]) {
    const a = c.apply(e, i);
    return l ? I(a) : a;
  }
  let p = n;
  o !== e && (l ? p = function(a, f) {
    return n.call(this, I(a), f, e);
  } : n.length > 2 && (p = function(a, f) {
    return n.call(this, a, f, e);
  }));
  const h = c.call(o, p, s);
  return l && r ? r(h) : h;
}
function Ht(e, t, n, s) {
  const r = st(e);
  let i = n;
  return r !== e && (T(e) ? n.length > 3 && (i = function(o, l, c) {
    return n.call(this, o, l, c, e);
  }) : i = function(o, l, c) {
    return n.call(this, o, I(l), c, e);
  }), r[t](i, ...s);
}
function ut(e, t, n) {
  const s = m(e);
  V(s, "iterate", xe);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Je(n[0]) ? (n[0] = m(n[0]), s[t](...n)) : r;
}
function Se(e, t, n = []) {
  tt(), Nt();
  const s = m(e)[t].apply(e, n);
  return Dt(), nt(), s;
}
const Vs = /* @__PURE__ */ as("__proto__,__v_isRef,__isVue"), Sn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(he)
);
function As(e) {
  he(e) || (e = String(e));
  const t = m(this);
  return V(t, "has", e), t.hasOwnProperty(e);
}
class bn {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Dn : Nn : i ? Ks : wn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = E(t);
    if (!r) {
      let c;
      if (o && (c = Rs[n]))
        return c;
      if (n === "hasOwnProperty")
        return As;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      M(t) ? t : s
    );
    return (he(n) ? Sn.has(n) : Vs(n)) || (r || V(t, "get", n), i) ? l : M(l) ? o && Ot(n) ? l : l.value : C(l) ? r ? xn(l) : Rn(l) : l;
  }
}
class Cs extends bn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const c = le(i);
      if (!T(s) && !le(s) && (i = m(i), s = m(s)), !E(t) && M(i) && !M(s))
        return c ? !1 : (i.value = s, !0);
    }
    const o = E(t) && Ot(n) ? Number(n) < t.length : D(t, n), l = Reflect.set(
      t,
      n,
      s,
      M(t) ? t : r
    );
    return t === m(r) && (o ? pe(s, i) && ie(t, "set", n, s, i) : ie(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = D(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && ie(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!he(n) || !Sn.has(n)) && V(t, "has", n), s;
  }
  ownKeys(t) {
    return V(
      t,
      "iterate",
      E(t) ? "length" : ue
    ), Reflect.ownKeys(t);
  }
}
class En extends bn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && oe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && oe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ls = /* @__PURE__ */ new Cs(), $s = /* @__PURE__ */ new En(), Is = /* @__PURE__ */ new En(!0), xt = (e) => e, rt = (e) => Reflect.getPrototypeOf(e);
function Le(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = m(e), i = m(t);
  n || (pe(t, i) && V(r, "get", t), V(r, "get", i));
  const { has: o } = rt(r), l = s ? xt : n ? Ct : I;
  if (o.call(r, t))
    return l(e.get(t));
  if (o.call(r, i))
    return l(e.get(i));
  e !== r && e.get(t);
}
function $e(e, t = !1) {
  const n = this.__v_raw, s = m(n), r = m(e);
  return t || (pe(e, r) && V(s, "has", e), V(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Ie(e, t = !1) {
  return e = e.__v_raw, !t && V(m(e), "iterate", ue), Reflect.get(e, "size", e);
}
function jt(e, t = !1) {
  !t && !T(e) && !le(e) && (e = m(e));
  const n = m(this);
  return rt(n).has.call(n, e) || (n.add(e), ie(n, "add", e, e)), this;
}
function Kt(e, t, n = !1) {
  !n && !T(t) && !le(t) && (t = m(t));
  const s = m(this), { has: r, get: i } = rt(s);
  let o = r.call(s, e);
  o ? process.env.NODE_ENV !== "production" && On(s, r, e) : (e = m(e), o = r.call(s, e));
  const l = i.call(s, e);
  return s.set(e, t), o ? pe(t, l) && ie(s, "set", e, t, l) : ie(s, "add", e, t), this;
}
function Wt(e) {
  const t = m(this), { has: n, get: s } = rt(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && On(t, n, e) : (e = m(e), r = n.call(t, e));
  const i = s ? s.call(t, e) : void 0, o = t.delete(e);
  return r && ie(t, "delete", e, void 0, i), o;
}
function zt() {
  const e = m(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ae(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && ie(e, "clear", void 0, void 0, n), s;
}
function Pe(e, t) {
  return function(s, r) {
    const i = this, o = i.__v_raw, l = m(o), c = t ? xt : e ? Ct : I;
    return !e && V(l, "iterate", ue), o.forEach((p, h) => s.call(r, c(p), c(h), i));
  };
}
function Te(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = m(r), o = ae(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, p = r[e](...s), h = n ? xt : t ? Ct : I;
    return !t && V(
      i,
      "iterate",
      c ? yt : ue
    ), {
      // iterator protocol
      next() {
        const { value: a, done: f } = p.next();
        return f ? { value: a, done: f } : {
          value: l ? [h(a[0]), h(a[1])] : h(a),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function te(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      oe(
        `${We(e)} operation ${n}failed: target is readonly.`,
        m(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ps() {
  const e = {
    get(i) {
      return Le(this, i);
    },
    get size() {
      return Ie(this);
    },
    has: $e,
    add: jt,
    set: Kt,
    delete: Wt,
    clear: zt,
    forEach: Pe(!1, !1)
  }, t = {
    get(i) {
      return Le(this, i, !1, !0);
    },
    get size() {
      return Ie(this);
    },
    has: $e,
    add(i) {
      return jt.call(this, i, !0);
    },
    set(i, o) {
      return Kt.call(this, i, o, !0);
    },
    delete: Wt,
    clear: zt,
    forEach: Pe(!1, !0)
  }, n = {
    get(i) {
      return Le(this, i, !0);
    },
    get size() {
      return Ie(this, !0);
    },
    has(i) {
      return $e.call(this, i, !0);
    },
    add: te("add"),
    set: te("set"),
    delete: te("delete"),
    clear: te("clear"),
    forEach: Pe(!0, !1)
  }, s = {
    get(i) {
      return Le(this, i, !0, !0);
    },
    get size() {
      return Ie(this, !0);
    },
    has(i) {
      return $e.call(this, i, !0);
    },
    add: te("add"),
    set: te("set"),
    delete: te("delete"),
    clear: te("clear"),
    forEach: Pe(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = Te(i, !1, !1), n[i] = Te(i, !0, !1), t[i] = Te(i, !1, !0), s[i] = Te(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  Ts,
  Ms,
  Us,
  Fs
] = /* @__PURE__ */ Ps();
function Vt(e, t) {
  const n = t ? e ? Fs : Us : e ? Ms : Ts;
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    D(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Bs = {
  get: /* @__PURE__ */ Vt(!1, !1)
}, Hs = {
  get: /* @__PURE__ */ Vt(!0, !1)
}, js = {
  get: /* @__PURE__ */ Vt(!0, !0)
};
function On(e, t, n) {
  const s = m(n);
  if (s !== n && t.call(e, s)) {
    const r = an(e);
    oe(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const wn = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap();
function Ws(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ws(an(e));
}
function Rn(e) {
  return le(e) ? e : At(
    e,
    !1,
    Ls,
    Bs,
    wn
  );
}
function xn(e) {
  return At(
    e,
    !0,
    $s,
    Hs,
    Nn
  );
}
function Me(e) {
  return At(
    e,
    !0,
    Is,
    js,
    Dn
  );
}
function At(e, t, n, s, r) {
  if (!C(e))
    return process.env.NODE_ENV !== "production" && oe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = zs(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
function fe(e) {
  return le(e) ? fe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function le(e) {
  return !!(e && e.__v_isReadonly);
}
function T(e) {
  return !!(e && e.__v_isShallow);
}
function Je(e) {
  return e ? !!e.__v_raw : !1;
}
function m(e) {
  const t = e && e.__v_raw;
  return t ? m(t) : e;
}
function Js(e) {
  return !D(e, "__v_skip") && Object.isExtensible(e) && _s(e, "__v_skip", !0), e;
}
const I = (e) => C(e) ? Rn(e) : e, Ct = (e) => C(e) ? xn(e) : e;
function M(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function qs(e) {
  return M(e) ? e.value : e;
}
const Ys = {
  get: (e, t, n) => t === "__v_raw" ? e : qs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return M(r) && !M(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Gs(e) {
  return fe(e) ? e : new Proxy(e, Ys);
}
const Ue = {}, qe = /* @__PURE__ */ new WeakMap();
let ce;
function Qs(e, t = !1, n = ce) {
  if (n) {
    let s = qe.get(n);
    s || qe.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && oe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Xs(e, t, n = F) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n, p = (y) => {
    (n.onWarn || oe)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = (y) => r ? y : T(y) || r === !1 || r === 0 ? se(y, 1) : se(y);
  let a, f, g, u, d = !1, _ = !1;
  if (M(e) ? (f = () => e.value, d = T(e)) : fe(e) ? (f = () => h(e), d = !0) : E(e) ? (_ = !0, d = e.some((y) => fe(y) || T(y)), f = () => e.map((y) => {
    if (M(y))
      return y.value;
    if (fe(y))
      return h(y);
    if (x(y))
      return c ? c(y, 2) : y();
    process.env.NODE_ENV !== "production" && p(y);
  })) : x(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
    if (g) {
      tt();
      try {
        g();
      } finally {
        nt();
      }
    }
    const y = ce;
    ce = a;
    try {
      return c ? c(e, 3, [u]) : e(u);
    } finally {
      ce = y;
    }
  } : (f = me, process.env.NODE_ENV !== "production" && p(e)), t && r) {
    const y = f, q = r === !0 ? 1 / 0 : r;
    f = () => se(y(), q);
  }
  const S = () => {
    a.stop();
  };
  if (i && t) {
    const y = t;
    t = (...q) => {
      y(...q), S();
    };
  }
  let N = _ ? new Array(e.length).fill(Ue) : Ue;
  const J = (y) => {
    if (!(!(a.flags & 1) || !a.dirty && !y))
      if (t) {
        const q = a.run();
        if (r || d || (_ ? q.some((ot, Ce) => pe(ot, N[Ce])) : pe(q, N))) {
          g && g();
          const ot = ce;
          ce = a;
          try {
            const Ce = [
              q,
              // pass undefined as the old value when it's changed for the first time
              N === Ue ? void 0 : _ && N[0] === Ue ? [] : N,
              u
            ];
            c ? c(t, 3, Ce) : (
              // @ts-expect-error
              t(...Ce)
            ), N = q;
          } finally {
            ce = ot;
          }
        }
      } else
        a.run();
  };
  return l && l(J), a = new bs(f), a.scheduler = o ? () => o(J, !1) : J, u = (y) => Qs(y, !1, a), g = a.onStop = () => {
    const y = qe.get(a);
    if (y) {
      if (c)
        c(y, 4);
      else
        for (const q of y) q();
      qe.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? s ? J(!0) : N = a.run() : o ? o(J.bind(null, !0), !0) : a.run(), S.pause = a.pause.bind(a), S.resume = a.resume.bind(a), S.stop = S, S;
}
function se(e, t = 1 / 0, n) {
  if (t <= 0 || !C(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, M(e))
    se(e.value, t, n);
  else if (E(e))
    for (let s = 0; s < e.length; s++)
      se(e[s], t, n);
  else if (ln(e) || ae(e))
    e.forEach((s) => {
      se(s, t, n);
    });
  else if (un(e)) {
    for (const s in e)
      se(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && se(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const de = [];
function Zs(e) {
  de.push(e);
}
function ks() {
  de.pop();
}
let ft = !1;
function w(e, ...t) {
  if (ft) return;
  ft = !0, tt();
  const n = de.length ? de[de.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = er();
  if (s)
    it(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, l;
          return (l = (o = i.toString) == null ? void 0 : o.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${Gn(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...tr(r)), console.warn(...i);
  }
  nt(), ft = !1;
}
function er() {
  let e = de[de.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function tr(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...nr(n));
  }), t;
}
function nr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Gn(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...sr(e.props), i] : [r + i];
}
function sr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Vn(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Vn(e, t, n) {
  return U(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : M(t) ? (t = Vn(e, m(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : x(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = m(t), n ? t : [`${e}=`, t]);
}
const An = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function it(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Lt(r, t, n);
  }
}
function Cn(e, t, n, s) {
  if (x(e)) {
    const r = it(e, t, n, s);
    return r && ps(r) && r.catch((i) => {
      Lt(i, t, n);
    }), r;
  }
  if (E(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Cn(e[i], t, n, s));
    return r;
  } else process.env.NODE_ENV !== "production" && w(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Lt(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || F;
  if (t) {
    let l = t.parent;
    const c = t.proxy, p = process.env.NODE_ENV !== "production" ? An[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let a = 0; a < h.length; a++)
          if (h[a](e, c, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      tt(), it(i, null, 10, [
        e,
        c,
        p
      ]), nt();
      return;
    }
  }
  rr(e, n, r, s, o);
}
function rr(e, t, n, s = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = An[t];
    if (n && Zs(n), w(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ks(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const B = [];
let X = -1;
const ye = [];
let ne = null, _e = 0;
const Ln = /* @__PURE__ */ Promise.resolve();
let Ye = null;
const ir = 100;
function or(e) {
  const t = Ye || Ln;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lr(e) {
  let t = X + 1, n = B.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = B[s], i = Ve(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function $t(e) {
  if (!(e.flags & 1)) {
    const t = Ve(e), n = B[B.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ve(n) ? B.push(e) : B.splice(lr(t), 0, e), e.flags |= 1, $n();
  }
}
function $n() {
  Ye || (Ye = Ln.then(Pn));
}
function In(e) {
  E(e) ? ye.push(...e) : ne && e.id === -1 ? ne.splice(_e + 1, 0, e) : e.flags & 1 || (ye.push(e), e.flags |= 1), $n();
}
function cr(e) {
  if (ye.length) {
    const t = [...new Set(ye)].sort(
      (n, s) => Ve(n) - Ve(s)
    );
    if (ye.length = 0, ne) {
      ne.push(...t);
      return;
    }
    for (ne = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), _e = 0; _e < ne.length; _e++) {
      const n = ne[_e];
      process.env.NODE_ENV !== "production" && Tn(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ne = null, _e = 0;
  }
}
const Ve = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pn(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Tn(e, n) : me;
  try {
    for (X = 0; X < B.length; X++) {
      const n = B[X];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), it(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; X < B.length; X++) {
      const n = B[X];
      n && (n.flags &= -2);
    }
    X = -1, B.length = 0, cr(e), Ye = null, (B.length || ye.length) && Pn(e);
  }
}
function Tn(e, t) {
  const n = e.get(t) || 0;
  if (n > ir) {
    const s = t.i, r = s && Pt(s.type);
    return Lt(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const dt = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (dn().__VUE_HMR_RUNTIME__ = {
  createRecord: pt(ar),
  rerender: pt(ur),
  reload: pt(fr)
});
const Ge = /* @__PURE__ */ new Map();
function ar(e, t) {
  return Ge.has(e) ? !1 : (Ge.set(e, {
    initialDef: Qe(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Qe(e) {
  return Qn(e) ? e.__vccOpts : e;
}
function ur(e, t) {
  const n = Ge.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Qe(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function fr(e, t) {
  const n = Ge.get(e);
  if (!n) return;
  t = Qe(t), Jt(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const i = s[r], o = Qe(i.type);
    let l = dt.get(o);
    l || (o !== n.initialDef && Jt(o, t), dt.set(o, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? $t(() => {
      i.parent.update(), l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  In(() => {
    dt.clear();
  });
}
function Jt(e, t) {
  j(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function pt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ve, Fe = [];
function Mn(e, t) {
  var n, s;
  ve = e, ve ? (ve.enabled = !0, Fe.forEach(({ event: r, args: i }) => ve.emit(r, ...i)), Fe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Mn(i, t);
  }), setTimeout(() => {
    ve || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fe = []);
  }, 3e3)) : Fe = [];
}
let k = null, dr = null;
function Y(e, t) {
  return process.env.NODE_ENV !== "production" && w("withDirectives can only be used inside render functions."), e;
}
const pr = (e) => e.__isTeleport;
function Un(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Un(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const Fn = "components";
function P(e, t) {
  return Hn(Fn, e, !0, t) || e;
}
const Bn = Symbol.for("v-ndc");
function hr(e) {
  return U(e) ? Hn(Fn, e, !1) || e : e || Bn;
}
function Hn(e, t, n = !0, s = !1) {
  const r = Ae;
  if (r) {
    const i = r.type;
    {
      const l = Pt(
        i,
        !1
      );
      if (l && (l === t || l === Ke(t) || l === We(Ke(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      qt(r[e] || i[e], t) || // global registration
      qt(r.appContext[e], t)
    );
    return !o && s ? i : (process.env.NODE_ENV !== "production" && n && !o && w(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), o);
  } else process.env.NODE_ENV !== "production" && w(
    `resolve${We(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function qt(e, t) {
  return e && (e[t] || e[Ke(t)] || e[We(Ke(t))]);
}
function Yt(e, t, n, s) {
  let r;
  const i = n, o = E(e);
  if (o || U(e)) {
    const l = o && fe(e);
    let c = !1;
    l && (c = !T(e), e = st(e)), r = new Array(e.length);
    for (let p = 0, h = e.length; p < h; p++)
      r[p] = t(
        c ? I(e[p]) : e[p],
        p,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && w(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (C(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, p = l.length; c < p; c++) {
        const h = l[c];
        r[c] = t(e[h], h, c, i);
      }
    }
  else
    r = [];
  return r;
}
const St = (e) => e ? Fr(e) ? Br(e) : St(e.parent) : null, De = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ j(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Me(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Me(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Me(e.refs) : e.refs,
    $parent: (e) => St(e.parent),
    $root: (e) => St(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $t(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = or.bind(e.proxy)),
    $watch: (e) => xr.bind(e)
  })
), gr = (e) => e === "_" || e === "$", ht = (e, t) => e !== F && !e.__isScriptSetup && D(e, t), _r = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const g = o[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ht(s, t))
          return o[t] = 1, s[t];
        if (r !== F && D(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && D(p, t)
        )
          return o[t] = 3, i[t];
        if (n !== F && D(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const h = De[t];
    let a, f;
    if (h)
      return t === "$attrs" ? (V(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && V(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== F && D(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = c.config.globalProperties, D(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && k && (!U(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== F && gr(t[0]) && D(r, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === k && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return ht(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && D(r, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== F && D(s, t) ? (s[t] = n, !0) : D(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== F && D(e, o) || ht(t, o) || (l = i[0]) && D(l, o) || D(s, o) || D(De, o) || D(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : D(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (_r.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Gt(e) {
  return E(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function vr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (p) => Xe(c, p, o, !0)
  ), Xe(c, t, o)), C(t) && i.set(t, c), c;
}
function Xe(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Xe(e, i, n, !0), r && r.forEach(
    (o) => Xe(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = mr[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const mr = {
  data: Qt,
  props: Zt,
  emits: Zt,
  // objects
  methods: Oe,
  computed: Oe,
  // lifecycle
  beforeCreate: L,
  created: L,
  beforeMount: L,
  mounted: L,
  beforeUpdate: L,
  updated: L,
  beforeDestroy: L,
  beforeUnmount: L,
  destroyed: L,
  unmounted: L,
  activated: L,
  deactivated: L,
  errorCaptured: L,
  serverPrefetch: L,
  // assets
  components: Oe,
  directives: Oe,
  // watch
  watch: Sr,
  // provide / inject
  provide: Qt,
  inject: yr
};
function Qt(e, t) {
  return t ? e ? function() {
    return j(
      x(e) ? e.call(this, this) : e,
      x(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yr(e, t) {
  return Oe(Xt(e), Xt(t));
}
function Xt(e) {
  if (E(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function L(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Oe(e, t) {
  return e ? j(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zt(e, t) {
  return e ? E(e) && E(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : j(
    /* @__PURE__ */ Object.create(null),
    Gt(e),
    Gt(t ?? {})
  ) : t;
}
function Sr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = j(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = L(e[s], t[s]);
  return n;
}
let br = null;
function Er(e, t, n = !1) {
  const s = Ae || k;
  if (s || br) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && x(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const Or = {}, jn = (e) => Object.getPrototypeOf(e) === Or, wr = Cr, Nr = Symbol.for("v-scx"), Dr = () => {
  {
    const e = Er(Nr);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rr(e, t, n = F) {
  const { immediate: s, deep: r, flush: i, once: o } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = j({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = w);
  let c;
  if (Yn)
    if (i === "sync") {
      const f = Dr();
      c = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!t || s)
      l.once = !0;
    else {
      const f = () => {
      };
      return f.stop = me, f.resume = me, f.pause = me, f;
    }
  const p = Ae;
  l.call = (f, g, u) => Cn(f, p, g, u);
  let h = !1;
  i === "post" ? l.scheduler = (f) => {
    wr(f, p && p.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (f, g) => {
    g ? f() : $t(f);
  }), l.augmentJob = (f) => {
    t && (f.flags |= 4), h && (f.flags |= 2, p && (f.id = p.uid, f.i = p));
  };
  const a = Xs(e, t, l);
  return c && c.push(a), a;
}
function xr(e, t, n) {
  const s = this.proxy, r = U(e) ? e.includes(".") ? Vr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  x(t) ? i = t : (i = t.handler, n = t);
  const o = Ur(this), l = Rr(r, i.bind(s), n);
  return o(), l;
}
function Vr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ar = (e) => e.__isSuspense;
function Cr(e, t) {
  t && t.pendingBranch ? E(e) ? t.effects.push(...e) : t.effects.push(e) : In(e);
}
const Ze = Symbol.for("v-fgt"), Lr = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), Be = [];
let K = null;
function v(e = !1) {
  Be.push(K = e ? null : []);
}
function $r() {
  Be.pop(), K = Be[Be.length - 1] || null;
}
function Kn(e) {
  return e.dynamicChildren = K || us, $r(), K && K.push(e), e;
}
function R(e, t, n, s, r, i) {
  return Kn(
    O(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function $(e, t, n, s, r) {
  return Kn(
    H(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Pr = (...e) => zn(
  ...e
), Wn = ({ key: e }) => e ?? null, He = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? U(e) || M(e) || x(e) ? { i: k, r: e, k: t, f: !!n } : e : null);
function O(e, t = null, n = null, s = 0, r = null, i = e === Ze ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wn(t),
    ref: t && He(t),
    scopeId: dr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: k
  };
  return l ? (It(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= U(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && w("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !o && // has current parent block
  K && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && K.push(c), c;
}
const H = process.env.NODE_ENV !== "production" ? Pr : zn;
function zn(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Bn) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = bt), Ir(e)) {
    const l = ke(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && It(l, n), !i && K && (l.shapeFlag & 6 ? K[K.indexOf(e)] = l : K.push(l)), l.patchFlag = -2, l;
  }
  if (Qn(e) && (e = e.__vccOpts), t) {
    t = Tr(t);
    let { class: l, style: c } = t;
    l && !U(l) && (t.class = Re(l)), C(c) && (Je(c) && !E(c) && (c = j({}, c)), t.style = wt(c));
  }
  const o = U(e) ? 1 : Ar(e) ? 128 : pr(e) ? 64 : C(e) ? 4 : x(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && Je(e) && (e = m(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), O(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Tr(e) {
  return e ? Je(e) || jn(e) ? j({}, e) : e : null;
}
function ke(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, p = t ? Mr(r || {}, t) : r, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Wn(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? E(i) ? i.concat(He(t)) : [i, He(t)] : He(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && E(l) ? l.map(Jn) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ze ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ke(e.ssContent),
    ssFallback: e.ssFallback && ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Un(
    h,
    c.clone(h)
  ), h;
}
function Jn(e) {
  const t = ke(e);
  return E(e.children) && (t.children = e.children.map(Jn)), t;
}
function qn(e = " ", t = 0) {
  return H(Lr, null, e, t);
}
function A(e = "", t = !1) {
  return t ? (v(), $(bt, null, e)) : H(bt, null, e);
}
function It(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (E(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), It(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !jn(t) ? t._ctx = k : r === 3 && k && (k.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else x(t) ? (t = { default: t, _ctx: k }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [qn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Re([t.class, s.class]));
      else if (r === "style")
        t.style = wt([t.style, s.style]);
      else if (fs(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(E(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
let Ae = null, Et;
{
  const e = dn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Et = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ae = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const Ur = (e) => {
  const t = Ae;
  return Et(e), e.scope.on(), () => {
    e.scope.off(), Et(t);
  };
};
function Fr(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
process.env.NODE_ENV;
function Br(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gs(Js(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in De)
        return De[n](e);
    },
    has(t, n) {
      return n in t || n in De;
    }
  })) : e.proxy;
}
const Hr = /(?:^|[-_])(\w)/g, jr = (e) => e.replace(Hr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Pt(e, t = !0) {
  return x(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gn(e, t, n = !1) {
  let s = Pt(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? jr(s) : n ? "App" : "Anonymous";
}
function Qn(e) {
  return x(e) && "__vccOpts" in e;
}
function Kr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(a) {
      return C(a) ? a.__isVue ? ["div", e, "VueInstance"] : M(a) ? [
        "div",
        {},
        ["span", e, h(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in a ? a._value : a),
        ">"
      ] : fe(a) ? [
        "div",
        {},
        ["span", e, T(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${le(a) ? " (readonly)" : ""}`
      ] : le(a) ? [
        "div",
        {},
        ["span", e, T(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...i(a.$)
        ];
    }
  };
  function i(a) {
    const f = [];
    a.type.props && a.props && f.push(o("props", m(a.props))), a.setupState !== F && f.push(o("setup", a.setupState)), a.data !== F && f.push(o("data", m(a.data)));
    const g = c(a, "computed");
    g && f.push(o("computed", g));
    const u = c(a, "inject");
    return u && f.push(o("injected", u)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), f;
  }
  function o(a, f) {
    return f = j({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((g) => [
          "div",
          {},
          ["span", s, g + ": "],
          l(f[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, f = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : C(a) ? ["object", { object: f ? m(a) : a }] : ["span", n, String(a)];
  }
  function c(a, f) {
    const g = a.type;
    if (x(g))
      return;
    const u = {};
    for (const d in a.ctx)
      p(g, d, f) && (u[d] = a.ctx[d]);
    return u;
  }
  function p(a, f, g) {
    const u = a[g];
    if (E(u) && u.includes(f) || C(u) && f in u || a.extends && p(a.extends, f, g) || a.mixins && a.mixins.some((d) => p(d, f, g)))
      return !0;
  }
  function h(a) {
    return T(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Wr = process.env.NODE_ENV !== "production" ? w : me;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zr;
const kt = typeof window < "u" && window.trustedTypes;
if (kt)
  try {
    zr = /* @__PURE__ */ kt.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Wr(`Error creating trusted types policy: ${e}`);
  }
const Xn = Symbol("_vod"), Jr = Symbol("_vsh"), G = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Xn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : be(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), be(e, !0), s.enter(e)) : s.leave(e, () => {
      be(e, !1);
    }) : be(e, t));
  },
  beforeUnmount(e, { value: t }) {
    be(e, t);
  }
};
process.env.NODE_ENV !== "production" && (G.name = "show");
function be(e, t) {
  e.style.display = t ? e[Xn] : "none", e[Jr] = !t;
}
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function Ee(e, t, n, s) {
  e.addEventListener(t, n, s);
}
const en = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return E(t) ? (n) => gs(t, n) : t;
};
function qr(e) {
  e.target.composing = !0;
}
function tn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const gt = Symbol("_assign"), Yr = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[gt] = en(r);
    const i = s || r.props && r.props.type === "number";
    Ee(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = Ut(l)), e[gt](l);
    }), n && Ee(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ee(e, "compositionstart", qr), Ee(e, "compositionend", tn), Ee(e, "change", tn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[gt] = en(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ut(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
  }
};
/**
* vue v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gr() {
  Kr();
}
process.env.NODE_ENV !== "production" && Gr();
const z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Qr = {
  name: "v-select-all",
  display: "Select all",
  props: {
    items: Array
  }
};
function Xr(e, t, n, s, r, i) {
  return v(), R("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (o) => e.$emit("update-select-all"))
  }, ee(e.$t("selectAll")), 1);
}
const Zn = /* @__PURE__ */ z(Qr, [["render", Xr]]), Zr = {
  name: "v-deselect-all",
  display: "Deselect all",
  props: {
    click: Function,
    items: Array
  }
};
function kr(e, t, n, s, r, i) {
  return v(), R("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (o) => e.$emit("update-deselect-all"))
  }, ee(e.$t("deselectAll")), 1);
}
const kn = /* @__PURE__ */ z(Zr, [["render", kr]]), ei = {
  name: "v-search",
  display: "Search",
  props: ["value", "placeholder"],
  beforeMount() {
    this.placeholder ? this.thePlaceholder = this.placeholder : this.thePlaceholder = this.$t("searchPlaceholder");
  },
  watch: {
    inputVal(e) {
      this.$emit("input", e);
    }
  },
  data() {
    return {
      inputVal: this.value,
      thePlaceholder: ""
    };
  }
}, ti = ["placeholder"];
function ni(e, t, n, s, r, i) {
  return Y((v(), R("input", {
    type: "text",
    "onUpdate:modelValue": t[0] || (t[0] = (o) => r.inputVal = o),
    placeholder: r.thePlaceholder
  }, null, 8, ti)), [
    [Yr, r.inputVal]
  ]);
}
const es = /* @__PURE__ */ z(ei, [["render", ni]]), si = {
  name: "v-no-results",
  display: "No results",
  methods: {}
}, ri = { class: "no-results" };
function ii(e, t, n, s, r, i) {
  return v(), R("li", ri, [
    O("span", null, ee(e.$t("searchNoResult")), 1)
  ]);
}
const oi = /* @__PURE__ */ z(si, [["render", ii]]), li = {
  name: "v-no-selection",
  display: "No selection",
  methods: {}
}, ci = { class: "no-selection" };
function ai(e, t, n, s, r, i) {
  return v(), R("li", ci, [
    O("span", null, ee(e.$t("searchParentSelected")), 1)
  ]);
}
const ui = /* @__PURE__ */ z(li, [["render", ai]]), fi = oi.default, di = ui.default, pi = {
  name: "v-list",
  display: "List",
  mounted() {
  },
  components: {
    vNoResults: fi,
    vNoSelection: di
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
}, hi = { class: "vss-list-ul" }, gi = ["onClick"], _i = { style: {} }, vi = {
  key: 0,
  class: "vss-list-badge"
}, mi = { key: 0 }, yi = ["onClick"];
function Si(e, t, n, s, r, i) {
  const o = P("v-no-results"), l = P("v-no-selection");
  return v(), R("ul", hi, [
    (v(!0), R(Ze, null, Yt(n.items, (c, p) => Y((v(), R("li", {
      key: p,
      onClick: (h) => n.hasChildren ? !1 : i.toggleItem(c, {}, c.selected),
      class: Re(i.liClass(c, n.hasChildren))
    }, [
      O("span", _i, [
        qn(ee(c.label) + " ", 1),
        i.showCounter(c) ? (v(), R("small", vi, ee(c.totalChildrenSelected), 1)) : A("", !0)
      ]),
      n.hasChildren ? (v(), R("ul", mi, [
        (v(!0), R(Ze, null, Yt(c.children, (h, a) => Y((v(), R("li", {
          key: p + a,
          onClick: (f) => i.toggleItem(h, c, h.selected),
          class: Re(i.liClass(h, !1))
        }, [
          O("span", null, ee(h.label), 1)
        ], 10, yi)), [
          [G, h.visible]
        ])), 128)),
        Y(H(o, null, null, 512), [
          [G, i.totalItems(c.children) === 0]
        ])
      ])) : A("", !0)
    ], 10, gi)), [
      [G, i.showParent(c)]
    ])), 128)),
    Y(H(l, null, null, 512), [
      [G, i.showNoSelection(n.items)]
    ]),
    Y(H(o, null, null, 512), [
      [G, i.showNoResultParent(n.items)]
    ])
  ]);
}
const ts = /* @__PURE__ */ z(pi, [["render", Si]]), bi = {
  name: "v-separator",
  display: "Separator"
}, Ei = { class: "vss-span" };
function Oi(e, t, n, s, r, i) {
  return v(), R("div", Ei, " ‹ › ");
}
const ns = /* @__PURE__ */ z(bi, [["render", Oi]]), wi = {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
}, Ni = ["title"];
function Di(e, t, n, s, r, i) {
  return v(), R("span", {
    title: e.$t("totalSelected")
  }, ee(n.value), 9, Ni);
}
const ss = /* @__PURE__ */ z(wi, [["render", Di]]), rs = {
  watch: {
    model(e, t) {
      JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
    },
    dataSelected(e, t) {
      this.$emit("update-selected", e, t);
    },
    orderBy() {
      this.listLeft = je(this, this.dataList), this.listRight = je(this, this.dataList);
    },
    list(e) {
      JSON.stringify(e) !== JSON.stringify(this.dataListOriginal) && (this.prepareList(), this.prepareListLeft());
    }
  },
  model: {
    prop: "model",
    event: "change"
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
}, Ri = Zn.default, xi = kn.default, Vi = es.default, Ai = ts.default, Ci = ns.default, Li = ss.default, $i = rs.default, Ii = {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [$i],
  components: {
    vSelectAll: Ri,
    vDeselectAll: xi,
    vSearch: Vi,
    vSeparator: Ci,
    vList: Ai,
    vTotal: Li
  },
  props: {
    list: {
      required: !0,
      type: [Array, Object]
    },
    model: {
      type: Object,
      default: void 0
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
      let s = Z(this.dataSelected);
      Object.keys(t).length > 0 ? (s[t.value] === void 0 && t.visible && (s[t.value] = []), n ? e.visible && s[t.value].indexOf(e.value) === -1 && s[t.value].push(e.value) : e.visible && (s[t.value] = on(
        s[t.value],
        e.value
      ))) : n ? s[e.value] === void 0 && (s[e.value] = []) : delete s[e.value], this.dataSelected = s;
    },
    prepareList() {
      let e = this, t = {};
      e.dataListOriginal = Z(e.list);
      let n = Object.keys(e.model), s = e.list.filter((r) => {
        let i = r.value, o = n.indexOf(i) >= 0;
        return o ? (r.selectedDefault = !0, t[i] = []) : r.selectedDefault = !1, r.children && r.children.filter((l) => {
          let c = l.value;
          o && (e.model[i].indexOf(c) >= 0 ? (l.selectedDefault = !0, t[i].push(c)) : l.selectedDefault = !1);
        }), r;
      });
      e.dataSelected = t, e.dataList = je(e, s);
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
      let e = this, t = re(this.searchL), n = Object.keys(this.dataSelected), s = Z(this.listLeft);
      return s = s.filter((r) => {
        let i = re(r.label);
        return n.indexOf(r.value) >= 0 ? r.selected = !0 : r.selected = !1, i.includes(t) ? r.visible = !0 : r.visible = !1, r.children ? (r.children = r.children.map((o) => (o.selected = !1, e.dataSelected[r.value] !== void 0 && (e.dataSelected[r.value].indexOf(o.value) >= 0 ? o.selected = !0 : o.selected = !1), o)), r.totalChildrenSelected = r.children.filter(function(o) {
          return o.selected === !0;
        }).length, r.children) : r;
      }), this.listLeft = s, s;
    },
    filteredListR() {
      let e = this, t = re(e.searchR), n = e.listLeft.filter(function(r) {
        return r.children ? (r.children = r.children.map((i) => (re(i.label).includes(t) ? i.visible = !0 : i.visible = !1, e.dataSelected[r.value] !== void 0 && (e.dataSelected[r.value].indexOf(i.value) >= 0 ? i.selected = !0 : i.selected = !1), i)), r.children) : r;
      });
      return this.listRight = n, this.listRight;
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
}, Pi = { class: "vss-list" }, Ti = { class: "vss-inner-list" }, Mi = { class: "vss-footer" }, Ui = { class: "vss-footer-bg" }, Fi = {
  key: 1,
  class: "vss-footer-separator"
}, Bi = { class: "vss-list" }, Hi = { class: "vss-inner-list" }, ji = { class: "vss-footer" }, Ki = { class: "vss-footer-bg" }, Wi = {
  key: 1,
  class: "vss-footer-separator"
};
function zi(e, t, n, s, r, i) {
  const o = P("v-search"), l = P("v-list"), c = P("v-select-all"), p = P("v-deselect-all"), h = P("v-total"), a = P("v-separator");
  return v(), R("div", null, [
    O("div", Pi, [
      O("div", Ti, [
        e.search ? (v(), $(o, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: r.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (f) => r.searchL = f)
        }, null, 8, ["placeholder", "modelValue"])) : A("", !0),
        H(l, {
          "has-children": !1,
          type: e.type,
          items: i.filteredListL,
          onUpdatedItem: i.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Y(O("div", Mi, [
          O("div", Ui, [
            O("div", null, [
              e.toggleAll ? (v(), $(c, {
                key: 0,
                items: r.listLeft,
                onUpdateSelectAll: i.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : A("", !0),
              e.toggleAll ? (v(), R("div", Fi, "/")) : A("", !0),
              e.toggleAll ? (v(), $(p, {
                key: 2,
                items: r.listLeft,
                onUpdateDeselectAll: i.updateLeftDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : A("", !0)
            ]),
            e.total ? (v(), $(h, {
              key: 0,
              value: Object.keys(r.dataSelected).length
            }, null, 8, ["value"])) : A("", !0)
          ])
        ], 512), [
          [G, e.toggleAll || e.total]
        ])
      ])
    ]),
    H(a),
    O("div", Bi, [
      O("div", Hi, [
        e.search ? (v(), $(o, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: r.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (f) => r.searchR = f)
        }, null, 8, ["placeholder", "modelValue"])) : A("", !0),
        H(l, {
          "has-children": !0,
          type: e.type,
          items: i.filteredListR,
          onUpdatedItem: i.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Y(O("div", ji, [
          O("div", Ki, [
            O("div", null, [
              e.toggleAll ? (v(), $(c, {
                key: 0,
                items: r.listRight,
                onUpdateSelectAll: i.updateRightSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : A("", !0),
              e.toggleAll ? (v(), R("div", Wi, "/")) : A("", !0),
              e.toggleAll ? (v(), $(p, {
                key: 2,
                items: r.listRight,
                onUpdateDeselectAll: i.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : A("", !0)
            ]),
            e.total ? (v(), $(h, {
              key: 0,
              value: i.totalChildrenSelected
            }, null, 8, ["value"])) : A("", !0)
          ])
        ], 512), [
          [G, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const Ji = /* @__PURE__ */ z(Ii, [["render", zi]]), qi = Zn.default, Yi = kn.default, Gi = es.default, Qi = ts.default, Xi = ns.default, Zi = ss.default, ki = rs.default, eo = {
  name: "mirror-select-sides",
  display: "Mirror select sides",
  mixins: [ki],
  components: {
    vSelectAll: qi,
    vDeselectAll: Yi,
    vSearch: Gi,
    vSeparator: Xi,
    vList: Qi,
    vTotal: Zi
  },
  props: {
    list: {
      required: !0,
      type: [Array, Object]
    },
    model: {
      type: Array,
      default: void 0
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
      e.listRight.map((t) => {
        t.visible === !0 && !t.disabled && e.updateItem(t, {}, !1);
      });
    },
    updateItem(e, t, n) {
      let s = Z(this.dataSelected);
      n ? s.push(e.value) : s = on(s, e.value), this.dataSelected = s;
    },
    prepareList() {
      this.dataListOriginal = Z(this.list);
      let e = this, t = [], n = e.list.filter((s) => {
        let r = s.value;
        return e.model.indexOf(r) >= 0 ? (s.selectedDefault = !0, t.push(r)) : s.selectedDefault = !1, s;
      });
      e.dataSelected = t, e.dataList = je(e, n);
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
      let e = re(this.searchL), t = this.dataSelected, n = Z(this.listLeft);
      return n = n.filter((s) => {
        let r = re(s.label);
        return t.indexOf(s.value) >= 0 ? (s.selected = !0, s.visible = !1) : (s.selected = !1, s.visible = !0), r.includes(e) && s.visible === !0 ? s.visible = !0 : s.visible = !1, s;
      }), this.listLeft = n, n;
    },
    filteredListR() {
      let e = this, t = re(e.searchR), n = this.dataSelected, s = Z(e.listLeft);
      return s = s.filter((r) => {
        let i = re(r.label);
        return n.indexOf(r.value) >= 0 ? (r.selected = !0, r.visible = !0) : (r.selected = !1, r.visible = !1), i.includes(t) && r.visible === !0 ? r.visible = !0 : r.visible = !1, r;
      }), this.listRight = s, s;
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
}, to = { class: "vss-list" }, no = { class: "vss-inner-list" }, so = { class: "vss-footer" }, ro = { class: "vss-footer-bg" }, io = { class: "vss-list" }, oo = { class: "vss-inner-list" }, lo = { class: "vss-footer" }, co = { class: "vss-footer-bg" };
function ao(e, t, n, s, r, i) {
  const o = P("v-search"), l = P("v-list"), c = P("v-select-all"), p = P("v-total"), h = P("v-separator"), a = P("v-deselect-all");
  return v(), R("div", null, [
    O("div", to, [
      O("div", no, [
        e.search ? (v(), $(o, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: r.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (f) => r.searchL = f)
        }, null, 8, ["placeholder", "modelValue"])) : A("", !0),
        H(l, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "left",
          items: i.filteredListL,
          onUpdatedItem: i.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Y(O("div", so, [
          O("div", ro, [
            O("div", null, [
              e.toggleAll ? (v(), $(c, {
                key: 0,
                items: r.listLeft,
                onUpdateSelectAll: i.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : A("", !0)
            ]),
            e.total ? (v(), $(p, {
              key: 0,
              value: r.dataSelected.length
            }, null, 8, ["value"])) : A("", !0)
          ])
        ], 512), [
          [G, e.toggleAll || e.total]
        ])
      ])
    ]),
    H(h),
    O("div", io, [
      O("div", oo, [
        e.search ? (v(), $(o, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: r.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (f) => r.searchR = f)
        }, null, 8, ["placeholder", "modelValue"])) : A("", !0),
        H(l, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "right",
          items: i.filteredListR,
          onUpdatedItem: i.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        Y(O("div", lo, [
          O("div", co, [
            O("div", null, [
              e.toggleAll ? (v(), $(a, {
                key: 0,
                items: r.listRight,
                onUpdateDeselectAll: i.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : A("", !0)
            ])
          ])
        ], 512), [
          [G, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const uo = /* @__PURE__ */ z(eo, [["render", ao]]), fo = Ji.default, po = uo.default, ho = {
  // i18n,
  name: "core-select-sides",
  display: "Core select sides",
  components: { vMirror: po, vGrouped: fo },
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
    model: {
      type: [Object, Array],
      default: void 0
    }
  },
  watch: {
    list(e) {
      this.listClone = Z(e);
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
  model: {
    prop: "model",
    event: "update"
  },
  methods: {
    updateSelected(e) {
      this.$emit("change", e);
    },
    getComponent() {
      return this.params.type;
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
        return this.model;
      },
      set(e) {
        this.$emit("update:model", e);
      }
    }
  },
  beforeMount() {
    this.setDefaultParams(), this.listClone = Z(this.list);
  },
  data() {
    return {
      listClone: [],
      locale: "en_US",
      enabledLocales: ["pt_BR", "en_US", "es_ES", "fr_FR", "tr_TR", "pl_PL"],
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
function go(e, t, n, s, r, i) {
  return v(), $(hr(i.getComponent()), {
    class: "vss",
    modelValue: i.modelProp,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => i.modelProp = o),
    type: r.params.type,
    list: r.listClone,
    search: r.params.search,
    total: r.params.total,
    "toggle-all": r.params.toggleAll,
    "order-by": r.params.orderBy,
    "placeholder-search-left": r.params.placeholderSearchLeft,
    "placeholder-search-right": r.params.placeholderSearchRight,
    "sort-selected-up": r.params.sortSelectedUp,
    onUpdateSelected: i.updateSelected
  }, null, 40, ["modelValue", "type", "list", "search", "total", "toggle-all", "order-by", "placeholder-search-left", "placeholder-search-right", "sort-selected-up", "onUpdateSelected"]);
}
const _o = /* @__PURE__ */ z(ho, [["render", go]]), vo = {
  install(e, t) {
    e.component("vueSelectSides", _o.default), console.trace("install component: src/index.js");
  }
};
export {
  vo as default
};
