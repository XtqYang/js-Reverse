if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}

document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_JjcRZdqfMquFid4Pn_q7-AM"\x3e');

(function () {
  var m = cc11001100_hook("m", document.createElement('meta'), "var-init");
  m.setAttribute('data-jc', '82');
  m.setAttribute('data-jc-version', 'r20230920');
  var ss = cc11001100_hook("ss", document.getElementsByTagName('script')[0], "var-init");

  if (ss && ss.parentNode) {
    ss.parentNode.insertBefore(m, ss);
  }
})();

(function () {
  /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */
  var h = cc11001100_hook("h", this || self, "var-init");

  function l(a, d, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    if (a) for (var c = cc11001100_hook("c", 0, "var-init"); null != a && 500 > c && !b(a); ++c) a = cc11001100_hook("a", d(a), "assign");
  }

  function m(a, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    l(a, function (b) {
      try {
        return b === b.parent ? null : b.parent;
      } catch (c) {}

      return null;
    }, d);
  }

  function n(a, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    if ("IFRAME" == a.tagName) d(a);else {
      a = cc11001100_hook("a", a.querySelectorAll("IFRAME"), "assign");

      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length && !d(a[b]); ++b);
    }
  }

  function p(a) {
    cc11001100_hook("a", a, "function-parameter");
    return (a = cc11001100_hook("a", a.ownerDocument, "assign")) && (a.parentWindow || a.defaultView) || null;
  }

  function q(a, d, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");

    try {
      var c = cc11001100_hook("c", JSON.parse(b.data), "var-init");
    } catch (f) {}

    if ("object" === typeof c && c && "creativeLoad" === c.type) {
      var g = cc11001100_hook("g", p(a), "var-init");

      if (b.source && g) {
        var e;
        m(b.source, function (f) {
          try {
            if (f.parent === g) return e = cc11001100_hook("e", f, "assign"), !0;
          } catch (k) {}
        });
        e && n(a, function (f) {
          if (f.contentWindow === e) return d(c), !0;
        });
      }
    }
  }

  function r(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "string" === typeof a ? document.getElementById(a) : a;
  }

  ;
  var t;
  t = cc11001100_hook("t", void 0 === t ? window : t, "assign");
  t.clsn = cc11001100_hook("t.clsn", function (a, d) {
    var b = cc11001100_hook("b", r(a), "var-init");
    if (b) if (b.onCreativeLoad) b.onCreativeLoad(d);else {
      var c = cc11001100_hook("c", d ? [d] : [], "var-init"),
          g = function (e) {
        for (var f = cc11001100_hook("f", 0, "var-init"); f < c.length; ++f) try {
          c[f](1, e);
        } catch (k) {}

        c = cc11001100_hook("c", {
          push: function (k) {
            k(1, e);
          }
        }, "assign");
      };

      b.onCreativeLoad = cc11001100_hook("b.onCreativeLoad", function (e) {
        c.push(e);
      }, "assign");
      b.setAttribute("data-creative-load-listener", "");
      b.addEventListener("creativeLoad", function (e) {
        g(e.detail);
      });
      h.addEventListener("message", function (e) {
        q(b, g, e);
      });
    }
  }, "assign");
}).call(this);
clsn("gcc_JjcRZdqfMquFid4Pn_q7-AM");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CNrKsP6exYEDFatCwgUdH_0OPw\x22 href\x3d\x22https://ad.doubleclick.net/pcs/click?xai\x3dAKAOjssaewkc20qSDaqBPi0IXqZX2cH_UoDQ7SOHQ3yfhgIHuITLVkFFEXTH4FlS3_JO6-y9Ra9Ux1izZeW_OU2SkoWRop_sqGNGGekXKN-fJYT58mKL99Ce3l4_0_K8sb6YcFiLcWE1qSGU84IUmMhjUipl0HIsSdn33f0x499CYSJD1wa8SCb3_VkoKtsx8gSCJwKQhQqfBiKuZGiR7EF01l6NfiNMAPUkbLbreNW3WiYMo4RCOAqCND7OISKoT2Gl5sFQmWNsncl0zZ6SB4ngJLxTf_zO7M4ED5910soSFkHcoYobNm0h0pdf9KaHMplvyvrNDp0viJpwtFjd0YZDEtkUOcFXYziHGFGhWc4PMTLMuwvGWzgJfueLFocLPgUhtT7NbHTmnLRtUNL-Xe8VTsHlLB56gnUvm-Xa1o1cUxpkTMjSk24L-nwUxLPuT4BzxFFWT7As6ApHQoITvXor_I8VYThJockW4Nr6UBmAvgG7cjd08WBGY68TeJDq7R6e0RbGEwiLLb7kYRoQ930o0ckkBeNgVJqrzIJMrf1WbUGhegpj-WQ_SsIWY3gmg2CIheAbXennf1KF1qautttJo8El8qxsgIFNUZ9XKNUDeRFKZ86lnKrAL-lR8AJ5c5WRZsV5I87sSXZqGE5fm1CvKJ1tvTwO55eKl8joYYAgaUXiZXYhdgZZiPMVtHiapxsNsGJKYvManFdP6rU8qQ6pk-MLIdI0e_UK9YLM5e2XrpS5MPbrLxUrayWfi66pVeofJPUzP92QK0oJD83Xae9VvSm1wCnFl_bkEoCxLlTvZ3BW4fwHkcLqgdC6QBoTMPOol5LdGjKFEbzqE0faNkV9AGoMyo17uQne9hgn0610YJ82Rx3Atz7Od_L7QxXWCEn-bGtY4v6Jry8mnGL3Ul3ZTJ-7Tje1Af4Xdj_xEpDsdfe2jvqSKx47B9YnO_MDH7jasNXf-XhrjdWImxy_kryjDb_Ah7g5yyPEtcNCCbGSvNa__n-K4MQ5OTJpERW-X55NWdH4MilIJj_OiY-1I12MOHJMS1hgwG2aWX4ugie2pA4G_0mBlbxOIhjvEgla3k6sd070G5BRVposkcYlbQCieKTWkbUQVphgUXmJL8ZpXELR3Rwqla72Zbv6-gVDZReRSo7Z3lwXWca2hEEOA9rxmUjxB62Pzt-lEfU8AMDaus_EYiRdFgddFL6x_7vd2ForpaGjBi2ZLsW4rs7Op-z3QRbbmmYgx28cODYZIov8k8O8rNGDnfaKal_hzbwP0Y11z4zXMxQTuHcrmibM32nG2hRtnUFFE26SqJdx38L1rDzszMIYVd6GPYt1KqsBZTq2KAuCrh8t-jL4HwEwPsmqByPnOg\x26amp;sai\x3dAMfl-YRt6eyiHr3NN3iU8p0oMwZMDw9B7SMMfJ1qWMHNvjf2HClodUx8zchHqDi74s0noAVjO8PJQYQv1-jhxIyDguSlt0TF5_F_qdbYdhuUkx6NFtYM-0JjsmvQz6RX0Y8SXhTuJ5uRmv6ylLqZX6JR-KKlyeIeff0WIRXCf25Cz6fXKfhhQNqGL-URiKYhnWLM45EzAZoyDwz8efkTIRSBMU8eASrHBmWqbd_9xCA7_48lfR6KsotY2YRDvBpg6LVZ0RHlew8wWf44ZzP6LvTwgY6VonChP6Bv29ehaL2FFo3YTIum4UtsWUwGOHg5uH9MSsSZSz96CtJmjLP6e45R5bY87qtGBOSgPYQdjcFpoTIMuFAxuXvNSsd1VUYvMdOma0QYUy-d6BaqUs1iI2tWeBJ_c_LjWHx1h6rI2fkIjgcN6gpIhHq3\x26amp;sig\x3dCg0ArKJSzHgNYFlTnSi5\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;crd\x3daHR0cHM6Ly9taWNyb3NvZnQuY29t\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/search/%3FOCID%3DAIDcmmknmz9ars_OLA_30205119_370049296_183728371%26dclid%3D%25edclid!\x22 attributionsrc\x3d\x22\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/13701804595609803887\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230920\x22 data-jcp-a-id\x3d\x22img_anch_CNrKsP6exYEDFatCwgUdH_0OPw\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dc.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var c\x3da[b];if(c\x26\x26c.Math\x3d\x3dMath)return c}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var c\x3dca;a\x3da.split(\x22.\x22);for(var d\x3d0;d\x3ca.length-1;d++){var e\x3da[d];if(!(e in c))break a;c\x3dc[e]}a\x3da[a.length-1];d\x3dc[a];b\x3db(d);b!\x3dd\x26\x26null!\x3db\x26\x26aa(c,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},n; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)n\x3dObject.setPrototypeOf;else{var r;a:{var fa\x3d{a:!0},ha\x3d{};try{ha.__proto__\x3dfa;r\x3dha.a;break a}catch(a){}r\x3d!1}n\x3dr?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var ia\x3dn; function ja(a,b){a.prototype\x3dea(b.prototype);a.prototype.constructor\x3da;if(ia)ia(a,b);else for(var c in b)if(\x22prototype\x22!\x3dc)if(Object.defineProperties){var d\x3dObject.getOwnPropertyDescriptor(b,c);d\x26\x26Object.defineProperty(a,c,d)}else a[c]\x3db[c];a.v\x3db.prototype}var ka\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var c\x3d1;c\x3carguments.length;c++){var d\x3darguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)\x26\x26(a[e]\x3dd[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ka});da(\x22Number.isFinite\x22,function(a){return a?a:function(b){return\x22number\x22!\x3d\x3dtypeof b?!1:!isNaN(b)\x26\x26Infinity!\x3d\x3db\x26\x26-Infinity!\x3d\x3db}});/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var t\x3dthis||self;function la(a){t.setTimeout(function(){throw a;},0)};var u,v;a:{for(var ma\x3d[\x22CLOSURE_FLAGS\x22],w\x3dt,x\x3d0;x\x3cma.length;x++)if(w\x3dw[ma[x]],null\x3d\x3dw){v\x3dnull;break a}v\x3dw}var na\x3dv\x26\x26v[610401301];u\x3dnull!\x3dna?na:!1;var y,oa\x3dt.navigator;y\x3doa?oa.userAgentData||null:null;function z(a){return u?y?y.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function A(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function C(){return u?!!y\x26\x260\x3cy.brands.length:!1}function D(){return C()?z(\x22Chromium\x22):(A(\x22Chrome\x22)||A(\x22CriOS\x22))\x26\x26!(C()?0:A(\x22Edge\x22))||A(\x22Silk\x22)};var pa\x3dC()?!1:A(\x22Trident\x22)||A(\x22MSIE\x22);!A(\x22Android\x22)||D();D();A(\x22Safari\x22)\x26\x26(D()||(C()?0:A(\x22Coast\x22))||(C()?0:A(\x22Opera\x22))||(C()?0:A(\x22Edge\x22))||(C()?z(\x22Microsoft Edge\x22):A(\x22Edg/\x22))||C()\x26\x26z(\x22Opera\x22));var qa\x3d{},E\x3dnull;var ra\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,sa\x3d!pa\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var F\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,ta\x3dF?function(a,b){a[F]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function ua(a){var b\x3dG(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),H(a,b|1))} var G\x3dF?function(a){return a[F]|0}:function(a){return a.g|0},I\x3dF?function(a){return a[F]}:function(a){return a.g},H\x3dF?function(a,b){a[F]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function va(){var a\x3d[];ta(a,1);return a}function J(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var wa\x3d{};function K(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var L,M,xa\x3d[];H(xa,39);M\x3dObject.freeze(xa);function ya(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382\x3d{});a.__closure__error__context__984382.severity\x3db};function za(a){if(\x22number\x22!\x3d\x3dtypeof a)throw a\x3dError(),ya(a,\x22warning\x22),a;if(!Number.isFinite(a)){var b\x3dError();ya(b,\x22incident\x22);la(b)}return a};var Aa;function N(a,b,c){null\x3d\x3da\x26\x26(a\x3dAa);Aa\x3dvoid 0;if(null\x3d\x3da){var d\x3d96;c?(a\x3d[c],d|\x3d512):a\x3d[];b\x26\x26(d\x3dd\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();d\x3dG(a);if(d\x2664)return a;d|\x3d64;if(c\x26\x26(d|\x3d512,c!\x3d\x3da[0]))throw Error();a:{c\x3da;var e\x3dc.length;if(e){var f\x3de-1,g\x3dc[f];if(K(g)){d|\x3d256;b\x3d+!!(d\x26512)-1;e\x3df-b;1024\x3c\x3de\x26\x26(Ba(c,b,g),e\x3d1023);d\x3dd\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(g\x3d+!!(d\x26512)-1,b\x3dMath.max(b,e-g),1024\x3cb\x26\x26(Ba(c,g,{}),d|\x3d256,b\x3d1023),d\x3dd\x26-2095105|(b\x261023)\x3c\x3c11)}}H(a,d);return a} function Ba(a,b,c){for(var d\x3d1023+b,e\x3da.length,f\x3dd;f\x3ce;f++){var g\x3da[f];null!\x3dg\x26\x26g!\x3d\x3dc\x26\x26(c[f-b]\x3dg)}a.length\x3dd+1;a[d]\x3dc};function Ca(a,b){return Da(b)} function Da(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ra\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(sa){for(var b\x3d\x22\x22,c\x3d0,d\x3da.length-10240;c\x3cd;)b+\x3dString.fromCharCode.apply(null,a.subarray(c,c+\x3d10240));b+\x3dString.fromCharCode.apply(null,c?a.subarray(c):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!E){E\x3d{};c\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);d\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var f\x3dc.concat(d[e].split(\x22\x22));qa[e]\x3df;for(var g\x3d0;g\x3cf.length;g++){var h\x3df[g];void 0\x3d\x3d\x3dE[h]\x26\x26(E[h]\x3dg)}}}b\x3dqa[b];c\x3dArray(Math.floor(a.length/3));d\x3db[64]||\x22\x22;for(e\x3df\x3d0;f\x3ca.length-2;f+\x3d3){var l\x3da[f],m\x3da[f+1];h\x3da[f+2];g\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|m\x3e\x3e4];m\x3db[(m\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];c[e++]\x3dg+l+m+h}g\x3d0;h\x3dd;switch(a.length-f){case 2:g\x3da[f+1],h\x3db[(g\x2615)\x3c\x3c2]||d;case 1:a\x3da[f],c[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|g\x3e\x3e4]+h+d}a\x3dc.join(\x22\x22)}return a}}return a};function Ea(a,b,c,d,e,f){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26G(a)\x261?void 0:f\x26\x26G(a)\x262?a:Fa(a,b,c,void 0!\x3d\x3dd,e,f);else if(K(a)){var g\x3d{},h;for(h in a)g[h]\x3dEa(a[h],b,c,d,e,f);a\x3dg}else a\x3db(a,d);return a}}function Fa(a,b,c,d,e,f){var g\x3dd||c?G(a):0;d\x3dd?!!(g\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dEa(a[h],b,c,d,e,f);c\x26\x26c(g,a);return a}function Ga(a){return a.o\x3d\x3d\x3dwa?a.toJSON():Da(a)};function O(a,b,c){a\x3da.h;var d\x3dI(a);if(d\x262)throw Error();a:{var e\x3dJ(d);if(b\x3e\x3de){var f\x3dd;if(d\x26256)e\x3da[a.length-1];else{if(null\x3d\x3dc)break a;e\x3da[e+(+!!(d\x26512)-1)]\x3d{};f|\x3d256}e[b]\x3dc;f!\x3d\x3dd\x26\x26H(a,f)}else a[b+(+!!(d\x26512)-1)]\x3dc,d\x26256\x26\x26(c\x3da[a.length-1],b in c\x26\x26delete c[b])}}function P(a,b,c){if(null!\x3dc\x26\x26\x22string\x22!\x3d\x3dtypeof c)throw Error();O(a,b,c)};function Q(a,b,c){this.h\x3dN(a,b,c)}Q.prototype.toJSON\x3dfunction(){if(L)var a\x3dR(this,this.h,!1);else a\x3dFa(this.h,Ga,void 0,void 0,!1,!1),a\x3dR(this,a,!0);return a};function S(a){L\x3d!0;try{return JSON.stringify(a.toJSON(),Ca)}finally{L\x3d!1}}Q.prototype.o\x3dwa;Q.prototype.toString\x3dfunction(){return R(this,this.h,!1).toString()}; function R(a,b,c){var d\x3da.constructor.s,e\x3dJ(I(c?a.h:b)),f\x3d!1;if(d){if(!c){b\x3dArray.prototype.slice.call(b);var g;if(b.length\x26\x26K(g\x3db[b.length-1]))for(f\x3d0;f\x3cd.length;f++)if(d[f]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},g);break}f\x3d!0}e\x3db;c\x3d!c;g\x3dI(a.h);a\x3dJ(g);g\x3d+!!(g\x26512)-1;for(var h,l,m\x3d0;m\x3cd.length;m++)if(l\x3dd[m],l\x3ca){l+\x3dg;var k\x3de[l];null\x3d\x3dk?e[l]\x3dc?M:va():c\x26\x26k!\x3d\x3dM\x26\x26ua(k)}else h||(k\x3dvoid 0,e.length\x26\x26K(k\x3de[e.length-1])?h\x3dk:e.push(h\x3d{})),k\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dc?M:va():c\x26\x26k!\x3d\x3dM\x26\x26ua(k)}d\x3db.length;if(!d)return b; var q;if(K(h\x3db[d-1])){a:{var p\x3dh;e\x3d{};c\x3d!1;for(var B in p)a\x3dp[B],Array.isArray(a)\x26\x26a!\x3da\x26\x26(c\x3d!0),null!\x3da?e[B]\x3da:c\x3d!0;if(c){for(var Ta in e){p\x3de;break a}p\x3dnull}}p!\x3dh\x26\x26(q\x3d!0);d--}for(;0\x3cd;d--){h\x3db[d-1];if(null!\x3dh)break;var Ra\x3d!0}if(!q\x26\x26!Ra)return b;var X;f?X\x3db:X\x3dArray.prototype.slice.call(b,0,d);b\x3dX;f\x26\x26(b.length\x3dd);p\x26\x26b.push(p);return b};function Ha(a){this.h\x3dN(a)}ja(Ha,Q);function Ia(a){this.h\x3dN(a)}ja(Ia,Q);function Ja(){var a\x3dt;return a\x3dvoid 0\x3d\x3d\x3da?window:a};/*  SPDX-License-Identifier: Apache-2.0 */ var Ka\x3d/^(?!javascript:)(?:[a-z0-9+.-]+:|[^\x26:\\/?#]*(?:[\\/?#]|$))/i;var T;function La(a,b,c,d){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+c+\x22\x26dim\x3d\x22+d)+e[2]:a}function Ma(a){var b\x3da.currentTarget,c\x3db.querySelector(\x22img[alt]\x22);c\x26\x26(a\x3dU(a,c.offsetLeft,c.offsetTop,c.width,c.height),a\x3dLa(b.href,a.j,a.l,a.i),Ka.test(a)\x26\x26(b.href\x3da))} function V(a,b,c){var d\x3dJa();if(\x22buyer\x22\x3d\x3dc){var e;null\x3d\x3dd||null\x3d\x3d(e\x3dd.fence)||e.reportEvent({eventType:a,eventData:b,destination:[\x22buyer\x22]})}else if(\x22component-seller\x22\x3d\x3dc){var f;null\x3d\x3dd||null\x3d\x3d(f\x3dd.fence)||f.reportEvent({eventType:a,destination:[\x22component-seller\x22]})}} function W(a){var b\x3dnew Ia;P(b,1,a);a\x3dS(T);P(b,4,a);a\x3dS(b);var c,d;null\x3d\x3d(c\x3dJa())||null\x3d\x3d(d\x3dc.fence)||d.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:a,destination:[\x22buyer\x22],once:!0});V(\x22click\x22,S(b),\x22buyer\x22);V(\x22reserved.top_navigation\x22,null,\x22component-seller\x22);V(\x22click\x22,null,\x22component-seller\x22)}function U(a,b,c,d,e){return{j:+Math.round(a.clientX-b),l:+Math.round(a.clientY-c),i:+d+\x22x\x22+ +e,m:void 0}} function Na(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var Oa,Y\x3ddocument.currentScript;Oa\x3d(Y\x3dvoid 0\x3d\x3d\x3dY?null:Y)\x26\x26\x2274\x22\x3d\x3d\x3dY.getAttribute(\x22data-jc\x22)?Y:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dOa)throw Error(\x22JSC not found 74\x22);for(var Pa\x3d{},Qa\x3dOa.attributes,Z\x3dQa.length-1;0\x3c\x3dZ;Z--){var Sa\x3dQa[Z].name;0\x3d\x3d\x3dSa.indexOf(\x22data-jcp-\x22)\x26\x26(Pa[Sa.substring(9)]\x3dQa[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],f\x3da[\x22cc-button\x22],g\x3de?document.getElementById(e):null,h\x3df?document.getElementById(f):null;e\x3d\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22];f\x3dg\x26\x26h;T\x3dnew Ha;if(e){var l\x3df?g:b.querySelector(\x22img[alt]\x22);(f?g:b).addEventListener(\x22mousedown\x22,function(k){var q\x3dU(k,l.offsetLeft,l.offsetTop,l.clientWidth,l.clientHeight);k\x3dq.j;var p\x3dq.l,B\x3dq.i;q\x3dq.m;k\x26\x26O(T,2,null\x3d\x3dk?k:za(k));p\x26\x26O(T, 3,null\x3d\x3dp?p:za(p));B\x26\x26P(T,7,B);q\x26\x26P(T,4,q)});var m\x3da[\x22turtlex-event-ad-signals\x22];h?(h.addEventListener(\x22click\x22,function(){W(m)}),h.addEventListener(\x22auxclick\x22,function(){W(m)})):(b.addEventListener(\x22click\x22,function(){W(m)}),b.addEventListener(\x22auxclick\x22,function(){W(m)}))}else if(b.addEventListener(\x22mousedown\x22,Ma),f\x26\x26g.addEventListener(\x22mousedown\x22,function(k){k\x3dU(k,g.offsetLeft,g.offsetTop,g.clientWidth,g.clientHeight);k\x3dLa(h.href,k.j,k.l,k.i);Ka.test(k)\x26\x26(h.href\x3dk)}),c||d)b.addEventListener(\x22click\x22, function(k){Na(k,d)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Na(k,d)})})(Pa);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:13px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAW4Q9SLacVSU_fTEx3EKbFLELlWi8P2bbQzLNtWjRrMzh-iNyO9EtrMksqC9-iznwEDNS0hgdgJ2APPAduRhbnmCQMkPUbFbyOzYQM6fNc98seDXZqvBZcpRuw8NlKRzmmzeWDDD_GE0U4VaGghWh6jpN9r-wmoLKw6VRxs9ruixLaEKtZXO0ddBuYzCYGiv9tGifVzsbQUP503Ji56ro4U8Lo2oZYwWs8SdTKvnz54no0UMFkHyuTBmYQkAak78EhwK7KZJnn1GL_L85dqUNWGVDB0dPwTsAQ0FO8w_8acMDtQmXMfvKJpq-C2fmCni2aKFcB2woeP-aMIJ5mLiAG-XL-RFCZ57C5-cgcM9txAN0F3g5-vzt2Ulm1DzJJ777I9wz8ynP9DCfPH0Zdk5YKtKRbWFqFrrbgmhtEMiXqTFcn04a7On6TMZxYGgZq4ZtHMT6vpOL_ogO2_nhqw5mF9uioot_PNItP5ACFlZFOOtC_lkIxz4nVCuuJ-UAt1MYD504xJDgQ4BW19w1VzC5ubRnQigGLyn0YEy-8y98NkXseUJLayrTrXzDhKAO5CWxHhWzFcZVIyDg6XFUmx8jKS5mdbaA1FlMF6CT5Q13wW3wECep0NYKiRPlUgwE8_bwYQvDnSlHLDQeEwsRTOf5xpc8etxIsm666LvwYb1eTtFMFHKumKrgqec9SA5S0q0LhW0RfJtnzvHsbOwFRg6xfIJqxKdEgGSYToHvnui306nq15QEHiaNyOoJW7oj71YCQCdCDHOOJM0VrUmmB4HOk3fT8cpO1uuYWHmOPplL2aMyKd1oGQqJKu1DAladO6F9IT976HdAz1uICkCxnDCULn9YswHkNXnPqlG8gftBfzV88mRkj3JKc8vxTNj2b7xFGNUkkuVbvx3y73DJvMVPmJjH8FfVKhlUafVhh_SvIl_7xZ-ZGfc5pCT28cQx_-NxF4KfSJt5GFXPMcg_EyTX-9vRmhGuOdYJvwi7JbiN7qcnNAPG3Ma644qn48P-Q0lXpqDOl_xXFnoVtkqIH9OhdQ0eCzH4PNnKwrXw5E58ssXI6_odCbgxkgvAA-nzIx9doIHJGgJ8P7GA7Lil30y1s8L0CJGT5NpcojQdewcIMMf8Qeub0MVm5uCZPMl1wCrQlt5iCaCztGMDDYPQvFxdgJR-k2o0jSAQRBPq3vwPpC3NP3tjtXcK7uz_FxslbXoRlcXRiudCp7lKVYMZoMAY7ca-LevWb4qddTj1CZn9CqVpkt9n0txgoOjRicah0q5DbB-ekuWM7_7tlpbGrOQc0A_aMO55hmOdDotGRm9jj5V2tV0QduF5WVzqOrd9YTbMxiez1Ifpnn5FMM4dtfNc7W9jJCJlw2Yz2vaX2oF80Rx8myacn8t14q4crccDM1NIHwzIB--qd1falTvXP3RbKtOfhZpqyz2uwZqHHtUcjo5jgAfEF0EIY1yZlBgUOoo52W0MorqY4VkcDznra4bcmErtW3ptcrbFe6j9eN-Mg_Vbu90yhhQy37QPXK9oURfROp9ek7iC1oaYHQDnvrnc4OBKQPSTBID71q_u_KzIokCK09yl42qQtIuBtwv1z8xkTuLYHUnHCl-LiwVdMx3EZ9qhYNQt3YijZWPLpeVO31bLfQ9My0dRDVANJsyuLUGSPo3LZXEUSG6z6xZrycN7KWteFcolylMeiISh1NoUBMHk6mmCNb8adBH9gIJopdoNOKlxlRhidY\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20230920/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20230920\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCq__nIjcRZeq7DIT69gXQhrTgBZH1tbhxip3QrOsRho-KrYUQEAEg0PPQX2CdyeCB6AWgAY68oPUCyAEJqQJAf0VVdWOCPqgDAcgDmwSqBPIBT9BIbv9_4aOvCrDUGTO9KM6FakEQF74LS2cd8jmoDkjCi1vfaL_02ra6LHL1H0sZNxG2-wjdkYG5ViE8KKENwfL9-LJ8N01zq7nupPHuw1dLIr5VVg9rUNl20cSft6swbd8mProbJoPWXr7e8Ktme_P8vbu8rjHX22rWKjdsOUw1K3bCsfqxwy2PJkUoIzlqEO7ii_vD6S6g6OQ08BbrSSEJc5CywJDQYvNaWrqv_bvZuC0Lkali1WXyEPBWBvd71VZ2XLAK-KKnSNesBtll3Ygcd_OlaOAa7li78kpKl-P0NTBnXZYu-LhpXFtrEsVaKODABLKevea1BOAEA4gFofS63UuQBgGgBkyAB9rD34oBiAcBkAcCqAfZtrECqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgHpKOxAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH_56xAqgH35-xAtgHANIIFwgAEAIYGjIBADoHn9CAgICABEi9_cE6gAoBmAsByAsBgAwBqg0CQ07IDQGwE8ej7hTQEwDYEw2IFAXYFAHQFQH4FgGAFwE\\u0026sigh\x3djA2IukH2hc4\\u0026cid\x3dCAQSQgDICaaNfMKfxDvfZGcqtLYnrfxxnXKFkajZJOhUkenJ5iZI3bPhfUYPQmJyAUQr-47PmvUnW5JM7_n2XuMeJpv9ChgB\x26quot;,\x26quot;2K8C_V8Y4icIip3QrOsREKH0ut1LGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTUzNjYwNjk0MTUwMTI2NzZIElgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;此广告有什么问题？\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们将对此广告进行审核，以便改善您在今后的体验。\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们会根据您的反馈审核此网站上的广告。\x26quot;,null,null,null,\x26quot;即将关闭广告：%1$d 秒\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.sojson.com/jscodeconfusion.html%26gl%3DCN%26hl%3Dzh%26ai0%3D\\u0026usg\x3dAOvVaw2sR3gx8b51_ZcdrMruQXA4\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;停止显示此广告\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;此广告有什么问题？\x26quot;,[[\x26quot;对此广告不感兴趣\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;多次看到此广告\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;广告内容不当\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]],[\x26quot;广告遮挡内容\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;广告选择\x26quot;,\x26quot;%1$s 已关闭此广告\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;停止显示此广告\x26quot;,\x26quot;我们尽量不再显示该广告\x26quot;,null,null,null,null,null,null,\x26quot;查看我的 Google 广告设置\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;%1$s 提供的广告\x26quot;,\x26quot;广告设置\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAX9W1tbW251bGwsWzIsMTAsMjJdLG51bGwsbnVsbCxudWxsLFsiODA2MTUiXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCx0cnVlLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW251bGwsIjI5MTQ1OTI2MiJdXSxbbnVsbCwiaHR0cHM6Ly9nb29nbGVhZHMuZy5kb3VibGVjbGljay5uZXQvcGFnZWFkL2ludGVyYWN0aW9uLz9haT1DcV9fbklqY1JaZXE3RElUNjlnWFFoclRnQlpIMXRiaHhpcDNRck9zUmhvLUtyWVVRRUFFZzBQUFFYMkNkeWVDQjZBV2dBWTY4b1BVQ3lBRUpxUUpBZjBWVmRXT0NQcWdEQWNnRG13U3FCUElCVDlCSWJ2OV80YU92Q3JEVUdUTzlLTTZGYWtFUUY3NExTMmNkOGptb0RrakNpMXZmYUxfMDJyYTZMSEwxSDBzWk54RzItd2pka1lHNVZpRThLS0VOd2ZMOS1MSjhOMDF6cTdudXBQSHV3MWRMSXI1VlZnOXJVTmwyMGNTZnQ2c3diZDhtUHJvYkpvUFdYcjdlOEt0bWVfUDh2YnU4cmpIWDIycldLamRzT1V3MUszYkNzZnF4d3kyUEprVW9JemxxRU83aWlfdkQ2UzZnNk9RMDhCYnJTU0VKYzVDeXdKRFFZdk5hV3Jxdl9idlp1QzBMa2FsaTFXWHlFUEJXQnZkNzFWWjJYTEFLLUtLblNOZXNCdGxsM1lnY2RfT2xhT0FhN2xpNzhrcEtsLVAwTlRCblhaWXUtTGhwWEZ0ckVzVmFLT0RBQkxLZXZlYTFCT0FFQTRnRm9mUzYzVXVRQmdHZ0JreUFCOXJEMzRvQmlBY0JrQWNDcUFmWnRyRUNxQWVPemh1b0I1UFlHNmdIN3BheEFxZ0hfcDZ4QXFnSHBLT3hBcWdIMWNrYnFBZW12aHVvQjVvR3FBZnowUnVvQjViWUc2Z0hxcHV4QXFnSGc2MnhBcWdIXzU2eEFxZ0gzNS14QXRnSEFOSUlGd2dBRUFJWUdqSUJBRG9IbjlDQWdJQ0FCRWk5X2NFNmdBb0JtQXNCeUFzQmdBd0JxZzBDUTA3SURRR3dFOGVqN2hUUUV3RFlFdzJJRkFYWUZBSFFGUUg0RmdHQUZ3RVx1MDAyNnNpZ2g9akEySXVrSDJoYzRcdTAwMjZjaWQ9Q0FRU1FnRElDYWFOZk1LZnhEdmZaR2NxdExZbnJmeHhuWEtGa2FqWkpPaFVrZW5KNWlaSTNiUGhmVVlQUW1KeUFVUXItNDdQbXZVblc1Sk03X24yWHVNZUpwdjlDaGdCIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZGlzcGxheWFkcy1mb3JtYXRzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hZHMvcHJldmlldy9jb250ZW50LmpzP2NsaWVudD13dGFcdTAwMjZvYmZ1c2NhdGVkQ3VzdG9tZXJJZD02NzY3ODIzNDM4XHUwMDI2Y3JlYXRpdmVJZD02NjM2ODE1MjA3MjJcdTAwMjZ2ZXJzaW9uSWQ9MFx1MDAyNmFkR3JvdXBDcmVhdGl2ZUlkPTYxMjkzMTczNTE3OFx1MDAyNnNpZz1BQ2lWQl96bUdUb2lQT2lvdWI0UTNhQy1rV1lWeW04ZFlnIl0sbnVsbCxudWxsLDIsIjJLOENfVjhZNGljSWlwM1FyT3NSRUtIMHV0MUxHTDZoX1lvQkloTmhlblZ5WlM1dGFXTnliM052Wm5RdVkyOXRNZ2dJQlJNWWk3VVNGRUlYWTJFdGNIVmlMVFV6TmpZd05qazBNVFV3TVRJMk56WklFbGdBY0FFIiwiMjAzMjg2NTk0ODkiXV1dLFtudWxsLG51bGwsMSwxLDFdLFtudWxsLG51bGwsIkNOIl1daArqAqIZnEclRvXUqVIVtdBAZyDxYjF5Y7TMam9YqeYAkNi9tHytqQ3fnHEtVl1p0yQs0m44rc9m17R3rKgj-06-Yr0dDpct-ytrzGzupBs94GFeneJd-6aYrNo43J1Y436a5Gpq2S8hat-EMypLv_Q1EiKSs5sUWLbUMP9Ibp2cAJz1R6Wj6Mui1RiquiHff53PyNHvfWvnbpN2S0iXkodba0yYpnbB6SmVjzs6Fs66jpGG3s9_2gnLMqrtn5CKCoY8wYXcPT0e1ntN0pL8ilFIpeyF65ttWtJtTFuL8WjxoqwXMXbv6PIvQN-gr-nOjNYvVNf5uoQjFWB34dhZkA,M-07pFbvXWhhAURU4o6QJA\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAW4Q9SLacVSU_fTEx3EKbFLELlWi8P2bbQzLNtWjRrMzh-iNyO9EtrMksqC9-iznwEDNS0hgdgJ2APPAduRhbnmCQMkPUbFbyOzYQM6fNc98seDXZqvBZcpRuw8NlKRzmmzeWDDD_GE0U4VaGghWh6jpN9r-wmoLKw6VRxs9ruixLaEKtZXO0ddBuYzCYGiv9tGifVzsbQUP503Ji56ro4U8Lo2oZYwWs8SdTKvnz54no0UMFkHyuTBmYQkAak78EhwK7KZJnn1GL_L85dqUNWGVDB0dPwTsAQ0FO8w_8acMDtQmXMfvKJpq-C2fmCni2aKFcB2woeP-aMIJ5mLiAG-XL-RFCZ57C5-cgcM9txAN0F3g5-vzt2Ulm1DzJJ777I9wz8ynP9DCfPH0Zdk5YKtKRbWFqFrrbgmhtEMiXqTFcn04a7On6TMZxYGgZq4ZtHMT6vpOL_ogO2_nhqw5mF9uioot_PNItP5ACFlZFOOtC_lkIxz4nVCuuJ-UAt1MYD504xJDgQ4BW19w1VzC5ubRnQigGLyn0YEy-8y98NkXseUJLayrTrXzDhKAO5CWxHhWzFcZVIyDg6XFUmx8jKS5mdbaA1FlMF6CT5Q13wW3wECep0NYKiRPlUgwE8_bwYQvDnSlHLDQeEwsRTOf5xpc8etxIsm666LvwYb1eTtFMFHKumKrgqec9SA5S0q0LhW0RfJtnzvHsbOwFRg6xfIJqxKdEgGSYToHvnui306nq15QEHiaNyOoJW7oj71YCQCdCDHOOJM0VrUmmB4HOk3fT8cpO1uuYWHmOPplL2aMyKd1oGQqJKu1DAladO6F9IT976HdAz1uICkCxnDCULn9YswHkNXnPqlG8gftBfzV88mRkj3JKc8vxTNj2b7xFGNUkkuVbvx3y73DJvMVPmJjH8FfVKhlUafVhh_SvIl_7xZ-ZGfc5pCT28cQx_-NxF4KfSJt5GFXPMcg_EyTX-9vRmhGuOdYJvwi7JbiN7qcnNAPG3Ma644qn48P-Q0lXpqDOl_xXFnoVtkqIH9OhdQ0eCzH4PNnKwrXw5E58ssXI6_odCbgxkgvAA-nzIx9doIHJGgJ8P7GA7Lil30y1s8L0CJGT5NpcojQdewcIMMf8Qeub0MVm5uCZPMl1wCrQlt5iCaCztGMDDYPQvFxdgJR-k2o0jSAQRBPq3vwPpC3NP3tjtXcK7uz_FxslbXoRlcXRiudCp7lKVYMZoMAY7ca-LevWb4qddTj1CZn9CqVpkt9n0txgoOjRicah0q5DbB-ekuWM7_7tlpbGrOQc0A_aMO55hmOdDotGRm9jj5V2tV0QduF5WVzqOrd9YTbMxiez1Ifpnn5FMM4dtfNc7W9jJCJlw2Yz2vaX2oF80Rx8myacn8t14q4crccDM1NIHwzIB--qd1falTvXP3RbKtOfhZpqyz2uwZqHHtUcjo5jgAfEF0EIY1yZlBgUOoo52W0MorqY4VkcDznra4bcmErtW3ptcrbFe6j9eN-Mg_Vbu90yhhQy37QPXK9oURfROp9ek7iC1oaYHQDnvrnc4OBKQPSTBID71q_u_KzIokCK09yl42qQtIuBtwv1z8xkTuLYHUnHCl-LiwVdMx3EZ9qhYNQt3YijZWPLpeVO31bLfQ9My0dRDVANJsyuLUGSPo3LZXEUSG6z6xZrycN7KWteFcolylMeiISh1NoUBMHk6mmCNb8adBH9gIJopdoNOKlxlRhidY\x26quot;,\x26quot;为什么显示此广告？\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],250,300,0,null,null,0,null,null,\x26quot;right\x26quot;,0,null,\x26quot;r20230920/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');

