!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  }, "assign") : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = cc11001100_hook("t", [], "var-init"),
    E = cc11001100_hook("E", C.document, "var-init"),
    r = cc11001100_hook("r", Object.getPrototypeOf, "var-init"),
    s = cc11001100_hook("s", t.slice, "var-init"),
    g = cc11001100_hook("g", t.concat, "var-init"),
    u = cc11001100_hook("u", t.push, "var-init"),
    i = cc11001100_hook("i", t.indexOf, "var-init"),
    n = cc11001100_hook("n", {}, "var-init"),
    o = cc11001100_hook("o", n.toString, "var-init"),
    v = cc11001100_hook("v", n.hasOwnProperty, "var-init"),
    a = cc11001100_hook("a", v.toString, "var-init"),
    l = cc11001100_hook("l", a.call(Object), "var-init"),
    y = cc11001100_hook("y", {}, "var-init"),
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    c = cc11001100_hook("c", {
      type: cc11001100_hook("type", !0, "object-key-init"),
      src: cc11001100_hook("src", !0, "object-key-init"),
      nonce: cc11001100_hook("nonce", !0, "object-key-init"),
      noModule: cc11001100_hook("noModule", !0, "object-key-init")
    }, "var-init");
  function b(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", (n = cc11001100_hook("n", n || E, "assign")).createElement("script"), "var-init");
    if (o.text = cc11001100_hook("o.text", e, "assign"), t) for (r in c) (i = cc11001100_hook("i", t[r] || t.getAttribute && t.getAttribute(r), "assign")) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
  }
  var f = cc11001100_hook("f", "3.4.1", "var-init"),
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = cc11001100_hook("p", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init");
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", !!e && "length" in e && e.length, "var-init"),
      n = cc11001100_hook("n", w(e), "var-init");
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  k.fn = cc11001100_hook("k.fn", k.prototype = cc11001100_hook("k.prototype", {
    jquery: cc11001100_hook("jquery", f, "object-key-init"),
    constructor: cc11001100_hook("constructor", k, "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = cc11001100_hook("t", k.merge(this.constructor(), e), "var-init");
      return t.prevObject = cc11001100_hook("t.prevObject", this, "assign"), t;
    },
    each: function (e) {
      return k.each(this, e);
    },
    map: function (n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = cc11001100_hook("t", this.length, "var-init"),
        n = cc11001100_hook("n", +e + (e < 0 ? t : 0), "var-init");
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: cc11001100_hook("push", u, "object-key-init"),
    sort: cc11001100_hook("sort", t.sort, "object-key-init"),
    splice: cc11001100_hook("splice", t.splice, "object-key-init")
  }, "assign"), "assign"), k.extend = cc11001100_hook("k.extend", k.fn.extend = cc11001100_hook("k.fn.extend", function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = cc11001100_hook("a", arguments[0] || {}, "var-init"),
      s = cc11001100_hook("s", 1, "var-init"),
      u = cc11001100_hook("u", arguments.length, "var-init"),
      l = cc11001100_hook("l", !1, "var-init");
    for ("boolean" == typeof a && (l = cc11001100_hook("l", a, "assign"), a = cc11001100_hook("a", arguments[s] || {}, "assign"), s++), "object" == typeof a || m(a) || (a = cc11001100_hook("a", {}, "assign")), s === u && (a = cc11001100_hook("a", this, "assign"), s--); s < u; s++) if (null != (e = cc11001100_hook("e", arguments[s], "assign"))) for (t in e) r = cc11001100_hook("r", e[t], "assign"), "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = cc11001100_hook("i", Array.isArray(r), "assign"))) ? (n = cc11001100_hook("n", a[t], "assign"), o = cc11001100_hook("o", i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, "assign"), i = cc11001100_hook("i", !1, "assign"), a[t] = cc11001100_hook("a[t]", k.extend(l, o, r), "assign")) : void 0 !== r && (a[t] = cc11001100_hook("a[t]", r, "assign")));
    return a;
  }, "assign"), "assign"), k.extend({
    expando: cc11001100_hook("expando", "jQuery" + (f + Math.random()).replace(/\D/g, ""), "object-key-init"),
    isReady: cc11001100_hook("isReady", !0, "object-key-init"),
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = cc11001100_hook("t", r(e), "assign")) || "function" == typeof (n = cc11001100_hook("n", v.call(t, "constructor") && t.constructor, "assign")) && a.call(n) === l);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function (e, t) {
      b(e, {
        nonce: cc11001100_hook("nonce", t && t.nonce, "object-key-init")
      });
    },
    each: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init");
      if (d(e)) {
        for (n = cc11001100_hook("n", e.length, "assign"); r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function (e, t) {
      var n = cc11001100_hook("n", t || [], "var-init");
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = cc11001100_hook("n", +t.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < n; r++) e[i++] = cc11001100_hook("e[i++]", t[r], "assign");
      return e.length = cc11001100_hook("e.length", i, "assign"), e;
    },
    grep: function (e, t, n) {
      for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", e.length, "var-init"), a = cc11001100_hook("a", !n, "var-init"); i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", 0, "var-init"),
        a = cc11001100_hook("a", [], "var-init");
      if (d(e)) for (r = cc11001100_hook("r", e.length, "assign"); o < r; o++) null != (i = cc11001100_hook("i", t(e[o], o, n), "assign")) && a.push(i);else for (o in e) null != (i = cc11001100_hook("i", t(e[o], o, n), "assign")) && a.push(i);
      return g.apply([], a);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    support: cc11001100_hook("support", y, "object-key-init")
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = cc11001100_hook("k.fn[Symbol.iterator]", t[Symbol.iterator], "assign")), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = cc11001100_hook("n[\"[object \" + t + \"]\"]", t.toLowerCase(), "assign");
  });
  var h = cc11001100_hook("h", function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = cc11001100_hook("k", "sizzle" + 1 * new Date(), "var-init"),
      m = cc11001100_hook("m", n.document, "var-init"),
      S = cc11001100_hook("S", 0, "var-init"),
      r = cc11001100_hook("r", 0, "var-init"),
      p = cc11001100_hook("p", ue(), "var-init"),
      x = cc11001100_hook("x", ue(), "var-init"),
      N = cc11001100_hook("N", ue(), "var-init"),
      A = cc11001100_hook("A", ue(), "var-init"),
      D = function (e, t) {
        return e === t && (l = cc11001100_hook("l", !0, "assign")), 0;
      },
      j = cc11001100_hook("j", {}.hasOwnProperty, "var-init"),
      t = cc11001100_hook("t", [], "var-init"),
      q = cc11001100_hook("q", t.pop, "var-init"),
      L = cc11001100_hook("L", t.push, "var-init"),
      H = cc11001100_hook("H", t.push, "var-init"),
      O = cc11001100_hook("O", t.slice, "var-init"),
      P = function (e, t) {
        for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R = cc11001100_hook("R", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      M = cc11001100_hook("M", "[\\x20\\t\\r\\n\\f]", "var-init"),
      I = cc11001100_hook("I", "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", "var-init"),
      W = cc11001100_hook("W", "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", "var-init"),
      $ = cc11001100_hook("$", ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", "var-init"),
      F = cc11001100_hook("F", new RegExp(M + "+", "g"), "var-init"),
      B = cc11001100_hook("B", new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), "var-init"),
      _ = cc11001100_hook("_", new RegExp("^" + M + "*," + M + "*"), "var-init"),
      z = cc11001100_hook("z", new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), "var-init"),
      U = cc11001100_hook("U", new RegExp(M + "|>"), "var-init"),
      X = cc11001100_hook("X", new RegExp($), "var-init"),
      V = cc11001100_hook("V", new RegExp("^" + I + "$"), "var-init"),
      G = cc11001100_hook("G", {
        ID: cc11001100_hook("ID", new RegExp("^#(" + I + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", new RegExp("^\\.(" + I + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", new RegExp("^(" + I + "|[*])"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", new RegExp("^" + W), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", new RegExp("^" + $), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", new RegExp("^(?:" + R + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      Y = cc11001100_hook("Y", /HTML$/i, "var-init"),
      Q = cc11001100_hook("Q", /^(?:input|select|textarea|button)$/i, "var-init"),
      J = cc11001100_hook("J", /^h\d$/i, "var-init"),
      K = cc11001100_hook("K", /^[^{]+\{\s*\[native \w/, "var-init"),
      Z = cc11001100_hook("Z", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      ee = cc11001100_hook("ee", /[+~]/, "var-init"),
      te = cc11001100_hook("te", new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), "var-init"),
      ne = function (e, t, n) {
        var r = cc11001100_hook("r", "0x" + t - 65536, "var-init");
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
      re = cc11001100_hook("re", /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, "var-init"),
      ie = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = cc11001100_hook("ae", be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
        next: cc11001100_hook("next", "legend", "object-key-init")
      }), "var-init");
    try {
      H.apply(t = cc11001100_hook("t", O.call(m.childNodes), "assign"), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = cc11001100_hook("H", {
        apply: cc11001100_hook("apply", t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = cc11001100_hook("n", e.length, "var-init"),
            r = cc11001100_hook("r", 0, "var-init");
          while (e[n++] = cc11001100_hook("e[n++]", t[r++], "assign"));
          e.length = cc11001100_hook("e.length", n - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    function se(t, e, n, r) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = cc11001100_hook("f", e && e.ownerDocument, "var-init"),
        p = cc11001100_hook("p", e ? e.nodeType : 9, "var-init");
      if (n = cc11001100_hook("n", n || [], "assign"), "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = cc11001100_hook("e", e || C, "assign"), E)) {
        if (11 !== p && (u = cc11001100_hook("u", Z.exec(t), "assign"))) if (i = cc11001100_hook("i", u[1], "assign")) {
          if (9 === p) {
            if (!(a = cc11001100_hook("a", e.getElementById(i), "assign"))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = cc11001100_hook("a", f.getElementById(i), "assign")) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = cc11001100_hook("i", u[3], "assign")) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }
        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = cc11001100_hook("c", t, "assign"), f = cc11001100_hook("f", e, "assign"), 1 === p && U.test(t)) {
            (s = cc11001100_hook("s", e.getAttribute("id"), "assign")) ? s = cc11001100_hook("s", s.replace(re, ie), "assign") : e.setAttribute("id", s = cc11001100_hook("s", k, "assign")), o = cc11001100_hook("o", (l = cc11001100_hook("l", h(t), "assign")).length, "assign");
            while (o--) l[o] = cc11001100_hook("l[o]", "#" + s + " " + xe(l[o]), "assign");
            c = cc11001100_hook("c", l.join(","), "assign"), f = cc11001100_hook("f", ee.test(t) && ye(e.parentNode) || e, "assign");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = cc11001100_hook("r", [], "var-init");
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = cc11001100_hook("e[t + \" \"]", n, "assign");
      };
    }
    function le(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e[k] = cc11001100_hook("e[k]", !0, "assign"), e;
    }
    function ce(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", C.createElement("fieldset"), "var-init");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = cc11001100_hook("t", null, "assign");
      }
    }
    function fe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", e.split("|"), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init");
      while (r--) b.attrHandle[n[r]] = cc11001100_hook("b.attrHandle[n[r]]", t, "assign");
    }
    function pe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t && e, "var-init"),
        r = cc11001100_hook("r", n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex, "var-init");
      if (r) return r;
      if (n) while (n = cc11001100_hook("n", n.nextSibling, "assign")) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      cc11001100_hook("t", t, "function-parameter");
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      cc11001100_hook("n", n, "function-parameter");
      return function (e) {
        var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      cc11001100_hook("t", t, "function-parameter");
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      cc11001100_hook("a", a, "function-parameter");
      return le(function (o) {
        return o = cc11001100_hook("o", +o, "assign"), le(function (e, t) {
          var n,
            r = cc11001100_hook("r", a([], e.length, o), "var-init"),
            i = cc11001100_hook("i", r.length, "var-init");
          while (i--) e[n = cc11001100_hook("n", r[i], "assign")] && (e[n] = cc11001100_hook("e[n]", !(t[n] = cc11001100_hook("t[n]", e[n], "assign")), "assign"));
        });
      });
    }
    function ye(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in d = cc11001100_hook("d", se.support = cc11001100_hook("se.support", {}, "assign"), "assign"), i = cc11001100_hook("i", se.isXML = cc11001100_hook("se.isXML", function (e) {
      var t = cc11001100_hook("t", e.namespaceURI, "var-init"),
        n = cc11001100_hook("n", (e.ownerDocument || e).documentElement, "var-init");
      return !Y.test(t || n && n.nodeName || "HTML");
    }, "assign"), "assign"), T = cc11001100_hook("T", se.setDocument = cc11001100_hook("se.setDocument", function (e) {
      var t,
        n,
        r = cc11001100_hook("r", e ? e.ownerDocument || e : m, "var-init");
      return r !== C && 9 === r.nodeType && r.documentElement && (a = cc11001100_hook("a", (C = cc11001100_hook("C", r, "assign")).documentElement, "assign"), E = cc11001100_hook("E", !i(C), "assign"), m !== C && (n = cc11001100_hook("n", C.defaultView, "assign")) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = cc11001100_hook("d.attributes", ce(function (e) {
        return e.className = cc11001100_hook("e.className", "i", "assign"), !e.getAttribute("className");
      }), "assign"), d.getElementsByTagName = cc11001100_hook("d.getElementsByTagName", ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), "assign"), d.getElementsByClassName = cc11001100_hook("d.getElementsByClassName", K.test(C.getElementsByClassName), "assign"), d.getById = cc11001100_hook("d.getById", ce(function (e) {
        return a.appendChild(e).id = cc11001100_hook("a.appendChild(e).id", k, "assign"), !C.getElementsByName || !C.getElementsByName(k).length;
      }), "assign"), d.getById ? (b.filter.ID = cc11001100_hook("b.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(te, ne), "var-init");
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, "assign"), b.find.ID = cc11001100_hook("b.find.ID", function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = cc11001100_hook("n", t.getElementById(e), "var-init");
          return n ? [n] : [];
        }
      }, "assign")) : (b.filter.ID = cc11001100_hook("b.filter.ID", function (e) {
        var n = cc11001100_hook("n", e.replace(te, ne), "var-init");
        return function (e) {
          var t = cc11001100_hook("t", "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"), "var-init");
          return t && t.value === n;
        };
      }, "assign"), b.find.ID = cc11001100_hook("b.find.ID", function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
            r,
            i,
            o = cc11001100_hook("o", t.getElementById(e), "var-init");
          if (o) {
            if ((n = cc11001100_hook("n", o.getAttributeNode("id"), "assign")) && n.value === e) return [o];
            i = cc11001100_hook("i", t.getElementsByName(e), "assign"), r = cc11001100_hook("r", 0, "assign");
            while (o = cc11001100_hook("o", i[r++], "assign")) if ((n = cc11001100_hook("n", o.getAttributeNode("id"), "assign")) && n.value === e) return [o];
          }
          return [];
        }
      }, "assign")), b.find.TAG = cc11001100_hook("b.find.TAG", d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = cc11001100_hook("r", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", t.getElementsByTagName(e), "var-init");
        if ("*" === e) {
          while (n = cc11001100_hook("n", o[i++], "assign")) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, "assign"), b.find.CLASS = cc11001100_hook("b.find.CLASS", d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, "assign"), s = cc11001100_hook("s", [], "assign"), v = cc11001100_hook("v", [], "assign"), (d.qsa = cc11001100_hook("d.qsa", K.test(C.querySelectorAll), "assign")) && (ce(function (e) {
        a.appendChild(e).innerHTML = cc11001100_hook("a.appendChild(e).innerHTML", "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", "assign"), e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>", "assign");
        var t = cc11001100_hook("t", C.createElement("input"), "var-init");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = cc11001100_hook("a.appendChild(e).disabled", !0, "assign"), 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = cc11001100_hook("d.matchesSelector", K.test(c = cc11001100_hook("c", a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector, "assign")), "assign")) && ce(function (e) {
        d.disconnectedMatch = cc11001100_hook("d.disconnectedMatch", c.call(e, "*"), "assign"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = cc11001100_hook("v", v.length && new RegExp(v.join("|")), "assign"), s = cc11001100_hook("s", s.length && new RegExp(s.join("|")), "assign"), t = cc11001100_hook("t", K.test(a.compareDocumentPosition), "assign"), y = cc11001100_hook("y", t || K.test(a.contains) ? function (e, t) {
        var n = cc11001100_hook("n", 9 === e.nodeType ? e.documentElement : e, "var-init"),
          r = cc11001100_hook("r", t && t.parentNode, "var-init");
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = cc11001100_hook("t", t.parentNode, "assign")) if (t === e) return !0;
        return !1;
      }, "assign"), D = cc11001100_hook("D", t ? function (e, t) {
        if (e === t) return l = cc11001100_hook("l", !0, "assign"), 0;
        var n = cc11001100_hook("n", !e.compareDocumentPosition - !t.compareDocumentPosition, "var-init");
        return n || (1 & (n = cc11001100_hook("n", (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, "assign")) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = cc11001100_hook("l", !0, "assign"), 0;
        var n,
          r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", e.parentNode, "var-init"),
          o = cc11001100_hook("o", t.parentNode, "var-init"),
          a = cc11001100_hook("a", [e], "var-init"),
          s = cc11001100_hook("s", [t], "var-init");
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = cc11001100_hook("n", e, "assign");
        while (n = cc11001100_hook("n", n.parentNode, "assign")) a.unshift(n);
        n = cc11001100_hook("n", t, "assign");
        while (n = cc11001100_hook("n", n.parentNode, "assign")) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }, "assign")), C;
    }, "assign"), "assign"), se.matches = cc11001100_hook("se.matches", function (e, t) {
      return se(e, null, null, t);
    }, "assign"), se.matchesSelector = cc11001100_hook("se.matchesSelector", function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = cc11001100_hook("n", c.call(e, t), "var-init");
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, "assign"), se.contains = cc11001100_hook("se.contains", function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, "assign"), se.attr = cc11001100_hook("se.attr", function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = cc11001100_hook("n", b.attrHandle[t.toLowerCase()], "var-init"),
        r = cc11001100_hook("r", n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0, "var-init");
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = cc11001100_hook("r", e.getAttributeNode(t), "assign")) && r.specified ? r.value : null;
    }, "assign"), se.escape = cc11001100_hook("se.escape", function (e) {
      return (e + "").replace(re, ie);
    }, "assign"), se.error = cc11001100_hook("se.error", function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, "assign"), se.uniqueSort = cc11001100_hook("se.uniqueSort", function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      if (l = cc11001100_hook("l", !d.detectDuplicates, "assign"), u = cc11001100_hook("u", !d.sortStable && e.slice(0), "assign"), e.sort(D), l) {
        while (t = cc11001100_hook("t", e[i++], "assign")) t === e[i] && (r = cc11001100_hook("r", n.push(i), "assign"));
        while (r--) e.splice(n[r], 1);
      }
      return u = cc11001100_hook("u", null, "assign"), e;
    }, "assign"), o = cc11001100_hook("o", se.getText = cc11001100_hook("se.getText", function (e) {
      var t,
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.nodeType, "var-init");
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) n += cc11001100_hook("n", o(e), "assign");
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = cc11001100_hook("t", e[r++], "assign")) n += cc11001100_hook("n", o(t), "assign");
      return n;
    }, "assign"), "assign"), (b = cc11001100_hook("b", se.selectors = cc11001100_hook("se.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", le, "object-key-init"),
      match: cc11001100_hook("match", G, "object-key-init"),
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
        ATTR: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].replace(te, ne), "assign"), e[3] = cc11001100_hook("e[3]", (e[3] || e[4] || e[5] || "").replace(te, ne), "assign"), "~=" === e[2] && (e[3] = cc11001100_hook("e[3]", " " + e[3] + " ", "assign")), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].toLowerCase(), "assign"), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = cc11001100_hook("e[4]", +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), "assign"), e[5] = cc11001100_hook("e[5]", +(e[7] + e[8] || "odd" === e[3]), "assign")) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = cc11001100_hook("n", !e[6] && e[2], "var-init");
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = cc11001100_hook("e[2]", e[4] || e[5] || "", "assign") : n && X.test(n) && (t = cc11001100_hook("t", h(n, !0), "assign")) && (t = cc11001100_hook("t", n.indexOf(")", n.length - t) - n.length, "assign")) && (e[0] = cc11001100_hook("e[0]", e[0].slice(0, t), "assign"), e[2] = cc11001100_hook("e[2]", n.slice(0, t), "assign")), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = cc11001100_hook("t", e.replace(te, ne).toLowerCase(), "var-init");
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = cc11001100_hook("t", p[e + " "], "var-init");
          return t || (t = cc11001100_hook("t", new RegExp("(^|" + M + ")" + e + "(" + M + "|$)"), "assign")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = cc11001100_hook("t", se.attr(e, n), "var-init");
            return null == t ? "!=" === r : !r || (t += cc11001100_hook("t", "", "assign"), "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var y = cc11001100_hook("y", "nth" !== h.slice(0, 3), "var-init"),
            m = cc11001100_hook("m", "last" !== h.slice(-4), "var-init"),
            x = cc11001100_hook("x", "of-type" === e, "var-init");
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = cc11001100_hook("l", y !== m ? "nextSibling" : "previousSibling", "var-init"),
              c = cc11001100_hook("c", e.parentNode, "var-init"),
              f = cc11001100_hook("f", x && e.nodeName.toLowerCase(), "var-init"),
              p = cc11001100_hook("p", !n && !x, "var-init"),
              d = cc11001100_hook("d", !1, "var-init");
            if (c) {
              if (y) {
                while (l) {
                  a = cc11001100_hook("a", e, "assign");
                  while (a = cc11001100_hook("a", a[l], "assign")) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  u = cc11001100_hook("u", l = cc11001100_hook("l", "only" === h && !u && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (u = cc11001100_hook("u", [m ? c.firstChild : c.lastChild], "assign"), m && p) {
                d = cc11001100_hook("d", (s = cc11001100_hook("s", (r = cc11001100_hook("r", (i = cc11001100_hook("i", (o = cc11001100_hook("o", (a = cc11001100_hook("a", c, "assign"))[k] || (a[k] = cc11001100_hook("a[k]", {}, "assign")), "assign"))[a.uniqueID] || (o[a.uniqueID] = cc11001100_hook("o[a.uniqueID]", {}, "assign")), "assign"))[h] || [], "assign"))[0] === S && r[1], "assign")) && r[2], "assign"), a = cc11001100_hook("a", s && c.childNodes[s], "assign");
                while (a = cc11001100_hook("a", ++s && a && a[l] || (d = cc11001100_hook("d", s = cc11001100_hook("s", 0, "assign"), "assign")) || u.pop(), "assign")) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = cc11001100_hook("i[h]", [S, s, d], "assign");
                  break;
                }
              } else if (p && (d = cc11001100_hook("d", s = cc11001100_hook("s", (r = cc11001100_hook("r", (i = cc11001100_hook("i", (o = cc11001100_hook("o", (a = cc11001100_hook("a", e, "assign"))[k] || (a[k] = cc11001100_hook("a[k]", {}, "assign")), "assign"))[a.uniqueID] || (o[a.uniqueID] = cc11001100_hook("o[a.uniqueID]", {}, "assign")), "assign"))[h] || [], "assign"))[0] === S && r[1], "assign"), "assign")), !1 === d) while (a = cc11001100_hook("a", ++s && a && a[l] || (d = cc11001100_hook("d", s = cc11001100_hook("s", 0, "assign"), "assign")) || u.pop(), "assign")) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = cc11001100_hook("i", (o = cc11001100_hook("o", a[k] || (a[k] = cc11001100_hook("a[k]", {}, "assign")), "assign"))[a.uniqueID] || (o[a.uniqueID] = cc11001100_hook("o[a.uniqueID]", {}, "assign")), "assign"))[h] = cc11001100_hook("(i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h]", [S, d], "assign")), a === e)) break;
              return (d -= cc11001100_hook("d", v, "assign")) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
            a = cc11001100_hook("a", b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e), "var-init");
          return a[k] ? a(o) : 1 < a.length ? (t = cc11001100_hook("t", [e, e, "", o], "assign"), b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
              r = cc11001100_hook("r", a(e, o), "var-init"),
              i = cc11001100_hook("i", r.length, "var-init");
            while (i--) e[n = cc11001100_hook("n", P(e, r[i]), "assign")] = cc11001100_hook("e[n = P(e, r[i])]", !(t[n] = cc11001100_hook("t[n]", r[i], "assign")), "assign");
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", le(function (e) {
          var r = cc11001100_hook("r", [], "var-init"),
            i = cc11001100_hook("i", [], "var-init"),
            s = cc11001100_hook("s", f(e.replace(B, "$1")), "var-init");
          return s[k] ? le(function (e, t, n, r) {
            var i,
              o = cc11001100_hook("o", s(e, null, r, []), "var-init"),
              a = cc11001100_hook("a", e.length, "var-init");
            while (a--) (i = cc11001100_hook("i", o[a], "assign")) && (e[a] = cc11001100_hook("e[a]", !(t[a] = cc11001100_hook("t[a]", i, "assign")), "assign"));
          }) : function (e, t, n) {
            return r[0] = cc11001100_hook("r[0]", e, "assign"), s(r, null, n, i), r[0] = cc11001100_hook("r[0]", null, "assign"), !i.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", le(function (t) {
          return t = cc11001100_hook("t", t.replace(te, ne), "assign"), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = cc11001100_hook("n", n.replace(te, ne).toLowerCase(), "assign"), function (e) {
            var t;
            do {
              if (t = cc11001100_hook("t", E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"), "assign")) return (t = cc11001100_hook("t", t.toLowerCase(), "assign")) === n || 0 === t.indexOf(n + "-");
            } while ((e = cc11001100_hook("e", e.parentNode, "assign")) && 1 === e.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (e) {
          var t = cc11001100_hook("t", n.location && n.location.hash, "var-init");
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === a;
        },
        focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: cc11001100_hook("enabled", ge(!1), "object-key-init"),
        disabled: cc11001100_hook("disabled", ge(!0), "object-key-init"),
        checked: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = cc11001100_hook("t", e.getAttribute("type"), "assign")) || "text" === t.toLowerCase());
        },
        first: cc11001100_hook("first", ve(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", ve(function (e, t) {
          return [t - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), "object-key-init"),
        even: cc11001100_hook("even", ve(function (e, t) {
          for (var n = cc11001100_hook("n", 0, "var-init"); n < t; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", ve(function (e, t) {
          for (var n = cc11001100_hook("n", 1, "var-init"); n < t; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", ve(function (e, t, n) {
          for (var r = cc11001100_hook("r", n < 0 ? n + t : t < n ? t : n, "var-init"); 0 <= --r;) e.push(r);
          return e;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", ve(function (e, t, n) {
          for (var r = cc11001100_hook("r", n < 0 ? n + t : n, "var-init"); ++r < t;) e.push(r);
          return e;
        }), "object-key-init")
      }
    }, "assign"), "assign")).pseudos.nth = cc11001100_hook("(b = se.selectors = {\n  cacheLength: 50,\n  createPseudo: le,\n  match: G,\n  attrHandle: {},\n  find: {},\n  relative: {\n    \">\": {\n      dir: \"parentNode\",\n      first: !0\n    },\n    \" \": {\n      dir: \"parentNode\"\n    },\n    \"+\": {\n      dir: \"previousSibling\",\n      first: !0\n    },\n    \"~\": {\n      dir: \"previousSibling\"\n    }\n  },\n  preFilter: {\n    ATTR: function (e) {\n      return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || \"\").replace(te, ne), \"~=\" === e[2] && (e[3] = \" \" + e[3] + \" \"), e.slice(0, 4);\n    },\n    CHILD: function (e) {\n      return e[1] = e[1].toLowerCase(), \"nth\" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (\"even\" === e[3] || \"odd\" === e[3])), e[5] = +(e[7] + e[8] || \"odd\" === e[3])) : e[3] && se.error(e[0]), e;\n    },\n    PSEUDO: function (e) {\n      var t,\n        n = !e[6] && e[2];\n      return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || \"\" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(\")\", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));\n    }\n  },\n  filter: {\n    TAG: function (e) {\n      var t = e.replace(te, ne).toLowerCase();\n      return \"*\" === e ? function () {\n        return !0;\n      } : function (e) {\n        return e.nodeName && e.nodeName.toLowerCase() === t;\n      };\n    },\n    CLASS: function (e) {\n      var t = p[e + \" \"];\n      return t || (t = new RegExp(\"(^|\" + M + \")\" + e + \"(\" + M + \"|$)\")) && p(e, function (e) {\n        return t.test(\"string\" == typeof e.className && e.className || \"undefined\" != typeof e.getAttribute && e.getAttribute(\"class\") || \"\");\n      });\n    },\n    ATTR: function (n, r, i) {\n      return function (e) {\n        var t = se.attr(e, n);\n        return null == t ? \"!=\" === r : !r || (t += \"\", \"=\" === r ? t === i : \"!=\" === r ? t !== i : \"^=\" === r ? i && 0 === t.indexOf(i) : \"*=\" === r ? i && -1 < t.indexOf(i) : \"$=\" === r ? i && t.slice(-i.length) === i : \"~=\" === r ? -1 < (\" \" + t.replace(F, \" \") + \" \").indexOf(i) : \"|=\" === r && (t === i || t.slice(0, i.length + 1) === i + \"-\"));\n      };\n    },\n    CHILD: function (h, e, t, g, v) {\n      var y = \"nth\" !== h.slice(0, 3),\n        m = \"last\" !== h.slice(-4),\n        x = \"of-type\" === e;\n      return 1 === g && 0 === v ? function (e) {\n        return !!e.parentNode;\n      } : function (e, t, n) {\n        var r,\n          i,\n          o,\n          a,\n          s,\n          u,\n          l = y !== m ? \"nextSibling\" : \"previousSibling\",\n          c = e.parentNode,\n          f = x && e.nodeName.toLowerCase(),\n          p = !n && !x,\n          d = !1;\n        if (c) {\n          if (y) {\n            while (l) {\n              a = e;\n              while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;\n              u = l = \"only\" === h && !u && \"nextSibling\";\n            }\n            return !0;\n          }\n          if (u = [m ? c.firstChild : c.lastChild], m && p) {\n            d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];\n            while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {\n              i[h] = [S, s, d];\n              break;\n            }\n          } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;\n          return (d -= v) === g || d % g == 0 && 0 <= d / g;\n        }\n      };\n    },\n    PSEUDO: function (e, o) {\n      var t,\n        a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error(\"unsupported pseudo: \" + e);\n      return a[k] ? a(o) : 1 < a.length ? (t = [e, e, \"\", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {\n        var n,\n          r = a(e, o),\n          i = r.length;\n        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);\n      }) : function (e) {\n        return a(e, 0, t);\n      }) : a;\n    }\n  },\n  pseudos: {\n    not: le(function (e) {\n      var r = [],\n        i = [],\n        s = f(e.replace(B, \"$1\"));\n      return s[k] ? le(function (e, t, n, r) {\n        var i,\n          o = s(e, null, r, []),\n          a = e.length;\n        while (a--) (i = o[a]) && (e[a] = !(t[a] = i));\n      }) : function (e, t, n) {\n        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();\n      };\n    }),\n    has: le(function (t) {\n      return function (e) {\n        return 0 < se(t, e).length;\n      };\n    }),\n    contains: le(function (t) {\n      return t = t.replace(te, ne), function (e) {\n        return -1 < (e.textContent || o(e)).indexOf(t);\n      };\n    }),\n    lang: le(function (n) {\n      return V.test(n || \"\") || se.error(\"unsupported lang: \" + n), n = n.replace(te, ne).toLowerCase(), function (e) {\n        var t;\n        do {\n          if (t = E ? e.lang : e.getAttribute(\"xml:lang\") || e.getAttribute(\"lang\")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + \"-\");\n        } while ((e = e.parentNode) && 1 === e.nodeType);\n        return !1;\n      };\n    }),\n    target: function (e) {\n      var t = n.location && n.location.hash;\n      return t && t.slice(1) === e.id;\n    },\n    root: function (e) {\n      return e === a;\n    },\n    focus: function (e) {\n      return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);\n    },\n    enabled: ge(!1),\n    disabled: ge(!0),\n    checked: function (e) {\n      var t = e.nodeName.toLowerCase();\n      return \"input\" === t && !!e.checked || \"option\" === t && !!e.selected;\n    },\n    selected: function (e) {\n      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;\n    },\n    empty: function (e) {\n      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;\n      return !0;\n    },\n    parent: function (e) {\n      return !b.pseudos.empty(e);\n    },\n    header: function (e) {\n      return J.test(e.nodeName);\n    },\n    input: function (e) {\n      return Q.test(e.nodeName);\n    },\n    button: function (e) {\n      var t = e.nodeName.toLowerCase();\n      return \"input\" === t && \"button\" === e.type || \"button\" === t;\n    },\n    text: function (e) {\n      var t;\n      return \"input\" === e.nodeName.toLowerCase() && \"text\" === e.type && (null == (t = e.getAttribute(\"type\")) || \"text\" === t.toLowerCase());\n    },\n    first: ve(function () {\n      return [0];\n    }),\n    last: ve(function (e, t) {\n      return [t - 1];\n    }),\n    eq: ve(function (e, t, n) {\n      return [n < 0 ? n + t : n];\n    }),\n    even: ve(function (e, t) {\n      for (var n = 0; n < t; n += 2) e.push(n);\n      return e;\n    }),\n    odd: ve(function (e, t) {\n      for (var n = 1; n < t; n += 2) e.push(n);\n      return e;\n    }),\n    lt: ve(function (e, t, n) {\n      for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);\n      return e;\n    }),\n    gt: ve(function (e, t, n) {\n      for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);\n      return e;\n    })\n  }\n}).pseudos.nth", b.pseudos.eq, "assign"), {
      radio: cc11001100_hook("radio", !0, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", !0, "object-key-init"),
      file: cc11001100_hook("file", !0, "object-key-init"),
      password: cc11001100_hook("password", !0, "object-key-init"),
      image: cc11001100_hook("image", !0, "object-key-init")
    }) b.pseudos[e] = cc11001100_hook("b.pseudos[e]", de(e), "assign");
    for (e in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) b.pseudos[e] = cc11001100_hook("b.pseudos[e]", he(e), "assign");
    function me() {}
    function xe(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", "", "var-init"); t < n; t++) r += cc11001100_hook("r", e[t].value, "assign");
      return r;
    }
    function be(s, e, t) {
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var u = cc11001100_hook("u", e.dir, "var-init"),
        l = cc11001100_hook("l", e.next, "var-init"),
        c = cc11001100_hook("c", l || u, "var-init"),
        f = cc11001100_hook("f", t && "parentNode" === c, "var-init"),
        p = cc11001100_hook("p", r++, "var-init");
      return e.first ? function (e, t, n) {
        while (e = cc11001100_hook("e", e[u], "assign")) if (1 === e.nodeType || f) return s(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o,
          a = cc11001100_hook("a", [S, p], "var-init");
        if (n) {
          while (e = cc11001100_hook("e", e[u], "assign")) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = cc11001100_hook("e", e[u], "assign")) if (1 === e.nodeType || f) if (i = cc11001100_hook("i", (o = cc11001100_hook("o", e[k] || (e[k] = cc11001100_hook("e[k]", {}, "assign")), "assign"))[e.uniqueID] || (o[e.uniqueID] = cc11001100_hook("o[e.uniqueID]", {}, "assign")), "assign"), l && l === e.nodeName.toLowerCase()) e = cc11001100_hook("e", e[u] || e, "assign");else {
          if ((r = cc11001100_hook("r", i[c], "assign")) && r[0] === S && r[1] === p) return a[2] = cc11001100_hook("a[2]", r[2], "assign");
          if ((i[c] = cc11001100_hook("i[c]", a, "assign"))[2] = cc11001100_hook("(i[c] = a)[2]", s(e, t, n), "assign")) return !0;
        }
        return !1;
      };
    }
    function we(i) {
      cc11001100_hook("i", i, "function-parameter");
      return 1 < i.length ? function (e, t, n) {
        var r = cc11001100_hook("r", i.length, "var-init");
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Te(e, t, n, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      for (var o, a = cc11001100_hook("a", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), u = cc11001100_hook("u", e.length, "var-init"), l = cc11001100_hook("l", null != t, "var-init"); s < u; s++) (o = cc11001100_hook("o", e[s], "assign")) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("h", h, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      cc11001100_hook("y", y, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      return v && !v[k] && (v = cc11001100_hook("v", Ce(v), "assign")), y && !y[k] && (y = cc11001100_hook("y", Ce(y, e), "assign")), le(function (e, t, n, r) {
        var i,
          o,
          a,
          s = cc11001100_hook("s", [], "var-init"),
          u = cc11001100_hook("u", [], "var-init"),
          l = cc11001100_hook("l", t.length, "var-init"),
          c = cc11001100_hook("c", e || function (e, t, n) {
            for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); r < i; r++) se(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []), "var-init"),
          f = cc11001100_hook("f", !d || !e && h ? c : Te(c, s, d, n, r), "var-init"),
          p = cc11001100_hook("p", g ? y || (e ? d : l || v) ? [] : t : f, "var-init");
        if (g && g(f, p, n, r), v) {
          i = cc11001100_hook("i", Te(p, u), "assign"), v(i, [], n, r), o = cc11001100_hook("o", i.length, "assign");
          while (o--) (a = cc11001100_hook("a", i[o], "assign")) && (p[u[o]] = cc11001100_hook("p[u[o]]", !(f[u[o]] = cc11001100_hook("f[u[o]]", a, "assign")), "assign"));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = cc11001100_hook("i", [], "assign"), o = cc11001100_hook("o", p.length, "assign");
              while (o--) (a = cc11001100_hook("a", p[o], "assign")) && i.push(f[o] = cc11001100_hook("f[o]", a, "assign"));
              y(null, p = cc11001100_hook("p", [], "assign"), i, r);
            }
            o = cc11001100_hook("o", p.length, "assign");
            while (o--) (a = cc11001100_hook("a", p[o], "assign")) && -1 < (i = cc11001100_hook("i", y ? P(e, a) : s[o], "assign")) && (e[i] = cc11001100_hook("e[i]", !(t[i] = cc11001100_hook("t[i]", a, "assign")), "assign"));
          }
        } else p = cc11001100_hook("p", Te(p === t ? p.splice(l, p.length) : p), "assign"), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }
    function Ee(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var i, t, n, r = cc11001100_hook("r", e.length, "var-init"), o = cc11001100_hook("o", b.relative[e[0].type], "var-init"), a = cc11001100_hook("a", o || b.relative[" "], "var-init"), s = cc11001100_hook("s", o ? 1 : 0, "var-init"), u = cc11001100_hook("u", be(function (e) {
          return e === i;
        }, a, !0), "var-init"), l = cc11001100_hook("l", be(function (e) {
          return -1 < P(i, e);
        }, a, !0), "var-init"), c = cc11001100_hook("c", [function (e, t, n) {
          var r = cc11001100_hook("r", !o && (n || t !== w) || ((i = cc11001100_hook("i", t, "assign")).nodeType ? u(e, t, n) : l(e, t, n)), "var-init");
          return i = cc11001100_hook("i", null, "assign"), r;
        }], "var-init"); s < r; s++) if (t = cc11001100_hook("t", b.relative[e[s].type], "assign")) c = cc11001100_hook("c", [be(we(c), t)], "assign");else {
        if ((t = cc11001100_hook("t", b.filter[e[s].type].apply(null, e[s].matches), "assign"))[k]) {
          for (n = cc11001100_hook("n", ++s, "assign"); n < r; n++) if (b.relative[e[n].type]) break;
          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: cc11001100_hook("value", " " === e[s - 2].type ? "*" : "", "object-key-init")
          })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = cc11001100_hook("e", e.slice(n), "assign")), n < r && xe(e));
        }
        c.push(t);
      }
      return we(c);
    }
    return me.prototype = cc11001100_hook("me.prototype", b.filters = cc11001100_hook("b.filters", b.pseudos, "assign"), "assign"), b.setFilters = cc11001100_hook("b.setFilters", new me(), "assign"), h = cc11001100_hook("h", se.tokenize = cc11001100_hook("se.tokenize", function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = cc11001100_hook("l", x[e + " "], "var-init");
      if (l) return t ? 0 : l.slice(0);
      a = cc11001100_hook("a", e, "assign"), s = cc11001100_hook("s", [], "assign"), u = cc11001100_hook("u", b.preFilter, "assign");
      while (a) {
        for (o in n && !(r = cc11001100_hook("r", _.exec(a), "assign")) || (r && (a = cc11001100_hook("a", a.slice(r[0].length) || a, "assign")), s.push(i = cc11001100_hook("i", [], "assign"))), n = cc11001100_hook("n", !1, "assign"), (r = cc11001100_hook("r", z.exec(a), "assign")) && (n = cc11001100_hook("n", r.shift(), "assign"), i.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", r[0].replace(B, " "), "object-key-init")
        }), a = cc11001100_hook("a", a.slice(n.length), "assign")), b.filter) !(r = cc11001100_hook("r", G[o].exec(a), "assign")) || u[o] && !(r = cc11001100_hook("r", u[o](r), "assign")) || (n = cc11001100_hook("n", r.shift(), "assign"), i.push({
          value: cc11001100_hook("value", n, "object-key-init"),
          type: cc11001100_hook("type", o, "object-key-init"),
          matches: cc11001100_hook("matches", r, "object-key-init")
        }), a = cc11001100_hook("a", a.slice(n.length), "assign"));
        if (!n) break;
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, "assign"), "assign"), f = cc11001100_hook("f", se.compile = cc11001100_hook("se.compile", function (e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", N[e + " "], "var-init");
      if (!a) {
        t || (t = cc11001100_hook("t", h(e), "assign")), n = cc11001100_hook("n", t.length, "assign");
        while (n--) (a = cc11001100_hook("a", Ee(t[n]), "assign"))[k] ? i.push(a) : o.push(a);
        (a = cc11001100_hook("a", N(e, (v = cc11001100_hook("v", o, "assign"), m = cc11001100_hook("m", 0 < (y = cc11001100_hook("y", i, "assign")).length, "assign"), x = cc11001100_hook("x", 0 < v.length, "assign"), r = cc11001100_hook("r", function (e, t, n, r, i) {
          var o,
            a,
            s,
            u = cc11001100_hook("u", 0, "var-init"),
            l = cc11001100_hook("l", "0", "var-init"),
            c = cc11001100_hook("c", e && [], "var-init"),
            f = cc11001100_hook("f", [], "var-init"),
            p = cc11001100_hook("p", w, "var-init"),
            d = cc11001100_hook("d", e || x && b.find.TAG("*", i), "var-init"),
            h = cc11001100_hook("h", S += cc11001100_hook("S", null == p ? 1 : Math.random() || .1, "assign"), "var-init"),
            g = cc11001100_hook("g", d.length, "var-init");
          for (i && (w = cc11001100_hook("w", t === C || t || i, "assign")); l !== g && null != (o = cc11001100_hook("o", d[l], "assign")); l++) {
            if (x && o) {
              a = cc11001100_hook("a", 0, "assign"), t || o.ownerDocument === C || (T(o), n = cc11001100_hook("n", !E, "assign"));
              while (s = cc11001100_hook("s", v[a++], "assign")) if (s(o, t || C, n)) {
                r.push(o);
                break;
              }
              i && (S = cc11001100_hook("S", h, "assign"));
            }
            m && ((o = cc11001100_hook("o", !s && o, "assign")) && u--, e && c.push(o));
          }
          if (u += cc11001100_hook("u", l, "assign"), m && l !== u) {
            a = cc11001100_hook("a", 0, "assign");
            while (s = cc11001100_hook("s", y[a++], "assign")) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = cc11001100_hook("f[l]", q.call(r), "assign"));
              f = cc11001100_hook("f", Te(f), "assign");
            }
            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
          }
          return i && (S = cc11001100_hook("S", h, "assign"), w = cc11001100_hook("w", p, "assign")), c;
        }, "assign"), m ? le(r) : r)), "assign")).selector = cc11001100_hook("(a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {\n  var o,\n    a,\n    s,\n    u = 0,\n    l = \"0\",\n    c = e && [],\n    f = [],\n    p = w,\n    d = e || x && b.find.TAG(\"*\", i),\n    h = S += null == p ? 1 : Math.random() || .1,\n    g = d.length;\n  for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {\n    if (x && o) {\n      a = 0, t || o.ownerDocument === C || (T(o), n = !E);\n      while (s = v[a++]) if (s(o, t || C, n)) {\n        r.push(o);\n        break;\n      }\n      i && (S = h);\n    }\n    m && ((o = !s && o) && u--, e && c.push(o));\n  }\n  if (u += l, m && l !== u) {\n    a = 0;\n    while (s = y[a++]) s(c, f, t, n);\n    if (e) {\n      if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));\n      f = Te(f);\n    }\n    H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);\n  }\n  return i && (S = h, w = p), c;\n}, m ? le(r) : r))).selector", e, "assign");
      }
      return a;
    }, "assign"), "assign"), g = cc11001100_hook("g", se.select = cc11001100_hook("se.select", function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = cc11001100_hook("l", "function" == typeof e && e, "var-init"),
        c = cc11001100_hook("c", !r && h(e = cc11001100_hook("e", l.selector || e, "assign")), "var-init");
      if (n = cc11001100_hook("n", n || [], "assign"), 1 === c.length) {
        if (2 < (o = cc11001100_hook("o", c[0] = cc11001100_hook("c[0]", c[0].slice(0), "assign"), "assign")).length && "ID" === (a = cc11001100_hook("a", o[0], "assign")).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = cc11001100_hook("t", (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0], "assign"))) return n;
          l && (t = cc11001100_hook("t", t.parentNode, "assign")), e = cc11001100_hook("e", e.slice(o.shift().value.length), "assign");
        }
        i = cc11001100_hook("i", G.needsContext.test(e) ? 0 : o.length, "assign");
        while (i--) {
          if (a = cc11001100_hook("a", o[i], "assign"), b.relative[s = cc11001100_hook("s", a.type, "assign")]) break;
          if ((u = cc11001100_hook("u", b.find[s], "assign")) && (r = cc11001100_hook("r", u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t), "assign"))) {
            if (o.splice(i, 1), !(e = cc11001100_hook("e", r.length && xe(o), "assign"))) return H.apply(n, r), n;
            break;
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, "assign"), "assign"), d.sortStable = cc11001100_hook("d.sortStable", k.split("").sort(D).join("") === k, "assign"), d.detectDuplicates = cc11001100_hook("d.detectDuplicates", !!l, "assign"), T(), d.sortDetached = cc11001100_hook("d.sortDetached", ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), "assign"), ce(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='#'></a>", "assign"), "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<input/>", "assign"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = cc11001100_hook("r", e.getAttributeNode(t), "assign")) && r.specified ? r.value : null;
    }), se;
  }(C), "var-init");
  k.find = cc11001100_hook("k.find", h, "assign"), k.expr = cc11001100_hook("k.expr", h.selectors, "assign"), k.expr[":"] = cc11001100_hook("k.expr[\":\"]", k.expr.pseudos, "assign"), k.uniqueSort = cc11001100_hook("k.uniqueSort", k.unique = cc11001100_hook("k.unique", h.uniqueSort, "assign"), "assign"), k.text = cc11001100_hook("k.text", h.getText, "assign"), k.isXMLDoc = cc11001100_hook("k.isXMLDoc", h.isXML, "assign"), k.contains = cc11001100_hook("k.contains", h.contains, "assign"), k.escapeSelector = cc11001100_hook("k.escapeSelector", h.escape, "assign");
  var T = function (e, t, n) {
      var r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", void 0 !== n, "var-init");
      while ((e = cc11001100_hook("e", e[t], "assign")) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    S = function (e, t) {
      for (var n = cc11001100_hook("n", [], "var-init"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = cc11001100_hook("N", k.expr.match.needsContext, "var-init");
  function A(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = cc11001100_hook("D", /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, "var-init");
  function j(e, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }
  k.filter = cc11001100_hook("k.filter", function (e, t, n) {
    var r = cc11001100_hook("r", t[0], "var-init");
    return n && (e = cc11001100_hook("e", ":not(" + e + ")", "assign")), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, "assign"), k.fn.extend({
    find: function (e) {
      var t,
        n,
        r = cc11001100_hook("r", this.length, "var-init"),
        i = cc11001100_hook("i", this, "var-init");
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); t < r; t++) if (k.contains(i[t], this)) return !0;
      }));
      for (n = cc11001100_hook("n", this.pushStack([]), "assign"), t = cc11001100_hook("t", 0, "assign"); t < r; t++) k.find(e, i[t], n);
      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function (e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
    L = cc11001100_hook("L", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, "var-init");
  (k.fn.init = cc11001100_hook("k.fn.init", function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = cc11001100_hook("n", n || q, "assign"), "string" == typeof e) {
      if (!(r = cc11001100_hook("r", "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e), "assign")) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = cc11001100_hook("t", t instanceof k ? t[0] : t, "assign"), k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = cc11001100_hook("i", E.getElementById(r[2]), "assign")) && (this[0] = cc11001100_hook("this[0]", i, "assign"), this.length = cc11001100_hook("this.length", 1, "assign")), this;
    }
    return e.nodeType ? (this[0] = cc11001100_hook("this[0]", e, "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }, "assign")).prototype = cc11001100_hook("(k.fn.init = function (e, t, n) {\n  var r, i;\n  if (!e) return this;\n  if (n = n || q, \"string\" == typeof e) {\n    if (!(r = \"<\" === e[0] && \">\" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);\n    if (r[1]) {\n      if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);\n      return this;\n    }\n    return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;\n  }\n  return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);\n}).prototype", k.fn, "assign"), q = cc11001100_hook("q", k(E), "assign");
  var H = cc11001100_hook("H", /^(?:parents|prev(?:Until|All))/, "var-init"),
    O = cc11001100_hook("O", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  function P(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    while ((e = cc11001100_hook("e", e[t], "assign")) && 1 !== e.nodeType);
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = cc11001100_hook("t", k(e, this), "var-init"),
        n = cc11001100_hook("n", t.length, "var-init");
      return this.filter(function () {
        for (var e = cc11001100_hook("e", 0, "var-init"); e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", this.length, "var-init"),
        o = cc11001100_hook("o", [], "var-init"),
        a = cc11001100_hook("a", "string" != typeof e && k(e), "var-init");
      if (!N.test(e)) for (; r < i; r++) for (n = cc11001100_hook("n", this[r], "assign"); n && n !== t; n = cc11001100_hook("n", n.parentNode, "assign")) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return T(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function (e) {
      return P(e, "nextSibling");
    },
    prev: function (e) {
      return P(e, "previousSibling");
    },
    nextAll: function (e) {
      return T(e, "nextSibling");
    },
    prevAll: function (e) {
      return T(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function (e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return S(e.firstChild);
    },
    contents: function (e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = cc11001100_hook("e", e.content || e, "assign")), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = cc11001100_hook("k.fn[r]", function (e, t) {
      var n = cc11001100_hook("n", k.map(this, i, e), "var-init");
      return "Until" !== r.slice(-5) && (t = cc11001100_hook("t", e, "assign")), t && "string" == typeof t && (n = cc11001100_hook("n", k.filter(t, n), "assign")), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    }, "assign");
  });
  var R = cc11001100_hook("R", /[^\x20\t\r\n\f]+/g, "var-init");
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e;
  }
  function I(e) {
    cc11001100_hook("e", e, "function-parameter");
    throw e;
  }
  function W(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    try {
      e && m(i = cc11001100_hook("i", e.promise, "assign")) ? i.call(e).done(t).fail(n) : e && m(i = cc11001100_hook("i", e.then, "assign")) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  k.Callbacks = cc11001100_hook("k.Callbacks", function (r) {
    var e, n;
    r = cc11001100_hook("r", "string" == typeof r ? (e = cc11001100_hook("e", r, "assign"), n = cc11001100_hook("n", {}, "assign"), k.each(e.match(R) || [], function (e, t) {
      n[t] = cc11001100_hook("n[t]", !0, "assign");
    }), n) : k.extend({}, r), "assign");
    var i,
      t,
      o,
      a,
      s = cc11001100_hook("s", [], "var-init"),
      u = cc11001100_hook("u", [], "var-init"),
      l = cc11001100_hook("l", -1, "var-init"),
      c = function () {
        for (a = cc11001100_hook("a", a || r.once, "assign"), o = cc11001100_hook("o", i = cc11001100_hook("i", !0, "assign"), "assign"); u.length; l = cc11001100_hook("l", -1, "assign")) {
          t = cc11001100_hook("t", u.shift(), "assign");
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = cc11001100_hook("l", s.length, "assign"), t = cc11001100_hook("t", !1, "assign"));
        }
        r.memory || (t = cc11001100_hook("t", !1, "assign")), i = cc11001100_hook("i", !1, "assign"), a && (s = cc11001100_hook("s", t ? [] : "", "assign"));
      },
      f = cc11001100_hook("f", {
        add: function () {
          return s && (t && !i && (l = cc11001100_hook("l", s.length - 1, "assign"), u.push(t)), function n(e) {
            k.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function () {
          return k.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = cc11001100_hook("n", k.inArray(t, s, n), "assign"))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = cc11001100_hook("s", [], "assign")), this;
        },
        disable: function () {
          return a = cc11001100_hook("a", u = cc11001100_hook("u", [], "assign"), "assign"), s = cc11001100_hook("s", t = cc11001100_hook("t", "", "assign"), "assign"), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return a = cc11001100_hook("a", u = cc11001100_hook("u", [], "assign"), "assign"), t || i || (s = cc11001100_hook("s", t = cc11001100_hook("t", "", "assign"), "assign")), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || (t = cc11001100_hook("t", [e, (t = cc11001100_hook("t", t || [], "assign")).slice ? t.slice() : t], "assign"), u.push(t), i || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        }
      }, "var-init");
    return f;
  }, "assign"), k.extend({
    Deferred: function (e) {
      var o = cc11001100_hook("o", [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]], "var-init"),
        i = cc11001100_hook("i", "pending", "var-init"),
        a = cc11001100_hook("a", {
          state: function () {
            return i;
          },
          always: function () {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function (e) {
            return a.then(null, e);
          },
          pipe: function () {
            var i = cc11001100_hook("i", arguments, "var-init");
            return k.Deferred(function (r) {
              k.each(o, function (e, t) {
                var n = cc11001100_hook("n", m(i[t[4]]) && i[t[4]], "var-init");
                s[t[1]](function () {
                  var e = cc11001100_hook("e", n && n.apply(this, arguments), "var-init");
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = cc11001100_hook("i", null, "assign");
            }).promise();
          },
          then: function (t, n, r) {
            var u = cc11001100_hook("u", 0, "var-init");
            function l(i, o, a, s) {
              cc11001100_hook("i", i, "function-parameter");
              cc11001100_hook("o", o, "function-parameter");
              cc11001100_hook("a", a, "function-parameter");
              cc11001100_hook("s", s, "function-parameter");
              return function () {
                var n = cc11001100_hook("n", this, "var-init"),
                  r = cc11001100_hook("r", arguments, "var-init"),
                  e = function () {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = cc11001100_hook("e", a.apply(n, r), "assign")) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = cc11001100_hook("t", e && ("object" == typeof e || "function" == typeof e) && e.then, "assign"), m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = cc11001100_hook("n", void 0, "assign"), r = cc11001100_hook("r", [e], "assign")), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = cc11001100_hook("t", s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = cc11001100_hook("n", void 0, "assign"), r = cc11001100_hook("r", [e], "assign")), o.rejectWith(n, r));
                    }
                  }, "var-init");
                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = cc11001100_hook("t.stackTrace", k.Deferred.getStackHook(), "assign")), C.setTimeout(t));
              };
            }
            return k.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
            }).promise();
          },
          promise: function (e) {
            return null != e ? k.extend(e, a) : a;
          }
        }, "var-init"),
        s = cc11001100_hook("s", {}, "var-init");
      return k.each(o, function (e, t) {
        var n = cc11001100_hook("n", t[2], "var-init"),
          r = cc11001100_hook("r", t[5], "var-init");
        a[t[1]] = cc11001100_hook("a[t[1]]", n.add, "assign"), r && n.add(function () {
          i = cc11001100_hook("i", r, "assign");
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = cc11001100_hook("s[t[0]]", function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, "assign"), s[t[0] + "With"] = cc11001100_hook("s[t[0] + \"With\"]", n.fireWith, "assign");
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = cc11001100_hook("n", arguments.length, "var-init"),
        t = cc11001100_hook("t", n, "var-init"),
        r = cc11001100_hook("r", Array(t), "var-init"),
        i = cc11001100_hook("i", s.call(arguments), "var-init"),
        o = cc11001100_hook("o", k.Deferred(), "var-init"),
        a = function (t) {
          return function (e) {
            r[t] = cc11001100_hook("r[t]", this, "assign"), i[t] = cc11001100_hook("i[t]", 1 < arguments.length ? s.call(arguments) : e, "assign"), --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) W(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var $ = cc11001100_hook("$", /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/, "var-init");
  k.Deferred.exceptionHook = cc11001100_hook("k.Deferred.exceptionHook", function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, "assign"), k.readyException = cc11001100_hook("k.readyException", function (e) {
    C.setTimeout(function () {
      throw e;
    });
  }, "assign");
  var F = cc11001100_hook("F", k.Deferred(), "var-init");
  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }
  k.fn.ready = cc11001100_hook("k.fn.ready", function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, "assign"), k.extend({
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    ready: function (e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = cc11001100_hook("k.isReady", !0, "assign")) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = cc11001100_hook("k.ready.then", F.then, "assign"), "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = cc11001100_hook("s", 0, "var-init"),
        u = cc11001100_hook("u", e.length, "var-init"),
        l = cc11001100_hook("l", null == n, "var-init");
      if ("object" === w(n)) for (s in i = cc11001100_hook("i", !0, "assign"), n) _(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = cc11001100_hook("i", !0, "assign"), m(r) || (a = cc11001100_hook("a", !0, "assign")), l && (a ? (t.call(e, r), t = cc11001100_hook("t", null, "assign")) : (l = cc11001100_hook("l", t, "assign"), t = cc11001100_hook("t", function (e, t, n) {
        return l.call(k(e), n);
      }, "assign"))), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = cc11001100_hook("z", /^-ms-/, "var-init"),
    U = cc11001100_hook("U", /-([a-z])/g, "var-init");
  function X(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return t.toUpperCase();
  }
  function V(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = cc11001100_hook("this.expando", k.expando + Y.uid++, "assign");
  }
  Y.uid = cc11001100_hook("Y.uid", 1, "assign"), Y.prototype = cc11001100_hook("Y.prototype", {
    cache: function (e) {
      var t = cc11001100_hook("t", e[this.expando], "var-init");
      return t || (t = cc11001100_hook("t", {}, "assign"), G(e) && (e.nodeType ? e[this.expando] = cc11001100_hook("e[this.expando]", t, "assign") : Object.defineProperty(e, this.expando, {
        value: cc11001100_hook("value", t, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }))), t;
    },
    set: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", this.cache(e), "var-init");
      if ("string" == typeof t) i[V(t)] = cc11001100_hook("i[V(t)]", n, "assign");else for (r in t) i[V(r)] = cc11001100_hook("i[V(r)]", t[r], "assign");
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        r = cc11001100_hook("r", e[this.expando], "var-init");
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = cc11001100_hook("n", (t = cc11001100_hook("t", Array.isArray(t) ? t.map(V) : (t = cc11001100_hook("t", V(t), "assign")) in r ? [t] : t.match(R) || [], "assign")).length, "assign");
          while (n--) delete r[t[n]];
        }
        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = cc11001100_hook("e[this.expando]", void 0, "assign") : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = cc11001100_hook("t", e[this.expando], "var-init");
      return void 0 !== t && !k.isEmptyObject(t);
    }
  }, "assign");
  var Q = cc11001100_hook("Q", new Y(), "var-init"),
    J = cc11001100_hook("J", new Y(), "var-init"),
    K = cc11001100_hook("K", /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, "var-init"),
    Z = cc11001100_hook("Z", /[A-Z]/g, "var-init");
  function ee(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = cc11001100_hook("r", "data-" + t.replace(Z, "-$&").toLowerCase(), "assign"), "string" == typeof (n = cc11001100_hook("n", e.getAttribute(r), "assign"))) {
      try {
        n = cc11001100_hook("n", "true" === (i = cc11001100_hook("i", n, "assign")) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i), "assign");
      } catch (e) {}
      J.set(e, t, n);
    } else n = cc11001100_hook("n", void 0, "assign");
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function (n, e) {
      var t,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init"),
        a = cc11001100_hook("a", o && o.attributes, "var-init");
      if (void 0 === n) {
        if (this.length && (i = cc11001100_hook("i", J.get(o), "assign"), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = cc11001100_hook("t", a.length, "assign");
          while (t--) a[t] && 0 === (r = cc11001100_hook("r", a[t].name, "assign")).indexOf("data-") && (r = cc11001100_hook("r", V(r.slice(5)), "assign"), ee(o, r, i[r]));
          Q.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == typeof n ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = cc11001100_hook("t", J.get(o, n), "assign")) ? t : void 0 !== (t = cc11001100_hook("t", ee(o, n), "assign")) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = cc11001100_hook("t", (t || "fx") + "queue", "assign"), r = cc11001100_hook("r", Q.get(e, t), "assign"), n && (!r || Array.isArray(n) ? r = cc11001100_hook("r", Q.access(e, t, k.makeArray(n)), "assign") : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = cc11001100_hook("t", t || "fx", "assign");
      var n = cc11001100_hook("n", k.queue(e, t), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", n.shift(), "var-init"),
        o = cc11001100_hook("o", k._queueHooks(e, t), "var-init");
      "inprogress" === i && (i = cc11001100_hook("i", n.shift(), "assign"), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = cc11001100_hook("n", t + "queueHooks", "var-init");
      return Q.get(e, n) || Q.access(e, n, {
        empty: cc11001100_hook("empty", k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        }), "object-key-init")
      });
    }
  }), k.fn.extend({
    queue: function (t, n) {
      var e = cc11001100_hook("e", 2, "var-init");
      return "string" != typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", "fx", "assign"), e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = cc11001100_hook("e", k.queue(this, t, n), "var-init");
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
        r = cc11001100_hook("r", 1, "var-init"),
        i = cc11001100_hook("i", k.Deferred(), "var-init"),
        o = cc11001100_hook("o", this, "var-init"),
        a = cc11001100_hook("a", this.length, "var-init"),
        s = function () {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), e = cc11001100_hook("e", e || "fx", "assign");
      while (a--) (n = cc11001100_hook("n", Q.get(o[a], e + "queueHooks"), "assign")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var te = cc11001100_hook("te", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    ne = cc11001100_hook("ne", new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), "var-init"),
    re = cc11001100_hook("re", ["Top", "Right", "Bottom", "Left"], "var-init"),
    ie = cc11001100_hook("ie", E.documentElement, "var-init"),
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = cc11001100_hook("ae", {
      composed: cc11001100_hook("composed", !0, "object-key-init")
    }, "var-init");
  ie.getRootNode && (oe = cc11001100_hook("oe", function (e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  }, "assign"));
  var se = function (e, t) {
      return "none" === (e = cc11001100_hook("e", t || e, "assign")).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
    },
    ue = function (e, t, n, r) {
      var i,
        o,
        a = cc11001100_hook("a", {}, "var-init");
      for (o in t) a[o] = cc11001100_hook("a[o]", e.style[o], "assign"), e.style[o] = cc11001100_hook("e.style[o]", t[o], "assign");
      for (o in i = cc11001100_hook("i", n.apply(e, r || []), "assign"), t) e.style[o] = cc11001100_hook("e.style[o]", a[o], "assign");
      return i;
    };
  function le(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      a = cc11001100_hook("a", 20, "var-init"),
      s = cc11001100_hook("s", r ? function () {
        return r.cur();
      } : function () {
        return k.css(e, t, "");
      }, "var-init"),
      u = cc11001100_hook("u", s(), "var-init"),
      l = cc11001100_hook("l", n && n[3] || (k.cssNumber[t] ? "" : "px"), "var-init"),
      c = cc11001100_hook("c", e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t)), "var-init");
    if (c && c[3] !== l) {
      u /= cc11001100_hook("u", 2, "assign"), l = cc11001100_hook("l", l || c[3], "assign"), c = cc11001100_hook("c", +u || 1, "assign");
      while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = cc11001100_hook("o", s() / u || .5, "assign"))) <= 0 && (a = cc11001100_hook("a", 0, "assign")), c /= cc11001100_hook("c", o, "assign");
      c *= cc11001100_hook("c", 2, "assign"), k.style(e, t, c + l), n = cc11001100_hook("n", n || [], "assign");
    }
    return n && (c = cc11001100_hook("c", +c || +u || 0, "assign"), i = cc11001100_hook("i", n[1] ? c + (n[1] + 1) * n[2] : +n[2], "assign"), r && (r.unit = cc11001100_hook("r.unit", l, "assign"), r.start = cc11001100_hook("r.start", c, "assign"), r.end = cc11001100_hook("r.end", i, "assign"))), i;
  }
  var ce = cc11001100_hook("ce", {}, "var-init");
  function fe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n, r, i, o, a, s, u, l = cc11001100_hook("l", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"), f = cc11001100_hook("f", e.length, "var-init"); c < f; c++) (r = cc11001100_hook("r", e[c], "assign")).style && (n = cc11001100_hook("n", r.style.display, "assign"), t ? ("none" === n && (l[c] = cc11001100_hook("l[c]", Q.get(r, "display") || null, "assign"), l[c] || (r.style.display = cc11001100_hook("r.style.display", "", "assign"))), "" === r.style.display && se(r) && (l[c] = cc11001100_hook("l[c]", (u = cc11001100_hook("u", a = cc11001100_hook("a", o = cc11001100_hook("o", void 0, "assign"), "assign"), "assign"), a = cc11001100_hook("a", (i = cc11001100_hook("i", r, "assign")).ownerDocument, "assign"), s = cc11001100_hook("s", i.nodeName, "assign"), (u = cc11001100_hook("u", ce[s], "assign")) || (o = cc11001100_hook("o", a.body.appendChild(a.createElement(s)), "assign"), u = cc11001100_hook("u", k.css(o, "display"), "assign"), o.parentNode.removeChild(o), "none" === u && (u = cc11001100_hook("u", "block", "assign")), ce[s] = cc11001100_hook("ce[s]", u, "assign"))), "assign"))) : "none" !== n && (l[c] = cc11001100_hook("l[c]", "none", "assign"), Q.set(r, "display", n)));
    for (c = cc11001100_hook("c", 0, "assign"); c < f; c++) null != l[c] && (e[c].style.display = cc11001100_hook("e[c].style.display", l[c], "assign"));
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = cc11001100_hook("pe", /^(?:checkbox|radio)$/i, "var-init"),
    de = cc11001100_hook("de", /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, "var-init"),
    he = cc11001100_hook("he", /^$|^module$|\/(?:java|ecma)script/i, "var-init"),
    ge = cc11001100_hook("ge", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><colgroup>", "</colgroup></table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", [0, "", ""], "object-key-init")
    }, "var-init");
  function ve(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n;
    return n = cc11001100_hook("n", "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], "assign"), void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }
  function ye(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  ge.optgroup = cc11001100_hook("ge.optgroup", ge.option, "assign"), ge.tbody = cc11001100_hook("ge.tbody", ge.tfoot = cc11001100_hook("ge.tfoot", ge.colgroup = cc11001100_hook("ge.colgroup", ge.caption = cc11001100_hook("ge.caption", ge.thead, "assign"), "assign"), "assign"), "assign"), ge.th = cc11001100_hook("ge.th", ge.td, "assign");
  var me,
    xe,
    be = cc11001100_hook("be", /<|&#?\w+;/, "var-init");
  function we(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var o, a, s, u, l, c, f = cc11001100_hook("f", t.createDocumentFragment(), "var-init"), p = cc11001100_hook("p", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"), h = cc11001100_hook("h", e.length, "var-init"); d < h; d++) if ((o = cc11001100_hook("o", e[d], "assign")) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
      a = cc11001100_hook("a", a || f.appendChild(t.createElement("div")), "assign"), s = cc11001100_hook("s", (de.exec(o) || ["", ""])[1].toLowerCase(), "assign"), u = cc11001100_hook("u", ge[s] || ge._default, "assign"), a.innerHTML = cc11001100_hook("a.innerHTML", u[1] + k.htmlPrefilter(o) + u[2], "assign"), c = cc11001100_hook("c", u[0], "assign");
      while (c--) a = cc11001100_hook("a", a.lastChild, "assign");
      k.merge(p, a.childNodes), (a = cc11001100_hook("a", f.firstChild, "assign")).textContent = cc11001100_hook("(a = f.firstChild).textContent", "", "assign");
    } else p.push(t.createTextNode(o));
    f.textContent = cc11001100_hook("f.textContent", "", "assign"), d = cc11001100_hook("d", 0, "assign");
    while (o = cc11001100_hook("o", p[d++], "assign")) if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = cc11001100_hook("l", oe(o), "assign"), a = cc11001100_hook("a", ve(f.appendChild(o), "script"), "assign"), l && ye(a), n) {
      c = cc11001100_hook("c", 0, "assign");
      while (o = cc11001100_hook("o", a[c++], "assign")) he.test(o.type || "") && n.push(o);
    }
    return f;
  }
  me = cc11001100_hook("me", E.createDocumentFragment().appendChild(E.createElement("div")), "assign"), (xe = cc11001100_hook("xe", E.createElement("input"), "assign")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = cc11001100_hook("y.checkClone", me.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), me.innerHTML = cc11001100_hook("me.innerHTML", "<textarea>x</textarea>", "assign"), y.noCloneChecked = cc11001100_hook("y.noCloneChecked", !!me.cloneNode(!0).lastChild.defaultValue, "assign");
  var Te = cc11001100_hook("Te", /^key/, "var-init"),
    Ce = cc11001100_hook("Ce", /^(?:mouse|pointer|contextmenu|drag|drop)|click/, "var-init"),
    Ee = cc11001100_hook("Ee", /^([^.]*)(?:\.(.+)|)/, "var-init");
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }
  function Ae(e, t, n, r, i, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = cc11001100_hook("r", r || n, "assign"), n = cc11001100_hook("n", void 0, "assign")), t) Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = cc11001100_hook("i", n, "assign"), r = cc11001100_hook("r", n = cc11001100_hook("n", void 0, "assign"), "assign")) : null == i && ("string" == typeof n ? (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", void 0, "assign")) : (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", void 0, "assign"))), !1 === i) i = cc11001100_hook("i", Se, "assign");else if (!i) return e;
    return 1 === o && (a = cc11001100_hook("a", i, "assign"), (i = cc11001100_hook("i", function (e) {
      return k().off(e), a.apply(this, arguments);
    }, "assign")).guid = cc11001100_hook("(i = function (e) {\n  return k().off(e), a.apply(this, arguments);\n}).guid", a.guid || (a.guid = cc11001100_hook("a.guid", k.guid++, "assign")), "assign")), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }
  function De(e, i, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: cc11001100_hook("namespace", !1, "object-key-init"),
      handler: function (e) {
        var t,
          n,
          r = cc11001100_hook("r", Q.get(this, i), "var-init");
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = cc11001100_hook("r", s.call(arguments), "assign"), Q.set(this, i, r), t = cc11001100_hook("t", o(this, i), "assign"), this[i](), r !== (n = cc11001100_hook("n", Q.get(this, i), "assign")) || t ? Q.set(this, i, !1) : n = cc11001100_hook("n", {}, "assign"), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: cc11001100_hook("value", k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this), "object-key-init")
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  k.event = cc11001100_hook("k.event", {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = cc11001100_hook("v", Q.get(t), "var-init");
      if (v) {
        n.handler && (n = cc11001100_hook("n", (o = cc11001100_hook("o", n, "assign")).handler, "assign"), i = cc11001100_hook("i", o.selector, "assign")), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = cc11001100_hook("n.guid", k.guid++, "assign")), (u = cc11001100_hook("u", v.events, "assign")) || (u = cc11001100_hook("u", v.events = cc11001100_hook("v.events", {}, "assign"), "assign")), (a = cc11001100_hook("a", v.handle, "assign")) || (a = cc11001100_hook("a", v.handle = cc11001100_hook("v.handle", function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }, "assign"), "assign")), l = cc11001100_hook("l", (e = cc11001100_hook("e", (e || "").match(R) || [""], "assign")).length, "assign");
        while (l--) d = cc11001100_hook("d", g = cc11001100_hook("g", (s = cc11001100_hook("s", Ee.exec(e[l]) || [], "assign"))[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d && (f = cc11001100_hook("f", k.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (i ? f.delegateType : f.bindType) || d, "assign"), f = cc11001100_hook("f", k.event.special[d] || {}, "assign"), c = cc11001100_hook("c", k.extend({
          type: cc11001100_hook("type", d, "object-key-init"),
          origType: cc11001100_hook("origType", g, "object-key-init"),
          data: cc11001100_hook("data", r, "object-key-init"),
          handler: cc11001100_hook("handler", n, "object-key-init"),
          guid: cc11001100_hook("guid", n.guid, "object-key-init"),
          selector: cc11001100_hook("selector", i, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", i && k.expr.match.needsContext.test(i), "object-key-init"),
          namespace: cc11001100_hook("namespace", h.join("."), "object-key-init")
        }, o), "assign"), (p = cc11001100_hook("p", u[d], "assign")) || ((p = cc11001100_hook("p", u[d] = cc11001100_hook("u[d]", [], "assign"), "assign")).delegateCount = cc11001100_hook("(p = u[d] = []).delegateCount", 0, "assign"), f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = cc11001100_hook("c.handler.guid", n.guid, "assign"))), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = cc11001100_hook("k.event.global[d]", !0, "assign"));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = cc11001100_hook("v", Q.hasData(e) && Q.get(e), "var-init");
      if (v && (u = cc11001100_hook("u", v.events, "assign"))) {
        l = cc11001100_hook("l", (t = cc11001100_hook("t", (t || "").match(R) || [""], "assign")).length, "assign");
        while (l--) if (d = cc11001100_hook("d", g = cc11001100_hook("g", (s = cc11001100_hook("s", Ee.exec(t[l]) || [], "assign"))[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d) {
          f = cc11001100_hook("f", k.event.special[d] || {}, "assign"), p = cc11001100_hook("p", u[d = cc11001100_hook("d", (r ? f.delegateType : f.bindType) || d, "assign")] || [], "assign"), s = cc11001100_hook("s", s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), a = cc11001100_hook("a", o = cc11001100_hook("o", p.length, "assign"), "assign");
          while (o--) c = cc11001100_hook("c", p[o], "assign"), !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = cc11001100_hook("s", k.event.fix(e), "var-init"),
        u = cc11001100_hook("u", new Array(arguments.length), "var-init"),
        l = cc11001100_hook("l", (Q.get(this, "events") || {})[s.type] || [], "var-init"),
        c = cc11001100_hook("c", k.event.special[s.type] || {}, "var-init");
      for (u[0] = cc11001100_hook("u[0]", s, "assign"), t = cc11001100_hook("t", 1, "assign"); t < arguments.length; t++) u[t] = cc11001100_hook("u[t]", arguments[t], "assign");
      if (s.delegateTarget = cc11001100_hook("s.delegateTarget", this, "assign"), !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = cc11001100_hook("a", k.event.handlers.call(this, s, l), "assign"), t = cc11001100_hook("t", 0, "assign");
        while ((i = cc11001100_hook("i", a[t++], "assign")) && !s.isPropagationStopped()) {
          s.currentTarget = cc11001100_hook("s.currentTarget", i.elem, "assign"), n = cc11001100_hook("n", 0, "assign");
          while ((o = cc11001100_hook("o", i.handlers[n++], "assign")) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = cc11001100_hook("s.handleObj", o, "assign"), s.data = cc11001100_hook("s.data", o.data, "assign"), void 0 !== (r = cc11001100_hook("r", ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), "assign")) && !1 === (s.result = cc11001100_hook("s.result", r, "assign")) && (s.preventDefault(), s.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = cc11001100_hook("s", [], "var-init"),
        u = cc11001100_hook("u", t.delegateCount, "var-init"),
        l = cc11001100_hook("l", e.target, "var-init");
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = cc11001100_hook("l", l.parentNode || this, "assign")) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = cc11001100_hook("o", [], "assign"), a = cc11001100_hook("a", {}, "assign"), n = cc11001100_hook("n", 0, "assign"); n < u; n++) void 0 === a[i = cc11001100_hook("i", (r = cc11001100_hook("r", t[n], "assign")).selector + " ", "assign")] && (a[i] = cc11001100_hook("a[i]", r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length, "assign")), a[i] && o.push(r);
        o.length && s.push({
          elem: cc11001100_hook("elem", l, "object-key-init"),
          handlers: cc11001100_hook("handlers", o, "object-key-init")
        });
      }
      return l = cc11001100_hook("l", this, "assign"), u < t.length && s.push({
        elem: cc11001100_hook("elem", l, "object-key-init"),
        handlers: cc11001100_hook("handlers", t.slice(u), "object-key-init")
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        get: cc11001100_hook("get", m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        }, "object-key-init"),
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            value: cc11001100_hook("value", e, "object-key-init")
          });
        }
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      click: {
        setup: function (e) {
          var t = cc11001100_hook("t", this || e, "var-init");
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function (e) {
          var t = cc11001100_hook("t", this || e, "var-init");
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function (e) {
          var t = cc11001100_hook("t", e.target, "var-init");
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = cc11001100_hook("e.originalEvent.returnValue", e.result, "assign"));
        }
      }
    }
  }, "assign"), k.removeEvent = cc11001100_hook("k.removeEvent", function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, "assign"), k.Event = cc11001100_hook("k.Event", function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", e, "assign"), this.type = cc11001100_hook("this.type", e.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, "assign"), this.target = cc11001100_hook("this.target", e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, "assign"), this.currentTarget = cc11001100_hook("this.currentTarget", e.currentTarget, "assign"), this.relatedTarget = cc11001100_hook("this.relatedTarget", e.relatedTarget, "assign")) : this.type = cc11001100_hook("this.type", e, "assign"), t && k.extend(this, t), this.timeStamp = cc11001100_hook("this.timeStamp", e && e.timeStamp || Date.now(), "assign"), this[k.expando] = cc11001100_hook("this[k.expando]", !0, "assign");
  }, "assign"), k.Event.prototype = cc11001100_hook("k.Event.prototype", {
    constructor: cc11001100_hook("constructor", k.Event, "object-key-init"),
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", Se, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", Se, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", Se, "object-key-init"),
    isSimulated: cc11001100_hook("isSimulated", !1, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", ke, "assign"), e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", ke, "assign"), e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", ke, "assign"), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, "assign"), k.each({
    altKey: cc11001100_hook("altKey", !0, "object-key-init"),
    bubbles: cc11001100_hook("bubbles", !0, "object-key-init"),
    cancelable: cc11001100_hook("cancelable", !0, "object-key-init"),
    changedTouches: cc11001100_hook("changedTouches", !0, "object-key-init"),
    ctrlKey: cc11001100_hook("ctrlKey", !0, "object-key-init"),
    detail: cc11001100_hook("detail", !0, "object-key-init"),
    eventPhase: cc11001100_hook("eventPhase", !0, "object-key-init"),
    metaKey: cc11001100_hook("metaKey", !0, "object-key-init"),
    pageX: cc11001100_hook("pageX", !0, "object-key-init"),
    pageY: cc11001100_hook("pageY", !0, "object-key-init"),
    shiftKey: cc11001100_hook("shiftKey", !0, "object-key-init"),
    view: cc11001100_hook("view", !0, "object-key-init"),
    "char": cc11001100_hook("char", !0, "object-key-init"),
    code: cc11001100_hook("code", !0, "object-key-init"),
    charCode: cc11001100_hook("charCode", !0, "object-key-init"),
    key: cc11001100_hook("key", !0, "object-key-init"),
    keyCode: cc11001100_hook("keyCode", !0, "object-key-init"),
    button: cc11001100_hook("button", !0, "object-key-init"),
    buttons: cc11001100_hook("buttons", !0, "object-key-init"),
    clientX: cc11001100_hook("clientX", !0, "object-key-init"),
    clientY: cc11001100_hook("clientY", !0, "object-key-init"),
    offsetX: cc11001100_hook("offsetX", !0, "object-key-init"),
    offsetY: cc11001100_hook("offsetY", !0, "object-key-init"),
    pointerId: cc11001100_hook("pointerId", !0, "object-key-init"),
    pointerType: cc11001100_hook("pointerType", !0, "object-key-init"),
    screenX: cc11001100_hook("screenX", !0, "object-key-init"),
    screenY: cc11001100_hook("screenY", !0, "object-key-init"),
    targetTouches: cc11001100_hook("targetTouches", !0, "object-key-init"),
    toElement: cc11001100_hook("toElement", !0, "object-key-init"),
    touches: cc11001100_hook("touches", !0, "object-key-init"),
    which: function (e) {
      var t = cc11001100_hook("t", e.button, "var-init");
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (e, t) {
    k.event.special[e] = cc11001100_hook("k.event.special[e]", {
      setup: function () {
        return De(this, e, Ne), !1;
      },
      trigger: function () {
        return De(this, e), !0;
      },
      delegateType: cc11001100_hook("delegateType", t, "object-key-init")
    }, "assign");
  }), k.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init"),
    pointerenter: cc11001100_hook("pointerenter", "pointerover", "object-key-init"),
    pointerleave: cc11001100_hook("pointerleave", "pointerout", "object-key-init")
  }, function (e, i) {
    k.event.special[e] = cc11001100_hook("k.event.special[e]", {
      delegateType: cc11001100_hook("delegateType", i, "object-key-init"),
      bindType: cc11001100_hook("bindType", i, "object-key-init"),
      handle: function (e) {
        var t,
          n = cc11001100_hook("n", e.relatedTarget, "var-init"),
          r = cc11001100_hook("r", e.handleObj, "var-init");
        return n && (n === this || k.contains(this, n)) || (e.type = cc11001100_hook("e.type", r.origType, "assign"), t = cc11001100_hook("t", r.handler.apply(this, arguments), "assign"), e.type = cc11001100_hook("e.type", i, "assign")), t;
      }
    }, "assign");
  }), k.fn.extend({
    on: function (e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = cc11001100_hook("r", e.handleObj, "assign"), k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")), !1 === n && (n = cc11001100_hook("n", Se, "assign")), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = cc11001100_hook("je", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "var-init"),
    qe = cc11001100_hook("qe", /<script|<style|<link/i, "var-init"),
    Le = cc11001100_hook("Le", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    He = cc11001100_hook("He", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init");
  function Oe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }
  function Pe(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.type = cc11001100_hook("e.type", (null !== e.getAttribute("type")) + "/" + e.type, "assign"), e;
  }
  function Re(e) {
    cc11001100_hook("e", e, "function-parameter");
    return "true/" === (e.type || "").slice(0, 5) ? e.type = cc11001100_hook("e.type", e.type.slice(5), "assign") : e.removeAttribute("type"), e;
  }
  function Me(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = cc11001100_hook("o", Q.access(e), "assign"), a = cc11001100_hook("a", Q.set(t, o), "assign"), l = cc11001100_hook("l", o.events, "assign"))) for (i in delete a.handle, a.events = cc11001100_hook("a.events", {}, "assign"), l) for (n = cc11001100_hook("n", 0, "assign"), r = cc11001100_hook("r", l[i].length, "assign"); n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && (s = cc11001100_hook("s", J.access(e), "assign"), u = cc11001100_hook("u", k.extend({}, s), "assign"), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    r = cc11001100_hook("r", g.apply([], r), "assign");
    var e,
      t,
      a,
      s,
      u,
      l,
      c = cc11001100_hook("c", 0, "var-init"),
      f = cc11001100_hook("f", n.length, "var-init"),
      p = cc11001100_hook("p", f - 1, "var-init"),
      d = cc11001100_hook("d", r[0], "var-init"),
      h = cc11001100_hook("h", m(d), "var-init");
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = cc11001100_hook("t", n.eq(e), "var-init");
      h && (r[0] = cc11001100_hook("r[0]", d.call(this, e, t.html()), "assign")), Ie(t, r, i, o);
    });
    if (f && (t = cc11001100_hook("t", (e = cc11001100_hook("e", we(r, n[0].ownerDocument, !1, n, o), "assign")).firstChild, "assign"), 1 === e.childNodes.length && (e = cc11001100_hook("e", t, "assign")), t || o)) {
      for (s = cc11001100_hook("s", (a = cc11001100_hook("a", k.map(ve(e, "script"), Pe), "assign")).length, "assign"); c < f; c++) u = cc11001100_hook("u", e, "assign"), c !== p && (u = cc11001100_hook("u", k.clone(u, !0, !0), "assign"), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = cc11001100_hook("l", a[a.length - 1].ownerDocument, "assign"), k.map(a, Re), c = cc11001100_hook("c", 0, "assign"); c < s; c++) u = cc11001100_hook("u", a[c], "assign"), he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
        nonce: cc11001100_hook("nonce", u.nonce || u.getAttribute("nonce"), "object-key-init")
      }) : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", t ? k.filter(t, e) : e, "var-init"), o = cc11001100_hook("o", 0, "var-init"); null != (r = cc11001100_hook("r", i[o], "assign")); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = cc11001100_hook("c", e.cloneNode(!0), "var-init"),
        f = cc11001100_hook("f", oe(e), "var-init");
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = cc11001100_hook("a", ve(c), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", (o = cc11001100_hook("o", ve(e), "assign")).length, "assign"); r < i; r++) s = cc11001100_hook("s", o[r], "assign"), u = cc11001100_hook("u", a[r], "assign"), void 0, "input" === (l = cc11001100_hook("l", u.nodeName.toLowerCase(), "assign")) && pe.test(s.type) ? u.checked = cc11001100_hook("u.checked", s.checked, "assign") : "input" !== l && "textarea" !== l || (u.defaultValue = cc11001100_hook("u.defaultValue", s.defaultValue, "assign"));
      if (t) if (n) for (o = cc11001100_hook("o", o || ve(e), "assign"), a = cc11001100_hook("a", a || ve(c), "assign"), r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", o.length, "assign"); r < i; r++) Me(o[r], a[r]);else Me(e, c);
      return 0 < (a = cc11001100_hook("a", ve(c, "script"), "assign")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = cc11001100_hook("i", k.event.special, "var-init"), o = cc11001100_hook("o", 0, "var-init"); void 0 !== (n = cc11001100_hook("n", e[o], "assign")); o++) if (G(n)) {
        if (t = cc11001100_hook("t", n[Q.expando], "assign")) {
          if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
          n[Q.expando] = cc11001100_hook("n[Q.expando]", void 0, "assign");
        }
        n[J.expando] && (n[J.expando] = cc11001100_hook("n[J.expando]", void 0, "assign"));
      }
    }
  }), k.fn.extend({
    detach: function (e) {
      return We(this, e, !0);
    },
    remove: function (e) {
      return We(this, e);
    },
    text: function (e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = cc11001100_hook("this.textContent", e, "assign"));
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", Oe(this, e), "var-init");
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = cc11001100_hook("t", 0, "var-init"); null != (e = cc11001100_hook("e", this[t], "assign")); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = cc11001100_hook("e.textContent", "", "assign"));
      return this;
    },
    clone: function (e, t) {
      return e = cc11001100_hook("e", null != e && e, "assign"), t = cc11001100_hook("t", null == t ? e : t, "assign"), this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function (e) {
      return _(this, function (e) {
        var t = cc11001100_hook("t", this[0] || {}, "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", this.length, "var-init");
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = cc11001100_hook("e", k.htmlPrefilter(e), "assign");
          try {
            for (; n < r; n++) 1 === (t = cc11001100_hook("t", this[n] || {}, "assign")).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = cc11001100_hook("t.innerHTML", e, "assign"));
            t = cc11001100_hook("t", 0, "assign");
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = cc11001100_hook("n", [], "var-init");
      return Ie(this, arguments, function (e) {
        var t = cc11001100_hook("t", this.parentNode, "var-init");
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (e, a) {
    k.fn[e] = cc11001100_hook("k.fn[e]", function (e) {
      for (var t, n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", k(e), "var-init"), i = cc11001100_hook("i", r.length - 1, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o <= i; o++) t = cc11001100_hook("t", o === i ? this : this.clone(!0), "assign"), k(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n);
    }, "assign");
  });
  var $e = cc11001100_hook("$e", new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), "var-init"),
    Fe = function (e) {
      var t = cc11001100_hook("t", e.ownerDocument.defaultView, "var-init");
      return t && t.opener || (t = cc11001100_hook("t", C, "assign")), t.getComputedStyle(e);
    },
    Be = cc11001100_hook("Be", new RegExp(re.join("|"), "i"), "var-init");
  function _e(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      a,
      s = cc11001100_hook("s", e.style, "var-init");
    return (n = cc11001100_hook("n", n || Fe(e), "assign")) && ("" !== (a = cc11001100_hook("a", n.getPropertyValue(t) || n[t], "assign")) || oe(e) || (a = cc11001100_hook("a", k.style(e, t), "assign")), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = cc11001100_hook("r", s.width, "assign"), i = cc11001100_hook("i", s.minWidth, "assign"), o = cc11001100_hook("o", s.maxWidth, "assign"), s.minWidth = cc11001100_hook("s.minWidth", s.maxWidth = cc11001100_hook("s.maxWidth", s.width = cc11001100_hook("s.width", a, "assign"), "assign"), "assign"), a = cc11001100_hook("a", n.width, "assign"), s.width = cc11001100_hook("s.width", r, "assign"), s.minWidth = cc11001100_hook("s.minWidth", i, "assign"), s.maxWidth = cc11001100_hook("s.maxWidth", o, "assign"))), void 0 !== a ? a + "" : a;
  }
  function ze(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return {
      get: function () {
        if (!e()) return (this.get = cc11001100_hook("this.get", t, "assign")).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (u) {
        s.style.cssText = cc11001100_hook("s.style.cssText", "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", "assign"), u.style.cssText = cc11001100_hook("u.style.cssText", "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", "assign"), ie.appendChild(s).appendChild(u);
        var e = cc11001100_hook("e", C.getComputedStyle(u), "var-init");
        n = cc11001100_hook("n", "1%" !== e.top, "assign"), a = cc11001100_hook("a", 12 === t(e.marginLeft), "assign"), u.style.right = cc11001100_hook("u.style.right", "60%", "assign"), o = cc11001100_hook("o", 36 === t(e.right), "assign"), r = cc11001100_hook("r", 36 === t(e.width), "assign"), u.style.position = cc11001100_hook("u.style.position", "absolute", "assign"), i = cc11001100_hook("i", 12 === t(u.offsetWidth / 3), "assign"), ie.removeChild(s), u = cc11001100_hook("u", null, "assign");
      }
    }
    function t(e) {
      cc11001100_hook("e", e, "function-parameter");
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = cc11001100_hook("s", E.createElement("div"), "var-init"),
      u = cc11001100_hook("u", E.createElement("div"), "var-init");
    u.style && (u.style.backgroundClip = cc11001100_hook("u.style.backgroundClip", "content-box", "assign"), u.cloneNode(!0).style.backgroundClip = cc11001100_hook("u.cloneNode(!0).style.backgroundClip", "", "assign"), y.clearCloneStyle = cc11001100_hook("y.clearCloneStyle", "content-box" === u.style.backgroundClip, "assign"), k.extend(y, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), a;
      },
      scrollboxSize: function () {
        return e(), i;
      }
    }));
  }();
  var Ue = cc11001100_hook("Ue", ["Webkit", "Moz", "ms"], "var-init"),
    Xe = cc11001100_hook("Xe", E.createElement("div").style, "var-init"),
    Ve = cc11001100_hook("Ve", {}, "var-init");
  function Ge(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", k.cssProps[e] || Ve[e], "var-init");
    return t || (e in Xe ? e : Ve[e] = cc11001100_hook("Ve[e]", function (e) {
      var t = cc11001100_hook("t", e[0].toUpperCase() + e.slice(1), "var-init"),
        n = cc11001100_hook("n", Ue.length, "var-init");
      while (n--) if ((e = cc11001100_hook("e", Ue[n] + t, "assign")) in Xe) return e;
    }(e) || e, "assign"));
  }
  var Ye = cc11001100_hook("Ye", /^(none|table(?!-c[ea]).+)/, "var-init"),
    Qe = cc11001100_hook("Qe", /^--/, "var-init"),
    Je = cc11001100_hook("Je", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Ke = cc11001100_hook("Ke", {
      letterSpacing: cc11001100_hook("letterSpacing", "0", "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", "400", "object-key-init")
    }, "var-init");
  function Ze(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", ne.exec(t), "var-init");
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a = cc11001100_hook("a", "width" === t ? 1 : 0, "var-init"),
      s = cc11001100_hook("s", 0, "var-init"),
      u = cc11001100_hook("u", 0, "var-init");
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += cc11001100_hook("a", 2, "assign")) "margin" === n && (u += cc11001100_hook("u", k.css(e, n + re[a], !0, i), "assign")), r ? ("content" === n && (u -= cc11001100_hook("u", k.css(e, "padding" + re[a], !0, i), "assign")), "margin" !== n && (u -= cc11001100_hook("u", k.css(e, "border" + re[a] + "Width", !0, i), "assign"))) : (u += cc11001100_hook("u", k.css(e, "padding" + re[a], !0, i), "assign"), "padding" !== n ? u += cc11001100_hook("u", k.css(e, "border" + re[a] + "Width", !0, i), "assign") : s += cc11001100_hook("s", k.css(e, "border" + re[a] + "Width", !0, i), "assign"));
    return !r && 0 <= o && (u += cc11001100_hook("u", Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0, "assign")), u;
  }
  function tt(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", Fe(e), "var-init"),
      i = cc11001100_hook("i", (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), "var-init"),
      o = cc11001100_hook("o", i, "var-init"),
      a = cc11001100_hook("a", _e(e, t, r), "var-init"),
      s = cc11001100_hook("s", "offset" + t[0].toUpperCase() + t.slice(1), "var-init");
    if ($e.test(a)) {
      if (!n) return a;
      a = cc11001100_hook("a", "auto", "assign");
    }
    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = cc11001100_hook("i", "border-box" === k.css(e, "boxSizing", !1, r), "assign"), (o = cc11001100_hook("o", s in e, "assign")) && (a = cc11001100_hook("a", e[s], "assign"))), (a = cc11001100_hook("a", parseFloat(a) || 0, "assign")) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function nt(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = cc11001100_hook("n", _e(e, "opacity"), "var-init");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: cc11001100_hook("animationIterationCount", !0, "object-key-init"),
      columnCount: cc11001100_hook("columnCount", !0, "object-key-init"),
      fillOpacity: cc11001100_hook("fillOpacity", !0, "object-key-init"),
      flexGrow: cc11001100_hook("flexGrow", !0, "object-key-init"),
      flexShrink: cc11001100_hook("flexShrink", !0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", !0, "object-key-init"),
      gridArea: cc11001100_hook("gridArea", !0, "object-key-init"),
      gridColumn: cc11001100_hook("gridColumn", !0, "object-key-init"),
      gridColumnEnd: cc11001100_hook("gridColumnEnd", !0, "object-key-init"),
      gridColumnStart: cc11001100_hook("gridColumnStart", !0, "object-key-init"),
      gridRow: cc11001100_hook("gridRow", !0, "object-key-init"),
      gridRowEnd: cc11001100_hook("gridRowEnd", !0, "object-key-init"),
      gridRowStart: cc11001100_hook("gridRowStart", !0, "object-key-init"),
      lineHeight: cc11001100_hook("lineHeight", !0, "object-key-init"),
      opacity: cc11001100_hook("opacity", !0, "object-key-init"),
      order: cc11001100_hook("order", !0, "object-key-init"),
      orphans: cc11001100_hook("orphans", !0, "object-key-init"),
      widows: cc11001100_hook("widows", !0, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", !0, "object-key-init"),
      zoom: cc11001100_hook("zoom", !0, "object-key-init")
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = cc11001100_hook("s", V(t), "var-init"),
          u = cc11001100_hook("u", Qe.test(t), "var-init"),
          l = cc11001100_hook("l", e.style, "var-init");
        if (u || (t = cc11001100_hook("t", Ge(s), "assign")), a = cc11001100_hook("a", k.cssHooks[t] || k.cssHooks[s], "assign"), void 0 === n) return a && "get" in a && void 0 !== (i = cc11001100_hook("i", a.get(e, !1, r), "assign")) ? i : l[t];
        "string" === (o = cc11001100_hook("o", typeof n, "assign")) && (i = cc11001100_hook("i", ne.exec(n), "assign")) && i[1] && (n = cc11001100_hook("n", le(e, t, i), "assign"), o = cc11001100_hook("o", "number", "assign")), null != n && n == n && ("number" !== o || u || (n += cc11001100_hook("n", i && i[3] || (k.cssNumber[s] ? "" : "px"), "assign")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = cc11001100_hook("l[t]", "inherit", "assign")), a && "set" in a && void 0 === (n = cc11001100_hook("n", a.set(e, n, r), "assign")) || (u ? l.setProperty(t, n) : l[t] = cc11001100_hook("l[t]", n, "assign")));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = cc11001100_hook("s", V(t), "var-init");
      return Qe.test(t) || (t = cc11001100_hook("t", Ge(s), "assign")), (a = cc11001100_hook("a", k.cssHooks[t] || k.cssHooks[s], "assign")) && "get" in a && (i = cc11001100_hook("i", a.get(e, !0, n), "assign")), void 0 === i && (i = cc11001100_hook("i", _e(e, t, r), "assign")), "normal" === i && t in Ke && (i = cc11001100_hook("i", Ke[t], "assign")), "" === n || n ? (o = cc11001100_hook("o", parseFloat(i), "assign"), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = cc11001100_hook("k.cssHooks[u]", {
      get: function (e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
          i = cc11001100_hook("i", Fe(e), "var-init"),
          o = cc11001100_hook("o", !y.scrollboxSize() && "absolute" === i.position, "var-init"),
          a = cc11001100_hook("a", (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), "var-init"),
          s = cc11001100_hook("s", n ? et(e, u, n, a, i) : 0, "var-init");
        return a && o && (s -= cc11001100_hook("s", Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5), "assign")), s && (r = cc11001100_hook("r", ne.exec(t), "assign")) && "px" !== (r[3] || "px") && (e.style[u] = cc11001100_hook("e.style[u]", t, "assign"), t = cc11001100_hook("t", k.css(e, u), "assign")), Ze(0, t, s);
      }
    }, "assign");
  }), k.cssHooks.marginLeft = cc11001100_hook("k.cssHooks.marginLeft", ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: cc11001100_hook("marginLeft", 0, "object-key-init")
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), "assign"), k.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (i, o) {
    k.cssHooks[i + o] = cc11001100_hook("k.cssHooks[i + o]", {
      expand: function (e) {
        for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", {}, "var-init"), r = cc11001100_hook("r", "string" == typeof e ? e.split(" ") : [e], "var-init"); t < 4; t++) n[i + re[t] + o] = cc11001100_hook("n[i + re[t] + o]", r[t] || r[t - 2] || r[0], "assign");
        return n;
      }
    }, "assign"), "margin" !== i && (k.cssHooks[i + o].set = cc11001100_hook("k.cssHooks[i + o].set", Ze, "assign"));
  }), k.fn.extend({
    css: function (e, t) {
      return _(this, function (e, t, n) {
        var r,
          i,
          o = cc11001100_hook("o", {}, "var-init"),
          a = cc11001100_hook("a", 0, "var-init");
        if (Array.isArray(t)) {
          for (r = cc11001100_hook("r", Fe(e), "assign"), i = cc11001100_hook("i", t.length, "assign"); a < i; a++) o[t[a]] = cc11001100_hook("o[t[a]]", k.css(e, t[a], !1, r), "assign");
          return o;
        }
        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = cc11001100_hook("k.Tween", nt, "assign")).prototype = cc11001100_hook("(k.Tween = nt).prototype", {
    constructor: cc11001100_hook("constructor", nt, "object-key-init"),
    init: function (e, t, n, r, i, o) {
      this.elem = cc11001100_hook("this.elem", e, "assign"), this.prop = cc11001100_hook("this.prop", n, "assign"), this.easing = cc11001100_hook("this.easing", i || k.easing._default, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", r, "assign"), this.unit = cc11001100_hook("this.unit", o || (k.cssNumber[n] ? "" : "px"), "assign");
    },
    cur: function () {
      var e = cc11001100_hook("e", nt.propHooks[this.prop], "var-init");
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = cc11001100_hook("n", nt.propHooks[this.prop], "var-init");
      return this.options.duration ? this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration), "assign"), "assign") : this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", e, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * t + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }, "assign")).init.prototype = cc11001100_hook("((k.Tween = nt).prototype = {\n  constructor: nt,\n  init: function (e, t, n, r, i, o) {\n    this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? \"\" : \"px\");\n  },\n  cur: function () {\n    var e = nt.propHooks[this.prop];\n    return e && e.get ? e.get(this) : nt.propHooks._default.get(this);\n  },\n  run: function (e) {\n    var t,\n      n = nt.propHooks[this.prop];\n    return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;\n  }\n}).init.prototype", nt.prototype, "assign"), (nt.propHooks = cc11001100_hook("nt.propHooks", {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = cc11001100_hook("t", k.css(e.elem, e.prop, ""), "assign")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign") : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, "assign")).scrollTop = cc11001100_hook("(nt.propHooks = {\n  _default: {\n    get: function (e) {\n      var t;\n      return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, \"\")) && \"auto\" !== t ? t : 0;\n    },\n    set: function (e) {\n      k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);\n    }\n  }\n}).scrollTop", nt.propHooks.scrollLeft = cc11001100_hook("nt.propHooks.scrollLeft", {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign"));
    }
  }, "assign"), "assign"), k.easing = cc11001100_hook("k.easing", {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: cc11001100_hook("_default", "swing", "object-key-init")
  }, "assign"), k.fx = cc11001100_hook("k.fx", nt.prototype.init, "assign"), k.fx.step = cc11001100_hook("k.fx.step", {}, "assign");
  var rt,
    it,
    ot,
    at,
    st = cc11001100_hook("st", /^(?:toggle|show|hide)$/, "var-init"),
    ut = cc11001100_hook("ut", /queueHooks$/, "var-init");
  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }
  function ct() {
    return C.setTimeout(function () {
      rt = cc11001100_hook("rt", void 0, "assign");
    }), rt = cc11001100_hook("rt", Date.now(), "assign");
  }
  function ft(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", 0, "var-init"),
      i = cc11001100_hook("i", {
        height: cc11001100_hook("height", e, "object-key-init")
      }, "var-init");
    for (t = cc11001100_hook("t", t ? 1 : 0, "assign"); r < 4; r += cc11001100_hook("r", 2 - t, "assign")) i["margin" + (n = cc11001100_hook("n", re[r], "assign"))] = cc11001100_hook("i[\"margin\" + (n = re[r])]", i["padding" + n] = cc11001100_hook("i[\"padding\" + n]", e, "assign"), "assign");
    return t && (i.opacity = cc11001100_hook("i.opacity", i.width = cc11001100_hook("i.width", e, "assign"), "assign")), i;
  }
  function pt(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", (dt.tweeners[t] || []).concat(dt.tweeners["*"]), "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", i.length, "var-init"); o < a; o++) if (r = cc11001100_hook("r", i[o].call(n, t, e), "assign")) return r;
  }
  function dt(o, e, t) {
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      a,
      r = cc11001100_hook("r", 0, "var-init"),
      i = cc11001100_hook("i", dt.prefilters.length, "var-init"),
      s = cc11001100_hook("s", k.Deferred().always(function () {
        delete u.elem;
      }), "var-init"),
      u = function () {
        if (a) return !1;
        for (var e = cc11001100_hook("e", rt || ct(), "var-init"), t = cc11001100_hook("t", Math.max(0, l.startTime + l.duration - e), "var-init"), n = cc11001100_hook("n", 1 - (t / l.duration || 0), "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", l.tweens.length, "var-init"); r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = cc11001100_hook("l", s.promise({
        elem: cc11001100_hook("elem", o, "object-key-init"),
        props: cc11001100_hook("props", k.extend({}, e), "object-key-init"),
        opts: cc11001100_hook("opts", k.extend(!0, {
          specialEasing: {},
          easing: cc11001100_hook("easing", k.easing._default, "object-key-init")
        }, t), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", e, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", t, "object-key-init"),
        startTime: cc11001100_hook("startTime", rt || ct(), "object-key-init"),
        duration: cc11001100_hook("duration", t.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (e, t) {
          var n = cc11001100_hook("n", k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing), "var-init");
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = cc11001100_hook("t", 0, "var-init"),
            n = cc11001100_hook("n", e ? l.tweens.length : 0, "var-init");
          if (a) return this;
          for (a = cc11001100_hook("a", !0, "assign"); t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }), "var-init"),
      c = cc11001100_hook("c", l.props, "var-init");
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = cc11001100_hook("i", t[r = cc11001100_hook("r", V(n), "assign")], "assign"), o = cc11001100_hook("o", e[n], "assign"), Array.isArray(o) && (i = cc11001100_hook("i", o[1], "assign"), o = cc11001100_hook("o", e[n] = cc11001100_hook("e[n]", o[0], "assign"), "assign")), n !== r && (e[r] = cc11001100_hook("e[r]", o, "assign"), delete e[n]), (a = cc11001100_hook("a", k.cssHooks[r], "assign")) && ("expand" in a)) for (n in o = cc11001100_hook("o", a.expand(o), "assign"), delete e[r], o) (n in e) || (e[n] = cc11001100_hook("e[n]", o[n], "assign"), t[n] = cc11001100_hook("t[n]", i, "assign"));else t[r] = cc11001100_hook("t[r]", i, "assign");
    }(c, l.opts.specialEasing); r < i; r++) if (n = cc11001100_hook("n", dt.prefilters[r].call(l, o, c, l.opts), "assign")) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = cc11001100_hook("k._queueHooks(l.elem, l.opts.queue).stop", n.stop.bind(n), "assign")), n;
    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: cc11001100_hook("elem", o, "object-key-init"),
      anim: cc11001100_hook("anim", l, "object-key-init"),
      queue: cc11001100_hook("queue", l.opts.queue, "object-key-init")
    })), l;
  }
  k.Animation = cc11001100_hook("k.Animation", k.extend(dt, {
    tweeners: {
      "*": cc11001100_hook("*", [function (e, t) {
        var n = cc11001100_hook("n", this.createTween(e, t), "var-init");
        return le(n.elem, e, ne.exec(t), n), n;
      }], "object-key-init")
    },
    tweener: function (e, t) {
      m(e) ? (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", ["*"], "assign")) : e = cc11001100_hook("e", e.match(R), "assign");
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r++) n = cc11001100_hook("n", e[r], "assign"), dt.tweeners[n] = cc11001100_hook("dt.tweeners[n]", dt.tweeners[n] || [], "assign"), dt.tweeners[n].unshift(t);
    },
    prefilters: cc11001100_hook("prefilters", [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = cc11001100_hook("f", "width" in t || "height" in t, "var-init"),
        p = cc11001100_hook("p", this, "var-init"),
        d = cc11001100_hook("d", {}, "var-init"),
        h = cc11001100_hook("h", e.style, "var-init"),
        g = cc11001100_hook("g", e.nodeType && se(e), "var-init"),
        v = cc11001100_hook("v", Q.get(e, "fxshow"), "var-init");
      for (r in n.queue || (null == (a = cc11001100_hook("a", k._queueHooks(e, "fx"), "assign")).unqueued && (a.unqueued = cc11001100_hook("a.unqueued", 0, "assign"), s = cc11001100_hook("s", a.empty.fire, "assign"), a.empty.fire = cc11001100_hook("a.empty.fire", function () {
        a.unqueued || s();
      }, "assign")), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = cc11001100_hook("i", t[r], "assign"), st.test(i)) {
        if (delete t[r], o = cc11001100_hook("o", o || "toggle" === i, "assign"), i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = cc11001100_hook("g", !0, "assign");
        }
        d[r] = cc11001100_hook("d[r]", v && v[r] || k.style(e, r), "assign");
      }
      if ((u = cc11001100_hook("u", !k.isEmptyObject(t), "assign")) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = cc11001100_hook("n.overflow", [h.overflow, h.overflowX, h.overflowY], "assign"), null == (l = cc11001100_hook("l", v && v.display, "assign")) && (l = cc11001100_hook("l", Q.get(e, "display"), "assign")), "none" === (c = cc11001100_hook("c", k.css(e, "display"), "assign")) && (l ? c = cc11001100_hook("c", l, "assign") : (fe([e], !0), l = cc11001100_hook("l", e.style.display || l, "assign"), c = cc11001100_hook("c", k.css(e, "display"), "assign"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = cc11001100_hook("h.display", l, "assign");
      }), null == l && (c = cc11001100_hook("c", h.display, "assign"), l = cc11001100_hook("l", "none" === c ? "" : c, "assign"))), h.display = cc11001100_hook("h.display", "inline-block", "assign"))), n.overflow && (h.overflow = cc11001100_hook("h.overflow", "hidden", "assign"), p.always(function () {
        h.overflow = cc11001100_hook("h.overflow", n.overflow[0], "assign"), h.overflowX = cc11001100_hook("h.overflowX", n.overflow[1], "assign"), h.overflowY = cc11001100_hook("h.overflowY", n.overflow[2], "assign");
      })), u = cc11001100_hook("u", !1, "assign"), d) u || (v ? "hidden" in v && (g = cc11001100_hook("g", v.hidden, "assign")) : v = cc11001100_hook("v", Q.access(e, "fxshow", {
        display: cc11001100_hook("display", l, "object-key-init")
      }), "assign"), o && (v.hidden = cc11001100_hook("v.hidden", !g, "assign")), g && fe([e], !0), p.done(function () {
        for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]);
      })), u = cc11001100_hook("u", pt(g ? v[r] : 0, r, p), "assign"), r in v || (v[r] = cc11001100_hook("v[r]", u.start, "assign"), g && (u.end = cc11001100_hook("u.end", u.start, "assign"), u.start = cc11001100_hook("u.start", 0, "assign")));
    }], "object-key-init"),
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), "assign"), k.speed = cc11001100_hook("k.speed", function (e, t, n) {
    var r = cc11001100_hook("r", e && "object" == typeof e ? k.extend({}, e) : {
      complete: cc11001100_hook("complete", n || !n && t || m(e) && e, "object-key-init"),
      duration: cc11001100_hook("duration", e, "object-key-init"),
      easing: cc11001100_hook("easing", n && t || t && !m(t) && t, "object-key-init")
    }, "var-init");
    return k.fx.off ? r.duration = cc11001100_hook("r.duration", 0, "assign") : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = cc11001100_hook("r.duration", k.fx.speeds[r.duration], "assign") : r.duration = cc11001100_hook("r.duration", k.fx.speeds._default, "assign")), null != r.queue && !0 !== r.queue || (r.queue = cc11001100_hook("r.queue", "fx", "assign")), r.old = cc11001100_hook("r.old", r.complete, "assign"), r.complete = cc11001100_hook("r.complete", function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, "assign"), r;
  }, "assign"), k.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", t, "object-key-init")
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = cc11001100_hook("i", k.isEmptyObject(t), "var-init"),
        o = cc11001100_hook("o", k.speed(e, n, r), "var-init"),
        a = function () {
          var e = cc11001100_hook("e", dt(this, k.extend({}, t), o), "var-init");
          (i || Q.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = cc11001100_hook("a.finish", a, "assign"), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = cc11001100_hook("t", e.stop, "var-init");
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = cc11001100_hook("o", e, "assign"), e = cc11001100_hook("e", i, "assign"), i = cc11001100_hook("i", void 0, "assign")), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = cc11001100_hook("e", !0, "var-init"),
          t = cc11001100_hook("t", null != i && i + "queueHooks", "var-init"),
          n = cc11001100_hook("n", k.timers, "var-init"),
          r = cc11001100_hook("r", Q.get(this), "var-init");
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
        for (t = cc11001100_hook("t", n.length, "assign"); t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = cc11001100_hook("e", !1, "assign"), n.splice(t, 1));
        !e && o || k.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = cc11001100_hook("a", a || "fx", "assign")), this.each(function () {
        var e,
          t = cc11001100_hook("t", Q.get(this), "var-init"),
          n = cc11001100_hook("n", t[a + "queue"], "var-init"),
          r = cc11001100_hook("r", t[a + "queueHooks"], "var-init"),
          i = cc11001100_hook("i", k.timers, "var-init"),
          o = cc11001100_hook("o", n ? n.length : 0, "var-init");
        for (t.finish = cc11001100_hook("t.finish", !0, "assign"), k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = cc11001100_hook("e", i.length, "assign"); e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = cc11001100_hook("e", 0, "assign"); e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = cc11001100_hook("i", k.fn[r], "var-init");
    k.fn[r] = cc11001100_hook("k.fn[r]", function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    }, "assign");
  }), k.each({
    slideDown: cc11001100_hook("slideDown", ft("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", ft("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", ft("toggle"), "object-key-init"),
    fadeIn: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    fadeOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    fadeToggle: {
      opacity: cc11001100_hook("opacity", "toggle", "object-key-init")
    }
  }, function (e, r) {
    k.fn[e] = cc11001100_hook("k.fn[e]", function (e, t, n) {
      return this.animate(r, e, t, n);
    }, "assign");
  }), k.timers = cc11001100_hook("k.timers", [], "assign"), k.fx.tick = cc11001100_hook("k.fx.tick", function () {
    var e,
      t = cc11001100_hook("t", 0, "var-init"),
      n = cc11001100_hook("n", k.timers, "var-init");
    for (rt = cc11001100_hook("rt", Date.now(), "assign"); t < n.length; t++) (e = cc11001100_hook("e", n[t], "assign"))() || n[t] !== e || n.splice(t--, 1);
    n.length || k.fx.stop(), rt = cc11001100_hook("rt", void 0, "assign");
  }, "assign"), k.fx.timer = cc11001100_hook("k.fx.timer", function (e) {
    k.timers.push(e), k.fx.start();
  }, "assign"), k.fx.interval = cc11001100_hook("k.fx.interval", 13, "assign"), k.fx.start = cc11001100_hook("k.fx.start", function () {
    it || (it = cc11001100_hook("it", !0, "assign"), lt());
  }, "assign"), k.fx.stop = cc11001100_hook("k.fx.stop", function () {
    it = cc11001100_hook("it", null, "assign");
  }, "assign"), k.fx.speeds = cc11001100_hook("k.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), k.fn.delay = cc11001100_hook("k.fn.delay", function (r, e) {
    return r = cc11001100_hook("r", k.fx && k.fx.speeds[r] || r, "assign"), e = cc11001100_hook("e", e || "fx", "assign"), this.queue(e, function (e, t) {
      var n = cc11001100_hook("n", C.setTimeout(e, r), "var-init");
      t.stop = cc11001100_hook("t.stop", function () {
        C.clearTimeout(n);
      }, "assign");
    });
  }, "assign"), ot = cc11001100_hook("ot", E.createElement("input"), "assign"), at = cc11001100_hook("at", E.createElement("select").appendChild(E.createElement("option")), "assign"), ot.type = cc11001100_hook("ot.type", "checkbox", "assign"), y.checkOn = cc11001100_hook("y.checkOn", "" !== ot.value, "assign"), y.optSelected = cc11001100_hook("y.optSelected", at.selected, "assign"), (ot = cc11001100_hook("ot", E.createElement("input"), "assign")).value = cc11001100_hook("(ot = E.createElement(\"input\")).value", "t", "assign"), ot.type = cc11001100_hook("ot.type", "radio", "assign"), y.radioValue = cc11001100_hook("y.radioValue", "t" === ot.value, "assign");
  var ht,
    gt = cc11001100_hook("gt", k.expr.attrHandle, "var-init");
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = cc11001100_hook("i", k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0), "assign")), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = cc11001100_hook("r", i.set(e, n, t), "assign")) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = cc11001100_hook("r", i.get(e, t), "assign")) ? r : null == (r = cc11001100_hook("r", k.find.attr(e, t), "assign")) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = cc11001100_hook("n", e.value, "var-init");
            return e.setAttribute("type", t), n && (e.value = cc11001100_hook("e.value", n, "assign")), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", t && t.match(R), "var-init");
      if (i && 1 === e.nodeType) while (n = cc11001100_hook("n", i[r++], "assign")) e.removeAttribute(n);
    }
  }), ht = cc11001100_hook("ht", {
    set: function (e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, "assign"), k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = cc11001100_hook("a", gt[t] || k.find.attr, "var-init");
    gt[t] = cc11001100_hook("gt[t]", function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", t.toLowerCase(), "var-init");
      return n || (i = cc11001100_hook("i", gt[o], "assign"), gt[o] = cc11001100_hook("gt[o]", r, "assign"), r = cc11001100_hook("r", null != a(e, t, n) ? o : null, "assign"), gt[o] = cc11001100_hook("gt[o]", i, "assign")), r;
    }, "assign");
  });
  var vt = cc11001100_hook("vt", /^(?:input|select|textarea|button)$/i, "var-init"),
    yt = cc11001100_hook("yt", /^(?:a|area)$/i, "var-init");
  function mt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function bt(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function (e, t, n) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init");
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = cc11001100_hook("t", k.propFix[t] || t, "assign"), i = cc11001100_hook("i", k.propHooks[t], "assign")), void 0 !== n ? i && "set" in i && void 0 !== (r = cc11001100_hook("r", i.set(e, n, t), "assign")) ? r : e[t] = cc11001100_hook("e[t]", n, "assign") : i && "get" in i && null !== (r = cc11001100_hook("r", i.get(e, t), "assign")) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = cc11001100_hook("t", k.find.attr(e, "tabindex"), "var-init");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    }
  }), y.optSelected || (k.propHooks.selected = cc11001100_hook("k.propHooks.selected", {
    get: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }, "assign")), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = cc11001100_hook("k.propFix[this.toLowerCase()]", this, "assign");
  }), k.fn.extend({
    addClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", 0, "var-init");
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = cc11001100_hook("e", bt(t), "assign")).length) while (n = cc11001100_hook("n", this[u++], "assign")) if (i = cc11001100_hook("i", xt(n), "assign"), r = cc11001100_hook("r", 1 === n.nodeType && " " + mt(i) + " ", "assign")) {
        a = cc11001100_hook("a", 0, "assign");
        while (o = cc11001100_hook("o", e[a++], "assign")) r.indexOf(" " + o + " ") < 0 && (r += cc11001100_hook("r", o + " ", "assign"));
        i !== (s = cc11001100_hook("s", mt(r), "assign")) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", 0, "var-init");
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = cc11001100_hook("e", bt(t), "assign")).length) while (n = cc11001100_hook("n", this[u++], "assign")) if (i = cc11001100_hook("i", xt(n), "assign"), r = cc11001100_hook("r", 1 === n.nodeType && " " + mt(i) + " ", "assign")) {
        a = cc11001100_hook("a", 0, "assign");
        while (o = cc11001100_hook("o", e[a++], "assign")) while (-1 < r.indexOf(" " + o + " ")) r = cc11001100_hook("r", r.replace(" " + o + " ", " "), "assign");
        i !== (s = cc11001100_hook("s", mt(r), "assign")) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (i, t) {
      var o = cc11001100_hook("o", typeof i, "var-init"),
        a = cc11001100_hook("a", "string" === o || Array.isArray(i), "var-init");
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = cc11001100_hook("t", 0, "assign"), n = cc11001100_hook("n", k(this), "assign"), r = cc11001100_hook("r", bt(i), "assign");
          while (e = cc11001100_hook("e", r[t++], "assign")) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== i && "boolean" !== o || ((e = cc11001100_hook("e", xt(this), "assign")) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
        n,
        r = cc11001100_hook("r", 0, "var-init");
      t = cc11001100_hook("t", " " + e + " ", "assign");
      while (n = cc11001100_hook("n", this[r++], "assign")) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var wt = cc11001100_hook("wt", /\r/g, "var-init");
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = cc11001100_hook("t", this[0], "var-init");
      return arguments.length ? (i = cc11001100_hook("i", m(n), "assign"), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = cc11001100_hook("t", i ? n.call(this, e, k(this).val()) : n, "assign")) ? t = cc11001100_hook("t", "", "assign") : "number" == typeof t ? t += cc11001100_hook("t", "", "assign") : Array.isArray(t) && (t = cc11001100_hook("t", k.map(t, function (e) {
          return null == e ? "" : e + "";
        }), "assign")), (r = cc11001100_hook("r", k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()], "assign")) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = cc11001100_hook("this.value", t, "assign")));
      })) : t ? (r = cc11001100_hook("r", k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()], "assign")) && "get" in r && void 0 !== (e = cc11001100_hook("e", r.get(t, "value"), "assign")) ? e : "string" == typeof (e = cc11001100_hook("e", t.value, "assign")) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = cc11001100_hook("t", k.find.attr(e, "value"), "var-init");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
            n,
            r,
            i = cc11001100_hook("i", e.options, "var-init"),
            o = cc11001100_hook("o", e.selectedIndex, "var-init"),
            a = cc11001100_hook("a", "select-one" === e.type, "var-init"),
            s = cc11001100_hook("s", a ? null : [], "var-init"),
            u = cc11001100_hook("u", a ? o + 1 : i.length, "var-init");
          for (r = cc11001100_hook("r", o < 0 ? u : a ? o : 0, "assign"); r < u; r++) if (((n = cc11001100_hook("n", i[r], "assign")).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = cc11001100_hook("t", k(n).val(), "assign"), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          var n,
            r,
            i = cc11001100_hook("i", e.options, "var-init"),
            o = cc11001100_hook("o", k.makeArray(t), "var-init"),
            a = cc11001100_hook("a", i.length, "var-init");
          while (a--) ((r = cc11001100_hook("r", i[a], "assign")).selected = cc11001100_hook("(r = i[a]).selected", -1 < k.inArray(k.valHooks.option.get(r), o), "assign")) && (n = cc11001100_hook("n", !0, "assign"));
          return n || (e.selectedIndex = cc11001100_hook("e.selectedIndex", -1, "assign")), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = cc11001100_hook("k.valHooks[this]", {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = cc11001100_hook("e.checked", -1 < k.inArray(k(e).val(), t), "assign");
      }
    }, "assign"), y.checkOn || (k.valHooks[this].get = cc11001100_hook("k.valHooks[this].get", function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    }, "assign"));
  }), y.focusin = cc11001100_hook("y.focusin", "onfocusin" in C, "assign");
  var Tt = cc11001100_hook("Tt", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    Ct = function (e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = cc11001100_hook("p", [n || E], "var-init"),
        d = cc11001100_hook("d", v.call(e, "type") ? e.type : e, "var-init"),
        h = cc11001100_hook("h", v.call(e, "namespace") ? e.namespace.split(".") : [], "var-init");
      if (o = cc11001100_hook("o", f = cc11001100_hook("f", a = cc11001100_hook("a", n = cc11001100_hook("n", n || E, "assign"), "assign"), "assign"), "assign"), 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = cc11001100_hook("d", (h = cc11001100_hook("h", d.split("."), "assign")).shift(), "assign"), h.sort()), u = cc11001100_hook("u", d.indexOf(":") < 0 && "on" + d, "assign"), (e = cc11001100_hook("e", e[k.expando] ? e : new k.Event(d, "object" == typeof e && e), "assign")).isTrigger = cc11001100_hook("(e = e[k.expando] ? e : new k.Event(d, \"object\" == typeof e && e)).isTrigger", r ? 2 : 3, "assign"), e.namespace = cc11001100_hook("e.namespace", h.join("."), "assign"), e.rnamespace = cc11001100_hook("e.rnamespace", e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), e.result = cc11001100_hook("e.result", void 0, "assign"), e.target || (e.target = cc11001100_hook("e.target", n, "assign")), t = cc11001100_hook("t", null == t ? [e] : k.makeArray(t, [e]), "assign"), c = cc11001100_hook("c", k.event.special[d] || {}, "assign"), r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = cc11001100_hook("s", c.delegateType || d, "assign"), Tt.test(s + d) || (o = cc11001100_hook("o", o.parentNode, "assign")); o; o = cc11001100_hook("o", o.parentNode, "assign")) p.push(o), a = cc11001100_hook("a", o, "assign");
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = cc11001100_hook("i", 0, "assign");
        while ((o = cc11001100_hook("o", p[i++], "assign")) && !e.isPropagationStopped()) f = cc11001100_hook("f", o, "assign"), e.type = cc11001100_hook("e.type", 1 < i ? s : c.bindType || d, "assign"), (l = cc11001100_hook("l", (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle"), "assign")) && l.apply(o, t), (l = cc11001100_hook("l", u && o[u], "assign")) && l.apply && G(o) && (e.result = cc11001100_hook("e.result", l.apply(o, t), "assign"), !1 === e.result && e.preventDefault());
        return e.type = cc11001100_hook("e.type", d, "assign"), r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = cc11001100_hook("a", n[u], "assign")) && (n[u] = cc11001100_hook("n[u]", null, "assign")), k.event.triggered = cc11001100_hook("k.event.triggered", d, "assign"), e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = cc11001100_hook("k.event.triggered", void 0, "assign"), a && (n[u] = cc11001100_hook("n[u]", a, "assign"))), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = cc11001100_hook("r", k.extend(new k.Event(), n, {
        type: cc11001100_hook("type", e, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init")
      }), "var-init");
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = cc11001100_hook("n", this[0], "var-init");
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (n, r) {
    var i = function (e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };
    k.event.special[r] = cc11001100_hook("k.event.special[r]", {
      setup: function () {
        var e = cc11001100_hook("e", this.ownerDocument || this, "var-init"),
          t = cc11001100_hook("t", Q.access(e, r), "var-init");
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function () {
        var e = cc11001100_hook("e", this.ownerDocument || this, "var-init"),
          t = cc11001100_hook("t", Q.access(e, r) - 1, "var-init");
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    }, "assign");
  });
  var Et = cc11001100_hook("Et", C.location, "var-init"),
    kt = cc11001100_hook("kt", Date.now(), "var-init"),
    St = cc11001100_hook("St", /\?/, "var-init");
  k.parseXML = cc11001100_hook("k.parseXML", function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = cc11001100_hook("t", new C.DOMParser().parseFromString(e, "text/xml"), "assign");
    } catch (e) {
      t = cc11001100_hook("t", void 0, "assign");
    }
    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  }, "assign");
  var Nt = cc11001100_hook("Nt", /\[\]$/, "var-init"),
    At = cc11001100_hook("At", /\r?\n/g, "var-init"),
    Dt = cc11001100_hook("Dt", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    jt = cc11001100_hook("jt", /^(?:input|select|textarea|keygen)/i, "var-init");
  function qt(n, e, r, i) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  k.param = cc11001100_hook("k.param", function (e, t) {
    var n,
      r = cc11001100_hook("r", [], "var-init"),
      i = function (e, t) {
        var n = cc11001100_hook("n", m(t) ? t() : t, "var-init");
        r[r.length] = cc11001100_hook("r[r.length]", encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n), "assign");
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }, "assign"), k.fn.extend({
    serialize: function () {
      return k.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", k.prop(this, "elements"), "var-init");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = cc11001100_hook("e", this.type, "var-init");
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = cc11001100_hook("n", k(this).val(), "var-init");
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: cc11001100_hook("name", t.name, "object-key-init"),
            value: cc11001100_hook("value", e.replace(At, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", t.name, "object-key-init"),
          value: cc11001100_hook("value", n.replace(At, "\r\n"), "object-key-init")
        };
      }).get();
    }
  });
  var Lt = cc11001100_hook("Lt", / /g, "var-init"),
    Ht = cc11001100_hook("Ht", /#.*$/, "var-init"),
    Ot = cc11001100_hook("Ot", /([?&])_=[^&]*/, "var-init"),
    Pt = cc11001100_hook("Pt", /^(.*?):[ \t]*([^\r\n]*)$/gm, "var-init"),
    Rt = cc11001100_hook("Rt", /^(?:GET|HEAD)$/, "var-init"),
    Mt = cc11001100_hook("Mt", /^\/\//, "var-init"),
    It = cc11001100_hook("It", {}, "var-init"),
    Wt = cc11001100_hook("Wt", {}, "var-init"),
    $t = cc11001100_hook("$t", "*/".concat("*"), "var-init"),
    Ft = cc11001100_hook("Ft", E.createElement("a"), "var-init");
  function Bt(o) {
    cc11001100_hook("o", o, "function-parameter");
    return function (e, t) {
      "string" != typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", "*", "assign"));
      var n,
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.toLowerCase().match(R) || [], "var-init");
      if (m(t)) while (n = cc11001100_hook("n", i[r++], "assign")) "+" === n[0] ? (n = cc11001100_hook("n", n.slice(1) || "*", "assign"), (o[n] = cc11001100_hook("o[n]", o[n] || [], "assign")).unshift(t)) : (o[n] = cc11001100_hook("o[n]", o[n] || [], "assign")).push(t);
    };
  }
  function _t(t, i, o, a) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    var s = cc11001100_hook("s", {}, "var-init"),
      u = cc11001100_hook("u", t === Wt, "var-init");
    function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      var r;
      return s[e] = cc11001100_hook("s[e]", !0, "assign"), k.each(t[e] || [], function (e, t) {
        var n = cc11001100_hook("n", t(i, o, a), "var-init");
        return "string" != typeof n || u || s[n] ? u ? !(r = cc11001100_hook("r", n, "assign")) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function zt(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r,
      i = cc11001100_hook("i", k.ajaxSettings.flatOptions || {}, "var-init");
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = cc11001100_hook("r", {}, "assign")))[n] = cc11001100_hook("(i[n] ? e : r || (r = {}))[n]", t[n], "assign"));
    return r && k.extend(!0, e, r), e;
  }
  Ft.href = cc11001100_hook("Ft.href", Et.href, "assign"), k.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", Et.href, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", $t, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init"),
        html: cc11001100_hook("html", "text/html", "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        json: cc11001100_hook("json", "application/json, text/javascript", "object-key-init")
      },
      contents: {
        xml: cc11001100_hook("xml", /\bxml\b/, "object-key-init"),
        html: cc11001100_hook("html", /\bhtml/, "object-key-init"),
        json: cc11001100_hook("json", /\bjson\b/, "object-key-init")
      },
      responseFields: {
        xml: cc11001100_hook("xml", "responseXML", "object-key-init"),
        text: cc11001100_hook("text", "responseText", "object-key-init"),
        json: cc11001100_hook("json", "responseJSON", "object-key-init")
      },
      converters: {
        "* text": cc11001100_hook("* text", String, "object-key-init"),
        "text html": cc11001100_hook("text html", !0, "object-key-init"),
        "text json": cc11001100_hook("text json", JSON.parse, "object-key-init"),
        "text xml": cc11001100_hook("text xml", k.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", Bt(It), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", Bt(Wt), "object-key-init"),
    ajax: function (e, t) {
      "object" == typeof e && (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", void 0, "assign")), t = cc11001100_hook("t", t || {}, "assign");
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = cc11001100_hook("v", k.ajaxSetup({}, t), "var-init"),
        y = cc11001100_hook("y", v.context || v, "var-init"),
        m = cc11001100_hook("m", v.context && (y.nodeType || y.jquery) ? k(y) : k.event, "var-init"),
        x = cc11001100_hook("x", k.Deferred(), "var-init"),
        b = cc11001100_hook("b", k.Callbacks("once memory"), "var-init"),
        w = cc11001100_hook("w", v.statusCode || {}, "var-init"),
        a = cc11001100_hook("a", {}, "var-init"),
        s = cc11001100_hook("s", {}, "var-init"),
        u = cc11001100_hook("u", "canceled", "var-init"),
        T = cc11001100_hook("T", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = cc11001100_hook("n", {}, "assign");
                while (t = cc11001100_hook("t", Pt.exec(p), "assign")) n[t[1].toLowerCase() + " "] = cc11001100_hook("n[t[1].toLowerCase() + \" \"]", (n[t[1].toLowerCase() + " "] || []).concat(t[2]), "assign");
              }
              t = cc11001100_hook("t", n[e.toLowerCase() + " "], "assign");
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function () {
            return h ? p : null;
          },
          setRequestHeader: function (e, t) {
            return null == h && (e = cc11001100_hook("e", s[e.toLowerCase()] = cc11001100_hook("s[e.toLowerCase()]", s[e.toLowerCase()] || e, "assign"), "assign"), a[e] = cc11001100_hook("a[e]", t, "assign")), this;
          },
          overrideMimeType: function (e) {
            return null == h && (v.mimeType = cc11001100_hook("v.mimeType", e, "assign")), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = cc11001100_hook("w[t]", [w[t], e[t]], "assign");
            return this;
          },
          abort: function (e) {
            var t = cc11001100_hook("t", e || u, "var-init");
            return c && c.abort(t), l(0, t), this;
          }
        }, "var-init");
      if (x.promise(T), v.url = cc11001100_hook("v.url", ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), "assign"), v.type = cc11001100_hook("v.type", t.method || t.type || v.method || v.type, "assign"), v.dataTypes = cc11001100_hook("v.dataTypes", (v.dataType || "*").toLowerCase().match(R) || [""], "assign"), null == v.crossDomain) {
        r = cc11001100_hook("r", E.createElement("a"), "assign");
        try {
          r.href = cc11001100_hook("r.href", v.url, "assign"), r.href = cc11001100_hook("r.href", r.href, "assign"), v.crossDomain = cc11001100_hook("v.crossDomain", Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host, "assign");
        } catch (e) {
          v.crossDomain = cc11001100_hook("v.crossDomain", !0, "assign");
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = cc11001100_hook("v.data", k.param(v.data, v.traditional), "assign")), _t(It, v, t, T), h) return T;
      for (i in (g = cc11001100_hook("g", k.event && v.global, "assign")) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = cc11001100_hook("v.type", v.type.toUpperCase(), "assign"), v.hasContent = cc11001100_hook("v.hasContent", !Rt.test(v.type), "assign"), f = cc11001100_hook("f", v.url.replace(Ht, ""), "assign"), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = cc11001100_hook("v.data", v.data.replace(Lt, "+"), "assign")) : (o = cc11001100_hook("o", v.url.slice(f.length), "assign"), v.data && (v.processData || "string" == typeof v.data) && (f += cc11001100_hook("f", (St.test(f) ? "&" : "?") + v.data, "assign"), delete v.data), !1 === v.cache && (f = cc11001100_hook("f", f.replace(Ot, "$1"), "assign"), o = cc11001100_hook("o", (St.test(f) ? "&" : "?") + "_=" + kt++ + o, "assign")), v.url = cc11001100_hook("v.url", f + o, "assign")), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = cc11001100_hook("u", "abort", "assign"), b.add(v.complete), T.done(v.success), T.fail(v.error), c = cc11001100_hook("c", _t(Wt, v, t, T), "assign")) {
        if (T.readyState = cc11001100_hook("T.readyState", 1, "assign"), g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = cc11001100_hook("d", C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout), "assign"));
        try {
          h = cc11001100_hook("h", !1, "assign"), c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var i,
          o,
          a,
          s,
          u,
          l = cc11001100_hook("l", t, "var-init");
        h || (h = cc11001100_hook("h", !0, "assign"), d && C.clearTimeout(d), c = cc11001100_hook("c", void 0, "assign"), p = cc11001100_hook("p", r || "", "assign"), T.readyState = cc11001100_hook("T.readyState", 0 < e ? 4 : 0, "assign"), i = cc11001100_hook("i", 200 <= e && e < 300 || 304 === e, "assign"), n && (s = cc11001100_hook("s", function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = cc11001100_hook("s", e.contents, "var-init"),
            u = cc11001100_hook("u", e.dataTypes, "var-init");
          while ("*" === u[0]) u.shift(), void 0 === r && (r = cc11001100_hook("r", e.mimeType || t.getResponseHeader("Content-Type"), "assign"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = cc11001100_hook("o", u[0], "assign");else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = cc11001100_hook("o", i, "assign");
                break;
              }
              a || (a = cc11001100_hook("a", i, "assign"));
            }
            o = cc11001100_hook("o", o || a, "assign");
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n), "assign")), s = cc11001100_hook("s", function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = cc11001100_hook("l", {}, "var-init"),
            c = cc11001100_hook("c", e.dataTypes.slice(), "var-init");
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = cc11001100_hook("l[a.toLowerCase()]", e.converters[a], "assign");
          o = cc11001100_hook("o", c.shift(), "assign");
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = cc11001100_hook("n[e.responseFields[o]]", t, "assign")), !u && r && e.dataFilter && (t = cc11001100_hook("t", e.dataFilter(t, e.dataType), "assign")), u = cc11001100_hook("u", o, "assign"), o = cc11001100_hook("o", c.shift(), "assign")) if ("*" === o) o = cc11001100_hook("o", u, "assign");else if ("*" !== u && u !== o) {
            if (!(a = cc11001100_hook("a", l[u + " " + o] || l["* " + o], "assign"))) for (i in l) if ((s = cc11001100_hook("s", i.split(" "), "assign"))[1] === o && (a = cc11001100_hook("a", l[u + " " + s[0]] || l["* " + s[0]], "assign"))) {
              !0 === a ? a = cc11001100_hook("a", l[i], "assign") : !0 !== l[i] && (o = cc11001100_hook("o", s[0], "assign"), c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = cc11001100_hook("t", a(t), "assign");else try {
              t = cc11001100_hook("t", a(t), "assign");
            } catch (e) {
              return {
                state: cc11001100_hook("state", "parsererror", "object-key-init"),
                error: cc11001100_hook("error", a ? e : "No conversion from " + u + " to " + o, "object-key-init")
              };
            }
          }
          return {
            state: cc11001100_hook("state", "success", "object-key-init"),
            data: cc11001100_hook("data", t, "object-key-init")
          };
        }(v, s, T, i), "assign"), i ? (v.ifModified && ((u = cc11001100_hook("u", T.getResponseHeader("Last-Modified"), "assign")) && (k.lastModified[f] = cc11001100_hook("k.lastModified[f]", u, "assign")), (u = cc11001100_hook("u", T.getResponseHeader("etag"), "assign")) && (k.etag[f] = cc11001100_hook("k.etag[f]", u, "assign"))), 204 === e || "HEAD" === v.type ? l = cc11001100_hook("l", "nocontent", "assign") : 304 === e ? l = cc11001100_hook("l", "notmodified", "assign") : (l = cc11001100_hook("l", s.state, "assign"), o = cc11001100_hook("o", s.data, "assign"), i = cc11001100_hook("i", !(a = cc11001100_hook("a", s.error, "assign")), "assign"))) : (a = cc11001100_hook("a", l, "assign"), !e && l || (l = cc11001100_hook("l", "error", "assign"), e < 0 && (e = cc11001100_hook("e", 0, "assign")))), T.status = cc11001100_hook("T.status", e, "assign"), T.statusText = cc11001100_hook("T.statusText", (t || l) + "", "assign"), i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = cc11001100_hook("w", void 0, "assign"), g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = cc11001100_hook("k[i]", function (e, t, n, r) {
      return m(t) && (r = cc11001100_hook("r", r || n, "assign"), n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")), k.ajax(k.extend({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", i, "object-key-init"),
        dataType: cc11001100_hook("dataType", r, "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init"),
        success: cc11001100_hook("success", n, "object-key-init")
      }, k.isPlainObject(e) && e));
    }, "assign");
  }), k._evalUrl = cc11001100_hook("k._evalUrl", function (e, t) {
    return k.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      cache: cc11001100_hook("cache", !0, "object-key-init"),
      async: cc11001100_hook("async", !1, "object-key-init"),
      global: cc11001100_hook("global", !1, "object-key-init"),
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        k.globalEval(e, t);
      }
    });
  }, "assign"), k.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = cc11001100_hook("e", e.call(this[0]), "assign")), t = cc11001100_hook("t", k(e, this[0].ownerDocument).eq(0).clone(!0), "assign"), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = cc11001100_hook("e", this, "var-init");
        while (e.firstElementChild) e = cc11001100_hook("e", e.firstElementChild, "assign");
        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = cc11001100_hook("e", k(this), "var-init"),
          t = cc11001100_hook("t", e.contents(), "var-init");
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = cc11001100_hook("n", m(t), "var-init");
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = cc11001100_hook("k.expr.pseudos.hidden", function (e) {
    return !k.expr.pseudos.visible(e);
  }, "assign"), k.expr.pseudos.visible = cc11001100_hook("k.expr.pseudos.visible", function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, "assign"), k.ajaxSettings.xhr = cc11001100_hook("k.ajaxSettings.xhr", function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  }, "assign");
  var Ut = cc11001100_hook("Ut", {
      0: cc11001100_hook(0, 200, "object-key-init"),
      1223: cc11001100_hook(1223, 204, "object-key-init")
    }, "var-init"),
    Xt = cc11001100_hook("Xt", k.ajaxSettings.xhr(), "var-init");
  y.cors = cc11001100_hook("y.cors", !!Xt && "withCredentials" in Xt, "assign"), y.ajax = cc11001100_hook("y.ajax", Xt = cc11001100_hook("Xt", !!Xt, "assign"), "assign"), k.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || Xt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
          r = cc11001100_hook("r", i.xhr(), "var-init");
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = cc11001100_hook("r[n]", i.xhrFields[n], "assign");
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = cc11001100_hook("e[\"X-Requested-With\"]", "XMLHttpRequest", "assign")), e) r.setRequestHeader(n, e[n]);
        o = cc11001100_hook("o", function (e) {
          return function () {
            o && (o = cc11001100_hook("o", a = cc11001100_hook("a", r.onload = cc11001100_hook("r.onload", r.onerror = cc11001100_hook("r.onerror", r.onabort = cc11001100_hook("r.onabort", r.ontimeout = cc11001100_hook("r.ontimeout", r.onreadystatechange = cc11001100_hook("r.onreadystatechange", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: cc11001100_hook("binary", r.response, "object-key-init")
            } : {
              text: cc11001100_hook("text", r.responseText, "object-key-init")
            }, r.getAllResponseHeaders()));
          };
        }, "assign"), r.onload = cc11001100_hook("r.onload", o(), "assign"), a = cc11001100_hook("a", r.onerror = cc11001100_hook("r.onerror", r.ontimeout = cc11001100_hook("r.ontimeout", o("error"), "assign"), "assign"), "assign"), void 0 !== r.onabort ? r.onabort = cc11001100_hook("r.onabort", a, "assign") : r.onreadystatechange = cc11001100_hook("r.onreadystatechange", function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a();
          });
        }, "assign"), o = cc11001100_hook("o", o("abort"), "assign");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = cc11001100_hook("e.contents.script", !1, "assign"));
  }), k.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /\b(?:java|ecma)script\b/, "object-key-init")
    },
    converters: {
      "text script": function (e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = cc11001100_hook("e.cache", !1, "assign")), e.crossDomain && (e.type = cc11001100_hook("e.type", "GET", "assign"));
  }), k.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = cc11001100_hook("r", k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: cc11001100_hook("charset", n.scriptCharset, "object-key-init"),
          src: cc11001100_hook("src", n.url, "object-key-init")
        }).on("load error", i = cc11001100_hook("i", function (e) {
          r.remove(), i = cc11001100_hook("i", null, "assign"), e && t("error" === e.type ? 404 : 200, e.type);
        }, "assign")), "assign"), E.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Vt,
    Gt = cc11001100_hook("Gt", [], "var-init"),
    Yt = cc11001100_hook("Yt", /(=)\?(?=&|$)|\?\?/, "var-init");
  k.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var e = cc11001100_hook("e", Gt.pop() || k.expando + "_" + kt++, "var-init");
      return this[e] = cc11001100_hook("this[e]", !0, "assign"), e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = cc11001100_hook("a", !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"), "var-init");
    if (a || "jsonp" === e.dataTypes[0]) return r = cc11001100_hook("r", e.jsonpCallback = cc11001100_hook("e.jsonpCallback", m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, "assign"), "assign"), a ? e[a] = cc11001100_hook("e[a]", e[a].replace(Yt, "$1" + r), "assign") : !1 !== e.jsonp && (e.url += cc11001100_hook("e.url", (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r, "assign")), e.converters["script json"] = cc11001100_hook("e.converters[\"script json\"]", function () {
      return o || k.error(r + " was not called"), o[0];
    }, "assign"), e.dataTypes[0] = cc11001100_hook("e.dataTypes[0]", "json", "assign"), i = cc11001100_hook("i", C[r], "assign"), C[r] = cc11001100_hook("C[r]", function () {
      o = cc11001100_hook("o", arguments, "assign");
    }, "assign"), n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = cc11001100_hook("C[r]", i, "assign"), e[r] && (e.jsonpCallback = cc11001100_hook("e.jsonpCallback", t.jsonpCallback, "assign"), Gt.push(r)), o && m(i) && i(o[0]), o = cc11001100_hook("o", i = cc11001100_hook("i", void 0, "assign"), "assign");
    }), "script";
  }), y.createHTMLDocument = cc11001100_hook("y.createHTMLDocument", ((Vt = cc11001100_hook("Vt", E.implementation.createHTMLDocument("").body, "assign")).innerHTML = cc11001100_hook("(Vt = E.implementation.createHTMLDocument(\"\").body).innerHTML", "<form></form><form></form>", "assign"), 2 === Vt.childNodes.length), "assign"), k.parseHTML = cc11001100_hook("k.parseHTML", function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", !1, "assign")), t || (y.createHTMLDocument ? ((r = cc11001100_hook("r", (t = cc11001100_hook("t", E.implementation.createHTMLDocument(""), "assign")).createElement("base"), "assign")).href = cc11001100_hook("(r = (t = E.implementation.createHTMLDocument(\"\")).createElement(\"base\")).href", E.location.href, "assign"), t.head.appendChild(r)) : t = cc11001100_hook("t", E, "assign")), o = cc11001100_hook("o", !n && [], "assign"), (i = cc11001100_hook("i", D.exec(e), "assign")) ? [t.createElement(i[1])] : (i = cc11001100_hook("i", we([e], t, o), "assign"), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, "assign"), k.fn.load = cc11001100_hook("k.fn.load", function (e, t, n) {
    var r,
      i,
      o,
      a = cc11001100_hook("a", this, "var-init"),
      s = cc11001100_hook("s", e.indexOf(" "), "var-init");
    return -1 < s && (r = cc11001100_hook("r", mt(e.slice(s)), "assign"), e = cc11001100_hook("e", e.slice(0, s), "assign")), m(t) ? (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", void 0, "assign")) : t && "object" == typeof t && (i = cc11001100_hook("i", "POST", "assign")), 0 < a.length && k.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", i || "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    }).done(function (e) {
      o = cc11001100_hook("o", arguments, "assign"), a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, "assign"), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = cc11001100_hook("k.fn[t]", function (e) {
      return this.on(t, e);
    }, "assign");
  }), k.expr.pseudos.animated = cc11001100_hook("k.expr.pseudos.animated", function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, "assign"), k.offset = cc11001100_hook("k.offset", {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = cc11001100_hook("l", k.css(e, "position"), "var-init"),
        c = cc11001100_hook("c", k(e), "var-init"),
        f = cc11001100_hook("f", {}, "var-init");
      "static" === l && (e.style.position = cc11001100_hook("e.style.position", "relative", "assign")), s = cc11001100_hook("s", c.offset(), "assign"), o = cc11001100_hook("o", k.css(e, "top"), "assign"), u = cc11001100_hook("u", k.css(e, "left"), "assign"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = cc11001100_hook("a", (r = cc11001100_hook("r", c.position(), "assign")).top, "assign"), i = cc11001100_hook("i", r.left, "assign")) : (a = cc11001100_hook("a", parseFloat(o) || 0, "assign"), i = cc11001100_hook("i", parseFloat(u) || 0, "assign")), m(t) && (t = cc11001100_hook("t", t.call(e, n, k.extend({}, s)), "assign")), null != t.top && (f.top = cc11001100_hook("f.top", t.top - s.top + a, "assign")), null != t.left && (f.left = cc11001100_hook("f.left", t.left - s.left + i, "assign")), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, "assign"), k.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = cc11001100_hook("r", this[0], "var-init");
      return r ? r.getClientRects().length ? (e = cc11001100_hook("e", r.getBoundingClientRect(), "assign"), n = cc11001100_hook("n", r.ownerDocument.defaultView, "assign"), {
        top: cc11001100_hook("top", e.top + n.pageYOffset, "object-key-init"),
        left: cc11001100_hook("left", e.left + n.pageXOffset, "object-key-init")
      }) : {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
          t,
          n,
          r = cc11001100_hook("r", this[0], "var-init"),
          i = cc11001100_hook("i", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init");
        if ("fixed" === k.css(r, "position")) t = cc11001100_hook("t", r.getBoundingClientRect(), "assign");else {
          t = cc11001100_hook("t", this.offset(), "assign"), n = cc11001100_hook("n", r.ownerDocument, "assign"), e = cc11001100_hook("e", r.offsetParent || n.documentElement, "assign");
          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = cc11001100_hook("e", e.parentNode, "assign");
          e && e !== r && 1 === e.nodeType && ((i = cc11001100_hook("i", k(e).offset(), "assign")).top += cc11001100_hook("(i = k(e).offset()).top", k.css(e, "borderTopWidth", !0), "assign"), i.left += cc11001100_hook("i.left", k.css(e, "borderLeftWidth", !0), "assign"));
        }
        return {
          top: cc11001100_hook("top", t.top - i.top - k.css(r, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", t.left - i.left - k.css(r, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", this.offsetParent, "var-init");
        while (e && "static" === k.css(e, "position")) e = cc11001100_hook("e", e.offsetParent, "assign");
        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (t, i) {
    var o = cc11001100_hook("o", "pageYOffset" === i, "var-init");
    k.fn[t] = cc11001100_hook("k.fn[t]", function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = cc11001100_hook("r", e, "assign") : 9 === e.nodeType && (r = cc11001100_hook("r", e.defaultView, "assign")), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = cc11001100_hook("e[t]", n, "assign");
      }, t, e, arguments.length);
    }, "assign");
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = cc11001100_hook("k.cssHooks[n]", ze(y.pixelPosition, function (e, t) {
      if (t) return t = cc11001100_hook("t", _e(e, n), "assign"), $e.test(t) ? k(e).position()[n] + "px" : t;
    }), "assign");
  }), k.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (a, s) {
    k.each({
      padding: cc11001100_hook("padding", "inner" + a, "object-key-init"),
      content: cc11001100_hook("content", s, "object-key-init"),
      "": cc11001100_hook("", "outer" + a, "object-key-init")
    }, function (r, o) {
      k.fn[o] = cc11001100_hook("k.fn[o]", function (e, t) {
        var n = cc11001100_hook("n", arguments.length && (r || "boolean" != typeof e), "var-init"),
          i = cc11001100_hook("i", r || (!0 === e || !0 === t ? "margin" : "border"), "var-init");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = cc11001100_hook("r", e.documentElement, "assign"), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      }, "assign");
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = cc11001100_hook("k.fn[n]", function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    }, "assign");
  }), k.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = cc11001100_hook("k.proxy", function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = cc11001100_hook("n", e[t], "assign"), t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", n, "assign")), m(e)) return r = cc11001100_hook("r", s.call(arguments, 2), "assign"), (i = cc11001100_hook("i", function () {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }, "assign")).guid = cc11001100_hook("(i = function () {\n  return e.apply(t || this, r.concat(s.call(arguments)));\n}).guid", e.guid = cc11001100_hook("e.guid", e.guid || k.guid++, "assign"), "assign"), i;
  }, "assign"), k.holdReady = cc11001100_hook("k.holdReady", function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, "assign"), k.isArray = cc11001100_hook("k.isArray", Array.isArray, "assign"), k.parseJSON = cc11001100_hook("k.parseJSON", JSON.parse, "assign"), k.nodeName = cc11001100_hook("k.nodeName", A, "assign"), k.isFunction = cc11001100_hook("k.isFunction", m, "assign"), k.isWindow = cc11001100_hook("k.isWindow", x, "assign"), k.camelCase = cc11001100_hook("k.camelCase", V, "assign"), k.type = cc11001100_hook("k.type", w, "assign"), k.now = cc11001100_hook("k.now", Date.now, "assign"), k.isNumeric = cc11001100_hook("k.isNumeric", function (e) {
    var t = cc11001100_hook("t", k.type(e), "var-init");
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return k;
  });
  var Qt = cc11001100_hook("Qt", C.jQuery, "var-init"),
    Jt = cc11001100_hook("Jt", C.$, "var-init");
  return k.noConflict = cc11001100_hook("k.noConflict", function (e) {
    return C.$ === k && (C.$ = cc11001100_hook("C.$", Jt, "assign")), e && C.jQuery === k && (C.jQuery = cc11001100_hook("C.jQuery", Qt, "assign")), k;
  }, "assign"), e || (C.jQuery = cc11001100_hook("C.jQuery", C.$ = cc11001100_hook("C.$", k, "assign"), "assign")), k;
});