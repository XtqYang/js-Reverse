"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[1069], {
  88038: function (e, t, r) {
    r.r(t);
    var a = cc11001100_hook("a", r(27378), "var-init"),
        m = cc11001100_hook("m", r(89939), "var-init"),
        n = cc11001100_hook("n", r(92358), "var-init");
    const l = cc11001100_hook("l", () => a.createElement("div", {
      className: cc11001100_hook("className", "mainContainer", "object-key-init")
    }, a.createElement("div", {
      className: cc11001100_hook("className", "page-header text-center", "object-key-init")
    }, a.createElement("h1", null, "Meet the Team"), a.createElement("p", null, a.createElement("a", {
      href: cc11001100_hook("href", "https://github.com/babel/website/blob/main/website/data/team.yml", "object-key-init"),
      target: cc11001100_hook("target", "_blank", "object-key-init"),
      rel: cc11001100_hook("rel", "noreferrer noopener", "object-key-init")
    }, "Edit this page")))), "var-init"),
          s = cc11001100_hook("s", e => {
      if (e.orgs) {
        const t = cc11001100_hook("t", e.orgs.map(e => a.createElement("a", {
          key: cc11001100_hook("key", e, "object-key-init"),
          href: cc11001100_hook("href", "https://www.github.com/" + e, "object-key-init"),
          target: cc11001100_hook("target", "_blank", "object-key-init"),
          rel: cc11001100_hook("rel", "noreferrer noopener", "object-key-init")
        }, a.createElement("div", {
          className: cc11001100_hook("className", "org_image", "object-key-init")
        }, a.createElement("img", {
          title: cc11001100_hook("title", e, "object-key-init"),
          alt: cc11001100_hook("alt", e, "object-key-init"),
          src: cc11001100_hook("src", "https://avatars.githubusercontent.com/" + e, "object-key-init")
        })))), "var-init");
        return a.createElement("div", {
          className: cc11001100_hook("className", "member_orgs", "object-key-init")
        }, t);
      }

      return null;
    }, "var-init"),
          c = cc11001100_hook("c", e => {
      if (e.areas) {
        const t = cc11001100_hook("t", e.areas.map(e => a.createElement("a", {
          key: cc11001100_hook("key", e, "object-key-init"),
          href: cc11001100_hook("href", "https://www.github.com/babel/" + e, "object-key-init"),
          target: cc11001100_hook("target", "_blank", "object-key-init"),
          rel: cc11001100_hook("rel", "noreferrer noopener", "object-key-init")
        }, "\ud83c\udf10")), "var-init");
        return a.createElement("div", {
          className: cc11001100_hook("className", "member_orgs", "object-key-init")
        }, t);
      }

      return null;
    }, "var-init"),
          i = cc11001100_hook("i", e => e.text ? a.createElement("div", {
      className: cc11001100_hook("className", "media-link " + e.icon, "object-key-init")
    }, a.createElement("a", {
      href: cc11001100_hook("href", e.url, "object-key-init"),
      target: cc11001100_hook("target", "_blank", "object-key-init"),
      rel: cc11001100_hook("rel", "noreferrer noopener", "object-key-init")
    }, e.text)) : null, "var-init"),
          o = cc11001100_hook("o", e => {
      let {
        member: t
      } = cc11001100_hook("", e, "var-init");
      const {
        github: r,
        twitter: m,
        name: n,
        orgs: l,
        areas: o
      } = cc11001100_hook("", t, "var-init"),
            b = cc11001100_hook("b", "https://avatars.githubusercontent.com/" + r, "var-init"),
            u = cc11001100_hook("u", "https://twitter.com/" + m, "var-init"),
            E = cc11001100_hook("E", "https://github.com/" + r, "var-init");
      return a.createElement("div", {
        className: cc11001100_hook("className", "team_member", "object-key-init")
      }, a.createElement("div", {
        className: cc11001100_hook("className", "member_avatar", "object-key-init")
      }, a.createElement("img", {
        src: cc11001100_hook("src", b, "object-key-init"),
        height: cc11001100_hook("height", "80", "object-key-init"),
        width: cc11001100_hook("width", "80", "object-key-init"),
        alt: cc11001100_hook("alt", "{{name}}", "object-key-init")
      })), a.createElement("div", {
        className: cc11001100_hook("className", "member_info", "object-key-init")
      }, a.createElement("div", {
        style: {
          fontWeight: cc11001100_hook("fontWeight", 600, "object-key-init")
        }
      }, n), a.createElement(i, {
        icon: cc11001100_hook("icon", "github", "object-key-init"),
        url: cc11001100_hook("url", E, "object-key-init"),
        text: cc11001100_hook("text", r, "object-key-init")
      }), a.createElement(i, {
        icon: cc11001100_hook("icon", "twitter", "object-key-init"),
        url: cc11001100_hook("url", u, "object-key-init"),
        text: cc11001100_hook("text", m, "object-key-init")
      }), a.createElement(s, {
        orgs: cc11001100_hook("orgs", l, "object-key-init")
      }), a.createElement(c, {
        areas: cc11001100_hook("areas", o, "object-key-init")
      })));
    }, "var-init"),
          b = cc11001100_hook("b", e => a.createElement("div", null, a.createElement("h2", {
      className: cc11001100_hook("className", "member_type", "object-key-init")
    }, e.title), a.createElement("div", {
      className: cc11001100_hook("className", "member_block", "object-key-init")
    }, e.members.map(e => a.createElement(o, {
      key: cc11001100_hook("key", e.github, "object-key-init"),
      member: cc11001100_hook("member", e, "object-key-init")
    })))), "var-init");
    t.default = cc11001100_hook("t.default", () => {
      const {
        siteConfig: e
      } = cc11001100_hook("", (0, m.Z)(), "var-init"),
            {
        customFields: {
          team: t
        }
      } = cc11001100_hook("", e, "var-init");
      return a.createElement(n.Z, {
        title: cc11001100_hook("title", null == e ? void 0 : e.title, "object-key-init"),
        description: cc11001100_hook("description", null == e ? void 0 : e.tagline, "object-key-init")
      }, a.createElement(l, null), a.createElement("div", {
        className: cc11001100_hook("className", "wrapper", "object-key-init")
      }, a.createElement(b, {
        title: cc11001100_hook("title", "Core Maintainers", "object-key-init"),
        members: cc11001100_hook("members", t.core, "object-key-init")
      }), a.createElement(b, {
        title: cc11001100_hook("title", "Team Members", "object-key-init"),
        members: cc11001100_hook("members", t.members, "object-key-init")
      }), a.createElement(b, {
        title: cc11001100_hook("title", "Summer of Code", "object-key-init"),
        members: cc11001100_hook("members", t.summerOfCode, "object-key-init")
      }), a.createElement(b, {
        title: cc11001100_hook("title", "NonHuman Members", "object-key-init"),
        members: cc11001100_hook("members", t.nonHumanMember, "object-key-init")
      }), a.createElement(b, {
        title: cc11001100_hook("title", "Alumni", "object-key-init"),
        members: cc11001100_hook("members", t.alumnus, "object-key-init")
      })));
    }, "assign");
  }
}]);