if (!window.mraid) {
  document.write('\x3c/div\x3e');
}

(function () {
  (function () {
    var s = cc11001100_hook("s", document.createElement('script'), "var-init");
    s.setAttribute('data-jc', '86');
    s.src = cc11001100_hook("s.src", 'https://static.googleadsserving.cn/pagead/js/r20230920/r20110914/elements/html/omrhp.js', "assign");
    s.setAttribute('data-jc-version', 'r20230920');
    var ss = cc11001100_hook("ss", document.getElementsByTagName('script')[0], "var-init");

    if (ss && ss.parentNode) {
      ss.parentNode.insertBefore(s, ss);
    }
  })();

  window.dicnf = cc11001100_hook("window.dicnf", {
    eavp: cc11001100_hook("eavp", true, "object-key-init"),
    ebrp: cc11001100_hook("ebrp", true, "object-key-init"),
    apfa: cc11001100_hook("apfa", true, "object-key-init"),
    atsb: cc11001100_hook("atsb", true, "object-key-init"),
    bvst: cc11001100_hook("bvst", 'r20230920', "object-key-init"),
    eeid: cc11001100_hook("eeid", 'JjcRZdqfMquFid4Pn_q7-AM', "object-key-init"),
    aunb: cc11001100_hook("aunb", true, "object-key-init"),
    adsg: cc11001100_hook("adsg", '', "object-key-init"),
    uffp: cc11001100_hook("uffp", true, "object-key-init"),
    espa: cc11001100_hook("espa", true, "object-key-init")
  }, "assign");
  (function () {
    function aa(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", 0, "var-init");
      return function () {
        return b < a.length ? {
          done: cc11001100_hook("done", !1, "object-key-init"),
          value: cc11001100_hook("value", a[b++], "object-key-init")
        } : {
          done: cc11001100_hook("done", !0, "object-key-init")
        };
      };
    }

    var ba = cc11001100_hook("ba", "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = cc11001100_hook("a[b]", c.value, "assign");
      return a;
    }, "var-init");

    function ca(a) {
      cc11001100_hook("a", a, "function-parameter");
      a = cc11001100_hook("a", ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], "assign");

      for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; ++b) {
        var c = cc11001100_hook("c", a[b], "var-init");
        if (c && c.Math == Math) return c;
      }

      throw Error("Cannot find global object");
    }

    var da = cc11001100_hook("da", ca(this), "var-init");

    function m(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (b) a: {
        var c = cc11001100_hook("c", da, "var-init");
        a = cc11001100_hook("a", a.split("."), "assign");

        for (var d = cc11001100_hook("d", 0, "var-init"); d < a.length - 1; d++) {
          var e = cc11001100_hook("e", a[d], "var-init");
          if (!(e in c)) break a;
          c = cc11001100_hook("c", c[e], "assign");
        }

        a = cc11001100_hook("a", a[a.length - 1], "assign");
        d = cc11001100_hook("d", c[a], "assign");
        b = cc11001100_hook("b", b(d), "assign");
        b != d && null != b && ba(c, a, {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          value: cc11001100_hook("value", b, "object-key-init")
        });
      }
    }

    function ea(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator], "var-init");
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: cc11001100_hook("next", aa(a), "object-key-init")
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    var fa = cc11001100_hook("fa", "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = cc11001100_hook("c", 1, "var-init"); c < arguments.length; c++) {
        var d = cc11001100_hook("d", arguments[c], "var-init");
        if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = cc11001100_hook("a[e]", d[e], "assign"));
      }

      return a;
    }, "var-init");
    m("Object.assign", function (a) {
      return a || fa;
    });
    var ha = cc11001100_hook("ha", "function" == typeof Object.create ? Object.create : function (a) {
      function b() {}

      b.prototype = cc11001100_hook("b.prototype", a, "assign");
      return new b();
    }, "var-init"),
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = cc11001100_hook("ia", Object.setPrototypeOf, "assign");else {
      var ja;

      a: {
        var ka = cc11001100_hook("ka", {
          a: cc11001100_hook("a", !0, "object-key-init")
        }, "var-init"),
            la = cc11001100_hook("la", {}, "var-init");

        try {
          la.__proto__ = cc11001100_hook("la.__proto__", ka, "assign");
          ja = cc11001100_hook("ja", la.a, "assign");
          break a;
        } catch (a) {}

        ja = cc11001100_hook("ja", !1, "assign");
      }

      ia = cc11001100_hook("ia", ja ? function (a, b) {
        a.__proto__ = cc11001100_hook("a.__proto__", b, "assign");
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null, "assign");
    }
    var oa = cc11001100_hook("oa", ia, "var-init");

    function r(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      a.prototype = cc11001100_hook("a.prototype", ha(b.prototype), "assign");
      a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign");
      if (oa) oa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = cc11001100_hook("d", Object.getOwnPropertyDescriptor(b, c), "var-init");
        d && Object.defineProperty(a, c, d);
      } else a[c] = cc11001100_hook("a[c]", b[c], "assign");
      a.ca = cc11001100_hook("a.ca", b.prototype, "assign");
    }

    function pa() {
      for (var a = cc11001100_hook("a", Number(this), "var-init"), b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", a, "var-init"); c < arguments.length; c++) b[c - a] = cc11001100_hook("b[c - a]", arguments[c], "assign");

      return b;
    }

    m("Object.is", function (a) {
      return a ? a : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    m("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        var d = cc11001100_hook("d", this, "var-init");
        d instanceof String && (d = cc11001100_hook("d", String(d), "assign"));
        var e = cc11001100_hook("e", d.length, "var-init");
        c = cc11001100_hook("c", c || 0, "assign");

        for (0 > c && (c = cc11001100_hook("c", Math.max(c + e, 0), "assign")); c < e; c++) {
          var f = cc11001100_hook("f", d[c], "var-init");
          if (f === b || Object.is(f, b)) return !0;
        }

        return !1;
      };
    });
    m("String.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b, c || 0);
      };
    });
    m("globalThis", function (a) {
      return a || da;
    });
    /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */

    var x = cc11001100_hook("x", this || self, "var-init");
    var qa, z;

    a: {
      for (var ra = cc11001100_hook("ra", ["CLOSURE_FLAGS"], "var-init"), sa = cc11001100_hook("sa", x, "var-init"), ta = cc11001100_hook("ta", 0, "var-init"); ta < ra.length; ta++) if (sa = cc11001100_hook("sa", sa[ra[ta]], "assign"), null == sa) {
        z = cc11001100_hook("z", null, "assign");
        break a;
      }

      z = cc11001100_hook("z", sa, "assign");
    }

    var ua = cc11001100_hook("ua", z && z[610401301], "var-init");
    qa = cc11001100_hook("qa", null != ua ? ua : !1, "assign");
    var A,
        va = cc11001100_hook("va", x.navigator, "var-init");
    A = cc11001100_hook("A", va ? va.userAgentData || null : null, "assign");

    function wa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return qa ? A ? A.brands.some(function (b) {
        return (b = cc11001100_hook("b", b.brand, "assign")) && -1 != b.indexOf(a);
      }) : !1 : !1;
    }

    function B(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;

      a: {
        if (b = cc11001100_hook("b", x.navigator, "assign")) if (b = cc11001100_hook("b", b.userAgent, "assign")) break a;
        b = cc11001100_hook("b", "", "assign");
      }

      return -1 != b.indexOf(a);
    }

    ;

    function E() {
      return qa ? !!A && 0 < A.brands.length : !1;
    }

    function xa() {
      return E() ? wa("Chromium") : (B("Chrome") || B("CriOS")) && !(E() ? 0 : B("Edge")) || B("Silk");
    }

    ;
    var ya = cc11001100_hook("ya", Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

      for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length; c++) if (c in a && a[c] === b) return c;

      return -1;
    }, "var-init"),
        za = cc11001100_hook("za", Array.prototype.forEach ? function (a, b) {
      Array.prototype.forEach.call(a, b, void 0);
    } : function (a, b) {
      for (var c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c; e++) e in d && b.call(void 0, d[e], e, a);
    }, "var-init");

    function Aa(a) {
      cc11001100_hook("a", a, "function-parameter");
      Aa[" "](a);
      return a;
    }

    Aa[" "] = cc11001100_hook("Aa[\" \"]", function () {}, "assign");
    var Ba = cc11001100_hook("Ba", E() ? !1 : B("Trident") || B("MSIE"), "var-init");
    !B("Android") || xa();
    xa();
    B("Safari") && (xa() || (E() ? 0 : B("Coast")) || (E() ? 0 : B("Opera")) || (E() ? 0 : B("Edge")) || (E() ? wa("Microsoft Edge") : B("Edg/")) || E() && wa("Opera"));
    var Ca = cc11001100_hook("Ca", {}, "var-init"),
        Da = cc11001100_hook("Da", null, "var-init");

    function Ea(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      void 0 === b && (b = cc11001100_hook("b", 0, "assign"));

      if (!Da) {
        Da = cc11001100_hook("Da", {}, "assign");

        for (var c = cc11001100_hook("c", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), "var-init"), d = cc11001100_hook("d", ["+/=", "+/", "-_=", "-_.", "-_"], "var-init"), e = cc11001100_hook("e", 0, "var-init"); 5 > e; e++) {
          var f = cc11001100_hook("f", c.concat(d[e].split("")), "var-init");
          Ca[e] = cc11001100_hook("Ca[e]", f, "assign");

          for (var g = cc11001100_hook("g", 0, "var-init"); g < f.length; g++) {
            var h = cc11001100_hook("h", f[g], "var-init");
            void 0 === Da[h] && (Da[h] = cc11001100_hook("Da[h]", g, "assign"));
          }
        }
      }

      b = cc11001100_hook("b", Ca[b], "assign");
      c = cc11001100_hook("c", Array(Math.floor(a.length / 3)), "assign");
      d = cc11001100_hook("d", b[64] || "", "assign");

      for (e = cc11001100_hook("e", f = cc11001100_hook("f", 0, "assign"), "assign"); f < a.length - 2; f += cc11001100_hook("f", 3, "assign")) {
        var k = cc11001100_hook("k", a[f], "var-init"),
            l = cc11001100_hook("l", a[f + 1], "var-init");
        h = cc11001100_hook("h", a[f + 2], "assign");
        g = cc11001100_hook("g", b[k >> 2], "assign");
        k = cc11001100_hook("k", b[(k & 3) << 4 | l >> 4], "assign");
        l = cc11001100_hook("l", b[(l & 15) << 2 | h >> 6], "assign");
        h = cc11001100_hook("h", b[h & 63], "assign");
        c[e++] = cc11001100_hook("c[e++]", g + k + l + h, "assign");
      }

      g = cc11001100_hook("g", 0, "assign");
      h = cc11001100_hook("h", d, "assign");

      switch (a.length - f) {
        case 2:
          g = cc11001100_hook("g", a[f + 1], "assign"), h = cc11001100_hook("h", b[(g & 15) << 2] || d, "assign");

        case 1:
          a = cc11001100_hook("a", a[f], "assign"), c[e] = cc11001100_hook("c[e]", b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d, "assign");
      }

      return c.join("");
    }

    ;
    var Fa = cc11001100_hook("Fa", "undefined" !== typeof Uint8Array, "var-init"),
        Ga = cc11001100_hook("Ga", !Ba && "function" === typeof btoa, "var-init");
    var F = cc11001100_hook("F", "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0, "var-init"),
        Ha = cc11001100_hook("Ha", F ? function (a, b) {
      a[F] |= cc11001100_hook("a[F]", b, "assign");
    } : function (a, b) {
      void 0 !== a.s ? a.s |= cc11001100_hook("a.s", b, "assign") : Object.defineProperties(a, {
        s: {
          value: cc11001100_hook("value", b, "object-key-init"),
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
        }
      });
    }, "var-init");

    function Ia(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", G(a), "var-init");
      1 !== (b & 1) && (Object.isFrozen(a) && (a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign")), H(a, b | 1));
    }

    var G = cc11001100_hook("G", F ? function (a) {
      return a[F] | 0;
    } : function (a) {
      return a.s | 0;
    }, "var-init"),
        Ja = cc11001100_hook("Ja", F ? function (a) {
      return a[F];
    } : function (a) {
      return a.s;
    }, "var-init"),
        H = cc11001100_hook("H", F ? function (a, b) {
      a[F] = cc11001100_hook("a[F]", b, "assign");
    } : function (a, b) {
      void 0 !== a.s ? a.s = cc11001100_hook("a.s", b, "assign") : Object.defineProperties(a, {
        s: {
          value: cc11001100_hook("value", b, "object-key-init"),
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          writable: cc11001100_hook("writable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
        }
      });
    }, "var-init");

    function Ka() {
      var a = cc11001100_hook("a", [], "var-init");
      Ha(a, 1);
      return a;
    }

    function La(a) {
      cc11001100_hook("a", a, "function-parameter");
      a = cc11001100_hook("a", a >> 11 & 1023, "assign");
      return 0 === a ? 536870912 : a;
    }

    ;
    var Ma = cc11001100_hook("Ma", {}, "var-init");

    function J(a) {
      cc11001100_hook("a", a, "function-parameter");
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    }

    var Na,
        K,
        Oa = cc11001100_hook("Oa", [], "var-init");
    H(Oa, 39);
    K = cc11001100_hook("K", Object.freeze(Oa), "assign");

    function Pa(a) {
      cc11001100_hook("a", a, "function-parameter");

      if ("boolean" !== typeof a) {
        var b = cc11001100_hook("b", typeof a, "var-init");
        throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
      }

      return !!a;
    }

    ;
    var Qa;

    function Ra(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      null == a && (a = cc11001100_hook("a", Qa, "assign"));
      Qa = cc11001100_hook("Qa", void 0, "assign");

      if (null == a) {
        var d = cc11001100_hook("d", 96, "var-init");
        c ? (a = cc11001100_hook("a", [c], "assign"), d |= cc11001100_hook("d", 512, "assign")) : a = cc11001100_hook("a", [], "assign");
        b && (d = cc11001100_hook("d", d & -2095105 | (b & 1023) << 11, "assign"));
      } else {
        if (!Array.isArray(a)) throw Error();
        d = cc11001100_hook("d", G(a), "assign");
        if (d & 64) return a;
        d |= cc11001100_hook("d", 64, "assign");
        if (c && (d |= cc11001100_hook("d", 512, "assign"), c !== a[0])) throw Error();

        a: {
          c = cc11001100_hook("c", a, "assign");
          var e = cc11001100_hook("e", c.length, "var-init");

          if (e) {
            var f = cc11001100_hook("f", e - 1, "var-init"),
                g = cc11001100_hook("g", c[f], "var-init");

            if (J(g)) {
              d |= cc11001100_hook("d", 256, "assign");
              b = cc11001100_hook("b", +!!(d & 512) - 1, "assign");
              e = cc11001100_hook("e", f - b, "assign");
              1024 <= e && (Sa(c, b, g), e = cc11001100_hook("e", 1023, "assign"));
              d = cc11001100_hook("d", d & -2095105 | (e & 1023) << 11, "assign");
              break a;
            }
          }

          b && (g = cc11001100_hook("g", +!!(d & 512) - 1, "assign"), b = cc11001100_hook("b", Math.max(b, e - g), "assign"), 1024 < b && (Sa(c, g, {}), d |= cc11001100_hook("d", 256, "assign"), b = cc11001100_hook("b", 1023, "assign")), d = cc11001100_hook("d", d & -2095105 | (b & 1023) << 11, "assign"));
        }
      }

      H(a, d);
      return a;
    }

    function Sa(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");

      for (var d = cc11001100_hook("d", 1023 + b, "var-init"), e = cc11001100_hook("e", a.length, "var-init"), f = cc11001100_hook("f", d, "var-init"); f < e; f++) {
        var g = cc11001100_hook("g", a[f], "var-init");
        null != g && g !== c && (c[f - b] = cc11001100_hook("c[f - b]", g, "assign"));
      }

      a.length = cc11001100_hook("a.length", d + 1, "assign");
      a[d] = cc11001100_hook("a[d]", c, "assign");
    }

    ;

    function Ta(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return Ua(b);
    }

    function Ua(a) {
      cc11001100_hook("a", a, "function-parameter");

      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);

        case "boolean":
          return a ? 1 : 0;

        case "object":
          if (a && !Array.isArray(a) && Fa && null != a && a instanceof Uint8Array) {
            if (Ga) {
              for (var b = cc11001100_hook("b", "", "var-init"), c = cc11001100_hook("c", 0, "var-init"), d = cc11001100_hook("d", a.length - 10240, "var-init"); c < d;) b += cc11001100_hook("b", String.fromCharCode.apply(null, a.subarray(c, c += cc11001100_hook("c", 10240, "assign"))), "assign");

              b += cc11001100_hook("b", String.fromCharCode.apply(null, c ? a.subarray(c) : a), "assign");
              a = cc11001100_hook("a", btoa(b), "assign");
            } else a = cc11001100_hook("a", Ea(a), "assign");

            return a;
          }

      }

      return a;
    }

    ;

    function Va(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");

      if (null != a) {
        if (Array.isArray(a)) a = cc11001100_hook("a", e && 0 == a.length && G(a) & 1 ? void 0 : f && G(a) & 2 ? a : Wa(a, b, c, void 0 !== d, e, f), "assign");else if (J(a)) {
          var g = cc11001100_hook("g", {}, "var-init"),
              h;

          for (h in a) g[h] = cc11001100_hook("g[h]", Va(a[h], b, c, d, e, f), "assign");

          a = cc11001100_hook("a", g, "assign");
        } else a = cc11001100_hook("a", b(a, d), "assign");
        return a;
      }
    }

    function Wa(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      var g = cc11001100_hook("g", d || c ? G(a) : 0, "var-init");
      d = cc11001100_hook("d", d ? !!(g & 32) : void 0, "assign");
      a = cc11001100_hook("a", Array.prototype.slice.call(a), "assign");

      for (var h = cc11001100_hook("h", 0, "var-init"); h < a.length; h++) a[h] = cc11001100_hook("a[h]", Va(a[h], b, c, d, e, f), "assign");

      c && c(g, a);
      return a;
    }

    function Xa(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.aa === Ma ? a.toJSON() : Ua(a);
    }

    ;

    function Ya(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var d = cc11001100_hook("d", a.l, "var-init"),
          e = cc11001100_hook("e", Ja(d), "var-init");
      if (e & 2) throw Error();
      Za(d, e, b, c);
      return a;
    }

    function Za(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      var e = cc11001100_hook("e", La(b), "var-init");

      if (c >= e) {
        var f = cc11001100_hook("f", b, "var-init");
        if (b & 256) e = cc11001100_hook("e", a[a.length - 1], "assign");else {
          if (null == d) return;
          e = cc11001100_hook("e", a[e + (+!!(b & 512) - 1)] = cc11001100_hook("a[e + (+!!(b & 512) - 1)]", {}, "assign"), "assign");
          f |= cc11001100_hook("f", 256, "assign");
        }
        e[c] = cc11001100_hook("e[c]", d, "assign");
        f !== b && H(a, f);
      } else a[c + (+!!(b & 512) - 1)] = cc11001100_hook("a[c + (+!!(b & 512) - 1)]", d, "assign"), b & 256 && (a = cc11001100_hook("a", a[a.length - 1], "assign"), c in a && delete a[c]);
    }

    function L(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      if (null != c && "string" !== typeof c) throw Error();
      return Ya(a, b, c);
    }

    ;

    function N(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      this.l = cc11001100_hook("this.l", Ra(a, b, c), "assign");
    }

    N.prototype.toJSON = cc11001100_hook("N.prototype.toJSON", function () {
      if (Na) var a = cc11001100_hook("a", $a(this, this.l, !1), "var-init");else a = cc11001100_hook("a", Wa(this.l, Xa, void 0, void 0, !1, !1), "assign"), a = cc11001100_hook("a", $a(this, a, !0), "assign");
      return a;
    }, "assign");

    function ab(a) {
      cc11001100_hook("a", a, "function-parameter");
      Na = cc11001100_hook("Na", !0, "assign");

      try {
        return JSON.stringify(a.toJSON(), Ta);
      } finally {
        Na = cc11001100_hook("Na", !1, "assign");
      }
    }

    N.prototype.aa = cc11001100_hook("N.prototype.aa", Ma, "assign");
    N.prototype.toString = cc11001100_hook("N.prototype.toString", function () {
      return $a(this, this.l, !1).toString();
    }, "assign");

    function $a(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      var d = cc11001100_hook("d", a.constructor.ba, "var-init"),
          e = cc11001100_hook("e", La(Ja(c ? a.l : b)), "var-init"),
          f = cc11001100_hook("f", !1, "var-init");

      if (d) {
        if (!c) {
          b = cc11001100_hook("b", Array.prototype.slice.call(b), "assign");
          var g;
          if (b.length && J(g = cc11001100_hook("g", b[b.length - 1], "assign"))) for (f = cc11001100_hook("f", 0, "assign"); f < d.length; f++) if (d[f] >= e) {
            Object.assign(b[b.length - 1] = cc11001100_hook("b[b.length - 1]", {}, "assign"), g);
            break;
          }
          f = cc11001100_hook("f", !0, "assign");
        }

        e = cc11001100_hook("e", b, "assign");
        c = cc11001100_hook("c", !c, "assign");
        g = cc11001100_hook("g", Ja(a.l), "assign");
        a = cc11001100_hook("a", La(g), "assign");
        g = cc11001100_hook("g", +!!(g & 512) - 1, "assign");

        for (var h, k, l = cc11001100_hook("l", 0, "var-init"); l < d.length; l++) if (k = cc11001100_hook("k", d[l], "assign"), k < a) {
          k += cc11001100_hook("k", g, "assign");
          var n = cc11001100_hook("n", e[k], "var-init");
          null == n ? e[k] = cc11001100_hook("e[k]", c ? K : Ka(), "assign") : c && n !== K && Ia(n);
        } else h || (n = cc11001100_hook("n", void 0, "assign"), e.length && J(n = cc11001100_hook("n", e[e.length - 1], "assign")) ? h = cc11001100_hook("h", n, "assign") : e.push(h = cc11001100_hook("h", {}, "assign"))), n = cc11001100_hook("n", h[k], "assign"), null == h[k] ? h[k] = cc11001100_hook("h[k]", c ? K : Ka(), "assign") : c && n !== K && Ia(n);
      }

      d = cc11001100_hook("d", b.length, "assign");
      if (!d) return b;
      var p;

      if (J(h = cc11001100_hook("h", b[d - 1], "assign"))) {
        a: {
          var q = cc11001100_hook("q", h, "var-init");
          e = cc11001100_hook("e", {}, "assign");
          c = cc11001100_hook("c", !1, "assign");

          for (var v in q) a = cc11001100_hook("a", q[v], "assign"), Array.isArray(a) && a != a && (c = cc11001100_hook("c", !0, "assign")), null != a ? e[v] = cc11001100_hook("e[v]", a, "assign") : c = cc11001100_hook("c", !0, "assign");

          if (c) {
            for (var u in e) {
              q = cc11001100_hook("q", e, "assign");
              break a;
            }

            q = cc11001100_hook("q", null, "assign");
          }
        }

        q != h && (p = cc11001100_hook("p", !0, "assign"));
        d--;
      }

      for (; 0 < d; d--) {
        h = cc11001100_hook("h", b[d - 1], "assign");
        if (null != h) break;
        var y = cc11001100_hook("y", !0, "var-init");
      }

      if (!p && !y) return b;
      var w;
      f ? w = cc11001100_hook("w", b, "assign") : w = cc11001100_hook("w", Array.prototype.slice.call(b, 0, d), "assign");
      b = cc11001100_hook("b", w, "assign");
      f && (b.length = cc11001100_hook("b.length", d, "assign"));
      q && b.push(q);
      return b;
    }

    ;

    function bb(a) {
      cc11001100_hook("a", a, "function-parameter");
      this.l = cc11001100_hook("this.l", Ra(a), "assign");
    }

    r(bb, N);

    function cb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.key = cc11001100_hook("this.key", a, "assign");
      this.defaultValue = cc11001100_hook("this.defaultValue", void 0 === b ? !1 : b, "assign");
      this.valueType = cc11001100_hook("this.valueType", "boolean", "assign");
    }

    ;
    var db = cc11001100_hook("db", new cb("100000"), "var-init"),
        eb = cc11001100_hook("eb", new cb("45357156", !0), "var-init"),
        fb = cc11001100_hook("fb", new cb("45350890"), "var-init"),
        gb = cc11001100_hook("gb", new cb("45414892"), "var-init");
    var hb = cc11001100_hook("hb", ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="], "var-init");

    function ib(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return "&adurl=" == a.substring(a.length - 7) ? a.substring(0, a.length - 7) + b + "&adurl=" : a + b;
    }

    ;

    function O(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a = cc11001100_hook("a", void 0 === a ? window : a, "assign");
    }

    ;
    var P = cc11001100_hook("P", x.dicnf || {}, "var-init");

    function jb(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", !1, "var-init"),
          c;
      return function () {
        b || (c = cc11001100_hook("c", a(), "assign"), b = cc11001100_hook("b", !0, "assign"));
        return c;
      };
    }

    ;

    function kb(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      a.addEventListener && a.addEventListener(b, c, !1);
    }

    function lb(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }

    ;
    var mb = cc11001100_hook("mb", RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), "var-init");

    function nb(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");

      for (var e = cc11001100_hook("e", c.length, "var-init"); 0 <= (b = cc11001100_hook("b", a.indexOf(c, b), "assign")) && b < d;) {
        var f = cc11001100_hook("f", a.charCodeAt(b - 1), "var-init");
        if (38 == f || 63 == f) if (f = cc11001100_hook("f", a.charCodeAt(b + e), "assign"), !f || 61 == f || 38 == f || 35 == f) return b;
        b += cc11001100_hook("b", e + 1, "assign");
      }

      return -1;
    }

    var ob = cc11001100_hook("ob", /#|$/, "var-init"),
        pb = cc11001100_hook("pb", /[?&]($|#)/, "var-init");

    function qb(a) {
      cc11001100_hook("a", a, "function-parameter");

      try {
        var b;
        if (b = cc11001100_hook("b", !!a && null != a.location.href, "assign")) a: {
          try {
            Aa(a.foo);
            b = cc11001100_hook("b", !0, "assign");
            break a;
          } catch (c) {}

          b = cc11001100_hook("b", !1, "assign");
        }
        return b;
      } catch (c) {
        return !1;
      }
    }

    function rb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      b = cc11001100_hook("b", void 0 === b ? !1 : b, "assign");
      var c = cc11001100_hook("c", void 0 === c ? x : c, "var-init");

      for (var d = cc11001100_hook("d", 0, "var-init"); c && 40 > d++ && (!b && !qb(c) || !a(c));) a: {
        try {
          var e = cc11001100_hook("e", c.parent, "var-init");

          if (e && e != c) {
            c = cc11001100_hook("c", e, "assign");
            break a;
          }
        } catch (f) {}

        c = cc11001100_hook("c", null, "assign");
      }
    }

    function sb() {
      if (!globalThis.crypto) return Math.random();

      try {
        var a = cc11001100_hook("a", new Uint32Array(1), "var-init");
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    }

    function tb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    }

    var ub = cc11001100_hook("ub", [], "var-init");

    function vb() {
      var a = cc11001100_hook("a", ub, "var-init");
      ub = cc11001100_hook("ub", [], "assign");
      a = cc11001100_hook("a", ea(a), "assign");

      for (var b = cc11001100_hook("b", a.next(), "var-init"); !b.done; b = cc11001100_hook("b", a.next(), "assign")) {
        b = cc11001100_hook("b", b.value, "assign");

        try {
          b();
        } catch (c) {}
      }
    }

    function wb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      "complete" === a.readyState || "interactive" === a.readyState ? (ub.push(b), 1 == ub.length && (window.Promise ? Promise.resolve().then(vb) : window.setImmediate ? setImmediate(vb) : setTimeout(vb, 0))) : a.addEventListener("DOMContentLoaded", b);
    }

    function xb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      b = cc11001100_hook("b", void 0 === b ? document : b, "assign");
      return b.createElement(String(a).toLowerCase());
    }

    ;

    function Q(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      yb(x, a, void 0 === b ? null : b, !1, void 0 === c ? !1 : c, void 0 === d ? !1 : d);
    }

    function yb(a, b, c, d, e, f) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      f = cc11001100_hook("f", void 0 === f ? !1 : f, "assign");
      a.google_image_requests || (a.google_image_requests = cc11001100_hook("a.google_image_requests", [], "assign"));
      var g = cc11001100_hook("g", xb("IMG", a.document), "var-init");

      if (c || e) {
        var h = function (k) {
          c && c(k);

          if (e) {
            k = cc11001100_hook("k", a.google_image_requests, "assign");
            var l = cc11001100_hook("l", ya(k, g), "var-init");
            0 <= l && Array.prototype.splice.call(k, l, 1);
          }

          lb(g, "load", h);
          lb(g, "error", h);
        };

        kb(g, "load", h);
        kb(g, "error", h);
      }

      d && (g.referrerPolicy = cc11001100_hook("g.referrerPolicy", "no-referrer", "assign"));
      f && (g.attributionSrc = cc11001100_hook("g.attributionSrc", "", "assign"));
      g.src = cc11001100_hook("g.src", b, "assign");
      a.google_image_requests.push(g);
    }

    var zb = cc11001100_hook("zb", jb(function () {
      return "referrerPolicy" in xb("IMG");
    }), "var-init");

    function Ab() {
      this.g = cc11001100_hook("this.g", {}, "assign");
    }

    function R(a) {
      cc11001100_hook("a", a, "function-parameter");
      Bb || (Bb = cc11001100_hook("Bb", new Cb(), "assign"));
      var b = cc11001100_hook("b", Bb.g[a.key], "var-init");

      if ("proto" === a.valueType) {
        try {
          var c = cc11001100_hook("c", JSON.parse(b), "var-init");
          if (Array.isArray(c)) return c;
        } catch (d) {}

        return a.defaultValue;
      }

      return typeof b === typeof a.defaultValue ? b : a.defaultValue;
    }

    ;

    function Cb() {
      this.g = cc11001100_hook("this.g", {}, "assign");
      var a = cc11001100_hook("a", document.currentScript, "var-init");
      a = cc11001100_hook("a", (a = cc11001100_hook("a", (a = cc11001100_hook("a", void 0 === a ? null : a, "assign")) && "0" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="0"]'), "assign")) && a.getAttribute("data-jc-flags") || "", "assign");

      try {
        var b = cc11001100_hook("b", JSON.parse(a)[0], "var-init");
        a = cc11001100_hook("a", "", "assign");

        for (var c = cc11001100_hook("c", 0, "var-init"); c < b.length; c++) a += cc11001100_hook("a", String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10)), "assign");

        this.g = cc11001100_hook("this.g", JSON.parse(a), "assign");
      } catch (d) {}
    }

    var Bb;
    r(Cb, Ab);

    function Db(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", void 0 === c ? {} : c, "var-init");
      this.error = cc11001100_hook("this.error", a, "assign");
      this.context = cc11001100_hook("this.context", b.context, "assign");
      this.msg = cc11001100_hook("this.msg", b.message || "", "assign");
      this.id = cc11001100_hook("this.id", b.id || "jserror", "assign");
      this.meta = cc11001100_hook("this.meta", c, "assign");
    }

    ;
    var Fb = cc11001100_hook("Fb", RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), "var-init");

    function Gb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.g = cc11001100_hook("this.g", a, "assign");
      this.h = cc11001100_hook("this.h", b, "assign");
    }

    function Hb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.url = cc11001100_hook("this.url", a, "assign");
      this.R = cc11001100_hook("this.R", !!b, "assign");
      this.depth = cc11001100_hook("this.depth", null, "assign");
    }

    ;
    var Ib = cc11001100_hook("Ib", null, "var-init");

    function Jb() {
      var a = cc11001100_hook("a", void 0 === a ? x : a, "var-init");
      return (a = cc11001100_hook("a", a.performance, "assign")) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
    }

    function Kb() {
      var a = cc11001100_hook("a", void 0 === a ? x : a, "var-init");
      return (a = cc11001100_hook("a", a.performance, "assign")) && a.now ? a.now() : null;
    }

    ;

    function Lb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", Kb() || Jb(), "var-init");
      this.label = cc11001100_hook("this.label", a, "assign");
      this.type = cc11001100_hook("this.type", b, "assign");
      this.value = cc11001100_hook("this.value", c, "assign");
      this.duration = cc11001100_hook("this.duration", 0, "assign");
      this.taskId = cc11001100_hook("this.taskId", this.slotId = cc11001100_hook("this.slotId", void 0, "assign"), "assign");
      this.uniqueId = cc11001100_hook("this.uniqueId", Math.random(), "assign");
    }

    ;
    var S = cc11001100_hook("S", x.performance, "var-init"),
        Mb = cc11001100_hook("Mb", !!(S && S.mark && S.measure && S.clearMarks), "var-init"),
        T = cc11001100_hook("T", jb(function () {
      var a;

      if (a = cc11001100_hook("a", Mb, "assign")) {
        var b;

        if (null === Ib) {
          Ib = cc11001100_hook("Ib", "", "assign");

          try {
            a = cc11001100_hook("a", "", "assign");

            try {
              a = cc11001100_hook("a", x.top.location.hash, "assign");
            } catch (c) {
              a = cc11001100_hook("a", x.location.hash, "assign");
            }

            a && (Ib = cc11001100_hook("Ib", (b = cc11001100_hook("b", a.match(/\bdeid=([\d,]+)/), "assign")) ? b[1] : "", "assign"));
          } catch (c) {}
        }

        b = cc11001100_hook("b", Ib, "assign");
        a = cc11001100_hook("a", !!b.indexOf && 0 <= b.indexOf("1337"), "assign");
      }

      return a;
    }), "var-init");

    function Nb() {
      var a = cc11001100_hook("a", window, "var-init");
      this.h = cc11001100_hook("this.h", [], "assign");
      this.i = cc11001100_hook("this.i", a || x, "assign");
      var b = cc11001100_hook("b", null, "var-init");
      a && (a.google_js_reporting_queue = cc11001100_hook("a.google_js_reporting_queue", a.google_js_reporting_queue || [], "assign"), this.h = cc11001100_hook("this.h", a.google_js_reporting_queue, "assign"), b = cc11001100_hook("b", a.google_measure_js_timing, "assign"));
      this.g = cc11001100_hook("this.g", T() || (null != b ? b : 1 > Math.random()), "assign");
    }

    function Ob(a) {
      cc11001100_hook("a", a, "function-parameter");
      a && S && T() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
    }

    Nb.prototype.start = cc11001100_hook("Nb.prototype.start", function (a, b) {
      if (!this.g) return null;
      a = cc11001100_hook("a", new Lb(a, b), "assign");
      b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_start", "assign");
      S && T() && S.mark(b);
      return a;
    }, "assign");
    Nb.prototype.end = cc11001100_hook("Nb.prototype.end", function (a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = cc11001100_hook("a.duration", (Kb() || Jb()) - a.value, "assign");
        var b = cc11001100_hook("b", "goog_" + a.label + "_" + a.uniqueId + "_end", "var-init");
        S && T() && S.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    }, "assign");

    function Pb() {
      this.i = cc11001100_hook("this.i", "&", "assign");
      this.h = cc11001100_hook("this.h", {}, "assign");
      this.j = cc11001100_hook("this.j", 0, "assign");
      this.g = cc11001100_hook("this.g", [], "assign");
    }

    function Qb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", {}, "var-init");
      c[a] = cc11001100_hook("c[a]", b, "assign");
      return [c];
    }

    function Rb(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var f = cc11001100_hook("f", [], "var-init");
      tb(a, function (g, h) {
        (g = cc11001100_hook("g", Sb(g, b, c, d, e), "assign")) && f.push(h + "=" + g);
      });
      return f.join(b);
    }

    function Sb(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      if (null == a) return "";
      b = cc11001100_hook("b", b || "&", "assign");
      c = cc11001100_hook("c", c || ",$", "assign");
      "string" == typeof c && (c = cc11001100_hook("c", c.split(""), "assign"));

      if (a instanceof Array) {
        if (d = cc11001100_hook("d", d || 0, "assign"), d < c.length) {
          for (var f = cc11001100_hook("f", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < a.length; g++) f.push(Sb(a[g], b, c, d + 1, e));

          return f.join(c[d]);
        }
      } else if ("object" == typeof a) return e = cc11001100_hook("e", e || 0, "assign"), 2 > e ? encodeURIComponent(Rb(a, b, c, d, e + 1)) : "...";

      return encodeURIComponent(String(a));
    }

    function Tb(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", "https://pagead2.googlesyndication.com" + b, "var-init"),
          d = cc11001100_hook("d", Ub(a) - b.length, "var-init");
      if (0 > d) return "";
      a.g.sort(function (n, p) {
        return n - p;
      });
      b = cc11001100_hook("b", null, "assign");

      for (var e = cc11001100_hook("e", "", "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < a.g.length; f++) for (var g = cc11001100_hook("g", a.g[f], "var-init"), h = cc11001100_hook("h", a.h[g], "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < h.length; k++) {
        if (!d) {
          b = cc11001100_hook("b", null == b ? g : b, "assign");
          break;
        }

        var l = cc11001100_hook("l", Rb(h[k], a.i, ",$"), "var-init");

        if (l) {
          l = cc11001100_hook("l", e + l, "assign");

          if (d >= l.length) {
            d -= cc11001100_hook("d", l.length, "assign");
            c += cc11001100_hook("c", l, "assign");
            e = cc11001100_hook("e", a.i, "assign");
            break;
          }

          b = cc11001100_hook("b", null == b ? g : b, "assign");
        }
      }

      a = cc11001100_hook("a", "", "assign");
      null != b && (a = cc11001100_hook("a", e + "trn=" + b, "assign"));
      return c + a;
    }

    function Ub(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", 1, "var-init"),
          c;

      for (c in a.h) b = cc11001100_hook("b", c.length > b ? c.length : b, "assign");

      return 3997 - b - a.i.length - 1;
    }

    ;

    function Vb(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      this.m = cc11001100_hook("this.m", a, "assign");
      this.o = cc11001100_hook("this.o", b, "assign");
      this.g = cc11001100_hook("this.g", void 0 === c ? null : c, "assign");
      this.h = cc11001100_hook("this.h", null, "assign");
      this.i = cc11001100_hook("this.i", !1, "assign");
      this.A = cc11001100_hook("this.A", this.j, "assign");
    }

    function Wb(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");

      try {
        if (a.g && a.g.g) {
          var e = cc11001100_hook("e", a.g.start(b.toString(), 3), "var-init");
          var f = cc11001100_hook("f", c(), "var-init");
          a.g.end(e);
        } else f = cc11001100_hook("f", c(), "assign");
      } catch (k) {
        c = cc11001100_hook("c", a.o, "assign");

        try {
          Ob(e), c = cc11001100_hook("c", a.A(b, new Db(k, {
            message: cc11001100_hook("message", Xb(k), "object-key-init")
          }), void 0, d), "assign");
        } catch (l) {
          a.j(217, l);
        }

        if (c) {
          var g, h;
          null == (g = cc11001100_hook("g", window.console, "assign")) || null == (h = cc11001100_hook("h", g.error, "assign")) || h.call(g, k);
        } else throw k;
      }

      return f;
    }

    function Yb(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      return function () {
        var f = cc11001100_hook("f", pa.apply(0, arguments), "var-init");
        return Wb(a, b, function () {
          return c.apply(d, f);
        }, e);
      };
    }

    Vb.prototype.j = cc11001100_hook("Vb.prototype.j", function (a, b, c, d, e) {
      e = cc11001100_hook("e", e || "jserror", "assign");

      try {
        var f = cc11001100_hook("f", new Pb(), "var-init");
        f.g.push(1);
        f.h[1] = cc11001100_hook("f.h[1]", Qb("context", a), "assign");
        b.error && b.meta && b.id || (b = cc11001100_hook("b", new Db(b, {
          message: cc11001100_hook("message", Xb(b), "object-key-init")
        }), "assign"));

        if (b.msg) {
          var g = cc11001100_hook("g", b.msg.substring(0, 512), "var-init");
          f.g.push(2);
          f.h[2] = cc11001100_hook("f.h[2]", Qb("msg", g), "assign");
        }

        var h = cc11001100_hook("h", b.meta || {}, "var-init");
        if (this.h) try {
          this.h(h);
        } catch (ma) {}
        if (d) try {
          d(h);
        } catch (ma) {}
        b = cc11001100_hook("b", [h], "assign");
        f.g.push(3);
        f.h[3] = cc11001100_hook("f.h[3]", b, "assign");
        d = cc11001100_hook("d", x, "assign");
        b = cc11001100_hook("b", [], "assign");
        g = cc11001100_hook("g", null, "assign");

        do {
          var k = cc11001100_hook("k", d, "var-init");

          if (qb(k)) {
            var l = cc11001100_hook("l", k.location.href, "var-init");
            g = cc11001100_hook("g", k.document && k.document.referrer || null, "assign");
          } else l = cc11001100_hook("l", g, "assign"), g = cc11001100_hook("g", null, "assign");

          b.push(new Hb(l || ""));

          try {
            d = cc11001100_hook("d", k.parent, "assign");
          } catch (ma) {
            d = cc11001100_hook("d", null, "assign");
          }
        } while (d && k != d);

        l = cc11001100_hook("l", 0, "assign");

        for (var n = cc11001100_hook("n", b.length - 1, "var-init"); l <= n; ++l) b[l].depth = cc11001100_hook("b[l].depth", n - l, "assign");

        k = cc11001100_hook("k", x, "assign");
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1) for (n = cc11001100_hook("n", 1, "assign"); n < b.length; ++n) {
          var p = cc11001100_hook("p", b[n], "var-init");
          p.url || (p.url = cc11001100_hook("p.url", k.location.ancestorOrigins[n - 1] || "", "assign"), p.R = cc11001100_hook("p.R", !0, "assign"));
        }
        var q = cc11001100_hook("q", new Hb(x.location.href, !1), "var-init");
        k = cc11001100_hook("k", null, "assign");
        var v = cc11001100_hook("v", b.length - 1, "var-init");

        for (p = cc11001100_hook("p", v, "assign"); 0 <= p; --p) {
          var u = cc11001100_hook("u", b[p], "var-init");
          !k && Fb.test(u.url) && (k = cc11001100_hook("k", u, "assign"));

          if (u.url && !u.R) {
            q = cc11001100_hook("q", u, "assign");
            break;
          }
        }

        u = cc11001100_hook("u", null, "assign");
        var y = cc11001100_hook("y", b.length && b[v].url, "var-init");
        0 != q.depth && y && (u = cc11001100_hook("u", b[v], "assign"));
        var w = cc11001100_hook("w", new Gb(q, u), "var-init");

        if (w.h) {
          var t = cc11001100_hook("t", w.h.url || "", "var-init");
          f.g.push(4);
          f.h[4] = cc11001100_hook("f.h[4]", Qb("top", t), "assign");
        }

        var I = cc11001100_hook("I", {
          url: cc11001100_hook("url", w.g.url || "", "object-key-init")
        }, "var-init");

        if (w.g.url) {
          var M = cc11001100_hook("M", w.g.url.match(mb), "var-init"),
              C = cc11001100_hook("C", M[1], "var-init"),
              D = cc11001100_hook("D", M[3], "var-init"),
              na = cc11001100_hook("na", M[4], "var-init");
          q = cc11001100_hook("q", "", "assign");
          C && (q += cc11001100_hook("q", C + ":", "assign"));
          D && (q += cc11001100_hook("q", "//", "assign"), q += cc11001100_hook("q", D, "assign"), na && (q += cc11001100_hook("q", ":" + na, "assign")));
          var Eb = cc11001100_hook("Eb", q, "var-init");
        } else Eb = cc11001100_hook("Eb", "", "assign");

        I = cc11001100_hook("I", [I, {
          url: cc11001100_hook("url", Eb, "object-key-init")
        }], "assign");
        f.g.push(5);
        f.h[5] = cc11001100_hook("f.h[5]", I, "assign");
        Zb(this.m, e, f, this.i, c);
      } catch (ma) {
        try {
          Zb(this.m, e, {
            context: cc11001100_hook("context", "ecmserr", "object-key-init"),
            rctx: cc11001100_hook("rctx", a, "object-key-init"),
            msg: cc11001100_hook("msg", Xb(ma), "object-key-init"),
            url: cc11001100_hook("url", w && w.g.url, "object-key-init")
          }, this.i, c);
        } catch (jd) {}
      }

      return this.o;
    }, "assign");

    function Xb(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.toString(), "var-init");
      a.name && -1 == b.indexOf(a.name) && (b += cc11001100_hook("b", ": " + a.name, "assign"));
      a.message && -1 == b.indexOf(a.message) && (b += cc11001100_hook("b", ": " + a.message, "assign"));

      if (a.stack) {
        a = cc11001100_hook("a", a.stack, "assign");
        var c = cc11001100_hook("c", b, "var-init");

        try {
          -1 == a.indexOf(c) && (a = cc11001100_hook("a", c + "\n" + a, "assign"));

          for (var d; a != d;) d = cc11001100_hook("d", a, "assign"), a = cc11001100_hook("a", a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1"), "assign");

          b = cc11001100_hook("b", a.replace(RegExp("\n *", "g"), "\n"), "assign");
        } catch (e) {
          b = cc11001100_hook("b", c, "assign");
        }
      }

      return b;
    }

    ;

    function $b(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", "J", "var-init");
      if (a.J && a.hasOwnProperty(b)) return a.J;
      b = cc11001100_hook("b", new a(), "assign");
      return a.J = cc11001100_hook("a.J", b, "assign");
    }

    ;

    function ac() {}

    ;

    function bc() {
      this.g = cc11001100_hook("this.g", Math.random(), "assign");
    }

    function cc() {
      var a = cc11001100_hook("a", dc, "var-init"),
          b = cc11001100_hook("b", window.google_srt, "var-init");
      0 <= b && 1 >= b && (a.g = cc11001100_hook("a.g", b, "assign"));
    }

    function Zb(a, b, c, d, e) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
        if (c instanceof Pb) var f = cc11001100_hook("f", c, "var-init");else f = cc11001100_hook("f", new Pb(), "assign"), tb(c, function (h, k) {
          var l = cc11001100_hook("l", f, "var-init"),
              n = cc11001100_hook("n", l.j++, "var-init");
          h = cc11001100_hook("h", Qb(k, h), "assign");
          l.g.push(n);
          l.h[n] = cc11001100_hook("l.h[n]", h, "assign");
        });
        var g = cc11001100_hook("g", Tb(f, "/pagead/gen_204?id=" + b + "&"), "var-init");
        g && Q(g);
      } catch (h) {}
    }

    ;
    var dc,
        ec,
        U = cc11001100_hook("U", new Nb(), "var-init");

    function fc() {
      window.google_measure_js_timing || (U.g = cc11001100_hook("U.g", !1, "assign"), U.h != U.i.google_js_reporting_queue && (T() && za(U.h, Ob), U.h.length = cc11001100_hook("U.h.length", 0, "assign")));
    }

    (function (a) {
      dc = cc11001100_hook("dc", null != a ? a : new bc(), "assign");
      "number" !== typeof window.google_srt && (window.google_srt = cc11001100_hook("window.google_srt", Math.random(), "assign"));
      cc();
      ec = cc11001100_hook("ec", new Vb(dc, !0, U), "assign");
      ec.h = cc11001100_hook("ec.h", function () {}, "assign");
      ec.i = cc11001100_hook("ec.i", !0, "assign");
      "complete" == window.document.readyState ? fc() : U.g && kb(window, "load", function () {
        fc();
      });
    })();

    var gc = cc11001100_hook("gc", ["FRAME", "IMG", "IFRAME"], "var-init"),
        hc = cc11001100_hook("hc", /^[01](px)?$/, "var-init");

    function ic(a) {
      cc11001100_hook("a", a, "function-parameter");
      return "string" === typeof a ? document.getElementById(a) : a;
    }

    function jc(a, b, c, d, e, f, g) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("f", f, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      c = cc11001100_hook("c", void 0 === c ? !0 : c, "assign");
      d = cc11001100_hook("d", void 0 === d ? !1 : d, "assign");
      f = cc11001100_hook("f", void 0 === f ? !1 : f, "assign");
      g = cc11001100_hook("g", void 0 === g ? !1 : g, "assign");

      if (a = cc11001100_hook("a", ic(a), "assign")) {
        e || (e = cc11001100_hook("e", function (C, D, na) {
          C.addEventListener(D, na);
        }, "assign"));

        for (var h = cc11001100_hook("h", !1, "var-init"), k = function (C) {
          h || (h = cc11001100_hook("h", !0, "assign"), b(C));
        }, l, n, p = cc11001100_hook("p", 0, "var-init"); p < gc.length; ++p) if (gc[p] == a.tagName) {
          n = cc11001100_hook("n", 3, "assign");
          l = cc11001100_hook("l", [a], "assign");
          break;
        }

        l || (l = cc11001100_hook("l", a.querySelectorAll(gc.join(",")), "assign"), n = cc11001100_hook("n", 2, "assign"));
        var q = cc11001100_hook("q", 0, "var-init"),
            v = cc11001100_hook("v", 0, "var-init"),
            u = cc11001100_hook("u", !g, "var-init"),
            y = cc11001100_hook("y", a = cc11001100_hook("a", !1, "assign"), "var-init");
        p = cc11001100_hook("p", {}, "assign");

        for (var w = cc11001100_hook("w", 0, "var-init"); w < l.length; p = cc11001100_hook("p", {
          B: cc11001100_hook("B", p.B, "object-key-init")
        }, "assign"), w++) {
          var t = cc11001100_hook("t", l[w], "var-init");

          if (!("IMG" == t.tagName && (t.complete && (!t.naturalWidth || !t.naturalHeight) || (void 0 === g ? 0 : g) && t.style && "none" === t.style.display) || hc.test(t.getAttribute("width")) && hc.test(t.getAttribute("height")))) {
            p.B = cc11001100_hook("p.B", "IMG" === t.tagName, "assign");
            if ("IMG" == t.tagName) var I = cc11001100_hook("I", t.naturalWidth && t.naturalHeight ? !0 : !1, "var-init");else try {
              I = cc11001100_hook("I", "complete" === (t.readyState ? t.readyState : t.contentWindow && t.contentWindow.document && t.contentWindow.document.readyState) ? !0 : !1, "assign");
            } catch (C) {
              I = cc11001100_hook("I", void 0 === d ? !1 : d, "assign");
            }
            if (I) a = cc11001100_hook("a", !0, "assign"), p.B && (u = cc11001100_hook("u", !0, "assign"));else {
              q++;
              var M = cc11001100_hook("M", function (C) {
                return function (D) {
                  q--;
                  !q && u && k(n);
                  C.B && (D = cc11001100_hook("D", D && "error" === D.type, "assign"), v--, D || (u = cc11001100_hook("u", !0, "assign")), !v && y && u && k(n));
                };
              }(p), "var-init");
              e(t, "load", M);
              p.B && (v++, e(t, "error", M));
            }
          }
        }

        0 === v && (u = cc11001100_hook("u", !0, "assign"));
        l = cc11001100_hook("l", null, "assign");
        if (0 === q && !a && "complete" === x.document.readyState) n = cc11001100_hook("n", 5, "assign");else if (q || !a) {
          e(x, "load", function () {
            !f || !v && u ? k(4) : y = cc11001100_hook("y", !0, "assign");
          });
          return;
        }
        c && k(n);
      }
    }

    ;

    function kc(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      if (a) for (var d = cc11001100_hook("d", 0, "var-init"); null != a && 500 > d && !c(a); ++d) a = cc11001100_hook("a", b(a), "assign");
    }

    function lc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      kc(a, function (c) {
        try {
          return c === c.parent ? null : c.parent;
        } catch (d) {}

        return null;
      }, b);
    }

    function mc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if ("IFRAME" == a.tagName) b(a);else {
        a = cc11001100_hook("a", a.querySelectorAll("IFRAME"), "assign");

        for (var c = cc11001100_hook("c", 0, "var-init"); c < a.length && !b(a[c]); ++c);
      }
    }

    function nc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return (a = cc11001100_hook("a", a.ownerDocument, "assign")) && (a.parentWindow || a.defaultView) || null;
    }

    function oc(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");

      try {
        var d = cc11001100_hook("d", JSON.parse(c.data), "var-init");
      } catch (g) {}

      if ("object" === typeof d && d && "creativeLoad" === d.type) {
        var e = cc11001100_hook("e", nc(a), "var-init");

        if (c.source && e) {
          var f;
          lc(c.source, function (g) {
            try {
              if (g.parent === e) return f = cc11001100_hook("f", g, "assign"), !0;
            } catch (h) {}
          });
          f && mc(a, function (g) {
            if (g.contentWindow === f) return b(d), !0;
          });
        }
      }
    }

    function pc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return "string" === typeof a ? document.getElementById(a) : a;
    }

    function qc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", pc(a), "var-init");
      if (c) if (c.onCreativeLoad) c.onCreativeLoad(b);else {
        var d = cc11001100_hook("d", b ? [b] : [], "var-init"),
            e = function (f) {
          for (var g = cc11001100_hook("g", 0, "var-init"); g < d.length; ++g) try {
            d[g](1, f);
          } catch (h) {}

          d = cc11001100_hook("d", {
            push: function (h) {
              h(1, f);
            }
          }, "assign");
        };

        c.onCreativeLoad = cc11001100_hook("c.onCreativeLoad", function (f) {
          d.push(f);
        }, "assign");
        c.setAttribute("data-creative-load-listener", "");
        c.addEventListener("creativeLoad", function (f) {
          e(f.detail);
        });
        x.addEventListener("message", function (f) {
          oc(c, e, f);
        });
      }
    }

    ;

    function V(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", this, "var-init");
      this.h = cc11001100_hook("this.h", !1, "assign");
      this.g = cc11001100_hook("this.g", [], "assign");
      a(function (c) {
        rc(b, c);
      });
    }

    function rc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      if (!a.h) if (b instanceof V) b.then(function (c) {
        rc(a, c);
      });else {
        a.h = cc11001100_hook("a.h", !0, "assign");
        a.i = cc11001100_hook("a.i", b, "assign");

        for (b = cc11001100_hook("b", 0, "assign"); b < a.g.length; ++b) sc(a, a.g[b]);

        a.g = cc11001100_hook("a.g", [], "assign");
      }
    }

    function sc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      a.h ? b(a.i) : a.g.push(b);
    }

    V.prototype.then = cc11001100_hook("V.prototype.then", function (a) {
      var b = cc11001100_hook("b", this, "var-init");
      return new V(function (c) {
        sc(b, function (d) {
          c(a(d));
        });
      });
    }, "assign");

    function tc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.length, "var-init"),
          c = cc11001100_hook("c", 0, "var-init");
      return new V(function (d) {
        if (0 == b) d([]);else for (var e = cc11001100_hook("e", [], "var-init"), f = cc11001100_hook("f", {
          v: cc11001100_hook("v", 0, "object-key-init")
        }, "var-init"); f.v < b; f = cc11001100_hook("f", {
          v: cc11001100_hook("v", f.v, "object-key-init")
        }, "assign"), ++f.v) a[f.v].then(function (g) {
          return function (h) {
            e[g.v] = cc11001100_hook("e[g.v]", h, "assign");
            ++c == b && d(e);
          };
        }(f));
      });
    }

    function uc() {
      var a,
          b = cc11001100_hook("b", new V(function (c) {
        a = cc11001100_hook("a", c, "assign");
      }), "var-init");
      return new vc(b, a);
    }

    function vc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.promise = cc11001100_hook("this.promise", a, "assign");
      this.resolve = cc11001100_hook("this.resolve", b, "assign");
    }

    ;

    function wc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return a.prerendering ? 3 : {
        visible: cc11001100_hook("visible", 1, "object-key-init"),
        hidden: cc11001100_hook("hidden", 2, "object-key-init"),
        prerender: cc11001100_hook("prerender", 3, "object-key-init"),
        preview: cc11001100_hook("preview", 4, "object-key-init"),
        unloaded: cc11001100_hook("unloaded", 5, "object-key-init")
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
    }

    function xc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      a.visibilityState ? b = cc11001100_hook("b", "visibilitychange", "assign") : a.mozVisibilityState ? b = cc11001100_hook("b", "mozvisibilitychange", "assign") : a.webkitVisibilityState && (b = cc11001100_hook("b", "webkitvisibilitychange", "assign"));
      return b;
    }

    ;

    function yc(a, b, c) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");

      function d(k) {
        cc11001100_hook("k", k, "function-parameter");

        try {
          var l = cc11001100_hook("l", "object" === typeof k.data ? k.data : JSON.parse(k.data), "var-init");
          g === l.paw_id && (window.clearTimeout(h), window.removeEventListener("message", d), l.signal ? b(l.signal) : l.error && c(l.error));
        } catch (n) {
          k = cc11001100_hook("k", {
            msg: cc11001100_hook("msg", "postmessageError", "object-key-init"),
            err: cc11001100_hook("err", n instanceof Error ? n.message : "nonError", "object-key-init"),
            data: cc11001100_hook("data", null == k.data ? "null" : 500 < k.data.length ? k.data.substring(0, 500) : k.data, "object-key-init")
          }, "assign"), $b(ac), l = cc11001100_hook("l", [], "assign"), !k.eid && l.length && (k.eid = cc11001100_hook("k.eid", l.toString(), "assign")), Zb(dc, "paw_sigs", k, !0);
        }
      }

      var e = cc11001100_hook("e", {}, "var-init"),
          f = cc11001100_hook("f", 200, "var-init");
      e = cc11001100_hook("e", void 0 === e ? {} : e, "assign");
      b = cc11001100_hook("b", void 0 === b ? function () {} : b, "assign");
      c = cc11001100_hook("c", void 0 === c ? function () {} : c, "assign");
      f = cc11001100_hook("f", void 0 === f ? 200 : f, "assign");
      var g = cc11001100_hook("g", String(Math.floor(2147483647 * sb())), "var-init"),
          h = cc11001100_hook("h", 0, "var-init");
      window.addEventListener("message", function (k) {
        Yb(ec, 903, function () {
          d(k);
        })();
      });
      a.postMessage(Object.assign({}, {
        paw_id: cc11001100_hook("paw_id", g, "object-key-init")
      }, e));
      h = cc11001100_hook("h", window.setTimeout(function () {
        window.removeEventListener("message", d);
        c("PAW GMA postmessage timed out.");
      }, f), "assign");
    }

    function zc() {
      var a = cc11001100_hook("a", window, "var-init"),
          b,
          c;
      if (a.gmaSdk || (null == (b = cc11001100_hook("b", a.webkit, "assign")) ? 0 : null == (c = cc11001100_hook("c", b.messageHandlers, "assign")) ? 0 : c.getGmaViewSignals)) return a;

      try {
        var d = cc11001100_hook("d", window.parent, "var-init"),
            e,
            f;
        if (d.gmaSdk || (null == (e = cc11001100_hook("e", d.webkit, "assign")) ? 0 : null == (f = cc11001100_hook("f", e.messageHandlers, "assign")) ? 0 : f.getGmaViewSignals)) return d;
      } catch (g) {}

      return null;
    }

    ;

    function Ac(a) {
      cc11001100_hook("a", a, "function-parameter");
      this.l = cc11001100_hook("this.l", Ra(a), "assign");
    }

    r(Ac, N);

    function Bc(a) {
      cc11001100_hook("a", a, "function-parameter");
      this.l = cc11001100_hook("this.l", Ra(a), "assign");
    }

    r(Bc, N);

    function Cc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return L(a, 2, b);
    }

    function Dc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return L(a, 3, b);
    }

    function Ec(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return L(a, 4, b);
    }

    function Fc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return L(a, 5, b);
    }

    function Gc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return L(a, 9, b);
    }

    function Hc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", b, "var-init");
      b = cc11001100_hook("b", a.l, "assign");
      var d = cc11001100_hook("d", Ja(b), "var-init");
      if (d & 2) throw Error();

      if (null != c) {
        for (var e = cc11001100_hook("e", !!c.length, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < c.length; f++) {
          var g = cc11001100_hook("g", c[f], "var-init");
          e = cc11001100_hook("e", e && !(G(g.l) & 2), "assign");
        }

        g = cc11001100_hook("g", G(c), "assign");
        f = cc11001100_hook("f", g | 1, "assign");
        f = cc11001100_hook("f", (e ? f | 8 : f & -9) | 4, "assign");
        f != g && (Object.isFrozen(c) && (c = cc11001100_hook("c", Array.prototype.slice.call(c), "assign")), H(c, f));
      }

      null == c && (c = cc11001100_hook("c", void 0, "assign"));
      Za(b, d, 10, c);
      return a;
    }

    function Ic(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return Ya(a, 11, null == b ? b : Pa(b));
    }

    function Jc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return L(a, 1, b);
    }

    function Kc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return Ya(a, 7, null == b ? b : Pa(b));
    }

    Bc.ba = cc11001100_hook("Bc.ba", [10, 6], "assign");
    var Lc = cc11001100_hook("Lc", "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" "), "var-init");

    function Mc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      return null != (b = cc11001100_hook("b", a.google_tag_data, "assign")) ? b : a.google_tag_data = cc11001100_hook("a.google_tag_data", {}, "assign");
    }

    function Nc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b, c;
      return "function" === typeof (null == (b = cc11001100_hook("b", a.navigator, "assign")) ? void 0 : null == (c = cc11001100_hook("c", b.userAgentData, "assign")) ? void 0 : c.getHighEntropyValues);
    }

    function Oc(a) {
      cc11001100_hook("a", a, "function-parameter");
      if (!Nc(a)) return null;
      var b = cc11001100_hook("b", Mc(a), "var-init");
      if (b.uach_promise) return b.uach_promise;
      a = cc11001100_hook("a", a.navigator.userAgentData.getHighEntropyValues(Lc).then(function (c) {
        null != b.uach || (b.uach = cc11001100_hook("b.uach", c, "assign"));
        return c;
      }), "assign");
      return b.uach_promise = cc11001100_hook("b.uach_promise", a, "assign");
    }

    function Pc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b;
      return Ic(Hc(Fc(Cc(Jc(Ec(Kc(Gc(Dc(new Bc(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = cc11001100_hook("b", a.fullVersionList, "assign")) ? void 0 : b.map(function (c) {
        var d = cc11001100_hook("d", new Ac(), "var-init");
        d = cc11001100_hook("d", L(d, 1, c.brand), "assign");
        return L(d, 2, c.version);
      })) || []), a.wow64 || !1);
    }

    function Qc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b, c;
      return null != (c = cc11001100_hook("c", null == (b = cc11001100_hook("b", Oc(a), "assign")) ? void 0 : b.then(function (d) {
        return Pc(d);
      }), "assign")) ? c : null;
    }

    ;

    function Rc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function (b) {
        try {
          var c = cc11001100_hook("c", a.frames && !!a.frames[b], "var-init");
        } catch (d) {
          c = cc11001100_hook("c", !1, "assign");
        }

        return c;
      });
    }

    ;

    function Sc() {
      this.g = cc11001100_hook("this.g", x.document, "assign");
      this.o = cc11001100_hook("this.o", x, "assign");
      this.h = cc11001100_hook("this.h", null, "assign");
      this.i = cc11001100_hook("this.i", this.j = cc11001100_hook("this.j", "", "assign"), "assign");
      this.u = cc11001100_hook("this.u", Tc(), "assign");
      Uc(this);
    }

    function Uc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", [], "var-init"),
          c = cc11001100_hook("c", R(fb) || !!P.aub, "var-init");

      if (c || P.aunb) {
        var d = cc11001100_hook("d", Qc(a.o), "var-init");
        d && (d = cc11001100_hook("d", d.then(function (p) {
          p = cc11001100_hook("p", ab(p), "assign");

          for (var q = cc11001100_hook("q", [], "var-init"), v = cc11001100_hook("v", 0, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < p.length; u++) {
            var y = cc11001100_hook("y", p.charCodeAt(u), "var-init");
            255 < y && (q[v++] = cc11001100_hook("q[v++]", y & 255, "assign"), y >>= cc11001100_hook("y", 8, "assign"));
            q[v++] = cc11001100_hook("q[v++]", y, "assign");
          }

          p = cc11001100_hook("p", Ea(q, 3), "assign");
          a.j = cc11001100_hook("a.j", p, "assign");
        }), "assign"), c && b.push(d));
      }

      if (R(eb) || R(gb)) {
        c = cc11001100_hook("c", zc(), "assign");
        var e;
        if (null == c ? 0 : null == (e = cc11001100_hook("e", c.gmaSdk, "assign")) ? 0 : e.getViewSignals) (e = cc11001100_hook("e", c.gmaSdk.getViewSignals(), "assign")) && !R(gb) && (a.i = cc11001100_hook("a.i", "&ms=" + e, "assign"));else {
          var f, g;

          if (null == c ? 0 : null == (f = cc11001100_hook("f", c.webkit, "assign")) ? 0 : null == (g = cc11001100_hook("g", f.messageHandlers, "assign")) ? 0 : g.getGmaViewSignals) {
            var h, k;
            yc(null == c ? void 0 : null == (h = cc11001100_hook("h", c.webkit, "assign")) ? void 0 : null == (k = cc11001100_hook("k", h.messageHandlers, "assign")) ? void 0 : k.getGmaViewSignals, function (p) {
              R(gb) || (a.i = cc11001100_hook("a.i", "&" + p, "assign"));
            }, function () {});
          }
        }
      }

      P.umi && (e = cc11001100_hook("e", new V(function (p) {
        a.h = cc11001100_hook("a.h", p, "assign");
      }), "assign"), b.push(e));

      if (P.ebrpfa || R(db)) {
        var l = cc11001100_hook("l", uc(), "var-init");
        b.push(l.promise);
        wb(a.g, function () {
          jc(a.g.body, l.resolve);
        });
      }

      3 == wc(a.g) && 3 == wc(a.g) && b.push(Vc(a));

      if (P.opxdv && a.u) {
        var n = cc11001100_hook("n", uc(), "var-init");
        b.push(n.promise);
        e = cc11001100_hook("e", x.omrhp, "assign");
        "function" === typeof e ? e(n.resolve) : (e = cc11001100_hook("e", x.document.querySelector("script[data-jc='86']"), "assign")) && e.addEventListener("load", function () {
          x.omrhp(n.resolve);
        });
      }

      a.m = cc11001100_hook("a.m", tc(b), "assign");
    }

    function Wc(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.search(ob), "var-init");
      var c = cc11001100_hook("c", nb(a, 0, "ase", b), "var-init");
      if (0 > c) b = cc11001100_hook("b", null, "assign");else {
        var d = cc11001100_hook("d", a.indexOf("&", c), "var-init");
        if (0 > d || d > b) d = cc11001100_hook("d", b, "assign");
        b = cc11001100_hook("b", decodeURIComponent(a.slice(c + 4, -1 !== d ? d : 0).replace(/\+/g, " ")), "assign");
      }

      if (b === 2 .toString()) {
        var e = cc11001100_hook("e", x.document, "var-init");
        e = cc11001100_hook("e", void 0 === e ? document : e, "assign");
        var f;
        e = cc11001100_hook("e", null != (f = cc11001100_hook("f", e.featurePolicy, "assign")) && f.allowedFeatures().includes("attribution-reporting") ? 6 : 5, "assign");
        f = cc11001100_hook("f", a.search(ob), "assign");
        b = cc11001100_hook("b", 0, "assign");

        for (d = cc11001100_hook("d", [], "assign"); 0 <= (c = cc11001100_hook("c", nb(a, b, "nis", f), "assign"));) d.push(a.substring(b, c)), b = cc11001100_hook("b", Math.min(a.indexOf("&", c) + 1 || f, f), "assign");

        d.push(a.slice(b));
        d.join("").replace(pb, "$1");
        null != e && encodeURIComponent(String(e));
        e = cc11001100_hook("e", !1, "assign");
        f = cc11001100_hook("f", !0, "assign");
        e = cc11001100_hook("e", void 0 === e ? !1 : e, "assign");
        f = cc11001100_hook("f", void 0 === f ? !1 : f, "assign");
        x.fetch ? (e = cc11001100_hook("e", {
          keepalive: cc11001100_hook("keepalive", !0, "object-key-init"),
          credentials: cc11001100_hook("credentials", "include", "object-key-init"),
          redirect: cc11001100_hook("redirect", "follow", "object-key-init"),
          method: cc11001100_hook("method", "get", "object-key-init"),
          mode: cc11001100_hook("mode", "no-cors", "object-key-init")
        }, "assign"), f && (e.mode = cc11001100_hook("e.mode", "cors", "assign"), "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = cc11001100_hook("e.attributionReporting", {
          eventSourceEligible: cc11001100_hook("eventSourceEligible", "true", "object-key-init"),
          triggerEligible: cc11001100_hook("triggerEligible", "false", "object-key-init")
        }, "assign") : e.headers = cc11001100_hook("e.headers", {
          "Attribution-Reporting-Eligible": cc11001100_hook("Attribution-Reporting-Eligible", "event-source", "object-key-init")
        }, "assign")), x.fetch(a, e)) : Q(a, void 0, e, f);
      } else if (P.atsb) {
        e = cc11001100_hook("e", void 0 === e ? !1 : e, "assign");
        if (f = cc11001100_hook("f", x.navigator, "assign")) f = cc11001100_hook("f", x.navigator.userAgent, "assign"), f = cc11001100_hook("f", /Chrome/.test(f) && !/Edge/.test(f) ? !0 : !1, "assign");
        f && x.navigator.sendBeacon ? x.navigator.sendBeacon(a) : Q(a, void 0, e);
      } else Q(a);
    }

    function Tc() {
      var a = cc11001100_hook("a", O(x).omid3p, "var-init"),
          b = cc11001100_hook("b", !!a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener, "var-init");
      b || rb(function (c) {
        Rc(c) && (b = cc11001100_hook("b", !0, "assign"));
        return b;
      }, !0);
      return b;
    }

    function Vc(a) {
      cc11001100_hook("a", a, "function-parameter");
      return new V(function (b) {
        var c = cc11001100_hook("c", xc(a.g), "var-init");

        if (c) {
          var d = function () {
            3 != wc(a.g) && (lb(a.g, c, d), b());
          };

          kb(a.g, c, d);
        }
      });
    }

    ;

    function W() {
      return new Date().getTime();
    }

    function Xc() {
      try {
        var a = cc11001100_hook("a", void 0 === a ? document : a, "var-init");
        var b;
        return !(null == (b = cc11001100_hook("b", a.featurePolicy, "assign")) || !b.features().includes("attribution-reporting"));
      } catch (c) {
        return !1;
      }
    }

    var X = cc11001100_hook("X", new Vb(new bc(), !1), "var-init");

    function Y(a) {
      cc11001100_hook("a", a, "function-parameter");
      a.umi = cc11001100_hook("a.umi", P.umi ? 1 : 0, "assign");
      a.eavp = cc11001100_hook("a.eavp", P.eavp ? 1 : 0, "assign");
      a.ebrp = cc11001100_hook("a.ebrp", P.ebrp ? 1 : 0, "assign");
      a.bvst = cc11001100_hook("a.bvst", P.bvst || "n", "assign");
      a.opxb = cc11001100_hook("a.opxb", P.opxb ? 1 : 0, "assign");
      a.aunb = cc11001100_hook("a.aunb", P.aunb ? 1 : 0, "assign");
      a.aub = cc11001100_hook("a.aub", P.aub ? 1 : 0, "assign");
      a.fld = cc11001100_hook("a.fld", P.fld ? 1 : 0, "assign");
      a.uffp = cc11001100_hook("a.uffp", P.uffp ? 1 : 0, "assign");
      a.espa = cc11001100_hook("a.espa", P.espa ? 1 : 0, "assign");
      a.aifbl = cc11001100_hook("a.aifbl", P.aifbl ? 1 : 0, "assign");
      Z && (a.omid = cc11001100_hook("a.omid", Z.u ? 1 : 0, "assign"));
    }

    function Yc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      this.I = cc11001100_hook("this.I", a, "assign");
      this.o = cc11001100_hook("this.o", this.i = cc11001100_hook("this.i", this.g = cc11001100_hook("this.g", !1, "assign"), "assign"), "assign");
      this.O = cc11001100_hook("this.O", 1, "assign");
      this.j = cc11001100_hook("this.j", P.eavp ? 1 : 0, "assign");
      this.h = cc11001100_hook("this.h", P.ebrp ? 1 : 0, "assign");
      this.X = cc11001100_hook("this.X", !!P.opxb, "assign");
      this.D = cc11001100_hook("this.D", this.A = cc11001100_hook("this.A", null, "assign"), "assign");
      this.H = cc11001100_hook("this.H", uc(), "assign");
      this.N = cc11001100_hook("this.N", W(), "assign");
      this.M = cc11001100_hook("this.M", null, "assign");
      this.U = cc11001100_hook("this.U", .001 > Math.random(), "assign");
      this.P = cc11001100_hook("this.P", P.eeid || "", "assign");
      this.L = cc11001100_hook("this.L", this.m = cc11001100_hook("this.m", null, "assign"), "assign");
      this.V = cc11001100_hook("this.V", (Math.random() + "").slice(-5), "assign");
      this.u = cc11001100_hook("this.u", !1, "assign");
      this.C = cc11001100_hook("this.C", null, "assign");
      this.K = cc11001100_hook("this.K", 0, "assign");
      this.F = cc11001100_hook("this.F", this.G = cc11001100_hook("this.G", null, "assign"), "assign");
      this.W = cc11001100_hook("this.W", !!P.fld, "assign");
      this.S = cc11001100_hook("this.S", P.adsg || "", "assign");
      this.Z = cc11001100_hook("this.Z", !!P.uffp, "assign");
      this.Y = cc11001100_hook("this.Y", !!P.espa, "assign");

      if (a = cc11001100_hook("a", !!P.aifbl, "assign")) {
        var c, d;
        a = cc11001100_hook("a", -1 != (null == (c = cc11001100_hook("c", x.navigator, "assign")) ? void 0 : null == (d = cc11001100_hook("d", c.userAgent, "assign")) ? void 0 : d.indexOf("Firefox")), "assign");
      }

      this.T = cc11001100_hook("this.T", a, "assign");
      Zc(this, b);
    }

    var Z;

    function $c(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      b && 0 !== a.h && (a.L = cc11001100_hook("a.L", W() - a.N, "assign"), ad(a, b).then(function (c) {
        c && (a.A = cc11001100_hook("a.A", c, "assign"));
        a.o = cc11001100_hook("a.o", !0, "assign");
        bd(a);
      }));
    }

    function cd() {
      try {
        rb(function (a) {
          a = cc11001100_hook("a", a.document, "assign");
          if (hb.length && a.head) for (var b = cc11001100_hook("b", ea(hb), "var-init"), c = cc11001100_hook("c", b.next(), "var-init"); !c.done; c = cc11001100_hook("c", b.next(), "assign")) if ((c = cc11001100_hook("c", c.value, "assign")) && a.head) {
            var d = cc11001100_hook("d", xb("META"), "var-init");
            a.head.appendChild(d);
            d.httpEquiv = cc11001100_hook("d.httpEquiv", "origin-trial", "assign");
            d.content = cc11001100_hook("d.content", c, "assign");
          }
          return !1;
        }, !1);
      } catch (a) {}
    }

    function Zc(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      $c(a, b);
      cd();
      0 !== a.h || 0 !== a.j ? dd(a) ? ed(a).then(function () {
        fd(a);
      }) : fd(a) : a.C = cc11001100_hook("a.C", 1, "assign");
      $b(Sc).m.then(function () {
        a.g = cc11001100_hook("a.g", !0, "assign");
        bd(a);
      });
      gd(a);
      bd(a);
    }

    function ad(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return new V(function (c) {
        function d(e, f) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("f", f, "function-parameter");
          a.D = cc11001100_hook("a.D", e, "assign");
          c(f);
        }

        qc(b, d);
        jc(b, d, !0, !1, void 0, !0, a.T);
      });
    }

    function dd(a) {
      cc11001100_hook("a", a, "function-parameter");
      a.u = cc11001100_hook("a.u", Tc(), "assign");
      a.C = cc11001100_hook("a.C", a.u ? 4 : 1, "assign");
      return a.u;
    }

    function ed(a) {
      cc11001100_hook("a", a, "function-parameter");
      return new V(function (b) {
        var c = cc11001100_hook("c", Yb(X, 1184, function (e) {
          a.C = cc11001100_hook("a.C", 3, "assign");
          e && (a.G = cc11001100_hook("a.G", e.src, "assign"), a.F = cc11001100_hook("a.F", e.sdk, "assign"));
          b();
        }, null, Y), "var-init"),
            d = cc11001100_hook("d", x.omrhp, "var-init");
        "function" === typeof d ? d(c) : (d = cc11001100_hook("d", x.document.querySelector("script[data-jc='86']"), "assign")) && d.addEventListener("load", Yb(X, 1183, function () {
          x.omrhp(c);
        }, null, Y));
      });
    }

    function fd(a) {
      cc11001100_hook("a", a, "function-parameter");
      a.i = cc11001100_hook("a.i", !0, "assign");
      bd(a);
    }

    function bd(a) {
      cc11001100_hook("a", a, "function-parameter");

      if (a.g) {
        var b = cc11001100_hook("b", null, "var-init"),
            c = cc11001100_hook("c", 0, "var-init");
        2 !== a.O ? b = cc11001100_hook("b", 0, "assign") : 1 === a.j && a.g && a.i ? b = cc11001100_hook("b", 12, "assign") : 1 === a.h && a.g && a.i && a.o && (b = cc11001100_hook("b", 11, "assign"));
        if (null != b) a: {
          if (0 === b ? 1 === a.h && a.g && a.i && a.o ? c = cc11001100_hook("c", 2, "assign") : 1 === a.j && a.g && a.i && (c = cc11001100_hook("c", 1, "assign")) : 12 === b && 1 === a.h && a.g && a.i && a.o && (c = cc11001100_hook("c", 2, "assign")), a.X && (a.U && "" !== a.I && a.u && (a.m || 0 !== b || hd(a, !0), 12 !== b && 1 !== c && 2 !== c || hd(a, !1)), 0 === b && 0 === c)) break a;
          var d = cc11001100_hook("d", W(), "var-init"),
              e = cc11001100_hook("e", id(a, b, c, d), "var-init");
          0 === b && (a.O = cc11001100_hook("a.O", 2, "assign"), a.M = cc11001100_hook("a.M", d, "assign"));
          if (12 === b || c) a.j = cc11001100_hook("a.j", 2, "assign");
          if (11 === b || 2 === c) a.h = cc11001100_hook("a.h", 2, "assign");

          if (a.W) {
            e = cc11001100_hook("e", new bb(), "assign");
            L(e, 1, a.S);
            e = cc11001100_hook("e", ab(e), "assign");

            if (0 === b) {
              d = cc11001100_hook("d", O(x), "assign");
              var f;
              null == d || null == (f = cc11001100_hook("f", d.fence, "assign")) || f.reportEvent({
                eventType: cc11001100_hook("eventType", "impression", "object-key-init"),
                eventData: cc11001100_hook("eventData", e, "object-key-init"),
                destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
              });
              var g;
              null == d || null == (g = cc11001100_hook("g", d.fence, "assign")) || g.reportEvent({
                eventType: cc11001100_hook("eventType", "impression", "object-key-init"),
                destination: cc11001100_hook("destination", ["component-seller"], "object-key-init")
              });
            }

            if (11 === b || 2 === c) {
              var h, k;
              null == (h = cc11001100_hook("h", O(x), "assign")) || null == (k = cc11001100_hook("k", h.fence, "assign")) || k.reportEvent({
                eventType: cc11001100_hook("eventType", "b2rimpression", "object-key-init"),
                eventData: cc11001100_hook("eventData", e, "object-key-init"),
                destination: cc11001100_hook("destination", ["buyer"], "object-key-init")
              });
            }
          } else e && (((f = cc11001100_hook("f", a.Y && Xc(), "assign")) || a.Z) && x.fetch ? (g = cc11001100_hook("g", {
            method: cc11001100_hook("method", "GET", "object-key-init"),
            keepalive: cc11001100_hook("keepalive", !0, "object-key-init")
          }, "assign"), f ? "setAttributionReporting" in XMLHttpRequest.prototype ? g.attributionReporting = cc11001100_hook("g.attributionReporting", {
            eventSourceEligible: cc11001100_hook("eventSourceEligible", !0, "object-key-init"),
            triggerEligible: cc11001100_hook("triggerEligible", !1, "object-key-init")
          }, "assign") : g.headers = cc11001100_hook("g.headers", {
            "Attribution-Reporting-Eligible": cc11001100_hook("Attribution-Reporting-Eligible", "event-source", "object-key-init")
          }, "assign") : g.mode = cc11001100_hook("g.mode", "no-cors", "assign"), x.fetch(ib(e, "&ftch=1"), g)) : Wc(e));

          0 === b && a.H.resolve();
        }
      }
    }

    function hd(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      var c = cc11001100_hook("c", null, "var-init");
      b ? a.m = cc11001100_hook("a.m", W(), "assign") : c = cc11001100_hook("c", a.m ? W() - a.m : "?", "assign");
      a = cc11001100_hook("a", "https://pagead2.googlesyndication.com/pagead/gen_204?id=opxhb&evt=" + (b ? "d" : "o") + ("&eid=" + encodeURIComponent(a.P)) + (null == c ? "" : "&ttp=" + c), "assign");
      Wc(a);
    }

    function id(a, b, c, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      if ("" === a.I) return null;
      var e = cc11001100_hook("e", {
        omid: cc11001100_hook("omid", a.u ? 1 : 0, "object-key-init"),
        rm: cc11001100_hook("rm", a.C, "object-key-init"),
        ctpt: cc11001100_hook("ctpt", d - a.N, "object-key-init")
      }, "var-init");
      0 !== b && (e.vt = cc11001100_hook("e.vt", b, "assign"), e.dtpt = cc11001100_hook("e.dtpt", d - (a.M || 0), "assign"));
      0 !== c && (e.cbvp = cc11001100_hook("e.cbvp", c, "assign"));
      a.D && (e.dett = cc11001100_hook("e.dett", a.D, "assign"));
      a.A && (e.beid = cc11001100_hook("e.beid", a.A.eventId, "assign"), e.vend = cc11001100_hook("e.vend", a.A.vendor, "assign"));
      null != a.L && (e.cstd = cc11001100_hook("e.cstd", a.L, "assign"));
      (b = cc11001100_hook("b", P.bvst, "assign")) && (e.cisv = cc11001100_hook("e.cisv", b + ("." + a.V), "assign"));
      0 !== a.K && (e.vwbs = cc11001100_hook("e.vwbs", a.K, "assign"));
      a.G && (e.oprs = cc11001100_hook("e.oprs", a.G, "assign"));
      a.F && (e.opsd = cc11001100_hook("e.opsd", a.F, "assign"));
      (b = cc11001100_hook("b", $b(Sc).j, "assign")) && (e.uach = cc11001100_hook("e.uach", b, "assign"));
      e.arae = cc11001100_hook("e.arae", Number(Xc()), "assign");
      var f = cc11001100_hook("f", "", "var-init");
      tb(e, function (g, h) {
        f += cc11001100_hook("f", "&" + h + "=" + encodeURIComponent(g), "assign");
      });
      return ib(a.I, f);
    }

    function gd(a) {
      cc11001100_hook("a", a, "function-parameter");
      var b = cc11001100_hook("b", a.P, "var-init");
      if (b && (b = cc11001100_hook("b", x["bllsn" + b], "assign"), "function" === typeof b)) try {
        b(function (c) {
          c && (a.K = cc11001100_hook("a.K", c.block ? 2 : 1, "assign"));
        });
      } catch (c) {}
    }

    ;
    O().btrp = cc11001100_hook("O().btrp", function (a, b) {
      return Wb(X, 1183, function () {
        var c = cc11001100_hook("c", Z = cc11001100_hook("Z", new Yc(a, b), "assign"), "var-init");
        return Yb(X, 1183, function (d) {
          $c(c, d);
        }, Y);
      }, Y);
    }, "assign");
    O().pdib3 = cc11001100_hook("O().pdib3", function (a, b) {
      Wb(X, 1185, function () {
        Z.H.promise.then(function () {
          if (b) {
            var c = cc11001100_hook("c", void 0 === c ? !1 : c, "var-init");
            if (zb()) yb(window, a, null, !0, c);else {
              var d = cc11001100_hook("d", x.document, "var-init");

              if (d.body) {
                var e = cc11001100_hook("e", d.getElementById("goog-srcless-iframe"), "var-init");
                e || (e = cc11001100_hook("e", xb("IFRAME"), "assign"), e.style.display = cc11001100_hook("e.style.display", "none", "assign"), e.id = cc11001100_hook("e.id", "goog-srcless-iframe", "assign"), d.body.appendChild(e));
                d = cc11001100_hook("d", e, "assign");
              } else d = cc11001100_hook("d", null, "assign");

              d && d.contentWindow && yb(d.contentWindow, a, null, !0, c);
            }
          } else Q(a);
        });
      }, Y);
    }, "assign");
    O().vv = cc11001100_hook("O().vv", function () {
      var a = cc11001100_hook("a", $b(Sc), "var-init");
      if (!a.h) throw Error("aiv::err");
      a.h();
    }, "assign");
    O().sasrc = cc11001100_hook("O().sasrc", function (a) {
      Z.H.promise.then(function () {
        var b = cc11001100_hook("b", x.document.createElement("img"), "var-init");
        b.style.display = cc11001100_hook("b.style.display", "none", "assign");
        b.attributionSrc = cc11001100_hook("b.attributionSrc", a, "assign");
        x.document.body.appendChild(b);
      });
    }, "assign");
  }).call(this);
  window.stcc = cc11001100_hook("window.stcc", btrp("https://ad.doubleclick.net/pcs/view?xai\x3dAKAOjsvccTISE8UHa6Q3ZoG3TpXz8lKnjqULpjf3ZtXq9-dVb9FNHLf4W0k17JWy_EVRTIlhgNzgxVdeo6GeNgYtSSKsXdyjTJ9oT_2A9tlRn46J2iARqXuVfybOkJjtYUWOIqvKLGnecJae-COE8JjDKcJ6qyE47vc8T-2YbniUb2Y9JZvHqwJTW4L3aL6cYS4e57IdvRGfpTlcwoXXtU00NfNDpBcYlJCpl5dVB7LItA9SXBAEjrEt_SHG74lvnP70t5cT7exhYtOBTqlmAaOWift8-Av09EbSrCX-0fp7IdPDsEEVvuww5GvzFCe-n55Kr47MBS4AE_fc0PjeX3kbHF8xCO1jPz3fcBh-PbKmQ1pFMIGM-LR-ziV4u4NAmE9aPKq1DuROI3h-TpgMEh-cUYJzN6vnIFmWrhlDeNWvfU6KGw9VIEYzRfsMp5rHk1lssoyekft0MyYH_tZw7zOxUmwt-I-_c67S0NyDcrkigYJ-5sdwtRYormAoZ4s8xSkWi0BMAmFEwQeHhXxGzfIHjtmqrqujGOpAcwbi-D7tzg9_EcU9hTZCrOTBc1HDo0Dus-CJ6PnqTsTuMjlZXoy8LFFgFCt4Ey3pMy7wqNYcAaPB3ZFcHQidHM0socyYxyp51gP7cSOTzHJiTEBNMBO9-odIqIzruP5lRhCzLlS1srlVPsaFoahlANEurBKSaGZIXS4b4Taam6laqcjycn9xt3WVO0Fj8V0yeAr7emlhygwVlu2SKQBud-iwE-PWUvpxPl4Z3-_QLilb2Tlsv0yyNQ8BU1YDKNoUrsdmI1rReC92yiUs0xfExe5VSGVIt39Y35E0zhu4YmYtZSO0pw9ZKV1rmASg7chJ9mL4FEGb8a24jrMKnATUbuEK9xG2KM2aDxYyz61w6mjd_JKqkYAOqwRmhENY0yfzQTJrUlmyHruYFerlcP2InNpIUFxJA-BUmCdxkP4jZuY9mhQ5q7zlPpMf2846PM2XiSQKOe71y-1Q2lXYsWU9xzqMj7payZolpGdVTCQtWuPfwhcXJtp_mz-dGHABmYC4XQ4BN6-jI7U8w3bL9LudPcvj3Mp9MbM5fAFITFWPKAyE9iHjaJv9X8NMznm0vxFydgKGjmxeGrxbV9H7_-_bhzarrAdaurtemXGaUaPBiDcdHXgXFK1hRCk1sfy-zndJhvMPRUBLHsI4XMX80EHDeriUmSjvNzNa4MtUow-or7L0-VmtQZEbXUIHT1TLwZ4KgugUmtyv7e3sF_OqDMpTvSvy37qCcdE4fJFodDs9jRTIDZavuIHmoEd1wAl4Kb7v17fmQH6lcDUe_g\x26sai\x3dAMfl-YRQpHWLNb5UK-MQQZqGsySp3_nQXQwU46_h_FwrI90OqohJ6f9y1en3KVrE3CVcCuUYfaApy2CPaq7onvKZbCBbjEIklNLJwqqg-XuQTLSWw45Dn9n4BATWTYfEY-x1Dak8NwO81RxvXxOSdDhetnFIWZ8It8cFm9yEZON8MpyntbY6DxB9ffhTjU6-_rqVjb_NjBo1kp8gWyzEX1ySl_Kc8hvZqUxvDiIS3IF1NzZeg6ZyhBCGlsLOGZEFjyJ-A0dnfxXYzsPJm0tifM7JhIH6kE-l1FeRjwHvw7Xt\x26sig\x3dCg0ArKJSzG1yjLlefVX4EAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26crd\x3daHR0cHM6Ly9taWNyb3NvZnQuY29t\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_JjcRZdqfMquFid4Pn_q7-AM")), "assign");
})();

