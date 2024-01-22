"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[2524], {
  33935: function (e, t, n) {
    n.r(t), n.d(t, {
      assets: function () {
        return s;
      },
      contentTitle: function () {
        return i;
      },
      default: function () {
        return m;
      },
      frontMatter: function () {
        return o;
      },
      metadata: function () {
        return p;
      },
      toc: function () {
        return l;
      }
    });
    var r = cc11001100_hook("r", n(25773), "var-init"),
        a = cc11001100_hook("a", (n(27378), n(35318)), "var-init");
    const o = cc11001100_hook("o", {
      layout: cc11001100_hook("layout", "post", "object-key-init"),
      title: cc11001100_hook("title", "7.15.0 Released: Hack-style pipelines, TypeScript const enums and Rhino target support", "object-key-init"),
      author: cc11001100_hook("author", "Babel Team", "object-key-init"),
      authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
      date: cc11001100_hook("date", new Date("2021-07-26T00:00:00.000Z"), "object-key-init"),
      categories: cc11001100_hook("categories", "announcements", "object-key-init"),
      share_text: cc11001100_hook("share_text", "Babel 7.15.0 Released", "object-key-init")
    }, "var-init"),
          i = cc11001100_hook("i", void 0, "var-init"),
          p = cc11001100_hook("p", {
      permalink: cc11001100_hook("permalink", "/blog/2021/07/26/7.15.0", "object-key-init"),
      source: cc11001100_hook("source", "@site/blog/2021-07-26-7.15.0.md", "object-key-init"),
      title: cc11001100_hook("title", "7.15.0 Released: Hack-style pipelines, TypeScript const enums and Rhino target support", "object-key-init"),
      description: cc11001100_hook("description", "This release enables parsing top-level await (Stage 4 at the May meeting) and transforming ergonomic brand checks for private fields (Stage 4 at the July meeting) by default. There is also now support for the Hack-style pipeline operator. We also improved our TypeScript support, implementing transform support for const enums and namespace aliases, and we expanded our heuristics to add .displayName to React components created by React.createContext() (#13501).", "object-key-init"),
      date: cc11001100_hook("date", "2021-07-26T00:00:00.000Z", "object-key-init"),
      formattedDate: cc11001100_hook("formattedDate", "2021\u5e747\u670826\u65e5", "object-key-init"),
      tags: cc11001100_hook("tags", [], "object-key-init"),
      readingTime: cc11001100_hook("readingTime", 3.535, "object-key-init"),
      hasTruncateMarker: cc11001100_hook("hasTruncateMarker", !0, "object-key-init"),
      authors: cc11001100_hook("authors", [{
        name: cc11001100_hook("name", "Babel Team", "object-key-init"),
        url: cc11001100_hook("url", "https://twitter.com/babeljs", "object-key-init")
      }], "object-key-init"),
      frontMatter: {
        layout: cc11001100_hook("layout", "post", "object-key-init"),
        title: cc11001100_hook("title", "7.15.0 Released: Hack-style pipelines, TypeScript const enums and Rhino target support", "object-key-init"),
        author: cc11001100_hook("author", "Babel Team", "object-key-init"),
        authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
        date: cc11001100_hook("date", "2021-07-26T00:00:00.000Z", "object-key-init"),
        categories: cc11001100_hook("categories", "announcements", "object-key-init"),
        share_text: cc11001100_hook("share_text", "Babel 7.15.0 Released", "object-key-init")
      },
      prevItem: {
        title: cc11001100_hook("title", "7.16.0 Released: ESLint 8 and TypeScript 4.5", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2021/10/29/7.16.0", "object-key-init")
      },
      nextItem: {
        title: cc11001100_hook("title", "Babel is used by millions, so why are we running out of money?", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2021/05/10/funding-update", "object-key-init")
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
        ...n
      } = cc11001100_hook("", e, "var-init");
      return (0, a.kt)(u, (0, r.Z)({}, c, n, {
        components: cc11001100_hook("components", t, "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "MDXLayout", "object-key-init")
      }), (0, a.kt)("p", null, "This release enables parsing top-level await (Stage 4 at the ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/agendas/blob/master/2021/05.md", "object-key-init")
      }, "May"), " meeting) and transforming ergonomic brand checks for private fields (Stage 4 at the ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/agendas/blob/master/2021/07.md", "object-key-init")
      }, "July"), " meeting) by default. There is also now support for the ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/js-choi/proposal-hack-pipes", "object-key-init")
      }, "Hack-style"), " pipeline operator. We also improved our TypeScript support, implementing transform support for ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "const"), " enums and namespace aliases, and we expanded our heuristics to add ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, ".displayName"), " to React components created by ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "React.createContext()"), " (", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/pull/13501", "object-key-init")
      }, "#13501"), ")."), (0, a.kt)("p", null, "We also introduced a new compiler assumption, ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://babeljs.io/docs/en/assumptions#noincompletensimportdetection", "object-key-init")
      }, (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "a", "object-key-init")
      }, "noIncompleteNsImportDetection")), ", to produce a smaller output when compiling ECMAScript modules to CommonJS without worrying about partially initialized namespace imports caused by module cycles."), (0, a.kt)("p", null, "Additionally, you can now specify ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://mozilla.github.io/rhino/", "object-key-init")
      }, "Rhino"), " as a compilation target."), (0, a.kt)("p", null, "You can read the whole changelog ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/releases/tag/v7.15.0", "object-key-init")
      }, "on GitHub"), "."));
    }

    m.isMDXComponent = cc11001100_hook("m.isMDXComponent", !0, "assign");
  },
  35318: function (e, t, n) {
    n.d(t, {
      Zo: function () {
        return c;
      },
      kt: function () {
        return f;
      }
    });
    var r = cc11001100_hook("r", n(27378), "var-init");

    function a(e, t, n) {
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

    function o(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var r = cc11001100_hook("r", Object.getOwnPropertySymbols(e), "var-init");
        t && (r = cc11001100_hook("r", r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), n.push.apply(n, r);
      }

      return n;
    }

    function i(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var n = cc11001100_hook("n", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? o(Object(n), !0).forEach(function (t) {
          a(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function p(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var n,
          r,
          a = cc11001100_hook("a", function (e, t) {
        if (null == e) return {};
        var n,
            r,
            a = cc11001100_hook("a", {}, "var-init"),
            o = cc11001100_hook("o", Object.keys(e), "var-init");

        for (r = cc11001100_hook("r", 0, "assign"); r < o.length; r++) n = cc11001100_hook("n", o[r], "assign"), t.indexOf(n) >= 0 || (a[n] = cc11001100_hook("a[n]", e[n], "assign"));

        return a;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var o = cc11001100_hook("o", Object.getOwnPropertySymbols(e), "var-init");

        for (r = cc11001100_hook("r", 0, "assign"); r < o.length; r++) n = cc11001100_hook("n", o[r], "assign"), t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = cc11001100_hook("a[n]", e[n], "assign"));
      }

      return a;
    }

    var s = cc11001100_hook("s", r.createContext({}), "var-init"),
        l = function (e) {
      var t = cc11001100_hook("t", r.useContext(s), "var-init"),
          n = cc11001100_hook("n", t, "var-init");
      return e && (n = cc11001100_hook("n", "function" == typeof e ? e(t) : i(i({}, t), e), "assign")), n;
    },
        c = function (e) {
      var t = cc11001100_hook("t", l(e.components), "var-init");
      return r.createElement(s.Provider, {
        value: cc11001100_hook("value", t, "object-key-init")
      }, e.children);
    },
        u = cc11001100_hook("u", "mdxType", "var-init"),
        m = cc11001100_hook("m", {
      inlineCode: cc11001100_hook("inlineCode", "code", "object-key-init"),
      wrapper: function (e) {
        var t = cc11001100_hook("t", e.children, "var-init");
        return r.createElement(r.Fragment, {}, t);
      }
    }, "var-init"),
        d = cc11001100_hook("d", r.forwardRef(function (e, t) {
      var n = cc11001100_hook("n", e.components, "var-init"),
          a = cc11001100_hook("a", e.mdxType, "var-init"),
          o = cc11001100_hook("o", e.originalType, "var-init"),
          s = cc11001100_hook("s", e.parentName, "var-init"),
          c = cc11001100_hook("c", p(e, ["components", "mdxType", "originalType", "parentName"]), "var-init"),
          u = cc11001100_hook("u", l(n), "var-init"),
          d = cc11001100_hook("d", a, "var-init"),
          f = cc11001100_hook("f", u["".concat(s, ".").concat(d)] || u[d] || m[d] || o, "var-init");
      return n ? r.createElement(f, i(i({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, c), {}, {
        components: cc11001100_hook("components", n, "object-key-init")
      })) : r.createElement(f, i({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, c));
    }), "var-init");

    function f(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", arguments, "var-init"),
          a = cc11001100_hook("a", t && t.mdxType, "var-init");

      if ("string" == typeof e || a) {
        var o = cc11001100_hook("o", n.length, "var-init"),
            i = cc11001100_hook("i", new Array(o), "var-init");
        i[0] = cc11001100_hook("i[0]", d, "assign");
        var p = cc11001100_hook("p", {}, "var-init");

        for (var s in t) hasOwnProperty.call(t, s) && (p[s] = cc11001100_hook("p[s]", t[s], "assign"));

        p.originalType = cc11001100_hook("p.originalType", e, "assign"), p[u] = cc11001100_hook("p[u]", "string" == typeof e ? e : a, "assign"), i[1] = cc11001100_hook("i[1]", p, "assign");

        for (var l = cc11001100_hook("l", 2, "var-init"); l < o; l++) i[l] = cc11001100_hook("i[l]", n[l], "assign");

        return r.createElement.apply(null, i);
      }

      return r.createElement.apply(null, n);
    }

    d.displayName = cc11001100_hook("d.displayName", "MDXCreateElement", "assign");
  }
}]);