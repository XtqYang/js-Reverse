(function () {
  function o(n) {
    cc11001100_hook("n", n, "function-parameter");
    var i = cc11001100_hook("i", e, "var-init");
    n && (e[n] || (e[n] = cc11001100_hook("e[n]", {}, "assign")), i = cc11001100_hook("i", e[n], "assign"));
    if (!i.define || !i.define.packaged) t.original = cc11001100_hook("t.original", i.define, "assign"), i.define = cc11001100_hook("i.define", t, "assign"), i.define.packaged = cc11001100_hook("i.define.packaged", !0, "assign");
    if (!i.require || !i.require.packaged) r.original = cc11001100_hook("r.original", i.require, "assign"), i.require = cc11001100_hook("i.require", r, "assign"), i.require.packaged = cc11001100_hook("i.require.packaged", !0, "assign");
  }

  var ACE_NAMESPACE = cc11001100_hook("ACE_NAMESPACE", "ace", "var-init"),
      e = cc11001100_hook("e", function () {
    return this;
  }(), "var-init");
  !e && typeof window != "undefined" && (e = cc11001100_hook("e", window, "assign"));
  if (!ACE_NAMESPACE && typeof requirejs != "undefined") return;

  var t = function (e, n, r) {
    if (typeof e != "string") {
      t.original ? t.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
      return;
    }

    arguments.length == 2 && (r = cc11001100_hook("r", n, "assign")), t.modules[e] || (t.payloads[e] = cc11001100_hook("t.payloads[e]", r, "assign"), t.modules[e] = cc11001100_hook("t.modules[e]", null, "assign"));
  };

  t.modules = cc11001100_hook("t.modules", {}, "assign"), t.payloads = cc11001100_hook("t.payloads", {}, "assign");

  var n = function (e, t, n) {
    if (typeof t == "string") {
      var i = cc11001100_hook("i", s(e, t), "var-init");
      if (i != undefined) return n && n(), i;
    } else if (Object.prototype.toString.call(t) === "[object Array]") {
      var o = cc11001100_hook("o", [], "var-init");

      for (var u = cc11001100_hook("u", 0, "var-init"), a = cc11001100_hook("a", t.length, "var-init"); u < a; ++u) {
        var f = cc11001100_hook("f", s(e, t[u]), "var-init");
        if (f == undefined && r.original) return;
        o.push(f);
      }

      return n && n.apply(null, o) || !0;
    }
  },
      r = function (e, t) {
    var i = cc11001100_hook("i", n("", e, t), "var-init");
    return i == undefined && r.original ? r.original.apply(this, arguments) : i;
  },
      i = function (e, t) {
    if (t.indexOf("!") !== -1) {
      var n = cc11001100_hook("n", t.split("!"), "var-init");
      return i(e, n[0]) + "!" + i(e, n[1]);
    }

    if (t.charAt(0) == ".") {
      var r = cc11001100_hook("r", e.split("/").slice(0, -1).join("/"), "var-init");
      t = cc11001100_hook("t", r + "/" + t, "assign");

      while (t.indexOf(".") !== -1 && s != t) {
        var s = cc11001100_hook("s", t, "var-init");
        t = cc11001100_hook("t", t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, ""), "assign");
      }
    }

    return t;
  },
      s = function (e, r) {
    r = cc11001100_hook("r", i(e, r), "assign");
    var s = cc11001100_hook("s", t.modules[r], "var-init");

    if (!s) {
      s = cc11001100_hook("s", t.payloads[r], "assign");

      if (typeof s == "function") {
        var o = cc11001100_hook("o", {}, "var-init"),
            u = cc11001100_hook("u", {
          id: cc11001100_hook("id", r, "object-key-init"),
          uri: cc11001100_hook("uri", "", "object-key-init"),
          exports: cc11001100_hook("exports", o, "object-key-init"),
          packaged: cc11001100_hook("packaged", !0, "object-key-init")
        }, "var-init"),
            a = function (e, t) {
          return n(r, e, t);
        },
            f = cc11001100_hook("f", s(a, o, u), "var-init");

        o = cc11001100_hook("o", f || u.exports, "assign"), t.modules[r] = cc11001100_hook("t.modules[r]", o, "assign"), delete t.payloads[r];
      }

      s = cc11001100_hook("s", t.modules[r] = cc11001100_hook("t.modules[r]", o || s, "assign"), "assign");
    }

    return s;
  };

  o(ACE_NAMESPACE);
})(), ace.define("ace/lib/regexp", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "");
  }

  function u(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (Array.prototype.indexOf) return e.indexOf(t, n);

    for (var r = cc11001100_hook("r", n || 0, "var-init"); r < e.length; r++) if (e[r] === t) return r;

    return -1;
  }

  var r = cc11001100_hook("r", {
    exec: cc11001100_hook("exec", RegExp.prototype.exec, "object-key-init"),
    test: cc11001100_hook("test", RegExp.prototype.test, "object-key-init"),
    match: cc11001100_hook("match", String.prototype.match, "object-key-init"),
    replace: cc11001100_hook("replace", String.prototype.replace, "object-key-init"),
    split: cc11001100_hook("split", String.prototype.split, "object-key-init")
  }, "var-init"),
      i = cc11001100_hook("i", r.exec.call(/()??/, "")[1] === undefined, "var-init"),
      s = cc11001100_hook("s", function () {
    var e = cc11001100_hook("e", /^/g, "var-init");
    return r.test.call(e, ""), !e.lastIndex;
  }(), "var-init");
  if (s && i) return;
  RegExp.prototype.exec = cc11001100_hook("RegExp.prototype.exec", function (e) {
    var t = cc11001100_hook("t", r.exec.apply(this, arguments), "var-init"),
        n,
        a;

    if (typeof e == "string" && t) {
      !i && t.length > 1 && u(t, "") > -1 && (a = cc11001100_hook("a", RegExp(this.source, r.replace.call(o(this), "g", "")), "assign"), r.replace.call(e.slice(t.index), a, function () {
        for (var e = cc11001100_hook("e", 1, "var-init"); e < arguments.length - 2; e++) arguments[e] === undefined && (t[e] = cc11001100_hook("t[e]", undefined, "assign"));
      }));
      if (this._xregexp && this._xregexp.captureNames) for (var f = cc11001100_hook("f", 1, "var-init"); f < t.length; f++) n = cc11001100_hook("n", this._xregexp.captureNames[f - 1], "assign"), n && (t[n] = cc11001100_hook("t[n]", t[f], "assign"));
      !s && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--;
    }

    return t;
  }, "assign"), s || (RegExp.prototype.test = cc11001100_hook("RegExp.prototype.test", function (e) {
    var t = cc11001100_hook("t", r.exec.call(this, e), "var-init");
    return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t;
  }, "assign"));
}), ace.define("ace/lib/es5-shim", ["require", "exports", "module"], function (e, t, n) {
  function r() {}

  function w(e) {
    cc11001100_hook("e", e, "function-parameter");

    try {
      return Object.defineProperty(e, "sentinel", {}), "sentinel" in e;
    } catch (t) {}
  }

  function H(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e = cc11001100_hook("e", +e, "assign"), e !== e ? e = cc11001100_hook("e", 0, "assign") : e !== 0 && e !== 1 / 0 && e !== -1 / 0 && (e = cc11001100_hook("e", (e > 0 || -1) * Math.floor(Math.abs(e)), "assign")), e;
  }

  function B(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", typeof e, "var-init");
    return e === null || t === "undefined" || t === "boolean" || t === "number" || t === "string";
  }

  function j(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t, n, r;
    if (B(e)) return e;
    n = cc11001100_hook("n", e.valueOf, "assign");

    if (typeof n == "function") {
      t = cc11001100_hook("t", n.call(e), "assign");
      if (B(t)) return t;
    }

    r = cc11001100_hook("r", e.toString, "assign");

    if (typeof r == "function") {
      t = cc11001100_hook("t", r.call(e), "assign");
      if (B(t)) return t;
    }

    throw new TypeError();
  }

  Function.prototype.bind || (Function.prototype.bind = cc11001100_hook("Function.prototype.bind", function (t) {
    var n = cc11001100_hook("n", this, "var-init");
    if (typeof n != "function") throw new TypeError("Function.prototype.bind called on incompatible " + n);

    var i = cc11001100_hook("i", u.call(arguments, 1), "var-init"),
        s = function () {
      if (this instanceof s) {
        var e = cc11001100_hook("e", n.apply(this, i.concat(u.call(arguments))), "var-init");
        return Object(e) === e ? e : this;
      }

      return n.apply(t, i.concat(u.call(arguments)));
    };

    return n.prototype && (r.prototype = cc11001100_hook("r.prototype", n.prototype, "assign"), s.prototype = cc11001100_hook("s.prototype", new r(), "assign"), r.prototype = cc11001100_hook("r.prototype", null, "assign")), s;
  }, "assign"));
  var i = cc11001100_hook("i", Function.prototype.call, "var-init"),
      s = cc11001100_hook("s", Array.prototype, "var-init"),
      o = cc11001100_hook("o", Object.prototype, "var-init"),
      u = cc11001100_hook("u", s.slice, "var-init"),
      a = cc11001100_hook("a", i.bind(o.toString), "var-init"),
      f = cc11001100_hook("f", i.bind(o.hasOwnProperty), "var-init"),
      l,
      c,
      h,
      p,
      d;
  if (d = cc11001100_hook("d", f(o, "__defineGetter__"), "assign")) l = cc11001100_hook("l", i.bind(o.__defineGetter__), "assign"), c = cc11001100_hook("c", i.bind(o.__defineSetter__), "assign"), h = cc11001100_hook("h", i.bind(o.__lookupGetter__), "assign"), p = cc11001100_hook("p", i.bind(o.__lookupSetter__), "assign");
  if ([1, 2].splice(0).length != 2) if (!function () {
    function e(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", new Array(e + 2), "var-init");
      return t[0] = cc11001100_hook("t[0]", t[1] = cc11001100_hook("t[1]", 0, "assign"), "assign"), t;
    }

    var t = cc11001100_hook("t", [], "var-init"),
        n;
    t.splice.apply(t, e(20)), t.splice.apply(t, e(26)), n = cc11001100_hook("n", t.length, "assign"), t.splice(5, 0, "XXX"), n + 1 == t.length;
    if (n + 1 == t.length) return !0;
  }()) Array.prototype.splice = cc11001100_hook("Array.prototype.splice", function (e, t) {
    var n = cc11001100_hook("n", this.length, "var-init");
    e > 0 ? e > n && (e = cc11001100_hook("e", n, "assign")) : e == void 0 ? e = cc11001100_hook("e", 0, "assign") : e < 0 && (e = cc11001100_hook("e", Math.max(n + e, 0), "assign")), e + t < n || (t = cc11001100_hook("t", n - e, "assign"));
    var r = cc11001100_hook("r", this.slice(e, e + t), "var-init"),
        i = cc11001100_hook("i", u.call(arguments, 2), "var-init"),
        s = cc11001100_hook("s", i.length, "var-init");
    if (e === n) s && this.push.apply(this, i);else {
      var o = cc11001100_hook("o", Math.min(t, n - e), "var-init"),
          a = cc11001100_hook("a", e + o, "var-init"),
          f = cc11001100_hook("f", a + s - o, "var-init"),
          l = cc11001100_hook("l", n - a, "var-init"),
          c = cc11001100_hook("c", n - o, "var-init");
      if (f < a) for (var h = cc11001100_hook("h", 0, "var-init"); h < l; ++h) this[f + h] = cc11001100_hook("this[f + h]", this[a + h], "assign");else if (f > a) for (h = cc11001100_hook("h", l, "assign"); h--;) this[f + h] = cc11001100_hook("this[f + h]", this[a + h], "assign");
      if (s && e === c) this.length = cc11001100_hook("this.length", c, "assign"), this.push.apply(this, i);else {
        this.length = cc11001100_hook("this.length", c + s, "assign");

        for (h = cc11001100_hook("h", 0, "assign"); h < s; ++h) this[e + h] = cc11001100_hook("this[e + h]", i[h], "assign");
      }
    }
    return r;
  }, "assign");else {
    var v = cc11001100_hook("v", Array.prototype.splice, "var-init");
    Array.prototype.splice = cc11001100_hook("Array.prototype.splice", function (e, t) {
      return arguments.length ? v.apply(this, [e === void 0 ? 0 : e, t === void 0 ? this.length - e : t].concat(u.call(arguments, 2))) : [];
    }, "assign");
  }
  Array.isArray || (Array.isArray = cc11001100_hook("Array.isArray", function (t) {
    return a(t) == "[object Array]";
  }, "assign"));
  var m = cc11001100_hook("m", Object("a"), "var-init"),
      g = cc11001100_hook("g", m[0] != "a" || !(0 in m), "var-init");
  Array.prototype.forEach || (Array.prototype.forEach = cc11001100_hook("Array.prototype.forEach", function (t) {
    var n = cc11001100_hook("n", F(this), "var-init"),
        r = cc11001100_hook("r", g && a(this) == "[object String]" ? this.split("") : n, "var-init"),
        i = cc11001100_hook("i", arguments[1], "var-init"),
        s = cc11001100_hook("s", -1, "var-init"),
        o = cc11001100_hook("o", r.length >>> 0, "var-init");
    if (a(t) != "[object Function]") throw new TypeError();

    while (++s < o) s in r && t.call(i, r[s], s, n);
  }, "assign")), Array.prototype.map || (Array.prototype.map = cc11001100_hook("Array.prototype.map", function (t) {
    var n = cc11001100_hook("n", F(this), "var-init"),
        r = cc11001100_hook("r", g && a(this) == "[object String]" ? this.split("") : n, "var-init"),
        i = cc11001100_hook("i", r.length >>> 0, "var-init"),
        s = cc11001100_hook("s", Array(i), "var-init"),
        o = cc11001100_hook("o", arguments[1], "var-init");
    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");

    for (var u = cc11001100_hook("u", 0, "var-init"); u < i; u++) u in r && (s[u] = cc11001100_hook("s[u]", t.call(o, r[u], u, n), "assign"));

    return s;
  }, "assign")), Array.prototype.filter || (Array.prototype.filter = cc11001100_hook("Array.prototype.filter", function (t) {
    var n = cc11001100_hook("n", F(this), "var-init"),
        r = cc11001100_hook("r", g && a(this) == "[object String]" ? this.split("") : n, "var-init"),
        i = cc11001100_hook("i", r.length >>> 0, "var-init"),
        s = cc11001100_hook("s", [], "var-init"),
        o,
        u = cc11001100_hook("u", arguments[1], "var-init");
    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");

    for (var f = cc11001100_hook("f", 0, "var-init"); f < i; f++) f in r && (o = cc11001100_hook("o", r[f], "assign"), t.call(u, o, f, n) && s.push(o));

    return s;
  }, "assign")), Array.prototype.every || (Array.prototype.every = cc11001100_hook("Array.prototype.every", function (t) {
    var n = cc11001100_hook("n", F(this), "var-init"),
        r = cc11001100_hook("r", g && a(this) == "[object String]" ? this.split("") : n, "var-init"),
        i = cc11001100_hook("i", r.length >>> 0, "var-init"),
        s = cc11001100_hook("s", arguments[1], "var-init");
    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");

    for (var o = cc11001100_hook("o", 0, "var-init"); o < i; o++) if (o in r && !t.call(s, r[o], o, n)) return !1;

    return !0;
  }, "assign")), Array.prototype.some || (Array.prototype.some = cc11001100_hook("Array.prototype.some", function (t) {
    var n = cc11001100_hook("n", F(this), "var-init"),
        r = cc11001100_hook("r", g && a(this) == "[object String]" ? this.split("") : n, "var-init"),
        i = cc11001100_hook("i", r.length >>> 0, "var-init"),
        s = cc11001100_hook("s", arguments[1], "var-init");
    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");

    for (var o = cc11001100_hook("o", 0, "var-init"); o < i; o++) if (o in r && t.call(s, r[o], o, n)) return !0;

    return !1;
  }, "assign")), Array.prototype.reduce || (Array.prototype.reduce = cc11001100_hook("Array.prototype.reduce", function (t) {
    var n = cc11001100_hook("n", F(this), "var-init"),
        r = cc11001100_hook("r", g && a(this) == "[object String]" ? this.split("") : n, "var-init"),
        i = cc11001100_hook("i", r.length >>> 0, "var-init");
    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");
    if (!i && arguments.length == 1) throw new TypeError("reduce of empty array with no initial value");
    var s = cc11001100_hook("s", 0, "var-init"),
        o;
    if (arguments.length >= 2) o = cc11001100_hook("o", arguments[1], "assign");else do {
      if (s in r) {
        o = cc11001100_hook("o", r[s++], "assign");
        break;
      }

      if (++s >= i) throw new TypeError("reduce of empty array with no initial value");
    } while (!0);

    for (; s < i; s++) s in r && (o = cc11001100_hook("o", t.call(void 0, o, r[s], s, n), "assign"));

    return o;
  }, "assign")), Array.prototype.reduceRight || (Array.prototype.reduceRight = cc11001100_hook("Array.prototype.reduceRight", function (t) {
    var n = cc11001100_hook("n", F(this), "var-init"),
        r = cc11001100_hook("r", g && a(this) == "[object String]" ? this.split("") : n, "var-init"),
        i = cc11001100_hook("i", r.length >>> 0, "var-init");
    if (a(t) != "[object Function]") throw new TypeError(t + " is not a function");
    if (!i && arguments.length == 1) throw new TypeError("reduceRight of empty array with no initial value");
    var s,
        o = cc11001100_hook("o", i - 1, "var-init");
    if (arguments.length >= 2) s = cc11001100_hook("s", arguments[1], "assign");else do {
      if (o in r) {
        s = cc11001100_hook("s", r[o--], "assign");
        break;
      }

      if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value");
    } while (!0);

    do o in this && (s = cc11001100_hook("s", t.call(void 0, s, r[o], o, n), "assign")); while (o--);

    return s;
  }, "assign"));
  if (!Array.prototype.indexOf || [0, 1].indexOf(1, 2) != -1) Array.prototype.indexOf = cc11001100_hook("Array.prototype.indexOf", function (t) {
    var n = cc11001100_hook("n", g && a(this) == "[object String]" ? this.split("") : F(this), "var-init"),
        r = cc11001100_hook("r", n.length >>> 0, "var-init");
    if (!r) return -1;
    var i = cc11001100_hook("i", 0, "var-init");
    arguments.length > 1 && (i = cc11001100_hook("i", H(arguments[1]), "assign")), i = cc11001100_hook("i", i >= 0 ? i : Math.max(0, r + i), "assign");

    for (; i < r; i++) if (i in n && n[i] === t) return i;

    return -1;
  }, "assign");
  if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1) Array.prototype.lastIndexOf = cc11001100_hook("Array.prototype.lastIndexOf", function (t) {
    var n = cc11001100_hook("n", g && a(this) == "[object String]" ? this.split("") : F(this), "var-init"),
        r = cc11001100_hook("r", n.length >>> 0, "var-init");
    if (!r) return -1;
    var i = cc11001100_hook("i", r - 1, "var-init");
    arguments.length > 1 && (i = cc11001100_hook("i", Math.min(i, H(arguments[1])), "assign")), i = cc11001100_hook("i", i >= 0 ? i : r - Math.abs(i), "assign");

    for (; i >= 0; i--) if (i in n && t === n[i]) return i;

    return -1;
  }, "assign");
  Object.getPrototypeOf || (Object.getPrototypeOf = cc11001100_hook("Object.getPrototypeOf", function (t) {
    return t.__proto__ || (t.constructor ? t.constructor.prototype : o);
  }, "assign"));

  if (!Object.getOwnPropertyDescriptor) {
    var y = cc11001100_hook("y", "Object.getOwnPropertyDescriptor called on a non-object: ", "var-init");
    Object.getOwnPropertyDescriptor = cc11001100_hook("Object.getOwnPropertyDescriptor", function (t, n) {
      if (typeof t != "object" && typeof t != "function" || t === null) throw new TypeError(y + t);
      if (!f(t, n)) return;
      var r, i, s;
      r = cc11001100_hook("r", {
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }, "assign");

      if (d) {
        var u = cc11001100_hook("u", t.__proto__, "var-init");
        t.__proto__ = cc11001100_hook("t.__proto__", o, "assign");
        var i = cc11001100_hook("i", h(t, n), "var-init"),
            s = cc11001100_hook("s", p(t, n), "var-init");
        t.__proto__ = cc11001100_hook("t.__proto__", u, "assign");
        if (i || s) return i && (r.get = cc11001100_hook("r.get", i, "assign")), s && (r.set = cc11001100_hook("r.set", s, "assign")), r;
      }

      return r.value = cc11001100_hook("r.value", t[n], "assign"), r;
    }, "assign");
  }

  Object.getOwnPropertyNames || (Object.getOwnPropertyNames = cc11001100_hook("Object.getOwnPropertyNames", function (t) {
    return Object.keys(t);
  }, "assign"));

  if (!Object.create) {
    var b;
    Object.prototype.__proto__ === null ? b = cc11001100_hook("b", function () {
      return {
        __proto__: cc11001100_hook("__proto__", null, "object-key-init")
      };
    }, "assign") : b = cc11001100_hook("b", function () {
      var e = cc11001100_hook("e", {}, "var-init");

      for (var t in e) e[t] = cc11001100_hook("e[t]", null, "assign");

      return e.constructor = cc11001100_hook("e.constructor", e.hasOwnProperty = cc11001100_hook("e.hasOwnProperty", e.propertyIsEnumerable = cc11001100_hook("e.propertyIsEnumerable", e.isPrototypeOf = cc11001100_hook("e.isPrototypeOf", e.toLocaleString = cc11001100_hook("e.toLocaleString", e.toString = cc11001100_hook("e.toString", e.valueOf = cc11001100_hook("e.valueOf", e.__proto__ = cc11001100_hook("e.__proto__", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), e;
    }, "assign"), Object.create = cc11001100_hook("Object.create", function (t, n) {
      var r;
      if (t === null) r = cc11001100_hook("r", b(), "assign");else {
        if (typeof t != "object") throw new TypeError("typeof prototype[" + typeof t + "] != 'object'");

        var i = function () {};

        i.prototype = cc11001100_hook("i.prototype", t, "assign"), r = cc11001100_hook("r", new i(), "assign"), r.__proto__ = cc11001100_hook("r.__proto__", t, "assign");
      }
      return n !== void 0 && Object.defineProperties(r, n), r;
    }, "assign");
  }

  if (Object.defineProperty) {
    var E = cc11001100_hook("E", w({}), "var-init"),
        S = cc11001100_hook("S", typeof document == "undefined" || w(document.createElement("div")), "var-init");
    if (!E || !S) var x = cc11001100_hook("x", Object.defineProperty, "var-init");
  }

  if (!Object.defineProperty || x) {
    var T = cc11001100_hook("T", "Property description must be an object: ", "var-init"),
        N = cc11001100_hook("N", "Object.defineProperty called on non-object: ", "var-init"),
        C = cc11001100_hook("C", "getters & setters can not be defined on this javascript engine", "var-init");
    Object.defineProperty = cc11001100_hook("Object.defineProperty", function (t, n, r) {
      if (typeof t != "object" && typeof t != "function" || t === null) throw new TypeError(N + t);
      if (typeof r != "object" && typeof r != "function" || r === null) throw new TypeError(T + r);
      if (x) try {
        return x.call(Object, t, n, r);
      } catch (i) {}
      if (f(r, "value")) {
        if (d && (h(t, n) || p(t, n))) {
          var s = cc11001100_hook("s", t.__proto__, "var-init");
          t.__proto__ = cc11001100_hook("t.__proto__", o, "assign"), delete t[n], t[n] = cc11001100_hook("t[n]", r.value, "assign"), t.__proto__ = cc11001100_hook("t.__proto__", s, "assign");
        } else t[n] = cc11001100_hook("t[n]", r.value, "assign");
      } else {
        if (!d) throw new TypeError(C);
        f(r, "get") && l(t, n, r.get), f(r, "set") && c(t, n, r.set);
      }
      return t;
    }, "assign");
  }

  Object.defineProperties || (Object.defineProperties = cc11001100_hook("Object.defineProperties", function (t, n) {
    for (var r in n) f(n, r) && Object.defineProperty(t, r, n[r]);

    return t;
  }, "assign")), Object.seal || (Object.seal = cc11001100_hook("Object.seal", function (t) {
    return t;
  }, "assign")), Object.freeze || (Object.freeze = cc11001100_hook("Object.freeze", function (t) {
    return t;
  }, "assign"));

  try {
    Object.freeze(function () {});
  } catch (k) {
    Object.freeze = cc11001100_hook("Object.freeze", function (t) {
      return function (n) {
        return typeof n == "function" ? n : t(n);
      };
    }(Object.freeze), "assign");
  }

  Object.preventExtensions || (Object.preventExtensions = cc11001100_hook("Object.preventExtensions", function (t) {
    return t;
  }, "assign")), Object.isSealed || (Object.isSealed = cc11001100_hook("Object.isSealed", function (t) {
    return !1;
  }, "assign")), Object.isFrozen || (Object.isFrozen = cc11001100_hook("Object.isFrozen", function (t) {
    return !1;
  }, "assign")), Object.isExtensible || (Object.isExtensible = cc11001100_hook("Object.isExtensible", function (t) {
    if (Object(t) === t) throw new TypeError();
    var n = cc11001100_hook("n", "", "var-init");

    while (f(t, n)) n += cc11001100_hook("n", "?", "assign");

    t[n] = cc11001100_hook("t[n]", !0, "assign");
    var r = cc11001100_hook("r", f(t, n), "var-init");
    return delete t[n], r;
  }, "assign"));

  if (!Object.keys) {
    var L = cc11001100_hook("L", !0, "var-init"),
        A = cc11001100_hook("A", ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], "var-init"),
        O = cc11001100_hook("O", A.length, "var-init");

    for (var M in {
      toString: cc11001100_hook("toString", null, "object-key-init")
    }) L = cc11001100_hook("L", !1, "assign");

    Object.keys = cc11001100_hook("Object.keys", function I(e) {
      if (typeof e != "object" && typeof e != "function" || e === null) throw new TypeError("Object.keys called on a non-object");
      var I = cc11001100_hook("I", [], "var-init");

      for (var t in e) f(e, t) && I.push(t);

      if (L) for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", O, "var-init"); n < r; n++) {
        var i = cc11001100_hook("i", A[n], "var-init");
        f(e, i) && I.push(i);
      }
      return I;
    }, "assign");
  }

  Date.now || (Date.now = cc11001100_hook("Date.now", function () {
    return new Date().getTime();
  }, "assign"));

  var _ = cc11001100_hook("_", "	\n\x0b\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff", "var-init");

  if (!String.prototype.trim || _.trim()) {
    _ = cc11001100_hook("_", "[" + _ + "]", "assign");
    var D = cc11001100_hook("D", new RegExp("^" + _ + _ + "*"), "var-init"),
        P = cc11001100_hook("P", new RegExp(_ + _ + "*$"), "var-init");
    String.prototype.trim = cc11001100_hook("String.prototype.trim", function () {
      return String(this).replace(D, "").replace(P, "");
    }, "assign");
  }

  var F = function (e) {
    if (e == null) throw new TypeError("can't convert " + e + " to object");
    return Object(e);
  };
}), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function (e, t, n) {
  "use strict";

  e("./regexp"), e("./es5-shim");
}), ace.define("ace/lib/dom", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", "http://www.w3.org/1999/xhtml", "var-init");
  t.buildDom = cc11001100_hook("t.buildDom", function s(e, t, n) {
    if (typeof e == "string" && e) {
      var r = cc11001100_hook("r", document.createTextNode(e), "var-init");
      return t && t.appendChild(r), r;
    }

    if (!Array.isArray(e)) return e;

    if (typeof e[0] != "string" || !e[0]) {
      var i = cc11001100_hook("i", [], "var-init");

      for (var o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) {
        var u = cc11001100_hook("u", s(e[o], t, n), "var-init");
        u && i.push(u);
      }

      return i;
    }

    var a = cc11001100_hook("a", document.createElement(e[0]), "var-init"),
        f = cc11001100_hook("f", e[1], "var-init"),
        l = cc11001100_hook("l", 1, "var-init");
    f && typeof f == "object" && !Array.isArray(f) && (l = cc11001100_hook("l", 2, "assign"));

    for (var o = cc11001100_hook("o", l, "var-init"); o < e.length; o++) s(e[o], a, n);

    return l == 2 && Object.keys(f).forEach(function (e) {
      var t = cc11001100_hook("t", f[e], "var-init");
      e === "class" ? a.className = cc11001100_hook("a.className", Array.isArray(t) ? t.join(" ") : t, "assign") : typeof t == "function" || e == "value" ? a[e] = cc11001100_hook("a[e]", t, "assign") : e === "ref" ? n && (n[t] = cc11001100_hook("n[t]", a, "assign")) : t != null && a.setAttribute(e, t);
    }), t && t.appendChild(a), a;
  }, "assign"), t.getDocumentHead = cc11001100_hook("t.getDocumentHead", function (e) {
    return e || (e = cc11001100_hook("e", document, "assign")), e.head || e.getElementsByTagName("head")[0] || e.documentElement;
  }, "assign"), t.createElement = cc11001100_hook("t.createElement", function (e, t) {
    return document.createElementNS ? document.createElementNS(t || r, e) : document.createElement(e);
  }, "assign"), t.hasCssClass = cc11001100_hook("t.hasCssClass", function (e, t) {
    var n = cc11001100_hook("n", (e.className + "").split(/\s+/g), "var-init");
    return n.indexOf(t) !== -1;
  }, "assign"), t.addCssClass = cc11001100_hook("t.addCssClass", function (e, n) {
    t.hasCssClass(e, n) || (e.className += cc11001100_hook("e.className", " " + n, "assign"));
  }, "assign"), t.removeCssClass = cc11001100_hook("t.removeCssClass", function (e, t) {
    var n = cc11001100_hook("n", e.className.split(/\s+/g), "var-init");

    for (;;) {
      var r = cc11001100_hook("r", n.indexOf(t), "var-init");
      if (r == -1) break;
      n.splice(r, 1);
    }

    e.className = cc11001100_hook("e.className", n.join(" "), "assign");
  }, "assign"), t.toggleCssClass = cc11001100_hook("t.toggleCssClass", function (e, t) {
    var n = cc11001100_hook("n", e.className.split(/\s+/g), "var-init"),
        r = cc11001100_hook("r", !0, "var-init");

    for (;;) {
      var i = cc11001100_hook("i", n.indexOf(t), "var-init");
      if (i == -1) break;
      r = cc11001100_hook("r", !1, "assign"), n.splice(i, 1);
    }

    return r && n.push(t), e.className = cc11001100_hook("e.className", n.join(" "), "assign"), r;
  }, "assign"), t.setCssClass = cc11001100_hook("t.setCssClass", function (e, n, r) {
    r ? t.addCssClass(e, n) : t.removeCssClass(e, n);
  }, "assign"), t.hasCssString = cc11001100_hook("t.hasCssString", function (e, t) {
    var n = cc11001100_hook("n", 0, "var-init"),
        r;
    t = cc11001100_hook("t", t || document, "assign");
    if (r = cc11001100_hook("r", t.querySelectorAll("style"), "assign")) while (n < r.length) if (r[n++].id === e) return !0;
  }, "assign"), t.importCssString = cc11001100_hook("t.importCssString", function (n, r, i) {
    var s = cc11001100_hook("s", i && i.getRootNode ? i.getRootNode() : i || document, "var-init"),
        o = cc11001100_hook("o", s.ownerDocument || s, "var-init");
    if (r && t.hasCssString(r, s)) return null;
    r && (n += cc11001100_hook("n", "\n/*# sourceURL=ace/css/" + r + " */", "assign"));
    var u = cc11001100_hook("u", t.createElement("style"), "var-init");
    u.appendChild(o.createTextNode(n)), r && (u.id = cc11001100_hook("u.id", r, "assign")), s == o && (s = cc11001100_hook("s", t.getDocumentHead(o), "assign")), s.appendChild(u);
  }, "assign"), t.importCssStylsheet = cc11001100_hook("t.importCssStylsheet", function (e, n) {
    t.buildDom("link", {
      rel: cc11001100_hook("rel", "stylesheet", "object-key-init"),
      href: cc11001100_hook("href", e, "object-key-init")
    }, t.getDocumentHead(n));
  }, "assign"), t.scrollbarWidth = cc11001100_hook("t.scrollbarWidth", function (e) {
    var n = cc11001100_hook("n", t.createElement("ace_inner"), "var-init");
    n.style.width = cc11001100_hook("n.style.width", "100%", "assign"), n.style.minWidth = cc11001100_hook("n.style.minWidth", "0px", "assign"), n.style.height = cc11001100_hook("n.style.height", "200px", "assign"), n.style.display = cc11001100_hook("n.style.display", "block", "assign");
    var r = cc11001100_hook("r", t.createElement("ace_outer"), "var-init"),
        i = cc11001100_hook("i", r.style, "var-init");
    i.position = cc11001100_hook("i.position", "absolute", "assign"), i.left = cc11001100_hook("i.left", "-10000px", "assign"), i.overflow = cc11001100_hook("i.overflow", "hidden", "assign"), i.width = cc11001100_hook("i.width", "200px", "assign"), i.minWidth = cc11001100_hook("i.minWidth", "0px", "assign"), i.height = cc11001100_hook("i.height", "150px", "assign"), i.display = cc11001100_hook("i.display", "block", "assign"), r.appendChild(n);
    var s = cc11001100_hook("s", e.documentElement, "var-init");
    s.appendChild(r);
    var o = cc11001100_hook("o", n.offsetWidth, "var-init");
    i.overflow = cc11001100_hook("i.overflow", "scroll", "assign");
    var u = cc11001100_hook("u", n.offsetWidth, "var-init");
    return o == u && (u = cc11001100_hook("u", r.clientWidth, "assign")), s.removeChild(r), o - u;
  }, "assign"), typeof document == "undefined" && (t.importCssString = cc11001100_hook("t.importCssString", function () {}, "assign")), t.computedStyle = cc11001100_hook("t.computedStyle", function (e, t) {
    return window.getComputedStyle(e, "") || {};
  }, "assign"), t.HAS_CSS_ANIMATION = cc11001100_hook("t.HAS_CSS_ANIMATION", !1, "assign");

  if (typeof document != "undefined") {
    var i = cc11001100_hook("i", document.createElement("div"), "var-init");
    typeof i.style.animationName != "undefined" && (t.HAS_CSS_ANIMATION = cc11001100_hook("t.HAS_CSS_ANIMATION", !0, "assign"));
  }
}), ace.define("ace/lib/oop", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  t.inherits = cc11001100_hook("t.inherits", function (e, t) {
    e.super_ = cc11001100_hook("e.super_", t, "assign"), e.prototype = cc11001100_hook("e.prototype", Object.create(t.prototype, {
      constructor: {
        value: cc11001100_hook("value", e, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }
    }), "assign");
  }, "assign"), t.mixin = cc11001100_hook("t.mixin", function (e, t) {
    for (var n in t) e[n] = cc11001100_hook("e[n]", t[n], "assign");

    return e;
  }, "assign"), t.implement = cc11001100_hook("t.implement", function (e, n) {
    t.mixin(e, n);
  }, "assign");
}), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], function (e, t, n) {
  "use strict";

  e("./fixoldbrowsers");
  var r = cc11001100_hook("r", e("./oop"), "var-init"),
      i = cc11001100_hook("i", function () {
    var e = cc11001100_hook("e", {
      MODIFIER_KEYS: {
        16: cc11001100_hook(16, "Shift", "object-key-init"),
        17: cc11001100_hook(17, "Ctrl", "object-key-init"),
        18: cc11001100_hook(18, "Alt", "object-key-init"),
        224: cc11001100_hook(224, "Meta", "object-key-init")
      },
      KEY_MODS: {
        ctrl: cc11001100_hook("ctrl", 1, "object-key-init"),
        alt: cc11001100_hook("alt", 2, "object-key-init"),
        option: cc11001100_hook("option", 2, "object-key-init"),
        shift: cc11001100_hook("shift", 4, "object-key-init"),
        "super": cc11001100_hook("super", 8, "object-key-init"),
        meta: cc11001100_hook("meta", 8, "object-key-init"),
        command: cc11001100_hook("command", 8, "object-key-init"),
        cmd: cc11001100_hook("cmd", 8, "object-key-init")
      },
      FUNCTION_KEYS: {
        8: cc11001100_hook(8, "Backspace", "object-key-init"),
        9: cc11001100_hook(9, "Tab", "object-key-init"),
        13: cc11001100_hook(13, "Return", "object-key-init"),
        19: cc11001100_hook(19, "Pause", "object-key-init"),
        27: cc11001100_hook(27, "Esc", "object-key-init"),
        32: cc11001100_hook(32, "Space", "object-key-init"),
        33: cc11001100_hook(33, "PageUp", "object-key-init"),
        34: cc11001100_hook(34, "PageDown", "object-key-init"),
        35: cc11001100_hook(35, "End", "object-key-init"),
        36: cc11001100_hook(36, "Home", "object-key-init"),
        37: cc11001100_hook(37, "Left", "object-key-init"),
        38: cc11001100_hook(38, "Up", "object-key-init"),
        39: cc11001100_hook(39, "Right", "object-key-init"),
        40: cc11001100_hook(40, "Down", "object-key-init"),
        44: cc11001100_hook(44, "Print", "object-key-init"),
        45: cc11001100_hook(45, "Insert", "object-key-init"),
        46: cc11001100_hook(46, "Delete", "object-key-init"),
        96: cc11001100_hook(96, "Numpad0", "object-key-init"),
        97: cc11001100_hook(97, "Numpad1", "object-key-init"),
        98: cc11001100_hook(98, "Numpad2", "object-key-init"),
        99: cc11001100_hook(99, "Numpad3", "object-key-init"),
        100: cc11001100_hook(100, "Numpad4", "object-key-init"),
        101: cc11001100_hook(101, "Numpad5", "object-key-init"),
        102: cc11001100_hook(102, "Numpad6", "object-key-init"),
        103: cc11001100_hook(103, "Numpad7", "object-key-init"),
        104: cc11001100_hook(104, "Numpad8", "object-key-init"),
        105: cc11001100_hook(105, "Numpad9", "object-key-init"),
        "-13": cc11001100_hook("-13", "NumpadEnter", "object-key-init"),
        112: cc11001100_hook(112, "F1", "object-key-init"),
        113: cc11001100_hook(113, "F2", "object-key-init"),
        114: cc11001100_hook(114, "F3", "object-key-init"),
        115: cc11001100_hook(115, "F4", "object-key-init"),
        116: cc11001100_hook(116, "F5", "object-key-init"),
        117: cc11001100_hook(117, "F6", "object-key-init"),
        118: cc11001100_hook(118, "F7", "object-key-init"),
        119: cc11001100_hook(119, "F8", "object-key-init"),
        120: cc11001100_hook(120, "F9", "object-key-init"),
        121: cc11001100_hook(121, "F10", "object-key-init"),
        122: cc11001100_hook(122, "F11", "object-key-init"),
        123: cc11001100_hook(123, "F12", "object-key-init"),
        144: cc11001100_hook(144, "Numlock", "object-key-init"),
        145: cc11001100_hook(145, "Scrolllock", "object-key-init")
      },
      PRINTABLE_KEYS: {
        32: cc11001100_hook(32, " ", "object-key-init"),
        48: cc11001100_hook(48, "0", "object-key-init"),
        49: cc11001100_hook(49, "1", "object-key-init"),
        50: cc11001100_hook(50, "2", "object-key-init"),
        51: cc11001100_hook(51, "3", "object-key-init"),
        52: cc11001100_hook(52, "4", "object-key-init"),
        53: cc11001100_hook(53, "5", "object-key-init"),
        54: cc11001100_hook(54, "6", "object-key-init"),
        55: cc11001100_hook(55, "7", "object-key-init"),
        56: cc11001100_hook(56, "8", "object-key-init"),
        57: cc11001100_hook(57, "9", "object-key-init"),
        59: cc11001100_hook(59, ";", "object-key-init"),
        61: cc11001100_hook(61, "=", "object-key-init"),
        65: cc11001100_hook(65, "a", "object-key-init"),
        66: cc11001100_hook(66, "b", "object-key-init"),
        67: cc11001100_hook(67, "c", "object-key-init"),
        68: cc11001100_hook(68, "d", "object-key-init"),
        69: cc11001100_hook(69, "e", "object-key-init"),
        70: cc11001100_hook(70, "f", "object-key-init"),
        71: cc11001100_hook(71, "g", "object-key-init"),
        72: cc11001100_hook(72, "h", "object-key-init"),
        73: cc11001100_hook(73, "i", "object-key-init"),
        74: cc11001100_hook(74, "j", "object-key-init"),
        75: cc11001100_hook(75, "k", "object-key-init"),
        76: cc11001100_hook(76, "l", "object-key-init"),
        77: cc11001100_hook(77, "m", "object-key-init"),
        78: cc11001100_hook(78, "n", "object-key-init"),
        79: cc11001100_hook(79, "o", "object-key-init"),
        80: cc11001100_hook(80, "p", "object-key-init"),
        81: cc11001100_hook(81, "q", "object-key-init"),
        82: cc11001100_hook(82, "r", "object-key-init"),
        83: cc11001100_hook(83, "s", "object-key-init"),
        84: cc11001100_hook(84, "t", "object-key-init"),
        85: cc11001100_hook(85, "u", "object-key-init"),
        86: cc11001100_hook(86, "v", "object-key-init"),
        87: cc11001100_hook(87, "w", "object-key-init"),
        88: cc11001100_hook(88, "x", "object-key-init"),
        89: cc11001100_hook(89, "y", "object-key-init"),
        90: cc11001100_hook(90, "z", "object-key-init"),
        107: cc11001100_hook(107, "+", "object-key-init"),
        109: cc11001100_hook(109, "-", "object-key-init"),
        110: cc11001100_hook(110, ".", "object-key-init"),
        186: cc11001100_hook(186, ";", "object-key-init"),
        187: cc11001100_hook(187, "=", "object-key-init"),
        188: cc11001100_hook(188, ",", "object-key-init"),
        189: cc11001100_hook(189, "-", "object-key-init"),
        190: cc11001100_hook(190, ".", "object-key-init"),
        191: cc11001100_hook(191, "/", "object-key-init"),
        192: cc11001100_hook(192, "`", "object-key-init"),
        219: cc11001100_hook(219, "[", "object-key-init"),
        220: cc11001100_hook(220, "\\", "object-key-init"),
        221: cc11001100_hook(221, "]", "object-key-init"),
        222: cc11001100_hook(222, "'", "object-key-init"),
        111: cc11001100_hook(111, "/", "object-key-init"),
        106: cc11001100_hook(106, "*", "object-key-init")
      }
    }, "var-init"),
        t,
        n;

    for (n in e.FUNCTION_KEYS) t = cc11001100_hook("t", e.FUNCTION_KEYS[n].toLowerCase(), "assign"), e[t] = cc11001100_hook("e[t]", parseInt(n, 10), "assign");

    for (n in e.PRINTABLE_KEYS) t = cc11001100_hook("t", e.PRINTABLE_KEYS[n].toLowerCase(), "assign"), e[t] = cc11001100_hook("e[t]", parseInt(n, 10), "assign");

    return r.mixin(e, e.MODIFIER_KEYS), r.mixin(e, e.PRINTABLE_KEYS), r.mixin(e, e.FUNCTION_KEYS), e.enter = cc11001100_hook("e.enter", e["return"], "assign"), e.escape = cc11001100_hook("e.escape", e.esc, "assign"), e.del = cc11001100_hook("e.del", e["delete"], "assign"), e[173] = cc11001100_hook("e[173]", "-", "assign"), function () {
      var t = cc11001100_hook("t", ["cmd", "ctrl", "alt", "shift"], "var-init");

      for (var n = cc11001100_hook("n", Math.pow(2, t.length), "var-init"); n--;) e.KEY_MODS[n] = cc11001100_hook("e.KEY_MODS[n]", t.filter(function (t) {
        return n & e.KEY_MODS[t];
      }).join("-") + "-", "assign");
    }(), e.KEY_MODS[0] = cc11001100_hook("e.KEY_MODS[0]", "", "assign"), e.KEY_MODS[-1] = cc11001100_hook("e.KEY_MODS[-1]", "input-", "assign"), e;
  }(), "var-init");
  r.mixin(t, i), t.keyCodeToString = cc11001100_hook("t.keyCodeToString", function (e) {
    var t = cc11001100_hook("t", i[e], "var-init");
    return typeof t != "string" && (t = cc11001100_hook("t", String.fromCharCode(e), "assign")), t.toLowerCase();
  }, "assign");
}), ace.define("ace/lib/useragent", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  t.OS = cc11001100_hook("t.OS", {
    LINUX: cc11001100_hook("LINUX", "LINUX", "object-key-init"),
    MAC: cc11001100_hook("MAC", "MAC", "object-key-init"),
    WINDOWS: cc11001100_hook("WINDOWS", "WINDOWS", "object-key-init")
  }, "assign"), t.getOS = cc11001100_hook("t.getOS", function () {
    return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS;
  }, "assign");
  if (typeof navigator != "object") return;
  var r = cc11001100_hook("r", (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(), "var-init"),
      i = cc11001100_hook("i", navigator.userAgent, "var-init");
  t.isWin = cc11001100_hook("t.isWin", r == "win", "assign"), t.isMac = cc11001100_hook("t.isMac", r == "mac", "assign"), t.isLinux = cc11001100_hook("t.isLinux", r == "linux", "assign"), t.isIE = cc11001100_hook("t.isIE", navigator.appName == "Microsoft Internet Explorer" || navigator.appName.indexOf("MSAppHost") >= 0 ? parseFloat((i.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((i.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), "assign"), t.isOldIE = cc11001100_hook("t.isOldIE", t.isIE && t.isIE < 9, "assign"), t.isGecko = cc11001100_hook("t.isGecko", t.isMozilla = cc11001100_hook("t.isMozilla", i.match(/ Gecko\/\d+/), "assign"), "assign"), t.isOpera = cc11001100_hook("t.isOpera", window.opera && Object.prototype.toString.call(window.opera) == "[object Opera]", "assign"), t.isWebKit = cc11001100_hook("t.isWebKit", parseFloat(i.split("WebKit/")[1]) || undefined, "assign"), t.isChrome = cc11001100_hook("t.isChrome", parseFloat(i.split(" Chrome/")[1]) || undefined, "assign"), t.isAIR = cc11001100_hook("t.isAIR", i.indexOf("AdobeAIR") >= 0, "assign"), t.isIPad = cc11001100_hook("t.isIPad", i.indexOf("iPad") >= 0, "assign"), t.isChromeOS = cc11001100_hook("t.isChromeOS", i.indexOf(" CrOS ") >= 0, "assign"), t.isIOS = cc11001100_hook("t.isIOS", /iPad|iPhone|iPod/.test(i) && !window.MSStream, "assign"), t.isIOS && (t.isMac = cc11001100_hook("t.isMac", !0, "assign"));
}), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
  "use strict";

  function a(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var a = cc11001100_hook("a", u(t), "var-init");

    if (!i.isMac && s) {
      t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (a |= cc11001100_hook("a", 8, "assign"));

      if (s.altGr) {
        if ((3 & a) == 3) return;
        s.altGr = cc11001100_hook("s.altGr", 0, "assign");
      }

      if (n === 18 || n === 17) {
        var f = cc11001100_hook("f", "location" in t ? t.location : t.keyLocation, "var-init");
        if (n === 17 && f === 1) s[n] == 1 && (o = cc11001100_hook("o", t.timeStamp, "assign"));else if (n === 18 && a === 3 && f === 2) {
          var l = cc11001100_hook("l", t.timeStamp - o, "var-init");
          l < 50 && (s.altGr = cc11001100_hook("s.altGr", !0, "assign"));
        }
      }
    }

    n in r.MODIFIER_KEYS && (n = cc11001100_hook("n", -1, "assign")), a & 8 && n >= 91 && n <= 93 && (n = cc11001100_hook("n", -1, "assign"));

    if (!a && n === 13) {
      var f = cc11001100_hook("f", "location" in t ? t.location : t.keyLocation, "var-init");

      if (f === 3) {
        e(t, a, -n);
        if (t.defaultPrevented) return;
      }
    }

    if (i.isChromeOS && a & 8) {
      e(t, a, n);
      if (t.defaultPrevented) return;
      a &= cc11001100_hook("a", -9, "assign");
    }

    return !!a || n in r.FUNCTION_KEYS || n in r.PRINTABLE_KEYS ? e(t, a, n) : !1;
  }

  function f() {
    s = cc11001100_hook("s", Object.create(null), "assign");
  }

  var r = cc11001100_hook("r", e("./keys"), "var-init"),
      i = cc11001100_hook("i", e("./useragent"), "var-init"),
      s = cc11001100_hook("s", null, "var-init"),
      o = cc11001100_hook("o", 0, "var-init");
  t.addListener = cc11001100_hook("t.addListener", function (e, t, n) {
    if (e.addEventListener) return e.addEventListener(t, n, !1);

    if (e.attachEvent) {
      var r = function () {
        n.call(e, window.event);
      };

      n._wrapper = cc11001100_hook("n._wrapper", r, "assign"), e.attachEvent("on" + t, r);
    }
  }, "assign"), t.removeListener = cc11001100_hook("t.removeListener", function (e, t, n) {
    if (e.removeEventListener) return e.removeEventListener(t, n, !1);
    e.detachEvent && e.detachEvent("on" + t, n._wrapper || n);
  }, "assign"), t.stopEvent = cc11001100_hook("t.stopEvent", function (e) {
    return t.stopPropagation(e), t.preventDefault(e), !1;
  }, "assign"), t.stopPropagation = cc11001100_hook("t.stopPropagation", function (e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = cc11001100_hook("e.cancelBubble", !0, "assign");
  }, "assign"), t.preventDefault = cc11001100_hook("t.preventDefault", function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = cc11001100_hook("e.returnValue", !1, "assign");
  }, "assign"), t.getButton = cc11001100_hook("t.getButton", function (e) {
    return e.type == "dblclick" ? 0 : e.type == "contextmenu" || i.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {
      1: cc11001100_hook(1, 0, "object-key-init"),
      2: cc11001100_hook(2, 2, "object-key-init"),
      4: cc11001100_hook(4, 1, "object-key-init")
    }[e.button];
  }, "assign"), t.capture = cc11001100_hook("t.capture", function (e, n, r) {
    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      n && n(e), r && r(e), t.removeListener(document, "mousemove", n, !0), t.removeListener(document, "mouseup", i, !0), t.removeListener(document, "dragstart", i, !0);
    }

    return t.addListener(document, "mousemove", n, !0), t.addListener(document, "mouseup", i, !0), t.addListener(document, "dragstart", i, !0), i;
  }, "assign"), t.addTouchMoveListener = cc11001100_hook("t.addTouchMoveListener", function (e, n) {
    var r, i;
    t.addListener(e, "touchstart", function (e) {
      var t = cc11001100_hook("t", e.touches, "var-init"),
          n = cc11001100_hook("n", t[0], "var-init");
      r = cc11001100_hook("r", n.clientX, "assign"), i = cc11001100_hook("i", n.clientY, "assign");
    }), t.addListener(e, "touchmove", function (e) {
      var t = cc11001100_hook("t", e.touches, "var-init");
      if (t.length > 1) return;
      var s = cc11001100_hook("s", t[0], "var-init");
      e.wheelX = cc11001100_hook("e.wheelX", r - s.clientX, "assign"), e.wheelY = cc11001100_hook("e.wheelY", i - s.clientY, "assign"), r = cc11001100_hook("r", s.clientX, "assign"), i = cc11001100_hook("i", s.clientY, "assign"), n(e);
    });
  }, "assign"), t.addMouseWheelListener = cc11001100_hook("t.addMouseWheelListener", function (e, n) {
    "onmousewheel" in e ? t.addListener(e, "mousewheel", function (e) {
      var t = cc11001100_hook("t", 8, "var-init");
      e.wheelDeltaX !== undefined ? (e.wheelX = cc11001100_hook("e.wheelX", -e.wheelDeltaX / t, "assign"), e.wheelY = cc11001100_hook("e.wheelY", -e.wheelDeltaY / t, "assign")) : (e.wheelX = cc11001100_hook("e.wheelX", 0, "assign"), e.wheelY = cc11001100_hook("e.wheelY", -e.wheelDelta / t, "assign")), n(e);
    }) : "onwheel" in e ? t.addListener(e, "wheel", function (e) {
      var t = cc11001100_hook("t", .35, "var-init");

      switch (e.deltaMode) {
        case e.DOM_DELTA_PIXEL:
          e.wheelX = cc11001100_hook("e.wheelX", e.deltaX * t || 0, "assign"), e.wheelY = cc11001100_hook("e.wheelY", e.deltaY * t || 0, "assign");
          break;

        case e.DOM_DELTA_LINE:
        case e.DOM_DELTA_PAGE:
          e.wheelX = cc11001100_hook("e.wheelX", (e.deltaX || 0) * 5, "assign"), e.wheelY = cc11001100_hook("e.wheelY", (e.deltaY || 0) * 5, "assign");
      }

      n(e);
    }) : t.addListener(e, "DOMMouseScroll", function (e) {
      e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = cc11001100_hook("e.wheelX", (e.detail || 0) * 5, "assign"), e.wheelY = cc11001100_hook("e.wheelY", 0, "assign")) : (e.wheelX = cc11001100_hook("e.wheelX", 0, "assign"), e.wheelY = cc11001100_hook("e.wheelY", (e.detail || 0) * 5, "assign")), n(e);
    });
  }, "assign"), t.addMultiMouseDownListener = cc11001100_hook("t.addMultiMouseDownListener", function (e, n, r, s) {
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      t.getButton(e) !== 0 ? o = cc11001100_hook("o", 0, "assign") : e.detail > 1 ? (o++, o > 4 && (o = cc11001100_hook("o", 1, "assign"))) : o = cc11001100_hook("o", 1, "assign");

      if (i.isIE) {
        var c = cc11001100_hook("c", Math.abs(e.clientX - u) > 5 || Math.abs(e.clientY - a) > 5, "var-init");
        if (!f || c) o = cc11001100_hook("o", 1, "assign");
        f && clearTimeout(f), f = cc11001100_hook("f", setTimeout(function () {
          f = cc11001100_hook("f", null, "assign");
        }, n[o - 1] || 600), "assign"), o == 1 && (u = cc11001100_hook("u", e.clientX, "assign"), a = cc11001100_hook("a", e.clientY, "assign"));
      }

      e._clicks = cc11001100_hook("e._clicks", o, "assign"), r[s]("mousedown", e);
      if (o > 4) o = cc11001100_hook("o", 0, "assign");else if (o > 1) return r[s](l[o], e);
    }

    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      o = cc11001100_hook("o", 2, "assign"), f && clearTimeout(f), f = cc11001100_hook("f", setTimeout(function () {
        f = cc11001100_hook("f", null, "assign");
      }, n[o - 1] || 600), "assign"), r[s]("mousedown", e), r[s](l[o], e);
    }

    var o = cc11001100_hook("o", 0, "var-init"),
        u,
        a,
        f,
        l = cc11001100_hook("l", {
      2: cc11001100_hook(2, "dblclick", "object-key-init"),
      3: cc11001100_hook(3, "tripleclick", "object-key-init"),
      4: cc11001100_hook(4, "quadclick", "object-key-init")
    }, "var-init");
    Array.isArray(e) || (e = cc11001100_hook("e", [e], "assign")), e.forEach(function (e) {
      t.addListener(e, "mousedown", c), i.isOldIE && t.addListener(e, "dblclick", h);
    });
  }, "assign");
  var u = cc11001100_hook("u", !i.isMac || !i.isOpera || "KeyboardEvent" in window ? function (e) {
    return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0);
  } : function (e) {
    return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0);
  }, "var-init");
  t.getModifierString = cc11001100_hook("t.getModifierString", function (e) {
    return r.KEY_MODS[u(e)];
  }, "assign"), t.addCommandKeyListener = cc11001100_hook("t.addCommandKeyListener", function (e, n) {
    var r = cc11001100_hook("r", t.addListener, "var-init");

    if (i.isOldGecko || i.isOpera && !("KeyboardEvent" in window)) {
      var o = cc11001100_hook("o", null, "var-init");
      r(e, "keydown", function (e) {
        o = cc11001100_hook("o", e.keyCode, "assign");
      }), r(e, "keypress", function (e) {
        return a(n, e, o);
      });
    } else {
      var u = cc11001100_hook("u", null, "var-init");
      r(e, "keydown", function (e) {
        s[e.keyCode] = cc11001100_hook("s[e.keyCode]", (s[e.keyCode] || 0) + 1, "assign");
        var t = cc11001100_hook("t", a(n, e, e.keyCode), "var-init");
        return u = cc11001100_hook("u", e.defaultPrevented, "assign"), t;
      }), r(e, "keypress", function (e) {
        u && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), u = cc11001100_hook("u", null, "assign"));
      }), r(e, "keyup", function (e) {
        s[e.keyCode] = cc11001100_hook("s[e.keyCode]", null, "assign");
      }), s || (f(), r(window, "focus", f));
    }
  }, "assign");

  if (typeof window == "object" && window.postMessage && !i.isOldIE) {
    var l = cc11001100_hook("l", 1, "var-init");
    t.nextTick = cc11001100_hook("t.nextTick", function (e, n) {
      n = cc11001100_hook("n", n || window, "assign");
      var r = cc11001100_hook("r", "zero-timeout-message-" + l, "var-init");
      t.addListener(n, "message", function i(s) {
        s.data == r && (t.stopPropagation(s), t.removeListener(n, "message", i), e());
      }), n.postMessage(r, "*");
    }, "assign");
  }

  t.$idleBlocked = cc11001100_hook("t.$idleBlocked", !1, "assign"), t.onIdle = cc11001100_hook("t.onIdle", function (e, n) {
    return setTimeout(function r() {
      t.$idleBlocked ? setTimeout(r, 100) : e();
    }, n);
  }, "assign"), t.$idleBlockId = cc11001100_hook("t.$idleBlockId", null, "assign"), t.blockIdle = cc11001100_hook("t.blockIdle", function (e) {
    t.$idleBlockId && clearTimeout(t.$idleBlockId), t.$idleBlocked = cc11001100_hook("t.$idleBlocked", !0, "assign"), t.$idleBlockId = cc11001100_hook("t.$idleBlockId", setTimeout(function () {
      t.$idleBlocked = cc11001100_hook("t.$idleBlocked", !1, "assign");
    }, e || 100), "assign");
  }, "assign"), t.nextFrame = cc11001100_hook("t.nextFrame", typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), "assign"), t.nextFrame ? t.nextFrame = cc11001100_hook("t.nextFrame", t.nextFrame.bind(window), "assign") : t.nextFrame = cc11001100_hook("t.nextFrame", function (e) {
    setTimeout(e, 17);
  }, "assign");
}), ace.define("ace/range", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  var r = function (e, t) {
    return e.row - t.row || e.column - t.column;
  },
      i = function (e, t, n, r) {
    this.start = cc11001100_hook("this.start", {
      row: cc11001100_hook("row", e, "object-key-init"),
      column: cc11001100_hook("column", t, "object-key-init")
    }, "assign"), this.end = cc11001100_hook("this.end", {
      row: cc11001100_hook("row", n, "object-key-init"),
      column: cc11001100_hook("column", r, "object-key-init")
    }, "assign");
  };

  (function () {
    this.isEqual = cc11001100_hook("this.isEqual", function (e) {
      return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column;
    }, "assign"), this.toString = cc11001100_hook("this.toString", function () {
      return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
    }, "assign"), this.contains = cc11001100_hook("this.contains", function (e, t) {
      return this.compare(e, t) == 0;
    }, "assign"), this.compareRange = cc11001100_hook("this.compareRange", function (e) {
      var t,
          n = cc11001100_hook("n", e.end, "var-init"),
          r = cc11001100_hook("r", e.start, "var-init");
      return t = cc11001100_hook("t", this.compare(n.row, n.column), "assign"), t == 1 ? (t = cc11001100_hook("t", this.compare(r.row, r.column), "assign"), t == 1 ? 2 : t == 0 ? 1 : 0) : t == -1 ? -2 : (t = cc11001100_hook("t", this.compare(r.row, r.column), "assign"), t == -1 ? -1 : t == 1 ? 42 : 0);
    }, "assign"), this.comparePoint = cc11001100_hook("this.comparePoint", function (e) {
      return this.compare(e.row, e.column);
    }, "assign"), this.containsRange = cc11001100_hook("this.containsRange", function (e) {
      return this.comparePoint(e.start) == 0 && this.comparePoint(e.end) == 0;
    }, "assign"), this.intersects = cc11001100_hook("this.intersects", function (e) {
      var t = cc11001100_hook("t", this.compareRange(e), "var-init");
      return t == -1 || t == 0 || t == 1;
    }, "assign"), this.isEnd = cc11001100_hook("this.isEnd", function (e, t) {
      return this.end.row == e && this.end.column == t;
    }, "assign"), this.isStart = cc11001100_hook("this.isStart", function (e, t) {
      return this.start.row == e && this.start.column == t;
    }, "assign"), this.setStart = cc11001100_hook("this.setStart", function (e, t) {
      typeof e == "object" ? (this.start.column = cc11001100_hook("this.start.column", e.column, "assign"), this.start.row = cc11001100_hook("this.start.row", e.row, "assign")) : (this.start.row = cc11001100_hook("this.start.row", e, "assign"), this.start.column = cc11001100_hook("this.start.column", t, "assign"));
    }, "assign"), this.setEnd = cc11001100_hook("this.setEnd", function (e, t) {
      typeof e == "object" ? (this.end.column = cc11001100_hook("this.end.column", e.column, "assign"), this.end.row = cc11001100_hook("this.end.row", e.row, "assign")) : (this.end.row = cc11001100_hook("this.end.row", e, "assign"), this.end.column = cc11001100_hook("this.end.column", t, "assign"));
    }, "assign"), this.inside = cc11001100_hook("this.inside", function (e, t) {
      return this.compare(e, t) == 0 ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1;
    }, "assign"), this.insideStart = cc11001100_hook("this.insideStart", function (e, t) {
      return this.compare(e, t) == 0 ? this.isEnd(e, t) ? !1 : !0 : !1;
    }, "assign"), this.insideEnd = cc11001100_hook("this.insideEnd", function (e, t) {
      return this.compare(e, t) == 0 ? this.isStart(e, t) ? !1 : !0 : !1;
    }, "assign"), this.compare = cc11001100_hook("this.compare", function (e, t) {
      return !this.isMultiLine() && e === this.start.row ? t < this.start.column ? -1 : t > this.end.column ? 1 : 0 : e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0;
    }, "assign"), this.compareStart = cc11001100_hook("this.compareStart", function (e, t) {
      return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t);
    }, "assign"), this.compareEnd = cc11001100_hook("this.compareEnd", function (e, t) {
      return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t);
    }, "assign"), this.compareInside = cc11001100_hook("this.compareInside", function (e, t) {
      return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t);
    }, "assign"), this.clipRows = cc11001100_hook("this.clipRows", function (e, t) {
      if (this.end.row > t) var n = cc11001100_hook("n", {
        row: cc11001100_hook("row", t + 1, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, "var-init");else if (this.end.row < e) var n = cc11001100_hook("n", {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, "var-init");
      if (this.start.row > t) var r = cc11001100_hook("r", {
        row: cc11001100_hook("row", t + 1, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, "var-init");else if (this.start.row < e) var r = cc11001100_hook("r", {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, "var-init");
      return i.fromPoints(r || this.start, n || this.end);
    }, "assign"), this.extend = cc11001100_hook("this.extend", function (e, t) {
      var n = cc11001100_hook("n", this.compare(e, t), "var-init");
      if (n == 0) return this;
      if (n == -1) var r = cc11001100_hook("r", {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", t, "object-key-init")
      }, "var-init");else var s = cc11001100_hook("s", {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", t, "object-key-init")
      }, "var-init");
      return i.fromPoints(r || this.start, s || this.end);
    }, "assign"), this.isEmpty = cc11001100_hook("this.isEmpty", function () {
      return this.start.row === this.end.row && this.start.column === this.end.column;
    }, "assign"), this.isMultiLine = cc11001100_hook("this.isMultiLine", function () {
      return this.start.row !== this.end.row;
    }, "assign"), this.clone = cc11001100_hook("this.clone", function () {
      return i.fromPoints(this.start, this.end);
    }, "assign"), this.collapseRows = cc11001100_hook("this.collapseRows", function () {
      return this.end.column == 0 ? new i(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new i(this.start.row, 0, this.end.row, 0);
    }, "assign"), this.toScreenRange = cc11001100_hook("this.toScreenRange", function (e) {
      var t = cc11001100_hook("t", e.documentToScreenPosition(this.start), "var-init"),
          n = cc11001100_hook("n", e.documentToScreenPosition(this.end), "var-init");
      return new i(t.row, t.column, n.row, n.column);
    }, "assign"), this.moveBy = cc11001100_hook("this.moveBy", function (e, t) {
      this.start.row += cc11001100_hook("this.start.row", e, "assign"), this.start.column += cc11001100_hook("this.start.column", t, "assign"), this.end.row += cc11001100_hook("this.end.row", e, "assign"), this.end.column += cc11001100_hook("this.end.column", t, "assign");
    }, "assign");
  }).call(i.prototype), i.fromPoints = cc11001100_hook("i.fromPoints", function (e, t) {
    return new i(e.row, e.column, t.row, t.column);
  }, "assign"), i.comparePoints = cc11001100_hook("i.comparePoints", r, "assign"), i.comparePoints = cc11001100_hook("i.comparePoints", function (e, t) {
    return e.row - t.row || e.column - t.column;
  }, "assign"), t.Range = cc11001100_hook("t.Range", i, "assign");
}), ace.define("ace/lib/lang", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  t.last = cc11001100_hook("t.last", function (e) {
    return e[e.length - 1];
  }, "assign"), t.stringReverse = cc11001100_hook("t.stringReverse", function (e) {
    return e.split("").reverse().join("");
  }, "assign"), t.stringRepeat = cc11001100_hook("t.stringRepeat", function (e, t) {
    var n = cc11001100_hook("n", "", "var-init");

    while (t > 0) {
      t & 1 && (n += cc11001100_hook("n", e, "assign"));
      if (t >>= cc11001100_hook("t", 1, "assign")) e += cc11001100_hook("e", e, "assign");
    }

    return n;
  }, "assign");
  var r = cc11001100_hook("r", /^\s\s*/, "var-init"),
      i = cc11001100_hook("i", /\s\s*$/, "var-init");
  t.stringTrimLeft = cc11001100_hook("t.stringTrimLeft", function (e) {
    return e.replace(r, "");
  }, "assign"), t.stringTrimRight = cc11001100_hook("t.stringTrimRight", function (e) {
    return e.replace(i, "");
  }, "assign"), t.copyObject = cc11001100_hook("t.copyObject", function (e) {
    var t = cc11001100_hook("t", {}, "var-init");

    for (var n in e) t[n] = cc11001100_hook("t[n]", e[n], "assign");

    return t;
  }, "assign"), t.copyArray = cc11001100_hook("t.copyArray", function (e) {
    var t = cc11001100_hook("t", [], "var-init");

    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) e[n] && typeof e[n] == "object" ? t[n] = cc11001100_hook("t[n]", this.copyObject(e[n]), "assign") : t[n] = cc11001100_hook("t[n]", e[n], "assign");

    return t;
  }, "assign"), t.deepCopy = cc11001100_hook("t.deepCopy", function s(e) {
    if (typeof e != "object" || !e) return e;
    var t;

    if (Array.isArray(e)) {
      t = cc11001100_hook("t", [], "assign");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) t[n] = cc11001100_hook("t[n]", s(e[n]), "assign");

      return t;
    }

    if (Object.prototype.toString.call(e) !== "[object Object]") return e;
    t = cc11001100_hook("t", {}, "assign");

    for (var n in e) t[n] = cc11001100_hook("t[n]", s(e[n]), "assign");

    return t;
  }, "assign"), t.arrayToMap = cc11001100_hook("t.arrayToMap", function (e) {
    var t = cc11001100_hook("t", {}, "var-init");

    for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) t[e[n]] = cc11001100_hook("t[e[n]]", 1, "assign");

    return t;
  }, "assign"), t.createMap = cc11001100_hook("t.createMap", function (e) {
    var t = cc11001100_hook("t", Object.create(null), "var-init");

    for (var n in e) t[n] = cc11001100_hook("t[n]", e[n], "assign");

    return t;
  }, "assign"), t.arrayRemove = cc11001100_hook("t.arrayRemove", function (e, t) {
    for (var n = cc11001100_hook("n", 0, "var-init"); n <= e.length; n++) t === e[n] && e.splice(n, 1);
  }, "assign"), t.escapeRegExp = cc11001100_hook("t.escapeRegExp", function (e) {
    return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
  }, "assign"), t.escapeHTML = cc11001100_hook("t.escapeHTML", function (e) {
    return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
  }, "assign"), t.getMatchOffsets = cc11001100_hook("t.getMatchOffsets", function (e, t) {
    var n = cc11001100_hook("n", [], "var-init");
    return e.replace(t, function (e) {
      n.push({
        offset: cc11001100_hook("offset", arguments[arguments.length - 2], "object-key-init"),
        length: cc11001100_hook("length", e.length, "object-key-init")
      });
    }), n;
  }, "assign"), t.deferredCall = cc11001100_hook("t.deferredCall", function (e) {
    var t = cc11001100_hook("t", null, "var-init"),
        n = function () {
      t = cc11001100_hook("t", null, "assign"), e();
    },
        r = function (e) {
      return r.cancel(), t = cc11001100_hook("t", setTimeout(n, e || 0), "assign"), r;
    };

    return r.schedule = cc11001100_hook("r.schedule", r, "assign"), r.call = cc11001100_hook("r.call", function () {
      return this.cancel(), e(), r;
    }, "assign"), r.cancel = cc11001100_hook("r.cancel", function () {
      return clearTimeout(t), t = cc11001100_hook("t", null, "assign"), r;
    }, "assign"), r.isPending = cc11001100_hook("r.isPending", function () {
      return t;
    }, "assign"), r;
  }, "assign"), t.delayedCall = cc11001100_hook("t.delayedCall", function (e, t) {
    var n = cc11001100_hook("n", null, "var-init"),
        r = function () {
      n = cc11001100_hook("n", null, "assign"), e();
    },
        i = function (e) {
      n == null && (n = cc11001100_hook("n", setTimeout(r, e || t), "assign"));
    };

    return i.delay = cc11001100_hook("i.delay", function (e) {
      n && clearTimeout(n), n = cc11001100_hook("n", setTimeout(r, e || t), "assign");
    }, "assign"), i.schedule = cc11001100_hook("i.schedule", i, "assign"), i.call = cc11001100_hook("i.call", function () {
      this.cancel(), e();
    }, "assign"), i.cancel = cc11001100_hook("i.cancel", function () {
      n && clearTimeout(n), n = cc11001100_hook("n", null, "assign");
    }, "assign"), i.isPending = cc11001100_hook("i.isPending", function () {
      return n;
    }, "assign"), i;
  }, "assign");
}), ace.define("ace/keyboard/textinput_ios", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/lib/keys"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/event"), "var-init"),
      i = cc11001100_hook("i", e("../lib/useragent"), "var-init"),
      s = cc11001100_hook("s", e("../lib/dom"), "var-init"),
      o = cc11001100_hook("o", e("../lib/lang"), "var-init"),
      u = cc11001100_hook("u", e("../lib/keys"), "var-init"),
      a = cc11001100_hook("a", u.KEY_MODS, "var-init"),
      f = cc11001100_hook("f", i.isChrome < 18, "var-init"),
      l = cc11001100_hook("l", i.isIE, "var-init"),
      c = function (e, t) {
    function x(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (m) return;
      m = cc11001100_hook("m", !0, "assign");
      if (k) t = cc11001100_hook("t", 0, "assign"), n = cc11001100_hook("n", e ? 0 : c.value.length - 1, "assign");else var t = cc11001100_hook("t", 4, "var-init"),
          n = cc11001100_hook("n", 5, "var-init");

      try {
        c.setSelectionRange(t, n);
      } catch (r) {}

      m = cc11001100_hook("m", !1, "assign");
    }

    function T() {
      if (m) return;
      c.value = cc11001100_hook("c.value", h, "assign"), i.isWebKit && S.schedule();
    }

    function R() {
      clearTimeout(q), q = cc11001100_hook("q", setTimeout(function () {
        g && (c.style.cssText = cc11001100_hook("c.style.cssText", g, "assign"), g = cc11001100_hook("g", "", "assign")), t.renderer.$keepTextAreaAtCursor == null && (t.renderer.$keepTextAreaAtCursor = cc11001100_hook("t.renderer.$keepTextAreaAtCursor", !0, "assign"), t.renderer.$moveTextAreaToCursor());
      }, 0), "assign");
    }

    var n = cc11001100_hook("n", this, "var-init"),
        c = cc11001100_hook("c", s.createElement("textarea"), "var-init");
    c.className = cc11001100_hook("c.className", i.isIOS ? "ace_text-input ace_text-input-ios" : "ace_text-input", "assign"), i.isTouchPad && c.setAttribute("x-palm-disable-auto-cap", !0), c.setAttribute("wrap", "off"), c.setAttribute("autocorrect", "off"), c.setAttribute("autocapitalize", "off"), c.setAttribute("spellcheck", !1), c.style.opacity = cc11001100_hook("c.style.opacity", "0", "assign"), e.insertBefore(c, e.firstChild);
    var h = cc11001100_hook("h", "\n aaaa a\n", "var-init"),
        p = cc11001100_hook("p", !1, "var-init"),
        d = cc11001100_hook("d", !1, "var-init"),
        v = cc11001100_hook("v", !1, "var-init"),
        m = cc11001100_hook("m", !1, "var-init"),
        g = cc11001100_hook("g", "", "var-init"),
        y = cc11001100_hook("y", !0, "var-init");

    try {
      var b = cc11001100_hook("b", document.activeElement === c, "var-init");
    } catch (w) {}

    r.addListener(c, "blur", function (e) {
      t.onBlur(e), b = cc11001100_hook("b", !1, "assign");
    }), r.addListener(c, "focus", function (e) {
      b = cc11001100_hook("b", !0, "assign"), t.onFocus(e), x();
    }), this.focus = cc11001100_hook("this.focus", function () {
      if (g) return c.focus();
      c.style.position = cc11001100_hook("c.style.position", "fixed", "assign"), c.focus();
    }, "assign"), this.blur = cc11001100_hook("this.blur", function () {
      c.blur();
    }, "assign"), this.isFocused = cc11001100_hook("this.isFocused", function () {
      return b;
    }, "assign");
    var E = cc11001100_hook("E", o.delayedCall(function () {
      b && x(y);
    }), "var-init"),
        S = cc11001100_hook("S", o.delayedCall(function () {
      m || (c.value = cc11001100_hook("c.value", h, "assign"), b && x());
    }), "var-init");
    i.isWebKit || t.addEventListener("changeSelection", function () {
      t.selection.isEmpty() != y && (y = cc11001100_hook("y", !y, "assign"), E.schedule());
    }), T(), b && t.onFocus();

    var N = function (e) {
      return e.selectionStart === 0 && e.selectionEnd === e.value.length;
    },
        C = function (e) {
      N(c) ? (t.selectAll(), x()) : k && x(t.selection.isEmpty());
    },
        k = cc11001100_hook("k", null, "var-init");

    this.setInputHandler = cc11001100_hook("this.setInputHandler", function (e) {
      k = cc11001100_hook("k", e, "assign");
    }, "assign"), this.getInputHandler = cc11001100_hook("this.getInputHandler", function () {
      return k;
    }, "assign");

    var L = cc11001100_hook("L", !1, "var-init"),
        A = function (e) {
      if (c.selectionStart === 4 && c.selectionEnd === 5) return;
      k && (e = cc11001100_hook("e", k(e), "assign"), k = cc11001100_hook("k", null, "assign")), v ? (x(), e && t.onPaste(e), v = cc11001100_hook("v", !1, "assign")) : e == h.substr(0) && c.selectionStart === 4 ? L ? t.execCommand("del", {
        source: cc11001100_hook("source", "ace", "object-key-init")
      }) : t.execCommand("backspace", {
        source: cc11001100_hook("source", "ace", "object-key-init")
      }) : p || (e.substring(0, 9) == h && e.length > h.length ? e = cc11001100_hook("e", e.substr(9), "assign") : e.substr(0, 4) == h.substr(0, 4) ? e = cc11001100_hook("e", e.substr(4, e.length - h.length + 1), "assign") : e.charAt(e.length - 1) == h.charAt(0) && (e = cc11001100_hook("e", e.slice(0, -1), "assign")), e != h.charAt(0) && e.charAt(e.length - 1) == h.charAt(0) && (e = cc11001100_hook("e", e.slice(0, -1), "assign")), e && t.onTextInput(e)), p && (p = cc11001100_hook("p", !1, "assign")), L && (L = cc11001100_hook("L", !1, "assign"));
    },
        O = function (e) {
      if (m) return;
      var t = cc11001100_hook("t", c.value, "var-init");
      A(t), T();
    },
        M = function (e, t, n) {
      var r = cc11001100_hook("r", e.clipboardData || window.clipboardData, "var-init");
      if (!r || f) return;
      var i = cc11001100_hook("i", l || n ? "Text" : "text/plain", "var-init");

      try {
        return t ? r.setData(i, t) !== !1 : r.getData(i);
      } catch (e) {
        if (!n) return M(e, t, !0);
      }
    },
        _ = function (e, n) {
      var s = cc11001100_hook("s", t.getCopyText(), "var-init");
      if (!s) return r.preventDefault(e);
      M(e, s) ? (i.isIOS && (d = cc11001100_hook("d", n, "assign"), c.value = cc11001100_hook("c.value", "\n aa" + s + "a a\n", "assign"), c.setSelectionRange(4, 4 + s.length), p = cc11001100_hook("p", {
        value: cc11001100_hook("value", s, "object-key-init")
      }, "assign")), n ? t.onCut() : t.onCopy(), i.isIOS || r.preventDefault(e)) : (p = cc11001100_hook("p", !0, "assign"), c.value = cc11001100_hook("c.value", s, "assign"), c.select(), setTimeout(function () {
        p = cc11001100_hook("p", !1, "assign"), T(), x(), n ? t.onCut() : t.onCopy();
      }));
    },
        D = function (e) {
      _(e, !0);
    },
        P = function (e) {
      _(e, !1);
    },
        H = function (e) {
      var n = cc11001100_hook("n", M(e), "var-init");
      typeof n == "string" ? (n && t.onPaste(n, e), i.isIE && setTimeout(x), r.preventDefault(e)) : (c.value = cc11001100_hook("c.value", "", "assign"), v = cc11001100_hook("v", !0, "assign"));
    };

    r.addCommandKeyListener(c, t.onCommandKey.bind(t)), r.addListener(c, "select", C), r.addListener(c, "input", O), r.addListener(c, "cut", D), r.addListener(c, "copy", P), r.addListener(c, "paste", H);

    var B = function (e) {
      if (m || !t.onCompositionStart || t.$readOnly) return;
      m = cc11001100_hook("m", {}, "assign"), m.canUndo = cc11001100_hook("m.canUndo", t.session.$undoManager, "assign"), t.onCompositionStart(), setTimeout(j, 0), t.on("mousedown", F), m.canUndo && !t.selection.isEmpty() && (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup();
    },
        j = function () {
      if (!m || !t.onCompositionUpdate || t.$readOnly) return;
      var e = cc11001100_hook("e", c.value.replace(/\x01/g, ""), "var-init");
      if (m.lastValue === e) return;
      t.onCompositionUpdate(e), m.lastValue && t.undo(), m.canUndo && (m.lastValue = cc11001100_hook("m.lastValue", e, "assign"));

      if (m.lastValue) {
        var n = cc11001100_hook("n", t.selection.getRange(), "var-init");
        t.insert(m.lastValue), t.session.markUndoGroup(), m.range = cc11001100_hook("m.range", t.selection.getRange(), "assign"), t.selection.setRange(n), t.selection.clearSelection();
      }
    },
        F = function (e) {
      if (!t.onCompositionEnd || t.$readOnly) return;
      var n = cc11001100_hook("n", m, "var-init");
      m = cc11001100_hook("m", !1, "assign");
      var r = cc11001100_hook("r", setTimeout(function () {
        r = cc11001100_hook("r", null, "assign");
        var e = cc11001100_hook("e", c.value.replace(/\x01/g, ""), "var-init");
        if (m) return;
        e == n.lastValue ? T() : !n.lastValue && e && (T(), A(e));
      }), "var-init");
      k = cc11001100_hook("k", function (i) {
        return r && clearTimeout(r), i = cc11001100_hook("i", i.replace(/\x01/g, ""), "assign"), i == n.lastValue ? "" : (n.lastValue && r && t.undo(), i);
      }, "assign"), t.onCompositionEnd(), t.removeListener("mousedown", F), e.type == "compositionend" && n.range && t.selection.setRange(n.range);
      var s = cc11001100_hook("s", !!i.isChrome && i.isChrome >= 53 || !!i.isWebKit && i.isWebKit >= 603, "var-init");
      s && O();
    },
        I = cc11001100_hook("I", o.delayedCall(j, 50), "var-init");

    r.addListener(c, "compositionstart", B), r.addListener(c, "compositionupdate", function () {
      I.schedule();
    }), r.addListener(c, "keyup", function () {
      I.schedule();
    }), r.addListener(c, "keydown", function () {
      I.schedule();
    }), r.addListener(c, "compositionend", F), this.getElement = cc11001100_hook("this.getElement", function () {
      return c;
    }, "assign"), this.setReadOnly = cc11001100_hook("this.setReadOnly", function (e) {
      c.readOnly = cc11001100_hook("c.readOnly", e, "assign");
    }, "assign"), this.onContextMenu = cc11001100_hook("this.onContextMenu", function (e) {
      L = cc11001100_hook("L", !0, "assign"), x(t.selection.isEmpty()), t._emit("nativecontextmenu", {
        target: cc11001100_hook("target", t, "object-key-init"),
        domEvent: cc11001100_hook("domEvent", e, "object-key-init")
      }), this.moveToMouse(e, !0);
    }, "assign"), this.moveToMouse = cc11001100_hook("this.moveToMouse", function (e, n) {
      g || (g = cc11001100_hook("g", c.style.cssText, "assign")), c.style.cssText = cc11001100_hook("c.style.cssText", (n ? "z-index:100000;" : "") + "height:" + c.style.height + ";" + (i.isIE ? "opacity:0.1;" : ""), "assign");

      var o = cc11001100_hook("o", t.container.getBoundingClientRect(), "var-init"),
          u = cc11001100_hook("u", s.computedStyle(t.container), "var-init"),
          a = cc11001100_hook("a", o.top + (parseInt(u.borderTopWidth) || 0), "var-init"),
          f = cc11001100_hook("f", o.left + (parseInt(o.borderLeftWidth) || 0), "var-init"),
          l = cc11001100_hook("l", o.bottom - a - c.clientHeight - 2, "var-init"),
          h = function (e) {
        c.style.left = cc11001100_hook("c.style.left", e.clientX - f - 2 + "px", "assign"), c.style.top = cc11001100_hook("c.style.top", Math.min(e.clientY - a - 2, l) + "px", "assign");
      };

      h(e);
      if (e.type != "mousedown") return;
      t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = cc11001100_hook("t.renderer.$keepTextAreaAtCursor", null, "assign")), clearTimeout(q), i.isWin && r.capture(t.container, h, R);
    }, "assign"), this.onContextMenuClose = cc11001100_hook("this.onContextMenuClose", R, "assign");

    var q,
        U = function (e) {
      t.textInput.onContextMenu(e), R();
    };

    r.addListener(c, "mouseup", U), r.addListener(c, "mousedown", function (e) {
      e.preventDefault(), R();
    }), r.addListener(t.renderer.scroller, "contextmenu", U), r.addListener(c, "contextmenu", U);

    if (i.isIOS) {
      var z = cc11001100_hook("z", null, "var-init"),
          W = cc11001100_hook("W", !1, "var-init");
      e.addEventListener("keydown", function (e) {
        z && clearTimeout(z), W = cc11001100_hook("W", !0, "assign");
      }), e.addEventListener("keyup", function (e) {
        z = cc11001100_hook("z", setTimeout(function () {
          W = cc11001100_hook("W", !1, "assign");
        }, 100), "assign");
      });

      var X = function (e) {
        if (document.activeElement !== c) return;
        if (W) return;
        if (d) return setTimeout(function () {
          d = cc11001100_hook("d", !1, "assign");
        }, 100);
        var n = cc11001100_hook("n", c.selectionStart, "var-init"),
            r = cc11001100_hook("r", c.selectionEnd, "var-init");
        c.setSelectionRange(4, 5);
        if (n == r) switch (n) {
          case 0:
            t.onCommandKey(null, 0, u.up);
            break;

          case 1:
            t.onCommandKey(null, 0, u.home);
            break;

          case 2:
            t.onCommandKey(null, a.option, u.left);
            break;

          case 4:
            t.onCommandKey(null, 0, u.left);
            break;

          case 5:
            t.onCommandKey(null, 0, u.right);
            break;

          case 7:
            t.onCommandKey(null, a.option, u.right);
            break;

          case 8:
            t.onCommandKey(null, 0, u.end);
            break;

          case 9:
            t.onCommandKey(null, 0, u.down);
        } else {
          switch (r) {
            case 6:
              t.onCommandKey(null, a.shift, u.right);
              break;

            case 7:
              t.onCommandKey(null, a.shift | a.option, u.right);
              break;

            case 8:
              t.onCommandKey(null, a.shift, u.end);
              break;

            case 9:
              t.onCommandKey(null, a.shift, u.down);
          }

          switch (n) {
            case 0:
              t.onCommandKey(null, a.shift, u.up);
              break;

            case 1:
              t.onCommandKey(null, a.shift, u.home);
              break;

            case 2:
              t.onCommandKey(null, a.shift | a.option, u.left);
              break;

            case 3:
              t.onCommandKey(null, a.shift, u.left);
          }
        }
      };

      document.addEventListener("selectionchange", X), t.on("destroy", function () {
        document.removeEventListener("selectionchange", X);
      });
    }
  };

  t.TextInput = cc11001100_hook("t.TextInput", c, "assign");
}), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/keyboard/textinput_ios"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/event"), "var-init"),
      i = cc11001100_hook("i", e("../lib/useragent"), "var-init"),
      s = cc11001100_hook("s", e("../lib/dom"), "var-init"),
      o = cc11001100_hook("o", e("../lib/lang"), "var-init"),
      u = cc11001100_hook("u", i.isChrome < 18, "var-init"),
      a = cc11001100_hook("a", i.isIE, "var-init"),
      f = cc11001100_hook("f", i.isChrome > 63, "var-init"),
      l = cc11001100_hook("l", e("./textinput_ios").TextInput, "var-init"),
      c = function (e, t) {
    function T(e) {
      cc11001100_hook("e", e, "function-parameter");
      e = cc11001100_hook("e", y ? !1 : e, "assign");
      if (v) return;
      v = cc11001100_hook("v", !0, "assign");
      if (L) var t = cc11001100_hook("t", 0, "var-init"),
          r = cc11001100_hook("r", e ? 0 : n.value.length - 1, "var-init");else var t = cc11001100_hook("t", e ? 2 : 1, "var-init"),
          r = cc11001100_hook("r", 2, "var-init");

      try {
        n.setSelectionRange(t, r);
      } catch (i) {}

      v = cc11001100_hook("v", !1, "assign");
    }

    function N() {
      if (v) return;
      n.value = cc11001100_hook("n.value", c, "assign"), i.isWebKit && x.schedule();
    }

    function U() {
      clearTimeout(R), R = cc11001100_hook("R", setTimeout(function () {
        m && (n.style.cssText = cc11001100_hook("n.style.cssText", m, "assign"), m = cc11001100_hook("m", "", "assign")), t.renderer.$keepTextAreaAtCursor == null && (t.renderer.$keepTextAreaAtCursor = cc11001100_hook("t.renderer.$keepTextAreaAtCursor", !0, "assign"), t.renderer.$moveTextAreaToCursor());
      }, 0), "assign");
    }

    if (i.isIOS) return l.call(this, e, t);
    var n = cc11001100_hook("n", s.createElement("textarea"), "var-init");
    n.className = cc11001100_hook("n.className", "ace_text-input", "assign"), n.setAttribute("wrap", "off"), n.setAttribute("autocorrect", "off"), n.setAttribute("autocapitalize", "off"), n.setAttribute("spellcheck", !1), n.style.opacity = cc11001100_hook("n.style.opacity", "0", "assign"), e.insertBefore(n, e.firstChild);
    var c = cc11001100_hook("c", i.isIE ? "\x01\x01" : "\u2028\u2028", "var-init"),
        h = cc11001100_hook("h", i.isIE ? /\x01/g : /\u2028/g, "var-init"),
        p = cc11001100_hook("p", !1, "var-init"),
        d = cc11001100_hook("d", !1, "var-init"),
        v = cc11001100_hook("v", !1, "var-init"),
        m = cc11001100_hook("m", "", "var-init"),
        g = cc11001100_hook("g", !0, "var-init"),
        y = cc11001100_hook("y", !1, "var-init"),
        b = cc11001100_hook("b", !1, "var-init");

    try {
      var w = cc11001100_hook("w", document.activeElement === n, "var-init");
    } catch (E) {}

    r.addListener(n, "blur", function (e) {
      t.onBlur(e), w = cc11001100_hook("w", !1, "assign");
    }), r.addListener(n, "focus", function (e) {
      w = cc11001100_hook("w", !0, "assign"), t.onFocus(e), T();
    }), this.$focusScroll = cc11001100_hook("this.$focusScroll", !1, "assign"), this.focus = cc11001100_hook("this.focus", function () {
      if (m || f || this.$focusScroll == "browser") return n.focus({
        preventScroll: cc11001100_hook("preventScroll", !0, "object-key-init")
      });
      var e = cc11001100_hook("e", n.style.top, "var-init");
      n.style.position = cc11001100_hook("n.style.position", "fixed", "assign"), n.style.top = cc11001100_hook("n.style.top", "0px", "assign");
      var t = cc11001100_hook("t", n.getBoundingClientRect().top != 0, "var-init"),
          r = cc11001100_hook("r", [], "var-init");

      if (t) {
        var i = cc11001100_hook("i", n.parentElement, "var-init");

        while (i && i.nodeType == 1) r.push(i), i.setAttribute("ace_nocontext", !0), !i.parentElement && i.getRootNode ? i = cc11001100_hook("i", i.getRootNode().host, "assign") : i = cc11001100_hook("i", i.parentElement, "assign");
      }

      n.focus({
        preventScroll: cc11001100_hook("preventScroll", !0, "object-key-init")
      }), t && r.forEach(function (e) {
        e.removeAttribute("ace_nocontext");
      }), setTimeout(function () {
        n.style.position = cc11001100_hook("n.style.position", "", "assign"), n.style.top == "0px" && (n.style.top = cc11001100_hook("n.style.top", e, "assign"));
      }, 0);
    }, "assign"), this.blur = cc11001100_hook("this.blur", function () {
      n.blur();
    }, "assign"), this.isFocused = cc11001100_hook("this.isFocused", function () {
      return w;
    }, "assign");
    var S = cc11001100_hook("S", o.delayedCall(function () {
      w && T(g);
    }), "var-init"),
        x = cc11001100_hook("x", o.delayedCall(function () {
      v || (n.value = cc11001100_hook("n.value", c, "assign"), w && T());
    }), "var-init");
    i.isWebKit || t.addEventListener("changeSelection", function () {
      t.selection.isEmpty() != g && (g = cc11001100_hook("g", !g, "assign"), S.schedule());
    }), N(), w && t.onFocus();

    var C = function (e) {
      return e.selectionStart === 0 && e.selectionEnd === e.value.length;
    },
        k = function (e) {
      p ? p = cc11001100_hook("p", !1, "assign") : C(n) ? (t.selectAll(), T()) : L && T(t.selection.isEmpty());
    },
        L = cc11001100_hook("L", null, "var-init");

    this.setInputHandler = cc11001100_hook("this.setInputHandler", function (e) {
      L = cc11001100_hook("L", e, "assign");
    }, "assign"), this.getInputHandler = cc11001100_hook("this.getInputHandler", function () {
      return L;
    }, "assign");

    var A = cc11001100_hook("A", !1, "var-init"),
        O = function (e) {
      L && (e = cc11001100_hook("e", L(e), "assign"), L = cc11001100_hook("L", null, "assign")), d ? (T(), e && t.onPaste(e), d = cc11001100_hook("d", !1, "assign")) : e == c.charAt(0) ? A ? t.execCommand("del", {
        source: cc11001100_hook("source", "ace", "object-key-init")
      }) : t.execCommand("backspace", {
        source: cc11001100_hook("source", "ace", "object-key-init")
      }) : (e.substring(0, 2) == c ? e = cc11001100_hook("e", e.substr(2), "assign") : e.charAt(0) == c.charAt(0) ? e = cc11001100_hook("e", e.substr(1), "assign") : e.charAt(e.length - 1) == c.charAt(0) && (e = cc11001100_hook("e", e.slice(0, -1), "assign")), e.charAt(e.length - 1) == c.charAt(0) && (e = cc11001100_hook("e", e.slice(0, -1), "assign")), e && t.onTextInput(e)), A && (A = cc11001100_hook("A", !1, "assign"));
    },
        M = function (e) {
      if (v) return;
      var t = cc11001100_hook("t", n.value, "var-init");
      O(t), N();
    },
        _ = function (e, t, n) {
      var r = cc11001100_hook("r", e.clipboardData || window.clipboardData, "var-init");
      if (!r || u) return;
      var i = cc11001100_hook("i", a || n ? "Text" : "text/plain", "var-init");

      try {
        return t ? r.setData(i, t) !== !1 : r.getData(i);
      } catch (e) {
        if (!n) return _(e, t, !0);
      }
    },
        D = function (e, i) {
      var s = cc11001100_hook("s", t.getCopyText(), "var-init");
      if (!s) return r.preventDefault(e);
      _(e, s) ? (i ? t.onCut() : t.onCopy(), r.preventDefault(e)) : (p = cc11001100_hook("p", !0, "assign"), n.value = cc11001100_hook("n.value", s, "assign"), n.select(), setTimeout(function () {
        p = cc11001100_hook("p", !1, "assign"), N(), T(), i ? t.onCut() : t.onCopy();
      }));
    },
        P = function (e) {
      D(e, !0);
    },
        H = function (e) {
      D(e, !1);
    },
        B = function (e) {
      var s = cc11001100_hook("s", _(e), "var-init");
      typeof s == "string" ? (s && t.onPaste(s, e), i.isIE && setTimeout(T), r.preventDefault(e)) : (n.value = cc11001100_hook("n.value", "", "assign"), d = cc11001100_hook("d", !0, "assign"));
    };

    r.addCommandKeyListener(n, t.onCommandKey.bind(t)), r.addListener(n, "select", k), r.addListener(n, "input", M), r.addListener(n, "cut", P), r.addListener(n, "copy", H), r.addListener(n, "paste", B), (!("oncut" in n) || !("oncopy" in n) || !("onpaste" in n)) && r.addListener(e, "keydown", function (e) {
      if (i.isMac && !e.metaKey || !e.ctrlKey) return;

      switch (e.keyCode) {
        case 67:
          H(e);
          break;

        case 86:
          B(e);
          break;

        case 88:
          P(e);
      }
    });

    var j = function (e) {
      if (v || !t.onCompositionStart || t.$readOnly) return;
      v = cc11001100_hook("v", {}, "assign"), v.canUndo = cc11001100_hook("v.canUndo", t.session.$undoManager, "assign"), t.onCompositionStart(), setTimeout(F, 0), t.on("mousedown", I), v.canUndo && !t.selection.isEmpty() && (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup();
    },
        F = function () {
      if (!v || !t.onCompositionUpdate || t.$readOnly) return;
      var e = cc11001100_hook("e", n.value.replace(h, ""), "var-init");
      if (v.lastValue === e) return;
      t.onCompositionUpdate(e), v.lastValue && t.undo(), v.canUndo && (v.lastValue = cc11001100_hook("v.lastValue", e, "assign"));

      if (v.lastValue) {
        var r = cc11001100_hook("r", t.selection.getRange(), "var-init");
        t.insert(v.lastValue), t.session.markUndoGroup(), v.range = cc11001100_hook("v.range", t.selection.getRange(), "assign"), t.selection.setRange(r), t.selection.clearSelection();
      }
    },
        I = function (e) {
      if (!t.onCompositionEnd || t.$readOnly) return;
      var r = cc11001100_hook("r", v, "var-init");
      v = cc11001100_hook("v", !1, "assign");
      var s = cc11001100_hook("s", setTimeout(function () {
        s = cc11001100_hook("s", null, "assign");
        var e = cc11001100_hook("e", n.value.replace(h, ""), "var-init");
        if (v) return;
        e == r.lastValue ? N() : !r.lastValue && e && (N(), O(e));
      }), "var-init");
      L = cc11001100_hook("L", function (n) {
        return s && clearTimeout(s), n = cc11001100_hook("n", n.replace(h, ""), "assign"), n == r.lastValue ? "" : (r.lastValue && s && t.undo(), n);
      }, "assign"), t.onCompositionEnd(), t.removeListener("mousedown", I), e.type == "compositionend" && r.range && t.selection.setRange(r.range);
      var o = cc11001100_hook("o", i.isIE || i.isChrome && i.isChrome >= 53 || i.isWebKit && i.isWebKit >= 603, "var-init");
      o && M();
    },
        q = cc11001100_hook("q", o.delayedCall(F, 50), "var-init");

    r.addListener(n, "compositionstart", j), r.addListener(n, "compositionupdate", function () {
      q.schedule();
    }), r.addListener(n, "keyup", function () {
      q.schedule();
    }), r.addListener(n, "keydown", function () {
      q.schedule();
    }), r.addListener(n, "compositionend", I), this.getElement = cc11001100_hook("this.getElement", function () {
      return n;
    }, "assign"), this.setCommandMode = cc11001100_hook("this.setCommandMode", function (e) {
      b = cc11001100_hook("b", e, "assign"), n.readOnly = cc11001100_hook("n.readOnly", !1, "assign");
    }, "assign"), this.setReadOnly = cc11001100_hook("this.setReadOnly", function (e) {
      b || (n.readOnly = cc11001100_hook("n.readOnly", e, "assign"));
    }, "assign"), this.setCopyWithEmptySelection = cc11001100_hook("this.setCopyWithEmptySelection", function (e) {
      y = cc11001100_hook("y", e, "assign");
    }, "assign"), this.onContextMenu = cc11001100_hook("this.onContextMenu", function (e) {
      A = cc11001100_hook("A", !0, "assign"), T(t.selection.isEmpty()), t._emit("nativecontextmenu", {
        target: cc11001100_hook("target", t, "object-key-init"),
        domEvent: cc11001100_hook("domEvent", e, "object-key-init")
      }), this.moveToMouse(e, !0);
    }, "assign"), this.moveToMouse = cc11001100_hook("this.moveToMouse", function (e, o) {
      m || (m = cc11001100_hook("m", n.style.cssText, "assign")), n.style.cssText = cc11001100_hook("n.style.cssText", (o ? "z-index:100000;" : "") + "height:" + n.style.height + ";" + (i.isIE ? "opacity:0.1;" : ""), "assign");

      var u = cc11001100_hook("u", t.container.getBoundingClientRect(), "var-init"),
          a = cc11001100_hook("a", s.computedStyle(t.container), "var-init"),
          f = cc11001100_hook("f", u.top + (parseInt(a.borderTopWidth) || 0), "var-init"),
          l = cc11001100_hook("l", u.left + (parseInt(u.borderLeftWidth) || 0), "var-init"),
          c = cc11001100_hook("c", u.bottom - f - n.clientHeight - 2, "var-init"),
          h = function (e) {
        n.style.left = cc11001100_hook("n.style.left", e.clientX - l - 2 + "px", "assign"), n.style.top = cc11001100_hook("n.style.top", Math.min(e.clientY - f - 2, c) + "px", "assign");
      };

      h(e);
      if (e.type != "mousedown") return;
      t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = cc11001100_hook("t.renderer.$keepTextAreaAtCursor", null, "assign")), clearTimeout(R), i.isWin && r.capture(t.container, h, U);
    }, "assign"), this.onContextMenuClose = cc11001100_hook("this.onContextMenuClose", U, "assign");

    var R,
        z = function (e) {
      t.textInput.onContextMenu(e), U();
    };

    r.addListener(n, "mouseup", z), r.addListener(n, "mousedown", function (e) {
      e.preventDefault(), U();
    }), r.addListener(t.renderer.scroller, "contextmenu", z), r.addListener(n, "contextmenu", z);
  };

  t.TextInput = cc11001100_hook("t.TextInput", c, "assign");
}), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
  "use strict";

  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.$clickSelection = cc11001100_hook("e.$clickSelection", null, "assign");
    var t = cc11001100_hook("t", e.editor, "var-init");
    t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e)), t.setDefaultHandler("touchmove", this.onTouchMove.bind(e));
    var n = cc11001100_hook("n", ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"], "var-init");
    n.forEach(function (t) {
      e[t] = cc11001100_hook("e[t]", this[t], "assign");
    }, this), e.selectByLines = cc11001100_hook("e.selectByLines", this.extendSelectionBy.bind(e, "getLineRange"), "assign"), e.selectByWords = cc11001100_hook("e.selectByWords", this.extendSelectionBy.bind(e, "getWordRange"), "assign");
  }

  function f(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2));
  }

  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e.start.row == e.end.row) var n = cc11001100_hook("n", 2 * t.column - e.start.column - e.end.column, "var-init");else if (e.start.row == e.end.row - 1 && !e.start.column && !e.end.column) var n = cc11001100_hook("n", t.column - 4, "var-init");else var n = cc11001100_hook("n", 2 * t.row - e.start.row - e.end.row, "var-init");
    return n < 0 ? {
      cursor: cc11001100_hook("cursor", e.start, "object-key-init"),
      anchor: cc11001100_hook("anchor", e.end, "object-key-init")
    } : {
      cursor: cc11001100_hook("cursor", e.end, "object-key-init"),
      anchor: cc11001100_hook("anchor", e.start, "object-key-init")
    };
  }

  var r = cc11001100_hook("r", e("../lib/dom"), "var-init"),
      i = cc11001100_hook("i", e("../lib/event"), "var-init"),
      s = cc11001100_hook("s", e("../lib/useragent"), "var-init"),
      o = cc11001100_hook("o", 0, "var-init"),
      u = cc11001100_hook("u", 250, "var-init");
  (function () {
    this.onMouseDown = cc11001100_hook("this.onMouseDown", function (e) {
      var t = cc11001100_hook("t", e.inSelection(), "var-init"),
          n = cc11001100_hook("n", e.getDocumentPosition(), "var-init");
      this.mousedownEvent = cc11001100_hook("this.mousedownEvent", e, "assign");
      var r = cc11001100_hook("r", this.editor, "var-init"),
          i = cc11001100_hook("i", e.getButton(), "var-init");

      if (i !== 0) {
        var o = cc11001100_hook("o", r.getSelectionRange(), "var-init"),
            u = cc11001100_hook("u", o.isEmpty(), "var-init");
        (u || i == 1) && r.selection.moveToPosition(n), i == 2 && (r.textInput.onContextMenu(e.domEvent), s.isMozilla || e.preventDefault());
        return;
      }

      this.mousedownEvent.time = cc11001100_hook("this.mousedownEvent.time", Date.now(), "assign");

      if (t && !r.isFocused()) {
        r.focus();

        if (this.$focusTimeout && !this.$clickSelection && !r.inMultiSelectMode) {
          this.setState("focusWait"), this.captureMouse(e);
          return;
        }
      }

      return this.captureMouse(e), this.startSelect(n, e.domEvent._clicks > 1), e.preventDefault();
    }, "assign"), this.startSelect = cc11001100_hook("this.startSelect", function (e, t) {
      e = cc11001100_hook("e", e || this.editor.renderer.screenToTextCoordinates(this.x, this.y), "assign");
      var n = cc11001100_hook("n", this.editor, "var-init");
      this.mousedownEvent.getShiftKey() ? n.selection.selectToPosition(e) : t || n.selection.moveToPosition(e), t || this.select(), n.renderer.scroller.setCapture && n.renderer.scroller.setCapture(), n.setStyle("ace_selecting"), this.setState("select");
    }, "assign"), this.select = cc11001100_hook("this.select", function () {
      var e,
          t = cc11001100_hook("t", this.editor, "var-init"),
          n = cc11001100_hook("n", t.renderer.screenToTextCoordinates(this.x, this.y), "var-init");

      if (this.$clickSelection) {
        var r = cc11001100_hook("r", this.$clickSelection.comparePoint(n), "var-init");
        if (r == -1) e = cc11001100_hook("e", this.$clickSelection.end, "assign");else if (r == 1) e = cc11001100_hook("e", this.$clickSelection.start, "assign");else {
          var i = cc11001100_hook("i", l(this.$clickSelection, n), "var-init");
          n = cc11001100_hook("n", i.cursor, "assign"), e = cc11001100_hook("e", i.anchor, "assign");
        }
        t.selection.setSelectionAnchor(e.row, e.column);
      }

      t.selection.selectToPosition(n), t.renderer.scrollCursorIntoView();
    }, "assign"), this.extendSelectionBy = cc11001100_hook("this.extendSelectionBy", function (e) {
      var t,
          n = cc11001100_hook("n", this.editor, "var-init"),
          r = cc11001100_hook("r", n.renderer.screenToTextCoordinates(this.x, this.y), "var-init"),
          i = cc11001100_hook("i", n.selection[e](r.row, r.column), "var-init");

      if (this.$clickSelection) {
        var s = cc11001100_hook("s", this.$clickSelection.comparePoint(i.start), "var-init"),
            o = cc11001100_hook("o", this.$clickSelection.comparePoint(i.end), "var-init");

        if (s == -1 && o <= 0) {
          t = cc11001100_hook("t", this.$clickSelection.end, "assign");
          if (i.end.row != r.row || i.end.column != r.column) r = cc11001100_hook("r", i.start, "assign");
        } else if (o == 1 && s >= 0) {
          t = cc11001100_hook("t", this.$clickSelection.start, "assign");
          if (i.start.row != r.row || i.start.column != r.column) r = cc11001100_hook("r", i.end, "assign");
        } else if (s == -1 && o == 1) r = cc11001100_hook("r", i.end, "assign"), t = cc11001100_hook("t", i.start, "assign");else {
          var u = cc11001100_hook("u", l(this.$clickSelection, r), "var-init");
          r = cc11001100_hook("r", u.cursor, "assign"), t = cc11001100_hook("t", u.anchor, "assign");
        }

        n.selection.setSelectionAnchor(t.row, t.column);
      }

      n.selection.selectToPosition(r), n.renderer.scrollCursorIntoView();
    }, "assign"), this.selectEnd = cc11001100_hook("this.selectEnd", this.selectAllEnd = cc11001100_hook("this.selectAllEnd", this.selectByWordsEnd = cc11001100_hook("this.selectByWordsEnd", this.selectByLinesEnd = cc11001100_hook("this.selectByLinesEnd", function () {
      this.$clickSelection = cc11001100_hook("this.$clickSelection", null, "assign"), this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture();
    }, "assign"), "assign"), "assign"), "assign"), this.focusWait = cc11001100_hook("this.focusWait", function () {
      var e = cc11001100_hook("e", f(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), "var-init"),
          t = cc11001100_hook("t", Date.now(), "var-init");
      (e > o || t - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
    }, "assign"), this.onDoubleClick = cc11001100_hook("this.onDoubleClick", function (e) {
      var t = cc11001100_hook("t", e.getDocumentPosition(), "var-init"),
          n = cc11001100_hook("n", this.editor, "var-init"),
          r = cc11001100_hook("r", n.session, "var-init"),
          i = cc11001100_hook("i", r.getBracketRange(t), "var-init");
      i ? (i.isEmpty() && (i.start.column--, i.end.column++), this.setState("select")) : (i = cc11001100_hook("i", n.selection.getWordRange(t.row, t.column), "assign"), this.setState("selectByWords")), this.$clickSelection = cc11001100_hook("this.$clickSelection", i, "assign"), this.select();
    }, "assign"), this.onTripleClick = cc11001100_hook("this.onTripleClick", function (e) {
      var t = cc11001100_hook("t", e.getDocumentPosition(), "var-init"),
          n = cc11001100_hook("n", this.editor, "var-init");
      this.setState("selectByLines");
      var r = cc11001100_hook("r", n.getSelectionRange(), "var-init");
      r.isMultiLine() && r.contains(t.row, t.column) ? (this.$clickSelection = cc11001100_hook("this.$clickSelection", n.selection.getLineRange(r.start.row), "assign"), this.$clickSelection.end = cc11001100_hook("this.$clickSelection.end", n.selection.getLineRange(r.end.row).end, "assign")) : this.$clickSelection = cc11001100_hook("this.$clickSelection", n.selection.getLineRange(t.row), "assign"), this.select();
    }, "assign"), this.onQuadClick = cc11001100_hook("this.onQuadClick", function (e) {
      var t = cc11001100_hook("t", this.editor, "var-init");
      t.selectAll(), this.$clickSelection = cc11001100_hook("this.$clickSelection", t.getSelectionRange(), "assign"), this.setState("selectAll");
    }, "assign"), this.onMouseWheel = cc11001100_hook("this.onMouseWheel", function (e) {
      if (e.getAccelKey()) return;
      e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = cc11001100_hook("e.wheelX", e.wheelY, "assign"), e.wheelY = cc11001100_hook("e.wheelY", 0, "assign"));
      var t = cc11001100_hook("t", this.editor, "var-init");
      this.$lastScroll || (this.$lastScroll = cc11001100_hook("this.$lastScroll", {
        t: cc11001100_hook("t", 0, "object-key-init"),
        vx: cc11001100_hook("vx", 0, "object-key-init"),
        vy: cc11001100_hook("vy", 0, "object-key-init"),
        allowed: cc11001100_hook("allowed", 0, "object-key-init")
      }, "assign"));
      var n = cc11001100_hook("n", this.$lastScroll, "var-init"),
          r = cc11001100_hook("r", e.domEvent.timeStamp, "var-init"),
          i = cc11001100_hook("i", r - n.t, "var-init"),
          s = cc11001100_hook("s", i ? e.wheelX / i : n.vx, "var-init"),
          o = cc11001100_hook("o", i ? e.wheelY / i : n.vy, "var-init");
      i < u && (s = cc11001100_hook("s", (s + n.vx) / 2, "assign"), o = cc11001100_hook("o", (o + n.vy) / 2, "assign"));
      var a = cc11001100_hook("a", Math.abs(s / o), "var-init"),
          f = cc11001100_hook("f", !1, "var-init");
      a >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed, 0) && (f = cc11001100_hook("f", !0, "assign")), a <= 1 && t.renderer.isScrollableBy(0, e.wheelY * e.speed) && (f = cc11001100_hook("f", !0, "assign"));
      if (f) n.allowed = cc11001100_hook("n.allowed", r, "assign");else if (r - n.allowed < u) {
        var l = cc11001100_hook("l", Math.abs(s) <= 1.1 * Math.abs(n.vx) && Math.abs(o) <= 1.1 * Math.abs(n.vy), "var-init");
        l ? (f = cc11001100_hook("f", !0, "assign"), n.allowed = cc11001100_hook("n.allowed", r, "assign")) : n.allowed = cc11001100_hook("n.allowed", 0, "assign");
      }
      n.t = cc11001100_hook("n.t", r, "assign"), n.vx = cc11001100_hook("n.vx", s, "assign"), n.vy = cc11001100_hook("n.vy", o, "assign");
      if (f) return t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop();
    }, "assign"), this.onTouchMove = cc11001100_hook("this.onTouchMove", function (e) {
      this.editor._emit("mousewheel", e);
    }, "assign");
  }).call(a.prototype), t.DefaultHandlers = cc11001100_hook("t.DefaultHandlers", a, "assign");
}), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function (e, t, n) {
  "use strict";

  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.isOpen = cc11001100_hook("this.isOpen", !1, "assign"), this.$element = cc11001100_hook("this.$element", null, "assign"), this.$parentNode = cc11001100_hook("this.$parentNode", e, "assign");
  }

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/dom"), "var-init");
  (function () {
    this.$init = cc11001100_hook("this.$init", function () {
      return this.$element = cc11001100_hook("this.$element", i.createElement("div"), "assign"), this.$element.className = cc11001100_hook("this.$element.className", "ace_tooltip", "assign"), this.$element.style.display = cc11001100_hook("this.$element.style.display", "none", "assign"), this.$parentNode.appendChild(this.$element), this.$element;
    }, "assign"), this.getElement = cc11001100_hook("this.getElement", function () {
      return this.$element || this.$init();
    }, "assign"), this.setText = cc11001100_hook("this.setText", function (e) {
      this.getElement().textContent = cc11001100_hook("this.getElement().textContent", e, "assign");
    }, "assign"), this.setHtml = cc11001100_hook("this.setHtml", function (e) {
      this.getElement().innerHTML = cc11001100_hook("this.getElement().innerHTML", e, "assign");
    }, "assign"), this.setPosition = cc11001100_hook("this.setPosition", function (e, t) {
      this.getElement().style.left = cc11001100_hook("this.getElement().style.left", e + "px", "assign"), this.getElement().style.top = cc11001100_hook("this.getElement().style.top", t + "px", "assign");
    }, "assign"), this.setClassName = cc11001100_hook("this.setClassName", function (e) {
      i.addCssClass(this.getElement(), e);
    }, "assign"), this.show = cc11001100_hook("this.show", function (e, t, n) {
      e != null && this.setText(e), t != null && n != null && this.setPosition(t, n), this.isOpen || (this.getElement().style.display = cc11001100_hook("this.getElement().style.display", "block", "assign"), this.isOpen = cc11001100_hook("this.isOpen", !0, "assign"));
    }, "assign"), this.hide = cc11001100_hook("this.hide", function () {
      this.isOpen && (this.getElement().style.display = cc11001100_hook("this.getElement().style.display", "none", "assign"), this.isOpen = cc11001100_hook("this.isOpen", !1, "assign"));
    }, "assign"), this.getHeight = cc11001100_hook("this.getHeight", function () {
      return this.getElement().offsetHeight;
    }, "assign"), this.getWidth = cc11001100_hook("this.getWidth", function () {
      return this.getElement().offsetWidth;
    }, "assign"), this.destroy = cc11001100_hook("this.destroy", function () {
      this.isOpen = cc11001100_hook("this.isOpen", !1, "assign"), this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    }, "assign");
  }).call(s.prototype), t.Tooltip = cc11001100_hook("t.Tooltip", s, "assign");
}), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function (e, t, n) {
  "use strict";

  function u(e) {
    cc11001100_hook("e", e, "function-parameter");

    function l() {
      var r = cc11001100_hook("r", u.getDocumentPosition().row, "var-init"),
          s = cc11001100_hook("s", n.$annotations[r], "var-init");
      if (!s) return c();
      var o = cc11001100_hook("o", t.session.getLength(), "var-init");

      if (r == o) {
        var a = cc11001100_hook("a", t.renderer.pixelToScreenCoordinates(0, u.y).row, "var-init"),
            l = cc11001100_hook("l", u.$pos, "var-init");
        if (a > t.session.documentToScreenRow(l.row, l.column)) return c();
      }

      if (f == s) return;
      f = cc11001100_hook("f", s.text.join("<br/>"), "assign"), i.setHtml(f), i.show(), t._signal("showGutterTooltip", i), t.on("mousewheel", c);
      if (e.$tooltipFollowsMouse) h(u);else {
        var p = cc11001100_hook("p", u.domEvent.target, "var-init"),
            d = cc11001100_hook("d", p.getBoundingClientRect(), "var-init"),
            v = cc11001100_hook("v", i.getElement().style, "var-init");
        v.left = cc11001100_hook("v.left", d.right + "px", "assign"), v.top = cc11001100_hook("v.top", d.bottom + "px", "assign");
      }
    }

    function c() {
      o && (o = cc11001100_hook("o", clearTimeout(o), "assign")), f && (i.hide(), f = cc11001100_hook("f", null, "assign"), t._signal("hideGutterTooltip", i), t.removeEventListener("mousewheel", c));
    }

    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      i.setPosition(e.x, e.y);
    }

    var t = cc11001100_hook("t", e.editor, "var-init"),
        n = cc11001100_hook("n", t.renderer.$gutterLayer, "var-init"),
        i = cc11001100_hook("i", new a(t.container), "var-init");
    e.editor.setDefaultHandler("guttermousedown", function (r) {
      if (!t.isFocused() || r.getButton() != 0) return;
      var i = cc11001100_hook("i", n.getRegion(r), "var-init");
      if (i == "foldWidgets") return;
      var s = cc11001100_hook("s", r.getDocumentPosition().row, "var-init"),
          o = cc11001100_hook("o", t.session.selection, "var-init");
      if (r.getShiftKey()) o.selectTo(s, 0);else {
        if (r.domEvent.detail == 2) return t.selectAll(), r.preventDefault();
        e.$clickSelection = cc11001100_hook("e.$clickSelection", t.selection.getLineRange(s), "assign");
      }
      return e.setState("selectByLines"), e.captureMouse(r), r.preventDefault();
    });
    var o, u, f;
    e.editor.setDefaultHandler("guttermousemove", function (t) {
      var n = cc11001100_hook("n", t.domEvent.target || t.domEvent.srcElement, "var-init");
      if (r.hasCssClass(n, "ace_fold-widget")) return c();
      f && e.$tooltipFollowsMouse && h(t), u = cc11001100_hook("u", t, "assign");
      if (o) return;
      o = cc11001100_hook("o", setTimeout(function () {
        o = cc11001100_hook("o", null, "assign"), u && !e.isMousePressed ? l() : c();
      }, 50), "assign");
    }), s.addListener(t.renderer.$gutter, "mouseout", function (e) {
      u = cc11001100_hook("u", null, "assign");
      if (!f || o) return;
      o = cc11001100_hook("o", setTimeout(function () {
        o = cc11001100_hook("o", null, "assign"), c();
      }, 50), "assign");
    }), t.on("changeSession", c);
  }

  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    o.call(this, e);
  }

  var r = cc11001100_hook("r", e("../lib/dom"), "var-init"),
      i = cc11001100_hook("i", e("../lib/oop"), "var-init"),
      s = cc11001100_hook("s", e("../lib/event"), "var-init"),
      o = cc11001100_hook("o", e("../tooltip").Tooltip, "var-init");
  i.inherits(a, o), function () {
    this.setPosition = cc11001100_hook("this.setPosition", function (e, t) {
      var n = cc11001100_hook("n", window.innerWidth || document.documentElement.clientWidth, "var-init"),
          r = cc11001100_hook("r", window.innerHeight || document.documentElement.clientHeight, "var-init"),
          i = cc11001100_hook("i", this.getWidth(), "var-init"),
          s = cc11001100_hook("s", this.getHeight(), "var-init");
      e += cc11001100_hook("e", 15, "assign"), t += cc11001100_hook("t", 15, "assign"), e + i > n && (e -= cc11001100_hook("e", e + i - n, "assign")), t + s > r && (t -= cc11001100_hook("t", 20 + s, "assign")), o.prototype.setPosition.call(this, e, t);
    }, "assign");
  }.call(a.prototype), t.GutterHandler = cc11001100_hook("t.GutterHandler", u, "assign");
}), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/event"), "var-init"),
      i = cc11001100_hook("i", e("../lib/useragent"), "var-init"),
      s = cc11001100_hook("s", t.MouseEvent = cc11001100_hook("t.MouseEvent", function (e, t) {
    this.domEvent = cc11001100_hook("this.domEvent", e, "assign"), this.editor = cc11001100_hook("this.editor", t, "assign"), this.x = cc11001100_hook("this.x", this.clientX = cc11001100_hook("this.clientX", e.clientX, "assign"), "assign"), this.y = cc11001100_hook("this.y", this.clientY = cc11001100_hook("this.clientY", e.clientY, "assign"), "assign"), this.$pos = cc11001100_hook("this.$pos", null, "assign"), this.$inSelection = cc11001100_hook("this.$inSelection", null, "assign"), this.propagationStopped = cc11001100_hook("this.propagationStopped", !1, "assign"), this.defaultPrevented = cc11001100_hook("this.defaultPrevented", !1, "assign");
  }, "assign"), "var-init");
  (function () {
    this.stopPropagation = cc11001100_hook("this.stopPropagation", function () {
      r.stopPropagation(this.domEvent), this.propagationStopped = cc11001100_hook("this.propagationStopped", !0, "assign");
    }, "assign"), this.preventDefault = cc11001100_hook("this.preventDefault", function () {
      r.preventDefault(this.domEvent), this.defaultPrevented = cc11001100_hook("this.defaultPrevented", !0, "assign");
    }, "assign"), this.stop = cc11001100_hook("this.stop", function () {
      this.stopPropagation(), this.preventDefault();
    }, "assign"), this.getDocumentPosition = cc11001100_hook("this.getDocumentPosition", function () {
      return this.$pos ? this.$pos : (this.$pos = cc11001100_hook("this.$pos", this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), "assign"), this.$pos);
    }, "assign"), this.inSelection = cc11001100_hook("this.inSelection", function () {
      if (this.$inSelection !== null) return this.$inSelection;
      var e = cc11001100_hook("e", this.editor, "var-init"),
          t = cc11001100_hook("t", e.getSelectionRange(), "var-init");
      if (t.isEmpty()) this.$inSelection = cc11001100_hook("this.$inSelection", !1, "assign");else {
        var n = cc11001100_hook("n", this.getDocumentPosition(), "var-init");
        this.$inSelection = cc11001100_hook("this.$inSelection", t.contains(n.row, n.column), "assign");
      }
      return this.$inSelection;
    }, "assign"), this.getButton = cc11001100_hook("this.getButton", function () {
      return r.getButton(this.domEvent);
    }, "assign"), this.getShiftKey = cc11001100_hook("this.getShiftKey", function () {
      return this.domEvent.shiftKey;
    }, "assign"), this.getAccelKey = cc11001100_hook("this.getAccelKey", i.isMac ? function () {
      return this.domEvent.metaKey;
    } : function () {
      return this.domEvent.ctrlKey;
    }, "assign");
  }).call(s.prototype);
}), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
  "use strict";

  function f(e) {
    cc11001100_hook("e", e, "function-parameter");

    function T(e, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", Date.now(), "var-init"),
          i = cc11001100_hook("i", !n || e.row != n.row, "var-init"),
          s = cc11001100_hook("s", !n || e.column != n.column, "var-init");
      if (!S || i || s) t.moveCursorToPosition(e), S = cc11001100_hook("S", r, "assign"), x = cc11001100_hook("x", {
        x: cc11001100_hook("x", p, "object-key-init"),
        y: cc11001100_hook("y", d, "object-key-init")
      }, "assign");else {
        var o = cc11001100_hook("o", l(x.x, x.y, p, d), "var-init");
        o > a ? S = cc11001100_hook("S", null, "assign") : r - S >= u && (t.renderer.scrollCursorIntoView(), S = cc11001100_hook("S", null, "assign"));
      }
    }

    function N(e, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", Date.now(), "var-init"),
          i = cc11001100_hook("i", t.renderer.layerConfig.lineHeight, "var-init"),
          s = cc11001100_hook("s", t.renderer.layerConfig.characterWidth, "var-init"),
          u = cc11001100_hook("u", t.renderer.scroller.getBoundingClientRect(), "var-init"),
          a = cc11001100_hook("a", {
        x: {
          left: cc11001100_hook("left", p - u.left, "object-key-init"),
          right: cc11001100_hook("right", u.right - p, "object-key-init")
        },
        y: {
          top: cc11001100_hook("top", d - u.top, "object-key-init"),
          bottom: cc11001100_hook("bottom", u.bottom - d, "object-key-init")
        }
      }, "var-init"),
          f = cc11001100_hook("f", Math.min(a.x.left, a.x.right), "var-init"),
          l = cc11001100_hook("l", Math.min(a.y.top, a.y.bottom), "var-init"),
          c = cc11001100_hook("c", {
        row: cc11001100_hook("row", e.row, "object-key-init"),
        column: cc11001100_hook("column", e.column, "object-key-init")
      }, "var-init");
      f / s <= 2 && (c.column += cc11001100_hook("c.column", a.x.left < a.x.right ? -3 : 2, "assign")), l / i <= 1 && (c.row += cc11001100_hook("c.row", a.y.top < a.y.bottom ? -1 : 1, "assign"));
      var h = cc11001100_hook("h", e.row != c.row, "var-init"),
          v = cc11001100_hook("v", e.column != c.column, "var-init"),
          m = cc11001100_hook("m", !n || e.row != n.row, "var-init");
      h || v && !m ? E ? r - E >= o && t.renderer.scrollCursorIntoView(c) : E = cc11001100_hook("E", r, "assign") : E = cc11001100_hook("E", null, "assign");
    }

    function C() {
      var e = cc11001100_hook("e", g, "var-init");
      g = cc11001100_hook("g", t.renderer.screenToTextCoordinates(p, d), "assign"), T(g, e), N(g, e);
    }

    function k() {
      m = cc11001100_hook("m", t.selection.toOrientedRange(), "assign"), h = cc11001100_hook("h", t.session.addMarker(m, "ace_selection", t.getSelectionStyle()), "assign"), t.clearSelection(), t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1), clearInterval(v), C(), v = cc11001100_hook("v", setInterval(C, 20), "assign"), y = cc11001100_hook("y", 0, "assign"), i.addListener(document, "mousemove", O);
    }

    function L() {
      clearInterval(v), t.session.removeMarker(h), h = cc11001100_hook("h", null, "assign"), t.selection.fromOrientedRange(m), t.isFocused() && !w && t.renderer.$cursorLayer.setBlinking(!t.getReadOnly()), m = cc11001100_hook("m", null, "assign"), g = cc11001100_hook("g", null, "assign"), y = cc11001100_hook("y", 0, "assign"), E = cc11001100_hook("E", null, "assign"), S = cc11001100_hook("S", null, "assign"), i.removeListener(document, "mousemove", O);
    }

    function O() {
      A == null && (A = cc11001100_hook("A", setTimeout(function () {
        A != null && h && L();
      }, 20), "assign"));
    }

    function M(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.types, "var-init");
      return !t || Array.prototype.some.call(t, function (e) {
        return e == "text/plain" || e == "Text";
      });
    }

    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", ["copy", "copymove", "all", "uninitialized"], "var-init"),
          n = cc11001100_hook("n", ["move", "copymove", "linkmove", "all", "uninitialized"], "var-init"),
          r = cc11001100_hook("r", s.isMac ? e.altKey : e.ctrlKey, "var-init"),
          i = cc11001100_hook("i", "uninitialized", "var-init");

      try {
        i = cc11001100_hook("i", e.dataTransfer.effectAllowed.toLowerCase(), "assign");
      } catch (e) {}

      var o = cc11001100_hook("o", "none", "var-init");
      return r && t.indexOf(i) >= 0 ? o = cc11001100_hook("o", "copy", "assign") : n.indexOf(i) >= 0 ? o = cc11001100_hook("o", "move", "assign") : t.indexOf(i) >= 0 && (o = cc11001100_hook("o", "copy", "assign")), o;
    }

    var t = cc11001100_hook("t", e.editor, "var-init"),
        n = cc11001100_hook("n", r.createElement("img"), "var-init");
    n.src = cc11001100_hook("n.src", "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", "assign"), s.isOpera && (n.style.cssText = cc11001100_hook("n.style.cssText", "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;", "assign"));
    var f = cc11001100_hook("f", ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"], "var-init");
    f.forEach(function (t) {
      e[t] = cc11001100_hook("e[t]", this[t], "assign");
    }, this), t.addEventListener("mousedown", this.onMouseDown.bind(e));
    var c = cc11001100_hook("c", t.container, "var-init"),
        h,
        p,
        d,
        v,
        m,
        g,
        y = cc11001100_hook("y", 0, "var-init"),
        b,
        w,
        E,
        S,
        x;
    this.onDragStart = cc11001100_hook("this.onDragStart", function (e) {
      if (this.cancelDrag || !c.draggable) {
        var r = cc11001100_hook("r", this, "var-init");
        return setTimeout(function () {
          r.startSelect(), r.captureMouse(e);
        }, 0), e.preventDefault();
      }

      m = cc11001100_hook("m", t.getSelectionRange(), "assign");
      var i = cc11001100_hook("i", e.dataTransfer, "var-init");
      i.effectAllowed = cc11001100_hook("i.effectAllowed", t.getReadOnly() ? "copy" : "copyMove", "assign"), s.isOpera && (t.container.appendChild(n), n.scrollTop = cc11001100_hook("n.scrollTop", 0, "assign")), i.setDragImage && i.setDragImage(n, 0, 0), s.isOpera && t.container.removeChild(n), i.clearData(), i.setData("Text", t.session.getTextRange()), w = cc11001100_hook("w", !0, "assign"), this.setState("drag");
    }, "assign"), this.onDragEnd = cc11001100_hook("this.onDragEnd", function (e) {
      c.draggable = cc11001100_hook("c.draggable", !1, "assign"), w = cc11001100_hook("w", !1, "assign"), this.setState(null);

      if (!t.getReadOnly()) {
        var n = cc11001100_hook("n", e.dataTransfer.dropEffect, "var-init");
        !b && n == "move" && t.session.remove(t.getSelectionRange()), t.renderer.$cursorLayer.setBlinking(!0);
      }

      this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
    }, "assign"), this.onDragEnter = cc11001100_hook("this.onDragEnter", function (e) {
      if (t.getReadOnly() || !M(e.dataTransfer)) return;
      return p = cc11001100_hook("p", e.clientX, "assign"), d = cc11001100_hook("d", e.clientY, "assign"), h || k(), y++, e.dataTransfer.dropEffect = cc11001100_hook("e.dataTransfer.dropEffect", b = cc11001100_hook("b", _(e), "assign"), "assign"), i.preventDefault(e);
    }, "assign"), this.onDragOver = cc11001100_hook("this.onDragOver", function (e) {
      if (t.getReadOnly() || !M(e.dataTransfer)) return;
      return p = cc11001100_hook("p", e.clientX, "assign"), d = cc11001100_hook("d", e.clientY, "assign"), h || (k(), y++), A !== null && (A = cc11001100_hook("A", null, "assign")), e.dataTransfer.dropEffect = cc11001100_hook("e.dataTransfer.dropEffect", b = cc11001100_hook("b", _(e), "assign"), "assign"), i.preventDefault(e);
    }, "assign"), this.onDragLeave = cc11001100_hook("this.onDragLeave", function (e) {
      y--;
      if (y <= 0 && h) return L(), b = cc11001100_hook("b", null, "assign"), i.preventDefault(e);
    }, "assign"), this.onDrop = cc11001100_hook("this.onDrop", function (e) {
      if (!g) return;
      var n = cc11001100_hook("n", e.dataTransfer, "var-init");
      if (w) switch (b) {
        case "move":
          m.contains(g.row, g.column) ? m = cc11001100_hook("m", {
            start: cc11001100_hook("start", g, "object-key-init"),
            end: cc11001100_hook("end", g, "object-key-init")
          }, "assign") : m = cc11001100_hook("m", t.moveText(m, g), "assign");
          break;

        case "copy":
          m = cc11001100_hook("m", t.moveText(m, g, !0), "assign");
      } else {
        var r = cc11001100_hook("r", n.getData("Text"), "var-init");
        m = cc11001100_hook("m", {
          start: cc11001100_hook("start", g, "object-key-init"),
          end: cc11001100_hook("end", t.session.insert(g, r), "object-key-init")
        }, "assign"), t.focus(), b = cc11001100_hook("b", null, "assign");
      }
      return L(), i.preventDefault(e);
    }, "assign"), i.addListener(c, "dragstart", this.onDragStart.bind(e)), i.addListener(c, "dragend", this.onDragEnd.bind(e)), i.addListener(c, "dragenter", this.onDragEnter.bind(e)), i.addListener(c, "dragover", this.onDragOver.bind(e)), i.addListener(c, "dragleave", this.onDragLeave.bind(e)), i.addListener(c, "drop", this.onDrop.bind(e));
    var A = cc11001100_hook("A", null, "var-init");
  }

  function l(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2));
  }

  var r = cc11001100_hook("r", e("../lib/dom"), "var-init"),
      i = cc11001100_hook("i", e("../lib/event"), "var-init"),
      s = cc11001100_hook("s", e("../lib/useragent"), "var-init"),
      o = cc11001100_hook("o", 200, "var-init"),
      u = cc11001100_hook("u", 200, "var-init"),
      a = cc11001100_hook("a", 5, "var-init");
  (function () {
    this.dragWait = cc11001100_hook("this.dragWait", function () {
      var e = cc11001100_hook("e", Date.now() - this.mousedownEvent.time, "var-init");
      e > this.editor.getDragDelay() && this.startDrag();
    }, "assign"), this.dragWaitEnd = cc11001100_hook("this.dragWaitEnd", function () {
      var e = cc11001100_hook("e", this.editor.container, "var-init");
      e.draggable = cc11001100_hook("e.draggable", !1, "assign"), this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd();
    }, "assign"), this.dragReadyEnd = cc11001100_hook("this.dragReadyEnd", function (e) {
      this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd();
    }, "assign"), this.startDrag = cc11001100_hook("this.startDrag", function () {
      this.cancelDrag = cc11001100_hook("this.cancelDrag", !1, "assign");
      var e = cc11001100_hook("e", this.editor, "var-init"),
          t = cc11001100_hook("t", e.container, "var-init");
      t.draggable = cc11001100_hook("t.draggable", !0, "assign"), e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
      var n = cc11001100_hook("n", s.isWin ? "default" : "move", "var-init");
      e.renderer.setCursorStyle(n), this.setState("dragReady");
    }, "assign"), this.onMouseDrag = cc11001100_hook("this.onMouseDrag", function (e) {
      var t = cc11001100_hook("t", this.editor.container, "var-init");

      if (s.isIE && this.state == "dragReady") {
        var n = cc11001100_hook("n", l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), "var-init");
        n > 3 && t.dragDrop();
      }

      if (this.state === "dragWait") {
        var n = cc11001100_hook("n", l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), "var-init");
        n > 0 && (t.draggable = cc11001100_hook("t.draggable", !1, "assign"), this.startSelect(this.mousedownEvent.getDocumentPosition()));
      }
    }, "assign"), this.onMouseDown = cc11001100_hook("this.onMouseDown", function (e) {
      if (!this.$dragEnabled) return;
      this.mousedownEvent = cc11001100_hook("this.mousedownEvent", e, "assign");
      var t = cc11001100_hook("t", this.editor, "var-init"),
          n = cc11001100_hook("n", e.inSelection(), "var-init"),
          r = cc11001100_hook("r", e.getButton(), "var-init"),
          i = cc11001100_hook("i", e.domEvent.detail || 1, "var-init");

      if (i === 1 && r === 0 && n) {
        if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;
        this.mousedownEvent.time = cc11001100_hook("this.mousedownEvent.time", Date.now(), "assign");
        var o = cc11001100_hook("o", e.domEvent.target || e.domEvent.srcElement, "var-init");
        "unselectable" in o && (o.unselectable = cc11001100_hook("o.unselectable", "on", "assign"));

        if (t.getDragDelay()) {
          if (s.isWebKit) {
            this.cancelDrag = cc11001100_hook("this.cancelDrag", !0, "assign");
            var u = cc11001100_hook("u", t.container, "var-init");
            u.draggable = cc11001100_hook("u.draggable", !0, "assign");
          }

          this.setState("dragWait");
        } else this.startDrag();

        this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = cc11001100_hook("e.defaultPrevented", !0, "assign");
      }
    }, "assign");
  }).call(f.prototype), t.DragdropHandler = cc11001100_hook("t.DragdropHandler", f, "assign");
}), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./dom"), "var-init");
  t.get = cc11001100_hook("t.get", function (e, t) {
    var n = cc11001100_hook("n", new XMLHttpRequest(), "var-init");
    n.open("GET", e, !0), n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
      n.readyState === 4 && t(n.responseText);
    }, "assign"), n.send(null);
  }, "assign"), t.loadScript = cc11001100_hook("t.loadScript", function (e, t) {
    var n = cc11001100_hook("n", r.getDocumentHead(), "var-init"),
        i = cc11001100_hook("i", document.createElement("script"), "var-init");
    i.src = cc11001100_hook("i.src", e, "assign"), n.appendChild(i), i.onload = cc11001100_hook("i.onload", i.onreadystatechange = cc11001100_hook("i.onreadystatechange", function (e, n) {
      if (n || !i.readyState || i.readyState == "loaded" || i.readyState == "complete") i = cc11001100_hook("i", i.onload = cc11001100_hook("i.onload", i.onreadystatechange = cc11001100_hook("i.onreadystatechange", null, "assign"), "assign"), "assign"), n || t();
    }, "assign"), "assign");
  }, "assign"), t.qualifyURL = cc11001100_hook("t.qualifyURL", function (e) {
    var t = cc11001100_hook("t", document.createElement("a"), "var-init");
    return t.href = cc11001100_hook("t.href", e, "assign"), t.href;
  }, "assign");
}), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", {}, "var-init"),
      i = function () {
    this.propagationStopped = cc11001100_hook("this.propagationStopped", !0, "assign");
  },
      s = function () {
    this.defaultPrevented = cc11001100_hook("this.defaultPrevented", !0, "assign");
  };

  r._emit = cc11001100_hook("r._emit", r._dispatchEvent = cc11001100_hook("r._dispatchEvent", function (e, t) {
    this._eventRegistry || (this._eventRegistry = cc11001100_hook("this._eventRegistry", {}, "assign")), this._defaultHandlers || (this._defaultHandlers = cc11001100_hook("this._defaultHandlers", {}, "assign"));
    var n = cc11001100_hook("n", this._eventRegistry[e] || [], "var-init"),
        r = cc11001100_hook("r", this._defaultHandlers[e], "var-init");
    if (!n.length && !r) return;
    if (typeof t != "object" || !t) t = cc11001100_hook("t", {}, "assign");
    t.type || (t.type = cc11001100_hook("t.type", e, "assign")), t.stopPropagation || (t.stopPropagation = cc11001100_hook("t.stopPropagation", i, "assign")), t.preventDefault || (t.preventDefault = cc11001100_hook("t.preventDefault", s, "assign")), n = cc11001100_hook("n", n.slice(), "assign");

    for (var o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) {
      n[o](t, this);
      if (t.propagationStopped) break;
    }

    if (r && !t.defaultPrevented) return r(t, this);
  }, "assign"), "assign"), r._signal = cc11001100_hook("r._signal", function (e, t) {
    var n = cc11001100_hook("n", (this._eventRegistry || {})[e], "var-init");
    if (!n) return;
    n = cc11001100_hook("n", n.slice(), "assign");

    for (var r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) n[r](t, this);
  }, "assign"), r.once = cc11001100_hook("r.once", function (e, t) {
    var n = cc11001100_hook("n", this, "var-init");
    t && this.addEventListener(e, function r() {
      n.removeEventListener(e, r), t.apply(null, arguments);
    });
  }, "assign"), r.setDefaultHandler = cc11001100_hook("r.setDefaultHandler", function (e, t) {
    var n = cc11001100_hook("n", this._defaultHandlers, "var-init");
    n || (n = cc11001100_hook("n", this._defaultHandlers = cc11001100_hook("this._defaultHandlers", {
      _disabled_: {}
    }, "assign"), "assign"));

    if (n[e]) {
      var r = cc11001100_hook("r", n[e], "var-init"),
          i = cc11001100_hook("i", n._disabled_[e], "var-init");
      i || (n._disabled_[e] = cc11001100_hook("n._disabled_[e]", i = cc11001100_hook("i", [], "assign"), "assign")), i.push(r);
      var s = cc11001100_hook("s", i.indexOf(t), "var-init");
      s != -1 && i.splice(s, 1);
    }

    n[e] = cc11001100_hook("n[e]", t, "assign");
  }, "assign"), r.removeDefaultHandler = cc11001100_hook("r.removeDefaultHandler", function (e, t) {
    var n = cc11001100_hook("n", this._defaultHandlers, "var-init");
    if (!n) return;
    var r = cc11001100_hook("r", n._disabled_[e], "var-init");

    if (n[e] == t) {
      var i = cc11001100_hook("i", n[e], "var-init");
      r && this.setDefaultHandler(e, r.pop());
    } else if (r) {
      var s = cc11001100_hook("s", r.indexOf(t), "var-init");
      s != -1 && r.splice(s, 1);
    }
  }, "assign"), r.on = cc11001100_hook("r.on", r.addEventListener = cc11001100_hook("r.addEventListener", function (e, t, n) {
    this._eventRegistry = cc11001100_hook("this._eventRegistry", this._eventRegistry || {}, "assign");
    var r = cc11001100_hook("r", this._eventRegistry[e], "var-init");
    return r || (r = cc11001100_hook("r", this._eventRegistry[e] = cc11001100_hook("this._eventRegistry[e]", [], "assign"), "assign")), r.indexOf(t) == -1 && r[n ? "unshift" : "push"](t), t;
  }, "assign"), "assign"), r.off = cc11001100_hook("r.off", r.removeListener = cc11001100_hook("r.removeListener", r.removeEventListener = cc11001100_hook("r.removeEventListener", function (e, t) {
    this._eventRegistry = cc11001100_hook("this._eventRegistry", this._eventRegistry || {}, "assign");
    var n = cc11001100_hook("n", this._eventRegistry[e], "var-init");
    if (!n) return;
    var r = cc11001100_hook("r", n.indexOf(t), "var-init");
    r !== -1 && n.splice(r, 1);
  }, "assign"), "assign"), "assign"), r.removeAllListeners = cc11001100_hook("r.removeAllListeners", function (e) {
    this._eventRegistry && (this._eventRegistry[e] = cc11001100_hook("this._eventRegistry[e]", [], "assign"));
  }, "assign"), t.EventEmitter = cc11001100_hook("t.EventEmitter", r, "assign");
}), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
  "no use strict";

  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    typeof console != "undefined" && console.warn && console.warn.apply(console, arguments);
  }

  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", new Error(e), "var-init");
    n.data = cc11001100_hook("n.data", t, "assign"), typeof console == "object" && console.error && console.error(n), setTimeout(function () {
      throw n;
    });
  }

  var r = cc11001100_hook("r", e("./oop"), "var-init"),
      i = cc11001100_hook("i", e("./event_emitter").EventEmitter, "var-init"),
      s = cc11001100_hook("s", {
    setOptions: function (e) {
      Object.keys(e).forEach(function (t) {
        this.setOption(t, e[t]);
      }, this);
    },
    getOptions: function (e) {
      var t = cc11001100_hook("t", {}, "var-init");

      if (!e) {
        var n = cc11001100_hook("n", this.$options, "var-init");
        e = cc11001100_hook("e", Object.keys(n).filter(function (e) {
          return !n[e].hidden;
        }), "assign");
      } else Array.isArray(e) || (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", Object.keys(t), "assign"));

      return e.forEach(function (e) {
        t[e] = cc11001100_hook("t[e]", this.getOption(e), "assign");
      }, this), t;
    },
    setOption: function (e, t) {
      if (this["$" + e] === t) return;
      var n = cc11001100_hook("n", this.$options[e], "var-init");
      if (!n) return o('misspelled option "' + e + '"');
      if (n.forwardTo) return this[n.forwardTo] && this[n.forwardTo].setOption(e, t);
      n.handlesSet || (this["$" + e] = cc11001100_hook("this[\"$\" + e]", t, "assign")), n && n.set && n.set.call(this, t);
    },
    getOption: function (e) {
      var t = cc11001100_hook("t", this.$options[e], "var-init");
      return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : o('misspelled option "' + e + '"');
    }
  }, "var-init"),
      a = function () {
    this.$defaultOptions = cc11001100_hook("this.$defaultOptions", {}, "assign");
  };

  (function () {
    r.implement(this, i), this.defineOptions = cc11001100_hook("this.defineOptions", function (e, t, n) {
      return e.$options || (this.$defaultOptions[t] = cc11001100_hook("this.$defaultOptions[t]", e.$options = cc11001100_hook("e.$options", {}, "assign"), "assign")), Object.keys(n).forEach(function (t) {
        var r = cc11001100_hook("r", n[t], "var-init");
        typeof r == "string" && (r = cc11001100_hook("r", {
          forwardTo: cc11001100_hook("forwardTo", r, "object-key-init")
        }, "assign")), r.name || (r.name = cc11001100_hook("r.name", t, "assign")), e.$options[r.name] = cc11001100_hook("e.$options[r.name]", r, "assign"), "initialValue" in r && (e["$" + r.name] = cc11001100_hook("e[\"$\" + r.name]", r.initialValue, "assign"));
      }), r.implement(e, s), this;
    }, "assign"), this.resetOptions = cc11001100_hook("this.resetOptions", function (e) {
      Object.keys(e.$options).forEach(function (t) {
        var n = cc11001100_hook("n", e.$options[t], "var-init");
        "value" in n && e.setOption(t, n.value);
      });
    }, "assign"), this.setDefaultValue = cc11001100_hook("this.setDefaultValue", function (e, t, n) {
      var r = cc11001100_hook("r", this.$defaultOptions[e] || (this.$defaultOptions[e] = cc11001100_hook("this.$defaultOptions[e]", {}, "assign")), "var-init");
      r[t] && (r.forwardTo ? this.setDefaultValue(r.forwardTo, t, n) : r[t].value = cc11001100_hook("r[t].value", n, "assign"));
    }, "assign"), this.setDefaultValues = cc11001100_hook("this.setDefaultValues", function (e, t) {
      Object.keys(t).forEach(function (n) {
        this.setDefaultValue(e, n, t[n]);
      }, this);
    }, "assign"), this.warn = cc11001100_hook("this.warn", o, "assign"), this.reportError = cc11001100_hook("this.reportError", u, "assign");
  }).call(a.prototype), t.AppConfig = cc11001100_hook("t.AppConfig", a, "assign");
}), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function (e, t, n) {
  "no use strict";

  function f(r) {
    cc11001100_hook("r", r, "function-parameter");
    if (!u || !u.document) return;
    a.packaged = cc11001100_hook("a.packaged", r || e.packaged || n.packaged || u.define && define.packaged, "assign");
    var i = cc11001100_hook("i", {}, "var-init"),
        s = cc11001100_hook("s", "", "var-init"),
        o = cc11001100_hook("o", document.currentScript || document._currentScript, "var-init"),
        f = cc11001100_hook("f", o && o.ownerDocument || document, "var-init"),
        c = cc11001100_hook("c", f.getElementsByTagName("script"), "var-init");

    for (var h = cc11001100_hook("h", 0, "var-init"); h < c.length; h++) {
      var p = cc11001100_hook("p", c[h], "var-init"),
          d = cc11001100_hook("d", p.src || p.getAttribute("src"), "var-init");
      if (!d) continue;
      var v = cc11001100_hook("v", p.attributes, "var-init");

      for (var m = cc11001100_hook("m", 0, "var-init"), g = cc11001100_hook("g", v.length, "var-init"); m < g; m++) {
        var y = cc11001100_hook("y", v[m], "var-init");
        y.name.indexOf("data-ace-") === 0 && (i[l(y.name.replace(/^data-ace-/, ""))] = cc11001100_hook("i[l(y.name.replace(/^data-ace-/, \"\"))]", y.value, "assign"));
      }

      var b = cc11001100_hook("b", d.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/), "var-init");
      b && (s = cc11001100_hook("s", b[1], "assign"));
    }

    s && (i.base = cc11001100_hook("i.base", i.base || s, "assign"), i.packaged = cc11001100_hook("i.packaged", !0, "assign")), i.basePath = cc11001100_hook("i.basePath", i.base, "assign"), i.workerPath = cc11001100_hook("i.workerPath", i.workerPath || i.base, "assign"), i.modePath = cc11001100_hook("i.modePath", i.modePath || i.base, "assign"), i.themePath = cc11001100_hook("i.themePath", i.themePath || i.base, "assign"), delete i.base;

    for (var w in i) typeof i[w] != "undefined" && t.set(w, i[w]);
  }

  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.replace(/-(.)/g, function (e, t) {
      return t.toUpperCase();
    });
  }

  var r = cc11001100_hook("r", e("./lib/lang"), "var-init"),
      i = cc11001100_hook("i", e("./lib/oop"), "var-init"),
      s = cc11001100_hook("s", e("./lib/net"), "var-init"),
      o = cc11001100_hook("o", e("./lib/app_config").AppConfig, "var-init");
  n.exports = cc11001100_hook("n.exports", t = cc11001100_hook("t", new o(), "assign"), "assign");
  var u = cc11001100_hook("u", function () {
    return this || typeof window != "undefined" && window;
  }(), "var-init"),
      a = cc11001100_hook("a", {
    packaged: cc11001100_hook("packaged", !1, "object-key-init"),
    workerPath: cc11001100_hook("workerPath", null, "object-key-init"),
    modePath: cc11001100_hook("modePath", null, "object-key-init"),
    themePath: cc11001100_hook("themePath", null, "object-key-init"),
    basePath: cc11001100_hook("basePath", "", "object-key-init"),
    suffix: cc11001100_hook("suffix", ".js", "object-key-init"),
    $moduleUrls: {}
  }, "var-init");
  t.get = cc11001100_hook("t.get", function (e) {
    if (!a.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
    return a[e];
  }, "assign"), t.set = cc11001100_hook("t.set", function (e, t) {
    if (!a.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
    a[e] = cc11001100_hook("a[e]", t, "assign");
  }, "assign"), t.all = cc11001100_hook("t.all", function () {
    return r.copyObject(a);
  }, "assign"), t.moduleUrl = cc11001100_hook("t.moduleUrl", function (e, t) {
    if (a.$moduleUrls[e]) return a.$moduleUrls[e];
    var n = cc11001100_hook("n", e.split("/"), "var-init");
    t = cc11001100_hook("t", t || n[n.length - 2] || "", "assign");
    var r = cc11001100_hook("r", t == "snippets" ? "/" : "-", "var-init"),
        i = cc11001100_hook("i", n[n.length - 1], "var-init");

    if (t == "worker" && r == "-") {
      var s = cc11001100_hook("s", new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g"), "var-init");
      i = cc11001100_hook("i", i.replace(s, ""), "assign");
    }

    (!i || i == t) && n.length > 1 && (i = cc11001100_hook("i", n[n.length - 2], "assign"));
    var o = cc11001100_hook("o", a[t + "Path"], "var-init");
    return o == null ? o = cc11001100_hook("o", a.basePath, "assign") : r == "/" && (t = cc11001100_hook("t", r = cc11001100_hook("r", "", "assign"), "assign")), o && o.slice(-1) != "/" && (o += cc11001100_hook("o", "/", "assign")), o + t + r + i + this.get("suffix");
  }, "assign"), t.setModuleUrl = cc11001100_hook("t.setModuleUrl", function (e, t) {
    return a.$moduleUrls[e] = cc11001100_hook("a.$moduleUrls[e]", t, "assign");
  }, "assign"), t.$loading = cc11001100_hook("t.$loading", {}, "assign"), t.loadModule = cc11001100_hook("t.loadModule", function (n, r) {
    var i, o;
    Array.isArray(n) && (o = cc11001100_hook("o", n[0], "assign"), n = cc11001100_hook("n", n[1], "assign"));

    try {
      i = cc11001100_hook("i", e(n), "assign");
    } catch (u) {}

    if (i && !t.$loading[n]) return r && r(i);
    t.$loading[n] || (t.$loading[n] = cc11001100_hook("t.$loading[n]", [], "assign")), t.$loading[n].push(r);
    if (t.$loading[n].length > 1) return;

    var a = function () {
      e([n], function (e) {
        t._emit("load.module", {
          name: cc11001100_hook("name", n, "object-key-init"),
          module: cc11001100_hook("module", e, "object-key-init")
        });

        var r = cc11001100_hook("r", t.$loading[n], "var-init");
        t.$loading[n] = cc11001100_hook("t.$loading[n]", null, "assign"), r.forEach(function (t) {
          t && t(e);
        });
      });
    };

    if (!t.get("packaged")) return a();
    s.loadScript(t.moduleUrl(n, o), a);
  }, "assign"), t.init = cc11001100_hook("t.init", f, "assign");
}), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/event"), "var-init"),
      i = cc11001100_hook("i", e("../lib/useragent"), "var-init"),
      s = cc11001100_hook("s", e("./default_handlers").DefaultHandlers, "var-init"),
      o = cc11001100_hook("o", e("./default_gutter_handler").GutterHandler, "var-init"),
      u = cc11001100_hook("u", e("./mouse_event").MouseEvent, "var-init"),
      a = cc11001100_hook("a", e("./dragdrop_handler").DragdropHandler, "var-init"),
      f = cc11001100_hook("f", e("../config"), "var-init"),
      l = function (e) {
    var t = cc11001100_hook("t", this, "var-init");
    this.editor = cc11001100_hook("this.editor", e, "assign"), new s(this), new o(this), new a(this);

    var n = function (t) {
      var n = cc11001100_hook("n", !document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement()), "var-init");
      n && window.focus(), e.focus();
    },
        u = cc11001100_hook("u", e.renderer.getMouseEventTarget(), "var-init");

    r.addListener(u, "click", this.onMouseEvent.bind(this, "click")), r.addListener(u, "mousemove", this.onMouseMove.bind(this, "mousemove")), r.addMultiMouseDownListener([u, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), r.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel")), r.addTouchMoveListener(e.container, this.onTouchMove.bind(this, "touchmove"));
    var f = cc11001100_hook("f", e.renderer.$gutter, "var-init");
    r.addListener(f, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), r.addListener(f, "click", this.onMouseEvent.bind(this, "gutterclick")), r.addListener(f, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), r.addListener(f, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), r.addListener(u, "mousedown", n), r.addListener(f, "mousedown", n), i.isIE && e.renderer.scrollBarV && (r.addListener(e.renderer.scrollBarV.element, "mousedown", n), r.addListener(e.renderer.scrollBarH.element, "mousedown", n)), e.on("mousemove", function (n) {
      if (t.state || t.$dragDelay || !t.$dragEnabled) return;
      var r = cc11001100_hook("r", e.renderer.screenToTextCoordinates(n.x, n.y), "var-init"),
          i = cc11001100_hook("i", e.session.selection.getRange(), "var-init"),
          s = cc11001100_hook("s", e.renderer, "var-init");
      !i.isEmpty() && i.insideStart(r.row, r.column) ? s.setCursorStyle("default") : s.setCursorStyle("");
    });
  };

  (function () {
    this.onMouseEvent = cc11001100_hook("this.onMouseEvent", function (e, t) {
      this.editor._emit(e, new u(t, this.editor));
    }, "assign"), this.onMouseMove = cc11001100_hook("this.onMouseMove", function (e, t) {
      var n = cc11001100_hook("n", this.editor._eventRegistry && this.editor._eventRegistry.mousemove, "var-init");
      if (!n || !n.length) return;

      this.editor._emit(e, new u(t, this.editor));
    }, "assign"), this.onMouseWheel = cc11001100_hook("this.onMouseWheel", function (e, t) {
      var n = cc11001100_hook("n", new u(t, this.editor), "var-init");
      n.speed = cc11001100_hook("n.speed", this.$scrollSpeed * 2, "assign"), n.wheelX = cc11001100_hook("n.wheelX", t.wheelX, "assign"), n.wheelY = cc11001100_hook("n.wheelY", t.wheelY, "assign"), this.editor._emit(e, n);
    }, "assign"), this.onTouchMove = cc11001100_hook("this.onTouchMove", function (e, t) {
      var n = cc11001100_hook("n", new u(t, this.editor), "var-init");
      n.speed = cc11001100_hook("n.speed", 1, "assign"), n.wheelX = cc11001100_hook("n.wheelX", t.wheelX, "assign"), n.wheelY = cc11001100_hook("n.wheelY", t.wheelY, "assign"), this.editor._emit(e, n);
    }, "assign"), this.setState = cc11001100_hook("this.setState", function (e) {
      this.state = cc11001100_hook("this.state", e, "assign");
    }, "assign"), this.captureMouse = cc11001100_hook("this.captureMouse", function (e, t) {
      this.x = cc11001100_hook("this.x", e.x, "assign"), this.y = cc11001100_hook("this.y", e.y, "assign"), this.isMousePressed = cc11001100_hook("this.isMousePressed", !0, "assign");
      var n = cc11001100_hook("n", this.editor, "var-init"),
          s = cc11001100_hook("s", this.editor.renderer, "var-init");
      s.$keepTextAreaAtCursor && (s.$keepTextAreaAtCursor = cc11001100_hook("s.$keepTextAreaAtCursor", null, "assign"));

      var o = cc11001100_hook("o", this, "var-init"),
          a = function (e) {
        if (!e) return;
        if (i.isWebKit && !e.which && o.releaseMouse) return o.releaseMouse();
        o.x = cc11001100_hook("o.x", e.clientX, "assign"), o.y = cc11001100_hook("o.y", e.clientY, "assign"), t && t(e), o.mouseEvent = cc11001100_hook("o.mouseEvent", new u(e, o.editor), "assign"), o.$mouseMoved = cc11001100_hook("o.$mouseMoved", !0, "assign");
      },
          f = function (e) {
        n.off("beforeEndOperation", c), clearInterval(h), l(), o[o.state + "End"] && o[o.state + "End"](e), o.state = cc11001100_hook("o.state", "", "assign"), s.$keepTextAreaAtCursor == null && (s.$keepTextAreaAtCursor = cc11001100_hook("s.$keepTextAreaAtCursor", !0, "assign"), s.$moveTextAreaToCursor()), o.isMousePressed = cc11001100_hook("o.isMousePressed", !1, "assign"), o.$onCaptureMouseMove = cc11001100_hook("o.$onCaptureMouseMove", o.releaseMouse = cc11001100_hook("o.releaseMouse", null, "assign"), "assign"), e && o.onMouseEvent("mouseup", e);
      },
          l = function () {
        o[o.state] && o[o.state](), o.$mouseMoved = cc11001100_hook("o.$mouseMoved", !1, "assign");
      };

      if (i.isOldIE && e.domEvent.type == "dblclick") return setTimeout(function () {
        f(e);
      });

      var c = function (e) {
        n.curOp.command.name && n.curOp.selectionChanged && (o[o.state + "End"] && o[o.state + "End"](), o.state = cc11001100_hook("o.state", "", "assign"), o.releaseMouse());
      };

      n.on("beforeEndOperation", c), o.$onCaptureMouseMove = cc11001100_hook("o.$onCaptureMouseMove", a, "assign"), o.releaseMouse = cc11001100_hook("o.releaseMouse", r.capture(this.editor.container, a, f), "assign");
      var h = cc11001100_hook("h", setInterval(l, 20), "var-init");
    }, "assign"), this.releaseMouse = cc11001100_hook("this.releaseMouse", null, "assign"), this.cancelContextMenu = cc11001100_hook("this.cancelContextMenu", function () {
      var e = cc11001100_hook("e", function (t) {
        if (t && t.domEvent && t.domEvent.type != "contextmenu") return;
        this.editor.off("nativecontextmenu", e), t && t.domEvent && r.stopEvent(t.domEvent);
      }.bind(this), "var-init");
      setTimeout(e, 10), this.editor.on("nativecontextmenu", e);
    }, "assign");
  }).call(l.prototype), f.defineOptions(l.prototype, "mouseHandler", {
    scrollSpeed: {
      initialValue: cc11001100_hook("initialValue", 2, "object-key-init")
    },
    dragDelay: {
      initialValue: cc11001100_hook("initialValue", i.isMac ? 150 : 0, "object-key-init")
    },
    dragEnabled: {
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    focusTimeout: {
      initialValue: cc11001100_hook("initialValue", 0, "object-key-init")
    },
    tooltipFollowsMouse: {
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    }
  }), t.MouseHandler = cc11001100_hook("t.MouseHandler", l, "assign");
}), ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
  "use strict";

  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.on("click", function (t) {
      var n = cc11001100_hook("n", t.getDocumentPosition(), "var-init"),
          i = cc11001100_hook("i", e.session, "var-init"),
          s = cc11001100_hook("s", i.getFoldAt(n.row, n.column, 1), "var-init");
      s && (t.getAccelKey() ? i.removeFold(s) : i.expandFold(s), t.stop());
      var o = cc11001100_hook("o", t.domEvent && t.domEvent.target, "var-init");
      o && r.hasCssClass(o, "ace_inline_button") && r.hasCssClass(o, "ace_toggle_wrap") && (i.setOption("wrap", !0), e.renderer.scrollCursorIntoView());
    }), e.on("gutterclick", function (t) {
      var n = cc11001100_hook("n", e.renderer.$gutterLayer.getRegion(t), "var-init");

      if (n == "foldWidgets") {
        var r = cc11001100_hook("r", t.getDocumentPosition().row, "var-init"),
            i = cc11001100_hook("i", e.session, "var-init");
        i.foldWidgets && i.foldWidgets[r] && e.session.onFoldWidgetClick(r, t), e.isFocused() || e.focus(), t.stop();
      }
    }), e.on("gutterdblclick", function (t) {
      var n = cc11001100_hook("n", e.renderer.$gutterLayer.getRegion(t), "var-init");

      if (n == "foldWidgets") {
        var r = cc11001100_hook("r", t.getDocumentPosition().row, "var-init"),
            i = cc11001100_hook("i", e.session, "var-init"),
            s = cc11001100_hook("s", i.getParentFoldRangeData(r, !0), "var-init"),
            o = cc11001100_hook("o", s.range || s.firstRange, "var-init");

        if (o) {
          r = cc11001100_hook("r", o.start.row, "assign");
          var u = cc11001100_hook("u", i.getFoldAt(r, i.getLine(r).length, 1), "var-init");
          u ? i.removeFold(u) : (i.addFold("...", o), e.renderer.scrollCursorIntoView({
            row: cc11001100_hook("row", o.start.row, "object-key-init"),
            column: cc11001100_hook("column", 0, "object-key-init")
          }));
        }

        t.stop();
      }
    });
  }

  var r = cc11001100_hook("r", e("../lib/dom"), "var-init");
  t.FoldHandler = cc11001100_hook("t.FoldHandler", i, "assign");
}), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/keys"), "var-init"),
      i = cc11001100_hook("i", e("../lib/event"), "var-init"),
      s = function (e) {
    this.$editor = cc11001100_hook("this.$editor", e, "assign"), this.$data = cc11001100_hook("this.$data", {
      editor: cc11001100_hook("editor", e, "object-key-init")
    }, "assign"), this.$handlers = cc11001100_hook("this.$handlers", [], "assign"), this.setDefaultHandler(e.commands);
  };

  (function () {
    this.setDefaultHandler = cc11001100_hook("this.setDefaultHandler", function (e) {
      this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = cc11001100_hook("this.$defaultHandler", e, "assign"), this.addKeyboardHandler(e, 0);
    }, "assign"), this.setKeyboardHandler = cc11001100_hook("this.setKeyboardHandler", function (e) {
      var t = cc11001100_hook("t", this.$handlers, "var-init");
      if (t[t.length - 1] == e) return;

      while (t[t.length - 1] && t[t.length - 1] != this.$defaultHandler) this.removeKeyboardHandler(t[t.length - 1]);

      this.addKeyboardHandler(e, 1);
    }, "assign"), this.addKeyboardHandler = cc11001100_hook("this.addKeyboardHandler", function (e, t) {
      if (!e) return;
      typeof e == "function" && !e.handleKeyboard && (e.handleKeyboard = cc11001100_hook("e.handleKeyboard", e, "assign"));
      var n = cc11001100_hook("n", this.$handlers.indexOf(e), "var-init");
      n != -1 && this.$handlers.splice(n, 1), t == undefined ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), n == -1 && e.attach && e.attach(this.$editor);
    }, "assign"), this.removeKeyboardHandler = cc11001100_hook("this.removeKeyboardHandler", function (e) {
      var t = cc11001100_hook("t", this.$handlers.indexOf(e), "var-init");
      return t == -1 ? !1 : (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0);
    }, "assign"), this.getKeyboardHandler = cc11001100_hook("this.getKeyboardHandler", function () {
      return this.$handlers[this.$handlers.length - 1];
    }, "assign"), this.getStatusText = cc11001100_hook("this.getStatusText", function () {
      var e = cc11001100_hook("e", this.$data, "var-init"),
          t = cc11001100_hook("t", e.editor, "var-init");
      return this.$handlers.map(function (n) {
        return n.getStatusText && n.getStatusText(t, e) || "";
      }).filter(Boolean).join(" ");
    }, "assign"), this.$callKeyboardHandlers = cc11001100_hook("this.$callKeyboardHandlers", function (e, t, n, r) {
      var s,
          o = cc11001100_hook("o", !1, "var-init"),
          u = cc11001100_hook("u", this.$editor.commands, "var-init");

      for (var a = cc11001100_hook("a", this.$handlers.length, "var-init"); a--;) {
        s = cc11001100_hook("s", this.$handlers[a].handleKeyboard(this.$data, e, t, n, r), "assign");
        if (!s || !s.command) continue;
        s.command == "null" ? o = cc11001100_hook("o", !0, "assign") : o = cc11001100_hook("o", u.exec(s.command, this.$editor, s.args, r), "assign"), o && r && e != -1 && s.passEvent != 1 && s.command.passEvent != 1 && i.stopEvent(r);
        if (o) break;
      }

      return !o && e == -1 && (s = cc11001100_hook("s", {
        command: cc11001100_hook("command", "insertstring", "object-key-init")
      }, "assign"), o = cc11001100_hook("o", u.exec("insertstring", this.$editor, t), "assign")), o && this.$editor._signal && this.$editor._signal("keyboardActivity", s), o;
    }, "assign"), this.onCommandKey = cc11001100_hook("this.onCommandKey", function (e, t, n) {
      var i = cc11001100_hook("i", r.keyCodeToString(n), "var-init");
      this.$callKeyboardHandlers(t, i, n, e);
    }, "assign"), this.onTextInput = cc11001100_hook("this.onTextInput", function (e) {
      this.$callKeyboardHandlers(-1, e);
    }, "assign");
  }).call(s.prototype), t.KeyBinding = cc11001100_hook("t.KeyBinding", s, "assign");
}), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  function F(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i = cc11001100_hook("i", s ? d : p, "var-init"),
        c = cc11001100_hook("c", null, "var-init"),
        h = cc11001100_hook("h", null, "var-init"),
        v = cc11001100_hook("v", null, "var-init"),
        m = cc11001100_hook("m", 0, "var-init"),
        g = cc11001100_hook("g", null, "var-init"),
        y = cc11001100_hook("y", null, "var-init"),
        b = cc11001100_hook("b", -1, "var-init"),
        w = cc11001100_hook("w", null, "var-init"),
        E = cc11001100_hook("E", null, "var-init"),
        T = cc11001100_hook("T", [], "var-init");
    if (!r) for (w = cc11001100_hook("w", 0, "assign"), r = cc11001100_hook("r", [], "assign"); w < n; w++) r[w] = cc11001100_hook("r[w]", R(e[w]), "assign");
    o = cc11001100_hook("o", s, "assign"), u = cc11001100_hook("u", !1, "assign"), a = cc11001100_hook("a", !1, "assign"), f = cc11001100_hook("f", !1, "assign"), l = cc11001100_hook("l", !1, "assign");

    for (E = cc11001100_hook("E", 0, "assign"); E < n; E++) {
      c = cc11001100_hook("c", m, "assign"), T[E] = cc11001100_hook("T[E]", h = cc11001100_hook("h", q(e, r, T, E), "assign"), "assign"), m = cc11001100_hook("m", i[c][h], "assign"), g = cc11001100_hook("g", m & 240, "assign"), m &= cc11001100_hook("m", 15, "assign"), t[E] = cc11001100_hook("t[E]", v = cc11001100_hook("v", i[m][5], "assign"), "assign");
      if (g > 0) if (g == 16) {
        for (w = cc11001100_hook("w", b, "assign"); w < E; w++) t[w] = cc11001100_hook("t[w]", 1, "assign");

        b = cc11001100_hook("b", -1, "assign");
      } else b = cc11001100_hook("b", -1, "assign");
      y = cc11001100_hook("y", i[m][6], "assign");
      if (y) b == -1 && (b = cc11001100_hook("b", E, "assign"));else if (b > -1) {
        for (w = cc11001100_hook("w", b, "assign"); w < E; w++) t[w] = cc11001100_hook("t[w]", v, "assign");

        b = cc11001100_hook("b", -1, "assign");
      }
      r[E] == S && (t[E] = cc11001100_hook("t[E]", 0, "assign")), o |= cc11001100_hook("o", v, "assign");
    }

    if (l) for (w = cc11001100_hook("w", 0, "assign"); w < n; w++) if (r[w] == x) {
      t[w] = cc11001100_hook("t[w]", s, "assign");

      for (var C = cc11001100_hook("C", w - 1, "var-init"); C >= 0; C--) {
        if (r[C] != N) break;
        t[C] = cc11001100_hook("t[C]", s, "assign");
      }
    }
  }

  function I(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (o < e) return;

    if (e == 1 && s == m && !f) {
      n.reverse();
      return;
    }

    var r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        u,
        a,
        l,
        c;

    while (i < r) {
      if (t[i] >= e) {
        u = cc11001100_hook("u", i + 1, "assign");

        while (u < r && t[u] >= e) u++;

        for (a = cc11001100_hook("a", i, "assign"), l = cc11001100_hook("l", u - 1, "assign"); a < l; a++, l--) c = cc11001100_hook("c", n[a], "assign"), n[a] = cc11001100_hook("n[a]", n[l], "assign"), n[l] = cc11001100_hook("n[l]", c, "assign");

        i = cc11001100_hook("i", u, "assign");
      }

      i++;
    }
  }

  function q(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i = cc11001100_hook("i", t[r], "var-init"),
        o,
        c,
        h,
        p;

    switch (i) {
      case g:
      case y:
        u = cc11001100_hook("u", !1, "assign");

      case E:
      case w:
        return i;

      case b:
        return u ? w : b;

      case T:
        return u = cc11001100_hook("u", !0, "assign"), a = cc11001100_hook("a", !0, "assign"), y;

      case N:
        return E;

      case C:
        if (r < 1 || r + 1 >= t.length || (o = cc11001100_hook("o", n[r - 1], "assign")) != b && o != w || (c = cc11001100_hook("c", t[r + 1], "assign")) != b && c != w) return E;
        return u && (c = cc11001100_hook("c", w, "assign")), c == o ? c : E;

      case k:
        o = cc11001100_hook("o", r > 0 ? n[r - 1] : S, "assign");
        if (o == b && r + 1 < t.length && t[r + 1] == b) return b;
        return E;

      case L:
        if (r > 0 && n[r - 1] == b) return b;
        if (u) return E;
        p = cc11001100_hook("p", r + 1, "assign"), h = cc11001100_hook("h", t.length, "assign");

        while (p < h && t[p] == L) p++;

        if (p < h && t[p] == b) return b;
        return E;

      case A:
        h = cc11001100_hook("h", t.length, "assign"), p = cc11001100_hook("p", r + 1, "assign");

        while (p < h && t[p] == A) p++;

        if (p < h) {
          var d = cc11001100_hook("d", e[r], "var-init"),
              v = cc11001100_hook("v", d >= 1425 && d <= 2303 || d == 64286, "var-init");
          o = cc11001100_hook("o", t[p], "assign");
          if (v && (o == y || o == T)) return y;
        }

        if (r < 1 || (o = cc11001100_hook("o", t[r - 1], "assign")) == S) return E;
        return n[r - 1];

      case S:
        return u = cc11001100_hook("u", !1, "assign"), f = cc11001100_hook("f", !0, "assign"), s;

      case x:
        return l = cc11001100_hook("l", !0, "assign"), E;

      case O:
      case M:
      case D:
      case P:
      case _:
        u = cc11001100_hook("u", !1, "assign");

      case H:
        return E;
    }
  }

  function R(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.charCodeAt(0), "var-init"),
        n = cc11001100_hook("n", t >> 8, "var-init");
    return n == 0 ? t > 191 ? g : B[t] : n == 5 ? /[\u0591-\u05f4]/.test(e) ? y : g : n == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e) ? A : /[\u0660-\u0669\u066b-\u066c]/.test(e) ? w : t == 1642 ? L : /[\u06f0-\u06f9]/.test(e) ? b : T : n == 32 && t <= 8287 ? j[t & 255] : n == 254 ? t >= 65136 ? T : E : E;
  }

  function U(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e >= "\u064b" && e <= "\u0655";
  }

  var r = cc11001100_hook("r", ["\u0621", "\u0641"], "var-init"),
      i = cc11001100_hook("i", ["\u063a", "\u064a"], "var-init"),
      s = cc11001100_hook("s", 0, "var-init"),
      o = cc11001100_hook("o", 0, "var-init"),
      u = cc11001100_hook("u", !1, "var-init"),
      a = cc11001100_hook("a", !1, "var-init"),
      f = cc11001100_hook("f", !1, "var-init"),
      l = cc11001100_hook("l", !1, "var-init"),
      c = cc11001100_hook("c", !1, "var-init"),
      h = cc11001100_hook("h", !1, "var-init"),
      p = cc11001100_hook("p", [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], "var-init"),
      d = cc11001100_hook("d", [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], "var-init"),
      v = cc11001100_hook("v", 0, "var-init"),
      m = cc11001100_hook("m", 1, "var-init"),
      g = cc11001100_hook("g", 0, "var-init"),
      y = cc11001100_hook("y", 1, "var-init"),
      b = cc11001100_hook("b", 2, "var-init"),
      w = cc11001100_hook("w", 3, "var-init"),
      E = cc11001100_hook("E", 4, "var-init"),
      S = cc11001100_hook("S", 5, "var-init"),
      x = cc11001100_hook("x", 6, "var-init"),
      T = cc11001100_hook("T", 7, "var-init"),
      N = cc11001100_hook("N", 8, "var-init"),
      C = cc11001100_hook("C", 9, "var-init"),
      k = cc11001100_hook("k", 10, "var-init"),
      L = cc11001100_hook("L", 11, "var-init"),
      A = cc11001100_hook("A", 12, "var-init"),
      O = cc11001100_hook("O", 13, "var-init"),
      M = cc11001100_hook("M", 14, "var-init"),
      _ = cc11001100_hook("_", 15, "var-init"),
      D = cc11001100_hook("D", 16, "var-init"),
      P = cc11001100_hook("P", 17, "var-init"),
      H = cc11001100_hook("H", 18, "var-init"),
      B = cc11001100_hook("B", [H, H, H, H, H, H, H, H, H, x, S, x, N, S, H, H, H, H, H, H, H, H, H, H, H, H, H, H, S, S, S, x, N, E, E, L, L, L, E, E, E, E, E, k, C, k, C, C, b, b, b, b, b, b, b, b, b, b, C, E, E, E, E, E, E, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, E, E, E, E, E, E, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, E, E, E, E, H, H, H, H, H, H, S, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, C, E, L, L, L, L, E, E, E, E, g, E, E, H, E, E, L, L, b, b, E, g, E, E, E, b, g, E, E, E, E, E], "var-init"),
      j = cc11001100_hook("j", [N, N, N, N, N, N, N, N, N, N, N, H, H, H, g, y, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, N, S, O, M, _, D, P, C, L, L, L, L, L, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, C, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, E, N], "var-init");

  t.L = cc11001100_hook("t.L", g, "assign"), t.R = cc11001100_hook("t.R", y, "assign"), t.EN = cc11001100_hook("t.EN", b, "assign"), t.ON_R = cc11001100_hook("t.ON_R", 3, "assign"), t.AN = cc11001100_hook("t.AN", 4, "assign"), t.R_H = cc11001100_hook("t.R_H", 5, "assign"), t.B = cc11001100_hook("t.B", 6, "assign"), t.DOT = cc11001100_hook("t.DOT", "\u00b7", "assign"), t.doBidiReorder = cc11001100_hook("t.doBidiReorder", function (e, n, r) {
    if (e.length < 2) return {};
    var i = cc11001100_hook("i", e.split(""), "var-init"),
        o = cc11001100_hook("o", new Array(i.length), "var-init"),
        u = cc11001100_hook("u", new Array(i.length), "var-init"),
        a = cc11001100_hook("a", [], "var-init");
    s = cc11001100_hook("s", r ? m : v, "assign"), F(i, a, i.length, n);

    for (var f = cc11001100_hook("f", 0, "var-init"); f < o.length; o[f] = cc11001100_hook("o[f]", f, "assign"), f++);

    I(2, a, o), I(1, a, o);

    for (var f = cc11001100_hook("f", 0, "var-init"); f < o.length - 1; f++) n[f] === w ? a[f] = cc11001100_hook("a[f]", t.AN, "assign") : a[f] === y && (n[f] > T && n[f] < O || n[f] === E || n[f] === H) ? a[f] = cc11001100_hook("a[f]", t.ON_R, "assign") : f > 0 && i[f - 1] === "\u0644" && /\u0622|\u0623|\u0625|\u0627/.test(i[f]) && (a[f - 1] = cc11001100_hook("a[f - 1]", a[f] = cc11001100_hook("a[f]", t.R_H, "assign"), "assign"), f++);

    i[i.length - 1] === t.DOT && (a[i.length - 1] = cc11001100_hook("a[i.length - 1]", t.B, "assign"));

    for (var f = cc11001100_hook("f", 0, "var-init"); f < o.length; f++) u[f] = cc11001100_hook("u[f]", a[o[f]], "assign");

    return {
      logicalFromVisual: cc11001100_hook("logicalFromVisual", o, "object-key-init"),
      bidiLevels: cc11001100_hook("bidiLevels", u, "object-key-init")
    };
  }, "assign"), t.hasBidiCharacters = cc11001100_hook("t.hasBidiCharacters", function (e, t) {
    var n = cc11001100_hook("n", !1, "var-init");

    for (var r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) t[r] = cc11001100_hook("t[r]", R(e.charAt(r)), "assign"), !n && (t[r] == y || t[r] == T) && (n = cc11001100_hook("n", !0, "assign"));

    return n;
  }, "assign"), t.getVisualFromLogicalIdx = cc11001100_hook("t.getVisualFromLogicalIdx", function (e, t) {
    for (var n = cc11001100_hook("n", 0, "var-init"); n < t.logicalFromVisual.length; n++) if (t.logicalFromVisual[n] == e) return n;

    return 0;
  }, "assign");
}), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang", "ace/lib/useragent"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/bidiutil"), "var-init"),
      i = cc11001100_hook("i", e("./lib/lang"), "var-init"),
      s = cc11001100_hook("s", e("./lib/useragent"), "var-init"),
      o = cc11001100_hook("o", /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, "var-init"),
      u = function (e) {
    this.session = cc11001100_hook("this.session", e, "assign"), this.bidiMap = cc11001100_hook("this.bidiMap", {}, "assign"), this.currentRow = cc11001100_hook("this.currentRow", null, "assign"), this.bidiUtil = cc11001100_hook("this.bidiUtil", r, "assign"), this.charWidths = cc11001100_hook("this.charWidths", [], "assign"), this.EOL = cc11001100_hook("this.EOL", "\u00ac", "assign"), this.showInvisibles = cc11001100_hook("this.showInvisibles", !0, "assign"), this.isRtlDir = cc11001100_hook("this.isRtlDir", !1, "assign"), this.line = cc11001100_hook("this.line", "", "assign"), this.wrapIndent = cc11001100_hook("this.wrapIndent", 0, "assign"), this.isLastRow = cc11001100_hook("this.isLastRow", !1, "assign"), this.EOF = cc11001100_hook("this.EOF", "\u00b6", "assign"), this.seenBidi = cc11001100_hook("this.seenBidi", !1, "assign");
  };

  (function () {
    this.isBidiRow = cc11001100_hook("this.isBidiRow", function (e, t, n) {
      return this.seenBidi ? (e !== this.currentRow && (this.currentRow = cc11001100_hook("this.currentRow", e, "assign"), this.updateRowLine(t, n), this.updateBidiMap()), this.bidiMap.bidiLevels) : !1;
    }, "assign"), this.onChange = cc11001100_hook("this.onChange", function (e) {
      this.seenBidi ? this.currentRow = cc11001100_hook("this.currentRow", null, "assign") : e.action == "insert" && o.test(e.lines.join("\n")) && (this.seenBidi = cc11001100_hook("this.seenBidi", !0, "assign"), this.currentRow = cc11001100_hook("this.currentRow", null, "assign"));
    }, "assign"), this.getDocumentRow = cc11001100_hook("this.getDocumentRow", function () {
      var e = cc11001100_hook("e", 0, "var-init"),
          t = cc11001100_hook("t", this.session.$screenRowCache, "var-init");

      if (t.length) {
        var n = cc11001100_hook("n", this.session.$getRowCacheIndex(t, this.currentRow), "var-init");
        n >= 0 && (e = cc11001100_hook("e", this.session.$docRowCache[n], "assign"));
      }

      return e;
    }, "assign"), this.getSplitIndex = cc11001100_hook("this.getSplitIndex", function () {
      var e = cc11001100_hook("e", 0, "var-init"),
          t = cc11001100_hook("t", this.session.$screenRowCache, "var-init");

      if (t.length) {
        var n,
            r = cc11001100_hook("r", this.session.$getRowCacheIndex(t, this.currentRow), "var-init");

        while (this.currentRow - e > 0) {
          n = cc11001100_hook("n", this.session.$getRowCacheIndex(t, this.currentRow - e - 1), "assign");
          if (n !== r) break;
          r = cc11001100_hook("r", n, "assign"), e++;
        }
      }

      return e;
    }, "assign"), this.updateRowLine = cc11001100_hook("this.updateRowLine", function (e, t) {
      e === undefined && (e = cc11001100_hook("e", this.getDocumentRow(), "assign")), this.wrapIndent = cc11001100_hook("this.wrapIndent", 0, "assign"), this.isLastRow = cc11001100_hook("this.isLastRow", e === this.session.getLength() - 1, "assign"), this.line = cc11001100_hook("this.line", this.session.getLine(e), "assign");

      if (this.session.$useWrapMode) {
        var n = cc11001100_hook("n", this.session.$wrapData[e], "var-init");
        n && (t === undefined && (t = cc11001100_hook("t", this.getSplitIndex(), "assign")), t > 0 && n.length ? (this.wrapIndent = cc11001100_hook("this.wrapIndent", n.indent, "assign"), this.line = cc11001100_hook("this.line", t < n.length ? this.line.substring(n[t - 1], n[n.length - 1]) : this.line.substring(n[n.length - 1]), "assign")) : this.line = cc11001100_hook("this.line", this.line.substring(0, n[t]), "assign"));
      }

      var s = cc11001100_hook("s", this.session, "var-init"),
          o = cc11001100_hook("o", 0, "var-init"),
          u;
      this.line = cc11001100_hook("this.line", this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function (e, t) {
        return e === "	" || s.isFullWidth(e.charCodeAt(0)) ? (u = cc11001100_hook("u", e === "	" ? s.getScreenTabSize(t + o) : 2, "assign"), o += cc11001100_hook("o", u - 1, "assign"), i.stringRepeat(r.DOT, u)) : e;
      }), "assign");
    }, "assign"), this.updateBidiMap = cc11001100_hook("this.updateBidiMap", function () {
      var e = cc11001100_hook("e", [], "var-init"),
          t = cc11001100_hook("t", this.isLastRow ? this.EOF : this.EOL, "var-init"),
          n = cc11001100_hook("n", this.line + (this.showInvisibles ? t : r.DOT), "var-init");
      r.hasBidiCharacters(n, e) ? this.bidiMap = cc11001100_hook("this.bidiMap", r.doBidiReorder(n, e, this.isRtlDir), "assign") : this.bidiMap = cc11001100_hook("this.bidiMap", {}, "assign");
    }, "assign"), this.markAsDirty = cc11001100_hook("this.markAsDirty", function () {
      this.currentRow = cc11001100_hook("this.currentRow", null, "assign");
    }, "assign"), this.updateCharacterWidths = cc11001100_hook("this.updateCharacterWidths", function (e) {
      if (!this.seenBidi) return;
      if (this.characterWidth === e.$characterSize.width) return;
      var t = cc11001100_hook("t", this.characterWidth = cc11001100_hook("this.characterWidth", e.$characterSize.width, "assign"), "var-init"),
          n = cc11001100_hook("n", e.$measureCharWidth("\u05d4"), "var-init");
      this.charWidths[r.L] = cc11001100_hook("this.charWidths[r.L]", this.charWidths[r.EN] = cc11001100_hook("this.charWidths[r.EN]", this.charWidths[r.ON_R] = cc11001100_hook("this.charWidths[r.ON_R]", t, "assign"), "assign"), "assign"), this.charWidths[r.R] = cc11001100_hook("this.charWidths[r.R]", this.charWidths[r.AN] = cc11001100_hook("this.charWidths[r.AN]", n, "assign"), "assign"), this.charWidths[r.R_H] = cc11001100_hook("this.charWidths[r.R_H]", s.isChrome ? n : n * .45, "assign"), this.charWidths[r.B] = cc11001100_hook("this.charWidths[r.B]", 0, "assign"), this.currentRow = cc11001100_hook("this.currentRow", null, "assign");
    }, "assign"), this.getShowInvisibles = cc11001100_hook("this.getShowInvisibles", function () {
      return this.showInvisibles;
    }, "assign"), this.setShowInvisibles = cc11001100_hook("this.setShowInvisibles", function (e) {
      this.showInvisibles = cc11001100_hook("this.showInvisibles", e, "assign"), this.currentRow = cc11001100_hook("this.currentRow", null, "assign");
    }, "assign"), this.setEolChar = cc11001100_hook("this.setEolChar", function (e) {
      this.EOL = cc11001100_hook("this.EOL", e, "assign");
    }, "assign"), this.setTextDir = cc11001100_hook("this.setTextDir", function (e) {
      this.isRtlDir = cc11001100_hook("this.isRtlDir", e, "assign");
    }, "assign"), this.getPosLeft = cc11001100_hook("this.getPosLeft", function (e) {
      e -= cc11001100_hook("e", this.wrapIndent, "assign");
      var t = cc11001100_hook("t", r.getVisualFromLogicalIdx(e > 0 ? e - 1 : 0, this.bidiMap), "var-init"),
          n = cc11001100_hook("n", this.bidiMap.bidiLevels, "var-init"),
          i = cc11001100_hook("i", 0, "var-init");
      e === 0 && n[t] % 2 !== 0 && t++;

      for (var s = cc11001100_hook("s", 0, "var-init"); s < t; s++) i += cc11001100_hook("i", this.charWidths[n[s]], "assign");

      return e !== 0 && n[t] % 2 === 0 && (i += cc11001100_hook("i", this.charWidths[n[t]], "assign")), this.wrapIndent && (i += cc11001100_hook("i", this.wrapIndent * this.charWidths[r.L], "assign")), i;
    }, "assign"), this.getSelections = cc11001100_hook("this.getSelections", function (e, t) {
      var n = cc11001100_hook("n", this.bidiMap, "var-init"),
          i = cc11001100_hook("i", n.bidiLevels, "var-init"),
          s,
          o = cc11001100_hook("o", this.wrapIndent * this.charWidths[r.L], "var-init"),
          u = cc11001100_hook("u", [], "var-init"),
          a = cc11001100_hook("a", Math.min(e, t) - this.wrapIndent, "var-init"),
          f = cc11001100_hook("f", Math.max(e, t) - this.wrapIndent, "var-init"),
          l = cc11001100_hook("l", !1, "var-init"),
          c = cc11001100_hook("c", !1, "var-init"),
          h = cc11001100_hook("h", 0, "var-init");

      for (var p, d = cc11001100_hook("d", 0, "var-init"); d < i.length; d++) p = cc11001100_hook("p", n.logicalFromVisual[d], "assign"), s = cc11001100_hook("s", i[d], "assign"), l = cc11001100_hook("l", p >= a && p < f, "assign"), l && !c ? h = cc11001100_hook("h", o, "assign") : !l && c && u.push({
        left: cc11001100_hook("left", h, "object-key-init"),
        width: cc11001100_hook("width", o - h, "object-key-init")
      }), o += cc11001100_hook("o", this.charWidths[s], "assign"), c = cc11001100_hook("c", l, "assign");

      return l && d === i.length && u.push({
        left: cc11001100_hook("left", h, "object-key-init"),
        width: cc11001100_hook("width", o - h, "object-key-init")
      }), u;
    }, "assign"), this.offsetToCol = cc11001100_hook("this.offsetToCol", function (e) {
      var t = cc11001100_hook("t", 0, "var-init"),
          e = cc11001100_hook("e", Math.max(e, 0), "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          s = cc11001100_hook("s", this.bidiMap.bidiLevels, "var-init"),
          o = cc11001100_hook("o", this.charWidths[s[i]], "var-init");
      this.wrapIndent && (e -= cc11001100_hook("e", this.wrapIndent * this.charWidths[r.L], "assign"));

      while (e > n + o / 2) {
        n += cc11001100_hook("n", o, "assign");

        if (i === s.length - 1) {
          o = cc11001100_hook("o", 0, "assign");
          break;
        }

        o = cc11001100_hook("o", this.charWidths[s[++i]], "assign");
      }

      return i > 0 && s[i - 1] % 2 !== 0 && s[i] % 2 === 0 ? (e < n && i--, t = cc11001100_hook("t", this.bidiMap.logicalFromVisual[i], "assign")) : i > 0 && s[i - 1] % 2 === 0 && s[i] % 2 !== 0 ? t = cc11001100_hook("t", 1 + (e > n ? this.bidiMap.logicalFromVisual[i] : this.bidiMap.logicalFromVisual[i - 1]), "assign") : this.isRtlDir && i === s.length - 1 && o === 0 && s[i - 1] % 2 === 0 || !this.isRtlDir && i === 0 && s[i] % 2 !== 0 ? t = cc11001100_hook("t", 1 + this.bidiMap.logicalFromVisual[i], "assign") : (i > 0 && s[i - 1] % 2 !== 0 && o !== 0 && i--, t = cc11001100_hook("t", this.bidiMap.logicalFromVisual[i], "assign")), t + this.wrapIndent;
    }, "assign");
  }).call(u.prototype), t.BidiHandler = cc11001100_hook("t.BidiHandler", u, "assign");
}), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/lang"), "var-init"),
      s = cc11001100_hook("s", e("./lib/event_emitter").EventEmitter, "var-init"),
      o = cc11001100_hook("o", e("./range").Range, "var-init"),
      u = function (e) {
    this.session = cc11001100_hook("this.session", e, "assign"), this.doc = cc11001100_hook("this.doc", e.getDocument(), "assign"), this.clearSelection(), this.cursor = cc11001100_hook("this.cursor", this.lead = cc11001100_hook("this.lead", this.doc.createAnchor(0, 0), "assign"), "assign"), this.anchor = cc11001100_hook("this.anchor", this.doc.createAnchor(0, 0), "assign"), this.$silent = cc11001100_hook("this.$silent", !1, "assign");
    var t = cc11001100_hook("t", this, "var-init");
    this.cursor.on("change", function (e) {
      t.$cursorChanged = cc11001100_hook("t.$cursorChanged", !0, "assign"), t.$silent || t._emit("changeCursor"), !t.$isEmpty && !t.$silent && t._emit("changeSelection"), !t.$keepDesiredColumnOnChange && e.old.column != e.value.column && (t.$desiredColumn = cc11001100_hook("t.$desiredColumn", null, "assign"));
    }), this.anchor.on("change", function () {
      t.$anchorChanged = cc11001100_hook("t.$anchorChanged", !0, "assign"), !t.$isEmpty && !t.$silent && t._emit("changeSelection");
    });
  };

  (function () {
    r.implement(this, s), this.isEmpty = cc11001100_hook("this.isEmpty", function () {
      return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
    }, "assign"), this.isMultiLine = cc11001100_hook("this.isMultiLine", function () {
      return !this.$isEmpty && this.anchor.row != this.cursor.row;
    }, "assign"), this.getCursor = cc11001100_hook("this.getCursor", function () {
      return this.lead.getPosition();
    }, "assign"), this.setSelectionAnchor = cc11001100_hook("this.setSelectionAnchor", function (e, t) {
      this.$isEmpty = cc11001100_hook("this.$isEmpty", !1, "assign"), this.anchor.setPosition(e, t);
    }, "assign"), this.getAnchor = cc11001100_hook("this.getAnchor", this.getSelectionAnchor = cc11001100_hook("this.getSelectionAnchor", function () {
      return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
    }, "assign"), "assign"), this.getSelectionLead = cc11001100_hook("this.getSelectionLead", function () {
      return this.lead.getPosition();
    }, "assign"), this.isBackwards = cc11001100_hook("this.isBackwards", function () {
      var e = cc11001100_hook("e", this.anchor, "var-init"),
          t = cc11001100_hook("t", this.lead, "var-init");
      return e.row > t.row || e.row == t.row && e.column > t.column;
    }, "assign"), this.getRange = cc11001100_hook("this.getRange", function () {
      var e = cc11001100_hook("e", this.anchor, "var-init"),
          t = cc11001100_hook("t", this.lead, "var-init");
      return this.$isEmpty ? o.fromPoints(t, t) : this.isBackwards() ? o.fromPoints(t, e) : o.fromPoints(e, t);
    }, "assign"), this.clearSelection = cc11001100_hook("this.clearSelection", function () {
      this.$isEmpty || (this.$isEmpty = cc11001100_hook("this.$isEmpty", !0, "assign"), this._emit("changeSelection"));
    }, "assign"), this.selectAll = cc11001100_hook("this.selectAll", function () {
      this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
    }, "assign"), this.setRange = cc11001100_hook("this.setRange", this.setSelectionRange = cc11001100_hook("this.setSelectionRange", function (e, t) {
      var n = cc11001100_hook("n", t ? e.end : e.start, "var-init"),
          r = cc11001100_hook("r", t ? e.start : e.end, "var-init");
      this.$setSelection(n.row, n.column, r.row, r.column);
    }, "assign"), "assign"), this.$setSelection = cc11001100_hook("this.$setSelection", function (e, t, n, r) {
      var i = cc11001100_hook("i", this.$isEmpty, "var-init"),
          s = cc11001100_hook("s", this.inMultiSelectMode, "var-init");
      this.$silent = cc11001100_hook("this.$silent", !0, "assign"), this.$cursorChanged = cc11001100_hook("this.$cursorChanged", this.$anchorChanged = cc11001100_hook("this.$anchorChanged", !1, "assign"), "assign"), this.anchor.setPosition(e, t), this.cursor.setPosition(n, r), this.$isEmpty = cc11001100_hook("this.$isEmpty", !o.comparePoints(this.anchor, this.cursor), "assign"), this.$silent = cc11001100_hook("this.$silent", !1, "assign"), this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || i != this.$isEmpty || s) && this._emit("changeSelection");
    }, "assign"), this.$moveSelection = cc11001100_hook("this.$moveSelection", function (e) {
      var t = cc11001100_hook("t", this.lead, "var-init");
      this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this);
    }, "assign"), this.selectTo = cc11001100_hook("this.selectTo", function (e, t) {
      this.$moveSelection(function () {
        this.moveCursorTo(e, t);
      });
    }, "assign"), this.selectToPosition = cc11001100_hook("this.selectToPosition", function (e) {
      this.$moveSelection(function () {
        this.moveCursorToPosition(e);
      });
    }, "assign"), this.moveTo = cc11001100_hook("this.moveTo", function (e, t) {
      this.clearSelection(), this.moveCursorTo(e, t);
    }, "assign"), this.moveToPosition = cc11001100_hook("this.moveToPosition", function (e) {
      this.clearSelection(), this.moveCursorToPosition(e);
    }, "assign"), this.selectUp = cc11001100_hook("this.selectUp", function () {
      this.$moveSelection(this.moveCursorUp);
    }, "assign"), this.selectDown = cc11001100_hook("this.selectDown", function () {
      this.$moveSelection(this.moveCursorDown);
    }, "assign"), this.selectRight = cc11001100_hook("this.selectRight", function () {
      this.$moveSelection(this.moveCursorRight);
    }, "assign"), this.selectLeft = cc11001100_hook("this.selectLeft", function () {
      this.$moveSelection(this.moveCursorLeft);
    }, "assign"), this.selectLineStart = cc11001100_hook("this.selectLineStart", function () {
      this.$moveSelection(this.moveCursorLineStart);
    }, "assign"), this.selectLineEnd = cc11001100_hook("this.selectLineEnd", function () {
      this.$moveSelection(this.moveCursorLineEnd);
    }, "assign"), this.selectFileEnd = cc11001100_hook("this.selectFileEnd", function () {
      this.$moveSelection(this.moveCursorFileEnd);
    }, "assign"), this.selectFileStart = cc11001100_hook("this.selectFileStart", function () {
      this.$moveSelection(this.moveCursorFileStart);
    }, "assign"), this.selectWordRight = cc11001100_hook("this.selectWordRight", function () {
      this.$moveSelection(this.moveCursorWordRight);
    }, "assign"), this.selectWordLeft = cc11001100_hook("this.selectWordLeft", function () {
      this.$moveSelection(this.moveCursorWordLeft);
    }, "assign"), this.getWordRange = cc11001100_hook("this.getWordRange", function (e, t) {
      if (typeof t == "undefined") {
        var n = cc11001100_hook("n", e || this.lead, "var-init");
        e = cc11001100_hook("e", n.row, "assign"), t = cc11001100_hook("t", n.column, "assign");
      }

      return this.session.getWordRange(e, t);
    }, "assign"), this.selectWord = cc11001100_hook("this.selectWord", function () {
      this.setSelectionRange(this.getWordRange());
    }, "assign"), this.selectAWord = cc11001100_hook("this.selectAWord", function () {
      var e = cc11001100_hook("e", this.getCursor(), "var-init"),
          t = cc11001100_hook("t", this.session.getAWordRange(e.row, e.column), "var-init");
      this.setSelectionRange(t);
    }, "assign"), this.getLineRange = cc11001100_hook("this.getLineRange", function (e, t) {
      var n = cc11001100_hook("n", typeof e == "number" ? e : this.lead.row, "var-init"),
          r,
          i = cc11001100_hook("i", this.session.getFoldLine(n), "var-init");
      return i ? (n = cc11001100_hook("n", i.start.row, "assign"), r = cc11001100_hook("r", i.end.row, "assign")) : r = cc11001100_hook("r", n, "assign"), t === !0 ? new o(n, 0, r, this.session.getLine(r).length) : new o(n, 0, r + 1, 0);
    }, "assign"), this.selectLine = cc11001100_hook("this.selectLine", function () {
      this.setSelectionRange(this.getLineRange());
    }, "assign"), this.moveCursorUp = cc11001100_hook("this.moveCursorUp", function () {
      this.moveCursorBy(-1, 0);
    }, "assign"), this.moveCursorDown = cc11001100_hook("this.moveCursorDown", function () {
      this.moveCursorBy(1, 0);
    }, "assign"), this.wouldMoveIntoSoftTab = cc11001100_hook("this.wouldMoveIntoSoftTab", function (e, t, n) {
      var r = cc11001100_hook("r", e.column, "var-init"),
          i = cc11001100_hook("i", e.column + t, "var-init");
      return n < 0 && (r = cc11001100_hook("r", e.column - t, "assign"), i = cc11001100_hook("i", e.column, "assign")), this.session.isTabStop(e) && this.doc.getLine(e.row).slice(r, i).split(" ").length - 1 == t;
    }, "assign"), this.moveCursorLeft = cc11001100_hook("this.moveCursorLeft", function () {
      var e = cc11001100_hook("e", this.lead.getPosition(), "var-init"),
          t;
      if (t = cc11001100_hook("t", this.session.getFoldAt(e.row, e.column, -1), "assign")) this.moveCursorTo(t.start.row, t.start.column);else if (e.column === 0) e.row > 0 && this.moveCursorTo(e.row - 1, this.doc.getLine(e.row - 1).length);else {
        var n = cc11001100_hook("n", this.session.getTabSize(), "var-init");
        this.wouldMoveIntoSoftTab(e, n, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1);
      }
    }, "assign"), this.moveCursorRight = cc11001100_hook("this.moveCursorRight", function () {
      var e = cc11001100_hook("e", this.lead.getPosition(), "var-init"),
          t;
      if (t = cc11001100_hook("t", this.session.getFoldAt(e.row, e.column, 1), "assign")) this.moveCursorTo(t.end.row, t.end.column);else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);else {
        var n = cc11001100_hook("n", this.session.getTabSize(), "var-init"),
            e = cc11001100_hook("e", this.lead, "var-init");
        this.wouldMoveIntoSoftTab(e, n, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1);
      }
    }, "assign"), this.moveCursorLineStart = cc11001100_hook("this.moveCursorLineStart", function () {
      var e = cc11001100_hook("e", this.lead.row, "var-init"),
          t = cc11001100_hook("t", this.lead.column, "var-init"),
          n = cc11001100_hook("n", this.session.documentToScreenRow(e, t), "var-init"),
          r = cc11001100_hook("r", this.session.screenToDocumentPosition(n, 0), "var-init"),
          i = cc11001100_hook("i", this.session.getDisplayLine(e, null, r.row, r.column), "var-init"),
          s = cc11001100_hook("s", i.match(/^\s*/), "var-init");
      s[0].length != t && !this.session.$useEmacsStyleLineStart && (r.column += cc11001100_hook("r.column", s[0].length, "assign")), this.moveCursorToPosition(r);
    }, "assign"), this.moveCursorLineEnd = cc11001100_hook("this.moveCursorLineEnd", function () {
      var e = cc11001100_hook("e", this.lead, "var-init"),
          t = cc11001100_hook("t", this.session.getDocumentLastRowColumnPosition(e.row, e.column), "var-init");

      if (this.lead.column == t.column) {
        var n = cc11001100_hook("n", this.session.getLine(t.row), "var-init");

        if (t.column == n.length) {
          var r = cc11001100_hook("r", n.search(/\s+$/), "var-init");
          r > 0 && (t.column = cc11001100_hook("t.column", r, "assign"));
        }
      }

      this.moveCursorTo(t.row, t.column);
    }, "assign"), this.moveCursorFileEnd = cc11001100_hook("this.moveCursorFileEnd", function () {
      var e = cc11001100_hook("e", this.doc.getLength() - 1, "var-init"),
          t = cc11001100_hook("t", this.doc.getLine(e).length, "var-init");
      this.moveCursorTo(e, t);
    }, "assign"), this.moveCursorFileStart = cc11001100_hook("this.moveCursorFileStart", function () {
      this.moveCursorTo(0, 0);
    }, "assign"), this.moveCursorLongWordRight = cc11001100_hook("this.moveCursorLongWordRight", function () {
      var e = cc11001100_hook("e", this.lead.row, "var-init"),
          t = cc11001100_hook("t", this.lead.column, "var-init"),
          n = cc11001100_hook("n", this.doc.getLine(e), "var-init"),
          r = cc11001100_hook("r", n.substring(t), "var-init");
      this.session.nonTokenRe.lastIndex = cc11001100_hook("this.session.nonTokenRe.lastIndex", 0, "assign"), this.session.tokenRe.lastIndex = cc11001100_hook("this.session.tokenRe.lastIndex", 0, "assign");
      var i = cc11001100_hook("i", this.session.getFoldAt(e, t, 1), "var-init");

      if (i) {
        this.moveCursorTo(i.end.row, i.end.column);
        return;
      }

      this.session.nonTokenRe.exec(r) && (t += cc11001100_hook("t", this.session.nonTokenRe.lastIndex, "assign"), this.session.nonTokenRe.lastIndex = cc11001100_hook("this.session.nonTokenRe.lastIndex", 0, "assign"), r = cc11001100_hook("r", n.substring(t), "assign"));

      if (t >= n.length) {
        this.moveCursorTo(e, n.length), this.moveCursorRight(), e < this.doc.getLength() - 1 && this.moveCursorWordRight();
        return;
      }

      this.session.tokenRe.exec(r) && (t += cc11001100_hook("t", this.session.tokenRe.lastIndex, "assign"), this.session.tokenRe.lastIndex = cc11001100_hook("this.session.tokenRe.lastIndex", 0, "assign")), this.moveCursorTo(e, t);
    }, "assign"), this.moveCursorLongWordLeft = cc11001100_hook("this.moveCursorLongWordLeft", function () {
      var e = cc11001100_hook("e", this.lead.row, "var-init"),
          t = cc11001100_hook("t", this.lead.column, "var-init"),
          n;

      if (n = cc11001100_hook("n", this.session.getFoldAt(e, t, -1), "assign")) {
        this.moveCursorTo(n.start.row, n.start.column);
        return;
      }

      var r = cc11001100_hook("r", this.session.getFoldStringAt(e, t, -1), "var-init");
      r == null && (r = cc11001100_hook("r", this.doc.getLine(e).substring(0, t), "assign"));
      var s = cc11001100_hook("s", i.stringReverse(r), "var-init");
      this.session.nonTokenRe.lastIndex = cc11001100_hook("this.session.nonTokenRe.lastIndex", 0, "assign"), this.session.tokenRe.lastIndex = cc11001100_hook("this.session.tokenRe.lastIndex", 0, "assign"), this.session.nonTokenRe.exec(s) && (t -= cc11001100_hook("t", this.session.nonTokenRe.lastIndex, "assign"), s = cc11001100_hook("s", s.slice(this.session.nonTokenRe.lastIndex), "assign"), this.session.nonTokenRe.lastIndex = cc11001100_hook("this.session.nonTokenRe.lastIndex", 0, "assign"));

      if (t <= 0) {
        this.moveCursorTo(e, 0), this.moveCursorLeft(), e > 0 && this.moveCursorWordLeft();
        return;
      }

      this.session.tokenRe.exec(s) && (t -= cc11001100_hook("t", this.session.tokenRe.lastIndex, "assign"), this.session.tokenRe.lastIndex = cc11001100_hook("this.session.tokenRe.lastIndex", 0, "assign")), this.moveCursorTo(e, t);
    }, "assign"), this.$shortWordEndIndex = cc11001100_hook("this.$shortWordEndIndex", function (e) {
      var t = cc11001100_hook("t", 0, "var-init"),
          n,
          r = cc11001100_hook("r", /\s/, "var-init"),
          i = cc11001100_hook("i", this.session.tokenRe, "var-init");
      i.lastIndex = cc11001100_hook("i.lastIndex", 0, "assign");
      if (this.session.tokenRe.exec(e)) t = cc11001100_hook("t", this.session.tokenRe.lastIndex, "assign");else {
        while ((n = cc11001100_hook("n", e[t], "assign")) && r.test(n)) t++;

        if (t < 1) {
          i.lastIndex = cc11001100_hook("i.lastIndex", 0, "assign");

          while ((n = cc11001100_hook("n", e[t], "assign")) && !i.test(n)) {
            i.lastIndex = cc11001100_hook("i.lastIndex", 0, "assign"), t++;

            if (r.test(n)) {
              if (t > 2) {
                t--;
                break;
              }

              while ((n = cc11001100_hook("n", e[t], "assign")) && r.test(n)) t++;

              if (t > 2) break;
            }
          }
        }
      }
      return i.lastIndex = cc11001100_hook("i.lastIndex", 0, "assign"), t;
    }, "assign"), this.moveCursorShortWordRight = cc11001100_hook("this.moveCursorShortWordRight", function () {
      var e = cc11001100_hook("e", this.lead.row, "var-init"),
          t = cc11001100_hook("t", this.lead.column, "var-init"),
          n = cc11001100_hook("n", this.doc.getLine(e), "var-init"),
          r = cc11001100_hook("r", n.substring(t), "var-init"),
          i = cc11001100_hook("i", this.session.getFoldAt(e, t, 1), "var-init");
      if (i) return this.moveCursorTo(i.end.row, i.end.column);

      if (t == n.length) {
        var s = cc11001100_hook("s", this.doc.getLength(), "var-init");

        do e++, r = cc11001100_hook("r", this.doc.getLine(e), "assign"); while (e < s && /^\s*$/.test(r));

        /^\s+/.test(r) || (r = cc11001100_hook("r", "", "assign")), t = cc11001100_hook("t", 0, "assign");
      }

      var o = cc11001100_hook("o", this.$shortWordEndIndex(r), "var-init");
      this.moveCursorTo(e, t + o);
    }, "assign"), this.moveCursorShortWordLeft = cc11001100_hook("this.moveCursorShortWordLeft", function () {
      var e = cc11001100_hook("e", this.lead.row, "var-init"),
          t = cc11001100_hook("t", this.lead.column, "var-init"),
          n;
      if (n = cc11001100_hook("n", this.session.getFoldAt(e, t, -1), "assign")) return this.moveCursorTo(n.start.row, n.start.column);
      var r = cc11001100_hook("r", this.session.getLine(e).substring(0, t), "var-init");

      if (t === 0) {
        do e--, r = cc11001100_hook("r", this.doc.getLine(e), "assign"); while (e > 0 && /^\s*$/.test(r));

        t = cc11001100_hook("t", r.length, "assign"), /\s+$/.test(r) || (r = cc11001100_hook("r", "", "assign"));
      }

      var s = cc11001100_hook("s", i.stringReverse(r), "var-init"),
          o = cc11001100_hook("o", this.$shortWordEndIndex(s), "var-init");
      return this.moveCursorTo(e, t - o);
    }, "assign"), this.moveCursorWordRight = cc11001100_hook("this.moveCursorWordRight", function () {
      this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
    }, "assign"), this.moveCursorWordLeft = cc11001100_hook("this.moveCursorWordLeft", function () {
      this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
    }, "assign"), this.moveCursorBy = cc11001100_hook("this.moveCursorBy", function (e, t) {
      var n = cc11001100_hook("n", this.session.documentToScreenPosition(this.lead.row, this.lead.column), "var-init"),
          r;
      t === 0 && (e !== 0 && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (r = cc11001100_hook("r", this.session.$bidiHandler.getPosLeft(n.column), "assign"), n.column = cc11001100_hook("n.column", Math.round(r / this.session.$bidiHandler.charWidths[0]), "assign")) : r = cc11001100_hook("r", n.column * this.session.$bidiHandler.charWidths[0], "assign")), this.$desiredColumn ? n.column = cc11001100_hook("n.column", this.$desiredColumn, "assign") : this.$desiredColumn = cc11001100_hook("this.$desiredColumn", n.column, "assign"));
      var i = cc11001100_hook("i", this.session.screenToDocumentPosition(n.row + e, n.column, r), "var-init");
      e !== 0 && t === 0 && i.row === this.lead.row && i.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[i.row] && (i.row > 0 || e > 0) && i.row++, this.moveCursorTo(i.row, i.column + t, t === 0);
    }, "assign"), this.moveCursorToPosition = cc11001100_hook("this.moveCursorToPosition", function (e) {
      this.moveCursorTo(e.row, e.column);
    }, "assign"), this.moveCursorTo = cc11001100_hook("this.moveCursorTo", function (e, t, n) {
      var r = cc11001100_hook("r", this.session.getFoldAt(e, t, 1), "var-init");
      r && (e = cc11001100_hook("e", r.start.row, "assign"), t = cc11001100_hook("t", r.start.column, "assign")), this.$keepDesiredColumnOnChange = cc11001100_hook("this.$keepDesiredColumnOnChange", !0, "assign");
      var i = cc11001100_hook("i", this.session.getLine(e), "var-init");
      /[\uDC00-\uDFFF]/.test(i.charAt(t)) && i.charAt(t - 1) && (this.lead.row == e && this.lead.column == t + 1 ? t -= cc11001100_hook("t", 1, "assign") : t += cc11001100_hook("t", 1, "assign")), this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = cc11001100_hook("this.$keepDesiredColumnOnChange", !1, "assign"), n || (this.$desiredColumn = cc11001100_hook("this.$desiredColumn", null, "assign"));
    }, "assign"), this.moveCursorToScreen = cc11001100_hook("this.moveCursorToScreen", function (e, t, n) {
      var r = cc11001100_hook("r", this.session.screenToDocumentPosition(e, t), "var-init");
      this.moveCursorTo(r.row, r.column, n);
    }, "assign"), this.detach = cc11001100_hook("this.detach", function () {
      this.lead.detach(), this.anchor.detach(), this.session = cc11001100_hook("this.session", this.doc = cc11001100_hook("this.doc", null, "assign"), "assign");
    }, "assign"), this.fromOrientedRange = cc11001100_hook("this.fromOrientedRange", function (e) {
      this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = cc11001100_hook("this.$desiredColumn", e.desiredColumn || this.$desiredColumn, "assign");
    }, "assign"), this.toOrientedRange = cc11001100_hook("this.toOrientedRange", function (e) {
      var t = cc11001100_hook("t", this.getRange(), "var-init");
      return e ? (e.start.column = cc11001100_hook("e.start.column", t.start.column, "assign"), e.start.row = cc11001100_hook("e.start.row", t.start.row, "assign"), e.end.column = cc11001100_hook("e.end.column", t.end.column, "assign"), e.end.row = cc11001100_hook("e.end.row", t.end.row, "assign")) : e = cc11001100_hook("e", t, "assign"), e.cursor = cc11001100_hook("e.cursor", this.isBackwards() ? e.start : e.end, "assign"), e.desiredColumn = cc11001100_hook("e.desiredColumn", this.$desiredColumn, "assign"), e;
    }, "assign"), this.getRangeOfMovements = cc11001100_hook("this.getRangeOfMovements", function (e) {
      var t = cc11001100_hook("t", this.getCursor(), "var-init");

      try {
        e(this);
        var n = cc11001100_hook("n", this.getCursor(), "var-init");
        return o.fromPoints(t, n);
      } catch (r) {
        return o.fromPoints(t, t);
      } finally {
        this.moveCursorToPosition(t);
      }
    }, "assign"), this.toJSON = cc11001100_hook("this.toJSON", function () {
      if (this.rangeCount) var e = cc11001100_hook("e", this.ranges.map(function (e) {
        var t = cc11001100_hook("t", e.clone(), "var-init");
        return t.isBackwards = cc11001100_hook("t.isBackwards", e.cursor == e.start, "assign"), t;
      }), "var-init");else {
        var e = cc11001100_hook("e", this.getRange(), "var-init");
        e.isBackwards = cc11001100_hook("e.isBackwards", this.isBackwards(), "assign");
      }
      return e;
    }, "assign"), this.fromJSON = cc11001100_hook("this.fromJSON", function (e) {
      if (e.start == undefined) {
        if (this.rangeList) {
          this.toSingleRange(e[0]);

          for (var t = cc11001100_hook("t", e.length, "var-init"); t--;) {
            var n = cc11001100_hook("n", o.fromPoints(e[t].start, e[t].end), "var-init");
            e[t].isBackwards && (n.cursor = cc11001100_hook("n.cursor", n.start, "assign")), this.addRange(n, !0);
          }

          return;
        }

        e = cc11001100_hook("e", e[0], "assign");
      }

      this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards);
    }, "assign"), this.isEqual = cc11001100_hook("this.isEqual", function (e) {
      if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;
      if (!e.length || !this.ranges) return this.getRange().isEqual(e);

      for (var t = cc11001100_hook("t", this.ranges.length, "var-init"); t--;) if (!this.ranges[t].isEqual(e[t])) return !1;

      return !0;
    }, "assign");
  }).call(u.prototype), t.Selection = cc11001100_hook("t.Selection", u, "assign");
}), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./config"), "var-init"),
      i = cc11001100_hook("i", 2e3, "var-init"),
      s = function (e) {
    this.states = cc11001100_hook("this.states", e, "assign"), this.regExps = cc11001100_hook("this.regExps", {}, "assign"), this.matchMappings = cc11001100_hook("this.matchMappings", {}, "assign");

    for (var t in this.states) {
      var n = cc11001100_hook("n", this.states[t], "var-init"),
          r = cc11001100_hook("r", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          s = cc11001100_hook("s", this.matchMappings[t] = cc11001100_hook("this.matchMappings[t]", {
        defaultToken: cc11001100_hook("defaultToken", "text", "object-key-init")
      }, "assign"), "var-init"),
          o = cc11001100_hook("o", "g", "var-init"),
          u = cc11001100_hook("u", [], "var-init");

      for (var a = cc11001100_hook("a", 0, "var-init"); a < n.length; a++) {
        var f = cc11001100_hook("f", n[a], "var-init");
        f.defaultToken && (s.defaultToken = cc11001100_hook("s.defaultToken", f.defaultToken, "assign")), f.caseInsensitive && (o = cc11001100_hook("o", "gi", "assign"));
        if (f.regex == null) continue;
        f.regex instanceof RegExp && (f.regex = cc11001100_hook("f.regex", f.regex.toString().slice(1, -1), "assign"));
        var l = cc11001100_hook("l", f.regex, "var-init"),
            c = cc11001100_hook("c", new RegExp("(?:(" + l + ")|(.))").exec("a").length - 2, "var-init");
        Array.isArray(f.token) ? f.token.length == 1 || c == 1 ? f.token = cc11001100_hook("f.token", f.token[0], "assign") : c - 1 != f.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
          rule: cc11001100_hook("rule", f, "object-key-init"),
          groupCount: cc11001100_hook("groupCount", c - 1, "object-key-init")
        }), f.token = cc11001100_hook("f.token", f.token[0], "assign")) : (f.tokenArray = cc11001100_hook("f.tokenArray", f.token, "assign"), f.token = cc11001100_hook("f.token", null, "assign"), f.onMatch = cc11001100_hook("f.onMatch", this.$arrayTokens, "assign")) : typeof f.token == "function" && !f.onMatch && (c > 1 ? f.onMatch = cc11001100_hook("f.onMatch", this.$applyToken, "assign") : f.onMatch = cc11001100_hook("f.onMatch", f.token, "assign")), c > 1 && (/\\\d/.test(f.regex) ? l = cc11001100_hook("l", f.regex.replace(/\\([0-9]+)/g, function (e, t) {
          return "\\" + (parseInt(t, 10) + i + 1);
        }), "assign") : (c = cc11001100_hook("c", 1, "assign"), l = cc11001100_hook("l", this.removeCapturingGroups(f.regex), "assign")), !f.splitRegex && typeof f.token != "string" && u.push(f)), s[i] = cc11001100_hook("s[i]", a, "assign"), i += cc11001100_hook("i", c, "assign"), r.push(l), f.onMatch || (f.onMatch = cc11001100_hook("f.onMatch", null, "assign"));
      }

      r.length || (s[0] = cc11001100_hook("s[0]", 0, "assign"), r.push("$")), u.forEach(function (e) {
        e.splitRegex = cc11001100_hook("e.splitRegex", this.createSplitterRegexp(e.regex, o), "assign");
      }, this), this.regExps[t] = cc11001100_hook("this.regExps[t]", new RegExp("(" + r.join(")|(") + ")|($)", o), "assign");
    }
  };

  (function () {
    this.$setMaxTokenCount = cc11001100_hook("this.$setMaxTokenCount", function (e) {
      i = cc11001100_hook("i", e | 0, "assign");
    }, "assign"), this.$applyToken = cc11001100_hook("this.$applyToken", function (e) {
      var t = cc11001100_hook("t", this.splitRegex.exec(e).slice(1), "var-init"),
          n = cc11001100_hook("n", this.token.apply(this, t), "var-init");
      if (typeof n == "string") return [{
        type: cc11001100_hook("type", n, "object-key-init"),
        value: cc11001100_hook("value", e, "object-key-init")
      }];
      var r = cc11001100_hook("r", [], "var-init");

      for (var i = cc11001100_hook("i", 0, "var-init"), s = cc11001100_hook("s", n.length, "var-init"); i < s; i++) t[i] && (r[r.length] = cc11001100_hook("r[r.length]", {
        type: cc11001100_hook("type", n[i], "object-key-init"),
        value: cc11001100_hook("value", t[i], "object-key-init")
      }, "assign"));

      return r;
    }, "assign"), this.$arrayTokens = cc11001100_hook("this.$arrayTokens", function (e) {
      if (!e) return [];
      var t = cc11001100_hook("t", this.splitRegex.exec(e), "var-init");
      if (!t) return "text";
      var n = cc11001100_hook("n", [], "var-init"),
          r = cc11001100_hook("r", this.tokenArray, "var-init");

      for (var i = cc11001100_hook("i", 0, "var-init"), s = cc11001100_hook("s", r.length, "var-init"); i < s; i++) t[i + 1] && (n[n.length] = cc11001100_hook("n[n.length]", {
        type: cc11001100_hook("type", r[i], "object-key-init"),
        value: cc11001100_hook("value", t[i + 1], "object-key-init")
      }, "assign"));

      return n;
    }, "assign"), this.removeCapturingGroups = cc11001100_hook("this.removeCapturingGroups", function (e) {
      var t = cc11001100_hook("t", e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function (e, t) {
        return t ? "(?:" : e;
      }), "var-init");
      return t;
    }, "assign"), this.createSplitterRegexp = cc11001100_hook("this.createSplitterRegexp", function (e, t) {
      if (e.indexOf("(?=") != -1) {
        var n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", !1, "var-init"),
            i = cc11001100_hook("i", {}, "var-init");
        e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function (e, t, s, o, u, a) {
          return r ? r = cc11001100_hook("r", u != "]", "assign") : u ? r = cc11001100_hook("r", !0, "assign") : o ? (n == i.stack && (i.end = cc11001100_hook("i.end", a + 1, "assign"), i.stack = cc11001100_hook("i.stack", -1, "assign")), n--) : s && (n++, s.length != 1 && (i.stack = cc11001100_hook("i.stack", n, "assign"), i.start = cc11001100_hook("i.start", a, "assign"))), e;
        }), i.end != null && /^\)*$/.test(e.substr(i.end)) && (e = cc11001100_hook("e", e.substring(0, i.start) + e.substr(i.end), "assign"));
      }

      return e.charAt(0) != "^" && (e = cc11001100_hook("e", "^" + e, "assign")), e.charAt(e.length - 1) != "$" && (e += cc11001100_hook("e", "$", "assign")), new RegExp(e, (t || "").replace("g", ""));
    }, "assign"), this.getLineTokens = cc11001100_hook("this.getLineTokens", function (e, t) {
      if (t && typeof t != "string") {
        var n = cc11001100_hook("n", t.slice(0), "var-init");
        t = cc11001100_hook("t", n[0], "assign"), t === "#tmp" && (n.shift(), t = cc11001100_hook("t", n.shift(), "assign"));
      } else var n = cc11001100_hook("n", [], "var-init");

      var r = cc11001100_hook("r", t || "start", "var-init"),
          s = cc11001100_hook("s", this.states[r], "var-init");
      s || (r = cc11001100_hook("r", "start", "assign"), s = cc11001100_hook("s", this.states[r], "assign"));
      var o = cc11001100_hook("o", this.matchMappings[r], "var-init"),
          u = cc11001100_hook("u", this.regExps[r], "var-init");
      u.lastIndex = cc11001100_hook("u.lastIndex", 0, "assign");
      var a,
          f = cc11001100_hook("f", [], "var-init"),
          l = cc11001100_hook("l", 0, "var-init"),
          c = cc11001100_hook("c", 0, "var-init"),
          h = cc11001100_hook("h", {
        type: cc11001100_hook("type", null, "object-key-init"),
        value: cc11001100_hook("value", "", "object-key-init")
      }, "var-init");

      while (a = cc11001100_hook("a", u.exec(e), "assign")) {
        var p = cc11001100_hook("p", o.defaultToken, "var-init"),
            d = cc11001100_hook("d", null, "var-init"),
            v = cc11001100_hook("v", a[0], "var-init"),
            m = cc11001100_hook("m", u.lastIndex, "var-init");

        if (m - v.length > l) {
          var g = cc11001100_hook("g", e.substring(l, m - v.length), "var-init");
          h.type == p ? h.value += cc11001100_hook("h.value", g, "assign") : (h.type && f.push(h), h = cc11001100_hook("h", {
            type: cc11001100_hook("type", p, "object-key-init"),
            value: cc11001100_hook("value", g, "object-key-init")
          }, "assign"));
        }

        for (var y = cc11001100_hook("y", 0, "var-init"); y < a.length - 2; y++) {
          if (a[y + 1] === undefined) continue;
          d = cc11001100_hook("d", s[o[y]], "assign"), d.onMatch ? p = cc11001100_hook("p", d.onMatch(v, r, n, e), "assign") : p = cc11001100_hook("p", d.token, "assign"), d.next && (typeof d.next == "string" ? r = cc11001100_hook("r", d.next, "assign") : r = cc11001100_hook("r", d.next(r, n), "assign"), s = cc11001100_hook("s", this.states[r], "assign"), s || (this.reportError("state doesn't exist", r), r = cc11001100_hook("r", "start", "assign"), s = cc11001100_hook("s", this.states[r], "assign")), o = cc11001100_hook("o", this.matchMappings[r], "assign"), l = cc11001100_hook("l", m, "assign"), u = cc11001100_hook("u", this.regExps[r], "assign"), u.lastIndex = cc11001100_hook("u.lastIndex", m, "assign")), d.consumeLineEnd && (l = cc11001100_hook("l", m, "assign"));
          break;
        }

        if (v) if (typeof p == "string") !!d && d.merge === !1 || h.type !== p ? (h.type && f.push(h), h = cc11001100_hook("h", {
          type: cc11001100_hook("type", p, "object-key-init"),
          value: cc11001100_hook("value", v, "object-key-init")
        }, "assign")) : h.value += cc11001100_hook("h.value", v, "assign");else if (p) {
          h.type && f.push(h), h = cc11001100_hook("h", {
            type: cc11001100_hook("type", null, "object-key-init"),
            value: cc11001100_hook("value", "", "object-key-init")
          }, "assign");

          for (var y = cc11001100_hook("y", 0, "var-init"); y < p.length; y++) f.push(p[y]);
        }
        if (l == e.length) break;
        l = cc11001100_hook("l", m, "assign");

        if (c++ > i) {
          c > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
            startState: cc11001100_hook("startState", t, "object-key-init"),
            line: cc11001100_hook("line", e, "object-key-init")
          });

          while (l < e.length) h.type && f.push(h), h = cc11001100_hook("h", {
            value: cc11001100_hook("value", e.substring(l, l += cc11001100_hook("l", 2e3, "assign")), "object-key-init"),
            type: cc11001100_hook("type", "overflow", "object-key-init")
          }, "assign");

          r = cc11001100_hook("r", "start", "assign"), n = cc11001100_hook("n", [], "assign");
          break;
        }
      }

      return h.type && f.push(h), n.length > 1 && n[0] !== r && n.unshift("#tmp", r), {
        tokens: cc11001100_hook("tokens", f, "object-key-init"),
        state: cc11001100_hook("state", n.length ? n : r, "object-key-init")
      };
    }, "assign"), this.reportError = cc11001100_hook("this.reportError", r.reportError, "assign");
  }).call(s.prototype), t.Tokenizer = cc11001100_hook("t.Tokenizer", s, "assign");
}), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/lang"), "var-init"),
      i = function () {
    this.$rules = cc11001100_hook("this.$rules", {
      start: cc11001100_hook("start", [{
        token: cc11001100_hook("token", "empty_line", "object-key-init"),
        regex: cc11001100_hook("regex", "^$", "object-key-init")
      }, {
        defaultToken: cc11001100_hook("defaultToken", "text", "object-key-init")
      }], "object-key-init")
    }, "assign");
  };

  (function () {
    this.addRules = cc11001100_hook("this.addRules", function (e, t) {
      if (!t) {
        for (var n in e) this.$rules[n] = cc11001100_hook("this.$rules[n]", e[n], "assign");

        return;
      }

      for (var n in e) {
        var r = cc11001100_hook("r", e[n], "var-init");

        for (var i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
          var s = cc11001100_hook("s", r[i], "var-init");
          if (s.next || s.onMatch) typeof s.next == "string" && s.next.indexOf(t) !== 0 && (s.next = cc11001100_hook("s.next", t + s.next, "assign")), s.nextState && s.nextState.indexOf(t) !== 0 && (s.nextState = cc11001100_hook("s.nextState", t + s.nextState, "assign"));
        }

        this.$rules[t + n] = cc11001100_hook("this.$rules[t + n]", r, "assign");
      }
    }, "assign"), this.getRules = cc11001100_hook("this.getRules", function () {
      return this.$rules;
    }, "assign"), this.embedRules = cc11001100_hook("this.embedRules", function (e, t, n, i, s) {
      var o = cc11001100_hook("o", typeof e == "function" ? new e().getRules() : e, "var-init");
      if (i) for (var u = cc11001100_hook("u", 0, "var-init"); u < i.length; u++) i[u] = cc11001100_hook("i[u]", t + i[u], "assign");else {
        i = cc11001100_hook("i", [], "assign");

        for (var a in o) i.push(t + a);
      }
      this.addRules(o, t);

      if (n) {
        var f = cc11001100_hook("f", Array.prototype[s ? "push" : "unshift"], "var-init");

        for (var u = cc11001100_hook("u", 0, "var-init"); u < i.length; u++) f.apply(this.$rules[i[u]], r.deepCopy(n));
      }

      this.$embeds || (this.$embeds = cc11001100_hook("this.$embeds", [], "assign")), this.$embeds.push(t);
    }, "assign"), this.getEmbeds = cc11001100_hook("this.getEmbeds", function () {
      return this.$embeds;
    }, "assign");

    var e = function (e, t) {
      return (e != "start" || t.length) && t.unshift(this.nextState, e), this.nextState;
    },
        t = function (e, t) {
      return t.shift(), t.shift() || "start";
    };

    this.normalizeRules = cc11001100_hook("this.normalizeRules", function () {
      function i(s) {
        cc11001100_hook("s", s, "function-parameter");
        var o = cc11001100_hook("o", r[s], "var-init");
        o.processed = cc11001100_hook("o.processed", !0, "assign");

        for (var u = cc11001100_hook("u", 0, "var-init"); u < o.length; u++) {
          var a = cc11001100_hook("a", o[u], "var-init"),
              f = cc11001100_hook("f", null, "var-init");
          Array.isArray(a) && (f = cc11001100_hook("f", a, "assign"), a = cc11001100_hook("a", {}, "assign")), !a.regex && a.start && (a.regex = cc11001100_hook("a.regex", a.start, "assign"), a.next || (a.next = cc11001100_hook("a.next", [], "assign")), a.next.push({
            defaultToken: cc11001100_hook("defaultToken", a.token, "object-key-init")
          }, {
            token: cc11001100_hook("token", a.token + ".end", "object-key-init"),
            regex: cc11001100_hook("regex", a.end || a.start, "object-key-init"),
            next: cc11001100_hook("next", "pop", "object-key-init")
          }), a.token = cc11001100_hook("a.token", a.token + ".start", "assign"), a.push = cc11001100_hook("a.push", !0, "assign"));
          var l = cc11001100_hook("l", a.next || a.push, "var-init");

          if (l && Array.isArray(l)) {
            var c = cc11001100_hook("c", a.stateName, "var-init");
            c || (c = cc11001100_hook("c", a.token, "assign"), typeof c != "string" && (c = cc11001100_hook("c", c[0] || "", "assign")), r[c] && (c += cc11001100_hook("c", n++, "assign"))), r[c] = cc11001100_hook("r[c]", l, "assign"), a.next = cc11001100_hook("a.next", c, "assign"), i(c);
          } else l == "pop" && (a.next = cc11001100_hook("a.next", t, "assign"));

          a.push && (a.nextState = cc11001100_hook("a.nextState", a.next || a.push, "assign"), a.next = cc11001100_hook("a.next", e, "assign"), delete a.push);
          if (a.rules) for (var h in a.rules) r[h] ? r[h].push && r[h].push.apply(r[h], a.rules[h]) : r[h] = cc11001100_hook("r[h]", a.rules[h], "assign");
          var p = cc11001100_hook("p", typeof a == "string" ? a : a.include, "var-init");
          p && (Array.isArray(p) ? f = cc11001100_hook("f", p.map(function (e) {
            return r[e];
          }), "assign") : f = cc11001100_hook("f", r[p], "assign"));

          if (f) {
            var d = cc11001100_hook("d", [u, 1].concat(f), "var-init");
            a.noEscape && (d = cc11001100_hook("d", d.filter(function (e) {
              return !e.next;
            }), "assign")), o.splice.apply(o, d), u--;
          }

          a.keywordMap && (a.token = cc11001100_hook("a.token", this.createKeywordMapper(a.keywordMap, a.defaultToken || "text", a.caseInsensitive), "assign"), delete a.defaultToken);
        }
      }

      var n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", this.$rules, "var-init");
      Object.keys(r).forEach(i, this);
    }, "assign"), this.createKeywordMapper = cc11001100_hook("this.createKeywordMapper", function (e, t, n, r) {
      var i = cc11001100_hook("i", Object.create(null), "var-init");
      return Object.keys(e).forEach(function (t) {
        var s = cc11001100_hook("s", e[t], "var-init");
        n && (s = cc11001100_hook("s", s.toLowerCase(), "assign"));
        var o = cc11001100_hook("o", s.split(r || "|"), "var-init");

        for (var u = cc11001100_hook("u", o.length, "var-init"); u--;) i[o[u]] = cc11001100_hook("i[o[u]]", t, "assign");
      }), Object.getPrototypeOf(i) && (i.__proto__ = cc11001100_hook("i.__proto__", null, "assign")), this.$keywordList = cc11001100_hook("this.$keywordList", Object.keys(i), "assign"), e = cc11001100_hook("e", null, "assign"), n ? function (e) {
        return i[e.toLowerCase()] || t;
      } : function (e) {
        return i[e] || t;
      };
    }, "assign"), this.getKeywords = cc11001100_hook("this.getKeywords", function () {
      return this.$keywords;
    }, "assign");
  }).call(i.prototype), t.TextHighlightRules = cc11001100_hook("t.TextHighlightRules", i, "assign");
}), ace.define("ace/mode/behaviour", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  var r = function () {
    this.$behaviours = cc11001100_hook("this.$behaviours", {}, "assign");
  };

  (function () {
    this.add = cc11001100_hook("this.add", function (e, t, n) {
      switch (undefined) {
        case this.$behaviours:
          this.$behaviours = cc11001100_hook("this.$behaviours", {}, "assign");

        case this.$behaviours[e]:
          this.$behaviours[e] = cc11001100_hook("this.$behaviours[e]", {}, "assign");
      }

      this.$behaviours[e][t] = cc11001100_hook("this.$behaviours[e][t]", n, "assign");
    }, "assign"), this.addBehaviours = cc11001100_hook("this.addBehaviours", function (e) {
      for (var t in e) for (var n in e[t]) this.add(t, n, e[t][n]);
    }, "assign"), this.remove = cc11001100_hook("this.remove", function (e) {
      this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e];
    }, "assign"), this.inherit = cc11001100_hook("this.inherit", function (e, t) {
      if (typeof e == "function") var n = cc11001100_hook("n", new e().getBehaviours(t), "var-init");else var n = cc11001100_hook("n", e.getBehaviours(t), "var-init");
      this.addBehaviours(n);
    }, "assign"), this.getBehaviours = cc11001100_hook("this.getBehaviours", function (e) {
      if (!e) return this.$behaviours;
      var t = cc11001100_hook("t", {}, "var-init");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) this.$behaviours[e[n]] && (t[e[n]] = cc11001100_hook("t[e[n]]", this.$behaviours[e[n]], "assign"));

      return t;
    }, "assign");
  }).call(r.prototype), t.Behaviour = cc11001100_hook("t.Behaviour", r, "assign");
}), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./range").Range, "var-init"),
      i = function (e, t, n) {
    this.$session = cc11001100_hook("this.$session", e, "assign"), this.$row = cc11001100_hook("this.$row", t, "assign"), this.$rowTokens = cc11001100_hook("this.$rowTokens", e.getTokens(t), "assign");
    var r = cc11001100_hook("r", e.getTokenAt(t, n), "var-init");
    this.$tokenIndex = cc11001100_hook("this.$tokenIndex", r ? r.index : -1, "assign");
  };

  (function () {
    this.stepBackward = cc11001100_hook("this.stepBackward", function () {
      this.$tokenIndex -= cc11001100_hook("this.$tokenIndex", 1, "assign");

      while (this.$tokenIndex < 0) {
        this.$row -= cc11001100_hook("this.$row", 1, "assign");
        if (this.$row < 0) return this.$row = cc11001100_hook("this.$row", 0, "assign"), null;
        this.$rowTokens = cc11001100_hook("this.$rowTokens", this.$session.getTokens(this.$row), "assign"), this.$tokenIndex = cc11001100_hook("this.$tokenIndex", this.$rowTokens.length - 1, "assign");
      }

      return this.$rowTokens[this.$tokenIndex];
    }, "assign"), this.stepForward = cc11001100_hook("this.stepForward", function () {
      this.$tokenIndex += cc11001100_hook("this.$tokenIndex", 1, "assign");
      var e;

      while (this.$tokenIndex >= this.$rowTokens.length) {
        this.$row += cc11001100_hook("this.$row", 1, "assign"), e || (e = cc11001100_hook("e", this.$session.getLength(), "assign"));
        if (this.$row >= e) return this.$row = cc11001100_hook("this.$row", e - 1, "assign"), null;
        this.$rowTokens = cc11001100_hook("this.$rowTokens", this.$session.getTokens(this.$row), "assign"), this.$tokenIndex = cc11001100_hook("this.$tokenIndex", 0, "assign");
      }

      return this.$rowTokens[this.$tokenIndex];
    }, "assign"), this.getCurrentToken = cc11001100_hook("this.getCurrentToken", function () {
      return this.$rowTokens[this.$tokenIndex];
    }, "assign"), this.getCurrentTokenRow = cc11001100_hook("this.getCurrentTokenRow", function () {
      return this.$row;
    }, "assign"), this.getCurrentTokenColumn = cc11001100_hook("this.getCurrentTokenColumn", function () {
      var e = cc11001100_hook("e", this.$rowTokens, "var-init"),
          t = cc11001100_hook("t", this.$tokenIndex, "var-init"),
          n = cc11001100_hook("n", e[t].start, "var-init");
      if (n !== undefined) return n;
      n = cc11001100_hook("n", 0, "assign");

      while (t > 0) t -= cc11001100_hook("t", 1, "assign"), n += cc11001100_hook("n", e[t].value.length, "assign");

      return n;
    }, "assign"), this.getCurrentTokenPosition = cc11001100_hook("this.getCurrentTokenPosition", function () {
      return {
        row: cc11001100_hook("row", this.$row, "object-key-init"),
        column: cc11001100_hook("column", this.getCurrentTokenColumn(), "object-key-init")
      };
    }, "assign"), this.getCurrentTokenRange = cc11001100_hook("this.getCurrentTokenRange", function () {
      var e = cc11001100_hook("e", this.$rowTokens[this.$tokenIndex], "var-init"),
          t = cc11001100_hook("t", this.getCurrentTokenColumn(), "var-init");
      return new r(this.$row, t, this.$row, t + e.value.length);
    }, "assign");
  }).call(i.prototype), t.TokenIterator = cc11001100_hook("t.TokenIterator", i, "assign");
}), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../../lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("../behaviour").Behaviour, "var-init"),
      s = cc11001100_hook("s", e("../../token_iterator").TokenIterator, "var-init"),
      o = cc11001100_hook("o", e("../../lib/lang"), "var-init"),
      u = cc11001100_hook("u", ["text", "paren.rparen", "punctuation.operator"], "var-init"),
      a = cc11001100_hook("a", ["text", "paren.rparen", "punctuation.operator", "comment"], "var-init"),
      f,
      l = cc11001100_hook("l", {}, "var-init"),
      c = cc11001100_hook("c", {
    '"': cc11001100_hook('"', '"', "object-key-init"),
    "'": cc11001100_hook("'", "'", "object-key-init")
  }, "var-init"),
      h = function (e) {
    var t = cc11001100_hook("t", -1, "var-init");
    e.multiSelect && (t = cc11001100_hook("t", e.selection.index, "assign"), l.rangeCount != e.multiSelect.rangeCount && (l = cc11001100_hook("l", {
      rangeCount: cc11001100_hook("rangeCount", e.multiSelect.rangeCount, "object-key-init")
    }, "assign")));
    if (l[t]) return f = cc11001100_hook("f", l[t], "assign");
    f = cc11001100_hook("f", l[t] = cc11001100_hook("l[t]", {
      autoInsertedBrackets: cc11001100_hook("autoInsertedBrackets", 0, "object-key-init"),
      autoInsertedRow: cc11001100_hook("autoInsertedRow", -1, "object-key-init"),
      autoInsertedLineEnd: cc11001100_hook("autoInsertedLineEnd", "", "object-key-init"),
      maybeInsertedBrackets: cc11001100_hook("maybeInsertedBrackets", 0, "object-key-init"),
      maybeInsertedRow: cc11001100_hook("maybeInsertedRow", -1, "object-key-init"),
      maybeInsertedLineStart: cc11001100_hook("maybeInsertedLineStart", "", "object-key-init"),
      maybeInsertedLineEnd: cc11001100_hook("maybeInsertedLineEnd", "", "object-key-init")
    }, "assign"), "assign");
  },
      p = function (e, t, n, r) {
    var i = cc11001100_hook("i", e.end.row - e.start.row, "var-init");
    return {
      text: cc11001100_hook("text", n + t + r, "object-key-init"),
      selection: cc11001100_hook("selection", [0, e.start.column + 1, i, e.end.column + (i ? 0 : 1)], "object-key-init")
    };
  },
      d = function (e) {
    this.add("braces", "insertion", function (t, n, r, i, s) {
      var u = cc11001100_hook("u", r.getCursorPosition(), "var-init"),
          a = cc11001100_hook("a", i.doc.getLine(u.row), "var-init");

      if (s == "{") {
        h(r);
        var l = cc11001100_hook("l", r.getSelectionRange(), "var-init"),
            c = cc11001100_hook("c", i.doc.getTextRange(l), "var-init");
        if (c !== "" && c !== "{" && r.getWrapBehavioursEnabled()) return p(l, c, "{", "}");
        if (d.isSaneInsertion(r, i)) return /[\]\}\)]/.test(a[u.column]) || r.inMultiSelectMode || e && e.braces ? (d.recordAutoInsert(r, i, "}"), {
          text: cc11001100_hook("text", "{}", "object-key-init"),
          selection: cc11001100_hook("selection", [1, 1], "object-key-init")
        }) : (d.recordMaybeInsert(r, i, "{"), {
          text: cc11001100_hook("text", "{", "object-key-init"),
          selection: cc11001100_hook("selection", [1, 1], "object-key-init")
        });
      } else if (s == "}") {
        h(r);
        var v = cc11001100_hook("v", a.substring(u.column, u.column + 1), "var-init");

        if (v == "}") {
          var m = cc11001100_hook("m", i.$findOpeningBracket("}", {
            column: cc11001100_hook("column", u.column + 1, "object-key-init"),
            row: cc11001100_hook("row", u.row, "object-key-init")
          }), "var-init");
          if (m !== null && d.isAutoInsertedClosing(u, a, s)) return d.popAutoInsertedClosing(), {
            text: cc11001100_hook("text", "", "object-key-init"),
            selection: cc11001100_hook("selection", [1, 1], "object-key-init")
          };
        }
      } else {
        if (s == "\n" || s == "\r\n") {
          h(r);
          var g = cc11001100_hook("g", "", "var-init");
          d.isMaybeInsertedClosing(u, a) && (g = cc11001100_hook("g", o.stringRepeat("}", f.maybeInsertedBrackets), "assign"), d.clearMaybeInsertedClosing());
          var v = cc11001100_hook("v", a.substring(u.column, u.column + 1), "var-init");

          if (v === "}") {
            var y = cc11001100_hook("y", i.findMatchingBracket({
              row: cc11001100_hook("row", u.row, "object-key-init"),
              column: cc11001100_hook("column", u.column + 1, "object-key-init")
            }, "}"), "var-init");
            if (!y) return null;
            var b = cc11001100_hook("b", this.$getIndent(i.getLine(y.row)), "var-init");
          } else {
            if (!g) {
              d.clearMaybeInsertedClosing();
              return;
            }

            var b = cc11001100_hook("b", this.$getIndent(a), "var-init");
          }

          var w = cc11001100_hook("w", b + i.getTabString(), "var-init");
          return {
            text: cc11001100_hook("text", "\n" + w + "\n" + b + g, "object-key-init"),
            selection: cc11001100_hook("selection", [1, w.length, 1, w.length], "object-key-init")
          };
        }

        d.clearMaybeInsertedClosing();
      }
    }), this.add("braces", "deletion", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", r.doc.getTextRange(i), "var-init");

      if (!i.isMultiLine() && s == "{") {
        h(n);
        var o = cc11001100_hook("o", r.doc.getLine(i.start.row), "var-init"),
            u = cc11001100_hook("u", o.substring(i.end.column, i.end.column + 1), "var-init");
        if (u == "}") return i.end.column++, i;
        f.maybeInsertedBrackets--;
      }
    }), this.add("parens", "insertion", function (e, t, n, r, i) {
      if (i == "(") {
        h(n);
        var s = cc11001100_hook("s", n.getSelectionRange(), "var-init"),
            o = cc11001100_hook("o", r.doc.getTextRange(s), "var-init");
        if (o !== "" && n.getWrapBehavioursEnabled()) return p(s, o, "(", ")");
        if (d.isSaneInsertion(n, r)) return d.recordAutoInsert(n, r, ")"), {
          text: cc11001100_hook("text", "()", "object-key-init"),
          selection: cc11001100_hook("selection", [1, 1], "object-key-init")
        };
      } else if (i == ")") {
        h(n);
        var u = cc11001100_hook("u", n.getCursorPosition(), "var-init"),
            a = cc11001100_hook("a", r.doc.getLine(u.row), "var-init"),
            f = cc11001100_hook("f", a.substring(u.column, u.column + 1), "var-init");

        if (f == ")") {
          var l = cc11001100_hook("l", r.$findOpeningBracket(")", {
            column: cc11001100_hook("column", u.column + 1, "object-key-init"),
            row: cc11001100_hook("row", u.row, "object-key-init")
          }), "var-init");
          if (l !== null && d.isAutoInsertedClosing(u, a, i)) return d.popAutoInsertedClosing(), {
            text: cc11001100_hook("text", "", "object-key-init"),
            selection: cc11001100_hook("selection", [1, 1], "object-key-init")
          };
        }
      }
    }), this.add("parens", "deletion", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", r.doc.getTextRange(i), "var-init");

      if (!i.isMultiLine() && s == "(") {
        h(n);
        var o = cc11001100_hook("o", r.doc.getLine(i.start.row), "var-init"),
            u = cc11001100_hook("u", o.substring(i.start.column + 1, i.start.column + 2), "var-init");
        if (u == ")") return i.end.column++, i;
      }
    }), this.add("brackets", "insertion", function (e, t, n, r, i) {
      if (i == "[") {
        h(n);
        var s = cc11001100_hook("s", n.getSelectionRange(), "var-init"),
            o = cc11001100_hook("o", r.doc.getTextRange(s), "var-init");
        if (o !== "" && n.getWrapBehavioursEnabled()) return p(s, o, "[", "]");
        if (d.isSaneInsertion(n, r)) return d.recordAutoInsert(n, r, "]"), {
          text: cc11001100_hook("text", "[]", "object-key-init"),
          selection: cc11001100_hook("selection", [1, 1], "object-key-init")
        };
      } else if (i == "]") {
        h(n);
        var u = cc11001100_hook("u", n.getCursorPosition(), "var-init"),
            a = cc11001100_hook("a", r.doc.getLine(u.row), "var-init"),
            f = cc11001100_hook("f", a.substring(u.column, u.column + 1), "var-init");

        if (f == "]") {
          var l = cc11001100_hook("l", r.$findOpeningBracket("]", {
            column: cc11001100_hook("column", u.column + 1, "object-key-init"),
            row: cc11001100_hook("row", u.row, "object-key-init")
          }), "var-init");
          if (l !== null && d.isAutoInsertedClosing(u, a, i)) return d.popAutoInsertedClosing(), {
            text: cc11001100_hook("text", "", "object-key-init"),
            selection: cc11001100_hook("selection", [1, 1], "object-key-init")
          };
        }
      }
    }), this.add("brackets", "deletion", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", r.doc.getTextRange(i), "var-init");

      if (!i.isMultiLine() && s == "[") {
        h(n);
        var o = cc11001100_hook("o", r.doc.getLine(i.start.row), "var-init"),
            u = cc11001100_hook("u", o.substring(i.start.column + 1, i.start.column + 2), "var-init");
        if (u == "]") return i.end.column++, i;
      }
    }), this.add("string_dquotes", "insertion", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", r.$mode.$quotes || c, "var-init");

      if (i.length == 1 && s[i]) {
        if (this.lineCommentStart && this.lineCommentStart.indexOf(i) != -1) return;
        h(n);
        var o = cc11001100_hook("o", i, "var-init"),
            u = cc11001100_hook("u", n.getSelectionRange(), "var-init"),
            a = cc11001100_hook("a", r.doc.getTextRange(u), "var-init");
        if (a !== "" && (a.length != 1 || !s[a]) && n.getWrapBehavioursEnabled()) return p(u, a, o, o);

        if (!a) {
          var f = cc11001100_hook("f", n.getCursorPosition(), "var-init"),
              l = cc11001100_hook("l", r.doc.getLine(f.row), "var-init"),
              d = cc11001100_hook("d", l.substring(f.column - 1, f.column), "var-init"),
              v = cc11001100_hook("v", l.substring(f.column, f.column + 1), "var-init"),
              m = cc11001100_hook("m", r.getTokenAt(f.row, f.column), "var-init"),
              g = cc11001100_hook("g", r.getTokenAt(f.row, f.column + 1), "var-init");
          if (d == "\\" && m && /escape/.test(m.type)) return null;
          var y = cc11001100_hook("y", m && /string|escape/.test(m.type), "var-init"),
              b = cc11001100_hook("b", !g || /string|escape/.test(g.type), "var-init"),
              w;
          if (v == o) w = cc11001100_hook("w", y !== b, "assign"), w && /string\.end/.test(g.type) && (w = cc11001100_hook("w", !1, "assign"));else {
            if (y && !b) return null;
            if (y && b) return null;
            var E = cc11001100_hook("E", r.$mode.tokenRe, "var-init");
            E.lastIndex = cc11001100_hook("E.lastIndex", 0, "assign");
            var S = cc11001100_hook("S", E.test(d), "var-init");
            E.lastIndex = cc11001100_hook("E.lastIndex", 0, "assign");
            var x = cc11001100_hook("x", E.test(d), "var-init");
            if (S || x) return null;
            if (v && !/[\s;,.})\]\\]/.test(v)) return null;
            w = cc11001100_hook("w", !0, "assign");
          }
          return {
            text: cc11001100_hook("text", w ? o + o : "", "object-key-init"),
            selection: cc11001100_hook("selection", [1, 1], "object-key-init")
          };
        }
      }
    }), this.add("string_dquotes", "deletion", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", r.doc.getTextRange(i), "var-init");

      if (!i.isMultiLine() && (s == '"' || s == "'")) {
        h(n);
        var o = cc11001100_hook("o", r.doc.getLine(i.start.row), "var-init"),
            u = cc11001100_hook("u", o.substring(i.start.column + 1, i.start.column + 2), "var-init");
        if (u == s) return i.end.column++, i;
      }
    });
  };

  d.isSaneInsertion = cc11001100_hook("d.isSaneInsertion", function (e, t) {
    var n = cc11001100_hook("n", e.getCursorPosition(), "var-init"),
        r = cc11001100_hook("r", new s(t, n.row, n.column), "var-init");

    if (!this.$matchTokenType(r.getCurrentToken() || "text", u)) {
      var i = cc11001100_hook("i", new s(t, n.row, n.column + 1), "var-init");
      if (!this.$matchTokenType(i.getCurrentToken() || "text", u)) return !1;
    }

    return r.stepForward(), r.getCurrentTokenRow() !== n.row || this.$matchTokenType(r.getCurrentToken() || "text", a);
  }, "assign"), d.$matchTokenType = cc11001100_hook("d.$matchTokenType", function (e, t) {
    return t.indexOf(e.type || e) > -1;
  }, "assign"), d.recordAutoInsert = cc11001100_hook("d.recordAutoInsert", function (e, t, n) {
    var r = cc11001100_hook("r", e.getCursorPosition(), "var-init"),
        i = cc11001100_hook("i", t.doc.getLine(r.row), "var-init");
    this.isAutoInsertedClosing(r, i, f.autoInsertedLineEnd[0]) || (f.autoInsertedBrackets = cc11001100_hook("f.autoInsertedBrackets", 0, "assign")), f.autoInsertedRow = cc11001100_hook("f.autoInsertedRow", r.row, "assign"), f.autoInsertedLineEnd = cc11001100_hook("f.autoInsertedLineEnd", n + i.substr(r.column), "assign"), f.autoInsertedBrackets++;
  }, "assign"), d.recordMaybeInsert = cc11001100_hook("d.recordMaybeInsert", function (e, t, n) {
    var r = cc11001100_hook("r", e.getCursorPosition(), "var-init"),
        i = cc11001100_hook("i", t.doc.getLine(r.row), "var-init");
    this.isMaybeInsertedClosing(r, i) || (f.maybeInsertedBrackets = cc11001100_hook("f.maybeInsertedBrackets", 0, "assign")), f.maybeInsertedRow = cc11001100_hook("f.maybeInsertedRow", r.row, "assign"), f.maybeInsertedLineStart = cc11001100_hook("f.maybeInsertedLineStart", i.substr(0, r.column) + n, "assign"), f.maybeInsertedLineEnd = cc11001100_hook("f.maybeInsertedLineEnd", i.substr(r.column), "assign"), f.maybeInsertedBrackets++;
  }, "assign"), d.isAutoInsertedClosing = cc11001100_hook("d.isAutoInsertedClosing", function (e, t, n) {
    return f.autoInsertedBrackets > 0 && e.row === f.autoInsertedRow && n === f.autoInsertedLineEnd[0] && t.substr(e.column) === f.autoInsertedLineEnd;
  }, "assign"), d.isMaybeInsertedClosing = cc11001100_hook("d.isMaybeInsertedClosing", function (e, t) {
    return f.maybeInsertedBrackets > 0 && e.row === f.maybeInsertedRow && t.substr(e.column) === f.maybeInsertedLineEnd && t.substr(0, e.column) == f.maybeInsertedLineStart;
  }, "assign"), d.popAutoInsertedClosing = cc11001100_hook("d.popAutoInsertedClosing", function () {
    f.autoInsertedLineEnd = cc11001100_hook("f.autoInsertedLineEnd", f.autoInsertedLineEnd.substr(1), "assign"), f.autoInsertedBrackets--;
  }, "assign"), d.clearMaybeInsertedClosing = cc11001100_hook("d.clearMaybeInsertedClosing", function () {
    f && (f.maybeInsertedBrackets = cc11001100_hook("f.maybeInsertedBrackets", 0, "assign"), f.maybeInsertedRow = cc11001100_hook("f.maybeInsertedRow", -1, "assign"));
  }, "assign"), r.inherits(d, i), t.CstyleBehaviour = cc11001100_hook("t.CstyleBehaviour", d, "assign");
}), ace.define("ace/unicode", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], "var-init"),
      i = cc11001100_hook("i", 0, "var-init"),
      s = cc11001100_hook("s", [], "var-init");

  for (var o = cc11001100_hook("o", 0, "var-init"); o < r.length; o += cc11001100_hook("o", 2, "assign")) s.push(i += cc11001100_hook("i", r[o], "assign")), r[o + 1] && s.push(45, i += cc11001100_hook("i", r[o + 1], "assign"));

  t.wordChars = cc11001100_hook("t.wordChars", String.fromCharCode.apply(null, s), "assign");
}), ace.define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../tokenizer").Tokenizer, "var-init"),
      i = cc11001100_hook("i", e("./text_highlight_rules").TextHighlightRules, "var-init"),
      s = cc11001100_hook("s", e("./behaviour/cstyle").CstyleBehaviour, "var-init"),
      o = cc11001100_hook("o", e("../unicode"), "var-init"),
      u = cc11001100_hook("u", e("../lib/lang"), "var-init"),
      a = cc11001100_hook("a", e("../token_iterator").TokenIterator, "var-init"),
      f = cc11001100_hook("f", e("../range").Range, "var-init"),
      l = function () {
    this.HighlightRules = cc11001100_hook("this.HighlightRules", i, "assign");
  };

  (function () {
    this.$defaultBehaviour = cc11001100_hook("this.$defaultBehaviour", new s(), "assign"), this.tokenRe = cc11001100_hook("this.tokenRe", new RegExp("^[" + o.wordChars + "\\$_]+", "g"), "assign"), this.nonTokenRe = cc11001100_hook("this.nonTokenRe", new RegExp("^(?:[^" + o.wordChars + "\\$_]|\\s])+", "g"), "assign"), this.getTokenizer = cc11001100_hook("this.getTokenizer", function () {
      return this.$tokenizer || (this.$highlightRules = cc11001100_hook("this.$highlightRules", this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), "assign"), this.$tokenizer = cc11001100_hook("this.$tokenizer", new r(this.$highlightRules.getRules()), "assign")), this.$tokenizer;
    }, "assign"), this.lineCommentStart = cc11001100_hook("this.lineCommentStart", "", "assign"), this.blockComment = cc11001100_hook("this.blockComment", "", "assign"), this.toggleCommentLines = cc11001100_hook("this.toggleCommentLines", function (e, t, n, r) {
      function w(e) {
        cc11001100_hook("e", e, "function-parameter");

        for (var t = cc11001100_hook("t", n, "var-init"); t <= r; t++) e(i.getLine(t), t);
      }

      var i = cc11001100_hook("i", t.doc, "var-init"),
          s = cc11001100_hook("s", !0, "var-init"),
          o = cc11001100_hook("o", !0, "var-init"),
          a = cc11001100_hook("a", Infinity, "var-init"),
          f = cc11001100_hook("f", t.getTabSize(), "var-init"),
          l = cc11001100_hook("l", !1, "var-init");

      if (!this.lineCommentStart) {
        if (!this.blockComment) return !1;

        var c = cc11001100_hook("c", this.blockComment.start, "var-init"),
            h = cc11001100_hook("h", this.blockComment.end, "var-init"),
            p = cc11001100_hook("p", new RegExp("^(\\s*)(?:" + u.escapeRegExp(c) + ")"), "var-init"),
            d = cc11001100_hook("d", new RegExp("(?:" + u.escapeRegExp(h) + ")\\s*$"), "var-init"),
            v = function (e, t) {
          if (g(e, t)) return;
          if (!s || /\S/.test(e)) i.insertInLine({
            row: cc11001100_hook("row", t, "object-key-init"),
            column: cc11001100_hook("column", e.length, "object-key-init")
          }, h), i.insertInLine({
            row: cc11001100_hook("row", t, "object-key-init"),
            column: cc11001100_hook("column", a, "object-key-init")
          }, c);
        },
            m = function (e, t) {
          var n;
          (n = cc11001100_hook("n", e.match(d), "assign")) && i.removeInLine(t, e.length - n[0].length, e.length), (n = cc11001100_hook("n", e.match(p), "assign")) && i.removeInLine(t, n[1].length, n[0].length);
        },
            g = function (e, n) {
          if (p.test(e)) return !0;
          var r = cc11001100_hook("r", t.getTokens(n), "var-init");

          for (var i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) if (r[i].type === "comment") return !0;
        };
      } else {
        if (Array.isArray(this.lineCommentStart)) var p = cc11001100_hook("p", this.lineCommentStart.map(u.escapeRegExp).join("|"), "var-init"),
            c = cc11001100_hook("c", this.lineCommentStart[0], "var-init");else var p = cc11001100_hook("p", u.escapeRegExp(this.lineCommentStart), "var-init"),
            c = cc11001100_hook("c", this.lineCommentStart, "var-init");
        p = cc11001100_hook("p", new RegExp("^(\\s*)(?:" + p + ") ?"), "assign"), l = cc11001100_hook("l", t.getUseSoftTabs(), "assign");

        var m = function (e, t) {
          var n = cc11001100_hook("n", e.match(p), "var-init");
          if (!n) return;
          var r = cc11001100_hook("r", n[1].length, "var-init"),
              s = cc11001100_hook("s", n[0].length, "var-init");
          !b(e, r, s) && n[0][s - 1] == " " && s--, i.removeInLine(t, r, s);
        },
            y = cc11001100_hook("y", c + " ", "var-init"),
            v = function (e, t) {
          if (!s || /\S/.test(e)) b(e, a, a) ? i.insertInLine({
            row: cc11001100_hook("row", t, "object-key-init"),
            column: cc11001100_hook("column", a, "object-key-init")
          }, y) : i.insertInLine({
            row: cc11001100_hook("row", t, "object-key-init"),
            column: cc11001100_hook("column", a, "object-key-init")
          }, c);
        },
            g = function (e, t) {
          return p.test(e);
        },
            b = function (e, t, n) {
          var r = cc11001100_hook("r", 0, "var-init");

          while (t-- && e.charAt(t) == " ") r++;

          if (r % f != 0) return !1;
          var r = cc11001100_hook("r", 0, "var-init");

          while (e.charAt(n++) == " ") r++;

          return f > 2 ? r % f != f - 1 : r % f == 0;
        };
      }

      var E = cc11001100_hook("E", Infinity, "var-init");
      w(function (e, t) {
        var n = cc11001100_hook("n", e.search(/\S/), "var-init");
        n !== -1 ? (n < a && (a = cc11001100_hook("a", n, "assign")), o && !g(e, t) && (o = cc11001100_hook("o", !1, "assign"))) : E > e.length && (E = cc11001100_hook("E", e.length, "assign"));
      }), a == Infinity && (a = cc11001100_hook("a", E, "assign"), s = cc11001100_hook("s", !1, "assign"), o = cc11001100_hook("o", !1, "assign")), l && a % f != 0 && (a = cc11001100_hook("a", Math.floor(a / f) * f, "assign")), w(o ? m : v);
    }, "assign"), this.toggleBlockComment = cc11001100_hook("this.toggleBlockComment", function (e, t, n, r) {
      var i = cc11001100_hook("i", this.blockComment, "var-init");
      if (!i) return;
      !i.start && i[0] && (i = cc11001100_hook("i", i[0], "assign"));
      var s = cc11001100_hook("s", new a(t, r.row, r.column), "var-init"),
          o = cc11001100_hook("o", s.getCurrentToken(), "var-init"),
          u = cc11001100_hook("u", t.selection, "var-init"),
          l = cc11001100_hook("l", t.selection.toOrientedRange(), "var-init"),
          c,
          h;

      if (o && /comment/.test(o.type)) {
        var p, d;

        while (o && /comment/.test(o.type)) {
          var v = cc11001100_hook("v", o.value.indexOf(i.start), "var-init");

          if (v != -1) {
            var m = cc11001100_hook("m", s.getCurrentTokenRow(), "var-init"),
                g = cc11001100_hook("g", s.getCurrentTokenColumn() + v, "var-init");
            p = cc11001100_hook("p", new f(m, g, m, g + i.start.length), "assign");
            break;
          }

          o = cc11001100_hook("o", s.stepBackward(), "assign");
        }

        var s = cc11001100_hook("s", new a(t, r.row, r.column), "var-init"),
            o = cc11001100_hook("o", s.getCurrentToken(), "var-init");

        while (o && /comment/.test(o.type)) {
          var v = cc11001100_hook("v", o.value.indexOf(i.end), "var-init");

          if (v != -1) {
            var m = cc11001100_hook("m", s.getCurrentTokenRow(), "var-init"),
                g = cc11001100_hook("g", s.getCurrentTokenColumn() + v, "var-init");
            d = cc11001100_hook("d", new f(m, g, m, g + i.end.length), "assign");
            break;
          }

          o = cc11001100_hook("o", s.stepForward(), "assign");
        }

        d && t.remove(d), p && (t.remove(p), c = cc11001100_hook("c", p.start.row, "assign"), h = cc11001100_hook("h", -i.start.length, "assign"));
      } else h = cc11001100_hook("h", i.start.length, "assign"), c = cc11001100_hook("c", n.start.row, "assign"), t.insert(n.end, i.end), t.insert(n.start, i.start);

      l.start.row == c && (l.start.column += cc11001100_hook("l.start.column", h, "assign")), l.end.row == c && (l.end.column += cc11001100_hook("l.end.column", h, "assign")), t.selection.fromOrientedRange(l);
    }, "assign"), this.getNextLineIndent = cc11001100_hook("this.getNextLineIndent", function (e, t, n) {
      return this.$getIndent(t);
    }, "assign"), this.checkOutdent = cc11001100_hook("this.checkOutdent", function (e, t, n) {
      return !1;
    }, "assign"), this.autoOutdent = cc11001100_hook("this.autoOutdent", function (e, t, n) {}, "assign"), this.$getIndent = cc11001100_hook("this.$getIndent", function (e) {
      return e.match(/^\s*/)[0];
    }, "assign"), this.createWorker = cc11001100_hook("this.createWorker", function (e) {
      return null;
    }, "assign"), this.createModeDelegates = cc11001100_hook("this.createModeDelegates", function (e) {
      this.$embeds = cc11001100_hook("this.$embeds", [], "assign"), this.$modes = cc11001100_hook("this.$modes", {}, "assign");

      for (var t in e) e[t] && (this.$embeds.push(t), this.$modes[t] = cc11001100_hook("this.$modes[t]", new e[t](), "assign"));

      var n = cc11001100_hook("n", ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"], "var-init");

      for (var t = cc11001100_hook("t", 0, "var-init"); t < n.length; t++) (function (e) {
        var r = cc11001100_hook("r", n[t], "var-init"),
            i = cc11001100_hook("i", e[r], "var-init");
        e[n[t]] = cc11001100_hook("e[n[t]]", function () {
          return this.$delegator(r, arguments, i);
        }, "assign");
      })(this);
    }, "assign"), this.$delegator = cc11001100_hook("this.$delegator", function (e, t, n) {
      var r = cc11001100_hook("r", t[0], "var-init");
      typeof r != "string" && (r = cc11001100_hook("r", r[0], "assign"));

      for (var i = cc11001100_hook("i", 0, "var-init"); i < this.$embeds.length; i++) {
        if (!this.$modes[this.$embeds[i]]) continue;
        var s = cc11001100_hook("s", r.split(this.$embeds[i]), "var-init");

        if (!s[0] && s[1]) {
          t[0] = cc11001100_hook("t[0]", s[1], "assign");
          var o = cc11001100_hook("o", this.$modes[this.$embeds[i]], "var-init");
          return o[e].apply(o, t);
        }
      }

      var u = cc11001100_hook("u", n.apply(this, t), "var-init");
      return n ? u : undefined;
    }, "assign"), this.transformAction = cc11001100_hook("this.transformAction", function (e, t, n, r, i) {
      if (this.$behaviour) {
        var s = cc11001100_hook("s", this.$behaviour.getBehaviours(), "var-init");

        for (var o in s) if (s[o][t]) {
          var u = cc11001100_hook("u", s[o][t].apply(this, arguments), "var-init");
          if (u) return u;
        }
      }
    }, "assign"), this.getKeywords = cc11001100_hook("this.getKeywords", function (e) {
      if (!this.completionKeywords) {
        var t = cc11001100_hook("t", this.$tokenizer.rules, "var-init"),
            n = cc11001100_hook("n", [], "var-init");

        for (var r in t) {
          var i = cc11001100_hook("i", t[r], "var-init");

          for (var s = cc11001100_hook("s", 0, "var-init"), o = cc11001100_hook("o", i.length, "var-init"); s < o; s++) if (typeof i[s].token == "string") /keyword|support|storage/.test(i[s].token) && n.push(i[s].regex);else if (typeof i[s].token == "object") for (var u = cc11001100_hook("u", 0, "var-init"), a = cc11001100_hook("a", i[s].token.length, "var-init"); u < a; u++) if (/keyword|support|storage/.test(i[s].token[u])) {
            var r = cc11001100_hook("r", i[s].regex.match(/\(.+?\)/g)[u], "var-init");
            n.push(r.substr(1, r.length - 2));
          }
        }

        this.completionKeywords = cc11001100_hook("this.completionKeywords", n, "assign");
      }

      return e ? n.concat(this.$keywordList || []) : this.$keywordList;
    }, "assign"), this.$createKeywordList = cc11001100_hook("this.$createKeywordList", function () {
      return this.$highlightRules || this.getTokenizer(), this.$keywordList = cc11001100_hook("this.$keywordList", this.$highlightRules.$keywordList || [], "assign");
    }, "assign"), this.getCompletions = cc11001100_hook("this.getCompletions", function (e, t, n, r) {
      var i = cc11001100_hook("i", this.$keywordList || this.$createKeywordList(), "var-init");
      return i.map(function (e) {
        return {
          name: cc11001100_hook("name", e, "object-key-init"),
          value: cc11001100_hook("value", e, "object-key-init"),
          score: cc11001100_hook("score", 0, "object-key-init"),
          meta: cc11001100_hook("meta", "keyword", "object-key-init")
        };
      });
    }, "assign"), this.$id = cc11001100_hook("this.$id", "ace/mode/text", "assign");
  }).call(l.prototype), t.Mode = cc11001100_hook("t.Mode", l, "assign");
}), ace.define("ace/apply_delta", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    throw console.log("Invalid Delta:", e), "Invalid Delta: " + t;
  }

  function i(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return t.row >= 0 && t.row < e.length && t.column >= 0 && t.column <= e[t.row].length;
  }

  function s(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    t.action != "insert" && t.action != "remove" && r(t, "delta.action must be 'insert' or 'remove'"), t.lines instanceof Array || r(t, "delta.lines must be an Array"), (!t.start || !t.end) && r(t, "delta.start/end must be an present");
    var n = cc11001100_hook("n", t.start, "var-init");
    i(e, t.start) || r(t, "delta.start must be contained in document");
    var s = cc11001100_hook("s", t.end, "var-init");
    t.action == "remove" && !i(e, s) && r(t, "delta.end must contained in document for 'remove' actions");
    var o = cc11001100_hook("o", s.row - n.row, "var-init"),
        u = cc11001100_hook("u", s.column - (o == 0 ? n.column : 0), "var-init");
    (o != t.lines.length - 1 || t.lines[o].length != u) && r(t, "delta.range must match delta lines");
  }

  t.applyDelta = cc11001100_hook("t.applyDelta", function (e, t, n) {
    var r = cc11001100_hook("r", t.start.row, "var-init"),
        i = cc11001100_hook("i", t.start.column, "var-init"),
        s = cc11001100_hook("s", e[r] || "", "var-init");

    switch (t.action) {
      case "insert":
        var o = cc11001100_hook("o", t.lines, "var-init");
        if (o.length === 1) e[r] = cc11001100_hook("e[r]", s.substring(0, i) + t.lines[0] + s.substring(i), "assign");else {
          var u = cc11001100_hook("u", [r, 1].concat(t.lines), "var-init");
          e.splice.apply(e, u), e[r] = cc11001100_hook("e[r]", s.substring(0, i) + e[r], "assign"), e[r + t.lines.length - 1] += cc11001100_hook("e[r + t.lines.length - 1]", s.substring(i), "assign");
        }
        break;

      case "remove":
        var a = cc11001100_hook("a", t.end.column, "var-init"),
            f = cc11001100_hook("f", t.end.row, "var-init");
        r === f ? e[r] = cc11001100_hook("e[r]", s.substring(0, i) + s.substring(a), "assign") : e.splice(r, f - r + 1, s.substring(0, i) + e[f].substring(a));
    }
  }, "assign");
}), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/event_emitter").EventEmitter, "var-init"),
      s = cc11001100_hook("s", t.Anchor = cc11001100_hook("t.Anchor", function (e, t, n) {
    this.$onChange = cc11001100_hook("this.$onChange", this.onChange.bind(this), "assign"), this.attach(e), typeof n == "undefined" ? this.setPosition(t.row, t.column) : this.setPosition(t, n);
  }, "assign"), "var-init");
  (function () {
    function e(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", n ? e.column <= t.column : e.column < t.column, "var-init");
      return e.row < t.row || e.row == t.row && r;
    }

    function t(t, n, r) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var i = cc11001100_hook("i", t.action == "insert", "var-init"),
          s = cc11001100_hook("s", (i ? 1 : -1) * (t.end.row - t.start.row), "var-init"),
          o = cc11001100_hook("o", (i ? 1 : -1) * (t.end.column - t.start.column), "var-init"),
          u = cc11001100_hook("u", t.start, "var-init"),
          a = cc11001100_hook("a", i ? u : t.end, "var-init");
      return e(n, u, r) ? {
        row: cc11001100_hook("row", n.row, "object-key-init"),
        column: cc11001100_hook("column", n.column, "object-key-init")
      } : e(a, n, !r) ? {
        row: cc11001100_hook("row", n.row + s, "object-key-init"),
        column: cc11001100_hook("column", n.column + (n.row == a.row ? o : 0), "object-key-init")
      } : {
        row: cc11001100_hook("row", u.row, "object-key-init"),
        column: cc11001100_hook("column", u.column, "object-key-init")
      };
    }

    r.implement(this, i), this.getPosition = cc11001100_hook("this.getPosition", function () {
      return this.$clipPositionToDocument(this.row, this.column);
    }, "assign"), this.getDocument = cc11001100_hook("this.getDocument", function () {
      return this.document;
    }, "assign"), this.$insertRight = cc11001100_hook("this.$insertRight", !1, "assign"), this.onChange = cc11001100_hook("this.onChange", function (e) {
      if (e.start.row == e.end.row && e.start.row != this.row) return;
      if (e.start.row > this.row) return;
      var n = cc11001100_hook("n", t(e, {
        row: cc11001100_hook("row", this.row, "object-key-init"),
        column: cc11001100_hook("column", this.column, "object-key-init")
      }, this.$insertRight), "var-init");
      this.setPosition(n.row, n.column, !0);
    }, "assign"), this.setPosition = cc11001100_hook("this.setPosition", function (e, t, n) {
      var r;
      n ? r = cc11001100_hook("r", {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", t, "object-key-init")
      }, "assign") : r = cc11001100_hook("r", this.$clipPositionToDocument(e, t), "assign");
      if (this.row == r.row && this.column == r.column) return;
      var i = cc11001100_hook("i", {
        row: cc11001100_hook("row", this.row, "object-key-init"),
        column: cc11001100_hook("column", this.column, "object-key-init")
      }, "var-init");
      this.row = cc11001100_hook("this.row", r.row, "assign"), this.column = cc11001100_hook("this.column", r.column, "assign"), this._signal("change", {
        old: cc11001100_hook("old", i, "object-key-init"),
        value: cc11001100_hook("value", r, "object-key-init")
      });
    }, "assign"), this.detach = cc11001100_hook("this.detach", function () {
      this.document.removeEventListener("change", this.$onChange);
    }, "assign"), this.attach = cc11001100_hook("this.attach", function (e) {
      this.document = cc11001100_hook("this.document", e || this.document, "assign"), this.document.on("change", this.$onChange);
    }, "assign"), this.$clipPositionToDocument = cc11001100_hook("this.$clipPositionToDocument", function (e, t) {
      var n = cc11001100_hook("n", {}, "var-init");
      return e >= this.document.getLength() ? (n.row = cc11001100_hook("n.row", Math.max(0, this.document.getLength() - 1), "assign"), n.column = cc11001100_hook("n.column", this.document.getLine(n.row).length, "assign")) : e < 0 ? (n.row = cc11001100_hook("n.row", 0, "assign"), n.column = cc11001100_hook("n.column", 0, "assign")) : (n.row = cc11001100_hook("n.row", e, "assign"), n.column = cc11001100_hook("n.column", Math.min(this.document.getLine(n.row).length, Math.max(0, t)), "assign")), t < 0 && (n.column = cc11001100_hook("n.column", 0, "assign")), n;
    }, "assign");
  }).call(s.prototype);
}), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./apply_delta").applyDelta, "var-init"),
      s = cc11001100_hook("s", e("./lib/event_emitter").EventEmitter, "var-init"),
      o = cc11001100_hook("o", e("./range").Range, "var-init"),
      u = cc11001100_hook("u", e("./anchor").Anchor, "var-init"),
      a = function (e) {
    this.$lines = cc11001100_hook("this.$lines", [""], "assign"), e.length === 0 ? this.$lines = cc11001100_hook("this.$lines", [""], "assign") : Array.isArray(e) ? this.insertMergedLines({
      row: cc11001100_hook("row", 0, "object-key-init"),
      column: cc11001100_hook("column", 0, "object-key-init")
    }, e) : this.insert({
      row: cc11001100_hook("row", 0, "object-key-init"),
      column: cc11001100_hook("column", 0, "object-key-init")
    }, e);
  };

  (function () {
    r.implement(this, s), this.setValue = cc11001100_hook("this.setValue", function (e) {
      var t = cc11001100_hook("t", this.getLength() - 1, "var-init");
      this.remove(new o(0, 0, t, this.getLine(t).length)), this.insert({
        row: cc11001100_hook("row", 0, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, e);
    }, "assign"), this.getValue = cc11001100_hook("this.getValue", function () {
      return this.getAllLines().join(this.getNewLineCharacter());
    }, "assign"), this.createAnchor = cc11001100_hook("this.createAnchor", function (e, t) {
      return new u(this, e, t);
    }, "assign"), "aaa".split(/a/).length === 0 ? this.$split = cc11001100_hook("this.$split", function (e) {
      return e.replace(/\r\n|\r/g, "\n").split("\n");
    }, "assign") : this.$split = cc11001100_hook("this.$split", function (e) {
      return e.split(/\r\n|\r|\n/);
    }, "assign"), this.$detectNewLine = cc11001100_hook("this.$detectNewLine", function (e) {
      var t = cc11001100_hook("t", e.match(/^.*?(\r\n|\r|\n)/m), "var-init");
      this.$autoNewLine = cc11001100_hook("this.$autoNewLine", t ? t[1] : "\n", "assign"), this._signal("changeNewLineMode");
    }, "assign"), this.getNewLineCharacter = cc11001100_hook("this.getNewLineCharacter", function () {
      switch (this.$newLineMode) {
        case "windows":
          return "\r\n";

        case "unix":
          return "\n";

        default:
          return this.$autoNewLine || "\n";
      }
    }, "assign"), this.$autoNewLine = cc11001100_hook("this.$autoNewLine", "", "assign"), this.$newLineMode = cc11001100_hook("this.$newLineMode", "auto", "assign"), this.setNewLineMode = cc11001100_hook("this.setNewLineMode", function (e) {
      if (this.$newLineMode === e) return;
      this.$newLineMode = cc11001100_hook("this.$newLineMode", e, "assign"), this._signal("changeNewLineMode");
    }, "assign"), this.getNewLineMode = cc11001100_hook("this.getNewLineMode", function () {
      return this.$newLineMode;
    }, "assign"), this.isNewLine = cc11001100_hook("this.isNewLine", function (e) {
      return e == "\r\n" || e == "\r" || e == "\n";
    }, "assign"), this.getLine = cc11001100_hook("this.getLine", function (e) {
      return this.$lines[e] || "";
    }, "assign"), this.getLines = cc11001100_hook("this.getLines", function (e, t) {
      return this.$lines.slice(e, t + 1);
    }, "assign"), this.getAllLines = cc11001100_hook("this.getAllLines", function () {
      return this.getLines(0, this.getLength());
    }, "assign"), this.getLength = cc11001100_hook("this.getLength", function () {
      return this.$lines.length;
    }, "assign"), this.getTextRange = cc11001100_hook("this.getTextRange", function (e) {
      return this.getLinesForRange(e).join(this.getNewLineCharacter());
    }, "assign"), this.getLinesForRange = cc11001100_hook("this.getLinesForRange", function (e) {
      var t;
      if (e.start.row === e.end.row) t = cc11001100_hook("t", [this.getLine(e.start.row).substring(e.start.column, e.end.column)], "assign");else {
        t = cc11001100_hook("t", this.getLines(e.start.row, e.end.row), "assign"), t[0] = cc11001100_hook("t[0]", (t[0] || "").substring(e.start.column), "assign");
        var n = cc11001100_hook("n", t.length - 1, "var-init");
        e.end.row - e.start.row == n && (t[n] = cc11001100_hook("t[n]", t[n].substring(0, e.end.column), "assign"));
      }
      return t;
    }, "assign"), this.insertLines = cc11001100_hook("this.insertLines", function (e, t) {
      return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, t);
    }, "assign"), this.removeLines = cc11001100_hook("this.removeLines", function (e, t) {
      return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, t);
    }, "assign"), this.insertNewLine = cc11001100_hook("this.insertNewLine", function (e) {
      return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""]);
    }, "assign"), this.insert = cc11001100_hook("this.insert", function (e, t) {
      return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(e, this.$split(t));
    }, "assign"), this.insertInLine = cc11001100_hook("this.insertInLine", function (e, t) {
      var n = cc11001100_hook("n", this.clippedPos(e.row, e.column), "var-init"),
          r = cc11001100_hook("r", this.pos(e.row, e.column + t.length), "var-init");
      return this.applyDelta({
        start: cc11001100_hook("start", n, "object-key-init"),
        end: cc11001100_hook("end", r, "object-key-init"),
        action: cc11001100_hook("action", "insert", "object-key-init"),
        lines: cc11001100_hook("lines", [t], "object-key-init")
      }, !0), this.clonePos(r);
    }, "assign"), this.clippedPos = cc11001100_hook("this.clippedPos", function (e, t) {
      var n = cc11001100_hook("n", this.getLength(), "var-init");
      e === undefined ? e = cc11001100_hook("e", n, "assign") : e < 0 ? e = cc11001100_hook("e", 0, "assign") : e >= n && (e = cc11001100_hook("e", n - 1, "assign"), t = cc11001100_hook("t", undefined, "assign"));
      var r = cc11001100_hook("r", this.getLine(e), "var-init");
      return t == undefined && (t = cc11001100_hook("t", r.length, "assign")), t = cc11001100_hook("t", Math.min(Math.max(t, 0), r.length), "assign"), {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", t, "object-key-init")
      };
    }, "assign"), this.clonePos = cc11001100_hook("this.clonePos", function (e) {
      return {
        row: cc11001100_hook("row", e.row, "object-key-init"),
        column: cc11001100_hook("column", e.column, "object-key-init")
      };
    }, "assign"), this.pos = cc11001100_hook("this.pos", function (e, t) {
      return {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", t, "object-key-init")
      };
    }, "assign"), this.$clipPosition = cc11001100_hook("this.$clipPosition", function (e) {
      var t = cc11001100_hook("t", this.getLength(), "var-init");
      return e.row >= t ? (e.row = cc11001100_hook("e.row", Math.max(0, t - 1), "assign"), e.column = cc11001100_hook("e.column", this.getLine(t - 1).length, "assign")) : (e.row = cc11001100_hook("e.row", Math.max(0, e.row), "assign"), e.column = cc11001100_hook("e.column", Math.min(Math.max(e.column, 0), this.getLine(e.row).length), "assign")), e;
    }, "assign"), this.insertFullLines = cc11001100_hook("this.insertFullLines", function (e, t) {
      e = cc11001100_hook("e", Math.min(Math.max(e, 0), this.getLength()), "assign");
      var n = cc11001100_hook("n", 0, "var-init");
      e < this.getLength() ? (t = cc11001100_hook("t", t.concat([""]), "assign"), n = cc11001100_hook("n", 0, "assign")) : (t = cc11001100_hook("t", [""].concat(t), "assign"), e--, n = cc11001100_hook("n", this.$lines[e].length, "assign")), this.insertMergedLines({
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", n, "object-key-init")
      }, t);
    }, "assign"), this.insertMergedLines = cc11001100_hook("this.insertMergedLines", function (e, t) {
      var n = cc11001100_hook("n", this.clippedPos(e.row, e.column), "var-init"),
          r = cc11001100_hook("r", {
        row: cc11001100_hook("row", n.row + t.length - 1, "object-key-init"),
        column: cc11001100_hook("column", (t.length == 1 ? n.column : 0) + t[t.length - 1].length, "object-key-init")
      }, "var-init");
      return this.applyDelta({
        start: cc11001100_hook("start", n, "object-key-init"),
        end: cc11001100_hook("end", r, "object-key-init"),
        action: cc11001100_hook("action", "insert", "object-key-init"),
        lines: cc11001100_hook("lines", t, "object-key-init")
      }), this.clonePos(r);
    }, "assign"), this.remove = cc11001100_hook("this.remove", function (e) {
      var t = cc11001100_hook("t", this.clippedPos(e.start.row, e.start.column), "var-init"),
          n = cc11001100_hook("n", this.clippedPos(e.end.row, e.end.column), "var-init");
      return this.applyDelta({
        start: cc11001100_hook("start", t, "object-key-init"),
        end: cc11001100_hook("end", n, "object-key-init"),
        action: cc11001100_hook("action", "remove", "object-key-init"),
        lines: cc11001100_hook("lines", this.getLinesForRange({
          start: cc11001100_hook("start", t, "object-key-init"),
          end: cc11001100_hook("end", n, "object-key-init")
        }), "object-key-init")
      }), this.clonePos(t);
    }, "assign"), this.removeInLine = cc11001100_hook("this.removeInLine", function (e, t, n) {
      var r = cc11001100_hook("r", this.clippedPos(e, t), "var-init"),
          i = cc11001100_hook("i", this.clippedPos(e, n), "var-init");
      return this.applyDelta({
        start: cc11001100_hook("start", r, "object-key-init"),
        end: cc11001100_hook("end", i, "object-key-init"),
        action: cc11001100_hook("action", "remove", "object-key-init"),
        lines: cc11001100_hook("lines", this.getLinesForRange({
          start: cc11001100_hook("start", r, "object-key-init"),
          end: cc11001100_hook("end", i, "object-key-init")
        }), "object-key-init")
      }, !0), this.clonePos(r);
    }, "assign"), this.removeFullLines = cc11001100_hook("this.removeFullLines", function (e, t) {
      e = cc11001100_hook("e", Math.min(Math.max(0, e), this.getLength() - 1), "assign"), t = cc11001100_hook("t", Math.min(Math.max(0, t), this.getLength() - 1), "assign");
      var n = cc11001100_hook("n", t == this.getLength() - 1 && e > 0, "var-init"),
          r = cc11001100_hook("r", t < this.getLength() - 1, "var-init"),
          i = cc11001100_hook("i", n ? e - 1 : e, "var-init"),
          s = cc11001100_hook("s", n ? this.getLine(i).length : 0, "var-init"),
          u = cc11001100_hook("u", r ? t + 1 : t, "var-init"),
          a = cc11001100_hook("a", r ? 0 : this.getLine(u).length, "var-init"),
          f = cc11001100_hook("f", new o(i, s, u, a), "var-init"),
          l = cc11001100_hook("l", this.$lines.slice(e, t + 1), "var-init");
      return this.applyDelta({
        start: cc11001100_hook("start", f.start, "object-key-init"),
        end: cc11001100_hook("end", f.end, "object-key-init"),
        action: cc11001100_hook("action", "remove", "object-key-init"),
        lines: cc11001100_hook("lines", this.getLinesForRange(f), "object-key-init")
      }), l;
    }, "assign"), this.removeNewLine = cc11001100_hook("this.removeNewLine", function (e) {
      e < this.getLength() - 1 && e >= 0 && this.applyDelta({
        start: cc11001100_hook("start", this.pos(e, this.getLine(e).length), "object-key-init"),
        end: cc11001100_hook("end", this.pos(e + 1, 0), "object-key-init"),
        action: cc11001100_hook("action", "remove", "object-key-init"),
        lines: cc11001100_hook("lines", ["", ""], "object-key-init")
      });
    }, "assign"), this.replace = cc11001100_hook("this.replace", function (e, t) {
      e instanceof o || (e = cc11001100_hook("e", o.fromPoints(e.start, e.end), "assign"));
      if (t.length === 0 && e.isEmpty()) return e.start;
      if (t == this.getTextRange(e)) return e.end;
      this.remove(e);
      var n;
      return t ? n = cc11001100_hook("n", this.insert(e.start, t), "assign") : n = cc11001100_hook("n", e.start, "assign"), n;
    }, "assign"), this.applyDeltas = cc11001100_hook("this.applyDeltas", function (e) {
      for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) this.applyDelta(e[t]);
    }, "assign"), this.revertDeltas = cc11001100_hook("this.revertDeltas", function (e) {
      for (var t = cc11001100_hook("t", e.length - 1, "var-init"); t >= 0; t--) this.revertDelta(e[t]);
    }, "assign"), this.applyDelta = cc11001100_hook("this.applyDelta", function (e, t) {
      var n = cc11001100_hook("n", e.action == "insert", "var-init");
      if (n ? e.lines.length <= 1 && !e.lines[0] : !o.comparePoints(e.start, e.end)) return;
      n && e.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(e, 2e4) : (i(this.$lines, e, t), this._signal("change", e));
    }, "assign"), this.$splitAndapplyLargeDelta = cc11001100_hook("this.$splitAndapplyLargeDelta", function (e, t) {
      var n = cc11001100_hook("n", e.lines, "var-init"),
          r = cc11001100_hook("r", n.length - t + 1, "var-init"),
          i = cc11001100_hook("i", e.start.row, "var-init"),
          s = cc11001100_hook("s", e.start.column, "var-init");

      for (var o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", 0, "var-init"); o < r; o = cc11001100_hook("o", u, "assign")) {
        u += cc11001100_hook("u", t - 1, "assign");
        var a = cc11001100_hook("a", n.slice(o, u), "var-init");
        a.push(""), this.applyDelta({
          start: cc11001100_hook("start", this.pos(i + o, s), "object-key-init"),
          end: cc11001100_hook("end", this.pos(i + u, s = cc11001100_hook("s", 0, "assign")), "object-key-init"),
          action: cc11001100_hook("action", e.action, "object-key-init"),
          lines: cc11001100_hook("lines", a, "object-key-init")
        }, !0);
      }

      e.lines = cc11001100_hook("e.lines", n.slice(o), "assign"), e.start.row = cc11001100_hook("e.start.row", i + o, "assign"), e.start.column = cc11001100_hook("e.start.column", s, "assign"), this.applyDelta(e, !0);
    }, "assign"), this.revertDelta = cc11001100_hook("this.revertDelta", function (e) {
      this.applyDelta({
        start: cc11001100_hook("start", this.clonePos(e.start), "object-key-init"),
        end: cc11001100_hook("end", this.clonePos(e.end), "object-key-init"),
        action: cc11001100_hook("action", e.action == "insert" ? "remove" : "insert", "object-key-init"),
        lines: cc11001100_hook("lines", e.lines.slice(), "object-key-init")
      });
    }, "assign"), this.indexToPosition = cc11001100_hook("this.indexToPosition", function (e, t) {
      var n = cc11001100_hook("n", this.$lines || this.getAllLines(), "var-init"),
          r = cc11001100_hook("r", this.getNewLineCharacter().length, "var-init");

      for (var i = cc11001100_hook("i", t || 0, "var-init"), s = cc11001100_hook("s", n.length, "var-init"); i < s; i++) {
        e -= cc11001100_hook("e", n[i].length + r, "assign");
        if (e < 0) return {
          row: cc11001100_hook("row", i, "object-key-init"),
          column: cc11001100_hook("column", e + n[i].length + r, "object-key-init")
        };
      }

      return {
        row: cc11001100_hook("row", s - 1, "object-key-init"),
        column: cc11001100_hook("column", e + n[s - 1].length + r, "object-key-init")
      };
    }, "assign"), this.positionToIndex = cc11001100_hook("this.positionToIndex", function (e, t) {
      var n = cc11001100_hook("n", this.$lines || this.getAllLines(), "var-init"),
          r = cc11001100_hook("r", this.getNewLineCharacter().length, "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          s = cc11001100_hook("s", Math.min(e.row, n.length), "var-init");

      for (var o = cc11001100_hook("o", t || 0, "var-init"); o < s; ++o) i += cc11001100_hook("i", n[o].length + r, "assign");

      return i + e.column;
    }, "assign");
  }).call(a.prototype), t.Document = cc11001100_hook("t.Document", a, "assign");
}), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/event_emitter").EventEmitter, "var-init"),
      s = function (e, t) {
    this.running = cc11001100_hook("this.running", !1, "assign"), this.lines = cc11001100_hook("this.lines", [], "assign"), this.states = cc11001100_hook("this.states", [], "assign"), this.currentLine = cc11001100_hook("this.currentLine", 0, "assign"), this.tokenizer = cc11001100_hook("this.tokenizer", e, "assign");
    var n = cc11001100_hook("n", this, "var-init");
    this.$worker = cc11001100_hook("this.$worker", function () {
      if (!n.running) return;
      var e = cc11001100_hook("e", new Date(), "var-init"),
          t = cc11001100_hook("t", n.currentLine, "var-init"),
          r = cc11001100_hook("r", -1, "var-init"),
          i = cc11001100_hook("i", n.doc, "var-init"),
          s = cc11001100_hook("s", t, "var-init");

      while (n.lines[t]) t++;

      var o = cc11001100_hook("o", i.getLength(), "var-init"),
          u = cc11001100_hook("u", 0, "var-init");
      n.running = cc11001100_hook("n.running", !1, "assign");

      while (t < o) {
        n.$tokenizeRow(t), r = cc11001100_hook("r", t, "assign");

        do t++; while (n.lines[t]);

        u++;

        if (u % 5 === 0 && new Date() - e > 20) {
          n.running = cc11001100_hook("n.running", setTimeout(n.$worker, 20), "assign");
          break;
        }
      }

      n.currentLine = cc11001100_hook("n.currentLine", t, "assign"), r == -1 && (r = cc11001100_hook("r", t, "assign")), s <= r && n.fireUpdateEvent(s, r);
    }, "assign");
  };

  (function () {
    r.implement(this, i), this.setTokenizer = cc11001100_hook("this.setTokenizer", function (e) {
      this.tokenizer = cc11001100_hook("this.tokenizer", e, "assign"), this.lines = cc11001100_hook("this.lines", [], "assign"), this.states = cc11001100_hook("this.states", [], "assign"), this.start(0);
    }, "assign"), this.setDocument = cc11001100_hook("this.setDocument", function (e) {
      this.doc = cc11001100_hook("this.doc", e, "assign"), this.lines = cc11001100_hook("this.lines", [], "assign"), this.states = cc11001100_hook("this.states", [], "assign"), this.stop();
    }, "assign"), this.fireUpdateEvent = cc11001100_hook("this.fireUpdateEvent", function (e, t) {
      var n = cc11001100_hook("n", {
        first: cc11001100_hook("first", e, "object-key-init"),
        last: cc11001100_hook("last", t, "object-key-init")
      }, "var-init");

      this._signal("update", {
        data: cc11001100_hook("data", n, "object-key-init")
      });
    }, "assign"), this.start = cc11001100_hook("this.start", function (e) {
      this.currentLine = cc11001100_hook("this.currentLine", Math.min(e || 0, this.currentLine, this.doc.getLength()), "assign"), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = cc11001100_hook("this.running", setTimeout(this.$worker, 700), "assign");
    }, "assign"), this.scheduleStart = cc11001100_hook("this.scheduleStart", function () {
      this.running || (this.running = cc11001100_hook("this.running", setTimeout(this.$worker, 700), "assign"));
    }, "assign"), this.$updateOnChange = cc11001100_hook("this.$updateOnChange", function (e) {
      var t = cc11001100_hook("t", e.start.row, "var-init"),
          n = cc11001100_hook("n", e.end.row - t, "var-init");
      if (n === 0) this.lines[t] = cc11001100_hook("this.lines[t]", null, "assign");else if (e.action == "remove") this.lines.splice(t, n + 1, null), this.states.splice(t, n + 1, null);else {
        var r = cc11001100_hook("r", Array(n + 1), "var-init");
        r.unshift(t, 1), this.lines.splice.apply(this.lines, r), this.states.splice.apply(this.states, r);
      }
      this.currentLine = cc11001100_hook("this.currentLine", Math.min(t, this.currentLine, this.doc.getLength()), "assign"), this.stop();
    }, "assign"), this.stop = cc11001100_hook("this.stop", function () {
      this.running && clearTimeout(this.running), this.running = cc11001100_hook("this.running", !1, "assign");
    }, "assign"), this.getTokens = cc11001100_hook("this.getTokens", function (e) {
      return this.lines[e] || this.$tokenizeRow(e);
    }, "assign"), this.getState = cc11001100_hook("this.getState", function (e) {
      return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start";
    }, "assign"), this.$tokenizeRow = cc11001100_hook("this.$tokenizeRow", function (e) {
      var t = cc11001100_hook("t", this.doc.getLine(e), "var-init"),
          n = cc11001100_hook("n", this.states[e - 1], "var-init"),
          r = cc11001100_hook("r", this.tokenizer.getLineTokens(t, n, e), "var-init");
      return this.states[e] + "" != r.state + "" ? (this.states[e] = cc11001100_hook("this.states[e]", r.state, "assign"), this.lines[e + 1] = cc11001100_hook("this.lines[e + 1]", null, "assign"), this.currentLine > e + 1 && (this.currentLine = cc11001100_hook("this.currentLine", e + 1, "assign"))) : this.currentLine == e && (this.currentLine = cc11001100_hook("this.currentLine", e + 1, "assign")), this.lines[e] = cc11001100_hook("this.lines[e]", r.tokens, "assign");
    }, "assign");
  }).call(s.prototype), t.BackgroundTokenizer = cc11001100_hook("t.BackgroundTokenizer", s, "assign");
}), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/lang"), "var-init"),
      i = cc11001100_hook("i", e("./lib/oop"), "var-init"),
      s = cc11001100_hook("s", e("./range").Range, "var-init"),
      o = function (e, t, n) {
    this.setRegexp(e), this.clazz = cc11001100_hook("this.clazz", t, "assign"), this.type = cc11001100_hook("this.type", n || "text", "assign");
  };

  (function () {
    this.MAX_RANGES = cc11001100_hook("this.MAX_RANGES", 500, "assign"), this.setRegexp = cc11001100_hook("this.setRegexp", function (e) {
      if (this.regExp + "" == e + "") return;
      this.regExp = cc11001100_hook("this.regExp", e, "assign"), this.cache = cc11001100_hook("this.cache", [], "assign");
    }, "assign"), this.update = cc11001100_hook("this.update", function (e, t, n, i) {
      if (!this.regExp) return;
      var o = cc11001100_hook("o", i.firstRow, "var-init"),
          u = cc11001100_hook("u", i.lastRow, "var-init");

      for (var a = cc11001100_hook("a", o, "var-init"); a <= u; a++) {
        var f = cc11001100_hook("f", this.cache[a], "var-init");
        f == null && (f = cc11001100_hook("f", r.getMatchOffsets(n.getLine(a), this.regExp), "assign"), f.length > this.MAX_RANGES && (f = cc11001100_hook("f", f.slice(0, this.MAX_RANGES), "assign")), f = cc11001100_hook("f", f.map(function (e) {
          return new s(a, e.offset, a, e.offset + e.length);
        }), "assign"), this.cache[a] = cc11001100_hook("this.cache[a]", f.length ? f : "", "assign"));

        for (var l = cc11001100_hook("l", f.length, "var-init"); l--;) t.drawSingleLineMarker(e, f[l].toScreenRange(n), this.clazz, i);
      }
    }, "assign");
  }).call(o.prototype), t.SearchHighlight = cc11001100_hook("t.SearchHighlight", o, "assign");
}), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function (e, t, n) {
  "use strict";

  function i(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    this.foldData = cc11001100_hook("this.foldData", e, "assign"), Array.isArray(t) ? this.folds = cc11001100_hook("this.folds", t, "assign") : t = cc11001100_hook("t", this.folds = cc11001100_hook("this.folds", [t], "assign"), "assign");
    var n = cc11001100_hook("n", t[t.length - 1], "var-init");
    this.range = cc11001100_hook("this.range", new r(t[0].start.row, t[0].start.column, n.end.row, n.end.column), "assign"), this.start = cc11001100_hook("this.start", this.range.start, "assign"), this.end = cc11001100_hook("this.end", this.range.end, "assign"), this.folds.forEach(function (e) {
      e.setFoldLine(this);
    }, this);
  }

  var r = cc11001100_hook("r", e("../range").Range, "var-init");
  (function () {
    this.shiftRow = cc11001100_hook("this.shiftRow", function (e) {
      this.start.row += cc11001100_hook("this.start.row", e, "assign"), this.end.row += cc11001100_hook("this.end.row", e, "assign"), this.folds.forEach(function (t) {
        t.start.row += cc11001100_hook("t.start.row", e, "assign"), t.end.row += cc11001100_hook("t.end.row", e, "assign");
      });
    }, "assign"), this.addFold = cc11001100_hook("this.addFold", function (e) {
      if (e.sameRow) {
        if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
        this.folds.push(e), this.folds.sort(function (e, t) {
          return -e.range.compareEnd(t.start.row, t.start.column);
        }), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = cc11001100_hook("this.end.row", e.end.row, "assign"), this.end.column = cc11001100_hook("this.end.column", e.end.column, "assign")) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = cc11001100_hook("this.start.row", e.start.row, "assign"), this.start.column = cc11001100_hook("this.start.column", e.start.column, "assign"));
      } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = cc11001100_hook("this.end.row", e.end.row, "assign"), this.end.column = cc11001100_hook("this.end.column", e.end.column, "assign");else {
        if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
        this.folds.unshift(e), this.start.row = cc11001100_hook("this.start.row", e.start.row, "assign"), this.start.column = cc11001100_hook("this.start.column", e.start.column, "assign");
      }

      e.foldLine = cc11001100_hook("e.foldLine", this, "assign");
    }, "assign"), this.containsRow = cc11001100_hook("this.containsRow", function (e) {
      return e >= this.start.row && e <= this.end.row;
    }, "assign"), this.walk = cc11001100_hook("this.walk", function (e, t, n) {
      var r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", this.folds, "var-init"),
          s,
          o,
          u,
          a = cc11001100_hook("a", !0, "var-init");
      t == null && (t = cc11001100_hook("t", this.end.row, "assign"), n = cc11001100_hook("n", this.end.column, "assign"));

      for (var f = cc11001100_hook("f", 0, "var-init"); f < i.length; f++) {
        s = cc11001100_hook("s", i[f], "assign"), o = cc11001100_hook("o", s.range.compareStart(t, n), "assign");

        if (o == -1) {
          e(null, t, n, r, a);
          return;
        }

        u = cc11001100_hook("u", e(null, s.start.row, s.start.column, r, a), "assign"), u = cc11001100_hook("u", !u && e(s.placeholder, s.start.row, s.start.column, r), "assign");
        if (u || o === 0) return;
        a = cc11001100_hook("a", !s.sameRow, "assign"), r = cc11001100_hook("r", s.end.column, "assign");
      }

      e(null, t, n, r, a);
    }, "assign"), this.getNextFoldTo = cc11001100_hook("this.getNextFoldTo", function (e, t) {
      var n, r;

      for (var i = cc11001100_hook("i", 0, "var-init"); i < this.folds.length; i++) {
        n = cc11001100_hook("n", this.folds[i], "assign"), r = cc11001100_hook("r", n.range.compareEnd(e, t), "assign");
        if (r == -1) return {
          fold: cc11001100_hook("fold", n, "object-key-init"),
          kind: cc11001100_hook("kind", "after", "object-key-init")
        };
        if (r === 0) return {
          fold: cc11001100_hook("fold", n, "object-key-init"),
          kind: cc11001100_hook("kind", "inside", "object-key-init")
        };
      }

      return null;
    }, "assign"), this.addRemoveChars = cc11001100_hook("this.addRemoveChars", function (e, t, n) {
      var r = cc11001100_hook("r", this.getNextFoldTo(e, t), "var-init"),
          i,
          s;

      if (r) {
        i = cc11001100_hook("i", r.fold, "assign");
        if (r.kind == "inside" && i.start.column != t && i.start.row != e) window.console && window.console.log(e, t, i);else if (i.start.row == e) {
          s = cc11001100_hook("s", this.folds, "assign");
          var o = cc11001100_hook("o", s.indexOf(i), "var-init");
          o === 0 && (this.start.column += cc11001100_hook("this.start.column", n, "assign"));

          for (o; o < s.length; o++) {
            i = cc11001100_hook("i", s[o], "assign"), i.start.column += cc11001100_hook("i.start.column", n, "assign");
            if (!i.sameRow) return;
            i.end.column += cc11001100_hook("i.end.column", n, "assign");
          }

          this.end.column += cc11001100_hook("this.end.column", n, "assign");
        }
      }
    }, "assign"), this.split = cc11001100_hook("this.split", function (e, t) {
      var n = cc11001100_hook("n", this.getNextFoldTo(e, t), "var-init");
      if (!n || n.kind == "inside") return null;
      var r = cc11001100_hook("r", n.fold, "var-init"),
          s = cc11001100_hook("s", this.folds, "var-init"),
          o = cc11001100_hook("o", this.foldData, "var-init"),
          u = cc11001100_hook("u", s.indexOf(r), "var-init"),
          a = cc11001100_hook("a", s[u - 1], "var-init");
      this.end.row = cc11001100_hook("this.end.row", a.end.row, "assign"), this.end.column = cc11001100_hook("this.end.column", a.end.column, "assign"), s = cc11001100_hook("s", s.splice(u, s.length - u), "assign");
      var f = cc11001100_hook("f", new i(o, s), "var-init");
      return o.splice(o.indexOf(this) + 1, 0, f), f;
    }, "assign"), this.merge = cc11001100_hook("this.merge", function (e) {
      var t = cc11001100_hook("t", e.folds, "var-init");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) this.addFold(t[n]);

      var r = cc11001100_hook("r", this.foldData, "var-init");
      r.splice(r.indexOf(e), 1);
    }, "assign"), this.toString = cc11001100_hook("this.toString", function () {
      var e = cc11001100_hook("e", [this.range.toString() + ": ["], "var-init");
      return this.folds.forEach(function (t) {
        e.push("  " + t.toString());
      }), e.push("]"), e.join("\n");
    }, "assign"), this.idxToPosition = cc11001100_hook("this.idxToPosition", function (e) {
      var t = cc11001100_hook("t", 0, "var-init");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < this.folds.length; n++) {
        var r = cc11001100_hook("r", this.folds[n], "var-init");
        e -= cc11001100_hook("e", r.start.column - t, "assign");
        if (e < 0) return {
          row: cc11001100_hook("row", r.start.row, "object-key-init"),
          column: cc11001100_hook("column", r.start.column + e, "object-key-init")
        };
        e -= cc11001100_hook("e", r.placeholder.length, "assign");
        if (e < 0) return r.start;
        t = cc11001100_hook("t", r.end.column, "assign");
      }

      return {
        row: cc11001100_hook("row", this.end.row, "object-key-init"),
        column: cc11001100_hook("column", this.end.column + e, "object-key-init")
      };
    }, "assign");
  }).call(i.prototype), t.FoldLine = cc11001100_hook("t.FoldLine", i, "assign");
}), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./range").Range, "var-init"),
      i = cc11001100_hook("i", r.comparePoints, "var-init"),
      s = function () {
    this.ranges = cc11001100_hook("this.ranges", [], "assign");
  };

  (function () {
    this.comparePoints = cc11001100_hook("this.comparePoints", i, "assign"), this.pointIndex = cc11001100_hook("this.pointIndex", function (e, t, n) {
      var r = cc11001100_hook("r", this.ranges, "var-init");

      for (var s = cc11001100_hook("s", n || 0, "var-init"); s < r.length; s++) {
        var o = cc11001100_hook("o", r[s], "var-init"),
            u = cc11001100_hook("u", i(e, o.end), "var-init");
        if (u > 0) continue;
        var a = cc11001100_hook("a", i(e, o.start), "var-init");
        return u === 0 ? t && a !== 0 ? -s - 2 : s : a > 0 || a === 0 && !t ? s : -s - 1;
      }

      return -s - 1;
    }, "assign"), this.add = cc11001100_hook("this.add", function (e) {
      var t = cc11001100_hook("t", !e.isEmpty(), "var-init"),
          n = cc11001100_hook("n", this.pointIndex(e.start, t), "var-init");
      n < 0 && (n = cc11001100_hook("n", -n - 1, "assign"));
      var r = cc11001100_hook("r", this.pointIndex(e.end, t, n), "var-init");
      return r < 0 ? r = cc11001100_hook("r", -r - 1, "assign") : r++, this.ranges.splice(n, r - n, e);
    }, "assign"), this.addList = cc11001100_hook("this.addList", function (e) {
      var t = cc11001100_hook("t", [], "var-init");

      for (var n = cc11001100_hook("n", e.length, "var-init"); n--;) t.push.apply(t, this.add(e[n]));

      return t;
    }, "assign"), this.substractPoint = cc11001100_hook("this.substractPoint", function (e) {
      var t = cc11001100_hook("t", this.pointIndex(e), "var-init");
      if (t >= 0) return this.ranges.splice(t, 1);
    }, "assign"), this.merge = cc11001100_hook("this.merge", function () {
      var e = cc11001100_hook("e", [], "var-init"),
          t = cc11001100_hook("t", this.ranges, "var-init");
      t = cc11001100_hook("t", t.sort(function (e, t) {
        return i(e.start, t.start);
      }), "assign");
      var n = cc11001100_hook("n", t[0], "var-init"),
          r;

      for (var s = cc11001100_hook("s", 1, "var-init"); s < t.length; s++) {
        r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t[s], "assign");
        var o = cc11001100_hook("o", i(r.end, n.start), "var-init");
        if (o < 0) continue;
        if (o == 0 && !r.isEmpty() && !n.isEmpty()) continue;
        i(r.end, n.end) < 0 && (r.end.row = cc11001100_hook("r.end.row", n.end.row, "assign"), r.end.column = cc11001100_hook("r.end.column", n.end.column, "assign")), t.splice(s, 1), e.push(n), n = cc11001100_hook("n", r, "assign"), s--;
      }

      return this.ranges = cc11001100_hook("this.ranges", t, "assign"), e;
    }, "assign"), this.contains = cc11001100_hook("this.contains", function (e, t) {
      return this.pointIndex({
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", t, "object-key-init")
      }) >= 0;
    }, "assign"), this.containsPoint = cc11001100_hook("this.containsPoint", function (e) {
      return this.pointIndex(e) >= 0;
    }, "assign"), this.rangeAtPoint = cc11001100_hook("this.rangeAtPoint", function (e) {
      var t = cc11001100_hook("t", this.pointIndex(e), "var-init");
      if (t >= 0) return this.ranges[t];
    }, "assign"), this.clipRows = cc11001100_hook("this.clipRows", function (e, t) {
      var n = cc11001100_hook("n", this.ranges, "var-init");
      if (n[0].start.row > t || n[n.length - 1].start.row < e) return [];
      var r = cc11001100_hook("r", this.pointIndex({
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }), "var-init");
      r < 0 && (r = cc11001100_hook("r", -r - 1, "assign"));
      var i = cc11001100_hook("i", this.pointIndex({
        row: cc11001100_hook("row", t, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, r), "var-init");
      i < 0 && (i = cc11001100_hook("i", -i - 1, "assign"));
      var s = cc11001100_hook("s", [], "var-init");

      for (var o = cc11001100_hook("o", r, "var-init"); o < i; o++) s.push(n[o]);

      return s;
    }, "assign"), this.removeAll = cc11001100_hook("this.removeAll", function () {
      return this.ranges.splice(0, this.ranges.length);
    }, "assign"), this.attach = cc11001100_hook("this.attach", function (e) {
      this.session && this.detach(), this.session = cc11001100_hook("this.session", e, "assign"), this.onChange = cc11001100_hook("this.onChange", this.$onChange.bind(this), "assign"), this.session.on("change", this.onChange);
    }, "assign"), this.detach = cc11001100_hook("this.detach", function () {
      if (!this.session) return;
      this.session.removeListener("change", this.onChange), this.session = cc11001100_hook("this.session", null, "assign");
    }, "assign"), this.$onChange = cc11001100_hook("this.$onChange", function (e) {
      var t = cc11001100_hook("t", e.start, "var-init"),
          n = cc11001100_hook("n", e.end, "var-init"),
          r = cc11001100_hook("r", t.row, "var-init"),
          i = cc11001100_hook("i", n.row, "var-init"),
          s = cc11001100_hook("s", this.ranges, "var-init");

      for (var o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", s.length, "var-init"); o < u; o++) {
        var a = cc11001100_hook("a", s[o], "var-init");
        if (a.end.row >= r) break;
      }

      if (e.action == "insert") {
        var f = cc11001100_hook("f", i - r, "var-init"),
            l = cc11001100_hook("l", -t.column + n.column, "var-init");

        for (; o < u; o++) {
          var a = cc11001100_hook("a", s[o], "var-init");
          if (a.start.row > r) break;
          a.start.row == r && a.start.column >= t.column && (a.start.column != t.column || !this.$insertRight) && (a.start.column += cc11001100_hook("a.start.column", l, "assign"), a.start.row += cc11001100_hook("a.start.row", f, "assign"));

          if (a.end.row == r && a.end.column >= t.column) {
            if (a.end.column == t.column && this.$insertRight) continue;
            a.end.column == t.column && l > 0 && o < u - 1 && a.end.column > a.start.column && a.end.column == s[o + 1].start.column && (a.end.column -= cc11001100_hook("a.end.column", l, "assign")), a.end.column += cc11001100_hook("a.end.column", l, "assign"), a.end.row += cc11001100_hook("a.end.row", f, "assign");
          }
        }
      } else {
        var f = cc11001100_hook("f", r - i, "var-init"),
            l = cc11001100_hook("l", t.column - n.column, "var-init");

        for (; o < u; o++) {
          var a = cc11001100_hook("a", s[o], "var-init");
          if (a.start.row > i) break;
          a.end.row < i && (a.end.row = cc11001100_hook("a.end.row", r, "assign"), a.end.column = cc11001100_hook("a.end.column", t.column, "assign"));
          if (a.start.row < i || a.start.row == i && a.start.column <= n.colum) a.start.row = cc11001100_hook("a.start.row", r, "assign"), a.start.column = cc11001100_hook("a.start.column", t.column, "assign");
          if (a.end.row == i) if (a.end.column <= n.column) {
            if (f || a.end.column > t.column) a.end.column = cc11001100_hook("a.end.column", t.column, "assign"), a.end.row = cc11001100_hook("a.end.row", t.row, "assign");
          } else a.end.column += cc11001100_hook("a.end.column", l, "assign"), a.end.row += cc11001100_hook("a.end.row", f, "assign");
          if (a.start.row == i) if (a.start.column <= n.column) {
            if (f || a.start.column > t.column) a.start.column = cc11001100_hook("a.start.column", t.column, "assign"), a.start.row = cc11001100_hook("a.start.row", t.row, "assign");
          } else a.start.column += cc11001100_hook("a.start.column", l, "assign"), a.start.row += cc11001100_hook("a.start.row", f, "assign");
        }
      }

      if (f != 0 && o < u) for (; o < u; o++) {
        var a = cc11001100_hook("a", s[o], "var-init");
        a.start.row += cc11001100_hook("a.start.row", f, "assign"), a.end.row += cc11001100_hook("a.end.row", f, "assign");
      }
    }, "assign");
  }).call(s.prototype), t.RangeList = cc11001100_hook("t.RangeList", s, "assign");
}), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], function (e, t, n) {
  "use strict";

  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.row -= cc11001100_hook("e.row", t.row, "assign"), e.row == 0 && (e.column -= cc11001100_hook("e.column", t.column, "assign"));
  }

  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    u(e.start, t), u(e.end, t);
  }

  function f(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.row == 0 && (e.column += cc11001100_hook("e.column", t.column, "assign")), e.row += cc11001100_hook("e.row", t.row, "assign");
  }

  function l(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    f(e.start, t), f(e.end, t);
  }

  var r = cc11001100_hook("r", e("../range").Range, "var-init"),
      i = cc11001100_hook("i", e("../range_list").RangeList, "var-init"),
      s = cc11001100_hook("s", e("../lib/oop"), "var-init"),
      o = cc11001100_hook("o", t.Fold = cc11001100_hook("t.Fold", function (e, t) {
    this.foldLine = cc11001100_hook("this.foldLine", null, "assign"), this.placeholder = cc11001100_hook("this.placeholder", t, "assign"), this.range = cc11001100_hook("this.range", e, "assign"), this.start = cc11001100_hook("this.start", e.start, "assign"), this.end = cc11001100_hook("this.end", e.end, "assign"), this.sameRow = cc11001100_hook("this.sameRow", e.start.row == e.end.row, "assign"), this.subFolds = cc11001100_hook("this.subFolds", this.ranges = cc11001100_hook("this.ranges", [], "assign"), "assign");
  }, "assign"), "var-init");
  s.inherits(o, i), function () {
    this.toString = cc11001100_hook("this.toString", function () {
      return '"' + this.placeholder + '" ' + this.range.toString();
    }, "assign"), this.setFoldLine = cc11001100_hook("this.setFoldLine", function (e) {
      this.foldLine = cc11001100_hook("this.foldLine", e, "assign"), this.subFolds.forEach(function (t) {
        t.setFoldLine(e);
      });
    }, "assign"), this.clone = cc11001100_hook("this.clone", function () {
      var e = cc11001100_hook("e", this.range.clone(), "var-init"),
          t = cc11001100_hook("t", new o(e, this.placeholder), "var-init");
      return this.subFolds.forEach(function (e) {
        t.subFolds.push(e.clone());
      }), t.collapseChildren = cc11001100_hook("t.collapseChildren", this.collapseChildren, "assign"), t;
    }, "assign"), this.addSubFold = cc11001100_hook("this.addSubFold", function (e) {
      if (this.range.isEqual(e)) return;
      if (!this.range.containsRange(e)) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
      a(e, this.start);
      var t = cc11001100_hook("t", e.start.row, "var-init"),
          n = cc11001100_hook("n", e.start.column, "var-init");

      for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", -1, "var-init"); r < this.subFolds.length; r++) {
        i = cc11001100_hook("i", this.subFolds[r].range.compare(t, n), "assign");
        if (i != 1) break;
      }

      var s = cc11001100_hook("s", this.subFolds[r], "var-init");
      if (i == 0) return s.addSubFold(e);
      var t = cc11001100_hook("t", e.range.end.row, "var-init"),
          n = cc11001100_hook("n", e.range.end.column, "var-init");

      for (var o = cc11001100_hook("o", r, "var-init"), i = cc11001100_hook("i", -1, "var-init"); o < this.subFolds.length; o++) {
        i = cc11001100_hook("i", this.subFolds[o].range.compare(t, n), "assign");
        if (i != 1) break;
      }

      var u = cc11001100_hook("u", this.subFolds[o], "var-init");
      if (i == 0) throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
      var f = cc11001100_hook("f", this.subFolds.splice(r, o - r, e), "var-init");
      return e.setFoldLine(this.foldLine), e;
    }, "assign"), this.restoreRange = cc11001100_hook("this.restoreRange", function (e) {
      return l(e, this.start);
    }, "assign");
  }.call(o.prototype);
}), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function (e, t, n) {
  "use strict";

  function u() {
    this.getFoldAt = cc11001100_hook("this.getFoldAt", function (e, t, n) {
      var r = cc11001100_hook("r", this.getFoldLine(e), "var-init");
      if (!r) return null;
      var i = cc11001100_hook("i", r.folds, "var-init");

      for (var s = cc11001100_hook("s", 0, "var-init"); s < i.length; s++) {
        var o = cc11001100_hook("o", i[s], "var-init");

        if (o.range.contains(e, t)) {
          if (n == 1 && o.range.isEnd(e, t)) continue;
          if (n == -1 && o.range.isStart(e, t)) continue;
          return o;
        }
      }
    }, "assign"), this.getFoldsInRange = cc11001100_hook("this.getFoldsInRange", function (e) {
      var t = cc11001100_hook("t", e.start, "var-init"),
          n = cc11001100_hook("n", e.end, "var-init"),
          r = cc11001100_hook("r", this.$foldData, "var-init"),
          i = cc11001100_hook("i", [], "var-init");
      t.column += cc11001100_hook("t.column", 1, "assign"), n.column -= cc11001100_hook("n.column", 1, "assign");

      for (var s = cc11001100_hook("s", 0, "var-init"); s < r.length; s++) {
        var o = cc11001100_hook("o", r[s].range.compareRange(e), "var-init");
        if (o == 2) continue;
        if (o == -2) break;
        var u = cc11001100_hook("u", r[s].folds, "var-init");

        for (var a = cc11001100_hook("a", 0, "var-init"); a < u.length; a++) {
          var f = cc11001100_hook("f", u[a], "var-init");
          o = cc11001100_hook("o", f.range.compareRange(e), "assign");
          if (o == -2) break;
          if (o == 2) continue;
          if (o == 42) break;
          i.push(f);
        }
      }

      return t.column -= cc11001100_hook("t.column", 1, "assign"), n.column += cc11001100_hook("n.column", 1, "assign"), i;
    }, "assign"), this.getFoldsInRangeList = cc11001100_hook("this.getFoldsInRangeList", function (e) {
      if (Array.isArray(e)) {
        var t = cc11001100_hook("t", [], "var-init");
        e.forEach(function (e) {
          t = cc11001100_hook("t", t.concat(this.getFoldsInRange(e)), "assign");
        }, this);
      } else var t = cc11001100_hook("t", this.getFoldsInRange(e), "var-init");

      return t;
    }, "assign"), this.getAllFolds = cc11001100_hook("this.getAllFolds", function () {
      var e = cc11001100_hook("e", [], "var-init"),
          t = cc11001100_hook("t", this.$foldData, "var-init");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) for (var r = cc11001100_hook("r", 0, "var-init"); r < t[n].folds.length; r++) e.push(t[n].folds[r]);

      return e;
    }, "assign"), this.getFoldStringAt = cc11001100_hook("this.getFoldStringAt", function (e, t, n, r) {
      r = cc11001100_hook("r", r || this.getFoldLine(e), "assign");
      if (!r) return null;
      var i = cc11001100_hook("i", {
        end: {
          column: cc11001100_hook("column", 0, "object-key-init")
        }
      }, "var-init"),
          s,
          o;

      for (var u = cc11001100_hook("u", 0, "var-init"); u < r.folds.length; u++) {
        o = cc11001100_hook("o", r.folds[u], "assign");
        var a = cc11001100_hook("a", o.range.compareEnd(e, t), "var-init");

        if (a == -1) {
          s = cc11001100_hook("s", this.getLine(o.start.row).substring(i.end.column, o.start.column), "assign");
          break;
        }

        if (a === 0) return null;
        i = cc11001100_hook("i", o, "assign");
      }

      return s || (s = cc11001100_hook("s", this.getLine(o.start.row).substring(i.end.column), "assign")), n == -1 ? s.substring(0, t - i.end.column) : n == 1 ? s.substring(t - i.end.column) : s;
    }, "assign"), this.getFoldLine = cc11001100_hook("this.getFoldLine", function (e, t) {
      var n = cc11001100_hook("n", this.$foldData, "var-init"),
          r = cc11001100_hook("r", 0, "var-init");
      t && (r = cc11001100_hook("r", n.indexOf(t), "assign")), r == -1 && (r = cc11001100_hook("r", 0, "assign"));

      for (r; r < n.length; r++) {
        var i = cc11001100_hook("i", n[r], "var-init");
        if (i.start.row <= e && i.end.row >= e) return i;
        if (i.end.row > e) return null;
      }

      return null;
    }, "assign"), this.getNextFoldLine = cc11001100_hook("this.getNextFoldLine", function (e, t) {
      var n = cc11001100_hook("n", this.$foldData, "var-init"),
          r = cc11001100_hook("r", 0, "var-init");
      t && (r = cc11001100_hook("r", n.indexOf(t), "assign")), r == -1 && (r = cc11001100_hook("r", 0, "assign"));

      for (r; r < n.length; r++) {
        var i = cc11001100_hook("i", n[r], "var-init");
        if (i.end.row >= e) return i;
      }

      return null;
    }, "assign"), this.getFoldedRowCount = cc11001100_hook("this.getFoldedRowCount", function (e, t) {
      var n = cc11001100_hook("n", this.$foldData, "var-init"),
          r = cc11001100_hook("r", t - e + 1, "var-init");

      for (var i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
        var s = cc11001100_hook("s", n[i], "var-init"),
            o = cc11001100_hook("o", s.end.row, "var-init"),
            u = cc11001100_hook("u", s.start.row, "var-init");

        if (o >= t) {
          u < t && (u >= e ? r -= cc11001100_hook("r", t - u, "assign") : r = cc11001100_hook("r", 0, "assign"));
          break;
        }

        o >= e && (u >= e ? r -= cc11001100_hook("r", o - u, "assign") : r -= cc11001100_hook("r", o - e + 1, "assign"));
      }

      return r;
    }, "assign"), this.$addFoldLine = cc11001100_hook("this.$addFoldLine", function (e) {
      return this.$foldData.push(e), this.$foldData.sort(function (e, t) {
        return e.start.row - t.start.row;
      }), e;
    }, "assign"), this.addFold = cc11001100_hook("this.addFold", function (e, t) {
      var n = cc11001100_hook("n", this.$foldData, "var-init"),
          r = cc11001100_hook("r", !1, "var-init"),
          o;
      e instanceof s ? o = cc11001100_hook("o", e, "assign") : (o = cc11001100_hook("o", new s(t, e), "assign"), o.collapseChildren = cc11001100_hook("o.collapseChildren", t.collapseChildren, "assign")), this.$clipRangeToDocument(o.range);
      var u = cc11001100_hook("u", o.start.row, "var-init"),
          a = cc11001100_hook("a", o.start.column, "var-init"),
          f = cc11001100_hook("f", o.end.row, "var-init"),
          l = cc11001100_hook("l", o.end.column, "var-init");

      if (u < f || u == f && a <= l - 2) {
        var c = cc11001100_hook("c", this.getFoldAt(u, a, 1), "var-init"),
            h = cc11001100_hook("h", this.getFoldAt(f, l, -1), "var-init");
        if (c && h == c) return c.addSubFold(o);
        c && !c.range.isStart(u, a) && this.removeFold(c), h && !h.range.isEnd(f, l) && this.removeFold(h);
        var p = cc11001100_hook("p", this.getFoldsInRange(o.range), "var-init");
        p.length > 0 && (this.removeFolds(p), p.forEach(function (e) {
          o.addSubFold(e);
        }));

        for (var d = cc11001100_hook("d", 0, "var-init"); d < n.length; d++) {
          var v = cc11001100_hook("v", n[d], "var-init");

          if (f == v.start.row) {
            v.addFold(o), r = cc11001100_hook("r", !0, "assign");
            break;
          }

          if (u == v.end.row) {
            v.addFold(o), r = cc11001100_hook("r", !0, "assign");

            if (!o.sameRow) {
              var m = cc11001100_hook("m", n[d + 1], "var-init");

              if (m && m.start.row == f) {
                v.merge(m);
                break;
              }
            }

            break;
          }

          if (f <= v.start.row) break;
        }

        return r || (v = cc11001100_hook("v", this.$addFoldLine(new i(this.$foldData, o)), "assign")), this.$useWrapMode ? this.$updateWrapData(v.start.row, v.start.row) : this.$updateRowLengthCache(v.start.row, v.start.row), this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this._signal("changeFold", {
          data: cc11001100_hook("data", o, "object-key-init"),
          action: cc11001100_hook("action", "add", "object-key-init")
        }), o;
      }

      throw new Error("The range has to be at least 2 characters width");
    }, "assign"), this.addFolds = cc11001100_hook("this.addFolds", function (e) {
      e.forEach(function (e) {
        this.addFold(e);
      }, this);
    }, "assign"), this.removeFold = cc11001100_hook("this.removeFold", function (e) {
      var t = cc11001100_hook("t", e.foldLine, "var-init"),
          n = cc11001100_hook("n", t.start.row, "var-init"),
          r = cc11001100_hook("r", t.end.row, "var-init"),
          i = cc11001100_hook("i", this.$foldData, "var-init"),
          s = cc11001100_hook("s", t.folds, "var-init");
      if (s.length == 1) i.splice(i.indexOf(t), 1);else if (t.range.isEnd(e.end.row, e.end.column)) s.pop(), t.end.row = cc11001100_hook("t.end.row", s[s.length - 1].end.row, "assign"), t.end.column = cc11001100_hook("t.end.column", s[s.length - 1].end.column, "assign");else if (t.range.isStart(e.start.row, e.start.column)) s.shift(), t.start.row = cc11001100_hook("t.start.row", s[0].start.row, "assign"), t.start.column = cc11001100_hook("t.start.column", s[0].start.column, "assign");else if (e.sameRow) s.splice(s.indexOf(e), 1);else {
        var o = cc11001100_hook("o", t.split(e.start.row, e.start.column), "var-init");
        s = cc11001100_hook("s", o.folds, "assign"), s.shift(), o.start.row = cc11001100_hook("o.start.row", s[0].start.row, "assign"), o.start.column = cc11001100_hook("o.start.column", s[0].start.column, "assign");
      }
      this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, r) : this.$updateRowLengthCache(n, r)), this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this._signal("changeFold", {
        data: cc11001100_hook("data", e, "object-key-init"),
        action: cc11001100_hook("action", "remove", "object-key-init")
      });
    }, "assign"), this.removeFolds = cc11001100_hook("this.removeFolds", function (e) {
      var t = cc11001100_hook("t", [], "var-init");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) t.push(e[n]);

      t.forEach(function (e) {
        this.removeFold(e);
      }, this), this.$modified = cc11001100_hook("this.$modified", !0, "assign");
    }, "assign"), this.expandFold = cc11001100_hook("this.expandFold", function (e) {
      this.removeFold(e), e.subFolds.forEach(function (t) {
        e.restoreRange(t), this.addFold(t);
      }, this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = cc11001100_hook("e.subFolds", [], "assign");
    }, "assign"), this.expandFolds = cc11001100_hook("this.expandFolds", function (e) {
      e.forEach(function (e) {
        this.expandFold(e);
      }, this);
    }, "assign"), this.unfold = cc11001100_hook("this.unfold", function (e, t) {
      var n, i;
      e == null ? (n = cc11001100_hook("n", new r(0, 0, this.getLength(), 0), "assign"), t = cc11001100_hook("t", !0, "assign")) : typeof e == "number" ? n = cc11001100_hook("n", new r(e, 0, e, this.getLine(e).length), "assign") : "row" in e ? n = cc11001100_hook("n", r.fromPoints(e, e), "assign") : n = cc11001100_hook("n", e, "assign"), i = cc11001100_hook("i", this.getFoldsInRangeList(n), "assign");
      if (t) this.removeFolds(i);else {
        var s = cc11001100_hook("s", i, "var-init");

        while (s.length) this.expandFolds(s), s = cc11001100_hook("s", this.getFoldsInRangeList(n), "assign");
      }
      if (i.length) return i;
    }, "assign"), this.isRowFolded = cc11001100_hook("this.isRowFolded", function (e, t) {
      return !!this.getFoldLine(e, t);
    }, "assign"), this.getRowFoldEnd = cc11001100_hook("this.getRowFoldEnd", function (e, t) {
      var n = cc11001100_hook("n", this.getFoldLine(e, t), "var-init");
      return n ? n.end.row : e;
    }, "assign"), this.getRowFoldStart = cc11001100_hook("this.getRowFoldStart", function (e, t) {
      var n = cc11001100_hook("n", this.getFoldLine(e, t), "var-init");
      return n ? n.start.row : e;
    }, "assign"), this.getFoldDisplayLine = cc11001100_hook("this.getFoldDisplayLine", function (e, t, n, r, i) {
      r == null && (r = cc11001100_hook("r", e.start.row, "assign")), i == null && (i = cc11001100_hook("i", 0, "assign")), t == null && (t = cc11001100_hook("t", e.end.row, "assign")), n == null && (n = cc11001100_hook("n", this.getLine(t).length, "assign"));
      var s = cc11001100_hook("s", this.doc, "var-init"),
          o = cc11001100_hook("o", "", "var-init");
      return e.walk(function (e, t, n, u) {
        if (t < r) return;

        if (t == r) {
          if (n < i) return;
          u = cc11001100_hook("u", Math.max(i, u), "assign");
        }

        e != null ? o += cc11001100_hook("o", e, "assign") : o += cc11001100_hook("o", s.getLine(t).substring(u, n), "assign");
      }, t, n), o;
    }, "assign"), this.getDisplayLine = cc11001100_hook("this.getDisplayLine", function (e, t, n, r) {
      var i = cc11001100_hook("i", this.getFoldLine(e), "var-init");

      if (!i) {
        var s;
        return s = cc11001100_hook("s", this.doc.getLine(e), "assign"), s.substring(r || 0, t || s.length);
      }

      return this.getFoldDisplayLine(i, e, t, n, r);
    }, "assign"), this.$cloneFoldData = cc11001100_hook("this.$cloneFoldData", function () {
      var e = cc11001100_hook("e", [], "var-init");
      return e = cc11001100_hook("e", this.$foldData.map(function (t) {
        var n = cc11001100_hook("n", t.folds.map(function (e) {
          return e.clone();
        }), "var-init");
        return new i(e, n);
      }), "assign"), e;
    }, "assign"), this.toggleFold = cc11001100_hook("this.toggleFold", function (e) {
      var t = cc11001100_hook("t", this.selection, "var-init"),
          n = cc11001100_hook("n", t.getRange(), "var-init"),
          r,
          i;

      if (n.isEmpty()) {
        var s = cc11001100_hook("s", n.start, "var-init");
        r = cc11001100_hook("r", this.getFoldAt(s.row, s.column), "assign");

        if (r) {
          this.expandFold(r);
          return;
        }

        (i = cc11001100_hook("i", this.findMatchingBracket(s), "assign")) ? n.comparePoint(i) == 1 ? n.end = cc11001100_hook("n.end", i, "assign") : (n.start = cc11001100_hook("n.start", i, "assign"), n.start.column++, n.end.column--) : (i = cc11001100_hook("i", this.findMatchingBracket({
          row: cc11001100_hook("row", s.row, "object-key-init"),
          column: cc11001100_hook("column", s.column + 1, "object-key-init")
        }), "assign")) ? (n.comparePoint(i) == 1 ? n.end = cc11001100_hook("n.end", i, "assign") : n.start = cc11001100_hook("n.start", i, "assign"), n.start.column++) : n = cc11001100_hook("n", this.getCommentFoldRange(s.row, s.column) || n, "assign");
      } else {
        var o = cc11001100_hook("o", this.getFoldsInRange(n), "var-init");

        if (e && o.length) {
          this.expandFolds(o);
          return;
        }

        o.length == 1 && (r = cc11001100_hook("r", o[0], "assign"));
      }

      r || (r = cc11001100_hook("r", this.getFoldAt(n.start.row, n.start.column), "assign"));

      if (r && r.range.toString() == n.toString()) {
        this.expandFold(r);
        return;
      }

      var u = cc11001100_hook("u", "...", "var-init");

      if (!n.isMultiLine()) {
        u = cc11001100_hook("u", this.getTextRange(n), "assign");
        if (u.length < 4) return;
        u = cc11001100_hook("u", u.trim().substring(0, 2) + "..", "assign");
      }

      this.addFold(u, n);
    }, "assign"), this.getCommentFoldRange = cc11001100_hook("this.getCommentFoldRange", function (e, t, n) {
      var i = cc11001100_hook("i", new o(this, e, t), "var-init"),
          s = cc11001100_hook("s", i.getCurrentToken(), "var-init"),
          u = cc11001100_hook("u", s.type, "var-init");

      if (s && /^comment|string/.test(u)) {
        u = cc11001100_hook("u", u.match(/comment|string/)[0], "assign"), u == "comment" && (u += cc11001100_hook("u", "|doc-start", "assign"));
        var a = cc11001100_hook("a", new RegExp(u), "var-init"),
            f = cc11001100_hook("f", new r(), "var-init");

        if (n != 1) {
          do s = cc11001100_hook("s", i.stepBackward(), "assign"); while (s && a.test(s.type));

          i.stepForward();
        }

        f.start.row = cc11001100_hook("f.start.row", i.getCurrentTokenRow(), "assign"), f.start.column = cc11001100_hook("f.start.column", i.getCurrentTokenColumn() + 2, "assign"), i = cc11001100_hook("i", new o(this, e, t), "assign");

        if (n != -1) {
          var l = cc11001100_hook("l", -1, "var-init");

          do {
            s = cc11001100_hook("s", i.stepForward(), "assign");

            if (l == -1) {
              var c = cc11001100_hook("c", this.getState(i.$row), "var-init");
              a.test(c) || (l = cc11001100_hook("l", i.$row, "assign"));
            } else if (i.$row > l) break;
          } while (s && a.test(s.type));

          s = cc11001100_hook("s", i.stepBackward(), "assign");
        } else s = cc11001100_hook("s", i.getCurrentToken(), "assign");

        return f.end.row = cc11001100_hook("f.end.row", i.getCurrentTokenRow(), "assign"), f.end.column = cc11001100_hook("f.end.column", i.getCurrentTokenColumn() + s.value.length - 2, "assign"), f;
      }
    }, "assign"), this.foldAll = cc11001100_hook("this.foldAll", function (e, t, n) {
      n == undefined && (n = cc11001100_hook("n", 1e5, "assign"));
      var r = cc11001100_hook("r", this.foldWidgets, "var-init");
      if (!r) return;
      t = cc11001100_hook("t", t || this.getLength(), "assign"), e = cc11001100_hook("e", e || 0, "assign");

      for (var i = cc11001100_hook("i", e, "var-init"); i < t; i++) {
        r[i] == null && (r[i] = cc11001100_hook("r[i]", this.getFoldWidget(i), "assign"));
        if (r[i] != "start") continue;
        var s = cc11001100_hook("s", this.getFoldWidgetRange(i), "var-init");

        if (s && s.isMultiLine() && s.end.row <= t && s.start.row >= e) {
          i = cc11001100_hook("i", s.end.row, "assign");

          try {
            var o = cc11001100_hook("o", this.addFold("...", s), "var-init");
            o && (o.collapseChildren = cc11001100_hook("o.collapseChildren", n, "assign"));
          } catch (u) {}
        }
      }
    }, "assign"), this.$foldStyles = cc11001100_hook("this.$foldStyles", {
      manual: cc11001100_hook("manual", 1, "object-key-init"),
      markbegin: cc11001100_hook("markbegin", 1, "object-key-init"),
      markbeginend: cc11001100_hook("markbeginend", 1, "object-key-init")
    }, "assign"), this.$foldStyle = cc11001100_hook("this.$foldStyle", "markbegin", "assign"), this.setFoldStyle = cc11001100_hook("this.setFoldStyle", function (e) {
      if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
      if (this.$foldStyle == e) return;
      this.$foldStyle = cc11001100_hook("this.$foldStyle", e, "assign"), e == "manual" && this.unfold();
      var t = cc11001100_hook("t", this.$foldMode, "var-init");
      this.$setFolding(null), this.$setFolding(t);
    }, "assign"), this.$setFolding = cc11001100_hook("this.$setFolding", function (e) {
      if (this.$foldMode == e) return;
      this.$foldMode = cc11001100_hook("this.$foldMode", e, "assign"), this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation");

      if (!e || this.$foldStyle == "manual") {
        this.foldWidgets = cc11001100_hook("this.foldWidgets", null, "assign");
        return;
      }

      this.foldWidgets = cc11001100_hook("this.foldWidgets", [], "assign"), this.getFoldWidget = cc11001100_hook("this.getFoldWidget", e.getFoldWidget.bind(e, this, this.$foldStyle), "assign"), this.getFoldWidgetRange = cc11001100_hook("this.getFoldWidgetRange", e.getFoldWidgetRange.bind(e, this, this.$foldStyle), "assign"), this.$updateFoldWidgets = cc11001100_hook("this.$updateFoldWidgets", this.updateFoldWidgets.bind(this), "assign"), this.$tokenizerUpdateFoldWidgets = cc11001100_hook("this.$tokenizerUpdateFoldWidgets", this.tokenizerUpdateFoldWidgets.bind(this), "assign"), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
    }, "assign"), this.getParentFoldRangeData = cc11001100_hook("this.getParentFoldRangeData", function (e, t) {
      var n = cc11001100_hook("n", this.foldWidgets, "var-init");
      if (!n || t && n[e]) return {};
      var r = cc11001100_hook("r", e - 1, "var-init"),
          i;

      while (r >= 0) {
        var s = cc11001100_hook("s", n[r], "var-init");
        s == null && (s = cc11001100_hook("s", n[r] = cc11001100_hook("n[r]", this.getFoldWidget(r), "assign"), "assign"));

        if (s == "start") {
          var o = cc11001100_hook("o", this.getFoldWidgetRange(r), "var-init");
          i || (i = cc11001100_hook("i", o, "assign"));
          if (o && o.end.row >= e) break;
        }

        r--;
      }

      return {
        range: cc11001100_hook("range", r !== -1 && o, "object-key-init"),
        firstRange: cc11001100_hook("firstRange", i, "object-key-init")
      };
    }, "assign"), this.onFoldWidgetClick = cc11001100_hook("this.onFoldWidgetClick", function (e, t) {
      t = cc11001100_hook("t", t.domEvent, "assign");
      var n = cc11001100_hook("n", {
        children: cc11001100_hook("children", t.shiftKey, "object-key-init"),
        all: cc11001100_hook("all", t.ctrlKey || t.metaKey, "object-key-init"),
        siblings: cc11001100_hook("siblings", t.altKey, "object-key-init")
      }, "var-init"),
          r = cc11001100_hook("r", this.$toggleFoldWidget(e, n), "var-init");

      if (!r) {
        var i = cc11001100_hook("i", t.target || t.srcElement, "var-init");
        i && /ace_fold-widget/.test(i.className) && (i.className += cc11001100_hook("i.className", " ace_invalid", "assign"));
      }
    }, "assign"), this.$toggleFoldWidget = cc11001100_hook("this.$toggleFoldWidget", function (e, t) {
      if (!this.getFoldWidget) return;
      var n = cc11001100_hook("n", this.getFoldWidget(e), "var-init"),
          r = cc11001100_hook("r", this.getLine(e), "var-init"),
          i = cc11001100_hook("i", n === "end" ? -1 : 1, "var-init"),
          s = cc11001100_hook("s", this.getFoldAt(e, i === -1 ? 0 : r.length, i), "var-init");
      if (s) return t.children || t.all ? this.removeFold(s) : this.expandFold(s), s;
      var o = cc11001100_hook("o", this.getFoldWidgetRange(e, !0), "var-init");

      if (o && !o.isMultiLine()) {
        s = cc11001100_hook("s", this.getFoldAt(o.start.row, o.start.column, 1), "assign");
        if (s && o.isEqual(s.range)) return this.removeFold(s), s;
      }

      if (t.siblings) {
        var u = cc11001100_hook("u", this.getParentFoldRangeData(e), "var-init");
        if (u.range) var a = cc11001100_hook("a", u.range.start.row + 1, "var-init"),
            f = cc11001100_hook("f", u.range.end.row, "var-init");
        this.foldAll(a, f, t.all ? 1e4 : 0);
      } else t.children ? (f = cc11001100_hook("f", o ? o.end.row : this.getLength(), "assign"), this.foldAll(e + 1, f, t.all ? 1e4 : 0)) : o && (t.all && (o.collapseChildren = cc11001100_hook("o.collapseChildren", 1e4, "assign")), this.addFold("...", o));

      return o;
    }, "assign"), this.toggleFoldWidget = cc11001100_hook("this.toggleFoldWidget", function (e) {
      var t = cc11001100_hook("t", this.selection.getCursor().row, "var-init");
      t = cc11001100_hook("t", this.getRowFoldStart(t), "assign");
      var n = cc11001100_hook("n", this.$toggleFoldWidget(t, {}), "var-init");
      if (n) return;
      var r = cc11001100_hook("r", this.getParentFoldRangeData(t, !0), "var-init");
      n = cc11001100_hook("n", r.range || r.firstRange, "assign");

      if (n) {
        t = cc11001100_hook("t", n.start.row, "assign");
        var i = cc11001100_hook("i", this.getFoldAt(t, this.getLine(t).length, 1), "var-init");
        i ? this.removeFold(i) : this.addFold("...", n);
      }
    }, "assign"), this.updateFoldWidgets = cc11001100_hook("this.updateFoldWidgets", function (e) {
      var t = cc11001100_hook("t", e.start.row, "var-init"),
          n = cc11001100_hook("n", e.end.row - t, "var-init");
      if (n === 0) this.foldWidgets[t] = cc11001100_hook("this.foldWidgets[t]", null, "assign");else if (e.action == "remove") this.foldWidgets.splice(t, n + 1, null);else {
        var r = cc11001100_hook("r", Array(n + 1), "var-init");
        r.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets, r);
      }
    }, "assign"), this.tokenizerUpdateFoldWidgets = cc11001100_hook("this.tokenizerUpdateFoldWidgets", function (e) {
      var t = cc11001100_hook("t", e.data, "var-init");
      t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length);
    }, "assign");
  }

  var r = cc11001100_hook("r", e("../range").Range, "var-init"),
      i = cc11001100_hook("i", e("./fold_line").FoldLine, "var-init"),
      s = cc11001100_hook("s", e("./fold").Fold, "var-init"),
      o = cc11001100_hook("o", e("../token_iterator").TokenIterator, "var-init");
  t.Folding = cc11001100_hook("t.Folding", u, "assign");
}), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function (e, t, n) {
  "use strict";

  function s() {
    this.findMatchingBracket = cc11001100_hook("this.findMatchingBracket", function (e, t) {
      if (e.column == 0) return null;
      var n = cc11001100_hook("n", t || this.getLine(e.row).charAt(e.column - 1), "var-init");
      if (n == "") return null;
      var r = cc11001100_hook("r", n.match(/([\(\[\{])|([\)\]\}])/), "var-init");
      return r ? r[1] ? this.$findClosingBracket(r[1], e) : this.$findOpeningBracket(r[2], e) : null;
    }, "assign"), this.getBracketRange = cc11001100_hook("this.getBracketRange", function (e) {
      var t = cc11001100_hook("t", this.getLine(e.row), "var-init"),
          n = cc11001100_hook("n", !0, "var-init"),
          r,
          s = cc11001100_hook("s", t.charAt(e.column - 1), "var-init"),
          o = cc11001100_hook("o", s && s.match(/([\(\[\{])|([\)\]\}])/), "var-init");
      o || (s = cc11001100_hook("s", t.charAt(e.column), "assign"), e = cc11001100_hook("e", {
        row: cc11001100_hook("row", e.row, "object-key-init"),
        column: cc11001100_hook("column", e.column + 1, "object-key-init")
      }, "assign"), o = cc11001100_hook("o", s && s.match(/([\(\[\{])|([\)\]\}])/), "assign"), n = cc11001100_hook("n", !1, "assign"));
      if (!o) return null;

      if (o[1]) {
        var u = cc11001100_hook("u", this.$findClosingBracket(o[1], e), "var-init");
        if (!u) return null;
        r = cc11001100_hook("r", i.fromPoints(e, u), "assign"), n || (r.end.column++, r.start.column--), r.cursor = cc11001100_hook("r.cursor", r.end, "assign");
      } else {
        var u = cc11001100_hook("u", this.$findOpeningBracket(o[2], e), "var-init");
        if (!u) return null;
        r = cc11001100_hook("r", i.fromPoints(u, e), "assign"), n || (r.start.column++, r.end.column--), r.cursor = cc11001100_hook("r.cursor", r.start, "assign");
      }

      return r;
    }, "assign"), this.$brackets = cc11001100_hook("this.$brackets", {
      ")": cc11001100_hook(")", "(", "object-key-init"),
      "(": cc11001100_hook("(", ")", "object-key-init"),
      "]": cc11001100_hook("]", "[", "object-key-init"),
      "[": cc11001100_hook("[", "]", "object-key-init"),
      "{": cc11001100_hook("{", "}", "object-key-init"),
      "}": cc11001100_hook("}", "{", "object-key-init")
    }, "assign"), this.$findOpeningBracket = cc11001100_hook("this.$findOpeningBracket", function (e, t, n) {
      var i = cc11001100_hook("i", this.$brackets[e], "var-init"),
          s = cc11001100_hook("s", 1, "var-init"),
          o = cc11001100_hook("o", new r(this, t.row, t.column), "var-init"),
          u = cc11001100_hook("u", o.getCurrentToken(), "var-init");
      u || (u = cc11001100_hook("u", o.stepForward(), "assign"));
      if (!u) return;
      n || (n = cc11001100_hook("n", new RegExp("(\\.?" + u.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"), "assign"));
      var a = cc11001100_hook("a", t.column - o.getCurrentTokenColumn() - 2, "var-init"),
          f = cc11001100_hook("f", u.value, "var-init");

      for (;;) {
        while (a >= 0) {
          var l = cc11001100_hook("l", f.charAt(a), "var-init");

          if (l == i) {
            s -= cc11001100_hook("s", 1, "assign");
            if (s == 0) return {
              row: cc11001100_hook("row", o.getCurrentTokenRow(), "object-key-init"),
              column: cc11001100_hook("column", a + o.getCurrentTokenColumn(), "object-key-init")
            };
          } else l == e && (s += cc11001100_hook("s", 1, "assign"));

          a -= cc11001100_hook("a", 1, "assign");
        }

        do u = cc11001100_hook("u", o.stepBackward(), "assign"); while (u && !n.test(u.type));

        if (u == null) break;
        f = cc11001100_hook("f", u.value, "assign"), a = cc11001100_hook("a", f.length - 1, "assign");
      }

      return null;
    }, "assign"), this.$findClosingBracket = cc11001100_hook("this.$findClosingBracket", function (e, t, n) {
      var i = cc11001100_hook("i", this.$brackets[e], "var-init"),
          s = cc11001100_hook("s", 1, "var-init"),
          o = cc11001100_hook("o", new r(this, t.row, t.column), "var-init"),
          u = cc11001100_hook("u", o.getCurrentToken(), "var-init");
      u || (u = cc11001100_hook("u", o.stepForward(), "assign"));
      if (!u) return;
      n || (n = cc11001100_hook("n", new RegExp("(\\.?" + u.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"), "assign"));
      var a = cc11001100_hook("a", t.column - o.getCurrentTokenColumn(), "var-init");

      for (;;) {
        var f = cc11001100_hook("f", u.value, "var-init"),
            l = cc11001100_hook("l", f.length, "var-init");

        while (a < l) {
          var c = cc11001100_hook("c", f.charAt(a), "var-init");

          if (c == i) {
            s -= cc11001100_hook("s", 1, "assign");
            if (s == 0) return {
              row: cc11001100_hook("row", o.getCurrentTokenRow(), "object-key-init"),
              column: cc11001100_hook("column", a + o.getCurrentTokenColumn(), "object-key-init")
            };
          } else c == e && (s += cc11001100_hook("s", 1, "assign"));

          a += cc11001100_hook("a", 1, "assign");
        }

        do u = cc11001100_hook("u", o.stepForward(), "assign"); while (u && !n.test(u.type));

        if (u == null) break;
        a = cc11001100_hook("a", 0, "assign");
      }

      return null;
    }, "assign");
  }

  var r = cc11001100_hook("r", e("../token_iterator").TokenIterator, "var-init"),
      i = cc11001100_hook("i", e("../range").Range, "var-init");
  t.BracketMatch = cc11001100_hook("t.BracketMatch", s, "assign");
}), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/lang"), "var-init"),
      s = cc11001100_hook("s", e("./bidihandler").BidiHandler, "var-init"),
      o = cc11001100_hook("o", e("./config"), "var-init"),
      u = cc11001100_hook("u", e("./lib/event_emitter").EventEmitter, "var-init"),
      a = cc11001100_hook("a", e("./selection").Selection, "var-init"),
      f = cc11001100_hook("f", e("./mode/text").Mode, "var-init"),
      l = cc11001100_hook("l", e("./range").Range, "var-init"),
      c = cc11001100_hook("c", e("./document").Document, "var-init"),
      h = cc11001100_hook("h", e("./background_tokenizer").BackgroundTokenizer, "var-init"),
      p = cc11001100_hook("p", e("./search_highlight").SearchHighlight, "var-init"),
      d = function (e, t) {
    this.$breakpoints = cc11001100_hook("this.$breakpoints", [], "assign"), this.$decorations = cc11001100_hook("this.$decorations", [], "assign"), this.$frontMarkers = cc11001100_hook("this.$frontMarkers", {}, "assign"), this.$backMarkers = cc11001100_hook("this.$backMarkers", {}, "assign"), this.$markerId = cc11001100_hook("this.$markerId", 1, "assign"), this.$undoSelect = cc11001100_hook("this.$undoSelect", !0, "assign"), this.$foldData = cc11001100_hook("this.$foldData", [], "assign"), this.id = cc11001100_hook("this.id", "session" + ++d.$uid, "assign"), this.$foldData.toString = cc11001100_hook("this.$foldData.toString", function () {
      return this.join("\n");
    }, "assign"), this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = cc11001100_hook("this.$onChange", this.onChange.bind(this), "assign");
    if (typeof e != "object" || !e.getLine) e = cc11001100_hook("e", new c(e), "assign");
    this.$bidiHandler = cc11001100_hook("this.$bidiHandler", new s(this), "assign"), this.setDocument(e), this.selection = cc11001100_hook("this.selection", new a(this), "assign"), o.resetOptions(this), this.setMode(t), o._signal("session", this);
  };

  d.$uid = cc11001100_hook("d.$uid", 0, "assign"), function () {
    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e < 4352 ? !1 : e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
    }

    r.implement(this, u), this.setDocument = cc11001100_hook("this.setDocument", function (e) {
      this.doc && this.doc.removeListener("change", this.$onChange), this.doc = cc11001100_hook("this.doc", e, "assign"), e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
    }, "assign"), this.getDocument = cc11001100_hook("this.getDocument", function () {
      return this.doc;
    }, "assign"), this.$resetRowCache = cc11001100_hook("this.$resetRowCache", function (e) {
      if (!e) {
        this.$docRowCache = cc11001100_hook("this.$docRowCache", [], "assign"), this.$screenRowCache = cc11001100_hook("this.$screenRowCache", [], "assign");
        return;
      }

      var t = cc11001100_hook("t", this.$docRowCache.length, "var-init"),
          n = cc11001100_hook("n", this.$getRowCacheIndex(this.$docRowCache, e) + 1, "var-init");
      t > n && (this.$docRowCache.splice(n, t), this.$screenRowCache.splice(n, t));
    }, "assign"), this.$getRowCacheIndex = cc11001100_hook("this.$getRowCacheIndex", function (e, t) {
      var n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", e.length - 1, "var-init");

      while (n <= r) {
        var i = cc11001100_hook("i", n + r >> 1, "var-init"),
            s = cc11001100_hook("s", e[i], "var-init");
        if (t > s) n = cc11001100_hook("n", i + 1, "assign");else {
          if (!(t < s)) return i;
          r = cc11001100_hook("r", i - 1, "assign");
        }
      }

      return n - 1;
    }, "assign"), this.resetCaches = cc11001100_hook("this.resetCaches", function () {
      this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this.$wrapData = cc11001100_hook("this.$wrapData", [], "assign"), this.$rowLengthCache = cc11001100_hook("this.$rowLengthCache", [], "assign"), this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0);
    }, "assign"), this.onChangeFold = cc11001100_hook("this.onChangeFold", function (e) {
      var t = cc11001100_hook("t", e.data, "var-init");
      this.$resetRowCache(t.start.row);
    }, "assign"), this.onChange = cc11001100_hook("this.onChange", function (e) {
      this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this.$bidiHandler.onChange(e), this.$resetRowCache(e.start.row);
      var t = cc11001100_hook("t", this.$updateInternalDataOnChange(e), "var-init");
      !this.$fromUndo && this.$undoManager && (t && t.length && (this.$undoManager.add({
        action: cc11001100_hook("action", "removeFolds", "object-key-init"),
        folds: cc11001100_hook("folds", t, "object-key-init")
      }, this.mergeUndoDeltas), this.mergeUndoDeltas = cc11001100_hook("this.mergeUndoDeltas", !0, "assign")), this.$undoManager.add(e, this.mergeUndoDeltas), this.mergeUndoDeltas = cc11001100_hook("this.mergeUndoDeltas", !0, "assign"), this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(e), this._signal("change", e);
    }, "assign"), this.setValue = cc11001100_hook("this.setValue", function (e) {
      this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
    }, "assign"), this.getValue = cc11001100_hook("this.getValue", this.toString = cc11001100_hook("this.toString", function () {
      return this.doc.getValue();
    }, "assign"), "assign"), this.getSelection = cc11001100_hook("this.getSelection", function () {
      return this.selection;
    }, "assign"), this.getState = cc11001100_hook("this.getState", function (e) {
      return this.bgTokenizer.getState(e);
    }, "assign"), this.getTokens = cc11001100_hook("this.getTokens", function (e) {
      return this.bgTokenizer.getTokens(e);
    }, "assign"), this.getTokenAt = cc11001100_hook("this.getTokenAt", function (e, t) {
      var n = cc11001100_hook("n", this.bgTokenizer.getTokens(e), "var-init"),
          r,
          i = cc11001100_hook("i", 0, "var-init");

      if (t == null) {
        var s = cc11001100_hook("s", n.length - 1, "var-init");
        i = cc11001100_hook("i", this.getLine(e).length, "assign");
      } else for (var s = cc11001100_hook("s", 0, "var-init"); s < n.length; s++) {
        i += cc11001100_hook("i", n[s].value.length, "assign");
        if (i >= t) break;
      }

      return r = cc11001100_hook("r", n[s], "assign"), r ? (r.index = cc11001100_hook("r.index", s, "assign"), r.start = cc11001100_hook("r.start", i - r.value.length, "assign"), r) : null;
    }, "assign"), this.setUndoManager = cc11001100_hook("this.setUndoManager", function (e) {
      this.$undoManager = cc11001100_hook("this.$undoManager", e, "assign"), this.$informUndoManager && this.$informUndoManager.cancel();

      if (e) {
        var t = cc11001100_hook("t", this, "var-init");
        e.addSession(this), this.$syncInformUndoManager = cc11001100_hook("this.$syncInformUndoManager", function () {
          t.$informUndoManager.cancel(), t.mergeUndoDeltas = cc11001100_hook("t.mergeUndoDeltas", !1, "assign");
        }, "assign"), this.$informUndoManager = cc11001100_hook("this.$informUndoManager", i.delayedCall(this.$syncInformUndoManager), "assign");
      } else this.$syncInformUndoManager = cc11001100_hook("this.$syncInformUndoManager", function () {}, "assign");
    }, "assign"), this.markUndoGroup = cc11001100_hook("this.markUndoGroup", function () {
      this.$syncInformUndoManager && this.$syncInformUndoManager();
    }, "assign"), this.$defaultUndoManager = cc11001100_hook("this.$defaultUndoManager", {
      undo: function () {},
      redo: function () {},
      reset: function () {},
      add: function () {},
      addSelection: function () {},
      startNewGroup: function () {},
      addSession: function () {}
    }, "assign"), this.getUndoManager = cc11001100_hook("this.getUndoManager", function () {
      return this.$undoManager || this.$defaultUndoManager;
    }, "assign"), this.getTabString = cc11001100_hook("this.getTabString", function () {
      return this.getUseSoftTabs() ? i.stringRepeat(" ", this.getTabSize()) : "	";
    }, "assign"), this.setUseSoftTabs = cc11001100_hook("this.setUseSoftTabs", function (e) {
      this.setOption("useSoftTabs", e);
    }, "assign"), this.getUseSoftTabs = cc11001100_hook("this.getUseSoftTabs", function () {
      return this.$useSoftTabs && !this.$mode.$indentWithTabs;
    }, "assign"), this.setTabSize = cc11001100_hook("this.setTabSize", function (e) {
      this.setOption("tabSize", e);
    }, "assign"), this.getTabSize = cc11001100_hook("this.getTabSize", function () {
      return this.$tabSize;
    }, "assign"), this.isTabStop = cc11001100_hook("this.isTabStop", function (e) {
      return this.$useSoftTabs && e.column % this.$tabSize === 0;
    }, "assign"), this.setNavigateWithinSoftTabs = cc11001100_hook("this.setNavigateWithinSoftTabs", function (e) {
      this.setOption("navigateWithinSoftTabs", e);
    }, "assign"), this.getNavigateWithinSoftTabs = cc11001100_hook("this.getNavigateWithinSoftTabs", function () {
      return this.$navigateWithinSoftTabs;
    }, "assign"), this.$overwrite = cc11001100_hook("this.$overwrite", !1, "assign"), this.setOverwrite = cc11001100_hook("this.setOverwrite", function (e) {
      this.setOption("overwrite", e);
    }, "assign"), this.getOverwrite = cc11001100_hook("this.getOverwrite", function () {
      return this.$overwrite;
    }, "assign"), this.toggleOverwrite = cc11001100_hook("this.toggleOverwrite", function () {
      this.setOverwrite(!this.$overwrite);
    }, "assign"), this.addGutterDecoration = cc11001100_hook("this.addGutterDecoration", function (e, t) {
      this.$decorations[e] || (this.$decorations[e] = cc11001100_hook("this.$decorations[e]", "", "assign")), this.$decorations[e] += cc11001100_hook("this.$decorations[e]", " " + t, "assign"), this._signal("changeBreakpoint", {});
    }, "assign"), this.removeGutterDecoration = cc11001100_hook("this.removeGutterDecoration", function (e, t) {
      this.$decorations[e] = cc11001100_hook("this.$decorations[e]", (this.$decorations[e] || "").replace(" " + t, ""), "assign"), this._signal("changeBreakpoint", {});
    }, "assign"), this.getBreakpoints = cc11001100_hook("this.getBreakpoints", function () {
      return this.$breakpoints;
    }, "assign"), this.setBreakpoints = cc11001100_hook("this.setBreakpoints", function (e) {
      this.$breakpoints = cc11001100_hook("this.$breakpoints", [], "assign");

      for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) this.$breakpoints[e[t]] = cc11001100_hook("this.$breakpoints[e[t]]", "ace_breakpoint", "assign");

      this._signal("changeBreakpoint", {});
    }, "assign"), this.clearBreakpoints = cc11001100_hook("this.clearBreakpoints", function () {
      this.$breakpoints = cc11001100_hook("this.$breakpoints", [], "assign"), this._signal("changeBreakpoint", {});
    }, "assign"), this.setBreakpoint = cc11001100_hook("this.setBreakpoint", function (e, t) {
      t === undefined && (t = cc11001100_hook("t", "ace_breakpoint", "assign")), t ? this.$breakpoints[e] = cc11001100_hook("this.$breakpoints[e]", t, "assign") : delete this.$breakpoints[e], this._signal("changeBreakpoint", {});
    }, "assign"), this.clearBreakpoint = cc11001100_hook("this.clearBreakpoint", function (e) {
      delete this.$breakpoints[e], this._signal("changeBreakpoint", {});
    }, "assign"), this.addMarker = cc11001100_hook("this.addMarker", function (e, t, n, r) {
      var i = cc11001100_hook("i", this.$markerId++, "var-init"),
          s = cc11001100_hook("s", {
        range: cc11001100_hook("range", e, "object-key-init"),
        type: cc11001100_hook("type", n || "line", "object-key-init"),
        renderer: cc11001100_hook("renderer", typeof n == "function" ? n : null, "object-key-init"),
        clazz: cc11001100_hook("clazz", t, "object-key-init"),
        inFront: cc11001100_hook("inFront", !!r, "object-key-init"),
        id: cc11001100_hook("id", i, "object-key-init")
      }, "var-init");
      return r ? (this.$frontMarkers[i] = cc11001100_hook("this.$frontMarkers[i]", s, "assign"), this._signal("changeFrontMarker")) : (this.$backMarkers[i] = cc11001100_hook("this.$backMarkers[i]", s, "assign"), this._signal("changeBackMarker")), i;
    }, "assign"), this.addDynamicMarker = cc11001100_hook("this.addDynamicMarker", function (e, t) {
      if (!e.update) return;
      var n = cc11001100_hook("n", this.$markerId++, "var-init");
      return e.id = cc11001100_hook("e.id", n, "assign"), e.inFront = cc11001100_hook("e.inFront", !!t, "assign"), t ? (this.$frontMarkers[n] = cc11001100_hook("this.$frontMarkers[n]", e, "assign"), this._signal("changeFrontMarker")) : (this.$backMarkers[n] = cc11001100_hook("this.$backMarkers[n]", e, "assign"), this._signal("changeBackMarker")), e;
    }, "assign"), this.removeMarker = cc11001100_hook("this.removeMarker", function (e) {
      var t = cc11001100_hook("t", this.$frontMarkers[e] || this.$backMarkers[e], "var-init");
      if (!t) return;
      var n = cc11001100_hook("n", t.inFront ? this.$frontMarkers : this.$backMarkers, "var-init");
      delete n[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker");
    }, "assign"), this.getMarkers = cc11001100_hook("this.getMarkers", function (e) {
      return e ? this.$frontMarkers : this.$backMarkers;
    }, "assign"), this.highlight = cc11001100_hook("this.highlight", function (e) {
      if (!this.$searchHighlight) {
        var t = cc11001100_hook("t", new p(null, "ace_selected-word", "text"), "var-init");
        this.$searchHighlight = cc11001100_hook("this.$searchHighlight", this.addDynamicMarker(t), "assign");
      }

      this.$searchHighlight.setRegexp(e);
    }, "assign"), this.highlightLines = cc11001100_hook("this.highlightLines", function (e, t, n, r) {
      typeof t != "number" && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", e, "assign")), n || (n = cc11001100_hook("n", "ace_step", "assign"));
      var i = cc11001100_hook("i", new l(e, 0, t, Infinity), "var-init");
      return i.id = cc11001100_hook("i.id", this.addMarker(i, n, "fullLine", r), "assign"), i;
    }, "assign"), this.setAnnotations = cc11001100_hook("this.setAnnotations", function (e) {
      this.$annotations = cc11001100_hook("this.$annotations", e, "assign"), this._signal("changeAnnotation", {});
    }, "assign"), this.getAnnotations = cc11001100_hook("this.getAnnotations", function () {
      return this.$annotations || [];
    }, "assign"), this.clearAnnotations = cc11001100_hook("this.clearAnnotations", function () {
      this.setAnnotations([]);
    }, "assign"), this.$detectNewLine = cc11001100_hook("this.$detectNewLine", function (e) {
      var t = cc11001100_hook("t", e.match(/^.*?(\r?\n)/m), "var-init");
      t ? this.$autoNewLine = cc11001100_hook("this.$autoNewLine", t[1], "assign") : this.$autoNewLine = cc11001100_hook("this.$autoNewLine", "\n", "assign");
    }, "assign"), this.getWordRange = cc11001100_hook("this.getWordRange", function (e, t) {
      var n = cc11001100_hook("n", this.getLine(e), "var-init"),
          r = cc11001100_hook("r", !1, "var-init");
      t > 0 && (r = cc11001100_hook("r", !!n.charAt(t - 1).match(this.tokenRe), "assign")), r || (r = cc11001100_hook("r", !!n.charAt(t).match(this.tokenRe), "assign"));
      if (r) var i = cc11001100_hook("i", this.tokenRe, "var-init");else if (/^\s+$/.test(n.slice(t - 1, t + 1))) var i = cc11001100_hook("i", /\s/, "var-init");else var i = cc11001100_hook("i", this.nonTokenRe, "var-init");
      var s = cc11001100_hook("s", t, "var-init");

      if (s > 0) {
        do s--; while (s >= 0 && n.charAt(s).match(i));

        s++;
      }

      var o = cc11001100_hook("o", t, "var-init");

      while (o < n.length && n.charAt(o).match(i)) o++;

      return new l(e, s, e, o);
    }, "assign"), this.getAWordRange = cc11001100_hook("this.getAWordRange", function (e, t) {
      var n = cc11001100_hook("n", this.getWordRange(e, t), "var-init"),
          r = cc11001100_hook("r", this.getLine(n.end.row), "var-init");

      while (r.charAt(n.end.column).match(/[ \t]/)) n.end.column += cc11001100_hook("n.end.column", 1, "assign");

      return n;
    }, "assign"), this.setNewLineMode = cc11001100_hook("this.setNewLineMode", function (e) {
      this.doc.setNewLineMode(e);
    }, "assign"), this.getNewLineMode = cc11001100_hook("this.getNewLineMode", function () {
      return this.doc.getNewLineMode();
    }, "assign"), this.setUseWorker = cc11001100_hook("this.setUseWorker", function (e) {
      this.setOption("useWorker", e);
    }, "assign"), this.getUseWorker = cc11001100_hook("this.getUseWorker", function () {
      return this.$useWorker;
    }, "assign"), this.onReloadTokenizer = cc11001100_hook("this.onReloadTokenizer", function (e) {
      var t = cc11001100_hook("t", e.data, "var-init");
      this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e);
    }, "assign"), this.$modes = cc11001100_hook("this.$modes", {}, "assign"), this.$mode = cc11001100_hook("this.$mode", null, "assign"), this.$modeId = cc11001100_hook("this.$modeId", null, "assign"), this.setMode = cc11001100_hook("this.setMode", function (e, t) {
      if (e && typeof e == "object") {
        if (e.getTokenizer) return this.$onChangeMode(e);
        var n = cc11001100_hook("n", e, "var-init"),
            r = cc11001100_hook("r", n.path, "var-init");
      } else r = cc11001100_hook("r", e || "ace/mode/text", "assign");

      this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = cc11001100_hook("this.$modes[\"ace/mode/text\"]", new f(), "assign"));

      if (this.$modes[r] && !n) {
        this.$onChangeMode(this.$modes[r]), t && t();
        return;
      }

      this.$modeId = cc11001100_hook("this.$modeId", r, "assign"), o.loadModule(["mode", r], function (e) {
        if (this.$modeId !== r) return t && t();
        this.$modes[r] && !n ? this.$onChangeMode(this.$modes[r]) : e && e.Mode && (e = cc11001100_hook("e", new e.Mode(n), "assign"), n || (this.$modes[r] = cc11001100_hook("this.$modes[r]", e, "assign"), e.$id = cc11001100_hook("e.$id", r, "assign")), this.$onChangeMode(e)), t && t();
      }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0);
    }, "assign"), this.$onChangeMode = cc11001100_hook("this.$onChangeMode", function (e, t) {
      t || (this.$modeId = cc11001100_hook("this.$modeId", e.$id, "assign"));
      if (this.$mode === e) return;
      this.$mode = cc11001100_hook("this.$mode", e, "assign"), this.$stopWorker(), this.$useWorker && this.$startWorker();
      var n = cc11001100_hook("n", e.getTokenizer(), "var-init");

      if (n.addEventListener !== undefined) {
        var r = cc11001100_hook("r", this.onReloadTokenizer.bind(this), "var-init");
        n.addEventListener("update", r);
      }

      if (!this.bgTokenizer) {
        this.bgTokenizer = cc11001100_hook("this.bgTokenizer", new h(n), "assign");
        var i = cc11001100_hook("i", this, "var-init");
        this.bgTokenizer.addEventListener("update", function (e) {
          i._signal("tokenizerUpdate", e);
        });
      } else this.bgTokenizer.setTokenizer(n);

      this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = cc11001100_hook("this.tokenRe", e.tokenRe, "assign"), this.nonTokenRe = cc11001100_hook("this.nonTokenRe", e.nonTokenRe, "assign"), t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"));
    }, "assign"), this.$stopWorker = cc11001100_hook("this.$stopWorker", function () {
      this.$worker && (this.$worker.terminate(), this.$worker = cc11001100_hook("this.$worker", null, "assign"));
    }, "assign"), this.$startWorker = cc11001100_hook("this.$startWorker", function () {
      try {
        this.$worker = cc11001100_hook("this.$worker", this.$mode.createWorker(this), "assign");
      } catch (e) {
        o.warn("Could not load worker", e), this.$worker = cc11001100_hook("this.$worker", null, "assign");
      }
    }, "assign"), this.getMode = cc11001100_hook("this.getMode", function () {
      return this.$mode;
    }, "assign"), this.$scrollTop = cc11001100_hook("this.$scrollTop", 0, "assign"), this.setScrollTop = cc11001100_hook("this.setScrollTop", function (e) {
      if (this.$scrollTop === e || isNaN(e)) return;
      this.$scrollTop = cc11001100_hook("this.$scrollTop", e, "assign"), this._signal("changeScrollTop", e);
    }, "assign"), this.getScrollTop = cc11001100_hook("this.getScrollTop", function () {
      return this.$scrollTop;
    }, "assign"), this.$scrollLeft = cc11001100_hook("this.$scrollLeft", 0, "assign"), this.setScrollLeft = cc11001100_hook("this.setScrollLeft", function (e) {
      if (this.$scrollLeft === e || isNaN(e)) return;
      this.$scrollLeft = cc11001100_hook("this.$scrollLeft", e, "assign"), this._signal("changeScrollLeft", e);
    }, "assign"), this.getScrollLeft = cc11001100_hook("this.getScrollLeft", function () {
      return this.$scrollLeft;
    }, "assign"), this.getScreenWidth = cc11001100_hook("this.getScreenWidth", function () {
      return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
    }, "assign"), this.getLineWidgetMaxWidth = cc11001100_hook("this.getLineWidgetMaxWidth", function () {
      if (this.lineWidgetsWidth != null) return this.lineWidgetsWidth;
      var e = cc11001100_hook("e", 0, "var-init");
      return this.lineWidgets.forEach(function (t) {
        t && t.screenWidth > e && (e = cc11001100_hook("e", t.screenWidth, "assign"));
      }), this.lineWidgetWidth = cc11001100_hook("this.lineWidgetWidth", e, "assign");
    }, "assign"), this.$computeWidth = cc11001100_hook("this.$computeWidth", function (e) {
      if (this.$modified || e) {
        this.$modified = cc11001100_hook("this.$modified", !1, "assign");
        if (this.$useWrapMode) return this.screenWidth = cc11001100_hook("this.screenWidth", this.$wrapLimit, "assign");
        var t = cc11001100_hook("t", this.doc.getAllLines(), "var-init"),
            n = cc11001100_hook("n", this.$rowLengthCache, "var-init"),
            r = cc11001100_hook("r", 0, "var-init"),
            i = cc11001100_hook("i", 0, "var-init"),
            s = cc11001100_hook("s", this.$foldData[i], "var-init"),
            o = cc11001100_hook("o", s ? s.start.row : Infinity, "var-init"),
            u = cc11001100_hook("u", t.length, "var-init");

        for (var a = cc11001100_hook("a", 0, "var-init"); a < u; a++) {
          if (a > o) {
            a = cc11001100_hook("a", s.end.row + 1, "assign");
            if (a >= u) break;
            s = cc11001100_hook("s", this.$foldData[i++], "assign"), o = cc11001100_hook("o", s ? s.start.row : Infinity, "assign");
          }

          n[a] == null && (n[a] = cc11001100_hook("n[a]", this.$getStringScreenWidth(t[a])[0], "assign")), n[a] > r && (r = cc11001100_hook("r", n[a], "assign"));
        }

        this.screenWidth = cc11001100_hook("this.screenWidth", r, "assign");
      }
    }, "assign"), this.getLine = cc11001100_hook("this.getLine", function (e) {
      return this.doc.getLine(e);
    }, "assign"), this.getLines = cc11001100_hook("this.getLines", function (e, t) {
      return this.doc.getLines(e, t);
    }, "assign"), this.getLength = cc11001100_hook("this.getLength", function () {
      return this.doc.getLength();
    }, "assign"), this.getTextRange = cc11001100_hook("this.getTextRange", function (e) {
      return this.doc.getTextRange(e || this.selection.getRange());
    }, "assign"), this.insert = cc11001100_hook("this.insert", function (e, t) {
      return this.doc.insert(e, t);
    }, "assign"), this.remove = cc11001100_hook("this.remove", function (e) {
      return this.doc.remove(e);
    }, "assign"), this.removeFullLines = cc11001100_hook("this.removeFullLines", function (e, t) {
      return this.doc.removeFullLines(e, t);
    }, "assign"), this.undoChanges = cc11001100_hook("this.undoChanges", function (e, t) {
      if (!e.length) return;
      this.$fromUndo = cc11001100_hook("this.$fromUndo", !0, "assign");

      for (var n = cc11001100_hook("n", e.length - 1, "var-init"); n != -1; n--) {
        var r = cc11001100_hook("r", e[n], "var-init");
        r.action == "insert" || r.action == "remove" ? this.doc.revertDelta(r) : r.folds && this.addFolds(r.folds);
      }

      !t && this.$undoSelect && (e.selectionBefore ? this.selection.fromJSON(e.selectionBefore) : this.selection.setRange(this.$getUndoSelection(e, !0))), this.$fromUndo = cc11001100_hook("this.$fromUndo", !1, "assign");
    }, "assign"), this.redoChanges = cc11001100_hook("this.redoChanges", function (e, t) {
      if (!e.length) return;
      this.$fromUndo = cc11001100_hook("this.$fromUndo", !0, "assign");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
        var r = cc11001100_hook("r", e[n], "var-init");
        (r.action == "insert" || r.action == "remove") && this.doc.applyDelta(r);
      }

      !t && this.$undoSelect && (e.selectionAfter ? this.selection.fromJSON(e.selectionAfter) : this.selection.setRange(this.$getUndoSelection(e, !1))), this.$fromUndo = cc11001100_hook("this.$fromUndo", !1, "assign");
    }, "assign"), this.setUndoSelect = cc11001100_hook("this.setUndoSelect", function (e) {
      this.$undoSelect = cc11001100_hook("this.$undoSelect", e, "assign");
    }, "assign"), this.$getUndoSelection = cc11001100_hook("this.$getUndoSelection", function (e, t) {
      function n(e) {
        cc11001100_hook("e", e, "function-parameter");
        return t ? e.action !== "insert" : e.action === "insert";
      }

      var r, i, s;

      for (var o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) {
        var u = cc11001100_hook("u", e[o], "var-init");
        if (!u.start) continue;

        if (!r) {
          n(u) ? (r = cc11001100_hook("r", l.fromPoints(u.start, u.end), "assign"), s = cc11001100_hook("s", !0, "assign")) : (r = cc11001100_hook("r", l.fromPoints(u.start, u.start), "assign"), s = cc11001100_hook("s", !1, "assign"));
          continue;
        }

        n(u) ? (i = cc11001100_hook("i", u.start, "assign"), r.compare(i.row, i.column) == -1 && r.setStart(i), i = cc11001100_hook("i", u.end, "assign"), r.compare(i.row, i.column) == 1 && r.setEnd(i), s = cc11001100_hook("s", !0, "assign")) : (i = cc11001100_hook("i", u.start, "assign"), r.compare(i.row, i.column) == -1 && (r = cc11001100_hook("r", l.fromPoints(u.start, u.start), "assign")), s = cc11001100_hook("s", !1, "assign"));
      }

      return r;
    }, "assign"), this.replace = cc11001100_hook("this.replace", function (e, t) {
      return this.doc.replace(e, t);
    }, "assign"), this.moveText = cc11001100_hook("this.moveText", function (e, t, n) {
      var r = cc11001100_hook("r", this.getTextRange(e), "var-init"),
          i = cc11001100_hook("i", this.getFoldsInRange(e), "var-init"),
          s = cc11001100_hook("s", l.fromPoints(t, t), "var-init");

      if (!n) {
        this.remove(e);
        var o = cc11001100_hook("o", e.start.row - e.end.row, "var-init"),
            u = cc11001100_hook("u", o ? -e.end.column : e.start.column - e.end.column, "var-init");
        u && (s.start.row == e.end.row && s.start.column > e.end.column && (s.start.column += cc11001100_hook("s.start.column", u, "assign")), s.end.row == e.end.row && s.end.column > e.end.column && (s.end.column += cc11001100_hook("s.end.column", u, "assign"))), o && s.start.row >= e.end.row && (s.start.row += cc11001100_hook("s.start.row", o, "assign"), s.end.row += cc11001100_hook("s.end.row", o, "assign"));
      }

      s.end = cc11001100_hook("s.end", this.insert(s.start, r), "assign");

      if (i.length) {
        var a = cc11001100_hook("a", e.start, "var-init"),
            f = cc11001100_hook("f", s.start, "var-init"),
            o = cc11001100_hook("o", f.row - a.row, "var-init"),
            u = cc11001100_hook("u", f.column - a.column, "var-init");
        this.addFolds(i.map(function (e) {
          return e = cc11001100_hook("e", e.clone(), "assign"), e.start.row == a.row && (e.start.column += cc11001100_hook("e.start.column", u, "assign")), e.end.row == a.row && (e.end.column += cc11001100_hook("e.end.column", u, "assign")), e.start.row += cc11001100_hook("e.start.row", o, "assign"), e.end.row += cc11001100_hook("e.end.row", o, "assign"), e;
        }));
      }

      return s;
    }, "assign"), this.indentRows = cc11001100_hook("this.indentRows", function (e, t, n) {
      n = cc11001100_hook("n", n.replace(/\t/g, this.getTabString()), "assign");

      for (var r = cc11001100_hook("r", e, "var-init"); r <= t; r++) this.doc.insertInLine({
        row: cc11001100_hook("row", r, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, n);
    }, "assign"), this.outdentRows = cc11001100_hook("this.outdentRows", function (e) {
      var t = cc11001100_hook("t", e.collapseRows(), "var-init"),
          n = cc11001100_hook("n", new l(0, 0, 0, 0), "var-init"),
          r = cc11001100_hook("r", this.getTabSize(), "var-init");

      for (var i = cc11001100_hook("i", t.start.row, "var-init"); i <= t.end.row; ++i) {
        var s = cc11001100_hook("s", this.getLine(i), "var-init");
        n.start.row = cc11001100_hook("n.start.row", i, "assign"), n.end.row = cc11001100_hook("n.end.row", i, "assign");

        for (var o = cc11001100_hook("o", 0, "var-init"); o < r; ++o) if (s.charAt(o) != " ") break;

        o < r && s.charAt(o) == "	" ? (n.start.column = cc11001100_hook("n.start.column", o, "assign"), n.end.column = cc11001100_hook("n.end.column", o + 1, "assign")) : (n.start.column = cc11001100_hook("n.start.column", 0, "assign"), n.end.column = cc11001100_hook("n.end.column", o, "assign")), this.remove(n);
      }
    }, "assign"), this.$moveLines = cc11001100_hook("this.$moveLines", function (e, t, n) {
      e = cc11001100_hook("e", this.getRowFoldStart(e), "assign"), t = cc11001100_hook("t", this.getRowFoldEnd(t), "assign");

      if (n < 0) {
        var r = cc11001100_hook("r", this.getRowFoldStart(e + n), "var-init");
        if (r < 0) return 0;
        var i = cc11001100_hook("i", r - e, "var-init");
      } else if (n > 0) {
        var r = cc11001100_hook("r", this.getRowFoldEnd(t + n), "var-init");
        if (r > this.doc.getLength() - 1) return 0;
        var i = cc11001100_hook("i", r - t, "var-init");
      } else {
        e = cc11001100_hook("e", this.$clipRowToDocument(e), "assign"), t = cc11001100_hook("t", this.$clipRowToDocument(t), "assign");
        var i = cc11001100_hook("i", t - e + 1, "var-init");
      }

      var s = cc11001100_hook("s", new l(e, 0, t, Number.MAX_VALUE), "var-init"),
          o = cc11001100_hook("o", this.getFoldsInRange(s).map(function (e) {
        return e = cc11001100_hook("e", e.clone(), "assign"), e.start.row += cc11001100_hook("e.start.row", i, "assign"), e.end.row += cc11001100_hook("e.end.row", i, "assign"), e;
      }), "var-init"),
          u = cc11001100_hook("u", n == 0 ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t), "var-init");
      return this.doc.insertFullLines(e + i, u), o.length && this.addFolds(o), i;
    }, "assign"), this.moveLinesUp = cc11001100_hook("this.moveLinesUp", function (e, t) {
      return this.$moveLines(e, t, -1);
    }, "assign"), this.moveLinesDown = cc11001100_hook("this.moveLinesDown", function (e, t) {
      return this.$moveLines(e, t, 1);
    }, "assign"), this.duplicateLines = cc11001100_hook("this.duplicateLines", function (e, t) {
      return this.$moveLines(e, t, 0);
    }, "assign"), this.$clipRowToDocument = cc11001100_hook("this.$clipRowToDocument", function (e) {
      return Math.max(0, Math.min(e, this.doc.getLength() - 1));
    }, "assign"), this.$clipColumnToRow = cc11001100_hook("this.$clipColumnToRow", function (e, t) {
      return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t);
    }, "assign"), this.$clipPositionToDocument = cc11001100_hook("this.$clipPositionToDocument", function (e, t) {
      t = cc11001100_hook("t", Math.max(0, t), "assign");
      if (e < 0) e = cc11001100_hook("e", 0, "assign"), t = cc11001100_hook("t", 0, "assign");else {
        var n = cc11001100_hook("n", this.doc.getLength(), "var-init");
        e >= n ? (e = cc11001100_hook("e", n - 1, "assign"), t = cc11001100_hook("t", this.doc.getLine(n - 1).length, "assign")) : t = cc11001100_hook("t", Math.min(this.doc.getLine(e).length, t), "assign");
      }
      return {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", t, "object-key-init")
      };
    }, "assign"), this.$clipRangeToDocument = cc11001100_hook("this.$clipRangeToDocument", function (e) {
      e.start.row < 0 ? (e.start.row = cc11001100_hook("e.start.row", 0, "assign"), e.start.column = cc11001100_hook("e.start.column", 0, "assign")) : e.start.column = cc11001100_hook("e.start.column", this.$clipColumnToRow(e.start.row, e.start.column), "assign");
      var t = cc11001100_hook("t", this.doc.getLength() - 1, "var-init");
      return e.end.row > t ? (e.end.row = cc11001100_hook("e.end.row", t, "assign"), e.end.column = cc11001100_hook("e.end.column", this.doc.getLine(t).length, "assign")) : e.end.column = cc11001100_hook("e.end.column", this.$clipColumnToRow(e.end.row, e.end.column), "assign"), e;
    }, "assign"), this.$wrapLimit = cc11001100_hook("this.$wrapLimit", 80, "assign"), this.$useWrapMode = cc11001100_hook("this.$useWrapMode", !1, "assign"), this.$wrapLimitRange = cc11001100_hook("this.$wrapLimitRange", {
      min: cc11001100_hook("min", null, "object-key-init"),
      max: cc11001100_hook("max", null, "object-key-init")
    }, "assign"), this.setUseWrapMode = cc11001100_hook("this.setUseWrapMode", function (e) {
      if (e != this.$useWrapMode) {
        this.$useWrapMode = cc11001100_hook("this.$useWrapMode", e, "assign"), this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this.$resetRowCache(0);

        if (e) {
          var t = cc11001100_hook("t", this.getLength(), "var-init");
          this.$wrapData = cc11001100_hook("this.$wrapData", Array(t), "assign"), this.$updateWrapData(0, t - 1);
        }

        this._signal("changeWrapMode");
      }
    }, "assign"), this.getUseWrapMode = cc11001100_hook("this.getUseWrapMode", function () {
      return this.$useWrapMode;
    }, "assign"), this.setWrapLimitRange = cc11001100_hook("this.setWrapLimitRange", function (e, t) {
      if (this.$wrapLimitRange.min !== e || this.$wrapLimitRange.max !== t) this.$wrapLimitRange = cc11001100_hook("this.$wrapLimitRange", {
        min: cc11001100_hook("min", e, "object-key-init"),
        max: cc11001100_hook("max", t, "object-key-init")
      }, "assign"), this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode");
    }, "assign"), this.adjustWrapLimit = cc11001100_hook("this.adjustWrapLimit", function (e, t) {
      var n = cc11001100_hook("n", this.$wrapLimitRange, "var-init");
      n.max < 0 && (n = cc11001100_hook("n", {
        min: cc11001100_hook("min", t, "object-key-init"),
        max: cc11001100_hook("max", t, "object-key-init")
      }, "assign"));
      var r = cc11001100_hook("r", this.$constrainWrapLimit(e, n.min, n.max), "var-init");
      return r != this.$wrapLimit && r > 1 ? (this.$wrapLimit = cc11001100_hook("this.$wrapLimit", r, "assign"), this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1;
    }, "assign"), this.$constrainWrapLimit = cc11001100_hook("this.$constrainWrapLimit", function (e, t, n) {
      return t && (e = cc11001100_hook("e", Math.max(t, e), "assign")), n && (e = cc11001100_hook("e", Math.min(n, e), "assign")), e;
    }, "assign"), this.getWrapLimit = cc11001100_hook("this.getWrapLimit", function () {
      return this.$wrapLimit;
    }, "assign"), this.setWrapLimit = cc11001100_hook("this.setWrapLimit", function (e) {
      this.setWrapLimitRange(e, e);
    }, "assign"), this.getWrapLimitRange = cc11001100_hook("this.getWrapLimitRange", function () {
      return {
        min: cc11001100_hook("min", this.$wrapLimitRange.min, "object-key-init"),
        max: cc11001100_hook("max", this.$wrapLimitRange.max, "object-key-init")
      };
    }, "assign"), this.$updateInternalDataOnChange = cc11001100_hook("this.$updateInternalDataOnChange", function (e) {
      var t = cc11001100_hook("t", this.$useWrapMode, "var-init"),
          n = cc11001100_hook("n", e.action, "var-init"),
          r = cc11001100_hook("r", e.start, "var-init"),
          i = cc11001100_hook("i", e.end, "var-init"),
          s = cc11001100_hook("s", r.row, "var-init"),
          o = cc11001100_hook("o", i.row, "var-init"),
          u = cc11001100_hook("u", o - s, "var-init"),
          a = cc11001100_hook("a", null, "var-init");
      this.$updating = cc11001100_hook("this.$updating", !0, "assign");
      if (u != 0) {
        if (n === "remove") {
          this[t ? "$wrapData" : "$rowLengthCache"].splice(s, u);
          var f = cc11001100_hook("f", this.$foldData, "var-init");
          a = cc11001100_hook("a", this.getFoldsInRange(e), "assign"), this.removeFolds(a);
          var l = cc11001100_hook("l", this.getFoldLine(i.row), "var-init"),
              c = cc11001100_hook("c", 0, "var-init");

          if (l) {
            l.addRemoveChars(i.row, i.column, r.column - i.column), l.shiftRow(-u);
            var h = cc11001100_hook("h", this.getFoldLine(s), "var-init");
            h && h !== l && (h.merge(l), l = cc11001100_hook("l", h, "assign")), c = cc11001100_hook("c", f.indexOf(l) + 1, "assign");
          }

          for (c; c < f.length; c++) {
            var l = cc11001100_hook("l", f[c], "var-init");
            l.start.row >= i.row && l.shiftRow(-u);
          }

          o = cc11001100_hook("o", s, "assign");
        } else {
          var p = cc11001100_hook("p", Array(u), "var-init");
          p.unshift(s, 0);
          var d = cc11001100_hook("d", t ? this.$wrapData : this.$rowLengthCache, "var-init");
          d.splice.apply(d, p);
          var f = cc11001100_hook("f", this.$foldData, "var-init"),
              l = cc11001100_hook("l", this.getFoldLine(s), "var-init"),
              c = cc11001100_hook("c", 0, "var-init");

          if (l) {
            var v = cc11001100_hook("v", l.range.compareInside(r.row, r.column), "var-init");
            v == 0 ? (l = cc11001100_hook("l", l.split(r.row, r.column), "assign"), l && (l.shiftRow(u), l.addRemoveChars(o, 0, i.column - r.column))) : v == -1 && (l.addRemoveChars(s, 0, i.column - r.column), l.shiftRow(u)), c = cc11001100_hook("c", f.indexOf(l) + 1, "assign");
          }

          for (c; c < f.length; c++) {
            var l = cc11001100_hook("l", f[c], "var-init");
            l.start.row >= s && l.shiftRow(u);
          }
        }
      } else {
        u = cc11001100_hook("u", Math.abs(e.start.column - e.end.column), "assign"), n === "remove" && (a = cc11001100_hook("a", this.getFoldsInRange(e), "assign"), this.removeFolds(a), u = cc11001100_hook("u", -u, "assign"));
        var l = cc11001100_hook("l", this.getFoldLine(s), "var-init");
        l && l.addRemoveChars(s, r.column, u);
      }
      return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = cc11001100_hook("this.$updating", !1, "assign"), t ? this.$updateWrapData(s, o) : this.$updateRowLengthCache(s, o), a;
    }, "assign"), this.$updateRowLengthCache = cc11001100_hook("this.$updateRowLengthCache", function (e, t, n) {
      this.$rowLengthCache[e] = cc11001100_hook("this.$rowLengthCache[e]", null, "assign"), this.$rowLengthCache[t] = cc11001100_hook("this.$rowLengthCache[t]", null, "assign");
    }, "assign"), this.$updateWrapData = cc11001100_hook("this.$updateWrapData", function (e, t) {
      var r = cc11001100_hook("r", this.doc.getAllLines(), "var-init"),
          i = cc11001100_hook("i", this.getTabSize(), "var-init"),
          o = cc11001100_hook("o", this.$wrapData, "var-init"),
          u = cc11001100_hook("u", this.$wrapLimit, "var-init"),
          a,
          f,
          l = cc11001100_hook("l", e, "var-init");
      t = cc11001100_hook("t", Math.min(t, r.length - 1), "assign");

      while (l <= t) f = cc11001100_hook("f", this.getFoldLine(l, f), "assign"), f ? (a = cc11001100_hook("a", [], "assign"), f.walk(function (e, t, i, o) {
        var u;

        if (e != null) {
          u = cc11001100_hook("u", this.$getDisplayTokens(e, a.length), "assign"), u[0] = cc11001100_hook("u[0]", n, "assign");

          for (var f = cc11001100_hook("f", 1, "var-init"); f < u.length; f++) u[f] = cc11001100_hook("u[f]", s, "assign");
        } else u = cc11001100_hook("u", this.$getDisplayTokens(r[t].substring(o, i), a.length), "assign");

        a = cc11001100_hook("a", a.concat(u), "assign");
      }.bind(this), f.end.row, r[f.end.row].length + 1), o[f.start.row] = cc11001100_hook("o[f.start.row]", this.$computeWrapSplits(a, u, i), "assign"), l = cc11001100_hook("l", f.end.row + 1, "assign")) : (a = cc11001100_hook("a", this.$getDisplayTokens(r[l]), "assign"), o[l] = cc11001100_hook("o[l]", this.$computeWrapSplits(a, u, i), "assign"), l++);
    }, "assign");
    var e = cc11001100_hook("e", 1, "var-init"),
        t = cc11001100_hook("t", 2, "var-init"),
        n = cc11001100_hook("n", 3, "var-init"),
        s = cc11001100_hook("s", 4, "var-init"),
        a = cc11001100_hook("a", 9, "var-init"),
        c = cc11001100_hook("c", 10, "var-init"),
        d = cc11001100_hook("d", 11, "var-init"),
        v = cc11001100_hook("v", 12, "var-init");
    this.$computeWrapSplits = cc11001100_hook("this.$computeWrapSplits", function (e, r, i) {
      function g() {
        var t = cc11001100_hook("t", 0, "var-init");
        if (m === 0) return t;
        if (p) for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
          var r = cc11001100_hook("r", e[n], "var-init");
          if (r == c) t += cc11001100_hook("t", 1, "assign");else {
            if (r != d) {
              if (r == v) continue;
              break;
            }

            t += cc11001100_hook("t", i, "assign");
          }
        }
        return h && p !== !1 && (t += cc11001100_hook("t", i, "assign")), Math.min(t, m);
      }

      function y(t) {
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", e.slice(f, t), "var-init"),
            r = cc11001100_hook("r", n.length, "var-init");
        n.join("").replace(/12/g, function () {
          r -= cc11001100_hook("r", 1, "assign");
        }).replace(/2/g, function () {
          r -= cc11001100_hook("r", 1, "assign");
        }), o.length || (b = cc11001100_hook("b", g(), "assign"), o.indent = cc11001100_hook("o.indent", b, "assign")), l += cc11001100_hook("l", r, "assign"), o.push(l), f = cc11001100_hook("f", t, "assign");
      }

      if (e.length == 0) return [];
      var o = cc11001100_hook("o", [], "var-init"),
          u = cc11001100_hook("u", e.length, "var-init"),
          f = cc11001100_hook("f", 0, "var-init"),
          l = cc11001100_hook("l", 0, "var-init"),
          h = cc11001100_hook("h", this.$wrapAsCode, "var-init"),
          p = cc11001100_hook("p", this.$indentedSoftWrap, "var-init"),
          m = cc11001100_hook("m", r <= Math.max(2 * i, 8) || p === !1 ? 0 : Math.floor(r / 2), "var-init"),
          b = cc11001100_hook("b", 0, "var-init");

      while (u - f > r - b) {
        var w = cc11001100_hook("w", f + r - b, "var-init");

        if (e[w - 1] >= c && e[w] >= c) {
          y(w);
          continue;
        }

        if (e[w] == n || e[w] == s) {
          for (w; w != f - 1; w--) if (e[w] == n) break;

          if (w > f) {
            y(w);
            continue;
          }

          w = cc11001100_hook("w", f + r, "assign");

          for (w; w < e.length; w++) if (e[w] != s) break;

          if (w == e.length) break;
          y(w);
          continue;
        }

        var E = cc11001100_hook("E", Math.max(w - (r - (r >> 2)), f - 1), "var-init");

        while (w > E && e[w] < n) w--;

        if (h) {
          while (w > E && e[w] < n) w--;

          while (w > E && e[w] == a) w--;
        } else while (w > E && e[w] < c) w--;

        if (w > E) {
          y(++w);
          continue;
        }

        w = cc11001100_hook("w", f + r, "assign"), e[w] == t && w--, y(w - b);
      }

      return o;
    }, "assign"), this.$getDisplayTokens = cc11001100_hook("this.$getDisplayTokens", function (n, r) {
      var i = cc11001100_hook("i", [], "var-init"),
          s;
      r = cc11001100_hook("r", r || 0, "assign");

      for (var o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) {
        var u = cc11001100_hook("u", n.charCodeAt(o), "var-init");

        if (u == 9) {
          s = cc11001100_hook("s", this.getScreenTabSize(i.length + r), "assign"), i.push(d);

          for (var f = cc11001100_hook("f", 1, "var-init"); f < s; f++) i.push(v);
        } else u == 32 ? i.push(c) : u > 39 && u < 48 || u > 57 && u < 64 ? i.push(a) : u >= 4352 && m(u) ? i.push(e, t) : i.push(e);
      }

      return i;
    }, "assign"), this.$getStringScreenWidth = cc11001100_hook("this.$getStringScreenWidth", function (e, t, n) {
      if (t == 0) return [0, 0];
      t == null && (t = cc11001100_hook("t", Infinity, "assign")), n = cc11001100_hook("n", n || 0, "assign");
      var r, i;

      for (i = cc11001100_hook("i", 0, "assign"); i < e.length; i++) {
        r = cc11001100_hook("r", e.charCodeAt(i), "assign"), r == 9 ? n += cc11001100_hook("n", this.getScreenTabSize(n), "assign") : r >= 4352 && m(r) ? n += cc11001100_hook("n", 2, "assign") : n += cc11001100_hook("n", 1, "assign");
        if (n > t) break;
      }

      return [n, i];
    }, "assign"), this.lineWidgets = cc11001100_hook("this.lineWidgets", null, "assign"), this.getRowLength = cc11001100_hook("this.getRowLength", function (e) {
      if (this.lineWidgets) var t = cc11001100_hook("t", this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0, "var-init");else t = cc11001100_hook("t", 0, "assign");
      return !this.$useWrapMode || !this.$wrapData[e] ? 1 + t : this.$wrapData[e].length + 1 + t;
    }, "assign"), this.getRowLineCount = cc11001100_hook("this.getRowLineCount", function (e) {
      return !this.$useWrapMode || !this.$wrapData[e] ? 1 : this.$wrapData[e].length + 1;
    }, "assign"), this.getRowWrapIndent = cc11001100_hook("this.getRowWrapIndent", function (e) {
      if (this.$useWrapMode) {
        var t = cc11001100_hook("t", this.screenToDocumentPosition(e, Number.MAX_VALUE), "var-init"),
            n = cc11001100_hook("n", this.$wrapData[t.row], "var-init");
        return n.length && n[0] < t.column ? n.indent : 0;
      }

      return 0;
    }, "assign"), this.getScreenLastRowColumn = cc11001100_hook("this.getScreenLastRowColumn", function (e) {
      var t = cc11001100_hook("t", this.screenToDocumentPosition(e, Number.MAX_VALUE), "var-init");
      return this.documentToScreenColumn(t.row, t.column);
    }, "assign"), this.getDocumentLastRowColumn = cc11001100_hook("this.getDocumentLastRowColumn", function (e, t) {
      var n = cc11001100_hook("n", this.documentToScreenRow(e, t), "var-init");
      return this.getScreenLastRowColumn(n);
    }, "assign"), this.getDocumentLastRowColumnPosition = cc11001100_hook("this.getDocumentLastRowColumnPosition", function (e, t) {
      var n = cc11001100_hook("n", this.documentToScreenRow(e, t), "var-init");
      return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10);
    }, "assign"), this.getRowSplitData = cc11001100_hook("this.getRowSplitData", function (e) {
      return this.$useWrapMode ? this.$wrapData[e] : undefined;
    }, "assign"), this.getScreenTabSize = cc11001100_hook("this.getScreenTabSize", function (e) {
      return this.$tabSize - e % this.$tabSize;
    }, "assign"), this.screenToDocumentRow = cc11001100_hook("this.screenToDocumentRow", function (e, t) {
      return this.screenToDocumentPosition(e, t).row;
    }, "assign"), this.screenToDocumentColumn = cc11001100_hook("this.screenToDocumentColumn", function (e, t) {
      return this.screenToDocumentPosition(e, t).column;
    }, "assign"), this.screenToDocumentPosition = cc11001100_hook("this.screenToDocumentPosition", function (e, t, n) {
      if (e < 0) return {
        row: cc11001100_hook("row", 0, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      };
      var r,
          i = cc11001100_hook("i", 0, "var-init"),
          s = cc11001100_hook("s", 0, "var-init"),
          o,
          u = cc11001100_hook("u", 0, "var-init"),
          a = cc11001100_hook("a", 0, "var-init"),
          f = cc11001100_hook("f", this.$screenRowCache, "var-init"),
          l = cc11001100_hook("l", this.$getRowCacheIndex(f, e), "var-init"),
          c = cc11001100_hook("c", f.length, "var-init");
      if (c && l >= 0) var u = cc11001100_hook("u", f[l], "var-init"),
          i = cc11001100_hook("i", this.$docRowCache[l], "var-init"),
          h = cc11001100_hook("h", e > f[c - 1], "var-init");else var h = cc11001100_hook("h", !c, "var-init");
      var p = cc11001100_hook("p", this.getLength() - 1, "var-init"),
          d = cc11001100_hook("d", this.getNextFoldLine(i), "var-init"),
          v = cc11001100_hook("v", d ? d.start.row : Infinity, "var-init");

      while (u <= e) {
        a = cc11001100_hook("a", this.getRowLength(i), "assign");
        if (u + a > e || i >= p) break;
        u += cc11001100_hook("u", a, "assign"), i++, i > v && (i = cc11001100_hook("i", d.end.row + 1, "assign"), d = cc11001100_hook("d", this.getNextFoldLine(i, d), "assign"), v = cc11001100_hook("v", d ? d.start.row : Infinity, "assign")), h && (this.$docRowCache.push(i), this.$screenRowCache.push(u));
      }

      if (d && d.start.row <= i) r = cc11001100_hook("r", this.getFoldDisplayLine(d), "assign"), i = cc11001100_hook("i", d.start.row, "assign");else {
        if (u + a <= e || i > p) return {
          row: cc11001100_hook("row", p, "object-key-init"),
          column: cc11001100_hook("column", this.getLine(p).length, "object-key-init")
        };
        r = cc11001100_hook("r", this.getLine(i), "assign"), d = cc11001100_hook("d", null, "assign");
      }
      var m = cc11001100_hook("m", 0, "var-init"),
          g = cc11001100_hook("g", Math.floor(e - u), "var-init");

      if (this.$useWrapMode) {
        var y = cc11001100_hook("y", this.$wrapData[i], "var-init");
        y && (o = cc11001100_hook("o", y[g], "assign"), g > 0 && y.length && (m = cc11001100_hook("m", y.indent, "assign"), s = cc11001100_hook("s", y[g - 1] || y[y.length - 1], "assign"), r = cc11001100_hook("r", r.substring(s), "assign")));
      }

      return n !== undefined && this.$bidiHandler.isBidiRow(u + g, i, g) && (t = cc11001100_hook("t", this.$bidiHandler.offsetToCol(n), "assign")), s += cc11001100_hook("s", this.$getStringScreenWidth(r, t - m)[1], "assign"), this.$useWrapMode && s >= o && (s = cc11001100_hook("s", o - 1, "assign")), d ? d.idxToPosition(s) : {
        row: cc11001100_hook("row", i, "object-key-init"),
        column: cc11001100_hook("column", s, "object-key-init")
      };
    }, "assign"), this.documentToScreenPosition = cc11001100_hook("this.documentToScreenPosition", function (e, t) {
      if (typeof t == "undefined") var n = cc11001100_hook("n", this.$clipPositionToDocument(e.row, e.column), "var-init");else n = cc11001100_hook("n", this.$clipPositionToDocument(e, t), "assign");
      e = cc11001100_hook("e", n.row, "assign"), t = cc11001100_hook("t", n.column, "assign");
      var r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", null, "var-init"),
          s = cc11001100_hook("s", null, "var-init");
      s = cc11001100_hook("s", this.getFoldAt(e, t, 1), "assign"), s && (e = cc11001100_hook("e", s.start.row, "assign"), t = cc11001100_hook("t", s.start.column, "assign"));
      var o,
          u = cc11001100_hook("u", 0, "var-init"),
          a = cc11001100_hook("a", this.$docRowCache, "var-init"),
          f = cc11001100_hook("f", this.$getRowCacheIndex(a, e), "var-init"),
          l = cc11001100_hook("l", a.length, "var-init");
      if (l && f >= 0) var u = cc11001100_hook("u", a[f], "var-init"),
          r = cc11001100_hook("r", this.$screenRowCache[f], "var-init"),
          c = cc11001100_hook("c", e > a[l - 1], "var-init");else var c = cc11001100_hook("c", !l, "var-init");
      var h = cc11001100_hook("h", this.getNextFoldLine(u), "var-init"),
          p = cc11001100_hook("p", h ? h.start.row : Infinity, "var-init");

      while (u < e) {
        if (u >= p) {
          o = cc11001100_hook("o", h.end.row + 1, "assign");
          if (o > e) break;
          h = cc11001100_hook("h", this.getNextFoldLine(o, h), "assign"), p = cc11001100_hook("p", h ? h.start.row : Infinity, "assign");
        } else o = cc11001100_hook("o", u + 1, "assign");

        r += cc11001100_hook("r", this.getRowLength(u), "assign"), u = cc11001100_hook("u", o, "assign"), c && (this.$docRowCache.push(u), this.$screenRowCache.push(r));
      }

      var d = cc11001100_hook("d", "", "var-init");
      h && u >= p ? (d = cc11001100_hook("d", this.getFoldDisplayLine(h, e, t), "assign"), i = cc11001100_hook("i", h.start.row, "assign")) : (d = cc11001100_hook("d", this.getLine(e).substring(0, t), "assign"), i = cc11001100_hook("i", e, "assign"));
      var v = cc11001100_hook("v", 0, "var-init");

      if (this.$useWrapMode) {
        var m = cc11001100_hook("m", this.$wrapData[i], "var-init");

        if (m) {
          var g = cc11001100_hook("g", 0, "var-init");

          while (d.length >= m[g]) r++, g++;

          d = cc11001100_hook("d", d.substring(m[g - 1] || 0, d.length), "assign"), v = cc11001100_hook("v", g > 0 ? m.indent : 0, "assign");
        }
      }

      return {
        row: cc11001100_hook("row", r, "object-key-init"),
        column: cc11001100_hook("column", v + this.$getStringScreenWidth(d)[0], "object-key-init")
      };
    }, "assign"), this.documentToScreenColumn = cc11001100_hook("this.documentToScreenColumn", function (e, t) {
      return this.documentToScreenPosition(e, t).column;
    }, "assign"), this.documentToScreenRow = cc11001100_hook("this.documentToScreenRow", function (e, t) {
      return this.documentToScreenPosition(e, t).row;
    }, "assign"), this.getScreenLength = cc11001100_hook("this.getScreenLength", function () {
      var e = cc11001100_hook("e", 0, "var-init"),
          t = cc11001100_hook("t", null, "var-init");

      if (!this.$useWrapMode) {
        e = cc11001100_hook("e", this.getLength(), "assign");
        var n = cc11001100_hook("n", this.$foldData, "var-init");

        for (var r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) t = cc11001100_hook("t", n[r], "assign"), e -= cc11001100_hook("e", t.end.row - t.start.row, "assign");
      } else {
        var i = cc11001100_hook("i", this.$wrapData.length, "var-init"),
            s = cc11001100_hook("s", 0, "var-init"),
            r = cc11001100_hook("r", 0, "var-init"),
            t = cc11001100_hook("t", this.$foldData[r++], "var-init"),
            o = cc11001100_hook("o", t ? t.start.row : Infinity, "var-init");

        while (s < i) {
          var u = cc11001100_hook("u", this.$wrapData[s], "var-init");
          e += cc11001100_hook("e", u ? u.length + 1 : 1, "assign"), s++, s > o && (s = cc11001100_hook("s", t.end.row + 1, "assign"), t = cc11001100_hook("t", this.$foldData[r++], "assign"), o = cc11001100_hook("o", t ? t.start.row : Infinity, "assign"));
        }
      }

      return this.lineWidgets && (e += cc11001100_hook("e", this.$getWidgetScreenLength(), "assign")), e;
    }, "assign"), this.$setFontMetrics = cc11001100_hook("this.$setFontMetrics", function (e) {
      if (!this.$enableVarChar) return;
      this.$getStringScreenWidth = cc11001100_hook("this.$getStringScreenWidth", function (t, n, r) {
        if (n === 0) return [0, 0];
        n || (n = cc11001100_hook("n", Infinity, "assign")), r = cc11001100_hook("r", r || 0, "assign");
        var i, s;

        for (s = cc11001100_hook("s", 0, "assign"); s < t.length; s++) {
          i = cc11001100_hook("i", t.charAt(s), "assign"), i === "	" ? r += cc11001100_hook("r", this.getScreenTabSize(r), "assign") : r += cc11001100_hook("r", e.getCharacterWidth(i), "assign");
          if (r > n) break;
        }

        return [r, s];
      }, "assign");
    }, "assign"), this.destroy = cc11001100_hook("this.destroy", function () {
      this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = cc11001100_hook("this.bgTokenizer", null, "assign")), this.$stopWorker();
    }, "assign"), this.isFullWidth = cc11001100_hook("this.isFullWidth", m, "assign");
  }.call(d.prototype), e("./edit_session/folding").Folding.call(d.prototype), e("./edit_session/bracket_match").BracketMatch.call(d.prototype), o.defineOptions(d.prototype, "session", {
    wrap: {
      set: function (e) {
        !e || e == "off" ? e = cc11001100_hook("e", !1, "assign") : e == "free" ? e = cc11001100_hook("e", !0, "assign") : e == "printMargin" ? e = cc11001100_hook("e", -1, "assign") : typeof e == "string" && (e = cc11001100_hook("e", parseInt(e, 10) || !1, "assign"));
        if (this.$wrap == e) return;
        this.$wrap = cc11001100_hook("this.$wrap", e, "assign");
        if (!e) this.setUseWrapMode(!1);else {
          var t = cc11001100_hook("t", typeof e == "number" ? e : null, "var-init");
          this.setWrapLimitRange(t, t), this.setUseWrapMode(!0);
        }
      },
      get: function () {
        return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
      },
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    },
    wrapMethod: {
      set: function (e) {
        e = cc11001100_hook("e", e == "auto" ? this.$mode.type != "text" : e != "text", "assign"), e != this.$wrapAsCode && (this.$wrapAsCode = cc11001100_hook("this.$wrapAsCode", e, "assign"), this.$useWrapMode && (this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this.$resetRowCache(0), this.$updateWrapData(0, this.getLength() - 1)));
      },
      initialValue: cc11001100_hook("initialValue", "auto", "object-key-init")
    },
    indentedSoftWrap: {
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    firstLineNumber: {
      set: function () {
        this._signal("changeBreakpoint");
      },
      initialValue: cc11001100_hook("initialValue", 1, "object-key-init")
    },
    useWorker: {
      set: function (e) {
        this.$useWorker = cc11001100_hook("this.$useWorker", e, "assign"), this.$stopWorker(), e && this.$startWorker();
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    useSoftTabs: {
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    tabSize: {
      set: function (e) {
        if (isNaN(e) || this.$tabSize === e) return;
        this.$modified = cc11001100_hook("this.$modified", !0, "assign"), this.$rowLengthCache = cc11001100_hook("this.$rowLengthCache", [], "assign"), this.$tabSize = cc11001100_hook("this.$tabSize", e, "assign"), this._signal("changeTabSize");
      },
      initialValue: cc11001100_hook("initialValue", 4, "object-key-init"),
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    },
    navigateWithinSoftTabs: {
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    foldStyle: {
      set: function (e) {
        this.setFoldStyle(e);
      },
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    },
    overwrite: {
      set: function (e) {
        this._signal("changeOverwrite");
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    newLineMode: {
      set: function (e) {
        this.doc.setNewLineMode(e);
      },
      get: function () {
        return this.doc.getNewLineMode();
      },
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    },
    mode: {
      set: function (e) {
        this.setMode(e);
      },
      get: function () {
        return this.$modeId;
      },
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    }
  }), t.EditSession = cc11001100_hook("t.EditSession", d, "assign");
}), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function (e, t, n) {
  "use strict";

  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");

    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      return /\w/.test(e) || t.regExp ? "\\b" : "";
    }

    return n(e[0]) + e + n(e[e.length - 1]);
  }

  var r = cc11001100_hook("r", e("./lib/lang"), "var-init"),
      i = cc11001100_hook("i", e("./lib/oop"), "var-init"),
      s = cc11001100_hook("s", e("./range").Range, "var-init"),
      o = function () {
    this.$options = cc11001100_hook("this.$options", {}, "assign");
  };

  (function () {
    this.set = cc11001100_hook("this.set", function (e) {
      return i.mixin(this.$options, e), this;
    }, "assign"), this.getOptions = cc11001100_hook("this.getOptions", function () {
      return r.copyObject(this.$options);
    }, "assign"), this.setOptions = cc11001100_hook("this.setOptions", function (e) {
      this.$options = cc11001100_hook("this.$options", e, "assign");
    }, "assign"), this.find = cc11001100_hook("this.find", function (e) {
      var t = cc11001100_hook("t", this.$options, "var-init"),
          n = cc11001100_hook("n", this.$matchIterator(e, t), "var-init");
      if (!n) return !1;
      var r = cc11001100_hook("r", null, "var-init");
      return n.forEach(function (e, n, i, o) {
        return r = cc11001100_hook("r", new s(e, n, i, o), "assign"), n == o && t.start && t.start.start && t.skipCurrent != 0 && r.isEqual(t.start) ? (r = cc11001100_hook("r", null, "assign"), !1) : !0;
      }), r;
    }, "assign"), this.findAll = cc11001100_hook("this.findAll", function (e) {
      var t = cc11001100_hook("t", this.$options, "var-init");
      if (!t.needle) return [];
      this.$assembleRegExp(t);
      var n = cc11001100_hook("n", t.range, "var-init"),
          i = cc11001100_hook("i", n ? e.getLines(n.start.row, n.end.row) : e.doc.getAllLines(), "var-init"),
          o = cc11001100_hook("o", [], "var-init"),
          u = cc11001100_hook("u", t.re, "var-init");

      if (t.$isMultiLine) {
        var a = cc11001100_hook("a", u.length, "var-init"),
            f = cc11001100_hook("f", i.length - a, "var-init"),
            l;

        e: for (var c = cc11001100_hook("c", u.offset || 0, "var-init"); c <= f; c++) {
          for (var h = cc11001100_hook("h", 0, "var-init"); h < a; h++) if (i[c + h].search(u[h]) == -1) continue e;

          var p = cc11001100_hook("p", i[c], "var-init"),
              d = cc11001100_hook("d", i[c + a - 1], "var-init"),
              v = cc11001100_hook("v", p.length - p.match(u[0])[0].length, "var-init"),
              m = cc11001100_hook("m", d.match(u[a - 1])[0].length, "var-init");
          if (l && l.end.row === c && l.end.column > v) continue;
          o.push(l = cc11001100_hook("l", new s(c, v, c + a - 1, m), "assign")), a > 2 && (c = cc11001100_hook("c", c + a - 2, "assign"));
        }
      } else for (var g = cc11001100_hook("g", 0, "var-init"); g < i.length; g++) {
        var y = cc11001100_hook("y", r.getMatchOffsets(i[g], u), "var-init");

        for (var h = cc11001100_hook("h", 0, "var-init"); h < y.length; h++) {
          var b = cc11001100_hook("b", y[h], "var-init");
          o.push(new s(g, b.offset, g, b.offset + b.length));
        }
      }

      if (n) {
        var w = cc11001100_hook("w", n.start.column, "var-init"),
            E = cc11001100_hook("E", n.start.column, "var-init"),
            g = cc11001100_hook("g", 0, "var-init"),
            h = cc11001100_hook("h", o.length - 1, "var-init");

        while (g < h && o[g].start.column < w && o[g].start.row == n.start.row) g++;

        while (g < h && o[h].end.column > E && o[h].end.row == n.end.row) h--;

        o = cc11001100_hook("o", o.slice(g, h + 1), "assign");

        for (g = cc11001100_hook("g", 0, "assign"), h = cc11001100_hook("h", o.length, "assign"); g < h; g++) o[g].start.row += cc11001100_hook("o[g].start.row", n.start.row, "assign"), o[g].end.row += cc11001100_hook("o[g].end.row", n.start.row, "assign");
      }

      return o;
    }, "assign"), this.replace = cc11001100_hook("this.replace", function (e, t) {
      var n = cc11001100_hook("n", this.$options, "var-init"),
          r = cc11001100_hook("r", this.$assembleRegExp(n), "var-init");
      if (n.$isMultiLine) return t;
      if (!r) return;
      var i = cc11001100_hook("i", r.exec(e), "var-init");
      if (!i || i[0].length != e.length) return null;
      t = cc11001100_hook("t", e.replace(r, t), "assign");

      if (n.preserveCase) {
        t = cc11001100_hook("t", t.split(""), "assign");

        for (var s = cc11001100_hook("s", Math.min(e.length, e.length), "var-init"); s--;) {
          var o = cc11001100_hook("o", e[s], "var-init");
          o && o.toLowerCase() != o ? t[s] = cc11001100_hook("t[s]", t[s].toUpperCase(), "assign") : t[s] = cc11001100_hook("t[s]", t[s].toLowerCase(), "assign");
        }

        t = cc11001100_hook("t", t.join(""), "assign");
      }

      return t;
    }, "assign"), this.$assembleRegExp = cc11001100_hook("this.$assembleRegExp", function (e, t) {
      if (e.needle instanceof RegExp) return e.re = cc11001100_hook("e.re", e.needle, "assign");
      var n = cc11001100_hook("n", e.needle, "var-init");
      if (!e.needle) return e.re = cc11001100_hook("e.re", !1, "assign");
      e.regExp || (n = cc11001100_hook("n", r.escapeRegExp(n), "assign")), e.wholeWord && (n = cc11001100_hook("n", u(n, e), "assign"));
      var i = cc11001100_hook("i", e.caseSensitive ? "gm" : "gmi", "var-init");
      e.$isMultiLine = cc11001100_hook("e.$isMultiLine", !t && /[\n\r]/.test(n), "assign");
      if (e.$isMultiLine) return e.re = cc11001100_hook("e.re", this.$assembleMultilineRegExp(n, i), "assign");

      try {
        var s = cc11001100_hook("s", new RegExp(n, i), "var-init");
      } catch (o) {
        s = cc11001100_hook("s", !1, "assign");
      }

      return e.re = cc11001100_hook("e.re", s, "assign");
    }, "assign"), this.$assembleMultilineRegExp = cc11001100_hook("this.$assembleMultilineRegExp", function (e, t) {
      var n = cc11001100_hook("n", e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), "var-init"),
          r = cc11001100_hook("r", [], "var-init");

      for (var i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) try {
        r.push(new RegExp(n[i], t));
      } catch (s) {
        return !1;
      }

      return r;
    }, "assign"), this.$matchIterator = cc11001100_hook("this.$matchIterator", function (e, t) {
      var n = cc11001100_hook("n", this.$assembleRegExp(t), "var-init");
      if (!n) return !1;
      var r = cc11001100_hook("r", t.backwards == 1, "var-init"),
          i = cc11001100_hook("i", t.skipCurrent != 0, "var-init"),
          s = cc11001100_hook("s", t.range, "var-init"),
          o = cc11001100_hook("o", t.start, "var-init");
      o || (o = cc11001100_hook("o", s ? s[r ? "end" : "start"] : e.selection.getRange(), "assign")), o.start && (o = cc11001100_hook("o", o[i != r ? "end" : "start"], "assign"));
      var u = cc11001100_hook("u", s ? s.start.row : 0, "var-init"),
          a = cc11001100_hook("a", s ? s.end.row : e.getLength() - 1, "var-init");
      if (r) var f = function (e) {
        var n = cc11001100_hook("n", o.row, "var-init");
        if (c(n, o.column, e)) return;

        for (n--; n >= u; n--) if (c(n, Number.MAX_VALUE, e)) return;

        if (t.wrap == 0) return;

        for (n = cc11001100_hook("n", a, "assign"), u = cc11001100_hook("u", o.row, "assign"); n >= u; n--) if (c(n, Number.MAX_VALUE, e)) return;
      };else var f = function (e) {
        var n = cc11001100_hook("n", o.row, "var-init");
        if (c(n, o.column, e)) return;

        for (n += cc11001100_hook("n", 1, "assign"); n <= a; n++) if (c(n, 0, e)) return;

        if (t.wrap == 0) return;

        for (n = cc11001100_hook("n", u, "assign"), a = cc11001100_hook("a", o.row, "assign"); n <= a; n++) if (c(n, 0, e)) return;
      };
      if (t.$isMultiLine) var l = cc11001100_hook("l", n.length, "var-init"),
          c = function (t, i, s) {
        var o = cc11001100_hook("o", r ? t - l + 1 : t, "var-init");
        if (o < 0) return;
        var u = cc11001100_hook("u", e.getLine(o), "var-init"),
            a = cc11001100_hook("a", u.search(n[0]), "var-init");
        if (!r && a < i || a === -1) return;

        for (var f = cc11001100_hook("f", 1, "var-init"); f < l; f++) {
          u = cc11001100_hook("u", e.getLine(o + f), "assign");
          if (u.search(n[f]) == -1) return;
        }

        var c = cc11001100_hook("c", u.match(n[l - 1])[0].length, "var-init");
        if (r && c > i) return;
        if (s(o, a, o + l - 1, c)) return !0;
      };else if (r) var c = function (t, r, i) {
        var s = cc11001100_hook("s", e.getLine(t), "var-init"),
            o = cc11001100_hook("o", [], "var-init"),
            u,
            a = cc11001100_hook("a", 0, "var-init");
        n.lastIndex = cc11001100_hook("n.lastIndex", 0, "assign");

        while (u = cc11001100_hook("u", n.exec(s), "assign")) {
          var f = cc11001100_hook("f", u[0].length, "var-init");
          a = cc11001100_hook("a", u.index, "assign");

          if (!f) {
            if (a >= s.length) break;
            n.lastIndex = cc11001100_hook("n.lastIndex", a += cc11001100_hook("a", 1, "assign"), "assign");
          }

          if (u.index + f > r) break;
          o.push(u.index, f);
        }

        for (var l = cc11001100_hook("l", o.length - 1, "var-init"); l >= 0; l -= cc11001100_hook("l", 2, "assign")) {
          var c = cc11001100_hook("c", o[l - 1], "var-init"),
              f = cc11001100_hook("f", o[l], "var-init");
          if (i(t, c, t, c + f)) return !0;
        }
      };else var c = function (t, r, i) {
        var s = cc11001100_hook("s", e.getLine(t), "var-init"),
            o,
            u;
        n.lastIndex = cc11001100_hook("n.lastIndex", r, "assign");

        while (u = cc11001100_hook("u", n.exec(s), "assign")) {
          var a = cc11001100_hook("a", u[0].length, "var-init");
          o = cc11001100_hook("o", u.index, "assign");
          if (i(t, o, t, o + a)) return !0;

          if (!a) {
            n.lastIndex = cc11001100_hook("n.lastIndex", o += cc11001100_hook("o", 1, "assign"), "assign");
            if (o >= s.length) return !1;
          }
        }
      };
      return {
        forEach: cc11001100_hook("forEach", f, "object-key-init")
      };
    }, "assign");
  }).call(o.prototype), t.Search = cc11001100_hook("t.Search", o, "assign");
}), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function (e, t, n) {
  "use strict";

  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    this.platform = cc11001100_hook("this.platform", t || (i.isMac ? "mac" : "win"), "assign"), this.commands = cc11001100_hook("this.commands", {}, "assign"), this.commandKeyBinding = cc11001100_hook("this.commandKeyBinding", {}, "assign"), this.addCommands(e), this.$singleCommand = cc11001100_hook("this.$singleCommand", !0, "assign");
  }

  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    o.call(this, e, t), this.$singleCommand = cc11001100_hook("this.$singleCommand", !1, "assign");
  }

  var r = cc11001100_hook("r", e("../lib/keys"), "var-init"),
      i = cc11001100_hook("i", e("../lib/useragent"), "var-init"),
      s = cc11001100_hook("s", r.KEY_MODS, "var-init");
  u.prototype = cc11001100_hook("u.prototype", o.prototype, "assign"), function () {
    function e(e) {
      cc11001100_hook("e", e, "function-parameter");
      return typeof e == "object" && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0);
    }

    this.addCommand = cc11001100_hook("this.addCommand", function (e) {
      this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = cc11001100_hook("this.commands[e.name]", e, "assign"), e.bindKey && this._buildKeyHash(e);
    }, "assign"), this.removeCommand = cc11001100_hook("this.removeCommand", function (e, t) {
      var n = cc11001100_hook("n", e && (typeof e == "string" ? e : e.name), "var-init");
      e = cc11001100_hook("e", this.commands[n], "assign"), t || delete this.commands[n];
      var r = cc11001100_hook("r", this.commandKeyBinding, "var-init");

      for (var i in r) {
        var s = cc11001100_hook("s", r[i], "var-init");
        if (s == e) delete r[i];else if (Array.isArray(s)) {
          var o = cc11001100_hook("o", s.indexOf(e), "var-init");
          o != -1 && (s.splice(o, 1), s.length == 1 && (r[i] = cc11001100_hook("r[i]", s[0], "assign")));
        }
      }
    }, "assign"), this.bindKey = cc11001100_hook("this.bindKey", function (e, t, n) {
      typeof e == "object" && e && (n == undefined && (n = cc11001100_hook("n", e.position, "assign")), e = cc11001100_hook("e", e[this.platform], "assign"));
      if (!e) return;
      if (typeof t == "function") return this.addCommand({
        exec: cc11001100_hook("exec", t, "object-key-init"),
        bindKey: cc11001100_hook("bindKey", e, "object-key-init"),
        name: cc11001100_hook("name", t.name || e, "object-key-init")
      });
      e.split("|").forEach(function (e) {
        var r = cc11001100_hook("r", "", "var-init");

        if (e.indexOf(" ") != -1) {
          var i = cc11001100_hook("i", e.split(/\s+/), "var-init");
          e = cc11001100_hook("e", i.pop(), "assign"), i.forEach(function (e) {
            var t = cc11001100_hook("t", this.parseKeys(e), "var-init"),
                n = cc11001100_hook("n", s[t.hashId] + t.key, "var-init");
            r += cc11001100_hook("r", (r ? " " : "") + n, "assign"), this._addCommandToBinding(r, "chainKeys");
          }, this), r += cc11001100_hook("r", " ", "assign");
        }

        var o = cc11001100_hook("o", this.parseKeys(e), "var-init"),
            u = cc11001100_hook("u", s[o.hashId] + o.key, "var-init");

        this._addCommandToBinding(r + u, t, n);
      }, this);
    }, "assign"), this._addCommandToBinding = cc11001100_hook("this._addCommandToBinding", function (t, n, r) {
      var i = cc11001100_hook("i", this.commandKeyBinding, "var-init"),
          s;
      if (!n) delete i[t];else if (!i[t] || this.$singleCommand) i[t] = cc11001100_hook("i[t]", n, "assign");else {
        Array.isArray(i[t]) ? (s = cc11001100_hook("s", i[t].indexOf(n), "assign")) != -1 && i[t].splice(s, 1) : i[t] = cc11001100_hook("i[t]", [i[t]], "assign"), typeof r != "number" && (r = cc11001100_hook("r", e(n), "assign"));
        var o = cc11001100_hook("o", i[t], "var-init");

        for (s = cc11001100_hook("s", 0, "assign"); s < o.length; s++) {
          var u = cc11001100_hook("u", o[s], "var-init"),
              a = cc11001100_hook("a", e(u), "var-init");
          if (a > r) break;
        }

        o.splice(s, 0, n);
      }
    }, "assign"), this.addCommands = cc11001100_hook("this.addCommands", function (e) {
      e && Object.keys(e).forEach(function (t) {
        var n = cc11001100_hook("n", e[t], "var-init");
        if (!n) return;
        if (typeof n == "string") return this.bindKey(n, t);
        typeof n == "function" && (n = cc11001100_hook("n", {
          exec: cc11001100_hook("exec", n, "object-key-init")
        }, "assign"));
        if (typeof n != "object") return;
        n.name || (n.name = cc11001100_hook("n.name", t, "assign")), this.addCommand(n);
      }, this);
    }, "assign"), this.removeCommands = cc11001100_hook("this.removeCommands", function (e) {
      Object.keys(e).forEach(function (t) {
        this.removeCommand(e[t]);
      }, this);
    }, "assign"), this.bindKeys = cc11001100_hook("this.bindKeys", function (e) {
      Object.keys(e).forEach(function (t) {
        this.bindKey(t, e[t]);
      }, this);
    }, "assign"), this._buildKeyHash = cc11001100_hook("this._buildKeyHash", function (e) {
      this.bindKey(e.bindKey, e);
    }, "assign"), this.parseKeys = cc11001100_hook("this.parseKeys", function (e) {
      var t = cc11001100_hook("t", e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function (e) {
        return e;
      }), "var-init"),
          n = cc11001100_hook("n", t.pop(), "var-init"),
          i = cc11001100_hook("i", r[n], "var-init");
      if (r.FUNCTION_KEYS[i]) n = cc11001100_hook("n", r.FUNCTION_KEYS[i].toLowerCase(), "assign");else {
        if (!t.length) return {
          key: cc11001100_hook("key", n, "object-key-init"),
          hashId: cc11001100_hook("hashId", -1, "object-key-init")
        };
        if (t.length == 1 && t[0] == "shift") return {
          key: cc11001100_hook("key", n.toUpperCase(), "object-key-init"),
          hashId: cc11001100_hook("hashId", -1, "object-key-init")
        };
      }
      var s = cc11001100_hook("s", 0, "var-init");

      for (var o = cc11001100_hook("o", t.length, "var-init"); o--;) {
        var u = cc11001100_hook("u", r.KEY_MODS[t[o]], "var-init");
        if (u == null) return typeof console != "undefined" && console.error("invalid modifier " + t[o] + " in " + e), !1;
        s |= cc11001100_hook("s", u, "assign");
      }

      return {
        key: cc11001100_hook("key", n, "object-key-init"),
        hashId: cc11001100_hook("hashId", s, "object-key-init")
      };
    }, "assign"), this.findKeyCommand = cc11001100_hook("this.findKeyCommand", function (t, n) {
      var r = cc11001100_hook("r", s[t] + n, "var-init");
      return this.commandKeyBinding[r];
    }, "assign"), this.handleKeyboard = cc11001100_hook("this.handleKeyboard", function (e, t, n, r) {
      if (r < 0) return;
      var i = cc11001100_hook("i", s[t] + n, "var-init"),
          o = cc11001100_hook("o", this.commandKeyBinding[i], "var-init");
      e.$keyChain && (e.$keyChain += cc11001100_hook("e.$keyChain", " " + i, "assign"), o = cc11001100_hook("o", this.commandKeyBinding[e.$keyChain] || o, "assign"));
      if (o) if (o == "chainKeys" || o[o.length - 1] == "chainKeys") return e.$keyChain = cc11001100_hook("e.$keyChain", e.$keyChain || i, "assign"), {
        command: cc11001100_hook("command", "null", "object-key-init")
      };
      if (e.$keyChain) if (!!t && t != 4 || n.length != 1) {
        if (t == -1 || r > 0) e.$keyChain = cc11001100_hook("e.$keyChain", "", "assign");
      } else e.$keyChain = cc11001100_hook("e.$keyChain", e.$keyChain.slice(0, -i.length - 1), "assign");
      return {
        command: cc11001100_hook("command", o, "object-key-init")
      };
    }, "assign"), this.getStatusText = cc11001100_hook("this.getStatusText", function (e, t) {
      return t.$keyChain || "";
    }, "assign");
  }.call(o.prototype), t.HashHandler = cc11001100_hook("t.HashHandler", o, "assign"), t.MultiHashHandler = cc11001100_hook("t.MultiHashHandler", u, "assign");
}), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("../keyboard/hash_handler").MultiHashHandler, "var-init"),
      s = cc11001100_hook("s", e("../lib/event_emitter").EventEmitter, "var-init"),
      o = function (e, t) {
    i.call(this, t, e), this.byName = cc11001100_hook("this.byName", this.commands, "assign"), this.setDefaultHandler("exec", function (e) {
      return e.command.exec(e.editor, e.args || {});
    });
  };

  r.inherits(o, i), function () {
    r.implement(this, s), this.exec = cc11001100_hook("this.exec", function (e, t, n) {
      if (Array.isArray(e)) {
        for (var r = cc11001100_hook("r", e.length, "var-init"); r--;) if (this.exec(e[r], t, n)) return !0;

        return !1;
      }

      typeof e == "string" && (e = cc11001100_hook("e", this.commands[e], "assign"));
      if (!e) return !1;
      if (t && t.$readOnly && !e.readOnly) return !1;
      if (e.isAvailable && !e.isAvailable(t)) return !1;
      var i = cc11001100_hook("i", {
        editor: cc11001100_hook("editor", t, "object-key-init"),
        command: cc11001100_hook("command", e, "object-key-init"),
        args: cc11001100_hook("args", n, "object-key-init")
      }, "var-init");
      return i.returnValue = cc11001100_hook("i.returnValue", this._emit("exec", i), "assign"), this._signal("afterExec", i), i.returnValue === !1 ? !1 : !0;
    }, "assign"), this.toggleRecording = cc11001100_hook("this.toggleRecording", function (e) {
      if (this.$inReplay) return;
      return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = cc11001100_hook("this.macro", this.oldMacro, "assign")), this.recording = cc11001100_hook("this.recording", !1, "assign")) : (this.$addCommandToMacro || (this.$addCommandToMacro = cc11001100_hook("this.$addCommandToMacro", function (e) {
        this.macro.push([e.command, e.args]);
      }.bind(this), "assign")), this.oldMacro = cc11001100_hook("this.oldMacro", this.macro, "assign"), this.macro = cc11001100_hook("this.macro", [], "assign"), this.on("exec", this.$addCommandToMacro), this.recording = cc11001100_hook("this.recording", !0, "assign"));
    }, "assign"), this.replay = cc11001100_hook("this.replay", function (e) {
      if (this.$inReplay || !this.macro) return;
      if (this.recording) return this.toggleRecording(e);

      try {
        this.$inReplay = cc11001100_hook("this.$inReplay", !0, "assign"), this.macro.forEach(function (t) {
          typeof t == "string" ? this.exec(t, e) : this.exec(t[0], e, t[1]);
        }, this);
      } finally {
        this.$inReplay = cc11001100_hook("this.$inReplay", !1, "assign");
      }
    }, "assign"), this.trimMacro = cc11001100_hook("this.trimMacro", function (e) {
      return e.map(function (e) {
        return typeof e[0] != "string" && (e[0] = cc11001100_hook("e[0]", e[0].name, "assign")), e[1] || (e = cc11001100_hook("e", e[0], "assign")), e;
      });
    }, "assign");
  }.call(o.prototype), t.CommandManager = cc11001100_hook("t.CommandManager", o, "assign");
}), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function (e, t, n) {
  "use strict";

  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return {
      win: cc11001100_hook("win", e, "object-key-init"),
      mac: cc11001100_hook("mac", t, "object-key-init")
    };
  }

  var r = cc11001100_hook("r", e("../lib/lang"), "var-init"),
      i = cc11001100_hook("i", e("../config"), "var-init"),
      s = cc11001100_hook("s", e("../range").Range, "var-init");
  t.commands = cc11001100_hook("t.commands", [{
    name: cc11001100_hook("name", "showSettingsMenu", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-,", "Command-,"), "object-key-init"),
    exec: function (e) {
      i.loadModule("ace/ext/settings_menu", function (t) {
        t.init(e), e.showSettingsMenu();
      });
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "goToNextError", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-E", "F4"), "object-key-init"),
    exec: function (e) {
      i.loadModule("./ext/error_marker", function (t) {
        t.showErrorMarker(e, 1);
      });
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "goToPreviousError", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-E", "Shift-F4"), "object-key-init"),
    exec: function (e) {
      i.loadModule("./ext/error_marker", function (t) {
        t.showErrorMarker(e, -1);
      });
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectall", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-A", "Command-A"), "object-key-init"),
    exec: function (e) {
      e.selectAll();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "centerselection", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, "Ctrl-L"), "object-key-init"),
    exec: function (e) {
      e.centerSelection();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotoline", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-L", "Command-L"), "object-key-init"),
    exec: function (e, t) {
      typeof t != "number" && (t = cc11001100_hook("t", parseInt(prompt("Enter line number:"), 10), "assign")), isNaN(t) || e.gotoLine(t);
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "fold", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"), "object-key-init"),
    exec: function (e) {
      e.session.toggleFold(!1);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "unfold", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"), "object-key-init"),
    exec: function (e) {
      e.session.toggleFold(!0);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "toggleFoldWidget", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("F2", "F2"), "object-key-init"),
    exec: function (e) {
      e.session.toggleFoldWidget();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "toggleParentFoldWidget", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-F2", "Alt-F2"), "object-key-init"),
    exec: function (e) {
      e.session.toggleFoldWidget(!0);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "foldall", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, "Ctrl-Command-Option-0"), "object-key-init"),
    exec: function (e) {
      e.session.foldAll();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "foldOther", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-0", "Command-Option-0"), "object-key-init"),
    exec: function (e) {
      e.session.foldAll(), e.session.unfold(e.selection.getAllRanges());
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "unfoldall", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-0", "Command-Option-Shift-0"), "object-key-init"),
    exec: function (e) {
      e.session.unfold();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "findnext", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-K", "Command-G"), "object-key-init"),
    exec: function (e) {
      e.findNext();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "findprevious", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-K", "Command-Shift-G"), "object-key-init"),
    exec: function (e) {
      e.findPrevious();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "center", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectOrFindNext", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-K", "Ctrl-G"), "object-key-init"),
    exec: function (e) {
      e.selection.isEmpty() ? e.selection.selectWord() : e.findNext();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectOrFindPrevious", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-K", "Ctrl-Shift-G"), "object-key-init"),
    exec: function (e) {
      e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "find", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-F", "Command-F"), "object-key-init"),
    exec: function (e) {
      i.loadModule("ace/ext/searchbox", function (t) {
        t.Search(e);
      });
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "overwrite", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", "Insert", "object-key-init"),
    exec: function (e) {
      e.toggleOverwrite();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selecttostart", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectFileStart();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    aceCommandGroup: cc11001100_hook("aceCommandGroup", "fileJump", "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotostart", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Home", "Command-Home|Command-Up"), "object-key-init"),
    exec: function (e) {
      e.navigateFileStart();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    aceCommandGroup: cc11001100_hook("aceCommandGroup", "fileJump", "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Shift-Up", "Shift-Up|Ctrl-Shift-P"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectUp();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "golineup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Up", "Up|Ctrl-P"), "object-key-init"),
    exec: function (e, t) {
      e.navigateUp(t.times);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selecttoend", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectFileEnd();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    aceCommandGroup: cc11001100_hook("aceCommandGroup", "fileJump", "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotoend", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-End", "Command-End|Command-Down"), "object-key-init"),
    exec: function (e) {
      e.navigateFileEnd();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    aceCommandGroup: cc11001100_hook("aceCommandGroup", "fileJump", "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectdown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Shift-Down", "Shift-Down|Ctrl-Shift-N"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectDown();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "golinedown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Down", "Down|Ctrl-N"), "object-key-init"),
    exec: function (e, t) {
      e.navigateDown(t.times);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectwordleft", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Left", "Option-Shift-Left"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectWordLeft();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotowordleft", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Left", "Option-Left"), "object-key-init"),
    exec: function (e) {
      e.navigateWordLeft();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selecttolinestart", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectLineStart();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotolinestart", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Left|Home", "Command-Left|Home|Ctrl-A"), "object-key-init"),
    exec: function (e) {
      e.navigateLineStart();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectleft", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Shift-Left", "Shift-Left|Ctrl-Shift-B"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectLeft();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotoleft", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Left", "Left|Ctrl-B"), "object-key-init"),
    exec: function (e, t) {
      e.navigateLeft(t.times);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectwordright", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Right", "Option-Shift-Right"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectWordRight();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotowordright", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Right", "Option-Right"), "object-key-init"),
    exec: function (e) {
      e.navigateWordRight();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selecttolineend", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectLineEnd();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotolineend", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Right|End", "Command-Right|End|Ctrl-E"), "object-key-init"),
    exec: function (e) {
      e.navigateLineEnd();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectright", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Shift-Right", "Shift-Right"), "object-key-init"),
    exec: function (e) {
      e.getSelection().selectRight();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotoright", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Right", "Right|Ctrl-F"), "object-key-init"),
    exec: function (e, t) {
      e.navigateRight(t.times);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectpagedown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", "Shift-PageDown", "object-key-init"),
    exec: function (e) {
      e.selectPageDown();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "pagedown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, "Option-PageDown"), "object-key-init"),
    exec: function (e) {
      e.scrollPageDown();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotopagedown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("PageDown", "PageDown|Ctrl-V"), "object-key-init"),
    exec: function (e) {
      e.gotoPageDown();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectpageup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", "Shift-PageUp", "object-key-init"),
    exec: function (e) {
      e.selectPageUp();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "pageup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, "Option-PageUp"), "object-key-init"),
    exec: function (e) {
      e.scrollPageUp();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "gotopageup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", "PageUp", "object-key-init"),
    exec: function (e) {
      e.gotoPageUp();
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "scrollup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Up", null), "object-key-init"),
    exec: function (e) {
      e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight);
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "scrolldown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Down", null), "object-key-init"),
    exec: function (e) {
      e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight);
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectlinestart", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", "Shift-Home", "object-key-init"),
    exec: function (e) {
      e.getSelection().selectLineStart();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectlineend", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", "Shift-End", "object-key-init"),
    exec: function (e) {
      e.getSelection().selectLineEnd();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "togglerecording", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Alt-E", "Command-Option-E"), "object-key-init"),
    exec: function (e) {
      e.commands.toggleRecording(e);
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "replaymacro", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-E", "Command-Shift-E"), "object-key-init"),
    exec: function (e) {
      e.commands.replay(e);
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "jumptomatching", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-P", "Ctrl-P"), "object-key-init"),
    exec: function (e) {
      e.jumpToMatching();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selecttomatching", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-P", "Ctrl-Shift-P"), "object-key-init"),
    exec: function (e) {
      e.jumpToMatching(!0);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "expandToMatching", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-M", "Ctrl-Shift-M"), "object-key-init"),
    exec: function (e) {
      e.jumpToMatching(!0, !0);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "animate", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "passKeysToBrowser", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, null), "object-key-init"),
    exec: function () {},
    passEvent: cc11001100_hook("passEvent", !0, "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "copy", "object-key-init"),
    exec: function (e) {},
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "cut", "object-key-init"),
    exec: function (e) {
      var t = cc11001100_hook("t", e.$copyWithEmptySelection && e.selection.isEmpty(), "var-init"),
          n = cc11001100_hook("n", t ? e.selection.getLineRange() : e.selection.getRange(), "var-init");
      e._emit("cut", n), n.isEmpty() || e.session.remove(n), e.clearSelection();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init")
  }, {
    name: cc11001100_hook("name", "paste", "object-key-init"),
    exec: function (e, t) {
      e.$handlePaste(t);
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "removeline", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-D", "Command-D"), "object-key-init"),
    exec: function (e) {
      e.removeLines();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEachLine", "object-key-init")
  }, {
    name: cc11001100_hook("name", "duplicateSelection", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-D", "Command-Shift-D"), "object-key-init"),
    exec: function (e) {
      e.duplicateSelection();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init")
  }, {
    name: cc11001100_hook("name", "sortlines", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Alt-S", "Command-Alt-S"), "object-key-init"),
    exec: function (e) {
      e.sortLines();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "selection", "object-key-init"),
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEachLine", "object-key-init")
  }, {
    name: cc11001100_hook("name", "togglecomment", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-/", "Command-/"), "object-key-init"),
    exec: function (e) {
      e.toggleCommentLines();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEachLine", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "selectionPart", "object-key-init")
  }, {
    name: cc11001100_hook("name", "toggleBlockComment", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-/", "Command-Shift-/"), "object-key-init"),
    exec: function (e) {
      e.toggleBlockComment();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "selectionPart", "object-key-init")
  }, {
    name: cc11001100_hook("name", "modifyNumberUp", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Up", "Alt-Shift-Up"), "object-key-init"),
    exec: function (e) {
      e.modifyNumber(1);
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init")
  }, {
    name: cc11001100_hook("name", "modifyNumberDown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Down", "Alt-Shift-Down"), "object-key-init"),
    exec: function (e) {
      e.modifyNumber(-1);
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init")
  }, {
    name: cc11001100_hook("name", "replace", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-H", "Command-Option-F"), "object-key-init"),
    exec: function (e) {
      i.loadModule("ace/ext/searchbox", function (t) {
        t.Search(e, !0);
      });
    }
  }, {
    name: cc11001100_hook("name", "undo", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Z", "Command-Z"), "object-key-init"),
    exec: function (e) {
      e.undo();
    }
  }, {
    name: cc11001100_hook("name", "redo", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"), "object-key-init"),
    exec: function (e) {
      e.redo();
    }
  }, {
    name: cc11001100_hook("name", "copylinesup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-Up", "Command-Option-Up"), "object-key-init"),
    exec: function (e) {
      e.copyLinesUp();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "movelinesup", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Up", "Option-Up"), "object-key-init"),
    exec: function (e) {
      e.moveLinesUp();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "copylinesdown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-Down", "Command-Option-Down"), "object-key-init"),
    exec: function (e) {
      e.copyLinesDown();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "movelinesdown", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Down", "Option-Down"), "object-key-init"),
    exec: function (e) {
      e.moveLinesDown();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "del", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Delete", "Delete|Ctrl-D|Shift-Delete"), "object-key-init"),
    exec: function (e) {
      e.remove("right");
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "backspace", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"), "object-key-init"),
    exec: function (e) {
      e.remove("left");
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "cut_or_delete", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Shift-Delete", null), "object-key-init"),
    exec: function (e) {
      if (!e.selection.isEmpty()) return !1;
      e.remove("left");
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "removetolinestart", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Backspace", "Command-Backspace"), "object-key-init"),
    exec: function (e) {
      e.removeToLineStart();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "removetolineend", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Delete", "Ctrl-K|Command-Delete"), "object-key-init"),
    exec: function (e) {
      e.removeToLineEnd();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "removetolinestarthard", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Backspace", null), "object-key-init"),
    exec: function (e) {
      var t = cc11001100_hook("t", e.selection.getRange(), "var-init");
      t.start.column = cc11001100_hook("t.start.column", 0, "assign"), e.session.remove(t);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "removetolineendhard", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-Delete", null), "object-key-init"),
    exec: function (e) {
      var t = cc11001100_hook("t", e.selection.getRange(), "var-init");
      t.end.column = cc11001100_hook("t.end.column", Number.MAX_VALUE, "assign"), e.session.remove(t);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "removewordleft", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"), "object-key-init"),
    exec: function (e) {
      e.removeWordLeft();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "removewordright", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Delete", "Alt-Delete"), "object-key-init"),
    exec: function (e) {
      e.removeWordRight();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "outdent", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Shift-Tab", "Shift-Tab"), "object-key-init"),
    exec: function (e) {
      e.blockOutdent();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "selectionPart", "object-key-init")
  }, {
    name: cc11001100_hook("name", "indent", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Tab", "Tab"), "object-key-init"),
    exec: function (e) {
      e.indent();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "selectionPart", "object-key-init")
  }, {
    name: cc11001100_hook("name", "blockoutdent", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-[", "Ctrl-["), "object-key-init"),
    exec: function (e) {
      e.blockOutdent();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEachLine", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "selectionPart", "object-key-init")
  }, {
    name: cc11001100_hook("name", "blockindent", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-]", "Ctrl-]"), "object-key-init"),
    exec: function (e) {
      e.blockIndent();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEachLine", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "selectionPart", "object-key-init")
  }, {
    name: cc11001100_hook("name", "insertstring", "object-key-init"),
    exec: function (e, t) {
      e.insert(t);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "inserttext", "object-key-init"),
    exec: function (e, t) {
      e.insert(r.stringRepeat(t.text || "", t.times || 1));
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "splitline", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, "Ctrl-O"), "object-key-init"),
    exec: function (e) {
      e.splitLine();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "transposeletters", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Alt-Shift-X", "Ctrl-T"), "object-key-init"),
    exec: function (e) {
      e.transposeLetters();
    },
    multiSelectAction: function (e) {
      e.transposeSelections(1);
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "touppercase", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-U", "Ctrl-U"), "object-key-init"),
    exec: function (e) {
      e.toUpperCase();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "tolowercase", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-U", "Ctrl-Shift-U"), "object-key-init"),
    exec: function (e) {
      e.toLowerCase();
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "expandtoline", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o("Ctrl-Shift-L", "Command-Shift-L"), "object-key-init"),
    exec: function (e) {
      var t = cc11001100_hook("t", e.selection.getRange(), "var-init");
      t.start.column = cc11001100_hook("t.start.column", t.end.column = cc11001100_hook("t.end.column", 0, "assign"), "assign"), t.end.row++, e.selection.setRange(t, !1);
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "joinlines", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, null), "object-key-init"),
    exec: function (e) {
      var t = cc11001100_hook("t", e.selection.isBackwards(), "var-init"),
          n = cc11001100_hook("n", t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), "var-init"),
          i = cc11001100_hook("i", t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), "var-init"),
          o = cc11001100_hook("o", e.session.doc.getLine(n.row).length, "var-init"),
          u = cc11001100_hook("u", e.session.doc.getTextRange(e.selection.getRange()), "var-init"),
          a = cc11001100_hook("a", u.replace(/\n\s*/, " ").length, "var-init"),
          f = cc11001100_hook("f", e.session.doc.getLine(n.row), "var-init");

      for (var l = cc11001100_hook("l", n.row + 1, "var-init"); l <= i.row + 1; l++) {
        var c = cc11001100_hook("c", r.stringTrimLeft(r.stringTrimRight(e.session.doc.getLine(l))), "var-init");
        c.length !== 0 && (c = cc11001100_hook("c", " " + c, "assign")), f += cc11001100_hook("f", c, "assign");
      }

      i.row + 1 < e.session.doc.getLength() - 1 && (f += cc11001100_hook("f", e.session.doc.getNewLineCharacter(), "assign")), e.clearSelection(), e.session.doc.replace(new s(n.row, 0, i.row + 2, 0), f), a > 0 ? (e.selection.moveCursorTo(n.row, n.column), e.selection.selectTo(n.row, n.column + a)) : (o = cc11001100_hook("o", e.session.doc.getLine(n.row).length > o ? o + 1 : o, "assign"), e.selection.moveCursorTo(n.row, o));
    },
    multiSelectAction: cc11001100_hook("multiSelectAction", "forEach", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "invertSelection", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", o(null, null), "object-key-init"),
    exec: function (e) {
      var t = cc11001100_hook("t", e.session.doc.getLength() - 1, "var-init"),
          n = cc11001100_hook("n", e.session.doc.getLine(t).length, "var-init"),
          r = cc11001100_hook("r", e.selection.rangeList.ranges, "var-init"),
          i = cc11001100_hook("i", [], "var-init");
      r.length < 1 && (r = cc11001100_hook("r", [e.selection.getRange()], "assign"));

      for (var o = cc11001100_hook("o", 0, "var-init"); o < r.length; o++) o == r.length - 1 && (r[o].end.row !== t || r[o].end.column !== n) && i.push(new s(r[o].end.row, r[o].end.column, t, n)), o === 0 ? (r[o].start.row !== 0 || r[o].start.column !== 0) && i.push(new s(0, 0, r[o].start.row, r[o].start.column)) : i.push(new s(r[o - 1].end.row, r[o - 1].end.column, r[o].start.row, r[o].start.column));

      e.exitMultiSelectMode(), e.clearSelection();

      for (var o = cc11001100_hook("o", 0, "var-init"); o < i.length; o++) e.selection.addRange(i[o], !1);
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init"),
    scrollIntoView: cc11001100_hook("scrollIntoView", "none", "object-key-init")
  }], "assign");
}), ace.define("ace/clipboard", ["require", "exports", "module"], function (e, t, n) {
  "use strict";

  n.exports = cc11001100_hook("n.exports", {
    lineMode: cc11001100_hook("lineMode", !1, "object-key-init")
  }, "assign");
}), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/clipboard"], function (e, t, n) {
  "use strict";

  e("./lib/fixoldbrowsers");

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/dom"), "var-init"),
      s = cc11001100_hook("s", e("./lib/lang"), "var-init"),
      o = cc11001100_hook("o", e("./lib/useragent"), "var-init"),
      u = cc11001100_hook("u", e("./keyboard/textinput").TextInput, "var-init"),
      a = cc11001100_hook("a", e("./mouse/mouse_handler").MouseHandler, "var-init"),
      f = cc11001100_hook("f", e("./mouse/fold_handler").FoldHandler, "var-init"),
      l = cc11001100_hook("l", e("./keyboard/keybinding").KeyBinding, "var-init"),
      c = cc11001100_hook("c", e("./edit_session").EditSession, "var-init"),
      h = cc11001100_hook("h", e("./search").Search, "var-init"),
      p = cc11001100_hook("p", e("./range").Range, "var-init"),
      d = cc11001100_hook("d", e("./lib/event_emitter").EventEmitter, "var-init"),
      v = cc11001100_hook("v", e("./commands/command_manager").CommandManager, "var-init"),
      m = cc11001100_hook("m", e("./commands/default_commands").commands, "var-init"),
      g = cc11001100_hook("g", e("./config"), "var-init"),
      y = cc11001100_hook("y", e("./token_iterator").TokenIterator, "var-init"),
      b = cc11001100_hook("b", e("./clipboard"), "var-init"),
      w = function (e, t, n) {
    var r = cc11001100_hook("r", e.getContainerElement(), "var-init");
    this.container = cc11001100_hook("this.container", r, "assign"), this.renderer = cc11001100_hook("this.renderer", e, "assign"), this.id = cc11001100_hook("this.id", "editor" + ++w.$uid, "assign"), this.commands = cc11001100_hook("this.commands", new v(o.isMac ? "mac" : "win", m), "assign"), typeof document == "object" && (this.textInput = cc11001100_hook("this.textInput", new u(e.getTextAreaContainer(), this), "assign"), this.renderer.textarea = cc11001100_hook("this.renderer.textarea", this.textInput.getElement(), "assign"), this.$mouseHandler = cc11001100_hook("this.$mouseHandler", new a(this), "assign"), new f(this)), this.keyBinding = cc11001100_hook("this.keyBinding", new l(this), "assign"), this.$search = cc11001100_hook("this.$search", new h().set({
      wrap: cc11001100_hook("wrap", !0, "object-key-init")
    }), "assign"), this.$historyTracker = cc11001100_hook("this.$historyTracker", this.$historyTracker.bind(this), "assign"), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = cc11001100_hook("this._$emitInputEvent", s.delayedCall(function () {
      this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart();
    }.bind(this)), "assign"), this.on("change", function (e, t) {
      t._$emitInputEvent.schedule(31);
    }), this.setSession(t || n && n.session || new c("")), g.resetOptions(this), n && this.setOptions(n), g._signal("editor", this);
  };

  w.$uid = cc11001100_hook("w.$uid", 0, "assign"), function () {
    r.implement(this, d), this.$initOperationListeners = cc11001100_hook("this.$initOperationListeners", function () {
      this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = cc11001100_hook("this.$opResetTimer", s.delayedCall(this.endOperation.bind(this)), "assign"), this.on("change", function () {
        this.curOp || (this.startOperation(), this.curOp.selectionBefore = cc11001100_hook("this.curOp.selectionBefore", this.$lastSel, "assign")), this.curOp.docChanged = cc11001100_hook("this.curOp.docChanged", !0, "assign");
      }.bind(this), !0), this.on("changeSelection", function () {
        this.curOp || (this.startOperation(), this.curOp.selectionBefore = cc11001100_hook("this.curOp.selectionBefore", this.$lastSel, "assign")), this.curOp.selectionChanged = cc11001100_hook("this.curOp.selectionChanged", !0, "assign");
      }.bind(this), !0);
    }, "assign"), this.curOp = cc11001100_hook("this.curOp", null, "assign"), this.prevOp = cc11001100_hook("this.prevOp", {}, "assign"), this.startOperation = cc11001100_hook("this.startOperation", function (e) {
      if (this.curOp) {
        if (!e || this.curOp.command) return;
        this.prevOp = cc11001100_hook("this.prevOp", this.curOp, "assign");
      }

      e || (this.previousCommand = cc11001100_hook("this.previousCommand", null, "assign"), e = cc11001100_hook("e", {}, "assign")), this.$opResetTimer.schedule(), this.curOp = cc11001100_hook("this.curOp", this.session.curOp = cc11001100_hook("this.session.curOp", {
        command: cc11001100_hook("command", e.command || {}, "object-key-init"),
        args: cc11001100_hook("args", e.args, "object-key-init"),
        scrollTop: cc11001100_hook("scrollTop", this.renderer.scrollTop, "object-key-init")
      }, "assign"), "assign"), this.curOp.selectionBefore = cc11001100_hook("this.curOp.selectionBefore", this.selection.toJSON(), "assign");
    }, "assign"), this.endOperation = cc11001100_hook("this.endOperation", function (e) {
      if (this.curOp) {
        if (e && e.returnValue === !1) return this.curOp = cc11001100_hook("this.curOp", null, "assign");

        this._signal("beforeEndOperation");

        var t = cc11001100_hook("t", this.curOp.command, "var-init"),
            n = cc11001100_hook("n", t && t.scrollIntoView, "var-init");

        if (n) {
          switch (n) {
            case "center-animate":
              n = cc11001100_hook("n", "animate", "assign");

            case "center":
              this.renderer.scrollCursorIntoView(null, .5);
              break;

            case "animate":
            case "cursor":
              this.renderer.scrollCursorIntoView();
              break;

            case "selectionPart":
              var r = cc11001100_hook("r", this.selection.getRange(), "var-init"),
                  i = cc11001100_hook("i", this.renderer.layerConfig, "var-init");
              (r.start.row >= i.lastRow || r.end.row <= i.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
              break;

            default:
          }

          n == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
        }

        var s = cc11001100_hook("s", this.selection.toJSON(), "var-init");
        this.curOp.selectionAfter = cc11001100_hook("this.curOp.selectionAfter", s, "assign"), this.$lastSel = cc11001100_hook("this.$lastSel", this.selection.toJSON(), "assign"), this.session.getUndoManager().addSelection(s), this.prevOp = cc11001100_hook("this.prevOp", this.curOp, "assign"), this.curOp = cc11001100_hook("this.curOp", null, "assign");
      }
    }, "assign"), this.$mergeableCommands = cc11001100_hook("this.$mergeableCommands", ["backspace", "del", "insertstring"], "assign"), this.$historyTracker = cc11001100_hook("this.$historyTracker", function (e) {
      if (!this.$mergeUndoDeltas) return;
      var t = cc11001100_hook("t", this.prevOp, "var-init"),
          n = cc11001100_hook("n", this.$mergeableCommands, "var-init"),
          r = cc11001100_hook("r", t.command && e.command.name == t.command.name, "var-init");

      if (e.command.name == "insertstring") {
        var i = cc11001100_hook("i", e.args, "var-init");
        this.mergeNextCommand === undefined && (this.mergeNextCommand = cc11001100_hook("this.mergeNextCommand", !0, "assign")), r = cc11001100_hook("r", r && this.mergeNextCommand && (!/\s/.test(i) || /\s/.test(t.args)), "assign"), this.mergeNextCommand = cc11001100_hook("this.mergeNextCommand", !0, "assign");
      } else r = cc11001100_hook("r", r && n.indexOf(e.command.name) !== -1, "assign");

      this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (r = cc11001100_hook("r", !1, "assign")), r ? this.session.mergeUndoDeltas = cc11001100_hook("this.session.mergeUndoDeltas", !0, "assign") : n.indexOf(e.command.name) !== -1 && (this.sequenceStartTime = cc11001100_hook("this.sequenceStartTime", Date.now(), "assign"));
    }, "assign"), this.setKeyboardHandler = cc11001100_hook("this.setKeyboardHandler", function (e, t) {
      if (e && typeof e == "string" && e != "ace") {
        this.$keybindingId = cc11001100_hook("this.$keybindingId", e, "assign");
        var n = cc11001100_hook("n", this, "var-init");
        g.loadModule(["keybinding", e], function (r) {
          n.$keybindingId == e && n.keyBinding.setKeyboardHandler(r && r.handler), t && t();
        });
      } else this.$keybindingId = cc11001100_hook("this.$keybindingId", null, "assign"), this.keyBinding.setKeyboardHandler(e), t && t();
    }, "assign"), this.getKeyboardHandler = cc11001100_hook("this.getKeyboardHandler", function () {
      return this.keyBinding.getKeyboardHandler();
    }, "assign"), this.setSession = cc11001100_hook("this.setSession", function (e) {
      if (this.session == e) return;
      this.curOp && this.endOperation(), this.curOp = cc11001100_hook("this.curOp", {}, "assign");
      var t = cc11001100_hook("t", this.session, "var-init");

      if (t) {
        this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
        var n = cc11001100_hook("n", this.session.getSelection(), "var-init");
        n.off("changeCursor", this.$onCursorChange), n.off("changeSelection", this.$onSelectionChange);
      }

      this.session = cc11001100_hook("this.session", e, "assign"), e ? (this.$onDocumentChange = cc11001100_hook("this.$onDocumentChange", this.onDocumentChange.bind(this), "assign"), e.on("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = cc11001100_hook("this.$onChangeMode", this.onChangeMode.bind(this), "assign"), e.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = cc11001100_hook("this.$onTokenizerUpdate", this.onTokenizerUpdate.bind(this), "assign"), e.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = cc11001100_hook("this.$onChangeTabSize", this.renderer.onChangeTabSize.bind(this.renderer), "assign"), e.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = cc11001100_hook("this.$onChangeWrapLimit", this.onChangeWrapLimit.bind(this), "assign"), e.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = cc11001100_hook("this.$onChangeWrapMode", this.onChangeWrapMode.bind(this), "assign"), e.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = cc11001100_hook("this.$onChangeFold", this.onChangeFold.bind(this), "assign"), e.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = cc11001100_hook("this.$onChangeFrontMarker", this.onChangeFrontMarker.bind(this), "assign"), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = cc11001100_hook("this.$onChangeBackMarker", this.onChangeBackMarker.bind(this), "assign"), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = cc11001100_hook("this.$onChangeBreakpoint", this.onChangeBreakpoint.bind(this), "assign"), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = cc11001100_hook("this.$onChangeAnnotation", this.onChangeAnnotation.bind(this), "assign"), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = cc11001100_hook("this.$onCursorChange", this.onCursorChange.bind(this), "assign"), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = cc11001100_hook("this.$onScrollTopChange", this.onScrollTopChange.bind(this), "assign"), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = cc11001100_hook("this.$onScrollLeftChange", this.onScrollLeftChange.bind(this), "assign"), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = cc11001100_hook("this.selection", e.getSelection(), "assign"), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = cc11001100_hook("this.$onSelectionChange", this.onSelectionChange.bind(this), "assign"), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = cc11001100_hook("this.selection", null, "assign"), this.renderer.setSession(e)), this._signal("changeSession", {
        session: cc11001100_hook("session", e, "object-key-init"),
        oldSession: cc11001100_hook("oldSession", t, "object-key-init")
      }), this.curOp = cc11001100_hook("this.curOp", null, "assign"), t && t._signal("changeEditor", {
        oldEditor: cc11001100_hook("oldEditor", this, "object-key-init")
      }), e && e._signal("changeEditor", {
        editor: cc11001100_hook("editor", this, "object-key-init")
      }), e && e.bgTokenizer && e.bgTokenizer.scheduleStart();
    }, "assign"), this.getSession = cc11001100_hook("this.getSession", function () {
      return this.session;
    }, "assign"), this.setValue = cc11001100_hook("this.setValue", function (e, t) {
      return this.session.doc.setValue(e), t ? t == 1 ? this.navigateFileEnd() : t == -1 && this.navigateFileStart() : this.selectAll(), e;
    }, "assign"), this.getValue = cc11001100_hook("this.getValue", function () {
      return this.session.getValue();
    }, "assign"), this.getSelection = cc11001100_hook("this.getSelection", function () {
      return this.selection;
    }, "assign"), this.resize = cc11001100_hook("this.resize", function (e) {
      this.renderer.onResize(e);
    }, "assign"), this.setTheme = cc11001100_hook("this.setTheme", function (e, t) {
      this.renderer.setTheme(e, t);
    }, "assign"), this.getTheme = cc11001100_hook("this.getTheme", function () {
      return this.renderer.getTheme();
    }, "assign"), this.setStyle = cc11001100_hook("this.setStyle", function (e) {
      this.renderer.setStyle(e);
    }, "assign"), this.unsetStyle = cc11001100_hook("this.unsetStyle", function (e) {
      this.renderer.unsetStyle(e);
    }, "assign"), this.getFontSize = cc11001100_hook("this.getFontSize", function () {
      return this.getOption("fontSize") || i.computedStyle(this.container).fontSize;
    }, "assign"), this.setFontSize = cc11001100_hook("this.setFontSize", function (e) {
      this.setOption("fontSize", e);
    }, "assign"), this.$highlightBrackets = cc11001100_hook("this.$highlightBrackets", function () {
      this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = cc11001100_hook("this.session.$bracketHighlight", null, "assign"));
      if (this.$highlightPending) return;
      var e = cc11001100_hook("e", this, "var-init");
      this.$highlightPending = cc11001100_hook("this.$highlightPending", !0, "assign"), setTimeout(function () {
        e.$highlightPending = cc11001100_hook("e.$highlightPending", !1, "assign");
        var t = cc11001100_hook("t", e.session, "var-init");
        if (!t || !t.bgTokenizer) return;
        var n = cc11001100_hook("n", t.findMatchingBracket(e.getCursorPosition()), "var-init");
        if (n) var r = cc11001100_hook("r", new p(n.row, n.column, n.row, n.column + 1), "var-init");else if (t.$mode.getMatching) var r = cc11001100_hook("r", t.$mode.getMatching(e.session), "var-init");
        r && (t.$bracketHighlight = cc11001100_hook("t.$bracketHighlight", t.addMarker(r, "ace_bracket", "text"), "assign"));
      }, 50);
    }, "assign"), this.$highlightTags = cc11001100_hook("this.$highlightTags", function () {
      if (this.$highlightTagPending) return;
      var e = cc11001100_hook("e", this, "var-init");
      this.$highlightTagPending = cc11001100_hook("this.$highlightTagPending", !0, "assign"), setTimeout(function () {
        e.$highlightTagPending = cc11001100_hook("e.$highlightTagPending", !1, "assign");
        var t = cc11001100_hook("t", e.session, "var-init");
        if (!t || !t.bgTokenizer) return;
        var n = cc11001100_hook("n", e.getCursorPosition(), "var-init"),
            r = cc11001100_hook("r", new y(e.session, n.row, n.column), "var-init"),
            i = cc11001100_hook("i", r.getCurrentToken(), "var-init");

        if (!i || !/\b(?:tag-open|tag-name)/.test(i.type)) {
          t.removeMarker(t.$tagHighlight), t.$tagHighlight = cc11001100_hook("t.$tagHighlight", null, "assign");
          return;
        }

        if (i.type.indexOf("tag-open") != -1) {
          i = cc11001100_hook("i", r.stepForward(), "assign");
          if (!i) return;
        }

        var s = cc11001100_hook("s", i.value, "var-init"),
            o = cc11001100_hook("o", 0, "var-init"),
            u = cc11001100_hook("u", r.stepBackward(), "var-init");

        if (u.value == "<") {
          do u = cc11001100_hook("u", i, "assign"), i = cc11001100_hook("i", r.stepForward(), "assign"), i && i.value === s && i.type.indexOf("tag-name") !== -1 && (u.value === "<" ? o++ : u.value === "</" && o--); while (i && o >= 0);
        } else {
          do i = cc11001100_hook("i", u, "assign"), u = cc11001100_hook("u", r.stepBackward(), "assign"), i && i.value === s && i.type.indexOf("tag-name") !== -1 && (u.value === "<" ? o++ : u.value === "</" && o--); while (u && o <= 0);

          r.stepForward();
        }

        if (!i) {
          t.removeMarker(t.$tagHighlight), t.$tagHighlight = cc11001100_hook("t.$tagHighlight", null, "assign");
          return;
        }

        var a = cc11001100_hook("a", r.getCurrentTokenRow(), "var-init"),
            f = cc11001100_hook("f", r.getCurrentTokenColumn(), "var-init"),
            l = cc11001100_hook("l", new p(a, f, a, f + i.value.length), "var-init"),
            c = cc11001100_hook("c", t.$backMarkers[t.$tagHighlight], "var-init");
        t.$tagHighlight && c != undefined && l.compareRange(c.range) !== 0 && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = cc11001100_hook("t.$tagHighlight", null, "assign")), t.$tagHighlight || (t.$tagHighlight = cc11001100_hook("t.$tagHighlight", t.addMarker(l, "ace_bracket", "text"), "assign"));
      }, 50);
    }, "assign"), this.focus = cc11001100_hook("this.focus", function () {
      var e = cc11001100_hook("e", this, "var-init");
      setTimeout(function () {
        e.isFocused() || e.textInput.focus();
      }), this.textInput.focus();
    }, "assign"), this.isFocused = cc11001100_hook("this.isFocused", function () {
      return this.textInput.isFocused();
    }, "assign"), this.blur = cc11001100_hook("this.blur", function () {
      this.textInput.blur();
    }, "assign"), this.onFocus = cc11001100_hook("this.onFocus", function (e) {
      if (this.$isFocused) return;
      this.$isFocused = cc11001100_hook("this.$isFocused", !0, "assign"), this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e);
    }, "assign"), this.onBlur = cc11001100_hook("this.onBlur", function (e) {
      if (!this.$isFocused) return;
      this.$isFocused = cc11001100_hook("this.$isFocused", !1, "assign"), this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e);
    }, "assign"), this.$cursorChange = cc11001100_hook("this.$cursorChange", function () {
      this.renderer.updateCursor();
    }, "assign"), this.onDocumentChange = cc11001100_hook("this.onDocumentChange", function (e) {
      var t = cc11001100_hook("t", this.session.$useWrapMode, "var-init"),
          n = cc11001100_hook("n", e.start.row == e.end.row ? e.end.row : Infinity, "var-init");
      this.renderer.updateLines(e.start.row, n, t), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine();
    }, "assign"), this.onTokenizerUpdate = cc11001100_hook("this.onTokenizerUpdate", function (e) {
      var t = cc11001100_hook("t", e.data, "var-init");
      this.renderer.updateLines(t.first, t.last);
    }, "assign"), this.onScrollTopChange = cc11001100_hook("this.onScrollTopChange", function () {
      this.renderer.scrollToY(this.session.getScrollTop());
    }, "assign"), this.onScrollLeftChange = cc11001100_hook("this.onScrollLeftChange", function () {
      this.renderer.scrollToX(this.session.getScrollLeft());
    }, "assign"), this.onCursorChange = cc11001100_hook("this.onCursorChange", function () {
      this.$cursorChange(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection");
    }, "assign"), this.$updateHighlightActiveLine = cc11001100_hook("this.$updateHighlightActiveLine", function () {
      var e = cc11001100_hook("e", this.getSession(), "var-init"),
          t;

      if (this.$highlightActiveLine) {
        if (this.$selectionStyle != "line" || !this.selection.isMultiLine()) t = cc11001100_hook("t", this.getCursorPosition(), "assign");
        this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (t = cc11001100_hook("t", !1, "assign")), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (t = cc11001100_hook("t", !1, "assign"));
      }

      if (e.$highlightLineMarker && !t) e.removeMarker(e.$highlightLineMarker.id), e.$highlightLineMarker = cc11001100_hook("e.$highlightLineMarker", null, "assign");else if (!e.$highlightLineMarker && t) {
        var n = cc11001100_hook("n", new p(t.row, t.column, t.row, Infinity), "var-init");
        n.id = cc11001100_hook("n.id", e.addMarker(n, "ace_active-line", "screenLine"), "assign"), e.$highlightLineMarker = cc11001100_hook("e.$highlightLineMarker", n, "assign");
      } else t && (e.$highlightLineMarker.start.row = cc11001100_hook("e.$highlightLineMarker.start.row", t.row, "assign"), e.$highlightLineMarker.end.row = cc11001100_hook("e.$highlightLineMarker.end.row", t.row, "assign"), e.$highlightLineMarker.start.column = cc11001100_hook("e.$highlightLineMarker.start.column", t.column, "assign"), e._signal("changeBackMarker"));
    }, "assign"), this.onSelectionChange = cc11001100_hook("this.onSelectionChange", function (e) {
      var t = cc11001100_hook("t", this.session, "var-init");
      t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = cc11001100_hook("t.$selectionMarker", null, "assign");

      if (!this.selection.isEmpty()) {
        var n = cc11001100_hook("n", this.selection.getRange(), "var-init"),
            r = cc11001100_hook("r", this.getSelectionStyle(), "var-init");
        t.$selectionMarker = cc11001100_hook("t.$selectionMarker", t.addMarker(n, "ace_selection", r), "assign");
      } else this.$updateHighlightActiveLine();

      var i = cc11001100_hook("i", this.$highlightSelectedWord && this.$getSelectionHighLightRegexp(), "var-init");
      this.session.highlight(i), this._signal("changeSelection");
    }, "assign"), this.$getSelectionHighLightRegexp = cc11001100_hook("this.$getSelectionHighLightRegexp", function () {
      var e = cc11001100_hook("e", this.session, "var-init"),
          t = cc11001100_hook("t", this.getSelectionRange(), "var-init");
      if (t.isEmpty() || t.isMultiLine()) return;
      var n = cc11001100_hook("n", t.start.column, "var-init"),
          r = cc11001100_hook("r", t.end.column, "var-init"),
          i = cc11001100_hook("i", e.getLine(t.start.row), "var-init"),
          s = cc11001100_hook("s", i.substring(n, r), "var-init");
      if (s.length > 5e3 || !/[\w\d]/.test(s)) return;
      var o = cc11001100_hook("o", this.$search.$assembleRegExp({
        wholeWord: cc11001100_hook("wholeWord", !0, "object-key-init"),
        caseSensitive: cc11001100_hook("caseSensitive", !0, "object-key-init"),
        needle: cc11001100_hook("needle", s, "object-key-init")
      }), "var-init"),
          u = cc11001100_hook("u", i.substring(n - 1, r + 1), "var-init");
      if (!o.test(u)) return;
      return o;
    }, "assign"), this.onChangeFrontMarker = cc11001100_hook("this.onChangeFrontMarker", function () {
      this.renderer.updateFrontMarkers();
    }, "assign"), this.onChangeBackMarker = cc11001100_hook("this.onChangeBackMarker", function () {
      this.renderer.updateBackMarkers();
    }, "assign"), this.onChangeBreakpoint = cc11001100_hook("this.onChangeBreakpoint", function () {
      this.renderer.updateBreakpoints();
    }, "assign"), this.onChangeAnnotation = cc11001100_hook("this.onChangeAnnotation", function () {
      this.renderer.setAnnotations(this.session.getAnnotations());
    }, "assign"), this.onChangeMode = cc11001100_hook("this.onChangeMode", function (e) {
      this.renderer.updateText(), this._emit("changeMode", e);
    }, "assign"), this.onChangeWrapLimit = cc11001100_hook("this.onChangeWrapLimit", function () {
      this.renderer.updateFull();
    }, "assign"), this.onChangeWrapMode = cc11001100_hook("this.onChangeWrapMode", function () {
      this.renderer.onResize(!0);
    }, "assign"), this.onChangeFold = cc11001100_hook("this.onChangeFold", function () {
      this.$updateHighlightActiveLine(), this.renderer.updateFull();
    }, "assign"), this.getSelectedText = cc11001100_hook("this.getSelectedText", function () {
      return this.session.getTextRange(this.getSelectionRange());
    }, "assign"), this.getCopyText = cc11001100_hook("this.getCopyText", function () {
      var e = cc11001100_hook("e", this.getSelectedText(), "var-init"),
          t = cc11001100_hook("t", this.session.doc.getNewLineCharacter(), "var-init"),
          n = cc11001100_hook("n", !1, "var-init");

      if (!e && this.$copyWithEmptySelection) {
        n = cc11001100_hook("n", !0, "assign");
        var r = cc11001100_hook("r", this.selection.getAllRanges(), "var-init");

        for (var i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
          var s = cc11001100_hook("s", r[i], "var-init");
          if (i && r[i - 1].start.row == s.start.row) continue;
          e += cc11001100_hook("e", this.session.getLine(s.start.row) + t, "assign");
        }
      }

      var o = cc11001100_hook("o", {
        text: cc11001100_hook("text", e, "object-key-init")
      }, "var-init");
      return this._signal("copy", o), b.lineMode = cc11001100_hook("b.lineMode", n ? o.text : "", "assign"), o.text;
    }, "assign"), this.onCopy = cc11001100_hook("this.onCopy", function () {
      this.commands.exec("copy", this);
    }, "assign"), this.onCut = cc11001100_hook("this.onCut", function () {
      this.commands.exec("cut", this);
    }, "assign"), this.onPaste = cc11001100_hook("this.onPaste", function (e, t) {
      var n = cc11001100_hook("n", {
        text: cc11001100_hook("text", e, "object-key-init"),
        event: cc11001100_hook("event", t, "object-key-init")
      }, "var-init");
      this.commands.exec("paste", this, n);
    }, "assign"), this.$handlePaste = cc11001100_hook("this.$handlePaste", function (e) {
      typeof e == "string" && (e = cc11001100_hook("e", {
        text: cc11001100_hook("text", e, "object-key-init")
      }, "assign")), this._signal("paste", e);
      var t = cc11001100_hook("t", e.text, "var-init"),
          n = cc11001100_hook("n", t == b.lineMode, "var-init"),
          r = cc11001100_hook("r", this.session, "var-init");
      if (!this.inMultiSelectMode || this.inVirtualSelectionMode) n ? r.insert({
        row: cc11001100_hook("row", this.selection.lead.row, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, t) : this.insert(t);else if (n) this.selection.rangeList.ranges.forEach(function (e) {
        r.insert({
          row: cc11001100_hook("row", e.start.row, "object-key-init"),
          column: cc11001100_hook("column", 0, "object-key-init")
        }, t);
      });else {
        var i = cc11001100_hook("i", t.split(/\r\n|\r|\n/), "var-init"),
            s = cc11001100_hook("s", this.selection.rangeList.ranges, "var-init");
        if (i.length > s.length || i.length < 2 || !i[1]) return this.commands.exec("insertstring", this, t);

        for (var o = cc11001100_hook("o", s.length, "var-init"); o--;) {
          var u = cc11001100_hook("u", s[o], "var-init");
          u.isEmpty() || r.remove(u), r.insert(u.start, i[o]);
        }
      }
    }, "assign"), this.execCommand = cc11001100_hook("this.execCommand", function (e, t) {
      return this.commands.exec(e, this, t);
    }, "assign"), this.insert = cc11001100_hook("this.insert", function (e, t) {
      var n = cc11001100_hook("n", this.session, "var-init"),
          r = cc11001100_hook("r", n.getMode(), "var-init"),
          i = cc11001100_hook("i", this.getCursorPosition(), "var-init");

      if (this.getBehavioursEnabled() && !t) {
        var s = cc11001100_hook("s", r.transformAction(n.getState(i.row), "insertion", this, n, e), "var-init");
        s && (e !== s.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = cc11001100_hook("this.session.mergeUndoDeltas", !1, "assign"), this.mergeNextCommand = cc11001100_hook("this.mergeNextCommand", !1, "assign"))), e = cc11001100_hook("e", s.text, "assign"));
      }

      e == "	" && (e = cc11001100_hook("e", this.session.getTabString(), "assign"));

      if (!this.selection.isEmpty()) {
        var o = cc11001100_hook("o", this.getSelectionRange(), "var-init");
        i = cc11001100_hook("i", this.session.remove(o), "assign"), this.clearSelection();
      } else if (this.session.getOverwrite() && e.indexOf("\n") == -1) {
        var o = cc11001100_hook("o", new p.fromPoints(i, i), "var-init");
        o.end.column += cc11001100_hook("o.end.column", e.length, "assign"), this.session.remove(o);
      }

      if (e == "\n" || e == "\r\n") {
        var u = cc11001100_hook("u", n.getLine(i.row), "var-init");

        if (i.column > u.search(/\S|$/)) {
          var a = cc11001100_hook("a", u.substr(i.column).search(/\S|$/), "var-init");
          n.doc.removeInLine(i.row, i.column, i.column + a);
        }
      }

      this.clearSelection();
      var f = cc11001100_hook("f", i.column, "var-init"),
          l = cc11001100_hook("l", n.getState(i.row), "var-init"),
          u = cc11001100_hook("u", n.getLine(i.row), "var-init"),
          c = cc11001100_hook("c", r.checkOutdent(l, u, e), "var-init"),
          h = cc11001100_hook("h", n.insert(i, e), "var-init");
      s && s.selection && (s.selection.length == 2 ? this.selection.setSelectionRange(new p(i.row, f + s.selection[0], i.row, f + s.selection[1])) : this.selection.setSelectionRange(new p(i.row + s.selection[0], s.selection[1], i.row + s.selection[2], s.selection[3])));

      if (n.getDocument().isNewLine(e)) {
        var d = cc11001100_hook("d", r.getNextLineIndent(l, u.slice(0, i.column), n.getTabString()), "var-init");
        n.insert({
          row: cc11001100_hook("row", i.row + 1, "object-key-init"),
          column: cc11001100_hook("column", 0, "object-key-init")
        }, d);
      }

      c && r.autoOutdent(l, n, i.row);
    }, "assign"), this.onTextInput = cc11001100_hook("this.onTextInput", function (e) {
      this.keyBinding.onTextInput(e);
    }, "assign"), this.onCommandKey = cc11001100_hook("this.onCommandKey", function (e, t, n) {
      this.keyBinding.onCommandKey(e, t, n);
    }, "assign"), this.setOverwrite = cc11001100_hook("this.setOverwrite", function (e) {
      this.session.setOverwrite(e);
    }, "assign"), this.getOverwrite = cc11001100_hook("this.getOverwrite", function () {
      return this.session.getOverwrite();
    }, "assign"), this.toggleOverwrite = cc11001100_hook("this.toggleOverwrite", function () {
      this.session.toggleOverwrite();
    }, "assign"), this.setScrollSpeed = cc11001100_hook("this.setScrollSpeed", function (e) {
      this.setOption("scrollSpeed", e);
    }, "assign"), this.getScrollSpeed = cc11001100_hook("this.getScrollSpeed", function () {
      return this.getOption("scrollSpeed");
    }, "assign"), this.setDragDelay = cc11001100_hook("this.setDragDelay", function (e) {
      this.setOption("dragDelay", e);
    }, "assign"), this.getDragDelay = cc11001100_hook("this.getDragDelay", function () {
      return this.getOption("dragDelay");
    }, "assign"), this.setSelectionStyle = cc11001100_hook("this.setSelectionStyle", function (e) {
      this.setOption("selectionStyle", e);
    }, "assign"), this.getSelectionStyle = cc11001100_hook("this.getSelectionStyle", function () {
      return this.getOption("selectionStyle");
    }, "assign"), this.setHighlightActiveLine = cc11001100_hook("this.setHighlightActiveLine", function (e) {
      this.setOption("highlightActiveLine", e);
    }, "assign"), this.getHighlightActiveLine = cc11001100_hook("this.getHighlightActiveLine", function () {
      return this.getOption("highlightActiveLine");
    }, "assign"), this.setHighlightGutterLine = cc11001100_hook("this.setHighlightGutterLine", function (e) {
      this.setOption("highlightGutterLine", e);
    }, "assign"), this.getHighlightGutterLine = cc11001100_hook("this.getHighlightGutterLine", function () {
      return this.getOption("highlightGutterLine");
    }, "assign"), this.setHighlightSelectedWord = cc11001100_hook("this.setHighlightSelectedWord", function (e) {
      this.setOption("highlightSelectedWord", e);
    }, "assign"), this.getHighlightSelectedWord = cc11001100_hook("this.getHighlightSelectedWord", function () {
      return this.$highlightSelectedWord;
    }, "assign"), this.setAnimatedScroll = cc11001100_hook("this.setAnimatedScroll", function (e) {
      this.renderer.setAnimatedScroll(e);
    }, "assign"), this.getAnimatedScroll = cc11001100_hook("this.getAnimatedScroll", function () {
      return this.renderer.getAnimatedScroll();
    }, "assign"), this.setShowInvisibles = cc11001100_hook("this.setShowInvisibles", function (e) {
      this.renderer.setShowInvisibles(e);
    }, "assign"), this.getShowInvisibles = cc11001100_hook("this.getShowInvisibles", function () {
      return this.renderer.getShowInvisibles();
    }, "assign"), this.setDisplayIndentGuides = cc11001100_hook("this.setDisplayIndentGuides", function (e) {
      this.renderer.setDisplayIndentGuides(e);
    }, "assign"), this.getDisplayIndentGuides = cc11001100_hook("this.getDisplayIndentGuides", function () {
      return this.renderer.getDisplayIndentGuides();
    }, "assign"), this.setShowPrintMargin = cc11001100_hook("this.setShowPrintMargin", function (e) {
      this.renderer.setShowPrintMargin(e);
    }, "assign"), this.getShowPrintMargin = cc11001100_hook("this.getShowPrintMargin", function () {
      return this.renderer.getShowPrintMargin();
    }, "assign"), this.setPrintMarginColumn = cc11001100_hook("this.setPrintMarginColumn", function (e) {
      this.renderer.setPrintMarginColumn(e);
    }, "assign"), this.getPrintMarginColumn = cc11001100_hook("this.getPrintMarginColumn", function () {
      return this.renderer.getPrintMarginColumn();
    }, "assign"), this.setReadOnly = cc11001100_hook("this.setReadOnly", function (e) {
      this.setOption("readOnly", e);
    }, "assign"), this.getReadOnly = cc11001100_hook("this.getReadOnly", function () {
      return this.getOption("readOnly");
    }, "assign"), this.setBehavioursEnabled = cc11001100_hook("this.setBehavioursEnabled", function (e) {
      this.setOption("behavioursEnabled", e);
    }, "assign"), this.getBehavioursEnabled = cc11001100_hook("this.getBehavioursEnabled", function () {
      return this.getOption("behavioursEnabled");
    }, "assign"), this.setWrapBehavioursEnabled = cc11001100_hook("this.setWrapBehavioursEnabled", function (e) {
      this.setOption("wrapBehavioursEnabled", e);
    }, "assign"), this.getWrapBehavioursEnabled = cc11001100_hook("this.getWrapBehavioursEnabled", function () {
      return this.getOption("wrapBehavioursEnabled");
    }, "assign"), this.setShowFoldWidgets = cc11001100_hook("this.setShowFoldWidgets", function (e) {
      this.setOption("showFoldWidgets", e);
    }, "assign"), this.getShowFoldWidgets = cc11001100_hook("this.getShowFoldWidgets", function () {
      return this.getOption("showFoldWidgets");
    }, "assign"), this.setFadeFoldWidgets = cc11001100_hook("this.setFadeFoldWidgets", function (e) {
      this.setOption("fadeFoldWidgets", e);
    }, "assign"), this.getFadeFoldWidgets = cc11001100_hook("this.getFadeFoldWidgets", function () {
      return this.getOption("fadeFoldWidgets");
    }, "assign"), this.remove = cc11001100_hook("this.remove", function (e) {
      this.selection.isEmpty() && (e == "left" ? this.selection.selectLeft() : this.selection.selectRight());
      var t = cc11001100_hook("t", this.getSelectionRange(), "var-init");

      if (this.getBehavioursEnabled()) {
        var n = cc11001100_hook("n", this.session, "var-init"),
            r = cc11001100_hook("r", n.getState(t.start.row), "var-init"),
            i = cc11001100_hook("i", n.getMode().transformAction(r, "deletion", this, n, t), "var-init");

        if (t.end.column === 0) {
          var s = cc11001100_hook("s", n.getTextRange(t), "var-init");

          if (s[s.length - 1] == "\n") {
            var o = cc11001100_hook("o", n.getLine(t.end.row), "var-init");
            /^\s+$/.test(o) && (t.end.column = cc11001100_hook("t.end.column", o.length, "assign"));
          }
        }

        i && (t = cc11001100_hook("t", i, "assign"));
      }

      this.session.remove(t), this.clearSelection();
    }, "assign"), this.removeWordRight = cc11001100_hook("this.removeWordRight", function () {
      this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
    }, "assign"), this.removeWordLeft = cc11001100_hook("this.removeWordLeft", function () {
      this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
    }, "assign"), this.removeToLineStart = cc11001100_hook("this.removeToLineStart", function () {
      this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()), this.clearSelection();
    }, "assign"), this.removeToLineEnd = cc11001100_hook("this.removeToLineEnd", function () {
      this.selection.isEmpty() && this.selection.selectLineEnd();
      var e = cc11001100_hook("e", this.getSelectionRange(), "var-init");
      e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = cc11001100_hook("e.end.column", 0, "assign"), e.end.row++), this.session.remove(e), this.clearSelection();
    }, "assign"), this.splitLine = cc11001100_hook("this.splitLine", function () {
      this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
      var e = cc11001100_hook("e", this.getCursorPosition(), "var-init");
      this.insert("\n"), this.moveCursorToPosition(e);
    }, "assign"), this.transposeLetters = cc11001100_hook("this.transposeLetters", function () {
      if (!this.selection.isEmpty()) return;
      var e = cc11001100_hook("e", this.getCursorPosition(), "var-init"),
          t = cc11001100_hook("t", e.column, "var-init");
      if (t === 0) return;
      var n = cc11001100_hook("n", this.session.getLine(e.row), "var-init"),
          r,
          i;
      t < n.length ? (r = cc11001100_hook("r", n.charAt(t) + n.charAt(t - 1), "assign"), i = cc11001100_hook("i", new p(e.row, t - 1, e.row, t + 1), "assign")) : (r = cc11001100_hook("r", n.charAt(t - 1) + n.charAt(t - 2), "assign"), i = cc11001100_hook("i", new p(e.row, t - 2, e.row, t), "assign")), this.session.replace(i, r), this.session.selection.moveToPosition(i.end);
    }, "assign"), this.toLowerCase = cc11001100_hook("this.toLowerCase", function () {
      var e = cc11001100_hook("e", this.getSelectionRange(), "var-init");
      this.selection.isEmpty() && this.selection.selectWord();
      var t = cc11001100_hook("t", this.getSelectionRange(), "var-init"),
          n = cc11001100_hook("n", this.session.getTextRange(t), "var-init");
      this.session.replace(t, n.toLowerCase()), this.selection.setSelectionRange(e);
    }, "assign"), this.toUpperCase = cc11001100_hook("this.toUpperCase", function () {
      var e = cc11001100_hook("e", this.getSelectionRange(), "var-init");
      this.selection.isEmpty() && this.selection.selectWord();
      var t = cc11001100_hook("t", this.getSelectionRange(), "var-init"),
          n = cc11001100_hook("n", this.session.getTextRange(t), "var-init");
      this.session.replace(t, n.toUpperCase()), this.selection.setSelectionRange(e);
    }, "assign"), this.indent = cc11001100_hook("this.indent", function () {
      var e = cc11001100_hook("e", this.session, "var-init"),
          t = cc11001100_hook("t", this.getSelectionRange(), "var-init");

      if (t.start.row < t.end.row) {
        var n = cc11001100_hook("n", this.$getSelectedRows(), "var-init");
        e.indentRows(n.first, n.last, "	");
        return;
      }

      if (t.start.column < t.end.column) {
        var r = cc11001100_hook("r", e.getTextRange(t), "var-init");

        if (!/^\s+$/.test(r)) {
          var n = cc11001100_hook("n", this.$getSelectedRows(), "var-init");
          e.indentRows(n.first, n.last, "	");
          return;
        }
      }

      var i = cc11001100_hook("i", e.getLine(t.start.row), "var-init"),
          o = cc11001100_hook("o", t.start, "var-init"),
          u = cc11001100_hook("u", e.getTabSize(), "var-init"),
          a = cc11001100_hook("a", e.documentToScreenColumn(o.row, o.column), "var-init");
      if (this.session.getUseSoftTabs()) var f = cc11001100_hook("f", u - a % u, "var-init"),
          l = cc11001100_hook("l", s.stringRepeat(" ", f), "var-init");else {
        var f = cc11001100_hook("f", a % u, "var-init");

        while (i[t.start.column - 1] == " " && f) t.start.column--, f--;

        this.selection.setSelectionRange(t), l = cc11001100_hook("l", "	", "assign");
      }
      return this.insert(l);
    }, "assign"), this.blockIndent = cc11001100_hook("this.blockIndent", function () {
      var e = cc11001100_hook("e", this.$getSelectedRows(), "var-init");
      this.session.indentRows(e.first, e.last, "	");
    }, "assign"), this.blockOutdent = cc11001100_hook("this.blockOutdent", function () {
      var e = cc11001100_hook("e", this.session.getSelection(), "var-init");
      this.session.outdentRows(e.getRange());
    }, "assign"), this.sortLines = cc11001100_hook("this.sortLines", function () {
      var e = cc11001100_hook("e", this.$getSelectedRows(), "var-init"),
          t = cc11001100_hook("t", this.session, "var-init"),
          n = cc11001100_hook("n", [], "var-init");

      for (var r = cc11001100_hook("r", e.first, "var-init"); r <= e.last; r++) n.push(t.getLine(r));

      n.sort(function (e, t) {
        return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0;
      });
      var i = cc11001100_hook("i", new p(0, 0, 0, 0), "var-init");

      for (var r = cc11001100_hook("r", e.first, "var-init"); r <= e.last; r++) {
        var s = cc11001100_hook("s", t.getLine(r), "var-init");
        i.start.row = cc11001100_hook("i.start.row", r, "assign"), i.end.row = cc11001100_hook("i.end.row", r, "assign"), i.end.column = cc11001100_hook("i.end.column", s.length, "assign"), t.replace(i, n[r - e.first]);
      }
    }, "assign"), this.toggleCommentLines = cc11001100_hook("this.toggleCommentLines", function () {
      var e = cc11001100_hook("e", this.session.getState(this.getCursorPosition().row), "var-init"),
          t = cc11001100_hook("t", this.$getSelectedRows(), "var-init");
      this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last);
    }, "assign"), this.toggleBlockComment = cc11001100_hook("this.toggleBlockComment", function () {
      var e = cc11001100_hook("e", this.getCursorPosition(), "var-init"),
          t = cc11001100_hook("t", this.session.getState(e.row), "var-init"),
          n = cc11001100_hook("n", this.getSelectionRange(), "var-init");
      this.session.getMode().toggleBlockComment(t, this.session, n, e);
    }, "assign"), this.getNumberAt = cc11001100_hook("this.getNumberAt", function (e, t) {
      var n = cc11001100_hook("n", /[\-]?[0-9]+(?:\.[0-9]+)?/g, "var-init");
      n.lastIndex = cc11001100_hook("n.lastIndex", 0, "assign");
      var r = cc11001100_hook("r", this.session.getLine(e), "var-init");

      while (n.lastIndex < t) {
        var i = cc11001100_hook("i", n.exec(r), "var-init");

        if (i.index <= t && i.index + i[0].length >= t) {
          var s = cc11001100_hook("s", {
            value: cc11001100_hook("value", i[0], "object-key-init"),
            start: cc11001100_hook("start", i.index, "object-key-init"),
            end: cc11001100_hook("end", i.index + i[0].length, "object-key-init")
          }, "var-init");
          return s;
        }
      }

      return null;
    }, "assign"), this.modifyNumber = cc11001100_hook("this.modifyNumber", function (e) {
      var t = cc11001100_hook("t", this.selection.getCursor().row, "var-init"),
          n = cc11001100_hook("n", this.selection.getCursor().column, "var-init"),
          r = cc11001100_hook("r", new p(t, n - 1, t, n), "var-init"),
          i = cc11001100_hook("i", this.session.getTextRange(r), "var-init");

      if (!isNaN(parseFloat(i)) && isFinite(i)) {
        var s = cc11001100_hook("s", this.getNumberAt(t, n), "var-init");

        if (s) {
          var o = cc11001100_hook("o", s.value.indexOf(".") >= 0 ? s.start + s.value.indexOf(".") + 1 : s.end, "var-init"),
              u = cc11001100_hook("u", s.start + s.value.length - o, "var-init"),
              a = cc11001100_hook("a", parseFloat(s.value), "var-init");
          a *= cc11001100_hook("a", Math.pow(10, u), "assign"), o !== s.end && n < o ? e *= cc11001100_hook("e", Math.pow(10, s.end - n - 1), "assign") : e *= cc11001100_hook("e", Math.pow(10, s.end - n), "assign"), a += cc11001100_hook("a", e, "assign"), a /= cc11001100_hook("a", Math.pow(10, u), "assign");
          var f = cc11001100_hook("f", a.toFixed(u), "var-init"),
              l = cc11001100_hook("l", new p(t, s.start, t, s.end), "var-init");
          this.session.replace(l, f), this.moveCursorTo(t, Math.max(s.start + 1, n + f.length - s.value.length));
        }
      }
    }, "assign"), this.removeLines = cc11001100_hook("this.removeLines", function () {
      var e = cc11001100_hook("e", this.$getSelectedRows(), "var-init");
      this.session.removeFullLines(e.first, e.last), this.clearSelection();
    }, "assign"), this.duplicateSelection = cc11001100_hook("this.duplicateSelection", function () {
      var e = cc11001100_hook("e", this.selection, "var-init"),
          t = cc11001100_hook("t", this.session, "var-init"),
          n = cc11001100_hook("n", e.getRange(), "var-init"),
          r = cc11001100_hook("r", e.isBackwards(), "var-init");

      if (n.isEmpty()) {
        var i = cc11001100_hook("i", n.start.row, "var-init");
        t.duplicateLines(i, i);
      } else {
        var s = cc11001100_hook("s", r ? n.start : n.end, "var-init"),
            o = cc11001100_hook("o", t.insert(s, t.getTextRange(n), !1), "var-init");
        n.start = cc11001100_hook("n.start", s, "assign"), n.end = cc11001100_hook("n.end", o, "assign"), e.setSelectionRange(n, r);
      }
    }, "assign"), this.moveLinesDown = cc11001100_hook("this.moveLinesDown", function () {
      this.$moveLines(1, !1);
    }, "assign"), this.moveLinesUp = cc11001100_hook("this.moveLinesUp", function () {
      this.$moveLines(-1, !1);
    }, "assign"), this.moveText = cc11001100_hook("this.moveText", function (e, t, n) {
      return this.session.moveText(e, t, n);
    }, "assign"), this.copyLinesUp = cc11001100_hook("this.copyLinesUp", function () {
      this.$moveLines(-1, !0);
    }, "assign"), this.copyLinesDown = cc11001100_hook("this.copyLinesDown", function () {
      this.$moveLines(1, !0);
    }, "assign"), this.$moveLines = cc11001100_hook("this.$moveLines", function (e, t) {
      var n,
          r,
          i = cc11001100_hook("i", this.selection, "var-init");

      if (!i.inMultiSelectMode || this.inVirtualSelectionMode) {
        var s = cc11001100_hook("s", i.toOrientedRange(), "var-init");
        n = cc11001100_hook("n", this.$getSelectedRows(s), "assign"), r = cc11001100_hook("r", this.session.$moveLines(n.first, n.last, t ? 0 : e), "assign"), t && e == -1 && (r = cc11001100_hook("r", 0, "assign")), s.moveBy(r, 0), i.fromOrientedRange(s);
      } else {
        var o = cc11001100_hook("o", i.rangeList.ranges, "var-init");
        i.rangeList.detach(this.session), this.inVirtualSelectionMode = cc11001100_hook("this.inVirtualSelectionMode", !0, "assign");
        var u = cc11001100_hook("u", 0, "var-init"),
            a = cc11001100_hook("a", 0, "var-init"),
            f = cc11001100_hook("f", o.length, "var-init");

        for (var l = cc11001100_hook("l", 0, "var-init"); l < f; l++) {
          var c = cc11001100_hook("c", l, "var-init");
          o[l].moveBy(u, 0), n = cc11001100_hook("n", this.$getSelectedRows(o[l]), "assign");
          var h = cc11001100_hook("h", n.first, "var-init"),
              p = cc11001100_hook("p", n.last, "var-init");

          while (++l < f) {
            a && o[l].moveBy(a, 0);
            var d = cc11001100_hook("d", this.$getSelectedRows(o[l]), "var-init");
            if (t && d.first != p) break;
            if (!t && d.first > p + 1) break;
            p = cc11001100_hook("p", d.last, "assign");
          }

          l--, u = cc11001100_hook("u", this.session.$moveLines(h, p, t ? 0 : e), "assign"), t && e == -1 && (c = cc11001100_hook("c", l + 1, "assign"));

          while (c <= l) o[c].moveBy(u, 0), c++;

          t || (u = cc11001100_hook("u", 0, "assign")), a += cc11001100_hook("a", u, "assign");
        }

        i.fromOrientedRange(i.ranges[0]), i.rangeList.attach(this.session), this.inVirtualSelectionMode = cc11001100_hook("this.inVirtualSelectionMode", !1, "assign");
      }
    }, "assign"), this.$getSelectedRows = cc11001100_hook("this.$getSelectedRows", function (e) {
      return e = cc11001100_hook("e", (e || this.getSelectionRange()).collapseRows(), "assign"), {
        first: cc11001100_hook("first", this.session.getRowFoldStart(e.start.row), "object-key-init"),
        last: cc11001100_hook("last", this.session.getRowFoldEnd(e.end.row), "object-key-init")
      };
    }, "assign"), this.onCompositionStart = cc11001100_hook("this.onCompositionStart", function (e) {
      this.renderer.showComposition(this.getCursorPosition());
    }, "assign"), this.onCompositionUpdate = cc11001100_hook("this.onCompositionUpdate", function (e) {
      this.renderer.setCompositionText(e);
    }, "assign"), this.onCompositionEnd = cc11001100_hook("this.onCompositionEnd", function () {
      this.renderer.hideComposition();
    }, "assign"), this.getFirstVisibleRow = cc11001100_hook("this.getFirstVisibleRow", function () {
      return this.renderer.getFirstVisibleRow();
    }, "assign"), this.getLastVisibleRow = cc11001100_hook("this.getLastVisibleRow", function () {
      return this.renderer.getLastVisibleRow();
    }, "assign"), this.isRowVisible = cc11001100_hook("this.isRowVisible", function (e) {
      return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow();
    }, "assign"), this.isRowFullyVisible = cc11001100_hook("this.isRowFullyVisible", function (e) {
      return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow();
    }, "assign"), this.$getVisibleRowCount = cc11001100_hook("this.$getVisibleRowCount", function () {
      return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
    }, "assign"), this.$moveByPage = cc11001100_hook("this.$moveByPage", function (e, t) {
      var n = cc11001100_hook("n", this.renderer, "var-init"),
          r = cc11001100_hook("r", this.renderer.layerConfig, "var-init"),
          i = cc11001100_hook("i", e * Math.floor(r.height / r.lineHeight), "var-init");
      t === !0 ? this.selection.$moveSelection(function () {
        this.moveCursorBy(i, 0);
      }) : t === !1 && (this.selection.moveCursorBy(i, 0), this.selection.clearSelection());
      var s = cc11001100_hook("s", n.scrollTop, "var-init");
      n.scrollBy(0, i * r.lineHeight), t != null && n.scrollCursorIntoView(null, .5), n.animateScrolling(s);
    }, "assign"), this.selectPageDown = cc11001100_hook("this.selectPageDown", function () {
      this.$moveByPage(1, !0);
    }, "assign"), this.selectPageUp = cc11001100_hook("this.selectPageUp", function () {
      this.$moveByPage(-1, !0);
    }, "assign"), this.gotoPageDown = cc11001100_hook("this.gotoPageDown", function () {
      this.$moveByPage(1, !1);
    }, "assign"), this.gotoPageUp = cc11001100_hook("this.gotoPageUp", function () {
      this.$moveByPage(-1, !1);
    }, "assign"), this.scrollPageDown = cc11001100_hook("this.scrollPageDown", function () {
      this.$moveByPage(1);
    }, "assign"), this.scrollPageUp = cc11001100_hook("this.scrollPageUp", function () {
      this.$moveByPage(-1);
    }, "assign"), this.scrollToRow = cc11001100_hook("this.scrollToRow", function (e) {
      this.renderer.scrollToRow(e);
    }, "assign"), this.scrollToLine = cc11001100_hook("this.scrollToLine", function (e, t, n, r) {
      this.renderer.scrollToLine(e, t, n, r);
    }, "assign"), this.centerSelection = cc11001100_hook("this.centerSelection", function () {
      var e = cc11001100_hook("e", this.getSelectionRange(), "var-init"),
          t = cc11001100_hook("t", {
        row: cc11001100_hook("row", Math.floor(e.start.row + (e.end.row - e.start.row) / 2), "object-key-init"),
        column: cc11001100_hook("column", Math.floor(e.start.column + (e.end.column - e.start.column) / 2), "object-key-init")
      }, "var-init");
      this.renderer.alignCursor(t, .5);
    }, "assign"), this.getCursorPosition = cc11001100_hook("this.getCursorPosition", function () {
      return this.selection.getCursor();
    }, "assign"), this.getCursorPositionScreen = cc11001100_hook("this.getCursorPositionScreen", function () {
      return this.session.documentToScreenPosition(this.getCursorPosition());
    }, "assign"), this.getSelectionRange = cc11001100_hook("this.getSelectionRange", function () {
      return this.selection.getRange();
    }, "assign"), this.selectAll = cc11001100_hook("this.selectAll", function () {
      this.selection.selectAll();
    }, "assign"), this.clearSelection = cc11001100_hook("this.clearSelection", function () {
      this.selection.clearSelection();
    }, "assign"), this.moveCursorTo = cc11001100_hook("this.moveCursorTo", function (e, t) {
      this.selection.moveCursorTo(e, t);
    }, "assign"), this.moveCursorToPosition = cc11001100_hook("this.moveCursorToPosition", function (e) {
      this.selection.moveCursorToPosition(e);
    }, "assign"), this.jumpToMatching = cc11001100_hook("this.jumpToMatching", function (e, t) {
      var n = cc11001100_hook("n", this.getCursorPosition(), "var-init"),
          r = cc11001100_hook("r", new y(this.session, n.row, n.column), "var-init"),
          i = cc11001100_hook("i", r.getCurrentToken(), "var-init"),
          s = cc11001100_hook("s", i || r.stepForward(), "var-init");
      if (!s) return;
      var o,
          u = cc11001100_hook("u", !1, "var-init"),
          a = cc11001100_hook("a", {}, "var-init"),
          f = cc11001100_hook("f", n.column - s.start, "var-init"),
          l,
          c = cc11001100_hook("c", {
        ")": cc11001100_hook(")", "(", "object-key-init"),
        "(": cc11001100_hook("(", "(", "object-key-init"),
        "]": cc11001100_hook("]", "[", "object-key-init"),
        "[": cc11001100_hook("[", "[", "object-key-init"),
        "{": cc11001100_hook("{", "{", "object-key-init"),
        "}": cc11001100_hook("}", "{", "object-key-init")
      }, "var-init");

      do {
        if (s.value.match(/[{}()\[\]]/g)) for (; f < s.value.length && !u; f++) {
          if (!c[s.value[f]]) continue;
          l = cc11001100_hook("l", c[s.value[f]] + "." + s.type.replace("rparen", "lparen"), "assign"), isNaN(a[l]) && (a[l] = cc11001100_hook("a[l]", 0, "assign"));

          switch (s.value[f]) {
            case "(":
            case "[":
            case "{":
              a[l]++;
              break;

            case ")":
            case "]":
            case "}":
              a[l]--, a[l] === -1 && (o = cc11001100_hook("o", "bracket", "assign"), u = cc11001100_hook("u", !0, "assign"));
          }
        } else s.type.indexOf("tag-name") !== -1 && (isNaN(a[s.value]) && (a[s.value] = cc11001100_hook("a[s.value]", 0, "assign")), i.value === "<" ? a[s.value]++ : i.value === "</" && a[s.value]--, a[s.value] === -1 && (o = cc11001100_hook("o", "tag", "assign"), u = cc11001100_hook("u", !0, "assign")));
        u || (i = cc11001100_hook("i", s, "assign"), s = cc11001100_hook("s", r.stepForward(), "assign"), f = cc11001100_hook("f", 0, "assign"));
      } while (s && !u);

      if (!o) return;
      var h, d;

      if (o === "bracket") {
        h = cc11001100_hook("h", this.session.getBracketRange(n), "assign");

        if (!h) {
          h = cc11001100_hook("h", new p(r.getCurrentTokenRow(), r.getCurrentTokenColumn() + f - 1, r.getCurrentTokenRow(), r.getCurrentTokenColumn() + f - 1), "assign"), d = cc11001100_hook("d", h.start, "assign");
          if (t || d.row === n.row && Math.abs(d.column - n.column) < 2) h = cc11001100_hook("h", this.session.getBracketRange(d), "assign");
        }
      } else if (o === "tag") {
        if (!s || s.type.indexOf("tag-name") === -1) return;
        var v = cc11001100_hook("v", s.value, "var-init");
        h = cc11001100_hook("h", new p(r.getCurrentTokenRow(), r.getCurrentTokenColumn() - 2, r.getCurrentTokenRow(), r.getCurrentTokenColumn() - 2), "assign");

        if (h.compare(n.row, n.column) === 0) {
          u = cc11001100_hook("u", !1, "assign");

          do s = cc11001100_hook("s", i, "assign"), i = cc11001100_hook("i", r.stepBackward(), "assign"), i && (i.type.indexOf("tag-close") !== -1 && h.setEnd(r.getCurrentTokenRow(), r.getCurrentTokenColumn() + 1), s.value === v && s.type.indexOf("tag-name") !== -1 && (i.value === "<" ? a[v]++ : i.value === "</" && a[v]--, a[v] === 0 && (u = cc11001100_hook("u", !0, "assign")))); while (i && !u);
        }

        s && s.type.indexOf("tag-name") && (d = cc11001100_hook("d", h.start, "assign"), d.row == n.row && Math.abs(d.column - n.column) < 2 && (d = cc11001100_hook("d", h.end, "assign")));
      }

      d = cc11001100_hook("d", h && h.cursor || d, "assign"), d && (e ? h && t ? this.selection.setRange(h) : h && h.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(d.row, d.column) : this.selection.moveTo(d.row, d.column));
    }, "assign"), this.gotoLine = cc11001100_hook("this.gotoLine", function (e, t, n) {
      this.selection.clearSelection(), this.session.unfold({
        row: cc11001100_hook("row", e - 1, "object-key-init"),
        column: cc11001100_hook("column", t || 0, "object-key-init")
      }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, n);
    }, "assign"), this.navigateTo = cc11001100_hook("this.navigateTo", function (e, t) {
      this.selection.moveTo(e, t);
    }, "assign"), this.navigateUp = cc11001100_hook("this.navigateUp", function (e) {
      if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
        var t = cc11001100_hook("t", this.selection.anchor.getPosition(), "var-init");
        return this.moveCursorToPosition(t);
      }

      this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0);
    }, "assign"), this.navigateDown = cc11001100_hook("this.navigateDown", function (e) {
      if (this.selection.isMultiLine() && this.selection.isBackwards()) {
        var t = cc11001100_hook("t", this.selection.anchor.getPosition(), "var-init");
        return this.moveCursorToPosition(t);
      }

      this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0);
    }, "assign"), this.navigateLeft = cc11001100_hook("this.navigateLeft", function (e) {
      if (!this.selection.isEmpty()) {
        var t = cc11001100_hook("t", this.getSelectionRange().start, "var-init");
        this.moveCursorToPosition(t);
      } else {
        e = cc11001100_hook("e", e || 1, "assign");

        while (e--) this.selection.moveCursorLeft();
      }

      this.clearSelection();
    }, "assign"), this.navigateRight = cc11001100_hook("this.navigateRight", function (e) {
      if (!this.selection.isEmpty()) {
        var t = cc11001100_hook("t", this.getSelectionRange().end, "var-init");
        this.moveCursorToPosition(t);
      } else {
        e = cc11001100_hook("e", e || 1, "assign");

        while (e--) this.selection.moveCursorRight();
      }

      this.clearSelection();
    }, "assign"), this.navigateLineStart = cc11001100_hook("this.navigateLineStart", function () {
      this.selection.moveCursorLineStart(), this.clearSelection();
    }, "assign"), this.navigateLineEnd = cc11001100_hook("this.navigateLineEnd", function () {
      this.selection.moveCursorLineEnd(), this.clearSelection();
    }, "assign"), this.navigateFileEnd = cc11001100_hook("this.navigateFileEnd", function () {
      this.selection.moveCursorFileEnd(), this.clearSelection();
    }, "assign"), this.navigateFileStart = cc11001100_hook("this.navigateFileStart", function () {
      this.selection.moveCursorFileStart(), this.clearSelection();
    }, "assign"), this.navigateWordRight = cc11001100_hook("this.navigateWordRight", function () {
      this.selection.moveCursorWordRight(), this.clearSelection();
    }, "assign"), this.navigateWordLeft = cc11001100_hook("this.navigateWordLeft", function () {
      this.selection.moveCursorWordLeft(), this.clearSelection();
    }, "assign"), this.replace = cc11001100_hook("this.replace", function (e, t) {
      t && this.$search.set(t);
      var n = cc11001100_hook("n", this.$search.find(this.session), "var-init"),
          r = cc11001100_hook("r", 0, "var-init");
      return n ? (this.$tryReplace(n, e) && (r = cc11001100_hook("r", 1, "assign")), this.selection.setSelectionRange(n), this.renderer.scrollSelectionIntoView(n.start, n.end), r) : r;
    }, "assign"), this.replaceAll = cc11001100_hook("this.replaceAll", function (e, t) {
      t && this.$search.set(t);
      var n = cc11001100_hook("n", this.$search.findAll(this.session), "var-init"),
          r = cc11001100_hook("r", 0, "var-init");
      if (!n.length) return r;
      var i = cc11001100_hook("i", this.getSelectionRange(), "var-init");
      this.selection.moveTo(0, 0);

      for (var s = cc11001100_hook("s", n.length - 1, "var-init"); s >= 0; --s) this.$tryReplace(n[s], e) && r++;

      return this.selection.setSelectionRange(i), r;
    }, "assign"), this.$tryReplace = cc11001100_hook("this.$tryReplace", function (e, t) {
      var n = cc11001100_hook("n", this.session.getTextRange(e), "var-init");
      return t = cc11001100_hook("t", this.$search.replace(n, t), "assign"), t !== null ? (e.end = cc11001100_hook("e.end", this.session.replace(e, t), "assign"), e) : null;
    }, "assign"), this.getLastSearchOptions = cc11001100_hook("this.getLastSearchOptions", function () {
      return this.$search.getOptions();
    }, "assign"), this.find = cc11001100_hook("this.find", function (e, t, n) {
      t || (t = cc11001100_hook("t", {}, "assign")), typeof e == "string" || e instanceof RegExp ? t.needle = cc11001100_hook("t.needle", e, "assign") : typeof e == "object" && r.mixin(t, e);
      var i = cc11001100_hook("i", this.selection.getRange(), "var-init");
      t.needle == null && (e = cc11001100_hook("e", this.session.getTextRange(i) || this.$search.$options.needle, "assign"), e || (i = cc11001100_hook("i", this.session.getWordRange(i.start.row, i.start.column), "assign"), e = cc11001100_hook("e", this.session.getTextRange(i), "assign")), this.$search.set({
        needle: cc11001100_hook("needle", e, "object-key-init")
      })), this.$search.set(t), t.start || this.$search.set({
        start: cc11001100_hook("start", i, "object-key-init")
      });
      var s = cc11001100_hook("s", this.$search.find(this.session), "var-init");
      if (t.preventScroll) return s;
      if (s) return this.revealRange(s, n), s;
      t.backwards ? i.start = cc11001100_hook("i.start", i.end, "assign") : i.end = cc11001100_hook("i.end", i.start, "assign"), this.selection.setRange(i);
    }, "assign"), this.findNext = cc11001100_hook("this.findNext", function (e, t) {
      this.find({
        skipCurrent: cc11001100_hook("skipCurrent", !0, "object-key-init"),
        backwards: cc11001100_hook("backwards", !1, "object-key-init")
      }, e, t);
    }, "assign"), this.findPrevious = cc11001100_hook("this.findPrevious", function (e, t) {
      this.find(e, {
        skipCurrent: cc11001100_hook("skipCurrent", !0, "object-key-init"),
        backwards: cc11001100_hook("backwards", !0, "object-key-init")
      }, t);
    }, "assign"), this.revealRange = cc11001100_hook("this.revealRange", function (e, t) {
      this.session.unfold(e), this.selection.setSelectionRange(e);
      var n = cc11001100_hook("n", this.renderer.scrollTop, "var-init");
      this.renderer.scrollSelectionIntoView(e.start, e.end, .5), t !== !1 && this.renderer.animateScrolling(n);
    }, "assign"), this.undo = cc11001100_hook("this.undo", function () {
      this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, .5);
    }, "assign"), this.redo = cc11001100_hook("this.redo", function () {
      this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, .5);
    }, "assign"), this.destroy = cc11001100_hook("this.destroy", function () {
      this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy();
    }, "assign"), this.setAutoScrollEditorIntoView = cc11001100_hook("this.setAutoScrollEditorIntoView", function (e) {
      if (!e) return;
      var t,
          n = cc11001100_hook("n", this, "var-init"),
          r = cc11001100_hook("r", !1, "var-init");
      this.$scrollAnchor || (this.$scrollAnchor = cc11001100_hook("this.$scrollAnchor", document.createElement("div"), "assign"));
      var i = cc11001100_hook("i", this.$scrollAnchor, "var-init");
      i.style.cssText = cc11001100_hook("i.style.cssText", "position:absolute", "assign"), this.container.insertBefore(i, this.container.firstChild);
      var s = cc11001100_hook("s", this.on("changeSelection", function () {
        r = cc11001100_hook("r", !0, "assign");
      }), "var-init"),
          o = cc11001100_hook("o", this.renderer.on("beforeRender", function () {
        r && (t = cc11001100_hook("t", n.renderer.container.getBoundingClientRect(), "assign"));
      }), "var-init"),
          u = cc11001100_hook("u", this.renderer.on("afterRender", function () {
        if (r && t && (n.isFocused() || n.searchBox && n.searchBox.isFocused())) {
          var e = cc11001100_hook("e", n.renderer, "var-init"),
              s = cc11001100_hook("s", e.$cursorLayer.$pixelPos, "var-init"),
              o = cc11001100_hook("o", e.layerConfig, "var-init"),
              u = cc11001100_hook("u", s.top - o.offset, "var-init");
          s.top >= 0 && u + t.top < 0 ? r = cc11001100_hook("r", !0, "assign") : s.top < o.height && s.top + t.top + o.lineHeight > window.innerHeight ? r = cc11001100_hook("r", !1, "assign") : r = cc11001100_hook("r", null, "assign"), r != null && (i.style.top = cc11001100_hook("i.style.top", u + "px", "assign"), i.style.left = cc11001100_hook("i.style.left", s.left + "px", "assign"), i.style.height = cc11001100_hook("i.style.height", o.lineHeight + "px", "assign"), i.scrollIntoView(r)), r = cc11001100_hook("r", t = cc11001100_hook("t", null, "assign"), "assign");
        }
      }), "var-init");
      this.setAutoScrollEditorIntoView = cc11001100_hook("this.setAutoScrollEditorIntoView", function (e) {
        if (e) return;
        delete this.setAutoScrollEditorIntoView, this.off("changeSelection", s), this.renderer.off("afterRender", u), this.renderer.off("beforeRender", o);
      }, "assign");
    }, "assign"), this.$resetCursorStyle = cc11001100_hook("this.$resetCursorStyle", function () {
      var e = cc11001100_hook("e", this.$cursorStyle || "ace", "var-init"),
          t = cc11001100_hook("t", this.renderer.$cursorLayer, "var-init");
      if (!t) return;
      t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = cc11001100_hook("t.isBlinking", !this.$readOnly && e != "wide", "assign"), i.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e));
    }, "assign");
  }.call(w.prototype), g.defineOptions(w.prototype, "editor", {
    selectionStyle: {
      set: function (e) {
        this.onSelectionChange(), this._signal("changeSelectionStyle", {
          data: cc11001100_hook("data", e, "object-key-init")
        });
      },
      initialValue: cc11001100_hook("initialValue", "line", "object-key-init")
    },
    highlightActiveLine: {
      set: function () {
        this.$updateHighlightActiveLine();
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    highlightSelectedWord: {
      set: function (e) {
        this.$onSelectionChange();
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    readOnly: {
      set: function (e) {
        this.textInput.setReadOnly(e), this.$resetCursorStyle();
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    copyWithEmptySelection: {
      set: function (e) {
        this.textInput.setCopyWithEmptySelection(e);
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    cursorStyle: {
      set: function (e) {
        this.$resetCursorStyle();
      },
      values: cc11001100_hook("values", ["ace", "slim", "smooth", "wide"], "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "ace", "object-key-init")
    },
    mergeUndoDeltas: {
      values: cc11001100_hook("values", [!1, !0, "always"], "object-key-init"),
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    behavioursEnabled: {
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    wrapBehavioursEnabled: {
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    autoScrollEditorIntoView: {
      set: function (e) {
        this.setAutoScrollEditorIntoView(e);
      }
    },
    keyboardHandler: {
      set: function (e) {
        this.setKeyboardHandler(e);
      },
      get: function () {
        return this.$keybindingId;
      },
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    },
    value: {
      set: function (e) {
        this.session.setValue(e);
      },
      get: function () {
        return this.getValue();
      },
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init"),
      hidden: cc11001100_hook("hidden", !0, "object-key-init")
    },
    session: {
      set: function (e) {
        this.setSession(e);
      },
      get: function () {
        return this.session;
      },
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init"),
      hidden: cc11001100_hook("hidden", !0, "object-key-init")
    },
    hScrollBarAlwaysVisible: cc11001100_hook("hScrollBarAlwaysVisible", "renderer", "object-key-init"),
    vScrollBarAlwaysVisible: cc11001100_hook("vScrollBarAlwaysVisible", "renderer", "object-key-init"),
    highlightGutterLine: cc11001100_hook("highlightGutterLine", "renderer", "object-key-init"),
    animatedScroll: cc11001100_hook("animatedScroll", "renderer", "object-key-init"),
    showInvisibles: cc11001100_hook("showInvisibles", "renderer", "object-key-init"),
    showPrintMargin: cc11001100_hook("showPrintMargin", "renderer", "object-key-init"),
    printMarginColumn: cc11001100_hook("printMarginColumn", "renderer", "object-key-init"),
    printMargin: cc11001100_hook("printMargin", "renderer", "object-key-init"),
    fadeFoldWidgets: cc11001100_hook("fadeFoldWidgets", "renderer", "object-key-init"),
    showFoldWidgets: cc11001100_hook("showFoldWidgets", "renderer", "object-key-init"),
    showLineNumbers: cc11001100_hook("showLineNumbers", "renderer", "object-key-init"),
    showGutter: cc11001100_hook("showGutter", "renderer", "object-key-init"),
    displayIndentGuides: cc11001100_hook("displayIndentGuides", "renderer", "object-key-init"),
    fontSize: cc11001100_hook("fontSize", "renderer", "object-key-init"),
    fontFamily: cc11001100_hook("fontFamily", "renderer", "object-key-init"),
    maxLines: cc11001100_hook("maxLines", "renderer", "object-key-init"),
    minLines: cc11001100_hook("minLines", "renderer", "object-key-init"),
    scrollPastEnd: cc11001100_hook("scrollPastEnd", "renderer", "object-key-init"),
    fixedWidthGutter: cc11001100_hook("fixedWidthGutter", "renderer", "object-key-init"),
    theme: cc11001100_hook("theme", "renderer", "object-key-init"),
    hasCssTransforms: cc11001100_hook("hasCssTransforms", "renderer", "object-key-init"),
    maxPixelHeight: cc11001100_hook("maxPixelHeight", "renderer", "object-key-init"),
    scrollSpeed: cc11001100_hook("scrollSpeed", "$mouseHandler", "object-key-init"),
    dragDelay: cc11001100_hook("dragDelay", "$mouseHandler", "object-key-init"),
    dragEnabled: cc11001100_hook("dragEnabled", "$mouseHandler", "object-key-init"),
    focusTimeout: cc11001100_hook("focusTimeout", "$mouseHandler", "object-key-init"),
    tooltipFollowsMouse: cc11001100_hook("tooltipFollowsMouse", "$mouseHandler", "object-key-init"),
    firstLineNumber: cc11001100_hook("firstLineNumber", "session", "object-key-init"),
    overwrite: cc11001100_hook("overwrite", "session", "object-key-init"),
    newLineMode: cc11001100_hook("newLineMode", "session", "object-key-init"),
    useWorker: cc11001100_hook("useWorker", "session", "object-key-init"),
    useSoftTabs: cc11001100_hook("useSoftTabs", "session", "object-key-init"),
    navigateWithinSoftTabs: cc11001100_hook("navigateWithinSoftTabs", "session", "object-key-init"),
    tabSize: cc11001100_hook("tabSize", "session", "object-key-init"),
    wrap: cc11001100_hook("wrap", "session", "object-key-init"),
    indentedSoftWrap: cc11001100_hook("indentedSoftWrap", "session", "object-key-init"),
    foldStyle: cc11001100_hook("foldStyle", "session", "object-key-init"),
    mode: cc11001100_hook("mode", "session", "object-key-init")
  }), t.Editor = cc11001100_hook("t.Editor", w, "assign");
}), ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function (e, t, n) {
  "use strict";

  function i(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");

    for (var n = cc11001100_hook("n", t, "var-init"); n--;) {
      var r = cc11001100_hook("r", e[n], "var-init");

      if (r && !r[0].ignore) {
        while (n < t - 1) {
          var i = cc11001100_hook("i", d(e[n], e[n + 1]), "var-init");
          e[n] = cc11001100_hook("e[n]", i[0], "assign"), e[n + 1] = cc11001100_hook("e[n + 1]", i[1], "assign"), n++;
        }

        return !0;
      }
    }
  }

  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.action == "insert", "var-init"),
        n = cc11001100_hook("n", e.start, "var-init"),
        r = cc11001100_hook("r", e.end, "var-init"),
        i = cc11001100_hook("i", (r.row - n.row) * (t ? 1 : -1), "var-init"),
        s = cc11001100_hook("s", (r.column - n.column) * (t ? 1 : -1), "var-init");
    t && (r = cc11001100_hook("r", n, "assign"));

    for (var o in this.marks) {
      var a = cc11001100_hook("a", this.marks[o], "var-init"),
          f = cc11001100_hook("f", u(a, n), "var-init");
      if (f < 0) continue;

      if (f === 0 && t) {
        if (a.bias != 1) {
          a.bias == -1;
          continue;
        }

        f = cc11001100_hook("f", 1, "assign");
      }

      var l = cc11001100_hook("l", t ? f : u(a, r), "var-init");

      if (l > 0) {
        a.row += cc11001100_hook("a.row", i, "assign"), a.column += cc11001100_hook("a.column", a.row == r.row ? s : 0, "assign");
        continue;
      }

      !t && l <= 0 && (a.row = cc11001100_hook("a.row", n.row, "assign"), a.column = cc11001100_hook("a.column", n.column, "assign"), l === 0 && (a.bias = cc11001100_hook("a.bias", 1, "assign")));
    }
  }

  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    return {
      row: cc11001100_hook("row", e.row, "object-key-init"),
      column: cc11001100_hook("column", e.column, "object-key-init")
    };
  }

  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    return {
      start: cc11001100_hook("start", f(e.start), "object-key-init"),
      end: cc11001100_hook("end", f(e.end), "object-key-init"),
      action: cc11001100_hook("action", e.action, "object-key-init"),
      lines: cc11001100_hook("lines", e.lines.slice(), "object-key-init")
    };
  }

  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    e = cc11001100_hook("e", e || this, "assign");
    if (Array.isArray(e)) return e.map(c).join("\n");
    var t = cc11001100_hook("t", "", "var-init");
    e.action ? (t = cc11001100_hook("t", e.action == "insert" ? "+" : "-", "assign"), t += cc11001100_hook("t", "[" + e.lines + "]", "assign")) : e.value && (Array.isArray(e.value) ? t = cc11001100_hook("t", e.value.map(h).join("\n"), "assign") : t = cc11001100_hook("t", h(e.value), "assign")), e.start && (t += cc11001100_hook("t", h(e), "assign"));
    if (e.id || e.rev) t += cc11001100_hook("t", "	(" + (e.id || e.rev) + ")", "assign");
    return t;
  }

  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.start.row + ":" + e.start.column + "=>" + e.end.row + ":" + e.end.column;
  }

  function p(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", e.action == "insert", "var-init"),
        r = cc11001100_hook("r", t.action == "insert", "var-init");
    if (n && r) {
      if (o(t.start, e.end) >= 0) m(t, e, -1);else {
        if (!(o(t.start, e.start) <= 0)) return null;
        m(e, t, 1);
      }
    } else if (n && !r) {
      if (o(t.start, e.end) >= 0) m(t, e, -1);else {
        if (!(o(t.end, e.start) <= 0)) return null;
        m(e, t, -1);
      }
    } else if (!n && r) {
      if (o(t.start, e.start) >= 0) m(t, e, 1);else {
        if (!(o(t.start, e.start) <= 0)) return null;
        m(e, t, 1);
      }
    } else if (!n && !r) if (o(t.start, e.start) >= 0) m(t, e, 1);else {
      if (!(o(t.end, e.start) <= 0)) return null;
      m(e, t, -1);
    }
    return [t, e];
  }

  function d(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");

    for (var n = cc11001100_hook("n", e.length, "var-init"); n--;) for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) if (!p(e[n], t[r])) {
      while (n < e.length) {
        while (r--) p(t[r], e[n]);

        r = cc11001100_hook("r", t.length, "assign"), n++;
      }

      return [e, t];
    }

    return e.selectionBefore = cc11001100_hook("e.selectionBefore", t.selectionBefore = cc11001100_hook("t.selectionBefore", e.selectionAfter = cc11001100_hook("e.selectionAfter", t.selectionAfter = cc11001100_hook("t.selectionAfter", null, "assign"), "assign"), "assign"), "assign"), [t, e];
  }

  function v(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", e.action == "insert", "var-init"),
        r = cc11001100_hook("r", t.action == "insert", "var-init");
    if (n && r) o(e.start, t.start) < 0 ? m(t, e, 1) : m(e, t, 1);else if (n && !r) o(e.start, t.end) >= 0 ? m(e, t, -1) : o(e.start, t.start) <= 0 ? m(t, e, 1) : (m(e, s.fromPoints(t.start, e.start), -1), m(t, e, 1));else if (!n && r) o(t.start, e.end) >= 0 ? m(t, e, -1) : o(t.start, e.start) <= 0 ? m(e, t, 1) : (m(t, s.fromPoints(e.start, t.start), -1), m(e, t, 1));else if (!n && !r) if (o(t.start, e.end) >= 0) m(t, e, -1);else {
      if (!(o(t.end, e.start) <= 0)) {
        var i, u;
        return o(e.start, t.start) < 0 && (i = cc11001100_hook("i", e, "assign"), e = cc11001100_hook("e", y(e, t.start), "assign")), o(e.end, t.end) > 0 && (u = cc11001100_hook("u", y(e, t.end), "assign")), g(t.end, e.start, e.end, -1), u && !i && (e.lines = cc11001100_hook("e.lines", u.lines, "assign"), e.start = cc11001100_hook("e.start", u.start, "assign"), e.end = cc11001100_hook("e.end", u.end, "assign"), u = cc11001100_hook("u", e, "assign")), [t, i, u].filter(Boolean);
      }

      m(e, t, -1);
    }
    return [t, e];
  }

  function m(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    g(e.start, t.start, t.end, n), g(e.end, t.start, t.end, n);
  }

  function g(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    e.row == (r == 1 ? t : n).row && (e.column += cc11001100_hook("e.column", r * (n.column - t.column), "assign")), e.row += cc11001100_hook("e.row", r * (n.row - t.row), "assign");
  }

  function y(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", e.lines, "var-init"),
        r = cc11001100_hook("r", e.end, "var-init");
    e.end = cc11001100_hook("e.end", f(t), "assign");
    var i = cc11001100_hook("i", e.end.row - e.start.row, "var-init"),
        s = cc11001100_hook("s", n.splice(i, n.length), "var-init"),
        o = cc11001100_hook("o", i ? t.column : t.column - e.start.column, "var-init");
    n.push(s[0].substring(0, o)), s[0] = cc11001100_hook("s[0]", s[0].substr(o), "assign");
    var u = cc11001100_hook("u", {
      start: cc11001100_hook("start", f(t), "object-key-init"),
      end: cc11001100_hook("end", r, "object-key-init"),
      lines: cc11001100_hook("lines", s, "object-key-init"),
      action: cc11001100_hook("action", e.action, "object-key-init")
    }, "var-init");
    return u;
  }

  function b(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    t = cc11001100_hook("t", l(t), "assign");

    for (var n = cc11001100_hook("n", e.length, "var-init"); n--;) {
      var r = cc11001100_hook("r", e[n], "var-init");

      for (var i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
        var s = cc11001100_hook("s", r[i], "var-init"),
            o = cc11001100_hook("o", v(s, t), "var-init");
        t = cc11001100_hook("t", o[0], "assign"), o.length != 2 && (o[2] ? (r.splice(i + 1, 1, o[1], o[2]), i++) : o[1] || (r.splice(i, 1), i--));
      }

      r.length || e.splice(n, 1);
    }

    return e;
  }

  function w(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");

    for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
      var r = cc11001100_hook("r", t[n], "var-init");

      for (var i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) b(e, r[i]);
    }
  }

  var r = function () {
    this.$maxRev = cc11001100_hook("this.$maxRev", 0, "assign"), this.$fromUndo = cc11001100_hook("this.$fromUndo", !1, "assign"), this.reset();
  };

  (function () {
    this.addSession = cc11001100_hook("this.addSession", function (e) {
      this.$session = cc11001100_hook("this.$session", e, "assign");
    }, "assign"), this.add = cc11001100_hook("this.add", function (e, t, n) {
      if (this.$fromUndo) return;
      if (e == this.$lastDelta) return;
      if (t === !1 || !this.lastDeltas) this.lastDeltas = cc11001100_hook("this.lastDeltas", [], "assign"), this.$undoStack.push(this.lastDeltas), e.id = cc11001100_hook("e.id", this.$rev = cc11001100_hook("this.$rev", ++this.$maxRev, "assign"), "assign");
      if (e.action == "remove" || e.action == "insert") this.$lastDelta = cc11001100_hook("this.$lastDelta", e, "assign");
      this.lastDeltas.push(e);
    }, "assign"), this.addSelection = cc11001100_hook("this.addSelection", function (e, t) {
      this.selections.push({
        value: cc11001100_hook("value", e, "object-key-init"),
        rev: cc11001100_hook("rev", t || this.$rev, "object-key-init")
      });
    }, "assign"), this.startNewGroup = cc11001100_hook("this.startNewGroup", function () {
      return this.lastDeltas = cc11001100_hook("this.lastDeltas", null, "assign"), this.$rev;
    }, "assign"), this.markIgnored = cc11001100_hook("this.markIgnored", function (e, t) {
      t == null && (t = cc11001100_hook("t", this.$rev + 1, "assign"));
      var n = cc11001100_hook("n", this.$undoStack, "var-init");

      for (var r = cc11001100_hook("r", n.length, "var-init"); r--;) {
        var i = cc11001100_hook("i", n[r][0], "var-init");
        if (i.id <= e) break;
        i.id < t && (i.ignore = cc11001100_hook("i.ignore", !0, "assign"));
      }

      this.lastDeltas = cc11001100_hook("this.lastDeltas", null, "assign");
    }, "assign"), this.getSelection = cc11001100_hook("this.getSelection", function (e, t) {
      var n = cc11001100_hook("n", this.selections, "var-init");

      for (var r = cc11001100_hook("r", n.length, "var-init"); r--;) {
        var i = cc11001100_hook("i", n[r], "var-init");
        if (i.rev < e) return t && (i = cc11001100_hook("i", n[r + 1], "assign")), i;
      }
    }, "assign"), this.getRevision = cc11001100_hook("this.getRevision", function () {
      return this.$rev;
    }, "assign"), this.getDeltas = cc11001100_hook("this.getDeltas", function (e, t) {
      t == null && (t = cc11001100_hook("t", this.$rev + 1, "assign"));
      var n = cc11001100_hook("n", this.$undoStack, "var-init"),
          r = cc11001100_hook("r", null, "var-init"),
          i = cc11001100_hook("i", 0, "var-init");

      for (var s = cc11001100_hook("s", n.length, "var-init"); s--;) {
        var o = cc11001100_hook("o", n[s][0], "var-init");
        o.id < t && !r && (r = cc11001100_hook("r", s + 1, "assign"));

        if (o.id <= e) {
          i = cc11001100_hook("i", s + 1, "assign");
          break;
        }
      }

      return n.slice(i, r);
    }, "assign"), this.getChangedRanges = cc11001100_hook("this.getChangedRanges", function (e, t) {
      t == null && (t = cc11001100_hook("t", this.$rev + 1, "assign"));
    }, "assign"), this.getChangedLines = cc11001100_hook("this.getChangedLines", function (e, t) {
      t == null && (t = cc11001100_hook("t", this.$rev + 1, "assign"));
    }, "assign"), this.undo = cc11001100_hook("this.undo", function (e, t) {
      this.lastDeltas = cc11001100_hook("this.lastDeltas", null, "assign");
      var n = cc11001100_hook("n", this.$undoStack, "var-init");
      if (!i(n, n.length)) return;
      e || (e = cc11001100_hook("e", this.$session, "assign")), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = cc11001100_hook("this.$redoStack", [], "assign")), this.$fromUndo = cc11001100_hook("this.$fromUndo", !0, "assign");
      var r = cc11001100_hook("r", n.pop(), "var-init"),
          s = cc11001100_hook("s", null, "var-init");
      return r && r.length && (s = cc11001100_hook("s", e.undoChanges(r, t), "assign"), this.$redoStack.push(r), this.$syncRev()), this.$fromUndo = cc11001100_hook("this.$fromUndo", !1, "assign"), s;
    }, "assign"), this.redo = cc11001100_hook("this.redo", function (e, t) {
      this.lastDeltas = cc11001100_hook("this.lastDeltas", null, "assign"), e || (e = cc11001100_hook("e", this.$session, "assign")), this.$fromUndo = cc11001100_hook("this.$fromUndo", !0, "assign");

      if (this.$redoStackBaseRev != this.$rev) {
        var n = cc11001100_hook("n", this.getDeltas(this.$redoStackBaseRev, this.$rev + 1), "var-init");
        w(this.$redoStack, n), this.$redoStackBaseRev = cc11001100_hook("this.$redoStackBaseRev", this.$rev, "assign"), this.$redoStack.forEach(function (e) {
          e[0].id = cc11001100_hook("e[0].id", ++this.$maxRev, "assign");
        }, this);
      }

      var r = cc11001100_hook("r", this.$redoStack.pop(), "var-init"),
          i = cc11001100_hook("i", null, "var-init");
      return r && (i = cc11001100_hook("i", e.redoChanges(r, t), "assign"), this.$undoStack.push(r), this.$syncRev()), this.$fromUndo = cc11001100_hook("this.$fromUndo", !1, "assign"), i;
    }, "assign"), this.$syncRev = cc11001100_hook("this.$syncRev", function () {
      var e = cc11001100_hook("e", this.$undoStack, "var-init"),
          t = cc11001100_hook("t", e[e.length - 1], "var-init"),
          n = cc11001100_hook("n", t && t[0].id || 0, "var-init");
      this.$redoStackBaseRev = cc11001100_hook("this.$redoStackBaseRev", n, "assign"), this.$rev = cc11001100_hook("this.$rev", n, "assign");
    }, "assign"), this.reset = cc11001100_hook("this.reset", function () {
      this.lastDeltas = cc11001100_hook("this.lastDeltas", null, "assign"), this.$lastDelta = cc11001100_hook("this.$lastDelta", null, "assign"), this.$undoStack = cc11001100_hook("this.$undoStack", [], "assign"), this.$redoStack = cc11001100_hook("this.$redoStack", [], "assign"), this.$rev = cc11001100_hook("this.$rev", 0, "assign"), this.mark = cc11001100_hook("this.mark", 0, "assign"), this.$redoStackBaseRev = cc11001100_hook("this.$redoStackBaseRev", this.$rev, "assign"), this.selections = cc11001100_hook("this.selections", [], "assign");
    }, "assign"), this.canUndo = cc11001100_hook("this.canUndo", function () {
      return this.$undoStack.length > 0;
    }, "assign"), this.canRedo = cc11001100_hook("this.canRedo", function () {
      return this.$redoStack.length > 0;
    }, "assign"), this.bookmark = cc11001100_hook("this.bookmark", function (e) {
      e == undefined && (e = cc11001100_hook("e", this.$rev, "assign")), this.mark = cc11001100_hook("this.mark", e, "assign");
    }, "assign"), this.isAtBookmark = cc11001100_hook("this.isAtBookmark", function () {
      return this.$rev === this.mark;
    }, "assign"), this.toJSON = cc11001100_hook("this.toJSON", function () {}, "assign"), this.fromJSON = cc11001100_hook("this.fromJSON", function () {}, "assign"), this.hasUndo = cc11001100_hook("this.hasUndo", this.canUndo, "assign"), this.hasRedo = cc11001100_hook("this.hasRedo", this.canRedo, "assign"), this.isClean = cc11001100_hook("this.isClean", this.isAtBookmark, "assign"), this.markClean = cc11001100_hook("this.markClean", this.bookmark, "assign"), this.$prettyPrint = cc11001100_hook("this.$prettyPrint", function (e) {
      return e ? c(e) : c(this.$undoStack) + "\n---\n" + c(this.$redoStack);
    }, "assign");
  }).call(r.prototype);
  var s = cc11001100_hook("s", e("./range").Range, "var-init"),
      o = cc11001100_hook("o", s.comparePoints, "var-init"),
      u = cc11001100_hook("u", s.comparePoints, "var-init");
  t.UndoManager = cc11001100_hook("t.UndoManager", r, "assign");
}), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/dom"), "var-init"),
      i = cc11001100_hook("i", e("../lib/oop"), "var-init"),
      s = cc11001100_hook("s", e("../lib/lang"), "var-init"),
      o = cc11001100_hook("o", e("../lib/event_emitter").EventEmitter, "var-init"),
      u = function (e) {
    this.element = cc11001100_hook("this.element", r.createElement("div"), "assign"), this.element.className = cc11001100_hook("this.element.className", "ace_layer ace_gutter-layer", "assign"), e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = cc11001100_hook("this.gutterWidth", 0, "assign"), this.$annotations = cc11001100_hook("this.$annotations", [], "assign"), this.$updateAnnotations = cc11001100_hook("this.$updateAnnotations", this.$updateAnnotations.bind(this), "assign"), this.$cells = cc11001100_hook("this.$cells", [], "assign");
  };

  (function () {
    i.implement(this, o), this.setSession = cc11001100_hook("this.setSession", function (e) {
      this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = cc11001100_hook("this.session", e, "assign"), e && e.on("change", this.$updateAnnotations);
    }, "assign"), this.addGutterDecoration = cc11001100_hook("this.addGutterDecoration", function (e, t) {
      window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t);
    }, "assign"), this.removeGutterDecoration = cc11001100_hook("this.removeGutterDecoration", function (e, t) {
      window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t);
    }, "assign"), this.setAnnotations = cc11001100_hook("this.setAnnotations", function (e) {
      this.$annotations = cc11001100_hook("this.$annotations", [], "assign");

      for (var t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
        var n = cc11001100_hook("n", e[t], "var-init"),
            r = cc11001100_hook("r", n.row, "var-init"),
            i = cc11001100_hook("i", this.$annotations[r], "var-init");
        i || (i = cc11001100_hook("i", this.$annotations[r] = cc11001100_hook("this.$annotations[r]", {
          text: cc11001100_hook("text", [], "object-key-init")
        }, "assign"), "assign"));
        var o = cc11001100_hook("o", n.text, "var-init");
        o = cc11001100_hook("o", o ? s.escapeHTML(o) : n.html || "", "assign"), i.text.indexOf(o) === -1 && i.text.push(o);
        var u = cc11001100_hook("u", n.type, "var-init");
        u == "error" ? i.className = cc11001100_hook("i.className", " ace_error", "assign") : u == "warning" && i.className != " ace_error" ? i.className = cc11001100_hook("i.className", " ace_warning", "assign") : u == "info" && !i.className && (i.className = cc11001100_hook("i.className", " ace_info", "assign"));
      }
    }, "assign"), this.$updateAnnotations = cc11001100_hook("this.$updateAnnotations", function (e) {
      if (!this.$annotations.length) return;
      var t = cc11001100_hook("t", e.start.row, "var-init"),
          n = cc11001100_hook("n", e.end.row - t, "var-init");
      if (n !== 0) if (e.action == "remove") this.$annotations.splice(t, n + 1, null);else {
        var r = cc11001100_hook("r", new Array(n + 1), "var-init");
        r.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, r);
      }
    }, "assign"), this.update = cc11001100_hook("this.update", function (e) {
      var t = cc11001100_hook("t", this.session, "var-init"),
          n = cc11001100_hook("n", e.firstRow, "var-init"),
          i = cc11001100_hook("i", Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1), "var-init"),
          s = cc11001100_hook("s", t.getNextFoldLine(n), "var-init"),
          o = cc11001100_hook("o", s ? s.start.row : Infinity, "var-init"),
          u = cc11001100_hook("u", this.$showFoldWidgets && t.foldWidgets, "var-init"),
          a = cc11001100_hook("a", t.$breakpoints, "var-init"),
          f = cc11001100_hook("f", t.$decorations, "var-init"),
          l = cc11001100_hook("l", t.$firstLineNumber, "var-init"),
          c = cc11001100_hook("c", 0, "var-init"),
          h = cc11001100_hook("h", t.gutterRenderer || this.$renderer, "var-init"),
          p = cc11001100_hook("p", null, "var-init"),
          d = cc11001100_hook("d", -1, "var-init"),
          v = cc11001100_hook("v", n, "var-init");

      for (;;) {
        v > o && (v = cc11001100_hook("v", s.end.row + 1, "assign"), s = cc11001100_hook("s", t.getNextFoldLine(v, s), "assign"), o = cc11001100_hook("o", s ? s.start.row : Infinity, "assign"));

        if (v > i) {
          while (this.$cells.length > d + 1) p = cc11001100_hook("p", this.$cells.pop(), "assign"), this.element.removeChild(p.element);

          break;
        }

        p = cc11001100_hook("p", this.$cells[++d], "assign"), p || (p = cc11001100_hook("p", {
          element: cc11001100_hook("element", null, "object-key-init"),
          textNode: cc11001100_hook("textNode", null, "object-key-init"),
          foldWidget: cc11001100_hook("foldWidget", null, "object-key-init")
        }, "assign"), p.element = cc11001100_hook("p.element", r.createElement("div"), "assign"), p.textNode = cc11001100_hook("p.textNode", document.createTextNode(""), "assign"), p.element.appendChild(p.textNode), this.element.appendChild(p.element), this.$cells[d] = cc11001100_hook("this.$cells[d]", p, "assign"));
        var m = cc11001100_hook("m", "ace_gutter-cell ", "var-init");
        a[v] && (m += cc11001100_hook("m", a[v], "assign")), f[v] && (m += cc11001100_hook("m", f[v], "assign")), this.$annotations[v] && (m += cc11001100_hook("m", this.$annotations[v].className, "assign")), p.element.className != m && (p.element.className = cc11001100_hook("p.element.className", m, "assign"));
        var g = cc11001100_hook("g", t.getRowLength(v) * e.lineHeight + "px", "var-init");
        g != p.element.style.height && (p.element.style.height = cc11001100_hook("p.element.style.height", g, "assign"));

        if (u) {
          var y = cc11001100_hook("y", u[v], "var-init");
          y == null && (y = cc11001100_hook("y", u[v] = cc11001100_hook("u[v]", t.getFoldWidget(v), "assign"), "assign"));
        }

        if (y) {
          p.foldWidget || (p.foldWidget = cc11001100_hook("p.foldWidget", r.createElement("span"), "assign"), p.element.appendChild(p.foldWidget));
          var m = cc11001100_hook("m", "ace_fold-widget ace_" + y, "var-init");
          y == "start" && v == o && v < s.end.row ? m += cc11001100_hook("m", " ace_closed", "assign") : m += cc11001100_hook("m", " ace_open", "assign"), p.foldWidget.className != m && (p.foldWidget.className = cc11001100_hook("p.foldWidget.className", m, "assign"));
          var g = cc11001100_hook("g", e.lineHeight + "px", "var-init");
          p.foldWidget.style.height != g && (p.foldWidget.style.height = cc11001100_hook("p.foldWidget.style.height", g, "assign"));
        } else p.foldWidget && (p.element.removeChild(p.foldWidget), p.foldWidget = cc11001100_hook("p.foldWidget", null, "assign"));

        var b = cc11001100_hook("b", c = cc11001100_hook("c", h ? h.getText(t, v) : v + l, "assign"), "var-init");
        b !== p.textNode.data && (p.textNode.data = cc11001100_hook("p.textNode.data", b, "assign")), v++;
      }

      this.element.style.height = cc11001100_hook("this.element.style.height", e.minHeight + "px", "assign");
      if (this.$fixedWidth || t.$useWrapMode) c = cc11001100_hook("c", t.getLength() + l, "assign");
      var w = cc11001100_hook("w", h ? h.getWidth(t, c, e) : c.toString().length * e.characterWidth, "var-init"),
          E = cc11001100_hook("E", this.$padding || this.$computePadding(), "var-init");
      w += cc11001100_hook("w", E.left + E.right, "assign"), w !== this.gutterWidth && !isNaN(w) && (this.gutterWidth = cc11001100_hook("this.gutterWidth", w, "assign"), this.element.style.width = cc11001100_hook("this.element.style.width", Math.ceil(this.gutterWidth) + "px", "assign"), this._emit("changeGutterWidth", w));
    }, "assign"), this.$fixedWidth = cc11001100_hook("this.$fixedWidth", !1, "assign"), this.$showLineNumbers = cc11001100_hook("this.$showLineNumbers", !0, "assign"), this.$renderer = cc11001100_hook("this.$renderer", "", "assign"), this.setShowLineNumbers = cc11001100_hook("this.setShowLineNumbers", function (e) {
      this.$renderer = cc11001100_hook("this.$renderer", !e && {
        getWidth: function () {
          return "";
        },
        getText: function () {
          return "";
        }
      }, "assign");
    }, "assign"), this.getShowLineNumbers = cc11001100_hook("this.getShowLineNumbers", function () {
      return this.$showLineNumbers;
    }, "assign"), this.$showFoldWidgets = cc11001100_hook("this.$showFoldWidgets", !0, "assign"), this.setShowFoldWidgets = cc11001100_hook("this.setShowFoldWidgets", function (e) {
      e ? r.addCssClass(this.element, "ace_folding-enabled") : r.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = cc11001100_hook("this.$showFoldWidgets", e, "assign"), this.$padding = cc11001100_hook("this.$padding", null, "assign");
    }, "assign"), this.getShowFoldWidgets = cc11001100_hook("this.getShowFoldWidgets", function () {
      return this.$showFoldWidgets;
    }, "assign"), this.$computePadding = cc11001100_hook("this.$computePadding", function () {
      if (!this.element.firstChild) return {
        left: cc11001100_hook("left", 0, "object-key-init"),
        right: cc11001100_hook("right", 0, "object-key-init")
      };
      var e = cc11001100_hook("e", r.computedStyle(this.element.firstChild), "var-init");
      return this.$padding = cc11001100_hook("this.$padding", {}, "assign"), this.$padding.left = cc11001100_hook("this.$padding.left", parseInt(e.paddingLeft) + 1 || 0, "assign"), this.$padding.right = cc11001100_hook("this.$padding.right", parseInt(e.paddingRight) || 0, "assign"), this.$padding;
    }, "assign"), this.getRegion = cc11001100_hook("this.getRegion", function (e) {
      var t = cc11001100_hook("t", this.$padding || this.$computePadding(), "var-init"),
          n = cc11001100_hook("n", this.element.getBoundingClientRect(), "var-init");
      if (e.x < t.left + n.left) return "markers";
      if (this.$showFoldWidgets && e.x > n.right - t.right) return "foldWidgets";
    }, "assign");
  }).call(u.prototype), t.Gutter = cc11001100_hook("t.Gutter", u, "assign");
}), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../range").Range, "var-init"),
      i = cc11001100_hook("i", e("../lib/dom"), "var-init"),
      s = function (e) {
    this.element = cc11001100_hook("this.element", i.createElement("div"), "assign"), this.element.className = cc11001100_hook("this.element.className", "ace_layer ace_marker-layer", "assign"), e.appendChild(this.element);
  };

  (function () {
    function e(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return (e ? 1 : 0) | (t ? 2 : 0) | (n ? 4 : 0) | (r ? 8 : 0);
    }

    this.$padding = cc11001100_hook("this.$padding", 0, "assign"), this.setPadding = cc11001100_hook("this.setPadding", function (e) {
      this.$padding = cc11001100_hook("this.$padding", e, "assign");
    }, "assign"), this.setSession = cc11001100_hook("this.setSession", function (e) {
      this.session = cc11001100_hook("this.session", e, "assign");
    }, "assign"), this.setMarkers = cc11001100_hook("this.setMarkers", function (e) {
      this.markers = cc11001100_hook("this.markers", e, "assign");
    }, "assign"), this.update = cc11001100_hook("this.update", function (e) {
      if (!e) return;
      this.config = cc11001100_hook("this.config", e, "assign");
      var t = cc11001100_hook("t", [], "var-init");

      for (var n in this.markers) {
        var r = cc11001100_hook("r", this.markers[n], "var-init");

        if (!r.range) {
          r.update(t, this, this.session, e);
          continue;
        }

        var i = cc11001100_hook("i", r.range.clipRows(e.firstRow, e.lastRow), "var-init");
        if (i.isEmpty()) continue;
        i = cc11001100_hook("i", i.toScreenRange(this.session), "assign");

        if (r.renderer) {
          var s = cc11001100_hook("s", this.$getTop(i.start.row, e), "var-init"),
              o = cc11001100_hook("o", this.$padding + (this.session.$bidiHandler.isBidiRow(i.start.row) ? this.session.$bidiHandler.getPosLeft(i.start.column) : i.start.column * e.characterWidth), "var-init");
          r.renderer(t, i, o, s, e);
        } else r.type == "fullLine" ? this.drawFullLineMarker(t, i, r.clazz, e) : r.type == "screenLine" ? this.drawScreenLineMarker(t, i, r.clazz, e) : i.isMultiLine() ? r.type == "text" ? this.drawTextMarker(t, i, r.clazz, e) : this.drawMultiLineMarker(t, i, r.clazz, e) : this.session.$bidiHandler.isBidiRow(i.start.row) ? this.drawBidiSingleLineMarker(t, i, r.clazz + " ace_start" + " ace_br15", e) : this.drawSingleLineMarker(t, i, r.clazz + " ace_start" + " ace_br15", e);
      }

      this.element.innerHTML = cc11001100_hook("this.element.innerHTML", t.join(""), "assign");
    }, "assign"), this.$getTop = cc11001100_hook("this.$getTop", function (e, t) {
      return (e - t.firstRowScreen) * t.lineHeight;
    }, "assign"), this.drawTextMarker = cc11001100_hook("this.drawTextMarker", function (t, n, i, s, o) {
      var u = cc11001100_hook("u", this.session, "var-init"),
          a = cc11001100_hook("a", n.start.row, "var-init"),
          f = cc11001100_hook("f", n.end.row, "var-init"),
          l = cc11001100_hook("l", a, "var-init"),
          c = cc11001100_hook("c", 0, "var-init"),
          h = cc11001100_hook("h", 0, "var-init"),
          p = cc11001100_hook("p", u.getScreenLastRowColumn(l), "var-init"),
          d = cc11001100_hook("d", null, "var-init"),
          v = cc11001100_hook("v", new r(l, n.start.column, l, h), "var-init");

      for (; l <= f; l++) v.start.row = cc11001100_hook("v.start.row", v.end.row = cc11001100_hook("v.end.row", l, "assign"), "assign"), v.start.column = cc11001100_hook("v.start.column", l == a ? n.start.column : u.getRowWrapIndent(l), "assign"), v.end.column = cc11001100_hook("v.end.column", p, "assign"), c = cc11001100_hook("c", h, "assign"), h = cc11001100_hook("h", p, "assign"), p = cc11001100_hook("p", l + 1 < f ? u.getScreenLastRowColumn(l + 1) : l == f ? 0 : n.end.column, "assign"), d = cc11001100_hook("d", i + (l == a ? " ace_start" : "") + " ace_br" + e(l == a || l == a + 1 && n.start.column, c < h, h > p, l == f), "assign"), this.session.$bidiHandler.isBidiRow(l) ? this.drawBidiSingleLineMarker(t, v, d, s, l == f ? 0 : 1, o) : this.drawSingleLineMarker(t, v, d, s, l == f ? 0 : 1, o);
    }, "assign"), this.drawMultiLineMarker = cc11001100_hook("this.drawMultiLineMarker", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", this.$padding, "var-init"),
          o,
          u,
          a;
      i = cc11001100_hook("i", i || "", "assign");

      if (this.session.$bidiHandler.isBidiRow(t.start.row)) {
        var f = cc11001100_hook("f", t.clone(), "var-init");
        f.end.row = cc11001100_hook("f.end.row", f.start.row, "assign"), f.end.column = cc11001100_hook("f.end.column", this.session.getLine(f.start.row).length, "assign"), this.drawBidiSingleLineMarker(e, f, n + " ace_br1 ace_start", r, null, i);
      } else o = cc11001100_hook("o", r.lineHeight, "assign"), u = cc11001100_hook("u", this.$getTop(t.start.row, r), "assign"), a = cc11001100_hook("a", s + t.start.column * r.characterWidth, "assign"), e.push("<div class='", n, " ace_br1 ace_start' style='", "height:", o, "px;", "right:0;", "top:", u, "px;", "left:", a, "px;", i, "'></div>");

      if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
        var f = cc11001100_hook("f", t.clone(), "var-init");
        f.start.row = cc11001100_hook("f.start.row", f.end.row, "assign"), f.start.column = cc11001100_hook("f.start.column", 0, "assign"), this.drawBidiSingleLineMarker(e, f, n + " ace_br12", r, null, i);
      } else {
        var l = cc11001100_hook("l", t.end.column * r.characterWidth, "var-init");
        o = cc11001100_hook("o", r.lineHeight, "assign"), u = cc11001100_hook("u", this.$getTop(t.end.row, r), "assign"), e.push("<div class='", n, " ace_br12' style='", "height:", o, "px;", "width:", l, "px;", "top:", u, "px;", "left:", s, "px;", i, "'></div>");
      }

      o = cc11001100_hook("o", (t.end.row - t.start.row - 1) * r.lineHeight, "assign");
      if (o <= 0) return;
      u = cc11001100_hook("u", this.$getTop(t.start.row + 1, r), "assign");
      var c = cc11001100_hook("c", (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8), "var-init");
      e.push("<div class='", n, c ? " ace_br" + c : "", "' style='", "height:", o, "px;", "right:0;", "top:", u, "px;", "left:", s, "px;", i, "'></div>");
    }, "assign"), this.drawSingleLineMarker = cc11001100_hook("this.drawSingleLineMarker", function (e, t, n, r, i, s) {
      var o = cc11001100_hook("o", r.lineHeight, "var-init"),
          u = cc11001100_hook("u", (t.end.column + (i || 0) - t.start.column) * r.characterWidth, "var-init"),
          a = cc11001100_hook("a", this.$getTop(t.start.row, r), "var-init"),
          f = cc11001100_hook("f", this.$padding + t.start.column * r.characterWidth, "var-init");
      e.push("<div class='", n, "' style='", "height:", o, "px;", "width:", u, "px;", "top:", a, "px;", "left:", f, "px;", s || "", "'></div>");
    }, "assign"), this.drawBidiSingleLineMarker = cc11001100_hook("this.drawBidiSingleLineMarker", function (e, t, n, r, i, s) {
      var o = cc11001100_hook("o", r.lineHeight, "var-init"),
          u = cc11001100_hook("u", this.$getTop(t.start.row, r), "var-init"),
          a = cc11001100_hook("a", this.$padding, "var-init"),
          f = cc11001100_hook("f", this.session.$bidiHandler.getSelections(t.start.column, t.end.column), "var-init");
      f.forEach(function (t) {
        e.push("<div class='", n, "' style='", "height:", o, "px;", "width:", t.width + (i || 0), "px;", "top:", u, "px;", "left:", a + t.left, "px;", s || "", "'></div>");
      });
    }, "assign"), this.drawFullLineMarker = cc11001100_hook("this.drawFullLineMarker", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", this.$getTop(t.start.row, r), "var-init"),
          o = cc11001100_hook("o", r.lineHeight, "var-init");
      t.start.row != t.end.row && (o += cc11001100_hook("o", this.$getTop(t.end.row, r) - s, "assign")), e.push("<div class='", n, "' style='", "height:", o, "px;", "top:", s, "px;", "left:0;right:0;", i || "", "'></div>");
    }, "assign"), this.drawScreenLineMarker = cc11001100_hook("this.drawScreenLineMarker", function (e, t, n, r, i) {
      var s = cc11001100_hook("s", this.$getTop(t.start.row, r), "var-init"),
          o = cc11001100_hook("o", r.lineHeight, "var-init");
      e.push("<div class='", n, "' style='", "height:", o, "px;", "top:", s, "px;", "left:0;right:0;", i || "", "'></div>");
    }, "assign");
  }).call(s.prototype), t.Marker = cc11001100_hook("t.Marker", s, "assign");
}), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("../lib/dom"), "var-init"),
      s = cc11001100_hook("s", e("../lib/lang"), "var-init"),
      o = cc11001100_hook("o", e("../lib/useragent"), "var-init"),
      u = cc11001100_hook("u", e("../lib/event_emitter").EventEmitter, "var-init"),
      a = function (e) {
    this.element = cc11001100_hook("this.element", i.createElement("div"), "assign"), this.element.className = cc11001100_hook("this.element.className", "ace_layer ace_text-layer", "assign"), e.appendChild(this.element), this.$updateEolChar = cc11001100_hook("this.$updateEolChar", this.$updateEolChar.bind(this), "assign");
  };

  (function () {
    r.implement(this, u), this.EOF_CHAR = cc11001100_hook("this.EOF_CHAR", "\u00b6", "assign"), this.EOL_CHAR_LF = cc11001100_hook("this.EOL_CHAR_LF", "\u00ac", "assign"), this.EOL_CHAR_CRLF = cc11001100_hook("this.EOL_CHAR_CRLF", "\u00a4", "assign"), this.EOL_CHAR = cc11001100_hook("this.EOL_CHAR", this.EOL_CHAR_LF, "assign"), this.TAB_CHAR = cc11001100_hook("this.TAB_CHAR", "\u2014", "assign"), this.SPACE_CHAR = cc11001100_hook("this.SPACE_CHAR", "\u00b7", "assign"), this.$padding = cc11001100_hook("this.$padding", 0, "assign"), this.MAX_LINE_LENGTH = cc11001100_hook("this.MAX_LINE_LENGTH", 1e4, "assign"), this.$updateEolChar = cc11001100_hook("this.$updateEolChar", function () {
      var e = cc11001100_hook("e", this.session.doc.getNewLineCharacter() == "\n" ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF, "var-init");
      if (this.EOL_CHAR != e) return this.EOL_CHAR = cc11001100_hook("this.EOL_CHAR", e, "assign"), !0;
    }, "assign"), this.setPadding = cc11001100_hook("this.setPadding", function (e) {
      this.$padding = cc11001100_hook("this.$padding", e, "assign"), this.element.style.padding = cc11001100_hook("this.element.style.padding", "0 " + e + "px", "assign");
    }, "assign"), this.getLineHeight = cc11001100_hook("this.getLineHeight", function () {
      return this.$fontMetrics.$characterSize.height || 0;
    }, "assign"), this.getCharacterWidth = cc11001100_hook("this.getCharacterWidth", function () {
      return this.$fontMetrics.$characterSize.width || 0;
    }, "assign"), this.$setFontMetrics = cc11001100_hook("this.$setFontMetrics", function (e) {
      this.$fontMetrics = cc11001100_hook("this.$fontMetrics", e, "assign"), this.$fontMetrics.on("changeCharacterSize", function (e) {
        this._signal("changeCharacterSize", e);
      }.bind(this)), this.$pollSizeChanges();
    }, "assign"), this.checkForSizeChanges = cc11001100_hook("this.checkForSizeChanges", function () {
      this.$fontMetrics.checkForSizeChanges();
    }, "assign"), this.$pollSizeChanges = cc11001100_hook("this.$pollSizeChanges", function () {
      return this.$pollSizeChangesTimer = cc11001100_hook("this.$pollSizeChangesTimer", this.$fontMetrics.$pollSizeChanges(), "assign");
    }, "assign"), this.setSession = cc11001100_hook("this.setSession", function (e) {
      this.session = cc11001100_hook("this.session", e, "assign"), e && this.$computeTabString();
    }, "assign"), this.showInvisibles = cc11001100_hook("this.showInvisibles", !1, "assign"), this.setShowInvisibles = cc11001100_hook("this.setShowInvisibles", function (e) {
      return this.showInvisibles == e ? !1 : (this.showInvisibles = cc11001100_hook("this.showInvisibles", e, "assign"), this.$computeTabString(), !0);
    }, "assign"), this.displayIndentGuides = cc11001100_hook("this.displayIndentGuides", !0, "assign"), this.setDisplayIndentGuides = cc11001100_hook("this.setDisplayIndentGuides", function (e) {
      return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = cc11001100_hook("this.displayIndentGuides", e, "assign"), this.$computeTabString(), !0);
    }, "assign"), this.$tabStrings = cc11001100_hook("this.$tabStrings", [], "assign"), this.onChangeTabSize = cc11001100_hook("this.onChangeTabSize", this.$computeTabString = cc11001100_hook("this.$computeTabString", function () {
      var e = cc11001100_hook("e", this.session.getTabSize(), "var-init");
      this.tabSize = cc11001100_hook("this.tabSize", e, "assign");
      var t = cc11001100_hook("t", this.$tabStrings = cc11001100_hook("this.$tabStrings", [0], "assign"), "var-init");

      for (var n = cc11001100_hook("n", 1, "var-init"); n < e + 1; n++) this.showInvisibles ? t.push("<span class='ace_invisible ace_invisible_tab'>" + s.stringRepeat(this.TAB_CHAR, n) + "</span>") : t.push(s.stringRepeat(" ", n));

      if (this.displayIndentGuides) {
        this.$indentGuideRe = cc11001100_hook("this.$indentGuideRe", /\s\S| \t|\t |\s$/, "assign");
        var r = cc11001100_hook("r", "ace_indent-guide", "var-init"),
            i = cc11001100_hook("i", "", "var-init"),
            o = cc11001100_hook("o", "", "var-init");

        if (this.showInvisibles) {
          r += cc11001100_hook("r", " ace_invisible", "assign"), i = cc11001100_hook("i", " ace_invisible_space", "assign"), o = cc11001100_hook("o", " ace_invisible_tab", "assign");
          var u = cc11001100_hook("u", s.stringRepeat(this.SPACE_CHAR, this.tabSize), "var-init"),
              a = cc11001100_hook("a", s.stringRepeat(this.TAB_CHAR, this.tabSize), "var-init");
        } else var u = cc11001100_hook("u", s.stringRepeat(" ", this.tabSize), "var-init"),
            a = cc11001100_hook("a", u, "var-init");

        this.$tabStrings[" "] = cc11001100_hook("this.$tabStrings[\" \"]", "<span class='" + r + i + "'>" + u + "</span>", "assign"), this.$tabStrings["	"] = cc11001100_hook("this.$tabStrings[\"\t\"]", "<span class='" + r + o + "'>" + a + "</span>", "assign");
      }
    }, "assign"), "assign"), this.updateLines = cc11001100_hook("this.updateLines", function (e, t, n) {
      (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) && this.scrollLines(e), this.config = cc11001100_hook("this.config", e, "assign");
      var r = cc11001100_hook("r", Math.max(t, e.firstRow), "var-init"),
          i = cc11001100_hook("i", Math.min(n, e.lastRow), "var-init"),
          s = cc11001100_hook("s", this.element.childNodes, "var-init"),
          o = cc11001100_hook("o", 0, "var-init");

      for (var u = cc11001100_hook("u", e.firstRow, "var-init"); u < r; u++) {
        var a = cc11001100_hook("a", this.session.getFoldLine(u), "var-init");

        if (a) {
          if (a.containsRow(r)) {
            r = cc11001100_hook("r", a.start.row, "assign");
            break;
          }

          u = cc11001100_hook("u", a.end.row, "assign");
        }

        o++;
      }

      var u = cc11001100_hook("u", r, "var-init"),
          a = cc11001100_hook("a", this.session.getNextFoldLine(u), "var-init"),
          f = cc11001100_hook("f", a ? a.start.row : Infinity, "var-init");

      for (;;) {
        u > f && (u = cc11001100_hook("u", a.end.row + 1, "assign"), a = cc11001100_hook("a", this.session.getNextFoldLine(u, a), "assign"), f = cc11001100_hook("f", a ? a.start.row : Infinity, "assign"));
        if (u > i) break;
        var l = cc11001100_hook("l", s[o++], "var-init");

        if (l) {
          var c = cc11001100_hook("c", [], "var-init");
          this.$renderLine(c, u, !this.$useLineGroups(), u == f ? a : !1), l.style.height = cc11001100_hook("l.style.height", e.lineHeight * this.session.getRowLength(u) + "px", "assign"), l.innerHTML = cc11001100_hook("l.innerHTML", c.join(""), "assign");
        }

        u++;
      }
    }, "assign"), this.scrollLines = cc11001100_hook("this.scrollLines", function (e) {
      var t = cc11001100_hook("t", this.config, "var-init");
      this.config = cc11001100_hook("this.config", e, "assign");
      if (!t || t.lastRow < e.firstRow) return this.update(e);
      if (e.lastRow < t.firstRow) return this.update(e);
      var n = cc11001100_hook("n", this.element, "var-init");
      if (t.firstRow < e.firstRow) for (var r = cc11001100_hook("r", this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1), "var-init"); r > 0; r--) n.removeChild(n.firstChild);
      if (t.lastRow > e.lastRow) for (var r = cc11001100_hook("r", this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow), "var-init"); r > 0; r--) n.removeChild(n.lastChild);

      if (e.firstRow < t.firstRow) {
        var i = cc11001100_hook("i", this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1), "var-init");
        n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i);
      }

      if (e.lastRow > t.lastRow) {
        var i = cc11001100_hook("i", this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow), "var-init");
        n.appendChild(i);
      }
    }, "assign"), this.$renderLinesFragment = cc11001100_hook("this.$renderLinesFragment", function (e, t, n) {
      var r = cc11001100_hook("r", this.element.ownerDocument.createDocumentFragment(), "var-init"),
          s = cc11001100_hook("s", t, "var-init"),
          o = cc11001100_hook("o", this.session.getNextFoldLine(s), "var-init"),
          u = cc11001100_hook("u", o ? o.start.row : Infinity, "var-init");

      for (;;) {
        s > u && (s = cc11001100_hook("s", o.end.row + 1, "assign"), o = cc11001100_hook("o", this.session.getNextFoldLine(s, o), "assign"), u = cc11001100_hook("u", o ? o.start.row : Infinity, "assign"));
        if (s > n) break;
        var a = cc11001100_hook("a", i.createElement("div"), "var-init"),
            f = cc11001100_hook("f", [], "var-init");
        this.$renderLine(f, s, !1, s == u ? o : !1), a.innerHTML = cc11001100_hook("a.innerHTML", f.join(""), "assign");
        if (this.$useLineGroups()) a.className = cc11001100_hook("a.className", "ace_line_group", "assign"), r.appendChild(a), a.style.height = cc11001100_hook("a.style.height", e.lineHeight * this.session.getRowLength(s) + "px", "assign");else while (a.firstChild) r.appendChild(a.firstChild);
        s++;
      }

      return r;
    }, "assign"), this.update = cc11001100_hook("this.update", function (e) {
      this.config = cc11001100_hook("this.config", e, "assign");
      var t = cc11001100_hook("t", [], "var-init"),
          n = cc11001100_hook("n", e.firstRow, "var-init"),
          r = cc11001100_hook("r", e.lastRow, "var-init"),
          i = cc11001100_hook("i", n, "var-init"),
          s = cc11001100_hook("s", this.session.getNextFoldLine(i), "var-init"),
          o = cc11001100_hook("o", s ? s.start.row : Infinity, "var-init");

      for (;;) {
        i > o && (i = cc11001100_hook("i", s.end.row + 1, "assign"), s = cc11001100_hook("s", this.session.getNextFoldLine(i, s), "assign"), o = cc11001100_hook("o", s ? s.start.row : Infinity, "assign"));
        if (i > r) break;
        this.$useLineGroups() && t.push("<div class='ace_line_group' style='height:", e.lineHeight * this.session.getRowLength(i), "px'>"), this.$renderLine(t, i, !1, i == o ? s : !1), this.$useLineGroups() && t.push("</div>"), i++;
      }

      this.element.innerHTML = cc11001100_hook("this.element.innerHTML", t.join(""), "assign");
    }, "assign"), this.$textToken = cc11001100_hook("this.$textToken", {
      text: cc11001100_hook("text", !0, "object-key-init"),
      rparen: cc11001100_hook("rparen", !0, "object-key-init"),
      lparen: cc11001100_hook("lparen", !0, "object-key-init")
    }, "assign"), this.$renderToken = cc11001100_hook("this.$renderToken", function (e, t, n, r) {
      var i = cc11001100_hook("i", this, "var-init"),
          o = cc11001100_hook("o", /\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "var-init"),
          u = function (e, n, r, o, u) {
        if (n) return i.showInvisibles ? "<span class='ace_invisible ace_invisible_space'>" + s.stringRepeat(i.SPACE_CHAR, e.length) + "</span>" : e;
        if (e == "&") return "&#38;";
        if (e == "<") return "&#60;";
        if (e == ">") return "&#62;";

        if (e == "	") {
          var a = cc11001100_hook("a", i.session.getScreenTabSize(t + o), "var-init");
          return t += cc11001100_hook("t", a - 1, "assign"), i.$tabStrings[a];
        }

        if (e == "\u3000") {
          var f = cc11001100_hook("f", i.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", "var-init"),
              l = cc11001100_hook("l", i.showInvisibles ? i.SPACE_CHAR : "", "var-init");
          return t += cc11001100_hook("t", 1, "assign"), "<span class='" + f + "' style='width:" + i.config.characterWidth * 2 + "px'>" + l + "</span>";
        }

        return r ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" + i.SPACE_CHAR + "</span>" : (t += cc11001100_hook("t", 1, "assign"), "<span class='ace_cjk' style='width:" + i.config.characterWidth * 2 + "px'>" + e + "</span>");
      },
          a = cc11001100_hook("a", r.replace(o, u), "var-init");

      if (!this.$textToken[n.type]) {
        var f = cc11001100_hook("f", "ace_" + n.type.replace(/\./g, " ace_"), "var-init"),
            l = cc11001100_hook("l", "", "var-init");
        n.type == "fold" && (l = cc11001100_hook("l", " style='width:" + n.value.length * this.config.characterWidth + "px;' ", "assign")), e.push("<span class='", f, "'", l, ">", a, "</span>");
      } else e.push(a);

      return t + r.length;
    }, "assign"), this.renderIndentGuide = cc11001100_hook("this.renderIndentGuide", function (e, t, n) {
      var r = cc11001100_hook("r", t.search(this.$indentGuideRe), "var-init");
      return r <= 0 || r >= n ? t : t[0] == " " ? (r -= cc11001100_hook("r", r % this.tabSize, "assign"), e.push(s.stringRepeat(this.$tabStrings[" "], r / this.tabSize)), t.substr(r)) : t[0] == "	" ? (e.push(s.stringRepeat(this.$tabStrings["	"], r)), t.substr(r)) : t;
    }, "assign"), this.$renderWrappedLine = cc11001100_hook("this.$renderWrappedLine", function (e, t, n, r) {
      var i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", 0, "var-init"),
          u = cc11001100_hook("u", n[0], "var-init"),
          a = cc11001100_hook("a", 0, "var-init");

      for (var f = cc11001100_hook("f", 0, "var-init"); f < t.length; f++) {
        var l = cc11001100_hook("l", t[f], "var-init"),
            c = cc11001100_hook("c", l.value, "var-init");

        if (f == 0 && this.displayIndentGuides) {
          i = cc11001100_hook("i", c.length, "assign"), c = cc11001100_hook("c", this.renderIndentGuide(e, c, u), "assign");
          if (!c) continue;
          i -= cc11001100_hook("i", c.length, "assign");
        }

        if (i + c.length < u) a = cc11001100_hook("a", this.$renderToken(e, a, l, c), "assign"), i += cc11001100_hook("i", c.length, "assign");else {
          while (i + c.length >= u) a = cc11001100_hook("a", this.$renderToken(e, a, l, c.substring(0, u - i)), "assign"), c = cc11001100_hook("c", c.substring(u - i), "assign"), i = cc11001100_hook("i", u, "assign"), r || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), e.push(s.stringRepeat("\u00a0", n.indent)), o++, a = cc11001100_hook("a", 0, "assign"), u = cc11001100_hook("u", n[o] || Number.MAX_VALUE, "assign");

          c.length != 0 && (i += cc11001100_hook("i", c.length, "assign"), a = cc11001100_hook("a", this.$renderToken(e, a, l, c), "assign"));
        }
      }
    }, "assign"), this.$renderSimpleLine = cc11001100_hook("this.$renderSimpleLine", function (e, t) {
      var n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", t[0], "var-init"),
          i = cc11001100_hook("i", r.value, "var-init");
      this.displayIndentGuides && (i = cc11001100_hook("i", this.renderIndentGuide(e, i), "assign")), i && (n = cc11001100_hook("n", this.$renderToken(e, n, r, i), "assign"));

      for (var s = cc11001100_hook("s", 1, "var-init"); s < t.length; s++) {
        r = cc11001100_hook("r", t[s], "assign"), i = cc11001100_hook("i", r.value, "assign");
        if (n + i.length > this.MAX_LINE_LENGTH) return this.$renderOverflowMessage(e, n, r, i);
        n = cc11001100_hook("n", this.$renderToken(e, n, r, i), "assign");
      }
    }, "assign"), this.$renderOverflowMessage = cc11001100_hook("this.$renderOverflowMessage", function (e, t, n, r) {
      this.$renderToken(e, t, n, r.slice(0, this.MAX_LINE_LENGTH - t)), e.push("<span style='position:absolute;right:0' class='ace_inline_button ace_keyword ace_toggle_wrap'>&lt;click to see more...&gt;</span>");
    }, "assign"), this.$renderLine = cc11001100_hook("this.$renderLine", function (e, t, n, r) {
      !r && r != 0 && (r = cc11001100_hook("r", this.session.getFoldLine(t), "assign"));
      if (r) var i = cc11001100_hook("i", this.$getFoldLineTokens(t, r), "var-init");else var i = cc11001100_hook("i", this.session.getTokens(t), "var-init");
      n || e.push("<div class='ace_line' style='height:", this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(t)), "px'>");

      if (i.length) {
        var s = cc11001100_hook("s", this.session.getRowSplitData(t), "var-init");
        s && s.length ? this.$renderWrappedLine(e, i, s, n) : this.$renderSimpleLine(e, i);
      }

      this.showInvisibles && (r && (t = cc11001100_hook("t", r.end.row, "assign")), e.push("<span class='ace_invisible ace_invisible_eol'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")), n || e.push("</div>");
    }, "assign"), this.$getFoldLineTokens = cc11001100_hook("this.$getFoldLineTokens", function (e, t) {
      function i(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var i = cc11001100_hook("i", 0, "var-init"),
            s = cc11001100_hook("s", 0, "var-init");

        while (s + e[i].value.length < t) {
          s += cc11001100_hook("s", e[i].value.length, "assign"), i++;
          if (i == e.length) return;
        }

        if (s != t) {
          var o = cc11001100_hook("o", e[i].value.substring(t - s), "var-init");
          o.length > n - t && (o = cc11001100_hook("o", o.substring(0, n - t), "assign")), r.push({
            type: cc11001100_hook("type", e[i].type, "object-key-init"),
            value: cc11001100_hook("value", o, "object-key-init")
          }), s = cc11001100_hook("s", t + o.length, "assign"), i += cc11001100_hook("i", 1, "assign");
        }

        while (s < n && i < e.length) {
          var o = cc11001100_hook("o", e[i].value, "var-init");
          o.length + s > n ? r.push({
            type: cc11001100_hook("type", e[i].type, "object-key-init"),
            value: cc11001100_hook("value", o.substring(0, n - s), "object-key-init")
          }) : r.push(e[i]), s += cc11001100_hook("s", o.length, "assign"), i += cc11001100_hook("i", 1, "assign");
        }
      }

      var n = cc11001100_hook("n", this.session, "var-init"),
          r = cc11001100_hook("r", [], "var-init"),
          s = cc11001100_hook("s", n.getTokens(e), "var-init");
      return t.walk(function (e, t, o, u, a) {
        e != null ? r.push({
          type: cc11001100_hook("type", "fold", "object-key-init"),
          value: cc11001100_hook("value", e, "object-key-init")
        }) : (a && (s = cc11001100_hook("s", n.getTokens(t), "assign")), s.length && i(s, u, o));
      }, t.end.row, this.session.getLine(t.end.row).length), r;
    }, "assign"), this.$useLineGroups = cc11001100_hook("this.$useLineGroups", function () {
      return this.session.getUseWrapMode();
    }, "assign"), this.destroy = cc11001100_hook("this.destroy", function () {
      clearInterval(this.$pollSizeChangesTimer), this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode), delete this.$measureNode;
    }, "assign");
  }).call(a.prototype), t.Text = cc11001100_hook("t.Text", a, "assign");
}), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../lib/dom"), "var-init"),
      i,
      s = function (e) {
    this.element = cc11001100_hook("this.element", r.createElement("div"), "assign"), this.element.className = cc11001100_hook("this.element.className", "ace_layer ace_cursor-layer", "assign"), e.appendChild(this.element), i === undefined && (i = cc11001100_hook("i", !("opacity" in this.element.style), "assign")), this.isVisible = cc11001100_hook("this.isVisible", !1, "assign"), this.isBlinking = cc11001100_hook("this.isBlinking", !0, "assign"), this.blinkInterval = cc11001100_hook("this.blinkInterval", 1e3, "assign"), this.smoothBlinking = cc11001100_hook("this.smoothBlinking", !1, "assign"), this.cursors = cc11001100_hook("this.cursors", [], "assign"), this.cursor = cc11001100_hook("this.cursor", this.addCursor(), "assign"), r.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = cc11001100_hook("this.$updateCursors", (i ? this.$updateVisibility : this.$updateOpacity).bind(this), "assign");
  };

  (function () {
    this.$updateVisibility = cc11001100_hook("this.$updateVisibility", function (e) {
      var t = cc11001100_hook("t", this.cursors, "var-init");

      for (var n = cc11001100_hook("n", t.length, "var-init"); n--;) t[n].style.visibility = cc11001100_hook("t[n].style.visibility", e ? "" : "hidden", "assign");
    }, "assign"), this.$updateOpacity = cc11001100_hook("this.$updateOpacity", function (e) {
      var t = cc11001100_hook("t", this.cursors, "var-init");

      for (var n = cc11001100_hook("n", t.length, "var-init"); n--;) t[n].style.opacity = cc11001100_hook("t[n].style.opacity", e ? "" : "0", "assign");
    }, "assign"), this.$startCssAnimation = cc11001100_hook("this.$startCssAnimation", function () {
      var e = cc11001100_hook("e", this.cursors, "var-init");

      for (var t = cc11001100_hook("t", e.length, "var-init"); t--;) e[t].style.animationDuration = cc11001100_hook("e[t].style.animationDuration", this.blinkInterval + "ms", "assign");

      setTimeout(function () {
        r.addCssClass(this.element, "ace_animate-blinking");
      }.bind(this));
    }, "assign"), this.$stopCssAnimation = cc11001100_hook("this.$stopCssAnimation", function () {
      r.removeCssClass(this.element, "ace_animate-blinking");
    }, "assign"), this.$padding = cc11001100_hook("this.$padding", 0, "assign"), this.setPadding = cc11001100_hook("this.setPadding", function (e) {
      this.$padding = cc11001100_hook("this.$padding", e, "assign");
    }, "assign"), this.setSession = cc11001100_hook("this.setSession", function (e) {
      this.session = cc11001100_hook("this.session", e, "assign");
    }, "assign"), this.setBlinking = cc11001100_hook("this.setBlinking", function (e) {
      e != this.isBlinking && (this.isBlinking = cc11001100_hook("this.isBlinking", e, "assign"), this.restartTimer());
    }, "assign"), this.setBlinkInterval = cc11001100_hook("this.setBlinkInterval", function (e) {
      e != this.blinkInterval && (this.blinkInterval = cc11001100_hook("this.blinkInterval", e, "assign"), this.restartTimer());
    }, "assign"), this.setSmoothBlinking = cc11001100_hook("this.setSmoothBlinking", function (e) {
      e != this.smoothBlinking && !i && (this.smoothBlinking = cc11001100_hook("this.smoothBlinking", e, "assign"), r.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.$updateCursors = cc11001100_hook("this.$updateCursors", this.$updateOpacity.bind(this), "assign"), this.restartTimer());
    }, "assign"), this.addCursor = cc11001100_hook("this.addCursor", function () {
      var e = cc11001100_hook("e", r.createElement("div"), "var-init");
      return e.className = cc11001100_hook("e.className", "ace_cursor", "assign"), this.element.appendChild(e), this.cursors.push(e), e;
    }, "assign"), this.removeCursor = cc11001100_hook("this.removeCursor", function () {
      if (this.cursors.length > 1) {
        var e = cc11001100_hook("e", this.cursors.pop(), "var-init");
        return e.parentNode.removeChild(e), e;
      }
    }, "assign"), this.hideCursor = cc11001100_hook("this.hideCursor", function () {
      this.isVisible = cc11001100_hook("this.isVisible", !1, "assign"), r.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
    }, "assign"), this.showCursor = cc11001100_hook("this.showCursor", function () {
      this.isVisible = cc11001100_hook("this.isVisible", !0, "assign"), r.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
    }, "assign"), this.restartTimer = cc11001100_hook("this.restartTimer", function () {
      var e = cc11001100_hook("e", this.$updateCursors, "var-init");
      clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && r.removeCssClass(this.element, "ace_smooth-blinking"), e(!0);
      if (!this.isBlinking || !this.blinkInterval || !this.isVisible) return;
      this.smoothBlinking && setTimeout(function () {
        r.addCssClass(this.element, "ace_smooth-blinking");
      }.bind(this));
      if (r.HAS_CSS_ANIMATION) this.$startCssAnimation();else {
        var t = cc11001100_hook("t", function () {
          this.timeoutId = cc11001100_hook("this.timeoutId", setTimeout(function () {
            e(!1);
          }, .6 * this.blinkInterval), "assign");
        }.bind(this), "var-init");
        this.intervalId = cc11001100_hook("this.intervalId", setInterval(function () {
          e(!0), t();
        }, this.blinkInterval), "assign"), t();
      }
    }, "assign"), this.getPixelPosition = cc11001100_hook("this.getPixelPosition", function (e, t) {
      if (!this.config || !this.session) return {
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init")
      };
      e || (e = cc11001100_hook("e", this.session.selection.getCursor(), "assign"));
      var n = cc11001100_hook("n", this.session.documentToScreenPosition(e), "var-init"),
          r = cc11001100_hook("r", this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, e.row) ? this.session.$bidiHandler.getPosLeft(n.column) : n.column * this.config.characterWidth), "var-init"),
          i = cc11001100_hook("i", (n.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight, "var-init");
      return {
        left: cc11001100_hook("left", r, "object-key-init"),
        top: cc11001100_hook("top", i, "object-key-init")
      };
    }, "assign"), this.update = cc11001100_hook("this.update", function (e) {
      this.config = cc11001100_hook("this.config", e, "assign");
      var t = cc11001100_hook("t", this.session.$selectionMarkers, "var-init"),
          n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", 0, "var-init");
      if (t === undefined || t.length === 0) t = cc11001100_hook("t", [{
        cursor: cc11001100_hook("cursor", null, "object-key-init")
      }], "assign");

      for (var n = cc11001100_hook("n", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); n < i; n++) {
        var s = cc11001100_hook("s", this.getPixelPosition(t[n].cursor, !0), "var-init");
        if ((s.top > e.height + e.offset || s.top < 0) && n > 1) continue;
        var o = cc11001100_hook("o", (this.cursors[r++] || this.addCursor()).style, "var-init");
        this.drawCursor ? this.drawCursor(o, s, e, t[n], this.session) : (o.left = cc11001100_hook("o.left", s.left + "px", "assign"), o.top = cc11001100_hook("o.top", s.top + "px", "assign"), o.width = cc11001100_hook("o.width", e.characterWidth + "px", "assign"), o.height = cc11001100_hook("o.height", e.lineHeight + "px", "assign"));
      }

      while (this.cursors.length > r) this.removeCursor();

      var u = cc11001100_hook("u", this.session.getOverwrite(), "var-init");
      this.$setOverwrite(u), this.$pixelPos = cc11001100_hook("this.$pixelPos", s, "assign"), this.restartTimer();
    }, "assign"), this.drawCursor = cc11001100_hook("this.drawCursor", null, "assign"), this.$setOverwrite = cc11001100_hook("this.$setOverwrite", function (e) {
      e != this.overwrite && (this.overwrite = cc11001100_hook("this.overwrite", e, "assign"), e ? r.addCssClass(this.element, "ace_overwrite-cursors") : r.removeCssClass(this.element, "ace_overwrite-cursors"));
    }, "assign"), this.destroy = cc11001100_hook("this.destroy", function () {
      clearInterval(this.intervalId), clearTimeout(this.timeoutId);
    }, "assign");
  }).call(s.prototype), t.Cursor = cc11001100_hook("t.Cursor", s, "assign");
}), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/dom"), "var-init"),
      s = cc11001100_hook("s", e("./lib/event"), "var-init"),
      o = cc11001100_hook("o", e("./lib/event_emitter").EventEmitter, "var-init"),
      u = cc11001100_hook("u", 32768, "var-init"),
      a = function (e) {
    this.element = cc11001100_hook("this.element", i.createElement("div"), "assign"), this.element.className = cc11001100_hook("this.element.className", "ace_scrollbar ace_scrollbar" + this.classSuffix, "assign"), this.inner = cc11001100_hook("this.inner", i.createElement("div"), "assign"), this.inner.className = cc11001100_hook("this.inner.className", "ace_scrollbar-inner", "assign"), this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = cc11001100_hook("this.skipEvent", !1, "assign"), s.addListener(this.element, "scroll", this.onScroll.bind(this)), s.addListener(this.element, "mousedown", s.preventDefault);
  };

  (function () {
    r.implement(this, o), this.setVisible = cc11001100_hook("this.setVisible", function (e) {
      this.element.style.display = cc11001100_hook("this.element.style.display", e ? "" : "none", "assign"), this.isVisible = cc11001100_hook("this.isVisible", e, "assign"), this.coeff = cc11001100_hook("this.coeff", 1, "assign");
    }, "assign");
  }).call(a.prototype);

  var f = function (e, t) {
    a.call(this, e), this.scrollTop = cc11001100_hook("this.scrollTop", 0, "assign"), this.scrollHeight = cc11001100_hook("this.scrollHeight", 0, "assign"), t.$scrollbarWidth = cc11001100_hook("t.$scrollbarWidth", this.width = cc11001100_hook("this.width", i.scrollbarWidth(e.ownerDocument), "assign"), "assign"), this.inner.style.width = cc11001100_hook("this.inner.style.width", this.element.style.width = cc11001100_hook("this.element.style.width", (this.width || 15) + 5 + "px", "assign"), "assign"), this.$minWidth = cc11001100_hook("this.$minWidth", 0, "assign");
  };

  r.inherits(f, a), function () {
    this.classSuffix = cc11001100_hook("this.classSuffix", "-v", "assign"), this.onScroll = cc11001100_hook("this.onScroll", function () {
      if (!this.skipEvent) {
        this.scrollTop = cc11001100_hook("this.scrollTop", this.element.scrollTop, "assign");

        if (this.coeff != 1) {
          var e = cc11001100_hook("e", this.element.clientHeight / this.scrollHeight, "var-init");
          this.scrollTop = cc11001100_hook("this.scrollTop", this.scrollTop * (1 - e) / (this.coeff - e), "assign");
        }

        this._emit("scroll", {
          data: cc11001100_hook("data", this.scrollTop, "object-key-init")
        });
      }

      this.skipEvent = cc11001100_hook("this.skipEvent", !1, "assign");
    }, "assign"), this.getWidth = cc11001100_hook("this.getWidth", function () {
      return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
    }, "assign"), this.setHeight = cc11001100_hook("this.setHeight", function (e) {
      this.element.style.height = cc11001100_hook("this.element.style.height", e + "px", "assign");
    }, "assign"), this.setInnerHeight = cc11001100_hook("this.setInnerHeight", this.setScrollHeight = cc11001100_hook("this.setScrollHeight", function (e) {
      this.scrollHeight = cc11001100_hook("this.scrollHeight", e, "assign"), e > u ? (this.coeff = cc11001100_hook("this.coeff", u / e, "assign"), e = cc11001100_hook("e", u, "assign")) : this.coeff != 1 && (this.coeff = cc11001100_hook("this.coeff", 1, "assign")), this.inner.style.height = cc11001100_hook("this.inner.style.height", e + "px", "assign");
    }, "assign"), "assign"), this.setScrollTop = cc11001100_hook("this.setScrollTop", function (e) {
      this.scrollTop != e && (this.skipEvent = cc11001100_hook("this.skipEvent", !0, "assign"), this.scrollTop = cc11001100_hook("this.scrollTop", e, "assign"), this.element.scrollTop = cc11001100_hook("this.element.scrollTop", e * this.coeff, "assign"));
    }, "assign");
  }.call(f.prototype);

  var l = function (e, t) {
    a.call(this, e), this.scrollLeft = cc11001100_hook("this.scrollLeft", 0, "assign"), this.height = cc11001100_hook("this.height", t.$scrollbarWidth, "assign"), this.inner.style.height = cc11001100_hook("this.inner.style.height", this.element.style.height = cc11001100_hook("this.element.style.height", (this.height || 15) + 5 + "px", "assign"), "assign");
  };

  r.inherits(l, a), function () {
    this.classSuffix = cc11001100_hook("this.classSuffix", "-h", "assign"), this.onScroll = cc11001100_hook("this.onScroll", function () {
      this.skipEvent || (this.scrollLeft = cc11001100_hook("this.scrollLeft", this.element.scrollLeft, "assign"), this._emit("scroll", {
        data: cc11001100_hook("data", this.scrollLeft, "object-key-init")
      })), this.skipEvent = cc11001100_hook("this.skipEvent", !1, "assign");
    }, "assign"), this.getHeight = cc11001100_hook("this.getHeight", function () {
      return this.isVisible ? this.height : 0;
    }, "assign"), this.setWidth = cc11001100_hook("this.setWidth", function (e) {
      this.element.style.width = cc11001100_hook("this.element.style.width", e + "px", "assign");
    }, "assign"), this.setInnerWidth = cc11001100_hook("this.setInnerWidth", function (e) {
      this.inner.style.width = cc11001100_hook("this.inner.style.width", e + "px", "assign");
    }, "assign"), this.setScrollWidth = cc11001100_hook("this.setScrollWidth", function (e) {
      this.inner.style.width = cc11001100_hook("this.inner.style.width", e + "px", "assign");
    }, "assign"), this.setScrollLeft = cc11001100_hook("this.setScrollLeft", function (e) {
      this.scrollLeft != e && (this.skipEvent = cc11001100_hook("this.skipEvent", !0, "assign"), this.scrollLeft = cc11001100_hook("this.scrollLeft", this.element.scrollLeft = cc11001100_hook("this.element.scrollLeft", e, "assign"), "assign"));
    }, "assign");
  }.call(l.prototype), t.ScrollBar = cc11001100_hook("t.ScrollBar", f, "assign"), t.ScrollBarV = cc11001100_hook("t.ScrollBarV", f, "assign"), t.ScrollBarH = cc11001100_hook("t.ScrollBarH", l, "assign"), t.VScrollBar = cc11001100_hook("t.VScrollBar", f, "assign"), t.HScrollBar = cc11001100_hook("t.HScrollBar", l, "assign");
}), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/event"), "var-init"),
      i = function (e, t) {
    this.onRender = cc11001100_hook("this.onRender", e, "assign"), this.pending = cc11001100_hook("this.pending", !1, "assign"), this.changes = cc11001100_hook("this.changes", 0, "assign"), this.window = cc11001100_hook("this.window", t || window, "assign");
  };

  (function () {
    this.schedule = cc11001100_hook("this.schedule", function (e) {
      this.changes = cc11001100_hook("this.changes", this.changes | e, "assign");

      if (this.changes) {
        var t = cc11001100_hook("t", this, "var-init");
        r.nextFrame(function (e) {
          var n = cc11001100_hook("n", t.changes, "var-init");
          n && (r.blockIdle(100), t.changes = cc11001100_hook("t.changes", 0, "assign"), t.onRender(n)), t.changes && t.schedule();
        });
      }
    }, "assign");
  }).call(i.prototype), t.RenderLoop = cc11001100_hook("t.RenderLoop", i, "assign");
}), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function (e, t, n) {
  var r = cc11001100_hook("r", e("../lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("../lib/dom"), "var-init"),
      s = cc11001100_hook("s", e("../lib/lang"), "var-init"),
      o = cc11001100_hook("o", e("../lib/event"), "var-init"),
      u = cc11001100_hook("u", e("../lib/useragent"), "var-init"),
      a = cc11001100_hook("a", e("../lib/event_emitter").EventEmitter, "var-init"),
      f = cc11001100_hook("f", 256, "var-init"),
      l = cc11001100_hook("l", typeof ResizeObserver == "function", "var-init"),
      c = cc11001100_hook("c", 200, "var-init"),
      h = cc11001100_hook("h", t.FontMetrics = cc11001100_hook("t.FontMetrics", function (e) {
    this.el = cc11001100_hook("this.el", i.createElement("div"), "assign"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = cc11001100_hook("this.$main", i.createElement("div"), "assign"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = cc11001100_hook("this.$measureNode", i.createElement("div"), "assign"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), this.$measureNode.innerHTML = cc11001100_hook("this.$measureNode.innerHTML", s.stringRepeat("X", f), "assign"), this.$characterSize = cc11001100_hook("this.$characterSize", {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init")
    }, "assign"), l ? this.$addObserver() : this.checkForSizeChanges();
  }, "assign"), "var-init");
  (function () {
    r.implement(this, a), this.$characterSize = cc11001100_hook("this.$characterSize", {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init")
    }, "assign"), this.$setMeasureNodeStyles = cc11001100_hook("this.$setMeasureNodeStyles", function (e, t) {
      e.width = cc11001100_hook("e.width", e.height = cc11001100_hook("e.height", "auto", "assign"), "assign"), e.left = cc11001100_hook("e.left", e.top = cc11001100_hook("e.top", "0px", "assign"), "assign"), e.visibility = cc11001100_hook("e.visibility", "hidden", "assign"), e.position = cc11001100_hook("e.position", "absolute", "assign"), e.whiteSpace = cc11001100_hook("e.whiteSpace", "pre", "assign"), u.isIE < 8 ? e["font-family"] = cc11001100_hook("e[\"font-family\"]", "inherit", "assign") : e.font = cc11001100_hook("e.font", "inherit", "assign"), e.overflow = cc11001100_hook("e.overflow", t ? "hidden" : "visible", "assign");
    }, "assign"), this.checkForSizeChanges = cc11001100_hook("this.checkForSizeChanges", function (e) {
      e === undefined && (e = cc11001100_hook("e", this.$measureSizes(), "assign"));

      if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
        this.$measureNode.style.fontWeight = cc11001100_hook("this.$measureNode.style.fontWeight", "bold", "assign");
        var t = cc11001100_hook("t", this.$measureSizes(), "var-init");
        this.$measureNode.style.fontWeight = cc11001100_hook("this.$measureNode.style.fontWeight", "", "assign"), this.$characterSize = cc11001100_hook("this.$characterSize", e, "assign"), this.charSizes = cc11001100_hook("this.charSizes", Object.create(null), "assign"), this.allowBoldFonts = cc11001100_hook("this.allowBoldFonts", t && t.width === e.width && t.height === e.height, "assign"), this._emit("changeCharacterSize", {
          data: cc11001100_hook("data", e, "object-key-init")
        });
      }
    }, "assign"), this.$addObserver = cc11001100_hook("this.$addObserver", function () {
      var e = cc11001100_hook("e", this, "var-init");
      this.$observer = cc11001100_hook("this.$observer", new window.ResizeObserver(function (t) {
        var n = cc11001100_hook("n", t[0].contentRect, "var-init");
        e.checkForSizeChanges({
          height: cc11001100_hook("height", n.height, "object-key-init"),
          width: cc11001100_hook("width", n.width / f, "object-key-init")
        });
      }), "assign"), this.$observer.observe(this.$measureNode);
    }, "assign"), this.$pollSizeChanges = cc11001100_hook("this.$pollSizeChanges", function () {
      if (this.$pollSizeChangesTimer || this.$observer) return this.$pollSizeChangesTimer;
      var e = cc11001100_hook("e", this, "var-init");
      return this.$pollSizeChangesTimer = cc11001100_hook("this.$pollSizeChangesTimer", o.onIdle(function t() {
        e.checkForSizeChanges(), o.onIdle(t, 500);
      }, 500), "assign");
    }, "assign"), this.setPolling = cc11001100_hook("this.setPolling", function (e) {
      e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = cc11001100_hook("this.$pollSizeChangesTimer", 0, "assign"));
    }, "assign"), this.$measureSizes = cc11001100_hook("this.$measureSizes", function (e) {
      var t = cc11001100_hook("t", {
        height: cc11001100_hook("height", (e || this.$measureNode).clientHeight, "object-key-init"),
        width: cc11001100_hook("width", (e || this.$measureNode).clientWidth / f, "object-key-init")
      }, "var-init");
      return t.width === 0 || t.height === 0 ? null : t;
    }, "assign"), this.$measureCharWidth = cc11001100_hook("this.$measureCharWidth", function (e) {
      this.$main.innerHTML = cc11001100_hook("this.$main.innerHTML", s.stringRepeat(e, f), "assign");
      var t = cc11001100_hook("t", this.$main.getBoundingClientRect(), "var-init");
      return t.width / f;
    }, "assign"), this.getCharacterWidth = cc11001100_hook("this.getCharacterWidth", function (e) {
      var t = cc11001100_hook("t", this.charSizes[e], "var-init");
      return t === undefined && (t = cc11001100_hook("t", this.charSizes[e] = cc11001100_hook("this.charSizes[e]", this.$measureCharWidth(e) / this.$characterSize.width, "assign"), "assign")), t;
    }, "assign"), this.destroy = cc11001100_hook("this.destroy", function () {
      clearInterval(this.$pollSizeChangesTimer), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
    }, "assign"), this.$getZoom = cc11001100_hook("this.$getZoom", function e(t) {
      return t ? (window.getComputedStyle(t).zoom || 1) * e(t.parentElement) : 1;
    }, "assign"), this.$initTransformMeasureNodes = cc11001100_hook("this.$initTransformMeasureNodes", function () {
      var e = function (e, t) {
        return ["div", {
          style: cc11001100_hook("style", "position: absolute;top:" + e + "px;left:" + t + "px;", "object-key-init")
        }];
      };

      this.els = cc11001100_hook("this.els", i.buildDom([e(0, 0), e(c, 0), e(0, c), e(c, c)], this.el), "assign");
    }, "assign"), this.transformCoordinates = cc11001100_hook("this.transformCoordinates", function (e, t) {
      function r(e, t, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r = cc11001100_hook("r", e[1] * t[0] - e[0] * t[1], "var-init");
        return [(-t[1] * n[0] + t[0] * n[1]) / r, (+e[1] * n[0] - e[0] * n[1]) / r];
      }

      function i(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return [e[0] - t[0], e[1] - t[1]];
      }

      function s(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return [e[0] + t[0], e[1] + t[1]];
      }

      function o(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return [e * t[0], e * t[1]];
      }

      function u(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", e.getBoundingClientRect(), "var-init");
        return [t.left, t.top];
      }

      if (e) {
        var n = cc11001100_hook("n", this.$getZoom(this.el), "var-init");
        e = cc11001100_hook("e", o(1 / n, e), "assign");
      }

      this.els || this.$initTransformMeasureNodes();
      var a = cc11001100_hook("a", u(this.els[0]), "var-init"),
          f = cc11001100_hook("f", u(this.els[1]), "var-init"),
          l = cc11001100_hook("l", u(this.els[2]), "var-init"),
          h = cc11001100_hook("h", u(this.els[3]), "var-init"),
          p = cc11001100_hook("p", r(i(h, f), i(h, l), i(s(f, l), s(h, a))), "var-init"),
          d = cc11001100_hook("d", o(1 + p[0], i(f, a)), "var-init"),
          v = cc11001100_hook("v", o(1 + p[1], i(l, a)), "var-init");

      if (t) {
        var m = cc11001100_hook("m", t, "var-init"),
            g = cc11001100_hook("g", p[0] * m[0] / c + p[1] * m[1] / c + 1, "var-init"),
            y = cc11001100_hook("y", s(o(m[0], d), o(m[1], v)), "var-init");
        return s(o(1 / g / c, y), a);
      }

      var b = cc11001100_hook("b", i(e, a), "var-init"),
          w = cc11001100_hook("w", r(i(d, o(p[0], b)), i(v, o(p[1], b)), b), "var-init");
      return o(c, w);
    }, "assign");
  }).call(h.prototype);
}), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/dom"), "var-init"),
      s = cc11001100_hook("s", e("./config"), "var-init"),
      o = cc11001100_hook("o", e("./lib/useragent"), "var-init"),
      u = cc11001100_hook("u", e("./layer/gutter").Gutter, "var-init"),
      a = cc11001100_hook("a", e("./layer/marker").Marker, "var-init"),
      f = cc11001100_hook("f", e("./layer/text").Text, "var-init"),
      l = cc11001100_hook("l", e("./layer/cursor").Cursor, "var-init"),
      c = cc11001100_hook("c", e("./scrollbar").HScrollBar, "var-init"),
      h = cc11001100_hook("h", e("./scrollbar").VScrollBar, "var-init"),
      p = cc11001100_hook("p", e("./renderloop").RenderLoop, "var-init"),
      d = cc11001100_hook("d", e("./layer/font_metrics").FontMetrics, "var-init"),
      v = cc11001100_hook("v", e("./lib/event_emitter").EventEmitter, "var-init"),
      m = cc11001100_hook("m", '.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}[ace_nocontext=true] {transform: none!important;filter: none!important;perspective: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_text-input-ios {position: absolute !important;top: -100000px !important;left: -100000px !important;}', "var-init");
  i.importCssString(m, "ace_editor.css");

  var g = function (e, t) {
    var n = cc11001100_hook("n", this, "var-init");
    this.container = cc11001100_hook("this.container", e || i.createElement("div"), "assign"), i.addCssClass(this.container, "ace_editor"), this.setTheme(t), this.$gutter = cc11001100_hook("this.$gutter", i.createElement("div"), "assign"), this.$gutter.className = cc11001100_hook("this.$gutter.className", "ace_gutter", "assign"), this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = cc11001100_hook("this.scroller", i.createElement("div"), "assign"), this.scroller.className = cc11001100_hook("this.scroller.className", "ace_scroller", "assign"), this.container.appendChild(this.scroller), this.content = cc11001100_hook("this.content", i.createElement("div"), "assign"), this.content.className = cc11001100_hook("this.content.className", "ace_content", "assign"), this.scroller.appendChild(this.content), this.$gutterLayer = cc11001100_hook("this.$gutterLayer", new u(this.$gutter), "assign"), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = cc11001100_hook("this.$markerBack", new a(this.content), "assign");
    var r = cc11001100_hook("r", this.$textLayer = cc11001100_hook("this.$textLayer", new f(this.content), "assign"), "var-init");
    this.canvas = cc11001100_hook("this.canvas", r.element, "assign"), this.$markerFront = cc11001100_hook("this.$markerFront", new a(this.content), "assign"), this.$cursorLayer = cc11001100_hook("this.$cursorLayer", new l(this.content), "assign"), this.$horizScroll = cc11001100_hook("this.$horizScroll", !1, "assign"), this.$vScroll = cc11001100_hook("this.$vScroll", !1, "assign"), this.scrollBar = cc11001100_hook("this.scrollBar", this.scrollBarV = cc11001100_hook("this.scrollBarV", new h(this.container, this), "assign"), "assign"), this.scrollBarH = cc11001100_hook("this.scrollBarH", new c(this.container, this), "assign"), this.scrollBarV.addEventListener("scroll", function (e) {
      n.$scrollAnimation || n.session.setScrollTop(e.data - n.scrollMargin.top);
    }), this.scrollBarH.addEventListener("scroll", function (e) {
      n.$scrollAnimation || n.session.setScrollLeft(e.data - n.scrollMargin.left);
    }), this.scrollTop = cc11001100_hook("this.scrollTop", 0, "assign"), this.scrollLeft = cc11001100_hook("this.scrollLeft", 0, "assign"), this.cursorPos = cc11001100_hook("this.cursorPos", {
      row: cc11001100_hook("row", 0, "object-key-init"),
      column: cc11001100_hook("column", 0, "object-key-init")
    }, "assign"), this.$fontMetrics = cc11001100_hook("this.$fontMetrics", new d(this.container), "assign"), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", function (e) {
      n.updateCharacterSize(), n.onResize(!0, n.gutterWidth, n.$size.width, n.$size.height), n._signal("changeCharacterSize", e);
    }), this.$size = cc11001100_hook("this.$size", {
      width: cc11001100_hook("width", 0, "object-key-init"),
      height: cc11001100_hook("height", 0, "object-key-init"),
      scrollerHeight: cc11001100_hook("scrollerHeight", 0, "object-key-init"),
      scrollerWidth: cc11001100_hook("scrollerWidth", 0, "object-key-init"),
      $dirty: cc11001100_hook("$dirty", !0, "object-key-init")
    }, "assign"), this.layerConfig = cc11001100_hook("this.layerConfig", {
      width: cc11001100_hook("width", 1, "object-key-init"),
      padding: cc11001100_hook("padding", 0, "object-key-init"),
      firstRow: cc11001100_hook("firstRow", 0, "object-key-init"),
      firstRowScreen: cc11001100_hook("firstRowScreen", 0, "object-key-init"),
      lastRow: cc11001100_hook("lastRow", 0, "object-key-init"),
      lineHeight: cc11001100_hook("lineHeight", 0, "object-key-init"),
      characterWidth: cc11001100_hook("characterWidth", 0, "object-key-init"),
      minHeight: cc11001100_hook("minHeight", 1, "object-key-init"),
      maxHeight: cc11001100_hook("maxHeight", 1, "object-key-init"),
      offset: cc11001100_hook("offset", 0, "object-key-init"),
      height: cc11001100_hook("height", 1, "object-key-init"),
      gutterOffset: cc11001100_hook("gutterOffset", 1, "object-key-init")
    }, "assign"), this.scrollMargin = cc11001100_hook("this.scrollMargin", {
      left: cc11001100_hook("left", 0, "object-key-init"),
      right: cc11001100_hook("right", 0, "object-key-init"),
      top: cc11001100_hook("top", 0, "object-key-init"),
      bottom: cc11001100_hook("bottom", 0, "object-key-init"),
      v: cc11001100_hook("v", 0, "object-key-init"),
      h: cc11001100_hook("h", 0, "object-key-init")
    }, "assign"), this.$loop = cc11001100_hook("this.$loop", new p(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), "assign"), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), s.resetOptions(this), s._emit("renderer", this);
  };

  (function () {
    this.CHANGE_CURSOR = cc11001100_hook("this.CHANGE_CURSOR", 1, "assign"), this.CHANGE_MARKER = cc11001100_hook("this.CHANGE_MARKER", 2, "assign"), this.CHANGE_GUTTER = cc11001100_hook("this.CHANGE_GUTTER", 4, "assign"), this.CHANGE_SCROLL = cc11001100_hook("this.CHANGE_SCROLL", 8, "assign"), this.CHANGE_LINES = cc11001100_hook("this.CHANGE_LINES", 16, "assign"), this.CHANGE_TEXT = cc11001100_hook("this.CHANGE_TEXT", 32, "assign"), this.CHANGE_SIZE = cc11001100_hook("this.CHANGE_SIZE", 64, "assign"), this.CHANGE_MARKER_BACK = cc11001100_hook("this.CHANGE_MARKER_BACK", 128, "assign"), this.CHANGE_MARKER_FRONT = cc11001100_hook("this.CHANGE_MARKER_FRONT", 256, "assign"), this.CHANGE_FULL = cc11001100_hook("this.CHANGE_FULL", 512, "assign"), this.CHANGE_H_SCROLL = cc11001100_hook("this.CHANGE_H_SCROLL", 1024, "assign"), r.implement(this, v), this.updateCharacterSize = cc11001100_hook("this.updateCharacterSize", function () {
      this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = cc11001100_hook("this.$allowBoldFonts", this.$textLayer.allowBoldFonts, "assign"), this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = cc11001100_hook("this.layerConfig.characterWidth", this.characterWidth = cc11001100_hook("this.characterWidth", this.$textLayer.getCharacterWidth(), "assign"), "assign"), this.layerConfig.lineHeight = cc11001100_hook("this.layerConfig.lineHeight", this.lineHeight = cc11001100_hook("this.lineHeight", this.$textLayer.getLineHeight(), "assign"), "assign"), this.$updatePrintMargin();
    }, "assign"), this.setSession = cc11001100_hook("this.setSession", function (e) {
      this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = cc11001100_hook("this.session", e, "assign"), e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e);
      if (!e) return;
      this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = cc11001100_hook("this.scrollBarH.scrollLeft", this.scrollBarV.scrollTop = cc11001100_hook("this.scrollBarV.scrollTop", null, "assign"), "assign"), this.onChangeNewLineMode = cc11001100_hook("this.onChangeNewLineMode", this.onChangeNewLineMode.bind(this), "assign"), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode);
    }, "assign"), this.updateLines = cc11001100_hook("this.updateLines", function (e, t, n) {
      t === undefined && (t = cc11001100_hook("t", Infinity, "assign")), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = cc11001100_hook("this.$changedLines.firstRow", e, "assign")), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = cc11001100_hook("this.$changedLines.lastRow", t, "assign"))) : this.$changedLines = cc11001100_hook("this.$changedLines", {
        firstRow: cc11001100_hook("firstRow", e, "object-key-init"),
        lastRow: cc11001100_hook("lastRow", t, "object-key-init")
      }, "assign");

      if (this.$changedLines.lastRow < this.layerConfig.firstRow) {
        if (!n) return;
        this.$changedLines.lastRow = cc11001100_hook("this.$changedLines.lastRow", this.layerConfig.lastRow, "assign");
      }

      if (this.$changedLines.firstRow > this.layerConfig.lastRow) return;
      this.$loop.schedule(this.CHANGE_LINES);
    }, "assign"), this.onChangeNewLineMode = cc11001100_hook("this.onChangeNewLineMode", function () {
      this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
    }, "assign"), this.onChangeTabSize = cc11001100_hook("this.onChangeTabSize", function () {
      this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize();
    }, "assign"), this.updateText = cc11001100_hook("this.updateText", function () {
      this.$loop.schedule(this.CHANGE_TEXT);
    }, "assign"), this.updateFull = cc11001100_hook("this.updateFull", function (e) {
      e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL);
    }, "assign"), this.updateFontSize = cc11001100_hook("this.updateFontSize", function () {
      this.$textLayer.checkForSizeChanges();
    }, "assign"), this.$changes = cc11001100_hook("this.$changes", 0, "assign"), this.$updateSizeAsync = cc11001100_hook("this.$updateSizeAsync", function () {
      this.$loop.pending ? this.$size.$dirty = cc11001100_hook("this.$size.$dirty", !0, "assign") : this.onResize();
    }, "assign"), this.onResize = cc11001100_hook("this.onResize", function (e, t, n, r) {
      if (this.resizing > 2) return;
      this.resizing > 0 ? this.resizing++ : this.resizing = cc11001100_hook("this.resizing", e ? 1 : 0, "assign");
      var i = cc11001100_hook("i", this.container, "var-init");
      r || (r = cc11001100_hook("r", i.clientHeight || i.scrollHeight, "assign")), n || (n = cc11001100_hook("n", i.clientWidth || i.scrollWidth, "assign"));
      var s = cc11001100_hook("s", this.$updateCachedSize(e, t, n, r), "var-init");
      if (!this.$size.scrollerHeight || !n && !r) return this.resizing = cc11001100_hook("this.resizing", 0, "assign");
      e && (this.$gutterLayer.$padding = cc11001100_hook("this.$gutterLayer.$padding", null, "assign")), e ? this.$renderChanges(s | this.$changes, !0) : this.$loop.schedule(s | this.$changes), this.resizing && (this.resizing = cc11001100_hook("this.resizing", 0, "assign")), this.scrollBarV.scrollLeft = cc11001100_hook("this.scrollBarV.scrollLeft", this.scrollBarV.scrollTop = cc11001100_hook("this.scrollBarV.scrollTop", null, "assign"), "assign");
    }, "assign"), this.$updateCachedSize = cc11001100_hook("this.$updateCachedSize", function (e, t, n, r) {
      r -= cc11001100_hook("r", this.$extraHeight || 0, "assign");
      var i = cc11001100_hook("i", 0, "var-init"),
          s = cc11001100_hook("s", this.$size, "var-init"),
          o = cc11001100_hook("o", {
        width: cc11001100_hook("width", s.width, "object-key-init"),
        height: cc11001100_hook("height", s.height, "object-key-init"),
        scrollerHeight: cc11001100_hook("scrollerHeight", s.scrollerHeight, "object-key-init"),
        scrollerWidth: cc11001100_hook("scrollerWidth", s.scrollerWidth, "object-key-init")
      }, "var-init");
      r && (e || s.height != r) && (s.height = cc11001100_hook("s.height", r, "assign"), i |= cc11001100_hook("i", this.CHANGE_SIZE, "assign"), s.scrollerHeight = cc11001100_hook("s.scrollerHeight", s.height, "assign"), this.$horizScroll && (s.scrollerHeight -= cc11001100_hook("s.scrollerHeight", this.scrollBarH.getHeight(), "assign")), this.scrollBarV.element.style.bottom = cc11001100_hook("this.scrollBarV.element.style.bottom", this.scrollBarH.getHeight() + "px", "assign"), i |= cc11001100_hook("i", this.CHANGE_SCROLL, "assign"));

      if (n && (e || s.width != n)) {
        i |= cc11001100_hook("i", this.CHANGE_SIZE, "assign"), s.width = cc11001100_hook("s.width", n, "assign"), t == null && (t = cc11001100_hook("t", this.$showGutter ? this.$gutter.offsetWidth : 0, "assign")), this.gutterWidth = cc11001100_hook("this.gutterWidth", t, "assign"), this.scrollBarH.element.style.left = cc11001100_hook("this.scrollBarH.element.style.left", this.scroller.style.left = cc11001100_hook("this.scroller.style.left", t + "px", "assign"), "assign"), s.scrollerWidth = cc11001100_hook("s.scrollerWidth", Math.max(0, n - t - this.scrollBarV.getWidth()), "assign"), this.scrollBarH.element.style.right = cc11001100_hook("this.scrollBarH.element.style.right", this.scroller.style.right = cc11001100_hook("this.scroller.style.right", this.scrollBarV.getWidth() + "px", "assign"), "assign"), this.scroller.style.bottom = cc11001100_hook("this.scroller.style.bottom", this.scrollBarH.getHeight() + "px", "assign");
        if (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) i |= cc11001100_hook("i", this.CHANGE_FULL, "assign");
      }

      return s.$dirty = cc11001100_hook("s.$dirty", !n || !r, "assign"), i && this._signal("resize", o), i;
    }, "assign"), this.onGutterResize = cc11001100_hook("this.onGutterResize", function () {
      var e = cc11001100_hook("e", this.$showGutter ? this.$gutter.offsetWidth : 0, "var-init");
      e != this.gutterWidth && (this.$changes |= cc11001100_hook("this.$changes", this.$updateCachedSize(!0, e, this.$size.width, this.$size.height), "assign")), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(), this.$loop.schedule(this.CHANGE_MARKER));
    }, "assign"), this.adjustWrapLimit = cc11001100_hook("this.adjustWrapLimit", function () {
      var e = cc11001100_hook("e", this.$size.scrollerWidth - this.$padding * 2, "var-init"),
          t = cc11001100_hook("t", Math.floor(e / this.characterWidth), "var-init");
      return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn);
    }, "assign"), this.setAnimatedScroll = cc11001100_hook("this.setAnimatedScroll", function (e) {
      this.setOption("animatedScroll", e);
    }, "assign"), this.getAnimatedScroll = cc11001100_hook("this.getAnimatedScroll", function () {
      return this.$animatedScroll;
    }, "assign"), this.setShowInvisibles = cc11001100_hook("this.setShowInvisibles", function (e) {
      this.setOption("showInvisibles", e), this.session.$bidiHandler.setShowInvisibles(e);
    }, "assign"), this.getShowInvisibles = cc11001100_hook("this.getShowInvisibles", function () {
      return this.getOption("showInvisibles");
    }, "assign"), this.getDisplayIndentGuides = cc11001100_hook("this.getDisplayIndentGuides", function () {
      return this.getOption("displayIndentGuides");
    }, "assign"), this.setDisplayIndentGuides = cc11001100_hook("this.setDisplayIndentGuides", function (e) {
      this.setOption("displayIndentGuides", e);
    }, "assign"), this.setShowPrintMargin = cc11001100_hook("this.setShowPrintMargin", function (e) {
      this.setOption("showPrintMargin", e);
    }, "assign"), this.getShowPrintMargin = cc11001100_hook("this.getShowPrintMargin", function () {
      return this.getOption("showPrintMargin");
    }, "assign"), this.setPrintMarginColumn = cc11001100_hook("this.setPrintMarginColumn", function (e) {
      this.setOption("printMarginColumn", e);
    }, "assign"), this.getPrintMarginColumn = cc11001100_hook("this.getPrintMarginColumn", function () {
      return this.getOption("printMarginColumn");
    }, "assign"), this.getShowGutter = cc11001100_hook("this.getShowGutter", function () {
      return this.getOption("showGutter");
    }, "assign"), this.setShowGutter = cc11001100_hook("this.setShowGutter", function (e) {
      return this.setOption("showGutter", e);
    }, "assign"), this.getFadeFoldWidgets = cc11001100_hook("this.getFadeFoldWidgets", function () {
      return this.getOption("fadeFoldWidgets");
    }, "assign"), this.setFadeFoldWidgets = cc11001100_hook("this.setFadeFoldWidgets", function (e) {
      this.setOption("fadeFoldWidgets", e);
    }, "assign"), this.setHighlightGutterLine = cc11001100_hook("this.setHighlightGutterLine", function (e) {
      this.setOption("highlightGutterLine", e);
    }, "assign"), this.getHighlightGutterLine = cc11001100_hook("this.getHighlightGutterLine", function () {
      return this.getOption("highlightGutterLine");
    }, "assign"), this.$updateGutterLineHighlight = cc11001100_hook("this.$updateGutterLineHighlight", function () {
      var e = cc11001100_hook("e", this.$cursorLayer.$pixelPos, "var-init"),
          t = cc11001100_hook("t", this.layerConfig.lineHeight, "var-init");

      if (this.session.getUseWrapMode()) {
        var n = cc11001100_hook("n", this.session.selection.getCursor(), "var-init");
        n.column = cc11001100_hook("n.column", 0, "assign"), e = cc11001100_hook("e", this.$cursorLayer.getPixelPosition(n, !0), "assign"), t *= cc11001100_hook("t", this.session.getRowLength(n.row), "assign");
      }

      this.$gutterLineHighlight.style.top = cc11001100_hook("this.$gutterLineHighlight.style.top", e.top - this.layerConfig.offset + "px", "assign"), this.$gutterLineHighlight.style.height = cc11001100_hook("this.$gutterLineHighlight.style.height", t + "px", "assign");
    }, "assign"), this.$updatePrintMargin = cc11001100_hook("this.$updatePrintMargin", function () {
      if (!this.$showPrintMargin && !this.$printMarginEl) return;

      if (!this.$printMarginEl) {
        var e = cc11001100_hook("e", i.createElement("div"), "var-init");
        e.className = cc11001100_hook("e.className", "ace_layer ace_print-margin-layer", "assign"), this.$printMarginEl = cc11001100_hook("this.$printMarginEl", i.createElement("div"), "assign"), this.$printMarginEl.className = cc11001100_hook("this.$printMarginEl.className", "ace_print-margin", "assign"), e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild);
      }

      var t = cc11001100_hook("t", this.$printMarginEl.style, "var-init");
      t.left = cc11001100_hook("t.left", Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", "assign"), t.visibility = cc11001100_hook("t.visibility", this.$showPrintMargin ? "visible" : "hidden", "assign"), this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
    }, "assign"), this.getContainerElement = cc11001100_hook("this.getContainerElement", function () {
      return this.container;
    }, "assign"), this.getMouseEventTarget = cc11001100_hook("this.getMouseEventTarget", function () {
      return this.scroller;
    }, "assign"), this.getTextAreaContainer = cc11001100_hook("this.getTextAreaContainer", function () {
      return this.container;
    }, "assign"), this.$moveTextAreaToCursor = cc11001100_hook("this.$moveTextAreaToCursor", function () {
      var e = cc11001100_hook("e", this.textarea.style, "var-init");

      if (!this.$keepTextAreaAtCursor) {
        e.left = cc11001100_hook("e.left", "-100px", "assign");
        return;
      }

      var t = cc11001100_hook("t", this.layerConfig, "var-init"),
          n = cc11001100_hook("n", this.$cursorLayer.$pixelPos.top, "var-init"),
          r = cc11001100_hook("r", this.$cursorLayer.$pixelPos.left, "var-init");
      n -= cc11001100_hook("n", t.offset, "assign");
      var i = cc11001100_hook("i", this.lineHeight, "var-init");

      if (n < 0 || n > t.height - i) {
        e.top = cc11001100_hook("e.top", e.left = cc11001100_hook("e.left", "0", "assign"), "assign");
        return;
      }

      var s = cc11001100_hook("s", this.characterWidth, "var-init");

      if (this.$composition) {
        var o = cc11001100_hook("o", this.textarea.value.replace(/^\x01+/, ""), "var-init");
        s *= cc11001100_hook("s", this.session.$getStringScreenWidth(o)[0] + 2, "assign"), i += cc11001100_hook("i", 2, "assign");
      }

      r -= cc11001100_hook("r", this.scrollLeft, "assign"), r > this.$size.scrollerWidth - s && (r = cc11001100_hook("r", this.$size.scrollerWidth - s, "assign")), r += cc11001100_hook("r", this.gutterWidth, "assign"), e.height = cc11001100_hook("e.height", i + "px", "assign"), e.width = cc11001100_hook("e.width", s + "px", "assign"), e.left = cc11001100_hook("e.left", Math.min(r, this.$size.scrollerWidth - s) + "px", "assign"), e.top = cc11001100_hook("e.top", Math.min(n, this.$size.height - i) + "px", "assign");
    }, "assign"), this.getFirstVisibleRow = cc11001100_hook("this.getFirstVisibleRow", function () {
      return this.layerConfig.firstRow;
    }, "assign"), this.getFirstFullyVisibleRow = cc11001100_hook("this.getFirstFullyVisibleRow", function () {
      return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
    }, "assign"), this.getLastFullyVisibleRow = cc11001100_hook("this.getLastFullyVisibleRow", function () {
      var e = cc11001100_hook("e", this.layerConfig, "var-init"),
          t = cc11001100_hook("t", e.lastRow, "var-init"),
          n = cc11001100_hook("n", this.session.documentToScreenRow(t, 0) * e.lineHeight, "var-init");
      return n - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t;
    }, "assign"), this.getLastVisibleRow = cc11001100_hook("this.getLastVisibleRow", function () {
      return this.layerConfig.lastRow;
    }, "assign"), this.$padding = cc11001100_hook("this.$padding", null, "assign"), this.setPadding = cc11001100_hook("this.setPadding", function (e) {
      this.$padding = cc11001100_hook("this.$padding", e, "assign"), this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
    }, "assign"), this.setScrollMargin = cc11001100_hook("this.setScrollMargin", function (e, t, n, r) {
      var i = cc11001100_hook("i", this.scrollMargin, "var-init");
      i.top = cc11001100_hook("i.top", e | 0, "assign"), i.bottom = cc11001100_hook("i.bottom", t | 0, "assign"), i.right = cc11001100_hook("i.right", r | 0, "assign"), i.left = cc11001100_hook("i.left", n | 0, "assign"), i.v = cc11001100_hook("i.v", i.top + i.bottom, "assign"), i.h = cc11001100_hook("i.h", i.left + i.right, "assign"), i.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-i.top), this.updateFull();
    }, "assign"), this.getHScrollBarAlwaysVisible = cc11001100_hook("this.getHScrollBarAlwaysVisible", function () {
      return this.$hScrollBarAlwaysVisible;
    }, "assign"), this.setHScrollBarAlwaysVisible = cc11001100_hook("this.setHScrollBarAlwaysVisible", function (e) {
      this.setOption("hScrollBarAlwaysVisible", e);
    }, "assign"), this.getVScrollBarAlwaysVisible = cc11001100_hook("this.getVScrollBarAlwaysVisible", function () {
      return this.$vScrollBarAlwaysVisible;
    }, "assign"), this.setVScrollBarAlwaysVisible = cc11001100_hook("this.setVScrollBarAlwaysVisible", function (e) {
      this.setOption("vScrollBarAlwaysVisible", e);
    }, "assign"), this.$updateScrollBarV = cc11001100_hook("this.$updateScrollBarV", function () {
      var e = cc11001100_hook("e", this.layerConfig.maxHeight, "var-init"),
          t = cc11001100_hook("t", this.$size.scrollerHeight, "var-init");
      !this.$maxLines && this.$scrollPastEnd && (e -= cc11001100_hook("e", (t - this.lineHeight) * this.$scrollPastEnd, "assign"), this.scrollTop > e - t && (e = cc11001100_hook("e", this.scrollTop + t, "assign"), this.scrollBarV.scrollTop = cc11001100_hook("this.scrollBarV.scrollTop", null, "assign"))), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
    }, "assign"), this.$updateScrollBarH = cc11001100_hook("this.$updateScrollBarH", function () {
      this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
    }, "assign"), this.$frozen = cc11001100_hook("this.$frozen", !1, "assign"), this.freeze = cc11001100_hook("this.freeze", function () {
      this.$frozen = cc11001100_hook("this.$frozen", !0, "assign");
    }, "assign"), this.unfreeze = cc11001100_hook("this.unfreeze", function () {
      this.$frozen = cc11001100_hook("this.$frozen", !1, "assign");
    }, "assign"), this.$renderChanges = cc11001100_hook("this.$renderChanges", function (e, t) {
      this.$changes && (e |= cc11001100_hook("e", this.$changes, "assign"), this.$changes = cc11001100_hook("this.$changes", 0, "assign"));

      if (!this.session || !this.container.offsetWidth || this.$frozen || !e && !t) {
        this.$changes |= cc11001100_hook("this.$changes", e, "assign");
        return;
      }

      if (this.$size.$dirty) return this.$changes |= cc11001100_hook("this.$changes", e, "assign"), this.onResize(!0);
      this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender"), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
      var n = cc11001100_hook("n", this.layerConfig, "var-init");

      if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
        e |= cc11001100_hook("e", this.$computeLayerConfig(), "assign");

        if (n.firstRow != this.layerConfig.firstRow && n.firstRowScreen == this.layerConfig.firstRowScreen) {
          var r = cc11001100_hook("r", this.scrollTop + (n.firstRow - this.layerConfig.firstRow) * this.lineHeight, "var-init");
          r > 0 && (this.scrollTop = cc11001100_hook("this.scrollTop", r, "assign"), e |= cc11001100_hook("e", this.CHANGE_SCROLL, "assign"), e |= cc11001100_hook("e", this.$computeLayerConfig(), "assign"));
        }

        n = cc11001100_hook("n", this.layerConfig, "assign"), this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), this.$gutterLayer.element.style.marginTop = cc11001100_hook("this.$gutterLayer.element.style.marginTop", -n.offset + "px", "assign"), this.content.style.marginTop = cc11001100_hook("this.content.style.marginTop", -n.offset + "px", "assign"), this.content.style.width = cc11001100_hook("this.content.style.width", n.width + 2 * this.$padding + "px", "assign"), this.content.style.height = cc11001100_hook("this.content.style.height", n.minHeight + "px", "assign");
      }

      e & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = cc11001100_hook("this.content.style.marginLeft", -this.scrollLeft + "px", "assign"), this.scroller.className = cc11001100_hook("this.scroller.className", this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left", "assign"));

      if (e & this.CHANGE_FULL) {
        this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this._signal("afterRender");
        return;
      }

      if (e & this.CHANGE_SCROLL) {
        e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(n) : this.$textLayer.scrollLines(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this.$moveTextAreaToCursor(), this._signal("afterRender");
        return;
      }

      e & this.CHANGE_TEXT ? (this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(n) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(n), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(n), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(n), this._signal("afterRender");
    }, "assign"), this.$autosize = cc11001100_hook("this.$autosize", function () {
      var e = cc11001100_hook("e", this.session.getScreenLength() * this.lineHeight, "var-init"),
          t = cc11001100_hook("t", this.$maxLines * this.lineHeight, "var-init"),
          n = cc11001100_hook("n", Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0), "var-init");
      this.$horizScroll && (n += cc11001100_hook("n", this.scrollBarH.getHeight(), "assign")), this.$maxPixelHeight && n > this.$maxPixelHeight && (n = cc11001100_hook("n", this.$maxPixelHeight, "assign"));
      var r = cc11001100_hook("r", n <= 2 * this.lineHeight, "var-init"),
          i = cc11001100_hook("i", !r && e > t, "var-init");

      if (n != this.desiredHeight || this.$size.height != this.desiredHeight || i != this.$vScroll) {
        i != this.$vScroll && (this.$vScroll = cc11001100_hook("this.$vScroll", i, "assign"), this.scrollBarV.setVisible(i));
        var s = cc11001100_hook("s", this.container.clientWidth, "var-init");
        this.container.style.height = cc11001100_hook("this.container.style.height", n + "px", "assign"), this.$updateCachedSize(!0, this.$gutterWidth, s, n), this.desiredHeight = cc11001100_hook("this.desiredHeight", n, "assign"), this._signal("autosize");
      }
    }, "assign"), this.$computeLayerConfig = cc11001100_hook("this.$computeLayerConfig", function () {
      var e = cc11001100_hook("e", this.session, "var-init"),
          t = cc11001100_hook("t", this.$size, "var-init"),
          n = cc11001100_hook("n", t.height <= 2 * this.lineHeight, "var-init"),
          r = cc11001100_hook("r", this.session.getScreenLength(), "var-init"),
          i = cc11001100_hook("i", r * this.lineHeight, "var-init"),
          s = cc11001100_hook("s", this.$getLongestLine(), "var-init"),
          o = cc11001100_hook("o", !n && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - s - 2 * this.$padding < 0), "var-init"),
          u = cc11001100_hook("u", this.$horizScroll !== o, "var-init");
      u && (this.$horizScroll = cc11001100_hook("this.$horizScroll", o, "assign"), this.scrollBarH.setVisible(o));
      var a = cc11001100_hook("a", this.$vScroll, "var-init");
      this.$maxLines && this.lineHeight > 1 && this.$autosize();
      var f = cc11001100_hook("f", this.scrollTop % this.lineHeight, "var-init"),
          l = cc11001100_hook("l", t.scrollerHeight + this.lineHeight, "var-init"),
          c = cc11001100_hook("c", !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0, "var-init");
      i += cc11001100_hook("i", c, "assign");
      var h = cc11001100_hook("h", this.scrollMargin, "var-init");
      this.session.setScrollTop(Math.max(-h.top, Math.min(this.scrollTop, i - t.scrollerHeight + h.bottom))), this.session.setScrollLeft(Math.max(-h.left, Math.min(this.scrollLeft, s + 2 * this.$padding - t.scrollerWidth + h.right)));
      var p = cc11001100_hook("p", !n && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - i + c < 0 || this.scrollTop > h.top), "var-init"),
          d = cc11001100_hook("d", a !== p, "var-init");
      d && (this.$vScroll = cc11001100_hook("this.$vScroll", p, "assign"), this.scrollBarV.setVisible(p));
      var v = cc11001100_hook("v", Math.ceil(l / this.lineHeight) - 1, "var-init"),
          m = cc11001100_hook("m", Math.max(0, Math.round((this.scrollTop - f) / this.lineHeight)), "var-init"),
          g = cc11001100_hook("g", m + v, "var-init"),
          y,
          b,
          w = cc11001100_hook("w", this.lineHeight, "var-init");
      m = cc11001100_hook("m", e.screenToDocumentRow(m, 0), "assign");
      var E = cc11001100_hook("E", e.getFoldLine(m), "var-init");
      E && (m = cc11001100_hook("m", E.start.row, "assign")), y = cc11001100_hook("y", e.documentToScreenRow(m, 0), "assign"), b = cc11001100_hook("b", e.getRowLength(m) * w, "assign"), g = cc11001100_hook("g", Math.min(e.screenToDocumentRow(g, 0), e.getLength() - 1), "assign"), l = cc11001100_hook("l", t.scrollerHeight + e.getRowLength(g) * w + b, "assign"), f = cc11001100_hook("f", this.scrollTop - y * w, "assign");
      var S = cc11001100_hook("S", 0, "var-init");
      if (this.layerConfig.width != s || u) S = cc11001100_hook("S", this.CHANGE_H_SCROLL, "assign");
      if (u || d) S = cc11001100_hook("S", this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), "assign"), this._signal("scrollbarVisibilityChanged"), d && (s = cc11001100_hook("s", this.$getLongestLine(), "assign"));
      return this.layerConfig = cc11001100_hook("this.layerConfig", {
        width: cc11001100_hook("width", s, "object-key-init"),
        padding: cc11001100_hook("padding", this.$padding, "object-key-init"),
        firstRow: cc11001100_hook("firstRow", m, "object-key-init"),
        firstRowScreen: cc11001100_hook("firstRowScreen", y, "object-key-init"),
        lastRow: cc11001100_hook("lastRow", g, "object-key-init"),
        lineHeight: cc11001100_hook("lineHeight", w, "object-key-init"),
        characterWidth: cc11001100_hook("characterWidth", this.characterWidth, "object-key-init"),
        minHeight: cc11001100_hook("minHeight", l, "object-key-init"),
        maxHeight: cc11001100_hook("maxHeight", i, "object-key-init"),
        offset: cc11001100_hook("offset", f, "object-key-init"),
        gutterOffset: cc11001100_hook("gutterOffset", w ? Math.max(0, Math.ceil((f + t.height - t.scrollerHeight) / w)) : 0, "object-key-init"),
        height: cc11001100_hook("height", this.$size.scrollerHeight, "object-key-init")
      }, "assign"), S;
    }, "assign"), this.$updateLines = cc11001100_hook("this.$updateLines", function () {
      if (!this.$changedLines) return;
      var e = cc11001100_hook("e", this.$changedLines.firstRow, "var-init"),
          t = cc11001100_hook("t", this.$changedLines.lastRow, "var-init");
      this.$changedLines = cc11001100_hook("this.$changedLines", null, "assign");
      var n = cc11001100_hook("n", this.layerConfig, "var-init");
      if (e > n.lastRow + 1) return;
      if (t < n.firstRow) return;

      if (t === Infinity) {
        this.$showGutter && this.$gutterLayer.update(n), this.$textLayer.update(n);
        return;
      }

      return this.$textLayer.updateLines(n, e, t), !0;
    }, "assign"), this.$getLongestLine = cc11001100_hook("this.$getLongestLine", function () {
      var e = cc11001100_hook("e", this.session.getScreenWidth(), "var-init");
      return this.showInvisibles && !this.session.$useWrapMode && (e += cc11001100_hook("e", 1, "assign")), this.$textLayer && e > this.$textLayer.MAX_LINE_LENGTH && (e = cc11001100_hook("e", this.$textLayer.MAX_LINE_LENGTH + 30, "assign")), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth));
    }, "assign"), this.updateFrontMarkers = cc11001100_hook("this.updateFrontMarkers", function () {
      this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
    }, "assign"), this.updateBackMarkers = cc11001100_hook("this.updateBackMarkers", function () {
      this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
    }, "assign"), this.addGutterDecoration = cc11001100_hook("this.addGutterDecoration", function (e, t) {
      this.$gutterLayer.addGutterDecoration(e, t);
    }, "assign"), this.removeGutterDecoration = cc11001100_hook("this.removeGutterDecoration", function (e, t) {
      this.$gutterLayer.removeGutterDecoration(e, t);
    }, "assign"), this.updateBreakpoints = cc11001100_hook("this.updateBreakpoints", function (e) {
      this.$loop.schedule(this.CHANGE_GUTTER);
    }, "assign"), this.setAnnotations = cc11001100_hook("this.setAnnotations", function (e) {
      this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER);
    }, "assign"), this.updateCursor = cc11001100_hook("this.updateCursor", function () {
      this.$loop.schedule(this.CHANGE_CURSOR);
    }, "assign"), this.hideCursor = cc11001100_hook("this.hideCursor", function () {
      this.$cursorLayer.hideCursor();
    }, "assign"), this.showCursor = cc11001100_hook("this.showCursor", function () {
      this.$cursorLayer.showCursor();
    }, "assign"), this.scrollSelectionIntoView = cc11001100_hook("this.scrollSelectionIntoView", function (e, t, n) {
      this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n);
    }, "assign"), this.scrollCursorIntoView = cc11001100_hook("this.scrollCursorIntoView", function (e, t, n) {
      if (this.$size.scrollerHeight === 0) return;
      var r = cc11001100_hook("r", this.$cursorLayer.getPixelPosition(e), "var-init"),
          i = cc11001100_hook("i", r.left, "var-init"),
          s = cc11001100_hook("s", r.top, "var-init"),
          o = cc11001100_hook("o", n && n.top || 0, "var-init"),
          u = cc11001100_hook("u", n && n.bottom || 0, "var-init"),
          a = cc11001100_hook("a", this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop, "var-init");
      a + o > s ? (t && a + o > s + this.lineHeight && (s -= cc11001100_hook("s", t * this.$size.scrollerHeight, "assign")), s === 0 && (s = cc11001100_hook("s", -this.scrollMargin.top, "assign")), this.session.setScrollTop(s)) : a + this.$size.scrollerHeight - u < s + this.lineHeight && (t && a + this.$size.scrollerHeight - u < s - this.lineHeight && (s += cc11001100_hook("s", t * this.$size.scrollerHeight, "assign")), this.session.setScrollTop(s + this.lineHeight - this.$size.scrollerHeight));
      var f = cc11001100_hook("f", this.scrollLeft, "var-init");
      f > i ? (i < this.$padding + 2 * this.layerConfig.characterWidth && (i = cc11001100_hook("i", -this.scrollMargin.left, "assign")), this.session.setScrollLeft(i)) : f + this.$size.scrollerWidth < i + this.characterWidth ? this.session.setScrollLeft(Math.round(i + this.characterWidth - this.$size.scrollerWidth)) : f <= this.$padding && i - f < this.characterWidth && this.session.setScrollLeft(0);
    }, "assign"), this.getScrollTop = cc11001100_hook("this.getScrollTop", function () {
      return this.session.getScrollTop();
    }, "assign"), this.getScrollLeft = cc11001100_hook("this.getScrollLeft", function () {
      return this.session.getScrollLeft();
    }, "assign"), this.getScrollTopRow = cc11001100_hook("this.getScrollTopRow", function () {
      return this.scrollTop / this.lineHeight;
    }, "assign"), this.getScrollBottomRow = cc11001100_hook("this.getScrollBottomRow", function () {
      return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
    }, "assign"), this.scrollToRow = cc11001100_hook("this.scrollToRow", function (e) {
      this.session.setScrollTop(e * this.lineHeight);
    }, "assign"), this.alignCursor = cc11001100_hook("this.alignCursor", function (e, t) {
      typeof e == "number" && (e = cc11001100_hook("e", {
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }, "assign"));
      var n = cc11001100_hook("n", this.$cursorLayer.getPixelPosition(e), "var-init"),
          r = cc11001100_hook("r", this.$size.scrollerHeight - this.lineHeight, "var-init"),
          i = cc11001100_hook("i", n.top - r * (t || 0), "var-init");
      return this.session.setScrollTop(i), i;
    }, "assign"), this.STEPS = cc11001100_hook("this.STEPS", 8, "assign"), this.$calcSteps = cc11001100_hook("this.$calcSteps", function (e, t) {
      var n = cc11001100_hook("n", 0, "var-init"),
          r = cc11001100_hook("r", this.STEPS, "var-init"),
          i = cc11001100_hook("i", [], "var-init"),
          s = function (e, t, n) {
        return n * (Math.pow(e - 1, 3) + 1) + t;
      };

      for (n = cc11001100_hook("n", 0, "assign"); n < r; ++n) i.push(s(n / this.STEPS, e, t - e));

      return i;
    }, "assign"), this.scrollToLine = cc11001100_hook("this.scrollToLine", function (e, t, n, r) {
      var i = cc11001100_hook("i", this.$cursorLayer.getPixelPosition({
        row: cc11001100_hook("row", e, "object-key-init"),
        column: cc11001100_hook("column", 0, "object-key-init")
      }), "var-init"),
          s = cc11001100_hook("s", i.top, "var-init");
      t && (s -= cc11001100_hook("s", this.$size.scrollerHeight / 2, "assign"));
      var o = cc11001100_hook("o", this.scrollTop, "var-init");
      this.session.setScrollTop(s), n !== !1 && this.animateScrolling(o, r);
    }, "assign"), this.animateScrolling = cc11001100_hook("this.animateScrolling", function (e, t) {
      var n = cc11001100_hook("n", this.scrollTop, "var-init");
      if (!this.$animatedScroll) return;
      var r = cc11001100_hook("r", this, "var-init");
      if (e == n) return;

      if (this.$scrollAnimation) {
        var i = cc11001100_hook("i", this.$scrollAnimation.steps, "var-init");

        if (i.length) {
          e = cc11001100_hook("e", i[0], "assign");
          if (e == n) return;
        }
      }

      var s = cc11001100_hook("s", r.$calcSteps(e, n), "var-init");
      this.$scrollAnimation = cc11001100_hook("this.$scrollAnimation", {
        from: cc11001100_hook("from", e, "object-key-init"),
        to: cc11001100_hook("to", n, "object-key-init"),
        steps: cc11001100_hook("steps", s, "object-key-init")
      }, "assign"), clearInterval(this.$timer), r.session.setScrollTop(s.shift()), r.session.$scrollTop = cc11001100_hook("r.session.$scrollTop", n, "assign"), this.$timer = cc11001100_hook("this.$timer", setInterval(function () {
        s.length ? (r.session.setScrollTop(s.shift()), r.session.$scrollTop = cc11001100_hook("r.session.$scrollTop", n, "assign")) : n != null ? (r.session.$scrollTop = cc11001100_hook("r.session.$scrollTop", -1, "assign"), r.session.setScrollTop(n), n = cc11001100_hook("n", null, "assign")) : (r.$timer = cc11001100_hook("r.$timer", clearInterval(r.$timer), "assign"), r.$scrollAnimation = cc11001100_hook("r.$scrollAnimation", null, "assign"), t && t());
      }, 10), "assign");
    }, "assign"), this.scrollToY = cc11001100_hook("this.scrollToY", function (e) {
      this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = cc11001100_hook("this.scrollTop", e, "assign"));
    }, "assign"), this.scrollToX = cc11001100_hook("this.scrollToX", function (e) {
      this.scrollLeft !== e && (this.scrollLeft = cc11001100_hook("this.scrollLeft", e, "assign")), this.$loop.schedule(this.CHANGE_H_SCROLL);
    }, "assign"), this.scrollTo = cc11001100_hook("this.scrollTo", function (e, t) {
      this.session.setScrollTop(t), this.session.setScrollLeft(t);
    }, "assign"), this.scrollBy = cc11001100_hook("this.scrollBy", function (e, t) {
      t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e);
    }, "assign"), this.isScrollableBy = cc11001100_hook("this.isScrollableBy", function (e, t) {
      if (t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top) return !0;
      if (t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom) return !0;
      if (e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left) return !0;
      if (e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right) return !0;
    }, "assign"), this.pixelToScreenCoordinates = cc11001100_hook("this.pixelToScreenCoordinates", function (e, t) {
      var n;

      if (this.$hasCssTransforms) {
        n = cc11001100_hook("n", {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        }, "assign");
        var r = cc11001100_hook("r", this.$fontMetrics.transformCoordinates([e, t]), "var-init");
        e = cc11001100_hook("e", r[1] - this.gutterWidth, "assign"), t = cc11001100_hook("t", r[0], "assign");
      } else n = cc11001100_hook("n", this.scroller.getBoundingClientRect(), "assign");

      var i = cc11001100_hook("i", e + this.scrollLeft - n.left - this.$padding, "var-init"),
          s = cc11001100_hook("s", i / this.characterWidth, "var-init"),
          o = cc11001100_hook("o", Math.floor((t + this.scrollTop - n.top) / this.lineHeight), "var-init"),
          u = cc11001100_hook("u", this.$blockCursor ? Math.floor(s) : Math.round(s), "var-init");
      return {
        row: cc11001100_hook("row", o, "object-key-init"),
        column: cc11001100_hook("column", u, "object-key-init"),
        side: cc11001100_hook("side", s - u > 0 ? 1 : -1, "object-key-init"),
        offsetX: cc11001100_hook("offsetX", i, "object-key-init")
      };
    }, "assign"), this.screenToTextCoordinates = cc11001100_hook("this.screenToTextCoordinates", function (e, t) {
      var n;

      if (this.$hasCssTransforms) {
        n = cc11001100_hook("n", {
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init")
        }, "assign");
        var r = cc11001100_hook("r", this.$fontMetrics.transformCoordinates([e, t]), "var-init");
        e = cc11001100_hook("e", r[1] - this.gutterWidth, "assign"), t = cc11001100_hook("t", r[0], "assign");
      } else n = cc11001100_hook("n", this.scroller.getBoundingClientRect(), "assign");

      var i = cc11001100_hook("i", e + this.scrollLeft - n.left - this.$padding, "var-init"),
          s = cc11001100_hook("s", i / this.characterWidth, "var-init"),
          o = cc11001100_hook("o", this.$blockCursor ? Math.floor(s) : Math.round(s), "var-init"),
          u = cc11001100_hook("u", (t + this.scrollTop - n.top) / this.lineHeight, "var-init");
      return this.session.screenToDocumentPosition(u, Math.max(o, 0), i);
    }, "assign"), this.textToScreenCoordinates = cc11001100_hook("this.textToScreenCoordinates", function (e, t) {
      var n = cc11001100_hook("n", this.scroller.getBoundingClientRect(), "var-init"),
          r = cc11001100_hook("r", this.session.documentToScreenPosition(e, t), "var-init"),
          i = cc11001100_hook("i", this.$padding + (this.session.$bidiHandler.isBidiRow(r.row, e) ? this.session.$bidiHandler.getPosLeft(r.column) : Math.round(r.column * this.characterWidth)), "var-init"),
          s = cc11001100_hook("s", r.row * this.lineHeight, "var-init");
      return {
        pageX: cc11001100_hook("pageX", n.left + i - this.scrollLeft, "object-key-init"),
        pageY: cc11001100_hook("pageY", n.top + s - this.scrollTop, "object-key-init")
      };
    }, "assign"), this.visualizeFocus = cc11001100_hook("this.visualizeFocus", function () {
      i.addCssClass(this.container, "ace_focus");
    }, "assign"), this.visualizeBlur = cc11001100_hook("this.visualizeBlur", function () {
      i.removeCssClass(this.container, "ace_focus");
    }, "assign"), this.showComposition = cc11001100_hook("this.showComposition", function (e) {
      this.$composition || (this.$composition = cc11001100_hook("this.$composition", {
        keepTextAreaAtCursor: cc11001100_hook("keepTextAreaAtCursor", this.$keepTextAreaAtCursor, "object-key-init"),
        cssText: cc11001100_hook("cssText", this.textarea.style.cssText, "object-key-init")
      }, "assign")), this.$keepTextAreaAtCursor = cc11001100_hook("this.$keepTextAreaAtCursor", !0, "assign"), i.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = cc11001100_hook("this.textarea.style.cssText", "", "assign"), this.$moveTextAreaToCursor();
    }, "assign"), this.setCompositionText = cc11001100_hook("this.setCompositionText", function (e) {
      this.$moveTextAreaToCursor();
    }, "assign"), this.hideComposition = cc11001100_hook("this.hideComposition", function () {
      if (!this.$composition) return;
      i.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = cc11001100_hook("this.$keepTextAreaAtCursor", this.$composition.keepTextAreaAtCursor, "assign"), this.textarea.style.cssText = cc11001100_hook("this.textarea.style.cssText", this.$composition.cssText, "assign"), this.$composition = cc11001100_hook("this.$composition", null, "assign");
    }, "assign"), this.setTheme = cc11001100_hook("this.setTheme", function (e, t) {
      function o(r) {
        cc11001100_hook("r", r, "function-parameter");
        if (n.$themeId != e) return t && t();
        if (!r || !r.cssClass) throw new Error("couldn't load module " + e + " or it didn't call define");
        r.$id && (n.$themeId = cc11001100_hook("n.$themeId", r.$id, "assign")), i.importCssString(r.cssText, r.cssClass, n.container), n.theme && i.removeCssClass(n.container, n.theme.cssClass);
        var s = cc11001100_hook("s", "padding" in r ? r.padding : "padding" in (n.theme || {}) ? 4 : n.$padding, "var-init");
        n.$padding && s != n.$padding && n.setPadding(s), n.$theme = cc11001100_hook("n.$theme", r.cssClass, "assign"), n.theme = cc11001100_hook("n.theme", r, "assign"), i.addCssClass(n.container, r.cssClass), i.setCssClass(n.container, "ace_dark", r.isDark), n.$size && (n.$size.width = cc11001100_hook("n.$size.width", 0, "assign"), n.$updateSizeAsync()), n._dispatchEvent("themeLoaded", {
          theme: cc11001100_hook("theme", r, "object-key-init")
        }), t && t();
      }

      var n = cc11001100_hook("n", this, "var-init");
      this.$themeId = cc11001100_hook("this.$themeId", e, "assign"), n._dispatchEvent("themeChange", {
        theme: cc11001100_hook("theme", e, "object-key-init")
      });

      if (!e || typeof e == "string") {
        var r = cc11001100_hook("r", e || this.$options.theme.initialValue, "var-init");
        s.loadModule(["theme", r], o);
      } else o(e);
    }, "assign"), this.getTheme = cc11001100_hook("this.getTheme", function () {
      return this.$themeId;
    }, "assign"), this.setStyle = cc11001100_hook("this.setStyle", function (e, t) {
      i.setCssClass(this.container, e, t !== !1);
    }, "assign"), this.unsetStyle = cc11001100_hook("this.unsetStyle", function (e) {
      i.removeCssClass(this.container, e);
    }, "assign"), this.setCursorStyle = cc11001100_hook("this.setCursorStyle", function (e) {
      this.scroller.style.cursor != e && (this.scroller.style.cursor = cc11001100_hook("this.scroller.style.cursor", e, "assign"));
    }, "assign"), this.setMouseCursor = cc11001100_hook("this.setMouseCursor", function (e) {
      this.scroller.style.cursor = cc11001100_hook("this.scroller.style.cursor", e, "assign");
    }, "assign"), this.attachToShadowRoot = cc11001100_hook("this.attachToShadowRoot", function () {
      i.importCssString(m, "ace_editor.css", this.container);
    }, "assign"), this.destroy = cc11001100_hook("this.destroy", function () {
      this.$textLayer.destroy(), this.$cursorLayer.destroy();
    }, "assign");
  }).call(g.prototype), s.defineOptions(g.prototype, "renderer", {
    animatedScroll: {
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    showInvisibles: {
      set: function (e) {
        this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT);
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    showPrintMargin: {
      set: function () {
        this.$updatePrintMargin();
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    printMarginColumn: {
      set: function () {
        this.$updatePrintMargin();
      },
      initialValue: cc11001100_hook("initialValue", 80, "object-key-init")
    },
    printMargin: {
      set: function (e) {
        typeof e == "number" && (this.$printMarginColumn = cc11001100_hook("this.$printMarginColumn", e, "assign")), this.$showPrintMargin = cc11001100_hook("this.$showPrintMargin", !!e, "assign"), this.$updatePrintMargin();
      },
      get: function () {
        return this.$showPrintMargin && this.$printMarginColumn;
      }
    },
    showGutter: {
      set: function (e) {
        this.$gutter.style.display = cc11001100_hook("this.$gutter.style.display", e ? "block" : "none", "assign"), this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize();
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    fadeFoldWidgets: {
      set: function (e) {
        i.setCssClass(this.$gutter, "ace_fade-fold-widgets", e);
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    showFoldWidgets: {
      set: function (e) {
        this.$gutterLayer.setShowFoldWidgets(e);
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    showLineNumbers: {
      set: function (e) {
        this.$gutterLayer.setShowLineNumbers(e), this.$loop.schedule(this.CHANGE_GUTTER);
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    displayIndentGuides: {
      set: function (e) {
        this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT);
      },
      initialValue: cc11001100_hook("initialValue", !0, "object-key-init")
    },
    highlightGutterLine: {
      set: function (e) {
        if (!this.$gutterLineHighlight) {
          this.$gutterLineHighlight = cc11001100_hook("this.$gutterLineHighlight", i.createElement("div"), "assign"), this.$gutterLineHighlight.className = cc11001100_hook("this.$gutterLineHighlight.className", "ace_gutter-active-line", "assign"), this.$gutter.appendChild(this.$gutterLineHighlight);
          return;
        }

        this.$gutterLineHighlight.style.display = cc11001100_hook("this.$gutterLineHighlight.style.display", e ? "" : "none", "assign"), this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight();
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init"),
      value: cc11001100_hook("value", !0, "object-key-init")
    },
    hScrollBarAlwaysVisible: {
      set: function (e) {
        (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    vScrollBarAlwaysVisible: {
      set: function (e) {
        (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
      },
      initialValue: cc11001100_hook("initialValue", !1, "object-key-init")
    },
    fontSize: {
      set: function (e) {
        typeof e == "number" && (e += cc11001100_hook("e", "px", "assign")), this.container.style.fontSize = cc11001100_hook("this.container.style.fontSize", e, "assign"), this.updateFontSize();
      },
      initialValue: cc11001100_hook("initialValue", 12, "object-key-init")
    },
    fontFamily: {
      set: function (e) {
        this.container.style.fontFamily = cc11001100_hook("this.container.style.fontFamily", e, "assign"), this.updateFontSize();
      }
    },
    maxLines: {
      set: function (e) {
        this.updateFull();
      }
    },
    minLines: {
      set: function (e) {
        this.updateFull();
      }
    },
    maxPixelHeight: {
      set: function (e) {
        this.updateFull();
      },
      initialValue: cc11001100_hook("initialValue", 0, "object-key-init")
    },
    scrollPastEnd: {
      set: function (e) {
        e = cc11001100_hook("e", +e || 0, "assign");
        if (this.$scrollPastEnd == e) return;
        this.$scrollPastEnd = cc11001100_hook("this.$scrollPastEnd", e, "assign"), this.$loop.schedule(this.CHANGE_SCROLL);
      },
      initialValue: cc11001100_hook("initialValue", 0, "object-key-init"),
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    },
    fixedWidthGutter: {
      set: function (e) {
        this.$gutterLayer.$fixedWidth = cc11001100_hook("this.$gutterLayer.$fixedWidth", !!e, "assign"), this.$loop.schedule(this.CHANGE_GUTTER);
      }
    },
    theme: {
      set: function (e) {
        this.setTheme(e);
      },
      get: function () {
        return this.$themeId || this.theme;
      },
      initialValue: cc11001100_hook("initialValue", "./theme/textmate", "object-key-init"),
      handlesSet: cc11001100_hook("handlesSet", !0, "object-key-init")
    },
    hasCssTransforms: {}
  }), t.VirtualRenderer = cc11001100_hook("t.VirtualRenderer", g, "assign");
}), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function (e, t, n) {
  "use strict";

  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "importScripts('" + i.qualifyURL(e) + "');", "var-init");

    try {
      return new Blob([t], {
        type: cc11001100_hook("type", "application/javascript", "object-key-init")
      });
    } catch (n) {
      var r = cc11001100_hook("r", window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, "var-init"),
          s = cc11001100_hook("s", new r(), "var-init");
      return s.append(t), s.getBlob("application/javascript");
    }
  }

  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (typeof Worker == "undefined") return {
      postMessage: function () {},
      terminate: function () {}
    };
    var t = cc11001100_hook("t", u(e), "var-init"),
        n = cc11001100_hook("n", window.URL || window.webkitURL, "var-init"),
        r = cc11001100_hook("r", n.createObjectURL(t), "var-init");
    return new Worker(r);
  }

  var r = cc11001100_hook("r", e("../lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("../lib/net"), "var-init"),
      s = cc11001100_hook("s", e("../lib/event_emitter").EventEmitter, "var-init"),
      o = cc11001100_hook("o", e("../config"), "var-init"),
      f = function (t, n, r, i, s) {
    this.$sendDeltaQueue = cc11001100_hook("this.$sendDeltaQueue", this.$sendDeltaQueue.bind(this), "assign"), this.changeListener = cc11001100_hook("this.changeListener", this.changeListener.bind(this), "assign"), this.onMessage = cc11001100_hook("this.onMessage", this.onMessage.bind(this), "assign"), e.nameToUrl && !e.toUrl && (e.toUrl = cc11001100_hook("e.toUrl", e.nameToUrl, "assign"));
    if (o.get("packaged") || !e.toUrl) i = cc11001100_hook("i", i || o.moduleUrl(n, "worker"), "assign");else {
      var u = cc11001100_hook("u", this.$normalizePath, "var-init");
      i = cc11001100_hook("i", i || u(e.toUrl("ace/worker/worker.js", null, "_")), "assign");
      var f = cc11001100_hook("f", {}, "var-init");
      t.forEach(function (t) {
        f[t] = cc11001100_hook("f[t]", u(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, "")), "assign");
      });
    }
    this.$worker = cc11001100_hook("this.$worker", a(i), "assign"), s && this.send("importScripts", s), this.$worker.postMessage({
      init: cc11001100_hook("init", !0, "object-key-init"),
      tlns: cc11001100_hook("tlns", f, "object-key-init"),
      module: cc11001100_hook("module", n, "object-key-init"),
      classname: cc11001100_hook("classname", r, "object-key-init")
    }), this.callbackId = cc11001100_hook("this.callbackId", 1, "assign"), this.callbacks = cc11001100_hook("this.callbacks", {}, "assign"), this.$worker.onmessage = cc11001100_hook("this.$worker.onmessage", this.onMessage, "assign");
  };

  (function () {
    r.implement(this, s), this.onMessage = cc11001100_hook("this.onMessage", function (e) {
      var t = cc11001100_hook("t", e.data, "var-init");

      switch (t.type) {
        case "event":
          this._signal(t.name, {
            data: cc11001100_hook("data", t.data, "object-key-init")
          });

          break;

        case "call":
          var n = cc11001100_hook("n", this.callbacks[t.id], "var-init");
          n && (n(t.data), delete this.callbacks[t.id]);
          break;

        case "error":
          this.reportError(t.data);
          break;

        case "log":
          window.console && console.log && console.log.apply(console, t.data);
      }
    }, "assign"), this.reportError = cc11001100_hook("this.reportError", function (e) {
      window.console && console.error && console.error(e);
    }, "assign"), this.$normalizePath = cc11001100_hook("this.$normalizePath", function (e) {
      return i.qualifyURL(e);
    }, "assign"), this.terminate = cc11001100_hook("this.terminate", function () {
      this._signal("terminate", {}), this.deltaQueue = cc11001100_hook("this.deltaQueue", null, "assign"), this.$worker.terminate(), this.$worker = cc11001100_hook("this.$worker", null, "assign"), this.$doc && this.$doc.off("change", this.changeListener), this.$doc = cc11001100_hook("this.$doc", null, "assign");
    }, "assign"), this.send = cc11001100_hook("this.send", function (e, t) {
      this.$worker.postMessage({
        command: cc11001100_hook("command", e, "object-key-init"),
        args: cc11001100_hook("args", t, "object-key-init")
      });
    }, "assign"), this.call = cc11001100_hook("this.call", function (e, t, n) {
      if (n) {
        var r = cc11001100_hook("r", this.callbackId++, "var-init");
        this.callbacks[r] = cc11001100_hook("this.callbacks[r]", n, "assign"), t.push(r);
      }

      this.send(e, t);
    }, "assign"), this.emit = cc11001100_hook("this.emit", function (e, t) {
      try {
        this.$worker.postMessage({
          event: cc11001100_hook("event", e, "object-key-init"),
          data: {
            data: cc11001100_hook("data", t.data, "object-key-init")
          }
        });
      } catch (n) {
        console.error(n.stack);
      }
    }, "assign"), this.attachToDocument = cc11001100_hook("this.attachToDocument", function (e) {
      this.$doc && this.terminate(), this.$doc = cc11001100_hook("this.$doc", e, "assign"), this.call("setValue", [e.getValue()]), e.on("change", this.changeListener);
    }, "assign"), this.changeListener = cc11001100_hook("this.changeListener", function (e) {
      this.deltaQueue || (this.deltaQueue = cc11001100_hook("this.deltaQueue", [], "assign"), setTimeout(this.$sendDeltaQueue, 0)), e.action == "insert" ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end);
    }, "assign"), this.$sendDeltaQueue = cc11001100_hook("this.$sendDeltaQueue", function () {
      var e = cc11001100_hook("e", this.deltaQueue, "var-init");
      if (!e) return;
      this.deltaQueue = cc11001100_hook("this.deltaQueue", null, "assign"), e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {
        data: cc11001100_hook("data", e, "object-key-init")
      });
    }, "assign");
  }).call(f.prototype);

  var l = function (e, t, n) {
    this.$sendDeltaQueue = cc11001100_hook("this.$sendDeltaQueue", this.$sendDeltaQueue.bind(this), "assign"), this.changeListener = cc11001100_hook("this.changeListener", this.changeListener.bind(this), "assign"), this.callbackId = cc11001100_hook("this.callbackId", 1, "assign"), this.callbacks = cc11001100_hook("this.callbacks", {}, "assign"), this.messageBuffer = cc11001100_hook("this.messageBuffer", [], "assign");
    var r = cc11001100_hook("r", null, "var-init"),
        i = cc11001100_hook("i", !1, "var-init"),
        u = cc11001100_hook("u", Object.create(s), "var-init"),
        a = cc11001100_hook("a", this, "var-init");
    this.$worker = cc11001100_hook("this.$worker", {}, "assign"), this.$worker.terminate = cc11001100_hook("this.$worker.terminate", function () {}, "assign"), this.$worker.postMessage = cc11001100_hook("this.$worker.postMessage", function (e) {
      a.messageBuffer.push(e), r && (i ? setTimeout(f) : f());
    }, "assign"), this.setEmitSync = cc11001100_hook("this.setEmitSync", function (e) {
      i = cc11001100_hook("i", e, "assign");
    }, "assign");

    var f = function () {
      var e = cc11001100_hook("e", a.messageBuffer.shift(), "var-init");
      e.command ? r[e.command].apply(r, e.args) : e.event && u._signal(e.event, e.data);
    };

    u.postMessage = cc11001100_hook("u.postMessage", function (e) {
      a.onMessage({
        data: cc11001100_hook("data", e, "object-key-init")
      });
    }, "assign"), u.callback = cc11001100_hook("u.callback", function (e, t) {
      this.postMessage({
        type: cc11001100_hook("type", "call", "object-key-init"),
        id: cc11001100_hook("id", t, "object-key-init"),
        data: cc11001100_hook("data", e, "object-key-init")
      });
    }, "assign"), u.emit = cc11001100_hook("u.emit", function (e, t) {
      this.postMessage({
        type: cc11001100_hook("type", "event", "object-key-init"),
        name: cc11001100_hook("name", e, "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init")
      });
    }, "assign"), o.loadModule(["worker", t], function (e) {
      r = cc11001100_hook("r", new e[n](u), "assign");

      while (a.messageBuffer.length) f();
    });
  };

  l.prototype = cc11001100_hook("l.prototype", f.prototype, "assign"), t.UIWorkerClient = cc11001100_hook("t.UIWorkerClient", l, "assign"), t.WorkerClient = cc11001100_hook("t.WorkerClient", f, "assign"), t.createWorker = cc11001100_hook("t.createWorker", a, "assign");
}), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("./range").Range, "var-init"),
      i = cc11001100_hook("i", e("./lib/event_emitter").EventEmitter, "var-init"),
      s = cc11001100_hook("s", e("./lib/oop"), "var-init"),
      o = function (e, t, n, r, i, s) {
    var o = cc11001100_hook("o", this, "var-init");
    this.length = cc11001100_hook("this.length", t, "assign"), this.session = cc11001100_hook("this.session", e, "assign"), this.doc = cc11001100_hook("this.doc", e.getDocument(), "assign"), this.mainClass = cc11001100_hook("this.mainClass", i, "assign"), this.othersClass = cc11001100_hook("this.othersClass", s, "assign"), this.$onUpdate = cc11001100_hook("this.$onUpdate", this.onUpdate.bind(this), "assign"), this.doc.on("change", this.$onUpdate), this.$others = cc11001100_hook("this.$others", r, "assign"), this.$onCursorChange = cc11001100_hook("this.$onCursorChange", function () {
      setTimeout(function () {
        o.onCursorChange();
      });
    }, "assign"), this.$pos = cc11001100_hook("this.$pos", n, "assign");
    var u = cc11001100_hook("u", e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {
      length: cc11001100_hook("length", -1, "object-key-init")
    }, "var-init");
    this.$undoStackDepth = cc11001100_hook("this.$undoStackDepth", u.length, "assign"), this.setup(), e.selection.on("changeCursor", this.$onCursorChange);
  };

  (function () {
    s.implement(this, i), this.setup = cc11001100_hook("this.setup", function () {
      var e = cc11001100_hook("e", this, "var-init"),
          t = cc11001100_hook("t", this.doc, "var-init"),
          n = cc11001100_hook("n", this.session, "var-init");
      this.selectionBefore = cc11001100_hook("this.selectionBefore", n.selection.toJSON(), "assign"), n.selection.inMultiSelectMode && n.selection.toSingleRange(), this.pos = cc11001100_hook("this.pos", t.createAnchor(this.$pos.row, this.$pos.column), "assign");
      var i = cc11001100_hook("i", this.pos, "var-init");
      i.$insertRight = cc11001100_hook("i.$insertRight", !0, "assign"), i.detach(), i.markerId = cc11001100_hook("i.markerId", n.addMarker(new r(i.row, i.column, i.row, i.column + this.length), this.mainClass, null, !1), "assign"), this.others = cc11001100_hook("this.others", [], "assign"), this.$others.forEach(function (n) {
        var r = cc11001100_hook("r", t.createAnchor(n.row, n.column), "var-init");
        r.$insertRight = cc11001100_hook("r.$insertRight", !0, "assign"), r.detach(), e.others.push(r);
      }), n.setUndoSelect(!1);
    }, "assign"), this.showOtherMarkers = cc11001100_hook("this.showOtherMarkers", function () {
      if (this.othersActive) return;
      var e = cc11001100_hook("e", this.session, "var-init"),
          t = cc11001100_hook("t", this, "var-init");
      this.othersActive = cc11001100_hook("this.othersActive", !0, "assign"), this.others.forEach(function (n) {
        n.markerId = cc11001100_hook("n.markerId", e.addMarker(new r(n.row, n.column, n.row, n.column + t.length), t.othersClass, null, !1), "assign");
      });
    }, "assign"), this.hideOtherMarkers = cc11001100_hook("this.hideOtherMarkers", function () {
      if (!this.othersActive) return;
      this.othersActive = cc11001100_hook("this.othersActive", !1, "assign");

      for (var e = cc11001100_hook("e", 0, "var-init"); e < this.others.length; e++) this.session.removeMarker(this.others[e].markerId);
    }, "assign"), this.onUpdate = cc11001100_hook("this.onUpdate", function (e) {
      if (this.$updating) return this.updateAnchors(e);
      var t = cc11001100_hook("t", e, "var-init");
      if (t.start.row !== t.end.row) return;
      if (t.start.row !== this.pos.row) return;
      this.$updating = cc11001100_hook("this.$updating", !0, "assign");
      var n = cc11001100_hook("n", e.action === "insert" ? t.end.column - t.start.column : t.start.column - t.end.column, "var-init"),
          i = cc11001100_hook("i", t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1, "var-init"),
          s = cc11001100_hook("s", t.start.column - this.pos.column, "var-init");
      this.updateAnchors(e), i && (this.length += cc11001100_hook("this.length", n, "assign"));
      if (i && !this.session.$fromUndo) if (e.action === "insert") for (var o = cc11001100_hook("o", this.others.length - 1, "var-init"); o >= 0; o--) {
        var u = cc11001100_hook("u", this.others[o], "var-init"),
            a = cc11001100_hook("a", {
          row: cc11001100_hook("row", u.row, "object-key-init"),
          column: cc11001100_hook("column", u.column + s, "object-key-init")
        }, "var-init");
        this.doc.insertMergedLines(a, e.lines);
      } else if (e.action === "remove") for (var o = cc11001100_hook("o", this.others.length - 1, "var-init"); o >= 0; o--) {
        var u = cc11001100_hook("u", this.others[o], "var-init"),
            a = cc11001100_hook("a", {
          row: cc11001100_hook("row", u.row, "object-key-init"),
          column: cc11001100_hook("column", u.column + s, "object-key-init")
        }, "var-init");
        this.doc.remove(new r(a.row, a.column, a.row, a.column - n));
      }
      this.$updating = cc11001100_hook("this.$updating", !1, "assign"), this.updateMarkers();
    }, "assign"), this.updateAnchors = cc11001100_hook("this.updateAnchors", function (e) {
      this.pos.onChange(e);

      for (var t = cc11001100_hook("t", this.others.length, "var-init"); t--;) this.others[t].onChange(e);

      this.updateMarkers();
    }, "assign"), this.updateMarkers = cc11001100_hook("this.updateMarkers", function () {
      if (this.$updating) return;

      var e = cc11001100_hook("e", this, "var-init"),
          t = cc11001100_hook("t", this.session, "var-init"),
          n = function (n, i) {
        t.removeMarker(n.markerId), n.markerId = cc11001100_hook("n.markerId", t.addMarker(new r(n.row, n.column, n.row, n.column + e.length), i, null, !1), "assign");
      };

      n(this.pos, this.mainClass);

      for (var i = cc11001100_hook("i", this.others.length, "var-init"); i--;) n(this.others[i], this.othersClass);
    }, "assign"), this.onCursorChange = cc11001100_hook("this.onCursorChange", function (e) {
      if (this.$updating || !this.session) return;
      var t = cc11001100_hook("t", this.session.selection.getCursor(), "var-init");
      t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e));
    }, "assign"), this.detach = cc11001100_hook("this.detach", function () {
      this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = cc11001100_hook("this.session", null, "assign");
    }, "assign"), this.cancel = cc11001100_hook("this.cancel", function () {
      if (this.$undoStackDepth === -1) return;
      var e = cc11001100_hook("e", this.session.getUndoManager(), "var-init"),
          t = cc11001100_hook("t", (e.$undoStack || e.$undostack).length - this.$undoStackDepth, "var-init");

      for (var n = cc11001100_hook("n", 0, "var-init"); n < t; n++) e.undo(this.session, !0);

      this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
    }, "assign");
  }).call(o.prototype), t.PlaceHolder = cc11001100_hook("t.PlaceHolder", o, "assign");
}), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function (e, t, n) {
  function s(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.row == t.row && e.column == t.column;
  }

  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.domEvent, "var-init"),
        n = cc11001100_hook("n", t.altKey, "var-init"),
        o = cc11001100_hook("o", t.shiftKey, "var-init"),
        u = cc11001100_hook("u", t.ctrlKey, "var-init"),
        a = cc11001100_hook("a", e.getAccelKey(), "var-init"),
        f = cc11001100_hook("f", e.getButton(), "var-init");
    u && i.isMac && (f = cc11001100_hook("f", t.button, "assign"));

    if (e.editor.inMultiSelectMode && f == 2) {
      e.editor.textInput.onContextMenu(e.domEvent);
      return;
    }

    if (!u && !n && !a) {
      f === 0 && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode();
      return;
    }

    if (f !== 0) return;

    var l = cc11001100_hook("l", e.editor, "var-init"),
        c = cc11001100_hook("c", l.selection, "var-init"),
        h = cc11001100_hook("h", l.inMultiSelectMode, "var-init"),
        p = cc11001100_hook("p", e.getDocumentPosition(), "var-init"),
        d = cc11001100_hook("d", c.getCursor(), "var-init"),
        v = cc11001100_hook("v", e.inSelection() || c.isEmpty() && s(p, d), "var-init"),
        m = cc11001100_hook("m", e.x, "var-init"),
        g = cc11001100_hook("g", e.y, "var-init"),
        y = function (e) {
      m = cc11001100_hook("m", e.clientX, "assign"), g = cc11001100_hook("g", e.clientY, "assign");
    },
        b = cc11001100_hook("b", l.session, "var-init"),
        w = cc11001100_hook("w", l.renderer.pixelToScreenCoordinates(m, g), "var-init"),
        E = cc11001100_hook("E", w, "var-init"),
        S;

    if (l.$mouseHandler.$enableJumpToDef) u && n || a && n ? S = cc11001100_hook("S", o ? "block" : "add", "assign") : n && l.$blockSelectEnabled && (S = cc11001100_hook("S", "block", "assign"));else if (a && !n) {
      S = cc11001100_hook("S", "add", "assign");
      if (!h && o) return;
    } else n && l.$blockSelectEnabled && (S = cc11001100_hook("S", "block", "assign"));
    S && i.isMac && t.ctrlKey && l.$mouseHandler.cancelContextMenu();

    if (S == "add") {
      if (!h && v) return;

      if (!h) {
        var x = cc11001100_hook("x", c.toOrientedRange(), "var-init");
        l.addSelectionMarker(x);
      }

      var T = cc11001100_hook("T", c.rangeList.rangeAtPoint(p), "var-init");
      l.inVirtualSelectionMode = cc11001100_hook("l.inVirtualSelectionMode", !0, "assign"), o && (T = cc11001100_hook("T", null, "assign"), x = cc11001100_hook("x", c.ranges[0] || x, "assign"), l.removeSelectionMarker(x)), l.once("mouseup", function () {
        var e = cc11001100_hook("e", c.toOrientedRange(), "var-init");
        T && e.isEmpty() && s(T.cursor, e.cursor) ? c.substractPoint(e.cursor) : (o ? c.substractPoint(x.cursor) : x && (l.removeSelectionMarker(x), c.addRange(x)), c.addRange(e)), l.inVirtualSelectionMode = cc11001100_hook("l.inVirtualSelectionMode", !1, "assign");
      });
    } else if (S == "block") {
      e.stop(), l.inVirtualSelectionMode = cc11001100_hook("l.inVirtualSelectionMode", !0, "assign");

      var N,
          C = cc11001100_hook("C", [], "var-init"),
          k = function () {
        var e = cc11001100_hook("e", l.renderer.pixelToScreenCoordinates(m, g), "var-init"),
            t = cc11001100_hook("t", b.screenToDocumentPosition(e.row, e.column, e.offsetX), "var-init");
        if (s(E, e) && s(t, c.lead)) return;
        E = cc11001100_hook("E", e, "assign"), l.selection.moveToPosition(t), l.renderer.scrollCursorIntoView(), l.removeSelectionMarkers(C), C = cc11001100_hook("C", c.rectangularRangeBlock(E, w), "assign"), l.$mouseHandler.$clickSelection && C.length == 1 && C[0].isEmpty() && (C[0] = cc11001100_hook("C[0]", l.$mouseHandler.$clickSelection.clone(), "assign")), C.forEach(l.addSelectionMarker, l), l.updateSelectionMarkers();
      };

      h && !a ? c.toSingleRange() : !h && a && (N = cc11001100_hook("N", c.toOrientedRange(), "assign"), l.addSelectionMarker(N)), o ? w = cc11001100_hook("w", b.documentToScreenPosition(c.lead), "assign") : c.moveToPosition(p), E = cc11001100_hook("E", {
        row: cc11001100_hook("row", -1, "object-key-init"),
        column: cc11001100_hook("column", -1, "object-key-init")
      }, "assign");

      var L = function (e) {
        clearInterval(O), l.removeSelectionMarkers(C), C.length || (C = cc11001100_hook("C", [c.toOrientedRange()], "assign")), N && (l.removeSelectionMarker(N), c.toSingleRange(N));

        for (var t = cc11001100_hook("t", 0, "var-init"); t < C.length; t++) c.addRange(C[t]);

        l.inVirtualSelectionMode = cc11001100_hook("l.inVirtualSelectionMode", !1, "assign"), l.$mouseHandler.$clickSelection = cc11001100_hook("l.$mouseHandler.$clickSelection", null, "assign");
      },
          A = cc11001100_hook("A", k, "var-init");

      r.capture(l.container, y, L);
      var O = cc11001100_hook("O", setInterval(function () {
        A();
      }, 20), "var-init");
      return e.preventDefault();
    }
  }

  var r = cc11001100_hook("r", e("../lib/event"), "var-init"),
      i = cc11001100_hook("i", e("../lib/useragent"), "var-init");
  t.onMouseDown = cc11001100_hook("t.onMouseDown", o, "assign");
}), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function (e, t, n) {
  t.defaultCommands = cc11001100_hook("t.defaultCommands", [{
    name: cc11001100_hook("name", "addCursorAbove", "object-key-init"),
    exec: function (e) {
      e.selectMoreLines(-1);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Up", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Up", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "addCursorBelow", "object-key-init"),
    exec: function (e) {
      e.selectMoreLines(1);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Down", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Down", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "addCursorAboveSkipCurrent", "object-key-init"),
    exec: function (e) {
      e.selectMoreLines(-1, !0);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Shift-Up", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Shift-Up", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "addCursorBelowSkipCurrent", "object-key-init"),
    exec: function (e) {
      e.selectMoreLines(1, !0);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Shift-Down", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Shift-Down", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectMoreBefore", "object-key-init"),
    exec: function (e) {
      e.selectMore(-1);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Left", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Left", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectMoreAfter", "object-key-init"),
    exec: function (e) {
      e.selectMore(1);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Right", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Right", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectNextBefore", "object-key-init"),
    exec: function (e) {
      e.selectMore(-1, !0);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Shift-Left", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Shift-Left", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "selectNextAfter", "object-key-init"),
    exec: function (e) {
      e.selectMore(1, !0);
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-Shift-Right", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-Shift-Right", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "splitIntoLines", "object-key-init"),
    exec: function (e) {
      e.multiSelect.splitIntoLines();
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-L", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-L", "object-key-init")
    },
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }, {
    name: cc11001100_hook("name", "alignCursors", "object-key-init"),
    exec: function (e) {
      e.alignCursors();
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-A", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-A", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init")
  }, {
    name: cc11001100_hook("name", "findAll", "object-key-init"),
    exec: function (e) {
      e.findAll();
    },
    bindKey: {
      win: cc11001100_hook("win", "Ctrl-Alt-K", "object-key-init"),
      mac: cc11001100_hook("mac", "Ctrl-Alt-G", "object-key-init")
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
  }], "assign"), t.multiSelectCommands = cc11001100_hook("t.multiSelectCommands", [{
    name: cc11001100_hook("name", "singleSelection", "object-key-init"),
    bindKey: cc11001100_hook("bindKey", "esc", "object-key-init"),
    exec: function (e) {
      e.exitMultiSelectMode();
    },
    scrollIntoView: cc11001100_hook("scrollIntoView", "cursor", "object-key-init"),
    readOnly: cc11001100_hook("readOnly", !0, "object-key-init"),
    isAvailable: function (e) {
      return e && e.inMultiSelectMode;
    }
  }], "assign");
  var r = cc11001100_hook("r", e("../keyboard/hash_handler").HashHandler, "var-init");
  t.keyboardHandler = cc11001100_hook("t.keyboardHandler", new r(t.multiSelectCommands), "assign");
}), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function (e, t, n) {
  function h(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return c.$options.wrap = cc11001100_hook("c.$options.wrap", !0, "assign"), c.$options.needle = cc11001100_hook("c.$options.needle", t, "assign"), c.$options.backwards = cc11001100_hook("c.$options.backwards", n == -1, "assign"), c.find(e);
  }

  function v(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.row == t.row && e.column == t.column;
  }

  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e.$multiselectOnSessionChange) return;
    e.$onAddRange = cc11001100_hook("e.$onAddRange", e.$onAddRange.bind(e), "assign"), e.$onRemoveRange = cc11001100_hook("e.$onRemoveRange", e.$onRemoveRange.bind(e), "assign"), e.$onMultiSelect = cc11001100_hook("e.$onMultiSelect", e.$onMultiSelect.bind(e), "assign"), e.$onSingleSelect = cc11001100_hook("e.$onSingleSelect", e.$onSingleSelect.bind(e), "assign"), e.$multiselectOnSessionChange = cc11001100_hook("e.$multiselectOnSessionChange", t.onSessionChange.bind(e), "assign"), e.$checkMultiselectChange = cc11001100_hook("e.$checkMultiselectChange", e.$checkMultiselectChange.bind(e), "assign"), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", o), e.commands.addCommands(f.defaultCommands), g(e);
  }

  function g(e) {
    cc11001100_hook("e", e, "function-parameter");

    function r(t) {
      cc11001100_hook("t", t, "function-parameter");
      n && (e.renderer.setMouseCursor(""), n = cc11001100_hook("n", !1, "assign"));
    }

    var t = cc11001100_hook("t", e.textInput.getElement(), "var-init"),
        n = cc11001100_hook("n", !1, "var-init");
    u.addListener(t, "keydown", function (t) {
      var i = cc11001100_hook("i", t.keyCode == 18 && !(t.ctrlKey || t.shiftKey || t.metaKey), "var-init");
      e.$blockSelectEnabled && i ? n || (e.renderer.setMouseCursor("crosshair"), n = cc11001100_hook("n", !0, "assign")) : n && r();
    }), u.addListener(t, "keyup", r), u.addListener(t, "blur", r);
  }

  var r = cc11001100_hook("r", e("./range_list").RangeList, "var-init"),
      i = cc11001100_hook("i", e("./range").Range, "var-init"),
      s = cc11001100_hook("s", e("./selection").Selection, "var-init"),
      o = cc11001100_hook("o", e("./mouse/multi_select_handler").onMouseDown, "var-init"),
      u = cc11001100_hook("u", e("./lib/event"), "var-init"),
      a = cc11001100_hook("a", e("./lib/lang"), "var-init"),
      f = cc11001100_hook("f", e("./commands/multi_select_commands"), "var-init");
  t.commands = cc11001100_hook("t.commands", f.defaultCommands.concat(f.multiSelectCommands), "assign");
  var l = cc11001100_hook("l", e("./search").Search, "var-init"),
      c = cc11001100_hook("c", new l(), "var-init"),
      p = cc11001100_hook("p", e("./edit_session").EditSession, "var-init");
  (function () {
    this.getSelectionMarkers = cc11001100_hook("this.getSelectionMarkers", function () {
      return this.$selectionMarkers;
    }, "assign");
  }).call(p.prototype), function () {
    this.ranges = cc11001100_hook("this.ranges", null, "assign"), this.rangeList = cc11001100_hook("this.rangeList", null, "assign"), this.addRange = cc11001100_hook("this.addRange", function (e, t) {
      if (!e) return;

      if (!this.inMultiSelectMode && this.rangeCount === 0) {
        var n = cc11001100_hook("n", this.toOrientedRange(), "var-init");
        this.rangeList.add(n), this.rangeList.add(e);
        if (this.rangeList.ranges.length != 2) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
        this.rangeList.removeAll(), this.rangeList.add(n), this.$onAddRange(n);
      }

      e.cursor || (e.cursor = cc11001100_hook("e.cursor", e.end, "assign"));
      var r = cc11001100_hook("r", this.rangeList.add(e), "var-init");
      return this.$onAddRange(e), r.length && this.$onRemoveRange(r), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = cc11001100_hook("this.inMultiSelectMode", !0, "assign"), this.session.$undoSelect = cc11001100_hook("this.session.$undoSelect", !1, "assign"), this.rangeList.attach(this.session)), t || this.fromOrientedRange(e);
    }, "assign"), this.toSingleRange = cc11001100_hook("this.toSingleRange", function (e) {
      e = cc11001100_hook("e", e || this.ranges[0], "assign");
      var t = cc11001100_hook("t", this.rangeList.removeAll(), "var-init");
      t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e);
    }, "assign"), this.substractPoint = cc11001100_hook("this.substractPoint", function (e) {
      var t = cc11001100_hook("t", this.rangeList.substractPoint(e), "var-init");
      if (t) return this.$onRemoveRange(t), t[0];
    }, "assign"), this.mergeOverlappingRanges = cc11001100_hook("this.mergeOverlappingRanges", function () {
      var e = cc11001100_hook("e", this.rangeList.merge(), "var-init");
      e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0]);
    }, "assign"), this.$onAddRange = cc11001100_hook("this.$onAddRange", function (e) {
      this.rangeCount = cc11001100_hook("this.rangeCount", this.rangeList.ranges.length, "assign"), this.ranges.unshift(e), this._signal("addRange", {
        range: cc11001100_hook("range", e, "object-key-init")
      });
    }, "assign"), this.$onRemoveRange = cc11001100_hook("this.$onRemoveRange", function (e) {
      this.rangeCount = cc11001100_hook("this.rangeCount", this.rangeList.ranges.length, "assign");

      if (this.rangeCount == 1 && this.inMultiSelectMode) {
        var t = cc11001100_hook("t", this.rangeList.ranges.pop(), "var-init");
        e.push(t), this.rangeCount = cc11001100_hook("this.rangeCount", 0, "assign");
      }

      for (var n = cc11001100_hook("n", e.length, "var-init"); n--;) {
        var r = cc11001100_hook("r", this.ranges.indexOf(e[n]), "var-init");
        this.ranges.splice(r, 1);
      }

      this._signal("removeRange", {
        ranges: cc11001100_hook("ranges", e, "object-key-init")
      }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = cc11001100_hook("this.inMultiSelectMode", !1, "assign"), this._signal("singleSelect"), this.session.$undoSelect = cc11001100_hook("this.session.$undoSelect", !0, "assign"), this.rangeList.detach(this.session)), t = cc11001100_hook("t", t || this.ranges[0], "assign"), t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t);
    }, "assign"), this.$initRangeList = cc11001100_hook("this.$initRangeList", function () {
      if (this.rangeList) return;
      this.rangeList = cc11001100_hook("this.rangeList", new r(), "assign"), this.ranges = cc11001100_hook("this.ranges", [], "assign"), this.rangeCount = cc11001100_hook("this.rangeCount", 0, "assign");
    }, "assign"), this.getAllRanges = cc11001100_hook("this.getAllRanges", function () {
      return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
    }, "assign"), this.splitIntoLines = cc11001100_hook("this.splitIntoLines", function () {
      if (this.rangeCount > 1) {
        var e = cc11001100_hook("e", this.rangeList.ranges, "var-init"),
            t = cc11001100_hook("t", e[e.length - 1], "var-init"),
            n = cc11001100_hook("n", i.fromPoints(e[0].start, t.end), "var-init");
        this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start);
      } else {
        var n = cc11001100_hook("n", this.getRange(), "var-init"),
            r = cc11001100_hook("r", this.isBackwards(), "var-init"),
            s = cc11001100_hook("s", n.start.row, "var-init"),
            o = cc11001100_hook("o", n.end.row, "var-init");

        if (s == o) {
          if (r) var u = cc11001100_hook("u", n.end, "var-init"),
              a = cc11001100_hook("a", n.start, "var-init");else var u = cc11001100_hook("u", n.start, "var-init"),
              a = cc11001100_hook("a", n.end, "var-init");
          this.addRange(i.fromPoints(a, a)), this.addRange(i.fromPoints(u, u));
          return;
        }

        var f = cc11001100_hook("f", [], "var-init"),
            l = cc11001100_hook("l", this.getLineRange(s, !0), "var-init");
        l.start.column = cc11001100_hook("l.start.column", n.start.column, "assign"), f.push(l);

        for (var c = cc11001100_hook("c", s + 1, "var-init"); c < o; c++) f.push(this.getLineRange(c, !0));

        l = cc11001100_hook("l", this.getLineRange(o, !0), "assign"), l.end.column = cc11001100_hook("l.end.column", n.end.column, "assign"), f.push(l), f.forEach(this.addRange, this);
      }
    }, "assign"), this.toggleBlockSelection = cc11001100_hook("this.toggleBlockSelection", function () {
      if (this.rangeCount > 1) {
        var e = cc11001100_hook("e", this.rangeList.ranges, "var-init"),
            t = cc11001100_hook("t", e[e.length - 1], "var-init"),
            n = cc11001100_hook("n", i.fromPoints(e[0].start, t.end), "var-init");
        this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start);
      } else {
        var r = cc11001100_hook("r", this.session.documentToScreenPosition(this.cursor), "var-init"),
            s = cc11001100_hook("s", this.session.documentToScreenPosition(this.anchor), "var-init"),
            o = cc11001100_hook("o", this.rectangularRangeBlock(r, s), "var-init");
        o.forEach(this.addRange, this);
      }
    }, "assign"), this.rectangularRangeBlock = cc11001100_hook("this.rectangularRangeBlock", function (e, t, n) {
      var r = cc11001100_hook("r", [], "var-init"),
          s = cc11001100_hook("s", e.column < t.column, "var-init");
      if (s) var o = cc11001100_hook("o", e.column, "var-init"),
          u = cc11001100_hook("u", t.column, "var-init"),
          a = cc11001100_hook("a", e.offsetX, "var-init"),
          f = cc11001100_hook("f", t.offsetX, "var-init");else var o = cc11001100_hook("o", t.column, "var-init"),
          u = cc11001100_hook("u", e.column, "var-init"),
          a = cc11001100_hook("a", t.offsetX, "var-init"),
          f = cc11001100_hook("f", e.offsetX, "var-init");
      var l = cc11001100_hook("l", e.row < t.row, "var-init");
      if (l) var c = cc11001100_hook("c", e.row, "var-init"),
          h = cc11001100_hook("h", t.row, "var-init");else var c = cc11001100_hook("c", t.row, "var-init"),
          h = cc11001100_hook("h", e.row, "var-init");
      o < 0 && (o = cc11001100_hook("o", 0, "assign")), c < 0 && (c = cc11001100_hook("c", 0, "assign")), c == h && (n = cc11001100_hook("n", !0, "assign"));
      var p;

      for (var d = cc11001100_hook("d", c, "var-init"); d <= h; d++) {
        var m = cc11001100_hook("m", i.fromPoints(this.session.screenToDocumentPosition(d, o, a), this.session.screenToDocumentPosition(d, u, f)), "var-init");

        if (m.isEmpty()) {
          if (p && v(m.end, p)) break;
          p = cc11001100_hook("p", m.end, "assign");
        }

        m.cursor = cc11001100_hook("m.cursor", s ? m.start : m.end, "assign"), r.push(m);
      }

      l && r.reverse();

      if (!n) {
        var g = cc11001100_hook("g", r.length - 1, "var-init");

        while (r[g].isEmpty() && g > 0) g--;

        if (g > 0) {
          var y = cc11001100_hook("y", 0, "var-init");

          while (r[y].isEmpty()) y++;
        }

        for (var b = cc11001100_hook("b", g, "var-init"); b >= y; b--) r[b].isEmpty() && r.splice(b, 1);
      }

      return r;
    }, "assign");
  }.call(s.prototype);
  var d = cc11001100_hook("d", e("./editor").Editor, "var-init");
  (function () {
    this.updateSelectionMarkers = cc11001100_hook("this.updateSelectionMarkers", function () {
      this.renderer.updateCursor(), this.renderer.updateBackMarkers();
    }, "assign"), this.addSelectionMarker = cc11001100_hook("this.addSelectionMarker", function (e) {
      e.cursor || (e.cursor = cc11001100_hook("e.cursor", e.end, "assign"));
      var t = cc11001100_hook("t", this.getSelectionStyle(), "var-init");
      return e.marker = cc11001100_hook("e.marker", this.session.addMarker(e, "ace_selection", t), "assign"), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = cc11001100_hook("this.session.selectionMarkerCount", this.session.$selectionMarkers.length, "assign"), e;
    }, "assign"), this.removeSelectionMarker = cc11001100_hook("this.removeSelectionMarker", function (e) {
      if (!e.marker) return;
      this.session.removeMarker(e.marker);
      var t = cc11001100_hook("t", this.session.$selectionMarkers.indexOf(e), "var-init");
      t != -1 && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = cc11001100_hook("this.session.selectionMarkerCount", this.session.$selectionMarkers.length, "assign");
    }, "assign"), this.removeSelectionMarkers = cc11001100_hook("this.removeSelectionMarkers", function (e) {
      var t = cc11001100_hook("t", this.session.$selectionMarkers, "var-init");

      for (var n = cc11001100_hook("n", e.length, "var-init"); n--;) {
        var r = cc11001100_hook("r", e[n], "var-init");
        if (!r.marker) continue;
        this.session.removeMarker(r.marker);
        var i = cc11001100_hook("i", t.indexOf(r), "var-init");
        i != -1 && t.splice(i, 1);
      }

      this.session.selectionMarkerCount = cc11001100_hook("this.session.selectionMarkerCount", t.length, "assign");
    }, "assign"), this.$onAddRange = cc11001100_hook("this.$onAddRange", function (e) {
      this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
    }, "assign"), this.$onRemoveRange = cc11001100_hook("this.$onRemoveRange", function (e) {
      this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
    }, "assign"), this.$onMultiSelect = cc11001100_hook("this.$onMultiSelect", function (e) {
      if (this.inMultiSelectMode) return;
      this.inMultiSelectMode = cc11001100_hook("this.inMultiSelectMode", !0, "assign"), this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(f.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
    }, "assign"), this.$onSingleSelect = cc11001100_hook("this.$onSingleSelect", function (e) {
      if (this.session.multiSelect.inVirtualMode) return;
      this.inMultiSelectMode = cc11001100_hook("this.inMultiSelectMode", !1, "assign"), this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(f.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection");
    }, "assign"), this.$onMultiSelectExec = cc11001100_hook("this.$onMultiSelectExec", function (e) {
      var t = cc11001100_hook("t", e.command, "var-init"),
          n = cc11001100_hook("n", e.editor, "var-init");
      if (!n.multiSelect) return;

      if (!t.multiSelectAction) {
        var r = cc11001100_hook("r", t.exec(n, e.args || {}), "var-init");
        n.multiSelect.addRange(n.multiSelect.toOrientedRange()), n.multiSelect.mergeOverlappingRanges();
      } else t.multiSelectAction == "forEach" ? r = cc11001100_hook("r", n.forEachSelection(t, e.args), "assign") : t.multiSelectAction == "forEachLine" ? r = cc11001100_hook("r", n.forEachSelection(t, e.args, !0), "assign") : t.multiSelectAction == "single" ? (n.exitMultiSelectMode(), r = cc11001100_hook("r", t.exec(n, e.args || {}), "assign")) : r = cc11001100_hook("r", t.multiSelectAction(n, e.args || {}), "assign");

      return r;
    }, "assign"), this.forEachSelection = cc11001100_hook("this.forEachSelection", function (e, t, n) {
      if (this.inVirtualSelectionMode) return;
      var r = cc11001100_hook("r", n && n.keepOrder, "var-init"),
          i = cc11001100_hook("i", n == 1 || n && n.$byLines, "var-init"),
          o = cc11001100_hook("o", this.session, "var-init"),
          u = cc11001100_hook("u", this.selection, "var-init"),
          a = cc11001100_hook("a", u.rangeList, "var-init"),
          f = cc11001100_hook("f", (r ? u : a).ranges, "var-init"),
          l;
      if (!f.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});
      var c = cc11001100_hook("c", u._eventRegistry, "var-init");
      u._eventRegistry = cc11001100_hook("u._eventRegistry", {}, "assign");
      var h = cc11001100_hook("h", new s(o), "var-init");
      this.inVirtualSelectionMode = cc11001100_hook("this.inVirtualSelectionMode", !0, "assign");

      for (var p = cc11001100_hook("p", f.length, "var-init"); p--;) {
        if (i) while (p > 0 && f[p].start.row == f[p - 1].end.row) p--;
        h.fromOrientedRange(f[p]), h.index = cc11001100_hook("h.index", p, "assign"), this.selection = cc11001100_hook("this.selection", o.selection = cc11001100_hook("o.selection", h, "assign"), "assign");
        var d = cc11001100_hook("d", e.exec ? e.exec(this, t || {}) : e(this, t || {}), "var-init");
        !l && d !== undefined && (l = cc11001100_hook("l", d, "assign")), h.toOrientedRange(f[p]);
      }

      h.detach(), this.selection = cc11001100_hook("this.selection", o.selection = cc11001100_hook("o.selection", u, "assign"), "assign"), this.inVirtualSelectionMode = cc11001100_hook("this.inVirtualSelectionMode", !1, "assign"), u._eventRegistry = cc11001100_hook("u._eventRegistry", c, "assign"), u.mergeOverlappingRanges();
      var v = cc11001100_hook("v", this.renderer.$scrollAnimation, "var-init");
      return this.onCursorChange(), this.onSelectionChange(), v && v.from == v.to && this.renderer.animateScrolling(v.from), l;
    }, "assign"), this.exitMultiSelectMode = cc11001100_hook("this.exitMultiSelectMode", function () {
      if (!this.inMultiSelectMode || this.inVirtualSelectionMode) return;
      this.multiSelect.toSingleRange();
    }, "assign"), this.getSelectedText = cc11001100_hook("this.getSelectedText", function () {
      var e = cc11001100_hook("e", "", "var-init");

      if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
        var t = cc11001100_hook("t", this.multiSelect.rangeList.ranges, "var-init"),
            n = cc11001100_hook("n", [], "var-init");

        for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) n.push(this.session.getTextRange(t[r]));

        var i = cc11001100_hook("i", this.session.getDocument().getNewLineCharacter(), "var-init");
        e = cc11001100_hook("e", n.join(i), "assign"), e.length == (n.length - 1) * i.length && (e = cc11001100_hook("e", "", "assign"));
      } else this.selection.isEmpty() || (e = cc11001100_hook("e", this.session.getTextRange(this.getSelectionRange()), "assign"));

      return e;
    }, "assign"), this.$checkMultiselectChange = cc11001100_hook("this.$checkMultiselectChange", function (e, t) {
      if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
        var n = cc11001100_hook("n", this.multiSelect.ranges[0], "var-init");
        if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;
        var r = cc11001100_hook("r", t == this.multiSelect.anchor ? n.cursor == n.start ? n.end : n.start : n.cursor, "var-init");
        r.row != t.row || this.session.$clipPositionToDocument(r.row, r.column).column != t.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
      }
    }, "assign"), this.findAll = cc11001100_hook("this.findAll", function (e, t, n) {
      t = cc11001100_hook("t", t || {}, "assign"), t.needle = cc11001100_hook("t.needle", e || t.needle, "assign");

      if (t.needle == undefined) {
        var r = cc11001100_hook("r", this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange(), "var-init");
        t.needle = cc11001100_hook("t.needle", this.session.getTextRange(r), "assign");
      }

      this.$search.set(t);
      var i = cc11001100_hook("i", this.$search.findAll(this.session), "var-init");
      if (!i.length) return 0;
      var s = cc11001100_hook("s", this.multiSelect, "var-init");
      n || s.toSingleRange(i[0]);

      for (var o = cc11001100_hook("o", i.length, "var-init"); o--;) s.addRange(i[o], !0);

      return r && s.rangeList.rangeAtPoint(r.start) && s.addRange(r, !0), i.length;
    }, "assign"), this.selectMoreLines = cc11001100_hook("this.selectMoreLines", function (e, t) {
      var n = cc11001100_hook("n", this.selection.toOrientedRange(), "var-init"),
          r = cc11001100_hook("r", n.cursor == n.end, "var-init"),
          s = cc11001100_hook("s", this.session.documentToScreenPosition(n.cursor), "var-init");
      this.selection.$desiredColumn && (s.column = cc11001100_hook("s.column", this.selection.$desiredColumn, "assign"));
      var o = cc11001100_hook("o", this.session.screenToDocumentPosition(s.row + e, s.column), "var-init");
      if (!n.isEmpty()) var u = cc11001100_hook("u", this.session.documentToScreenPosition(r ? n.end : n.start), "var-init"),
          a = cc11001100_hook("a", this.session.screenToDocumentPosition(u.row + e, u.column), "var-init");else var a = cc11001100_hook("a", o, "var-init");

      if (r) {
        var f = cc11001100_hook("f", i.fromPoints(o, a), "var-init");
        f.cursor = cc11001100_hook("f.cursor", f.start, "assign");
      } else {
        var f = cc11001100_hook("f", i.fromPoints(a, o), "var-init");
        f.cursor = cc11001100_hook("f.cursor", f.end, "assign");
      }

      f.desiredColumn = cc11001100_hook("f.desiredColumn", s.column, "assign");
      if (!this.selection.inMultiSelectMode) this.selection.addRange(n);else if (t) var l = cc11001100_hook("l", n.cursor, "var-init");
      this.selection.addRange(f), l && this.selection.substractPoint(l);
    }, "assign"), this.transposeSelections = cc11001100_hook("this.transposeSelections", function (e) {
      var t = cc11001100_hook("t", this.session, "var-init"),
          n = cc11001100_hook("n", t.multiSelect, "var-init"),
          r = cc11001100_hook("r", n.ranges, "var-init");

      for (var i = cc11001100_hook("i", r.length, "var-init"); i--;) {
        var s = cc11001100_hook("s", r[i], "var-init");

        if (s.isEmpty()) {
          var o = cc11001100_hook("o", t.getWordRange(s.start.row, s.start.column), "var-init");
          s.start.row = cc11001100_hook("s.start.row", o.start.row, "assign"), s.start.column = cc11001100_hook("s.start.column", o.start.column, "assign"), s.end.row = cc11001100_hook("s.end.row", o.end.row, "assign"), s.end.column = cc11001100_hook("s.end.column", o.end.column, "assign");
        }
      }

      n.mergeOverlappingRanges();
      var u = cc11001100_hook("u", [], "var-init");

      for (var i = cc11001100_hook("i", r.length, "var-init"); i--;) {
        var s = cc11001100_hook("s", r[i], "var-init");
        u.unshift(t.getTextRange(s));
      }

      e < 0 ? u.unshift(u.pop()) : u.push(u.shift());

      for (var i = cc11001100_hook("i", r.length, "var-init"); i--;) {
        var s = cc11001100_hook("s", r[i], "var-init"),
            o = cc11001100_hook("o", s.clone(), "var-init");
        t.replace(s, u[i]), s.start.row = cc11001100_hook("s.start.row", o.start.row, "assign"), s.start.column = cc11001100_hook("s.start.column", o.start.column, "assign");
      }
    }, "assign"), this.selectMore = cc11001100_hook("this.selectMore", function (e, t, n) {
      var r = cc11001100_hook("r", this.session, "var-init"),
          i = cc11001100_hook("i", r.multiSelect, "var-init"),
          s = cc11001100_hook("s", i.toOrientedRange(), "var-init");

      if (s.isEmpty()) {
        s = cc11001100_hook("s", r.getWordRange(s.start.row, s.start.column), "assign"), s.cursor = cc11001100_hook("s.cursor", e == -1 ? s.start : s.end, "assign"), this.multiSelect.addRange(s);
        if (n) return;
      }

      var o = cc11001100_hook("o", r.getTextRange(s), "var-init"),
          u = cc11001100_hook("u", h(r, o, e), "var-init");
      u && (u.cursor = cc11001100_hook("u.cursor", e == -1 ? u.start : u.end, "assign"), this.session.unfold(u), this.multiSelect.addRange(u), this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(s.cursor);
    }, "assign"), this.alignCursors = cc11001100_hook("this.alignCursors", function () {
      var e = cc11001100_hook("e", this.session, "var-init"),
          t = cc11001100_hook("t", e.multiSelect, "var-init"),
          n = cc11001100_hook("n", t.ranges, "var-init"),
          r = cc11001100_hook("r", -1, "var-init"),
          s = cc11001100_hook("s", n.filter(function (e) {
        if (e.cursor.row == r) return !0;
        r = cc11001100_hook("r", e.cursor.row, "assign");
      }), "var-init");

      if (!n.length || s.length == n.length - 1) {
        var o = cc11001100_hook("o", this.selection.getRange(), "var-init"),
            u = cc11001100_hook("u", o.start.row, "var-init"),
            f = cc11001100_hook("f", o.end.row, "var-init"),
            l = cc11001100_hook("l", u == f, "var-init");

        if (l) {
          var c = cc11001100_hook("c", this.session.getLength(), "var-init"),
              h;

          do h = cc11001100_hook("h", this.session.getLine(f), "assign"); while (/[=:]/.test(h) && ++f < c);

          do h = cc11001100_hook("h", this.session.getLine(u), "assign"); while (/[=:]/.test(h) && --u > 0);

          u < 0 && (u = cc11001100_hook("u", 0, "assign")), f >= c && (f = cc11001100_hook("f", c - 1, "assign"));
        }

        var p = cc11001100_hook("p", this.session.removeFullLines(u, f), "var-init");
        p = cc11001100_hook("p", this.$reAlignText(p, l), "assign"), this.session.insert({
          row: cc11001100_hook("row", u, "object-key-init"),
          column: cc11001100_hook("column", 0, "object-key-init")
        }, p.join("\n") + "\n"), l || (o.start.column = cc11001100_hook("o.start.column", 0, "assign"), o.end.column = cc11001100_hook("o.end.column", p[p.length - 1].length, "assign")), this.selection.setRange(o);
      } else {
        s.forEach(function (e) {
          t.substractPoint(e.cursor);
        });
        var d = cc11001100_hook("d", 0, "var-init"),
            v = cc11001100_hook("v", Infinity, "var-init"),
            m = cc11001100_hook("m", n.map(function (t) {
          var n = cc11001100_hook("n", t.cursor, "var-init"),
              r = cc11001100_hook("r", e.getLine(n.row), "var-init"),
              i = cc11001100_hook("i", r.substr(n.column).search(/\S/g), "var-init");
          return i == -1 && (i = cc11001100_hook("i", 0, "assign")), n.column > d && (d = cc11001100_hook("d", n.column, "assign")), i < v && (v = cc11001100_hook("v", i, "assign")), i;
        }), "var-init");
        n.forEach(function (t, n) {
          var r = cc11001100_hook("r", t.cursor, "var-init"),
              s = cc11001100_hook("s", d - r.column, "var-init"),
              o = cc11001100_hook("o", m[n] - v, "var-init");
          s > o ? e.insert(r, a.stringRepeat(" ", s - o)) : e.remove(new i(r.row, r.column, r.row, r.column - s + o)), t.start.column = cc11001100_hook("t.start.column", t.end.column = cc11001100_hook("t.end.column", d, "assign"), "assign"), t.start.row = cc11001100_hook("t.start.row", t.end.row = cc11001100_hook("t.end.row", r.row, "assign"), "assign"), t.cursor = cc11001100_hook("t.cursor", t.end, "assign");
        }), t.fromOrientedRange(n[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
      }
    }, "assign"), this.$reAlignText = cc11001100_hook("this.$reAlignText", function (e, t) {
      function u(e) {
        cc11001100_hook("e", e, "function-parameter");
        return a.stringRepeat(" ", e);
      }

      function f(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e[2] ? u(i) + e[2] + u(s - e[2].length + o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0];
      }

      function l(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e[2] ? u(i + s - e[2].length) + e[2] + u(o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0];
      }

      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e[2] ? u(i) + e[2] + u(o) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0];
      }

      var n = cc11001100_hook("n", !0, "var-init"),
          r = cc11001100_hook("r", !0, "var-init"),
          i,
          s,
          o;
      return e.map(function (e) {
        var t = cc11001100_hook("t", e.match(/(\s*)(.*?)(\s*)([=:].*)/), "var-init");
        return t ? i == null ? (i = cc11001100_hook("i", t[1].length, "assign"), s = cc11001100_hook("s", t[2].length, "assign"), o = cc11001100_hook("o", t[3].length, "assign"), t) : (i + s + o != t[1].length + t[2].length + t[3].length && (r = cc11001100_hook("r", !1, "assign")), i != t[1].length && (n = cc11001100_hook("n", !1, "assign")), i > t[1].length && (i = cc11001100_hook("i", t[1].length, "assign")), s < t[2].length && (s = cc11001100_hook("s", t[2].length, "assign")), o > t[3].length && (o = cc11001100_hook("o", t[3].length, "assign")), t) : [e];
      }).map(t ? f : n ? r ? l : f : c);
    }, "assign");
  }).call(d.prototype), t.onSessionChange = cc11001100_hook("t.onSessionChange", function (e) {
    var t = cc11001100_hook("t", e.session, "var-init");
    t && !t.multiSelect && (t.$selectionMarkers = cc11001100_hook("t.$selectionMarkers", [], "assign"), t.selection.$initRangeList(), t.multiSelect = cc11001100_hook("t.multiSelect", t.selection, "assign")), this.multiSelect = cc11001100_hook("this.multiSelect", t && t.multiSelect, "assign");
    var n = cc11001100_hook("n", e.oldSession, "var-init");
    n && (n.multiSelect.off("addRange", this.$onAddRange), n.multiSelect.off("removeRange", this.$onRemoveRange), n.multiSelect.off("multiSelect", this.$onMultiSelect), n.multiSelect.off("singleSelect", this.$onSingleSelect), n.multiSelect.lead.off("change", this.$checkMultiselectChange), n.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
  }, "assign"), t.MultiSelect = cc11001100_hook("t.MultiSelect", m, "assign"), e("./config").defineOptions(d.prototype, "editor", {
    enableMultiselect: {
      set: function (e) {
        m(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", o)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", o));
      },
      value: cc11001100_hook("value", !0, "object-key-init")
    },
    enableBlockSelect: {
      set: function (e) {
        this.$blockSelectEnabled = cc11001100_hook("this.$blockSelectEnabled", e, "assign");
      },
      value: cc11001100_hook("value", !0, "object-key-init")
    }
  });
}), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function (e, t, n) {
  "use strict";

  var r = cc11001100_hook("r", e("../../range").Range, "var-init"),
      i = cc11001100_hook("i", t.FoldMode = cc11001100_hook("t.FoldMode", function () {}, "assign"), "var-init");
  (function () {
    this.foldingStartMarker = cc11001100_hook("this.foldingStartMarker", null, "assign"), this.foldingStopMarker = cc11001100_hook("this.foldingStopMarker", null, "assign"), this.getFoldWidget = cc11001100_hook("this.getFoldWidget", function (e, t, n) {
      var r = cc11001100_hook("r", e.getLine(n), "var-init");
      return this.foldingStartMarker.test(r) ? "start" : t == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(r) ? "end" : "";
    }, "assign"), this.getFoldWidgetRange = cc11001100_hook("this.getFoldWidgetRange", function (e, t, n) {
      return null;
    }, "assign"), this.indentationBlock = cc11001100_hook("this.indentationBlock", function (e, t, n) {
      var i = cc11001100_hook("i", /\S/, "var-init"),
          s = cc11001100_hook("s", e.getLine(t), "var-init"),
          o = cc11001100_hook("o", s.search(i), "var-init");
      if (o == -1) return;
      var u = cc11001100_hook("u", n || s.length, "var-init"),
          a = cc11001100_hook("a", e.getLength(), "var-init"),
          f = cc11001100_hook("f", t, "var-init"),
          l = cc11001100_hook("l", t, "var-init");

      while (++t < a) {
        var c = cc11001100_hook("c", e.getLine(t).search(i), "var-init");
        if (c == -1) continue;
        if (c <= o) break;
        l = cc11001100_hook("l", t, "assign");
      }

      if (l > f) {
        var h = cc11001100_hook("h", e.getLine(l).length, "var-init");
        return new r(f, u, l, h);
      }
    }, "assign"), this.openingBracketBlock = cc11001100_hook("this.openingBracketBlock", function (e, t, n, i, s) {
      var o = cc11001100_hook("o", {
        row: cc11001100_hook("row", n, "object-key-init"),
        column: cc11001100_hook("column", i + 1, "object-key-init")
      }, "var-init"),
          u = cc11001100_hook("u", e.$findClosingBracket(t, o, s), "var-init");
      if (!u) return;
      var a = cc11001100_hook("a", e.foldWidgets[u.row], "var-init");
      return a == null && (a = cc11001100_hook("a", e.getFoldWidget(u.row), "assign")), a == "start" && u.row > o.row && (u.row--, u.column = cc11001100_hook("u.column", e.getLine(u.row).length, "assign")), r.fromPoints(o, u);
    }, "assign"), this.closingBracketBlock = cc11001100_hook("this.closingBracketBlock", function (e, t, n, i, s) {
      var o = cc11001100_hook("o", {
        row: cc11001100_hook("row", n, "object-key-init"),
        column: cc11001100_hook("column", i, "object-key-init")
      }, "var-init"),
          u = cc11001100_hook("u", e.$findOpeningBracket(t, o), "var-init");
      if (!u) return;
      return u.column++, o.column--, r.fromPoints(u, o);
    }, "assign");
  }).call(i.prototype);
}), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function (e, t, n) {
  "use strict";

  t.isDark = cc11001100_hook("t.isDark", !1, "assign"), t.cssClass = cc11001100_hook("t.cssClass", "ace-tm", "assign"), t.cssText = cc11001100_hook("t.cssText", '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', "assign"), t.$id = cc11001100_hook("t.$id", "ace/theme/textmate", "assign");
  var r = cc11001100_hook("r", e("../lib/dom"), "var-init");
  r.importCssString(t.cssText, t.cssClass);
}), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], function (e, t, n) {
  "use strict";

  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.session = cc11001100_hook("this.session", e, "assign"), this.session.widgetManager = cc11001100_hook("this.session.widgetManager", this, "assign"), this.session.getRowLength = cc11001100_hook("this.session.getRowLength", this.getRowLength, "assign"), this.session.$getWidgetScreenLength = cc11001100_hook("this.session.$getWidgetScreenLength", this.$getWidgetScreenLength, "assign"), this.updateOnChange = cc11001100_hook("this.updateOnChange", this.updateOnChange.bind(this), "assign"), this.renderWidgets = cc11001100_hook("this.renderWidgets", this.renderWidgets.bind(this), "assign"), this.measureWidgets = cc11001100_hook("this.measureWidgets", this.measureWidgets.bind(this), "assign"), this.session._changedWidgets = cc11001100_hook("this.session._changedWidgets", [], "assign"), this.$onChangeEditor = cc11001100_hook("this.$onChangeEditor", this.$onChangeEditor.bind(this), "assign"), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
  }

  var r = cc11001100_hook("r", e("./lib/oop"), "var-init"),
      i = cc11001100_hook("i", e("./lib/dom"), "var-init"),
      s = cc11001100_hook("s", e("./range").Range, "var-init");
  (function () {
    this.getRowLength = cc11001100_hook("this.getRowLength", function (e) {
      var t;
      return this.lineWidgets ? t = cc11001100_hook("t", this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0, "assign") : t = cc11001100_hook("t", 0, "assign"), !this.$useWrapMode || !this.$wrapData[e] ? 1 + t : this.$wrapData[e].length + 1 + t;
    }, "assign"), this.$getWidgetScreenLength = cc11001100_hook("this.$getWidgetScreenLength", function () {
      var e = cc11001100_hook("e", 0, "var-init");
      return this.lineWidgets.forEach(function (t) {
        t && t.rowCount && !t.hidden && (e += cc11001100_hook("e", t.rowCount, "assign"));
      }), e;
    }, "assign"), this.$onChangeEditor = cc11001100_hook("this.$onChangeEditor", function (e) {
      this.attach(e.editor);
    }, "assign"), this.attach = cc11001100_hook("this.attach", function (e) {
      e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach();
      if (this.editor == e) return;
      this.detach(), this.editor = cc11001100_hook("this.editor", e, "assign"), e && (e.widgetManager = cc11001100_hook("e.widgetManager", this, "assign"), e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets));
    }, "assign"), this.detach = cc11001100_hook("this.detach", function (e) {
      var t = cc11001100_hook("t", this.editor, "var-init");
      if (!t) return;
      this.editor = cc11001100_hook("this.editor", null, "assign"), t.widgetManager = cc11001100_hook("t.widgetManager", null, "assign"), t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
      var n = cc11001100_hook("n", this.session.lineWidgets, "var-init");
      n && n.forEach(function (e) {
        e && e.el && e.el.parentNode && (e._inDocument = cc11001100_hook("e._inDocument", !1, "assign"), e.el.parentNode.removeChild(e.el));
      });
    }, "assign"), this.updateOnFold = cc11001100_hook("this.updateOnFold", function (e, t) {
      var n = cc11001100_hook("n", t.lineWidgets, "var-init");
      if (!n || !e.action) return;
      var r = cc11001100_hook("r", e.data, "var-init"),
          i = cc11001100_hook("i", r.start.row, "var-init"),
          s = cc11001100_hook("s", r.end.row, "var-init"),
          o = cc11001100_hook("o", e.action == "add", "var-init");

      for (var u = cc11001100_hook("u", i + 1, "var-init"); u < s; u++) n[u] && (n[u].hidden = cc11001100_hook("n[u].hidden", o, "assign"));

      n[s] && (o ? n[i] ? n[s].hidden = cc11001100_hook("n[s].hidden", o, "assign") : n[i] = cc11001100_hook("n[i]", n[s], "assign") : (n[i] == n[s] && (n[i] = cc11001100_hook("n[i]", undefined, "assign")), n[s].hidden = cc11001100_hook("n[s].hidden", o, "assign")));
    }, "assign"), this.updateOnChange = cc11001100_hook("this.updateOnChange", function (e) {
      var t = cc11001100_hook("t", this.session.lineWidgets, "var-init");
      if (!t) return;
      var n = cc11001100_hook("n", e.start.row, "var-init"),
          r = cc11001100_hook("r", e.end.row - n, "var-init");
      if (r !== 0) if (e.action == "remove") {
        var i = cc11001100_hook("i", t.splice(n + 1, r), "var-init");
        i.forEach(function (e) {
          e && this.removeLineWidget(e);
        }, this), this.$updateRows();
      } else {
        var s = cc11001100_hook("s", new Array(r), "var-init");
        s.unshift(n, 0), t.splice.apply(t, s), this.$updateRows();
      }
    }, "assign"), this.$updateRows = cc11001100_hook("this.$updateRows", function () {
      var e = cc11001100_hook("e", this.session.lineWidgets, "var-init");
      if (!e) return;
      var t = cc11001100_hook("t", !0, "var-init");
      e.forEach(function (e, n) {
        if (e) {
          t = cc11001100_hook("t", !1, "assign"), e.row = cc11001100_hook("e.row", n, "assign");

          while (e.$oldWidget) e.$oldWidget.row = cc11001100_hook("e.$oldWidget.row", n, "assign"), e = cc11001100_hook("e", e.$oldWidget, "assign");
        }
      }), t && (this.session.lineWidgets = cc11001100_hook("this.session.lineWidgets", null, "assign"));
    }, "assign"), this.addLineWidget = cc11001100_hook("this.addLineWidget", function (e) {
      this.session.lineWidgets || (this.session.lineWidgets = cc11001100_hook("this.session.lineWidgets", new Array(this.session.getLength()), "assign"));
      var t = cc11001100_hook("t", this.session.lineWidgets[e.row], "var-init");
      t && (e.$oldWidget = cc11001100_hook("e.$oldWidget", t, "assign"), t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el), t._inDocument = cc11001100_hook("t._inDocument", !1, "assign"))), this.session.lineWidgets[e.row] = cc11001100_hook("this.session.lineWidgets[e.row]", e, "assign"), e.session = cc11001100_hook("e.session", this.session, "assign");
      var n = cc11001100_hook("n", this.editor.renderer, "var-init");
      e.html && !e.el && (e.el = cc11001100_hook("e.el", i.createElement("div"), "assign"), e.el.innerHTML = cc11001100_hook("e.el.innerHTML", e.html, "assign")), e.el && (i.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = cc11001100_hook("e.el.style.position", "absolute", "assign"), e.el.style.zIndex = cc11001100_hook("e.el.style.zIndex", 5, "assign"), n.container.appendChild(e.el), e._inDocument = cc11001100_hook("e._inDocument", !0, "assign")), e.coverGutter || (e.el.style.zIndex = cc11001100_hook("e.el.style.zIndex", 3, "assign")), e.pixelHeight == null && (e.pixelHeight = cc11001100_hook("e.pixelHeight", e.el.offsetHeight, "assign")), e.rowCount == null && (e.rowCount = cc11001100_hook("e.rowCount", e.pixelHeight / n.layerConfig.lineHeight, "assign"));
      var r = cc11001100_hook("r", this.session.getFoldAt(e.row, 0), "var-init");
      e.$fold = cc11001100_hook("e.$fold", r, "assign");

      if (r) {
        var s = cc11001100_hook("s", this.session.lineWidgets, "var-init");
        e.row == r.end.row && !s[r.start.row] ? s[r.start.row] = cc11001100_hook("s[r.start.row]", e, "assign") : e.hidden = cc11001100_hook("e.hidden", !0, "assign");
      }

      return this.session._emit("changeFold", {
        data: {
          start: {
            row: cc11001100_hook("row", e.row, "object-key-init")
          }
        }
      }), this.$updateRows(), this.renderWidgets(null, n), this.onWidgetChanged(e), e;
    }, "assign"), this.removeLineWidget = cc11001100_hook("this.removeLineWidget", function (e) {
      e._inDocument = cc11001100_hook("e._inDocument", !1, "assign"), e.session = cc11001100_hook("e.session", null, "assign"), e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el);
      if (e.editor && e.editor.destroy) try {
        e.editor.destroy();
      } catch (t) {}

      if (this.session.lineWidgets) {
        var n = cc11001100_hook("n", this.session.lineWidgets[e.row], "var-init");
        if (n == e) this.session.lineWidgets[e.row] = cc11001100_hook("this.session.lineWidgets[e.row]", e.$oldWidget, "assign"), e.$oldWidget && this.onWidgetChanged(e.$oldWidget);else while (n) {
          if (n.$oldWidget == e) {
            n.$oldWidget = cc11001100_hook("n.$oldWidget", e.$oldWidget, "assign");
            break;
          }

          n = cc11001100_hook("n", n.$oldWidget, "assign");
        }
      }

      this.session._emit("changeFold", {
        data: {
          start: {
            row: cc11001100_hook("row", e.row, "object-key-init")
          }
        }
      }), this.$updateRows();
    }, "assign"), this.getWidgetsAtRow = cc11001100_hook("this.getWidgetsAtRow", function (e) {
      var t = cc11001100_hook("t", this.session.lineWidgets, "var-init"),
          n = cc11001100_hook("n", t && t[e], "var-init"),
          r = cc11001100_hook("r", [], "var-init");

      while (n) r.push(n), n = cc11001100_hook("n", n.$oldWidget, "assign");

      return r;
    }, "assign"), this.onWidgetChanged = cc11001100_hook("this.onWidgetChanged", function (e) {
      this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull();
    }, "assign"), this.measureWidgets = cc11001100_hook("this.measureWidgets", function (e, t) {
      var n = cc11001100_hook("n", this.session._changedWidgets, "var-init"),
          r = cc11001100_hook("r", t.layerConfig, "var-init");
      if (!n || !n.length) return;
      var i = cc11001100_hook("i", Infinity, "var-init");

      for (var s = cc11001100_hook("s", 0, "var-init"); s < n.length; s++) {
        var o = cc11001100_hook("o", n[s], "var-init");
        if (!o || !o.el) continue;
        if (o.session != this.session) continue;

        if (!o._inDocument) {
          if (this.session.lineWidgets[o.row] != o) continue;
          o._inDocument = cc11001100_hook("o._inDocument", !0, "assign"), t.container.appendChild(o.el);
        }

        o.h = cc11001100_hook("o.h", o.el.offsetHeight, "assign"), o.fixedWidth || (o.w = cc11001100_hook("o.w", o.el.offsetWidth, "assign"), o.screenWidth = cc11001100_hook("o.screenWidth", Math.ceil(o.w / r.characterWidth), "assign"));
        var u = cc11001100_hook("u", o.h / r.lineHeight, "var-init");
        o.coverLine && (u -= cc11001100_hook("u", this.session.getRowLineCount(o.row), "assign"), u < 0 && (u = cc11001100_hook("u", 0, "assign"))), o.rowCount != u && (o.rowCount = cc11001100_hook("o.rowCount", u, "assign"), o.row < i && (i = cc11001100_hook("i", o.row, "assign")));
      }

      i != Infinity && (this.session._emit("changeFold", {
        data: {
          start: {
            row: cc11001100_hook("row", i, "object-key-init")
          }
        }
      }), this.session.lineWidgetWidth = cc11001100_hook("this.session.lineWidgetWidth", null, "assign")), this.session._changedWidgets = cc11001100_hook("this.session._changedWidgets", [], "assign");
    }, "assign"), this.renderWidgets = cc11001100_hook("this.renderWidgets", function (e, t) {
      var n = cc11001100_hook("n", t.layerConfig, "var-init"),
          r = cc11001100_hook("r", this.session.lineWidgets, "var-init");
      if (!r) return;
      var i = cc11001100_hook("i", Math.min(this.firstRow, n.firstRow), "var-init"),
          s = cc11001100_hook("s", Math.max(this.lastRow, n.lastRow, r.length), "var-init");

      while (i > 0 && !r[i]) i--;

      this.firstRow = cc11001100_hook("this.firstRow", n.firstRow, "assign"), this.lastRow = cc11001100_hook("this.lastRow", n.lastRow, "assign"), t.$cursorLayer.config = cc11001100_hook("t.$cursorLayer.config", n, "assign");

      for (var o = cc11001100_hook("o", i, "var-init"); o <= s; o++) {
        var u = cc11001100_hook("u", r[o], "var-init");
        if (!u || !u.el) continue;

        if (u.hidden) {
          u.el.style.top = cc11001100_hook("u.el.style.top", -100 - (u.pixelHeight || 0) + "px", "assign");
          continue;
        }

        u._inDocument || (u._inDocument = cc11001100_hook("u._inDocument", !0, "assign"), t.container.appendChild(u.el));
        var a = cc11001100_hook("a", t.$cursorLayer.getPixelPosition({
          row: cc11001100_hook("row", o, "object-key-init"),
          column: cc11001100_hook("column", 0, "object-key-init")
        }, !0).top, "var-init");
        u.coverLine || (a += cc11001100_hook("a", n.lineHeight * this.session.getRowLineCount(u.row), "assign")), u.el.style.top = cc11001100_hook("u.el.style.top", a - n.offset + "px", "assign");
        var f = cc11001100_hook("f", u.coverGutter ? 0 : t.gutterWidth, "var-init");
        u.fixedWidth || (f -= cc11001100_hook("f", t.scrollLeft, "assign")), u.el.style.left = cc11001100_hook("u.el.style.left", f + "px", "assign"), u.fullWidth && u.screenWidth && (u.el.style.minWidth = cc11001100_hook("u.el.style.minWidth", n.width + 2 * n.padding + "px", "assign")), u.fixedWidth ? u.el.style.right = cc11001100_hook("u.el.style.right", t.scrollBar.getWidth() + "px", "assign") : u.el.style.right = cc11001100_hook("u.el.style.right", "", "assign");
      }
    }, "assign");
  }).call(o.prototype), t.LineWidgets = cc11001100_hook("t.LineWidgets", o, "assign");
}), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function (e, t, n) {
  "use strict";

  function o(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.length - 1, "var-init");

    while (r <= i) {
      var s = cc11001100_hook("s", r + i >> 1, "var-init"),
          o = cc11001100_hook("o", n(t, e[s]), "var-init");
      if (o > 0) r = cc11001100_hook("r", s + 1, "assign");else {
        if (!(o < 0)) return s;
        i = cc11001100_hook("i", s - 1, "assign");
      }
    }

    return -(r + 1);
  }

  function u(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", e.getAnnotations().sort(s.comparePoints), "var-init");
    if (!r.length) return;
    var i = cc11001100_hook("i", o(r, {
      row: cc11001100_hook("row", t, "object-key-init"),
      column: cc11001100_hook("column", -1, "object-key-init")
    }, s.comparePoints), "var-init");
    i < 0 && (i = cc11001100_hook("i", -i - 1, "assign")), i >= r.length ? i = cc11001100_hook("i", n > 0 ? 0 : r.length - 1, "assign") : i === 0 && n < 0 && (i = cc11001100_hook("i", r.length - 1, "assign"));
    var u = cc11001100_hook("u", r[i], "var-init");
    if (!u || !n) return;

    if (u.row === t) {
      do u = cc11001100_hook("u", r[i += cc11001100_hook("i", n, "assign")], "assign"); while (u && u.row === t);

      if (!u) return r.slice();
    }

    var a = cc11001100_hook("a", [], "var-init");
    t = cc11001100_hook("t", u.row, "assign");

    do a[n < 0 ? "unshift" : "push"](u), u = cc11001100_hook("u", r[i += cc11001100_hook("i", n, "assign")], "assign"); while (u && u.row == t);

    return a.length && a;
  }

  var r = cc11001100_hook("r", e("../line_widgets").LineWidgets, "var-init"),
      i = cc11001100_hook("i", e("../lib/dom"), "var-init"),
      s = cc11001100_hook("s", e("../range").Range, "var-init");
  t.showErrorMarker = cc11001100_hook("t.showErrorMarker", function (e, t) {
    var n = cc11001100_hook("n", e.session, "var-init");
    n.widgetManager || (n.widgetManager = cc11001100_hook("n.widgetManager", new r(n), "assign"), n.widgetManager.attach(e));
    var s = cc11001100_hook("s", e.getCursorPosition(), "var-init"),
        o = cc11001100_hook("o", s.row, "var-init"),
        a = cc11001100_hook("a", n.widgetManager.getWidgetsAtRow(o).filter(function (e) {
      return e.type == "errorMarker";
    })[0], "var-init");
    a ? a.destroy() : o -= cc11001100_hook("o", t, "assign");
    var f = cc11001100_hook("f", u(n, o, t), "var-init"),
        l;

    if (f) {
      var c = cc11001100_hook("c", f[0], "var-init");
      s.column = cc11001100_hook("s.column", (c.pos && typeof c.column != "number" ? c.pos.sc : c.column) || 0, "assign"), s.row = cc11001100_hook("s.row", c.row, "assign"), l = cc11001100_hook("l", e.renderer.$gutterLayer.$annotations[s.row], "assign");
    } else {
      if (a) return;
      l = cc11001100_hook("l", {
        text: cc11001100_hook("text", ["Looks good!"], "object-key-init"),
        className: cc11001100_hook("className", "ace_ok", "object-key-init")
      }, "assign");
    }

    e.session.unfold(s.row), e.selection.moveToPosition(s);
    var h = cc11001100_hook("h", {
      row: cc11001100_hook("row", s.row, "object-key-init"),
      fixedWidth: cc11001100_hook("fixedWidth", !0, "object-key-init"),
      coverGutter: cc11001100_hook("coverGutter", !0, "object-key-init"),
      el: cc11001100_hook("el", i.createElement("div"), "object-key-init"),
      type: cc11001100_hook("type", "errorMarker", "object-key-init")
    }, "var-init"),
        p = cc11001100_hook("p", h.el.appendChild(i.createElement("div")), "var-init"),
        d = cc11001100_hook("d", h.el.appendChild(i.createElement("div")), "var-init");
    d.className = cc11001100_hook("d.className", "error_widget_arrow " + l.className, "assign");
    var v = cc11001100_hook("v", e.renderer.$cursorLayer.getPixelPosition(s).left, "var-init");
    d.style.left = cc11001100_hook("d.style.left", v + e.renderer.gutterWidth - 5 + "px", "assign"), h.el.className = cc11001100_hook("h.el.className", "error_widget_wrapper", "assign"), p.className = cc11001100_hook("p.className", "error_widget " + l.className, "assign"), p.innerHTML = cc11001100_hook("p.innerHTML", l.text.join("<br>"), "assign"), p.appendChild(i.createElement("div"));

    var m = function (e, t, n) {
      if (t === 0 && (n === "esc" || n === "return")) return h.destroy(), {
        command: cc11001100_hook("command", "null", "object-key-init")
      };
    };

    h.destroy = cc11001100_hook("h.destroy", function () {
      if (e.$mouseHandler.isMousePressed) return;
      e.keyBinding.removeKeyboardHandler(m), n.widgetManager.removeLineWidget(h), e.off("changeSelection", h.destroy), e.off("changeSession", h.destroy), e.off("mouseup", h.destroy), e.off("change", h.destroy);
    }, "assign"), e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", h.destroy), e.on("changeSession", h.destroy), e.on("mouseup", h.destroy), e.on("change", h.destroy), e.session.widgetManager.addLineWidget(h), h.el.onmousedown = cc11001100_hook("h.el.onmousedown", e.focus.bind(e), "assign"), e.renderer.scrollCursorIntoView(null, .5, {
      bottom: cc11001100_hook("bottom", h.el.offsetHeight, "object-key-init")
    });
  }, "assign"), i.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "");
}), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function (e, t, n) {
  "use strict";

  e("./lib/fixoldbrowsers");
  var r = cc11001100_hook("r", e("./lib/dom"), "var-init"),
      i = cc11001100_hook("i", e("./lib/event"), "var-init"),
      s = cc11001100_hook("s", e("./range").Range, "var-init"),
      o = cc11001100_hook("o", e("./editor").Editor, "var-init"),
      u = cc11001100_hook("u", e("./edit_session").EditSession, "var-init"),
      a = cc11001100_hook("a", e("./undomanager").UndoManager, "var-init"),
      f = cc11001100_hook("f", e("./virtual_renderer").VirtualRenderer, "var-init");
  e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = cc11001100_hook("t.config", e("./config"), "assign"), t.require = cc11001100_hook("t.require", e, "assign"), typeof define == "function" && (t.define = cc11001100_hook("t.define", define, "assign")), t.edit = cc11001100_hook("t.edit", function (e, n) {
    if (typeof e == "string") {
      var s = cc11001100_hook("s", e, "var-init");
      e = cc11001100_hook("e", document.getElementById(s), "assign");
      if (!e) throw new Error("ace.edit can't find div #" + s);
    }

    if (e && e.env && e.env.editor instanceof o) return e.env.editor;
    var u = cc11001100_hook("u", "", "var-init");

    if (e && /input|textarea/i.test(e.tagName)) {
      var a = cc11001100_hook("a", e, "var-init");
      u = cc11001100_hook("u", a.value, "assign"), e = cc11001100_hook("e", r.createElement("pre"), "assign"), a.parentNode.replaceChild(e, a);
    } else e && (u = cc11001100_hook("u", e.textContent, "assign"), e.innerHTML = cc11001100_hook("e.innerHTML", "", "assign"));

    var l = cc11001100_hook("l", t.createEditSession(u), "var-init"),
        c = cc11001100_hook("c", new o(new f(e), l, n), "var-init"),
        h = cc11001100_hook("h", {
      document: cc11001100_hook("document", l, "object-key-init"),
      editor: cc11001100_hook("editor", c, "object-key-init"),
      onResize: cc11001100_hook("onResize", c.resize.bind(c, null), "object-key-init")
    }, "var-init");
    return a && (h.textarea = cc11001100_hook("h.textarea", a, "assign")), i.addListener(window, "resize", h.onResize), c.on("destroy", function () {
      i.removeListener(window, "resize", h.onResize), h.editor.container.env = cc11001100_hook("h.editor.container.env", null, "assign");
    }), c.container.env = cc11001100_hook("c.container.env", c.env = cc11001100_hook("c.env", h, "assign"), "assign"), c;
  }, "assign"), t.createEditSession = cc11001100_hook("t.createEditSession", function (e, t) {
    var n = cc11001100_hook("n", new u(e, t), "var-init");
    return n.setUndoManager(new a()), n;
  }, "assign"), t.Range = cc11001100_hook("t.Range", s, "assign"), t.EditSession = cc11001100_hook("t.EditSession", u, "assign"), t.UndoManager = cc11001100_hook("t.UndoManager", a, "assign"), t.VirtualRenderer = cc11001100_hook("t.VirtualRenderer", f, "assign"), t.version = cc11001100_hook("t.version", "1.3.3", "assign");
});

(function () {
  ace.require(["ace/ace"], function (a) {
    if (a) {
      a.config.init(true);
      a.define = cc11001100_hook("a.define", ace.define, "assign");
    }

    if (!window.ace) window.ace = cc11001100_hook("window.ace", a, "assign");

    for (var key in a) if (a.hasOwnProperty(key)) window.ace[key] = cc11001100_hook("window.ace[key]", a[key], "assign");

    window.ace["default"] = cc11001100_hook("window.ace[\"default\"]", window.ace, "assign");

    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = cc11001100_hook("module.exports", window.ace, "assign");
    }
  });
})();