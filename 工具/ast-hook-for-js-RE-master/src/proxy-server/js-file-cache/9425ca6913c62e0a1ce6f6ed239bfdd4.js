/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = cc11001100_hook("module.exports", e(), "assign") : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = cc11001100_hook("exports.ClipboardJS", e(), "assign") : t.ClipboardJS = cc11001100_hook("t.ClipboardJS", e(), "assign");
}(this, function () {
  return function (t) {
    function e(o) {
      cc11001100_hook("o", o, "function-parameter");
      if (n[o]) return n[o].exports;
      var r = cc11001100_hook("r", n[o] = cc11001100_hook("n[o]", {
        i: cc11001100_hook("i", o, "object-key-init"),
        l: cc11001100_hook("l", !1, "object-key-init"),
        exports: {}
      }, "assign"), "var-init");
      return t[o].call(r.exports, r, r.exports, e), r.l = cc11001100_hook("r.l", !0, "assign"), r.exports;
    }

    var n = cc11001100_hook("n", {}, "var-init");
    return e.m = cc11001100_hook("e.m", t, "assign"), e.c = cc11001100_hook("e.c", n, "assign"), e.i = cc11001100_hook("e.i", function (t) {
      return t;
    }, "assign"), e.d = cc11001100_hook("e.d", function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: cc11001100_hook("configurable", !1, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: cc11001100_hook("get", o, "object-key-init")
      });
    }, "assign"), e.n = cc11001100_hook("e.n", function (t) {
      var n = cc11001100_hook("n", t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      }, "var-init");
      return e.d(n, "a", n), n;
    }, "assign"), e.o = cc11001100_hook("e.o", function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, "assign"), e.p = cc11001100_hook("e.p", "", "assign"), e(e.s = cc11001100_hook("e.s", 3, "assign"));
  }([function (t, e, n) {
    var o, r, i;
    !function (a, c) {
      r = cc11001100_hook("r", [t, n(7)], "assign"), o = cc11001100_hook("o", c, "assign"), void 0 !== (i = cc11001100_hook("i", "function" == typeof o ? o.apply(e, r) : o, "assign")) && (t.exports = cc11001100_hook("t.exports", i, "assign"));
    }(0, function (t, e) {
      "use strict";

      function n(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      var o = cc11001100_hook("o", function (t) {
        return t && t.__esModule ? t : {
          default: cc11001100_hook("default", t, "object-key-init")
        };
      }(e), "var-init"),
          r = cc11001100_hook("r", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, "var-init"),
          i = cc11001100_hook("i", function () {
        function t(t, e) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");

          for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
            var o = cc11001100_hook("o", e[n], "var-init");
            o.enumerable = cc11001100_hook("o.enumerable", o.enumerable || !1, "assign"), o.configurable = cc11001100_hook("o.configurable", !0, "assign"), "value" in o && (o.writable = cc11001100_hook("o.writable", !0, "assign")), Object.defineProperty(t, o.key, o);
          }
        }

        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      }(), "var-init"),
          a = cc11001100_hook("a", function () {
        function t(e) {
          cc11001100_hook("e", e, "function-parameter");
          n(this, t), this.resolveOptions(e), this.initSelection();
        }

        return i(t, [{
          key: cc11001100_hook("key", "resolveOptions", "object-key-init"),
          value: function () {
            var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
            this.action = cc11001100_hook("this.action", t.action, "assign"), this.container = cc11001100_hook("this.container", t.container, "assign"), this.emitter = cc11001100_hook("this.emitter", t.emitter, "assign"), this.target = cc11001100_hook("this.target", t.target, "assign"), this.text = cc11001100_hook("this.text", t.text, "assign"), this.trigger = cc11001100_hook("this.trigger", t.trigger, "assign"), this.selectedText = cc11001100_hook("this.selectedText", "", "assign");
          }
        }, {
          key: cc11001100_hook("key", "initSelection", "object-key-init"),
          value: function () {
            this.text ? this.selectFake() : this.target && this.selectTarget();
          }
        }, {
          key: cc11001100_hook("key", "selectFake", "object-key-init"),
          value: function () {
            var t = cc11001100_hook("t", this, "var-init"),
                e = cc11001100_hook("e", "rtl" == document.documentElement.getAttribute("dir"), "var-init");
            this.removeFake(), this.fakeHandlerCallback = cc11001100_hook("this.fakeHandlerCallback", function () {
              return t.removeFake();
            }, "assign"), this.fakeHandler = cc11001100_hook("this.fakeHandler", this.container.addEventListener("click", this.fakeHandlerCallback) || !0, "assign"), this.fakeElem = cc11001100_hook("this.fakeElem", document.createElement("textarea"), "assign"), this.fakeElem.style.fontSize = cc11001100_hook("this.fakeElem.style.fontSize", "12pt", "assign"), this.fakeElem.style.border = cc11001100_hook("this.fakeElem.style.border", "0", "assign"), this.fakeElem.style.padding = cc11001100_hook("this.fakeElem.style.padding", "0", "assign"), this.fakeElem.style.margin = cc11001100_hook("this.fakeElem.style.margin", "0", "assign"), this.fakeElem.style.position = cc11001100_hook("this.fakeElem.style.position", "absolute", "assign"), this.fakeElem.style[e ? "right" : "left"] = cc11001100_hook("this.fakeElem.style[e ? \"right\" : \"left\"]", "-9999px", "assign");
            var n = cc11001100_hook("n", window.pageYOffset || document.documentElement.scrollTop, "var-init");
            this.fakeElem.style.top = cc11001100_hook("this.fakeElem.style.top", n + "px", "assign"), this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = cc11001100_hook("this.fakeElem.value", this.text, "assign"), this.container.appendChild(this.fakeElem), this.selectedText = cc11001100_hook("this.selectedText", (0, o.default)(this.fakeElem), "assign"), this.copyText();
          }
        }, {
          key: cc11001100_hook("key", "removeFake", "object-key-init"),
          value: function () {
            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = cc11001100_hook("this.fakeHandler", null, "assign"), this.fakeHandlerCallback = cc11001100_hook("this.fakeHandlerCallback", null, "assign")), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = cc11001100_hook("this.fakeElem", null, "assign"));
          }
        }, {
          key: cc11001100_hook("key", "selectTarget", "object-key-init"),
          value: function () {
            this.selectedText = cc11001100_hook("this.selectedText", (0, o.default)(this.target), "assign"), this.copyText();
          }
        }, {
          key: cc11001100_hook("key", "copyText", "object-key-init"),
          value: function () {
            var t = cc11001100_hook("t", void 0, "var-init");

            try {
              t = cc11001100_hook("t", document.execCommand(this.action), "assign");
            } catch (e) {
              t = cc11001100_hook("t", !1, "assign");
            }

            this.handleResult(t);
          }
        }, {
          key: cc11001100_hook("key", "handleResult", "object-key-init"),
          value: function (t) {
            this.emitter.emit(t ? "success" : "error", {
              action: cc11001100_hook("action", this.action, "object-key-init"),
              text: cc11001100_hook("text", this.selectedText, "object-key-init"),
              trigger: cc11001100_hook("trigger", this.trigger, "object-key-init"),
              clearSelection: cc11001100_hook("clearSelection", this.clearSelection.bind(this), "object-key-init")
            });
          }
        }, {
          key: cc11001100_hook("key", "clearSelection", "object-key-init"),
          value: function () {
            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
          }
        }, {
          key: cc11001100_hook("key", "destroy", "object-key-init"),
          value: function () {
            this.removeFake();
          }
        }, {
          key: cc11001100_hook("key", "action", "object-key-init"),
          set: function () {
            var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy", "var-init");
            if (this._action = cc11001100_hook("this._action", t, "assign"), "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
          },
          get: function () {
            return this._action;
          }
        }, {
          key: cc11001100_hook("key", "target", "object-key-init"),
          set: function (t) {
            if (void 0 !== t) {
              if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
              if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
              if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
              this._target = cc11001100_hook("this._target", t, "assign");
            }
          },
          get: function () {
            return this._target;
          }
        }]), t;
      }(), "var-init");
      t.exports = cc11001100_hook("t.exports", a, "assign");
    });
  }, function (t, e, n) {
    function o(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!c.string(e)) throw new TypeError("Second argument must be a String");
      if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
      if (c.node(t)) return r(t, e, n);
      if (c.nodeList(t)) return i(t, e, n);
      if (c.string(t)) return a(t, e, n);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
    }

    function r(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return t.addEventListener(e, n), {
        destroy: function () {
          t.removeEventListener(e, n);
        }
      };
    }

    function i(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return Array.prototype.forEach.call(t, function (t) {
        t.addEventListener(e, n);
      }), {
        destroy: function () {
          Array.prototype.forEach.call(t, function (t) {
            t.removeEventListener(e, n);
          });
        }
      };
    }

    function a(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return u(document.body, t, e, n);
    }

    var c = cc11001100_hook("c", n(6), "var-init"),
        u = cc11001100_hook("u", n(5), "var-init");
    t.exports = cc11001100_hook("t.exports", o, "assign");
  }, function (t, e) {
    function n() {}

    n.prototype = cc11001100_hook("n.prototype", {
      on: function (t, e, n) {
        var o = cc11001100_hook("o", this.e || (this.e = cc11001100_hook("this.e", {}, "assign")), "var-init");
        return (o[t] || (o[t] = cc11001100_hook("o[t]", [], "assign"))).push({
          fn: cc11001100_hook("fn", e, "object-key-init"),
          ctx: cc11001100_hook("ctx", n, "object-key-init")
        }), this;
      },
      once: function (t, e, n) {
        function o() {
          r.off(t, o), e.apply(n, arguments);
        }

        var r = cc11001100_hook("r", this, "var-init");
        return o._ = cc11001100_hook("o._", e, "assign"), this.on(t, o, n);
      },
      emit: function (t) {
        var e = cc11001100_hook("e", [].slice.call(arguments, 1), "var-init"),
            n = cc11001100_hook("n", ((this.e || (this.e = cc11001100_hook("this.e", {}, "assign")))[t] || []).slice(), "var-init"),
            o = cc11001100_hook("o", 0, "var-init"),
            r = cc11001100_hook("r", n.length, "var-init");

        for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);

        return this;
      },
      off: function (t, e) {
        var n = cc11001100_hook("n", this.e || (this.e = cc11001100_hook("this.e", {}, "assign")), "var-init"),
            o = cc11001100_hook("o", n[t], "var-init"),
            r = cc11001100_hook("r", [], "var-init");
        if (o && e) for (var i = cc11001100_hook("i", 0, "var-init"), a = cc11001100_hook("a", o.length, "var-init"); i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        return r.length ? n[t] = cc11001100_hook("n[t]", r, "assign") : delete n[t], this;
      }
    }, "assign"), t.exports = cc11001100_hook("t.exports", n, "assign");
  }, function (t, e, n) {
    var o, r, i;
    !function (a, c) {
      r = cc11001100_hook("r", [t, n(0), n(2), n(1)], "assign"), o = cc11001100_hook("o", c, "assign"), void 0 !== (i = cc11001100_hook("i", "function" == typeof o ? o.apply(e, r) : o, "assign")) && (t.exports = cc11001100_hook("t.exports", i, "assign"));
    }(0, function (t, e, n, o) {
      "use strict";

      function r(t) {
        cc11001100_hook("t", t, "function-parameter");
        return t && t.__esModule ? t : {
          default: cc11001100_hook("default", t, "object-key-init")
        };
      }

      function i(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      function a(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
      }

      function c(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = cc11001100_hook("t.prototype", Object.create(e && e.prototype, {
          constructor: {
            value: cc11001100_hook("value", t, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init")
          }
        }), "assign"), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = cc11001100_hook("t.__proto__", e, "assign"));
      }

      function u(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        var n = cc11001100_hook("n", "data-clipboard-" + t, "var-init");
        if (e.hasAttribute(n)) return e.getAttribute(n);
      }

      var l = cc11001100_hook("l", r(e), "var-init"),
          s = cc11001100_hook("s", r(n), "var-init"),
          f = cc11001100_hook("f", r(o), "var-init"),
          d = cc11001100_hook("d", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, "var-init"),
          h = cc11001100_hook("h", function () {
        function t(t, e) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");

          for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
            var o = cc11001100_hook("o", e[n], "var-init");
            o.enumerable = cc11001100_hook("o.enumerable", o.enumerable || !1, "assign"), o.configurable = cc11001100_hook("o.configurable", !0, "assign"), "value" in o && (o.writable = cc11001100_hook("o.writable", !0, "assign")), Object.defineProperty(t, o.key, o);
          }
        }

        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      }(), "var-init"),
          p = cc11001100_hook("p", function (t) {
        function e(t, n) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          i(this, e);
          var o = cc11001100_hook("o", a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)), "var-init");
          return o.resolveOptions(n), o.listenClick(t), o;
        }

        return c(e, t), h(e, [{
          key: cc11001100_hook("key", "resolveOptions", "object-key-init"),
          value: function () {
            var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
            this.action = cc11001100_hook("this.action", "function" == typeof t.action ? t.action : this.defaultAction, "assign"), this.target = cc11001100_hook("this.target", "function" == typeof t.target ? t.target : this.defaultTarget, "assign"), this.text = cc11001100_hook("this.text", "function" == typeof t.text ? t.text : this.defaultText, "assign"), this.container = cc11001100_hook("this.container", "object" === d(t.container) ? t.container : document.body, "assign");
          }
        }, {
          key: cc11001100_hook("key", "listenClick", "object-key-init"),
          value: function (t) {
            var e = cc11001100_hook("e", this, "var-init");
            this.listener = cc11001100_hook("this.listener", (0, f.default)(t, "click", function (t) {
              return e.onClick(t);
            }), "assign");
          }
        }, {
          key: cc11001100_hook("key", "onClick", "object-key-init"),
          value: function (t) {
            var e = cc11001100_hook("e", t.delegateTarget || t.currentTarget, "var-init");
            this.clipboardAction && (this.clipboardAction = cc11001100_hook("this.clipboardAction", null, "assign")), this.clipboardAction = cc11001100_hook("this.clipboardAction", new l.default({
              action: cc11001100_hook("action", this.action(e), "object-key-init"),
              target: cc11001100_hook("target", this.target(e), "object-key-init"),
              text: cc11001100_hook("text", this.text(e), "object-key-init"),
              container: cc11001100_hook("container", this.container, "object-key-init"),
              trigger: cc11001100_hook("trigger", e, "object-key-init"),
              emitter: cc11001100_hook("emitter", this, "object-key-init")
            }), "assign");
          }
        }, {
          key: cc11001100_hook("key", "defaultAction", "object-key-init"),
          value: function (t) {
            return u("action", t);
          }
        }, {
          key: cc11001100_hook("key", "defaultTarget", "object-key-init"),
          value: function (t) {
            var e = cc11001100_hook("e", u("target", t), "var-init");
            if (e) return document.querySelector(e);
          }
        }, {
          key: cc11001100_hook("key", "defaultText", "object-key-init"),
          value: function (t) {
            return u("text", t);
          }
        }, {
          key: cc11001100_hook("key", "destroy", "object-key-init"),
          value: function () {
            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = cc11001100_hook("this.clipboardAction", null, "assign"));
          }
        }], [{
          key: cc11001100_hook("key", "isSupported", "object-key-init"),
          value: function () {
            var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], "var-init"),
                e = cc11001100_hook("e", "string" == typeof t ? [t] : t, "var-init"),
                n = cc11001100_hook("n", !!document.queryCommandSupported, "var-init");
            return e.forEach(function (t) {
              n = cc11001100_hook("n", n && !!document.queryCommandSupported(t), "assign");
            }), n;
          }
        }]), e;
      }(s.default), "var-init");
      t.exports = cc11001100_hook("t.exports", p, "assign");
    });
  }, function (t, e) {
    function n(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");

      for (; t && t.nodeType !== o;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = cc11001100_hook("t", t.parentNode, "assign");
      }
    }

    var o = cc11001100_hook("o", 9, "var-init");

    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var r = cc11001100_hook("r", Element.prototype, "var-init");
      r.matches = cc11001100_hook("r.matches", r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector, "assign");
    }

    t.exports = cc11001100_hook("t.exports", n, "assign");
  }, function (t, e, n) {
    function o(t, e, n, o, r) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var a = cc11001100_hook("a", i.apply(this, arguments), "var-init");
      return t.addEventListener(n, a, r), {
        destroy: function () {
          t.removeEventListener(n, a, r);
        }
      };
    }

    function r(t, e, n, r, i) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = cc11001100_hook("t", document.querySelectorAll(t), "assign")), Array.prototype.map.call(t, function (t) {
        return o(t, e, n, r, i);
      }));
    }

    function i(t, e, n, o) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      return function (n) {
        n.delegateTarget = cc11001100_hook("n.delegateTarget", a(n.target, e), "assign"), n.delegateTarget && o.call(t, n);
      };
    }

    var a = cc11001100_hook("a", n(4), "var-init");
    t.exports = cc11001100_hook("t.exports", r, "assign");
  }, function (t, e) {
    e.node = cc11001100_hook("e.node", function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, "assign"), e.nodeList = cc11001100_hook("e.nodeList", function (t) {
      var n = cc11001100_hook("n", Object.prototype.toString.call(t), "var-init");
      return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]));
    }, "assign"), e.string = cc11001100_hook("e.string", function (t) {
      return "string" == typeof t || t instanceof String;
    }, "assign"), e.fn = cc11001100_hook("e.fn", function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    }, "assign");
  }, function (t, e) {
    function n(t) {
      cc11001100_hook("t", t, "function-parameter");
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = cc11001100_hook("e", t.value, "assign");else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = cc11001100_hook("n", t.hasAttribute("readonly"), "var-init");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = cc11001100_hook("e", t.value, "assign");
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = cc11001100_hook("o", window.getSelection(), "var-init"),
            r = cc11001100_hook("r", document.createRange(), "var-init");
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = cc11001100_hook("e", o.toString(), "assign");
      }
      return e;
    }

    t.exports = cc11001100_hook("t.exports", n, "assign");
  }]);
});