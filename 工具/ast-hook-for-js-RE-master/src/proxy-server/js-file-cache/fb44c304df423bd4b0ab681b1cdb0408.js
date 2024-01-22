(function () {
  function aa(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 0, "var-init");
    return function () {
      return b < a.length ? {
        done: cc11001100_hook("done", !1, "object-key-init"),
        value: cc11001100_hook("value", a[b++], "object-key-init")
      } : {
        done: cc11001100_hook("done", !0, "object-key-init")
      };
    };
  }

  var ba = cc11001100_hook("ba", "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = cc11001100_hook("a[b]", c.value, "assign");
    return a;
  }, "var-init");

  function ca(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], "assign");

    for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
      var c = cc11001100_hook("c", a[b], "var-init");
      if (c && c.Math == Math) return c;
    }

    throw Error("Cannot find global object");
  }

  var p = cc11001100_hook("p", ca(this), "var-init");

  function da(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b) a: {
      var c = cc11001100_hook("c", p, "var-init");
      a = cc11001100_hook("a", a.split("."), "assign");

      for (var d = cc11001100_hook("d", 0, "var-init"); d < a.length - 1; d++) {
        var f = cc11001100_hook("f", a[d], "var-init");
        if (!(f in c)) break a;
        c = cc11001100_hook("c", c[f], "assign");
      }

      a = cc11001100_hook("a", a[a.length - 1], "assign");
      d = cc11001100_hook("d", c[a], "assign");
      b = cc11001100_hook("b", b(d), "assign");
      b != d && null != b && ba(c, a, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", b, "object-key-init")
      });
    }
  }

  function ea(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator], "var-init");
    if (b) return b.call(a);
    if ("number" == typeof a.length) return {
      next: cc11001100_hook("next", aa(a), "object-key-init")
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }

  var fa = cc11001100_hook("fa", "function" == typeof Object.create ? Object.create : function (a) {
    function b() {}

    b.prototype = cc11001100_hook("b.prototype", a, "assign");
    return new b();
  }, "var-init"),
      ha;
  if ("function" == typeof Object.setPrototypeOf) ha = cc11001100_hook("ha", Object.setPrototypeOf, "assign");else {
    var ia;

    a: {
      var ja = cc11001100_hook("ja", {
        a: cc11001100_hook("a", !0, "object-key-init")
      }, "var-init"),
          ka = cc11001100_hook("ka", {}, "var-init");

      try {
        ka.__proto__ = cc11001100_hook("ka.__proto__", ja, "assign");
        ia = cc11001100_hook("ia", ka.a, "assign");
        break a;
      } catch (a) {}

      ia = cc11001100_hook("ia", !1, "assign");
    }

    ha = cc11001100_hook("ha", ia ? function (a, b) {
      a.__proto__ = cc11001100_hook("a.__proto__", b, "assign");
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null, "assign");
  }
  var la = cc11001100_hook("la", ha, "var-init");

  function ma(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.prototype = cc11001100_hook("a.prototype", fa(b.prototype), "assign");
    a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
    if (la) la(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
      var d = cc11001100_hook("d", Object.getOwnPropertyDescriptor(b, c), "var-init");
      d && Object.defineProperty(a, c, d);
    } else a[c] = cc11001100_hook("a[c]", b[c], "assign");
    a.da = cc11001100_hook("a.da", b.prototype, "assign");
  }

  function na() {
    for (var a = cc11001100_hook("a", Number(this), "var-init"), b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a, "var-init"); c < arguments.length; c++) b[c - a] = cc11001100_hook("b[c - a]", arguments[c], "assign");

    return b;
  }

  da("Promise", function (a) {
    function b(e) {
      cc11001100_hook("e", e, "function-parameter");
      this.h = cc11001100_hook("this.h", 0, "assign");
      this.i = cc11001100_hook("this.i", void 0, "assign");
      this.g = cc11001100_hook("this.g", [], "assign");
      this.u = cc11001100_hook("this.u", !1, "assign");
      var h = cc11001100_hook("h", this.j(), "var-init");

      try {
        e(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    }

    function c() {
      this.g = cc11001100_hook("this.g", null, "assign");
    }

    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e instanceof b ? e : new b(function (h) {
        h(e);
      });
    }

    if (a) return a;
    c.prototype.h = cc11001100_hook("c.prototype.h", function (e) {
      if (null == this.g) {
        this.g = cc11001100_hook("this.g", [], "assign");
        var h = cc11001100_hook("h", this, "var-init");
        this.i(function () {
          h.m();
        });
      }

      this.g.push(e);
    }, "assign");
    var f = cc11001100_hook("f", p.setTimeout, "var-init");
    c.prototype.i = cc11001100_hook("c.prototype.i", function (e) {
      f(e, 0);
    }, "assign");
    c.prototype.m = cc11001100_hook("c.prototype.m", function () {
      for (; this.g && this.g.length;) {
        var e = cc11001100_hook("e", this.g, "var-init");
        this.g = cc11001100_hook("this.g", [], "assign");

        for (var h = cc11001100_hook("h", 0, "var-init"); h < e.length; ++h) {
          var k = cc11001100_hook("k", e[h], "var-init");
          e[h] = cc11001100_hook("e[h]", null, "assign");

          try {
            k();
          } catch (l) {
            this.j(l);
          }
        }
      }

      this.g = cc11001100_hook("this.g", null, "assign");
    }, "assign");
    c.prototype.j = cc11001100_hook("c.prototype.j", function (e) {
      this.i(function () {
        throw e;
      });
    }, "assign");
    b.prototype.j = cc11001100_hook("b.prototype.j", function () {
      function e(l) {
        cc11001100_hook("l", l, "function-parameter");
        return function (m) {
          k || (k = cc11001100_hook("k", !0, "assign"), l.call(h, m));
        };
      }

      var h = cc11001100_hook("h", this, "var-init"),
          k = cc11001100_hook("k", !1, "var-init");
      return {
        resolve: cc11001100_hook("resolve", e(this.D), "object-key-init"),
        reject: cc11001100_hook("reject", e(this.m), "object-key-init")
      };
    }, "assign");
    b.prototype.D = cc11001100_hook("b.prototype.D", function (e) {
      if (e === this) this.m(new TypeError("A Promise cannot resolve to itself"));else if (e instanceof b) this.G(e);else {
        a: switch (typeof e) {
          case "object":
            var h = cc11001100_hook("h", null != e, "var-init");
            break a;

          case "function":
            h = cc11001100_hook("h", !0, "assign");
            break a;

          default:
            h = cc11001100_hook("h", !1, "assign");
        }

        h ? this.A(e) : this.o(e);
      }
    }, "assign");
    b.prototype.A = cc11001100_hook("b.prototype.A", function (e) {
      var h = cc11001100_hook("h", void 0, "var-init");

      try {
        h = cc11001100_hook("h", e.then, "assign");
      } catch (k) {
        this.m(k);
        return;
      }

      "function" == typeof h ? this.H(h, e) : this.o(e);
    }, "assign");
    b.prototype.m = cc11001100_hook("b.prototype.m", function (e) {
      this.v(2, e);
    }, "assign");
    b.prototype.o = cc11001100_hook("b.prototype.o", function (e) {
      this.v(1, e);
    }, "assign");
    b.prototype.v = cc11001100_hook("b.prototype.v", function (e, h) {
      if (0 != this.h) throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.h);
      this.h = cc11001100_hook("this.h", e, "assign");
      this.i = cc11001100_hook("this.i", h, "assign");
      2 === this.h && this.F();
      this.B();
    }, "assign");
    b.prototype.F = cc11001100_hook("b.prototype.F", function () {
      var e = cc11001100_hook("e", this, "var-init");
      f(function () {
        if (e.C()) {
          var h = cc11001100_hook("h", p.console, "var-init");
          "undefined" !== typeof h && h.error(e.i);
        }
      }, 1);
    }, "assign");
    b.prototype.C = cc11001100_hook("b.prototype.C", function () {
      if (this.u) return !1;
      var e = cc11001100_hook("e", p.CustomEvent, "var-init"),
          h = cc11001100_hook("h", p.Event, "var-init"),
          k = cc11001100_hook("k", p.dispatchEvent, "var-init");
      if ("undefined" === typeof k) return !0;
      "function" === typeof e ? e = cc11001100_hook("e", new e("unhandledrejection", {
        cancelable: cc11001100_hook("cancelable", !0, "object-key-init")
      }), "assign") : "function" === typeof h ? e = cc11001100_hook("e", new h("unhandledrejection", {
        cancelable: cc11001100_hook("cancelable", !0, "object-key-init")
      }), "assign") : (e = cc11001100_hook("e", p.document.createEvent("CustomEvent"), "assign"), e.initCustomEvent("unhandledrejection", !1, !0, e));
      e.promise = cc11001100_hook("e.promise", this, "assign");
      e.reason = cc11001100_hook("e.reason", this.i, "assign");
      return k(e);
    }, "assign");
    b.prototype.B = cc11001100_hook("b.prototype.B", function () {
      if (null != this.g) {
        for (var e = cc11001100_hook("e", 0, "var-init"); e < this.g.length; ++e) g.h(this.g[e]);

        this.g = cc11001100_hook("this.g", null, "assign");
      }
    }, "assign");
    var g = cc11001100_hook("g", new c(), "var-init");
    b.prototype.G = cc11001100_hook("b.prototype.G", function (e) {
      var h = cc11001100_hook("h", this.j(), "var-init");
      e.I(h.resolve, h.reject);
    }, "assign");
    b.prototype.H = cc11001100_hook("b.prototype.H", function (e, h) {
      var k = cc11001100_hook("k", this.j(), "var-init");

      try {
        e.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    }, "assign");
    b.prototype.then = cc11001100_hook("b.prototype.then", function (e, h) {
      function k(n, q) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("q", q, "function-parameter");
        return "function" == typeof n ? function (v) {
          try {
            l(n(v));
          } catch (A) {
            m(A);
          }
        } : q;
      }

      var l,
          m,
          r = cc11001100_hook("r", new b(function (n, q) {
        l = cc11001100_hook("l", n, "assign");
        m = cc11001100_hook("m", q, "assign");
      }), "var-init");
      this.I(k(e, l), k(h, m));
      return r;
    }, "assign");
    b.prototype.catch = cc11001100_hook("b.prototype.catch", function (e) {
      return this.then(void 0, e);
    }, "assign");
    b.prototype.I = cc11001100_hook("b.prototype.I", function (e, h) {
      function k() {
        switch (l.h) {
          case 1:
            e(l.i);
            break;

          case 2:
            h(l.i);
            break;

          default:
            throw Error("Unexpected state: " + l.h);
        }
      }

      var l = cc11001100_hook("l", this, "var-init");
      null == this.g ? g.h(k) : this.g.push(k);
      this.u = cc11001100_hook("this.u", !0, "assign");
    }, "assign");
    b.resolve = cc11001100_hook("b.resolve", d, "assign");
    b.reject = cc11001100_hook("b.reject", function (e) {
      return new b(function (h, k) {
        k(e);
      });
    }, "assign");
    b.race = cc11001100_hook("b.race", function (e) {
      return new b(function (h, k) {
        for (var l = cc11001100_hook("l", ea(e), "var-init"), m = cc11001100_hook("m", l.next(), "var-init"); !m.done; m = cc11001100_hook("m", l.next(), "assign")) d(m.value).I(h, k);
      });
    }, "assign");
    b.all = cc11001100_hook("b.all", function (e) {
      var h = cc11001100_hook("h", ea(e), "var-init"),
          k = cc11001100_hook("k", h.next(), "var-init");
      return k.done ? d([]) : new b(function (l, m) {
        function r(v) {
          cc11001100_hook("v", v, "function-parameter");
          return function (A) {
            n[v] = cc11001100_hook("n[v]", A, "assign");
            q--;
            0 == q && l(n);
          };
        }

        var n = cc11001100_hook("n", [], "var-init"),
            q = cc11001100_hook("q", 0, "var-init");

        do n.push(void 0), q++, d(k.value).I(r(n.length - 1), m), k = cc11001100_hook("k", h.next(), "assign"); while (!k.done);
      });
    }, "assign");
    return b;
  });
  var oa = cc11001100_hook("oa", "function" == typeof Object.assign ? Object.assign : function (a, b) {
    for (var c = cc11001100_hook("c", 1, "var-init"); c < arguments.length; c++) {
      var d = cc11001100_hook("d", arguments[c], "var-init");
      if (d) for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = cc11001100_hook("a[f]", d[f], "assign"));
    }

    return a;
  }, "var-init");
  da("Object.assign", function (a) {
    return a || oa;
  });
  /* 
  Copyright The Closure Library Authors. 
  SPDX-License-Identifier: Apache-2.0 
  */

  var t = cc11001100_hook("t", this || self, "var-init");

  function pa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a;
  }

  ;
  var qa, ra;

  a: {
    for (var sa = cc11001100_hook("sa", ["CLOSURE_FLAGS"], "var-init"), ta = cc11001100_hook("ta", t, "var-init"), ua = cc11001100_hook("ua", 0, "var-init"); ua < sa.length; ua++) if (ta = cc11001100_hook("ta", ta[sa[ua]], "assign"), null == ta) {
      ra = cc11001100_hook("ra", null, "assign");
      break a;
    }

    ra = cc11001100_hook("ra", ta, "assign");
  }

  var va = cc11001100_hook("va", ra && ra[610401301], "var-init");
  qa = cc11001100_hook("qa", null != va ? va : !1, "assign");
  var u,
      wa = cc11001100_hook("wa", t.navigator, "var-init");
  u = cc11001100_hook("u", wa ? wa.userAgentData || null : null, "assign");

  function xa(a) {
    cc11001100_hook("a", a, "function-parameter");
    return qa ? u ? u.brands.some(function (b) {
      return (b = cc11001100_hook("b", b.brand, "assign")) && -1 != b.indexOf(a);
    }) : !1 : !1;
  }

  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b;

    a: {
      if (b = cc11001100_hook("b", t.navigator, "assign")) if (b = cc11001100_hook("b", b.userAgent, "assign")) break a;
      b = cc11001100_hook("b", "", "assign");
    }

    return -1 != b.indexOf(a);
  }

  ;

  function y() {
    return qa ? !!u && 0 < u.brands.length : !1;
  }

  function ya() {
    return y() ? xa("Chromium") : (w("Chrome") || w("CriOS")) && !(y() ? 0 : w("Edge")) || w("Silk");
  }

  ;
  var za = cc11001100_hook("za", Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

    for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;

    return -1;
  }, "var-init"),
      Aa = cc11001100_hook("Aa", Array.prototype.forEach ? function (a, b) {
    Array.prototype.forEach.call(a, b, void 0);
  } : function (a, b) {
    for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < c; f++) f in d && b.call(void 0, d[f], f, a);
  }, "var-init");

  function Ba(a) {
    cc11001100_hook("a", a, "function-parameter");
    Ba[" "](a);
    return a;
  }

  Ba[" "] = cc11001100_hook("Ba[\" \"]", function () {}, "assign");
  var Ca = cc11001100_hook("Ca", y() ? !1 : w("Trident") || w("MSIE"), "var-init");
  !w("Android") || ya();
  ya();
  w("Safari") && (ya() || (y() ? 0 : w("Coast")) || (y() ? 0 : w("Opera")) || (y() ? 0 : w("Edge")) || (y() ? xa("Microsoft Edge") : w("Edg/")) || y() && xa("Opera"));
  var Da = cc11001100_hook("Da", {}, "var-init"),
      Ea = cc11001100_hook("Ea", null, "var-init");
  var Fa = cc11001100_hook("Fa", "undefined" !== typeof Uint8Array, "var-init"),
      Ga = cc11001100_hook("Ga", !Ca && "function" === typeof btoa, "var-init");
  var z = cc11001100_hook("z", "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0, "var-init"),
      Ha = cc11001100_hook("Ha", z ? function (a, b) {
    a[z] |= cc11001100_hook("a[z]", b, "assign");
  } : function (a, b) {
    void 0 !== a.s ? a.s |= cc11001100_hook("a.s", b, "assign") : Object.defineProperties(a, {
      s: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
  }, "var-init");

  function Ia(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", B(a), "var-init");
    1 !== (b & 1) && (Object.isFrozen(a) && (a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign")), C(a, b | 1));
  }

  var B = cc11001100_hook("B", z ? function (a) {
    return a[z] | 0;
  } : function (a) {
    return a.s | 0;
  }, "var-init"),
      D = cc11001100_hook("D", z ? function (a) {
    return a[z];
  } : function (a) {
    return a.s;
  }, "var-init"),
      C = cc11001100_hook("C", z ? function (a, b) {
    a[z] = cc11001100_hook("a[z]", b, "assign");
  } : function (a, b) {
    void 0 !== a.s ? a.s = cc11001100_hook("a.s", b, "assign") : Object.defineProperties(a, {
      s: {
        value: cc11001100_hook("value", b, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
      }
    });
  }, "var-init");

  function Ja() {
    var a = cc11001100_hook("a", [], "var-init");
    Ha(a, 1);
    return a;
  }

  function Ka(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    C(b, (a | 0) & -255);
  }

  function La(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    C(b, (a | 34) & -221);
  }

  function Ma(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a >> 11 & 1023, "assign");
    return 0 === a ? 536870912 : a;
  }

  ;
  var Na = cc11001100_hook("Na", {}, "var-init");

  function E(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }

  var Oa,
      F,
      Pa = cc11001100_hook("Pa", [], "var-init");
  C(Pa, 39);
  F = cc11001100_hook("F", Object.freeze(Pa), "assign");

  function Qa(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a) return a;

    if ("string" === typeof a) {
      if (!a) return;
      a = cc11001100_hook("a", +a, "assign");
    }

    if ("number" === typeof a) return a;
  }

  ;
  var Ra;

  function Sa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    Ra = cc11001100_hook("Ra", b, "assign");
    a = cc11001100_hook("a", new a(b), "assign");
    Ra = cc11001100_hook("Ra", void 0, "assign");
    return a;
  }

  function Va(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    null == a && (a = cc11001100_hook("a", Ra, "assign"));
    Ra = cc11001100_hook("Ra", void 0, "assign");

    if (null == a) {
      var d = cc11001100_hook("d", 96, "var-init");
      c ? (a = cc11001100_hook("a", [c], "assign"), d |= cc11001100_hook("d", 512, "assign")) : a = cc11001100_hook("a", [], "assign");
      b && (d = cc11001100_hook("d", d & -2095105 | (b & 1023) << 11, "assign"));
    } else {
      if (!Array.isArray(a)) throw Error();
      d = cc11001100_hook("d", B(a), "assign");
      if (d & 64) return a;
      d |= cc11001100_hook("d", 64, "assign");
      if (c && (d |= cc11001100_hook("d", 512, "assign"), c !== a[0])) throw Error();

      a: {
        c = cc11001100_hook("c", a, "assign");
        var f = cc11001100_hook("f", c.length, "var-init");

        if (f) {
          var g = cc11001100_hook("g", f - 1, "var-init"),
              e = cc11001100_hook("e", c[g], "var-init");

          if (E(e)) {
            d |= cc11001100_hook("d", 256, "assign");
            b = cc11001100_hook("b", +!!(d & 512) - 1, "assign");
            f = cc11001100_hook("f", g - b, "assign");
            1024 <= f && (Wa(c, b, e), f = cc11001100_hook("f", 1023, "assign"));
            d = cc11001100_hook("d", d & -2095105 | (f & 1023) << 11, "assign");
            break a;
          }
        }

        b && (e = cc11001100_hook("e", +!!(d & 512) - 1, "assign"), b = cc11001100_hook("b", Math.max(b, f - e), "assign"), 1024 < b && (Wa(c, e, {}), d |= cc11001100_hook("d", 256, "assign"), b = cc11001100_hook("b", 1023, "assign")), d = cc11001100_hook("d", d & -2095105 | (b & 1023) << 11, "assign"));
      }
    }

    C(a, d);
    return a;
  }

  function Wa(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");

    for (var d = cc11001100_hook("d", 1023 + b, "var-init"), f = cc11001100_hook("f", a.length, "var-init"), g = cc11001100_hook("g", d, "var-init"); g < f; g++) {
      var e = cc11001100_hook("e", a[g], "var-init");
      null != e && e !== c && (c[g - b] = cc11001100_hook("c[g - b]", e, "assign"));
    }

    a.length = cc11001100_hook("a.length", d + 1, "assign");
    a[d] = cc11001100_hook("a[d]", c, "assign");
  }

  ;

  function Xa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Ya(b);
  }

  function Ya(a) {
    cc11001100_hook("a", a, "function-parameter");

    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);

      case "boolean":
        return a ? 1 : 0;

      case "object":
        if (a && !Array.isArray(a) && Fa && null != a && a instanceof Uint8Array) {
          if (Ga) {
            for (var b = cc11001100_hook("b", "", "var-init"), c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length - 10240, "var-init"); c < d;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(c, c += cc11001100_hook("c", 10240, "assign"))), "assign");

            b += cc11001100_hook("b", String.fromCharCode.apply(null, c ? a.subarray(c) : a), "assign");
            a = cc11001100_hook("a", btoa(b), "assign");
          } else {
            void 0 === b && (b = cc11001100_hook("b", 0, "assign"));

            if (!Ea) {
              Ea = cc11001100_hook("Ea", {}, "assign");
              c = cc11001100_hook("c", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "assign");
              d = cc11001100_hook("d", ["+/=", "+/", "-_=", "-_.", "-_"], "assign");

              for (var f = cc11001100_hook("f", 0, "var-init"); 5 > f; f++) {
                var g = cc11001100_hook("g", c.concat(d[f].split("")), "var-init");
                Da[f] = cc11001100_hook("Da[f]", g, "assign");

                for (var e = cc11001100_hook("e", 0, "var-init"); e < g.length; e++) {
                  var h = cc11001100_hook("h", g[e], "var-init");
                  void 0 === Ea[h] && (Ea[h] = cc11001100_hook("Ea[h]", e, "assign"));
                }
              }
            }

            b = cc11001100_hook("b", Da[b], "assign");
            c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "assign");
            d = cc11001100_hook("d", b[64] || "", "assign");

            for (f = cc11001100_hook("f", g = cc11001100_hook("g", 0, "assign"), "assign"); g < a.length - 2; g += cc11001100_hook("g", 3, "assign")) {
              var k = cc11001100_hook("k", a[g], "var-init"),
                  l = cc11001100_hook("l", a[g + 1], "var-init");
              h = cc11001100_hook("h", a[g + 2], "assign");
              e = cc11001100_hook("e", b[k >> 2], "assign");
              k = cc11001100_hook("k", b[(k & 3) << 4 | l >> 4], "assign");
              l = cc11001100_hook("l", b[(l & 15) << 2 | h >> 6], "assign");
              h = cc11001100_hook("h", b[h & 63], "assign");
              c[f++] = cc11001100_hook("c[f++]", e + k + l + h, "assign");
            }

            e = cc11001100_hook("e", 0, "assign");
            h = cc11001100_hook("h", d, "assign");

            switch (a.length - g) {
              case 2:
                e = cc11001100_hook("e", a[g + 1], "assign"), h = cc11001100_hook("h", b[(e & 15) << 2] || d, "assign");

              case 1:
                a = cc11001100_hook("a", a[g], "assign"), c[f] = cc11001100_hook("c[f]", b[a >> 2] + b[(a & 3) << 4 | e >> 4] + h + d, "assign");
            }

            a = cc11001100_hook("a", c.join(""), "assign");
          }

          return a;
        }

    }

    return a;
  }

  ;

  function Za(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");
    var d = cc11001100_hook("d", a.length, "var-init"),
        f = cc11001100_hook("f", b & 256 ? a[d - 1] : void 0, "var-init");
    d += cc11001100_hook("d", f ? -1 : 0, "assign");

    for (b = cc11001100_hook("b", b & 512 ? 1 : 0, "assign"); b < d; b++) a[b] = cc11001100_hook("a[b]", c(a[b]), "assign");

    if (f) {
      b = cc11001100_hook("b", a[b] = cc11001100_hook("a[b]", {}, "assign"), "assign");

      for (var g in f) b[g] = cc11001100_hook("b[g]", c(f[g]), "assign");
    }

    return a;
  }

  function $a(a, b, c, d, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");

    if (null != a) {
      if (Array.isArray(a)) a = cc11001100_hook("a", f && 0 == a.length && B(a) & 1 ? void 0 : g && B(a) & 2 ? a : ab(a, b, c, void 0 !== d, f, g), "assign");else if (E(a)) {
        var e = cc11001100_hook("e", {}, "var-init"),
            h;

        for (h in a) e[h] = cc11001100_hook("e[h]", $a(a[h], b, c, d, f, g), "assign");

        a = cc11001100_hook("a", e, "assign");
      } else a = cc11001100_hook("a", b(a, d), "assign");
      return a;
    }
  }

  function ab(a, b, c, d, f, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    var e = cc11001100_hook("e", d || c ? B(a) : 0, "var-init");
    d = cc11001100_hook("d", d ? !!(e & 32) : void 0, "assign");
    a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");

    for (var h = cc11001100_hook("h", 0, "var-init"); h < a.length; h++) a[h] = cc11001100_hook("a[h]", $a(a[h], b, c, d, f, g), "assign");

    c && c(e, a);
    return a;
  }

  function bb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.J === Na ? a.toJSON() : Ya(a);
  }

  ;

  function cb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    c = cc11001100_hook("c", void 0 === c ? La : c, "assign");

    if (null != a) {
      if (Fa && a instanceof Uint8Array) return b ? a : new Uint8Array(a);

      if (Array.isArray(a)) {
        var d = cc11001100_hook("d", B(a), "var-init");
        return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? ab(a, cb, d & 4 ? La : c, !0, !1, !0) : (C(a, d | 34), a);
      }

      a.J === Na && (b = cc11001100_hook("b", a.l, "assign"), c = cc11001100_hook("c", D(b), "assign"), a = cc11001100_hook("a", c & 2 ? a : Sa(a.constructor, db(b, c, !0)), "assign"));
      return a;
    }
  }

  function db(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", c || b & 2 ? La : Ka, "var-init"),
        f = cc11001100_hook("f", !!(b & 32), "var-init");
    a = cc11001100_hook("a", Za(a, b, function (g) {
      return cb(g, f, d);
    }), "assign");
    Ha(a, 32 | (c ? 2 : 0));
    return a;
  }

  ;

  function eb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", a.l, "assign");
    return fb(a, D(a), b);
  }

  function fb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if (-1 === c) return null;

    if (c >= Ma(b)) {
      if (b & 256) return a[a.length - 1][c];
    } else {
      var f = cc11001100_hook("f", a.length, "var-init");
      if (d && b & 256 && (d = cc11001100_hook("d", a[f - 1][c], "assign"), null != d)) return d;
      b = cc11001100_hook("b", c + (+!!(b & 512) - 1), "assign");
      if (b < f) return a[b];
    }
  }

  function gb(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", Ma(b), "var-init");

    if (c >= g || f) {
      f = cc11001100_hook("f", b, "assign");
      if (b & 256) g = cc11001100_hook("g", a[a.length - 1], "assign");else {
        if (null == d) return;
        g = cc11001100_hook("g", a[g + (+!!(b & 512) - 1)] = cc11001100_hook("a[g + (+!!(b & 512) - 1)]", {}, "assign"), "assign");
        f |= cc11001100_hook("f", 256, "assign");
      }
      g[c] = cc11001100_hook("g[c]", d, "assign");
      f !== b && C(a, f);
    } else a[c + (+!!(b & 512) - 1)] = cc11001100_hook("a[c + (+!!(b & 512) - 1)]", d, "assign"), b & 256 && (a = cc11001100_hook("a", a[a.length - 1], "assign"), c in a && delete a[c]);
  }

  function hb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", a.l, "assign");
    var d = cc11001100_hook("d", D(a), "var-init"),
        f = cc11001100_hook("f", fb(a, d, 1, c), "var-init");
    var g = cc11001100_hook("g", !1, "var-init");
    if (null == f || "object" !== typeof f || (g = cc11001100_hook("g", Array.isArray(f), "assign")) || f.J !== Na) {
      if (g) {
        var e = cc11001100_hook("e", g = cc11001100_hook("g", B(f), "assign"), "var-init");
        0 === e && (e |= cc11001100_hook("e", d & 32, "assign"));
        e |= cc11001100_hook("e", d & 2, "assign");
        e !== g && C(f, e);
        b = cc11001100_hook("b", new b(f), "assign");
      } else b = cc11001100_hook("b", void 0, "assign");
    } else b = cc11001100_hook("b", f, "assign");
    b !== f && null != b && gb(a, d, 1, b, c);
    return b;
  }

  function ib(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", G, "var-init");
    var c = cc11001100_hook("c", void 0 === c ? !1 : c, "var-init");
    b = cc11001100_hook("b", hb(a, b, c), "assign");
    if (null == b) return b;
    a = cc11001100_hook("a", a.l, "assign");
    var d = cc11001100_hook("d", D(a), "var-init");

    if (!(d & 2)) {
      var f = cc11001100_hook("f", b, "var-init");
      var g = cc11001100_hook("g", f.l, "var-init"),
          e = cc11001100_hook("e", D(g), "var-init");
      f = cc11001100_hook("f", e & 2 ? Sa(f.constructor, db(g, e, !1)) : f, "assign");
      f !== b && (b = cc11001100_hook("b", f, "assign"), gb(a, d, 1, b, c));
    }

    return b;
  }

  function H(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", eb(a, b), "assign");
    return null == a || "string" === typeof a ? a : void 0;
  }

  function I(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return null != a ? a : b;
  }

  function J(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a = cc11001100_hook("a", eb(a, b), "assign");
    return I(null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0, !1);
  }

  function jb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", void 0 === c ? 0 : c, "var-init");
    return I(Qa(eb(a, b)), c);
  }

  function K(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (null != c && "string" !== typeof c) throw Error();
    a = cc11001100_hook("a", a.l, "assign");
    var d = cc11001100_hook("d", D(a), "var-init");
    if (d & 2) throw Error();
    gb(a, d, b, c);
  }

  ;

  function M(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    this.l = cc11001100_hook("this.l", Va(a, b, c), "assign");
  }

  M.prototype.toJSON = cc11001100_hook("M.prototype.toJSON", function () {
    if (Oa) var a = cc11001100_hook("a", kb(this, this.l, !1), "var-init");else a = cc11001100_hook("a", ab(this.l, bb, void 0, void 0, !1, !1), "assign"), a = cc11001100_hook("a", kb(this, a, !0), "assign");
    return a;
  }, "assign");
  M.prototype.J = cc11001100_hook("M.prototype.J", Na, "assign");

  function kb(a, b, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", a.constructor.P, "var-init"),
        f = cc11001100_hook("f", Ma(D(c ? a.l : b)), "var-init"),
        g = cc11001100_hook("g", !1, "var-init");

    if (d) {
      if (!c) {
        b = cc11001100_hook("b", Array.prototype.slice.call(b), "assign");
        var e;
        if (b.length && E(e = cc11001100_hook("e", b[b.length - 1], "assign"))) for (g = cc11001100_hook("g", 0, "assign"); g < d.length; g++) if (d[g] >= f) {
          Object.assign(b[b.length - 1] = cc11001100_hook("b[b.length - 1]", {}, "assign"), e);
          break;
        }
        g = cc11001100_hook("g", !0, "assign");
      }

      f = cc11001100_hook("f", b, "assign");
      c = cc11001100_hook("c", !c, "assign");
      e = cc11001100_hook("e", D(a.l), "assign");
      a = cc11001100_hook("a", Ma(e), "assign");
      e = cc11001100_hook("e", +!!(e & 512) - 1, "assign");

      for (var h, k, l = cc11001100_hook("l", 0, "var-init"); l < d.length; l++) if (k = cc11001100_hook("k", d[l], "assign"), k < a) {
        k += cc11001100_hook("k", e, "assign");
        var m = cc11001100_hook("m", f[k], "var-init");
        null == m ? f[k] = cc11001100_hook("f[k]", c ? F : Ja(), "assign") : c && m !== F && Ia(m);
      } else h || (m = cc11001100_hook("m", void 0, "assign"), f.length && E(m = cc11001100_hook("m", f[f.length - 1], "assign")) ? h = cc11001100_hook("h", m, "assign") : f.push(h = cc11001100_hook("h", {}, "assign"))), m = cc11001100_hook("m", h[k], "assign"), null == h[k] ? h[k] = cc11001100_hook("h[k]", c ? F : Ja(), "assign") : c && m !== F && Ia(m);
    }

    d = cc11001100_hook("d", b.length, "assign");
    if (!d) return b;
    var r;

    if (E(h = cc11001100_hook("h", b[d - 1], "assign"))) {
      a: {
        var n = cc11001100_hook("n", h, "var-init");
        f = cc11001100_hook("f", {}, "assign");
        c = cc11001100_hook("c", !1, "assign");

        for (var q in n) a = cc11001100_hook("a", n[q], "assign"), Array.isArray(a) && a != a && (c = cc11001100_hook("c", !0, "assign")), null != a ? f[q] = cc11001100_hook("f[q]", a, "assign") : c = cc11001100_hook("c", !0, "assign");

        if (c) {
          for (var v in f) {
            n = cc11001100_hook("n", f, "assign");
            break a;
          }

          n = cc11001100_hook("n", null, "assign");
        }
      }

      n != h && (r = cc11001100_hook("r", !0, "assign"));
      d--;
    }

    for (; 0 < d; d--) {
      h = cc11001100_hook("h", b[d - 1], "assign");
      if (null != h) break;
      var A = cc11001100_hook("A", !0, "var-init");
    }

    if (!r && !A) return b;
    var x;
    g ? x = cc11001100_hook("x", b, "assign") : x = cc11001100_hook("x", Array.prototype.slice.call(b, 0, d), "assign");
    b = cc11001100_hook("b", x, "assign");
    g && (b.length = cc11001100_hook("b.length", d, "assign"));
    n && b.push(n);
    return b;
  }

  ;

  function G(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.l = cc11001100_hook("this.l", Va(a), "assign");
  }

  ma(G, M);
  G.P = cc11001100_hook("G.P", [28], "assign");

  function lb(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.l = cc11001100_hook("this.l", Va(a), "assign");
  }

  ma(lb, M);
  var mb = cc11001100_hook("mb", function (a) {
    return function (b) {
      if (null == b || "" == b) b = cc11001100_hook("b", new a(), "assign");else {
        b = cc11001100_hook("b", JSON.parse(b), "assign");
        if (!Array.isArray(b)) throw Error(void 0);
        Ha(b, 32);
        b = cc11001100_hook("b", Sa(a, b), "assign");
      }
      return b;
    };
  }(lb), "var-init");
  lb.P = cc11001100_hook("lb.P", [21], "assign");

  function nb(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.l = cc11001100_hook("this.l", Va(a), "assign");
  }

  ma(nb, M);

  function ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a = cc11001100_hook("a", void 0 === a ? window : a, "assign");
  }

  ;

  function pb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", !1, "var-init"),
        c;
    return function () {
      b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
      return c;
    };
  }

  ;
  var qb = cc11001100_hook("qb", {
    passive: cc11001100_hook("passive", !0, "object-key-init")
  }, "var-init"),
      rb = cc11001100_hook("rb", pb(function () {
    var a = cc11001100_hook("a", !1, "var-init");

    try {
      var b = cc11001100_hook("b", Object.defineProperty({}, "passive", {
        get: function () {
          a = cc11001100_hook("a", !0, "assign");
        }
      }), "var-init");
      t.addEventListener("test", null, b);
    } catch (c) {}

    return a;
  }), "var-init");

  function sb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.passive && rb() ? a : a.capture || !1 : !1;
  }

  function N(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    a.addEventListener && a.addEventListener(b, c, sb(d));
  }

  ;
  var tb;

  function ub(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.g = cc11001100_hook("this.g", a, "assign");
  }

  ub.prototype.toString = cc11001100_hook("ub.prototype.toString", function () {
    return this.g + "";
  }, "assign");
  var vb = cc11001100_hook("vb", {}, "var-init");

  function O(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document, "var-init");
    return "string" === typeof a ? b.getElementById(a) : a;
  }

  function wb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document, "var-init");
    b.getElementsByClassName ? a = cc11001100_hook("a", b.getElementsByClassName(a)[0], "assign") : (b = cc11001100_hook("b", document, "assign"), a = cc11001100_hook("a", b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : xb(b, a)[0] || null, "assign"));
    return a || null;
  }

  function xb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c, d;
    if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");

    if (b && a.getElementsByClassName) {
      var f = cc11001100_hook("f", a.getElementsByClassName(b), "var-init");
      return f;
    }

    f = cc11001100_hook("f", a.getElementsByTagName("*"), "assign");

    if (b) {
      var g = cc11001100_hook("g", {}, "var-init");

      for (c = cc11001100_hook("c", d = cc11001100_hook("d", 0, "assign"), "assign"); a = cc11001100_hook("a", f[c], "assign"); c++) {
        var e = cc11001100_hook("e", a.className, "var-init"),
            h;
        if (h = cc11001100_hook("h", "function" == typeof e.split, "assign")) h = cc11001100_hook("h", 0 <= za(e.split(/\s+/), b), "assign");
        h && (g[d++] = cc11001100_hook("g[d++]", a, "assign"));
      }

      g.length = cc11001100_hook("g.length", d, "assign");
      return g;
    }

    return f;
  }

  function yb(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && a.parentNode && a.parentNode.removeChild(a);
  }

  ;
  var zb = cc11001100_hook("zb", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init"),
      Ab = cc11001100_hook("Ab", /#|$/, "var-init");

  function Bb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }

  function Q(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.preventDefault ? a.preventDefault() : a.returnValue = cc11001100_hook("a.returnValue", !1, "assign");
  }

  function Cb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", void 0 === b ? document : b, "assign");
    return b.createElement(String(a).toLowerCase());
  }

  ;

  function Db(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    Eb(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d);
  }

  function Eb(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var f = cc11001100_hook("f", !1, "var-init");
    f = cc11001100_hook("f", void 0 === f ? !1 : f, "assign");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    var g = cc11001100_hook("g", Cb("IMG", a.document), "var-init");

    if (c || d) {
      var e = function (h) {
        c && c(h);

        if (d) {
          h = cc11001100_hook("h", a.google_image_requests, "assign");
          var k = cc11001100_hook("k", za(h, g), "var-init");
          0 <= k && Array.prototype.splice.call(h, k, 1);
        }

        g.removeEventListener && g.removeEventListener("load", e, sb());
        g.removeEventListener && g.removeEventListener("error", e, sb());
      };

      N(g, "load", e);
      N(g, "error", e);
    }

    f && (g.attributionSrc = cc11001100_hook("g.attributionSrc", "", "assign"));
    g.src = cc11001100_hook("g.src", b, "assign");
    a.google_image_requests.push(g);
  }

  ;
  var Fb = cc11001100_hook("Fb", 0, "var-init");

  function Gb(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", Hb(a), "assign")) && a.getAttribute("data-jc-version") || "unknown";
  }

  function Hb(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", document.currentScript, "var-init");
    return (b = cc11001100_hook("b", void 0 === b ? null : b, "assign")) && b.getAttribute("data-jc") === String(a) ? b : document.querySelector('[data-jc="' + a + '"]');
  }

  function Ib() {
    var a = cc11001100_hook("a", void 0 === a ? .01 : a, "var-init");

    if (!(Math.random() > a)) {
      var b = cc11001100_hook("b", Hb(60), "var-init");
      a = cc11001100_hook("a", "https://" + (b && "true" === b.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com") + "/pagead/gen_204?id=jca&jc=60&version=" + Gb(60) + "&sample=" + a, "assign");
      b = cc11001100_hook("b", window, "assign");
      var c = cc11001100_hook("c", void 0 === c ? !1 : c, "var-init");
      var d;
      if (d = cc11001100_hook("d", b.navigator, "assign")) d = cc11001100_hook("d", b.navigator.userAgent, "assign"), d = cc11001100_hook("d", /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1, "assign");
      d && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Db(b, a, void 0, c);
    }
  }

  ;
  var Jb = cc11001100_hook("Jb", document, "var-init"),
      R = cc11001100_hook("R", window, "var-init");

  function Ob(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "";
  }

  function Pb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.classList ? b = cc11001100_hook("b", a.classList.contains(b), "assign") : (a = cc11001100_hook("a", a.classList ? a.classList : Ob(a).match(/\S+/g) || [], "assign"), b = cc11001100_hook("b", 0 <= za(a, b), "assign"));
    return b;
  }

  function S(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a.classList) a.classList.add(b);else if (!Pb(a, b)) {
      var c = cc11001100_hook("c", Ob(a), "var-init");
      b = cc11001100_hook("b", c + (0 < c.length ? " " + b : b), "assign");
      "string" == typeof a.className ? a.className = cc11001100_hook("a.className", b, "assign") : a.setAttribute && a.setAttribute("class", b);
    }
  }

  ;

  function Qb(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.serializedAttributionData = cc11001100_hook("this.serializedAttributionData", a.toJSON(), "assign");
    var b = cc11001100_hook("b", a.l, "var-init");
    this.g = cc11001100_hook("this.g", Sa(a.constructor, db(b, D(b), !1)), "assign");
    this.isMutableImpression = cc11001100_hook("this.isMutableImpression", void 0 !== hb(this.g, G, !1) && !!J(ib(this.g), 33), "assign");
    this.Z = cc11001100_hook("this.Z", !!J(this.g, 11), "assign");
    this.hasUserFeedbackData = cc11001100_hook("this.hasUserFeedbackData", !!this.g && void 0 !== hb(this.g, G, !1), "assign");
    this.T = cc11001100_hook("this.T", !!J(this.g, 4), "assign");
    this.W = cc11001100_hook("this.W", !!J(this.g, 6), "assign");
    this.S = cc11001100_hook("this.S", !!J(this.g, 13), "assign");
    jb(this.g, 8);
    this.creativeIndexSuffix = cc11001100_hook("this.creativeIndexSuffix", 1 < jb(this.g, 8) ? jb(this.g, 7).toString() : "", "assign");
    null != H(this.g, 34) && (this.creativeIndexSuffix = cc11001100_hook("this.creativeIndexSuffix", I(H(this.g, 34), "") + "_" + this.creativeIndexSuffix, "assign"));
    this.aa = cc11001100_hook("this.aa", !!J(this.g, 17), "assign");
    this.Y = cc11001100_hook("this.Y", !!J(this.g, 18), "assign");
    this.R = cc11001100_hook("this.R", !!J(this.g, 14), "assign");
    this.F = cc11001100_hook("this.F", !!J(this.g, 15), "assign");
    this.ba = cc11001100_hook("this.ba", !!J(this.g, 31), "assign");
    this.X = cc11001100_hook("this.X", 1 == J(this.g, 9), "assign");
    this.openAttributionInline = cc11001100_hook("this.openAttributionInline", 1 == J(this.g, 10), "assign");
    this.isMobileDevice = cc11001100_hook("this.isMobileDevice", !!J(this.g, 12), "assign");
    this.A = cc11001100_hook("this.A", null, "assign");
    this.V = cc11001100_hook("this.V", (a = cc11001100_hook("a", Jb.querySelector("[data-slide]"), "assign")) ? "true" === a.getAttribute("data-slide") : !1, "assign");
    (this.H = cc11001100_hook("this.H", 1 < jb(this.g, 8), "assign")) && void 0 === R.goog_multislot_cache && (R.goog_multislot_cache = cc11001100_hook("R.goog_multislot_cache", {}, "assign"));

    if (this.H && !this.V) {
      if (a = cc11001100_hook("a", R.goog_multislot_cache.hd, "assign"), void 0 === a) {
        a = cc11001100_hook("a", !1, "assign");
        if (b = cc11001100_hook("b", Jb.querySelector("[data-dim]"), "assign")) {
          if (b = cc11001100_hook("b", b.getBoundingClientRect(), "assign"), 150 <= b.right - b.left && 150 <= b.bottom - b.top) a = cc11001100_hook("a", !1, "assign");else {
            var c = cc11001100_hook("c", document.body.getBoundingClientRect(), "var-init");
            150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = cc11001100_hook("a", !0, "assign"));
          }
        } else a = cc11001100_hook("a", !1, "assign");
        window.goog_multislot_cache.hd = cc11001100_hook("window.goog_multislot_cache.hd", a, "assign");
      }
    } else a = cc11001100_hook("a", !1, "assign");

    this.G = cc11001100_hook("this.G", a, "assign");
    this.B = cc11001100_hook("this.B", O("abgcp" + this.creativeIndexSuffix), "assign");
    this.v = cc11001100_hook("this.v", O("abgc" + this.creativeIndexSuffix), "assign");
    this.h = cc11001100_hook("this.h", O("abgs" + this.creativeIndexSuffix), "assign");
    O("abgl" + this.creativeIndexSuffix);
    this.u = cc11001100_hook("this.u", O("abgb" + this.creativeIndexSuffix), "assign");
    this.D = cc11001100_hook("this.D", O("abgac" + this.creativeIndexSuffix), "assign");
    O("mute_panel" + this.creativeIndexSuffix);
    this.C = cc11001100_hook("this.C", wb("goog_delegate_attribution" + this.creativeIndexSuffix), "assign");
    this.isDelegateAttributionActive = cc11001100_hook("this.isDelegateAttributionActive", !!this.C && !!this.R && !wb("goog_delegate_disabled") && !this.F, "assign");
    if (this.h) a: for (a = cc11001100_hook("a", this.h, "assign"), b = cc11001100_hook("b", a.childNodes, "assign"), c = cc11001100_hook("c", 0, "assign"); c < b.length; c++) {
      var d = cc11001100_hook("d", b.item(c), "var-init");

      if ("undefined" != typeof d.tagName && "A" == d.tagName.toUpperCase()) {
        a = cc11001100_hook("a", d, "assign");
        break a;
      }
    } else a = cc11001100_hook("a", null, "assign");
    this.m = cc11001100_hook("this.m", a, "assign");
    this.j = cc11001100_hook("this.j", this.isDelegateAttributionActive ? this.C : O("cbb" + this.creativeIndexSuffix), "assign");
    this.U = cc11001100_hook("this.U", this.G ? "0" === this.creativeIndexSuffix : !0, "assign");
    this.enableDelegateDismissableMenu = cc11001100_hook("this.enableDelegateDismissableMenu", !!this.j && Pb(this.j, "goog_dismissable_menu"), "assign");
    this.o = cc11001100_hook("this.o", null, "assign");
    this.K = cc11001100_hook("this.K", 0, "assign");
    this.i = cc11001100_hook("this.i", this.isDelegateAttributionActive ? this.C : this.W && this.B ? this.B : this.v, "assign");
    this.autoExpandOnLoad = cc11001100_hook("this.autoExpandOnLoad", !!J(this.g, 19), "assign");
    this.adbadgeEnabled = cc11001100_hook("this.adbadgeEnabled", !!J(this.g, 24), "assign");
    this.enableNativeJakeUi = cc11001100_hook("this.enableNativeJakeUi", !!J(this.g, 27), "assign");
  }

  ;

  function Rb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a) throw Error("bad conv util ctor args");
    this.g = cc11001100_hook("this.g", a, "assign");
    this.h = cc11001100_hook("this.h", b, "assign");
  }

  ;

  function T(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a && Bb(b, function (c, d) {
      a.style[d] = cc11001100_hook("a.style[d]", c, "assign");
    });
  }

  ;

  function Sb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", void 0 === c ? {} : c, "var-init");
    this.error = cc11001100_hook("this.error", a, "assign");
    this.context = cc11001100_hook("this.context", b.context, "assign");
    this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
    this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
    this.meta = cc11001100_hook("this.meta", c, "assign");
  }

  ;
  var Tb = cc11001100_hook("Tb", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");

  function Ub(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.g = cc11001100_hook("this.g", a, "assign");
    this.h = cc11001100_hook("this.h", b, "assign");
  }

  function Vb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.url = cc11001100_hook("this.url", a, "assign");
    this.N = cc11001100_hook("this.N", !!b, "assign");
    this.depth = cc11001100_hook("this.depth", null, "assign");
  }

  ;
  var Wb = cc11001100_hook("Wb", null, "var-init");

  function Xb() {
    var a = cc11001100_hook("a", void 0 === a ? t : a, "var-init");
    return (a = cc11001100_hook("a", a.performance, "assign")) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }

  function Yb() {
    var a = cc11001100_hook("a", void 0 === a ? t : a, "var-init");
    return (a = cc11001100_hook("a", a.performance, "assign")) && a.now ? a.now() : null;
  }

  ;

  function Zb(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", Yb() || Xb(), "var-init");
    this.label = cc11001100_hook("this.label", a, "assign");
    this.type = cc11001100_hook("this.type", b, "assign");
    this.value = cc11001100_hook("this.value", c, "assign");
    this.duration = cc11001100_hook("this.duration", 0, "assign");
    this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
    this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
  }

  ;
  var U = cc11001100_hook("U", t.performance, "var-init"),
      $b = cc11001100_hook("$b", !!(U && U.mark && U.measure && U.clearMarks), "var-init"),
      V = cc11001100_hook("V", pb(function () {
    var a;

    if (a = cc11001100_hook("a", $b, "assign")) {
      var b;

      if (null === Wb) {
        Wb = cc11001100_hook("Wb", "", "assign");

        try {
          a = cc11001100_hook("a", "", "assign");

          try {
            a = cc11001100_hook("a", t.top.location.hash, "assign");
          } catch (c) {
            a = cc11001100_hook("a", t.location.hash, "assign");
          }

          a && (Wb = cc11001100_hook("Wb", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
        } catch (c) {}
      }

      b = cc11001100_hook("b", Wb, "assign");
      a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
    }

    return a;
  }), "var-init");

  function ac() {
    var a = cc11001100_hook("a", window, "var-init");
    this.h = cc11001100_hook("this.h", [], "assign");
    this.i = cc11001100_hook("this.i", a || t, "assign");
    var b = cc11001100_hook("b", null, "var-init");
    a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.h = cc11001100_hook("this.h", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
    this.g = cc11001100_hook("this.g", V() || (null != b ? b : 1 > Math.random()), "assign");
  }

  function bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    a && U && V() && (U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  }

  ac.prototype.start = cc11001100_hook("ac.prototype.start", function (a, b) {
    if (!this.g) return null;
    a = cc11001100_hook("a", new Zb(a, b), "assign");
    b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_start", "assign");
    U && V() && U.mark(b);
    return a;
  }, "assign");
  ac.prototype.end = cc11001100_hook("ac.prototype.end", function (a) {
    if (this.g && "number" === typeof a.value) {
      a.duration = cc11001100_hook("a.duration", (Yb() || Xb()) - a.value, "assign");
      var b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_end", "var-init");
      U && V() && U.mark(b);
      !this.g || 2048 < this.h.length || this.h.push(a);
    }
  }, "assign");

  function cc() {
    this.i = cc11001100_hook("this.i", "&", "assign");
    this.h = cc11001100_hook("this.h", {}, "assign");
    this.j = cc11001100_hook("this.j", 0, "assign");
    this.g = cc11001100_hook("this.g", [], "assign");
  }

  function dc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    c[a] = cc11001100_hook("c[a]", b, "assign");
    return [c];
  }

  function ec(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    var g = cc11001100_hook("g", [], "var-init");
    Bb(a, function (e, h) {
      (e = cc11001100_hook("e", fc(e, b, c, d, f), "assign")) && g.push(h + "=" + e);
    });
    return g.join(b);
  }

  function fc(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (null == a) return "";
    b = cc11001100_hook("b", b || "&", "assign");
    c = cc11001100_hook("c", c || ",$", "assign");
    "string" == typeof c && (c = cc11001100_hook("c", c.split(""), "assign"));

    if (a instanceof Array) {
      if (d = cc11001100_hook("d", d || 0, "assign"), d < c.length) {
        for (var g = cc11001100_hook("g", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < a.length; e++) g.push(fc(a[e], b, c, d + 1, f));

        return g.join(c[d]);
      }
    } else if ("object" == typeof a) return f = cc11001100_hook("f", f || 0, "assign"), 2 > f ? encodeURIComponent(ec(a, b, c, d, f + 1)) : "...";

    return encodeURIComponent(String(a));
  }

  function gc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
        d = cc11001100_hook("d", hc(a) - b.length, "var-init");
    if (0 > d) return "";
    a.g.sort(function (m, r) {
      return m - r;
    });
    b = cc11001100_hook("b", null, "assign");

    for (var f = cc11001100_hook("f", "", "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < a.g.length; g++) for (var e = cc11001100_hook("e", a.g[g], "var-init"), h = cc11001100_hook("h", a.h[e], "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < h.length; k++) {
      if (!d) {
        b = cc11001100_hook("b", null == b ? e : b, "assign");
        break;
      }

      var l = cc11001100_hook("l", ec(h[k], a.i, ",$"), "var-init");

      if (l) {
        l = cc11001100_hook("l", f + l, "assign");

        if (d >= l.length) {
          d -= cc11001100_hook("d", l.length, "assign");
          c += cc11001100_hook("c", l, "assign");
          f = cc11001100_hook("f", a.i, "assign");
          break;
        }

        b = cc11001100_hook("b", null == b ? e : b, "assign");
      }
    }

    a = cc11001100_hook("a", "", "assign");
    null != b && (a = cc11001100_hook("a", f + "trn=" + b, "assign"));
    return c + a;
  }

  function hc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", 1, "var-init"),
        c;

    for (c in a.h) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");

    return 3997 - b - a.i.length - 1;
  }

  ;

  function ic() {
    var a = cc11001100_hook("a", jc, "var-init");
    this.pinger = cc11001100_hook("this.pinger", kc, "assign");
    this.g = cc11001100_hook("this.g", void 0 === a ? null : a, "assign");
    this.h = cc11001100_hook("this.h", null, "assign");
    this.i = cc11001100_hook("this.i", !1, "assign");
    this.m = cc11001100_hook("this.m", this.j, "assign");
  }

  function lc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", mc, "var-init");

    try {
      if (c.g && c.g.g) {
        var d = cc11001100_hook("d", c.g.start(a.toString(), 3), "var-init");
        var f = cc11001100_hook("f", b(), "var-init");
        c.g.end(d);
      } else f = cc11001100_hook("f", b(), "assign");
    } catch (h) {
      b = cc11001100_hook("b", !0, "assign");

      try {
        bc(d), b = cc11001100_hook("b", c.m(a, new Sb(h, {
          message: cc11001100_hook("message", nc(h), "object-key-init")
        }), void 0, void 0), "assign");
      } catch (k) {
        c.j(217, k);
      }

      if (b) {
        var g, e;
        null == (g = cc11001100_hook("g", window.console, "assign")) || null == (e = cc11001100_hook("e", g.error, "assign")) || e.call(g, h);
      } else throw h;
    }

    return f;
  }

  function oc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return function () {
      var c = cc11001100_hook("c", na.apply(0, arguments), "var-init");
      return lc(a, function () {
        return b.apply(void 0, c);
      });
    };
  }

  ic.prototype.j = cc11001100_hook("ic.prototype.j", function (a, b, c, d, f) {
    f = cc11001100_hook("f", f || "jserror", "assign");

    try {
      var g = cc11001100_hook("g", new cc(), "var-init");
      g.g.push(1);
      g.h[1] = cc11001100_hook("g.h[1]", dc("context", a), "assign");
      b.error && b.meta && b.id || (b = cc11001100_hook("b", new Sb(b, {
        message: cc11001100_hook("message", nc(b), "object-key-init")
      }), "assign"));

      if (b.msg) {
        var e = cc11001100_hook("e", b.msg.substring(0, 512), "var-init");
        g.g.push(2);
        g.h[2] = cc11001100_hook("g.h[2]", dc("msg", e), "assign");
      }

      var h = cc11001100_hook("h", b.meta || {}, "var-init");
      if (this.h) try {
        this.h(h);
      } catch (P) {}
      if (d) try {
        d(h);
      } catch (P) {}
      b = cc11001100_hook("b", [h], "assign");
      g.g.push(3);
      g.h[3] = cc11001100_hook("g.h[3]", b, "assign");
      d = cc11001100_hook("d", t, "assign");
      b = cc11001100_hook("b", [], "assign");
      e = cc11001100_hook("e", null, "assign");

      do {
        var k = cc11001100_hook("k", d, "var-init");

        try {
          var l;
          if (l = cc11001100_hook("l", !!k && null != k.location.href, "assign")) b: {
            try {
              Ba(k.foo);
              l = cc11001100_hook("l", !0, "assign");
              break b;
            } catch (P) {}

            l = cc11001100_hook("l", !1, "assign");
          }
          var m = cc11001100_hook("m", l, "var-init");
        } catch (P) {
          m = cc11001100_hook("m", !1, "assign");
        }

        if (m) {
          var r = cc11001100_hook("r", k.location.href, "var-init");
          e = cc11001100_hook("e", k.document && k.document.referrer || null, "assign");
        } else r = cc11001100_hook("r", e, "assign"), e = cc11001100_hook("e", null, "assign");

        b.push(new Vb(r || ""));

        try {
          d = cc11001100_hook("d", k.parent, "assign");
        } catch (P) {
          d = cc11001100_hook("d", null, "assign");
        }
      } while (d && k != d);

      r = cc11001100_hook("r", 0, "assign");

      for (var n = cc11001100_hook("n", b.length - 1, "var-init"); r <= n; ++r) b[r].depth = cc11001100_hook("b[r].depth", n - r, "assign");

      k = cc11001100_hook("k", t, "assign");
      if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1) for (n = cc11001100_hook("n", 1, "assign"); n < b.length; ++n) {
        var q = cc11001100_hook("q", b[n], "var-init");
        q.url || (q.url = cc11001100_hook("q.url", k.location.ancestorOrigins[n - 1] || "", "assign"), q.N = cc11001100_hook("q.N", !0, "assign"));
      }
      var v = cc11001100_hook("v", new Vb(t.location.href, !1), "var-init");
      k = cc11001100_hook("k", null, "assign");
      var A = cc11001100_hook("A", b.length - 1, "var-init");

      for (q = cc11001100_hook("q", A, "assign"); 0 <= q; --q) {
        var x = cc11001100_hook("x", b[q], "var-init");
        !k && Tb.test(x.url) && (k = cc11001100_hook("k", x, "assign"));

        if (x.url && !x.N) {
          v = cc11001100_hook("v", x, "assign");
          break;
        }
      }

      x = cc11001100_hook("x", null, "assign");
      var Cc = cc11001100_hook("Cc", b.length && b[A].url, "var-init");
      0 != v.depth && Cc && (x = cc11001100_hook("x", b[A], "assign"));
      var L = cc11001100_hook("L", new Ub(v, x), "var-init");

      if (L.h) {
        var Dc = cc11001100_hook("Dc", L.h.url || "", "var-init");
        g.g.push(4);
        g.h[4] = cc11001100_hook("g.h[4]", dc("top", Dc), "assign");
      }

      var Ta = cc11001100_hook("Ta", {
        url: cc11001100_hook("url", L.g.url || "", "object-key-init")
      }, "var-init");

      if (L.g.url) {
        var Ua = cc11001100_hook("Ua", L.g.url.match(zb), "var-init"),
            Kb = cc11001100_hook("Kb", Ua[1], "var-init"),
            Lb = cc11001100_hook("Lb", Ua[3], "var-init"),
            Mb = cc11001100_hook("Mb", Ua[4], "var-init");
        v = cc11001100_hook("v", "", "assign");
        Kb && (v += cc11001100_hook("v", Kb + ":", "assign"));
        Lb && (v += cc11001100_hook("v", "//", "assign"), v += cc11001100_hook("v", Lb, "assign"), Mb && (v += cc11001100_hook("v", ":" + Mb, "assign")));
        var Nb = cc11001100_hook("Nb", v, "var-init");
      } else Nb = cc11001100_hook("Nb", "", "assign");

      Ta = cc11001100_hook("Ta", [Ta, {
        url: cc11001100_hook("url", Nb, "object-key-init")
      }], "assign");
      g.g.push(5);
      g.h[5] = cc11001100_hook("g.h[5]", Ta, "assign");
      pc(this.pinger, f, g, this.i, c);
    } catch (P) {
      try {
        pc(this.pinger, f, {
          context: cc11001100_hook("context", "ecmserr", "object-key-init"),
          rctx: cc11001100_hook("rctx", a, "object-key-init"),
          msg: cc11001100_hook("msg", nc(P), "object-key-init"),
          url: cc11001100_hook("url", L && L.g.url, "object-key-init")
        }, this.i, c);
      } catch (Rc) {}
    }

    return !0;
  }, "assign");

  function nc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.toString(), "var-init");
    a.name && -1 == b.indexOf(a.name) && (b += cc11001100_hook("b", ": " + a.name, "assign"));
    a.message && -1 == b.indexOf(a.message) && (b += cc11001100_hook("b", ": " + a.message, "assign"));

    if (a.stack) {
      a = cc11001100_hook("a", a.stack, "assign");
      var c = cc11001100_hook("c", b, "var-init");

      try {
        -1 == a.indexOf(c) && (a = cc11001100_hook("a", c + "\n" + a, "assign"));

        for (var d; a != d;) d = cc11001100_hook("d", a, "assign"), a = cc11001100_hook("a", a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1"), "assign");

        b = cc11001100_hook("b", a.replace(RegExp("\n *", "g"), "\n"), "assign");
      } catch (f) {
        b = cc11001100_hook("b", c, "assign");
      }
    }

    return b;
  }

  ;

  function qc() {
    this.g = cc11001100_hook("this.g", Math.random(), "assign");
  }

  function rc() {
    var a = cc11001100_hook("a", kc, "var-init"),
        b = cc11001100_hook("b", window.google_srt, "var-init");
    0 <= b && 1 >= b && (a.g = cc11001100_hook("a.g", b, "assign"));
  }

  function pc(a, b, c, d, f) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("f", f, "function-parameter");
    if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (f || .01)) try {
      if (c instanceof cc) var g = cc11001100_hook("g", c, "var-init");else g = cc11001100_hook("g", new cc(), "assign"), Bb(c, function (h, k) {
        var l = cc11001100_hook("l", g, "var-init"),
            m = cc11001100_hook("m", l.j++, "var-init");
        h = cc11001100_hook("h", dc(k, h), "assign");
        l.g.push(m);
        l.h[m] = cc11001100_hook("l.h[m]", h, "assign");
      });
      var e = cc11001100_hook("e", gc(g, "/pagead/gen_204?id=" + b + "&"), "var-init");
      e && Db(t, e);
    } catch (h) {}
  }

  ;
  var kc,
      mc,
      jc = cc11001100_hook("jc", new ac(), "var-init");

  function sc() {
    if (!window.google_measure_js_timing) {
      var a = cc11001100_hook("a", jc, "var-init");
      a.g = cc11001100_hook("a.g", !1, "assign");
      a.h != a.i.google_js_reporting_queue && (V() && Aa(a.h, bc), a.h.length = cc11001100_hook("a.h.length", 0, "assign"));
    }
  }

  (function (a) {
    kc = cc11001100_hook("kc", null != a ? a : new qc(), "assign");
    "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
    rc();
    mc = cc11001100_hook("mc", new ic(), "assign");
    mc.h = cc11001100_hook("mc.h", function (b) {
      var c = cc11001100_hook("c", Fb, "var-init");
      0 !== c && (b.jc = cc11001100_hook("b.jc", String(c), "assign"), b.shv = cc11001100_hook("b.shv", Gb(c), "assign"));
    }, "assign");
    mc.i = cc11001100_hook("mc.i", !0, "assign");
    "complete" == window.document.readyState ? sc() : jc.g && N(window, "load", function () {
      sc();
    });
  })();

  function W(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return oc(a, b);
  }

  ;

  function tc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", this, "var-init");
    this.g = cc11001100_hook("this.g", a, "assign");
    this.h = cc11001100_hook("this.h", b, "assign");
    this.g.aa || (this.j = cc11001100_hook("this.j", !1, "assign"), this.i = cc11001100_hook("this.i", null, "assign"), !this.g.G || this.g.adbadgeEnabled || this.g.U ? uc(this) : (a = cc11001100_hook("a", {
      display: cc11001100_hook("display", "none", "object-key-init")
    }, "assign"), b = cc11001100_hook("b", {
      width: cc11001100_hook("width", "15px", "object-key-init"),
      height: cc11001100_hook("height", "15px", "object-key-init")
    }, "assign"), this.g.isMobileDevice ? (T(this.g.u, a), T(this.g.h, a), T(this.g.B, b), T(this.g.v, b)) : T(this.g.v, a)), vc(this), this.g.enableNativeJakeUi && S(this.g.D, "abgnac"), this.g.isDelegateAttributionActive ? (S(document.body, "goog_delegate_active"), S(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.j && yb(this.g.j), setTimeout(function () {
      S(document.body, "jar");
    }, this.g.S ? 750 : 100)), this.g.F && S(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && R.addEventListener("load", function () {
      return c.h();
    }));
  }

  function vc(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a.g.Z) N(a.g.i, "click", W(365, function (c) {
      var d = cc11001100_hook("d", R.goog_interstitial_display, "var-init");
      d && (d(c), c && (c.stopPropagation(), c.preventDefault()));
    }));else if (a.g.isMutableImpression && a.g.isMobileDevice) N(a.g.i, "click", function () {
      return a.h();
    });else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.j && (N(a.g.j, "click", function () {
      return a.h();
    }), N(a.g.j, "keydown", function (c) {
      "Enter" !== c.code && "Space" !== c.code || a.h();
    })), a.g.ba && a.g.h && N(a.g.h, "click", function () {
      return a.h();
    })), a.g.T) wc(a);else {
      N(a.g.i, "mouseover", W(367, function () {
        return wc(a);
      }));
      N(a.g.i, "mouseout", W(369, function () {
        return xc(a, 500);
      }));
      N(a.g.i, "touchstart", W(368, function () {
        return wc(a);
      }), qb);
      var b = cc11001100_hook("b", W(370, function () {
        return xc(a, 4E3);
      }), "var-init");
      N(a.g.i, "mouseup", b);
      N(a.g.i, "touchend", b);
      N(a.g.i, "touchcancel", b);
      a.g.m && N(a.g.m, "click", W(371, function (c) {
        return a.preventDefault(c);
      }));
    }
  }

  function uc(a) {
    cc11001100_hook("a", a, "function-parameter");

    if (a.g.m && a.g.Y) {
      var b = cc11001100_hook("b", ib(a.g.g), "var-init");
      b && null != H(b, 5) && null != H(b, 6) && (a.i = cc11001100_hook("a.i", new Rb(I(H(b, 5), ""), I(H(b, 19), "")), "assign"));
      N(a.g.m, "click", W(452, function () {
        if (!a.j && (a.j = cc11001100_hook("a.j", !0, "assign"), a.i)) {
          var c = cc11001100_hook("c", a.i, "var-init");
          var d = cc11001100_hook("d", c.g, "var-init");
          var f = cc11001100_hook("f", d.search(Ab), "var-init"),
              g;

          b: {
            for (g = cc11001100_hook("g", 0, "assign"); 0 <= (g = cc11001100_hook("g", d.indexOf("ad_signals", g), "assign")) && g < f;) {
              var e = cc11001100_hook("e", d.charCodeAt(g - 1), "var-init");
              if (38 == e || 63 == e) if (e = cc11001100_hook("e", d.charCodeAt(g + 10), "assign"), !e || 61 == e || 38 == e || 35 == e) break b;
              g += cc11001100_hook("g", 11, "assign");
            }

            g = cc11001100_hook("g", -1, "assign");
          }

          if (0 > g) d = cc11001100_hook("d", null, "assign");else {
            e = cc11001100_hook("e", d.indexOf("&", g), "assign");
            if (0 > e || e > f) e = cc11001100_hook("e", f, "assign");
            d = cc11001100_hook("d", decodeURIComponent(d.slice(g + 11, -1 !== e ? e : 0).replace(/\+/g, " ")), "assign");
          }

          if (d) {
            d = cc11001100_hook("d", {
              L: cc11001100_hook("L", d, "object-key-init"),
              label: cc11001100_hook("label", "closebutton_whythisad_click", "object-key-init"),
              O: cc11001100_hook("O", "1", "object-key-init"),
              M: cc11001100_hook("M", "", "object-key-init")
            }, "assign");
            var h = cc11001100_hook("h", void 0 === h ? t : h, "var-init");
            c = cc11001100_hook("c", new nb(), "assign");
            null != d && (null != d.L && K(c, 1, d.L), null != d.ca && K(c, 3, d.ca), null != d.label && K(c, 6, d.label), null != d.O && K(c, 7, d.O), null != d.M && K(c, 8, d.M));

            if (null != (h = cc11001100_hook("h", ob(h).fence, "assign"))) {
              d = cc11001100_hook("d", h.reportEvent, "assign");

              a: {
                Oa = cc11001100_hook("Oa", !0, "assign");

                try {
                  var k = cc11001100_hook("k", JSON.stringify(c.toJSON(), Xa), "var-init");
                  break a;
                } finally {
                  Oa = cc11001100_hook("Oa", !1, "assign");
                }

                k = cc11001100_hook("k", void 0, "assign");
              }

              d.call(h, {
                eventType: cc11001100_hook("eventType", "interaction", "object-key-init"),
                eventData: cc11001100_hook("eventData", k, "object-key-init"),
                destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
              });
            }
          } else k = cc11001100_hook("k", c.g + "&label=closebutton_whythisad_click", "assign"), k += cc11001100_hook("k", "&label_instance=1", "assign"), c.h && (k += cc11001100_hook("k", "&cid=" + c.h, "assign")), Db(window, k);
        }
      }));
    }
  }

  function yc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a.g.D, "var-init");
    void 0 !== b && (b.style.display = cc11001100_hook("b.style.display", "block", "assign"), a.g.enableNativeJakeUi && window.requestAnimationFrame(function () {
      S(b, "abgacfo");
    }));
  }

  function wc(a) {
    cc11001100_hook("a", a, "function-parameter");
    window.clearTimeout(a.g.o);
    a.g.o = cc11001100_hook("a.g.o", null, "assign");
    a.g.h && "block" == a.g.h.style.display || (a.g.K = cc11001100_hook("a.g.K", Date.now(), "assign"), a.g.u && a.g.h && (a.g.u.style.display = cc11001100_hook("a.g.u.style.display", "none", "assign"), a.g.h.style.display = cc11001100_hook("a.g.h.style.display", "block", "assign")));
  }

  function xc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    window.clearTimeout(a.g.o);
    a.g.o = cc11001100_hook("a.g.o", window.setTimeout(function () {
      return zc(a);
    }, b), "assign");
  }

  function zc(a) {
    cc11001100_hook("a", a, "function-parameter");
    window.clearTimeout(a.g.o);
    a.g.o = cc11001100_hook("a.g.o", null, "assign");
    a.g.u && a.g.h && (a.g.u.style.display = cc11001100_hook("a.g.u.style.display", "block", "assign"), a.g.h.style.display = cc11001100_hook("a.g.h.style.display", "none", "assign"));
  }

  tc.prototype.preventDefault = cc11001100_hook("tc.prototype.preventDefault", function (a) {
    if (this.g.h && "block" == this.g.h.style.display && 500 > Date.now() - this.g.K) Q(a);else if (this.g.openAttributionInline) {
      var b = cc11001100_hook("b", this.g.m.getAttribute("href"), "var-init");
      window.adSlot ? window.adSlot.openAttribution(b) && Q(a) : window.openAttribution && (window.openAttribution(b), Q(a));
    } else this.g.X && (b = cc11001100_hook("b", this.g.m.getAttribute("href"), "assign"), window.adSlot ? window.adSlot.openSystemBrowser(b) && Q(a) : window.openSystemBrowser && (window.openSystemBrowser(b), Q(a)));
  }, "assign");

  function Ac(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", Bc, "var-init"),
        c = cc11001100_hook("c", this, "var-init");
    if (!b) throw Error("bad ctor");
    this.i = cc11001100_hook("this.i", b, "assign");
    this.h = cc11001100_hook("this.h", a, "assign");
    this.g = cc11001100_hook("this.g", !1, "assign");
    wb("goog_delegate_deferred") ? void 0 !== R.goog_delegate_deferred_token ? Ec(this) : (a = cc11001100_hook("a", function () {
      Ec(c);
    }, "assign"), R.goog_delegate_deferred_token = cc11001100_hook("R.goog_delegate_deferred_token", a, "assign"), setTimeout(a, 5E3)) : Ec(this);
  }

  function Ec(a) {
    cc11001100_hook("a", a, "function-parameter");

    if (!a.g && (a.g = cc11001100_hook("a.g", !0, "assign"), R.goog_delegate_deferred_token = cc11001100_hook("R.goog_delegate_deferred_token", void 0, "assign"), a.h)) {
      var b = cc11001100_hook("b", a.i, "var-init");
      a = cc11001100_hook("a", mb(JSON.stringify(a.h)), "assign");
      if (!a) throw Error("bad attrdata");
      a = cc11001100_hook("a", new Qb(a), "assign");
      new b(a);
    }
  }

  ;

  function Fc() {
    var a = cc11001100_hook("a", this, "var-init");
    this.promise = cc11001100_hook("this.promise", new Promise(function (b, c) {
      a.resolve = cc11001100_hook("a.resolve", b, "assign");
      a.reject = cc11001100_hook("a.reject", c, "assign");
    }), "assign");
  }

  ;

  function Gc() {
    var a = cc11001100_hook("a", new Fc(), "var-init");
    return {
      promise: cc11001100_hook("promise", a.promise, "object-key-init"),
      resolve: cc11001100_hook("resolve", a.resolve, "object-key-init")
    };
  }

  ;
  /* 
  SPDX-License-Identifier: Apache-2.0 
  */

  function Hc(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    b = cc11001100_hook("b", void 0 === b ? function () {} : b, "assign");
    a.google_llp || (a.google_llp = cc11001100_hook("a.google_llp", {}, "assign"));
    a = cc11001100_hook("a", a.google_llp, "assign");
    var c = cc11001100_hook("c", a[5], "var-init");
    if (c) return c;
    c = cc11001100_hook("c", Gc(), "assign");
    a[5] = cc11001100_hook("a[5]", c, "assign");
    b();
    return c;
  }

  function Ic(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return Hc(a, function () {
      var c = cc11001100_hook("c", a.document, "var-init"),
          d = cc11001100_hook("d", Cb("SCRIPT", c), "var-init");
      d.src = cc11001100_hook("d.src", b instanceof ub && b.constructor === ub ? b.g : "type_error:TrustedResourceUrl", "assign");
      var f,
          g,
          e = cc11001100_hook("e", null == (g = cc11001100_hook("g", (f = cc11001100_hook("f", (d.ownerDocument && d.ownerDocument.defaultView || window).document, "assign")).querySelector, "assign")) ? void 0 : g.call(f, "script[nonce]"), "var-init");
      (f = cc11001100_hook("f", e ? e.nonce || e.getAttribute("nonce") || "" : "", "assign")) && d.setAttribute("nonce", f);
      (c = cc11001100_hook("c", c.getElementsByTagName("script")[0], "assign")) && c.parentNode && c.parentNode.insertBefore(d, c);
    }).promise;
  }

  ;

  function Jc(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", null === a ? "null" : void 0 === a ? "undefined" : a, "assign");

    if (void 0 === tb) {
      var b = cc11001100_hook("b", null, "var-init");
      var c = cc11001100_hook("c", t.trustedTypes, "var-init");

      if (c && c.createPolicy) {
        try {
          b = cc11001100_hook("b", c.createPolicy("goog#html", {
            createHTML: cc11001100_hook("createHTML", pa, "object-key-init"),
            createScript: cc11001100_hook("createScript", pa, "object-key-init"),
            createScriptURL: cc11001100_hook("createScriptURL", pa, "object-key-init")
          }), "assign");
        } catch (d) {
          t.console && t.console.error(d.message);
        }

        tb = cc11001100_hook("tb", b, "assign");
      } else tb = cc11001100_hook("tb", b, "assign");
    }

    a = cc11001100_hook("a", (b = cc11001100_hook("b", tb, "assign")) ? b.createScriptURL(a) : a, "assign");
    return new ub(a, vb);
  }

  ;

  function Bc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", this, "var-init");
    this.g = cc11001100_hook("this.g", a, "assign");
    this.h = cc11001100_hook("this.h", new tc(this.g, W(359, function () {
      return Kc(b);
    })), "assign");
  }

  function Kc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", ob(), "var-init");
    b.fence && b.fence.setReportEventDataForAutomaticBeacons && b.fence.setReportEventDataForAutomaticBeacons({
      eventType: cc11001100_hook("eventType", "reserved.top_navigation", "object-key-init"),
      eventData: cc11001100_hook("eventData", "mute_button_click", "object-key-init"),
      destination: cc11001100_hook("destination", ["buyer"], "object-key-init"),
      once: cc11001100_hook("once", !0, "object-key-init")
    });
    a.g.A ? a.g.A.expandAttributionCard() : (lc(373, function () {
      zc(a.h);
      yc(a.h);
    }), Ic(window, Jc("https://pagead2.googlesyndication.com/pagead/js/" + (I(H(a.g.g, 33), "") + "/abg_survey.js"))).then(function (c) {
      c.createAttributionCard(a.g);
      a.g.A = cc11001100_hook("a.g.A", c, "assign");
      c.expandAttributionCard();
    }), Ib());
  }

  function Lc(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", [a], "var-init");
    b = cc11001100_hook("b", void 0 === b ? [] : b, "assign");
    t.google_logging_queue || (t.google_logging_queue = cc11001100_hook("t.google_logging_queue", [], "assign"));
    t.google_logging_queue.push([11, b]);
    new Ac(a);
  }

  ;
  Fb = cc11001100_hook("Fb", 60, "assign");
  var Mc = cc11001100_hook("Mc", Hb(60), "var-init");
  if (null == Mc) throw Error("JSC not found 60");

  for (var Nc = cc11001100_hook("Nc", {}, "var-init"), Oc = cc11001100_hook("Oc", Mc.attributes, "var-init"), Pc = cc11001100_hook("Pc", Oc.length - 1, "var-init"); 0 <= Pc; Pc--) {
    var Qc = cc11001100_hook("Qc", Oc[Pc].name, "var-init");
    0 === Qc.indexOf("data-jcp-") && (Nc[Qc.substring(9)] = cc11001100_hook("Nc[Qc.substring(9)]", Oc[Pc].value, "assign"));
  }

  if (Nc["attribution-data"]) Lc(JSON.parse(Nc["attribution-data"]));else {
    var X = cc11001100_hook("X", ["buildAttribution"], "var-init"),
        Y = cc11001100_hook("Y", t, "var-init");
    X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);

    for (var Z; X.length && (Z = cc11001100_hook("Z", X.shift(), "assign"));) X.length || void 0 === Lc ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = cc11001100_hook("Y", Y[Z], "assign") : Y = cc11001100_hook("Y", Y[Z] = cc11001100_hook("Y[Z]", {}, "assign"), "assign") : Y[Z] = cc11001100_hook("Y[Z]", Lc, "assign");
  }
  ;
}).call(this);