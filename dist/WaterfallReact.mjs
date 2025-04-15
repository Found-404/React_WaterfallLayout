import H, { createContext as Z, useRef as C, useState as k, useEffect as S, useMemo as K, forwardRef as tt, useContext as et, useImperativeHandle as nt } from "react";
var b = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function rt() {
  if ($) return G;
  $ = 1;
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
var I;
function it() {
  return I || (I = 1, b.exports = rt()), b.exports;
}
var A = it(), lt = /* @__PURE__ */ (() => {
  function n(t, e, s, d) {
    let u = t.clientWidth, c = s.length, x = 0, f = 0;
    for (; f < c; ) {
      let o = i(u, e, s, f);
      for (let m = 0, w = 0, R, p; m < o.count; m++)
        R = s[f + m], p = d[f + m], p.top = x, p.left = o.left + w, p.width = R.width * o.height / R.height, p.height = o.height, w += p.width;
      f += o.count, x += o.height;
    }
    t.style.height = x + "px";
  }
  function i(t, e, s, d) {
    let u = a(t, e.lineGap, s, d), c = Math.max(u - 1, 1), x = l(t, e, s, d, u), f = l(t, e, s, d, c), o = r(f, x, t), m = o.height, w = o.width;
    return o.count === 1 && (w = Math.min(e.singleMaxWidth, t), m = s[d].height * w / s[d].width), {
      left: N(t, w, e.align),
      // 行起始位置
      count: o.count,
      // 项目数
      height: m
      // 行高度
    };
  }
  function a(t, e, s, d) {
    let u = 0;
    for (let c = d, x = 0; c < s.length && x <= t; c++)
      x += s[c].width * e / s[c].height, u++;
    return u;
  }
  function l(t, e, s, d, u) {
    let c = 0;
    for (let o = u - 1; o >= 0; o--) {
      let m = s[d + o];
      c += m.width * e.lineGap / m.height;
    }
    let x = e.lineGap * t / c;
    if (x <= e.maxLineGap && x >= e.minLineGap)
      return {
        cost: Math.abs(e.lineGap - x),
        count: u,
        width: t,
        height: x
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
})(), at = /* @__PURE__ */ (() => {
  function n(l, r, t, e) {
    let s = l.clientWidth, d = r.grow, u = d ? a(s, d) : i(s, r), c = J(0, u.count);
    t.forEach((x, f) => {
      let o = c.reduce(
        (R, p, L) => p < c[R] ? L : R,
        0
      ), m = u.width[o % u.count], w = e[f];
      w.top = c[o], w.left = u.left + (o ? O(u.width.slice(0, o)) : 0), w.width = m, w.height = x.height * (r.fixedHeight ? 1 : m / x.width), c[o] = c[o] + w.height;
    }), l.style.height = Math.max.apply(Math, c) + "px";
  }
  function i(l, r) {
    let t = l / r.lineGap, e;
    if (r.singleMaxWidth >= l)
      t = 1, e = Math.max(l, r.minLineGap);
    else {
      let s = r.maxLineGap * ~~t, d = r.minLineGap * ~~(t + 1), u = s >= l, c = d <= l;
      u && c ? (t = Math.round(t), e = l / t) : u ? (t = ~~t, e = l / t) : c ? (t = ~~(t + 1), e = l / t) : (t = ~~t, e = r.maxLineGap), t === 1 && (e = Math.min(l, r.singleMaxWidth), e = Math.max(e, r.minLineGap));
    }
    return {
      width: J(e, t),
      count: t,
      left: N(l, e * t, r.align)
    };
  }
  function a(l, r) {
    let t = O(r);
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
function N(n, i, a) {
  switch (a) {
    case "right":
      return n - i;
    case "center":
      return (n - i) / 2;
    default:
      return 0;
  }
}
function J(n, i) {
  let a = typeof n == "function" ? () => n() : () => n, l = [];
  for (let r = 0; r < i; r++)
    l[r] = a();
  return l;
}
function O(n) {
  return n.reduce((i, a) => i + a);
}
const z = Z(), B = "_wfMoveClass";
function q(n, i, a, l = !1) {
  n.addEventListener(i, a, l);
}
function st(n, i, a, l = !1) {
  n.removeEventListener(i, a, l);
}
function ot(n) {
  let i = n.target, a = i[B];
  a && ct(i, a);
}
function ct(n, i) {
  let a = new RegExp("\\s*\\b" + i + "\\b\\s*", "g"), l = M(n, "class").replace(a, " ").trim();
  M(n, "class", l);
}
function M(n, i, a) {
  if (typeof a < "u")
    n.setAttribute(i, a);
  else
    return n.getAttribute(i) || "";
}
function ut() {
  return window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 ? "webkitTransitionEnd" : "transitionend";
}
function ft(n, i) {
  return i !== n.clientWidth;
}
function ht(n, i, a) {
  let l = i.left - a.left, r = i.top - a.top, t = i.width / a.width, e = i.height / a.height;
  n.style.transform = n.style.WebkitTransform = `translate(${l}px,${r}px) scale(${t},${e})`, n.style.transitionDuration = "0s";
}
function dt(n, i) {
  if (!gt(n, i)) {
    let l = (M(n, "class").trim() + " " + i).trim();
    M(n, "class", l);
  }
}
function gt(n, i) {
  return new RegExp("\\b" + i + "\\b").test(M(n, "class"));
}
function xt(n) {
  n.style.transform = n.style.WebkitTransform = "", n.style.transitionDuration = "";
}
function mt(n) {
  const {
    autoResize: i = !0,
    interval: a = 200,
    align: l = "left",
    line: r = "v",
    lineGap: t = 200,
    minLineGap: e,
    maxLineGap: s,
    singleMaxWidth: d,
    grow: u,
    fixedHeight: c = !1,
    watch: x = {}
  } = n, f = C(null), o = C([]), m = C([]), [w, R] = k([]);
  function p() {
    if (!f.current) return;
    let h = f.current.clientWidth;
    R(() => {
      const v = Array.from(o.current).map(
        (g) => g.getMeta()
      );
      return v.sort((g, E) => g.order - E.order), m.current = v.map(() => ({})), j(f.current, v, m.current), setTimeout(() => {
        ft(f.current, h) && j(f.current, v, m.current), console.log(m.current), f.current.style.overflow = "hidden", L(m.current, v);
      }, 0), v;
    });
  }
  function L(h, v) {
    let g = v.filter((y) => y.moveClass), E = _(g);
    D(h, v);
    let W = _(g);
    g.forEach((y, P) => {
      y.node.current[B] = y.moveClass, ht(y.node.current, E[P], W[P]);
    }), g.forEach((y) => {
      dt(y.node.current, y.moveClass), xt(y.node.current);
    });
  }
  function D(h, v) {
    h.forEach((g, E) => {
      let W = v[E].node.current.style;
      o.current[E].setRect(g);
      for (let y in g)
        W[y] = g[y] + "px";
    });
  }
  function _(h) {
    return h.map((v, g) => o.current[g].getRect());
  }
  const F = C(null);
  function T() {
    clearTimeout(F.current), F.current = setTimeout(p, a);
  }
  const V = () => {
    q(f.current, ut(), ot, !0), Y(i);
  };
  function Y(h) {
    h === !1 || !h ? st(window, "resize", T, !1) : q(window, "resize", T, !1);
  }
  function U() {
    const h = s ? +s : t;
    return {
      align: ~["left", "right", "center"].indexOf(l) ? l : "left",
      line: ~["v", "h"].indexOf(r) ? r : "v",
      lineGap: +t,
      minLineGap: e ? +e : t,
      maxLineGap: h,
      singleMaxWidth: Math.max(d || 0, s),
      fixedHeight: !!c,
      grow: u && u.map((v) => +v)
    };
  }
  function j(h, v, g) {
    let E = U();
    (r === "h" ? lt : at).calculate(h, E, v, g);
  }
  S(() => {
    V(), T();
  }, []);
  const Q = K(() => n.children, [n.children]);
  S(() => {
    p();
  }, [Q]);
  const X = H.Children.map(n.children, (h, v) => H.cloneElement(h, {
    ref: (g) => {
      typeof h.ref == "function" ? h.ref(g) : h.ref && typeof h.ref != "function" && (h.ref.current = g), o.current[v] = g;
    }
  }));
  return /* @__PURE__ */ A.jsx("div", { className: "waterfall", ref: f, children: /* @__PURE__ */ A.jsx(z.Provider, { value: {
    reflow: p
  }, children: X }) });
}
const vt = tt((n, i) => {
  const { width: a, height: l, order: r, moveClass: t } = n, e = C(), [s, d] = k({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    order: r
  }), [u, c] = k(!1);
  et(z);
  const x = () => ({
    vm: e,
    node: e,
    order: r,
    width: a,
    height: l,
    moveClass: t
  }), f = () => {
    c(!0);
  };
  return S(() => {
    f();
  }, []), nt(i, () => ({
    getMeta: x,
    getRect: () => s,
    setRect: (o) => d(o)
  })), /* @__PURE__ */ A.jsx("div", { className: "waterfall-slot", ref: e, style: {
    visibility: u ? "visible" : "hidden"
  }, children: n.children });
}), pt = {
  Waterfall: mt,
  WaterfallSlot: vt
};
export {
  mt as Waterfall,
  vt as WaterfallSlot,
  pt as default
};
