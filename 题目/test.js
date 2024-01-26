n = function (e, t) {
    debugger;
    var r, n, o, a, i, s, u, c, l, f, d, h, p, m, v, y, g, b, w, E, O, S, _, x, A, R, C, T, k, N, j, P, L, U, F,
        D,
        B, q, $, I, z, M, H, J, W, K, V, G, X, Q, Z, Y, ee, te, re, ne, oe, ae, ie, se, ue, ce, le, fe, de, he,
        pe,
        me, ve;
    if (
        (o = (r = "string") == (n = typeof e)) ? (a = t || {}, i = e, (t = a)["url"] = i) : (c = (s = e) || (u = {}), t = c),
        d = Lr(o = (r = this)[n = "defaults"], f = t),
        v = (p = h = t = d)[m = "transitional"],
        "paramsSerializer", y = h.paramsSerializer, "headers", g = h.headers, b = g, 0, void 0 !== (a = v)
    && (
        s = v, D = !1, Qt[i = "assertOptions"](s,
            (
                c = u = {}, w = "silentJSONParsing", E = Zt, O = "transitional", S = Zt["boolean"],
                    _ = E[O](S), c[w] = _, x = u, A = "forcedJSONParsing", R = Zt, C = "transitional",
                    T = Zt["boolean"], k = R[C](T), x[A] = k, N = u, j = "clarifyTimeoutError", P = Zt,
                    L = "transitional", U = Zt["boolean"], F = P[L](U), N[j] = F, u
            )
            , D)
    ), null, null != y
    && (
        B = y, _t["isFunction"](B)
            ? t["paramsSerializer"] = ((q = {})["serialize"] = y, q)
            : (
                $ = y, V = !0, Qt["assertOptions"](
                    $, (z = I = {}, M = "encode", H = Zt["function"], z[M] = H, J = I, W = "serialize", K = Zt["function"], J[W] = K, I), V
                )
            )
    ), G = t, "method", "method", "toLowerCase", X = (t.method || this["defaults"]["method"] || "get").toLowerCase(),
        G.method = X, (l = b && (Q = _t, Z = "merge", Y = b["common"], ee = b[t["method"]], Q[Z](Y, ee)))
    && (
        te = ["delete", "get", "head", "post", "put", "patch", "common"],
            re = function (e) {
                delete b[e]
            },
            _t["forEach"](te, re)
    ), ne = t, "headers", "concat", oe = l, ae = b, ie = zt.concat(oe, ae), ne.headers = ie, se = r = [],
        ue = o = !(n = 0),
        p = function (e) {
            var r, n, o, a, i, s, u;
            (r = t, n = !1 === e["runWhen"](r)),
            n || (o = ue && e["synchronous"], ue = o, a = se, i = "unshift", s = e["fulfilled"], u = e["rejected"], n = a[i](s, u))
        },
        (d = (o = (r = this)[n = "interceptors"])[f = "request"])["forEach"](p),
        le = r = [], p = function (e) {
        var t, r, n;
        t = le, r = e.fulfilled, n = e.rejected, t.push(r, n)
    },
        (d = (o = (r = this)[n = "interceptors"])[f = "response"])["forEach"](p),
        de = r = 0, n = !(r = ue))

    {
        for (
            o = this, d = 0, (he = p = [f = (r = Pr)[n = "bind"](o), void 0]).unshift.apply(he, se),
                he.push.apply(he, le), fe = he.length, ce = Promise.resolve(t); de < fe;
        ) r = ce, n = "then", d = (o = he)[f = de++], m = he[p = de++], ce = r[n](d, m);
        return r = ce
    }
    for (fe = o = (r = se)[n = "length"], pe = r = t, de = 0; de < fe;) {
        me = o = (r = se)[n = de++], ve = (f = se)[d = de++];
        try {
            pe = n = me(r = pe)
        } catch (e) {
            o = this, f = e, (r = ve)[n = "call"](o, f);
            break
        }
    }
    try {
        o = this, f = pe, ce = d = (r = Pr)[n = "call"](o, f)
    } catch (e) {
        return o = e, f = (r = Promise)[n = "reject"](o)
    }
    for (de = 0, fe = le.length; de < fe;) d = (o = le)[f = de++], m = le[p = de++], ce = (r = ce)[n = "then"](d, m);
    return r = ce
}