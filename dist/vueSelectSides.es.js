var da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nl = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = n();
  })(da, function() {
    var t = Object.prototype.toString, n = Object.prototype.hasOwnProperty;
    function s(m) {
      if (!m || i(m) && m.length === 0)
        return !0;
      for (var g in m)
        if (n.call(m, g))
          return !1;
      return !0;
    }
    function l(m) {
      return t.call(m);
    }
    function r(m) {
      return typeof m == "number" || l(m) === "[object Number]";
    }
    function o(m) {
      return typeof m == "string" || l(m) === "[object String]";
    }
    function a(m) {
      return typeof m == "object" && l(m) === "[object Object]";
    }
    function i(m) {
      return typeof m == "object" && typeof m.length == "number" && l(m) === "[object Array]";
    }
    function _(m) {
      return typeof m == "boolean" || l(m) === "[object Boolean]";
    }
    function p(m) {
      var g = parseInt(m);
      return g.toString() === m ? g : m;
    }
    function c(m, g, T, I) {
      if (r(g) && (g = [g]), s(g))
        return m;
      if (o(g))
        return c(m, g.split("."), T, I);
      var A = p(g[0]);
      if (g.length === 1) {
        var h = m[A];
        return (h === void 0 || !I) && (m[A] = T), h;
      }
      return m[A] === void 0 && (r(A) ? m[A] = [] : m[A] = {}), c(m[A], g.slice(1), T, I);
    }
    function f(m, g) {
      if (r(g) && (g = [g]), !s(m)) {
        if (s(g))
          return m;
        if (o(g))
          return f(m, g.split("."));
        var T = p(g[0]), I = m[T];
        if (g.length === 1)
          I !== void 0 && (i(m) ? m.splice(T, 1) : delete m[T]);
        else if (m[T] !== void 0)
          return f(m[T], g.slice(1));
        return m;
      }
    }
    var E = {};
    return E.ensureExists = function(m, g, T) {
      return c(m, g, T, !0);
    }, E.set = function(m, g, T, I) {
      return c(m, g, T, I);
    }, E.insert = function(m, g, T, I) {
      var A = E.get(m, g);
      I = ~~I, i(A) || (A = [], E.set(m, g, A)), A.splice(I, 0, T);
    }, E.empty = function(m, g) {
      if (s(g))
        return m;
      if (!s(m)) {
        var T, I;
        if (!(T = E.get(m, g)))
          return m;
        if (o(T))
          return E.set(m, g, "");
        if (_(T))
          return E.set(m, g, !1);
        if (r(T))
          return E.set(m, g, 0);
        if (i(T))
          T.length = 0;
        else if (a(T))
          for (I in T)
            n.call(T, I) && delete T[I];
        else
          return E.set(m, g, null);
      }
    }, E.push = function(m, g) {
      var T = E.get(m, g);
      i(T) || (T = [], E.set(m, g, T)), T.push.apply(T, Array.prototype.slice.call(arguments, 2));
    }, E.coalesce = function(m, g, T) {
      for (var I, A = 0, h = g.length; A < h; A++)
        if ((I = E.get(m, g[A])) !== void 0)
          return I;
      return T;
    }, E.get = function(m, g, T) {
      if (r(g) && (g = [g]), s(g))
        return m;
      if (s(m))
        return T;
      if (o(g))
        return E.get(m, g.split("."), T);
      var I = p(g[0]);
      return g.length === 1 ? m[I] === void 0 ? T : m[I] : E.get(m[I], g.slice(1), T);
    }, E.del = function(m, g) {
      return f(m, g);
    }, E;
  });
})(Nl);
var pa = Nl.exports, Er = pa, bl, Ol, Ts;
Ts = function(e) {
  return function(t) {
    return typeof t === e;
  };
};
Ol = function(t, n) {
  var s = 1, l = n || function(r, o) {
    return o;
  };
  return t[0] === "-" && (s = -1, t = t.substr(1)), function(o, a) {
    var i, _ = l(t, Er.get(o, t)), p = l(t, Er.get(a, t));
    return _ < p && (i = -1), _ > p && (i = 1), _ === p && (i = 0), i * s;
  };
};
bl = function() {
  var t = Array.prototype.slice.call(arguments), n = t.filter(Ts("string")), s = t.filter(Ts("function"))[0];
  return function(r, o) {
    for (var a = n.length, i = 0, _ = 0; i === 0 && _ < a; )
      i = Ol(n[_], s)(r, o), _++;
    return i;
  };
};
var ma = bl;
const vr = /* @__PURE__ */ _a(ma), Ge = (e) => JSON.parse(JSON.stringify(e)), ot = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), xn = (e, t) => {
  let n = [];
  return e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label")), t.sort(vr(...n)).map((s) => (s.children && s.children.sort(vr(...n)), s)), t;
}, Tl = (e, t) => e.filter((n) => String(n) !== String(t));
/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ha(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Re = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ga = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Vt = () => {
}, Ea = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), De = Object.assign, va = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Na = Object.prototype.hasOwnProperty, se = (e, t) => Na.call(e, t), Y = Array.isArray, Et = (e) => zn(e) === "[object Map]", Sl = (e) => zn(e) === "[object Set]", ne = (e) => typeof e == "function", Le = (e) => typeof e == "string", Lt = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", ba = (e) => (ce(e) || ne(e)) && ne(e.then) && ne(e.catch), Ll = Object.prototype.toString, zn = (e) => Ll.call(e), yl = (e) => zn(e).slice(8, -1), Il = (e) => zn(e) === "[object Object]", Gs = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Oa = /-(\w)/g, Wn = Bs(
  (e) => e.replace(Oa, (t, n) => n ? n.toUpperCase() : "")
), mn = Bs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Bs(
  (e) => e ? `on${mn(e)}` : ""
), it = (e, t) => !Object.is(e, t), Sa = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, La = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Nr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let br;
const Al = () => br || (br = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function js(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], l = Le(s) ? Da(s) : js(s);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Le(e) || ce(e))
    return e;
}
const ya = /;(?![^(]*\))/g, Ia = /:([^]+)/, Aa = /\/\*[^]*?\*\//g;
function Da(e) {
  const t = {};
  return e.replace(Aa, "").split(ya).forEach((n) => {
    if (n) {
      const s = n.split(Ia);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function hn(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = hn(e[n]);
      s && (t += s + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Dl = (e) => !!(e && e.__v_isRef === !0), Ze = (e) => Le(e) ? e : e == null ? "" : Y(e) || ce(e) && (e.toString === Ll || !ne(e.toString)) ? Dl(e) ? Ze(e.value) : JSON.stringify(e, Pl, 2) : String(e), Pl = (e, t) => Dl(t) ? Pl(e, t.value) : Et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, l], r) => (n[us(s, r) + " =>"] = l, n),
    {}
  )
} : Sl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => us(n))
} : Lt(t) ? us(t) : ce(t) && !Y(t) && !Il(t) ? String(t) : t, us = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class Pa {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    } else process.env.NODE_ENV !== "production" && Ye("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ie = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ie = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ra(e) {
  return new Pa(e);
}
function Ca() {
  return Ie;
}
let B;
const fs = /* @__PURE__ */ new WeakSet();
class wa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fs.has(this) && (fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Or(this), wl(this);
    const t = B, n = Fe;
    B = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && B !== this && Ye(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ml(this), B = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Xs(t);
      this.deps = this.depsTail = void 0, Or(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ss(this) && this.run();
  }
  get dirty() {
    return Ss(this);
  }
}
let Rl = 0, dn, _n;
function Cl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = _n, _n = e;
    return;
  }
  e.next = dn, dn = e;
}
function Ys() {
  Rl++;
}
function Ks() {
  if (--Rl > 0)
    return;
  if (_n) {
    let t = _n;
    for (_n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; dn; ) {
    let t = dn;
    for (dn = void 0; t; ) {
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
function wl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ml(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const l = s.prevDep;
    s.version === -1 ? (s === n && (n = l), Xs(s), Ma(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = l;
  }
  e.deps = t, e.depsTail = n;
}
function Ss(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (kl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function kl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn))
    return;
  e.globalVersion = gn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ss(e)) {
    e.flags &= -3;
    return;
  }
  const n = B, s = Fe;
  B = e, Fe = !0;
  try {
    wl(e);
    const l = e.fn(e._value);
    (t.version === 0 || it(l, e._value)) && (e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    B = n, Fe = s, Ml(e), e.flags &= -3;
  }
}
function Xs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: l } = e;
  if (s && (s.nextSub = l, e.prevSub = void 0), l && (l.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = l), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Xs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ma(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const Fl = [];
function Sn() {
  Fl.push(Fe), Fe = !1;
}
function Ln() {
  const e = Fl.pop();
  Fe = e === void 0 ? !0 : e;
}
function Or(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = B;
    B = void 0;
    try {
      t();
    } finally {
      B = n;
    }
  }
}
let gn = 0;
class ka {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Js {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!B || !Fe || B === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== B)
      n = this.activeLink = new ka(B, this), B.deps ? (n.prevDep = B.depsTail, B.depsTail.nextDep = n, B.depsTail = n) : B.deps = B.depsTail = n, Vl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = B.depsTail, n.nextDep = void 0, B.depsTail.nextDep = n, B.depsTail = n, B.deps === n && (B.deps = s);
    }
    return process.env.NODE_ENV !== "production" && B.onTrack && B.onTrack(
      De(
        {
          effect: B
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, gn++, this.notify(t);
  }
  notify(t) {
    Ys();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            De(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ks();
    }
  }
}
function Vl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Vl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), vt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), ys = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), En = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ue(e, t, n) {
  if (Fe && B) {
    let s = Ls.get(e);
    s || Ls.set(e, s = /* @__PURE__ */ new Map());
    let l = s.get(n);
    l || (s.set(n, l = new Js()), l.map = s, l.key = n), process.env.NODE_ENV !== "production" ? l.track({
      target: e,
      type: t,
      key: n
    }) : l.track();
  }
}
function at(e, t, n, s, l, r) {
  const o = Ls.get(e);
  if (!o) {
    gn++;
    return;
  }
  const a = (i) => {
    i && (process.env.NODE_ENV !== "production" ? i.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: l,
      oldTarget: r
    }) : i.trigger());
  };
  if (Ys(), t === "clear")
    o.forEach(a);
  else {
    const i = Y(e), _ = i && Gs(n);
    if (i && n === "length") {
      const p = Number(s);
      o.forEach((c, f) => {
        (f === "length" || f === En || !Lt(f) && f >= p) && a(c);
      });
    } else
      switch (n !== void 0 && a(o.get(n)), _ && a(o.get(En)), t) {
        case "add":
          i ? _ && a(o.get("length")) : (a(o.get(vt)), Et(e) && a(o.get(ys)));
          break;
        case "delete":
          i || (a(o.get(vt)), Et(e) && a(o.get(ys)));
          break;
        case "set":
          Et(e) && a(o.get(vt));
          break;
      }
  }
  Ks();
}
function Pt(e) {
  const t = $(e);
  return t === e ? t : (ue(t, "iterate", En), be(e) ? t : t.map(me));
}
function Zn(e) {
  return ue(e = $(e), "iterate", En), e;
}
const Fa = {
  __proto__: null,
  [Symbol.iterator]() {
    return ds(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => Y(t) ? Pt(t) : t)
    );
  },
  entries() {
    return ds(this, "entries", (e) => (e[1] = me(e[1]), e));
  },
  every(e, t) {
    return Xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xe(this, "filter", e, t, (n) => n.map(me), arguments);
  },
  find(e, t) {
    return Xe(this, "find", e, t, me, arguments);
  },
  findIndex(e, t) {
    return Xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xe(this, "findLast", e, t, me, arguments);
  },
  findLastIndex(e, t) {
    return Xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _s(this, "includes", e);
  },
  indexOf(...e) {
    return _s(this, "indexOf", e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return _s(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return on(this, "pop");
  },
  push(...e) {
    return on(this, "push", e);
  },
  reduce(e, ...t) {
    return Tr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Tr(this, "reduceRight", e, t);
  },
  shift() {
    return on(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return on(this, "splice", e);
  },
  toReversed() {
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return on(this, "unshift", e);
  },
  values() {
    return ds(this, "values", me);
  }
};
function ds(e, t, n) {
  const s = Zn(e), l = s[t]();
  return s !== e && !be(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.value && (r.value = n(r.value)), r;
  }), l;
}
const Va = Array.prototype;
function Xe(e, t, n, s, l, r) {
  const o = Zn(e), a = o !== e && !be(e), i = o[t];
  if (i !== Va[t]) {
    const c = i.apply(e, r);
    return a ? me(c) : c;
  }
  let _ = n;
  o !== e && (a ? _ = function(c, f) {
    return n.call(this, me(c), f, e);
  } : n.length > 2 && (_ = function(c, f) {
    return n.call(this, c, f, e);
  }));
  const p = i.call(o, _, s);
  return a && l ? l(p) : p;
}
function Tr(e, t, n, s) {
  const l = Zn(e);
  let r = n;
  return l !== e && (be(e) ? n.length > 3 && (r = function(o, a, i) {
    return n.call(this, o, a, i, e);
  }) : r = function(o, a, i) {
    return n.call(this, o, me(a), i, e);
  }), l[t](r, ...s);
}
function _s(e, t, n) {
  const s = $(e);
  ue(s, "iterate", En);
  const l = s[t](...n);
  return (l === -1 || l === !1) && Hn(n[0]) ? (n[0] = $(n[0]), s[t](...n)) : l;
}
function on(e, t, n = []) {
  Sn(), Ys();
  const s = $(e)[t].apply(e, n);
  return Ks(), Ln(), s;
}
const $a = /* @__PURE__ */ ha("__proto__,__v_isRef,__isVue"), $l = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Lt)
);
function Ua(e) {
  Lt(e) || (e = String(e));
  const t = $(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
class Ul {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const l = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !l;
    if (n === "__v_isReadonly")
      return l;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (l ? r ? Bl : Gl : r ? za : Hl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = Y(t);
    if (!l) {
      let i;
      if (o && (i = Fa[n]))
        return i;
      if (n === "hasOwnProperty")
        return Ua;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      he(t) ? t : s
    );
    return (Lt(n) ? $l.has(n) : $a(n)) || (l || ue(t, "get", n), r) ? a : he(a) ? o && Gs(n) ? a : a.value : ce(a) ? l ? Yl(a) : jl(a) : a;
  }
}
class xa extends Ul {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, l) {
    let r = t[n];
    if (!this._isShallow) {
      const i = et(r);
      if (!be(s) && !et(s) && (r = $(r), s = $(s)), !Y(t) && he(r) && !he(s))
        return i ? !1 : (r.value = s, !0);
    }
    const o = Y(t) && Gs(n) ? Number(n) < t.length : se(t, n), a = Reflect.set(
      t,
      n,
      s,
      he(t) ? t : l
    );
    return t === $(l) && (o ? it(s, r) && at(t, "set", n, s, r) : at(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = se(t, n), l = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && at(t, "delete", n, void 0, l), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Lt(n) || !$l.has(n)) && ue(t, "has", n), s;
  }
  ownKeys(t) {
    return ue(
      t,
      "iterate",
      Y(t) ? "length" : vt
    ), Reflect.ownKeys(t);
  }
}
class xl extends Ul {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Wa = /* @__PURE__ */ new xa(), Ha = /* @__PURE__ */ new xl(), Ga = /* @__PURE__ */ new xl(!0), qs = (e) => e, es = (e) => Reflect.getPrototypeOf(e);
function An(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const l = $(e), r = $(t);
  n || (it(t, r) && ue(l, "get", t), ue(l, "get", r));
  const { has: o } = es(l), a = s ? qs : n ? Zs : me;
  if (o.call(l, t))
    return a(e.get(t));
  if (o.call(l, r))
    return a(e.get(r));
  e !== l && e.get(t);
}
function Dn(e, t = !1) {
  const n = this.__v_raw, s = $(n), l = $(e);
  return t || (it(e, l) && ue(s, "has", e), ue(s, "has", l)), e === l ? n.has(e) : n.has(e) || n.has(l);
}
function Pn(e, t = !1) {
  return e = e.__v_raw, !t && ue($(e), "iterate", vt), Reflect.get(e, "size", e);
}
function Sr(e, t = !1) {
  !t && !be(e) && !et(e) && (e = $(e));
  const n = $(this);
  return es(n).has.call(n, e) || (n.add(e), at(n, "add", e, e)), this;
}
function Lr(e, t, n = !1) {
  !n && !be(t) && !et(t) && (t = $(t));
  const s = $(this), { has: l, get: r } = es(s);
  let o = l.call(s, e);
  o ? process.env.NODE_ENV !== "production" && Wl(s, l, e) : (e = $(e), o = l.call(s, e));
  const a = r.call(s, e);
  return s.set(e, t), o ? it(t, a) && at(s, "set", e, t, a) : at(s, "add", e, t), this;
}
function yr(e) {
  const t = $(this), { has: n, get: s } = es(t);
  let l = n.call(t, e);
  l ? process.env.NODE_ENV !== "production" && Wl(t, n, e) : (e = $(e), l = n.call(t, e));
  const r = s ? s.call(t, e) : void 0, o = t.delete(e);
  return l && at(t, "delete", e, void 0, r), o;
}
function Ir() {
  const e = $(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Et(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && at(e, "clear", void 0, void 0, n), s;
}
function Rn(e, t) {
  return function(s, l) {
    const r = this, o = r.__v_raw, a = $(o), i = t ? qs : e ? Zs : me;
    return !e && ue(a, "iterate", vt), o.forEach((_, p) => s.call(l, i(_), i(p), r));
  };
}
function Cn(e, t, n) {
  return function(...s) {
    const l = this.__v_raw, r = $(l), o = Et(r), a = e === "entries" || e === Symbol.iterator && o, i = e === "keys" && o, _ = l[e](...s), p = n ? qs : t ? Zs : me;
    return !t && ue(
      r,
      "iterate",
      i ? ys : vt
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = _.next();
        return f ? { value: c, done: f } : {
          value: a ? [p(c[0]), p(c[1])] : p(c),
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
function nt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${mn(e)} operation ${n}failed: target is readonly.`,
        $(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ba() {
  const e = {
    get(r) {
      return An(this, r);
    },
    get size() {
      return Pn(this);
    },
    has: Dn,
    add: Sr,
    set: Lr,
    delete: yr,
    clear: Ir,
    forEach: Rn(!1, !1)
  }, t = {
    get(r) {
      return An(this, r, !1, !0);
    },
    get size() {
      return Pn(this);
    },
    has: Dn,
    add(r) {
      return Sr.call(this, r, !0);
    },
    set(r, o) {
      return Lr.call(this, r, o, !0);
    },
    delete: yr,
    clear: Ir,
    forEach: Rn(!1, !0)
  }, n = {
    get(r) {
      return An(this, r, !0);
    },
    get size() {
      return Pn(this, !0);
    },
    has(r) {
      return Dn.call(this, r, !0);
    },
    add: nt("add"),
    set: nt("set"),
    delete: nt("delete"),
    clear: nt("clear"),
    forEach: Rn(!0, !1)
  }, s = {
    get(r) {
      return An(this, r, !0, !0);
    },
    get size() {
      return Pn(this, !0);
    },
    has(r) {
      return Dn.call(this, r, !0);
    },
    add: nt("add"),
    set: nt("set"),
    delete: nt("delete"),
    clear: nt("clear"),
    forEach: Rn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Cn(r, !1, !1), n[r] = Cn(r, !0, !1), t[r] = Cn(r, !1, !0), s[r] = Cn(
      r,
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
  ja,
  Ya,
  Ka,
  Xa
] = /* @__PURE__ */ Ba();
function Qs(e, t) {
  const n = t ? e ? Xa : Ka : e ? Ya : ja;
  return (s, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? s : Reflect.get(
    se(n, l) && l in s ? n : s,
    l,
    r
  );
}
const Ja = {
  get: /* @__PURE__ */ Qs(!1, !1)
}, qa = {
  get: /* @__PURE__ */ Qs(!0, !1)
}, Qa = {
  get: /* @__PURE__ */ Qs(!0, !0)
};
function Wl(e, t, n) {
  const s = $(n);
  if (s !== n && t.call(e, s)) {
    const l = yl(e);
    Ye(
      `Reactive ${l} contains both the raw and reactive versions of the same object${l === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Hl = /* @__PURE__ */ new WeakMap(), za = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap();
function Za(e) {
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
function ei(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Za(yl(e));
}
function jl(e) {
  return et(e) ? e : zs(
    e,
    !1,
    Wa,
    Ja,
    Hl
  );
}
function Yl(e) {
  return zs(
    e,
    !0,
    Ha,
    qa,
    Gl
  );
}
function wn(e) {
  return zs(
    e,
    !0,
    Ga,
    Qa,
    Bl
  );
}
function zs(e, t, n, s, l) {
  if (!ce(e))
    return process.env.NODE_ENV !== "production" && Ye(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = l.get(e);
  if (r)
    return r;
  const o = ei(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? s : n
  );
  return l.set(e, a), a;
}
function Nt(e) {
  return et(e) ? Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function be(e) {
  return !!(e && e.__v_isShallow);
}
function Hn(e) {
  return e ? !!e.__v_raw : !1;
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function ti(e) {
  return !se(e, "__v_skip") && Object.isExtensible(e) && La(e, "__v_skip", !0), e;
}
const me = (e) => ce(e) ? jl(e) : e, Zs = (e) => ce(e) ? Yl(e) : e;
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ct(e) {
  return Xl(e, !1);
}
function Kl(e) {
  return Xl(e, !0);
}
function Xl(e, t) {
  return he(e) ? e : new ni(e, t);
}
class ni {
  constructor(t, n) {
    this.dep = new Js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : $(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || be(t) || et(t);
    t = s ? t : $(t), it(t, n) && (this._rawValue = t, this._value = s ? t : me(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function si(e) {
  return he(e) ? e.value : e;
}
const ri = {
  get: (e, t, n) => t === "__v_raw" ? e : si(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const l = e[t];
    return he(l) && !he(n) ? (l.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function li(e) {
  return Nt(e) ? e : new Proxy(e, ri);
}
class oi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    B !== this)
      return Cl(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return kl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Ye("Write operation failed: computed value is readonly");
  }
}
function ai(e, t, n = !1) {
  let s, l;
  ne(e) ? s = e : (s = e.get, l = e.set);
  const r = new oi(s, l, n);
  return process.env.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const Mn = {}, Gn = /* @__PURE__ */ new WeakMap();
let gt;
function ii(e, t = !1, n = gt) {
  if (n) {
    let s = Gn.get(n);
    s || Gn.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Ye(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function ci(e, t, n = Re) {
  const { immediate: s, deep: l, once: r, scheduler: o, augmentJob: a, call: i } = n, _ = (N) => {
    (n.onWarn || Ye)(
      "Invalid watch source: ",
      N,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (N) => l ? N : be(N) || l === !1 || l === 0 ? lt(N, 1) : lt(N);
  let c, f, E, m, g = !1, T = !1;
  if (he(e) ? (f = () => e.value, g = be(e)) : Nt(e) ? (f = () => p(e), g = !0) : Y(e) ? (T = !0, g = e.some((N) => Nt(N) || be(N)), f = () => e.map((N) => {
    if (he(N))
      return N.value;
    if (Nt(N))
      return p(N);
    if (ne(N))
      return i ? i(N, 2) : N();
    process.env.NODE_ENV !== "production" && _(N);
  })) : ne(e) ? t ? f = i ? () => i(e, 2) : e : f = () => {
    if (E) {
      Sn();
      try {
        E();
      } finally {
        Ln();
      }
    }
    const N = gt;
    gt = c;
    try {
      return i ? i(e, 3, [m]) : e(m);
    } finally {
      gt = N;
    }
  } : (f = Vt, process.env.NODE_ENV !== "production" && _(e)), t && l) {
    const N = f, O = l === !0 ? 1 / 0 : l;
    f = () => lt(N(), O);
  }
  const I = Ca(), A = () => {
    c.stop(), I && va(I.effects, c);
  };
  if (r && t) {
    const N = t;
    t = (...O) => {
      N(...O), A();
    };
  }
  let h = T ? new Array(e.length).fill(Mn) : Mn;
  const b = (N) => {
    if (!(!(c.flags & 1) || !c.dirty && !N))
      if (t) {
        const O = c.run();
        if (l || g || (T ? O.some((L, R) => it(L, h[R])) : it(O, h))) {
          E && E();
          const L = gt;
          gt = c;
          try {
            const R = [
              O,
              // pass undefined as the old value when it's changed for the first time
              h === Mn ? void 0 : T && h[0] === Mn ? [] : h,
              m
            ];
            i ? i(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            ), h = O;
          } finally {
            gt = L;
          }
        }
      } else
        c.run();
  };
  return a && a(b), c = new wa(f), c.scheduler = o ? () => o(b, !1) : b, m = (N) => ii(N, !1, c), E = c.onStop = () => {
    const N = Gn.get(c);
    if (N) {
      if (i)
        i(N, 4);
      else
        for (const O of N) O();
      Gn.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? b(!0) : h = c.run() : o ? o(b.bind(null, !0), !0) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, he(e))
    lt(e.value, t, n);
  else if (Y(e))
    for (let s = 0; s < e.length; s++)
      lt(e[s], t, n);
  else if (Sl(e) || Et(e))
    e.forEach((s) => {
      lt(s, t, n);
    });
  else if (Il(e)) {
    for (const s in e)
      lt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && lt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const bt = [];
function ui(e) {
  bt.push(e);
}
function fi() {
  bt.pop();
}
let ps = !1;
function X(e, ...t) {
  if (ps) return;
  ps = !0, Sn();
  const n = bt.length ? bt[bt.length - 1].component : null, s = n && n.appContext.config.warnHandler, l = di();
  if (s)
    ts(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var o, a;
          return (a = (o = r.toString) == null ? void 0 : o.call(r)) != null ? a : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        l.map(
          ({ vnode: r }) => `at <${go(n, r.type)}>`
        ).join(`
`),
        l
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    l.length && r.push(`
`, ..._i(l)), console.warn(...r);
  }
  Ln(), ps = !1;
}
function di() {
  let e = bt[bt.length - 1];
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
function _i(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...pi(n));
  }), t;
}
function pi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, l = ` at <${go(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [l, ...mi(e.props), r] : [l + r];
}
function mi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Jl(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Jl(e, t, n) {
  return Le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : he(t) ? (t = Jl(e, $(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ne(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = $(t), n ? t : [`${e}=`, t]);
}
const er = {
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
function ts(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (l) {
    nr(l, t, n);
  }
}
function tr(e, t, n, s) {
  if (ne(e)) {
    const l = ts(e, t, n, s);
    return l && ba(l) && l.catch((r) => {
      nr(r, t, n);
    }), l;
  }
  if (Y(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(tr(e[r], t, n, s));
    return l;
  } else process.env.NODE_ENV !== "production" && X(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function nr(e, t, n, s = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Re;
  if (t) {
    let a = t.parent;
    const i = t.proxy, _ = process.env.NODE_ENV !== "production" ? er[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const p = a.ec;
      if (p) {
        for (let c = 0; c < p.length; c++)
          if (p[c](e, i, _) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      Sn(), ts(r, null, 10, [
        e,
        i,
        _
      ]), Ln();
      return;
    }
  }
  hi(e, n, l, s, o);
}
function hi(e, t, n, s = !0, l = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = er[t];
    if (n && ui(n), X(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && fi(), s)
      throw e;
    console.error(e);
  } else {
    if (l)
      throw e;
    console.error(e);
  }
}
const Ce = [];
let Qe = -1;
const $t = [];
let rt = null, wt = 0;
const ql = /* @__PURE__ */ Promise.resolve();
let Bn = null;
const gi = 100;
function Ei(e) {
  const t = Bn || ql;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vi(e) {
  let t = Qe + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, l = Ce[s], r = vn(l);
    r < e || r === e && l.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function sr(e) {
  if (!(e.flags & 1)) {
    const t = vn(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vn(n) ? Ce.push(e) : Ce.splice(vi(t), 0, e), e.flags |= 1, Ql();
  }
}
function Ql() {
  Bn || (Bn = ql.then(Zl));
}
function zl(e) {
  Y(e) ? $t.push(...e) : rt && e.id === -1 ? rt.splice(wt + 1, 0, e) : e.flags & 1 || ($t.push(e), e.flags |= 1), Ql();
}
function Ni(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (n, s) => vn(n) - vn(s)
    );
    if ($t.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), wt = 0; wt < rt.length; wt++) {
      const n = rt[wt];
      process.env.NODE_ENV !== "production" && eo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    rt = null, wt = 0;
  }
}
const vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zl(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => eo(e, n) : Vt;
  try {
    for (Qe = 0; Qe < Ce.length; Qe++) {
      const n = Ce[Qe];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ts(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Qe < Ce.length; Qe++) {
      const n = Ce[Qe];
      n && (n.flags &= -2);
    }
    Qe = -1, Ce.length = 0, Ni(e), Bn = null, (Ce.length || $t.length) && Zl(e);
  }
}
function eo(e, t) {
  const n = e.get(t) || 0;
  if (n > gi) {
    const s = t.i, l = s && ar(s.type);
    return nr(
      `Maximum recursive updates exceeded${l ? ` in component <${l}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const ms = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Al().__VUE_HMR_RUNTIME__ = {
  createRecord: hs(bi),
  rerender: hs(Oi),
  reload: hs(Ti)
});
const jn = /* @__PURE__ */ new Map();
function bi(e, t) {
  return jn.has(e) ? !1 : (jn.set(e, {
    initialDef: Yn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Yn(e) {
  return Eo(e) ? e.__vccOpts : e;
}
function Oi(e, t) {
  const n = jn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Yn(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function Ti(e, t) {
  const n = jn.get(e);
  if (!n) return;
  t = Yn(t), Ar(n.initialDef, t);
  const s = [...n.instances];
  for (let l = 0; l < s.length; l++) {
    const r = s[l], o = Yn(r.type);
    let a = ms.get(o);
    a || (o !== n.initialDef && Ar(o, t), ms.set(o, a = /* @__PURE__ */ new Set())), a.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (a.add(r), r.ceReload(t.styles), a.delete(r)) : r.parent ? sr(() => {
      r.parent.update(), a.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(o);
  }
  zl(() => {
    ms.clear();
  });
}
function Ar(e, t) {
  De(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function hs(e) {
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
let Mt, kn = [];
function to(e, t) {
  var n, s;
  Mt = e, Mt ? (Mt.enabled = !0, kn.forEach(({ event: l, args: r }) => Mt.emit(l, ...r)), kn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    to(r, t);
  }), setTimeout(() => {
    Mt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, kn = []);
  }, 3e3)) : kn = [];
}
let Be = null, Si = null;
function xe(e, t) {
  return process.env.NODE_ENV !== "production" && X("withDirectives can only be used inside render functions."), e;
}
const Li = (e) => e.__isTeleport;
function no(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, no(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    De({ name: e.name }, t, { setup: e })
  ) : e;
}
function yi(e, t, n = ft, s = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Sn();
      const a = ho(n), i = tr(t, n, e, o);
      return a(), Ln(), i;
    });
    return s ? l.unshift(r) : l.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const l = Ta(er[e].replace(/ hook$/, ""));
    X(
      `${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const lr = (e) => (t, n = ft) => {
  (!ns || e === "sp") && yi(e, (...s) => t(...s), n);
}, Ii = lr("bm"), Ai = lr("m"), Di = lr("um"), so = "components";
function Te(e, t) {
  return lo(so, e, !0, t) || e;
}
const ro = Symbol.for("v-ndc");
function Pi(e) {
  return Le(e) ? lo(so, e, !1) || e : e || ro;
}
function lo(e, t, n = !0, s = !1) {
  const l = ft;
  if (l) {
    const r = l.type;
    {
      const a = ar(
        r,
        !1
      );
      if (a && (a === t || a === Wn(t) || a === mn(Wn(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Dr(l[e] || r[e], t) || // global registration
      Dr(l.appContext[e], t)
    );
    return !o && s ? r : (process.env.NODE_ENV !== "production" && n && !o && X(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), o);
  } else process.env.NODE_ENV !== "production" && X(
    `resolve${mn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Dr(e, t) {
  return e && (e[t] || e[Wn(t)] || e[mn(Wn(t))]);
}
function Pr(e, t, n, s) {
  let l;
  const r = n, o = Y(e);
  if (o || Le(e)) {
    const a = o && Nt(e);
    let i = !1;
    a && (i = !be(e), e = Zn(e)), l = new Array(e.length);
    for (let _ = 0, p = e.length; _ < p; _++)
      l[_] = t(
        i ? me(e[_]) : e[_],
        _,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && X(`The v-for range expect an integer value but got ${e}.`), l = new Array(e);
    for (let a = 0; a < e; a++)
      l[a] = t(a + 1, a, void 0, r);
  } else if (ce(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (a, i) => t(a, i, void 0, r)
      );
    else {
      const a = Object.keys(e);
      l = new Array(a.length);
      for (let i = 0, _ = a.length; i < _; i++) {
        const p = a[i];
        l[i] = t(e[p], p, i, r);
      }
    }
  else
    l = [];
  return l;
}
const Is = (e) => e ? qi(e) ? Qi(e) : Is(e.parent) : null, pn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ De(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? wn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? wn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? wn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? wn(e.refs) : e.refs,
    $parent: (e) => Is(e.parent),
    $root: (e) => Is(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      sr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ei.bind(e.proxy)),
    $watch: (e) => Hi.bind(e)
  })
), Ri = (e) => e === "_" || e === "$", gs = (e, t) => e !== Re && !e.__isScriptSetup && se(e, t), Ci = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: l, props: r, accessCache: o, type: a, appContext: i } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let _;
    if (t[0] !== "$") {
      const E = o[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return s[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (gs(s, t))
          return o[t] = 1, s[t];
        if (l !== Re && se(l, t))
          return o[t] = 2, l[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (_ = e.propsOptions[0]) && se(_, t)
        )
          return o[t] = 3, r[t];
        if (n !== Re && se(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const p = pn[t];
    let c, f;
    if (p)
      return t === "$attrs" ? (ue(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && ue(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Re && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = i.config.globalProperties, se(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && Be && (!Le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (l !== Re && Ri(t[0]) && se(l, t) ? X(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && X(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: l, ctx: r } = e;
    return gs(l, t) ? (l[t] = n, !0) : process.env.NODE_ENV !== "production" && l.__isScriptSetup && se(l, t) ? (X(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Re && se(s, t) ? (s[t] = n, !0) : se(e.props, t) ? (process.env.NODE_ENV !== "production" && X(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && X(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: l, propsOptions: r }
  }, o) {
    let a;
    return !!n[o] || e !== Re && se(e, o) || gs(t, o) || (a = r[0]) && se(a, o) || se(s, o) || se(pn, o) || se(l.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Ci.ownKeys = (e) => (X(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Rr(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function wi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = r.get(t);
  let i;
  return a ? i = a : !l.length && !n && !s ? i = t : (i = {}, l.length && l.forEach(
    (_) => Kn(i, _, o, !0)
  ), Kn(i, t, o)), ce(t) && r.set(t, i), i;
}
function Kn(e, t, n, s = !1) {
  const { mixins: l, extends: r } = t;
  r && Kn(e, r, n, !0), l && l.forEach(
    (o) => Kn(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      process.env.NODE_ENV !== "production" && X(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Mi[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Mi = {
  data: Cr,
  props: Mr,
  emits: Mr,
  // objects
  methods: fn,
  computed: fn,
  // lifecycle
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  // assets
  components: fn,
  directives: fn,
  // watch
  watch: Fi,
  // provide / inject
  provide: Cr,
  inject: ki
};
function Cr(e, t) {
  return t ? e ? function() {
    return De(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ki(e, t) {
  return fn(wr(e), wr(t));
}
function wr(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function fn(e, t) {
  return e ? De(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mr(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : De(
    /* @__PURE__ */ Object.create(null),
    Rr(e),
    Rr(t ?? {})
  ) : t;
}
function Fi(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = De(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ge(e[s], t[s]);
  return n;
}
let Vi = null;
function oo(e, t, n = !1) {
  const s = ft || Be;
  if (s || Vi) {
    const l = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && X(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && X("inject() can only be used inside setup() or functional components.");
}
const $i = {}, ao = (e) => Object.getPrototypeOf(e) === $i, Ui = ji, xi = Symbol.for("v-scx"), Wi = () => {
  {
    const e = oo(xi);
    return e || process.env.NODE_ENV !== "production" && X(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function As(e, t, n) {
  return process.env.NODE_ENV !== "production" && !ne(t) && X(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), io(e, t, n);
}
function io(e, t, n = Re) {
  const { immediate: s, deep: l, flush: r, once: o } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && X(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), l !== void 0 && X(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && X(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = De({}, n);
  process.env.NODE_ENV !== "production" && (a.onWarn = X);
  let i;
  if (ns)
    if (r === "sync") {
      const f = Wi();
      i = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!t || s)
      a.once = !0;
    else {
      const f = () => {
      };
      return f.stop = Vt, f.resume = Vt, f.pause = Vt, f;
    }
  const _ = ft;
  a.call = (f, E, m) => tr(f, _, E, m);
  let p = !1;
  r === "post" ? a.scheduler = (f) => {
    Ui(f, _ && _.suspense);
  } : r !== "sync" && (p = !0, a.scheduler = (f, E) => {
    E ? f() : sr(f);
  }), a.augmentJob = (f) => {
    t && (f.flags |= 4), p && (f.flags |= 2, _ && (f.id = _.uid, f.i = _));
  };
  const c = ci(e, t, a);
  return i && i.push(c), c;
}
function Hi(e, t, n) {
  const s = this.proxy, l = Le(e) ? e.includes(".") ? Gi(s, e) : () => s[e] : e.bind(s, s);
  let r;
  ne(t) ? r = t : (r = t.handler, n = t);
  const o = ho(this), a = io(l, r.bind(s), n);
  return o(), a;
}
function Gi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let l = 0; l < n.length && s; l++)
      s = s[n[l]];
    return s;
  };
}
const Bi = (e) => e.__isSuspense;
function ji(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : zl(e);
}
const Ut = Symbol.for("v-fgt"), co = Symbol.for("v-txt"), Ds = Symbol.for("v-cmt"), Vn = [];
let ke = null;
function W(e = !1) {
  Vn.push(ke = e ? null : []);
}
function Yi() {
  Vn.pop(), ke = Vn[Vn.length - 1] || null;
}
function uo(e) {
  return e.dynamicChildren = ke || ga, Yi(), ke && ke.push(e), e;
}
function ae(e, t, n, s, l, r) {
  return uo(
    Q(
      e,
      t,
      n,
      s,
      l,
      r,
      !0
    )
  );
}
function ve(e, t, n, s, l) {
  return uo(
    de(
      e,
      t,
      n,
      s,
      l,
      !0
    )
  );
}
function Ps(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Ki = (...e) => _o(
  ...e
), fo = ({ key: e }) => e ?? null, $n = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || he(e) || ne(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function Q(e, t = null, n = null, s = 0, l = null, r = e === Ut ? 0 : 1, o = !1, a = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fo(t),
    ref: t && $n(t),
    scopeId: Si,
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
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Be
  };
  return a ? (or(i, n), r & 128 && e.normalize(i)) : n && (i.shapeFlag |= Le(n) ? 8 : 16), process.env.NODE_ENV !== "production" && i.key !== i.key && X("VNode created with invalid key (NaN). VNode type:", i.type), // avoid a block node from tracking itself
  !o && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && ke.push(i), i;
}
const de = process.env.NODE_ENV !== "production" ? Ki : _o;
function _o(e, t = null, n = null, s = 0, l = null, r = !1) {
  if ((!e || e === ro) && (process.env.NODE_ENV !== "production" && !e && X(`Invalid vnode type when creating vnode: ${e}.`), e = Ds), Ps(e)) {
    const a = Xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && or(a, n), !r && ke && (a.shapeFlag & 6 ? ke[ke.indexOf(e)] = a : ke.push(a)), a.patchFlag = -2, a;
  }
  if (Eo(e) && (e = e.__vccOpts), t) {
    t = Xi(t);
    let { class: a, style: i } = t;
    a && !Le(a) && (t.class = hn(a)), ce(i) && (Hn(i) && !Y(i) && (i = De({}, i)), t.style = js(i));
  }
  const o = Le(e) ? 1 : Bi(e) ? 128 : Li(e) ? 64 : ce(e) ? 4 : ne(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && Hn(e) && (e = $(e), X(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Q(
    e,
    t,
    n,
    s,
    l,
    o,
    r,
    !0
  );
}
function Xi(e) {
  return e ? Hn(e) || ao(e) ? De({}, e) : e : null;
}
function Xn(e, t, n = !1, s = !1) {
  const { props: l, ref: r, patchFlag: o, children: a, transition: i } = e, _ = t ? Ji(l || {}, t) : l, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && fo(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Y(r) ? r.concat($n(t)) : [r, $n(t)] : $n(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && Y(a) ? a.map(po) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ut ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: i,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xn(e.ssContent),
    ssFallback: e.ssFallback && Xn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return i && s && no(
    p,
    i.clone(p)
  ), p;
}
function po(e) {
  const t = Xn(e);
  return Y(e.children) && (t.children = e.children.map(po)), t;
}
function mo(e = " ", t = 0) {
  return de(co, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (W(), ve(Ds, null, e)) : de(Ds, null, e);
}
function or(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), or(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !ao(t) ? t._ctx = Be : l === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [mo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ji(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const l in s)
      if (l === "class")
        t.class !== s.class && (t.class = hn([t.class, s.class]));
      else if (l === "style")
        t.style = js([t.style, s.style]);
      else if (Ea(l)) {
        const r = t[l], o = s[l];
        o && r !== o && !(Y(r) && r.includes(o)) && (t[l] = r ? [].concat(r, o) : o);
      } else l !== "" && (t[l] = s[l]);
  }
  return t;
}
let ft = null;
const xt = () => ft || Be;
let Rs;
{
  const e = Al(), t = (n, s) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(s), (r) => {
      l.length > 1 ? l.forEach((o) => o(r)) : l[0](r);
    };
  };
  Rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ft = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => ns = n
  );
}
const ho = (e) => {
  const t = ft;
  return Rs(e), e.scope.on(), () => {
    e.scope.off(), Rs(t);
  };
};
function qi(e) {
  return e.vnode.shapeFlag & 4;
}
let ns = !1;
process.env.NODE_ENV;
function Qi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(li(ti(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in pn)
        return pn[n](e);
    },
    has(t, n) {
      return n in t || n in pn;
    }
  })) : e.proxy;
}
const zi = /(?:^|[-_])(\w)/g, Zi = (e) => e.replace(zi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ar(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function go(e, t, n = !1) {
  let s = ar(t);
  if (!s && t.__file) {
    const l = t.__file.match(/([^/\\]+)\.\w+$/);
    l && (s = l[1]);
  }
  if (!s && e && e.parent) {
    const l = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    s = l(
      e.components || e.parent.type.components
    ) || l(e.appContext.components);
  }
  return s ? Zi(s) : n ? "App" : "Anonymous";
}
function Eo(e) {
  return ne(e) && "__vccOpts" in e;
}
const We = (e, t) => {
  const n = ai(e, t, ns);
  if (process.env.NODE_ENV !== "production") {
    const s = xt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function vo(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ce(t) && !Y(t) ? Ps(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ps(n) && (n = [n]), de(e, t, n));
}
function ec() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, l = {
    __vue_custom_formatter: !0,
    header(c) {
      return ce(c) ? c.__isVue ? ["div", e, "VueInstance"] : he(c) ? [
        "div",
        {},
        ["span", e, p(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in c ? c._value : c),
        ">"
      ] : Nt(c) ? [
        "div",
        {},
        ["span", e, be(c) ? "ShallowReactive" : "Reactive"],
        "<",
        a(c),
        `>${et(c) ? " (readonly)" : ""}`
      ] : et(c) ? [
        "div",
        {},
        ["span", e, be(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...r(c.$)
        ];
    }
  };
  function r(c) {
    const f = [];
    c.type.props && c.props && f.push(o("props", $(c.props))), c.setupState !== Re && f.push(o("setup", c.setupState)), c.data !== Re && f.push(o("data", $(c.data)));
    const E = i(c, "computed");
    E && f.push(o("computed", E));
    const m = i(c, "inject");
    return m && f.push(o("injected", m)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), f;
  }
  function o(c, f) {
    return f = De({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((E) => [
          "div",
          {},
          ["span", s, E + ": "],
          a(f[E], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, f = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : ce(c) ? ["object", { object: f ? $(c) : c }] : ["span", n, String(c)];
  }
  function i(c, f) {
    const E = c.type;
    if (ne(E))
      return;
    const m = {};
    for (const g in c.ctx)
      _(E, g, f) && (m[g] = c.ctx[g]);
    return m;
  }
  function _(c, f, E) {
    const m = c[E];
    if (Y(m) && m.includes(f) || ce(m) && f in m || c.extends && _(c.extends, f, E) || c.mixins && c.mixins.some((g) => _(g, f, E)))
      return !0;
  }
  function p(c) {
    return be(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(l) : window.devtoolsFormatters = [l];
}
const tc = process.env.NODE_ENV !== "production" ? X : Vt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nc;
const kr = typeof window < "u" && window.trustedTypes;
if (kr)
  try {
    nc = /* @__PURE__ */ kr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && tc(`Error creating trusted types policy: ${e}`);
  }
const No = Symbol("_vod"), sc = Symbol("_vsh"), He = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[No] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : an(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), an(e, !0), s.enter(e)) : s.leave(e, () => {
      an(e, !1);
    }) : an(e, t));
  },
  beforeUnmount(e, { value: t }) {
    an(e, t);
  }
};
process.env.NODE_ENV !== "production" && (He.name = "show");
function an(e, t) {
  e.style.display = t ? e[No] : "none", e[sc] = !t;
}
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function cn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
const Fr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => Sa(t, n) : t;
};
function rc(e) {
  e.target.composing = !0;
}
function Vr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Es = Symbol("_assign"), lc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, l) {
    e[Es] = Fr(l);
    const r = s || l.props && l.props.type === "number";
    cn(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Nr(a)), e[Es](a);
    }), n && cn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (cn(e, "compositionstart", rc), cn(e, "compositionend", Vr), cn(e, "change", Vr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: l, number: r } }, o) {
    if (e[Es] = Fr(o), e.composing) return;
    const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? Nr(e.value) : e.value, i = t ?? "";
    a !== i && (document.activeElement === e && e.type !== "range" && (s && t === n || l && e.value.trim() === i) || (e.value = i));
  }
};
/**
* vue v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oc() {
  ec();
}
process.env.NODE_ENV !== "production" && oc();
const $e = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, ac = {
  name: "v-select-all",
  display: "Select all",
  emits: ["update-select-all"],
  props: {
    items: Array
  }
};
function ic(e, t, n, s, l, r) {
  return W(), ae("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (o) => e.$emit("update-select-all"))
  }, Ze(e.$t("selectAll")), 1);
}
const bo = /* @__PURE__ */ $e(ac, [["render", ic]]), cc = {
  name: "v-deselect-all",
  display: "Deselect all",
  emits: ["update-deselect-all"],
  props: {
    click: Function,
    items: Array
  }
};
function uc(e, t, n, s, l, r) {
  return W(), ae("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (o) => e.$emit("update-deselect-all"))
  }, Ze(e.$t("deselectAll")), 1);
}
const Oo = /* @__PURE__ */ $e(cc, [["render", uc]]), fc = {
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
}, dc = ["placeholder"];
function _c(e, t, n, s, l, r) {
  return xe((W(), ae("input", {
    type: "text",
    "onUpdate:modelValue": t[0] || (t[0] = (o) => l.inputVal = o),
    placeholder: l.thePlaceholder
  }, null, 8, dc)), [
    [lc, l.inputVal]
  ]);
}
const To = /* @__PURE__ */ $e(fc, [["render", _c]]), pc = {
  name: "v-no-results",
  display: "No results",
  methods: {}
}, mc = { class: "no-results" };
function hc(e, t, n, s, l, r) {
  return W(), ae("li", mc, [
    Q("span", null, Ze(e.$t("searchNoResult")), 1)
  ]);
}
const gc = /* @__PURE__ */ $e(pc, [["render", hc]]), Ec = {
  name: "v-no-selection",
  display: "No selection",
  methods: {}
}, vc = { class: "no-selection" };
function Nc(e, t, n, s, l, r) {
  return W(), ae("li", vc, [
    Q("span", null, Ze(e.$t("searchParentSelected")), 1)
  ]);
}
const bc = /* @__PURE__ */ $e(Ec, [["render", Nc]]), Oc = {
  name: "v-list",
  display: "List",
  mounted() {
  },
  components: {
    "v-no-results": gc,
    "v-no-selection": bc
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
}, Tc = { class: "vss-list-ul" }, Sc = ["onClick"], Lc = { style: {} }, yc = {
  key: 0,
  class: "vss-list-badge"
}, Ic = { key: 0 }, Ac = ["onClick"];
function Dc(e, t, n, s, l, r) {
  const o = Te("v-no-results"), a = Te("v-no-selection");
  return W(), ae("ul", Tc, [
    (W(!0), ae(Ut, null, Pr(n.items, (i, _) => xe((W(), ae("li", {
      key: _,
      onClick: (p) => n.hasChildren ? !1 : r.toggleItem(i, {}, i.selected),
      class: hn(r.liClass(i, n.hasChildren))
    }, [
      Q("span", Lc, [
        mo(Ze(i.label) + " ", 1),
        r.showCounter(i) ? (W(), ae("small", yc, Ze(i.totalChildrenSelected), 1)) : fe("", !0)
      ]),
      n.hasChildren ? (W(), ae("ul", Ic, [
        (W(!0), ae(Ut, null, Pr(i.children, (p, c) => xe((W(), ae("li", {
          key: `${_}-${c}`,
          onClick: (f) => r.toggleItem(p, i, p.selected),
          class: hn(r.liClass(p, !1))
        }, [
          Q("span", null, Ze(p.label), 1)
        ], 10, Ac)), [
          [He, p.visible]
        ])), 128)),
        xe(de(o, null, null, 512), [
          [He, r.totalItems(i.children) === 0]
        ])
      ])) : fe("", !0)
    ], 10, Sc)), [
      [He, r.showParent(i)]
    ])), 128)),
    xe(de(a, null, null, 512), [
      [He, r.showNoSelection(n.items)]
    ]),
    xe(de(o, null, null, 512), [
      [He, r.showNoResultParent(n.items)]
    ])
  ]);
}
const So = /* @__PURE__ */ $e(Oc, [["render", Dc]]), Pc = {
  name: "v-separator",
  display: "Separator"
}, Rc = { class: "vss-span" };
function Cc(e, t, n, s, l, r) {
  return W(), ae("div", Rc, " ‹ › ");
}
const Lo = /* @__PURE__ */ $e(Pc, [["render", Cc]]), wc = {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
}, Mc = ["title"];
function kc(e, t, n, s, l, r) {
  return W(), ae("span", {
    title: e.$t("totalSelected")
  }, Ze(n.value), 9, Mc);
}
const yo = /* @__PURE__ */ $e(wc, [["render", kc]]), Io = {
  emits: ["update-selected"],
  watch: {
    modelValue(e, t) {
      JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
    },
    dataSelected(e, t) {
      this.$emit("update-selected", e, t);
    },
    orderBy() {
      this.listLeft = xn(this, this.dataList), this.listRight = xn(this, this.dataList);
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
}, Fc = {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [Io],
  components: {
    "v-select-all": bo,
    "v-deselect-all": Oo,
    "v-search": To,
    "v-separator": Lo,
    "v-list": So,
    "v-total": yo
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
      let s = Ge(this.dataSelected);
      Object.keys(t).length > 0 ? (s[t.value] === void 0 && t.visible && (s[t.value] = []), n ? e.visible && s[t.value].indexOf(e.value) === -1 && s[t.value].push(e.value) : e.visible && (s[t.value] = Tl(
        s[t.value],
        e.value
      ))) : n ? s[e.value] === void 0 && (s[e.value] = []) : delete s[e.value], this.dataSelected = s;
    },
    prepareList() {
      let e = this, t = {};
      e.dataListOriginal = Ge(e.list);
      let n = Object.keys(e.modelValue), s = e.list.filter((l) => {
        let r = l.value, o = n.indexOf(r) >= 0;
        return o ? (l.selectedDefault = !0, t[r] = []) : l.selectedDefault = !1, l.children && l.children.filter((a) => {
          let i = a.value;
          o && (e.modelValue[r].indexOf(i) >= 0 ? (a.selectedDefault = !0, t[r].push(i)) : a.selectedDefault = !1);
        }), l;
      });
      e.dataSelected = t, e.dataList = xn(e, s);
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
      let e = this, t = ot(this.searchL), n = Object.keys(this.dataSelected), s = Ge(this.listLeft);
      return s = s.filter((l) => {
        let r = ot(l.label);
        return n.indexOf(l.value) >= 0 ? l.selected = !0 : l.selected = !1, r.includes(t) ? l.visible = !0 : l.visible = !1, l.children ? (l.children = l.children.map((o) => (o.selected = !1, e.dataSelected[l.value] !== void 0 && (e.dataSelected[l.value].indexOf(o.value) >= 0 ? o.selected = !0 : o.selected = !1), o)), l.totalChildrenSelected = l.children.filter(function(o) {
          return o.selected === !0;
        }).length, l.children) : l;
      }), s;
    },
    filteredListR() {
      let e = this, t = ot(e.searchR), n = Ge(this.listLeft);
      return n = e.listRight.filter(function(l) {
        return l.children ? (l.children = l.children.map((r) => (ot(r.label).includes(t) ? r.visible = !0 : r.visible = !1, e.dataSelected[l.value] !== void 0 && (e.dataSelected[l.value].indexOf(r.value) >= 0 ? r.selected = !0 : r.selected = !1), r)), l.children) : l;
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
}, Vc = { class: "vss-list" }, $c = { class: "vss-inner-list" }, Uc = { class: "vss-footer" }, xc = { class: "vss-footer-bg" }, Wc = {
  key: 1,
  class: "vss-footer-separator"
}, Hc = { class: "vss-list" }, Gc = { class: "vss-inner-list" }, Bc = { class: "vss-footer" }, jc = { class: "vss-footer-bg" }, Yc = {
  key: 1,
  class: "vss-footer-separator"
};
function Kc(e, t, n, s, l, r) {
  const o = Te("v-search"), a = Te("v-list"), i = Te("v-select-all"), _ = Te("v-deselect-all"), p = Te("v-total"), c = Te("v-separator");
  return W(), ae("div", null, [
    Q("div", Vc, [
      Q("div", $c, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: l.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (f) => l.searchL = f)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "has-children": !1,
          type: e.type,
          items: r.filteredListL,
          onUpdatedItem: r.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", Uc, [
          Q("div", xc, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(i, {
                key: 0,
                items: l.listLeft,
                onUpdateSelectAll: r.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : fe("", !0),
              e.toggleAll ? (W(), ae("div", Wc, "/")) : fe("", !0),
              e.toggleAll ? (W(), ve(_, {
                key: 2,
                items: l.listLeft,
                onUpdateDeselectAll: r.updateLeftDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : fe("", !0)
            ]),
            e.total ? (W(), ve(p, {
              key: 0,
              value: Object.keys(l.dataSelected).length
            }, null, 8, ["value"])) : fe("", !0)
          ])
        ], 512), [
          [He, e.toggleAll || e.total]
        ])
      ])
    ]),
    de(c),
    Q("div", Hc, [
      Q("div", Gc, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: l.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (f) => l.searchR = f)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "has-children": !0,
          type: e.type,
          items: r.filteredListR,
          onUpdatedItem: r.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", Bc, [
          Q("div", jc, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(i, {
                key: 0,
                items: l.listRight,
                onUpdateSelectAll: r.updateRightSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : fe("", !0),
              e.toggleAll ? (W(), ae("div", Yc, "/")) : fe("", !0),
              e.toggleAll ? (W(), ve(_, {
                key: 2,
                items: l.listRight,
                onUpdateDeselectAll: r.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : fe("", !0)
            ]),
            e.total ? (W(), ve(p, {
              key: 0,
              value: r.totalChildrenSelected
            }, null, 8, ["value"])) : fe("", !0)
          ])
        ], 512), [
          [He, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const Xc = /* @__PURE__ */ $e(Fc, [["render", Kc]]), Jc = {
  name: "mirror-select-sides",
  display: "Mirror select sides",
  mixins: [Io],
  components: {
    "v-select-all": bo,
    "v-deselect-all": Oo,
    "v-search": To,
    "v-separator": Lo,
    "v-list": So,
    "v-total": yo
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
      let s = Ge(this.dataSelected);
      n ? s.push(e.value) : s = Tl(s, e.value), this.dataSelected = s;
    },
    prepareList() {
      this.dataListOriginal = Ge(this.list);
      let e = this, t = [], n = e.list.filter((s) => {
        let l = s.value;
        return e.modelValue.indexOf(l) >= 0 ? (s.selectedDefault = !0, t.push(l)) : s.selectedDefault = !1, s;
      });
      e.dataSelected = t, e.dataList = xn(e, n);
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
      let e = ot(this.searchL), t = this.dataSelected, n = Ge(this.listLeft);
      return n = n.filter((s) => {
        let l = ot(s.label);
        return t.indexOf(s.value) >= 0 ? (s.selected = !0, s.visible = !1) : (s.selected = !1, s.visible = !0), l.includes(e) && s.visible === !0 ? s.visible = !0 : s.visible = !1, s;
      }), n;
    },
    filteredListR() {
      let e = this, t = ot(e.searchR), n = this.dataSelected, s = Ge(e.listLeft);
      return s = s.filter((l) => {
        let r = ot(l.label);
        return n.indexOf(l.value) >= 0 ? (l.selected = !0, l.visible = !0) : (l.selected = !1, l.visible = !1), r.includes(t) && l.visible === !0 ? l.visible = !0 : l.visible = !1, l;
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
}, qc = { class: "vss-list" }, Qc = { class: "vss-inner-list" }, zc = { class: "vss-footer" }, Zc = { class: "vss-footer-bg" }, eu = { class: "vss-list" }, tu = { class: "vss-inner-list" }, nu = { class: "vss-footer" }, su = { class: "vss-footer-bg" };
function ru(e, t, n, s, l, r) {
  const o = Te("v-search"), a = Te("v-list"), i = Te("v-select-all"), _ = Te("v-total"), p = Te("v-separator"), c = Te("v-deselect-all");
  return W(), ae("div", null, [
    Q("div", qc, [
      Q("div", Qc, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: l.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (f) => l.searchL = f)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "left",
          items: r.filteredListL,
          onUpdatedItem: r.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", zc, [
          Q("div", Zc, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(i, {
                key: 0,
                items: l.listLeft,
                onUpdateSelectAll: r.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : fe("", !0)
            ]),
            e.total ? (W(), ve(_, {
              key: 0,
              value: l.dataSelected.length
            }, null, 8, ["value"])) : fe("", !0)
          ])
        ], 512), [
          [He, e.toggleAll || e.total]
        ])
      ])
    ]),
    de(p),
    Q("div", eu, [
      Q("div", tu, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: l.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (f) => l.searchR = f)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "right",
          items: r.filteredListR,
          onUpdatedItem: r.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", nu, [
          Q("div", su, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(c, {
                key: 0,
                items: l.listRight,
                onUpdateDeselectAll: r.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : fe("", !0)
            ])
          ])
        ], 512), [
          [He, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const lu = /* @__PURE__ */ $e(Jc, [["render", ru]]), ou = {
  // i18n,
  name: "vue-select-sides",
  display: "Core select sides",
  components: {
    "mirror-select-sides": lu,
    "grouped-select-sides": Xc
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
      this.listClone = Ge(e);
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
    this.setDefaultParams(), this.listClone = Ge(this.list);
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
function au(e, t, n, s, l, r) {
  return W(), ve(Pi(r.getComponent()), {
    class: "vss",
    type: l.params.type,
    list: l.listClone,
    search: l.params.search,
    total: l.params.total,
    "toggle-all": l.params.toggleAll,
    "order-by": l.params.orderBy,
    "placeholder-search-left": l.params.placeholderSearchLeft,
    "placeholder-search-right": l.params.placeholderSearchRight,
    "sort-selected-up": l.params.sortSelectedUp,
    modelValue: r.modelProp,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => r.modelProp = o),
    onUpdateSelected: r.updateSelected
  }, null, 40, ["type", "list", "search", "total", "toggle-all", "order-by", "placeholder-search-left", "placeholder-search-right", "sort-selected-up", "modelValue", "onUpdateSelected"]);
}
const iu = /* @__PURE__ */ $e(ou, [["render", au]]), cu = "Select all", uu = "Deselect all", fu = "Search...", du = "No result...", _u = "No items selected...", pu = "Total items selected", mu = {
  selectAll: cu,
  deselectAll: uu,
  searchPlaceholder: fu,
  searchNoResult: du,
  searchParentSelected: _u,
  totalSelected: pu
}, hu = "Seleccionar todos", gu = "Deseleccionar todos", Eu = "Buscar...", vu = "Sin resultados...", Nu = "Ningún elemento seleccionado...", bu = "Elementos seleccionados", Ou = {
  selectAll: hu,
  deselectAll: gu,
  searchPlaceholder: Eu,
  searchNoResult: vu,
  searchParentSelected: Nu,
  totalSelected: bu
}, Tu = "Ajouter tout", Su = "Supprimer tout", Lu = "Recherche...", yu = "Pas de résultat...", Iu = "Sélection vide...", Au = "Éléments sélectionnés", Du = {
  selectAll: Tu,
  deselectAll: Su,
  searchPlaceholder: Lu,
  searchNoResult: yu,
  searchParentSelected: Iu,
  totalSelected: Au
}, Pu = "Wybierz wszystko", Ru = "Wyczyść zaznaczenie", Cu = "Szukaj...", wu = "Brak wyników...", Mu = "Nie wybrano żadnych elementów...", ku = "Liczba wybranych elementów", Fu = {
  selectAll: Pu,
  deselectAll: Ru,
  searchPlaceholder: Cu,
  searchNoResult: wu,
  searchParentSelected: Mu,
  totalSelected: ku
}, Vu = "Selecionar todos", $u = "Remover todos", Uu = "Pesquisar...", xu = "Sem nenhum resultado...", Wu = "Nenhum item selecionado...", Hu = "Total de itens selecionados", Gu = {
  selectAll: Vu,
  deselectAll: $u,
  searchPlaceholder: Uu,
  searchNoResult: xu,
  searchParentSelected: Wu,
  totalSelected: Hu
}, Bu = "Hepsini Seç", ju = "Hepsini Çıkar", Yu = "Ara...", Ku = "Sonuç Bulunamadı...", Xu = "Hiçbiri Seçilmedi...", Ju = "Hepsi Seçildi", qu = {
  selectAll: Bu,
  deselectAll: ju,
  searchPlaceholder: Yu,
  searchNoResult: Ku,
  searchParentSelected: Xu,
  totalSelected: Ju
};
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ve = typeof window < "u";
let Ae, Ot;
if (process.env.NODE_ENV !== "production") {
  const e = Ve && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ae = (t) => {
    e.mark(t);
  }, Ot = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const Qu = /\{([0-9a-zA-Z]+)\}/g;
function ir(e, ...t) {
  return t.length === 1 && V(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Qu, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const Ke = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), zu = (e, t, n) => Zu({ l: e, k: t, s: n }), Zu = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), re = (e) => typeof e == "number" && isFinite(e), ef = (e) => Do(e) === "[object Date]", ct = (e) => Do(e) === "[object RegExp]", ss = (e) => k(e) && Object.keys(e).length === 0, _e = Object.assign;
let $r;
const ze = () => $r || ($r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ur(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const tf = Object.prototype.hasOwnProperty;
function Jn(e, t) {
  return tf.call(e, t);
}
const z = Array.isArray, K = (e) => typeof e == "function", C = (e) => typeof e == "string", F = (e) => typeof e == "boolean", V = (e) => e !== null && typeof e == "object", nf = (e) => V(e) && K(e.then) && K(e.catch), Ao = Object.prototype.toString, Do = (e) => Ao.call(e), k = (e) => {
  if (!V(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, sf = (e) => e == null ? "" : z(e) || k(e) && e.toString === Ao ? JSON.stringify(e, null, 2) : String(e);
function rf(e, t = "") {
  return e.reduce((n, s, l) => l === 0 ? n + s : n + t + s, "");
}
const xr = 2;
function lf(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let l = 0;
  const r = [];
  for (let o = 0; o < s.length; o++)
    if (l += s[o].length + 1, l >= t) {
      for (let a = o - xr; a <= o + xr || n > l; a++) {
        if (a < 0 || a >= s.length)
          continue;
        const i = a + 1;
        r.push(`${i}${" ".repeat(3 - String(i).length)}|  ${s[a]}`);
        const _ = s[a].length;
        if (a === o) {
          const p = t - (l - _) + 1, c = Math.max(1, n > l ? _ - p : n - t);
          r.push("   |  " + " ".repeat(p) + "^".repeat(c));
        } else if (a > o) {
          if (n > l) {
            const p = Math.max(Math.min(n - l, _), 1);
            r.push("   |  " + "^".repeat(p));
          }
          l += _ + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function rs(e) {
  let t = e;
  return () => ++t;
}
function le(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Wr = {};
function Po(e) {
  Wr[e] || (Wr[e] = !0, le(e));
}
function cr() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, s) {
      const l = e.get(n);
      l && l.push(s) || e.set(n, [s]);
    },
    off(n, s) {
      const l = e.get(n);
      l && l.splice(l.indexOf(s) >>> 0, 1);
    },
    emit(n, s) {
      (e.get(n) || []).slice().map((l) => l(s)), (e.get("*") || []).slice().map((l) => l(n, s));
    }
  };
}
const Fn = (e) => !V(e) || z(e);
function Un(e, t) {
  if (Fn(e) || Fn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: l } = n.pop();
    Object.keys(s).forEach((r) => {
      V(s[r]) && !V(l[r]) && (l[r] = Array.isArray(s[r]) ? [] : {}), Fn(l[r]) || Fn(s[r]) ? l[r] = s[r] : n.push({ src: s[r], des: l[r] });
    });
  }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function of(e, t, n) {
  return { line: e, column: t, offset: n };
}
function qn(e, t, n) {
  return { start: e, end: t };
}
const af = /\{([0-9a-zA-Z]+)\}/g;
function Ro(e, ...t) {
  return t.length === 1 && cf(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(af, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const Co = Object.assign, Hr = (e) => typeof e == "string", cf = (e) => e !== null && typeof e == "object";
function wo(e, t = "") {
  return e.reduce((n, s, l) => l === 0 ? n + s : n + t + s, "");
}
const ls = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, uf = {
  [ls.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function ff(e, t, ...n) {
  const s = Ro(uf[e], ...n || []), l = { message: String(s), code: e };
  return t && (l.location = t), l;
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
}, df = {
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
function Gt(e, t, n = {}) {
  const { domain: s, messages: l, args: r } = n, o = Ro((l || df)[e] || "", ...r || []), a = new SyntaxError(String(o));
  return a.code = e, t && (a.location = t), a.domain = s, a;
}
function _f(e) {
  throw e;
}
const pf = /<\/?[\w\s="/.':;#-\/]+>/, mf = (e) => pf.test(e), Je = " ", hf = "\r", Ee = `
`, gf = "\u2028", Ef = "\u2029";
function vf(e) {
  const t = e;
  let n = 0, s = 1, l = 1, r = 0;
  const o = (L) => t[L] === hf && t[L + 1] === Ee, a = (L) => t[L] === Ee, i = (L) => t[L] === Ef, _ = (L) => t[L] === gf, p = (L) => o(L) || a(L) || i(L) || _(L), c = () => n, f = () => s, E = () => l, m = () => r, g = (L) => o(L) || i(L) || _(L) ? Ee : t[L], T = () => g(n), I = () => g(n + r);
  function A() {
    return r = 0, p(n) && (s++, l = 0), o(n) && n++, n++, l++, t[n];
  }
  function h() {
    return o(n + r) && r++, r++, t[n + r];
  }
  function b() {
    n = 0, s = 1, l = 1, r = 0;
  }
  function N(L = 0) {
    r = L;
  }
  function O() {
    const L = n + r;
    for (; L !== n; )
      A();
    r = 0;
  }
  return {
    index: c,
    line: f,
    column: E,
    peekOffset: m,
    charAt: g,
    currentChar: T,
    currentPeek: I,
    next: A,
    peek: h,
    reset: b,
    resetPeek: N,
    skipToPeek: O
  };
}
const st = void 0, Nf = ".", Gr = "'", bf = "tokenizer";
function Of(e, t = {}) {
  const n = t.location !== !1, s = vf(e), l = () => s.index(), r = () => of(s.line(), s.column(), s.index()), o = r(), a = l(), i = {
    currentType: 14,
    offset: a,
    startLoc: o,
    endLoc: o,
    lastType: 14,
    lastOffset: a,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, _ = () => i, { onError: p } = t;
  function c(u, d, S, ...w) {
    const Z = _();
    if (d.column += S, d.offset += S, p) {
      const J = n ? qn(Z.startLoc, d) : null, j = Gt(u, J, {
        domain: bf,
        args: w
      });
      p(j);
    }
  }
  function f(u, d, S) {
    u.endLoc = r(), u.currentType = d;
    const w = { type: d };
    return n && (w.loc = qn(u.startLoc, u.endLoc)), S != null && (w.value = S), w;
  }
  const E = (u) => f(
    u,
    14
    /* TokenTypes.EOF */
  );
  function m(u, d) {
    return u.currentChar() === d ? (u.next(), d) : (c(M.EXPECTED_TOKEN, r(), 0, d), "");
  }
  function g(u) {
    let d = "";
    for (; u.currentPeek() === Je || u.currentPeek() === Ee; )
      d += u.currentPeek(), u.peek();
    return d;
  }
  function T(u) {
    const d = g(u);
    return u.skipToPeek(), d;
  }
  function I(u) {
    if (u === st)
      return !1;
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d === 95;
  }
  function A(u) {
    if (u === st)
      return !1;
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function h(u, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    g(u);
    const w = I(u.currentPeek());
    return u.resetPeek(), w;
  }
  function b(u, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    g(u);
    const w = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), Z = A(w);
    return u.resetPeek(), Z;
  }
  function N(u, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    g(u);
    const w = u.currentPeek() === Gr;
    return u.resetPeek(), w;
  }
  function O(u, d) {
    const { currentType: S } = d;
    if (S !== 8)
      return !1;
    g(u);
    const w = u.currentPeek() === ".";
    return u.resetPeek(), w;
  }
  function L(u, d) {
    const { currentType: S } = d;
    if (S !== 9)
      return !1;
    g(u);
    const w = I(u.currentPeek());
    return u.resetPeek(), w;
  }
  function R(u, d) {
    const { currentType: S } = d;
    if (!(S === 8 || S === 12))
      return !1;
    g(u);
    const w = u.currentPeek() === ":";
    return u.resetPeek(), w;
  }
  function D(u, d) {
    const { currentType: S } = d;
    if (S !== 10)
      return !1;
    const w = () => {
      const J = u.currentPeek();
      return J === "{" ? I(u.peek()) : J === "@" || J === "%" || J === "|" || J === ":" || J === "." || J === Je || !J ? !1 : J === Ee ? (u.peek(), w()) : U(u, !1);
    }, Z = w();
    return u.resetPeek(), Z;
  }
  function q(u) {
    g(u);
    const d = u.currentPeek() === "|";
    return u.resetPeek(), d;
  }
  function ye(u) {
    const d = g(u), S = u.currentPeek() === "%" && u.peek() === "{";
    return u.resetPeek(), {
      isModulo: S,
      hasSpace: d.length > 0
    };
  }
  function U(u, d = !0) {
    const S = (Z = !1, J = "", j = !1) => {
      const v = u.currentPeek();
      return v === "{" ? J === "%" ? !1 : Z : v === "@" || !v ? J === "%" ? !0 : Z : v === "%" ? (u.peek(), S(Z, "%", !0)) : v === "|" ? J === "%" || j ? !0 : !(J === Je || J === Ee) : v === Je ? (u.peek(), S(!0, Je, j)) : v === Ee ? (u.peek(), S(!0, Ee, j)) : !0;
    }, w = S();
    return d && u.resetPeek(), w;
  }
  function pe(u, d) {
    const S = u.currentChar();
    return S === st ? st : d(S) ? (u.next(), S) : null;
  }
  function Bt(u) {
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36;
  }
  function jt(u) {
    return pe(u, Bt);
  }
  function Ue(u) {
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36 || // $
    d === 45;
  }
  function Yt(u) {
    return pe(u, Ue);
  }
  function Kt(u) {
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function Xt(u) {
    return pe(u, Kt);
  }
  function Jt(u) {
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57 || // 0-9
    d >= 65 && d <= 70 || // A-F
    d >= 97 && d <= 102;
  }
  function qt(u) {
    return pe(u, Jt);
  }
  function Pe(u) {
    let d = "", S = "";
    for (; d = Xt(u); )
      S += d;
    return S;
  }
  function yt(u) {
    T(u);
    const d = u.currentChar();
    return d !== "%" && c(M.EXPECTED_TOKEN, r(), 0, d), u.next(), "%";
  }
  function It(u) {
    let d = "";
    for (; ; ) {
      const S = u.currentChar();
      if (S === "{" || S === "}" || S === "@" || S === "|" || !S)
        break;
      if (S === "%")
        if (U(u))
          d += S, u.next();
        else
          break;
      else if (S === Je || S === Ee)
        if (U(u))
          d += S, u.next();
        else {
          if (q(u))
            break;
          d += S, u.next();
        }
      else
        d += S, u.next();
    }
    return d;
  }
  function Qt(u) {
    T(u);
    let d = "", S = "";
    for (; d = Yt(u); )
      S += d;
    return u.currentChar() === st && c(M.UNTERMINATED_CLOSING_BRACE, r(), 0), S;
  }
  function zt(u) {
    T(u);
    let d = "";
    return u.currentChar() === "-" ? (u.next(), d += `-${Pe(u)}`) : d += Pe(u), u.currentChar() === st && c(M.UNTERMINATED_CLOSING_BRACE, r(), 0), d;
  }
  function Zt(u) {
    return u !== Gr && u !== Ee;
  }
  function yn(u) {
    T(u), m(u, "'");
    let d = "", S = "";
    for (; d = pe(u, Zt); )
      d === "\\" ? S += en(u) : S += d;
    const w = u.currentChar();
    return w === Ee || w === st ? (c(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), w === Ee && (u.next(), m(u, "'")), S) : (m(u, "'"), S);
  }
  function en(u) {
    const d = u.currentChar();
    switch (d) {
      case "\\":
      case "'":
        return u.next(), `\\${d}`;
      case "u":
        return At(u, d, 4);
      case "U":
        return At(u, d, 6);
      default:
        return c(M.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, d), "";
    }
  }
  function At(u, d, S) {
    m(u, d);
    let w = "";
    for (let Z = 0; Z < S; Z++) {
      const J = qt(u);
      if (!J) {
        c(M.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${d}${w}${u.currentChar()}`);
        break;
      }
      w += J;
    }
    return `\\${d}${w}`;
  }
  function tn(u) {
    return u !== "{" && u !== "}" && u !== Je && u !== Ee;
  }
  function nn(u) {
    T(u);
    let d = "", S = "";
    for (; d = pe(u, tn); )
      S += d;
    return S;
  }
  function sn(u) {
    let d = "", S = "";
    for (; d = jt(u); )
      S += d;
    return S;
  }
  function P(u) {
    const d = (S) => {
      const w = u.currentChar();
      return w === "{" || w === "%" || w === "@" || w === "|" || w === "(" || w === ")" || !w || w === Je ? S : (S += w, u.next(), d(S));
    };
    return d("");
  }
  function H(u) {
    T(u);
    const d = m(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return T(u), d;
  }
  function rn(u, d) {
    let S = null;
    switch (u.currentChar()) {
      case "{":
        return d.braceNest >= 1 && c(M.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), u.next(), S = f(
          d,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(u), d.braceNest++, S;
      case "}":
        return d.braceNest > 0 && d.currentType === 2 && c(M.EMPTY_PLACEHOLDER, r(), 0), u.next(), S = f(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), d.braceNest--, d.braceNest > 0 && T(u), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), S;
      case "@":
        return d.braceNest > 0 && c(M.UNTERMINATED_CLOSING_BRACE, r(), 0), S = _t(u, d) || E(d), d.braceNest = 0, S;
      default: {
        let Z = !0, J = !0, j = !0;
        if (q(u))
          return d.braceNest > 0 && c(M.UNTERMINATED_CLOSING_BRACE, r(), 0), S = f(d, 1, H(u)), d.braceNest = 0, d.inLinked = !1, S;
        if (d.braceNest > 0 && (d.currentType === 5 || d.currentType === 6 || d.currentType === 7))
          return c(M.UNTERMINATED_CLOSING_BRACE, r(), 0), d.braceNest = 0, ln(u, d);
        if (Z = h(u, d))
          return S = f(d, 5, Qt(u)), T(u), S;
        if (J = b(u, d))
          return S = f(d, 6, zt(u)), T(u), S;
        if (j = N(u, d))
          return S = f(d, 7, yn(u)), T(u), S;
        if (!Z && !J && !j)
          return S = f(d, 13, nn(u)), c(M.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, S.value), T(u), S;
        break;
      }
    }
    return S;
  }
  function _t(u, d) {
    const { currentType: S } = d;
    let w = null;
    const Z = u.currentChar();
    switch ((S === 8 || S === 9 || S === 12 || S === 10) && (Z === Ee || Z === Je) && c(M.INVALID_LINKED_FORMAT, r(), 0), Z) {
      case "@":
        return u.next(), w = f(
          d,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), d.inLinked = !0, w;
      case ".":
        return T(u), u.next(), f(
          d,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return T(u), u.next(), f(
          d,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return q(u) ? (w = f(d, 1, H(u)), d.braceNest = 0, d.inLinked = !1, w) : O(u, d) || R(u, d) ? (T(u), _t(u, d)) : L(u, d) ? (T(u), f(d, 12, sn(u))) : D(u, d) ? (T(u), Z === "{" ? rn(u, d) || w : f(d, 11, P(u))) : (S === 8 && c(M.INVALID_LINKED_FORMAT, r(), 0), d.braceNest = 0, d.inLinked = !1, ln(u, d));
    }
  }
  function ln(u, d) {
    let S = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (d.braceNest > 0)
      return rn(u, d) || E(d);
    if (d.inLinked)
      return _t(u, d) || E(d);
    switch (u.currentChar()) {
      case "{":
        return rn(u, d) || E(d);
      case "}":
        return c(M.UNBALANCED_CLOSING_BRACE, r(), 0), u.next(), f(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return _t(u, d) || E(d);
      default: {
        if (q(u))
          return S = f(d, 1, H(u)), d.braceNest = 0, d.inLinked = !1, S;
        const { isModulo: Z, hasSpace: J } = ye(u);
        if (Z)
          return J ? f(d, 0, It(u)) : f(d, 4, yt(u));
        if (U(u))
          return f(d, 0, It(u));
        break;
      }
    }
    return S;
  }
  function cs() {
    const { currentType: u, offset: d, startLoc: S, endLoc: w } = i;
    return i.lastType = u, i.lastOffset = d, i.lastStartLoc = S, i.lastEndLoc = w, i.offset = l(), i.startLoc = r(), s.currentChar() === st ? f(
      i,
      14
      /* TokenTypes.EOF */
    ) : ln(s, i);
  }
  return {
    nextToken: cs,
    currentOffset: l,
    currentPosition: r,
    context: _
  };
}
const Tf = "parser", Sf = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Lf(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function yf(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: s } = e;
  function l(h, b, N, O, ...L) {
    const R = h.currentPosition();
    if (R.offset += O, R.column += O, n) {
      const D = t ? qn(N, R) : null, q = Gt(b, D, {
        domain: Tf,
        args: L
      });
      n(q);
    }
  }
  function r(h, b, N, O, ...L) {
    const R = h.currentPosition();
    if (R.offset += O, R.column += O, s) {
      const D = t ? qn(N, R) : null;
      s(ff(b, D, L));
    }
  }
  function o(h, b, N) {
    const O = { type: h };
    return t && (O.start = b, O.end = b, O.loc = { start: N, end: N }), O;
  }
  function a(h, b, N, O) {
    t && (h.end = b, h.loc && (h.loc.end = N));
  }
  function i(h, b) {
    const N = h.context(), O = o(3, N.offset, N.startLoc);
    return O.value = b, a(O, h.currentOffset(), h.currentPosition()), O;
  }
  function _(h, b) {
    const N = h.context(), { lastOffset: O, lastStartLoc: L } = N, R = o(5, O, L);
    return R.index = parseInt(b, 10), h.nextToken(), a(R, h.currentOffset(), h.currentPosition()), R;
  }
  function p(h, b, N) {
    const O = h.context(), { lastOffset: L, lastStartLoc: R } = O, D = o(4, L, R);
    return D.key = b, N === !0 && (D.modulo = !0), h.nextToken(), a(D, h.currentOffset(), h.currentPosition()), D;
  }
  function c(h, b) {
    const N = h.context(), { lastOffset: O, lastStartLoc: L } = N, R = o(9, O, L);
    return R.value = b.replace(Sf, Lf), h.nextToken(), a(R, h.currentOffset(), h.currentPosition()), R;
  }
  function f(h) {
    const b = h.nextToken(), N = h.context(), { lastOffset: O, lastStartLoc: L } = N, R = o(8, O, L);
    return b.type !== 12 ? (l(h, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), R.value = "", a(R, O, L), {
      nextConsumeToken: b,
      node: R
    }) : (b.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, Me(b)), R.value = b.value || "", a(R, h.currentOffset(), h.currentPosition()), {
      node: R
    });
  }
  function E(h, b) {
    const N = h.context(), O = o(7, N.offset, N.startLoc);
    return O.value = b, a(O, h.currentOffset(), h.currentPosition()), O;
  }
  function m(h) {
    const b = h.context(), N = o(6, b.offset, b.startLoc);
    let O = h.nextToken();
    if (O.type === 9) {
      const L = f(h);
      N.modifier = L.node, O = L.nextConsumeToken || h.nextToken();
    }
    switch (O.type !== 10 && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), O = h.nextToken(), O.type === 2 && (O = h.nextToken()), O.type) {
      case 11:
        O.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = E(h, O.value || "");
        break;
      case 5:
        O.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = p(h, O.value || "");
        break;
      case 6:
        O.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = _(h, O.value || "");
        break;
      case 7:
        O.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = c(h, O.value || "");
        break;
      default: {
        l(h, M.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const L = h.context(), R = o(7, L.offset, L.startLoc);
        return R.value = "", a(R, L.offset, L.startLoc), N.key = R, a(N, L.offset, L.startLoc), {
          nextConsumeToken: O,
          node: N
        };
      }
    }
    return a(N, h.currentOffset(), h.currentPosition()), {
      node: N
    };
  }
  function g(h) {
    const b = h.context(), N = b.currentType === 1 ? h.currentOffset() : b.offset, O = b.currentType === 1 ? b.endLoc : b.startLoc, L = o(2, N, O);
    L.items = [];
    let R = null, D = null;
    do {
      const U = R || h.nextToken();
      switch (R = null, U.type) {
        case 0:
          U.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(i(h, U.value || ""));
          break;
        case 6:
          U.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(_(h, U.value || ""));
          break;
        case 4:
          D = !0;
          break;
        case 5:
          U.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(p(h, U.value || "", !!D)), D && (r(h, ls.USE_MODULO_SYNTAX, b.lastStartLoc, 0, Me(U)), D = null);
          break;
        case 7:
          U.value == null && l(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(c(h, U.value || ""));
          break;
        case 8: {
          const pe = m(h);
          L.items.push(pe.node), R = pe.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const q = b.currentType === 1 ? b.lastOffset : h.currentOffset(), ye = b.currentType === 1 ? b.lastEndLoc : h.currentPosition();
    return a(L, q, ye), L;
  }
  function T(h, b, N, O) {
    const L = h.context();
    let R = O.items.length === 0;
    const D = o(1, b, N);
    D.cases = [], D.cases.push(O);
    do {
      const q = g(h);
      R || (R = q.items.length === 0), D.cases.push(q);
    } while (L.currentType !== 14);
    return R && l(h, M.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), a(D, h.currentOffset(), h.currentPosition()), D;
  }
  function I(h) {
    const b = h.context(), { offset: N, startLoc: O } = b, L = g(h);
    return b.currentType === 14 ? L : T(h, N, O, L);
  }
  function A(h) {
    const b = Of(h, Co({}, e)), N = b.context(), O = o(0, N.offset, N.startLoc);
    return t && O.loc && (O.loc.source = h), O.body = I(b), e.onCacheKey && (O.cacheKey = e.onCacheKey(h)), N.currentType !== 14 && l(b, M.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, h[N.offset] || ""), a(O, b.currentOffset(), b.currentPosition()), O;
  }
  return { parse: A };
}
function Me(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function If(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function Br(e, t) {
  for (let n = 0; n < e.length; n++)
    ur(e[n], t);
}
function ur(e, t) {
  switch (e.type) {
    case 1:
      Br(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Br(e.items, t);
      break;
    case 6: {
      ur(e.key, t), t.helper(
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
function Af(e, t = {}) {
  const n = If(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ur(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function Df(e) {
  const t = e.body;
  return t.type === 2 ? jr(t) : t.cases.forEach((n) => jr(n)), e;
}
function jr(e) {
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
      e.static = wo(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const Pf = "minifier";
function kt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      kt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        kt(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        kt(n[s]);
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
      kt(t.key), t.k = t.key, delete t.key, t.modifier && (kt(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw Gt(M.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Pf,
        args: [e.type]
      });
  }
  delete e.type;
}
const Rf = "parser";
function Cf(e, t) {
  const { sourceMap: n, filename: s, breakLineCode: l, needIndent: r } = t, o = t.location !== !1, a = {
    filename: s,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: l,
    needIndent: r,
    indentLevel: 0
  };
  o && e.loc && (a.source = e.loc.source);
  const i = () => a;
  function _(T, I) {
    a.code += T;
  }
  function p(T, I = !0) {
    const A = I ? l : "";
    _(r ? A + "  ".repeat(T) : A);
  }
  function c(T = !0) {
    const I = ++a.indentLevel;
    T && p(I);
  }
  function f(T = !0) {
    const I = --a.indentLevel;
    T && p(I);
  }
  function E() {
    p(a.indentLevel);
  }
  return {
    context: i,
    push: _,
    indent: c,
    deindent: f,
    newline: E,
    helper: (T) => `_${T}`,
    needIndent: () => a.needIndent
  };
}
function wf(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Wt(e, t.key), t.modifier ? (e.push(", "), Wt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Mf(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const l = t.items.length;
  for (let r = 0; r < l && (Wt(e, t.items[r]), r !== l - 1); r++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function kf(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const l = t.cases.length;
    for (let r = 0; r < l && (Wt(e, t.cases[r]), r !== l - 1); r++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function Ff(e, t) {
  t.body ? Wt(e, t.body) : e.push("null");
}
function Wt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ff(e, t);
      break;
    case 1:
      kf(e, t);
      break;
    case 2:
      Mf(e, t);
      break;
    case 6:
      wf(e, t);
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
      throw Gt(M.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Rf,
        args: [t.type]
      });
  }
}
const Vf = (e, t = {}) => {
  const n = Hr(t.mode) ? t.mode : "normal", s = Hr(t.filename) ? t.filename : "message.intl", l = !!t.sourceMap, r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = Cf(e, {
    mode: n,
    filename: s,
    sourceMap: l,
    breakLineCode: r,
    needIndent: o
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(o), a.length > 0 && (i.push(`const { ${wo(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), i.newline()), i.push("return "), Wt(i, e), i.deindent(o), i.push("}"), delete e.helpers;
  const { code: _, map: p } = i.context();
  return {
    ast: e,
    code: _,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function $f(e, t = {}) {
  const n = Co({}, t), s = !!n.jit, l = !!n.minify, r = n.optimize == null ? !0 : n.optimize, a = yf(n).parse(e);
  return s ? (r && Df(a), l && kt(a), { ast: a, code: "" }) : (Af(a, n), Vf(a, n));
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Uf() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ze().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (ze().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ze().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const dt = [];
dt[
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
dt[
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
dt[
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
dt[
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
dt[
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
dt[
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
dt[
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
const xf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Wf(e) {
  return xf.test(e);
}
function Hf(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Gf(e) {
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
function Bf(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Wf(t) ? Hf(t) : "*" + t;
}
function jf(e) {
  const t = [];
  let n = -1, s = 0, l = 0, r, o, a, i, _, p, c;
  const f = [];
  f[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = a : o += a;
  }, f[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, f[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    f[
      0
      /* Actions.APPEND */
    ](), l++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, s = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, o === void 0 || (o = Bf(o), o === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function E() {
    const m = e[n + 1];
    if (s === 5 && m === "'" || s === 6 && m === '"')
      return n++, a = "\\" + m, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, r = e[n], !(r === "\\" && E())) {
      if (i = Gf(r), c = dt[s], _ = c[i] || c.l || 8, _ === 8 || (s = _[0], _[1] !== void 0 && (p = f[_[1]], p && (a = r, p() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const Yr = /* @__PURE__ */ new Map();
function Yf(e, t) {
  return V(e) ? e[t] : null;
}
function Kf(e, t) {
  if (!V(e))
    return null;
  let n = Yr.get(t);
  if (n || (n = jf(t), n && Yr.set(t, n)), !n)
    return null;
  const s = n.length;
  let l = e, r = 0;
  for (; r < s; ) {
    const o = l[n[r]];
    if (o === void 0 || K(l))
      return null;
    l = o, r++;
  }
  return l;
}
const Xf = (e) => e, Jf = (e) => "", qf = "text", Qf = (e) => e.length === 0 ? "" : rf(e), zf = sf;
function Kr(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Zf(e) {
  const t = re(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (re(e.named.count) || re(e.named.n)) ? re(e.named.count) ? e.named.count : re(e.named.n) ? e.named.n : t : t;
}
function ed(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function td(e = {}) {
  const t = e.locale, n = Zf(e), s = V(e.pluralRules) && C(t) && K(e.pluralRules[t]) ? e.pluralRules[t] : Kr, l = V(e.pluralRules) && C(t) && K(e.pluralRules[t]) ? Kr : void 0, r = (I) => I[s(n, I.length, l)], o = e.list || [], a = (I) => o[I], i = e.named || {};
  re(e.pluralIndex) && ed(n, i);
  const _ = (I) => i[I];
  function p(I) {
    const A = K(e.messages) ? e.messages(I) : V(e.messages) ? e.messages[I] : !1;
    return A || (e.parent ? e.parent.message(I) : Jf);
  }
  const c = (I) => e.modifiers ? e.modifiers[I] : Xf, f = k(e.processor) && K(e.processor.normalize) ? e.processor.normalize : Qf, E = k(e.processor) && K(e.processor.interpolate) ? e.processor.interpolate : zf, m = k(e.processor) && C(e.processor.type) ? e.processor.type : qf, T = {
    list: a,
    named: _,
    plural: r,
    linked: (I, ...A) => {
      const [h, b] = A;
      let N = "text", O = "";
      A.length === 1 ? V(h) ? (O = h.modifier || O, N = h.type || N) : C(h) && (O = h || O) : A.length === 2 && (C(h) && (O = h || O), C(b) && (N = b || N));
      const L = p(I)(T), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        N === "vnode" && z(L) && O ? L[0] : L
      );
      return O ? c(O)(R, N) : R;
    },
    message: p,
    type: m,
    interpolate: E,
    normalize: f,
    values: _e({}, o, i)
  };
  return T;
}
let Nn = null;
function nd(e) {
  Nn = e;
}
function sd(e, t, n) {
  Nn && Nn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const rd = /* @__PURE__ */ ld(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function ld(e) {
  return (t) => Nn && Nn.emit(e, t);
}
const Mo = ls.__EXTEND_POINT__, mt = rs(Mo), Ne = {
  NOT_FOUND_KEY: Mo,
  // 2
  FALLBACK_TO_TRANSLATE: mt(),
  // 3
  CANNOT_FORMAT_NUMBER: mt(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: mt(),
  // 5
  CANNOT_FORMAT_DATE: mt(),
  // 6
  FALLBACK_TO_DATE_FORMAT: mt(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: mt(),
  // 8
  __EXTEND_POINT__: mt()
  // 9
}, od = {
  [Ne.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ne.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ne.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ne.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ne.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ne.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ne.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Tt(e, ...t) {
  return ir(od[e], ...t);
}
const ko = M.__EXTEND_POINT__, ht = rs(ko), ie = {
  INVALID_ARGUMENT: ko,
  // 17
  INVALID_DATE_ARGUMENT: ht(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: ht(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: ht(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: ht(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: ht(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: ht(),
  // 23
  __EXTEND_POINT__: ht()
  // 24
};
function je(e) {
  return Gt(e, null, process.env.NODE_ENV !== "production" ? { messages: ad } : void 0);
}
const ad = {
  [ie.INVALID_ARGUMENT]: "Invalid arguments",
  [ie.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ie.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ie.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ie.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function fr(e, t) {
  return t.locale != null ? Xr(t.locale) : Xr(e.locale);
}
let vs;
function Xr(e) {
  if (C(e))
    return e;
  if (K(e)) {
    if (e.resolvedOnce && vs != null)
      return vs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (nf(t))
        throw je(ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return vs = t;
    } else
      throw je(ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw je(ie.NOT_SUPPORT_LOCALE_TYPE);
}
function id(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...z(t) ? t : V(t) ? Object.keys(t) : C(t) ? [t] : [n]
  ])];
}
function Fo(e, t, n) {
  const s = C(n) ? n : Ht, l = e;
  l.__localeChainCache || (l.__localeChainCache = /* @__PURE__ */ new Map());
  let r = l.__localeChainCache.get(s);
  if (!r) {
    r = [];
    let o = [n];
    for (; z(o); )
      o = Jr(r, o, t);
    const a = z(t) || !k(t) ? t : t.default ? t.default : null;
    o = C(a) ? [a] : a, z(o) && Jr(r, o, !1), l.__localeChainCache.set(s, r);
  }
  return r;
}
function Jr(e, t, n) {
  let s = !0;
  for (let l = 0; l < t.length && F(s); l++) {
    const r = t[l];
    C(r) && (s = cd(e, t[l], n));
  }
  return s;
}
function cd(e, t, n) {
  let s;
  const l = t.split("-");
  do {
    const r = l.join("-");
    s = ud(e, r, n), l.splice(-1, 1);
  } while (l.length && s === !0);
  return s;
}
function ud(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const l = t.replace(/!/g, "");
    e.push(l), (z(n) || k(n)) && n[l] && (s = n[l]);
  }
  return s;
}
const fd = "9.14.1", os = -1, Ht = "en-US", Qn = "", qr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function dd() {
  return {
    upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && C(e) ? qr(e) : t === "vnode" && V(e) && "__v_isVNode" in e ? qr(e.children) : e
  };
}
let Vo;
function Qr(e) {
  Vo = e;
}
let $o;
function _d(e) {
  $o = e;
}
let Uo;
function pd(e) {
  Uo = e;
}
let xo = null;
const md = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  xo = e;
}, hd = /* @__NO_SIDE_EFFECTS__ */ () => xo;
let Wo = null;
const zr = (e) => {
  Wo = e;
}, gd = () => Wo;
let Zr = 0;
function Ed(e = {}) {
  const t = K(e.onWarn) ? e.onWarn : le, n = C(e.version) ? e.version : fd, s = C(e.locale) || K(e.locale) ? e.locale : Ht, l = K(s) ? Ht : s, r = z(e.fallbackLocale) || k(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, o = k(e.messages) ? e.messages : { [l]: {} }, a = k(e.datetimeFormats) ? e.datetimeFormats : { [l]: {} }, i = k(e.numberFormats) ? e.numberFormats : { [l]: {} }, _ = _e({}, e.modifiers || {}, dd()), p = e.pluralRules || {}, c = K(e.missing) ? e.missing : null, f = F(e.missingWarn) || ct(e.missingWarn) ? e.missingWarn : !0, E = F(e.fallbackWarn) || ct(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, g = !!e.unresolving, T = K(e.postTranslation) ? e.postTranslation : null, I = k(e.processor) ? e.processor : null, A = F(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, h = !!e.escapeParameter, b = K(e.messageCompiler) ? e.messageCompiler : Vo;
  process.env.NODE_ENV !== "production" && K(e.messageCompiler) && Po(Tt(Ne.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const N = K(e.messageResolver) ? e.messageResolver : $o || Yf, O = K(e.localeFallbacker) ? e.localeFallbacker : Uo || id, L = V(e.fallbackContext) ? e.fallbackContext : void 0, R = e, D = V(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), q = V(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), ye = V(R.__meta) ? R.__meta : {};
  Zr++;
  const U = {
    version: n,
    cid: Zr,
    locale: s,
    fallbackLocale: r,
    messages: o,
    modifiers: _,
    pluralRules: p,
    missing: c,
    missingWarn: f,
    fallbackWarn: E,
    fallbackFormat: m,
    unresolving: g,
    postTranslation: T,
    processor: I,
    warnHtmlMessage: A,
    escapeParameter: h,
    messageCompiler: b,
    messageResolver: N,
    localeFallbacker: O,
    fallbackContext: L,
    onWarn: t,
    __meta: ye
  };
  return U.datetimeFormats = a, U.numberFormats = i, U.__datetimeFormatters = D, U.__numberFormatters = q, process.env.NODE_ENV !== "production" && (U.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && sd(U, n, ye), U;
}
function as(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ho(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function dr(e, t, n, s, l) {
  const { missing: r, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = e.__v_emitter;
    a && a.emit("missing", {
      locale: n,
      key: t,
      type: l,
      groupId: `${l}:${t}`
    });
  }
  if (r !== null) {
    const a = r(e, n, t, l);
    return C(a) ? a : t;
  } else
    return process.env.NODE_ENV !== "production" && Ho(s, t) && o(Tt(Ne.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function un(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Go(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function vd(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (Go(e, t[s]))
      return !0;
  return !1;
}
function Ns(e) {
  return (n) => Nd(n, e);
}
function Nd(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const s = n, l = s.c || s.cases;
    return e.plural(l.reduce((r, o) => [
      ...r,
      el(e, o)
    ], []));
  } else
    return el(e, n);
}
function el(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = (t.i || t.items).reduce((l, r) => [...l, Cs(e, r)], []);
    return e.normalize(s);
  }
}
function Cs(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const s = t;
      return s.v || s.value;
    }
    case 9: {
      const s = t;
      return s.v || s.value;
    }
    case 4: {
      const s = t;
      return e.interpolate(e.named(s.k || s.key));
    }
    case 5: {
      const s = t;
      return e.interpolate(e.list(s.i != null ? s.i : s.index));
    }
    case 6: {
      const s = t, l = s.m || s.modifier;
      return e.linked(Cs(e, s.k || s.key), l ? Cs(e, l) : void 0, e.type);
    }
    case 7: {
      const s = t;
      return s.v || s.value;
    }
    case 8: {
      const s = t;
      return s.v || s.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const bd = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Bo(e, t) {
  t && mf(e) && le(ir(bd, { source: e }));
}
const jo = (e) => e;
let Ft = /* @__PURE__ */ Object.create(null);
function Yo(e) {
  e.code === ls.USE_MODULO_SYNTAX && le(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
const ut = (e) => V(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Ko(e, t = {}) {
  let n = !1;
  const s = t.onError || _f;
  return t.onError = (l) => {
    n = !0, s(l);
  }, { ...$f(e, t), detectError: n };
}
const Od = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!C(e))
    throw je(ie.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Yo);
  {
    const n = F(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Bo(e, n);
    const l = (t.onCacheKey || jo)(e), r = Ft[l];
    if (r)
      return r;
    const { code: o, detectError: a } = Ko(e, t), i = new Function(`return ${o}`)();
    return a ? i : Ft[l] = i;
  }
};
function Td(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Yo), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
    const n = F(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Bo(e, n);
    const l = (t.onCacheKey || jo)(e), r = Ft[l];
    if (r)
      return r;
    const { ast: o, detectError: a } = Ko(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), i = Ns(o);
    return a ? i : Ft[l] = i;
  } else {
    if (process.env.NODE_ENV !== "production" && !ut(e))
      return le(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = Ft[n];
      return s || (Ft[n] = Ns(e));
    } else
      return Ns(e);
  }
}
const tl = () => "", we = (e) => K(e);
function nl(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: l, messageCompiler: r, fallbackLocale: o, messages: a } = e, [i, _] = ws(...t), p = F(_.missingWarn) ? _.missingWarn : e.missingWarn, c = F(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, f = F(_.escapeParameter) ? _.escapeParameter : e.escapeParameter, E = !!_.resolvedMessage, m = C(_.default) || F(_.default) ? F(_.default) ? r ? i : () => i : _.default : n ? r ? i : () => i : "", g = n || m !== "", T = fr(e, _);
  f && Sd(_);
  let [I, A, h] = E ? [
    i,
    T,
    a[T] || {}
  ] : Xo(e, i, T, o, c, p), b = I, N = i;
  if (!E && !(C(b) || ut(b) || we(b)) && g && (b = m, N = b), !E && (!(C(b) || ut(b) || we(b)) || !C(A)))
    return l ? os : i;
  if (process.env.NODE_ENV !== "production" && C(b) && e.messageCompiler == null)
    return le(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let O = !1;
  const L = () => {
    O = !0;
  }, R = we(b) ? b : Jo(e, i, A, b, N, L);
  if (O)
    return b;
  const D = Ad(e, A, h, _), q = td(D), ye = Ld(e, R, q), U = s ? s(ye, i) : ye;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const pe = {
      timestamp: Date.now(),
      key: C(i) ? i : we(b) ? b.key : "",
      locale: A || (we(b) ? b.locale : ""),
      format: C(b) ? b : we(b) ? b.source : "",
      message: U
    };
    pe.meta = _e({}, e.__meta, /* @__PURE__ */ hd() || {}), rd(pe);
  }
  return U;
}
function Sd(e) {
  z(e.list) ? e.list = e.list.map((t) => C(t) ? Ur(t) : t) : V(e.named) && Object.keys(e.named).forEach((t) => {
    C(e.named[t]) && (e.named[t] = Ur(e.named[t]));
  });
}
function Xo(e, t, n, s, l, r) {
  const { messages: o, onWarn: a, messageResolver: i, localeFallbacker: _ } = e, p = _(e, s, n);
  let c = {}, f, E = null, m = n, g = null;
  const T = "translate";
  for (let I = 0; I < p.length; I++) {
    if (f = g = p[I], process.env.NODE_ENV !== "production" && n !== f && !Go(n, f) && as(l, t) && a(Tt(Ne.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && n !== f) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: T,
        key: t,
        from: m,
        to: g,
        groupId: `${T}:${t}`
      });
    }
    c = o[f] || {};
    let A = null, h, b;
    if (process.env.NODE_ENV !== "production" && Ve && (A = window.performance.now(), h = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Ae && Ae(h)), (E = i(c, t)) === null && (E = c[t]), process.env.NODE_ENV !== "production" && Ve) {
      const N = window.performance.now(), O = e.__v_emitter;
      O && A && E && O.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: E,
        time: N - A,
        groupId: `${T}:${t}`
      }), h && b && Ae && Ot && (Ae(b), Ot("intlify message resolve", h, b));
    }
    if (C(E) || ut(E) || we(E))
      break;
    if (!vd(f, p)) {
      const N = dr(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        r,
        T
      );
      N !== t && (E = N);
    }
    m = g;
  }
  return [E, f, c];
}
function Jo(e, t, n, s, l, r) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (we(s)) {
    const f = s;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (o == null) {
    const f = () => s;
    return f.locale = n, f.key = t, f;
  }
  let i = null, _, p;
  process.env.NODE_ENV !== "production" && Ve && (i = window.performance.now(), _ = "intlify-message-compilation-start", p = "intlify-message-compilation-end", Ae && Ae(_));
  const c = o(s, yd(e, n, l, s, a, r));
  if (process.env.NODE_ENV !== "production" && Ve) {
    const f = window.performance.now(), E = e.__v_emitter;
    E && i && E.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: f - i,
      groupId: `translate:${t}`
    }), _ && p && Ae && Ot && (Ae(p), Ot("intlify message compilation", _, p));
  }
  return c.locale = n, c.key = t, c.source = s, c;
}
function Ld(e, t, n) {
  let s = null, l, r;
  process.env.NODE_ENV !== "production" && Ve && (s = window.performance.now(), l = "intlify-message-evaluation-start", r = "intlify-message-evaluation-end", Ae && Ae(l));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && Ve) {
    const a = window.performance.now(), i = e.__v_emitter;
    i && s && i.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: a - s,
      groupId: `translate:${t.key}`
    }), l && r && Ae && Ot && (Ae(r), Ot("intlify message evaluation", l, r));
  }
  return o;
}
function ws(...e) {
  const [t, n, s] = e, l = {};
  if (!C(t) && !re(t) && !we(t) && !ut(t))
    throw je(ie.INVALID_ARGUMENT);
  const r = re(t) ? String(t) : (we(t), t);
  return re(n) ? l.plural = n : C(n) ? l.default = n : k(n) && !ss(n) ? l.named = n : z(n) && (l.list = n), re(s) ? l.plural = s : C(s) ? l.default = s : k(s) && _e(l, s), [r, l];
}
function yd(e, t, n, s, l, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: l,
    onError: (o) => {
      if (r && r(o), process.env.NODE_ENV !== "production") {
        const a = Id(s), i = `Message compilation error: ${o.message}`, _ = o.location && a && lf(a, o.location.start.offset, o.location.end.offset), p = e.__v_emitter;
        p && a && p.emit("compile-error", {
          message: a,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(_ ? `${i}
${_}` : i);
      } else
        throw o;
    },
    onCacheKey: (o) => zu(t, n, o)
  };
}
function Id(e) {
  if (C(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Ad(e, t, n, s) {
  const { modifiers: l, pluralRules: r, messageResolver: o, fallbackLocale: a, fallbackWarn: i, missingWarn: _, fallbackContext: p } = e, f = {
    locale: t,
    modifiers: l,
    pluralRules: r,
    messages: (E) => {
      let m = o(n, E);
      if (m == null && p) {
        const [, , g] = Xo(p, E, t, a, i, _);
        m = o(g, E);
      }
      if (C(m) || ut(m)) {
        let g = !1;
        const I = Jo(e, E, t, m, E, () => {
          g = !0;
        });
        return g ? tl : I;
      } else return we(m) ? m : tl;
    }
  };
  return e.processor && (f.processor = e.processor), s.list && (f.list = s.list), s.named && (f.named = s.named), re(s.plural) && (f.pluralIndex = s.plural), f;
}
const sl = typeof Intl < "u", qo = {
  dateTimeFormat: sl && typeof Intl.DateTimeFormat < "u",
  numberFormat: sl && typeof Intl.NumberFormat < "u"
};
function rl(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: l, onWarn: r, localeFallbacker: o } = e, { __datetimeFormatters: a } = e;
  if (process.env.NODE_ENV !== "production" && !qo.dateTimeFormat)
    return r(Tt(Ne.CANNOT_FORMAT_DATE)), Qn;
  const [i, _, p, c] = Ms(...t), f = F(p.missingWarn) ? p.missingWarn : e.missingWarn, E = F(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, m = !!p.part, g = fr(e, p), T = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    g
  );
  if (!C(i) || i === "")
    return new Intl.DateTimeFormat(g, c).format(_);
  let I = {}, A, h = null, b = g, N = null;
  const O = "datetime format";
  for (let D = 0; D < T.length; D++) {
    if (A = N = T[D], process.env.NODE_ENV !== "production" && g !== A && as(E, i) && r(Tt(Ne.FALLBACK_TO_DATE_FORMAT, {
      key: i,
      target: A
    })), process.env.NODE_ENV !== "production" && g !== A) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: O,
        key: i,
        from: b,
        to: N,
        groupId: `${O}:${i}`
      });
    }
    if (I = n[A] || {}, h = I[i], k(h))
      break;
    dr(e, i, A, f, O), b = N;
  }
  if (!k(h) || !C(A))
    return s ? os : i;
  let L = `${A}__${i}`;
  ss(c) || (L = `${L}__${JSON.stringify(c)}`);
  let R = a.get(L);
  return R || (R = new Intl.DateTimeFormat(A, _e({}, h, c)), a.set(L, R)), m ? R.formatToParts(_) : R.format(_);
}
const Qo = [
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
function Ms(...e) {
  const [t, n, s, l] = e, r = {};
  let o = {}, a;
  if (C(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw je(ie.INVALID_ISO_DATE_ARGUMENT);
    const _ = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    a = new Date(_);
    try {
      a.toISOString();
    } catch {
      throw je(ie.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ef(t)) {
    if (isNaN(t.getTime()))
      throw je(ie.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (re(t))
    a = t;
  else
    throw je(ie.INVALID_ARGUMENT);
  return C(n) ? r.key = n : k(n) && Object.keys(n).forEach((i) => {
    Qo.includes(i) ? o[i] = n[i] : r[i] = n[i];
  }), C(s) ? r.locale = s : k(s) && (o = s), k(l) && (o = l), [r.key || "", a, r, o];
}
function ll(e, t, n) {
  const s = e;
  for (const l in n) {
    const r = `${t}__${l}`;
    s.__datetimeFormatters.has(r) && s.__datetimeFormatters.delete(r);
  }
}
function ol(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: l, onWarn: r, localeFallbacker: o } = e, { __numberFormatters: a } = e;
  if (process.env.NODE_ENV !== "production" && !qo.numberFormat)
    return r(Tt(Ne.CANNOT_FORMAT_NUMBER)), Qn;
  const [i, _, p, c] = ks(...t), f = F(p.missingWarn) ? p.missingWarn : e.missingWarn, E = F(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, m = !!p.part, g = fr(e, p), T = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    g
  );
  if (!C(i) || i === "")
    return new Intl.NumberFormat(g, c).format(_);
  let I = {}, A, h = null, b = g, N = null;
  const O = "number format";
  for (let D = 0; D < T.length; D++) {
    if (A = N = T[D], process.env.NODE_ENV !== "production" && g !== A && as(E, i) && r(Tt(Ne.FALLBACK_TO_NUMBER_FORMAT, {
      key: i,
      target: A
    })), process.env.NODE_ENV !== "production" && g !== A) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: O,
        key: i,
        from: b,
        to: N,
        groupId: `${O}:${i}`
      });
    }
    if (I = n[A] || {}, h = I[i], k(h))
      break;
    dr(e, i, A, f, O), b = N;
  }
  if (!k(h) || !C(A))
    return s ? os : i;
  let L = `${A}__${i}`;
  ss(c) || (L = `${L}__${JSON.stringify(c)}`);
  let R = a.get(L);
  return R || (R = new Intl.NumberFormat(A, _e({}, h, c)), a.set(L, R)), m ? R.formatToParts(_) : R.format(_);
}
const zo = [
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
function ks(...e) {
  const [t, n, s, l] = e, r = {};
  let o = {};
  if (!re(t))
    throw je(ie.INVALID_ARGUMENT);
  const a = t;
  return C(n) ? r.key = n : k(n) && Object.keys(n).forEach((i) => {
    zo.includes(i) ? o[i] = n[i] : r[i] = n[i];
  }), C(s) ? r.locale = s : k(s) && (o = s), k(l) && (o = l), [r.key || "", a, r, o];
}
function al(e, t, n) {
  const s = e;
  for (const l in n) {
    const r = `${t}__${l}`;
    s.__numberFormatters.has(r) && s.__numberFormatters.delete(r);
  }
}
Uf();
function Dd() {
  return Zo().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Zo() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Pd = typeof Proxy == "function", Rd = "devtools-plugin:setup", Cd = "plugin:settings:set";
let Rt, Fs;
function wd() {
  var e;
  return Rt !== void 0 || (typeof window < "u" && window.performance ? (Rt = !0, Fs = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Rt = !0, Fs = globalThis.perf_hooks.performance) : Rt = !1), Rt;
}
function Md() {
  return wd() ? Fs.now() : Date.now();
}
class kd {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const o in t.settings) {
        const a = t.settings[o];
        s[o] = a.defaultValue;
      }
    const l = `__vue-devtools-plugin-settings__${t.id}`;
    let r = Object.assign({}, s);
    try {
      const o = localStorage.getItem(l), a = JSON.parse(o);
      Object.assign(r, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(o) {
        try {
          localStorage.setItem(l, JSON.stringify(o));
        } catch {
        }
        r = o;
      },
      now() {
        return Md();
      }
    }, n && n.on(Cd, (o, a) => {
      o === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, a) => this.target ? this.target.on[a] : (...i) => {
        this.onQueue.push({
          method: a,
          args: i
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...i) => (this.targetQueue.push({
        method: a,
        args: i,
        resolve: () => {
        }
      }), this.fallbacks[a](...i)) : (...i) => new Promise((_) => {
        this.targetQueue.push({
          method: a,
          args: i,
          resolve: _
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
function Fd(e, t) {
  const n = e, s = Zo(), l = Dd(), r = Pd && n.enableEarlyProxy;
  if (l && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    l.emit(Rd, e, t);
  else {
    const o = r ? new kd(n, l) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: o
    }), o && t(o.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Vd = "9.14.1";
function $d() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ze().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ze().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (ze().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ze().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ze().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ea = Ne.__EXTEND_POINT__, qe = rs(ea), ee = {
  FALLBACK_TO_ROOT: ea,
  // 9
  NOT_SUPPORTED_PRESERVE: qe(),
  // 10
  NOT_SUPPORTED_FORMATTER: qe(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: qe(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: qe(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: qe(),
  // 14
  NOT_FOUND_PARENT_SCOPE: qe(),
  // 15
  IGNORE_OBJ_FLATTEN: qe(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: qe(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: qe()
  // 18
}, Ud = {
  [ee.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ee.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [ee.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [ee.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [ee.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [ee.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [ee.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ee.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ee.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [ee.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function Se(e, ...t) {
  return ir(Ud[e], ...t);
}
const ta = ie.__EXTEND_POINT__, Oe = rs(ta), x = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ta,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: Oe(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Oe(),
  // 26
  NOT_INSTALLED: Oe(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: Oe(),
  // 28
  // directive module errors
  REQUIRED_VALUE: Oe(),
  // 29
  INVALID_VALUE: Oe(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Oe(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: Oe(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: Oe(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Oe(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Oe(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Oe(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Oe(),
  // 37
  // for enhancement
  __EXTEND_POINT__: Oe()
  // 38
};
function oe(e, ...t) {
  return Gt(e, null, process.env.NODE_ENV !== "production" ? { messages: xd, args: t } : void 0);
}
const xd = {
  [x.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [x.INVALID_ARGUMENT]: "Invalid argument",
  [x.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [x.NOT_INSTALLED]: "Need to install with `app.use` function",
  [x.UNEXPECTED_ERROR]: "Unexpected error",
  [x.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [x.REQUIRED_VALUE]: "Required in value: {0}",
  [x.INVALID_VALUE]: "Invalid value",
  [x.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [x.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [x.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [x.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [x.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [x.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Vs = /* @__PURE__ */ Ke("__translateVNode"), $s = /* @__PURE__ */ Ke("__datetimeParts"), Us = /* @__PURE__ */ Ke("__numberParts"), St = /* @__PURE__ */ Ke("__enableEmitter"), bn = /* @__PURE__ */ Ke("__disableEmitter"), na = Ke("__setPluralRules"), sa = /* @__PURE__ */ Ke("__injectWithOption"), xs = /* @__PURE__ */ Ke("__dispose");
function On(e) {
  if (!V(e))
    return e;
  for (const t in e)
    if (Jn(e, t))
      if (!t.includes("."))
        V(e[t]) && On(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let l = e, r = !1;
        for (let o = 0; o < s; o++) {
          if (n[o] in l || (l[n[o]] = {}), !V(l[n[o]])) {
            process.env.NODE_ENV !== "production" && le(Se(ee.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), r = !0;
            break;
          }
          l = l[n[o]];
        }
        r || (l[n[s]] = e[t], delete e[t]), V(l[n[s]]) && On(l[n[s]]);
      }
  return e;
}
function is(e, t) {
  const { messages: n, __i18n: s, messageResolver: l, flatJson: r } = t, o = k(n) ? n : z(s) ? {} : { [e]: {} };
  if (z(s) && s.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: i, resource: _ } = a;
      i ? (o[i] = o[i] || {}, Un(_, o[i])) : Un(_, o);
    } else
      C(a) && Un(JSON.parse(a), o);
  }), l == null && r)
    for (const a in o)
      Jn(o, a) && On(o[a]);
  return o;
}
function ra(e) {
  return e.type;
}
function la(e, t, n) {
  let s = V(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (s = is(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const l = Object.keys(s);
  l.length && l.forEach((r) => {
    e.mergeLocaleMessage(r, s[r]);
  });
  {
    if (V(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (V(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function il(e) {
  return de(co, null, e, 0);
}
const cl = "__INTLIFY_META__", ul = () => [], Wd = () => !1;
let fl = 0;
function dl(e) {
  return (t, n, s, l) => e(n, s, xt() || void 0, l);
}
const Hd = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = xt();
  let t = null;
  return e && (t = ra(e)[cl]) ? { [cl]: t } : null;
};
function _r(e = {}, t) {
  const { __root: n, __injectWithOption: s } = e, l = n === void 0, r = e.flatJson, o = Ve ? Ct : Kl, a = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && a && Po(Se(ee.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let i = F(e.inheritLocale) ? e.inheritLocale : !0;
  const _ = o(
    // prettier-ignore
    n && i ? n.locale.value : C(e.locale) ? e.locale : Ht
  ), p = o(
    // prettier-ignore
    n && i ? n.fallbackLocale.value : C(e.fallbackLocale) || z(e.fallbackLocale) || k(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : _.value
  ), c = o(is(_.value, e)), f = o(k(e.datetimeFormats) ? e.datetimeFormats : { [_.value]: {} }), E = o(k(e.numberFormats) ? e.numberFormats : { [_.value]: {} });
  let m = n ? n.missingWarn : F(e.missingWarn) || ct(e.missingWarn) ? e.missingWarn : !0, g = n ? n.fallbackWarn : F(e.fallbackWarn) || ct(e.fallbackWarn) ? e.fallbackWarn : !0, T = n ? n.fallbackRoot : F(e.fallbackRoot) ? e.fallbackRoot : !0, I = !!e.fallbackFormat, A = K(e.missing) ? e.missing : null, h = K(e.missing) ? dl(e.missing) : null, b = K(e.postTranslation) ? e.postTranslation : null, N = n ? n.warnHtmlMessage : F(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, O = !!e.escapeParameter;
  const L = n ? n.modifiers : k(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || n && n.pluralRules, D;
  D = (() => {
    l && zr(null);
    const v = {
      version: Vd,
      locale: _.value,
      fallbackLocale: p.value,
      messages: c.value,
      modifiers: L,
      pluralRules: R,
      missing: h === null ? void 0 : h,
      missingWarn: m,
      fallbackWarn: g,
      fallbackFormat: I,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: N,
      escapeParameter: O,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    v.datetimeFormats = f.value, v.numberFormats = E.value, v.__datetimeFormatters = k(D) ? D.__datetimeFormatters : void 0, v.__numberFormatters = k(D) ? D.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (v.__v_emitter = k(D) ? D.__v_emitter : void 0);
    const y = Ed(v);
    return l && zr(y), y;
  })(), un(D, _.value, p.value);
  function ye() {
    return [
      _.value,
      p.value,
      c.value,
      f.value,
      E.value
    ];
  }
  const U = We({
    get: () => _.value,
    set: (v) => {
      _.value = v, D.locale = _.value;
    }
  }), pe = We({
    get: () => p.value,
    set: (v) => {
      p.value = v, D.fallbackLocale = p.value, un(D, _.value, v);
    }
  }), Bt = We(() => c.value), jt = /* @__PURE__ */ We(() => f.value), Ue = /* @__PURE__ */ We(() => E.value);
  function Yt() {
    return K(b) ? b : null;
  }
  function Kt(v) {
    b = v, D.postTranslation = v;
  }
  function Xt() {
    return A;
  }
  function Jt(v) {
    v !== null && (h = dl(v)), A = v, D.missing = h;
  }
  function qt(v, y) {
    return v !== "translate" || !y.resolvedMessage;
  }
  const Pe = (v, y, G, te, tt, In) => {
    ye();
    let Dt;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (D.fallbackContext = n ? gd() : void 0), Dt = v(D);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (D.fallbackContext = void 0);
    }
    if (G !== "translate exists" && // for not `te` (e.g `t`)
    re(Dt) && Dt === os || G === "translate exists" && !Dt) {
      const [pt, fa] = y();
      if (process.env.NODE_ENV !== "production" && n && C(pt) && qt(G, fa) && (T && (as(g, pt) || Ho(m, pt)) && le(Se(ee.FALLBACK_TO_ROOT, {
        key: pt,
        type: G
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: gr } = D;
        gr && T && gr.emit("fallback", {
          type: G,
          key: pt,
          to: "global",
          groupId: `${G}:${pt}`
        });
      }
      return n && T ? te(n) : tt(pt);
    } else {
      if (In(Dt))
        return Dt;
      throw oe(x.UNEXPECTED_RETURN_TYPE);
    }
  };
  function yt(...v) {
    return Pe((y) => Reflect.apply(nl, null, [y, ...v]), () => ws(...v), "translate", (y) => Reflect.apply(y.t, y, [...v]), (y) => y, (y) => C(y));
  }
  function It(...v) {
    const [y, G, te] = v;
    if (te && !V(te))
      throw oe(x.INVALID_ARGUMENT);
    return yt(y, G, _e({ resolvedMessage: !0 }, te || {}));
  }
  function Qt(...v) {
    return Pe((y) => Reflect.apply(rl, null, [y, ...v]), () => Ms(...v), "datetime format", (y) => Reflect.apply(y.d, y, [...v]), () => Qn, (y) => C(y));
  }
  function zt(...v) {
    return Pe((y) => Reflect.apply(ol, null, [y, ...v]), () => ks(...v), "number format", (y) => Reflect.apply(y.n, y, [...v]), () => Qn, (y) => C(y));
  }
  function Zt(v) {
    return v.map((y) => C(y) || re(y) || F(y) ? il(String(y)) : y);
  }
  const en = {
    normalize: Zt,
    interpolate: (v) => v,
    type: "vnode"
  };
  function At(...v) {
    return Pe(
      (y) => {
        let G;
        const te = y;
        try {
          te.processor = en, G = Reflect.apply(nl, null, [te, ...v]);
        } finally {
          te.processor = null;
        }
        return G;
      },
      () => ws(...v),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[Vs](...v),
      (y) => [il(y)],
      (y) => z(y)
    );
  }
  function tn(...v) {
    return Pe(
      (y) => Reflect.apply(ol, null, [y, ...v]),
      () => ks(...v),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[Us](...v),
      ul,
      (y) => C(y) || z(y)
    );
  }
  function nn(...v) {
    return Pe(
      (y) => Reflect.apply(rl, null, [y, ...v]),
      () => Ms(...v),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[$s](...v),
      ul,
      (y) => C(y) || z(y)
    );
  }
  function sn(v) {
    R = v, D.pluralRules = R;
  }
  function P(v, y) {
    return Pe(() => {
      if (!v)
        return !1;
      const G = C(y) ? y : _.value, te = _t(G), tt = D.messageResolver(te, v);
      return a ? tt != null : ut(tt) || we(tt) || C(tt);
    }, () => [v], "translate exists", (G) => Reflect.apply(G.te, G, [v, y]), Wd, (G) => F(G));
  }
  function H(v) {
    let y = null;
    const G = Fo(D, p.value, _.value);
    for (let te = 0; te < G.length; te++) {
      const tt = c.value[G[te]] || {}, In = D.messageResolver(tt, v);
      if (In != null) {
        y = In;
        break;
      }
    }
    return y;
  }
  function rn(v) {
    const y = H(v);
    return y ?? (n ? n.tm(v) || {} : {});
  }
  function _t(v) {
    return c.value[v] || {};
  }
  function ln(v, y) {
    if (r) {
      const G = { [v]: y };
      for (const te in G)
        Jn(G, te) && On(G[te]);
      y = G[v];
    }
    c.value[v] = y, D.messages = c.value;
  }
  function cs(v, y) {
    c.value[v] = c.value[v] || {};
    const G = { [v]: y };
    if (r)
      for (const te in G)
        Jn(G, te) && On(G[te]);
    y = G[v], Un(y, c.value[v]), D.messages = c.value;
  }
  function u(v) {
    return f.value[v] || {};
  }
  function d(v, y) {
    f.value[v] = y, D.datetimeFormats = f.value, ll(D, v, y);
  }
  function S(v, y) {
    f.value[v] = _e(f.value[v] || {}, y), D.datetimeFormats = f.value, ll(D, v, y);
  }
  function w(v) {
    return E.value[v] || {};
  }
  function Z(v, y) {
    E.value[v] = y, D.numberFormats = E.value, al(D, v, y);
  }
  function J(v, y) {
    E.value[v] = _e(E.value[v] || {}, y), D.numberFormats = E.value, al(D, v, y);
  }
  fl++, n && Ve && (As(n.locale, (v) => {
    i && (_.value = v, D.locale = v, un(D, _.value, p.value));
  }), As(n.fallbackLocale, (v) => {
    i && (p.value = v, D.fallbackLocale = v, un(D, _.value, p.value));
  }));
  const j = {
    id: fl,
    locale: U,
    fallbackLocale: pe,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(v) {
      i = v, v && n && (_.value = n.locale.value, p.value = n.fallbackLocale.value, un(D, _.value, p.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Bt,
    get modifiers() {
      return L;
    },
    get pluralRules() {
      return R || {};
    },
    get isGlobal() {
      return l;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(v) {
      m = v, D.missingWarn = m;
    },
    get fallbackWarn() {
      return g;
    },
    set fallbackWarn(v) {
      g = v, D.fallbackWarn = g;
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(v) {
      T = v;
    },
    get fallbackFormat() {
      return I;
    },
    set fallbackFormat(v) {
      I = v, D.fallbackFormat = I;
    },
    get warnHtmlMessage() {
      return N;
    },
    set warnHtmlMessage(v) {
      N = v, D.warnHtmlMessage = v;
    },
    get escapeParameter() {
      return O;
    },
    set escapeParameter(v) {
      O = v, D.escapeParameter = v;
    },
    t: yt,
    getLocaleMessage: _t,
    setLocaleMessage: ln,
    mergeLocaleMessage: cs,
    getPostTranslationHandler: Yt,
    setPostTranslationHandler: Kt,
    getMissingHandler: Xt,
    setMissingHandler: Jt,
    [na]: sn
  };
  return j.datetimeFormats = jt, j.numberFormats = Ue, j.rt = It, j.te = P, j.tm = rn, j.d = Qt, j.n = zt, j.getDateTimeFormat = u, j.setDateTimeFormat = d, j.mergeDateTimeFormat = S, j.getNumberFormat = w, j.setNumberFormat = Z, j.mergeNumberFormat = J, j[sa] = s, j[Vs] = At, j[$s] = nn, j[Us] = tn, process.env.NODE_ENV !== "production" && (j[St] = (v) => {
    D.__v_emitter = v;
  }, j[bn] = () => {
    D.__v_emitter = void 0;
  }), j;
}
function Gd(e) {
  const t = C(e.locale) ? e.locale : Ht, n = C(e.fallbackLocale) || z(e.fallbackLocale) || k(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, s = K(e.missing) ? e.missing : void 0, l = F(e.silentTranslationWarn) || ct(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, r = F(e.silentFallbackWarn) || ct(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = F(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, i = k(e.modifiers) ? e.modifiers : {}, _ = e.pluralizationRules, p = K(e.postTranslation) ? e.postTranslation : void 0, c = C(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, E = F(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && le(Se(ee.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && le(Se(ee.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let m = e.messages;
  if (k(e.sharedMessages)) {
    const O = e.sharedMessages;
    m = Object.keys(O).reduce((R, D) => {
      const q = R[D] || (R[D] = {});
      return _e(q, O[D]), R;
    }, m || {});
  }
  const { __i18n: g, __root: T, __injectWithOption: I } = e, A = e.datetimeFormats, h = e.numberFormats, b = e.flatJson, N = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: m,
    flatJson: b,
    datetimeFormats: A,
    numberFormats: h,
    missing: s,
    missingWarn: l,
    fallbackWarn: r,
    fallbackRoot: o,
    fallbackFormat: a,
    modifiers: i,
    pluralRules: _,
    postTranslation: p,
    warnHtmlMessage: c,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: E,
    translateExistCompatible: N,
    __i18n: g,
    __root: T,
    __injectWithOption: I
  };
}
function Ws(e = {}, t) {
  {
    const n = _r(Gd(e)), { __extender: s } = e, l = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(r) {
        n.locale.value = r;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(r) {
        n.fallbackLocale.value = r;
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
        return process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(r) {
        process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(r) {
        n.setMissingHandler(r);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return F(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(r) {
        n.missingWarn = F(r) ? !r : r;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return F(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(r) {
        n.fallbackWarn = F(r) ? !r : r;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(r) {
        n.fallbackFormat = r;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(r) {
        n.setPostTranslationHandler(r);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(r) {
        n.inheritLocale = r;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(r) {
        n.warnHtmlMessage = r !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(r) {
        n.escapeParameter = r;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(r) {
        process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...r) {
        const [o, a, i] = r, _ = {};
        let p = null, c = null;
        if (!C(o))
          throw oe(x.INVALID_ARGUMENT);
        const f = o;
        return C(a) ? _.locale = a : z(a) ? p = a : k(a) && (c = a), z(i) ? p = i : k(i) && (c = i), Reflect.apply(n.t, n, [
          f,
          p || c || {},
          _
        ]);
      },
      rt(...r) {
        return Reflect.apply(n.rt, n, [...r]);
      },
      // tc
      tc(...r) {
        const [o, a, i] = r, _ = { plural: 1 };
        let p = null, c = null;
        if (!C(o))
          throw oe(x.INVALID_ARGUMENT);
        const f = o;
        return C(a) ? _.locale = a : re(a) ? _.plural = a : z(a) ? p = a : k(a) && (c = a), C(i) ? _.locale = i : z(i) ? p = i : k(i) && (c = i), Reflect.apply(n.t, n, [
          f,
          p || c || {},
          _
        ]);
      },
      // te
      te(r, o) {
        return n.te(r, o);
      },
      // tm
      tm(r) {
        return n.tm(r);
      },
      // getLocaleMessage
      getLocaleMessage(r) {
        return n.getLocaleMessage(r);
      },
      // setLocaleMessage
      setLocaleMessage(r, o) {
        n.setLocaleMessage(r, o);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(r, o) {
        n.mergeLocaleMessage(r, o);
      },
      // d
      d(...r) {
        return Reflect.apply(n.d, n, [...r]);
      },
      // getDateTimeFormat
      getDateTimeFormat(r) {
        return n.getDateTimeFormat(r);
      },
      // setDateTimeFormat
      setDateTimeFormat(r, o) {
        n.setDateTimeFormat(r, o);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(r, o) {
        n.mergeDateTimeFormat(r, o);
      },
      // n
      n(...r) {
        return Reflect.apply(n.n, n, [...r]);
      },
      // getNumberFormat
      getNumberFormat(r) {
        return n.getNumberFormat(r);
      },
      // setNumberFormat
      setNumberFormat(r, o) {
        n.setNumberFormat(r, o);
      },
      // mergeNumberFormat
      mergeNumberFormat(r, o) {
        n.mergeNumberFormat(r, o);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(r, o) {
        return process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return l.__extender = s, process.env.NODE_ENV !== "production" && (l.__enableEmitter = (r) => {
      const o = n;
      o[St] && o[St](r);
    }, l.__disableEmitter = () => {
      const r = n;
      r[bn] && r[bn]();
    }), l;
  }
}
const pr = {
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
function Bd({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, l) => [
    ...s,
    // prettier-ignore
    ...l.type === Ut ? l.children : [l]
  ], []) : t.reduce((n, s) => {
    const l = e[s];
    return l && (n[s] = l()), n;
  }, {});
}
function oa(e) {
  return Ut;
}
const jd = /* @__PURE__ */ rr({
  /* eslint-disable */
  name: "i18n-t",
  props: _e({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => re(e) || !isNaN(e)
    }
  }, pr),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: s } = t, l = e.i18n || hr({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const r = Object.keys(n).filter((c) => c !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = C(e.plural) ? +e.plural : e.plural);
      const a = Bd(t, r), i = l[Vs](e.keypath, a, o), _ = _e({}, s), p = C(e.tag) || V(e.tag) ? e.tag : oa();
      return vo(p, _, i);
    };
  }
}), bs = jd;
function Yd(e) {
  return z(e) && !C(e[0]);
}
function aa(e, t, n, s) {
  const { slots: l, attrs: r } = t;
  return () => {
    const o = { part: !0 };
    let a = {};
    e.locale && (o.locale = e.locale), C(e.format) ? o.key = e.format : V(e.format) && (C(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((f, E) => n.includes(E) ? _e({}, f, { [E]: e.format[E] }) : f, {}));
    const i = s(e.value, o, a);
    let _ = [o.key];
    z(i) ? _ = i.map((f, E) => {
      const m = l[f.type], g = m ? m({ [f.type]: f.value, index: E, parts: i }) : [f.value];
      return Yd(g) && (g[0].key = `${f.type}-${E}`), g;
    }) : C(i) && (_ = [i]);
    const p = _e({}, r), c = C(e.tag) || V(e.tag) ? e.tag : oa();
    return vo(c, p, _);
  };
}
const Kd = /* @__PURE__ */ rr({
  /* eslint-disable */
  name: "i18n-n",
  props: _e({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, pr),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || hr({
      useScope: e.scope,
      __useComponent: !0
    });
    return aa(e, t, zo, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Us](...s)
    ));
  }
}), _l = Kd, Xd = /* @__PURE__ */ rr({
  /* eslint-disable */
  name: "i18n-d",
  props: _e({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, pr),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || hr({
      useScope: e.scope,
      __useComponent: !0
    });
    return aa(e, t, Qo, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[$s](...s)
    ));
  }
}), pl = Xd;
function Jd(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const s = n.__getInstance(t);
    return s != null ? s.__composer : e.global.__composer;
  }
}
function qd(e) {
  const t = (o) => {
    const { instance: a, modifiers: i, value: _ } = o;
    if (!a || !a.$)
      throw oe(x.UNEXPECTED_ERROR);
    const p = Jd(e, a.$);
    process.env.NODE_ENV !== "production" && i.preserve && le(Se(ee.NOT_SUPPORTED_PRESERVE));
    const c = ml(_);
    return [
      Reflect.apply(p.t, p, [...hl(c)]),
      p
    ];
  };
  return {
    created: (o, a) => {
      const [i, _] = t(a);
      Ve && e.global === _ && (o.__i18nWatcher = As(_.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = _, o.textContent = i;
    },
    unmounted: (o) => {
      Ve && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const i = o.__composer, _ = ml(a);
        o.textContent = Reflect.apply(i.t, i, [
          ...hl(_)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return { textContent: a };
    }
  };
}
function ml(e) {
  if (C(e))
    return { path: e };
  if (k(e)) {
    if (!("path" in e))
      throw oe(x.REQUIRED_VALUE, "path");
    return e;
  } else
    throw oe(x.INVALID_VALUE);
}
function hl(e) {
  const { path: t, locale: n, args: s, choice: l, plural: r } = e, o = {}, a = s || {};
  return C(n) && (o.locale = n), re(l) && (o.plural = l), re(r) && (o.plural = r), [t, a, o];
}
function Qd(e, t, ...n) {
  const s = k(n[0]) ? n[0] : {}, l = !!s.useI18nComponentName, r = F(s.globalInstall) ? s.globalInstall : !0;
  process.env.NODE_ENV !== "production" && r && l && le(Se(ee.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: bs.name
  })), r && ([l ? "i18n" : bs.name, "I18nT"].forEach((o) => e.component(o, bs)), [_l.name, "I18nN"].forEach((o) => e.component(o, _l)), [pl.name, "I18nD"].forEach((o) => e.component(o, pl))), e.directive("t", qd(t));
}
const Os = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, zd = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Zd = {
  "vue-i18n-timeline": 16764185
}, ia = "vue-i18n: composer properties";
let Hs;
async function e_(e, t) {
  return new Promise((n, s) => {
    try {
      Fd({
        id: "vue-devtools-plugin-vue-i18n",
        label: Os[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [ia],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (l) => {
        Hs = l, l.on.visitComponentTree(({ componentInstance: o, treeNode: a }) => {
          t_(o, a, t);
        }), l.on.inspectComponent(({ componentInstance: o, instanceData: a }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && a && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && gl(a, o.vnode.el.__VUE_I18N__) : gl(a, o.vnode.el.__VUE_I18N__));
        }), l.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Os[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: zd[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), l.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && o_(o, t);
        });
        const r = /* @__PURE__ */ new Map();
        l.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (l.unhighlightElement(), i_(o, t), o.nodeId === "global") {
              if (!r.has(o.app)) {
                const [a] = await l.getComponentInstances(o.app);
                r.set(o.app, a);
              }
              l.highlightElement(r.get(o.app));
            } else {
              const a = a_(o.nodeId, t);
              a && l.highlightElement(a);
            }
        }), l.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && u_(o, t);
        }), l.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Os[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: Zd[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), n(!0);
      });
    } catch (l) {
      console.error(l), s(!1);
    }
  });
}
function ca(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function t_(e, t, n) {
  const s = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== s) {
    const l = {
      label: `i18n (${ca(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(l);
  }
}
function gl(e, t) {
  const n = ia;
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
    value: mr(t.messages.value)
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
function mr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const s = e[n];
    K(s) && "source" in s ? t[n] = l_(s) : ut(s) && s.loc && s.loc.source ? t[n] = s.loc.source : V(s) ? t[n] = mr(s) : t[n] = s;
  }), t;
}
const n_ = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function s_(e) {
  return e.replace(/[<>"&]/g, r_);
}
function r_(e) {
  return n_[e] || e;
}
function l_(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${s_(e.source)}")` : "(?)"}`
    }
  };
}
function o_(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [s, l] of t.__instances) {
    const r = t.mode === "composition" ? l : l.__composer;
    n !== r && e.rootNodes.push({
      id: r.id.toString(),
      label: `${ca(s)} Scope`
    });
  }
}
function a_(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [s, l] of t.__instances.entries())
      if (l.id.toString() === e) {
        n = s;
        break;
      }
  }
  return n;
}
function ua(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((s) => s.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function i_(e, t) {
  const n = ua(e.nodeId, t);
  return n && (e.state = c_(n)), null;
}
function c_(e) {
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
  const l = "Locale messages info", r = [
    {
      type: l,
      key: "messages",
      editable: !1,
      value: mr(e.messages.value)
    }
  ];
  t[l] = r;
  {
    const o = "Datetime formats info", a = [
      {
        type: o,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[o] = a;
    const i = "Datetime formats info", _ = [
      {
        type: i,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[i] = _;
  }
  return t;
}
function Tn(e, t) {
  if (Hs) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Hs.addTimelineEvent({
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
function u_(e, t) {
  const n = ua(e.nodeId, t);
  if (n) {
    const [s] = e.path;
    s === "locale" && C(e.state.value) ? n.locale.value = e.state.value : s === "fallbackLocale" && (C(e.state.value) || z(e.state.value) || V(e.state.value)) ? n.fallbackLocale.value = e.state.value : s === "inheritLocale" && F(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function f_(e, t, n) {
  return {
    beforeCreate() {
      const s = xt();
      if (!s)
        throw oe(x.UNEXPECTED_ERROR);
      const l = this.$options;
      if (l.i18n) {
        const r = l.i18n;
        if (l.__i18n && (r.__i18n = l.__i18n), r.__root = t, this === this.$root)
          this.$i18n = El(e, r);
        else {
          r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = Ws(r);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (l.__i18n)
        if (this === this.$root)
          this.$i18n = El(e, l);
        else {
          this.$i18n = Ws({
            __i18n: l.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const r = this.$i18n;
          r.__extender && (r.__disposer = r.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      l.__i18nGlobal && la(t, l, l), this.$t = (...r) => this.$i18n.t(...r), this.$rt = (...r) => this.$i18n.rt(...r), this.$tc = (...r) => this.$i18n.tc(...r), this.$te = (r, o) => this.$i18n.te(r, o), this.$d = (...r) => this.$i18n.d(...r), this.$n = (...r) => this.$i18n.n(...r), this.$tm = (r) => this.$i18n.tm(r), n.__setInstance(s, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const s = this.$i18n;
        this.$el.__VUE_I18N__ = s.__composer;
        const l = this.__v_emitter = cr();
        s.__enableEmitter && s.__enableEmitter(l), l.on("*", Tn);
      }
    },
    unmounted() {
      const s = xt();
      if (!s)
        throw oe(x.UNEXPECTED_ERROR);
      const l = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Tn), delete this.__v_emitter), this.$i18n && (l.__disableEmitter && l.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, l.__disposer && (l.__disposer(), delete l.__disposer, delete l.__extender), n.__deleteInstance(s), delete this.$i18n;
    }
  };
}
function El(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[na](t.pluralizationRules || e.pluralizationRules);
  const n = is(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((s) => e.mergeLocaleMessage(s, n[s])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((s) => e.mergeDateTimeFormat(s, t.datetimeFormats[s])), t.numberFormats && Object.keys(t.numberFormats).forEach((s) => e.mergeNumberFormat(s, t.numberFormats[s])), e;
}
const d_ = /* @__PURE__ */ Ke("global-vue-i18n");
function __(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && F(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, s = F(e.globalInjection) ? e.globalInjection : !0, l = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, r = /* @__PURE__ */ new Map(), [o, a] = p_(e, n), i = /* @__PURE__ */ Ke(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && l && le(Se(ee.NOTICE_DROP_ALLOW_COMPOSITION));
  function _(f) {
    return r.get(f) || null;
  }
  function p(f, E) {
    r.set(f, E);
  }
  function c(f) {
    r.delete(f);
  }
  {
    const f = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return l;
      },
      // install plugin
      async install(E, ...m) {
        if (process.env.NODE_ENV !== "production" && (E.__VUE_I18N__ = f), E.__VUE_I18N_SYMBOL__ = i, E.provide(E.__VUE_I18N_SYMBOL__, f), k(m[0])) {
          const I = m[0];
          f.__composerExtend = I.__composerExtend, f.__vueI18nExtend = I.__vueI18nExtend;
        }
        let g = null;
        !n && s && (g = T_(E, f.global)), __VUE_I18N_FULL_INSTALL__ && Qd(E, f, ...m), __VUE_I18N_LEGACY_API__ && n && E.mixin(f_(a, a.__composer, f));
        const T = E.unmount;
        if (E.unmount = () => {
          g && g(), f.dispose(), T();
        }, process.env.NODE_ENV !== "production") {
          if (!await e_(E, f))
            throw oe(x.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const A = cr();
          if (n) {
            const h = a;
            h.__enableEmitter && h.__enableEmitter(A);
          } else {
            const h = a;
            h[St] && h[St](A);
          }
          A.on("*", Tn);
        }
      },
      // global accessor
      get global() {
        return a;
      },
      dispose() {
        o.stop();
      },
      // @internal
      __instances: r,
      // @internal
      __getInstance: _,
      // @internal
      __setInstance: p,
      // @internal
      __deleteInstance: c
    };
    return f;
  }
}
function hr(e = {}) {
  const t = xt();
  if (t == null)
    throw oe(x.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw oe(x.NOT_INSTALLED);
  const n = m_(t), s = g_(n), l = ra(t), r = h_(e, l);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw oe(x.NOT_AVAILABLE_IN_LEGACY_MODE);
    return b_(t, r, s, e);
  }
  if (r === "global")
    return la(s, e, l), s;
  if (r === "parent") {
    let i = E_(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && le(Se(ee.NOT_FOUND_PARENT_SCOPE)), i = s), i;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const i = _e({}, e);
    "__i18n" in l && (i.__i18n = l.__i18n), s && (i.__root = s), a = _r(i), o.__composerExtend && (a[xs] = o.__composerExtend(a)), N_(o, t, a), o.__setInstance(t, a);
  }
  return a;
}
function p_(e, t, n) {
  const s = Ra();
  {
    const l = __VUE_I18N_LEGACY_API__ && t ? s.run(() => Ws(e)) : s.run(() => _r(e));
    if (l == null)
      throw oe(x.UNEXPECTED_ERROR);
    return [s, l];
  }
}
function m_(e) {
  {
    const t = oo(e.isCE ? d_ : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw oe(e.isCE ? x.NOT_INSTALLED_WITH_PROVIDE : x.UNEXPECTED_ERROR);
    return t;
  }
}
function h_(e, t) {
  return ss(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function g_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function E_(e, t, n = !1) {
  let s = null;
  const l = t.root;
  let r = v_(t, n);
  for (; r != null; ) {
    const o = e;
    if (e.mode === "composition")
      s = o.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = o.__getInstance(r);
      a != null && (s = a.__composer, n && s && !s[sa] && (s = null));
    }
    if (s != null || l === r)
      break;
    r = r.parent;
  }
  return s;
}
function v_(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function N_(e, t, n) {
  let s = null;
  Ai(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, s = cr();
      const l = n;
      l[St] && l[St](s), s.on("*", Tn);
    }
  }, t), Di(() => {
    const l = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (s && s.off("*", Tn), l[bn] && l[bn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const r = l[xs];
    r && (r(), delete l[xs]);
  }, t);
}
function b_(e, t, n, s = {}) {
  const l = t === "local", r = Kl(null);
  if (l && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw oe(x.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = F(s.inheritLocale) ? s.inheritLocale : !C(s.locale), a = Ct(
    // prettier-ignore
    !l || o ? n.locale.value : C(s.locale) ? s.locale : Ht
  ), i = Ct(
    // prettier-ignore
    !l || o ? n.fallbackLocale.value : C(s.fallbackLocale) || z(s.fallbackLocale) || k(s.fallbackLocale) || s.fallbackLocale === !1 ? s.fallbackLocale : a.value
  ), _ = Ct(is(a.value, s)), p = Ct(k(s.datetimeFormats) ? s.datetimeFormats : { [a.value]: {} }), c = Ct(k(s.numberFormats) ? s.numberFormats : { [a.value]: {} }), f = l ? n.missingWarn : F(s.missingWarn) || ct(s.missingWarn) ? s.missingWarn : !0, E = l ? n.fallbackWarn : F(s.fallbackWarn) || ct(s.fallbackWarn) ? s.fallbackWarn : !0, m = l ? n.fallbackRoot : F(s.fallbackRoot) ? s.fallbackRoot : !0, g = !!s.fallbackFormat, T = K(s.missing) ? s.missing : null, I = K(s.postTranslation) ? s.postTranslation : null, A = l ? n.warnHtmlMessage : F(s.warnHtmlMessage) ? s.warnHtmlMessage : !0, h = !!s.escapeParameter, b = l ? n.modifiers : k(s.modifiers) ? s.modifiers : {}, N = s.pluralRules || l && n.pluralRules;
  function O() {
    return [
      a.value,
      i.value,
      _.value,
      p.value,
      c.value
    ];
  }
  const L = We({
    get: () => r.value ? r.value.locale.value : a.value,
    set: (P) => {
      r.value && (r.value.locale.value = P), a.value = P;
    }
  }), R = We({
    get: () => r.value ? r.value.fallbackLocale.value : i.value,
    set: (P) => {
      r.value && (r.value.fallbackLocale.value = P), i.value = P;
    }
  }), D = We(() => r.value ? r.value.messages.value : _.value), q = We(() => p.value), ye = We(() => c.value);
  function U() {
    return r.value ? r.value.getPostTranslationHandler() : I;
  }
  function pe(P) {
    r.value && r.value.setPostTranslationHandler(P);
  }
  function Bt() {
    return r.value ? r.value.getMissingHandler() : T;
  }
  function jt(P) {
    r.value && r.value.setMissingHandler(P);
  }
  function Ue(P) {
    return O(), P();
  }
  function Yt(...P) {
    return r.value ? Ue(() => Reflect.apply(r.value.t, null, [...P])) : Ue(() => "");
  }
  function Kt(...P) {
    return r.value ? Reflect.apply(r.value.rt, null, [...P]) : "";
  }
  function Xt(...P) {
    return r.value ? Ue(() => Reflect.apply(r.value.d, null, [...P])) : Ue(() => "");
  }
  function Jt(...P) {
    return r.value ? Ue(() => Reflect.apply(r.value.n, null, [...P])) : Ue(() => "");
  }
  function qt(P) {
    return r.value ? r.value.tm(P) : {};
  }
  function Pe(P, H) {
    return r.value ? r.value.te(P, H) : !1;
  }
  function yt(P) {
    return r.value ? r.value.getLocaleMessage(P) : {};
  }
  function It(P, H) {
    r.value && (r.value.setLocaleMessage(P, H), _.value[P] = H);
  }
  function Qt(P, H) {
    r.value && r.value.mergeLocaleMessage(P, H);
  }
  function zt(P) {
    return r.value ? r.value.getDateTimeFormat(P) : {};
  }
  function Zt(P, H) {
    r.value && (r.value.setDateTimeFormat(P, H), p.value[P] = H);
  }
  function yn(P, H) {
    r.value && r.value.mergeDateTimeFormat(P, H);
  }
  function en(P) {
    return r.value ? r.value.getNumberFormat(P) : {};
  }
  function At(P, H) {
    r.value && (r.value.setNumberFormat(P, H), c.value[P] = H);
  }
  function tn(P, H) {
    r.value && r.value.mergeNumberFormat(P, H);
  }
  const nn = {
    get id() {
      return r.value ? r.value.id : -1;
    },
    locale: L,
    fallbackLocale: R,
    messages: D,
    datetimeFormats: q,
    numberFormats: ye,
    get inheritLocale() {
      return r.value ? r.value.inheritLocale : o;
    },
    set inheritLocale(P) {
      r.value && (r.value.inheritLocale = P);
    },
    get availableLocales() {
      return r.value ? r.value.availableLocales : Object.keys(_.value);
    },
    get modifiers() {
      return r.value ? r.value.modifiers : b;
    },
    get pluralRules() {
      return r.value ? r.value.pluralRules : N;
    },
    get isGlobal() {
      return r.value ? r.value.isGlobal : !1;
    },
    get missingWarn() {
      return r.value ? r.value.missingWarn : f;
    },
    set missingWarn(P) {
      r.value && (r.value.missingWarn = P);
    },
    get fallbackWarn() {
      return r.value ? r.value.fallbackWarn : E;
    },
    set fallbackWarn(P) {
      r.value && (r.value.missingWarn = P);
    },
    get fallbackRoot() {
      return r.value ? r.value.fallbackRoot : m;
    },
    set fallbackRoot(P) {
      r.value && (r.value.fallbackRoot = P);
    },
    get fallbackFormat() {
      return r.value ? r.value.fallbackFormat : g;
    },
    set fallbackFormat(P) {
      r.value && (r.value.fallbackFormat = P);
    },
    get warnHtmlMessage() {
      return r.value ? r.value.warnHtmlMessage : A;
    },
    set warnHtmlMessage(P) {
      r.value && (r.value.warnHtmlMessage = P);
    },
    get escapeParameter() {
      return r.value ? r.value.escapeParameter : h;
    },
    set escapeParameter(P) {
      r.value && (r.value.escapeParameter = P);
    },
    t: Yt,
    getPostTranslationHandler: U,
    setPostTranslationHandler: pe,
    getMissingHandler: Bt,
    setMissingHandler: jt,
    rt: Kt,
    d: Xt,
    n: Jt,
    tm: qt,
    te: Pe,
    getLocaleMessage: yt,
    setLocaleMessage: It,
    mergeLocaleMessage: Qt,
    getDateTimeFormat: zt,
    setDateTimeFormat: Zt,
    mergeDateTimeFormat: yn,
    getNumberFormat: en,
    setNumberFormat: At,
    mergeNumberFormat: tn
  };
  function sn(P) {
    P.locale.value = a.value, P.fallbackLocale.value = i.value, Object.keys(_.value).forEach((H) => {
      P.mergeLocaleMessage(H, _.value[H]);
    }), Object.keys(p.value).forEach((H) => {
      P.mergeDateTimeFormat(H, p.value[H]);
    }), Object.keys(c.value).forEach((H) => {
      P.mergeNumberFormat(H, c.value[H]);
    }), P.escapeParameter = h, P.fallbackFormat = g, P.fallbackRoot = m, P.fallbackWarn = E, P.missingWarn = f, P.warnHtmlMessage = A;
  }
  return Ii(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw oe(x.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const P = r.value = e.proxy.$i18n.__composer;
    t === "global" ? (a.value = P.locale.value, i.value = P.fallbackLocale.value, _.value = P.messages.value, p.value = P.datetimeFormats.value, c.value = P.numberFormats.value) : l && sn(P);
  }), nn;
}
const O_ = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], vl = ["t", "rt", "d", "n", "tm", "te"];
function T_(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return O_.forEach((l) => {
    const r = Object.getOwnPropertyDescriptor(t, l);
    if (!r)
      throw oe(x.UNEXPECTED_ERROR);
    const o = he(r.value) ? {
      get() {
        return r.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        r.value.value = a;
      }
    } : {
      get() {
        return r.get && r.get();
      }
    };
    Object.defineProperty(n, l, o);
  }), e.config.globalProperties.$i18n = n, vl.forEach((l) => {
    const r = Object.getOwnPropertyDescriptor(t, l);
    if (!r || !r.value)
      throw oe(x.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${l}`, r);
  }), () => {
    delete e.config.globalProperties.$i18n, vl.forEach((l) => {
      delete e.config.globalProperties[`$${l}`];
    });
  };
}
$d();
__INTLIFY_JIT_COMPILATION__ ? Qr(Td) : Qr(Od);
_d(Kf);
pd(Fo);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = ze();
  e.__INTLIFY__ = !0, nd(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function S_() {
  const e = /* @__PURE__ */ Object.assign({
    "./locales/en_US.json": mu,
    "./locales/es_ES.json": Ou,
    "./locales/fr_FR.json": Du,
    "./locales/pl_PL.json": Fu,
    "./locales/pt_BR.json": Gu,
    "./locales/tr_TR.json": qu
  }), t = {};
  for (const n in e) {
    const s = n.match(/([A-Za-z0-9-_]+)(?=\.)/i)[0];
    if (s && s.length > 1) {
      const l = s;
      t[l] = e[n];
    }
  }
  return t;
}
const L_ = __({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: S_()
}), y_ = {
  install(e, t) {
    e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(L_), e.component("vueSelectSides", iu);
  }
};
export {
  y_ as default
};
