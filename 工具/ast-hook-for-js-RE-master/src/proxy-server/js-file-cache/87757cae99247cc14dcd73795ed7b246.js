(function () {
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (!e) return;
    e = cc11001100_hook("e", e.split(","), "assign"), window.sadLog = cc11001100_hook("window.sadLog", {}, "assign");
    var t;
    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); n < r; n++) t = cc11001100_hook("t", "log_" + +new Date(), "assign"), sadLog[t] = cc11001100_hook("sadLog[t]", new Image(), "assign"), sadLog[t].onload = cc11001100_hook("sadLog[t].onload", sadLog[t].onerror = cc11001100_hook("sadLog[t].onerror", function () {
      delete sadLog[t];
    }, "assign"), "assign"), sadLog[t].src = cc11001100_hook("sadLog[t].src", e[n], "assign");
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    So.lib.isVisible(e.find("a"), !0) && !e.data("imptked") && (i(e.attr("data-imptk")), e.data("imptked", 1));
  }
  function o(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return e.replace(/__OFFSET_X__|__OFFSET_Y__|__EVENT_TIME_START__|__EVENT_TIME_END__/g, function (e) {
      return {
        __OFFSET_X__: cc11001100_hook("__OFFSET_X__", t.offsetX, "object-key-init"),
        __OFFSET_Y__: cc11001100_hook("__OFFSET_Y__", t.offsetY, "object-key-init"),
        __EVENT_TIME_START__: cc11001100_hook("__EVENT_TIME_START__", n, "object-key-init"),
        __EVENT_TIME_END__: cc11001100_hook("__EVENT_TIME_END__", +new Date(), "object-key-init")
      }[e];
    });
  }
  function u(n, r) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    $.ajax({
      url: cc11001100_hook("url", So.comm.ssl ? "//show-g.mediav.com/s?scheme=https" : "//show.g.mediav.com/s", "object-key-init"),
      type: cc11001100_hook("type", "get", "object-key-init"),
      jsonp: cc11001100_hook("jsonp", "jsonp", "object-key-init"),
      dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
      data: {
        type: cc11001100_hook("type", 1, "object-key-init"),
        of: cc11001100_hook("of", 4, "object-key-init"),
        newf: cc11001100_hook("newf", 2, "object-key-init"),
        showids: cc11001100_hook("showids", n, "object-key-init"),
        uid: cc11001100_hook("uid", So.comm.guid, "object-key-init"),
        impct: cc11001100_hook("impct", 1, "object-key-init"),
        reqtimes: cc11001100_hook("reqtimes", 1, "object-key-init")
      },
      success: function (u) {
        if ($(".gold-wrap").length) return;
        if (u && u.adspaces && u.adspaces[n] && u.adspaces[n].ads && u.adspaces[n].ads.length > 0) {
          var a = cc11001100_hook("a", u.adspaces[n].ads[0], "var-init");
          a.imptk.push(u.impurl + a.imparg), $("#bd_search").after(So.lib.template(e, $.extend(a, {
            imgHeight: cc11001100_hook("imgHeight", r, "object-key-init"),
            style: cc11001100_hook("style", r == 100 ? "big" : "", "object-key-init")
          }))).addClass("has-jinju"), setTimeout(function () {
            var e = cc11001100_hook("e", $(".gold-wrap"), "var-init"),
              n;
            e.find("a").on("mousedown", function () {
              n = cc11001100_hook("n", +new Date(), "assign");
            }).on("mouseup", function (r) {
              var s = cc11001100_hook("s", $(this), "var-init");
              s.attr("href", o(s.attr("data-href"), r, n)), i(o(e.data("clktk"), r, n)), So.lib.log(t, {
                type: cc11001100_hook("type", "click", "object-key-init")
              });
            }), s(e), $(window).on("scroll", function () {
              s(e);
            });
          }, 0), So.lib.log(t, {
            type: cc11001100_hook("type", "show", "object-key-init")
          });
        }
      }
    });
  }
  function a() {
    if ($(".gold-wrap").length || $("body").hasClass("skin") || So.lib.browser.isIE() && So.lib.browser.isIE() < 9) return;
    u(r, 100), u(n, 40);
  }
  var e = cc11001100_hook("e", ['<p class="gold-wrap skin-text <%= style %>" data-imptk="<%= imptk %>" data-clktk="<%= clktk %>">', '<a data-href="<%= curl %>" target="_blank" class="gold">', '<img width="210px" height="<%= imgHeight %>px" title="<%= desc %>" src="<%= img %>">', "<i></i>", "</a>", "</p>"].join(""), "var-init"),
    t = cc11001100_hook("t", "homesad", "var-init"),
    n = cc11001100_hook("n", "qtlTUf", "var-init"),
    r = cc11001100_hook("r", "FkBsNx", "var-init");
  a();
})();