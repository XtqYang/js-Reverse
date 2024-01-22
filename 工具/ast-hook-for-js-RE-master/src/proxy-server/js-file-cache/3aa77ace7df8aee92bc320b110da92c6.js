"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[9514, 4525], {
  77467: function (e, t, n) {
    n.r(t), n.d(t, {
      default: function () {
        return fe;
      }
    });
    var a = cc11001100_hook("a", n(27378), "var-init"),
        l = cc11001100_hook("l", n(38944), "var-init"),
        r = cc11001100_hook("r", n(9237), "var-init"),
        o = cc11001100_hook("o", n(55854), "var-init"),
        i = cc11001100_hook("i", n(42064), "var-init"),
        c = cc11001100_hook("c", n(87470), "var-init"),
        s = cc11001100_hook("s", n(62885), "var-init"),
        d = cc11001100_hook("d", n(78774), "var-init"),
        m = cc11001100_hook("m", n(92358), "var-init"),
        u = cc11001100_hook("u", n(7419), "var-init"),
        b = cc11001100_hook("b", n(9169), "var-init"),
        p = cc11001100_hook("p", n(96847), "var-init");
    var E = cc11001100_hook("E", {
      backToTopButton: cc11001100_hook("backToTopButton", "backToTopButton_iEvu", "object-key-init"),
      backToTopButtonShow: cc11001100_hook("backToTopButtonShow", "backToTopButtonShow_DO8w", "object-key-init")
    }, "var-init");

    function h() {
      const {
        shown: e,
        scrollToTop: t
      } = cc11001100_hook("", function (e) {
        let {
          threshold: t
        } = cc11001100_hook("", e, "var-init");
        const [n, l] = cc11001100_hook("", (0, a.useState)(!1), "var-init"),
              r = cc11001100_hook("r", (0, a.useRef)(!1), "var-init"),
              {
          startScroll: o,
          cancelScroll: i
        } = cc11001100_hook("", (0, b.Ct)(), "var-init");
        return (0, b.RF)((e, n) => {
          let {
            scrollY: a
          } = cc11001100_hook("", e, "var-init");
          const o = cc11001100_hook("o", null == n ? void 0 : n.scrollY, "var-init");
          o && (r.current ? r.current = cc11001100_hook("r.current", !1, "assign") : a >= o ? (i(), l(!1)) : a < t ? l(!1) : a + window.innerHeight < document.documentElement.scrollHeight && l(!0));
        }), (0, p.S)(e => {
          e.location.hash && (r.current = cc11001100_hook("r.current", !0, "assign"), l(!1));
        }), {
          shown: cc11001100_hook("shown", n, "object-key-init"),
          scrollToTop: cc11001100_hook("scrollToTop", () => o(0), "object-key-init")
        };
      }({
        threshold: cc11001100_hook("threshold", 300, "object-key-init")
      }), "var-init");
      return a.createElement("button", {
        "aria-label": cc11001100_hook("aria-label", (0, u.I)({
          id: cc11001100_hook("id", "theme.BackToTopButton.buttonAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Scroll back to top", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the back to top button", "object-key-init")
        }), "object-key-init"),
        className: cc11001100_hook("className", (0, l.Z)("clean-btn", o.k.common.backToTopButton, E.backToTopButton, e && E.backToTopButtonShow), "object-key-init"),
        type: cc11001100_hook("type", "button", "object-key-init"),
        onClick: cc11001100_hook("onClick", t, "object-key-init")
      });
    }

    var v = cc11001100_hook("v", n(35122), "var-init"),
        f = cc11001100_hook("f", n(3620), "var-init"),
        g = cc11001100_hook("g", n(7980), "var-init"),
        k = cc11001100_hook("k", n(59899), "var-init"),
        C = cc11001100_hook("C", n(58340), "var-init"),
        _ = cc11001100_hook("_", n(25773), "var-init");

    function I(e) {
      cc11001100_hook("e", e, "function-parameter");
      return a.createElement("svg", (0, _.Z)({
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        "aria-hidden": cc11001100_hook("aria-hidden", "true", "object-key-init")
      }, e), a.createElement("g", {
        fill: cc11001100_hook("fill", "#7a7a7a", "object-key-init")
      }, a.createElement("path", {
        d: cc11001100_hook("d", "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0", "object-key-init")
      }), a.createElement("path", {
        d: cc11001100_hook("d", "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0", "object-key-init")
      })));
    }

    var S = cc11001100_hook("S", {
      collapseSidebarButton: cc11001100_hook("collapseSidebarButton", "collapseSidebarButton_oTwn", "object-key-init"),
      collapseSidebarButtonIcon: cc11001100_hook("collapseSidebarButtonIcon", "collapseSidebarButtonIcon_pMEX", "object-key-init")
    }, "var-init");

    function N(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        onClick: t
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("button", {
        type: cc11001100_hook("type", "button", "object-key-init"),
        title: cc11001100_hook("title", (0, u.I)({
          id: cc11001100_hook("id", "theme.docs.sidebar.collapseButtonTitle", "object-key-init"),
          message: cc11001100_hook("message", "Collapse sidebar", "object-key-init"),
          description: cc11001100_hook("description", "The title attribute for collapse button of doc sidebar", "object-key-init")
        }), "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", (0, u.I)({
          id: cc11001100_hook("id", "theme.docs.sidebar.collapseButtonAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Collapse sidebar", "object-key-init"),
          description: cc11001100_hook("description", "The title attribute for collapse button of doc sidebar", "object-key-init")
        }), "object-key-init"),
        className: cc11001100_hook("className", (0, l.Z)("button button--secondary button--outline", S.collapseSidebarButton), "object-key-init"),
        onClick: cc11001100_hook("onClick", t, "object-key-init")
      }, a.createElement(I, {
        className: cc11001100_hook("className", S.collapseSidebarButtonIcon, "object-key-init")
      }));
    }

    var T = cc11001100_hook("T", n(14234), "var-init"),
        x = cc11001100_hook("x", n(13879), "var-init");
    const Z = cc11001100_hook("Z", Symbol("EmptyContext"), "var-init"),
          B = cc11001100_hook("B", a.createContext(Z), "var-init");

    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t
      } = cc11001100_hook("", e, "var-init");
      const [n, l] = cc11001100_hook("", (0, a.useState)(null), "var-init"),
            r = cc11001100_hook("r", (0, a.useMemo)(() => ({
        expandedItem: cc11001100_hook("expandedItem", n, "object-key-init"),
        setExpandedItem: cc11001100_hook("setExpandedItem", l, "object-key-init")
      }), [n]), "var-init");
      return a.createElement(B.Provider, {
        value: cc11001100_hook("value", r, "object-key-init")
      }, t);
    }

    var L = cc11001100_hook("L", n(74229), "var-init"),
        w = cc11001100_hook("w", n(76440), "var-init"),
        A = cc11001100_hook("A", n(41191), "var-init"),
        M = cc11001100_hook("M", n(90362), "var-init");

    function H(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        categoryLabel: t,
        onClick: n
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("button", {
        "aria-label": cc11001100_hook("aria-label", (0, u.I)({
          id: cc11001100_hook("id", "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Toggle the collapsible sidebar category '{label}'", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label to toggle the collapsible sidebar category", "object-key-init")
        }, {
          label: cc11001100_hook("label", t, "object-key-init")
        }), "object-key-init"),
        type: cc11001100_hook("type", "button", "object-key-init"),
        className: cc11001100_hook("className", "clean-btn menu__caret", "object-key-init"),
        onClick: cc11001100_hook("onClick", n, "object-key-init")
      });
    }

    function P(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        item: t,
        onItemClick: n,
        activePath: r,
        level: i,
        index: s,
        ...d
      } = cc11001100_hook("", e, "var-init");

      const {
        items: m,
        label: u,
        collapsible: b,
        className: p,
        href: E
      } = cc11001100_hook("", t, "var-init"),
            {
        docs: {
          sidebar: {
            autoCollapseCategories: h
          }
        }
      } = cc11001100_hook("", (0, k.L)(), "var-init"),
            v = cc11001100_hook("v", function (e) {
        const t = cc11001100_hook("t", (0, M.Z)(), "var-init");
        return (0, a.useMemo)(() => e.href ? e.href : !t && e.collapsible ? (0, c.Wl)(e) : void 0, [e, t]);
      }(t), "var-init"),
            f = cc11001100_hook("f", (0, c._F)(t, r), "var-init"),
            g = cc11001100_hook("g", (0, w.Mg)(E, r), "var-init"),
            {
        collapsed: C,
        setCollapsed: I
      } = cc11001100_hook("", (0, L.u)({
        initialState: cc11001100_hook("initialState", () => !!b && !f && t.collapsed, "object-key-init")
      }), "var-init"),
            {
        expandedItem: S,
        setExpandedItem: N
      } = cc11001100_hook("", function () {
        const e = cc11001100_hook("e", (0, a.useContext)(B), "var-init");
        if (e === Z) throw new x.i6("DocSidebarItemsExpandedStateProvider");
        return e;
      }(), "var-init"),
            T = function (e) {
        void 0 === e && (e = cc11001100_hook("e", !C, "assign")), N(e ? null : s), I(e);
      };

      return function (e) {
        let {
          isActive: t,
          collapsed: n,
          updateCollapsed: l
        } = cc11001100_hook("", e, "var-init");
        const r = cc11001100_hook("r", (0, x.D9)(t), "var-init");
        (0, a.useEffect)(() => {
          t && !r && n && l(!1);
        }, [t, r, n, l]);
      }({
        isActive: cc11001100_hook("isActive", f, "object-key-init"),
        collapsed: cc11001100_hook("collapsed", C, "object-key-init"),
        updateCollapsed: cc11001100_hook("updateCollapsed", T, "object-key-init")
      }), (0, a.useEffect)(() => {
        b && null != S && S !== s && h && I(!0);
      }, [b, S, s, I, h]), a.createElement("li", {
        className: cc11001100_hook("className", (0, l.Z)(o.k.docs.docSidebarItemCategory, o.k.docs.docSidebarItemCategoryLevel(i), "menu__list-item", {
          "menu__list-item--collapsed": cc11001100_hook("menu__list-item--collapsed", C, "object-key-init")
        }, p), "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", (0, l.Z)("menu__list-item-collapsible", {
          "menu__list-item-collapsible--active": cc11001100_hook("menu__list-item-collapsible--active", g, "object-key-init")
        }), "object-key-init")
      }, a.createElement(A.Z, (0, _.Z)({
        className: cc11001100_hook("className", (0, l.Z)("menu__link", {
          "menu__link--sublist": cc11001100_hook("menu__link--sublist", b, "object-key-init"),
          "menu__link--sublist-caret": cc11001100_hook("menu__link--sublist-caret", !E && b, "object-key-init"),
          "menu__link--active": cc11001100_hook("menu__link--active", f, "object-key-init")
        }), "object-key-init"),
        onClick: cc11001100_hook("onClick", b ? e => {
          null == n || n(t), E ? T(!1) : (e.preventDefault(), T());
        } : () => {
          null == n || n(t);
        }, "object-key-init"),
        "aria-current": cc11001100_hook("aria-current", g ? "page" : void 0, "object-key-init"),
        "aria-expanded": cc11001100_hook("aria-expanded", b ? !C : void 0, "object-key-init"),
        href: cc11001100_hook("href", b ? null != v ? v : "#" : v, "object-key-init")
      }, d), u), E && b && a.createElement(H, {
        categoryLabel: cc11001100_hook("categoryLabel", u, "object-key-init"),
        onClick: cc11001100_hook("onClick", e => {
          e.preventDefault(), T();
        }, "object-key-init")
      })), a.createElement(L.z, {
        lazy: cc11001100_hook("lazy", !0, "object-key-init"),
        as: cc11001100_hook("as", "ul", "object-key-init"),
        className: cc11001100_hook("className", "menu__list", "object-key-init"),
        collapsed: cc11001100_hook("collapsed", C, "object-key-init")
      }, a.createElement(O, {
        items: cc11001100_hook("items", m, "object-key-init"),
        tabIndex: cc11001100_hook("tabIndex", C ? -1 : 0, "object-key-init"),
        onItemClick: cc11001100_hook("onItemClick", n, "object-key-init"),
        activePath: cc11001100_hook("activePath", r, "object-key-init"),
        level: cc11001100_hook("level", i + 1, "object-key-init")
      })));
    }

    var F = cc11001100_hook("F", n(34715), "var-init"),
        W = cc11001100_hook("W", n(91858), "var-init"),
        D = cc11001100_hook("D", {
      menuExternalLink: cc11001100_hook("menuExternalLink", "menuExternalLink_BiEj", "object-key-init")
    }, "var-init");

    function R(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        item: t,
        onItemClick: n,
        activePath: r,
        level: i,
        index: s,
        ...d
      } = cc11001100_hook("", e, "var-init");
      const {
        href: m,
        label: u,
        className: b,
        autoAddBaseUrl: p
      } = cc11001100_hook("", t, "var-init"),
            E = cc11001100_hook("E", (0, c._F)(t, r), "var-init"),
            h = cc11001100_hook("h", (0, F.Z)(m), "var-init");
      return a.createElement("li", {
        className: cc11001100_hook("className", (0, l.Z)(o.k.docs.docSidebarItemLink, o.k.docs.docSidebarItemLinkLevel(i), "menu__list-item", b), "object-key-init"),
        key: cc11001100_hook("key", u, "object-key-init")
      }, a.createElement(A.Z, (0, _.Z)({
        className: cc11001100_hook("className", (0, l.Z)("menu__link", !h && D.menuExternalLink, {
          "menu__link--active": cc11001100_hook("menu__link--active", E, "object-key-init")
        }), "object-key-init"),
        autoAddBaseUrl: cc11001100_hook("autoAddBaseUrl", p, "object-key-init"),
        "aria-current": cc11001100_hook("aria-current", E ? "page" : void 0, "object-key-init"),
        to: cc11001100_hook("to", m, "object-key-init")
      }, h && {
        onClick: cc11001100_hook("onClick", n ? () => n(t) : void 0, "object-key-init")
      }, d), u, !h && a.createElement(W.Z, null)));
    }

    var V = cc11001100_hook("V", {
      menuHtmlItem: cc11001100_hook("menuHtmlItem", "menuHtmlItem_OniL", "object-key-init")
    }, "var-init");

    function Y(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        item: t,
        level: n,
        index: r
      } = cc11001100_hook("", e, "var-init");
      const {
        value: i,
        defaultStyle: c,
        className: s
      } = cc11001100_hook("", t, "var-init");
      return a.createElement("li", {
        className: cc11001100_hook("className", (0, l.Z)(o.k.docs.docSidebarItemLink, o.k.docs.docSidebarItemLinkLevel(n), c && [V.menuHtmlItem, "menu__list-item"], s), "object-key-init"),
        key: cc11001100_hook("key", r, "object-key-init"),
        dangerouslySetInnerHTML: {
          __html: cc11001100_hook("__html", i, "object-key-init")
        }
      });
    }

    function z(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        item: t,
        ...n
      } = cc11001100_hook("", e, "var-init");

      switch (t.type) {
        case "category":
          return a.createElement(P, (0, _.Z)({
            item: cc11001100_hook("item", t, "object-key-init")
          }, n));

        case "html":
          return a.createElement(Y, (0, _.Z)({
            item: cc11001100_hook("item", t, "object-key-init")
          }, n));

        default:
          return a.createElement(R, (0, _.Z)({
            item: cc11001100_hook("item", t, "object-key-init")
          }, n));
      }
    }

    function j(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        items: t,
        ...n
      } = cc11001100_hook("", e, "var-init");
      return a.createElement(y, null, t.map((e, t) => a.createElement(z, (0, _.Z)({
        key: cc11001100_hook("key", t, "object-key-init"),
        item: cc11001100_hook("item", e, "object-key-init"),
        index: cc11001100_hook("index", t, "object-key-init")
      }, n))));
    }

    var O = cc11001100_hook("O", (0, a.memo)(j), "var-init"),
        G = cc11001100_hook("G", {
      menu: cc11001100_hook("menu", "menu_jmj1", "object-key-init"),
      menuWithAnnouncementBar: cc11001100_hook("menuWithAnnouncementBar", "menuWithAnnouncementBar_YufC", "object-key-init")
    }, "var-init");

    function K(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        path: t,
        sidebar: n,
        className: r
      } = cc11001100_hook("", e, "var-init");
      const i = cc11001100_hook("i", function () {
        const {
          isActive: e
        } = cc11001100_hook("", (0, T.nT)(), "var-init"),
              [t, n] = cc11001100_hook("", (0, a.useState)(e), "var-init");
        return (0, b.RF)(t => {
          let {
            scrollY: a
          } = cc11001100_hook("", t, "var-init");
          e && n(0 === a);
        }, [e]), e && t;
      }(), "var-init");
      return a.createElement("nav", {
        "aria-label": cc11001100_hook("aria-label", (0, u.I)({
          id: cc11001100_hook("id", "theme.docs.sidebar.navAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Docs sidebar", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the sidebar navigation", "object-key-init")
        }), "object-key-init"),
        className: cc11001100_hook("className", (0, l.Z)("menu thin-scrollbar", G.menu, i && G.menuWithAnnouncementBar, r), "object-key-init")
      }, a.createElement("ul", {
        className: cc11001100_hook("className", (0, l.Z)(o.k.docs.docSidebarMenu, "menu__list"), "object-key-init")
      }, a.createElement(O, {
        items: cc11001100_hook("items", n, "object-key-init"),
        activePath: cc11001100_hook("activePath", t, "object-key-init"),
        level: cc11001100_hook("level", 1, "object-key-init")
      })));
    }

    var U = cc11001100_hook("U", "sidebar_CUen", "var-init"),
        q = cc11001100_hook("q", "sidebarWithHideableNavbar_w4KB", "var-init"),
        J = cc11001100_hook("J", "sidebarHidden_k6VE", "var-init"),
        Q = cc11001100_hook("Q", "sidebarLogo_CYvI", "var-init");

    function X(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        path: t,
        sidebar: n,
        onCollapse: r,
        isHidden: o
      } = cc11001100_hook("", e, "var-init");
      const {
        navbar: {
          hideOnScroll: i
        },
        docs: {
          sidebar: {
            hideable: c
          }
        }
      } = cc11001100_hook("", (0, k.L)(), "var-init");
      return a.createElement("div", {
        className: cc11001100_hook("className", (0, l.Z)(U, i && q, o && J), "object-key-init")
      }, i && a.createElement(C.Z, {
        tabIndex: cc11001100_hook("tabIndex", -1, "object-key-init"),
        className: cc11001100_hook("className", Q, "object-key-init")
      }), a.createElement(K, {
        path: cc11001100_hook("path", t, "object-key-init"),
        sidebar: cc11001100_hook("sidebar", n, "object-key-init")
      }), c && a.createElement(N, {
        onClick: cc11001100_hook("onClick", r, "object-key-init")
      }));
    }

    var $ = cc11001100_hook("$", a.memo(X), "var-init"),
        ee = cc11001100_hook("ee", n(70197), "var-init"),
        te = cc11001100_hook("te", n(9067), "var-init");
    const ne = cc11001100_hook("ne", e => {
      let {
        sidebar: t,
        path: n
      } = cc11001100_hook("", e, "var-init");
      const r = cc11001100_hook("r", (0, te.e)(), "var-init");
      return a.createElement("ul", {
        className: cc11001100_hook("className", (0, l.Z)(o.k.docs.docSidebarMenu, "menu__list"), "object-key-init")
      }, a.createElement(O, {
        items: cc11001100_hook("items", t, "object-key-init"),
        activePath: cc11001100_hook("activePath", n, "object-key-init"),
        onItemClick: cc11001100_hook("onItemClick", e => {
          "category" === e.type && e.href && r.toggle(), "link" === e.type && r.toggle();
        }, "object-key-init"),
        level: cc11001100_hook("level", 1, "object-key-init")
      }));
    }, "var-init");

    function ae(e) {
      cc11001100_hook("e", e, "function-parameter");
      return a.createElement(ee.Zo, {
        component: cc11001100_hook("component", ne, "object-key-init"),
        props: cc11001100_hook("props", e, "object-key-init")
      });
    }

    var le = cc11001100_hook("le", a.memo(ae), "var-init");

    function re(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", (0, g.i)(), "var-init"),
            n = cc11001100_hook("n", "desktop" === t || "ssr" === t, "var-init"),
            l = cc11001100_hook("l", "mobile" === t, "var-init");
      return a.createElement(a.Fragment, null, n && a.createElement($, e), l && a.createElement(le, e));
    }

    var oe = cc11001100_hook("oe", {
      expandButton: cc11001100_hook("expandButton", "expandButton_YOoA", "object-key-init"),
      expandButtonIcon: cc11001100_hook("expandButtonIcon", "expandButtonIcon_GZLG", "object-key-init")
    }, "var-init");

    function ie(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        toggleSidebar: t
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("div", {
        className: cc11001100_hook("className", oe.expandButton, "object-key-init"),
        title: cc11001100_hook("title", (0, u.I)({
          id: cc11001100_hook("id", "theme.docs.sidebar.expandButtonTitle", "object-key-init"),
          message: cc11001100_hook("message", "Expand sidebar", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label and title attribute for expand button of doc sidebar", "object-key-init")
        }), "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", (0, u.I)({
          id: cc11001100_hook("id", "theme.docs.sidebar.expandButtonAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Expand sidebar", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label and title attribute for expand button of doc sidebar", "object-key-init")
        }), "object-key-init"),
        tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
        role: cc11001100_hook("role", "button", "object-key-init"),
        onKeyDown: cc11001100_hook("onKeyDown", t, "object-key-init"),
        onClick: cc11001100_hook("onClick", t, "object-key-init")
      }, a.createElement(I, {
        className: cc11001100_hook("className", oe.expandButtonIcon, "object-key-init")
      }));
    }

    var ce = cc11001100_hook("ce", {
      docSidebarContainer: cc11001100_hook("docSidebarContainer", "docSidebarContainer_y0RQ", "object-key-init"),
      docSidebarContainerHidden: cc11001100_hook("docSidebarContainerHidden", "docSidebarContainerHidden_uArb", "object-key-init"),
      sidebarViewport: cc11001100_hook("sidebarViewport", "sidebarViewport_EJ1r", "object-key-init")
    }, "var-init");

    function se(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t;
      let {
        children: n
      } = cc11001100_hook("", e, "var-init");
      const l = cc11001100_hook("l", (0, d.V)(), "var-init");
      return a.createElement(a.Fragment, {
        key: cc11001100_hook("key", null != (t = cc11001100_hook("t", null == l ? void 0 : l.name, "assign")) ? t : "noSidebar", "object-key-init")
      }, n);
    }

    function de(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        sidebar: t,
        hiddenSidebarContainer: n,
        setHiddenSidebarContainer: r
      } = cc11001100_hook("", e, "var-init");
      const {
        pathname: i
      } = cc11001100_hook("", (0, f.TH)(), "var-init"),
            [c, s] = cc11001100_hook("", (0, a.useState)(!1), "var-init"),
            d = cc11001100_hook("d", (0, a.useCallback)(() => {
        c && s(!1), !c && (0, v.n)() && s(!0), r(e => !e);
      }, [r, c]), "var-init");
      return a.createElement("aside", {
        className: cc11001100_hook("className", (0, l.Z)(o.k.docs.docSidebarContainer, ce.docSidebarContainer, n && ce.docSidebarContainerHidden), "object-key-init"),
        onTransitionEnd: cc11001100_hook("onTransitionEnd", e => {
          e.currentTarget.classList.contains(ce.docSidebarContainer) && n && s(!0);
        }, "object-key-init")
      }, a.createElement(se, null, a.createElement("div", {
        className: cc11001100_hook("className", (0, l.Z)(ce.sidebarViewport, c && ce.sidebarViewportHidden), "object-key-init")
      }, a.createElement(re, {
        sidebar: cc11001100_hook("sidebar", t, "object-key-init"),
        path: cc11001100_hook("path", i, "object-key-init"),
        onCollapse: cc11001100_hook("onCollapse", d, "object-key-init"),
        isHidden: cc11001100_hook("isHidden", c, "object-key-init")
      }), c && a.createElement(ie, {
        toggleSidebar: cc11001100_hook("toggleSidebar", d, "object-key-init")
      }))));
    }

    var me = cc11001100_hook("me", {
      docMainContainer: cc11001100_hook("docMainContainer", "docMainContainer_sTIZ", "object-key-init"),
      docMainContainerEnhanced: cc11001100_hook("docMainContainerEnhanced", "docMainContainerEnhanced_iSjt", "object-key-init"),
      docItemWrapperEnhanced: cc11001100_hook("docItemWrapperEnhanced", "docItemWrapperEnhanced_PxMR", "object-key-init")
    }, "var-init");

    function ue(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        hiddenSidebarContainer: t,
        children: n
      } = cc11001100_hook("", e, "var-init");
      const r = cc11001100_hook("r", (0, d.V)(), "var-init");
      return a.createElement("main", {
        className: cc11001100_hook("className", (0, l.Z)(me.docMainContainer, (t || !r) && me.docMainContainerEnhanced), "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", (0, l.Z)("container padding-top--md padding-bottom--lg", me.docItemWrapper, t && me.docItemWrapperEnhanced), "object-key-init")
      }, n));
    }

    var be = cc11001100_hook("be", {
      docPage: cc11001100_hook("docPage", "docPage_KLoz", "object-key-init"),
      docsWrapper: cc11001100_hook("docsWrapper", "docsWrapper_ct1J", "object-key-init")
    }, "var-init");

    function pe(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t
      } = cc11001100_hook("", e, "var-init");
      const n = cc11001100_hook("n", (0, d.V)(), "var-init"),
            [l, r] = cc11001100_hook("", (0, a.useState)(!1), "var-init");
      return a.createElement(m.Z, {
        wrapperClassName: cc11001100_hook("wrapperClassName", be.docsWrapper, "object-key-init")
      }, a.createElement(h, null), a.createElement("div", {
        className: cc11001100_hook("className", be.docPage, "object-key-init")
      }, n && a.createElement(de, {
        sidebar: cc11001100_hook("sidebar", n.items, "object-key-init"),
        hiddenSidebarContainer: cc11001100_hook("hiddenSidebarContainer", l, "object-key-init"),
        setHiddenSidebarContainer: cc11001100_hook("setHiddenSidebarContainer", r, "object-key-init")
      }), a.createElement(ue, {
        hiddenSidebarContainer: cc11001100_hook("hiddenSidebarContainer", l, "object-key-init")
      }, t)));
    }

    var Ee = cc11001100_hook("Ee", n(94525), "var-init"),
        he = cc11001100_hook("he", n(54386), "var-init");

    function ve(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        versionMetadata: t
      } = cc11001100_hook("", e, "var-init");
      return a.createElement(a.Fragment, null, a.createElement(he.Z, {
        version: cc11001100_hook("version", t.version, "object-key-init"),
        tag: cc11001100_hook("tag", (0, i.os)(t.pluginId, t.version), "object-key-init")
      }), a.createElement(r.d, null, t.noIndex && a.createElement("meta", {
        name: cc11001100_hook("name", "robots", "object-key-init"),
        content: cc11001100_hook("content", "noindex, nofollow", "object-key-init")
      })));
    }

    function fe(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        versionMetadata: t
      } = cc11001100_hook("", e, "var-init"),
            n = cc11001100_hook("n", (0, c.hI)(e), "var-init");
      if (!n) return a.createElement(Ee.default, null);
      const {
        docElement: i,
        sidebarName: m,
        sidebarItems: u
      } = cc11001100_hook("", n, "var-init");
      return a.createElement(a.Fragment, null, a.createElement(ve, e), a.createElement(r.FG, {
        className: cc11001100_hook("className", (0, l.Z)(o.k.wrapper.docsPages, o.k.page.docsDocPage, e.versionMetadata.className), "object-key-init")
      }, a.createElement(s.q, {
        version: cc11001100_hook("version", t, "object-key-init")
      }, a.createElement(d.b, {
        name: cc11001100_hook("name", m, "object-key-init"),
        items: cc11001100_hook("items", u, "object-key-init")
      }, a.createElement(pe, null, i)))));
    }
  },
  62885: function (e, t, n) {
    n.d(t, {
      E: function () {
        return i;
      },
      q: function () {
        return o;
      }
    });
    var a = cc11001100_hook("a", n(27378), "var-init"),
        l = cc11001100_hook("l", n(13879), "var-init");
    const r = cc11001100_hook("r", a.createContext(null), "var-init");

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        version: n
      } = cc11001100_hook("", e, "var-init");
      return a.createElement(r.Provider, {
        value: cc11001100_hook("value", n, "object-key-init")
      }, t);
    }

    function i() {
      const e = cc11001100_hook("e", (0, a.useContext)(r), "var-init");
      if (null === e) throw new l.i6("DocsVersionProvider");
      return e;
    }
  },
  94525: function (e, t, n) {
    n.r(t);
    var a = cc11001100_hook("a", n(27378), "var-init"),
        l = cc11001100_hook("l", n(92358), "var-init"),
        r = cc11001100_hook("r", n(7419), "var-init");
    t.default = cc11001100_hook("t.default", function () {
      return a.createElement(l.Z, {
        title: cc11001100_hook("title", (0, r.I)({
          id: cc11001100_hook("id", "theme.NotFound.title", "object-key-init"),
          message: cc11001100_hook("message", "Page Not Found", "object-key-init")
        }), "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", "error-page", "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", "error-message", "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", " error-message-container container", "object-key-init")
      }, a.createElement("span", null, "404 "), a.createElement("p", null, "Page Not Found.")))));
    }, "assign");
  }
}]);