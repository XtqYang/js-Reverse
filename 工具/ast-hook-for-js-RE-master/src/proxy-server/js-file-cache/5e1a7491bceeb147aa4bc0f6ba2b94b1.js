/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  }, "assign") : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = cc11001100_hook("c", [], "var-init"),
    d = cc11001100_hook("d", c.slice, "var-init"),
    e = cc11001100_hook("e", c.concat, "var-init"),
    f = cc11001100_hook("f", c.push, "var-init"),
    g = cc11001100_hook("g", c.indexOf, "var-init"),
    h = cc11001100_hook("h", {}, "var-init"),
    i = cc11001100_hook("i", h.toString, "var-init"),
    j = cc11001100_hook("j", h.hasOwnProperty, "var-init"),
    k = cc11001100_hook("k", {}, "var-init"),
    l = cc11001100_hook("l", a.document, "var-init"),
    m = cc11001100_hook("m", "2.1.4", "var-init"),
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = cc11001100_hook("o", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    p = cc11001100_hook("p", /^-ms-/, "var-init"),
    q = cc11001100_hook("q", /-([\da-z])/gi, "var-init"),
    r = function (a, b) {
      return b.toUpperCase();
    };
  n.fn = cc11001100_hook("n.fn", n.prototype = cc11001100_hook("n.prototype", {
    jquery: cc11001100_hook("jquery", m, "object-key-init"),
    constructor: cc11001100_hook("constructor", n, "object-key-init"),
    selector: cc11001100_hook("selector", "", "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return d.call(this);
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function (a) {
      var b = cc11001100_hook("b", n.merge(this.constructor(), a), "var-init");
      return b.prevObject = cc11001100_hook("b.prevObject", this, "assign"), b.context = cc11001100_hook("b.context", this.context, "assign"), b;
    },
    each: function (a, b) {
      return n.each(this, a, b);
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = cc11001100_hook("b", this.length, "var-init"),
        c = cc11001100_hook("c", +a + (0 > a ? b : 0), "var-init");
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: cc11001100_hook("push", f, "object-key-init"),
    sort: cc11001100_hook("sort", c.sort, "object-key-init"),
    splice: cc11001100_hook("splice", c.splice, "object-key-init")
  }, "assign"), "assign"), n.extend = cc11001100_hook("n.extend", n.fn.extend = cc11001100_hook("n.fn.extend", function () {
    var a,
      b,
      c,
      d,
      e,
      f,
      g = cc11001100_hook("g", arguments[0] || {}, "var-init"),
      h = cc11001100_hook("h", 1, "var-init"),
      i = cc11001100_hook("i", arguments.length, "var-init"),
      j = cc11001100_hook("j", !1, "var-init");
    for ("boolean" == typeof g && (j = cc11001100_hook("j", g, "assign"), g = cc11001100_hook("g", arguments[h] || {}, "assign"), h++), "object" == typeof g || n.isFunction(g) || (g = cc11001100_hook("g", {}, "assign")), h === i && (g = cc11001100_hook("g", this, "assign"), h--); i > h; h++) if (null != (a = cc11001100_hook("a", arguments[h], "assign"))) for (b in a) c = cc11001100_hook("c", g[b], "assign"), d = cc11001100_hook("d", a[b], "assign"), g !== d && (j && d && (n.isPlainObject(d) || (e = cc11001100_hook("e", n.isArray(d), "assign"))) ? (e ? (e = cc11001100_hook("e", !1, "assign"), f = cc11001100_hook("f", c && n.isArray(c) ? c : [], "assign")) : f = cc11001100_hook("f", c && n.isPlainObject(c) ? c : {}, "assign"), g[b] = cc11001100_hook("g[b]", n.extend(j, f, d), "assign")) : void 0 !== d && (g[b] = cc11001100_hook("g[b]", d, "assign")));
    return g;
  }, "assign"), "assign"), n.extend({
    expando: cc11001100_hook("expando", "jQuery" + (m + Math.random()).replace(/\D/g, ""), "object-key-init"),
    isReady: cc11001100_hook("isReady", !0, "object-key-init"),
    error: function (a) {
      throw new Error(a);
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === n.type(a);
    },
    isArray: cc11001100_hook("isArray", Array.isArray, "object-key-init"),
    isWindow: function (a) {
      return null != a && a === a.window;
    },
    isNumeric: function (a) {
      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
    },
    isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0;
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
    },
    globalEval: function (a) {
      var b,
        c = cc11001100_hook("c", eval, "var-init");
      a = cc11001100_hook("a", n.trim(a), "assign"), a && (1 === a.indexOf("use strict") ? (b = cc11001100_hook("b", l.createElement("script"), "assign"), b.text = cc11001100_hook("b.text", a, "assign"), l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function (a, b, c) {
      var d,
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", a.length, "var-init"),
        g = cc11001100_hook("g", s(a), "var-init");
      if (c) {
        if (g) {
          for (; f > e; e++) if (d = cc11001100_hook("d", b.apply(a[e], c), "assign"), d === !1) break;
        } else for (e in a) if (d = cc11001100_hook("d", b.apply(a[e], c), "assign"), d === !1) break;
      } else if (g) {
        for (; f > e; e++) if (d = cc11001100_hook("d", b.call(a[e], e, a[e]), "assign"), d === !1) break;
      } else for (e in a) if (d = cc11001100_hook("d", b.call(a[e], e, a[e]), "assign"), d === !1) break;
      return a;
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function (a, b) {
      var c = cc11001100_hook("c", b || [], "var-init");
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    },
    merge: function (a, b) {
      for (var c = cc11001100_hook("c", +b.length, "var-init"), d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", a.length, "var-init"); c > d; d++) a[e++] = cc11001100_hook("a[e++]", b[d], "assign");
      return a.length = cc11001100_hook("a.length", e, "assign"), a;
    },
    grep: function (a, b, c) {
      for (var d, e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", a.length, "var-init"), h = cc11001100_hook("h", !c, "var-init"); g > f; f++) d = cc11001100_hook("d", !b(a[f], f), "assign"), d !== h && e.push(a[f]);
      return e;
    },
    map: function (a, b, c) {
      var d,
        f = cc11001100_hook("f", 0, "var-init"),
        g = cc11001100_hook("g", a.length, "var-init"),
        h = cc11001100_hook("h", s(a), "var-init"),
        i = cc11001100_hook("i", [], "var-init");
      if (h) for (; g > f; f++) d = cc11001100_hook("d", b(a[f], f, c), "assign"), null != d && i.push(d);else for (f in a) d = cc11001100_hook("d", b(a[f], f, c), "assign"), null != d && i.push(d);
      return e.apply([], i);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (a, b) {
      var c, e, f;
      return "string" == typeof b && (c = cc11001100_hook("c", a[b], "assign"), b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", c, "assign")), n.isFunction(a) ? (e = cc11001100_hook("e", d.call(arguments, 2), "assign"), f = cc11001100_hook("f", function () {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, "assign"), f.guid = cc11001100_hook("f.guid", a.guid = cc11001100_hook("a.guid", a.guid || n.guid++, "assign"), "assign"), f) : void 0;
    },
    now: cc11001100_hook("now", Date.now, "object-key-init"),
    support: cc11001100_hook("support", k, "object-key-init")
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = cc11001100_hook("h[\"[object \" + b + \"]\"]", b.toLowerCase(), "assign");
  });
  function s(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", "length" in a && a.length, "var-init"),
      c = cc11001100_hook("c", n.type(a), "var-init");
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }
  var t = cc11001100_hook("t", function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = cc11001100_hook("u", "sizzle" + 1 * new Date(), "var-init"),
      v = cc11001100_hook("v", a.document, "var-init"),
      w = cc11001100_hook("w", 0, "var-init"),
      x = cc11001100_hook("x", 0, "var-init"),
      y = cc11001100_hook("y", ha(), "var-init"),
      z = cc11001100_hook("z", ha(), "var-init"),
      A = cc11001100_hook("A", ha(), "var-init"),
      B = function (a, b) {
        return a === b && (l = cc11001100_hook("l", !0, "assign")), 0;
      },
      C = cc11001100_hook("C", 1 << 31, "var-init"),
      D = cc11001100_hook("D", {}.hasOwnProperty, "var-init"),
      E = cc11001100_hook("E", [], "var-init"),
      F = cc11001100_hook("F", E.pop, "var-init"),
      G = cc11001100_hook("G", E.push, "var-init"),
      H = cc11001100_hook("H", E.push, "var-init"),
      I = cc11001100_hook("I", E.slice, "var-init"),
      J = function (a, b) {
        for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K = cc11001100_hook("K", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      L = cc11001100_hook("L", "[\\x20\\t\\r\\n\\f]", "var-init"),
      M = cc11001100_hook("M", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
      N = cc11001100_hook("N", M.replace("w", "w#"), "var-init"),
      O = cc11001100_hook("O", "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", "var-init"),
      P = cc11001100_hook("P", ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", "var-init"),
      Q = cc11001100_hook("Q", new RegExp(L + "+", "g"), "var-init"),
      R = cc11001100_hook("R", new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), "var-init"),
      S = cc11001100_hook("S", new RegExp("^" + L + "*," + L + "*"), "var-init"),
      T = cc11001100_hook("T", new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), "var-init"),
      U = cc11001100_hook("U", new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), "var-init"),
      V = cc11001100_hook("V", new RegExp(P), "var-init"),
      W = cc11001100_hook("W", new RegExp("^" + N + "$"), "var-init"),
      X = cc11001100_hook("X", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + M + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + M + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + M.replace("w", "w*") + ")"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + O), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + P), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + K + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      Y = cc11001100_hook("Y", /^(?:input|select|textarea|button)$/i, "var-init"),
      Z = cc11001100_hook("Z", /^h\d$/i, "var-init"),
      $ = cc11001100_hook("$", /^[^{]+\{\s*\[native \w/, "var-init"),
      _ = cc11001100_hook("_", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      aa = cc11001100_hook("aa", /[+~]/, "var-init"),
      ba = cc11001100_hook("ba", /'|\\/g, "var-init"),
      ca = cc11001100_hook("ca", new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), "var-init"),
      da = function (a, b, c) {
        var d = cc11001100_hook("d", "0x" + b - 65536, "var-init");
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
      },
      ea = function () {
        m();
      };
    try {
      H.apply(E = cc11001100_hook("E", I.call(v.childNodes), "assign"), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = cc11001100_hook("H", {
        apply: cc11001100_hook("apply", E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = cc11001100_hook("c", a.length, "var-init"),
            d = cc11001100_hook("d", 0, "var-init");
          while (a[c++] = cc11001100_hook("a[c++]", b[d++], "assign"));
          a.length = cc11001100_hook("a.length", c - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    function ga(a, b, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = cc11001100_hook("b", b || n, "assign"), d = cc11001100_hook("d", d || [], "assign"), k = cc11001100_hook("k", b.nodeType, "assign"), "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
      if (!e && p) {
        if (11 !== k && (f = cc11001100_hook("f", _.exec(a), "assign"))) if (j = cc11001100_hook("j", f[1], "assign")) {
          if (9 === k) {
            if (h = cc11001100_hook("h", b.getElementById(j), "assign"), !h || !h.parentNode) return d;
            if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = cc11001100_hook("h", b.ownerDocument.getElementById(j), "assign")) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((j = cc11001100_hook("j", f[3], "assign")) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = cc11001100_hook("s", r = cc11001100_hook("r", u, "assign"), "assign"), w = cc11001100_hook("w", b, "assign"), x = cc11001100_hook("x", 1 !== k && a, "assign"), 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = cc11001100_hook("o", g(a), "assign"), (r = cc11001100_hook("r", b.getAttribute("id"), "assign")) ? s = cc11001100_hook("s", r.replace(ba, "\\$&"), "assign") : b.setAttribute("id", s), s = cc11001100_hook("s", "[id='" + s + "'] ", "assign"), l = cc11001100_hook("l", o.length, "assign");
            while (l--) o[l] = cc11001100_hook("o[l]", s + ra(o[l]), "assign");
            w = cc11001100_hook("w", aa.test(a) && pa(b.parentNode) || b, "assign"), x = cc11001100_hook("x", o.join(","), "assign");
          }
          if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function ha() {
      var a = cc11001100_hook("a", [], "var-init");
      function b(c, e) {
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = cc11001100_hook("b[c + \" \"]", e, "assign");
      }
      return b;
    }
    function ia(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a[u] = cc11001100_hook("a[u]", !0, "assign"), a;
    }
    function ja(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", n.createElement("div"), "var-init");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = cc11001100_hook("b", null, "assign");
      }
    }
    function ka(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", a.split("|"), "var-init"),
        e = cc11001100_hook("e", a.length, "var-init");
      while (e--) d.attrHandle[c[e]] = cc11001100_hook("d.attrHandle[c[e]]", b, "assign");
    }
    function la(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", b && a, "var-init"),
        d = cc11001100_hook("d", c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C), "var-init");
      if (d) return d;
      if (c) while (c = cc11001100_hook("c", c.nextSibling, "assign")) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      cc11001100_hook("a", a, "function-parameter");
      return function (b) {
        var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return ia(function (b) {
        return b = cc11001100_hook("b", +b, "assign"), ia(function (c, d) {
          var e,
            f = cc11001100_hook("f", a([], c.length, b), "var-init"),
            g = cc11001100_hook("g", f.length, "var-init");
          while (g--) c[e = cc11001100_hook("e", f[g], "assign")] && (c[e] = cc11001100_hook("c[e]", !(d[e] = cc11001100_hook("d[e]", c[e], "assign")), "assign"));
        });
      });
    }
    function pa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    c = cc11001100_hook("c", ga.support = cc11001100_hook("ga.support", {}, "assign"), "assign"), f = cc11001100_hook("f", ga.isXML = cc11001100_hook("ga.isXML", function (a) {
      var b = cc11001100_hook("b", a && (a.ownerDocument || a).documentElement, "var-init");
      return b ? "HTML" !== b.nodeName : !1;
    }, "assign"), "assign"), m = cc11001100_hook("m", ga.setDocument = cc11001100_hook("ga.setDocument", function (a) {
      var b,
        e,
        g = cc11001100_hook("g", a ? a.ownerDocument || a : v, "var-init");
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = cc11001100_hook("n", g, "assign"), o = cc11001100_hook("o", g.documentElement, "assign"), e = cc11001100_hook("e", g.defaultView, "assign"), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = cc11001100_hook("p", !f(g), "assign"), c.attributes = cc11001100_hook("c.attributes", ja(function (a) {
        return a.className = cc11001100_hook("a.className", "i", "assign"), !a.getAttribute("className");
      }), "assign"), c.getElementsByTagName = cc11001100_hook("c.getElementsByTagName", ja(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), "assign"), c.getElementsByClassName = cc11001100_hook("c.getElementsByClassName", $.test(g.getElementsByClassName), "assign"), c.getById = cc11001100_hook("c.getById", ja(function (a) {
        return o.appendChild(a).id = cc11001100_hook("o.appendChild(a).id", u, "assign"), !g.getElementsByName || !g.getElementsByName(u).length;
      }), "assign"), c.getById ? (d.find.ID = cc11001100_hook("d.find.ID", function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = cc11001100_hook("c", b.getElementById(a), "var-init");
          return c && c.parentNode ? [c] : [];
        }
      }, "assign"), d.filter.ID = cc11001100_hook("d.filter.ID", function (a) {
        var b = cc11001100_hook("b", a.replace(ca, da), "var-init");
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }, "assign")) : (delete d.find.ID, d.filter.ID = cc11001100_hook("d.filter.ID", function (a) {
        var b = cc11001100_hook("b", a.replace(ca, da), "var-init");
        return function (a) {
          var c = cc11001100_hook("c", "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"), "var-init");
          return c && c.value === b;
        };
      }, "assign")), d.find.TAG = cc11001100_hook("d.find.TAG", c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
          d = cc11001100_hook("d", [], "var-init"),
          e = cc11001100_hook("e", 0, "var-init"),
          f = cc11001100_hook("f", b.getElementsByTagName(a), "var-init");
        if ("*" === a) {
          while (c = cc11001100_hook("c", f[e++], "assign")) 1 === c.nodeType && d.push(c);
          return d;
        }
        return f;
      }, "assign"), d.find.CLASS = cc11001100_hook("d.find.CLASS", c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, "assign"), r = cc11001100_hook("r", [], "assign"), q = cc11001100_hook("q", [], "assign"), (c.qsa = cc11001100_hook("c.qsa", $.test(g.querySelectorAll), "assign")) && (ja(function (a) {
        o.appendChild(a).innerHTML = cc11001100_hook("o.appendChild(a).innerHTML", "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", "assign"), a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        var b = cc11001100_hook("b", g.createElement("input"), "var-init");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = cc11001100_hook("c.matchesSelector", $.test(s = cc11001100_hook("s", o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector, "assign")), "assign")) && ja(function (a) {
        c.disconnectedMatch = cc11001100_hook("c.disconnectedMatch", s.call(a, "div"), "assign"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = cc11001100_hook("q", q.length && new RegExp(q.join("|")), "assign"), r = cc11001100_hook("r", r.length && new RegExp(r.join("|")), "assign"), b = cc11001100_hook("b", $.test(o.compareDocumentPosition), "assign"), t = cc11001100_hook("t", b || $.test(o.contains) ? function (a, b) {
        var c = cc11001100_hook("c", 9 === a.nodeType ? a.documentElement : a, "var-init"),
          d = cc11001100_hook("d", b && b.parentNode, "var-init");
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = cc11001100_hook("b", b.parentNode, "assign")) if (b === a) return !0;
        return !1;
      }, "assign"), B = cc11001100_hook("B", b ? function (a, b) {
        if (a === b) return l = cc11001100_hook("l", !0, "assign"), 0;
        var d = cc11001100_hook("d", !a.compareDocumentPosition - !b.compareDocumentPosition, "var-init");
        return d ? d : (d = cc11001100_hook("d", (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, "assign"), 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = cc11001100_hook("l", !0, "assign"), 0;
        var c,
          d = cc11001100_hook("d", 0, "var-init"),
          e = cc11001100_hook("e", a.parentNode, "var-init"),
          f = cc11001100_hook("f", b.parentNode, "var-init"),
          h = cc11001100_hook("h", [a], "var-init"),
          i = cc11001100_hook("i", [b], "var-init");
        if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return la(a, b);
        c = cc11001100_hook("c", a, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) h.unshift(c);
        c = cc11001100_hook("c", b, "assign");
        while (c = cc11001100_hook("c", c.parentNode, "assign")) i.unshift(c);
        while (h[d] === i[d]) d++;
        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, "assign"), g) : n;
    }, "assign"), "assign"), ga.matches = cc11001100_hook("ga.matches", function (a, b) {
      return ga(a, null, null, b);
    }, "assign"), ga.matchesSelector = cc11001100_hook("ga.matchesSelector", function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = cc11001100_hook("b", b.replace(U, "='$1']"), "assign"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = cc11001100_hook("d", s.call(a, b), "var-init");
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0;
    }, "assign"), ga.contains = cc11001100_hook("ga.contains", function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, "assign"), ga.attr = cc11001100_hook("ga.attr", function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = cc11001100_hook("e", d.attrHandle[b.toLowerCase()], "var-init"),
        f = cc11001100_hook("f", e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0, "var-init");
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = cc11001100_hook("f", a.getAttributeNode(b), "assign")) && f.specified ? f.value : null;
    }, "assign"), ga.error = cc11001100_hook("ga.error", function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, "assign"), ga.uniqueSort = cc11001100_hook("ga.uniqueSort", function (a) {
      var b,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      if (l = cc11001100_hook("l", !c.detectDuplicates, "assign"), k = cc11001100_hook("k", !c.sortStable && a.slice(0), "assign"), a.sort(B), l) {
        while (b = cc11001100_hook("b", a[f++], "assign")) b === a[f] && (e = cc11001100_hook("e", d.push(f), "assign"));
        while (e--) a.splice(d[e], 1);
      }
      return k = cc11001100_hook("k", null, "assign"), a;
    }, "assign"), e = cc11001100_hook("e", ga.getText = cc11001100_hook("ga.getText", function (a) {
      var b,
        c = cc11001100_hook("c", "", "var-init"),
        d = cc11001100_hook("d", 0, "var-init"),
        f = cc11001100_hook("f", a.nodeType, "var-init");
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = cc11001100_hook("a", a.firstChild, "assign"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) c += cc11001100_hook("c", e(a), "assign");
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = cc11001100_hook("b", a[d++], "assign")) c += cc11001100_hook("c", e(b), "assign");
      return c;
    }, "assign"), "assign"), d = cc11001100_hook("d", ga.selectors = cc11001100_hook("ga.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", ia, "object-key-init"),
      match: cc11001100_hook("match", X, "object-key-init"),
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
          first: cc11001100_hook("first", !0, "object-key-init")
        },
        " ": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init")
        },
        "+": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init"),
          first: cc11001100_hook("first", !0, "object-key-init")
        },
        "~": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init")
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = cc11001100_hook("a[1]", a[1].replace(ca, da), "assign"), a[3] = cc11001100_hook("a[3]", (a[3] || a[4] || a[5] || "").replace(ca, da), "assign"), "~=" === a[2] && (a[3] = cc11001100_hook("a[3]", " " + a[3] + " ", "assign")), a.slice(0, 4);
        },
        CHILD: function (a) {
          return a[1] = cc11001100_hook("a[1]", a[1].toLowerCase(), "assign"), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = cc11001100_hook("a[4]", +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), "assign"), a[5] = cc11001100_hook("a[5]", +(a[7] + a[8] || "odd" === a[3]), "assign")) : a[3] && ga.error(a[0]), a;
        },
        PSEUDO: function (a) {
          var b,
            c = cc11001100_hook("c", !a[6] && a[2], "var-init");
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = cc11001100_hook("a[2]", a[4] || a[5] || "", "assign") : c && V.test(c) && (b = cc11001100_hook("b", g(c, !0), "assign")) && (b = cc11001100_hook("b", c.indexOf(")", c.length - b) - c.length, "assign")) && (a[0] = cc11001100_hook("a[0]", a[0].slice(0, b), "assign"), a[2] = cc11001100_hook("a[2]", c.slice(0, b), "assign")), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function (a) {
          var b = cc11001100_hook("b", a.replace(ca, da).toLowerCase(), "var-init");
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function (a) {
          var b = cc11001100_hook("b", y[a + " "], "var-init");
          return b || (b = cc11001100_hook("b", new RegExp("(^|" + L + ")" + a + "(" + L + "|$)"), "assign")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = cc11001100_hook("e", ga.attr(d, a), "var-init");
            return null == e ? "!=" === b : b ? (e += cc11001100_hook("e", "", "assign"), "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function (a, b, c, d, e) {
          var f = cc11001100_hook("f", "nth" !== a.slice(0, 3), "var-init"),
            g = cc11001100_hook("g", "last" !== a.slice(-4), "var-init"),
            h = cc11001100_hook("h", "of-type" === b, "var-init");
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
              k,
              l,
              m,
              n,
              o,
              p = cc11001100_hook("p", f !== g ? "nextSibling" : "previousSibling", "var-init"),
              q = cc11001100_hook("q", b.parentNode, "var-init"),
              r = cc11001100_hook("r", h && b.nodeName.toLowerCase(), "var-init"),
              s = cc11001100_hook("s", !i && !h, "var-init");
            if (q) {
              if (f) {
                while (p) {
                  l = cc11001100_hook("l", b, "assign");
                  while (l = cc11001100_hook("l", l[p], "assign")) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = cc11001100_hook("o", p = cc11001100_hook("p", "only" === a && !o && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (o = cc11001100_hook("o", [g ? q.firstChild : q.lastChild], "assign"), g && s) {
                k = cc11001100_hook("k", q[u] || (q[u] = cc11001100_hook("q[u]", {}, "assign")), "assign"), j = cc11001100_hook("j", k[a] || [], "assign"), n = cc11001100_hook("n", j[0] === w && j[1], "assign"), m = cc11001100_hook("m", j[0] === w && j[2], "assign"), l = cc11001100_hook("l", n && q.childNodes[n], "assign");
                while (l = cc11001100_hook("l", ++n && l && l[p] || (m = cc11001100_hook("m", n = cc11001100_hook("n", 0, "assign"), "assign")) || o.pop(), "assign")) if (1 === l.nodeType && ++m && l === b) {
                  k[a] = cc11001100_hook("k[a]", [w, n, m], "assign");
                  break;
                }
              } else if (s && (j = cc11001100_hook("j", (b[u] || (b[u] = cc11001100_hook("b[u]", {}, "assign")))[a], "assign")) && j[0] === w) m = cc11001100_hook("m", j[1], "assign");else while (l = cc11001100_hook("l", ++n && l && l[p] || (m = cc11001100_hook("m", n = cc11001100_hook("n", 0, "assign"), "assign")) || o.pop(), "assign")) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = cc11001100_hook("l[u]", {}, "assign")))[a] = cc11001100_hook("(l[u] || (l[u] = {}))[a]", [w, m], "assign")), l === b)) break;
              return m -= cc11001100_hook("m", e, "assign"), m === d || m % d === 0 && m / d >= 0;
            }
          };
        },
        PSEUDO: function (a, b) {
          var c,
            e = cc11001100_hook("e", d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a), "var-init");
          return e[u] ? e(b) : e.length > 1 ? (c = cc11001100_hook("c", [a, a, "", b], "assign"), d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
              f = cc11001100_hook("f", e(a, b), "var-init"),
              g = cc11001100_hook("g", f.length, "var-init");
            while (g--) d = cc11001100_hook("d", J(a, f[g]), "assign"), a[d] = cc11001100_hook("a[d]", !(c[d] = cc11001100_hook("c[d]", f[g], "assign")), "assign");
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", ia(function (a) {
          var b = cc11001100_hook("b", [], "var-init"),
            c = cc11001100_hook("c", [], "var-init"),
            d = cc11001100_hook("d", h(a.replace(R, "$1")), "var-init");
          return d[u] ? ia(function (a, b, c, e) {
            var f,
              g = cc11001100_hook("g", d(a, null, e, []), "var-init"),
              h = cc11001100_hook("h", a.length, "var-init");
            while (h--) (f = cc11001100_hook("f", g[h], "assign")) && (a[h] = cc11001100_hook("a[h]", !(b[h] = cc11001100_hook("b[h]", f, "assign")), "assign"));
          }) : function (a, e, f) {
            return b[0] = cc11001100_hook("b[0]", a, "assign"), d(b, null, f, c), b[0] = cc11001100_hook("b[0]", null, "assign"), !c.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", ia(function (a) {
          return a = cc11001100_hook("a", a.replace(ca, da), "assign"), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", ia(function (a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = cc11001100_hook("a", a.replace(ca, da).toLowerCase(), "assign"), function (b) {
            var c;
            do if (c = cc11001100_hook("c", p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"), "assign")) return c = cc11001100_hook("c", c.toLowerCase(), "assign"), c === a || 0 === c.indexOf(a + "-"); while ((b = cc11001100_hook("b", b.parentNode, "assign")) && 1 === b.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (b) {
          var c = cc11001100_hook("c", a.location && a.location.hash, "var-init");
          return c && c.slice(1) === b.id;
        },
        root: function (a) {
          return a === o;
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function (a) {
          return a.disabled === !1;
        },
        disabled: function (a) {
          return a.disabled === !0;
        },
        checked: function (a) {
          var b = cc11001100_hook("b", a.nodeName.toLowerCase(), "var-init");
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function (a) {
          for (a = cc11001100_hook("a", a.firstChild, "assign"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) if (a.nodeType < 6) return !1;
          return !0;
        },
        parent: function (a) {
          return !d.pseudos.empty(a);
        },
        header: function (a) {
          return Z.test(a.nodeName);
        },
        input: function (a) {
          return Y.test(a.nodeName);
        },
        button: function (a) {
          var b = cc11001100_hook("b", a.nodeName.toLowerCase(), "var-init");
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = cc11001100_hook("b", a.getAttribute("type"), "assign")) || "text" === b.toLowerCase());
        },
        first: cc11001100_hook("first", oa(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", oa(function (a, b) {
          return [b - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", oa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), "object-key-init"),
        even: cc11001100_hook("even", oa(function (a, b) {
          for (var c = cc11001100_hook("c", 0, "var-init"); b > c; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", oa(function (a, b) {
          for (var c = cc11001100_hook("c", 1, "var-init"); b > c; c += cc11001100_hook("c", 2, "assign")) a.push(c);
          return a;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", oa(function (a, b, c) {
          for (var d = cc11001100_hook("d", 0 > c ? c + b : c, "var-init"); --d >= 0;) a.push(d);
          return a;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", oa(function (a, b, c) {
          for (var d = cc11001100_hook("d", 0 > c ? c + b : c, "var-init"); ++d < b;) a.push(d);
          return a;
        }), "object-key-init")
      }
    }, "assign"), "assign"), d.pseudos.nth = cc11001100_hook("d.pseudos.nth", d.pseudos.eq, "assign");
    for (b in {
      radio: cc11001100_hook("radio", !0, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", !0, "object-key-init"),
      file: cc11001100_hook("file", !0, "object-key-init"),
      password: cc11001100_hook("password", !0, "object-key-init"),
      image: cc11001100_hook("image", !0, "object-key-init")
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", ma(b), "assign");
    for (b in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) d.pseudos[b] = cc11001100_hook("d.pseudos[b]", na(b), "assign");
    function qa() {}
    qa.prototype = cc11001100_hook("qa.prototype", d.filters = cc11001100_hook("d.filters", d.pseudos, "assign"), "assign"), d.setFilters = cc11001100_hook("d.setFilters", new qa(), "assign"), g = cc11001100_hook("g", ga.tokenize = cc11001100_hook("ga.tokenize", function (a, b) {
      var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k = cc11001100_hook("k", z[a + " "], "var-init");
      if (k) return b ? 0 : k.slice(0);
      h = cc11001100_hook("h", a, "assign"), i = cc11001100_hook("i", [], "assign"), j = cc11001100_hook("j", d.preFilter, "assign");
      while (h) {
        (!c || (e = cc11001100_hook("e", S.exec(h), "assign"))) && (e && (h = cc11001100_hook("h", h.slice(e[0].length) || h, "assign")), i.push(f = cc11001100_hook("f", [], "assign"))), c = cc11001100_hook("c", !1, "assign"), (e = cc11001100_hook("e", T.exec(h), "assign")) && (c = cc11001100_hook("c", e.shift(), "assign"), f.push({
          value: cc11001100_hook("value", c, "object-key-init"),
          type: cc11001100_hook("type", e[0].replace(R, " "), "object-key-init")
        }), h = cc11001100_hook("h", h.slice(c.length), "assign"));
        for (g in d.filter) !(e = cc11001100_hook("e", X[g].exec(h), "assign")) || j[g] && !(e = cc11001100_hook("e", j[g](e), "assign")) || (c = cc11001100_hook("c", e.shift(), "assign"), f.push({
          value: cc11001100_hook("value", c, "object-key-init"),
          type: cc11001100_hook("type", g, "object-key-init"),
          matches: cc11001100_hook("matches", e, "object-key-init")
        }), h = cc11001100_hook("h", h.slice(c.length), "assign"));
        if (!c) break;
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    }, "assign"), "assign");
    function ra(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b = cc11001100_hook("b", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "", "var-init"); c > b; b++) d += cc11001100_hook("d", a[b].value, "assign");
      return d;
    }
    function sa(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var d = cc11001100_hook("d", b.dir, "var-init"),
        e = cc11001100_hook("e", c && "parentNode" === d, "var-init"),
        f = cc11001100_hook("f", x++, "var-init");
      return b.first ? function (b, c, f) {
        while (b = cc11001100_hook("b", b[d], "assign")) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
          i,
          j = cc11001100_hook("j", [w, f], "var-init");
        if (g) {
          while (b = cc11001100_hook("b", b[d], "assign")) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = cc11001100_hook("b", b[d], "assign")) if (1 === b.nodeType || e) {
          if (i = cc11001100_hook("i", b[u] || (b[u] = cc11001100_hook("b[u]", {}, "assign")), "assign"), (h = cc11001100_hook("h", i[d], "assign")) && h[0] === w && h[1] === f) return j[2] = cc11001100_hook("j[2]", h[2], "assign");
          if (i[d] = cc11001100_hook("i[d]", j, "assign"), j[2] = cc11001100_hook("j[2]", a(b, c, g), "assign")) return !0;
        }
      };
    }
    function ta(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.length > 1 ? function (b, c, d) {
        var e = cc11001100_hook("e", a.length, "var-init");
        while (e--) if (!a[e](b, c, d)) return !1;
        return !0;
      } : a[0];
    }
    function ua(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", b.length, "var-init"); e > d; d++) ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var f, g = cc11001100_hook("g", [], "var-init"), h = cc11001100_hook("h", 0, "var-init"), i = cc11001100_hook("i", a.length, "var-init"), j = cc11001100_hook("j", null != b, "var-init"); i > h; h++) (f = cc11001100_hook("f", a[h], "assign")) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      return d && !d[u] && (d = cc11001100_hook("d", wa(d), "assign")), e && !e[u] && (e = cc11001100_hook("e", wa(e, f), "assign")), ia(function (f, g, h, i) {
        var j,
          k,
          l,
          m = cc11001100_hook("m", [], "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          o = cc11001100_hook("o", g.length, "var-init"),
          p = cc11001100_hook("p", f || ua(b || "*", h.nodeType ? [h] : h, []), "var-init"),
          q = cc11001100_hook("q", !a || !f && b ? p : va(p, m, a, h, i), "var-init"),
          r = cc11001100_hook("r", c ? e || (f ? a : o || d) ? [] : g : q, "var-init");
        if (c && c(q, r, h, i), d) {
          j = cc11001100_hook("j", va(r, n), "assign"), d(j, [], h, i), k = cc11001100_hook("k", j.length, "assign");
          while (k--) (l = cc11001100_hook("l", j[k], "assign")) && (r[n[k]] = cc11001100_hook("r[n[k]]", !(q[n[k]] = cc11001100_hook("q[n[k]]", l, "assign")), "assign"));
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = cc11001100_hook("j", [], "assign"), k = cc11001100_hook("k", r.length, "assign");
              while (k--) (l = cc11001100_hook("l", r[k], "assign")) && j.push(q[k] = cc11001100_hook("q[k]", l, "assign"));
              e(null, r = cc11001100_hook("r", [], "assign"), j, i);
            }
            k = cc11001100_hook("k", r.length, "assign");
            while (k--) (l = cc11001100_hook("l", r[k], "assign")) && (j = cc11001100_hook("j", e ? J(f, l) : m[k], "assign")) > -1 && (f[j] = cc11001100_hook("f[j]", !(g[j] = cc11001100_hook("g[j]", l, "assign")), "assign"));
          }
        } else r = cc11001100_hook("r", va(r === g ? r.splice(o, r.length) : r), "assign"), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }
    function xa(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var b, c, e, f = cc11001100_hook("f", a.length, "var-init"), g = cc11001100_hook("g", d.relative[a[0].type], "var-init"), h = cc11001100_hook("h", g || d.relative[" "], "var-init"), i = cc11001100_hook("i", g ? 1 : 0, "var-init"), k = cc11001100_hook("k", sa(function (a) {
          return a === b;
        }, h, !0), "var-init"), l = cc11001100_hook("l", sa(function (a) {
          return J(b, a) > -1;
        }, h, !0), "var-init"), m = cc11001100_hook("m", [function (a, c, d) {
          var e = cc11001100_hook("e", !g && (d || c !== j) || ((b = cc11001100_hook("b", c, "assign")).nodeType ? k(a, c, d) : l(a, c, d)), "var-init");
          return b = cc11001100_hook("b", null, "assign"), e;
        }], "var-init"); f > i; i++) if (c = cc11001100_hook("c", d.relative[a[i].type], "assign")) m = cc11001100_hook("m", [sa(ta(m), c)], "assign");else {
        if (c = cc11001100_hook("c", d.filter[a[i].type].apply(null, a[i].matches), "assign"), c[u]) {
          for (e = cc11001100_hook("e", ++i, "assign"); f > e; e++) if (d.relative[a[e].type]) break;
          return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
            value: cc11001100_hook("value", " " === a[i - 2].type ? "*" : "", "object-key-init")
          })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = cc11001100_hook("a", a.slice(e), "assign")), f > e && ra(a));
        }
        m.push(c);
      }
      return ta(m);
    }
    function ya(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", b.length > 0, "var-init"),
        e = cc11001100_hook("e", a.length > 0, "var-init"),
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = cc11001100_hook("p", 0, "var-init"),
            q = cc11001100_hook("q", "0", "var-init"),
            r = cc11001100_hook("r", f && [], "var-init"),
            s = cc11001100_hook("s", [], "var-init"),
            t = cc11001100_hook("t", j, "var-init"),
            u = cc11001100_hook("u", f || e && d.find.TAG("*", k), "var-init"),
            v = cc11001100_hook("v", w += cc11001100_hook("w", null == t ? 1 : Math.random() || .1, "assign"), "var-init"),
            x = cc11001100_hook("x", u.length, "var-init");
          for (k && (j = cc11001100_hook("j", g !== n && g, "assign")); q !== x && null != (l = cc11001100_hook("l", u[q], "assign")); q++) {
            if (e && l) {
              m = cc11001100_hook("m", 0, "assign");
              while (o = cc11001100_hook("o", a[m++], "assign")) if (o(l, g, h)) {
                i.push(l);
                break;
              }
              k && (w = cc11001100_hook("w", v, "assign"));
            }
            c && ((l = cc11001100_hook("l", !o && l, "assign")) && p--, f && r.push(l));
          }
          if (p += cc11001100_hook("p", q, "assign"), c && q !== p) {
            m = cc11001100_hook("m", 0, "assign");
            while (o = cc11001100_hook("o", b[m++], "assign")) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = cc11001100_hook("s[q]", F.call(i), "assign"));
              s = cc11001100_hook("s", va(s), "assign");
            }
            H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && (w = cc11001100_hook("w", v, "assign"), j = cc11001100_hook("j", t, "assign")), r;
        };
      return c ? ia(f) : f;
    }
    return h = cc11001100_hook("h", ga.compile = cc11001100_hook("ga.compile", function (a, b) {
      var c,
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", [], "var-init"),
        f = cc11001100_hook("f", A[a + " "], "var-init");
      if (!f) {
        b || (b = cc11001100_hook("b", g(a), "assign")), c = cc11001100_hook("c", b.length, "assign");
        while (c--) f = cc11001100_hook("f", xa(b[c]), "assign"), f[u] ? d.push(f) : e.push(f);
        f = cc11001100_hook("f", A(a, ya(e, d)), "assign"), f.selector = cc11001100_hook("f.selector", a, "assign");
      }
      return f;
    }, "assign"), "assign"), i = cc11001100_hook("i", ga.select = cc11001100_hook("ga.select", function (a, b, e, f) {
      var i,
        j,
        k,
        l,
        m,
        n = cc11001100_hook("n", "function" == typeof a && a, "var-init"),
        o = cc11001100_hook("o", !f && g(a = cc11001100_hook("a", n.selector || a, "assign")), "var-init");
      if (e = cc11001100_hook("e", e || [], "assign"), 1 === o.length) {
        if (j = cc11001100_hook("j", o[0] = cc11001100_hook("o[0]", o[0].slice(0), "assign"), "assign"), j.length > 2 && "ID" === (k = cc11001100_hook("k", j[0], "assign")).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = cc11001100_hook("b", (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], "assign"), !b) return e;
          n && (b = cc11001100_hook("b", b.parentNode, "assign")), a = cc11001100_hook("a", a.slice(j.shift().value.length), "assign");
        }
        i = cc11001100_hook("i", X.needsContext.test(a) ? 0 : j.length, "assign");
        while (i--) {
          if (k = cc11001100_hook("k", j[i], "assign"), d.relative[l = cc11001100_hook("l", k.type, "assign")]) break;
          if ((m = cc11001100_hook("m", d.find[l], "assign")) && (f = cc11001100_hook("f", m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b), "assign"))) {
            if (j.splice(i, 1), a = cc11001100_hook("a", f.length && ra(j), "assign"), !a) return H.apply(e, f), e;
            break;
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
    }, "assign"), "assign"), c.sortStable = cc11001100_hook("c.sortStable", u.split("").sort(B).join("") === u, "assign"), c.detectDuplicates = cc11001100_hook("c.detectDuplicates", !!l, "assign"), m(), c.sortDetached = cc11001100_hook("c.sortDetached", ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), "assign"), ja(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<a href='#'></a>", "assign"), "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = cc11001100_hook("a.innerHTML", "<input/>", "assign"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = cc11001100_hook("d", a.getAttributeNode(b), "assign")) && d.specified ? d.value : null;
    }), ga;
  }(a), "var-init");
  n.find = cc11001100_hook("n.find", t, "assign"), n.expr = cc11001100_hook("n.expr", t.selectors, "assign"), n.expr[":"] = cc11001100_hook("n.expr[\":\"]", n.expr.pseudos, "assign"), n.unique = cc11001100_hook("n.unique", t.uniqueSort, "assign"), n.text = cc11001100_hook("n.text", t.getText, "assign"), n.isXMLDoc = cc11001100_hook("n.isXMLDoc", t.isXML, "assign"), n.contains = cc11001100_hook("n.contains", t.contains, "assign");
  var u = cc11001100_hook("u", n.expr.match.needsContext, "var-init"),
    v = cc11001100_hook("v", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
    w = cc11001100_hook("w", /^.[^:#\[\.,]*$/, "var-init");
  function x(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = cc11001100_hook("b", n.filter(b, a), "assign");
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  n.filter = cc11001100_hook("n.filter", function (a, b, c) {
    var d = cc11001100_hook("d", b[0], "var-init");
    return c && (a = cc11001100_hook("a", ":not(" + a + ")", "assign")), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, "assign"), n.fn.extend({
    find: function (a) {
      var b,
        c = cc11001100_hook("c", this.length, "var-init"),
        d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", this, "var-init");
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = cc11001100_hook("b", 0, "assign"); c > b; b++) if (n.contains(e[b], this)) return !0;
      }));
      for (b = cc11001100_hook("b", 0, "assign"); c > b; b++) n.find(a, e[b], d);
      return d = cc11001100_hook("d", this.pushStack(c > 1 ? n.unique(d) : d), "assign"), d.selector = cc11001100_hook("d.selector", this.selector ? this.selector + " " + a : a, "assign"), d;
    },
    filter: function (a) {
      return this.pushStack(x(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(x(this, a || [], !0));
    },
    is: function (a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
    }
  });
  var y,
    z = cc11001100_hook("z", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
    A = cc11001100_hook("A", n.fn.init = cc11001100_hook("n.fn.init", function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = cc11001100_hook("c", "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), "assign"), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = cc11001100_hook("b", b instanceof n ? b[0] : b, "assign"), n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return d = cc11001100_hook("d", l.getElementById(c[2]), "assign"), d && d.parentNode && (this.length = cc11001100_hook("this.length", 1, "assign"), this[0] = cc11001100_hook("this[0]", d, "assign")), this.context = cc11001100_hook("this.context", l, "assign"), this.selector = cc11001100_hook("this.selector", a, "assign"), this;
      }
      return a.nodeType ? (this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", a, "assign"), "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = cc11001100_hook("this.selector", a.selector, "assign"), this.context = cc11001100_hook("this.context", a.context, "assign")), n.makeArray(a, this));
    }, "assign"), "var-init");
  A.prototype = cc11001100_hook("A.prototype", n.fn, "assign"), y = cc11001100_hook("y", n(l), "assign");
  var B = cc11001100_hook("B", /^(?:parents|prev(?:Until|All))/, "var-init"),
    C = cc11001100_hook("C", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  n.extend({
    dir: function (a, b, c) {
      var d = cc11001100_hook("d", [], "var-init"),
        e = cc11001100_hook("e", void 0 !== c, "var-init");
      while ((a = cc11001100_hook("a", a[b], "assign")) && 9 !== a.nodeType) if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
      return d;
    },
    sibling: function (a, b) {
      for (var c = cc11001100_hook("c", [], "var-init"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) 1 === a.nodeType && a !== b && c.push(a);
      return c;
    }
  }), n.fn.extend({
    has: function (a) {
      var b = cc11001100_hook("b", n(a, this), "var-init"),
        c = cc11001100_hook("c", b.length, "var-init");
      return this.filter(function () {
        for (var a = cc11001100_hook("a", 0, "var-init"); c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", this.length, "var-init"), f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0, "var-init"); e > d; d++) for (c = cc11001100_hook("c", this[d], "assign"); c && c !== b; c = cc11001100_hook("c", c.parentNode, "assign")) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);
        break;
      }
      return this.pushStack(f.length > 1 ? n.unique(f) : f);
    },
    index: function (a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function D(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    while ((a = cc11001100_hook("a", a[b], "assign")) && 1 !== a.nodeType);
    return a;
  }
  n.each({
    parent: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return n.dir(a, "parentNode");
    },
    parentsUntil: function (a, b, c) {
      return n.dir(a, "parentNode", c);
    },
    next: function (a) {
      return D(a, "nextSibling");
    },
    prev: function (a) {
      return D(a, "previousSibling");
    },
    nextAll: function (a) {
      return n.dir(a, "nextSibling");
    },
    prevAll: function (a) {
      return n.dir(a, "previousSibling");
    },
    nextUntil: function (a, b, c) {
      return n.dir(a, "nextSibling", c);
    },
    prevUntil: function (a, b, c) {
      return n.dir(a, "previousSibling", c);
    },
    siblings: function (a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return n.sibling(a.firstChild);
    },
    contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = cc11001100_hook("n.fn[a]", function (c, d) {
      var e = cc11001100_hook("e", n.map(this, b, c), "var-init");
      return "Until" !== a.slice(-5) && (d = cc11001100_hook("d", c, "assign")), d && "string" == typeof d && (e = cc11001100_hook("e", n.filter(d, e), "assign")), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    }, "assign");
  });
  var E = cc11001100_hook("E", /\S+/g, "var-init"),
    F = cc11001100_hook("F", {}, "var-init");
  function G(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", F[a] = cc11001100_hook("F[a]", {}, "assign"), "var-init");
    return n.each(a.match(E) || [], function (a, c) {
      b[c] = cc11001100_hook("b[c]", !0, "assign");
    }), b;
  }
  n.Callbacks = cc11001100_hook("n.Callbacks", function (a) {
    a = cc11001100_hook("a", "string" == typeof a ? F[a] || G(a) : n.extend({}, a), "assign");
    var b,
      c,
      d,
      e,
      f,
      g,
      h = cc11001100_hook("h", [], "var-init"),
      i = cc11001100_hook("i", !a.once && [], "var-init"),
      j = function (l) {
        for (b = cc11001100_hook("b", a.memory && l, "assign"), c = cc11001100_hook("c", !0, "assign"), g = cc11001100_hook("g", e || 0, "assign"), e = cc11001100_hook("e", 0, "assign"), f = cc11001100_hook("f", h.length, "assign"), d = cc11001100_hook("d", !0, "assign"); h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          b = cc11001100_hook("b", !1, "assign");
          break;
        }
        d = cc11001100_hook("d", !1, "assign"), h && (i ? i.length && j(i.shift()) : b ? h = cc11001100_hook("h", [], "assign") : k.disable());
      },
      k = cc11001100_hook("k", {
        add: function () {
          if (h) {
            var c = cc11001100_hook("c", h.length, "var-init");
            !function g(b) {
              n.each(b, function (b, c) {
                var d = cc11001100_hook("d", n.type(c), "var-init");
                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
              });
            }(arguments), d ? f = cc11001100_hook("f", h.length, "assign") : b && (e = cc11001100_hook("e", c, "assign"), j(b));
          }
          return this;
        },
        remove: function () {
          return h && n.each(arguments, function (a, b) {
            var c;
            while ((c = cc11001100_hook("c", n.inArray(b, h, c), "assign")) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
          }), this;
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return h = cc11001100_hook("h", [], "assign"), f = cc11001100_hook("f", 0, "assign"), this;
        },
        disable: function () {
          return h = cc11001100_hook("h", i = cc11001100_hook("i", b = cc11001100_hook("b", void 0, "assign"), "assign"), "assign"), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return i = cc11001100_hook("i", void 0, "assign"), b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return !h || c && !i || (b = cc11001100_hook("b", b || [], "assign"), b = cc11001100_hook("b", [a, b.slice ? b.slice() : b], "assign"), d ? i.push(b) : j(b)), this;
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        }
      }, "var-init");
    return k;
  }, "assign"), n.extend({
    Deferred: function (a) {
      var b = cc11001100_hook("b", [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], "var-init"),
        c = cc11001100_hook("c", "pending", "var-init"),
        d = cc11001100_hook("d", {
          state: function () {
            return c;
          },
          always: function () {
            return e.done(arguments).fail(arguments), this;
          },
          then: function () {
            var a = cc11001100_hook("a", arguments, "var-init");
            return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = cc11001100_hook("g", n.isFunction(a[b]) && a[b], "var-init");
                e[f[1]](function () {
                  var a = cc11001100_hook("a", g && g.apply(this, arguments), "var-init");
                  a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                });
              }), a = cc11001100_hook("a", null, "assign");
            }).promise();
          },
          promise: function (a) {
            return null != a ? n.extend(a, d) : d;
          }
        }, "var-init"),
        e = cc11001100_hook("e", {}, "var-init");
      return d.pipe = cc11001100_hook("d.pipe", d.then, "assign"), n.each(b, function (a, f) {
        var g = cc11001100_hook("g", f[2], "var-init"),
          h = cc11001100_hook("h", f[3], "var-init");
        d[f[1]] = cc11001100_hook("d[f[1]]", g.add, "assign"), h && g.add(function () {
          c = cc11001100_hook("c", h, "assign");
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = cc11001100_hook("e[f[0]]", function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, "assign"), e[f[0] + "With"] = cc11001100_hook("e[f[0] + \"With\"]", g.fireWith, "assign");
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function (a) {
      var b = cc11001100_hook("b", 0, "var-init"),
        c = cc11001100_hook("c", d.call(arguments), "var-init"),
        e = cc11001100_hook("e", c.length, "var-init"),
        f = cc11001100_hook("f", 1 !== e || a && n.isFunction(a.promise) ? e : 0, "var-init"),
        g = cc11001100_hook("g", 1 === f ? a : n.Deferred(), "var-init"),
        h = function (a, b, c) {
          return function (e) {
            b[a] = cc11001100_hook("b[a]", this, "assign"), c[a] = cc11001100_hook("c[a]", arguments.length > 1 ? d.call(arguments) : e, "assign"), c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        },
        i,
        j,
        k;
      if (e > 1) for (i = cc11001100_hook("i", new Array(e), "assign"), j = cc11001100_hook("j", new Array(e), "assign"), k = cc11001100_hook("k", new Array(e), "assign"); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  n.fn.ready = cc11001100_hook("n.fn.ready", function (a) {
    return n.ready.promise().done(a), this;
  }, "assign"), n.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = cc11001100_hook("n.isReady", !0, "assign"), a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
    }
  });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
  }
  n.ready.promise = cc11001100_hook("n.ready.promise", function (b) {
    return H || (H = cc11001100_hook("H", n.Deferred(), "assign"), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
  }, "assign"), n.ready.promise();
  var J = cc11001100_hook("J", n.access = cc11001100_hook("n.access", function (a, b, c, d, e, f, g) {
    var h = cc11001100_hook("h", 0, "var-init"),
      i = cc11001100_hook("i", a.length, "var-init"),
      j = cc11001100_hook("j", null == c, "var-init");
    if ("object" === n.type(c)) {
      e = cc11001100_hook("e", !0, "assign");
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = cc11001100_hook("e", !0, "assign"), n.isFunction(d) || (g = cc11001100_hook("g", !0, "assign")), j && (g ? (b.call(a, d), b = cc11001100_hook("b", null, "assign")) : (j = cc11001100_hook("j", b, "assign"), b = cc11001100_hook("b", function (a, b, c) {
      return j.call(n(a), c);
    }, "assign"))), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  }, "assign"), "var-init");
  n.acceptData = cc11001100_hook("n.acceptData", function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  }, "assign");
  function K() {
    Object.defineProperty(this.cache = cc11001100_hook("this.cache", {}, "assign"), 0, {
      get: function () {
        return {};
      }
    }), this.expando = cc11001100_hook("this.expando", n.expando + K.uid++, "assign");
  }
  K.uid = cc11001100_hook("K.uid", 1, "assign"), K.accepts = cc11001100_hook("K.accepts", n.acceptData, "assign"), K.prototype = cc11001100_hook("K.prototype", {
    key: function (a) {
      if (!K.accepts(a)) return 0;
      var b = cc11001100_hook("b", {}, "var-init"),
        c = cc11001100_hook("c", a[this.expando], "var-init");
      if (!c) {
        c = cc11001100_hook("c", K.uid++, "assign");
        try {
          b[this.expando] = cc11001100_hook("b[this.expando]", {
            value: cc11001100_hook("value", c, "object-key-init")
          }, "assign"), Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = cc11001100_hook("b[this.expando]", c, "assign"), n.extend(a, b);
        }
      }
      return this.cache[c] || (this.cache[c] = cc11001100_hook("this.cache[c]", {}, "assign")), c;
    },
    set: function (a, b, c) {
      var d,
        e = cc11001100_hook("e", this.key(a), "var-init"),
        f = cc11001100_hook("f", this.cache[e], "var-init");
      if ("string" == typeof b) f[b] = cc11001100_hook("f[b]", c, "assign");else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) f[d] = cc11001100_hook("f[d]", b[d], "assign");
      return f;
    },
    get: function (a, b) {
      var c = cc11001100_hook("c", this.cache[this.key(a)], "var-init");
      return void 0 === b ? c : c[b];
    },
    access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = cc11001100_hook("d", this.get(a, b), "assign"), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function (a, b) {
      var c,
        d,
        e,
        f = cc11001100_hook("f", this.key(a), "var-init"),
        g = cc11001100_hook("g", this.cache[f], "var-init");
      if (void 0 === b) this.cache[f] = cc11001100_hook("this.cache[f]", {}, "assign");else {
        n.isArray(b) ? d = cc11001100_hook("d", b.concat(b.map(n.camelCase)), "assign") : (e = cc11001100_hook("e", n.camelCase(b), "assign"), b in g ? d = cc11001100_hook("d", [b, e], "assign") : (d = cc11001100_hook("d", e, "assign"), d = cc11001100_hook("d", d in g ? [d] : d.match(E) || [], "assign"))), c = cc11001100_hook("c", d.length, "assign");
        while (c--) delete g[d[c]];
      }
    },
    hasData: function (a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    },
    discard: function (a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    }
  }, "assign");
  var L = cc11001100_hook("L", new K(), "var-init"),
    M = cc11001100_hook("M", new K(), "var-init"),
    N = cc11001100_hook("N", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    O = cc11001100_hook("O", /([A-Z])/g, "var-init");
  function P(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = cc11001100_hook("d", "data-" + b.replace(O, "-$1").toLowerCase(), "assign"), c = cc11001100_hook("c", a.getAttribute(d), "assign"), "string" == typeof c) {
      try {
        c = cc11001100_hook("c", "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c, "assign");
      } catch (e) {}
      M.set(a, b, c);
    } else c = cc11001100_hook("c", void 0, "assign");
    return c;
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c,
        d,
        e,
        f = cc11001100_hook("f", this[0], "var-init"),
        g = cc11001100_hook("g", f && f.attributes, "var-init");
      if (void 0 === a) {
        if (this.length && (e = cc11001100_hook("e", M.get(f), "assign"), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = cc11001100_hook("c", g.length, "assign");
          while (c--) g[c] && (d = cc11001100_hook("d", g[c].name, "assign"), 0 === d.indexOf("data-") && (d = cc11001100_hook("d", n.camelCase(d.slice(5)), "assign"), P(f, d, e[d])));
          L.set(f, "hasDataAttrs", !0);
        }
        return e;
      }
      return "object" == typeof a ? this.each(function () {
        M.set(this, a);
      }) : J(this, function (b) {
        var c,
          d = cc11001100_hook("d", n.camelCase(a), "var-init");
        if (f && void 0 === b) {
          if (c = cc11001100_hook("c", M.get(f, a), "assign"), void 0 !== c) return c;
          if (c = cc11001100_hook("c", M.get(f, d), "assign"), void 0 !== c) return c;
          if (c = cc11001100_hook("c", P(f, d, void 0), "assign"), void 0 !== c) return c;
        } else this.each(function () {
          var c = cc11001100_hook("c", M.get(this, d), "var-init");
          M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function (a) {
      return this.each(function () {
        M.remove(this, a);
      });
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = cc11001100_hook("b", (b || "fx") + "queue", "assign"), d = cc11001100_hook("d", L.get(a, b), "assign"), c && (!d || n.isArray(c) ? d = cc11001100_hook("d", L.access(a, b, n.makeArray(c)), "assign") : d.push(c)), d || []) : void 0;
    },
    dequeue: function (a, b) {
      b = cc11001100_hook("b", b || "fx", "assign");
      var c = cc11001100_hook("c", n.queue(a, b), "var-init"),
        d = cc11001100_hook("d", c.length, "var-init"),
        e = cc11001100_hook("e", c.shift(), "var-init"),
        f = cc11001100_hook("f", n._queueHooks(a, b), "var-init"),
        g = function () {
          n.dequeue(a, b);
        };
      "inprogress" === e && (e = cc11001100_hook("e", c.shift(), "assign"), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function (a, b) {
      var c = cc11001100_hook("c", b + "queueHooks", "var-init");
      return L.get(a, c) || L.access(a, c, {
        empty: cc11001100_hook("empty", n.Callbacks("once memory").add(function () {
          L.remove(a, [b + "queue", c]);
        }), "object-key-init")
      });
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = cc11001100_hook("c", 2, "var-init");
      return "string" != typeof a && (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", "fx", "assign"), c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = cc11001100_hook("c", n.queue(this, a, b), "var-init");
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", []);
    },
    promise: function (a, b) {
      var c,
        d = cc11001100_hook("d", 1, "var-init"),
        e = cc11001100_hook("e", n.Deferred(), "var-init"),
        f = cc11001100_hook("f", this, "var-init"),
        g = cc11001100_hook("g", this.length, "var-init"),
        h = function () {
          --d || e.resolveWith(f, [f]);
        };
      "string" != typeof a && (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", void 0, "assign")), a = cc11001100_hook("a", a || "fx", "assign");
      while (g--) c = cc11001100_hook("c", L.get(f[g], a + "queueHooks"), "assign"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  });
  var Q = cc11001100_hook("Q", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    R = cc11001100_hook("R", ["Top", "Right", "Bottom", "Left"], "var-init"),
    S = function (a, b) {
      return a = cc11001100_hook("a", b || a, "assign"), "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    },
    T = cc11001100_hook("T", /^(?:checkbox|radio)$/i, "var-init");
  !function () {
    var a = cc11001100_hook("a", l.createDocumentFragment(), "var-init"),
      b = cc11001100_hook("b", a.appendChild(l.createElement("div")), "var-init"),
      c = cc11001100_hook("c", l.createElement("input"), "var-init");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = cc11001100_hook("k.checkClone", b.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), b.innerHTML = cc11001100_hook("b.innerHTML", "<textarea>x</textarea>", "assign"), k.noCloneChecked = cc11001100_hook("k.noCloneChecked", !!b.cloneNode(!0).lastChild.defaultValue, "assign");
  }();
  var U = cc11001100_hook("U", "undefined", "var-init");
  k.focusinBubbles = cc11001100_hook("k.focusinBubbles", "onfocusin" in a, "assign");
  var V = cc11001100_hook("V", /^key/, "var-init"),
    W = cc11001100_hook("W", /^(?:mouse|pointer|contextmenu)|click/, "var-init"),
    X = cc11001100_hook("X", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    Y = cc11001100_hook("Y", /^([^.]*)(?:\.(.+)|)$/, "var-init");
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  n.event = cc11001100_hook("n.event", {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = cc11001100_hook("r", L.get(a), "var-init");
      if (r) {
        c.handler && (f = cc11001100_hook("f", c, "assign"), c = cc11001100_hook("c", f.handler, "assign"), e = cc11001100_hook("e", f.selector, "assign")), c.guid || (c.guid = cc11001100_hook("c.guid", n.guid++, "assign")), (i = cc11001100_hook("i", r.events, "assign")) || (i = cc11001100_hook("i", r.events = cc11001100_hook("r.events", {}, "assign"), "assign")), (g = cc11001100_hook("g", r.handle, "assign")) || (g = cc11001100_hook("g", r.handle = cc11001100_hook("r.handle", function (b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }, "assign"), "assign")), b = cc11001100_hook("b", (b || "").match(E) || [""], "assign"), j = cc11001100_hook("j", b.length, "assign");
        while (j--) h = cc11001100_hook("h", Y.exec(b[j]) || [], "assign"), o = cc11001100_hook("o", q = cc11001100_hook("q", h[1], "assign"), "assign"), p = cc11001100_hook("p", (h[2] || "").split(".").sort(), "assign"), o && (l = cc11001100_hook("l", n.event.special[o] || {}, "assign"), o = cc11001100_hook("o", (e ? l.delegateType : l.bindType) || o, "assign"), l = cc11001100_hook("l", n.event.special[o] || {}, "assign"), k = cc11001100_hook("k", n.extend({
          type: cc11001100_hook("type", o, "object-key-init"),
          origType: cc11001100_hook("origType", q, "object-key-init"),
          data: cc11001100_hook("data", d, "object-key-init"),
          handler: cc11001100_hook("handler", c, "object-key-init"),
          guid: cc11001100_hook("guid", c.guid, "object-key-init"),
          selector: cc11001100_hook("selector", e, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", e && n.expr.match.needsContext.test(e), "object-key-init"),
          namespace: cc11001100_hook("namespace", p.join("."), "object-key-init")
        }, f), "assign"), (m = cc11001100_hook("m", i[o], "assign")) || (m = cc11001100_hook("m", i[o] = cc11001100_hook("i[o]", [], "assign"), "assign"), m.delegateCount = cc11001100_hook("m.delegateCount", 0, "assign"), l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = cc11001100_hook("k.handler.guid", c.guid, "assign"))), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = cc11001100_hook("n.event.global[o]", !0, "assign"));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = cc11001100_hook("r", L.hasData(a) && L.get(a), "var-init");
      if (r && (i = cc11001100_hook("i", r.events, "assign"))) {
        b = cc11001100_hook("b", (b || "").match(E) || [""], "assign"), j = cc11001100_hook("j", b.length, "assign");
        while (j--) if (h = cc11001100_hook("h", Y.exec(b[j]) || [], "assign"), o = cc11001100_hook("o", q = cc11001100_hook("q", h[1], "assign"), "assign"), p = cc11001100_hook("p", (h[2] || "").split(".").sort(), "assign"), o) {
          l = cc11001100_hook("l", n.event.special[o] || {}, "assign"), o = cc11001100_hook("o", (d ? l.delegateType : l.bindType) || o, "assign"), m = cc11001100_hook("m", i[o] || [], "assign"), h = cc11001100_hook("h", h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), g = cc11001100_hook("g", f = cc11001100_hook("f", m.length, "assign"), "assign");
          while (f--) k = cc11001100_hook("k", m[f], "assign"), !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
          g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = cc11001100_hook("p", [d || l], "var-init"),
        q = cc11001100_hook("q", j.call(b, "type") ? b.type : b, "var-init"),
        r = cc11001100_hook("r", j.call(b, "namespace") ? b.namespace.split(".") : [], "var-init");
      if (g = cc11001100_hook("g", h = cc11001100_hook("h", d = cc11001100_hook("d", d || l, "assign"), "assign"), "assign"), 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = cc11001100_hook("r", q.split("."), "assign"), q = cc11001100_hook("q", r.shift(), "assign"), r.sort()), k = cc11001100_hook("k", q.indexOf(":") < 0 && "on" + q, "assign"), b = cc11001100_hook("b", b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), "assign"), b.isTrigger = cc11001100_hook("b.isTrigger", e ? 2 : 3, "assign"), b.namespace = cc11001100_hook("b.namespace", r.join("."), "assign"), b.namespace_re = cc11001100_hook("b.namespace_re", b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), b.result = cc11001100_hook("b.result", void 0, "assign"), b.target || (b.target = cc11001100_hook("b.target", d, "assign")), c = cc11001100_hook("c", null == c ? [b] : n.makeArray(c, [b]), "assign"), o = cc11001100_hook("o", n.event.special[q] || {}, "assign"), e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = cc11001100_hook("i", o.delegateType || q, "assign"), X.test(i + q) || (g = cc11001100_hook("g", g.parentNode, "assign")); g; g = cc11001100_hook("g", g.parentNode, "assign")) p.push(g), h = cc11001100_hook("h", g, "assign");
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }
        f = cc11001100_hook("f", 0, "assign");
        while ((g = cc11001100_hook("g", p[f++], "assign")) && !b.isPropagationStopped()) b.type = cc11001100_hook("b.type", f > 1 ? i : o.bindType || q, "assign"), m = cc11001100_hook("m", (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), "assign"), m && m.apply(g, c), m = cc11001100_hook("m", k && g[k], "assign"), m && m.apply && n.acceptData(g) && (b.result = cc11001100_hook("b.result", m.apply(g, c), "assign"), b.result === !1 && b.preventDefault());
        return b.type = cc11001100_hook("b.type", q, "assign"), e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = cc11001100_hook("h", d[k], "assign"), h && (d[k] = cc11001100_hook("d[k]", null, "assign")), n.event.triggered = cc11001100_hook("n.event.triggered", q, "assign"), d[q](), n.event.triggered = cc11001100_hook("n.event.triggered", void 0, "assign"), h && (d[k] = cc11001100_hook("d[k]", h, "assign"))), b.result;
      }
    },
    dispatch: function (a) {
      a = cc11001100_hook("a", n.event.fix(a), "assign");
      var b,
        c,
        e,
        f,
        g,
        h = cc11001100_hook("h", [], "var-init"),
        i = cc11001100_hook("i", d.call(arguments), "var-init"),
        j = cc11001100_hook("j", (L.get(this, "events") || {})[a.type] || [], "var-init"),
        k = cc11001100_hook("k", n.event.special[a.type] || {}, "var-init");
      if (i[0] = cc11001100_hook("i[0]", a, "assign"), a.delegateTarget = cc11001100_hook("a.delegateTarget", this, "assign"), !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = cc11001100_hook("h", n.event.handlers.call(this, a, j), "assign"), b = cc11001100_hook("b", 0, "assign");
        while ((f = cc11001100_hook("f", h[b++], "assign")) && !a.isPropagationStopped()) {
          a.currentTarget = cc11001100_hook("a.currentTarget", f.elem, "assign"), c = cc11001100_hook("c", 0, "assign");
          while ((g = cc11001100_hook("g", f.handlers[c++], "assign")) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = cc11001100_hook("a.handleObj", g, "assign"), a.data = cc11001100_hook("a.data", g.data, "assign"), e = cc11001100_hook("e", ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), "assign"), void 0 !== e && (a.result = cc11001100_hook("a.result", e, "assign")) === !1 && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = cc11001100_hook("g", [], "var-init"),
        h = cc11001100_hook("h", b.delegateCount, "var-init"),
        i = cc11001100_hook("i", a.target, "var-init");
      if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = cc11001100_hook("i", i.parentNode || this, "assign")) if (i.disabled !== !0 || "click" !== a.type) {
        for (d = cc11001100_hook("d", [], "assign"), c = cc11001100_hook("c", 0, "assign"); h > c; c++) f = cc11001100_hook("f", b[c], "assign"), e = cc11001100_hook("e", f.selector + " ", "assign"), void 0 === d[e] && (d[e] = cc11001100_hook("d[e]", f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length, "assign")), d[e] && d.push(f);
        d.length && g.push({
          elem: cc11001100_hook("elem", i, "object-key-init"),
          handlers: cc11001100_hook("handlers", d, "object-key-init")
        });
      }
      return h < b.length && g.push({
        elem: cc11001100_hook("elem", this, "object-key-init"),
        handlers: cc11001100_hook("handlers", b.slice(h), "object-key-init")
      }), g;
    },
    props: cc11001100_hook("props", "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), "object-key-init"),
    fixHooks: {},
    keyHooks: {
      props: cc11001100_hook("props", "char charCode key keyCode".split(" "), "object-key-init"),
      filter: function (a, b) {
        return null == a.which && (a.which = cc11001100_hook("a.which", null != b.charCode ? b.charCode : b.keyCode, "assign")), a;
      }
    },
    mouseHooks: {
      props: cc11001100_hook("props", "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = cc11001100_hook("f", b.button, "var-init");
        return null == a.pageX && null != b.clientX && (c = cc11001100_hook("c", a.target.ownerDocument || l, "assign"), d = cc11001100_hook("d", c.documentElement, "assign"), e = cc11001100_hook("e", c.body, "assign"), a.pageX = cc11001100_hook("a.pageX", b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), "assign"), a.pageY = cc11001100_hook("a.pageY", b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0), "assign")), a.which || void 0 === f || (a.which = cc11001100_hook("a.which", 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0, "assign")), a;
      }
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = cc11001100_hook("e", a.type, "var-init"),
        f = cc11001100_hook("f", a, "var-init"),
        g = cc11001100_hook("g", this.fixHooks[e], "var-init");
      g || (this.fixHooks[e] = cc11001100_hook("this.fixHooks[e]", g = cc11001100_hook("g", W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}, "assign"), "assign")), d = cc11001100_hook("d", g.props ? this.props.concat(g.props) : this.props, "assign"), a = cc11001100_hook("a", new n.Event(f), "assign"), b = cc11001100_hook("b", d.length, "assign");
      while (b--) c = cc11001100_hook("c", d[b], "assign"), a[c] = cc11001100_hook("a[c]", f[c], "assign");
      return a.target || (a.target = cc11001100_hook("a.target", l, "assign")), 3 === a.target.nodeType && (a.target = cc11001100_hook("a.target", a.target.parentNode, "assign")), g.filter ? g.filter(a, f) : a;
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = cc11001100_hook("a.originalEvent.returnValue", a.result, "assign"));
        }
      }
    },
    simulate: function (a, b, c, d) {
      var e = cc11001100_hook("e", n.extend(new n.Event(), c, {
        type: cc11001100_hook("type", a, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init"),
        originalEvent: {}
      }), "var-init");
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, "assign"), n.removeEvent = cc11001100_hook("n.removeEvent", function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, "assign"), n.Event = cc11001100_hook("n.Event", function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", a, "assign"), this.type = cc11001100_hook("this.type", a.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $, "assign")) : this.type = cc11001100_hook("this.type", a, "assign"), b && n.extend(this, b), this.timeStamp = cc11001100_hook("this.timeStamp", a && a.timeStamp || n.now(), "assign"), void (this[n.expando] = cc11001100_hook("this[n.expando]", !0, "assign"))) : new n.Event(a, b);
  }, "assign"), n.Event.prototype = cc11001100_hook("n.Event.prototype", {
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", $, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", $, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", $, "object-key-init"),
    preventDefault: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", Z, "assign"), a && a.preventDefault && a.preventDefault();
    },
    stopPropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", Z, "assign"), a && a.stopPropagation && a.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var a = cc11001100_hook("a", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", Z, "assign"), a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, "assign"), n.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init"),
    pointerenter: cc11001100_hook("pointerenter", "pointerover", "object-key-init"),
    pointerleave: cc11001100_hook("pointerleave", "pointerout", "object-key-init")
  }, function (a, b) {
    n.event.special[a] = cc11001100_hook("n.event.special[a]", {
      delegateType: cc11001100_hook("delegateType", b, "object-key-init"),
      bindType: cc11001100_hook("bindType", b, "object-key-init"),
      handle: function (a) {
        var c,
          d = cc11001100_hook("d", this, "var-init"),
          e = cc11001100_hook("e", a.relatedTarget, "var-init"),
          f = cc11001100_hook("f", a.handleObj, "var-init");
        return (!e || e !== d && !n.contains(d, e)) && (a.type = cc11001100_hook("a.type", f.origType, "assign"), c = cc11001100_hook("c", f.handler.apply(this, arguments), "assign"), a.type = cc11001100_hook("a.type", b, "assign")), c;
      }
    }, "assign");
  }), k.focusinBubbles || n.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };
    n.event.special[b] = cc11001100_hook("n.event.special[b]", {
      setup: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", L.access(d, b), "var-init");
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      },
      teardown: function () {
        var d = cc11001100_hook("d", this.ownerDocument || this, "var-init"),
          e = cc11001100_hook("e", L.access(d, b) - 1, "var-init");
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      }
    }, "assign");
  }), n.fn.extend({
    on: function (a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = cc11001100_hook("c", c || b, "assign"), b = cc11001100_hook("b", void 0, "assign"));
        for (g in a) this.on(g, b, c, a[g], e);
        return this;
      }
      if (null == c && null == d ? (d = cc11001100_hook("d", b, "assign"), c = cc11001100_hook("c", b = cc11001100_hook("b", void 0, "assign"), "assign")) : null == d && ("string" == typeof b ? (d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", void 0, "assign")) : (d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign"))), d === !1) d = cc11001100_hook("d", $, "assign");else if (!d) return this;
      return 1 === e && (f = cc11001100_hook("f", d, "assign"), d = cc11001100_hook("d", function (a) {
        return n().off(a), f.apply(this, arguments);
      }, "assign"), d.guid = cc11001100_hook("d.guid", f.guid || (f.guid = cc11001100_hook("f.guid", n.guid++, "assign")), "assign")), this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    },
    one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = cc11001100_hook("d", a.handleObj, "assign"), n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this;
      }
      return (b === !1 || "function" == typeof b) && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")), c === !1 && (c = cc11001100_hook("c", $, "assign")), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = cc11001100_hook("c", this[0], "var-init");
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var aa = cc11001100_hook("aa", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "var-init"),
    ba = cc11001100_hook("ba", /<([\w:]+)/, "var-init"),
    ca = cc11001100_hook("ca", /<|&#?\w+;/, "var-init"),
    da = cc11001100_hook("da", /<(?:script|style|link)/i, "var-init"),
    ea = cc11001100_hook("ea", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    fa = cc11001100_hook("fa", /^$|\/(?:java|ecma)script/i, "var-init"),
    ga = cc11001100_hook("ga", /^true\/(.*)/, "var-init"),
    ha = cc11001100_hook("ha", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init"),
    ia = cc11001100_hook("ia", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><colgroup>", "</colgroup></table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", [0, "", ""], "object-key-init")
    }, "var-init");
  ia.optgroup = cc11001100_hook("ia.optgroup", ia.option, "assign"), ia.tbody = cc11001100_hook("ia.tbody", ia.tfoot = cc11001100_hook("ia.tfoot", ia.colgroup = cc11001100_hook("ia.colgroup", ia.caption = cc11001100_hook("ia.caption", ia.thead, "assign"), "assign"), "assign"), "assign"), ia.th = cc11001100_hook("ia.th", ia.td, "assign");
  function ja(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }
  function ka(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.type = cc11001100_hook("a.type", (null !== a.getAttribute("type")) + "/" + a.type, "assign"), a;
  }
  function la(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", ga.exec(a.type), "var-init");
    return b ? a.type = cc11001100_hook("a.type", b[1], "assign") : a.removeAttribute("type"), a;
  }
  function ma(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length, "var-init"); d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function na(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = cc11001100_hook("f", L.access(a), "assign"), g = cc11001100_hook("g", L.set(b, f), "assign"), j = cc11001100_hook("j", f.events, "assign"))) {
        delete g.handle, g.events = cc11001100_hook("g.events", {}, "assign");
        for (e in j) for (c = cc11001100_hook("c", 0, "assign"), d = cc11001100_hook("d", j[e].length, "assign"); d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && (h = cc11001100_hook("h", M.access(a), "assign"), i = cc11001100_hook("i", n.extend({}, h), "assign"), M.set(b, i));
    }
  }
  function oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [], "var-init");
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }
  function pa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", b.nodeName.toLowerCase(), "var-init");
    "input" === c && T.test(a.type) ? b.checked = cc11001100_hook("b.checked", a.checked, "assign") : ("input" === c || "textarea" === c) && (b.defaultValue = cc11001100_hook("b.defaultValue", a.defaultValue, "assign"));
  }
  n.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = cc11001100_hook("h", a.cloneNode(!0), "var-init"),
        i = cc11001100_hook("i", n.contains(a.ownerDocument, a), "var-init");
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = cc11001100_hook("g", oa(h), "assign"), f = cc11001100_hook("f", oa(a), "assign"), d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", f.length, "assign"); e > d; d++) pa(f[d], g[d]);
      if (b) if (c) for (f = cc11001100_hook("f", f || oa(a), "assign"), g = cc11001100_hook("g", g || oa(h), "assign"), d = cc11001100_hook("d", 0, "assign"), e = cc11001100_hook("e", f.length, "assign"); e > d; d++) na(f[d], g[d]);else na(a, h);
      return g = cc11001100_hook("g", oa(h, "script"), "assign"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
    },
    buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, k = cc11001100_hook("k", b.createDocumentFragment(), "var-init"), l = cc11001100_hook("l", [], "var-init"), m = cc11001100_hook("m", 0, "var-init"), o = cc11001100_hook("o", a.length, "var-init"); o > m; m++) if (e = cc11001100_hook("e", a[m], "assign"), e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
        f = cc11001100_hook("f", f || k.appendChild(b.createElement("div")), "assign"), g = cc11001100_hook("g", (ba.exec(e) || ["", ""])[1].toLowerCase(), "assign"), h = cc11001100_hook("h", ia[g] || ia._default, "assign"), f.innerHTML = cc11001100_hook("f.innerHTML", h[1] + e.replace(aa, "<$1></$2>") + h[2], "assign"), j = cc11001100_hook("j", h[0], "assign");
        while (j--) f = cc11001100_hook("f", f.lastChild, "assign");
        n.merge(l, f.childNodes), f = cc11001100_hook("f", k.firstChild, "assign"), f.textContent = cc11001100_hook("f.textContent", "", "assign");
      } else l.push(b.createTextNode(e));
      k.textContent = cc11001100_hook("k.textContent", "", "assign"), m = cc11001100_hook("m", 0, "assign");
      while (e = cc11001100_hook("e", l[m++], "assign")) if ((!d || -1 === n.inArray(e, d)) && (i = cc11001100_hook("i", n.contains(e.ownerDocument, e), "assign"), f = cc11001100_hook("f", oa(k.appendChild(e), "script"), "assign"), i && ma(f), c)) {
        j = cc11001100_hook("j", 0, "assign");
        while (e = cc11001100_hook("e", f[j++], "assign")) fa.test(e.type || "") && c.push(e);
      }
      return k;
    },
    cleanData: function (a) {
      for (var b, c, d, e, f = cc11001100_hook("f", n.event.special, "var-init"), g = cc11001100_hook("g", 0, "var-init"); void 0 !== (c = cc11001100_hook("c", a[g], "assign")); g++) {
        if (n.acceptData(c) && (e = cc11001100_hook("e", c[L.expando], "assign"), e && (b = cc11001100_hook("b", L.cache[e], "assign")))) {
          if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    }
  }), n.fn.extend({
    text: function (a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = cc11001100_hook("this.textContent", a, "assign"));
        });
      }, null, a, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = cc11001100_hook("b", ja(this, a), "var-init");
          b.appendChild(a);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = cc11001100_hook("b", ja(this, a), "var-init");
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function (a, b) {
      for (var c, d = cc11001100_hook("d", a ? n.filter(a, this) : this, "var-init"), e = cc11001100_hook("e", 0, "var-init"); null != (c = cc11001100_hook("c", d[e], "assign")); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
      return this;
    },
    empty: function () {
      for (var a, b = cc11001100_hook("b", 0, "var-init"); null != (a = cc11001100_hook("a", this[b], "assign")); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = cc11001100_hook("a.textContent", "", "assign"));
      return this;
    },
    clone: function (a, b) {
      return a = cc11001100_hook("a", null == a ? !1 : a, "assign"), b = cc11001100_hook("b", null == b ? a : b, "assign"), this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function (a) {
      return J(this, function (a) {
        var b = cc11001100_hook("b", this[0] || {}, "var-init"),
          c = cc11001100_hook("c", 0, "var-init"),
          d = cc11001100_hook("d", this.length, "var-init");
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = cc11001100_hook("a", a.replace(aa, "<$1></$2>"), "assign");
          try {
            for (; d > c; c++) b = cc11001100_hook("b", this[c] || {}, "assign"), 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = cc11001100_hook("b.innerHTML", a, "assign"));
            b = cc11001100_hook("b", 0, "assign");
          } catch (e) {}
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = cc11001100_hook("a", arguments[0], "var-init");
      return this.domManip(arguments, function (b) {
        a = cc11001100_hook("a", this.parentNode, "assign"), n.cleanData(oa(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function (a) {
      return this.remove(a, !0);
    },
    domManip: function (a, b) {
      a = cc11001100_hook("a", e.apply([], a), "assign");
      var c,
        d,
        f,
        g,
        h,
        i,
        j = cc11001100_hook("j", 0, "var-init"),
        l = cc11001100_hook("l", this.length, "var-init"),
        m = cc11001100_hook("m", this, "var-init"),
        o = cc11001100_hook("o", l - 1, "var-init"),
        p = cc11001100_hook("p", a[0], "var-init"),
        q = cc11001100_hook("q", n.isFunction(p), "var-init");
      if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
        var d = cc11001100_hook("d", m.eq(c), "var-init");
        q && (a[0] = cc11001100_hook("a[0]", p.call(this, c, d.html()), "assign")), d.domManip(a, b);
      });
      if (l && (c = cc11001100_hook("c", n.buildFragment(a, this[0].ownerDocument, !1, this), "assign"), d = cc11001100_hook("d", c.firstChild, "assign"), 1 === c.childNodes.length && (c = cc11001100_hook("c", d, "assign")), d)) {
        for (f = cc11001100_hook("f", n.map(oa(c, "script"), ka), "assign"), g = cc11001100_hook("g", f.length, "assign"); l > j; j++) h = cc11001100_hook("h", c, "assign"), j !== o && (h = cc11001100_hook("h", n.clone(h, !0, !0), "assign"), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
        if (g) for (i = cc11001100_hook("i", f[f.length - 1].ownerDocument, "assign"), n.map(f, la), j = cc11001100_hook("j", 0, "assign"); g > j; j++) h = cc11001100_hook("h", f[j], "assign"), fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
      }
      return this;
    }
  }), n.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (a, b) {
    n.fn[a] = cc11001100_hook("n.fn[a]", function (a) {
      for (var c, d = cc11001100_hook("d", [], "var-init"), e = cc11001100_hook("e", n(a), "var-init"), g = cc11001100_hook("g", e.length - 1, "var-init"), h = cc11001100_hook("h", 0, "var-init"); g >= h; h++) c = cc11001100_hook("c", h === g ? this : this.clone(!0), "assign"), n(e[h])[b](c), f.apply(d, c.get());
      return this.pushStack(d);
    }, "assign");
  });
  var qa,
    ra = cc11001100_hook("ra", {}, "var-init");
  function sa(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e = cc11001100_hook("e", n(c.createElement(b)).appendTo(c.body), "var-init"),
      f = cc11001100_hook("f", a.getDefaultComputedStyle && (d = cc11001100_hook("d", a.getDefaultComputedStyle(e[0]), "assign")) ? d.display : n.css(e[0], "display"), "var-init");
    return e.detach(), f;
  }
  function ta(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", l, "var-init"),
      c = cc11001100_hook("c", ra[a], "var-init");
    return c || (c = cc11001100_hook("c", sa(a, b), "assign"), "none" !== c && c || (qa = cc11001100_hook("qa", (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), "assign"), b = cc11001100_hook("b", qa[0].contentDocument, "assign"), b.write(), b.close(), c = cc11001100_hook("c", sa(a, b), "assign"), qa.detach()), ra[a] = cc11001100_hook("ra[a]", c, "assign")), c;
  }
  var ua = cc11001100_hook("ua", /^margin/, "var-init"),
    va = cc11001100_hook("va", new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), "var-init"),
    wa = function (b) {
      return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
  function xa(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.style, "var-init");
    return c = cc11001100_hook("c", c || wa(a), "assign"), c && (g = cc11001100_hook("g", c.getPropertyValue(b) || c[b], "assign")), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = cc11001100_hook("g", n.style(a, b), "assign")), va.test(g) && ua.test(b) && (d = cc11001100_hook("d", h.width, "assign"), e = cc11001100_hook("e", h.minWidth, "assign"), f = cc11001100_hook("f", h.maxWidth, "assign"), h.minWidth = cc11001100_hook("h.minWidth", h.maxWidth = cc11001100_hook("h.maxWidth", h.width = cc11001100_hook("h.width", g, "assign"), "assign"), "assign"), g = cc11001100_hook("g", c.width, "assign"), h.width = cc11001100_hook("h.width", d, "assign"), h.minWidth = cc11001100_hook("h.minWidth", e, "assign"), h.maxWidth = cc11001100_hook("h.maxWidth", f, "assign"))), void 0 !== g ? g + "" : g;
  }
  function ya(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = cc11001100_hook("this.get", b, "assign")).apply(this, arguments);
      }
    };
  }
  !function () {
    var b,
      c,
      d = cc11001100_hook("d", l.documentElement, "var-init"),
      e = cc11001100_hook("e", l.createElement("div"), "var-init"),
      f = cc11001100_hook("f", l.createElement("div"), "var-init");
    if (f.style) {
      f.style.backgroundClip = cc11001100_hook("f.style.backgroundClip", "content-box", "assign"), f.cloneNode(!0).style.backgroundClip = cc11001100_hook("f.cloneNode(!0).style.backgroundClip", "", "assign"), k.clearCloneStyle = cc11001100_hook("k.clearCloneStyle", "content-box" === f.style.backgroundClip, "assign"), e.style.cssText = cc11001100_hook("e.style.cssText", "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", "assign"), e.appendChild(f);
      function g() {
        f.style.cssText = cc11001100_hook("f.style.cssText", "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", "assign"), f.innerHTML = cc11001100_hook("f.innerHTML", "", "assign"), d.appendChild(e);
        var g = cc11001100_hook("g", a.getComputedStyle(f, null), "var-init");
        b = cc11001100_hook("b", "1%" !== g.top, "assign"), c = cc11001100_hook("c", "4px" === g.width, "assign"), d.removeChild(e);
      }
      a.getComputedStyle && n.extend(k, {
        pixelPosition: function () {
          return g(), b;
        },
        boxSizingReliable: function () {
          return null == c && g(), c;
        },
        reliableMarginRight: function () {
          var b,
            c = cc11001100_hook("c", f.appendChild(l.createElement("div")), "var-init");
          return c.style.cssText = cc11001100_hook("c.style.cssText", f.style.cssText = cc11001100_hook("f.style.cssText", "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", "assign"), "assign"), c.style.marginRight = cc11001100_hook("c.style.marginRight", c.style.width = cc11001100_hook("c.style.width", "0", "assign"), "assign"), f.style.width = cc11001100_hook("f.style.width", "1px", "assign"), d.appendChild(e), b = cc11001100_hook("b", !parseFloat(a.getComputedStyle(c, null).marginRight), "assign"), d.removeChild(e), f.removeChild(c), b;
        }
      });
    }
  }(), n.swap = cc11001100_hook("n.swap", function (a, b, c, d) {
    var e,
      f,
      g = cc11001100_hook("g", {}, "var-init");
    for (f in b) g[f] = cc11001100_hook("g[f]", a.style[f], "assign"), a.style[f] = cc11001100_hook("a.style[f]", b[f], "assign");
    e = cc11001100_hook("e", c.apply(a, d || []), "assign");
    for (f in b) a.style[f] = cc11001100_hook("a.style[f]", g[f], "assign");
    return e;
  }, "assign");
  var za = cc11001100_hook("za", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Aa = cc11001100_hook("Aa", new RegExp("^(" + Q + ")(.*)$", "i"), "var-init"),
    Ba = cc11001100_hook("Ba", new RegExp("^([+-])=(" + Q + ")", "i"), "var-init"),
    Ca = cc11001100_hook("Ca", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Da = cc11001100_hook("Da", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init"),
    Ea = cc11001100_hook("Ea", ["Webkit", "O", "Moz", "ms"], "var-init");
  function Fa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b in a) return b;
    var c = cc11001100_hook("c", b[0].toUpperCase() + b.slice(1), "var-init"),
      d = cc11001100_hook("d", b, "var-init"),
      e = cc11001100_hook("e", Ea.length, "var-init");
    while (e--) if (b = cc11001100_hook("b", Ea[e] + c, "assign"), b in a) return b;
    return d;
  }
  function Ga(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", Aa.exec(b), "var-init");
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Ha(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var f = cc11001100_hook("f", c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, "var-init"), g = cc11001100_hook("g", 0, "var-init"); 4 > f; f += cc11001100_hook("f", 2, "assign")) "margin" === c && (g += cc11001100_hook("g", n.css(a, c + R[f], !0, e), "assign")), d ? ("content" === c && (g -= cc11001100_hook("g", n.css(a, "padding" + R[f], !0, e), "assign")), "margin" !== c && (g -= cc11001100_hook("g", n.css(a, "border" + R[f] + "Width", !0, e), "assign"))) : (g += cc11001100_hook("g", n.css(a, "padding" + R[f], !0, e), "assign"), "padding" !== c && (g += cc11001100_hook("g", n.css(a, "border" + R[f] + "Width", !0, e), "assign")));
    return g;
  }
  function Ia(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", !0, "var-init"),
      e = cc11001100_hook("e", "width" === b ? a.offsetWidth : a.offsetHeight, "var-init"),
      f = cc11001100_hook("f", wa(a), "var-init"),
      g = cc11001100_hook("g", "border-box" === n.css(a, "boxSizing", !1, f), "var-init");
    if (0 >= e || null == e) {
      if (e = cc11001100_hook("e", xa(a, b, f), "assign"), (0 > e || null == e) && (e = cc11001100_hook("e", a.style[b], "assign")), va.test(e)) return e;
      d = cc11001100_hook("d", g && (k.boxSizingReliable() || e === a.style[b]), "assign"), e = cc11001100_hook("e", parseFloat(e) || 0, "assign");
    }
    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Ja(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    for (var c, d, e, f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"), h = cc11001100_hook("h", a.length, "var-init"); h > g; g++) d = cc11001100_hook("d", a[g], "assign"), d.style && (f[g] = cc11001100_hook("f[g]", L.get(d, "olddisplay"), "assign"), c = cc11001100_hook("c", d.style.display, "assign"), b ? (f[g] || "none" !== c || (d.style.display = cc11001100_hook("d.style.display", "", "assign")), "" === d.style.display && S(d) && (f[g] = cc11001100_hook("f[g]", L.access(d, "olddisplay", ta(d.nodeName)), "assign"))) : (e = cc11001100_hook("e", S(d), "assign"), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = cc11001100_hook("g", 0, "assign"); h > g; g++) d = cc11001100_hook("d", a[g], "assign"), d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = cc11001100_hook("d.style.display", b ? f[g] || "" : "none", "assign")));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = cc11001100_hook("c", xa(a, "opacity"), "var-init");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      columnCount: cc11001100_hook("columnCount", !0, "object-key-init"),
      fillOpacity: cc11001100_hook("fillOpacity", !0, "object-key-init"),
      flexGrow: cc11001100_hook("flexGrow", !0, "object-key-init"),
      flexShrink: cc11001100_hook("flexShrink", !0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", !0, "object-key-init"),
      lineHeight: cc11001100_hook("lineHeight", !0, "object-key-init"),
      opacity: cc11001100_hook("opacity", !0, "object-key-init"),
      order: cc11001100_hook("order", !0, "object-key-init"),
      orphans: cc11001100_hook("orphans", !0, "object-key-init"),
      widows: cc11001100_hook("widows", !0, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", !0, "object-key-init"),
      zoom: cc11001100_hook("zoom", !0, "object-key-init")
    },
    cssProps: {
      "float": cc11001100_hook("float", "cssFloat", "object-key-init")
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = cc11001100_hook("h", n.camelCase(b), "var-init"),
          i = cc11001100_hook("i", a.style, "var-init");
        return b = cc11001100_hook("b", n.cssProps[h] || (n.cssProps[h] = cc11001100_hook("n.cssProps[h]", Fa(i, h), "assign")), "assign"), g = cc11001100_hook("g", n.cssHooks[b] || n.cssHooks[h], "assign"), void 0 === c ? g && "get" in g && void 0 !== (e = cc11001100_hook("e", g.get(a, !1, d), "assign")) ? e : i[b] : (f = cc11001100_hook("f", typeof c, "assign"), "string" === f && (e = cc11001100_hook("e", Ba.exec(c), "assign")) && (c = cc11001100_hook("c", (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), "assign"), f = cc11001100_hook("f", "number", "assign")), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += cc11001100_hook("c", "px", "assign")), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = cc11001100_hook("i[b]", "inherit", "assign")), g && "set" in g && void 0 === (c = cc11001100_hook("c", g.set(a, c, d), "assign")) || (i[b] = cc11001100_hook("i[b]", c, "assign"))), void 0);
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = cc11001100_hook("h", n.camelCase(b), "var-init");
      return b = cc11001100_hook("b", n.cssProps[h] || (n.cssProps[h] = cc11001100_hook("n.cssProps[h]", Fa(a.style, h), "assign")), "assign"), g = cc11001100_hook("g", n.cssHooks[b] || n.cssHooks[h], "assign"), g && "get" in g && (e = cc11001100_hook("e", g.get(a, !0, c), "assign")), void 0 === e && (e = cc11001100_hook("e", xa(a, b, d), "assign")), "normal" === e && b in Da && (e = cc11001100_hook("e", Da[b], "assign")), "" === c || c ? (f = cc11001100_hook("f", parseFloat(e), "assign"), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = cc11001100_hook("n.cssHooks[b]", {
      get: function (a, c, d) {
        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
          return Ia(a, b, d);
        }) : Ia(a, b, d) : void 0;
      },
      set: function (a, c, d) {
        var e = cc11001100_hook("e", d && wa(a), "var-init");
        return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    }, "assign");
  }), n.cssHooks.marginRight = cc11001100_hook("n.cssHooks.marginRight", ya(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, {
      display: cc11001100_hook("display", "inline-block", "object-key-init")
    }, xa, [a, "marginRight"]) : void 0;
  }), "assign"), n.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (a, b) {
    n.cssHooks[a + b] = cc11001100_hook("n.cssHooks[a + b]", {
      expand: function (c) {
        for (var d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", {}, "var-init"), f = cc11001100_hook("f", "string" == typeof c ? c.split(" ") : [c], "var-init"); 4 > d; d++) e[a + R[d] + b] = cc11001100_hook("e[a + R[d] + b]", f[d] || f[d - 2] || f[0], "assign");
        return e;
      }
    }, "assign"), ua.test(a) || (n.cssHooks[a + b].set = cc11001100_hook("n.cssHooks[a + b].set", Ga, "assign"));
  }), n.fn.extend({
    css: function (a, b) {
      return J(this, function (a, b, c) {
        var d,
          e,
          f = cc11001100_hook("f", {}, "var-init"),
          g = cc11001100_hook("g", 0, "var-init");
        if (n.isArray(b)) {
          for (d = cc11001100_hook("d", wa(a), "assign"), e = cc11001100_hook("e", b.length, "assign"); e > g; g++) f[b[g]] = cc11001100_hook("f[b[g]]", n.css(a, b[g], !1, d), "assign");
          return f;
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return Ja(this, !0);
    },
    hide: function () {
      return Ja(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide();
      });
    }
  });
  function Ka(a, b, c, d, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return new Ka.prototype.init(a, b, c, d, e);
  }
  n.Tween = cc11001100_hook("n.Tween", Ka, "assign"), Ka.prototype = cc11001100_hook("Ka.prototype", {
    constructor: cc11001100_hook("constructor", Ka, "object-key-init"),
    init: function (a, b, c, d, e, f) {
      this.elem = cc11001100_hook("this.elem", a, "assign"), this.prop = cc11001100_hook("this.prop", c, "assign"), this.easing = cc11001100_hook("this.easing", e || "swing", "assign"), this.options = cc11001100_hook("this.options", b, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", d, "assign"), this.unit = cc11001100_hook("this.unit", f || (n.cssNumber[c] ? "" : "px"), "assign");
    },
    cur: function () {
      var a = cc11001100_hook("a", Ka.propHooks[this.prop], "var-init");
      return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
    },
    run: function (a) {
      var b,
        c = cc11001100_hook("c", Ka.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", b = cc11001100_hook("b", a, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * b + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
    }
  }, "assign"), Ka.prototype.init.prototype = cc11001100_hook("Ka.prototype.init.prototype", Ka.prototype, "assign"), Ka.propHooks = cc11001100_hook("Ka.propHooks", {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = cc11001100_hook("b", n.css(a.elem, a.prop, ""), "assign"), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = cc11001100_hook("a.elem[a.prop]", a.now, "assign");
      }
    }
  }, "assign"), Ka.propHooks.scrollTop = cc11001100_hook("Ka.propHooks.scrollTop", Ka.propHooks.scrollLeft = cc11001100_hook("Ka.propHooks.scrollLeft", {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = cc11001100_hook("a.elem[a.prop]", a.now, "assign"));
    }
  }, "assign"), "assign"), n.easing = cc11001100_hook("n.easing", {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }
  }, "assign"), n.fx = cc11001100_hook("n.fx", Ka.prototype.init, "assign"), n.fx.step = cc11001100_hook("n.fx.step", {}, "assign");
  var La,
    Ma,
    Na = cc11001100_hook("Na", /^(?:toggle|show|hide)$/, "var-init"),
    Oa = cc11001100_hook("Oa", new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), "var-init"),
    Pa = cc11001100_hook("Pa", /queueHooks$/, "var-init"),
    Qa = cc11001100_hook("Qa", [Va], "var-init"),
    Ra = cc11001100_hook("Ra", {
      "*": cc11001100_hook("*", [function (a, b) {
        var c = cc11001100_hook("c", this.createTween(a, b), "var-init"),
          d = cc11001100_hook("d", c.cur(), "var-init"),
          e = cc11001100_hook("e", Oa.exec(b), "var-init"),
          f = cc11001100_hook("f", e && e[3] || (n.cssNumber[a] ? "" : "px"), "var-init"),
          g = cc11001100_hook("g", (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), "var-init"),
          h = cc11001100_hook("h", 1, "var-init"),
          i = cc11001100_hook("i", 20, "var-init");
        if (g && g[3] !== f) {
          f = cc11001100_hook("f", f || g[3], "assign"), e = cc11001100_hook("e", e || [], "assign"), g = cc11001100_hook("g", +d || 1, "assign");
          do h = cc11001100_hook("h", h || ".5", "assign"), g /= cc11001100_hook("g", h, "assign"), n.style(c.elem, a, g + f); while (h !== (h = cc11001100_hook("h", c.cur() / d, "assign")) && 1 !== h && --i);
        }
        return e && (g = cc11001100_hook("g", c.start = cc11001100_hook("c.start", +g || +d || 0, "assign"), "assign"), c.unit = cc11001100_hook("c.unit", f, "assign"), c.end = cc11001100_hook("c.end", e[1] ? g + (e[1] + 1) * e[2] : +e[2], "assign")), c;
      }], "object-key-init")
    }, "var-init");
  function Sa() {
    return setTimeout(function () {
      La = cc11001100_hook("La", void 0, "assign");
    }), La = cc11001100_hook("La", n.now(), "assign");
  }
  function Ta(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d = cc11001100_hook("d", 0, "var-init"),
      e = cc11001100_hook("e", {
        height: cc11001100_hook("height", a, "object-key-init")
      }, "var-init");
    for (b = cc11001100_hook("b", b ? 1 : 0, "assign"); 4 > d; d += cc11001100_hook("d", 2 - b, "assign")) c = cc11001100_hook("c", R[d], "assign"), e["margin" + c] = cc11001100_hook("e[\"margin\" + c]", e["padding" + c] = cc11001100_hook("e[\"padding\" + c]", a, "assign"), "assign");
    return b && (e.opacity = cc11001100_hook("e.opacity", e.width = cc11001100_hook("e.width", a, "assign"), "assign")), e;
  }
  function Ua(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var d, e = cc11001100_hook("e", (Ra[b] || []).concat(Ra["*"]), "var-init"), f = cc11001100_hook("f", 0, "var-init"), g = cc11001100_hook("g", e.length, "var-init"); g > f; f++) if (d = cc11001100_hook("d", e[f].call(c, b, a), "assign")) return d;
  }
  function Va(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = cc11001100_hook("l", this, "var-init"),
      m = cc11001100_hook("m", {}, "var-init"),
      o = cc11001100_hook("o", a.style, "var-init"),
      p = cc11001100_hook("p", a.nodeType && S(a), "var-init"),
      q = cc11001100_hook("q", L.get(a, "fxshow"), "var-init");
    c.queue || (h = cc11001100_hook("h", n._queueHooks(a, "fx"), "assign"), null == h.unqueued && (h.unqueued = cc11001100_hook("h.unqueued", 0, "assign"), i = cc11001100_hook("i", h.empty.fire, "assign"), h.empty.fire = cc11001100_hook("h.empty.fire", function () {
      h.unqueued || i();
    }, "assign")), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = cc11001100_hook("c.overflow", [o.overflow, o.overflowX, o.overflowY], "assign"), j = cc11001100_hook("j", n.css(a, "display"), "assign"), k = cc11001100_hook("k", "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "assign"), "inline" === k && "none" === n.css(a, "float") && (o.display = cc11001100_hook("o.display", "inline-block", "assign"))), c.overflow && (o.overflow = cc11001100_hook("o.overflow", "hidden", "assign"), l.always(function () {
      o.overflow = cc11001100_hook("o.overflow", c.overflow[0], "assign"), o.overflowX = cc11001100_hook("o.overflowX", c.overflow[1], "assign"), o.overflowY = cc11001100_hook("o.overflowY", c.overflow[2], "assign");
    }));
    for (d in b) if (e = cc11001100_hook("e", b[d], "assign"), Na.exec(e)) {
      if (delete b[d], f = cc11001100_hook("f", f || "toggle" === e, "assign"), e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d]) continue;
        p = cc11001100_hook("p", !0, "assign");
      }
      m[d] = cc11001100_hook("m[d]", q && q[d] || n.style(a, d), "assign");
    } else j = cc11001100_hook("j", void 0, "assign");
    if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = cc11001100_hook("o.display", j, "assign"));else {
      q ? "hidden" in q && (p = cc11001100_hook("p", q.hidden, "assign")) : q = cc11001100_hook("q", L.access(a, "fxshow", {}), "assign"), f && (q.hidden = cc11001100_hook("q.hidden", !p, "assign")), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;
        L.remove(a, "fxshow");
        for (b in m) n.style(a, b, m[b]);
      });
      for (d in m) g = cc11001100_hook("g", Ua(p ? q[d] : 0, d, l), "assign"), d in q || (q[d] = cc11001100_hook("q[d]", g.start, "assign"), p && (g.end = cc11001100_hook("g.end", g.start, "assign"), g.start = cc11001100_hook("g.start", "width" === d || "height" === d ? 1 : 0, "assign")));
    }
  }
  function Wa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d, e, f, g;
    for (c in a) if (d = cc11001100_hook("d", n.camelCase(c), "assign"), e = cc11001100_hook("e", b[d], "assign"), f = cc11001100_hook("f", a[c], "assign"), n.isArray(f) && (e = cc11001100_hook("e", f[1], "assign"), f = cc11001100_hook("f", a[c] = cc11001100_hook("a[c]", f[0], "assign"), "assign")), c !== d && (a[d] = cc11001100_hook("a[d]", f, "assign"), delete a[c]), g = cc11001100_hook("g", n.cssHooks[d], "assign"), g && "expand" in g) {
      f = cc11001100_hook("f", g.expand(f), "assign"), delete a[d];
      for (c in f) c in a || (a[c] = cc11001100_hook("a[c]", f[c], "assign"), b[c] = cc11001100_hook("b[c]", e, "assign"));
    } else b[d] = cc11001100_hook("b[d]", e, "assign");
  }
  function Xa(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f = cc11001100_hook("f", 0, "var-init"),
      g = cc11001100_hook("g", Qa.length, "var-init"),
      h = cc11001100_hook("h", n.Deferred().always(function () {
        delete i.elem;
      }), "var-init"),
      i = function () {
        if (e) return !1;
        for (var b = cc11001100_hook("b", La || Sa(), "var-init"), c = cc11001100_hook("c", Math.max(0, j.startTime + j.duration - b), "var-init"), d = cc11001100_hook("d", c / j.duration || 0, "var-init"), f = cc11001100_hook("f", 1 - d, "var-init"), g = cc11001100_hook("g", 0, "var-init"), i = cc11001100_hook("i", j.tweens.length, "var-init"); i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
      },
      j = cc11001100_hook("j", h.promise({
        elem: cc11001100_hook("elem", a, "object-key-init"),
        props: cc11001100_hook("props", n.extend({}, b), "object-key-init"),
        opts: cc11001100_hook("opts", n.extend(!0, {
          specialEasing: {}
        }, c), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", b, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", c, "object-key-init"),
        startTime: cc11001100_hook("startTime", La || Sa(), "object-key-init"),
        duration: cc11001100_hook("duration", c.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (b, c) {
          var d = cc11001100_hook("d", n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing), "var-init");
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = cc11001100_hook("c", 0, "var-init"),
            d = cc11001100_hook("d", b ? j.tweens.length : 0, "var-init");
          if (e) return this;
          for (e = cc11001100_hook("e", !0, "assign"); d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        }
      }), "var-init"),
      k = cc11001100_hook("k", j.props, "var-init");
    for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = cc11001100_hook("d", Qa[f].call(j, a, k, j.opts), "assign")) return d;
    return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: cc11001100_hook("elem", a, "object-key-init"),
      anim: cc11001100_hook("anim", j, "object-key-init"),
      queue: cc11001100_hook("queue", j.opts.queue, "object-key-init")
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }
  n.Animation = cc11001100_hook("n.Animation", n.extend(Xa, {
    tweener: function (a, b) {
      n.isFunction(a) ? (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", ["*"], "assign")) : a = cc11001100_hook("a", a.split(" "), "assign");
      for (var c, d = cc11001100_hook("d", 0, "var-init"), e = cc11001100_hook("e", a.length, "var-init"); e > d; d++) c = cc11001100_hook("c", a[d], "assign"), Ra[c] = cc11001100_hook("Ra[c]", Ra[c] || [], "assign"), Ra[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    }
  }), "assign"), n.speed = cc11001100_hook("n.speed", function (a, b, c) {
    var d = cc11001100_hook("d", a && "object" == typeof a ? n.extend({}, a) : {
      complete: cc11001100_hook("complete", c || !c && b || n.isFunction(a) && a, "object-key-init"),
      duration: cc11001100_hook("duration", a, "object-key-init"),
      easing: cc11001100_hook("easing", c && b || b && !n.isFunction(b) && b, "object-key-init")
    }, "var-init");
    return d.duration = cc11001100_hook("d.duration", n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, "assign"), (null == d.queue || d.queue === !0) && (d.queue = cc11001100_hook("d.queue", "fx", "assign")), d.old = cc11001100_hook("d.old", d.complete, "assign"), d.complete = cc11001100_hook("d.complete", function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, "assign"), d;
  }, "assign"), n.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", b, "object-key-init")
      }, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = cc11001100_hook("e", n.isEmptyObject(a), "var-init"),
        f = cc11001100_hook("f", n.speed(b, c, d), "var-init"),
        g = function () {
          var b = cc11001100_hook("b", Xa(this, n.extend({}, a), f), "var-init");
          (e || L.get(this, "finish")) && b.stop(!0);
        };
      return g.finish = cc11001100_hook("g.finish", g, "assign"), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = cc11001100_hook("b", a.stop, "var-init");
        delete a.stop, b(c);
      };
      return "string" != typeof a && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", void 0, "assign")), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = cc11001100_hook("b", !0, "var-init"),
          e = cc11001100_hook("e", null != a && a + "queueHooks", "var-init"),
          f = cc11001100_hook("f", n.timers, "var-init"),
          g = cc11001100_hook("g", L.get(this), "var-init");
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
        for (e = cc11001100_hook("e", f.length, "assign"); e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = cc11001100_hook("b", !1, "assign"), f.splice(e, 1));
        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function (a) {
      return a !== !1 && (a = cc11001100_hook("a", a || "fx", "assign")), this.each(function () {
        var b,
          c = cc11001100_hook("c", L.get(this), "var-init"),
          d = cc11001100_hook("d", c[a + "queue"], "var-init"),
          e = cc11001100_hook("e", c[a + "queueHooks"], "var-init"),
          f = cc11001100_hook("f", n.timers, "var-init"),
          g = cc11001100_hook("g", d ? d.length : 0, "var-init");
        for (c.finish = cc11001100_hook("c.finish", !0, "assign"), n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = cc11001100_hook("b", f.length, "assign"); b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = cc11001100_hook("b", 0, "assign"); g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = cc11001100_hook("c", n.fn[b], "var-init");
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
    }, "assign");
  }), n.each({
    slideDown: cc11001100_hook("slideDown", Ta("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", Ta("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", Ta("toggle"), "object-key-init"),
    fadeIn: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    fadeOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    fadeToggle: {
      opacity: cc11001100_hook("opacity", "toggle", "object-key-init")
    }
  }, function (a, b) {
    n.fn[a] = cc11001100_hook("n.fn[a]", function (a, c, d) {
      return this.animate(b, a, c, d);
    }, "assign");
  }), n.timers = cc11001100_hook("n.timers", [], "assign"), n.fx.tick = cc11001100_hook("n.fx.tick", function () {
    var a,
      b = cc11001100_hook("b", 0, "var-init"),
      c = cc11001100_hook("c", n.timers, "var-init");
    for (La = cc11001100_hook("La", n.now(), "assign"); b < c.length; b++) a = cc11001100_hook("a", c[b], "assign"), a() || c[b] !== a || c.splice(b--, 1);
    c.length || n.fx.stop(), La = cc11001100_hook("La", void 0, "assign");
  }, "assign"), n.fx.timer = cc11001100_hook("n.fx.timer", function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, "assign"), n.fx.interval = cc11001100_hook("n.fx.interval", 13, "assign"), n.fx.start = cc11001100_hook("n.fx.start", function () {
    Ma || (Ma = cc11001100_hook("Ma", setInterval(n.fx.tick, n.fx.interval), "assign"));
  }, "assign"), n.fx.stop = cc11001100_hook("n.fx.stop", function () {
    clearInterval(Ma), Ma = cc11001100_hook("Ma", null, "assign");
  }, "assign"), n.fx.speeds = cc11001100_hook("n.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), n.fn.delay = cc11001100_hook("n.fn.delay", function (a, b) {
    return a = cc11001100_hook("a", n.fx ? n.fx.speeds[a] || a : a, "assign"), b = cc11001100_hook("b", b || "fx", "assign"), this.queue(b, function (b, c) {
      var d = cc11001100_hook("d", setTimeout(b, a), "var-init");
      c.stop = cc11001100_hook("c.stop", function () {
        clearTimeout(d);
      }, "assign");
    });
  }, "assign"), function () {
    var a = cc11001100_hook("a", l.createElement("input"), "var-init"),
      b = cc11001100_hook("b", l.createElement("select"), "var-init"),
      c = cc11001100_hook("c", b.appendChild(l.createElement("option")), "var-init");
    a.type = cc11001100_hook("a.type", "checkbox", "assign"), k.checkOn = cc11001100_hook("k.checkOn", "" !== a.value, "assign"), k.optSelected = cc11001100_hook("k.optSelected", c.selected, "assign"), b.disabled = cc11001100_hook("b.disabled", !0, "assign"), k.optDisabled = cc11001100_hook("k.optDisabled", !c.disabled, "assign"), a = cc11001100_hook("a", l.createElement("input"), "assign"), a.value = cc11001100_hook("a.value", "t", "assign"), a.type = cc11001100_hook("a.type", "radio", "assign"), k.radioValue = cc11001100_hook("k.radioValue", "t" === a.value, "assign");
  }();
  var Ya,
    Za,
    $a = cc11001100_hook("$a", n.expr.attrHandle, "var-init");
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d,
        e,
        f = cc11001100_hook("f", a.nodeType, "var-init");
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = cc11001100_hook("b", b.toLowerCase(), "assign"), d = cc11001100_hook("d", n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya), "assign")), void 0 === c ? d && "get" in d && null !== (e = cc11001100_hook("e", d.get(a, b), "assign")) ? e : (e = cc11001100_hook("e", n.find.attr(a, b), "assign"), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = cc11001100_hook("e", d.set(a, c, b), "assign")) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
    },
    removeAttr: function (a, b) {
      var c,
        d,
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", b && b.match(E), "var-init");
      if (f && 1 === a.nodeType) while (c = cc11001100_hook("c", f[e++], "assign")) d = cc11001100_hook("d", n.propFix[c] || c, "assign"), n.expr.match.bool.test(c) && (a[d] = cc11001100_hook("a[d]", !1, "assign")), a.removeAttribute(c);
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = cc11001100_hook("c", a.value, "var-init");
            return a.setAttribute("type", b), c && (a.value = cc11001100_hook("a.value", c, "assign")), b;
          }
        }
      }
    }
  }), Za = cc11001100_hook("Za", {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, "assign"), n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = cc11001100_hook("c", $a[b] || n.find.attr, "var-init");
    $a[b] = cc11001100_hook("$a[b]", function (a, b, d) {
      var e, f;
      return d || (f = cc11001100_hook("f", $a[b], "assign"), $a[b] = cc11001100_hook("$a[b]", e, "assign"), e = cc11001100_hook("e", null != c(a, b, d) ? b.toLowerCase() : null, "assign"), $a[b] = cc11001100_hook("$a[b]", f, "assign")), e;
    }, "assign");
  });
  var _a = cc11001100_hook("_a", /^(?:input|select|textarea|button)$/i, "var-init");
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    },
    prop: function (a, b, c) {
      var d,
        e,
        f,
        g = cc11001100_hook("g", a.nodeType, "var-init");
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = cc11001100_hook("f", 1 !== g || !n.isXMLDoc(a), "assign"), f && (b = cc11001100_hook("b", n.propFix[b] || b, "assign"), e = cc11001100_hook("e", n.propHooks[b], "assign")), void 0 !== c ? e && "set" in e && void 0 !== (d = cc11001100_hook("d", e.set(a, c, b), "assign")) ? d : a[b] = cc11001100_hook("a[b]", c, "assign") : e && "get" in e && null !== (d = cc11001100_hook("d", e.get(a, b), "assign")) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = cc11001100_hook("n.propHooks.selected", {
    get: function (a) {
      var b = cc11001100_hook("b", a.parentNode, "var-init");
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }
  }, "assign")), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = cc11001100_hook("n.propFix[this.toLowerCase()]", this, "assign");
  });
  var ab = cc11001100_hook("ab", /[\t\r\n\f]/g, "var-init");
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = cc11001100_hook("h", "string" == typeof a && a, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        j = cc11001100_hook("j", this.length, "var-init");
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className));
      });
      if (h) for (b = cc11001100_hook("b", (a || "").match(E) || [], "assign"); j > i; i++) if (c = cc11001100_hook("c", this[i], "assign"), d = cc11001100_hook("d", 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " "), "assign")) {
        f = cc11001100_hook("f", 0, "assign");
        while (e = cc11001100_hook("e", b[f++], "assign")) d.indexOf(" " + e + " ") < 0 && (d += cc11001100_hook("d", e + " ", "assign"));
        g = cc11001100_hook("g", n.trim(d), "assign"), c.className !== g && (c.className = cc11001100_hook("c.className", g, "assign"));
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = cc11001100_hook("h", 0 === arguments.length || "string" == typeof a && a, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        j = cc11001100_hook("j", this.length, "var-init");
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className));
      });
      if (h) for (b = cc11001100_hook("b", (a || "").match(E) || [], "assign"); j > i; i++) if (c = cc11001100_hook("c", this[i], "assign"), d = cc11001100_hook("d", 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : ""), "assign")) {
        f = cc11001100_hook("f", 0, "assign");
        while (e = cc11001100_hook("e", b[f++], "assign")) while (d.indexOf(" " + e + " ") >= 0) d = cc11001100_hook("d", d.replace(" " + e + " ", " "), "assign");
        g = cc11001100_hook("g", a ? n.trim(d) : "", "assign"), c.className !== g && (c.className = cc11001100_hook("c.className", g, "assign"));
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = cc11001100_hook("c", typeof a, "var-init");
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
            d = cc11001100_hook("d", 0, "var-init"),
            e = cc11001100_hook("e", n(this), "var-init"),
            f = cc11001100_hook("f", a.match(E) || [], "var-init");
          while (b = cc11001100_hook("b", f[d++], "assign")) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = cc11001100_hook("this.className", this.className || a === !1 ? "" : L.get(this, "__className__") || "", "assign"));
      });
    },
    hasClass: function (a) {
      for (var b = cc11001100_hook("b", " " + a + " ", "var-init"), c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", this.length, "var-init"); d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
      return !1;
    }
  });
  var bb = cc11001100_hook("bb", /\r/g, "var-init");
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = cc11001100_hook("e", this[0], "var-init");
      {
        if (arguments.length) return d = cc11001100_hook("d", n.isFunction(a), "assign"), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = cc11001100_hook("e", d ? a.call(this, c, n(this).val()) : a, "assign"), null == e ? e = cc11001100_hook("e", "", "assign") : "number" == typeof e ? e += cc11001100_hook("e", "", "assign") : n.isArray(e) && (e = cc11001100_hook("e", n.map(e, function (a) {
            return null == a ? "" : a + "";
          }), "assign")), b = cc11001100_hook("b", n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], "assign"), b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = cc11001100_hook("this.value", e, "assign")));
        });
        if (e) return b = cc11001100_hook("b", n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], "assign"), b && "get" in b && void 0 !== (c = cc11001100_hook("c", b.get(e, "value"), "assign")) ? c : (c = cc11001100_hook("c", e.value, "assign"), "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = cc11001100_hook("b", n.find.attr(a, "value"), "var-init");
          return null != b ? b : n.trim(n.text(a));
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = cc11001100_hook("d", a.options, "var-init"), e = cc11001100_hook("e", a.selectedIndex, "var-init"), f = cc11001100_hook("f", "select-one" === a.type || 0 > e, "var-init"), g = cc11001100_hook("g", f ? null : [], "var-init"), h = cc11001100_hook("h", f ? e + 1 : d.length, "var-init"), i = cc11001100_hook("i", 0 > e ? h : f ? e : 0, "var-init"); h > i; i++) if (c = cc11001100_hook("c", d[i], "assign"), !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
            if (b = cc11001100_hook("b", n(c).val(), "assign"), f) return b;
            g.push(b);
          }
          return g;
        },
        set: function (a, b) {
          var c,
            d,
            e = cc11001100_hook("e", a.options, "var-init"),
            f = cc11001100_hook("f", n.makeArray(b), "var-init"),
            g = cc11001100_hook("g", e.length, "var-init");
          while (g--) d = cc11001100_hook("d", e[g], "assign"), (d.selected = cc11001100_hook("d.selected", n.inArray(d.value, f) >= 0, "assign")) && (c = cc11001100_hook("c", !0, "assign"));
          return c || (a.selectedIndex = cc11001100_hook("a.selectedIndex", -1, "assign")), f;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = cc11001100_hook("n.valHooks[this]", {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = cc11001100_hook("a.checked", n.inArray(n(a).val(), b) >= 0, "assign") : void 0;
      }
    }, "assign"), k.checkOn || (n.valHooks[this].get = cc11001100_hook("n.valHooks[this].get", function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    }, "assign"));
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    }, "assign");
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  });
  var cb = cc11001100_hook("cb", n.now(), "var-init"),
    db = cc11001100_hook("db", /\?/, "var-init");
  n.parseJSON = cc11001100_hook("n.parseJSON", function (a) {
    return JSON.parse(a + "");
  }, "assign"), n.parseXML = cc11001100_hook("n.parseXML", function (a) {
    var b, c;
    if (!a || "string" != typeof a) return null;
    try {
      c = cc11001100_hook("c", new DOMParser(), "assign"), b = cc11001100_hook("b", c.parseFromString(a, "text/xml"), "assign");
    } catch (d) {
      b = cc11001100_hook("b", void 0, "assign");
    }
    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
  }, "assign");
  var eb = cc11001100_hook("eb", /#.*$/, "var-init"),
    fb = cc11001100_hook("fb", /([?&])_=[^&]*/, "var-init"),
    gb = cc11001100_hook("gb", /^(.*?):[ \t]*([^\r\n]*)$/gm, "var-init"),
    hb = cc11001100_hook("hb", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    ib = cc11001100_hook("ib", /^(?:GET|HEAD)$/, "var-init"),
    jb = cc11001100_hook("jb", /^\/\//, "var-init"),
    kb = cc11001100_hook("kb", /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
    lb = cc11001100_hook("lb", {}, "var-init"),
    mb = cc11001100_hook("mb", {}, "var-init"),
    nb = cc11001100_hook("nb", "*/".concat("*"), "var-init"),
    ob = cc11001100_hook("ob", a.location.href, "var-init"),
    pb = cc11001100_hook("pb", kb.exec(ob.toLowerCase()) || [], "var-init");
  function qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (b, c) {
      "string" != typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", "*", "assign"));
      var d,
        e = cc11001100_hook("e", 0, "var-init"),
        f = cc11001100_hook("f", b.toLowerCase().match(E) || [], "var-init");
      if (n.isFunction(c)) while (d = cc11001100_hook("d", f[e++], "assign")) "+" === d[0] ? (d = cc11001100_hook("d", d.slice(1) || "*", "assign"), (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).unshift(c)) : (a[d] = cc11001100_hook("a[d]", a[d] || [], "assign")).push(c);
    };
  }
  function rb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init"),
      f = cc11001100_hook("f", a === mb, "var-init");
    function g(h) {
      cc11001100_hook("h", h, "function-parameter");
      var i;
      return e[h] = cc11001100_hook("e[h]", !0, "assign"), n.each(a[h] || [], function (a, h) {
        var j = cc11001100_hook("j", h(b, c, d), "var-init");
        return "string" != typeof j || f || e[j] ? f ? !(i = cc11001100_hook("i", j, "assign")) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }
  function sb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c,
      d,
      e = cc11001100_hook("e", n.ajaxSettings.flatOptions || {}, "var-init");
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = cc11001100_hook("d", {}, "assign")))[c] = cc11001100_hook("(e[c] ? a : d || (d = {}))[c]", b[c], "assign"));
    return d && n.extend(!0, a, d), a;
  }
  function tb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d,
      e,
      f,
      g,
      h = cc11001100_hook("h", a.contents, "var-init"),
      i = cc11001100_hook("i", a.dataTypes, "var-init");
    while ("*" === i[0]) i.shift(), void 0 === d && (d = cc11001100_hook("d", a.mimeType || b.getResponseHeader("Content-Type"), "assign"));
    if (d) for (e in h) if (h[e] && h[e].test(d)) {
      i.unshift(e);
      break;
    }
    if (i[0] in c) f = cc11001100_hook("f", i[0], "assign");else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = cc11001100_hook("f", e, "assign");
          break;
        }
        g || (g = cc11001100_hook("g", e, "assign"));
      }
      f = cc11001100_hook("f", f || g, "assign");
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function ub(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e,
      f,
      g,
      h,
      i,
      j = cc11001100_hook("j", {}, "var-init"),
      k = cc11001100_hook("k", a.dataTypes.slice(), "var-init");
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = cc11001100_hook("j[g.toLowerCase()]", a.converters[g], "assign");
    f = cc11001100_hook("f", k.shift(), "assign");
    while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = cc11001100_hook("c[a.responseFields[f]]", b, "assign")), !i && d && a.dataFilter && (b = cc11001100_hook("b", a.dataFilter(b, a.dataType), "assign")), i = cc11001100_hook("i", f, "assign"), f = cc11001100_hook("f", k.shift(), "assign")) if ("*" === f) f = cc11001100_hook("f", i, "assign");else if ("*" !== i && i !== f) {
      if (g = cc11001100_hook("g", j[i + " " + f] || j["* " + f], "assign"), !g) for (e in j) if (h = cc11001100_hook("h", e.split(" "), "assign"), h[1] === f && (g = cc11001100_hook("g", j[i + " " + h[0]] || j["* " + h[0]], "assign"))) {
        g === !0 ? g = cc11001100_hook("g", j[e], "assign") : j[e] !== !0 && (f = cc11001100_hook("f", h[0], "assign"), k.unshift(h[1]));
        break;
      }
      if (g !== !0) if (g && a["throws"]) b = cc11001100_hook("b", g(b), "assign");else try {
        b = cc11001100_hook("b", g(b), "assign");
      } catch (l) {
        return {
          state: cc11001100_hook("state", "parsererror", "object-key-init"),
          error: cc11001100_hook("error", g ? l : "No conversion from " + i + " to " + f, "object-key-init")
        };
      }
    }
    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", b, "object-key-init")
    };
  }
  n.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", ob, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", hb.test(pb[1]), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", nb, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init"),
        html: cc11001100_hook("html", "text/html", "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        json: cc11001100_hook("json", "application/json, text/javascript", "object-key-init")
      },
      contents: {
        xml: cc11001100_hook("xml", /xml/, "object-key-init"),
        html: cc11001100_hook("html", /html/, "object-key-init"),
        json: cc11001100_hook("json", /json/, "object-key-init")
      },
      responseFields: {
        xml: cc11001100_hook("xml", "responseXML", "object-key-init"),
        text: cc11001100_hook("text", "responseText", "object-key-init"),
        json: cc11001100_hook("json", "responseJSON", "object-key-init")
      },
      converters: {
        "* text": cc11001100_hook("* text", String, "object-key-init"),
        "text html": cc11001100_hook("text html", !0, "object-key-init"),
        "text json": cc11001100_hook("text json", n.parseJSON, "object-key-init"),
        "text xml": cc11001100_hook("text xml", n.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", qb(lb), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", qb(mb), "object-key-init"),
    ajax: function (a, b) {
      "object" == typeof a && (b = cc11001100_hook("b", a, "assign"), a = cc11001100_hook("a", void 0, "assign")), b = cc11001100_hook("b", b || {}, "assign");
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = cc11001100_hook("k", n.ajaxSetup({}, b), "var-init"),
        l = cc11001100_hook("l", k.context || k, "var-init"),
        m = cc11001100_hook("m", k.context && (l.nodeType || l.jquery) ? n(l) : n.event, "var-init"),
        o = cc11001100_hook("o", n.Deferred(), "var-init"),
        p = cc11001100_hook("p", n.Callbacks("once memory"), "var-init"),
        q = cc11001100_hook("q", k.statusCode || {}, "var-init"),
        r = cc11001100_hook("r", {}, "var-init"),
        s = cc11001100_hook("s", {}, "var-init"),
        t = cc11001100_hook("t", 0, "var-init"),
        u = cc11001100_hook("u", "canceled", "var-init"),
        v = cc11001100_hook("v", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = cc11001100_hook("f", {}, "assign");
                while (b = cc11001100_hook("b", gb.exec(e), "assign")) f[b[1].toLowerCase()] = cc11001100_hook("f[b[1].toLowerCase()]", b[2], "assign");
              }
              b = cc11001100_hook("b", f[a.toLowerCase()], "assign");
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null;
          },
          setRequestHeader: function (a, b) {
            var c = cc11001100_hook("c", a.toLowerCase(), "var-init");
            return t || (a = cc11001100_hook("a", s[c] = cc11001100_hook("s[c]", s[c] || a, "assign"), "assign"), r[a] = cc11001100_hook("r[a]", b, "assign")), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = cc11001100_hook("k.mimeType", a, "assign")), this;
          },
          statusCode: function (a) {
            var b;
            if (a) if (2 > t) for (b in a) q[b] = cc11001100_hook("q[b]", [q[b], a[b]], "assign");else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = cc11001100_hook("b", a || u, "var-init");
            return c && c.abort(b), x(0, b), this;
          }
        }, "var-init");
      if (o.promise(v).complete = cc11001100_hook("o.promise(v).complete", p.add, "assign"), v.success = cc11001100_hook("v.success", v.done, "assign"), v.error = cc11001100_hook("v.error", v.fail, "assign"), k.url = cc11001100_hook("k.url", ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), "assign"), k.type = cc11001100_hook("k.type", b.method || b.type || k.method || k.type, "assign"), k.dataTypes = cc11001100_hook("k.dataTypes", n.trim(k.dataType || "*").toLowerCase().match(E) || [""], "assign"), null == k.crossDomain && (h = cc11001100_hook("h", kb.exec(k.url.toLowerCase()), "assign"), k.crossDomain = cc11001100_hook("k.crossDomain", !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443"))), "assign")), k.data && k.processData && "string" != typeof k.data && (k.data = cc11001100_hook("k.data", n.param(k.data, k.traditional), "assign")), rb(lb, k, b, v), 2 === t) return v;
      i = cc11001100_hook("i", n.event && k.global, "assign"), i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = cc11001100_hook("k.type", k.type.toUpperCase(), "assign"), k.hasContent = cc11001100_hook("k.hasContent", !ib.test(k.type), "assign"), d = cc11001100_hook("d", k.url, "assign"), k.hasContent || (k.data && (d = cc11001100_hook("d", k.url += cc11001100_hook("k.url", (db.test(d) ? "&" : "?") + k.data, "assign"), "assign"), delete k.data), k.cache === !1 && (k.url = cc11001100_hook("k.url", fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++, "assign"))), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = cc11001100_hook("u", "abort", "assign");
      for (j in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) v[j](k[j]);
      if (c = cc11001100_hook("c", rb(mb, k, b, v), "assign")) {
        v.readyState = cc11001100_hook("v.readyState", 1, "assign"), i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = cc11001100_hook("g", setTimeout(function () {
          v.abort("timeout");
        }, k.timeout), "assign"));
        try {
          t = cc11001100_hook("t", 1, "assign"), c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        cc11001100_hook("f", f, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        var j,
          r,
          s,
          u,
          w,
          x = cc11001100_hook("x", b, "var-init");
        2 !== t && (t = cc11001100_hook("t", 2, "assign"), g && clearTimeout(g), c = cc11001100_hook("c", void 0, "assign"), e = cc11001100_hook("e", h || "", "assign"), v.readyState = cc11001100_hook("v.readyState", a > 0 ? 4 : 0, "assign"), j = cc11001100_hook("j", a >= 200 && 300 > a || 304 === a, "assign"), f && (u = cc11001100_hook("u", tb(k, v, f), "assign")), u = cc11001100_hook("u", ub(k, u, v, j), "assign"), j ? (k.ifModified && (w = cc11001100_hook("w", v.getResponseHeader("Last-Modified"), "assign"), w && (n.lastModified[d] = cc11001100_hook("n.lastModified[d]", w, "assign")), w = cc11001100_hook("w", v.getResponseHeader("etag"), "assign"), w && (n.etag[d] = cc11001100_hook("n.etag[d]", w, "assign"))), 204 === a || "HEAD" === k.type ? x = cc11001100_hook("x", "nocontent", "assign") : 304 === a ? x = cc11001100_hook("x", "notmodified", "assign") : (x = cc11001100_hook("x", u.state, "assign"), r = cc11001100_hook("r", u.data, "assign"), s = cc11001100_hook("s", u.error, "assign"), j = cc11001100_hook("j", !s, "assign"))) : (s = cc11001100_hook("s", x, "assign"), (a || !x) && (x = cc11001100_hook("x", "error", "assign"), 0 > a && (a = cc11001100_hook("a", 0, "assign")))), v.status = cc11001100_hook("v.status", a, "assign"), v.statusText = cc11001100_hook("v.statusText", (b || x) + "", "assign"), j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = cc11001100_hook("q", void 0, "assign"), i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = cc11001100_hook("n[b]", function (a, c, d, e) {
      return n.isFunction(c) && (e = cc11001100_hook("e", e || d, "assign"), d = cc11001100_hook("d", c, "assign"), c = cc11001100_hook("c", void 0, "assign")), n.ajax({
        url: cc11001100_hook("url", a, "object-key-init"),
        type: cc11001100_hook("type", b, "object-key-init"),
        dataType: cc11001100_hook("dataType", e, "object-key-init"),
        data: cc11001100_hook("data", c, "object-key-init"),
        success: cc11001100_hook("success", d, "object-key-init")
      });
    }, "assign");
  }), n._evalUrl = cc11001100_hook("n._evalUrl", function (a) {
    return n.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      "throws": cc11001100_hook("throws", !0, "object-key-init")
    });
  }, "assign"), n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = cc11001100_hook("b", n(a, this[0].ownerDocument).eq(0).clone(!0), "assign"), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = cc11001100_hook("a", this, "var-init");
        while (a.firstElementChild) a = cc11001100_hook("a", a.firstElementChild, "assign");
        return a;
      }).append(this)), this);
    },
    wrapInner: function (a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b));
      } : function () {
        var b = cc11001100_hook("b", n(this), "var-init"),
          c = cc11001100_hook("c", b.contents(), "var-init");
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      var b = cc11001100_hook("b", n.isFunction(a), "var-init");
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  }), n.expr.filters.hidden = cc11001100_hook("n.expr.filters.hidden", function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, "assign"), n.expr.filters.visible = cc11001100_hook("n.expr.filters.visible", function (a) {
    return !n.expr.filters.hidden(a);
  }, "assign");
  var vb = cc11001100_hook("vb", /%20/g, "var-init"),
    wb = cc11001100_hook("wb", /\[\]$/, "var-init"),
    xb = cc11001100_hook("xb", /\r?\n/g, "var-init"),
    yb = cc11001100_hook("yb", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    zb = cc11001100_hook("zb", /^(?:input|select|textarea|keygen)/i, "var-init");
  function Ab(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  n.param = cc11001100_hook("n.param", function (a, b) {
    var c,
      d = cc11001100_hook("d", [], "var-init"),
      e = function (a, b) {
        b = cc11001100_hook("b", n.isFunction(b) ? b() : null == b ? "" : b, "assign"), d[d.length] = cc11001100_hook("d[d.length]", encodeURIComponent(a) + "=" + encodeURIComponent(b), "assign");
      };
    if (void 0 === b && (b = cc11001100_hook("b", n.ajaxSettings && n.ajaxSettings.traditional, "assign")), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Ab(c, a[c], b, e);
    return d.join("&").replace(vb, "+");
  }, "assign"), n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = cc11001100_hook("a", n.prop(this, "elements"), "var-init");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = cc11001100_hook("a", this.type, "var-init");
        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
      }).map(function (a, b) {
        var c = cc11001100_hook("c", n(this).val(), "var-init");
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: cc11001100_hook("name", b.name, "object-key-init"),
            value: cc11001100_hook("value", a.replace(xb, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", b.name, "object-key-init"),
          value: cc11001100_hook("value", c.replace(xb, "\r\n"), "object-key-init")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = cc11001100_hook("n.ajaxSettings.xhr", function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {}
  }, "assign");
  var Bb = cc11001100_hook("Bb", 0, "var-init"),
    Cb = cc11001100_hook("Cb", {}, "var-init"),
    Db = cc11001100_hook("Db", {
      0: cc11001100_hook(0, 200, "object-key-init"),
      1223: cc11001100_hook(1223, 204, "object-key-init")
    }, "var-init"),
    Eb = cc11001100_hook("Eb", n.ajaxSettings.xhr(), "var-init");
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Cb) Cb[a]();
  }), k.cors = cc11001100_hook("k.cors", !!Eb && "withCredentials" in Eb, "assign"), k.ajax = cc11001100_hook("k.ajax", Eb = cc11001100_hook("Eb", !!Eb, "assign"), "assign"), n.ajaxTransport(function (a) {
    var b;
    return k.cors || Eb && !a.crossDomain ? {
      send: function (c, d) {
        var e,
          f = cc11001100_hook("f", a.xhr(), "var-init"),
          g = cc11001100_hook("g", ++Bb, "var-init");
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = cc11001100_hook("f[e]", a.xhrFields[e], "assign");
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = cc11001100_hook("c[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
        for (e in c) f.setRequestHeader(e, c[e]);
        b = cc11001100_hook("b", function (a) {
          return function () {
            b && (delete Cb[g], b = cc11001100_hook("b", f.onload = cc11001100_hook("f.onload", f.onerror = cc11001100_hook("f.onerror", null, "assign"), "assign"), "assign"), "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
              text: cc11001100_hook("text", f.responseText, "object-key-init")
            } : void 0, f.getAllResponseHeaders()));
          };
        }, "assign"), f.onload = cc11001100_hook("f.onload", b(), "assign"), f.onerror = cc11001100_hook("f.onerror", b("error"), "assign"), b = cc11001100_hook("b", Cb[g] = cc11001100_hook("Cb[g]", b("abort"), "assign"), "assign");
        try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (b) throw h;
        }
      },
      abort: function () {
        b && b();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /(?:java|ecma)script/, "object-key-init")
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = cc11001100_hook("a.cache", !1, "assign")), a.crossDomain && (a.type = cc11001100_hook("a.type", "GET", "assign"));
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (d, e) {
          b = cc11001100_hook("b", n("<script>").prop({
            async: cc11001100_hook("async", !0, "object-key-init"),
            charset: cc11001100_hook("charset", a.scriptCharset, "object-key-init"),
            src: cc11001100_hook("src", a.url, "object-key-init")
          }).on("load error", c = cc11001100_hook("c", function (a) {
            b.remove(), c = cc11001100_hook("c", null, "assign"), a && e("error" === a.type ? 404 : 200, a.type);
          }, "assign")), "assign"), l.head.appendChild(b[0]);
        },
        abort: function () {
          c && c();
        }
      };
    }
  });
  var Fb = cc11001100_hook("Fb", [], "var-init"),
    Gb = cc11001100_hook("Gb", /(=)\?(?=&|$)|\?\?/, "var-init");
  n.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var a = cc11001100_hook("a", Fb.pop() || n.expando + "_" + cb++, "var-init");
      return this[a] = cc11001100_hook("this[a]", !0, "assign"), a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
      f,
      g,
      h = cc11001100_hook("h", b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data"), "var-init");
    return h || "jsonp" === b.dataTypes[0] ? (e = cc11001100_hook("e", b.jsonpCallback = cc11001100_hook("b.jsonpCallback", n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, "assign"), "assign"), h ? b[h] = cc11001100_hook("b[h]", b[h].replace(Gb, "$1" + e), "assign") : b.jsonp !== !1 && (b.url += cc11001100_hook("b.url", (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e, "assign")), b.converters["script json"] = cc11001100_hook("b.converters[\"script json\"]", function () {
      return g || n.error(e + " was not called"), g[0];
    }, "assign"), b.dataTypes[0] = cc11001100_hook("b.dataTypes[0]", "json", "assign"), f = cc11001100_hook("f", a[e], "assign"), a[e] = cc11001100_hook("a[e]", function () {
      g = cc11001100_hook("g", arguments, "assign");
    }, "assign"), d.always(function () {
      a[e] = cc11001100_hook("a[e]", f, "assign"), b[e] && (b.jsonpCallback = cc11001100_hook("b.jsonpCallback", c.jsonpCallback, "assign"), Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = cc11001100_hook("g", f = cc11001100_hook("f", void 0, "assign"), "assign");
    }), "script") : void 0;
  }), n.parseHTML = cc11001100_hook("n.parseHTML", function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", !1, "assign")), b = cc11001100_hook("b", b || l, "assign");
    var d = cc11001100_hook("d", v.exec(a), "var-init"),
      e = cc11001100_hook("e", !c && [], "var-init");
    return d ? [b.createElement(d[1])] : (d = cc11001100_hook("d", n.buildFragment([a], b, e), "assign"), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  }, "assign");
  var Hb = cc11001100_hook("Hb", n.fn.load, "var-init");
  n.fn.load = cc11001100_hook("n.fn.load", function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
    var d,
      e,
      f,
      g = cc11001100_hook("g", this, "var-init"),
      h = cc11001100_hook("h", a.indexOf(" "), "var-init");
    return h >= 0 && (d = cc11001100_hook("d", n.trim(a.slice(h)), "assign"), a = cc11001100_hook("a", a.slice(0, h), "assign")), n.isFunction(b) ? (c = cc11001100_hook("c", b, "assign"), b = cc11001100_hook("b", void 0, "assign")) : b && "object" == typeof b && (e = cc11001100_hook("e", "POST", "assign")), g.length > 0 && n.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", e, "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", b, "object-key-init")
    }).done(function (a) {
      f = cc11001100_hook("f", arguments, "assign"), g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  }, "assign"), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = cc11001100_hook("n.fn[b]", function (a) {
      return this.on(b, a);
    }, "assign");
  }), n.expr.filters.animated = cc11001100_hook("n.expr.filters.animated", function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  }, "assign");
  var Ib = cc11001100_hook("Ib", a.document.documentElement, "var-init");
  function Jb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  n.offset = cc11001100_hook("n.offset", {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = cc11001100_hook("k", n.css(a, "position"), "var-init"),
        l = cc11001100_hook("l", n(a), "var-init"),
        m = cc11001100_hook("m", {}, "var-init");
      "static" === k && (a.style.position = cc11001100_hook("a.style.position", "relative", "assign")), h = cc11001100_hook("h", l.offset(), "assign"), f = cc11001100_hook("f", n.css(a, "top"), "assign"), i = cc11001100_hook("i", n.css(a, "left"), "assign"), j = cc11001100_hook("j", ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, "assign"), j ? (d = cc11001100_hook("d", l.position(), "assign"), g = cc11001100_hook("g", d.top, "assign"), e = cc11001100_hook("e", d.left, "assign")) : (g = cc11001100_hook("g", parseFloat(f) || 0, "assign"), e = cc11001100_hook("e", parseFloat(i) || 0, "assign")), n.isFunction(b) && (b = cc11001100_hook("b", b.call(a, c, h), "assign")), null != b.top && (m.top = cc11001100_hook("m.top", b.top - h.top + g, "assign")), null != b.left && (m.left = cc11001100_hook("m.left", b.left - h.left + e, "assign")), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, "assign"), n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
        c,
        d = cc11001100_hook("d", this[0], "var-init"),
        e = cc11001100_hook("e", {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", d && d.ownerDocument, "var-init");
      if (f) return b = cc11001100_hook("b", f.documentElement, "assign"), n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = cc11001100_hook("e", d.getBoundingClientRect(), "assign")), c = cc11001100_hook("c", Jb(f), "assign"), {
        top: cc11001100_hook("top", e.top + c.pageYOffset - b.clientTop, "object-key-init"),
        left: cc11001100_hook("left", e.left + c.pageXOffset - b.clientLeft, "object-key-init")
      }) : e;
    },
    position: function () {
      if (this[0]) {
        var a,
          b,
          c = cc11001100_hook("c", this[0], "var-init"),
          d = cc11001100_hook("d", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init");
        return "fixed" === n.css(c, "position") ? b = cc11001100_hook("b", c.getBoundingClientRect(), "assign") : (a = cc11001100_hook("a", this.offsetParent(), "assign"), b = cc11001100_hook("b", this.offset(), "assign"), n.nodeName(a[0], "html") || (d = cc11001100_hook("d", a.offset(), "assign")), d.top += cc11001100_hook("d.top", n.css(a[0], "borderTopWidth", !0), "assign"), d.left += cc11001100_hook("d.left", n.css(a[0], "borderLeftWidth", !0), "assign")), {
          top: cc11001100_hook("top", b.top - d.top - n.css(c, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", b.left - d.left - n.css(c, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = cc11001100_hook("a", this.offsetParent || Ib, "var-init");
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = cc11001100_hook("a", a.offsetParent, "assign");
        return a || Ib;
      });
    }
  }), n.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (b, c) {
    var d = cc11001100_hook("d", "pageYOffset" === c, "var-init");
    n.fn[b] = cc11001100_hook("n.fn[b]", function (e) {
      return J(this, function (b, e, f) {
        var g = cc11001100_hook("g", Jb(b), "var-init");
        return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = cc11001100_hook("b[e]", f, "assign"));
      }, b, e, arguments.length, null);
    }, "assign");
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = cc11001100_hook("n.cssHooks[b]", ya(k.pixelPosition, function (a, c) {
      return c ? (c = cc11001100_hook("c", xa(a, b), "assign"), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    }), "assign");
  }), n.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (a, b) {
    n.each({
      padding: cc11001100_hook("padding", "inner" + a, "object-key-init"),
      content: cc11001100_hook("content", b, "object-key-init"),
      "": cc11001100_hook("", "outer" + a, "object-key-init")
    }, function (c, d) {
      n.fn[d] = cc11001100_hook("n.fn[d]", function (d, e) {
        var f = cc11001100_hook("f", arguments.length && (c || "boolean" != typeof d), "var-init"),
          g = cc11001100_hook("g", c || (d === !0 || e === !0 ? "margin" : "border"), "var-init");
        return J(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = cc11001100_hook("e", b.documentElement, "assign"), Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      }, "assign");
    });
  }), n.fn.size = cc11001100_hook("n.fn.size", function () {
    return this.length;
  }, "assign"), n.fn.andSelf = cc11001100_hook("n.fn.andSelf", n.fn.addBack, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  var Kb = cc11001100_hook("Kb", a.jQuery, "var-init"),
    Lb = cc11001100_hook("Lb", a.$, "var-init");
  return n.noConflict = cc11001100_hook("n.noConflict", function (b) {
    return a.$ === n && (a.$ = cc11001100_hook("a.$", Lb, "assign")), b && a.jQuery === n && (a.jQuery = cc11001100_hook("a.jQuery", Kb, "assign")), n;
  }, "assign"), typeof b === U && (a.jQuery = cc11001100_hook("a.jQuery", a.$ = cc11001100_hook("a.$", n, "assign"), "assign")), n;
});