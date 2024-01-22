"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[3089], {
  87001: function (e, t, a) {
    a.r(t), a.d(t, {
      default: function () {
        return h;
      }
    });
    var n = cc11001100_hook("n", a(27378), "var-init"),
        r = cc11001100_hook("r", a(38944), "var-init"),
        l = cc11001100_hook("l", a(89939), "var-init"),
        i = cc11001100_hook("i", a(9237), "var-init"),
        o = cc11001100_hook("o", a(55854), "var-init"),
        s = cc11001100_hook("s", a(42370), "var-init"),
        c = cc11001100_hook("c", a(7419), "var-init"),
        m = cc11001100_hook("m", a(99808), "var-init");

    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        metadata: t
      } = cc11001100_hook("", e, "var-init"),
            {
        previousPage: a,
        nextPage: r
      } = cc11001100_hook("", t, "var-init");
      return n.createElement("nav", {
        className: cc11001100_hook("className", "pagination-nav", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", (0, c.I)({
          id: cc11001100_hook("id", "theme.blog.paginator.navAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Blog list page navigation", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the blog pagination", "object-key-init")
        }), "object-key-init")
      }, a && n.createElement(m.Z, {
        permalink: cc11001100_hook("permalink", a, "object-key-init"),
        title: cc11001100_hook("title", n.createElement(c.Z, {
          id: cc11001100_hook("id", "theme.blog.paginator.newerEntries", "object-key-init"),
          description: cc11001100_hook("description", "The label used to navigate to the newer blog posts page (previous page)", "object-key-init")
        }, "Newer Entries"), "object-key-init")
      }), r && n.createElement(m.Z, {
        permalink: cc11001100_hook("permalink", r, "object-key-init"),
        title: cc11001100_hook("title", n.createElement(c.Z, {
          id: cc11001100_hook("id", "theme.blog.paginator.olderEntries", "object-key-init"),
          description: cc11001100_hook("description", "The label used to navigate to the older blog posts page (next page)", "object-key-init")
        }, "Older Entries"), "object-key-init"),
        isNext: cc11001100_hook("isNext", !0, "object-key-init")
      }));
    }

    var p = cc11001100_hook("p", a(54386), "var-init"),
        u = cc11001100_hook("u", a(73049), "var-init"),
        d = cc11001100_hook("d", a(99365), "var-init");

    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        items: t,
        component: a = d.Z
      } = cc11001100_hook("", e, "var-init");
      return n.createElement(n.Fragment, null, t.map(e => {
        let {
          content: t
        } = cc11001100_hook("", e, "var-init");
        return n.createElement(u.n, {
          key: cc11001100_hook("key", t.metadata.permalink, "object-key-init"),
          content: cc11001100_hook("content", t, "object-key-init")
        }, n.createElement(a, null, n.createElement(t, null)));
      }));
    }

    function b(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        metadata: t
      } = cc11001100_hook("", e, "var-init"),
            {
        siteConfig: {
          title: a
        }
      } = cc11001100_hook("", (0, l.Z)(), "var-init"),
            {
        blogDescription: r,
        blogTitle: o,
        permalink: s
      } = cc11001100_hook("", t, "var-init"),
            c = cc11001100_hook("c", "/" === s ? a : o, "var-init");
      return n.createElement(n.Fragment, null, n.createElement(i.d, {
        title: cc11001100_hook("title", c, "object-key-init"),
        description: cc11001100_hook("description", r, "object-key-init")
      }), n.createElement(p.Z, {
        tag: cc11001100_hook("tag", "blog_posts_list", "object-key-init")
      }));
    }

    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        metadata: t,
        items: a,
        sidebar: r
      } = cc11001100_hook("", e, "var-init");
      return n.createElement(s.Z, {
        sidebar: cc11001100_hook("sidebar", r, "object-key-init")
      }, n.createElement(E, {
        items: cc11001100_hook("items", a, "object-key-init")
      }), n.createElement(g, {
        metadata: cc11001100_hook("metadata", t, "object-key-init")
      }));
    }

    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      return n.createElement(i.FG, {
        className: cc11001100_hook("className", (0, r.Z)(o.k.wrapper.blogPages, o.k.page.blogListPage), "object-key-init")
      }, n.createElement(b, e), n.createElement(f, e));
    }
  }
}]);