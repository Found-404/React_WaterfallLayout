import H, { createContext as rt, useRef as E, useState as _, useCallback as I, useEffect as L, useMemo as J, forwardRef as it, useContext as lt, useImperativeHandle as at } from "react";
var S = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O;
function st() {
  if (O) return G;
  O = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function a(l, r, t) {
    var e = null;
    if (t !== void 0 && (e = "" + t), r.key !== void 0 && (e = "" + r.key), "key" in r) {
      t = {};
      for (var s in r)
        s !== "key" && (t[s] = r[s]);
    } else t = r;
    return r = t.ref, {
      $$typeof: n,
      type: l,
      key: e,
      ref: r !== void 0 ? r : null,
      props: t
    };
  }
  return G.Fragment = i, G.jsx = a, G.jsxs = a, G;
}
var q;
function ot() {
  return q || (q = 1, S.exports = st()), S.exports;
}
var A = ot(), ct = /* @__PURE__ */ (() => {
  function n(t, e, s, h) {
    let u = t.clientWidth, c = s.length, g = 0, f = 0;
    for (; f < c; ) {
      let o = i(u, e, s, f);
      for (let x = 0, p = 0, y, w; x < o.count; x++)
        y = s[f + x], w = h[f + x], w.top = g, w.left = o.left + p, w.width = y.width * o.height / y.height, w.height = o.height, p += w.width;
      f += o.count, g += o.height;
    }
    t.style.height = g + "px";
  }
  function i(t, e, s, h) {
    let u = a(t, e.lineGap, s, h), c = Math.max(u - 1, 1), g = l(t, e, s, h, u), f = l(t, e, s, h, c), o = r(f, g, t), x = o.height, p = o.width;
    return o.count === 1 && (p = Math.min(e.singleMaxWidth, t), x = s[h].height * p / s[h].width), {
      left: U(t, p, e.align),
      // 行起始位置
      count: o.count,
      // 项目数
      height: x
      // 行高度
    };
  }
  function a(t, e, s, h) {
    let u = 0;
    for (let c = h, g = 0; c < s.length && g <= t; c++)
      g += s[c].width * e / s[c].height, u++;
    return u;
  }
  function l(t, e, s, h, u) {
    let c = 0;
    for (let o = u - 1; o >= 0; o--) {
      let x = s[h + o];
      c += x.width * e.lineGap / x.height;
    }
    let g = e.lineGap * t / c;
    if (g <= e.maxLineGap && g >= e.minLineGap)
      return {
        cost: Math.abs(e.lineGap - g),
        count: u,
        width: t,
        height: g
      };
    {
      let o = c > t ? e.minLineGap : e.maxLineGap;
      return {
        cost: 1 / 0,
        count: u,
        width: c * o / e.lineGap,
        height: o
      };
    }
  }
  function r(t, e, s) {
    return t.cost === 1 / 0 && e.cost === 1 / 0 ? e.width < s ? e : t : e.cost >= t.cost ? t : e;
  }
  return {
    calculate: n
  };
})(), ut = /* @__PURE__ */ (() => {
  function n(l, r, t, e) {
    let s = l.clientWidth, h = r.grow, u = h ? a(s, h) : i(s, r), c = N(0, u.count);
    t.forEach((g, f) => {
      let o = c.reduce(
        (y, w, T) => w < c[y] ? T : y,
        0
      ), x = u.width[o % u.count], p = e[f];
      p.top = c[o], p.left = u.left + (o ? V(u.width.slice(0, o)) : 0), p.width = x, p.height = g.height * (r.fixedHeight ? 1 : x / g.width), c[o] = c[o] + p.height;
    }), l.style.height = Math.max.apply(Math, c) + "px";
  }
  function i(l, r) {
    let t = l / r.lineGap, e;
    if (r.singleMaxWidth >= l)
      t = 1, e = Math.max(l, r.minLineGap);
    else {
      let s = r.maxLineGap * ~~t, h = r.minLineGap * ~~(t + 1), u = s >= l, c = h <= l;
      u && c ? (t = Math.round(t), e = l / t) : u ? (t = ~~t, e = l / t) : c ? (t = ~~(t + 1), e = l / t) : (t = ~~t, e = r.maxLineGap), t === 1 && (e = Math.min(l, r.singleMaxWidth), e = Math.max(e, r.minLineGap));
    }
    return {
      width: N(e, t),
      count: t,
      left: U(l, e * t, r.align)
    };
  }
  function a(l, r) {
    let t = V(r);
    return {
      width: r.map((e) => l * e / t),
      count: r.length,
      left: 0
    };
  }
  return {
    calculate: n
  };
})();
function U(n, i, a) {
  switch (a) {
    case "right":
      return n - i;
    case "center":
      return (n - i) / 2;
    default:
      return 0;
  }
}
function N(n, i) {
  let a = typeof n == "function" ? () => n() : () => n, l = [];
  for (let r = 0; r < i; r++)
    l[r] = a();
  return l;
}
function V(n) {
  return n.reduce((i, a) => i + a);
}
const Q = rt(), X = "_wfMoveClass";
function z(n, i, a, l = !1) {
  n.addEventListener(i, a, l);
}
function B(n, i, a, l = !1) {
  n.removeEventListener(i, a, l);
}
function D(n) {
  let i = n.target, a = i[X];
  a && ft(i, a);
}
function ft(n, i) {
  let a = new RegExp("\\s*\\b" + i + "\\b\\s*", "g"), l = M(n, "class").replace(a, " ").trim();
  M(n, "class", l);
}
function M(n, i, a) {
  if (typeof a < "u")
    n.setAttribute(i, a);
  else
    return n.getAttribute(i) || "";
}
function Y() {
  return window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 ? "webkitTransitionEnd" : "transitionend";
}
function ht(n, i) {
  return i !== n.clientWidth;
}
function dt(n, i, a) {
  let l = i.left - a.left, r = i.top - a.top, t = i.width / a.width, e = i.height / a.height;
  n.style.transform = n.style.WebkitTransform = `translate(${l}px,${r}px) scale(${t},${e})`, n.style.transitionDuration = "0s";
}
function gt(n, i) {
  if (!xt(n, i)) {
    let l = (M(n, "class").trim() + " " + i).trim();
    M(n, "class", l);
  }
}
function xt(n, i) {
  return new RegExp("\\b" + i + "\\b").test(M(n, "class"));
}
function mt(n) {
  n.style.transform = n.style.WebkitTransform = "", n.style.transitionDuration = "";
}
function vt(n) {
  const {
    autoResize: i = !0,
    interval: a = 200,
    align: l = "left",
    line: r = "v",
    lineGap: t = 200,
    minLineGap: e,
    maxLineGap: s,
    singleMaxWidth: h,
    grow: u,
    fixedHeight: c = !1,
    watch: g = {}
  } = n, f = E(null), o = E([]), x = E([]), [p, y] = _([]), w = I(() => {
    if (!f.current) return;
    let m = f.current.clientWidth;
    y(() => {
      const v = Array.from(o.current).map(
        (d) => d.getMeta()
      );
      return v.sort((d, C) => d.order - C.order), x.current = v.map(() => ({})), P(f.current, v, x.current), setTimeout(() => {
        ht(f.current, m) && P(f.current, v, x.current), console.log(x.current), f.current.style.overflow = "hidden", T(x.current, v);
      }, 0), v;
    });
  }, [r, l, t, e, s, h, c, u]);
  function T(m, v) {
    let d = v.filter((R) => R.moveClass), C = F(d);
    Z(m, v);
    let W = F(d);
    d.forEach((R, $) => {
      R.node.current[X] = R.moveClass, dt(R.node.current, C[$], W[$]);
    }), d.forEach((R) => {
      gt(R.node.current, R.moveClass), mt(R.node.current);
    });
  }
  function Z(m, v) {
    m.forEach((d, C) => {
      let W = v[C].node.current.style;
      o.current[C].setRect(d);
      for (let R in d)
        W[R] = d[R] + "px";
    });
  }
  function F(m) {
    return m.map((v, d) => o.current[d].getRect());
  }
  const j = E(null), b = E(w);
  L(() => {
    b.current = w;
  }, [w]);
  const k = I(() => {
    clearTimeout(j.current), j.current = setTimeout(() => {
      b.current && b.current();
    }, a);
  }, [a]);
  L(() => (i && z(window, "resize", k, !1), f.current && z(f.current, Y(), D, !0), () => {
    B(window, "resize", k, !1), f.current && B(f.current, Y(), D, !0);
  }), [i, k]);
  function K() {
    const m = s ? +s : t;
    return console.log(u), {
      align: ~["left", "right", "center"].indexOf(l) ? l : "left",
      line: ~["v", "h"].indexOf(r) ? r : "v",
      lineGap: +t,
      minLineGap: e ? +e : t,
      maxLineGap: m,
      singleMaxWidth: Math.max(h || 0, s),
      fixedHeight: !!c,
      grow: u && u.map((v) => +v)
    };
  }
  function P(m, v, d) {
    let C = K();
    (r === "h" ? ct : ut).calculate(m, C, v, d);
  }
  const tt = J(() => n.children, [n.children]);
  L(() => {
    w();
  }, [tt]);
  const et = H.Children.map(n.children, (m, v) => H.cloneElement(m, {
    ref: (d) => {
      typeof m.ref == "function" ? m.ref(d) : m.ref && typeof m.ref != "function" && (m.ref.current = d), o.current[v] = d;
    }
  })), nt = J(() => ({
    reflow: w
  }), [w]);
  return /* @__PURE__ */ A.jsx("div", { className: "waterfall", ref: f, children: /* @__PURE__ */ A.jsx(Q.Provider, { value: nt, children: et }) });
}
const wt = it((n, i) => {
  const { width: a, height: l, order: r, moveClass: t } = n, e = E(), [s, h] = _({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    order: r
  }), [u, c] = _(!1);
  lt(Q);
  const g = () => ({
    vm: e,
    node: e,
    order: r,
    width: a,
    height: l,
    moveClass: t
  }), f = () => {
    c(!0);
  };
  return L(() => {
    f();
  }, []), at(i, () => ({
    getMeta: g,
    getRect: () => s,
    setRect: (o) => h(o)
  })), /* @__PURE__ */ A.jsx("div", { className: "waterfall-slot", ref: e, style: {
    visibility: u ? "visible" : "hidden"
  }, children: n.children });
}), Rt = {
  Waterfall: vt,
  WaterfallSlot: wt
};
export {
  vt as Waterfall,
  wt as WaterfallSlot,
  Rt as default
};
