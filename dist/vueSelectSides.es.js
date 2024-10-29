var ra = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function la(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _l = { exports: {} };
(function(e) {
  (function(t, n) {
    e.exports = n();
  })(ra, function() {
    var t = Object.prototype.toString, n = Object.prototype.hasOwnProperty;
    function s(m) {
      if (!m || i(m) && m.length === 0)
        return !0;
      for (var E in m)
        if (n.call(m, E))
          return !1;
      return !0;
    }
    function r(m) {
      return t.call(m);
    }
    function l(m) {
      return typeof m == "number" || r(m) === "[object Number]";
    }
    function o(m) {
      return typeof m == "string" || r(m) === "[object String]";
    }
    function a(m) {
      return typeof m == "object" && r(m) === "[object Object]";
    }
    function i(m) {
      return typeof m == "object" && typeof m.length == "number" && r(m) === "[object Array]";
    }
    function f(m) {
      return typeof m == "boolean" || r(m) === "[object Boolean]";
    }
    function p(m) {
      var E = parseInt(m);
      return E.toString() === m ? E : m;
    }
    function c(m, E, T, y) {
      if (l(E) && (E = [E]), s(E))
        return m;
      if (o(E))
        return c(m, E.split("."), T, y);
      var A = p(E[0]);
      if (E.length === 1) {
        var h = m[A];
        return (h === void 0 || !y) && (m[A] = T), h;
      }
      return m[A] === void 0 && (l(A) ? m[A] = [] : m[A] = {}), c(m[A], E.slice(1), T, y);
    }
    function _(m, E) {
      if (l(E) && (E = [E]), !s(m)) {
        if (s(E))
          return m;
        if (o(E))
          return _(m, E.split("."));
        var T = p(E[0]), y = m[T];
        if (E.length === 1)
          y !== void 0 && (i(m) ? m.splice(T, 1) : delete m[T]);
        else if (m[T] !== void 0)
          return _(m[T], E.slice(1));
        return m;
      }
    }
    var g = {};
    return g.ensureExists = function(m, E, T) {
      return c(m, E, T, !0);
    }, g.set = function(m, E, T, y) {
      return c(m, E, T, y);
    }, g.insert = function(m, E, T, y) {
      var A = g.get(m, E);
      y = ~~y, i(A) || (A = [], g.set(m, E, A)), A.splice(y, 0, T);
    }, g.empty = function(m, E) {
      if (s(E))
        return m;
      if (!s(m)) {
        var T, y;
        if (!(T = g.get(m, E)))
          return m;
        if (o(T))
          return g.set(m, E, "");
        if (f(T))
          return g.set(m, E, !1);
        if (l(T))
          return g.set(m, E, 0);
        if (i(T))
          T.length = 0;
        else if (a(T))
          for (y in T)
            n.call(T, y) && delete T[y];
        else
          return g.set(m, E, null);
      }
    }, g.push = function(m, E) {
      var T = g.get(m, E);
      i(T) || (T = [], g.set(m, E, T)), T.push.apply(T, Array.prototype.slice.call(arguments, 2));
    }, g.coalesce = function(m, E, T) {
      for (var y, A = 0, h = E.length; A < h; A++)
        if ((y = g.get(m, E[A])) !== void 0)
          return y;
      return T;
    }, g.get = function(m, E, T) {
      if (l(E) && (E = [E]), s(E))
        return m;
      if (s(m))
        return T;
      if (o(E))
        return g.get(m, E.split("."), T);
      var y = p(E[0]);
      return E.length === 1 ? m[y] === void 0 ? T : m[y] : g.get(m[y], E.slice(1), T);
    }, g.del = function(m, E) {
      return _(m, E);
    }, g;
  });
})(_l);
var oa = _l.exports, pr = oa, pl, ml, vs;
vs = function(e) {
  return function(t) {
    return typeof t === e;
  };
};
ml = function(t, n) {
  var s = 1, r = n || function(l, o) {
    return o;
  };
  return t[0] === "-" && (s = -1, t = t.substr(1)), function(o, a) {
    var i, f = r(t, pr.get(o, t)), p = r(t, pr.get(a, t));
    return f < p && (i = -1), f > p && (i = 1), f === p && (i = 0), i * s;
  };
};
pl = function() {
  var t = Array.prototype.slice.call(arguments), n = t.filter(vs("string")), s = t.filter(vs("function"))[0];
  return function(l, o) {
    for (var a = n.length, i = 0, f = 0; i === 0 && f < a; )
      i = ml(n[f], s)(l, o), f++;
    return i;
  };
};
var aa = pl;
const mr = /* @__PURE__ */ la(aa), Ge = (e) => JSON.parse(JSON.stringify(e)), ot = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), Vn = (e, t) => {
  let n = [];
  return e.sortSelectedUp && n.push("-selectedDefault"), e.orderBy && (e.orderBy.toLowerCase() === "asc" && n.push("label"), e.orderBy.toLowerCase() === "desc" && n.push("-label")), t.sort(mr(...n)).map((s) => (s.children && s.children.sort(mr(...n)), s)), t;
}, hl = (e, t) => e.filter((n) => String(n) !== String(t));
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ia(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Re = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ca = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ft = () => {
}, ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Le = Object.assign, fa = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, da = Object.prototype.hasOwnProperty, se = (e, t) => da.call(e, t), Y = Array.isArray, gt = (e) => Jn(e) === "[object Map]", gl = (e) => Jn(e) === "[object Set]", ne = (e) => typeof e == "function", Ie = (e) => typeof e == "string", St = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", _a = (e) => (ue(e) || ne(e)) && ne(e.then) && ne(e.catch), El = Object.prototype.toString, Jn = (e) => El.call(e), vl = (e) => Jn(e).slice(8, -1), Nl = (e) => Jn(e) === "[object Object]", Ws = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pa = /-(\w)/g, $n = Hs(
  (e) => e.replace(pa, (t, n) => n ? n.toUpperCase() : "")
), pn = Hs((e) => e.charAt(0).toUpperCase() + e.slice(1)), ma = Hs(
  (e) => e ? `on${pn(e)}` : ""
), at = (e, t) => !Object.is(e, t), ha = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ga = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, hr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let gr;
const qn = () => gr || (gr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gs(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = Ie(s) ? ba(s) : Gs(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else if (Ie(e) || ue(e))
    return e;
}
const Ea = /;(?![^(]*\))/g, va = /:([^]+)/, Na = /\/\*[^]*?\*\//g;
function ba(e) {
  const t = {};
  return e.replace(Na, "").split(Ea).forEach((n) => {
    if (n) {
      const s = n.split(va);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function mn(e) {
  let t = "";
  if (Ie(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = mn(e[n]);
      s && (t += s + " ");
    }
  else if (ue(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const bl = (e) => !!(e && e.__v_isRef === !0), ze = (e) => Ie(e) ? e : e == null ? "" : Y(e) || ue(e) && (e.toString === El || !ne(e.toString)) ? bl(e) ? ze(e.value) : JSON.stringify(e, Ol, 2) : String(e), Ol = (e, t) => bl(t) ? Ol(e, t.value) : gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], l) => (n[os(s, l) + " =>"] = r, n),
    {}
  )
} : gl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => os(n))
} : St(t) ? os(t) : ue(t) && !Y(t) && !Nl(t) ? String(t) : t, os = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ae;
class Oa {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(
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
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    } else process.env.NODE_ENV !== "production" && Ye("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ae = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ae = this.parent;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ta(e) {
  return new Oa(e);
}
function Sa() {
  return Ae;
}
let B;
const as = /* @__PURE__ */ new WeakSet();
class La {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && Ae.active && Ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, as.has(this) && (as.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Sl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Er(this), Ll(this);
    const t = B, n = Fe;
    B = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && B !== this && Ye(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Il(this), B = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ys(t);
      this.deps = this.depsTail = void 0, Er(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? as.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ns(this) && this.run();
  }
  get dirty() {
    return Ns(this);
  }
}
let Tl = 0, fn, dn;
function Sl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = dn, dn = e;
    return;
  }
  e.next = fn, fn = e;
}
function Bs() {
  Tl++;
}
function js() {
  if (--Tl > 0)
    return;
  if (dn) {
    let t = dn;
    for (dn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fn; ) {
    let t = fn;
    for (fn = void 0; t; ) {
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
function Ll(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Il(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Ys(s), Ia(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Ns(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === hn))
    return;
  e.globalVersion = hn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ns(e)) {
    e.flags &= -3;
    return;
  }
  const n = B, s = Fe;
  B = e, Fe = !0;
  try {
    Ll(e);
    const r = e.fn(e._value);
    (t.version === 0 || at(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    B = n, Fe = s, Il(e), e.flags &= -3;
  }
}
function Ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Ys(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ia(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const Al = [];
function Sn() {
  Al.push(Fe), Fe = !1;
}
function Ln() {
  const e = Al.pop();
  Fe = e === void 0 ? !0 : e;
}
function Er(e) {
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
let hn = 0;
class ya {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ks {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!B || !Fe || B === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== B)
      n = this.activeLink = new ya(B, this), B.deps ? (n.prevDep = B.depsTail, B.depsTail.nextDep = n, B.depsTail = n) : B.deps = B.depsTail = n, Dl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = B.depsTail, n.nextDep = void 0, B.depsTail.nextDep = n, B.depsTail = n, B.deps === n && (B.deps = s);
    }
    return process.env.NODE_ENV !== "production" && B.onTrack && B.onTrack(
      Le(
        {
          effect: B
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, hn++, this.notify(t);
  }
  notify(t) {
    Bs();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Le(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      js();
    }
  }
}
function Dl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Dl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const bs = /* @__PURE__ */ new WeakMap(), Et = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Os = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), gn = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ce(e, t, n) {
  if (Fe && B) {
    let s = bs.get(e);
    s || bs.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ks()), r.map = s, r.key = n), process.env.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function rt(e, t, n, s, r, l) {
  const o = bs.get(e);
  if (!o) {
    hn++;
    return;
  }
  const a = (i) => {
    i && (process.env.NODE_ENV !== "production" ? i.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: l
    }) : i.trigger());
  };
  if (Bs(), t === "clear")
    o.forEach(a);
  else {
    const i = Y(e), f = i && Ws(n);
    if (i && n === "length") {
      const p = Number(s);
      o.forEach((c, _) => {
        (_ === "length" || _ === gn || !St(_) && _ >= p) && a(c);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), f && a(o.get(gn)), t) {
        case "add":
          i ? f && a(o.get("length")) : (a(o.get(Et)), gt(e) && a(o.get(Os)));
          break;
        case "delete":
          i || (a(o.get(Et)), gt(e) && a(o.get(Os)));
          break;
        case "set":
          gt(e) && a(o.get(Et));
          break;
      }
  }
  js();
}
function Dt(e) {
  const t = V(e);
  return t === e ? t : (ce(t, "iterate", gn), be(e) ? t : t.map(me));
}
function Qn(e) {
  return ce(e = V(e), "iterate", gn), e;
}
const Aa = {
  __proto__: null,
  [Symbol.iterator]() {
    return is(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Dt(this).concat(
      ...e.map((t) => Y(t) ? Dt(t) : t)
    );
  },
  entries() {
    return is(this, "entries", (e) => (e[1] = me(e[1]), e));
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
    return cs(this, "includes", e);
  },
  indexOf(...e) {
    return cs(this, "indexOf", e);
  },
  join(e) {
    return Dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return cs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ln(this, "pop");
  },
  push(...e) {
    return ln(this, "push", e);
  },
  reduce(e, ...t) {
    return vr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vr(this, "reduceRight", e, t);
  },
  shift() {
    return ln(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ln(this, "splice", e);
  },
  toReversed() {
    return Dt(this).toReversed();
  },
  toSorted(e) {
    return Dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return ln(this, "unshift", e);
  },
  values() {
    return is(this, "values", me);
  }
};
function is(e, t, n) {
  const s = Qn(e), r = s[t]();
  return s !== e && !be(e) && (r._next = r.next, r.next = () => {
    const l = r._next();
    return l.value && (l.value = n(l.value)), l;
  }), r;
}
const Da = Array.prototype;
function Xe(e, t, n, s, r, l) {
  const o = Qn(e), a = o !== e && !be(e), i = o[t];
  if (i !== Da[t]) {
    const c = i.apply(e, l);
    return a ? me(c) : c;
  }
  let f = n;
  o !== e && (a ? f = function(c, _) {
    return n.call(this, me(c), _, e);
  } : n.length > 2 && (f = function(c, _) {
    return n.call(this, c, _, e);
  }));
  const p = i.call(o, f, s);
  return a && r ? r(p) : p;
}
function vr(e, t, n, s) {
  const r = Qn(e);
  let l = n;
  return r !== e && (be(e) ? n.length > 3 && (l = function(o, a, i) {
    return n.call(this, o, a, i, e);
  }) : l = function(o, a, i) {
    return n.call(this, o, me(a), i, e);
  }), r[t](l, ...s);
}
function cs(e, t, n) {
  const s = V(e);
  ce(s, "iterate", gn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Un(n[0]) ? (n[0] = V(n[0]), s[t](...n)) : r;
}
function ln(e, t, n = []) {
  Sn(), Bs();
  const s = V(e)[t].apply(e, n);
  return js(), Ln(), s;
}
const Pa = /* @__PURE__ */ ia("__proto__,__v_isRef,__isVue"), Pl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(St)
);
function Ra(e) {
  St(e) || (e = String(e));
  const t = V(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
}
class Rl {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return s === (r ? l ? kl : Ml : l ? Wa : wl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = Y(t);
    if (!r) {
      let i;
      if (o && (i = Aa[n]))
        return i;
      if (n === "hasOwnProperty")
        return Ra;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      he(t) ? t : s
    );
    return (St(n) ? Pl.has(n) : Pa(n)) || (r || ce(t, "get", n), l) ? a : he(a) ? o && Ws(n) ? a : a.value : ue(a) ? r ? Vl(a) : Fl(a) : a;
  }
}
class Ca extends Rl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let l = t[n];
    if (!this._isShallow) {
      const i = et(l);
      if (!be(s) && !et(s) && (l = V(l), s = V(s)), !Y(t) && he(l) && !he(s))
        return i ? !1 : (l.value = s, !0);
    }
    const o = Y(t) && Ws(n) ? Number(n) < t.length : se(t, n), a = Reflect.set(
      t,
      n,
      s,
      he(t) ? t : r
    );
    return t === V(r) && (o ? at(s, l) && rt(t, "set", n, s, l) : rt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = se(t, n), r = t[n], l = Reflect.deleteProperty(t, n);
    return l && s && rt(t, "delete", n, void 0, r), l;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!St(n) || !Pl.has(n)) && ce(t, "has", n), s;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      Y(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class Cl extends Rl {
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
const wa = /* @__PURE__ */ new Ca(), Ma = /* @__PURE__ */ new Cl(), ka = /* @__PURE__ */ new Cl(!0), Ts = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function Fa(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = V(r), o = gt(l), a = e === "entries" || e === Symbol.iterator && o, i = e === "keys" && o, f = r[e](...s), p = n ? Ts : t ? Ss : me;
    return !t && ce(
      l,
      "iterate",
      i ? Os : Et
    ), {
      // iterator protocol
      next() {
        const { value: c, done: _ } = f.next();
        return _ ? { value: c, done: _ } : {
          value: a ? [p(c[0]), p(c[1])] : p(c),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Dn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${pn(e)} operation ${n}failed: target is readonly.`,
        V(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Va(e, t) {
  const n = {
    get(r) {
      const l = this.__v_raw, o = V(l), a = V(r);
      e || (at(r, a) && ce(o, "get", r), ce(o, "get", a));
      const { has: i } = An(o), f = t ? Ts : e ? Ss : me;
      if (i.call(o, r))
        return f(l.get(r));
      if (i.call(o, a))
        return f(l.get(a));
      l !== o && l.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ce(V(r), "iterate", Et), Reflect.get(r, "size", r);
    },
    has(r) {
      const l = this.__v_raw, o = V(l), a = V(r);
      return e || (at(r, a) && ce(o, "has", r), ce(o, "has", a)), r === a ? l.has(r) : l.has(r) || l.has(a);
    },
    forEach(r, l) {
      const o = this, a = o.__v_raw, i = V(a), f = t ? Ts : e ? Ss : me;
      return !e && ce(i, "iterate", Et), a.forEach((p, c) => r.call(l, f(p), f(c), o));
    }
  };
  return Le(
    n,
    e ? {
      add: Dn("add"),
      set: Dn("set"),
      delete: Dn("delete"),
      clear: Dn("clear")
    } : {
      add(r) {
        !t && !be(r) && !et(r) && (r = V(r));
        const l = V(this);
        return An(l).has.call(l, r) || (l.add(r), rt(l, "add", r, r)), this;
      },
      set(r, l) {
        !t && !be(l) && !et(l) && (l = V(l));
        const o = V(this), { has: a, get: i } = An(o);
        let f = a.call(o, r);
        f ? process.env.NODE_ENV !== "production" && Nr(o, a, r) : (r = V(r), f = a.call(o, r));
        const p = i.call(o, r);
        return o.set(r, l), f ? at(l, p) && rt(o, "set", r, l, p) : rt(o, "add", r, l), this;
      },
      delete(r) {
        const l = V(this), { has: o, get: a } = An(l);
        let i = o.call(l, r);
        i ? process.env.NODE_ENV !== "production" && Nr(l, o, r) : (r = V(r), i = o.call(l, r));
        const f = a ? a.call(l, r) : void 0, p = l.delete(r);
        return i && rt(l, "delete", r, void 0, f), p;
      },
      clear() {
        const r = V(this), l = r.size !== 0, o = process.env.NODE_ENV !== "production" ? gt(r) ? new Map(r) : new Set(r) : void 0, a = r.clear();
        return l && rt(
          r,
          "clear",
          void 0,
          void 0,
          o
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Fa(r, e, t);
  }), n;
}
function Xs(e, t) {
  const n = Va(e, t);
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    se(n, r) && r in s ? n : s,
    r,
    l
  );
}
const $a = {
  get: /* @__PURE__ */ Xs(!1, !1)
}, Ua = {
  get: /* @__PURE__ */ Xs(!0, !1)
}, xa = {
  get: /* @__PURE__ */ Xs(!0, !0)
};
function Nr(e, t, n) {
  const s = V(n);
  if (s !== n && t.call(e, s)) {
    const r = vl(e);
    Ye(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const wl = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap();
function Ha(e) {
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
function Ga(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ha(vl(e));
}
function Fl(e) {
  return et(e) ? e : Js(
    e,
    !1,
    wa,
    $a,
    wl
  );
}
function Vl(e) {
  return Js(
    e,
    !0,
    Ma,
    Ua,
    Ml
  );
}
function Pn(e) {
  return Js(
    e,
    !0,
    ka,
    xa,
    kl
  );
}
function Js(e, t, n, s, r) {
  if (!ue(e))
    return process.env.NODE_ENV !== "production" && Ye(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const o = Ga(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, a), a;
}
function vt(e) {
  return et(e) ? vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function be(e) {
  return !!(e && e.__v_isShallow);
}
function Un(e) {
  return e ? !!e.__v_raw : !1;
}
function V(e) {
  const t = e && e.__v_raw;
  return t ? V(t) : e;
}
function Ba(e) {
  return !se(e, "__v_skip") && Object.isExtensible(e) && ga(e, "__v_skip", !0), e;
}
const me = (e) => ue(e) ? Fl(e) : e, Ss = (e) => ue(e) ? Vl(e) : e;
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Rt(e) {
  return Ul(e, !1);
}
function $l(e) {
  return Ul(e, !0);
}
function Ul(e, t) {
  return he(e) ? e : new ja(e, t);
}
class ja {
  constructor(t, n) {
    this.dep = new Ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : V(t), this._value = n ? t : me(t), this.__v_isShallow = n;
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
    t = s ? t : V(t), at(t, n) && (this._rawValue = t, this._value = s ? t : me(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Ya(e) {
  return he(e) ? e.value : e;
}
const Ka = {
  get: (e, t, n) => t === "__v_raw" ? e : Ya(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return he(r) && !he(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Xa(e) {
  return vt(e) ? e : new Proxy(e, Ka);
}
class Ja {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    B !== this)
      return Sl(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return yl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Ye("Write operation failed: computed value is readonly");
  }
}
function qa(e, t, n = !1) {
  let s, r;
  ne(e) ? s = e : (s = e.get, r = e.set);
  const l = new Ja(s, r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (l.onTrack = t.onTrack, l.onTrigger = t.onTrigger), l;
}
const Rn = {}, xn = /* @__PURE__ */ new WeakMap();
let ht;
function Qa(e, t = !1, n = ht) {
  if (n) {
    let s = xn.get(n);
    s || xn.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Ye(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Za(e, t, n = Re) {
  const { immediate: s, deep: r, once: l, scheduler: o, augmentJob: a, call: i } = n, f = (N) => {
    (n.onWarn || Ye)(
      "Invalid watch source: ",
      N,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (N) => r ? N : be(N) || r === !1 || r === 0 ? lt(N, 1) : lt(N);
  let c, _, g, m, E = !1, T = !1;
  if (he(e) ? (_ = () => e.value, E = be(e)) : vt(e) ? (_ = () => p(e), E = !0) : Y(e) ? (T = !0, E = e.some((N) => vt(N) || be(N)), _ = () => e.map((N) => {
    if (he(N))
      return N.value;
    if (vt(N))
      return p(N);
    if (ne(N))
      return i ? i(N, 2) : N();
    process.env.NODE_ENV !== "production" && f(N);
  })) : ne(e) ? t ? _ = i ? () => i(e, 2) : e : _ = () => {
    if (g) {
      Sn();
      try {
        g();
      } finally {
        Ln();
      }
    }
    const N = ht;
    ht = c;
    try {
      return i ? i(e, 3, [m]) : e(m);
    } finally {
      ht = N;
    }
  } : (_ = Ft, process.env.NODE_ENV !== "production" && f(e)), t && r) {
    const N = _, O = r === !0 ? 1 / 0 : r;
    _ = () => lt(N(), O);
  }
  const y = Sa(), A = () => {
    c.stop(), y && fa(y.effects, c);
  };
  if (l && t) {
    const N = t;
    t = (...O) => {
      N(...O), A();
    };
  }
  let h = T ? new Array(e.length).fill(Rn) : Rn;
  const b = (N) => {
    if (!(!(c.flags & 1) || !c.dirty && !N))
      if (t) {
        const O = c.run();
        if (r || E || (T ? O.some((L, R) => at(L, h[R])) : at(O, h))) {
          g && g();
          const L = ht;
          ht = c;
          try {
            const R = [
              O,
              // pass undefined as the old value when it's changed for the first time
              h === Rn ? void 0 : T && h[0] === Rn ? [] : h,
              m
            ];
            i ? i(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            ), h = O;
          } finally {
            ht = L;
          }
        }
      } else
        c.run();
  };
  return a && a(b), c = new La(_), c.scheduler = o ? () => o(b, !1) : b, m = (N) => Qa(N, !1, c), g = c.onStop = () => {
    const N = xn.get(c);
    if (N) {
      if (i)
        i(N, 4);
      else
        for (const O of N) O();
      xn.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? b(!0) : h = c.run() : o ? o(b.bind(null, !0), !0) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !ue(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, he(e))
    lt(e.value, t, n);
  else if (Y(e))
    for (let s = 0; s < e.length; s++)
      lt(e[s], t, n);
  else if (gl(e) || gt(e))
    e.forEach((s) => {
      lt(s, t, n);
    });
  else if (Nl(e)) {
    for (const s in e)
      lt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && lt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Nt = [];
function za(e) {
  Nt.push(e);
}
function ei() {
  Nt.pop();
}
let us = !1;
function X(e, ...t) {
  if (us) return;
  us = !0, Sn();
  const n = Nt.length ? Nt[Nt.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = ti();
  if (s)
    Zn(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((l) => {
          var o, a;
          return (a = (o = l.toString) == null ? void 0 : o.call(l)) != null ? a : JSON.stringify(l);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: l }) => `at <${ao(n, l.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const l = [`[Vue warn]: ${e}`, ...t];
    r.length && l.push(`
`, ...ni(r)), console.warn(...l);
  }
  Ln(), us = !1;
}
function ti() {
  let e = Nt[Nt.length - 1];
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
function ni(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...si(n));
  }), t;
}
function si({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${ao(
    e.component,
    e.type,
    s
  )}`, l = ">" + n;
  return e.props ? [r, ...ri(e.props), l] : [r + l];
}
function ri(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...xl(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function xl(e, t, n) {
  return Ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : he(t) ? (t = xl(e, V(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ne(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = V(t), n ? t : [`${e}=`, t]);
}
const qs = {
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
function Zn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Zs(r, t, n);
  }
}
function Qs(e, t, n, s) {
  if (ne(e)) {
    const r = Zn(e, t, n, s);
    return r && _a(r) && r.catch((l) => {
      Zs(l, t, n);
    }), r;
  }
  if (Y(e)) {
    const r = [];
    for (let l = 0; l < e.length; l++)
      r.push(Qs(e[l], t, n, s));
    return r;
  } else process.env.NODE_ENV !== "production" && X(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Zs(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Re;
  if (t) {
    let a = t.parent;
    const i = t.proxy, f = process.env.NODE_ENV !== "production" ? qs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const p = a.ec;
      if (p) {
        for (let c = 0; c < p.length; c++)
          if (p[c](e, i, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (l) {
      Sn(), Zn(l, null, 10, [
        e,
        i,
        f
      ]), Ln();
      return;
    }
  }
  li(e, n, r, s, o);
}
function li(e, t, n, s = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const l = qs[t];
    if (n && za(n), X(`Unhandled error${l ? ` during execution of ${l}` : ""}`), n && ei(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const Ce = [];
let Qe = -1;
const Vt = [];
let st = null, Ct = 0;
const Wl = /* @__PURE__ */ Promise.resolve();
let Wn = null;
const oi = 100;
function ai(e) {
  const t = Wn || Wl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ii(e) {
  let t = Qe + 1, n = Ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ce[s], l = En(r);
    l < e || l === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function zs(e) {
  if (!(e.flags & 1)) {
    const t = En(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= En(n) ? Ce.push(e) : Ce.splice(ii(t), 0, e), e.flags |= 1, Hl();
  }
}
function Hl() {
  Wn || (Wn = Wl.then(Bl));
}
function Gl(e) {
  Y(e) ? Vt.push(...e) : st && e.id === -1 ? st.splice(Ct + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1), Hl();
}
function ci(e) {
  if (Vt.length) {
    const t = [...new Set(Vt)].sort(
      (n, s) => En(n) - En(s)
    );
    if (Vt.length = 0, st) {
      st.push(...t);
      return;
    }
    for (st = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ct = 0; Ct < st.length; Ct++) {
      const n = st[Ct];
      process.env.NODE_ENV !== "production" && jl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    st = null, Ct = 0;
  }
}
const En = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bl(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => jl(e, n) : Ft;
  try {
    for (Qe = 0; Qe < Ce.length; Qe++) {
      const n = Ce[Qe];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Zn(
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
    Qe = -1, Ce.length = 0, ci(e), Wn = null, (Ce.length || Vt.length) && Bl(e);
  }
}
function jl(e, t) {
  const n = e.get(t) || 0;
  if (n > oi) {
    const s = t.i, r = s && sr(s.type);
    return Zs(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const fs = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (qn().__VUE_HMR_RUNTIME__ = {
  createRecord: ds(ui),
  rerender: ds(fi),
  reload: ds(di)
});
const Hn = /* @__PURE__ */ new Map();
function ui(e, t) {
  return Hn.has(e) ? !1 : (Hn.set(e, {
    initialDef: Gn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Gn(e) {
  return io(e) ? e.__vccOpts : e;
}
function fi(e, t) {
  const n = Hn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Gn(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function di(e, t) {
  const n = Hn.get(e);
  if (!n) return;
  t = Gn(t), br(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const l = s[r], o = Gn(l.type);
    let a = fs.get(o);
    a || (o !== n.initialDef && br(o, t), fs.set(o, a = /* @__PURE__ */ new Set())), a.add(l), l.appContext.propsCache.delete(l.type), l.appContext.emitsCache.delete(l.type), l.appContext.optionsCache.delete(l.type), l.ceReload ? (a.add(l), l.ceReload(t.styles), a.delete(l)) : l.parent ? zs(() => {
      l.parent.update(), a.delete(l);
    }) : l.appContext.reload ? l.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), l.root.ce && l !== l.root && l.root.ce._removeChildStyle(o);
  }
  Gl(() => {
    fs.clear();
  });
}
function br(e, t) {
  Le(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ds(e) {
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
let wt, Cn = [];
function Yl(e, t) {
  var n, s;
  wt = e, wt ? (wt.enabled = !0, Cn.forEach(({ event: r, args: l }) => wt.emit(r, ...l)), Cn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((l) => {
    Yl(l, t);
  }), setTimeout(() => {
    wt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Cn = []);
  }, 3e3)) : Cn = [];
}
let Be = null, _i = null;
function xe(e, t) {
  return process.env.NODE_ENV !== "production" && X("withDirectives can only be used inside render functions."), e;
}
const pi = (e) => e.__isTeleport;
function Kl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Kl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function er(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Le({ name: e.name }, t, { setup: e })
  ) : e;
}
qn().requestIdleCallback;
qn().cancelIdleCallback;
function mi(e, t, n = ut, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      Sn();
      const a = oo(n), i = Qs(t, n, e, o);
      return a(), Ln(), i;
    });
    return s ? r.unshift(l) : r.push(l), l;
  } else if (process.env.NODE_ENV !== "production") {
    const r = ma(qs[e].replace(/ hook$/, ""));
    X(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const tr = (e) => (t, n = ut) => {
  (!vn || e === "sp") && mi(e, (...s) => t(...s), n);
}, hi = tr("bm"), gi = tr("m"), Ei = tr("um"), Xl = "components";
function Te(e, t) {
  return ql(Xl, e, !0, t) || e;
}
const Jl = Symbol.for("v-ndc");
function vi(e) {
  return Ie(e) ? ql(Xl, e, !1) || e : e || Jl;
}
function ql(e, t, n = !0, s = !1) {
  const r = ut;
  if (r) {
    const l = r.type;
    {
      const a = sr(
        l,
        !1
      );
      if (a && (a === t || a === $n(t) || a === pn($n(t))))
        return l;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Or(r[e] || l[e], t) || // global registration
      Or(r.appContext[e], t)
    );
    return !o && s ? l : (process.env.NODE_ENV !== "production" && n && !o && X(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), o);
  } else process.env.NODE_ENV !== "production" && X(
    `resolve${pn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Or(e, t) {
  return e && (e[t] || e[$n(t)] || e[pn($n(t))]);
}
function Tr(e, t, n, s) {
  let r;
  const l = n, o = Y(e);
  if (o || Ie(e)) {
    const a = o && vt(e);
    let i = !1;
    a && (i = !be(e), e = Qn(e)), r = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      r[f] = t(
        i ? me(e[f]) : e[f],
        f,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && X(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, l);
  } else if (ue(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (a, i) => t(a, i, void 0, l)
      );
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let i = 0, f = a.length; i < f; i++) {
        const p = a[i];
        r[i] = t(e[p], p, i, l);
      }
    }
  else
    r = [];
  return r;
}
const Ls = (e) => e ? Ui(e) ? xi(e) : Ls(e.parent) : null, _n = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Pn(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Pn(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Pn(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Pn(e.refs) : e.refs,
    $parent: (e) => Ls(e.parent),
    $root: (e) => Ls(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Oi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ai.bind(e.proxy)),
    $watch: (e) => Ri.bind(e)
  })
), Ni = (e) => e === "_" || e === "$", _s = (e, t) => e !== Re && !e.__isScriptSetup && se(e, t), bi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: l, accessCache: o, type: a, appContext: i } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
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
            return l[t];
        }
      else {
        if (_s(s, t))
          return o[t] = 1, s[t];
        if (r !== Re && se(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && se(f, t)
        )
          return o[t] = 3, l[t];
        if (n !== Re && se(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const p = _n[t];
    let c, _;
    if (p)
      return t === "$attrs" ? (ce(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && ce(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Re && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      _ = i.config.globalProperties, se(_, t)
    )
      return _[t];
    process.env.NODE_ENV !== "production" && Be && (!Ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== Re && Ni(t[0]) && se(r, t) ? X(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && X(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return _s(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && se(r, t) ? (X(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Re && se(s, t) ? (s[t] = n, !0) : se(e.props, t) ? (process.env.NODE_ENV !== "production" && X(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && X(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(l, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l }
  }, o) {
    let a;
    return !!n[o] || e !== Re && se(e, o) || _s(t, o) || (a = l[0]) && se(a, o) || se(s, o) || se(_n, o) || se(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (bi.ownKeys = (e) => (X(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Sr(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Oi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: l,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = l.get(t);
  let i;
  return a ? i = a : !r.length && !n && !s ? i = t : (i = {}, r.length && r.forEach(
    (f) => Bn(i, f, o, !0)
  ), Bn(i, t, o)), ue(t) && l.set(t, i), i;
}
function Bn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && Bn(e, l, n, !0), r && r.forEach(
    (o) => Bn(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      process.env.NODE_ENV !== "production" && X(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ti[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Ti = {
  data: Lr,
  props: yr,
  emits: yr,
  // objects
  methods: un,
  computed: un,
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
  components: un,
  directives: un,
  // watch
  watch: Li,
  // provide / inject
  provide: Lr,
  inject: Si
};
function Lr(e, t) {
  return t ? e ? function() {
    return Le(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Si(e, t) {
  return un(Ir(e), Ir(t));
}
function Ir(e) {
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
function un(e, t) {
  return e ? Le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yr(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Le(
    /* @__PURE__ */ Object.create(null),
    Sr(e),
    Sr(t ?? {})
  ) : t;
}
function Li(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Le(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ge(e[s], t[s]);
  return n;
}
let Ii = null;
function Ql(e, t, n = !1) {
  const s = ut || Be;
  if (s || Ii) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && X(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && X("inject() can only be used inside setup() or functional components.");
}
const yi = {}, Zl = (e) => Object.getPrototypeOf(e) === yi, Ai = Mi, Di = Symbol.for("v-scx"), Pi = () => {
  {
    const e = Ql(Di);
    return e || process.env.NODE_ENV !== "production" && X(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Is(e, t, n) {
  return process.env.NODE_ENV !== "production" && !ne(t) && X(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), zl(e, t, n);
}
function zl(e, t, n = Re) {
  const { immediate: s, deep: r, flush: l, once: o } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && X(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && X(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && X(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Le({}, n);
  process.env.NODE_ENV !== "production" && (a.onWarn = X);
  const i = t && s || !t && l !== "post";
  let f;
  if (vn) {
    if (l === "sync") {
      const g = Pi();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!i) {
      const g = () => {
      };
      return g.stop = Ft, g.resume = Ft, g.pause = Ft, g;
    }
  }
  const p = ut;
  a.call = (g, m, E) => Qs(g, p, m, E);
  let c = !1;
  l === "post" ? a.scheduler = (g) => {
    Ai(g, p && p.suspense);
  } : l !== "sync" && (c = !0, a.scheduler = (g, m) => {
    m ? g() : zs(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), c && (g.flags |= 2, p && (g.id = p.uid, g.i = p));
  };
  const _ = Za(e, t, a);
  return vn && (f ? f.push(_) : i && _()), _;
}
function Ri(e, t, n) {
  const s = this.proxy, r = Ie(e) ? e.includes(".") ? Ci(s, e) : () => s[e] : e.bind(s, s);
  let l;
  ne(t) ? l = t : (l = t.handler, n = t);
  const o = oo(this), a = zl(r, l.bind(s), n);
  return o(), a;
}
function Ci(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const wi = (e) => e.__isSuspense;
function Mi(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Gl(e);
}
const $t = Symbol.for("v-fgt"), eo = Symbol.for("v-txt"), ys = Symbol.for("v-cmt"), Mn = [];
let ke = null;
function W(e = !1) {
  Mn.push(ke = e ? null : []);
}
function ki() {
  Mn.pop(), ke = Mn[Mn.length - 1] || null;
}
function to(e) {
  return e.dynamicChildren = ke || ca, ki(), ke && ke.push(e), e;
}
function ae(e, t, n, s, r, l) {
  return to(
    Q(
      e,
      t,
      n,
      s,
      r,
      l,
      !0
    )
  );
}
function ve(e, t, n, s, r) {
  return to(
    de(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function As(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Fi = (...e) => so(
  ...e
), no = ({ key: e }) => e ?? null, kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || he(e) || ne(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function Q(e, t = null, n = null, s = 0, r = null, l = e === $t ? 0 : 1, o = !1, a = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && no(t),
    ref: t && kn(t),
    scopeId: _i,
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
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Be
  };
  return a ? (nr(i, n), l & 128 && e.normalize(i)) : n && (i.shapeFlag |= Ie(n) ? 8 : 16), process.env.NODE_ENV !== "production" && i.key !== i.key && X("VNode created with invalid key (NaN). VNode type:", i.type), // avoid a block node from tracking itself
  !o && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && ke.push(i), i;
}
const de = process.env.NODE_ENV !== "production" ? Fi : so;
function so(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === Jl) && (process.env.NODE_ENV !== "production" && !e && X(`Invalid vnode type when creating vnode: ${e}.`), e = ys), As(e)) {
    const a = jn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && nr(a, n), !l && ke && (a.shapeFlag & 6 ? ke[ke.indexOf(e)] = a : ke.push(a)), a.patchFlag = -2, a;
  }
  if (io(e) && (e = e.__vccOpts), t) {
    t = Vi(t);
    let { class: a, style: i } = t;
    a && !Ie(a) && (t.class = mn(a)), ue(i) && (Un(i) && !Y(i) && (i = Le({}, i)), t.style = Gs(i));
  }
  const o = Ie(e) ? 1 : wi(e) ? 128 : pi(e) ? 64 : ue(e) ? 4 : ne(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && Un(e) && (e = V(e), X(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Q(
    e,
    t,
    n,
    s,
    r,
    o,
    l,
    !0
  );
}
function Vi(e) {
  return e ? Un(e) || Zl(e) ? Le({}, e) : e : null;
}
function jn(e, t, n = !1, s = !1) {
  const { props: r, ref: l, patchFlag: o, children: a, transition: i } = e, f = t ? $i(r || {}, t) : r, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && no(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Y(l) ? l.concat(kn(t)) : [l, kn(t)] : kn(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && Y(a) ? a.map(ro) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $t ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && jn(e.ssContent),
    ssFallback: e.ssFallback && jn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return i && s && Kl(
    p,
    i.clone(p)
  ), p;
}
function ro(e) {
  const t = jn(e);
  return Y(e.children) && (t.children = e.children.map(ro)), t;
}
function lo(e = " ", t = 0) {
  return de(eo, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (W(), ve(ys, null, e)) : de(ys, null, e);
}
function nr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), nr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Zl(t) ? t._ctx = Be : r === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $i(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = mn([t.class, s.class]));
      else if (r === "style")
        t.style = Gs([t.style, s.style]);
      else if (ua(r)) {
        const l = t[r], o = s[r];
        o && l !== o && !(Y(l) && l.includes(o)) && (t[r] = l ? [].concat(l, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
let ut = null;
const Ut = () => ut || Be;
let Ds;
{
  const e = qn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (l) => {
      r.length > 1 ? r.forEach((o) => o(l)) : r[0](l);
    };
  };
  Ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ut = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => vn = n
  );
}
const oo = (e) => {
  const t = ut;
  return Ds(e), e.scope.on(), () => {
    e.scope.off(), Ds(t);
  };
};
function Ui(e) {
  return e.vnode.shapeFlag & 4;
}
let vn = !1;
process.env.NODE_ENV;
function xi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xa(Ba(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in _n)
        return _n[n](e);
    },
    has(t, n) {
      return n in t || n in _n;
    }
  })) : e.proxy;
}
const Wi = /(?:^|[-_])(\w)/g, Hi = (e) => e.replace(Wi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function sr(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ao(e, t, n = !1) {
  let s = sr(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (l) => {
      for (const o in l)
        if (l[o] === t)
          return o;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Hi(s) : n ? "App" : "Anonymous";
}
function io(e) {
  return ne(e) && "__vccOpts" in e;
}
const We = (e, t) => {
  const n = qa(e, t, vn);
  if (process.env.NODE_ENV !== "production") {
    const s = Ut();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function co(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ue(t) && !Y(t) ? As(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && As(n) && (n = [n]), de(e, t, n));
}
function Gi() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      return ue(c) ? c.__isVue ? ["div", e, "VueInstance"] : he(c) ? [
        "div",
        {},
        ["span", e, p(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in c ? c._value : c),
        ">"
      ] : vt(c) ? [
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
          ...l(c.$)
        ];
    }
  };
  function l(c) {
    const _ = [];
    c.type.props && c.props && _.push(o("props", V(c.props))), c.setupState !== Re && _.push(o("setup", c.setupState)), c.data !== Re && _.push(o("data", V(c.data)));
    const g = i(c, "computed");
    g && _.push(o("computed", g));
    const m = i(c, "inject");
    return m && _.push(o("injected", m)), _.push([
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
    ]), _;
  }
  function o(c, _) {
    return _ = Le({}, _), Object.keys(_).length ? [
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
        ...Object.keys(_).map((g) => [
          "div",
          {},
          ["span", s, g + ": "],
          a(_[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(c, _ = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : ue(c) ? ["object", { object: _ ? V(c) : c }] : ["span", n, String(c)];
  }
  function i(c, _) {
    const g = c.type;
    if (ne(g))
      return;
    const m = {};
    for (const E in c.ctx)
      f(g, E, _) && (m[E] = c.ctx[E]);
    return m;
  }
  function f(c, _, g) {
    const m = c[g];
    if (Y(m) && m.includes(_) || ue(m) && _ in m || c.extends && f(c.extends, _, g) || c.mixins && c.mixins.some((E) => f(E, _, g)))
      return !0;
  }
  function p(c) {
    return be(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Bi = process.env.NODE_ENV !== "production" ? X : Ft;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ji;
const Ar = typeof window < "u" && window.trustedTypes;
if (Ar)
  try {
    ji = /* @__PURE__ */ Ar.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Bi(`Error creating trusted types policy: ${e}`);
  }
const uo = Symbol("_vod"), Yi = Symbol("_vsh"), He = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[uo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : on(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), on(e, !0), s.enter(e)) : s.leave(e, () => {
      on(e, !1);
    }) : on(e, t));
  },
  beforeUnmount(e, { value: t }) {
    on(e, t);
  }
};
process.env.NODE_ENV !== "production" && (He.name = "show");
function on(e, t) {
  e.style.display = t ? e[uo] : "none", e[Yi] = !t;
}
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function an(e, t, n, s) {
  e.addEventListener(t, n, s);
}
const Dr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => ha(t, n) : t;
};
function Ki(e) {
  e.target.composing = !0;
}
function Pr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ps = Symbol("_assign"), Xi = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[ps] = Dr(r);
    const l = s || r.props && r.props.type === "number";
    an(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), l && (a = hr(a)), e[ps](a);
    }), n && an(e, "change", () => {
      e.value = e.value.trim();
    }), t || (an(e, "compositionstart", Ki), an(e, "compositionend", Pr), an(e, "change", Pr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: l } }, o) {
    if (e[ps] = Dr(o), e.composing) return;
    const a = (l || e.type === "number") && !/^0\d/.test(e.value) ? hr(e.value) : e.value, i = t ?? "";
    a !== i && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === i) || (e.value = i));
  }
};
/**
* vue v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ji() {
  Gi();
}
process.env.NODE_ENV !== "production" && Ji();
const $e = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, qi = {
  name: "v-select-all",
  display: "Select all",
  emits: ["update-select-all"],
  props: {
    items: Array
  }
};
function Qi(e, t, n, s, r, l) {
  return W(), ae("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (o) => e.$emit("update-select-all"))
  }, ze(e.$t("selectAll")), 1);
}
const fo = /* @__PURE__ */ $e(qi, [["render", Qi]]), Zi = {
  name: "v-deselect-all",
  display: "Deselect all",
  emits: ["update-deselect-all"],
  props: {
    click: Function,
    items: Array
  }
};
function zi(e, t, n, s, r, l) {
  return W(), ae("a", {
    href: "javascript:void(0)",
    onClick: t[0] || (t[0] = (o) => e.$emit("update-deselect-all"))
  }, ze(e.$t("deselectAll")), 1);
}
const _o = /* @__PURE__ */ $e(Zi, [["render", zi]]), ec = {
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
}, tc = ["placeholder"];
function nc(e, t, n, s, r, l) {
  return xe((W(), ae("input", {
    type: "text",
    "onUpdate:modelValue": t[0] || (t[0] = (o) => r.inputVal = o),
    placeholder: r.thePlaceholder
  }, null, 8, tc)), [
    [Xi, r.inputVal]
  ]);
}
const po = /* @__PURE__ */ $e(ec, [["render", nc]]), sc = {
  name: "v-no-results",
  display: "No results",
  methods: {}
}, rc = { class: "no-results" };
function lc(e, t, n, s, r, l) {
  return W(), ae("li", rc, [
    Q("span", null, ze(e.$t("searchNoResult")), 1)
  ]);
}
const oc = /* @__PURE__ */ $e(sc, [["render", lc]]), ac = {
  name: "v-no-selection",
  display: "No selection",
  methods: {}
}, ic = { class: "no-selection" };
function cc(e, t, n, s, r, l) {
  return W(), ae("li", ic, [
    Q("span", null, ze(e.$t("searchParentSelected")), 1)
  ]);
}
const uc = /* @__PURE__ */ $e(ac, [["render", cc]]), fc = {
  name: "v-list",
  display: "List",
  mounted() {
  },
  components: {
    "v-no-results": oc,
    "v-no-selection": uc
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
}, dc = { class: "vss-list-ul" }, _c = ["onClick"], pc = { style: {} }, mc = {
  key: 0,
  class: "vss-list-badge"
}, hc = { key: 0 }, gc = ["onClick"];
function Ec(e, t, n, s, r, l) {
  const o = Te("v-no-results"), a = Te("v-no-selection");
  return W(), ae("ul", dc, [
    (W(!0), ae($t, null, Tr(n.items, (i, f) => xe((W(), ae("li", {
      key: f,
      onClick: (p) => n.hasChildren ? !1 : l.toggleItem(i, {}, i.selected),
      class: mn(l.liClass(i, n.hasChildren))
    }, [
      Q("span", pc, [
        lo(ze(i.label) + " ", 1),
        l.showCounter(i) ? (W(), ae("small", mc, ze(i.totalChildrenSelected), 1)) : fe("", !0)
      ]),
      n.hasChildren ? (W(), ae("ul", hc, [
        (W(!0), ae($t, null, Tr(i.children, (p, c) => xe((W(), ae("li", {
          key: `${f}-${c}`,
          onClick: (_) => l.toggleItem(p, i, p.selected),
          class: mn(l.liClass(p, !1))
        }, [
          Q("span", null, ze(p.label), 1)
        ], 10, gc)), [
          [He, p.visible]
        ])), 128)),
        xe(de(o, null, null, 512), [
          [He, l.totalItems(i.children) === 0]
        ])
      ])) : fe("", !0)
    ], 10, _c)), [
      [He, l.showParent(i)]
    ])), 128)),
    xe(de(a, null, null, 512), [
      [He, l.showNoSelection(n.items)]
    ]),
    xe(de(o, null, null, 512), [
      [He, l.showNoResultParent(n.items)]
    ])
  ]);
}
const mo = /* @__PURE__ */ $e(fc, [["render", Ec]]), vc = {
  name: "v-separator",
  display: "Separator"
}, Nc = { class: "vss-span" };
function bc(e, t, n, s, r, l) {
  return W(), ae("div", Nc, " ‹ › ");
}
const ho = /* @__PURE__ */ $e(vc, [["render", bc]]), Oc = {
  name: "v-total",
  display: "Total",
  props: {
    value: {
      type: Number
    }
  }
}, Tc = ["title"];
function Sc(e, t, n, s, r, l) {
  return W(), ae("span", {
    title: e.$t("totalSelected")
  }, ze(n.value), 9, Tc);
}
const go = /* @__PURE__ */ $e(Oc, [["render", Sc]]), Eo = {
  emits: ["update-selected"],
  watch: {
    modelValue(e, t) {
      JSON.stringify(e) !== JSON.stringify(t) && (this.dataSelected = e);
    },
    dataSelected(e, t) {
      this.$emit("update-selected", e, t);
    },
    orderBy() {
      this.listLeft = Vn(this, this.dataList), this.listRight = Vn(this, this.dataList);
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
}, Lc = {
  name: "grouped-select-sides",
  display: "Grouped select sides",
  mixins: [Eo],
  components: {
    "v-select-all": fo,
    "v-deselect-all": _o,
    "v-search": po,
    "v-separator": ho,
    "v-list": mo,
    "v-total": go
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
      Object.keys(t).length > 0 ? (s[t.value] === void 0 && t.visible && (s[t.value] = []), n ? e.visible && s[t.value].indexOf(e.value) === -1 && s[t.value].push(e.value) : e.visible && (s[t.value] = hl(
        s[t.value],
        e.value
      ))) : n ? s[e.value] === void 0 && (s[e.value] = []) : delete s[e.value], this.dataSelected = s;
    },
    prepareList() {
      let e = this, t = {};
      e.dataListOriginal = Ge(e.list);
      let n = Object.keys(e.modelValue), s = e.list.filter((r) => {
        let l = r.value, o = n.indexOf(l) >= 0;
        return o ? (r.selectedDefault = !0, t[l] = []) : r.selectedDefault = !1, r.children && r.children.filter((a) => {
          let i = a.value;
          o && (e.modelValue[l].indexOf(i) >= 0 ? (a.selectedDefault = !0, t[l].push(i)) : a.selectedDefault = !1);
        }), r;
      });
      e.dataSelected = t, e.dataList = Vn(e, s);
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
      return s = s.filter((r) => {
        let l = ot(r.label);
        return n.indexOf(r.value) >= 0 ? r.selected = !0 : r.selected = !1, l.includes(t) ? r.visible = !0 : r.visible = !1, r.children ? (r.children = r.children.map((o) => (o.selected = !1, e.dataSelected[r.value] !== void 0 && (e.dataSelected[r.value].indexOf(o.value) >= 0 ? o.selected = !0 : o.selected = !1), o)), r.totalChildrenSelected = r.children.filter(function(o) {
          return o.selected === !0;
        }).length, r.children) : r;
      }), s;
    },
    filteredListR() {
      let e = this, t = ot(e.searchR), n = Ge(this.listLeft);
      return n = e.listRight.filter(function(r) {
        return r.children ? (r.children = r.children.map((l) => (ot(l.label).includes(t) ? l.visible = !0 : l.visible = !1, e.dataSelected[r.value] !== void 0 && (e.dataSelected[r.value].indexOf(l.value) >= 0 ? l.selected = !0 : l.selected = !1), l)), r.children) : r;
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
}, Ic = { class: "vss-list" }, yc = { class: "vss-inner-list" }, Ac = { class: "vss-footer" }, Dc = { class: "vss-footer-bg" }, Pc = {
  key: 1,
  class: "vss-footer-separator"
}, Rc = { class: "vss-list" }, Cc = { class: "vss-inner-list" }, wc = { class: "vss-footer" }, Mc = { class: "vss-footer-bg" }, kc = {
  key: 1,
  class: "vss-footer-separator"
};
function Fc(e, t, n, s, r, l) {
  const o = Te("v-search"), a = Te("v-list"), i = Te("v-select-all"), f = Te("v-deselect-all"), p = Te("v-total"), c = Te("v-separator");
  return W(), ae("div", null, [
    Q("div", Ic, [
      Q("div", yc, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: r.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (_) => r.searchL = _)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "has-children": !1,
          type: e.type,
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", Ac, [
          Q("div", Dc, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(i, {
                key: 0,
                items: r.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : fe("", !0),
              e.toggleAll ? (W(), ae("div", Pc, "/")) : fe("", !0),
              e.toggleAll ? (W(), ve(f, {
                key: 2,
                items: r.listLeft,
                onUpdateDeselectAll: l.updateLeftDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : fe("", !0)
            ]),
            e.total ? (W(), ve(p, {
              key: 0,
              value: Object.keys(r.dataSelected).length
            }, null, 8, ["value"])) : fe("", !0)
          ])
        ], 512), [
          [He, e.toggleAll || e.total]
        ])
      ])
    ]),
    de(c),
    Q("div", Rc, [
      Q("div", Cc, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: r.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (_) => r.searchR = _)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "has-children": !0,
          type: e.type,
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", wc, [
          Q("div", Mc, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(i, {
                key: 0,
                items: r.listRight,
                onUpdateSelectAll: l.updateRightSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : fe("", !0),
              e.toggleAll ? (W(), ae("div", kc, "/")) : fe("", !0),
              e.toggleAll ? (W(), ve(f, {
                key: 2,
                items: r.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
              }, null, 8, ["items", "onUpdateDeselectAll"])) : fe("", !0)
            ]),
            e.total ? (W(), ve(p, {
              key: 0,
              value: l.totalChildrenSelected
            }, null, 8, ["value"])) : fe("", !0)
          ])
        ], 512), [
          [He, e.toggleAll || e.total]
        ])
      ])
    ])
  ]);
}
const Vc = /* @__PURE__ */ $e(Lc, [["render", Fc]]), $c = {
  name: "mirror-select-sides",
  display: "Mirror select sides",
  mixins: [Eo],
  components: {
    "v-select-all": fo,
    "v-deselect-all": _o,
    "v-search": po,
    "v-separator": ho,
    "v-list": mo,
    "v-total": go
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
      n ? s.push(e.value) : s = hl(s, e.value), this.dataSelected = s;
    },
    prepareList() {
      this.dataListOriginal = Ge(this.list);
      let e = this, t = [], n = e.list.filter((s) => {
        let r = s.value;
        return e.modelValue.indexOf(r) >= 0 ? (s.selectedDefault = !0, t.push(r)) : s.selectedDefault = !1, s;
      });
      e.dataSelected = t, e.dataList = Vn(e, n);
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
        let r = ot(s.label);
        return t.indexOf(s.value) >= 0 ? (s.selected = !0, s.visible = !1) : (s.selected = !1, s.visible = !0), r.includes(e) && s.visible === !0 ? s.visible = !0 : s.visible = !1, s;
      }), n;
    },
    filteredListR() {
      let e = this, t = ot(e.searchR), n = this.dataSelected, s = Ge(e.listLeft);
      return s = s.filter((r) => {
        let l = ot(r.label);
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
}, Uc = { class: "vss-list" }, xc = { class: "vss-inner-list" }, Wc = { class: "vss-footer" }, Hc = { class: "vss-footer-bg" }, Gc = { class: "vss-list" }, Bc = { class: "vss-inner-list" }, jc = { class: "vss-footer" }, Yc = { class: "vss-footer-bg" };
function Kc(e, t, n, s, r, l) {
  const o = Te("v-search"), a = Te("v-list"), i = Te("v-select-all"), f = Te("v-total"), p = Te("v-separator"), c = Te("v-deselect-all");
  return W(), ae("div", null, [
    Q("div", Uc, [
      Q("div", xc, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchLeft,
          class: "vss-list-search",
          modelValue: r.searchL,
          "onUpdate:modelValue": t[0] || (t[0] = (_) => r.searchL = _)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "left",
          items: l.filteredListL,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", Wc, [
          Q("div", Hc, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(i, {
                key: 0,
                items: r.listLeft,
                onUpdateSelectAll: l.updateLeftSelectAll
              }, null, 8, ["items", "onUpdateSelectAll"])) : fe("", !0)
            ]),
            e.total ? (W(), ve(f, {
              key: 0,
              value: r.dataSelected.length
            }, null, 8, ["value"])) : fe("", !0)
          ])
        ], 512), [
          [He, e.toggleAll || e.total]
        ])
      ])
    ]),
    de(p),
    Q("div", Gc, [
      Q("div", Bc, [
        e.search ? (W(), ve(o, {
          key: 0,
          placeholder: e.placeholderSearchRight,
          class: "vss-list-search",
          modelValue: r.searchR,
          "onUpdate:modelValue": t[1] || (t[1] = (_) => r.searchR = _)
        }, null, 8, ["placeholder", "modelValue"])) : fe("", !0),
        de(a, {
          "enable-counter": !1,
          "has-children": !1,
          type: e.type,
          side: "right",
          items: l.filteredListR,
          onUpdatedItem: l.updateItem
        }, null, 8, ["type", "items", "onUpdatedItem"]),
        xe(Q("div", jc, [
          Q("div", Yc, [
            Q("div", null, [
              e.toggleAll ? (W(), ve(c, {
                key: 0,
                items: r.listRight,
                onUpdateDeselectAll: l.updateRightDeselectAll
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
const Xc = /* @__PURE__ */ $e($c, [["render", Kc]]), Jc = {
  // i18n,
  name: "vue-select-sides",
  display: "Core select sides",
  components: {
    "mirror-select-sides": Xc,
    "grouped-select-sides": Vc
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
function qc(e, t, n, s, r, l) {
  return W(), ve(vi(l.getComponent()), {
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
    "onUpdate:modelValue": t[0] || (t[0] = (o) => l.modelProp = o),
    onUpdateSelected: l.updateSelected
  }, null, 40, ["type", "list", "search", "total", "toggle-all", "order-by", "placeholder-search-left", "placeholder-search-right", "sort-selected-up", "modelValue", "onUpdateSelected"]);
}
const vo = /* @__PURE__ */ $e(Jc, [["render", qc]]), Qc = "Select all", Zc = "Deselect all", zc = "Search...", eu = "No result...", tu = "No items selected...", nu = "Total items selected", su = {
  selectAll: Qc,
  deselectAll: Zc,
  searchPlaceholder: zc,
  searchNoResult: eu,
  searchParentSelected: tu,
  totalSelected: nu
}, ru = "Seleccionar todos", lu = "Deseleccionar todos", ou = "Buscar...", au = "Sin resultados...", iu = "Ningún elemento seleccionado...", cu = "Elementos seleccionados", uu = {
  selectAll: ru,
  deselectAll: lu,
  searchPlaceholder: ou,
  searchNoResult: au,
  searchParentSelected: iu,
  totalSelected: cu
}, fu = "Ajouter tout", du = "Supprimer tout", _u = "Recherche...", pu = "Pas de résultat...", mu = "Sélection vide...", hu = "Éléments sélectionnés", gu = {
  selectAll: fu,
  deselectAll: du,
  searchPlaceholder: _u,
  searchNoResult: pu,
  searchParentSelected: mu,
  totalSelected: hu
}, Eu = "Wybierz wszystko", vu = "Wyczyść zaznaczenie", Nu = "Szukaj...", bu = "Brak wyników...", Ou = "Nie wybrano żadnych elementów...", Tu = "Liczba wybranych elementów", Su = {
  selectAll: Eu,
  deselectAll: vu,
  searchPlaceholder: Nu,
  searchNoResult: bu,
  searchParentSelected: Ou,
  totalSelected: Tu
}, Lu = "Selecionar todos", Iu = "Remover todos", yu = "Pesquisar...", Au = "Sem nenhum resultado...", Du = "Nenhum item selecionado...", Pu = "Total de itens selecionados", Ru = {
  selectAll: Lu,
  deselectAll: Iu,
  searchPlaceholder: yu,
  searchNoResult: Au,
  searchParentSelected: Du,
  totalSelected: Pu
}, Cu = "Hepsini Seç", wu = "Hepsini Çıkar", Mu = "Ara...", ku = "Sonuç Bulunamadı...", Fu = "Hiçbiri Seçilmedi...", Vu = "Hepsi Seçildi", $u = {
  selectAll: Cu,
  deselectAll: wu,
  searchPlaceholder: Mu,
  searchNoResult: ku,
  searchParentSelected: Fu,
  totalSelected: Vu
};
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ve = typeof window < "u";
let De, bt;
if (process.env.NODE_ENV !== "production") {
  const e = Ve && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (De = (t) => {
    e.mark(t);
  }, bt = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const Uu = /\{([0-9a-zA-Z]+)\}/g;
function rr(e, ...t) {
  return t.length === 1 && $(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Uu, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const Ke = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), xu = (e, t, n) => Wu({ l: e, k: t, s: n }), Wu = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), re = (e) => typeof e == "number" && isFinite(e), Hu = (e) => bo(e) === "[object Date]", it = (e) => bo(e) === "[object RegExp]", zn = (e) => k(e) && Object.keys(e).length === 0, _e = Object.assign;
let Rr;
const Ze = () => Rr || (Rr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cr(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Gu = Object.prototype.hasOwnProperty;
function Yn(e, t) {
  return Gu.call(e, t);
}
const Z = Array.isArray, K = (e) => typeof e == "function", C = (e) => typeof e == "string", F = (e) => typeof e == "boolean", $ = (e) => e !== null && typeof e == "object", Bu = (e) => $(e) && K(e.then) && K(e.catch), No = Object.prototype.toString, bo = (e) => No.call(e), k = (e) => {
  if (!$(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, ju = (e) => e == null ? "" : Z(e) || k(e) && e.toString === No ? JSON.stringify(e, null, 2) : String(e);
function Yu(e, t = "") {
  return e.reduce((n, s, r) => r === 0 ? n + s : n + t + s, "");
}
const wr = 2;
function Ku(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let r = 0;
  const l = [];
  for (let o = 0; o < s.length; o++)
    if (r += s[o].length + 1, r >= t) {
      for (let a = o - wr; a <= o + wr || n > r; a++) {
        if (a < 0 || a >= s.length)
          continue;
        const i = a + 1;
        l.push(`${i}${" ".repeat(3 - String(i).length)}|  ${s[a]}`);
        const f = s[a].length;
        if (a === o) {
          const p = t - (r - f) + 1, c = Math.max(1, n > r ? f - p : n - t);
          l.push("   |  " + " ".repeat(p) + "^".repeat(c));
        } else if (a > o) {
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
function es(e) {
  let t = e;
  return () => ++t;
}
function le(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Mr = {};
function Oo(e) {
  Mr[e] || (Mr[e] = !0, le(e));
}
function lr() {
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
const wn = (e) => !$(e) || Z(e);
function Fn(e, t) {
  if (wn(e) || wn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: r } = n.pop();
    Object.keys(s).forEach((l) => {
      $(s[l]) && !$(r[l]) && (r[l] = Array.isArray(s[l]) ? [] : {}), wn(r[l]) || wn(s[l]) ? r[l] = s[l] : n.push({ src: s[l], des: r[l] });
    });
  }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Xu(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Kn(e, t, n) {
  return { start: e, end: t };
}
const Ju = /\{([0-9a-zA-Z]+)\}/g;
function To(e, ...t) {
  return t.length === 1 && qu(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ju, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const So = Object.assign, kr = (e) => typeof e == "string", qu = (e) => e !== null && typeof e == "object";
function Lo(e, t = "") {
  return e.reduce((n, s, r) => r === 0 ? n + s : n + t + s, "");
}
const ts = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Qu = {
  [ts.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Zu(e, t, ...n) {
  const s = To(Qu[e], ...n || []), r = { message: String(s), code: e };
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
}, zu = {
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
function Ht(e, t, n = {}) {
  const { domain: s, messages: r, args: l } = n, o = To((r || zu)[e] || "", ...l || []), a = new SyntaxError(String(o));
  return a.code = e, t && (a.location = t), a.domain = s, a;
}
function ef(e) {
  throw e;
}
const tf = /<\/?[\w\s="/.':;#-\/]+>/, nf = (e) => tf.test(e), Je = " ", sf = "\r", Ee = `
`, rf = "\u2028", lf = "\u2029";
function of(e) {
  const t = e;
  let n = 0, s = 1, r = 1, l = 0;
  const o = (L) => t[L] === sf && t[L + 1] === Ee, a = (L) => t[L] === Ee, i = (L) => t[L] === lf, f = (L) => t[L] === rf, p = (L) => o(L) || a(L) || i(L) || f(L), c = () => n, _ = () => s, g = () => r, m = () => l, E = (L) => o(L) || i(L) || f(L) ? Ee : t[L], T = () => E(n), y = () => E(n + l);
  function A() {
    return l = 0, p(n) && (s++, r = 0), o(n) && n++, n++, r++, t[n];
  }
  function h() {
    return o(n + l) && l++, l++, t[n + l];
  }
  function b() {
    n = 0, s = 1, r = 1, l = 0;
  }
  function N(L = 0) {
    l = L;
  }
  function O() {
    const L = n + l;
    for (; L !== n; )
      A();
    l = 0;
  }
  return {
    index: c,
    line: _,
    column: g,
    peekOffset: m,
    charAt: E,
    currentChar: T,
    currentPeek: y,
    next: A,
    peek: h,
    reset: b,
    resetPeek: N,
    skipToPeek: O
  };
}
const nt = void 0, af = ".", Fr = "'", cf = "tokenizer";
function uf(e, t = {}) {
  const n = t.location !== !1, s = of(e), r = () => s.index(), l = () => Xu(s.line(), s.column(), s.index()), o = l(), a = r(), i = {
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
  }, f = () => i, { onError: p } = t;
  function c(u, d, S, ...w) {
    const z = f();
    if (d.column += S, d.offset += S, p) {
      const J = n ? Kn(z.startLoc, d) : null, j = Ht(u, J, {
        domain: cf,
        args: w
      });
      p(j);
    }
  }
  function _(u, d, S) {
    u.endLoc = l(), u.currentType = d;
    const w = { type: d };
    return n && (w.loc = Kn(u.startLoc, u.endLoc)), S != null && (w.value = S), w;
  }
  const g = (u) => _(
    u,
    14
    /* TokenTypes.EOF */
  );
  function m(u, d) {
    return u.currentChar() === d ? (u.next(), d) : (c(M.EXPECTED_TOKEN, l(), 0, d), "");
  }
  function E(u) {
    let d = "";
    for (; u.currentPeek() === Je || u.currentPeek() === Ee; )
      d += u.currentPeek(), u.peek();
    return d;
  }
  function T(u) {
    const d = E(u);
    return u.skipToPeek(), d;
  }
  function y(u) {
    if (u === nt)
      return !1;
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d === 95;
  }
  function A(u) {
    if (u === nt)
      return !1;
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function h(u, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    E(u);
    const w = y(u.currentPeek());
    return u.resetPeek(), w;
  }
  function b(u, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    E(u);
    const w = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), z = A(w);
    return u.resetPeek(), z;
  }
  function N(u, d) {
    const { currentType: S } = d;
    if (S !== 2)
      return !1;
    E(u);
    const w = u.currentPeek() === Fr;
    return u.resetPeek(), w;
  }
  function O(u, d) {
    const { currentType: S } = d;
    if (S !== 8)
      return !1;
    E(u);
    const w = u.currentPeek() === ".";
    return u.resetPeek(), w;
  }
  function L(u, d) {
    const { currentType: S } = d;
    if (S !== 9)
      return !1;
    E(u);
    const w = y(u.currentPeek());
    return u.resetPeek(), w;
  }
  function R(u, d) {
    const { currentType: S } = d;
    if (!(S === 8 || S === 12))
      return !1;
    E(u);
    const w = u.currentPeek() === ":";
    return u.resetPeek(), w;
  }
  function D(u, d) {
    const { currentType: S } = d;
    if (S !== 10)
      return !1;
    const w = () => {
      const J = u.currentPeek();
      return J === "{" ? y(u.peek()) : J === "@" || J === "%" || J === "|" || J === ":" || J === "." || J === Je || !J ? !1 : J === Ee ? (u.peek(), w()) : U(u, !1);
    }, z = w();
    return u.resetPeek(), z;
  }
  function q(u) {
    E(u);
    const d = u.currentPeek() === "|";
    return u.resetPeek(), d;
  }
  function ye(u) {
    const d = E(u), S = u.currentPeek() === "%" && u.peek() === "{";
    return u.resetPeek(), {
      isModulo: S,
      hasSpace: d.length > 0
    };
  }
  function U(u, d = !0) {
    const S = (z = !1, J = "", j = !1) => {
      const v = u.currentPeek();
      return v === "{" ? J === "%" ? !1 : z : v === "@" || !v ? J === "%" ? !0 : z : v === "%" ? (u.peek(), S(z, "%", !0)) : v === "|" ? J === "%" || j ? !0 : !(J === Je || J === Ee) : v === Je ? (u.peek(), S(!0, Je, j)) : v === Ee ? (u.peek(), S(!0, Ee, j)) : !0;
    }, w = S();
    return d && u.resetPeek(), w;
  }
  function pe(u, d) {
    const S = u.currentChar();
    return S === nt ? nt : d(S) ? (u.next(), S) : null;
  }
  function Gt(u) {
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36;
  }
  function Bt(u) {
    return pe(u, Gt);
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
  function jt(u) {
    return pe(u, Ue);
  }
  function Yt(u) {
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function Kt(u) {
    return pe(u, Yt);
  }
  function Xt(u) {
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57 || // 0-9
    d >= 65 && d <= 70 || // A-F
    d >= 97 && d <= 102;
  }
  function Jt(u) {
    return pe(u, Xt);
  }
  function Pe(u) {
    let d = "", S = "";
    for (; d = Kt(u); )
      S += d;
    return S;
  }
  function Lt(u) {
    T(u);
    const d = u.currentChar();
    return d !== "%" && c(M.EXPECTED_TOKEN, l(), 0, d), u.next(), "%";
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
  function qt(u) {
    T(u);
    let d = "", S = "";
    for (; d = jt(u); )
      S += d;
    return u.currentChar() === nt && c(M.UNTERMINATED_CLOSING_BRACE, l(), 0), S;
  }
  function Qt(u) {
    T(u);
    let d = "";
    return u.currentChar() === "-" ? (u.next(), d += `-${Pe(u)}`) : d += Pe(u), u.currentChar() === nt && c(M.UNTERMINATED_CLOSING_BRACE, l(), 0), d;
  }
  function Zt(u) {
    return u !== Fr && u !== Ee;
  }
  function In(u) {
    T(u), m(u, "'");
    let d = "", S = "";
    for (; d = pe(u, Zt); )
      d === "\\" ? S += zt(u) : S += d;
    const w = u.currentChar();
    return w === Ee || w === nt ? (c(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, l(), 0), w === Ee && (u.next(), m(u, "'")), S) : (m(u, "'"), S);
  }
  function zt(u) {
    const d = u.currentChar();
    switch (d) {
      case "\\":
      case "'":
        return u.next(), `\\${d}`;
      case "u":
        return yt(u, d, 4);
      case "U":
        return yt(u, d, 6);
      default:
        return c(M.UNKNOWN_ESCAPE_SEQUENCE, l(), 0, d), "";
    }
  }
  function yt(u, d, S) {
    m(u, d);
    let w = "";
    for (let z = 0; z < S; z++) {
      const J = Jt(u);
      if (!J) {
        c(M.INVALID_UNICODE_ESCAPE_SEQUENCE, l(), 0, `\\${d}${w}${u.currentChar()}`);
        break;
      }
      w += J;
    }
    return `\\${d}${w}`;
  }
  function en(u) {
    return u !== "{" && u !== "}" && u !== Je && u !== Ee;
  }
  function tn(u) {
    T(u);
    let d = "", S = "";
    for (; d = pe(u, en); )
      S += d;
    return S;
  }
  function nn(u) {
    let d = "", S = "";
    for (; d = Bt(u); )
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
  function sn(u, d) {
    let S = null;
    switch (u.currentChar()) {
      case "{":
        return d.braceNest >= 1 && c(M.NOT_ALLOW_NEST_PLACEHOLDER, l(), 0), u.next(), S = _(
          d,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(u), d.braceNest++, S;
      case "}":
        return d.braceNest > 0 && d.currentType === 2 && c(M.EMPTY_PLACEHOLDER, l(), 0), u.next(), S = _(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), d.braceNest--, d.braceNest > 0 && T(u), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), S;
      case "@":
        return d.braceNest > 0 && c(M.UNTERMINATED_CLOSING_BRACE, l(), 0), S = dt(u, d) || g(d), d.braceNest = 0, S;
      default: {
        let z = !0, J = !0, j = !0;
        if (q(u))
          return d.braceNest > 0 && c(M.UNTERMINATED_CLOSING_BRACE, l(), 0), S = _(d, 1, H(u)), d.braceNest = 0, d.inLinked = !1, S;
        if (d.braceNest > 0 && (d.currentType === 5 || d.currentType === 6 || d.currentType === 7))
          return c(M.UNTERMINATED_CLOSING_BRACE, l(), 0), d.braceNest = 0, rn(u, d);
        if (z = h(u, d))
          return S = _(d, 5, qt(u)), T(u), S;
        if (J = b(u, d))
          return S = _(d, 6, Qt(u)), T(u), S;
        if (j = N(u, d))
          return S = _(d, 7, In(u)), T(u), S;
        if (!z && !J && !j)
          return S = _(d, 13, tn(u)), c(M.INVALID_TOKEN_IN_PLACEHOLDER, l(), 0, S.value), T(u), S;
        break;
      }
    }
    return S;
  }
  function dt(u, d) {
    const { currentType: S } = d;
    let w = null;
    const z = u.currentChar();
    switch ((S === 8 || S === 9 || S === 12 || S === 10) && (z === Ee || z === Je) && c(M.INVALID_LINKED_FORMAT, l(), 0), z) {
      case "@":
        return u.next(), w = _(
          d,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), d.inLinked = !0, w;
      case ".":
        return T(u), u.next(), _(
          d,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return T(u), u.next(), _(
          d,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return q(u) ? (w = _(d, 1, H(u)), d.braceNest = 0, d.inLinked = !1, w) : O(u, d) || R(u, d) ? (T(u), dt(u, d)) : L(u, d) ? (T(u), _(d, 12, nn(u))) : D(u, d) ? (T(u), z === "{" ? sn(u, d) || w : _(d, 11, P(u))) : (S === 8 && c(M.INVALID_LINKED_FORMAT, l(), 0), d.braceNest = 0, d.inLinked = !1, rn(u, d));
    }
  }
  function rn(u, d) {
    let S = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (d.braceNest > 0)
      return sn(u, d) || g(d);
    if (d.inLinked)
      return dt(u, d) || g(d);
    switch (u.currentChar()) {
      case "{":
        return sn(u, d) || g(d);
      case "}":
        return c(M.UNBALANCED_CLOSING_BRACE, l(), 0), u.next(), _(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return dt(u, d) || g(d);
      default: {
        if (q(u))
          return S = _(d, 1, H(u)), d.braceNest = 0, d.inLinked = !1, S;
        const { isModulo: z, hasSpace: J } = ye(u);
        if (z)
          return J ? _(d, 0, It(u)) : _(d, 4, Lt(u));
        if (U(u))
          return _(d, 0, It(u));
        break;
      }
    }
    return S;
  }
  function ls() {
    const { currentType: u, offset: d, startLoc: S, endLoc: w } = i;
    return i.lastType = u, i.lastOffset = d, i.lastStartLoc = S, i.lastEndLoc = w, i.offset = r(), i.startLoc = l(), s.currentChar() === nt ? _(
      i,
      14
      /* TokenTypes.EOF */
    ) : rn(s, i);
  }
  return {
    nextToken: ls,
    currentOffset: r,
    currentPosition: l,
    context: f
  };
}
const ff = "parser", df = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function _f(e, t, n) {
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
function pf(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: s } = e;
  function r(h, b, N, O, ...L) {
    const R = h.currentPosition();
    if (R.offset += O, R.column += O, n) {
      const D = t ? Kn(N, R) : null, q = Ht(b, D, {
        domain: ff,
        args: L
      });
      n(q);
    }
  }
  function l(h, b, N, O, ...L) {
    const R = h.currentPosition();
    if (R.offset += O, R.column += O, s) {
      const D = t ? Kn(N, R) : null;
      s(Zu(b, D, L));
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
  function f(h, b) {
    const N = h.context(), { lastOffset: O, lastStartLoc: L } = N, R = o(5, O, L);
    return R.index = parseInt(b, 10), h.nextToken(), a(R, h.currentOffset(), h.currentPosition()), R;
  }
  function p(h, b, N) {
    const O = h.context(), { lastOffset: L, lastStartLoc: R } = O, D = o(4, L, R);
    return D.key = b, N === !0 && (D.modulo = !0), h.nextToken(), a(D, h.currentOffset(), h.currentPosition()), D;
  }
  function c(h, b) {
    const N = h.context(), { lastOffset: O, lastStartLoc: L } = N, R = o(9, O, L);
    return R.value = b.replace(df, _f), h.nextToken(), a(R, h.currentOffset(), h.currentPosition()), R;
  }
  function _(h) {
    const b = h.nextToken(), N = h.context(), { lastOffset: O, lastStartLoc: L } = N, R = o(8, O, L);
    return b.type !== 12 ? (r(h, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), R.value = "", a(R, O, L), {
      nextConsumeToken: b,
      node: R
    }) : (b.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, Me(b)), R.value = b.value || "", a(R, h.currentOffset(), h.currentPosition()), {
      node: R
    });
  }
  function g(h, b) {
    const N = h.context(), O = o(7, N.offset, N.startLoc);
    return O.value = b, a(O, h.currentOffset(), h.currentPosition()), O;
  }
  function m(h) {
    const b = h.context(), N = o(6, b.offset, b.startLoc);
    let O = h.nextToken();
    if (O.type === 9) {
      const L = _(h);
      N.modifier = L.node, O = L.nextConsumeToken || h.nextToken();
    }
    switch (O.type !== 10 && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), O = h.nextToken(), O.type === 2 && (O = h.nextToken()), O.type) {
      case 11:
        O.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = g(h, O.value || "");
        break;
      case 5:
        O.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = p(h, O.value || "");
        break;
      case 6:
        O.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = f(h, O.value || "");
        break;
      case 7:
        O.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(O)), N.key = c(h, O.value || "");
        break;
      default: {
        r(h, M.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
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
  function E(h) {
    const b = h.context(), N = b.currentType === 1 ? h.currentOffset() : b.offset, O = b.currentType === 1 ? b.endLoc : b.startLoc, L = o(2, N, O);
    L.items = [];
    let R = null, D = null;
    do {
      const U = R || h.nextToken();
      switch (R = null, U.type) {
        case 0:
          U.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(i(h, U.value || ""));
          break;
        case 6:
          U.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(f(h, U.value || ""));
          break;
        case 4:
          D = !0;
          break;
        case 5:
          U.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(p(h, U.value || "", !!D)), D && (l(h, ts.USE_MODULO_SYNTAX, b.lastStartLoc, 0, Me(U)), D = null);
          break;
        case 7:
          U.value == null && r(h, M.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Me(U)), L.items.push(c(h, U.value || ""));
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
      const q = E(h);
      R || (R = q.items.length === 0), D.cases.push(q);
    } while (L.currentType !== 14);
    return R && r(h, M.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), a(D, h.currentOffset(), h.currentPosition()), D;
  }
  function y(h) {
    const b = h.context(), { offset: N, startLoc: O } = b, L = E(h);
    return b.currentType === 14 ? L : T(h, N, O, L);
  }
  function A(h) {
    const b = uf(h, So({}, e)), N = b.context(), O = o(0, N.offset, N.startLoc);
    return t && O.loc && (O.loc.source = h), O.body = y(b), e.onCacheKey && (O.cacheKey = e.onCacheKey(h)), N.currentType !== 14 && r(b, M.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, h[N.offset] || ""), a(O, b.currentOffset(), b.currentPosition()), O;
  }
  return { parse: A };
}
function Me(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function mf(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (l) => (n.helpers.add(l), l) };
}
function Vr(e, t) {
  for (let n = 0; n < e.length; n++)
    or(e[n], t);
}
function or(e, t) {
  switch (e.type) {
    case 1:
      Vr(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Vr(e.items, t);
      break;
    case 6: {
      or(e.key, t), t.helper(
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
function hf(e, t = {}) {
  const n = mf(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && or(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function gf(e) {
  const t = e.body;
  return t.type === 2 ? $r(t) : t.cases.forEach((n) => $r(n)), e;
}
function $r(e) {
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
      e.static = Lo(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const Ef = "minifier";
function Mt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Mt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        Mt(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        Mt(n[s]);
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
      Mt(t.key), t.k = t.key, delete t.key, t.modifier && (Mt(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw Ht(M.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Ef,
        args: [e.type]
      });
  }
  delete e.type;
}
const vf = "parser";
function Nf(e, t) {
  const { sourceMap: n, filename: s, breakLineCode: r, needIndent: l } = t, o = t.location !== !1, a = {
    filename: s,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: l,
    indentLevel: 0
  };
  o && e.loc && (a.source = e.loc.source);
  const i = () => a;
  function f(T, y) {
    a.code += T;
  }
  function p(T, y = !0) {
    const A = y ? r : "";
    f(l ? A + "  ".repeat(T) : A);
  }
  function c(T = !0) {
    const y = ++a.indentLevel;
    T && p(y);
  }
  function _(T = !0) {
    const y = --a.indentLevel;
    T && p(y);
  }
  function g() {
    p(a.indentLevel);
  }
  return {
    context: i,
    push: f,
    indent: c,
    deindent: _,
    newline: g,
    helper: (T) => `_${T}`,
    needIndent: () => a.needIndent
  };
}
function bf(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), xt(e, t.key), t.modifier ? (e.push(", "), xt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Of(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const r = t.items.length;
  for (let l = 0; l < r && (xt(e, t.items[l]), l !== r - 1); l++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function Tf(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const r = t.cases.length;
    for (let l = 0; l < r && (xt(e, t.cases[l]), l !== r - 1); l++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function Sf(e, t) {
  t.body ? xt(e, t.body) : e.push("null");
}
function xt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Sf(e, t);
      break;
    case 1:
      Tf(e, t);
      break;
    case 2:
      Of(e, t);
      break;
    case 6:
      bf(e, t);
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
      throw Ht(M.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: vf,
        args: [t.type]
      });
  }
}
const Lf = (e, t = {}) => {
  const n = kr(t.mode) ? t.mode : "normal", s = kr(t.filename) ? t.filename : "message.intl", r = !!t.sourceMap, l = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], i = Nf(e, {
    mode: n,
    filename: s,
    sourceMap: r,
    breakLineCode: l,
    needIndent: o
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(o), a.length > 0 && (i.push(`const { ${Lo(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), i.newline()), i.push("return "), xt(i, e), i.deindent(o), i.push("}"), delete e.helpers;
  const { code: f, map: p } = i.context();
  return {
    ast: e,
    code: f,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function If(e, t = {}) {
  const n = So({}, t), s = !!n.jit, r = !!n.minify, l = n.optimize == null ? !0 : n.optimize, a = pf(n).parse(e);
  return s ? (l && gf(a), r && Mt(a), { ast: a, code: "" }) : (hf(a, n), Lf(a, n));
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function yf() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ze().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ze().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ze().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const ft = [];
ft[
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
ft[
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
ft[
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
ft[
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
ft[
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
ft[
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
ft[
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
const Af = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Df(e) {
  return Af.test(e);
}
function Pf(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Rf(e) {
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
function Cf(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Df(t) ? Pf(t) : "*" + t;
}
function wf(e) {
  const t = [];
  let n = -1, s = 0, r = 0, l, o, a, i, f, p, c;
  const _ = [];
  _[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = a : o += a;
  }, _[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, _[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    _[
      0
      /* Actions.APPEND */
    ](), r++;
  }, _[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, s = 4, _[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, o === void 0 || (o = Cf(o), o === !1))
        return !1;
      _[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function g() {
    const m = e[n + 1];
    if (s === 5 && m === "'" || s === 6 && m === '"')
      return n++, a = "\\" + m, _[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, l = e[n], !(l === "\\" && g())) {
      if (i = Rf(l), c = ft[s], f = c[i] || c.l || 8, f === 8 || (s = f[0], f[1] !== void 0 && (p = _[f[1]], p && (a = l, p() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const Ur = /* @__PURE__ */ new Map();
function Mf(e, t) {
  return $(e) ? e[t] : null;
}
function kf(e, t) {
  if (!$(e))
    return null;
  let n = Ur.get(t);
  if (n || (n = wf(t), n && Ur.set(t, n)), !n)
    return null;
  const s = n.length;
  let r = e, l = 0;
  for (; l < s; ) {
    const o = r[n[l]];
    if (o === void 0 || K(r))
      return null;
    r = o, l++;
  }
  return r;
}
const Ff = (e) => e, Vf = (e) => "", $f = "text", Uf = (e) => e.length === 0 ? "" : Yu(e), xf = ju;
function xr(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Wf(e) {
  const t = re(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (re(e.named.count) || re(e.named.n)) ? re(e.named.count) ? e.named.count : re(e.named.n) ? e.named.n : t : t;
}
function Hf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Gf(e = {}) {
  const t = e.locale, n = Wf(e), s = $(e.pluralRules) && C(t) && K(e.pluralRules[t]) ? e.pluralRules[t] : xr, r = $(e.pluralRules) && C(t) && K(e.pluralRules[t]) ? xr : void 0, l = (y) => y[s(n, y.length, r)], o = e.list || [], a = (y) => o[y], i = e.named || {};
  re(e.pluralIndex) && Hf(n, i);
  const f = (y) => i[y];
  function p(y) {
    const A = K(e.messages) ? e.messages(y) : $(e.messages) ? e.messages[y] : !1;
    return A || (e.parent ? e.parent.message(y) : Vf);
  }
  const c = (y) => e.modifiers ? e.modifiers[y] : Ff, _ = k(e.processor) && K(e.processor.normalize) ? e.processor.normalize : Uf, g = k(e.processor) && K(e.processor.interpolate) ? e.processor.interpolate : xf, m = k(e.processor) && C(e.processor.type) ? e.processor.type : $f, T = {
    list: a,
    named: f,
    plural: l,
    linked: (y, ...A) => {
      const [h, b] = A;
      let N = "text", O = "";
      A.length === 1 ? $(h) ? (O = h.modifier || O, N = h.type || N) : C(h) && (O = h || O) : A.length === 2 && (C(h) && (O = h || O), C(b) && (N = b || N));
      const L = p(y)(T), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        N === "vnode" && Z(L) && O ? L[0] : L
      );
      return O ? c(O)(R, N) : R;
    },
    message: p,
    type: m,
    interpolate: g,
    normalize: _,
    values: _e({}, o, i)
  };
  return T;
}
let Nn = null;
function Bf(e) {
  Nn = e;
}
function jf(e, t, n) {
  Nn && Nn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Yf = /* @__PURE__ */ Kf(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Kf(e) {
  return (t) => Nn && Nn.emit(e, t);
}
const Io = ts.__EXTEND_POINT__, pt = es(Io), Ne = {
  NOT_FOUND_KEY: Io,
  // 2
  FALLBACK_TO_TRANSLATE: pt(),
  // 3
  CANNOT_FORMAT_NUMBER: pt(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: pt(),
  // 5
  CANNOT_FORMAT_DATE: pt(),
  // 6
  FALLBACK_TO_DATE_FORMAT: pt(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: pt(),
  // 8
  __EXTEND_POINT__: pt()
  // 9
}, Xf = {
  [Ne.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ne.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ne.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ne.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ne.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ne.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ne.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Ot(e, ...t) {
  return rr(Xf[e], ...t);
}
const yo = M.__EXTEND_POINT__, mt = es(yo), ie = {
  INVALID_ARGUMENT: yo,
  // 17
  INVALID_DATE_ARGUMENT: mt(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: mt(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: mt(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: mt(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: mt(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: mt(),
  // 23
  __EXTEND_POINT__: mt()
  // 24
};
function je(e) {
  return Ht(e, null, process.env.NODE_ENV !== "production" ? { messages: Jf } : void 0);
}
const Jf = {
  [ie.INVALID_ARGUMENT]: "Invalid arguments",
  [ie.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ie.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ie.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ie.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function ar(e, t) {
  return t.locale != null ? Wr(t.locale) : Wr(e.locale);
}
let ms;
function Wr(e) {
  if (C(e))
    return e;
  if (K(e)) {
    if (e.resolvedOnce && ms != null)
      return ms;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Bu(t))
        throw je(ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ms = t;
    } else
      throw je(ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw je(ie.NOT_SUPPORT_LOCALE_TYPE);
}
function qf(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Z(t) ? t : $(t) ? Object.keys(t) : C(t) ? [t] : [n]
  ])];
}
function Ao(e, t, n) {
  const s = C(n) ? n : Wt, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let l = r.__localeChainCache.get(s);
  if (!l) {
    l = [];
    let o = [n];
    for (; Z(o); )
      o = Hr(l, o, t);
    const a = Z(t) || !k(t) ? t : t.default ? t.default : null;
    o = C(a) ? [a] : a, Z(o) && Hr(l, o, !1), r.__localeChainCache.set(s, l);
  }
  return l;
}
function Hr(e, t, n) {
  let s = !0;
  for (let r = 0; r < t.length && F(s); r++) {
    const l = t[r];
    C(l) && (s = Qf(e, t[r], n));
  }
  return s;
}
function Qf(e, t, n) {
  let s;
  const r = t.split("-");
  do {
    const l = r.join("-");
    s = Zf(e, l, n), r.splice(-1, 1);
  } while (r.length && s === !0);
  return s;
}
function Zf(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (Z(n) || k(n)) && n[r] && (s = n[r]);
  }
  return s;
}
const zf = "9.14.1", ns = -1, Wt = "en-US", Xn = "", Gr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function ed() {
  return {
    upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && $(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && $(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && C(e) ? Gr(e) : t === "vnode" && $(e) && "__v_isVNode" in e ? Gr(e.children) : e
  };
}
let Do;
function Br(e) {
  Do = e;
}
let Po;
function td(e) {
  Po = e;
}
let Ro;
function nd(e) {
  Ro = e;
}
let Co = null;
const sd = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Co = e;
}, rd = /* @__NO_SIDE_EFFECTS__ */ () => Co;
let wo = null;
const jr = (e) => {
  wo = e;
}, ld = () => wo;
let Yr = 0;
function od(e = {}) {
  const t = K(e.onWarn) ? e.onWarn : le, n = C(e.version) ? e.version : zf, s = C(e.locale) || K(e.locale) ? e.locale : Wt, r = K(s) ? Wt : s, l = Z(e.fallbackLocale) || k(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, o = k(e.messages) ? e.messages : { [r]: {} }, a = k(e.datetimeFormats) ? e.datetimeFormats : { [r]: {} }, i = k(e.numberFormats) ? e.numberFormats : { [r]: {} }, f = _e({}, e.modifiers || {}, ed()), p = e.pluralRules || {}, c = K(e.missing) ? e.missing : null, _ = F(e.missingWarn) || it(e.missingWarn) ? e.missingWarn : !0, g = F(e.fallbackWarn) || it(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, E = !!e.unresolving, T = K(e.postTranslation) ? e.postTranslation : null, y = k(e.processor) ? e.processor : null, A = F(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, h = !!e.escapeParameter, b = K(e.messageCompiler) ? e.messageCompiler : Do;
  process.env.NODE_ENV !== "production" && K(e.messageCompiler) && Oo(Ot(Ne.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const N = K(e.messageResolver) ? e.messageResolver : Po || Mf, O = K(e.localeFallbacker) ? e.localeFallbacker : Ro || qf, L = $(e.fallbackContext) ? e.fallbackContext : void 0, R = e, D = $(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), q = $(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), ye = $(R.__meta) ? R.__meta : {};
  Yr++;
  const U = {
    version: n,
    cid: Yr,
    locale: s,
    fallbackLocale: l,
    messages: o,
    modifiers: f,
    pluralRules: p,
    missing: c,
    missingWarn: _,
    fallbackWarn: g,
    fallbackFormat: m,
    unresolving: E,
    postTranslation: T,
    processor: y,
    warnHtmlMessage: A,
    escapeParameter: h,
    messageCompiler: b,
    messageResolver: N,
    localeFallbacker: O,
    fallbackContext: L,
    onWarn: t,
    __meta: ye
  };
  return U.datetimeFormats = a, U.numberFormats = i, U.__datetimeFormatters = D, U.__numberFormatters = q, process.env.NODE_ENV !== "production" && (U.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && jf(U, n, ye), U;
}
function ss(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Mo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ir(e, t, n, s, r) {
  const { missing: l, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = e.__v_emitter;
    a && a.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (l !== null) {
    const a = l(e, n, t, r);
    return C(a) ? a : t;
  } else
    return process.env.NODE_ENV !== "production" && Mo(s, t) && o(Ot(Ne.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function cn(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ko(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ad(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (ko(e, t[s]))
      return !0;
  return !1;
}
function hs(e) {
  return (n) => id(n, e);
}
function id(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const s = n, r = s.c || s.cases;
    return e.plural(r.reduce((l, o) => [
      ...l,
      Kr(e, o)
    ], []));
  } else
    return Kr(e, n);
}
function Kr(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = (t.i || t.items).reduce((r, l) => [...r, Ps(e, l)], []);
    return e.normalize(s);
  }
}
function Ps(e, t) {
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
      const s = t, r = s.m || s.modifier;
      return e.linked(Ps(e, s.k || s.key), r ? Ps(e, r) : void 0, e.type);
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
const cd = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Fo(e, t) {
  t && nf(e) && le(rr(cd, { source: e }));
}
const Vo = (e) => e;
let kt = /* @__PURE__ */ Object.create(null);
function $o(e) {
  e.code === ts.USE_MODULO_SYNTAX && le(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
const ct = (e) => $(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Uo(e, t = {}) {
  let n = !1;
  const s = t.onError || ef;
  return t.onError = (r) => {
    n = !0, s(r);
  }, { ...If(e, t), detectError: n };
}
const ud = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!C(e))
    throw je(ie.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = $o);
  {
    const n = F(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Fo(e, n);
    const r = (t.onCacheKey || Vo)(e), l = kt[r];
    if (l)
      return l;
    const { code: o, detectError: a } = Uo(e, t), i = new Function(`return ${o}`)();
    return a ? i : kt[r] = i;
  }
};
function fd(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = $o), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
    const n = F(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Fo(e, n);
    const r = (t.onCacheKey || Vo)(e), l = kt[r];
    if (l)
      return l;
    const { ast: o, detectError: a } = Uo(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), i = hs(o);
    return a ? i : kt[r] = i;
  } else {
    if (process.env.NODE_ENV !== "production" && !ct(e))
      return le(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = kt[n];
      return s || (kt[n] = hs(e));
    } else
      return hs(e);
  }
}
const Xr = () => "", we = (e) => K(e);
function Jr(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: r, messageCompiler: l, fallbackLocale: o, messages: a } = e, [i, f] = Rs(...t), p = F(f.missingWarn) ? f.missingWarn : e.missingWarn, c = F(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, _ = F(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, g = !!f.resolvedMessage, m = C(f.default) || F(f.default) ? F(f.default) ? l ? i : () => i : f.default : n ? l ? i : () => i : "", E = n || m !== "", T = ar(e, f);
  _ && dd(f);
  let [y, A, h] = g ? [
    i,
    T,
    a[T] || {}
  ] : xo(e, i, T, o, c, p), b = y, N = i;
  if (!g && !(C(b) || ct(b) || we(b)) && E && (b = m, N = b), !g && (!(C(b) || ct(b) || we(b)) || !C(A)))
    return r ? ns : i;
  if (process.env.NODE_ENV !== "production" && C(b) && e.messageCompiler == null)
    return le(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let O = !1;
  const L = () => {
    O = !0;
  }, R = we(b) ? b : Wo(e, i, A, b, N, L);
  if (O)
    return b;
  const D = hd(e, A, h, f), q = Gf(D), ye = _d(e, R, q), U = s ? s(ye, i) : ye;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const pe = {
      timestamp: Date.now(),
      key: C(i) ? i : we(b) ? b.key : "",
      locale: A || (we(b) ? b.locale : ""),
      format: C(b) ? b : we(b) ? b.source : "",
      message: U
    };
    pe.meta = _e({}, e.__meta, /* @__PURE__ */ rd() || {}), Yf(pe);
  }
  return U;
}
function dd(e) {
  Z(e.list) ? e.list = e.list.map((t) => C(t) ? Cr(t) : t) : $(e.named) && Object.keys(e.named).forEach((t) => {
    C(e.named[t]) && (e.named[t] = Cr(e.named[t]));
  });
}
function xo(e, t, n, s, r, l) {
  const { messages: o, onWarn: a, messageResolver: i, localeFallbacker: f } = e, p = f(e, s, n);
  let c = {}, _, g = null, m = n, E = null;
  const T = "translate";
  for (let y = 0; y < p.length; y++) {
    if (_ = E = p[y], process.env.NODE_ENV !== "production" && n !== _ && !ko(n, _) && ss(r, t) && a(Ot(Ne.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: _
    })), process.env.NODE_ENV !== "production" && n !== _) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: T,
        key: t,
        from: m,
        to: E,
        groupId: `${T}:${t}`
      });
    }
    c = o[_] || {};
    let A = null, h, b;
    if (process.env.NODE_ENV !== "production" && Ve && (A = window.performance.now(), h = "intlify-message-resolve-start", b = "intlify-message-resolve-end", De && De(h)), (g = i(c, t)) === null && (g = c[t]), process.env.NODE_ENV !== "production" && Ve) {
      const N = window.performance.now(), O = e.__v_emitter;
      O && A && g && O.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: g,
        time: N - A,
        groupId: `${T}:${t}`
      }), h && b && De && bt && (De(b), bt("intlify message resolve", h, b));
    }
    if (C(g) || ct(g) || we(g))
      break;
    if (!ad(_, p)) {
      const N = ir(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        _,
        l,
        T
      );
      N !== t && (g = N);
    }
    m = E;
  }
  return [g, _, c];
}
function Wo(e, t, n, s, r, l) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (we(s)) {
    const _ = s;
    return _.locale = _.locale || n, _.key = _.key || t, _;
  }
  if (o == null) {
    const _ = () => s;
    return _.locale = n, _.key = t, _;
  }
  let i = null, f, p;
  process.env.NODE_ENV !== "production" && Ve && (i = window.performance.now(), f = "intlify-message-compilation-start", p = "intlify-message-compilation-end", De && De(f));
  const c = o(s, pd(e, n, r, s, a, l));
  if (process.env.NODE_ENV !== "production" && Ve) {
    const _ = window.performance.now(), g = e.__v_emitter;
    g && i && g.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: _ - i,
      groupId: `translate:${t}`
    }), f && p && De && bt && (De(p), bt("intlify message compilation", f, p));
  }
  return c.locale = n, c.key = t, c.source = s, c;
}
function _d(e, t, n) {
  let s = null, r, l;
  process.env.NODE_ENV !== "production" && Ve && (s = window.performance.now(), r = "intlify-message-evaluation-start", l = "intlify-message-evaluation-end", De && De(r));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && Ve) {
    const a = window.performance.now(), i = e.__v_emitter;
    i && s && i.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: a - s,
      groupId: `translate:${t.key}`
    }), r && l && De && bt && (De(l), bt("intlify message evaluation", r, l));
  }
  return o;
}
function Rs(...e) {
  const [t, n, s] = e, r = {};
  if (!C(t) && !re(t) && !we(t) && !ct(t))
    throw je(ie.INVALID_ARGUMENT);
  const l = re(t) ? String(t) : (we(t), t);
  return re(n) ? r.plural = n : C(n) ? r.default = n : k(n) && !zn(n) ? r.named = n : Z(n) && (r.list = n), re(s) ? r.plural = s : C(s) ? r.default = s : k(s) && _e(r, s), [l, r];
}
function pd(e, t, n, s, r, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      if (l && l(o), process.env.NODE_ENV !== "production") {
        const a = md(s), i = `Message compilation error: ${o.message}`, f = o.location && a && Ku(a, o.location.start.offset, o.location.end.offset), p = e.__v_emitter;
        p && a && p.emit("compile-error", {
          message: a,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(f ? `${i}
${f}` : i);
      } else
        throw o;
    },
    onCacheKey: (o) => xu(t, n, o)
  };
}
function md(e) {
  if (C(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function hd(e, t, n, s) {
  const { modifiers: r, pluralRules: l, messageResolver: o, fallbackLocale: a, fallbackWarn: i, missingWarn: f, fallbackContext: p } = e, _ = {
    locale: t,
    modifiers: r,
    pluralRules: l,
    messages: (g) => {
      let m = o(n, g);
      if (m == null && p) {
        const [, , E] = xo(p, g, t, a, i, f);
        m = o(E, g);
      }
      if (C(m) || ct(m)) {
        let E = !1;
        const y = Wo(e, g, t, m, g, () => {
          E = !0;
        });
        return E ? Xr : y;
      } else return we(m) ? m : Xr;
    }
  };
  return e.processor && (_.processor = e.processor), s.list && (_.list = s.list), s.named && (_.named = s.named), re(s.plural) && (_.pluralIndex = s.plural), _;
}
const qr = typeof Intl < "u", Ho = {
  dateTimeFormat: qr && typeof Intl.DateTimeFormat < "u",
  numberFormat: qr && typeof Intl.NumberFormat < "u"
};
function Qr(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: r, onWarn: l, localeFallbacker: o } = e, { __datetimeFormatters: a } = e;
  if (process.env.NODE_ENV !== "production" && !Ho.dateTimeFormat)
    return l(Ot(Ne.CANNOT_FORMAT_DATE)), Xn;
  const [i, f, p, c] = Cs(...t), _ = F(p.missingWarn) ? p.missingWarn : e.missingWarn, g = F(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, m = !!p.part, E = ar(e, p), T = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    E
  );
  if (!C(i) || i === "")
    return new Intl.DateTimeFormat(E, c).format(f);
  let y = {}, A, h = null, b = E, N = null;
  const O = "datetime format";
  for (let D = 0; D < T.length; D++) {
    if (A = N = T[D], process.env.NODE_ENV !== "production" && E !== A && ss(g, i) && l(Ot(Ne.FALLBACK_TO_DATE_FORMAT, {
      key: i,
      target: A
    })), process.env.NODE_ENV !== "production" && E !== A) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: O,
        key: i,
        from: b,
        to: N,
        groupId: `${O}:${i}`
      });
    }
    if (y = n[A] || {}, h = y[i], k(h))
      break;
    ir(e, i, A, _, O), b = N;
  }
  if (!k(h) || !C(A))
    return s ? ns : i;
  let L = `${A}__${i}`;
  zn(c) || (L = `${L}__${JSON.stringify(c)}`);
  let R = a.get(L);
  return R || (R = new Intl.DateTimeFormat(A, _e({}, h, c)), a.set(L, R)), m ? R.formatToParts(f) : R.format(f);
}
const Go = [
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
function Cs(...e) {
  const [t, n, s, r] = e, l = {};
  let o = {}, a;
  if (C(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw je(ie.INVALID_ISO_DATE_ARGUMENT);
    const f = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    a = new Date(f);
    try {
      a.toISOString();
    } catch {
      throw je(ie.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Hu(t)) {
    if (isNaN(t.getTime()))
      throw je(ie.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (re(t))
    a = t;
  else
    throw je(ie.INVALID_ARGUMENT);
  return C(n) ? l.key = n : k(n) && Object.keys(n).forEach((i) => {
    Go.includes(i) ? o[i] = n[i] : l[i] = n[i];
  }), C(s) ? l.locale = s : k(s) && (o = s), k(r) && (o = r), [l.key || "", a, l, o];
}
function Zr(e, t, n) {
  const s = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    s.__datetimeFormatters.has(l) && s.__datetimeFormatters.delete(l);
  }
}
function zr(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: r, onWarn: l, localeFallbacker: o } = e, { __numberFormatters: a } = e;
  if (process.env.NODE_ENV !== "production" && !Ho.numberFormat)
    return l(Ot(Ne.CANNOT_FORMAT_NUMBER)), Xn;
  const [i, f, p, c] = ws(...t), _ = F(p.missingWarn) ? p.missingWarn : e.missingWarn, g = F(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, m = !!p.part, E = ar(e, p), T = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    E
  );
  if (!C(i) || i === "")
    return new Intl.NumberFormat(E, c).format(f);
  let y = {}, A, h = null, b = E, N = null;
  const O = "number format";
  for (let D = 0; D < T.length; D++) {
    if (A = N = T[D], process.env.NODE_ENV !== "production" && E !== A && ss(g, i) && l(Ot(Ne.FALLBACK_TO_NUMBER_FORMAT, {
      key: i,
      target: A
    })), process.env.NODE_ENV !== "production" && E !== A) {
      const q = e.__v_emitter;
      q && q.emit("fallback", {
        type: O,
        key: i,
        from: b,
        to: N,
        groupId: `${O}:${i}`
      });
    }
    if (y = n[A] || {}, h = y[i], k(h))
      break;
    ir(e, i, A, _, O), b = N;
  }
  if (!k(h) || !C(A))
    return s ? ns : i;
  let L = `${A}__${i}`;
  zn(c) || (L = `${L}__${JSON.stringify(c)}`);
  let R = a.get(L);
  return R || (R = new Intl.NumberFormat(A, _e({}, h, c)), a.set(L, R)), m ? R.formatToParts(f) : R.format(f);
}
const Bo = [
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
function ws(...e) {
  const [t, n, s, r] = e, l = {};
  let o = {};
  if (!re(t))
    throw je(ie.INVALID_ARGUMENT);
  const a = t;
  return C(n) ? l.key = n : k(n) && Object.keys(n).forEach((i) => {
    Bo.includes(i) ? o[i] = n[i] : l[i] = n[i];
  }), C(s) ? l.locale = s : k(s) && (o = s), k(r) && (o = r), [l.key || "", a, l, o];
}
function el(e, t, n) {
  const s = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    s.__numberFormatters.has(l) && s.__numberFormatters.delete(l);
  }
}
yf();
function gd() {
  return jo().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function jo() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Ed = typeof Proxy == "function", vd = "devtools-plugin:setup", Nd = "plugin:settings:set";
let Pt, Ms;
function bd() {
  var e;
  return Pt !== void 0 || (typeof window < "u" && window.performance ? (Pt = !0, Ms = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Pt = !0, Ms = globalThis.perf_hooks.performance) : Pt = !1), Pt;
}
function Od() {
  return bd() ? Ms.now() : Date.now();
}
class Td {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const o in t.settings) {
        const a = t.settings[o];
        s[o] = a.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let l = Object.assign({}, s);
    try {
      const o = localStorage.getItem(r), a = JSON.parse(o);
      Object.assign(l, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return l;
      },
      setSettings(o) {
        try {
          localStorage.setItem(r, JSON.stringify(o));
        } catch {
        }
        l = o;
      },
      now() {
        return Od();
      }
    }, n && n.on(Nd, (o, a) => {
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
      }), this.fallbacks[a](...i)) : (...i) => new Promise((f) => {
        this.targetQueue.push({
          method: a,
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
function Sd(e, t) {
  const n = e, s = jo(), r = gd(), l = Ed && n.enableEarlyProxy;
  if (r && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !l))
    r.emit(vd, e, t);
  else {
    const o = l ? new Td(n, r) : null;
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
const Ld = "9.14.1";
function Id() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ze().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ze().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ze().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ze().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ze().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Yo = Ne.__EXTEND_POINT__, qe = es(Yo), ee = {
  FALLBACK_TO_ROOT: Yo,
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
}, yd = {
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
  return rr(yd[e], ...t);
}
const Ko = ie.__EXTEND_POINT__, Oe = es(Ko), x = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ko,
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
  return Ht(e, null, process.env.NODE_ENV !== "production" ? { messages: Ad, args: t } : void 0);
}
const Ad = {
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
}, ks = /* @__PURE__ */ Ke("__translateVNode"), Fs = /* @__PURE__ */ Ke("__datetimeParts"), Vs = /* @__PURE__ */ Ke("__numberParts"), Tt = /* @__PURE__ */ Ke("__enableEmitter"), bn = /* @__PURE__ */ Ke("__disableEmitter"), Xo = Ke("__setPluralRules"), Jo = /* @__PURE__ */ Ke("__injectWithOption"), $s = /* @__PURE__ */ Ke("__dispose");
function On(e) {
  if (!$(e))
    return e;
  for (const t in e)
    if (Yn(e, t))
      if (!t.includes("."))
        $(e[t]) && On(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let r = e, l = !1;
        for (let o = 0; o < s; o++) {
          if (n[o] in r || (r[n[o]] = {}), !$(r[n[o]])) {
            process.env.NODE_ENV !== "production" && le(Se(ee.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), l = !0;
            break;
          }
          r = r[n[o]];
        }
        l || (r[n[s]] = e[t], delete e[t]), $(r[n[s]]) && On(r[n[s]]);
      }
  return e;
}
function rs(e, t) {
  const { messages: n, __i18n: s, messageResolver: r, flatJson: l } = t, o = k(n) ? n : Z(s) ? {} : { [e]: {} };
  if (Z(s) && s.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: i, resource: f } = a;
      i ? (o[i] = o[i] || {}, Fn(f, o[i])) : Fn(f, o);
    } else
      C(a) && Fn(JSON.parse(a), o);
  }), r == null && l)
    for (const a in o)
      Yn(o, a) && On(o[a]);
  return o;
}
function qo(e) {
  return e.type;
}
function Qo(e, t, n) {
  let s = $(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (s = rs(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(s);
  r.length && r.forEach((l) => {
    e.mergeLocaleMessage(l, s[l]);
  });
  {
    if ($(t.datetimeFormats)) {
      const l = Object.keys(t.datetimeFormats);
      l.length && l.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if ($(t.numberFormats)) {
      const l = Object.keys(t.numberFormats);
      l.length && l.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function tl(e) {
  return de(eo, null, e, 0);
}
const nl = "__INTLIFY_META__", sl = () => [], Dd = () => !1;
let rl = 0;
function ll(e) {
  return (t, n, s, r) => e(n, s, Ut() || void 0, r);
}
const Pd = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Ut();
  let t = null;
  return e && (t = qo(e)[nl]) ? { [nl]: t } : null;
};
function cr(e = {}, t) {
  const { __root: n, __injectWithOption: s } = e, r = n === void 0, l = e.flatJson, o = Ve ? Rt : $l, a = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && a && Oo(Se(ee.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let i = F(e.inheritLocale) ? e.inheritLocale : !0;
  const f = o(
    // prettier-ignore
    n && i ? n.locale.value : C(e.locale) ? e.locale : Wt
  ), p = o(
    // prettier-ignore
    n && i ? n.fallbackLocale.value : C(e.fallbackLocale) || Z(e.fallbackLocale) || k(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value
  ), c = o(rs(f.value, e)), _ = o(k(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }), g = o(k(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
  let m = n ? n.missingWarn : F(e.missingWarn) || it(e.missingWarn) ? e.missingWarn : !0, E = n ? n.fallbackWarn : F(e.fallbackWarn) || it(e.fallbackWarn) ? e.fallbackWarn : !0, T = n ? n.fallbackRoot : F(e.fallbackRoot) ? e.fallbackRoot : !0, y = !!e.fallbackFormat, A = K(e.missing) ? e.missing : null, h = K(e.missing) ? ll(e.missing) : null, b = K(e.postTranslation) ? e.postTranslation : null, N = n ? n.warnHtmlMessage : F(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, O = !!e.escapeParameter;
  const L = n ? n.modifiers : k(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || n && n.pluralRules, D;
  D = (() => {
    r && jr(null);
    const v = {
      version: Ld,
      locale: f.value,
      fallbackLocale: p.value,
      messages: c.value,
      modifiers: L,
      pluralRules: R,
      missing: h === null ? void 0 : h,
      missingWarn: m,
      fallbackWarn: E,
      fallbackFormat: y,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: N,
      escapeParameter: O,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    v.datetimeFormats = _.value, v.numberFormats = g.value, v.__datetimeFormatters = k(D) ? D.__datetimeFormatters : void 0, v.__numberFormatters = k(D) ? D.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (v.__v_emitter = k(D) ? D.__v_emitter : void 0);
    const I = od(v);
    return r && jr(I), I;
  })(), cn(D, f.value, p.value);
  function ye() {
    return [
      f.value,
      p.value,
      c.value,
      _.value,
      g.value
    ];
  }
  const U = We({
    get: () => f.value,
    set: (v) => {
      f.value = v, D.locale = f.value;
    }
  }), pe = We({
    get: () => p.value,
    set: (v) => {
      p.value = v, D.fallbackLocale = p.value, cn(D, f.value, v);
    }
  }), Gt = We(() => c.value), Bt = /* @__PURE__ */ We(() => _.value), Ue = /* @__PURE__ */ We(() => g.value);
  function jt() {
    return K(b) ? b : null;
  }
  function Yt(v) {
    b = v, D.postTranslation = v;
  }
  function Kt() {
    return A;
  }
  function Xt(v) {
    v !== null && (h = ll(v)), A = v, D.missing = h;
  }
  function Jt(v, I) {
    return v !== "translate" || !I.resolvedMessage;
  }
  const Pe = (v, I, G, te, tt, yn) => {
    ye();
    let At;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (D.fallbackContext = n ? ld() : void 0), At = v(D);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (D.fallbackContext = void 0);
    }
    if (G !== "translate exists" && // for not `te` (e.g `t`)
    re(At) && At === ns || G === "translate exists" && !At) {
      const [_t, sa] = I();
      if (process.env.NODE_ENV !== "production" && n && C(_t) && Jt(G, sa) && (T && (ss(E, _t) || Mo(m, _t)) && le(Se(ee.FALLBACK_TO_ROOT, {
        key: _t,
        type: G
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: _r } = D;
        _r && T && _r.emit("fallback", {
          type: G,
          key: _t,
          to: "global",
          groupId: `${G}:${_t}`
        });
      }
      return n && T ? te(n) : tt(_t);
    } else {
      if (yn(At))
        return At;
      throw oe(x.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Lt(...v) {
    return Pe((I) => Reflect.apply(Jr, null, [I, ...v]), () => Rs(...v), "translate", (I) => Reflect.apply(I.t, I, [...v]), (I) => I, (I) => C(I));
  }
  function It(...v) {
    const [I, G, te] = v;
    if (te && !$(te))
      throw oe(x.INVALID_ARGUMENT);
    return Lt(I, G, _e({ resolvedMessage: !0 }, te || {}));
  }
  function qt(...v) {
    return Pe((I) => Reflect.apply(Qr, null, [I, ...v]), () => Cs(...v), "datetime format", (I) => Reflect.apply(I.d, I, [...v]), () => Xn, (I) => C(I));
  }
  function Qt(...v) {
    return Pe((I) => Reflect.apply(zr, null, [I, ...v]), () => ws(...v), "number format", (I) => Reflect.apply(I.n, I, [...v]), () => Xn, (I) => C(I));
  }
  function Zt(v) {
    return v.map((I) => C(I) || re(I) || F(I) ? tl(String(I)) : I);
  }
  const zt = {
    normalize: Zt,
    interpolate: (v) => v,
    type: "vnode"
  };
  function yt(...v) {
    return Pe(
      (I) => {
        let G;
        const te = I;
        try {
          te.processor = zt, G = Reflect.apply(Jr, null, [te, ...v]);
        } finally {
          te.processor = null;
        }
        return G;
      },
      () => Rs(...v),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (I) => I[ks](...v),
      (I) => [tl(I)],
      (I) => Z(I)
    );
  }
  function en(...v) {
    return Pe(
      (I) => Reflect.apply(zr, null, [I, ...v]),
      () => ws(...v),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (I) => I[Vs](...v),
      sl,
      (I) => C(I) || Z(I)
    );
  }
  function tn(...v) {
    return Pe(
      (I) => Reflect.apply(Qr, null, [I, ...v]),
      () => Cs(...v),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (I) => I[Fs](...v),
      sl,
      (I) => C(I) || Z(I)
    );
  }
  function nn(v) {
    R = v, D.pluralRules = R;
  }
  function P(v, I) {
    return Pe(() => {
      if (!v)
        return !1;
      const G = C(I) ? I : f.value, te = dt(G), tt = D.messageResolver(te, v);
      return a ? tt != null : ct(tt) || we(tt) || C(tt);
    }, () => [v], "translate exists", (G) => Reflect.apply(G.te, G, [v, I]), Dd, (G) => F(G));
  }
  function H(v) {
    let I = null;
    const G = Ao(D, p.value, f.value);
    for (let te = 0; te < G.length; te++) {
      const tt = c.value[G[te]] || {}, yn = D.messageResolver(tt, v);
      if (yn != null) {
        I = yn;
        break;
      }
    }
    return I;
  }
  function sn(v) {
    const I = H(v);
    return I ?? (n ? n.tm(v) || {} : {});
  }
  function dt(v) {
    return c.value[v] || {};
  }
  function rn(v, I) {
    if (l) {
      const G = { [v]: I };
      for (const te in G)
        Yn(G, te) && On(G[te]);
      I = G[v];
    }
    c.value[v] = I, D.messages = c.value;
  }
  function ls(v, I) {
    c.value[v] = c.value[v] || {};
    const G = { [v]: I };
    if (l)
      for (const te in G)
        Yn(G, te) && On(G[te]);
    I = G[v], Fn(I, c.value[v]), D.messages = c.value;
  }
  function u(v) {
    return _.value[v] || {};
  }
  function d(v, I) {
    _.value[v] = I, D.datetimeFormats = _.value, Zr(D, v, I);
  }
  function S(v, I) {
    _.value[v] = _e(_.value[v] || {}, I), D.datetimeFormats = _.value, Zr(D, v, I);
  }
  function w(v) {
    return g.value[v] || {};
  }
  function z(v, I) {
    g.value[v] = I, D.numberFormats = g.value, el(D, v, I);
  }
  function J(v, I) {
    g.value[v] = _e(g.value[v] || {}, I), D.numberFormats = g.value, el(D, v, I);
  }
  rl++, n && Ve && (Is(n.locale, (v) => {
    i && (f.value = v, D.locale = v, cn(D, f.value, p.value));
  }), Is(n.fallbackLocale, (v) => {
    i && (p.value = v, D.fallbackLocale = v, cn(D, f.value, p.value));
  }));
  const j = {
    id: rl,
    locale: U,
    fallbackLocale: pe,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(v) {
      i = v, v && n && (f.value = n.locale.value, p.value = n.fallbackLocale.value, cn(D, f.value, p.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Gt,
    get modifiers() {
      return L;
    },
    get pluralRules() {
      return R || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(v) {
      m = v, D.missingWarn = m;
    },
    get fallbackWarn() {
      return E;
    },
    set fallbackWarn(v) {
      E = v, D.fallbackWarn = E;
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(v) {
      T = v;
    },
    get fallbackFormat() {
      return y;
    },
    set fallbackFormat(v) {
      y = v, D.fallbackFormat = y;
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
    t: Lt,
    getLocaleMessage: dt,
    setLocaleMessage: rn,
    mergeLocaleMessage: ls,
    getPostTranslationHandler: jt,
    setPostTranslationHandler: Yt,
    getMissingHandler: Kt,
    setMissingHandler: Xt,
    [Xo]: nn
  };
  return j.datetimeFormats = Bt, j.numberFormats = Ue, j.rt = It, j.te = P, j.tm = sn, j.d = qt, j.n = Qt, j.getDateTimeFormat = u, j.setDateTimeFormat = d, j.mergeDateTimeFormat = S, j.getNumberFormat = w, j.setNumberFormat = z, j.mergeNumberFormat = J, j[Jo] = s, j[ks] = yt, j[Fs] = tn, j[Vs] = en, process.env.NODE_ENV !== "production" && (j[Tt] = (v) => {
    D.__v_emitter = v;
  }, j[bn] = () => {
    D.__v_emitter = void 0;
  }), j;
}
function Rd(e) {
  const t = C(e.locale) ? e.locale : Wt, n = C(e.fallbackLocale) || Z(e.fallbackLocale) || k(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, s = K(e.missing) ? e.missing : void 0, r = F(e.silentTranslationWarn) || it(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, l = F(e.silentFallbackWarn) || it(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = F(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, i = k(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, p = K(e.postTranslation) ? e.postTranslation : void 0, c = C(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, _ = !!e.escapeParameterHtml, g = F(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && le(Se(ee.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && le(Se(ee.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let m = e.messages;
  if (k(e.sharedMessages)) {
    const O = e.sharedMessages;
    m = Object.keys(O).reduce((R, D) => {
      const q = R[D] || (R[D] = {});
      return _e(q, O[D]), R;
    }, m || {});
  }
  const { __i18n: E, __root: T, __injectWithOption: y } = e, A = e.datetimeFormats, h = e.numberFormats, b = e.flatJson, N = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: m,
    flatJson: b,
    datetimeFormats: A,
    numberFormats: h,
    missing: s,
    missingWarn: r,
    fallbackWarn: l,
    fallbackRoot: o,
    fallbackFormat: a,
    modifiers: i,
    pluralRules: f,
    postTranslation: p,
    warnHtmlMessage: c,
    escapeParameter: _,
    messageResolver: e.messageResolver,
    inheritLocale: g,
    translateExistCompatible: N,
    __i18n: E,
    __root: T,
    __injectWithOption: y
  };
}
function Us(e = {}, t) {
  {
    const n = cr(Rd(e)), { __extender: s } = e, r = {
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
        return process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(l) {
        process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_FORMATTER));
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
        return F(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(l) {
        n.missingWarn = F(l) ? !l : l;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return F(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(l) {
        n.fallbackWarn = F(l) ? !l : l;
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
        return process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(l) {
        process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...l) {
        const [o, a, i] = l, f = {};
        let p = null, c = null;
        if (!C(o))
          throw oe(x.INVALID_ARGUMENT);
        const _ = o;
        return C(a) ? f.locale = a : Z(a) ? p = a : k(a) && (c = a), Z(i) ? p = i : k(i) && (c = i), Reflect.apply(n.t, n, [
          _,
          p || c || {},
          f
        ]);
      },
      rt(...l) {
        return Reflect.apply(n.rt, n, [...l]);
      },
      // tc
      tc(...l) {
        const [o, a, i] = l, f = { plural: 1 };
        let p = null, c = null;
        if (!C(o))
          throw oe(x.INVALID_ARGUMENT);
        const _ = o;
        return C(a) ? f.locale = a : re(a) ? f.plural = a : Z(a) ? p = a : k(a) && (c = a), C(i) ? f.locale = i : Z(i) ? p = i : k(i) && (c = i), Reflect.apply(n.t, n, [
          _,
          p || c || {},
          f
        ]);
      },
      // te
      te(l, o) {
        return n.te(l, o);
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
      setLocaleMessage(l, o) {
        n.setLocaleMessage(l, o);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(l, o) {
        n.mergeLocaleMessage(l, o);
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
      setDateTimeFormat(l, o) {
        n.setDateTimeFormat(l, o);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(l, o) {
        n.mergeDateTimeFormat(l, o);
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
      setNumberFormat(l, o) {
        n.setNumberFormat(l, o);
      },
      // mergeNumberFormat
      mergeNumberFormat(l, o) {
        n.mergeNumberFormat(l, o);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(l, o) {
        return process.env.NODE_ENV !== "production" && le(Se(ee.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return r.__extender = s, process.env.NODE_ENV !== "production" && (r.__enableEmitter = (l) => {
      const o = n;
      o[Tt] && o[Tt](l);
    }, r.__disableEmitter = () => {
      const l = n;
      l[bn] && l[bn]();
    }), r;
  }
}
const ur = {
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
function Cd({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, r) => [
    ...s,
    // prettier-ignore
    ...r.type === $t ? r.children : [r]
  ], []) : t.reduce((n, s) => {
    const r = e[s];
    return r && (n[s] = r()), n;
  }, {});
}
function Zo(e) {
  return $t;
}
const wd = /* @__PURE__ */ er({
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
  }, ur),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: s } = t, r = e.i18n || dr({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const l = Object.keys(n).filter((c) => c !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = C(e.plural) ? +e.plural : e.plural);
      const a = Cd(t, l), i = r[ks](e.keypath, a, o), f = _e({}, s), p = C(e.tag) || $(e.tag) ? e.tag : Zo();
      return co(p, f, i);
    };
  }
}), gs = wd;
function Md(e) {
  return Z(e) && !C(e[0]);
}
function zo(e, t, n, s) {
  const { slots: r, attrs: l } = t;
  return () => {
    const o = { part: !0 };
    let a = {};
    e.locale && (o.locale = e.locale), C(e.format) ? o.key = e.format : $(e.format) && (C(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((_, g) => n.includes(g) ? _e({}, _, { [g]: e.format[g] }) : _, {}));
    const i = s(e.value, o, a);
    let f = [o.key];
    Z(i) ? f = i.map((_, g) => {
      const m = r[_.type], E = m ? m({ [_.type]: _.value, index: g, parts: i }) : [_.value];
      return Md(E) && (E[0].key = `${_.type}-${g}`), E;
    }) : C(i) && (f = [i]);
    const p = _e({}, l), c = C(e.tag) || $(e.tag) ? e.tag : Zo();
    return co(c, p, f);
  };
}
const kd = /* @__PURE__ */ er({
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
  }, ur),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || dr({
      useScope: e.scope,
      __useComponent: !0
    });
    return zo(e, t, Bo, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Vs](...s)
    ));
  }
}), ol = kd, Fd = /* @__PURE__ */ er({
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
  }, ur),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || dr({
      useScope: e.scope,
      __useComponent: !0
    });
    return zo(e, t, Go, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Fs](...s)
    ));
  }
}), al = Fd;
function Vd(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const s = n.__getInstance(t);
    return s != null ? s.__composer : e.global.__composer;
  }
}
function $d(e) {
  const t = (o) => {
    const { instance: a, modifiers: i, value: f } = o;
    if (!a || !a.$)
      throw oe(x.UNEXPECTED_ERROR);
    const p = Vd(e, a.$);
    process.env.NODE_ENV !== "production" && i.preserve && le(Se(ee.NOT_SUPPORTED_PRESERVE));
    const c = il(f);
    return [
      Reflect.apply(p.t, p, [...cl(c)]),
      p
    ];
  };
  return {
    created: (o, a) => {
      const [i, f] = t(a);
      Ve && e.global === f && (o.__i18nWatcher = Is(f.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = f, o.textContent = i;
    },
    unmounted: (o) => {
      Ve && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const i = o.__composer, f = il(a);
        o.textContent = Reflect.apply(i.t, i, [
          ...cl(f)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return { textContent: a };
    }
  };
}
function il(e) {
  if (C(e))
    return { path: e };
  if (k(e)) {
    if (!("path" in e))
      throw oe(x.REQUIRED_VALUE, "path");
    return e;
  } else
    throw oe(x.INVALID_VALUE);
}
function cl(e) {
  const { path: t, locale: n, args: s, choice: r, plural: l } = e, o = {}, a = s || {};
  return C(n) && (o.locale = n), re(r) && (o.plural = r), re(l) && (o.plural = l), [t, a, o];
}
function Ud(e, t, ...n) {
  const s = k(n[0]) ? n[0] : {}, r = !!s.useI18nComponentName, l = F(s.globalInstall) ? s.globalInstall : !0;
  process.env.NODE_ENV !== "production" && l && r && le(Se(ee.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: gs.name
  })), l && ([r ? "i18n" : gs.name, "I18nT"].forEach((o) => e.component(o, gs)), [ol.name, "I18nN"].forEach((o) => e.component(o, ol)), [al.name, "I18nD"].forEach((o) => e.component(o, al))), e.directive("t", $d(t));
}
const Es = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, xd = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Wd = {
  "vue-i18n-timeline": 16764185
}, ea = "vue-i18n: composer properties";
let xs;
async function Hd(e, t) {
  return new Promise((n, s) => {
    try {
      Sd({
        id: "vue-devtools-plugin-vue-i18n",
        label: Es[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [ea],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (r) => {
        xs = r, r.on.visitComponentTree(({ componentInstance: o, treeNode: a }) => {
          Gd(o, a, t);
        }), r.on.inspectComponent(({ componentInstance: o, instanceData: a }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && a && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && ul(a, o.vnode.el.__VUE_I18N__) : ul(a, o.vnode.el.__VUE_I18N__));
        }), r.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Es[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: xd[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), r.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && Xd(o, t);
        });
        const l = /* @__PURE__ */ new Map();
        r.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (r.unhighlightElement(), qd(o, t), o.nodeId === "global") {
              if (!l.has(o.app)) {
                const [a] = await r.getComponentInstances(o.app);
                l.set(o.app, a);
              }
              r.highlightElement(l.get(o.app));
            } else {
              const a = Jd(o.nodeId, t);
              a && r.highlightElement(a);
            }
        }), r.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && Zd(o, t);
        }), r.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Es[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: Wd[
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
function ta(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Gd(e, t, n) {
  const s = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== s) {
    const r = {
      label: `i18n (${ta(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(r);
  }
}
function ul(e, t) {
  const n = ea;
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
    value: fr(t.messages.value)
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
function fr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const s = e[n];
    K(s) && "source" in s ? t[n] = Kd(s) : ct(s) && s.loc && s.loc.source ? t[n] = s.loc.source : $(s) ? t[n] = fr(s) : t[n] = s;
  }), t;
}
const Bd = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function jd(e) {
  return e.replace(/[<>"&]/g, Yd);
}
function Yd(e) {
  return Bd[e] || e;
}
function Kd(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${jd(e.source)}")` : "(?)"}`
    }
  };
}
function Xd(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [s, r] of t.__instances) {
    const l = t.mode === "composition" ? r : r.__composer;
    n !== l && e.rootNodes.push({
      id: l.id.toString(),
      label: `${ta(s)} Scope`
    });
  }
}
function Jd(e, t) {
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
function na(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((s) => s.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function qd(e, t) {
  const n = na(e.nodeId, t);
  return n && (e.state = Qd(n)), null;
}
function Qd(e) {
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
      value: fr(e.messages.value)
    }
  ];
  t[r] = l;
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
function Tn(e, t) {
  if (xs) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), xs.addTimelineEvent({
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
function Zd(e, t) {
  const n = na(e.nodeId, t);
  if (n) {
    const [s] = e.path;
    s === "locale" && C(e.state.value) ? n.locale.value = e.state.value : s === "fallbackLocale" && (C(e.state.value) || Z(e.state.value) || $(e.state.value)) ? n.fallbackLocale.value = e.state.value : s === "inheritLocale" && F(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function zd(e, t, n) {
  return {
    beforeCreate() {
      const s = Ut();
      if (!s)
        throw oe(x.UNEXPECTED_ERROR);
      const r = this.$options;
      if (r.i18n) {
        const l = r.i18n;
        if (r.__i18n && (l.__i18n = r.__i18n), l.__root = t, this === this.$root)
          this.$i18n = fl(e, l);
        else {
          l.__injectWithOption = !0, l.__extender = n.__vueI18nExtend, this.$i18n = Us(l);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (r.__i18n)
        if (this === this.$root)
          this.$i18n = fl(e, r);
        else {
          this.$i18n = Us({
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
      r.__i18nGlobal && Qo(t, r, r), this.$t = (...l) => this.$i18n.t(...l), this.$rt = (...l) => this.$i18n.rt(...l), this.$tc = (...l) => this.$i18n.tc(...l), this.$te = (l, o) => this.$i18n.te(l, o), this.$d = (...l) => this.$i18n.d(...l), this.$n = (...l) => this.$i18n.n(...l), this.$tm = (l) => this.$i18n.tm(l), n.__setInstance(s, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const s = this.$i18n;
        this.$el.__VUE_I18N__ = s.__composer;
        const r = this.__v_emitter = lr();
        s.__enableEmitter && s.__enableEmitter(r), r.on("*", Tn);
      }
    },
    unmounted() {
      const s = Ut();
      if (!s)
        throw oe(x.UNEXPECTED_ERROR);
      const r = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Tn), delete this.__v_emitter), this.$i18n && (r.__disableEmitter && r.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__disposer && (r.__disposer(), delete r.__disposer, delete r.__extender), n.__deleteInstance(s), delete this.$i18n;
    }
  };
}
function fl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Xo](t.pluralizationRules || e.pluralizationRules);
  const n = rs(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((s) => e.mergeLocaleMessage(s, n[s])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((s) => e.mergeDateTimeFormat(s, t.datetimeFormats[s])), t.numberFormats && Object.keys(t.numberFormats).forEach((s) => e.mergeNumberFormat(s, t.numberFormats[s])), e;
}
const e_ = /* @__PURE__ */ Ke("global-vue-i18n");
function t_(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && F(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, s = F(e.globalInjection) ? e.globalInjection : !0, r = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, l = /* @__PURE__ */ new Map(), [o, a] = n_(e, n), i = /* @__PURE__ */ Ke(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && r && le(Se(ee.NOTICE_DROP_ALLOW_COMPOSITION));
  function f(_) {
    return l.get(_) || null;
  }
  function p(_, g) {
    l.set(_, g);
  }
  function c(_) {
    l.delete(_);
  }
  {
    const _ = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return r;
      },
      // install plugin
      async install(g, ...m) {
        if (process.env.NODE_ENV !== "production" && (g.__VUE_I18N__ = _), g.__VUE_I18N_SYMBOL__ = i, g.provide(g.__VUE_I18N_SYMBOL__, _), k(m[0])) {
          const y = m[0];
          _.__composerExtend = y.__composerExtend, _.__vueI18nExtend = y.__vueI18nExtend;
        }
        let E = null;
        !n && s && (E = f_(g, _.global)), __VUE_I18N_FULL_INSTALL__ && Ud(g, _, ...m), __VUE_I18N_LEGACY_API__ && n && g.mixin(zd(a, a.__composer, _));
        const T = g.unmount;
        if (g.unmount = () => {
          E && E(), _.dispose(), T();
        }, process.env.NODE_ENV !== "production") {
          if (!await Hd(g, _))
            throw oe(x.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const A = lr();
          if (n) {
            const h = a;
            h.__enableEmitter && h.__enableEmitter(A);
          } else {
            const h = a;
            h[Tt] && h[Tt](A);
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
      __instances: l,
      // @internal
      __getInstance: f,
      // @internal
      __setInstance: p,
      // @internal
      __deleteInstance: c
    };
    return _;
  }
}
function dr(e = {}) {
  const t = Ut();
  if (t == null)
    throw oe(x.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw oe(x.NOT_INSTALLED);
  const n = s_(t), s = l_(n), r = qo(t), l = r_(e, r);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw oe(x.NOT_AVAILABLE_IN_LEGACY_MODE);
    return c_(t, l, s, e);
  }
  if (l === "global")
    return Qo(s, e, r), s;
  if (l === "parent") {
    let i = o_(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && le(Se(ee.NOT_FOUND_PARENT_SCOPE)), i = s), i;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const i = _e({}, e);
    "__i18n" in r && (i.__i18n = r.__i18n), s && (i.__root = s), a = cr(i), o.__composerExtend && (a[$s] = o.__composerExtend(a)), i_(o, t, a), o.__setInstance(t, a);
  }
  return a;
}
function n_(e, t, n) {
  const s = Ta();
  {
    const r = __VUE_I18N_LEGACY_API__ && t ? s.run(() => Us(e)) : s.run(() => cr(e));
    if (r == null)
      throw oe(x.UNEXPECTED_ERROR);
    return [s, r];
  }
}
function s_(e) {
  {
    const t = Ql(e.isCE ? e_ : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw oe(e.isCE ? x.NOT_INSTALLED_WITH_PROVIDE : x.UNEXPECTED_ERROR);
    return t;
  }
}
function r_(e, t) {
  return zn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function l_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function o_(e, t, n = !1) {
  let s = null;
  const r = t.root;
  let l = a_(t, n);
  for (; l != null; ) {
    const o = e;
    if (e.mode === "composition")
      s = o.__getInstance(l);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = o.__getInstance(l);
      a != null && (s = a.__composer, n && s && !s[Jo] && (s = null));
    }
    if (s != null || r === l)
      break;
    l = l.parent;
  }
  return s;
}
function a_(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function i_(e, t, n) {
  let s = null;
  gi(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, s = lr();
      const r = n;
      r[Tt] && r[Tt](s), s.on("*", Tn);
    }
  }, t), Ei(() => {
    const r = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (s && s.off("*", Tn), r[bn] && r[bn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const l = r[$s];
    l && (l(), delete r[$s]);
  }, t);
}
function c_(e, t, n, s = {}) {
  const r = t === "local", l = $l(null);
  if (r && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw oe(x.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = F(s.inheritLocale) ? s.inheritLocale : !C(s.locale), a = Rt(
    // prettier-ignore
    !r || o ? n.locale.value : C(s.locale) ? s.locale : Wt
  ), i = Rt(
    // prettier-ignore
    !r || o ? n.fallbackLocale.value : C(s.fallbackLocale) || Z(s.fallbackLocale) || k(s.fallbackLocale) || s.fallbackLocale === !1 ? s.fallbackLocale : a.value
  ), f = Rt(rs(a.value, s)), p = Rt(k(s.datetimeFormats) ? s.datetimeFormats : { [a.value]: {} }), c = Rt(k(s.numberFormats) ? s.numberFormats : { [a.value]: {} }), _ = r ? n.missingWarn : F(s.missingWarn) || it(s.missingWarn) ? s.missingWarn : !0, g = r ? n.fallbackWarn : F(s.fallbackWarn) || it(s.fallbackWarn) ? s.fallbackWarn : !0, m = r ? n.fallbackRoot : F(s.fallbackRoot) ? s.fallbackRoot : !0, E = !!s.fallbackFormat, T = K(s.missing) ? s.missing : null, y = K(s.postTranslation) ? s.postTranslation : null, A = r ? n.warnHtmlMessage : F(s.warnHtmlMessage) ? s.warnHtmlMessage : !0, h = !!s.escapeParameter, b = r ? n.modifiers : k(s.modifiers) ? s.modifiers : {}, N = s.pluralRules || r && n.pluralRules;
  function O() {
    return [
      a.value,
      i.value,
      f.value,
      p.value,
      c.value
    ];
  }
  const L = We({
    get: () => l.value ? l.value.locale.value : a.value,
    set: (P) => {
      l.value && (l.value.locale.value = P), a.value = P;
    }
  }), R = We({
    get: () => l.value ? l.value.fallbackLocale.value : i.value,
    set: (P) => {
      l.value && (l.value.fallbackLocale.value = P), i.value = P;
    }
  }), D = We(() => l.value ? l.value.messages.value : f.value), q = We(() => p.value), ye = We(() => c.value);
  function U() {
    return l.value ? l.value.getPostTranslationHandler() : y;
  }
  function pe(P) {
    l.value && l.value.setPostTranslationHandler(P);
  }
  function Gt() {
    return l.value ? l.value.getMissingHandler() : T;
  }
  function Bt(P) {
    l.value && l.value.setMissingHandler(P);
  }
  function Ue(P) {
    return O(), P();
  }
  function jt(...P) {
    return l.value ? Ue(() => Reflect.apply(l.value.t, null, [...P])) : Ue(() => "");
  }
  function Yt(...P) {
    return l.value ? Reflect.apply(l.value.rt, null, [...P]) : "";
  }
  function Kt(...P) {
    return l.value ? Ue(() => Reflect.apply(l.value.d, null, [...P])) : Ue(() => "");
  }
  function Xt(...P) {
    return l.value ? Ue(() => Reflect.apply(l.value.n, null, [...P])) : Ue(() => "");
  }
  function Jt(P) {
    return l.value ? l.value.tm(P) : {};
  }
  function Pe(P, H) {
    return l.value ? l.value.te(P, H) : !1;
  }
  function Lt(P) {
    return l.value ? l.value.getLocaleMessage(P) : {};
  }
  function It(P, H) {
    l.value && (l.value.setLocaleMessage(P, H), f.value[P] = H);
  }
  function qt(P, H) {
    l.value && l.value.mergeLocaleMessage(P, H);
  }
  function Qt(P) {
    return l.value ? l.value.getDateTimeFormat(P) : {};
  }
  function Zt(P, H) {
    l.value && (l.value.setDateTimeFormat(P, H), p.value[P] = H);
  }
  function In(P, H) {
    l.value && l.value.mergeDateTimeFormat(P, H);
  }
  function zt(P) {
    return l.value ? l.value.getNumberFormat(P) : {};
  }
  function yt(P, H) {
    l.value && (l.value.setNumberFormat(P, H), c.value[P] = H);
  }
  function en(P, H) {
    l.value && l.value.mergeNumberFormat(P, H);
  }
  const tn = {
    get id() {
      return l.value ? l.value.id : -1;
    },
    locale: L,
    fallbackLocale: R,
    messages: D,
    datetimeFormats: q,
    numberFormats: ye,
    get inheritLocale() {
      return l.value ? l.value.inheritLocale : o;
    },
    set inheritLocale(P) {
      l.value && (l.value.inheritLocale = P);
    },
    get availableLocales() {
      return l.value ? l.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return l.value ? l.value.modifiers : b;
    },
    get pluralRules() {
      return l.value ? l.value.pluralRules : N;
    },
    get isGlobal() {
      return l.value ? l.value.isGlobal : !1;
    },
    get missingWarn() {
      return l.value ? l.value.missingWarn : _;
    },
    set missingWarn(P) {
      l.value && (l.value.missingWarn = P);
    },
    get fallbackWarn() {
      return l.value ? l.value.fallbackWarn : g;
    },
    set fallbackWarn(P) {
      l.value && (l.value.missingWarn = P);
    },
    get fallbackRoot() {
      return l.value ? l.value.fallbackRoot : m;
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
      return l.value ? l.value.warnHtmlMessage : A;
    },
    set warnHtmlMessage(P) {
      l.value && (l.value.warnHtmlMessage = P);
    },
    get escapeParameter() {
      return l.value ? l.value.escapeParameter : h;
    },
    set escapeParameter(P) {
      l.value && (l.value.escapeParameter = P);
    },
    t: jt,
    getPostTranslationHandler: U,
    setPostTranslationHandler: pe,
    getMissingHandler: Gt,
    setMissingHandler: Bt,
    rt: Yt,
    d: Kt,
    n: Xt,
    tm: Jt,
    te: Pe,
    getLocaleMessage: Lt,
    setLocaleMessage: It,
    mergeLocaleMessage: qt,
    getDateTimeFormat: Qt,
    setDateTimeFormat: Zt,
    mergeDateTimeFormat: In,
    getNumberFormat: zt,
    setNumberFormat: yt,
    mergeNumberFormat: en
  };
  function nn(P) {
    P.locale.value = a.value, P.fallbackLocale.value = i.value, Object.keys(f.value).forEach((H) => {
      P.mergeLocaleMessage(H, f.value[H]);
    }), Object.keys(p.value).forEach((H) => {
      P.mergeDateTimeFormat(H, p.value[H]);
    }), Object.keys(c.value).forEach((H) => {
      P.mergeNumberFormat(H, c.value[H]);
    }), P.escapeParameter = h, P.fallbackFormat = E, P.fallbackRoot = m, P.fallbackWarn = g, P.missingWarn = _, P.warnHtmlMessage = A;
  }
  return hi(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw oe(x.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const P = l.value = e.proxy.$i18n.__composer;
    t === "global" ? (a.value = P.locale.value, i.value = P.fallbackLocale.value, f.value = P.messages.value, p.value = P.datetimeFormats.value, c.value = P.numberFormats.value) : r && nn(P);
  }), tn;
}
const u_ = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], dl = ["t", "rt", "d", "n", "tm", "te"];
function f_(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return u_.forEach((r) => {
    const l = Object.getOwnPropertyDescriptor(t, r);
    if (!l)
      throw oe(x.UNEXPECTED_ERROR);
    const o = he(l.value) ? {
      get() {
        return l.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        l.value.value = a;
      }
    } : {
      get() {
        return l.get && l.get();
      }
    };
    Object.defineProperty(n, r, o);
  }), e.config.globalProperties.$i18n = n, dl.forEach((r) => {
    const l = Object.getOwnPropertyDescriptor(t, r);
    if (!l || !l.value)
      throw oe(x.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${r}`, l);
  }), () => {
    delete e.config.globalProperties.$i18n, dl.forEach((r) => {
      delete e.config.globalProperties[`$${r}`];
    });
  };
}
Id();
__INTLIFY_JIT_COMPILATION__ ? Br(fd) : Br(ud);
td(kf);
nd(Ao);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ze();
  e.__INTLIFY__ = !0, Bf(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function d_() {
  const e = /* @__PURE__ */ Object.assign({
    "./locales/en_US.json": su,
    "./locales/es_ES.json": uu,
    "./locales/fr_FR.json": gu,
    "./locales/pl_PL.json": Su,
    "./locales/pt_BR.json": Ru,
    "./locales/tr_TR.json": $u
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
const __ = t_({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: d_()
}), p_ = (e, t) => {
  e.config.globalProperties.defaultOptions = t && t.constructor.name === "Object" ? t : {}, e.use(__), e.component("vueSelectSides", vo);
};
vo.install = p_;
export {
  vo as default
};
