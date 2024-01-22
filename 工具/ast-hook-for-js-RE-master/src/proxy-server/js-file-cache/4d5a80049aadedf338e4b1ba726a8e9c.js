(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[4195], {
  27521: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, {
      default: function () {
        return x;
      }
    });
    var r = cc11001100_hook("r", n(27378), "var-init"),
        a = cc11001100_hook("a", n(33198), "var-init");
    const l = cc11001100_hook("l", ["element.index ?? -1;", 'const styles = {\n  ...defaults,\n  color: "#f5da55",\n};', "const city = address?.city", 'var name = "Guy Fieri";\nvar place = "Flavortown";\n\n`Hello ${name}, ready for ${place}?`;', 'let yourTurn = "Type some code in here!";'], "var-init");
    let o,
        i,
        c = cc11001100_hook("c", !0, "var-init");
    const s = cc11001100_hook("s", n.n(a)()(function () {
      !function (e, t) {
        let n;

        try {
          n = cc11001100_hook("n", Babel.transform(e.getValue(), {
            presets: cc11001100_hook("presets", ["react", ["env", {
              targets: cc11001100_hook("targets", "defaults, not ie 11, not ie_mob 11", "object-key-init"),
              loose: cc11001100_hook("loose", !0, "object-key-init")
            }]], "object-key-init"),
            plugins: cc11001100_hook("plugins", [["external-helpers", {
              helperVersion: cc11001100_hook("helperVersion", "7.100.0", "object-key-init")
            }]], "object-key-init"),
            filename: cc11001100_hook("filename", "repl", "object-key-init"),
            babelrc: cc11001100_hook("babelrc", !1, "object-key-init")
          }), "assign");
        } catch (l) {
          r = cc11001100_hook("r", t, "assign"), a = cc11001100_hook("a", l.message, "assign"), r.setValue(""), $(".hero-repl__error").text(a).addClass("hero-repl__error--visible");
        }

        var r, a;
        n && ($(".hero-repl__error").removeClass("hero-repl__error--visible"), t.setValue(n.code.replace(/['|"]use strict['|"];(\n\n)?/g, ""), -1));
      }(o, i);
    }, 1e3), "var-init");

    function u(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      const n = cc11001100_hook("n", ace.edit(e), "var-init");
      return n.setOptions({
        highlightActiveLine: cc11001100_hook("highlightActiveLine", !1, "object-key-init"),
        readOnly: cc11001100_hook("readOnly", !!t, "object-key-init"),
        fontSize: cc11001100_hook("fontSize", "1rem", "object-key-init"),
        highlightGutterLine: cc11001100_hook("highlightGutterLine", !1, "object-key-init"),
        showGutter: cc11001100_hook("showGutter", !1, "object-key-init"),
        showLineNumbers: cc11001100_hook("showLineNumbers", !1, "object-key-init"),
        theme: cc11001100_hook("theme", "ace/theme/tomorrow_night", "object-key-init"),
        mode: cc11001100_hook("mode", "ace/mode/javascript", "object-key-init"),
        tabSize: cc11001100_hook("tabSize", 2, "object-key-init"),
        useSoftTabs: cc11001100_hook("useSoftTabs", !0, "object-key-init"),
        useWorker: cc11001100_hook("useWorker", !1, "object-key-init"),
        wrap: cc11001100_hook("wrap", !1, "object-key-init")
      }), n.renderer.setPadding(24), n.renderer.setScrollMargin(24, 24), n.commands.removeCommands(["gotoline", "find"]), n;
    }

    const m = cc11001100_hook("m", {
      start: function () {
        window.screen.width < 760 || ($(".dummy-hero-repl").prop("hidden", !0), $(".hero-repl").prop("hidden", !1), o = cc11001100_hook("o", u("hero-repl-in", !0), "assign"), i = cc11001100_hook("i", u("hero-repl-out", !0), "assign"), i.renderer.$cursorLayer.element.style.display = cc11001100_hook("i.renderer.$cursorLayer.element.style.display", "none", "assign"), o.on("change", function () {
          o.getValue() || (s.cancel(), i.setValue("")), s();
        }), $("#hero-repl-in").on("click", function () {
          c && m.stopDemo();
        }), setTimeout(function () {
          $(".hero-repl").addClass("hero-repl--visible"), function (e, t, n) {
            let r,
                a = cc11001100_hook("a", 0, "var-init"),
                l = cc11001100_hook("l", 0, "var-init");
            !function t(o) {
              const i = cc11001100_hook("i", o ? 4e3 : Math.round(125 * Math.random()) + 30, "var-init");
              r = cc11001100_hook("r", setTimeout(function () {
                if (!c) return void (r && clearTimeout(r));
                const o = cc11001100_hook("o", n[a], "var-init");
                l++, e.setValue(o.substring(0, l), 1), l < o.length ? t() : l === o.length && a < n.length - 1 ? (a++, l = cc11001100_hook("l", 0, "assign"), t(!0)) : (e.selection.selectAll(), e.setReadOnly(!1), clearTimeout(r));
              }, i), "assign");
            }();
          }(o, 0, l);
        }, 150));
      },
      stopDemo: function () {
        s.cancel(), c = cc11001100_hook("c", !1, "assign"), o.setReadOnly(!1), o.setValue(""), i.setValue("");
      }
    }, "var-init");
    var p = cc11001100_hook("p", m, "var-init"),
        d = cc11001100_hook("d", n(41191), "var-init"),
        f = cc11001100_hook("f", n(7419), "var-init"),
        h = cc11001100_hook("h", n(92358), "var-init"),
        v = cc11001100_hook("v", n(89939), "var-init");

    class g extends r.Component {
      render() {
        return r.createElement("div", {
          className: cc11001100_hook("className", "pluginWrapper buttonWrapper", "object-key-init")
        }, r.createElement(d.Z, {
          className: cc11001100_hook("className", "button", "object-key-init"),
          to: cc11001100_hook("to", this.props.href, "object-key-init"),
          target: cc11001100_hook("target", this.props.target, "object-key-init")
        }, this.props.children));
      }

    }

    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      "ace" in window ? e() : setTimeout(() => E(e), 500);
    }

    g.defaultProps = cc11001100_hook("g.defaultProps", {
      target: cc11001100_hook("target", "_self", "object-key-init")
    }, "assign");

    const b = cc11001100_hook("b", () => r.createElement("div", {
      className: cc11001100_hook("className", "dummy-hero-repl", "object-key-init")
    }), "var-init"),
          y = cc11001100_hook("y", () => ((0, r.useEffect)(() => E(() => p.start())), r.createElement("div", {
      className: cc11001100_hook("className", "hero-repl", "object-key-init"),
      hidden: cc11001100_hook("hidden", !0, "object-key-init")
    }, r.createElement("div", {
      className: cc11001100_hook("className", "hero-repl__editor", "object-key-init")
    }, r.createElement("div", {
      className: cc11001100_hook("className", "hero-repl__pane hero-repl__pane--left", "object-key-init")
    }, r.createElement("h3", null, r.createElement(f.Z, null, "\u8f93\u5165\u4ee5\u4e0b\u4e00\u4ee3 JavaScript \u8bed\u6cd5\u4e66\u5199\u7684\u4ee3\u7801")), r.createElement("div", {
      id: cc11001100_hook("id", "hero-repl-in", "object-key-init"),
      className: cc11001100_hook("className", "hero-repl__code", "object-key-init")
    })), r.createElement("div", {
      className: cc11001100_hook("className", "hero-repl__pane hero-repl__pane--right", "object-key-init")
    }, r.createElement("h3", null, r.createElement(f.Z, null, "\u8f93\u51fa\u6d4f\u89c8\u5668\u517c\u5bb9\u7684 JavaScript \u4ee3\u7801")), r.createElement("div", {
      id: cc11001100_hook("id", "hero-repl-out", "object-key-init"),
      className: cc11001100_hook("className", "hero-repl__code", "object-key-init")
    }), r.createElement("div", {
      className: cc11001100_hook("className", "hero-repl__error", "object-key-init")
    }))))), "var-init"),
          _ = cc11001100_hook("_", e => {
      let {
        language: t
      } = cc11001100_hook("", e, "var-init");
      return r.createElement("div", {
        className: cc11001100_hook("className", "blockElement", "object-key-init"),
        style: {
          fontSize: cc11001100_hook("fontSize", "18px", "object-key-init"),
          maxWidth: cc11001100_hook("maxWidth", "800px", "object-key-init"),
          padding: cc11001100_hook("padding", "45px 0 7px", "object-key-init"),
          margin: cc11001100_hook("margin", "0 auto", "object-key-init")
        }
      }, r.createElement("p", null, "\u5b66\u4e60 Babel \u7684\u6700\u597d\u8d44\u6599\u5c31\u662f\u6211\u4eec\u7684", " ", r.createElement(d.Z, {
        to: cc11001100_hook("to", "/docs", "object-key-init")
      }, "\u5165\u95e8\u6307\u5357"), " \u6216\u8005\u770b\u4e00\u770b", " ", r.createElement(d.Z, {
        href: cc11001100_hook("href", "/videos", "object-key-init")
      }, "\u8fd9\u4e9b\u89c6\u9891\uff08\u9700\u7ffb\u5899\uff09"), " \u4e86\u89e3\u4e00\u4e0b Babel \u80cc\u540e\u7684\u4eba\u548c\u7406\u5ff5\u3002"));
    }, "var-init"),
          N = cc11001100_hook("N", e => r.createElement("div", {
      style: {
        paddingBottom: cc11001100_hook("paddingBottom", 20, "object-key-init")
      }
    }, r.createElement("div", {
      className: cc11001100_hook("className", "wrapper", "object-key-init")
    }, r.createElement("div", {
      className: cc11001100_hook("className", "gridBlock", "object-key-init")
    }, e.children))), "var-init"),
          w = cc11001100_hook("w", e => {
      let {
        language: t
      } = cc11001100_hook("", e, "var-init");
      return r.createElement("div", {
        className: cc11001100_hook("className", "hero", "object-key-init")
      }, r.createElement(d.Z, {
        to: cc11001100_hook("to", "https://teespring.com/babel-christmas?pr=FLAVORTOWN", "object-key-init")
      }, r.createElement("div", {
        className: cc11001100_hook("className", "homepage-banner", "object-key-init")
      }, "Get Babel Holiday Apparel \ud83d\udc55")), r.createElement("div", {
        className: cc11001100_hook("className", "hero__container", "object-key-init")
      }, r.createElement("h1", null, r.createElement(f.Z, null, "Babel \u662f\u4e00\u4e2a JavaScript \u7f16\u8bd1\u5668\u3002")), r.createElement("p", null, r.createElement(f.Z, null, "\u4eca\u5929\u5c31\u5f00\u59cb\u4f7f\u7528\u4e0b\u4e00\u4ee3\u7684 JavaScript \u8bed\u6cd5\u7f16\u7a0b\u5427\uff01")), r.createElement("div", {
        className: cc11001100_hook("className", "hero__announcement", "object-key-init")
      }, r.createElement("span", null, r.createElement("strong", null, "Babel 7.22 \u5df2\u53d1\u5e03"), " \u8bf7\u67e5\u770b\u6b64", " ", r.createElement(d.Z, {
        to: cc11001100_hook("to", "/blog/2023/05/26/7.22.0", "object-key-init")
      }, "\u535a\u6587"), " \u548c", " ", r.createElement(d.Z, {
        to: cc11001100_hook("to", "https://github.com/babel/babel/releases/tag/v7.22.0", "object-key-init")
      }, "\u66f4\u65b0\u65e5\u5fd7"), " ", "\u4ee5\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002")), r.createElement(b, null), r.createElement(y, {
        language: cc11001100_hook("language", t, "object-key-init")
      })));
    }, "var-init");

    var x = cc11001100_hook("x", e => {
      let {
        language: t
      } = cc11001100_hook("", e, "var-init");
      const {
        siteConfig: n
      } = cc11001100_hook("", (0, v.Z)(), "var-init"),
            {
        customFields: a
      } = cc11001100_hook("", n, "var-init");
      return r.createElement(h.Z, {
        title: cc11001100_hook("title", null == n ? void 0 : n.title, "object-key-init"),
        description: cc11001100_hook("description", null == n ? void 0 : n.tagline, "object-key-init")
      }, r.createElement("div", null, r.createElement(w, {
        language: cc11001100_hook("language", t, "object-key-init")
      }), r.createElement("div", {
        className: cc11001100_hook("className", "mainContainer", "object-key-init"),
        style: {
          padding: cc11001100_hook("padding", 0, "object-key-init")
        }
      }, r.createElement(N, null, r.createElement(_, {
        language: cc11001100_hook("language", t, "object-key-init")
      })))));
    }, "var-init");
  },
  33198: function (e, t, n) {
    var r = cc11001100_hook("r", NaN, "var-init"),
        a = cc11001100_hook("a", "[object Symbol]", "var-init"),
        l = cc11001100_hook("l", /^\s+|\s+$/g, "var-init"),
        o = cc11001100_hook("o", /^[-+]0x[0-9a-f]+$/i, "var-init"),
        i = cc11001100_hook("i", /^0b[01]+$/i, "var-init"),
        c = cc11001100_hook("c", /^0o[0-7]+$/i, "var-init"),
        s = cc11001100_hook("s", parseInt, "var-init"),
        u = cc11001100_hook("u", "object" == typeof n.g && n.g && n.g.Object === Object && n.g, "var-init"),
        m = cc11001100_hook("m", "object" == typeof self && self && self.Object === Object && self, "var-init"),
        p = cc11001100_hook("p", u || m || Function("return this")(), "var-init"),
        d = cc11001100_hook("d", Object.prototype.toString, "var-init"),
        f = cc11001100_hook("f", Math.max, "var-init"),
        h = cc11001100_hook("h", Math.min, "var-init"),
        v = function () {
      return p.Date.now();
    };

    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", typeof e, "var-init");
      return !!e && ("object" == t || "function" == t);
    }

    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      if ("number" == typeof e) return e;
      if (function (e) {
        return "symbol" == typeof e || function (e) {
          return !!e && "object" == typeof e;
        }(e) && d.call(e) == a;
      }(e)) return r;

      if (g(e)) {
        var t = cc11001100_hook("t", "function" == typeof e.valueOf ? e.valueOf() : e, "var-init");
        e = cc11001100_hook("e", g(t) ? t + "" : t, "assign");
      }

      if ("string" != typeof e) return 0 === e ? e : +e;
      e = cc11001100_hook("e", e.replace(l, ""), "assign");
      var n = cc11001100_hook("n", i.test(e), "var-init");
      return n || c.test(e) ? s(e.slice(2), n ? 2 : 8) : o.test(e) ? r : +e;
    }

    e.exports = cc11001100_hook("e.exports", function (e, t, n) {
      var r,
          a,
          l,
          o,
          i,
          c,
          s = cc11001100_hook("s", 0, "var-init"),
          u = cc11001100_hook("u", !1, "var-init"),
          m = cc11001100_hook("m", !1, "var-init"),
          p = cc11001100_hook("p", !0, "var-init");
      if ("function" != typeof e) throw new TypeError("Expected a function");

      function d(t) {
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", r, "var-init"),
            l = cc11001100_hook("l", a, "var-init");
        return r = cc11001100_hook("r", a = cc11001100_hook("a", void 0, "assign"), "assign"), s = cc11001100_hook("s", t, "assign"), o = cc11001100_hook("o", e.apply(l, n), "assign");
      }

      function b(e) {
        cc11001100_hook("e", e, "function-parameter");
        var n = cc11001100_hook("n", e - c, "var-init");
        return void 0 === c || n >= t || n < 0 || m && e - s >= l;
      }

      function y() {
        var e = cc11001100_hook("e", v(), "var-init");
        if (b(e)) return _(e);
        i = cc11001100_hook("i", setTimeout(y, function (e) {
          var n = cc11001100_hook("n", t - (e - c), "var-init");
          return m ? h(n, l - (e - s)) : n;
        }(e)), "assign");
      }

      function _(e) {
        cc11001100_hook("e", e, "function-parameter");
        return i = cc11001100_hook("i", void 0, "assign"), p && r ? d(e) : (r = cc11001100_hook("r", a = cc11001100_hook("a", void 0, "assign"), "assign"), o);
      }

      function N() {
        var e = cc11001100_hook("e", v(), "var-init"),
            n = cc11001100_hook("n", b(e), "var-init");

        if (r = cc11001100_hook("r", arguments, "assign"), a = cc11001100_hook("a", this, "assign"), c = cc11001100_hook("c", e, "assign"), n) {
          if (void 0 === i) return function (e) {
            return s = cc11001100_hook("s", e, "assign"), i = cc11001100_hook("i", setTimeout(y, t), "assign"), u ? d(e) : o;
          }(c);
          if (m) return i = cc11001100_hook("i", setTimeout(y, t), "assign"), d(c);
        }

        return void 0 === i && (i = cc11001100_hook("i", setTimeout(y, t), "assign")), o;
      }

      return t = cc11001100_hook("t", E(t) || 0, "assign"), g(n) && (u = cc11001100_hook("u", !!n.leading, "assign"), l = cc11001100_hook("l", (m = cc11001100_hook("m", "maxWait" in n, "assign")) ? f(E(n.maxWait) || 0, t) : l, "assign"), p = cc11001100_hook("p", "trailing" in n ? !!n.trailing : p, "assign")), N.cancel = cc11001100_hook("N.cancel", function () {
        void 0 !== i && clearTimeout(i), s = cc11001100_hook("s", 0, "assign"), r = cc11001100_hook("r", c = cc11001100_hook("c", a = cc11001100_hook("a", i = cc11001100_hook("i", void 0, "assign"), "assign"), "assign"), "assign");
      }, "assign"), N.flush = cc11001100_hook("N.flush", function () {
        return void 0 === i ? o : _(v());
      }, "assign"), N;
    }, "assign");
  }
}]);