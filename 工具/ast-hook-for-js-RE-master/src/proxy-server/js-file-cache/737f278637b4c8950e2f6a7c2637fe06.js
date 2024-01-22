"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[3309], {
  47003: function (e, t, n) {
    n.r(t), n.d(t, {
      assets: function () {
        return i;
      },
      contentTitle: function () {
        return p;
      },
      default: function () {
        return d;
      },
      frontMatter: function () {
        return o;
      },
      metadata: function () {
        return s;
      },
      toc: function () {
        return l;
      }
    });
    var r = cc11001100_hook("r", n(25773), "var-init"),
        a = cc11001100_hook("a", (n(27378), n(35318)), "var-init");
    const o = cc11001100_hook("o", {
      layout: cc11001100_hook("layout", "post", "object-key-init"),
      title: cc11001100_hook("title", "7.14.0 Released: New class features enabled by default, TypeScript 4.3, and better CommonJS interop", "object-key-init"),
      author: cc11001100_hook("author", "Babel Team", "object-key-init"),
      authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
      date: cc11001100_hook("date", new Date("2021-04-29T00:00:00.000Z"), "object-key-init"),
      categories: cc11001100_hook("categories", "announcements", "object-key-init"),
      share_text: cc11001100_hook("share_text", "Babel 7.14.0 Released", "object-key-init")
    }, "var-init"),
          p = cc11001100_hook("p", void 0, "var-init"),
          s = cc11001100_hook("s", {
      permalink: cc11001100_hook("permalink", "/blog/2021/04/29/7.14.0", "object-key-init"),
      source: cc11001100_hook("source", "@site/blog/2021-04-29-7.14.0.md", "object-key-init"),
      title: cc11001100_hook("title", "7.14.0 Released: New class features enabled by default, TypeScript 4.3, and better CommonJS interop", "object-key-init"),
      description: cc11001100_hook("description", "Babel 7.14.0 is out!", "object-key-init"),
      date: cc11001100_hook("date", "2021-04-29T00:00:00.000Z", "object-key-init"),
      formattedDate: cc11001100_hook("formattedDate", "2021\u5e744\u670829\u65e5", "object-key-init"),
      tags: cc11001100_hook("tags", [], "object-key-init"),
      readingTime: cc11001100_hook("readingTime", 4.815, "object-key-init"),
      hasTruncateMarker: cc11001100_hook("hasTruncateMarker", !0, "object-key-init"),
      authors: cc11001100_hook("authors", [{
        name: cc11001100_hook("name", "Babel Team", "object-key-init"),
        url: cc11001100_hook("url", "https://twitter.com/babeljs", "object-key-init")
      }], "object-key-init"),
      frontMatter: {
        layout: cc11001100_hook("layout", "post", "object-key-init"),
        title: cc11001100_hook("title", "7.14.0 Released: New class features enabled by default, TypeScript 4.3, and better CommonJS interop", "object-key-init"),
        author: cc11001100_hook("author", "Babel Team", "object-key-init"),
        authorURL: cc11001100_hook("authorURL", "https://twitter.com/babeljs", "object-key-init"),
        date: cc11001100_hook("date", "2021-04-29T00:00:00.000Z", "object-key-init"),
        categories: cc11001100_hook("categories", "announcements", "object-key-init"),
        share_text: cc11001100_hook("share_text", "Babel 7.14.0 Released", "object-key-init")
      },
      prevItem: {
        title: cc11001100_hook("title", "Babel is used by millions, so why are we running out of money?", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2021/05/10/funding-update", "object-key-init")
      },
      nextItem: {
        title: cc11001100_hook("title", "7.13.0 Released: Records and Tuples, granular compiler assumptions, and top-level targets", "object-key-init"),
        permalink: cc11001100_hook("permalink", "/blog/2021/02/22/7.13.0", "object-key-init")
      }
    }, "var-init"),
          i = cc11001100_hook("i", {
      authorsImageUrls: cc11001100_hook("authorsImageUrls", [void 0], "object-key-init")
    }, "var-init"),
          l = cc11001100_hook("l", [], "var-init"),
          c = cc11001100_hook("c", {
      toc: cc11001100_hook("toc", l, "object-key-init")
    }, "var-init"),
          u = cc11001100_hook("u", "wrapper", "var-init");

    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        components: t,
        ...n
      } = cc11001100_hook("", e, "var-init");
      return (0, a.kt)(u, (0, r.Z)({}, c, n, {
        components: cc11001100_hook("components", t, "object-key-init"),
        mdxType: cc11001100_hook("mdxType", "MDXLayout", "object-key-init")
      }), (0, a.kt)("p", null, "Babel 7.14.0 is out!"), (0, a.kt)("p", null, "This release enables class fields and private methods by default (they were promoted to Stage 4 during the recent April ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/agendas/blob/master/2021/04.md", "object-key-init")
      }, "TC39 meeting"), "!) and adds brand checks for private fields and static class blocks to ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/preset-env"), "'s ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "shippedProposals"), " option."), (0, a.kt)("p", null, "We added support for Stage 1 ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-async-do-expressions", "object-key-init")
      }, "async do expressions"), " (using ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/plugin-proposal-async-do-expressions"), "), which extends the Stage 1 ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/tc39/proposal-do-expressions", "object-key-init")
      }, "do expression"), " proposal."), (0, a.kt)("p", null, "Thanks to ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/sosukesuzuki", "object-key-init")
      }, "Sosuke Suzuki"), " and ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/g-plane", "object-key-init")
      }, "Pig Fang"), ", Babel can now handle ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/", "object-key-init")
      }, "TypeScript 4.3"), " features. ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "@babel/parser"), "  also has a new option to correctly parse ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html", "object-key-init")
      }, "TypeScript declaration"), " files."), (0, a.kt)("p", null, "Finally, we introduced a new ", (0, a.kt)("inlineCode", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init")
      }, "importInterop: node"), " option to make it easier to produce dual modules by compiling ECMAScript imports to CommonJS that follow Node.js semantics."), (0, a.kt)("p", null, "You can read the whole changelog ", (0, a.kt)("a", {
        parentName: cc11001100_hook("parentName", "p", "object-key-init"),
        href: cc11001100_hook("href", "https://github.com/babel/babel/releases/tag/v7.14.0", "object-key-init")
      }, "on GitHub"), "."));
    }

    d.isMDXComponent = cc11001100_hook("d.isMDXComponent", !0, "assign");
  },
  35318: function (e, t, n) {
    n.d(t, {
      Zo: function () {
        return c;
      },
      kt: function () {
        return b;
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

    function p(e) {
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

    function s(e, t) {
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

    var i = cc11001100_hook("i", r.createContext({}), "var-init"),
        l = function (e) {
      var t = cc11001100_hook("t", r.useContext(i), "var-init"),
          n = cc11001100_hook("n", t, "var-init");
      return e && (n = cc11001100_hook("n", "function" == typeof e ? e(t) : p(p({}, t), e), "assign")), n;
    },
        c = function (e) {
      var t = cc11001100_hook("t", l(e.components), "var-init");
      return r.createElement(i.Provider, {
        value: cc11001100_hook("value", t, "object-key-init")
      }, e.children);
    },
        u = cc11001100_hook("u", "mdxType", "var-init"),
        d = cc11001100_hook("d", {
      inlineCode: cc11001100_hook("inlineCode", "code", "object-key-init"),
      wrapper: function (e) {
        var t = cc11001100_hook("t", e.children, "var-init");
        return r.createElement(r.Fragment, {}, t);
      }
    }, "var-init"),
        m = cc11001100_hook("m", r.forwardRef(function (e, t) {
      var n = cc11001100_hook("n", e.components, "var-init"),
          a = cc11001100_hook("a", e.mdxType, "var-init"),
          o = cc11001100_hook("o", e.originalType, "var-init"),
          i = cc11001100_hook("i", e.parentName, "var-init"),
          c = cc11001100_hook("c", s(e, ["components", "mdxType", "originalType", "parentName"]), "var-init"),
          u = cc11001100_hook("u", l(n), "var-init"),
          m = cc11001100_hook("m", a, "var-init"),
          b = cc11001100_hook("b", u["".concat(i, ".").concat(m)] || u[m] || d[m] || o, "var-init");
      return n ? r.createElement(b, p(p({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, c), {}, {
        components: cc11001100_hook("components", n, "object-key-init")
      })) : r.createElement(b, p({
        ref: cc11001100_hook("ref", t, "object-key-init")
      }, c));
    }), "var-init");

    function b(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", arguments, "var-init"),
          a = cc11001100_hook("a", t && t.mdxType, "var-init");

      if ("string" == typeof e || a) {
        var o = cc11001100_hook("o", n.length, "var-init"),
            p = cc11001100_hook("p", new Array(o), "var-init");
        p[0] = cc11001100_hook("p[0]", m, "assign");
        var s = cc11001100_hook("s", {}, "var-init");

        for (var i in t) hasOwnProperty.call(t, i) && (s[i] = cc11001100_hook("s[i]", t[i], "assign"));

        s.originalType = cc11001100_hook("s.originalType", e, "assign"), s[u] = cc11001100_hook("s[u]", "string" == typeof e ? e : a, "assign"), p[1] = cc11001100_hook("p[1]", s, "assign");

        for (var l = cc11001100_hook("l", 2, "var-init"); l < o; l++) p[l] = cc11001100_hook("p[l]", n[l], "assign");

        return r.createElement.apply(null, p);
      }

      return r.createElement.apply(null, n);
    }

    m.displayName = cc11001100_hook("m.displayName", "MDXCreateElement", "assign");
  }
}]);