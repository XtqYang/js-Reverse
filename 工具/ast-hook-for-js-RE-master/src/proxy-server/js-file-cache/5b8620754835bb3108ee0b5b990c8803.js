/*!
 * html2canvas 1.0.0-rc.7 <https://html2canvas.hertzen.com>
 * Copyright (c) 2020 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!function (A, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", e(), "assign") : "function" == typeof define && define.amd ? define(e) : (A = cc11001100_hook("A", A || self, "assign")).html2canvas = cc11001100_hook("(A = A || self).html2canvas", e(), "assign");
}(this, function () {
  "use strict";

  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
        See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */
  var r = function (A, e) {
    return (r = cc11001100_hook("r", Object.setPrototypeOf || {
      __proto__: cc11001100_hook("__proto__", [], "object-key-init")
    } instanceof Array && function (A, e) {
      A.__proto__ = cc11001100_hook("A.__proto__", e, "assign");
    } || function (A, e) {
      for (var t in e) e.hasOwnProperty(t) && (A[t] = cc11001100_hook("A[t]", e[t], "assign"));
    }, "assign"))(A, e);
  };
  function A(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    function t() {
      this.constructor = cc11001100_hook("this.constructor", A, "assign");
    }
    r(A, e), A.prototype = cc11001100_hook("A.prototype", null === e ? Object.create(e) : (t.prototype = cc11001100_hook("t.prototype", e.prototype, "assign"), new t()), "assign");
  }
  var K = function () {
    return (K = cc11001100_hook("K", Object.assign || function (A) {
      for (var e, t = cc11001100_hook("t", 1, "var-init"), r = cc11001100_hook("r", arguments.length, "var-init"); t < r; t++) for (var n in e = cc11001100_hook("e", arguments[t], "assign")) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = cc11001100_hook("A[n]", e[n], "assign"));
      return A;
    }, "assign")).apply(this, arguments);
  };
  function a(B, s, o, i) {
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new (o || (o = cc11001100_hook("o", Promise, "assign")))(function (A, e) {
      function t(A) {
        cc11001100_hook("A", A, "function-parameter");
        try {
          n(i.next(A));
        } catch (A) {
          e(A);
        }
      }
      function r(A) {
        cc11001100_hook("A", A, "function-parameter");
        try {
          n(i.throw(A));
        } catch (A) {
          e(A);
        }
      }
      function n(e) {
        cc11001100_hook("e", e, "function-parameter");
        e.done ? A(e.value) : new o(function (A) {
          A(e.value);
        }).then(t, r);
      }
      n((i = cc11001100_hook("i", i.apply(B, s || []), "assign")).next());
    });
  }
  function S(t, r) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var n,
      B,
      s,
      A,
      o = cc11001100_hook("o", {
        label: cc11001100_hook("label", 0, "object-key-init"),
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: cc11001100_hook("trys", [], "object-key-init"),
        ops: cc11001100_hook("ops", [], "object-key-init")
      }, "var-init");
    return A = cc11001100_hook("A", {
      next: cc11001100_hook("next", e(0), "object-key-init"),
      throw: cc11001100_hook("throw", e(1), "object-key-init"),
      return: cc11001100_hook("return", e(2), "object-key-init")
    }, "assign"), "function" == typeof Symbol && (A[Symbol.iterator] = cc11001100_hook("A[Symbol.iterator]", function () {
      return this;
    }, "assign")), A;
    function e(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (A) {
        return function (e) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = cc11001100_hook("n", 1, "assign"), B && (s = cc11001100_hook("s", 2 & e[0] ? B.return : e[0] ? B.throw || ((s = cc11001100_hook("s", B.return, "assign")) && s.call(B), 0) : B.next, "assign")) && !(s = cc11001100_hook("s", s.call(B, e[1]), "assign")).done) return s;
            switch (B = cc11001100_hook("B", 0, "assign"), s && (e = cc11001100_hook("e", [2 & e[0], s.value], "assign")), e[0]) {
              case 0:
              case 1:
                s = cc11001100_hook("s", e, "assign");
                break;
              case 4:
                return o.label++, {
                  value: cc11001100_hook("value", e[1], "object-key-init"),
                  done: cc11001100_hook("done", !1, "object-key-init")
                };
              case 5:
                o.label++, B = cc11001100_hook("B", e[1], "assign"), e = cc11001100_hook("e", [0], "assign");
                continue;
              case 7:
                e = cc11001100_hook("e", o.ops.pop(), "assign"), o.trys.pop();
                continue;
              default:
                if (!(s = cc11001100_hook("s", 0 < (s = cc11001100_hook("s", o.trys, "assign")).length && s[s.length - 1], "assign")) && (6 === e[0] || 2 === e[0])) {
                  o = cc11001100_hook("o", 0, "assign");
                  continue;
                }
                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                  o.label = cc11001100_hook("o.label", e[1], "assign");
                  break;
                }
                if (6 === e[0] && o.label < s[1]) {
                  o.label = cc11001100_hook("o.label", s[1], "assign"), s = cc11001100_hook("s", e, "assign");
                  break;
                }
                if (s && o.label < s[2]) {
                  o.label = cc11001100_hook("o.label", s[2], "assign"), o.ops.push(e);
                  break;
                }
                s[2] && o.ops.pop(), o.trys.pop();
                continue;
            }
            e = cc11001100_hook("e", r.call(t, o), "assign");
          } catch (A) {
            e = cc11001100_hook("e", [6, A], "assign"), B = cc11001100_hook("B", 0, "assign");
          } finally {
            n = cc11001100_hook("n", s = cc11001100_hook("s", 0, "assign"), "assign");
          }
          if (5 & e[0]) throw e[1];
          return {
            value: cc11001100_hook("value", e[0] ? e[1] : void 0, "object-key-init"),
            done: cc11001100_hook("done", !0, "object-key-init")
          };
        }([e, A]);
      };
    }
  }
  var I = cc11001100_hook("I", (n.prototype.add = cc11001100_hook("n.prototype.add", function (A, e, t, r) {
    return new n(this.left + A, this.top + e, this.width + t, this.height + r);
  }, "assign"), n.fromClientRect = cc11001100_hook("n.fromClientRect", function (A) {
    return new n(A.left, A.top, A.width, A.height);
  }, "assign"), n), "var-init");
  function n(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    this.left = cc11001100_hook("this.left", A, "assign"), this.top = cc11001100_hook("this.top", e, "assign"), this.width = cc11001100_hook("this.width", t, "assign"), this.height = cc11001100_hook("this.height", r, "assign");
  }
  for (var T = function (A) {
      return I.fromClientRect(A.getBoundingClientRect());
    }, c = function (A) {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", A.length, "var-init"); t < r;) {
        var n = cc11001100_hook("n", A.charCodeAt(t++), "var-init");
        if (55296 <= n && n <= 56319 && t < r) {
          var B = cc11001100_hook("B", A.charCodeAt(t++), "var-init");
          56320 == (64512 & B) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--);
        } else e.push(n);
      }
      return e;
    }, l = function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
      var t = cc11001100_hook("t", A.length, "var-init");
      if (!t) return "";
      for (var r = cc11001100_hook("r", [], "var-init"), n = cc11001100_hook("n", -1, "var-init"), B = cc11001100_hook("B", "", "var-init"); ++n < t;) {
        var s = cc11001100_hook("s", A[n], "var-init");
        s <= 65535 ? r.push(s) : (s -= cc11001100_hook("s", 65536, "assign"), r.push(55296 + (s >> 10), s % 1024 + 56320)), (n + 1 === t || 16384 < r.length) && (B += cc11001100_hook("B", String.fromCharCode.apply(String, r), "assign"), r.length = cc11001100_hook("r.length", 0, "assign"));
      }
      return B;
    }, e = cc11001100_hook("e", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"), Q = cc11001100_hook("Q", "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) Q[e.charCodeAt(t)] = cc11001100_hook("Q[e.charCodeAt(t)]", t, "assign");
  function B(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }
  var s = cc11001100_hook("s", (o.prototype.get = cc11001100_hook("o.prototype.get", function (A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535) return e = cc11001100_hook("e", ((e = cc11001100_hook("e", this.index[A >> 5], "assign")) << 2) + (31 & A), "assign"), this.data[e];
      if (A <= 65535) return e = cc11001100_hook("e", ((e = cc11001100_hook("e", this.index[2048 + (A - 55296 >> 5)], "assign")) << 2) + (31 & A), "assign"), this.data[e];
      if (A < this.highStart) return e = cc11001100_hook("e", 2080 + (A >> 11), "assign"), e = cc11001100_hook("e", this.index[e], "assign"), e += cc11001100_hook("e", A >> 5 & 63, "assign"), e = cc11001100_hook("e", ((e = cc11001100_hook("e", this.index[e], "assign")) << 2) + (31 & A), "assign"), this.data[e];
      if (A <= 1114111) return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, "assign"), o), "var-init");
  function o(A, e, t, r, n, B) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    this.initialValue = cc11001100_hook("this.initialValue", A, "assign"), this.errorValue = cc11001100_hook("this.errorValue", e, "assign"), this.highStart = cc11001100_hook("this.highStart", t, "assign"), this.highValueIndex = cc11001100_hook("this.highValueIndex", r, "assign"), this.index = cc11001100_hook("this.index", n, "assign"), this.data = cc11001100_hook("this.data", B, "assign");
  }
  function C(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var n = cc11001100_hook("n", r[t], "var-init");
    if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n) for (var B = cc11001100_hook("B", t, "var-init"); B <= r.length;) {
      if ((i = cc11001100_hook("i", r[++B], "assign")) === e) return !0;
      if (i !== H) break;
    }
    if (n === H) for (B = cc11001100_hook("B", t, "assign"); 0 < B;) {
      var s = cc11001100_hook("s", r[--B], "var-init");
      if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s) for (var o = cc11001100_hook("o", t, "var-init"); o <= r.length;) {
        var i;
        if ((i = cc11001100_hook("i", r[++o], "assign")) === e) return !0;
        if (i !== H) break;
      }
      if (s !== H) break;
    }
    return !1;
  }
  function g(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", A, "var-init"); 0 <= t;) {
      var r = cc11001100_hook("r", e[t], "var-init");
      if (r !== H) return r;
      t--;
    }
    return 0;
  }
  function w(A, e, t, r, n) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (0 === t[r]) return Y;
    var B = cc11001100_hook("B", r - 1, "var-init");
    if (Array.isArray(n) && !0 === n[B]) return Y;
    var s = cc11001100_hook("s", B - 1, "var-init"),
      o = cc11001100_hook("o", 1 + B, "var-init"),
      i = cc11001100_hook("i", e[B], "var-init"),
      a = cc11001100_hook("a", 0 <= s ? e[s] : 0, "var-init"),
      c = cc11001100_hook("c", e[o], "var-init");
    if (2 === i && 3 === c) return Y;
    if (-1 !== j.indexOf(i)) return "!";
    if (-1 !== j.indexOf(c)) return Y;
    if (-1 !== $.indexOf(c)) return Y;
    if (8 === g(B, e)) return "÷";
    if (11 === q.get(A[B]) && (c === X || c === P || c === x)) return Y;
    if (7 === i || 7 === c) return Y;
    if (9 === i) return Y;
    if (-1 === [H, d, f].indexOf(i) && 9 === c) return Y;
    if (-1 !== [p, N, m, O, y].indexOf(c)) return Y;
    if (g(B, e) === v) return Y;
    if (C(23, v, B, e)) return Y;
    if (C([p, N], L, B, e)) return Y;
    if (C(12, 12, B, e)) return Y;
    if (i === H) return "÷";
    if (23 === i || 23 === c) return Y;
    if (16 === c || 16 === i) return "÷";
    if (-1 !== [d, f, L].indexOf(c) || 14 === i) return Y;
    if (36 === a && -1 !== rA.indexOf(i)) return Y;
    if (i === y && 36 === c) return Y;
    if (c === R && -1 !== Z.concat(R, m, D, X, P, x).indexOf(i)) return Y;
    if (-1 !== Z.indexOf(c) && i === D || -1 !== Z.indexOf(i) && c === D) return Y;
    if (i === M && -1 !== [X, P, x].indexOf(c) || -1 !== [X, P, x].indexOf(i) && c === b) return Y;
    if (-1 !== Z.indexOf(i) && -1 !== AA.indexOf(c) || -1 !== AA.indexOf(i) && -1 !== Z.indexOf(c)) return Y;
    if (-1 !== [M, b].indexOf(i) && (c === D || -1 !== [v, f].indexOf(c) && e[1 + o] === D) || -1 !== [v, f].indexOf(i) && c === D || i === D && -1 !== [D, y, O].indexOf(c)) return Y;
    if (-1 !== [D, y, O, p, N].indexOf(c)) for (var Q = cc11001100_hook("Q", B, "var-init"); 0 <= Q;) {
      if ((w = cc11001100_hook("w", e[Q], "assign")) === D) return Y;
      if (-1 === [y, O].indexOf(w)) break;
      Q--;
    }
    if (-1 !== [M, b].indexOf(c)) for (Q = cc11001100_hook("Q", -1 !== [p, N].indexOf(i) ? s : B, "assign"); 0 <= Q;) {
      var w;
      if ((w = cc11001100_hook("w", e[Q], "assign")) === D) return Y;
      if (-1 === [y, O].indexOf(w)) break;
      Q--;
    }
    if (J === i && -1 !== [J, G, V, z].indexOf(c) || -1 !== [G, V].indexOf(i) && -1 !== [G, k].indexOf(c) || -1 !== [k, z].indexOf(i) && c === k) return Y;
    if (-1 !== tA.indexOf(i) && -1 !== [R, b].indexOf(c) || -1 !== tA.indexOf(c) && i === M) return Y;
    if (-1 !== Z.indexOf(i) && -1 !== Z.indexOf(c)) return Y;
    if (i === O && -1 !== Z.indexOf(c)) return Y;
    if (-1 !== Z.concat(D).indexOf(i) && c === v || -1 !== Z.concat(D).indexOf(c) && i === N) return Y;
    if (41 === i && 41 === c) {
      for (var u = cc11001100_hook("u", t[B], "var-init"), U = cc11001100_hook("U", 1, "var-init"); 0 < u && 41 === e[--u];) U++;
      if (U % 2 != 0) return Y;
    }
    return i === P && c === x ? Y : "÷";
  }
  function u(t, A) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("A", A, "function-parameter");
    A || (A = cc11001100_hook("A", {
      lineBreak: cc11001100_hook("lineBreak", "normal", "object-key-init"),
      wordBreak: cc11001100_hook("wordBreak", "normal", "object-key-init")
    }, "assign"));
    var e = cc11001100_hook("e", function (A, n) {
        void 0 === n && (n = cc11001100_hook("n", "strict", "assign"));
        var B = cc11001100_hook("B", [], "var-init"),
          s = cc11001100_hook("s", [], "var-init"),
          o = cc11001100_hook("o", [], "var-init");
        return A.forEach(function (A, e) {
          var t = cc11001100_hook("t", q.get(A), "var-init");
          if (50 < t ? (o.push(!0), t -= cc11001100_hook("t", 50, "assign")) : o.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(n) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return s.push(e), B.push(16);
          if (4 !== t && 11 !== t) return s.push(e), 31 === t ? B.push("strict" === n ? L : X) : t === W ? B.push(_) : 29 === t ? B.push(_) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? B.push(X) : B.push(_) : void B.push(t);
          if (0 === e) return s.push(e), B.push(_);
          var r = cc11001100_hook("r", B[e - 1], "var-init");
          return -1 === eA.indexOf(r) ? (s.push(s[e - 1]), B.push(r)) : (s.push(e), B.push(_));
        }), [s, B, o];
      }(t, A.lineBreak), "var-init"),
      r = cc11001100_hook("r", e[0], "var-init"),
      n = cc11001100_hook("n", e[1], "var-init"),
      B = cc11001100_hook("B", e[2], "var-init");
    return "break-all" !== A.wordBreak && "break-word" !== A.wordBreak || (n = cc11001100_hook("n", n.map(function (A) {
      return -1 !== [D, _, W].indexOf(A) ? X : A;
    }), "assign")), [r, n, "keep-all" === A.wordBreak ? B.map(function (A, e) {
      return A && 19968 <= t[e] && t[e] <= 40959;
    }) : void 0];
  }
  var i,
    U,
    E,
    F,
    h,
    H = cc11001100_hook("H", 10, "var-init"),
    d = cc11001100_hook("d", 13, "var-init"),
    f = cc11001100_hook("f", 15, "var-init"),
    p = cc11001100_hook("p", 17, "var-init"),
    N = cc11001100_hook("N", 18, "var-init"),
    m = cc11001100_hook("m", 19, "var-init"),
    R = cc11001100_hook("R", 20, "var-init"),
    L = cc11001100_hook("L", 21, "var-init"),
    v = cc11001100_hook("v", 22, "var-init"),
    O = cc11001100_hook("O", 24, "var-init"),
    D = cc11001100_hook("D", 25, "var-init"),
    b = cc11001100_hook("b", 26, "var-init"),
    M = cc11001100_hook("M", 27, "var-init"),
    y = cc11001100_hook("y", 28, "var-init"),
    _ = cc11001100_hook("_", 30, "var-init"),
    P = cc11001100_hook("P", 32, "var-init"),
    x = cc11001100_hook("x", 33, "var-init"),
    V = cc11001100_hook("V", 34, "var-init"),
    z = cc11001100_hook("z", 35, "var-init"),
    X = cc11001100_hook("X", 37, "var-init"),
    J = cc11001100_hook("J", 38, "var-init"),
    G = cc11001100_hook("G", 39, "var-init"),
    k = cc11001100_hook("k", 40, "var-init"),
    W = cc11001100_hook("W", 42, "var-init"),
    Y = cc11001100_hook("Y", "×", "var-init"),
    q = cc11001100_hook("q", (i = cc11001100_hook("i", function (A) {
      var e,
        t,
        r,
        n,
        B,
        s = cc11001100_hook("s", .75 * A.length, "var-init"),
        o = cc11001100_hook("o", A.length, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      "=" === A[A.length - 1] && (s--, "=" === A[A.length - 2] && s--);
      var a = cc11001100_hook("a", "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s), "var-init"),
        c = cc11001100_hook("c", Array.isArray(a) ? a : new Uint8Array(a), "var-init");
      for (e = cc11001100_hook("e", 0, "assign"); e < o; e += cc11001100_hook("e", 4, "assign")) t = cc11001100_hook("t", Q[A.charCodeAt(e)], "assign"), r = cc11001100_hook("r", Q[A.charCodeAt(e + 1)], "assign"), n = cc11001100_hook("n", Q[A.charCodeAt(e + 2)], "assign"), B = cc11001100_hook("B", Q[A.charCodeAt(e + 3)], "assign"), c[i++] = cc11001100_hook("c[i++]", t << 2 | r >> 4, "assign"), c[i++] = cc11001100_hook("c[i++]", (15 & r) << 4 | n >> 2, "assign"), c[i++] = cc11001100_hook("c[i++]", (3 & n) << 6 | 63 & B, "assign");
      return a;
    }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"), "assign"), U = cc11001100_hook("U", Array.isArray(i) ? function (A) {
      for (var e = cc11001100_hook("e", A.length, "var-init"), t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r += cc11001100_hook("r", 4, "assign")) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
      return t;
    }(i) : new Uint32Array(i), "assign"), E = cc11001100_hook("E", Array.isArray(i) ? function (A) {
      for (var e = cc11001100_hook("e", A.length, "var-init"), t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r += cc11001100_hook("r", 2, "assign")) t.push(A[r + 1] << 8 | A[r]);
      return t;
    }(i) : new Uint16Array(i), "assign"), F = cc11001100_hook("F", B(E, 12, U[4] / 2), "assign"), h = cc11001100_hook("h", 2 === U[5] ? B(E, (24 + U[4]) / 2) : function (A, e, t) {
      return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
    }(U, Math.ceil((24 + U[4]) / 4)), "assign"), new s(U[0], U[1], U[2], U[3], F, h)), "var-init"),
    Z = cc11001100_hook("Z", [_, 36], "var-init"),
    j = cc11001100_hook("j", [1, 2, 3, 5], "var-init"),
    $ = cc11001100_hook("$", [H, 8], "var-init"),
    AA = cc11001100_hook("AA", [M, b], "var-init"),
    eA = cc11001100_hook("eA", j.concat($), "var-init"),
    tA = cc11001100_hook("tA", [J, G, k, V, z], "var-init"),
    rA = cc11001100_hook("rA", [f, d], "var-init"),
    nA = cc11001100_hook("nA", (BA.prototype.slice = cc11001100_hook("BA.prototype.slice", function () {
      return l.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, "assign"), BA), "var-init");
  function BA(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    this.codePoints = cc11001100_hook("this.codePoints", A, "assign"), this.required = cc11001100_hook("this.required", "!" === e, "assign"), this.start = cc11001100_hook("this.start", t, "assign"), this.end = cc11001100_hook("this.end", r, "assign");
  }
  var sA, oA;
  (oA = cc11001100_hook("oA", sA || (sA = cc11001100_hook("sA", {}, "assign")), "assign"))[oA.STRING_TOKEN = cc11001100_hook("oA.STRING_TOKEN", 0, "assign")] = cc11001100_hook("(oA = sA || (sA = {}))[oA.STRING_TOKEN = 0]", "STRING_TOKEN", "assign"), oA[oA.BAD_STRING_TOKEN = cc11001100_hook("oA.BAD_STRING_TOKEN", 1, "assign")] = cc11001100_hook("oA[oA.BAD_STRING_TOKEN = 1]", "BAD_STRING_TOKEN", "assign"), oA[oA.LEFT_PARENTHESIS_TOKEN = cc11001100_hook("oA.LEFT_PARENTHESIS_TOKEN", 2, "assign")] = cc11001100_hook("oA[oA.LEFT_PARENTHESIS_TOKEN = 2]", "LEFT_PARENTHESIS_TOKEN", "assign"), oA[oA.RIGHT_PARENTHESIS_TOKEN = cc11001100_hook("oA.RIGHT_PARENTHESIS_TOKEN", 3, "assign")] = cc11001100_hook("oA[oA.RIGHT_PARENTHESIS_TOKEN = 3]", "RIGHT_PARENTHESIS_TOKEN", "assign"), oA[oA.COMMA_TOKEN = cc11001100_hook("oA.COMMA_TOKEN", 4, "assign")] = cc11001100_hook("oA[oA.COMMA_TOKEN = 4]", "COMMA_TOKEN", "assign"), oA[oA.HASH_TOKEN = cc11001100_hook("oA.HASH_TOKEN", 5, "assign")] = cc11001100_hook("oA[oA.HASH_TOKEN = 5]", "HASH_TOKEN", "assign"), oA[oA.DELIM_TOKEN = cc11001100_hook("oA.DELIM_TOKEN", 6, "assign")] = cc11001100_hook("oA[oA.DELIM_TOKEN = 6]", "DELIM_TOKEN", "assign"), oA[oA.AT_KEYWORD_TOKEN = cc11001100_hook("oA.AT_KEYWORD_TOKEN", 7, "assign")] = cc11001100_hook("oA[oA.AT_KEYWORD_TOKEN = 7]", "AT_KEYWORD_TOKEN", "assign"), oA[oA.PREFIX_MATCH_TOKEN = cc11001100_hook("oA.PREFIX_MATCH_TOKEN", 8, "assign")] = cc11001100_hook("oA[oA.PREFIX_MATCH_TOKEN = 8]", "PREFIX_MATCH_TOKEN", "assign"), oA[oA.DASH_MATCH_TOKEN = cc11001100_hook("oA.DASH_MATCH_TOKEN", 9, "assign")] = cc11001100_hook("oA[oA.DASH_MATCH_TOKEN = 9]", "DASH_MATCH_TOKEN", "assign"), oA[oA.INCLUDE_MATCH_TOKEN = cc11001100_hook("oA.INCLUDE_MATCH_TOKEN", 10, "assign")] = cc11001100_hook("oA[oA.INCLUDE_MATCH_TOKEN = 10]", "INCLUDE_MATCH_TOKEN", "assign"), oA[oA.LEFT_CURLY_BRACKET_TOKEN = cc11001100_hook("oA.LEFT_CURLY_BRACKET_TOKEN", 11, "assign")] = cc11001100_hook("oA[oA.LEFT_CURLY_BRACKET_TOKEN = 11]", "LEFT_CURLY_BRACKET_TOKEN", "assign"), oA[oA.RIGHT_CURLY_BRACKET_TOKEN = cc11001100_hook("oA.RIGHT_CURLY_BRACKET_TOKEN", 12, "assign")] = cc11001100_hook("oA[oA.RIGHT_CURLY_BRACKET_TOKEN = 12]", "RIGHT_CURLY_BRACKET_TOKEN", "assign"), oA[oA.SUFFIX_MATCH_TOKEN = cc11001100_hook("oA.SUFFIX_MATCH_TOKEN", 13, "assign")] = cc11001100_hook("oA[oA.SUFFIX_MATCH_TOKEN = 13]", "SUFFIX_MATCH_TOKEN", "assign"), oA[oA.SUBSTRING_MATCH_TOKEN = cc11001100_hook("oA.SUBSTRING_MATCH_TOKEN", 14, "assign")] = cc11001100_hook("oA[oA.SUBSTRING_MATCH_TOKEN = 14]", "SUBSTRING_MATCH_TOKEN", "assign"), oA[oA.DIMENSION_TOKEN = cc11001100_hook("oA.DIMENSION_TOKEN", 15, "assign")] = cc11001100_hook("oA[oA.DIMENSION_TOKEN = 15]", "DIMENSION_TOKEN", "assign"), oA[oA.PERCENTAGE_TOKEN = cc11001100_hook("oA.PERCENTAGE_TOKEN", 16, "assign")] = cc11001100_hook("oA[oA.PERCENTAGE_TOKEN = 16]", "PERCENTAGE_TOKEN", "assign"), oA[oA.NUMBER_TOKEN = cc11001100_hook("oA.NUMBER_TOKEN", 17, "assign")] = cc11001100_hook("oA[oA.NUMBER_TOKEN = 17]", "NUMBER_TOKEN", "assign"), oA[oA.FUNCTION = cc11001100_hook("oA.FUNCTION", 18, "assign")] = cc11001100_hook("oA[oA.FUNCTION = 18]", "FUNCTION", "assign"), oA[oA.FUNCTION_TOKEN = cc11001100_hook("oA.FUNCTION_TOKEN", 19, "assign")] = cc11001100_hook("oA[oA.FUNCTION_TOKEN = 19]", "FUNCTION_TOKEN", "assign"), oA[oA.IDENT_TOKEN = cc11001100_hook("oA.IDENT_TOKEN", 20, "assign")] = cc11001100_hook("oA[oA.IDENT_TOKEN = 20]", "IDENT_TOKEN", "assign"), oA[oA.COLUMN_TOKEN = cc11001100_hook("oA.COLUMN_TOKEN", 21, "assign")] = cc11001100_hook("oA[oA.COLUMN_TOKEN = 21]", "COLUMN_TOKEN", "assign"), oA[oA.URL_TOKEN = cc11001100_hook("oA.URL_TOKEN", 22, "assign")] = cc11001100_hook("oA[oA.URL_TOKEN = 22]", "URL_TOKEN", "assign"), oA[oA.BAD_URL_TOKEN = cc11001100_hook("oA.BAD_URL_TOKEN", 23, "assign")] = cc11001100_hook("oA[oA.BAD_URL_TOKEN = 23]", "BAD_URL_TOKEN", "assign"), oA[oA.CDC_TOKEN = cc11001100_hook("oA.CDC_TOKEN", 24, "assign")] = cc11001100_hook("oA[oA.CDC_TOKEN = 24]", "CDC_TOKEN", "assign"), oA[oA.CDO_TOKEN = cc11001100_hook("oA.CDO_TOKEN", 25, "assign")] = cc11001100_hook("oA[oA.CDO_TOKEN = 25]", "CDO_TOKEN", "assign"), oA[oA.COLON_TOKEN = cc11001100_hook("oA.COLON_TOKEN", 26, "assign")] = cc11001100_hook("oA[oA.COLON_TOKEN = 26]", "COLON_TOKEN", "assign"), oA[oA.SEMICOLON_TOKEN = cc11001100_hook("oA.SEMICOLON_TOKEN", 27, "assign")] = cc11001100_hook("oA[oA.SEMICOLON_TOKEN = 27]", "SEMICOLON_TOKEN", "assign"), oA[oA.LEFT_SQUARE_BRACKET_TOKEN = cc11001100_hook("oA.LEFT_SQUARE_BRACKET_TOKEN", 28, "assign")] = cc11001100_hook("oA[oA.LEFT_SQUARE_BRACKET_TOKEN = 28]", "LEFT_SQUARE_BRACKET_TOKEN", "assign"), oA[oA.RIGHT_SQUARE_BRACKET_TOKEN = cc11001100_hook("oA.RIGHT_SQUARE_BRACKET_TOKEN", 29, "assign")] = cc11001100_hook("oA[oA.RIGHT_SQUARE_BRACKET_TOKEN = 29]", "RIGHT_SQUARE_BRACKET_TOKEN", "assign"), oA[oA.UNICODE_RANGE_TOKEN = cc11001100_hook("oA.UNICODE_RANGE_TOKEN", 30, "assign")] = cc11001100_hook("oA[oA.UNICODE_RANGE_TOKEN = 30]", "UNICODE_RANGE_TOKEN", "assign"), oA[oA.WHITESPACE_TOKEN = cc11001100_hook("oA.WHITESPACE_TOKEN", 31, "assign")] = cc11001100_hook("oA[oA.WHITESPACE_TOKEN = 31]", "WHITESPACE_TOKEN", "assign"), oA[oA.EOF_TOKEN = cc11001100_hook("oA.EOF_TOKEN", 32, "assign")] = cc11001100_hook("oA[oA.EOF_TOKEN = 32]", "EOF_TOKEN", "assign");
  function iA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 48 <= A && A <= 57;
  }
  function aA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return iA(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102;
  }
  function cA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 10 === A || 9 === A || 32 === A;
  }
  function QA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return function (A) {
      return function (A) {
        return 97 <= A && A <= 122;
      }(A) || function (A) {
        return 65 <= A && A <= 90;
      }(A);
    }(A) || function (A) {
      return 128 <= A;
    }(A) || 95 === A;
  }
  function wA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return QA(A) || iA(A) || 45 === A;
  }
  function uA(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return 92 === A && 10 !== e;
  }
  function UA(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return 45 === A ? QA(e) || uA(e, t) : !!QA(A) || !(92 !== A || !uA(A, e));
  }
  function lA(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return 43 === A || 45 === A ? !!iA(e) || 46 === e && iA(t) : iA(46 === A ? e : A);
  }
  var CA = cc11001100_hook("CA", {
      type: cc11001100_hook("type", sA.LEFT_PARENTHESIS_TOKEN, "object-key-init")
    }, "var-init"),
    gA = cc11001100_hook("gA", {
      type: cc11001100_hook("type", sA.RIGHT_PARENTHESIS_TOKEN, "object-key-init")
    }, "var-init"),
    EA = cc11001100_hook("EA", {
      type: cc11001100_hook("type", sA.COMMA_TOKEN, "object-key-init")
    }, "var-init"),
    FA = cc11001100_hook("FA", {
      type: cc11001100_hook("type", sA.SUFFIX_MATCH_TOKEN, "object-key-init")
    }, "var-init"),
    hA = cc11001100_hook("hA", {
      type: cc11001100_hook("type", sA.PREFIX_MATCH_TOKEN, "object-key-init")
    }, "var-init"),
    HA = cc11001100_hook("HA", {
      type: cc11001100_hook("type", sA.COLUMN_TOKEN, "object-key-init")
    }, "var-init"),
    dA = cc11001100_hook("dA", {
      type: cc11001100_hook("type", sA.DASH_MATCH_TOKEN, "object-key-init")
    }, "var-init"),
    fA = cc11001100_hook("fA", {
      type: cc11001100_hook("type", sA.INCLUDE_MATCH_TOKEN, "object-key-init")
    }, "var-init"),
    pA = cc11001100_hook("pA", {
      type: cc11001100_hook("type", sA.LEFT_CURLY_BRACKET_TOKEN, "object-key-init")
    }, "var-init"),
    NA = cc11001100_hook("NA", {
      type: cc11001100_hook("type", sA.RIGHT_CURLY_BRACKET_TOKEN, "object-key-init")
    }, "var-init"),
    KA = cc11001100_hook("KA", {
      type: cc11001100_hook("type", sA.SUBSTRING_MATCH_TOKEN, "object-key-init")
    }, "var-init"),
    IA = cc11001100_hook("IA", {
      type: cc11001100_hook("type", sA.BAD_URL_TOKEN, "object-key-init")
    }, "var-init"),
    TA = cc11001100_hook("TA", {
      type: cc11001100_hook("type", sA.BAD_STRING_TOKEN, "object-key-init")
    }, "var-init"),
    mA = cc11001100_hook("mA", {
      type: cc11001100_hook("type", sA.CDO_TOKEN, "object-key-init")
    }, "var-init"),
    RA = cc11001100_hook("RA", {
      type: cc11001100_hook("type", sA.CDC_TOKEN, "object-key-init")
    }, "var-init"),
    LA = cc11001100_hook("LA", {
      type: cc11001100_hook("type", sA.COLON_TOKEN, "object-key-init")
    }, "var-init"),
    vA = cc11001100_hook("vA", {
      type: cc11001100_hook("type", sA.SEMICOLON_TOKEN, "object-key-init")
    }, "var-init"),
    OA = cc11001100_hook("OA", {
      type: cc11001100_hook("type", sA.LEFT_SQUARE_BRACKET_TOKEN, "object-key-init")
    }, "var-init"),
    DA = cc11001100_hook("DA", {
      type: cc11001100_hook("type", sA.RIGHT_SQUARE_BRACKET_TOKEN, "object-key-init")
    }, "var-init"),
    bA = cc11001100_hook("bA", {
      type: cc11001100_hook("type", sA.WHITESPACE_TOKEN, "object-key-init")
    }, "var-init"),
    SA = cc11001100_hook("SA", {
      type: cc11001100_hook("type", sA.EOF_TOKEN, "object-key-init")
    }, "var-init"),
    MA = cc11001100_hook("MA", (yA.prototype.write = cc11001100_hook("yA.prototype.write", function (A) {
      this._value = cc11001100_hook("this._value", this._value.concat(c(A)), "assign");
    }, "assign"), yA.prototype.read = cc11001100_hook("yA.prototype.read", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", this.consumeToken(), "var-init"); e !== SA;) A.push(e), e = cc11001100_hook("e", this.consumeToken(), "assign");
      return A;
    }, "assign"), yA.prototype.consumeToken = cc11001100_hook("yA.prototype.consumeToken", function () {
      var A = cc11001100_hook("A", this.consumeCodePoint(), "var-init");
      switch (A) {
        case 34:
          return this.consumeStringToken(34);
        case 35:
          var e = cc11001100_hook("e", this.peekCodePoint(0), "var-init"),
            t = cc11001100_hook("t", this.peekCodePoint(1), "var-init"),
            r = cc11001100_hook("r", this.peekCodePoint(2), "var-init");
          if (wA(e) || uA(t, r)) {
            var n = cc11001100_hook("n", UA(e, t, r) ? 2 : 1, "var-init"),
              B = cc11001100_hook("B", this.consumeName(), "var-init");
            return {
              type: cc11001100_hook("type", sA.HASH_TOKEN, "object-key-init"),
              value: cc11001100_hook("value", B, "object-key-init"),
              flags: cc11001100_hook("flags", n, "object-key-init")
            };
          }
          break;
        case 36:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), FA;
          break;
        case 39:
          return this.consumeStringToken(39);
        case 40:
          return CA;
        case 41:
          return gA;
        case 42:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), KA;
          break;
        case 43:
          if (lA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 44:
          return EA;
        case 45:
          var s = cc11001100_hook("s", A, "var-init"),
            o = cc11001100_hook("o", this.peekCodePoint(0), "var-init"),
            i = cc11001100_hook("i", this.peekCodePoint(1), "var-init");
          if (lA(s, o, i)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (UA(s, o, i)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (45 === o && 62 === i) return this.consumeCodePoint(), this.consumeCodePoint(), RA;
          break;
        case 46:
          if (lA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 47:
          if (42 === this.peekCodePoint(0)) for (this.consumeCodePoint();;) {
            var a = cc11001100_hook("a", this.consumeCodePoint(), "var-init");
            if (42 === a && 47 === (a = cc11001100_hook("a", this.consumeCodePoint(), "assign"))) return this.consumeToken();
            if (-1 === a) return this.consumeToken();
          }
          break;
        case 58:
          return LA;
        case 59:
          return vA;
        case 60:
          if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), mA;
          break;
        case 64:
          var c = cc11001100_hook("c", this.peekCodePoint(0), "var-init"),
            Q = cc11001100_hook("Q", this.peekCodePoint(1), "var-init"),
            w = cc11001100_hook("w", this.peekCodePoint(2), "var-init");
          if (UA(c, Q, w)) return B = cc11001100_hook("B", this.consumeName(), "assign"), {
            type: cc11001100_hook("type", sA.AT_KEYWORD_TOKEN, "object-key-init"),
            value: cc11001100_hook("value", B, "object-key-init")
          };
          break;
        case 91:
          return OA;
        case 92:
          if (uA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case 93:
          return DA;
        case 61:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), hA;
          break;
        case 123:
          return pA;
        case 125:
          return NA;
        case 117:
        case 85:
          var u = cc11001100_hook("u", this.peekCodePoint(0), "var-init"),
            U = cc11001100_hook("U", this.peekCodePoint(1), "var-init");
          return 43 !== u || !aA(U) && 63 !== U || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case 124:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), dA;
          if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), HA;
          break;
        case 126:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), fA;
          break;
        case -1:
          return SA;
      }
      return cA(A) ? (this.consumeWhiteSpace(), bA) : iA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : QA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
        type: cc11001100_hook("type", sA.DELIM_TOKEN, "object-key-init"),
        value: cc11001100_hook("value", l(A), "object-key-init")
      };
    }, "assign"), yA.prototype.consumeCodePoint = cc11001100_hook("yA.prototype.consumeCodePoint", function () {
      var A = cc11001100_hook("A", this._value.shift(), "var-init");
      return void 0 === A ? -1 : A;
    }, "assign"), yA.prototype.reconsumeCodePoint = cc11001100_hook("yA.prototype.reconsumeCodePoint", function (A) {
      this._value.unshift(A);
    }, "assign"), yA.prototype.peekCodePoint = cc11001100_hook("yA.prototype.peekCodePoint", function (A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, "assign"), yA.prototype.consumeUnicodeRangeToken = cc11001100_hook("yA.prototype.consumeUnicodeRangeToken", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", this.consumeCodePoint(), "var-init"); aA(e) && A.length < 6;) A.push(e), e = cc11001100_hook("e", this.consumeCodePoint(), "assign");
      for (var t = cc11001100_hook("t", !1, "var-init"); 63 === e && A.length < 6;) A.push(e), e = cc11001100_hook("e", this.consumeCodePoint(), "assign"), t = cc11001100_hook("t", !0, "assign");
      if (t) {
        var r = cc11001100_hook("r", parseInt(l.apply(void 0, A.map(function (A) {
            return 63 === A ? 48 : A;
          })), 16), "var-init"),
          n = cc11001100_hook("n", parseInt(l.apply(void 0, A.map(function (A) {
            return 63 === A ? 70 : A;
          })), 16), "var-init");
        return {
          type: cc11001100_hook("type", sA.UNICODE_RANGE_TOKEN, "object-key-init"),
          start: cc11001100_hook("start", r, "object-key-init"),
          end: cc11001100_hook("end", n, "object-key-init")
        };
      }
      var B = cc11001100_hook("B", parseInt(l.apply(void 0, A), 16), "var-init");
      if (45 === this.peekCodePoint(0) && aA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), e = cc11001100_hook("e", this.consumeCodePoint(), "assign");
        for (var s = cc11001100_hook("s", [], "var-init"); aA(e) && s.length < 6;) s.push(e), e = cc11001100_hook("e", this.consumeCodePoint(), "assign");
        return n = cc11001100_hook("n", parseInt(l.apply(void 0, s), 16), "assign"), {
          type: cc11001100_hook("type", sA.UNICODE_RANGE_TOKEN, "object-key-init"),
          start: cc11001100_hook("start", B, "object-key-init"),
          end: cc11001100_hook("end", n, "object-key-init")
        };
      }
      return {
        type: cc11001100_hook("type", sA.UNICODE_RANGE_TOKEN, "object-key-init"),
        start: cc11001100_hook("start", B, "object-key-init"),
        end: cc11001100_hook("end", B, "object-key-init")
      };
    }, "assign"), yA.prototype.consumeIdentLikeToken = cc11001100_hook("yA.prototype.consumeIdentLikeToken", function () {
      var A = cc11001100_hook("A", this.consumeName(), "var-init");
      return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
        type: cc11001100_hook("type", sA.FUNCTION_TOKEN, "object-key-init"),
        value: cc11001100_hook("value", A, "object-key-init")
      }) : {
        type: cc11001100_hook("type", sA.IDENT_TOKEN, "object-key-init"),
        value: cc11001100_hook("value", A, "object-key-init")
      };
    }, "assign"), yA.prototype.consumeUrlToken = cc11001100_hook("yA.prototype.consumeUrlToken", function () {
      var A = cc11001100_hook("A", [], "var-init");
      if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
        type: cc11001100_hook("type", sA.URL_TOKEN, "object-key-init"),
        value: cc11001100_hook("value", "", "object-key-init")
      };
      var e,
        t = cc11001100_hook("t", this.peekCodePoint(0), "var-init");
      if (39 === t || 34 === t) {
        var r = cc11001100_hook("r", this.consumeStringToken(this.consumeCodePoint()), "var-init");
        return r.type === sA.STRING_TOKEN && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
          type: cc11001100_hook("type", sA.URL_TOKEN, "object-key-init"),
          value: cc11001100_hook("value", r.value, "object-key-init")
        }) : (this.consumeBadUrlRemnants(), IA);
      }
      for (;;) {
        var n = cc11001100_hook("n", this.consumeCodePoint(), "var-init");
        if (-1 === n || 41 === n) return {
          type: cc11001100_hook("type", sA.URL_TOKEN, "object-key-init"),
          value: cc11001100_hook("value", l.apply(void 0, A), "object-key-init")
        };
        if (cA(n)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
          type: cc11001100_hook("type", sA.URL_TOKEN, "object-key-init"),
          value: cc11001100_hook("value", l.apply(void 0, A), "object-key-init")
        }) : (this.consumeBadUrlRemnants(), IA);
        if (34 === n || 39 === n || 40 === n || 0 <= (e = cc11001100_hook("e", n, "assign")) && e <= 8 || 11 === e || 14 <= e && e <= 31 || 127 === e) return this.consumeBadUrlRemnants(), IA;
        if (92 === n) {
          if (!uA(n, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), IA;
          A.push(this.consumeEscapedCodePoint());
        } else A.push(n);
      }
    }, "assign"), yA.prototype.consumeWhiteSpace = cc11001100_hook("yA.prototype.consumeWhiteSpace", function () {
      for (; cA(this.peekCodePoint(0));) this.consumeCodePoint();
    }, "assign"), yA.prototype.consumeBadUrlRemnants = cc11001100_hook("yA.prototype.consumeBadUrlRemnants", function () {
      for (;;) {
        var A = cc11001100_hook("A", this.consumeCodePoint(), "var-init");
        if (41 === A || -1 === A) return;
        uA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, "assign"), yA.prototype.consumeStringSlice = cc11001100_hook("yA.prototype.consumeStringSlice", function (A) {
      for (var e = cc11001100_hook("e", "", "var-init"); 0 < A;) {
        var t = cc11001100_hook("t", Math.min(6e4, A), "var-init");
        e += cc11001100_hook("e", l.apply(void 0, this._value.splice(0, t)), "assign"), A -= cc11001100_hook("A", t, "assign");
      }
      return this._value.shift(), e;
    }, "assign"), yA.prototype.consumeStringToken = cc11001100_hook("yA.prototype.consumeStringToken", function (A) {
      for (var e = cc11001100_hook("e", "", "var-init"), t = cc11001100_hook("t", 0, "var-init");;) {
        var r = cc11001100_hook("r", this._value[t], "var-init");
        if (-1 === r || void 0 === r || r === A) return e += cc11001100_hook("e", this.consumeStringSlice(t), "assign"), {
          type: cc11001100_hook("type", sA.STRING_TOKEN, "object-key-init"),
          value: cc11001100_hook("value", e, "object-key-init")
        };
        if (10 === r) return this._value.splice(0, t), TA;
        if (92 === r) {
          var n = cc11001100_hook("n", this._value[t + 1], "var-init");
          -1 !== n && void 0 !== n && (10 === n ? (e += cc11001100_hook("e", this.consumeStringSlice(t), "assign"), t = cc11001100_hook("t", -1, "assign"), this._value.shift()) : uA(r, n) && (e += cc11001100_hook("e", this.consumeStringSlice(t), "assign"), e += cc11001100_hook("e", l(this.consumeEscapedCodePoint()), "assign"), t = cc11001100_hook("t", -1, "assign")));
        }
        t++;
      }
    }, "assign"), yA.prototype.consumeNumber = cc11001100_hook("yA.prototype.consumeNumber", function () {
      var A = cc11001100_hook("A", [], "var-init"),
        e = cc11001100_hook("e", 4, "var-init"),
        t = cc11001100_hook("t", this.peekCodePoint(0), "var-init");
      for (43 !== t && 45 !== t || A.push(this.consumeCodePoint()); iA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      t = cc11001100_hook("t", this.peekCodePoint(0), "assign");
      var r = cc11001100_hook("r", this.peekCodePoint(1), "var-init");
      if (46 === t && iA(r)) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = cc11001100_hook("e", 8, "assign"); iA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      t = cc11001100_hook("t", this.peekCodePoint(0), "assign"), r = cc11001100_hook("r", this.peekCodePoint(1), "assign");
      var n = cc11001100_hook("n", this.peekCodePoint(2), "var-init");
      if ((69 === t || 101 === t) && ((43 === r || 45 === r) && iA(n) || iA(r))) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = cc11001100_hook("e", 8, "assign"); iA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      return [function (A) {
        var e = cc11001100_hook("e", 0, "var-init"),
          t = cc11001100_hook("t", 1, "var-init");
        43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = cc11001100_hook("t", -1, "assign")), e++);
        for (var r = cc11001100_hook("r", [], "var-init"); iA(A[e]);) r.push(A[e++]);
        var n = cc11001100_hook("n", r.length ? parseInt(l.apply(void 0, r), 10) : 0, "var-init");
        46 === A[e] && e++;
        for (var B = cc11001100_hook("B", [], "var-init"); iA(A[e]);) B.push(A[e++]);
        var s = cc11001100_hook("s", B.length, "var-init"),
          o = cc11001100_hook("o", s ? parseInt(l.apply(void 0, B), 10) : 0, "var-init");
        69 !== A[e] && 101 !== A[e] || e++;
        var i = cc11001100_hook("i", 1, "var-init");
        43 !== A[e] && 45 !== A[e] || (45 === A[e] && (i = cc11001100_hook("i", -1, "assign")), e++);
        for (var a = cc11001100_hook("a", [], "var-init"); iA(A[e]);) a.push(A[e++]);
        var c = cc11001100_hook("c", a.length ? parseInt(l.apply(void 0, a), 10) : 0, "var-init");
        return t * (n + o * Math.pow(10, -s)) * Math.pow(10, i * c);
      }(A), e];
    }, "assign"), yA.prototype.consumeNumericToken = cc11001100_hook("yA.prototype.consumeNumericToken", function () {
      var A = cc11001100_hook("A", this.consumeNumber(), "var-init"),
        e = cc11001100_hook("e", A[0], "var-init"),
        t = cc11001100_hook("t", A[1], "var-init"),
        r = cc11001100_hook("r", this.peekCodePoint(0), "var-init"),
        n = cc11001100_hook("n", this.peekCodePoint(1), "var-init"),
        B = cc11001100_hook("B", this.peekCodePoint(2), "var-init");
      if (UA(r, n, B)) {
        var s = cc11001100_hook("s", this.consumeName(), "var-init");
        return {
          type: cc11001100_hook("type", sA.DIMENSION_TOKEN, "object-key-init"),
          number: cc11001100_hook("number", e, "object-key-init"),
          flags: cc11001100_hook("flags", t, "object-key-init"),
          unit: cc11001100_hook("unit", s, "object-key-init")
        };
      }
      return 37 === r ? (this.consumeCodePoint(), {
        type: cc11001100_hook("type", sA.PERCENTAGE_TOKEN, "object-key-init"),
        number: cc11001100_hook("number", e, "object-key-init"),
        flags: cc11001100_hook("flags", t, "object-key-init")
      }) : {
        type: cc11001100_hook("type", sA.NUMBER_TOKEN, "object-key-init"),
        number: cc11001100_hook("number", e, "object-key-init"),
        flags: cc11001100_hook("flags", t, "object-key-init")
      };
    }, "assign"), yA.prototype.consumeEscapedCodePoint = cc11001100_hook("yA.prototype.consumeEscapedCodePoint", function () {
      var A = cc11001100_hook("A", this.consumeCodePoint(), "var-init");
      if (aA(A)) {
        for (var e = cc11001100_hook("e", l(A), "var-init"); aA(this.peekCodePoint(0)) && e.length < 6;) e += cc11001100_hook("e", l(this.consumeCodePoint()), "assign");
        cA(this.peekCodePoint(0)) && this.consumeCodePoint();
        var t = cc11001100_hook("t", parseInt(e, 16), "var-init");
        return 0 === t || function (A) {
          return 55296 <= A && A <= 57343;
        }(t) || 1114111 < t ? 65533 : t;
      }
      return -1 === A ? 65533 : A;
    }, "assign"), yA.prototype.consumeName = cc11001100_hook("yA.prototype.consumeName", function () {
      for (var A = cc11001100_hook("A", "", "var-init");;) {
        var e = cc11001100_hook("e", this.consumeCodePoint(), "var-init");
        if (wA(e)) A += cc11001100_hook("A", l(e), "assign");else {
          if (!uA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
          A += cc11001100_hook("A", l(this.consumeEscapedCodePoint()), "assign");
        }
      }
    }, "assign"), yA), "var-init");
  function yA() {
    this._value = cc11001100_hook("this._value", [], "assign");
  }
  var _A = cc11001100_hook("_A", (PA.create = cc11001100_hook("PA.create", function (A) {
    var e = cc11001100_hook("e", new MA(), "var-init");
    return e.write(A), new PA(e.read());
  }, "assign"), PA.parseValue = cc11001100_hook("PA.parseValue", function (A) {
    return PA.create(A).parseComponentValue();
  }, "assign"), PA.parseValues = cc11001100_hook("PA.parseValues", function (A) {
    return PA.create(A).parseComponentValues();
  }, "assign"), PA.prototype.parseComponentValue = cc11001100_hook("PA.prototype.parseComponentValue", function () {
    for (var A = cc11001100_hook("A", this.consumeToken(), "var-init"); A.type === sA.WHITESPACE_TOKEN;) A = cc11001100_hook("A", this.consumeToken(), "assign");
    if (A.type === sA.EOF_TOKEN) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A);
    for (var e = cc11001100_hook("e", this.consumeComponentValue(), "var-init"); (A = cc11001100_hook("A", this.consumeToken(), "assign")).type === sA.WHITESPACE_TOKEN;);
    if (A.type === sA.EOF_TOKEN) return e;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, "assign"), PA.prototype.parseComponentValues = cc11001100_hook("PA.prototype.parseComponentValues", function () {
    for (var A = cc11001100_hook("A", [], "var-init");;) {
      var e = cc11001100_hook("e", this.consumeComponentValue(), "var-init");
      if (e.type === sA.EOF_TOKEN) return A;
      A.push(e), A.push();
    }
  }, "assign"), PA.prototype.consumeComponentValue = cc11001100_hook("PA.prototype.consumeComponentValue", function () {
    var A = cc11001100_hook("A", this.consumeToken(), "var-init");
    switch (A.type) {
      case sA.LEFT_CURLY_BRACKET_TOKEN:
      case sA.LEFT_SQUARE_BRACKET_TOKEN:
      case sA.LEFT_PARENTHESIS_TOKEN:
        return this.consumeSimpleBlock(A.type);
      case sA.FUNCTION_TOKEN:
        return this.consumeFunction(A);
    }
    return A;
  }, "assign"), PA.prototype.consumeSimpleBlock = cc11001100_hook("PA.prototype.consumeSimpleBlock", function (A) {
    for (var e = cc11001100_hook("e", {
        type: cc11001100_hook("type", A, "object-key-init"),
        values: cc11001100_hook("values", [], "object-key-init")
      }, "var-init"), t = cc11001100_hook("t", this.consumeToken(), "var-init");;) {
      if (t.type === sA.EOF_TOKEN || Be(t, A)) return e;
      this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = cc11001100_hook("t", this.consumeToken(), "assign");
    }
  }, "assign"), PA.prototype.consumeFunction = cc11001100_hook("PA.prototype.consumeFunction", function (A) {
    for (var e = cc11001100_hook("e", {
      name: cc11001100_hook("name", A.value, "object-key-init"),
      values: cc11001100_hook("values", [], "object-key-init"),
      type: cc11001100_hook("type", sA.FUNCTION, "object-key-init")
    }, "var-init");;) {
      var t = cc11001100_hook("t", this.consumeToken(), "var-init");
      if (t.type === sA.EOF_TOKEN || t.type === sA.RIGHT_PARENTHESIS_TOKEN) return e;
      this.reconsumeToken(t), e.values.push(this.consumeComponentValue());
    }
  }, "assign"), PA.prototype.consumeToken = cc11001100_hook("PA.prototype.consumeToken", function () {
    var A = cc11001100_hook("A", this._tokens.shift(), "var-init");
    return void 0 === A ? SA : A;
  }, "assign"), PA.prototype.reconsumeToken = cc11001100_hook("PA.prototype.reconsumeToken", function (A) {
    this._tokens.unshift(A);
  }, "assign"), PA), "var-init");
  function PA(A) {
    cc11001100_hook("A", A, "function-parameter");
    this._tokens = cc11001100_hook("this._tokens", A, "assign");
  }
  function xA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === sA.DIMENSION_TOKEN;
  }
  function VA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === sA.NUMBER_TOKEN;
  }
  function zA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === sA.IDENT_TOKEN;
  }
  function XA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === sA.STRING_TOKEN;
  }
  function JA(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return zA(A) && A.value === e;
  }
  function GA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type !== sA.WHITESPACE_TOKEN;
  }
  function kA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type !== sA.WHITESPACE_TOKEN && A.type !== sA.COMMA_TOKEN;
  }
  function WA(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", [], "var-init"),
      t = cc11001100_hook("t", [], "var-init");
    return A.forEach(function (A) {
      if (A.type === sA.COMMA_TOKEN) {
        if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
        return e.push(t), void (t = cc11001100_hook("t", [], "assign"));
      }
      A.type !== sA.WHITESPACE_TOKEN && t.push(A);
    }), t.length && e.push(t), e;
  }
  function YA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === sA.NUMBER_TOKEN || A.type === sA.DIMENSION_TOKEN;
  }
  function qA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === sA.PERCENTAGE_TOKEN || YA(A);
  }
  function ZA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 1 < A.length ? [A[0], A[1]] : [A[0]];
  }
  function jA(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", A[0], "var-init"),
      n = cc11001100_hook("n", A[1], "var-init");
    return [ae(r, e), ae(void 0 !== n ? n : r, t)];
  }
  function $A(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === sA.DIMENSION_TOKEN && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit);
  }
  function Ae(A) {
    cc11001100_hook("A", A, "function-parameter");
    switch (A.filter(zA).map(function (A) {
      return A.value;
    }).join(" ")) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [se, se];
      case "to top":
      case "bottom":
        return Qe(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [se, ie];
      case "to right":
      case "left":
        return Qe(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [ie, ie];
      case "to bottom":
      case "top":
        return Qe(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [ie, se];
      case "to left":
      case "right":
        return Qe(270);
    }
    return 0;
  }
  function ee(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 0 == (255 & A);
  }
  function te(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", 255 & A, "var-init"),
      t = cc11001100_hook("t", 255 & A >> 8, "var-init"),
      r = cc11001100_hook("r", 255 & A >> 16, "var-init"),
      n = cc11001100_hook("n", 255 & A >> 24, "var-init");
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }
  function re(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (A.type === sA.NUMBER_TOKEN) return A.number;
    if (A.type !== sA.PERCENTAGE_TOKEN) return 0;
    var t = cc11001100_hook("t", 3 === e ? 1 : 255, "var-init");
    return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  function ne(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.filter(kA), "var-init");
    if (3 === e.length) {
      var t = cc11001100_hook("t", e.map(re), "var-init"),
        r = cc11001100_hook("r", t[0], "var-init"),
        n = cc11001100_hook("n", t[1], "var-init"),
        B = cc11001100_hook("B", t[2], "var-init");
      return ue(r, n, B, 1);
    }
    if (4 !== e.length) return 0;
    var s = cc11001100_hook("s", e.map(re), "var-init"),
      o = cc11001100_hook("o", (r = cc11001100_hook("r", s[0], "assign"), n = cc11001100_hook("n", s[1], "assign"), B = cc11001100_hook("B", s[2], "assign"), s[3]), "var-init");
    return ue(r, n, B, o);
  }
  var Be = function (A, e) {
      return e === sA.LEFT_CURLY_BRACKET_TOKEN && A.type === sA.RIGHT_CURLY_BRACKET_TOKEN || e === sA.LEFT_SQUARE_BRACKET_TOKEN && A.type === sA.RIGHT_SQUARE_BRACKET_TOKEN || e === sA.LEFT_PARENTHESIS_TOKEN && A.type === sA.RIGHT_PARENTHESIS_TOKEN;
    },
    se = cc11001100_hook("se", {
      type: cc11001100_hook("type", sA.NUMBER_TOKEN, "object-key-init"),
      number: cc11001100_hook("number", 0, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    oe = cc11001100_hook("oe", {
      type: cc11001100_hook("type", sA.PERCENTAGE_TOKEN, "object-key-init"),
      number: cc11001100_hook("number", 50, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    ie = cc11001100_hook("ie", {
      type: cc11001100_hook("type", sA.PERCENTAGE_TOKEN, "object-key-init"),
      number: cc11001100_hook("number", 100, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    ae = function (A, e) {
      if (A.type === sA.PERCENTAGE_TOKEN) return A.number / 100 * e;
      if (xA(A)) switch (A.unit) {
        case "rem":
        case "em":
          return 16 * A.number;
        case "px":
        default:
          return A.number;
      }
      return A.number;
    },
    ce = function (A) {
      if (A.type === sA.DIMENSION_TOKEN) switch (A.unit) {
        case "deg":
          return Math.PI * A.number / 180;
        case "grad":
          return Math.PI / 200 * A.number;
        case "rad":
          return A.number;
        case "turn":
          return 2 * Math.PI * A.number;
      }
      throw new Error("Unsupported angle type");
    },
    Qe = function (A) {
      return Math.PI * A / 180;
    },
    we = function (A) {
      if (A.type === sA.FUNCTION) {
        var e = cc11001100_hook("e", he[A.name], "var-init");
        if (void 0 === e) throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
        return e(A.values);
      }
      if (A.type === sA.HASH_TOKEN) {
        if (3 === A.value.length) {
          var t = cc11001100_hook("t", A.value.substring(0, 1), "var-init"),
            r = cc11001100_hook("r", A.value.substring(1, 2), "var-init"),
            n = cc11001100_hook("n", A.value.substring(2, 3), "var-init");
          return ue(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), 1);
        }
        if (4 === A.value.length) {
          t = cc11001100_hook("t", A.value.substring(0, 1), "assign"), r = cc11001100_hook("r", A.value.substring(1, 2), "assign"), n = cc11001100_hook("n", A.value.substring(2, 3), "assign");
          var B = cc11001100_hook("B", A.value.substring(3, 4), "var-init");
          return ue(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16) / 255);
        }
        if (6 === A.value.length) {
          t = cc11001100_hook("t", A.value.substring(0, 2), "assign"), r = cc11001100_hook("r", A.value.substring(2, 4), "assign"), n = cc11001100_hook("n", A.value.substring(4, 6), "assign");
          return ue(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), 1);
        }
        if (8 === A.value.length) {
          t = cc11001100_hook("t", A.value.substring(0, 2), "assign"), r = cc11001100_hook("r", A.value.substring(2, 4), "assign"), n = cc11001100_hook("n", A.value.substring(4, 6), "assign"), B = cc11001100_hook("B", A.value.substring(6, 8), "assign");
          return ue(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), parseInt(B, 16) / 255);
        }
      }
      if (A.type === sA.IDENT_TOKEN) {
        var s = cc11001100_hook("s", He[A.value.toUpperCase()], "var-init");
        if (void 0 !== s) return s;
      }
      return He.TRANSPARENT;
    },
    ue = function (A, e, t, r) {
      return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0;
    };
  function Ue(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return t < 0 && (t += cc11001100_hook("t", 1, "assign")), 1 <= t && (t -= cc11001100_hook("t", 1, "assign")), t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A;
  }
  function le(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.filter(kA), "var-init"),
      t = cc11001100_hook("t", e[0], "var-init"),
      r = cc11001100_hook("r", e[1], "var-init"),
      n = cc11001100_hook("n", e[2], "var-init"),
      B = cc11001100_hook("B", e[3], "var-init"),
      s = cc11001100_hook("s", (t.type === sA.NUMBER_TOKEN ? Qe(t.number) : ce(t)) / (2 * Math.PI), "var-init"),
      o = cc11001100_hook("o", qA(r) ? r.number / 100 : 0, "var-init"),
      i = cc11001100_hook("i", qA(n) ? n.number / 100 : 0, "var-init"),
      a = cc11001100_hook("a", void 0 !== B && qA(B) ? ae(B, 1) : 1, "var-init");
    if (0 == o) return ue(255 * i, 255 * i, 255 * i, 1);
    var c = cc11001100_hook("c", i <= .5 ? i * (1 + o) : i + o - i * o, "var-init"),
      Q = cc11001100_hook("Q", 2 * i - c, "var-init"),
      w = cc11001100_hook("w", Ue(Q, c, s + 1 / 3), "var-init"),
      u = cc11001100_hook("u", Ue(Q, c, s), "var-init"),
      U = cc11001100_hook("U", Ue(Q, c, s - 1 / 3), "var-init");
    return ue(255 * w, 255 * u, 255 * U, a);
  }
  var Ce,
    ge,
    Ee,
    Fe,
    he = cc11001100_hook("he", {
      hsl: cc11001100_hook("hsl", le, "object-key-init"),
      hsla: cc11001100_hook("hsla", le, "object-key-init"),
      rgb: cc11001100_hook("rgb", ne, "object-key-init"),
      rgba: cc11001100_hook("rgba", ne, "object-key-init")
    }, "var-init"),
    He = cc11001100_hook("He", {
      ALICEBLUE: cc11001100_hook("ALICEBLUE", 4042850303, "object-key-init"),
      ANTIQUEWHITE: cc11001100_hook("ANTIQUEWHITE", 4209760255, "object-key-init"),
      AQUA: cc11001100_hook("AQUA", 16777215, "object-key-init"),
      AQUAMARINE: cc11001100_hook("AQUAMARINE", 2147472639, "object-key-init"),
      AZURE: cc11001100_hook("AZURE", 4043309055, "object-key-init"),
      BEIGE: cc11001100_hook("BEIGE", 4126530815, "object-key-init"),
      BISQUE: cc11001100_hook("BISQUE", 4293182719, "object-key-init"),
      BLACK: cc11001100_hook("BLACK", 255, "object-key-init"),
      BLANCHEDALMOND: cc11001100_hook("BLANCHEDALMOND", 4293643775, "object-key-init"),
      BLUE: cc11001100_hook("BLUE", 65535, "object-key-init"),
      BLUEVIOLET: cc11001100_hook("BLUEVIOLET", 2318131967, "object-key-init"),
      BROWN: cc11001100_hook("BROWN", 2771004159, "object-key-init"),
      BURLYWOOD: cc11001100_hook("BURLYWOOD", 3736635391, "object-key-init"),
      CADETBLUE: cc11001100_hook("CADETBLUE", 1604231423, "object-key-init"),
      CHARTREUSE: cc11001100_hook("CHARTREUSE", 2147418367, "object-key-init"),
      CHOCOLATE: cc11001100_hook("CHOCOLATE", 3530104575, "object-key-init"),
      CORAL: cc11001100_hook("CORAL", 4286533887, "object-key-init"),
      CORNFLOWERBLUE: cc11001100_hook("CORNFLOWERBLUE", 1687547391, "object-key-init"),
      CORNSILK: cc11001100_hook("CORNSILK", 4294499583, "object-key-init"),
      CRIMSON: cc11001100_hook("CRIMSON", 3692313855, "object-key-init"),
      CYAN: cc11001100_hook("CYAN", 16777215, "object-key-init"),
      DARKBLUE: cc11001100_hook("DARKBLUE", 35839, "object-key-init"),
      DARKCYAN: cc11001100_hook("DARKCYAN", 9145343, "object-key-init"),
      DARKGOLDENROD: cc11001100_hook("DARKGOLDENROD", 3095837695, "object-key-init"),
      DARKGRAY: cc11001100_hook("DARKGRAY", 2846468607, "object-key-init"),
      DARKGREEN: cc11001100_hook("DARKGREEN", 6553855, "object-key-init"),
      DARKGREY: cc11001100_hook("DARKGREY", 2846468607, "object-key-init"),
      DARKKHAKI: cc11001100_hook("DARKKHAKI", 3182914559, "object-key-init"),
      DARKMAGENTA: cc11001100_hook("DARKMAGENTA", 2332068863, "object-key-init"),
      DARKOLIVEGREEN: cc11001100_hook("DARKOLIVEGREEN", 1433087999, "object-key-init"),
      DARKORANGE: cc11001100_hook("DARKORANGE", 4287365375, "object-key-init"),
      DARKORCHID: cc11001100_hook("DARKORCHID", 2570243327, "object-key-init"),
      DARKRED: cc11001100_hook("DARKRED", 2332033279, "object-key-init"),
      DARKSALMON: cc11001100_hook("DARKSALMON", 3918953215, "object-key-init"),
      DARKSEAGREEN: cc11001100_hook("DARKSEAGREEN", 2411499519, "object-key-init"),
      DARKSLATEBLUE: cc11001100_hook("DARKSLATEBLUE", 1211993087, "object-key-init"),
      DARKSLATEGRAY: cc11001100_hook("DARKSLATEGRAY", 793726975, "object-key-init"),
      DARKSLATEGREY: cc11001100_hook("DARKSLATEGREY", 793726975, "object-key-init"),
      DARKTURQUOISE: cc11001100_hook("DARKTURQUOISE", 13554175, "object-key-init"),
      DARKVIOLET: cc11001100_hook("DARKVIOLET", 2483082239, "object-key-init"),
      DEEPPINK: cc11001100_hook("DEEPPINK", 4279538687, "object-key-init"),
      DEEPSKYBLUE: cc11001100_hook("DEEPSKYBLUE", 12582911, "object-key-init"),
      DIMGRAY: cc11001100_hook("DIMGRAY", 1768516095, "object-key-init"),
      DIMGREY: cc11001100_hook("DIMGREY", 1768516095, "object-key-init"),
      DODGERBLUE: cc11001100_hook("DODGERBLUE", 512819199, "object-key-init"),
      FIREBRICK: cc11001100_hook("FIREBRICK", 2988581631, "object-key-init"),
      FLORALWHITE: cc11001100_hook("FLORALWHITE", 4294635775, "object-key-init"),
      FORESTGREEN: cc11001100_hook("FORESTGREEN", 579543807, "object-key-init"),
      FUCHSIA: cc11001100_hook("FUCHSIA", 4278255615, "object-key-init"),
      GAINSBORO: cc11001100_hook("GAINSBORO", 3705462015, "object-key-init"),
      GHOSTWHITE: cc11001100_hook("GHOSTWHITE", 4177068031, "object-key-init"),
      GOLD: cc11001100_hook("GOLD", 4292280575, "object-key-init"),
      GOLDENROD: cc11001100_hook("GOLDENROD", 3668254975, "object-key-init"),
      GRAY: cc11001100_hook("GRAY", 2155905279, "object-key-init"),
      GREEN: cc11001100_hook("GREEN", 8388863, "object-key-init"),
      GREENYELLOW: cc11001100_hook("GREENYELLOW", 2919182335, "object-key-init"),
      GREY: cc11001100_hook("GREY", 2155905279, "object-key-init"),
      HONEYDEW: cc11001100_hook("HONEYDEW", 4043305215, "object-key-init"),
      HOTPINK: cc11001100_hook("HOTPINK", 4285117695, "object-key-init"),
      INDIANRED: cc11001100_hook("INDIANRED", 3445382399, "object-key-init"),
      INDIGO: cc11001100_hook("INDIGO", 1258324735, "object-key-init"),
      IVORY: cc11001100_hook("IVORY", 4294963455, "object-key-init"),
      KHAKI: cc11001100_hook("KHAKI", 4041641215, "object-key-init"),
      LAVENDER: cc11001100_hook("LAVENDER", 3873897215, "object-key-init"),
      LAVENDERBLUSH: cc11001100_hook("LAVENDERBLUSH", 4293981695, "object-key-init"),
      LAWNGREEN: cc11001100_hook("LAWNGREEN", 2096890111, "object-key-init"),
      LEMONCHIFFON: cc11001100_hook("LEMONCHIFFON", 4294626815, "object-key-init"),
      LIGHTBLUE: cc11001100_hook("LIGHTBLUE", 2916673279, "object-key-init"),
      LIGHTCORAL: cc11001100_hook("LIGHTCORAL", 4034953471, "object-key-init"),
      LIGHTCYAN: cc11001100_hook("LIGHTCYAN", 3774873599, "object-key-init"),
      LIGHTGOLDENRODYELLOW: cc11001100_hook("LIGHTGOLDENRODYELLOW", 4210742015, "object-key-init"),
      LIGHTGRAY: cc11001100_hook("LIGHTGRAY", 3553874943, "object-key-init"),
      LIGHTGREEN: cc11001100_hook("LIGHTGREEN", 2431553791, "object-key-init"),
      LIGHTGREY: cc11001100_hook("LIGHTGREY", 3553874943, "object-key-init"),
      LIGHTPINK: cc11001100_hook("LIGHTPINK", 4290167295, "object-key-init"),
      LIGHTSALMON: cc11001100_hook("LIGHTSALMON", 4288707327, "object-key-init"),
      LIGHTSEAGREEN: cc11001100_hook("LIGHTSEAGREEN", 548580095, "object-key-init"),
      LIGHTSKYBLUE: cc11001100_hook("LIGHTSKYBLUE", 2278488831, "object-key-init"),
      LIGHTSLATEGRAY: cc11001100_hook("LIGHTSLATEGRAY", 2005441023, "object-key-init"),
      LIGHTSLATEGREY: cc11001100_hook("LIGHTSLATEGREY", 2005441023, "object-key-init"),
      LIGHTSTEELBLUE: cc11001100_hook("LIGHTSTEELBLUE", 2965692159, "object-key-init"),
      LIGHTYELLOW: cc11001100_hook("LIGHTYELLOW", 4294959359, "object-key-init"),
      LIME: cc11001100_hook("LIME", 16711935, "object-key-init"),
      LIMEGREEN: cc11001100_hook("LIMEGREEN", 852308735, "object-key-init"),
      LINEN: cc11001100_hook("LINEN", 4210091775, "object-key-init"),
      MAGENTA: cc11001100_hook("MAGENTA", 4278255615, "object-key-init"),
      MAROON: cc11001100_hook("MAROON", 2147483903, "object-key-init"),
      MEDIUMAQUAMARINE: cc11001100_hook("MEDIUMAQUAMARINE", 1724754687, "object-key-init"),
      MEDIUMBLUE: cc11001100_hook("MEDIUMBLUE", 52735, "object-key-init"),
      MEDIUMORCHID: cc11001100_hook("MEDIUMORCHID", 3126187007, "object-key-init"),
      MEDIUMPURPLE: cc11001100_hook("MEDIUMPURPLE", 2473647103, "object-key-init"),
      MEDIUMSEAGREEN: cc11001100_hook("MEDIUMSEAGREEN", 1018393087, "object-key-init"),
      MEDIUMSLATEBLUE: cc11001100_hook("MEDIUMSLATEBLUE", 2070474495, "object-key-init"),
      MEDIUMSPRINGGREEN: cc11001100_hook("MEDIUMSPRINGGREEN", 16423679, "object-key-init"),
      MEDIUMTURQUOISE: cc11001100_hook("MEDIUMTURQUOISE", 1221709055, "object-key-init"),
      MEDIUMVIOLETRED: cc11001100_hook("MEDIUMVIOLETRED", 3340076543, "object-key-init"),
      MIDNIGHTBLUE: cc11001100_hook("MIDNIGHTBLUE", 421097727, "object-key-init"),
      MINTCREAM: cc11001100_hook("MINTCREAM", 4127193855, "object-key-init"),
      MISTYROSE: cc11001100_hook("MISTYROSE", 4293190143, "object-key-init"),
      MOCCASIN: cc11001100_hook("MOCCASIN", 4293178879, "object-key-init"),
      NAVAJOWHITE: cc11001100_hook("NAVAJOWHITE", 4292783615, "object-key-init"),
      NAVY: cc11001100_hook("NAVY", 33023, "object-key-init"),
      OLDLACE: cc11001100_hook("OLDLACE", 4260751103, "object-key-init"),
      OLIVE: cc11001100_hook("OLIVE", 2155872511, "object-key-init"),
      OLIVEDRAB: cc11001100_hook("OLIVEDRAB", 1804477439, "object-key-init"),
      ORANGE: cc11001100_hook("ORANGE", 4289003775, "object-key-init"),
      ORANGERED: cc11001100_hook("ORANGERED", 4282712319, "object-key-init"),
      ORCHID: cc11001100_hook("ORCHID", 3664828159, "object-key-init"),
      PALEGOLDENROD: cc11001100_hook("PALEGOLDENROD", 4008225535, "object-key-init"),
      PALEGREEN: cc11001100_hook("PALEGREEN", 2566625535, "object-key-init"),
      PALETURQUOISE: cc11001100_hook("PALETURQUOISE", 2951671551, "object-key-init"),
      PALEVIOLETRED: cc11001100_hook("PALEVIOLETRED", 3681588223, "object-key-init"),
      PAPAYAWHIP: cc11001100_hook("PAPAYAWHIP", 4293907967, "object-key-init"),
      PEACHPUFF: cc11001100_hook("PEACHPUFF", 4292524543, "object-key-init"),
      PERU: cc11001100_hook("PERU", 3448061951, "object-key-init"),
      PINK: cc11001100_hook("PINK", 4290825215, "object-key-init"),
      PLUM: cc11001100_hook("PLUM", 3718307327, "object-key-init"),
      POWDERBLUE: cc11001100_hook("POWDERBLUE", 2967529215, "object-key-init"),
      PURPLE: cc11001100_hook("PURPLE", 2147516671, "object-key-init"),
      REBECCAPURPLE: cc11001100_hook("REBECCAPURPLE", 1714657791, "object-key-init"),
      RED: cc11001100_hook("RED", 4278190335, "object-key-init"),
      ROSYBROWN: cc11001100_hook("ROSYBROWN", 3163525119, "object-key-init"),
      ROYALBLUE: cc11001100_hook("ROYALBLUE", 1097458175, "object-key-init"),
      SADDLEBROWN: cc11001100_hook("SADDLEBROWN", 2336560127, "object-key-init"),
      SALMON: cc11001100_hook("SALMON", 4202722047, "object-key-init"),
      SANDYBROWN: cc11001100_hook("SANDYBROWN", 4104413439, "object-key-init"),
      SEAGREEN: cc11001100_hook("SEAGREEN", 780883967, "object-key-init"),
      SEASHELL: cc11001100_hook("SEASHELL", 4294307583, "object-key-init"),
      SIENNA: cc11001100_hook("SIENNA", 2689740287, "object-key-init"),
      SILVER: cc11001100_hook("SILVER", 3233857791, "object-key-init"),
      SKYBLUE: cc11001100_hook("SKYBLUE", 2278484991, "object-key-init"),
      SLATEBLUE: cc11001100_hook("SLATEBLUE", 1784335871, "object-key-init"),
      SLATEGRAY: cc11001100_hook("SLATEGRAY", 1887473919, "object-key-init"),
      SLATEGREY: cc11001100_hook("SLATEGREY", 1887473919, "object-key-init"),
      SNOW: cc11001100_hook("SNOW", 4294638335, "object-key-init"),
      SPRINGGREEN: cc11001100_hook("SPRINGGREEN", 16744447, "object-key-init"),
      STEELBLUE: cc11001100_hook("STEELBLUE", 1182971135, "object-key-init"),
      TAN: cc11001100_hook("TAN", 3535047935, "object-key-init"),
      TEAL: cc11001100_hook("TEAL", 8421631, "object-key-init"),
      THISTLE: cc11001100_hook("THISTLE", 3636451583, "object-key-init"),
      TOMATO: cc11001100_hook("TOMATO", 4284696575, "object-key-init"),
      TRANSPARENT: cc11001100_hook("TRANSPARENT", 0, "object-key-init"),
      TURQUOISE: cc11001100_hook("TURQUOISE", 1088475391, "object-key-init"),
      VIOLET: cc11001100_hook("VIOLET", 4001558271, "object-key-init"),
      WHEAT: cc11001100_hook("WHEAT", 4125012991, "object-key-init"),
      WHITE: cc11001100_hook("WHITE", 4294967295, "object-key-init"),
      WHITESMOKE: cc11001100_hook("WHITESMOKE", 4126537215, "object-key-init"),
      YELLOW: cc11001100_hook("YELLOW", 4294902015, "object-key-init"),
      YELLOWGREEN: cc11001100_hook("YELLOWGREEN", 2597139199, "object-key-init")
    }, "var-init");
  (ge = cc11001100_hook("ge", Ce || (Ce = cc11001100_hook("Ce", {}, "assign")), "assign"))[ge.VALUE = cc11001100_hook("ge.VALUE", 0, "assign")] = cc11001100_hook("(ge = Ce || (Ce = {}))[ge.VALUE = 0]", "VALUE", "assign"), ge[ge.LIST = cc11001100_hook("ge.LIST", 1, "assign")] = cc11001100_hook("ge[ge.LIST = 1]", "LIST", "assign"), ge[ge.IDENT_VALUE = cc11001100_hook("ge.IDENT_VALUE", 2, "assign")] = cc11001100_hook("ge[ge.IDENT_VALUE = 2]", "IDENT_VALUE", "assign"), ge[ge.TYPE_VALUE = cc11001100_hook("ge.TYPE_VALUE", 3, "assign")] = cc11001100_hook("ge[ge.TYPE_VALUE = 3]", "TYPE_VALUE", "assign"), ge[ge.TOKEN_VALUE = cc11001100_hook("ge.TOKEN_VALUE", 4, "assign")] = cc11001100_hook("ge[ge.TOKEN_VALUE = 4]", "TOKEN_VALUE", "assign"), (Fe = cc11001100_hook("Fe", Ee || (Ee = cc11001100_hook("Ee", {}, "assign")), "assign"))[Fe.BORDER_BOX = cc11001100_hook("Fe.BORDER_BOX", 0, "assign")] = cc11001100_hook("(Fe = Ee || (Ee = {}))[Fe.BORDER_BOX = 0]", "BORDER_BOX", "assign"), Fe[Fe.PADDING_BOX = cc11001100_hook("Fe.PADDING_BOX", 1, "assign")] = cc11001100_hook("Fe[Fe.PADDING_BOX = 1]", "PADDING_BOX", "assign");
  function de(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", we(A[0]), "var-init"),
      t = cc11001100_hook("t", A[1], "var-init");
    return t && qA(t) ? {
      color: cc11001100_hook("color", e, "object-key-init"),
      stop: cc11001100_hook("stop", t, "object-key-init")
    } : {
      color: cc11001100_hook("color", e, "object-key-init"),
      stop: cc11001100_hook("stop", null, "object-key-init")
    };
  }
  function fe(A, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", A[0], "var-init"),
      r = cc11001100_hook("r", A[A.length - 1], "var-init");
    null === e.stop && (e.stop = cc11001100_hook("e.stop", se, "assign")), null === r.stop && (r.stop = cc11001100_hook("r.stop", ie, "assign"));
    for (var n = cc11001100_hook("n", [], "var-init"), B = cc11001100_hook("B", 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < A.length; s++) {
      var o = cc11001100_hook("o", A[s].stop, "var-init");
      if (null !== o) {
        var i = cc11001100_hook("i", ae(o, t), "var-init");
        B < i ? n.push(i) : n.push(B), B = cc11001100_hook("B", i, "assign");
      } else n.push(null);
    }
    var a = cc11001100_hook("a", null, "var-init");
    for (s = cc11001100_hook("s", 0, "assign"); s < n.length; s++) {
      var c = cc11001100_hook("c", n[s], "var-init");
      if (null === c) null === a && (a = cc11001100_hook("a", s, "assign"));else if (null !== a) {
        for (var Q = cc11001100_hook("Q", s - a, "var-init"), w = cc11001100_hook("w", (c - n[a - 1]) / (1 + Q), "var-init"), u = cc11001100_hook("u", 1, "var-init"); u <= Q; u++) n[a + u - 1] = cc11001100_hook("n[a + u - 1]", w * u, "assign");
        a = cc11001100_hook("a", null, "assign");
      }
    }
    return A.map(function (A, e) {
      return {
        color: cc11001100_hook("color", A.color, "object-key-init"),
        stop: cc11001100_hook("stop", Math.max(Math.min(1, n[e] / t), 0), "object-key-init")
      };
    });
  }
  function pe(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", "number" == typeof A ? A : function (A, e, t) {
        var r = cc11001100_hook("r", e / 2, "var-init"),
          n = cc11001100_hook("n", t / 2, "var-init"),
          B = cc11001100_hook("B", ae(A[0], e) - r, "var-init"),
          s = cc11001100_hook("s", n - ae(A[1], t), "var-init");
        return (Math.atan2(s, B) + 2 * Math.PI) % (2 * Math.PI);
      }(A, e, t), "var-init"),
      n = cc11001100_hook("n", Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), "var-init"),
      B = cc11001100_hook("B", e / 2, "var-init"),
      s = cc11001100_hook("s", t / 2, "var-init"),
      o = cc11001100_hook("o", n / 2, "var-init"),
      i = cc11001100_hook("i", Math.sin(r - Math.PI / 2) * o, "var-init"),
      a = cc11001100_hook("a", Math.cos(r - Math.PI / 2) * o, "var-init");
    return [n, B - a, B + a, s - i, s + i];
  }
  function Ne(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return Math.sqrt(A * A + e * e);
  }
  function Ke(A, e, B, s, o) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    return [[0, 0], [0, e], [A, 0], [A, e]].reduce(function (A, e) {
      var t = cc11001100_hook("t", e[0], "var-init"),
        r = cc11001100_hook("r", e[1], "var-init"),
        n = cc11001100_hook("n", Ne(B - t, s - r), "var-init");
      return (o ? n < A.optimumDistance : n > A.optimumDistance) ? {
        optimumCorner: cc11001100_hook("optimumCorner", e, "object-key-init"),
        optimumDistance: cc11001100_hook("optimumDistance", n, "object-key-init")
      } : A;
    }, {
      optimumDistance: cc11001100_hook("optimumDistance", o ? 1 / 0 : -1 / 0, "object-key-init"),
      optimumCorner: cc11001100_hook("optimumCorner", null, "object-key-init")
    }).optimumCorner;
  }
  function Ie(A) {
    cc11001100_hook("A", A, "function-parameter");
    var n = cc11001100_hook("n", Qe(180), "var-init"),
      B = cc11001100_hook("B", [], "var-init");
    return WA(A).forEach(function (A, e) {
      if (0 === e) {
        var t = cc11001100_hook("t", A[0], "var-init");
        if (t.type === sA.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(t.value)) return void (n = cc11001100_hook("n", Ae(A), "assign"));
        if ($A(t)) return void (n = cc11001100_hook("n", (ce(t) + Qe(270)) % Qe(360), "assign"));
      }
      var r = cc11001100_hook("r", de(A), "var-init");
      B.push(r);
    }), {
      angle: cc11001100_hook("angle", n, "object-key-init"),
      stops: cc11001100_hook("stops", B, "object-key-init"),
      type: cc11001100_hook("type", xe.LINEAR_GRADIENT, "object-key-init")
    };
  }
  function Te(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3];
  }
  var me = cc11001100_hook("me", {
      name: cc11001100_hook("name", "background-clip", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "border-box", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(Fe[Fe.CONTENT_BOX = cc11001100_hook("Fe.CONTENT_BOX", 2, "assign")] = cc11001100_hook("Fe[Fe.CONTENT_BOX = 2]", "CONTENT_BOX", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return A.map(function (A) {
          if (zA(A)) switch (A.value) {
            case "padding-box":
              return Ee.PADDING_BOX;
            case "content-box":
              return Ee.CONTENT_BOX;
          }
          return Ee.BORDER_BOX;
        });
      }
    }, "var-init"),
    Re = cc11001100_hook("Re", {
      name: cc11001100_hook("name", "background-color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TYPE_VALUE, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    }, "var-init"),
    Le = function (A, e, t, r, n) {
      var B = cc11001100_hook("B", "http://www.w3.org/2000/svg", "var-init"),
        s = cc11001100_hook("s", document.createElementNS(B, "svg"), "var-init"),
        o = cc11001100_hook("o", document.createElementNS(B, "foreignObject"), "var-init");
      return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(o), o.appendChild(n), s;
    },
    ve = function (r) {
      return new Promise(function (A, e) {
        var t = cc11001100_hook("t", new Image(), "var-init");
        t.onload = cc11001100_hook("t.onload", function () {
          return A(t);
        }, "assign"), t.onerror = cc11001100_hook("t.onerror", e, "assign"), t.src = cc11001100_hook("t.src", "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r)), "assign");
      });
    },
    Oe = cc11001100_hook("Oe", {
      get SUPPORT_RANGE_BOUNDS() {
        var A = cc11001100_hook("A", function (A) {
          if (A.createRange) {
            var e = cc11001100_hook("e", A.createRange(), "var-init");
            if (e.getBoundingClientRect) {
              var t = cc11001100_hook("t", A.createElement("boundtest"), "var-init");
              t.style.height = cc11001100_hook("t.style.height", "123px", "assign"), t.style.display = cc11001100_hook("t.style.display", "block", "assign"), A.body.appendChild(t), e.selectNode(t);
              var r = cc11001100_hook("r", e.getBoundingClientRect(), "var-init"),
                n = cc11001100_hook("n", Math.round(r.height), "var-init");
              if (A.body.removeChild(t), 123 === n) return !0;
            }
          }
          return !1;
        }(document), "var-init");
        return Object.defineProperty(Oe, "SUPPORT_RANGE_BOUNDS", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_SVG_DRAWING() {
        var A = cc11001100_hook("A", function (A) {
          var e = cc11001100_hook("e", new Image(), "var-init"),
            t = cc11001100_hook("t", A.createElement("canvas"), "var-init"),
            r = cc11001100_hook("r", t.getContext("2d"), "var-init");
          if (!r) return !1;
          e.src = cc11001100_hook("e.src", "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>", "assign");
          try {
            r.drawImage(e, 0, 0), t.toDataURL();
          } catch (A) {
            return !1;
          }
          return !0;
        }(document), "var-init");
        return Object.defineProperty(Oe, "SUPPORT_SVG_DRAWING", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var A = cc11001100_hook("A", "function" == typeof Array.from && "function" == typeof window.fetch ? function (r) {
          var A = cc11001100_hook("A", r.createElement("canvas"), "var-init"),
            n = cc11001100_hook("n", 100, "var-init");
          A.width = cc11001100_hook("A.width", n, "assign"), A.height = cc11001100_hook("A.height", n, "assign");
          var B = cc11001100_hook("B", A.getContext("2d"), "var-init");
          if (!B) return Promise.reject(!1);
          B.fillStyle = cc11001100_hook("B.fillStyle", "rgb(0, 255, 0)", "assign"), B.fillRect(0, 0, n, n);
          var e = cc11001100_hook("e", new Image(), "var-init"),
            s = cc11001100_hook("s", A.toDataURL(), "var-init");
          e.src = cc11001100_hook("e.src", s, "assign");
          var t = cc11001100_hook("t", Le(n, n, 0, 0, e), "var-init");
          return B.fillStyle = cc11001100_hook("B.fillStyle", "red", "assign"), B.fillRect(0, 0, n, n), ve(t).then(function (A) {
            B.drawImage(A, 0, 0);
            var e = cc11001100_hook("e", B.getImageData(0, 0, n, n).data, "var-init");
            B.fillStyle = cc11001100_hook("B.fillStyle", "red", "assign"), B.fillRect(0, 0, n, n);
            var t = cc11001100_hook("t", r.createElement("div"), "var-init");
            return t.style.backgroundImage = cc11001100_hook("t.style.backgroundImage", "url(" + s + ")", "assign"), t.style.height = cc11001100_hook("t.style.height", "100px", "assign"), Te(e) ? ve(Le(n, n, 0, 0, t)) : Promise.reject(!1);
          }).then(function (A) {
            return B.drawImage(A, 0, 0), Te(B.getImageData(0, 0, n, n).data);
          }).catch(function () {
            return !1;
          });
        }(document) : Promise.resolve(!1), "var-init");
        return Object.defineProperty(Oe, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_CORS_IMAGES() {
        var A = cc11001100_hook("A", void 0 !== new Image().crossOrigin, "var-init");
        return Object.defineProperty(Oe, "SUPPORT_CORS_IMAGES", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_RESPONSE_TYPE() {
        var A = cc11001100_hook("A", "string" == typeof new XMLHttpRequest().responseType, "var-init");
        return Object.defineProperty(Oe, "SUPPORT_RESPONSE_TYPE", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_CORS_XHR() {
        var A = cc11001100_hook("A", "withCredentials" in new XMLHttpRequest(), "var-init");
        return Object.defineProperty(Oe, "SUPPORT_CORS_XHR", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      }
    }, "var-init"),
    De = cc11001100_hook("De", (be.prototype.debug = cc11001100_hook("be.prototype.debug", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, [this.id, this.getTime() + "ms"].concat(A)) : this.info.apply(this, A));
    }, "assign"), be.prototype.getTime = cc11001100_hook("be.prototype.getTime", function () {
      return Date.now() - this.start;
    }, "assign"), be.create = cc11001100_hook("be.create", function (A) {
      be.instances[A.id] = cc11001100_hook("be.instances[A.id]", new be(A), "assign");
    }, "assign"), be.destroy = cc11001100_hook("be.destroy", function (A) {
      delete be.instances[A];
    }, "assign"), be.getInstance = cc11001100_hook("be.getInstance", function (A) {
      var e = cc11001100_hook("e", be.instances[A], "var-init");
      if (void 0 === e) throw new Error("No logger instance found with id " + A);
      return e;
    }, "assign"), be.prototype.info = cc11001100_hook("be.prototype.info", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, [this.id, this.getTime() + "ms"].concat(A));
    }, "assign"), be.prototype.error = cc11001100_hook("be.prototype.error", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, [this.id, this.getTime() + "ms"].concat(A)) : this.info.apply(this, A));
    }, "assign"), be.instances = cc11001100_hook("be.instances", {}, "assign"), be), "var-init");
  function be(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.id, "var-init"),
      t = cc11001100_hook("t", A.enabled, "var-init");
    this.id = cc11001100_hook("this.id", e, "assign"), this.enabled = cc11001100_hook("this.enabled", t, "assign"), this.start = cc11001100_hook("this.start", Date.now(), "assign");
  }
  var Se = cc11001100_hook("Se", (Me.create = cc11001100_hook("Me.create", function (A, e) {
    return Me._caches[A] = cc11001100_hook("Me._caches[A]", new ye(A, e), "assign");
  }, "assign"), Me.destroy = cc11001100_hook("Me.destroy", function (A) {
    delete Me._caches[A];
  }, "assign"), Me.open = cc11001100_hook("Me.open", function (A) {
    var e = cc11001100_hook("e", Me._caches[A], "var-init");
    if (void 0 !== e) return e;
    throw new Error('Cache with key "' + A + '" not found');
  }, "assign"), Me.getOrigin = cc11001100_hook("Me.getOrigin", function (A) {
    var e = cc11001100_hook("e", Me._link, "var-init");
    return e ? (e.href = cc11001100_hook("e.href", A, "assign"), e.href = cc11001100_hook("e.href", e.href, "assign"), e.protocol + e.hostname + e.port) : "about:blank";
  }, "assign"), Me.isSameOrigin = cc11001100_hook("Me.isSameOrigin", function (A) {
    return Me.getOrigin(A) === Me._origin;
  }, "assign"), Me.setContext = cc11001100_hook("Me.setContext", function (A) {
    Me._link = cc11001100_hook("Me._link", A.document.createElement("a"), "assign"), Me._origin = cc11001100_hook("Me._origin", Me.getOrigin(A.location.href), "assign");
  }, "assign"), Me.getInstance = cc11001100_hook("Me.getInstance", function () {
    var A = cc11001100_hook("A", Me._current, "var-init");
    if (null === A) throw new Error("No cache instance attached");
    return A;
  }, "assign"), Me.attachInstance = cc11001100_hook("Me.attachInstance", function (A) {
    Me._current = cc11001100_hook("Me._current", A, "assign");
  }, "assign"), Me.detachInstance = cc11001100_hook("Me.detachInstance", function () {
    Me._current = cc11001100_hook("Me._current", null, "assign");
  }, "assign"), Me._caches = cc11001100_hook("Me._caches", {}, "assign"), Me._origin = cc11001100_hook("Me._origin", "about:blank", "assign"), Me._current = cc11001100_hook("Me._current", null, "assign"), Me), "var-init");
  function Me() {}
  var ye = cc11001100_hook("ye", (_e.prototype.addImage = cc11001100_hook("_e.prototype.addImage", function (A) {
    var e = cc11001100_hook("e", Promise.resolve(), "var-init");
    return this.has(A) || (Ye(A) || Ge(A)) && (this._cache[A] = cc11001100_hook("this._cache[A]", this.loadImage(A), "assign")), e;
  }, "assign"), _e.prototype.match = cc11001100_hook("_e.prototype.match", function (A) {
    return this._cache[A];
  }, "assign"), _e.prototype.loadImage = cc11001100_hook("_e.prototype.loadImage", function (s) {
    return a(this, void 0, void 0, function () {
      var e,
        r,
        t,
        n,
        B = cc11001100_hook("B", this, "var-init");
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            return e = cc11001100_hook("e", Se.isSameOrigin(s), "assign"), r = cc11001100_hook("r", !ke(s) && !0 === this._options.useCORS && Oe.SUPPORT_CORS_IMAGES && !e, "assign"), t = cc11001100_hook("t", !ke(s) && !e && "string" == typeof this._options.proxy && Oe.SUPPORT_CORS_XHR && !r, "assign"), e || !1 !== this._options.allowTaint || ke(s) || t || r ? (n = cc11001100_hook("n", s, "assign"), t ? [4, this.proxy(n)] : [3, 2]) : [2];
          case 1:
            n = cc11001100_hook("n", A.sent(), "assign"), A.label = cc11001100_hook("A.label", 2, "assign");
          case 2:
            return De.getInstance(this.id).debug("Added image " + s.substring(0, 256)), [4, new Promise(function (A, e) {
              var t = cc11001100_hook("t", new Image(), "var-init");
              t.onload = cc11001100_hook("t.onload", function () {
                return A(t);
              }, "assign"), t.onerror = cc11001100_hook("t.onerror", e, "assign"), (We(n) || r) && (t.crossOrigin = cc11001100_hook("t.crossOrigin", "anonymous", "assign")), t.src = cc11001100_hook("t.src", n, "assign"), !0 === t.complete && setTimeout(function () {
                return A(t);
              }, 500), 0 < B._options.imageTimeout && setTimeout(function () {
                return e("Timed out (" + B._options.imageTimeout + "ms) loading image");
              }, B._options.imageTimeout);
            })];
          case 3:
            return [2, A.sent()];
        }
      });
    });
  }, "assign"), _e.prototype.has = cc11001100_hook("_e.prototype.has", function (A) {
    return void 0 !== this._cache[A];
  }, "assign"), _e.prototype.keys = cc11001100_hook("_e.prototype.keys", function () {
    return Promise.resolve(Object.keys(this._cache));
  }, "assign"), _e.prototype.proxy = cc11001100_hook("_e.prototype.proxy", function (B) {
    var s = cc11001100_hook("s", this, "var-init"),
      o = cc11001100_hook("o", this._options.proxy, "var-init");
    if (!o) throw new Error("No proxy defined");
    var i = cc11001100_hook("i", B.substring(0, 256), "var-init");
    return new Promise(function (e, t) {
      var r = cc11001100_hook("r", Oe.SUPPORT_RESPONSE_TYPE ? "blob" : "text", "var-init"),
        n = cc11001100_hook("n", new XMLHttpRequest(), "var-init");
      if (n.onload = cc11001100_hook("n.onload", function () {
        if (200 === n.status) {
          if ("text" == r) e(n.response);else {
            var A = cc11001100_hook("A", new FileReader(), "var-init");
            A.addEventListener("load", function () {
              return e(A.result);
            }, !1), A.addEventListener("error", function (A) {
              return t(A);
            }, !1), A.readAsDataURL(n.response);
          }
        } else t("Failed to proxy resource " + i + " with status code " + n.status);
      }, "assign"), n.onerror = cc11001100_hook("n.onerror", t, "assign"), n.open("GET", o + "?url=" + encodeURIComponent(B) + "&responseType=" + r), "text" != r && n instanceof XMLHttpRequest && (n.responseType = cc11001100_hook("n.responseType", r, "assign")), s._options.imageTimeout) {
        var A = cc11001100_hook("A", s._options.imageTimeout, "var-init");
        n.timeout = cc11001100_hook("n.timeout", A, "assign"), n.ontimeout = cc11001100_hook("n.ontimeout", function () {
          return t("Timed out (" + A + "ms) proxying " + i);
        }, "assign");
      }
      n.send();
    });
  }, "assign"), _e), "var-init");
  function _e(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.id = cc11001100_hook("this.id", A, "assign"), this._options = cc11001100_hook("this._options", e, "assign"), this._cache = cc11001100_hook("this._cache", {}, "assign");
  }
  function Pe(A) {
    cc11001100_hook("A", A, "function-parameter");
    var n = cc11001100_hook("n", rt.CIRCLE, "var-init"),
      B = cc11001100_hook("B", Bt.FARTHEST_CORNER, "var-init"),
      s = cc11001100_hook("s", [], "var-init"),
      o = cc11001100_hook("o", [], "var-init");
    return WA(A).forEach(function (A, e) {
      var t = cc11001100_hook("t", !0, "var-init");
      if (0 === e ? t = cc11001100_hook("t", A.reduce(function (A, e) {
        if (zA(e)) switch (e.value) {
          case "center":
            return o.push(oe), !1;
          case "top":
          case "left":
            return o.push(se), !1;
          case "right":
          case "bottom":
            return o.push(ie), !1;
        } else if (qA(e) || YA(e)) return o.push(e), !1;
        return A;
      }, t), "assign") : 1 === e && (t = cc11001100_hook("t", A.reduce(function (A, e) {
        if (zA(e)) switch (e.value) {
          case "circle":
            return n = cc11001100_hook("n", rt.CIRCLE, "assign"), !1;
          case et:
            return n = cc11001100_hook("n", rt.ELLIPSE, "assign"), !1;
          case tt:
          case Ze:
            return B = cc11001100_hook("B", Bt.CLOSEST_SIDE, "assign"), !1;
          case je:
            return B = cc11001100_hook("B", Bt.FARTHEST_SIDE, "assign"), !1;
          case $e:
            return B = cc11001100_hook("B", Bt.CLOSEST_CORNER, "assign"), !1;
          case "cover":
          case At:
            return B = cc11001100_hook("B", Bt.FARTHEST_CORNER, "assign"), !1;
        } else if (YA(e) || qA(e)) return Array.isArray(B) || (B = cc11001100_hook("B", [], "assign")), B.push(e), !1;
        return A;
      }, t), "assign")), t) {
        var r = cc11001100_hook("r", de(A), "var-init");
        s.push(r);
      }
    }), {
      size: cc11001100_hook("size", B, "object-key-init"),
      shape: cc11001100_hook("shape", n, "object-key-init"),
      stops: cc11001100_hook("stops", s, "object-key-init"),
      position: cc11001100_hook("position", o, "object-key-init"),
      type: cc11001100_hook("type", xe.RADIAL_GRADIENT, "object-key-init")
    };
  }
  var xe,
    Ve,
    ze = cc11001100_hook("ze", /^data:image\/svg\+xml/i, "var-init"),
    Xe = cc11001100_hook("Xe", /^data:image\/.*;base64,/i, "var-init"),
    Je = cc11001100_hook("Je", /^data:image\/.*/i, "var-init"),
    Ge = function (A) {
      return Oe.SUPPORT_SVG_DRAWING || !qe(A);
    },
    ke = function (A) {
      return Je.test(A);
    },
    We = function (A) {
      return Xe.test(A);
    },
    Ye = function (A) {
      return "blob" === A.substr(0, 4);
    },
    qe = function (A) {
      return "svg" === A.substr(-3).toLowerCase() || ze.test(A);
    },
    Ze = cc11001100_hook("Ze", "closest-side", "var-init"),
    je = cc11001100_hook("je", "farthest-side", "var-init"),
    $e = cc11001100_hook("$e", "closest-corner", "var-init"),
    At = cc11001100_hook("At", "farthest-corner", "var-init"),
    et = cc11001100_hook("et", "ellipse", "var-init"),
    tt = cc11001100_hook("tt", "contain", "var-init");
  (Ve = cc11001100_hook("Ve", xe || (xe = cc11001100_hook("xe", {}, "assign")), "assign"))[Ve.URL = cc11001100_hook("Ve.URL", 0, "assign")] = cc11001100_hook("(Ve = xe || (xe = {}))[Ve.URL = 0]", "URL", "assign"), Ve[Ve.LINEAR_GRADIENT = cc11001100_hook("Ve.LINEAR_GRADIENT", 1, "assign")] = cc11001100_hook("Ve[Ve.LINEAR_GRADIENT = 1]", "LINEAR_GRADIENT", "assign"), Ve[Ve.RADIAL_GRADIENT = cc11001100_hook("Ve.RADIAL_GRADIENT", 2, "assign")] = cc11001100_hook("Ve[Ve.RADIAL_GRADIENT = 2]", "RADIAL_GRADIENT", "assign");
  var rt, nt, Bt, st;
  (nt = cc11001100_hook("nt", rt || (rt = cc11001100_hook("rt", {}, "assign")), "assign"))[nt.CIRCLE = cc11001100_hook("nt.CIRCLE", 0, "assign")] = cc11001100_hook("(nt = rt || (rt = {}))[nt.CIRCLE = 0]", "CIRCLE", "assign"), nt[nt.ELLIPSE = cc11001100_hook("nt.ELLIPSE", 1, "assign")] = cc11001100_hook("nt[nt.ELLIPSE = 1]", "ELLIPSE", "assign"), (st = cc11001100_hook("st", Bt || (Bt = cc11001100_hook("Bt", {}, "assign")), "assign"))[st.CLOSEST_SIDE = cc11001100_hook("st.CLOSEST_SIDE", 0, "assign")] = cc11001100_hook("(st = Bt || (Bt = {}))[st.CLOSEST_SIDE = 0]", "CLOSEST_SIDE", "assign"), st[st.FARTHEST_SIDE = cc11001100_hook("st.FARTHEST_SIDE", 1, "assign")] = cc11001100_hook("st[st.FARTHEST_SIDE = 1]", "FARTHEST_SIDE", "assign"), st[st.CLOSEST_CORNER = cc11001100_hook("st.CLOSEST_CORNER", 2, "assign")] = cc11001100_hook("st[st.CLOSEST_CORNER = 2]", "CLOSEST_CORNER", "assign"), st[st.FARTHEST_CORNER = cc11001100_hook("st.FARTHEST_CORNER", 3, "assign")] = cc11001100_hook("st[st.FARTHEST_CORNER = 3]", "FARTHEST_CORNER", "assign");
  var ot = function (A) {
    if (A.type === sA.URL_TOKEN) {
      var e = cc11001100_hook("e", {
        url: cc11001100_hook("url", A.value, "object-key-init"),
        type: cc11001100_hook("type", xe.URL, "object-key-init")
      }, "var-init");
      return Se.getInstance().addImage(A.value), e;
    }
    if (A.type !== sA.FUNCTION) throw new Error("Unsupported image type");
    var t = cc11001100_hook("t", ct[A.name], "var-init");
    if (void 0 === t) throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
    return t(A.values);
  };
  var it,
    at,
    ct = cc11001100_hook("ct", {
      "linear-gradient": function (A) {
        var n = cc11001100_hook("n", Qe(180), "var-init"),
          B = cc11001100_hook("B", [], "var-init");
        return WA(A).forEach(function (A, e) {
          if (0 === e) {
            var t = cc11001100_hook("t", A[0], "var-init");
            if (t.type === sA.IDENT_TOKEN && "to" === t.value) return void (n = cc11001100_hook("n", Ae(A), "assign"));
            if ($A(t)) return void (n = cc11001100_hook("n", ce(t), "assign"));
          }
          var r = cc11001100_hook("r", de(A), "var-init");
          B.push(r);
        }), {
          angle: cc11001100_hook("angle", n, "object-key-init"),
          stops: cc11001100_hook("stops", B, "object-key-init"),
          type: cc11001100_hook("type", xe.LINEAR_GRADIENT, "object-key-init")
        };
      },
      "-moz-linear-gradient": cc11001100_hook("-moz-linear-gradient", Ie, "object-key-init"),
      "-ms-linear-gradient": cc11001100_hook("-ms-linear-gradient", Ie, "object-key-init"),
      "-o-linear-gradient": cc11001100_hook("-o-linear-gradient", Ie, "object-key-init"),
      "-webkit-linear-gradient": cc11001100_hook("-webkit-linear-gradient", Ie, "object-key-init"),
      "radial-gradient": function (A) {
        var B = cc11001100_hook("B", rt.CIRCLE, "var-init"),
          s = cc11001100_hook("s", Bt.FARTHEST_CORNER, "var-init"),
          o = cc11001100_hook("o", [], "var-init"),
          i = cc11001100_hook("i", [], "var-init");
        return WA(A).forEach(function (A, e) {
          var t = cc11001100_hook("t", !0, "var-init");
          if (0 === e) {
            var r = cc11001100_hook("r", !1, "var-init");
            t = cc11001100_hook("t", A.reduce(function (A, e) {
              if (r) {
                if (zA(e)) switch (e.value) {
                  case "center":
                    return i.push(oe), A;
                  case "top":
                  case "left":
                    return i.push(se), A;
                  case "right":
                  case "bottom":
                    return i.push(ie), A;
                } else (qA(e) || YA(e)) && i.push(e);
              } else if (zA(e)) switch (e.value) {
                case "circle":
                  return B = cc11001100_hook("B", rt.CIRCLE, "assign"), !1;
                case et:
                  return B = cc11001100_hook("B", rt.ELLIPSE, "assign"), !1;
                case "at":
                  return !(r = cc11001100_hook("r", !0, "assign"));
                case Ze:
                  return s = cc11001100_hook("s", Bt.CLOSEST_SIDE, "assign"), !1;
                case "cover":
                case je:
                  return s = cc11001100_hook("s", Bt.FARTHEST_SIDE, "assign"), !1;
                case tt:
                case $e:
                  return s = cc11001100_hook("s", Bt.CLOSEST_CORNER, "assign"), !1;
                case At:
                  return s = cc11001100_hook("s", Bt.FARTHEST_CORNER, "assign"), !1;
              } else if (YA(e) || qA(e)) return Array.isArray(s) || (s = cc11001100_hook("s", [], "assign")), s.push(e), !1;
              return A;
            }, t), "assign");
          }
          if (t) {
            var n = cc11001100_hook("n", de(A), "var-init");
            o.push(n);
          }
        }), {
          size: cc11001100_hook("size", s, "object-key-init"),
          shape: cc11001100_hook("shape", B, "object-key-init"),
          stops: cc11001100_hook("stops", o, "object-key-init"),
          position: cc11001100_hook("position", i, "object-key-init"),
          type: cc11001100_hook("type", xe.RADIAL_GRADIENT, "object-key-init")
        };
      },
      "-moz-radial-gradient": cc11001100_hook("-moz-radial-gradient", Pe, "object-key-init"),
      "-ms-radial-gradient": cc11001100_hook("-ms-radial-gradient", Pe, "object-key-init"),
      "-o-radial-gradient": cc11001100_hook("-o-radial-gradient", Pe, "object-key-init"),
      "-webkit-radial-gradient": cc11001100_hook("-webkit-radial-gradient", Pe, "object-key-init"),
      "-webkit-gradient": function (A) {
        var e = cc11001100_hook("e", Qe(180), "var-init"),
          s = cc11001100_hook("s", [], "var-init"),
          o = cc11001100_hook("o", xe.LINEAR_GRADIENT, "var-init"),
          t = cc11001100_hook("t", rt.CIRCLE, "var-init"),
          r = cc11001100_hook("r", Bt.FARTHEST_CORNER, "var-init");
        return WA(A).forEach(function (A, e) {
          var t = cc11001100_hook("t", A[0], "var-init");
          if (0 === e) {
            if (zA(t) && "linear" === t.value) return void (o = cc11001100_hook("o", xe.LINEAR_GRADIENT, "assign"));
            if (zA(t) && "radial" === t.value) return void (o = cc11001100_hook("o", xe.RADIAL_GRADIENT, "assign"));
          }
          if (t.type === sA.FUNCTION) if ("from" === t.name) {
            var r = cc11001100_hook("r", we(t.values[0]), "var-init");
            s.push({
              stop: cc11001100_hook("stop", se, "object-key-init"),
              color: cc11001100_hook("color", r, "object-key-init")
            });
          } else if ("to" === t.name) r = cc11001100_hook("r", we(t.values[0]), "assign"), s.push({
            stop: cc11001100_hook("stop", ie, "object-key-init"),
            color: cc11001100_hook("color", r, "object-key-init")
          });else if ("color-stop" === t.name) {
            var n = cc11001100_hook("n", t.values.filter(kA), "var-init");
            if (2 === n.length) {
              r = cc11001100_hook("r", we(n[1]), "assign");
              var B = cc11001100_hook("B", n[0], "var-init");
              VA(B) && s.push({
                stop: {
                  type: cc11001100_hook("type", sA.PERCENTAGE_TOKEN, "object-key-init"),
                  number: cc11001100_hook("number", 100 * B.number, "object-key-init"),
                  flags: cc11001100_hook("flags", B.flags, "object-key-init")
                },
                color: cc11001100_hook("color", r, "object-key-init")
              });
            }
          }
        }), o === xe.LINEAR_GRADIENT ? {
          angle: cc11001100_hook("angle", (e + Qe(180)) % Qe(360), "object-key-init"),
          stops: cc11001100_hook("stops", s, "object-key-init"),
          type: cc11001100_hook("type", o, "object-key-init")
        } : {
          size: cc11001100_hook("size", r, "object-key-init"),
          shape: cc11001100_hook("shape", t, "object-key-init"),
          stops: cc11001100_hook("stops", s, "object-key-init"),
          position: cc11001100_hook("position", [], "object-key-init"),
          type: cc11001100_hook("type", o, "object-key-init")
        };
      }
    }, "var-init"),
    Qt = cc11001100_hook("Qt", {
      name: cc11001100_hook("name", "background-image", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        if (0 === A.length) return [];
        var e = cc11001100_hook("e", A[0], "var-init");
        return e.type === sA.IDENT_TOKEN && "none" === e.value ? [] : A.filter(function (A) {
          return kA(A) && function (A) {
            return A.type !== sA.FUNCTION || ct[A.name];
          }(A);
        }).map(ot);
      }
    }, "var-init"),
    wt = cc11001100_hook("wt", {
      name: cc11001100_hook("name", "background-origin", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "border-box", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return A.map(function (A) {
          if (zA(A)) switch (A.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
          return 0;
        });
      }
    }, "var-init"),
    ut = cc11001100_hook("ut", {
      name: cc11001100_hook("name", "background-position", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0% 0%", "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        return WA(A).map(function (A) {
          return A.filter(qA);
        }).map(ZA);
      }
    }, "var-init");
  (at = cc11001100_hook("at", it || (it = cc11001100_hook("it", {}, "assign")), "assign"))[at.REPEAT = cc11001100_hook("at.REPEAT", 0, "assign")] = cc11001100_hook("(at = it || (it = {}))[at.REPEAT = 0]", "REPEAT", "assign"), at[at.NO_REPEAT = cc11001100_hook("at.NO_REPEAT", 1, "assign")] = cc11001100_hook("at[at.NO_REPEAT = 1]", "NO_REPEAT", "assign"), at[at.REPEAT_X = cc11001100_hook("at.REPEAT_X", 2, "assign")] = cc11001100_hook("at[at.REPEAT_X = 2]", "REPEAT_X", "assign");
  var Ut,
    lt,
    Ct = cc11001100_hook("Ct", {
      name: cc11001100_hook("name", "background-repeat", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "repeat", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(at[at.REPEAT_Y = cc11001100_hook("at.REPEAT_Y", 3, "assign")] = cc11001100_hook("at[at.REPEAT_Y = 3]", "REPEAT_Y", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return WA(A).map(function (A) {
          return A.filter(zA).map(function (A) {
            return A.value;
          }).join(" ");
        }).map(gt);
      }
    }, "var-init"),
    gt = function (A) {
      switch (A) {
        case "no-repeat":
          return it.NO_REPEAT;
        case "repeat-x":
        case "repeat no-repeat":
          return it.REPEAT_X;
        case "repeat-y":
        case "no-repeat repeat":
          return it.REPEAT_Y;
        case "repeat":
        default:
          return it.REPEAT;
      }
    };
  (lt = cc11001100_hook("lt", Ut || (Ut = cc11001100_hook("Ut", {}, "assign")), "assign")).AUTO = cc11001100_hook("(lt = Ut || (Ut = {})).AUTO", "auto", "assign"), lt.CONTAIN = cc11001100_hook("lt.CONTAIN", "contain", "assign");
  function Et(A) {
    cc11001100_hook("A", A, "function-parameter");
    return {
      name: cc11001100_hook("name", "border-" + A + "-color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TYPE_VALUE, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    };
  }
  function Ft(A) {
    cc11001100_hook("A", A, "function-parameter");
    return {
      name: cc11001100_hook("name", "border-radius-" + A, "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0 0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return ZA(A.filter(qA));
      }
    };
  }
  var ht,
    Ht,
    dt = cc11001100_hook("dt", {
      name: cc11001100_hook("name", "background-size", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(lt.COVER = cc11001100_hook("lt.COVER", "cover", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return WA(A).map(function (A) {
          return A.filter(ft);
        });
      }
    }, "var-init"),
    ft = function (A) {
      return zA(A) || qA(A);
    },
    pt = cc11001100_hook("pt", Et("top"), "var-init"),
    Nt = cc11001100_hook("Nt", Et("right"), "var-init"),
    Kt = cc11001100_hook("Kt", Et("bottom"), "var-init"),
    It = cc11001100_hook("It", Et("left"), "var-init"),
    Tt = cc11001100_hook("Tt", Ft("top-left"), "var-init"),
    mt = cc11001100_hook("mt", Ft("top-right"), "var-init"),
    Rt = cc11001100_hook("Rt", Ft("bottom-right"), "var-init"),
    Lt = cc11001100_hook("Lt", Ft("bottom-left"), "var-init");
  (Ht = cc11001100_hook("Ht", ht || (ht = cc11001100_hook("ht", {}, "assign")), "assign"))[Ht.NONE = cc11001100_hook("Ht.NONE", 0, "assign")] = cc11001100_hook("(Ht = ht || (ht = {}))[Ht.NONE = 0]", "NONE", "assign"), Ht[Ht.SOLID = cc11001100_hook("Ht.SOLID", 1, "assign")] = cc11001100_hook("Ht[Ht.SOLID = 1]", "SOLID", "assign");
  function vt(A) {
    cc11001100_hook("A", A, "function-parameter");
    return {
      name: cc11001100_hook("name", "border-" + A + "-style", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "solid", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "none":
            return ht.NONE;
        }
        return ht.SOLID;
      }
    };
  }
  function Ot(A) {
    cc11001100_hook("A", A, "function-parameter");
    return {
      name: cc11001100_hook("name", "border-" + A + "-width", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      type: cc11001100_hook("type", Ce.VALUE, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        return xA(A) ? A.number : 0;
      }
    };
  }
  var Dt,
    bt,
    St = cc11001100_hook("St", vt("top"), "var-init"),
    Mt = cc11001100_hook("Mt", vt("right"), "var-init"),
    yt = cc11001100_hook("yt", vt("bottom"), "var-init"),
    _t = cc11001100_hook("_t", vt("left"), "var-init"),
    Pt = cc11001100_hook("Pt", Ot("top"), "var-init"),
    xt = cc11001100_hook("xt", Ot("right"), "var-init"),
    Vt = cc11001100_hook("Vt", Ot("bottom"), "var-init"),
    zt = cc11001100_hook("zt", Ot("left"), "var-init"),
    Xt = cc11001100_hook("Xt", {
      name: cc11001100_hook("name", "color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TYPE_VALUE, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    }, "var-init"),
    Jt = cc11001100_hook("Jt", {
      name: cc11001100_hook("name", "display", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "inline-block", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return A.filter(zA).reduce(function (A, e) {
          return A | Gt(e.value);
        }, 0);
      }
    }, "var-init"),
    Gt = function (A) {
      switch (A) {
        case "block":
          return 2;
        case "inline":
          return 4;
        case "run-in":
          return 8;
        case "flow":
          return 16;
        case "flow-root":
          return 32;
        case "table":
          return 64;
        case "flex":
        case "-webkit-flex":
          return 128;
        case "grid":
        case "-ms-grid":
          return 256;
        case "ruby":
          return 512;
        case "subgrid":
          return 1024;
        case "list-item":
          return 2048;
        case "table-row-group":
          return 4096;
        case "table-header-group":
          return 8192;
        case "table-footer-group":
          return 16384;
        case "table-row":
          return 32768;
        case "table-cell":
          return 65536;
        case "table-column-group":
          return 131072;
        case "table-column":
          return 262144;
        case "table-caption":
          return 524288;
        case "ruby-base":
          return 1048576;
        case "ruby-text":
          return 2097152;
        case "ruby-base-container":
          return 4194304;
        case "ruby-text-container":
          return 8388608;
        case "contents":
          return 16777216;
        case "inline-block":
          return 33554432;
        case "inline-list-item":
          return 67108864;
        case "inline-table":
          return 134217728;
        case "inline-flex":
          return 268435456;
        case "inline-grid":
          return 536870912;
      }
      return 0;
    };
  (bt = cc11001100_hook("bt", Dt || (Dt = cc11001100_hook("Dt", {}, "assign")), "assign"))[bt.NONE = cc11001100_hook("bt.NONE", 0, "assign")] = cc11001100_hook("(bt = Dt || (Dt = {}))[bt.NONE = 0]", "NONE", "assign"), bt[bt.LEFT = cc11001100_hook("bt.LEFT", 1, "assign")] = cc11001100_hook("bt[bt.LEFT = 1]", "LEFT", "assign"), bt[bt.RIGHT = cc11001100_hook("bt.RIGHT", 2, "assign")] = cc11001100_hook("bt[bt.RIGHT = 2]", "RIGHT", "assign"), bt[bt.INLINE_START = cc11001100_hook("bt.INLINE_START", 3, "assign")] = cc11001100_hook("bt[bt.INLINE_START = 3]", "INLINE_START", "assign");
  var kt,
    Wt,
    Yt,
    qt,
    Zt = cc11001100_hook("Zt", {
      name: cc11001100_hook("name", "float", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(bt[bt.INLINE_END = cc11001100_hook("bt.INLINE_END", 4, "assign")] = cc11001100_hook("bt[bt.INLINE_END = 4]", "INLINE_END", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "left":
            return Dt.LEFT;
          case "right":
            return Dt.RIGHT;
          case "inline-start":
            return Dt.INLINE_START;
          case "inline-end":
            return Dt.INLINE_END;
        }
        return Dt.NONE;
      }
    }, "var-init"),
    jt = cc11001100_hook("jt", {
      name: cc11001100_hook("name", "letter-spacing", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.VALUE, "object-key-init"),
      parse: function (A) {
        return A.type === sA.IDENT_TOKEN && "normal" === A.value ? 0 : A.type === sA.NUMBER_TOKEN ? A.number : A.type === sA.DIMENSION_TOKEN ? A.number : 0;
      }
    }, "var-init"),
    $t = cc11001100_hook("$t", {
      name: cc11001100_hook("name", "line-break", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", (Wt = cc11001100_hook("Wt", kt || (kt = cc11001100_hook("kt", {}, "assign")), "assign")).NORMAL = cc11001100_hook("(Wt = kt || (kt = {})).NORMAL", "normal", "assign"), "object-key-init"),
      prefix: cc11001100_hook("prefix", !(Wt.STRICT = cc11001100_hook("Wt.STRICT", "strict", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "strict":
            return kt.STRICT;
          case "normal":
          default:
            return kt.NORMAL;
        }
      }
    }, "var-init"),
    Ar = cc11001100_hook("Ar", {
      name: cc11001100_hook("name", "line-height", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TOKEN_VALUE, "object-key-init")
    }, "var-init"),
    er = cc11001100_hook("er", {
      name: cc11001100_hook("name", "list-style-image", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", Ce.VALUE, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        return A.type === sA.IDENT_TOKEN && "none" === A.value ? null : ot(A);
      }
    }, "var-init");
  (qt = cc11001100_hook("qt", Yt || (Yt = cc11001100_hook("Yt", {}, "assign")), "assign"))[qt.INSIDE = cc11001100_hook("qt.INSIDE", 0, "assign")] = cc11001100_hook("(qt = Yt || (Yt = {}))[qt.INSIDE = 0]", "INSIDE", "assign");
  var tr,
    rr,
    nr = cc11001100_hook("nr", {
      name: cc11001100_hook("name", "list-style-position", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "outside", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(qt[qt.OUTSIDE = cc11001100_hook("qt.OUTSIDE", 1, "assign")] = cc11001100_hook("qt[qt.OUTSIDE = 1]", "OUTSIDE", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "inside":
            return Yt.INSIDE;
          case "outside":
          default:
            return Yt.OUTSIDE;
        }
      }
    }, "var-init");
  (rr = cc11001100_hook("rr", tr || (tr = cc11001100_hook("tr", {}, "assign")), "assign"))[rr.NONE = cc11001100_hook("rr.NONE", -1, "assign")] = cc11001100_hook("(rr = tr || (tr = {}))[rr.NONE = -1]", "NONE", "assign"), rr[rr.DISC = cc11001100_hook("rr.DISC", 0, "assign")] = cc11001100_hook("rr[rr.DISC = 0]", "DISC", "assign"), rr[rr.CIRCLE = cc11001100_hook("rr.CIRCLE", 1, "assign")] = cc11001100_hook("rr[rr.CIRCLE = 1]", "CIRCLE", "assign"), rr[rr.SQUARE = cc11001100_hook("rr.SQUARE", 2, "assign")] = cc11001100_hook("rr[rr.SQUARE = 2]", "SQUARE", "assign"), rr[rr.DECIMAL = cc11001100_hook("rr.DECIMAL", 3, "assign")] = cc11001100_hook("rr[rr.DECIMAL = 3]", "DECIMAL", "assign"), rr[rr.CJK_DECIMAL = cc11001100_hook("rr.CJK_DECIMAL", 4, "assign")] = cc11001100_hook("rr[rr.CJK_DECIMAL = 4]", "CJK_DECIMAL", "assign"), rr[rr.DECIMAL_LEADING_ZERO = cc11001100_hook("rr.DECIMAL_LEADING_ZERO", 5, "assign")] = cc11001100_hook("rr[rr.DECIMAL_LEADING_ZERO = 5]", "DECIMAL_LEADING_ZERO", "assign"), rr[rr.LOWER_ROMAN = cc11001100_hook("rr.LOWER_ROMAN", 6, "assign")] = cc11001100_hook("rr[rr.LOWER_ROMAN = 6]", "LOWER_ROMAN", "assign"), rr[rr.UPPER_ROMAN = cc11001100_hook("rr.UPPER_ROMAN", 7, "assign")] = cc11001100_hook("rr[rr.UPPER_ROMAN = 7]", "UPPER_ROMAN", "assign"), rr[rr.LOWER_GREEK = cc11001100_hook("rr.LOWER_GREEK", 8, "assign")] = cc11001100_hook("rr[rr.LOWER_GREEK = 8]", "LOWER_GREEK", "assign"), rr[rr.LOWER_ALPHA = cc11001100_hook("rr.LOWER_ALPHA", 9, "assign")] = cc11001100_hook("rr[rr.LOWER_ALPHA = 9]", "LOWER_ALPHA", "assign"), rr[rr.UPPER_ALPHA = cc11001100_hook("rr.UPPER_ALPHA", 10, "assign")] = cc11001100_hook("rr[rr.UPPER_ALPHA = 10]", "UPPER_ALPHA", "assign"), rr[rr.ARABIC_INDIC = cc11001100_hook("rr.ARABIC_INDIC", 11, "assign")] = cc11001100_hook("rr[rr.ARABIC_INDIC = 11]", "ARABIC_INDIC", "assign"), rr[rr.ARMENIAN = cc11001100_hook("rr.ARMENIAN", 12, "assign")] = cc11001100_hook("rr[rr.ARMENIAN = 12]", "ARMENIAN", "assign"), rr[rr.BENGALI = cc11001100_hook("rr.BENGALI", 13, "assign")] = cc11001100_hook("rr[rr.BENGALI = 13]", "BENGALI", "assign"), rr[rr.CAMBODIAN = cc11001100_hook("rr.CAMBODIAN", 14, "assign")] = cc11001100_hook("rr[rr.CAMBODIAN = 14]", "CAMBODIAN", "assign"), rr[rr.CJK_EARTHLY_BRANCH = cc11001100_hook("rr.CJK_EARTHLY_BRANCH", 15, "assign")] = cc11001100_hook("rr[rr.CJK_EARTHLY_BRANCH = 15]", "CJK_EARTHLY_BRANCH", "assign"), rr[rr.CJK_HEAVENLY_STEM = cc11001100_hook("rr.CJK_HEAVENLY_STEM", 16, "assign")] = cc11001100_hook("rr[rr.CJK_HEAVENLY_STEM = 16]", "CJK_HEAVENLY_STEM", "assign"), rr[rr.CJK_IDEOGRAPHIC = cc11001100_hook("rr.CJK_IDEOGRAPHIC", 17, "assign")] = cc11001100_hook("rr[rr.CJK_IDEOGRAPHIC = 17]", "CJK_IDEOGRAPHIC", "assign"), rr[rr.DEVANAGARI = cc11001100_hook("rr.DEVANAGARI", 18, "assign")] = cc11001100_hook("rr[rr.DEVANAGARI = 18]", "DEVANAGARI", "assign"), rr[rr.ETHIOPIC_NUMERIC = cc11001100_hook("rr.ETHIOPIC_NUMERIC", 19, "assign")] = cc11001100_hook("rr[rr.ETHIOPIC_NUMERIC = 19]", "ETHIOPIC_NUMERIC", "assign"), rr[rr.GEORGIAN = cc11001100_hook("rr.GEORGIAN", 20, "assign")] = cc11001100_hook("rr[rr.GEORGIAN = 20]", "GEORGIAN", "assign"), rr[rr.GUJARATI = cc11001100_hook("rr.GUJARATI", 21, "assign")] = cc11001100_hook("rr[rr.GUJARATI = 21]", "GUJARATI", "assign"), rr[rr.GURMUKHI = cc11001100_hook("rr.GURMUKHI", 22, "assign")] = cc11001100_hook("rr[rr.GURMUKHI = 22]", "GURMUKHI", "assign"), rr[rr.HEBREW = cc11001100_hook("rr.HEBREW", 22, "assign")] = cc11001100_hook("rr[rr.HEBREW = 22]", "HEBREW", "assign"), rr[rr.HIRAGANA = cc11001100_hook("rr.HIRAGANA", 23, "assign")] = cc11001100_hook("rr[rr.HIRAGANA = 23]", "HIRAGANA", "assign"), rr[rr.HIRAGANA_IROHA = cc11001100_hook("rr.HIRAGANA_IROHA", 24, "assign")] = cc11001100_hook("rr[rr.HIRAGANA_IROHA = 24]", "HIRAGANA_IROHA", "assign"), rr[rr.JAPANESE_FORMAL = cc11001100_hook("rr.JAPANESE_FORMAL", 25, "assign")] = cc11001100_hook("rr[rr.JAPANESE_FORMAL = 25]", "JAPANESE_FORMAL", "assign"), rr[rr.JAPANESE_INFORMAL = cc11001100_hook("rr.JAPANESE_INFORMAL", 26, "assign")] = cc11001100_hook("rr[rr.JAPANESE_INFORMAL = 26]", "JAPANESE_INFORMAL", "assign"), rr[rr.KANNADA = cc11001100_hook("rr.KANNADA", 27, "assign")] = cc11001100_hook("rr[rr.KANNADA = 27]", "KANNADA", "assign"), rr[rr.KATAKANA = cc11001100_hook("rr.KATAKANA", 28, "assign")] = cc11001100_hook("rr[rr.KATAKANA = 28]", "KATAKANA", "assign"), rr[rr.KATAKANA_IROHA = cc11001100_hook("rr.KATAKANA_IROHA", 29, "assign")] = cc11001100_hook("rr[rr.KATAKANA_IROHA = 29]", "KATAKANA_IROHA", "assign"), rr[rr.KHMER = cc11001100_hook("rr.KHMER", 30, "assign")] = cc11001100_hook("rr[rr.KHMER = 30]", "KHMER", "assign"), rr[rr.KOREAN_HANGUL_FORMAL = cc11001100_hook("rr.KOREAN_HANGUL_FORMAL", 31, "assign")] = cc11001100_hook("rr[rr.KOREAN_HANGUL_FORMAL = 31]", "KOREAN_HANGUL_FORMAL", "assign"), rr[rr.KOREAN_HANJA_FORMAL = cc11001100_hook("rr.KOREAN_HANJA_FORMAL", 32, "assign")] = cc11001100_hook("rr[rr.KOREAN_HANJA_FORMAL = 32]", "KOREAN_HANJA_FORMAL", "assign"), rr[rr.KOREAN_HANJA_INFORMAL = cc11001100_hook("rr.KOREAN_HANJA_INFORMAL", 33, "assign")] = cc11001100_hook("rr[rr.KOREAN_HANJA_INFORMAL = 33]", "KOREAN_HANJA_INFORMAL", "assign"), rr[rr.LAO = cc11001100_hook("rr.LAO", 34, "assign")] = cc11001100_hook("rr[rr.LAO = 34]", "LAO", "assign"), rr[rr.LOWER_ARMENIAN = cc11001100_hook("rr.LOWER_ARMENIAN", 35, "assign")] = cc11001100_hook("rr[rr.LOWER_ARMENIAN = 35]", "LOWER_ARMENIAN", "assign"), rr[rr.MALAYALAM = cc11001100_hook("rr.MALAYALAM", 36, "assign")] = cc11001100_hook("rr[rr.MALAYALAM = 36]", "MALAYALAM", "assign"), rr[rr.MONGOLIAN = cc11001100_hook("rr.MONGOLIAN", 37, "assign")] = cc11001100_hook("rr[rr.MONGOLIAN = 37]", "MONGOLIAN", "assign"), rr[rr.MYANMAR = cc11001100_hook("rr.MYANMAR", 38, "assign")] = cc11001100_hook("rr[rr.MYANMAR = 38]", "MYANMAR", "assign"), rr[rr.ORIYA = cc11001100_hook("rr.ORIYA", 39, "assign")] = cc11001100_hook("rr[rr.ORIYA = 39]", "ORIYA", "assign"), rr[rr.PERSIAN = cc11001100_hook("rr.PERSIAN", 40, "assign")] = cc11001100_hook("rr[rr.PERSIAN = 40]", "PERSIAN", "assign"), rr[rr.SIMP_CHINESE_FORMAL = cc11001100_hook("rr.SIMP_CHINESE_FORMAL", 41, "assign")] = cc11001100_hook("rr[rr.SIMP_CHINESE_FORMAL = 41]", "SIMP_CHINESE_FORMAL", "assign"), rr[rr.SIMP_CHINESE_INFORMAL = cc11001100_hook("rr.SIMP_CHINESE_INFORMAL", 42, "assign")] = cc11001100_hook("rr[rr.SIMP_CHINESE_INFORMAL = 42]", "SIMP_CHINESE_INFORMAL", "assign"), rr[rr.TAMIL = cc11001100_hook("rr.TAMIL", 43, "assign")] = cc11001100_hook("rr[rr.TAMIL = 43]", "TAMIL", "assign"), rr[rr.TELUGU = cc11001100_hook("rr.TELUGU", 44, "assign")] = cc11001100_hook("rr[rr.TELUGU = 44]", "TELUGU", "assign"), rr[rr.THAI = cc11001100_hook("rr.THAI", 45, "assign")] = cc11001100_hook("rr[rr.THAI = 45]", "THAI", "assign"), rr[rr.TIBETAN = cc11001100_hook("rr.TIBETAN", 46, "assign")] = cc11001100_hook("rr[rr.TIBETAN = 46]", "TIBETAN", "assign"), rr[rr.TRAD_CHINESE_FORMAL = cc11001100_hook("rr.TRAD_CHINESE_FORMAL", 47, "assign")] = cc11001100_hook("rr[rr.TRAD_CHINESE_FORMAL = 47]", "TRAD_CHINESE_FORMAL", "assign"), rr[rr.TRAD_CHINESE_INFORMAL = cc11001100_hook("rr.TRAD_CHINESE_INFORMAL", 48, "assign")] = cc11001100_hook("rr[rr.TRAD_CHINESE_INFORMAL = 48]", "TRAD_CHINESE_INFORMAL", "assign"), rr[rr.UPPER_ARMENIAN = cc11001100_hook("rr.UPPER_ARMENIAN", 49, "assign")] = cc11001100_hook("rr[rr.UPPER_ARMENIAN = 49]", "UPPER_ARMENIAN", "assign"), rr[rr.DISCLOSURE_OPEN = cc11001100_hook("rr.DISCLOSURE_OPEN", 50, "assign")] = cc11001100_hook("rr[rr.DISCLOSURE_OPEN = 50]", "DISCLOSURE_OPEN", "assign");
  function Br(A) {
    cc11001100_hook("A", A, "function-parameter");
    return {
      name: cc11001100_hook("name", "margin-" + A, "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TOKEN_VALUE, "object-key-init")
    };
  }
  var sr,
    or,
    ir = cc11001100_hook("ir", {
      name: cc11001100_hook("name", "list-style-type", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(rr[rr.DISCLOSURE_CLOSED = cc11001100_hook("rr.DISCLOSURE_CLOSED", 51, "assign")] = cc11001100_hook("rr[rr.DISCLOSURE_CLOSED = 51]", "DISCLOSURE_CLOSED", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "disc":
            return tr.DISC;
          case "circle":
            return tr.CIRCLE;
          case "square":
            return tr.SQUARE;
          case "decimal":
            return tr.DECIMAL;
          case "cjk-decimal":
            return tr.CJK_DECIMAL;
          case "decimal-leading-zero":
            return tr.DECIMAL_LEADING_ZERO;
          case "lower-roman":
            return tr.LOWER_ROMAN;
          case "upper-roman":
            return tr.UPPER_ROMAN;
          case "lower-greek":
            return tr.LOWER_GREEK;
          case "lower-alpha":
            return tr.LOWER_ALPHA;
          case "upper-alpha":
            return tr.UPPER_ALPHA;
          case "arabic-indic":
            return tr.ARABIC_INDIC;
          case "armenian":
            return tr.ARMENIAN;
          case "bengali":
            return tr.BENGALI;
          case "cambodian":
            return tr.CAMBODIAN;
          case "cjk-earthly-branch":
            return tr.CJK_EARTHLY_BRANCH;
          case "cjk-heavenly-stem":
            return tr.CJK_HEAVENLY_STEM;
          case "cjk-ideographic":
            return tr.CJK_IDEOGRAPHIC;
          case "devanagari":
            return tr.DEVANAGARI;
          case "ethiopic-numeric":
            return tr.ETHIOPIC_NUMERIC;
          case "georgian":
            return tr.GEORGIAN;
          case "gujarati":
            return tr.GUJARATI;
          case "gurmukhi":
            return tr.GURMUKHI;
          case "hebrew":
            return tr.HEBREW;
          case "hiragana":
            return tr.HIRAGANA;
          case "hiragana-iroha":
            return tr.HIRAGANA_IROHA;
          case "japanese-formal":
            return tr.JAPANESE_FORMAL;
          case "japanese-informal":
            return tr.JAPANESE_INFORMAL;
          case "kannada":
            return tr.KANNADA;
          case "katakana":
            return tr.KATAKANA;
          case "katakana-iroha":
            return tr.KATAKANA_IROHA;
          case "khmer":
            return tr.KHMER;
          case "korean-hangul-formal":
            return tr.KOREAN_HANGUL_FORMAL;
          case "korean-hanja-formal":
            return tr.KOREAN_HANJA_FORMAL;
          case "korean-hanja-informal":
            return tr.KOREAN_HANJA_INFORMAL;
          case "lao":
            return tr.LAO;
          case "lower-armenian":
            return tr.LOWER_ARMENIAN;
          case "malayalam":
            return tr.MALAYALAM;
          case "mongolian":
            return tr.MONGOLIAN;
          case "myanmar":
            return tr.MYANMAR;
          case "oriya":
            return tr.ORIYA;
          case "persian":
            return tr.PERSIAN;
          case "simp-chinese-formal":
            return tr.SIMP_CHINESE_FORMAL;
          case "simp-chinese-informal":
            return tr.SIMP_CHINESE_INFORMAL;
          case "tamil":
            return tr.TAMIL;
          case "telugu":
            return tr.TELUGU;
          case "thai":
            return tr.THAI;
          case "tibetan":
            return tr.TIBETAN;
          case "trad-chinese-formal":
            return tr.TRAD_CHINESE_FORMAL;
          case "trad-chinese-informal":
            return tr.TRAD_CHINESE_INFORMAL;
          case "upper-armenian":
            return tr.UPPER_ARMENIAN;
          case "disclosure-open":
            return tr.DISCLOSURE_OPEN;
          case "disclosure-closed":
            return tr.DISCLOSURE_CLOSED;
          case "none":
          default:
            return tr.NONE;
        }
      }
    }, "var-init"),
    ar = cc11001100_hook("ar", Br("top"), "var-init"),
    cr = cc11001100_hook("cr", Br("right"), "var-init"),
    Qr = cc11001100_hook("Qr", Br("bottom"), "var-init"),
    wr = cc11001100_hook("wr", Br("left"), "var-init");
  (or = cc11001100_hook("or", sr || (sr = cc11001100_hook("sr", {}, "assign")), "assign"))[or.VISIBLE = cc11001100_hook("or.VISIBLE", 0, "assign")] = cc11001100_hook("(or = sr || (sr = {}))[or.VISIBLE = 0]", "VISIBLE", "assign"), or[or.HIDDEN = cc11001100_hook("or.HIDDEN", 1, "assign")] = cc11001100_hook("or[or.HIDDEN = 1]", "HIDDEN", "assign"), or[or.SCROLL = cc11001100_hook("or.SCROLL", 2, "assign")] = cc11001100_hook("or[or.SCROLL = 2]", "SCROLL", "assign");
  function ur(A) {
    cc11001100_hook("A", A, "function-parameter");
    return {
      name: cc11001100_hook("name", "padding-" + A, "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TYPE_VALUE, "object-key-init"),
      format: cc11001100_hook("format", "length-percentage", "object-key-init")
    };
  }
  var Ur,
    lr,
    Cr,
    gr,
    Er = cc11001100_hook("Er", {
      name: cc11001100_hook("name", "overflow", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "visible", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(or[or.AUTO = cc11001100_hook("or.AUTO", 3, "assign")] = cc11001100_hook("or[or.AUTO = 3]", "AUTO", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return A.filter(zA).map(function (A) {
          switch (A.value) {
            case "hidden":
              return sr.HIDDEN;
            case "scroll":
              return sr.SCROLL;
            case "auto":
              return sr.AUTO;
            case "visible":
            default:
              return sr.VISIBLE;
          }
        });
      }
    }, "var-init"),
    Fr = cc11001100_hook("Fr", {
      name: cc11001100_hook("name", "overflow-wrap", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", (lr = cc11001100_hook("lr", Ur || (Ur = cc11001100_hook("Ur", {}, "assign")), "assign")).NORMAL = cc11001100_hook("(lr = Ur || (Ur = {})).NORMAL", "normal", "assign"), "object-key-init"),
      prefix: cc11001100_hook("prefix", !(lr.BREAK_WORD = cc11001100_hook("lr.BREAK_WORD", "break-word", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "break-word":
            return Ur.BREAK_WORD;
          case "normal":
          default:
            return Ur.NORMAL;
        }
      }
    }, "var-init"),
    hr = cc11001100_hook("hr", ur("top"), "var-init"),
    Hr = cc11001100_hook("Hr", ur("right"), "var-init"),
    dr = cc11001100_hook("dr", ur("bottom"), "var-init"),
    fr = cc11001100_hook("fr", ur("left"), "var-init");
  (gr = cc11001100_hook("gr", Cr || (Cr = cc11001100_hook("Cr", {}, "assign")), "assign"))[gr.LEFT = cc11001100_hook("gr.LEFT", 0, "assign")] = cc11001100_hook("(gr = Cr || (Cr = {}))[gr.LEFT = 0]", "LEFT", "assign"), gr[gr.CENTER = cc11001100_hook("gr.CENTER", 1, "assign")] = cc11001100_hook("gr[gr.CENTER = 1]", "CENTER", "assign");
  var pr,
    Nr,
    Kr = cc11001100_hook("Kr", {
      name: cc11001100_hook("name", "text-align", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "left", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(gr[gr.RIGHT = cc11001100_hook("gr.RIGHT", 2, "assign")] = cc11001100_hook("gr[gr.RIGHT = 2]", "RIGHT", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "right":
            return Cr.RIGHT;
          case "center":
          case "justify":
            return Cr.CENTER;
          case "left":
          default:
            return Cr.LEFT;
        }
      }
    }, "var-init");
  (Nr = cc11001100_hook("Nr", pr || (pr = cc11001100_hook("pr", {}, "assign")), "assign"))[Nr.STATIC = cc11001100_hook("Nr.STATIC", 0, "assign")] = cc11001100_hook("(Nr = pr || (pr = {}))[Nr.STATIC = 0]", "STATIC", "assign"), Nr[Nr.RELATIVE = cc11001100_hook("Nr.RELATIVE", 1, "assign")] = cc11001100_hook("Nr[Nr.RELATIVE = 1]", "RELATIVE", "assign"), Nr[Nr.ABSOLUTE = cc11001100_hook("Nr.ABSOLUTE", 2, "assign")] = cc11001100_hook("Nr[Nr.ABSOLUTE = 2]", "ABSOLUTE", "assign"), Nr[Nr.FIXED = cc11001100_hook("Nr.FIXED", 3, "assign")] = cc11001100_hook("Nr[Nr.FIXED = 3]", "FIXED", "assign");
  var Ir,
    Tr,
    mr = cc11001100_hook("mr", {
      name: cc11001100_hook("name", "position", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "static", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(Nr[Nr.STICKY = cc11001100_hook("Nr.STICKY", 4, "assign")] = cc11001100_hook("Nr[Nr.STICKY = 4]", "STICKY", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "relative":
            return pr.RELATIVE;
          case "absolute":
            return pr.ABSOLUTE;
          case "fixed":
            return pr.FIXED;
          case "sticky":
            return pr.STICKY;
        }
        return pr.STATIC;
      }
    }, "var-init"),
    Rr = cc11001100_hook("Rr", {
      name: cc11001100_hook("name", "text-shadow", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        return 1 === A.length && JA(A[0], "none") ? [] : WA(A).map(function (A) {
          for (var e = cc11001100_hook("e", {
              color: cc11001100_hook("color", He.TRANSPARENT, "object-key-init"),
              offsetX: cc11001100_hook("offsetX", se, "object-key-init"),
              offsetY: cc11001100_hook("offsetY", se, "object-key-init"),
              blur: cc11001100_hook("blur", se, "object-key-init")
            }, "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < A.length; r++) {
            var n = cc11001100_hook("n", A[r], "var-init");
            YA(n) ? (0 === t ? e.offsetX = cc11001100_hook("e.offsetX", n, "assign") : 1 === t ? e.offsetY = cc11001100_hook("e.offsetY", n, "assign") : e.blur = cc11001100_hook("e.blur", n, "assign"), t++) : e.color = cc11001100_hook("e.color", we(n), "assign");
          }
          return e;
        });
      }
    }, "var-init");
  (Tr = cc11001100_hook("Tr", Ir || (Ir = cc11001100_hook("Ir", {}, "assign")), "assign"))[Tr.NONE = cc11001100_hook("Tr.NONE", 0, "assign")] = cc11001100_hook("(Tr = Ir || (Ir = {}))[Tr.NONE = 0]", "NONE", "assign"), Tr[Tr.LOWERCASE = cc11001100_hook("Tr.LOWERCASE", 1, "assign")] = cc11001100_hook("Tr[Tr.LOWERCASE = 1]", "LOWERCASE", "assign"), Tr[Tr.UPPERCASE = cc11001100_hook("Tr.UPPERCASE", 2, "assign")] = cc11001100_hook("Tr[Tr.UPPERCASE = 2]", "UPPERCASE", "assign");
  var Lr,
    vr,
    Or = cc11001100_hook("Or", {
      name: cc11001100_hook("name", "text-transform", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(Tr[Tr.CAPITALIZE = cc11001100_hook("Tr.CAPITALIZE", 3, "assign")] = cc11001100_hook("Tr[Tr.CAPITALIZE = 3]", "CAPITALIZE", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "uppercase":
            return Ir.UPPERCASE;
          case "lowercase":
            return Ir.LOWERCASE;
          case "capitalize":
            return Ir.CAPITALIZE;
        }
        return Ir.NONE;
      }
    }, "var-init"),
    Dr = cc11001100_hook("Dr", {
      name: cc11001100_hook("name", "transform", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", Ce.VALUE, "object-key-init"),
      parse: function (A) {
        if (A.type === sA.IDENT_TOKEN && "none" === A.value) return null;
        if (A.type !== sA.FUNCTION) return null;
        var e = cc11001100_hook("e", br[A.name], "var-init");
        if (void 0 === e) throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
        return e(A.values);
      }
    }, "var-init"),
    br = cc11001100_hook("br", {
      matrix: function (A) {
        var e = cc11001100_hook("e", A.filter(function (A) {
          return A.type === sA.NUMBER_TOKEN;
        }).map(function (A) {
          return A.number;
        }), "var-init");
        return 6 === e.length ? e : null;
      },
      matrix3d: function (A) {
        var e = cc11001100_hook("e", A.filter(function (A) {
            return A.type === sA.NUMBER_TOKEN;
          }).map(function (A) {
            return A.number;
          }), "var-init"),
          t = cc11001100_hook("t", e[0], "var-init"),
          r = cc11001100_hook("r", e[1], "var-init"),
          n = cc11001100_hook("n", (e[2], e[3], e[4]), "var-init"),
          B = cc11001100_hook("B", e[5], "var-init"),
          s = cc11001100_hook("s", (e[6], e[7], e[8], e[9], e[10], e[11], e[12]), "var-init"),
          o = cc11001100_hook("o", e[13], "var-init");
        e[14], e[15];
        return 16 === e.length ? [t, r, n, B, s, o] : null;
      }
    }, "var-init"),
    Sr = cc11001100_hook("Sr", {
      type: cc11001100_hook("type", sA.PERCENTAGE_TOKEN, "object-key-init"),
      number: cc11001100_hook("number", 50, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    Mr = cc11001100_hook("Mr", [Sr, Sr], "var-init"),
    yr = cc11001100_hook("yr", {
      name: cc11001100_hook("name", "transform-origin", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "50% 50%", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        var e = cc11001100_hook("e", A.filter(qA), "var-init");
        return 2 !== e.length ? Mr : [e[0], e[1]];
      }
    }, "var-init");
  (vr = cc11001100_hook("vr", Lr || (Lr = cc11001100_hook("Lr", {}, "assign")), "assign"))[vr.VISIBLE = cc11001100_hook("vr.VISIBLE", 0, "assign")] = cc11001100_hook("(vr = Lr || (Lr = {}))[vr.VISIBLE = 0]", "VISIBLE", "assign"), vr[vr.HIDDEN = cc11001100_hook("vr.HIDDEN", 1, "assign")] = cc11001100_hook("vr[vr.HIDDEN = 1]", "HIDDEN", "assign");
  var _r,
    Pr,
    xr = cc11001100_hook("xr", {
      name: cc11001100_hook("name", "visible", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(vr[vr.COLLAPSE = cc11001100_hook("vr.COLLAPSE", 2, "assign")] = cc11001100_hook("vr[vr.COLLAPSE = 2]", "COLLAPSE", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "hidden":
            return Lr.HIDDEN;
          case "collapse":
            return Lr.COLLAPSE;
          case "visible":
          default:
            return Lr.VISIBLE;
        }
      }
    }, "var-init");
  (Pr = cc11001100_hook("Pr", _r || (_r = cc11001100_hook("_r", {}, "assign")), "assign")).NORMAL = cc11001100_hook("(Pr = _r || (_r = {})).NORMAL", "normal", "assign"), Pr.BREAK_ALL = cc11001100_hook("Pr.BREAK_ALL", "break-all", "assign");
  var Vr,
    zr,
    Xr = cc11001100_hook("Xr", {
      name: cc11001100_hook("name", "word-break", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(Pr.KEEP_ALL = cc11001100_hook("Pr.KEEP_ALL", "keep-all", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "break-all":
            return _r.BREAK_ALL;
          case "keep-all":
            return _r.KEEP_ALL;
          case "normal":
          default:
            return _r.NORMAL;
        }
      }
    }, "var-init"),
    Jr = cc11001100_hook("Jr", {
      name: cc11001100_hook("name", "z-index", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "auto", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.VALUE, "object-key-init"),
      parse: function (A) {
        if (A.type === sA.IDENT_TOKEN) return {
          auto: cc11001100_hook("auto", !0, "object-key-init"),
          order: cc11001100_hook("order", 0, "object-key-init")
        };
        if (VA(A)) return {
          auto: cc11001100_hook("auto", !1, "object-key-init"),
          order: cc11001100_hook("order", A.number, "object-key-init")
        };
        throw new Error("Invalid z-index number parsed");
      }
    }, "var-init"),
    Gr = cc11001100_hook("Gr", {
      name: cc11001100_hook("name", "opacity", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "1", "object-key-init"),
      type: cc11001100_hook("type", Ce.VALUE, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        return VA(A) ? A.number : 1;
      }
    }, "var-init"),
    kr = cc11001100_hook("kr", {
      name: cc11001100_hook("name", "text-decoration-color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TYPE_VALUE, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    }, "var-init"),
    Wr = cc11001100_hook("Wr", {
      name: cc11001100_hook("name", "text-decoration-line", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        return A.filter(zA).map(function (A) {
          switch (A.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        }).filter(function (A) {
          return 0 !== A;
        });
      }
    }, "var-init"),
    Yr = cc11001100_hook("Yr", {
      name: cc11001100_hook("name", "font-family", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        var e = cc11001100_hook("e", [], "var-init"),
          t = cc11001100_hook("t", [], "var-init");
        return A.forEach(function (A) {
          switch (A.type) {
            case sA.IDENT_TOKEN:
            case sA.STRING_TOKEN:
              e.push(A.value);
              break;
            case sA.NUMBER_TOKEN:
              e.push(A.number.toString());
              break;
            case sA.COMMA_TOKEN:
              t.push(e.join(" ")), e.length = cc11001100_hook("e.length", 0, "assign");
          }
        }), e.length && t.push(e.join(" ")), t.map(function (A) {
          return -1 === A.indexOf(" ") ? A : "'" + A + "'";
        });
      }
    }, "var-init"),
    qr = cc11001100_hook("qr", {
      name: cc11001100_hook("name", "font-size", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", Ce.TYPE_VALUE, "object-key-init"),
      format: cc11001100_hook("format", "length", "object-key-init")
    }, "var-init"),
    Zr = cc11001100_hook("Zr", {
      name: cc11001100_hook("name", "font-weight", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      type: cc11001100_hook("type", Ce.VALUE, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        if (VA(A)) return A.number;
        if (zA(A)) switch (A.value) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
        return 400;
      }
    }, "var-init"),
    jr = cc11001100_hook("jr", {
      name: cc11001100_hook("name", "font-variant", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        return A.filter(zA).map(function (A) {
          return A.value;
        });
      }
    }, "var-init");
  (zr = cc11001100_hook("zr", Vr || (Vr = cc11001100_hook("Vr", {}, "assign")), "assign")).NORMAL = cc11001100_hook("(zr = Vr || (Vr = {})).NORMAL", "normal", "assign"), zr.ITALIC = cc11001100_hook("zr.ITALIC", "italic", "assign");
  function $r(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return 0 != (A & e);
  }
  function An(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (!A) return "";
    var r = cc11001100_hook("r", A[Math.min(e, A.length - 1)], "var-init");
    return r ? t ? r.open : r.close : "";
  }
  var en = cc11001100_hook("en", {
      name: cc11001100_hook("name", "font-style", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(zr.OBLIQUE = cc11001100_hook("zr.OBLIQUE", "oblique", "assign")), "object-key-init"),
      type: cc11001100_hook("type", Ce.IDENT_VALUE, "object-key-init"),
      parse: function (A) {
        switch (A) {
          case "oblique":
            return Vr.OBLIQUE;
          case "italic":
            return Vr.ITALIC;
          case "normal":
          default:
            return Vr.NORMAL;
        }
      }
    }, "var-init"),
    tn = cc11001100_hook("tn", {
      name: cc11001100_hook("name", "content", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        if (0 === A.length) return [];
        var e = cc11001100_hook("e", A[0], "var-init");
        return e.type === sA.IDENT_TOKEN && "none" === e.value ? [] : A;
      }
    }, "var-init"),
    rn = cc11001100_hook("rn", {
      name: cc11001100_hook("name", "counter-increment", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        if (0 === A.length) return null;
        var e = cc11001100_hook("e", A[0], "var-init");
        if (e.type === sA.IDENT_TOKEN && "none" === e.value) return null;
        for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", A.filter(GA), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < r.length; n++) {
          var B = cc11001100_hook("B", r[n], "var-init"),
            s = cc11001100_hook("s", r[n + 1], "var-init");
          if (B.type === sA.IDENT_TOKEN) {
            var o = cc11001100_hook("o", s && VA(s) ? s.number : 1, "var-init");
            t.push({
              counter: cc11001100_hook("counter", B.value, "object-key-init"),
              increment: cc11001100_hook("increment", o, "object-key-init")
            });
          }
        }
        return t;
      }
    }, "var-init"),
    nn = cc11001100_hook("nn", {
      name: cc11001100_hook("name", "counter-reset", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        if (0 === A.length) return [];
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", A.filter(GA), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) {
          var n = cc11001100_hook("n", t[r], "var-init"),
            B = cc11001100_hook("B", t[r + 1], "var-init");
          if (zA(n) && "none" !== n.value) {
            var s = cc11001100_hook("s", B && VA(B) ? B.number : 0, "var-init");
            e.push({
              counter: cc11001100_hook("counter", n.value, "object-key-init"),
              reset: cc11001100_hook("reset", s, "object-key-init")
            });
          }
        }
        return e;
      }
    }, "var-init"),
    Bn = cc11001100_hook("Bn", {
      name: cc11001100_hook("name", "quotes", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      parse: function (A) {
        if (0 === A.length) return null;
        var e = cc11001100_hook("e", A[0], "var-init");
        if (e.type === sA.IDENT_TOKEN && "none" === e.value) return null;
        var t = cc11001100_hook("t", [], "var-init"),
          r = cc11001100_hook("r", A.filter(XA), "var-init");
        if (r.length % 2 != 0) return null;
        for (var n = cc11001100_hook("n", 0, "var-init"); n < r.length; n += cc11001100_hook("n", 2, "assign")) {
          var B = cc11001100_hook("B", r[n].value, "var-init"),
            s = cc11001100_hook("s", r[n + 1].value, "var-init");
          t.push({
            open: cc11001100_hook("open", B, "object-key-init"),
            close: cc11001100_hook("close", s, "object-key-init")
          });
        }
        return t;
      }
    }, "var-init"),
    sn = cc11001100_hook("sn", {
      name: cc11001100_hook("name", "box-shadow", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", Ce.LIST, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A) {
        return 1 === A.length && JA(A[0], "none") ? [] : WA(A).map(function (A) {
          for (var e = cc11001100_hook("e", {
              color: cc11001100_hook("color", 255, "object-key-init"),
              offsetX: cc11001100_hook("offsetX", se, "object-key-init"),
              offsetY: cc11001100_hook("offsetY", se, "object-key-init"),
              blur: cc11001100_hook("blur", se, "object-key-init"),
              spread: cc11001100_hook("spread", se, "object-key-init"),
              inset: cc11001100_hook("inset", !1, "object-key-init")
            }, "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < A.length; r++) {
            var n = cc11001100_hook("n", A[r], "var-init");
            JA(n, "inset") ? e.inset = cc11001100_hook("e.inset", !0, "assign") : YA(n) ? (0 === t ? e.offsetX = cc11001100_hook("e.offsetX", n, "assign") : 1 === t ? e.offsetY = cc11001100_hook("e.offsetY", n, "assign") : 2 === t ? e.blur = cc11001100_hook("e.blur", n, "assign") : e.spread = cc11001100_hook("e.spread", n, "assign"), t++) : e.color = cc11001100_hook("e.color", we(n), "assign");
          }
          return e;
        });
      }
    }, "var-init"),
    on = cc11001100_hook("on", (an.prototype.isVisible = cc11001100_hook("an.prototype.isVisible", function () {
      return 0 < this.display && 0 < this.opacity && this.visibility === Lr.VISIBLE;
    }, "assign"), an.prototype.isTransparent = cc11001100_hook("an.prototype.isTransparent", function () {
      return ee(this.backgroundColor);
    }, "assign"), an.prototype.isTransformed = cc11001100_hook("an.prototype.isTransformed", function () {
      return null !== this.transform;
    }, "assign"), an.prototype.isPositioned = cc11001100_hook("an.prototype.isPositioned", function () {
      return this.position !== pr.STATIC;
    }, "assign"), an.prototype.isPositionedWithZIndex = cc11001100_hook("an.prototype.isPositionedWithZIndex", function () {
      return this.isPositioned() && !this.zIndex.auto;
    }, "assign"), an.prototype.isFloating = cc11001100_hook("an.prototype.isFloating", function () {
      return this.float !== Dt.NONE;
    }, "assign"), an.prototype.isInlineLevel = cc11001100_hook("an.prototype.isInlineLevel", function () {
      return $r(this.display, 4) || $r(this.display, 33554432) || $r(this.display, 268435456) || $r(this.display, 536870912) || $r(this.display, 67108864) || $r(this.display, 134217728);
    }, "assign"), an), "var-init");
  function an(A) {
    cc11001100_hook("A", A, "function-parameter");
    this.backgroundClip = cc11001100_hook("this.backgroundClip", un(me, A.backgroundClip), "assign"), this.backgroundColor = cc11001100_hook("this.backgroundColor", un(Re, A.backgroundColor), "assign"), this.backgroundImage = cc11001100_hook("this.backgroundImage", un(Qt, A.backgroundImage), "assign"), this.backgroundOrigin = cc11001100_hook("this.backgroundOrigin", un(wt, A.backgroundOrigin), "assign"), this.backgroundPosition = cc11001100_hook("this.backgroundPosition", un(ut, A.backgroundPosition), "assign"), this.backgroundRepeat = cc11001100_hook("this.backgroundRepeat", un(Ct, A.backgroundRepeat), "assign"), this.backgroundSize = cc11001100_hook("this.backgroundSize", un(dt, A.backgroundSize), "assign"), this.borderTopColor = cc11001100_hook("this.borderTopColor", un(pt, A.borderTopColor), "assign"), this.borderRightColor = cc11001100_hook("this.borderRightColor", un(Nt, A.borderRightColor), "assign"), this.borderBottomColor = cc11001100_hook("this.borderBottomColor", un(Kt, A.borderBottomColor), "assign"), this.borderLeftColor = cc11001100_hook("this.borderLeftColor", un(It, A.borderLeftColor), "assign"), this.borderTopLeftRadius = cc11001100_hook("this.borderTopLeftRadius", un(Tt, A.borderTopLeftRadius), "assign"), this.borderTopRightRadius = cc11001100_hook("this.borderTopRightRadius", un(mt, A.borderTopRightRadius), "assign"), this.borderBottomRightRadius = cc11001100_hook("this.borderBottomRightRadius", un(Rt, A.borderBottomRightRadius), "assign"), this.borderBottomLeftRadius = cc11001100_hook("this.borderBottomLeftRadius", un(Lt, A.borderBottomLeftRadius), "assign"), this.borderTopStyle = cc11001100_hook("this.borderTopStyle", un(St, A.borderTopStyle), "assign"), this.borderRightStyle = cc11001100_hook("this.borderRightStyle", un(Mt, A.borderRightStyle), "assign"), this.borderBottomStyle = cc11001100_hook("this.borderBottomStyle", un(yt, A.borderBottomStyle), "assign"), this.borderLeftStyle = cc11001100_hook("this.borderLeftStyle", un(_t, A.borderLeftStyle), "assign"), this.borderTopWidth = cc11001100_hook("this.borderTopWidth", un(Pt, A.borderTopWidth), "assign"), this.borderRightWidth = cc11001100_hook("this.borderRightWidth", un(xt, A.borderRightWidth), "assign"), this.borderBottomWidth = cc11001100_hook("this.borderBottomWidth", un(Vt, A.borderBottomWidth), "assign"), this.borderLeftWidth = cc11001100_hook("this.borderLeftWidth", un(zt, A.borderLeftWidth), "assign"), this.boxShadow = cc11001100_hook("this.boxShadow", un(sn, A.boxShadow), "assign"), this.color = cc11001100_hook("this.color", un(Xt, A.color), "assign"), this.display = cc11001100_hook("this.display", un(Jt, A.display), "assign"), this.float = cc11001100_hook("this.float", un(Zt, A.cssFloat), "assign"), this.fontFamily = cc11001100_hook("this.fontFamily", un(Yr, A.fontFamily), "assign"), this.fontSize = cc11001100_hook("this.fontSize", un(qr, A.fontSize), "assign"), this.fontStyle = cc11001100_hook("this.fontStyle", un(en, A.fontStyle), "assign"), this.fontVariant = cc11001100_hook("this.fontVariant", un(jr, A.fontVariant), "assign"), this.fontWeight = cc11001100_hook("this.fontWeight", un(Zr, A.fontWeight), "assign"), this.letterSpacing = cc11001100_hook("this.letterSpacing", un(jt, A.letterSpacing), "assign"), this.lineBreak = cc11001100_hook("this.lineBreak", un($t, A.lineBreak), "assign"), this.lineHeight = cc11001100_hook("this.lineHeight", un(Ar, A.lineHeight), "assign"), this.listStyleImage = cc11001100_hook("this.listStyleImage", un(er, A.listStyleImage), "assign"), this.listStylePosition = cc11001100_hook("this.listStylePosition", un(nr, A.listStylePosition), "assign"), this.listStyleType = cc11001100_hook("this.listStyleType", un(ir, A.listStyleType), "assign"), this.marginTop = cc11001100_hook("this.marginTop", un(ar, A.marginTop), "assign"), this.marginRight = cc11001100_hook("this.marginRight", un(cr, A.marginRight), "assign"), this.marginBottom = cc11001100_hook("this.marginBottom", un(Qr, A.marginBottom), "assign"), this.marginLeft = cc11001100_hook("this.marginLeft", un(wr, A.marginLeft), "assign"), this.opacity = cc11001100_hook("this.opacity", un(Gr, A.opacity), "assign");
    var e = cc11001100_hook("e", un(Er, A.overflow), "var-init");
    this.overflowX = cc11001100_hook("this.overflowX", e[0], "assign"), this.overflowY = cc11001100_hook("this.overflowY", e[1 < e.length ? 1 : 0], "assign"), this.overflowWrap = cc11001100_hook("this.overflowWrap", un(Fr, A.overflowWrap), "assign"), this.paddingTop = cc11001100_hook("this.paddingTop", un(hr, A.paddingTop), "assign"), this.paddingRight = cc11001100_hook("this.paddingRight", un(Hr, A.paddingRight), "assign"), this.paddingBottom = cc11001100_hook("this.paddingBottom", un(dr, A.paddingBottom), "assign"), this.paddingLeft = cc11001100_hook("this.paddingLeft", un(fr, A.paddingLeft), "assign"), this.position = cc11001100_hook("this.position", un(mr, A.position), "assign"), this.textAlign = cc11001100_hook("this.textAlign", un(Kr, A.textAlign), "assign"), this.textDecorationColor = cc11001100_hook("this.textDecorationColor", un(kr, A.textDecorationColor || A.color), "assign"), this.textDecorationLine = cc11001100_hook("this.textDecorationLine", un(Wr, A.textDecorationLine), "assign"), this.textShadow = cc11001100_hook("this.textShadow", un(Rr, A.textShadow), "assign"), this.textTransform = cc11001100_hook("this.textTransform", un(Or, A.textTransform), "assign"), this.transform = cc11001100_hook("this.transform", un(Dr, A.transform), "assign"), this.transformOrigin = cc11001100_hook("this.transformOrigin", un(yr, A.transformOrigin), "assign"), this.visibility = cc11001100_hook("this.visibility", un(xr, A.visibility), "assign"), this.wordBreak = cc11001100_hook("this.wordBreak", un(Xr, A.wordBreak), "assign"), this.zIndex = cc11001100_hook("this.zIndex", un(Jr, A.zIndex), "assign");
  }
  var cn,
    Qn = function (A) {
      this.content = cc11001100_hook("this.content", un(tn, A.content), "assign"), this.quotes = cc11001100_hook("this.quotes", un(Bn, A.quotes), "assign");
    },
    wn = function (A) {
      this.counterIncrement = cc11001100_hook("this.counterIncrement", un(rn, A.counterIncrement), "assign"), this.counterReset = cc11001100_hook("this.counterReset", un(nn, A.counterReset), "assign");
    },
    un = function (A, e) {
      var t = cc11001100_hook("t", new MA(), "var-init"),
        r = cc11001100_hook("r", null != e ? e.toString() : A.initialValue, "var-init");
      t.write(r);
      var n = cc11001100_hook("n", new _A(t.read()), "var-init");
      switch (A.type) {
        case Ce.IDENT_VALUE:
          var B = cc11001100_hook("B", n.parseComponentValue(), "var-init");
          return A.parse(zA(B) ? B.value : A.initialValue);
        case Ce.VALUE:
          return A.parse(n.parseComponentValue());
        case Ce.LIST:
          return A.parse(n.parseComponentValues());
        case Ce.TOKEN_VALUE:
          return n.parseComponentValue();
        case Ce.TYPE_VALUE:
          switch (A.format) {
            case "angle":
              return ce(n.parseComponentValue());
            case "color":
              return we(n.parseComponentValue());
            case "image":
              return ot(n.parseComponentValue());
            case "length":
              var s = cc11001100_hook("s", n.parseComponentValue(), "var-init");
              return YA(s) ? s : se;
            case "length-percentage":
              var o = cc11001100_hook("o", n.parseComponentValue(), "var-init");
              return qA(o) ? o : se;
          }
      }
      throw new Error("Attempting to parse unsupported css format type " + A.format);
    },
    Un = function (A) {
      this.styles = cc11001100_hook("this.styles", new on(window.getComputedStyle(A, null)), "assign"), this.textNodes = cc11001100_hook("this.textNodes", [], "assign"), this.elements = cc11001100_hook("this.elements", [], "assign"), null !== this.styles.transform && wB(A) && (A.style.transform = cc11001100_hook("A.style.transform", "none", "assign")), this.bounds = cc11001100_hook("this.bounds", T(A), "assign"), this.flags = cc11001100_hook("this.flags", 0, "assign");
    },
    ln = function (A, e) {
      this.text = cc11001100_hook("this.text", A, "assign"), this.bounds = cc11001100_hook("this.bounds", e, "assign");
    },
    Cn = function (A) {
      var e = cc11001100_hook("e", A.ownerDocument, "var-init");
      if (e) {
        var t = cc11001100_hook("t", e.createElement("html2canvaswrapper"), "var-init");
        t.appendChild(A.cloneNode(!0));
        var r = cc11001100_hook("r", A.parentNode, "var-init");
        if (r) {
          r.replaceChild(t, A);
          var n = cc11001100_hook("n", T(t), "var-init");
          return t.firstChild && r.replaceChild(t.firstChild, t), n;
        }
      }
      return new I(0, 0, 0, 0);
    },
    gn = function (A, e, t) {
      var r = cc11001100_hook("r", A.ownerDocument, "var-init");
      if (!r) throw new Error("Node has no owner document");
      var n = cc11001100_hook("n", r.createRange(), "var-init");
      return n.setStart(A, e), n.setEnd(A, e + t), I.fromClientRect(n.getBoundingClientRect());
    },
    En = function (A, e) {
      return 0 !== e.letterSpacing ? c(A).map(function (A) {
        return l(A);
      }) : Fn(A, e);
    },
    Fn = function (A, e) {
      for (var t, r = cc11001100_hook("r", function (A, e) {
          var t = cc11001100_hook("t", c(A), "var-init"),
            r = cc11001100_hook("r", u(t, e), "var-init"),
            n = cc11001100_hook("n", r[0], "var-init"),
            B = cc11001100_hook("B", r[1], "var-init"),
            s = cc11001100_hook("s", r[2], "var-init"),
            o = cc11001100_hook("o", t.length, "var-init"),
            i = cc11001100_hook("i", 0, "var-init"),
            a = cc11001100_hook("a", 0, "var-init");
          return {
            next: function () {
              if (o <= a) return {
                done: cc11001100_hook("done", !0, "object-key-init"),
                value: cc11001100_hook("value", null, "object-key-init")
              };
              for (var A = cc11001100_hook("A", Y, "var-init"); a < o && (A = cc11001100_hook("A", w(t, B, n, ++a, s), "assign")) === Y;);
              if (A === Y && a !== o) return {
                done: cc11001100_hook("done", !0, "object-key-init"),
                value: cc11001100_hook("value", null, "object-key-init")
              };
              var e = cc11001100_hook("e", new nA(t, A, i, a), "var-init");
              return i = cc11001100_hook("i", a, "assign"), {
                value: cc11001100_hook("value", e, "object-key-init"),
                done: cc11001100_hook("done", !1, "object-key-init")
              };
            }
          };
        }(A, {
          lineBreak: cc11001100_hook("lineBreak", e.lineBreak, "object-key-init"),
          wordBreak: cc11001100_hook("wordBreak", e.overflowWrap === Ur.BREAK_WORD ? "break-word" : e.wordBreak, "object-key-init")
        }), "var-init"), n = cc11001100_hook("n", [], "var-init"); !(t = cc11001100_hook("t", r.next(), "assign")).done;) t.value && n.push(t.value.slice());
      return n;
    },
    hn = function (A, e) {
      this.text = cc11001100_hook("this.text", Hn(A.data, e.textTransform), "assign"), this.textBounds = cc11001100_hook("this.textBounds", function (A, t, r) {
        var e = cc11001100_hook("e", En(A, t), "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          B = cc11001100_hook("B", 0, "var-init");
        return e.forEach(function (A) {
          if (t.textDecorationLine.length || 0 < A.trim().length) {
            if (Oe.SUPPORT_RANGE_BOUNDS) n.push(new ln(A, gn(r, B, A.length)));else {
              var e = cc11001100_hook("e", r.splitText(A.length), "var-init");
              n.push(new ln(A, Cn(r))), r = cc11001100_hook("r", e, "assign");
            }
          } else Oe.SUPPORT_RANGE_BOUNDS || (r = cc11001100_hook("r", r.splitText(A.length), "assign"));
          B += cc11001100_hook("B", A.length, "assign");
        }), n;
      }(this.text, e, A), "assign");
    },
    Hn = function (A, e) {
      switch (e) {
        case Ir.LOWERCASE:
          return A.toLowerCase();
        case Ir.CAPITALIZE:
          return A.replace(dn, fn);
        case Ir.UPPERCASE:
          return A.toUpperCase();
        default:
          return A;
      }
    },
    dn = cc11001100_hook("dn", /(^|\s|:|-|\(|\))([a-z])/g, "var-init"),
    fn = function (A, e, t) {
      return 0 < A.length ? e + t.toUpperCase() : A;
    },
    pn = cc11001100_hook("pn", (A(Nn, cn = cc11001100_hook("cn", Un, "assign")), Nn), "var-init");
  function Nn(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", cn.call(this, A) || this, "var-init");
    return e.src = cc11001100_hook("e.src", A.currentSrc || A.src, "assign"), e.intrinsicWidth = cc11001100_hook("e.intrinsicWidth", A.naturalWidth, "assign"), e.intrinsicHeight = cc11001100_hook("e.intrinsicHeight", A.naturalHeight, "assign"), Se.getInstance().addImage(e.src), e;
  }
  var Kn,
    In = cc11001100_hook("In", (A(Tn, Kn = cc11001100_hook("Kn", Un, "assign")), Tn), "var-init");
  function Tn(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", Kn.call(this, A) || this, "var-init");
    return e.canvas = cc11001100_hook("e.canvas", A, "assign"), e.intrinsicWidth = cc11001100_hook("e.intrinsicWidth", A.width, "assign"), e.intrinsicHeight = cc11001100_hook("e.intrinsicHeight", A.height, "assign"), e;
  }
  var mn,
    Rn = cc11001100_hook("Rn", (A(Ln, mn = cc11001100_hook("mn", Un, "assign")), Ln), "var-init");
  function Ln(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", mn.call(this, A) || this, "var-init"),
      t = cc11001100_hook("t", new XMLSerializer(), "var-init");
    return e.svg = cc11001100_hook("e.svg", "data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)), "assign"), e.intrinsicWidth = cc11001100_hook("e.intrinsicWidth", A.width.baseVal.value, "assign"), e.intrinsicHeight = cc11001100_hook("e.intrinsicHeight", A.height.baseVal.value, "assign"), Se.getInstance().addImage(e.svg), e;
  }
  var vn,
    On = cc11001100_hook("On", (A(Dn, vn = cc11001100_hook("vn", Un, "assign")), Dn), "var-init");
  function Dn(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", vn.call(this, A) || this, "var-init");
    return e.value = cc11001100_hook("e.value", A.value, "assign"), e;
  }
  var bn,
    Sn = cc11001100_hook("Sn", (A(Mn, bn = cc11001100_hook("bn", Un, "assign")), Mn), "var-init");
  function Mn(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", bn.call(this, A) || this, "var-init");
    return e.start = cc11001100_hook("e.start", A.start, "assign"), e.reversed = cc11001100_hook("e.reversed", "boolean" == typeof A.reversed && !0 === A.reversed, "assign"), e;
  }
  var yn,
    _n = cc11001100_hook("_n", [{
      type: cc11001100_hook("type", sA.DIMENSION_TOKEN, "object-key-init"),
      flags: cc11001100_hook("flags", 0, "object-key-init"),
      unit: cc11001100_hook("unit", "px", "object-key-init"),
      number: cc11001100_hook("number", 3, "object-key-init")
    }], "var-init"),
    Pn = cc11001100_hook("Pn", [{
      type: cc11001100_hook("type", sA.PERCENTAGE_TOKEN, "object-key-init"),
      flags: cc11001100_hook("flags", 0, "object-key-init"),
      number: cc11001100_hook("number", 50, "object-key-init")
    }], "var-init"),
    xn = cc11001100_hook("xn", "checkbox", "var-init"),
    Vn = cc11001100_hook("Vn", "radio", "var-init"),
    zn = cc11001100_hook("zn", "password", "var-init"),
    Xn = cc11001100_hook("Xn", 707406591, "var-init"),
    Jn = cc11001100_hook("Jn", (A(Gn, yn = cc11001100_hook("yn", Un, "assign")), Gn), "var-init");
  function Gn(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", yn.call(this, A) || this, "var-init");
    switch (e.type = cc11001100_hook("e.type", A.type.toLowerCase(), "assign"), e.checked = cc11001100_hook("e.checked", A.checked, "assign"), e.value = cc11001100_hook("e.value", function (A) {
      var e = cc11001100_hook("e", A.type === zn ? new Array(A.value.length + 1).join("•") : A.value, "var-init");
      return 0 === e.length ? A.placeholder || "" : e;
    }(A), "assign"), e.type !== xn && e.type !== Vn || (e.styles.backgroundColor = cc11001100_hook("e.styles.backgroundColor", 3739148031, "assign"), e.styles.borderTopColor = cc11001100_hook("e.styles.borderTopColor", e.styles.borderRightColor = cc11001100_hook("e.styles.borderRightColor", e.styles.borderBottomColor = cc11001100_hook("e.styles.borderBottomColor", e.styles.borderLeftColor = cc11001100_hook("e.styles.borderLeftColor", 2779096575, "assign"), "assign"), "assign"), "assign"), e.styles.borderTopWidth = cc11001100_hook("e.styles.borderTopWidth", e.styles.borderRightWidth = cc11001100_hook("e.styles.borderRightWidth", e.styles.borderBottomWidth = cc11001100_hook("e.styles.borderBottomWidth", e.styles.borderLeftWidth = cc11001100_hook("e.styles.borderLeftWidth", 1, "assign"), "assign"), "assign"), "assign"), e.styles.borderTopStyle = cc11001100_hook("e.styles.borderTopStyle", e.styles.borderRightStyle = cc11001100_hook("e.styles.borderRightStyle", e.styles.borderBottomStyle = cc11001100_hook("e.styles.borderBottomStyle", e.styles.borderLeftStyle = cc11001100_hook("e.styles.borderLeftStyle", ht.SOLID, "assign"), "assign"), "assign"), "assign"), e.styles.backgroundClip = cc11001100_hook("e.styles.backgroundClip", [Ee.BORDER_BOX], "assign"), e.styles.backgroundOrigin = cc11001100_hook("e.styles.backgroundOrigin", [0], "assign"), e.bounds = cc11001100_hook("e.bounds", function (A) {
      return A.width > A.height ? new I(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new I(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
    }(e.bounds), "assign")), e.type) {
      case xn:
        e.styles.borderTopRightRadius = cc11001100_hook("e.styles.borderTopRightRadius", e.styles.borderTopLeftRadius = cc11001100_hook("e.styles.borderTopLeftRadius", e.styles.borderBottomRightRadius = cc11001100_hook("e.styles.borderBottomRightRadius", e.styles.borderBottomLeftRadius = cc11001100_hook("e.styles.borderBottomLeftRadius", _n, "assign"), "assign"), "assign"), "assign");
        break;
      case Vn:
        e.styles.borderTopRightRadius = cc11001100_hook("e.styles.borderTopRightRadius", e.styles.borderTopLeftRadius = cc11001100_hook("e.styles.borderTopLeftRadius", e.styles.borderBottomRightRadius = cc11001100_hook("e.styles.borderBottomRightRadius", e.styles.borderBottomLeftRadius = cc11001100_hook("e.styles.borderBottomLeftRadius", Pn, "assign"), "assign"), "assign"), "assign");
    }
    return e;
  }
  var kn,
    Wn = cc11001100_hook("Wn", (A(Yn, kn = cc11001100_hook("kn", Un, "assign")), Yn), "var-init");
  function Yn(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", kn.call(this, A) || this, "var-init"),
      t = cc11001100_hook("t", A.options[A.selectedIndex || 0], "var-init");
    return e.value = cc11001100_hook("e.value", t && t.text || "", "assign"), e;
  }
  var qn,
    Zn = cc11001100_hook("Zn", (A(jn, qn = cc11001100_hook("qn", Un, "assign")), jn), "var-init");
  function jn(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", qn.call(this, A) || this, "var-init");
    return e.value = cc11001100_hook("e.value", A.value, "assign"), e;
  }
  function $n(A) {
    cc11001100_hook("A", A, "function-parameter");
    return we(_A.create(A).parseComponentValue());
  }
  var AB,
    eB = cc11001100_hook("eB", (A(tB, AB = cc11001100_hook("AB", Un, "assign")), tB), "var-init");
  function tB(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", AB.call(this, A) || this, "var-init");
    e.src = cc11001100_hook("e.src", A.src, "assign"), e.width = cc11001100_hook("e.width", parseInt(A.width, 10) || 0, "assign"), e.height = cc11001100_hook("e.height", parseInt(A.height, 10) || 0, "assign"), e.backgroundColor = cc11001100_hook("e.backgroundColor", e.styles.backgroundColor, "assign");
    try {
      if (A.contentWindow && A.contentWindow.document && A.contentWindow.document.documentElement) {
        e.tree = cc11001100_hook("e.tree", oB(A.contentWindow.document.documentElement), "assign");
        var t = cc11001100_hook("t", A.contentWindow.document.documentElement ? $n(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor) : He.TRANSPARENT, "var-init"),
          r = cc11001100_hook("r", A.contentWindow.document.body ? $n(getComputedStyle(A.contentWindow.document.body).backgroundColor) : He.TRANSPARENT, "var-init");
        e.backgroundColor = cc11001100_hook("e.backgroundColor", ee(t) ? ee(r) ? e.styles.backgroundColor : r : t, "assign");
      }
    } catch (A) {}
    return e;
  }
  function rB(A) {
    cc11001100_hook("A", A, "function-parameter");
    return "STYLE" === A.tagName;
  }
  var nB = cc11001100_hook("nB", ["OL", "UL", "MENU"], "var-init"),
    BB = function (A, e, t) {
      for (var r = cc11001100_hook("r", A.firstChild, "var-init"), n = cc11001100_hook("n", void 0, "var-init"); r; r = cc11001100_hook("r", n, "assign")) if (n = cc11001100_hook("n", r.nextSibling, "assign"), cB(r) && 0 < r.data.trim().length) e.textNodes.push(new hn(r, e.styles));else if (QB(r)) {
        var B = cc11001100_hook("B", sB(r), "var-init");
        B.styles.isVisible() && (iB(r, B, t) ? B.flags |= cc11001100_hook("B.flags", 4, "assign") : aB(B.styles) && (B.flags |= cc11001100_hook("B.flags", 2, "assign")), -1 !== nB.indexOf(r.tagName) && (B.flags |= cc11001100_hook("B.flags", 8, "assign")), e.elements.push(B), dB(r) || gB(r) || fB(r) || BB(r, B, t));
      }
    },
    sB = function (A) {
      return hB(A) ? new pn(A) : FB(A) ? new In(A) : gB(A) ? new Rn(A) : UB(A) ? new On(A) : lB(A) ? new Sn(A) : CB(A) ? new Jn(A) : fB(A) ? new Wn(A) : dB(A) ? new Zn(A) : HB(A) ? new eB(A) : new Un(A);
    },
    oB = function (A) {
      var e = cc11001100_hook("e", sB(A), "var-init");
      return e.flags |= cc11001100_hook("e.flags", 4, "assign"), BB(A, e, e), e;
    },
    iB = function (A, e, t) {
      return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || EB(A) && t.styles.isTransparent();
    },
    aB = function (A) {
      return A.isPositioned() || A.isFloating();
    },
    cB = function (A) {
      return A.nodeType === Node.TEXT_NODE;
    },
    QB = function (A) {
      return A.nodeType === Node.ELEMENT_NODE;
    },
    wB = function (A) {
      return QB(A) && void 0 !== A.style && !uB(A);
    },
    uB = function (A) {
      return "object" == typeof A.className;
    },
    UB = function (A) {
      return "LI" === A.tagName;
    },
    lB = function (A) {
      return "OL" === A.tagName;
    },
    CB = function (A) {
      return "INPUT" === A.tagName;
    },
    gB = function (A) {
      return "svg" === A.tagName;
    },
    EB = function (A) {
      return "BODY" === A.tagName;
    },
    FB = function (A) {
      return "CANVAS" === A.tagName;
    },
    hB = function (A) {
      return "IMG" === A.tagName;
    },
    HB = function (A) {
      return "IFRAME" === A.tagName;
    },
    dB = function (A) {
      return "TEXTAREA" === A.tagName;
    },
    fB = function (A) {
      return "SELECT" === A.tagName;
    },
    pB = cc11001100_hook("pB", (NB.prototype.getCounterValue = cc11001100_hook("NB.prototype.getCounterValue", function (A) {
      var e = cc11001100_hook("e", this.counters[A], "var-init");
      return e && e.length ? e[e.length - 1] : 1;
    }, "assign"), NB.prototype.getCounterValues = cc11001100_hook("NB.prototype.getCounterValues", function (A) {
      var e = cc11001100_hook("e", this.counters[A], "var-init");
      return e || [];
    }, "assign"), NB.prototype.pop = cc11001100_hook("NB.prototype.pop", function (A) {
      var e = cc11001100_hook("e", this, "var-init");
      A.forEach(function (A) {
        return e.counters[A].pop();
      });
    }, "assign"), NB.prototype.parse = cc11001100_hook("NB.prototype.parse", function (A) {
      var t = cc11001100_hook("t", this, "var-init"),
        e = cc11001100_hook("e", A.counterIncrement, "var-init"),
        r = cc11001100_hook("r", A.counterReset, "var-init"),
        n = cc11001100_hook("n", !0, "var-init");
      null !== e && e.forEach(function (A) {
        var e = cc11001100_hook("e", t.counters[A.counter], "var-init");
        e && 0 !== A.increment && (n = cc11001100_hook("n", !1, "assign"), e[Math.max(0, e.length - 1)] += cc11001100_hook("e[Math.max(0, e.length - 1)]", A.increment, "assign"));
      });
      var B = cc11001100_hook("B", [], "var-init");
      return n && r.forEach(function (A) {
        var e = cc11001100_hook("e", t.counters[A.counter], "var-init");
        B.push(A.counter), e || (e = cc11001100_hook("e", t.counters[A.counter] = cc11001100_hook("t.counters[A.counter]", [], "assign"), "assign")), e.push(A.reset);
      }), B;
    }, "assign"), NB), "var-init");
  function NB() {
    this.counters = cc11001100_hook("this.counters", {}, "assign");
  }
  function KB(r, A, e, n, t, B) {
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    return r < A || e < r ? yB(r, t, 0 < B.length) : n.integers.reduce(function (A, e, t) {
      for (; e <= r;) r -= cc11001100_hook("r", e, "assign"), A += cc11001100_hook("A", n.values[t], "assign");
      return A;
    }, "") + B;
  }
  function IB(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    for (var n = cc11001100_hook("n", "", "var-init"); t || A--, n = cc11001100_hook("n", r(A) + n, "assign"), e <= (A /= cc11001100_hook("A", e, "assign")) * e;);
    return n;
  }
  function TB(A, e, t, r, n) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var B = cc11001100_hook("B", t - e + 1, "var-init");
    return (A < 0 ? "-" : "") + (IB(Math.abs(A), B, r, function (A) {
      return l(Math.floor(A % B) + e);
    }) + n);
  }
  function mB(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    void 0 === t && (t = cc11001100_hook("t", ". ", "assign"));
    var r = cc11001100_hook("r", e.length, "var-init");
    return IB(Math.abs(A), r, !1, function (A) {
      return e[Math.floor(A % r)];
    }) + t;
  }
  function RB(A, e, t, r, n, B) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    if (A < -9999 || 9999 < A) return yB(A, tr.CJK_DECIMAL, 0 < n.length);
    var s = cc11001100_hook("s", Math.abs(A), "var-init"),
      o = cc11001100_hook("o", n, "var-init");
    if (0 === s) return e[0] + o;
    for (var i = cc11001100_hook("i", 0, "var-init"); 0 < s && i <= 4; i++) {
      var a = cc11001100_hook("a", s % 10, "var-init");
      0 == a && $r(B, 1) && "" !== o ? o = cc11001100_hook("o", e[a] + o, "assign") : 1 < a || 1 == a && 0 === i || 1 == a && 1 === i && $r(B, 2) || 1 == a && 1 === i && $r(B, 4) && 100 < A || 1 == a && 1 < i && $r(B, 8) ? o = cc11001100_hook("o", e[a] + (0 < i ? t[i - 1] : "") + o, "assign") : 1 == a && 0 < i && (o = cc11001100_hook("o", t[i - 1] + o, "assign")), s = cc11001100_hook("s", Math.floor(s / 10), "assign");
    }
    return (A < 0 ? r : "") + o;
  }
  var LB,
    vB,
    OB = cc11001100_hook("OB", {
      integers: cc11001100_hook("integers", [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], "object-key-init"),
      values: cc11001100_hook("values", ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"], "object-key-init")
    }, "var-init"),
    DB = cc11001100_hook("DB", {
      integers: cc11001100_hook("integers", [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "object-key-init"),
      values: cc11001100_hook("values", ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"], "object-key-init")
    }, "var-init"),
    bB = cc11001100_hook("bB", {
      integers: cc11001100_hook("integers", [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "object-key-init"),
      values: cc11001100_hook("values", ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"], "object-key-init")
    }, "var-init"),
    SB = cc11001100_hook("SB", {
      integers: cc11001100_hook("integers", [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "object-key-init"),
      values: cc11001100_hook("values", ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"], "object-key-init")
    }, "var-init"),
    MB = cc11001100_hook("MB", "마이너스", "var-init"),
    yB = function (A, e, t) {
      var r = cc11001100_hook("r", t ? ". " : "", "var-init"),
        n = cc11001100_hook("n", t ? "、" : "", "var-init"),
        B = cc11001100_hook("B", t ? ", " : "", "var-init"),
        s = cc11001100_hook("s", t ? " " : "", "var-init");
      switch (e) {
        case tr.DISC:
          return "•" + s;
        case tr.CIRCLE:
          return "◦" + s;
        case tr.SQUARE:
          return "◾" + s;
        case tr.DECIMAL_LEADING_ZERO:
          var o = cc11001100_hook("o", TB(A, 48, 57, !0, r), "var-init");
          return o.length < 4 ? "0" + o : o;
        case tr.CJK_DECIMAL:
          return mB(A, "〇一二三四五六七八九", n);
        case tr.LOWER_ROMAN:
          return KB(A, 1, 3999, OB, tr.DECIMAL, r).toLowerCase();
        case tr.UPPER_ROMAN:
          return KB(A, 1, 3999, OB, tr.DECIMAL, r);
        case tr.LOWER_GREEK:
          return TB(A, 945, 969, !1, r);
        case tr.LOWER_ALPHA:
          return TB(A, 97, 122, !1, r);
        case tr.UPPER_ALPHA:
          return TB(A, 65, 90, !1, r);
        case tr.ARABIC_INDIC:
          return TB(A, 1632, 1641, !0, r);
        case tr.ARMENIAN:
        case tr.UPPER_ARMENIAN:
          return KB(A, 1, 9999, DB, tr.DECIMAL, r);
        case tr.LOWER_ARMENIAN:
          return KB(A, 1, 9999, DB, tr.DECIMAL, r).toLowerCase();
        case tr.BENGALI:
          return TB(A, 2534, 2543, !0, r);
        case tr.CAMBODIAN:
        case tr.KHMER:
          return TB(A, 6112, 6121, !0, r);
        case tr.CJK_EARTHLY_BRANCH:
          return mB(A, "子丑寅卯辰巳午未申酉戌亥", n);
        case tr.CJK_HEAVENLY_STEM:
          return mB(A, "甲乙丙丁戊己庚辛壬癸", n);
        case tr.CJK_IDEOGRAPHIC:
        case tr.TRAD_CHINESE_INFORMAL:
          return RB(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
        case tr.TRAD_CHINESE_FORMAL:
          return RB(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
        case tr.SIMP_CHINESE_INFORMAL:
          return RB(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
        case tr.SIMP_CHINESE_FORMAL:
          return RB(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
        case tr.JAPANESE_INFORMAL:
          return RB(A, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
        case tr.JAPANESE_FORMAL:
          return RB(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
        case tr.KOREAN_HANGUL_FORMAL:
          return RB(A, "영일이삼사오육칠팔구", "십백천만", MB, B, 7);
        case tr.KOREAN_HANJA_INFORMAL:
          return RB(A, "零一二三四五六七八九", "十百千萬", MB, B, 0);
        case tr.KOREAN_HANJA_FORMAL:
          return RB(A, "零壹貳參四五六七八九", "拾百千", MB, B, 7);
        case tr.DEVANAGARI:
          return TB(A, 2406, 2415, !0, r);
        case tr.GEORGIAN:
          return KB(A, 1, 19999, SB, tr.DECIMAL, r);
        case tr.GUJARATI:
          return TB(A, 2790, 2799, !0, r);
        case tr.GURMUKHI:
          return TB(A, 2662, 2671, !0, r);
        case tr.HEBREW:
          return KB(A, 1, 10999, bB, tr.DECIMAL, r);
        case tr.HIRAGANA:
          return mB(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
        case tr.HIRAGANA_IROHA:
          return mB(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
        case tr.KANNADA:
          return TB(A, 3302, 3311, !0, r);
        case tr.KATAKANA:
          return mB(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
        case tr.KATAKANA_IROHA:
          return mB(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
        case tr.LAO:
          return TB(A, 3792, 3801, !0, r);
        case tr.MONGOLIAN:
          return TB(A, 6160, 6169, !0, r);
        case tr.MYANMAR:
          return TB(A, 4160, 4169, !0, r);
        case tr.ORIYA:
          return TB(A, 2918, 2927, !0, r);
        case tr.PERSIAN:
          return TB(A, 1776, 1785, !0, r);
        case tr.TAMIL:
          return TB(A, 3046, 3055, !0, r);
        case tr.TELUGU:
          return TB(A, 3174, 3183, !0, r);
        case tr.THAI:
          return TB(A, 3664, 3673, !0, r);
        case tr.TIBETAN:
          return TB(A, 3872, 3881, !0, r);
        case tr.DECIMAL:
        default:
          return TB(A, 48, 57, !0, r);
      }
    },
    _B = cc11001100_hook("_B", "data-html2canvas-ignore", "var-init"),
    PB = cc11001100_hook("PB", (xB.prototype.toIFrame = cc11001100_hook("xB.prototype.toIFrame", function (A, t) {
      var e = cc11001100_hook("e", this, "var-init"),
        r = cc11001100_hook("r", XB(A, t), "var-init");
      if (!r.contentWindow) return Promise.reject("Unable to find iframe window");
      var n = cc11001100_hook("n", A.defaultView.pageXOffset, "var-init"),
        B = cc11001100_hook("B", A.defaultView.pageYOffset, "var-init"),
        s = cc11001100_hook("s", r.contentWindow, "var-init"),
        o = cc11001100_hook("o", s.document, "var-init"),
        i = cc11001100_hook("i", JB(r).then(function () {
          return a(e, void 0, void 0, function () {
            var e;
            return S(this, function (A) {
              switch (A.label) {
                case 0:
                  return this.scrolledElements.forEach(YB), s && (s.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === t.top && s.scrollX === t.left || (o.documentElement.style.top = cc11001100_hook("o.documentElement.style.top", -t.top + "px", "assign"), o.documentElement.style.left = cc11001100_hook("o.documentElement.style.left", -t.left + "px", "assign"), o.documentElement.style.position = cc11001100_hook("o.documentElement.style.position", "absolute", "assign"))), e = cc11001100_hook("e", this.options.onclone, "assign"), void 0 === this.clonedReferenceElement ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : o.fonts && o.fonts.ready ? [4, o.fonts.ready] : [3, 2];
                case 1:
                  A.sent(), A.label = cc11001100_hook("A.label", 2, "assign");
                case 2:
                  return "function" == typeof e ? [2, Promise.resolve().then(function () {
                    return e(o);
                  }).then(function () {
                    return r;
                  })] : [2, r];
              }
            });
          });
        }), "var-init");
      return o.open(), o.write(kB(document.doctype) + "<html></html>"), WB(this.referenceElement.ownerDocument, n, B), o.replaceChild(o.adoptNode(this.documentElement), o.documentElement), o.close(), i;
    }, "assign"), xB.prototype.createElementClone = cc11001100_hook("xB.prototype.createElementClone", function (A) {
      if (FB(A)) return this.createCanvasClone(A);
      if (rB(A)) return this.createStyleClone(A);
      var e = cc11001100_hook("e", A.cloneNode(!1), "var-init");
      return hB(e) && "lazy" === e.loading && (e.loading = cc11001100_hook("e.loading", "eager", "assign")), e;
    }, "assign"), xB.prototype.createStyleClone = cc11001100_hook("xB.prototype.createStyleClone", function (A) {
      try {
        var e = cc11001100_hook("e", A.sheet, "var-init");
        if (e && e.cssRules) {
          var t = cc11001100_hook("t", [].slice.call(e.cssRules, 0).reduce(function (A, e) {
              return e && "string" == typeof e.cssText ? A + e.cssText : A;
            }, ""), "var-init"),
            r = cc11001100_hook("r", A.cloneNode(!1), "var-init");
          return r.textContent = cc11001100_hook("r.textContent", t, "assign"), r;
        }
      } catch (A) {
        if (De.getInstance(this.options.id).error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A;
      }
      return A.cloneNode(!1);
    }, "assign"), xB.prototype.createCanvasClone = cc11001100_hook("xB.prototype.createCanvasClone", function (A) {
      if (this.options.inlineImages && A.ownerDocument) {
        var e = cc11001100_hook("e", A.ownerDocument.createElement("img"), "var-init");
        try {
          return e.src = cc11001100_hook("e.src", A.toDataURL(), "assign"), e;
        } catch (A) {
          De.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted");
        }
      }
      var t = cc11001100_hook("t", A.cloneNode(!1), "var-init");
      try {
        t.width = cc11001100_hook("t.width", A.width, "assign"), t.height = cc11001100_hook("t.height", A.height, "assign");
        var r = cc11001100_hook("r", A.getContext("2d"), "var-init"),
          n = cc11001100_hook("n", t.getContext("2d"), "var-init");
        return n && (r ? n.putImageData(r.getImageData(0, 0, A.width, A.height), 0, 0) : n.drawImage(A, 0, 0)), t;
      } catch (A) {}
      return t;
    }, "assign"), xB.prototype.cloneNode = cc11001100_hook("xB.prototype.cloneNode", function (A) {
      if (cB(A)) return document.createTextNode(A.data);
      if (!A.ownerDocument) return A.cloneNode(!1);
      var e = cc11001100_hook("e", A.ownerDocument.defaultView, "var-init");
      if (e && QB(A) && (wB(A) || uB(A))) {
        var t = cc11001100_hook("t", this.createElementClone(A), "var-init"),
          r = cc11001100_hook("r", e.getComputedStyle(A), "var-init"),
          n = cc11001100_hook("n", e.getComputedStyle(A, ":before"), "var-init"),
          B = cc11001100_hook("B", e.getComputedStyle(A, ":after"), "var-init");
        this.referenceElement === A && wB(t) && (this.clonedReferenceElement = cc11001100_hook("this.clonedReferenceElement", t, "assign")), EB(t) && $B(t);
        for (var s = cc11001100_hook("s", this.counters.parse(new wn(r)), "var-init"), o = cc11001100_hook("o", this.resolvePseudoContent(A, t, n, LB.BEFORE), "var-init"), i = cc11001100_hook("i", A.firstChild, "var-init"); i; i = cc11001100_hook("i", i.nextSibling, "assign")) QB(i) && ("SCRIPT" === i.tagName || i.hasAttribute(_B) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(i)) || this.options.copyStyles && QB(i) && rB(i) || t.appendChild(this.cloneNode(i));
        o && t.insertBefore(o, t.firstChild);
        var a = cc11001100_hook("a", this.resolvePseudoContent(A, t, B, LB.AFTER), "var-init");
        return a && t.appendChild(a), this.counters.pop(s), r && (this.options.copyStyles || uB(A)) && !HB(A) && GB(r, t), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]), (dB(A) || fB(A)) && (dB(t) || fB(t)) && (t.value = cc11001100_hook("t.value", A.value, "assign")), t;
      }
      return A.cloneNode(!1);
    }, "assign"), xB.prototype.resolvePseudoContent = cc11001100_hook("xB.prototype.resolvePseudoContent", function (U, A, e, t) {
      var l = cc11001100_hook("l", this, "var-init");
      if (e) {
        var r = cc11001100_hook("r", e.content, "var-init"),
          C = cc11001100_hook("C", A.ownerDocument, "var-init");
        if (C && r && "none" !== r && "-moz-alt-content" !== r && "none" !== e.display) {
          this.counters.parse(new wn(e));
          var g = cc11001100_hook("g", new Qn(e), "var-init"),
            E = cc11001100_hook("E", C.createElement("html2canvaspseudoelement"), "var-init");
          GB(e, E), g.content.forEach(function (A) {
            if (A.type === sA.STRING_TOKEN) E.appendChild(C.createTextNode(A.value));else if (A.type === sA.URL_TOKEN) {
              var e = cc11001100_hook("e", C.createElement("img"), "var-init");
              e.src = cc11001100_hook("e.src", A.value, "assign"), e.style.opacity = cc11001100_hook("e.style.opacity", "1", "assign"), E.appendChild(e);
            } else if (A.type === sA.FUNCTION) {
              if ("attr" === A.name) {
                var t = cc11001100_hook("t", A.values.filter(zA), "var-init");
                t.length && E.appendChild(C.createTextNode(U.getAttribute(t[0].value) || ""));
              } else if ("counter" === A.name) {
                var r = cc11001100_hook("r", A.values.filter(kA), "var-init"),
                  n = cc11001100_hook("n", r[0], "var-init"),
                  B = cc11001100_hook("B", r[1], "var-init");
                if (n && zA(n)) {
                  var s = cc11001100_hook("s", l.counters.getCounterValue(n.value), "var-init"),
                    o = cc11001100_hook("o", B && zA(B) ? ir.parse(B.value) : tr.DECIMAL, "var-init");
                  E.appendChild(C.createTextNode(yB(s, o, !1)));
                }
              } else if ("counters" === A.name) {
                var i = cc11001100_hook("i", A.values.filter(kA), "var-init"),
                  a = cc11001100_hook("a", (n = cc11001100_hook("n", i[0], "assign"), i[1]), "var-init");
                if (B = cc11001100_hook("B", i[2], "assign"), n && zA(n)) {
                  var c = cc11001100_hook("c", l.counters.getCounterValues(n.value), "var-init"),
                    Q = cc11001100_hook("Q", B && zA(B) ? ir.parse(B.value) : tr.DECIMAL, "var-init"),
                    w = cc11001100_hook("w", a && a.type === sA.STRING_TOKEN ? a.value : "", "var-init"),
                    u = cc11001100_hook("u", c.map(function (A) {
                      return yB(A, Q, !1);
                    }).join(w), "var-init");
                  E.appendChild(C.createTextNode(u));
                }
              }
            } else if (A.type === sA.IDENT_TOKEN) switch (A.value) {
              case "open-quote":
                E.appendChild(C.createTextNode(An(g.quotes, l.quoteDepth++, !0)));
                break;
              case "close-quote":
                E.appendChild(C.createTextNode(An(g.quotes, --l.quoteDepth, !1)));
                break;
              default:
                E.appendChild(C.createTextNode(A.value));
            }
          }), E.className = cc11001100_hook("E.className", qB + " " + ZB, "assign");
          var n = cc11001100_hook("n", t === LB.BEFORE ? " " + qB : " " + ZB, "var-init");
          return uB(A) ? A.className.baseValue += cc11001100_hook("A.className.baseValue", n, "assign") : A.className += cc11001100_hook("A.className", n, "assign"), E;
        }
      }
    }, "assign"), xB.destroy = cc11001100_hook("xB.destroy", function (A) {
      return !!A.parentNode && (A.parentNode.removeChild(A), !0);
    }, "assign"), xB), "var-init");
  function xB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (this.options = cc11001100_hook("this.options", e, "assign"), this.scrolledElements = cc11001100_hook("this.scrolledElements", [], "assign"), this.referenceElement = cc11001100_hook("this.referenceElement", A, "assign"), this.counters = cc11001100_hook("this.counters", new pB(), "assign"), this.quoteDepth = cc11001100_hook("this.quoteDepth", 0, "assign"), !A.ownerDocument) throw new Error("Cloned element does not have an owner document");
    this.documentElement = cc11001100_hook("this.documentElement", this.cloneNode(A.ownerDocument.documentElement), "assign");
  }
  (vB = cc11001100_hook("vB", LB || (LB = cc11001100_hook("LB", {}, "assign")), "assign"))[vB.BEFORE = cc11001100_hook("vB.BEFORE", 0, "assign")] = cc11001100_hook("(vB = LB || (LB = {}))[vB.BEFORE = 0]", "BEFORE", "assign"), vB[vB.AFTER = cc11001100_hook("vB.AFTER", 1, "assign")] = cc11001100_hook("vB[vB.AFTER = 1]", "AFTER", "assign");
  var VB,
    zB,
    XB = function (A, e) {
      var t = cc11001100_hook("t", A.createElement("iframe"), "var-init");
      return t.className = cc11001100_hook("t.className", "html2canvas-container", "assign"), t.style.visibility = cc11001100_hook("t.style.visibility", "hidden", "assign"), t.style.position = cc11001100_hook("t.style.position", "fixed", "assign"), t.style.left = cc11001100_hook("t.style.left", "-10000px", "assign"), t.style.top = cc11001100_hook("t.style.top", "0px", "assign"), t.style.border = cc11001100_hook("t.style.border", "0", "assign"), t.width = cc11001100_hook("t.width", e.width.toString(), "assign"), t.height = cc11001100_hook("t.height", e.height.toString(), "assign"), t.scrolling = cc11001100_hook("t.scrolling", "no", "assign"), t.setAttribute(_B, "true"), A.body.appendChild(t), t;
    },
    JB = function (n) {
      return new Promise(function (e, A) {
        var t = cc11001100_hook("t", n.contentWindow, "var-init");
        if (!t) return A("No window assigned for iframe");
        var r = cc11001100_hook("r", t.document, "var-init");
        t.onload = cc11001100_hook("t.onload", n.onload = cc11001100_hook("n.onload", r.onreadystatechange = cc11001100_hook("r.onreadystatechange", function () {
          t.onload = cc11001100_hook("t.onload", n.onload = cc11001100_hook("n.onload", r.onreadystatechange = cc11001100_hook("r.onreadystatechange", null, "assign"), "assign"), "assign");
          var A = cc11001100_hook("A", setInterval(function () {
            0 < r.body.childNodes.length && "complete" === r.readyState && (clearInterval(A), e(n));
          }, 50), "var-init");
        }, "assign"), "assign"), "assign");
      });
    },
    GB = function (A, e) {
      for (var t = cc11001100_hook("t", A.length - 1, "var-init"); 0 <= t; t--) {
        var r = cc11001100_hook("r", A.item(t), "var-init");
        "content" !== r && e.style.setProperty(r, A.getPropertyValue(r));
      }
      return e;
    },
    kB = function (A) {
      var e = cc11001100_hook("e", "", "var-init");
      return A && (e += cc11001100_hook("e", "<!DOCTYPE ", "assign"), A.name && (e += cc11001100_hook("e", A.name, "assign")), A.internalSubset && (e += cc11001100_hook("e", A.internalSubset, "assign")), A.publicId && (e += cc11001100_hook("e", '"' + A.publicId + '"', "assign")), A.systemId && (e += cc11001100_hook("e", '"' + A.systemId + '"', "assign")), e += cc11001100_hook("e", ">", "assign")), e;
    },
    WB = function (A, e, t) {
      A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
    },
    YB = function (A) {
      var e = cc11001100_hook("e", A[0], "var-init"),
        t = cc11001100_hook("t", A[1], "var-init"),
        r = cc11001100_hook("r", A[2], "var-init");
      e.scrollLeft = cc11001100_hook("e.scrollLeft", t, "assign"), e.scrollTop = cc11001100_hook("e.scrollTop", r, "assign");
    },
    qB = cc11001100_hook("qB", "___html2canvas___pseudoelement_before", "var-init"),
    ZB = cc11001100_hook("ZB", "___html2canvas___pseudoelement_after", "var-init"),
    jB = cc11001100_hook("jB", '{\n    content: "" !important;\n    display: none !important;\n}', "var-init"),
    $B = function (A) {
      As(A, "." + qB + ":before" + jB + "\n         ." + ZB + ":after" + jB);
    },
    As = function (A, e) {
      var t = cc11001100_hook("t", A.ownerDocument, "var-init");
      if (t) {
        var r = cc11001100_hook("r", t.createElement("style"), "var-init");
        r.textContent = cc11001100_hook("r.textContent", e, "assign"), A.appendChild(r);
      }
    };
  (zB = cc11001100_hook("zB", VB || (VB = cc11001100_hook("VB", {}, "assign")), "assign"))[zB.VECTOR = cc11001100_hook("zB.VECTOR", 0, "assign")] = cc11001100_hook("(zB = VB || (VB = {}))[zB.VECTOR = 0]", "VECTOR", "assign"), zB[zB.BEZIER_CURVE = cc11001100_hook("zB.BEZIER_CURVE", 1, "assign")] = cc11001100_hook("zB[zB.BEZIER_CURVE = 1]", "BEZIER_CURVE", "assign");
  function es(A, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return A.length === t.length && A.some(function (A, e) {
      return A === t[e];
    });
  }
  var ts = cc11001100_hook("ts", (rs.prototype.add = cc11001100_hook("rs.prototype.add", function (A, e) {
    return new rs(this.x + A, this.y + e);
  }, "assign"), rs), "var-init");
  function rs(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.type = cc11001100_hook("this.type", VB.VECTOR, "assign"), this.x = cc11001100_hook("this.x", A, "assign"), this.y = cc11001100_hook("this.y", e, "assign");
  }
  function ns(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return new ts(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }
  var Bs = cc11001100_hook("Bs", (ss.prototype.subdivide = cc11001100_hook("ss.prototype.subdivide", function (A, e) {
    var t = cc11001100_hook("t", ns(this.start, this.startControl, A), "var-init"),
      r = cc11001100_hook("r", ns(this.startControl, this.endControl, A), "var-init"),
      n = cc11001100_hook("n", ns(this.endControl, this.end, A), "var-init"),
      B = cc11001100_hook("B", ns(t, r, A), "var-init"),
      s = cc11001100_hook("s", ns(r, n, A), "var-init"),
      o = cc11001100_hook("o", ns(B, s, A), "var-init");
    return e ? new ss(this.start, t, B, o) : new ss(o, s, n, this.end);
  }, "assign"), ss.prototype.add = cc11001100_hook("ss.prototype.add", function (A, e) {
    return new ss(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, "assign"), ss.prototype.reverse = cc11001100_hook("ss.prototype.reverse", function () {
    return new ss(this.end, this.endControl, this.startControl, this.start);
  }, "assign"), ss), "var-init");
  function ss(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    this.type = cc11001100_hook("this.type", VB.BEZIER_CURVE, "assign"), this.start = cc11001100_hook("this.start", A, "assign"), this.startControl = cc11001100_hook("this.startControl", e, "assign"), this.endControl = cc11001100_hook("this.endControl", t, "assign"), this.end = cc11001100_hook("this.end", r, "assign");
  }
  function os(A) {
    cc11001100_hook("A", A, "function-parameter");
    return A.type === VB.BEZIER_CURVE;
  }
  var is,
    as,
    cs = function (A) {
      var e = cc11001100_hook("e", A.styles, "var-init"),
        t = cc11001100_hook("t", A.bounds, "var-init"),
        r = cc11001100_hook("r", jA(e.borderTopLeftRadius, t.width, t.height), "var-init"),
        n = cc11001100_hook("n", r[0], "var-init"),
        B = cc11001100_hook("B", r[1], "var-init"),
        s = cc11001100_hook("s", jA(e.borderTopRightRadius, t.width, t.height), "var-init"),
        o = cc11001100_hook("o", s[0], "var-init"),
        i = cc11001100_hook("i", s[1], "var-init"),
        a = cc11001100_hook("a", jA(e.borderBottomRightRadius, t.width, t.height), "var-init"),
        c = cc11001100_hook("c", a[0], "var-init"),
        Q = cc11001100_hook("Q", a[1], "var-init"),
        w = cc11001100_hook("w", jA(e.borderBottomLeftRadius, t.width, t.height), "var-init"),
        u = cc11001100_hook("u", w[0], "var-init"),
        U = cc11001100_hook("U", w[1], "var-init"),
        l = cc11001100_hook("l", [], "var-init");
      l.push((n + o) / t.width), l.push((u + c) / t.width), l.push((B + U) / t.height), l.push((i + Q) / t.height);
      var C = cc11001100_hook("C", Math.max.apply(Math, l), "var-init");
      1 < C && (n /= cc11001100_hook("n", C, "assign"), B /= cc11001100_hook("B", C, "assign"), o /= cc11001100_hook("o", C, "assign"), i /= cc11001100_hook("i", C, "assign"), c /= cc11001100_hook("c", C, "assign"), Q /= cc11001100_hook("Q", C, "assign"), u /= cc11001100_hook("u", C, "assign"), U /= cc11001100_hook("U", C, "assign"));
      var g = cc11001100_hook("g", t.width - o, "var-init"),
        E = cc11001100_hook("E", t.height - Q, "var-init"),
        F = cc11001100_hook("F", t.width - c, "var-init"),
        h = cc11001100_hook("h", t.height - U, "var-init"),
        H = cc11001100_hook("H", e.borderTopWidth, "var-init"),
        d = cc11001100_hook("d", e.borderRightWidth, "var-init"),
        f = cc11001100_hook("f", e.borderBottomWidth, "var-init"),
        p = cc11001100_hook("p", e.borderLeftWidth, "var-init"),
        N = cc11001100_hook("N", ae(e.paddingTop, A.bounds.width), "var-init"),
        K = cc11001100_hook("K", ae(e.paddingRight, A.bounds.width), "var-init"),
        I = cc11001100_hook("I", ae(e.paddingBottom, A.bounds.width), "var-init"),
        T = cc11001100_hook("T", ae(e.paddingLeft, A.bounds.width), "var-init");
      this.topLeftBorderBox = cc11001100_hook("this.topLeftBorderBox", 0 < n || 0 < B ? us(t.left, t.top, n, B, is.TOP_LEFT) : new ts(t.left, t.top), "assign"), this.topRightBorderBox = cc11001100_hook("this.topRightBorderBox", 0 < o || 0 < i ? us(t.left + g, t.top, o, i, is.TOP_RIGHT) : new ts(t.left + t.width, t.top), "assign"), this.bottomRightBorderBox = cc11001100_hook("this.bottomRightBorderBox", 0 < c || 0 < Q ? us(t.left + F, t.top + E, c, Q, is.BOTTOM_RIGHT) : new ts(t.left + t.width, t.top + t.height), "assign"), this.bottomLeftBorderBox = cc11001100_hook("this.bottomLeftBorderBox", 0 < u || 0 < U ? us(t.left, t.top + h, u, U, is.BOTTOM_LEFT) : new ts(t.left, t.top + t.height), "assign"), this.topLeftPaddingBox = cc11001100_hook("this.topLeftPaddingBox", 0 < n || 0 < B ? us(t.left + p, t.top + H, Math.max(0, n - p), Math.max(0, B - H), is.TOP_LEFT) : new ts(t.left + p, t.top + H), "assign"), this.topRightPaddingBox = cc11001100_hook("this.topRightPaddingBox", 0 < o || 0 < i ? us(t.left + Math.min(g, t.width + p), t.top + H, g > t.width + p ? 0 : o - p, i - H, is.TOP_RIGHT) : new ts(t.left + t.width - d, t.top + H), "assign"), this.bottomRightPaddingBox = cc11001100_hook("this.bottomRightPaddingBox", 0 < c || 0 < Q ? us(t.left + Math.min(F, t.width - p), t.top + Math.min(E, t.height + H), Math.max(0, c - d), Q - f, is.BOTTOM_RIGHT) : new ts(t.left + t.width - d, t.top + t.height - f), "assign"), this.bottomLeftPaddingBox = cc11001100_hook("this.bottomLeftPaddingBox", 0 < u || 0 < U ? us(t.left + p, t.top + h, Math.max(0, u - p), U - f, is.BOTTOM_LEFT) : new ts(t.left + p, t.top + t.height - f), "assign"), this.topLeftContentBox = cc11001100_hook("this.topLeftContentBox", 0 < n || 0 < B ? us(t.left + p + T, t.top + H + N, Math.max(0, n - (p + T)), Math.max(0, B - (H + N)), is.TOP_LEFT) : new ts(t.left + p + T, t.top + H + N), "assign"), this.topRightContentBox = cc11001100_hook("this.topRightContentBox", 0 < o || 0 < i ? us(t.left + Math.min(g, t.width + p + T), t.top + H + N, g > t.width + p + T ? 0 : o - p + T, i - (H + N), is.TOP_RIGHT) : new ts(t.left + t.width - (d + K), t.top + H + N), "assign"), this.bottomRightContentBox = cc11001100_hook("this.bottomRightContentBox", 0 < c || 0 < Q ? us(t.left + Math.min(F, t.width - (p + T)), t.top + Math.min(E, t.height + H + N), Math.max(0, c - (d + K)), Q - (f + I), is.BOTTOM_RIGHT) : new ts(t.left + t.width - (d + K), t.top + t.height - (f + I)), "assign"), this.bottomLeftContentBox = cc11001100_hook("this.bottomLeftContentBox", 0 < u || 0 < U ? us(t.left + p + T, t.top + h, Math.max(0, u - (p + T)), U - (f + I), is.BOTTOM_LEFT) : new ts(t.left + p + T, t.top + t.height - (f + I)), "assign");
    };
  (as = cc11001100_hook("as", is || (is = cc11001100_hook("is", {}, "assign")), "assign"))[as.TOP_LEFT = cc11001100_hook("as.TOP_LEFT", 0, "assign")] = cc11001100_hook("(as = is || (is = {}))[as.TOP_LEFT = 0]", "TOP_LEFT", "assign"), as[as.TOP_RIGHT = cc11001100_hook("as.TOP_RIGHT", 1, "assign")] = cc11001100_hook("as[as.TOP_RIGHT = 1]", "TOP_RIGHT", "assign"), as[as.BOTTOM_RIGHT = cc11001100_hook("as.BOTTOM_RIGHT", 2, "assign")] = cc11001100_hook("as[as.BOTTOM_RIGHT = 2]", "BOTTOM_RIGHT", "assign"), as[as.BOTTOM_LEFT = cc11001100_hook("as.BOTTOM_LEFT", 3, "assign")] = cc11001100_hook("as[as.BOTTOM_LEFT = 3]", "BOTTOM_LEFT", "assign");
  function Qs(A) {
    cc11001100_hook("A", A, "function-parameter");
    return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
  }
  function ws(A) {
    cc11001100_hook("A", A, "function-parameter");
    return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox];
  }
  var us = function (A, e, t, r, n) {
      var B = cc11001100_hook("B", (Math.sqrt(2) - 1) / 3 * 4, "var-init"),
        s = cc11001100_hook("s", t * B, "var-init"),
        o = cc11001100_hook("o", r * B, "var-init"),
        i = cc11001100_hook("i", A + t, "var-init"),
        a = cc11001100_hook("a", e + r, "var-init");
      switch (n) {
        case is.TOP_LEFT:
          return new Bs(new ts(A, a), new ts(A, a - o), new ts(i - s, e), new ts(i, e));
        case is.TOP_RIGHT:
          return new Bs(new ts(A, e), new ts(A + s, e), new ts(i, a - o), new ts(i, a));
        case is.BOTTOM_RIGHT:
          return new Bs(new ts(i, e), new ts(i, e + o), new ts(A + s, a), new ts(A, a));
        case is.BOTTOM_LEFT:
        default:
          return new Bs(new ts(i, a), new ts(i - s, a), new ts(A, e + o), new ts(A, e));
      }
    },
    Us = function (A, e, t) {
      this.type = cc11001100_hook("this.type", 0, "assign"), this.offsetX = cc11001100_hook("this.offsetX", A, "assign"), this.offsetY = cc11001100_hook("this.offsetY", e, "assign"), this.matrix = cc11001100_hook("this.matrix", t, "assign"), this.target = cc11001100_hook("this.target", 6, "assign");
    },
    ls = function (A, e) {
      this.type = cc11001100_hook("this.type", 1, "assign"), this.target = cc11001100_hook("this.target", e, "assign"), this.path = cc11001100_hook("this.path", A, "assign");
    },
    Cs = function (A) {
      this.element = cc11001100_hook("this.element", A, "assign"), this.inlineLevel = cc11001100_hook("this.inlineLevel", [], "assign"), this.nonInlineLevel = cc11001100_hook("this.nonInlineLevel", [], "assign"), this.negativeZIndex = cc11001100_hook("this.negativeZIndex", [], "assign"), this.zeroOrAutoZIndexOrTransformedOrOpacity = cc11001100_hook("this.zeroOrAutoZIndexOrTransformedOrOpacity", [], "assign"), this.positiveZIndex = cc11001100_hook("this.positiveZIndex", [], "assign"), this.nonPositionedFloats = cc11001100_hook("this.nonPositionedFloats", [], "assign"), this.nonPositionedInlineLevel = cc11001100_hook("this.nonPositionedInlineLevel", [], "assign");
    },
    gs = cc11001100_hook("gs", (Es.prototype.getParentEffects = cc11001100_hook("Es.prototype.getParentEffects", function () {
      var A = cc11001100_hook("A", this.effects.slice(0), "var-init");
      if (this.container.styles.overflowX !== sr.VISIBLE) {
        var e = cc11001100_hook("e", Qs(this.curves), "var-init"),
          t = cc11001100_hook("t", ws(this.curves), "var-init");
        es(e, t) || A.push(new ls(t, 6));
      }
      return A;
    }, "assign"), Es), "var-init");
  function Es(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (this.container = cc11001100_hook("this.container", A, "assign"), this.effects = cc11001100_hook("this.effects", e.slice(0), "assign"), this.curves = cc11001100_hook("this.curves", new cs(A), "assign"), null !== A.styles.transform) {
      var t = cc11001100_hook("t", A.bounds.left + A.styles.transformOrigin[0].number, "var-init"),
        r = cc11001100_hook("r", A.bounds.top + A.styles.transformOrigin[1].number, "var-init"),
        n = cc11001100_hook("n", A.styles.transform, "var-init");
      this.effects.push(new Us(t, r, n));
    }
    if (A.styles.overflowX !== sr.VISIBLE) {
      var B = cc11001100_hook("B", Qs(this.curves), "var-init"),
        s = cc11001100_hook("s", ws(this.curves), "var-init");
      es(B, s) ? this.effects.push(new ls(B, 6)) : (this.effects.push(new ls(B, 2)), this.effects.push(new ls(s, 4)));
    }
  }
  function Fs(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.bounds, "var-init"),
      t = cc11001100_hook("t", A.styles, "var-init");
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }
  function hs(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.styles, "var-init"),
      t = cc11001100_hook("t", A.bounds, "var-init"),
      r = cc11001100_hook("r", ae(e.paddingLeft, t.width), "var-init"),
      n = cc11001100_hook("n", ae(e.paddingRight, t.width), "var-init"),
      B = cc11001100_hook("B", ae(e.paddingTop, t.width), "var-init"),
      s = cc11001100_hook("s", ae(e.paddingBottom, t.width), "var-init");
    return t.add(r + e.borderLeftWidth, B + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + B + s));
  }
  function Hs(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", function (A, e) {
        return 0 === A ? e.bounds : 2 === A ? hs(e) : Fs(e);
      }(Ts(A.styles.backgroundOrigin, e), A), "var-init"),
      n = cc11001100_hook("n", function (A, e) {
        return A === Ee.BORDER_BOX ? e.bounds : A === Ee.CONTENT_BOX ? hs(e) : Fs(e);
      }(Ts(A.styles.backgroundClip, e), A), "var-init"),
      B = cc11001100_hook("B", Is(Ts(A.styles.backgroundSize, e), t, r), "var-init"),
      s = cc11001100_hook("s", B[0], "var-init"),
      o = cc11001100_hook("o", B[1], "var-init"),
      i = cc11001100_hook("i", jA(Ts(A.styles.backgroundPosition, e), r.width - s, r.height - o), "var-init");
    return [ms(Ts(A.styles.backgroundRepeat, e), i, B, r, n), Math.round(r.left + i[0]), Math.round(r.top + i[1]), s, o];
  }
  function ds(A) {
    cc11001100_hook("A", A, "function-parameter");
    return zA(A) && A.value === Ut.AUTO;
  }
  function fs(A) {
    cc11001100_hook("A", A, "function-parameter");
    return "number" == typeof A;
  }
  var ps = function (c, Q, w, u) {
      c.container.elements.forEach(function (A) {
        var e = cc11001100_hook("e", $r(A.flags, 4), "var-init"),
          t = cc11001100_hook("t", $r(A.flags, 2), "var-init"),
          r = cc11001100_hook("r", new gs(A, c.getParentEffects()), "var-init");
        $r(A.styles.display, 2048) && u.push(r);
        var n = cc11001100_hook("n", $r(A.flags, 8) ? [] : u, "var-init");
        if (e || t) {
          var B = cc11001100_hook("B", e || A.styles.isPositioned() ? w : Q, "var-init"),
            s = cc11001100_hook("s", new Cs(r), "var-init");
          if (A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed()) {
            var o = cc11001100_hook("o", A.styles.zIndex.order, "var-init");
            if (o < 0) {
              var i = cc11001100_hook("i", 0, "var-init");
              B.negativeZIndex.some(function (A, e) {
                return o > A.element.container.styles.zIndex.order ? (i = cc11001100_hook("i", e, "assign"), !1) : 0 < i;
              }), B.negativeZIndex.splice(i, 0, s);
            } else if (0 < o) {
              var a = cc11001100_hook("a", 0, "var-init");
              B.positiveZIndex.some(function (A, e) {
                return o >= A.element.container.styles.zIndex.order ? (a = cc11001100_hook("a", e + 1, "assign"), !1) : 0 < a;
              }), B.positiveZIndex.splice(a, 0, s);
            } else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(s);
          } else A.styles.isFloating() ? B.nonPositionedFloats.push(s) : B.nonPositionedInlineLevel.push(s);
          ps(r, s, e ? s : w, n);
        } else A.styles.isInlineLevel() ? Q.inlineLevel.push(r) : Q.nonInlineLevel.push(r), ps(r, Q, w, n);
        $r(A.flags, 8) && Ns(A, n);
      });
    },
    Ns = function (A, e) {
      for (var t = cc11001100_hook("t", A instanceof Sn ? A.start : 1, "var-init"), r = cc11001100_hook("r", A instanceof Sn && A.reversed, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
        var B = cc11001100_hook("B", e[n], "var-init");
        B.container instanceof On && "number" == typeof B.container.value && 0 !== B.container.value && (t = cc11001100_hook("t", B.container.value, "assign")), B.listValue = cc11001100_hook("B.listValue", yB(t, B.container.styles.listStyleType, !0), "assign"), t += cc11001100_hook("t", r ? -1 : 1, "assign");
      }
    },
    Ks = function (A, e, t, r) {
      var n = cc11001100_hook("n", [], "var-init");
      return os(A) ? n.push(A.subdivide(.5, !1)) : n.push(A), os(t) ? n.push(t.subdivide(.5, !0)) : n.push(t), os(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), os(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n;
    },
    Is = function (A, e, t) {
      var r = cc11001100_hook("r", e[0], "var-init"),
        n = cc11001100_hook("n", e[1], "var-init"),
        B = cc11001100_hook("B", e[2], "var-init"),
        s = cc11001100_hook("s", A[0], "var-init"),
        o = cc11001100_hook("o", A[1], "var-init");
      if (qA(s) && o && qA(o)) return [ae(s, t.width), ae(o, t.height)];
      var i = cc11001100_hook("i", fs(B), "var-init");
      if (zA(s) && (s.value === Ut.CONTAIN || s.value === Ut.COVER)) return fs(B) ? t.width / t.height < B != (s.value === Ut.COVER) ? [t.width, t.width / B] : [t.height * B, t.height] : [t.width, t.height];
      var a = cc11001100_hook("a", fs(r), "var-init"),
        c = cc11001100_hook("c", fs(n), "var-init"),
        Q = cc11001100_hook("Q", a || c, "var-init");
      if (ds(s) && (!o || ds(o))) return a && c ? [r, n] : i || Q ? Q && i ? [a ? r : n * B, c ? n : r / B] : [a ? r : t.width, c ? n : t.height] : [t.width, t.height];
      if (i) {
        var w = cc11001100_hook("w", 0, "var-init"),
          u = cc11001100_hook("u", 0, "var-init");
        return qA(s) ? w = cc11001100_hook("w", ae(s, t.width), "assign") : qA(o) && (u = cc11001100_hook("u", ae(o, t.height), "assign")), ds(s) ? w = cc11001100_hook("w", u * B, "assign") : o && !ds(o) || (u = cc11001100_hook("u", w / B, "assign")), [w, u];
      }
      var U = cc11001100_hook("U", null, "var-init"),
        l = cc11001100_hook("l", null, "var-init");
      if (qA(s) ? U = cc11001100_hook("U", ae(s, t.width), "assign") : o && qA(o) && (l = cc11001100_hook("l", ae(o, t.height), "assign")), null === U || o && !ds(o) || (l = cc11001100_hook("l", a && c ? U / r * n : t.height, "assign")), null !== l && ds(s) && (U = cc11001100_hook("U", a && c ? l / n * r : t.width, "assign")), null !== U && null !== l) return [U, l];
      throw new Error("Unable to calculate background-size for element");
    },
    Ts = function (A, e) {
      var t = cc11001100_hook("t", A[e], "var-init");
      return void 0 === t ? A[0] : t;
    },
    ms = function (A, e, t, r, n) {
      var B = cc11001100_hook("B", e[0], "var-init"),
        s = cc11001100_hook("s", e[1], "var-init"),
        o = cc11001100_hook("o", t[0], "var-init"),
        i = cc11001100_hook("i", t[1], "var-init");
      switch (A) {
        case it.REPEAT_X:
          return [new ts(Math.round(r.left), Math.round(r.top + s)), new ts(Math.round(r.left + r.width), Math.round(r.top + s)), new ts(Math.round(r.left + r.width), Math.round(i + r.top + s)), new ts(Math.round(r.left), Math.round(i + r.top + s))];
        case it.REPEAT_Y:
          return [new ts(Math.round(r.left + B), Math.round(r.top)), new ts(Math.round(r.left + B + o), Math.round(r.top)), new ts(Math.round(r.left + B + o), Math.round(r.height + r.top)), new ts(Math.round(r.left + B), Math.round(r.height + r.top))];
        case it.NO_REPEAT:
          return [new ts(Math.round(r.left + B), Math.round(r.top + s)), new ts(Math.round(r.left + B + o), Math.round(r.top + s)), new ts(Math.round(r.left + B + o), Math.round(r.top + s + i)), new ts(Math.round(r.left + B), Math.round(r.top + s + i))];
        default:
          return [new ts(Math.round(n.left), Math.round(n.top)), new ts(Math.round(n.left + n.width), Math.round(n.top)), new ts(Math.round(n.left + n.width), Math.round(n.height + n.top)), new ts(Math.round(n.left), Math.round(n.height + n.top))];
      }
    },
    Rs = cc11001100_hook("Rs", "Hidden Text", "var-init"),
    Ls = cc11001100_hook("Ls", (vs.prototype.parseMetrics = cc11001100_hook("vs.prototype.parseMetrics", function (A, e) {
      var t = cc11001100_hook("t", this._document.createElement("div"), "var-init"),
        r = cc11001100_hook("r", this._document.createElement("img"), "var-init"),
        n = cc11001100_hook("n", this._document.createElement("span"), "var-init"),
        B = cc11001100_hook("B", this._document.body, "var-init");
      t.style.visibility = cc11001100_hook("t.style.visibility", "hidden", "assign"), t.style.fontFamily = cc11001100_hook("t.style.fontFamily", A, "assign"), t.style.fontSize = cc11001100_hook("t.style.fontSize", e, "assign"), t.style.margin = cc11001100_hook("t.style.margin", "0", "assign"), t.style.padding = cc11001100_hook("t.style.padding", "0", "assign"), B.appendChild(t), r.src = cc11001100_hook("r.src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "assign"), r.width = cc11001100_hook("r.width", 1, "assign"), r.height = cc11001100_hook("r.height", 1, "assign"), r.style.margin = cc11001100_hook("r.style.margin", "0", "assign"), r.style.padding = cc11001100_hook("r.style.padding", "0", "assign"), r.style.verticalAlign = cc11001100_hook("r.style.verticalAlign", "baseline", "assign"), n.style.fontFamily = cc11001100_hook("n.style.fontFamily", A, "assign"), n.style.fontSize = cc11001100_hook("n.style.fontSize", e, "assign"), n.style.margin = cc11001100_hook("n.style.margin", "0", "assign"), n.style.padding = cc11001100_hook("n.style.padding", "0", "assign"), n.appendChild(this._document.createTextNode(Rs)), t.appendChild(n), t.appendChild(r);
      var s = cc11001100_hook("s", r.offsetTop - n.offsetTop + 2, "var-init");
      t.removeChild(n), t.appendChild(this._document.createTextNode(Rs)), t.style.lineHeight = cc11001100_hook("t.style.lineHeight", "normal", "assign"), r.style.verticalAlign = cc11001100_hook("r.style.verticalAlign", "super", "assign");
      var o = cc11001100_hook("o", r.offsetTop - t.offsetTop + 2, "var-init");
      return B.removeChild(t), {
        baseline: cc11001100_hook("baseline", s, "object-key-init"),
        middle: cc11001100_hook("middle", o, "object-key-init")
      };
    }, "assign"), vs.prototype.getMetrics = cc11001100_hook("vs.prototype.getMetrics", function (A, e) {
      var t = cc11001100_hook("t", A + " " + e, "var-init");
      return void 0 === this._data[t] && (this._data[t] = cc11001100_hook("this._data[t]", this.parseMetrics(A, e), "assign")), this._data[t];
    }, "assign"), vs), "var-init");
  function vs(A) {
    cc11001100_hook("A", A, "function-parameter");
    this._data = cc11001100_hook("this._data", {}, "assign"), this._document = cc11001100_hook("this._document", A, "assign");
  }
  var Os = cc11001100_hook("Os", (Ds.prototype.applyEffects = cc11001100_hook("Ds.prototype.applyEffects", function (A, e) {
    for (var t = cc11001100_hook("t", this, "var-init"); this._activeEffects.length;) this.popEffect();
    A.filter(function (A) {
      return $r(A.target, e);
    }).forEach(function (A) {
      return t.applyEffect(A);
    });
  }, "assign"), Ds.prototype.applyEffect = cc11001100_hook("Ds.prototype.applyEffect", function (A) {
    this.ctx.save(), function (A) {
      return 0 === A.type;
    }(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), function (A) {
      return 1 === A.type;
    }(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A);
  }, "assign"), Ds.prototype.popEffect = cc11001100_hook("Ds.prototype.popEffect", function () {
    this._activeEffects.pop(), this.ctx.restore();
  }, "assign"), Ds.prototype.renderStack = cc11001100_hook("Ds.prototype.renderStack", function (t) {
    return a(this, void 0, void 0, function () {
      var e;
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            return (e = cc11001100_hook("e", t.element.container.styles, "assign")).isVisible() ? (this.ctx.globalAlpha = cc11001100_hook("this.ctx.globalAlpha", e.opacity, "assign"), [4, this.renderStackContent(t)]) : [3, 2];
          case 1:
            A.sent(), A.label = cc11001100_hook("A.label", 2, "assign");
          case 2:
            return [2];
        }
      });
    });
  }, "assign"), Ds.prototype.renderNode = cc11001100_hook("Ds.prototype.renderNode", function (e) {
    return a(this, void 0, void 0, function () {
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
          case 1:
            return A.sent(), [4, this.renderNodeContent(e)];
          case 2:
            A.sent(), A.label = cc11001100_hook("A.label", 3, "assign");
          case 3:
            return [2];
        }
      });
    });
  }, "assign"), Ds.prototype.renderTextWithLetterSpacing = cc11001100_hook("Ds.prototype.renderTextWithLetterSpacing", function (t, A) {
    var r = cc11001100_hook("r", this, "var-init");
    0 === A ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height) : c(t.text).map(function (A) {
      return l(A);
    }).reduce(function (A, e) {
      return r.ctx.fillText(e, A, t.bounds.top + t.bounds.height), A + r.ctx.measureText(e).width;
    }, t.bounds.left);
  }, "assign"), Ds.prototype.createFontStyle = cc11001100_hook("Ds.prototype.createFontStyle", function (A) {
    var e = cc11001100_hook("e", A.fontVariant.filter(function (A) {
        return "normal" === A || "small-caps" === A;
      }).join(""), "var-init"),
      t = cc11001100_hook("t", A.fontFamily.join(", "), "var-init"),
      r = cc11001100_hook("r", xA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px", "var-init");
    return [[A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r];
  }, "assign"), Ds.prototype.renderTextNode = cc11001100_hook("Ds.prototype.renderTextNode", function (r, o) {
    return a(this, void 0, void 0, function () {
      var e,
        t,
        n,
        B,
        s = cc11001100_hook("s", this, "var-init");
      return S(this, function (A) {
        return e = cc11001100_hook("e", this.createFontStyle(o), "assign"), t = cc11001100_hook("t", e[0], "assign"), n = cc11001100_hook("n", e[1], "assign"), B = cc11001100_hook("B", e[2], "assign"), this.ctx.font = cc11001100_hook("this.ctx.font", t, "assign"), r.textBounds.forEach(function (r) {
          s.ctx.fillStyle = cc11001100_hook("s.ctx.fillStyle", te(o.color), "assign"), s.renderTextWithLetterSpacing(r, o.letterSpacing);
          var A = cc11001100_hook("A", o.textShadow, "var-init");
          A.length && r.text.trim().length && (A.slice(0).reverse().forEach(function (A) {
            s.ctx.shadowColor = cc11001100_hook("s.ctx.shadowColor", te(A.color), "assign"), s.ctx.shadowOffsetX = cc11001100_hook("s.ctx.shadowOffsetX", A.offsetX.number * s.options.scale, "assign"), s.ctx.shadowOffsetY = cc11001100_hook("s.ctx.shadowOffsetY", A.offsetY.number * s.options.scale, "assign"), s.ctx.shadowBlur = cc11001100_hook("s.ctx.shadowBlur", A.blur.number, "assign"), s.ctx.fillText(r.text, r.bounds.left, r.bounds.top + r.bounds.height);
          }), s.ctx.shadowColor = cc11001100_hook("s.ctx.shadowColor", "", "assign"), s.ctx.shadowOffsetX = cc11001100_hook("s.ctx.shadowOffsetX", 0, "assign"), s.ctx.shadowOffsetY = cc11001100_hook("s.ctx.shadowOffsetY", 0, "assign"), s.ctx.shadowBlur = cc11001100_hook("s.ctx.shadowBlur", 0, "assign")), o.textDecorationLine.length && (s.ctx.fillStyle = cc11001100_hook("s.ctx.fillStyle", te(o.textDecorationColor || o.color), "assign"), o.textDecorationLine.forEach(function (A) {
            switch (A) {
              case 1:
                var e = cc11001100_hook("e", s.fontMetrics.getMetrics(n, B).baseline, "var-init");
                s.ctx.fillRect(r.bounds.left, Math.round(r.bounds.top + e), r.bounds.width, 1);
                break;
              case 2:
                s.ctx.fillRect(r.bounds.left, Math.round(r.bounds.top), r.bounds.width, 1);
                break;
              case 3:
                var t = cc11001100_hook("t", s.fontMetrics.getMetrics(n, B).middle, "var-init");
                s.ctx.fillRect(r.bounds.left, Math.ceil(r.bounds.top + t), r.bounds.width, 1);
            }
          }));
        }), [2];
      });
    });
  }, "assign"), Ds.prototype.renderReplacedElement = cc11001100_hook("Ds.prototype.renderReplacedElement", function (A, e, t) {
    if (t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight) {
      var r = cc11001100_hook("r", hs(A), "var-init"),
        n = cc11001100_hook("n", ws(e), "var-init");
      this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore();
    }
  }, "assign"), Ds.prototype.renderNodeContent = cc11001100_hook("Ds.prototype.renderNodeContent", function (l) {
    return a(this, void 0, void 0, function () {
      var e, t, r, n, B, s, o, i, a, c, Q, w, u, U;
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            this.applyEffects(l.effects, 4), e = cc11001100_hook("e", l.container, "assign"), t = cc11001100_hook("t", l.curves, "assign"), r = cc11001100_hook("r", e.styles, "assign"), n = cc11001100_hook("n", 0, "assign"), B = cc11001100_hook("B", e.textNodes, "assign"), A.label = cc11001100_hook("A.label", 1, "assign");
          case 1:
            return n < B.length ? (s = cc11001100_hook("s", B[n], "assign"), [4, this.renderTextNode(s, r)]) : [3, 4];
          case 2:
            A.sent(), A.label = cc11001100_hook("A.label", 3, "assign");
          case 3:
            return n++, [3, 1];
          case 4:
            if (!(e instanceof pn)) return [3, 8];
            A.label = cc11001100_hook("A.label", 5, "assign");
          case 5:
            return A.trys.push([5, 7,, 8]), [4, this.options.cache.match(e.src)];
          case 6:
            return w = cc11001100_hook("w", A.sent(), "assign"), this.renderReplacedElement(e, t, w), [3, 8];
          case 7:
            return A.sent(), De.getInstance(this.options.id).error("Error loading image " + e.src), [3, 8];
          case 8:
            if (e instanceof In && this.renderReplacedElement(e, t, e.canvas), !(e instanceof Rn)) return [3, 12];
            A.label = cc11001100_hook("A.label", 9, "assign");
          case 9:
            return A.trys.push([9, 11,, 12]), [4, this.options.cache.match(e.svg)];
          case 10:
            return w = cc11001100_hook("w", A.sent(), "assign"), this.renderReplacedElement(e, t, w), [3, 12];
          case 11:
            return A.sent(), De.getInstance(this.options.id).error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
          case 12:
            return e instanceof eB && e.tree ? [4, new Ds({
              id: cc11001100_hook("id", this.options.id, "object-key-init"),
              scale: cc11001100_hook("scale", this.options.scale, "object-key-init"),
              backgroundColor: cc11001100_hook("backgroundColor", e.backgroundColor, "object-key-init"),
              x: cc11001100_hook("x", 0, "object-key-init"),
              y: cc11001100_hook("y", 0, "object-key-init"),
              scrollX: cc11001100_hook("scrollX", 0, "object-key-init"),
              scrollY: cc11001100_hook("scrollY", 0, "object-key-init"),
              width: cc11001100_hook("width", e.width, "object-key-init"),
              height: cc11001100_hook("height", e.height, "object-key-init"),
              cache: cc11001100_hook("cache", this.options.cache, "object-key-init"),
              windowWidth: cc11001100_hook("windowWidth", e.width, "object-key-init"),
              windowHeight: cc11001100_hook("windowHeight", e.height, "object-key-init")
            }).render(e.tree)] : [3, 14];
          case 13:
            o = cc11001100_hook("o", A.sent(), "assign"), e.width && e.height && this.ctx.drawImage(o, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), A.label = cc11001100_hook("A.label", 14, "assign");
          case 14:
            if (e instanceof Jn && (i = cc11001100_hook("i", Math.min(e.bounds.width, e.bounds.height), "assign"), e.type === xn ? e.checked && (this.ctx.save(), this.path([new ts(e.bounds.left + .39363 * i, e.bounds.top + .79 * i), new ts(e.bounds.left + .16 * i, e.bounds.top + .5549 * i), new ts(e.bounds.left + .27347 * i, e.bounds.top + .44071 * i), new ts(e.bounds.left + .39694 * i, e.bounds.top + .5649 * i), new ts(e.bounds.left + .72983 * i, e.bounds.top + .23 * i), new ts(e.bounds.left + .84 * i, e.bounds.top + .34085 * i), new ts(e.bounds.left + .39363 * i, e.bounds.top + .79 * i)]), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(Xn), "assign"), this.ctx.fill(), this.ctx.restore()) : e.type === Vn && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + i / 2, e.bounds.top + i / 2, i / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(Xn), "assign"), this.ctx.fill(), this.ctx.restore())), bs(e) && e.value.length) {
              switch (this.ctx.font = cc11001100_hook("this.ctx.font", this.createFontStyle(r)[0], "assign"), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(r.color), "assign"), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "middle", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", Ms(e.styles.textAlign), "assign"), U = cc11001100_hook("U", hs(e), "assign"), a = cc11001100_hook("a", 0, "assign"), e.styles.textAlign) {
                case Cr.CENTER:
                  a += cc11001100_hook("a", U.width / 2, "assign");
                  break;
                case Cr.RIGHT:
                  a += cc11001100_hook("a", U.width, "assign");
              }
              c = cc11001100_hook("c", U.add(a, 0, 0, -U.height / 2 + 1), "assign"), this.ctx.save(), this.path([new ts(U.left, U.top), new ts(U.left + U.width, U.top), new ts(U.left + U.width, U.top + U.height), new ts(U.left, U.top + U.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ln(e.value, c), r.letterSpacing), this.ctx.restore(), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "bottom", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", "left", "assign");
            }
            if (!$r(e.styles.display, 2048)) return [3, 20];
            if (null === e.styles.listStyleImage) return [3, 19];
            if ((Q = cc11001100_hook("Q", e.styles.listStyleImage, "assign")).type !== xe.URL) return [3, 18];
            w = cc11001100_hook("w", void 0, "assign"), u = cc11001100_hook("u", Q.url, "assign"), A.label = cc11001100_hook("A.label", 15, "assign");
          case 15:
            return A.trys.push([15, 17,, 18]), [4, this.options.cache.match(u)];
          case 16:
            return w = cc11001100_hook("w", A.sent(), "assign"), this.ctx.drawImage(w, e.bounds.left - (w.width + 10), e.bounds.top), [3, 18];
          case 17:
            return A.sent(), De.getInstance(this.options.id).error("Error loading list-style-image " + u), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            l.listValue && e.styles.listStyleType !== tr.NONE && (this.ctx.font = cc11001100_hook("this.ctx.font", this.createFontStyle(r)[0], "assign"), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(r.color), "assign"), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "middle", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", "right", "assign"), U = cc11001100_hook("U", new I(e.bounds.left, e.bounds.top + ae(e.styles.paddingTop, e.bounds.width), e.bounds.width, function (A, e) {
              return zA(A) && "normal" === A.value ? 1.2 * e : A.type === sA.NUMBER_TOKEN ? e * A.number : qA(A) ? ae(A, e) : e;
            }(r.lineHeight, r.fontSize.number) / 2 + 1), "assign"), this.renderTextWithLetterSpacing(new ln(l.listValue, U), r.letterSpacing), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "bottom", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", "left", "assign")), A.label = cc11001100_hook("A.label", 20, "assign");
          case 20:
            return [2];
        }
      });
    });
  }, "assign"), Ds.prototype.renderStackContent = cc11001100_hook("Ds.prototype.renderStackContent", function (C) {
    return a(this, void 0, void 0, function () {
      var e, t, r, n, B, s, o, i, a, c, Q, w, u, U, l;
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            return [4, this.renderNodeBackgroundAndBorders(C.element)];
          case 1:
            A.sent(), e = cc11001100_hook("e", 0, "assign"), t = cc11001100_hook("t", C.negativeZIndex, "assign"), A.label = cc11001100_hook("A.label", 2, "assign");
          case 2:
            return e < t.length ? (l = cc11001100_hook("l", t[e], "assign"), [4, this.renderStack(l)]) : [3, 5];
          case 3:
            A.sent(), A.label = cc11001100_hook("A.label", 4, "assign");
          case 4:
            return e++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(C.element)];
          case 6:
            A.sent(), r = cc11001100_hook("r", 0, "assign"), n = cc11001100_hook("n", C.nonInlineLevel, "assign"), A.label = cc11001100_hook("A.label", 7, "assign");
          case 7:
            return r < n.length ? (l = cc11001100_hook("l", n[r], "assign"), [4, this.renderNode(l)]) : [3, 10];
          case 8:
            A.sent(), A.label = cc11001100_hook("A.label", 9, "assign");
          case 9:
            return r++, [3, 7];
          case 10:
            B = cc11001100_hook("B", 0, "assign"), s = cc11001100_hook("s", C.nonPositionedFloats, "assign"), A.label = cc11001100_hook("A.label", 11, "assign");
          case 11:
            return B < s.length ? (l = cc11001100_hook("l", s[B], "assign"), [4, this.renderStack(l)]) : [3, 14];
          case 12:
            A.sent(), A.label = cc11001100_hook("A.label", 13, "assign");
          case 13:
            return B++, [3, 11];
          case 14:
            o = cc11001100_hook("o", 0, "assign"), i = cc11001100_hook("i", C.nonPositionedInlineLevel, "assign"), A.label = cc11001100_hook("A.label", 15, "assign");
          case 15:
            return o < i.length ? (l = cc11001100_hook("l", i[o], "assign"), [4, this.renderStack(l)]) : [3, 18];
          case 16:
            A.sent(), A.label = cc11001100_hook("A.label", 17, "assign");
          case 17:
            return o++, [3, 15];
          case 18:
            a = cc11001100_hook("a", 0, "assign"), c = cc11001100_hook("c", C.inlineLevel, "assign"), A.label = cc11001100_hook("A.label", 19, "assign");
          case 19:
            return a < c.length ? (l = cc11001100_hook("l", c[a], "assign"), [4, this.renderNode(l)]) : [3, 22];
          case 20:
            A.sent(), A.label = cc11001100_hook("A.label", 21, "assign");
          case 21:
            return a++, [3, 19];
          case 22:
            Q = cc11001100_hook("Q", 0, "assign"), w = cc11001100_hook("w", C.zeroOrAutoZIndexOrTransformedOrOpacity, "assign"), A.label = cc11001100_hook("A.label", 23, "assign");
          case 23:
            return Q < w.length ? (l = cc11001100_hook("l", w[Q], "assign"), [4, this.renderStack(l)]) : [3, 26];
          case 24:
            A.sent(), A.label = cc11001100_hook("A.label", 25, "assign");
          case 25:
            return Q++, [3, 23];
          case 26:
            u = cc11001100_hook("u", 0, "assign"), U = cc11001100_hook("U", C.positiveZIndex, "assign"), A.label = cc11001100_hook("A.label", 27, "assign");
          case 27:
            return u < U.length ? (l = cc11001100_hook("l", U[u], "assign"), [4, this.renderStack(l)]) : [3, 30];
          case 28:
            A.sent(), A.label = cc11001100_hook("A.label", 29, "assign");
          case 29:
            return u++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, "assign"), Ds.prototype.mask = cc11001100_hook("Ds.prototype.mask", function (A) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath();
  }, "assign"), Ds.prototype.path = cc11001100_hook("Ds.prototype.path", function (A) {
    this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
  }, "assign"), Ds.prototype.formatPath = cc11001100_hook("Ds.prototype.formatPath", function (A) {
    var r = cc11001100_hook("r", this, "var-init");
    A.forEach(function (A, e) {
      var t = cc11001100_hook("t", os(A) ? A.start : A, "var-init");
      0 === e ? r.ctx.moveTo(t.x, t.y) : r.ctx.lineTo(t.x, t.y), os(A) && r.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y);
    });
  }, "assign"), Ds.prototype.renderRepeat = cc11001100_hook("Ds.prototype.renderRepeat", function (A, e, t, r) {
    this.path(A), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", e, "assign"), this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r);
  }, "assign"), Ds.prototype.resizeImage = cc11001100_hook("Ds.prototype.resizeImage", function (A, e, t) {
    if (A.width === e && A.height === t) return A;
    var r = cc11001100_hook("r", this.canvas.ownerDocument.createElement("canvas"), "var-init");
    return r.width = cc11001100_hook("r.width", e, "assign"), r.height = cc11001100_hook("r.height", t, "assign"), r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), r;
  }, "assign"), Ds.prototype.renderBackgroundImage = cc11001100_hook("Ds.prototype.renderBackgroundImage", function (b) {
    return a(this, void 0, void 0, function () {
      var O, e, D, t, r, n;
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            O = cc11001100_hook("O", b.styles.backgroundImage.length - 1, "assign"), e = cc11001100_hook("e", function (e) {
              var t, r, n, B, s, o, i, a, c, Q, w, u, U, l, C, g, E, F, h, H, d, f, p, N, K, I, T, m, R, L, v;
              return S(this, function (A) {
                switch (A.label) {
                  case 0:
                    if (e.type !== xe.URL) return [3, 5];
                    t = cc11001100_hook("t", void 0, "assign"), r = cc11001100_hook("r", e.url, "assign"), A.label = cc11001100_hook("A.label", 1, "assign");
                  case 1:
                    return A.trys.push([1, 3,, 4]), [4, D.options.cache.match(r)];
                  case 2:
                    return t = cc11001100_hook("t", A.sent(), "assign"), [3, 4];
                  case 3:
                    return A.sent(), De.getInstance(D.options.id).error("Error loading background-image " + r), [3, 4];
                  case 4:
                    return t && (n = cc11001100_hook("n", Hs(b, O, [t.width, t.height, t.width / t.height]), "assign"), g = cc11001100_hook("g", n[0], "assign"), f = cc11001100_hook("f", n[1], "assign"), p = cc11001100_hook("p", n[2], "assign"), h = cc11001100_hook("h", n[3], "assign"), H = cc11001100_hook("H", n[4], "assign"), l = cc11001100_hook("l", D.ctx.createPattern(D.resizeImage(t, h, H), "repeat"), "assign"), D.renderRepeat(g, l, f, p)), [3, 6];
                  case 5:
                    !function (A) {
                      return A.type === xe.LINEAR_GRADIENT;
                    }(e) ? function (A) {
                      return A.type === xe.RADIAL_GRADIENT;
                    }(e) && (C = cc11001100_hook("C", Hs(b, O, [null, null, null]), "assign"), g = cc11001100_hook("g", C[0], "assign"), E = cc11001100_hook("E", C[1], "assign"), F = cc11001100_hook("F", C[2], "assign"), h = cc11001100_hook("h", C[3], "assign"), H = cc11001100_hook("H", C[4], "assign"), d = cc11001100_hook("d", 0 === e.position.length ? [oe] : e.position, "assign"), f = cc11001100_hook("f", ae(d[0], h), "assign"), p = cc11001100_hook("p", ae(d[d.length - 1], H), "assign"), N = cc11001100_hook("N", function (A, e, t, r, n) {
                      var B = cc11001100_hook("B", 0, "var-init"),
                        s = cc11001100_hook("s", 0, "var-init");
                      switch (A.size) {
                        case Bt.CLOSEST_SIDE:
                          A.shape === rt.CIRCLE ? B = cc11001100_hook("B", s = cc11001100_hook("s", Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)), "assign"), "assign") : A.shape === rt.ELLIPSE && (B = cc11001100_hook("B", Math.min(Math.abs(e), Math.abs(e - r)), "assign"), s = cc11001100_hook("s", Math.min(Math.abs(t), Math.abs(t - n)), "assign"));
                          break;
                        case Bt.CLOSEST_CORNER:
                          if (A.shape === rt.CIRCLE) B = cc11001100_hook("B", s = cc11001100_hook("s", Math.min(Ne(e, t), Ne(e, t - n), Ne(e - r, t), Ne(e - r, t - n)), "assign"), "assign");else if (A.shape === rt.ELLIPSE) {
                            var o = cc11001100_hook("o", Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), "var-init"),
                              i = cc11001100_hook("i", Ke(r, n, e, t, !0), "var-init"),
                              a = cc11001100_hook("a", i[0], "var-init"),
                              c = cc11001100_hook("c", i[1], "var-init");
                            s = cc11001100_hook("s", o * (B = cc11001100_hook("B", Ne(a - e, (c - t) / o), "assign")), "assign");
                          }
                          break;
                        case Bt.FARTHEST_SIDE:
                          A.shape === rt.CIRCLE ? B = cc11001100_hook("B", s = cc11001100_hook("s", Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)), "assign"), "assign") : A.shape === rt.ELLIPSE && (B = cc11001100_hook("B", Math.max(Math.abs(e), Math.abs(e - r)), "assign"), s = cc11001100_hook("s", Math.max(Math.abs(t), Math.abs(t - n)), "assign"));
                          break;
                        case Bt.FARTHEST_CORNER:
                          if (A.shape === rt.CIRCLE) B = cc11001100_hook("B", s = cc11001100_hook("s", Math.max(Ne(e, t), Ne(e, t - n), Ne(e - r, t), Ne(e - r, t - n)), "assign"), "assign");else if (A.shape === rt.ELLIPSE) {
                            o = cc11001100_hook("o", Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), "assign");
                            var Q = cc11001100_hook("Q", Ke(r, n, e, t, !1), "var-init");
                            a = cc11001100_hook("a", Q[0], "assign"), c = cc11001100_hook("c", Q[1], "assign"), s = cc11001100_hook("s", o * (B = cc11001100_hook("B", Ne(a - e, (c - t) / o), "assign")), "assign");
                          }
                      }
                      return Array.isArray(A.size) && (B = cc11001100_hook("B", ae(A.size[0], r), "assign"), s = cc11001100_hook("s", 2 === A.size.length ? ae(A.size[1], n) : B, "assign")), [B, s];
                    }(e, f, p, h, H), "assign"), K = cc11001100_hook("K", N[0], "assign"), I = cc11001100_hook("I", N[1], "assign"), 0 < K && 0 < K && (T = cc11001100_hook("T", D.ctx.createRadialGradient(E + f, F + p, 0, E + f, F + p, K), "assign"), fe(e.stops, 2 * K).forEach(function (A) {
                      return T.addColorStop(A.stop, te(A.color));
                    }), D.path(g), D.ctx.fillStyle = cc11001100_hook("D.ctx.fillStyle", T, "assign"), K !== I ? (m = cc11001100_hook("m", b.bounds.left + .5 * b.bounds.width, "assign"), R = cc11001100_hook("R", b.bounds.top + .5 * b.bounds.height, "assign"), v = cc11001100_hook("v", 1 / (L = cc11001100_hook("L", I / K, "assign")), "assign"), D.ctx.save(), D.ctx.translate(m, R), D.ctx.transform(1, 0, 0, L, 0, 0), D.ctx.translate(-m, -R), D.ctx.fillRect(E, v * (F - R) + R, h, H * v), D.ctx.restore()) : D.ctx.fill())) : (B = cc11001100_hook("B", Hs(b, O, [null, null, null]), "assign"), g = cc11001100_hook("g", B[0], "assign"), f = cc11001100_hook("f", B[1], "assign"), p = cc11001100_hook("p", B[2], "assign"), h = cc11001100_hook("h", B[3], "assign"), H = cc11001100_hook("H", B[4], "assign"), s = cc11001100_hook("s", pe(e.angle, h, H), "assign"), o = cc11001100_hook("o", s[0], "assign"), i = cc11001100_hook("i", s[1], "assign"), a = cc11001100_hook("a", s[2], "assign"), c = cc11001100_hook("c", s[3], "assign"), Q = cc11001100_hook("Q", s[4], "assign"), (w = cc11001100_hook("w", document.createElement("canvas"), "assign")).width = cc11001100_hook("(w = document.createElement(\"canvas\")).width", h, "assign"), w.height = cc11001100_hook("w.height", H, "assign"), u = cc11001100_hook("u", w.getContext("2d"), "assign"), U = cc11001100_hook("U", u.createLinearGradient(i, c, a, Q), "assign"), fe(e.stops, o).forEach(function (A) {
                      return U.addColorStop(A.stop, te(A.color));
                    }), u.fillStyle = cc11001100_hook("u.fillStyle", U, "assign"), u.fillRect(0, 0, h, H), 0 < h && 0 < H && (l = cc11001100_hook("l", D.ctx.createPattern(w, "repeat"), "assign"), D.renderRepeat(g, l, f, p))), A.label = cc11001100_hook("A.label", 6, "assign");
                  case 6:
                    return O--, [2];
                }
              });
            }, "assign"), D = cc11001100_hook("D", this, "assign"), t = cc11001100_hook("t", 0, "assign"), r = cc11001100_hook("r", b.styles.backgroundImage.slice(0).reverse(), "assign"), A.label = cc11001100_hook("A.label", 1, "assign");
          case 1:
            return t < r.length ? (n = cc11001100_hook("n", r[t], "assign"), [5, e(n)]) : [3, 4];
          case 2:
            A.sent(), A.label = cc11001100_hook("A.label", 3, "assign");
          case 3:
            return t++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, "assign"), Ds.prototype.renderBorder = cc11001100_hook("Ds.prototype.renderBorder", function (e, t, r) {
    return a(this, void 0, void 0, function () {
      return S(this, function (A) {
        return this.path(function (A, e) {
          switch (e) {
            case 0:
              return Ks(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
            case 1:
              return Ks(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
            case 2:
              return Ks(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
            case 3:
            default:
              return Ks(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
          }
        }(r, t)), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(e), "assign"), this.ctx.fill(), [2];
      });
    });
  }, "assign"), Ds.prototype.renderNodeBackgroundAndBorders = cc11001100_hook("Ds.prototype.renderNodeBackgroundAndBorders", function (c) {
    return a(this, void 0, void 0, function () {
      var e,
        t,
        r,
        n,
        B,
        s,
        o,
        i,
        a = cc11001100_hook("a", this, "var-init");
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            return this.applyEffects(c.effects, 2), e = cc11001100_hook("e", c.container.styles, "assign"), t = cc11001100_hook("t", !ee(e.backgroundColor) || e.backgroundImage.length, "assign"), r = cc11001100_hook("r", [{
              style: cc11001100_hook("style", e.borderTopStyle, "object-key-init"),
              color: cc11001100_hook("color", e.borderTopColor, "object-key-init")
            }, {
              style: cc11001100_hook("style", e.borderRightStyle, "object-key-init"),
              color: cc11001100_hook("color", e.borderRightColor, "object-key-init")
            }, {
              style: cc11001100_hook("style", e.borderBottomStyle, "object-key-init"),
              color: cc11001100_hook("color", e.borderBottomColor, "object-key-init")
            }, {
              style: cc11001100_hook("style", e.borderLeftStyle, "object-key-init"),
              color: cc11001100_hook("color", e.borderLeftColor, "object-key-init")
            }], "assign"), n = cc11001100_hook("n", Ss(Ts(e.backgroundClip, 0), c.curves), "assign"), t || e.boxShadow.length ? (this.ctx.save(), this.path(n), this.ctx.clip(), ee(e.backgroundColor) || (this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(e.backgroundColor), "assign"), this.ctx.fill()), [4, this.renderBackgroundImage(c.container)]) : [3, 2];
          case 1:
            A.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function (A) {
              a.ctx.save();
              var e = cc11001100_hook("e", Qs(c.curves), "var-init"),
                t = cc11001100_hook("t", A.inset ? 0 : 1e4, "var-init"),
                r = cc11001100_hook("r", function (A, t, r, n, B) {
                  return A.map(function (A, e) {
                    switch (e) {
                      case 0:
                        return A.add(t, r);
                      case 1:
                        return A.add(t + n, r);
                      case 2:
                        return A.add(t + n, r + B);
                      case 3:
                        return A.add(t, r + B);
                    }
                    return A;
                  });
                }(e, -t + (A.inset ? 1 : -1) * A.spread.number, (A.inset ? 1 : -1) * A.spread.number, A.spread.number * (A.inset ? -2 : 2), A.spread.number * (A.inset ? -2 : 2)), "var-init");
              A.inset ? (a.path(e), a.ctx.clip(), a.mask(r)) : (a.mask(e), a.ctx.clip(), a.path(r)), a.ctx.shadowOffsetX = cc11001100_hook("a.ctx.shadowOffsetX", A.offsetX.number + t, "assign"), a.ctx.shadowOffsetY = cc11001100_hook("a.ctx.shadowOffsetY", A.offsetY.number, "assign"), a.ctx.shadowColor = cc11001100_hook("a.ctx.shadowColor", te(A.color), "assign"), a.ctx.shadowBlur = cc11001100_hook("a.ctx.shadowBlur", A.blur.number, "assign"), a.ctx.fillStyle = cc11001100_hook("a.ctx.fillStyle", A.inset ? te(A.color) : "rgba(0,0,0,1)", "assign"), a.ctx.fill(), a.ctx.restore();
            }), A.label = cc11001100_hook("A.label", 2, "assign");
          case 2:
            s = cc11001100_hook("s", B = cc11001100_hook("B", 0, "assign"), "assign"), o = cc11001100_hook("o", r, "assign"), A.label = cc11001100_hook("A.label", 3, "assign");
          case 3:
            return s < o.length ? (i = cc11001100_hook("i", o[s], "assign")).style === ht.NONE || ee(i.color) ? [3, 5] : [4, this.renderBorder(i.color, B, c.curves)] : [3, 7];
          case 4:
            A.sent(), A.label = cc11001100_hook("A.label", 5, "assign");
          case 5:
            B++, A.label = cc11001100_hook("A.label", 6, "assign");
          case 6:
            return s++, [3, 3];
          case 7:
            return [2];
        }
      });
    });
  }, "assign"), Ds.prototype.render = cc11001100_hook("Ds.prototype.render", function (t) {
    return a(this, void 0, void 0, function () {
      var e;
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(this.options.backgroundColor), "assign"), this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height)), e = cc11001100_hook("e", function (A) {
              var e = cc11001100_hook("e", new gs(A, []), "var-init"),
                t = cc11001100_hook("t", new Cs(e), "var-init"),
                r = cc11001100_hook("r", [], "var-init");
              return ps(e, t, t, r), Ns(e.container, r), t;
            }(t), "assign"), [4, this.renderStack(e)];
          case 1:
            return A.sent(), this.applyEffects([], 2), [2, this.canvas];
        }
      });
    });
  }, "assign"), Ds), "var-init");
  function Ds(A) {
    cc11001100_hook("A", A, "function-parameter");
    this._activeEffects = cc11001100_hook("this._activeEffects", [], "assign"), this.canvas = cc11001100_hook("this.canvas", A.canvas ? A.canvas : document.createElement("canvas"), "assign"), this.ctx = cc11001100_hook("this.ctx", this.canvas.getContext("2d"), "assign"), (this.options = cc11001100_hook("this.options", A, "assign")).canvas || (this.canvas.width = cc11001100_hook("this.canvas.width", Math.floor(A.width * A.scale), "assign"), this.canvas.height = cc11001100_hook("this.canvas.height", Math.floor(A.height * A.scale), "assign"), this.canvas.style.width = cc11001100_hook("this.canvas.style.width", A.width + "px", "assign"), this.canvas.style.height = cc11001100_hook("this.canvas.style.height", A.height + "px", "assign")), this.fontMetrics = cc11001100_hook("this.fontMetrics", new Ls(document), "assign"), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "bottom", "assign"), this._activeEffects = cc11001100_hook("this._activeEffects", [], "assign"), De.getInstance(A.id).debug("Canvas renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale);
  }
  var bs = function (A) {
      return A instanceof Zn || A instanceof Wn || A instanceof Jn && A.type !== Vn && A.type !== xn;
    },
    Ss = function (A, e) {
      switch (A) {
        case Ee.BORDER_BOX:
          return Qs(e);
        case Ee.CONTENT_BOX:
          return function (A) {
            return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox];
          }(e);
        case Ee.PADDING_BOX:
        default:
          return ws(e);
      }
    },
    Ms = function (A) {
      switch (A) {
        case Cr.CENTER:
          return "center";
        case Cr.RIGHT:
          return "right";
        case Cr.LEFT:
        default:
          return "left";
      }
    },
    ys = cc11001100_hook("ys", (_s.prototype.render = cc11001100_hook("_s.prototype.render", function (r) {
      return a(this, void 0, void 0, function () {
        var e, t;
        return S(this, function (A) {
          switch (A.label) {
            case 0:
              return e = cc11001100_hook("e", Le(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, r), "assign"), [4, xs(e)];
            case 1:
              return t = cc11001100_hook("t", A.sent(), "assign"), this.options.backgroundColor && (this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", te(this.options.backgroundColor), "assign"), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, "assign"), _s), "var-init");
  function _s(A) {
    cc11001100_hook("A", A, "function-parameter");
    this.canvas = cc11001100_hook("this.canvas", A.canvas ? A.canvas : document.createElement("canvas"), "assign"), this.ctx = cc11001100_hook("this.ctx", this.canvas.getContext("2d"), "assign"), this.options = cc11001100_hook("this.options", A, "assign"), this.canvas.width = cc11001100_hook("this.canvas.width", Math.floor(A.width * A.scale), "assign"), this.canvas.height = cc11001100_hook("this.canvas.height", Math.floor(A.height * A.scale), "assign"), this.canvas.style.width = cc11001100_hook("this.canvas.style.width", A.width + "px", "assign"), this.canvas.style.height = cc11001100_hook("this.canvas.style.height", A.height + "px", "assign"), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY), De.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale);
  }
  function Ps(A) {
    cc11001100_hook("A", A, "function-parameter");
    return we(_A.create(A).parseComponentValue());
  }
  var xs = function (r) {
    return new Promise(function (A, e) {
      var t = cc11001100_hook("t", new Image(), "var-init");
      t.onload = cc11001100_hook("t.onload", function () {
        A(t);
      }, "assign"), t.onerror = cc11001100_hook("t.onerror", e, "assign"), t.src = cc11001100_hook("t.src", "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r)), "assign");
    });
  };
  "undefined" != typeof window && Se.setContext(window);
  var Vs = function (p, N) {
    return a(void 0, void 0, void 0, function () {
      var e, t, r, n, B, s, o, i, a, c, Q, w, u, U, l, C, g, E, F, h, H, d, f;
      return S(this, function (A) {
        switch (A.label) {
          case 0:
            if (!(e = cc11001100_hook("e", p.ownerDocument, "assign"))) throw new Error("Element is not attached to a Document");
            if (!(t = cc11001100_hook("t", e.defaultView, "assign"))) throw new Error("Document is not attached to a Window");
            return r = cc11001100_hook("r", (Math.round(1e3 * Math.random()) + Date.now()).toString(16), "assign"), n = cc11001100_hook("n", EB(p) || function (A) {
              return "HTML" === A.tagName;
            }(p) ? function (A) {
              var e = cc11001100_hook("e", A.body, "var-init"),
                t = cc11001100_hook("t", A.documentElement, "var-init");
              if (!e || !t) throw new Error("Unable to get document size");
              var r = cc11001100_hook("r", Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), "var-init"),
                n = cc11001100_hook("n", Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight)), "var-init");
              return new I(0, 0, r, n);
            }(e) : T(p), "assign"), B = cc11001100_hook("B", n.width, "assign"), s = cc11001100_hook("s", n.height, "assign"), o = cc11001100_hook("o", n.left, "assign"), i = cc11001100_hook("i", n.top, "assign"), a = cc11001100_hook("a", K({}, {
              allowTaint: cc11001100_hook("allowTaint", !1, "object-key-init"),
              imageTimeout: cc11001100_hook("imageTimeout", 15e3, "object-key-init"),
              proxy: cc11001100_hook("proxy", void 0, "object-key-init"),
              useCORS: cc11001100_hook("useCORS", !1, "object-key-init")
            }, N), "assign"), c = cc11001100_hook("c", {
              backgroundColor: cc11001100_hook("backgroundColor", "#ffffff", "object-key-init"),
              cache: cc11001100_hook("cache", N.cache ? N.cache : Se.create(r, a), "object-key-init"),
              logging: cc11001100_hook("logging", !0, "object-key-init"),
              removeContainer: cc11001100_hook("removeContainer", !0, "object-key-init"),
              foreignObjectRendering: cc11001100_hook("foreignObjectRendering", !1, "object-key-init"),
              scale: cc11001100_hook("scale", t.devicePixelRatio || 1, "object-key-init"),
              windowWidth: cc11001100_hook("windowWidth", t.innerWidth, "object-key-init"),
              windowHeight: cc11001100_hook("windowHeight", t.innerHeight, "object-key-init"),
              scrollX: cc11001100_hook("scrollX", t.pageXOffset, "object-key-init"),
              scrollY: cc11001100_hook("scrollY", t.pageYOffset, "object-key-init"),
              x: cc11001100_hook("x", o, "object-key-init"),
              y: cc11001100_hook("y", i, "object-key-init"),
              width: cc11001100_hook("width", Math.ceil(B), "object-key-init"),
              height: cc11001100_hook("height", Math.ceil(s), "object-key-init"),
              id: cc11001100_hook("id", r, "object-key-init")
            }, "assign"), Q = cc11001100_hook("Q", K({}, c, a, N), "assign"), w = cc11001100_hook("w", new I(Q.scrollX, Q.scrollY, Q.windowWidth, Q.windowHeight), "assign"), De.create({
              id: cc11001100_hook("id", r, "object-key-init"),
              enabled: cc11001100_hook("enabled", Q.logging, "object-key-init")
            }), De.getInstance(r).debug("Starting document clone"), u = cc11001100_hook("u", new PB(p, {
              id: cc11001100_hook("id", r, "object-key-init"),
              onclone: cc11001100_hook("onclone", Q.onclone, "object-key-init"),
              ignoreElements: cc11001100_hook("ignoreElements", Q.ignoreElements, "object-key-init"),
              inlineImages: cc11001100_hook("inlineImages", Q.foreignObjectRendering, "object-key-init"),
              copyStyles: cc11001100_hook("copyStyles", Q.foreignObjectRendering, "object-key-init")
            }), "assign"), (U = cc11001100_hook("U", u.clonedReferenceElement, "assign")) ? [4, u.toIFrame(e, w)] : [2, Promise.reject("Unable to find element in cloned iframe")];
          case 1:
            return l = cc11001100_hook("l", A.sent(), "assign"), C = cc11001100_hook("C", e.documentElement ? Ps(getComputedStyle(e.documentElement).backgroundColor) : He.TRANSPARENT, "assign"), g = cc11001100_hook("g", e.body ? Ps(getComputedStyle(e.body).backgroundColor) : He.TRANSPARENT, "assign"), E = cc11001100_hook("E", N.backgroundColor, "assign"), F = cc11001100_hook("F", "string" == typeof E ? Ps(E) : null === E ? He.TRANSPARENT : 4294967295, "assign"), h = cc11001100_hook("h", p === e.documentElement ? ee(C) ? ee(g) ? F : g : C : F, "assign"), H = cc11001100_hook("H", {
              id: cc11001100_hook("id", r, "object-key-init"),
              cache: cc11001100_hook("cache", Q.cache, "object-key-init"),
              canvas: cc11001100_hook("canvas", Q.canvas, "object-key-init"),
              backgroundColor: cc11001100_hook("backgroundColor", h, "object-key-init"),
              scale: cc11001100_hook("scale", Q.scale, "object-key-init"),
              x: cc11001100_hook("x", Q.x, "object-key-init"),
              y: cc11001100_hook("y", Q.y, "object-key-init"),
              scrollX: cc11001100_hook("scrollX", Q.scrollX, "object-key-init"),
              scrollY: cc11001100_hook("scrollY", Q.scrollY, "object-key-init"),
              width: cc11001100_hook("width", Q.width, "object-key-init"),
              height: cc11001100_hook("height", Q.height, "object-key-init"),
              windowWidth: cc11001100_hook("windowWidth", Q.windowWidth, "object-key-init"),
              windowHeight: cc11001100_hook("windowHeight", Q.windowHeight, "object-key-init")
            }, "assign"), Q.foreignObjectRendering ? (De.getInstance(r).debug("Document cloned, using foreign object rendering"), [4, new ys(H).render(U)]) : [3, 3];
          case 2:
            return d = cc11001100_hook("d", A.sent(), "assign"), [3, 5];
          case 3:
            return De.getInstance(r).debug("Document cloned, using computed rendering"), Se.attachInstance(Q.cache), De.getInstance(r).debug("Starting DOM parsing"), f = cc11001100_hook("f", oB(U), "assign"), Se.detachInstance(), h === f.styles.backgroundColor && (f.styles.backgroundColor = cc11001100_hook("f.styles.backgroundColor", He.TRANSPARENT, "assign")), De.getInstance(r).debug("Starting renderer"), [4, new Os(H).render(f)];
          case 4:
            d = cc11001100_hook("d", A.sent(), "assign"), A.label = cc11001100_hook("A.label", 5, "assign");
          case 5:
            return !0 === Q.removeContainer && (PB.destroy(l) || De.getInstance(r).error("Cannot detach cloned iframe as it is not in the DOM anymore")), De.getInstance(r).debug("Finished rendering"), De.destroy(r), Se.destroy(r), [2, d];
        }
      });
    });
  };
  return function (A, e) {
    return void 0 === e && (e = cc11001100_hook("e", {}, "assign")), Vs(A, e);
  };
});