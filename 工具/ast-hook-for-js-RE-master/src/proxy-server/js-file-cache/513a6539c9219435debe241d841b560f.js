"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[6454], {
  69145: function (e, t, a) {
    a.r(t);
    var n = cc11001100_hook("n", a(27378), "var-init"),
        l = cc11001100_hook("l", a(89939), "var-init"),
        r = cc11001100_hook("r", a(92358), "var-init");
    const i = cc11001100_hook("i", e => n.createElement("div", {
      className: cc11001100_hook("className", "babel-videos", "object-key-init")
    }, n.createElement("div", {
      className: cc11001100_hook("className", "babel-video-play", "object-key-init")
    }, n.createElement("iframe", {
      src: cc11001100_hook("src", e.video.link, "object-key-init"),
      allowFullScreen: cc11001100_hook("allowFullScreen", !0, "object-key-init")
    })), n.createElement("div", {
      className: cc11001100_hook("className", "babel-video-block", "object-key-init")
    }, n.createElement("h4", {
      id: cc11001100_hook("id", "babel-video-title", "object-key-init")
    }, e.video.title), n.createElement(c, {
      video: cc11001100_hook("video", e.video, "object-key-init")
    }))), "var-init"),
          c = cc11001100_hook("c", e => {
      const t = cc11001100_hook("t", e.video.authors || [{
        name: cc11001100_hook("name", e.video.author, "object-key-init"),
        link: cc11001100_hook("link", e.video.author_link, "object-key-init")
      }], "var-init");
      return n.createElement("p", {
        className: cc11001100_hook("className", "text-muted", "object-key-init")
      }, " by ", n.createElement(o, {
        authors: cc11001100_hook("authors", t, "object-key-init")
      }), " at ", n.createElement(s, {
        event_link: cc11001100_hook("event_link", e.video.event_link, "object-key-init"),
        event: cc11001100_hook("event", e.video.event, "object-key-init")
      }), n.createElement("time", {
        dateTime: cc11001100_hook("dateTime", e.video.year, "object-key-init")
      }, " (" + e.video.year + ")"));
    }, "var-init"),
          o = cc11001100_hook("o", e => {
      const t = cc11001100_hook("t", e.authors.map(e => n.createElement(s, {
        author_link: cc11001100_hook("author_link", e.link, "object-key-init"),
        author: cc11001100_hook("author", e.name, "object-key-init"),
        key: cc11001100_hook("key", e.link, "object-key-init")
      })).reduce((e, t) => [e, " and ", t]), "var-init");
      return n.createElement("span", null, t);
    }, "var-init"),
          s = cc11001100_hook("s", e => {
      const t = cc11001100_hook("t", e.author_link || e.event_link, "var-init"),
            a = cc11001100_hook("a", e.author || e.event, "var-init");
      return n.createElement("a", {
        href: cc11001100_hook("href", t, "object-key-init"),
        target: cc11001100_hook("target", "_blank", "object-key-init"),
        rel: cc11001100_hook("rel", "noreferrer noopener", "object-key-init")
      }, a);
    }, "var-init");
    t.default = cc11001100_hook("t.default", () => {
      const {
        siteConfig: e
      } = cc11001100_hook("", (0, l.Z)(), "var-init"),
            {
        customFields: t
      } = cc11001100_hook("", e, "var-init"),
            a = cc11001100_hook("a", t.videos.map((e, t) => {
        const a = cc11001100_hook("a", e.items.sort((l = cc11001100_hook("l", "year", "assign"), function (e, t) {
          const a = cc11001100_hook("a", e[l], "var-init");
          return t[l] - a;
        })).map((e, t) => n.createElement(i, {
          key: cc11001100_hook("key", t, "object-key-init"),
          video: cc11001100_hook("video", e, "object-key-init")
        })), "var-init");
        var l;
        return n.createElement("div", {
          className: cc11001100_hook("className", "videos-container", "object-key-init"),
          key: cc11001100_hook("key", t, "object-key-init")
        }, n.createElement("h2", null, e.category), a);
      }), "var-init");
      return n.createElement(r.Z, {
        title: cc11001100_hook("title", null == e ? void 0 : e.title, "object-key-init"),
        description: cc11001100_hook("description", null == e ? void 0 : e.tagline, "object-key-init")
      }, n.createElement("div", {
        className: cc11001100_hook("className", "mainContainer", "object-key-init")
      }, n.createElement("div", {
        className: cc11001100_hook("className", "page-header text-center", "object-key-init")
      }, n.createElement("h1", null, "Videos"), n.createElement("p", {
        className: cc11001100_hook("className", "lead", "object-key-init")
      }, "Videos and podcasts about Babel and its underlying concepts.")), n.createElement("div", {
        className: cc11001100_hook("className", "wrapper", "object-key-init")
      }, " ", a)));
    }, "assign");
  }
}]);