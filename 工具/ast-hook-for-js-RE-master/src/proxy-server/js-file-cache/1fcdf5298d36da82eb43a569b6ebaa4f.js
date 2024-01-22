"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[7441], {
  42370: function (e, t, a) {
    a.d(t, {
      Z: function () {
        return p;
      }
    });
    var l = cc11001100_hook("l", a(27378), "var-init"),
        n = cc11001100_hook("n", a(38944), "var-init"),
        r = cc11001100_hook("r", a(92358), "var-init"),
        o = cc11001100_hook("o", a(7980), "var-init"),
        s = cc11001100_hook("s", a(41191), "var-init"),
        i = cc11001100_hook("i", a(7419), "var-init"),
        c = cc11001100_hook("c", {
      sidebar: cc11001100_hook("sidebar", "sidebar_CLW8", "object-key-init"),
      sidebarItemTitle: cc11001100_hook("sidebarItemTitle", "sidebarItemTitle_DQfJ", "object-key-init"),
      sidebarItemList: cc11001100_hook("sidebarItemList", "sidebarItemList_rvuc", "object-key-init"),
      sidebarItem: cc11001100_hook("sidebarItem", "sidebarItem__RMN", "object-key-init"),
      sidebarItemLink: cc11001100_hook("sidebarItemLink", "sidebarItemLink_Ony9", "object-key-init"),
      sidebarItemLinkActive: cc11001100_hook("sidebarItemLinkActive", "sidebarItemLinkActive_MJ75", "object-key-init")
    }, "var-init");

    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        sidebar: t
      } = cc11001100_hook("", e, "var-init");
      return l.createElement("aside", {
        className: cc11001100_hook("className", "col col--3", "object-key-init")
      }, l.createElement("nav", {
        className: cc11001100_hook("className", (0, n.Z)(c.sidebar, "thin-scrollbar"), "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", (0, i.I)({
          id: cc11001100_hook("id", "theme.blog.sidebar.navAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Blog recent posts navigation", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for recent posts in the blog sidebar", "object-key-init")
        }), "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", (0, n.Z)(c.sidebarItemTitle, "margin-bottom--md"), "object-key-init")
      }, t.title), l.createElement("ul", {
        className: cc11001100_hook("className", (0, n.Z)(c.sidebarItemList, "clean-list"), "object-key-init")
      }, t.items.map(e => l.createElement("li", {
        key: cc11001100_hook("key", e.permalink, "object-key-init"),
        className: cc11001100_hook("className", c.sidebarItem, "object-key-init")
      }, l.createElement(s.Z, {
        isNavLink: cc11001100_hook("isNavLink", !0, "object-key-init"),
        to: cc11001100_hook("to", e.permalink, "object-key-init"),
        className: cc11001100_hook("className", c.sidebarItemLink, "object-key-init"),
        activeClassName: cc11001100_hook("activeClassName", c.sidebarItemLinkActive, "object-key-init")
      }, e.title))))));
    }

    var u = cc11001100_hook("u", a(70197), "var-init");

    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        sidebar: t
      } = cc11001100_hook("", e, "var-init");
      return l.createElement("ul", {
        className: cc11001100_hook("className", "menu__list", "object-key-init")
      }, t.items.map(e => l.createElement("li", {
        key: cc11001100_hook("key", e.permalink, "object-key-init"),
        className: cc11001100_hook("className", "menu__list-item", "object-key-init")
      }, l.createElement(s.Z, {
        isNavLink: cc11001100_hook("isNavLink", !0, "object-key-init"),
        to: cc11001100_hook("to", e.permalink, "object-key-init"),
        className: cc11001100_hook("className", "menu__link", "object-key-init"),
        activeClassName: cc11001100_hook("activeClassName", "menu__link--active", "object-key-init")
      }, e.title))));
    }

    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      return l.createElement(u.Zo, {
        component: cc11001100_hook("component", d, "object-key-init"),
        props: cc11001100_hook("props", e, "object-key-init")
      });
    }

    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        sidebar: t
      } = cc11001100_hook("", e, "var-init");
      const a = cc11001100_hook("a", (0, o.i)(), "var-init");
      return null != t && t.items.length ? "mobile" === a ? l.createElement(g, {
        sidebar: cc11001100_hook("sidebar", t, "object-key-init")
      }) : l.createElement(m, {
        sidebar: cc11001100_hook("sidebar", t, "object-key-init")
      }) : null;
    }

    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        sidebar: t,
        toc: a,
        children: o,
        ...s
      } = cc11001100_hook("", e, "var-init"),
            i = cc11001100_hook("i", t && t.items.length > 0, "var-init");
      return l.createElement(r.Z, s, l.createElement("div", {
        className: cc11001100_hook("className", "container margin-vert--lg", "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", "row", "object-key-init")
      }, l.createElement(h, {
        sidebar: cc11001100_hook("sidebar", t, "object-key-init")
      }), l.createElement("main", {
        className: cc11001100_hook("className", (0, n.Z)("col", {
          "col--7": cc11001100_hook("col--7", i, "object-key-init"),
          "col--9 col--offset-1": cc11001100_hook("col--9 col--offset-1", !i, "object-key-init")
        }), "object-key-init"),
        itemScope: cc11001100_hook("itemScope", !0, "object-key-init"),
        itemType: cc11001100_hook("itemType", "http://schema.org/Blog", "object-key-init")
      }, o), a && l.createElement("div", {
        className: cc11001100_hook("className", "col col--2", "object-key-init")
      }, a))));
    }
  },
  99365: function (e, t, a) {
    a.d(t, {
      Z: function () {
        return M;
      }
    });
    var l = cc11001100_hook("l", a(27378), "var-init"),
        n = cc11001100_hook("n", a(38944), "var-init"),
        r = cc11001100_hook("r", a(73049), "var-init"),
        o = cc11001100_hook("o", a(1847), "var-init");

    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t;
      let {
        children: a,
        className: n
      } = cc11001100_hook("", e, "var-init");
      const {
        frontMatter: s,
        assets: i
      } = cc11001100_hook("", (0, r.C)(), "var-init"),
            {
        withBaseUrl: c
      } = cc11001100_hook("", (0, o.C)(), "var-init"),
            m = cc11001100_hook("m", null != (t = cc11001100_hook("t", i.image, "assign")) ? t : s.image, "var-init");
      return l.createElement("article", {
        className: cc11001100_hook("className", n, "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "blogPost", "object-key-init"),
        itemScope: cc11001100_hook("itemScope", !0, "object-key-init"),
        itemType: cc11001100_hook("itemType", "http://schema.org/BlogPosting", "object-key-init")
      }, m && l.createElement("meta", {
        itemProp: cc11001100_hook("itemProp", "image", "object-key-init"),
        content: cc11001100_hook("content", c(m, {
          absolute: cc11001100_hook("absolute", !0, "object-key-init")
        }), "object-key-init")
      }), a);
    }

    var i = cc11001100_hook("i", a(41191), "var-init"),
        c = cc11001100_hook("c", {
      title: cc11001100_hook("title", "title_Kdtz", "object-key-init")
    }, "var-init");

    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t
      } = cc11001100_hook("", e, "var-init");
      const {
        metadata: a,
        isBlogPostPage: o
      } = cc11001100_hook("", (0, r.C)(), "var-init"),
            {
        permalink: s,
        title: m
      } = cc11001100_hook("", a, "var-init"),
            u = cc11001100_hook("u", o ? "h1" : "h2", "var-init");
      return l.createElement(u, {
        className: cc11001100_hook("className", (0, n.Z)(c.title, t), "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "headline", "object-key-init")
      }, o ? m : l.createElement(i.Z, {
        itemProp: cc11001100_hook("itemProp", "url", "object-key-init"),
        to: cc11001100_hook("to", s, "object-key-init")
      }, m));
    }

    var u = cc11001100_hook("u", a(7419), "var-init"),
        d = cc11001100_hook("d", a(91256), "var-init"),
        g = cc11001100_hook("g", {
      container: cc11001100_hook("container", "container_iZB2", "object-key-init")
    }, "var-init");

    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        readingTime: t
      } = cc11001100_hook("", e, "var-init");
      const a = cc11001100_hook("a", function () {
        const {
          selectMessage: e
        } = cc11001100_hook("", (0, d.c)(), "var-init");
        return t => {
          const a = cc11001100_hook("a", Math.ceil(t), "var-init");
          return e(a, (0, u.I)({
            id: cc11001100_hook("id", "theme.blog.post.readingTime.plurals", "object-key-init"),
            description: cc11001100_hook("description", 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', "object-key-init"),
            message: cc11001100_hook("message", "One min read|{readingTime} min read", "object-key-init")
          }, {
            readingTime: cc11001100_hook("readingTime", a, "object-key-init")
          }));
        };
      }(), "var-init");
      return l.createElement(l.Fragment, null, a(t));
    }

    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        date: t,
        formattedDate: a
      } = cc11001100_hook("", e, "var-init");
      return l.createElement("time", {
        dateTime: cc11001100_hook("dateTime", t, "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "datePublished", "object-key-init")
      }, a);
    }

    function f() {
      return l.createElement(l.Fragment, null, " \xb7 ");
    }

    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t
      } = cc11001100_hook("", e, "var-init");
      const {
        metadata: a
      } = cc11001100_hook("", (0, r.C)(), "var-init"),
            {
        date: o,
        formattedDate: s,
        readingTime: i
      } = cc11001100_hook("", a, "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", (0, n.Z)(g.container, "margin-vert--md", t), "object-key-init")
      }, l.createElement(p, {
        date: cc11001100_hook("date", o, "object-key-init"),
        formattedDate: cc11001100_hook("formattedDate", s, "object-key-init")
      }), void 0 !== i && l.createElement(l.Fragment, null, l.createElement(f, null), l.createElement(h, {
        readingTime: cc11001100_hook("readingTime", i, "object-key-init")
      })));
    }

    function b(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.href ? l.createElement(i.Z, e) : l.createElement(l.Fragment, null, e.children);
    }

    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        author: t,
        className: a
      } = cc11001100_hook("", e, "var-init");
      const {
        name: r,
        title: o,
        url: s,
        imageURL: i,
        email: c
      } = cc11001100_hook("", t, "var-init"),
            m = cc11001100_hook("m", s || c && "mailto:" + c || void 0, "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", (0, n.Z)("avatar margin-bottom--sm", a), "object-key-init")
      }, i && l.createElement(b, {
        href: cc11001100_hook("href", m, "object-key-init"),
        className: cc11001100_hook("className", "avatar__photo-link", "object-key-init")
      }, l.createElement("img", {
        className: cc11001100_hook("className", "avatar__photo", "object-key-init"),
        src: cc11001100_hook("src", i, "object-key-init"),
        alt: cc11001100_hook("alt", r, "object-key-init")
      })), r && l.createElement("div", {
        className: cc11001100_hook("className", "avatar__intro", "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "author", "object-key-init"),
        itemScope: cc11001100_hook("itemScope", !0, "object-key-init"),
        itemType: cc11001100_hook("itemType", "https://schema.org/Person", "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", "avatar__name", "object-key-init")
      }, l.createElement(b, {
        href: cc11001100_hook("href", m, "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "url", "object-key-init")
      }, l.createElement("span", {
        itemProp: cc11001100_hook("itemProp", "name", "object-key-init")
      }, r))), o && l.createElement("small", {
        className: cc11001100_hook("className", "avatar__subtitle", "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "description", "object-key-init")
      }, o)));
    }

    var N = cc11001100_hook("N", {
      authorCol: cc11001100_hook("authorCol", "authorCol_v1VX", "object-key-init"),
      imageOnlyAuthorRow: cc11001100_hook("imageOnlyAuthorRow", "imageOnlyAuthorRow_RxZ1", "object-key-init"),
      imageOnlyAuthorCol: cc11001100_hook("imageOnlyAuthorCol", "imageOnlyAuthorCol_iWtj", "object-key-init")
    }, "var-init");

    function P(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t
      } = cc11001100_hook("", e, "var-init");
      const {
        metadata: {
          authors: a
        },
        assets: o
      } = cc11001100_hook("", (0, r.C)(), "var-init");
      if (0 === a.length) return null;
      const s = cc11001100_hook("s", a.every(e => {
        let {
          name: t
        } = cc11001100_hook("", e, "var-init");
        return !t;
      }), "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", (0, n.Z)("margin-top--md margin-bottom--sm", s ? N.imageOnlyAuthorRow : "row", t), "object-key-init")
      }, a.map((e, t) => {
        var a;
        return l.createElement("div", {
          className: cc11001100_hook("className", (0, n.Z)(!s && "col col--6", s ? N.imageOnlyAuthorCol : N.authorCol), "object-key-init"),
          key: cc11001100_hook("key", t, "object-key-init")
        }, l.createElement(v, {
          author: { ...e,
            imageURL: null != (a = cc11001100_hook("a", o.authorsImageUrls[t], "assign")) ? a : e.imageURL
          }
        }));
      }));
    }

    function _() {
      return l.createElement("header", null, l.createElement(m, null), l.createElement(E, null), l.createElement(P, null));
    }

    var Z = cc11001100_hook("Z", a(12615), "var-init"),
        k = cc11001100_hook("k", a(1749), "var-init");

    function C(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        className: a
      } = cc11001100_hook("", e, "var-init");
      const {
        isBlogPostPage: o
      } = cc11001100_hook("", (0, r.C)(), "var-init");
      return l.createElement("div", {
        id: cc11001100_hook("id", o ? Z.blogPostContainerID : void 0, "object-key-init"),
        className: cc11001100_hook("className", (0, n.Z)("markdown", a), "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "articleBody", "object-key-init")
      }, l.createElement(k.Z, null, t));
    }

    var I = cc11001100_hook("I", a(17120), "var-init"),
        T = cc11001100_hook("T", a(45897), "var-init"),
        w = cc11001100_hook("w", a(25773), "var-init");

    function y() {
      return l.createElement("b", null, l.createElement(u.Z, {
        id: cc11001100_hook("id", "theme.blog.post.readMore", "object-key-init"),
        description: cc11001100_hook("description", "The label used in blog post item excerpts to link to full blog posts", "object-key-init")
      }, "Read More"));
    }

    function F(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        blogPostTitle: t,
        ...a
      } = cc11001100_hook("", e, "var-init");
      return l.createElement(i.Z, (0, w.Z)({
        "aria-label": cc11001100_hook("aria-label", (0, u.I)({
          message: cc11001100_hook("message", "Read more about {title}", "object-key-init"),
          id: cc11001100_hook("id", "theme.blog.post.readMoreLabel", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the link to full blog posts from excerpts", "object-key-init")
        }, {
          title: cc11001100_hook("title", t, "object-key-init")
        }), "object-key-init")
      }, a), l.createElement(y, null));
    }

    var L = cc11001100_hook("L", {
      blogPostFooterDetailsFull: cc11001100_hook("blogPostFooterDetailsFull", "blogPostFooterDetailsFull_JgJa", "object-key-init")
    }, "var-init");

    function B() {
      const {
        metadata: e,
        isBlogPostPage: t
      } = cc11001100_hook("", (0, r.C)(), "var-init"),
            {
        tags: a,
        title: o,
        editUrl: s,
        hasTruncateMarker: i
      } = cc11001100_hook("", e, "var-init"),
            c = cc11001100_hook("c", !t && i, "var-init"),
            m = cc11001100_hook("m", a.length > 0, "var-init");
      return m || c || s ? l.createElement("footer", {
        className: cc11001100_hook("className", (0, n.Z)("row docusaurus-mt-lg", t && L.blogPostFooterDetailsFull), "object-key-init")
      }, m && l.createElement("div", {
        className: cc11001100_hook("className", (0, n.Z)("col", {
          "col--9": cc11001100_hook("col--9", c, "object-key-init")
        }), "object-key-init")
      }, l.createElement(T.Z, {
        tags: cc11001100_hook("tags", a, "object-key-init")
      })), t && s && l.createElement("div", {
        className: cc11001100_hook("className", "col margin-top--sm", "object-key-init")
      }, l.createElement(I.Z, {
        editUrl: cc11001100_hook("editUrl", s, "object-key-init")
      })), c && l.createElement("div", {
        className: cc11001100_hook("className", (0, n.Z)("col text--right", {
          "col--3": cc11001100_hook("col--3", m, "object-key-init")
        }), "object-key-init")
      }, l.createElement(F, {
        blogPostTitle: cc11001100_hook("blogPostTitle", o, "object-key-init"),
        to: cc11001100_hook("to", e.permalink, "object-key-init")
      }))) : null;
    }

    function M(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        className: a
      } = cc11001100_hook("", e, "var-init");
      const o = cc11001100_hook("o", function () {
        const {
          isBlogPostPage: e
        } = cc11001100_hook("", (0, r.C)(), "var-init");
        return e ? void 0 : "margin-bottom--xl";
      }(), "var-init");
      return l.createElement(s, {
        className: cc11001100_hook("className", (0, n.Z)(o, a), "object-key-init")
      }, l.createElement(_, null), l.createElement(C, null, t), l.createElement(B, null));
    }
  },
  73049: function (e, t, a) {
    a.d(t, {
      C: function () {
        return s;
      },
      n: function () {
        return o;
      }
    });
    var l = cc11001100_hook("l", a(27378), "var-init"),
        n = cc11001100_hook("n", a(13879), "var-init");
    const r = cc11001100_hook("r", l.createContext(null), "var-init");

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        content: a,
        isBlogPostPage: n = !1
      } = cc11001100_hook("", e, "var-init");
      const o = cc11001100_hook("o", function (e) {
        let {
          content: t,
          isBlogPostPage: a
        } = cc11001100_hook("", e, "var-init");
        return (0, l.useMemo)(() => ({
          metadata: cc11001100_hook("metadata", t.metadata, "object-key-init"),
          frontMatter: cc11001100_hook("frontMatter", t.frontMatter, "object-key-init"),
          assets: cc11001100_hook("assets", t.assets, "object-key-init"),
          toc: cc11001100_hook("toc", t.toc, "object-key-init"),
          isBlogPostPage: cc11001100_hook("isBlogPostPage", a, "object-key-init")
        }), [t, a]);
      }({
        content: cc11001100_hook("content", a, "object-key-init"),
        isBlogPostPage: cc11001100_hook("isBlogPostPage", n, "object-key-init")
      }), "var-init");
      return l.createElement(r.Provider, {
        value: cc11001100_hook("value", o, "object-key-init")
      }, t);
    }

    function s() {
      const e = cc11001100_hook("e", (0, l.useContext)(r), "var-init");
      if (null === e) throw new n.i6("BlogPostProvider");
      return e;
    }
  },
  91256: function (e, t, a) {
    a.d(t, {
      c: function () {
        return c;
      }
    });
    var l = cc11001100_hook("l", a(27378), "var-init"),
        n = cc11001100_hook("n", a(89939), "var-init");
    const r = cc11001100_hook("r", ["zero", "one", "two", "few", "many", "other"], "var-init");

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      return r.filter(t => e.includes(t));
    }

    const s = cc11001100_hook("s", {
      locale: cc11001100_hook("locale", "en", "object-key-init"),
      pluralForms: cc11001100_hook("pluralForms", o(["one", "other"]), "object-key-init"),
      select: cc11001100_hook("select", e => 1 === e ? "one" : "other", "object-key-init")
    }, "var-init");

    function i() {
      const {
        i18n: {
          currentLocale: e
        }
      } = cc11001100_hook("", (0, n.Z)(), "var-init");
      return (0, l.useMemo)(() => {
        try {
          return function (e) {
            const t = cc11001100_hook("t", new Intl.PluralRules(e), "var-init");
            return {
              locale: cc11001100_hook("locale", e, "object-key-init"),
              pluralForms: cc11001100_hook("pluralForms", o(t.resolvedOptions().pluralCategories), "object-key-init"),
              select: cc11001100_hook("select", e => t.select(e), "object-key-init")
            };
          }(e);
        } catch (t) {
          return console.error('Failed to use Intl.PluralRules for locale "' + e + '".\nDocusaurus will fallback to the default (English) implementation.\nError: ' + t.message + "\n"), s;
        }
      }, [e]);
    }

    function c() {
      const e = cc11001100_hook("e", i(), "var-init");
      return {
        selectMessage: cc11001100_hook("selectMessage", (t, a) => function (e, t, a) {
          const l = cc11001100_hook("l", e.split("|"), "var-init");
          if (1 === l.length) return l[0];
          l.length > a.pluralForms.length && console.error("For locale=" + a.locale + ", a maximum of " + a.pluralForms.length + " plural forms are expected (" + a.pluralForms.join(",") + "), but the message contains " + l.length + ": " + e);
          const n = cc11001100_hook("n", a.select(t), "var-init"),
                r = cc11001100_hook("r", a.pluralForms.indexOf(n), "var-init");
          return l[Math.min(r, l.length - 1)];
        }(a, t, e), "object-key-init")
      };
    }
  }
}]);