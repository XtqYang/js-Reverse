if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}

document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'id="gcc_JjcRZZmCMdnAvcAP6M6I-AU"\x3e');

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
clsn("gcc_JjcRZZmCMdnAvcAP6M6I-AU");
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CJmtr_6exYEDFVlgDwIdaCcCXw\x22 href\x3d\x22https://ad.doubleclick.net/pcs/click?xai\x3dAKAOjssvQ6XwLopaDjNb6KLdjrEvYXqlfgA4Wq-2vbYo8OMx1VJP7Y1CwRlLtyrgxZX4Bq78-Yi1otUmisYYfy4EAvtlfpn7LZGgVtJ4BL9Ib9nNEOZvAWoHZM0J-0yXgd2D9RQlP3w13JASVFlcaA5Fm1achYFV8j9FUYo-E5qZzkGgzoU3JogOqMfa0HEcKd4inaKevHaKCjf86I9wtupK6QcNFgAC09aMh81HSFbutX5BE2reEIUSt4Os9znFKKbRlw9uoQKnDkVbNbfo340tmeMD-aGJ-VQN8aMpmD5EGwo5T6gf-GEvwl4vSVLUJ3YmuOtWpDRJXuBoFxhKw5G0y73H-fWEursS4TKjCeRQ6JmX-lZ44XJWRMo3OnOrT7i-RULJkdXrvtE7rbDbZxQ3u1xLKyu6sgXIEL7Fjdae10wxb5MpMef8qcDN2aV02FlDFyJWTeSOdcpHN_QTdRibRJ7V7Pae7cdtS9TQ8JxFVUu3-x-47LDHT33ZdXA7fZDOe1RVYyAOzNeJJhpKAueWQy1OQiikYDtazjdfxxDNyEKieBtgGI-dCmnYFaAhlZoETX_K5iMVsY4bF0iIzE6FAFxbefhtfQEB7HUlCQQ1efPs3PVwjDkve1LVBu_pDc4-wLLdq97OieSm6KJgCed-ftyG9S3JTNb-P6VkLbDK9P9A42Jo1CKvxgvhGHZli0qvfxN3mERL27QgnADcD1CMMGoAc2XnaLUwv3dhu419eFL-8PxTCg7f0TRF-oAe53LTUMJUu7GmT_HDMtG4ZqWaaN9YIG3Eka8zYkDBZjo9ruSCTvM2s2NF_SA37pIn79f-9F58UzNHTX6_qzgiwPz2_93CZeARZatBzvheKI1t_IFBhUfsUrVeYCZavlxlWFxEiJ23lHEcZt-Yzun6Q9F-mEapX-BGlcy-cZ4zayG3By_AclyamhaZNcahWkAWoGeH4bs8W0yxfgRjUtiogD0dm5pLBsstszr8EjKa2rF3NVGdkY73Y6z7V6z0wjIj5_MJao-FXPfRsw-hQIUdqHC-aCrS70rOybXMoimqP1kZfS6wLxjuGm5yx75j0tVX6UrX3v5AKdjjtcNMWSSzN6kEDnnXMm22fvePnIm4q8ArRTzHiuQk81F3OMHXvAFAPJNK-tPn9k2Dn8GnJuYcSTuMx5RgKQQzKFZprlcqnTWIc7vSrj4P41AS6xNV-bkllb-93rBfA4PAIkFzOuWhnFZ6RlG4x6Nb3EAESUdfP7VVvTe1NUPty-nAeZKK_vmukOQerZHYV3MDv7FBHut_Pis4Bmq19_xXh_Iw31BpAnVunZZNT1TEsY1fWeZUQVr7mCRNC_nWEg0njzTP37KMmFYJjjUdIQ\x26amp;sai\x3dAMfl-YSfroA6gJP3MvWWmQs8g-hMtIyVgfabdttwaadtvTcpBxQnIBQPrWFkhQuZS0gFZPVUTWhjzd9mt-ZoLxRcHqMeFyrs4eYGu9FafKWXyO2JbESARYpkoSbGJNUbNVCZsJ-Td0okvVeIoivugVQP2CORHcsO7I_50ExlP1Q5KkyS_8OdCj0wzRiEhEUCINfhbzgwGLdn507tf1cPAiHueNUWhplHQppUu0GKo9JENB5iCGoI9d0zEV9gASIOsct3GS9R2QwPgSXT6HtI5jaVwngWXkBIF18_iknDKUEfSgni1mOq_MBl6qIi4iymOOpHmuDXNuFJhHtsXgsVRvGXa18BGNWGqIuWYlgVvOnygwGB4c75P-0PiYuDEMC-NFrPOsqkdTKtUeJlExCf7djsDVaHd3knRPyh3C5JXEwo8euiIHVQexGT\x26amp;sig\x3dCg0ArKJSzLs-ac6zcT1z\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;crd\x3daHR0cHM6Ly9taWNyb3NvZnQuY29t\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://azure.microsoft.com/zh-cn/free/open-source/search/%3FOCID%3DAIDcmmknmz9ars_OLA_30205119_370049296_184235646%26dclid%3D%25edclid!\x22 attributionsrc\x3d\x22\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/17647877237054507581\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230920\x22 data-jcp-a-id\x3d\x22img_anch_CJmtr_6exYEDFVlgDwIdaCcCXw\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dc.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var c\x3da[b];if(c\x26\x26c.Math\x3d\x3dMath)return c}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var c\x3dca;a\x3da.split(\x22.\x22);for(var d\x3d0;d\x3ca.length-1;d++){var e\x3da[d];if(!(e in c))break a;c\x3dc[e]}a\x3da[a.length-1];d\x3dc[a];b\x3db(d);b!\x3dd\x26\x26null!\x3db\x26\x26aa(c,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},n; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)n\x3dObject.setPrototypeOf;else{var r;a:{var fa\x3d{a:!0},ha\x3d{};try{ha.__proto__\x3dfa;r\x3dha.a;break a}catch(a){}r\x3d!1}n\x3dr?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var ia\x3dn; function ja(a,b){a.prototype\x3dea(b.prototype);a.prototype.constructor\x3da;if(ia)ia(a,b);else for(var c in b)if(\x22prototype\x22!\x3dc)if(Object.defineProperties){var d\x3dObject.getOwnPropertyDescriptor(b,c);d\x26\x26Object.defineProperty(a,c,d)}else a[c]\x3db[c];a.v\x3db.prototype}var ka\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var c\x3d1;c\x3carguments.length;c++){var d\x3darguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)\x26\x26(a[e]\x3dd[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ka});da(\x22Number.isFinite\x22,function(a){return a?a:function(b){return\x22number\x22!\x3d\x3dtypeof b?!1:!isNaN(b)\x26\x26Infinity!\x3d\x3db\x26\x26-Infinity!\x3d\x3db}});/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var t\x3dthis||self;function la(a){t.setTimeout(function(){throw a;},0)};var u,v;a:{for(var ma\x3d[\x22CLOSURE_FLAGS\x22],w\x3dt,x\x3d0;x\x3cma.length;x++)if(w\x3dw[ma[x]],null\x3d\x3dw){v\x3dnull;break a}v\x3dw}var na\x3dv\x26\x26v[610401301];u\x3dnull!\x3dna?na:!1;var y,oa\x3dt.navigator;y\x3doa?oa.userAgentData||null:null;function z(a){return u?y?y.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function A(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function C(){return u?!!y\x26\x260\x3cy.brands.length:!1}function D(){return C()?z(\x22Chromium\x22):(A(\x22Chrome\x22)||A(\x22CriOS\x22))\x26\x26!(C()?0:A(\x22Edge\x22))||A(\x22Silk\x22)};var pa\x3dC()?!1:A(\x22Trident\x22)||A(\x22MSIE\x22);!A(\x22Android\x22)||D();D();A(\x22Safari\x22)\x26\x26(D()||(C()?0:A(\x22Coast\x22))||(C()?0:A(\x22Opera\x22))||(C()?0:A(\x22Edge\x22))||(C()?z(\x22Microsoft Edge\x22):A(\x22Edg/\x22))||C()\x26\x26z(\x22Opera\x22));var qa\x3d{},E\x3dnull;var ra\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,sa\x3d!pa\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var F\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,ta\x3dF?function(a,b){a[F]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function ua(a){var b\x3dG(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),H(a,b|1))} var G\x3dF?function(a){return a[F]|0}:function(a){return a.g|0},I\x3dF?function(a){return a[F]}:function(a){return a.g},H\x3dF?function(a,b){a[F]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function va(){var a\x3d[];ta(a,1);return a}function J(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var wa\x3d{};function K(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var L,M,xa\x3d[];H(xa,39);M\x3dObject.freeze(xa);function ya(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382\x3d{});a.__closure__error__context__984382.severity\x3db};function za(a){if(\x22number\x22!\x3d\x3dtypeof a)throw a\x3dError(),ya(a,\x22warning\x22),a;if(!Number.isFinite(a)){var b\x3dError();ya(b,\x22incident\x22);la(b)}return a};var Aa;function N(a,b,c){null\x3d\x3da\x26\x26(a\x3dAa);Aa\x3dvoid 0;if(null\x3d\x3da){var d\x3d96;c?(a\x3d[c],d|\x3d512):a\x3d[];b\x26\x26(d\x3dd\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();d\x3dG(a);if(d\x2664)return a;d|\x3d64;if(c\x26\x26(d|\x3d512,c!\x3d\x3da[0]))throw Error();a:{c\x3da;var e\x3dc.length;if(e){var f\x3de-1,g\x3dc[f];if(K(g)){d|\x3d256;b\x3d+!!(d\x26512)-1;e\x3df-b;1024\x3c\x3de\x26\x26(Ba(c,b,g),e\x3d1023);d\x3dd\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(g\x3d+!!(d\x26512)-1,b\x3dMath.max(b,e-g),1024\x3cb\x26\x26(Ba(c,g,{}),d|\x3d256,b\x3d1023),d\x3dd\x26-2095105|(b\x261023)\x3c\x3c11)}}H(a,d);return a} function Ba(a,b,c){for(var d\x3d1023+b,e\x3da.length,f\x3dd;f\x3ce;f++){var g\x3da[f];null!\x3dg\x26\x26g!\x3d\x3dc\x26\x26(c[f-b]\x3dg)}a.length\x3dd+1;a[d]\x3dc};function Ca(a,b){return Da(b)} function Da(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ra\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(sa){for(var b\x3d\x22\x22,c\x3d0,d\x3da.length-10240;c\x3cd;)b+\x3dString.fromCharCode.apply(null,a.subarray(c,c+\x3d10240));b+\x3dString.fromCharCode.apply(null,c?a.subarray(c):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!E){E\x3d{};c\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);d\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var f\x3dc.concat(d[e].split(\x22\x22));qa[e]\x3df;for(var g\x3d0;g\x3cf.length;g++){var h\x3df[g];void 0\x3d\x3d\x3dE[h]\x26\x26(E[h]\x3dg)}}}b\x3dqa[b];c\x3dArray(Math.floor(a.length/3));d\x3db[64]||\x22\x22;for(e\x3df\x3d0;f\x3ca.length-2;f+\x3d3){var l\x3da[f],m\x3da[f+1];h\x3da[f+2];g\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|m\x3e\x3e4];m\x3db[(m\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];c[e++]\x3dg+l+m+h}g\x3d0;h\x3dd;switch(a.length-f){case 2:g\x3da[f+1],h\x3db[(g\x2615)\x3c\x3c2]||d;case 1:a\x3da[f],c[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|g\x3e\x3e4]+h+d}a\x3dc.join(\x22\x22)}return a}}return a};function Ea(a,b,c,d,e,f){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26G(a)\x261?void 0:f\x26\x26G(a)\x262?a:Fa(a,b,c,void 0!\x3d\x3dd,e,f);else if(K(a)){var g\x3d{},h;for(h in a)g[h]\x3dEa(a[h],b,c,d,e,f);a\x3dg}else a\x3db(a,d);return a}}function Fa(a,b,c,d,e,f){var g\x3dd||c?G(a):0;d\x3dd?!!(g\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dEa(a[h],b,c,d,e,f);c\x26\x26c(g,a);return a}function Ga(a){return a.o\x3d\x3d\x3dwa?a.toJSON():Da(a)};function O(a,b,c){a\x3da.h;var d\x3dI(a);if(d\x262)throw Error();a:{var e\x3dJ(d);if(b\x3e\x3de){var f\x3dd;if(d\x26256)e\x3da[a.length-1];else{if(null\x3d\x3dc)break a;e\x3da[e+(+!!(d\x26512)-1)]\x3d{};f|\x3d256}e[b]\x3dc;f!\x3d\x3dd\x26\x26H(a,f)}else a[b+(+!!(d\x26512)-1)]\x3dc,d\x26256\x26\x26(c\x3da[a.length-1],b in c\x26\x26delete c[b])}}function P(a,b,c){if(null!\x3dc\x26\x26\x22string\x22!\x3d\x3dtypeof c)throw Error();O(a,b,c)};function Q(a,b,c){this.h\x3dN(a,b,c)}Q.prototype.toJSON\x3dfunction(){if(L)var a\x3dR(this,this.h,!1);else a\x3dFa(this.h,Ga,void 0,void 0,!1,!1),a\x3dR(this,a,!0);return a};function S(a){L\x3d!0;try{return JSON.stringify(a.toJSON(),Ca)}finally{L\x3d!1}}Q.prototype.o\x3dwa;Q.prototype.toString\x3dfunction(){return R(this,this.h,!1).toString()}; function R(a,b,c){var d\x3da.constructor.s,e\x3dJ(I(c?a.h:b)),f\x3d!1;if(d){if(!c){b\x3dArray.prototype.slice.call(b);var g;if(b.length\x26\x26K(g\x3db[b.length-1]))for(f\x3d0;f\x3cd.length;f++)if(d[f]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},g);break}f\x3d!0}e\x3db;c\x3d!c;g\x3dI(a.h);a\x3dJ(g);g\x3d+!!(g\x26512)-1;for(var h,l,m\x3d0;m\x3cd.length;m++)if(l\x3dd[m],l\x3ca){l+\x3dg;var k\x3de[l];null\x3d\x3dk?e[l]\x3dc?M:va():c\x26\x26k!\x3d\x3dM\x26\x26ua(k)}else h||(k\x3dvoid 0,e.length\x26\x26K(k\x3de[e.length-1])?h\x3dk:e.push(h\x3d{})),k\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dc?M:va():c\x26\x26k!\x3d\x3dM\x26\x26ua(k)}d\x3db.length;if(!d)return b; var q;if(K(h\x3db[d-1])){a:{var p\x3dh;e\x3d{};c\x3d!1;for(var B in p)a\x3dp[B],Array.isArray(a)\x26\x26a!\x3da\x26\x26(c\x3d!0),null!\x3da?e[B]\x3da:c\x3d!0;if(c){for(var Ta in e){p\x3de;break a}p\x3dnull}}p!\x3dh\x26\x26(q\x3d!0);d--}for(;0\x3cd;d--){h\x3db[d-1];if(null!\x3dh)break;var Ra\x3d!0}if(!q\x26\x26!Ra)return b;var X;f?X\x3db:X\x3dArray.prototype.slice.call(b,0,d);b\x3dX;f\x26\x26(b.length\x3dd);p\x26\x26b.push(p);return b};function Ha(a){this.h\x3dN(a)}ja(Ha,Q);function Ia(a){this.h\x3dN(a)}ja(Ia,Q);function Ja(){var a\x3dt;return a\x3dvoid 0\x3d\x3d\x3da?window:a};/*  SPDX-License-Identifier: Apache-2.0 */ var Ka\x3d/^(?!javascript:)(?:[a-z0-9+.-]+:|[^\x26:\\/?#]*(?:[\\/?#]|$))/i;var T;function La(a,b,c,d){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+c+\x22\x26dim\x3d\x22+d)+e[2]:a}function Ma(a){var b\x3da.currentTarget,c\x3db.querySelector(\x22img[alt]\x22);c\x26\x26(a\x3dU(a,c.offsetLeft,c.offsetTop,c.width,c.height),a\x3dLa(b.href,a.j,a.l,a.i),Ka.test(a)\x26\x26(b.href\x3da))} function V(a,b,c){var d\x3dJa();if(\x22buyer\x22\x3d\x3dc){var e;null\x3d\x3dd||null\x3d\x3d(e\x3dd.fence)||e.reportEvent({eventType:a,eventData:b,destination:[\x22buyer\x22]})}else if(\x22component-seller\x22\x3d\x3dc){var f;null\x3d\x3dd||null\x3d\x3d(f\x3dd.fence)||f.reportEvent({eventType:a,destination:[\x22component-seller\x22]})}} function W(a){var b\x3dnew Ia;P(b,1,a);a\x3dS(T);P(b,4,a);a\x3dS(b);var c,d;null\x3d\x3d(c\x3dJa())||null\x3d\x3d(d\x3dc.fence)||d.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:a,destination:[\x22buyer\x22],once:!0});V(\x22click\x22,S(b),\x22buyer\x22);V(\x22reserved.top_navigation\x22,null,\x22component-seller\x22);V(\x22click\x22,null,\x22component-seller\x22)}function U(a,b,c,d,e){return{j:+Math.round(a.clientX-b),l:+Math.round(a.clientY-c),i:+d+\x22x\x22+ +e,m:void 0}} function Na(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var Oa,Y\x3ddocument.currentScript;Oa\x3d(Y\x3dvoid 0\x3d\x3d\x3dY?null:Y)\x26\x26\x2274\x22\x3d\x3d\x3dY.getAttribute(\x22data-jc\x22)?Y:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dOa)throw Error(\x22JSC not found 74\x22);for(var Pa\x3d{},Qa\x3dOa.attributes,Z\x3dQa.length-1;0\x3c\x3dZ;Z--){var Sa\x3dQa[Z].name;0\x3d\x3d\x3dSa.indexOf(\x22data-jcp-\x22)\x26\x26(Pa[Sa.substring(9)]\x3dQa[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],f\x3da[\x22cc-button\x22],g\x3de?document.getElementById(e):null,h\x3df?document.getElementById(f):null;e\x3d\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22];f\x3dg\x26\x26h;T\x3dnew Ha;if(e){var l\x3df?g:b.querySelector(\x22img[alt]\x22);(f?g:b).addEventListener(\x22mousedown\x22,function(k){var q\x3dU(k,l.offsetLeft,l.offsetTop,l.clientWidth,l.clientHeight);k\x3dq.j;var p\x3dq.l,B\x3dq.i;q\x3dq.m;k\x26\x26O(T,2,null\x3d\x3dk?k:za(k));p\x26\x26O(T, 3,null\x3d\x3dp?p:za(p));B\x26\x26P(T,7,B);q\x26\x26P(T,4,q)});var m\x3da[\x22turtlex-event-ad-signals\x22];h?(h.addEventListener(\x22click\x22,function(){W(m)}),h.addEventListener(\x22auxclick\x22,function(){W(m)})):(b.addEventListener(\x22click\x22,function(){W(m)}),b.addEventListener(\x22auxclick\x22,function(){W(m)}))}else if(b.addEventListener(\x22mousedown\x22,Ma),f\x26\x26g.addEventListener(\x22mousedown\x22,function(k){k\x3dU(k,g.offsetLeft,g.offsetTop,g.clientWidth,g.clientHeight);k\x3dLa(h.href,k.j,k.l,k.i);Ka.test(k)\x26\x26(h.href\x3dk)}),c||d)b.addEventListener(\x22click\x22, function(k){Na(k,d)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Na(k,d)})})(Pa);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
document.write('\x3cscript\x3e(function () {function addIcon(){var container \x3d document.getElementsByClassName(\x22GoogleActiveViewClass\x22)[0];if (!container) {setTimeout(addIcon, 500);return;}var imgElem \x3d document.createElement(\x27img\x27);imgElem.src\x3d\x22https://static.googleadsserving.cn/pagead/images/cn/google_ad_cccccc_08.png\x22;imgElem.id \x3d \x22chinese_ad_label\x22;imgElem.style.position \x3d \x22absolute\x22;imgElem.style.left \x3d \x220px\x22;imgElem.style.bottom \x3d \x220px\x22;imgElem.style.zIndex \x3d \x222147483647\x22;container.appendChild(imgElem);}addIcon();})();\x3c/script\x3e');
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:13px;right:0px;top:0px;position:absolute;width:41px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:36px;}.abgc .il-icon{height:15px;width:22px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 24 16\x22\x3e\x3cpath d\x3d\x22M10.90 4.69L10.90 5.57L3.17 5.57L3.17 7.22L3.17 7.22Q3.17 9.15 3.06 10.11L3.06 10.11L3.06 10.11Q2.95 11.07 2.58 11.92L2.58 11.92L2.58 11.92Q2.21 12.77 1.27 13.56L1.27 13.56L0.59 12.93L0.59 12.93Q2.29 11.82 2.29 8.66L2.29 8.66L2.29 4.69L6.11 4.69L6.11 2.95L7.00 2.95L7.00 4.69L10.90 4.69ZM23.00 7.34L23.00 8.22L12.80 8.22L12.80 7.34L17.55 7.34L17.55 5.53L15.12 5.53L15.12 5.53Q14.55 6.53 13.86 7.07L13.86 7.07L13.10 6.46L13.10 6.46Q14.44 5.46 14.95 3.33L14.95 3.33L15.84 3.55L15.84 3.55Q15.77 3.86 15.49 4.65L15.49 4.65L17.55 4.65L17.55 2.84L18.47 2.84L18.47 4.65L21.86 4.65L21.86 5.53L18.47 5.53L18.47 7.34L23.00 7.34ZM21.45 8.88L21.45 13.63L20.53 13.63L20.53 12.78L15.32 12.78L15.32 13.63L14.41 13.63L14.41 8.88L21.45 8.88ZM15.32 11.90L20.53 11.90L20.53 9.76L15.32 9.76L15.32 11.90Z\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAW4Q9SJxtMGLtsm--JsnQWfVMkEFSQ3D9TNrurmQ0V0rHpCznddnwvcACHZNnaD_3tjg29_HZJ1XtSUOuRKWF4aZiNSVrgf9jE8YsBbLncl93aFtzzNyVmpTDHxpsaKaHMF0zwIsbXI2R6JNcTB65_u4FdjpjRryLExzqtmnXcKkFQYK4v2QqBJinFYZigWFtq7YZQ4p3KQoW47mEv0ZSEGBdoolC68sIgZyDG7OmcOobXsJ4HuZBgCRhk7_Q3QlddhJ2nYp_m7uzyETZQdgOMwwSSgbgtatMSfx-fl3SjT07tuREo2ihGDo3D1J78rkXq_FulSP1eUZqO9sLuVEOetqyANzLI99d5auFR0rZaPeeFR7xbpFrvdNP7VP2Pq9ujz_H9ypf9FELIvzRskV4_oMovollHFQjgu0txvUs3ilRrLLDrYfSgyYJ6CCYs80HAAR5GwmDf2CeCupG29axX7LuTb4rXw4-1wJj4E0HbGdbGzAr_Hwu1x3zsYMoGyO7DOU2qfEelqfSBICyl6J9z8M1s7_Yh4zZ6hqoJCinpXPETUTwhEVEglocthNgd1JqF1my0V4INd6M0NQ9ZYE1dpXr4xvZ2W56v9cmib5OQmqJbhfWQP2TGpfC_92WaIhHTwcOtmZu10FzXLShXlmoeJmN7sNZxWQI3OuBy0894jnVBw_iYW3MkJzVmdcyoNXTwW1_OM3H2KJ7QBofS-mMHyPR205byXgU_yrlDCCO5964JLfuq7E_xqCPpiv91nWB2wpH5z_S0_WVYvtnvP9vuYO0qgLhfcFyoNTRNJtUg96x2a2nMryfEszhOb0-L8VjrxXHSA9G1UO2m3fj7aB76yfF0jRL3p8HsK4gdQ5gwh5P5TY5hpa97J9Ovmd08LLyuYs1vmGP5DtbI0l_pHpdls9hnVxnsxbM-7RRq0sxBuRvx6n101DgmsEJ2smoe0U7hauf8UMKhDG_C8gHQfpamDk9i-dC5t9sERJT0SioQ9N8_f4XWtZbJqBtoa0kgo2ed10gZBQGYn2ngDOezecw-G8MevTVKUW3kFSYLS-TP568b5AEr6ywj7EIPCZDa_1AvSbUx3vPoln4YmJyGbm-eIO5Wucc86sr7jr7TJ9GZbm_m4DHeF3lzVR-sWS3kaNPIT2n4kors71VByDvVxSxRSP_kC3J9gtgDw-fUN1QzGBqr5ZRckGlMn08eYtsCO4km9KkonGLfqN9gXH-mDIBA39GsoWfvZ5Obwz5ClYCvFsNc_kzJe2k69w3JHkwnHsqU65kDIBuv-DaQK_Vl3CtDf53kexFeRl4Nko2Y6-9g15HdtZa6p0bHZopBui7EBjdrJQHCg5-N-JjAjA887rM919MlfxWZmqJX_5Iuw9yrplan4aXMa9E8YMIJ0gzOMjD_xKLmj1JBRkwAPQ7KMJfED4D2LOuNw9KV8U9kA6m0Do3mnbMBiAK9DzNnEgqw5R6y9o-NhgRAEPX1iwObQzEBtODUlZfqZj13a6T-euF303bHKpDxCtheKsfE2OtB7j0oLhrAaRfMSOMK8c6lDnIXOuvgsjpqFk1_gii2EFiMLOPzKtGijDi1y-8GsmTdyoVkt0zlAv39K_S0M624BOxfKoGfZBg0F0US9AVgug7u2nAAmkJh8wv_8q5XiLPzjkDT3JH8oMWgKGh8evXlcBUfNJpsG0F81nPLk5_5I25Cs9jnxKpArB5ktD6Kdqb3tlmQ2nBs4B0cU\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://static.googleadsserving.cn/pagead/js/r20230920/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20230920\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCIvRzIjcRZZapDJrY9wX7-5b4B5H1tbhxip3QrOsRho-KrYUQEAEg0PPQX2CdyeCB6AWgAY68oPUCyAEJqQJAf0VVdWOCPqgDAcgDmwSqBPIBT9BFP1a4DWBLn01ByEMEjZLFGCfWcmdQcaYCzxFNd1Hc2ZgJ0A1Hr61YgO16FKNPoENpY-h_D0BJ9KCNGSrxwa6stoRvfotqRPS738ZfYqz8UHr4Mrj8D9qjqhzkqKbdRf0OszK4Zw9P2y9hGrVOk9JM5K2ABdIAOSh5OdjgfXpbKhFtVif3Cq-8PeeE9jX9yFV8ulVPk03xv2tzeZqenKgMoZvRuv9yyHSj_Dx4rM3K4TsHoEBGVCIIAzYLsgOKohJMPDDKVRsgrdnhujo0vcuwZVIo6IA86y8e4Rc7gsW_TfEUbwEqIh4wPgNclZo1Ge3ABLKevea1BOAEA4gFofS63UuQBgGgBkyAB9rD34oBiAcBkAcCqAfZtrECqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgHpKOxAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH_56xAqgH35-xAtgHANIIFwgAEAIYGjIBADoHn9CAgICABEi9_cE6gAoBmAsByAsBgAwBqg0CQ07IDQGwE8ej7hTQEwDYEw2IFAXYFAHQFQH4FgGAFwE\\u0026sigh\x3dsFeTbhxXEK0\\u0026cid\x3dCAQSQgDICaaNtQPHIBnNDS5uxcGm3rLrYHtYVb2tNQGCsxmgt_rMM1z1qGefv7NHKlPWdY0FrUtV_cE8L16IUxu7GOviGxgB\x26quot;,\x26quot;2K8C_V8Y4icIip3QrOsREKH0ut1LGL6h_YoBIhNhenVyZS5taWNyb3NvZnQuY29tMggIBRMYi7USFEIXY2EtcHViLTUzNjYwNjk0MTUwMTI2NzZIElgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;此广告有什么问题？\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们将对此广告进行审核，以便改善您在今后的体验。\x26quot;,\x26quot;感谢您的反馈！\x26quot;,\x26quot;我们会根据您的反馈审核此网站上的广告。\x26quot;,null,null,null,\x26quot;即将关闭广告：%1$d 秒\x26quot;,\x26quot;谷歌广告\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.sojson.com/jscodeconfusion.html%26gl%3DCN%26hl%3Dzh%26ai0%3D\\u0026usg\x3dAOvVaw2sR3gx8b51_ZcdrMruQXA4\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,0,[[\x26quot;停止显示此广告\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;此广告有什么问题？\x26quot;,[[\x26quot;对此广告不感兴趣\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;多次看到此广告\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;广告内容不当\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]],[\x26quot;广告遮挡内容\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;广告选择\x26quot;,\x26quot;%1$s 已关闭此广告\x26quot;,null,\x26quot;https://www.gstatic.cn/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;停止显示此广告\x26quot;,\x26quot;我们尽量不再显示该广告\x26quot;,null,null,null,null,null,null,\x26quot;查看我的 Google 广告设置\x26quot;,null,\x26quot;https://www.gstatic.cn\x26quot;,\x26quot;\x26quot;,\x26quot;%1$s 提供的广告\x26quot;,\x26quot;广告设置\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAX9W1tbW251bGwsWzIsMTAsMjJdLG51bGwsbnVsbCxudWxsLFsiODA2MTUiXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCx0cnVlLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW251bGwsIjI5MTQ1OTI2MiJdXSxbbnVsbCwiaHR0cHM6Ly9nb29nbGVhZHMuZy5kb3VibGVjbGljay5uZXQvcGFnZWFkL2ludGVyYWN0aW9uLz9haT1DSXZSeklqY1JaWmFwREpyWTl3WDctNWI0QjVIMXRiaHhpcDNRck9zUmhvLUtyWVVRRUFFZzBQUFFYMkNkeWVDQjZBV2dBWTY4b1BVQ3lBRUpxUUpBZjBWVmRXT0NQcWdEQWNnRG13U3FCUElCVDlCRlAxYTREV0JMbjAxQnlFTUVqWkxGR0NmV2NtZFFjYVlDenhGTmQxSGMyWmdKMEExSHI2MVlnTzE2RktOUG9FTnBZLWhfRDBCSjlLQ05HU3J4d2E2c3RvUnZmb3RxUlBTNzM4WmZZcXo4VUhyNE1yajhEOXFqcWh6a3FLYmRSZjBPc3pLNFp3OVAyeTloR3JWT2s5Sk01SzJBQmRJQU9TaDVPZGpnZlhwYktoRnRWaWYzQ3EtOFBlZUU5alg5eUZWOHVsVlBrMDN4djJ0emVacWVuS2dNb1p2UnV2OXl5SFNqX0R4NHJNM0s0VHNIb0VCR1ZDSUlBellMc2dPS29oSk1QRERLVlJzZ3Jkbmh1am8wdmN1d1pWSW82SUE4Nnk4ZTRSYzdnc1dfVGZFVWJ3RXFJaDR3UGdOY2xabzFHZTNBQkxLZXZlYTFCT0FFQTRnRm9mUzYzVXVRQmdHZ0JreUFCOXJEMzRvQmlBY0JrQWNDcUFmWnRyRUNxQWVPemh1b0I1UFlHNmdIN3BheEFxZ0hfcDZ4QXFnSHBLT3hBcWdIMWNrYnFBZW12aHVvQjVvR3FBZnowUnVvQjViWUc2Z0hxcHV4QXFnSGc2MnhBcWdIXzU2eEFxZ0gzNS14QXRnSEFOSUlGd2dBRUFJWUdqSUJBRG9IbjlDQWdJQ0FCRWk5X2NFNmdBb0JtQXNCeUFzQmdBd0JxZzBDUTA3SURRR3dFOGVqN2hUUUV3RFlFdzJJRkFYWUZBSFFGUUg0RmdHQUZ3RVx1MDAyNnNpZ2g9c0ZlVGJoeFhFSzBcdTAwMjZjaWQ9Q0FRU1FnRElDYWFOdFFQSElCbk5EUzV1eGNHbTNyTHJZSHRZVmIydE5RR0NzeG1ndF9yTU0xejFxR2VmdjdOSEtsUFdkWTBGclV0Vl9jRThMMTZJVXh1N0dPdmlHeGdCIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZGlzcGxheWFkcy1mb3JtYXRzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hZHMvcHJldmlldy9jb250ZW50LmpzP2NsaWVudD13dGFcdTAwMjZvYmZ1c2NhdGVkQ3VzdG9tZXJJZD02NzY3ODIzNDM4XHUwMDI2Y3JlYXRpdmVJZD02NjM2ODE1MjA3MjJcdTAwMjZ2ZXJzaW9uSWQ9MFx1MDAyNmFkR3JvdXBDcmVhdGl2ZUlkPTYxMjkzMTczNTE3OFx1MDAyNnNpZz1BQ2lWQl96bUdUb2lQT2lvdWI0UTNhQy1rV1lWeW04ZFlnIl0sbnVsbCxudWxsLDIsIjJLOENfVjhZNGljSWlwM1FyT3NSRUtIMHV0MUxHTDZoX1lvQkloTmhlblZ5WlM1dGFXTnliM052Wm5RdVkyOXRNZ2dJQlJNWWk3VVNGRUlYWTJFdGNIVmlMVFV6TmpZd05qazBNVFV3TVRJMk56WklFbGdBY0FFIiwiMjAzMjg2NTk0ODkiXV1dLFtudWxsLG51bGwsMSwxLDFdLFtudWxsLG51bGwsIkNOIl1de4x8dILt_6yXPJ6MGHDsAYnwPsCSYELfK44v8ROLhj7IDMtPz5EJDdlRsYSG82jnw-gODNiKsuQ0vahJJRfinTZFfXhO-tKrLFnAuPe8ZhnsvqR_7TcBAgRVlYDXJGBjJFUc5yRLfA9j3hFw526smmyEHTnKnTTGfQLb1QA7_TXUk5YwJCUbzQchbXKMShDuoofa_m81lqGxPLKfDp508qGQO0uMh8EobO3OB3kHlUQ5HFxyZYn6GK0Q3GbYbjg75LR3_gJsSuLyIijJubwuLZ-ydz8BrRQwzPghJ3fpyhg3DviA6xZ1VkqeSlK8KLELLMQPptsRmHu1dZ6Rsgk8hQ,JqzJlxG0IIzCVjYf5XcdVQ\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAW4Q9SJxtMGLtsm--JsnQWfVMkEFSQ3D9TNrurmQ0V0rHpCznddnwvcACHZNnaD_3tjg29_HZJ1XtSUOuRKWF4aZiNSVrgf9jE8YsBbLncl93aFtzzNyVmpTDHxpsaKaHMF0zwIsbXI2R6JNcTB65_u4FdjpjRryLExzqtmnXcKkFQYK4v2QqBJinFYZigWFtq7YZQ4p3KQoW47mEv0ZSEGBdoolC68sIgZyDG7OmcOobXsJ4HuZBgCRhk7_Q3QlddhJ2nYp_m7uzyETZQdgOMwwSSgbgtatMSfx-fl3SjT07tuREo2ihGDo3D1J78rkXq_FulSP1eUZqO9sLuVEOetqyANzLI99d5auFR0rZaPeeFR7xbpFrvdNP7VP2Pq9ujz_H9ypf9FELIvzRskV4_oMovollHFQjgu0txvUs3ilRrLLDrYfSgyYJ6CCYs80HAAR5GwmDf2CeCupG29axX7LuTb4rXw4-1wJj4E0HbGdbGzAr_Hwu1x3zsYMoGyO7DOU2qfEelqfSBICyl6J9z8M1s7_Yh4zZ6hqoJCinpXPETUTwhEVEglocthNgd1JqF1my0V4INd6M0NQ9ZYE1dpXr4xvZ2W56v9cmib5OQmqJbhfWQP2TGpfC_92WaIhHTwcOtmZu10FzXLShXlmoeJmN7sNZxWQI3OuBy0894jnVBw_iYW3MkJzVmdcyoNXTwW1_OM3H2KJ7QBofS-mMHyPR205byXgU_yrlDCCO5964JLfuq7E_xqCPpiv91nWB2wpH5z_S0_WVYvtnvP9vuYO0qgLhfcFyoNTRNJtUg96x2a2nMryfEszhOb0-L8VjrxXHSA9G1UO2m3fj7aB76yfF0jRL3p8HsK4gdQ5gwh5P5TY5hpa97J9Ovmd08LLyuYs1vmGP5DtbI0l_pHpdls9hnVxnsxbM-7RRq0sxBuRvx6n101DgmsEJ2smoe0U7hauf8UMKhDG_C8gHQfpamDk9i-dC5t9sERJT0SioQ9N8_f4XWtZbJqBtoa0kgo2ed10gZBQGYn2ngDOezecw-G8MevTVKUW3kFSYLS-TP568b5AEr6ywj7EIPCZDa_1AvSbUx3vPoln4YmJyGbm-eIO5Wucc86sr7jr7TJ9GZbm_m4DHeF3lzVR-sWS3kaNPIT2n4kors71VByDvVxSxRSP_kC3J9gtgDw-fUN1QzGBqr5ZRckGlMn08eYtsCO4km9KkonGLfqN9gXH-mDIBA39GsoWfvZ5Obwz5ClYCvFsNc_kzJe2k69w3JHkwnHsqU65kDIBuv-DaQK_Vl3CtDf53kexFeRl4Nko2Y6-9g15HdtZa6p0bHZopBui7EBjdrJQHCg5-N-JjAjA887rM919MlfxWZmqJX_5Iuw9yrplan4aXMa9E8YMIJ0gzOMjD_xKLmj1JBRkwAPQ7KMJfED4D2LOuNw9KV8U9kA6m0Do3mnbMBiAK9DzNnEgqw5R6y9o-NhgRAEPX1iwObQzEBtODUlZfqZj13a6T-euF303bHKpDxCtheKsfE2OtB7j0oLhrAaRfMSOMK8c6lDnIXOuvgsjpqFk1_gii2EFiMLOPzKtGijDi1y-8GsmTdyoVkt0zlAv39K_S0M624BOxfKoGfZBg0F0US9AVgug7u2nAAmkJh8wv_8q5XiLPzjkDT3JH8oMWgKGh8evXlcBUfNJpsG0F81nPLk5_5I25Cs9jnxKpArB5ktD6Kdqb3tlmQ2nBs4B0cU\x26quot;,\x26quot;为什么显示此广告？\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],250,300,0,null,null,0,null,null,\x26quot;right\x26quot;,0,null,\x26quot;r20230920/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');

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
    eeid: cc11001100_hook("eeid", 'JjcRZZmCMdnAvcAP6M6I-AU', "object-key-init"),
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
  window.stcc = cc11001100_hook("window.stcc", btrp("https://ad.doubleclick.net/pcs/view?xai\x3dAKAOjsvGVnc1rVDqGqNl3zBTw6JSbEr3Eb0I3lidWYqKUaEYX-E8rpn5JCxhKD2uX2diJH4aft7keLCM4k5tSi3ZMbDu20Y7nGeILCd9TrTsI81kF13eyGW4YN-7vTr1wciRqiBO3qp5v-M9E43yma52soavHfUzJcVsv2sV6Qzw0ffRU1D-_ov8-HZZJ0WRPr82Hfvlvz8_V6v4evxPdjHQajGQHacezasB20mgmyE01Incs7EzHPc54cGT0od4B2Crh48RFd1Iuf0NJFdCNeDqQIeVayynR3I8HCg3GWenOgJorDQqOon1FrO8nVUuyS1jX5d0gwXwOCVO8MVFf0HAG_l8foPPW7HarP1m3PHtMjjHZHPRZbMNdjYWTsZYZLeei-mD2PXTzBpFCs-oLd_UleY_RYHHH1Dh5Q9nX8gvLNsZfve4I2DSHZHdVLnNFwnHxec5VNHkKpDA2DzO_PlrCseEhVUSrRa9LbCWK9RCR8x5JiWD5SLjlh7iLD0Mw9lQIkjU_zheGL9oe7tIDBhmuyqVoEuqoD_Hf7-Z_GT28JsP5EiE_roCLxUhyIsiLvRyRXXikmDD2hXr-jRIZ2OSQde95tkfqLXxCpLOAYDPCpiaEXdMlq9mneM5ihOWCalXm0znx5vt7qGBGC8BJPByj8NzHGDrzbeJtO4AaJP0IkPgqIRePajDXY3uEOcSlqVq3JvaFe_zVITZ-gL0ICjFLmLFVw22WobhuW0bAzfgwZSdglqBWC_fPBjOCsIAfErTymQyXkLsh5Wsinuo71rG5LaRrU3yxtAPnYCG3EeSaBzO91o95PUtemVmZIp7jD4BQiR1_6q-NhvmLCNeSIozUbw-96QLgfyduv-71egA66Oi62KG1eWgzJYoLm43cKzYgpT9l-vgYHF40F4snBnNUeMW0mZSo67zr1qPqC11VijTaMRpltgTLXG4_3o0GzwJn5g_8Y1C-ELWfxsQN_q-OkwhnmcNHlcUsFUa4-jlozkIueveXXVjtlNgpIarrlOfdDMpgRU3bByIEgdLdTO-PVWe-pjDCnXYlls9bjpz__EpeoM7ONERxouBJpz5PE-8t2Lt9CHfDeszRrec96-RNZHNzyQVgX80OPPARMTz8OZ5mCoeKdvM2t8PPFB95tO-wRALGXWpfZfTmqdsaeTpbgDUsbf3z2_8qW1B-871JUJxpNDKfW5RrLf7gIk6Fm31557_ULi-U0ias_YTLO8Y81r4eoZa9ov-wFwnZV2Tv3tv20Kt0W8xZlXElFqoOPE_aMEcA4FUcUWllW7MZPnXVu7-kYrEDp3Uy6fBJbuFcGE74xE\x26sai\x3dAMfl-YQoCaPpJsnquw15wbtR2k57BBHY0haWrLIlPT9JGwP5CdPpgS6ljN48Th585y-4T4ltIFFxg1nrc3TRoNi4KqhZ-MBOK7yOWFLUVIs8BStDxLe7SZR6ENdNueM-Gycfygb4LcpkiiN3v9M8E245i43JV-QxJJAiyLStLWbElEO6tlI0n3CIUFZ1wOaadSqcnLZLNK9fFAP8NnbMphraJ-Yq4de13RNDvFNwwRriDCi4JpiMmInyP1Yhs7fpKKSmZexikm0KxIXgFkv6Dl7-qK2qlogZYbzrP7cAhDqs\x26sig\x3dCg0ArKJSzGCWbq7KQlO8EAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26crd\x3daHR0cHM6Ly9taWNyb3NvZnQuY29t\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_JjcRZZmCMdnAvcAP6M6I-AU")), "assign");
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
    pdib3('https://analyticspixel.microsoft.com/aid/imp?dcmadvertiserid\x3d8391437\x26dcmcampaignid\x3d30205119\x26dcmadid\x3d560932305\x26dcmrenderingid\x3d184309730\x26dcmsiteid\x3d4091806\x26dcmplacementid\x3d370049296\x26customer\x3dMicrosoft\x26dv360auctionid\x3dABAjH0hgzKDvNlrF57TgR4pOBAVD');
  })();
})();

(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = cc11001100_hook("window.GoogleTyFxhY", [], "assign");
  }

  window.GoogleTyFxhY.push({
    '_scs_': cc11001100_hook('_scs_', 'Bn3fvJjcRZZmCMdnAvcAP6M6I-AUAAAAAOAHgBAI', "object-key-init"),
    '_bgu_': cc11001100_hook('_bgu_', 'https://pagead2.googlesyndication.com/bg/tGcDLxZnxcZjneq6ZTfMhLSKmVRaNAcBIKHxIKG0fIc.js', "object-key-init"),
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