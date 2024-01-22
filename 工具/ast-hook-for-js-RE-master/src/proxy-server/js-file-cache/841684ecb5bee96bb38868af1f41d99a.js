/*! @license ScrollReveal v4.0.0

	Copyright 2018 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
var ScrollReveal = cc11001100_hook("ScrollReveal", function () {
  "use strict";

  var r = cc11001100_hook("r", {
      delay: cc11001100_hook("delay", 0, "object-key-init"),
      distance: cc11001100_hook("distance", "0", "object-key-init"),
      duration: cc11001100_hook("duration", 600, "object-key-init"),
      easing: cc11001100_hook("easing", "cubic-bezier(0.5, 0, 0, 1)", "object-key-init"),
      interval: cc11001100_hook("interval", 0, "object-key-init"),
      opacity: cc11001100_hook("opacity", 0, "object-key-init"),
      origin: cc11001100_hook("origin", "bottom", "object-key-init"),
      rotate: {
        x: cc11001100_hook("x", 0, "object-key-init"),
        y: cc11001100_hook("y", 0, "object-key-init"),
        z: cc11001100_hook("z", 0, "object-key-init")
      },
      scale: cc11001100_hook("scale", 1, "object-key-init"),
      cleanup: cc11001100_hook("cleanup", !0, "object-key-init"),
      container: cc11001100_hook("container", document.documentElement, "object-key-init"),
      desktop: cc11001100_hook("desktop", !0, "object-key-init"),
      mobile: cc11001100_hook("mobile", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !1, "object-key-init"),
      useDelay: cc11001100_hook("useDelay", "always", "object-key-init"),
      viewFactor: cc11001100_hook("viewFactor", 0, "object-key-init"),
      viewOffset: {
        top: cc11001100_hook("top", 0, "object-key-init"),
        right: cc11001100_hook("right", 0, "object-key-init"),
        bottom: cc11001100_hook("bottom", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      },
      afterReset: function () {},
      afterReveal: function () {},
      beforeReset: function () {},
      beforeReveal: function () {}
    }, "var-init"),
    n = cc11001100_hook("n", {
      clean: function () {},
      destroy: function () {},
      reveal: function () {},
      sync: function () {},
      get noop() {
        return !0;
      }
    }, "var-init");
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
  }
  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (void 0 === t && (t = cc11001100_hook("t", document, "assign")), e instanceof Array) return e.filter(o);
    if (o(e)) return [e];
    if (n = cc11001100_hook("n", e, "assign"), i = cc11001100_hook("i", Object.prototype.toString.call(n), "assign"), "object" == typeof window.NodeList ? n instanceof window.NodeList : null !== n && "object" == typeof n && "number" == typeof n.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(i) && (0 === n.length || o(n[0]))) return Array.prototype.slice.call(e);
    var n, i;
    if ("string" == typeof e) try {
      var r = cc11001100_hook("r", t.querySelectorAll(e), "var-init");
      return Array.prototype.slice.call(r);
    } catch (e) {
      return [];
    }
    return [];
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e));
  }
  function f(n, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    if (s(n)) return Object.keys(n).forEach(function (e) {
      return i(n[e], e, n);
    });
    if (n instanceof Array) return n.forEach(function (e, t) {
      return i(e, t, n);
    });
    throw new TypeError("Expected either an array or object literal.");
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", arguments.length - 1, "var-init"); 0 < n--;) t[n] = cc11001100_hook("t[n]", arguments[n + 1], "assign");
    if (this.constructor.debug && console) {
      var i = cc11001100_hook("i", "%cScrollReveal: " + e, "var-init");
      t.forEach(function (e) {
        return i += cc11001100_hook("i", "\n — " + e, "assign");
      }), console.log(i, "color: #ea654b;");
    }
  }
  function t() {
    var n = cc11001100_hook("n", this, "var-init"),
      i = cc11001100_hook("i", {
        active: cc11001100_hook("active", [], "object-key-init"),
        stale: cc11001100_hook("stale", [], "object-key-init")
      }, "var-init"),
      t = cc11001100_hook("t", {
        active: cc11001100_hook("active", [], "object-key-init"),
        stale: cc11001100_hook("stale", [], "object-key-init")
      }, "var-init"),
      r = cc11001100_hook("r", {
        active: cc11001100_hook("active", [], "object-key-init"),
        stale: cc11001100_hook("stale", [], "object-key-init")
      }, "var-init");
    try {
      f(u("[data-sr-id]"), function (e) {
        var t = cc11001100_hook("t", parseInt(e.getAttribute("data-sr-id")), "var-init");
        i.active.push(t);
      });
    } catch (e) {
      throw e;
    }
    f(this.store.elements, function (e) {
      -1 === i.active.indexOf(e.id) && i.stale.push(e.id);
    }), f(i.stale, function (e) {
      return delete n.store.elements[e];
    }), f(this.store.elements, function (e) {
      -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === t.active.indexOf(e.sequence.id) && t.active.push(e.sequence.id);
    }), f(this.store.containers, function (e) {
      -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
    }), f(r.stale, function (e) {
      var t = cc11001100_hook("t", n.store.containers[e].node, "var-init");
      t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate), delete n.store.containers[e];
    }), f(this.store.sequences, function (e) {
      -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
    }), f(t.stale, function (e) {
      return delete n.store.sequences[e];
    });
  }
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    var i,
      r = cc11001100_hook("r", this, "var-init");
    try {
      f(u(e), function (e) {
        var t = cc11001100_hook("t", e.getAttribute("data-sr-id"), "var-init");
        if (null !== t) {
          i = cc11001100_hook("i", !0, "assign");
          var n = cc11001100_hook("n", r.store.elements[t], "var-init");
          n.callbackTimer && window.clearTimeout(n.callbackTimer.clock), e.setAttribute("style", n.styles.inline.generated), e.removeAttribute("data-sr-id"), delete r.store.elements[t];
        }
      });
    } catch (e) {
      return h.call(this, "Clean failed.", e.message);
    }
    if (i) try {
      t.call(this);
    } catch (e) {
      return h.call(this, "Clean failed.", e.message);
    }
  }
  function N(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e.constructor !== Array) throw new TypeError("Expected array.");
    if (16 === e.length) return e;
    if (6 === e.length) {
      var t = cc11001100_hook("t", z(), "var-init");
      return t[0] = cc11001100_hook("t[0]", e[0], "assign"), t[1] = cc11001100_hook("t[1]", e[1], "assign"), t[4] = cc11001100_hook("t[4]", e[2], "assign"), t[5] = cc11001100_hook("t[5]", e[3], "assign"), t[12] = cc11001100_hook("t[12]", e[4], "assign"), t[13] = cc11001100_hook("t[13]", e[5], "assign"), t;
    }
    throw new RangeError("Expected array with either 6 or 16 values.");
  }
  function z() {
    for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
    return e;
  }
  function F(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", N(e), "var-init"), i = cc11001100_hook("i", N(t), "var-init"), r = cc11001100_hook("r", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < 4; o++) for (var s = cc11001100_hook("s", [n[o], n[o + 4], n[o + 8], n[o + 12]], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < 4; a++) {
      var c = cc11001100_hook("c", 4 * a, "var-init"),
        l = cc11001100_hook("l", [i[c], i[c + 1], i[c + 2], i[c + 3]], "var-init"),
        d = cc11001100_hook("d", s[0] * l[0] + s[1] * l[1] + s[2] * l[2] + s[3] * l[3], "var-init");
      r[o + c] = cc11001100_hook("r[o + c]", d, "assign");
    }
    return r;
  }
  function D(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", z(), "var-init");
    return n[0] = cc11001100_hook("n[0]", e, "assign"), n[5] = cc11001100_hook("n[5]", "number" == typeof t ? t : e, "assign"), n;
  }
  var S = cc11001100_hook("S", function () {
    var n = cc11001100_hook("n", {}, "var-init"),
      i = cc11001100_hook("i", document.documentElement.style, "var-init");
    function e(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (void 0 === t && (t = cc11001100_hook("t", i, "assign")), e && "string" == typeof e) {
        if (n[e]) return n[e];
        if ("string" == typeof t[e]) return n[e] = cc11001100_hook("n[e]", e, "assign");
        if ("string" == typeof t["-webkit-" + e]) return n[e] = cc11001100_hook("n[e]", "-webkit-" + e, "assign");
        throw new RangeError('Unable to find "' + e + '" style property.');
      }
      throw new TypeError("Expected a string.");
    }
    return e.clearCache = cc11001100_hook("e.clearCache", function () {
      return n = cc11001100_hook("n", {}, "assign");
    }, "assign"), e;
  }(), "var-init");
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", window.getComputedStyle(e.node), "var-init"),
      n = cc11001100_hook("n", t.position, "var-init"),
      i = cc11001100_hook("i", e.config, "var-init"),
      r = cc11001100_hook("r", {}, "var-init"),
      o = cc11001100_hook("o", (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [], "var-init");
    r.computed = cc11001100_hook("r.computed", o ? o.map(function (e) {
      return e.trim();
    }).join("; ") + ";" : "", "assign"), r.generated = cc11001100_hook("r.generated", o.some(function (e) {
      return e.match(/visibility\s?:\s?visible/i);
    }) ? r.computed : o.concat(["visibility: visible"]).map(function (e) {
      return e.trim();
    }).join("; ") + ";", "assign");
    var s,
      a,
      c,
      l,
      d,
      u,
      f,
      h,
      p,
      m,
      y,
      v,
      g,
      b = cc11001100_hook("b", parseFloat(t.opacity), "var-init"),
      w = cc11001100_hook("w", isNaN(parseFloat(i.opacity)) ? parseFloat(t.opacity) : parseFloat(i.opacity), "var-init"),
      E = cc11001100_hook("E", {
        computed: cc11001100_hook("computed", b !== w ? "opacity: " + b + ";" : "", "object-key-init"),
        generated: cc11001100_hook("generated", b !== w ? "opacity: " + w + ";" : "", "object-key-init")
      }, "var-init"),
      j = cc11001100_hook("j", [], "var-init");
    if (parseFloat(i.distance)) {
      var T = cc11001100_hook("T", "top" === i.origin || "bottom" === i.origin ? "Y" : "X", "var-init"),
        O = cc11001100_hook("O", i.distance, "var-init");
      "top" !== i.origin && "left" !== i.origin || (O = cc11001100_hook("O", /^-/.test(O) ? O.substr(1) : "-" + O, "assign"));
      var k = cc11001100_hook("k", O.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g), "var-init"),
        x = cc11001100_hook("x", k[0], "var-init");
      switch (k[1]) {
        case "em":
          O = cc11001100_hook("O", parseInt(t.fontSize) * x, "assign");
          break;
        case "px":
          O = cc11001100_hook("O", x, "assign");
          break;
        case "%":
          O = cc11001100_hook("O", "Y" === T ? e.node.getBoundingClientRect().height * x / 100 : e.node.getBoundingClientRect().width * x / 100, "assign");
          break;
        default:
          throw new RangeError("Unrecognized or missing distance unit.");
      }
      "Y" === T ? j.push((c = cc11001100_hook("c", O, "assign"), (l = cc11001100_hook("l", z(), "assign"))[13] = cc11001100_hook("(l = z())[13]", c, "assign"), l)) : j.push((s = cc11001100_hook("s", O, "assign"), (a = cc11001100_hook("a", z(), "assign"))[12] = cc11001100_hook("(a = z())[12]", s, "assign"), a));
    }
    i.rotate.x && j.push((d = cc11001100_hook("d", i.rotate.x, "assign"), u = cc11001100_hook("u", Math.PI / 180 * d, "assign"), (f = cc11001100_hook("f", z(), "assign"))[5] = cc11001100_hook("(f = z())[5]", f[10] = cc11001100_hook("f[10]", Math.cos(u), "assign"), "assign"), f[6] = cc11001100_hook("f[6]", f[9] = cc11001100_hook("f[9]", Math.sin(u), "assign"), "assign"), f[9] *= cc11001100_hook("f[9]", -1, "assign"), f)), i.rotate.y && j.push((h = cc11001100_hook("h", i.rotate.y, "assign"), p = cc11001100_hook("p", Math.PI / 180 * h, "assign"), (m = cc11001100_hook("m", z(), "assign"))[0] = cc11001100_hook("(m = z())[0]", m[10] = cc11001100_hook("m[10]", Math.cos(p), "assign"), "assign"), m[2] = cc11001100_hook("m[2]", m[8] = cc11001100_hook("m[8]", Math.sin(p), "assign"), "assign"), m[2] *= cc11001100_hook("m[2]", -1, "assign"), m)), i.rotate.z && j.push((y = cc11001100_hook("y", i.rotate.z, "assign"), v = cc11001100_hook("v", Math.PI / 180 * y, "assign"), (g = cc11001100_hook("g", z(), "assign"))[0] = cc11001100_hook("(g = z())[0]", g[5] = cc11001100_hook("g[5]", Math.cos(v), "assign"), "assign"), g[1] = cc11001100_hook("g[1]", g[4] = cc11001100_hook("g[4]", Math.sin(v), "assign"), "assign"), g[4] *= cc11001100_hook("g[4]", -1, "assign"), g)), 1 !== i.scale && (0 === i.scale ? j.push(D(2e-4)) : j.push(D(i.scale)));
    var A = cc11001100_hook("A", {}, "var-init");
    if (j.length) {
      A.property = cc11001100_hook("A.property", S("transform"), "assign"), A.computed = cc11001100_hook("A.computed", {
        raw: cc11001100_hook("raw", t[A.property], "object-key-init"),
        matrix: cc11001100_hook("matrix", function (e) {
          if ("string" == typeof e) {
            var t = cc11001100_hook("t", e.match(/matrix(3d)?\(([^)]+)\)/), "var-init");
            if (t) return N(t[2].split(", ").map(parseFloat));
          }
          return z();
        }(t[A.property]), "object-key-init")
      }, "assign"), j.unshift(A.computed.matrix);
      var R = cc11001100_hook("R", j.reduce(F), "var-init");
      A.generated = cc11001100_hook("A.generated", {
        initial: cc11001100_hook("initial", A.property + ": matrix3d(" + R.join(", ") + ");", "object-key-init"),
        final: cc11001100_hook("final", A.property + ": matrix3d(" + A.computed.matrix.join(", ") + ");", "object-key-init")
      }, "assign");
    } else A.generated = cc11001100_hook("A.generated", {
      initial: cc11001100_hook("initial", "", "object-key-init"),
      final: cc11001100_hook("final", "", "object-key-init")
    }, "assign");
    var q = cc11001100_hook("q", {}, "var-init");
    if (E.generated || A.generated.initial) {
      q.property = cc11001100_hook("q.property", S("transition"), "assign"), q.computed = cc11001100_hook("q.computed", t[q.property], "assign"), q.fragments = cc11001100_hook("q.fragments", [], "assign");
      var P = cc11001100_hook("P", i.delay, "var-init"),
        I = cc11001100_hook("I", i.duration, "var-init"),
        L = cc11001100_hook("L", i.easing, "var-init");
      E.generated && q.fragments.push({
        delayed: cc11001100_hook("delayed", "opacity " + I / 1e3 + "s " + L + " " + P / 1e3 + "s", "object-key-init"),
        instant: cc11001100_hook("instant", "opacity " + I / 1e3 + "s " + L + " 0s", "object-key-init")
      }), A.generated.initial && q.fragments.push({
        delayed: cc11001100_hook("delayed", A.property + " " + I / 1e3 + "s " + L + " " + P / 1e3 + "s", "object-key-init"),
        instant: cc11001100_hook("instant", A.property + " " + I / 1e3 + "s " + L + " 0s", "object-key-init")
      }), q.computed && !q.computed.match(/all 0s/) && q.fragments.unshift({
        delayed: cc11001100_hook("delayed", q.computed, "object-key-init"),
        instant: cc11001100_hook("instant", q.computed, "object-key-init")
      });
      var M = cc11001100_hook("M", q.fragments.reduce(function (e, t, n) {
        return e.delayed += cc11001100_hook("e.delayed", 0 === n ? t.delayed : ", " + t.delayed, "assign"), e.instant += cc11001100_hook("e.instant", 0 === n ? t.instant : ", " + t.instant, "assign"), e;
      }, {
        delayed: cc11001100_hook("delayed", "", "object-key-init"),
        instant: cc11001100_hook("instant", "", "object-key-init")
      }), "var-init");
      q.generated = cc11001100_hook("q.generated", {
        delayed: cc11001100_hook("delayed", q.property + ": " + M.delayed + ";", "object-key-init"),
        instant: cc11001100_hook("instant", q.property + ": " + M.instant + ";", "object-key-init")
      }, "assign");
    } else q.generated = cc11001100_hook("q.generated", {
      delayed: cc11001100_hook("delayed", "", "object-key-init"),
      instant: cc11001100_hook("instant", "", "object-key-init")
    }, "assign");
    return {
      inline: cc11001100_hook("inline", r, "object-key-init"),
      opacity: cc11001100_hook("opacity", E, "object-key-init"),
      position: cc11001100_hook("position", n, "object-key-init"),
      transform: cc11001100_hook("transform", A, "object-key-init"),
      transition: cc11001100_hook("transition", q, "object-key-init")
    };
  }
  function c(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    void 0 === t && (t = cc11001100_hook("t", {}, "assign"));
    var n = cc11001100_hook("n", t.pristine || this.pristine, "var-init"),
      i = cc11001100_hook("i", "always" === e.config.useDelay || "onload" === e.config.useDelay && n || "once" === e.config.useDelay && !e.seen, "var-init"),
      r = cc11001100_hook("r", e.visible && !e.revealed, "var-init"),
      o = cc11001100_hook("o", !e.visible && e.revealed && e.config.reset, "var-init");
    return t.reveal || r ? function (e, t) {
      var n = cc11001100_hook("n", [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final], "var-init");
      t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant);
      e.revealed = cc11001100_hook("e.revealed", e.seen = cc11001100_hook("e.seen", !0, "assign"), "assign"), e.node.setAttribute("style", n.filter(function (e) {
        return "" !== e;
      }).join(" ")), a.call(this, e, t);
    }.call(this, e, i) : t.reset || o ? function (e) {
      var t = cc11001100_hook("t", [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant], "var-init");
      e.revealed = cc11001100_hook("e.revealed", !1, "assign"), e.node.setAttribute("style", t.filter(function (e) {
        return "" !== e;
      }).join(" ")), a.call(this, e);
    }.call(this, e) : void 0;
  }
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", this, "var-init"),
      i = cc11001100_hook("i", t ? e.config.duration + e.config.delay : e.config.duration, "var-init"),
      r = cc11001100_hook("r", e.revealed ? e.config.beforeReveal : e.config.beforeReset, "var-init"),
      o = cc11001100_hook("o", e.revealed ? e.config.afterReveal : e.config.afterReset, "var-init"),
      s = cc11001100_hook("s", 0, "var-init");
    e.callbackTimer && (s = cc11001100_hook("s", Date.now() - e.callbackTimer.start, "assign"), window.clearTimeout(e.callbackTimer.clock)), r(e.node), e.callbackTimer = cc11001100_hook("e.callbackTimer", {
      start: cc11001100_hook("start", Date.now(), "object-key-init"),
      clock: cc11001100_hook("clock", window.setTimeout(function () {
        o(e.node), e.callbackTimer = cc11001100_hook("e.callbackTimer", null, "assign"), e.revealed && !e.config.reset && e.config.cleanup && p.call(n, e.node);
      }, i - s), "object-key-init")
    }, "assign");
  }
  var e,
    y = cc11001100_hook("y", (e = cc11001100_hook("e", 0, "assign"), function () {
      return e++;
    }), "var-init");
  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (void 0 === t && (t = cc11001100_hook("t", this.pristine, "assign")), !e.visible && e.revealed && e.config.reset) return c.call(this, e, {
      reset: cc11001100_hook("reset", !0, "object-key-init")
    });
    var n = cc11001100_hook("n", this.store.sequences[e.sequence.id], "var-init"),
      i = cc11001100_hook("i", e.sequence.index, "var-init");
    if (n) {
      var r = cc11001100_hook("r", new d(n, "visible", this.store), "var-init"),
        o = cc11001100_hook("o", new d(n, "revealed", this.store), "var-init");
      if (n.models = cc11001100_hook("n.models", {
        visible: cc11001100_hook("visible", r, "object-key-init"),
        revealed: cc11001100_hook("revealed", o, "object-key-init")
      }, "assign"), !o.body.length) {
        var s = cc11001100_hook("s", n.members[r.body[0]], "var-init"),
          a = cc11001100_hook("a", this.store.elements[s], "var-init");
        if (a) return g.call(this, n, r.body[0], -1, t), g.call(this, n, r.body[0], 1, t), c.call(this, a, {
          reveal: cc11001100_hook("reveal", !0, "object-key-init"),
          pristine: cc11001100_hook("pristine", t, "object-key-init")
        });
      }
      if (!n.blocked.head && i === [].concat(o.head).pop() && i >= [].concat(r.body).shift()) return g.call(this, n, i, -1, t), c.call(this, e, {
        reveal: cc11001100_hook("reveal", !0, "object-key-init"),
        pristine: cc11001100_hook("pristine", t, "object-key-init")
      });
      if (!n.blocked.foot && i === [].concat(o.foot).shift() && i <= [].concat(r.body).pop()) return g.call(this, n, i, 1, t), c.call(this, e, {
        reveal: cc11001100_hook("reveal", !0, "object-key-init"),
        pristine: cc11001100_hook("pristine", t, "object-key-init")
      });
    }
  }
  function v(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", Math.abs(e), "var-init");
    if (isNaN(t)) throw new RangeError("Invalid sequence interval.");
    this.id = cc11001100_hook("this.id", y(), "assign"), this.interval = cc11001100_hook("this.interval", Math.max(t, 16), "assign"), this.members = cc11001100_hook("this.members", [], "assign"), this.models = cc11001100_hook("this.models", {}, "assign"), this.blocked = cc11001100_hook("this.blocked", {
      head: cc11001100_hook("head", !1, "object-key-init"),
      foot: cc11001100_hook("foot", !1, "object-key-init")
    }, "assign");
  }
  function d(e, i, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var o = cc11001100_hook("o", this, "var-init");
    this.head = cc11001100_hook("this.head", [], "assign"), this.body = cc11001100_hook("this.body", [], "assign"), this.foot = cc11001100_hook("this.foot", [], "assign"), f(e.members, function (e, t) {
      var n = cc11001100_hook("n", r.elements[e], "var-init");
      n && n[i] && o.body.push(t);
    }), this.body.length && f(e.members, function (e, t) {
      var n = cc11001100_hook("n", r.elements[e], "var-init");
      n && !n[i] && (t < o.body[0] ? o.head.push(t) : o.foot.push(t));
    });
  }
  function g(e, t, n, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var r = cc11001100_hook("r", this, "var-init"),
      o = cc11001100_hook("o", ["head", null, "foot"][1 + n], "var-init"),
      s = cc11001100_hook("s", e.members[t + n], "var-init"),
      a = cc11001100_hook("a", this.store.elements[s], "var-init");
    e.blocked[o] = cc11001100_hook("e.blocked[o]", !0, "assign"), setTimeout(function () {
      e.blocked[o] = cc11001100_hook("e.blocked[o]", !1, "assign"), a && l.call(r, a, i);
    }, e.interval);
  }
  function b() {
    var n = cc11001100_hook("n", this, "var-init");
    t.call(this), f(this.store.elements, function (e) {
      var t = cc11001100_hook("t", [e.styles.inline.generated], "var-init");
      e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final)) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial)), e.node.setAttribute("style", t.filter(function (e) {
        return "" !== e;
      }).join(" "));
    }), f(this.store.containers, function (e) {
      var t = cc11001100_hook("t", e.node === document.documentElement ? window : e.node, "var-init");
      t.addEventListener("scroll", n.delegate), t.addEventListener("resize", n.delegate);
    }), this.delegate(), this.initTimeout = cc11001100_hook("this.initTimeout", null, "assign");
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    return void 0 === e && (e = cc11001100_hook("e", navigator.userAgent, "assign")), /Android|iPhone|iPad|iPod/i.test(e);
  }
  function E(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", arguments.length - 1, "var-init"); 0 < t--;) e[t] = cc11001100_hook("e[t]", arguments[t + 1], "assign");
    if (s(n)) return f(e, function (e) {
      f(e, function (e, t) {
        s(e) ? (n[t] && s(n[t]) || (n[t] = cc11001100_hook("n[t]", {}, "assign")), E(n[t], e)) : n[t] = cc11001100_hook("n[t]", e, "assign");
      });
    }), n;
    throw new TypeError("Target must be an object literal.");
  }
  function i(e, a, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var c = cc11001100_hook("c", this, "var-init");
    void 0 === a && (a = cc11001100_hook("a", {}, "assign")), void 0 === t && (t = cc11001100_hook("t", !1, "assign"));
    var l,
      d = cc11001100_hook("d", [], "var-init"),
      n = cc11001100_hook("n", a.interval || r.interval, "var-init");
    try {
      n && (l = cc11001100_hook("l", new v(n), "assign"));
      var i = cc11001100_hook("i", u(e), "var-init");
      if (!i.length) throw new Error("Invalid reveal target.");
      f(i.reduce(function (e, t) {
        var n = cc11001100_hook("n", {}, "var-init"),
          i = cc11001100_hook("i", t.getAttribute("data-sr-id"), "var-init");
        i ? (E(n, c.store.elements[i]), n.node.setAttribute("style", n.styles.inline.computed)) : (n.id = cc11001100_hook("n.id", y(), "assign"), n.node = cc11001100_hook("n.node", t, "assign"), n.seen = cc11001100_hook("n.seen", !1, "assign"), n.revealed = cc11001100_hook("n.revealed", !1, "assign"), n.visible = cc11001100_hook("n.visible", !1, "assign"));
        var r = cc11001100_hook("r", E({}, n.config || c.defaults, a), "var-init");
        if (!r.mobile && w() || !r.desktop && !w()) return i && p.call(c, n), e;
        var o,
          s = cc11001100_hook("s", u(r.container)[0], "var-init");
        if (!s) throw new Error("Invalid container.");
        return s.contains(t) && (null === (o = cc11001100_hook("o", function (t) {
          var e = cc11001100_hook("e", [], "var-init"),
            n = cc11001100_hook("n", arguments.length - 1, "var-init");
          for (; 0 < n--;) e[n] = cc11001100_hook("e[n]", arguments[n + 1], "assign");
          var i = cc11001100_hook("i", null, "var-init");
          return f(e, function (e) {
            f(e, function (e) {
              null === i && e.node === t && (i = cc11001100_hook("i", e.id, "assign"));
            });
          }), i;
        }(s, d, c.store.containers), "assign")) && (o = cc11001100_hook("o", y(), "assign"), d.push({
          id: cc11001100_hook("id", o, "object-key-init"),
          node: cc11001100_hook("node", s, "object-key-init")
        })), n.config = cc11001100_hook("n.config", r, "assign"), n.containerId = cc11001100_hook("n.containerId", o, "assign"), n.styles = cc11001100_hook("n.styles", m(n), "assign"), l && (n.sequence = cc11001100_hook("n.sequence", {
          id: cc11001100_hook("id", l.id, "object-key-init"),
          index: cc11001100_hook("index", l.members.length, "object-key-init")
        }, "assign"), l.members.push(n.id)), e.push(n)), e;
      }, []), function (e) {
        (c.store.elements[e.id] = cc11001100_hook("c.store.elements[e.id]", e, "assign")).node.setAttribute("data-sr-id", e.id);
      });
    } catch (e) {
      return h.call(this, "Reveal failed.", e.message);
    }
    f(d, function (e) {
      c.store.containers[e.id] = cc11001100_hook("c.store.containers[e.id]", {
        id: cc11001100_hook("id", e.id, "object-key-init"),
        node: cc11001100_hook("node", e.node, "object-key-init")
      }, "assign");
    }), l && (this.store.sequences[l.id] = cc11001100_hook("this.store.sequences[l.id]", l, "assign")), !0 !== t && (this.store.history.push({
      target: cc11001100_hook("target", e, "object-key-init"),
      options: cc11001100_hook("options", a, "object-key-init")
    }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = cc11001100_hook("this.initTimeout", window.setTimeout(b.bind(this), 0), "assign"));
  }
  var j,
    T = cc11001100_hook("T", Math.sign || function (e) {
      return (0 < e) - (e < 0) || +e;
    }, "var-init"),
    O = cc11001100_hook("O", (j = cc11001100_hook("j", Date.now(), "assign"), function (e) {
      var t = cc11001100_hook("t", Date.now(), "var-init");
      16 < t - j ? e(j = cc11001100_hook("j", t, "assign")) : setTimeout(function () {
        return O(e);
      }, 0);
    }), "var-init"),
    k = cc11001100_hook("k", window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || O, "var-init");
  function x(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", t ? e.node.clientHeight : e.node.offsetHeight, "var-init"), i = cc11001100_hook("i", t ? e.node.clientWidth : e.node.offsetWidth, "var-init"), r = cc11001100_hook("r", 0, "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", e.node, "var-init"); isNaN(s.offsetTop) || (r += cc11001100_hook("r", s.offsetTop, "assign")), isNaN(s.offsetLeft) || (o += cc11001100_hook("o", s.offsetLeft, "assign")), s = cc11001100_hook("s", s.offsetParent, "assign"););
    return {
      bounds: {
        top: cc11001100_hook("top", r, "object-key-init"),
        right: cc11001100_hook("right", o + i, "object-key-init"),
        bottom: cc11001100_hook("bottom", r + n, "object-key-init"),
        left: cc11001100_hook("left", o, "object-key-init")
      },
      height: cc11001100_hook("height", n, "object-key-init"),
      width: cc11001100_hook("width", i, "object-key-init")
    };
  }
  function A(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", this, "var-init");
    void 0 === e && (e = cc11001100_hook("e", {
      type: cc11001100_hook("type", "init", "object-key-init")
    }, "assign")), void 0 === t && (t = cc11001100_hook("t", this.store.elements, "assign")), k(function () {
      var n = cc11001100_hook("n", "init" === e.type || "resize" === e.type, "var-init");
      f(i.store.containers, function (e) {
        n && (e.geometry = cc11001100_hook("e.geometry", x.call(i, e, !0), "assign"));
        var t = cc11001100_hook("t", function (e) {
          var t, n;
          return e.node === document.documentElement ? (t = cc11001100_hook("t", window.pageYOffset, "assign"), n = cc11001100_hook("n", window.pageXOffset, "assign")) : (t = cc11001100_hook("t", e.node.scrollTop, "assign"), n = cc11001100_hook("n", e.node.scrollLeft, "assign")), {
            top: cc11001100_hook("top", t, "object-key-init"),
            left: cc11001100_hook("left", n, "object-key-init")
          };
        }.call(i, e), "var-init");
        e.scroll && (e.direction = cc11001100_hook("e.direction", {
          x: cc11001100_hook("x", T(t.left - e.scroll.left), "object-key-init"),
          y: cc11001100_hook("y", T(t.top - e.scroll.top), "object-key-init")
        }, "assign")), e.scroll = cc11001100_hook("e.scroll", t, "assign");
      }), f(t, function (e) {
        n && (e.geometry = cc11001100_hook("e.geometry", x.call(i, e), "assign")), e.visible = cc11001100_hook("e.visible", function (e) {
          void 0 === e && (e = cc11001100_hook("e", {}, "assign"));
          var t = cc11001100_hook("t", this.store.containers[e.containerId], "var-init");
          if (t) {
            var n = cc11001100_hook("n", Math.max(0, Math.min(1, e.config.viewFactor)), "var-init"),
              i = cc11001100_hook("i", e.config.viewOffset, "var-init"),
              r = cc11001100_hook("r", e.geometry.bounds.top + e.geometry.height * n, "var-init"),
              o = cc11001100_hook("o", e.geometry.bounds.right - e.geometry.width * n, "var-init"),
              s = cc11001100_hook("s", e.geometry.bounds.bottom - e.geometry.height * n, "var-init"),
              a = cc11001100_hook("a", e.geometry.bounds.left + e.geometry.width * n, "var-init"),
              c = cc11001100_hook("c", t.geometry.bounds.top + t.scroll.top + i.top, "var-init"),
              l = cc11001100_hook("l", t.geometry.bounds.right + t.scroll.left - i.right, "var-init"),
              d = cc11001100_hook("d", t.geometry.bounds.bottom + t.scroll.top - i.bottom, "var-init"),
              u = cc11001100_hook("u", t.geometry.bounds.left + t.scroll.left + i.left, "var-init");
            return r < d && u < o && c < s && a < l || "fixed" === e.styles.position;
          }
        }.call(i, e), "assign");
      }), f(t, function (e) {
        e.sequence ? l.call(i, e) : c.call(i, e);
      }), i.pristine = cc11001100_hook("i.pristine", !1, "assign");
    });
  }
  var R,
    q,
    P,
    I,
    L,
    M,
    C,
    W,
    Y = cc11001100_hook("Y", "4.0.0", "var-init");
  function $(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    if (void 0 === e && (e = cc11001100_hook("e", {}, "assign")), void 0 === this || Object.getPrototypeOf(this) !== $.prototype) return new $(e);
    if (!$.isSupported()) return h.call(this, "Instantiation failed.", "This browser is not supported."), n;
    try {
      t = cc11001100_hook("t", E({}, M || r, e), "assign");
    } catch (e) {
      return h.call(this, "Instantiation failed.", "Invalid configuration.", e.message), n;
    }
    try {
      if (!u(t.container)[0]) throw new Error("Invalid container.");
      if (!t.mobile && w() || !t.desktop && !w()) throw new Error("This device is disabled.");
    } catch (e) {
      return h.call(this, "Instantiation failed.", e.message), n;
    }
    return M = cc11001100_hook("M", t, "assign"), document.documentElement.classList.add("sr"), document.body ? document.body.style.height = cc11001100_hook("document.body.style.height", "100%", "assign") : document.addEventListener("DOMContentLoaded", function () {
      document.body.style.height = cc11001100_hook("document.body.style.height", "100%", "assign");
    }), this.store = cc11001100_hook("this.store", {
      containers: {},
      elements: {},
      history: cc11001100_hook("history", [], "object-key-init"),
      sequences: {}
    }, "assign"), this.pristine = cc11001100_hook("this.pristine", !0, "assign"), R = cc11001100_hook("R", R || A.bind(this), "assign"), q = cc11001100_hook("q", q || function () {
      var n = cc11001100_hook("n", this, "var-init");
      f(this.store.elements, function (e) {
        e.node.setAttribute("style", e.styles.inline.generated), e.node.removeAttribute("data-sr-id");
      }), f(this.store.containers, function (e) {
        var t = cc11001100_hook("t", e.node === document.documentElement ? window : e.node, "var-init");
        t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate);
      }), this.store = cc11001100_hook("this.store", {
        containers: {},
        elements: {},
        history: cc11001100_hook("history", [], "object-key-init"),
        sequences: {}
      }, "assign");
    }.bind(this), "assign"), P = cc11001100_hook("P", P || i.bind(this), "assign"), I = cc11001100_hook("I", I || p.bind(this), "assign"), L = cc11001100_hook("L", L || function () {
      var t = cc11001100_hook("t", this, "var-init");
      f(this.store.history, function (e) {
        i.call(t, e.target, e.options, !0);
      }), b.call(this);
    }.bind(this), "assign"), Object.defineProperty(this, "delegate", {
      get: function () {
        return R;
      }
    }), Object.defineProperty(this, "destroy", {
      get: function () {
        return q;
      }
    }), Object.defineProperty(this, "reveal", {
      get: function () {
        return P;
      }
    }), Object.defineProperty(this, "clean", {
      get: function () {
        return I;
      }
    }), Object.defineProperty(this, "sync", {
      get: function () {
        return L;
      }
    }), Object.defineProperty(this, "defaults", {
      get: function () {
        return M;
      }
    }), Object.defineProperty(this, "version", {
      get: function () {
        return Y;
      }
    }), Object.defineProperty(this, "noop", {
      get: function () {
        return !1;
      }
    }), W || (W = cc11001100_hook("W", this, "assign"));
  }
  return $.isSupported = cc11001100_hook("$.isSupported", function () {
    return ("transform" in (t = cc11001100_hook("t", document.documentElement.style, "assign")) || "WebkitTransform" in t) && ("transition" in (e = cc11001100_hook("e", document.documentElement.style, "assign")) || "WebkitTransition" in e);
    var e, t;
  }, "assign"), Object.defineProperty($, "debug", {
    get: function () {
      return C || !1;
    },
    set: function (e) {
      return C = cc11001100_hook("C", "boolean" == typeof e ? e : C, "assign");
    }
  }), $(), $;
}(), "var-init");