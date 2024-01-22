"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[7918], {
  48269: function (e, t, n) {
    n.r(t), n.d(t, {
      default: function () {
        return ie;
      }
    });
    var a = cc11001100_hook("a", n(27378), "var-init"),
        l = cc11001100_hook("l", n(9237), "var-init"),
        r = cc11001100_hook("r", n(13879), "var-init");
    const o = cc11001100_hook("o", a.createContext(null), "var-init");

    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        content: n
      } = cc11001100_hook("", e, "var-init");
      const l = cc11001100_hook("l", function (e) {
        return (0, a.useMemo)(() => ({
          metadata: cc11001100_hook("metadata", e.metadata, "object-key-init"),
          frontMatter: cc11001100_hook("frontMatter", e.frontMatter, "object-key-init"),
          assets: cc11001100_hook("assets", e.assets, "object-key-init"),
          contentTitle: cc11001100_hook("contentTitle", e.contentTitle, "object-key-init"),
          toc: cc11001100_hook("toc", e.toc, "object-key-init")
        }), [e]);
      }(n), "var-init");
      return a.createElement(o.Provider, {
        value: cc11001100_hook("value", l, "object-key-init")
      }, t);
    }

    function c() {
      const e = cc11001100_hook("e", (0, a.useContext)(o), "var-init");
      if (null === e) throw new r.i6("DocProvider");
      return e;
    }

    function i() {
      var e;
      const {
        metadata: t,
        frontMatter: n,
        assets: r
      } = cc11001100_hook("", c(), "var-init");
      return a.createElement(l.d, {
        title: cc11001100_hook("title", t.title, "object-key-init"),
        description: cc11001100_hook("description", t.description, "object-key-init"),
        keywords: cc11001100_hook("keywords", n.keywords, "object-key-init"),
        image: cc11001100_hook("image", null != (e = cc11001100_hook("e", r.image, "assign")) ? e : n.image, "object-key-init")
      });
    }

    var d = cc11001100_hook("d", n(38944), "var-init"),
        m = cc11001100_hook("m", n(7980), "var-init"),
        u = cc11001100_hook("u", n(25773), "var-init"),
        v = cc11001100_hook("v", n(7419), "var-init"),
        b = cc11001100_hook("b", n(99808), "var-init");

    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      const {
        previous: t,
        next: n
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("nav", {
        className: cc11001100_hook("className", "pagination-nav docusaurus-mt-lg", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", (0, v.I)({
          id: cc11001100_hook("id", "theme.docs.paginator.navAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Docs pages", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the docs pagination", "object-key-init")
        }), "object-key-init")
      }, t && a.createElement(b.Z, (0, u.Z)({}, t, {
        subLabel: cc11001100_hook("subLabel", a.createElement(v.Z, {
          id: cc11001100_hook("id", "theme.docs.paginator.previous", "object-key-init"),
          description: cc11001100_hook("description", "The label used to navigate to the previous doc", "object-key-init")
        }, "Previous"), "object-key-init")
      })), n && a.createElement(b.Z, (0, u.Z)({}, n, {
        subLabel: cc11001100_hook("subLabel", a.createElement(v.Z, {
          id: cc11001100_hook("id", "theme.docs.paginator.next", "object-key-init"),
          description: cc11001100_hook("description", "The label used to navigate to the next doc", "object-key-init")
        }, "Next"), "object-key-init"),
        isNext: cc11001100_hook("isNext", !0, "object-key-init")
      })));
    }

    function f() {
      const {
        metadata: e
      } = cc11001100_hook("", c(), "var-init");
      return a.createElement(p, {
        previous: cc11001100_hook("previous", e.previous, "object-key-init"),
        next: cc11001100_hook("next", e.next, "object-key-init")
      });
    }

    var h = cc11001100_hook("h", n(89939), "var-init"),
        E = cc11001100_hook("E", n(41191), "var-init"),
        g = cc11001100_hook("g", n(14924), "var-init"),
        L = cc11001100_hook("L", n(55854), "var-init"),
        C = cc11001100_hook("C", n(88072), "var-init"),
        N = cc11001100_hook("N", n(62885), "var-init");
    const k = cc11001100_hook("k", {
      unreleased: function (e) {
        let {
          siteTitle: t,
          versionMetadata: n
        } = cc11001100_hook("", e, "var-init");
        return a.createElement(v.Z, {
          id: cc11001100_hook("id", "theme.docs.versions.unreleasedVersionLabel", "object-key-init"),
          description: cc11001100_hook("description", "The label used to tell the user that he's browsing an unreleased doc version", "object-key-init"),
          values: {
            siteTitle: cc11001100_hook("siteTitle", t, "object-key-init"),
            versionLabel: cc11001100_hook("versionLabel", a.createElement("b", null, n.label), "object-key-init")
          }
        }, "This is unreleased documentation for {siteTitle} {versionLabel} version.");
      },
      unmaintained: function (e) {
        let {
          siteTitle: t,
          versionMetadata: n
        } = cc11001100_hook("", e, "var-init");
        return a.createElement(v.Z, {
          id: cc11001100_hook("id", "theme.docs.versions.unmaintainedVersionLabel", "object-key-init"),
          description: cc11001100_hook("description", "The label used to tell the user that he's browsing an unmaintained doc version", "object-key-init"),
          values: {
            siteTitle: cc11001100_hook("siteTitle", t, "object-key-init"),
            versionLabel: cc11001100_hook("versionLabel", a.createElement("b", null, n.label), "object-key-init")
          }
        }, "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.");
      }
    }, "var-init");

    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", k[e.versionMetadata.banner], "var-init");
      return a.createElement(t, e);
    }

    function Z(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        versionLabel: t,
        to: n,
        onClick: l
      } = cc11001100_hook("", e, "var-init");
      return a.createElement(v.Z, {
        id: cc11001100_hook("id", "theme.docs.versions.latestVersionSuggestionLabel", "object-key-init"),
        description: cc11001100_hook("description", "The label used to tell the user to check the latest version", "object-key-init"),
        values: {
          versionLabel: cc11001100_hook("versionLabel", t, "object-key-init"),
          latestVersionLink: cc11001100_hook("latestVersionLink", a.createElement("b", null, a.createElement(E.Z, {
            to: cc11001100_hook("to", n, "object-key-init"),
            onClick: cc11001100_hook("onClick", l, "object-key-init")
          }, a.createElement(v.Z, {
            id: cc11001100_hook("id", "theme.docs.versions.latestVersionLinkLabel", "object-key-init"),
            description: cc11001100_hook("description", "The label used for the latest version suggestion link label", "object-key-init")
          }, "latest version"))), "object-key-init")
        }
      }, "For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).");
    }

    function x(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t,
        versionMetadata: n
      } = cc11001100_hook("", e, "var-init");
      const {
        siteConfig: {
          title: l
        }
      } = cc11001100_hook("", (0, h.Z)(), "var-init"),
            {
        pluginId: r
      } = cc11001100_hook("", (0, g.gA)({
        failfast: cc11001100_hook("failfast", !0, "object-key-init")
      }), "var-init"),
            {
        savePreferredVersionName: o
      } = cc11001100_hook("", (0, C.J)(r), "var-init"),
            {
        latestDocSuggestion: s,
        latestVersionSuggestion: c
      } = cc11001100_hook("", (0, g.Jo)(r), "var-init"),
            i = cc11001100_hook("i", null != s ? s : (m = cc11001100_hook("m", c, "assign")).docs.find(e => e.id === m.mainDocId), "var-init");
      var m;
      return a.createElement("div", {
        className: cc11001100_hook("className", (0, d.Z)(t, L.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), "object-key-init"),
        role: cc11001100_hook("role", "alert", "object-key-init")
      }, a.createElement("div", null, a.createElement(_, {
        siteTitle: cc11001100_hook("siteTitle", l, "object-key-init"),
        versionMetadata: cc11001100_hook("versionMetadata", n, "object-key-init")
      })), a.createElement("div", {
        className: cc11001100_hook("className", "margin-top--md", "object-key-init")
      }, a.createElement(Z, {
        versionLabel: cc11001100_hook("versionLabel", c.label, "object-key-init"),
        to: cc11001100_hook("to", i.path, "object-key-init"),
        onClick: cc11001100_hook("onClick", () => o(c.name), "object-key-init")
      })));
    }

    function H(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t
      } = cc11001100_hook("", e, "var-init");
      const n = cc11001100_hook("n", (0, N.E)(), "var-init");
      return n.banner ? a.createElement(x, {
        className: cc11001100_hook("className", t, "object-key-init"),
        versionMetadata: cc11001100_hook("versionMetadata", n, "object-key-init")
      }) : null;
    }

    function T(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t
      } = cc11001100_hook("", e, "var-init");
      const n = cc11001100_hook("n", (0, N.E)(), "var-init");
      return n.badge ? a.createElement("span", {
        className: cc11001100_hook("className", (0, d.Z)(t, L.k.docs.docVersionBadge, "badge badge--secondary"), "object-key-init")
      }, a.createElement(v.Z, {
        id: cc11001100_hook("id", "theme.docs.versionBadge.label", "object-key-init"),
        values: {
          versionLabel: cc11001100_hook("versionLabel", n.label, "object-key-init")
        }
      }, "Version: {versionLabel}")) : null;
    }

    function U(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        lastUpdatedAt: t,
        formattedLastUpdatedAt: n
      } = cc11001100_hook("", e, "var-init");
      return a.createElement(v.Z, {
        id: cc11001100_hook("id", "theme.lastUpdated.atDate", "object-key-init"),
        description: cc11001100_hook("description", "The words used to describe on which date a page has been last updated", "object-key-init"),
        values: {
          date: cc11001100_hook("date", a.createElement("b", null, a.createElement("time", {
            dateTime: cc11001100_hook("dateTime", new Date(1e3 * t).toISOString(), "object-key-init")
          }, n)), "object-key-init")
        }
      }, " on {date}");
    }

    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        lastUpdatedBy: t
      } = cc11001100_hook("", e, "var-init");
      return a.createElement(v.Z, {
        id: cc11001100_hook("id", "theme.lastUpdated.byUser", "object-key-init"),
        description: cc11001100_hook("description", "The words used to describe by who the page has been last updated", "object-key-init"),
        values: {
          user: cc11001100_hook("user", a.createElement("b", null, t), "object-key-init")
        }
      }, " by {user}");
    }

    function w(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        lastUpdatedAt: t,
        formattedLastUpdatedAt: n,
        lastUpdatedBy: l
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("span", {
        className: cc11001100_hook("className", L.k.common.lastUpdated, "object-key-init")
      }, a.createElement(v.Z, {
        id: cc11001100_hook("id", "theme.lastUpdated.lastUpdatedAtBy", "object-key-init"),
        description: cc11001100_hook("description", "The sentence used to display when a page has been last updated, and by who", "object-key-init"),
        values: {
          atDate: cc11001100_hook("atDate", t && n ? a.createElement(U, {
            lastUpdatedAt: cc11001100_hook("lastUpdatedAt", t, "object-key-init"),
            formattedLastUpdatedAt: cc11001100_hook("formattedLastUpdatedAt", n, "object-key-init")
          }) : "", "object-key-init"),
          byUser: cc11001100_hook("byUser", l ? a.createElement(y, {
            lastUpdatedBy: cc11001100_hook("lastUpdatedBy", l, "object-key-init")
          }) : "", "object-key-init")
        }
      }, "Last updated{atDate}{byUser}"), !1);
    }

    var A = cc11001100_hook("A", n(17120), "var-init"),
        I = cc11001100_hook("I", n(45897), "var-init"),
        M = cc11001100_hook("M", {
      lastUpdated: cc11001100_hook("lastUpdated", "lastUpdated_pbO5", "object-key-init")
    }, "var-init");

    function B(e) {
      cc11001100_hook("e", e, "function-parameter");
      return a.createElement("div", {
        className: cc11001100_hook("className", (0, d.Z)(L.k.docs.docFooterTagsRow, "row margin-bottom--sm"), "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", "col", "object-key-init")
      }, a.createElement(I.Z, e)));
    }

    function O(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        editUrl: t,
        lastUpdatedAt: n,
        lastUpdatedBy: l,
        formattedLastUpdatedAt: r
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("div", {
        className: cc11001100_hook("className", (0, d.Z)(L.k.docs.docFooterEditMetaRow, "row"), "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", "col", "object-key-init")
      }, t && a.createElement(A.Z, {
        editUrl: cc11001100_hook("editUrl", t, "object-key-init")
      })), a.createElement("div", {
        className: cc11001100_hook("className", (0, d.Z)("col", M.lastUpdated), "object-key-init")
      }, (n || l) && a.createElement(w, {
        lastUpdatedAt: cc11001100_hook("lastUpdatedAt", n, "object-key-init"),
        formattedLastUpdatedAt: cc11001100_hook("formattedLastUpdatedAt", r, "object-key-init"),
        lastUpdatedBy: cc11001100_hook("lastUpdatedBy", l, "object-key-init")
      })));
    }

    function S() {
      const {
        metadata: e
      } = cc11001100_hook("", c(), "var-init"),
            {
        editUrl: t,
        lastUpdatedAt: n,
        formattedLastUpdatedAt: l,
        lastUpdatedBy: r,
        tags: o
      } = cc11001100_hook("", e, "var-init"),
            s = cc11001100_hook("s", o.length > 0, "var-init"),
            i = cc11001100_hook("i", !!(t || n || r), "var-init");
      return s || i ? a.createElement("footer", {
        className: cc11001100_hook("className", (0, d.Z)(L.k.docs.docFooter, "docusaurus-mt-lg"), "object-key-init")
      }, s && a.createElement(B, {
        tags: cc11001100_hook("tags", o, "object-key-init")
      }), i && a.createElement(O, {
        editUrl: cc11001100_hook("editUrl", t, "object-key-init"),
        lastUpdatedAt: cc11001100_hook("lastUpdatedAt", n, "object-key-init"),
        lastUpdatedBy: cc11001100_hook("lastUpdatedBy", r, "object-key-init"),
        formattedLastUpdatedAt: cc11001100_hook("formattedLastUpdatedAt", l, "object-key-init")
      })) : null;
    }

    var V = cc11001100_hook("V", n(74229), "var-init"),
        P = cc11001100_hook("P", n(77614), "var-init"),
        D = cc11001100_hook("D", {
      tocCollapsibleButton: cc11001100_hook("tocCollapsibleButton", "tocCollapsibleButton_iI2p", "object-key-init"),
      tocCollapsibleButtonExpanded: cc11001100_hook("tocCollapsibleButtonExpanded", "tocCollapsibleButtonExpanded_cHjC", "object-key-init")
    }, "var-init");

    function R(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        collapsed: t,
        ...n
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("button", (0, u.Z)({
        type: cc11001100_hook("type", "button", "object-key-init")
      }, n, {
        className: cc11001100_hook("className", (0, d.Z)("clean-btn", D.tocCollapsibleButton, !t && D.tocCollapsibleButtonExpanded, n.className), "object-key-init")
      }), a.createElement(v.Z, {
        id: cc11001100_hook("id", "theme.TOCCollapsible.toggleButtonLabel", "object-key-init"),
        description: cc11001100_hook("description", "The label used by the button on the collapsible TOC component", "object-key-init")
      }, "On this page"));
    }

    var F = cc11001100_hook("F", {
      tocCollapsible: cc11001100_hook("tocCollapsible", "tocCollapsible_wXna", "object-key-init"),
      tocCollapsibleContent: cc11001100_hook("tocCollapsibleContent", "tocCollapsibleContent_vea0", "object-key-init"),
      tocCollapsibleExpanded: cc11001100_hook("tocCollapsibleExpanded", "tocCollapsibleExpanded_BbRn", "object-key-init")
    }, "var-init");

    function z(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        toc: t,
        className: n,
        minHeadingLevel: l,
        maxHeadingLevel: r
      } = cc11001100_hook("", e, "var-init");
      const {
        collapsed: o,
        toggleCollapsed: s
      } = cc11001100_hook("", (0, V.u)({
        initialState: cc11001100_hook("initialState", !0, "object-key-init")
      }), "var-init");
      return a.createElement("div", {
        className: cc11001100_hook("className", (0, d.Z)(F.tocCollapsible, !o && F.tocCollapsibleExpanded, n), "object-key-init")
      }, a.createElement(R, {
        collapsed: cc11001100_hook("collapsed", o, "object-key-init"),
        onClick: cc11001100_hook("onClick", s, "object-key-init")
      }), a.createElement(V.z, {
        lazy: cc11001100_hook("lazy", !0, "object-key-init"),
        className: cc11001100_hook("className", F.tocCollapsibleContent, "object-key-init"),
        collapsed: cc11001100_hook("collapsed", o, "object-key-init")
      }, a.createElement(P.Z, {
        toc: cc11001100_hook("toc", t, "object-key-init"),
        minHeadingLevel: cc11001100_hook("minHeadingLevel", l, "object-key-init"),
        maxHeadingLevel: cc11001100_hook("maxHeadingLevel", r, "object-key-init")
      })));
    }

    var j = cc11001100_hook("j", {
      tocMobile: cc11001100_hook("tocMobile", "tocMobile_Ojys", "object-key-init")
    }, "var-init");

    function q() {
      const {
        toc: e,
        frontMatter: t
      } = cc11001100_hook("", c(), "var-init");
      return a.createElement(z, {
        toc: cc11001100_hook("toc", e, "object-key-init"),
        minHeadingLevel: cc11001100_hook("minHeadingLevel", t.toc_min_heading_level, "object-key-init"),
        maxHeadingLevel: cc11001100_hook("maxHeadingLevel", t.toc_max_heading_level, "object-key-init"),
        className: cc11001100_hook("className", (0, d.Z)(L.k.docs.docTocMobile, j.tocMobile), "object-key-init")
      });
    }

    var G = cc11001100_hook("G", n(92388), "var-init");

    function J() {
      const {
        toc: e,
        frontMatter: t
      } = cc11001100_hook("", c(), "var-init");
      return a.createElement(G.Z, {
        toc: cc11001100_hook("toc", e, "object-key-init"),
        minHeadingLevel: cc11001100_hook("minHeadingLevel", t.toc_min_heading_level, "object-key-init"),
        maxHeadingLevel: cc11001100_hook("maxHeadingLevel", t.toc_max_heading_level, "object-key-init"),
        className: cc11001100_hook("className", L.k.docs.docTocDesktop, "object-key-init")
      });
    }

    var X = cc11001100_hook("X", n(18825), "var-init"),
        Q = cc11001100_hook("Q", n(1749), "var-init");

    function K(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t
      } = cc11001100_hook("", e, "var-init");
      const n = cc11001100_hook("n", function () {
        const {
          metadata: e,
          frontMatter: t,
          contentTitle: n
        } = cc11001100_hook("", c(), "var-init");
        return t.hide_title || void 0 !== n ? null : e.title;
      }(), "var-init");
      return a.createElement("div", {
        className: cc11001100_hook("className", (0, d.Z)(L.k.docs.docMarkdown, "markdown"), "object-key-init")
      }, n && a.createElement("header", null, a.createElement(X.Z, {
        as: cc11001100_hook("as", "h1", "object-key-init")
      }, n)), a.createElement(Q.Z, null, t));
    }

    var W = cc11001100_hook("W", n(87470), "var-init"),
        Y = cc11001100_hook("Y", n(76440), "var-init"),
        $ = cc11001100_hook("$", n(1847), "var-init");

    function ee(e) {
      cc11001100_hook("e", e, "function-parameter");
      return a.createElement("svg", (0, u.Z)({
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, e), a.createElement("path", {
        d: cc11001100_hook("d", "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z", "object-key-init"),
        fill: cc11001100_hook("fill", "currentColor", "object-key-init")
      }));
    }

    var te = cc11001100_hook("te", {
      breadcrumbHomeIcon: cc11001100_hook("breadcrumbHomeIcon", "breadcrumbHomeIcon_sfvy", "object-key-init")
    }, "var-init");

    function ne() {
      const e = cc11001100_hook("e", (0, $.Z)("/"), "var-init");
      return a.createElement("li", {
        className: cc11001100_hook("className", "breadcrumbs__item", "object-key-init")
      }, a.createElement(E.Z, {
        "aria-label": cc11001100_hook("aria-label", (0, v.I)({
          id: cc11001100_hook("id", "theme.docs.breadcrumbs.home", "object-key-init"),
          message: cc11001100_hook("message", "Home page", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the home page in the breadcrumbs", "object-key-init")
        }), "object-key-init"),
        className: cc11001100_hook("className", "breadcrumbs__link", "object-key-init"),
        href: cc11001100_hook("href", e, "object-key-init")
      }, a.createElement(ee, {
        className: cc11001100_hook("className", te.breadcrumbHomeIcon, "object-key-init")
      })));
    }

    var ae = cc11001100_hook("ae", {
      breadcrumbsContainer: cc11001100_hook("breadcrumbsContainer", "breadcrumbsContainer_T5ub", "object-key-init")
    }, "var-init");

    function le(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        href: n,
        isLast: l
      } = cc11001100_hook("", e, "var-init");
      const r = cc11001100_hook("r", "breadcrumbs__link", "var-init");
      return l ? a.createElement("span", {
        className: cc11001100_hook("className", r, "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "name", "object-key-init")
      }, t) : n ? a.createElement(E.Z, {
        className: cc11001100_hook("className", r, "object-key-init"),
        href: cc11001100_hook("href", n, "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "item", "object-key-init")
      }, a.createElement("span", {
        itemProp: cc11001100_hook("itemProp", "name", "object-key-init")
      }, t)) : a.createElement("span", {
        className: cc11001100_hook("className", r, "object-key-init")
      }, t);
    }

    function re(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t,
        active: n,
        index: l,
        addMicrodata: r
      } = cc11001100_hook("", e, "var-init");
      return a.createElement("li", (0, u.Z)({}, r && {
        itemScope: cc11001100_hook("itemScope", !0, "object-key-init"),
        itemProp: cc11001100_hook("itemProp", "itemListElement", "object-key-init"),
        itemType: cc11001100_hook("itemType", "https://schema.org/ListItem", "object-key-init")
      }, {
        className: cc11001100_hook("className", (0, d.Z)("breadcrumbs__item", {
          "breadcrumbs__item--active": cc11001100_hook("breadcrumbs__item--active", n, "object-key-init")
        }), "object-key-init")
      }), t, a.createElement("meta", {
        itemProp: cc11001100_hook("itemProp", "position", "object-key-init"),
        content: cc11001100_hook("content", String(l + 1), "object-key-init")
      }));
    }

    function oe() {
      const e = cc11001100_hook("e", (0, W.s1)(), "var-init"),
            t = cc11001100_hook("t", (0, Y.Ns)(), "var-init");
      return e ? a.createElement("nav", {
        className: cc11001100_hook("className", (0, d.Z)(L.k.docs.docBreadcrumbs, ae.breadcrumbsContainer), "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", (0, v.I)({
          id: cc11001100_hook("id", "theme.docs.breadcrumbs.navAriaLabel", "object-key-init"),
          message: cc11001100_hook("message", "Breadcrumbs", "object-key-init"),
          description: cc11001100_hook("description", "The ARIA label for the breadcrumbs", "object-key-init")
        }), "object-key-init")
      }, a.createElement("ul", {
        className: cc11001100_hook("className", "breadcrumbs", "object-key-init"),
        itemScope: cc11001100_hook("itemScope", !0, "object-key-init"),
        itemType: cc11001100_hook("itemType", "https://schema.org/BreadcrumbList", "object-key-init")
      }, t && a.createElement(ne, null), e.map((t, n) => {
        const l = cc11001100_hook("l", n === e.length - 1, "var-init");
        return a.createElement(re, {
          key: cc11001100_hook("key", n, "object-key-init"),
          active: cc11001100_hook("active", l, "object-key-init"),
          index: cc11001100_hook("index", n, "object-key-init"),
          addMicrodata: cc11001100_hook("addMicrodata", !!t.href, "object-key-init")
        }, a.createElement(le, {
          href: cc11001100_hook("href", t.href, "object-key-init"),
          isLast: cc11001100_hook("isLast", l, "object-key-init")
        }, t.label));
      }))) : null;
    }

    var se = cc11001100_hook("se", {
      docItemContainer: cc11001100_hook("docItemContainer", "docItemContainer_tjFy", "object-key-init"),
      docItemCol: cc11001100_hook("docItemCol", "docItemCol_Qr34", "object-key-init")
    }, "var-init");

    function ce(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t
      } = cc11001100_hook("", e, "var-init");
      const n = cc11001100_hook("n", function () {
        const {
          frontMatter: e,
          toc: t
        } = cc11001100_hook("", c(), "var-init"),
              n = cc11001100_hook("n", (0, m.i)(), "var-init"),
              l = cc11001100_hook("l", e.hide_table_of_contents, "var-init"),
              r = cc11001100_hook("r", !l && t.length > 0, "var-init");
        return {
          hidden: cc11001100_hook("hidden", l, "object-key-init"),
          mobile: cc11001100_hook("mobile", r ? a.createElement(q, null) : void 0, "object-key-init"),
          desktop: cc11001100_hook("desktop", !r || "desktop" !== n && "ssr" !== n ? void 0 : a.createElement(J, null), "object-key-init")
        };
      }(), "var-init");
      return a.createElement("div", {
        className: cc11001100_hook("className", "row", "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", (0, d.Z)("col", !n.hidden && se.docItemCol), "object-key-init")
      }, a.createElement(H, null), a.createElement("div", {
        className: cc11001100_hook("className", se.docItemContainer, "object-key-init")
      }, a.createElement("article", null, a.createElement(oe, null), a.createElement(T, null), n.mobile, a.createElement(K, null, t), a.createElement(S, null)), a.createElement(f, null))), n.desktop && a.createElement("div", {
        className: cc11001100_hook("className", "col col--3", "object-key-init")
      }, n.desktop));
    }

    function ie(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", "docs-doc-id-" + e.content.metadata.unversionedId, "var-init"),
            n = cc11001100_hook("n", e.content, "var-init");
      return a.createElement(s, {
        content: cc11001100_hook("content", e.content, "object-key-init")
      }, a.createElement(l.FG, {
        className: cc11001100_hook("className", t, "object-key-init")
      }, a.createElement(i, null), a.createElement(ce, null, a.createElement(n, null))));
    }
  },
  92388: function (e, t, n) {
    n.d(t, {
      Z: function () {
        return d;
      }
    });
    var a = cc11001100_hook("a", n(25773), "var-init"),
        l = cc11001100_hook("l", n(27378), "var-init"),
        r = cc11001100_hook("r", n(38944), "var-init"),
        o = cc11001100_hook("o", n(77614), "var-init"),
        s = cc11001100_hook("s", {
      tableOfContents: cc11001100_hook("tableOfContents", "tableOfContents_XG6w", "object-key-init"),
      docItemContainer: cc11001100_hook("docItemContainer", "docItemContainer_Tr6w", "object-key-init")
    }, "var-init");
    const c = cc11001100_hook("c", "table-of-contents__link toc-highlight", "var-init"),
          i = cc11001100_hook("i", "table-of-contents__link--active", "var-init");

    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        className: t,
        ...n
      } = cc11001100_hook("", e, "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", (0, r.Z)(s.tableOfContents, "thin-scrollbar", t), "object-key-init")
      }, l.createElement(o.Z, (0, a.Z)({}, n, {
        linkClassName: cc11001100_hook("linkClassName", c, "object-key-init"),
        linkActiveClassName: cc11001100_hook("linkActiveClassName", i, "object-key-init")
      })));
    }
  },
  77614: function (e, t, n) {
    n.d(t, {
      Z: function () {
        return b;
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

    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        toc: t,
        minHeadingLevel: n,
        maxHeadingLevel: a
      } = cc11001100_hook("", e, "var-init");
      return t.flatMap(e => {
        const t = cc11001100_hook("t", s({
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

    function i(e, t) {
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

    function d() {
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

    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", (0, l.useRef)(void 0), "var-init"),
            n = cc11001100_hook("n", d(), "var-init");
      (0, l.useEffect)(() => {
        if (!e) return () => {};
        const {
          linkClassName: a,
          linkActiveClassName: l,
          minHeadingLevel: r,
          maxHeadingLevel: o
        } = cc11001100_hook("", e, "var-init");

        function s() {
          const e = cc11001100_hook("e", function (e) {
            return Array.from(document.getElementsByClassName(e));
          }(a), "var-init"),
                s = cc11001100_hook("s", function (e) {
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
                c = cc11001100_hook("c", i(s, {
            anchorTopOffset: cc11001100_hook("anchorTopOffset", n.current, "object-key-init")
          }), "var-init"),
                d = cc11001100_hook("d", e.find(e => c && c.id === function (e) {
            return decodeURIComponent(e.href.substring(e.href.indexOf("#") + 1));
          }(e)), "var-init");
          e.forEach(e => {
            !function (e, n) {
              n ? (t.current && t.current !== e && t.current.classList.remove(l), e.classList.add(l), t.current = cc11001100_hook("t.current", e, "assign")) : e.classList.remove(l);
            }(e, e === d);
          });
        }

        return document.addEventListener("scroll", s), document.addEventListener("resize", s), s(), () => {
          document.removeEventListener("scroll", s), document.removeEventListener("resize", s);
        };
      }, [e, n]);
    }

    function u(e) {
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
      }), l.createElement(u, {
        isChild: cc11001100_hook("isChild", !0, "object-key-init"),
        toc: cc11001100_hook("toc", e.children, "object-key-init"),
        className: cc11001100_hook("className", n, "object-key-init"),
        linkClassName: cc11001100_hook("linkClassName", a, "object-key-init")
      })))) : null;
    }

    var v = cc11001100_hook("v", l.memo(u), "var-init");

    function b(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        toc: t,
        className: n = "table-of-contents table-of-contents__left-border",
        linkClassName: c = "table-of-contents__link",
        linkActiveClassName: i,
        minHeadingLevel: d,
        maxHeadingLevel: u,
        ...b
      } = cc11001100_hook("", e, "var-init");
      const p = cc11001100_hook("p", (0, r.L)(), "var-init"),
            f = cc11001100_hook("f", null != d ? d : p.tableOfContents.minHeadingLevel, "var-init"),
            h = cc11001100_hook("h", null != u ? u : p.tableOfContents.maxHeadingLevel, "var-init"),
            E = cc11001100_hook("E", function (e) {
        let {
          toc: t,
          minHeadingLevel: n,
          maxHeadingLevel: a
        } = cc11001100_hook("", e, "var-init");
        return (0, l.useMemo)(() => s({
          toc: cc11001100_hook("toc", o(t), "object-key-init"),
          minHeadingLevel: cc11001100_hook("minHeadingLevel", n, "object-key-init"),
          maxHeadingLevel: cc11001100_hook("maxHeadingLevel", a, "object-key-init")
        }), [t, n, a]);
      }({
        toc: cc11001100_hook("toc", t, "object-key-init"),
        minHeadingLevel: cc11001100_hook("minHeadingLevel", f, "object-key-init"),
        maxHeadingLevel: cc11001100_hook("maxHeadingLevel", h, "object-key-init")
      }), "var-init");
      return m((0, l.useMemo)(() => {
        if (c && i) return {
          linkClassName: cc11001100_hook("linkClassName", c, "object-key-init"),
          linkActiveClassName: cc11001100_hook("linkActiveClassName", i, "object-key-init"),
          minHeadingLevel: cc11001100_hook("minHeadingLevel", f, "object-key-init"),
          maxHeadingLevel: cc11001100_hook("maxHeadingLevel", h, "object-key-init")
        };
      }, [c, i, f, h])), l.createElement(v, (0, a.Z)({
        toc: cc11001100_hook("toc", E, "object-key-init"),
        className: cc11001100_hook("className", n, "object-key-init"),
        linkClassName: cc11001100_hook("linkClassName", c, "object-key-init")
      }, b));
    }
  },
  62885: function (e, t, n) {
    n.d(t, {
      E: function () {
        return s;
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

    function s() {
      const e = cc11001100_hook("e", (0, a.useContext)(r), "var-init");
      if (null === e) throw new l.i6("DocsVersionProvider");
      return e;
    }
  }
}]);