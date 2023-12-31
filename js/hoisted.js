import {
    s as le
}
    from "./NavBar.astro_astro_type_script_index_0_lang.259d60bf.js";
const Ys = {
    name: "T-Shirt Short Sleeve",
    price: 26,
    image: "/assets/img/tshirt-ss-front.webp"
},
    qs = {
        name: "T-Shirt Long Sleeve",
        price: 26,
        image: "/assets/img/tshirt-ls-front.webp"
    },
    Ws = {
        name: "Hoodie",
        price: 55,
        image: "/assets/img/hoodie-front.webp"
    },
    zs = {
        name: "Cap",
        price: 20,
        image: "/assets/img/cap.webp"
    },
    $s = {
        name: "Canvas Bag",
        price: 18,
        image: "/assets/img/tote-bag.webp"
    },
    Te = {
        TSS: Ys,
        TLS: qs,
        H: Ws,
        C: zs,
        CB: $s
    };
/*!
 * FilePond 4.30.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const ks = e => e instanceof HTMLElement,
    Xs = (e, t = [], n = []) => {
        const s = {
            ...e
        },
            r = [],
            a = [],
            i = () => ({
                ...s
            }),
            l = () => {
                const u = [...r];
                return r.length = 0, u
            },
            o = () => {
                const u = [...a];
                a.length = 0, u.forEach(({
                    type: _,
                    data: T
                }) => {
                    c(_, T)
                })
            },
            c = (u, _, T) => {
                if (T && !document.hidden) {
                    a.push({
                        type: u,
                        data: _
                    });
                    return
                }
                p[u] && p[u](_), r.push({
                    type: u,
                    data: _
                })
            },
            d = (u, ..._) => I[u] ? I[u](..._) : null,
            f = {
                getState: i,
                processActionQueue: l,
                processDispatchQueue: o,
                dispatch: c,
                query: d
            };
        let I = {};
        t.forEach(u => {
            I = {
                ...u(s), ...I
            }
        });
        let p = {};
        return n.forEach(u => {
            p = {
                ...u(c, d, s), ...p
            }
        }), f
    },
    js = (e, t, n) => {
        if (typeof n == "function") {
            e[t] = n;
            return
        }
        Object.defineProperty(e, t, {
            ...n
        })
    },
    H = (e, t) => {
        for (const n in e) e.hasOwnProperty(n) && t(n, e[n])
    },
    ge = e => {
        const t = {};
        return H(e, n => {
            js(t, n, e[n])
        }), t
    },
    z = (e, t, n = null) => {
        if (n === null) return e.getAttribute(t) || e.hasAttribute(t);
        e.setAttribute(t, n)
    },
    Zs = "http://www.w3.org/2000/svg",
    Qs = ["svg", "path"],
    kt = e => Qs.includes(e),
    st = (e, t, n = {}) => {
        typeof t == "object" && (n = t, t = null);
        const s = kt(e) ? document.createElementNS(Zs, e) : document.createElement(e);
        return t && (kt(e) ? z(s, "class", t) : s.className = t), H(n, (r, a) => {
            z(s, r, a)
        }), s
    },
    Ks = e => (t, n) => {
        typeof n < "u" && e.children[n] ? e.insertBefore(t, e.children[n]) : e.appendChild(t)
    },
    Js = (e, t) => (n, s) => (typeof s < "u" ? t.splice(s, 0, n) : t.push(n), n),
    er = (e, t) => n => (t.splice(t.indexOf(n), 1), n.element.parentNode && e.removeChild(n.element), n),
    tr = (() => typeof window < "u" && typeof window.document < "u")(),
    Xn = () => tr,
    nr = Xn() ? st("svg") : {},
    sr = "children" in nr ? e => e.children.length : e => e.childNodes.length,
    jn = (e, t, n, s) => {
        const r = n[0] || e.left,
            a = n[1] || e.top,
            i = r + e.width,
            l = a + e.height * (s[1] || 1),
            o = {
                element: {
                    ...e
                },
                inner: {
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                },
                outer: {
                    left: r,
                    top: a,
                    right: i,
                    bottom: l
                }
            };
        return t.filter(c => !c.isRectIgnored()).map(c => c.rect).forEach(c => {
            Xt(o.inner, {
                ...c.inner
            }), Xt(o.outer, {
                ...c.outer
            })
        }), jt(o.inner), o.outer.bottom += o.element.marginBottom, o.outer.right += o.element.marginRight, jt(o.outer), o
    },
    Xt = (e, t) => {
        t.top += e.top, t.right += e.left, t.bottom += e.top, t.left += e.left, t.bottom > e.bottom && (e.bottom = t.bottom), t.right > e.right && (e.right = t.right)
    },
    jt = e => {
        e.width = e.right - e.left, e.height = e.bottom - e.top
    },
    he = e => typeof e == "number",
    rr = (e, t, n, s = .001) => Math.abs(e - t) < s && Math.abs(n) < s,
    ir = ({
        stiffness: e = .5,
        damping: t = .75,
        mass: n = 10
    } = {}) => {
        let s = null,
            r = null,
            a = 0,
            i = !1;
        const c = ge({
            interpolate: (d, f) => {
                if (i) return;
                if (!(he(s) && he(r))) {
                    i = !0, a = 0;
                    return
                }
                const I = -(r - s) * e;
                a += I / n, r += a, a *= t, rr(r, s, a) || f ? (r = s, a = 0, i = !0, c.onupdate(r), c.oncomplete(r)) : c.onupdate(r)
            },
            target: {
                set: d => {
                    if (he(d) && !he(r) && (r = d), s === null && (s = d, r = d), s = d, r === s || typeof s > "u") {
                        i = !0, a = 0, c.onupdate(r), c.oncomplete(r);
                        return
                    }
                    i = !1
                },
                get: () => s
            },
            resting: {
                get: () => i
            },
            onupdate: d => { },
            oncomplete: d => { }
        });
        return c
    },
    ar = e => e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e,
    or = ({
        duration: e = 500,
        easing: t = ar,
        delay: n = 0
    } = {}) => {
        let s = null,
            r, a, i = !0,
            l = !1,
            o = null;
        const d = ge({
            interpolate: (f, I) => {
                i || o === null || (s === null && (s = f), !(f - s < n) && (r = f - s - n, r >= e || I ? (r = 1, a = l ? 0 : 1, d.onupdate(a * o), d.oncomplete(a * o), i = !0) : (a = r / e, d.onupdate((r >= 0 ? t(l ? 1 - a : a) : 0) * o))))
            },
            target: {
                get: () => l ? 0 : o,
                set: f => {
                    if (o === null) {
                        o = f, d.onupdate(f), d.oncomplete(f);
                        return
                    }
                    f < o ? (o = 1, l = !0) : (l = !1, o = f), i = !1, s = null
                }
            },
            resting: {
                get: () => i
            },
            onupdate: f => { },
            oncomplete: f => { }
        });
        return d
    },
    Zt = {
        spring: ir,
        tween: or
    },
    lr = (e, t, n) => {
        const s = e[t] && typeof e[t][n] == "object" ? e[t][n] : e[t] || e,
            r = typeof s == "string" ? s : s.type,
            a = typeof s == "object" ? {
                ...s
            } : {};
        return Zt[r] ? Zt[r](a) : null
    },
    bt = (e, t, n, s = !1) => {
        t = Array.isArray(t) ? t : [t], t.forEach(r => {
            e.forEach(a => {
                let i = a,
                    l = () => n[a],
                    o = c => n[a] = c;
                typeof a == "object" && (i = a.key, l = a.getter || l, o = a.setter || o), !(r[i] && !s) && (r[i] = {
                    get: l,
                    set: o
                })
            })
        })
    },
    cr = ({
        mixinConfig: e,
        viewProps: t,
        viewInternalAPI: n,
        viewExternalAPI: s
    }) => {
        const r = {
            ...t
        },
            a = [];
        return H(e, (i, l) => {
            const o = lr(l);
            if (!o) return;
            o.onupdate = d => {
                t[i] = d
            }, o.target = r[i], bt([{
                key: i,
                setter: d => {
                    o.target !== d && (o.target = d)
                },
                getter: () => t[i]
            }], [n, s], t, !0), a.push(o)
        }), {
            write: i => {
                let l = document.hidden,
                    o = !0;
                return a.forEach(c => {
                    c.resting || (o = !1), c.interpolate(i, l)
                }), o
            },
            destroy: () => { }
        }
    },
    dr = e => (t, n) => {
        e.addEventListener(t, n)
    },
    ur = e => (t, n) => {
        e.removeEventListener(t, n)
    },
    fr = ({
        mixinConfig: e,
        viewProps: t,
        viewInternalAPI: n,
        viewExternalAPI: s,
        viewState: r,
        view: a
    }) => {
        const i = [],
            l = dr(a.element),
            o = ur(a.element);
        return s.on = (c, d) => {
            i.push({
                type: c,
                fn: d
            }), l(c, d)
        }, s.off = (c, d) => {
            i.splice(i.findIndex(f => f.type === c && f.fn === d), 1), o(c, d)
        }, {
            write: () => !0,
            destroy: () => {
                i.forEach(c => {
                    o(c.type, c.fn)
                })
            }
        }
    },
    Er = ({
        mixinConfig: e,
        viewProps: t,
        viewExternalAPI: n
    }) => {
        bt(e, n, t)
    },
    Z = e => e != null,
    pr = {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        originX: 0,
        originY: 0
    },
    Ir = ({
        mixinConfig: e,
        viewProps: t,
        viewInternalAPI: n,
        viewExternalAPI: s,
        view: r
    }) => {
        const a = {
            ...t
        },
            i = {};
        bt(e, [n, s], t);
        const l = () => [t.translateX || 0, t.translateY || 0],
            o = () => [t.scaleX || 0, t.scaleY || 0],
            c = () => r.rect ? jn(r.rect, r.childViews, l(), o()) : null;
        return n.rect = {
            get: c
        }, s.rect = {
            get: c
        }, e.forEach(d => {
            t[d] = typeof a[d] > "u" ? pr[d] : a[d]
        }), {
            write: () => {
                if (_r(i, t)) return mr(r.element, t), Object.assign(i, {
                    ...t
                }), !0
            },
            destroy: () => { }
        }
    },
    _r = (e, t) => {
        if (Object.keys(e).length !== Object.keys(t).length) return !0;
        for (const n in t)
            if (t[n] !== e[n]) return !0;
        return !1
    },
    mr = (e, {
        opacity: t,
        perspective: n,
        translateX: s,
        translateY: r,
        scaleX: a,
        scaleY: i,
        rotateX: l,
        rotateY: o,
        rotateZ: c,
        originX: d,
        originY: f,
        width: I,
        height: p
    }) => {
        let u = "",
            _ = "";
        (Z(d) || Z(f)) && (_ += `transform-origin: ${d || 0}px ${f || 0}px;`), Z(n) && (u += `perspective(${n}px) `), (Z(s) || Z(r)) && (u += `translate3d(${s || 0}px, ${r || 0}px, 0) `), (Z(a) || Z(i)) && (u += `scale3d(${Z(a) ? a : 1}, ${Z(i) ? i : 1}, 1) `), Z(c) && (u += `rotateZ(${c}rad) `), Z(l) && (u += `rotateX(${l}rad) `), Z(o) && (u += `rotateY(${o}rad) `), u.length && (_ += `transform:${u};`), Z(t) && (_ += `opacity:${t};`, t === 0 && (_ += "visibility:hidden;"), t < 1 && (_ += "pointer-events:none;")), Z(p) && (_ += `height:${p}px;`), Z(I) && (_ += `width:${I}px;`);
        const T = e.elementCurrentStyle || "";
        (_.length !== T.length || _ !== T) && (e.style.cssText = _, e.elementCurrentStyle = _)
    },
    Tr = {
        styles: Ir,
        listeners: fr,
        animations: cr,
        apis: Er
    },
    Qt = (e = {}, t = {}, n = {}) => (t.layoutCalculated || (e.paddingTop = parseInt(n.paddingTop, 10) || 0, e.marginTop = parseInt(n.marginTop, 10) || 0, e.marginRight = parseInt(n.marginRight, 10) || 0, e.marginBottom = parseInt(n.marginBottom, 10) || 0, e.marginLeft = parseInt(n.marginLeft, 10) || 0, t.layoutCalculated = !0), e.left = t.offsetLeft || 0, e.top = t.offsetTop || 0, e.width = t.offsetWidth || 0, e.height = t.offsetHeight || 0, e.right = e.left + e.width, e.bottom = e.top + e.height, e.scrollTop = t.scrollTop, e.hidden = t.offsetParent === null, e),
    $ = ({
        tag: e = "div",
        name: t = null,
        attributes: n = {},
        read: s = () => { },
        write: r = () => { },
        create: a = () => { },
        destroy: i = () => { },
        filterFrameActionsForChild: l = (p, u) => u,
        didCreateView: o = () => { },
        didWriteView: c = () => { },
        ignoreRect: d = !1,
        ignoreRectUpdate: f = !1,
        mixins: I = []
    } = {}) => (p, u = {}) => {
        const _ = st(e, `filepond--${t}`, n),
            T = window.getComputedStyle(_, null),
            h = Qt();
        let E = null,
            m = !1;
        const R = [],
            S = [],
            L = {},
            b = {},
            y = [r],
            M = [s],
            N = [i],
            w = () => _,
            P = () => R.concat(),
            U = () => L,
            A = x => (j, pe) => j(x, pe),
            F = () => E || (E = jn(h, R, [0, 0], [1, 1]), E),
            O = () => T,
            D = () => {
                E = null, R.forEach(pe => pe._read()), !(f && h.width && h.height) && Qt(h, _, T);
                const j = {
                    root: oe,
                    props: u,
                    rect: h
                };
                M.forEach(pe => pe(j))
            },
            C = (x, j, pe) => {
                let we = j.length === 0;
                return y.forEach(J => {
                    J({
                        props: u,
                        root: oe,
                        actions: j,
                        timestamp: x,
                        shouldOptimize: pe
                    }) === !1 && (we = !1)
                }), S.forEach(J => {
                    J.write(x) === !1 && (we = !1)
                }), R.filter(J => !!J.element.parentNode).forEach(J => {
                    J._write(x, l(J, j), pe) || (we = !1)
                }), R.forEach((J, $e) => {
                    J.element.parentNode || (oe.appendChild(J.element, $e), J._read(), J._write(x, l(J, j), pe), we = !1)
                }), m = we, c({
                    props: u,
                    root: oe,
                    actions: j,
                    timestamp: x
                }), we
            },
            v = () => {
                S.forEach(x => x.destroy()), N.forEach(x => {
                    x({
                        root: oe,
                        props: u
                    })
                }), R.forEach(x => x._destroy())
            },
            B = {
                element: {
                    get: w
                },
                style: {
                    get: O
                },
                childViews: {
                    get: P
                }
            },
            V = {
                ...B, rect: {
                    get: F
                }, ref: {
                    get: U
                }, is: x => t === x, appendChild: Ks(_), createChildView: A(p), linkView: x => (R.push(x), x), unlinkView: x => {
                    R.splice(R.indexOf(x), 1)
                }, appendChildView: Js(_, R), removeChildView: er(_, R), registerWriter: x => y.push(x), registerReader: x => M.push(x), registerDestroyer: x => N.push(x), invalidateLayout: () => _.layoutCalculated = !1, dispatch: p.dispatch, query: p.query
            },
            Me = {
                element: {
                    get: w
                },
                childViews: {
                    get: P
                },
                rect: {
                    get: F
                },
                resting: {
                    get: () => m
                },
                isRectIgnored: () => d,
                _read: D,
                _write: C,
                _destroy: v
            },
            ze = {
                ...B, rect: {
                    get: () => h
                }
            };
        Object.keys(I).sort((x, j) => x === "styles" ? 1 : j === "styles" ? -1 : 0).forEach(x => {
            const j = Tr[x]({
                mixinConfig: I[x],
                viewProps: u,
                viewState: b,
                viewInternalAPI: V,
                viewExternalAPI: Me,
                view: ge(ze)
            });
            j && S.push(j)
        });
        const oe = ge(V);
        a({
            root: oe,
            props: u
        });
        const It = sr(_);
        return R.forEach((x, j) => {
            oe.appendChild(x.element, It + j)
        }), o(oe), ge(Me)
    },
    gr = (e, t, n = 60) => {
        const s = "__framePainter";
        if (window[s]) {
            window[s].readers.push(e), window[s].writers.push(t);
            return
        }
        window[s] = {
            readers: [e],
            writers: [t]
        };
        const r = window[s],
            a = 1e3 / n;
        let i = null,
            l = null,
            o = null,
            c = null;
        const d = () => {
            document.hidden ? (o = () => window.setTimeout(() => f(performance.now()), a), c = () => window.clearTimeout(l)) : (o = () => window.requestAnimationFrame(f), c = () => window.cancelAnimationFrame(l))
        };
        document.addEventListener("visibilitychange", () => {
            c && c(), d(), f(performance.now())
        });
        const f = I => {
            l = o(f), i || (i = I);
            const p = I - i;
            p <= a || (i = I - p % a, r.readers.forEach(u => u()), r.writers.forEach(u => u(I)))
        };
        return d(), f(performance.now()), {
            pause: () => {
                c(l)
            }
        }
    },
    K = (e, t) => ({
        root: n,
        props: s,
        actions: r = [],
        timestamp: a,
        shouldOptimize: i
    }) => {
        r.filter(l => e[l.type]).forEach(l => e[l.type]({
            root: n,
            props: s,
            action: l.data,
            timestamp: a,
            shouldOptimize: i
        })), t && t({
            root: n,
            props: s,
            actions: r,
            timestamp: a,
            shouldOptimize: i
        })
    },
    Kt = (e, t) => t.parentNode.insertBefore(e, t),
    Jt = (e, t) => t.parentNode.insertBefore(e, t.nextSibling),
    lt = e => Array.isArray(e),
    Ie = e => e == null,
    hr = e => e.trim(),
    ct = e => "" + e,
    Rr = (e, t = ",") => Ie(e) ? [] : lt(e) ? e : ct(e).split(t).map(hr).filter(n => n.length),
    Zn = e => typeof e == "boolean",
    Qn = e => Zn(e) ? e : e === "true",
    Q = e => typeof e == "string",
    Kn = e => he(e) ? e : Q(e) ? ct(e).replace(/[a-z]+/gi, "") : 0,
    tt = e => parseInt(Kn(e), 10),
    en = e => parseFloat(Kn(e)),
    Fe = e => he(e) && isFinite(e) && Math.floor(e) === e,
    tn = (e, t = 1e3) => {
        if (Fe(e)) return e;
        let n = ct(e).trim();
        return /MB$/i.test(n) ? (n = n.replace(/MB$i/, "").trim(), tt(n) * t * t) : /KB/i.test(n) ? (n = n.replace(/KB$i/, "").trim(), tt(n) * t) : tt(n)
    },
    Re = e => typeof e == "function",
    Or = e => {
        let t = self,
            n = e.split("."),
            s = null;
        for (; s = n.shift();)
            if (t = t[s], !t) return null;
        return t
    },
    nn = {
        process: "POST",
        patch: "PATCH",
        revert: "DELETE",
        fetch: "GET",
        restore: "GET",
        load: "GET"
    },
    Sr = e => {
        const t = {};
        return t.url = Q(e) ? e : e.url || "", t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0, t.headers = e.headers ? e.headers : {}, H(nn, n => {
            t[n] = yr(n, e[n], nn[n], t.timeout, t.headers)
        }), t.process = e.process || Q(e) || e.url ? t.process : null, t.remove = e.remove || null, delete t.headers, t
    },
    yr = (e, t, n, s, r) => {
        if (t === null) return null;
        if (typeof t == "function") return t;
        const a = {
            url: n === "GET" || n === "PATCH" ? `?${e}=` : "",
            method: n,
            headers: r,
            withCredentials: !1,
            timeout: s,
            onload: null,
            ondata: null,
            onerror: null
        };
        if (Q(t)) return a.url = t, a;
        if (Object.assign(a, t), Q(a.headers)) {
            const i = a.headers.split(/:(.+)/);
            a.headers = {
                header: i[0],
                value: i[1]
            }
        }
        return a.withCredentials = Qn(a.withCredentials), a
    },
    Dr = e => Sr(e),
    Ar = e => e === null,
    X = e => typeof e == "object" && e !== null,
    Lr = e => X(e) && Q(e.url) && X(e.process) && X(e.revert) && X(e.restore) && X(e.fetch),
    yt = e => lt(e) ? "array" : Ar(e) ? "null" : Fe(e) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e) ? "bytes" : Lr(e) ? "api" : typeof e,
    Mr = e => e.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",'),
    wr = {
        array: Rr,
        boolean: Qn,
        int: e => yt(e) === "bytes" ? tn(e) : tt(e),
        number: en,
        float: en,
        bytes: tn,
        string: e => Re(e) ? e : ct(e),
        function: e => Or(e),
        serverapi: Dr,
        object: e => {
            try {
                return JSON.parse(Mr(e))
            } catch {
                return null
            }
        }
    },
    Pr = (e, t) => wr[t](e),
    Jn = (e, t, n) => {
        if (e === t) return e;
        let s = yt(e);
        if (s !== n) {
            const r = Pr(e, n);
            if (s = yt(r), r === null) throw `Trying to assign value with incorrect type to "${option}", allowed type: "${n}"`;
            e = r
        }
        return e
    },
    Cr = (e, t) => {
        let n = e;
        return {
            enumerable: !0,
            get: () => n,
            set: s => {
                n = Jn(s, e, t)
            }
        }
    },
    br = e => {
        const t = {};
        return H(e, n => {
            const s = e[n];
            t[n] = Cr(s[0], s[1])
        }), ge(t)
    },
    vr = e => ({
        items: [],
        listUpdateTimeout: null,
        itemUpdateTimeout: null,
        processingQueue: [],
        options: br(e)
    }),
    dt = (e, t = "-") => e.split(/(?=[A-Z])/).map(n => n.toLowerCase()).join(t),
    Nr = (e, t) => {
        const n = {};
        return H(t, s => {
            n[s] = {
                get: () => e.getState().options[s],
                set: r => {
                    e.dispatch(`SET_${dt(s, "_").toUpperCase()}`, {
                        value: r
                    })
                }
            }
        }), n
    },
    Gr = e => (t, n, s) => {
        const r = {};
        return H(e, a => {
            const i = dt(a, "_").toUpperCase();
            r[`SET_${i}`] = l => {
                try {
                    s.options[a] = l.value
                } catch { }
                t(`DID_SET_${i}`, {
                    value: s.options[a]
                })
            }
        }), r
    },
    Fr = e => t => {
        const n = {};
        return H(e, s => {
            n[`GET_${dt(s, "_").toUpperCase()}`] = r => t.options[s]
        }), n
    },
    ae = {
        API: 1,
        DROP: 2,
        BROWSE: 3,
        PASTE: 4,
        NONE: 5
    },
    vt = () => Math.random().toString(36).substring(2, 11),
    Nt = (e, t) => e.splice(t, 1),
    Br = (e, t) => {
        t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0)
    },
    ut = () => {
        const e = [],
            t = (s, r) => {
                Nt(e, e.findIndex(a => a.event === s && (a.cb === r || !r)))
            },
            n = (s, r, a) => {
                e.filter(i => i.event === s).map(i => i.cb).forEach(i => Br(() => i(...r), a))
            };
        return {
            fireSync: (s, ...r) => {
                n(s, r, !0)
            },
            fire: (s, ...r) => {
                n(s, r, !1)
            },
            on: (s, r) => {
                e.push({
                    event: s,
                    cb: r
                })
            },
            onOnce: (s, r) => {
                e.push({
                    event: s,
                    cb: (...a) => {
                        t(s, r), r(...a)
                    }
                })
            },
            off: t
        }
    },
    es = (e, t, n) => {
        Object.getOwnPropertyNames(e).filter(s => !n.includes(s)).forEach(s => Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(e, s)))
    },
    xr = ["fire", "process", "revert", "load", "on", "off", "onOnce", "retryLoad", "extend", "archive", "archived", "release", "released", "requestProcessing", "freeze"],
    ee = e => {
        const t = {};
        return es(e, t, xr), t
    },
    Ur = e => {
        e.forEach((t, n) => {
            t.released && Nt(e, n)
        })
    },
    G = {
        INIT: 1,
        IDLE: 2,
        PROCESSING_QUEUED: 9,
        PROCESSING: 3,
        PROCESSING_COMPLETE: 5,
        PROCESSING_ERROR: 6,
        PROCESSING_REVERT_ERROR: 10,
        LOADING: 7,
        LOAD_ERROR: 8
    },
    k = {
        INPUT: 1,
        LIMBO: 2,
        LOCAL: 3
    },
    ts = e => /[^0-9]+/.exec(e),
    ns = () => ts(1.1.toLocaleString())[0],
    Vr = () => {
        const e = ns(),
            t = 1e3.toLocaleString(),
            n = 1e3.toString();
        return t !== n ? ts(t)[0] : e === "." ? "," : "."
    },
    g = {
        BOOLEAN: "boolean",
        INT: "int",
        NUMBER: "number",
        STRING: "string",
        ARRAY: "array",
        OBJECT: "object",
        FUNCTION: "function",
        ACTION: "action",
        SERVER_API: "serverapi",
        REGEX: "regex"
    },
    Gt = [],
    ce = (e, t, n) => new Promise((s, r) => {
        const a = Gt.filter(l => l.key === e).map(l => l.cb);
        if (a.length === 0) {
            s(t);
            return
        }
        const i = a.shift();
        a.reduce((l, o) => l.then(c => o(c, n)), i(t, n)).then(l => s(l)).catch(l => r(l))
    }),
    Ae = (e, t, n) => Gt.filter(s => s.key === e).map(s => s.cb(t, n)),
    Hr = (e, t) => Gt.push({
        key: e,
        cb: t
    }),
    Yr = e => Object.assign(Pe, e),
    rt = () => ({
        ...Pe
    }),
    qr = e => {
        H(e, (t, n) => {
            Pe[t] && (Pe[t][0] = Jn(n, Pe[t][0], Pe[t][1]))
        })
    },
    Pe = {
        id: [null, g.STRING],
        name: ["filepond", g.STRING],
        disabled: [!1, g.BOOLEAN],
        className: [null, g.STRING],
        required: [!1, g.BOOLEAN],
        captureMethod: [null, g.STRING],
        allowSyncAcceptAttribute: [!0, g.BOOLEAN],
        allowDrop: [!0, g.BOOLEAN],
        allowBrowse: [!0, g.BOOLEAN],
        allowPaste: [!0, g.BOOLEAN],
        allowMultiple: [!1, g.BOOLEAN],
        allowReplace: [!0, g.BOOLEAN],
        allowRevert: [!0, g.BOOLEAN],
        allowRemove: [!0, g.BOOLEAN],
        allowProcess: [!0, g.BOOLEAN],
        allowReorder: [!1, g.BOOLEAN],
        allowDirectoriesOnly: [!1, g.BOOLEAN],
        storeAsFile: [!1, g.BOOLEAN],
        forceRevert: [!1, g.BOOLEAN],
        maxFiles: [null, g.INT],
        checkValidity: [!1, g.BOOLEAN],
        itemInsertLocationFreedom: [!0, g.BOOLEAN],
        itemInsertLocation: ["before", g.STRING],
        itemInsertInterval: [75, g.INT],
        dropOnPage: [!1, g.BOOLEAN],
        dropOnElement: [!0, g.BOOLEAN],
        dropValidation: [!1, g.BOOLEAN],
        ignoredFiles: [
            [".ds_store", "thumbs.db", "desktop.ini"], g.ARRAY
        ],
        instantUpload: [!0, g.BOOLEAN],
        maxParallelUploads: [2, g.INT],
        allowMinimumUploadDuration: [!0, g.BOOLEAN],
        chunkUploads: [!1, g.BOOLEAN],
        chunkForce: [!1, g.BOOLEAN],
        chunkSize: [5e6, g.INT],
        chunkRetryDelays: [
            [500, 1e3, 3e3], g.ARRAY
        ],
        server: [null, g.SERVER_API],
        fileSizeBase: [1e3, g.INT],
        labelFileSizeBytes: ["bytes", g.STRING],
        labelFileSizeKilobytes: ["KB", g.STRING],
        labelFileSizeMegabytes: ["MB", g.STRING],
        labelFileSizeGigabytes: ["GB", g.STRING],
        labelDecimalSeparator: [ns(), g.STRING],
        labelThousandsSeparator: [Vr(), g.STRING],
        labelIdle: ['Drag & Drop your files or <span class="filepond--label-action">Browse</span>', g.STRING],
        labelInvalidField: ["Field contains invalid files", g.STRING],
        labelFileWaitingForSize: ["Waiting for size", g.STRING],
        labelFileSizeNotAvailable: ["Size not available", g.STRING],
        labelFileCountSingular: ["file in list", g.STRING],
        labelFileCountPlural: ["files in list", g.STRING],
        labelFileLoading: ["Loading", g.STRING],
        labelFileAdded: ["Added", g.STRING],
        labelFileLoadError: ["Error during load", g.STRING],
        labelFileRemoved: ["Removed", g.STRING],
        labelFileRemoveError: ["Error during remove", g.STRING],
        labelFileProcessing: ["Uploading", g.STRING],
        labelFileProcessingComplete: ["Upload complete", g.STRING],
        labelFileProcessingAborted: ["Upload cancelled", g.STRING],
        labelFileProcessingError: ["Error during upload", g.STRING],
        labelFileProcessingRevertError: ["Error during revert", g.STRING],
        labelTapToCancel: ["tap to cancel", g.STRING],
        labelTapToRetry: ["tap to retry", g.STRING],
        labelTapToUndo: ["tap to undo", g.STRING],
        labelButtonRemoveItem: ["Remove", g.STRING],
        labelButtonAbortItemLoad: ["Abort", g.STRING],
        labelButtonRetryItemLoad: ["Retry", g.STRING],
        labelButtonAbortItemProcessing: ["Cancel", g.STRING],
        labelButtonUndoItemProcessing: ["Undo", g.STRING],
        labelButtonRetryItemProcessing: ["Retry", g.STRING],
        labelButtonProcessItem: ["Upload", g.STRING],
        iconRemove: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>', g.STRING],
        iconProcess: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>', g.STRING],
        iconRetry: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>', g.STRING],
        iconUndo: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>', g.STRING],
        iconDone: ['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>', g.STRING],
        oninit: [null, g.FUNCTION],
        onwarning: [null, g.FUNCTION],
        onerror: [null, g.FUNCTION],
        onactivatefile: [null, g.FUNCTION],
        oninitfile: [null, g.FUNCTION],
        onaddfilestart: [null, g.FUNCTION],
        onaddfileprogress: [null, g.FUNCTION],
        onaddfile: [null, g.FUNCTION],
        onprocessfilestart: [null, g.FUNCTION],
        onprocessfileprogress: [null, g.FUNCTION],
        onprocessfileabort: [null, g.FUNCTION],
        onprocessfilerevert: [null, g.FUNCTION],
        onprocessfile: [null, g.FUNCTION],
        onprocessfiles: [null, g.FUNCTION],
        onremovefile: [null, g.FUNCTION],
        onpreparefile: [null, g.FUNCTION],
        onupdatefiles: [null, g.FUNCTION],
        onreorderfiles: [null, g.FUNCTION],
        beforeDropFile: [null, g.FUNCTION],
        beforeAddFile: [null, g.FUNCTION],
        beforeRemoveFile: [null, g.FUNCTION],
        beforePrepareFile: [null, g.FUNCTION],
        stylePanelLayout: [null, g.STRING],
        stylePanelAspectRatio: [null, g.STRING],
        styleItemPanelAspectRatio: [null, g.STRING],
        styleButtonRemoveItemPosition: ["left", g.STRING],
        styleButtonProcessItemPosition: ["right", g.STRING],
        styleLoadIndicatorPosition: ["right", g.STRING],
        styleProgressIndicatorPosition: ["right", g.STRING],
        styleButtonRemoveItemAlign: [!1, g.BOOLEAN],
        files: [
            [], g.ARRAY
        ],
        credits: [
            ["https://pqina.nl/", "Powered by PQINA"], g.ARRAY
        ]
    },
    Oe = (e, t) => Ie(t) ? e[0] || null : Fe(t) ? e[t] || null : (typeof t == "object" && (t = t.id), e.find(n => n.id === t) || null),
    ss = e => {
        if (Ie(e)) return e;
        if (/:/.test(e)) {
            const t = e.split(":");
            return t[1] / t[0]
        }
        return parseFloat(e)
    },
    de = e => e.filter(t => !t.archived),
    Wr = {
        EMPTY: 0,
        IDLE: 1,
        ERROR: 2,
        BUSY: 3,
        READY: 4
    };
let ke = null;
const zr = () => {
    if (ke === null) try {
        const e = new DataTransfer;
        e.items.add(new File(["hello world"], "This_Works.txt"));
        const t = document.createElement("input");
        t.setAttribute("type", "file"), t.files = e.files, ke = t.files.length === 1
    } catch {
        ke = !1
    }
    return ke
},
    $r = [G.LOAD_ERROR, G.PROCESSING_ERROR, G.PROCESSING_REVERT_ERROR],
    kr = [G.LOADING, G.PROCESSING, G.PROCESSING_QUEUED, G.INIT],
    Xr = [G.PROCESSING_COMPLETE],
    jr = e => $r.includes(e.status),
    Zr = e => kr.includes(e.status),
    Qr = e => Xr.includes(e.status),
    sn = e => X(e.options.server) && (X(e.options.server.process) || Re(e.options.server.process)),
    Kr = e => ({
        GET_STATUS: () => {
            const t = de(e.items),
                {
                    EMPTY: n,
                    ERROR: s,
                    BUSY: r,
                    IDLE: a,
                    READY: i
                } = Wr;
            return t.length === 0 ? n : t.some(jr) ? s : t.some(Zr) ? r : t.some(Qr) ? i : a
        },
        GET_ITEM: t => Oe(e.items, t),
        GET_ACTIVE_ITEM: t => Oe(de(e.items), t),
        GET_ACTIVE_ITEMS: () => de(e.items),
        GET_ITEMS: () => e.items,
        GET_ITEM_NAME: t => {
            const n = Oe(e.items, t);
            return n ? n.filename : null
        },
        GET_ITEM_SIZE: t => {
            const n = Oe(e.items, t);
            return n ? n.fileSize : null
        },
        GET_STYLES: () => Object.keys(e.options).filter(t => /^style/.test(t)).map(t => ({
            name: t,
            value: e.options[t]
        })),
        GET_PANEL_ASPECT_RATIO: () => /circle/.test(e.options.stylePanelLayout) ? 1 : ss(e.options.stylePanelAspectRatio),
        GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
        GET_ITEMS_BY_STATUS: t => de(e.items).filter(n => n.status === t),
        GET_TOTAL_ITEMS: () => de(e.items).length,
        SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && zr() && !sn(e),
        IS_ASYNC: () => sn(e),
        GET_FILE_SIZE_LABELS: t => ({
            labelBytes: t("GET_LABEL_FILE_SIZE_BYTES") || void 0,
            labelKilobytes: t("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
            labelMegabytes: t("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
            labelGigabytes: t("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
        })
    }),
    Jr = e => {
        const t = de(e.items).length;
        if (!e.options.allowMultiple) return t === 0;
        const n = e.options.maxFiles;
        return n === null || t < n
    },
    rs = (e, t, n) => Math.max(Math.min(n, e), t),
    ei = (e, t, n) => e.splice(t, 0, n),
    ti = (e, t, n) => Ie(t) ? null : typeof n > "u" ? (e.push(t), t) : (n = rs(n, 0, e.length), ei(e, n, t), t),
    Dt = e => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(e),
    We = e => e.split("/").pop().split("?").shift(),
    ft = e => e.split(".").pop(),
    ni = e => {
        if (typeof e != "string") return "";
        const t = e.split("/").pop();
        return /svg/.test(t) ? "svg" : /zip|compressed/.test(t) ? "zip" : /plain/.test(t) ? "txt" : /msword/.test(t) ? "doc" : /[a-z]+/.test(t) ? t === "jpeg" ? "jpg" : t : ""
    },
    Be = (e, t = "") => (t + e).slice(-t.length),
    is = (e = new Date) => `${e.getFullYear()}-${Be(e.getMonth() + 1, "00")}-${Be(e.getDate(), "00")}_${Be(e.getHours(), "00")}-${Be(e.getMinutes(), "00")}-${Be(e.getSeconds(), "00")}`,
    Ne = (e, t, n = null, s = null) => {
        const r = typeof n == "string" ? e.slice(0, e.size, n) : e.slice(0, e.size, e.type);
        return r.lastModifiedDate = new Date, e._relativePath && (r._relativePath = e._relativePath), Q(t) || (t = is()), t && s === null && ft(t) ? r.name = t : (s = s || ni(r.type), r.name = t + (s ? "." + s : "")), r
    },
    si = () => window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
    as = (e, t) => {
        const n = si();
        if (n) {
            const s = new n;
            return s.append(e), s.getBlob(t)
        }
        return new Blob([e], {
            type: t
        })
    },
    ri = (e, t) => {
        const n = new ArrayBuffer(e.length),
            s = new Uint8Array(n);
        for (let r = 0; r < e.length; r++) s[r] = e.charCodeAt(r);
        return as(n, t)
    },
    os = e => (/^data:(.+);/.exec(e) || [])[1] || null,
    ii = e => e.split(",")[1].replace(/\s/g, ""),
    ai = e => atob(ii(e)),
    oi = e => {
        const t = os(e),
            n = ai(e);
        return ri(n, t)
    },
    li = (e, t, n) => Ne(oi(e), t, null, n),
    ci = e => {
        if (!/^content-disposition:/i.test(e)) return null;
        const t = e.split(/filename=|filename\*=.+''/).splice(1).map(n => n.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter(n => n.length);
        return t.length ? decodeURI(t[t.length - 1]) : null
    },
    di = e => {
        if (/content-length:/i.test(e)) {
            const t = e.match(/[0-9]+/)[0];
            return t ? parseInt(t, 10) : null
        }
        return null
    },
    ui = e => /x-content-transfer-id:/i.test(e) && (e.split(":")[1] || "").trim() || null,
    Ft = e => {
        const t = {
            source: null,
            name: null,
            size: null
        },
            n = e.split(`
`);
        for (let s of n) {
            const r = ci(s);
            if (r) {
                t.name = r;
                continue
            }
            const a = di(s);
            if (a) {
                t.size = a;
                continue
            }
            const i = ui(s);
            if (i) {
                t.source = i;
                continue
            }
        }
        return t
    },
    fi = e => {
        const t = {
            source: null,
            complete: !1,
            progress: 0,
            size: null,
            timestamp: null,
            duration: 0,
            request: null
        },
            n = () => t.progress,
            s = () => {
                t.request && t.request.abort && t.request.abort()
            },
            r = () => {
                const l = t.source;
                i.fire("init", l), l instanceof File ? i.fire("load", l) : l instanceof Blob ? i.fire("load", Ne(l, l.name)) : Dt(l) ? i.fire("load", li(l)) : a(l)
            },
            a = l => {
                if (!e) {
                    i.fire("error", {
                        type: "error",
                        body: "Can't load URL",
                        code: 400
                    });
                    return
                }
                t.timestamp = Date.now(), t.request = e(l, o => {
                    t.duration = Date.now() - t.timestamp, t.complete = !0, o instanceof Blob && (o = Ne(o, o.name || We(l))), i.fire("load", o instanceof Blob ? o : o ? o.body : null)
                }, o => {
                    i.fire("error", typeof o == "string" ? {
                        type: "error",
                        code: 0,
                        body: o
                    } : o)
                }, (o, c, d) => {
                    if (d && (t.size = d), t.duration = Date.now() - t.timestamp, !o) {
                        t.progress = null;
                        return
                    }
                    t.progress = c / d, i.fire("progress", t.progress)
                }, () => {
                    i.fire("abort")
                }, o => {
                    const c = Ft(typeof o == "string" ? o : o.headers);
                    i.fire("meta", {
                        size: t.size || c.size,
                        filename: c.name,
                        source: c.source
                    })
                })
            },
            i = {
                ...ut(), setSource: l => t.source = l, getProgress: n, abort: s, load: r
            };
        return i
    },
    rn = e => /GET|HEAD/.test(e),
    Se = (e, t, n) => {
        const s = {
            onheaders: () => { },
            onprogress: () => { },
            onload: () => { },
            ontimeout: () => { },
            onerror: () => { },
            onabort: () => { },
            abort: () => {
                r = !0, i.abort()
            }
        };
        let r = !1,
            a = !1;
        n = {
            method: "POST",
            headers: {},
            withCredentials: !1,
            ...n
        }, t = encodeURI(t), rn(n.method) && e && (t = `${t}${encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))}`);
        const i = new XMLHttpRequest,
            l = rn(n.method) ? i : i.upload;
        return l.onprogress = o => {
            r || s.onprogress(o.lengthComputable, o.loaded, o.total)
        }, i.onreadystatechange = () => {
            i.readyState < 2 || i.readyState === 4 && i.status === 0 || a || (a = !0, s.onheaders(i))
        }, i.onload = () => {
            i.status >= 200 && i.status < 300 ? s.onload(i) : s.onerror(i)
        }, i.onerror = () => s.onerror(i), i.onabort = () => {
            r = !0, s.onabort()
        }, i.ontimeout = () => s.ontimeout(i), i.open(n.method, t, !0), Fe(n.timeout) && (i.timeout = n.timeout), Object.keys(n.headers).forEach(o => {
            const c = unescape(encodeURIComponent(n.headers[o]));
            i.setRequestHeader(o, c)
        }), n.responseType && (i.responseType = n.responseType), n.withCredentials && (i.withCredentials = !0), i.send(e), s
    },
    Y = (e, t, n, s) => ({
        type: e,
        code: t,
        body: n,
        headers: s
    }),
    ye = e => t => {
        e(Y("error", 0, "Timeout", t.getAllResponseHeaders()))
    },
    an = e => /\?/.test(e),
    Ve = (...e) => {
        let t = "";
        return e.forEach(n => {
            t += an(t) && an(n) ? n.replace(/\?/, "&") : n
        }), t
    },
    _t = (e = "", t) => {
        if (typeof t == "function") return t;
        if (!t || !Q(t.url)) return null;
        const n = t.onload || (r => r),
            s = t.onerror || (r => null);
        return (r, a, i, l, o, c) => {
            const d = Se(r, Ve(e, t.url), {
                ...t, responseType: "blob"
            });
            return d.onload = f => {
                const I = f.getAllResponseHeaders(),
                    p = Ft(I).name || We(r);
                a(Y("load", f.status, t.method === "HEAD" ? null : Ne(n(f.response), p), I))
            }, d.onerror = f => {
                i(Y("error", f.status, s(f.response) || f.statusText, f.getAllResponseHeaders()))
            }, d.onheaders = f => {
                c(Y("headers", f.status, null, f.getAllResponseHeaders()))
            }, d.ontimeout = ye(i), d.onprogress = l, d.onabort = o, d
        }
    },
    se = {
        QUEUED: 0,
        COMPLETE: 1,
        PROCESSING: 2,
        ERROR: 3,
        WAITING: 4
    },
    Ei = (e, t, n, s, r, a, i, l, o, c, d) => {
        const f = [],
            {
                chunkTransferId: I,
                chunkServer: p,
                chunkSize: u,
                chunkRetryDelays: _
            } = d,
            T = {
                serverId: I,
                aborted: !1
            },
            h = t.ondata || (A => A),
            E = t.onload || ((A, F) => F === "HEAD" ? A.getResponseHeader("Upload-Offset") : A.response),
            m = t.onerror || (A => null),
            R = A => {
                const F = new FormData;
                X(r) && F.append(n, JSON.stringify(r));
                const O = typeof t.headers == "function" ? t.headers(s, r) : {
                    ...t.headers, "Upload-Length": s.size
                },
                    D = {
                        ...t, headers: O
                    },
                    C = Se(h(F), Ve(e, t.url), D);
                C.onload = v => A(E(v, D.method)), C.onerror = v => i(Y("error", v.status, m(v.response) || v.statusText, v.getAllResponseHeaders())), C.ontimeout = ye(i)
            },
            S = A => {
                const F = Ve(e, p.url, T.serverId),
                    D = {
                        headers: typeof t.headers == "function" ? t.headers(T.serverId) : {
                            ...t.headers
                        },
                        method: "HEAD"
                    },
                    C = Se(null, F, D);
                C.onload = v => A(E(v, D.method)), C.onerror = v => i(Y("error", v.status, m(v.response) || v.statusText, v.getAllResponseHeaders())), C.ontimeout = ye(i)
            },
            L = Math.floor(s.size / u);
        for (let A = 0; A <= L; A++) {
            const F = A * u,
                O = s.slice(F, F + u, "application/offset+octet-stream");
            f[A] = {
                index: A,
                size: O.size,
                offset: F,
                data: O,
                file: s,
                progress: 0,
                retries: [..._],
                status: se.QUEUED,
                error: null,
                request: null,
                timeout: null
            }
        }
        const b = () => a(T.serverId),
            y = A => A.status === se.QUEUED || A.status === se.ERROR,
            M = A => {
                if (T.aborted) return;
                if (A = A || f.find(y), !A) {
                    f.every(B => B.status === se.COMPLETE) && b();
                    return
                }
                A.status = se.PROCESSING, A.progress = null;
                const F = p.ondata || (B => B),
                    O = p.onerror || (B => null),
                    D = Ve(e, p.url, T.serverId),
                    C = typeof p.headers == "function" ? p.headers(A) : {
                        ...p.headers, "Content-Type": "application/offset+octet-stream", "Upload-Offset": A.offset, "Upload-Length": s.size, "Upload-Name": s.name
                    },
                    v = A.request = Se(F(A.data), D, {
                        ...p, headers: C
                    });
                v.onload = () => {
                    A.status = se.COMPLETE, A.request = null, P()
                }, v.onprogress = (B, V, Me) => {
                    A.progress = B ? V : null, w()
                }, v.onerror = B => {
                    A.status = se.ERROR, A.request = null, A.error = O(B.response) || B.statusText, N(A) || i(Y("error", B.status, O(B.response) || B.statusText, B.getAllResponseHeaders()))
                }, v.ontimeout = B => {
                    A.status = se.ERROR, A.request = null, N(A) || ye(i)(B)
                }, v.onabort = () => {
                    A.status = se.QUEUED, A.request = null, o()
                }
            },
            N = A => A.retries.length === 0 ? !1 : (A.status = se.WAITING, clearTimeout(A.timeout), A.timeout = setTimeout(() => {
                M(A)
            }, A.retries.shift()), !0),
            w = () => {
                const A = f.reduce((O, D) => O === null || D.progress === null ? null : O + D.progress, 0);
                if (A === null) return l(!1, 0, 0);
                const F = f.reduce((O, D) => O + D.size, 0);
                l(!0, A, F)
            },
            P = () => {
                f.filter(F => F.status === se.PROCESSING).length >= 1 || M()
            },
            U = () => {
                f.forEach(A => {
                    clearTimeout(A.timeout), A.request && A.request.abort()
                })
            };
        return T.serverId ? S(A => {
            T.aborted || (f.filter(F => F.offset < A).forEach(F => {
                F.status = se.COMPLETE, F.progress = F.size
            }), P())
        }) : R(A => {
            T.aborted || (c(A), T.serverId = A, P())
        }), {
            abort: () => {
                T.aborted = !0, U()
            }
        }
    },
    pi = (e, t, n, s) => (r, a, i, l, o, c, d) => {
        if (!r) return;
        const f = s.chunkUploads,
            I = f && r.size > s.chunkSize,
            p = f && (I || s.chunkForce);
        if (r instanceof Blob && p) return Ei(e, t, n, r, a, i, l, o, c, d, s);
        const u = t.ondata || (S => S),
            _ = t.onload || (S => S),
            T = t.onerror || (S => null),
            h = typeof t.headers == "function" ? t.headers(r, a) || {} : {
                ...t.headers
            },
            E = {
                ...t, headers: h
            };
        var m = new FormData;
        X(a) && m.append(n, JSON.stringify(a)), (r instanceof Blob ? [{
            name: null,
            file: r
        }] : r).forEach(S => {
            m.append(n, S.file, S.name === null ? S.file.name : `${S.name}${S.file.name}`)
        });
        const R = Se(u(m), Ve(e, t.url), E);
        return R.onload = S => {
            i(Y("load", S.status, _(S.response), S.getAllResponseHeaders()))
        }, R.onerror = S => {
            l(Y("error", S.status, T(S.response) || S.statusText, S.getAllResponseHeaders()))
        }, R.ontimeout = ye(l), R.onprogress = o, R.onabort = c, R
    },
    Ii = (e = "", t, n, s) => typeof t == "function" ? (...r) => t(n, ...r, s) : !t || !Q(t.url) ? null : pi(e, t, n, s),
    xe = (e = "", t) => {
        if (typeof t == "function") return t;
        if (!t || !Q(t.url)) return (r, a) => a();
        const n = t.onload || (r => r),
            s = t.onerror || (r => null);
        return (r, a, i) => {
            const l = Se(r, e + t.url, t);
            return l.onload = o => {
                a(Y("load", o.status, n(o.response), o.getAllResponseHeaders()))
            }, l.onerror = o => {
                i(Y("error", o.status, s(o.response) || o.statusText, o.getAllResponseHeaders()))
            }, l.ontimeout = ye(i), l
        }
    },
    ls = (e = 0, t = 1) => e + Math.random() * (t - e),
    _i = (e, t = 1e3, n = 0, s = 25, r = 250) => {
        let a = null;
        const i = Date.now(),
            l = () => {
                let o = Date.now() - i,
                    c = ls(s, r);
                o + c > t && (c = o + c - t);
                let d = o / t;
                if (d >= 1 || document.hidden) {
                    e(1);
                    return
                }
                e(d), a = setTimeout(l, c)
            };
        return t > 0 && l(), {
            clear: () => {
                clearTimeout(a)
            }
        }
    },
    mi = (e, t) => {
        const n = {
            complete: !1,
            perceivedProgress: 0,
            perceivedPerformanceUpdater: null,
            progress: null,
            timestamp: null,
            perceivedDuration: 0,
            duration: 0,
            request: null,
            response: null
        },
            {
                allowMinimumUploadDuration: s
            } = t,
            r = (d, f) => {
                const I = () => {
                    n.duration === 0 || n.progress === null || c.fire("progress", c.getProgress())
                },
                    p = () => {
                        n.complete = !0, c.fire("load-perceived", n.response.body)
                    };
                c.fire("start"), n.timestamp = Date.now(), n.perceivedPerformanceUpdater = _i(u => {
                    n.perceivedProgress = u, n.perceivedDuration = Date.now() - n.timestamp, I(), n.response && n.perceivedProgress === 1 && !n.complete && p()
                }, s ? ls(750, 1500) : 0), n.request = e(d, f, u => {
                    n.response = X(u) ? u : {
                        type: "load",
                        code: 200,
                        body: `${u}`,
                        headers: {}
                    }, n.duration = Date.now() - n.timestamp, n.progress = 1, c.fire("load", n.response.body), (!s || s && n.perceivedProgress === 1) && p()
                }, u => {
                    n.perceivedPerformanceUpdater.clear(), c.fire("error", X(u) ? u : {
                        type: "error",
                        code: 0,
                        body: `${u}`
                    })
                }, (u, _, T) => {
                    n.duration = Date.now() - n.timestamp, n.progress = u ? _ / T : null, I()
                }, () => {
                    n.perceivedPerformanceUpdater.clear(), c.fire("abort", n.response ? n.response.body : null)
                }, u => {
                    c.fire("transfer", u)
                })
            },
            a = () => {
                n.request && (n.perceivedPerformanceUpdater.clear(), n.request.abort && n.request.abort(), n.complete = !0)
            },
            i = () => {
                a(), n.complete = !1, n.perceivedProgress = 0, n.progress = 0, n.timestamp = null, n.perceivedDuration = 0, n.duration = 0, n.request = null, n.response = null
            },
            l = s ? () => n.progress ? Math.min(n.progress, n.perceivedProgress) : null : () => n.progress || null,
            o = s ? () => Math.min(n.duration, n.perceivedDuration) : () => n.duration,
            c = {
                ...ut(), process: r, abort: a, getProgress: l, getDuration: o, reset: i
            };
        return c
    },
    cs = e => e.substring(0, e.lastIndexOf(".")) || e,
    Ti = e => {
        let t = [e.name, e.size, e.type];
        return e instanceof Blob || Dt(e) ? t[0] = e.name || is() : Dt(e) ? (t[1] = e.length, t[2] = os(e)) : Q(e) && (t[0] = We(e), t[1] = 0, t[2] = "application/octet-stream"), {
            name: t[0],
            size: t[1],
            type: t[2]
        }
    },
    Ge = e => !!(e instanceof File || e instanceof Blob && e.name),
    ds = e => {
        if (!X(e)) return e;
        const t = lt(e) ? [] : {};
        for (const n in e) {
            if (!e.hasOwnProperty(n)) continue;
            const s = e[n];
            t[n] = s && X(s) ? ds(s) : s
        }
        return t
    },
    gi = (e = null, t = null, n = null) => {
        const s = vt(),
            r = {
                archived: !1,
                frozen: !1,
                released: !1,
                source: null,
                file: n,
                serverFileReference: t,
                transferId: null,
                processingAborted: !1,
                status: t ? G.PROCESSING_COMPLETE : G.INIT,
                activeLoader: null,
                activeProcessor: null
            };
        let a = null;
        const i = {},
            l = y => r.status = y,
            o = (y, ...M) => {
                r.released || r.frozen || L.fire(y, ...M)
            },
            c = () => ft(r.file.name),
            d = () => r.file.type,
            f = () => r.file.size,
            I = () => r.file,
            p = (y, M, N) => {
                if (r.source = y, L.fireSync("init"), r.file) {
                    L.fireSync("load-skip");
                    return
                }
                r.file = Ti(y), M.on("init", () => {
                    o("load-init")
                }), M.on("meta", w => {
                    r.file.size = w.size, r.file.filename = w.filename, w.source && (e = k.LIMBO, r.serverFileReference = w.source, r.status = G.PROCESSING_COMPLETE), o("load-meta")
                }), M.on("progress", w => {
                    l(G.LOADING), o("load-progress", w)
                }), M.on("error", w => {
                    l(G.LOAD_ERROR), o("load-request-error", w)
                }), M.on("abort", () => {
                    l(G.INIT), o("load-abort")
                }), M.on("load", w => {
                    r.activeLoader = null;
                    const P = A => {
                        r.file = Ge(A) ? A : r.file, e === k.LIMBO && r.serverFileReference ? l(G.PROCESSING_COMPLETE) : l(G.IDLE), o("load")
                    },
                        U = A => {
                            r.file = w, o("load-meta"), l(G.LOAD_ERROR), o("load-file-error", A)
                        };
                    if (r.serverFileReference) {
                        P(w);
                        return
                    }
                    N(w, P, U)
                }), M.setSource(y), r.activeLoader = M, M.load()
            },
            u = () => {
                r.activeLoader && r.activeLoader.load()
            },
            _ = () => {
                if (r.activeLoader) {
                    r.activeLoader.abort();
                    return
                }
                l(G.INIT), o("load-abort")
            },
            T = (y, M) => {
                if (r.processingAborted) {
                    r.processingAborted = !1;
                    return
                }
                if (l(G.PROCESSING), a = null, !(r.file instanceof Blob)) {
                    L.on("load", () => {
                        T(y, M)
                    });
                    return
                }
                y.on("load", P => {
                    r.transferId = null, r.serverFileReference = P
                }), y.on("transfer", P => {
                    r.transferId = P
                }), y.on("load-perceived", P => {
                    r.activeProcessor = null, r.transferId = null, r.serverFileReference = P, l(G.PROCESSING_COMPLETE), o("process-complete", P)
                }), y.on("start", () => {
                    o("process-start")
                }), y.on("error", P => {
                    r.activeProcessor = null, l(G.PROCESSING_ERROR), o("process-error", P)
                }), y.on("abort", P => {
                    r.activeProcessor = null, r.serverFileReference = P, l(G.IDLE), o("process-abort"), a && a()
                }), y.on("progress", P => {
                    o("process-progress", P)
                });
                const N = P => {
                    r.archived || y.process(P, {
                        ...i
                    })
                },
                    w = console.error;
                M(r.file, N, w), r.activeProcessor = y
            },
            h = () => {
                r.processingAborted = !1, l(G.PROCESSING_QUEUED)
            },
            E = () => new Promise(y => {
                if (!r.activeProcessor) {
                    r.processingAborted = !0, l(G.IDLE), o("process-abort"), y();
                    return
                }
                a = () => {
                    y()
                }, r.activeProcessor.abort()
            }),
            m = (y, M) => new Promise((N, w) => {
                const P = r.serverFileReference !== null ? r.serverFileReference : r.transferId;
                if (P === null) {
                    N();
                    return
                }
                y(P, () => {
                    r.serverFileReference = null, r.transferId = null, N()
                }, U => {
                    if (!M) {
                        N();
                        return
                    }
                    l(G.PROCESSING_REVERT_ERROR), o("process-revert-error"), w(U)
                }), l(G.IDLE), o("process-revert")
            }),
            R = (y, M, N) => {
                const w = y.split("."),
                    P = w[0],
                    U = w.pop();
                let A = i;
                w.forEach(F => A = A[F]), JSON.stringify(A[U]) !== JSON.stringify(M) && (A[U] = M, o("metadata-update", {
                    key: P,
                    value: i[P],
                    silent: N
                }))
            },
            L = {
                id: {
                    get: () => s
                },
                origin: {
                    get: () => e,
                    set: y => e = y
                },
                serverId: {
                    get: () => r.serverFileReference
                },
                transferId: {
                    get: () => r.transferId
                },
                status: {
                    get: () => r.status
                },
                filename: {
                    get: () => r.file.name
                },
                filenameWithoutExtension: {
                    get: () => cs(r.file.name)
                },
                fileExtension: {
                    get: c
                },
                fileType: {
                    get: d
                },
                fileSize: {
                    get: f
                },
                file: {
                    get: I
                },
                relativePath: {
                    get: () => r.file._relativePath
                },
                source: {
                    get: () => r.source
                },
                getMetadata: y => ds(y ? i[y] : i),
                setMetadata: (y, M, N) => {
                    if (X(y)) {
                        const w = y;
                        return Object.keys(w).forEach(P => {
                            R(P, w[P], M)
                        }), y
                    }
                    return R(y, M, N), M
                },
                extend: (y, M) => b[y] = M,
                abortLoad: _,
                retryLoad: u,
                requestProcessing: h,
                abortProcessing: E,
                load: p,
                process: T,
                revert: m,
                ...ut(),
                freeze: () => r.frozen = !0,
                release: () => r.released = !0,
                released: {
                    get: () => r.released
                },
                archive: () => r.archived = !0,
                archived: {
                    get: () => r.archived
                }
            },
            b = ge(L);
        return b
    },
    hi = (e, t) => Ie(t) ? 0 : Q(t) ? e.findIndex(n => n.id === t) : -1,
    on = (e, t) => {
        const n = hi(e, t);
        if (!(n < 0)) return e[n] || null
    },
    ln = (e, t, n, s, r, a) => {
        const i = Se(null, e, {
            method: "GET",
            responseType: "blob"
        });
        return i.onload = l => {
            const o = l.getAllResponseHeaders(),
                c = Ft(o).name || We(e);
            t(Y("load", l.status, Ne(l.response, c), o))
        }, i.onerror = l => {
            n(Y("error", l.status, l.statusText, l.getAllResponseHeaders()))
        }, i.onheaders = l => {
            a(Y("headers", l.status, null, l.getAllResponseHeaders()))
        }, i.ontimeout = ye(n), i.onprogress = s, i.onabort = r, i
    },
    cn = e => (e.indexOf("//") === 0 && (e = location.protocol + e), e.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0]),
    Ri = e => (e.indexOf(":") > -1 || e.indexOf("//") > -1) && cn(location.href) !== cn(e),
    Xe = e => (...t) => Re(e) ? e(...t) : e,
    Oi = e => !Ge(e.file),
    mt = (e, t) => {
        clearTimeout(t.listUpdateTimeout), t.listUpdateTimeout = setTimeout(() => {
            e("DID_UPDATE_ITEMS", {
                items: de(t.items)
            })
        }, 0)
    },
    dn = (e, ...t) => new Promise(n => {
        if (!e) return n(!0);
        const s = e(...t);
        if (s == null) return n(!0);
        if (typeof s == "boolean") return n(s);
        typeof s.then == "function" && s.then(n)
    }),
    Tt = (e, t) => {
        e.items.sort((n, s) => t(ee(n), ee(s)))
    },
    re = (e, t) => ({
        query: n,
        success: s = () => { },
        failure: r = () => { },
        ...a
    } = {}) => {
        const i = Oe(e.items, n);
        if (!i) {
            r({
                error: Y("error", 0, "Item not found"),
                file: null
            });
            return
        }
        t(i, s, r, a || {})
    },
    Si = (e, t, n) => ({
        ABORT_ALL: () => {
            de(n.items).forEach(s => {
                s.freeze(), s.abortLoad(), s.abortProcessing()
            })
        },
        DID_SET_FILES: ({
            value: s = []
        }) => {
            const r = s.map(i => ({
                source: i.source ? i.source : i,
                options: i.options
            }));
            let a = de(n.items);
            a.forEach(i => {
                r.find(l => l.source === i.source || l.source === i.file) || e("REMOVE_ITEM", {
                    query: i,
                    remove: !1
                })
            }), a = de(n.items), r.forEach((i, l) => {
                a.find(o => o.source === i.source || o.file === i.source) || e("ADD_ITEM", {
                    ...i, interactionMethod: ae.NONE, index: l
                })
            })
        },
        DID_UPDATE_ITEM_METADATA: ({
            id: s,
            action: r,
            change: a
        }) => {
            a.silent || (clearTimeout(n.itemUpdateTimeout), n.itemUpdateTimeout = setTimeout(() => {
                const i = on(n.items, s);
                if (!t("IS_ASYNC")) {
                    ce("SHOULD_PREPARE_OUTPUT", !1, {
                        item: i,
                        query: t,
                        action: r,
                        change: a
                    }).then(d => {
                        const f = t("GET_BEFORE_PREPARE_FILE");
                        f && (d = f(i, d)), d && e("REQUEST_PREPARE_OUTPUT", {
                            query: s,
                            item: i,
                            success: I => {
                                e("DID_PREPARE_OUTPUT", {
                                    id: s,
                                    file: I
                                })
                            }
                        }, !0)
                    });
                    return
                }
                i.origin === k.LOCAL && e("DID_LOAD_ITEM", {
                    id: i.id,
                    error: null,
                    serverFileReference: i.source
                });
                const l = () => {
                    setTimeout(() => {
                        e("REQUEST_ITEM_PROCESSING", {
                            query: s
                        })
                    }, 32)
                },
                    o = d => {
                        i.revert(xe(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")).then(d ? l : () => { }).catch(() => { })
                    },
                    c = d => {
                        i.abortProcessing().then(d ? l : () => { })
                    };
                if (i.status === G.PROCESSING_COMPLETE) return o(n.options.instantUpload);
                if (i.status === G.PROCESSING) return c(n.options.instantUpload);
                n.options.instantUpload && l()
            }, 0))
        },
        MOVE_ITEM: ({
            query: s,
            index: r
        }) => {
            const a = Oe(n.items, s);
            if (!a) return;
            const i = n.items.indexOf(a);
            r = rs(r, 0, n.items.length - 1), i !== r && n.items.splice(r, 0, n.items.splice(i, 1)[0])
        },
        SORT: ({
            compare: s
        }) => {
            Tt(n, s), e("DID_SORT_ITEMS", {
                items: t("GET_ACTIVE_ITEMS")
            })
        },
        ADD_ITEMS: ({
            items: s,
            index: r,
            interactionMethod: a,
            success: i = () => { },
            failure: l = () => { }
        }) => {
            let o = r;
            if (r === -1 || typeof r > "u") {
                const p = t("GET_ITEM_INSERT_LOCATION"),
                    u = t("GET_TOTAL_ITEMS");
                o = p === "before" ? 0 : u
            }
            const c = t("GET_IGNORED_FILES"),
                d = p => Ge(p) ? !c.includes(p.name.toLowerCase()) : !Ie(p),
                I = s.filter(d).map(p => new Promise((u, _) => {
                    e("ADD_ITEM", {
                        interactionMethod: a,
                        source: p.source || p,
                        success: u,
                        failure: _,
                        index: o++,
                        options: p.options || {}
                    })
                }));
            Promise.all(I).then(i).catch(l)
        },
        ADD_ITEM: ({
            source: s,
            index: r = -1,
            interactionMethod: a,
            success: i = () => { },
            failure: l = () => { },
            options: o = {}
        }) => {
            if (Ie(s)) {
                l({
                    error: Y("error", 0, "No source"),
                    file: null
                });
                return
            }
            if (Ge(s) && n.options.ignoredFiles.includes(s.name.toLowerCase())) return;
            if (!Jr(n)) {
                if (n.options.allowMultiple || !n.options.allowMultiple && !n.options.allowReplace) {
                    const E = Y("warning", 0, "Max files");
                    e("DID_THROW_MAX_FILES", {
                        source: s,
                        error: E
                    }), l({
                        error: E,
                        file: null
                    });
                    return
                }
                const h = de(n.items)[0];
                if (h.status === G.PROCESSING_COMPLETE || h.status === G.PROCESSING_REVERT_ERROR) {
                    const E = t("GET_FORCE_REVERT");
                    if (h.revert(xe(n.options.server.url, n.options.server.revert), E).then(() => {
                        E && e("ADD_ITEM", {
                            source: s,
                            index: r,
                            interactionMethod: a,
                            success: i,
                            failure: l,
                            options: o
                        })
                    }).catch(() => { }), E) return
                }
                e("REMOVE_ITEM", {
                    query: h.id
                })
            }
            const c = o.type === "local" ? k.LOCAL : o.type === "limbo" ? k.LIMBO : k.INPUT,
                d = gi(c, c === k.INPUT ? null : s, o.file);
            Object.keys(o.metadata || {}).forEach(h => {
                d.setMetadata(h, o.metadata[h])
            }), Ae("DID_CREATE_ITEM", d, {
                query: t,
                dispatch: e
            });
            const f = t("GET_ITEM_INSERT_LOCATION");
            n.options.itemInsertLocationFreedom || (r = f === "before" ? -1 : n.items.length), ti(n.items, d, r), Re(f) && s && Tt(n, f);
            const I = d.id;
            d.on("init", () => {
                e("DID_INIT_ITEM", {
                    id: I
                })
            }), d.on("load-init", () => {
                e("DID_START_ITEM_LOAD", {
                    id: I
                })
            }), d.on("load-meta", () => {
                e("DID_UPDATE_ITEM_META", {
                    id: I
                })
            }), d.on("load-progress", h => {
                e("DID_UPDATE_ITEM_LOAD_PROGRESS", {
                    id: I,
                    progress: h
                })
            }), d.on("load-request-error", h => {
                const E = Xe(n.options.labelFileLoadError)(h);
                if (h.code >= 400 && h.code < 500) {
                    e("DID_THROW_ITEM_INVALID", {
                        id: I,
                        error: h,
                        status: {
                            main: E,
                            sub: `${h.code} (${h.body})`
                        }
                    }), l({
                        error: h,
                        file: ee(d)
                    });
                    return
                }
                e("DID_THROW_ITEM_LOAD_ERROR", {
                    id: I,
                    error: h,
                    status: {
                        main: E,
                        sub: n.options.labelTapToRetry
                    }
                })
            }), d.on("load-file-error", h => {
                e("DID_THROW_ITEM_INVALID", {
                    id: I,
                    error: h.status,
                    status: h.status
                }), l({
                    error: h.status,
                    file: ee(d)
                })
            }), d.on("load-abort", () => {
                e("REMOVE_ITEM", {
                    query: I
                })
            }), d.on("load-skip", () => {
                e("COMPLETE_LOAD_ITEM", {
                    query: I,
                    item: d,
                    data: {
                        source: s,
                        success: i
                    }
                })
            }), d.on("load", () => {
                const h = E => {
                    if (!E) {
                        e("REMOVE_ITEM", {
                            query: I
                        });
                        return
                    }
                    d.on("metadata-update", m => {
                        e("DID_UPDATE_ITEM_METADATA", {
                            id: I,
                            change: m
                        })
                    }), ce("SHOULD_PREPARE_OUTPUT", !1, {
                        item: d,
                        query: t
                    }).then(m => {
                        const R = t("GET_BEFORE_PREPARE_FILE");
                        R && (m = R(d, m));
                        const S = () => {
                            e("COMPLETE_LOAD_ITEM", {
                                query: I,
                                item: d,
                                data: {
                                    source: s,
                                    success: i
                                }
                            }), mt(e, n)
                        };
                        if (m) {
                            e("REQUEST_PREPARE_OUTPUT", {
                                query: I,
                                item: d,
                                success: L => {
                                    e("DID_PREPARE_OUTPUT", {
                                        id: I,
                                        file: L
                                    }), S()
                                }
                            }, !0);
                            return
                        }
                        S()
                    })
                };
                ce("DID_LOAD_ITEM", d, {
                    query: t,
                    dispatch: e
                }).then(() => {
                    dn(t("GET_BEFORE_ADD_FILE"), ee(d)).then(h)
                }).catch(E => {
                    if (!E || !E.error || !E.status) return h(!1);
                    e("DID_THROW_ITEM_INVALID", {
                        id: I,
                        error: E.error,
                        status: E.status
                    })
                })
            }), d.on("process-start", () => {
                e("DID_START_ITEM_PROCESSING", {
                    id: I
                })
            }), d.on("process-progress", h => {
                e("DID_UPDATE_ITEM_PROCESS_PROGRESS", {
                    id: I,
                    progress: h
                })
            }), d.on("process-error", h => {
                e("DID_THROW_ITEM_PROCESSING_ERROR", {
                    id: I,
                    error: h,
                    status: {
                        main: Xe(n.options.labelFileProcessingError)(h),
                        sub: n.options.labelTapToRetry
                    }
                })
            }), d.on("process-revert-error", h => {
                e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
                    id: I,
                    error: h,
                    status: {
                        main: Xe(n.options.labelFileProcessingRevertError)(h),
                        sub: n.options.labelTapToRetry
                    }
                })
            }), d.on("process-complete", h => {
                e("DID_COMPLETE_ITEM_PROCESSING", {
                    id: I,
                    error: null,
                    serverFileReference: h
                }), e("DID_DEFINE_VALUE", {
                    id: I,
                    value: h
                })
            }), d.on("process-abort", () => {
                e("DID_ABORT_ITEM_PROCESSING", {
                    id: I
                })
            }), d.on("process-revert", () => {
                e("DID_REVERT_ITEM_PROCESSING", {
                    id: I
                }), e("DID_DEFINE_VALUE", {
                    id: I,
                    value: null
                })
            }), e("DID_ADD_ITEM", {
                id: I,
                index: r,
                interactionMethod: a
            }), mt(e, n);
            const {
                url: p,
                load: u,
                restore: _,
                fetch: T
            } = n.options.server || {};
            d.load(s, fi(c === k.INPUT ? Q(s) && Ri(s) && T ? _t(p, T) : ln : c === k.LIMBO ? _t(p, _) : _t(p, u)), (h, E, m) => {
                ce("LOAD_FILE", h, {
                    query: t
                }).then(E).catch(m)
            })
        },
        REQUEST_PREPARE_OUTPUT: ({
            item: s,
            success: r,
            failure: a = () => { }
        }) => {
            const i = {
                error: Y("error", 0, "Item not found"),
                file: null
            };
            if (s.archived) return a(i);
            ce("PREPARE_OUTPUT", s.file, {
                query: t,
                item: s
            }).then(l => {
                ce("COMPLETE_PREPARE_OUTPUT", l, {
                    query: t,
                    item: s
                }).then(o => {
                    if (s.archived) return a(i);
                    r(o)
                })
            })
        },
        COMPLETE_LOAD_ITEM: ({
            item: s,
            data: r
        }) => {
            const {
                success: a,
                source: i
            } = r, l = t("GET_ITEM_INSERT_LOCATION");
            if (Re(l) && i && Tt(n, l), e("DID_LOAD_ITEM", {
                id: s.id,
                error: null,
                serverFileReference: s.origin === k.INPUT ? null : i
            }), a(ee(s)), s.origin === k.LOCAL) {
                e("DID_LOAD_LOCAL_ITEM", {
                    id: s.id
                });
                return
            }
            if (s.origin === k.LIMBO) {
                e("DID_COMPLETE_ITEM_PROCESSING", {
                    id: s.id,
                    error: null,
                    serverFileReference: i
                }), e("DID_DEFINE_VALUE", {
                    id: s.id,
                    value: s.serverId || i
                });
                return
            }
            t("IS_ASYNC") && n.options.instantUpload && e("REQUEST_ITEM_PROCESSING", {
                query: s.id
            })
        },
        RETRY_ITEM_LOAD: re(n, s => {
            s.retryLoad()
        }),
        REQUEST_ITEM_PREPARE: re(n, (s, r, a) => {
            e("REQUEST_PREPARE_OUTPUT", {
                query: s.id,
                item: s,
                success: i => {
                    e("DID_PREPARE_OUTPUT", {
                        id: s.id,
                        file: i
                    }), r({
                        file: s,
                        output: i
                    })
                },
                failure: a
            }, !0)
        }),
        REQUEST_ITEM_PROCESSING: re(n, (s, r, a) => {
            if (!(s.status === G.IDLE || s.status === G.PROCESSING_ERROR)) {
                const l = () => e("REQUEST_ITEM_PROCESSING", {
                    query: s,
                    success: r,
                    failure: a
                }),
                    o = () => document.hidden ? l() : setTimeout(l, 32);
                s.status === G.PROCESSING_COMPLETE || s.status === G.PROCESSING_REVERT_ERROR ? s.revert(xe(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")).then(o).catch(() => { }) : s.status === G.PROCESSING && s.abortProcessing().then(o);
                return
            }
            s.status !== G.PROCESSING_QUEUED && (s.requestProcessing(), e("DID_REQUEST_ITEM_PROCESSING", {
                id: s.id
            }), e("PROCESS_ITEM", {
                query: s,
                success: r,
                failure: a
            }, !0))
        }),
        PROCESS_ITEM: re(n, (s, r, a) => {
            const i = t("GET_MAX_PARALLEL_UPLOADS");
            if (t("GET_ITEMS_BY_STATUS", G.PROCESSING).length === i) {
                n.processingQueue.push({
                    id: s.id,
                    success: r,
                    failure: a
                });
                return
            }
            if (s.status === G.PROCESSING) return;
            const o = () => {
                const d = n.processingQueue.shift();
                if (!d) return;
                const {
                    id: f,
                    success: I,
                    failure: p
                } = d, u = Oe(n.items, f);
                if (!u || u.archived) {
                    o();
                    return
                }
                e("PROCESS_ITEM", {
                    query: f,
                    success: I,
                    failure: p
                }, !0)
            };
            s.onOnce("process-complete", () => {
                r(ee(s)), o();
                const d = n.options.server;
                if (n.options.instantUpload && s.origin === k.LOCAL && Re(d.remove)) {
                    const p = () => { };
                    s.origin = k.LIMBO, n.options.server.remove(s.source, p, p)
                }
                t("GET_ITEMS_BY_STATUS", G.PROCESSING_COMPLETE).length === n.items.length && e("DID_COMPLETE_ITEM_PROCESSING_ALL")
            }), s.onOnce("process-error", d => {
                a({
                    error: d,
                    file: ee(s)
                }), o()
            });
            const c = n.options;
            s.process(mi(Ii(c.server.url, c.server.process, c.name, {
                chunkTransferId: s.transferId,
                chunkServer: c.server.patch,
                chunkUploads: c.chunkUploads,
                chunkForce: c.chunkForce,
                chunkSize: c.chunkSize,
                chunkRetryDelays: c.chunkRetryDelays
            }), {
                allowMinimumUploadDuration: t("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
            }), (d, f, I) => {
                ce("PREPARE_OUTPUT", d, {
                    query: t,
                    item: s
                }).then(p => {
                    e("DID_PREPARE_OUTPUT", {
                        id: s.id,
                        file: p
                    }), f(p)
                }).catch(I)
            })
        }),
        RETRY_ITEM_PROCESSING: re(n, s => {
            e("REQUEST_ITEM_PROCESSING", {
                query: s
            })
        }),
        REQUEST_REMOVE_ITEM: re(n, s => {
            dn(t("GET_BEFORE_REMOVE_FILE"), ee(s)).then(r => {
                r && e("REMOVE_ITEM", {
                    query: s
                })
            })
        }),
        RELEASE_ITEM: re(n, s => {
            s.release()
        }),
        REMOVE_ITEM: re(n, (s, r, a, i) => {
            const l = () => {
                const c = s.id;
                on(n.items, c).archive(), e("DID_REMOVE_ITEM", {
                    error: null,
                    id: c,
                    item: s
                }), mt(e, n), r(ee(s))
            },
                o = n.options.server;
            s.origin === k.LOCAL && o && Re(o.remove) && i.remove !== !1 ? (e("DID_START_ITEM_REMOVE", {
                id: s.id
            }), o.remove(s.source, () => l(), c => {
                e("DID_THROW_ITEM_REMOVE_ERROR", {
                    id: s.id,
                    error: Y("error", 0, c, null),
                    status: {
                        main: Xe(n.options.labelFileRemoveError)(c),
                        sub: n.options.labelTapToRetry
                    }
                })
            })) : ((i.revert && s.origin !== k.LOCAL && s.serverId !== null || n.options.chunkUploads && s.file.size > n.options.chunkSize || n.options.chunkUploads && n.options.chunkForce) && s.revert(xe(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")), l())
        }),
        ABORT_ITEM_LOAD: re(n, s => {
            s.abortLoad()
        }),
        ABORT_ITEM_PROCESSING: re(n, s => {
            if (s.serverId) {
                e("REVERT_ITEM_PROCESSING", {
                    id: s.id
                });
                return
            }
            s.abortProcessing().then(() => {
                n.options.instantUpload && e("REMOVE_ITEM", {
                    query: s.id
                })
            })
        }),
        REQUEST_REVERT_ITEM_PROCESSING: re(n, s => {
            if (!n.options.instantUpload) {
                e("REVERT_ITEM_PROCESSING", {
                    query: s
                });
                return
            }
            const r = l => {
                l && e("REVERT_ITEM_PROCESSING", {
                    query: s
                })
            },
                a = t("GET_BEFORE_REMOVE_FILE");
            if (!a) return r(!0);
            const i = a(ee(s));
            if (i == null) return r(!0);
            if (typeof i == "boolean") return r(i);
            typeof i.then == "function" && i.then(r)
        }),
        REVERT_ITEM_PROCESSING: re(n, s => {
            s.revert(xe(n.options.server.url, n.options.server.revert), t("GET_FORCE_REVERT")).then(() => {
                (n.options.instantUpload || Oi(s)) && e("REMOVE_ITEM", {
                    query: s.id
                })
            }).catch(() => { })
        }),
        SET_OPTIONS: ({
            options: s
        }) => {
            const r = Object.keys(s),
                a = yi.filter(l => r.includes(l));
            [...a, ...Object.keys(s).filter(l => !a.includes(l))].forEach(l => {
                e(`SET_${dt(l, "_").toUpperCase()}`, {
                    value: s[l]
                })
            })
        }
    }),
    yi = ["server"],
    Bt = e => e,
    _e = e => document.createElement(e),
    q = (e, t) => {
        let n = e.childNodes[0];
        n ? t !== n.nodeValue && (n.nodeValue = t) : (n = document.createTextNode(t), e.appendChild(n))
    },
    un = (e, t, n, s) => {
        const r = (s % 360 - 90) * Math.PI / 180;
        return {
            x: e + n * Math.cos(r),
            y: t + n * Math.sin(r)
        }
    },
    Di = (e, t, n, s, r, a) => {
        const i = un(e, t, n, r),
            l = un(e, t, n, s);
        return ["M", i.x, i.y, "A", n, n, 0, a, 0, l.x, l.y].join(" ")
    },
    Ai = (e, t, n, s, r) => {
        let a = 1;
        return r > s && r - s <= .5 && (a = 0), s > r && s - r >= .5 && (a = 0), Di(e, t, n, Math.min(.9999, s) * 360, Math.min(.9999, r) * 360, a)
    },
    Li = ({
        root: e,
        props: t
    }) => {
        t.spin = !1, t.progress = 0, t.opacity = 0;
        const n = st("svg");
        e.ref.path = st("path", {
            "stroke-width": 2,
            "stroke-linecap": "round"
        }), n.appendChild(e.ref.path), e.ref.svg = n, e.appendChild(n)
    },
    Mi = ({
        root: e,
        props: t
    }) => {
        if (t.opacity === 0) return;
        t.align && (e.element.dataset.align = t.align);
        const n = parseInt(z(e.ref.path, "stroke-width"), 10),
            s = e.rect.element.width * .5;
        let r = 0,
            a = 0;
        t.spin ? (r = 0, a = .5) : (r = 0, a = t.progress);
        const i = Ai(s, s, s - n, r, a);
        z(e.ref.path, "d", i), z(e.ref.path, "stroke-opacity", t.spin || t.progress > 0 ? 1 : 0)
    },
    fn = $({
        tag: "div",
        name: "progress-indicator",
        ignoreRectUpdate: !0,
        ignoreRect: !0,
        create: Li,
        write: Mi,
        mixins: {
            apis: ["progress", "spin", "align"],
            styles: ["opacity"],
            animations: {
                opacity: {
                    type: "tween",
                    duration: 500
                },
                progress: {
                    type: "spring",
                    stiffness: .95,
                    damping: .65,
                    mass: 10
                }
            }
        }
    }),
    wi = ({
        root: e,
        props: t
    }) => {
        e.element.innerHTML = (t.icon || "") + `<span>${t.label}</span>`, t.isDisabled = !1
    },
    Pi = ({
        root: e,
        props: t
    }) => {
        const {
            isDisabled: n
        } = t, s = e.query("GET_DISABLED") || t.opacity === 0;
        s && !n ? (t.isDisabled = !0, z(e.element, "disabled", "disabled")) : !s && n && (t.isDisabled = !1, e.element.removeAttribute("disabled"))
    },
    us = $({
        tag: "button",
        attributes: {
            type: "button"
        },
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        name: "file-action-button",
        mixins: {
            apis: ["label"],
            styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
            animations: {
                scaleX: "spring",
                scaleY: "spring",
                translateX: "spring",
                translateY: "spring",
                opacity: {
                    type: "tween",
                    duration: 250
                }
            },
            listeners: !0
        },
        create: wi,
        write: Pi
    }),
    fs = (e, t = ".", n = 1e3, s = {}) => {
        const {
            labelBytes: r = "bytes",
            labelKilobytes: a = "KB",
            labelMegabytes: i = "MB",
            labelGigabytes: l = "GB"
        } = s;
        e = Math.round(Math.abs(e));
        const o = n,
            c = n * n,
            d = n * n * n;
        return e < o ? `${e} ${r}` : e < c ? `${Math.floor(e / o)} ${a}` : e < d ? `${En(e / c, 1, t)} ${i}` : `${En(e / d, 2, t)} ${l}`
    },
    En = (e, t, n) => e.toFixed(t).split(".").filter(s => s !== "0").join(n),
    Ci = ({
        root: e,
        props: t
    }) => {
        const n = _e("span");
        n.className = "filepond--file-info-main", z(n, "aria-hidden", "true"), e.appendChild(n), e.ref.fileName = n;
        const s = _e("span");
        s.className = "filepond--file-info-sub", e.appendChild(s), e.ref.fileSize = s, q(s, e.query("GET_LABEL_FILE_WAITING_FOR_SIZE")), q(n, Bt(e.query("GET_ITEM_NAME", t.id)))
    },
    At = ({
        root: e,
        props: t
    }) => {
        q(e.ref.fileSize, fs(e.query("GET_ITEM_SIZE", t.id), ".", e.query("GET_FILE_SIZE_BASE"), e.query("GET_FILE_SIZE_LABELS", e.query))), q(e.ref.fileName, Bt(e.query("GET_ITEM_NAME", t.id)))
    },
    pn = ({
        root: e,
        props: t
    }) => {
        if (Fe(e.query("GET_ITEM_SIZE", t.id))) {
            At({
                root: e,
                props: t
            });
            return
        }
        q(e.ref.fileSize, e.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"))
    },
    bi = $({
        name: "file-info",
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: K({
            DID_LOAD_ITEM: At,
            DID_UPDATE_ITEM_META: At,
            DID_THROW_ITEM_LOAD_ERROR: pn,
            DID_THROW_ITEM_INVALID: pn
        }),
        didCreateView: e => {
            Ae("CREATE_VIEW", {
                ...e, view: e
            })
        },
        create: Ci,
        mixins: {
            styles: ["translateX", "translateY"],
            animations: {
                translateX: "spring",
                translateY: "spring"
            }
        }
    }),
    Es = e => Math.round(e * 100),
    vi = ({
        root: e
    }) => {
        const t = _e("span");
        t.className = "filepond--file-status-main", e.appendChild(t), e.ref.main = t;
        const n = _e("span");
        n.className = "filepond--file-status-sub", e.appendChild(n), e.ref.sub = n, ps({
            root: e,
            action: {
                progress: null
            }
        })
    },
    ps = ({
        root: e,
        action: t
    }) => {
        const n = t.progress === null ? e.query("GET_LABEL_FILE_LOADING") : `${e.query("GET_LABEL_FILE_LOADING")} ${Es(t.progress)}%`;
        q(e.ref.main, n), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"))
    },
    Ni = ({
        root: e,
        action: t
    }) => {
        const n = t.progress === null ? e.query("GET_LABEL_FILE_PROCESSING") : `${e.query("GET_LABEL_FILE_PROCESSING")} ${Es(t.progress)}%`;
        q(e.ref.main, n), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"))
    },
    Gi = ({
        root: e
    }) => {
        q(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING")), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"))
    },
    Fi = ({
        root: e
    }) => {
        q(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_ABORTED")), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_RETRY"))
    },
    Bi = ({
        root: e
    }) => {
        q(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_COMPLETE")), q(e.ref.sub, e.query("GET_LABEL_TAP_TO_UNDO"))
    },
    In = ({
        root: e
    }) => {
        q(e.ref.main, ""), q(e.ref.sub, "")
    },
    Ue = ({
        root: e,
        action: t
    }) => {
        q(e.ref.main, t.status.main), q(e.ref.sub, t.status.sub)
    },
    xi = $({
        name: "file-status",
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: K({
            DID_LOAD_ITEM: In,
            DID_REVERT_ITEM_PROCESSING: In,
            DID_REQUEST_ITEM_PROCESSING: Gi,
            DID_ABORT_ITEM_PROCESSING: Fi,
            DID_COMPLETE_ITEM_PROCESSING: Bi,
            DID_UPDATE_ITEM_PROCESS_PROGRESS: Ni,
            DID_UPDATE_ITEM_LOAD_PROGRESS: ps,
            DID_THROW_ITEM_LOAD_ERROR: Ue,
            DID_THROW_ITEM_INVALID: Ue,
            DID_THROW_ITEM_PROCESSING_ERROR: Ue,
            DID_THROW_ITEM_PROCESSING_REVERT_ERROR: Ue,
            DID_THROW_ITEM_REMOVE_ERROR: Ue
        }),
        didCreateView: e => {
            Ae("CREATE_VIEW", {
                ...e, view: e
            })
        },
        create: vi,
        mixins: {
            styles: ["translateX", "translateY", "opacity"],
            animations: {
                opacity: {
                    type: "tween",
                    duration: 250
                },
                translateX: "spring",
                translateY: "spring"
            }
        }
    }),
    Lt = {
        AbortItemLoad: {
            label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
            action: "ABORT_ITEM_LOAD",
            className: "filepond--action-abort-item-load",
            align: "LOAD_INDICATOR_POSITION"
        },
        RetryItemLoad: {
            label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
            action: "RETRY_ITEM_LOAD",
            icon: "GET_ICON_RETRY",
            className: "filepond--action-retry-item-load",
            align: "BUTTON_PROCESS_ITEM_POSITION"
        },
        RemoveItem: {
            label: "GET_LABEL_BUTTON_REMOVE_ITEM",
            action: "REQUEST_REMOVE_ITEM",
            icon: "GET_ICON_REMOVE",
            className: "filepond--action-remove-item",
            align: "BUTTON_REMOVE_ITEM_POSITION"
        },
        ProcessItem: {
            label: "GET_LABEL_BUTTON_PROCESS_ITEM",
            action: "REQUEST_ITEM_PROCESSING",
            icon: "GET_ICON_PROCESS",
            className: "filepond--action-process-item",
            align: "BUTTON_PROCESS_ITEM_POSITION"
        },
        AbortItemProcessing: {
            label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
            action: "ABORT_ITEM_PROCESSING",
            className: "filepond--action-abort-item-processing",
            align: "BUTTON_PROCESS_ITEM_POSITION"
        },
        RetryItemProcessing: {
            label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
            action: "RETRY_ITEM_PROCESSING",
            icon: "GET_ICON_RETRY",
            className: "filepond--action-retry-item-processing",
            align: "BUTTON_PROCESS_ITEM_POSITION"
        },
        RevertItemProcessing: {
            label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
            action: "REQUEST_REVERT_ITEM_PROCESSING",
            icon: "GET_ICON_UNDO",
            className: "filepond--action-revert-item-processing",
            align: "BUTTON_PROCESS_ITEM_POSITION"
        }
    },
    Mt = [];
H(Lt, e => {
    Mt.push(e)
});
const ne = e => {
    if (wt(e) === "right") return 0;
    const t = e.ref.buttonRemoveItem.rect.element;
    return t.hidden ? null : t.width + t.left
},
    Ui = e => e.ref.buttonAbortItemLoad.rect.element.width,
    je = e => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4),
    Vi = e => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2),
    Hi = e => e.query("GET_STYLE_LOAD_INDICATOR_POSITION"),
    Yi = e => e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"),
    wt = e => e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"),
    qi = {
        buttonAbortItemLoad: {
            opacity: 0
        },
        buttonRetryItemLoad: {
            opacity: 0
        },
        buttonRemoveItem: {
            opacity: 0
        },
        buttonProcessItem: {
            opacity: 0
        },
        buttonAbortItemProcessing: {
            opacity: 0
        },
        buttonRetryItemProcessing: {
            opacity: 0
        },
        buttonRevertItemProcessing: {
            opacity: 0
        },
        loadProgressIndicator: {
            opacity: 0,
            align: Hi
        },
        processProgressIndicator: {
            opacity: 0,
            align: Yi
        },
        processingCompleteIndicator: {
            opacity: 0,
            scaleX: .75,
            scaleY: .75
        },
        info: {
            translateX: 0,
            translateY: 0,
            opacity: 0
        },
        status: {
            translateX: 0,
            translateY: 0,
            opacity: 0
        }
    },
    _n = {
        buttonRemoveItem: {
            opacity: 1
        },
        buttonProcessItem: {
            opacity: 1
        },
        info: {
            translateX: ne
        },
        status: {
            translateX: ne
        }
    },
    gt = {
        buttonAbortItemProcessing: {
            opacity: 1
        },
        processProgressIndicator: {
            opacity: 1
        },
        status: {
            opacity: 1
        }
    },
    Ce = {
        DID_THROW_ITEM_INVALID: {
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: ne
            },
            status: {
                translateX: ne,
                opacity: 1
            }
        },
        DID_START_ITEM_LOAD: {
            buttonAbortItemLoad: {
                opacity: 1
            },
            loadProgressIndicator: {
                opacity: 1
            },
            status: {
                opacity: 1
            }
        },
        DID_THROW_ITEM_LOAD_ERROR: {
            buttonRetryItemLoad: {
                opacity: 1
            },
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: ne
            },
            status: {
                opacity: 1
            }
        },
        DID_START_ITEM_REMOVE: {
            processProgressIndicator: {
                opacity: 1,
                align: wt
            },
            info: {
                translateX: ne
            },
            status: {
                opacity: 0
            }
        },
        DID_THROW_ITEM_REMOVE_ERROR: {
            processProgressIndicator: {
                opacity: 0,
                align: wt
            },
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: ne
            },
            status: {
                opacity: 1,
                translateX: ne
            }
        },
        DID_LOAD_ITEM: _n,
        DID_LOAD_LOCAL_ITEM: {
            buttonRemoveItem: {
                opacity: 1
            },
            info: {
                translateX: ne
            },
            status: {
                translateX: ne
            }
        },
        DID_START_ITEM_PROCESSING: gt,
        DID_REQUEST_ITEM_PROCESSING: gt,
        DID_UPDATE_ITEM_PROCESS_PROGRESS: gt,
        DID_COMPLETE_ITEM_PROCESSING: {
            buttonRevertItemProcessing: {
                opacity: 1
            },
            info: {
                opacity: 1
            },
            status: {
                opacity: 1
            }
        },
        DID_THROW_ITEM_PROCESSING_ERROR: {
            buttonRemoveItem: {
                opacity: 1
            },
            buttonRetryItemProcessing: {
                opacity: 1
            },
            status: {
                opacity: 1
            },
            info: {
                translateX: ne
            }
        },
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
            buttonRevertItemProcessing: {
                opacity: 1
            },
            status: {
                opacity: 1
            },
            info: {
                opacity: 1
            }
        },
        DID_ABORT_ITEM_PROCESSING: {
            buttonRemoveItem: {
                opacity: 1
            },
            buttonProcessItem: {
                opacity: 1
            },
            info: {
                translateX: ne
            },
            status: {
                opacity: 1
            }
        },
        DID_REVERT_ITEM_PROCESSING: _n
    },
    Wi = $({
        create: ({
            root: e
        }) => {
            e.element.innerHTML = e.query("GET_ICON_DONE")
        },
        name: "processing-complete-indicator",
        ignoreRect: !0,
        mixins: {
            styles: ["scaleX", "scaleY", "opacity"],
            animations: {
                scaleX: "spring",
                scaleY: "spring",
                opacity: {
                    type: "tween",
                    duration: 250
                }
            }
        }
    }),
    zi = ({
        root: e,
        props: t
    }) => {
        const n = Object.keys(Lt).reduce((u, _) => (u[_] = {
            ...Lt[_]
        }, u), {}),
            {
                id: s
            } = t,
            r = e.query("GET_ALLOW_REVERT"),
            a = e.query("GET_ALLOW_REMOVE"),
            i = e.query("GET_ALLOW_PROCESS"),
            l = e.query("GET_INSTANT_UPLOAD"),
            o = e.query("IS_ASYNC"),
            c = e.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
        let d;
        o ? i && !r ? d = u => !/RevertItemProcessing/.test(u) : !i && r ? d = u => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(u) : !i && !r && (d = u => !/Process/.test(u)) : d = u => !/Process/.test(u);
        const f = d ? Mt.filter(d) : Mt.concat();
        if (l && r && (n.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM", n.RevertItemProcessing.icon = "GET_ICON_REMOVE"), o && !r) {
            const u = Ce.DID_COMPLETE_ITEM_PROCESSING;
            u.info.translateX = Vi, u.info.translateY = je, u.status.translateY = je, u.processingCompleteIndicator = {
                opacity: 1,
                scaleX: 1,
                scaleY: 1
            }
        }
        if (o && !i && (["DID_START_ITEM_PROCESSING", "DID_REQUEST_ITEM_PROCESSING", "DID_UPDATE_ITEM_PROCESS_PROGRESS", "DID_THROW_ITEM_PROCESSING_ERROR"].forEach(u => {
            Ce[u].status.translateY = je
        }), Ce.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = Ui), c && r) {
            n.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
            const u = Ce.DID_COMPLETE_ITEM_PROCESSING;
            u.info.translateX = ne, u.status.translateY = je, u.processingCompleteIndicator = {
                opacity: 1,
                scaleX: 1,
                scaleY: 1
            }
        }
        a || (n.RemoveItem.disabled = !0), H(n, (u, _) => {
            const T = e.createChildView(us, {
                label: e.query(_.label),
                icon: e.query(_.icon),
                opacity: 0
            });
            f.includes(u) && e.appendChildView(T), _.disabled && (T.element.setAttribute("disabled", "disabled"), T.element.setAttribute("hidden", "hidden")), T.element.dataset.align = e.query(`GET_STYLE_${_.align}`), T.element.classList.add(_.className), T.on("click", h => {
                h.stopPropagation(), !_.disabled && e.dispatch(_.action, {
                    query: s
                })
            }), e.ref[`button${u}`] = T
        }), e.ref.processingCompleteIndicator = e.appendChildView(e.createChildView(Wi)), e.ref.processingCompleteIndicator.element.dataset.align = e.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"), e.ref.info = e.appendChildView(e.createChildView(bi, {
            id: s
        })), e.ref.status = e.appendChildView(e.createChildView(xi, {
            id: s
        }));
        const I = e.appendChildView(e.createChildView(fn, {
            opacity: 0,
            align: e.query("GET_STYLE_LOAD_INDICATOR_POSITION")
        }));
        I.element.classList.add("filepond--load-indicator"), e.ref.loadProgressIndicator = I;
        const p = e.appendChildView(e.createChildView(fn, {
            opacity: 0,
            align: e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")
        }));
        p.element.classList.add("filepond--process-indicator"), e.ref.processProgressIndicator = p, e.ref.activeStyles = []
    },
    $i = ({
        root: e,
        actions: t,
        props: n
    }) => {
        ki({
            root: e,
            actions: t,
            props: n
        });
        let s = t.concat().filter(r => /^DID_/.test(r.type)).reverse().find(r => Ce[r.type]);
        if (s) {
            e.ref.activeStyles = [];
            const r = Ce[s.type];
            H(qi, (a, i) => {
                const l = e.ref[a];
                H(i, (o, c) => {
                    const d = r[a] && typeof r[a][o] < "u" ? r[a][o] : c;
                    e.ref.activeStyles.push({
                        control: l,
                        key: o,
                        value: d
                    })
                })
            })
        }
        e.ref.activeStyles.forEach(({
            control: r,
            key: a,
            value: i
        }) => {
            r[a] = typeof i == "function" ? i(e) : i
        })
    },
    ki = K({
        DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({
            root: e,
            action: t
        }) => {
            e.ref.buttonAbortItemProcessing.label = t.value
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({
            root: e,
            action: t
        }) => {
            e.ref.buttonAbortItemLoad.label = t.value
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({
            root: e,
            action: t
        }) => {
            e.ref.buttonAbortItemRemoval.label = t.value
        },
        DID_REQUEST_ITEM_PROCESSING: ({
            root: e
        }) => {
            e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0
        },
        DID_START_ITEM_LOAD: ({
            root: e
        }) => {
            e.ref.loadProgressIndicator.spin = !0, e.ref.loadProgressIndicator.progress = 0
        },
        DID_START_ITEM_REMOVE: ({
            root: e
        }) => {
            e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0
        },
        DID_UPDATE_ITEM_LOAD_PROGRESS: ({
            root: e,
            action: t
        }) => {
            e.ref.loadProgressIndicator.spin = !1, e.ref.loadProgressIndicator.progress = t.progress
        },
        DID_UPDATE_ITEM_PROCESS_PROGRESS: ({
            root: e,
            action: t
        }) => {
            e.ref.processProgressIndicator.spin = !1, e.ref.processProgressIndicator.progress = t.progress
        }
    }),
    Xi = $({
        create: zi,
        write: $i,
        didCreateView: e => {
            Ae("CREATE_VIEW", {
                ...e, view: e
            })
        },
        name: "file"
    }),
    ji = ({
        root: e,
        props: t
    }) => {
        e.ref.fileName = _e("legend"), e.appendChild(e.ref.fileName), e.ref.file = e.appendChildView(e.createChildView(Xi, {
            id: t.id
        })), e.ref.data = !1
    },
    Zi = ({
        root: e,
        props: t
    }) => {
        q(e.ref.fileName, Bt(e.query("GET_ITEM_NAME", t.id)))
    },
    Qi = $({
        create: ji,
        ignoreRect: !0,
        write: K({
            DID_LOAD_ITEM: Zi
        }),
        didCreateView: e => {
            Ae("CREATE_VIEW", {
                ...e, view: e
            })
        },
        tag: "fieldset",
        name: "file-wrapper"
    }),
    mn = {
        type: "spring",
        damping: .6,
        mass: 7
    },
    Ki = ({
        root: e,
        props: t
    }) => {
        [{
            name: "top"
        }, {
            name: "center",
            props: {
                translateY: null,
                scaleY: null
            },
            mixins: {
                animations: {
                    scaleY: mn
                },
                styles: ["translateY", "scaleY"]
            }
        }, {
            name: "bottom",
            props: {
                translateY: null
            },
            mixins: {
                animations: {
                    translateY: mn
                },
                styles: ["translateY"]
            }
        }].forEach(n => {
            Ji(e, n, t.name)
        }), e.element.classList.add(`filepond--${t.name}`), e.ref.scalable = null
    },
    Ji = (e, t, n) => {
        const s = $({
            name: `panel-${t.name} filepond--${n}`,
            mixins: t.mixins,
            ignoreRectUpdate: !0
        }),
            r = e.createChildView(s, t.props);
        e.ref[t.name] = e.appendChildView(r)
    },
    ea = ({
        root: e,
        props: t
    }) => {
        if ((e.ref.scalable === null || t.scalable !== e.ref.scalable) && (e.ref.scalable = Zn(t.scalable) ? t.scalable : !0, e.element.dataset.scalable = e.ref.scalable), !t.height) return;
        const n = e.ref.top.rect.element,
            s = e.ref.bottom.rect.element,
            r = Math.max(n.height + s.height, t.height);
        e.ref.center.translateY = n.height, e.ref.center.scaleY = (r - n.height - s.height) / 100, e.ref.bottom.translateY = r - s.height
    },
    Is = $({
        name: "panel",
        read: ({
            root: e,
            props: t
        }) => t.heightCurrent = e.ref.bottom.translateY,
        write: ea,
        create: Ki,
        ignoreRect: !0,
        mixins: {
            apis: ["height", "heightCurrent", "scalable"]
        }
    }),
    ta = e => {
        const t = e.map(s => s.id);
        let n;
        return {
            setIndex: s => {
                n = s
            },
            getIndex: () => n,
            getItemIndex: s => t.indexOf(s.id)
        }
    },
    Tn = {
        type: "spring",
        stiffness: .75,
        damping: .45,
        mass: 10
    },
    gn = "spring",
    hn = {
        DID_START_ITEM_LOAD: "busy",
        DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
        DID_THROW_ITEM_INVALID: "load-invalid",
        DID_THROW_ITEM_LOAD_ERROR: "load-error",
        DID_LOAD_ITEM: "idle",
        DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
        DID_START_ITEM_REMOVE: "busy",
        DID_START_ITEM_PROCESSING: "busy processing",
        DID_REQUEST_ITEM_PROCESSING: "busy processing",
        DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
        DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
        DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
        DID_ABORT_ITEM_PROCESSING: "cancelled",
        DID_REVERT_ITEM_PROCESSING: "idle"
    },
    na = ({
        root: e,
        props: t
    }) => {
        if (e.ref.handleClick = s => e.dispatch("DID_ACTIVATE_ITEM", {
            id: t.id
        }), e.element.id = `filepond--item-${t.id}`, e.element.addEventListener("click", e.ref.handleClick), e.ref.container = e.appendChildView(e.createChildView(Qi, {
            id: t.id
        })), e.ref.panel = e.appendChildView(e.createChildView(Is, {
            name: "item-panel"
        })), e.ref.panel.height = null, t.markedForRemoval = !1, !e.query("GET_ALLOW_REORDER")) return;
        e.element.dataset.dragState = "idle";
        const n = s => {
            if (!s.isPrimary) return;
            let r = !1;
            const a = {
                x: s.pageX,
                y: s.pageY
            };
            t.dragOrigin = {
                x: e.translateX,
                y: e.translateY
            }, t.dragCenter = {
                x: s.offsetX,
                y: s.offsetY
            };
            const i = ta(e.query("GET_ACTIVE_ITEMS"));
            e.dispatch("DID_GRAB_ITEM", {
                id: t.id,
                dragState: i
            });
            const l = c => {
                if (!c.isPrimary) return;
                c.stopPropagation(), c.preventDefault(), t.dragOffset = {
                    x: c.pageX - a.x,
                    y: c.pageY - a.y
                }, t.dragOffset.x * t.dragOffset.x + t.dragOffset.y * t.dragOffset.y > 16 && !r && (r = !0, e.element.removeEventListener("click", e.ref.handleClick)), e.dispatch("DID_DRAG_ITEM", {
                    id: t.id,
                    dragState: i
                })
            },
                o = c => {
                    c.isPrimary && (document.removeEventListener("pointermove", l), document.removeEventListener("pointerup", o), t.dragOffset = {
                        x: c.pageX - a.x,
                        y: c.pageY - a.y
                    }, e.dispatch("DID_DROP_ITEM", {
                        id: t.id,
                        dragState: i
                    }), r && setTimeout(() => e.element.addEventListener("click", e.ref.handleClick), 0))
                };
            document.addEventListener("pointermove", l), document.addEventListener("pointerup", o)
        };
        e.element.addEventListener("pointerdown", n)
    },
    sa = K({
        DID_UPDATE_PANEL_HEIGHT: ({
            root: e,
            action: t
        }) => {
            e.height = t.height
        }
    }),
    ra = K({
        DID_GRAB_ITEM: ({
            root: e,
            props: t
        }) => {
            t.dragOrigin = {
                x: e.translateX,
                y: e.translateY
            }
        },
        DID_DRAG_ITEM: ({
            root: e
        }) => {
            e.element.dataset.dragState = "drag"
        },
        DID_DROP_ITEM: ({
            root: e,
            props: t
        }) => {
            t.dragOffset = null, t.dragOrigin = null, e.element.dataset.dragState = "drop"
        }
    }, ({
        root: e,
        actions: t,
        props: n,
        shouldOptimize: s
    }) => {
        e.element.dataset.dragState === "drop" && e.scaleX <= 1 && (e.element.dataset.dragState = "idle");
        let r = t.concat().filter(i => /^DID_/.test(i.type)).reverse().find(i => hn[i.type]);
        r && r.type !== n.currentState && (n.currentState = r.type, e.element.dataset.filepondItemState = hn[n.currentState] || "");
        const a = e.query("GET_ITEM_PANEL_ASPECT_RATIO") || e.query("GET_PANEL_ASPECT_RATIO");
        a ? s || (e.height = e.rect.element.width * a) : (sa({
            root: e,
            actions: t,
            props: n
        }), !e.height && e.ref.container.rect.element.height > 0 && (e.height = e.ref.container.rect.element.height)), s && (e.ref.panel.height = null), e.ref.panel.height = e.height
    }),
    ia = $({
        create: na,
        write: ra,
        destroy: ({
            root: e,
            props: t
        }) => {
            e.element.removeEventListener("click", e.ref.handleClick), e.dispatch("RELEASE_ITEM", {
                query: t.id
            })
        },
        tag: "li",
        name: "item",
        mixins: {
            apis: ["id", "interactionMethod", "markedForRemoval", "spawnDate", "dragCenter", "dragOrigin", "dragOffset"],
            styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
            animations: {
                scaleX: gn,
                scaleY: gn,
                translateX: Tn,
                translateY: Tn,
                opacity: {
                    type: "tween",
                    duration: 150
                }
            }
        }
    });
var xt = (e, t) => Math.max(1, Math.floor((e + 1) / t));
const Ut = (e, t, n) => {
    if (!n) return;
    const s = e.rect.element.width,
        r = t.length;
    let a = null;
    if (r === 0 || n.top < t[0].rect.element.top) return -1;
    const l = t[0].rect.element,
        o = l.marginLeft + l.marginRight,
        c = l.width + o,
        d = xt(s, c);
    if (d === 1) {
        for (let p = 0; p < r; p++) {
            const u = t[p],
                _ = u.rect.outer.top + u.rect.element.height * .5;
            if (n.top < _) return p
        }
        return r
    }
    const f = l.marginTop + l.marginBottom,
        I = l.height + f;
    for (let p = 0; p < r; p++) {
        const u = p % d,
            _ = Math.floor(p / d),
            T = u * c,
            h = _ * I,
            E = h - l.marginTop,
            m = T + c,
            R = h + I + l.marginBottom;
        if (n.top < R && n.top > E) {
            if (n.left < m) return p;
            p !== r - 1 ? a = p : a = null
        }
    }
    return a !== null ? a : r
},
    Ze = {
        height: 0,
        width: 0,
        get getHeight() {
            return this.height
        },
        set setHeight(e) {
            (this.height === 0 || e === 0) && (this.height = e)
        },
        get getWidth() {
            return this.width
        },
        set setWidth(e) {
            (this.width === 0 || e === 0) && (this.width = e)
        },
        setDimensions: function (e, t) {
            (this.height === 0 || e === 0) && (this.height = e), (this.width === 0 || t === 0) && (this.width = t)
        }
    },
    aa = ({
        root: e
    }) => {
        z(e.element, "role", "list"), e.ref.lastItemSpanwDate = Date.now()
    },
    oa = ({
        root: e,
        action: t
    }) => {
        const {
            id: n,
            index: s,
            interactionMethod: r
        } = t;
        e.ref.addIndex = s;
        const a = Date.now();
        let i = a,
            l = 1;
        if (r !== ae.NONE) {
            l = 0;
            const o = e.query("GET_ITEM_INSERT_INTERVAL"),
                c = a - e.ref.lastItemSpanwDate;
            i = c < o ? a + (o - c) : a
        }
        e.ref.lastItemSpanwDate = i, e.appendChildView(e.createChildView(ia, {
            spawnDate: i,
            id: n,
            opacity: l,
            interactionMethod: r
        }), s)
    },
    Rn = (e, t, n, s = 0, r = 1) => {
        e.dragOffset ? (e.translateX = null, e.translateY = null, e.translateX = e.dragOrigin.x + e.dragOffset.x, e.translateY = e.dragOrigin.y + e.dragOffset.y, e.scaleX = 1.025, e.scaleY = 1.025) : (e.translateX = t, e.translateY = n, Date.now() > e.spawnDate && (e.opacity === 0 && la(e, t, n, s, r), e.scaleX = 1, e.scaleY = 1, e.opacity = 1))
    },
    la = (e, t, n, s, r) => {
        e.interactionMethod === ae.NONE ? (e.translateX = null, e.translateX = t, e.translateY = null, e.translateY = n) : e.interactionMethod === ae.DROP ? (e.translateX = null, e.translateX = t - s * 20, e.translateY = null, e.translateY = n - r * 10, e.scaleX = .8, e.scaleY = .8) : e.interactionMethod === ae.BROWSE ? (e.translateY = null, e.translateY = n - 30) : e.interactionMethod === ae.API && (e.translateX = null, e.translateX = t - 30, e.translateY = null)
    },
    ca = ({
        root: e,
        action: t
    }) => {
        const {
            id: n
        } = t, s = e.childViews.find(r => r.id === n);
        s && (s.scaleX = .9, s.scaleY = .9, s.opacity = 0, s.markedForRemoval = !0)
    },
    ht = e => e.rect.element.height + e.rect.element.marginBottom * .5 + e.rect.element.marginTop * .5,
    da = e => e.rect.element.width + e.rect.element.marginLeft * .5 + e.rect.element.marginRight * .5,
    ua = ({
        root: e,
        action: t
    }) => {
        const {
            id: n,
            dragState: s
        } = t, r = e.query("GET_ITEM", {
            id: n
        }), a = e.childViews.find(T => T.id === n), i = e.childViews.length, l = s.getItemIndex(r);
        if (!a) return;
        const o = {
            x: a.dragOrigin.x + a.dragOffset.x + a.dragCenter.x,
            y: a.dragOrigin.y + a.dragOffset.y + a.dragCenter.y
        },
            c = ht(a),
            d = da(a);
        let f = Math.floor(e.rect.outer.width / d);
        f > i && (f = i);
        const I = Math.floor(i / f + 1);
        Ze.setHeight = c * I, Ze.setWidth = d * f;
        var p = {
            y: Math.floor(o.y / c),
            x: Math.floor(o.x / d),
            getGridIndex: function () {
                return o.y > Ze.getHeight || o.y < 0 || o.x > Ze.getWidth || o.x < 0 ? l : this.y * f + this.x
            },
            getColIndex: function () {
                const h = e.query("GET_ACTIVE_ITEMS"),
                    E = e.childViews.filter(w => w.rect.element.height),
                    m = h.map(w => E.find(P => P.id === w.id)),
                    R = m.findIndex(w => w === a),
                    S = ht(a),
                    L = m.length;
                let b = L,
                    y = 0,
                    M = 0,
                    N = 0;
                for (let w = 0; w < L; w++)
                    if (y = ht(m[w]), N = M, M = N + y, o.y < M) {
                        if (R > w) {
                            if (o.y < N + S) {
                                b = w;
                                break
                            }
                            continue
                        }
                        b = w;
                        break
                    }
                return b
            }
        };
        const u = f > 1 ? p.getGridIndex() : p.getColIndex();
        e.dispatch("MOVE_ITEM", {
            query: a,
            index: u
        });
        const _ = s.getIndex();
        if (_ === void 0 || _ !== u) {
            if (s.setIndex(u), _ === void 0) return;
            e.dispatch("DID_REORDER_ITEMS", {
                items: e.query("GET_ACTIVE_ITEMS"),
                origin: l,
                target: u
            })
        }
    },
    fa = K({
        DID_ADD_ITEM: oa,
        DID_REMOVE_ITEM: ca,
        DID_DRAG_ITEM: ua
    }),
    Ea = ({
        root: e,
        props: t,
        actions: n,
        shouldOptimize: s
    }) => {
        fa({
            root: e,
            props: t,
            actions: n
        });
        const {
            dragCoordinates: r
        } = t, a = e.rect.element.width, i = e.childViews.filter(m => m.rect.element.height), l = e.query("GET_ACTIVE_ITEMS").map(m => i.find(R => R.id === m.id)).filter(m => m), o = r ? Ut(e, l, r) : null, c = e.ref.addIndex || null;
        e.ref.addIndex = null;
        let d = 0,
            f = 0,
            I = 0;
        if (l.length === 0) return;
        const p = l[0].rect.element,
            u = p.marginTop + p.marginBottom,
            _ = p.marginLeft + p.marginRight,
            T = p.width + _,
            h = p.height + u,
            E = xt(a, T);
        if (E === 1) {
            let m = 0,
                R = 0;
            l.forEach((S, L) => {
                if (o) {
                    let M = L - o;
                    M === -2 ? R = -u * .25 : M === -1 ? R = -u * .75 : M === 0 ? R = u * .75 : M === 1 ? R = u * .25 : R = 0
                }
                s && (S.translateX = null, S.translateY = null), S.markedForRemoval || Rn(S, 0, m + R);
                let y = (S.rect.element.height + u) * (S.markedForRemoval ? S.opacity : 1);
                m += y
            })
        } else {
            let m = 0,
                R = 0;
            l.forEach((S, L) => {
                L === o && (d = 1), L === c && (I += 1), S.markedForRemoval && S.opacity < .5 && (f -= 1);
                const b = L + I + d + f,
                    y = b % E,
                    M = Math.floor(b / E),
                    N = y * T,
                    w = M * h,
                    P = Math.sign(N - m),
                    U = Math.sign(w - R);
                m = N, R = w, !S.markedForRemoval && (s && (S.translateX = null, S.translateY = null), Rn(S, N, w, P, U))
            })
        }
    },
    pa = (e, t) => t.filter(n => n.data && n.data.id ? e.id === n.data.id : !0),
    Ia = $({
        create: aa,
        write: Ea,
        tag: "ul",
        name: "list",
        didWriteView: ({
            root: e
        }) => {
            e.childViews.filter(t => t.markedForRemoval && t.opacity === 0 && t.resting).forEach(t => {
                t._destroy(), e.removeChildView(t)
            })
        },
        filterFrameActionsForChild: pa,
        mixins: {
            apis: ["dragCoordinates"]
        }
    }),
    _a = ({
        root: e,
        props: t
    }) => {
        e.ref.list = e.appendChildView(e.createChildView(Ia)), t.dragCoordinates = null, t.overflowing = !1
    },
    ma = ({
        root: e,
        props: t,
        action: n
    }) => {
        e.query("GET_ITEM_INSERT_LOCATION_FREEDOM") && (t.dragCoordinates = {
            left: n.position.scopeLeft - e.ref.list.rect.element.left,
            top: n.position.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
        })
    },
    Ta = ({
        props: e
    }) => {
        e.dragCoordinates = null
    },
    ga = K({
        DID_DRAG: ma,
        DID_END_DRAG: Ta
    }),
    ha = ({
        root: e,
        props: t,
        actions: n
    }) => {
        if (ga({
            root: e,
            props: t,
            actions: n
        }), e.ref.list.dragCoordinates = t.dragCoordinates, t.overflowing && !t.overflow && (t.overflowing = !1, e.element.dataset.state = "", e.height = null), t.overflow) {
            const s = Math.round(t.overflow);
            s !== e.height && (t.overflowing = !0, e.element.dataset.state = "overflow", e.height = s)
        }
    },
    Ra = $({
        create: _a,
        write: ha,
        name: "list-scroller",
        mixins: {
            apis: ["overflow", "dragCoordinates"],
            styles: ["height", "translateY"],
            animations: {
                translateY: "spring"
            }
        }
    }),
    ue = (e, t, n, s = "") => {
        n ? z(e, t, s) : e.removeAttribute(t)
    },
    Oa = e => {
        if (!(!e || e.value === "")) {
            try {
                e.value = ""
            } catch { }
            if (e.value) {
                const t = _e("form"),
                    n = e.parentNode,
                    s = e.nextSibling;
                t.appendChild(e), t.reset(), s ? n.insertBefore(e, s) : n.appendChild(e)
            }
        }
    },
    Sa = ({
        root: e,
        props: t
    }) => {
        e.element.id = `filepond--browser-${t.id}`, z(e.element, "name", e.query("GET_NAME")), z(e.element, "aria-controls", `filepond--assistant-${t.id}`), z(e.element, "aria-labelledby", `filepond--drop-label-${t.id}`), _s({
            root: e,
            action: {
                value: e.query("GET_ACCEPTED_FILE_TYPES")
            }
        }), ms({
            root: e,
            action: {
                value: e.query("GET_ALLOW_MULTIPLE")
            }
        }), Ts({
            root: e,
            action: {
                value: e.query("GET_ALLOW_DIRECTORIES_ONLY")
            }
        }), Pt({
            root: e
        }), gs({
            root: e,
            action: {
                value: e.query("GET_REQUIRED")
            }
        }), hs({
            root: e,
            action: {
                value: e.query("GET_CAPTURE_METHOD")
            }
        }), e.ref.handleChange = n => {
            if (!e.element.value) return;
            const s = Array.from(e.element.files).map(r => (r._relativePath = r.webkitRelativePath, r));
            setTimeout(() => {
                t.onload(s), Oa(e.element)
            }, 250)
        }, e.element.addEventListener("change", e.ref.handleChange)
    },
    _s = ({
        root: e,
        action: t
    }) => {
        e.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") && ue(e.element, "accept", !!t.value, t.value ? t.value.join(",") : "")
    },
    ms = ({
        root: e,
        action: t
    }) => {
        ue(e.element, "multiple", t.value)
    },
    Ts = ({
        root: e,
        action: t
    }) => {
        ue(e.element, "webkitdirectory", t.value)
    },
    Pt = ({
        root: e
    }) => {
        const t = e.query("GET_DISABLED"),
            n = e.query("GET_ALLOW_BROWSE"),
            s = t || !n;
        ue(e.element, "disabled", s)
    },
    gs = ({
        root: e,
        action: t
    }) => {
        t.value ? e.query("GET_TOTAL_ITEMS") === 0 && ue(e.element, "required", !0) : ue(e.element, "required", !1)
    },
    hs = ({
        root: e,
        action: t
    }) => {
        ue(e.element, "capture", !!t.value, t.value === !0 ? "" : t.value)
    },
    On = ({
        root: e
    }) => {
        const {
            element: t
        } = e;
        e.query("GET_TOTAL_ITEMS") > 0 ? (ue(t, "required", !1), ue(t, "name", !1)) : (ue(t, "name", !0, e.query("GET_NAME")), e.query("GET_CHECK_VALIDITY") && t.setCustomValidity(""), e.query("GET_REQUIRED") && ue(t, "required", !0))
    },
    ya = ({
        root: e
    }) => {
        e.query("GET_CHECK_VALIDITY") && e.element.setCustomValidity(e.query("GET_LABEL_INVALID_FIELD"))
    },
    Da = $({
        tag: "input",
        name: "browser",
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        attributes: {
            type: "file"
        },
        create: Sa,
        destroy: ({
            root: e
        }) => {
            e.element.removeEventListener("change", e.ref.handleChange)
        },
        write: K({
            DID_LOAD_ITEM: On,
            DID_REMOVE_ITEM: On,
            DID_THROW_ITEM_INVALID: ya,
            DID_SET_DISABLED: Pt,
            DID_SET_ALLOW_BROWSE: Pt,
            DID_SET_ALLOW_DIRECTORIES_ONLY: Ts,
            DID_SET_ALLOW_MULTIPLE: ms,
            DID_SET_ACCEPTED_FILE_TYPES: _s,
            DID_SET_CAPTURE_METHOD: hs,
            DID_SET_REQUIRED: gs
        })
    }),
    Sn = {
        ENTER: 13,
        SPACE: 32
    },
    Aa = ({
        root: e,
        props: t
    }) => {
        const n = _e("label");
        z(n, "for", `filepond--browser-${t.id}`), z(n, "id", `filepond--drop-label-${t.id}`), z(n, "aria-hidden", "true"), e.ref.handleKeyDown = s => {
            (s.keyCode === Sn.ENTER || s.keyCode === Sn.SPACE) && (s.preventDefault(), e.ref.label.click())
        }, e.ref.handleClick = s => {
            s.target === n || n.contains(s.target) || e.ref.label.click()
        }, n.addEventListener("keydown", e.ref.handleKeyDown), e.element.addEventListener("click", e.ref.handleClick), Rs(n, t.caption), e.appendChild(n), e.ref.label = n
    },
    Rs = (e, t) => {
        e.innerHTML = t;
        const n = e.querySelector(".filepond--label-action");
        return n && z(n, "tabindex", "0"), t
    },
    La = $({
        name: "drop-label",
        ignoreRect: !0,
        create: Aa,
        destroy: ({
            root: e
        }) => {
            e.ref.label.addEventListener("keydown", e.ref.handleKeyDown), e.element.removeEventListener("click", e.ref.handleClick)
        },
        write: K({
            DID_SET_LABEL_IDLE: ({
                root: e,
                action: t
            }) => {
                Rs(e.ref.label, t.value)
            }
        }),
        mixins: {
            styles: ["opacity", "translateX", "translateY"],
            animations: {
                opacity: {
                    type: "tween",
                    duration: 150
                },
                translateX: "spring",
                translateY: "spring"
            }
        }
    }),
    Ma = $({
        name: "drip-blob",
        ignoreRect: !0,
        mixins: {
            styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
            animations: {
                scaleX: "spring",
                scaleY: "spring",
                translateX: "spring",
                translateY: "spring",
                opacity: {
                    type: "tween",
                    duration: 250
                }
            }
        }
    }),
    wa = ({
        root: e
    }) => {
        const t = e.rect.element.width * .5,
            n = e.rect.element.height * .5;
        e.ref.blob = e.appendChildView(e.createChildView(Ma, {
            opacity: 0,
            scaleX: 2.5,
            scaleY: 2.5,
            translateX: t,
            translateY: n
        }))
    },
    Pa = ({
        root: e,
        action: t
    }) => {
        if (!e.ref.blob) {
            wa({
                root: e
            });
            return
        }
        e.ref.blob.translateX = t.position.scopeLeft, e.ref.blob.translateY = t.position.scopeTop, e.ref.blob.scaleX = 1, e.ref.blob.scaleY = 1, e.ref.blob.opacity = 1
    },
    Ca = ({
        root: e
    }) => {
        e.ref.blob && (e.ref.blob.opacity = 0)
    },
    ba = ({
        root: e
    }) => {
        e.ref.blob && (e.ref.blob.scaleX = 2.5, e.ref.blob.scaleY = 2.5, e.ref.blob.opacity = 0)
    },
    va = ({
        root: e,
        props: t,
        actions: n
    }) => {
        Na({
            root: e,
            props: t,
            actions: n
        });
        const {
            blob: s
        } = e.ref;
        n.length === 0 && s && s.opacity === 0 && (e.removeChildView(s), e.ref.blob = null)
    },
    Na = K({
        DID_DRAG: Pa,
        DID_DROP: ba,
        DID_END_DRAG: Ca
    }),
    Ga = $({
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        name: "drip",
        write: va
    }),
    Os = (e, t) => {
        try {
            const n = new DataTransfer;
            t.forEach(s => {
                s instanceof File ? n.items.add(s) : n.items.add(new File([s], s.name, {
                    type: s.type
                }))
            }), e.files = n.files
        } catch {
            return !1
        }
        return !0
    },
    Fa = ({
        root: e
    }) => e.ref.fields = {},
    Et = (e, t) => e.ref.fields[t],
    Vt = e => {
        e.query("GET_ACTIVE_ITEMS").forEach(t => {
            e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id])
        })
    },
    yn = ({
        root: e
    }) => Vt(e),
    Ba = ({
        root: e,
        action: t
    }) => {
        const r = !(e.query("GET_ITEM", t.id).origin === k.LOCAL) && e.query("SHOULD_UPDATE_FILE_INPUT"),
            a = _e("input");
        a.type = r ? "file" : "hidden", a.name = e.query("GET_NAME"), a.disabled = e.query("GET_DISABLED"), e.ref.fields[t.id] = a, Vt(e)
    },
    xa = ({
        root: e,
        action: t
    }) => {
        const n = Et(e, t.id);
        if (!n || (t.serverFileReference !== null && (n.value = t.serverFileReference), !e.query("SHOULD_UPDATE_FILE_INPUT"))) return;
        const s = e.query("GET_ITEM", t.id);
        Os(n, [s.file])
    },
    Ua = ({
        root: e,
        action: t
    }) => {
        e.query("SHOULD_UPDATE_FILE_INPUT") && setTimeout(() => {
            const n = Et(e, t.id);
            n && Os(n, [t.file])
        }, 0)
    },
    Va = ({
        root: e
    }) => {
        e.element.disabled = e.query("GET_DISABLED")
    },
    Ha = ({
        root: e,
        action: t
    }) => {
        const n = Et(e, t.id);
        n && (n.parentNode && n.parentNode.removeChild(n), delete e.ref.fields[t.id])
    },
    Ya = ({
        root: e,
        action: t
    }) => {
        const n = Et(e, t.id);
        n && (t.value === null ? n.removeAttribute("value") : n.value = t.value, Vt(e))
    },
    qa = K({
        DID_SET_DISABLED: Va,
        DID_ADD_ITEM: Ba,
        DID_LOAD_ITEM: xa,
        DID_REMOVE_ITEM: Ha,
        DID_DEFINE_VALUE: Ya,
        DID_PREPARE_OUTPUT: Ua,
        DID_REORDER_ITEMS: yn,
        DID_SORT_ITEMS: yn
    }),
    Wa = $({
        tag: "fieldset",
        name: "data",
        create: Fa,
        write: qa,
        ignoreRect: !0
    }),
    za = e => "getRootNode" in e ? e.getRootNode() : document,
    $a = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"],
    ka = ["css", "csv", "html", "txt"],
    Xa = {
        zip: "zip|compressed",
        epub: "application/epub+zip"
    },
    Ss = (e = "") => (e = e.toLowerCase(), $a.includes(e) ? "image/" + (e === "jpg" ? "jpeg" : e === "svg" ? "svg+xml" : e) : ka.includes(e) ? "text/" + e : Xa[e] || ""),
    Ht = e => new Promise((t, n) => {
        const s = no(e);
        if (s.length && !ja(e)) return t(s);
        Za(e).then(t)
    }),
    ja = e => e.files ? e.files.length > 0 : !1,
    Za = e => new Promise((t, n) => {
        const s = (e.items ? Array.from(e.items) : []).filter(r => Qa(r)).map(r => Ka(r));
        if (!s.length) {
            t(e.files ? Array.from(e.files) : []);
            return
        }
        Promise.all(s).then(r => {
            const a = [];
            r.forEach(i => {
                a.push.apply(a, i)
            }), t(a.filter(i => i).map(i => (i._relativePath || (i._relativePath = i.webkitRelativePath), i)))
        }).catch(console.error)
    }),
    Qa = e => {
        if (ys(e)) {
            const t = Yt(e);
            if (t) return t.isFile || t.isDirectory
        }
        return e.kind === "file"
    },
    Ka = e => new Promise((t, n) => {
        if (to(e)) {
            Ja(Yt(e)).then(t).catch(n);
            return
        }
        t([e.getAsFile()])
    }),
    Ja = e => new Promise((t, n) => {
        const s = [];
        let r = 0,
            a = 0;
        const i = () => {
            a === 0 && r === 0 && t(s)
        },
            l = o => {
                r++;
                const c = o.createReader(),
                    d = () => {
                        c.readEntries(f => {
                            if (f.length === 0) {
                                r--, i();
                                return
                            }
                            f.forEach(I => {
                                I.isDirectory ? l(I) : (a++, I.file(p => {
                                    const u = eo(p);
                                    I.fullPath && (u._relativePath = I.fullPath), s.push(u), a--, i()
                                }))
                            }), d()
                        }, n)
                    };
                d()
            };
        l(e)
    }),
    eo = e => {
        if (e.type.length) return e;
        const t = e.lastModifiedDate,
            n = e.name,
            s = Ss(ft(e.name));
        return s.length && (e = e.slice(0, e.size, s), e.name = n, e.lastModifiedDate = t), e
    },
    to = e => ys(e) && (Yt(e) || {}).isDirectory,
    ys = e => "webkitGetAsEntry" in e,
    Yt = e => e.webkitGetAsEntry(),
    no = e => {
        let t = [];
        try {
            if (t = ro(e), t.length) return t;
            t = so(e)
        } catch { }
        return t
    },
    so = e => {
        let t = e.getData("url");
        return typeof t == "string" && t.length ? [t] : []
    },
    ro = e => {
        let t = e.getData("text/html");
        if (typeof t == "string" && t.length) {
            const n = t.match(/src\s*=\s*"(.+?)"/);
            if (n) return [n[1]]
        }
        return []
    },
    it = [],
    De = e => ({
        pageLeft: e.pageX,
        pageTop: e.pageY,
        scopeLeft: e.offsetX || e.layerX,
        scopeTop: e.offsetY || e.layerY
    }),
    io = (e, t, n) => {
        const s = ao(t),
            r = {
                element: e,
                filterElement: n,
                state: null,
                ondrop: () => { },
                onenter: () => { },
                ondrag: () => { },
                onexit: () => { },
                onload: () => { },
                allowdrop: () => { }
            };
        return r.destroy = s.addListener(r), r
    },
    ao = e => {
        const t = it.find(s => s.element === e);
        if (t) return t;
        const n = oo(e);
        return it.push(n), n
    },
    oo = e => {
        const t = [],
            n = {
                dragenter: co,
                dragover: uo,
                dragleave: Eo,
                drop: fo
            },
            s = {};
        H(n, (a, i) => {
            s[a] = i(e, t), e.addEventListener(a, s[a], !1)
        });
        const r = {
            element: e,
            addListener: a => (t.push(a), () => {
                t.splice(t.indexOf(a), 1), t.length === 0 && (it.splice(it.indexOf(r), 1), H(n, i => {
                    e.removeEventListener(i, s[i], !1)
                }))
            })
        };
        return r
    },
    lo = (e, t) => ("elementFromPoint" in e || (e = document), e.elementFromPoint(t.x, t.y)),
    qt = (e, t) => {
        const n = za(t),
            s = lo(n, {
                x: e.pageX - window.pageXOffset,
                y: e.pageY - window.pageYOffset
            });
        return s === t || t.contains(s)
    };
let Ds = null;
const Qe = (e, t) => {
    try {
        e.dropEffect = t
    } catch { }
},
    co = (e, t) => n => {
        n.preventDefault(), Ds = n.target, t.forEach(s => {
            const {
                element: r,
                onenter: a
            } = s;
            qt(n, r) && (s.state = "enter", a(De(n)))
        })
    },
    uo = (e, t) => n => {
        n.preventDefault();
        const s = n.dataTransfer;
        Ht(s).then(r => {
            let a = !1;
            t.some(i => {
                const {
                    filterElement: l,
                    element: o,
                    onenter: c,
                    onexit: d,
                    ondrag: f,
                    allowdrop: I
                } = i;
                Qe(s, "copy");
                const p = I(r);
                if (!p) {
                    Qe(s, "none");
                    return
                }
                if (qt(n, o)) {
                    if (a = !0, i.state === null) {
                        i.state = "enter", c(De(n));
                        return
                    }
                    if (i.state = "over", l && !p) {
                        Qe(s, "none");
                        return
                    }
                    f(De(n))
                } else l && !a && Qe(s, "none"), i.state && (i.state = null, d(De(n)))
            })
        })
    },
    fo = (e, t) => n => {
        n.preventDefault();
        const s = n.dataTransfer;
        Ht(s).then(r => {
            t.forEach(a => {
                const {
                    filterElement: i,
                    element: l,
                    ondrop: o,
                    onexit: c,
                    allowdrop: d
                } = a;
                if (a.state = null, !(i && !qt(n, l))) {
                    if (!d(r)) return c(De(n));
                    o(De(n), r)
                }
            })
        })
    },
    Eo = (e, t) => n => {
        Ds === n.target && t.forEach(s => {
            const {
                onexit: r
            } = s;
            s.state = null, r(De(n))
        })
    },
    po = (e, t, n) => {
        e.classList.add("filepond--hopper");
        const {
            catchesDropsOnPage: s,
            requiresDropOnElement: r,
            filterItems: a = d => d
        } = n, i = io(e, s ? document.documentElement : e, r);
        let l = "",
            o = "";
        i.allowdrop = d => t(a(d)), i.ondrop = (d, f) => {
            const I = a(f);
            if (!t(I)) {
                c.ondragend(d);
                return
            }
            o = "drag-drop", c.onload(I, d)
        }, i.ondrag = d => {
            c.ondrag(d)
        }, i.onenter = d => {
            o = "drag-over", c.ondragstart(d)
        }, i.onexit = d => {
            o = "drag-exit", c.ondragend(d)
        };
        const c = {
            updateHopperState: () => {
                l !== o && (e.dataset.hopperState = o, l = o)
            },
            onload: () => { },
            ondragstart: () => { },
            ondrag: () => { },
            ondragend: () => { },
            destroy: () => {
                i.destroy()
            }
        };
        return c
    };
let Ct = !1;
const ve = [],
    As = e => {
        const t = document.activeElement;
        if (t && /textarea|input/i.test(t.nodeName)) {
            let n = !1,
                s = t;
            for (; s !== document.body;) {
                if (s.classList.contains("filepond--root")) {
                    n = !0;
                    break
                }
                s = s.parentNode
            }
            if (!n) return
        }
        Ht(e.clipboardData).then(n => {
            n.length && ve.forEach(s => s(n))
        })
    },
    Io = e => {
        ve.includes(e) || (ve.push(e), !Ct && (Ct = !0, document.addEventListener("paste", As)))
    },
    _o = e => {
        Nt(ve, ve.indexOf(e)), ve.length === 0 && (document.removeEventListener("paste", As), Ct = !1)
    },
    mo = () => {
        const e = n => {
            t.onload(n)
        },
            t = {
                destroy: () => {
                    _o(e)
                },
                onload: () => { }
            };
        return Io(e), t
    },
    To = ({
        root: e,
        props: t
    }) => {
        e.element.id = `filepond--assistant-${t.id}`, z(e.element, "role", "status"), z(e.element, "aria-live", "polite"), z(e.element, "aria-relevant", "additions")
    };
let Dn = null,
    An = null;
const Rt = [],
    pt = (e, t) => {
        e.element.textContent = t
    },
    go = e => {
        e.element.textContent = ""
    },
    Ls = (e, t, n) => {
        const s = e.query("GET_TOTAL_ITEMS");
        pt(e, `${n} ${t}, ${s} ${s === 1 ? e.query("GET_LABEL_FILE_COUNT_SINGULAR") : e.query("GET_LABEL_FILE_COUNT_PLURAL")}`), clearTimeout(An), An = setTimeout(() => {
            go(e)
        }, 1500)
    },
    Ms = e => e.element.parentNode.contains(document.activeElement),
    ho = ({
        root: e,
        action: t
    }) => {
        if (!Ms(e)) return;
        e.element.textContent = "";
        const n = e.query("GET_ITEM", t.id);
        Rt.push(n.filename), clearTimeout(Dn), Dn = setTimeout(() => {
            Ls(e, Rt.join(", "), e.query("GET_LABEL_FILE_ADDED")), Rt.length = 0
        }, 750)
    },
    Ro = ({
        root: e,
        action: t
    }) => {
        if (!Ms(e)) return;
        const n = t.item;
        Ls(e, n.filename, e.query("GET_LABEL_FILE_REMOVED"))
    },
    Oo = ({
        root: e,
        action: t
    }) => {
        const s = e.query("GET_ITEM", t.id).filename,
            r = e.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
        pt(e, `${s} ${r}`)
    },
    Ln = ({
        root: e,
        action: t
    }) => {
        const s = e.query("GET_ITEM", t.id).filename,
            r = e.query("GET_LABEL_FILE_PROCESSING_ABORTED");
        pt(e, `${s} ${r}`)
    },
    Ke = ({
        root: e,
        action: t
    }) => {
        const s = e.query("GET_ITEM", t.id).filename;
        pt(e, `${t.status.main} ${s} ${t.status.sub}`)
    },
    So = $({
        create: To,
        ignoreRect: !0,
        ignoreRectUpdate: !0,
        write: K({
            DID_LOAD_ITEM: ho,
            DID_REMOVE_ITEM: Ro,
            DID_COMPLETE_ITEM_PROCESSING: Oo,
            DID_ABORT_ITEM_PROCESSING: Ln,
            DID_REVERT_ITEM_PROCESSING: Ln,
            DID_THROW_ITEM_REMOVE_ERROR: Ke,
            DID_THROW_ITEM_LOAD_ERROR: Ke,
            DID_THROW_ITEM_INVALID: Ke,
            DID_THROW_ITEM_PROCESSING_ERROR: Ke
        }),
        tag: "span",
        name: "assistant"
    }),
    ws = (e, t = "-") => e.replace(new RegExp(`${t}.`, "g"), n => n.charAt(1).toUpperCase()),
    Ps = (e, t = 16, n = !0) => {
        let s = Date.now(),
            r = null;
        return (...a) => {
            clearTimeout(r);
            const i = Date.now() - s,
                l = () => {
                    s = Date.now(), e(...a)
                };
            i < t ? n || (r = setTimeout(l, t - i)) : l()
        }
    },
    yo = 1e6,
    at = e => e.preventDefault(),
    Do = ({
        root: e,
        props: t
    }) => {
        const n = e.query("GET_ID");
        n && (e.element.id = n);
        const s = e.query("GET_CLASS_NAME");
        s && s.split(" ").filter(o => o.length).forEach(o => {
            e.element.classList.add(o)
        }), e.ref.label = e.appendChildView(e.createChildView(La, {
            ...t, translateY: null, caption: e.query("GET_LABEL_IDLE")
        })), e.ref.list = e.appendChildView(e.createChildView(Ra, {
            translateY: null
        })), e.ref.panel = e.appendChildView(e.createChildView(Is, {
            name: "panel-root"
        })), e.ref.assistant = e.appendChildView(e.createChildView(So, {
            ...t
        })), e.ref.data = e.appendChildView(e.createChildView(Wa, {
            ...t
        })), e.ref.measure = _e("div"), e.ref.measure.style.height = "100%", e.element.appendChild(e.ref.measure), e.ref.bounds = null, e.query("GET_STYLES").filter(o => !Ie(o.value)).map(({
            name: o,
            value: c
        }) => {
            e.element.dataset[o] = c
        }), e.ref.widthPrevious = null, e.ref.widthUpdated = Ps(() => {
            e.ref.updateHistory = [], e.dispatch("DID_RESIZE_ROOT")
        }, 250), e.ref.previousAspectRatio = null, e.ref.updateHistory = [];
        const r = window.matchMedia("(pointer: fine) and (hover: hover)").matches,
            a = "PointerEvent" in window;
        e.query("GET_ALLOW_REORDER") && a && !r && (e.element.addEventListener("touchmove", at, {
            passive: !1
        }), e.element.addEventListener("gesturestart", at));
        const i = e.query("GET_CREDITS");
        if (i.length === 2) {
            const o = document.createElement("a");
            o.className = "filepond--credits", o.setAttribute("aria-hidden", "true"), o.href = i[0], o.tabindex = -1, o.target = "_blank", o.rel = "noopener noreferrer", o.textContent = i[1], e.element.appendChild(o), e.ref.credits = o
        }
    },
    Ao = ({
        root: e,
        props: t,
        actions: n
    }) => {
        if (Co({
            root: e,
            props: t,
            actions: n
        }), n.filter(L => /^DID_SET_STYLE_/.test(L.type)).filter(L => !Ie(L.data.value)).map(({
            type: L,
            data: b
        }) => {
            const y = ws(L.substring(8).toLowerCase(), "_");
            e.element.dataset[y] = b.value, e.invalidateLayout()
        }), e.rect.element.hidden) return;
        e.rect.element.width !== e.ref.widthPrevious && (e.ref.widthPrevious = e.rect.element.width, e.ref.widthUpdated());
        let s = e.ref.bounds;
        s || (s = e.ref.bounds = wo(e), e.element.removeChild(e.ref.measure), e.ref.measure = null);
        const {
            hopper: r,
            label: a,
            list: i,
            panel: l
        } = e.ref;
        r && r.updateHopperState();
        const o = e.query("GET_PANEL_ASPECT_RATIO"),
            c = e.query("GET_ALLOW_MULTIPLE"),
            d = e.query("GET_TOTAL_ITEMS"),
            f = c ? e.query("GET_MAX_FILES") || yo : 1,
            I = d === f,
            p = n.find(L => L.type === "DID_ADD_ITEM");
        if (I && p) {
            const L = p.data.interactionMethod;
            a.opacity = 0, c ? a.translateY = -40 : L === ae.API ? a.translateX = 40 : L === ae.BROWSE ? a.translateY = 40 : a.translateY = 30
        } else I || (a.opacity = 1, a.translateX = 0, a.translateY = 0);
        const u = Lo(e),
            _ = Mo(e),
            T = a.rect.element.height,
            h = !c || I ? 0 : T,
            E = I ? i.rect.element.marginTop : 0,
            m = d === 0 ? 0 : i.rect.element.marginBottom,
            R = h + E + _.visual + m,
            S = h + E + _.bounds + m;
        if (i.translateY = Math.max(0, h - i.rect.element.marginTop) - u.top, o) {
            const L = e.rect.element.width,
                b = L * o;
            o !== e.ref.previousAspectRatio && (e.ref.previousAspectRatio = o, e.ref.updateHistory = []);
            const y = e.ref.updateHistory;
            y.push(L);
            const M = 2;
            if (y.length > M * 2) {
                const w = y.length,
                    P = w - 10;
                let U = 0;
                for (let A = w; A >= P; A--)
                    if (y[A] === y[A - 2] && U++, U >= M) return
            }
            l.scalable = !1, l.height = b;
            const N = b - h - (m - u.bottom) - (I ? E : 0);
            _.visual > N ? i.overflow = N : i.overflow = null, e.height = b
        } else if (s.fixedHeight) {
            l.scalable = !1;
            const L = s.fixedHeight - h - (m - u.bottom) - (I ? E : 0);
            _.visual > L ? i.overflow = L : i.overflow = null
        } else if (s.cappedHeight) {
            const L = R >= s.cappedHeight,
                b = Math.min(s.cappedHeight, R);
            l.scalable = !0, l.height = L ? b : b - u.top - u.bottom;
            const y = b - h - (m - u.bottom) - (I ? E : 0);
            R > s.cappedHeight && _.visual > y ? i.overflow = y : i.overflow = null, e.height = Math.min(s.cappedHeight, S - u.top - u.bottom)
        } else {
            const L = d > 0 ? u.top + u.bottom : 0;
            l.scalable = !0, l.height = Math.max(T, R - L), e.height = Math.max(T, S - L)
        }
        e.ref.credits && l.heightCurrent && (e.ref.credits.style.transform = `translateY(${l.heightCurrent}px)`)
    },
    Lo = e => {
        const t = e.ref.list.childViews[0].childViews[0];
        return t ? {
            top: t.rect.element.marginTop,
            bottom: t.rect.element.marginBottom
        } : {
            top: 0,
            bottom: 0
        }
    },
    Mo = e => {
        let t = 0,
            n = 0;
        const s = e.ref.list,
            r = s.childViews[0],
            a = r.childViews.filter(E => E.rect.element.height),
            i = e.query("GET_ACTIVE_ITEMS").map(E => a.find(m => m.id === E.id)).filter(E => E);
        if (i.length === 0) return {
            visual: t,
            bounds: n
        };
        const l = r.rect.element.width,
            o = Ut(r, i, s.dragCoordinates),
            c = i[0].rect.element,
            d = c.marginTop + c.marginBottom,
            f = c.marginLeft + c.marginRight,
            I = c.width + f,
            p = c.height + d,
            u = typeof o < "u" && o >= 0 ? 1 : 0,
            _ = i.find(E => E.markedForRemoval && E.opacity < .45) ? -1 : 0,
            T = i.length + u + _,
            h = xt(l, I);
        return h === 1 ? i.forEach(E => {
            const m = E.rect.element.height + d;
            n += m, t += m * E.opacity
        }) : (n = Math.ceil(T / h) * p, t = n), {
            visual: t,
            bounds: n
        }
    },
    wo = e => {
        const t = e.ref.measureHeight || null;
        return {
            cappedHeight: parseInt(e.style.maxHeight, 10) || null,
            fixedHeight: t === 0 ? null : t
        }
    },
    Wt = (e, t) => {
        const n = e.query("GET_ALLOW_REPLACE"),
            s = e.query("GET_ALLOW_MULTIPLE"),
            r = e.query("GET_TOTAL_ITEMS");
        let a = e.query("GET_MAX_FILES");
        const i = t.length;
        return !s && i > 1 ? (e.dispatch("DID_THROW_MAX_FILES", {
            source: t,
            error: Y("warning", 0, "Max files")
        }), !0) : (a = s ? a : 1, !s && n ? !1 : Fe(a) && r + i > a ? (e.dispatch("DID_THROW_MAX_FILES", {
            source: t,
            error: Y("warning", 0, "Max files")
        }), !0) : !1)
    },
    Po = (e, t, n) => {
        const s = e.childViews[0];
        return Ut(s, t, {
            left: n.scopeLeft - s.rect.element.left,
            top: n.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
        })
    },
    Mn = e => {
        const t = e.query("GET_ALLOW_DROP"),
            n = e.query("GET_DISABLED"),
            s = t && !n;
        if (s && !e.ref.hopper) {
            const r = po(e.element, a => {
                const i = e.query("GET_BEFORE_DROP_FILE") || (() => !0);
                return e.query("GET_DROP_VALIDATION") ? a.every(o => Ae("ALLOW_HOPPER_ITEM", o, {
                    query: e.query
                }).every(c => c === !0) && i(o)) : !0
            }, {
                filterItems: a => {
                    const i = e.query("GET_IGNORED_FILES");
                    return a.filter(l => Ge(l) ? !i.includes(l.name.toLowerCase()) : !0)
                },
                catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"),
                requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT")
            });
            r.onload = (a, i) => {
                const o = e.ref.list.childViews[0].childViews.filter(d => d.rect.element.height),
                    c = e.query("GET_ACTIVE_ITEMS").map(d => o.find(f => f.id === d.id)).filter(d => d);
                ce("ADD_ITEMS", a, {
                    dispatch: e.dispatch
                }).then(d => {
                    if (Wt(e, d)) return !1;
                    e.dispatch("ADD_ITEMS", {
                        items: d,
                        index: Po(e.ref.list, c, i),
                        interactionMethod: ae.DROP
                    })
                }), e.dispatch("DID_DROP", {
                    position: i
                }), e.dispatch("DID_END_DRAG", {
                    position: i
                })
            }, r.ondragstart = a => {
                e.dispatch("DID_START_DRAG", {
                    position: a
                })
            }, r.ondrag = Ps(a => {
                e.dispatch("DID_DRAG", {
                    position: a
                })
            }), r.ondragend = a => {
                e.dispatch("DID_END_DRAG", {
                    position: a
                })
            }, e.ref.hopper = r, e.ref.drip = e.appendChildView(e.createChildView(Ga))
        } else !s && e.ref.hopper && (e.ref.hopper.destroy(), e.ref.hopper = null, e.removeChildView(e.ref.drip))
    },
    wn = (e, t) => {
        const n = e.query("GET_ALLOW_BROWSE"),
            s = e.query("GET_DISABLED"),
            r = n && !s;
        r && !e.ref.browser ? e.ref.browser = e.appendChildView(e.createChildView(Da, {
            ...t, onload: a => {
                ce("ADD_ITEMS", a, {
                    dispatch: e.dispatch
                }).then(i => {
                    if (Wt(e, i)) return !1;
                    e.dispatch("ADD_ITEMS", {
                        items: i,
                        index: -1,
                        interactionMethod: ae.BROWSE
                    })
                })
            }
        }), 0) : !r && e.ref.browser && (e.removeChildView(e.ref.browser), e.ref.browser = null)
    },
    Pn = e => {
        const t = e.query("GET_ALLOW_PASTE"),
            n = e.query("GET_DISABLED"),
            s = t && !n;
        s && !e.ref.paster ? (e.ref.paster = mo(), e.ref.paster.onload = r => {
            ce("ADD_ITEMS", r, {
                dispatch: e.dispatch
            }).then(a => {
                if (Wt(e, a)) return !1;
                e.dispatch("ADD_ITEMS", {
                    items: a,
                    index: -1,
                    interactionMethod: ae.PASTE
                })
            })
        }) : !s && e.ref.paster && (e.ref.paster.destroy(), e.ref.paster = null)
    },
    Co = K({
        DID_SET_ALLOW_BROWSE: ({
            root: e,
            props: t
        }) => {
            wn(e, t)
        },
        DID_SET_ALLOW_DROP: ({
            root: e
        }) => {
            Mn(e)
        },
        DID_SET_ALLOW_PASTE: ({
            root: e
        }) => {
            Pn(e)
        },
        DID_SET_DISABLED: ({
            root: e,
            props: t
        }) => {
            Mn(e), Pn(e), wn(e, t), e.query("GET_DISABLED") ? e.element.dataset.disabled = "disabled" : e.element.removeAttribute("data-disabled")
        }
    }),
    bo = $({
        name: "root",
        read: ({
            root: e
        }) => {
            e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight)
        },
        create: Do,
        write: Ao,
        destroy: ({
            root: e
        }) => {
            e.ref.paster && e.ref.paster.destroy(), e.ref.hopper && e.ref.hopper.destroy(), e.element.removeEventListener("touchmove", at), e.element.removeEventListener("gesturestart", at)
        },
        mixins: {
            styles: ["height"]
        }
    }),
    vo = (e = {}) => {
        let t = null;
        const n = rt(),
            s = Xs(vr(n), [Kr, Fr(n)], [Si, Gr(n)]);
        s.dispatch("SET_OPTIONS", {
            options: e
        });
        const r = () => {
            document.hidden || s.dispatch("KICK")
        };
        document.addEventListener("visibilitychange", r);
        let a = null,
            i = !1,
            l = !1,
            o = null,
            c = null;
        const d = () => {
            i || (i = !0), clearTimeout(a), a = setTimeout(() => {
                i = !1, o = null, c = null, l && (l = !1, s.dispatch("DID_STOP_RESIZE"))
            }, 500)
        };
        window.addEventListener("resize", d);
        const f = bo(s, {
            id: vt()
        });
        let I = !1,
            p = !1;
        const u = {
            _read: () => {
                i && (c = window.innerWidth, o || (o = c), !l && c !== o && (s.dispatch("DID_START_RESIZE"), l = !0)), p && I && (I = f.element.offsetParent === null), !I && (f._read(), p = f.rect.element.hidden)
            },
            _write: O => {
                const D = s.processActionQueue().filter(C => !/^SET_/.test(C.type));
                I && !D.length || (E(D), I = f._write(O, D, l), Ur(s.query("GET_ITEMS")), I && s.processDispatchQueue())
            }
        },
            _ = O => D => {
                const C = {
                    type: O
                };
                if (!D) return C;
                if (D.hasOwnProperty("error") && (C.error = D.error ? {
                    ...D.error
                } : null), D.status && (C.status = {
                    ...D.status
                }), D.file && (C.output = D.file), D.source) C.file = D.source;
                else if (D.item || D.id) {
                    const v = D.item ? D.item : s.query("GET_ITEM", D.id);
                    C.file = v ? ee(v) : null
                }
                return D.items && (C.items = D.items.map(ee)), /progress/.test(O) && (C.progress = D.progress), D.hasOwnProperty("origin") && D.hasOwnProperty("target") && (C.origin = D.origin, C.target = D.target), C
            },
            T = {
                DID_DESTROY: _("destroy"),
                DID_INIT: _("init"),
                DID_THROW_MAX_FILES: _("warning"),
                DID_INIT_ITEM: _("initfile"),
                DID_START_ITEM_LOAD: _("addfilestart"),
                DID_UPDATE_ITEM_LOAD_PROGRESS: _("addfileprogress"),
                DID_LOAD_ITEM: _("addfile"),
                DID_THROW_ITEM_INVALID: [_("error"), _("addfile")],
                DID_THROW_ITEM_LOAD_ERROR: [_("error"), _("addfile")],
                DID_THROW_ITEM_REMOVE_ERROR: [_("error"), _("removefile")],
                DID_PREPARE_OUTPUT: _("preparefile"),
                DID_START_ITEM_PROCESSING: _("processfilestart"),
                DID_UPDATE_ITEM_PROCESS_PROGRESS: _("processfileprogress"),
                DID_ABORT_ITEM_PROCESSING: _("processfileabort"),
                DID_COMPLETE_ITEM_PROCESSING: _("processfile"),
                DID_COMPLETE_ITEM_PROCESSING_ALL: _("processfiles"),
                DID_REVERT_ITEM_PROCESSING: _("processfilerevert"),
                DID_THROW_ITEM_PROCESSING_ERROR: [_("error"), _("processfile")],
                DID_REMOVE_ITEM: _("removefile"),
                DID_UPDATE_ITEMS: _("updatefiles"),
                DID_ACTIVATE_ITEM: _("activatefile"),
                DID_REORDER_ITEMS: _("reorderfiles")
            },
            h = O => {
                const D = {
                    pond: F,
                    ...O
                };
                delete D.type, f.element.dispatchEvent(new CustomEvent(`FilePond:${O.type}`, {
                    detail: D,
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0
                }));
                const C = [];
                O.hasOwnProperty("error") && C.push(O.error), O.hasOwnProperty("file") && C.push(O.file);
                const v = ["type", "error", "file"];
                Object.keys(O).filter(V => !v.includes(V)).forEach(V => C.push(O[V])), F.fire(O.type, ...C);
                const B = s.query(`GET_ON${O.type.toUpperCase()}`);
                B && B(...C)
            },
            E = O => {
                O.length && O.filter(D => T[D.type]).forEach(D => {
                    const C = T[D.type];
                    (Array.isArray(C) ? C : [C]).forEach(v => {
                        D.type === "DID_INIT_ITEM" ? h(v(D.data)) : setTimeout(() => {
                            h(v(D.data))
                        }, 0)
                    })
                })
            },
            m = O => s.dispatch("SET_OPTIONS", {
                options: O
            }),
            R = O => s.query("GET_ACTIVE_ITEM", O),
            S = O => new Promise((D, C) => {
                s.dispatch("REQUEST_ITEM_PREPARE", {
                    query: O,
                    success: v => {
                        D(v)
                    },
                    failure: v => {
                        C(v)
                    }
                })
            }),
            L = (O, D = {}) => new Promise((C, v) => {
                M([{
                    source: O,
                    options: D
                }], {
                    index: D.index
                }).then(B => C(B && B[0])).catch(v)
            }),
            b = O => O.file && O.id,
            y = (O, D) => (typeof O == "object" && !b(O) && !D && (D = O, O = void 0), s.dispatch("REMOVE_ITEM", {
                ...D, query: O
            }), s.query("GET_ACTIVE_ITEM", O) === null),
            M = (...O) => new Promise((D, C) => {
                const v = [],
                    B = {};
                if (lt(O[0])) v.push.apply(v, O[0]), Object.assign(B, O[1] || {});
                else {
                    const V = O[O.length - 1];
                    typeof V == "object" && !(V instanceof Blob) && Object.assign(B, O.pop()), v.push(...O)
                }
                s.dispatch("ADD_ITEMS", {
                    items: v,
                    index: B.index,
                    interactionMethod: ae.API,
                    success: D,
                    failure: C
                })
            }),
            N = () => s.query("GET_ACTIVE_ITEMS"),
            w = O => new Promise((D, C) => {
                s.dispatch("REQUEST_ITEM_PROCESSING", {
                    query: O,
                    success: v => {
                        D(v)
                    },
                    failure: v => {
                        C(v)
                    }
                })
            }),
            P = (...O) => {
                const D = Array.isArray(O[0]) ? O[0] : O,
                    C = D.length ? D : N();
                return Promise.all(C.map(S))
            },
            U = (...O) => {
                const D = Array.isArray(O[0]) ? O[0] : O;
                if (!D.length) {
                    const C = N().filter(v => !(v.status === G.IDLE && v.origin === k.LOCAL) && v.status !== G.PROCESSING && v.status !== G.PROCESSING_COMPLETE && v.status !== G.PROCESSING_REVERT_ERROR);
                    return Promise.all(C.map(w))
                }
                return Promise.all(D.map(w))
            },
            A = (...O) => {
                const D = Array.isArray(O[0]) ? O[0] : O;
                let C;
                typeof D[D.length - 1] == "object" ? C = D.pop() : Array.isArray(O[0]) && (C = O[1]);
                const v = N();
                return D.length ? D.map(V => he(V) ? v[V] ? v[V].id : null : V).filter(V => V).map(V => y(V, C)) : Promise.all(v.map(V => y(V, C)))
            },
            F = {
                ...ut(), ...u, ...Nr(s, n), setOptions: m, addFile: L, addFiles: M, getFile: R, processFile: w, prepareFile: S, removeFile: y, moveFile: (O, D) => s.dispatch("MOVE_ITEM", {
                    query: O,
                    index: D
                }), getFiles: N, processFiles: U, removeFiles: A, prepareFiles: P, sort: O => s.dispatch("SORT", {
                    compare: O
                }), browse: () => {
                    var O = f.element.querySelector("input[type=file]");
                    O && O.click()
                }, destroy: () => {
                    F.fire("destroy", f.element), s.dispatch("ABORT_ALL"), f._destroy(), window.removeEventListener("resize", d), document.removeEventListener("visibilitychange", r), s.dispatch("DID_DESTROY")
                }, insertBefore: O => Kt(f.element, O), insertAfter: O => Jt(f.element, O), appendTo: O => O.appendChild(f.element), replaceElement: O => {
                    Kt(f.element, O), O.parentNode.removeChild(O), t = O
                }, restoreElement: () => {
                    t && (Jt(t, f.element), f.element.parentNode.removeChild(f.element), t = null)
                }, isAttachedTo: O => f.element === O || t === O, element: {
                    get: () => f.element
                }, status: {
                    get: () => s.query("GET_STATUS")
                }
            };
        return s.dispatch("DID_INIT"), ge(F)
    },
    Cs = (e = {}) => {
        const t = {};
        return H(rt(), (s, r) => {
            t[s] = r[0]
        }), vo({
            ...t, ...e
        })
    },
    No = e => e.charAt(0).toLowerCase() + e.slice(1),
    Go = e => ws(e.replace(/^data-/, "")),
    bs = (e, t) => {
        H(t, (n, s) => {
            H(e, (r, a) => {
                const i = new RegExp(n);
                if (!i.test(r) || (delete e[r], s === !1)) return;
                if (Q(s)) {
                    e[s] = a;
                    return
                }
                const o = s.group;
                X(s) && !e[o] && (e[o] = {}), e[o][No(r.replace(i, ""))] = a
            }), s.mapping && bs(e[s.group], s.mapping)
        })
    },
    Fo = (e, t = {}) => {
        const n = [];
        H(e.attributes, r => {
            n.push(e.attributes[r])
        });
        const s = n.filter(r => r.name).reduce((r, a) => {
            const i = z(e, a.name);
            return r[Go(a.name)] = i === a.name ? !0 : i, r
        }, {});
        return bs(s, t), s
    },
    Bo = (e, t = {}) => {
        const n = {
            "^class$": "className",
            "^multiple$": "allowMultiple",
            "^capture$": "captureMethod",
            "^webkitdirectory$": "allowDirectoriesOnly",
            "^server": {
                group: "server",
                mapping: {
                    "^process": {
                        group: "process"
                    },
                    "^revert": {
                        group: "revert"
                    },
                    "^fetch": {
                        group: "fetch"
                    },
                    "^restore": {
                        group: "restore"
                    },
                    "^load": {
                        group: "load"
                    }
                }
            },
            "^type$": !1,
            "^files$": !1
        };
        Ae("SET_ATTRIBUTE_TO_OPTION_MAP", n);
        const s = {
            ...t
        },
            r = Fo(e.nodeName === "FIELDSET" ? e.querySelector("input[type=file]") : e, n);
        Object.keys(r).forEach(i => {
            X(r[i]) ? (X(s[i]) || (s[i] = {}), Object.assign(s[i], r[i])) : s[i] = r[i]
        }), s.files = (t.files || []).concat(Array.from(e.querySelectorAll("input:not([type=file])")).map(i => ({
            source: i.value,
            options: {
                type: i.dataset.type
            }
        })));
        const a = Cs(s);
        return e.files && Array.from(e.files).forEach(i => {
            a.addFile(i)
        }), a.replaceElement(e), a
    },
    xo = (...e) => ks(e[0]) ? Bo(...e) : Cs(...e),
    Uo = ["fire", "_read", "_write"],
    Cn = e => {
        const t = {};
        return es(e, t, Uo), t
    },
    Vo = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (n, s) => t[s]),
    Ho = e => {
        const t = new Blob(["(", e.toString(), ")()"], {
            type: "application/javascript"
        }),
            n = URL.createObjectURL(t),
            s = new Worker(n);
        return {
            transfer: (r, a) => { },
            post: (r, a, i) => {
                const l = vt();
                s.onmessage = o => {
                    o.data.id === l && a(o.data.message)
                }, s.postMessage({
                    id: l,
                    message: r
                }, i)
            },
            terminate: () => {
                s.terminate(), URL.revokeObjectURL(n)
            }
        }
    },
    Yo = e => new Promise((t, n) => {
        const s = new Image;
        s.onload = () => {
            t(s)
        }, s.onerror = r => {
            n(r)
        }, s.src = e
    }),
    vs = (e, t) => {
        const n = e.slice(0, e.size, e.type);
        return n.lastModifiedDate = e.lastModifiedDate, n.name = t, n
    },
    qo = e => vs(e, e.name),
    bn = [],
    Wo = e => {
        if (bn.includes(e)) return;
        bn.push(e);
        const t = e({
            addFilter: Hr,
            utils: {
                Type: g,
                forin: H,
                isString: Q,
                isFile: Ge,
                toNaturalFileSize: fs,
                replaceInString: Vo,
                getExtensionFromFilename: ft,
                getFilenameWithoutExtension: cs,
                guesstimateMimeType: Ss,
                getFileFromBlob: Ne,
                getFilenameFromURL: We,
                createRoute: K,
                createWorker: Ho,
                createView: $,
                createItemAPI: ee,
                loadImage: Yo,
                copyFile: qo,
                renameFile: vs,
                createBlob: as,
                applyFilterChain: ce,
                text: q,
                getNumericAspectRatioFromString: ss
            },
            views: {
                fileActionButton: us
            }
        });
        Yr(t.options)
    },
    zo = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]",
    $o = () => "Promise" in window,
    ko = () => "slice" in Blob.prototype,
    Xo = () => "URL" in window && "createObjectURL" in window.URL,
    jo = () => "visibilityState" in document,
    Zo = () => "performance" in window,
    Qo = () => "supports" in (window.CSS || {}),
    Ko = () => /MSIE|Trident/.test(window.navigator.userAgent),
    vn = (() => {
        const e = Xn() && !zo() && jo() && $o() && ko() && Xo() && Zo() && (Qo() || Ko());
        return () => e
    })(),
    me = {
        apps: []
    },
    Jo = "filepond",
    Le = () => { };
let Nn = {},
    nt = Le,
    Ot = Le,
    Gn = Le,
    Fn = Le,
    Ye = Le,
    Bn = Le,
    xn = Le;
if (vn()) {
    gr(() => {
        me.apps.forEach(n => n._read())
    }, n => {
        me.apps.forEach(s => s._write(n))
    });
    const e = () => {
        document.dispatchEvent(new CustomEvent("FilePond:loaded", {
            detail: {
                supported: vn,
                create: nt,
                destroy: Ot,
                parse: Gn,
                find: Fn,
                registerPlugin: Ye,
                setOptions: xn
            }
        })), document.removeEventListener("DOMContentLoaded", e)
    };
    document.readyState !== "loading" ? setTimeout(() => e(), 0) : document.addEventListener("DOMContentLoaded", e);
    const t = () => H(rt(), (n, s) => {
        Nn[n] = s[1]
    });
    Nn = {}, t(), nt = (...n) => {
        const s = xo(...n);
        return s.on("destroy", Ot), me.apps.push(s), Cn(s)
    }, Ot = n => {
        const s = me.apps.findIndex(r => r.isAttachedTo(n));
        return s >= 0 ? (me.apps.splice(s, 1)[0].restoreElement(), !0) : !1
    }, Gn = n => Array.from(n.querySelectorAll(`.${Jo}`)).filter(a => !me.apps.find(i => i.isAttachedTo(a))).map(a => nt(a)), Fn = n => {
        const s = me.apps.find(r => r.isAttachedTo(n));
        return s ? Cn(s) : null
    }, Ye = (...n) => {
        n.forEach(Wo), t()
    }, Bn = () => {
        const n = {};
        return H(rt(), (s, r) => {
            n[s] = r[0]
        }), n
    }, xn = n => (X(n) && (me.apps.forEach(s => {
        s.setOptions(n)
    }), qr(n)), Bn())
}
/*!
 * FilePondPluginFileValidateType 1.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const Ns = ({
    addFilter: e,
    utils: t
}) => {
    const {
        Type: n,
        isString: s,
        replaceInString: r,
        guesstimateMimeType: a,
        getExtensionFromFilename: i,
        getFilenameFromURL: l
    } = t, o = (p, u) => {
        const _ = (/^[^/]+/.exec(p) || []).pop(),
            T = u.slice(0, -2);
        return _ === T
    }, c = (p, u) => p.some(_ => /\*$/.test(_) ? o(u, _) : _ === u), d = p => {
        let u = "";
        if (s(p)) {
            const _ = l(p),
                T = i(_);
            T && (u = a(T))
        } else u = p.type;
        return u
    }, f = (p, u, _) => {
        if (u.length === 0) return !0;
        const T = d(p);
        return _ ? new Promise((h, E) => {
            _(p, T).then(m => {
                c(u, m) ? h() : E()
            }).catch(E)
        }) : c(u, T)
    }, I = p => u => p[u] === null ? !1 : p[u] || u;
    return e("SET_ATTRIBUTE_TO_OPTION_MAP", p => Object.assign(p, {
        accept: "acceptedFileTypes"
    })), e("ALLOW_HOPPER_ITEM", (p, {
        query: u
    }) => u("GET_ALLOW_FILE_TYPE_VALIDATION") ? f(p, u("GET_ACCEPTED_FILE_TYPES")) : !0), e("LOAD_FILE", (p, {
        query: u
    }) => new Promise((_, T) => {
        if (!u("GET_ALLOW_FILE_TYPE_VALIDATION")) {
            _(p);
            return
        }
        const h = u("GET_ACCEPTED_FILE_TYPES"),
            E = u("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"),
            m = f(p, h, E),
            R = () => {
                const S = h.map(I(u("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter(b => b !== !1),
                    L = S.filter(function (b, y) {
                        return S.indexOf(b) === y
                    });
                T({
                    status: {
                        main: u("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
                        sub: r(u("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"), {
                            allTypes: L.join(", "),
                            allButLastType: L.slice(0, -1).join(", "),
                            lastType: L[S.length - 1]
                        })
                    }
                })
            };
        if (typeof m == "boolean") return m ? _(p) : R();
        m.then(() => {
            _(p)
        }).catch(R)
    })), {
        options: {
            allowFileTypeValidation: [!0, n.BOOLEAN],
            acceptedFileTypes: [
                [], n.ARRAY
            ],
            labelFileTypeNotAllowed: ["File is of invalid type", n.STRING],
            fileValidateTypeLabelExpectedTypes: ["Expects {allButLastType} or {lastType}", n.STRING],
            fileValidateTypeLabelExpectedTypesMap: [{}, n.OBJECT],
            fileValidateTypeDetectType: [null, n.FUNCTION]
        }
    }
},
    el = typeof window < "u" && typeof window.document < "u";
el && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {
    detail: Ns
}));
/*!
 * FilePondPluginImagePreview 4.6.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const tl = e => /^image/.test(e.type),
    Un = (e, t) => qe(e.x * t, e.y * t),
    Vn = (e, t) => qe(e.x + t.x, e.y + t.y),
    nl = e => {
        const t = Math.sqrt(e.x * e.x + e.y * e.y);
        return t === 0 ? {
            x: 0,
            y: 0
        } : qe(e.x / t, e.y / t)
    },
    Je = (e, t, n) => {
        const s = Math.cos(t),
            r = Math.sin(t),
            a = qe(e.x - n.x, e.y - n.y);
        return qe(n.x + s * a.x - r * a.y, n.y + r * a.x + s * a.y)
    },
    qe = (e = 0, t = 0) => ({
        x: e,
        y: t
    }),
    te = (e, t, n = 1, s) => {
        if (typeof e == "string") return parseFloat(e) * n;
        if (typeof e == "number") return e * (s ? t[s] : Math.min(t.width, t.height))
    },
    sl = (e, t, n) => {
        const s = e.borderStyle || e.lineStyle || "solid",
            r = e.backgroundColor || e.fontColor || "transparent",
            a = e.borderColor || e.lineColor || "transparent",
            i = te(e.borderWidth || e.lineWidth, t, n),
            l = e.lineCap || "round",
            o = e.lineJoin || "round",
            c = typeof s == "string" ? "" : s.map(f => te(f, t, n)).join(","),
            d = e.opacity || 1;
        return {
            "stroke-linecap": l,
            "stroke-linejoin": o,
            "stroke-width": i || 0,
            "stroke-dasharray": c,
            stroke: a,
            fill: r,
            opacity: d
        }
    },
    ie = e => e != null,
    rl = (e, t, n = 1) => {
        let s = te(e.x, t, n, "width") || te(e.left, t, n, "width"),
            r = te(e.y, t, n, "height") || te(e.top, t, n, "height"),
            a = te(e.width, t, n, "width"),
            i = te(e.height, t, n, "height"),
            l = te(e.right, t, n, "width"),
            o = te(e.bottom, t, n, "height");
        return ie(r) || (ie(i) && ie(o) ? r = t.height - i - o : r = o), ie(s) || (ie(a) && ie(l) ? s = t.width - a - l : s = l), ie(a) || (ie(s) && ie(l) ? a = t.width - s - l : a = 0), ie(i) || (ie(r) && ie(o) ? i = t.height - r - o : i = 0), {
            x: s || 0,
            y: r || 0,
            width: a || 0,
            height: i || 0
        }
    },
    il = e => e.map((t, n) => `${n === 0 ? "M" : "L"} ${t.x} ${t.y}`).join(" "),
    Ee = (e, t) => Object.keys(t).forEach(n => e.setAttribute(n, t[n])),
    al = "http://www.w3.org/2000/svg",
    be = (e, t) => {
        const n = document.createElementNS(al, e);
        return t && Ee(n, t), n
    },
    ol = e => Ee(e, {
        ...e.rect, ...e.styles
    }),
    ll = e => {
        const t = e.rect.x + e.rect.width * .5,
            n = e.rect.y + e.rect.height * .5,
            s = e.rect.width * .5,
            r = e.rect.height * .5;
        return Ee(e, {
            cx: t,
            cy: n,
            rx: s,
            ry: r,
            ...e.styles
        })
    },
    cl = {
        contain: "xMidYMid meet",
        cover: "xMidYMid slice"
    },
    dl = (e, t) => {
        Ee(e, {
            ...e.rect, ...e.styles, preserveAspectRatio: cl[t.fit] || "none"
        })
    },
    ul = {
        left: "start",
        center: "middle",
        right: "end"
    },
    fl = (e, t, n, s) => {
        const r = te(t.fontSize, n, s),
            a = t.fontFamily || "sans-serif",
            i = t.fontWeight || "normal",
            l = ul[t.textAlign] || "start";
        Ee(e, {
            ...e.rect, ...e.styles, "stroke-width": 0, "font-weight": i, "font-size": r, "font-family": a, "text-anchor": l
        }), e.text !== t.text && (e.text = t.text, e.textContent = t.text.length ? t.text : " ")
    },
    El = (e, t, n, s) => {
        Ee(e, {
            ...e.rect, ...e.styles, fill: "none"
        });
        const r = e.childNodes[0],
            a = e.childNodes[1],
            i = e.childNodes[2],
            l = e.rect,
            o = {
                x: e.rect.x + e.rect.width,
                y: e.rect.y + e.rect.height
            };
        if (Ee(r, {
            x1: l.x,
            y1: l.y,
            x2: o.x,
            y2: o.y
        }), !t.lineDecoration) return;
        a.style.display = "none", i.style.display = "none";
        const c = nl({
            x: o.x - l.x,
            y: o.y - l.y
        }),
            d = te(.05, n, s);
        if (t.lineDecoration.indexOf("arrow-begin") !== -1) {
            const f = Un(c, d),
                I = Vn(l, f),
                p = Je(l, 2, I),
                u = Je(l, -2, I);
            Ee(a, {
                style: "display:block;",
                d: `M${p.x},${p.y} L${l.x},${l.y} L${u.x},${u.y}`
            })
        }
        if (t.lineDecoration.indexOf("arrow-end") !== -1) {
            const f = Un(c, -d),
                I = Vn(o, f),
                p = Je(o, 2, I),
                u = Je(o, -2, I);
            Ee(i, {
                style: "display:block;",
                d: `M${p.x},${p.y} L${o.x},${o.y} L${u.x},${u.y}`
            })
        }
    },
    pl = (e, t, n, s) => {
        Ee(e, {
            ...e.styles, fill: "none", d: il(t.points.map(r => ({
                x: te(r.x, n, s, "width"),
                y: te(r.y, n, s, "height")
            })))
        })
    },
    et = e => t => be(e, {
        id: t.id
    }),
    Il = e => {
        const t = be("image", {
            id: e.id,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            opacity: "0"
        });
        return t.onload = () => {
            t.setAttribute("opacity", e.opacity || 1)
        }, t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.src), t
    },
    _l = e => {
        const t = be("g", {
            id: e.id,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }),
            n = be("line");
        t.appendChild(n);
        const s = be("path");
        t.appendChild(s);
        const r = be("path");
        return t.appendChild(r), t
    },
    ml = {
        image: Il,
        rect: et("rect"),
        ellipse: et("ellipse"),
        text: et("text"),
        path: et("path"),
        line: _l
    },
    Tl = {
        rect: ol,
        ellipse: ll,
        image: dl,
        text: fl,
        path: pl,
        line: El
    },
    gl = (e, t) => ml[e](t),
    hl = (e, t, n, s, r) => {
        t !== "path" && (e.rect = rl(n, s, r)), e.styles = sl(n, s, r), Tl[t](e, n, s, r)
    },
    Rl = ["x", "y", "left", "top", "right", "bottom", "width", "height"],
    Ol = e => typeof e == "string" && /%/.test(e) ? parseFloat(e) / 100 : e,
    Sl = e => {
        const [t, n] = e, s = n.points ? {} : Rl.reduce((r, a) => (r[a] = Ol(n[a]), r), {});
        return [t, {
            zIndex: 0,
            ...n,
            ...s
        }]
    },
    yl = (e, t) => e[1].zIndex > t[1].zIndex ? 1 : e[1].zIndex < t[1].zIndex ? -1 : 0,
    Dl = e => e.utils.createView({
        name: "image-preview-markup",
        tag: "svg",
        ignoreRect: !0,
        mixins: {
            apis: ["width", "height", "crop", "markup", "resize", "dirty"]
        },
        write: ({
            root: t,
            props: n
        }) => {
            if (!n.dirty) return;
            const {
                crop: s,
                resize: r,
                markup: a
            } = n, i = n.width, l = n.height;
            let o = s.width,
                c = s.height;
            if (r) {
                const {
                    size: p
                } = r;
                let u = p && p.width,
                    _ = p && p.height;
                const T = r.mode,
                    h = r.upscale;
                u && !_ && (_ = u), _ && !u && (u = _);
                const E = o < u && c < _;
                if (!E || E && h) {
                    let m = u / o,
                        R = _ / c;
                    if (T === "force") o = u, c = _;
                    else {
                        let S;
                        T === "cover" ? S = Math.max(m, R) : T === "contain" && (S = Math.min(m, R)), o = o * S, c = c * S
                    }
                }
            }
            const d = {
                width: i,
                height: l
            };
            t.element.setAttribute("width", d.width), t.element.setAttribute("height", d.height);
            const f = Math.min(i / o, l / c);
            t.element.innerHTML = "";
            const I = t.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");
            a.filter(I).map(Sl).sort(yl).forEach(p => {
                const [u, _] = p, T = gl(u, _);
                hl(T, u, _, d, f), t.element.appendChild(T)
            })
        }
    }),
    He = (e, t) => ({
        x: e,
        y: t
    }),
    Al = (e, t) => e.x * t.x + e.y * t.y,
    Hn = (e, t) => He(e.x - t.x, e.y - t.y),
    Ll = (e, t) => Al(Hn(e, t), Hn(e, t)),
    Yn = (e, t) => Math.sqrt(Ll(e, t)),
    qn = (e, t) => {
        const n = e,
            s = 1.5707963267948966,
            r = t,
            a = 1.5707963267948966 - t,
            i = Math.sin(s),
            l = Math.sin(r),
            o = Math.sin(a),
            c = Math.cos(a),
            d = n / i,
            f = d * l,
            I = d * o;
        return He(c * f, c * I)
    },
    Ml = (e, t) => {
        const n = e.width,
            s = e.height,
            r = qn(n, t),
            a = qn(s, t),
            i = He(e.x + Math.abs(r.x), e.y - Math.abs(r.y)),
            l = He(e.x + e.width + Math.abs(a.y), e.y + Math.abs(a.x)),
            o = He(e.x - Math.abs(a.y), e.y + e.height - Math.abs(a.x));
        return {
            width: Yn(i, l),
            height: Yn(i, o)
        }
    },
    wl = (e, t, n = 1) => {
        const s = e.height / e.width;
        let r = 1,
            a = t,
            i = 1,
            l = s;
        l > a && (l = a, i = l / s);
        const o = Math.max(r / i, a / l),
            c = e.width / (n * o * i),
            d = c * t;
        return {
            width: c,
            height: d
        }
    },
    Gs = (e, t, n, s) => {
        const r = s.x > .5 ? 1 - s.x : s.x,
            a = s.y > .5 ? 1 - s.y : s.y,
            i = r * 2 * e.width,
            l = a * 2 * e.height,
            o = Ml(t, n);
        return Math.max(o.width / i, o.height / l)
    },
    Fs = (e, t) => {
        let n = e.width,
            s = n * t;
        s > e.height && (s = e.height, n = s / t);
        const r = (e.width - n) * .5,
            a = (e.height - s) * .5;
        return {
            x: r,
            y: a,
            width: n,
            height: s
        }
    },
    Pl = (e, t = {}) => {
        let {
            zoom: n,
            rotation: s,
            center: r,
            aspectRatio: a
        } = t;
        a || (a = e.height / e.width);
        const i = wl(e, a, n),
            l = {
                x: i.width * .5,
                y: i.height * .5
            },
            o = {
                x: 0,
                y: 0,
                width: i.width,
                height: i.height,
                center: l
            },
            c = typeof t.scaleToFit > "u" || t.scaleToFit,
            d = Gs(e, Fs(o, a), s, c ? r : {
                x: .5,
                y: .5
            }),
            f = n * d;
        return {
            widthFloat: i.width / f,
            heightFloat: i.height / f,
            width: Math.round(i.width / f),
            height: Math.round(i.height / f)
        }
    },
    fe = {
        type: "spring",
        stiffness: .5,
        damping: .45,
        mass: 10
    },
    Cl = e => e.utils.createView({
        name: "image-bitmap",
        ignoreRect: !0,
        mixins: {
            styles: ["scaleX", "scaleY"]
        },
        create: ({
            root: t,
            props: n
        }) => {
            t.appendChild(n.image)
        }
    }),
    bl = e => e.utils.createView({
        name: "image-canvas-wrapper",
        tag: "div",
        ignoreRect: !0,
        mixins: {
            apis: ["crop", "width", "height"],
            styles: ["originX", "originY", "translateX", "translateY", "scaleX", "scaleY", "rotateZ"],
            animations: {
                originX: fe,
                originY: fe,
                scaleX: fe,
                scaleY: fe,
                translateX: fe,
                translateY: fe,
                rotateZ: fe
            }
        },
        create: ({
            root: t,
            props: n
        }) => {
            n.width = n.image.width, n.height = n.image.height, t.ref.bitmap = t.appendChildView(t.createChildView(Cl(e), {
                image: n.image
            }))
        },
        write: ({
            root: t,
            props: n
        }) => {
            const {
                flip: s
            } = n.crop, {
                bitmap: r
            } = t.ref;
            r.scaleX = s.horizontal ? -1 : 1, r.scaleY = s.vertical ? -1 : 1
        }
    }),
    vl = e => e.utils.createView({
        name: "image-clip",
        tag: "div",
        ignoreRect: !0,
        mixins: {
            apis: ["crop", "markup", "resize", "width", "height", "dirty", "background"],
            styles: ["width", "height", "opacity"],
            animations: {
                opacity: {
                    type: "tween",
                    duration: 250
                }
            }
        },
        didWriteView: function ({
            root: t,
            props: n
        }) {
            n.background && (t.element.style.backgroundColor = n.background)
        },
        create: ({
            root: t,
            props: n
        }) => {
            t.ref.image = t.appendChildView(t.createChildView(bl(e), Object.assign({}, n))), t.ref.createMarkup = () => {
                t.ref.markup || (t.ref.markup = t.appendChildView(t.createChildView(Dl(e), Object.assign({}, n))))
            }, t.ref.destroyMarkup = () => {
                t.ref.markup && (t.removeChildView(t.ref.markup), t.ref.markup = null)
            };
            const s = t.query("GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR");
            s !== null && (s === "grid" ? t.element.dataset.transparencyIndicator = s : t.element.dataset.transparencyIndicator = "color")
        },
        write: ({
            root: t,
            props: n,
            shouldOptimize: s
        }) => {
            const {
                crop: r,
                markup: a,
                resize: i,
                dirty: l,
                width: o,
                height: c
            } = n;
            t.ref.image.crop = r;
            const d = {
                x: 0,
                y: 0,
                width: o,
                height: c,
                center: {
                    x: o * .5,
                    y: c * .5
                }
            },
                f = {
                    width: t.ref.image.width,
                    height: t.ref.image.height
                },
                I = {
                    x: r.center.x * f.width,
                    y: r.center.y * f.height
                },
                p = {
                    x: d.center.x - f.width * r.center.x,
                    y: d.center.y - f.height * r.center.y
                },
                u = Math.PI * 2 + r.rotation % (Math.PI * 2),
                _ = r.aspectRatio || f.height / f.width,
                T = typeof r.scaleToFit > "u" || r.scaleToFit,
                h = Gs(f, Fs(d, _), u, T ? r.center : {
                    x: .5,
                    y: .5
                }),
                E = r.zoom * h;
            a && a.length ? (t.ref.createMarkup(), t.ref.markup.width = o, t.ref.markup.height = c, t.ref.markup.resize = i, t.ref.markup.dirty = l, t.ref.markup.markup = a, t.ref.markup.crop = Pl(f, r)) : t.ref.markup && t.ref.destroyMarkup();
            const m = t.ref.image;
            if (s) {
                m.originX = null, m.originY = null, m.translateX = null, m.translateY = null, m.rotateZ = null, m.scaleX = null, m.scaleY = null;
                return
            }
            m.originX = I.x, m.originY = I.y, m.translateX = p.x, m.translateY = p.y, m.rotateZ = u, m.scaleX = E, m.scaleY = E
        }
    }),
    Nl = e => e.utils.createView({
        name: "image-preview",
        tag: "div",
        ignoreRect: !0,
        mixins: {
            apis: ["image", "crop", "markup", "resize", "dirty", "background"],
            styles: ["translateY", "scaleX", "scaleY", "opacity"],
            animations: {
                scaleX: fe,
                scaleY: fe,
                translateY: fe,
                opacity: {
                    type: "tween",
                    duration: 400
                }
            }
        },
        create: ({
            root: t,
            props: n
        }) => {
            t.ref.clip = t.appendChildView(t.createChildView(vl(e), {
                id: n.id,
                image: n.image,
                crop: n.crop,
                markup: n.markup,
                resize: n.resize,
                dirty: n.dirty,
                background: n.background
            }))
        },
        write: ({
            root: t,
            props: n,
            shouldOptimize: s
        }) => {
            const {
                clip: r
            } = t.ref, {
                image: a,
                crop: i,
                markup: l,
                resize: o,
                dirty: c
            } = n;
            if (r.crop = i, r.markup = l, r.resize = o, r.dirty = c, r.opacity = s ? 0 : 1, s || t.rect.element.hidden) return;
            const d = a.height / a.width;
            let f = i.aspectRatio || d;
            const I = t.rect.inner.width,
                p = t.rect.inner.height;
            let u = t.query("GET_IMAGE_PREVIEW_HEIGHT");
            const _ = t.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"),
                T = t.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"),
                h = t.query("GET_PANEL_ASPECT_RATIO"),
                E = t.query("GET_ALLOW_MULTIPLE");
            h && !E && (u = I * h, f = h);
            let m = u !== null ? u : Math.max(_, Math.min(I * f, T)),
                R = m / f;
            R > I && (R = I, m = R * f), m > p && (m = p, R = p / f), r.width = R, r.height = m
        }
    });
let Gl = `<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`,
    Wn = 0;
const Fl = e => e.utils.createView({
    name: "image-preview-overlay",
    tag: "div",
    ignoreRect: !0,
    create: ({
        root: t,
        props: n
    }) => {
        let s = Gl;
        if (document.querySelector("base")) {
            const r = new URL(window.location.href.replace(window.location.hash, "")).href;
            s = s.replace(/url\(\#/g, "url(" + r + "#")
        }
        Wn++, t.element.classList.add(`filepond--image-preview-overlay-${n.status}`), t.element.innerHTML = s.replace(/__UID__/g, Wn)
    },
    mixins: {
        styles: ["opacity"],
        animations: {
            opacity: {
                type: "spring",
                mass: 25
            }
        }
    }
}),
    Bl = function () {
        self.onmessage = e => {
            createImageBitmap(e.data.message.file).then(t => {
                self.postMessage({
                    id: e.data.id,
                    message: t
                }, [t])
            })
        }
    },
    xl = function () {
        self.onmessage = e => {
            const t = e.data.message.imageData,
                n = e.data.message.colorMatrix,
                s = t.data,
                r = s.length,
                a = n[0],
                i = n[1],
                l = n[2],
                o = n[3],
                c = n[4],
                d = n[5],
                f = n[6],
                I = n[7],
                p = n[8],
                u = n[9],
                _ = n[10],
                T = n[11],
                h = n[12],
                E = n[13],
                m = n[14],
                R = n[15],
                S = n[16],
                L = n[17],
                b = n[18],
                y = n[19];
            let M = 0,
                N = 0,
                w = 0,
                P = 0,
                U = 0;
            for (; M < r; M += 4) N = s[M] / 255, w = s[M + 1] / 255, P = s[M + 2] / 255, U = s[M + 3] / 255, s[M] = Math.max(0, Math.min((N * a + w * i + P * l + U * o + c) * 255, 255)), s[M + 1] = Math.max(0, Math.min((N * d + w * f + P * I + U * p + u) * 255, 255)), s[M + 2] = Math.max(0, Math.min((N * _ + w * T + P * h + U * E + m) * 255, 255)), s[M + 3] = Math.max(0, Math.min((N * R + w * S + P * L + U * b + y) * 255, 255));
            self.postMessage({
                id: e.data.id,
                message: t
            }, [t.data.buffer])
        }
    },
    Ul = (e, t) => {
        let n = new Image;
        n.onload = () => {
            const s = n.naturalWidth,
                r = n.naturalHeight;
            n = null, t(s, r)
        }, n.src = e
    },
    Vl = {
        1: () => [1, 0, 0, 1, 0, 0],
        2: e => [-1, 0, 0, 1, e, 0],
        3: (e, t) => [-1, 0, 0, -1, e, t],
        4: (e, t) => [1, 0, 0, -1, 0, t],
        5: () => [0, 1, 1, 0, 0, 0],
        6: (e, t) => [0, 1, -1, 0, t, 0],
        7: (e, t) => [0, -1, -1, 0, t, e],
        8: e => [0, -1, 1, 0, 0, e]
    },
    Hl = (e, t, n, s) => {
        s !== -1 && e.transform.apply(e, Vl[s](t, n))
    },
    Yl = (e, t, n, s) => {
        t = Math.round(t), n = Math.round(n);
        const r = document.createElement("canvas");
        r.width = t, r.height = n;
        const a = r.getContext("2d");
        return s >= 5 && s <= 8 && ([t, n] = [n, t]), Hl(a, t, n, s), a.drawImage(e, 0, 0, t, n), r
    },
    Bs = e => /^image/.test(e.type) && !/svg/.test(e.type),
    ql = 10,
    Wl = 10,
    zl = e => {
        const t = Math.min(ql / e.width, Wl / e.height),
            n = document.createElement("canvas"),
            s = n.getContext("2d"),
            r = n.width = Math.ceil(e.width * t),
            a = n.height = Math.ceil(e.height * t);
        s.drawImage(e, 0, 0, r, a);
        let i = null;
        try {
            i = s.getImageData(0, 0, r, a).data
        } catch {
            return null
        }
        const l = i.length;
        let o = 0,
            c = 0,
            d = 0,
            f = 0;
        for (; f < l; f += 4) o += i[f] * i[f], c += i[f + 1] * i[f + 1], d += i[f + 2] * i[f + 2];
        return o = St(o, l), c = St(c, l), d = St(d, l), {
            r: o,
            g: c,
            b: d
        }
    },
    St = (e, t) => Math.floor(Math.sqrt(e / (t / 4))),
    $l = (e, t) => (t = t || document.createElement("canvas"), t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0), t),
    kl = e => {
        let t;
        try {
            t = new ImageData(e.width, e.height)
        } catch {
            t = document.createElement("canvas").getContext("2d").createImageData(e.width, e.height)
        }
        return t.data.set(new Uint8ClampedArray(e.data)), t
    },
    Xl = e => new Promise((t, n) => {
        const s = new Image;
        s.crossOrigin = "Anonymous", s.onload = () => {
            t(s)
        }, s.onerror = r => {
            n(r)
        }, s.src = e
    }),
    jl = e => {
        const t = Fl(e),
            n = Nl(e),
            {
                createWorker: s
            } = e.utils,
            r = (E, m, R) => new Promise(S => {
                E.ref.imageData || (E.ref.imageData = R.getContext("2d").getImageData(0, 0, R.width, R.height));
                const L = kl(E.ref.imageData);
                if (!m || m.length !== 20) return R.getContext("2d").putImageData(L, 0, 0), S();
                const b = s(xl);
                b.post({
                    imageData: L,
                    colorMatrix: m
                }, y => {
                    R.getContext("2d").putImageData(y, 0, 0), b.terminate(), S()
                }, [L.data.buffer])
            }),
            a = (E, m) => {
                E.removeChildView(m), m.image.width = 1, m.image.height = 1, m._destroy()
            },
            i = ({
                root: E
            }) => {
                const m = E.ref.images.shift();
                return m.opacity = 0, m.translateY = -15, E.ref.imageViewBin.push(m), m
            },
            l = ({
                root: E,
                props: m,
                image: R
            }) => {
                const S = m.id,
                    L = E.query("GET_ITEM", {
                        id: S
                    });
                if (!L) return;
                const b = L.getMetadata("crop") || {
                    center: {
                        x: .5,
                        y: .5
                    },
                    flip: {
                        horizontal: !1,
                        vertical: !1
                    },
                    zoom: 1,
                    rotation: 0,
                    aspectRatio: null
                },
                    y = E.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR");
                let M, N, w = !1;
                E.query("GET_IMAGE_PREVIEW_MARKUP_SHOW") && (M = L.getMetadata("markup") || [], N = L.getMetadata("resize"), w = !0);
                const P = E.appendChildView(E.createChildView(n, {
                    id: S,
                    image: R,
                    crop: b,
                    resize: N,
                    markup: M,
                    dirty: w,
                    background: y,
                    opacity: 0,
                    scaleX: 1.15,
                    scaleY: 1.15,
                    translateY: 15
                }), E.childViews.length);
                E.ref.images.push(P), P.opacity = 1, P.scaleX = 1, P.scaleY = 1, P.translateY = 0, setTimeout(() => {
                    E.dispatch("DID_IMAGE_PREVIEW_SHOW", {
                        id: S
                    })
                }, 250)
            },
            o = ({
                root: E,
                props: m
            }) => {
                const R = E.query("GET_ITEM", {
                    id: m.id
                });
                if (!R) return;
                const S = E.ref.images[E.ref.images.length - 1];
                S.crop = R.getMetadata("crop"), S.background = E.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"), E.query("GET_IMAGE_PREVIEW_MARKUP_SHOW") && (S.dirty = !0, S.resize = R.getMetadata("resize"), S.markup = R.getMetadata("markup"))
            },
            c = ({
                root: E,
                props: m,
                action: R
            }) => {
                if (!/crop|filter|markup|resize/.test(R.change.key) || !E.ref.images.length) return;
                const S = E.query("GET_ITEM", {
                    id: m.id
                });
                if (S) {
                    if (/filter/.test(R.change.key)) {
                        const L = E.ref.images[E.ref.images.length - 1];
                        r(E, R.change.value, L.image);
                        return
                    }
                    if (/crop|markup|resize/.test(R.change.key)) {
                        const L = S.getMetadata("crop"),
                            b = E.ref.images[E.ref.images.length - 1];
                        if (L && L.aspectRatio && b.crop && b.crop.aspectRatio && Math.abs(L.aspectRatio - b.crop.aspectRatio) > 1e-5) {
                            const y = i({
                                root: E
                            });
                            l({
                                root: E,
                                props: m,
                                image: $l(y.image)
                            })
                        } else o({
                            root: E,
                            props: m
                        })
                    }
                }
            },
            d = E => {
                const R = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
                return (R ? parseInt(R[1]) : null) <= 58 ? !1 : "createImageBitmap" in window && Bs(E)
            },
            f = ({
                root: E,
                props: m
            }) => {
                const {
                    id: R
                } = m, S = E.query("GET_ITEM", R);
                if (!S) return;
                const L = URL.createObjectURL(S.file);
                Ul(L, (b, y) => {
                    E.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE", {
                        id: R,
                        width: b,
                        height: y
                    })
                })
            },
            I = ({
                root: E,
                props: m
            }) => {
                const {
                    id: R
                } = m, S = E.query("GET_ITEM", R);
                if (!S) return;
                const L = URL.createObjectURL(S.file),
                    b = () => {
                        Xl(L).then(y)
                    },
                    y = M => {
                        URL.revokeObjectURL(L);
                        const w = (S.getMetadata("exif") || {}).orientation || -1;
                        let {
                            width: P,
                            height: U
                        } = M;
                        if (!P || !U) return;
                        w >= 5 && w <= 8 && ([P, U] = [U, P]);
                        const A = Math.max(1, window.devicePixelRatio * .75),
                            O = E.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR") * A,
                            D = U / P,
                            C = E.rect.element.width,
                            v = E.rect.element.height;
                        let B = C,
                            V = B * D;
                        D > 1 ? (B = Math.min(P, C * O), V = B * D) : (V = Math.min(U, v * O), B = V / D);
                        const Me = Yl(M, B, V, w),
                            ze = () => {
                                const It = E.query("GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR") ? zl(data) : null;
                                S.setMetadata("color", It, !0), "close" in M && M.close(), E.ref.overlayShadow.opacity = 1, l({
                                    root: E,
                                    props: m,
                                    image: Me
                                })
                            },
                            oe = S.getMetadata("filter");
                        oe ? r(E, oe, Me).then(ze) : ze()
                    };
                if (d(S.file)) {
                    const M = s(Bl);
                    M.post({
                        file: S.file
                    }, N => {
                        if (M.terminate(), !N) {
                            b();
                            return
                        }
                        y(N)
                    })
                } else b()
            },
            p = ({
                root: E
            }) => {
                const m = E.ref.images[E.ref.images.length - 1];
                m.translateY = 0, m.scaleX = 1, m.scaleY = 1, m.opacity = 1
            },
            u = ({
                root: E
            }) => {
                E.ref.overlayShadow.opacity = 1, E.ref.overlayError.opacity = 0, E.ref.overlaySuccess.opacity = 0
            },
            _ = ({
                root: E
            }) => {
                E.ref.overlayShadow.opacity = .25, E.ref.overlayError.opacity = 1
            },
            T = ({
                root: E
            }) => {
                E.ref.overlayShadow.opacity = .25, E.ref.overlaySuccess.opacity = 1
            },
            h = ({
                root: E
            }) => {
                E.ref.images = [], E.ref.imageData = null, E.ref.imageViewBin = [], E.ref.overlayShadow = E.appendChildView(E.createChildView(t, {
                    opacity: 0,
                    status: "idle"
                })), E.ref.overlaySuccess = E.appendChildView(E.createChildView(t, {
                    opacity: 0,
                    status: "success"
                })), E.ref.overlayError = E.appendChildView(E.createChildView(t, {
                    opacity: 0,
                    status: "failure"
                }))
            };
        return e.utils.createView({
            name: "image-preview-wrapper",
            create: h,
            styles: ["height"],
            apis: ["height"],
            destroy: ({
                root: E
            }) => {
                E.ref.images.forEach(m => {
                    m.image.width = 1, m.image.height = 1
                })
            },
            didWriteView: ({
                root: E
            }) => {
                E.ref.images.forEach(m => {
                    m.dirty = !1
                })
            },
            write: e.utils.createRoute({
                DID_IMAGE_PREVIEW_DRAW: p,
                DID_IMAGE_PREVIEW_CONTAINER_CREATE: f,
                DID_FINISH_CALCULATE_PREVIEWSIZE: I,
                DID_UPDATE_ITEM_METADATA: c,
                DID_THROW_ITEM_LOAD_ERROR: _,
                DID_THROW_ITEM_PROCESSING_ERROR: _,
                DID_THROW_ITEM_INVALID: _,
                DID_COMPLETE_ITEM_PROCESSING: T,
                DID_START_ITEM_PROCESSING: u,
                DID_REVERT_ITEM_PROCESSING: u
            }, ({
                root: E
            }) => {
                const m = E.ref.imageViewBin.filter(R => R.opacity === 0);
                E.ref.imageViewBin = E.ref.imageViewBin.filter(R => R.opacity > 0), m.forEach(R => a(E, R)), m.length = 0
            })
        })
    },
    xs = e => {
        const {
            addFilter: t,
            utils: n
        } = e, {
            Type: s,
            createRoute: r,
            isFile: a
        } = n, i = jl(e);
        return t("CREATE_VIEW", l => {
            const {
                is: o,
                view: c,
                query: d
            } = l;
            if (!o("file") || !d("GET_ALLOW_IMAGE_PREVIEW")) return;
            const f = ({
                root: T,
                props: h
            }) => {
                const {
                    id: E
                } = h, m = d("GET_ITEM", E);
                if (!m || !a(m.file) || m.archived) return;
                const R = m.file;
                if (!tl(R) || !d("GET_IMAGE_PREVIEW_FILTER_ITEM")(m)) return;
                const S = "createImageBitmap" in (window || {}),
                    L = d("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");
                if (!S && L && R.size > L) return;
                T.ref.imagePreview = c.appendChildView(c.createChildView(i, {
                    id: E
                }));
                const b = T.query("GET_IMAGE_PREVIEW_HEIGHT");
                b && T.dispatch("DID_UPDATE_PANEL_HEIGHT", {
                    id: m.id,
                    height: b
                });
                const y = !S && R.size > d("GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE");
                T.dispatch("DID_IMAGE_PREVIEW_CONTAINER_CREATE", {
                    id: E
                }, y)
            },
                I = (T, h) => {
                    if (!T.ref.imagePreview) return;
                    let {
                        id: E
                    } = h;
                    const m = T.query("GET_ITEM", {
                        id: E
                    });
                    if (!m) return;
                    const R = T.query("GET_PANEL_ASPECT_RATIO"),
                        S = T.query("GET_ITEM_PANEL_ASPECT_RATIO"),
                        L = T.query("GET_IMAGE_PREVIEW_HEIGHT");
                    if (R || S || L) return;
                    let {
                        imageWidth: b,
                        imageHeight: y
                    } = T.ref;
                    if (!b || !y) return;
                    const M = T.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"),
                        N = T.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"),
                        P = (m.getMetadata("exif") || {}).orientation || -1;
                    if (P >= 5 && P <= 8 && ([b, y] = [y, b]), !Bs(m.file) || T.query("GET_IMAGE_PREVIEW_UPSCALE")) {
                        const C = 2048 / b;
                        b *= C, y *= C
                    }
                    const U = y / b,
                        A = (m.getMetadata("crop") || {}).aspectRatio || U;
                    let F = Math.max(M, Math.min(y, N));
                    const O = T.rect.element.width,
                        D = Math.min(O * A, F);
                    T.dispatch("DID_UPDATE_PANEL_HEIGHT", {
                        id: m.id,
                        height: D
                    })
                },
                p = ({
                    root: T
                }) => {
                    T.ref.shouldRescale = !0
                },
                u = ({
                    root: T,
                    action: h
                }) => {
                    h.change.key === "crop" && (T.ref.shouldRescale = !0)
                },
                _ = ({
                    root: T,
                    action: h
                }) => {
                    T.ref.imageWidth = h.width, T.ref.imageHeight = h.height, T.ref.shouldRescale = !0, T.ref.shouldDrawPreview = !0, T.dispatch("KICK")
                };
            c.registerWriter(r({
                DID_RESIZE_ROOT: p,
                DID_STOP_RESIZE: p,
                DID_LOAD_ITEM: f,
                DID_IMAGE_PREVIEW_CALCULATE_SIZE: _,
                DID_UPDATE_ITEM_METADATA: u
            }, ({
                root: T,
                props: h
            }) => {
                T.ref.imagePreview && (T.rect.element.hidden || (T.ref.shouldRescale && (I(T, h), T.ref.shouldRescale = !1), T.ref.shouldDrawPreview && (requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        T.dispatch("DID_FINISH_CALCULATE_PREVIEWSIZE", {
                            id: h.id
                        })
                    })
                }), T.ref.shouldDrawPreview = !1)))
            }))
        }), {
            options: {
                allowImagePreview: [!0, s.BOOLEAN],
                imagePreviewFilterItem: [() => !0, s.FUNCTION],
                imagePreviewHeight: [null, s.INT],
                imagePreviewMinHeight: [44, s.INT],
                imagePreviewMaxHeight: [256, s.INT],
                imagePreviewMaxFileSize: [null, s.INT],
                imagePreviewZoomFactor: [2, s.INT],
                imagePreviewUpscale: [!1, s.BOOLEAN],
                imagePreviewMaxInstantPreviewFileSize: [1e6, s.INT],
                imagePreviewTransparencyIndicator: [null, s.STRING],
                imagePreviewCalculateAverageImageColor: [!1, s.BOOLEAN],
                imagePreviewMarkupShow: [!0, s.BOOLEAN],
                imagePreviewMarkupFilter: [() => !0, s.FUNCTION]
            }
        }
    },
    Zl = typeof window < "u" && typeof window.document < "u";
Zl && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {
    detail: xs
}));
/*!
 * FilePondPluginFileValidateSize 2.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const Us = ({
    addFilter: e,
    utils: t
}) => {
    const {
        Type: n,
        replaceInString: s,
        toNaturalFileSize: r
    } = t;
    return e("ALLOW_HOPPER_ITEM", (a, {
        query: i
    }) => {
        if (!i("GET_ALLOW_FILE_SIZE_VALIDATION")) return !0;
        const l = i("GET_MAX_FILE_SIZE");
        if (l !== null && a.size > l) return !1;
        const o = i("GET_MIN_FILE_SIZE");
        return !(o !== null && a.size < o)
    }), e("LOAD_FILE", (a, {
        query: i
    }) => new Promise((l, o) => {
        if (!i("GET_ALLOW_FILE_SIZE_VALIDATION")) return l(a);
        const c = i("GET_FILE_VALIDATE_SIZE_FILTER");
        if (c && !c(a)) return l(a);
        const d = i("GET_MAX_FILE_SIZE");
        if (d !== null && a.size > d) {
            o({
                status: {
                    main: i("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),
                    sub: s(i("GET_LABEL_MAX_FILE_SIZE"), {
                        filesize: r(d, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i))
                    })
                }
            });
            return
        }
        const f = i("GET_MIN_FILE_SIZE");
        if (f !== null && a.size < f) {
            o({
                status: {
                    main: i("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),
                    sub: s(i("GET_LABEL_MIN_FILE_SIZE"), {
                        filesize: r(f, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i))
                    })
                }
            });
            return
        }
        const I = i("GET_MAX_TOTAL_FILE_SIZE");
        if (I !== null && i("GET_ACTIVE_ITEMS").reduce((u, _) => u + _.fileSize, 0) > I) {
            o({
                status: {
                    main: i("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),
                    sub: s(i("GET_LABEL_MAX_TOTAL_FILE_SIZE"), {
                        filesize: r(I, ".", i("GET_FILE_SIZE_BASE"), i("GET_FILE_SIZE_LABELS", i))
                    })
                }
            });
            return
        }
        l(a)
    })), {
        options: {
            allowFileSizeValidation: [!0, n.BOOLEAN],
            maxFileSize: [null, n.INT],
            minFileSize: [null, n.INT],
            maxTotalFileSize: [null, n.INT],
            fileValidateSizeFilter: [null, n.FUNCTION],
            labelMinFileSizeExceeded: ["File is too small", n.STRING],
            labelMinFileSize: ["Minimum file size is {filesize}", n.STRING],
            labelMaxFileSizeExceeded: ["File is too large", n.STRING],
            labelMaxFileSize: ["Maximum file size is {filesize}", n.STRING],
            labelMaxTotalFileSizeExceeded: ["Maximum total size exceeded", n.STRING],
            labelMaxTotalFileSize: ["Maximum total file size is {filesize}", n.STRING]
        }
    }
},
    Ql = typeof window < "u" && typeof window.document < "u";
Ql && document.dispatchEvent(new CustomEvent("FilePond:pluginloaded", {
    detail: Us
}));
const Kl = "https://script.google.com/macros/s/AKfycbycvBWGwMTljcoHf_wTGBznOR6J1uRuQB9ynartIsmIBx1-3PHqPqbzqaFOEng8cS37/exec",
    Jl = "https://script.google.com/macros/s/AKfycbzC5iz0gBvJuUDm_gs8zBVxD0kLj6t7NiibYCYsmAHT7YIIzFfyfoKltOVtDYUxZrWh/exec";
Ye(Ns);
Ye(xs);
Ye(Us);
const ec = document.querySelector('input[type="file"]'),
    tc = nt(ec, {
        maxFileSize: "10MB",
        maxFiles: 1
    }),
    zt = document.querySelector("#delivery-method"),
    zn = document.querySelector("#shipping-details"),
    $n = document.querySelector("#delivery-fee");

function ot() {
    document.getElementById("discount").innerHTML = `RM ${$t().toFixed(2)}`, document.getElementById("total").innerHTML = `RM ${Vs().toFixed(2)}`
}
let W = JSON.parse(localStorage.getItem("cart"));
ot();
(!W || W.length === 0) && le.fire({
    title: "Your cart is empty",
    text: "Please add items to cart before proceeding!",
    icon: "error",
    confirmButtonText: "OK"
}).then(() => {
    window.location.href = "/"
});
const nc = document.getElementById("cart-body");
W.forEach(e => {
    if (e.code === "H" || e.code === "C" || e.code === "CB") {
        W = W.filter(n => n.code !== e.code), localStorage.setItem("cart", JSON.stringify(W));
        return
    }
    let t = `
        <tr data-id="${e.code}" data-size="${e.size}">
            <td class="pl-6">
                <img src="${Te[e.code].image}" alt="${Te[e.code].name}" class="w-16 h-16 object-contain"/>
            </td>
            <td>
                <h3 class="font-bold text-base">${Te[e.code].name}</h3>
            `;
    (e.code === "TSS" || e.code === "TLS" || e.code === "H") && (t += `<p class="text-sm">Size: ${e.size}</p>`), t += `
            </td>
            <td>
                <input type="number" value="${e.quantity}" class="input input-sm input-bordered w-16" min="0" max="100" ></input>
            </td>
            <td>
                <p class="font-bold text-base" id="price-${e.code}">RM ${(Te[e.code].price * e.quantity).toFixed(2)}</p>
            </td>
        </tr>
    `, nc.innerHTML += t
});
const sc = document.querySelectorAll("#cart-body input[type=number]");
sc.forEach(e => {
    e.addEventListener("change", t => {
        const n = t.target.parentElement.parentElement.dataset.id,
            s = t.target.parentElement.parentElement.dataset.size,
            r = parseInt(t.target.value);
        let a = W.findIndex(i => i.code === n);
        (n === "TSS" || n === "TLS") && (a = W.findIndex(i => i.code === n && i.size === s)), r <= 0 || !r ? le.fire({
            title: "Are you sure?",
            text: `You are about to remove ${Te[n].name} from your cart.`,
            icon: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then(i => {
            i.isConfirmed ? (W.splice(a, 1), localStorage.setItem("cart", JSON.stringify(W)), location.reload()) : (t.target.value = W[a].quantity, document.getElementById(`price-${n}`).innerHTML = `RM ${(Te[n].price * W[a].quantity).toFixed(2)}`, ot())
        }) : W[a].quantity = r, localStorage.setItem("cart", JSON.stringify(W)), document.getElementById(`price-${n}`).innerHTML = `RM ${(Te[n].price * r).toFixed(2)}`, ot()
    })
});

function Vs() {
    let e = 0;
    return W && W.forEach(t => {
        e += Te[t.code].price * t.quantity
    }), e -= $t(), e += Hs(), e
}

function $t() {
    let e = 0,
        t = 0,
        n = 0,
        s = 0,
        r = 0;
    if (!W || W.length === 0) return 0;
    if (W.forEach(a => {
        a.code === "TSS" || a.code === "TLS" ? t += a.quantity : a.code === "H" ? n += a.quantity : a.code === "CB" ? s += a.quantity : a.code === "C" && (r += a.quantity)
    }), t > 0) {
        if (t > 0 && n > 0 && r > 0 && s > 0) {
            let a = Math.min(t, n, r, s);
            e += a * 19, t -= a, n -= a, r -= a, s -= a
        }
        if (t > 0 && n > 0 && r > 0) {
            let a = Math.min(t, n, r);
            e += a * 13, t -= a, n -= a, r -= a
        }
        if (t > 0 && n > 0) {
            let a = Math.min(t, n);
            e += a * 9, t -= a, n -= a
        }
        if (t > 0 && s > 0) {
            let a = Math.min(t, s);
            e += a * 4, t -= a, s -= a
        }
        if (t > 0 && r > 0) {
            let a = Math.min(t, r);
            e += a * 4, t -= a, r -= a
        }
    }
    return e
}

function Hs() {
    const e = zt.value;
    return e === "delivery-w" ? 8.5 : e === "delivery-e" ? 15 : 0
}
zt.addEventListener("change", e => {
    const t = e.target.value;
    t === "delivery-e" || t === "delivery-w" ? (zn.classList.remove("hidden"), t === "delivery-w" ? $n.innerText = "RM 8.50" : $n.innerText = "RM 15.00") : zn.classList.add("hidden"), ot()
});
const kn = document.getElementById("cart-form");
kn.addEventListener("submit", e => {
    if (e.preventDefault(), !document.getElementById("student-email").value.endsWith("usm.my")) {
        le.fire({
            title: "Invalid email",
            text: "Please use your USM email.",
            icon: "error"
        });
        return
    }
    const n = zt.value;
    if (n === "delivery-e" || n === "delivery-w") {
        const s = document.getElementById("address").value,
            r = document.getElementById("postcode").value,
            a = document.getElementById("state").value;
        if (!s || !r || !a) {
            le.fire({
                title: "Invalid Address",
                text: "Please fill in your shipping details.",
                icon: "error"
            });
            return
        }
    }
    le.fire({
        title: "Are you sure?",
        text: "You are about to checkout your items. Please make sure all items are correct.",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, checkout!"
    }).then(s => {
        if (s.isConfirmed) {
            le.fire({
                title: "Processing...",
                html: "Please wait while we process your order and upload your receipt. Do not close or refresh this page.",
                allowOutsideClick: !1,
                didOpen: () => {
                    le.showLoading()
                }
            });
            const r = new FormData(kn);
            r.append("discount", $t().toString()), r.append("delivery-fee", Hs().toString()), r.append("total", Vs().toString()), W.forEach(c => {
                if (c.code === "TSS" || c.code === "TLS" || c.code === "H") {
                    const d = `${c.quantity}-${c.size}`;
                    r.has(c.code) ? r.set(c.code, r.get(c.code) + ", " + d) : r.append(c.code, d)
                } else r.append(c.code, c.quantity)
            });
            const a = document.getElementById("matric-no").value || "lec",
                l = tc.getFile().file,
                o = a + "-" + l.name;
            r.append("file", o), fetch(Kl, {
                method: "POST",
                body: r
            }).then(c => c.json()).then(c => {
                const d = new FileReader;
                d.readAsArrayBuffer(l), d.onload = f => {
                    const I = new URLSearchParams({
                        filename: o,
                        mimeType: l.type
                    });
                    fetch(`${Jl}?${I}`, {
                        method: "POST",
                        body: JSON.stringify([...new Int8Array(f.target.result)])
                    }).then(p => p.json()).then(p => {
                        le.close(), le.fire({
                            title: "Order success!",
                            html: `Your order has been successfully placed. Please join the WhatsApp group for the latest information and updates.
                                        <br/>
                                        <div class="flex items-center justify-center gap-4 py-4">
                                            <a href="https://chat.whatsapp.com/LLPBacvrNrl5hHJxybixXp" target="_blank"><div class="btn bg-green-500 text-white border-0 capitalize"><svg viewBox="0 0 24 24" class="w-6 mr-1 inline astro-ZRYBALL6" astro-icon="ic:baseline-whatsapp"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"></path></svg> WhatsApp Group</div></a>
                                        </div>
                                        `,
                            icon: "success",
                            showCloseButton: !0,
                            showConfirmButton: !1
                        }).then(() => {
                            window.location.href = "/", localStorage.removeItem("cart")
                        })
                    }).catch(p => {
                        le.fire({
                            icon: "error",
                            title: "Something went wrong...",
                            text: p
                        })
                    })
                }
            }).catch(c => {
                le.fire({
                    icon: "error",
                    title: "Something went wrong...",
                    text: c
                })
            })
        }
    })
});