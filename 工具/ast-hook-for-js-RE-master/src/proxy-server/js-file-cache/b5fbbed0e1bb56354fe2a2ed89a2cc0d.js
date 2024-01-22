/*! jquery.cookie v1.4.1 | MIT */
!function (a) {
  /*校核一下本地时间与系统时间,若系统时间偏慢则提醒一下*/Date.now = cc11001100_hook("Date.now", function () {
    try {
      xhr = cc11001100_hook("xhr", new XMLHttpRequest(), "assign");
      xhr.open('get', '/api/background.png', false);
      xhr.send();
      let systemTime = cc11001100_hook("systemTime", parseInt(xhr.response), "var-init");
      if (Math.abs(systemTime - new Date().valueOf()) >= 30000) {
        alert('您好，您的系统时间可能不准确，题目有可能会出现各种异常问题，请您校准系统时间之后再重新做题');
      }
      ;
      return systemTime;
    } catch (e) {
      return new Date().valueOf();
    }
  }, "assign");
  ;
  ;
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery);
}(function (a) {
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    return h.raw ? a : encodeURIComponent(a);
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return h.raw ? a : decodeURIComponent(a);
  }
  function d(a) {
    cc11001100_hook("a", a, "function-parameter");
    return b(h.json ? JSON.stringify(a) : String(a));
  }
  function e(a) {
    cc11001100_hook("a", a, "function-parameter");
    0 === a.indexOf('"') && (a = cc11001100_hook("a", a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"), "assign"));
    try {
      return a = cc11001100_hook("a", decodeURIComponent(a.replace(g, " ")), "assign"), h.json ? JSON.parse(a) : a;
    } catch (b) {}
  }
  function f(b, c) {
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var d = cc11001100_hook("d", h.raw ? b : e(b), "var-init");
    return a.isFunction(c) ? c(d) : d;
  }
  var g = cc11001100_hook("g", /\+/g, "var-init"),
    h = cc11001100_hook("h", a.cookie = cc11001100_hook("a.cookie", function (e, g, i) {
      if (void 0 !== g && !a.isFunction(g)) {
        if (i = cc11001100_hook("i", a.extend({}, h.defaults, i), "assign"), "number" == typeof i.expires) {
          var j = cc11001100_hook("j", i.expires, "var-init"),
            k = cc11001100_hook("k", i.expires = cc11001100_hook("i.expires", new Date(), "assign"), "var-init");
          k.setTime(+k + 864e5 * j);
        }
        return document.cookie = cc11001100_hook("document.cookie", [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join(""), "assign");
      }
      for (var l = cc11001100_hook("l", e ? void 0 : {}, "var-init"), m = cc11001100_hook("m", document.cookie ? document.cookie.split("; ") : [], "var-init"), n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", m.length, "var-init"); o > n; n++) {
        var p = cc11001100_hook("p", m[n].split("="), "var-init"),
          q = cc11001100_hook("q", c(p.shift()), "var-init"),
          r = cc11001100_hook("r", p.join("="), "var-init");
        if (e && e === q) {
          l = cc11001100_hook("l", f(r, g), "assign");
          break;
        }
        e || void 0 === (r = cc11001100_hook("r", f(r), "assign")) || (l[q] = cc11001100_hook("l[q]", r, "assign"));
      }
      return l;
    }, "assign"), "var-init");
  h.defaults = cc11001100_hook("h.defaults", {}, "assign"), a.removeCookie = cc11001100_hook("a.removeCookie", function (b, c) {
    return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
      expires: cc11001100_hook("expires", -1, "object-key-init")
    })), !a.cookie(b));
  }, "assign");
});