(function () {
  (function () {
    (function () {
      var m = cc11001100_hook("m", document.createElement('meta'), "var-init");
      m.setAttribute('data-jc', '78');
      m.setAttribute('data-jc-version', 'r20230920');
      var ss = cc11001100_hook("ss", document.getElementsByTagName('script')[0], "var-init");

      if (ss && ss.parentNode) {
        ss.parentNode.insertBefore(m, ss);
      }
    })();

    (function () {
      /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */
      var h = cc11001100_hook("h", this || self, "var-init");

      function k(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        a = cc11001100_hook("a", a.split("."), "assign");
        var b = cc11001100_hook("b", h, "var-init");
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);

        for (var d; a.length && (d = cc11001100_hook("d", a.shift(), "assign"));) a.length || void 0 === c ? b[d] && b[d] !== Object.prototype[d] ? b = cc11001100_hook("b", b[d], "assign") : b = cc11001100_hook("b", b[d] = cc11001100_hook("b[d]", {}, "assign"), "assign") : b[d] = cc11001100_hook("b[d]", c, "assign");
      }

      function l(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", typeof a, "var-init");
        c = cc11001100_hook("c", "object" != c ? c : a ? Array.isArray(a) ? "array" : c : "null", "assign");
        return "array" == c || "object" == c && "number" == typeof a.length;
      }

      function n(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", typeof a, "var-init");
        return "object" == c && null != a || "function" == c;
      }

      function p(a) {
        cc11001100_hook("a", a, "function-parameter");
        return a;
      }

      ;
      var q = cc11001100_hook("q", Array.prototype.forEach ? function (a, c) {
        Array.prototype.forEach.call(a, c, void 0);
      } : function (a, c) {
        for (var b = cc11001100_hook("b", a.length, "var-init"), d = cc11001100_hook("d", "string" === typeof a ? a.split("") : a, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < b; f++) f in d && c.call(void 0, d[f], f, a);
      }, "var-init");

      function r(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", a.length, "var-init");

        if (0 < c) {
          for (var b = cc11001100_hook("b", Array(c), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < c; d++) b[d] = cc11001100_hook("b[d]", a[d], "assign");

          return b;
        }

        return [];
      }

      ;

      function t(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");

        for (var b in a) c.call(void 0, a[b], b, a);
      }

      ;
      var u;

      function v(a) {
        cc11001100_hook("a", a, "function-parameter");
        this.g = cc11001100_hook("this.g", a, "assign");
      }

      v.prototype.toString = cc11001100_hook("v.prototype.toString", function () {
        return this.g + "";
      }, "assign");
      v.prototype.h = cc11001100_hook("v.prototype.h", !0, "assign");
      var w = cc11001100_hook("w", {}, "var-init");

      function x(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        t(c, function (b, d) {
          b && "object" == typeof b && b.h && (b = cc11001100_hook("b", b.g.toString(), "assign"));
          "style" == d ? a.style.cssText = cc11001100_hook("a.style.cssText", b, "assign") : "class" == d ? a.className = cc11001100_hook("a.className", b, "assign") : "for" == d ? a.htmlFor = cc11001100_hook("a.htmlFor", b, "assign") : y.hasOwnProperty(d) ? a.setAttribute(y[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = cc11001100_hook("a[d]", b, "assign");
        });
      }

      var y = cc11001100_hook("y", {
        cellpadding: cc11001100_hook("cellpadding", "cellPadding", "object-key-init"),
        cellspacing: cc11001100_hook("cellspacing", "cellSpacing", "object-key-init"),
        colspan: cc11001100_hook("colspan", "colSpan", "object-key-init"),
        frameborder: cc11001100_hook("frameborder", "frameBorder", "object-key-init"),
        height: cc11001100_hook("height", "height", "object-key-init"),
        maxlength: cc11001100_hook("maxlength", "maxLength", "object-key-init"),
        nonce: cc11001100_hook("nonce", "nonce", "object-key-init"),
        role: cc11001100_hook("role", "role", "object-key-init"),
        rowspan: cc11001100_hook("rowspan", "rowSpan", "object-key-init"),
        type: cc11001100_hook("type", "type", "object-key-init"),
        usemap: cc11001100_hook("usemap", "useMap", "object-key-init"),
        valign: cc11001100_hook("valign", "vAlign", "object-key-init"),
        width: cc11001100_hook("width", "width", "object-key-init")
      }, "var-init");

      function z(a, c, b) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");
        var d = cc11001100_hook("d", arguments, "var-init"),
            f = cc11001100_hook("f", document, "var-init"),
            e = cc11001100_hook("e", d[1], "var-init");
        var g = cc11001100_hook("g", String(d[0]), "var-init");
        g = cc11001100_hook("g", String(g), "assign");
        "application/xhtml+xml" === f.contentType && (g = cc11001100_hook("g", g.toLowerCase(), "assign"));
        g = cc11001100_hook("g", f.createElement(g), "assign");
        e && ("string" === typeof e ? g.className = cc11001100_hook("g.className", e, "assign") : Array.isArray(e) ? g.className = cc11001100_hook("g.className", e.join(" "), "assign") : x(g, e));
        2 < d.length && A(f, g, d);
        return g;
      }

      function A(a, c, b) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("b", b, "function-parameter");

        function d(m) {
          cc11001100_hook("m", m, "function-parameter");
          m && c.appendChild("string" === typeof m ? a.createTextNode(m) : m);
        }

        for (var f = cc11001100_hook("f", 2, "var-init"); f < b.length; f++) {
          var e = cc11001100_hook("e", b[f], "var-init");
          if (!l(e) || n(e) && 0 < e.nodeType) d(e);else {
            a: {
              if (e && "number" == typeof e.length) {
                if (n(e)) {
                  var g = cc11001100_hook("g", "function" == typeof e.item || "string" == typeof e.item, "var-init");
                  break a;
                }

                if ("function" === typeof e) {
                  g = cc11001100_hook("g", "function" == typeof e.item, "assign");
                  break a;
                }
              }

              g = cc11001100_hook("g", !1, "assign");
            }

            q(g ? r(e) : e, d);
          }
        }
      }

      ;
      /*  SPDX-License-Identifier: Apache-2.0 */

      k("ait", function (a) {
        var c = cc11001100_hook("c", z("IMG"), "var-init");
        c.src = cc11001100_hook("c.src", a, "assign");
        c.border = cc11001100_hook("c.border", "0", "assign");
        c.height = cc11001100_hook("c.height", 1, "assign");
        c.width = cc11001100_hook("c.width", 1, "assign");
        c.style.display = cc11001100_hook("c.style.display", "none", "assign");
        document.body.appendChild(c);
      });
      k("ast", function (a) {
        var c;
        a = cc11001100_hook("a", null === a ? "null" : void 0 === a ? "undefined" : a, "assign");

        if (void 0 === u) {
          var b = cc11001100_hook("b", null, "var-init");

          if ((c = cc11001100_hook("c", h.trustedTypes, "assign")) && c.createPolicy) {
            try {
              b = cc11001100_hook("b", c.createPolicy("goog#html", {
                createHTML: cc11001100_hook("createHTML", p, "object-key-init"),
                createScript: cc11001100_hook("createScript", p, "object-key-init"),
                createScriptURL: cc11001100_hook("createScriptURL", p, "object-key-init")
              }), "assign");
            } catch (e) {
              h.console && h.console.error(e.message);
            }

            u = cc11001100_hook("u", b, "assign");
          } else u = cc11001100_hook("u", b, "assign");
        }

        a = cc11001100_hook("a", (b = cc11001100_hook("b", u, "assign")) ? b.createScriptURL(a) : a, "assign");
        c = cc11001100_hook("c", new v(a, w), "assign");
        b = cc11001100_hook("b", a = cc11001100_hook("a", document, "assign"), "assign");
        b = cc11001100_hook("b", void 0 === b ? document : b, "assign");
        b = cc11001100_hook("b", b.createElement("script"), "assign");
        b.src = cc11001100_hook("b.src", c instanceof v && c.constructor === v ? c.g : "type_error:TrustedResourceUrl", "assign");
        var d, f;
        (d = cc11001100_hook("d", (c = cc11001100_hook("c", null == (f = cc11001100_hook("f", (d = cc11001100_hook("d", (b.ownerDocument && b.ownerDocument.defaultView || window).document, "assign")).querySelector, "assign")) ? void 0 : f.call(d, "script[nonce]"), "assign")) ? c.nonce || c.getAttribute("nonce") || "" : "", "assign")) && b.setAttribute("nonce", d);
        (d = cc11001100_hook("d", a.getElementsByTagName("script")[0], "assign")) && d.parentNode && d.parentNode.insertBefore(b, d);
      });
    }).call(this);
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d30205119\x26dcmadid\x3d560932305\x26dcmrenderingid\x3d183842082\x26dcmsiteid\x3d4091806\x26dcmplacementid\x3d370049296\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0hLqaf8kweG9uiMHEw1GA3F');
  })();
})();

(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = cc11001100_hook("window.GoogleTyFxhY", [], "assign");
  }

  window.GoogleTyFxhY.push({
    '_scs_': cc11001100_hook('_scs_', 'BDuzSJjcRZdqfMquFid4Pn_q7-AMAAAAAOAHgBAI', "object-key-init"),
    '_bgu_': cc11001100_hook('_bgu_', 'https://pagead2.googlesyndication.com/bg/kgPu8ucFjQWm9sPwItG3xGC9C84b-jPcUt_enD3F6OI.js', "object-key-init"),
    '_bgp_': cc11001100_hook('_bgp_', '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', "object-key-init"),
    '_ifr_': cc11001100_hook('_ifr_', 'false', "object-key-init"),
    '_isfl_': cc11001100_hook('_isfl_', 'false', "object-key-init")
  });
  var gsodar = cc11001100_hook("gsodar", document.createElement('script'), "var-init");
  gsodar.type = cc11001100_hook("gsodar.type", 'text/javascript', "assign");
  gsodar.async = cc11001100_hook("gsodar.async", true, "assign");
  gsodar.src = cc11001100_hook("gsodar.src", '//tpc.googlesyndication.com/sodar/UFYwWwmt.js', "assign");
  var s = cc11001100_hook("s", document.getElementsByTagName('script')[0], "var-init");
  s.parentNode.insertBefore(gsodar, s);
})();