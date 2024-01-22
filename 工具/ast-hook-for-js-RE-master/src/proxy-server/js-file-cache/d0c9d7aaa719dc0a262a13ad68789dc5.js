"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[6103], {
  52529: function (e, t, n) {
    n.r(t), n.d(t, {
      default: function () {
        return h;
      }
    });
    var a = cc11001100_hook("a", n(27378), "var-init"),
        l = cc11001100_hook("l", n(38944), "var-init"),
        r = cc11001100_hook("r", n(9237), "var-init"),
        o = cc11001100_hook("o", n(55854), "var-init"),
        i = cc11001100_hook("i", n(73049), "var-init"),
        c = cc11001100_hook("c", n(42370), "var-init"),
        s = cc11001100_hook("s", n(99365), "var-init"),
        m = cc11001100_hook("m", n(25773), "var-init"),
        u = cc11001100_hook("u", n(7419), "var-init"),
        d = cc11001100_hook("d", n(99808), "var-init");

    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        nextItem: t,
        prevItem: n
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("nav", {
        className: cc11001100_hook("className", "pagination-nav docusaurus-mt-lg", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", (0, u.I)({
          id: cc11001100_hook("id", "theme.blog.post.paginator.navAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Blog post page navigation", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the blog posts pagination", "object-key-init")
        }), "object-key-init")
      }, n && a.createElement(d.Z, (0, m.Z)({}, n, {
        subLabel: cc11001100_hook("subLabel", a.createElement(u.Z, {
          id: cc11001100_hook("id", "theme.blog.post.paginator.newerPost", "object-key-init"),
          description: cc11001100_hook("description", "The blog post button label to navigate to the newer/previous post", "object-key-init")
        }, "Newer Post"), "object-key-init")
      })), t && a.createElement(d.Z, (0, m.Z)({}, t, {
        subLabel: cc11001100_hook("subLabel", a.createElement(u.Z, {
          id: cc11001100_hook("id", "theme.blog.post.paginator.olderPost", "object-key-init"),
          description: cc11001100_hook("description", "The blog post button label to navigate to the older/next post", "object-key-init")
        }, "Older Post"), "object-key-init"),
        isNext: cc11001100_hook("isNext", !0, "object-key-init")
      })));
    }

    function g() {
      var e;
      const {
        assets: t,
        metadata: n
      } = cc11001100_hook("", (0, i.C)(), "var-init"),
            {
        title: l,
        description: o,
        date: c,
        tags: s,
        authors: m,
        frontMatter: u
      } = cc11001100_hook("", n, "var-init"),
            {
        keywords: d
      } = cc11001100_hook("", u, "var-init"),
            f = cc11001100_hook("f", null != (e = cc11001100_hook("e", t.image, "assign")) ? e : u.image, "var-init");
      return a.createElement(r.d, {
        title: cc11001100_hook("title", l, "object-key-init"),
        description: cc11001100_hook("description", o, "object-key-init"),
        keywords: cc11001100_hook("keywords", d, "object-key-init"),
        image: cc11001100_hook("image", f, "object-key-init")
      }, a.createElement("meta", {
        property: cc11001100_hook("property", "og:type", "object-key-init"),
        content: cc11001100_hook("content", "article", "object-key-init")
      }), a.createElement("meta", {
        property: cc11001100_hook("property", "article:published_time", "object-key-init"),
        content: cc11001100_hook("content", c, "object-key-init")
      }), m.some(e => e.url) && a.createElement("meta", {
        property: cc11001100_hook("property", "article:author", "object-key-init"),
        content: cc11001100_hook("content", m.map(e => e.url).filter(Boolean).join(","), "object-key-init")
      }), s.length > 0 && a.createElement("meta", {
        property: cc11001100_hook("property", "article:tag", "object-key-init"),
        content: cc11001100_hook("content", s.map(e => e.label).join(","), "object-key-init")
      }));
    }

    var v = cc11001100_hook("v", n(92388), "var-init");

    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        sidebar: t,
        children: n
      } = cc11001100_hook("", e, "var-init");
      const {
        metadata: l,
        toc: r
      } = cc11001100_hook("", (0, i.C)(), "var-init"),
            {
        nextItem: o,
        prevItem: m,
        frontMatter: u
      } = cc11001100_hook("", l, "var-init"),
            {
        hide_table_of_contents: d,
        toc_min_heading_level: g,
        toc_max_heading_level: p
      } = cc11001100_hook("", u, "var-init");
      return a.createElement(c.Z, {
        sidebar: cc11001100_hook("sidebar", t, "object-key-init"),
        toc: cc11001100_hook("toc", !d && r.length > 0 ? a.createElement(v.Z, {
          toc: cc11001100_hook("toc", r, "object-key-init"),
          minHeadingLevel: cc11001100_hook("minHeadingLevel", g, "object-key-init"),
          maxHeadingLevel: cc11001100_hook("maxHeadingLevel", p, "object-key-init")
        }) : void 0, "object-key-init")
      }, a.createElement(s.Z, null, n), (o || m) && a.createElement(f, {
        nextItem: cc11001100_hook("nextItem", o, "object-key-init"),
        prevItem: cc11001100_hook("prevItem", m, "object-key-init")
      }));
    }

    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", e.content, "var-init");
      return a.createElement(i.n, {
        content: cc11001100_hook("content", e.content, "object-key-init"),
        isBlogPostPage: cc11001100_hook("isBlogPostPage", !0, "object-key-init")
      }, a.createElement(r.FG, {
        className: cc11001100_hook("className", (0, l.Z)(o.k.wrapper.blogPages, o.k.page.blogPostPage), "object-key-init")
      }, a.createElement(g, null), a.createElement(p, {
        sidebar: cc11001100_hook("sidebar", e.sidebar, "object-key-init")
      }, a.createElement(t, null))));
    }
  },
  92388: function (e, t, n) {
    n.d(t, {
      Z: function () {
        return m;
      }
    });
    var a = cc11001100_hook("a", n(25773), "var-init"),
        l = cc11001100_hook("l", n(27378), "var-init"),
        r = cc11001100_hook("r", n(38944), "var-init"),
        o = cc11001100_hook("o", n(77614), "var-init"),
        i = cc11001100_hook("i", {
      tableOfContents: cc11001100_hook("tableOfContents", "tableOfContents_XG6w", "object-key-init"),
      docItemContainer: cc11001100_hook("docItemContainer", "docItemContainer_Tr6w", "object-key-init")
    }, "var-init");
    const c = cc11001100_hook("c", "table-of-contents__link toc-highlight", "var-init"),
          s = cc11001100_hook("s", "table-of-contents__link--active", "var-init");

    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t,
        ...n
      } = cc11001100_hook("", e, "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", (0, r.Z)(i.tableOfContents, "thin-scrollbar", t), "object-key-init")
      }, l.createElement(o.Z, (0, a.Z)({}, n, {
        linkClassName: cc11001100_hook("linkClassName", c, "object-key-init"),
        linkActiveClassName: cc11001100_hook("linkActiveClassName", s, "object-key-init")
      })));
    }
  },
  77614: function (e, t, n) {
    n.d(t, {
      Z: function () {
        return g;
      }
    });
    var a = cc11001100_hook("a", n(25773), "var-init"),
        l = cc11001100_hook("l", n(27378), "var-init"),
        r = cc11001100_hook("r", n(59899), "var-init");

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", e.map(e => ({ ...e,
        parentIndex: -1,
        children: []
      })), "var-init"),
            n = cc11001100_hook("n", Array(7).fill(-1), "var-init");
      t.forEach((e, t) => {
        const a = cc11001100_hook("a", n.slice(2, e.level), "var-init");
        e.parentIndex = cc11001100_hook("e.parentIndex", Math.max(...a), "assign"), n[e.level] = cc11001100_hook("n[e.level]", t, "assign");
      });
      const a = cc11001100_hook("a", [], "var-init");
      return t.forEach(e => {
        const {
          parentIndex: n,
          ...l
        } = cc11001100_hook("", e, "var-init");
        n >= 0 ? t[n].children.push(l) : a.push(l);
      }), a;
    }

    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        toc: t,
        minHeadingLevel: n,
        maxHeadingLevel: a
      } = cc11001100_hook("", e, "var-init");
      return t.flatMap(e => {
        const t = cc11001100_hook("t", i({
          toc: cc11001100_hook("toc", e.children, "object-key-init"),
          minHeadingLevel: cc11001100_hook("minHeadingLevel", n, "object-key-init"),
          maxHeadingLevel: cc11001100_hook("maxHeadingLevel", a, "object-key-init")
        }), "var-init");
        return function (e) {
          return e.level >= n && e.level <= a;
        }(e) ? [{ ...e,
          children: t
        }] : t;
      });
    }

    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", e.getBoundingClientRect(), "var-init");
      return t.top === t.bottom ? c(e.parentNode) : t;
    }

    function s(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n;
      let {
        anchorTopOffset: a
      } = cc11001100_hook("", t, "var-init");
      const l = cc11001100_hook("l", e.find(e => c(e).top >= a), "var-init");

      if (l) {
        var r;
        return function (e) {
          return e.top > 0 && e.bottom < window.innerHeight / 2;
        }(c(l)) ? l : null != (r = cc11001100_hook("r", e[e.indexOf(l) - 1], "assign")) ? r : null;
      }

      return null != (n = cc11001100_hook("n", e[e.length - 1], "assign")) ? n : null;
    }

    function m() {
      const e = cc11001100_hook("e", (0, l.useRef)(0), "var-init"),
            {
        navbar: {
          hideOnScroll: t
        }
      } = cc11001100_hook("", (0, r.L)(), "var-init");
      return (0, l.useEffect)(() => {
        e.current = cc11001100_hook("e.current", t ? 0 : document.querySelector(".navbar").clientHeight, "assign");
      }, [t]), e;
    }

    function u(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", (0, l.useRef)(void 0), "var-init"),
            n = cc11001100_hook("n", m(), "var-init");
      (0, l.useEffect)(() => {
        if (!e) return () => {};
        const {
          linkClassName: a,
          linkActiveClassName: l,
          minHeadingLevel: r,
          maxHeadingLevel: o
        } = cc11001100_hook("", e, "var-init");

        function i() {
          const e = cc11001100_hook("e", function (e) {
            return Array.from(document.getElementsByClassName(e));
          }(a), "var-init"),
                i = cc11001100_hook("i", function (e) {
            let {
              minHeadingLevel: t,
              maxHeadingLevel: n
            } = cc11001100_hook("", e, "var-init");
            const a = cc11001100_hook("a", [], "var-init");

            for (let l = cc11001100_hook("l", t, "var-init"); l <= n; l += cc11001100_hook("l", 1, "assign")) a.push("h" + l + ".anchor");

            return Array.from(document.querySelectorAll(a.join()));
          }({
            minHeadingLevel: cc11001100_hook("minHeadingLevel", r, "object-key-init"),
            maxHeadingLevel: cc11001100_hook("maxHeadingLevel", o, "object-key-init")
          }), "var-init"),
                c = cc11001100_hook("c", s(i, {
            anchorTopOffset: cc11001100_hook("anchorTopOffset", n.current, "object-key-init")
          }), "var-init"),
                m = cc11001100_hook("m", e.find(e => c && c.id === function (e) {
            return decodeURIComponent(e.href.substring(e.href.indexOf("#") + 1));
          }(e)), "var-init");
          e.forEach(e => {
            !function (e, n) {
              n ? (t.current && t.current !== e && t.current.classList.remove(l), e.classList.add(l), t.current = cc11001100_hook("t.current", e, "assign")) : e.classList.remove(l);
            }(e, e === m);
          });
        }

        return document.addEventListener("scroll", i), document.addEventListener("resize", i), i(), () => {
          document.removeEventListener("scroll", i), document.removeEventListener("resize", i);
        };
      }, [e, n]);
    }

    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        toc: t,
        className: n,
        linkClassName: a,
        isChild: r
      } = cc11001100_hook("", e, "var-init");
      return t.length ? l.createElement("ul", {
        className: cc11001100_hook("className", r ? void 0 : n, "object-key-init")
      }, t.map(e => l.createElement("li", {
        key: cc11001100_hook("key", e.id, "object-key-init")
      }, l.createElement("a", {
        href: cc11001100_hook("href", "#" + e.id, "object-key-init"),
        className: cc11001100_hook("className", null != a ? a : void 0, "object-key-init"),
        dangerouslySetInnerHTML: {
          __html: cc11001100_hook("__html", e.value, "object-key-init")
        }
      }), l.createElement(d, {
        isChild: cc11001100_hook("isChild", !0, "object-key-init"),
        toc: cc11001100_hook("toc", e.children, "object-key-init"),
        className: cc11001100_hook("className", n, "object-key-init"),
        linkClassName: cc11001100_hook("linkClassName", a, "object-key-init")
      })))) : null;
    }

    var f = cc11001100_hook("f", l.memo(d), "var-init");

    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        toc: t,
        className: n = "table-of-contents table-of-contents__left-border",
        linkClassName: c = "table-of-contents__link",
        linkActiveClassName: s,
        minHeadingLevel: m,
        maxHeadingLevel: d,
        ...g
      } = cc11001100_hook("", e, "var-init");
      const v = cc11001100_hook("v", (0, r.L)(), "var-init"),
            p = cc11001100_hook("p", null != m ? m : v.tableOfContents.minHeadingLevel, "var-init"),
            h = cc11001100_hook("h", null != d ? d : v.tableOfContents.maxHeadingLevel, "var-init"),
            b = cc11001100_hook("b", function (e) {
        let {
          toc: t,
          minHeadingLevel: n,
          maxHeadingLevel: a
        } = cc11001100_hook("", e, "var-init");
        return (0, l.useMemo)(() => i({
          toc: cc11001100_hook("toc", o(t), "object-key-init"),
          minHeadingLevel: cc11001100_hook("minHeadingLevel", n, "object-key-init"),
          maxHeadingLevel: cc11001100_hook("maxHeadingLevel", a, "object-key-init")
        }), [t, n, a]);
      }({
        toc: cc11001100_hook("toc", t, "object-key-init"),
        minHeadingLevel: cc11001100_hook("minHeadingLevel", p, "object-key-init"),
        maxHeadingLevel: cc11001100_hook("maxHeadingLevel", h, "object-key-init")
      }), "var-init");
      return u((0, l.useMemo)(() => {
        if (c && s) return {
          linkClassName: cc11001100_hook("linkClassName", c, "object-key-init"),
          linkActiveClassName: cc11001100_hook("linkActiveClassName", s, "object-key-init"),
          minHeadingLevel: cc11001100_hook("minHeadingLevel", p, "object-key-init"),
          maxHeadingLevel: cc11001100_hook("maxHeadingLevel", h, "object-key-init")
        };
      }, [c, s, p, h])), l.createElement(f, (0, a.Z)({
        toc: cc11001100_hook("toc", b, "object-key-init"),
        className: cc11001100_hook("className", n, "object-key-init"),
        linkClassName: cc11001100_hook("linkClassName", c, "object-key-init")
      }, g));
    }
  }
}]);