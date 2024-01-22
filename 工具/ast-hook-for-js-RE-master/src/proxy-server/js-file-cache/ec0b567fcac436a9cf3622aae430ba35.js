"use strict";

(self.webpackChunk = cc11001100_hook("self.webpackChunk", self.webpackChunk || [], "assign")).push([[8777], {
  88777: function (e, t, r) {
    function n(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function o(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function a(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var a,
          c = cc11001100_hook("c", t.initialState, "var-init");
      return {
        getState: function () {
          return c;
        },
        dispatch: function (a, i) {
          var l = cc11001100_hook("l", function (e) {
            for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
              var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
              t % 2 ? n(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }

            return e;
          }({}, c), "var-init");
          c = cc11001100_hook("c", e(c, {
            type: cc11001100_hook("type", a, "object-key-init"),
            props: cc11001100_hook("props", t, "object-key-init"),
            payload: cc11001100_hook("payload", i, "object-key-init")
          }), "assign"), r({
            state: cc11001100_hook("state", c, "object-key-init"),
            prevState: cc11001100_hook("prevState", l, "object-key-init")
          });
        },
        pendingRequests: cc11001100_hook("pendingRequests", (a = cc11001100_hook("a", [], "assign"), {
          add: function (e) {
            return a.push(e), e.finally(function () {
              a = cc11001100_hook("a", a.filter(function (t) {
                return t !== e;
              }), "assign");
            });
          },
          cancelAll: function () {
            a.forEach(function (e) {
              return e.cancel();
            });
          },
          isEmpty: function () {
            return 0 === a.length;
          }
        }), "object-key-init")
      };
    }

    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.reduce(function (e, t) {
        return e.concat(t);
      }, []);
    }

    function i(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function l(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? i(Object(r), !0).forEach(function (t) {
          u(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function u(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      return 0 === e.collections.length ? 0 : e.collections.reduce(function (e, t) {
        return e + t.items.length;
      }, 0);
    }

    r.r(t), r.d(t, {
      DocSearchModal: function () {
        return wr;
      }
    });
    var f = cc11001100_hook("f", 0, "var-init");

    var m = function () {};

    function p(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function d(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function h(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", [], "var-init");
      return Promise.resolve(e(t)).then(function (e) {
        return Array.isArray(e), Promise.all(e.filter(function (e) {
          return Boolean(e);
        }).map(function (e) {
          if (e.sourceId, r.includes(e.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
          r.push(e.sourceId);
          var t = cc11001100_hook("t", function (e) {
            for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
              var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
              t % 2 ? p(Object(r), !0).forEach(function (t) {
                d(e, t, r[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
            }

            return e;
          }({
            getItemInputValue: function (e) {
              return e.state.query;
            },
            getItemUrl: function () {},
            onSelect: function (e) {
              (0, e.setIsOpen)(!1);
            },
            onActive: cc11001100_hook("onActive", m, "object-key-init")
          }, e), "var-init");
          return Promise.resolve(t);
        }));
      });
    }

    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (e) {
        if (Array.isArray(e)) return y(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return y(e, t);
        var r = cc11001100_hook("r", Object.prototype.toString.call(e).slice(8, -1), "var-init");
        "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign"));
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function y(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));

      for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", new Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");

      return n;
    }

    function g(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function b(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? g(Object(r), !0).forEach(function (t) {
          O(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function O(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function S(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function E(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? S(Object(r), !0).forEach(function (t) {
          j(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function j(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function w(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function P(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? w(Object(r), !0).forEach(function (t) {
          I(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function I(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function D(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (e) {
        if (Array.isArray(e)) return C(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return C(e, t);
        var r = cc11001100_hook("r", Object.prototype.toString.call(e).slice(8, -1), "var-init");
        "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign"));
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function C(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));

      for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", new Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");

      return n;
    }

    function k(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function A(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? k(Object(r), !0).forEach(function (t) {
          x(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function x(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function N(e) {
      cc11001100_hook("e", e, "function-parameter");
      return Boolean(e.execute);
    }

    function R(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return r = cc11001100_hook("r", e, "assign"), Boolean(null == r ? void 0 : r.execute) ? A(A({}, e), {}, {
        requests: cc11001100_hook("requests", e.queries.map(function (r) {
          return {
            query: cc11001100_hook("query", r, "object-key-init"),
            sourceId: cc11001100_hook("sourceId", t, "object-key-init"),
            transformResponse: cc11001100_hook("transformResponse", e.transformResponse, "object-key-init")
          };
        }), "object-key-init")
      }) : {
        items: cc11001100_hook("items", e, "object-key-init"),
        sourceId: cc11001100_hook("sourceId", t, "object-key-init")
      };
      var r;
    }

    function q(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.reduce(function (e, t) {
        if (!N(t)) return e.push(t), e;
        var r = cc11001100_hook("r", t.searchClient, "var-init"),
            n = cc11001100_hook("n", t.execute, "var-init"),
            o = cc11001100_hook("o", t.requesterId, "var-init"),
            a = cc11001100_hook("a", t.requests, "var-init"),
            c = cc11001100_hook("c", e.find(function (e) {
          return N(t) && N(e) && e.searchClient === r && Boolean(o) && e.requesterId === o;
        }), "var-init");

        if (c) {
          var i;
          (i = cc11001100_hook("i", c.items, "assign")).push.apply(i, D(a));
        } else {
          var l = cc11001100_hook("l", {
            execute: cc11001100_hook("execute", n, "object-key-init"),
            requesterId: cc11001100_hook("requesterId", o, "object-key-init"),
            items: cc11001100_hook("items", a, "object-key-init"),
            searchClient: cc11001100_hook("searchClient", r, "object-key-init")
          }, "var-init");
          e.push(l);
        }

        return e;
      }, []).map(function (e) {
        if (!N(e)) return Promise.resolve(e);
        var t = cc11001100_hook("t", e, "var-init"),
            r = cc11001100_hook("r", t.execute, "var-init"),
            n = cc11001100_hook("n", t.items, "var-init");
        return r({
          searchClient: cc11001100_hook("searchClient", t.searchClient, "object-key-init"),
          requests: cc11001100_hook("requests", n, "object-key-init")
        });
      }), "var-init");
      return Promise.all(t).then(function (e) {
        return c(e);
      });
    }

    function T(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return t.map(function (t) {
        var r = cc11001100_hook("r", e.filter(function (e) {
          return e.sourceId === t.sourceId;
        }), "var-init"),
            n = cc11001100_hook("n", r.map(function (e) {
          return e.items;
        }), "var-init"),
            o = cc11001100_hook("o", r[0].transformResponse, "var-init"),
            a = cc11001100_hook("a", o ? o(function (e) {
          var t = cc11001100_hook("t", e.map(function (e) {
            var t;
            return P(P({}, e), {}, {
              hits: cc11001100_hook("hits", null === (t = cc11001100_hook("t", e.hits, "assign")) || void 0 === t ? void 0 : t.map(function (t) {
                return P(P({}, t), {}, {
                  __autocomplete_indexName: cc11001100_hook("__autocomplete_indexName", e.index, "object-key-init"),
                  __autocomplete_queryID: cc11001100_hook("__autocomplete_queryID", e.queryID, "object-key-init")
                });
              }), "object-key-init")
            });
          }), "var-init");
          return {
            results: cc11001100_hook("results", t, "object-key-init"),
            hits: cc11001100_hook("hits", t.map(function (e) {
              return e.hits;
            }).filter(Boolean), "object-key-init"),
            facetHits: cc11001100_hook("facetHits", t.map(function (e) {
              var t;
              return null === (t = cc11001100_hook("t", e.facetHits, "assign")) || void 0 === t ? void 0 : t.map(function (e) {
                return {
                  label: cc11001100_hook("label", e.value, "object-key-init"),
                  count: cc11001100_hook("count", e.count, "object-key-init"),
                  _highlightResult: {
                    label: {
                      value: cc11001100_hook("value", e.highlighted, "object-key-init")
                    }
                  }
                };
              });
            }).filter(Boolean), "object-key-init")
          };
        }(n)) : n, "var-init");
        return Array.isArray(a), a.every(Boolean), 'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
          source: cc11001100_hook("source", t, "object-key-init"),
          items: cc11001100_hook("items", a, "object-key-init")
        };
      });
    }

    function _(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", t, "var-init");
      return {
        then: function (t, n) {
          return _(e.then(H(t, r, e), H(n, r, e)), r);
        },
        catch: function (t) {
          return _(e.catch(H(t, r, e)), r);
        },
        finally: function (t) {
          return t && r.onCancelList.push(t), _(e.finally(H(t && function () {
            return r.onCancelList = cc11001100_hook("r.onCancelList", [], "assign"), t();
          }, r, e)), r);
        },
        cancel: function () {
          r.isCanceled = cc11001100_hook("r.isCanceled", !0, "assign");
          var e = cc11001100_hook("e", r.onCancelList, "var-init");
          r.onCancelList = cc11001100_hook("r.onCancelList", [], "assign"), e.forEach(function (e) {
            e();
          });
        },
        isCanceled: function () {
          return !0 === r.isCanceled;
        }
      };
    }

    function L(e) {
      cc11001100_hook("e", e, "function-parameter");
      return _(new Promise(function (t, r) {
        return e(t, r);
      }), {
        isCanceled: cc11001100_hook("isCanceled", !1, "object-key-init"),
        onCancelList: cc11001100_hook("onCancelList", [], "object-key-init")
      });
    }

    function M(e) {
      cc11001100_hook("e", e, "function-parameter");
      return _(e, {
        isCanceled: cc11001100_hook("isCanceled", !1, "object-key-init"),
        onCancelList: cc11001100_hook("onCancelList", [], "object-key-init")
      });
    }

    function H(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return e ? function (r) {
        return t.isCanceled ? r : e(r);
      } : r;
    }

    function F(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", function (e) {
        var t = cc11001100_hook("t", e.collections.map(function (e) {
          return e.items.length;
        }).reduce(function (e, t, r) {
          var n = cc11001100_hook("n", (e[r - 1] || 0) + t, "var-init");
          return e.push(n), e;
        }, []).reduce(function (t, r) {
          return r <= e.activeItemId ? t + 1 : t;
        }, 0), "var-init");
        return e.collections[t];
      }(e), "var-init");
      if (!t) return null;
      var r = cc11001100_hook("r", t.items[function (e) {
        for (var t = cc11001100_hook("t", e.state, "var-init"), r = cc11001100_hook("r", e.collection, "var-init"), n = cc11001100_hook("n", !1, "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); !1 === n;) {
          var c = cc11001100_hook("c", t.collections[o], "var-init");

          if (c === r) {
            n = cc11001100_hook("n", !0, "assign");
            break;
          }

          a += cc11001100_hook("a", c.items.length, "assign"), o++;
        }

        return t.activeItemId - a;
      }({
        state: cc11001100_hook("state", e, "object-key-init"),
        collection: cc11001100_hook("collection", t, "object-key-init")
      })], "var-init"),
          n = cc11001100_hook("n", t.source, "var-init");
      return {
        item: cc11001100_hook("item", r, "object-key-init"),
        itemInputValue: cc11001100_hook("itemInputValue", n.getItemInputValue({
          item: cc11001100_hook("item", r, "object-key-init"),
          state: cc11001100_hook("state", e, "object-key-init")
        }), "object-key-init"),
        itemUrl: cc11001100_hook("itemUrl", n.getItemUrl({
          item: cc11001100_hook("item", r, "object-key-init"),
          state: cc11001100_hook("state", e, "object-key-init")
        }), "object-key-init"),
        source: cc11001100_hook("source", n, "object-key-init")
      };
    }

    L.resolve = cc11001100_hook("L.resolve", function (e) {
      return M(Promise.resolve(e));
    }, "assign"), L.reject = cc11001100_hook("L.reject", function (e) {
      return M(Promise.reject(e));
    }, "assign");
    var U = cc11001100_hook("U", ["event", "nextState", "props", "query", "refresh", "store"], "var-init");

    function B(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function V(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? B(Object(r), !0).forEach(function (t) {
          K(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function K(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function $(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    var J,
        z,
        W,
        Q = cc11001100_hook("Q", null, "var-init"),
        Z = cc11001100_hook("Z", (J = cc11001100_hook("J", -1, "assign"), z = cc11001100_hook("z", -1, "assign"), W = cc11001100_hook("W", void 0, "assign"), function (e) {
      var t = cc11001100_hook("t", ++J, "var-init");
      return Promise.resolve(e).then(function (e) {
        return W && t < z ? W : (z = cc11001100_hook("z", t, "assign"), W = cc11001100_hook("W", e, "assign"), e);
      });
    }), "var-init");

    function G(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.event, "var-init"),
          r = cc11001100_hook("r", e.nextState, "var-init"),
          n = cc11001100_hook("n", void 0 === r ? {} : r, "var-init"),
          o = cc11001100_hook("o", e.props, "var-init"),
          a = cc11001100_hook("a", e.query, "var-init"),
          i = cc11001100_hook("i", e.refresh, "var-init"),
          l = cc11001100_hook("l", e.store, "var-init"),
          u = cc11001100_hook("u", $(e, U), "var-init");
      Q && o.environment.clearTimeout(Q);
      var s = cc11001100_hook("s", u.setCollections, "var-init"),
          f = cc11001100_hook("f", u.setIsOpen, "var-init"),
          m = cc11001100_hook("m", u.setQuery, "var-init"),
          p = cc11001100_hook("p", u.setActiveItemId, "var-init"),
          d = cc11001100_hook("d", u.setStatus, "var-init");

      if (m(a), p(o.defaultActiveItemId), !a && !1 === o.openOnFocus) {
        var h,
            v = cc11001100_hook("v", l.getState().collections.map(function (e) {
          return V(V({}, e), {}, {
            items: cc11001100_hook("items", [], "object-key-init")
          });
        }), "var-init");
        d("idle"), s(v), f(null !== (h = cc11001100_hook("h", n.isOpen, "assign")) && void 0 !== h ? h : o.shouldPanelOpen({
          state: cc11001100_hook("state", l.getState(), "object-key-init")
        }));
        var y = cc11001100_hook("y", M(Z(v).then(function () {
          return Promise.resolve();
        })), "var-init");
        return l.pendingRequests.add(y);
      }

      d("loading"), Q = cc11001100_hook("Q", o.environment.setTimeout(function () {
        d("stalled");
      }, o.stallThreshold), "assign");
      var g = cc11001100_hook("g", M(Z(o.getSources(V({
        query: cc11001100_hook("query", a, "object-key-init"),
        refresh: cc11001100_hook("refresh", i, "object-key-init"),
        state: cc11001100_hook("state", l.getState(), "object-key-init")
      }, u)).then(function (e) {
        return Promise.all(e.map(function (e) {
          return Promise.resolve(e.getItems(V({
            query: cc11001100_hook("query", a, "object-key-init"),
            refresh: cc11001100_hook("refresh", i, "object-key-init"),
            state: cc11001100_hook("state", l.getState(), "object-key-init")
          }, u))).then(function (t) {
            return R(t, e.sourceId);
          });
        })).then(q).then(function (t) {
          return T(t, e);
        }).then(function (e) {
          return function (e) {
            var t = cc11001100_hook("t", e.collections, "var-init"),
                r = cc11001100_hook("r", e.props, "var-init"),
                n = cc11001100_hook("n", e.state, "var-init"),
                o = cc11001100_hook("o", t.reduce(function (e, t) {
              return E(E({}, e), {}, j({}, t.source.sourceId, E(E({}, t.source), {}, {
                getItems: function () {
                  return c(t.items);
                }
              })));
            }, {}), "var-init");
            return c(r.reshape({
              sources: cc11001100_hook("sources", Object.values(o), "object-key-init"),
              sourcesBySourceId: cc11001100_hook("sourcesBySourceId", o, "object-key-init"),
              state: cc11001100_hook("state", n, "object-key-init")
            })).filter(Boolean).map(function (e) {
              return {
                source: cc11001100_hook("source", e, "object-key-init"),
                items: cc11001100_hook("items", e.getItems(), "object-key-init")
              };
            });
          }({
            collections: cc11001100_hook("collections", e, "object-key-init"),
            props: cc11001100_hook("props", o, "object-key-init"),
            state: cc11001100_hook("state", l.getState(), "object-key-init")
          });
        });
      }))).then(function (e) {
        var r;
        d("idle"), s(e);
        var c = cc11001100_hook("c", o.shouldPanelOpen({
          state: cc11001100_hook("state", l.getState(), "object-key-init")
        }), "var-init");
        f(null !== (r = cc11001100_hook("r", n.isOpen, "assign")) && void 0 !== r ? r : o.openOnFocus && !a && c || c);
        var m = cc11001100_hook("m", F(l.getState()), "var-init");

        if (null !== l.getState().activeItemId && m) {
          var p = cc11001100_hook("p", m.item, "var-init"),
              h = cc11001100_hook("h", m.itemInputValue, "var-init"),
              v = cc11001100_hook("v", m.itemUrl, "var-init"),
              y = cc11001100_hook("y", m.source, "var-init");
          y.onActive(V({
            event: cc11001100_hook("event", t, "object-key-init"),
            item: cc11001100_hook("item", p, "object-key-init"),
            itemInputValue: cc11001100_hook("itemInputValue", h, "object-key-init"),
            itemUrl: cc11001100_hook("itemUrl", v, "object-key-init"),
            refresh: cc11001100_hook("refresh", i, "object-key-init"),
            source: cc11001100_hook("source", y, "object-key-init"),
            state: cc11001100_hook("state", l.getState(), "object-key-init")
          }, u));
        }
      }).finally(function () {
        d("idle"), Q && o.environment.clearTimeout(Q);
      }), "var-init");
      return l.pendingRequests.add(g);
    }

    var Y = cc11001100_hook("Y", ["event", "props", "refresh", "store"], "var-init");

    function X(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function ee(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? X(Object(r), !0).forEach(function (t) {
          te(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function te(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function re(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    var ne = cc11001100_hook("ne", /((gt|sm)-|galaxy nexus)|samsung[- ]/i, "var-init");
    var oe = cc11001100_hook("oe", ["props", "refresh", "store"], "var-init"),
        ae = cc11001100_hook("ae", ["inputElement", "formElement", "panelElement"], "var-init"),
        ce = cc11001100_hook("ce", ["inputElement"], "var-init"),
        ie = cc11001100_hook("ie", ["inputElement", "maxLength"], "var-init"),
        le = cc11001100_hook("le", ["item", "source"], "var-init");

    function ue(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function se(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? ue(Object(r), !0).forEach(function (t) {
          fe(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function fe(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function me(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    function pe(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.props, "var-init"),
          r = cc11001100_hook("r", e.refresh, "var-init"),
          n = cc11001100_hook("n", e.store, "var-init"),
          o = cc11001100_hook("o", me(e, oe), "var-init");
      return {
        getEnvironmentProps: function (e) {
          var r = cc11001100_hook("r", e.inputElement, "var-init"),
              o = cc11001100_hook("o", e.formElement, "var-init"),
              a = cc11001100_hook("a", e.panelElement, "var-init");

          function c(e) {
            cc11001100_hook("e", e, "function-parameter");
            !n.getState().isOpen && n.pendingRequests.isEmpty() || e.target === r || !1 === [o, a].some(function (t) {
              return r = cc11001100_hook("r", t, "assign"), n = cc11001100_hook("n", e.target, "assign"), r === n || r.contains(n);
              var r, n;
            }) && (n.dispatch("blur", null), t.debug || n.pendingRequests.cancelAll());
          }

          return se({
            onTouchStart: cc11001100_hook("onTouchStart", c, "object-key-init"),
            onMouseDown: cc11001100_hook("onMouseDown", c, "object-key-init"),
            onTouchMove: function (e) {
              !1 !== n.getState().isOpen && r === t.environment.document.activeElement && e.target !== r && r.blur();
            }
          }, me(e, ae));
        },
        getRootProps: function (e) {
          return se({
            role: cc11001100_hook("role", "combobox", "object-key-init"),
            "aria-expanded": cc11001100_hook("aria-expanded", n.getState().isOpen, "object-key-init"),
            "aria-haspopup": cc11001100_hook("aria-haspopup", "listbox", "object-key-init"),
            "aria-owns": cc11001100_hook("aria-owns", n.getState().isOpen ? "".concat(t.id, "-list") : void 0, "object-key-init"),
            "aria-labelledby": cc11001100_hook("aria-labelledby", "".concat(t.id, "-label"), "object-key-init")
          }, e);
        },
        getFormProps: function (e) {
          e.inputElement;
          return se({
            action: cc11001100_hook("action", "", "object-key-init"),
            noValidate: cc11001100_hook("noValidate", !0, "object-key-init"),
            role: cc11001100_hook("role", "search", "object-key-init"),
            onSubmit: function (a) {
              var c;
              a.preventDefault(), t.onSubmit(se({
                event: cc11001100_hook("event", a, "object-key-init"),
                refresh: cc11001100_hook("refresh", r, "object-key-init"),
                state: cc11001100_hook("state", n.getState(), "object-key-init")
              }, o)), n.dispatch("submit", null), null === (c = cc11001100_hook("c", e.inputElement, "assign")) || void 0 === c || c.blur();
            },
            onReset: function (a) {
              var c;
              a.preventDefault(), t.onReset(se({
                event: cc11001100_hook("event", a, "object-key-init"),
                refresh: cc11001100_hook("refresh", r, "object-key-init"),
                state: cc11001100_hook("state", n.getState(), "object-key-init")
              }, o)), n.dispatch("reset", null), null === (c = cc11001100_hook("c", e.inputElement, "assign")) || void 0 === c || c.focus();
            }
          }, me(e, ce));
        },
        getLabelProps: function (e) {
          return se({
            htmlFor: cc11001100_hook("htmlFor", "".concat(t.id, "-input"), "object-key-init"),
            id: cc11001100_hook("id", "".concat(t.id, "-label"), "object-key-init")
          }, e);
        },
        getInputProps: function (e) {
          var a;

          function c(e) {
            cc11001100_hook("e", e, "function-parameter");
            (t.openOnFocus || Boolean(n.getState().query)) && G(se({
              event: cc11001100_hook("event", e, "object-key-init"),
              props: cc11001100_hook("props", t, "object-key-init"),
              query: cc11001100_hook("query", n.getState().completion || n.getState().query, "object-key-init"),
              refresh: cc11001100_hook("refresh", r, "object-key-init"),
              store: cc11001100_hook("store", n, "object-key-init")
            }, o)), n.dispatch("focus", null);
          }

          var i = cc11001100_hook("i", e || {}, "var-init"),
              l = cc11001100_hook("l", (i.inputElement, i.maxLength), "var-init"),
              u = cc11001100_hook("u", void 0 === l ? 512 : l, "var-init"),
              s = cc11001100_hook("s", me(i, ie), "var-init"),
              f = cc11001100_hook("f", F(n.getState()), "var-init"),
              p = cc11001100_hook("p", function (e) {
            return Boolean(e && e.match(ne));
          }((null === (a = cc11001100_hook("a", t.environment.navigator, "assign")) || void 0 === a ? void 0 : a.userAgent) || ""), "var-init"),
              d = cc11001100_hook("d", null != f && f.itemUrl && !p ? "go" : "search", "var-init");
          return se({
            "aria-autocomplete": cc11001100_hook("aria-autocomplete", "both", "object-key-init"),
            "aria-activedescendant": cc11001100_hook("aria-activedescendant", n.getState().isOpen && null !== n.getState().activeItemId ? "".concat(t.id, "-item-").concat(n.getState().activeItemId) : void 0, "object-key-init"),
            "aria-controls": cc11001100_hook("aria-controls", n.getState().isOpen ? "".concat(t.id, "-list") : void 0, "object-key-init"),
            "aria-labelledby": cc11001100_hook("aria-labelledby", "".concat(t.id, "-label"), "object-key-init"),
            value: cc11001100_hook("value", n.getState().completion || n.getState().query, "object-key-init"),
            id: cc11001100_hook("id", "".concat(t.id, "-input"), "object-key-init"),
            autoComplete: cc11001100_hook("autoComplete", "off", "object-key-init"),
            autoCorrect: cc11001100_hook("autoCorrect", "off", "object-key-init"),
            autoCapitalize: cc11001100_hook("autoCapitalize", "off", "object-key-init"),
            enterKeyHint: cc11001100_hook("enterKeyHint", d, "object-key-init"),
            spellCheck: cc11001100_hook("spellCheck", "false", "object-key-init"),
            autoFocus: cc11001100_hook("autoFocus", t.autoFocus, "object-key-init"),
            placeholder: cc11001100_hook("placeholder", t.placeholder, "object-key-init"),
            maxLength: cc11001100_hook("maxLength", u, "object-key-init"),
            type: cc11001100_hook("type", "search", "object-key-init"),
            onChange: function (e) {
              G(se({
                event: cc11001100_hook("event", e, "object-key-init"),
                props: cc11001100_hook("props", t, "object-key-init"),
                query: cc11001100_hook("query", e.currentTarget.value.slice(0, u), "object-key-init"),
                refresh: cc11001100_hook("refresh", r, "object-key-init"),
                store: cc11001100_hook("store", n, "object-key-init")
              }, o));
            },
            onKeyDown: function (e) {
              !function (e) {
                var t = cc11001100_hook("t", e.event, "var-init"),
                    r = cc11001100_hook("r", e.props, "var-init"),
                    n = cc11001100_hook("n", e.refresh, "var-init"),
                    o = cc11001100_hook("o", e.store, "var-init"),
                    a = cc11001100_hook("a", re(e, Y), "var-init");

                if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                  var c = function () {
                    var e = cc11001100_hook("e", r.environment.document.getElementById("".concat(r.id, "-item-").concat(o.getState().activeItemId)), "var-init");
                    e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1));
                  },
                      i = function () {
                    var e = cc11001100_hook("e", F(o.getState()), "var-init");

                    if (null !== o.getState().activeItemId && e) {
                      var r = cc11001100_hook("r", e.item, "var-init"),
                          c = cc11001100_hook("c", e.itemInputValue, "var-init"),
                          i = cc11001100_hook("i", e.itemUrl, "var-init"),
                          l = cc11001100_hook("l", e.source, "var-init");
                      l.onActive(ee({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        item: cc11001100_hook("item", r, "object-key-init"),
                        itemInputValue: cc11001100_hook("itemInputValue", c, "object-key-init"),
                        itemUrl: cc11001100_hook("itemUrl", i, "object-key-init"),
                        refresh: cc11001100_hook("refresh", n, "object-key-init"),
                        source: cc11001100_hook("source", l, "object-key-init"),
                        state: cc11001100_hook("state", o.getState(), "object-key-init")
                      }, a));
                    }
                  };

                  t.preventDefault(), !1 === o.getState().isOpen && (r.openOnFocus || Boolean(o.getState().query)) ? G(ee({
                    event: cc11001100_hook("event", t, "object-key-init"),
                    props: cc11001100_hook("props", r, "object-key-init"),
                    query: cc11001100_hook("query", o.getState().query, "object-key-init"),
                    refresh: cc11001100_hook("refresh", n, "object-key-init"),
                    store: cc11001100_hook("store", o, "object-key-init")
                  }, a)).then(function () {
                    o.dispatch(t.key, {
                      nextActiveItemId: cc11001100_hook("nextActiveItemId", r.defaultActiveItemId, "object-key-init")
                    }), i(), setTimeout(c, 0);
                  }) : (o.dispatch(t.key, {}), i(), c());
                } else if ("Escape" === t.key) t.preventDefault(), o.dispatch(t.key, null), o.pendingRequests.cancelAll();else if ("Tab" === t.key) o.dispatch("blur", null), o.pendingRequests.cancelAll();else if ("Enter" === t.key) {
                  if (null === o.getState().activeItemId || o.getState().collections.every(function (e) {
                    return 0 === e.items.length;
                  })) return void (r.debug || o.pendingRequests.cancelAll());
                  t.preventDefault();
                  var l = cc11001100_hook("l", F(o.getState()), "var-init"),
                      u = cc11001100_hook("u", l.item, "var-init"),
                      s = cc11001100_hook("s", l.itemInputValue, "var-init"),
                      f = cc11001100_hook("f", l.itemUrl, "var-init"),
                      m = cc11001100_hook("m", l.source, "var-init");
                  if (t.metaKey || t.ctrlKey) void 0 !== f && (m.onSelect(ee({
                    event: cc11001100_hook("event", t, "object-key-init"),
                    item: cc11001100_hook("item", u, "object-key-init"),
                    itemInputValue: cc11001100_hook("itemInputValue", s, "object-key-init"),
                    itemUrl: cc11001100_hook("itemUrl", f, "object-key-init"),
                    refresh: cc11001100_hook("refresh", n, "object-key-init"),
                    source: cc11001100_hook("source", m, "object-key-init"),
                    state: cc11001100_hook("state", o.getState(), "object-key-init")
                  }, a)), r.navigator.navigateNewTab({
                    itemUrl: cc11001100_hook("itemUrl", f, "object-key-init"),
                    item: cc11001100_hook("item", u, "object-key-init"),
                    state: cc11001100_hook("state", o.getState(), "object-key-init")
                  }));else if (t.shiftKey) void 0 !== f && (m.onSelect(ee({
                    event: cc11001100_hook("event", t, "object-key-init"),
                    item: cc11001100_hook("item", u, "object-key-init"),
                    itemInputValue: cc11001100_hook("itemInputValue", s, "object-key-init"),
                    itemUrl: cc11001100_hook("itemUrl", f, "object-key-init"),
                    refresh: cc11001100_hook("refresh", n, "object-key-init"),
                    source: cc11001100_hook("source", m, "object-key-init"),
                    state: cc11001100_hook("state", o.getState(), "object-key-init")
                  }, a)), r.navigator.navigateNewWindow({
                    itemUrl: cc11001100_hook("itemUrl", f, "object-key-init"),
                    item: cc11001100_hook("item", u, "object-key-init"),
                    state: cc11001100_hook("state", o.getState(), "object-key-init")
                  }));else if (t.altKey) ;else {
                    if (void 0 !== f) return m.onSelect(ee({
                      event: cc11001100_hook("event", t, "object-key-init"),
                      item: cc11001100_hook("item", u, "object-key-init"),
                      itemInputValue: cc11001100_hook("itemInputValue", s, "object-key-init"),
                      itemUrl: cc11001100_hook("itemUrl", f, "object-key-init"),
                      refresh: cc11001100_hook("refresh", n, "object-key-init"),
                      source: cc11001100_hook("source", m, "object-key-init"),
                      state: cc11001100_hook("state", o.getState(), "object-key-init")
                    }, a)), void r.navigator.navigate({
                      itemUrl: cc11001100_hook("itemUrl", f, "object-key-init"),
                      item: cc11001100_hook("item", u, "object-key-init"),
                      state: cc11001100_hook("state", o.getState(), "object-key-init")
                    });
                    G(ee({
                      event: cc11001100_hook("event", t, "object-key-init"),
                      nextState: {
                        isOpen: cc11001100_hook("isOpen", !1, "object-key-init")
                      },
                      props: cc11001100_hook("props", r, "object-key-init"),
                      query: cc11001100_hook("query", s, "object-key-init"),
                      refresh: cc11001100_hook("refresh", n, "object-key-init"),
                      store: cc11001100_hook("store", o, "object-key-init")
                    }, a)).then(function () {
                      m.onSelect(ee({
                        event: cc11001100_hook("event", t, "object-key-init"),
                        item: cc11001100_hook("item", u, "object-key-init"),
                        itemInputValue: cc11001100_hook("itemInputValue", s, "object-key-init"),
                        itemUrl: cc11001100_hook("itemUrl", f, "object-key-init"),
                        refresh: cc11001100_hook("refresh", n, "object-key-init"),
                        source: cc11001100_hook("source", m, "object-key-init"),
                        state: cc11001100_hook("state", o.getState(), "object-key-init")
                      }, a));
                    });
                  }
                }
              }(se({
                event: cc11001100_hook("event", e, "object-key-init"),
                props: cc11001100_hook("props", t, "object-key-init"),
                refresh: cc11001100_hook("refresh", r, "object-key-init"),
                store: cc11001100_hook("store", n, "object-key-init")
              }, o));
            },
            onFocus: cc11001100_hook("onFocus", c, "object-key-init"),
            onBlur: cc11001100_hook("onBlur", m, "object-key-init"),
            onClick: function (r) {
              e.inputElement !== t.environment.document.activeElement || n.getState().isOpen || c(r);
            }
          }, s);
        },
        getPanelProps: function (e) {
          return se({
            onMouseDown: function (e) {
              e.preventDefault();
            },
            onMouseLeave: function () {
              n.dispatch("mouseleave", null);
            }
          }, e);
        },
        getListProps: function (e) {
          return se({
            role: cc11001100_hook("role", "listbox", "object-key-init"),
            "aria-labelledby": cc11001100_hook("aria-labelledby", "".concat(t.id, "-label"), "object-key-init"),
            id: cc11001100_hook("id", "".concat(t.id, "-list"), "object-key-init")
          }, e);
        },
        getItemProps: function (e) {
          var a = cc11001100_hook("a", e.item, "var-init"),
              c = cc11001100_hook("c", e.source, "var-init"),
              i = cc11001100_hook("i", me(e, le), "var-init");
          return se({
            id: cc11001100_hook("id", "".concat(t.id, "-item-").concat(a.__autocomplete_id), "object-key-init"),
            role: cc11001100_hook("role", "option", "object-key-init"),
            "aria-selected": cc11001100_hook("aria-selected", n.getState().activeItemId === a.__autocomplete_id, "object-key-init"),
            onMouseMove: function (e) {
              if (a.__autocomplete_id !== n.getState().activeItemId) {
                n.dispatch("mousemove", a.__autocomplete_id);
                var t = cc11001100_hook("t", F(n.getState()), "var-init");

                if (null !== n.getState().activeItemId && t) {
                  var c = cc11001100_hook("c", t.item, "var-init"),
                      i = cc11001100_hook("i", t.itemInputValue, "var-init"),
                      l = cc11001100_hook("l", t.itemUrl, "var-init"),
                      u = cc11001100_hook("u", t.source, "var-init");
                  u.onActive(se({
                    event: cc11001100_hook("event", e, "object-key-init"),
                    item: cc11001100_hook("item", c, "object-key-init"),
                    itemInputValue: cc11001100_hook("itemInputValue", i, "object-key-init"),
                    itemUrl: cc11001100_hook("itemUrl", l, "object-key-init"),
                    refresh: cc11001100_hook("refresh", r, "object-key-init"),
                    source: cc11001100_hook("source", u, "object-key-init"),
                    state: cc11001100_hook("state", n.getState(), "object-key-init")
                  }, o));
                }
              }
            },
            onMouseDown: function (e) {
              e.preventDefault();
            },
            onClick: function (e) {
              var i = cc11001100_hook("i", c.getItemInputValue({
                item: cc11001100_hook("item", a, "object-key-init"),
                state: cc11001100_hook("state", n.getState(), "object-key-init")
              }), "var-init"),
                  l = cc11001100_hook("l", c.getItemUrl({
                item: cc11001100_hook("item", a, "object-key-init"),
                state: cc11001100_hook("state", n.getState(), "object-key-init")
              }), "var-init");
              (l ? Promise.resolve() : G(se({
                event: cc11001100_hook("event", e, "object-key-init"),
                nextState: {
                  isOpen: cc11001100_hook("isOpen", !1, "object-key-init")
                },
                props: cc11001100_hook("props", t, "object-key-init"),
                query: cc11001100_hook("query", i, "object-key-init"),
                refresh: cc11001100_hook("refresh", r, "object-key-init"),
                store: cc11001100_hook("store", n, "object-key-init")
              }, o))).then(function () {
                c.onSelect(se({
                  event: cc11001100_hook("event", e, "object-key-init"),
                  item: cc11001100_hook("item", a, "object-key-init"),
                  itemInputValue: cc11001100_hook("itemInputValue", i, "object-key-init"),
                  itemUrl: cc11001100_hook("itemUrl", l, "object-key-init"),
                  refresh: cc11001100_hook("refresh", r, "object-key-init"),
                  source: cc11001100_hook("source", c, "object-key-init"),
                  state: cc11001100_hook("state", n.getState(), "object-key-init")
                }, o));
              });
            }
          }, i);
        }
      };
    }

    var de = cc11001100_hook("de", [{
      segment: cc11001100_hook("segment", "autocomplete-core", "object-key-init"),
      version: cc11001100_hook("version", "1.7.4", "object-key-init")
    }], "var-init");

    function he(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function ve(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? he(Object(r), !0).forEach(function (t) {
          ye(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : he(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function ye(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function ge(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t,
          r,
          n,
          o,
          a = cc11001100_hook("a", e.plugins, "var-init"),
          c = cc11001100_hook("c", e.options, "var-init"),
          i = cc11001100_hook("i", null === (t = cc11001100_hook("t", ((null === (r = cc11001100_hook("r", c.__autocomplete_metadata, "assign")) || void 0 === r ? void 0 : r.userAgents) || [])[0], "assign")) || void 0 === t ? void 0 : t.segment, "var-init"),
          l = cc11001100_hook("l", i ? ye({}, i, Object.keys((null === (n = cc11001100_hook("n", c.__autocomplete_metadata, "assign")) || void 0 === n ? void 0 : n.options) || {})) : {}, "var-init");
      return {
        plugins: cc11001100_hook("plugins", a.map(function (e) {
          return {
            name: cc11001100_hook("name", e.name, "object-key-init"),
            options: cc11001100_hook("options", Object.keys(e.__autocomplete_pluginOptions || []), "object-key-init")
          };
        }), "object-key-init"),
        options: cc11001100_hook("options", ve({
          "autocomplete-core": cc11001100_hook("autocomplete-core", Object.keys(c), "object-key-init")
        }, l), "object-key-init"),
        ua: cc11001100_hook("ua", de.concat((null === (o = cc11001100_hook("o", c.__autocomplete_metadata, "assign")) || void 0 === o ? void 0 : o.userAgents) || []), "object-key-init")
      };
    }

    function be(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t,
          r = cc11001100_hook("r", e.state, "var-init");
      return !1 === r.isOpen || null === r.activeItemId ? null : (null === (t = cc11001100_hook("t", F(r), "assign")) || void 0 === t ? void 0 : t.itemInputValue) || null;
    }

    function Oe(e, t, r, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (!r) return null;
      if (e < 0 && (null === t || null !== n && 0 === t)) return r + e;
      var o = cc11001100_hook("o", (null === t ? -1 : t) + e, "var-init");
      return o <= -1 || o >= r ? null === n ? null : 0 : o;
    }

    function Se(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function Ee(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? Se(Object(r), !0).forEach(function (t) {
          je(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Se(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function je(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    var we = function (e, t) {
      switch (t.type) {
        case "setActiveItemId":
        case "mousemove":
          return Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", t.payload, "object-key-init")
          });

        case "setQuery":
          return Ee(Ee({}, e), {}, {
            query: cc11001100_hook("query", t.payload, "object-key-init"),
            completion: cc11001100_hook("completion", null, "object-key-init")
          });

        case "setCollections":
          return Ee(Ee({}, e), {}, {
            collections: cc11001100_hook("collections", t.payload, "object-key-init")
          });

        case "setIsOpen":
          return Ee(Ee({}, e), {}, {
            isOpen: cc11001100_hook("isOpen", t.payload, "object-key-init")
          });

        case "setStatus":
          return Ee(Ee({}, e), {}, {
            status: cc11001100_hook("status", t.payload, "object-key-init")
          });

        case "setContext":
          return Ee(Ee({}, e), {}, {
            context: cc11001100_hook("context", Ee(Ee({}, e.context), t.payload), "object-key-init")
          });

        case "ArrowDown":
          var r = cc11001100_hook("r", Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : Oe(1, e.activeItemId, s(e), t.props.defaultActiveItemId), "object-key-init")
          }), "var-init");
          return Ee(Ee({}, r), {}, {
            completion: cc11001100_hook("completion", be({
              state: cc11001100_hook("state", r, "object-key-init")
            }), "object-key-init")
          });

        case "ArrowUp":
          var n = cc11001100_hook("n", Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", Oe(-1, e.activeItemId, s(e), t.props.defaultActiveItemId), "object-key-init")
          }), "var-init");
          return Ee(Ee({}, n), {}, {
            completion: cc11001100_hook("completion", be({
              state: cc11001100_hook("state", n, "object-key-init")
            }), "object-key-init")
          });

        case "Escape":
          return e.isOpen ? Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", null, "object-key-init"),
            isOpen: cc11001100_hook("isOpen", !1, "object-key-init"),
            completion: cc11001100_hook("completion", null, "object-key-init")
          }) : Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", null, "object-key-init"),
            query: cc11001100_hook("query", "", "object-key-init"),
            status: cc11001100_hook("status", "idle", "object-key-init"),
            collections: cc11001100_hook("collections", [], "object-key-init")
          });

        case "submit":
          return Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", null, "object-key-init"),
            isOpen: cc11001100_hook("isOpen", !1, "object-key-init"),
            status: cc11001100_hook("status", "idle", "object-key-init")
          });

        case "reset":
          return Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null, "object-key-init"),
            status: cc11001100_hook("status", "idle", "object-key-init"),
            query: cc11001100_hook("query", "", "object-key-init")
          });

        case "focus":
          return Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", t.props.defaultActiveItemId, "object-key-init"),
            isOpen: cc11001100_hook("isOpen", (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
              state: cc11001100_hook("state", e, "object-key-init")
            }), "object-key-init")
          });

        case "blur":
          return t.props.debug ? e : Ee(Ee({}, e), {}, {
            isOpen: cc11001100_hook("isOpen", !1, "object-key-init"),
            activeItemId: cc11001100_hook("activeItemId", null, "object-key-init")
          });

        case "mouseleave":
          return Ee(Ee({}, e), {}, {
            activeItemId: cc11001100_hook("activeItemId", t.props.defaultActiveItemId, "object-key-init")
          });

        default:
          return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."), e;
      }
    };

    function Pe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function Ie(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? Pe(Object(r), !0).forEach(function (t) {
          De(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pe(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function De(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function Ce(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", [], "var-init"),
          r = cc11001100_hook("r", function (e, t) {
        var r,
            n = cc11001100_hook("n", "undefined" != typeof window ? window : {}, "var-init"),
            o = cc11001100_hook("o", e.plugins || [], "var-init");
        return b(b({
          debug: cc11001100_hook("debug", !1, "object-key-init"),
          openOnFocus: cc11001100_hook("openOnFocus", !1, "object-key-init"),
          placeholder: cc11001100_hook("placeholder", "", "object-key-init"),
          autoFocus: cc11001100_hook("autoFocus", !1, "object-key-init"),
          defaultActiveItemId: cc11001100_hook("defaultActiveItemId", null, "object-key-init"),
          stallThreshold: cc11001100_hook("stallThreshold", 300, "object-key-init"),
          environment: cc11001100_hook("environment", n, "object-key-init"),
          shouldPanelOpen: function (e) {
            return s(e.state) > 0;
          },
          reshape: function (e) {
            return e.sources;
          }
        }, e), {}, {
          id: cc11001100_hook("id", null !== (r = cc11001100_hook("r", e.id, "assign")) && void 0 !== r ? r : "autocomplete-".concat(f++), "object-key-init"),
          plugins: cc11001100_hook("plugins", o, "object-key-init"),
          initialState: cc11001100_hook("initialState", b({
            activeItemId: cc11001100_hook("activeItemId", null, "object-key-init"),
            query: cc11001100_hook("query", "", "object-key-init"),
            completion: cc11001100_hook("completion", null, "object-key-init"),
            collections: cc11001100_hook("collections", [], "object-key-init"),
            isOpen: cc11001100_hook("isOpen", !1, "object-key-init"),
            status: cc11001100_hook("status", "idle", "object-key-init"),
            context: {}
          }, e.initialState), "object-key-init"),
          onStateChange: function (t) {
            var r;
            null === (r = cc11001100_hook("r", e.onStateChange, "assign")) || void 0 === r || r.call(e, t), o.forEach(function (e) {
              var r;
              return null === (r = cc11001100_hook("r", e.onStateChange, "assign")) || void 0 === r ? void 0 : r.call(e, t);
            });
          },
          onSubmit: function (t) {
            var r;
            null === (r = cc11001100_hook("r", e.onSubmit, "assign")) || void 0 === r || r.call(e, t), o.forEach(function (e) {
              var r;
              return null === (r = cc11001100_hook("r", e.onSubmit, "assign")) || void 0 === r ? void 0 : r.call(e, t);
            });
          },
          onReset: function (t) {
            var r;
            null === (r = cc11001100_hook("r", e.onReset, "assign")) || void 0 === r || r.call(e, t), o.forEach(function (e) {
              var r;
              return null === (r = cc11001100_hook("r", e.onReset, "assign")) || void 0 === r ? void 0 : r.call(e, t);
            });
          },
          getSources: function (r) {
            return Promise.all([].concat(v(o.map(function (e) {
              return e.getSources;
            })), [e.getSources]).filter(Boolean).map(function (e) {
              return h(e, r);
            })).then(function (e) {
              return c(e);
            }).then(function (e) {
              return e.map(function (e) {
                return b(b({}, e), {}, {
                  onSelect: function (r) {
                    e.onSelect(r), t.forEach(function (e) {
                      var t;
                      return null === (t = cc11001100_hook("t", e.onSelect, "assign")) || void 0 === t ? void 0 : t.call(e, r);
                    });
                  },
                  onActive: function (r) {
                    e.onActive(r), t.forEach(function (e) {
                      var t;
                      return null === (t = cc11001100_hook("t", e.onActive, "assign")) || void 0 === t ? void 0 : t.call(e, r);
                    });
                  }
                });
              });
            });
          },
          navigator: cc11001100_hook("navigator", b({
            navigate: function (e) {
              var t = cc11001100_hook("t", e.itemUrl, "var-init");
              n.location.assign(t);
            },
            navigateNewTab: function (e) {
              var t = cc11001100_hook("t", e.itemUrl, "var-init"),
                  r = cc11001100_hook("r", n.open(t, "_blank", "noopener"), "var-init");
              null == r || r.focus();
            },
            navigateNewWindow: function (e) {
              var t = cc11001100_hook("t", e.itemUrl, "var-init");
              n.open(t, "_blank", "noopener");
            }
          }, e.navigator), "object-key-init")
        });
      }(e, t), "var-init"),
          n = cc11001100_hook("n", a(we, r, function (e) {
        var t = cc11001100_hook("t", e.prevState, "var-init"),
            n = cc11001100_hook("n", e.state, "var-init");
        r.onStateChange(Ie({
          prevState: cc11001100_hook("prevState", t, "object-key-init"),
          state: cc11001100_hook("state", n, "object-key-init"),
          refresh: cc11001100_hook("refresh", u, "object-key-init")
        }, o));
      }), "var-init"),
          o = cc11001100_hook("o", function (e) {
        var t = cc11001100_hook("t", e.store, "var-init");
        return {
          setActiveItemId: function (e) {
            t.dispatch("setActiveItemId", e);
          },
          setQuery: function (e) {
            t.dispatch("setQuery", e);
          },
          setCollections: function (e) {
            var r = cc11001100_hook("r", 0, "var-init"),
                n = cc11001100_hook("n", e.map(function (e) {
              return l(l({}, e), {}, {
                items: cc11001100_hook("items", c(e.items).map(function (e) {
                  return l(l({}, e), {}, {
                    __autocomplete_id: cc11001100_hook("__autocomplete_id", r++, "object-key-init")
                  });
                }), "object-key-init")
              });
            }), "var-init");
            t.dispatch("setCollections", n);
          },
          setIsOpen: function (e) {
            t.dispatch("setIsOpen", e);
          },
          setStatus: function (e) {
            t.dispatch("setStatus", e);
          },
          setContext: function (e) {
            t.dispatch("setContext", e);
          }
        };
      }({
        store: cc11001100_hook("store", n, "object-key-init")
      }), "var-init"),
          i = cc11001100_hook("i", pe(Ie({
        props: cc11001100_hook("props", r, "object-key-init"),
        refresh: cc11001100_hook("refresh", u, "object-key-init"),
        store: cc11001100_hook("store", n, "object-key-init")
      }, o)), "var-init");

      function u() {
        return G(Ie({
          event: cc11001100_hook("event", new Event("input"), "object-key-init"),
          nextState: {
            isOpen: cc11001100_hook("isOpen", n.getState().isOpen, "object-key-init")
          },
          props: cc11001100_hook("props", r, "object-key-init"),
          query: cc11001100_hook("query", n.getState().query, "object-key-init"),
          refresh: cc11001100_hook("refresh", u, "object-key-init"),
          store: cc11001100_hook("store", n, "object-key-init")
        }, o));
      }

      return r.plugins.forEach(function (e) {
        var r;
        return null === (r = cc11001100_hook("r", e.subscribe, "assign")) || void 0 === r ? void 0 : r.call(e, Ie(Ie({}, o), {}, {
          refresh: cc11001100_hook("refresh", u, "object-key-init"),
          onSelect: function (e) {
            t.push({
              onSelect: cc11001100_hook("onSelect", e, "object-key-init")
            });
          },
          onActive: function (e) {
            t.push({
              onActive: cc11001100_hook("onActive", e, "object-key-init")
            });
          }
        }));
      }), function (e) {
        var t,
            r,
            n = cc11001100_hook("n", e.metadata, "var-init"),
            o = cc11001100_hook("o", e.environment, "var-init");

        if (null === (t = cc11001100_hook("t", o.navigator, "assign")) || void 0 === t || null === (r = cc11001100_hook("r", t.userAgent, "assign")) || void 0 === r ? void 0 : r.includes("Algolia Crawler")) {
          var a = cc11001100_hook("a", o.document.createElement("meta"), "var-init"),
              c = cc11001100_hook("c", o.document.querySelector("head"), "var-init");
          a.name = cc11001100_hook("a.name", "algolia:metadata", "assign"), setTimeout(function () {
            a.content = cc11001100_hook("a.content", JSON.stringify(n), "assign"), c.appendChild(a);
          }, 0);
        }
      }({
        metadata: cc11001100_hook("metadata", ge({
          plugins: cc11001100_hook("plugins", r.plugins, "object-key-init"),
          options: cc11001100_hook("options", e, "object-key-init")
        }), "object-key-init"),
        environment: cc11001100_hook("environment", r.environment, "object-key-init")
      }), Ie(Ie({
        refresh: cc11001100_hook("refresh", u, "object-key-init")
      }, i), o);
    }

    var ke = cc11001100_hook("ke", r(27378), "var-init"),
        Ae = cc11001100_hook("Ae", 64, "var-init");

    function xe(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.translations, "var-init"),
          r = cc11001100_hook("r", (void 0 === t ? {} : t).searchByText, "var-init"),
          n = cc11001100_hook("n", void 0 === r ? "Search by" : r, "var-init");
      return ke.createElement("a", {
        href: cc11001100_hook("href", "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), "object-key-init"),
        target: cc11001100_hook("target", "_blank", "object-key-init"),
        rel: cc11001100_hook("rel", "noopener noreferrer", "object-key-init")
      }, ke.createElement("span", {
        className: cc11001100_hook("className", "DocSearch-Label", "object-key-init")
      }, n), ke.createElement("svg", {
        width: cc11001100_hook("width", "77", "object-key-init"),
        height: cc11001100_hook("height", "19", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", "Algolia", "object-key-init"),
        role: cc11001100_hook("role", "img", "object-key-init"),
        id: cc11001100_hook("id", "Layer_1", "object-key-init"),
        xmlns: cc11001100_hook("xmlns", "http://www.w3.org/2000/svg", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 2196.2 500", "object-key-init")
      }, ke.createElement("defs", null, ke.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-2", "object-key-init"),
        d: cc11001100_hook("d", "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z", "object-key-init")
      }), ke.createElement("rect", {
        className: cc11001100_hook("className", "cls-1", "object-key-init"),
        x: cc11001100_hook("x", "1845.88", "object-key-init"),
        y: cc11001100_hook("y", "104.73", "object-key-init"),
        width: cc11001100_hook("width", "62.58", "object-key-init"),
        height: cc11001100_hook("height", "277.9", "object-key-init"),
        rx: cc11001100_hook("rx", "5.9", "object-key-init"),
        ry: cc11001100_hook("ry", "5.9", "object-key-init")
      }), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-2", "object-key-init"),
        d: cc11001100_hook("d", "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z", "object-key-init")
      }), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-2", "object-key-init"),
        d: cc11001100_hook("d", "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z", "object-key-init")
      }), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-2", "object-key-init"),
        d: cc11001100_hook("d", "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z", "object-key-init")
      }), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-2", "object-key-init"),
        d: cc11001100_hook("d", "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z", "object-key-init")
      }), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-2", "object-key-init"),
        d: cc11001100_hook("d", "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z", "object-key-init")
      }), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-2", "object-key-init"),
        d: cc11001100_hook("d", "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z", "object-key-init")
      }), ke.createElement("path", {
        className: cc11001100_hook("className", "cls-1", "object-key-init"),
        d: cc11001100_hook("d", "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z", "object-key-init")
      })));
    }

    function Ne(e) {
      cc11001100_hook("e", e, "function-parameter");
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "15", "object-key-init"),
        height: cc11001100_hook("height", "15", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", e.ariaLabel, "object-key-init"),
        role: cc11001100_hook("role", "img", "object-key-init")
      }, ke.createElement("g", {
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init"),
        strokeWidth: cc11001100_hook("strokeWidth", "1.2", "object-key-init")
      }, e.children));
    }

    function Re(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.translations, "var-init"),
          r = cc11001100_hook("r", void 0 === t ? {} : t, "var-init"),
          n = cc11001100_hook("n", r.selectText, "var-init"),
          o = cc11001100_hook("o", void 0 === n ? "to select" : n, "var-init"),
          a = cc11001100_hook("a", r.selectKeyAriaLabel, "var-init"),
          c = cc11001100_hook("c", void 0 === a ? "Enter key" : a, "var-init"),
          i = cc11001100_hook("i", r.navigateText, "var-init"),
          l = cc11001100_hook("l", void 0 === i ? "to navigate" : i, "var-init"),
          u = cc11001100_hook("u", r.navigateUpKeyAriaLabel, "var-init"),
          s = cc11001100_hook("s", void 0 === u ? "Arrow up" : u, "var-init"),
          f = cc11001100_hook("f", r.navigateDownKeyAriaLabel, "var-init"),
          m = cc11001100_hook("m", void 0 === f ? "Arrow down" : f, "var-init"),
          p = cc11001100_hook("p", r.closeText, "var-init"),
          d = cc11001100_hook("d", void 0 === p ? "to close" : p, "var-init"),
          h = cc11001100_hook("h", r.closeKeyAriaLabel, "var-init"),
          v = cc11001100_hook("v", void 0 === h ? "Escape key" : h, "var-init"),
          y = cc11001100_hook("y", r.searchByText, "var-init"),
          g = cc11001100_hook("g", void 0 === y ? "Search by" : y, "var-init");
      return ke.createElement(ke.Fragment, null, ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Logo", "object-key-init")
      }, ke.createElement(xe, {
        translations: {
          searchByText: cc11001100_hook("searchByText", g, "object-key-init")
        }
      })), ke.createElement("ul", {
        className: cc11001100_hook("className", "DocSearch-Commands", "object-key-init")
      }, ke.createElement("li", null, ke.createElement("kbd", {
        className: cc11001100_hook("className", "DocSearch-Commands-Key", "object-key-init")
      }, ke.createElement(Ne, {
        ariaLabel: cc11001100_hook("ariaLabel", c, "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3", "object-key-init")
      }))), ke.createElement("span", {
        className: cc11001100_hook("className", "DocSearch-Label", "object-key-init")
      }, o)), ke.createElement("li", null, ke.createElement("kbd", {
        className: cc11001100_hook("className", "DocSearch-Commands-Key", "object-key-init")
      }, ke.createElement(Ne, {
        ariaLabel: cc11001100_hook("ariaLabel", m, "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M7.5 3.5v8M10.5 8.5l-3 3-3-3", "object-key-init")
      }))), ke.createElement("kbd", {
        className: cc11001100_hook("className", "DocSearch-Commands-Key", "object-key-init")
      }, ke.createElement(Ne, {
        ariaLabel: cc11001100_hook("ariaLabel", s, "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M7.5 11.5v-8M10.5 6.5l-3-3-3 3", "object-key-init")
      }))), ke.createElement("span", {
        className: cc11001100_hook("className", "DocSearch-Label", "object-key-init")
      }, l)), ke.createElement("li", null, ke.createElement("kbd", {
        className: cc11001100_hook("className", "DocSearch-Commands-Key", "object-key-init")
      }, ke.createElement(Ne, {
        ariaLabel: cc11001100_hook("ariaLabel", v, "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956", "object-key-init")
      }))), ke.createElement("span", {
        className: cc11001100_hook("className", "DocSearch-Label", "object-key-init")
      }, d))));
    }

    function qe(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.hit, "var-init"),
          r = cc11001100_hook("r", e.children, "var-init");
      return ke.createElement("a", {
        href: cc11001100_hook("href", t.url, "object-key-init")
      }, r);
    }

    function Te() {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "40", "object-key-init"),
        height: cc11001100_hook("height", "40", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0", "object-key-init")
      }));
    }

    function _e(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.translations, "var-init"),
          r = cc11001100_hook("r", void 0 === t ? {} : t, "var-init"),
          n = cc11001100_hook("n", r.titleText, "var-init"),
          o = cc11001100_hook("o", void 0 === n ? "Unable to fetch results" : n, "var-init"),
          a = cc11001100_hook("a", r.helpText, "var-init"),
          c = cc11001100_hook("c", void 0 === a ? "You might want to check your network connection." : a, "var-init");
      return ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-ErrorScreen", "object-key-init")
      }, ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Screen-Icon", "object-key-init")
      }, ke.createElement(Te, null)), ke.createElement("p", {
        className: cc11001100_hook("className", "DocSearch-Title", "object-key-init")
      }, o), ke.createElement("p", {
        className: cc11001100_hook("className", "DocSearch-Help", "object-key-init")
      }, c));
    }

    function Le() {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "40", "object-key-init"),
        height: cc11001100_hook("height", "40", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2", "object-key-init")
      }));
    }

    var Me = cc11001100_hook("Me", ["translations"], "var-init");

    function He(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (e) {
        if (Array.isArray(e)) return Fe(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Fe(e, t);
        var r = cc11001100_hook("r", Object.prototype.toString.call(e).slice(8, -1), "var-init");
        "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign"));
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fe(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Fe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));

      for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", new Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");

      return n;
    }

    function Ue(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    function Be(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.translations, "var-init"),
          r = cc11001100_hook("r", void 0 === t ? {} : t, "var-init"),
          n = cc11001100_hook("n", Ue(e, Me), "var-init"),
          o = cc11001100_hook("o", r.noResultsText, "var-init"),
          a = cc11001100_hook("a", void 0 === o ? "No results for" : o, "var-init"),
          c = cc11001100_hook("c", r.suggestedQueryText, "var-init"),
          i = cc11001100_hook("i", void 0 === c ? "Try searching for" : c, "var-init"),
          l = cc11001100_hook("l", r.reportMissingResultsText, "var-init"),
          u = cc11001100_hook("u", void 0 === l ? "Believe this query should return results?" : l, "var-init"),
          s = cc11001100_hook("s", r.reportMissingResultsLinkText, "var-init"),
          f = cc11001100_hook("f", void 0 === s ? "Let us know." : s, "var-init"),
          m = cc11001100_hook("m", n.state.context.searchSuggestions, "var-init");
      return ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-NoResults", "object-key-init")
      }, ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Screen-Icon", "object-key-init")
      }, ke.createElement(Le, null)), ke.createElement("p", {
        className: cc11001100_hook("className", "DocSearch-Title", "object-key-init")
      }, a, ' "', ke.createElement("strong", null, n.state.query), '"'), m && m.length > 0 && ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-NoResults-Prefill-List", "object-key-init")
      }, ke.createElement("p", {
        className: cc11001100_hook("className", "DocSearch-Help", "object-key-init")
      }, i, ":"), ke.createElement("ul", null, m.slice(0, 3).reduce(function (e, t) {
        return [].concat(He(e), [ke.createElement("li", {
          key: cc11001100_hook("key", t, "object-key-init")
        }, ke.createElement("button", {
          className: cc11001100_hook("className", "DocSearch-Prefill", "object-key-init"),
          key: cc11001100_hook("key", t, "object-key-init"),
          type: cc11001100_hook("type", "button", "object-key-init"),
          onClick: function () {
            n.setQuery(t.toLowerCase() + " "), n.refresh(), n.inputRef.current.focus();
          }
        }, t))]);
      }, []))), n.getMissingResultsUrl && ke.createElement("p", {
        className: cc11001100_hook("className", "DocSearch-Help", "object-key-init")
      }, "".concat(u, " "), ke.createElement("a", {
        href: cc11001100_hook("href", n.getMissingResultsUrl({
          query: cc11001100_hook("query", n.state.query, "object-key-init")
        }), "object-key-init"),
        target: cc11001100_hook("target", "_blank", "object-key-init"),
        rel: cc11001100_hook("rel", "noopener noreferrer", "object-key-init")
      }, f)));
    }

    var Ve = function () {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }));
    };

    function Ke(e) {
      cc11001100_hook("e", e, "function-parameter");

      switch (e.type) {
        case "lvl1":
          return ke.createElement(Ve, null);

        case "content":
          return ke.createElement(Je, null);

        default:
          return ke.createElement($e, null);
      }
    }

    function $e() {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }));
    }

    function Je() {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M17 5H3h14zm0 5H3h14zm0 5H3h14z", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }));
    }

    function ze() {
      return ke.createElement("svg", {
        className: cc11001100_hook("className", "DocSearch-Hit-Select-Icon", "object-key-init"),
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, ke.createElement("g", {
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M18 3v4c0 2-2 4-4 4H2", "object-key-init")
      }), ke.createElement("path", {
        d: cc11001100_hook("d", "M8 17l-6-6 6-6", "object-key-init")
      })));
    }

    var We = cc11001100_hook("We", ["hit", "attribute", "tagName"], "var-init");

    function Qe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function Ze(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? Qe(Object(r), !0).forEach(function (t) {
          Ge(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qe(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function Ge(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function Ye(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    function Xe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return t.split(".").reduce(function (e, t) {
        return null != e && e[t] ? e[t] : null;
      }, e);
    }

    function et(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.hit, "var-init"),
          r = cc11001100_hook("r", e.attribute, "var-init"),
          n = cc11001100_hook("n", e.tagName, "var-init"),
          o = cc11001100_hook("o", void 0 === n ? "span" : n, "var-init"),
          a = cc11001100_hook("a", Ye(e, We), "var-init");
      return (0, ke.createElement)(o, Ze(Ze({}, a), {}, {
        dangerouslySetInnerHTML: {
          __html: cc11001100_hook("__html", Xe(t, "_snippetResult.".concat(r, ".value")) || Xe(t, r), "object-key-init")
        }
      }));
    }

    function tt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var r = cc11001100_hook("r", null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"], "var-init");
        if (null == r) return;
        var n,
            o,
            a = cc11001100_hook("a", [], "var-init"),
            c = cc11001100_hook("c", !0, "var-init"),
            i = cc11001100_hook("i", !1, "var-init");

        try {
          for (r = cc11001100_hook("r", r.call(e), "assign"); !(c = cc11001100_hook("c", (n = cc11001100_hook("n", r.next(), "assign")).done, "assign")) && (a.push(n.value), !t || a.length !== t); c = cc11001100_hook("c", !0, "assign"));
        } catch (l) {
          i = cc11001100_hook("i", !0, "assign"), o = cc11001100_hook("o", l, "assign");
        } finally {
          try {
            c || null == r.return || r.return();
          } finally {
            if (i) throw o;
          }
        }

        return a;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return rt(e, t);
        var r = cc11001100_hook("r", Object.prototype.toString.call(e).slice(8, -1), "var-init");
        "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign"));
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rt(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function rt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));

      for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", new Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");

      return n;
    }

    function nt() {
      return nt = cc11001100_hook("nt", Object.assign || function (e) {
        for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
          var r = cc11001100_hook("r", arguments[t], "var-init");

          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = cc11001100_hook("e[n]", r[n], "assign"));
        }

        return e;
      }, "assign"), nt.apply(this, arguments);
    }

    function ot(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.collection && 0 !== e.collection.items.length ? ke.createElement("section", {
        className: cc11001100_hook("className", "DocSearch-Hits", "object-key-init")
      }, ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Hit-source", "object-key-init")
      }, e.title), ke.createElement("ul", e.getListProps(), e.collection.items.map(function (t, r) {
        return ke.createElement(at, nt({
          key: cc11001100_hook("key", [e.title, t.objectID].join(":"), "object-key-init"),
          item: cc11001100_hook("item", t, "object-key-init"),
          index: cc11001100_hook("index", r, "object-key-init")
        }, e));
      }))) : null;
    }

    function at(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.item, "var-init"),
          r = cc11001100_hook("r", e.index, "var-init"),
          n = cc11001100_hook("n", e.renderIcon, "var-init"),
          o = cc11001100_hook("o", e.renderAction, "var-init"),
          a = cc11001100_hook("a", e.getItemProps, "var-init"),
          c = cc11001100_hook("c", e.onItemClick, "var-init"),
          i = cc11001100_hook("i", e.collection, "var-init"),
          l = cc11001100_hook("l", e.hitComponent, "var-init"),
          u = cc11001100_hook("u", tt(ke.useState(!1), 2), "var-init"),
          s = cc11001100_hook("s", u[0], "var-init"),
          f = cc11001100_hook("f", u[1], "var-init"),
          m = cc11001100_hook("m", tt(ke.useState(!1), 2), "var-init"),
          p = cc11001100_hook("p", m[0], "var-init"),
          d = cc11001100_hook("d", m[1], "var-init"),
          h = cc11001100_hook("h", ke.useRef(null), "var-init"),
          v = cc11001100_hook("v", l, "var-init");
      return ke.createElement("li", nt({
        className: cc11001100_hook("className", ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", s && "DocSearch-Hit--deleting", p && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), "object-key-init"),
        onTransitionEnd: function () {
          h.current && h.current();
        }
      }, a({
        item: cc11001100_hook("item", t, "object-key-init"),
        source: cc11001100_hook("source", i.source, "object-key-init"),
        onClick: function () {
          c(t);
        }
      })), ke.createElement(v, {
        hit: cc11001100_hook("hit", t, "object-key-init")
      }, ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Hit-Container", "object-key-init")
      }, n({
        item: cc11001100_hook("item", t, "object-key-init"),
        index: cc11001100_hook("index", r, "object-key-init")
      }), t.hierarchy[t.type] && "lvl1" === t.type && ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Hit-content-wrapper", "object-key-init")
      }, ke.createElement(et, {
        className: cc11001100_hook("className", "DocSearch-Hit-title", "object-key-init"),
        hit: cc11001100_hook("hit", t, "object-key-init"),
        attribute: cc11001100_hook("attribute", "hierarchy.lvl1", "object-key-init")
      }), t.content && ke.createElement(et, {
        className: cc11001100_hook("className", "DocSearch-Hit-path", "object-key-init"),
        hit: cc11001100_hook("hit", t, "object-key-init"),
        attribute: cc11001100_hook("attribute", "content", "object-key-init")
      })), t.hierarchy[t.type] && ("lvl2" === t.type || "lvl3" === t.type || "lvl4" === t.type || "lvl5" === t.type || "lvl6" === t.type) && ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Hit-content-wrapper", "object-key-init")
      }, ke.createElement(et, {
        className: cc11001100_hook("className", "DocSearch-Hit-title", "object-key-init"),
        hit: cc11001100_hook("hit", t, "object-key-init"),
        attribute: cc11001100_hook("attribute", "hierarchy.".concat(t.type), "object-key-init")
      }), ke.createElement(et, {
        className: cc11001100_hook("className", "DocSearch-Hit-path", "object-key-init"),
        hit: cc11001100_hook("hit", t, "object-key-init"),
        attribute: cc11001100_hook("attribute", "hierarchy.lvl1", "object-key-init")
      })), "content" === t.type && ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Hit-content-wrapper", "object-key-init")
      }, ke.createElement(et, {
        className: cc11001100_hook("className", "DocSearch-Hit-title", "object-key-init"),
        hit: cc11001100_hook("hit", t, "object-key-init"),
        attribute: cc11001100_hook("attribute", "content", "object-key-init")
      }), ke.createElement(et, {
        className: cc11001100_hook("className", "DocSearch-Hit-path", "object-key-init"),
        hit: cc11001100_hook("hit", t, "object-key-init"),
        attribute: cc11001100_hook("attribute", "hierarchy.lvl1", "object-key-init")
      })), o({
        item: cc11001100_hook("item", t, "object-key-init"),
        runDeleteTransition: function (e) {
          f(!0), h.current = cc11001100_hook("h.current", e, "assign");
        },
        runFavoriteTransition: function (e) {
          d(!0), h.current = cc11001100_hook("h.current", e, "assign");
        }
      }))));
    }

    var ct = cc11001100_hook("ct", /(<mark>|<\/mark>)/g, "var-init"),
        it = cc11001100_hook("it", RegExp(ct.source), "var-init");

    function lt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t,
          r,
          n,
          o,
          a,
          c = cc11001100_hook("c", e, "var-init");
      if (!c.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
      var i = cc11001100_hook("i", ((c.__docsearch_parent ? null === (t = cc11001100_hook("t", c.__docsearch_parent, "assign")) || void 0 === t || null === (r = cc11001100_hook("r", t._highlightResult, "assign")) || void 0 === r || null === (n = cc11001100_hook("n", r.hierarchy, "assign")) || void 0 === n ? void 0 : n.lvl0 : null === (o = cc11001100_hook("o", e._highlightResult, "assign")) || void 0 === o || null === (a = cc11001100_hook("a", o.hierarchy, "assign")) || void 0 === a ? void 0 : a.lvl0) || {}).value, "var-init");
      return i && it.test(i) ? i.replace(ct, "") : i;
    }

    function ut() {
      return ut = cc11001100_hook("ut", Object.assign || function (e) {
        for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
          var r = cc11001100_hook("r", arguments[t], "var-init");

          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = cc11001100_hook("e[n]", r[n], "assign"));
        }

        return e;
      }, "assign"), ut.apply(this, arguments);
    }

    function st(e) {
      cc11001100_hook("e", e, "function-parameter");
      return ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Dropdown-Container", "object-key-init")
      }, e.state.collections.map(function (t) {
        if (0 === t.items.length) return null;
        var r = cc11001100_hook("r", lt(t.items[0]), "var-init");
        return ke.createElement(ot, ut({}, e, {
          key: cc11001100_hook("key", t.source.sourceId, "object-key-init"),
          title: cc11001100_hook("title", r, "object-key-init"),
          collection: cc11001100_hook("collection", t, "object-key-init"),
          renderIcon: function (e) {
            var r,
                n = cc11001100_hook("n", e.item, "var-init"),
                o = cc11001100_hook("o", e.index, "var-init");
            return ke.createElement(ke.Fragment, null, n.__docsearch_parent && ke.createElement("svg", {
              className: cc11001100_hook("className", "DocSearch-Hit-Tree", "object-key-init"),
              viewBox: cc11001100_hook("viewBox", "0 0 24 54", "object-key-init")
            }, ke.createElement("g", {
              stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
              fill: cc11001100_hook("fill", "none", "object-key-init"),
              fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
              strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
              strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
            }, n.__docsearch_parent !== (null === (r = cc11001100_hook("r", t.items[o + 1], "assign")) || void 0 === r ? void 0 : r.__docsearch_parent) ? ke.createElement("path", {
              d: cc11001100_hook("d", "M8 6v21M20 27H8.3", "object-key-init")
            }) : ke.createElement("path", {
              d: cc11001100_hook("d", "M8 6v42M20 27H8.3", "object-key-init")
            }))), ke.createElement("div", {
              className: cc11001100_hook("className", "DocSearch-Hit-icon", "object-key-init")
            }, ke.createElement(Ke, {
              type: cc11001100_hook("type", n.type, "object-key-init")
            })));
          },
          renderAction: function () {
            return ke.createElement("div", {
              className: cc11001100_hook("className", "DocSearch-Hit-action", "object-key-init")
            }, ke.createElement(ze, null));
          }
        }));
      }), e.resultsFooterComponent && ke.createElement("section", {
        className: cc11001100_hook("className", "DocSearch-HitsFooter", "object-key-init")
      }, ke.createElement(e.resultsFooterComponent, {
        state: cc11001100_hook("state", e.state, "object-key-init")
      })));
    }

    function ft() {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, ke.createElement("g", {
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0", "object-key-init")
      }), ke.createElement("path", {
        d: cc11001100_hook("d", "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13", "object-key-init")
      })));
    }

    function mt() {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }));
    }

    function pt() {
      return ke.createElement("svg", {
        width: cc11001100_hook("width", "20", "object-key-init"),
        height: cc11001100_hook("height", "20", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, ke.createElement("path", {
        d: cc11001100_hook("d", "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
        strokeLinejoin: cc11001100_hook("strokeLinejoin", "round", "object-key-init")
      }));
    }

    var dt = cc11001100_hook("dt", ["translations"], "var-init");

    function ht() {
      return ht = cc11001100_hook("ht", Object.assign || function (e) {
        for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
          var r = cc11001100_hook("r", arguments[t], "var-init");

          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = cc11001100_hook("e[n]", r[n], "assign"));
        }

        return e;
      }, "assign"), ht.apply(this, arguments);
    }

    function vt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    function yt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.translations, "var-init"),
          r = cc11001100_hook("r", void 0 === t ? {} : t, "var-init"),
          n = cc11001100_hook("n", vt(e, dt), "var-init"),
          o = cc11001100_hook("o", r.recentSearchesTitle, "var-init"),
          a = cc11001100_hook("a", void 0 === o ? "Recent" : o, "var-init"),
          c = cc11001100_hook("c", r.noRecentSearchesText, "var-init"),
          i = cc11001100_hook("i", void 0 === c ? "No recent searches" : c, "var-init"),
          l = cc11001100_hook("l", r.saveRecentSearchButtonTitle, "var-init"),
          u = cc11001100_hook("u", void 0 === l ? "Save this search" : l, "var-init"),
          s = cc11001100_hook("s", r.removeRecentSearchButtonTitle, "var-init"),
          f = cc11001100_hook("f", void 0 === s ? "Remove this search from history" : s, "var-init"),
          m = cc11001100_hook("m", r.favoriteSearchesTitle, "var-init"),
          p = cc11001100_hook("p", void 0 === m ? "Favorite" : m, "var-init"),
          d = cc11001100_hook("d", r.removeFavoriteSearchButtonTitle, "var-init"),
          h = cc11001100_hook("h", void 0 === d ? "Remove this search from favorites" : d, "var-init");
      return "idle" === n.state.status && !1 === n.hasCollections ? n.disableUserPersonalization ? null : ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-StartScreen", "object-key-init")
      }, ke.createElement("p", {
        className: cc11001100_hook("className", "DocSearch-Help", "object-key-init")
      }, i)) : !1 === n.hasCollections ? null : ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Dropdown-Container", "object-key-init")
      }, ke.createElement(ot, ht({}, n, {
        title: cc11001100_hook("title", a, "object-key-init"),
        collection: cc11001100_hook("collection", n.state.collections[0], "object-key-init"),
        renderIcon: function () {
          return ke.createElement("div", {
            className: cc11001100_hook("className", "DocSearch-Hit-icon", "object-key-init")
          }, ke.createElement(ft, null));
        },
        renderAction: function (e) {
          var t = cc11001100_hook("t", e.item, "var-init"),
              r = cc11001100_hook("r", e.runFavoriteTransition, "var-init"),
              o = cc11001100_hook("o", e.runDeleteTransition, "var-init");
          return ke.createElement(ke.Fragment, null, ke.createElement("div", {
            className: cc11001100_hook("className", "DocSearch-Hit-action", "object-key-init")
          }, ke.createElement("button", {
            className: cc11001100_hook("className", "DocSearch-Hit-action-button", "object-key-init"),
            title: cc11001100_hook("title", u, "object-key-init"),
            type: cc11001100_hook("type", "submit", "object-key-init"),
            onClick: function (e) {
              e.preventDefault(), e.stopPropagation(), r(function () {
                n.favoriteSearches.add(t), n.recentSearches.remove(t), n.refresh();
              });
            }
          }, ke.createElement(mt, null))), ke.createElement("div", {
            className: cc11001100_hook("className", "DocSearch-Hit-action", "object-key-init")
          }, ke.createElement("button", {
            className: cc11001100_hook("className", "DocSearch-Hit-action-button", "object-key-init"),
            title: cc11001100_hook("title", f, "object-key-init"),
            type: cc11001100_hook("type", "submit", "object-key-init"),
            onClick: function (e) {
              e.preventDefault(), e.stopPropagation(), o(function () {
                n.recentSearches.remove(t), n.refresh();
              });
            }
          }, ke.createElement(pt, null))));
        }
      })), ke.createElement(ot, ht({}, n, {
        title: cc11001100_hook("title", p, "object-key-init"),
        collection: cc11001100_hook("collection", n.state.collections[1], "object-key-init"),
        renderIcon: function () {
          return ke.createElement("div", {
            className: cc11001100_hook("className", "DocSearch-Hit-icon", "object-key-init")
          }, ke.createElement(mt, null));
        },
        renderAction: function (e) {
          var t = cc11001100_hook("t", e.item, "var-init"),
              r = cc11001100_hook("r", e.runDeleteTransition, "var-init");
          return ke.createElement("div", {
            className: cc11001100_hook("className", "DocSearch-Hit-action", "object-key-init")
          }, ke.createElement("button", {
            className: cc11001100_hook("className", "DocSearch-Hit-action-button", "object-key-init"),
            title: cc11001100_hook("title", h, "object-key-init"),
            type: cc11001100_hook("type", "submit", "object-key-init"),
            onClick: function (e) {
              e.preventDefault(), e.stopPropagation(), r(function () {
                n.favoriteSearches.remove(t), n.refresh();
              });
            }
          }, ke.createElement(pt, null)));
        }
      })));
    }

    var gt = cc11001100_hook("gt", ["translations"], "var-init");

    function bt() {
      return bt = cc11001100_hook("bt", Object.assign || function (e) {
        for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
          var r = cc11001100_hook("r", arguments[t], "var-init");

          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = cc11001100_hook("e[n]", r[n], "assign"));
        }

        return e;
      }, "assign"), bt.apply(this, arguments);
    }

    function Ot(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    var St = cc11001100_hook("St", ke.memo(function (e) {
      var t = cc11001100_hook("t", e.translations, "var-init"),
          r = cc11001100_hook("r", void 0 === t ? {} : t, "var-init"),
          n = cc11001100_hook("n", Ot(e, gt), "var-init");
      if ("error" === n.state.status) return ke.createElement(_e, {
        translations: cc11001100_hook("translations", null == r ? void 0 : r.errorScreen, "object-key-init")
      });
      var o = cc11001100_hook("o", n.state.collections.some(function (e) {
        return e.items.length > 0;
      }), "var-init");
      return n.state.query ? !1 === o ? ke.createElement(Be, bt({}, n, {
        translations: cc11001100_hook("translations", null == r ? void 0 : r.noResultsScreen, "object-key-init")
      })) : ke.createElement(st, n) : ke.createElement(yt, bt({}, n, {
        hasCollections: cc11001100_hook("hasCollections", o, "object-key-init"),
        translations: cc11001100_hook("translations", null == r ? void 0 : r.startScreen, "object-key-init")
      }));
    }, function (e, t) {
      return "loading" === t.state.status || "stalled" === t.state.status;
    }), "var-init");

    function Et() {
      return ke.createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 38 38", "object-key-init"),
        stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
        strokeOpacity: cc11001100_hook("strokeOpacity", ".5", "object-key-init")
      }, ke.createElement("g", {
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init")
      }, ke.createElement("g", {
        transform: cc11001100_hook("transform", "translate(1 1)", "object-key-init"),
        strokeWidth: cc11001100_hook("strokeWidth", "2", "object-key-init")
      }, ke.createElement("circle", {
        strokeOpacity: cc11001100_hook("strokeOpacity", ".3", "object-key-init"),
        cx: cc11001100_hook("cx", "18", "object-key-init"),
        cy: cc11001100_hook("cy", "18", "object-key-init"),
        r: cc11001100_hook("r", "18", "object-key-init")
      }), ke.createElement("path", {
        d: cc11001100_hook("d", "M36 18c0-9.94-8.06-18-18-18", "object-key-init")
      }, ke.createElement("animateTransform", {
        attributeName: cc11001100_hook("attributeName", "transform", "object-key-init"),
        type: cc11001100_hook("type", "rotate", "object-key-init"),
        from: cc11001100_hook("from", "0 18 18", "object-key-init"),
        to: cc11001100_hook("to", "360 18 18", "object-key-init"),
        dur: cc11001100_hook("dur", "1s", "object-key-init"),
        repeatCount: cc11001100_hook("repeatCount", "indefinite", "object-key-init")
      })))));
    }

    var jt = cc11001100_hook("jt", r(56573), "var-init"),
        wt = cc11001100_hook("wt", ["translations"], "var-init");

    function Pt() {
      return Pt = cc11001100_hook("Pt", Object.assign || function (e) {
        for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
          var r = cc11001100_hook("r", arguments[t], "var-init");

          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = cc11001100_hook("e[n]", r[n], "assign"));
        }

        return e;
      }, "assign"), Pt.apply(this, arguments);
    }

    function It(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    function Dt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.translations, "var-init"),
          r = cc11001100_hook("r", void 0 === t ? {} : t, "var-init"),
          n = cc11001100_hook("n", It(e, wt), "var-init"),
          o = cc11001100_hook("o", r.resetButtonTitle, "var-init"),
          a = cc11001100_hook("a", void 0 === o ? "Clear the query" : o, "var-init"),
          c = cc11001100_hook("c", r.resetButtonAriaLabel, "var-init"),
          i = cc11001100_hook("i", void 0 === c ? "Clear the query" : c, "var-init"),
          l = cc11001100_hook("l", r.cancelButtonText, "var-init"),
          u = cc11001100_hook("u", void 0 === l ? "Cancel" : l, "var-init"),
          s = cc11001100_hook("s", r.cancelButtonAriaLabel, "var-init"),
          f = cc11001100_hook("f", void 0 === s ? "Cancel" : s, "var-init"),
          m = cc11001100_hook("m", n.getFormProps({
        inputElement: cc11001100_hook("inputElement", n.inputRef.current, "object-key-init")
      }).onReset, "var-init");
      return ke.useEffect(function () {
        n.autoFocus && n.inputRef.current && n.inputRef.current.focus();
      }, [n.autoFocus, n.inputRef]), ke.useEffect(function () {
        n.isFromSelection && n.inputRef.current && n.inputRef.current.select();
      }, [n.isFromSelection, n.inputRef]), ke.createElement(ke.Fragment, null, ke.createElement("form", {
        className: cc11001100_hook("className", "DocSearch-Form", "object-key-init"),
        onSubmit: function (e) {
          e.preventDefault();
        },
        onReset: cc11001100_hook("onReset", m, "object-key-init")
      }, ke.createElement("label", Pt({
        className: cc11001100_hook("className", "DocSearch-MagnifierLabel", "object-key-init")
      }, n.getLabelProps()), ke.createElement(jt.W, null)), ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-LoadingIndicator", "object-key-init")
      }, ke.createElement(Et, null)), ke.createElement("input", Pt({
        className: cc11001100_hook("className", "DocSearch-Input", "object-key-init"),
        ref: cc11001100_hook("ref", n.inputRef, "object-key-init")
      }, n.getInputProps({
        inputElement: cc11001100_hook("inputElement", n.inputRef.current, "object-key-init"),
        autoFocus: cc11001100_hook("autoFocus", n.autoFocus, "object-key-init"),
        maxLength: cc11001100_hook("maxLength", Ae, "object-key-init")
      }))), ke.createElement("button", {
        type: cc11001100_hook("type", "reset", "object-key-init"),
        title: cc11001100_hook("title", a, "object-key-init"),
        className: cc11001100_hook("className", "DocSearch-Reset", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", i, "object-key-init"),
        hidden: cc11001100_hook("hidden", !n.state.query, "object-key-init")
      }, ke.createElement(pt, null))), ke.createElement("button", {
        className: cc11001100_hook("className", "DocSearch-Cancel", "object-key-init"),
        type: cc11001100_hook("type", "reset", "object-key-init"),
        "aria-label": cc11001100_hook("aria-label", f, "object-key-init"),
        onClick: cc11001100_hook("onClick", n.onClose, "object-key-init")
      }, u));
    }

    var Ct = cc11001100_hook("Ct", ["_highlightResult", "_snippetResult"], "var-init");

    function kt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    function At(e) {
      cc11001100_hook("e", e, "function-parameter");
      return !1 === function () {
        var e = cc11001100_hook("e", "__TEST_KEY__", "var-init");

        try {
          return localStorage.setItem(e, ""), localStorage.removeItem(e), !0;
        } catch (t) {
          return !1;
        }
      }() ? {
        setItem: function () {},
        getItem: function () {
          return [];
        }
      } : {
        setItem: function (t) {
          return window.localStorage.setItem(e, JSON.stringify(t));
        },
        getItem: function () {
          var t = cc11001100_hook("t", window.localStorage.getItem(e), "var-init");
          return t ? JSON.parse(t) : [];
        }
      };
    }

    function xt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.key, "var-init"),
          r = cc11001100_hook("r", e.limit, "var-init"),
          n = cc11001100_hook("n", void 0 === r ? 5 : r, "var-init"),
          o = cc11001100_hook("o", At(t), "var-init"),
          a = cc11001100_hook("a", o.getItem().slice(0, n), "var-init");
      return {
        add: function (e) {
          var t = cc11001100_hook("t", e, "var-init"),
              r = cc11001100_hook("r", (t._highlightResult, t._snippetResult, kt(t, Ct)), "var-init"),
              c = cc11001100_hook("c", a.findIndex(function (e) {
            return e.objectID === r.objectID;
          }), "var-init");
          c > -1 && a.splice(c, 1), a.unshift(r), a = cc11001100_hook("a", a.slice(0, n), "assign"), o.setItem(a);
        },
        remove: function (e) {
          a = cc11001100_hook("a", a.filter(function (t) {
            return t.objectID !== e.objectID;
          }), "assign"), o.setItem(a);
        },
        getAll: function () {
          return a;
        }
      };
    }

    function Nt(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", `algoliasearch-client-js-${e.key}`, "var-init");
      let r;
      const n = cc11001100_hook("n", () => (void 0 === r && (r = cc11001100_hook("r", e.localStorage || window.localStorage, "assign")), r), "var-init"),
            o = cc11001100_hook("o", () => JSON.parse(n().getItem(t) || "{}"), "var-init");
      return {
        get(e, t, r = {
          miss: cc11001100_hook("miss", () => Promise.resolve(), "object-key-init")
        }) {
          return Promise.resolve().then(() => {
            const r = cc11001100_hook("r", JSON.stringify(e), "var-init"),
                  n = cc11001100_hook("n", o()[r], "var-init");
            return Promise.all([n || t(), void 0 !== n]);
          }).then(([e, t]) => Promise.all([e, t || r.miss(e)])).then(([e]) => e);
        },

        set(e, r) {
          return Promise.resolve().then(() => {
            const a = cc11001100_hook("a", o(), "var-init");
            return a[JSON.stringify(e)] = cc11001100_hook("a[JSON.stringify(e)]", r, "assign"), n().setItem(t, JSON.stringify(a)), r;
          });
        },

        delete(e) {
          return Promise.resolve().then(() => {
            const r = cc11001100_hook("r", o(), "var-init");
            delete r[JSON.stringify(e)], n().setItem(t, JSON.stringify(r));
          });
        },

        clear() {
          return Promise.resolve().then(() => {
            n().removeItem(t);
          });
        }

      };
    }

    function Rt(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", [...e.caches], "var-init"),
            r = cc11001100_hook("r", t.shift(), "var-init");
      return void 0 === r ? {
        get(e, t, r = {
          miss: cc11001100_hook("miss", () => Promise.resolve(), "object-key-init")
        }) {
          return t().then(e => Promise.all([e, r.miss(e)])).then(([e]) => e);
        },

        set(e, t) {
          return Promise.resolve(t);
        },

        delete(e) {
          return Promise.resolve();
        },

        clear() {
          return Promise.resolve();
        }

      } : {
        get(e, n, o = {
          miss: cc11001100_hook("miss", () => Promise.resolve(), "object-key-init")
        }) {
          return r.get(e, n, o).catch(() => Rt({
            caches: cc11001100_hook("caches", t, "object-key-init")
          }).get(e, n, o));
        },

        set(e, n) {
          return r.set(e, n).catch(() => Rt({
            caches: cc11001100_hook("caches", t, "object-key-init")
          }).set(e, n));
        },

        delete(e) {
          return r.delete(e).catch(() => Rt({
            caches: cc11001100_hook("caches", t, "object-key-init")
          }).delete(e));
        },

        clear() {
          return r.clear().catch(() => Rt({
            caches: cc11001100_hook("caches", t, "object-key-init")
          }).clear());
        }

      };
    }

    function qt(e = {
      serializable: cc11001100_hook("serializable", !0, "object-key-init")
    }) {
      let t = cc11001100_hook("t", {}, "var-init");
      return {
        get(r, n, o = {
          miss: cc11001100_hook("miss", () => Promise.resolve(), "object-key-init")
        }) {
          const a = cc11001100_hook("a", JSON.stringify(r), "var-init");
          if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
          const c = cc11001100_hook("c", n(), "var-init"),
                i = cc11001100_hook("i", o && o.miss || (() => Promise.resolve()), "var-init");
          return c.then(e => i(e)).then(() => c);
        },

        set(r, n) {
          return t[JSON.stringify(r)] = cc11001100_hook("t[JSON.stringify(r)]", e.serializable ? JSON.stringify(n) : n, "assign"), Promise.resolve(n);
        },

        delete(e) {
          return delete t[JSON.stringify(e)], Promise.resolve();
        },

        clear() {
          return t = cc11001100_hook("t", {}, "assign"), Promise.resolve();
        }

      };
    }

    function Tt(e) {
      cc11001100_hook("e", e, "function-parameter");
      let t = cc11001100_hook("t", e.length - 1, "var-init");

      for (; t > 0; t--) {
        const r = cc11001100_hook("r", Math.floor(Math.random() * (t + 1)), "var-init"),
              n = cc11001100_hook("n", e[t], "var-init");
        e[t] = cc11001100_hook("e[t]", e[r], "assign"), e[r] = cc11001100_hook("e[r]", n, "assign");
      }

      return e;
    }

    function _t(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return t ? (Object.keys(t).forEach(r => {
        e[r] = cc11001100_hook("e[r]", t[r](e), "assign");
      }), e) : e;
    }

    function Lt(e, ...t) {
      cc11001100_hook("e", e, "function-parameter");
      let r = cc11001100_hook("r", 0, "var-init");
      return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
    }

    const Mt = cc11001100_hook("Mt", "4.14.3", "var-init"),
          Ht = cc11001100_hook("Ht", {
      WithinQueryParameters: cc11001100_hook("WithinQueryParameters", 0, "object-key-init"),
      WithinHeaders: cc11001100_hook("WithinHeaders", 1, "object-key-init")
    }, "var-init");

    function Ft(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      const r = cc11001100_hook("r", e || {}, "var-init"),
            n = cc11001100_hook("n", r.data || {}, "var-init");
      return Object.keys(r).forEach(e => {
        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = cc11001100_hook("n[e]", r[e], "assign"));
      }), {
        data: cc11001100_hook("data", Object.entries(n).length > 0 ? n : void 0, "object-key-init"),
        timeout: cc11001100_hook("timeout", r.timeout || t, "object-key-init"),
        headers: cc11001100_hook("headers", r.headers || {}, "object-key-init"),
        queryParameters: cc11001100_hook("queryParameters", r.queryParameters || {}, "object-key-init"),
        cacheable: cc11001100_hook("cacheable", r.cacheable, "object-key-init")
      };
    }

    const Ut = cc11001100_hook("Ut", {
      Read: cc11001100_hook("Read", 1, "object-key-init"),
      Write: cc11001100_hook("Write", 2, "object-key-init"),
      Any: cc11001100_hook("Any", 3, "object-key-init")
    }, "var-init"),
          Bt = cc11001100_hook("Bt", {
      Up: cc11001100_hook("Up", 1, "object-key-init"),
      Down: cc11001100_hook("Down", 2, "object-key-init"),
      Timeouted: cc11001100_hook("Timeouted", 3, "object-key-init")
    }, "var-init"),
          Vt = cc11001100_hook("Vt", 12e4, "var-init");

    function Kt(e, t = Bt.Up) {
      cc11001100_hook("e", e, "function-parameter");
      return { ...e,
        status: t,
        lastUpdate: Date.now()
      };
    }

    function $t(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "string" == typeof e ? {
        protocol: cc11001100_hook("protocol", "https", "object-key-init"),
        url: cc11001100_hook("url", e, "object-key-init"),
        accept: cc11001100_hook("accept", Ut.Any, "object-key-init")
      } : {
        protocol: cc11001100_hook("protocol", e.protocol || "https", "object-key-init"),
        url: cc11001100_hook("url", e.url, "object-key-init"),
        accept: cc11001100_hook("accept", e.accept || Ut.Any, "object-key-init")
      };
    }

    const Jt = cc11001100_hook("Jt", {
      Delete: cc11001100_hook("Delete", "DELETE", "object-key-init"),
      Get: cc11001100_hook("Get", "GET", "object-key-init"),
      Post: cc11001100_hook("Post", "POST", "object-key-init"),
      Put: cc11001100_hook("Put", "PUT", "object-key-init")
    }, "var-init");

    function zt(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return Promise.all(t.map(t => e.get(t, () => Promise.resolve(Kt(t))))).then(e => {
        const r = cc11001100_hook("r", e.filter(e => function (e) {
          return e.status === Bt.Up || Date.now() - e.lastUpdate > Vt;
        }(e)), "var-init"),
              n = cc11001100_hook("n", e.filter(e => function (e) {
          return e.status === Bt.Timeouted && Date.now() - e.lastUpdate <= Vt;
        }(e)), "var-init"),
              o = cc11001100_hook("o", [...r, ...n], "var-init");
        return {
          getTimeout(e, t) {
            return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
          },

          statelessHosts: o.length > 0 ? o.map(e => $t(e)) : t
        };
      });
    }

    const Wt = cc11001100_hook("Wt", (e, t) => (e => {
      const t = cc11001100_hook("t", e.status, "var-init");
      return e.isTimedOut || (({
        isTimedOut: e,
        status: t
      }) => !e && 0 == ~~t)(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100);
    })(e) ? t.onRetry(e) : (({
      status: e
    }) => 2 == ~~(e / 100))(e) ? t.onSuccess(e) : t.onFail(e), "var-init");

    function Qt(e, t, r, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      const o = cc11001100_hook("o", [], "var-init"),
            a = cc11001100_hook("a", function (e, t) {
        if (e.method === Jt.Get || void 0 === e.data && void 0 === t.data) return;
        const r = cc11001100_hook("r", Array.isArray(e.data) ? e.data : { ...e.data,
          ...t.data
        }, "var-init");
        return JSON.stringify(r);
      }(r, n), "var-init"),
            c = cc11001100_hook("c", function (e, t) {
        const r = cc11001100_hook("r", { ...e.headers,
          ...t.headers
        }, "var-init"),
              n = cc11001100_hook("n", {}, "var-init");
        return Object.keys(r).forEach(e => {
          const t = cc11001100_hook("t", r[e], "var-init");
          n[e.toLowerCase()] = cc11001100_hook("n[e.toLowerCase()]", t, "assign");
        }), n;
      }(e, n), "var-init"),
            i = cc11001100_hook("i", r.method, "var-init"),
            l = cc11001100_hook("l", r.method !== Jt.Get ? {} : { ...r.data,
        ...n.data
      }, "var-init"),
            u = cc11001100_hook("u", {
        "x-algolia-agent": cc11001100_hook("x-algolia-agent", e.userAgent.value, "object-key-init"),
        ...e.queryParameters,
        ...l,
        ...n.queryParameters
      }, "var-init");
      let s = cc11001100_hook("s", 0, "var-init");
      const f = cc11001100_hook("f", (t, l) => {
        const m = cc11001100_hook("m", t.pop(), "var-init");
        if (void 0 === m) throw {
          name: cc11001100_hook("name", "RetryError", "object-key-init"),
          message: cc11001100_hook("message", "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", "object-key-init"),
          transporterStackTrace: cc11001100_hook("transporterStackTrace", Xt(o), "object-key-init")
        };
        const p = cc11001100_hook("p", {
          data: cc11001100_hook("data", a, "object-key-init"),
          headers: cc11001100_hook("headers", c, "object-key-init"),
          method: cc11001100_hook("method", i, "object-key-init"),
          url: cc11001100_hook("url", Gt(m, r.path, u), "object-key-init"),
          connectTimeout: cc11001100_hook("connectTimeout", l(s, e.timeouts.connect), "object-key-init"),
          responseTimeout: cc11001100_hook("responseTimeout", l(s, n.timeout), "object-key-init")
        }, "var-init"),
              d = cc11001100_hook("d", e => {
          const r = cc11001100_hook("r", {
            request: cc11001100_hook("request", p, "object-key-init"),
            response: cc11001100_hook("response", e, "object-key-init"),
            host: cc11001100_hook("host", m, "object-key-init"),
            triesLeft: cc11001100_hook("triesLeft", t.length, "object-key-init")
          }, "var-init");
          return o.push(r), r;
        }, "var-init"),
              h = cc11001100_hook("h", {
          onSuccess: cc11001100_hook("onSuccess", e => function (e) {
            try {
              return JSON.parse(e.content);
            } catch (t) {
              throw function (e, t) {
                return {
                  name: cc11001100_hook("name", "DeserializationError", "object-key-init"),
                  message: cc11001100_hook("message", e, "object-key-init"),
                  response: cc11001100_hook("response", t, "object-key-init")
                };
              }(t.message, e);
            }
          }(e), "object-key-init"),

          onRetry(r) {
            const n = cc11001100_hook("n", d(r), "var-init");
            return r.isTimedOut && s++, Promise.all([e.logger.info("Retryable failure", er(n)), e.hostsCache.set(m, Kt(m, r.isTimedOut ? Bt.Timeouted : Bt.Down))]).then(() => f(t, l));
          },

          onFail(e) {
            throw d(e), function ({
              content: e,
              status: t
            }, r) {
              let n = cc11001100_hook("n", e, "var-init");

              try {
                n = cc11001100_hook("n", JSON.parse(e).message, "assign");
              } catch (o) {}

              return function (e, t, r) {
                return {
                  name: cc11001100_hook("name", "ApiError", "object-key-init"),
                  message: cc11001100_hook("message", e, "object-key-init"),
                  status: cc11001100_hook("status", t, "object-key-init"),
                  transporterStackTrace: cc11001100_hook("transporterStackTrace", r, "object-key-init")
                };
              }(n, t, r);
            }(e, Xt(o));
          }

        }, "var-init");
        return e.requester.send(p).then(e => Wt(e, h));
      }, "var-init");
      return zt(e.hostsCache, t).then(e => f([...e.statelessHosts].reverse(), e.getTimeout));
    }

    function Zt(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", {
        value: cc11001100_hook("value", `Algolia for JavaScript (${e})`, "object-key-init"),

        add(e) {
          const r = cc11001100_hook("r", `; ${e.segment}${void 0 !== e.version ? ` (${e.version})` : ""}`, "var-init");
          return -1 === t.value.indexOf(r) && (t.value = cc11001100_hook("t.value", `${t.value}${r}`, "assign")), t;
        }

      }, "var-init");
      return t;
    }

    function Gt(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      const n = cc11001100_hook("n", Yt(r), "var-init");
      let o = cc11001100_hook("o", `${e.protocol}://${e.url}/${"/" === t.charAt(0) ? t.substr(1) : t}`, "var-init");
      return n.length && (o += cc11001100_hook("o", `?${n}`, "assign")), o;
    }

    function Yt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return Object.keys(e).map(t => {
        return Lt("%s=%s", t, (r = cc11001100_hook("r", e[t], "assign"), "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]));
        var r;
      }).join("&");
    }

    function Xt(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.map(e => er(e));
    }

    function er(e) {
      cc11001100_hook("e", e, "function-parameter");
      const t = cc11001100_hook("t", e.request.headers["x-algolia-api-key"] ? {
        "x-algolia-api-key": cc11001100_hook("x-algolia-api-key", "*****", "object-key-init")
      } : {}, "var-init");
      return { ...e,
        request: { ...e.request,
          headers: { ...e.request.headers,
            ...t
          }
        }
      };
    }

    const tr = cc11001100_hook("tr", e => {
      const t = cc11001100_hook("t", e.appId, "var-init"),
            r = cc11001100_hook("r", function (e, t, r) {
        const n = cc11001100_hook("n", {
          "x-algolia-api-key": cc11001100_hook("x-algolia-api-key", r, "object-key-init"),
          "x-algolia-application-id": cc11001100_hook("x-algolia-application-id", t, "object-key-init")
        }, "var-init");
        return {
          headers() {
            return e === Ht.WithinHeaders ? n : {};
          },

          queryParameters() {
            return e === Ht.WithinQueryParameters ? n : {};
          }

        };
      }(void 0 !== e.authMode ? e.authMode : Ht.WithinHeaders, t, e.apiKey), "var-init"),
            n = cc11001100_hook("n", function (e) {
        const {
          hostsCache: t,
          logger: r,
          requester: n,
          requestsCache: o,
          responsesCache: a,
          timeouts: c,
          userAgent: i,
          hosts: l,
          queryParameters: u,
          headers: s
        } = cc11001100_hook("", e, "var-init"),
              f = cc11001100_hook("f", {
          hostsCache: cc11001100_hook("hostsCache", t, "object-key-init"),
          logger: cc11001100_hook("logger", r, "object-key-init"),
          requester: cc11001100_hook("requester", n, "object-key-init"),
          requestsCache: cc11001100_hook("requestsCache", o, "object-key-init"),
          responsesCache: cc11001100_hook("responsesCache", a, "object-key-init"),
          timeouts: cc11001100_hook("timeouts", c, "object-key-init"),
          userAgent: cc11001100_hook("userAgent", i, "object-key-init"),
          headers: cc11001100_hook("headers", s, "object-key-init"),
          queryParameters: cc11001100_hook("queryParameters", u, "object-key-init"),
          hosts: cc11001100_hook("hosts", l.map(e => $t(e)), "object-key-init"),

          read(e, t) {
            const r = cc11001100_hook("r", Ft(t, f.timeouts.read), "var-init"),
                  n = cc11001100_hook("n", () => Qt(f, f.hosts.filter(e => 0 != (e.accept & Ut.Read)), e, r), "var-init");
            if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return n();
            const o = cc11001100_hook("o", {
              request: cc11001100_hook("request", e, "object-key-init"),
              mappedRequestOptions: cc11001100_hook("mappedRequestOptions", r, "object-key-init"),
              transporter: {
                queryParameters: cc11001100_hook("queryParameters", f.queryParameters, "object-key-init"),
                headers: cc11001100_hook("headers", f.headers, "object-key-init")
              }
            }, "var-init");
            return f.responsesCache.get(o, () => f.requestsCache.get(o, () => f.requestsCache.set(o, n()).then(e => Promise.all([f.requestsCache.delete(o), e]), e => Promise.all([f.requestsCache.delete(o), Promise.reject(e)])).then(([e, t]) => t)), {
              miss: cc11001100_hook("miss", e => f.responsesCache.set(o, e), "object-key-init")
            });
          },

          write(e, t) {
            return Qt(f, f.hosts.filter(e => 0 != (e.accept & Ut.Write)), e, Ft(t, f.timeouts.write));
          }

        }, "var-init");
        return f;
      }({
        hosts: cc11001100_hook("hosts", [{
          url: cc11001100_hook("url", `${t}-dsn.algolia.net`, "object-key-init"),
          accept: cc11001100_hook("accept", Ut.Read, "object-key-init")
        }, {
          url: cc11001100_hook("url", `${t}.algolia.net`, "object-key-init"),
          accept: cc11001100_hook("accept", Ut.Write, "object-key-init")
        }].concat(Tt([{
          url: cc11001100_hook("url", `${t}-1.algolianet.com`, "object-key-init")
        }, {
          url: cc11001100_hook("url", `${t}-2.algolianet.com`, "object-key-init")
        }, {
          url: cc11001100_hook("url", `${t}-3.algolianet.com`, "object-key-init")
        }])), "object-key-init"),
        ...e,
        headers: { ...r.headers(),
          "content-type": "application/x-www-form-urlencoded",
          ...e.headers
        },
        queryParameters: { ...r.queryParameters(),
          ...e.queryParameters
        }
      }), "var-init"),
            o = cc11001100_hook("o", {
        transporter: cc11001100_hook("transporter", n, "object-key-init"),
        appId: cc11001100_hook("appId", t, "object-key-init"),

        addAlgoliaAgent(e, t) {
          n.userAgent.add({
            segment: cc11001100_hook("segment", e, "object-key-init"),
            version: cc11001100_hook("version", t, "object-key-init")
          });
        },

        clearCache() {
          return Promise.all([n.requestsCache.clear(), n.responsesCache.clear()]).then(() => {});
        }

      }, "var-init");
      return _t(o, e.methods);
    }, "var-init"),
          rr = cc11001100_hook("rr", e => (t, r) => t.method === Jt.Get ? e.transporter.read(t, r) : e.transporter.write(t, r), "var-init"),
          nr = cc11001100_hook("nr", e => (t, r = {}) => _t({
      transporter: cc11001100_hook("transporter", e.transporter, "object-key-init"),
      appId: cc11001100_hook("appId", e.appId, "object-key-init"),
      indexName: cc11001100_hook("indexName", t, "object-key-init")
    }, r.methods), "var-init"),
          or = cc11001100_hook("or", e => (t, r) => {
      const n = cc11001100_hook("n", t.map(e => ({ ...e,
        params: Yt(e.params || {})
      })), "var-init");
      return e.transporter.read({
        method: cc11001100_hook("method", Jt.Post, "object-key-init"),
        path: cc11001100_hook("path", "1/indexes/*/queries", "object-key-init"),
        data: {
          requests: cc11001100_hook("requests", n, "object-key-init")
        },
        cacheable: cc11001100_hook("cacheable", !0, "object-key-init")
      }, r);
    }, "var-init"),
          ar = cc11001100_hook("ar", e => (t, r) => Promise.all(t.map(t => {
      const {
        facetName: n,
        facetQuery: o,
        ...a
      } = cc11001100_hook("", t.params, "var-init");
      return nr(e)(t.indexName, {
        methods: {
          searchForFacetValues: cc11001100_hook("searchForFacetValues", lr, "object-key-init")
        }
      }).searchForFacetValues(n, o, { ...r,
        ...a
      });
    })), "var-init"),
          cr = cc11001100_hook("cr", e => (t, r, n) => e.transporter.read({
      method: cc11001100_hook("method", Jt.Post, "object-key-init"),
      path: cc11001100_hook("path", Lt("1/answers/%s/prediction", e.indexName), "object-key-init"),
      data: {
        query: cc11001100_hook("query", t, "object-key-init"),
        queryLanguages: cc11001100_hook("queryLanguages", r, "object-key-init")
      },
      cacheable: cc11001100_hook("cacheable", !0, "object-key-init")
    }, n), "var-init"),
          ir = cc11001100_hook("ir", e => (t, r) => e.transporter.read({
      method: cc11001100_hook("method", Jt.Post, "object-key-init"),
      path: cc11001100_hook("path", Lt("1/indexes/%s/query", e.indexName), "object-key-init"),
      data: {
        query: cc11001100_hook("query", t, "object-key-init")
      },
      cacheable: cc11001100_hook("cacheable", !0, "object-key-init")
    }, r), "var-init"),
          lr = cc11001100_hook("lr", e => (t, r, n) => e.transporter.read({
      method: cc11001100_hook("method", Jt.Post, "object-key-init"),
      path: cc11001100_hook("path", Lt("1/indexes/%s/facets/%s/query", e.indexName, t), "object-key-init"),
      data: {
        facetQuery: cc11001100_hook("facetQuery", r, "object-key-init")
      },
      cacheable: cc11001100_hook("cacheable", !0, "object-key-init")
    }, n), "var-init"),
          ur = cc11001100_hook("ur", {
      Debug: cc11001100_hook("Debug", 1, "object-key-init"),
      Info: cc11001100_hook("Info", 2, "object-key-init"),
      Error: cc11001100_hook("Error", 3, "object-key-init")
    }, "var-init");

    function sr(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      const n = cc11001100_hook("n", {
        appId: cc11001100_hook("appId", e, "object-key-init"),
        apiKey: cc11001100_hook("apiKey", t, "object-key-init"),
        timeouts: {
          connect: cc11001100_hook("connect", 1, "object-key-init"),
          read: cc11001100_hook("read", 2, "object-key-init"),
          write: cc11001100_hook("write", 30, "object-key-init")
        },
        requester: {
          send(e) {
            return new Promise(t => {
              const r = cc11001100_hook("r", new XMLHttpRequest(), "var-init");
              r.open(e.method, e.url, !0), Object.keys(e.headers).forEach(t => r.setRequestHeader(t, e.headers[t]));
              const n = cc11001100_hook("n", (e, n) => setTimeout(() => {
                r.abort(), t({
                  status: cc11001100_hook("status", 0, "object-key-init"),
                  content: cc11001100_hook("content", n, "object-key-init"),
                  isTimedOut: cc11001100_hook("isTimedOut", !0, "object-key-init")
                });
              }, 1e3 * e), "var-init"),
                    o = cc11001100_hook("o", n(e.connectTimeout, "Connection timeout"), "var-init");
              let a;
              r.onreadystatechange = cc11001100_hook("r.onreadystatechange", () => {
                r.readyState > r.OPENED && void 0 === a && (clearTimeout(o), a = cc11001100_hook("a", n(e.responseTimeout, "Socket timeout"), "assign"));
              }, "assign"), r.onerror = cc11001100_hook("r.onerror", () => {
                0 === r.status && (clearTimeout(o), clearTimeout(a), t({
                  content: cc11001100_hook("content", r.responseText || "Network request failed", "object-key-init"),
                  status: cc11001100_hook("status", r.status, "object-key-init"),
                  isTimedOut: cc11001100_hook("isTimedOut", !1, "object-key-init")
                }));
              }, "assign"), r.onload = cc11001100_hook("r.onload", () => {
                clearTimeout(o), clearTimeout(a), t({
                  content: cc11001100_hook("content", r.responseText, "object-key-init"),
                  status: cc11001100_hook("status", r.status, "object-key-init"),
                  isTimedOut: cc11001100_hook("isTimedOut", !1, "object-key-init")
                });
              }, "assign"), r.send(e.data);
            });
          }

        },
        logger: cc11001100_hook("logger", (o = cc11001100_hook("o", ur.Error, "assign"), {
          debug(e, t) {
            return ur.Debug >= o && console.debug(e, t), Promise.resolve();
          },

          info(e, t) {
            return ur.Info >= o && console.info(e, t), Promise.resolve();
          },

          error(e, t) {
            return console.error(e, t), Promise.resolve();
          }

        }), "object-key-init"),
        responsesCache: cc11001100_hook("responsesCache", qt(), "object-key-init"),
        requestsCache: cc11001100_hook("requestsCache", qt({
          serializable: cc11001100_hook("serializable", !1, "object-key-init")
        }), "object-key-init"),
        hostsCache: cc11001100_hook("hostsCache", Rt({
          caches: cc11001100_hook("caches", [Nt({
            key: cc11001100_hook("key", `${Mt}-${e}`, "object-key-init")
          }), qt()], "object-key-init")
        }), "object-key-init"),
        userAgent: cc11001100_hook("userAgent", Zt(Mt).add({
          segment: cc11001100_hook("segment", "Browser", "object-key-init"),
          version: cc11001100_hook("version", "lite", "object-key-init")
        }), "object-key-init"),
        authMode: cc11001100_hook("authMode", Ht.WithinQueryParameters, "object-key-init")
      }, "var-init");
      var o;
      return tr({ ...n,
        ...r,
        methods: {
          search: cc11001100_hook("search", or, "object-key-init"),
          searchForFacetValues: cc11001100_hook("searchForFacetValues", ar, "object-key-init"),
          multipleQueries: cc11001100_hook("multipleQueries", or, "object-key-init"),
          multipleSearchForFacetValues: cc11001100_hook("multipleSearchForFacetValues", ar, "object-key-init"),
          customRequest: cc11001100_hook("customRequest", rr, "object-key-init"),
          initIndex: cc11001100_hook("initIndex", e => t => nr(e)(t, {
            methods: {
              search: cc11001100_hook("search", ir, "object-key-init"),
              searchForFacetValues: cc11001100_hook("searchForFacetValues", lr, "object-key-init"),
              findAnswers: cc11001100_hook("findAnswers", cr, "object-key-init")
            }
          }), "object-key-init")
        }
      });
    }

    sr.version = cc11001100_hook("sr.version", Mt, "assign");
    var fr = cc11001100_hook("fr", sr, "var-init"),
        mr = cc11001100_hook("mr", "3.3.2", "var-init");

    function pr() {}

    function dr(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e;
    }

    function hr(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return e.reduce(function (e, r) {
        var n = cc11001100_hook("n", t(r), "var-init");
        return e.hasOwnProperty(n) || (e[n] = cc11001100_hook("e[n]", [], "assign")), e[n].length < 5 && e[n].push(r), e;
      }, {});
    }

    var vr = cc11001100_hook("vr", ["footer", "searchBox"], "var-init");

    function yr() {
      return yr = cc11001100_hook("yr", Object.assign || function (e) {
        for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
          var r = cc11001100_hook("r", arguments[t], "var-init");

          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = cc11001100_hook("e[n]", r[n], "assign"));
        }

        return e;
      }, "assign"), yr.apply(this, arguments);
    }

    function gr(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", Object.keys(e), "var-init");

      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(e), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }), "assign")), r.push.apply(r, n);
      }

      return r;
    }

    function br(e) {
      cc11001100_hook("e", e, "function-parameter");

      for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
        var r = cc11001100_hook("r", null != arguments[t] ? arguments[t] : {}, "var-init");
        t % 2 ? gr(Object(r), !0).forEach(function (t) {
          Or(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gr(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function Or(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return t in e ? Object.defineProperty(e, t, {
        value: cc11001100_hook("value", r, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init")
      }) : e[t] = cc11001100_hook("e[t]", r, "assign"), e;
    }

    function Sr(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var r = cc11001100_hook("r", null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"], "var-init");
        if (null == r) return;
        var n,
            o,
            a = cc11001100_hook("a", [], "var-init"),
            c = cc11001100_hook("c", !0, "var-init"),
            i = cc11001100_hook("i", !1, "var-init");

        try {
          for (r = cc11001100_hook("r", r.call(e), "assign"); !(c = cc11001100_hook("c", (n = cc11001100_hook("n", r.next(), "assign")).done, "assign")) && (a.push(n.value), !t || a.length !== t); c = cc11001100_hook("c", !0, "assign"));
        } catch (l) {
          i = cc11001100_hook("i", !0, "assign"), o = cc11001100_hook("o", l, "assign");
        } finally {
          try {
            c || null == r.return || r.return();
          } finally {
            if (i) throw o;
          }
        }

        return a;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Er(e, t);
        var r = cc11001100_hook("r", Object.prototype.toString.call(e).slice(8, -1), "var-init");
        "Object" === r && e.constructor && (r = cc11001100_hook("r", e.constructor.name, "assign"));
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Er(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Er(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));

      for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", new Array(t), "var-init"); r < t; r++) n[r] = cc11001100_hook("n[r]", e[r], "assign");

      return n;
    }

    function jr(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (null == e) return {};
      var r,
          n,
          o = cc11001100_hook("o", function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = cc11001100_hook("o", {}, "var-init"),
            a = cc11001100_hook("a", Object.keys(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || (o[r] = cc11001100_hook("o[r]", e[r], "assign"));

        return o;
      }(e, t), "var-init");

      if (Object.getOwnPropertySymbols) {
        var a = cc11001100_hook("a", Object.getOwnPropertySymbols(e), "var-init");

        for (n = cc11001100_hook("n", 0, "assign"); n < a.length; n++) r = cc11001100_hook("r", a[n], "assign"), t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = cc11001100_hook("o[r]", e[r], "assign"));
      }

      return o;
    }

    function wr(e) {
      cc11001100_hook("e", e, "function-parameter");

      var t = cc11001100_hook("t", e.appId, "var-init"),
          r = cc11001100_hook("r", e.apiKey, "var-init"),
          n = cc11001100_hook("n", e.indexName, "var-init"),
          o = cc11001100_hook("o", e.placeholder, "var-init"),
          a = cc11001100_hook("a", void 0 === o ? "Search docs" : o, "var-init"),
          c = cc11001100_hook("c", e.searchParameters, "var-init"),
          i = cc11001100_hook("i", e.onClose, "var-init"),
          l = cc11001100_hook("l", void 0 === i ? pr : i, "var-init"),
          u = cc11001100_hook("u", e.transformItems, "var-init"),
          s = cc11001100_hook("s", void 0 === u ? dr : u, "var-init"),
          f = cc11001100_hook("f", e.hitComponent, "var-init"),
          m = cc11001100_hook("m", void 0 === f ? qe : f, "var-init"),
          p = cc11001100_hook("p", e.resultsFooterComponent, "var-init"),
          d = cc11001100_hook("d", void 0 === p ? function () {
        return null;
      } : p, "var-init"),
          h = cc11001100_hook("h", e.navigator, "var-init"),
          v = cc11001100_hook("v", e.initialScrollY, "var-init"),
          y = cc11001100_hook("y", void 0 === v ? 0 : v, "var-init"),
          g = cc11001100_hook("g", e.transformSearchClient, "var-init"),
          b = cc11001100_hook("b", void 0 === g ? dr : g, "var-init"),
          O = cc11001100_hook("O", e.disableUserPersonalization, "var-init"),
          S = cc11001100_hook("S", void 0 !== O && O, "var-init"),
          E = cc11001100_hook("E", e.initialQuery, "var-init"),
          j = cc11001100_hook("j", void 0 === E ? "" : E, "var-init"),
          w = cc11001100_hook("w", e.translations, "var-init"),
          P = cc11001100_hook("P", void 0 === w ? {} : w, "var-init"),
          I = cc11001100_hook("I", e.getMissingResultsUrl, "var-init"),
          D = cc11001100_hook("D", P.footer, "var-init"),
          C = cc11001100_hook("C", P.searchBox, "var-init"),
          k = cc11001100_hook("k", jr(P, vr), "var-init"),
          A = cc11001100_hook("A", Sr(ke.useState({
        query: cc11001100_hook("query", "", "object-key-init"),
        collections: cc11001100_hook("collections", [], "object-key-init"),
        completion: cc11001100_hook("completion", null, "object-key-init"),
        context: {},
        isOpen: cc11001100_hook("isOpen", !1, "object-key-init"),
        activeItemId: cc11001100_hook("activeItemId", null, "object-key-init"),
        status: cc11001100_hook("status", "idle", "object-key-init")
      }), 2), "var-init"),
          x = cc11001100_hook("x", A[0], "var-init"),
          N = cc11001100_hook("N", A[1], "var-init"),
          R = cc11001100_hook("R", ke.useRef(null), "var-init"),
          q = cc11001100_hook("q", ke.useRef(null), "var-init"),
          T = cc11001100_hook("T", ke.useRef(null), "var-init"),
          _ = cc11001100_hook("_", ke.useRef(null), "var-init"),
          L = cc11001100_hook("L", ke.useRef(null), "var-init"),
          M = cc11001100_hook("M", ke.useRef(10), "var-init"),
          H = cc11001100_hook("H", ke.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, Ae) : "").current, "var-init"),
          F = cc11001100_hook("F", ke.useRef(j || H).current, "var-init"),
          U = cc11001100_hook("U", function (e, t, r) {
        return ke.useMemo(function () {
          var n = cc11001100_hook("n", fr(e, t), "var-init");
          return n.addAlgoliaAgent("docsearch", mr), !1 === /docsearch.js \(.*\)/.test(n.transporter.userAgent.value) && n.addAlgoliaAgent("docsearch-react", mr), r(n);
        }, [e, t, r]);
      }(t, r, b), "var-init"),
          B = cc11001100_hook("B", ke.useRef(xt({
        key: cc11001100_hook("key", "__DOCSEARCH_FAVORITE_SEARCHES__".concat(n), "object-key-init"),
        limit: cc11001100_hook("limit", 10, "object-key-init")
      })).current, "var-init"),
          V = cc11001100_hook("V", ke.useRef(xt({
        key: cc11001100_hook("key", "__DOCSEARCH_RECENT_SEARCHES__".concat(n), "object-key-init"),
        limit: cc11001100_hook("limit", 0 === B.getAll().length ? 7 : 4, "object-key-init")
      })).current, "var-init"),
          K = cc11001100_hook("K", ke.useCallback(function (e) {
        if (!S) {
          var t = cc11001100_hook("t", "content" === e.type ? e.__docsearch_parent : e, "var-init");
          t && -1 === B.getAll().findIndex(function (e) {
            return e.objectID === t.objectID;
          }) && V.add(t);
        }
      }, [B, V, S]), "var-init"),
          $ = cc11001100_hook("$", ke.useMemo(function () {
        return Ce({
          id: cc11001100_hook("id", "docsearch", "object-key-init"),
          defaultActiveItemId: cc11001100_hook("defaultActiveItemId", 0, "object-key-init"),
          placeholder: cc11001100_hook("placeholder", a, "object-key-init"),
          openOnFocus: cc11001100_hook("openOnFocus", !0, "object-key-init"),
          initialState: {
            query: cc11001100_hook("query", F, "object-key-init"),
            context: {
              searchSuggestions: cc11001100_hook("searchSuggestions", [], "object-key-init")
            }
          },
          navigator: cc11001100_hook("navigator", h, "object-key-init"),
          onStateChange: function (e) {
            N(e.state);
          },
          getSources: function (e) {
            var t = cc11001100_hook("t", e.query, "var-init"),
                r = cc11001100_hook("r", e.state, "var-init"),
                o = cc11001100_hook("o", e.setContext, "var-init"),
                a = cc11001100_hook("a", e.setStatus, "var-init");
            return t ? U.search([{
              query: cc11001100_hook("query", t, "object-key-init"),
              indexName: cc11001100_hook("indexName", n, "object-key-init"),
              params: cc11001100_hook("params", br({
                attributesToRetrieve: cc11001100_hook("attributesToRetrieve", ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], "object-key-init"),
                attributesToSnippet: cc11001100_hook("attributesToSnippet", ["hierarchy.lvl1:".concat(M.current), "hierarchy.lvl2:".concat(M.current), "hierarchy.lvl3:".concat(M.current), "hierarchy.lvl4:".concat(M.current), "hierarchy.lvl5:".concat(M.current), "hierarchy.lvl6:".concat(M.current), "content:".concat(M.current)], "object-key-init"),
                snippetEllipsisText: cc11001100_hook("snippetEllipsisText", "\u2026", "object-key-init"),
                highlightPreTag: cc11001100_hook("highlightPreTag", "<mark>", "object-key-init"),
                highlightPostTag: cc11001100_hook("highlightPostTag", "</mark>", "object-key-init"),
                hitsPerPage: cc11001100_hook("hitsPerPage", 20, "object-key-init")
              }, c), "object-key-init")
            }]).catch(function (e) {
              throw "RetryError" === e.name && a("error"), e;
            }).then(function (e) {
              var t = cc11001100_hook("t", e.results[0], "var-init"),
                  n = cc11001100_hook("n", t.hits, "var-init"),
                  a = cc11001100_hook("a", t.nbHits, "var-init"),
                  c = cc11001100_hook("c", hr(n, function (e) {
                return lt(e);
              }), "var-init");
              return r.context.searchSuggestions.length < Object.keys(c).length && o({
                searchSuggestions: cc11001100_hook("searchSuggestions", Object.keys(c), "object-key-init")
              }), o({
                nbHits: cc11001100_hook("nbHits", a, "object-key-init")
              }), Object.values(c).map(function (e, t) {
                return {
                  sourceId: cc11001100_hook("sourceId", "hits".concat(t), "object-key-init"),
                  onSelect: function (e) {
                    var t = cc11001100_hook("t", e.item, "var-init"),
                        r = cc11001100_hook("r", e.event, "var-init");
                    K(t), r.shiftKey || r.ctrlKey || r.metaKey || l();
                  },
                  getItemUrl: function (e) {
                    return e.item.url;
                  },
                  getItems: function () {
                    return Object.values(hr(e, function (e) {
                      return e.hierarchy.lvl1;
                    })).map(s).map(function (e) {
                      return e.map(function (t) {
                        return br(br({}, t), {}, {
                          __docsearch_parent: cc11001100_hook("__docsearch_parent", "lvl1" !== t.type && e.find(function (e) {
                            return "lvl1" === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1;
                          }), "object-key-init")
                        });
                      });
                    }).flat();
                  }
                };
              });
            }) : S ? [] : [{
              sourceId: cc11001100_hook("sourceId", "recentSearches", "object-key-init"),
              onSelect: function (e) {
                var t = cc11001100_hook("t", e.item, "var-init"),
                    r = cc11001100_hook("r", e.event, "var-init");
                K(t), r.shiftKey || r.ctrlKey || r.metaKey || l();
              },
              getItemUrl: function (e) {
                return e.item.url;
              },
              getItems: function () {
                return V.getAll();
              }
            }, {
              sourceId: cc11001100_hook("sourceId", "favoriteSearches", "object-key-init"),
              onSelect: function (e) {
                var t = cc11001100_hook("t", e.item, "var-init"),
                    r = cc11001100_hook("r", e.event, "var-init");
                K(t), r.shiftKey || r.ctrlKey || r.metaKey || l();
              },
              getItemUrl: function (e) {
                return e.item.url;
              },
              getItems: function () {
                return B.getAll();
              }
            }];
          }
        });
      }, [n, c, U, l, V, B, K, F, a, h, s, S]), "var-init"),
          J = cc11001100_hook("J", $.getEnvironmentProps, "var-init"),
          z = cc11001100_hook("z", $.getRootProps, "var-init"),
          W = cc11001100_hook("W", $.refresh, "var-init");

      return function (e) {
        var t = cc11001100_hook("t", e.getEnvironmentProps, "var-init"),
            r = cc11001100_hook("r", e.panelElement, "var-init"),
            n = cc11001100_hook("n", e.formElement, "var-init"),
            o = cc11001100_hook("o", e.inputElement, "var-init");
        ke.useEffect(function () {
          if (r && n && o) {
            var e = cc11001100_hook("e", t({
              panelElement: cc11001100_hook("panelElement", r, "object-key-init"),
              formElement: cc11001100_hook("formElement", n, "object-key-init"),
              inputElement: cc11001100_hook("inputElement", o, "object-key-init")
            }), "var-init"),
                a = cc11001100_hook("a", e.onTouchStart, "var-init"),
                c = cc11001100_hook("c", e.onTouchMove, "var-init");
            return window.addEventListener("touchstart", a), window.addEventListener("touchmove", c), function () {
              window.removeEventListener("touchstart", a), window.removeEventListener("touchmove", c);
            };
          }
        }, [t, r, n, o]);
      }({
        getEnvironmentProps: cc11001100_hook("getEnvironmentProps", J, "object-key-init"),
        panelElement: cc11001100_hook("panelElement", _.current, "object-key-init"),
        formElement: cc11001100_hook("formElement", T.current, "object-key-init"),
        inputElement: cc11001100_hook("inputElement", L.current, "object-key-init")
      }), function (e) {
        var t = cc11001100_hook("t", e.container, "var-init");
        ke.useEffect(function () {
          if (t) {
            var e = cc11001100_hook("e", t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), "var-init"),
                r = cc11001100_hook("r", e[0], "var-init"),
                n = cc11001100_hook("n", e[e.length - 1], "var-init");
            return t.addEventListener("keydown", o), function () {
              t.removeEventListener("keydown", o);
            };
          }

          function o(e) {
            cc11001100_hook("e", e, "function-parameter");
            "Tab" === e.key && (e.shiftKey ? document.activeElement === r && (e.preventDefault(), n.focus()) : document.activeElement === n && (e.preventDefault(), r.focus()));
          }
        }, [t]);
      }({
        container: cc11001100_hook("container", R.current, "object-key-init")
      }), ke.useEffect(function () {
        return document.body.classList.add("DocSearch--active"), function () {
          var e, t;
          document.body.classList.remove("DocSearch--active"), null === (e = cc11001100_hook("e", (t = cc11001100_hook("t", window, "assign")).scrollTo, "assign")) || void 0 === e || e.call(t, 0, y);
        };
      }, []), ke.useEffect(function () {
        window.matchMedia("(max-width: 768px)").matches && (M.current = cc11001100_hook("M.current", 5, "assign"));
      }, []), ke.useEffect(function () {
        _.current && (_.current.scrollTop = cc11001100_hook("_.current.scrollTop", 0, "assign"));
      }, [x.query]), ke.useEffect(function () {
        F.length > 0 && (W(), L.current && L.current.focus());
      }, [F, W]), ke.useEffect(function () {
        function e() {
          if (q.current) {
            var e = cc11001100_hook("e", .01 * window.innerHeight, "var-init");
            q.current.style.setProperty("--docsearch-vh", "".concat(e, "px"));
          }
        }

        return e(), window.addEventListener("resize", e), function () {
          window.removeEventListener("resize", e);
        };
      }, []), ke.createElement("div", yr({
        ref: cc11001100_hook("ref", R, "object-key-init")
      }, z({
        "aria-expanded": cc11001100_hook("aria-expanded", !0, "object-key-init")
      }), {
        className: cc11001100_hook("className", ["DocSearch", "DocSearch-Container", "stalled" === x.status && "DocSearch-Container--Stalled", "error" === x.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), "object-key-init"),
        role: cc11001100_hook("role", "button", "object-key-init"),
        tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
        onMouseDown: function (e) {
          e.target === e.currentTarget && l();
        }
      }), ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Modal", "object-key-init"),
        ref: cc11001100_hook("ref", q, "object-key-init")
      }, ke.createElement("header", {
        className: cc11001100_hook("className", "DocSearch-SearchBar", "object-key-init"),
        ref: cc11001100_hook("ref", T, "object-key-init")
      }, ke.createElement(Dt, yr({}, $, {
        state: cc11001100_hook("state", x, "object-key-init"),
        autoFocus: cc11001100_hook("autoFocus", 0 === F.length, "object-key-init"),
        inputRef: cc11001100_hook("inputRef", L, "object-key-init"),
        isFromSelection: cc11001100_hook("isFromSelection", Boolean(F) && F === H, "object-key-init"),
        translations: cc11001100_hook("translations", C, "object-key-init"),
        onClose: cc11001100_hook("onClose", l, "object-key-init")
      }))), ke.createElement("div", {
        className: cc11001100_hook("className", "DocSearch-Dropdown", "object-key-init"),
        ref: cc11001100_hook("ref", _, "object-key-init")
      }, ke.createElement(St, yr({}, $, {
        indexName: cc11001100_hook("indexName", n, "object-key-init"),
        state: cc11001100_hook("state", x, "object-key-init"),
        hitComponent: cc11001100_hook("hitComponent", m, "object-key-init"),
        resultsFooterComponent: cc11001100_hook("resultsFooterComponent", d, "object-key-init"),
        disableUserPersonalization: cc11001100_hook("disableUserPersonalization", S, "object-key-init"),
        recentSearches: cc11001100_hook("recentSearches", V, "object-key-init"),
        favoriteSearches: cc11001100_hook("favoriteSearches", B, "object-key-init"),
        inputRef: cc11001100_hook("inputRef", L, "object-key-init"),
        translations: cc11001100_hook("translations", k, "object-key-init"),
        getMissingResultsUrl: cc11001100_hook("getMissingResultsUrl", I, "object-key-init"),
        onItemClick: function (e) {
          K(e), l();
        }
      }))), ke.createElement("footer", {
        className: cc11001100_hook("className", "DocSearch-Footer", "object-key-init")
      }, ke.createElement(Re, {
        translations: cc11001100_hook("translations", D, "object-key-init")
      }))));
    }
  }
}]);