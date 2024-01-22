"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[119], {
  12837: function (e, t, r) {
    r.r(t), r.d(t, {
      assets: function () {
        return s;
      },
      contentTitle: function () {
        return p;
      },
      default: function () {
        return m;
      },
      frontMatter: function () {
        return o;
      },
      metadata: function () {
        return i;
      },
      toc: function () {
        return l;
      }
    });
    var n = cc11001100_hook("n", r(25773), "var-init"),
        a = cc11001100_hook("a", (r(27378), r(35318)), "var-init");
    const o = cc11001100_hook("o", {
      layout: cc11001100_hook("layout", "post", "object-key-init"),
      title: cc11001100_hook("title", "7.22.0 Released: Explicit Resource Management support and Import Attributes parsing", "object-key-init"),
      author: cc11001100_hook("author", "Babel Team", "object-key-init"),
      authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
      date: cc11001100_hook("date", new Date("2023-05-26T00:00:00.000Z"), "object-key-init"),
      categories: cc11001100_hook("categories", "announcements", "object-key-init"),
      share_text: cc11001100_hook("share_text", "Babel 7.22.0 Released", "object-key-init")
    }, "var-init"),
          p = cc11001100_hook("p", void 0, "var-init"),
          i = cc11001100_hook("i", {
      permalink: cc11001100_hook("permalink", "/blog/2023/05/26/7.22.0", "object-key-init"),
      source: cc11001100_hook("source", "@site/blog/2023-05-26-7.22.0.md", "object-key-init"),
      title: cc11001100_hook("title", "7.22.0 Released: Explicit Resource Management support and Import Attributes parsing", "object-key-init"),
      description: cc11001100_hook("description", "Babel 7.22.0 is out, with parsing/transform support for the Explicit Resource Management proposal, including both the sync and async variants, and with parsing support for the Import Attributes (an evolution of the old Import Assertions proposal).", "object-key-init"),
      date: cc11001100_hook("date", "2023-05-26T00:00:00.000Z", "object-key-init"),
      formattedDate: cc11001100_hook("formattedDate", "2023\u5e745\u670826\u65e5", "object-key-init"),
      tags: cc11001100_hook("tags", [], "object-key-init"),
      readingTime: cc11001100_hook("readingTime", 5.045, "object-key-init"),
      hasTruncateMarker: cc11001100_hook("hasTruncateMarker", !0, "object-key-init"),
      authors: cc11001100_hook("authors", [{
        name: cc11001100_hook("name", "Babel Team", "object-key-init"),
        url: cc11001100_hook("url", "https://twitter.com/babeljs", "object-key-init")
      }], "object-key-init"),
      frontMatter: {
        layout: cc11001100_hook("layout", "post", "object-key-init"),
        title: cc11001100_hook("title", "7.22.0 Released: Explicit Resource Management support and Import Attributes parsing", "object-key-init"),
        author: cc11001100_hook("author", "Babel Team", "object-key-init"),
        authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
        date: cc11001100_hook("date", "2023-05-26T00:00:00.000Z", "object-key-init"),
        categories: cc11001100_hook("categories", "announcements", "object-key-init"),
        share_text: cc11001100_hook("share_text", "Babel 7.22.0 Released", "object-key-init")
      },
      nextItem: {
        title: cc11001100_hook("title", "7.21.0 Released: Inline RegExp modifiers, TypeScript 5.0, and Decorators updates", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2023/02/20/7.21.0", "object-key-init")
      }
    }, "var-init"),
          s = cc11001100_hook("s", {
      authorsImageUrls: cc11001100_hook("authorsImageUrls", [void 0], "object-key-init")
    }, "var-init"),
          l = cc11001100_hook("l", [], "var-init"),
          c = cc11001100_hook("c", {
      toc: cc11001100_hook("toc", l, "object-key-init")
    }, "var-init"),
          u = cc11001100_hook("u", "wrapper", "var-init");

    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        components: t,
        ...r
      } = cc11001100_hook("", e, "var-init");
      return (0, a.kt)(u, (0, n.Z)({}, c, r, {
        components: cc11001100_hook("components", t, "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "MDXLayout", "object-key-init")
      }), (0, a.kt)("p", null, "Babel 7.22.0 is out, with parsing/transform support for the ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-explicit-resource-management", "object-key-init")
      }, "Explicit Resource Management"), " proposal, including both the sync and async variants, and with parsing support for the ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-import-attributes", "object-key-init")
      }, "Import Attributes"), " (an evolution of the old ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "http://web.archive.org/web/20220930084518/https://github.com/tc39/proposal-import-assertions", "object-key-init")
      }, "Import Assertions"), " proposal)."), (0, a.kt)("p", null, "We also updated our implementation of ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-decorators/", "object-key-init")
      }, "decorators"), " following some changes in the proposal, and added support for the TypeScript ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "import ... ="), " and ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "export ... ="), " statements."), (0, a.kt)("p", null, (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/preset-env"), " now includes transform support for the ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "v"), " regular expressions flag, which was recently approved as part of the ECMAScript standard, by default. Lastly, we renamed all the plugins for ", (0, a.kt)("em", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "stable"), " ECMAScript features from ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "-proposal-"), " to ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "-transform-"), "."), (0, a.kt)("p", null, "You can read the whole changelog ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/releases/tag/v7.22.0", "object-key-init")
      }, "on GitHub"), "."));
    }

    m.isMDXComponent = cc11001100_hook("m.isMDXComponent", !0, "assign");
  },
  35318: function (e, t, r) {
    r.d(t, {
      Zo: function () {
        return c;
      },
      kt: function () {
        return d;
      }
    });
    var n = cc11001100_hook("n", r(27378), "var-init");

    function a(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function o(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function p(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? o(Object(r), !0).forEach(function (t) {
          a(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function i(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          a = cc11001100_hook("a", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            a = cc11001100_hook("a", {}, "var-init"),
            o = cc11001100_hook("o", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < o.length; n++) r = cc11001100_hook("r", o[n], "assign"), t.indexOf(r) >= 0 || (a[r] = cc11001100_hook("a[r]", e[r], "assign"));

        return a;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var o = cc11001100_hook("o", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < o.length; n++) r = cc11001100_hook("r", o[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = cc11001100_hook("a[r]", e[r], "assign"));
      }

      return a;
    }

    var s = cc11001100_hook("s", n.createContext({}), "var-init"),
        l = function (e) {
      var t = cc11001100_hook("t", n.useContext(s), "var-init"),
          r = cc11001100_hook("r", t, "var-init");
      return e && (r = cc11001100_hook("r", "function" == typeof e ? e(t) : p(p({}, t), e), "assign")), r;
    },
        c = function (e) {
      var t = cc11001100_hook("t", l(e.components), "var-init");
      return n.createElement(s.Provider, {
        value: cc11001100_hook("value", t, "object-key-init")
      }, e.children);
    },
        u = cc11001100_hook("u", "mdxType", "var-init"),
        m = cc11001100_hook("m", {
      inlineCode: cc11001100_hook("inlineCode", "code", "object-key-init"),
      wrapper: function (e) {
        var t = cc11001100_hook("t", e.children, "var-init");
        return n.createElement(n.Fragment, {}, t);
      }
    }, "var-init"),
        f = cc11001100_hook("f", n.forwardRef(function (e, t) {
      var r = cc11001100_hook("r", e.components, "var-init"),
          a = cc11001100_hook("a", e.mdxType, "var-init"),
          o = cc11001100_hook("o", e.originalType, "var-init"),
          s = cc11001100_hook("s", e.parentName, "var-init"),
          c = cc11001100_hook("c", i(e, ["components", "mdxType", "originalType", "parentName"]), "var-init"),
          u = cc11001100_hook("u", l(r), "var-init"),
          f = cc11001100_hook("f", a, "var-init"),
          d = cc11001100_hook("d", u["".concat(s, ".").concat(f)] || u[f] || m[f] || o, "var-init");
      return r ? n.createElement(d, p(p({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, c), {}, {
        components: cc11001100_hook("components", r, "object-key-init")
      })) : n.createElement(d, p({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, c));
    }), "var-init");

    function d(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", arguments, "var-init"),
          a = cc11001100_hook("a", t && t.mdxType, "var-init");

      if ("string" == typeof e || a) {
        var o = cc11001100_hook("o", r.length, "var-init"),
            p = cc11001100_hook("p", new Array(o), "var-init");
        p[0] = cc11001100_hook("p[0]", f, "assign");
        var i = cc11001100_hook("i", {}, "var-init");

        for (var s in t) hasOwnProperty.call(t, s) && (i[s] = cc11001100_hook("i[s]", t[s], "assign"));

        i.originalType = cc11001100_hook("i.originalType", e, "assign"), i[u] = cc11001100_hook("i[u]", "string" == typeof e ? e : a, "assign"), p[1] = cc11001100_hook("p[1]", i, "assign");

        for (var l = cc11001100_hook("l", 2, "var-init"); l < o; l++) p[l] = cc11001100_hook("p[l]", r[l], "assign");

        return n.createElement.apply(null, p);
      }

      return n.createElement.apply(null, r);
    }

    f.displayName = cc11001100_hook("f.displayName", "MDXCreateElement", "assign");
  }
}]);