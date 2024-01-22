(function () {
  function k(a) {
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

  var m = cc11001100_hook("m", "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = cc11001100_hook("a[b]", c.value, "assign");
    return a;
  }, "var-init");

  function n(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], "assign");

    for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
      var c = cc11001100_hook("c", a[b], "var-init");
      if (c && c.Math == Math) return c;
    }

    throw Error("Cannot find global object");
  }

  var aa = cc11001100_hook("aa", n(this), "var-init");

  function ba(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (b) a: {
      var c = cc11001100_hook("c", aa, "var-init");
      a = cc11001100_hook("a", a.split("."), "assign");

      for (var d = cc11001100_hook("d", 0, "var-init"); d < a.length - 1; d++) {
        var e = cc11001100_hook("e", a[d], "var-init");
        if (!(e in c)) break a;
        c = cc11001100_hook("c", c[e], "assign");
      }

      a = cc11001100_hook("a", a[a.length - 1], "assign");
      d = cc11001100_hook("d", c[a], "assign");
      b = cc11001100_hook("b", b(d), "assign");
      b != d && null != b && m(c, a, {
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        value: cc11001100_hook("value", b, "object-key-init")
      });
    }
  }

  function p(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator], "var-init");
    if (b) return b.call(a);
    if ("number" == typeof a.length) return {
      next: cc11001100_hook("next", k(a), "object-key-init")
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }

  function q(a) {
    cc11001100_hook("a", a, "function-parameter");

    for (var b, c = cc11001100_hook("c", [], "var-init"); !(b = cc11001100_hook("b", a.next(), "assign")).done;) c.push(b.value);

    return c;
  }

  var ca = cc11001100_hook("ca", "function" == typeof Object.create ? Object.create : function (a) {
    function b() {}

    b.prototype = cc11001100_hook("b.prototype", a, "assign");
    return new b();
  }, "var-init"),
      r;
  if ("function" == typeof Object.setPrototypeOf) r = cc11001100_hook("r", Object.setPrototypeOf, "assign");else {
    var t;

    a: {
      var da = cc11001100_hook("da", {
        a: cc11001100_hook("a", !0, "object-key-init")
      }, "var-init"),
          u = cc11001100_hook("u", {}, "var-init");

      try {
        u.__proto__ = cc11001100_hook("u.__proto__", da, "assign");
        t = cc11001100_hook("t", u.a, "assign");
        break a;
      } catch (a) {}

      t = cc11001100_hook("t", !1, "assign");
    }

    r = cc11001100_hook("r", t ? function (a, b) {
      a.__proto__ = cc11001100_hook("a.__proto__", b, "assign");
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null, "assign");
  }
  var v = cc11001100_hook("v", r, "var-init");

  function w(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.prototype = cc11001100_hook("a.prototype", ca(b.prototype), "assign");
    a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
    if (v) v(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
      var d = cc11001100_hook("d", Object.getOwnPropertyDescriptor(b, c), "var-init");
      d && Object.defineProperty(a, c, d);
    } else a[c] = cc11001100_hook("a[c]", b[c], "assign");
    a.u = cc11001100_hook("a.u", b.prototype, "assign");
  }

  function x() {
    for (var a = cc11001100_hook("a", Number(this), "var-init"), b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a, "var-init"); c < arguments.length; c++) b[c - a] = cc11001100_hook("b[c - a]", arguments[c], "assign");

    return b;
  }

  ba("Number.isNaN", function (a) {
    return a ? a : function (b) {
      return "number" === typeof b && isNaN(b);
    };
  });
  /* 
  Copyright The Closure Library Authors. 
  SPDX-License-Identifier: Apache-2.0 
  */

  var y = cc11001100_hook("y", this || self, "var-init");
  var ea = cc11001100_hook("ea", Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

    for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;

    return -1;
  }, "var-init");

  function z(a) {
    cc11001100_hook("a", a, "function-parameter");
    z[" "](a);
    return a;
  }

  z[" "] = cc11001100_hook("z[\" \"]", function () {}, "assign");

  function fa(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", !1, "var-init");
    b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
    var c = cc11001100_hook("c", void 0 === c ? y : c, "var-init");

    for (var d = cc11001100_hook("d", 0, "var-init"); c && 40 > d++;) {
      var e;
      if (!(e = cc11001100_hook("e", b, "assign"))) try {
        var f;
        if (f = cc11001100_hook("f", !!c && null != c.location.href, "assign")) b: {
          try {
            z(c.foo);
            f = cc11001100_hook("f", !0, "assign");
            break b;
          } catch (h) {}

          f = cc11001100_hook("f", !1, "assign");
        }
        e = cc11001100_hook("e", f, "assign");
      } catch (h) {
        e = cc11001100_hook("e", !1, "assign");
      }
      if (e && a(c)) break;

      a: {
        try {
          var g = cc11001100_hook("g", c.parent, "var-init");

          if (g && g != c) {
            c = cc11001100_hook("c", g, "assign");
            break a;
          }
        } catch (h) {}

        c = cc11001100_hook("c", null, "assign");
      }
    }
  }

  function ha(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }

  function ia(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", void 0 === a ? document : a, "assign");
    return a.createElement("img");
  }

  ;

  function A(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", this, "var-init");
    this.h = cc11001100_hook("this.h", !1, "assign");
    this.g = cc11001100_hook("this.g", [], "assign");
    a(function (c) {
      B(b, c);
    });
  }

  function B(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (!a.h) if (b instanceof A) b.then(function (c) {
      B(a, c);
    });else {
      a.h = cc11001100_hook("a.h", !0, "assign");
      a.i = cc11001100_hook("a.i", b, "assign");

      for (b = cc11001100_hook("b", 0, "assign"); b < a.g.length; ++b) C(a, a.g[b]);

      a.g = cc11001100_hook("a.g", [], "assign");
    }
  }

  function C(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    a.h ? b(a.i) : a.g.push(b);
  }

  A.prototype.then = cc11001100_hook("A.prototype.then", function (a) {
    var b = cc11001100_hook("b", this, "var-init");
    return new A(function (c) {
      C(b, function (d) {
        c(a(d));
      });
    });
  }, "assign");

  function ja() {
    return new A(function (a) {
      return a(void 0);
    });
  }

  ;

  function ka(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    d = cc11001100_hook("d", void 0 === d ? !1 : d, "assign");
    a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
    var e = cc11001100_hook("e", ia(a.document), "var-init");

    if (c) {
      var f = function () {
        if (c) {
          var g = cc11001100_hook("g", a.google_image_requests, "var-init"),
              h = cc11001100_hook("h", ea(g, e), "var-init");
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }

        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };

      e.addEventListener && e.addEventListener("load", f, !1);
      e.addEventListener && e.addEventListener("error", f, !1);
    }

    d && (e.attributionSrc = cc11001100_hook("e.attributionSrc", "", "assign"));
    e.src = cc11001100_hook("e.src", b, "assign");
    a.google_image_requests.push(e);
  }

  function la(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", void 0 === b ? !1 : b, "var-init");
    var c = cc11001100_hook("c", "https://pagead2.googlesyndication.com/pagead/gen_204?id=rhmss", "var-init");
    ha(a, function (d, e) {
      if (d || 0 === d) c += cc11001100_hook("c", "&" + e + "=" + encodeURIComponent("" + d), "assign");
    });
    ma(c, b);
  }

  function ma(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c = cc11001100_hook("c", window, "var-init");
    b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
    var d = cc11001100_hook("d", void 0 === d ? !1 : d, "var-init");
    c.fetch ? (b = cc11001100_hook("b", {
      keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
      credentials: cc11001100_hook("credentials", "include", "object-key-init"),
      redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
      method: cc11001100_hook("method", "get", "object-key-init"),
      mode: cc11001100_hook("mode", "no-cors", "object-key-init")
    }, "assign"), d && (b.mode = cc11001100_hook("b.mode", "cors", "assign"), "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = cc11001100_hook("b.attributionReporting", {
      eventSourceEligible: cc11001100_hook("eventSourceEligible", "true", "object-key-init"),
      triggerEligible: cc11001100_hook("triggerEligible", "false", "object-key-init")
    }, "assign") : b.headers = cc11001100_hook("b.headers", {
      "Attribution-Reporting-Eligible": cc11001100_hook("Attribution-Reporting-Eligible", "event-source", "object-key-init")
    }, "assign")), c.fetch(a, b)) : ka(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
  }

  ;

  function D(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) throw Error("functionToExecute must not be truthy.");
  }

  ;

  function E() {
    return /\d+\.\d+\.\d+(-.*)?/.test("1.4.8-google_20230803");
  }

  function F() {
    for (var a = cc11001100_hook("a", ["1", "4", "8"], "var-init"), b = cc11001100_hook("b", ["1", "0", "3"], "var-init"), c = cc11001100_hook("c", 0, "var-init"); 3 > c; c++) {
      var d = cc11001100_hook("d", parseInt(a[c], 10), "var-init"),
          e = cc11001100_hook("e", parseInt(b[c], 10), "var-init");
      if (d > e) break;else if (d < e) return !1;
    }

    return !0;
  }

  ;

  function G(a, b, c, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    this.h = cc11001100_hook("this.h", a, "assign");
    this.method = cc11001100_hook("this.method", b, "assign");
    this.version = cc11001100_hook("this.version", c, "assign");
    this.g = cc11001100_hook("this.g", d, "assign");
  }

  function H(a) {
    cc11001100_hook("a", a, "function-parameter");
    return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args);
  }

  function I(a) {
    cc11001100_hook("a", a, "function-parameter");
    return new G(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args);
  }

  function J(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", {}, "var-init");
    b = cc11001100_hook("b", (b.omid_message_guid = cc11001100_hook("b.omid_message_guid", a.h, "assign"), b.omid_message_method = cc11001100_hook("b.omid_message_method", a.method, "assign"), b.omid_message_version = cc11001100_hook("b.omid_message_version", a.version, "assign"), b), "assign");
    void 0 !== a.g && (b.omid_message_args = cc11001100_hook("b.omid_message_args", a.g, "assign"));
    return b;
  }

  ;

  function K(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a, "assign");
  }

  ;

  function na(a) {
    cc11001100_hook("a", a, "function-parameter");
    return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function (b) {
      try {
        var c = cc11001100_hook("c", a.frames && !!a.frames[b], "var-init");
      } catch (d) {
        c = cc11001100_hook("c", !1, "assign");
      }

      return c;
    });
  }

  ;

  function oa(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return a && (a[b] || (a[b] = cc11001100_hook("a[b]", {}, "assign")));
  }

  ;

  function pa() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
      var b = cc11001100_hook("b", 16 * Math.random() | 0, "var-init");
      return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
    });
  }

  ;

  function qa() {
    var a = cc11001100_hook("a", x.apply(0, arguments), "var-init");
    ra(function () {
      throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(a instanceof Array ? a : q(p(a)))))();
    }, function () {
      return console.error.apply(console, a instanceof Array ? a : q(p(a)));
    });
  }

  function ra(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
  }

  ;
  var L = cc11001100_hook("L", function () {
    if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
    if ("undefined" !== typeof global && global) return global;
    if ("undefined" !== typeof window && window) return window;
    if ("undefined" !== typeof globalThis && globalThis) return globalThis;
    var a = cc11001100_hook("a", Function("return this")(), "var-init");
    if (a) return a;
    throw Error("Could not determine global object context.");
  }(), "var-init");

  function M(a) {
    cc11001100_hook("a", a, "function-parameter");
    this.h = cc11001100_hook("this.h", a, "assign");
    this.handleExportedMessage = cc11001100_hook("this.handleExportedMessage", M.prototype.i.bind(this), "assign");
  }

  w(M, K);
  M.prototype.sendMessage = cc11001100_hook("M.prototype.sendMessage", function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? this.h : b, "assign");
    if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
    b.handleExportedMessage(J(a), this);
  }, "assign");
  M.prototype.i = cc11001100_hook("M.prototype.i", function (a, b) {
    H(a) && this.g && this.g(I(a), b);
  }, "assign");

  function N(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a && "undefined" !== typeof a.top && null != a.top;
  }

  function sa(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a === L) return !1;

    try {
      if ("undefined" === typeof a.location.hostname) return !0;
    } catch (b) {
      return !0;
    }

    return !1;
  }

  ;

  function O(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    this.h = cc11001100_hook("this.h", b = cc11001100_hook("b", void 0 === b ? L : b, "assign"), "assign");
    var c = cc11001100_hook("c", this, "var-init");
    a.addEventListener("message", function (d) {
      if ("object" === typeof d.data) {
        var e = cc11001100_hook("e", d.data, "var-init");
        H(e) && d.source && c.g && c.g(I(e), d.source);
      }
    });
  }

  w(O, K);
  O.prototype.sendMessage = cc11001100_hook("O.prototype.sendMessage", function (a, b) {
    b = cc11001100_hook("b", void 0 === b ? this.h : b, "assign");
    if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
    b.postMessage(J(a), "*");
  }, "assign");
  var ta = cc11001100_hook("ta", ["omid", "v1_VerificationServiceCommunication"], "var-init"),
      ua = cc11001100_hook("ua", ["omidVerificationProperties", "serviceWindow"], "var-init");

  function P(a, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    return b.reduce(function (c, d) {
      return c && c[d];
    }, a);
  }

  ;

  function Q(a) {
    cc11001100_hook("a", a, "function-parameter");

    if (!a) {
      var b;
      "undefined" === typeof b && "undefined" !== typeof window && window && (b = cc11001100_hook("b", window, "assign"));
      b = cc11001100_hook("b", N(b) ? b : L, "assign");
      var c = cc11001100_hook("c", void 0 === c ? na : c, "var-init");
      a = cc11001100_hook("a", [], "assign");
      var d = cc11001100_hook("d", P(b, ua), "var-init");
      d && a.push(d);
      a.push(N(b) ? b.top : L);

      a: {
        a = cc11001100_hook("a", p(a), "assign");

        for (var e = cc11001100_hook("e", a.next(), "var-init"); !e.done; e = cc11001100_hook("e", a.next(), "assign")) {
          b: {
            d = cc11001100_hook("d", b, "assign");
            e = cc11001100_hook("e", e.value, "assign");
            var f = cc11001100_hook("f", c, "var-init");
            if (!sa(e)) try {
              var g = cc11001100_hook("g", P(e, ta), "var-init");

              if (g) {
                var h = cc11001100_hook("h", new M(g), "var-init");
                break b;
              }
            } catch (l) {}
            h = cc11001100_hook("h", f(e) ? new O(d, e) : null, "assign");
          }

          if (d = cc11001100_hook("d", h, "assign")) {
            a = cc11001100_hook("a", d, "assign");
            break a;
          }
        }

        a = cc11001100_hook("a", null, "assign");
      }
    }

    if (this.g = cc11001100_hook("this.g", a, "assign")) this.g.g = cc11001100_hook("this.g.g", this.l.bind(this), "assign");else if (c = cc11001100_hook("c", (c = cc11001100_hook("c", L.omid3p, "assign")) && "function" === typeof c.registerSessionObserver && "function" === typeof c.addEventListener ? c : null, "assign")) this.omid3p = cc11001100_hook("this.omid3p", c, "assign");
    this.i = cc11001100_hook("this.i", {}, "assign");
    this.h = cc11001100_hook("this.h", (c = cc11001100_hook("c", L.omidVerificationProperties, "assign")) ? c.injectionId : void 0, "assign");
  }

  Q.prototype.registerSessionObserver = cc11001100_hook("Q.prototype.registerSessionObserver", function (a, b) {
    D(a);
    this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.h) : this.j("addSessionListener", a, b, this.h);
  }, "assign");
  Q.prototype.addEventListener = cc11001100_hook("Q.prototype.addEventListener", function (a, b) {
    if (!a) throw Error("Value for eventType is undefined, null or blank.");
    if ("string" !== typeof a && !(a instanceof String)) throw Error("Value for eventType is not a string.");
    if ("" === a.trim()) throw Error("Value for eventType is empty string.");
    D(b);
    this.omid3p ? this.omid3p.addEventListener(a, b, this.h) : this.j("addEventListener", b, a, this.h);
  }, "assign");
  Q.prototype.l = cc11001100_hook("Q.prototype.l", function (a) {
    var b = cc11001100_hook("b", a.method, "var-init"),
        c = cc11001100_hook("c", a.h, "var-init");
    a = cc11001100_hook("a", a.g, "assign");

    if ("response" === b && this.i[c]) {
      var d = cc11001100_hook("d", E() && F() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [], "var-init");
      this.i[c].apply(this, d);
    }

    "error" === b && window.console && qa(a);
  }, "assign");
  Q.prototype.j = cc11001100_hook("Q.prototype.j", function (a, b) {
    var c = cc11001100_hook("c", x.apply(2, arguments), "var-init");

    if (this.g) {
      var d = cc11001100_hook("d", pa(), "var-init");
      b && (this.i[d] = cc11001100_hook("this.i[d]", b, "assign"));
      var e = cc11001100_hook("e", "VerificationService." + a, "var-init");
      c = cc11001100_hook("c", E() && F() ? c : JSON.stringify(c), "assign");
      this.g.sendMessage(new G(d, e, "1.4.8-google_20230803", c));
    }
  }, "assign");
  var R = cc11001100_hook("R", void 0, "var-init");

  if (R = cc11001100_hook("R", void 0 === R ? "undefined" === typeof omidExports ? null : omidExports : R, "assign")) {
    var S = cc11001100_hook("S", ["OmidVerificationClient"], "var-init");
    S.slice(0, S.length - 1).reduce(oa, R)[S[S.length - 1]] = cc11001100_hook("S.slice(0, S.length - 1).reduce(oa, R)[S[S.length - 1]]", Q, "assign");
  }

  ;

  function va() {
    var a = cc11001100_hook("a", null, "var-init");
    fa(function (b) {
      return (b = cc11001100_hook("b", b.mraid, "assign")) && b.IS_GMA_SDK ? (a = cc11001100_hook("a", b, "assign"), !0) : !1;
    });
    return a;
  }

  function wa() {
    return new A(function (a) {
      y.document.readyState && "complete" === y.document.readyState ? a() : y.addEventListener("load", a);
    });
  }

  function xa() {
    return new A(function (a) {
      var b = cc11001100_hook("b", va(), "var-init");
      b && ("loading" === b.getState() ? b.addEventListener("ready", function () {
        a(b);
      }) : a(b));
    });
  }

  function ya(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", void 0 === a ? {} : a, "assign");
    var b = cc11001100_hook("b", this.l = cc11001100_hook("this.l", null != (b = cc11001100_hook("b", a.client, "assign")) ? b : new Q(), "assign"), "var-init");
    this.m = cc11001100_hook("this.m", !(!b.g && !b.omid3p), "assign");
    this.h = cc11001100_hook("this.h", null, "assign");
    this.j = cc11001100_hook("this.j", this.m ? 4 : 1, "assign");
    this.o = cc11001100_hook("this.o", this.m, "assign");
    this.g = cc11001100_hook("this.g", {}, "assign");
    var c;
    this.i = cc11001100_hook("this.i", null != (c = cc11001100_hook("c", a.timeout, "assign")) ? c : null, "assign");
    this.s = cc11001100_hook("this.s", !1, "assign");
  }

  function za() {
    return new A(function (a) {
      wa().then(function () {
        xa().then(function (b) {
          function c(d, e) {
            cc11001100_hook("d", d, "function-parameter");
            cc11001100_hook("e", e, "function-parameter");
            0 < e.width && 0 < e.height && (a(), b.removeEventListener("exposureChange", c));
          }

          b.addEventListener("exposureChange", c);
        });
      });
    });
  }

  function Aa(a) {
    cc11001100_hook("a", a, "function-parameter");
    a.o ? (a.h = cc11001100_hook("a.h", new A(function (b) {
      var c = cc11001100_hook("c", new A(function (e) {
        var f = cc11001100_hook("f", !1, "var-init"),
            g,
            h = cc11001100_hook("h", new Date().getTime(), "var-init");
        a.l.registerSessionObserver(function (l) {
          "sessionStart" === l.type && (g && y.clearTimeout(g), f ? (f = cc11001100_hook("f", !1, "assign"), l = cc11001100_hook("l", new Date().getTime() - h, "assign"), a.s || (a.s = cc11001100_hook("a.s", !0, "assign"), la({
            te: cc11001100_hook("te", l, "object-key-init"),
            to: cc11001100_hook("to", a.i, "object-key-init")
          }))) : (l = cc11001100_hook("l", l.data, "assign"), e("app" == l.context.environment), l.context.omidNativeInfo && (a.g.sdk = cc11001100_hook("a.g.sdk", l.context.omidNativeInfo.partnerName, "assign"))));
        });
        null != a.i && (g = cc11001100_hook("g", y.setTimeout(function () {
          f = cc11001100_hook("f", !0, "assign");
          e(!1);
        }, a.i), "assign"));
      }), "var-init"),
          d = cc11001100_hook("d", new A(function (e) {
        a.l.addEventListener("geometryChange", function (f) {
          f = cc11001100_hook("f", f.data, "assign");
          var g = cc11001100_hook("g", f.adView.reasons, "var-init");
          if (g = cc11001100_hook("g", !g || -1 == g.indexOf("hidden"), "assign")) f = cc11001100_hook("f", f.adView, "assign"), f = cc11001100_hook("f", f.onScreenContainerGeometry || f.onScreenGeometry, "assign"), g = cc11001100_hook("g", !!(f && f.width && f.height), "assign");
          g && (a.j = cc11001100_hook("a.j", 3, "assign"), e());
        });
      }), "var-init");
      c.then(function (e) {
        e ? (d.then(function () {
          a.g.src = cc11001100_hook("a.g.src", 1, "assign");
          b(a.g);
        }), za().then(function () {
          a.g.src = cc11001100_hook("a.g.src", 2, "assign");
          a.j = cc11001100_hook("a.j", 3, "assign");
          b(a.g);
        })) : (a.j = cc11001100_hook("a.j", 1, "assign"), b());
      });
    }), "assign"), a.h.then(function () {
      a.o = cc11001100_hook("a.o", !1, "assign");
    })) : a.h = cc11001100_hook("a.h", ja(), "assign");
  }

  ;
  var T,
      U = cc11001100_hook("U", document.currentScript, "var-init");
  T = cc11001100_hook("T", (U = cc11001100_hook("U", void 0 === U ? null : U, "assign")) && "86" === U.getAttribute("data-jc") ? U : document.querySelector('[data-jc="86"]'), "assign");
  var V;

  if (T) {
    for (var W = cc11001100_hook("W", {}, "var-init"), X = cc11001100_hook("X", T.attributes, "var-init"), Y = cc11001100_hook("Y", X.length - 1, "var-init"); 0 <= Y; Y--) {
      var Z = cc11001100_hook("Z", X[Y].name, "var-init");
      0 === Z.indexOf("data-jcp-") && (W[Z.substring(9)] = cc11001100_hook("W[Z.substring(9)]", X[Y].value, "assign"));
    }

    V = cc11001100_hook("V", W, "assign");
  } else V = cc11001100_hook("V", {}, "assign");

  window.omrhp = cc11001100_hook("window.omrhp", function (a) {
    var b = cc11001100_hook("b", +(null == a ? NaN : a.owwt), "var-init");
    Number.isNaN(b) && (b = cc11001100_hook("b", null, "assign"));
    return function (c) {
      var d = cc11001100_hook("d", new ya({
        timeout: cc11001100_hook("timeout", void 0 === b ? null : b, "object-key-init")
      }), "var-init");
      d.h || Aa(d);
      d.h.then(c);
    };
  }(V), "assign");
}).call(this);