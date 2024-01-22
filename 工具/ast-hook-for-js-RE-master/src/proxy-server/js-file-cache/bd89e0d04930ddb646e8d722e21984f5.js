"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[8500], {
  80655: function (e, t, r) {
    r.r(t), r.d(t, {
      assets: function () {
        return p;
      },
      contentTitle: function () {
        return l;
      },
      default: function () {
        return f;
      },
      frontMatter: function () {
        return o;
      },
      metadata: function () {
        return i;
      },
      toc: function () {
        return s;
      }
    });
    var n = cc11001100_hook("n", r(25773), "var-init"),
        a = cc11001100_hook("a", (r(27378), r(35318)), "var-init");
    const o = cc11001100_hook("o", {
      layout: cc11001100_hook("layout", "post", "object-key-init"),
      title: cc11001100_hook("title", "7.17.0 Released: RegExp 'v' mode and ... \ud83e\udd41 decorators!", "object-key-init"),
      author: cc11001100_hook("author", "Babel Team", "object-key-init"),
      authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
      date: cc11001100_hook("date", new Date("2022-02-02T00:00:00.000Z"), "object-key-init"),
      categories: cc11001100_hook("categories", "announcements", "object-key-init"),
      share_text: cc11001100_hook("share_text", "Babel 7.17.0 Released", "object-key-init")
    }, "var-init"),
          l = cc11001100_hook("l", void 0, "var-init"),
          i = cc11001100_hook("i", {
      permalink: cc11001100_hook("permalink", "/blog/2022/02/02/7.17.0", "object-key-init"),
      source: cc11001100_hook("source", "@site/blog/2022-02-02-7.17.0.md", "object-key-init"),
      title: cc11001100_hook("title", "7.17.0 Released: RegExp 'v' mode and ... \ud83e\udd41 decorators!", "object-key-init"),
      description: cc11001100_hook("description", "We just published Babel 7.17.0!", "object-key-init"),
      date: cc11001100_hook("date", "2022-02-02T00:00:00.000Z", "object-key-init"),
      formattedDate: cc11001100_hook("formattedDate", "2022\u5e742\u67082\u65e5", "object-key-init"),
      tags: cc11001100_hook("tags", [], "object-key-init"),
      readingTime: cc11001100_hook("readingTime", 3.895, "object-key-init"),
      hasTruncateMarker: cc11001100_hook("hasTruncateMarker", !0, "object-key-init"),
      authors: cc11001100_hook("authors", [{
        name: cc11001100_hook("name", "Babel Team", "object-key-init"),
        url: cc11001100_hook("url", "https://twitter.com/babeljs", "object-key-init")
      }], "object-key-init"),
      frontMatter: {
        layout: cc11001100_hook("layout", "post", "object-key-init"),
        title: cc11001100_hook("title", "7.17.0 Released: RegExp 'v' mode and ... \ud83e\udd41 decorators!", "object-key-init"),
        author: cc11001100_hook("author", "Babel Team", "object-key-init"),
        authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
        date: cc11001100_hook("date", "2022-02-02T00:00:00.000Z", "object-key-init"),
        categories: cc11001100_hook("categories", "announcements", "object-key-init"),
        share_text: cc11001100_hook("share_text", "Babel 7.17.0 Released", "object-key-init")
      },
      prevItem: {
        title: cc11001100_hook("title", "7.18.0 Released: Destructuring private elements and TypeScript 4.7", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2022/05/19/7.18.0", "object-key-init")
      },
      nextItem: {
        title: cc11001100_hook("title", "7.16.0 Released: ESLint 8 and TypeScript 4.5", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2021/10/29/7.16.0", "object-key-init")
      }
    }, "var-init"),
          p = cc11001100_hook("p", {
      authorsImageUrls: cc11001100_hook("authorsImageUrls", [void 0], "object-key-init")
    }, "var-init"),
          s = cc11001100_hook("s", [], "var-init"),
          c = cc11001100_hook("c", {
      toc: cc11001100_hook("toc", s, "object-key-init")
    }, "var-init"),
          u = cc11001100_hook("u", "wrapper", "var-init");

    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        components: t,
        ...r
      } = cc11001100_hook("", e, "var-init");
      return (0, a.kt)(u, (0, n.Z)({}, c, r, {
        components: cc11001100_hook("components", t, "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "MDXLayout", "object-key-init")
      }), (0, a.kt)("p", null, "We just published Babel 7.17.0!"), (0, a.kt)("p", null, "After years of ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://babeljs.io/blog/2018/09/17/decorators", "object-key-init")
      }, "iterations"), ", rewrites and adjustments it looks like the ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-decorators", "object-key-init")
      }, "decorators proposal"), " has finally stabilized again on a new design! This release includes both parse and transform support for the new proposal."), (0, a.kt)("p", null, "We also implemented the ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-regexp-set-notation", "object-key-init")
      }, "RegExp ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "a", "object-key-init")
      }, "v"), " flag proposal"), " and added parsing support for ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-destructuring-private", "object-key-init")
      }, "destructuring private fields"), ", both currently Stage 2. Lastly, a new experimental implementation of ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/register"), "."), (0, a.kt)("p", null, "You can read the whole changelog ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/releases/tag/v7.17.0", "object-key-init")
      }, "on GitHub"), "."));
    }

    f.isMDXComponent = cc11001100_hook("f.isMDXComponent", !0, "assign");
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

    function l(e) {
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

    var p = cc11001100_hook("p", n.createContext({}), "var-init"),
        s = function (e) {
      var t = cc11001100_hook("t", n.useContext(p), "var-init"),
          r = cc11001100_hook("r", t, "var-init");
      return e && (r = cc11001100_hook("r", "function" == typeof e ? e(t) : l(l({}, t), e), "assign")), r;
    },
        c = function (e) {
      var t = cc11001100_hook("t", s(e.components), "var-init");
      return n.createElement(p.Provider, {
        value: cc11001100_hook("value", t, "object-key-init")
      }, e.children);
    },
        u = cc11001100_hook("u", "mdxType", "var-init"),
        f = cc11001100_hook("f", {
      inlineCode: cc11001100_hook("inlineCode", "code", "object-key-init"),
      wrapper: function (e) {
        var t = cc11001100_hook("t", e.children, "var-init");
        return n.createElement(n.Fragment, {}, t);
      }
    }, "var-init"),
        m = cc11001100_hook("m", n.forwardRef(function (e, t) {
      var r = cc11001100_hook("r", e.components, "var-init"),
          a = cc11001100_hook("a", e.mdxType, "var-init"),
          o = cc11001100_hook("o", e.originalType, "var-init"),
          p = cc11001100_hook("p", e.parentName, "var-init"),
          c = cc11001100_hook("c", i(e, ["components", "mdxType", "originalType", "parentName"]), "var-init"),
          u = cc11001100_hook("u", s(r), "var-init"),
          m = cc11001100_hook("m", a, "var-init"),
          d = cc11001100_hook("d", u["".concat(p, ".").concat(m)] || u[m] || f[m] || o, "var-init");
      return r ? n.createElement(d, l(l({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, c), {}, {
        components: cc11001100_hook("components", r, "object-key-init")
      })) : n.createElement(d, l({
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
            l = cc11001100_hook("l", new Array(o), "var-init");
        l[0] = cc11001100_hook("l[0]", m, "assign");
        var i = cc11001100_hook("i", {}, "var-init");

        for (var p in t) hasOwnProperty.call(t, p) && (i[p] = cc11001100_hook("i[p]", t[p], "assign"));

        i.originalType = cc11001100_hook("i.originalType", e, "assign"), i[u] = cc11001100_hook("i[u]", "string" == typeof e ? e : a, "assign"), l[1] = cc11001100_hook("l[1]", i, "assign");

        for (var s = cc11001100_hook("s", 2, "var-init"); s < o; s++) l[s] = cc11001100_hook("l[s]", r[s], "assign");

        return n.createElement.apply(null, l);
      }

      return n.createElement.apply(null, r);
    }

    m.displayName = cc11001100_hook("m.displayName", "MDXCreateElement", "assign");
  }
}]);