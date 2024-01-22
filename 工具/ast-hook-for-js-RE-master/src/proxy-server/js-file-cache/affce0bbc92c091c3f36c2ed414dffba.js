So.web.login = cc11001100_hook("So.web.login", function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    e ? t() : $.ajax({
      url: cc11001100_hook("url", "https://s.ssl.qhimg.com/quc/quc7.js?_=" + new Date().getTime(), "object-key-init"),
      dataType: cc11001100_hook("dataType", "script", "object-key-init"),
      cache: cc11001100_hook("cache", !0, "object-key-init"),
      success: function () {
        e = cc11001100_hook("e", !0, "assign");
        var n = cc11001100_hook("n", ["sou.com", "so.com", "360.cn", "360.com"], "var-init");
        QHPass.init({
          src: cc11001100_hook("src", "pcw_newso", "object-key-init"),
          signIn: {
            types: cc11001100_hook("types", ["qrcode", "mobile", "normal"], "object-key-init"),
            hideKeepAlive: cc11001100_hook("hideKeepAlive", !1, "object-key-init")
          },
          signUp: {
            types: cc11001100_hook("types", ["mobile", "email"], "object-key-init"),
            protocolText: cc11001100_hook("protocolText", "360\u641c\u7d22\u7528\u6237\u534f\u8bae", "object-key-init"),
            protocolUrl: cc11001100_hook("protocolUrl", "http://www.so.com/help/help_uagreement.html", "object-key-init"),
            privacyText: cc11001100_hook("privacyText", "360\u641c\u7d22\u9690\u79c1\u534f\u8bae", "object-key-init"),
            privacyUrl: cc11001100_hook("privacyUrl", "http://www.so.com/help/help_privacy.html", "object-key-init"),
            hidePasswordAgain: cc11001100_hook("hidePasswordAgain", !1, "object-key-init")
          },
          domainList: cc11001100_hook("domainList", n, "object-key-init")
        }), QHPass.setConfig("supportHttps", n), t();
      }
    });
  }
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    QHPass.signIn(function () {
      e && e();
      var t = cc11001100_hook("t", new Date(), "var-init");
      t.setDate(t.getDate() + 1), t.setHours(0, 0, 0), So.lib.cookie.set("loginrec", 1, {
        expires: cc11001100_hook("expires", t, "object-key-init")
      }), location.reload(!0);
    });
  }
  function r() {
    QHPass.signUp(function () {
      location.reload(!0);
    });
  }
  function i() {
    QHPass.signOut(["so.com", "sou.com"], function () {
      location.reload(!0);
    });
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    t(function () {
      n(e);
    }, !0);
  }
  function o() {
    t(i, !1);
  }
  function u() {
    $("#user-login").bind("click", function () {
      return t(n), !1;
    }), $("#user-reg").bind("click", function () {
      return t(r), !1;
    }), So.comm.pid != "home" && $("#user-logout").bind("click", function () {
      return t(i), !1;
    });
  }
  var e = cc11001100_hook("e", !1, "var-init"),
    a = cc11001100_hook("a", {
      load: function () {
        $.ajax({
          url: cc11001100_hook("url", "https://ss1.360tres.com/ssl/482ef937b07a3803.js", "object-key-init"),
          dataType: cc11001100_hook("dataType", "script", "object-key-init"),
          cache: cc11001100_hook("cache", !0, "object-key-init"),
          success: function () {
            window.QHUC.on("ready", function (e) {
              QHUC.getMid() && window.HUID && HUID.setMid(QHUC.getMid());
              if (e && e.errno === 0) if (e.local) {
                So.lib.log("ws-i", {
                  value: cc11001100_hook("value", e.local, "object-key-init")
                });
                var t = cc11001100_hook("t", new Date(), "var-init");
                t.setDate(t.getDate() + 30), So.lib.cookie.set("suw", e.local, {
                  expires: cc11001100_hook("expires", t, "object-key-init")
                });
              } else So.lib.log("ws-i", {
                value: cc11001100_hook("value", 0, "object-key-init")
              }), So.lib.cookie.remove("suw");
              e && e.qid && !So.comm.user.qid && (a.createBtn(), a.bindEvent());
            }), window.QHUC.init({
              src: cc11001100_hook("src", "pcw_newso", "object-key-init"),
              needFastSignIn: cc11001100_hook("needFastSignIn", !0, "object-key-init")
            });
          }
        });
      },
      controlPop: function () {
        if ($("._uc_").length && So.lib.isVisible1($("._uc_")[0])) a.hidePop();else {
          QHUC.showPopup($("#header")[0]);
          var e = cc11001100_hook("e", $("._uc_"), "var-init"),
            t = cc11001100_hook("t", $("#user_onekey_login"), "var-init"),
            n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", 20, "var-init");
          So.comm.pid != "home" && (t = cc11001100_hook("t", $("#hd-rtools .user-group"), "assign"), n = cc11001100_hook("n", 20, "assign"), r = cc11001100_hook("r", 25, "assign")), e.hide().slideDown(150).css({
            left: cc11001100_hook("left", t.offset().left + t.width() - e.width() + n, "object-key-init"),
            top: cc11001100_hook("top", t.position().top + t.height() + r, "object-key-init"),
            position: cc11001100_hook("position", "absolute", "object-key-init"),
            zIndex: cc11001100_hook("zIndex", 3001, "object-key-init")
          });
        }
        return So.lib.log("login-onekey", {
          value: cc11001100_hook("value", "click", "object-key-init")
        }), !1;
      },
      hidePop: function () {
        $("._uc_").slideUp(150, function () {
          QHUC.hidePopup();
        });
      },
      createBtn: function () {
        var e = cc11001100_hook("e", $("#user-login"), "var-init");
        e.hide(), $('<a href="http://i.360.cn/login?src=pcw_newso&destUrl=' + encodeURIComponent(location.href) + '" id="user_onekey_login">\u4e00\u952e\u767b\u5f55</a>').insertAfter(e).on("click", a.controlPop), So.lib.log("login-onekey", {
          value: cc11001100_hook("value", "show", "object-key-init")
        });
      },
      bindEvent: function () {
        $(window).on("resize scroll", function () {
          a.hidePop();
        }), $("body").on("click", function (e) {
          $(e.target).closest("._uc_").length == 0 && a.hidePop();
        }), QHUC.on("fastSignIn", function () {
          So.lib.log("login-onekey", {
            value: cc11001100_hook("value", "in", "object-key-init")
          }), location.reload();
        }), QHUC.on("other", s);
      }
    }, "var-init");
  return So.page.onload.push(function () {
    a.load();
  }), u(), {
    signIn: cc11001100_hook("signIn", s, "object-key-init"),
    logout: cc11001100_hook("logout", o, "object-key-init")
  };
}(), "assign"), function (e, t) {
  t(e.jQuery);
}(this, function (e) {
  function u(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (n.webkit && !t) return {
      height: cc11001100_hook("height", 0, "object-key-init"),
      width: cc11001100_hook("width", 0, "object-key-init")
    };
    if (!n.data.outer) {
      var r = cc11001100_hook("r", {
        border: cc11001100_hook("border", "none", "object-key-init"),
        "box-sizing": cc11001100_hook("box-sizing", "content-box", "object-key-init"),
        height: cc11001100_hook("height", "200px", "object-key-init"),
        margin: cc11001100_hook("margin", "0", "object-key-init"),
        padding: cc11001100_hook("padding", "0", "object-key-init"),
        width: cc11001100_hook("width", "200px", "object-key-init")
      }, "var-init");
      n.data.inner = cc11001100_hook("n.data.inner", e("<div>").css(e.extend({}, r)), "assign"), n.data.outer = cc11001100_hook("n.data.outer", e("<div>").css(e.extend({
        left: cc11001100_hook("left", "-1000px", "object-key-init"),
        overflow: cc11001100_hook("overflow", "scroll", "object-key-init"),
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        top: cc11001100_hook("top", "-1000px", "object-key-init")
      }, r)).append(n.data.inner).appendTo("body"), "assign");
    }
    return n.data.outer.scrollLeft(1e3).scrollTop(1e3), {
      height: cc11001100_hook("height", Math.ceil(n.data.outer.offset().top - n.data.inner.offset().top || 0), "object-key-init"),
      width: cc11001100_hook("width", Math.ceil(n.data.outer.offset().left - n.data.inner.offset().left || 0), "object-key-init")
    };
  }
  function a() {
    var e = cc11001100_hook("e", u(!0), "var-init");
    return !e.height && !e.width;
  }
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.originalEvent, "var-init");
    return t.axis && t.axis === t.HORIZONTAL_AXIS ? !1 : t.wheelDeltaX ? !1 : !0;
  }
  var t = cc11001100_hook("t", !1, "var-init"),
    n = cc11001100_hook("n", {
      data: {
        index: cc11001100_hook("index", 0, "object-key-init"),
        name: cc11001100_hook("name", "scrollbar", "object-key-init")
      },
      macosx: cc11001100_hook("macosx", /mac/i.test(navigator.platform), "object-key-init"),
      mobile: cc11001100_hook("mobile", /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent), "object-key-init"),
      overlay: cc11001100_hook("overlay", null, "object-key-init"),
      scroll: cc11001100_hook("scroll", null, "object-key-init"),
      scrolls: cc11001100_hook("scrolls", [], "object-key-init"),
      webkit: cc11001100_hook("webkit", /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent), "object-key-init")
    }, "var-init");
  n.scrolls.add = cc11001100_hook("n.scrolls.add", function (e) {
    this.remove(e).push(e);
  }, "assign"), n.scrolls.remove = cc11001100_hook("n.scrolls.remove", function (t) {
    while (e.inArray(t, this) >= 0) this.splice(e.inArray(t, this), 1);
    return this;
  }, "assign");
  var r = cc11001100_hook("r", {
      autoScrollSize: cc11001100_hook("autoScrollSize", !0, "object-key-init"),
      autoUpdate: cc11001100_hook("autoUpdate", !0, "object-key-init"),
      debug: cc11001100_hook("debug", !1, "object-key-init"),
      disableBodyScroll: cc11001100_hook("disableBodyScroll", !1, "object-key-init"),
      duration: cc11001100_hook("duration", 200, "object-key-init"),
      ignoreMobile: cc11001100_hook("ignoreMobile", !1, "object-key-init"),
      ignoreOverlay: cc11001100_hook("ignoreOverlay", !1, "object-key-init"),
      scrollStep: cc11001100_hook("scrollStep", 30, "object-key-init"),
      showArrows: cc11001100_hook("showArrows", !1, "object-key-init"),
      stepScrolling: cc11001100_hook("stepScrolling", !0, "object-key-init"),
      scrollx: cc11001100_hook("scrollx", null, "object-key-init"),
      scrolly: cc11001100_hook("scrolly", null, "object-key-init"),
      onDestroy: cc11001100_hook("onDestroy", null, "object-key-init"),
      onInit: cc11001100_hook("onInit", null, "object-key-init"),
      onScroll: cc11001100_hook("onScroll", null, "object-key-init"),
      onUpdate: cc11001100_hook("onUpdate", null, "object-key-init")
    }, "var-init"),
    i = function (t) {
      n.scroll || (n.overlay = cc11001100_hook("n.overlay", a(), "assign"), n.scroll = cc11001100_hook("n.scroll", u(), "assign"), o(), e(window).resize(function () {
        var e = cc11001100_hook("e", !1, "var-init");
        if (n.scroll && (n.scroll.height || n.scroll.width)) {
          var t = cc11001100_hook("t", u(), "var-init");
          if (t.height !== n.scroll.height || t.width !== n.scroll.width) n.scroll = cc11001100_hook("n.scroll", t, "assign"), e = cc11001100_hook("e", !0, "assign");
        }
        o(e);
      })), this.container = cc11001100_hook("this.container", t, "assign"), this.namespace = cc11001100_hook("this.namespace", ".scrollbar_" + n.data.index++, "assign"), this.options = cc11001100_hook("this.options", e.extend({}, r, window.jQueryScrollbarOptions || {}), "assign"), this.scrollTo = cc11001100_hook("this.scrollTo", null, "assign"), this.scrollx = cc11001100_hook("this.scrollx", {}, "assign"), this.scrolly = cc11001100_hook("this.scrolly", {}, "assign"), t.data(n.data.name, this), n.scrolls.add(this);
    };
  i.prototype = cc11001100_hook("i.prototype", {
    destroy: function () {
      if (!this.wrapper) return;
      this.container.removeData(n.data.name), n.scrolls.remove(this);
      var t = cc11001100_hook("t", this.container.scrollLeft(), "var-init"),
        r = cc11001100_hook("r", this.container.scrollTop(), "var-init");
      this.container.insertBefore(this.wrapper).css({
        height: cc11001100_hook("height", "", "object-key-init"),
        margin: cc11001100_hook("margin", "", "object-key-init"),
        "max-height": cc11001100_hook("max-height", "", "object-key-init")
      }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(r), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), e(document).add("body").off(this.namespace), e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container]);
    },
    init: function (t) {
      var r = cc11001100_hook("r", this, "var-init"),
        i = cc11001100_hook("i", this.container, "var-init"),
        s = cc11001100_hook("s", this.containerWrapper || i, "var-init"),
        o = cc11001100_hook("o", this.namespace, "var-init"),
        u = cc11001100_hook("u", e.extend(this.options, t || {}), "var-init"),
        a = cc11001100_hook("a", {
          x: cc11001100_hook("x", this.scrollx, "object-key-init"),
          y: cc11001100_hook("y", this.scrolly, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", this.wrapper, "var-init"),
        c = cc11001100_hook("c", {
          scrollLeft: cc11001100_hook("scrollLeft", i.scrollLeft(), "object-key-init"),
          scrollTop: cc11001100_hook("scrollTop", i.scrollTop(), "object-key-init")
        }, "var-init");
      if (n.mobile && u.ignoreMobile || n.overlay && u.ignoreOverlay || n.macosx && !n.webkit) return !1;
      if (!l) {
        this.wrapper = cc11001100_hook("this.wrapper", l = cc11001100_hook("l", e("<div>").addClass("scroll-wrapper").addClass(i.attr("class")).css("position", i.css("position") == "absolute" ? "absolute" : "relative").insertBefore(i).append(i), "assign"), "assign"), i.is("textarea") && (this.containerWrapper = cc11001100_hook("this.containerWrapper", s = cc11001100_hook("s", e("<div>").insertBefore(i).append(i), "assign"), "assign"), l.addClass("scroll-textarea")), s.addClass("scroll-content").css({
          height: cc11001100_hook("height", "auto", "object-key-init"),
          "margin-bottom": cc11001100_hook("margin-bottom", n.scroll.height * -1 + "px", "object-key-init"),
          "margin-right": cc11001100_hook("margin-right", n.scroll.width * -1 + "px", "object-key-init"),
          "max-height": cc11001100_hook("max-height", "", "object-key-init")
        }), i.on("scroll" + o, function (t) {
          e.isFunction(u.onScroll) && u.onScroll.call(r, {
            maxScroll: cc11001100_hook("maxScroll", a.y.maxScrollOffset, "object-key-init"),
            scroll: cc11001100_hook("scroll", i.scrollTop(), "object-key-init"),
            size: cc11001100_hook("size", a.y.size, "object-key-init"),
            visible: cc11001100_hook("visible", a.y.visible, "object-key-init")
          }, {
            maxScroll: cc11001100_hook("maxScroll", a.x.maxScrollOffset, "object-key-init"),
            scroll: cc11001100_hook("scroll", i.scrollLeft(), "object-key-init"),
            size: cc11001100_hook("size", a.x.size, "object-key-init"),
            visible: cc11001100_hook("visible", a.x.visible, "object-key-init")
          }), a.x.isVisible && a.x.scroll.bar.css("left", i.scrollLeft() * a.x.kx + "px"), a.y.isVisible && a.y.scroll.bar.css("top", i.scrollTop() * a.y.kx + "px");
        }), l.on("scroll" + o, function () {
          l.scrollTop(0).scrollLeft(0);
        });
        if (u.disableBodyScroll) {
          var h = function (e) {
            f(e) ? a.y.isVisible && a.y.mousewheel(e) : a.x.isVisible && a.x.mousewheel(e);
          };
          l.on("MozMousePixelScroll" + o, h), l.on("mousewheel" + o, h), n.mobile && l.on("touchstart" + o, function (t) {
            var n = cc11001100_hook("n", t.originalEvent.touches && t.originalEvent.touches[0] || t, "var-init"),
              r = cc11001100_hook("r", {
                pageX: cc11001100_hook("pageX", n.pageX, "object-key-init"),
                pageY: cc11001100_hook("pageY", n.pageY, "object-key-init")
              }, "var-init"),
              s = cc11001100_hook("s", {
                left: cc11001100_hook("left", i.scrollLeft(), "object-key-init"),
                top: cc11001100_hook("top", i.scrollTop(), "object-key-init")
              }, "var-init");
            e(document).on("touchmove" + o, function (e) {
              var t = cc11001100_hook("t", e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e, "var-init");
              i.scrollLeft(s.left + r.pageX - t.pageX), i.scrollTop(s.top + r.pageY - t.pageY), e.preventDefault();
            }), e(document).on("touchend" + o, function () {
              e(document).off(o);
            });
          });
        }
        e.isFunction(u.onInit) && u.onInit.apply(this, [i]);
      } else s.css({
        height: cc11001100_hook("height", "auto", "object-key-init"),
        "margin-bottom": cc11001100_hook("margin-bottom", n.scroll.height * -1 + "px", "object-key-init"),
        "margin-right": cc11001100_hook("margin-right", n.scroll.width * -1 + "px", "object-key-init"),
        "max-height": cc11001100_hook("max-height", "", "object-key-init")
      });
      e.each(a, function (t, n) {
        var s = cc11001100_hook("s", null, "var-init"),
          l = cc11001100_hook("l", 1, "var-init"),
          c = cc11001100_hook("c", t === "x" ? "scrollLeft" : "scrollTop", "var-init"),
          h = cc11001100_hook("h", u.scrollStep, "var-init"),
          p = function () {
            var e = cc11001100_hook("e", i[c](), "var-init");
            i[c](e + h), l == 1 && e + h >= d && (e = cc11001100_hook("e", i[c](), "assign")), l == -1 && e + h <= d && (e = cc11001100_hook("e", i[c](), "assign")), i[c]() == e && s && s();
          },
          d = cc11001100_hook("d", 0, "var-init");
        n.scroll || (n.scroll = cc11001100_hook("n.scroll", r._getScroll(u["scroll" + t]).addClass("scroll-" + t), "assign"), u.showArrows && n.scroll.addClass("scroll-element_arrows_visible"), n.mousewheel = cc11001100_hook("n.mousewheel", function (e) {
          if (!n.isVisible || t === "x" && f(e)) return !0;
          if (t === "y" && !f(e)) return a.x.mousewheel(e), !0;
          var s = cc11001100_hook("s", e.originalEvent.wheelDelta * -1 || e.originalEvent.detail, "var-init"),
            o = cc11001100_hook("o", n.size - n.visible - n.offset, "var-init");
          if (s > 0 && d < o || s < 0 && d > 0) d += cc11001100_hook("d", s, "assign"), d < 0 && (d = cc11001100_hook("d", 0, "assign")), d > o && (d = cc11001100_hook("d", o, "assign")), r.scrollTo = cc11001100_hook("r.scrollTo", r.scrollTo || {}, "assign"), r.scrollTo[c] = cc11001100_hook("r.scrollTo[c]", d, "assign"), setTimeout(function () {
            r.scrollTo && (i.stop().animate(r.scrollTo, 240, "linear", function () {
              d = cc11001100_hook("d", i[c](), "assign");
            }), r.scrollTo = cc11001100_hook("r.scrollTo", null, "assign"));
          }, 1);
          return e.preventDefault(), !1;
        }, "assign"), n.scroll.on("MozMousePixelScroll" + o, n.mousewheel).on("mousewheel" + o, n.mousewheel).on("mouseenter" + o, function () {
          d = cc11001100_hook("d", i[c](), "assign");
        }), n.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + o, function (o) {
          if (o.which != 1) return !0;
          l = cc11001100_hook("l", 1, "assign");
          var a = cc11001100_hook("a", {
              eventOffset: cc11001100_hook("eventOffset", o[t === "x" ? "pageX" : "pageY"], "object-key-init"),
              maxScrollValue: cc11001100_hook("maxScrollValue", n.size - n.visible - n.offset, "object-key-init"),
              scrollbarOffset: cc11001100_hook("scrollbarOffset", n.scroll.bar.offset()[t === "x" ? "left" : "top"], "object-key-init"),
              scrollbarSize: cc11001100_hook("scrollbarSize", n.scroll.bar[t === "x" ? "outerWidth" : "outerHeight"](), "object-key-init")
            }, "var-init"),
            f = cc11001100_hook("f", 0, "var-init"),
            v = cc11001100_hook("v", 0, "var-init");
          return e(this).hasClass("scroll-arrow") ? (l = cc11001100_hook("l", e(this).hasClass("scroll-arrow_more") ? 1 : -1, "assign"), h = cc11001100_hook("h", u.scrollStep * l, "assign"), d = cc11001100_hook("d", l > 0 ? a.maxScrollValue : 0, "assign")) : (l = cc11001100_hook("l", a.eventOffset > a.scrollbarOffset + a.scrollbarSize ? 1 : a.eventOffset < a.scrollbarOffset ? -1 : 0, "assign"), h = cc11001100_hook("h", Math.round(n.visible * .75) * l, "assign"), d = cc11001100_hook("d", a.eventOffset - a.scrollbarOffset - (u.stepScrolling ? l == 1 ? a.scrollbarSize : 0 : Math.round(a.scrollbarSize / 2)), "assign"), d = cc11001100_hook("d", i[c]() + d / n.kx, "assign")), r.scrollTo = cc11001100_hook("r.scrollTo", r.scrollTo || {}, "assign"), r.scrollTo[c] = cc11001100_hook("r.scrollTo[c]", u.stepScrolling ? i[c]() + h : d, "assign"), u.stepScrolling && (s = cc11001100_hook("s", function () {
            d = cc11001100_hook("d", i[c](), "assign"), clearInterval(v), clearTimeout(f), f = cc11001100_hook("f", 0, "assign"), v = cc11001100_hook("v", 0, "assign");
          }, "assign"), f = cc11001100_hook("f", setTimeout(function () {
            v = cc11001100_hook("v", setInterval(p, 40), "assign");
          }, u.duration + 100), "assign")), setTimeout(function () {
            r.scrollTo && (i.animate(r.scrollTo, u.duration), r.scrollTo = cc11001100_hook("r.scrollTo", null, "assign"));
          }, 1), r._handleMouseDown(s, o);
        }), n.scroll.bar.on("mousedown" + o, function (s) {
          if (s.which != 1) return !0;
          var u = cc11001100_hook("u", s[t === "x" ? "pageX" : "pageY"], "var-init"),
            a = cc11001100_hook("a", i[c](), "var-init");
          return n.scroll.addClass("scroll-draggable"), e(document).on("mousemove" + o, function (e) {
            var r = cc11001100_hook("r", parseInt((e[t === "x" ? "pageX" : "pageY"] - u) / n.kx, 10), "var-init");
            i[c](a + r);
          }), r._handleMouseDown(function () {
            n.scroll.removeClass("scroll-draggable"), d = cc11001100_hook("d", i[c](), "assign");
          }, s);
        }));
      }), e.each(a, function (e, t) {
        var n = cc11001100_hook("n", "scroll-scroll" + e + "_visible", "var-init"),
          r = cc11001100_hook("r", e == "x" ? a.y : a.x, "var-init");
        t.scroll.removeClass(n), r.scroll.removeClass(n), s.removeClass(n);
      }), e.each(a, function (t, n) {
        e.extend(n, t == "x" ? {
          offset: cc11001100_hook("offset", parseInt(i.css("left"), 10) || 0, "object-key-init"),
          size: cc11001100_hook("size", i.prop("scrollWidth"), "object-key-init"),
          visible: cc11001100_hook("visible", l.width(), "object-key-init")
        } : {
          offset: cc11001100_hook("offset", parseInt(i.css("top"), 10) || 0, "object-key-init"),
          size: cc11001100_hook("size", i.prop("scrollHeight"), "object-key-init"),
          visible: cc11001100_hook("visible", l.height(), "object-key-init")
        });
      }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), e.isFunction(u.onUpdate) && u.onUpdate.apply(this, [i]), e.each(a, function (e, t) {
        var n = cc11001100_hook("n", e === "x" ? "left" : "top", "var-init"),
          r = cc11001100_hook("r", e === "x" ? "outerWidth" : "outerHeight", "var-init"),
          s = cc11001100_hook("s", e === "x" ? "width" : "height", "var-init"),
          o = cc11001100_hook("o", parseInt(i.css(n), 10) || 0, "var-init"),
          a = cc11001100_hook("a", t.size, "var-init"),
          f = cc11001100_hook("f", t.visible + o, "var-init"),
          l = cc11001100_hook("l", t.scroll.size[r]() + (parseInt(t.scroll.size.css(n), 10) || 0), "var-init");
        u.autoScrollSize && (t.scrollbarSize = cc11001100_hook("t.scrollbarSize", parseInt(l * f / a, 10), "assign"), t.scroll.bar.css(s, t.scrollbarSize + "px")), t.scrollbarSize = cc11001100_hook("t.scrollbarSize", t.scroll.bar[r](), "assign"), t.kx = cc11001100_hook("t.kx", (l - t.scrollbarSize) / (a - f) || 1, "assign"), t.maxScrollOffset = cc11001100_hook("t.maxScrollOffset", a - f, "assign");
      }), i.scrollLeft(c.scrollLeft).scrollTop(c.scrollTop).trigger("scroll");
    },
    _getScroll: function (t) {
      var n = cc11001100_hook("n", {
        advanced: cc11001100_hook("advanced", ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""), "object-key-init"),
        simple: cc11001100_hook("simple", ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join(""), "object-key-init")
      }, "var-init");
      return n[t] && (t = cc11001100_hook("t", n[t], "assign")), t || (t = cc11001100_hook("t", n.simple, "assign")), typeof t == "string" ? t = cc11001100_hook("t", e(t).appendTo(this.wrapper), "assign") : t = cc11001100_hook("t", e(t), "assign"), e.extend(t, {
        bar: cc11001100_hook("bar", t.find(".scroll-bar"), "object-key-init"),
        size: cc11001100_hook("size", t.find(".scroll-element_size"), "object-key-init"),
        track: cc11001100_hook("track", t.find(".scroll-element_track"), "object-key-init")
      }), t;
    },
    _handleMouseDown: function (t, n) {
      var r = cc11001100_hook("r", this.namespace, "var-init");
      return e(document).on("blur" + r, function () {
        e(document).add("body").off(r), t && t();
      }), e(document).on("dragstart" + r, function (e) {
        return e.preventDefault(), !1;
      }), e(document).on("mouseup" + r, function () {
        e(document).add("body").off(r), t && t();
      }), e("body").on("selectstart" + r, function (e) {
        return e.preventDefault(), !1;
      }), n && n.preventDefault(), !1;
    },
    _updateScroll: function (t, r) {
      var i = cc11001100_hook("i", this.container, "var-init"),
        s = cc11001100_hook("s", this.containerWrapper || i, "var-init"),
        o = cc11001100_hook("o", "scroll-scroll" + t + "_visible", "var-init"),
        u = cc11001100_hook("u", t === "x" ? this.scrolly : this.scrollx, "var-init"),
        a = cc11001100_hook("a", parseInt(this.container.css(t === "x" ? "left" : "top"), 10) || 0, "var-init"),
        f = cc11001100_hook("f", this.wrapper, "var-init"),
        l = cc11001100_hook("l", r.size, "var-init"),
        c = cc11001100_hook("c", r.visible + a, "var-init");
      r.isVisible = cc11001100_hook("r.isVisible", l - c > 1, "assign"), r.isVisible ? (r.scroll.addClass(o), u.scroll.addClass(o), s.addClass(o)) : (r.scroll.removeClass(o), u.scroll.removeClass(o), s.removeClass(o)), t === "y" && (i.is("textarea") || l < c ? s.css({
        height: cc11001100_hook("height", c + n.scroll.height + "px", "object-key-init"),
        "max-height": cc11001100_hook("max-height", "none", "object-key-init")
      }) : s.css({
        "max-height": cc11001100_hook("max-height", c + n.scroll.height + "px", "object-key-init")
      }));
      if (r.size != i.prop("scrollWidth") || u.size != i.prop("scrollHeight") || r.visible != f.width() || u.visible != f.height() || r.offset != (parseInt(i.css("left"), 10) || 0) || u.offset != (parseInt(i.css("top"), 10) || 0)) e.extend(this.scrollx, {
        offset: cc11001100_hook("offset", parseInt(i.css("left"), 10) || 0, "object-key-init"),
        size: cc11001100_hook("size", i.prop("scrollWidth"), "object-key-init"),
        visible: cc11001100_hook("visible", f.width(), "object-key-init")
      }), e.extend(this.scrolly, {
        offset: cc11001100_hook("offset", parseInt(i.css("top"), 10) || 0, "object-key-init"),
        size: cc11001100_hook("size", this.container.prop("scrollHeight"), "object-key-init"),
        visible: cc11001100_hook("visible", f.height(), "object-key-init")
      }), this._updateScroll(t === "x" ? "y" : "x", u);
    }
  }, "assign");
  var s = cc11001100_hook("s", i, "var-init");
  e.fn.scrollbar = cc11001100_hook("e.fn.scrollbar", function (t, r) {
    return typeof t != "string" && (r = cc11001100_hook("r", t, "assign"), t = cc11001100_hook("t", "init", "assign")), typeof r == "undefined" && (r = cc11001100_hook("r", [], "assign")), e.isArray(r) || (r = cc11001100_hook("r", [r], "assign")), this.not("body, .scroll-wrapper").each(function () {
      var i = cc11001100_hook("i", e(this), "var-init"),
        o = cc11001100_hook("o", i.data(n.data.name), "var-init");
      if (o || t === "init") o || (o = cc11001100_hook("o", new s(i), "assign")), o[t] && o[t].apply(o, r);
    }), this;
  }, "assign"), e.fn.scrollbar.options = cc11001100_hook("e.fn.scrollbar.options", r, "assign");
  var o = cc11001100_hook("o", function () {
    var e = cc11001100_hook("e", 0, "var-init"),
      r = cc11001100_hook("r", 0, "var-init");
    return function (i) {
      var s, u, a, f, l, c, h;
      for (s = cc11001100_hook("s", 0, "assign"); s < n.scrolls.length; s++) {
        f = cc11001100_hook("f", n.scrolls[s], "assign"), u = cc11001100_hook("u", f.container, "assign"), a = cc11001100_hook("a", f.options, "assign"), l = cc11001100_hook("l", f.wrapper, "assign"), c = cc11001100_hook("c", f.scrollx, "assign"), h = cc11001100_hook("h", f.scrolly, "assign");
        if (i || a.autoUpdate && l && l.is(":visible") && (u.prop("scrollWidth") != c.size || u.prop("scrollHeight") != h.size || l.width() != c.visible || l.height() != h.visible)) f.init(), a.debug && (window.console && console.log({
          scrollHeight: cc11001100_hook("scrollHeight", u.prop("scrollHeight") + ":" + f.scrolly.size, "object-key-init"),
          scrollWidth: cc11001100_hook("scrollWidth", u.prop("scrollWidth") + ":" + f.scrollx.size, "object-key-init"),
          visibleHeight: cc11001100_hook("visibleHeight", l.height() + ":" + f.scrolly.visible, "object-key-init"),
          visibleWidth: cc11001100_hook("visibleWidth", l.width() + ":" + f.scrollx.visible, "object-key-init")
        }, !0), r++);
      }
      t && r > 10 ? (window.console && console.log("Scroll updates exceed 10"), o = cc11001100_hook("o", function () {}, "assign")) : (clearTimeout(e), e = cc11001100_hook("e", setTimeout(o, 300), "assign"));
    };
  }(), "var-init");
  window.angular && function (e) {
    e.module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
      var t = cc11001100_hook("t", r, "var-init");
      return {
        setOptions: function (n) {
          e.extend(t, n);
        },
        $get: function () {
          return {
            options: cc11001100_hook("options", e.copy(t), "object-key-init")
          };
        }
      };
    }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (e, t) {
      return {
        restrict: cc11001100_hook("restrict", "AC", "object-key-init"),
        link: function (n, r, i) {
          var s = cc11001100_hook("s", t(i.jqueryScrollbar), "var-init"),
            o = cc11001100_hook("o", s(n), "var-init");
          r.scrollbar(o || e.options).on("$destroy", function () {
            r.scrollbar("destroy");
          });
        }
      };
    }]);
  }(window.angular);
}), So.web.weather = cc11001100_hook("So.web.weather", {
  weatherData: {},
  areaCache: {},
  elments: {},
  storageKey: cc11001100_hook("storageKey", "soWeather", "object-key-init"),
  logKey: cc11001100_hook("logKey", "soWeather", "object-key-init"),
  storageObj: cc11001100_hook("storageObj", new So.web.storage("soWeather", 365), "object-key-init"),
  storageCustomKey: cc11001100_hook("storageCustomKey", "soWeatherCustom", "object-key-init"),
  storageCustom: cc11001100_hook("storageCustom", new So.web.storage("soWeatherCustom", 365), "object-key-init"),
  areaUrl: cc11001100_hook("areaUrl", "//cdn.weather.hao.360.cn/sed_api_area_query.php", "object-key-init"),
  oneboxProxy: cc11001100_hook("oneboxProxy", "https://open.onebox.so.com/api/proxy?__url__=", "object-key-init"),
  isFirstLoad: cc11001100_hook("isFirstLoad", !0, "object-key-init"),
  init: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", e.elments, "var-init"),
      n = cc11001100_hook("n", ['<div class="bar skin-text skin-text-top"></div>', '   <div class="detail">', '       <a href="javascript:;" class="change">\u5207\u6362</a>', '       <div class="title"><span class="date"></span>&nbsp;&nbsp;<span class="at"></span><a class="seven" href="#" target="_blank">\u672a\u6765\u4e03\u5929\u5929\u6c14</a></div>', '       <div class="select">', "           <p>\u9009\u62e9\u60a8\u6240\u5728\u7684\u5730\u533a\uff1a</p> ", '           <div href="javascript:;" class="select-input province"><span></span><div class="select-list"><div class="scrollbar-inner"><ul></ul></div></div></div>', '           <div href="javascript:;" class="select-input city"><span></span><div class="select-list"><div class="scrollbar-inner"><ul></ul></div></div></div>', '           <div href="javascript:;" class="select-input town"><span></span><div class="select-list"><div class="scrollbar-inner"><ul></ul></div></div></div>', '           <input type="button" class="cancel" value="\u53d6\u6d88">', '           <input type="button" class="ok" value="\u4fdd\u5b58">', "       </div>", '       <div class="curr-day"></div>', '       <div class="list"></div>', "   </div>"], "var-init"),
      r = cc11001100_hook("r", $("#so_weather").html(n.join("")).show(), "var-init");
    r.find(".scrollbar-inner").scrollbar(), r.find(".skin-text").fadeIn(), t.$bar = cc11001100_hook("t.$bar", r.find(".bar"), "assign"), t.$detail = cc11001100_hook("t.$detail", r.find(".detail"), "assign"), t.$change = cc11001100_hook("t.$change", r.find(".change"), "assign"), t.$currDay = cc11001100_hook("t.$currDay", r.find(".curr-day"), "assign"), t.$list = cc11001100_hook("t.$list", r.find(".list"), "assign"), t.$select = cc11001100_hook("t.$select", r.find(".select"), "assign"), t.$province = cc11001100_hook("t.$province", r.find(".province"), "assign"), t.$city = cc11001100_hook("t.$city", r.find(".city"), "assign"), t.$town = cc11001100_hook("t.$town", r.find(".town"), "assign"), t.$seven = cc11001100_hook("t.$seven", r.find(".seven"), "assign"), t.$at = cc11001100_hook("t.$at", r.find(".at"), "assign"), t.$ok = cc11001100_hook("t.$ok", r.find(".ok"), "assign"), t.$cancel = cc11001100_hook("t.$cancel", r.find(".cancel"), "assign"), t.$date = cc11001100_hook("t.$date", r.find(".date"), "assign"), e.getWeatherData(), e.eventBind();
  },
  getWeatherData: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", e.storageObj.get(e.storageKey) || null, "var-init");
    e.customArea = cc11001100_hook("e.customArea", e.storageCustom.get(e.storageCustomKey) || null, "assign");
    if (!t) e.customArea ? e.requestWeatherData(e.customArea[0][0] + e.customArea[1][0] + e.customArea[2][0], e.customArea[2][1]) : e.requestWeatherData();else {
      e.weatherData = cc11001100_hook("e.weatherData", t, "assign");
      try {
        Math.abs(+new Date() - t.expires) > 3e5 ? e.customArea ? e.requestWeatherData(e.customArea[0][0] + e.customArea[1][0] + e.customArea[2][0], e.customArea[2][1]) : e.requestWeatherData() : e.fillWeatherData();
      } catch (n) {
        e.storageObj.remove(e.storageKey);
      }
    }
  },
  requestWeatherData: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init"),
      e = cc11001100_hook("e", e || "", "var-init"),
      t = cc11001100_hook("t", t || "", "var-init");
    setTimeout(function () {
      var r = cc11001100_hook("r", "//open.onebox.so.com/Dataapi", "var-init"),
        i = cc11001100_hook("i", {
          query: cc11001100_hook("query", e + "\u5929\u6c14", "object-key-init"),
          type: cc11001100_hook("type", "weather", "object-key-init"),
          ip: cc11001100_hook("ip", So.comm.ip, "object-key-init"),
          src: cc11001100_hook("src", "soindex", "object-key-init"),
          d: cc11001100_hook("d", "pc", "object-key-init"),
          url: cc11001100_hook("url", encodeURIComponent("http://cdn.weather.hao.360.cn/sed_api_weather_info.php?app=guideEngine&fmt=json&code=" + t), "object-key-init")
        }, "var-init");
      e == "" && t == "" && (i.url = cc11001100_hook("i.url", "weather", "assign")), $.ajax({
        url: cc11001100_hook("url", r, "object-key-init"),
        data: cc11001100_hook("data", i, "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
        success: function (e) {
          e && e.weather && e.weather.length && n.formatWeatherData(e);
        }
      });
    });
  },
  formatWeatherData: function (e) {
    var t = cc11001100_hook("t", this, "var-init"),
      n = cc11001100_hook("n", new Date(), "var-init"),
      r = cc11001100_hook("r", n.getHours(), "var-init"),
      i = cc11001100_hook("i", e.weather[1], "var-init"),
      s = cc11001100_hook("s", e.weather[2], "var-init"),
      o = cc11001100_hook("o", e.weather[3], "var-init"),
      u = cc11001100_hook("u", e.weather[4], "var-init"),
      a = cc11001100_hook("a", i.info, "var-init"),
      f = cc11001100_hook("f", s.info, "var-init"),
      l = cc11001100_hook("l", o.info, "var-init"),
      c = cc11001100_hook("c", u.info, "var-init"),
      h;
    if (!(a && a.night && a.day && f && f.night && f.day && l && l.night && l.day && c && c.day && c.night)) return;
    var p = cc11001100_hook("p", {
      time: cc11001100_hook("time", +n, "object-key-init"),
      area: cc11001100_hook("area", e.area, "object-key-init"),
      pm25: cc11001100_hook("pm25", "", "object-key-init"),
      today: {
        T: cc11001100_hook("T", "", "object-key-init"),
        img: cc11001100_hook("img", "", "object-key-init"),
        desc: cc11001100_hook("desc", "", "object-key-init"),
        wind: cc11001100_hook("wind", "", "object-key-init"),
        date: cc11001100_hook("date", i.date, "object-key-init")
      },
      tomorrow: {
        T: cc11001100_hook("T", f.night[2] + "~" + f.day[2], "object-key-init"),
        img: cc11001100_hook("img", "1-" + f.day[0], "object-key-init"),
        desc: cc11001100_hook("desc", f.day[1], "object-key-init"),
        date: cc11001100_hook("date", s.date, "object-key-init"),
        week: cc11001100_hook("week", "\u5468" + s.week, "object-key-init"),
        weekNumber: cc11001100_hook("weekNumber", (new Date().getDay() + 1) % 7, "object-key-init")
      },
      after: {
        T: cc11001100_hook("T", l.night[2] + "~" + l.day[2], "object-key-init"),
        img: cc11001100_hook("img", "1-" + l.day[0], "object-key-init"),
        desc: cc11001100_hook("desc", l.day[1], "object-key-init"),
        date: cc11001100_hook("date", o.date, "object-key-init"),
        week: cc11001100_hook("week", "\u5468" + o.week, "object-key-init"),
        weekNumber: cc11001100_hook("weekNumber", (new Date().getDay() + 2) % 7, "object-key-init")
      },
      threeDaysFromNow: {
        T: cc11001100_hook("T", c.night[2] + "~" + c.day[2], "object-key-init"),
        img: cc11001100_hook("img", "1-" + c.day[0], "object-key-init"),
        desc: cc11001100_hook("desc", c.day[1], "object-key-init"),
        date: cc11001100_hook("date", u.date, "object-key-init"),
        weekNumber: cc11001100_hook("weekNumber", (new Date().getDay() + 3) % 7, "object-key-init")
      },
      life: {
        chuanyi: cc11001100_hook("chuanyi", "", "object-key-init"),
        yundong: cc11001100_hook("yundong", "", "object-key-init"),
        ganmao: cc11001100_hook("ganmao", "", "object-key-init"),
        xiche: cc11001100_hook("xiche", "", "object-key-init"),
        ziwaixian: cc11001100_hook("ziwaixian", "", "object-key-init")
      },
      realtime: {
        T: cc11001100_hook("T", e.realtime.weather.temperature, "object-key-init")
      },
      expires: cc11001100_hook("expires", +n, "object-key-init")
    }, "var-init");
    e.pm25.pm25 && (p.pm25 = cc11001100_hook("p.pm25", e.pm25.pm25.curPm, "assign")), r >= 5 && r <= 20 ? (h = cc11001100_hook("h", 1, "assign"), p.today.T = cc11001100_hook("p.today.T", a.night[2] + "~" + a.day[2], "assign"), p.today.img = cc11001100_hook("p.today.img", h + "-" + a.day[0], "assign"), p.today.desc = cc11001100_hook("p.today.desc", a.day[1], "assign"), p.today.wind = cc11001100_hook("p.today.wind", a.day[3] + " " + a.day[4], "assign")) : (h = cc11001100_hook("h", 0, "assign"), p.today.T = cc11001100_hook("p.today.T", a.night[2], "assign"), p.today.img = cc11001100_hook("p.today.img", h + "-" + a.night[0], "assign"), p.today.desc = cc11001100_hook("p.today.desc", a.night[1], "assign"), p.today.wind = cc11001100_hook("p.today.wind", a.night[3] + " " + a.night[4], "assign")), t.weatherData = cc11001100_hook("t.weatherData", p, "assign"), t.storageObj.set(t.storageKey, p), t.fillWeatherData();
  },
  fillWeatherData: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", e.weatherData, "var-init"),
      n = cc11001100_hook("n", e.elments, "var-init"),
      r = cc11001100_hook("r", [], "var-init"),
      i,
      s;
    s = cc11001100_hook("s", e.renderSearchWord(t), "assign");
    var o = cc11001100_hook("o", So.lib.sslReplace("https://so1.360tres.com/d/inn/8daeff153cbe/weather/"), "var-init");
    r = cc11001100_hook("r", ['<a class="pos_weather" href="/s?ie=utf-8&src=search_weather&q=' + s + '" target="_blank">', "   <span>" + t.area[2][0] + "</span>", '   <span><img width="21" height="21" src="' + o + t.today.img + '.png">&nbsp;' + t.realtime.T + "\u00b0C</span>", "</a>", e.renderPm25QualityHtml(t)], "assign"), n.$bar.html(r.join("")), n.$at.text(t.area[2][0]), n.$seven.attr("href", "http://tianqi.so.com/weather/" + t.area[2][1]), i = cc11001100_hook("i", '<a href="/s?ie=utf-8&src=search_weather&q=' + s + '" target="_blank">', "assign"), n.$list.html(e.renderListHtml(i, t)), n.$currDay.html(e.renderCurrDayHtml(i, t)), n.$date.html(So.lib.formatTime(new Date(t.today.date), "M\u6708d\u65e5"));
  },
  renderSearchWord: function (e) {
    var t = cc11001100_hook("t", "", "var-init");
    return e.area[0][0] == e.area[2][0] ? t = cc11001100_hook("t", encodeURIComponent(e.area[0][0] + "\u5929\u6c14\u9884\u62a5"), "assign") : t = cc11001100_hook("t", encodeURIComponent(e.area[0][0] + e.area[2][0] + "\u5929\u6c14\u9884\u62a5"), "assign"), t;
  },
  renderCurrDayHtml: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init"),
      r = cc11001100_hook("r", "", "var-init"),
      i = cc11001100_hook("i", n.isFirstLoad ? "data-src" : "src", "var-init"),
      s = cc11001100_hook("s", So.lib.sslReplace("https://so1.360tres.com/d/inn/8daeff153cbe/weather/"), "var-init");
    return r = cc11001100_hook("r", [e, '<img width="80" height="80" ' + i + '="' + s + t.today.img + '.png">', '<div class="curr-day-wrap">', '    <span class="weather">' + t.today.T + "\u00b0C</span>", '    <span class="feature">' + t.today.desc + "</span>", '    <span class="wind">' + t.today.wind + "</span>", "</div></a>"], "assign"), r.join("");
  },
  renderListHtml: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init"),
      r = cc11001100_hook("r", "", "var-init"),
      i = cc11001100_hook("i", n.isFirstLoad ? "data-src" : "src", "var-init"),
      s = cc11001100_hook("s", So.lib.sslReplace("https://so1.360tres.com/d/inn/8daeff153cbe/weather/"), "var-init"),
      o = cc11001100_hook("o", t.threeDaysFromNow.date.split("-"), "var-init");
    return r = cc11001100_hook("r", [e, " <div>\u660e\u5929" + (t.tomorrow.week ? "(" + t.tomorrow.week + ")" : "") + "</div>", " <img " + i + '="' + s + t.tomorrow.img + '.png">', " <div>" + t.tomorrow.desc + "</div>", " <div>" + t.tomorrow.T + "\u00b0C</div>", "</a>", e, " <div>\u540e\u5929" + (t.after.week ? "(" + t.after.week + ")" : "") + "</div>", " <img " + i + '="' + s + t.after.img + '.png">', " <div>" + t.after.desc + "</div>", " <div>" + t.after.T + "\u00b0C</div>", "</a>", e, " <div>" + o[1].replace(/^0/gi, "") + "\u6708" + o[2].replace(/^0/gi, "") + "\u65e5</div>", " <img " + i + '="' + s + t.threeDaysFromNow.img + '.png">', " <div>" + t.threeDaysFromNow.desc + "</div>", " <div>" + t.threeDaysFromNow.T + "\u00b0C</div>", "</a>"], "assign"), r.join("");
  },
  renderPm25QualityHtml: function (e) {
    var t = cc11001100_hook("t", "", "var-init"),
      n = cc11001100_hook("n", "", "var-init"),
      r = cc11001100_hook("r", "", "var-init"),
      i = cc11001100_hook("i", e.pm25, "var-init");
    return i != "" && (i > 300 ? (n = cc11001100_hook("n", 6, "assign"), r = cc11001100_hook("r", "\u4e25\u91cd", "assign")) : i > 200 ? (n = cc11001100_hook("n", 5, "assign"), r = cc11001100_hook("r", "\u91cd\u5ea6", "assign")) : i > 150 ? (n = cc11001100_hook("n", 4, "assign"), r = cc11001100_hook("r", "\u4e2d\u5ea6", "assign")) : i > 100 ? (n = cc11001100_hook("n", 3, "assign"), r = cc11001100_hook("r", "\u8f7b\u5ea6", "assign")) : i > 50 ? (n = cc11001100_hook("n", 2, "assign"), r = cc11001100_hook("r", "\u826f", "assign")) : i >= 0 && (n = cc11001100_hook("n", 1, "assign"), r = cc11001100_hook("r", "\u4f18", "assign")), t = cc11001100_hook("t", '<a href="/s?ie=utf-8&src=search_weather&q=' + encodeURIComponent(e.area[2][0]) + ' pm2.5" target="_blank"><span><b class="pm25-l pm25-l' + n + '">' + r + "</b></span></a>", "assign")), t;
  },
  eventBind: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", e.elments, "var-init"),
      n,
      r;
    t.$bar.hover(function () {
      clearTimeout(n), r = cc11001100_hook("r", setTimeout(function () {
        t.$detail.css({
          left: cc11001100_hook("left", (t.$bar.width() - t.$detail.width()) / 2, "object-key-init")
        }).fadeIn(300), So.lib.log(e.logKey, {
          type: cc11001100_hook("type", "detail", "object-key-init"),
          datatype: cc11001100_hook("datatype", So.comm.nocard ? "nocard" : "card", "object-key-init")
        });
      }, 300), "assign"), e.isFirstLoad && (So.lib.lazyImg(t.$list), So.lib.lazyImg(t.$currDay), e.isFirstLoad = cc11001100_hook("e.isFirstLoad", !1, "assign"));
    }, function () {
      clearTimeout(r), n = cc11001100_hook("n", setTimeout(function () {
        t.$detail.fadeOut(300);
      }, 300), "assign");
    }), t.$detail.mouseenter(function () {
      clearTimeout(n);
    }).mouseleave(function (e) {
      if (So.lib.isVisible1(t.$select[0])) return;
      clearTimeout(r);
      var i = cc11001100_hook("i", window.event || e, "var-init");
      if (document.all) {
        if (!i.toElement) return;
      } else if (!i.relatedTarget) return;
      n = cc11001100_hook("n", setTimeout(function () {
        t.$detail.fadeOut(300), t.$select.hide();
      }, 200), "assign");
    }), $("body").on("click", function (e) {
      $(e.target).closest("#so_weather .detail").length == 0 && (t.$detail.fadeOut(300), t.$select.hide());
    }), t.$change.on("click", function () {
      e.showArea();
    }), t.$province.on("mouseenter", function () {
      $(this).find(".select-list").show();
    }).on("click", function (t) {
      var n = cc11001100_hook("n", $(t.target), "var-init");
      n.is("li") && ($(this).find(".select-list").hide(), $(this).find("span").attr("data-val", n.attr("data-val")).html(n.html()), e.getCity(n.attr("data-val"), "", function (t) {
        e.getTown(t);
      }));
    }), t.$city.on("mouseenter", function () {
      $(this).find(".select-list").show();
    }).on("click", function (t) {
      var n = cc11001100_hook("n", $(t.target), "var-init");
      n.is("li") && ($(this).find(".select-list").hide(), $(this).find("span").attr("data-val", n.attr("data-val")).html(n.html()), e.getTown(n.attr("data-val")));
    }), t.$town.on("mouseenter", function () {
      $(this).find(".select-list").show();
    }).on("click", function (e) {
      var t = cc11001100_hook("t", $(e.target), "var-init");
      t.is("li") && ($(this).find(".select-list").hide(), $(this).find("span").attr("data-val", t.attr("data-val")).html(t.html()));
    }), t.$province.on("mouseleave", function () {
      $(this).find(".select-list").hide();
    }), t.$city.on("mouseleave", function () {
      $(this).find(".select-list").hide();
    }), t.$town.on("mouseleave", function () {
      $(this).find(".select-list").hide();
    }), t.$cancel.on("click", function () {
      t.$select.hide();
    }), t.$ok.on("click", function () {
      So.lib.log(e.logKey, {
        type: cc11001100_hook("type", "changArea", "object-key-init")
      }), t.$select.hide();
      var n = cc11001100_hook("n", t.$province.find("span"), "var-init"),
        r = cc11001100_hook("r", t.$city.find("span"), "var-init"),
        i = cc11001100_hook("i", t.$town.find("span"), "var-init"),
        s = cc11001100_hook("s", [n.html(), r.html(), i.html()].join(""), "var-init"),
        o = cc11001100_hook("o", i.attr("data-val"), "var-init");
      e.requestWeatherData(s, o);
      var u = cc11001100_hook("u", [[n.html(), n.attr("data-val")], [r.html(), r.attr("data-val")], [i.html(), i.attr("data-val")]], "var-init");
      e.storageCustom.set(e.storageCustomKey, u);
    });
  },
  showArea: function () {
    var e = cc11001100_hook("e", this, "var-init"),
      t = cc11001100_hook("t", e.weatherData, "var-init"),
      n = cc11001100_hook("n", t.area[0][1], "var-init"),
      r = cc11001100_hook("r", t.area[1][1], "var-init"),
      i = cc11001100_hook("i", t.area[2][1], "var-init");
    setTimeout(function () {
      e.getProvince(n), e.getCity(n, r), e.getTown(r, i), e.elments.$select.show();
    }, 20);
  },
  getProvince: function (e) {
    var t = cc11001100_hook("t", this, "var-init"),
      n = cc11001100_hook("n", t.areaCache, "var-init");
    n.province ? t.fillProvince(n.province, e) : (n.province = cc11001100_hook("n.province", [], "assign"), $.ajax({
      url: cc11001100_hook("url", t.areaUrl, "object-key-init"),
      data: {
        grade: cc11001100_hook("grade", "province", "object-key-init"),
        app: cc11001100_hook("app", "guideEngine", "object-key-init")
      },
      dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
      jsonp: cc11001100_hook("jsonp", "_jsonp", "object-key-init"),
      success: function (r) {
        !r || (n.province = cc11001100_hook("n.province", r, "assign"), t.fillProvince(r, e));
      }
    }));
  },
  fillProvince: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init"),
      r = cc11001100_hook("r", n.elments.$province, "var-init"),
      i = cc11001100_hook("i", [], "var-init");
    for (var s = cc11001100_hook("s", 0, "var-init"), o = cc11001100_hook("o", e.length, "var-init"); s < o; s++) i.push('<li data-val="' + e[s][1] + '">' + e[s][0] + "</li>"), s == 0 && r.find("span").attr("data-val", e[s][1]).html(e[s][0]);
    r.find(".select-list ul").html(i.join(""));
    if (!!t) for (var s = cc11001100_hook("s", 0, "var-init"), o = cc11001100_hook("o", e.length, "var-init"); s < o; s++) if (t == e[s][1]) {
      r.find("span").attr("data-val", t).html(e[s][0]);
      break;
    }
  },
  getCity: function (e, t, n) {
    var r = cc11001100_hook("r", this, "var-init"),
      i = cc11001100_hook("i", "c" + e, "var-init"),
      s = cc11001100_hook("s", r.areaCache, "var-init");
    s.city || (s.city = cc11001100_hook("s.city", {}, "assign")), s.city[i] ? r.fillCity(s.city[i], t, n) : $.ajax({
      url: cc11001100_hook("url", r.areaUrl, "object-key-init"),
      data: {
        grade: cc11001100_hook("grade", "city", "object-key-init"),
        code: cc11001100_hook("code", e, "object-key-init"),
        app: cc11001100_hook("app", "guideEngine", "object-key-init")
      },
      dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
      jsonp: cc11001100_hook("jsonp", "_jsonp", "object-key-init"),
      success: function (e) {
        !e || (s.city[i] = cc11001100_hook("s.city[i]", e, "assign"), r.fillCity(e, t, n));
      }
    });
  },
  fillCity: function (e, t, n) {
    var r = cc11001100_hook("r", this, "var-init"),
      i = cc11001100_hook("i", r.elments.$city, "var-init"),
      s = cc11001100_hook("s", [], "var-init");
    for (var o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", e.length, "var-init"); o < u; o++) s.push('<li data-val="' + e[o][1] + '">' + e[o][0] + "</li>"), o == 0 && i.find("span").attr("data-val", e[o][1]).html(e[o][0]);
    i.find(".select-list ul").html(s.join(""));
    if (!!t) for (var o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", e.length, "var-init"); o < u; o++) if (t == e[o][1]) {
      i.find("span").attr("data-val", t).html(e[o][0]);
      break;
    }
    n && n(e[0][1]);
  },
  getTown: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init"),
      r = cc11001100_hook("r", n.areaCache, "var-init"),
      i = cc11001100_hook("i", "t" + e, "var-init");
    r.town || (r.town = cc11001100_hook("r.town", {}, "assign")), r.town[i] ? n.fillTown(r.town[i], t) : $.ajax({
      url: cc11001100_hook("url", n.areaUrl, "object-key-init"),
      data: {
        grade: cc11001100_hook("grade", "town", "object-key-init"),
        code: cc11001100_hook("code", e, "object-key-init"),
        app: cc11001100_hook("app", "guideEngine", "object-key-init")
      },
      dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
      jsonp: cc11001100_hook("jsonp", "_jsonp", "object-key-init"),
      success: function (e) {
        !e || (r.town[i] = cc11001100_hook("r.town[i]", e, "assign"), n.fillTown(e, t));
      }
    });
  },
  fillTown: function (e, t) {
    var n = cc11001100_hook("n", this, "var-init"),
      r = cc11001100_hook("r", n.elments.$town, "var-init"),
      i = cc11001100_hook("i", [], "var-init");
    for (var s = cc11001100_hook("s", 0, "var-init"), o = cc11001100_hook("o", e.length, "var-init"); s < o; s++) i.push('<li data-val="' + e[s][1] + '">' + e[s][0] + "</li>"), s == 0 && r.find("span").attr("data-val", e[s][1]).html(e[s][0]);
    r.find(".select-list ul").html(i.join(""));
    if (!!t) for (var s = cc11001100_hook("s", 0, "var-init"), o = cc11001100_hook("o", e.length, "var-init"); s < o; s++) if (t == e[s][1]) {
      r.find("span").attr("data-val", t).html(e[s][0]);
      break;
    }
  }
}, "assign"), So.web.weather.init(), function () {
  $("body").on("mousedown", "a[href]", function () {
    var e = cc11001100_hook("e", $(this).attr("href"), "var-init"),
      t = cc11001100_hook("t", So.comm.sid || "", "var-init"),
      n = cc11001100_hook("n", So.comm.fr || "", "var-init"),
      r = cc11001100_hook("r", So.comm.sp || "", "var-init"),
      i = cc11001100_hook("i", So.lib.encp(), "var-init"),
      s = cc11001100_hook("s", So.comm.monitor && So.comm.monitor.lm_extend || "", "var-init"),
      o = cc11001100_hook("o", So.comm.monitor && So.comm.monitor.ls || "", "var-init"),
      u = cc11001100_hook("u", So.comm.lmsid && So.comm.lmsid || "", "var-init"),
      a = cc11001100_hook("a", "", "var-init"),
      f = cc11001100_hook("f", "", "var-init"),
      l = cc11001100_hook("l", {}, "var-init"),
      c = cc11001100_hook("c", {}, "var-init"),
      h = cc11001100_hook("h", e.indexOf("#"), "var-init");
    (r != "" || t != "" || n != "" || o != "" || u != "" || s != "") && /^(https?\:\/\/www\.(so|haosou)\.com)?\/s\?/i.test(e) && (c = cc11001100_hook("c", So.lib.parseQuery(e), "assign"), So.newsFlow && So.newsFlow.type == "news" && $(this).closest("#mohe-know_side_nlp") && c.src == "know_side_nlp" && (e = cc11001100_hook("e", e.replace("src=know_side_nlp", "src=know_side_nlp_new"), "assign")), r != "" && !c.sp && (l.sp = cc11001100_hook("l.sp", r, "assign")), i != "" && !c.cp && (l.cp = cc11001100_hook("l.cp", i, "assign")), t != "" && !c.psid && (l.psid = cc11001100_hook("l.psid", t, "assign")), n != "" && !c.fr && (l.fr = cc11001100_hook("l.fr", n, "assign")), o != "" && !c.ls && (l.ls = cc11001100_hook("l.ls", o, "assign")), u != "" && !c.lmsid && (l.lmsid = cc11001100_hook("l.lmsid", u, "assign")), s != "" && !c.lm_extend && (l.lm_extend = cc11001100_hook("l.lm_extend", s, "assign")), $.isEmptyObject(l) || (f = cc11001100_hook("f", "&" + $.param(l), "assign"), h > -1 ? a = cc11001100_hook("a", e.substring(0, h) + f + e.substr(h), "assign") : a = cc11001100_hook("a", e + f, "assign"), $(this).attr("href", a)));
  });
}();
var HUID = cc11001100_hook("HUID", function () {
  function p() {
    var e = cc11001100_hook("e", w(), "var-init");
    E(e);
  }
  function d() {
    var e = cc11001100_hook("e", v(), "var-init");
    m(e);
  }
  function v() {
    var e;
    try {
      e = cc11001100_hook("e", external.GetASC(external.GetSID(window)), "assign");
    } catch (t) {}
    if (!e) try {
      e = cc11001100_hook("e", window.wdextcmd.GetASC(), "assign");
    } catch (t) {}
    if (!e) {
      var n = cc11001100_hook("n", h("__asc"), "var-init");
      n && (e = cc11001100_hook("e", n, "assign"));
    }
    return e;
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) {
      var t = cc11001100_hook("t", new Date(), "var-init");
      t.setFullYear(t.getFullYear() + 2), c(n, e, {
        expires: cc11001100_hook("expires", t, "object-key-init"),
        path: cc11001100_hook("path", "/", "object-key-init"),
        domain: cc11001100_hook("domain", a, "object-key-init")
      });
    }
  }
  function g() {
    y();
  }
  function y() {
    try {
      external.AppCmd(external.GetSID(window), "", "GetASC2", "", "", function (e, t) {
        b(t);
      });
    } catch (e) {}
    try {
      var t = cc11001100_hook("t", window.wdextcmd.GetASC2(), "var-init");
      b(t);
    } catch (e) {}
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e) {
      var t = cc11001100_hook("t", new Date(), "var-init");
      t.setFullYear(t.getFullYear() + 2), c(r, e, {
        expires: cc11001100_hook("expires", t, "object-key-init"),
        path: cc11001100_hook("path", "/", "object-key-init"),
        domain: cc11001100_hook("domain", a, "object-key-init")
      });
    }
  }
  function w() {
    var e;
    try {
      e = cc11001100_hook("e", external.GetMID(external.GetSID(window)), "assign");
    } catch (t) {}
    if (!e) try {
      e = cc11001100_hook("e", window.wdextcmd.GetMid(), "assign");
    } catch (t) {}
    if (!e) {
      var n = cc11001100_hook("n", h("_uc_mid"), "var-init");
      n && (e = cc11001100_hook("e", n, "assign"));
    }
    return e || "";
  }
  function E(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (n) {
      var r = cc11001100_hook("r", new Date(), "var-init");
      r.setFullYear(r.getFullYear() + 2), n = cc11001100_hook("n", x(n), "assign"), c(t, n, {
        expires: cc11001100_hook("expires", r, "object-key-init"),
        path: cc11001100_hook("path", "/", "object-key-init"),
        domain: cc11001100_hook("domain", a, "object-key-init")
      }), c(e, n, {
        expires: cc11001100_hook("expires", r, "object-key-init"),
        path: cc11001100_hook("path", "/", "object-key-init"),
        domain: cc11001100_hook("domain", a, "object-key-init"),
        SameSite: cc11001100_hook("SameSite", "None", "object-key-init")
      });
    }
  }
  function S() {
    var e = cc11001100_hook("e", h(t), "var-init"),
      n = cc11001100_hook("n", e.split("."), "var-init");
    if (n[0] !== "" && n[1] !== "") {
      var r = cc11001100_hook("r", parseInt(n[1]), "var-init");
      return n[0].substr(2, r) + n[0].substr(15 + r);
    }
    return "";
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", 0, "var-init"),
      n = cc11001100_hook("n", "", "var-init"),
      r = cc11001100_hook("r", +new Date(), "var-init"),
      i = cc11001100_hook("i", Math.floor(Math.random() * 15), "var-init"),
      s = cc11001100_hook("s", "qihoo360socom", "var-init");
    while (t < 2) n += cc11001100_hook("n", s.charAt(Math.floor(Math.random() * 8)), "assign"), t++;
    return n + e.substring(0, i) + r + e.substring(i) + "." + i;
  }
  function T() {
    clearInterval(f), f = cc11001100_hook("f", setInterval(function () {
      N();
    }, u * 60 * 1e3, !0), "assign");
    var e = cc11001100_hook("e", h(s), "var-init"),
      t = cc11001100_hook("t", h(i), "var-init");
    h(o) && (t || e) ? l(t || e) : N();
  }
  function N() {
    if (!So.lib.browser.isIE()) $.ajax({
      url: cc11001100_hook("url", "//socm.dmp.360.cn/huid/cors", "object-key-init"),
      method: cc11001100_hook("method", "get", "object-key-init"),
      timeout: cc11001100_hook("timeout", 3e3, "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (e) {
        e && e.errno === 0 && HUID.set(e);
      }
    });else {
      var e = cc11001100_hook("e", document.createElement("script"), "var-init");
      e.id = cc11001100_hook("e.id", "_socomhuid_", "assign"), e.src = cc11001100_hook("e.src", "//socm.dmp.360.cn/HUID.set?_=" + +new Date(), "assign"), document.body.appendChild(e);
    }
  }
  function C(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", document.getElementById("_socomhuid_"), "var-init");
    t && document.body.removeChild(t);
    if (e["errno"] == 0 && e.huid) {
      var n = cc11001100_hook("n", new Date(), "var-init");
      n.setFullYear(n.getFullYear() + 2), c(i, e.huid, {
        expires: cc11001100_hook("expires", n, "object-key-init"),
        path: cc11001100_hook("path", "/", "object-key-init"),
        domain: cc11001100_hook("domain", a, "object-key-init"),
        SameSite: cc11001100_hook("SameSite", "None", "object-key-init")
      }), c(s, e.huid, {
        expires: cc11001100_hook("expires", n, "object-key-init"),
        path: cc11001100_hook("path", "/", "object-key-init"),
        domain: cc11001100_hook("domain", a, "object-key-init")
      });
      var r = cc11001100_hook("r", new Date(), "var-init");
      r.setMinutes(r.getMinutes() + u), c(o, "1", {
        expires: cc11001100_hook("expires", r, "object-key-init")
      }), l(e.huid);
    }
  }
  function k() {
    return h(i) || h(s);
  }
  function L(e) {
    cc11001100_hook("e", e, "function-parameter");
    l = cc11001100_hook("l", e || function () {}, "assign"), p(), T();
  }
  var e = cc11001100_hook("e", "so_md", "var-init"),
    t = cc11001100_hook("t", "__md", "var-init"),
    n = cc11001100_hook("n", "__asc", "var-init"),
    r = cc11001100_hook("r", "__asc2", "var-init"),
    i = cc11001100_hook("i", "so_huid", "var-init"),
    s = cc11001100_hook("s", "__huid", "var-init"),
    o = cc11001100_hook("o", "gtHuid", "var-init"),
    u = cc11001100_hook("u", 10, "var-init"),
    a = cc11001100_hook("a", "so.com", "var-init"),
    f = cc11001100_hook("f", null, "var-init"),
    l,
    c = function (e, t, n) {
      n = cc11001100_hook("n", n || {}, "assign");
      var r = cc11001100_hook("r", n.expires, "var-init"),
        i = cc11001100_hook("i", n.domain, "var-init"),
        s = cc11001100_hook("s", n.path, "var-init"),
        o = cc11001100_hook("o", n.SameSite, "var-init"),
        u = cc11001100_hook("u", location.protocol == "https:" ? !0 : !1, "var-init");
      if (!u && o) return;
      document.cookie = cc11001100_hook("document.cookie", e + "=" + encodeURIComponent(t) + (r ? "; expires=" + r.toUTCString() : "") + (i ? "; domain=" + i : "") + (s ? "; path=" + s : "") + (u && o ? "; SameSite=" + o + "; Secure" : ""), "assign");
    },
    h = function (e) {
      var t = cc11001100_hook("t", document.cookie.split(/\s*;\s*/), "var-init"),
        n = cc11001100_hook("n", t.length - 1, "var-init"),
        r,
        i,
        s;
      while (n >= 0) {
        r = cc11001100_hook("r", t[n].split("="), "assign"), i = cc11001100_hook("i", r[0], "assign"), s = cc11001100_hook("s", r[1], "assign");
        if (i === encodeURIComponent(e)) return decodeURIComponent(s);
        n--;
      }
      return "";
    };
  return {
    init: cc11001100_hook("init", L, "object-key-init"),
    set: cc11001100_hook("set", C, "object-key-init"),
    getMid: cc11001100_hook("getMid", w, "object-key-init"),
    getHuid: cc11001100_hook("getHuid", k, "object-key-init"),
    setMid: cc11001100_hook("setMid", E, "object-key-init")
  };
}(), "var-init");
HUID.init(function (e) {
  if (!window.ActiveXObject && !("ActiveXObject" in window)) return;
  var t = cc11001100_hook("t", So.lib.cookie.get("__md"), "var-init"),
    n;
  t ? n = cc11001100_hook("n", "O" + t, "assign") : e && (n = cc11001100_hook("n", "H" + e, "assign")), n && So.page.onload.push(function () {
    $.getScript("//smart.sug.so.com/setid?_=" + So.comm.t + "&id=" + n);
  });
}), So.lib.sha1 = cc11001100_hook("So.lib.sha1", function () {
  "use strict";

  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    e ? (a[0] = cc11001100_hook("a[0]", a[16] = cc11001100_hook("a[16]", a[1] = cc11001100_hook("a[1]", a[2] = cc11001100_hook("a[2]", a[3] = cc11001100_hook("a[3]", a[4] = cc11001100_hook("a[4]", a[5] = cc11001100_hook("a[5]", a[6] = cc11001100_hook("a[6]", a[7] = cc11001100_hook("a[7]", a[8] = cc11001100_hook("a[8]", a[9] = cc11001100_hook("a[9]", a[10] = cc11001100_hook("a[10]", a[11] = cc11001100_hook("a[11]", a[12] = cc11001100_hook("a[12]", a[13] = cc11001100_hook("a[13]", a[14] = cc11001100_hook("a[14]", a[15] = cc11001100_hook("a[15]", 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), this.blocks = cc11001100_hook("this.blocks", a, "assign")) : this.blocks = cc11001100_hook("this.blocks", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "assign"), this.h0 = cc11001100_hook("this.h0", 1732584193, "assign"), this.h1 = cc11001100_hook("this.h1", 4023233417, "assign"), this.h2 = cc11001100_hook("this.h2", 2562383102, "assign"), this.h3 = cc11001100_hook("this.h3", 271733878, "assign"), this.h4 = cc11001100_hook("this.h4", 3285377520, "assign"), this.block = cc11001100_hook("this.block", this.start = cc11001100_hook("this.start", this.bytes = cc11001100_hook("this.bytes", 0, "assign"), "assign"), "assign"), this.finalized = cc11001100_hook("this.finalized", this.hashed = cc11001100_hook("this.hashed", !1, "assign"), "assign"), this.first = cc11001100_hook("this.first", !0, "assign");
  }
  var e = cc11001100_hook("e", {}, "var-init"),
    t = cc11001100_hook("t", !e.JS_SHA1_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node, "var-init");
  t && (e = cc11001100_hook("e", global, "assign"));
  var n = cc11001100_hook("n", !e.JS_SHA1_NO_COMMON_JS && typeof module == "object" && module.exports, "var-init"),
    r = cc11001100_hook("r", typeof define == "function" && define.amd, "var-init"),
    i = cc11001100_hook("i", "0123456789abcdef".split(""), "var-init"),
    s = cc11001100_hook("s", [-2147483648, 8388608, 32768, 128], "var-init"),
    o = cc11001100_hook("o", [24, 16, 8, 0], "var-init"),
    u = cc11001100_hook("u", ["hex", "array", "digest", "arrayBuffer"], "var-init"),
    a = cc11001100_hook("a", [], "var-init"),
    f = function (e) {
      return function (t) {
        return new h(!0).update(t)[e]();
      };
    },
    l = function () {
      var e = cc11001100_hook("e", f("hex"), "var-init");
      t && (e = cc11001100_hook("e", c(e), "assign")), e.create = cc11001100_hook("e.create", function () {
        return new h();
      }, "assign"), e.update = cc11001100_hook("e.update", function (t) {
        return e.create().update(t);
      }, "assign");
      for (var n = cc11001100_hook("n", 0, "var-init"); n < u.length; ++n) {
        var r = cc11001100_hook("r", u[n], "var-init");
        e[r] = cc11001100_hook("e[r]", f(r), "assign");
      }
      return e;
    },
    c = function (e) {
      var t = cc11001100_hook("t", require("crypto"), "var-init"),
        n = cc11001100_hook("n", require("buffer").Buffer, "var-init"),
        r = function (r) {
          if (typeof r == "string") return t.createHash("sha1").update(r, "utf8").digest("hex");
          if (r.constructor === ArrayBuffer) r = cc11001100_hook("r", new Uint8Array(r), "assign");else if (r.length === undefined) return e(r);
          return t.createHash("sha1").update(new n(r)).digest("hex");
        };
      return r;
    };
  h.prototype.update = cc11001100_hook("h.prototype.update", function (t) {
    if (this.finalized) return;
    var n = cc11001100_hook("n", typeof t != "string", "var-init");
    n && t.constructor === e.ArrayBuffer && (t = cc11001100_hook("t", new Uint8Array(t), "assign"));
    var r,
      i = cc11001100_hook("i", 0, "var-init"),
      s,
      u = cc11001100_hook("u", t.length || 0, "var-init"),
      a = cc11001100_hook("a", this.blocks, "var-init");
    while (i < u) {
      this.hashed && (this.hashed = cc11001100_hook("this.hashed", !1, "assign"), a[0] = cc11001100_hook("a[0]", this.block, "assign"), a[16] = cc11001100_hook("a[16]", a[1] = cc11001100_hook("a[1]", a[2] = cc11001100_hook("a[2]", a[3] = cc11001100_hook("a[3]", a[4] = cc11001100_hook("a[4]", a[5] = cc11001100_hook("a[5]", a[6] = cc11001100_hook("a[6]", a[7] = cc11001100_hook("a[7]", a[8] = cc11001100_hook("a[8]", a[9] = cc11001100_hook("a[9]", a[10] = cc11001100_hook("a[10]", a[11] = cc11001100_hook("a[11]", a[12] = cc11001100_hook("a[12]", a[13] = cc11001100_hook("a[13]", a[14] = cc11001100_hook("a[14]", a[15] = cc11001100_hook("a[15]", 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"));
      if (n) for (s = cc11001100_hook("s", this.start, "assign"); i < u && s < 64; ++i) a[s >> 2] |= cc11001100_hook("a[s >> 2]", t[i] << o[s++ & 3], "assign");else for (s = cc11001100_hook("s", this.start, "assign"); i < u && s < 64; ++i) r = cc11001100_hook("r", t.charCodeAt(i), "assign"), r < 128 ? a[s >> 2] |= cc11001100_hook("a[s >> 2]", r << o[s++ & 3], "assign") : r < 2048 ? (a[s >> 2] |= cc11001100_hook("a[s >> 2]", (192 | r >> 6) << o[s++ & 3], "assign"), a[s >> 2] |= cc11001100_hook("a[s >> 2]", (128 | r & 63) << o[s++ & 3], "assign")) : r < 55296 || r >= 57344 ? (a[s >> 2] |= cc11001100_hook("a[s >> 2]", (224 | r >> 12) << o[s++ & 3], "assign"), a[s >> 2] |= cc11001100_hook("a[s >> 2]", (128 | r >> 6 & 63) << o[s++ & 3], "assign"), a[s >> 2] |= cc11001100_hook("a[s >> 2]", (128 | r & 63) << o[s++ & 3], "assign")) : (r = cc11001100_hook("r", 65536 + ((r & 1023) << 10 | t.charCodeAt(++i) & 1023), "assign"), a[s >> 2] |= cc11001100_hook("a[s >> 2]", (240 | r >> 18) << o[s++ & 3], "assign"), a[s >> 2] |= cc11001100_hook("a[s >> 2]", (128 | r >> 12 & 63) << o[s++ & 3], "assign"), a[s >> 2] |= cc11001100_hook("a[s >> 2]", (128 | r >> 6 & 63) << o[s++ & 3], "assign"), a[s >> 2] |= cc11001100_hook("a[s >> 2]", (128 | r & 63) << o[s++ & 3], "assign"));
      this.lastByteIndex = cc11001100_hook("this.lastByteIndex", s, "assign"), this.bytes += cc11001100_hook("this.bytes", s - this.start, "assign"), s >= 64 ? (this.block = cc11001100_hook("this.block", a[16], "assign"), this.start = cc11001100_hook("this.start", s - 64, "assign"), this.hash(), this.hashed = cc11001100_hook("this.hashed", !0, "assign")) : this.start = cc11001100_hook("this.start", s, "assign");
    }
    return this;
  }, "assign"), h.prototype.finalize = cc11001100_hook("h.prototype.finalize", function () {
    if (this.finalized) return;
    this.finalized = cc11001100_hook("this.finalized", !0, "assign");
    var e = cc11001100_hook("e", this.blocks, "var-init"),
      t = cc11001100_hook("t", this.lastByteIndex, "var-init");
    e[16] = cc11001100_hook("e[16]", this.block, "assign"), e[t >> 2] |= cc11001100_hook("e[t >> 2]", s[t & 3], "assign"), this.block = cc11001100_hook("this.block", e[16], "assign"), t >= 56 && (this.hashed || this.hash(), e[0] = cc11001100_hook("e[0]", this.block, "assign"), e[16] = cc11001100_hook("e[16]", e[1] = cc11001100_hook("e[1]", e[2] = cc11001100_hook("e[2]", e[3] = cc11001100_hook("e[3]", e[4] = cc11001100_hook("e[4]", e[5] = cc11001100_hook("e[5]", e[6] = cc11001100_hook("e[6]", e[7] = cc11001100_hook("e[7]", e[8] = cc11001100_hook("e[8]", e[9] = cc11001100_hook("e[9]", e[10] = cc11001100_hook("e[10]", e[11] = cc11001100_hook("e[11]", e[12] = cc11001100_hook("e[12]", e[13] = cc11001100_hook("e[13]", e[14] = cc11001100_hook("e[14]", e[15] = cc11001100_hook("e[15]", 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign")), e[15] = cc11001100_hook("e[15]", this.bytes << 3, "assign"), this.hash();
  }, "assign"), h.prototype.hash = cc11001100_hook("h.prototype.hash", function () {
    var e = cc11001100_hook("e", this.h0, "var-init"),
      t = cc11001100_hook("t", this.h1, "var-init"),
      n = cc11001100_hook("n", this.h2, "var-init"),
      r = cc11001100_hook("r", this.h3, "var-init"),
      i = cc11001100_hook("i", this.h4, "var-init"),
      s,
      o,
      u,
      a = cc11001100_hook("a", this.blocks, "var-init");
    for (o = cc11001100_hook("o", 16, "assign"); o < 80; ++o) u = cc11001100_hook("u", a[o - 3] ^ a[o - 8] ^ a[o - 14] ^ a[o - 16], "assign"), a[o] = cc11001100_hook("a[o]", u << 1 | u >>> 31, "assign");
    for (o = cc11001100_hook("o", 0, "assign"); o < 20; o += cc11001100_hook("o", 5, "assign")) s = cc11001100_hook("s", t & n | ~t & r, "assign"), u = cc11001100_hook("u", e << 5 | e >>> 27, "assign"), i = cc11001100_hook("i", u + s + i + 1518500249 + a[o] << 0, "assign"), t = cc11001100_hook("t", t << 30 | t >>> 2, "assign"), s = cc11001100_hook("s", e & t | ~e & n, "assign"), u = cc11001100_hook("u", i << 5 | i >>> 27, "assign"), r = cc11001100_hook("r", u + s + r + 1518500249 + a[o + 1] << 0, "assign"), e = cc11001100_hook("e", e << 30 | e >>> 2, "assign"), s = cc11001100_hook("s", i & e | ~i & t, "assign"), u = cc11001100_hook("u", r << 5 | r >>> 27, "assign"), n = cc11001100_hook("n", u + s + n + 1518500249 + a[o + 2] << 0, "assign"), i = cc11001100_hook("i", i << 30 | i >>> 2, "assign"), s = cc11001100_hook("s", r & i | ~r & e, "assign"), u = cc11001100_hook("u", n << 5 | n >>> 27, "assign"), t = cc11001100_hook("t", u + s + t + 1518500249 + a[o + 3] << 0, "assign"), r = cc11001100_hook("r", r << 30 | r >>> 2, "assign"), s = cc11001100_hook("s", n & r | ~n & i, "assign"), u = cc11001100_hook("u", t << 5 | t >>> 27, "assign"), e = cc11001100_hook("e", u + s + e + 1518500249 + a[o + 4] << 0, "assign"), n = cc11001100_hook("n", n << 30 | n >>> 2, "assign");
    for (; o < 40; o += cc11001100_hook("o", 5, "assign")) s = cc11001100_hook("s", t ^ n ^ r, "assign"), u = cc11001100_hook("u", e << 5 | e >>> 27, "assign"), i = cc11001100_hook("i", u + s + i + 1859775393 + a[o] << 0, "assign"), t = cc11001100_hook("t", t << 30 | t >>> 2, "assign"), s = cc11001100_hook("s", e ^ t ^ n, "assign"), u = cc11001100_hook("u", i << 5 | i >>> 27, "assign"), r = cc11001100_hook("r", u + s + r + 1859775393 + a[o + 1] << 0, "assign"), e = cc11001100_hook("e", e << 30 | e >>> 2, "assign"), s = cc11001100_hook("s", i ^ e ^ t, "assign"), u = cc11001100_hook("u", r << 5 | r >>> 27, "assign"), n = cc11001100_hook("n", u + s + n + 1859775393 + a[o + 2] << 0, "assign"), i = cc11001100_hook("i", i << 30 | i >>> 2, "assign"), s = cc11001100_hook("s", r ^ i ^ e, "assign"), u = cc11001100_hook("u", n << 5 | n >>> 27, "assign"), t = cc11001100_hook("t", u + s + t + 1859775393 + a[o + 3] << 0, "assign"), r = cc11001100_hook("r", r << 30 | r >>> 2, "assign"), s = cc11001100_hook("s", n ^ r ^ i, "assign"), u = cc11001100_hook("u", t << 5 | t >>> 27, "assign"), e = cc11001100_hook("e", u + s + e + 1859775393 + a[o + 4] << 0, "assign"), n = cc11001100_hook("n", n << 30 | n >>> 2, "assign");
    for (; o < 60; o += cc11001100_hook("o", 5, "assign")) s = cc11001100_hook("s", t & n | t & r | n & r, "assign"), u = cc11001100_hook("u", e << 5 | e >>> 27, "assign"), i = cc11001100_hook("i", u + s + i - 1894007588 + a[o] << 0, "assign"), t = cc11001100_hook("t", t << 30 | t >>> 2, "assign"), s = cc11001100_hook("s", e & t | e & n | t & n, "assign"), u = cc11001100_hook("u", i << 5 | i >>> 27, "assign"), r = cc11001100_hook("r", u + s + r - 1894007588 + a[o + 1] << 0, "assign"), e = cc11001100_hook("e", e << 30 | e >>> 2, "assign"), s = cc11001100_hook("s", i & e | i & t | e & t, "assign"), u = cc11001100_hook("u", r << 5 | r >>> 27, "assign"), n = cc11001100_hook("n", u + s + n - 1894007588 + a[o + 2] << 0, "assign"), i = cc11001100_hook("i", i << 30 | i >>> 2, "assign"), s = cc11001100_hook("s", r & i | r & e | i & e, "assign"), u = cc11001100_hook("u", n << 5 | n >>> 27, "assign"), t = cc11001100_hook("t", u + s + t - 1894007588 + a[o + 3] << 0, "assign"), r = cc11001100_hook("r", r << 30 | r >>> 2, "assign"), s = cc11001100_hook("s", n & r | n & i | r & i, "assign"), u = cc11001100_hook("u", t << 5 | t >>> 27, "assign"), e = cc11001100_hook("e", u + s + e - 1894007588 + a[o + 4] << 0, "assign"), n = cc11001100_hook("n", n << 30 | n >>> 2, "assign");
    for (; o < 80; o += cc11001100_hook("o", 5, "assign")) s = cc11001100_hook("s", t ^ n ^ r, "assign"), u = cc11001100_hook("u", e << 5 | e >>> 27, "assign"), i = cc11001100_hook("i", u + s + i - 899497514 + a[o] << 0, "assign"), t = cc11001100_hook("t", t << 30 | t >>> 2, "assign"), s = cc11001100_hook("s", e ^ t ^ n, "assign"), u = cc11001100_hook("u", i << 5 | i >>> 27, "assign"), r = cc11001100_hook("r", u + s + r - 899497514 + a[o + 1] << 0, "assign"), e = cc11001100_hook("e", e << 30 | e >>> 2, "assign"), s = cc11001100_hook("s", i ^ e ^ t, "assign"), u = cc11001100_hook("u", r << 5 | r >>> 27, "assign"), n = cc11001100_hook("n", u + s + n - 899497514 + a[o + 2] << 0, "assign"), i = cc11001100_hook("i", i << 30 | i >>> 2, "assign"), s = cc11001100_hook("s", r ^ i ^ e, "assign"), u = cc11001100_hook("u", n << 5 | n >>> 27, "assign"), t = cc11001100_hook("t", u + s + t - 899497514 + a[o + 3] << 0, "assign"), r = cc11001100_hook("r", r << 30 | r >>> 2, "assign"), s = cc11001100_hook("s", n ^ r ^ i, "assign"), u = cc11001100_hook("u", t << 5 | t >>> 27, "assign"), e = cc11001100_hook("e", u + s + e - 899497514 + a[o + 4] << 0, "assign"), n = cc11001100_hook("n", n << 30 | n >>> 2, "assign");
    this.h0 = cc11001100_hook("this.h0", this.h0 + e << 0, "assign"), this.h1 = cc11001100_hook("this.h1", this.h1 + t << 0, "assign"), this.h2 = cc11001100_hook("this.h2", this.h2 + n << 0, "assign"), this.h3 = cc11001100_hook("this.h3", this.h3 + r << 0, "assign"), this.h4 = cc11001100_hook("this.h4", this.h4 + i << 0, "assign");
  }, "assign"), h.prototype.hex = cc11001100_hook("h.prototype.hex", function () {
    this.finalize();
    var e = cc11001100_hook("e", this.h0, "var-init"),
      t = cc11001100_hook("t", this.h1, "var-init"),
      n = cc11001100_hook("n", this.h2, "var-init"),
      r = cc11001100_hook("r", this.h3, "var-init"),
      s = cc11001100_hook("s", this.h4, "var-init");
    return i[e >> 28 & 15] + i[e >> 24 & 15] + i[e >> 20 & 15] + i[e >> 16 & 15] + i[e >> 12 & 15] + i[e >> 8 & 15] + i[e >> 4 & 15] + i[e & 15] + i[t >> 28 & 15] + i[t >> 24 & 15] + i[t >> 20 & 15] + i[t >> 16 & 15] + i[t >> 12 & 15] + i[t >> 8 & 15] + i[t >> 4 & 15] + i[t & 15] + i[n >> 28 & 15] + i[n >> 24 & 15] + i[n >> 20 & 15] + i[n >> 16 & 15] + i[n >> 12 & 15] + i[n >> 8 & 15] + i[n >> 4 & 15] + i[n & 15] + i[r >> 28 & 15] + i[r >> 24 & 15] + i[r >> 20 & 15] + i[r >> 16 & 15] + i[r >> 12 & 15] + i[r >> 8 & 15] + i[r >> 4 & 15] + i[r & 15] + i[s >> 28 & 15] + i[s >> 24 & 15] + i[s >> 20 & 15] + i[s >> 16 & 15] + i[s >> 12 & 15] + i[s >> 8 & 15] + i[s >> 4 & 15] + i[s & 15];
  }, "assign"), h.prototype.toString = cc11001100_hook("h.prototype.toString", h.prototype.hex, "assign"), h.prototype.digest = cc11001100_hook("h.prototype.digest", function () {
    this.finalize();
    var e = cc11001100_hook("e", this.h0, "var-init"),
      t = cc11001100_hook("t", this.h1, "var-init"),
      n = cc11001100_hook("n", this.h2, "var-init"),
      r = cc11001100_hook("r", this.h3, "var-init"),
      i = cc11001100_hook("i", this.h4, "var-init");
    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255];
  }, "assign"), h.prototype.array = cc11001100_hook("h.prototype.array", h.prototype.digest, "assign"), h.prototype.arrayBuffer = cc11001100_hook("h.prototype.arrayBuffer", function () {
    this.finalize();
    var e = cc11001100_hook("e", new ArrayBuffer(20), "var-init"),
      t = cc11001100_hook("t", new DataView(e), "var-init");
    return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), e;
  }, "assign");
  var p = cc11001100_hook("p", l(), "var-init");
  if (!n) return p;
  module.exports = cc11001100_hook("module.exports", p, "assign");
}(), "assign"), function () {
  "use strict";

  var e = cc11001100_hook("e", "3.7.2", "var-init"),
    t = cc11001100_hook("t", e, "var-init"),
    n = cc11001100_hook("n", typeof atob == "function", "var-init"),
    r = cc11001100_hook("r", typeof btoa == "function", "var-init"),
    i = cc11001100_hook("i", typeof Buffer == "function", "var-init"),
    s = cc11001100_hook("s", typeof TextDecoder == "function" ? new TextDecoder() : undefined, "var-init"),
    o = cc11001100_hook("o", typeof TextEncoder == "function" ? new TextEncoder() : undefined, "var-init"),
    u = cc11001100_hook("u", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "var-init"),
    a = cc11001100_hook("a", Array.prototype.slice.call(u), "var-init"),
    f = cc11001100_hook("f", function (e) {
      var t = cc11001100_hook("t", {}, "var-init");
      return e.forEach(function (e, n) {
        return t[e] = cc11001100_hook("t[e]", n, "assign");
      }), t;
    }(a), "var-init"),
    l = cc11001100_hook("l", /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, "var-init"),
    c = cc11001100_hook("c", String.fromCharCode.bind(String), "var-init"),
    h = cc11001100_hook("h", typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function (e, t) {
      return t === void 0 && (t = cc11001100_hook("t", function (e) {
        return e;
      }, "assign")), new Uint8Array(Array.prototype.slice.call(e, 0).map(t));
    }, "var-init"),
    p = function (e) {
      return e.replace(/=/g, "").replace(/[+\/]/g, function (e) {
        return e == "+" ? "-" : "_";
      });
    },
    d = function (e) {
      return e.replace(/[^A-Za-z0-9\+\/]/g, "");
    },
    v = function (e) {
      var t,
        n,
        r,
        i,
        s = cc11001100_hook("s", "", "var-init"),
        o = cc11001100_hook("o", e.length % 3, "var-init");
      for (var u = cc11001100_hook("u", 0, "var-init"); u < e.length;) {
        if ((n = cc11001100_hook("n", e.charCodeAt(u++), "assign")) > 255 || (r = cc11001100_hook("r", e.charCodeAt(u++), "assign")) > 255 || (i = cc11001100_hook("i", e.charCodeAt(u++), "assign")) > 255) throw new TypeError("invalid character found");
        t = cc11001100_hook("t", n << 16 | r << 8 | i, "assign"), s += cc11001100_hook("s", a[t >> 18 & 63] + a[t >> 12 & 63] + a[t >> 6 & 63] + a[t & 63], "assign");
      }
      return o ? s.slice(0, o - 3) + "===".substring(o) : s;
    },
    m = cc11001100_hook("m", r ? function (e) {
      return btoa(e);
    } : i ? function (e) {
      return Buffer.from(e, "binary").toString("base64");
    } : v, "var-init"),
    g = cc11001100_hook("g", i ? function (e) {
      return Buffer.from(e).toString("base64");
    } : function (e) {
      var t = cc11001100_hook("t", 4096, "var-init"),
        n = cc11001100_hook("n", [], "var-init");
      for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r += cc11001100_hook("r", t, "assign")) n.push(c.apply(null, e.subarray(r, r + t)));
      return m(n.join(""));
    }, "var-init"),
    y = function (e, t) {
      return t === void 0 && (t = cc11001100_hook("t", !1, "assign")), t ? p(g(e)) : g(e);
    },
    b = function (e) {
      if (e.length < 2) {
        var t = cc11001100_hook("t", e.charCodeAt(0), "var-init");
        return t < 128 ? e : t < 2048 ? c(192 | t >>> 6) + c(128 | t & 63) : c(224 | t >>> 12 & 15) + c(128 | t >>> 6 & 63) + c(128 | t & 63);
      }
      var t = cc11001100_hook("t", 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320), "var-init");
      return c(240 | t >>> 18 & 7) + c(128 | t >>> 12 & 63) + c(128 | t >>> 6 & 63) + c(128 | t & 63);
    },
    w = cc11001100_hook("w", /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, "var-init"),
    E = function (e) {
      return e.replace(w, b);
    },
    S = cc11001100_hook("S", i ? function (e) {
      return Buffer.from(e, "utf8").toString("base64");
    } : o ? function (e) {
      return g(o.encode(e));
    } : function (e) {
      return m(E(e));
    }, "var-init"),
    x = function (e, t) {
      return t === void 0 && (t = cc11001100_hook("t", !1, "assign")), t ? p(S(e)) : S(e);
    },
    T = function (e) {
      return x(e, !0);
    },
    N = cc11001100_hook("N", /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, "var-init"),
    C = function (e) {
      switch (e.length) {
        case 4:
          var t = cc11001100_hook("t", (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3), "var-init"),
            n = cc11001100_hook("n", t - 65536, "var-init");
          return c((n >>> 10) + 55296) + c((n & 1023) + 56320);
        case 3:
          return c((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
        default:
          return c((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
      }
    },
    k = function (e) {
      return e.replace(N, C);
    },
    L = function (e) {
      e = cc11001100_hook("e", e.replace(/\s+/g, ""), "assign");
      if (!l.test(e)) throw new TypeError("malformed base64.");
      e += cc11001100_hook("e", "==".slice(2 - (e.length & 3)), "assign");
      var t,
        n = cc11001100_hook("n", "", "var-init"),
        r,
        i;
      for (var s = cc11001100_hook("s", 0, "var-init"); s < e.length;) t = cc11001100_hook("t", f[e.charAt(s++)] << 18 | f[e.charAt(s++)] << 12 | (r = cc11001100_hook("r", f[e.charAt(s++)], "assign")) << 6 | (i = cc11001100_hook("i", f[e.charAt(s++)], "assign")), "assign"), n += cc11001100_hook("n", r === 64 ? c(t >> 16 & 255) : i === 64 ? c(t >> 16 & 255, t >> 8 & 255) : c(t >> 16 & 255, t >> 8 & 255, t & 255), "assign");
      return n;
    },
    A = cc11001100_hook("A", n ? function (e) {
      return atob(d(e));
    } : i ? function (e) {
      return Buffer.from(e, "base64").toString("binary");
    } : L, "var-init"),
    O = cc11001100_hook("O", i ? function (e) {
      return h(Buffer.from(e, "base64"));
    } : function (e) {
      return h(A(e), function (e) {
        return e.charCodeAt(0);
      });
    }, "var-init"),
    M = function (e) {
      return O(D(e));
    },
    _ = cc11001100_hook("_", i ? function (e) {
      return Buffer.from(e, "base64").toString("utf8");
    } : s ? function (e) {
      return s.decode(O(e));
    } : function (e) {
      return k(A(e));
    }, "var-init"),
    D = function (e) {
      return d(e.replace(/[-_]/g, function (e) {
        return e == "-" ? "+" : "/";
      }));
    },
    P = function (e) {
      return _(D(e));
    },
    H = function (e) {
      if (typeof e != "string") return !1;
      var t = cc11001100_hook("t", e.replace(/\s+/g, "").replace(/={0,2}$/, ""), "var-init");
      return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t);
    },
    B = function (e) {
      return {
        value: cc11001100_hook("value", e, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      };
    },
    j = function () {
      var e = function (e, t) {
        return Object.defineProperty(String.prototype, e, B(t));
      };
      e("fromBase64", function () {
        return P(this);
      }), e("toBase64", function (e) {
        return x(this, e);
      }), e("toBase64URI", function () {
        return x(this, !0);
      }), e("toBase64URL", function () {
        return x(this, !0);
      }), e("toUint8Array", function () {
        return M(this);
      });
    },
    F = function () {
      var e = function (e, t) {
        return Object.defineProperty(Uint8Array.prototype, e, B(t));
      };
      e("toBase64", function (e) {
        return y(this, e);
      }), e("toBase64URI", function () {
        return y(this, !0);
      }), e("toBase64URL", function () {
        return y(this, !0);
      });
    },
    I = function () {
      j(), F();
    },
    q = cc11001100_hook("q", {
      version: cc11001100_hook("version", e, "object-key-init"),
      VERSION: cc11001100_hook("VERSION", t, "object-key-init"),
      atob: cc11001100_hook("atob", A, "object-key-init"),
      atobPolyfill: cc11001100_hook("atobPolyfill", L, "object-key-init"),
      btoa: cc11001100_hook("btoa", m, "object-key-init"),
      btoaPolyfill: cc11001100_hook("btoaPolyfill", v, "object-key-init"),
      fromBase64: cc11001100_hook("fromBase64", P, "object-key-init"),
      toBase64: cc11001100_hook("toBase64", x, "object-key-init"),
      encode: cc11001100_hook("encode", x, "object-key-init"),
      encodeURI: cc11001100_hook("encodeURI", T, "object-key-init"),
      encodeURL: cc11001100_hook("encodeURL", T, "object-key-init"),
      utob: cc11001100_hook("utob", E, "object-key-init"),
      btou: cc11001100_hook("btou", k, "object-key-init"),
      decode: cc11001100_hook("decode", P, "object-key-init"),
      isValid: cc11001100_hook("isValid", H, "object-key-init"),
      fromUint8Array: cc11001100_hook("fromUint8Array", y, "object-key-init"),
      toUint8Array: cc11001100_hook("toUint8Array", M, "object-key-init"),
      extendString: cc11001100_hook("extendString", j, "object-key-init"),
      extendUint8Array: cc11001100_hook("extendUint8Array", F, "object-key-init"),
      extendBuiltins: cc11001100_hook("extendBuiltins", I, "object-key-init")
    }, "var-init");
  So.lib.Base64 = cc11001100_hook("So.lib.Base64", q, "assign");
}(), function () {
  function a(t) {
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", new Date(), "var-init");
    n.setFullYear(n.getFullYear() + 10), So.lib.cookie.set(e, t, {
      expires: cc11001100_hook("expires", n, "object-key-init"),
      path: cc11001100_hook("path", "/", "object-key-init"),
      domain: cc11001100_hook("domain", u, "object-key-init"),
      raw: cc11001100_hook("raw", !0, "object-key-init")
    }), localStorage && localStorage.setItem(e, +new Date());
  }
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", new Date(), "var-init"),
      r = cc11001100_hook("r", new Date(n.getTime() + 6048e5), "var-init");
    So.lib.cookie.set(t, e, {
      expires: cc11001100_hook("expires", r, "object-key-init"),
      path: cc11001100_hook("path", "/", "object-key-init"),
      domain: cc11001100_hook("domain", u, "object-key-init"),
      raw: cc11001100_hook("raw", !0, "object-key-init")
    });
  }
  function l() {
    $.ajax({
      url: cc11001100_hook("url", o, "object-key-init"),
      type: cc11001100_hook("type", "get", "object-key-init"),
      dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
      timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
      data: {
        m: cc11001100_hook("m", i, "object-key-init"),
        app: cc11001100_hook("app", "so", "object-key-init"),
        u: cc11001100_hook("u", s, "object-key-init")
      },
      success: function (t) {
        t.errno === 1e3 && (t.data.recls ? a(t.data.recls) : s && n && So.lib.cookie.remove(e, {
          path: cc11001100_hook("path", "/", "object-key-init"),
          domain: cc11001100_hook("domain", u, "object-key-init"),
          raw: cc11001100_hook("raw", !0, "object-key-init")
        }), t.data.recext && i && f(t.data.recext));
      }
    });
  }
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!e) return !0;
    var t = cc11001100_hook("t", e.split("."), "var-init");
    if (t.length !== 3) return !1;
    var n = cc11001100_hook("n", t[0], "var-init"),
      r = cc11001100_hook("r", t[2], "var-init"),
      i = cc11001100_hook("i", t[1], "var-init");
    if (i.length !== 4) return !1;
    if (!So.lib.Base64.isValid(n)) return !1;
    var s = cc11001100_hook("s", parseInt(r), "var-init"),
      o = cc11001100_hook("o", [], "var-init");
    try {
      o = cc11001100_hook("o", So.lib.Base64.toUint8Array(n), "assign");
    } catch (u) {
      return !1;
    }
    for (var a = cc11001100_hook("a", 0, "var-init"), f = cc11001100_hook("f", o.length, "var-init"); a < f; a++) s += cc11001100_hook("s", parseInt(o[a]), "assign");
    var l = cc11001100_hook("l", (s % 16).toString(16), "var-init");
    return l === i.split("")[2];
  }
  var e = cc11001100_hook("e", "recls", "var-init"),
    t = cc11001100_hook("t", "recext", "var-init"),
    n = cc11001100_hook("n", So.lib.cookie.get(e), "var-init"),
    r = cc11001100_hook("r", So.lib.cookie.get(t), "var-init"),
    i = cc11001100_hook("i", So.lib.getUnMid(So.comm.md) || So.lib.getUnMid(So.lib.cookie.get("__md")), "var-init"),
    s = cc11001100_hook("s", So.comm.user.qid, "var-init"),
    o = cc11001100_hook("o", "https://api.ssl.so.com/v3/srec/get", "var-init"),
    u = cc11001100_hook("u", "so.com", "var-init");
  i && !r && l(), r && !c(r) && l(), So.lib.cookie.get("loginrec") && (s && l(), So.lib.cookie.remove("loginrec"));
}(), function () {
  function d() {
    $.ajax({
      url: cc11001100_hook("url", f, "object-key-init"),
      dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
      data: {
        src: cc11001100_hook("src", "so_home", "object-key-init"),
        ret_type: cc11001100_hook("ret_type", "jsonp", "object-key-init"),
        req: cc11001100_hook("req", "kw", "object-key-init"),
        mid: cc11001100_hook("mid", So.comm.md, "object-key-init"),
        guid: cc11001100_hook("guid", a, "object-key-init"),
        crec: cc11001100_hook("crec", So.lib.recls().wd, "object-key-init"),
        recext: cc11001100_hook("recext", So.lib.cookie.get("recext"), "object-key-init")
      },
      jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
      timeout: cc11001100_hook("timeout", 2e3, "object-key-init"),
      jsonpCallback: cc11001100_hook("jsonpCallback", "__query_rec", "object-key-init"),
      success: function (t) {
        if (t && t.status && t.status.data == "stopped") {
          var n = cc11001100_hook("n", new Date(), "var-init");
          n.setDate(n.getDate() + 30), So.lib.cookie.set(c, 1, {
            expires: cc11001100_hook("expires", n, "object-key-init")
          }), e.remove();
          return;
        }
        t && t.data && t.data.length && (i = cc11001100_hook("i", i.concat(t.data), "assign")), m();
      }
    });
  }
  function v(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init"),
      n,
      r = cc11001100_hook("r", So.lib.soLocalStorage.getItem("often-del") || JSON.stringify([]), "var-init");
    r = cc11001100_hook("r", JSON.parse(r), "assign");
    for (var i = cc11001100_hook("i", 0, "var-init"), s = cc11001100_hook("s", e.length, "var-init"); i < s; i++) {
      n = cc11001100_hook("n", !1, "assign");
      for (var o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", r.length, "var-init"); o < u; o++) if (e[i].kw == r[o]) {
        n = cc11001100_hook("n", !0, "assign");
        break;
      }
      !n && t.push(e[i]);
    }
    var a = cc11001100_hook("a", [], "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), s = cc11001100_hook("s", t.length, "var-init"); i < s; i++) {
      n = cc11001100_hook("n", !1, "assign");
      for (var o = cc11001100_hook("o", 0, "var-init"), u = cc11001100_hook("u", a.length, "var-init"); o < u; o++) if (t[i].kw == a[o].kw) {
        n = cc11001100_hook("n", !0, "assign");
        break;
      }
      !n && a.push(t[i]);
    }
    return a;
  }
  function m() {
    i = cc11001100_hook("i", i.concat(o), "assign");
    for (var r = cc11001100_hook("r", 0, "var-init"), u = cc11001100_hook("u", i.length, "var-init"); r < u; r++) i[r].kw ? i[r].from != "hnews" && s.push({
      kw: cc11001100_hook("kw", i[r].kw, "object-key-init"),
      icon: cc11001100_hook("icon", So.lib.getPicUrl(i[r].icon, "/dmt/13_13_"), "object-key-init"),
      type: cc11001100_hook("type", "user", "object-key-init")
    }) : s.push({
      kw: cc11001100_hook("kw", i[r], "object-key-init"),
      type: cc11001100_hook("type", "qcms", "object-key-init")
    });
    s = cc11001100_hook("s", v(s), "assign"), t.append(p.tools);
    if (!s.length) return;
    e.show(), n.html(So.lib.template(p.list, {
      data: cc11001100_hook("data", s, "object-key-init")
    })), g(), h.css({
      height: cc11001100_hook("height", "", "object-key-init")
    }), setTimeout(function () {
      h.css({
        height: cc11001100_hook("height", h.height(), "object-key-init")
      });
    }, 0);
  }
  function g() {
    $.each(n.find("span"), function (e, t) {
      So.lib.isVisible($(t), !1, n) || r.append($(t));
    }), r.find("span").length || (r.remove(), t.find(".open").remove());
  }
  function y() {
    e.removeClass("edit-mod"), e.removeClass("show-more-mod");
  }
  function b() {
    r.height() < 65 ? r.addClass("less") : r.removeClass("less");
  }
  function w() {
    t.on("click", function (t) {
      var i = cc11001100_hook("i", $(t.target), "var-init");
      i.is(".finish") ? (y(), n.append(r.find("span")), g()) : i.is(".edit") ? (e.addClass("edit-mod"), e.addClass("show-more-mod"), b(), So.lib.log(l, {
        type: cc11001100_hook("type", "del-edit", "object-key-init")
      })) : i.is(".close") ? So.web.closeMask({
        title: cc11001100_hook("title", "\u786e\u8ba4\u5173\u95ed\u5e38\u641c\u670d\u52a1\uff1f", "object-key-init"),
        desc: cc11001100_hook("desc", "\u4eb2\uff0c\u5173\u95ed\u5e38\u641c\u670d\u52a1\u5c06\u65e0\u6cd5\u5feb\u6377\u7684\u67e5\u8be2\u611f\u5174\u8da3\u7684\u5185\u5bb9\uff5e", "object-key-init"),
        sureTxt: cc11001100_hook("sureTxt", "\u786e\u8ba4\u5173\u95ed", "object-key-init"),
        callback: function () {
          var e = cc11001100_hook("e", new Date(), "var-init");
          e.setDate(e.getDate() + 30), So.lib.cookie.set(c, 1, {
            expires: cc11001100_hook("expires", e, "object-key-init")
          });
          var t = cc11001100_hook("t", +new Date(), "var-init");
          $.ajax({
            url: cc11001100_hook("url", f, "object-key-init"),
            dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
            data: {
              mid: cc11001100_hook("mid", So.comm.md, "object-key-init"),
              guid: cc11001100_hook("guid", a, "object-key-init"),
              src: cc11001100_hook("src", "so_home", "object-key-init"),
              "switch": cc11001100_hook("switch", "off", "object-key-init"),
              oa: cc11001100_hook("oa", So.lib.md5(So.comm.md + t + "a%&k*b"), "object-key-init"),
              action: cc11001100_hook("action", "off", "object-key-init"),
              _t: cc11001100_hook("_t", t, "object-key-init")
            },
            jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
            jsonpCallback: cc11001100_hook("jsonpCallback", "__query_rec", "object-key-init")
          }), So.lib.log(l, {
            type: cc11001100_hook("type", "close-oftenso", "object-key-init")
          });
        }
      }) : i.is(".open") && (e.toggleClass("show-more-mod"), b(), e.hasClass("show-more-mod") ? So.lib.log(l, {
        type: cc11001100_hook("type", "open-more", "object-key-init")
      }) : So.lib.log(l, {
        type: cc11001100_hook("type", "close-more", "object-key-init")
      }));
    }), e.on("click", ".del", function () {
      var t = cc11001100_hook("t", $(this), "var-init"),
        i = cc11001100_hook("i", t.attr("data-kw"), "var-init"),
        s = cc11001100_hook("s", So.lib.soLocalStorage.getItem("often-del") || JSON.stringify([]), "var-init");
      s = cc11001100_hook("s", JSON.parse(s), "assign"), s.length == u && s.shift(), s.push(i), So.lib.soLocalStorage.setItem("often-del", JSON.stringify(s));
      if (t.attr("data-type") == "user") {
        var o = cc11001100_hook("o", +new Date(), "var-init");
        $.ajax({
          url: cc11001100_hook("url", f, "object-key-init"),
          type: cc11001100_hook("type", "get", "object-key-init"),
          dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
          jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
          jsonpCallback: cc11001100_hook("jsonpCallback", "__query_rec", "object-key-init"),
          data: {
            mid: cc11001100_hook("mid", So.comm.md, "object-key-init"),
            guid: cc11001100_hook("guid", a, "object-key-init"),
            src: cc11001100_hook("src", "del", "object-key-init"),
            del_kw: cc11001100_hook("del_kw", i, "object-key-init"),
            oa: cc11001100_hook("oa", So.lib.md5(So.comm.md + i + o + "a%&k*b"), "object-key-init"),
            action: cc11001100_hook("action", "del", "object-key-init"),
            _t: cc11001100_hook("_t", o, "object-key-init")
          }
        });
      }
      return t.closest(".list").length && (n.append(r.find("span")), setTimeout(g, 0)), setTimeout(function () {
        !n.find("span").length && !$("#often_so .list-more").length ? e.remove() : r.find("span").length || r.remove();
      }, 0), t.closest("span").remove(), So.lib.log(l, {
        type: cc11001100_hook("type", "del-oftenSo", "object-key-init")
      }), !1;
    }), e.on("click", ".txt", function () {
      So.lib.log(l, {
        type: cc11001100_hook("type", "oftenso", "object-key-init")
      });
    }), $("body").on("click", function (e) {
      $(e.target).closest("#often_so").length == 0 && y();
    }), $("#user-login,#user-reg,#user-logout,#hd_nav li.changeskin a").bind("click", y);
  }
  function E() {
    if (So.lib.cookie.get(c) == 1) return;
    e = cc11001100_hook("e", $("#often_so"), "assign"), t = cc11001100_hook("t", e.find(".tools"), "assign"), n = cc11001100_hook("n", e.find(".list"), "assign"), r = cc11001100_hook("r", e.find(".list-more"), "assign"), d(), w();
  }
  var e,
    t,
    n,
    r,
    i = cc11001100_hook("i", [], "var-init"),
    s = cc11001100_hook("s", [], "var-init"),
    o = cc11001100_hook("o", So.newsFlow.oftenSoData, "var-init"),
    u = cc11001100_hook("u", 50, "var-init"),
    a = cc11001100_hook("a", So.lib.cookie.get("__huid") || "", "var-init"),
    f = cc11001100_hook("f", "//query.rec.360.cn/gasucs/query_rec", "var-init"),
    l = cc11001100_hook("l", "oftenSo", "var-init"),
    c = cc11001100_hook("c", "oftenSo", "var-init"),
    h = cc11001100_hook("h", $("#bd_search"), "var-init"),
    p = cc11001100_hook("p", {
      list: cc11001100_hook("list", ["<% for(var i = 0, len = data.length; i < len; i++){ %>", "<span>", '<a class="txt g-ellipsis" href="/s?ie=utf-8&q=<%= encodeURIComponent(So.lib.unescapeHTML(data[i].kw)) %>&src=so_isearch" target="_blank" title="<%= So.lib.escapeHTML(data[i].kw) %>"><%= data[i].icon ? "<img class=ico width=13px height=13px src=" + data[i].icon + ">" : "" %><%= So.lib.escapeHTML(data[i].kw) %></a>', '<a class="del g-icon" href="javascript:;" data-kw="<%= So.lib.escapeHTML(data[i].kw) %>" data-type="<%= data[i].type %>" title="\u5220\u9664"></a>', "</span>", "<% } %>"].join(""), "object-key-init"),
      tools: cc11001100_hook("tools", ['<span class="finish">\u5b8c\u6210</span>', '<span class="open"></span>', '<span class="setting">', '   <div class="g-menu g-shadow">', '       <div class="placeholder"></div>', '       <a href="javascript:;" class="edit">\u7f16\u8f91</a>', '       <a href="javascript:;" class="close">\u5173\u95ed</a>', "   </div>", "</span>"].join(""), "object-key-init"),
      noData: cc11001100_hook("noData", '<div class="no-data">\u60a8\u6682\u65f6\u6ca1\u6709\u5e38\u641c\u8bcd\u54e6~</div>', "object-key-init")
    }, "var-init");
  E();
}(), function () {
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (So.lib.browser.isIE() && So.lib.browser.isIE() <= 9) {
      window.open("http://info.so.com/feedback.html");
      return;
    }
    var t = cc11001100_hook("t", this, "var-init");
    e.preventDefault(), e.stopPropagation(), $.each($(".so_feedback_link"), function (e, r) {
      t != r && $(r).hasClass("so_feedback_cancel") && n($(r));
    }), n($(t));
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", t.data("class"), "var-init");
    if (t.hasClass("so_feedback_cancel")) n === "ac_menu" && ($(".ac_menu_ctn .so_feedback_edit li span").off("click.so_feedback_edit"), $(".ac_menu_ctn .so_feedback_edit li").not(".local").off("click.so_feedback_edit")), t.removeClass("so_feedback_cancel"), $("." + n).removeClass("so_feedback_edit"), t.find(".so_feedback_txt").text("\u53cd\u9988");else {
      t.addClass("so_feedback_cancel");
      var i = cc11001100_hook("i", t.closest(".inline-recommend-inner"), "var-init");
      i.length ? i.find(".inline-recommend-item").addClass("so_feedback_edit") : n === "so-pdr-bd" ? t.closest(".so-pdr").find(".so-pdr-bd").addClass("so_feedback_edit") : $("." + n).addClass("so_feedback_edit"), t.find(".so_feedback_txt").text("\u53d6\u6d88"), n && (e.module_token = cc11001100_hook("e.module_token", n, "assign")), n === "ac_menu" && ($(".ac_menu_ctn .so_feedback_edit li span").on("click.so_feedback_edit", function (t) {
        e.$keyword.blur(), r.call(this, t);
      }), $(".ac_menu_ctn .so_feedback_edit li").not(".local").on("click.so_feedback_edit", function (e) {
        e.stopPropagation(), e.preventDefault();
      }));
    }
  }
  function r(t) {
    cc11001100_hook("t", t, "function-parameter");
    t.stopPropagation(), t.preventDefault();
    var n = cc11001100_hook("n", {
        words: cc11001100_hook("words", $(this).text(), "object-key-init")
      }, "var-init"),
      r = cc11001100_hook("r", $(this).closest(".ac_menu"), "var-init");
    r.length && $.extend(n, {
      sug_ssid: cc11001100_hook("sug_ssid", r.attr("ssid"), "object-key-init"),
      sug_prefix: cc11001100_hook("sug_prefix", e.$keyword.val(), "object-key-init")
    });
    var i = cc11001100_hook("i", $(this).closest(".inline-recommend"), "var-init");
    i.length && $.extend(n, {
      url: cc11001100_hook("url", encodeURIComponent(i.data("url")), "object-key-init")
    }), So.lib.observer.publish(e.EVENTNAME, n, e.feedbackItems);
  }
  function i(n) {
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", $(".ac_wrap .so_feedback_link"), "var-init");
    e.$keyword.val() && $(".ac_menu li").not(".local").length ? r.show() : r.hide(), r.hasClass("so_feedback_cancel") && t.call(this, n);
  }
  var e = cc11001100_hook("e", {
    EVENTNAME: cc11001100_hook("EVENTNAME", "so.feedback.edit", "object-key-init"),
    CLOSEEVENTNAME: cc11001100_hook("CLOSEEVENTNAME", "so.feedback.edit.close", "object-key-init"),
    MOREEVENTNAME: cc11001100_hook("MOREEVENTNAME", "so.feedback.edit.more", "object-key-init"),
    $feedbackDialog: cc11001100_hook("$feedbackDialog", ['<div class="so-feedback-mask">', '<div class="so-feedback-dialog">', '<a href="javascript:;" class="so-feedback-close"></a>', "<h3>\u53cd\u9988\u7406\u7531</h3>", '<p class="so-feedback-query">\u53cd\u9988:<em><%=query%></em></p>', '<div class="so-feedback-list">', "<% for(var i = 0; i < items.length; i++) { %>", '<div class="so-feedback-item"><input type="radio" value="<%=items[i]%>" id="item<%=i%>" name="so-feedback-reason"><label for="item<%=i%>"><span class="so-feedback-radio"></span><%=items[i]%></label></div>', "<% } %>", '<div class="so-feedback-item"><input type="radio" value="\u5176\u4ed6\u7406\u7531" id="item" name="so-feedback-reason"><label for="item"><span class="so-feedback-radio"></span><input type="text" class="so-feedback-txt" placeholder="\u8f93\u5165\u5176\u4ed6\u7406\u7531" /></label></div>', "</div>", '<a href="javascript:;" class="so-feedback-btn so-feedback-cancel">\u53d6\u6d88</a><a href="javascript:;" class="so-feedback-btn so-feedback-btn-confirm so-feedback-confirm">\u63d0\u4ea4</a>', "</div>", "</div>"].join(""), "object-key-init"),
    $feedbackConfirmDialog: cc11001100_hook("$feedbackConfirmDialog", $(['<div class="so-feedback-mask">', '<div class="so-feedback-dialog">', '<a href="javascript:;" class="so-feedback-close"></a>', '<div class="so-feedback-list so-feedback-tips">', '<div class="so-feedback-item">\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01</div>', '<div class="so-feedback-item">\u60a8\u7684\u56de\u590d\u5c06\u5e2e\u52a9\u6211\u4eec\u6539\u5584\u641c\u7d22\u4f7f\u7528\u4f53\u9a8c\u3002</div>', "</div>", '<a href="javascript:;" class="so-feedback-btn so-feedback-more">\u7ee7\u7eed\u53cd\u9988</a><a href="javascript:;" class="so-feedback-btn so-feedback-btn-confirm so-feedback-cancel">\u5b8c\u6210</a>', "</div>", "</div>"].join("")), "object-key-init"),
    submitData: {},
    module_token: cc11001100_hook("module_token", "", "object-key-init"),
    feedbackItems: cc11001100_hook("feedbackItems", ["\u7ed3\u679c\u4e0d\u76f8\u5173", "\u5185\u5bb9\u6709\u9519\u8bef", "\u7ed3\u679c\u91cd\u590d", "\u4e3e\u62a5"], "object-key-init"),
    $keyword: cc11001100_hook("$keyword", So.comm.pid == "home" ? $("#input") : $("#keyword"), "object-key-init"),
    $sofeedbackMask: cc11001100_hook("$sofeedbackMask", null, "object-key-init"),
    ajaxLoading: cc11001100_hook("ajaxLoading", !1, "object-key-init")
  }, "var-init");
  So.lib.observer.subscribe(e.EVENTNAME, function (t, n) {
    e.submitData = cc11001100_hook("e.submitData", {}, "assign"), e.submitData.module_token = cc11001100_hook("e.submitData.module_token", e.module_token, "assign"), t && $.extend(e.submitData, t), e.$sofeedbackMask && e.$sofeedbackMask.remove(), $(document.body).append(So.lib.template(e.$feedbackDialog, {
      items: cc11001100_hook("items", n, "object-key-init"),
      query: cc11001100_hook("query", So.lib.escapeHTML(e.submitData.words), "object-key-init")
    })), e.$sofeedbackMask = cc11001100_hook("e.$sofeedbackMask", $(".so-feedback-mask"), "assign");
  }), $(document.body).on("click", ".so_feedback_link", function (n) {
    e.$sofeedbackMask && e.$sofeedbackMask.remove(), t.call(this, n);
  }), $(document.body).on("mousedown", ".so_feedback_edit a", function (e) {
    r.call(this, e);
  }), $(document.body).on("click", ".so_feedback_edit a, .ac_menu_ctn .so_feedback_edit li", function (e) {
    e.stopPropagation(), e.preventDefault();
  }), $(document.body).on("click", ".so-feedback-confirm", function () {
    e.submitData.feedback_reason = cc11001100_hook("e.submitData.feedback_reason", $("input[name=so-feedback-reason]:checked").val(), "assign"), e.submitData.feedback_reason === "\u5176\u4ed6\u7406\u7531" && (e.submitData.feedback_reason += cc11001100_hook("e.submitData.feedback_reason", ":" + $(".so-feedback-txt").val(), "assign"));
    if (!e.submitData.feedback_reason) return;
    $.extend(e.submitData, {
      query: cc11001100_hook("query", So.comm.q, "object-key-init"),
      user_id: cc11001100_hook("user_id", So.comm.guid, "object-key-init"),
      timeStamp: cc11001100_hook("timeStamp", +new Date(), "object-key-init"),
      sid: cc11001100_hook("sid", So.comm.sid, "object-key-init"),
      huid: cc11001100_hook("huid", So.lib.cookie.get("__huid") || "", "object-key-init"),
      mid: cc11001100_hook("mid", So.lib.getUnMid(So.comm.md), "object-key-init")
    });
    if (e.ajaxLoading) return;
    e.ajaxLoading = cc11001100_hook("e.ajaxLoading", !0, "assign");
    var t = cc11001100_hook("t", So.comm.ssurl ? "https://p.ssl.so.com/waiter/api/feedbackWords" : "http://waiter.www.so.com/api/feedbackWords", "var-init");
    $.ajax({
      url: cc11001100_hook("url", t, "object-key-init"),
      type: cc11001100_hook("type", "post", "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      timeout: cc11001100_hook("timeout", 3e3, "object-key-init"),
      data: cc11001100_hook("data", e.submitData, "object-key-init")
    }), e.$sofeedbackMask.remove(), $(document.body).append(e.$feedbackConfirmDialog), e.$sofeedbackMask = cc11001100_hook("e.$sofeedbackMask", $(".so-feedback-mask"), "assign"), e.ajaxLoading = cc11001100_hook("e.ajaxLoading", !1, "assign");
  }), $(document.body).on("click", ".so-feedback-more, .so-feedback-cancel, .so-feedback-close", function () {
    e.$sofeedbackMask.remove();
  }), $(document.body).on("click", ".so-feedback-more", function () {
    So.lib.observer.publish(e.MOREEVENTNAME);
  }), $(document.body).on("click", ".so-feedback-cancel, .so-feedback-close", function () {
    $.each($(".so_feedback_link"), function (e, t) {
      $(t).hasClass("so_feedback_cancel") && n($(t));
    }), So.lib.observer.publish(e.CLOSEEVENTNAME);
  }), $(document.body).on("focus", ".so-feedback-txt", function () {
    $("#item").click();
  }), e.$keyword.on("blur focus input", function (e) {
    var t = cc11001100_hook("t", this, "var-init");
    setTimeout(function () {
      i.call(t, e);
    }, 500);
  });
}();