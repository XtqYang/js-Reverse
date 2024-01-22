"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[1688], {
  63889: function (e, t, n) {
    n.r(t), n.d(t, {
      default: function () {
        return Z;
      }
    });
    var l = cc11001100_hook("l", n(27378), "var-init"),
        a = cc11001100_hook("a", n(41191), "var-init"),
        s = cc11001100_hook("s", n(92358), "var-init"),
        c = cc11001100_hook("c", n(89939), "var-init"),
        r = cc11001100_hook("r", n(7419), "var-init"),
        o = cc11001100_hook("o", n(59163), "var-init"),
        i = cc11001100_hook("i", n(89230), "var-init"),
        p = cc11001100_hook("p", n(2349), "var-init");
    const m = cc11001100_hook("m", {
      a: cc11001100_hook("a", e => {
        let {
          node: t,
          ...n
        } = cc11001100_hook("", e, "var-init");
        return l.createElement(a.Z, n);
      }, "object-key-init"),
      pre: cc11001100_hook("pre", e => {
        let {
          node: t,
          ...n
        } = cc11001100_hook("", e, "var-init");
        const a = cc11001100_hook("a", n.children[0], "var-init");
        return "code" === a.type ? l.createElement(i.Z, a.props) : l.createElement("pre", n);
      }, "object-key-init")
    }, "var-init");

    function u(e) {
      cc11001100_hook("e", e, "function-parameter");
      let {
        children: t
      } = cc11001100_hook("", e, "var-init");
      const n = cc11001100_hook("n", function (e) {
        var t;
        return (null == e ? void 0 : e.type) === r.Z ? (0, r.I)({
          id: cc11001100_hook("id", e.props.id, "object-key-init"),
          message: cc11001100_hook("message", null == e || null == (t = cc11001100_hook("t", e.props, "assign")) ? void 0 : t.children, "object-key-init")
        }) : e;
      }(t), "var-init");
      return l.createElement("div", null, l.createElement("span", null, l.createElement(o.D, {
        components: cc11001100_hook("components", m, "object-key-init"),
        rehypePlugins: cc11001100_hook("rehypePlugins", [p.Z], "object-key-init")
      }, n)));
    }

    const d = cc11001100_hook("d", () => l.createElement("div", {
      className: cc11001100_hook("className", "page-header text-center", "object-key-init")
    }, l.createElement("h1", null, l.createElement(r.Z, {
      id: cc11001100_hook("id", "setupPage.header", "object-key-init"),
      description: cc11001100_hook("description", "setup page - header", "object-key-init")
    }, "Using Babel")), l.createElement("p", null, l.createElement(r.Z, {
      id: cc11001100_hook("id", "setupPage.headerDesc", "object-key-init"),
      description: cc11001100_hook("description", "setup page - header desc", "object-key-init")
    }, "How to use Babel with your tool of choice."))), "var-init"),
          E = cc11001100_hook("E", e => {
      const {
        items: t,
        name: n
      } = cc11001100_hook("", e.types, "var-init"),
            {
        activeTool: s
      } = cc11001100_hook("", e, "var-init"),
            c = cc11001100_hook("c", Object.keys(t).map((n, c) => {
        const r = cc11001100_hook("r", "button button--secondary" + (n === s ? " button--active" : ""), "var-init");
        return l.createElement(a.Z, {
          key: cc11001100_hook("key", c, "object-key-init"),
          href: cc11001100_hook("href", "#installation", "object-key-init"),
          className: cc11001100_hook("className", r, "object-key-init"),
          onClick: cc11001100_hook("onClick", () => e.onSelectTool(n), "object-key-init")
        }, t[n]);
      }), "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", "tools-group", "object-key-init")
      }, l.createElement("h5", null, n), l.createElement("div", {
        className: cc11001100_hook("className", "button-group", "object-key-init"),
        style: {
          display: cc11001100_hook("display", "flex", "object-key-init"),
          flexWrap: cc11001100_hook("flexWrap", "wrap", "object-key-init")
        }
      }, c));
    }, "var-init"),
          g = cc11001100_hook("g", e => {
      const {
        siteConfig: {
          customFields: t
        }
      } = cc11001100_hook("", (0, c.Z)(), "var-init"),
            n = cc11001100_hook("n", t.tools.map((t, n) => l.createElement(E, {
        key: cc11001100_hook("key", n, "object-key-init"),
        types: cc11001100_hook("types", t, "object-key-init"),
        onSelectTool: cc11001100_hook("onSelectTool", e.onSelectTool, "object-key-init"),
        activeTool: cc11001100_hook("activeTool", e.activeTool, "object-key-init")
      })), "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", "step-setup", "object-key-init")
      }, l.createElement("h2", null, l.createElement("span", {
        className: cc11001100_hook("className", "step-no", "object-key-init")
      }, "1"), l.createElement(r.Z, {
        id: cc11001100_hook("id", "setupPage.step1", "object-key-init"),
        description: cc11001100_hook("description", "setup page - step 1", "object-key-init")
      }, "Choose your tool (try CLI)")), n);
    }, "var-init"),
          h = cc11001100_hook("h", e => {
      const {
        siteConfig: {
          customFields: t
        }
      } = cc11001100_hook("", (0, c.Z)(), "var-init"),
            n = cc11001100_hook("n", t.toolsMD.filter(t => t.title === e.tool).map((t, n) => l.createElement("div", {
        className: cc11001100_hook("className", "items", "object-key-init"),
        "data-title": cc11001100_hook("data-title", t.title, "object-key-init"),
        key: cc11001100_hook("key", n, "object-key-init")
      }, l.createElement(u, null, t[e.name]))), "var-init"),
            a = cc11001100_hook("a", l.createElement(r.Z, {
        id: cc11001100_hook("id", "setupPage.step2", "object-key-init"),
        description: cc11001100_hook("description", "setup page - step 2", "object-key-init")
      }, "Installation"), "var-init"),
            s = cc11001100_hook("s", l.createElement(r.Z, {
        id: cc11001100_hook("id", "setupPage.step3", "object-key-init"),
        description: cc11001100_hook("description", "setup page - step 3", "object-key-init")
      }, "Usage"), "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", "step-setup", "object-key-init"),
        hidden: cc11001100_hook("hidden", !e.tool, "object-key-init")
      }, l.createElement("h2", {
        id: cc11001100_hook("id", "install" === e.name ? "installation" : "", "object-key-init")
      }, l.createElement("span", {
        className: cc11001100_hook("className", "step-no", "object-key-init")
      }, e.number), "install" === e.name ? a : s), n);
    }, "var-init"),
          v = cc11001100_hook("v", e => {
      const {
        siteConfig: {
          customFields: t
        }
      } = cc11001100_hook("", (0, c.Z)(), "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", "step-setup", "object-key-init"),
        hidden: cc11001100_hook("hidden", e.hidden, "object-key-init")
      }, l.createElement("h2", null, l.createElement("span", {
        className: cc11001100_hook("className", "step-no", "object-key-init")
      }, "4"), l.createElement(r.Z, {
        id: cc11001100_hook("id", "setupPage.step4_1", "object-key-init"),
        description: cc11001100_hook("description", "setup page - step 4 one", "object-key-init")
      }, "Create"), " ", l.createElement("code", null, "babel.config.json"), " ", l.createElement(r.Z, {
        id: cc11001100_hook("id", "setupPage.step4_2", "object-key-init"),
        description: cc11001100_hook("description", "setup page - step 4 two", "object-key-init")
      }, "configuration file")), l.createElement(u, null, t.setupBabelrc));
    }, "var-init"),
          f = cc11001100_hook("f", () => {
      const [e, t] = cc11001100_hook("", (0, l.useState)(), "var-init");
      return l.createElement("div", {
        className: cc11001100_hook("className", "container paddingBottom", "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", "step", "object-key-init")
      }, l.createElement(g, {
        onSelectTool: cc11001100_hook("onSelectTool", t, "object-key-init"),
        activeTool: cc11001100_hook("activeTool", e, "object-key-init")
      }), l.createElement(h, {
        name: cc11001100_hook("name", "install", "object-key-init"),
        number: cc11001100_hook("number", "2", "object-key-init"),
        tool: cc11001100_hook("tool", e, "object-key-init")
      }), l.createElement(h, {
        name: cc11001100_hook("name", "usage", "object-key-init"),
        number: cc11001100_hook("number", "3", "object-key-init"),
        tool: cc11001100_hook("tool", e, "object-key-init")
      }), l.createElement(v, {
        hidden: cc11001100_hook("hidden", void 0 === e, "object-key-init")
      })));
    }, "var-init");
    var Z = cc11001100_hook("Z", () => l.createElement(s.Z, null, l.createElement("div", {
      className: cc11001100_hook("className", "mainContainer", "object-key-init")
    }, l.createElement(d, null), l.createElement(f, null))), "var-init");
  }
}]);