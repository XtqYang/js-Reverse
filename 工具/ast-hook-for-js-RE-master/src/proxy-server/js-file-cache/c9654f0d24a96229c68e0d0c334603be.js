"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[5217], {
  20127: function (e, t, a) {
    a.r(t);
    var l = cc11001100_hook("l", a(27378), "var-init"),
        s = cc11001100_hook("s", a(92358), "var-init"),
        n = cc11001100_hook("n", a(89939), "var-init");
    t.default = cc11001100_hook("t.default", () => {
      const {
        siteConfig: {
          customFields: e
        }
      } = cc11001100_hook("", (0, n.Z)(), "var-init"),
            t = cc11001100_hook("t", e.users.map((e, t) => l.createElement("div", {
        className: cc11001100_hook("className", "babel-user", "object-key-init"),
        key: cc11001100_hook("key", t, "object-key-init")
      }, l.createElement("a", {
        className: cc11001100_hook("className", "babel-user-link", "object-key-init"),
        href: cc11001100_hook("href", e.infoLink, "object-key-init")
      }, l.createElement("img", {
        className: cc11001100_hook("className", "babel-user-logo", "object-key-init"),
        src: cc11001100_hook("src", e.image, "object-key-init"),
        title: cc11001100_hook("title", e.caption, "object-key-init")
      })))), "var-init");
      return l.createElement(s.Z, null, l.createElement("div", {
        className: cc11001100_hook("className", "mainContainer", "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", "container paddingBottom", "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", "wrapper", "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", "showcaseSection", "object-key-init")
      }, l.createElement("div", {
        className: cc11001100_hook("className", "prose", "object-key-init")
      }, l.createElement("h1", null, "See who is using Babel"), l.createElement("p", null, "Logos are submitted by company and project representatives. These companies may or may not be using Babel on their main web properties, but they are definitely using it somewhere in their organizations \ud83d\ude42")), l.createElement("hr", null), l.createElement("div", {
        className: cc11001100_hook("className", "logos", "object-key-init")
      }, t), l.createElement("hr", null), l.createElement("div", {
        className: cc11001100_hook("className", "prose", "object-key-init")
      }, l.createElement("p", null, "Are you using this project? Please submit a logo of 500x200 (2.5x1) run through", " ", l.createElement("a", {
        href: cc11001100_hook("href", "https://jakearchibald.github.io/svgomg/", "object-key-init")
      }, "SVGO")), l.createElement("p", null, "And give us a shout on what you love about Babel!"), l.createElement("br", null), l.createElement("a", {
        href: cc11001100_hook("href", "https://github.com/babel/website/edit/main/website/data/users.yml", "object-key-init"),
        className: cc11001100_hook("className", "button", "object-key-init")
      }, "Submit a Pull Request!")))))));
    }, "assign");
  }
}]);