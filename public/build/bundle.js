var CryptoWidget = (function () {
  "use strict";
  function t() {}
  function e(t) {
    return t();
  }
  function n() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(e);
  }
  function r(t) {
    return "function" == typeof t;
  }
  function l(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function i(t) {
    return null == t ? "" : t;
  }
  function c(t, e) {
    t.appendChild(e);
  }
  function u(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function a(t) {
    t.parentNode.removeChild(t);
  }
  function s(t) {
    return document.createElement(t);
  }
  function d(t) {
    return document.createTextNode(t);
  }
  function f(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function p(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  let h;
  function m(t) {
    h = t;
  }
  function g() {
    if (!h) throw new Error("Function called outside component initialization");
    return h;
  }
  const $ = [],
    y = [],
    v = [],
    b = [],
    x = Promise.resolve();
  let _ = !1;
  function C(t) {
    v.push(t);
  }
  let k = !1;
  const w = new Set();
  function q() {
    if (!k) {
      k = !0;
      do {
        for (let t = 0; t < $.length; t += 1) {
          const e = $[t];
          m(e), E(e.$$);
        }
        for (m(null), $.length = 0; y.length; ) y.pop()();
        for (let t = 0; t < v.length; t += 1) {
          const e = v[t];
          w.has(e) || (w.add(e), e());
        }
        v.length = 0;
      } while ($.length);
      for (; b.length; ) b.pop()();
      (_ = !1), (k = !1), w.clear();
    }
  }
  function E(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(C);
    }
  }
  const S = new Set();
  function N(t, e) {
    -1 === t.$$.dirty[0] &&
      ($.push(t), _ || ((_ = !0), x.then(q)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function T(l, i, c, u, s, d, f, p = [-1]) {
    const g = h;
    m(l);
    const $ = (l.$$ = {
      fragment: null,
      ctx: null,
      props: d,
      update: t,
      not_equal: s,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(g ? g.$$.context : i.context || []),
      callbacks: n(),
      dirty: p,
      skip_bound: !1,
      root: i.target || g.$$.root,
    });
    f && f($.root);
    let y = !1;
    if (
      (($.ctx = c
        ? c(l, i.props || {}, (t, e, ...n) => {
            const o = n.length ? n[0] : e;
            return (
              $.ctx &&
                s($.ctx[t], ($.ctx[t] = o)) &&
                (!$.skip_bound && $.bound[t] && $.bound[t](o), y && N(l, t)),
              e
            );
          })
        : []),
      $.update(),
      (y = !0),
      o($.before_update),
      ($.fragment = !!u && u($.ctx)),
      i.target)
    ) {
      if (i.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(i.target);
        $.fragment && $.fragment.l(t), t.forEach(a);
      } else $.fragment && $.fragment.c();
      i.intro && (v = l.$$.fragment) && v.i && (S.delete(v), v.i(b)),
        (function (t, n, l, i) {
          const {
            fragment: c,
            on_mount: u,
            on_destroy: a,
            after_update: s,
          } = t.$$;
          c && c.m(n, l),
            i ||
              C(() => {
                const n = u.map(e).filter(r);
                a ? a.push(...n) : o(n), (t.$$.on_mount = []);
              }),
            s.forEach(C);
        })(l, i.target, i.anchor, i.customElement),
        q();
    }
    var v, b;
    m(g);
  }
  function A(t, e, n) {
    const o = t.slice();
    return (o[9] = e[n]), o;
  }
  function O(t) {
    let e,
      n,
      o = t[3],
      r = [];
    for (let e = 0; e < o.length; e += 1) r[e] = B(A(t, o, e));
    return {
      c() {
        e = s("article");
        for (let t = 0; t < r.length; t += 1) r[t].c();
        f(
          e,
          "class",
          (n = i("result " + (t[2] ? "animation" : "")) + " svelte-1dtrq0t")
        );
      },
      m(t, n) {
        u(t, e, n);
        for (let t = 0; t < r.length; t += 1) r[t].m(e, null);
      },
      p(t, l) {
        if (8 & l) {
          let n;
          for (o = t[3], n = 0; n < o.length; n += 1) {
            const i = A(t, o, n);
            r[n] ? r[n].p(i, l) : ((r[n] = B(i)), r[n].c(), r[n].m(e, null));
          }
          for (; n < r.length; n += 1) r[n].d(1);
          r.length = o.length;
        }
        4 & l &&
          n !==
            (n =
              i("result " + (t[2] ? "animation" : "")) + " svelte-1dtrq0t") &&
          f(e, "class", n);
      },
      d(t) {
        t && a(e),
          (function (t, e) {
            for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
          })(r, t);
      },
    };
  }
  function j(e) {
    let n;
    return {
      c() {
        (n = s("div")), (n.textContent = "No data");
      },
      m(t, e) {
        u(t, n, e);
      },
      p: t,
      d(t) {
        t && a(n);
      },
    };
  }
  function B(t) {
    let e,
      n,
      o,
      r,
      l = t[9].label + "",
      i = U(t[9].value) + "";
    return {
      c() {
        (e = s("p")),
          (n = d(l)),
          (o = d(" ")),
          (r = d(i)),
          f(e, "class", "svelte-1dtrq0t");
      },
      m(t, l) {
        u(t, e, l), c(e, n), c(e, o), c(e, r);
      },
      p(t, e) {
        8 & e && l !== (l = t[9].label + "") && p(n, l),
          8 & e && i !== (i = U(t[9].value) + "") && p(r, i);
      },
      d(t) {
        t && a(e);
      },
    };
  }
  function I(e) {
    let n, o;
    function r(t, e) {
      return t[3] ? O : j;
    }
    let l = r(e),
      i = l(e);
    return {
      c() {
        (n = s("div")),
          i.c(),
          f(n, "class", "wrapper svelte-1dtrq0t"),
          f(n, "style", (o = `background-color: ${e[0]}; color: ${e[1]}`));
      },
      m(t, e) {
        u(t, n, e), i.m(n, null);
      },
      p(t, [e]) {
        l === (l = r(t)) && i
          ? i.p(t, e)
          : (i.d(1), (i = l(t)), i && (i.c(), i.m(n, null))),
          3 & e &&
            o !== (o = `background-color: ${t[0]}; color: ${t[1]}`) &&
            f(n, "style", o);
      },
      i: t,
      o: t,
      d(t) {
        t && a(n), i.d();
      },
    };
  }
  function U(t) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(t);
  }
  function F(t, e, n) {
    var o =
      (this && this.__awaiter) ||
      function (t, e, n, o) {
        return new (n || (n = Promise))(function (r, l) {
          function i(t) {
            try {
              u(o.next(t));
            } catch (t) {
              l(t);
            }
          }
          function c(t) {
            try {
              u(o.throw(t));
            } catch (t) {
              l(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? r(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(i, c);
          }
          u((o = o.apply(t, e || [])).next());
        });
      };
    let { coins: r = null } = e,
      { backgroundColor: l = "dodgerblue" } = e,
      { textColor: i = "white" } = e,
      { scroll: c = !0 } = e,
      u = null,
      a = null;
    function s() {
      (function () {
        return o(this, void 0, void 0, function* () {
          const t = `https://api.coingecko.com/api/v3/simple/price?ids=${r.reduce(
              (t, e) => t + e.id + "%2C",
              ""
            )}&vs_currencies=usd`,
            e = yield fetch(t),
            n = yield e.json();
          return r.map((t) => ({ label: t.label, value: n[t.id].usd }));
        });
      })().then((t) => {
        n(3, (u = t));
      });
    }
    var d;
    return (
      (d = () => {
        s(),
          (a = setInterval(() => {
            s();
          }, 5e3));
      }),
      g().$$.on_mount.push(d),
      (function (t) {
        g().$$.on_destroy.push(t);
      })(() => {
        clearInterval(a);
      }),
      (t.$$set = (t) => {
        "coins" in t && n(4, (r = t.coins)),
          "backgroundColor" in t && n(0, (l = t.backgroundColor)),
          "textColor" in t && n(1, (i = t.textColor)),
          "scroll" in t && n(2, (c = t.scroll));
      }),
      [l, i, c, u, r]
    );
  }
  !(function (t, e) {
    void 0 === e && (e = {});
    var n = e.insertAt;
    if (t && "undefined" != typeof document) {
      var o = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
      (r.type = "text/css"),
        "top" === n && o.firstChild
          ? o.insertBefore(r, o.firstChild)
          : o.appendChild(r),
        r.styleSheet
          ? (r.styleSheet.cssText = t)
          : r.appendChild(document.createTextNode(t));
    }
  })(
    '.wrapper.svelte-1dtrq0t{padding:10px;display:flex;overflow:hidden;align-items:center;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.result.svelte-1dtrq0t{display:inline-flex;align-items:center;gap:10px}p.svelte-1dtrq0t{padding:0;margin:0}.animation.svelte-1dtrq0t{white-space:none;animation:svelte-1dtrq0t-floatText 15s infinite linear;padding-left:100%}.animation.svelte-1dtrq0t:hover{animation-play-state:paused}@keyframes svelte-1dtrq0t-floatText{to{transform:translateX(-100%)}}'
  );
  return class extends class {
    $destroy() {
      !(function (t, e) {
        const n = t.$$;
        null !== n.fragment &&
          (o(n.on_destroy),
          n.fragment && n.fragment.d(e),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      })(this, 1),
        (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  } {
    constructor(t) {
      super(),
        T(this, t, F, I, l, {
          coins: 4,
          backgroundColor: 0,
          textColor: 1,
          scroll: 2,
        });
    }
  };
})();

export default CryptoWidget;
