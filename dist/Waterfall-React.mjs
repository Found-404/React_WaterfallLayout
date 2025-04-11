import Q, { createContext as de, useRef as F, useState as K, useEffect as ee, useMemo as he, forwardRef as me, useContext as ge, useImperativeHandle as Ee } from "react";
var H = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function ve() {
  if (re) return N;
  re = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function s(i, o, t) {
    var n = null;
    if (t !== void 0 && (n = "" + t), o.key !== void 0 && (n = "" + o.key), "key" in o) {
      t = {};
      for (var u in o)
        u !== "key" && (t[u] = o[u]);
    } else t = o;
    return o = t.ref, {
      $$typeof: r,
      type: i,
      key: n,
      ref: o !== void 0 ? o : null,
      props: t
    };
  }
  return N.Fragment = a, N.jsx = s, N.jsxs = s, N;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function Re() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === U ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case y:
          return "Profiler";
        case S:
          return "StrictMode";
        case $:
          return "Suspense";
        case M:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case b:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case j:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var l = e.render;
            return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
            return l = e.displayName || null, l !== null ? l : r(e.type) || "Memo";
          case D:
            l = e._payload, e = e._init;
            try {
              return r(e(l));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function s(e) {
      try {
        a(e);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var E = l.error, x = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return E.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), a(e);
      }
    }
    function i(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var l = r(e);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = W.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function n(e) {
      if (z.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function u(e, l) {
      function E() {
        g || (g = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: E,
        configurable: !0
      });
    }
    function v() {
      var e = r(this.type);
      return k[e] || (k[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, l, E, x, C, A, X, B) {
      return E = A.ref, e = {
        $$typeof: c,
        type: e,
        key: l,
        props: A,
        _owner: C
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function f(e, l, E, x, C, A, X, B) {
      var T = l.children;
      if (T !== void 0)
        if (x)
          if (m(T)) {
            for (x = 0; x < T.length; x++)
              R(T[x]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(T);
      if (z.call(l, "key")) {
        T = r(e);
        var P = Object.keys(l).filter(function(fe) {
          return fe !== "key";
        });
        x = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", G[T + x] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          T,
          P,
          T
        ), G[T + x] = !0);
      }
      if (T = null, E !== void 0 && (s(E), T = "" + E), n(l) && (s(l.key), T = "" + l.key), "key" in l) {
        E = {};
        for (var Z in l)
          Z !== "key" && (E[Z] = l[Z]);
      } else E = l;
      return T && u(
        E,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(
        e,
        T,
        A,
        C,
        o(),
        E,
        X,
        B
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === c && e._store && (e._store.validated = 1);
    }
    var h = Q, c = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), V = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), W = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, m = Array.isArray, p = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var g, k = {}, O = h["react-stack-bottom-frame"].bind(
      h,
      t
    )(), _ = p(i(t)), G = {};
    L.Fragment = w, L.jsx = function(e, l, E, x, C) {
      var A = 1e4 > W.recentlyCreatedOwnerStacks++;
      return f(
        e,
        l,
        E,
        !1,
        x,
        C,
        A ? Error("react-stack-top-frame") : O,
        A ? p(i(e)) : _
      );
    }, L.jsxs = function(e, l, E, x, C) {
      var A = 1e4 > W.recentlyCreatedOwnerStacks++;
      return f(
        e,
        l,
        E,
        !0,
        x,
        C,
        A ? Error("react-stack-top-frame") : O,
        A ? p(i(e)) : _
      );
    };
  }()), L;
}
var ae;
function pe() {
  return ae || (ae = 1, process.env.NODE_ENV === "production" ? H.exports = ve() : H.exports = Re()), H.exports;
}
var te = pe(), be = /* @__PURE__ */ (() => {
  function r(t, n, u, v) {
    let d = t.clientWidth, f = u.length, R = 0, h = 0;
    for (; h < f; ) {
      let c = a(d, n, u, h);
      for (let b = 0, w = 0, S, y; b < c.count; b++)
        S = u[h + b], y = v[h + b], y.top = R, y.left = c.left + w, y.width = S.width * c.height / S.height, y.height = c.height, w += y.width;
      h += c.count, R += c.height;
    }
    t.style.height = R + "px";
  }
  function a(t, n, u, v) {
    let d = s(t, n.lineGap, u, v), f = Math.max(d - 1, 1), R = i(t, n, u, v, d), h = i(t, n, u, v, f), c = o(h, R, t), b = c.height, w = c.width;
    return c.count === 1 && (w = Math.min(n.singleMaxWidth, t), b = u[v].height * w / u[v].width), {
      left: se(t, w, n.align),
      // 行起始位置
      count: c.count,
      // 项目数
      height: b
      // 行高度
    };
  }
  function s(t, n, u, v) {
    let d = 0;
    for (let f = v, R = 0; f < u.length && R <= t; f++)
      R += u[f].width * n / u[f].height, d++;
    return d;
  }
  function i(t, n, u, v, d) {
    let f = 0;
    for (let c = d - 1; c >= 0; c--) {
      let b = u[v + c];
      f += b.width * n.lineGap / b.height;
    }
    let R = n.lineGap * t / f;
    if (R <= n.maxLineGap && R >= n.minLineGap)
      return {
        cost: Math.abs(n.lineGap - R),
        count: d,
        width: t,
        height: R
      };
    {
      let c = f > t ? n.minLineGap : n.maxLineGap;
      return {
        cost: 1 / 0,
        count: d,
        width: f * c / n.lineGap,
        height: c
      };
    }
  }
  function o(t, n, u) {
    return t.cost === 1 / 0 && n.cost === 1 / 0 ? n.width < u ? n : t : n.cost >= t.cost ? t : n;
  }
  return {
    calculate: r
  };
})(), we = /* @__PURE__ */ (() => {
  function r(i, o, t, n) {
    let u = i.clientWidth, v = o.grow, d = v ? s(u, v) : a(u, o), f = oe(0, d.count);
    t.forEach((R, h) => {
      let c = f.reduce(
        (S, y, j) => y < f[S] ? j : S,
        0
      ), b = d.width[c % d.count], w = n[h];
      w.top = f[c], w.left = d.left + (c ? ie(d.width.slice(0, c)) : 0), w.width = b, w.height = R.height * (o.fixedHeight ? 1 : b / R.width), f[c] = f[c] + w.height;
    }), i.style.height = Math.max.apply(Math, f) + "px";
  }
  function a(i, o) {
    let t = i / o.lineGap, n;
    if (o.singleMaxWidth >= i)
      t = 1, n = Math.max(i, o.minLineGap);
    else {
      let u = o.maxLineGap * ~~t, v = o.minLineGap * ~~(t + 1), d = u >= i, f = v <= i;
      d && f ? (t = Math.round(t), n = i / t) : d ? (t = ~~t, n = i / t) : f ? (t = ~~(t + 1), n = i / t) : (t = ~~t, n = o.maxLineGap), t === 1 && (n = Math.min(i, o.singleMaxWidth), n = Math.max(n, o.minLineGap));
    }
    return {
      width: oe(n, t),
      count: t,
      left: se(i, n * t, o.align)
    };
  }
  function s(i, o) {
    let t = ie(o);
    return {
      width: o.map((n) => i * n / t),
      count: o.length,
      left: 0
    };
  }
  return {
    calculate: r
  };
})();
function se(r, a, s) {
  switch (s) {
    case "right":
      return r - a;
    case "center":
      return (r - a) / 2;
    default:
      return 0;
  }
}
function oe(r, a) {
  let s = typeof r == "function" ? () => r() : () => r, i = [];
  for (let o = 0; o < a; o++)
    i[o] = s();
  return i;
}
function ie(r) {
  return r.reduce((a, s) => a + s);
}
const ce = de(), ue = "_wfMoveClass";
function le(r, a, s, i = !1) {
  r.addEventListener(a, s, i);
}
function xe(r, a, s, i = !1) {
  r.removeEventListener(a, s, i);
}
function Te(r) {
  let a = r.target, s = a[ue];
  s && _e(a, s);
}
function _e(r, a) {
  let s = new RegExp("\\s*\\b" + a + "\\b\\s*", "g"), i = I(r, "class").replace(s, " ").trim();
  I(r, "class", i);
}
function I(r, a, s) {
  if (typeof s < "u")
    r.setAttribute(a, s);
  else
    return r.getAttribute(a) || "";
}
function ye() {
  return window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 ? "webkitTransitionEnd" : "transitionend";
}
function ke(r, a) {
  return a !== r.clientWidth;
}
function Se(r, a, s) {
  let i = a.left - s.left, o = a.top - s.top, t = a.width / s.width, n = a.height / s.height;
  r.style.transform = r.style.WebkitTransform = `translate(${i}px,${o}px) scale(${t},${n})`, r.style.transitionDuration = "0s";
}
function Ae(r, a) {
  if (!Ce(r, a)) {
    let i = (I(r, "class").trim() + " " + a).trim();
    I(r, "class", i);
  }
}
function Ce(r, a) {
  return new RegExp("\\b" + a + "\\b").test(I(r, "class"));
}
function Oe(r) {
  r.style.transform = r.style.WebkitTransform = "", r.style.transitionDuration = "";
}
function Pe(r) {
  const {
    autoResize: a = !0,
    interval: s = 200,
    align: i = "left",
    line: o = "v",
    lineGap: t = 200,
    minLineGap: n,
    maxLineGap: u,
    singleMaxWidth: v,
    grow: d,
    fixedHeight: f = !1,
    watch: R = {}
  } = r, h = F(null), c = F([]), b = F([]), [w, S] = K([]);
  function y() {
    if (!h.current) return;
    let m = h.current.clientWidth;
    S(() => {
      const p = Array.from(c.current).map(
        (g) => g.getMeta()
      );
      return p.sort((g, k) => g.order - k.order), b.current = p.map(() => ({})), U(h.current, p, b.current), setTimeout(() => {
        ke(h.current, m) && U(h.current, p, b.current), console.log(b.current), h.current.style.overflow = "hidden", j(b.current, p);
      }, 0), p;
    });
  }
  function j(m, p) {
    let g = p.filter((_) => _.moveClass), k = Y(g);
    V(m, p);
    let O = Y(g);
    g.forEach((_, G) => {
      _.node.current[ue] = _.moveClass, Se(_.node.current, k[G], O[G]);
    }), g.forEach((_) => {
      Ae(_.node.current, _.moveClass), Oe(_.node.current);
    });
  }
  function V(m, p) {
    m.forEach((g, k) => {
      let O = p[k].node.current.style;
      c.current[k].setRect(g);
      for (let _ in g)
        O[_] = g[_] + "px";
    });
  }
  function Y(m) {
    return m.map((p, g) => c.current[g].getRect());
  }
  const $ = F(null);
  function M() {
    clearTimeout($.current), $.current = setTimeout(y, s);
  }
  const J = () => {
    le(h.current, ye(), Te, !0), D(a);
  };
  function D(m) {
    m === !1 || !m ? xe(window, "resize", M, !1) : le(window, "resize", M, !1);
  }
  function q() {
    const m = u ? +u : t;
    return {
      align: ~["left", "right", "center"].indexOf(i) ? i : "left",
      line: ~["v", "h"].indexOf(o) ? o : "v",
      lineGap: +t,
      minLineGap: n ? +n : t,
      maxLineGap: m,
      singleMaxWidth: Math.max(v || 0, u),
      fixedHeight: !!f,
      grow: d && d.map((p) => +p)
    };
  }
  function U(m, p, g) {
    let k = q();
    (o === "h" ? be : we).calculate(m, k, p, g);
  }
  ee(() => {
    J(), M();
  }, []);
  const W = he(() => r.children, [r.children]);
  ee(() => {
    y();
  }, [W]);
  const z = Q.Children.map(r.children, (m, p) => Q.cloneElement(m, {
    ref: (g) => {
      typeof m.ref == "function" ? m.ref(g) : m.ref && typeof m.ref != "function" && (m.ref.current = g), c.current[p] = g;
    }
  }));
  return /* @__PURE__ */ te.jsx("div", { className: "waterfall", ref: h, children: /* @__PURE__ */ te.jsx(ce.Provider, { value: {
    reflow: y
  }, children: z }) });
}
const je = me((r, a) => {
  const { width: s, height: i, order: o, moveClass: t } = r, n = F(), [u, v] = K({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    order: o
  }), [d, f] = K(!1);
  ge(ce);
  const R = () => ({
    vm: n,
    node: n,
    order: o,
    width: s,
    height: i,
    moveClass: t
  }), h = () => {
    f(!0);
  };
  return ee(() => {
    h();
  }, []), Ee(a, () => ({
    getMeta: R,
    getRect: () => u,
    setRect: (c) => v(c)
  })), /* @__PURE__ */ te.jsx("div", { className: "waterfall-slot", ref: n, style: {
    visibility: d ? "visible" : "hidden"
  }, children: r.children });
}), We = {
  Waterfall: Pe,
  WaterfallSlot: je
};
export {
  Pe as Waterfall,
  je as WaterfallSlot,
  We as default
};
