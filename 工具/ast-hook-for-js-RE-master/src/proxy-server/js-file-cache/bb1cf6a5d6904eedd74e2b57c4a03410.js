var Storage = function (e, t, n) {
  var r = cc11001100_hook("r", this, "var-init");
  r.fileName = cc11001100_hook("r.fileName", e || "", "assign"), r.expiresDay = cc11001100_hook("r.expiresDay", t || 0, "assign"), r.isIE = cc11001100_hook("r.isIE", navigator.userAgent.indexOf("MSIE") != -1 && !window.opera, "assign"), r.isInit = cc11001100_hook("r.isInit", !1, "assign"), r.target = cc11001100_hook("r.target", document.documentElement, "assign"), r.type = cc11001100_hook("r.type", n || "json", "assign"), r.init();
};
Storage.prototype = cc11001100_hook("Storage.prototype", {
  init: function () {
    var e = cc11001100_hook("e", this, "var-init");
    try {
      !window.localStorage && e.isIE && (e.isInit || (document.documentElement.addBehavior("#default#userdata"), e.isInit = cc11001100_hook("e.isInit", !0, "assign")));
    } catch (t) {}
  },
  set: function (e, t, n) {
    var r = cc11001100_hook("r", this, "var-init");
    n = cc11001100_hook("n", n || r.type, "assign"), n == "json" && (t = cc11001100_hook("t", JSON.stringify(t), "assign"));
    try {
      if (window.localStorage) localStorage.setItem(e, t);else if (r.isIE) {
        var i = cc11001100_hook("i", r.target, "var-init"),
          s = cc11001100_hook("s", r.fileName, "var-init");
        i.load(s), i.setAttribute(e, t), i.expires = cc11001100_hook("i.expires", new Date(new Date().getTime() + r.expiresDay * 864e5).toUTCString(), "assign"), i.save(s);
      }
    } catch (o) {}
  },
  get: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init");
    t = cc11001100_hook("t", t || n.type, "assign");
    try {
      if (window.localStorage) return t == "json" ? JSON.parse(localStorage.getItem(e)) : localStorage.getItem(e);
      if (n.isIE) {
        var r = cc11001100_hook("r", n.target, "var-init"),
          i = cc11001100_hook("i", n.fileName, "var-init");
        try {
          return r.load(i), t == "json" ? JSON.parse(n.target.getAttribute(e)) : n.target.getAttribute(e);
        } catch (s) {
          return null;
        }
      }
    } catch (s) {}
  },
  remove: function (e) {
    var t = cc11001100_hook("t", this, "var-init");
    try {
      if (window.localStorage) localStorage.removeItem(e);else if (t.isIE) {
        var n = cc11001100_hook("n", t.target, "var-init"),
          r = cc11001100_hook("r", t.fileName, "var-init");
        n.load(r), n.removeAttribute(e), n.expires = cc11001100_hook("n.expires", new Date(new Date().getTime() - 1).toUTCString(), "assign"), n.save(r);
      }
    } catch (i) {}
  }
}, "assign"), typeof So == "object" && So.web && (So.web.storage = cc11001100_hook("So.web.storage", Storage, "assign")), function () {
  if (typeof window.monitor != "undefined") return;
  var e = cc11001100_hook("e", "V1.2.2(2012.8.7)", "var-init"),
    t = cc11001100_hook("t", "360.cn", "var-init"),
    n = cc11001100_hook("n", function (r, s) {
      var o = cc11001100_hook("o", document, "var-init"),
        u = cc11001100_hook("u", navigator, "var-init"),
        f = cc11001100_hook("f", r.screen, "var-init"),
        l = cc11001100_hook("l", document.domain.toLowerCase(), "var-init"),
        h = cc11001100_hook("h", u.userAgent.toLowerCase(), "var-init"),
        p = cc11001100_hook("p", {
          trim: function (e) {
            return e.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "");
          }
        }, "var-init"),
        d = cc11001100_hook("d", {
          on: function (e, t, n) {
            e.addEventListener ? e && e.addEventListener(t, n, !1) : e && e.attachEvent("on" + t, n);
          },
          parentNode: function (e, t, n) {
            n = cc11001100_hook("n", n || 5, "assign"), t = cc11001100_hook("t", t.toUpperCase(), "assign");
            while (e && n-- > 0) {
              if (e.tagName === t) return e;
              e = cc11001100_hook("e", e.parentNode, "assign");
            }
            return null;
          }
        }, "var-init"),
        v = cc11001100_hook("v", {
          fix: function (e) {
            if (!("target" in e)) {
              var t = cc11001100_hook("t", e.srcElement || e.target, "var-init");
              t && t.nodeType == 3 && (t = cc11001100_hook("t", t.parentNode, "assign")), e.target = cc11001100_hook("e.target", t, "assign");
            }
            return e;
          }
        }, "var-init"),
        m = cc11001100_hook("m", function () {
          function e(e) {
            cc11001100_hook("e", e, "function-parameter");
            return e != null && e.constructor != null ? Object.prototype.toString.call(e).slice(8, -1) : "";
          }
          return {
            isArray: function (t) {
              return e(t) == "Array";
            },
            isObject: function (e) {
              return e !== null && typeof e == "object";
            },
            mix: function (e, t, n) {
              for (i in t) if (n || !(e[i] || i in e)) e[i] = cc11001100_hook("e[i]", t[i], "assign");
              return e;
            },
            encodeURIJson: function (e) {
              var t = cc11001100_hook("t", [], "var-init");
              for (var n in e) {
                var r = cc11001100_hook("r", e[n], "var-init");
                if (typeof r == "undefined") continue;
                /^(password|pass|username)$/i.test(n) && (n = cc11001100_hook("n", "__key__", "assign"), r = cc11001100_hook("r", "__val__", "assign")), /(password|pass|username)=/i.test(e[n]) && (r = cc11001100_hook("r", "__val__", "assign")), t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
              }
              return t.join("&");
            }
          };
        }(), "var-init"),
        g = cc11001100_hook("g", {
          get: function (e) {
            var t,
              n = cc11001100_hook("n", new RegExp("(^| )" + e + "=([^;]*)(;|$)"), "var-init");
            return (t = cc11001100_hook("t", o.cookie.match(n), "assign")) ? unescape(t[2]) : "";
          },
          set: function (e, t, n) {
            n = cc11001100_hook("n", n || {}, "assign");
            var r = cc11001100_hook("r", n.expires, "var-init");
            typeof r == "number" && (r = cc11001100_hook("r", new Date(), "assign"), r.setTime(r.getTime() + n.expires)), o.cookie = cc11001100_hook("o.cookie", e + "=" + escape(t) + (r ? ";expires=" + r.toGMTString() : "") + (n.path ? ";path=" + n.path : "") + (n.domain ? "; domain=" + n.domain : ""), "assign");
          }
        }, "var-init"),
        y = cc11001100_hook("y", {
          getProject: function () {
            return "";
          },
          getReferrer: function () {
            return o.referrer;
          },
          getBrowser: function () {
            var e = cc11001100_hook("e", {
              "360se-ua": cc11001100_hook("360se-ua", "360se", "object-key-init"),
              TT: cc11001100_hook("TT", "tencenttraveler", "object-key-init"),
              Maxthon: cc11001100_hook("Maxthon", "maxthon", "object-key-init"),
              GreenBrowser: cc11001100_hook("GreenBrowser", "greenbrowser", "object-key-init"),
              Sogou: cc11001100_hook("Sogou", "se 1.x / se 2.x", "object-key-init"),
              TheWorld: cc11001100_hook("TheWorld", "theworld", "object-key-init")
            }, "var-init");
            for (i in e) if (h.indexOf(e[i]) > -1) return i;
            var t = cc11001100_hook("t", !1, "var-init");
            try {
              +external.twGetVersion(external.twGetSecurityID(r)).replace(/\./g, "") > 1013 && (t = cc11001100_hook("t", !0, "assign"));
            } catch (n) {}
            if (t) return "360se-noua";
            var s = cc11001100_hook("s", h.match(/(msie|chrome|safari|firefox|opera)/), "var-init");
            return s = cc11001100_hook("s", s ? s[0] : "", "assign"), s == "msie" && (s = cc11001100_hook("s", h.match(/msie[^;]+/), "assign")), s;
          },
          getLocation: function () {
            var e = cc11001100_hook("e", "", "var-init");
            try {
              e = cc11001100_hook("e", location.href, "assign");
            } catch (t) {
              e = cc11001100_hook("e", o.createElement("a"), "assign"), e.href = cc11001100_hook("e.href", "", "assign"), e = cc11001100_hook("e", e.href, "assign");
            }
            return e = cc11001100_hook("e", e.replace(/[?#].*$/, ""), "assign"), e = cc11001100_hook("e", /\.(s?htm|php)/.test(e) ? e : e.replace(/\/$/, "") + "/", "assign"), e;
          },
          getGuid: cc11001100_hook("getGuid", function () {
            function e(e) {
              cc11001100_hook("e", e, "function-parameter");
              var t = cc11001100_hook("t", 0, "var-init"),
                n = cc11001100_hook("n", 0, "var-init"),
                r = cc11001100_hook("r", e.length - 1, "var-init");
              for (r; r >= 0; r--) {
                var i = cc11001100_hook("i", parseInt(e.charCodeAt(r), 10), "var-init");
                t = cc11001100_hook("t", (t << 6 & 268435455) + i + (i << 14), "assign"), (n = cc11001100_hook("n", t & 266338304, "assign")) != 0 && (t ^= cc11001100_hook("t", n >> 21, "assign"));
              }
              return t;
            }
            function n() {
              var t = cc11001100_hook("t", [u.appName, u.version, u.language || u.browserLanguage, u.platform, h, f.width, "x", f.height, f.colorDepth, o.referrer].join(""), "var-init"),
                n = cc11001100_hook("n", t.length, "var-init"),
                i = cc11001100_hook("i", r.history.length, "var-init");
              while (i) t += cc11001100_hook("t", i-- ^ n++, "assign");
              return (Math.round(Math.random() * 2147483647) ^ e(t)) * 2147483647;
            }
            var i = cc11001100_hook("i", "__guid", "var-init"),
              s = cc11001100_hook("s", g.get(i), "var-init");
            if (!s) {
              s = cc11001100_hook("s", [e(o.domain), n(), +new Date() + Math.random() + Math.random()].join("."), "assign");
              var a = cc11001100_hook("a", {
                expires: cc11001100_hook("expires", 2592e7, "object-key-init"),
                path: cc11001100_hook("path", "/", "object-key-init"),
                domain: cc11001100_hook("domain", ".so.com", "object-key-init")
              }, "var-init");
              if (t) {
                var c = cc11001100_hook("c", "." + t, "var-init");
                if (l.indexOf(c) > 0 && l.lastIndexOf(c) == l.length - c.length || l == c) a.domain = cc11001100_hook("a.domain", c, "assign");
              }
              g.set(i, s, a);
            }
            return function () {
              return s;
            };
          }(), "object-key-init"),
          getCount: cc11001100_hook("getCount", function () {
            var e = cc11001100_hook("e", "count", "var-init"),
              t = cc11001100_hook("t", g.get(e), "var-init");
            return t = cc11001100_hook("t", (parseInt(t) || 0) + 1, "assign"), g.set(e, t, {
              expires: cc11001100_hook("expires", 864e5, "object-key-init"),
              path: cc11001100_hook("path", "/", "object-key-init")
            }), function () {
              return t;
            };
          }(), "object-key-init"),
          getFlashVer: cc11001100_hook("getFlashVer", function () {
            var e = cc11001100_hook("e", -1, "var-init");
            if (u.plugins && u.mimeTypes.length) {
              var t = cc11001100_hook("t", u.plugins["Shockwave Flash"], "var-init");
              t && t.description && (e = cc11001100_hook("e", t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0", "assign"));
            } else if (r.ActiveXObject && !r.opera) for (var n = cc11001100_hook("n", 16, "var-init"); n >= 2; n--) try {
              var i = cc11001100_hook("i", new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), "var-init");
              if (i) {
                var s = cc11001100_hook("s", i.GetVariable("$version"), "var-init");
                e = cc11001100_hook("e", s.replace(/WIN/g, "").replace(/,/g, "."), "assign");
              }
            } catch (o) {}
            return e = cc11001100_hook("e", parseInt(e, 10), "assign"), function () {
              return e;
            };
          }(), "object-key-init"),
          getContainerId: function (e) {
            var t = cc11001100_hook("t", E.areaIds, "var-init");
            if (t) {
              var n,
                r = cc11001100_hook("r", new RegExp("^(" + t.join("|") + ")$", "ig"), "var-init");
              while (e) {
                if (e.id && r.test(e.id)) return (e.getAttribute("data-desc") || e.id).substr(0, 100);
                e = cc11001100_hook("e", e.parentNode, "assign");
              }
            }
            return "";
          },
          getText: function (e) {
            return p.trim((e.getAttribute("text") || e.innerText || e.textContent || e.title || "").substr(0, 100));
          }
        }, "var-init"),
        w = cc11001100_hook("w", {
          getBase: function () {
            return {
              p: cc11001100_hook("p", y.getProject(), "object-key-init"),
              u: cc11001100_hook("u", y.getLocation(), "object-key-init"),
              id: cc11001100_hook("id", y.getGuid(), "object-key-init"),
              guid: cc11001100_hook("guid", y.getGuid(), "object-key-init")
            };
          },
          getTrack: function () {
            return {
              b: cc11001100_hook("b", y.getBrowser(), "object-key-init"),
              c: cc11001100_hook("c", y.getCount(), "object-key-init"),
              r: cc11001100_hook("r", y.getReferrer(), "object-key-init"),
              fl: cc11001100_hook("fl", y.getFlashVer(), "object-key-init")
            };
          },
          getClick: function (e) {
            e = cc11001100_hook("e", v.fix(e || event), "assign");
            var t = cc11001100_hook("t", e.target, "var-init"),
              n = cc11001100_hook("n", t.tagName, "var-init"),
              r = cc11001100_hook("r", y.getContainerId(t), "var-init");
            if (t.type != "submit") {
              if (n == "AREA") return {
                f: cc11001100_hook("f", t.href, "object-key-init"),
                c: cc11001100_hook("c", "area:" + t.parentNode.name, "object-key-init"),
                cId: cc11001100_hook("cId", r, "object-key-init")
              };
              var i, s;
              return n == "IMG" && (i = cc11001100_hook("i", t, "assign")), t = cc11001100_hook("t", d.parentNode(t, "A"), "assign"), t ? (s = cc11001100_hook("s", y.getText(t), "assign"), {
                f: cc11001100_hook("f", t.href, "object-key-init"),
                c: cc11001100_hook("c", s ? s : i.src.match(/[^\/]+$/), "object-key-init"),
                cId: cc11001100_hook("cId", r, "object-key-init")
              }) : !1;
            }
            var o = cc11001100_hook("o", d.parentNode(t, "FORM"), "var-init");
            if (o) {
              var u = cc11001100_hook("u", o.id || "", "var-init"),
                a = cc11001100_hook("a", t.id, "var-init"),
                f = cc11001100_hook("f", {
                  f: cc11001100_hook("f", o.action, "object-key-init"),
                  c: cc11001100_hook("c", "form:" + (o.name || u), "object-key-init"),
                  cId: cc11001100_hook("cId", r, "object-key-init")
                }, "var-init");
              if ((u == "search-form" || u == "searchForm") && (a == "searchBtn" || a == "search-btn")) {
                var l = cc11001100_hook("l", S("kw") || S("search-kw") || S("kw1"), "var-init");
                f.w = cc11001100_hook("f.w", l ? l.value : "", "assign");
              }
              return f;
            }
          },
          getKeydown: function (e) {
            e = cc11001100_hook("e", v.fix(e || event), "assign");
            if (e.keyCode != 13) return !1;
            var t = cc11001100_hook("t", e.target, "var-init"),
              n = cc11001100_hook("n", t.tagName, "var-init"),
              r = cc11001100_hook("r", y.getContainerId(t), "var-init");
            if (n == "INPUT") {
              var i = cc11001100_hook("i", d.parentNode(t, "FORM"), "var-init");
              if (i) {
                var s = cc11001100_hook("s", i.id || "", "var-init"),
                  o = cc11001100_hook("o", t.id, "var-init"),
                  u = cc11001100_hook("u", {
                    f: cc11001100_hook("f", i.action, "object-key-init"),
                    c: cc11001100_hook("c", "form:" + (i.name || s), "object-key-init"),
                    cId: cc11001100_hook("cId", r, "object-key-init")
                  }, "var-init");
                if (o == "kw" || o == "search-kw" || o == "kw1") u.w = cc11001100_hook("u.w", t.value, "assign");
                return u;
              }
            }
            return !1;
          }
        }, "var-init"),
        E = cc11001100_hook("E", {
          trackUrl: cc11001100_hook("trackUrl", null, "object-key-init"),
          clickUrl: cc11001100_hook("clickUrl", null, "object-key-init"),
          areaIds: cc11001100_hook("areaIds", null, "object-key-init")
        }, "var-init"),
        S = function (e) {
          return document.getElementById(e);
        };
      return {
        version: cc11001100_hook("version", e, "object-key-init"),
        util: cc11001100_hook("util", y, "object-key-init"),
        data: cc11001100_hook("data", w, "object-key-init"),
        config: cc11001100_hook("config", E, "object-key-init"),
        sendLog: cc11001100_hook("sendLog", function () {
          return r.__monitor_imgs = cc11001100_hook("r.__monitor_imgs", {}, "assign"), function (e) {
            var t = cc11001100_hook("t", "log_" + +new Date(), "var-init"),
              n = cc11001100_hook("n", r.__monitor_imgs[t] = cc11001100_hook("r.__monitor_imgs[t]", new Image(), "assign"), "var-init");
            n.onload = cc11001100_hook("n.onload", n.onerror = cc11001100_hook("n.onerror", function () {
              r.__monitor_imgs[t] = cc11001100_hook("r.__monitor_imgs[t]", null, "assign"), delete r.__monitor_imgs[t];
            }, "assign"), "assign"), n.src = cc11001100_hook("n.src", e, "assign");
          };
        }(), "object-key-init"),
        buildLog: cc11001100_hook("buildLog", function () {
          var e = cc11001100_hook("e", "", "var-init");
          return function (t, n) {
            if (t === !1) return;
            t = cc11001100_hook("t", t || {}, "assign");
            var r = cc11001100_hook("r", w.getBase(), "var-init");
            t = cc11001100_hook("t", m.mix(t, r, !0), "assign");
            var i = cc11001100_hook("i", m.encodeURIJson(t), "var-init");
            if (i == e) return;
            e = cc11001100_hook("e", i, "assign"), setTimeout(function () {
              e = cc11001100_hook("e", "", "assign");
            }, 500), i += cc11001100_hook("i", t.t ? "" : "&t=" + +new Date(), "assign"), n = cc11001100_hook("n", n.indexOf("?") > -1 ? n + "&" + i : n + "?" + i, "assign"), this.sendLog(n);
          };
        }(), "object-key-init"),
        log: function (e, t) {
          t = cc11001100_hook("t", t || "click", "assign");
          var n = cc11001100_hook("n", E[t + "Url"], "var-init");
          n || alert("Error : the " + t + "url does not exist!"), this.buildLog(e, n);
        },
        setConf: function (e, t) {
          var n = cc11001100_hook("n", {}, "var-init");
          return m.isObject(e) ? n = cc11001100_hook("n", e, "assign") : n[e] = cc11001100_hook("n[e]", t, "assign"), this.config = cc11001100_hook("this.config", m.mix(this.config, n, !0), "assign"), this;
        },
        setUrl: function (e) {
          return e && (this.util.getLocation = cc11001100_hook("this.util.getLocation", function () {
            return e;
          }, "assign")), this;
        },
        setProject: function (e) {
          return e && (this.util.getProject = cc11001100_hook("this.util.getProject", function () {
            return e;
          }, "assign")), this;
        },
        setId: function () {
          var e = cc11001100_hook("e", [], "var-init"),
            t = cc11001100_hook("t", 0, "var-init"),
            n;
          while (n = cc11001100_hook("n", arguments[t++], "assign")) m.isArray(n) ? e = cc11001100_hook("e", e.concat(n), "assign") : e.push(n);
          return this.setConf("areaIds", e), this;
        },
        getTrack: function () {
          var e = cc11001100_hook("e", this.data.getTrack(), "var-init");
          return this.log(e, "track"), this;
        },
        getClickAndKeydown: function () {
          var e = cc11001100_hook("e", this, "var-init");
          return d.on(o, "click", function (t) {
            var n = cc11001100_hook("n", e.data.getClick(t), "var-init");
            e.log(n, "click");
          }), d.on(o, "keydown", function (t) {
            var n = cc11001100_hook("n", e.data.getKeydown(t), "var-init");
            e.log(n, "click");
          }), n.getClickAndKeydown = cc11001100_hook("n.getClickAndKeydown", function () {
            return e;
          }, "assign"), this;
        }
      };
    }(window), "var-init");
  n.setConf({
    trackUrl: cc11001100_hook("trackUrl", "//s.360.cn/w360/s.htm", "object-key-init"),
    clickUrl: cc11001100_hook("clickUrl", "//s.360.cn/w360/c.htm", "object-key-init"),
    wpoUrl: cc11001100_hook("wpoUrl", "//s.360.cn/w360/p.htm", "object-key-init")
  }), window.monitor = cc11001100_hook("window.monitor", n, "assign");
}(), function () {
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.url = cc11001100_hook("this.url", e.url, "assign"), this.mid = cc11001100_hook("this.mid", "", "assign"), this.huid = cc11001100_hook("this.huid", "", "assign"), this.suggest = cc11001100_hook("this.suggest", null, "assign"), this.whichPage = cc11001100_hook("this.whichPage", null, "assign"), this.historyData = cc11001100_hook("this.historyData", null, "assign"), this.displaying = cc11001100_hook("this.displaying", !1, "assign"), this.canceled = cc11001100_hook("this.canceled", !1, "assign"), this.enableShow = cc11001100_hook("this.enableShow", !0, "assign"), this.isPrivacyMode = cc11001100_hook("this.isPrivacyMode", !1, "assign");
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "", "var-init");
    return e.length == 0 ? "" : (t = cc11001100_hook("t", e.replace(/&/g, "&amp;"), "assign"), t = cc11001100_hook("t", t.replace(/</g, "&lt;"), "assign"), t = cc11001100_hook("t", t.replace(/>/g, "&gt;"), "assign"), t = cc11001100_hook("t", t.replace(/\'/g, "&#39;"), "assign"), t = cc11001100_hook("t", t.replace(/\"/g, "&quot;"), "assign"), t);
  }
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    i(this, e), this.render();
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", !1, "var-init");
    for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) if (e.charCodeAt(n) > 255) {
      t = cc11001100_hook("t", !0, "assign");
      break;
    }
    return t;
  }
  function w(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", !1, "var-init");
    for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r++) if (e[r] == t) {
      n = cc11001100_hook("n", !0, "assign");
      break;
    }
    return n;
  }
  function E(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (!(T.localSave && So.lib.soLocalStorage && !C.isPrivacyMode)) return [];
    var n = cc11001100_hook("n", So.lib.soLocalStorage.getItem(e), "var-init");
    if (n) try {
      n = cc11001100_hook("n", JSON.parse(n), "assign");
    } catch (r) {
      n = cc11001100_hook("n", [], "assign");
    } else n = cc11001100_hook("n", [], "assign");
    var i = cc11001100_hook("i", $.trim(t).toLowerCase(), "var-init"),
      s = cc11001100_hook("s", [], "var-init");
    for (var o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", n.length, "var-init"); o < u; o++) {
      var a = cc11001100_hook("a", "", "var-init"),
        f = cc11001100_hook("f", "", "var-init");
      try {
        a = cc11001100_hook("a", decodeURIComponent(n[o].word).toLowerCase(), "assign"), f = cc11001100_hook("f", n[o].pinyin && decodeURIComponent(n[o].pinyin.toLowerCase()) || "", "assign");
      } catch (r) {}
      if (a.indexOf(i) == 0 || f.indexOf(i) == 0) {
        n[o].word = cc11001100_hook("n[o].word", a.replace(/[<>]/g, ""), "assign"), s.push(n[o]);
        if (s.length == 4) break;
      }
    }
    return s;
  }
  function A(e) {
    cc11001100_hook("e", e, "function-parameter");
    $.ajax({
      url: cc11001100_hook("url", "//smart.sug.so.com/translate-query", "object-key-init"),
      method: cc11001100_hook("method", "POST", "object-key-init"),
      dataType: cc11001100_hook("dataType", "JSONP", "object-key-init"),
      jsonpCallback: cc11001100_hook("jsonpCallback", "trans", "object-key-init"),
      data: {
        query: cc11001100_hook("query", $.trim(So.comm.q), "object-key-init"),
        sid: cc11001100_hook("sid", So.comm.sid || "", "object-key-init")
      }
    }).success(function (t) {
      t && t.data ? e(t.data) : e(null);
    });
  }
  function O() {
    var e = cc11001100_hook("e", $.trim(So.comm.q), "var-init");
    b(e) ? A(M) : M(null);
  }
  function M(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (T && T.localSave && So.lib.soLocalStorage && typeof JSON != "undefined" && So.web.savesug == 1) {
      var n = cc11001100_hook("n", $.trim(So.comm.q), "var-init"),
        r = cc11001100_hook("r", /[^\x00-\xff]/g, "var-init");
      if (n.replace(r, "mm").length <= 2 || n.replace(r, "mm").length > 40) return;
      n = cc11001100_hook("n", encodeURIComponent(n), "assign");
      var i = cc11001100_hook("i", C.getHistoryData(), "var-init"),
        s = cc11001100_hook("s", !1, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      $.each(i, function (e, t) {
        t.word.toLowerCase() == n.toLowerCase() && (s = cc11001100_hook("s", !0, "assign"), o = cc11001100_hook("o", e, "assign"));
      }), s && i.splice(o, 1);
      var u = cc11001100_hook("u", {}, "var-init");
      t && (u = cc11001100_hook("u", {
        pinyin: cc11001100_hook("pinyin", encodeURIComponent(t), "object-key-init")
      }, "assign")), i.unshift($.extend(u, {
        word: cc11001100_hook("word", n, "object-key-init")
      })), i.length > 100 && i.pop(), So.lib.soLocalStorage.setItem(e, JSON.stringify(i)), C.addHistoryDataId();
    }
  }
  var e = cc11001100_hook("e", "sosug", "var-init"),
    t = cc11001100_hook("t", [], "var-init");
  n.prototype = cc11001100_hook("n.prototype", {
    loadData: function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      T.localSave && !t.isPrivacyMode && So.lib.cookie.get("sosug") !== "0" && (t.historyData = cc11001100_hook("t.historyData", t.getHistoryData(), "assign"), t.historyData = cc11001100_hook("t.historyData", t.historyData.splice(0, 10), "assign"), t.historyData && (t.render(), e && e()));
    },
    setOptions: function (e) {
      this.whichPage = cc11001100_hook("this.whichPage", e.whichPage || 0, "assign"), this.mid = cc11001100_hook("this.mid", e.mid, "assign"), this.huid = cc11001100_hook("this.huid", e.huid, "assign");
    },
    setSuggest: function (e) {
      this.suggest = cc11001100_hook("this.suggest", e, "assign");
    },
    addHistoryDataId: function () {
      var t = cc11001100_hook("t", this, "var-init");
      if (!So.lib.soLocalStorage) return;
      var n = cc11001100_hook("n", So.lib.soLocalStorage.getItem(e), "var-init");
      n ? n = cc11001100_hook("n", JSON.parse(n), "assign") : n = cc11001100_hook("n", [], "assign");
      for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", n.length, "var-init"); r < i; r++) if (typeof n[r].id == "undefined") {
        var s = cc11001100_hook("s", +new Date(), "var-init");
        n[r].id = cc11001100_hook("n[r].id", r + s.toString(), "assign");
      }
      So.lib.soLocalStorage.setItem(e, JSON.stringify(n));
    },
    getHistoryData: function () {
      var t = cc11001100_hook("t", [], "var-init");
      if (So.lib.soLocalStorage) {
        t = cc11001100_hook("t", So.lib.soLocalStorage.getItem(e), "assign");
        if (t) try {
          t = cc11001100_hook("t", JSON.parse(t), "assign");
        } catch (n) {
          t = cc11001100_hook("t", [], "assign");
        } else t = cc11001100_hook("t", [], "assign");
      }
      return t;
    },
    render: function () {
      var e = cc11001100_hook("e", this, "var-init"),
        t = cc11001100_hook("t", this.suggest, "var-init"),
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", e.whichPage == 1 ? So.comm.sid || "" : "", "var-init");
      data = cc11001100_hook("data", e.historyData || [], "assign"), e.displaying = cc11001100_hook("e.displaying", !0, "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"), s = cc11001100_hook("s", data.length, "var-init"); i < s; i++) {
        var o = cc11001100_hook("o", data[i], "var-init"),
          u = cc11001100_hook("u", o.id || "", "var-init"),
          a = cc11001100_hook("a", g(decodeURIComponent(o.word)), "var-init");
        n += cc11001100_hook("n", '<li class="local" unselectable="on" ac_index="' + i + '" acvalue="' + a + '" ac_psid="' + r + '" ac_ext="" data-delid="' + u + '" data-type="local-sug-store"><a href="javascript:;" unselectable="on" title="\u5728\u53f3\u4e0a\u89d2\u8bbe\u7f6e\u4e2d\u53ef\u5173\u95ed\u641c\u7d22\u5386\u53f2\u8bb0\u5f55\u54e6~" class="del">\u5220\u9664</a>' + a + "</li>", "assign");
      }
      n != "" ? (t.oMenu.innerHTML = cc11001100_hook("t.oMenu.innerHTML", n, "assign"), t.oMenu.setAttribute("ac_word", ""), t.oMenu.setAttribute("ver", ""), t.oMenu.setAttribute("ssid", ""), t.oMenu.setAttribute("sp", ""), t.selectedIndex = cc11001100_hook("t.selectedIndex", -2, "assign"), t.show(), e.historyData && t.sugStorageDel(), So.lib.log("suggest-log", {
        type: cc11001100_hook("type", "history-show", "object-key-init")
      })) : (t.oMenu.innerHTML = cc11001100_hook("t.oMenu.innerHTML", n, "assign"), t.hide(), t.selectedIndex = cc11001100_hook("t.selectedIndex", -2, "assign"));
    },
    hide: function () {
      this.suggest.hide(), this.displaying = cc11001100_hook("this.displaying", !1, "assign");
    },
    cancel: function (e) {
      this.canceled = cc11001100_hook("this.canceled", e, "assign"), e && this.displaying && this.hide();
    }
  }, "assign");
  var r = function (e) {
      var t = cc11001100_hook("t", document.getElementsByTagName("head")[0] || document.documentElement, "var-init"),
        n = cc11001100_hook("n", document.createElement("script"), "var-init"),
        r = cc11001100_hook("r", !1, "var-init");
      n.src = cc11001100_hook("n.src", e, "assign"), n.charset = cc11001100_hook("n.charset", "utf-8", "assign"), n.onerror = cc11001100_hook("n.onerror", n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
        !r && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (r = cc11001100_hook("r", !0, "assign"), t.removeChild(n));
      }, "assign"), "assign"), "assign"), t.insertBefore(n, t.firstChild);
    },
    i = function (e, t) {
      for (var n in t) e[n] = cc11001100_hook("e[n]", t[n], "assign");
      return e;
    },
    s = function (e, t) {
      return i(document.createElement(e), t);
    },
    o = function (e) {
      return e = cc11001100_hook("e", e || window.event, "assign"), e.target || e.srcElement;
    },
    u = function (e) {
      return e = cc11001100_hook("e", e || window.event, "assign"), e.which || e.keyCode || e.charCode;
    },
    a = function (e) {
      e = cc11001100_hook("e", e || window.event, "assign"), e.preventDefault && e.preventDefault() || (e.returnValue = cc11001100_hook("e.returnValue", !1, "assign")), e.stopPropagation && e.stopPropagation();
    },
    f = function (e, t) {
      return new RegExp("(?:^|\\s)" + t + "(?:\\s|$)", "i").test(e.className);
    },
    l = function (e, t) {
      f(e, t) || (e.className = cc11001100_hook("e.className", (e.className + " " + t).replace(/^\s+|\s+$/g, ""), "assign"));
    },
    c = function (e, t) {
      f(e, t) && (e.className = cc11001100_hook("e.className", e.className.replace(new RegExp("(?:\\s|^)" + t + "(?:\\s|$)", "i"), " ").replace(/^\s+|\s+$/g, ""), "assign"));
    },
    h = function (e, t, n) {
      do if (e.tagName == t) return e; while (e != n && (e = cc11001100_hook("e", e.parentNode, "assign")));
      return null;
    },
    p = function (e, t, n) {
      e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n);
    },
    d = function (e, t, n) {
      var r = cc11001100_hook("r", e.split("://"), "var-init");
      r.shift();
      var i = cc11001100_hook("i", parseInt(T.width) - t.length * 15 - 5 - (n ? 16 : 29) - 15, "var-init"),
        s = cc11001100_hook("s", r.join(""), "var-init");
      return s.charAt(s.length - 1) == "/" && (s = cc11001100_hook("s", s.substr(0, s.length - 1), "assign")), s.length * 7 > i && (s = cc11001100_hook("s", s.substr(0, Math.floor(i / 7) - 2) + "..", "assign")), s;
    },
    v = function (e) {
      return e.length > 3 || e.length > 1 && /[\u4e00-\u9fa5]/.test(e) ? !0 : !1;
    },
    m = function (e) {
      var t = cc11001100_hook("t", /^[\s\uFEFF\xA0]+/, "var-init"),
        n = cc11001100_hook("n", /[\s\uFEFF\xA0]+$/, "var-init");
      return e === null ? "" : e.toString().replace(t, "").replace(n, " ");
    };
  isIe = cc11001100_hook("isIe", /msie/i.test(navigator.userAgent), "assign"), y.prototype = cc11001100_hook("y.prototype", {
    width: cc11001100_hook("width", 0, "object-key-init"),
    oText: cc11001100_hook("oText", null, "object-key-init"),
    itemsData: cc11001100_hook("itemsData", null, "object-key-init"),
    oMenu: cc11001100_hook("oMenu", null, "object-key-init"),
    oWrap: cc11001100_hook("oWrap", null, "object-key-init"),
    selectedIndex: cc11001100_hook("selectedIndex", -2, "object-key-init"),
    filteredValue: cc11001100_hook("filteredValue", "", "object-key-init"),
    filteringValue: cc11001100_hook("filteringValue", "", "object-key-init"),
    acValue: cc11001100_hook("acValue", "", "object-key-init"),
    closed: cc11001100_hook("closed", !1, "object-key-init"),
    showCount: cc11001100_hook("showCount", 0, "object-key-init"),
    isCreateWidth: cc11001100_hook("isCreateWidth", !0, "object-key-init"),
    focusByClick: cc11001100_hook("focusByClick", !1, "object-key-init"),
    show: function () {
      var e = cc11001100_hook("e", $.trim(this.oText.value), "var-init");
      (this.options.enableHotword || e) && this.oMenu.childNodes.length && (window.sugIsShow || (this.oWrap.style.display = cc11001100_hook("this.oWrap.style.display", "", "assign"), this.closed = cc11001100_hook("this.closed", !1, "assign"), l(this.oPos, "sug-border")), window.sugIsShow = cc11001100_hook("window.sugIsShow", undefined, "assign"));
    },
    hide: function (e) {
      typeof this.beforeHide == "function" && this.beforeHide(), this.oWrap.style.display = cc11001100_hook("this.oWrap.style.display", "none", "assign"), this.closed = cc11001100_hook("this.closed", !0, "assign"), c(this.oPos, "sug-border"), C.displaying = cc11001100_hook("C.displaying", !1, "assign");
    },
    refreshItems: function (e) {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", m(this.oText.value), "var-init"),
        r = cc11001100_hook("r", t.itemsData, "var-init");
      if (n != t.query) return;
      if (r && !r.__isItemsDataRendered || e) {
        var i = cc11001100_hook("i", [], "var-init"),
          s = cc11001100_hook("s", Math.min(t.showCount, r.length), "var-init");
        for (var o = cc11001100_hook("o", 0, "var-init"); o < s; o++) {
          var u = cc11001100_hook("u", "", "var-init");
          C.whichPage == 1 && (u = cc11001100_hook("u", So.comm.sid || "", "assign"));
          var a = cc11001100_hook("a", "", "var-init");
          r[o].id && r[o].id != "0" && r[o].id != "-1" && (a = cc11001100_hook("a", r[o].id, "assign")), r[o].type == "history" ? i.push('<li unselectable="on" class="local" ac_index="' + o + '" acValue="' + r[o].sVal + '" ac_psid="' + u + '" ac_source="' + r[o].source + '" ac_eci="' + r[o].eci + '" ac_ext="' + r[o].ext + '" data-delid="' + a + '" data-type="local"><a href="javascript:;" unselectable="on" class="del" title="\u5728\u53f3\u4e0a\u89d2\u8bbe\u7f6e\u4e2d\u53ef\u5173\u95ed\u641c\u7d22\u5386\u53f2\u8bb0\u5f55\u54e6~">\u5220\u9664</a>' + r[o].sTitle + "</li>") : i.push('<li unselectable="on" ac_resrc="' + r[o].resrc + '" ac_psid="' + u + '" ac_source="' + r[o].source + '" ac_eci="' + r[o].eci + '" ac_ext="' + r[o].ext + '" ac_index="' + o + '" acValue="' + r[o].sVal + '"><span unselectable="on">' + r[o].sTitle + "</span></li>");
        }
        t.oMenu.innerHTML = cc11001100_hook("t.oMenu.innerHTML", i.join(""), "assign"), t.oMenu.setAttribute("ac_word", t.query), t.oMenu.setAttribute("ver", t.version), t.oMenu.setAttribute("ssid", t.ssid), t.oMenu.setAttribute("sp", t.sp), r.length ? t.show() : t.hide(), t.filteredValue = cc11001100_hook("t.filteredValue", t.filteringValue, "assign"), t.acValue = cc11001100_hook("t.acValue", "", "assign"), t.selectedIndex = cc11001100_hook("t.selectedIndex", -2, "assign"), r.__isItemsDataRendered = cc11001100_hook("r.__isItemsDataRendered", !0, "assign"), t.findStorageDel();
      }
    },
    findStorageDel: function () {
      var e = cc11001100_hook("e", this, "var-init");
      $(e.oMenu).find(".local a").on("click", function (t) {
        var n = cc11001100_hook("n", $(this).parent(".local"), "var-init"),
          r = cc11001100_hook("r", $.trim(S.value), "var-init"),
          i = cc11001100_hook("i", (So.comm.sid || "") + r, "var-init");
        delete x[i], e.delStorage(n.attr("acvalue"), n.data("delid")), e.refreshData(), a(t), So.lib.log("suggest-log", {
          type: cc11001100_hook("type", "typing-sug-dele", "object-key-init")
        });
      }), $(e.oMenu).find(".local a").on("mousedown", function (e) {
        a(e);
      });
    },
    sugStorageDel: function () {
      var e = cc11001100_hook("e", this, "var-init");
      $(e.oMenu).find(".local a").on("click", function (t) {
        var n = cc11001100_hook("n", $(this).parent(".local"), "var-init");
        e.delStorage(n.attr("acvalue"), n.data("delid")), C.loadData(), a(t), So.lib.log("suggest-log", {
          type: cc11001100_hook("type", "sug-dele", "object-key-init")
        }), $('.ac_wrap [data-type="local-sug-store"]').length == 0 && $(".ac_wrap .bottom-tool").hide();
      });
    },
    delStorage: function (n, r) {
      if (!n) return;
      w(t, n) || t.push(n);
      var i = cc11001100_hook("i", C.getHistoryData(), "var-init");
      n = cc11001100_hook("n", encodeURIComponent(n), "assign");
      for (var s = cc11001100_hook("s", 0, "var-init"), o = cc11001100_hook("o", i.length, "var-init"); s < o; s++) r && i[s] && i[s].id && r == i[s].id ? i.splice(s, 1) : i[s] && i[s].word.toLowerCase() == n.toLowerCase() && i.splice(s, 1);
      So.lib.soLocalStorage.setItem(e, JSON.stringify(i));
    },
    delRequest: function (e, t) {
      var n = cc11001100_hook("n", "//sug.so.360.cn/suggest_del", "var-init"),
        r = cc11001100_hook("r", {
          src: cc11001100_hook("src", So.comm.pid == "home" ? "so_home" : "srp_suggst", "object-key-init"),
          encodein: cc11001100_hook("encodein", "utf-8", "object-key-init"),
          encodeout: cc11001100_hook("encodeout", "utf-8", "object-key-init"),
          format: cc11001100_hook("format", "json", "object-key-init"),
          mid: cc11001100_hook("mid", this.options.mid, "object-key-init"),
          huid: cc11001100_hook("huid", this.options.huid, "object-key-init"),
          del_words: cc11001100_hook("del_words", e, "object-key-init")
        }, "var-init");
      $.ajax({
        url: cc11001100_hook("url", n, "object-key-init"),
        data: cc11001100_hook("data", r, "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init")
      }).success(function (e) {
        console.log(e);
      });
    },
    setSelectedIndex: function (e, t) {
      var n = cc11001100_hook("n", this, "var-init"),
        r = cc11001100_hook("r", n.oMenu.childNodes, "var-init");
      if (r.length) {
        n.selectedIndex > -1 && c(r[n.selectedIndex], "selected"), e = cc11001100_hook("e", (e + r.length + 2) % (r.length + 2), "assign");
        if (e == r.length) n.acValue = cc11001100_hook("n.acValue", n.oText.value = cc11001100_hook("n.oText.value", n.filteringValue, "assign"), "assign"), n.acValue = cc11001100_hook("n.acValue", $.trim(n.acValue), "assign"), e = cc11001100_hook("e", -2, "assign");else {
          if (e == r.length + 1) return n.setSelectedIndex(-2 - n.selectedIndex, t), !1;
          n.acValue = cc11001100_hook("n.acValue", n.oText.value = cc11001100_hook("n.oText.value", r[e].getAttribute("acValue"), "assign"), "assign"), n.acValue = cc11001100_hook("n.acValue", $.trim(n.acValue), "assign"), l(r[e], "selected");
        }
      } else e = cc11001100_hook("e", -2, "assign");
      n.selectedIndex = cc11001100_hook("n.selectedIndex", e, "assign");
    },
    render: function () {
      function b() {
        if (E) return !1;
        var t = cc11001100_hook("t", m(r.value), "var-init"),
          n = cc11001100_hook("n", e.options.enableHotword && (!e.options.clickEmptyToTriggerHotword || e.focusByClick), "var-init");
        n && C.cancel(t && t != e.acValue);
        var i = cc11001100_hook("i", $(".ac_wrap .bottom-tool"), "var-init");
        t ? (t != e.filteredValue && t != e.filteringValue && t != e.acValue && (e.filteringValue = cc11001100_hook("e.filteringValue", t, "assign"), e.refreshData()), e.itemsData && e.refreshItems(), y != 40 && y != 38 && i.hide()) : (e.acValue = cc11001100_hook("e.acValue", e.filteringValue = cc11001100_hook("e.filteringValue", e.filteredValue = cc11001100_hook("e.filteredValue", "", "assign"), "assign"), "assign"), n && C.enableShow ? C.displaying || C.loadData(function () {
          So.lib.cookie.get("sosug") !== "0" && C.getHistoryData().length > 0 && (i.length == 0 ? ($('<div class="bottom-tool"><a unselectable="on" href="javascript:;" id="clear_history">\u5220\u9664\u5386\u53f2</a></div>').appendTo(".ac_wrap_inner"), $("#clear_history").on("click", function () {
            $(".ac_wrap .bottom-tool").hide(), clearSugStorage(), $(".ac_wrap .ac_menu").html(""), e.hide();
          })) : i.show());
        }) : e.hide());
      }
      function w(t) {
        cc11001100_hook("t", t, "function-parameter");
        e.closed && e.show(), clearInterval(e._refreshTimer), e._refreshTimer = cc11001100_hook("e._refreshTimer", setInterval(b, 100), "assign");
      }
      var e = cc11001100_hook("e", this, "var-init");
      if (e._rendered) return;
      e._rendered = cc11001100_hook("e._rendered", !0, "assign");
      var t = cc11001100_hook("t", '<div class="ac_wrap_inner"><div class="ac_menu_ctn"><ul class="ac_menu"></ul><div class="so_feedback"><a href="javascript:;" target="_blank" class="so_feedback_link" data-class="ac_menu"><span class="so_feedback_icon"></span><span class="so_feedback_txt">\u53cd\u9988</span></a></div></div></div>', "var-init");
      /msie[ \/os]*6\./ig.test(navigator.userAgent) && (t = cc11001100_hook("t", '<iframe class="ac_bgIframe" frameBorder="0"></iframe>' + t, "assign"));
      var n = cc11001100_hook("n", s("div", {
          className: cc11001100_hook("className", "ac_wrap", "object-key-init"),
          innerHTML: cc11001100_hook("innerHTML", t.replace(/(<\w+)/g, '$1 unselectable="on"'), "object-key-init")
        }), "var-init"),
        r = cc11001100_hook("r", e.oText, "var-init"),
        i = cc11001100_hook("i", e.oPos || r, "var-init");
      i.parentNode.insertBefore(n, i);
      var f = cc11001100_hook("f", e.oMenu = cc11001100_hook("e.oMenu", n.getElementsByTagName("ul")[0], "assign"), "var-init");
      r.setAttribute("autoComplete", "off");
      var d = cc11001100_hook("d", 2, "var-init"),
        v = cc11001100_hook("v", -1, "var-init");
      if (e.isCreateWidth) {
        var g = cc11001100_hook("g", d + (e.oText.getAttribute("suggestWidth") || i.offsetWidth) + "px", "var-init");
        isIe ? n.style.width = cc11001100_hook("n.style.width", g, "assign") : n.style.minWidth = cc11001100_hook("n.style.minWidth", g, "assign");
      }
      n.style.top = cc11001100_hook("n.style.top", i.offsetHeight - 1 + v + "px", "assign"), n.style.left = cc11001100_hook("n.style.left", i.offsetLeft + "px", "assign"), e.oWrap = cc11001100_hook("e.oWrap", n, "assign"), e.width = cc11001100_hook("e.width", g, "assign"), e.hide(), p(e.oText, "click", function (t) {
        C.enableShow = cc11001100_hook("C.enableShow", !0, "assign"), e.show();
      });
      var y = cc11001100_hook("y", "", "var-init");
      p(e.oText, "keydown", function (t) {
        var r = cc11001100_hook("r", 0, "var-init");
        y = cc11001100_hook("y", u(t), "assign"), C.enableShow = cc11001100_hook("C.enableShow", !0, "assign");
        switch (y) {
          case 40:
            r = cc11001100_hook("r", 1, "assign");
            break;
          case 38:
            r = cc11001100_hook("r", -1, "assign");
            break;
          case 27:
            C.enableShow = cc11001100_hook("C.enableShow", !1, "assign"), e.closed || (e.hide(), a(t));
            break;
          case 13:
        }
        r && (a(t), n.style.display == "none" ? e.show() : e.setSelectedIndex(e.selectedIndex + r));
      }), p(e.oText, "focus", w), p(e.oText, "input", function () {
        e.closed && e.show(), b();
      }), p(e.oText, "click", function () {
        $.trim(e.oText.value) || (e.focusByClick = cc11001100_hook("e.focusByClick", !0, "assign"));
      }), p(r.form, "submit", function (t) {
        if (e.onBeforeSubmit && e.selectedIndex >= 0) {
          var n = cc11001100_hook("n", e.oMenu.children[e.selectedIndex], "var-init"),
            i = cc11001100_hook("i", {
              inputValue: cc11001100_hook("inputValue", $.trim(r.value), "object-key-init"),
              index: cc11001100_hook("index", parseInt(n.getAttribute("ac_index"), 10), "object-key-init"),
              word: cc11001100_hook("word", n.getAttribute("acvalue"), "object-key-init"),
              type: cc11001100_hook("type", n.getAttribute("data-type"), "object-key-init"),
              resrc: cc11001100_hook("resrc", n.getAttribute("ac_resrc"), "object-key-init"),
              ext: cc11001100_hook("ext", n.getAttribute("ac_ext"), "object-key-init"),
              source: cc11001100_hook("source", n.getAttribute("ac_source"), "object-key-init"),
              psid: cc11001100_hook("psid", n.getAttribute("ac_psid"), "object-key-init"),
              eci: cc11001100_hook("eci", n.getAttribute("ac_eci"), "object-key-init")
            }, "var-init");
          e.onBeforeSubmit(i) === !1 && a(t);
        }
        setTimeout(function () {
          e && (e.oText.blur(), e.acValue = cc11001100_hook("e.acValue", e.filteringValue = cc11001100_hook("e.filteringValue", e.filteredValue = cc11001100_hook("e.filteredValue", "", "assign"), "assign"), "assign"), e.oMenu.innerHTML = cc11001100_hook("e.oMenu.innerHTML", "", "assign"), e.selectedIndex = cc11001100_hook("e.selectedIndex", -2, "assign"), C.displaying = cc11001100_hook("C.displaying", !1, "assign"));
        }, 20);
      }), p(e.oText, "blur", function (t) {
        e.hide(), clearInterval(e._refreshTimer);
      });
      var E, S;
      n.onmousedown = cc11001100_hook("n.onmousedown", function (e) {
        var t = cc11001100_hook("t", o(e), "var-init"),
          n = cc11001100_hook("n", h(t, "LI", f), "var-init");
        a(e), clearTimeout(S), E = cc11001100_hook("E", !0, "assign"), S = cc11001100_hook("S", setTimeout(function () {
          E = cc11001100_hook("E", !1, "assign");
        }, 2e3), "assign");
      }, "assign"), f.onclick = cc11001100_hook("f.onclick", function (t) {
        var n = cc11001100_hook("n", o(t), "var-init"),
          i = cc11001100_hook("i", h(n, "LI", f), "var-init");
        if (i) {
          r.blur(), setTimeout(function () {
            r.focus();
          }, 10);
          var s = cc11001100_hook("s", 0, "var-init"),
            u = cc11001100_hook("u", i, "var-init"),
            a = cc11001100_hook("a", $.trim(r.value), "var-init");
          while (u = cc11001100_hook("u", u.previousSibling, "assign")) s++;
          e.setSelectedIndex(s, !0), e.hide(), clearInterval(e._refreshTimer);
          var l = cc11001100_hook("l", {
            index: cc11001100_hook("index", parseInt(i.getAttribute("ac_index"), 10), "object-key-init"),
            word: cc11001100_hook("word", i.getAttribute("acvalue"), "object-key-init"),
            type: cc11001100_hook("type", i.getAttribute("data-type"), "object-key-init"),
            inputValue: cc11001100_hook("inputValue", a, "object-key-init")
          }, "var-init");
          e.onselectitem && e.onselectitem(l);
        }
      }, "assign"), f.onmouseover = cc11001100_hook("f.onmouseover", function (t) {
        var n = cc11001100_hook("n", o(t), "var-init"),
          r = cc11001100_hook("r", h(n, "LI", f), "var-init");
        r && (e.enableHoverState ? l(r, "hover") : (e.selectedIndex > -1 && c(e.oMenu.childNodes[e.selectedIndex], "selected"), l(r, "selected"), e.selectedIndex = cc11001100_hook("e.selectedIndex", parseInt(r.getAttribute("ac_index")), "assign")));
      }, "assign"), f.onmouseout = cc11001100_hook("f.onmouseout", function (t) {
        var n = cc11001100_hook("n", o(t), "var-init"),
          r = cc11001100_hook("r", h(n, "LI", f), "var-init");
        r && (e.enableHoverState ? c(r, "hover") : c(r, "selected"));
      }, "assign"), n.onmouseout = cc11001100_hook("n.onmouseout", function (t) {
        e.enableHoverState || (e.selectedIndex > -1 && c(e.oMenu.childNodes[e.selectedIndex], "selected"), e.selectedIndex = cc11001100_hook("e.selectedIndex", -2, "assign"));
      }, "assign"), document.activeElement === e.oText && w();
    }
  }, "assign");
  var S = cc11001100_hook("S", null, "var-init"),
    x = cc11001100_hook("x", {}, "var-init"),
    T = cc11001100_hook("T", null, "var-init"),
    N,
    C = cc11001100_hook("C", new n({
      url: cc11001100_hook("url", "//www.so.com/zt/api/hotword.js?t=" + +new Date(), "object-key-init")
    }), "var-init"),
    k = function (e, n) {
      T.dataAdapter && !n && (e = cc11001100_hook("e", T.dataAdapter(e), "assign"));
      var r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", e.result || [], "var-init"),
        s = cc11001100_hook("s", e.version || "", "var-init"),
        o = cc11001100_hook("o", e.ssid || "", "var-init"),
        u = cc11001100_hook("u", e.sp || "", "var-init"),
        a = cc11001100_hook("a", m(S.value), "var-init"),
        f = cc11001100_hook("f", e.ext || "", "var-init");
      for (var l = cc11001100_hook("l", 0, "var-init"), c = cc11001100_hook("c", i.length, "var-init"); l < c; l++) {
        var h = cc11001100_hook("h", i[l].word, "var-init"),
          p = cc11001100_hook("p", h, "var-init"),
          d = cc11001100_hook("d", i[l].resrc || "", "var-init"),
          v = cc11001100_hook("v", i[l].source || "", "var-init"),
          y = cc11001100_hook("y", i[l].type || "", "var-init"),
          b = cc11001100_hook("b", f, "var-init"),
          E = cc11001100_hook("E", "", "var-init");
        C.whichPage == 1 && (E = cc11001100_hook("E", So.comm.sid || "", "assign"));
        if (n && y == "history" && w(t, h)) continue;
        a && p.toLowerCase().indexOf(a.toLowerCase()) === 0 ? p = cc11001100_hook("p", g(p.substr(0, a.length)) + '<b unselectable="on">' + g(p.substr(a.length)) + "</b>", "assign") : p = cc11001100_hook("p", g(p), "assign"), h && r.push({
          sVal: cc11001100_hook("sVal", h.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), "object-key-init"),
          sTitle: cc11001100_hook("sTitle", p, "object-key-init"),
          type: cc11001100_hook("type", y, "object-key-init"),
          id: cc11001100_hook("id", g(i[l].id || ""), "object-key-init"),
          resrc: cc11001100_hook("resrc", g(d || ""), "object-key-init"),
          psid: cc11001100_hook("psid", E, "object-key-init"),
          ext: cc11001100_hook("ext", g(b), "object-key-init"),
          source: cc11001100_hook("source", v, "object-key-init"),
          eci: cc11001100_hook("eci", g(i[l].eci || ""), "object-key-init")
        });
      }
      T.query = cc11001100_hook("T.query", e.query, "assign"), T.itemsData = cc11001100_hook("T.itemsData", r, "assign"), T.version = cc11001100_hook("T.version", s, "assign"), T.ssid = cc11001100_hook("T.ssid", o, "assign"), T.sp = cc11001100_hook("T.sp", u, "assign");
      if (e.query) {
        var N = cc11001100_hook("N", (So.comm.sid || "") + e.query, "var-init");
        x[N] = cc11001100_hook("x[N]", e, "assign");
      }
    },
    L = function (e) {
      e = cc11001100_hook("e", i({
        clickEmptyToTriggerHotword: cc11001100_hook("clickEmptyToTriggerHotword", !1, "object-key-init"),
        enableHotword: cc11001100_hook("enableHotword", !1, "object-key-init"),
        alignElement: cc11001100_hook("alignElement", e.inputElement, "object-key-init"),
        pqElement: cc11001100_hook("pqElement", "", "object-key-init"),
        urlPrefix: cc11001100_hook("urlPrefix", "http://sug.so.360.cn/suggest/word?callback=suggest_so&encodein=utf-8&encodeout=utf-8&word=", "object-key-init"),
        enableHoverState: cc11001100_hook("enableHoverState", !1, "object-key-init"),
        localSave: cc11001100_hook("localSave", 0, "object-key-init"),
        showCount: cc11001100_hook("showCount", 10, "object-key-init"),
        isCreateWidth: cc11001100_hook("isCreateWidth", !0, "object-key-init")
      }, e), "assign");
      var t = cc11001100_hook("t", e.urlPrefix.match(/callback=(\w+)/)[1], "var-init");
      window[t] = cc11001100_hook("window[t]", k, "assign"), S = cc11001100_hook("S", e.inputElement, "assign"), T = cc11001100_hook("T", window.cb = cc11001100_hook("window.cb", new y({
        options: cc11001100_hook("options", e, "object-key-init"),
        oText: cc11001100_hook("oText", S, "object-key-init"),
        oPos: cc11001100_hook("oPos", e.alignElement, "object-key-init"),
        enableHoverState: cc11001100_hook("enableHoverState", e.enableHoverState, "object-key-init"),
        dataAdapter: cc11001100_hook("dataAdapter", e.dataAdapter, "object-key-init"),
        beforeHide: cc11001100_hook("beforeHide", e.beforeHide || function () {}, "object-key-init"),
        beforeSelectItem: cc11001100_hook("beforeSelectItem", e.beforeSelectItem, "object-key-init"),
        onBeforeSubmit: cc11001100_hook("onBeforeSubmit", e.onBeforeSubmit, "object-key-init"),
        localSave: cc11001100_hook("localSave", e.localSave, "object-key-init"),
        showCount: cc11001100_hook("showCount", e.showCount, "object-key-init"),
        isCreateWidth: cc11001100_hook("isCreateWidth", e.isCreateWidth, "object-key-init"),
        onselectitem: function (e) {
          if (this.beforeSelectItem && this.beforeSelectItem(e) === !1) return;
          var t = cc11001100_hook("t", S.form.elements, "var-init");
          for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) if (t[n].type == "submit") {
            t[n].click();
            return;
          }
        },
        refreshData: function () {
          var t = cc11001100_hook("t", m(S.value), "var-init"),
            n = cc11001100_hook("n", (So.comm.sid || "") + t, "var-init"),
            i = cc11001100_hook("i", x[n], "var-init");
          if (i) k(i, !0);else {
            var s = cc11001100_hook("s", e.urlPrefix + "&fields=word&word=" + encodeURIComponent(t), "var-init");
            e.sid && So.comm.sid && (s += cc11001100_hook("s", "&sid=" + So.comm.sid, "assign")), e.pqElement && (s += cc11001100_hook("s", "&pq=" + encodeURIComponent(So.comm.q), "assign")), e.ls && (s += cc11001100_hook("s", "&ls=" + encodeURIComponent(e.ls), "assign")), e.lm_extend && (s += cc11001100_hook("s", "&lm_extend=" + encodeURIComponent(e.lm_extend), "assign")), e.csrc && (s += cc11001100_hook("s", "&cursrc=" + encodeURIComponent(So.comm.src), "assign")), e.mid && (s += cc11001100_hook("s", "&mid=" + encodeURIComponent(e.mid), "assign")), e.huid && (s += cc11001100_hook("s", "&huid=" + encodeURIComponent(e.huid), "assign")), s += cc11001100_hook("s", "&llbq=" + encodeURIComponent(So.comm.llbq), "assign");
            var o = cc11001100_hook("o", E(t), "var-init"),
              u = cc11001100_hook("u", [], "var-init"),
              a = cc11001100_hook("a", [], "var-init");
            for (var f = cc11001100_hook("f", 0, "var-init"), l = cc11001100_hook("l", o.length, "var-init"); f < l; f++) u.push(o[f].word), a.push(o[f].id);
            s += cc11001100_hook("s", "&cache=" + encodeURIComponent(u.join("")), "assign"), s += cc11001100_hook("s", "&id=" + encodeURIComponent(a.join(",")), "assign"), s += cc11001100_hook("s", "&t=" + +new Date(), "assign"), r(s);
          }
        }
      }), "assign"), "assign"), C.setSuggest(T), C.setOptions(e);
    };
  window.clearSugStorage = cc11001100_hook("window.clearSugStorage", function () {
    So.lib.soLocalStorage && So.lib.soLocalStorage.removeItem(e);
  }, "assign"), window.setStorage = cc11001100_hook("window.setStorage", O, "assign"), So.page.onload.push(function () {
    O();
  }), setTimeout(function () {
    try {
      external.AppCmd(external.GetSID(window), "sesafe", "GetIncognitoStatus", "1", "", function (e, t) {
        100 == e && t == "true" && (C.isPrivacyMode = cc11001100_hook("C.isPrivacyMode", !0, "assign"));
      });
    } catch (e) {}
  }, 30), window.createSuggest = cc11001100_hook("window.createSuggest", L, "assign");
}(), function () {
  function t(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", $("#bd_search form"), "var-init"),
      r = cc11001100_hook("r", "", "var-init");
    if (e) {
      var i = cc11001100_hook("i", e.split("&"), "var-init");
      for (var s = cc11001100_hook("s", 0, "var-init"), o = cc11001100_hook("o", i.length, "var-init"); s < o; s++) {
        var u = cc11001100_hook("u", i[s].split("="), "var-init");
        u[0] == "nlpv" && (r = cc11001100_hook("r", u[1], "assign"));
      }
      var a = cc11001100_hook("a", n.find('input[name="eci"]'), "var-init"),
        f = cc11001100_hook("f", n.find('input[name="nlpv"]'), "var-init"),
        l = cc11001100_hook("l", '<input type="hidden" name="eci" value="' + t + '">', "var-init"),
        c = cc11001100_hook("c", '<input type="hidden" name="nlpv" value="' + r + '">', "var-init");
      a.length == 0 ? n.append(l) : a.val(t), f.length == 0 ? n.append(c) : f.val(r);
    } else $("#nlpv").length || n.find('input[name="eci"],input[name="nlpv"]').remove();
    return {
      eci: cc11001100_hook("eci", t, "object-key-init"),
      nlpv: cc11001100_hook("nlpv", r, "object-key-init")
    };
  }
  var e = cc11001100_hook("e", document.getElementById("input"), "var-init"),
    n = cc11001100_hook("n", So.lib.parseQuery(), "var-init");
  createSuggest({
    inputElement: cc11001100_hook("inputElement", e, "object-key-init"),
    alignElement: cc11001100_hook("alignElement", document.getElementById("suggest-align"), "object-key-init"),
    urlPrefix: cc11001100_hook("urlPrefix", "//sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&src=" + (So.comm.fr === "shaonian" ? "shaonian" : "so_home"), "object-key-init"),
    enableHoverState: cc11001100_hook("enableHoverState", !1, "object-key-init"),
    mid: cc11001100_hook("mid", So.lib.getUnMid(So.comm.md) || "", "object-key-init"),
    huid: cc11001100_hook("huid", So.lib.cookie.get("__huid") || "", "object-key-init"),
    ls: cc11001100_hook("ls", n.ls, "object-key-init"),
    lm_extend: cc11001100_hook("lm_extend", n.lm_extend, "object-key-init"),
    enableHotword: cc11001100_hook("enableHotword", !0, "object-key-init"),
    clickEmptyToTriggerHotword: cc11001100_hook("clickEmptyToTriggerHotword", !0, "object-key-init"),
    localSave: cc11001100_hook("localSave", So.lib.cookie.get("sosug") !== "0" ? 1 : 0, "object-key-init"),
    whichPage: cc11001100_hook("whichPage", 0, "object-key-init"),
    onBeforeSubmit: function (e) {
      var n = cc11001100_hook("n", $(this.oMenu), "var-init"),
        r = cc11001100_hook("r", n.attr("ver") || "", "var-init"),
        i = cc11001100_hook("i", n.attr("ssid") || "", "var-init"),
        s = cc11001100_hook("s", n.attr("sp") || "", "var-init"),
        o = cc11001100_hook("o", n.attr("ac_word") || "", "var-init"),
        u = cc11001100_hook("u", "home", "var-init"),
        a = cc11001100_hook("a", "", "var-init");
      e.type == "local" ? a = cc11001100_hook("a", "sug-local", "assign") : e.type == "local-sug-store" ? a = cc11001100_hook("a", "home-sug-store", "assign") : e.type == "nlp_recomm" ? a = cc11001100_hook("a", "home-nlp-recomm", "assign") : a = cc11001100_hook("a", "home_suggst_" + r, "assign"), $("#from").val(a), $("input[name=ssid]").val(i), $("input[name=cp]").val(So.lib.encp(s));
      var f = cc11001100_hook("f", t(e.ext, e.eci), "var-init");
      So.lib.cookie.set("sgtclick", [e.word, e.index, e.inputValue, o, u, r, e.resrc, f.eci, f.nlpv, e.source, e.psid, i].join("|"));
    }
  }), e.focus();
}(), function () {
  function m() {
    d.hide(), l.hasClass(v) && l.removeClass(v);
  }
  function g() {
    d.show(), l.hasClass(v) || l.addClass(v);
  }
  function F() {
    if (typeof So.lib.cookie.get("hasUseFollowBtn") == "undefined") {
      var e = cc11001100_hook("e", parseInt(new Date().getTime() / 1e3), "var-init");
      $.ajax({
        url: cc11001100_hook("url", "//user.360kuai.com/following/getIds", "object-key-init"),
        data: {
          sign: cc11001100_hook("sign", So.comm.src == "360ws_newtab_xhj" ? "360_806235bc" : "360_fc624efc", "object-key-init"),
          uid: cc11001100_hook("uid", So.comm.guid, "object-key-init"),
          token: cc11001100_hook("token", e + "|" + So.lib.md5(So.comm.guid + "fdasof09vni234rk23b498uvo234eo14n123b12v31v23c1y23y1u" + e), "object-key-init"),
          f: cc11001100_hook("f", "jsonp", "object-key-init")
        },
        type: cc11001100_hook("type", "get", "object-key-init"),
        timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        success: function (e) {
          if (e && e.data && e.data.length > 0) {
            var t = cc11001100_hook("t", 1e3, "var-init"),
              n = cc11001100_hook("n", new Date(), "var-init");
            n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3);
            var r = cc11001100_hook("r", {
              expires: cc11001100_hook("expires", n, "object-key-init")
            }, "var-init");
            So.lib.cookie.set("hasUseFollowBtn", 1, r);
          }
        }
      });
    }
  }
  monitor.util.getGuid = cc11001100_hook("monitor.util.getGuid", function () {
    return So.lib.cookie.get("QiHooGUID");
  }, "assign");
  var e = cc11001100_hook("e", monitor.data.getBase, "var-init");
  monitor.data.getBase = cc11001100_hook("monitor.data.getBase", function () {
    var t = cc11001100_hook("t", e(), "var-init");
    return delete t.id, delete t.u, delete t.p, t;
  }, "assign");
  var t = function (e, t, n, r, i) {
    var s = cc11001100_hook("s", null, "var-init"),
      o = cc11001100_hook("o", null, "var-init"),
      u = cc11001100_hook("u", n || 200, "var-init"),
      a = function () {
        clearTimeout(o), s = cc11001100_hook("s", setTimeout(function () {
          t.fadeIn(300), r && r();
        }, u), "assign");
      },
      f = function () {
        clearTimeout(s), o = cc11001100_hook("o", setTimeout(function () {
          t.fadeOut(300), i && i();
        }, u), "assign");
      };
    e.hover(a, f), t.hover(a, f);
  };
  $("#bd_logo").addClass("anime"), t($("#so_tabs_more"), $("#so_tabs_menu")), $("#so_tabs_more").mouseenter(function () {
    So.lib.log("", {
      lk: cc11001100_hook("lk", "tabs_more", "object-key-init"),
      datatype: cc11001100_hook("datatype", So.comm.nocard ? "nocard" : "card", "object-key-init")
    }, "sou/home_link");
  });
  var n = cc11001100_hook("n", $("#hd_usernav"), "var-init"),
    r = cc11001100_hook("r", $("#hd_nav .uinfo"), "var-init");
  t(r, n, null, function () {
    n.css("left", r.offset().left + r.width() - n.width());
  });
  var i = cc11001100_hook("i", $("#hd_setting"), "var-init"),
    s = cc11001100_hook("s", $("#hd_nav .setting a"), "var-init"),
    o = function (e) {
      _loader.add("settingPanel", "https://ss5.360tres.com/ssl/076d47e360e532ae/common/setting.js"), _loader.use("settingPanel", function () {
        e();
      });
    };
  $("#search_setting").on("click", function () {
    o(function () {
      So.web.showSearchSetting();
    });
  }), $("#advanced_search").on("click", function () {
    o(function () {
      So.web.showAdvancedSearch();
    });
  }), t(s, i, null, function () {
    i.css("left", s.offset().left + s.outerWidth() / 2 - i.width() / 2);
  });
  var u = cc11001100_hook("u", {
    mid: cc11001100_hook("mid", So.comm.md, "object-key-init")
  }, "var-init");
  i.on("click", ".add-hot-news-card", function () {
    So.lib.observer.publish("so.homecard.addHotNewsCard");
  }), i.on("click", ".close-hot-news-card", function () {
    So.lib.observer.publish("so.homecard.closeHotNewsCard"), i.hide();
  });
  var a = cc11001100_hook("a", $("#input-container"), "var-init"),
    f = cc11001100_hook("f", $("#suggest-align"), "var-init"),
    l = cc11001100_hook("l", $("#input"), "var-init"),
    c = cc11001100_hook("c", $("#from"), "var-init");
  l.bind({
    focus: function () {
      a.addClass("focus"), f.addClass("hover");
    },
    blur: function () {
      a.removeClass("focus"), f.removeClass("hover");
    }
  });
  var h = cc11001100_hook("h", $(".ie6"), "var-init"),
    p = cc11001100_hook("p", h.length, "var-init");
  p && $(window).scroll(function () {
    $("#skin_bg").css("top", document.documentElement.scrollTop);
  }), So.comm.src && c.val("home_" + So.comm.src.replace(/^(home_)+/g, "")), $("#bd_tabnav a[data-s]").bind("click", function () {
    var e = cc11001100_hook("e", $(this), "var-init"),
      t = cc11001100_hook("t", $.trim(l.val()), "var-init"),
      n = cc11001100_hook("n", e.attr("data-s"), "var-init");
    t && n && (n = cc11001100_hook("n", n.replace(/%q%/g, encodeURIComponent(t)), "assign"), e.attr("href", n));
  }), $("#hd_nav .sethome a").click(function () {
    var e = cc11001100_hook("e", !1, "var-init"),
      t = cc11001100_hook("t", function (e, t) {
        var n = cc11001100_hook("n", e.match(RegExp(t + "\\b[ \\/]?([\\w\\.]*)", "i")), "var-init");
        return n ? n.slice(1) : ["", ""];
      }(navigator.userAgent, "(maxthon|360se|360ee|theworld|se|greenbrowser|qqbrowser)"), "var-init");
    try {
      e = cc11001100_hook("e", external.twGetRunPath.toLowerCase().indexOf("360se") > -1, "assign");
    } catch (n) {}
    if (!e && !t[0]) try {
      return this.style.behavior = cc11001100_hook("this.style.behavior", "url(#default#homepage)", "assign"), this.setHomePage("http://www.so.com/"), !1;
    } catch (r) {}
  });
  var d = cc11001100_hook("d", $("#suggest-align .placeholder-default"), "var-init"),
    v = cc11001100_hook("v", "lowie-bg", "var-init");
  if ($.trim(l.val()) == "" && So.comm.fr != "shaonian") {
    if ($(".placeholder-default").attr("data-keyword") == "") {
      var y = cc11001100_hook("y", JSON.parse(So.lib.soLocalStorage.sosug || "[]"), "var-init"),
        b = cc11001100_hook("b", [], "var-init"),
        w = cc11001100_hook("w", [], "var-init");
      for (var E = cc11001100_hook("E", 0, "var-init"), S = cc11001100_hook("S", y.length, "var-init"); E < S; E++) {
        y[E].word = cc11001100_hook("y[E].word", decodeURIComponent(y[E].word), "assign"), y[E].word.length <= 20 && (b.push(y[E].word), w.push(y[E].id));
        if (b.length == 5) break;
      }
      $.ajax({
        url: cc11001100_hook("url", "https://api.ssl.so.com/placeholder_rec?cache=" + encodeURIComponent(b.join("")), "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        data: {
          id: cc11001100_hook("id", w.join(","), "object-key-init"),
          huid: cc11001100_hook("huid", So.lib.cookie.get("__huid") || "", "object-key-init"),
          asc: cc11001100_hook("asc", So.lib.getASC(), "object-key-init"),
          crec: cc11001100_hook("crec", So.lib.recls().wd, "object-key-init"),
          recext: cc11001100_hook("recext", So.lib.cookie.get("recext"), "object-key-init"),
          src: cc11001100_hook("src", "home_placeholder", "object-key-init"),
          ret_type: cc11001100_hook("ret_type", "jsonp", "object-key-init"),
          req: cc11001100_hook("req", "kw", "object-key-init")
        },
        jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
        timeout: cc11001100_hook("timeout", 2e3, "object-key-init"),
        success: function (e) {
          e && e.result && ($(".placeholder-default").attr("data-keyword", e.result.word).text(e.result.word), e.ext && e.ext.split("=").length && $("#nlpv").val(e.ext.split("=")[1]), e.ssid && $("input[name=ssid]").val(e.ssid));
        }
      });
    }
    g();
  }
  $("#bd_search form").on("submit", function () {
    var e = cc11001100_hook("e", $(this).find('input[name="cp"]'), "var-init");
    e.val() || e.val(So.lib.encp());
    if ($.trim(l.val()) == "") {
      var t = cc11001100_hook("t", $.trim(d.data("keyword")), "var-init");
      if (!t) return l.focus(), !1;
      m(), c.val("home_placeholder"), l.val(t);
    }
  }), So.lib.cookie.get("force_www_so") && $("#mobileHolder").show(), $("#mobile").on("click", function () {
    So.lib.cookie.remove("force_www_so");
  }), $("a[data-linkid]").bind("mousedown", function () {
    So.lib.log("", {
      q: cc11001100_hook("q", $.trim(l.val()), "object-key-init"),
      lk: cc11001100_hook("lk", $(this).attr("data-linkid"), "object-key-init"),
      datatype: cc11001100_hook("datatype", So.comm.nocard ? "nocard" : "card", "object-key-init")
    }, "sou/home_link");
  }), $("#search-button").bind("mousedown", function () {
    So.lib.log("", {
      q: cc11001100_hook("q", $.trim(l.val()) || $.trim(d.text()), "object-key-init"),
      eng: cc11001100_hook("eng", 0, "object-key-init"),
      huiche: cc11001100_hook("huiche", 0, "object-key-init")
    }, "sou/home_click");
  }), l.bind("keydown", function (e) {
    var t = cc11001100_hook("t", e.keyCode || e.which, "var-init");
    if (t === 13) if ($(".ac_wrap .ac_menu .selected").length) {
      var n = cc11001100_hook("n", $(".ac_wrap .ac_menu .selected"), "var-init");
      So.lib.log("", {
        input: cc11001100_hook("input", $.trim(l.val()), "object-key-init"),
        click: cc11001100_hook("click", n.attr("acvalue"), "object-key-init"),
        huiche: cc11001100_hook("huiche", 1, "object-key-init")
      }, "sou/home_suggst");
    } else So.lib.log("", {
      q: cc11001100_hook("q", $.trim(l.val()), "object-key-init"),
      eng: cc11001100_hook("eng", 0, "object-key-init"),
      huiche: cc11001100_hook("huiche", 1, "object-key-init")
    }, "sou/home_click");
  }), l.on("keydown input propertychange", function () {
    $.trim(l.val()) && m();
  }), l.on("keyup", function () {
    $.trim(l.val()) || g();
  }), $(".ac_wrap").delegate("li", "mousedown", function (e) {
    $(e.target).hasClass("del") || m(), So.lib.log("", {
      input: cc11001100_hook("input", $.trim(l.val()), "object-key-init"),
      click: cc11001100_hook("click", $(this).attr("acvalue"), "object-key-init"),
      huiche: cc11001100_hook("huiche", 0, "object-key-init")
    }, "sou/home_suggst");
  });
  var x = cc11001100_hook("x", So.lib.cookie.get("QiHooGUID") || "", "var-init"),
    T = cc11001100_hook("T", +new Date(), "var-init"),
    N = cc11001100_hook("N", So.comm.sp + (So.comm.usp !== "" ? "_" + So.comm.usp : ""), "var-init");
  So.lib.log("", {
    ref: cc11001100_hook("ref", document.referrer, "object-key-init"),
    guid: cc11001100_hook("guid", x, "object-key-init"),
    gid: cc11001100_hook("gid", So.comm.md, "object-key-init"),
    hid: cc11001100_hook("hid", So.lib.cookie.get("__huid") || "", "object-key-init"),
    qid: cc11001100_hook("qid", So.comm.user.qid, "object-key-init"),
    dpi: cc11001100_hook("dpi", window.screen.width + "_" + window.screen.height, "object-key-init"),
    dm: cc11001100_hook("dm", document.domain, "object-key-init"),
    ls: cc11001100_hook("ls", So.comm.ls || "", "object-key-init"),
    q: cc11001100_hook("q", d.data("from") === "recomm" ? $.trim(d.text()) : "", "object-key-init"),
    p1: cc11001100_hook("p1", So.lib.cookie.get("hot-news-card") || 1, "object-key-init"),
    llbq: cc11001100_hook("llbq", So.comm.llbq, "object-key-init"),
    sp: cc11001100_hook("sp", N, "object-key-init"),
    lt: cc11001100_hook("lt", So.lib.enlt("", So.comm.src, N, T), "object-key-init"),
    t: cc11001100_hook("t", T, "object-key-init")
  }, "sou/home"), location.protocol != "https:" && setTimeout(function () {
    monitor.setConf("httpsUrl", "https://www.so.com/_.gif"), monitor.log({}, "https");
  }, 500), So.lib.isSupportWebp();
  var C = cc11001100_hook("C", $('.ad[data-from="cms"]'), "var-init");
  if (C.length > 0) {
    So.lib.log("cms-ad", {
      type: cc11001100_hook("type", "show", "object-key-init"),
      datatype: cc11001100_hook("datatype", C.attr("data-type"), "object-key-init")
    }), C.on("mousedown", function () {
      So.lib.log("cms-ad", {
        type: cc11001100_hook("type", "click", "object-key-init"),
        datatype: cc11001100_hook("datatype", $(this).attr("data-type"), "object-key-init")
      });
    });
    if (C.data("link")) {
      var k = cc11001100_hook("k", new Image(), "var-init");
      k.onload = cc11001100_hook("k.onload", k.onerror = cc11001100_hook("k.onerror", function () {
        k = cc11001100_hook("k", null, "assign");
      }, "assign"), "assign"), k.src = cc11001100_hook("k.src", C.data("link"), "assign");
    }
  }
  setTimeout(function () {
    $("#bd_tabnav").show();
  }, 500), function () {
    var e = cc11001100_hook("e", So.lib.cookie.get("__huid"), "var-init");
    if (e) {
      var t = cc11001100_hook("t", new Image(), "var-init");
      t.onload = cc11001100_hook("t.onload", t.onerror = cc11001100_hook("t.onerror", function () {
        t = cc11001100_hook("t", null, "assign");
      }, "assign"), "assign"), t.src = cc11001100_hook("t.src", "//cm.mediav.com/lianmeng?maxhuid=" + encodeURIComponent(e), "assign");
    }
  }();
  var L = cc11001100_hook("L", "https://api.ssl.so.com/cloud_config", "var-init"),
    A = cc11001100_hook("A", {
      keys: cc11001100_hook("keys", "footer.html", "object-key-init"),
      from: cc11001100_hook("from", "www.so.com", "object-key-init")
    }, "var-init");
  $.ajax({
    url: cc11001100_hook("url", L, "object-key-init"),
    data: cc11001100_hook("data", A, "object-key-init"),
    method: cc11001100_hook("method", "get", "object-key-init"),
    dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
    crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
    success: function (e) {
      e.data && e.data["footer.html"] && $("#footer p").html(e.data["footer.html"]);
    },
    error: function (e) {}
  });
  var O = cc11001100_hook("O", new Date(), "var-init");
  O.setFullYear(O.getFullYear() + 10), typeof So.lib.cookie.get("so-like-red") == "undefined" && So.lib.cookie.set("so-like-red", 2, {
    expires: cc11001100_hook("expires", O, "object-key-init")
  });
  var M = cc11001100_hook("M", So.lib.cookie.get("so-like-red") == 2 && So.lib.cookie.get("hasUseFollowBtn") == 1, "var-init");
  if (M) {
    var _ = cc11001100_hook("_", "//user.360kuai.com/following/reddot", "var-init"),
      D = cc11001100_hook("D", {
        sign: cc11001100_hook("sign", "360_e39369d1", "object-key-init"),
        uid: cc11001100_hook("uid", So.lib.getUnMid(So.comm.md) || So.lib.getUnMid(So.lib.cookie.get("__md")) || So.lib.cookie.get("__guid") || So.comm.guid, "object-key-init"),
        f: cc11001100_hook("f", "jsonp", "object-key-init"),
        u_ctime: cc11001100_hook("u_ctime", 1, "object-key-init")
      }, "var-init");
    So.comm.proxy_ads_conf["kuai_asc"] == 1 && (D.uid = cc11001100_hook("D.uid", So.lib.cookie.get("__guid") || So.comm.guid, "assign"), D.asc = cc11001100_hook("D.asc", So.lib.getASC() || "", "assign"));
    function P(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      t = cc11001100_hook("t", t || Date.now(), "assign"), e && clearTimeout(e);
      if ($("#card_container")[0] || So.lib.cookie.get("hot-news-card") == 0 || Date.now() - t >= 5e3) {
        $(".follow_reddot").css({
          visibility: cc11001100_hook("visibility", "visible", "object-key-init")
        });
        return;
      }
      var n = cc11001100_hook("n", setTimeout(P, 50, n, t), "var-init");
    }
    $.ajax({
      url: cc11001100_hook("url", _, "object-key-init"),
      data: cc11001100_hook("data", D, "object-key-init"),
      method: cc11001100_hook("method", "get", "object-key-init"),
      dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      success: function (e) {
        e.data && ($("#my_kzx_flow_follow").data("redlike", 1), P(), So.lib.log("red_like", {
          type: cc11001100_hook("type", "show", "object-key-init")
        }));
      },
      error: function (e) {}
    });
  }
  var H = cc11001100_hook("H", $("#hd_follow"), "var-init"),
    B = cc11001100_hook("B", $("#hd_nav .follow a"), "var-init");
  t(B, H, null, function () {
    H.css("left", B.offset().left + B.outerWidth() / 2 - H.width() / 2);
  }), H.on("click", ".toggle-red-dot", function () {
    So.lib.cookie.get("so-like-red") == 2 ? (So.lib.cookie.set("so-like-red", 1, {
      expires: cc11001100_hook("expires", O, "object-key-init")
    }), location.reload()) : (So.lib.cookie.set("so-like-red", 2, {
      expires: cc11001100_hook("expires", O, "object-key-init")
    }), location.reload());
  });
  var j = cc11001100_hook("j", $(".follow"), "var-init");
  j.on("click", function () {
    if (M) {
      var e = cc11001100_hook("e", "//user.360kuai.com/following/redDotCTime", "var-init"),
        t = cc11001100_hook("t", {
          sign: cc11001100_hook("sign", "360_e39369d1", "object-key-init"),
          uid: cc11001100_hook("uid", So.lib.getUnMid(So.comm.md) || So.lib.getUnMid(So.lib.cookie.get("__md")) || So.lib.cookie.get("__guid") || So.comm.guid, "object-key-init"),
          f: cc11001100_hook("f", "jsonp", "object-key-init")
        }, "var-init");
      So.comm.proxy_ads_conf["kuai_asc"] == 1 && (t.uid = cc11001100_hook("t.uid", So.lib.cookie.get("__guid") || So.comm.guid, "assign"), t.asc = cc11001100_hook("t.asc", So.lib.getASC() || "", "assign")), $.ajax({
        url: cc11001100_hook("url", e, "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init"),
        method: cc11001100_hook("method", "get", "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        success: function (e) {
          $(".follow_reddot").css({
            visibility: cc11001100_hook("visibility", "hidden", "object-key-init")
          });
        },
        error: function (e) {}
      });
    }
    window.open("https://www.so.com/zt/recommend.html#/follow"), So.lib.log("red-like", {
      type: cc11001100_hook("type", "click", "object-key-init"),
      mod: cc11001100_hook("mod", $("#my_kzx_flow_follow").data("redlike") ? "red-mylike" : "mylike", "object-key-init")
    });
  }), F();
}(), function () {
  var e = cc11001100_hook("e", $("#input"), "var-init"),
    t = cc11001100_hook("t", $(".search-del"), "var-init"),
    n = cc11001100_hook("n", $(".ac_wrap"), "var-init"),
    r = cc11001100_hook("r", !1, "var-init"),
    i;
  t.click(function () {
    var r = cc11001100_hook("r", $(this), "var-init"),
      i = cc11001100_hook("i", t.index(r), "var-init");
    e.eq(i).val("").focus(), n && n.hide();
  }), e.focus(function () {
    var n = cc11001100_hook("n", $(this), "var-init"),
      s = cc11001100_hook("s", e.index(n), "var-init"),
      o = cc11001100_hook("o", t.eq(s), "var-init");
    clearInterval(i), i = cc11001100_hook("i", setInterval(function () {
      $.trim(n.val()) == "" ? o.hide() : o.show();
    }, 100), "assign"), !r && +new Date() - So.comm.t > 2e4 && (monitor.setConf("httpsUrl", "https://www.so.com/_.gif"), monitor.log({}, "https"), r = cc11001100_hook("r", !0, "assign"));
  }).blur(function () {
    var n = cc11001100_hook("n", $(this), "var-init"),
      r = cc11001100_hook("r", e.index(n), "var-init"),
      s = cc11001100_hook("s", t.eq(r), "var-init");
    clearInterval(i), $.trim(n.val()) == "" ? s.hide() : s.show();
  }), $(".add-hot-news-card").on("click", function () {
    So.lib.observer.publish("so.homecard.addHotNewsCard");
  }), $(".close-hot-news-card").on("click", function () {
    So.lib.observer.publish("so.homecard.closeHotNewsCard");
  });
}(), function () {
  var e = cc11001100_hook("e", ['<div id="close-card-mask">', '<div class="bubble">', "<h3><%= title %></h3>", "<p><%= desc %></p>", '<a href="javascript:;" class="sure-del"><%= sureTxt %></a>', '<a href="javascript:;" class="cancel">\u53d6\u6d88</a>', "</div>", "</div>"].join(""), "var-init"),
    t = cc11001100_hook("t", $("body"), "var-init");
  So.web.closeMask = cc11001100_hook("So.web.closeMask", function (n) {
    if ($("#close-card-mask").length) return;
    t.append(So.lib.template(e, n)), $("#close-card-mask").on("click", function (e) {
      var t = cc11001100_hook("t", $(this), "var-init"),
        r = cc11001100_hook("r", $(e.target), "var-init");
      r.hasClass("close") || r.hasClass("cancel") ? t.remove() : r.hasClass("sure-del") ? (n.callback(), window.location.reload()) : !r.is(".bubble") && !r.closest(".bubble").length && t.remove();
    });
  }, "assign");
}(), So.web.skinMain = cc11001100_hook("So.web.skinMain", {
  cookies: {
    flag: cc11001100_hook("flag", "skin", "object-key-init"),
    limit: cc11001100_hook("limit", "skinRecLimit", "object-key-init"),
    close: cc11001100_hook("close", "skinClose", "object-key-init"),
    custom: cc11001100_hook("custom", "skinCustom", "object-key-init")
  },
  logMark: cc11001100_hook("logMark", "newSkin", "object-key-init"),
  skinEffectJs: cc11001100_hook("skinEffectJs", "", "object-key-init"),
  prefix: cc11001100_hook("prefix", "skin", "object-key-init"),
  $logo: cc11001100_hook("$logo", $(".skin-logo"), "object-key-init"),
  $skinBg: cc11001100_hook("$skinBg", $("#skin_bg"), "object-key-init"),
  $skinTip: cc11001100_hook("$skinTip", $(".skin-tip"), "object-key-init"),
  $opacity: cc11001100_hook("$opacity", null, "object-key-init"),
  $disable: cc11001100_hook("$disable", null, "object-key-init"),
  cookieMark: cc11001100_hook("cookieMark", "l-status", "object-key-init"),
  storageObj: cc11001100_hook("storageObj", new So.web.storage("skinList", 365), "object-key-init"),
  storageKey: cc11001100_hook("storageKey", "skinList", "object-key-init"),
  init: function () {
    var e = cc11001100_hook("e", this, "var-init");
    So.web.skin.skinJs && e.loadSkinJs(So.web.skin.skinJs.replace(/http:\/\/s\d+\.(qhimg|qhmsg|qhres|qhres2)\.com\/static/g, "https://ss1.360tres.com/ssl")), e.remind(), e.initEvent();
  },
  remind: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", $('<div class="g-mask logout-mask"><div class="box"><a href="javascript:;" class="close g-close"></a><p>\u4eb2\uff0c\u9000\u51fa\u540e\u65e0\u6cd5\u7ee7\u7eed\u4f7f\u7528\u5f53\u524d\u7f8e\u7f8e\u7684\u58c1\u7eb8\u54e6~<br>\u5c06\u540c\u6b65\u672a\u767b\u5f55\u65f6\u76ae\u80a4\u72b6\u6001</p><a href="javascript:;" class="g-btn g-btn-green exit">\u7ee7\u7eed\u9000\u51fa</a><a href="javascript:;" class="g-btn g-btn-green2 cancel">\u53d6  \u6d88</a></div></div>'), "var-init");
    $("#user-logout").on("click", function () {
      return So.lib.cookie.set(e.cookieMark, "1"), So.web.skin.flag != "" || So.web.skin.limitTime != "" ? ($("body").append(t), So.lib.log(e.logMark, {
        type: cc11001100_hook("type", "logout-mask", "object-key-init")
      }), t.on("click", "a", function () {
        var n = cc11001100_hook("n", $(this), "var-init");
        n.hasClass("close") || n.hasClass("cancel") ? (t.remove(), So.lib.log(e.logMark, {
          type: cc11001100_hook("type", "logout-close", "object-key-init")
        })) : n.hasClass("exit") && (So.lib.log(e.logMark, {
          type: cc11001100_hook("type", "logout", "object-key-init")
        }), So.web.login.logout());
      })) : So.web.login.logout(), !1;
    }), $("#user-login").on("click", function () {
      So.lib.cookie.set(e.cookieMark, "1");
    }), So.lib.cookie.get(e.cookieMark) && (So.web.skin.flag == "" && So.web.skin.limitTime == "" && $("#hd_nav .changeskin").append('<span class="new1"/>'), So.lib.cookie.remove(e.cookieMark));
  },
  loadSkinJs: function (e) {
    var t = cc11001100_hook("t", this, "var-init");
    e && (e = cc11001100_hook("e", So.lib.sslReplace(e), "assign"), _loader.use("require.2.1.11", function () {
      require([e], function (e) {
        e && typeof e.start == "function" && (e.start(), t.skinEffectJs = cc11001100_hook("t.skinEffectJs", e, "assign"));
      });
    }));
  },
  removeEffect: function () {
    var e = cc11001100_hook("e", this, "var-init");
    e.skinEffectJs && typeof e.skinEffectJs.stop == "function" && e.skinEffectJs.stop();
  },
  loadSkinCss: function (e) {
    if (e) {
      e = cc11001100_hook("e", So.lib.sslReplace(e), "assign");
      var t = cc11001100_hook("t", $("head"), "var-init");
      t.find('link[href="' + e + '"]').length || $('<link type="text/css" rel="stylesheet" />').appendTo(t).attr("href", e);
    }
  },
  addBodyClass: function (e, t) {
    $("body").addClass("skin"), e && $("body").addClass(" skin-" + e), t && $("body").addClass(" skin-" + t), So.web.skin.cssStyle == "dark" && $("body").addClass("skin-dark");
  },
  removeBodyClass: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", $("body"), "var-init"),
      n = cc11001100_hook("n", $("body[class*=" + e.prefix + "]").attr("class"), "var-init");
    n && t.attr("class", $.trim(n.replace(new RegExp(e.prefix + "\\S*", "g"), "").replace(/\s+/g, " ")));
  },
  showSkin: function (e, t, n, r, i, s, o) {
    var u = cc11001100_hook("u", this, "var-init");
    i ? (u.$logo.attr("href", i), u.$logo.attr("style", "")) : (u.$logo.attr("href", u.$logo.attr("data-href")), u.$logo.attr("style", u.$logo.attr("data-style"))), s ? u.$logo.attr("title", s) : u.$logo.attr("title", u.$logo.attr("data-title")), u.removeEffect(), u.removeBodyClass(), u.addBodyClass(e, o), u.setSkinBg(t), u.loadSkinCss(n), u.loadSkinJs(r), u.saveSkinSetting(1, e);
  },
  clearSkin: function (e) {
    var t = cc11001100_hook("t", this, "var-init");
    t.setSkinBg(""), t.removeEffect(), t.removeBodyClass(), t.saveSkinSetting(e), t.$logo.attr("href", t.$logo.attr("data-href")), t.$logo.attr("title", t.$logo.attr("data-title")), t.$logo.attr("style", t.$logo.attr("data-style"));
  },
  setSkinBg: function (e) {
    var t = cc11001100_hook("t", this, "var-init");
    e ? t.$skinBg.css("background-image", "url(" + e + ")") : (t.$skinBg.css("background-image", "none"), t.$skinBg.css("background-color", "#fff"));
  },
  setCookie: function (e, t) {
    var n = cc11001100_hook("n", new Date(), "var-init");
    n.setDate(n.getDate() + 365), So.lib.cookie.set(e, t, {
      expires: cc11001100_hook("expires", n, "object-key-init")
    });
  },
  saveSkinSetting: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init");
    if (So.comm.user.qid) $.ajax({
      url: cc11001100_hook("url", "/index.php?c=skin&a=setmyskin", "object-key-init"),
      type: cc11001100_hook("type", "post", "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      data: {
        flag: cc11001100_hook("flag", t || "", "object-key-init"),
        type: cc11001100_hook("type", e, "object-key-init"),
        css_style: cc11001100_hook("css_style", So.web.skin.cssStyle, "object-key-init")
      },
      success: function (e) {}
    });else {
      if (e === 1) {
        So.lib.cookie.remove(n.cookies.close);
        if (t) {
          n.setCookie(n.cookies.flag, t);
          var r = cc11001100_hook("r", n.storageObj.get(n.storageKey) || [], "var-init");
          for (var i = cc11001100_hook("i", 0, "var-init"), s = cc11001100_hook("s", r.length, "var-init"); i < s; i++) if (r[i] == t) {
            r.splice(i, 1);
            break;
          }
          r.unshift(t), r = cc11001100_hook("r", r.slice(0, 29), "assign"), n.storageObj.set(n.storageKey, r);
        }
      } else n.setCookie(n.cookies.close, 1), So.lib.cookie.remove(n.cookies.flag);
      So.web.skin.limitTime && So.lib.cookie.set(n.cookies.limit, So.web.skin.flag_limit || "none", {
        expires: cc11001100_hook("expires", new Date(parseFloat(So.web.skin.limitTime)), "object-key-init")
      });
    }
    e == 1 && t ? So.web.skin.flag = cc11001100_hook("So.web.skin.flag", t, "assign") : So.web.skin.flag = cc11001100_hook("So.web.skin.flag", "", "assign"), n.$skinTip.hide();
  },
  setSetting: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", /msie (\d+)/i.test(navigator.userAgent) && !window.opera ? parseInt(RegExp.$1) : 0, "var-init"),
      n = cc11001100_hook("n", $("#so_skin_panel"), "var-init"),
      r = cc11001100_hook("r", n.find(".opacity"), "var-init"),
      i = cc11001100_hook("i", n.find(".disable"), "var-init");
    $backtosrcSkin = cc11001100_hook("$backtosrcSkin", n.find(".skin-tip"), "assign"), r.hide(), So.web.skin.flag ? i.show() : i.hide(), So.web.skin.tip !== "" && So.web.skin.tip !== 1 && (n.find(".skin-tip").length == 0 && n.find(".r-tools").prepend(So.web.skin.tip).find(".skin-tip").addClass("g-a-dark").show(), n.on("click", ".skin-tip", function () {
      var t = cc11001100_hook("t", $(this), "var-init"),
        r,
        i = cc11001100_hook("i", t.attr("data-type"), "var-init");
      i == "old" && (So.lib.log(e.logMark, {
        type: cc11001100_hook("type", "tipOld", "object-key-init"),
        p1: cc11001100_hook("p1", So.web.skin.flag, "object-key-init"),
        p2: cc11001100_hook("p2", So.web.skin.type, "object-key-init")
      }), r = cc11001100_hook("r", So.web.skin.skinOld, "assign"), r ? e.showSkin(r.flag, r.src, r.pic_css, r.pic_js, r.logo_link, r.logo_title, r.css_style) : So.lib.cookie.get(e.cookies.close) == 0 ? e.clearSkin(0) : e.clearSkin(1), So.web.skin.tip = cc11001100_hook("So.web.skin.tip", "", "assign"), n.hide());
    }));
  },
  initEvent: function () {
    var e = cc11001100_hook("e", this, "var-init");
    $("#hd_nav li.changeskin a").on("click", function () {
      So.lib.log(e.logMark, {
        type: cc11001100_hook("type", "showPanel", "object-key-init"),
        p1: cc11001100_hook("p1", So.web.skin.flag, "object-key-init"),
        p2: cc11001100_hook("p2", So.web.skin.type, "object-key-init")
      });
      var t = cc11001100_hook("t", $("#so_skin_panel"), "var-init");
      return (So.web.skin.tip == "" || So.web.skin.tip == 1) && t.find(".skin-tip").hide(), t.length == 0 ? (_loader.add("skinload", "https://ss4.360tres.com/ssl/bf558434707f0fe5/dist/home/skin.js"), _loader.use("require.2.1.11,skinload", function () {
        _loader.remove("skinload");
      })) : (e.setSetting(), t.slideDown()), $("#hd_nav li.changeskin").find(".new").remove(), So.lib.cookie.remove(e.cookieMark), !1;
    }), e.$logo.on("click", function (e) {
      $(this).attr("href") == "javascript:;" && e.preventDefault();
    }), So.lib.cookie.get(e.cookies.custom) && setTimeout(function () {
      So.lib.log(e.logMark, {
        type: cc11001100_hook("type", "showPanel1", "object-key-init"),
        p1: cc11001100_hook("p1", So.web.skin.flag, "object-key-init"),
        p2: cc11001100_hook("p2", So.web.skin.type, "object-key-init")
      }), $("#hd_nav li.changeskin a").click();
    }, 500), So.web.skin.flag && So.lib.log(e.logMark, {
      type: cc11001100_hook("type", "loadSkin", "object-key-init"),
      p1: cc11001100_hook("p1", So.web.skin.flag, "object-key-init"),
      p2: cc11001100_hook("p2", So.web.skin.type, "object-key-init")
    });
  }
}, "assign"), So.web.skinMain.init(), function (e) {
  e.fn.hoverDelay = cc11001100_hook("e.fn.hoverDelay", function (t) {
    var n = cc11001100_hook("n", {
        hoverDuring: cc11001100_hook("hoverDuring", 200, "object-key-init"),
        outDuring: cc11001100_hook("outDuring", 200, "object-key-init"),
        hoverEvent: function () {
          e.noop();
        },
        outEvent: function () {
          e.noop();
        }
      }, "var-init"),
      r = cc11001100_hook("r", e.extend(n, t || {}), "var-init");
    return e(this).each(function () {
      var t = cc11001100_hook("t", e(this), "var-init"),
        n,
        i;
      t.hover(function () {
        clearTimeout(i), n = cc11001100_hook("n", setTimeout(function () {
          r.hoverEvent(t);
        }, r.hoverDuring), "assign");
      }, function () {
        clearTimeout(n), i = cc11001100_hook("i", setTimeout(function () {
          r.outEvent(t);
        }, r.outDuring), "assign");
      });
    });
  }, "assign");
}(jQuery);