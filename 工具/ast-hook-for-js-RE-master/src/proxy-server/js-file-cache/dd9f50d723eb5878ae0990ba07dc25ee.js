/*
 * anime.js v3.0.1
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function (n, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", e(), "assign") : "function" == typeof define && define.amd ? define(e) : n.anime = cc11001100_hook("n.anime", e(), "assign");
}(this, function () {
  "use strict";

  var n = cc11001100_hook("n", {
      update: cc11001100_hook("update", null, "object-key-init"),
      begin: cc11001100_hook("begin", null, "object-key-init"),
      loopBegin: cc11001100_hook("loopBegin", null, "object-key-init"),
      changeBegin: cc11001100_hook("changeBegin", null, "object-key-init"),
      change: cc11001100_hook("change", null, "object-key-init"),
      changeComplete: cc11001100_hook("changeComplete", null, "object-key-init"),
      loopComplete: cc11001100_hook("loopComplete", null, "object-key-init"),
      complete: cc11001100_hook("complete", null, "object-key-init"),
      loop: cc11001100_hook("loop", 1, "object-key-init"),
      direction: cc11001100_hook("direction", "normal", "object-key-init"),
      autoplay: cc11001100_hook("autoplay", !0, "object-key-init"),
      timelineOffset: cc11001100_hook("timelineOffset", 0, "object-key-init")
    }, "var-init"),
    e = cc11001100_hook("e", {
      duration: cc11001100_hook("duration", 1e3, "object-key-init"),
      delay: cc11001100_hook("delay", 0, "object-key-init"),
      endDelay: cc11001100_hook("endDelay", 0, "object-key-init"),
      easing: cc11001100_hook("easing", "easeOutElastic(1, .5)", "object-key-init"),
      round: cc11001100_hook("round", 0, "object-key-init")
    }, "var-init"),
    r = cc11001100_hook("r", ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"], "var-init"),
    t = cc11001100_hook("t", {
      CSS: {},
      springs: {}
    }, "var-init");
  function a(n, e, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return Math.min(Math.max(n, e), r);
  }
  function o(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return n.indexOf(e) > -1;
  }
  function i(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return n.apply(null, e);
  }
  var u = cc11001100_hook("u", {
    arr: function (n) {
      return Array.isArray(n);
    },
    obj: function (n) {
      return o(Object.prototype.toString.call(n), "Object");
    },
    pth: function (n) {
      return u.obj(n) && n.hasOwnProperty("totalLength");
    },
    svg: function (n) {
      return n instanceof SVGElement;
    },
    inp: function (n) {
      return n instanceof HTMLInputElement;
    },
    dom: function (n) {
      return n.nodeType || u.svg(n);
    },
    str: function (n) {
      return "string" == typeof n;
    },
    fnc: function (n) {
      return "function" == typeof n;
    },
    und: function (n) {
      return void 0 === n;
    },
    hex: function (n) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
    },
    rgb: function (n) {
      return /^rgb/.test(n);
    },
    hsl: function (n) {
      return /^hsl/.test(n);
    },
    col: function (n) {
      return u.hex(n) || u.rgb(n) || u.hsl(n);
    },
    key: function (r) {
      return !n.hasOwnProperty(r) && !e.hasOwnProperty(r) && "targets" !== r && "keyframes" !== r;
    }
  }, "var-init");
  function s(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", /\(([^)]+)\)/.exec(n), "var-init");
    return e ? e[1].split(",").map(function (n) {
      return parseFloat(n);
    }) : [];
  }
  function c(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", s(n), "var-init"),
      o = cc11001100_hook("o", a(u.und(r[0]) ? 1 : r[0], .1, 100), "var-init"),
      i = cc11001100_hook("i", a(u.und(r[1]) ? 100 : r[1], .1, 100), "var-init"),
      c = cc11001100_hook("c", a(u.und(r[2]) ? 10 : r[2], .1, 100), "var-init"),
      f = cc11001100_hook("f", a(u.und(r[3]) ? 0 : r[3], .1, 100), "var-init"),
      l = cc11001100_hook("l", Math.sqrt(i / o), "var-init"),
      d = cc11001100_hook("d", c / (2 * Math.sqrt(i * o)), "var-init"),
      p = cc11001100_hook("p", d < 1 ? l * Math.sqrt(1 - d * d) : 0, "var-init"),
      v = cc11001100_hook("v", 1, "var-init"),
      h = cc11001100_hook("h", d < 1 ? (d * l - f) / p : -f + l, "var-init");
    function g(n) {
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", e ? e * n / 1e3 : n, "var-init");
      return r = cc11001100_hook("r", d < 1 ? Math.exp(-r * d * l) * (v * Math.cos(p * r) + h * Math.sin(p * r)) : (v + h * r) * Math.exp(-r * l), "assign"), 0 === n || 1 === n ? n : 1 - r;
    }
    return e ? g : function () {
      var e = cc11001100_hook("e", t.springs[n], "var-init");
      if (e) return e;
      for (var r = cc11001100_hook("r", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init");;) if (1 === g(r += cc11001100_hook("r", 1 / 6, "assign"))) {
        if (++a >= 16) break;
      } else a = cc11001100_hook("a", 0, "assign");
      var o = cc11001100_hook("o", r * (1 / 6) * 1e3, "var-init");
      return t.springs[n] = cc11001100_hook("t.springs[n]", o, "assign"), o;
    };
  }
  function f(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    void 0 === n && (n = cc11001100_hook("n", 1, "assign")), void 0 === e && (e = cc11001100_hook("e", .5, "assign"));
    var r = cc11001100_hook("r", a(n, 1, 10), "var-init"),
      t = cc11001100_hook("t", a(e, .1, 2), "var-init");
    return function (n) {
      return 0 === n || 1 === n ? n : -r * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - t / (2 * Math.PI) * Math.asin(1 / r)) * (2 * Math.PI) / t);
    };
  }
  function l(n) {
    cc11001100_hook("n", n, "function-parameter");
    return void 0 === n && (n = cc11001100_hook("n", 10, "assign")), function (e) {
      return Math.round(e * n) * (1 / n);
    };
  }
  var d = cc11001100_hook("d", function () {
      var n = cc11001100_hook("n", 11, "var-init"),
        e = cc11001100_hook("e", 1 / (n - 1), "var-init");
      function r(n, e) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        return 1 - 3 * e + 3 * n;
      }
      function t(n, e) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        return 3 * e - 6 * n;
      }
      function a(n) {
        cc11001100_hook("n", n, "function-parameter");
        return 3 * n;
      }
      function o(n, e, o) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        return ((r(e, o) * n + t(e, o)) * n + a(e)) * n;
      }
      function i(n, e, o) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e);
      }
      return function (r, t, a, u) {
        if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
          var s = cc11001100_hook("s", new Float32Array(n), "var-init");
          if (r !== t || a !== u) for (var c = cc11001100_hook("c", 0, "var-init"); c < n; ++c) s[c] = cc11001100_hook("s[c]", o(c * e, r, a), "assign");
          return function (n) {
            return r === t && a === u ? n : 0 === n || 1 === n ? n : o(f(n), t, u);
          };
        }
        function f(t) {
          cc11001100_hook("t", t, "function-parameter");
          for (var u = cc11001100_hook("u", 0, "var-init"), c = cc11001100_hook("c", 1, "var-init"), f = cc11001100_hook("f", n - 1, "var-init"); c !== f && s[c] <= t; ++c) u += cc11001100_hook("u", e, "assign");
          var l = cc11001100_hook("l", u + (t - s[--c]) / (s[c + 1] - s[c]) * e, "var-init"),
            d = cc11001100_hook("d", i(l, r, a), "var-init");
          return d >= .001 ? function (n, e, r, t) {
            for (var a = cc11001100_hook("a", 0, "var-init"); a < 4; ++a) {
              var u = cc11001100_hook("u", i(e, r, t), "var-init");
              if (0 === u) return e;
              e -= cc11001100_hook("e", (o(e, r, t) - n) / u, "assign");
            }
            return e;
          }(t, l, r, a) : 0 === d ? l : function (n, e, r, t, a) {
            for (var i, u, s = cc11001100_hook("s", 0, "var-init"); (i = cc11001100_hook("i", o(u = cc11001100_hook("u", e + (r - e) / 2, "assign"), t, a) - n, "assign")) > 0 ? r = cc11001100_hook("r", u, "assign") : e = cc11001100_hook("e", u, "assign"), Math.abs(i) > 1e-7 && ++s < 10;);
            return u;
          }(t, u, u + e, r, a);
        }
      };
    }(), "var-init"),
    p = cc11001100_hook("p", function () {
      var n = cc11001100_hook("n", ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"], "var-init"),
        e = cc11001100_hook("e", {
          In: cc11001100_hook("In", [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], f], "object-key-init"),
          Out: cc11001100_hook("Out", [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (n, e) {
            return function (r) {
              return 1 - f(n, e)(1 - r);
            };
          }], "object-key-init"),
          InOut: cc11001100_hook("InOut", [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (n, e) {
            return function (r) {
              return r < .5 ? f(n, e)(2 * r) / 2 : 1 - f(n, e)(-2 * r + 2) / 2;
            };
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          linear: cc11001100_hook("linear", [.25, .25, .75, .75], "object-key-init")
        }, "var-init"),
        t = function (t) {
          e[t].forEach(function (e, a) {
            r["ease" + t + n[a]] = cc11001100_hook("r[\"ease\" + t + n[a]]", e, "assign");
          });
        };
      for (var a in e) t(a);
      return r;
    }(), "var-init");
  function v(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (u.fnc(n)) return n;
    var r = cc11001100_hook("r", n.split("(")[0], "var-init"),
      t = cc11001100_hook("t", p[r], "var-init"),
      a = cc11001100_hook("a", s(n), "var-init");
    switch (r) {
      case "spring":
        return c(n, e);
      case "cubicBezier":
        return i(d, a);
      case "steps":
        return i(l, a);
      default:
        return u.fnc(t) ? i(t, a) : i(d, t);
    }
  }
  function h(n) {
    cc11001100_hook("n", n, "function-parameter");
    try {
      return document.querySelectorAll(n);
    } catch (n) {
      return;
    }
  }
  function g(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var r = cc11001100_hook("r", n.length, "var-init"), t = cc11001100_hook("t", arguments.length >= 2 ? arguments[1] : void 0, "var-init"), a = cc11001100_hook("a", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < r; o++) if (o in n) {
      var i = cc11001100_hook("i", n[o], "var-init");
      e.call(t, i, o, n) && a.push(i);
    }
    return a;
  }
  function m(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n.reduce(function (n, e) {
      return n.concat(u.arr(e) ? m(e) : e);
    }, []);
  }
  function y(n) {
    cc11001100_hook("n", n, "function-parameter");
    return u.arr(n) ? n : (u.str(n) && (n = cc11001100_hook("n", h(n) || n, "assign")), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n]);
  }
  function b(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return n.some(function (n) {
      return n === e;
    });
  }
  function x(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init");
    for (var r in n) e[r] = cc11001100_hook("e[r]", n[r], "assign");
    return e;
  }
  function M(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", x(n), "var-init");
    for (var t in n) r[t] = cc11001100_hook("r[t]", e.hasOwnProperty(t) ? e[t] : n[t], "assign");
    return r;
  }
  function w(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", x(n), "var-init");
    for (var t in e) r[t] = cc11001100_hook("r[t]", u.und(n[t]) ? e[t] : n[t], "assign");
    return r;
  }
  function k(n) {
    cc11001100_hook("n", n, "function-parameter");
    return u.rgb(n) ? (r = cc11001100_hook("r", /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = cc11001100_hook("e", n, "assign")), "assign")) ? "rgba(" + r[1] + ",1)" : e : u.hex(n) ? (t = cc11001100_hook("t", n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, r, t) {
      return e + e + r + r + t + t;
    }), "assign"), a = cc11001100_hook("a", /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), "assign"), "rgba(" + parseInt(a[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)") : u.hsl(n) ? function (n) {
      var e,
        r,
        t,
        a = cc11001100_hook("a", /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n), "var-init"),
        o = cc11001100_hook("o", parseInt(a[1], 10) / 360, "var-init"),
        i = cc11001100_hook("i", parseInt(a[2], 10) / 100, "var-init"),
        u = cc11001100_hook("u", parseInt(a[3], 10) / 100, "var-init"),
        s = cc11001100_hook("s", a[4] || 1, "var-init");
      function c(n, e, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        return r < 0 && (r += cc11001100_hook("r", 1, "assign")), r > 1 && (r -= cc11001100_hook("r", 1, "assign")), r < 1 / 6 ? n + 6 * (e - n) * r : r < .5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n;
      }
      if (0 == i) e = cc11001100_hook("e", r = cc11001100_hook("r", t = cc11001100_hook("t", u, "assign"), "assign"), "assign");else {
        var f = cc11001100_hook("f", u < .5 ? u * (1 + i) : u + i - u * i, "var-init"),
          l = cc11001100_hook("l", 2 * u - f, "var-init");
        e = cc11001100_hook("e", c(l, f, o + 1 / 3), "assign"), r = cc11001100_hook("r", c(l, f, o), "assign"), t = cc11001100_hook("t", c(l, f, o - 1 / 3), "assign");
      }
      return "rgba(" + 255 * e + "," + 255 * r + "," + 255 * t + "," + s + ")";
    }(n) : void 0;
    var e, r, t, a;
  }
  function C(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n), "var-init");
    if (e) return e[2];
  }
  function O(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return u.fnc(n) ? n(e.target, e.id, e.total) : n;
  }
  function P(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return n.getAttribute(e);
  }
  function I(n, e, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (b([r, "deg", "rad", "turn"], C(e))) return e;
    var a = cc11001100_hook("a", t.CSS[e + r], "var-init");
    if (!u.und(a)) return a;
    var o = cc11001100_hook("o", document.createElement(n.tagName), "var-init"),
      i = cc11001100_hook("i", n.parentNode && n.parentNode !== document ? n.parentNode : document.body, "var-init");
    i.appendChild(o), o.style.position = cc11001100_hook("o.style.position", "absolute", "assign"), o.style.width = cc11001100_hook("o.style.width", 100 + r, "assign");
    var s = cc11001100_hook("s", 100 / o.offsetWidth, "var-init");
    i.removeChild(o);
    var c = cc11001100_hook("c", s * parseFloat(e), "var-init");
    return t.CSS[e + r] = cc11001100_hook("t.CSS[e + r]", c, "assign"), c;
  }
  function B(n, e, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (e in n.style) {
      var t = cc11001100_hook("t", e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), "var-init"),
        a = cc11001100_hook("a", n.style[e] || getComputedStyle(n).getPropertyValue(t) || "0", "var-init");
      return r ? I(n, a, r) : a;
    }
  }
  function D(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return u.dom(n) && !u.inp(n) && (P(n, e) || u.svg(n) && n[e]) ? "attribute" : u.dom(n) && b(r, e) ? "transform" : u.dom(n) && "transform" !== e && B(n, e) ? "css" : null != n[e] ? "object" : void 0;
  }
  function T(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (u.dom(n)) {
      for (var e, r = cc11001100_hook("r", n.style.transform || "", "var-init"), t = cc11001100_hook("t", /(\w+)\(([^)]*)\)/g, "var-init"), a = cc11001100_hook("a", new Map(), "var-init"); e = cc11001100_hook("e", t.exec(r), "assign");) a.set(e[1], e[2]);
      return a;
    }
  }
  function F(n, e, r, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var a,
      i = cc11001100_hook("i", o(e, "scale") ? 1 : 0 + (o(a = cc11001100_hook("a", e, "assign"), "translate") || "perspective" === a ? "px" : o(a, "rotate") || o(a, "skew") ? "deg" : void 0), "var-init"),
      u = cc11001100_hook("u", T(n).get(e) || i, "var-init");
    return r && (r.transforms.list.set(e, u), r.transforms.last = cc11001100_hook("r.transforms.last", e, "assign")), t ? I(n, u, t) : u;
  }
  function N(n, e, r, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    switch (D(n, e)) {
      case "transform":
        return F(n, e, t, r);
      case "css":
        return B(n, e, r);
      case "attribute":
        return P(n, e);
      default:
        return n[e] || 0;
    }
  }
  function A(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", /^(\*=|\+=|-=)/.exec(n), "var-init");
    if (!r) return n;
    var t = cc11001100_hook("t", C(n) || 0, "var-init"),
      a = cc11001100_hook("a", parseFloat(e), "var-init"),
      o = cc11001100_hook("o", parseFloat(n.replace(r[0], "")), "var-init");
    switch (r[0][0]) {
      case "+":
        return a + o + t;
      case "-":
        return a - o + t;
      case "*":
        return a * o + t;
    }
  }
  function E(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (u.col(n)) return k(n);
    var r = cc11001100_hook("r", C(n), "var-init"),
      t = cc11001100_hook("t", r ? n.substr(0, n.length - r.length) : n, "var-init");
    return e && !/\s/g.test(n) ? t + e : t;
  }
  function L(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
  }
  function S(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var e, r = cc11001100_hook("r", n.points, "var-init"), t = cc11001100_hook("t", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.numberOfItems; a++) {
      var o = cc11001100_hook("o", r.getItem(a), "var-init");
      a > 0 && (t += cc11001100_hook("t", L(e, o), "assign")), e = cc11001100_hook("e", o, "assign");
    }
    return t;
  }
  function j(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (n.getTotalLength) return n.getTotalLength();
    switch (n.tagName.toLowerCase()) {
      case "circle":
        return o = cc11001100_hook("o", n, "assign"), 2 * Math.PI * P(o, "r");
      case "rect":
        return 2 * P(a = cc11001100_hook("a", n, "assign"), "width") + 2 * P(a, "height");
      case "line":
        return L({
          x: cc11001100_hook("x", P(t = cc11001100_hook("t", n, "assign"), "x1"), "object-key-init"),
          y: cc11001100_hook("y", P(t, "y1"), "object-key-init")
        }, {
          x: cc11001100_hook("x", P(t, "x2"), "object-key-init"),
          y: cc11001100_hook("y", P(t, "y2"), "object-key-init")
        });
      case "polyline":
        return S(n);
      case "polygon":
        return r = cc11001100_hook("r", (e = cc11001100_hook("e", n, "assign")).points, "assign"), S(e) + L(r.getItem(r.numberOfItems - 1), r.getItem(0));
    }
    var e, r, t, a, o;
  }
  function q(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", e || {}, "var-init"),
      t = cc11001100_hook("t", r.el || function (n) {
        for (var e = cc11001100_hook("e", n.parentNode, "var-init"); u.svg(e) && (e = cc11001100_hook("e", e.parentNode, "assign"), u.svg(e.parentNode)););
        return e;
      }(n), "var-init"),
      a = cc11001100_hook("a", t.getBoundingClientRect(), "var-init"),
      o = cc11001100_hook("o", P(t, "viewBox"), "var-init"),
      i = cc11001100_hook("i", a.width, "var-init"),
      s = cc11001100_hook("s", a.height, "var-init"),
      c = cc11001100_hook("c", r.viewBox || (o ? o.split(" ") : [0, 0, i, s]), "var-init");
    return {
      el: cc11001100_hook("el", t, "object-key-init"),
      viewBox: cc11001100_hook("viewBox", c, "object-key-init"),
      x: cc11001100_hook("x", c[0] / 1, "object-key-init"),
      y: cc11001100_hook("y", c[1] / 1, "object-key-init"),
      w: cc11001100_hook("w", i / c[2], "object-key-init"),
      h: cc11001100_hook("h", s / c[3], "object-key-init")
    };
  }
  function $(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    function r(r) {
      cc11001100_hook("r", r, "function-parameter");
      void 0 === r && (r = cc11001100_hook("r", 0, "assign"));
      var t = cc11001100_hook("t", e + r >= 1 ? e + r : 0, "var-init");
      return n.el.getPointAtLength(t);
    }
    var t = cc11001100_hook("t", q(n.el, n.svg), "var-init"),
      a = cc11001100_hook("a", r(), "var-init"),
      o = cc11001100_hook("o", r(-1), "var-init"),
      i = cc11001100_hook("i", r(1), "var-init");
    switch (n.property) {
      case "x":
        return (a.x - t.x) * t.w;
      case "y":
        return (a.y - t.y) * t.h;
      case "angle":
        return 180 * Math.atan2(i.y - o.y, i.x - o.x) / Math.PI;
    }
  }
  function X(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", /-?\d*\.?\d+/g, "var-init"),
      t = cc11001100_hook("t", E(u.pth(n) ? n.totalLength : n, e) + "", "var-init");
    return {
      original: cc11001100_hook("original", t, "object-key-init"),
      numbers: cc11001100_hook("numbers", t.match(r) ? t.match(r).map(Number) : [0], "object-key-init"),
      strings: cc11001100_hook("strings", u.str(n) || e ? t.split(r) : [], "object-key-init")
    };
  }
  function Y(n) {
    cc11001100_hook("n", n, "function-parameter");
    return g(n ? m(u.arr(n) ? n.map(y) : y(n)) : [], function (n, e, r) {
      return r.indexOf(n) === e;
    });
  }
  function Z(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", Y(n), "var-init");
    return e.map(function (n, r) {
      return {
        target: cc11001100_hook("target", n, "object-key-init"),
        id: cc11001100_hook("id", r, "object-key-init"),
        total: cc11001100_hook("total", e.length, "object-key-init"),
        transforms: {
          list: cc11001100_hook("list", T(n), "object-key-init")
        }
      };
    });
  }
  function Q(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", x(e), "var-init");
    if (/^spring/.test(r.easing) && (r.duration = cc11001100_hook("r.duration", c(r.easing), "assign")), u.arr(n)) {
      var t = cc11001100_hook("t", n.length, "var-init");
      2 === t && !u.obj(n[0]) ? n = cc11001100_hook("n", {
        value: cc11001100_hook("value", n, "object-key-init")
      }, "assign") : u.fnc(e.duration) || (r.duration = cc11001100_hook("r.duration", e.duration / t, "assign"));
    }
    var a = cc11001100_hook("a", u.arr(n) ? n : [n], "var-init");
    return a.map(function (n, r) {
      var t = cc11001100_hook("t", u.obj(n) && !u.pth(n) ? n : {
        value: cc11001100_hook("value", n, "object-key-init")
      }, "var-init");
      return u.und(t.delay) && (t.delay = cc11001100_hook("t.delay", r ? 0 : e.delay, "assign")), u.und(t.endDelay) && (t.endDelay = cc11001100_hook("t.endDelay", r === a.length - 1 ? e.endDelay : 0, "assign")), t;
    }).map(function (n) {
      return w(n, r);
    });
  }
  function V(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", [], "var-init"),
      t = cc11001100_hook("t", e.keyframes, "var-init");
    for (var a in t && (e = cc11001100_hook("e", w(function (n) {
      for (var e = cc11001100_hook("e", g(m(n.map(function (n) {
          return Object.keys(n);
        })), function (n) {
          return u.key(n);
        }).reduce(function (n, e) {
          return n.indexOf(e) < 0 && n.push(e), n;
        }, []), "var-init"), r = cc11001100_hook("r", {}, "var-init"), t = function (t) {
          var a = cc11001100_hook("a", e[t], "var-init");
          r[a] = cc11001100_hook("r[a]", n.map(function (n) {
            var e = cc11001100_hook("e", {}, "var-init");
            for (var r in n) u.key(r) ? r == a && (e.value = cc11001100_hook("e.value", n[r], "assign")) : e[r] = cc11001100_hook("e[r]", n[r], "assign");
            return e;
          }), "assign");
        }, a = cc11001100_hook("a", 0, "var-init"); a < e.length; a++) t(a);
      return r;
    }(t), e), "assign")), e) u.key(a) && r.push({
      name: cc11001100_hook("name", a, "object-key-init"),
      tweens: cc11001100_hook("tweens", Q(e[a], n), "object-key-init")
    });
    return r;
  }
  function z(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r;
    return n.tweens.map(function (t) {
      var a = cc11001100_hook("a", function (n, e) {
          var r = cc11001100_hook("r", {}, "var-init");
          for (var t in n) {
            var a = cc11001100_hook("a", O(n[t], e), "var-init");
            u.arr(a) && 1 === (a = cc11001100_hook("a", a.map(function (n) {
              return O(n, e);
            }), "assign")).length && (a = cc11001100_hook("a", a[0], "assign")), r[t] = cc11001100_hook("r[t]", a, "assign");
          }
          return r.duration = cc11001100_hook("r.duration", parseFloat(r.duration), "assign"), r.delay = cc11001100_hook("r.delay", parseFloat(r.delay), "assign"), r;
        }(t, e), "var-init"),
        o = cc11001100_hook("o", a.value, "var-init"),
        i = cc11001100_hook("i", u.arr(o) ? o[1] : o, "var-init"),
        s = cc11001100_hook("s", C(i), "var-init"),
        c = cc11001100_hook("c", N(e.target, n.name, s, e), "var-init"),
        f = cc11001100_hook("f", r ? r.to.original : c, "var-init"),
        l = cc11001100_hook("l", u.arr(o) ? o[0] : f, "var-init"),
        d = cc11001100_hook("d", C(l) || C(c), "var-init"),
        p = cc11001100_hook("p", s || d, "var-init");
      return u.und(i) && (i = cc11001100_hook("i", f, "assign")), a.from = cc11001100_hook("a.from", X(l, p), "assign"), a.to = cc11001100_hook("a.to", X(A(i, l), p), "assign"), a.start = cc11001100_hook("a.start", r ? r.end : 0, "assign"), a.end = cc11001100_hook("a.end", a.start + a.delay + a.duration + a.endDelay, "assign"), a.easing = cc11001100_hook("a.easing", v(a.easing, a.duration), "assign"), a.isPath = cc11001100_hook("a.isPath", u.pth(o), "assign"), a.isColor = cc11001100_hook("a.isColor", u.col(a.from.original), "assign"), a.isColor && (a.round = cc11001100_hook("a.round", 1, "assign")), r = cc11001100_hook("r", a, "assign"), a;
    });
  }
  var H = cc11001100_hook("H", {
    css: function (n, e, r) {
      return n.style[e] = cc11001100_hook("n.style[e]", r, "assign");
    },
    attribute: function (n, e, r) {
      return n.setAttribute(e, r);
    },
    object: function (n, e, r) {
      return n[e] = cc11001100_hook("n[e]", r, "assign");
    },
    transform: function (n, e, r, t, a) {
      if (t.list.set(e, r), e === t.last || a) {
        var o = cc11001100_hook("o", "", "var-init");
        t.list.forEach(function (n, e) {
          o += cc11001100_hook("o", e + "(" + n + ") ", "assign");
        }), n.style.transform = cc11001100_hook("n.style.transform", o, "assign");
      }
    }
  }, "var-init");
  function G(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    Z(n).forEach(function (n) {
      for (var r in e) {
        var t = cc11001100_hook("t", O(e[r], n), "var-init"),
          a = cc11001100_hook("a", n.target, "var-init"),
          o = cc11001100_hook("o", C(t), "var-init"),
          i = cc11001100_hook("i", N(a, r, o, n), "var-init"),
          u = cc11001100_hook("u", A(E(t, o || C(i)), i), "var-init"),
          s = cc11001100_hook("s", D(a, r), "var-init");
        H[s](a, r, u, n.transforms, !0);
      }
    });
  }
  function R(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return g(m(n.map(function (n) {
      return e.map(function (e) {
        return function (n, e) {
          var r = cc11001100_hook("r", D(n.target, e.name), "var-init");
          if (r) {
            var t = cc11001100_hook("t", z(e, n), "var-init"),
              a = cc11001100_hook("a", t[t.length - 1], "var-init");
            return {
              type: cc11001100_hook("type", r, "object-key-init"),
              property: cc11001100_hook("property", e.name, "object-key-init"),
              animatable: cc11001100_hook("animatable", n, "object-key-init"),
              tweens: cc11001100_hook("tweens", t, "object-key-init"),
              duration: cc11001100_hook("duration", a.end, "object-key-init"),
              delay: cc11001100_hook("delay", t[0].delay, "object-key-init"),
              endDelay: cc11001100_hook("endDelay", a.endDelay, "object-key-init")
            };
          }
        }(n, e);
      });
    })), function (n) {
      return !u.und(n);
    });
  }
  function W(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", n.length, "var-init"),
      t = function (n) {
        return n.timelineOffset ? n.timelineOffset : 0;
      },
      a = cc11001100_hook("a", {}, "var-init");
    return a.duration = cc11001100_hook("a.duration", r ? Math.max.apply(Math, n.map(function (n) {
      return t(n) + n.duration;
    })) : e.duration, "assign"), a.delay = cc11001100_hook("a.delay", r ? Math.min.apply(Math, n.map(function (n) {
      return t(n) + n.delay;
    })) : e.delay, "assign"), a.endDelay = cc11001100_hook("a.endDelay", r ? a.duration - Math.max.apply(Math, n.map(function (n) {
      return t(n) + n.duration - n.endDelay;
    })) : e.endDelay, "assign"), a;
  }
  var J = cc11001100_hook("J", 0, "var-init");
  var K,
    U = cc11001100_hook("U", [], "var-init"),
    _ = cc11001100_hook("_", [], "var-init"),
    nn = cc11001100_hook("nn", function () {
      function n() {
        K = cc11001100_hook("K", requestAnimationFrame(e), "assign");
      }
      function e(e) {
        cc11001100_hook("e", e, "function-parameter");
        var r = cc11001100_hook("r", U.length, "var-init");
        if (r) {
          for (var t = cc11001100_hook("t", 0, "var-init"); t < r;) {
            var a = cc11001100_hook("a", U[t], "var-init");
            if (a.paused) {
              var o = cc11001100_hook("o", U.indexOf(a), "var-init");
              o > -1 && (U.splice(o, 1), r = cc11001100_hook("r", U.length, "assign"));
            } else a.tick(e);
            t++;
          }
          n();
        } else K = cc11001100_hook("K", cancelAnimationFrame(K), "assign");
      }
      return n;
    }(), "var-init");
  function en(r) {
    cc11001100_hook("r", r, "function-parameter");
    void 0 === r && (r = cc11001100_hook("r", {}, "assign"));
    var t,
      o = cc11001100_hook("o", 0, "var-init"),
      i = cc11001100_hook("i", 0, "var-init"),
      u = cc11001100_hook("u", 0, "var-init"),
      s = cc11001100_hook("s", 0, "var-init"),
      c = cc11001100_hook("c", null, "var-init");
    function f(n) {
      cc11001100_hook("n", n, "function-parameter");
      var e = cc11001100_hook("e", window.Promise && new Promise(function (n) {
        return c = cc11001100_hook("c", n, "assign");
      }), "var-init");
      return n.finished = cc11001100_hook("n.finished", e, "assign"), e;
    }
    var l,
      d,
      p,
      v,
      h,
      m,
      y,
      b,
      x = cc11001100_hook("x", (d = cc11001100_hook("d", M(n, l = cc11001100_hook("l", r, "assign")), "assign"), p = cc11001100_hook("p", M(e, l), "assign"), v = cc11001100_hook("v", V(p, l), "assign"), h = cc11001100_hook("h", Z(l.targets), "assign"), m = cc11001100_hook("m", R(h, v), "assign"), y = cc11001100_hook("y", W(m, p), "assign"), b = cc11001100_hook("b", J, "assign"), J++, w(d, {
        id: cc11001100_hook("id", b, "object-key-init"),
        children: cc11001100_hook("children", [], "object-key-init"),
        animatables: cc11001100_hook("animatables", h, "object-key-init"),
        animations: cc11001100_hook("animations", m, "object-key-init"),
        duration: cc11001100_hook("duration", y.duration, "object-key-init"),
        delay: cc11001100_hook("delay", y.delay, "object-key-init"),
        endDelay: cc11001100_hook("endDelay", y.endDelay, "object-key-init")
      })), "var-init");
    f(x);
    function k() {
      var n = cc11001100_hook("n", x.direction, "var-init");
      "alternate" !== n && (x.direction = cc11001100_hook("x.direction", "normal" !== n ? "normal" : "reverse", "assign")), x.reversed = cc11001100_hook("x.reversed", !x.reversed, "assign"), t.forEach(function (n) {
        return n.reversed = cc11001100_hook("n.reversed", x.reversed, "assign");
      });
    }
    function C(n) {
      cc11001100_hook("n", n, "function-parameter");
      return x.reversed ? x.duration - n : n;
    }
    function O() {
      o = cc11001100_hook("o", 0, "assign"), i = cc11001100_hook("i", C(x.currentTime) * (1 / en.speed), "assign");
    }
    function P(n, e) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      e && e.seek(n - e.timelineOffset);
    }
    function I(n) {
      cc11001100_hook("n", n, "function-parameter");
      for (var e = cc11001100_hook("e", 0, "var-init"), r = cc11001100_hook("r", x.animations, "var-init"), t = cc11001100_hook("t", r.length, "var-init"); e < t;) {
        var o = cc11001100_hook("o", r[e], "var-init"),
          i = cc11001100_hook("i", o.animatable, "var-init"),
          u = cc11001100_hook("u", o.tweens, "var-init"),
          s = cc11001100_hook("s", u.length - 1, "var-init"),
          c = cc11001100_hook("c", u[s], "var-init");
        s && (c = cc11001100_hook("c", g(u, function (e) {
          return n < e.end;
        })[0] || c, "assign"));
        for (var f = cc11001100_hook("f", a(n - c.start - c.delay, 0, c.duration) / c.duration, "var-init"), l = cc11001100_hook("l", isNaN(f) ? 1 : c.easing(f), "var-init"), d = cc11001100_hook("d", c.to.strings, "var-init"), p = cc11001100_hook("p", c.round, "var-init"), v = cc11001100_hook("v", [], "var-init"), h = cc11001100_hook("h", c.to.numbers.length, "var-init"), m = cc11001100_hook("m", void 0, "var-init"), y = cc11001100_hook("y", 0, "var-init"); y < h; y++) {
          var b = cc11001100_hook("b", void 0, "var-init"),
            M = cc11001100_hook("M", c.to.numbers[y], "var-init"),
            w = cc11001100_hook("w", c.from.numbers[y] || 0, "var-init");
          b = cc11001100_hook("b", c.isPath ? $(c.value, l * M) : w + l * (M - w), "assign"), p && (c.isColor && y > 2 || (b = cc11001100_hook("b", Math.round(b * p) / p, "assign"))), v.push(b);
        }
        var k = cc11001100_hook("k", d.length, "var-init");
        if (k) {
          m = cc11001100_hook("m", d[0], "assign");
          for (var C = cc11001100_hook("C", 0, "var-init"); C < k; C++) {
            d[C];
            var O = cc11001100_hook("O", d[C + 1], "var-init"),
              P = cc11001100_hook("P", v[C], "var-init");
            isNaN(P) || (m += cc11001100_hook("m", O ? P + O : P + " ", "assign"));
          }
        } else m = cc11001100_hook("m", v[0], "assign");
        H[o.type](i.target, o.property, m, i.transforms), o.currentValue = cc11001100_hook("o.currentValue", m, "assign"), e++;
      }
    }
    function B(n) {
      cc11001100_hook("n", n, "function-parameter");
      x[n] && !x.passThrough && x[n](x);
    }
    function D(n) {
      cc11001100_hook("n", n, "function-parameter");
      var e = cc11001100_hook("e", x.duration, "var-init"),
        r = cc11001100_hook("r", x.delay, "var-init"),
        l = cc11001100_hook("l", e - x.endDelay, "var-init"),
        d = cc11001100_hook("d", C(n), "var-init");
      x.progress = cc11001100_hook("x.progress", a(d / e * 100, 0, 100), "assign"), x.reversePlayback = cc11001100_hook("x.reversePlayback", d < x.currentTime, "assign"), t && function (n) {
        if (x.reversePlayback) for (var e = cc11001100_hook("e", s, "var-init"); e--;) P(n, t[e]);else for (var r = cc11001100_hook("r", 0, "var-init"); r < s; r++) P(n, t[r]);
      }(d), !x.began && x.currentTime > 0 && (x.began = cc11001100_hook("x.began", !0, "assign"), B("begin"), B("loopBegin")), d <= r && 0 !== x.currentTime && I(0), (d >= l && x.currentTime !== e || !e) && I(e), d > r && d < l ? (x.changeBegan || (x.changeBegan = cc11001100_hook("x.changeBegan", !0, "assign"), x.changeCompleted = cc11001100_hook("x.changeCompleted", !1, "assign"), B("changeBegin")), B("change"), I(d)) : x.changeBegan && (x.changeCompleted = cc11001100_hook("x.changeCompleted", !0, "assign"), x.changeBegan = cc11001100_hook("x.changeBegan", !1, "assign"), B("changeComplete")), x.currentTime = cc11001100_hook("x.currentTime", a(d, 0, e), "assign"), x.began && B("update"), n >= e && (i = cc11001100_hook("i", 0, "assign"), x.remaining && !0 !== x.remaining && x.remaining--, x.remaining ? (o = cc11001100_hook("o", u, "assign"), B("loopComplete"), B("loopBegin"), "alternate" === x.direction && k()) : (x.paused = cc11001100_hook("x.paused", !0, "assign"), x.completed || (x.completed = cc11001100_hook("x.completed", !0, "assign"), B("loopComplete"), B("complete"), !x.passThrough && "Promise" in window && (c(), f(x)))));
    }
    return x.reset = cc11001100_hook("x.reset", function () {
      var n = cc11001100_hook("n", x.direction, "var-init");
      x.passThrough = cc11001100_hook("x.passThrough", !1, "assign"), x.currentTime = cc11001100_hook("x.currentTime", 0, "assign"), x.progress = cc11001100_hook("x.progress", 0, "assign"), x.paused = cc11001100_hook("x.paused", !0, "assign"), x.began = cc11001100_hook("x.began", !1, "assign"), x.changeBegan = cc11001100_hook("x.changeBegan", !1, "assign"), x.completed = cc11001100_hook("x.completed", !1, "assign"), x.changeCompleted = cc11001100_hook("x.changeCompleted", !1, "assign"), x.reversePlayback = cc11001100_hook("x.reversePlayback", !1, "assign"), x.reversed = cc11001100_hook("x.reversed", "reverse" === n, "assign"), x.remaining = cc11001100_hook("x.remaining", x.loop, "assign"), t = cc11001100_hook("t", x.children, "assign");
      for (var e = cc11001100_hook("e", s = cc11001100_hook("s", t.length, "assign"), "var-init"); e--;) x.children[e].reset();
      (x.reversed && !0 !== x.loop || "alternate" === n && 1 === x.loop) && x.remaining++, I(0);
    }, "assign"), x.set = cc11001100_hook("x.set", function (n, e) {
      return G(n, e), x;
    }, "assign"), x.tick = cc11001100_hook("x.tick", function (n) {
      u = cc11001100_hook("u", n, "assign"), o || (o = cc11001100_hook("o", u, "assign")), D((u + (i - o)) * en.speed);
    }, "assign"), x.seek = cc11001100_hook("x.seek", function (n) {
      D(C(n));
    }, "assign"), x.pause = cc11001100_hook("x.pause", function () {
      x.paused = cc11001100_hook("x.paused", !0, "assign"), O();
    }, "assign"), x.play = cc11001100_hook("x.play", function () {
      x.paused && (x.completed && x.reset(), x.paused = cc11001100_hook("x.paused", !1, "assign"), U.push(x), O(), K || nn());
    }, "assign"), x.reverse = cc11001100_hook("x.reverse", function () {
      k(), O();
    }, "assign"), x.restart = cc11001100_hook("x.restart", function () {
      x.reset(), x.play();
    }, "assign"), x.reset(), x.autoplay && x.play(), x;
  }
  function rn(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var r = cc11001100_hook("r", e.length, "var-init"); r--;) b(n, e[r].animatable.target) && e.splice(r, 1);
  }
  return "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
    document.hidden ? (U.forEach(function (n) {
      return n.pause();
    }), _ = cc11001100_hook("_", U.slice(0), "assign"), U = cc11001100_hook("U", [], "assign")) : _.forEach(function (n) {
      return n.play();
    });
  }), en.version = cc11001100_hook("en.version", "3.0.1", "assign"), en.speed = cc11001100_hook("en.speed", 1, "assign"), en.running = cc11001100_hook("en.running", U, "assign"), en.remove = cc11001100_hook("en.remove", function (n) {
    for (var e = cc11001100_hook("e", Y(n), "var-init"), r = cc11001100_hook("r", U.length, "var-init"); r--;) {
      var t = cc11001100_hook("t", U[r], "var-init"),
        a = cc11001100_hook("a", t.animations, "var-init"),
        o = cc11001100_hook("o", t.children, "var-init");
      rn(e, a);
      for (var i = cc11001100_hook("i", o.length, "var-init"); i--;) {
        var u = cc11001100_hook("u", o[i], "var-init"),
          s = cc11001100_hook("s", u.animations, "var-init");
        rn(e, s), s.length || u.children.length || o.splice(i, 1);
      }
      a.length || o.length || t.pause();
    }
  }, "assign"), en.get = cc11001100_hook("en.get", N, "assign"), en.set = cc11001100_hook("en.set", G, "assign"), en.convertPx = cc11001100_hook("en.convertPx", I, "assign"), en.path = cc11001100_hook("en.path", function (n, e) {
    var r = cc11001100_hook("r", u.str(n) ? h(n)[0] : n, "var-init"),
      t = cc11001100_hook("t", e || 100, "var-init");
    return function (n) {
      return {
        property: cc11001100_hook("property", n, "object-key-init"),
        el: cc11001100_hook("el", r, "object-key-init"),
        svg: cc11001100_hook("svg", q(r), "object-key-init"),
        totalLength: cc11001100_hook("totalLength", j(r) * (t / 100), "object-key-init")
      };
    };
  }, "assign"), en.setDashoffset = cc11001100_hook("en.setDashoffset", function (n) {
    var e = cc11001100_hook("e", j(n), "var-init");
    return n.setAttribute("stroke-dasharray", e), e;
  }, "assign"), en.stagger = cc11001100_hook("en.stagger", function (n, e) {
    void 0 === e && (e = cc11001100_hook("e", {}, "assign"));
    var r = cc11001100_hook("r", e.direction || "normal", "var-init"),
      t = cc11001100_hook("t", e.easing ? v(e.easing) : null, "var-init"),
      a = cc11001100_hook("a", e.grid, "var-init"),
      o = cc11001100_hook("o", e.axis, "var-init"),
      i = cc11001100_hook("i", e.from || 0, "var-init"),
      s = cc11001100_hook("s", "first" === i, "var-init"),
      c = cc11001100_hook("c", "center" === i, "var-init"),
      f = cc11001100_hook("f", "last" === i, "var-init"),
      l = cc11001100_hook("l", u.arr(n), "var-init"),
      d = cc11001100_hook("d", l ? parseFloat(n[0]) : parseFloat(n), "var-init"),
      p = cc11001100_hook("p", l ? parseFloat(n[1]) : 0, "var-init"),
      h = cc11001100_hook("h", C(l ? n[1] : n) || 0, "var-init"),
      g = cc11001100_hook("g", e.start || 0 + (l ? d : 0), "var-init"),
      m = cc11001100_hook("m", [], "var-init"),
      y = cc11001100_hook("y", 0, "var-init");
    return function (n, e, u) {
      if (s && (i = cc11001100_hook("i", 0, "assign")), c && (i = cc11001100_hook("i", (u - 1) / 2, "assign")), f && (i = cc11001100_hook("i", u - 1, "assign")), !m.length) {
        for (var v = cc11001100_hook("v", 0, "var-init"); v < u; v++) {
          if (a) {
            var b = cc11001100_hook("b", c ? (a[0] - 1) / 2 : i % a[0], "var-init"),
              x = cc11001100_hook("x", c ? (a[1] - 1) / 2 : Math.floor(i / a[0]), "var-init"),
              M = cc11001100_hook("M", b - v % a[0], "var-init"),
              w = cc11001100_hook("w", x - Math.floor(v / a[0]), "var-init"),
              k = cc11001100_hook("k", Math.sqrt(M * M + w * w), "var-init");
            "x" === o && (k = cc11001100_hook("k", -M, "assign")), "y" === o && (k = cc11001100_hook("k", -w, "assign")), m.push(k);
          } else m.push(Math.abs(i - v));
          y = cc11001100_hook("y", Math.max.apply(Math, m), "assign");
        }
        t && (m = cc11001100_hook("m", m.map(function (n) {
          return t(n / y) * y;
        }), "assign")), "reverse" === r && (m = cc11001100_hook("m", m.map(function (n) {
          return o ? n < 0 ? -1 * n : -n : Math.abs(y - n);
        }), "assign"));
      }
      return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h;
    };
  }, "assign"), en.timeline = cc11001100_hook("en.timeline", function (n) {
    void 0 === n && (n = cc11001100_hook("n", {}, "assign"));
    var r = cc11001100_hook("r", en(n), "var-init");
    return r.duration = cc11001100_hook("r.duration", 0, "assign"), r.add = cc11001100_hook("r.add", function (t, a) {
      var o = cc11001100_hook("o", U.indexOf(r), "var-init"),
        i = cc11001100_hook("i", r.children, "var-init");
      function s(n) {
        cc11001100_hook("n", n, "function-parameter");
        n.passThrough = cc11001100_hook("n.passThrough", !0, "assign");
      }
      o > -1 && U.splice(o, 1);
      for (var c = cc11001100_hook("c", 0, "var-init"); c < i.length; c++) s(i[c]);
      var f = cc11001100_hook("f", w(t, M(e, n)), "var-init");
      f.targets = cc11001100_hook("f.targets", f.targets || n.targets, "assign");
      var l = cc11001100_hook("l", r.duration, "var-init");
      f.autoplay = cc11001100_hook("f.autoplay", !1, "assign"), f.direction = cc11001100_hook("f.direction", r.direction, "assign"), f.timelineOffset = cc11001100_hook("f.timelineOffset", u.und(a) ? l : A(a, l), "assign"), s(r), r.seek(f.timelineOffset);
      var d = cc11001100_hook("d", en(f), "var-init");
      s(d), i.push(d);
      var p = cc11001100_hook("p", W(i, n), "var-init");
      return r.delay = cc11001100_hook("r.delay", p.delay, "assign"), r.endDelay = cc11001100_hook("r.endDelay", p.endDelay, "assign"), r.duration = cc11001100_hook("r.duration", p.duration, "assign"), r.seek(0), r.reset(), r.autoplay && r.play(), r;
    }, "assign"), r;
  }, "assign"), en.easing = cc11001100_hook("en.easing", v, "assign"), en.penner = cc11001100_hook("en.penner", p, "assign"), en.random = cc11001100_hook("en.random", function (n, e) {
    return Math.floor(Math.random() * (e - n + 1)) + n;
  }, "assign"), en;
});