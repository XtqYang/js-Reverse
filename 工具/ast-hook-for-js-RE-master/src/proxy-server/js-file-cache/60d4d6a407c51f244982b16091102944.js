(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[9230], {
  89230: function (e, t, n) {
    "use strict";

    n.d(t, {
      Z: function () {
        return Q;
      }
    });
    var o = cc11001100_hook("o", n(25773), "var-init"),
        r = cc11001100_hook("r", n(27378), "var-init"),
        c = cc11001100_hook("c", n(90362), "var-init"),
        a = cc11001100_hook("a", n(38944), "var-init"),
        s = cc11001100_hook("s", n(44561), "var-init"),
        l = cc11001100_hook("l", n(59899), "var-init");

    function i() {
      const {
        prism: e
      } = cc11001100_hook("", (0, l.L)(), "var-init"),
            {
        colorMode: t
      } = cc11001100_hook("", (0, s.I)(), "var-init"),
            n = cc11001100_hook("n", e.theme, "var-init"),
            o = cc11001100_hook("o", e.darkTheme || n, "var-init");
      return "dark" === t ? o : n;
    }

    var u = cc11001100_hook("u", n(55854), "var-init"),
        d = cc11001100_hook("d", n(6324), "var-init"),
        p = cc11001100_hook("p", n.n(d), "var-init");
    const m = cc11001100_hook("m", /title=(?<quote>["'])(?<title>.*?)\1/, "var-init"),
          g = cc11001100_hook("g", /\{(?<range>[\d,-]+)\}/, "var-init"),
          f = cc11001100_hook("f", {
      js: {
        start: cc11001100_hook("start", "\\/\\/", "object-key-init"),
        end: cc11001100_hook("end", "", "object-key-init")
      },
      jsBlock: {
        start: cc11001100_hook("start", "\\/\\*", "object-key-init"),
        end: cc11001100_hook("end", "\\*\\/", "object-key-init")
      },
      jsx: {
        start: cc11001100_hook("start", "\\{\\s*\\/\\*", "object-key-init"),
        end: cc11001100_hook("end", "\\*\\/\\s*\\}", "object-key-init")
      },
      bash: {
        start: cc11001100_hook("start", "#", "object-key-init"),
        end: cc11001100_hook("end", "", "object-key-init")
      },
      html: {
        start: cc11001100_hook("start", "\x3c!--", "object-key-init"),
        end: cc11001100_hook("end", "--\x3e", "object-key-init")
      }
    }, "var-init");

    function y(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      const n = cc11001100_hook("n", e.map(e => {
        const {
          start: n,
          end: o
        } = cc11001100_hook("", f[e], "var-init");
        return "(?:" + n + "\\s*(" + t.flatMap(e => {
          var t, n;
          return [e.line, null == (t = cc11001100_hook("t", e.block, "assign")) ? void 0 : t.start, null == (n = cc11001100_hook("n", e.block, "assign")) ? void 0 : n.end].filter(Boolean);
        }).join("|") + ")\\s*" + o + ")";
      }).join("|"), "var-init");
      return new RegExp("^\\s*(?:" + n + ")\\s*$");
    }

    function h(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let n = cc11001100_hook("n", e.replace(/\n$/, ""), "var-init");
      const {
        language: o,
        magicComments: r,
        metastring: c
      } = cc11001100_hook("", t, "var-init");

      if (c && g.test(c)) {
        const e = cc11001100_hook("e", c.match(g).groups.range, "var-init");
        if (0 === r.length) throw new Error("A highlight range has been given in code block's metastring (``` " + c + "), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");
        const t = cc11001100_hook("t", r[0].className, "var-init"),
              o = cc11001100_hook("o", p()(e).filter(e => e > 0).map(e => [e - 1, [t]]), "var-init");
        return {
          lineClassNames: cc11001100_hook("lineClassNames", Object.fromEntries(o), "object-key-init"),
          code: cc11001100_hook("code", n, "object-key-init")
        };
      }

      if (void 0 === o) return {
        lineClassNames: {},
        code: cc11001100_hook("code", n, "object-key-init")
      };
      const a = cc11001100_hook("a", function (e, t) {
        switch (e) {
          case "js":
          case "javascript":
          case "ts":
          case "typescript":
            return y(["js", "jsBlock"], t);

          case "jsx":
          case "tsx":
            return y(["js", "jsBlock", "jsx"], t);

          case "html":
            return y(["js", "jsBlock", "html"], t);

          case "python":
          case "py":
          case "bash":
            return y(["bash"], t);

          case "markdown":
          case "md":
            return y(["html", "jsx", "bash"], t);

          default:
            return y(Object.keys(f), t);
        }
      }(o, r), "var-init"),
            s = cc11001100_hook("s", n.split("\n"), "var-init"),
            l = cc11001100_hook("l", Object.fromEntries(r.map(e => [e.className, {
        start: cc11001100_hook("start", 0, "object-key-init"),
        range: cc11001100_hook("range", "", "object-key-init")
      }])), "var-init"),
            i = cc11001100_hook("i", Object.fromEntries(r.filter(e => e.line).map(e => {
        let {
          className: t,
          line: n
        } = cc11001100_hook("", e, "var-init");
        return [n, t];
      })), "var-init"),
            u = cc11001100_hook("u", Object.fromEntries(r.filter(e => e.block).map(e => {
        let {
          className: t,
          block: n
        } = cc11001100_hook("", e, "var-init");
        return [n.start, t];
      })), "var-init"),
            d = cc11001100_hook("d", Object.fromEntries(r.filter(e => e.block).map(e => {
        let {
          className: t,
          block: n
        } = cc11001100_hook("", e, "var-init");
        return [n.end, t];
      })), "var-init");

      for (let p = cc11001100_hook("p", 0, "var-init"); p < s.length;) {
        const e = cc11001100_hook("e", s[p].match(a), "var-init");

        if (!e) {
          p += cc11001100_hook("p", 1, "assign");
          continue;
        }

        const t = cc11001100_hook("t", e.slice(1).find(e => void 0 !== e), "var-init");
        i[t] ? l[i[t]].range += cc11001100_hook("l[i[t]].range", p + ",", "assign") : u[t] ? l[u[t]].start = cc11001100_hook("l[u[t]].start", p, "assign") : d[t] && (l[d[t]].range += cc11001100_hook("l[d[t]].range", l[d[t]].start + "-" + (p - 1) + ",", "assign")), s.splice(p, 1);
      }

      n = cc11001100_hook("n", s.join("\n"), "assign");
      const m = cc11001100_hook("m", {}, "var-init");
      return Object.entries(l).forEach(e => {
        let [t, {
          range: n
        }] = cc11001100_hook("", e, "var-init");
        p()(n).forEach(e => {
          null != m[e] || (m[e] = cc11001100_hook("m[e]", [], "assign")), m[e].push(t);
        });
      }), {
        lineClassNames: cc11001100_hook("lineClassNames", m, "object-key-init"),
        code: cc11001100_hook("code", n, "object-key-init")
      };
    }

    var b = cc11001100_hook("b", {
      codeBlockContainer: cc11001100_hook("codeBlockContainer", "codeBlockContainer_mQmQ", "object-key-init")
    }, "var-init");

    function k(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        as: t,
        ...n
      } = cc11001100_hook("", e, "var-init");
      const c = cc11001100_hook("c", function (e) {
        const t = cc11001100_hook("t", {
          color: cc11001100_hook("color", "--prism-color", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "--prism-background-color", "object-key-init")
        }, "var-init"),
              n = cc11001100_hook("n", {}, "var-init");
        return Object.entries(e.plain).forEach(e => {
          let [o, r] = cc11001100_hook("", e, "var-init");
          const c = cc11001100_hook("c", t[o], "var-init");
          c && "string" == typeof r && (n[c] = cc11001100_hook("n[c]", r, "assign"));
        }), n;
      }(i()), "var-init");
      return r.createElement(t, (0, o.Z)({}, n, {
        style: cc11001100_hook("style", c, "object-key-init"),
        className: cc11001100_hook("className", (0, a.Z)(n.className, b.codeBlockContainer, u.k.common.codeBlock), "object-key-init")
      }));
    }

    var v = cc11001100_hook("v", {
      codeBlockContent: cc11001100_hook("codeBlockContent", "codeBlockContent_D5yF", "object-key-init"),
      codeBlockTitle: cc11001100_hook("codeBlockTitle", "codeBlockTitle_x_ju", "object-key-init"),
      codeBlock: cc11001100_hook("codeBlock", "codeBlock_RMoD", "object-key-init"),
      codeBlockStandalone: cc11001100_hook("codeBlockStandalone", "codeBlockStandalone_wQog", "object-key-init"),
      codeBlockLines: cc11001100_hook("codeBlockLines", "codeBlockLines_AclH", "object-key-init"),
      codeBlockLinesWithNumbering: cc11001100_hook("codeBlockLinesWithNumbering", "codeBlockLinesWithNumbering_O625", "object-key-init"),
      buttonGroup: cc11001100_hook("buttonGroup", "buttonGroup_aaMX", "object-key-init")
    }, "var-init");

    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        className: n
      } = cc11001100_hook("", e, "var-init");
      return r.createElement(k, {
        as: cc11001100_hook("as", "pre", "object-key-init"),
        tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
        className: cc11001100_hook("className", (0, a.Z)(v.codeBlockStandalone, "thin-scrollbar", n), "object-key-init")
      }, r.createElement("code", {
        className: cc11001100_hook("className", v.codeBlockLines, "object-key-init")
      }, t));
    }

    var B = cc11001100_hook("B", n(13879), "var-init");
    const N = cc11001100_hook("N", {
      attributes: cc11001100_hook("attributes", !0, "object-key-init"),
      characterData: cc11001100_hook("characterData", !0, "object-key-init"),
      childList: cc11001100_hook("childList", !0, "object-key-init"),
      subtree: cc11001100_hook("subtree", !0, "object-key-init")
    }, "var-init");

    function C(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      const [n, o] = cc11001100_hook("", (0, r.useState)(), "var-init"),
            c = cc11001100_hook("c", (0, r.useCallback)(() => {
        var t;
        o(null == (t = cc11001100_hook("t", e.current, "assign")) ? void 0 : t.closest("[role=tabpanel][hidden]"));
      }, [e, o]), "var-init");
      (0, r.useEffect)(() => {
        c();
      }, [c]), function (e, t, n) {
        void 0 === n && (n = cc11001100_hook("n", N, "assign"));
        const o = cc11001100_hook("o", (0, B.zX)(t), "var-init"),
              c = cc11001100_hook("c", (0, B.Ql)(n), "var-init");
        (0, r.useEffect)(() => {
          const t = cc11001100_hook("t", new MutationObserver(o), "var-init");
          return e && t.observe(e, c), () => t.disconnect();
        }, [e, o, c]);
      }(n, e => {
        e.forEach(e => {
          "attributes" === e.type && "hidden" === e.attributeName && (t(), c());
        });
      }, {
        attributes: cc11001100_hook("attributes", !0, "object-key-init"),
        characterData: cc11001100_hook("characterData", !1, "object-key-init"),
        childList: cc11001100_hook("childList", !1, "object-key-init"),
        subtree: cc11001100_hook("subtree", !1, "object-key-init")
      });
    }

    var L = cc11001100_hook("L", {
      plain: {
        backgroundColor: cc11001100_hook("backgroundColor", "#2a2734", "object-key-init"),
        color: cc11001100_hook("color", "#9a86fd", "object-key-init")
      },
      styles: cc11001100_hook("styles", [{
        types: cc11001100_hook("types", ["comment", "prolog", "doctype", "cdata", "punctuation"], "object-key-init"),
        style: {
          color: cc11001100_hook("color", "#6c6783", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["namespace"], "object-key-init"),
        style: {
          opacity: cc11001100_hook("opacity", .7, "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["tag", "operator", "number"], "object-key-init"),
        style: {
          color: cc11001100_hook("color", "#e09142", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["property", "function"], "object-key-init"),
        style: {
          color: cc11001100_hook("color", "#9a86fd", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["tag-id", "selector", "atrule-id"], "object-key-init"),
        style: {
          color: cc11001100_hook("color", "#eeebff", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["attr-name"], "object-key-init"),
        style: {
          color: cc11001100_hook("color", "#c4b9fe", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"], "object-key-init"),
        style: {
          color: cc11001100_hook("color", "#ffcc99", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["deleted"], "object-key-init"),
        style: {
          textDecorationLine: cc11001100_hook("textDecorationLine", "line-through", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["inserted"], "object-key-init"),
        style: {
          textDecorationLine: cc11001100_hook("textDecorationLine", "underline", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["italic"], "object-key-init"),
        style: {
          fontStyle: cc11001100_hook("fontStyle", "italic", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["important", "bold"], "object-key-init"),
        style: {
          fontWeight: cc11001100_hook("fontWeight", "bold", "object-key-init")
        }
      }, {
        types: cc11001100_hook("types", ["important"], "object-key-init"),
        style: {
          color: cc11001100_hook("color", "#c4b9fe", "object-key-init")
        }
      }], "object-key-init")
    }, "var-init"),
        w = cc11001100_hook("w", {
      Prism: cc11001100_hook("Prism", n(52349).Z, "object-key-init"),
      theme: cc11001100_hook("theme", L, "object-key-init")
    }, "var-init");

    function j(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", n, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", n, "assign"), e;
    }

    function T() {
      return T = cc11001100_hook("T", Object.assign || function (e) {
        for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
          var n = cc11001100_hook("n", arguments[t], "var-init");

          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = cc11001100_hook("e[o]", n[o], "assign"));
        }

        return e;
      }, "assign"), T.apply(this, arguments);
    }

    var x = cc11001100_hook("x", /\r\n|\r|\n/, "var-init"),
        I = function (e) {
      0 === e.length ? e.push({
        types: cc11001100_hook("types", ["plain"], "object-key-init"),
        content: cc11001100_hook("content", "\n", "object-key-init"),
        empty: cc11001100_hook("empty", !0, "object-key-init")
      }) : 1 === e.length && "" === e[0].content && (e[0].content = cc11001100_hook("e[0].content", "\n", "assign"), e[0].empty = cc11001100_hook("e[0].empty", !0, "assign"));
    },
        O = function (e, t) {
      var n = cc11001100_hook("n", e.length, "var-init");
      return n > 0 && e[n - 1] === t ? e : e.concat(t);
    };

    function S(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", {}, "var-init");

      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && -1 === t.indexOf(o) && (n[o] = cc11001100_hook("n[o]", e[o], "assign"));

      return n;
    }

    var _ = cc11001100_hook("_", function (e) {
      function t() {
        for (var t = cc11001100_hook("t", this, "var-init"), n = cc11001100_hook("n", [], "var-init"), o = cc11001100_hook("o", arguments.length, "var-init"); o--;) n[o] = cc11001100_hook("n[o]", arguments[o], "assign");

        e.apply(this, n), j(this, "getThemeDict", function (e) {
          if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage) return t.themeDict;
          t.prevTheme = cc11001100_hook("t.prevTheme", e.theme, "assign"), t.prevLanguage = cc11001100_hook("t.prevLanguage", e.language, "assign");
          var n = cc11001100_hook("n", e.theme ? function (e, t) {
            var n = cc11001100_hook("n", e.plain, "var-init"),
                o = cc11001100_hook("o", Object.create(null), "var-init"),
                r = cc11001100_hook("r", e.styles.reduce(function (e, n) {
              var o = cc11001100_hook("o", n.languages, "var-init"),
                  r = cc11001100_hook("r", n.style, "var-init");
              return o && !o.includes(t) || n.types.forEach(function (t) {
                var n = cc11001100_hook("n", T({}, e[t], r), "var-init");
                e[t] = cc11001100_hook("e[t]", n, "assign");
              }), e;
            }, o), "var-init");
            return r.root = cc11001100_hook("r.root", n, "assign"), r.plain = cc11001100_hook("r.plain", T({}, n, {
              backgroundColor: cc11001100_hook("backgroundColor", null, "object-key-init")
            }), "assign"), r;
          }(e.theme, e.language) : void 0, "var-init");
          return t.themeDict = cc11001100_hook("t.themeDict", n, "assign");
        }), j(this, "getLineProps", function (e) {
          var n = cc11001100_hook("n", e.key, "var-init"),
              o = cc11001100_hook("o", e.className, "var-init"),
              r = cc11001100_hook("r", e.style, "var-init"),
              c = cc11001100_hook("c", T({}, S(e, ["key", "className", "style", "line"]), {
            className: cc11001100_hook("className", "token-line", "object-key-init"),
            style: cc11001100_hook("style", void 0, "object-key-init"),
            key: cc11001100_hook("key", void 0, "object-key-init")
          }), "var-init"),
              a = cc11001100_hook("a", t.getThemeDict(t.props), "var-init");
          return void 0 !== a && (c.style = cc11001100_hook("c.style", a.plain, "assign")), void 0 !== r && (c.style = cc11001100_hook("c.style", void 0 !== c.style ? T({}, c.style, r) : r, "assign")), void 0 !== n && (c.key = cc11001100_hook("c.key", n, "assign")), o && (c.className += cc11001100_hook("c.className", " " + o, "assign")), c;
        }), j(this, "getStyleForToken", function (e) {
          var n = cc11001100_hook("n", e.types, "var-init"),
              o = cc11001100_hook("o", e.empty, "var-init"),
              r = cc11001100_hook("r", n.length, "var-init"),
              c = cc11001100_hook("c", t.getThemeDict(t.props), "var-init");

          if (void 0 !== c) {
            if (1 === r && "plain" === n[0]) return o ? {
              display: cc11001100_hook("display", "inline-block", "object-key-init")
            } : void 0;
            if (1 === r && !o) return c[n[0]];
            var a = cc11001100_hook("a", o ? {
              display: cc11001100_hook("display", "inline-block", "object-key-init")
            } : {}, "var-init"),
                s = cc11001100_hook("s", n.map(function (e) {
              return c[e];
            }), "var-init");
            return Object.assign.apply(Object, [a].concat(s));
          }
        }), j(this, "getTokenProps", function (e) {
          var n = cc11001100_hook("n", e.key, "var-init"),
              o = cc11001100_hook("o", e.className, "var-init"),
              r = cc11001100_hook("r", e.style, "var-init"),
              c = cc11001100_hook("c", e.token, "var-init"),
              a = cc11001100_hook("a", T({}, S(e, ["key", "className", "style", "token"]), {
            className: cc11001100_hook("className", "token " + c.types.join(" "), "object-key-init"),
            children: cc11001100_hook("children", c.content, "object-key-init"),
            style: cc11001100_hook("style", t.getStyleForToken(c), "object-key-init"),
            key: cc11001100_hook("key", void 0, "object-key-init")
          }), "var-init");
          return void 0 !== r && (a.style = cc11001100_hook("a.style", void 0 !== a.style ? T({}, a.style, r) : r, "assign")), void 0 !== n && (a.key = cc11001100_hook("a.key", n, "assign")), o && (a.className += cc11001100_hook("a.className", " " + o, "assign")), a;
        }), j(this, "tokenize", function (e, t, n, o) {
          var r = cc11001100_hook("r", {
            code: cc11001100_hook("code", t, "object-key-init"),
            grammar: cc11001100_hook("grammar", n, "object-key-init"),
            language: cc11001100_hook("language", o, "object-key-init"),
            tokens: cc11001100_hook("tokens", [], "object-key-init")
          }, "var-init");
          e.hooks.run("before-tokenize", r);
          var c = cc11001100_hook("c", r.tokens = cc11001100_hook("r.tokens", e.tokenize(r.code, r.grammar, r.language), "assign"), "var-init");
          return e.hooks.run("after-tokenize", r), c;
        });
      }

      return e && (t.__proto__ = cc11001100_hook("t.__proto__", e, "assign")), t.prototype = cc11001100_hook("t.prototype", Object.create(e && e.prototype), "assign"), t.prototype.constructor = cc11001100_hook("t.prototype.constructor", t, "assign"), t.prototype.render = cc11001100_hook("t.prototype.render", function () {
        var e = cc11001100_hook("e", this.props, "var-init"),
            t = cc11001100_hook("t", e.Prism, "var-init"),
            n = cc11001100_hook("n", e.language, "var-init"),
            o = cc11001100_hook("o", e.code, "var-init"),
            r = cc11001100_hook("r", e.children, "var-init"),
            c = cc11001100_hook("c", this.getThemeDict(this.props), "var-init"),
            a = cc11001100_hook("a", t.languages[n], "var-init");
        return r({
          tokens: cc11001100_hook("tokens", function (e) {
            for (var t = cc11001100_hook("t", [[]], "var-init"), n = cc11001100_hook("n", [e], "var-init"), o = cc11001100_hook("o", [0], "var-init"), r = cc11001100_hook("r", [e.length], "var-init"), c = cc11001100_hook("c", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"), s = cc11001100_hook("s", [], "var-init"), l = cc11001100_hook("l", [s], "var-init"); a > -1;) {
              for (; (c = cc11001100_hook("c", o[a]++, "assign")) < r[a];) {
                var i = cc11001100_hook("i", void 0, "var-init"),
                    u = cc11001100_hook("u", t[a], "var-init"),
                    d = cc11001100_hook("d", n[a][c], "var-init");

                if ("string" == typeof d ? (u = cc11001100_hook("u", a > 0 ? u : ["plain"], "assign"), i = cc11001100_hook("i", d, "assign")) : (u = cc11001100_hook("u", O(u, d.type), "assign"), d.alias && (u = cc11001100_hook("u", O(u, d.alias), "assign")), i = cc11001100_hook("i", d.content, "assign")), "string" == typeof i) {
                  var p = cc11001100_hook("p", i.split(x), "var-init"),
                      m = cc11001100_hook("m", p.length, "var-init");
                  s.push({
                    types: cc11001100_hook("types", u, "object-key-init"),
                    content: cc11001100_hook("content", p[0], "object-key-init")
                  });

                  for (var g = cc11001100_hook("g", 1, "var-init"); g < m; g++) I(s), l.push(s = cc11001100_hook("s", [], "assign")), s.push({
                    types: cc11001100_hook("types", u, "object-key-init"),
                    content: cc11001100_hook("content", p[g], "object-key-init")
                  });
                } else a++, t.push(u), n.push(i), o.push(0), r.push(i.length);
              }

              a--, t.pop(), n.pop(), o.pop(), r.pop();
            }

            return I(s), l;
          }(void 0 !== a ? this.tokenize(t, o, a, n) : [o]), "object-key-init"),
          className: cc11001100_hook("className", "prism-code language-" + n, "object-key-init"),
          style: cc11001100_hook("style", void 0 !== c ? c.root : {}, "object-key-init"),
          getLineProps: cc11001100_hook("getLineProps", this.getLineProps, "object-key-init"),
          getTokenProps: cc11001100_hook("getTokenProps", this.getTokenProps, "object-key-init")
        });
      }, "assign"), t;
    }(r.Component), "var-init"),
        Z = cc11001100_hook("Z", _, "var-init"),
        A = cc11001100_hook("A", {
      codeLine: cc11001100_hook("codeLine", "codeLine_FAqz", "object-key-init"),
      codeLineNumber: cc11001100_hook("codeLineNumber", "codeLineNumber_BE9Z", "object-key-init"),
      codeLineContent: cc11001100_hook("codeLineContent", "codeLineContent_EF2y", "object-key-init")
    }, "var-init");

    function P(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        line: t,
        classNames: n,
        showLineNumbers: c,
        getLineProps: s,
        getTokenProps: l
      } = cc11001100_hook("", e, "var-init");
      1 === t.length && "\n" === t[0].content && (t[0].content = cc11001100_hook("t[0].content", "", "assign"));
      const i = cc11001100_hook("i", s({
        line: cc11001100_hook("line", t, "object-key-init"),
        className: cc11001100_hook("className", (0, a.Z)(n, c && A.codeLine), "object-key-init")
      }), "var-init"),
            u = cc11001100_hook("u", t.map((e, t) => r.createElement("span", (0, o.Z)({
        key: cc11001100_hook("key", t, "object-key-init")
      }, l({
        token: cc11001100_hook("token", e, "object-key-init"),
        key: cc11001100_hook("key", t, "object-key-init")
      })))), "var-init");
      return r.createElement("span", i, c ? r.createElement(r.Fragment, null, r.createElement("span", {
        className: cc11001100_hook("className", A.codeLineNumber, "object-key-init")
      }), r.createElement("span", {
        className: cc11001100_hook("className", A.codeLineContent, "object-key-init")
      }, u)) : u, r.createElement("br", null));
    }

    var z = cc11001100_hook("z", n(7419), "var-init");

    function W(e) {
      cc11001100_hook("e", e, "function-parameter");
      return r.createElement("svg", (0, o.Z)({
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, e), r.createElement("path", {
        fill: cc11001100_hook("fill", "currentColor", "object-key-init"),
        d: cc11001100_hook("d", "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z", "object-key-init")
      }));
    }

    function D(e) {
      cc11001100_hook("e", e, "function-parameter");
      return r.createElement("svg", (0, o.Z)({
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, e), r.createElement("path", {
        fill: cc11001100_hook("fill", "currentColor", "object-key-init"),
        d: cc11001100_hook("d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", "object-key-init")
      }));
    }

    var H = cc11001100_hook("H", {
      copyButtonCopied: cc11001100_hook("copyButtonCopied", "copyButtonCopied_TYdd", "object-key-init"),
      copyButtonIcons: cc11001100_hook("copyButtonIcons", "copyButtonIcons_z5j7", "object-key-init"),
      copyButtonIcon: cc11001100_hook("copyButtonIcon", "copyButtonIcon_FoOz", "object-key-init"),
      copyButtonSuccessIcon: cc11001100_hook("copyButtonSuccessIcon", "copyButtonSuccessIcon_L0B6", "object-key-init")
    }, "var-init");

    function M(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        code: t,
        className: n
      } = cc11001100_hook("", e, "var-init");
      const [o, c] = cc11001100_hook("", (0, r.useState)(!1), "var-init"),
            s = cc11001100_hook("s", (0, r.useRef)(void 0), "var-init"),
            l = cc11001100_hook("l", (0, r.useCallback)(() => {
        !function (e, t) {
          let {
            target: n = document.body
          } = cc11001100_hook("", void 0 === t ? {} : t, "var-init");
          const o = cc11001100_hook("o", document.createElement("textarea"), "var-init"),
                r = cc11001100_hook("r", document.activeElement, "var-init");
          o.value = cc11001100_hook("o.value", e, "assign"), o.setAttribute("readonly", ""), o.style.contain = cc11001100_hook("o.style.contain", "strict", "assign"), o.style.position = cc11001100_hook("o.style.position", "absolute", "assign"), o.style.left = cc11001100_hook("o.style.left", "-9999px", "assign"), o.style.fontSize = cc11001100_hook("o.style.fontSize", "12pt", "assign");
          const c = cc11001100_hook("c", document.getSelection(), "var-init");
          let a = cc11001100_hook("a", !1, "var-init");
          c.rangeCount > 0 && (a = cc11001100_hook("a", c.getRangeAt(0), "assign")), n.append(o), o.select(), o.selectionStart = cc11001100_hook("o.selectionStart", 0, "assign"), o.selectionEnd = cc11001100_hook("o.selectionEnd", e.length, "assign");
          let s = cc11001100_hook("s", !1, "var-init");

          try {
            s = cc11001100_hook("s", document.execCommand("copy"), "assign");
          } catch {}

          o.remove(), a && (c.removeAllRanges(), c.addRange(a)), r && r.focus();
        }(t), c(!0), s.current = cc11001100_hook("s.current", window.setTimeout(() => {
          c(!1);
        }, 1e3), "assign");
      }, [t]), "var-init");
      return (0, r.useEffect)(() => () => window.clearTimeout(s.current), []), r.createElement("button", {
        type: cc11001100_hook("type", "button", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", o ? (0, z.I)({
          id: cc11001100_hook("id", "theme.CodeBlock.copied", "object-key-init"),
          message: cc11001100_hook("message", "Copied", "object-key-init"),
          description: cc11001100_hook("description", "The copied button label on code blocks", "object-key-init")
        }) : (0, z.I)({
          id: cc11001100_hook("id", "theme.CodeBlock.copyButtonAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Copy code to clipboard", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for copy code blocks button", "object-key-init")
        }), "object-key-init"),
        title: cc11001100_hook("title", (0, z.I)({
          id: cc11001100_hook("id", "theme.CodeBlock.copy", "object-key-init"),
          message: cc11001100_hook("message", "Copy", "object-key-init"),
          description: cc11001100_hook("description", "The copy button label on code blocks", "object-key-init")
        }), "object-key-init"),
        className: cc11001100_hook("className", (0, a.Z)("clean-btn", n, H.copyButton, o && H.copyButtonCopied), "object-key-init"),
        onClick: cc11001100_hook("onClick", l, "object-key-init")
      }, r.createElement("span", {
        className: cc11001100_hook("className", H.copyButtonIcons, "object-key-init"),
        "aria-hidden": cc11001100_hook("aria-hidden", "true", "object-key-init")
      }, r.createElement(W, {
        className: cc11001100_hook("className", H.copyButtonIcon, "object-key-init")
      }), r.createElement(D, {
        className: cc11001100_hook("className", H.copyButtonSuccessIcon, "object-key-init")
      })));
    }

    function R(e) {
      cc11001100_hook("e", e, "function-parameter");
      return r.createElement("svg", (0, o.Z)({
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, e), r.createElement("path", {
        fill: cc11001100_hook("fill", "currentColor", "object-key-init"),
        d: cc11001100_hook("d", "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z", "object-key-init")
      }));
    }

    var V = cc11001100_hook("V", {
      wordWrapButtonIcon: cc11001100_hook("wordWrapButtonIcon", "wordWrapButtonIcon_HV9T", "object-key-init"),
      wordWrapButtonEnabled: cc11001100_hook("wordWrapButtonEnabled", "wordWrapButtonEnabled_XzR1", "object-key-init")
    }, "var-init");

    function F(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t,
        onClick: n,
        isEnabled: o
      } = cc11001100_hook("", e, "var-init");
      const c = cc11001100_hook("c", (0, z.I)({
        id: cc11001100_hook("id", "theme.CodeBlock.wordWrapToggle", "object-key-init"),
        message: cc11001100_hook("message", "Toggle word wrap", "object-key-init"),
        description: cc11001100_hook("description", "The title attribute for toggle word wrapping button of code block lines", "object-key-init")
      }), "var-init");
      return r.createElement("button", {
        type: cc11001100_hook("type", "button", "object-key-init"),
        onClick: cc11001100_hook("onClick", n, "object-key-init"),
        className: cc11001100_hook("className", (0, a.Z)("clean-btn", t, o && V.wordWrapButtonEnabled), "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", c, "object-key-init"),
        title: cc11001100_hook("title", c, "object-key-init")
      }, r.createElement(R, {
        className: cc11001100_hook("className", V.wordWrapButtonIcon, "object-key-init"),
        "aria-hidden": cc11001100_hook("aria-hidden", "true", "object-key-init")
      }));
    }

    function q(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t;
      let {
        children: n,
        className: c = "",
        metastring: s,
        title: u,
        showLineNumbers: d,
        language: p
      } = cc11001100_hook("", e, "var-init");
      const {
        prism: {
          defaultLanguage: g,
          magicComments: f
        }
      } = cc11001100_hook("", (0, l.L)(), "var-init"),
            y = cc11001100_hook("y", null != (t = cc11001100_hook("t", null != p ? p : function (e) {
        const t = cc11001100_hook("t", e.split(" ").find(e => e.startsWith("language-")), "var-init");
        return null == t ? void 0 : t.replace(/language-/, "");
      }(c), "assign")) ? t : g, "var-init"),
            b = cc11001100_hook("b", i(), "var-init"),
            E = cc11001100_hook("E", function () {
        const [e, t] = cc11001100_hook("", (0, r.useState)(!1), "var-init"),
              [n, o] = cc11001100_hook("", (0, r.useState)(!1), "var-init"),
              c = cc11001100_hook("c", (0, r.useRef)(null), "var-init"),
              a = cc11001100_hook("a", (0, r.useCallback)(() => {
          const n = cc11001100_hook("n", c.current.querySelector("code"), "var-init");
          e ? n.removeAttribute("style") : (n.style.whiteSpace = cc11001100_hook("n.style.whiteSpace", "pre-wrap", "assign"), n.style.overflowWrap = cc11001100_hook("n.style.overflowWrap", "anywhere", "assign")), t(e => !e);
        }, [c, e]), "var-init"),
              s = cc11001100_hook("s", (0, r.useCallback)(() => {
          const {
            scrollWidth: e,
            clientWidth: t
          } = cc11001100_hook("", c.current, "var-init"),
                n = cc11001100_hook("n", e > t || c.current.querySelector("code").hasAttribute("style"), "var-init");
          o(n);
        }, [c]), "var-init");
        return C(c, s), (0, r.useEffect)(() => {
          s();
        }, [e, s]), (0, r.useEffect)(() => (window.addEventListener("resize", s, {
          passive: cc11001100_hook("passive", !0, "object-key-init")
        }), () => {
          window.removeEventListener("resize", s);
        }), [s]), {
          codeBlockRef: cc11001100_hook("codeBlockRef", c, "object-key-init"),
          isEnabled: cc11001100_hook("isEnabled", e, "object-key-init"),
          isCodeScrollable: cc11001100_hook("isCodeScrollable", n, "object-key-init"),
          toggle: cc11001100_hook("toggle", a, "object-key-init")
        };
      }(), "var-init"),
            B = cc11001100_hook("B", function (e) {
        var t, n;
        return null != (t = cc11001100_hook("t", null == e || null == (n = cc11001100_hook("n", e.match(m), "assign")) ? void 0 : n.groups.title, "assign")) ? t : "";
      }(s) || u, "var-init"),
            {
        lineClassNames: N,
        code: L
      } = cc11001100_hook("", h(n, {
        metastring: cc11001100_hook("metastring", s, "object-key-init"),
        language: cc11001100_hook("language", y, "object-key-init"),
        magicComments: cc11001100_hook("magicComments", f, "object-key-init")
      }), "var-init"),
            j = cc11001100_hook("j", null != d ? d : function (e) {
        return Boolean(null == e ? void 0 : e.includes("showLineNumbers"));
      }(s), "var-init");
      return r.createElement(k, {
        as: cc11001100_hook("as", "div", "object-key-init"),
        className: cc11001100_hook("className", (0, a.Z)(c, y && !c.includes("language-" + y) && "language-" + y), "object-key-init")
      }, B && r.createElement("div", {
        className: cc11001100_hook("className", v.codeBlockTitle, "object-key-init")
      }, B), r.createElement("div", {
        className: cc11001100_hook("className", v.codeBlockContent, "object-key-init")
      }, r.createElement(Z, (0, o.Z)({}, w, {
        theme: cc11001100_hook("theme", b, "object-key-init"),
        code: cc11001100_hook("code", L, "object-key-init"),
        language: cc11001100_hook("language", null != y ? y : "text", "object-key-init")
      }), e => {
        let {
          className: t,
          tokens: n,
          getLineProps: o,
          getTokenProps: c
        } = cc11001100_hook("", e, "var-init");
        return r.createElement("pre", {
          tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
          ref: cc11001100_hook("ref", E.codeBlockRef, "object-key-init"),
          className: cc11001100_hook("className", (0, a.Z)(t, v.codeBlock, "thin-scrollbar"), "object-key-init")
        }, r.createElement("code", {
          className: cc11001100_hook("className", (0, a.Z)(v.codeBlockLines, j && v.codeBlockLinesWithNumbering), "object-key-init")
        }, n.map((e, t) => r.createElement(P, {
          key: cc11001100_hook("key", t, "object-key-init"),
          line: cc11001100_hook("line", e, "object-key-init"),
          getLineProps: cc11001100_hook("getLineProps", o, "object-key-init"),
          getTokenProps: cc11001100_hook("getTokenProps", c, "object-key-init"),
          classNames: cc11001100_hook("classNames", N[t], "object-key-init"),
          showLineNumbers: cc11001100_hook("showLineNumbers", j, "object-key-init")
        }))));
      }), r.createElement("div", {
        className: cc11001100_hook("className", v.buttonGroup, "object-key-init")
      }, (E.isEnabled || E.isCodeScrollable) && r.createElement(F, {
        className: cc11001100_hook("className", v.codeButton, "object-key-init"),
        onClick: cc11001100_hook("onClick", () => E.toggle(), "object-key-init"),
        isEnabled: cc11001100_hook("isEnabled", E.isEnabled, "object-key-init")
      }), r.createElement(M, {
        className: cc11001100_hook("className", v.codeButton, "object-key-init"),
        code: cc11001100_hook("code", L, "object-key-init")
      }))));
    }

    function Q(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        ...n
      } = cc11001100_hook("", e, "var-init");
      const a = cc11001100_hook("a", (0, c.Z)(), "var-init"),
            s = cc11001100_hook("s", function (e) {
        return r.Children.toArray(e).some(e => (0, r.isValidElement)(e)) ? e : Array.isArray(e) ? e.join("") : e;
      }(t), "var-init"),
            l = cc11001100_hook("l", "string" == typeof s ? q : E, "var-init");
      return r.createElement(l, (0, o.Z)({
        key: cc11001100_hook("key", String(a), "object-key-init")
      }, n), s);
    }
  },
  6324: function (e, t) {
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t,
          n = cc11001100_hook("n", [], "var-init");

      for (let o of e.split(",").map(e => e.trim())) if (/^-?\d+$/.test(o)) n.push(parseInt(o, 10));else if (t = cc11001100_hook("t", o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/), "assign")) {
        let [e, o, r, c] = cc11001100_hook("", t, "var-init");

        if (o && c) {
          o = cc11001100_hook("o", parseInt(o), "assign"), c = cc11001100_hook("c", parseInt(c), "assign");
          const e = cc11001100_hook("e", o < c ? 1 : -1, "var-init");
          "-" !== r && ".." !== r && "\u2025" !== r || (c += cc11001100_hook("c", e, "assign"));

          for (let t = cc11001100_hook("t", o, "var-init"); t !== c; t += cc11001100_hook("t", e, "assign")) n.push(t);
        }
      }

      return n;
    }

    t.default = cc11001100_hook("t.default", n, "assign"), e.exports = cc11001100_hook("e.exports", n, "assign");
  }
}]);