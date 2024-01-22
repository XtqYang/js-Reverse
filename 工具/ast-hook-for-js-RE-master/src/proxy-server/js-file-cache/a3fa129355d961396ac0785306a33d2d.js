"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[6568], {
  42599: function (e, t, a) {
    a.d(t, {
      Z: function () {
        return u;
      }
    });
    var n = cc11001100_hook("n", a(27378), "var-init"),
        r = cc11001100_hook("r", a(38944), "var-init"),
        l = cc11001100_hook("l", {
      tabItem: cc11001100_hook("tabItem", "tabItem_wHwb", "object-key-init")
    }, "var-init");

    function u(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        hidden: a,
        className: u
      } = cc11001100_hook("", e, "var-init");
      return n.createElement("div", {
        role: cc11001100_hook("role", "tabpanel", "object-key-init"),
        className: cc11001100_hook("className", (0, r.Z)(l.tabItem, u), "object-key-init"),
        hidden: cc11001100_hook("hidden", a, "object-key-init")
      }, t);
    }
  },
  68447: function (e, t, a) {
    a.d(t, {
      Z: function () {
        return N;
      }
    });
    var n = cc11001100_hook("n", a(25773), "var-init"),
        r = cc11001100_hook("r", a(27378), "var-init"),
        l = cc11001100_hook("l", a(38944), "var-init"),
        u = cc11001100_hook("u", a(9169), "var-init"),
        o = cc11001100_hook("o", a(3620), "var-init"),
        p = cc11001100_hook("p", a(78981), "var-init"),
        i = cc11001100_hook("i", a(56), "var-init"),
        s = cc11001100_hook("s", a(18796), "var-init");

    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (e) {
        var t, a;
        return null != (t = cc11001100_hook("t", null == (a = cc11001100_hook("a", r.Children.map(e, e => {
          if (!e || (0, r.isValidElement)(e) && function (e) {
            const {
              props: t
            } = cc11001100_hook("", e, "var-init");
            return !!t && "object" == typeof t && "value" in t;
          }(e)) return e;
          throw new Error("Docusaurus error: Bad <Tabs> child <" + ("string" == typeof e.type ? e.type : e.type.name) + '>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.');
        }), "assign")) ? void 0 : a.filter(Boolean), "assign")) ? t : [];
      }(e).map(e => {
        let {
          props: {
            value: t,
            label: a,
            attributes: n,
            default: r
          }
        } = cc11001100_hook("", e, "var-init");
        return {
          value: cc11001100_hook("value", t, "object-key-init"),
          label: cc11001100_hook("label", a, "object-key-init"),
          attributes: cc11001100_hook("attributes", n, "object-key-init"),
          default: cc11001100_hook("default", r, "object-key-init")
        };
      });
    }

    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        values: t,
        children: a
      } = cc11001100_hook("", e, "var-init");
      return (0, r.useMemo)(() => {
        const e = cc11001100_hook("e", null != t ? t : c(a), "var-init");
        return function (e) {
          const t = cc11001100_hook("t", (0, i.l)(e, (e, t) => e.value === t.value), "var-init");
          if (t.length > 0) throw new Error('Docusaurus error: Duplicate values "' + t.map(e => e.value).join(", ") + '" found in <Tabs>. Every value needs to be unique.');
        }(e), e;
      }, [t, a]);
    }

    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        value: t,
        tabValues: a
      } = cc11001100_hook("", e, "var-init");
      return a.some(e => e.value === t);
    }

    function b(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        queryString: t = !1,
        groupId: a
      } = cc11001100_hook("", e, "var-init");
      const n = cc11001100_hook("n", (0, o.k6)(), "var-init"),
            l = cc11001100_hook("l", function (e) {
        let {
          queryString: t = !1,
          groupId: a
        } = cc11001100_hook("", e, "var-init");
        if ("string" == typeof t) return t;
        if (!1 === t) return null;
        if (!0 === t && !a) throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');
        return null != a ? a : null;
      }({
        queryString: cc11001100_hook("queryString", t, "object-key-init"),
        groupId: cc11001100_hook("groupId", a, "object-key-init")
      }), "var-init");
      return [(0, p._X)(l), (0, r.useCallback)(e => {
        if (!l) return;
        const t = cc11001100_hook("t", new URLSearchParams(n.location.search), "var-init");
        t.set(l, e), n.replace({ ...n.location,
          search: t.toString()
        });
      }, [l, n])];
    }

    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        defaultValue: t,
        queryString: a = !1,
        groupId: n
      } = cc11001100_hook("", e, "var-init"),
            l = cc11001100_hook("l", m(e), "var-init"),
            [u, o] = cc11001100_hook("", (0, r.useState)(() => function (e) {
        var t;
        let {
          defaultValue: a,
          tabValues: n
        } = cc11001100_hook("", e, "var-init");
        if (0 === n.length) throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");

        if (a) {
          if (!d({
            value: cc11001100_hook("value", a, "object-key-init"),
            tabValues: cc11001100_hook("tabValues", n, "object-key-init")
          })) throw new Error('Docusaurus error: The <Tabs> has a defaultValue "' + a + '" but none of its children has the corresponding value. Available values are: ' + n.map(e => e.value).join(", ") + ". If you intend to show no default tab, use defaultValue={null} instead.");
          return a;
        }

        const r = cc11001100_hook("r", null != (t = cc11001100_hook("t", n.find(e => e.default), "assign")) ? t : n[0], "var-init");
        if (!r) throw new Error("Unexpected error: 0 tabValues");
        return r.value;
      }({
        defaultValue: cc11001100_hook("defaultValue", t, "object-key-init"),
        tabValues: cc11001100_hook("tabValues", l, "object-key-init")
      })), "var-init"),
            [p, i] = cc11001100_hook("", b({
        queryString: cc11001100_hook("queryString", a, "object-key-init"),
        groupId: cc11001100_hook("groupId", n, "object-key-init")
      }), "var-init"),
            [c, f] = cc11001100_hook("", function (e) {
        let {
          groupId: t
        } = cc11001100_hook("", e, "var-init");
        const a = cc11001100_hook("a", function (e) {
          return e ? "docusaurus.tab." + e : null;
        }(t), "var-init"),
              [n, l] = cc11001100_hook("", (0, s.Nk)(a), "var-init");
        return [n, (0, r.useCallback)(e => {
          a && l.set(e);
        }, [a, l])];
      }({
        groupId: cc11001100_hook("groupId", n, "object-key-init")
      }), "var-init"),
            v = cc11001100_hook("v", (() => {
        const e = cc11001100_hook("e", null != p ? p : c, "var-init");
        return d({
          value: cc11001100_hook("value", e, "object-key-init"),
          tabValues: cc11001100_hook("tabValues", l, "object-key-init")
        }) ? e : null;
      })(), "var-init");
      (0, r.useLayoutEffect)(() => {
        v && o(v);
      }, [v]);
      return {
        selectedValue: cc11001100_hook("selectedValue", u, "object-key-init"),
        selectValue: cc11001100_hook("selectValue", (0, r.useCallback)(e => {
          if (!d({
            value: cc11001100_hook("value", e, "object-key-init"),
            tabValues: cc11001100_hook("tabValues", l, "object-key-init")
          })) throw new Error("Can't select invalid tab value=" + e);
          o(e), i(e), f(e);
        }, [i, f, l]), "object-key-init"),
        tabValues: cc11001100_hook("tabValues", l, "object-key-init")
      };
    }

    var v = cc11001100_hook("v", a(90362), "var-init"),
        k = cc11001100_hook("k", {
      tabList: cc11001100_hook("tabList", "tabList_J5MA", "object-key-init"),
      tabItem: cc11001100_hook("tabItem", "tabItem_l0OV", "object-key-init")
    }, "var-init");

    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t,
        block: a,
        selectedValue: o,
        selectValue: p,
        tabValues: i
      } = cc11001100_hook("", e, "var-init");
      const s = cc11001100_hook("s", [], "var-init"),
            {
        blockElementScrollPositionUntilNextRender: c
      } = cc11001100_hook("", (0, u.o5)(), "var-init"),
            m = cc11001100_hook("m", e => {
        const t = cc11001100_hook("t", e.currentTarget, "var-init"),
              a = cc11001100_hook("a", s.indexOf(t), "var-init"),
              n = cc11001100_hook("n", i[a].value, "var-init");
        n !== o && (c(t), p(n));
      }, "var-init"),
            d = cc11001100_hook("d", e => {
        var t;
        let a = cc11001100_hook("a", null, "var-init");

        switch (e.key) {
          case "Enter":
            m(e);
            break;

          case "ArrowRight":
            {
              var n;
              const t = cc11001100_hook("t", s.indexOf(e.currentTarget) + 1, "var-init");
              a = cc11001100_hook("a", null != (n = cc11001100_hook("n", s[t], "assign")) ? n : s[0], "assign");
              break;
            }

          case "ArrowLeft":
            {
              var r;
              const t = cc11001100_hook("t", s.indexOf(e.currentTarget) - 1, "var-init");
              a = cc11001100_hook("a", null != (r = cc11001100_hook("r", s[t], "assign")) ? r : s[s.length - 1], "assign");
              break;
            }
        }

        null == (t = cc11001100_hook("t", a, "assign")) || t.focus();
      }, "var-init");
      return r.createElement("ul", {
        role: cc11001100_hook("role", "tablist", "object-key-init"),
        "aria-orientation": cc11001100_hook("aria-orientation", "horizontal", "object-key-init"),
        className: cc11001100_hook("className", (0, l.Z)("tabs", {
          "tabs--block": cc11001100_hook("tabs--block", a, "object-key-init")
        }, t), "object-key-init")
      }, i.map(e => {
        let {
          value: t,
          label: a,
          attributes: u
        } = cc11001100_hook("", e, "var-init");
        return r.createElement("li", (0, n.Z)({
          role: cc11001100_hook("role", "tab", "object-key-init"),
          tabIndex: cc11001100_hook("tabIndex", o === t ? 0 : -1, "object-key-init"),
          "aria-selected": cc11001100_hook("aria-selected", o === t, "object-key-init"),
          key: cc11001100_hook("key", t, "object-key-init"),
          ref: cc11001100_hook("ref", e => s.push(e), "object-key-init"),
          onKeyDown: cc11001100_hook("onKeyDown", d, "object-key-init"),
          onClick: cc11001100_hook("onClick", m, "object-key-init")
        }, u, {
          className: cc11001100_hook("className", (0, l.Z)("tabs__item", k.tabItem, null == u ? void 0 : u.className, {
            "tabs__item--active": cc11001100_hook("tabs__item--active", o === t, "object-key-init")
          }), "object-key-init")
        }), null != a ? a : t);
      }));
    }

    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        lazy: t,
        children: a,
        selectedValue: n
      } = cc11001100_hook("", e, "var-init");
      const l = cc11001100_hook("l", (Array.isArray(a) ? a : [a]).filter(Boolean), "var-init");

      if (t) {
        const e = cc11001100_hook("e", l.find(e => e.props.value === n), "var-init");
        return e ? (0, r.cloneElement)(e, {
          className: cc11001100_hook("className", "margin-top--md", "object-key-init")
        }) : null;
      }

      return r.createElement("div", {
        className: cc11001100_hook("className", "margin-top--md", "object-key-init")
      }, l.map((e, t) => (0, r.cloneElement)(e, {
        key: cc11001100_hook("key", t, "object-key-init"),
        hidden: cc11001100_hook("hidden", e.props.value !== n, "object-key-init")
      })));
    }

    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", f(e), "var-init");
      return r.createElement("div", {
        className: cc11001100_hook("className", (0, l.Z)("tabs-container", k.tabList), "object-key-init")
      }, r.createElement(g, (0, n.Z)({}, e, t)), r.createElement(h, (0, n.Z)({}, e, t)));
    }

    function N(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", (0, v.Z)(), "var-init");
      return r.createElement(y, (0, n.Z)({
        key: cc11001100_hook("key", String(t), "object-key-init")
      }, e));
    }
  },
  70041: function (e, t, a) {
    a.r(t), a.d(t, {
      assets: function () {
        return s;
      },
      contentTitle: function () {
        return p;
      },
      default: function () {
        return b;
      },
      frontMatter: function () {
        return o;
      },
      metadata: function () {
        return i;
      },
      toc: function () {
        return c;
      }
    });
    var n = cc11001100_hook("n", a(25773), "var-init"),
        r = cc11001100_hook("r", (a(27378), a(35318)), "var-init"),
        l = cc11001100_hook("l", a(68447), "var-init"),
        u = cc11001100_hook("u", a(42599), "var-init");
    const o = cc11001100_hook("o", {
      id: cc11001100_hook("id", "index", "object-key-init"),
      title: cc11001100_hook("title", "Babel \u662f\u4ec0\u4e48\uff1f", "object-key-init")
    }, "var-init"),
          p = cc11001100_hook("p", void 0, "var-init"),
          i = cc11001100_hook("i", {
      unversionedId: cc11001100_hook("unversionedId", "index", "object-key-init"),
      id: cc11001100_hook("id", "index", "object-key-init"),
      title: cc11001100_hook("title", "Babel \u662f\u4ec0\u4e48\uff1f", "object-key-init"),
      description: cc11001100_hook("description", "Babel \u662f\u4e00\u4e2a JavaScript \u7f16\u8bd1\u5668", "object-key-init"),
      source: cc11001100_hook("source", "@site/../docs/index.md", "object-key-init"),
      sourceDirName: cc11001100_hook("sourceDirName", ".", "object-key-init"),
      slug: cc11001100_hook("slug", "/", "object-key-init"),
      permalink: cc11001100_hook("permalink", "/docs/", "object-key-init"),
      draft: cc11001100_hook("draft", !1, "object-key-init"),
      editUrl: cc11001100_hook("editUrl", "https://github.com/babel/website/edit/main/docs/../docs/index.md", "object-key-init"),
      tags: cc11001100_hook("tags", [], "object-key-init"),
      version: cc11001100_hook("version", "current", "object-key-init"),
      frontMatter: {
        id: cc11001100_hook("id", "index", "object-key-init"),
        title: cc11001100_hook("title", "Babel \u662f\u4ec0\u4e48\uff1f", "object-key-init")
      },
      sidebar: cc11001100_hook("sidebar", "docs", "object-key-init"),
      next: {
        title: cc11001100_hook("title", "\u4f7f\u7528\u6307\u5357", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/docs/usage", "object-key-init")
      }
    }, "var-init"),
          s = cc11001100_hook("s", {}, "var-init"),
          c = cc11001100_hook("c", [{
      value: cc11001100_hook("value", "Babel \u662f\u4e00\u4e2a JavaScript \u7f16\u8bd1\u5668", "object-key-init"),
      id: cc11001100_hook("id", "babel-\u662f\u4e00\u4e2a-javascript-\u7f16\u8bd1\u5668", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "ES2015 \u53ca\u66f4\u65b0\u7248\u672c", "object-key-init"),
      id: cc11001100_hook("id", "es2015-\u53ca\u66f4\u65b0\u7248\u672c", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "JSX \u4e0e React", "object-key-init"),
      id: cc11001100_hook("id", "jsx-\u4e0e-react", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "\u7c7b\u578b\u6ce8\u91ca (Flow \u548c TypeScript)", "object-key-init"),
      id: cc11001100_hook("id", "\u7c7b\u578b\u6ce8\u91ca-flow-\u548c-typescript", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "\u63d2\u4ef6\u5316", "object-key-init"),
      id: cc11001100_hook("id", "\u63d2\u4ef6\u5316", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "\u53ef\u8c03\u8bd5", "object-key-init"),
      id: cc11001100_hook("id", "\u53ef\u8c03\u8bd5", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "\u7b26\u5408\u89c4\u8303", "object-key-init"),
      id: cc11001100_hook("id", "\u7b26\u5408\u89c4\u8303", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }, {
      value: cc11001100_hook("value", "\u4ee3\u7801\u7d27\u51d1", "object-key-init"),
      id: cc11001100_hook("id", "\u4ee3\u7801\u7d27\u51d1", "object-key-init"),
      level: cc11001100_hook("level", 2, "object-key-init")
    }], "var-init"),
          m = cc11001100_hook("m", {
      toc: cc11001100_hook("toc", c, "object-key-init")
    }, "var-init"),
          d = cc11001100_hook("d", "wrapper", "var-init");

    function b(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        components: t,
        ...a
      } = cc11001100_hook("", e, "var-init");
      return (0, r.kt)(d, (0, n.Z)({}, m, a, {
        components: cc11001100_hook("components", t, "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "MDXLayout", "object-key-init")
      }), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "babel-\u662f\u4e00\u4e2a-javascript-\u7f16\u8bd1\u5668", "object-key-init")
      }, "Babel \u662f\u4e00\u4e2a JavaScript \u7f16\u8bd1\u5668"), (0, r.kt)("p", null, "Babel \u662f\u4e00\u4e2a\u5de5\u5177\u94fe\uff0c\u4e3b\u8981\u7528\u4e8e\u5c06\u91c7\u7528 ECMAScript 2015+ \u8bed\u6cd5\u7f16\u5199\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a\u5411\u540e\u517c\u5bb9\u7684 JavaScript \u8bed\u6cd5\uff0c\u4ee5\u4fbf\u80fd\u591f\u8fd0\u884c\u5728\u5f53\u524d\u548c\u65e7\u7248\u672c\u7684\u6d4f\u89c8\u5668\u6216\u5176\u4ed6\u73af\u5883\u4e2d\u3002\u4e0b\u9762\u5217\u51fa\u7684\u662f Babel \u80fd\u4e3a\u4f60\u505a\u7684\u4e8b\u60c5\uff1a"), (0, r.kt)("ul", null, (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, "\u8bed\u6cd5\u8f6c\u6362"), (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, "\u901a\u8fc7 Polyfill \u65b9\u5f0f\u5728\u76ee\u6807\u73af\u5883\u4e2d\u6dfb\u52a0\u7f3a\u5931\u7684\u529f\u80fd\uff08\u901a\u8fc7\u5f15\u5165\u7b2c\u4e09\u65b9 polyfill \u6a21\u5757\uff0c\u4f8b\u5982 ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/zloirock/core-js", "object-key-init")
      }, "core-js"), "\uff09"), (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, "\u6e90\u7801\u8f6c\u6362\uff08codemods\uff09"), (0, r.kt)("li", {
        parentName: cc11001100_hook("parentName", "ul", "object-key-init")
      }, "\u66f4\u591a\u53c2\u8003\u8d44\u6599\uff01\uff08\u8bf7\u67e5\u770b\u8fd9\u4e9b ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "li", "object-key-init"),
        href: cc11001100_hook("href", "/videos", "object-key-init")
      }, "\u89c6\u9891"), " \u4ee5\u83b7\u5f97\u542f\u53d1\uff09")), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, "// Babel \u63a5\u6536\u5230\u7684\u8f93\u5165\u662f\uff1a ES2015 \u7bad\u5934\u51fd\u6570\n[1, 2, 3].map(n => n + 1);\n\n// Babel \u8f93\u51fa\uff1a ES5 \u8bed\u6cd5\u5b9e\u73b0\u7684\u540c\u7b49\u529f\u80fd\n[1, 2, 3].map(function(n) {\n  return n + 1;\n});\n")), (0, r.kt)("admonition", {
        type: cc11001100_hook("type", "tip", "object-key-init")
      }, (0, r.kt)("p", {
        parentName: cc11001100_hook("parentName", "admonition", "object-key-init")
      }, "\u6709\u5173\u7f16\u8bd1\u5668\u7684\u7cbe\u5f69\u6559\u7a0b\uff0c\u8bf7\u67e5\u770b ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/thejameskyle/the-super-tiny-compiler", "object-key-init")
      }, "the-super-tiny-compiler"), " \u9879\u76ee\uff0c\u5b83\u8fd8\u9ad8\u5c4b\u5efa\u74f4\u5730\u89e3\u91ca\u4e86 Babel \u7684\u5de5\u4f5c\u65b9\u5f0f\u3002")), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "es2015-\u53ca\u66f4\u65b0\u7248\u672c", "object-key-init")
      }, "ES2015 \u53ca\u66f4\u65b0\u7248\u672c"), (0, r.kt)("p", null, "Babel \u901a\u8fc7\u8bed\u6cd5\u8f6c\u6362\u5668\u6765\u652f\u6301\u65b0\u7248\u672c\u7684 JavaScript \u8bed\u6cd5\u3002"), (0, r.kt)("p", null, "\u8fd9\u4e9b ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/plugins", "object-key-init")
      }, "\u63d2\u4ef6"), " \u8ba9\u4f60", (0, r.kt)("strong", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "\u73b0\u5728"), "\u5c31\u80fd\u4f7f\u7528\u65b0\u7684\u8bed\u6cd5\uff0c\u65e0\u9700\u7b49\u5f85\u6d4f\u89c8\u5668\u7684\u652f\u6301\u3002\u67e5\u770b ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/usage", "object-key-init")
      }, "\u4f7f\u7528\u6307\u5357"), " \u5f00\u59cb\u5165\u95e8\u5427\u3002"), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "jsx-\u4e0e-react", "object-key-init")
      }, "JSX \u4e0e React"), (0, r.kt)("p", null, "Babel \u80fd\u591f\u8f6c\u6362 JSX \u8bed\u6cd5\uff01\u67e5\u770b ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/babel-preset-react", "object-key-init")
      }, "React preset"), " \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\u901a\u8fc7\u548c ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel-sublime", "object-key-init")
      }, "babel-sublime"), " \u4e00\u8d77\u4f7f\u7528\u8fd8\u53ef\u4ee5\u628a\u8bed\u6cd5\u9ad8\u4eae\u7684\u529f\u80fd\u63d0\u5347\u5230\u4e00\u4e2a\u65b0\u7684\u6c34\u5e73\u3002"), (0, r.kt)("p", null, "\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6b64 preset"), (0, r.kt)(l.Z, {
        groupId: cc11001100_hook("groupId", "npm2yarn", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "Tabs", "object-key-init")
      }, (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "npm", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "npm install --save-dev @babel/preset-react\n"))), (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "yarn", "object-key-init"),
        label: cc11001100_hook("label", "Yarn", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "yarn add --dev @babel/preset-react\n"))), (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "pnpm", "object-key-init"),
        label: cc11001100_hook("label", "pnpm", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "pnpm add --save-dev @babel/preset-react\n")))), (0, r.kt)("p", null, "\u5e76\u5c06 ", (0, r.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/preset-react"), " \u6dfb\u52a0\u5230\u4f60\u7684 Babel \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-jsx", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JSX"', "object-key-init"),
        title: cc11001100_hook("title", '"JSX"', "object-key-init")
      }, "export default function DiceRoll(){\n  const getRandomNumber = () => {\n    return Math.ceil(Math.random() * 6);\n  };\n\n  const [num, setNum] = useState(getRandomNumber());\n\n  const handleClick = () => {\n    const newNum = getRandomNumber();\n    setNum(newNum);\n  };\n\n  return (\n    <div>\n      Your dice roll: {num}.\n      <button onClick={handleClick}>Click to get a new number</button>\n    </div>\n  );\n};\n")), (0, r.kt)("admonition", {
        type: cc11001100_hook("type", "tip", "object-key-init")
      }, (0, r.kt)("p", {
        parentName: cc11001100_hook("parentName", "admonition", "object-key-init")
      }, "\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://facebook.github.io/jsx/", "object-key-init")
      }, "JSX"), " \u7684\u4fe1\u606f\u3002")), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "\u7c7b\u578b\u6ce8\u91ca-flow-\u548c-typescript", "object-key-init")
      }, "\u7c7b\u578b\u6ce8\u91ca (Flow \u548c TypeScript)"), (0, r.kt)("p", null, "Babel \u53ef\u4ee5\u5220\u9664\u7c7b\u578b\u6ce8\u91ca\uff01\u67e5\u770b ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/babel-preset-flow", "object-key-init")
      }, "Flow preset"), " \u6216 ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/babel-preset-typescript", "object-key-init")
      }, "TypeScript preset"), " \u4e86\u89e3\u5982\u4f55\u4f7f\u7528\u3002\u52a1\u5fc5\u7262\u8bb0 ", (0, r.kt)("strong", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "Babel \u4e0d\u505a\u7c7b\u578b\u68c0\u67e5"), "\uff0c\u4f60\u4ecd\u7136\u9700\u8981\u5b89\u88c5 Flow \u6216 TypeScript \u6765\u6267\u884c\u7c7b\u578b\u68c0\u67e5\u7684\u5de5\u4f5c\u3002"), (0, r.kt)("p", null, "\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 flow preset"), (0, r.kt)(l.Z, {
        groupId: cc11001100_hook("groupId", "npm2yarn", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "Tabs", "object-key-init")
      }, (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "npm", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "npm install --save-dev @babel/preset-flow\n"))), (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "yarn", "object-key-init"),
        label: cc11001100_hook("label", "Yarn", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "yarn add --dev @babel/preset-flow\n"))), (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "pnpm", "object-key-init"),
        label: cc11001100_hook("label", "pnpm", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "pnpm add --save-dev @babel/preset-flow\n")))), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, "// @flow\nfunction square(n: number): number {\n  return n * n;\n}\n")), (0, r.kt)("p", null, "\u6216\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 typescript preset"), (0, r.kt)(l.Z, {
        groupId: cc11001100_hook("groupId", "npm2yarn", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "Tabs", "object-key-init")
      }, (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "npm", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "npm install --save-dev @babel/preset-typescript\n"))), (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "yarn", "object-key-init"),
        label: cc11001100_hook("label", "Yarn", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "yarn add --dev @babel/preset-typescript\n"))), (0, r.kt)(u.Z, {
        value: cc11001100_hook("value", "pnpm", "object-key-init"),
        label: cc11001100_hook("label", "pnpm", "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "TabItem", "object-key-init")
      }, (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-shell", "object-key-init")
      }, "pnpm add --save-dev @babel/preset-typescript\n")))), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-js", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="JavaScript"', "object-key-init"),
        title: cc11001100_hook("title", '"JavaScript"', "object-key-init")
      }, "function Greeter(greeting: string) {\n  this.greeting = greeting;\n}\n")), (0, r.kt)("admonition", {
        type: cc11001100_hook("type", "tip", "object-key-init")
      }, (0, r.kt)("p", {
        parentName: cc11001100_hook("parentName", "admonition", "object-key-init")
      }, "\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://flow.org/", "object-key-init")
      }, "Flow"), " \u548c ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://www.typescriptlang.org/", "object-key-init")
      }, "TypeScript"), " \u7684\u4fe1\u606f\uff01")), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "\u63d2\u4ef6\u5316", "object-key-init")
      }, "\u63d2\u4ef6\u5316"), (0, r.kt)("p", null, "Babel \u6784\u5efa\u5728\u63d2\u4ef6\u4e4b\u4e0a\u3002\u4f7f\u7528\u73b0\u6709\u7684\u6216\u8005\u81ea\u5df1\u7f16\u5199\u7684\u63d2\u4ef6\u53ef\u4ee5\u7ec4\u6210\u4e00\u4e2a\u8f6c\u6362\u7ba1\u9053\u3002\u901a\u8fc7\u4f7f\u7528\u6216\u521b\u5efa\u4e00\u4e2a ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/plugins#presets", "object-key-init")
      }, "preset"), " \u5373\u53ef\u8f7b\u677e\u4f7f\u7528\u4e00\u7ec4\u63d2\u4ef6\u3002 ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/plugins", "object-key-init")
      }, "\u4e86\u89e3\u66f4\u591a \u2192")), (0, r.kt)("p", null, "\u5229\u7528 ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://astexplorer.net/#/KJ8AjD6maa", "object-key-init")
      }, "astexplorer.net"), " \u53ef\u4ee5\u7acb\u5373\u521b\u5efa\u4e00\u4e2a\u63d2\u4ef6\uff0c\u6216\u8005\u4f7f\u7528 ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/generator-babel-plugin", "object-key-init")
      }, "generator-babel-plugin"), " \u751f\u6210\u4e00\u4e2a\u63d2\u4ef6\u6a21\u677f\u3002"), (0, r.kt)("pre", null, (0, r.kt)("code", {
        parentName: cc11001100_hook("parentName", "pre", "object-key-init"),
        className: cc11001100_hook("className", "language-javascript", "object-key-init"),
        metastring: cc11001100_hook("metastring", 'title="example-babel-plugin.js"', "object-key-init"),
        title: cc11001100_hook("title", '"example-babel-plugin.js"', "object-key-init")
      }, '// \u4e00\u4e2a\u63d2\u4ef6\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\nexport default function({ types: t }) {\n  return {\n    visitor: {\n      Identifier(path) {\n        let name = path.node.name; // \u53cd\u8f6c\u5b57\u7b26\u4e32\uff1a JavaScript -> tpircSavaJ\n        path.node.name = [...name]\n          .reverse()\n          .join("");\n      },\n    },\n  };\n}\n')), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "\u53ef\u8c03\u8bd5", "object-key-init")
      }, "\u53ef\u8c03\u8bd5"), (0, r.kt)("p", null, "\u7531\u4e8e Babel \u652f\u6301 ", (0, r.kt)("strong", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "Source map"), "\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u8f7b\u677e\u8c03\u8bd5\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u3002"), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "\u7b26\u5408\u89c4\u8303", "object-key-init")
      }, "\u7b26\u5408\u89c4\u8303"), (0, r.kt)("p", null, "Babel \u5c3d\u6700\u5927\u53ef\u80fd\u9075\u5faa ECMAScript \u6807\u51c6\u3002\u4e0d\u8fc7\uff0cBabel \u8fd8\u63d0\u4f9b\u4e86\u7279\u5b9a\u7684\u9009\u9879\u6765\u5bf9\u6807\u51c6\u548c\u6027\u80fd\u505a\u6743\u8861\u3002"), (0, r.kt)("h2", {
        id: cc11001100_hook("id", "\u4ee3\u7801\u7d27\u51d1", "object-key-init")
      }, "\u4ee3\u7801\u7d27\u51d1"), (0, r.kt)("p", null, "Babel \u5c3d\u53ef\u80fd\u7528\u6700\u5c11\u7684\u4ee3\u7801\u5e76\u4e14\u4e0d\u4f9d\u8d56\u592a\u5927\u91cf\u7684\u8fd0\u884c\u73af\u5883\u3002"), (0, r.kt)("p", null, "\u6709\u4e9b\u60c5\u51b5\u662f\u5f88\u96be\u8fbe\u6210\u7684\u8fd9\u4e00\u613f\u671b\u7684\uff0c\u56e0\u6b64 Babel \u63d0\u4f9b\u4e86 ", (0, r.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "/docs/assumptions", "object-key-init")
      }, '"assumptions"'), " \u9009\u9879\uff0c\u7528\u4ee5\u5728\u7b26\u5408\u89c4\u8303\u3001\u6587\u4ef6\u5927\u5c0f\u548c\u7f16\u8bd1\u901f\u5ea6\u4e4b\u95f4\u505a\u6298\u4e2d\u3002"));
    }

    b.isMDXComponent = cc11001100_hook("b.isMDXComponent", !0, "assign");
  },
  35318: function (e, t, a) {
    a.d(t, {
      Zo: function () {
        return s;
      },
      kt: function () {
        return b;
      }
    });
    var n = cc11001100_hook("n", a(27378), "var-init");

    function r(e, t, a) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", a, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", a, "assign"), e;
    }

    function l(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var a = cc11001100_hook("a", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), a.push.apply(a, n);
      }

      return a;
    }

    function u(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var a = cc11001100_hook("a", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? l(Object(a), !0).forEach(function (t) {
          r(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }

      return e;
    }

    function o(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var a,
          n,
          r = cc11001100_hook("r", function (e, t) {
        if (null == e) return {};
        var a,
            n,
            r = cc11001100_hook("r", {}, "var-init"),
            l = cc11001100_hook("l", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < l.length; n++) a = cc11001100_hook("a", l[n], "assign"), t.indexOf(a) >= 0 || (r[a] = cc11001100_hook("r[a]", e[a], "assign"));

        return r;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var l = cc11001100_hook("l", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < l.length; n++) a = cc11001100_hook("a", l[n], "assign"), t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = cc11001100_hook("r[a]", e[a], "assign"));
      }

      return r;
    }

    var p = cc11001100_hook("p", n.createContext({}), "var-init"),
        i = function (e) {
      var t = cc11001100_hook("t", n.useContext(p), "var-init"),
          a = cc11001100_hook("a", t, "var-init");
      return e && (a = cc11001100_hook("a", "function" == typeof e ? e(t) : u(u({}, t), e), "assign")), a;
    },
        s = function (e) {
      var t = cc11001100_hook("t", i(e.components), "var-init");
      return n.createElement(p.Provider, {
        value: cc11001100_hook("value", t, "object-key-init")
      }, e.children);
    },
        c = cc11001100_hook("c", "mdxType", "var-init"),
        m = cc11001100_hook("m", {
      inlineCode: cc11001100_hook("inlineCode", "code", "object-key-init"),
      wrapper: function (e) {
        var t = cc11001100_hook("t", e.children, "var-init");
        return n.createElement(n.Fragment, {}, t);
      }
    }, "var-init"),
        d = cc11001100_hook("d", n.forwardRef(function (e, t) {
      var a = cc11001100_hook("a", e.components, "var-init"),
          r = cc11001100_hook("r", e.mdxType, "var-init"),
          l = cc11001100_hook("l", e.originalType, "var-init"),
          p = cc11001100_hook("p", e.parentName, "var-init"),
          s = cc11001100_hook("s", o(e, ["components", "mdxType", "originalType", "parentName"]), "var-init"),
          c = cc11001100_hook("c", i(a), "var-init"),
          d = cc11001100_hook("d", r, "var-init"),
          b = cc11001100_hook("b", c["".concat(p, ".").concat(d)] || c[d] || m[d] || l, "var-init");
      return a ? n.createElement(b, u(u({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, s), {}, {
        components: cc11001100_hook("components", a, "object-key-init")
      })) : n.createElement(b, u({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, s));
    }), "var-init");

    function b(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var a = cc11001100_hook("a", arguments, "var-init"),
          r = cc11001100_hook("r", t && t.mdxType, "var-init");

      if ("string" == typeof e || r) {
        var l = cc11001100_hook("l", a.length, "var-init"),
            u = cc11001100_hook("u", new Array(l), "var-init");
        u[0] = cc11001100_hook("u[0]", d, "assign");
        var o = cc11001100_hook("o", {}, "var-init");

        for (var p in t) hasOwnProperty.call(t, p) && (o[p] = cc11001100_hook("o[p]", t[p], "assign"));

        o.originalType = cc11001100_hook("o.originalType", e, "assign"), o[c] = cc11001100_hook("o[c]", "string" == typeof e ? e : r, "assign"), u[1] = cc11001100_hook("u[1]", o, "assign");

        for (var i = cc11001100_hook("i", 2, "var-init"); i < l; i++) u[i] = cc11001100_hook("u[i]", a[i], "assign");

        return n.createElement.apply(null, u);
      }

      return n.createElement.apply(null, a);
    }

    d.displayName = cc11001100_hook("d.displayName", "MDXCreateElement", "assign");
  }
}]);