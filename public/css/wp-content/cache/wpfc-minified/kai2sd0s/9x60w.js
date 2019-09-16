! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) { return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() { return e.call(this) }, get: function(a) { return null != a ? a < 0 ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function(a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function(a) { return n.each(this, a) }, map: function(a) { return this.pushStack(n.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(e.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], "__proto__" !== d && g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === n.type(a) }, isArray: Array.isArray || function(a) { return "array" === n.type(a) }, isWindow: function(a) { return null != a && a == a.window }, isNumeric: function(a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function(a) { var b; if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; try { if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (!l.ownFirst)
                for (b in a) return k.call(a, b); for (b in a); return void 0 === b || k.call(a, b) }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function(b) { b && n.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) { var c, d = 0; if (s(a)) { for (c = a.length; d < c; d++)
                    if (!1 === b.call(a[d], d, a[d])) break } else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function(a, b, c) { var d; if (b) { if (h) return h.call(b, a, c); for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c } return -1 }, merge: function(a, b) { var c = +b.length,
                d = 0,
                e = a.length; while (d < c) a[e++] = b[d++]; if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)(d = !b(a[f], f)) !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, g = 0,
                h = []; if (s(a))
                for (d = a.length; g < d; g++) null != (e = b(a[g], g, c)) && h.push(e);
            else
                for (g in a) null != (e = b(a[g], g, c)) && h.push(e); return f.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, f; if ("string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a)) return c = e.call(arguments, 2), d = function() { return a.apply(b || this, c.concat(e.call(arguments))) }, d.guid = a.guid = a.guid || n.guid++, d }, now: function() { return +new Date }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) { var b = !!a && "length" in a && a.length,
            c = n.type(a); return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) }
    var t = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = fa(),
            z = fa(),
            A = fa(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) { for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1 },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (xa) { H = { apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function ea(a, b, d, e) { var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; while (h--) r[h] = l + " " + pa(r[h]);
                        s = r.join(","), w = _.test(a) && na(b.parentNode) || b } if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") } } } return i(a.replace(Q, "$1"), b, d, e) }

        function fa() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function ga(a) { return a[u] = !0, a }

        function ha(a) { var b = n.createElement("div"); try { return !!a(b) } catch (xa) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ia(a, b) { var c = a.split("|"),
                e = c.length; while (e--) d.attrHandle[c[e]] = b }

        function ja(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function ka(a) { return function(b) { return "input" === b.nodeName.toLowerCase() && b.type === a } }

        function la(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function ma(a) { return ga(function(b) { return b = +b, ga(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function na(a) { return a && void 0 !== a.getElementsByTagName && a }
        c = ea.support = {}, f = ea.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ea.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ha(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ha(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ha(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if (void 0 !== b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if (void 0 !== b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ha(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ha(function(a) { var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ha(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return ja(a, b);
                c = a; while (c = c.parentNode) g.unshift(c);
                c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ea.matches = function(a, b) { return ea(a, null, null, b) }, ea.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (xa) {}
            return ea(b, n, null, [a]).length > 0 }, ea.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ea.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ea.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ea.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ea.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = ea.selectors = { cacheLength: 50, createPseudo: ga, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ea.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = ea.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), !1 === t)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return (t -= e) === d || t % d == 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ga(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1")); return d[u] ? ga(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ga(function(a) { return function(b) { return ea(a, b).length > 0 } }), contains: ga(function(a) { return a = a.replace(ba, ca),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ga(function(a) { return V.test(a || "") || ea.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) { var c;
                            do { if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-") } while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) { return !1 === a.disabled }, disabled: function(a) { return !0 === a.disabled }, checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return Y.test(a.nodeName) }, input: function(a) { return X.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: ma(function() { return [0] }), last: ma(function(a, b) { return [b - 1] }), eq: ma(function(a, b, c) { return [c < 0 ? c + b : c] }), even: ma(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: ma(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: ma(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }), gt: ma(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ka(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = la(b);

        function oa() {}
        oa.prototype = d.filters = d.pseudos, d.setFilters = new oa, g = ea.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ea.error(a) : z(a, i).slice(0) };

        function pa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

        function qa(a, b, c) { var d = b.dir,
                e = c && "parentNode" === d,
                f = x++; return b.first ? function(b, c, f) { while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) { var h, i, j, k = [w, f]; if (g) { while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 } } }

        function ra(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function sa(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ea(a, b[d], c); return c }

        function ta(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function ua(a, b, c, d, e, f) { return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ga(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || sa(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ta(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ta(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) }

        function va(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function(a) { return a === b }, h, !0), l = qa(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [qa(ra(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a)) }
                    m.push(c) }
            return ra(m) }

        function wa(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ta(u) }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ga(f) : f } return h = ea.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = va(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, wa(e, d)), f.selector = a } return f }, i = ea.select = function(a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (!(b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0])) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length) }
                i = W.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b))) { if (j.splice(i, 1), !(a = f.length && pa(j))) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ha(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ha(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ia("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ha(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ia("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ha(function(a) { return null == a.getAttribute("disabled") }) || ia(K, function(a, b, c) { var d; if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ea }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) { var d = [],
                e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) { if (e && n(a).is(c)) break;
                    d.push(a) }
            return d },
        v = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) { if (n.isFunction(b)) return n.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a) } return n.grep(a, function(a) { return n.inArray(a, b) > -1 !== c }) }
    n.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function(a) { var b, c = [],
                d = this,
                e = d.length; if ("string" != typeof a) return this.pushStack(n(a).filter(function() { for (b = 0; b < e; b++)
                    if (n.contains(d[b], this)) return !0 })); for (b = 0; b < e; b++) n.find(a, d[b], c); return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function(a) { return this.pushStack(z(this, a || [], !1)) }, not: function(a) { return this.pushStack(z(this, a || [], !0)) }, is: function(a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || A, "string" == typeof a) { if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                    for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } if ((f = d.getElementById(e[2])) && f.parentNode) { if (f.id !== e[2]) return A.find(a);
                this.length = 1, this[0] = f } return this.context = d, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }).prototype = n.fn, A = n(d);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({ has: function(a) { var b, c = n(a, this),
                d = c.length; return this.filter(function() { for (b = 0; b < d; b++)
                    if (n.contains(this, c[b])) return !0 }) }, closest: function(a, b) { for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function E(a, b) { do { a = a[b] } while (a && 1 !== a.nodeType); return a }
    n.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return u(a, "parentNode") }, parentsUntil: function(a, b, c) { return u(a, "parentNode", c) }, next: function(a) { return E(a, "nextSibling") }, prev: function(a) { return E(a, "previousSibling") }, nextAll: function(a) { return u(a, "nextSibling") }, prevAll: function(a) { return u(a, "previousSibling") }, nextUntil: function(a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return u(a, "previousSibling", c) }, siblings: function(a) { return v((a.parentNode || {}).firstChild, a) }, children: function(a) { return v(a.firstChild) }, contents: function(a) { return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.uniqueSort(e)), C.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var F = /\S+/g;

    function G(a) { var b = {}; return n.each(a.match(F) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) { a = "string" == typeof a ? G(a) : n.extend({}, a); var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function b(c) { n.each(c, function(c, d) { n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d) }) }(arguments), c && !b && i()), this }, remove: function() { return n.each(arguments, function(a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = !0, c || j.disable(), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j }, n.extend({ Deferred: function(a) { var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() { return c }, always: function() { return e.done(arguments).fail(arguments), this }, then: function() { var a = arguments; return n.Deferred(function(c) { n.each(b, function(b, f) { var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() { var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) { return null != a ? n.extend(a, d) : d } },
                e = {}; return d.pipe = d.then, n.each(b, function(a, f) { var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) { var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) { return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k; if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); b < d; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f; return f || g.resolveWith(k, c), g.promise() } });
    var H;
    n.fn.ready = function(a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) }, ready: function(a) {
            (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } });

    function I() { d.addEventListener ? (d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J)) : (d.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) }

    function J() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (I(), n.ready()) }
    n.ready.promise = function(b) { if (!H)
            if (H = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J);
        else { d.attachEvent("onreadystatechange", J), a.attachEvent("onload", J); var c = !1; try { c = null == a.frameElement && d.documentElement } catch (e) {}
            c && c.doScroll && function b() { if (!n.isReady) { try { c.doScroll("left") } catch (e) { return a.setTimeout(b, 50) }
                    I(), n.ready() } }() } return H.promise(b) }, n.ready.promise();
    var K;
    for (K in n(l)) break;
    l.ownFirst = "0" === K, l.inlineBlockNeedsLayout = !1, n(function() { var a, b, c, e;
            (c = d.getElementsByTagName("body")[0]) && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e)) }),
        function() { var a = d.createElement("div");
            l.deleteExpando = !0; try { delete a.test } catch (b) { l.deleteExpando = !1 }
            a = null }();
    var L = function(a) { var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1; return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b) },
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(N, "-$1").toLowerCase(); if ("string" == typeof(c = a.getAttribute(d))) { try { c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : M.test(c) ? n.parseJSON(c) : c) } catch (e) {}
                n.data(a, b, c) } else c = void 0 } return c }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) { if (L(a)) { var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h; if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? null == (f = g[b]) && (f = g[n.camelCase(b)]) : f = g, f } }

    function R(a, b, c) { if (L(a)) { var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !n.isEmptyObject(d)) return }(c || (delete g[h].data, P(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0) } } }
    n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return !!(a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]) && !P(a) }, data: function(a, b, c) { return Q(a, b, c) }, removeData: function(a, b) { return R(a, b) }, _data: function(a, b, c) { return Q(a, b, c, !0) }, _removeData: function(a, b) { return R(a, b, !0) } }), n.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                    g = f && f.attributes; if (void 0 === a) { if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), O(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { n.data(this, a) }) : arguments.length > 1 ? this.each(function() { n.data(this, a, b) }) : f ? O(f, a, n.data(f, a)) : void 0 }, removeData: function(a) { return this.each(function() { n.removeData(this, a) }) } }), n.extend({ queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || [] }, dequeue: function(a, b) { b = b || "fx"; var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function() { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { n.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--)(c = n._data(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }),
        function() { var a;
            l.shrinkWrapBlocks = function() { if (null != a) return a;
                a = !1; var b, c, e; return (c = d.getElementsByTagName("body")[0]) && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0 } }();
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function W(a, b, c, d) { var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do { f = f || ".5", k /= f, n.style(a, b, k + j) } while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }
    var X = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) X(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(n(a), c) })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        Y = /^(?:checkbox|radio)$/i,
        Z = /<([\w:-]+)/,
        $ = /^$|\/(?:java|ecma)script/i,
        _ = /^\s+/,
        aa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ba(a) { var b = aa.split("|"),
            c = a.createDocumentFragment(); if (c.createElement)
            while (b.length) c.createElement(b.pop()); return c }! function() { var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando) }();
    var ca = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    ca.optgroup = ca.option, ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead, ca.th = ca.td;

    function da(a, b) { var c, d, e = 0,
            f = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0; if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, da(d, b)); return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f }

    function ea(a, b) { for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) }
    var fa = /<|&#?\w+;/,
        ga = /<tbody/i;

    function ha(a) { Y.test(a.type) && (a.defaultChecked = a.checked) }

    function ia(a, b, c, d, e) { for (var f, g, h, i, j, k, m, o = a.length, p = ba(b), q = [], r = 0; r < o; r++)
            if ((g = a[r]) || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (fa.test(g)) { i = i || p.appendChild(b.createElement("div")), j = (Z.exec(g) || ["", ""])[1].toLowerCase(), m = ca[j] || ca._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0]; while (f--) i = i.lastChild; if (!l.leadingWhitespace && _.test(g) && q.push(b.createTextNode(_.exec(g)[0])), !l.tbody) { g = "table" !== j || ga.test(g) ? "<table>" !== m[1] || ga.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k) }
            n.merge(q, i.childNodes), i.textContent = ""; while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(da(q, "input"), ha), r = 0; while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = da(p.appendChild(g), "script"), h && ea(i), c) { f = 0; while (g = i[f++]) $.test(g.type || "") && c.push(g) } return i = null, p }! function() { var b, c, e = d.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = !1 === e.attributes[c].expando);
        e = null }();
    var ja = /^(?:input|select|textarea)$/i,
        ka = /^key/,
        la = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ma = /^(?:focusinfocus|focusoutblur)$/,
        na = /^([^.]*)(?:\.(.+)|)/;

    function oa() { return !0 }

    function pa() { return !1 }

    function qa() { try { return d.activeElement } catch (a) {} }

    function ra(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ra(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = pa;
        else if (!e) return a; return 1 === f && (g = e, e = function(a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) }) }
    n.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) { return void 0 === n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(F) || [""], h = b.length; while (h--) f = na.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, p, k) || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a); if (r && (k = r.events)) { b = (b || "").match(F) || [""], j = b.length; while (j--)
                    if (h = na.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete k[o]) } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function(b, c, e, f) { var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : []; if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ma.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, c))) { if (!f && !l.noBubble && !n.isWindow(e)) { for (j = l.delegateType || q, ma.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a) }
                o = 0; while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), (g = h && i[h]) && g.apply && L(i) && (b.result = g.apply(i, c), !1 === b.result && b.preventDefault()); if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), c)) && L(e) && h && e[q] && !n.isWindow(e)) { m = e[h], m && (e[h] = null), n.event.triggered = q; try { e[q]() } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m) } return b.result } }, dispatch: function(a) { a = n.event.fix(a); var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, void 0 !== (d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) { for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d }) }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function(a) { if (a[n.expando]) return a; var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = la.test(f) ? this.mouseHooks : ka.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; while (b--) c = e[b], a[c] = g[c]; return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, e, f, g = b.button,
                    h = b.fromElement; return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== qa() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { if (this === qa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if (n.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 }, _default: function(a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c) { var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = d.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) } : function(a, b, c) { var d = "on" + b;
        a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function(a, b) { if (!(this instanceof n.Event)) return new n.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? oa : pa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), this[n.expando] = !0 }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: pa, isPropagationStopped: pa, isImmediatePropagationStopped: pa, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = oa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = oa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = oa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submit || (n.event.special.submit = { setup: function() { if (n.nodeName(this, "form")) return !1;
            n.event.add(this, "click._submit keypress._submit", function(a) { var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) { a._submitBubble = !0 }), n._data(c, "submit", !0)) }) }, postDispatch: function(a) { a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a)) }, teardown: function() { if (n.nodeName(this, "form")) return !1;
            n.event.remove(this, "._submit") } }), l.change || (n.event.special.change = { setup: function() { if (ja.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._justChanged = !0) }), n.event.add(this, "click._change", function(a) { this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a) })), !1;
            n.event.add(this, "beforeactivate._change", function(a) { var b = a.target;
                ja.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a) }), n._data(b, "change", !0)) }) }, handle: function(a) { var b = a.target; if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments) }, teardown: function() { return n.event.remove(this, "._change"), !ja.test(this.nodeName) } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function(a, b, c, d) { return ra(this, a, b, c, d) }, one: function(a, b, c, d) { return ra(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = pa), this.each(function() { n.event.remove(this, a, c, b) }) }, trigger: function(a, b) { return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return n.event.trigger(a, b, c, !0) } });
    var sa = / jQuery\d+="(?:null|\d+)"/g,
        ta = new RegExp("<(?:" + aa + ")[\\s/>]", "i"),
        ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        va = /<script|<style|<link/i,
        wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xa = /^true\/(.*)/,
        ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        za = ba(d),
        Aa = za.appendChild(d.createElement("div"));

    function Ba(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function Ca(a) { return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a }

    function Da(a) { var b = xa.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Ea(a, b) { if (1 === b.nodeType && n.hasData(a)) { var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h)
                    for (d = 0, e = h[c].length; d < e; d++) n.event.add(b, c, h[c][d]) }
            g.data && (g.data = n.extend({}, g.data)) } }

    function Fa(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b); for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (Ca(b).text = a.text, Da(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Y.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } }

    function Ga(a, b, c, d) { b = f.apply([], b); var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q); if (r || o > 1 && "string" == typeof q && !l.checkClone && wa.test(q)) return a.each(function(e) { var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ga(f, b, c, d) }); if (o && (k = ia(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) { for (i = n.map(da(k, "script"), Ca), h = i.length; m < o; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, da(g, "script"))), c.call(a[m], g, m); if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Da), m = 0; m < h; m++) g = i[m], $.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(ya, "")));
            k = e = null } return a }

    function Ha(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(da(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && ea(da(d, "script")), d.parentNode.removeChild(d)); return a }
    n.extend({ htmlPrefilter: function(a) { return a.replace(ua, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h, i = n.contains(a.ownerDocument, a); if (l.html5Clone || n.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Aa.innerHTML = a.outerHTML, Aa.removeChild(f = Aa.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = da(f), h = da(a), g = 0; null != (e = h[g]); ++g) d[g] && Fa(e, d[g]); if (b)
                if (c)
                    for (h = h || da(a), d = d || da(f), g = 0; null != (e = h[g]); g++) Ea(e, d[g]);
                else Ea(a, f);
            return d = da(f, "script"), d.length > 0 && ea(d, !i && da(a, "script")), d = h = e = null, f }, cleanData: function(a, b) { for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || L(d)) && (f = d[i], g = f && j[f])) { if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || void 0 === d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f)) } } }), n.fn.extend({ domManip: Ga, detach: function(a) { return Ha(this, a, !0) }, remove: function(a) { return Ha(this, a) }, text: function(a) { return X(this, function(a) { return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a)) }, null, a, arguments.length) }, append: function() { return Ga(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { Ba(this, a).appendChild(a) } }) }, prepend: function() { return Ga(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ba(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return Ga(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return Ga(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && n.cleanData(da(a, !1)); while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return n.clone(this, a, b) }) }, html: function(a) { return X(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0; if ("string" == typeof a && !va.test(a) && (l.htmlSerialize || !ta.test(a)) && (l.leadingWhitespace || !_.test(a)) && !ca[(Z.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a); try { for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(da(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return Ga(this, arguments, function(b) { var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(da(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) { for (var c, d = 0, e = [], f = n(a), h = f.length - 1; d <= h; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get()); return this.pushStack(e) } });
    var Ia, Ja = { HTML: "block", BODY: "block" };

    function Ka(a, b) { var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display"); return c.detach(), d }

    function La(a) { var b = d,
            c = Ja[a]; return c || (c = Ka(a, b), "none" !== c && c || (Ia = (Ia || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ia[0].contentWindow || Ia[0].contentDocument).document, b.write(), b.close(), c = Ka(a, b), Ia.detach()), Ja[a] = c), c }
    var Ma = /^margin/,
        Na = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Oa = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e },
        Pa = d.documentElement;
    ! function() { var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");

        function k() { var k, l, m = d.documentElement;
            m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", (f = 0 === k[0].offsetHeight) && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i) }
        j.style && (j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function() { return null == b && k(), f }, boxSizingReliable: function() { return null == b && k(), e }, pixelMarginRight: function() { return null == b && k(), c }, pixelPosition: function() { return null == b && k(), b }, reliableMarginRight: function() { return null == b && k(), g }, reliableMarginLeft: function() { return null == b && k(), h } })) }();
    var Qa, Ra, Sa = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Qa = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }, Ra = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Qa(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Na.test(g) && Ma.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "" }) : Pa.currentStyle && (Qa = function(a) { return a.currentStyle }, Ra = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Qa(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Na.test(g) && !Sa.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Ta(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Ua = /alpha\([^)]*\)/i,
        Va = /opacity\s*=\s*([^)]*)/i,
        Wa = /^(none|table(?!-c[ea]).+)/,
        Xa = new RegExp("^(" + S + ")(.*)$", "i"),
        Ya = { position: "absolute", visibility: "hidden", display: "block" },
        Za = { letterSpacing: "0", fontWeight: "400" },
        $a = ["Webkit", "O", "Moz", "ms"],
        _a = d.createElement("div").style;

    function ab(a) { if (a in _a) return a; var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = $a.length; while (c--)
            if ((a = $a[c] + b) in _a) return a }

    function bb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", La(d.nodeName)))) : (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function cb(a, b, c) { var d = Xa.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function db(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g }

    function eb(a, b, c) { var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Qa(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f); if (e <= 0 || null == e) { if (e = Ra(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Na.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + db(a, b, c || (g ? "border" : "content"), d, f) + "px" }
    n.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Ra(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b),
                    i = a.style; if (b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {} } }, css: function(a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ra(a, b, d)), "normal" === f && b in Za && (f = Za[b]), "" === c || c ? (e = parseFloat(f), !0 === c || isFinite(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) { if (c) return Wa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Oa(a, Ya, function() { return eb(a, b, d) }) : eb(a, b, d) }, set: function(a, c, d) { var e = d && Qa(a); return cb(a, c, d ? db(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function(a, b) { return Va.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function(a, b) { var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Ua, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ua.test(f) ? f.replace(Ua, e) : f + " " + e) } }), n.cssHooks.marginRight = Ta(l.reliableMarginRight, function(a, b) { if (b) return Oa(a, { display: "inline-block" }, Ra, [a, "marginRight"]) }), n.cssHooks.marginLeft = Ta(l.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Ra(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Oa(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left }) : 0)) + "px" }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Ma.test(a) || (n.cssHooks[a + b].set = cb) }), n.fn.extend({ css: function(a, b) { return X(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (n.isArray(b)) { for (d = Qa(a), e = b.length; g < e; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function() { return bb(this, !0) }, hide: function() { return bb(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { V(this) ? n(this).show() : n(this).hide() }) } });

    function fb(a, b, c, d, e) { return new fb.prototype.init(a, b, c, d, e) }
    n.Tween = fb, fb.prototype = { constructor: fb, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() { var a = fb.propHooks[this.prop]; return a && a.get ? a.get(this) : fb.propHooks._default.get(this) }, run: function(a) { var b, c = fb.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : fb.propHooks._default.set(this), this } }, fb.prototype.init.prototype = fb.prototype, fb.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, fb.propHooks.scrollTop = fb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = fb.prototype.init, n.fx.step = {};
    var gb, hb, ib = /^(?:toggle|show|hide)$/,
        jb = /queueHooks$/;

    function kb() { return a.setTimeout(function() { gb = void 0 }), gb = n.now() }

    function lb(a, b) { var c, d = { height: a },
            e = 0; for (b = b ? 1 : 0; e < 4; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d }

    function mb(a, b, c) { for (var d, e = (pb.tweeners[b] || []).concat(pb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d }

    function nb(a, b, c) { var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, m.always(function() { m.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), "inline" === (k = "none" === j ? n._data(a, "olddisplay") || La(a.nodeName) : j) && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== La(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b)
            if (e = b[d], ib.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0 }
                o[d] = r && r[d] || n.style(a, d) } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? La(a.nodeName) : j) && (p.display = j);
        else { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() { n(a).hide() }), m.done(function() { var b;
                n._removeData(a, "fxshow"); for (b in o) n.style(a, b, o[b]) }); for (d in o) g = mb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function ob(a, b) { var c, d, e, f, g; for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function pb(a, b, c) { var d, e, f = 0,
            g = pb.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = gb || kb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: gb || kb(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for (ob(k, j.opts.specialEasing); f < g; f++)
            if (d = pb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, mb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    n.Animation = n.extend(pb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return W(c.elem, a, T.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(F); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], pb.tweeners[c] = pb.tweeners[c] || [], pb.tweeners[c].unshift(b) }, prefilters: [nb], prefilter: function(a, b) { b ? pb.prefilters.unshift(a) : pb.prefilters.push(a) } }), n.speed = function(a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() { var b = pb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && jb.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || n.dequeue(this, a) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), n.each(["toggle", "show", "hide"], function(a, b) { var c = n.fn[b];
            n.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(lb(b, !0), a, d, e) } }), n.each({ slideDown: lb("show"), slideUp: lb("hide"), slideToggle: lb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() { var a, b = n.timers,
                c = 0; for (gb = n.now(); c < b.length; c++)(a = b[c])() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), gb = void 0 }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { hb || (hb = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(hb), hb = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) { return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) } }) },
        function() { var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value }();
    var qb = /\r/g,
        rb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) { return null == a ? "" : a + "" })), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(qb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function(a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(rb, " ") } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) { var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length; while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) { if (n.isArray(b)) return a.checked = n.inArray(n(a).val(), b) > -1 } }, l.checkOn || (n.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({ attr: function(a, b) { return X(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) { var c, d, e = 0,
                f = b && b.match(F); if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d) } }), tb = { set: function(a, b, c) { return !1 === b ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function(a, b, d) { var e, f; return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e } : ub[b] = function(a, b, c) { if (!c) return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), xb && wb || (n.attrHooks.value = { set: function(a, b, c) { if (!n.nodeName(a, "input")) return sb && sb.set(a, b, c);
            a.defaultValue = b } }), wb || (sb = { set: function(a, b, c) { var d = a.getAttributeNode(c); if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c)) return b } }, ub.id = ub.name = ub.coords = function(a, b, c) { var d; if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); if (c && c.specified) return c.value }, set: sb.set }, n.attrHooks.contenteditable = { set: function(a, b, c) { sb.set(a, "" !== b && b, c) } }, n.each(["width", "height"], function(a, b) { n.attrHooks[b] = { set: function(a, c) { if ("" === c) return a.setAttribute(b, "auto"), c } } })), l.style || (n.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
    var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) { return X(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = n.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), n.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), l.hrefNormalized || n.each(["href", "src"], function(a, b) { n.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null }, set: function(a) { var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;

    function Bb(a) { return n.attr(a, "class") || "" }
    n.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, Bb(this))) }); if ("string" == typeof a && a) { b = a.match(F) || []; while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, Bb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(F) || []; while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) { g = 0; while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, Bb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(F) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0;
            b = " " + a + " "; while (c = this[d++])
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
            return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } });
    var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null,
            e = n.trim(b + ""); return e && !n.trim(e.replace(Fb, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
    var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(F) || []; if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function Tb(a, b, c, d) { var e = {},
            f = a === Ob;

        function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function Ub(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && n.extend(!0, a, c), a }

    function Vb(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g) }
            f = f || d } if (f) return f !== i[0] && i.unshift(f), c[f] }

    function Wb(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {!0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1])); break }
            if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Qb, type: "GET", isLocal: Jb.test(Rb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Pb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a) }, ajaxPrefilter: Sb(Nb), ajaxTransport: Sb(Ob), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = { readyState: 0, getResponseHeader: function(a) { var b; if (2 === u) { if (!k) { k = {}; while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2] }
                            b = k[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return 2 === u ? g : null }, setRequestHeader: function(a, b) { var c = a.toLowerCase(); return u || (a = t[c] = t[c] || a, s[a] = b), this }, overrideMimeType: function(a) { return u || (l.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (u < 2)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this }, abort: function(a) { var b = a || v; return j && j.abort(b), x(0, b), this } }; if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(F) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]); for (e in l.headers) w.setRequestHeader(e, l.headers[e]); if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u)) return w.abort();
            v = "abort"; for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]); if (j = Tb(Ob, l, c, w)) { if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() { w.abort("timeout") }, l.timeout)); try { u = 1, j.send(s, x) } catch (y) { if (!(u < 2)) throw y;
                    x(-1, y) } } else x(-1, "No Transport");

            function x(b, c, d, e) { var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && b < 300 || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), (x = w.getResponseHeader("etag")) && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", b < 0 && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop"))) } return w }, getJSON: function(a, b, c) { return n.get(a, b, c, "json") }, getScript: function(a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) { return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, n.fn.extend({ wrapAll: function(a) { if (n.isFunction(a)) return this.each(function(b) { n(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function(a) { return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = n.isFunction(a); return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() { return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } });

    function Xb(a) { return a.style && a.style.display || n.css(a, "display") }

    function Yb(a) { if (!n.contains(a.ownerDocument || d, a)) return !0; while (a && 1 === a.nodeType) { if ("none" === Xb(a) || "hidden" === a.type) return !0;
            a = a.parentNode } return !1 }
    n.expr.filters.hidden = function(a) { return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a) }, n.expr.filters.visible = function(a) { return !n.expr.filters.hidden(a) };
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function(b, e) { c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) cc(a + "[" + e + "]", b[e], c, d) }
    n.param = function(a, b) { var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) cc(c, a[c], b, e); return d.join("&").replace(Zb, "+") }, n.fn.extend({ serialize: function() { return n.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Y.test(a)) }).map(function(a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function(a) { return { name: b.name, value: a.replace(_b, "\r\n") } }) : { name: b.name, value: c.replace(_b, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc() } : gc;
    var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() { for (var a in ec) ec[a](void 0, !0) }), l.cors = !!fc && "withCredentials" in fc, (fc = l.ajax = !!fc) && n.ajaxTransport(function(b) { if (!b.crossDomain || l.cors) { var c; return { send: function(d, e) { var f, g = b.xhr(),
                        h = ++dc; if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest"); for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) { var f, i, j; if (c && (d || 4 === g.readyState))
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else { j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText); try { i = g.statusText } catch (k) { i = "" }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404 }
                        j && e(f, i, j, g.getAllResponseHeaders()) }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c() }, abort: function() { c && c(void 0, !0) } } } });

    function gc() { try { return new a.XMLHttpRequest } catch (b) {} }

    function hc() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c = d.head || n("head")[0] || d.documentElement; return { send: function(e, f) { b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function() { b && b.onload(void 0, !0) } } } });
    var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = ic.pop() || n.expando + "_" + Db++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = !1 !== b.jsonp && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : !1 !== b.jsonp && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), n.parseHTML = function(a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || d; var e = x.exec(a),
            f = !c && []; return e ? [b.createElement(e[1])] : (e = ia([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) };
    var kc = n.fn.load;
    n.fn.load = function(a, b, c) { if ("string" != typeof a && kc) return kc.apply(this, arguments); var d, e, f, g = this,
            h = a.indexOf(" "); return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) { return this.on(b, a) } }), n.expr.filters.animated = function(a) { return n.grep(n.timers, function(b) { return a === b.elem }).length };

    function lc(a) { return n.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow) }
    n.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument; if (f) return b = f.documentElement, n.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function() { if (this[0]) { var a, b, c = { top: 0, left: 0 },
                    d = this[0]; return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || Pa }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = /Y/.test(b);
        n.fn[a] = function(d) { return X(this, function(a, d, e) { var f = lc(a); if (void 0 === e) return f ? b in f ? f[b] : f.document.documentElement[d] : a[d];
                f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e }, a, d, arguments.length, null) } }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ta(l.pixelPosition, function(a, c) { if (c) return c = Ra(a, b), Na.test(c) ? n(a).position()[b] + "px" : c }) }), n.each({ Height: "height", Width: "width" }, function(a, b) {
        n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return X(this, function(b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), n.fn.size = function() { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return n });
    var mc = a.jQuery,
        nc = a.$;
    return n.noConflict = function(b) { return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) { var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace())) }

        function e(b, c, e, f) { if (Object.defineProperty) try { return void Object.defineProperty(b, c, { configurable: !0, enumerable: !0, get: function() { return d(f), e }, set: function(a) { d(f), e = a } }) } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e }
        a.migrateVersion = "1.4.1"; var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() { f = {}, a.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode"); var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() { return null },
            j = a.attrHooks.value && a.attrHooks.value.set || function() { return c },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) { var j = e.toLowerCase(),
                o = b && b.nodeType; return i && (h.length < 4 && d("jQuery.fn.attr(props, pass) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = { get: function(b, d) { var e, f = a.prop(b, d); return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c }, set: function(b, c, d) { var e; return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d } }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f)) }, a.attrHooks.value = { get: function(a, b) { var c = (a.nodeName || "").toLowerCase(); return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null) }, set: function(a, b) { var c = (a.nodeName || "").toLowerCase(); return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b)) } }; var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) { var g, h; return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h) }, a.fn.init.prototype = a.fn, a.find = function(a) { var b = Array.prototype.slice.call(arguments); if ("string" == typeof a && u.test(a)) try { document.querySelector(a) } catch (c) { a = a.replace(v, function(a, b, c, d) { return "[" + b + c + '"' + d + '"]' }); try { document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a } catch (e) { d("Attribute selector with '#' was not fixed: " + b[0]) } }
            return r.apply(this, b) }; var x; for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) { return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null) }, a.uaMatch = function(a) { a = a.toLowerCase(); var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || []; return { browser: b[1] || "", version: b[2] || "0" } }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) { return new b.fn.init(a, c) }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) { var f = a.fn.init.call(this, d, e, c); return f instanceof b ? f : b(f) }, b.fn.init.prototype = b.fn; var c = b(document); return d("jQuery.sub() is deprecated"), b }, a.fn.size = function() { return d("jQuery.fn.size() is deprecated; use the .length property"), this.length }; var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) { var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() { var a; return y = !0, a = d.apply(this, arguments), y = !1, a }) }), a.swap = function(a, b, c, e) { var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated"); for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []); for (g in b) a.style[g] = h[g]; return f }, a.ajaxSetup({ converters: { "text json": a.parseJSON } }); var z = a.fn.data;
        a.fn.data = function(b) { var e, f, g = this[0]; return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f) }; var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) { c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated"); var g, h, i, j, k = []; if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) { return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0 }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length)); return k }); var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) { return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1")) };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) { a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f) }, a.event.remove = function(a, b, c, d, e) { C.call(this, a, L(b) || "", c, d, e) }, a.each(["load", "unload", "error"], function(b, c) { a.fn[c] = function() { var a = Array.prototype.slice.call(arguments, 0); return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)) } }), a.fn.toggle = function(b, c) { if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated"); var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) { var d = (a._data(this, "lastToggle" + b.guid) || 0) % g; return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1 }; for (h.guid = f; g < e.length;) e[g++].guid = f; return this.click(h) }, a.fn.live = function(b, c, e) { return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this) }, a.fn.die = function(b, c) { return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this) }, a.event.trigger = function(a, b, c, e) { return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e) }, a.each(I.split("|"), function(b, c) { a.event.special[c] = { setup: function() { var b = this; return b !== document && (a.event.add(document, c + "." + a.guid, function() { a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0) }), a._data(this, c, a.guid++)), !1 }, teardown: function() { return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1 } } }), a.event.special.ready = { setup: function() { this === document && d("'ready' event is deprecated") } }; var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find; if (a.fn.andSelf = function() { return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments) }, a.fn.find = function(a) { var b = N.apply(this, arguments); return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b }, a.Callbacks) { var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) { var c = O(),
                    e = c.promise(); return c.pipe = e.pipe = function() { var b = arguments; return d("deferred.pipe() is deprecated"), a.Deferred(function(d) { a.each(P, function(f, g) { var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() { var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments) }) }), b = null }).promise() }, c.isResolved = function() { return d("deferred.isResolved is deprecated"), "resolved" === c.state() }, c.isRejected = function() { return d("deferred.isRejected is deprecated"), "rejected" === c.state() }, b && b.call(c, c), c } } }(jQuery, window);;
window.Modernizr = function(a, b, c) {
        function z(a) { j.cssText = a }

        function A(a, b) { return z(m.join(a + ";") + (b || "")) }

        function B(a, b) { return typeof a === b }

        function C(a, b) { return !!~("" + a).indexOf(b) }

        function D(a, b) { for (var d in a) { var e = a[d]; if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 }

        function E(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f } return !1 }

        function F(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" "); return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c)) } var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) { var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body"); if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i },
            x = {}.hasOwnProperty,
            y;!B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) { return x.call(a, b) } : y = function(a, b) { return b in a && B(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function(b) { var c = this; if (typeof c != "function") throw new TypeError; var d = u.call(arguments, 1),
                e = function() { if (this instanceof e) { var a = function() {};
                        a.prototype = c.prototype; var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(u.call(arguments))) }; return e }), q.csstransforms3d = function() { var a = !!F("perspective"); return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }; for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v)); return e.addTest = function(a, b) { if (typeof a == "object")
                    for (var d in a) y(a, d) && e.addTest(d, a[d]);
                else { a = a.toLowerCase(); if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, z(""), i = k = null,
            function(a, b) {
                function k(a, b) { var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) }

                function l() { var a = r.elements; return typeof a == "string" ? a.split(" ") : a }

                function m(a) { var b = i[a[g]]; return b || (b = {}, h++, a[g] = h, i[h] = b), b }

                function n(a, c, f) { c || (c = b); if (j) return c.createElement(a);
                    f || (f = m(c)); var g; return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g }

                function o(a, c) { a || (a = b); if (j) return a.createDocumentFragment();
                    c = c || m(a); var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length; for (; e < g; e++) d.createElement(f[e]); return d }

                function p(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) { return r.shivMethods ? n(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(r, b.frag) }

                function q(a) { a || (a = b); var c = m(a); return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a } var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() { try { var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }() } catch (c) { f = !0, j = !0 } })(); var r = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, supportsUnknownElements: j, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: q, createElement: n, createDocumentFragment: o };
                a.html5 = r, q(b) }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) { return D([a]) }, e.testAllProps = F, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e }(this, this.document),
    function(a, b, c) {
        function d(a) { return "[object Function]" == o.call(a) }

        function e(a) { return "string" == typeof a }

        function f() {}

        function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a }

        function h() { var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 }

        function i(a, c, d, e, f, i, j) {
            function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function() { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) }

        function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this }

        function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) { return "[object Array]" == o.call(a) },
            x = [],
            y = {},
            z = { timeout: function(a, b) { return b.length && (a.timeout = b[0]), a } },
            A, B;
        B = function(a) {
            function b(a) { var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c }

            function g(a, e, f, g, h) { var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) }

            function h(a, b) {
                function c(a, c) { if (a) { if (e(a)) c || (j = function() { var a = [].slice.call(arguments);
                            k.apply(this, a), l() }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() { var b = 0,
                                        c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() { var a = [].slice.call(arguments);
                                k.apply(this, a), l() } : j[n] = function(a) { return function() { var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l) }, B.addPrefix = function(a, b) { z[a] = b }, B.addFilter = function(a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) { var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a; for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function() { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function(a, c, d, e, g, i) { var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0)) } }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) };
(function(a) { if (typeof define === "function" && define.amd && define.amd.jQuery) { define(["jquery"], a) } else { a(jQuery) } }(function(f) { var y = "1.6.9",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe"; var n = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: true, triggerOnTouchLeave: false, allowPageScroll: "auto", fallbackToMouseEvents: true, excludedElements: "label, button, input, select, textarea, a, .noSwipe", preventDefaultEvents: true };
    f.fn.swipetp = function(H) { var G = f(this),
            F = G.data(C); if (F && typeof H === "string") { if (F[H]) { return F[H].apply(this, Array.prototype.slice.call(arguments, 1)) } else { f.error("Method " + H + " does not exist on jQuery.swipetp") } } else { if (!F && (typeof H === "object" || !H)) { return w.apply(this, arguments) } } return G };
    f.fn.swipetp.version = y;
    f.fn.swipetp.defaults = n;
    f.fn.swipetp.phases = { PHASE_START: g, PHASE_MOVE: k, PHASE_END: h, PHASE_CANCEL: q };
    f.fn.swipetp.directions = { LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: A };
    f.fn.swipetp.pageScroll = { NONE: m, HORIZONTAL: E, VERTICAL: u, AUTO: s };
    f.fn.swipetp.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: i };

    function w(F) { if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) { F.allowPageScroll = m } if (F.click !== undefined && F.tap === undefined) { F.tap = F.click } if (!F) { F = {} }
        F = f.extend({}, f.fn.swipetp.defaults, F); return this.each(function() { var H = f(this); var G = H.data(C); if (!G) { G = new D(this, F);
                H.data(C, G) } }) }

    function D(a5, aw) { var aA = (a || d || !aw.fallbackToMouseEvents),
            K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = aA ? null : "mouseleave",
            aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel"); var ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null; var aS = f(a5); var aa = "start"; var X = 0; var aR = null; var U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0; var aX = null,
            ag = null; try { aS.bind(K, aO);
            aS.bind(aE, ba) } catch (al) { f.error("events not supported " + K + "," + aE + " on jQuery.swipetp") }
        this.enable = function() { aS.bind(K, aO);
            aS.bind(aE, ba); return aS };
        this.disable = function() { aL(); return aS };
        this.destroy = function() { aL();
            aS.data(C, null);
            aS = null };
        this.option = function(bd, bc) { if (aw[bd] !== undefined) { if (bc === undefined) { return aw[bd] } else { aw[bd] = bc } } else { f.error("Option " + bd + " does not exist on jQuery.swipetp.options") } return null };

        function aO(be) { if (aC()) { return } if (f(be.target).closest(aw.excludedElements, aS).length > 0) { return } var bf = be.originalEvent ? be.originalEvent : be; var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g; if (bg) { X = bg.length } else { be.preventDefault() }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S(); if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) { aj(0, bc);
                U = au(); if (X == 2) { aj(1, bg[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start) } if (aw.swipeStatus || aw.pinchStatus) { bd = P(bf, aa) } } else { bd = false } if (bd === false) { aa = q;
                P(bf, aa); return bd } else { if (aw.hold) { ag = setTimeout(f.proxy(function() { aS.trigger("hold", [bf.target]); if (aw.hold) { bd = aw.hold.call(aS, bf, bf.target) } }, this), aw.longTapThreshold) }
                ap(true) } return null }

        function a4(bf) { var bi = bf.originalEvent ? bf.originalEvent : bf; if (aa === h || aa === q || an()) { return } var be, bj = bi.touches,
                bd = bj ? bj[0] : bi; var bg = aI(bd);
            a3 = au(); if (bj) { X = bj.length } if (aw.hold) { clearTimeout(ag) }
            aa = k; if (X == 2) { if (a2 == 0) { aj(1, bj[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start) } else { aI(bj[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end) }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0) } if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) { aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah); if (aw.swipeStatus || aw.pinchStatus) { be = P(bi, aa) } if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) { var bc = true; if (aw.triggerOnTouchLeave) { var bh = aZ(this);
                        bc = F(bg.end, bh) } if (!aw.triggerOnTouchEnd && bc) { aa = aD(k) } else { if (aw.triggerOnTouchLeave && !bc) { aa = aD(h) } } if (aa == q || aa == h) { P(bi, aa) } } } else { aa = q;
                P(bi, aa) } if (be === false) { aa = q;
                P(bi, aa) } }

        function M(bc) { var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches; if (be) { if (be.length) { G(); return true } } if (an()) { X = ae }
            a3 = au();
            ac = aN(); if (bb() || !ao()) { aa = q;
                P(bd, aa) } else { if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) { bc.preventDefault();
                    aa = h;
                    P(bd, aa) } else { if (!aw.triggerOnTouchEnd && a7()) { aa = h;
                        aG(bd, aa, B) } else { if (aa === k) { aa = q;
                            P(bd, aa) } } } }
            ap(false); return null }

        function ba() { X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false) }

        function L(bc) { var bd = bc.originalEvent ? bc.originalEvent : bc; if (aw.triggerOnTouchLeave) { aa = aD(h);
                P(bd, aa) } }

        function aL() { aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M); if (T) { aS.unbind(T, L) }
            ap(false) }

        function aD(bg) { var bf = bg; var be = aB(); var bd = ao(); var bc = bb(); if (!be || bc) { bf = q } else { if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) { bf = h } else { if (!bd && bg == h && aw.triggerOnTouchLeave) { bf = q } } } return bf }

        function P(be, bc) { var bd, bf = be.touches; if ((J() || W()) || (Q() || aY())) { if (J() || W()) { bd = aG(be, bc, l) } if ((Q() || aY()) && bd !== false) { bd = aG(be, bc, t) } } else { if (aH() && bd !== false) { bd = aG(be, bc, j) } else { if (aq() && bd !== false) { bd = aG(be, bc, b) } else { if (ai() && bd !== false) { bd = aG(be, bc, B) } } } } if (bc === q) { ba(be) } if (bc === h) { if (bf) { if (!bf.length) { ba(be) } } else { ba(be) } } return bd }

        function aG(bf, bc, be) { var bd; if (be == l) { aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]); if (aw.swipeStatus) { bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR); if (bd === false) { return false } } if (bc == h && aW()) { aS.trigger("swipe", [aQ, ah, ac, X, aR]); if (aw.swipe) { bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR); if (bd === false) { return false } } switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]); if (aw.swipeLeft) { bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR) } break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]); if (aw.swipeRight) { bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR) } break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]); if (aw.swipeUp) { bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR) } break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]); if (aw.swipeDown) { bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR) } break } } } if (be == t) { aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]); if (aw.pinchStatus) { bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR); if (bd === false) { return false } } if (bc == h && a9()) { switch (aK) {
                        case c:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]); if (aw.pinchIn) { bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR) } break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]); if (aw.pinchOut) { bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR) } break } } } if (be == B) { if (bc === q || bc === h) { clearTimeout(aX);
                    clearTimeout(ag); if (Z() && !I()) { O = au();
                        aX = setTimeout(f.proxy(function() { O = null;
                            aS.trigger("tap", [bf.target]); if (aw.tap) { bd = aw.tap.call(aS, bf, bf.target) } }, this), aw.doubleTapThreshold) } else { O = null;
                        aS.trigger("tap", [bf.target]); if (aw.tap) { bd = aw.tap.call(aS, bf, bf.target) } } } } else { if (be == j) { if (bc === q || bc === h) { clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]); if (aw.doubleTap) { bd = aw.doubleTap.call(aS, bf, bf.target) } } } else { if (be == b) { if (bc === q || bc === h) { clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]); if (aw.longTap) { bd = aw.longTap.call(aS, bf, bf.target) } } } } } return bd }

        function ao() { var bc = true; if (aw.threshold !== null) { bc = ah >= aw.threshold } return bc }

        function bb() { var bc = false; if (aw.cancelThreshold !== null && aQ !== null) { bc = (aU(aQ) - ah) >= aw.cancelThreshold } return bc }

        function af() { if (aw.pinchThreshold !== null) { return ar >= aw.pinchThreshold } return true }

        function aB() { var bc; if (aw.maxTimeThreshold) { if (ac >= aw.maxTimeThreshold) { bc = false } else { bc = true } } else { bc = true } return bc }

        function am(bc, bd) { if (aw.preventDefaultEvents === false) { return } if (aw.allowPageScroll === m) { bc.preventDefault() } else { var be = aw.allowPageScroll === s; switch (bd) {
                    case p:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) { bc.preventDefault() } break;
                    case o:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) { bc.preventDefault() } break;
                    case e:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) { bc.preventDefault() } break;
                    case x:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) { bc.preventDefault() } break } } }

        function a9() { var bd = aP(); var bc = Y(); var be = af(); return bd && bc && be }

        function aY() { return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut) }

        function Q() { return !!(a9() && aY()) }

        function aW() { var bf = aB(); var bh = ao(); var be = aP(); var bc = Y(); var bd = bb(); var bg = !bd && bc && be && bh && bf; return bg }

        function W() { return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown) }

        function J() { return !!(aW() && W()) }

        function aP() { return ((X === aw.fingers || aw.fingers === i) || !a) }

        function Y() { return aR[0].end.x !== 0 }

        function a7() { return !!(aw.tap) }

        function Z() { return !!(aw.doubleTap) }

        function aV() { return !!(aw.longTap) }

        function R() { if (O == null) { return false } var bc = au(); return (Z() && ((bc - O) <= aw.doubleTapThreshold)) }

        function I() { return R() }

        function ay() { return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold)) }

        function a1() { return ((ac > aw.longTapThreshold) && (ah < r)) }

        function ai() { return !!(ay() && a7()) }

        function aH() { return !!(R() && Z()) }

        function aq() { return !!(a1() && aV()) }

        function G() { a6 = au();
            ae = event.touches.length + 1 }

        function S() { a6 = 0;
            ae = 0 }

        function an() { var bc = false; if (a6) { var bd = au() - a6; if (bd <= aw.fingerReleaseThreshold) { bc = true } } return bc }

        function aC() { return !!(aS.data(C + "_intouch") === true) }

        function ap(bc) { if (bc === true) { aS.bind(az, a4);
                aS.bind(V, M); if (T) { aS.bind(T, L) } } else { aS.unbind(az, a4, false);
                aS.unbind(V, M, false); if (T) { aS.unbind(T, L, false) } }
            aS.data(C + "_intouch", bc === true) }

        function aj(bd, bc) { var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY; return aR[bd] }

        function aI(bc) { var be = bc.identifier !== undefined ? bc.identifier : 0; var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY; return bd }

        function ad(bd) { for (var bc = 0; bc < aR.length; bc++) { if (aR[bc].identifier == bd) { return aR[bc] } } }

        function ak() { var bc = []; for (var bd = 0; bd <= 5; bd++) { bc.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 }) } return bc }

        function aJ(bc, bd) { bd = Math.max(bd, aU(bc));
            N[bc].distance = bd }

        function aU(bc) { if (N[bc]) { return N[bc].distance } return undefined }

        function ab() { var bc = {};
            bc[p] = ax(p);
            bc[o] = ax(o);
            bc[e] = ax(e);
            bc[x] = ax(x); return bc }

        function ax(bc) { return { direction: bc, distance: 0 } }

        function aN() { return a3 - U }

        function av(bf, be) { var bd = Math.abs(bf.x - be.x); var bc = Math.abs(bf.y - be.y); return Math.round(Math.sqrt(bd * bd + bc * bc)) }

        function a8(bc, bd) { var be = (bd / bc) * 1; return be.toFixed(2) }

        function at() { if (H < 1) { return A } else { return c } }

        function aT(bd, bc) { return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2))) }

        function aF(bf, bd) { var bc = bf.x - bd.x; var bh = bd.y - bf.y; var be = Math.atan2(bh, bc); var bg = Math.round(be * 180 / Math.PI); if (bg < 0) { bg = 360 - Math.abs(bg) } return bg }

        function aM(bd, bc) { var be = aF(bd, bc); if ((be <= 45) && (be >= 0)) { return p } else { if ((be <= 360) && (be >= 315)) { return p } else { if ((be >= 135) && (be <= 225)) { return o } else { if ((be > 45) && (be < 135)) { return x } else { return e } } } } }

        function au() { var bc = new Date(); return bc.getTime() }

        function aZ(bc) { bc = f(bc); var be = bc.offset(); var bd = { left: be.left, right: be.left + bc.outerWidth(), top: be.top, bottom: be.top + bc.outerHeight() }; return bd }

        function F(bc, bd) { return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom) } } }));
if (typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}
if (window.tplogs == true)
    try {
        console.groupCollapsed("ThemePunch GreenSocks Logs");
    } catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true)
    try {
        console.info("Build GreenSock SandBox for ThemePunch Plugins");
        console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
    } catch (e) {}! function(a, b) { "use strict"; var c = {},
            d = a.document,
            e = a.GreenSockGlobals = a.GreenSockGlobals || a; if (!e.TweenLite) { var f, g, h, i, j, k = function(a) { var b, c = a.split("."),
                        d = e; for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {}; return d },
                l = k("com.greensock"),
                m = 1e-10,
                n = function(a) { var b, c = [],
                        d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c },
                o = function() {},
                p = function() { var a = Object.prototype.toString,
                        b = a.call([]); return function(c) { return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b) } }(),
                q = {},
                r = function(d, f, g, h) { this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g; var i = [];
                    this.check = function(j) { for (var l, m, n, o, p, s = f.length, t = s; --s > -1;)(l = q[f[s]] || new r(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : j && l.sc.push(this); if (0 === t && g) { if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                                if (e[n] = c[n] = o, p = "undefined" != typeof module && module.exports, !p && "function" == typeof define && define.amd) define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() { return o });
                                else if (p)
                                if (d === b) { module.exports = c[b] = o; for (s in c) o[s] = c[s] } else c[b] && (c[b][n] = o);
                            for (s = 0; s < this.sc.length; s++) this.sc[s].check() } }, this.check(!0) },
                s = a._gsDefine = function(a, b, c, d) { return new r(a, b, c, d) },
                t = l._class = function(a, b, c) { return b = b || function() {}, s(a, [], function() { return b }, c), b };
            s.globals = e; var u = [0, 0, 1, 1],
                v = t("easing.Ease", function(a, b, c, d) { this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u }, !0),
                w = v.map = {},
                x = v.register = function(a, b, c, d) { for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                        for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a }; for (h = v.prototype, h._calcEnd = !1, h.getRatio = function(a) { if (this._func) return this._params[0] = a, this._func.apply(null, this._params); var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a); return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2 }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut; var y = t("events.EventDispatcher", function(a) { this._listeners = {}, this._eventTarget = a || this });
            h = y.prototype, h.addEventListener = function(a, b, c, d, e) { e = e || 0; var f, g, h = this._listeners[a],
                    k = 0; for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
                h.splice(k, 0, { c: b, s: c, up: d, pr: e }) }, h.removeEventListener = function(a, b) { var c, d = this._listeners[a]; if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1) }, h.dispatchEvent = function(a) { var b, c, d, e = this._listeners[a]; if (e)
                    for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c)) }; var z = a.requestAnimationFrame,
                A = a.cancelAnimationFrame,
                B = Date.now || function() { return (new Date).getTime() },
                C = B(); for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
            t("Ticker", function(a, b) { var c, e, f, g, h, k = this,
                    l = B(),
                    n = b !== !1 && z ? "auto" : !1,
                    p = 500,
                    q = 33,
                    r = "tick",
                    s = function(a) { var b, d, i = B() - C;
                        i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r) };
                y.call(k), k.time = k.frame = 0, k.tick = function() { s(!0) }, k.lagSmoothing = function(a, b) { p = a || 1 / m, q = Math.min(b, p, 0) }, k.sleep = function() { null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1)) }, k.wake = function(a) { null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function(a) { return setTimeout(a, 1e3 * (h - k.time) + 1 | 0) }, k === i && (j = !0), s(2) }, k.fps = function(a) { return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c }, k.useRAF = function(a) { return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n }, k.fps(a), setTimeout(function() { "auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1) }, 1500) }), h = l.Ticker.prototype = new l.events.EventDispatcher, h.constructor = l.Ticker; var D = t("core.Animation", function(a, b) { if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, W) { j || i.wake(); var c = this.vars.useFrames ? V : W;
                    c.add(this, c._time), this.vars.paused && this.paused(!0) } });
            i = D.ticker = new l.Ticker, h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1; var E = function() { j && B() - C > 2e3 && i.wake(), setTimeout(E, 2e3) };
            E(), h.play = function(a, b) { return null != a && this.seek(a, b), this.reversed(!1).paused(!1) }, h.pause = function(a, b) { return null != a && this.seek(a, b), this.paused(!0) }, h.resume = function(a, b) { return null != a && this.seek(a, b), this.paused(!1) }, h.seek = function(a, b) { return this.totalTime(Number(a), b !== !1) }, h.restart = function(a, b) { return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0) }, h.reverse = function(a, b) { return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1) }, h.render = function(a, b, c) {}, h.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, h.isActive = function() { var a, b = this._timeline,
                    c = this._startTime; return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale }, h._enabled = function(a, b) { return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1 }, h._kill = function(a, b) { return this._enabled(!1, !1) }, h.kill = function(a, b) { return this._kill(a, b), this }, h._uncache = function(a) { for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline; return this }, h._swapSelfInParams = function(a) { for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this); return c }, h._callback = function(a) { var b = this.vars,
                    c = b[a],
                    d = b[a + "Params"],
                    e = b[a + "Scope"] || b.callbackScope || this,
                    f = d ? d.length : 0; switch (f) {
                    case 0:
                        c.call(e); break;
                    case 1:
                        c.call(e, d[0]); break;
                    case 2:
                        c.call(e, d[0], d[1]); break;
                    default:
                        c.apply(e, d) } }, h.eventCallback = function(a, b, c, d) { if ("on" === (a || "").substr(0, 2)) { var e = this.vars; if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b) } return this }, h.delay = function(a) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay }, h.duration = function(a) { return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration) }, h.totalDuration = function(a) { return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration }, h.time = function(a, b) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time }, h.totalTime = function(a, b, c) { if (j || i.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var d = this._totalDuration,
                            e = this._timeline; if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Y(), this.render(a, b, !1), J.length && Y()) } return this }, h.progress = h.totalProgress = function(a, b) { var c = this.duration(); return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio }, h.startTime = function(a) { return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime }, h.endTime = function(a) { return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale }, h.timeScale = function(a) { if (!arguments.length) return this._timeScale; if (a = a || m, this._timeline && this._timeline.smoothChildTiming) { var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a } return this._timeScale = a, this._uncache(!1) }, h.reversed = function(a) { return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, h.paused = function(a) { if (!arguments.length) return this._paused; var b, c, d = this._timeline; return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this }; var F = t("core.SimpleTimeline", function(a) { D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            h = F.prototype = new D, h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(a, b, c, d) { var e, f; if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                    for (f = a._startTime; e && e._startTime > f;) e = e._prev; return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this }, h._remove = function(a, b) { return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, h.render = function(a, b, c) { var d, e = this._first; for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d }, h.rawTime = function() { return j || i.wake(), this._totalTime }; var G = t("TweenLite", function(b, c, d) { if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : G.selector(b) || b; var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite; if (this._overwrite = i = null == i ? U[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : U[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
                        for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = Z(f, this, !1), 1 === i && this._siblings[e].length > 1 && _(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = Z(b, this, !1), 1 === i && this._siblings.length > 1 && _(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay))) }, !0),
                H = function(b) { return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType) },
                I = function(a, b) { var c, d = {}; for (c in a) T[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!Q[c] || Q[c] && Q[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d };
            h = G.prototype = new D, h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.19.1", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function(a, b) { i.lagSmoothing(a, b) }, G.selector = a.$ || a.jQuery || function(b) { var c = a.$ || a.jQuery; return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) }; var J = [],
                K = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                M = function(a) { for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next },
                N = function(a, b, c, d) { var e, f, g, h, i, j, k, l = [],
                        m = 0,
                        n = "",
                        o = 0; for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = { _next: l._firstPT, t: l, p: l.length - 1, s: g, c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0, f: 0, m: o && 4 > o ? Math.round : 0 }), m += k.length; return n += b.substr(m), n && l.push(n), l.setRatio = M, l },
                O = function(a, b, c, d, e, f, g, h, i) { "function" == typeof d && (d = d(i || 0, a)); var j, k = typeof a[b],
                        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                        m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                        n = "string" == typeof d && "=" === d.charAt(1),
                        o = { t: a, p: b, s: m, f: "function" === k, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0 }; return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = N(m, n ? o.s + o.c : d, h || G.defaultStringFilter, o), o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0 },
                P = G._internals = { isArray: p, isSelector: H, lazyTweens: J, blobDif: N },
                Q = G._plugins = {},
                R = P.tweenLookup = {},
                S = 0,
                T = P.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1 },
                U = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
                V = D._rootFramesTimeline = new F,
                W = D._rootTimeline = new F,
                X = 30,
                Y = P.lazyRender = function() { var a, b = J.length; for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                    J.length = 0 };
            W._startTime = i.time, V._startTime = i.frame, W._active = V._active = !0, setTimeout(Y, 1), D._updateRoot = G.render = function() { var a, b, c; if (J.length && Y(), W.render((i.time - W._startTime) * W._timeScale, !1, !1), V.render((i.frame - V._startTime) * V._timeScale, !1, !1), J.length && Y(), i.frame >= X) { X = i.frame + (parseInt(G.autoSleep, 10) || 120); for (c in R) { for (b = R[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete R[c] } if (c = W._first, (!c || c._paused) && G.autoSleep && !V._first && 1 === i._listeners.tick.length) { for (; c && c._paused;) c = c._next;
                        c || i.sleep() } } }, i.addEventListener("tick", D._updateRoot); var Z = function(a, b, c) { var d, e, f = a._gsTweenID; if (R[f || (a._gsTweenID = f = "t" + S++)] || (R[f] = { target: a, tweens: [] }), b && (d = R[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1); return R[f].tweens },
                $ = function(a, b, c, d) { var e, f, g = a.vars.onOverwrite; return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1 },
                _ = function(a, b, c, d, e) { var f, g, h, i; if (1 === d || d >= 4) { for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                            else if (5 === d) break; return g } var j, k = b._startTime + m,
                        l = [],
                        n = 0,
                        o = 0 === b._duration; for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || aa(b, 0, o), 0 === aa(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h))); for (f = n; --f > -1;)
                        if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) { if (2 !== d && !$(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0) }
                    return g },
                aa = function(a, b, c) { for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) { if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline } return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m };
            h._init = function() { var a, b, c, d, e, f, g = this.vars,
                    h = this._overwrittenProps,
                    i = this._duration,
                    j = !!g.immediateRender,
                    k = g.ease; if (g.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {}; for (d in g.startAt) e[d] = g.startAt[d]; if (e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, this._startAt = G.to(this.target, 0, e), j)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return } else if (g.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { 0 !== this._time && (j = !1), c = {}; for (d in g) T[d] && "autoCSS" !== d || (c[d] = g[d]); if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0); if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = g.onUpdate, this._initted = !0 }, h._initProps = function(b, c, d, e, f) { var g, h, i, j, k, l; if (null == b) return !1;
                K[b._gsTweenID] && Y(), this.vars.css || b.style && b !== a && b.nodeType && Q.css && this.vars.autoCSS !== !1 && I(this.vars, b); for (g in this.vars)
                    if (l = this.vars[g], T[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                    else if (Q[g] && (j = new Q[g])._onInitTween(b, this.vars[g], this, f)) { for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                    (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k) } else c[g] = O.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f); return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && _(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i) }, h.render = function(a, b, c) { var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime; if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) { var k = a / i,
                        l = this._easeType,
                        n = this._easePower;
                    (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2 } else this.ratio = this._ease.getRatio(a / i); if (this._time !== h || c) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0)) } }, h._kill = function(a, b, c) { if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b; var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline; if ((p(b) || H(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
                else { if (this._targets) { for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) { h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all"; break } } else { if (b !== this.target) return !1;
                        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all" } if (h) { if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) { for (f in j) h[f] && (l || (l = []), l.push(f)); if ((l || !a) && !$(this, c, b, l)) return !1 } for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) } } return i }, h.invalidate = function() { return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this }, h._enabled = function(a, b) { if (j || i.wake(), a && this._gc) { var c, d = this._targets; if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = Z(d[c], this, !0);
                    else this._siblings = Z(this.target, this, !0) } return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1 }, G.to = function(a, b, c) { return new G(a, b, c) }, G.from = function(a, b, c) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c) }, G.fromTo = function(a, b, c, d) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d) }, G.delayedCall = function(a, b, c, d, e) { return new G(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 }) }, G.set = function(a, b) { return new G(a, 0, b) }, G.getTweensOf = function(a, b) { if (null == a) return [];
                a = "string" != typeof a ? a : G.selector(a) || a; var c, d, e, f; if ((p(a) || H(a)) && "number" != typeof a[0]) { for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b)); for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1) } else
                    for (d = Z(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1); return d }, G.killTweensOf = G.killDelayedCallsTo = function(a, b, c) { "object" == typeof b && (c = b, b = !1); for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a) }; var ba = t("plugins.TweenPlugin", function(a, b) { this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ba.prototype }, !0); if (h = ba.prototype, ba.version = "1.19.0", ba.API = 2, h._firstPT = null, h._addTween = O, h.setRatio = M, h._kill = function(a) { var b, c = this._overwriteProps,
                        d = this._firstPT; if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1); for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next; return !1 }, h._mod = h._roundProps = function(a) { for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next }, G._onPluginEvent = function(a, b) { var c, d, e, f, g, h = b._firstPT; if ("_onInitAllProps" === a) { for (; h;) { for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g }
                        h = b._firstPT = e } for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next; return c }, ba.activate = function(a) { for (var b = a.length; --b > -1;) a[b].API === ba.API && (Q[(new a[b])._propName] = a[b]); return !0 }, s.plugin = function(a) { if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition."; var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                        g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() { ba.call(this, c, d), this._overwriteProps = e || [] }, a.global === !0),
                        h = g.prototype = new ba(c);
                    h.constructor = g, g.API = a.API; for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]); return g.version = a.version, ba.activate([g]), g }, f = a._gsQueue) { for (g = 0; g < f.length; g++) f[g](); for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h) }
            j = !1 } }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) { var s = function(t) { e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate; var i, s, r = this.vars; for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                    h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger) },
                r = 1e-10,
                n = i._internals,
                a = s._internals = {},
                o = n.isSelector,
                h = n.isArray,
                l = n.lazyTweens,
                _ = n.lazyRender,
                u = [],
                f = _gsScope._gsDefine.globals,
                c = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                p = a.pauseCallback = function(t, e, i, s) { var n, a = t._timeline,
                        o = a._totalTime,
                        h = t._startTime,
                        l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                        _ = l ? 0 : r,
                        f = l ? r : 0; if (e || !this._forcingPlayhead) { for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = f, n = n._prev; for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                        e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o) } },
                m = function(t) { var e, i = [],
                        s = t.length; for (e = 0; e !== s; i.push(t[e++])); return i },
                d = s.prototype = new e; return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) { var n = s.repeat && f.TweenMax || i; return e ? this.add(new n(t, e, s), r) : this.set(t, s, r) }, d.from = function(t, e, s, r) { return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r) }, d.fromTo = function(t, e, s, r, n) { var a = r.repeat && f.TweenMax || i; return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n) }, d.staggerTo = function(t, e, r, n, a, h, l, _) { var u, f = new s({ onComplete: h, onCompleteParams: l, callbackScope: _, smoothChildTiming: this.smoothChildTiming }); for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), f.to(t[u], e, c(r), u * n); return this.add(f, a) }, d.staggerFrom = function(t, e, i, s, r, n, a, o) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o) }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h) }, d.call = function(t, e, s, r) { return this.add(i.delayedCall(0, t, e, s), r) }, d.set = function(t, e, s) { return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s) }, s.exportRoot = function(t, e) { t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0); var r, n, a = new s(t),
                    o = a._timeline; for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n; return o.add(a, 0), a }, d.add = function(r, n, a, o) { var l, _, u, f, c, p; if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) { if (r instanceof Array || r && r.push && h(r)) { for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(f = r[u]) && (f = new s({ tweens: f })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o; return this._uncache(!0) } if ("string" == typeof r) return this.addLabel(r, n); if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r) } if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline; return this }, d.remove = function(e) { if (e instanceof t) return this._remove(e, !1); if (e instanceof Array || e && e.push && h(e)) { for (var i = e.length; --i > -1;) this.remove(e[i]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, d._remove = function(t, i) { e.prototype._remove.call(this, t, i); var s = this._last; return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, d.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, d.insert = d.insertMultiple = function(t, e, i, s) { return this.add(t, e || 0, i, s) }, d.appendMultiple = function(t, e, i, s) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s) }, d.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, d.addPause = function(t, e, s, r) { var n = i.delayedCall(0, p, ["{self}", e, s, r], this); return n.data = "isPause", this.add(n, t) }, d.removeLabel = function(t) { return delete this._labels[t], this }, d.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, d._parseTimeOrLabel = function(e, i, s, r) { var n; if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && h(r)))
                    for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]); if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s); if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else { if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration() } return Number(e) + i }, d.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1) }, d.stop = function() { return this.paused(!0) }, d.gotoAndPlay = function(t, e) { return this.play(t, e) }, d.gotoAndStop = function(t, e) { return this.pause(t, e) }, d.render = function(t, e, i) { this._gc && this._enabled(!0, !1); var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    c = this._startTime,
                    p = this._timeScale,
                    m = this._paused; if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else { if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                        t = 0, this._initted || (h = !0) }
                else this._totalTime = this._time = this._rawPrevTime = t; if (this._time !== f && this._first || i || h) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                        for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (c === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o))) } }, d._hasPausedChild = function() { for (var t = this._first; t;) { if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next } return !1 }, d.getChildren = function(t, e, s, r) { r = r || -9999999999; for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next; return n }, d.getTweensOf = function(t, e) { var s, r, n = this._gc,
                    a = [],
                    o = 0; for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]); return n && this._enabled(!1, !0), a }, d.recent = function() { return this._recent }, d._contains = function(t) { for (var e = t.timeline; e;) { if (e === this) return !0;
                    e = e.timeline } return !1 }, d.shiftChildren = function(t, e, i) { i = i || 0; for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next; if (e)
                    for (s in n) n[s] >= i && (n[s] += t); return this._uncache(!0) }, d._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0); return r }, d.clear = function(t) { var e = this.getChildren(!1, !0, !0),
                    i = e.length; for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1); return t !== !1 && (this._labels = {}), this._uncache(!0) }, d.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, d._enabled = function(t, i) { if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next; return e.prototype._enabled.call(this, t, i) }, d.totalTime = function() { this._forcingPlayhead = !0; var e = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, d.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, d.totalDuration = function(t) { if (!arguments.length) { if (this._dirty) { for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1 } return this._totalDuration } return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this }, d.paused = function(e) { if (!e)
                    for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next; return t.prototype.paused.apply(this, arguments) }, d.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, d.rawTime = function() { return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, s }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) { "use strict"; var e = function() { return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e()) }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) { var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
                f = e.com.greensock,
                g = 2 * Math.PI,
                h = Math.PI / 2,
                i = f._class,
                j = function(b, c) { var d = i("easing." + b, function() {}, !0),
                        e = d.prototype = new a; return e.constructor = d, e.getRatio = c, d },
                k = a.register || function() {},
                l = function(a, b, c, d, e) { var f = i("easing." + a, { easeOut: new b, easeIn: new c, easeInOut: new d }, !0); return k(f, a), f },
                m = function(a, b, c) { this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a) },
                n = function(b, c) { var d = i("easing." + b, function(a) { this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                        e = d.prototype = new a; return e.constructor = d, e.getRatio = c, e.config = function(a) { return new d(a) }, d },
                o = l("Back", n("BackOut", function(a) { return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1 }), n("BackIn", function(a) { return a * a * ((this._p1 + 1) * a - this._p1) }), n("BackInOut", function(a) { return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2) })),
                p = i("easing.SlowMo", function(a, b, c) { b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0 }, !0),
                q = p.prototype = new a; return q.constructor = p, q.getRatio = function(a) { var b = a + (.5 - a) * this._p; return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) { return new p(a, b, c) }, b = i("easing.SteppedEase", function(a) { a = a || 1, this._p1 = 1 / a, this._p2 = a + 1 }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) { return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1 }, q.config = b.config = function(a) { return new b(a) }, c = i("easing.RoughEase", function(b) { b = b || {}; for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = { x: c, y: d }; for (j.sort(function(a, b) { return a.x - b.x }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                this._prev = new m(0, 0, 0 !== h.t ? h : h.next) }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) { var b = this._prev; if (a > b.t) { for (; b.next && a >= b.t;) b = b.next;
                    b = b.prev } else
                    for (; b.prev && a <= b.t;) b = b.prev; return this._prev = b, b.v + (a - b.t) / b.gap * b.c }, q.config = function(a) { return new c(a) }, c.ease = new c, l("Bounce", j("BounceOut", function(a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }), j("BounceIn", function(a) { return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375) }), j("BounceInOut", function(a) { var b = .5 > a; return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5 })), l("Circ", j("CircOut", function(a) { return Math.sqrt(1 - (a -= 1) * a) }), j("CircIn", function(a) { return -(Math.sqrt(1 - a * a) - 1) }), j("CircInOut", function(a) { return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) })), d = function(b, c, d) { var e = i("easing." + b, function(a, b) { this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2 }, !0),
                    f = e.prototype = new a; return f.constructor = e, f.getRatio = c, f.config = function(a, b) { return new e(a, b) }, e }, l("Elastic", d("ElasticOut", function(a) { return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1 }, .3), d("ElasticIn", function(a) { return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) }, .3), d("ElasticInOut", function(a) { return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1 }, .45)), l("Expo", j("ExpoOut", function(a) { return 1 - Math.pow(2, -10 * a) }), j("ExpoIn", function(a) { return Math.pow(2, 10 * (a - 1)) - .001 }), j("ExpoInOut", function(a) { return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1))) })), l("Sine", j("SineOut", function(a) { return Math.sin(a * h) }), j("SineIn", function(a) { return -Math.cos(a * h) + 1 }), j("SineInOut", function(a) { return -.5 * (Math.cos(Math.PI * a) - 1) })), i("easing.EaseLookup", { find: function(b) { return a.map[b] } }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function() { "use strict"; var a = function() { return _gsScope.GreenSockGlobals || _gsScope }; "function" == typeof define && define.amd ? define(["TweenLite"], a) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = a()) }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
            var c, d, e, f, g = function() { a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio },
                h = _gsScope._gsDefine.globals,
                i = {},
                j = g.prototype = new a("css");
            j.constructor = g, g.version = "1.19.1", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" };
            var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                w = /(?:\d|\-|\+|=|#|\.)*/g,
                x = /opacity *=*([^)]*)/i,
                y = /opacity:([^;]*)/i,
                z = /alpha\(opacity *=.+?\)/i,
                A = /^(rgb|hsl)/,
                B = /([A-Z])/g,
                C = /-([a-z])/gi,
                D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                E = function(a, b) { return b.toUpperCase() },
                F = /(?:Left|Right|Width)/i,
                G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                I = /,(?=[^\)]*(?:\(|$))/gi,
                J = /[\s,\(]/i,
                K = Math.PI / 180,
                L = 180 / Math.PI,
                M = {},
                N = { style: {} },
                O = _gsScope.document || { createElement: function() { return N } },
                P = function(a, b) { return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a) },
                Q = P("div"),
                R = P("img"),
                S = g._internals = { _specialProps: i },
                T = (_gsScope.navigator || {}).userAgent || "",
                U = function() { var a = T.indexOf("Android"),
                        b = P("a"); return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1 }(),
                V = function(a) { return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                W = function(a) { _gsScope.console && console.log(a) },
                X = "",
                Y = "",
                Z = function(a, b) { b = b || Q; var c, d, e = b.style; if (void 0 !== e[a]) return a; for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];); return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null },
                $ = O.defaultView ? O.defaultView.getComputedStyle : function() {},
                _ = g.getStyle = function(a, b, c, d, e) { var f; return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a) },
                aa = S.convertToPixels = function(a, c, d, e, f) { if ("px" === e || !e) return d; if ("auto" === e || !d) return 0; var h, i, j, k = F.test(c),
                        l = a,
                        m = Q.style,
                        n = 0 > d,
                        o = 1 === d; if (n && (d = -d), o && (d *= 100), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                    else { if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                        else { if (l = a.parentNode || O.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                            m[k ? "width" : "height"] = d + e }
                        l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0)) } return o && (h /= 100), n ? -h : h },
                ba = S.calculateOffset = function(a, b, c) { if ("absolute" !== _(a, "position", c)) return 0; var d = "left" === b ? "Left" : "Top",
                        e = _(a, "margin" + d, c); return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0) },
                ca = function(a, b) { var c, d, e, f = {}; if (b = b || $(a, null))
                        if (c = b.length)
                            for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                        else
                            for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                    else if (b = a.currentStyle || a.style)
                        for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]); return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f },
                da = function(a, b, c, d, e) { var f, g, h, i = {},
                        j = a.style; for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h))); if (d)
                        for (g in d) "className" !== g && (i[g] = d[g]); return { difs: i, firstMPT: h } },
                ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ga = function(a, b, c) { if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0; if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0; var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                        e = ea[b],
                        f = e.length; for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0; return d },
                ha = function(a, b) { if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                    (null == a || "" === a) && (a = "0 0"); var c, d = a.split(" "),
                        e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                        f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1]; if (d.length > 3 && !b) { for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c])); return a.join(",") } return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a },
                ia = function(a, b) { return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0 },
                ja = function(a, b) { return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0 },
                ka = function(a, b, c, d) { var e, f, g, h, i, j = 1e-6; return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h },
                la = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                ma = function(a, b, c) { return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0 },
                na = g.parseColor = function(a, b) { var c, d, e, f, g, h, i, j, k, l, m; if (a)
                        if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                        else { if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
                            else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                            else if ("hsl" === a.substr(0, 3))
                                if (c = m = a.match(s), b) { if (-1 !== a.indexOf("=")) return a.match(t) } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
                            else c = a.match(s) || la.transparent;
                            c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3])) }
                    else c = la.black; return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c },
                oa = function(a, b) { var c, d, e, f = a.match(pa) || [],
                        g = 0,
                        h = f.length ? "" : a; for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")"; return h + a.substr(g) },
                pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (j in la) pa += "|" + j + "\\b";
            pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function(a) { var b, c = a[0] + a[1];
                pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0 }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
            var qa = function(a, b, c, d) { if (null == a) return function(a) { return a }; var e, f = b ? (a.match(pa) || [""])[0] : "",
                        g = a.split(f).join("").match(u) || [],
                        h = a.substr(0, a.indexOf(g[0])),
                        i = ")" === a.charAt(a.length - 1) ? ")" : "",
                        j = -1 !== a.indexOf(" ") ? " " : ",",
                        k = g.length,
                        l = k > 0 ? g[0].replace(s, "") : ""; return k ? e = b ? function(a) { var b, m, n, o; if ("number" == typeof a) a += l;
                        else if (d && I.test(a)) { for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]); return o.join(",") } if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                            for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n]; return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "") } : function(a) { var b, f, m; if ("number" == typeof a) a += l;
                        else if (d && I.test(a)) { for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]); return f.join(",") } if (b = a.match(u) || [], m = b.length, k > m--)
                            for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m]; return h + b.join(j) + i } : function(a) { return a } },
                ra = function(a) { return a = a.split(","),
                        function(b, c, d, e, f, g, h) { var i, j = (c + "").split(" "); for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0]; return e.parse(b, h, f, g) } },
                sa = (S._setPluginRatio = function(a) { this.plugin.setRatio(a); for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next; if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
                        for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) { if (c = i.t, c.type) { if (1 === c.type) { for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                    c[f] = e } } else c[f] = c.s + c.xs0;
                            i = i._next } }, function(a, b, c, d, e) { this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d) }),
                ta = (S._parseToProxy = function(a, b, c, d, e, f) { var g, h, i, j, k, l = d,
                        m = {},
                        n = {},
                        o = c._transform,
                        p = M; for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) { if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                            for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                        d = d._next } return { proxy: m, end: n, firstMPT: j, pt: k } }, S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) { this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this) }),
                ua = function(a, b, c, d, e, f) { var g = new ta(a, b, c, d - c, e, -1, f); return g.b = c, g.e = g.xs0 = d, g },
                va = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) { c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]); var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                        E = d.split(", ").join(",").split(" "),
                        F = D.length,
                        G = k !== !1; for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" "), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
                        if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
                        else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(y ? "hsla(" : "hsl(", p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(y ? "rgba(" : "rgb(", p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
                    else if (v = p.match(s)) { if (w = u.match(t), !w || w.length !== v.length) return h; for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
                        h["xs" + h.l] += p.substr(o) } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u; if (-1 !== d.indexOf("=") && h.data) { for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                        h.e = B + h["xs" + m] } return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h },
                wa = 9;
            for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
            j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) { var g = this,
                    h = g.l; return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = { s: b + c }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g) };
            var xa = function(a, b) { b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0 },
                ya = S._registerComplexSpecialProp = function(a, b, c) { "object" != typeof b && (b = { parser: c }); var d, e, f = a.split(","),
                        g = b.defaultValue; for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b) },
                za = S._registerPluginProp = function(a) { if (!i[a]) { var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                        ya(a, { parser: function(a, c, d, e, f, g, j) { var k = h.com.greensock.plugins[b]; return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f) } }) } };
            j = xa.prototype, j.parseComplex = function(a, b, c, d, e, f) { var g, h, i, j, k, l, m = this.keyword; if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) { for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                    b = h.join(", "), c = i.join(", ") } return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f) }, j.parse = function(a, b, c, d, f, g, h) { return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g) }, g.registerSpecialProp = function(a, b, c) { ya(a, { parser: function(a, d, e, f, g, h, i) { var j = new ta(a, e, 0, 0, g, 2, e, !1, c); return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j }, priority: c }) }, g.useSVGTransformAttr = !0;
            var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ca = Z("transform"),
                Da = X + "transform",
                Ea = Z("transformOrigin"),
                Fa = null !== Z("perspective"),
                Ga = S.Transform = function() { this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1 },
                Ha = _gsScope.SVGElement,
                Ia = function(a, b, c) { var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
                        f = /([a-z])([A-Z])/g; for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]); return b.appendChild(e), e },
                Ja = O.documentElement || {},
                Ka = function() { var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome; return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, { width: 100, height: 50, x: 100 }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d }(),
                La = function(a, b, c, d, e, f) { var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                        w = Qa(a, !0);
                    v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = { x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0, y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" ")) },
                Ma = function(a) { var b, c = P("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        d = this.parentNode,
                        e = this.nextSibling,
                        f = this.style.cssText; if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try { b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox()); return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b },
                Na = function(a) { try { return a.getBBox() } catch (b) { return Ma.call(a, !0) } },
                Oa = function(a) { return !(!(Ha && a.getCTM && Na(a)) || a.parentNode && !a.ownerSVGElement) },
                Pa = [1, 0, 0, 1, 0, 0],
                Qa = function(a, b) { var c, d, e, f, g, h, i = a._gsTransform || new Ga,
                        j = 1e5,
                        k = a.style; if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, c && Ca && ((h = "none" === $(a).display) || !a.parentNode) && (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Pa; for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f; return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e },
                Ra = S.getTransform = function(a, c, d, e) { if (a._gsTransform && d && !e) return a._gsTransform; var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
                        n = m.scaleX < 0,
                        o = 2e-5,
                        p = 1e5,
                        q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                        r = parseFloat(g.defaultTransformPerspective) || 0; if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) { if (16 === f.length) { var s, t, u, v, w, x = f[0],
                                y = f[1],
                                z = f[2],
                                A = f[3],
                                B = f[4],
                                C = f[5],
                                D = f[6],
                                E = f[7],
                                F = f[8],
                                G = f[9],
                                H = f[10],
                                I = f[12],
                                J = f[13],
                                K = f[14],
                                M = f[11],
                                N = Math.atan2(D, H);
                            m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), x = x * v + B * w, t = y * v + C * w, C = y * -w + C * v, D = z * -w + D * v, y = t), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), m.scaleX = (Math.sqrt(x * x + y * y) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + G * G) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(D * D + H * H) * p + .5 | 0) / p, m.rotationX || m.rotationY ? m.skewX = 0 : (m.skewX = B || C ? Math.atan2(B, C) * L + m.rotation : m.skewX || 0, Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180))), m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)) } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) { var O = f.length >= 6,
                                P = O ? f[0] : 1,
                                Q = f[1] || 0,
                                R = f[2] || 0,
                                S = O ? f[3] : 1;
                            m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, Math.abs(l) > 90 && Math.abs(l) < 270 && (n ? (i *= -1, l += 0 >= k ? 180 : -180, k += 0 >= k ? 180 : -180) : (j *= -1, l += 0 >= l ? 180 : -180)), m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)) }
                        m.zOrigin = q; for (h in m) m[h] < o && m[h] > -o && (m[h] = 0) } return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function() { Va(a.style, Ca) }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function() { a.removeAttribute("transform") }))), m },
                Sa = function(a) { var b, c, d = this.data,
                        e = -d.rotation * K,
                        f = e + d.skewX * K,
                        g = 1e5,
                        h = (Math.cos(e) * d.scaleX * g | 0) / g,
                        i = (Math.sin(e) * d.scaleX * g | 0) / g,
                        j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                        k = (Math.cos(f) * d.scaleY * g | 0) / g,
                        l = this.t.style,
                        m = this.t.currentStyle; if (m) { c = i, i = -j, j = -c, b = m.filter, l.filter = ""; var n, o, q = this.t.offsetWidth,
                            r = this.t.offsetHeight,
                            s = "absolute" !== m.position,
                            t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                            u = d.x + q * d.xPercent / 100,
                            v = d.y + r * d.yPercent / 100; if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) { var y, z, A, B = 8 > p ? 1 : -1; for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px" } } },
                Ta = S.set3DTransformRatio = S.setTransformRatio = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                        A = this.t.style,
                        B = z.rotation,
                        C = z.rotationX,
                        D = z.rotationY,
                        E = z.scaleX,
                        F = z.scaleY,
                        G = z.scaleZ,
                        H = z.x,
                        I = z.y,
                        J = z.z,
                        L = z.svg,
                        M = z.perspective,
                        N = z.force3D,
                        O = z.skewY,
                        P = z.skewX; if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")"); if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                    else { if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                        c = g = 1, d = f = 0 }
                    k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u };
            j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(a, b, c, d, f, h, i) { if (d._lastParsedTransform === i) return f;
                    d._lastParsedTransform = i; var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0; "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a)); var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
                        x = a.style,
                        y = 1e-6,
                        z = Ba.length,
                        A = i,
                        B = {},
                        C = "transformOrigin",
                        D = Ra(a, e, !0, A.parseTransform),
                        E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform); if (d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                    else if ("object" == typeof A) { if (l = { scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX), scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY), scaleZ: ja(A.scaleZ, D.scaleZ), x: ja(A.x, D.x), y: ja(A.y, D.y), z: ja(A.z, D.z), xPercent: ja(A.xPercent, D.xPercent), yPercent: ja(A.yPercent, D.yPercent), perspective: ja(A.transformPerspective, D.perspective) }, p = A.directionalRotation, null != p)
                            if ("object" == typeof p)
                                for (m in p) A[m] = p[m];
                            else A.rotation = p;
                            "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY) } for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), D.skewType = A.skewType || D.skewType || g.defaultSkewType, n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n)); return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f }, prefix: !0 }), ya("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ya("borderRadius", { defaultValue: "0px", parser: function(a, b, c, f, g, h) { b = this.format(b); var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        z = a.style; for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g); return g }, prefix: !0, formatter: qa("0px 0px 0px 0px", !1, !0) }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(a, b, c, d, f, g) { return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f) }, prefix: !0, formatter: qa("0px 0px", !1, !0) }), ya("backgroundPosition", { defaultValue: "0 0", parser: function(a, b, c, d, f, g) { var h, i, j, k, l, m, n = "background-position",
                        o = e || $(a, null),
                        q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                        r = this.format(b); if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) { for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                        q = h.join(" ") } return this.parseComplex(a.style, q, r, f, g) }, formatter: ha }), ya("backgroundSize", { defaultValue: "0 0", formatter: function(a) { return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a) } }), ya("perspective", { defaultValue: "0px", prefix: !0 }), ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ya("transformStyle", { prefix: !0 }), ya("backfaceVisibility", { prefix: !0 }), ya("userSelect", { prefix: !0 }), ya("margin", { parser: ra("marginTop,marginRight,marginBottom,marginLeft") }), ya("padding", { parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ya("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(a, b, c, d, f, g) {
                    var h, i, j;
                    return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
                        b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                }
            }), ya("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ya("autoRound,strictUnits", { parser: function(a, b, c, d, e) { return e } }), ya("border", { defaultValue: "0px solid #000", parser: function(a, b, c, d, f, g) { var h = _(a, "borderTopWidth", e, !1, "0px"),
                        i = this.format(b).split(" "),
                        j = i[0].replace(w, ""); return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g) }, color: !0, formatter: function(a) { var b = a.split(" "); return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0] } }), ya("borderWidth", { parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ya("float,cssFloat,styleFloat", { parser: function(a, b, c, d, e, f) { var g = a.style,
                        h = "cssFloat" in g ? "cssFloat" : "styleFloat"; return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b) } });
            var Ua = function(a) { var b, c = this.t,
                    d = c.filter || _(this.data, "filter") || "",
                    e = this.s + this.c * a | 0;
                100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e)) };
            ya("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(a, b, c, d, f, g) { var h = parseFloat(_(a, "opacity", e, !1, "1")),
                        i = a.style,
                        j = "autoAlpha" === c; return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f } });
            var Va = function(a, b) { b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b)) },
                Wa = function(a) { if (this.t._gsClassPT = this, 1 === a || 0 === a) { this.t.setAttribute("class", 0 === a ? this.b : this.e); for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
            ya("className", { parser: function(a, b, d, f, g, h, i) { var j, k, l, m, n, o = a.getAttribute("class") || "",
                        p = a.style.cssText; if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) { for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                        l.setRatio(1) } return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h) } });
            var Xa = function(a) { if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var b, c, d, e, f, g = this.t.style,
                        h = i.transform.parse; if ("all" === this.e) g.cssText = "", e = !0;
                    else
                        for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                    e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform)) } };
            for (ya("clearProps", { parser: function(a, b, d, e, f) { return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f } }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
            j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) { if (!a.nodeType) return !1;
                this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps; var n, p, s, t, u, v, w, x, z, A = a.style; if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) { for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                    x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop() } if (c) { for (; p;) { for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                        (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v }
                    this._firstPT = t } return !0 }, j.parse = function(a, b, c, f) { var g, h, j, l, m, n, o, p, s, t, u = a.style; for (g in b) n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))), f && c && !c.plugin && (c.plugin = f); return c }, j.setRatio = function(a) { var b, c, d, e = this._firstPT,
                    f = 1e-6; if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; e;) { if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                                if (1 === e.type)
                                    if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                    else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                            else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                            else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                            else { for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                e.t[e.p] = c } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                            else e.t[e.p] = b + e.xs0;
                            e = e._next } else
                            for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                    else
                        for (; e;) { if (2 !== e.type)
                                if (e.r && -1 !== e.type)
                                    if (b = Math.round(e.s + e.c), e.type) { if (1 === e.type) { for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                            e.t[e.p] = c } } else e.t[e.p] = b + e.xs0;
                            else e.t[e.p] = e.e;
                            else e.setRatio(a);
                            e = e._next } }, j._enableTransforms = function(a) { this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3 };
            var Ya = function(a) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
            j._addLazySet = function(a, b, c) { var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
                d.e = c, d.setRatio = Ya, d.data = this }, j._linkCSSP = function(a, b, c, d) { return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a }, j._mod = function(a) { for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next }, j._kill = function(b) { var c, d, e, f = b; if (b.autoAlpha || b.alpha) { f = {}; for (d in b) f[d] = b[d];
                    f.opacity = 1, f.autoAlpha && (f.visibility = 1) } for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next; return a.prototype._kill.call(this, f) };
            var Za = function(a, b, c) { var d, e, f, g; if (a.slice)
                    for (e = a.length; --e > -1;) Za(a[e], b, c);
                else
                    for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c) };
            return g.cascadeTo = function(a, c, d) { var e, f, g, h, i = b.to(a, c, d),
                    j = [i],
                    k = [],
                    l = [],
                    m = [],
                    n = b._internals.reservedProps; for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                    if (f = da(m[e], k[e], l[e]), f.firstMPT) { f = f.difs; for (g in d) n[g] && (f[g] = d[g]);
                        h = {}; for (g in f) h[g] = k[e][g];
                        j.push(b.fromTo(m[e], c, h, f)) }
                return j }, a.activate([g]), g
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) { "use strict"; var b = function() { return (_gsScope.GreenSockGlobals || _gsScope)[a] }; "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b()) }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(a) { "use strict"; var b = a.GreenSockGlobals || a,
        c = function(a) { var c, d = a.split("."),
                e = b; for (c = 0; c < d.length; c++) e[d[c]] = e = e[d[c]] || {}; return e },
        d = c("com.greensock.utils"),
        e = function(a) { var b = a.nodeType,
                c = ""; if (1 === b || 9 === b || 11 === b) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === b || 4 === b) return a.nodeValue; return c },
        f = document,
        g = f.defaultView ? f.defaultView.getComputedStyle : function() {},
        h = /([A-Z])/g,
        i = function(a, b, c, d) { var e; return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0 },
        j = function(a) { return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1 },
        k = function(a) { var b, c, d, e = [],
                f = a.length; for (b = 0; f > b; b++)
                if (c = a[b], j(c))
                    for (d = c.length, d = 0; d < c.length; d++) e.push(c[d]);
                else e.push(c);
            return e },
        l = /(?:\r|\n|\t\t)/g,
        m = /(?:\s\s+)/g,
        n = 55296,
        o = 56319,
        p = 56320,
        q = 127462,
        r = 127487,
        s = 127995,
        t = 127999,
        u = function(a) { return (a.charCodeAt(0) - n << 10) + (a.charCodeAt(1) - p) + 65536 },
        v = f.all && !f.addEventListener,
        w = " style='position:relative;display:inline-block;" + (v ? "*display:inline;*zoom:1;'" : "'"),
        x = function(a, b) { a = a || ""; var c = -1 !== a.indexOf("++"),
                d = 1; return c && (a = a.split("++").join("")),
                function() { return "<" + b + w + (a ? " class='" + a + (c ? d++ : "") + "'>" : ">") } },
        y = d.SplitText = b.SplitText = function(a, b) { if ("string" == typeof a && (a = y.selector(a)), !a) throw "cannot split a null element.";
            this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b) },
        z = function(a, b, c) { var d = a.nodeType; if (1 === d || 9 === d || 11 === d)
                for (a = a.firstChild; a; a = a.nextSibling) z(a, b, c);
            else(3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c)) },
        A = function(a, b) { for (var c = b.length; --c > -1;) a.push(b[c]) },
        B = function(a) { var b, c = [],
                d = a.length; for (b = 0; b !== d; c.push(a[b++])); return c },
        C = function(a, b, c) { for (var d; a && a !== b;) { if (d = a._next || a.nextSibling) return d.textContent.charAt(0) === c;
                a = a.parentNode || a._parent } return !1 },
        D = function(a) { var b, c, d = B(a.childNodes),
                e = d.length; for (b = 0; e > b; b++) c = d[b], c._isSplit ? D(c) : (b && 3 === c.previousSibling.nodeType ? c.previousSibling.nodeValue += 3 === c.nodeType ? c.nodeValue : c.firstChild.nodeValue : 3 !== c.nodeType && a.insertBefore(c.firstChild, c), a.removeChild(c)) },
        E = function(a, b, c, d, e, h, j) { var k, l, m, n, o, p, q, r, s, t, u, v, w = g(a),
                x = i(a, "paddingLeft", w),
                y = -999,
                B = i(a, "borderBottomWidth", w) + i(a, "borderTopWidth", w),
                E = i(a, "borderLeftWidth", w) + i(a, "borderRightWidth", w),
                F = i(a, "paddingTop", w) + i(a, "paddingBottom", w),
                G = i(a, "paddingLeft", w) + i(a, "paddingRight", w),
                H = .2 * i(a, "fontSize"),
                I = i(a, "textAlign", w, !0),
                J = [],
                K = [],
                L = [],
                M = b.wordDelimiter || " ",
                N = b.span ? "span" : "div",
                O = b.type || b.split || "chars,words,lines",
                P = e && -1 !== O.indexOf("lines") ? [] : null,
                Q = -1 !== O.indexOf("words"),
                R = -1 !== O.indexOf("chars"),
                S = "absolute" === b.position || b.absolute === !0,
                T = b.linesClass,
                U = -1 !== (T || "").indexOf("++"),
                V = []; for (P && 1 === a.children.length && a.children[0]._isSplit && (a = a.children[0]), U && (T = T.split("++").join("")), l = a.getElementsByTagName("*"), m = l.length, o = [], k = 0; m > k; k++) o[k] = l[k]; if (P || S)
                for (k = 0; m > k; k++) n = o[k], p = n.parentNode === a, (p || S || R && !Q) && (v = n.offsetTop, P && p && Math.abs(v - y) > H && "BR" !== n.nodeName && (q = [], P.push(q), y = v), S && (n._x = n.offsetLeft, n._y = v, n._w = n.offsetWidth, n._h = n.offsetHeight), P && ((n._isSplit && p || !R && p || Q && p || !Q && n.parentNode.parentNode === a && !n.parentNode._isSplit) && (q.push(n), n._x -= x, C(n, a, M) && (n._wordEnd = !0)), "BR" === n.nodeName && n.nextSibling && "BR" === n.nextSibling.nodeName && P.push([]))); for (k = 0; m > k; k++) n = o[k], p = n.parentNode === a, "BR" !== n.nodeName ? (S && (s = n.style, Q || p || (n._x += n.parentNode._x, n._y += n.parentNode._y), s.left = n._x + "px", s.top = n._y + "px", s.position = "absolute", s.display = "block", s.width = n._w + 1 + "px", s.height = n._h + "px"), !Q && R ? n._isSplit ? (n._next = n.nextSibling, n.parentNode.appendChild(n)) : n.parentNode._isSplit ? (n._parent = n.parentNode, !n.previousSibling && n.firstChild && (n.firstChild._isFirst = !0), n.nextSibling && " " === n.nextSibling.textContent && !n.nextSibling.nextSibling && V.push(n.nextSibling), n._next = n.nextSibling && n.nextSibling._isFirst ? null : n.nextSibling, n.parentNode.removeChild(n), o.splice(k--, 1), m--) : p || (v = !n.nextSibling && C(n.parentNode, a, M), n.parentNode._parent && n.parentNode._parent.appendChild(n), v && n.parentNode.appendChild(f.createTextNode(" ")), b.span && (n.style.display = "inline"), J.push(n)) : n.parentNode._isSplit && !n._isSplit && "" !== n.innerHTML ? K.push(n) : R && !n._isSplit && (b.span && (n.style.display = "inline"), J.push(n))) : P || S ? (n.parentNode && n.parentNode.removeChild(n), o.splice(k--, 1), m--) : Q || a.appendChild(n); for (k = V.length; --k > -1;) V[k].parentNode.removeChild(V[k]); if (P) { for (S && (t = f.createElement(N), a.appendChild(t), u = t.offsetWidth + "px", v = t.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(t)), s = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild); for (r = " " === M && (!S || !Q && !R), k = 0; k < P.length; k++) { for (q = P[k], t = f.createElement(N), t.style.cssText = "display:block;text-align:" + I + ";position:" + (S ? "absolute;" : "relative;"), T && (t.className = T + (U ? k + 1 : "")), L.push(t), m = q.length, l = 0; m > l; l++) "BR" !== q[l].nodeName && (n = q[l], t.appendChild(n), r && n._wordEnd && t.appendChild(f.createTextNode(" ")), S && (0 === l && (t.style.top = n._y + "px", t.style.left = x + v + "px"), n.style.top = "0px", v && (n.style.left = n._x - v + "px")));
                    0 === m ? t.innerHTML = "&nbsp;" : Q || R || (D(t), z(t, String.fromCharCode(160), " ")), S && (t.style.width = u, t.style.height = n._h + "px"), a.appendChild(t) }
                a.style.cssText = s }
            S && (j > a.clientHeight && (a.style.height = j - F + "px", a.clientHeight < j && (a.style.height = j + B + "px")), h > a.clientWidth && (a.style.width = h - G + "px", a.clientWidth < h && (a.style.width = h + E + "px"))), A(c, J), A(d, K), A(e, L) },
        F = function(a, b, c, d) { var g, h, i, j, k, p, v, w, x, y = b.span ? "span" : "div",
                A = b.type || b.split || "chars,words,lines",
                B = (-1 !== A.indexOf("words"), -1 !== A.indexOf("chars")),
                C = "absolute" === b.position || b.absolute === !0,
                D = b.wordDelimiter || " ",
                E = " " !== D ? "" : C ? "&#173; " : " ",
                F = b.span ? "</span>" : "</div>",
                G = !0,
                H = f.createElement("div"),
                I = a.parentNode; for (I.insertBefore(H, a), H.textContent = a.nodeValue, I.removeChild(a), a = H, g = e(a), v = -1 !== g.indexOf("<"), b.reduceWhiteSpace !== !1 && (g = g.replace(m, " ").replace(l, "")), v && (g = g.split("<").join("{{LT}}")), k = g.length, h = (" " === g.charAt(0) ? E : "") + c(), i = 0; k > i; i++)
                if (p = g.charAt(i), p === D && g.charAt(i - 1) !== D && i) { for (h += G ? F : "", G = !1; g.charAt(i + 1) === D;) h += E, i++;
                    i === k - 1 ? h += E : ")" !== g.charAt(i + 1) && (h += E + c(), G = !0) } else "{" === p && "{{LT}}" === g.substr(i, 6) ? (h += B ? d() + "{{LT}}</" + y + ">" : "{{LT}}", i += 5) : p.charCodeAt(0) >= n && p.charCodeAt(0) <= o || g.charCodeAt(i + 1) >= 65024 && g.charCodeAt(i + 1) <= 65039 ? (w = u(g.substr(i, 2)), x = u(g.substr(i + 2, 2)), j = w >= q && r >= w && x >= q && r >= x || x >= s && t >= x ? 4 : 2, h += B && " " !== p ? d() + g.substr(i, j) + "</" + y + ">" : g.substr(i, j), i += j - 1) : h += B && " " !== p ? d() + p + "</" + y + ">" : p;
            a.outerHTML = h + (G ? F : ""), v && z(I, "{{LT}}", "<") },
        G = function(a, b, c, d) { var e, f, g = B(a.childNodes),
                h = g.length,
                j = "absolute" === b.position || b.absolute === !0; if (3 !== a.nodeType || h > 1) { for (b.absolute = !1, e = 0; h > e; e++) f = g[e], (3 !== f.nodeType || /\S+/.test(f.nodeValue)) && (j && 3 !== f.nodeType && "inline" === i(f, "display", null, !0) && (f.style.display = "inline-block", f.style.position = "relative"), f._isSplit = !0, G(f, b, c, d)); return b.absolute = j, void(a._isSplit = !0) }
            F(a, b, c, d) },
        H = y.prototype;
    H.split = function(a) { this.isSplit && this.revert(), this.vars = a = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0; for (var b, c, d, e = this.elements.length, f = a.span ? "span" : "div", g = ("absolute" === a.position || a.absolute === !0, x(a.wordsClass, f)), h = x(a.charsClass, f); --e > -1;) d = this.elements[e], this._originals[e] = d.innerHTML, b = d.clientHeight, c = d.clientWidth, G(d, a, g, h), E(d, a, this.chars, this.words, this.lines, c, b); return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, H.revert = function() { if (!this._originals) throw "revert() call wasn't scoped properly."; for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a]; return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, y.selector = a.$ || a.jQuery || function(b) { var c = a.$ || a.jQuery; return c ? (y.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) }, y.version = "0.5.6" }(_gsScope),
function(a) { "use strict"; var b = function() { return (_gsScope.GreenSockGlobals || _gsScope)[a] }; "function" == typeof define && define.amd ? define([], b) : "undefined" != typeof module && module.exports && (module.exports = b()) }("SplitText");
try {
    window.GreenSockGlobals = null;
    window._gsQueue = null;
    window._gsDefine = null;
    delete(window.GreenSockGlobals);
    delete(window._gsQueue);
    delete(window._gsDefine);
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs;
    window._gsQueue = oldgs_queue;
} catch (e) {}
if (window.tplogs == true)
    try {
        console.groupEnd();
    } catch (e) {}
    (function(e, t) {
        e.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"] };
        e.expr[":"].uncached = function(t) { var n = document.createElement("img");
            n.src = t.src; return e(t).is('img[src!=""]') && !n.complete };
        e.fn.waitForImages = function(t, n, r) { if (e.isPlainObject(arguments[0])) { n = t.each;
                r = t.waitForAll;
                t = t.finished }
            t = t || e.noop;
            n = n || e.noop;
            r = !!r; if (!e.isFunction(t) || !e.isFunction(n)) { throw new TypeError("An invalid callback was supplied.") } return this.each(function() { var i = e(this),
                    s = []; if (r) { var o = e.waitForImages.hasImageProperties || [],
                        u = /url\((['"]?)(.*?)\1\)/g;
                    i.find("*").each(function() { var t = e(this); if (t.is("img:uncached")) { s.push({ src: t.attr("src"), element: t[0] }) }
                        e.each(o, function(e, n) { var r = t.css(n); if (!r) { return true } var i; while (i = u.exec(r)) { s.push({ src: i[2], element: t[0] }) } }) }) } else { i.find("img:uncached").each(function() { s.push({ src: this.src, element: this }) }) } var f = s.length,
                    l = 0; if (f == 0) { t.call(i[0]) }
                e.each(s, function(r, s) { var o = new Image;
                    e(o).bind("load error", function(e) { l++;
                        n.call(s.element, l, f, e.type == "load"); if (l == f) { t.call(i[0]); return false } });
                    o.src = s.src }) }) };
    })(jQuery);
! function(jQuery, undefined) { "use strict"; var version = { core: "5.4.8", "revolution.extensions.actions.min.js": "2.1.0", "revolution.extensions.carousel.min.js": "1.2.1", "revolution.extensions.kenburn.min.js": "1.3.1", "revolution.extensions.layeranimation.min.js": "3.6.5", "revolution.extensions.navigation.min.js": "1.3.5", "revolution.extensions.parallax.min.js": "2.2.3", "revolution.extensions.slideanims.min.js": "1.8", "revolution.extensions.video.min.js": "2.2.2" };
    jQuery.fn.extend({ revolution: function(i) { var e = { delay: 9e3, responsiveLevels: 4064, visibilityLevels: [2048, 1024, 778, 480], gridwidth: 960, gridheight: 500, minHeight: 0, autoHeight: "off", sliderType: "standard", sliderLayout: "auto", fullScreenAutoWidth: "off", fullScreenAlignForce: "off", fullScreenOffsetContainer: "", fullScreenOffset: "0", hideCaptionAtLimit: 0, hideAllCaptionAtLimit: 0, hideSliderAtLimit: 0, disableProgressBar: "off", stopAtSlide: -1, stopAfterLoops: -1, shadow: 0, dottedOverlay: "none", startDelay: 0, lazyType: "smart", spinner: "spinner0", shuffle: "off", viewPort: { enable: !1, outof: "wait", visible_area: "60%", presize: !1 }, fallbacks: { isJoomla: !1, panZoomDisableOnMobile: "off", simplifyAll: "on", nextSlideOnWindowFocus: "off", disableFocusListener: !0, ignoreHeightChanges: "off", ignoreHeightChangesSize: 0, allowHTML5AutoPlayOnAndroid: !0 }, parallax: { type: "off", levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85], origo: "enterpoint", speed: 400, bgparallax: "off", opacity: "on", disable_onmobile: "off", ddd_shadow: "on", ddd_bgfreeze: "off", ddd_overflow: "visible", ddd_layer_overflow: "visible", ddd_z_correction: 65, ddd_path: "mouse" }, scrolleffect: { fade: "off", blur: "off", scale: "off", grayscale: "off", maxblur: 10, on_layers: "off", on_slidebg: "off", on_static_layers: "off", on_parallax_layers: "off", on_parallax_static_layers: "off", direction: "both", multiplicator: 1.35, multiplicator_layers: .5, tilt: 30, disable_on_mobile: "on" }, carousel: { easing: punchgs.Power3.easeInOut, speed: 800, showLayersAllTime: "off", horizontal_align: "center", vertical_align: "center", infinity: "on", space: 0, maxVisibleItems: 3, stretch: "off", fadeout: "on", maxRotation: 0, minScale: 0, vary_fade: "off", vary_rotation: "on", vary_scale: "off", border_radius: "0px", padding_top: 0, padding_bottom: 0 }, navigation: { keyboardNavigation: "off", keyboard_direction: "horizontal", mouseScrollNavigation: "off", onHoverStop: "on", touch: { touchenabled: "off", touchOnDesktop: "off", swipe_treshold: 75, swipe_min_touches: 1, drag_block_vertical: !1, swipe_direction: "horizontal" }, arrows: { style: "", enable: !1, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, tmp: "", rtl: !1, left: { h_align: "left", v_align: "center", h_offset: 20, v_offset: 0, container: "slider" }, right: { h_align: "right", v_align: "center", h_offset: 20, v_offset: 0, container: "slider" } }, bullets: { container: "slider", rtl: !1, style: "", enable: !1, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", h_align: "left", v_align: "center", space: 0, h_offset: 20, v_offset: 0, tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>' }, thumbnails: { container: "slider", rtl: !1, style: "", enable: !1, width: 100, height: 50, min_width: 100, wrapper_padding: 2, wrapper_color: "#f5f5f5", wrapper_opacity: 1, tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, position: "inner", space: 2, h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 }, tabs: { container: "slider", rtl: !1, style: "", enable: !1, width: 100, min_width: 100, height: 50, wrapper_padding: 10, wrapper_color: "#f5f5f5", wrapper_opacity: 1, tmp: '<span class="tp-tab-image"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, space: 0, position: "inner", h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 } }, extensions: "extensions/", extensions_suffix: ".min.js", debugMode: !1 }; return i = jQuery.extend(!0, {}, e, i), this.each(function() { var e = jQuery(this);
                i.minHeight = i.minHeight != undefined ? parseInt(i.minHeight, 0) : i.minHeight, i.scrolleffect.on = "on" === i.scrolleffect.fade || "on" === i.scrolleffect.scale || "on" === i.scrolleffect.blur || "on" === i.scrolleffect.grayscale, "hero" == i.sliderType && e.find(">ul>li").each(function(e) { 0 < e && jQuery(this).remove() }), i.jsFileLocation = i.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), i.jsFileLocation = i.jsFileLocation + i.extensions, i.scriptsneeded = getNeededScripts(i, e), i.curWinRange = 0, i.rtl = !0, i.navigation != undefined && i.navigation.touch != undefined && (i.navigation.touch.swipe_min_touches = 5 < i.navigation.touch.swipe_min_touches ? 1 : i.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function() { if (i.modulesfailing) return e.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + i.errorm + "</div>").show(), !1;
                    _R.migration != undefined && (i = _R.migration(e, i)), punchgs.force3D = !0, "on" !== i.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(e, i), initSlider(e, i) }), e[0].opt = i, waitForScripts(e, i) }) }, getRSVersion: function(e) { if (!0 === e) return jQuery("body").data("tp_rs_version"); var i = jQuery("body").data("tp_rs_version"),
                t = ""; for (var a in t += "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n", t += "---------------------------------------------------------\n", i) t += i[a].alias + ": " + i[a].ver + "\n"; return t += "---------------------------------------------------------\n" }, revremoveslide: function(r) { return this.each(function() { var e = jQuery(this),
                    i = e[0].opt; if (!(r < 0 || r > i.slideamount) && e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && i && 0 < i.li.length && (0 < r || r <= i.li.length)) { var t = jQuery(i.li[r]),
                        a = t.data("index"),
                        n = !1;
                    i.slideamount = i.slideamount - 1, i.realslideamount = i.realslideamount - 1, removeNavWithLiref(".tp-bullet", a, i), removeNavWithLiref(".tp-tab", a, i), removeNavWithLiref(".tp-thumb", a, i), t.hasClass("active-revslide") && (n = !0), t.remove(), i.li = removeArray(i.li, r), i.carousel && i.carousel.slides && (i.carousel.slides = removeArray(i.carousel.slides, r)), i.thumbs = removeArray(i.thumbs, r), _R.updateNavIndexes && _R.updateNavIndexes(i), n && e.revnext(), punchgs.TweenLite.set(i.li, { minWidth: "99%" }), punchgs.TweenLite.set(i.li, { minWidth: "100%" }) } }) }, revaddcallback: function(e) { return this.each(function() { this.opt && (this.opt.callBackArray === undefined && (this.opt.callBackArray = new Array), this.opt.callBackArray.push(e)) }) }, revgetparallaxproc: function() { return jQuery(this)[0].opt.scrollproc }, revdebugmode: function() { return this.each(function() { var e = jQuery(this);
                e[0].opt.debugMode = !0, containerResized(e, e[0].opt) }) }, revscroll: function(i) { return this.each(function() { var e = jQuery(this);
                jQuery("body,html").animate({ scrollTop: e.offset().top + e.height() - i + "px" }, { duration: 400 }) }) }, revredraw: function(e) { return this.each(function() { var e = jQuery(this);
                containerResized(e, e[0].opt) }) }, revkill: function(e) { var i = this,
                t = jQuery(this); if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), t != undefined && 0 < t.length && 0 < jQuery("body").find("#" + t.attr("id")).length) { t.data("conthover", 1), t.data("conthover-changed", 1), t.trigger("revolution.slide.onpause"); var a = t.parent().find(".tp-bannertimer"),
                    n = t[0].opt;
                n.tonpause = !0, t.trigger("stoptimer"); var r = "resize.revslider-" + t.attr("id");
                jQuery(window).unbind(r), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), t.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                r = "resize.revslider-" + t.attr("id");
                jQuery(window).off(r), t.find("*").each(function() { var e = jQuery(this);
                    e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), e.off("on, hover, mouseenter,mouseleave,mouseover, resize"), e.data("mySplitText", null), e.data("ctl", null), e.data("tween") != undefined && e.data("tween").kill(), e.data("kenburn") != undefined && e.data("kenburn").kill(), e.data("timeline_out") != undefined && e.data("timeline_out").kill(), e.data("timeline") != undefined && e.data("timeline").kill(), e.remove(), e.empty(), e = null }), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), a.remove(); try { t.closest(".forcefullwidth_wrapper_tp_banner").remove() } catch (e) {} try { t.closest(".rev_slider_wrapper").remove() } catch (e) {} try { t.remove() } catch (e) {} return t.empty(), t.html(), n = t = null, delete i.c, delete i.opt, delete i.container, !0 } return !1 }, revpause: function() { return this.each(function() { var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && (e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause"), e[0].opt.tonpause = !0, e.trigger("stoptimer")) }) }, revresume: function() { return this.each(function() { var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && (e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume"), e[0].opt.tonpause = !1, e.trigger("starttimer")) }) }, revstart: function() { var e = jQuery(this); if (e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && e[0].opt !== undefined) return e[0].opt.sliderisrunning ? (console.log("Slider Is Running Already"), !1) : ((e[0].opt.c = e)[0].opt.ul = e.find(">ul"), runSlider(e, e[0].opt), !0) }, revnext: function() { return this.each(function() { var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, 1) }) }, revprev: function() { return this.each(function() { var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, -1) }) }, revmaxslide: function() { return jQuery(this).find(".tp-revslider-mainul >li").length }, revcurrentslide: function() { var e = jQuery(this); if (e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length) return parseInt(e[0].opt.act, 0) + 1 }, revlastslide: function() { return jQuery(this).find(".tp-revslider-mainul >li").length }, revshowslide: function(i) { return this.each(function() { var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, "to" + (i - 1)) }) }, revcallslidewithid: function(i) { return this.each(function() { var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, i) }) } }); var _R = jQuery.fn.revolution;
    jQuery.extend(!0, _R, { getversion: function() { return version }, compare_version: function(e) { var i = jQuery("body").data("tp_rs_version"); return (i = i === undefined ? new Object : i).Core === undefined && (i.Core = new Object, i.Core.alias = "Slider Revolution Core", i.Core.name = "jquery.themepunch.revolution.min.js", i.Core.ver = _R.getversion().core), "stop" != e.check && (_R.getversion().core < e.min_core ? (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     Core is older than expected (" + e.min_core + ") from " + e.alias, "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop") : _R.getversion()[e.name] != undefined && e.version < _R.getversion()[e.name] && (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     " + e.alias + " (" + e.version + ") is older than requiered (" + _R.getversion()[e.name] + ")", "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop")), i[e.alias] === undefined && (i[e.alias] = new Object, i[e.alias].alias = e.alias, i[e.alias].ver = e.version, i[e.alias].name = e.name), jQuery("body").data("tp_rs_version", i), e }, currentSlideIndex: function(e) { var i = e.c.find(".active-revslide").index(); return i = -1 == i ? 0 : i }, simp: function(e, i, t) { var a = Math.abs(e) - Math.floor(Math.abs(e / i)) * i; return t ? a : e < 0 ? -1 * a : a }, iOSVersion: function() { var e = !1; return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e }, isIE: function(e, i) { var t = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
            t.html("\x3c!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]--\x3e"); var a = t.find("a").length; return t.remove(), a }, is_mobile: function() { var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                i = !1; for (var t in e) 1 < navigator.userAgent.split(e[t]).length && (i = !0); return i }, is_android: function() { var e = ["android", "Android"],
                i = !1; for (var t in e) 1 < navigator.userAgent.split(e[t]).length && (i = !0); return i }, callBackHandling: function(e, t, a) { try { e.callBackArray && jQuery.each(e.callBackArray, function(e, i) { i && i.inmodule && i.inmodule === t && i.atposition && i.atposition === a && i.callback && i.callback.call() }) } catch (e) { console.log("Call Back Failed") } }, get_browser: function() { var e, i = navigator.appName,
                t = navigator.userAgent,
                a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i); return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[0] }, get_browser_version: function() { var e, i = navigator.appName,
                t = navigator.userAgent,
                a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i); return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[1] }, isSafari11: function() { var e = jQuery.trim(_R.get_browser().toLowerCase()); return -1 === jQuery.trim(navigator.userAgent.toLowerCase()).search("edge") && "msie" !== e && e.match(/safari|chrome/) }, getHorizontalOffset: function(e, i) { var t = gWiderOut(e, ".outer-left"),
                a = gWiderOut(e, ".outer-right"); switch (i) {
                case "left":
                    return t;
                case "right":
                    return a;
                case "both":
                    return t + a } }, callingNewSlide: function(e, i) { var t = 0 < e.find(".next-revslide").length ? e.find(".next-revslide").index() : 0 < e.find(".processing-revslide").length ? e.find(".processing-revslide").index() : e.find(".active-revslide").index(),
                a = 0,
                n = e[0].opt;
            e.find(".next-revslide").removeClass("next-revslide"), e.find(".active-revslide").hasClass("tp-invisible-slide") && (t = n.last_shown_slide), i && jQuery.isNumeric(i) || i.match(/to/g) ? (a = 1 === i || -1 === i ? (a = t + i) < 0 ? n.slideamount - 1 : a >= n.slideamount ? 0 : a : (i = jQuery.isNumeric(i) ? i : parseInt(i.split("to")[1], 0)) < 0 ? 0 : i > n.slideamount - 1 ? n.slideamount - 1 : i, e.find(".tp-revslider-slidesli:eq(" + a + ")").addClass("next-revslide")) : i && e.find(".tp-revslider-slidesli").each(function() { var e = jQuery(this);
                e.data("index") === i && e.addClass("next-revslide") }), a = e.find(".next-revslide").index(), e.trigger("revolution.nextslide.waiting"), t === a && t === n.last_shown_slide || a !== t && -1 != a ? swapSlide(e) : e.find(".next-revslide").removeClass("next-revslide") }, slotSize: function(e, i) { i.slotw = Math.ceil(i.width / i.slots), "fullscreen" == i.sliderLayout ? i.sloth = Math.ceil(jQuery(window).height() / i.slots) : i.sloth = Math.ceil(i.height / i.slots), "on" == i.autoHeight && e !== undefined && "" !== e && (i.sloth = Math.ceil(e.height() / i.slots)) }, setSize: function(e) { var i = (e.top_outer || 0) + (e.bottom_outer || 0),
                t = parseInt(e.carousel.padding_top || 0, 0),
                a = parseInt(e.carousel.padding_bottom || 0, 0),
                n = e.gridheight[e.curWinRange],
                r = 0,
                o = -1 === e.nextSlide || e.nextSlide === undefined ? 0 : e.nextSlide; if (e.paddings = e.paddings === undefined ? { top: parseInt(e.c.parent().css("paddingTop"), 0) || 0, bottom: parseInt(e.c.parent().css("paddingBottom"), 0) || 0 } : e.paddings, e.rowzones && 0 < e.rowzones.length)
                for (var s = 0; s < e.rowzones[o].length; s++) r += e.rowzones[o][s][0].offsetHeight; if (n = (n = n < e.minHeight ? e.minHeight : n) < r ? r : n, "fullwidth" == e.sliderLayout && "off" == e.autoHeight && punchgs.TweenLite.set(e.c, { maxHeight: n + "px" }), e.c.css({ marginTop: t, marginBottom: a }), e.width = e.ul.width(), e.height = e.ul.height(), setScale(e), e.height = Math.round(e.gridheight[e.curWinRange] * (e.width / e.gridwidth[e.curWinRange])), e.height > e.gridheight[e.curWinRange] && "on" != e.autoHeight && (e.height = e.gridheight[e.curWinRange]), "fullscreen" == e.sliderLayout || e.infullscreenmode) { e.height = e.bw * e.gridheight[e.curWinRange];
                e.c.parent().width(); var l = jQuery(window).height(); if (e.fullScreenOffsetContainer != undefined) { try { var d = e.fullScreenOffsetContainer.split(",");
                        d && jQuery.each(d, function(e, i) { l = 0 < jQuery(i).length ? l - jQuery(i).outerHeight(!0) : l }) } catch (e) {} try { 1 < e.fullScreenOffset.split("%").length && e.fullScreenOffset != undefined && 0 < e.fullScreenOffset.length ? l -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : e.fullScreenOffset != undefined && 0 < e.fullScreenOffset.length && (l -= parseInt(e.fullScreenOffset, 0)) } catch (e) {} }
                l = l < e.minHeight ? e.minHeight : l, l -= i, e.c.parent().height(l), e.c.closest(".rev_slider_wrapper").height(l), e.c.css({ height: "100%" }), e.height = l, e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height } else e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height, e.c.height(e.height); var c = { height: t + a + i + e.height + e.paddings.top + e.paddings.bottom };
            e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c), e.c.closest(".rev_slider_wrapper").css(c), setScale(e) }, enterInViewPort: function(t) { t.waitForCountDown && (countDown(t.c, t), t.waitForCountDown = !1), t.waitForFirstSlide && (swapSlide(t.c), t.waitForFirstSlide = !1, setTimeout(function() { t.c.removeClass("tp-waitforfirststart") }, 500)), "playing" != t.sliderlaststatus && t.sliderlaststatus != undefined || t.c.trigger("starttimer"), t.lastplayedvideos != undefined && 0 < t.lastplayedvideos.length && jQuery.each(t.lastplayedvideos, function(e, i) { _R.playVideo(i, t) }) }, leaveViewPort: function(t) { t.sliderlaststatus = t.sliderstatus, t.c.trigger("stoptimer"), t.playingvideos != undefined && 0 < t.playingvideos.length && (t.lastplayedvideos = jQuery.extend(!0, [], t.playingvideos), t.playingvideos && jQuery.each(t.playingvideos, function(e, i) { t.leaveViewPortBasedStop = !0, _R.stopVideo && _R.stopVideo(i, t) })) }, unToggleState: function(e) { e != undefined && 0 < e.length && jQuery.each(e, function(e, i) { i.removeClass("rs-toggle-content-active") }) }, toggleState: function(e) { e != undefined && 0 < e.length && jQuery.each(e, function(e, i) { i.addClass("rs-toggle-content-active") }) }, swaptoggleState: function(e) { e != undefined && 0 < e.length && jQuery.each(e, function(e, i) { jQuery(i).hasClass("rs-toggle-content-active") ? jQuery(i).removeClass("rs-toggle-content-active") : jQuery(i).addClass("rs-toggle-content-active") }) }, lastToggleState: function(e) { var t = 0; return e != undefined && 0 < e.length && jQuery.each(e, function(e, i) { t = i.hasClass("rs-toggle-content-active") }), t } }); var _ISM = _R.is_mobile(),
        _ANDROID = _R.is_android(),
        checkIDS = function(e, i) { if (e.anyid = e.anyid === undefined ? [] : e.anyid, -1 != jQuery.inArray(i.attr("id"), e.anyid)) { var t = i.attr("id") + "_" + Math.round(9999 * Math.random());
                i.attr("id", t) }
            e.anyid.push(i.attr("id")) },
        removeArray = function(e, t) { var a = []; return jQuery.each(e, function(e, i) { e != t && a.push(i) }), a },
        removeNavWithLiref = function(e, i, t) { t.c.find(e).each(function() { var e = jQuery(this);
                e.data("liref") === i && e.remove() }) },
        lAjax = function(i, t) { return !jQuery("body").data(i) && (t.filesystem ? (t.errorm === undefined && (t.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), t.errorm = t.errorm + '<br>&lt;script type="text/javascript" src="' + t.jsFileLocation + i + t.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(t.jsFileLocation + i + t.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), !(t.modulesfailing = !0)) : (jQuery.ajax({ url: t.jsFileLocation + i + t.extensions_suffix + "?version=" + version.core, dataType: "script", cache: !0, error: function(e) { console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + t.extensions_suffix + " on Path:" + t.jsFileLocation), console.info(e) } }), void jQuery("body").data(i, !0))) },
        getNeededScripts = function(t, e) { var i = new Object,
                a = t.navigation; return i.kenburns = !1, i.parallax = !1, i.carousel = !1, i.navigation = !1, i.videos = !1, i.actions = !1, i.layeranim = !1, i.migration = !1, e.data("version") && e.data("version").toString().match(/5./gi) ? (e.find("img").each(function() { "on" == jQuery(this).data("kenburns") && (i.kenburns = !0) }), ("carousel" == t.sliderType || "on" == a.keyboardNavigation || "on" == a.mouseScrollNavigation || "on" == a.touch.touchenabled || a.arrows.enable || a.bullets.enable || a.thumbnails.enable || a.tabs.enable) && (i.navigation = !0), e.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() { var e = jQuery(this);
                (e.data("ytid") != undefined || 0 < e.find("iframe").length && 0 < e.find("iframe").attr("src").toLowerCase().indexOf("youtube")) && (i.videos = !0), (e.data("vimeoid") != undefined || 0 < e.find("iframe").length && 0 < e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")) && (i.videos = !0), e.data("actions") !== undefined && (i.actions = !0), i.layeranim = !0 }), e.find("li").each(function() { jQuery(this).data("link") && jQuery(this).data("link") != undefined && (i.layeranim = !0, i.actions = !0) }), !i.videos && (0 < e.find(".rs-background-video-layer").length || 0 < e.find(".tp-videolayer").length || 0 < e.find(".tp-audiolayer").length || 0 < e.find("iframe").length || 0 < e.find("video").length) && (i.videos = !0), "carousel" == t.sliderType && (i.carousel = !0), ("off" !== t.parallax.type || t.viewPort.enable || "true" == t.viewPort.enable || "true" === t.scrolleffect.on || t.scrolleffect.on) && (i.parallax = !0)) : (i.kenburns = !0, i.parallax = !0, i.carousel = !1, i.navigation = !0, i.videos = !0, i.actions = !0, i.layeranim = !0, i.migration = !0), "hero" == t.sliderType && (i.carousel = !1, i.navigation = !1), window.location.href.match(/file:/gi) && (i.filesystem = !0, t.filesystem = !0), i.videos && void 0 === _R.isVideoPlaying && lAjax("revolution.extension.video", t), i.carousel && void 0 === _R.prepareCarousel && lAjax("revolution.extension.carousel", t), i.carousel || void 0 !== _R.animateSlide || lAjax("revolution.extension.slideanims", t), i.actions && void 0 === _R.checkActions && lAjax("revolution.extension.actions", t), i.layeranim && void 0 === _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", t), i.kenburns && void 0 === _R.stopKenBurn && lAjax("revolution.extension.kenburn", t), i.navigation && void 0 === _R.createNavigation && lAjax("revolution.extension.navigation", t), i.migration && void 0 === _R.migration && lAjax("revolution.extension.migration", t), i.parallax && void 0 === _R.checkForParallax && lAjax("revolution.extension.parallax", t), t.addons != undefined && 0 < t.addons.length && jQuery.each(t.addons, function(e, i) { "object" == typeof i && i.fileprefix != undefined && lAjax(i.fileprefix, t) }), i },
        waitForScripts = function(e, i) { var t = !0,
                a = i.scriptsneeded;
            i.addons != undefined && 0 < i.addons.length && jQuery.each(i.addons, function(e, i) { "object" == typeof i && i.init != undefined && _R[i.init] === undefined && (t = !1) }), a.filesystem || "undefined" != typeof punchgs && t && (!a.kenburns || a.kenburns && void 0 !== _R.stopKenBurn) && (!a.navigation || a.navigation && void 0 !== _R.createNavigation) && (!a.carousel || a.carousel && void 0 !== _R.prepareCarousel) && (!a.videos || a.videos && void 0 !== _R.resetVideo) && (!a.actions || a.actions && void 0 !== _R.checkActions) && (!a.layeranim || a.layeranim && void 0 !== _R.handleStaticLayers) && (!a.migration || a.migration && void 0 !== _R.migration) && (!a.parallax || a.parallax && void 0 !== _R.checkForParallax) && (a.carousel || !a.carousel && void 0 !== _R.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function() { waitForScripts(e, i) }, 50) },
        getScriptLocation = function(e) { var i = new RegExp("themepunch.revolution.min.js", "gi"),
                t = ""; return jQuery("script").each(function() { var e = jQuery(this).attr("src");
                e && e.match(i) && (t = e) }), t = (t = (t = t.replace("jquery.themepunch.revolution.min.js", "")).replace("jquery.themepunch.revolution.js", "")).split("?")[0] },
        setCurWinRange = function(e, i) { var t = 9999,
                a = 0,
                n = 0,
                r = 0,
                o = jQuery(window).width(),
                s = i && 9999 == e.responsiveLevels ? e.visibilityLevels : e.responsiveLevels;
            s && s.length && jQuery.each(s, function(e, i) { o < i && (0 == a || i < a) && (r = e, a = t = i), i < o && a < i && (a = i, n = e) }), a < t && (r = n), i ? e.forcedWinRange = r : e.curWinRange = r },
        prepareOptions = function(e, i) { i.carousel.maxVisibleItems = i.carousel.maxVisibleItems < 1 ? 999 : i.carousel.maxVisibleItems, i.carousel.vertical_align = "top" === i.carousel.vertical_align ? "0%" : "bottom" === i.carousel.vertical_align ? "100%" : "50%" },
        gWiderOut = function(e, i) { var t = 0; return e.find(i).each(function() { var e = jQuery(this);!e.hasClass("tp-forcenotvisible") && t < e.outerWidth() && (t = e.outerWidth()) }), t },
        initSlider = function(container, opt) { if (container == undefined) return !1;
            container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function(e) { var i = jQuery(this); "on" == i.data("hideslideonmobile") && _ISM && i.remove(), (i.data("invisible") || !0 === i.data("invisible")) && (i.addClass("tp-invisible-slide"), i.appendTo(opt.ul)) }), opt.addons != undefined && 0 < opt.addons.length && jQuery.each(opt.addons, function(i, obj) { "object" == typeof obj && obj.init != undefined && _R[obj.init](eval(obj.params)) }), opt.cid = container.attr("id"), opt.ul.css({ visibility: "visible" }), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.realslideamount = opt.ul.find(">li").length, opt.slayers = container.find(".tp-static-layers"), opt.slayers.data("index", "staticlayers"), 1 != opt.waitForInit && (container[0].opt = opt, runSlider(container, opt)) },
        onFullScreenChange = function() { jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function() { jQuery(window).trigger("resize") }, 200) },
        runSlider = function(t, x) { if (x.sliderisrunning = !0, x.ul.find(">li").each(function(e) { jQuery(this).data("originalindex", e) }), x.allli = x.ul.find(">li"), jQuery.each(x.allli, function(e, i) {
                    (i = jQuery(i)).data("origindex", i.index()) }), x.li = x.ul.find(">li").not(".tp-invisible-slide"), "on" == x.shuffle) { var e = new Object,
                    i = x.ul.find(">li:first-child");
                e.fstransition = i.data("fstransition"), e.fsmasterspeed = i.data("fsmasterspeed"), e.fsslotamount = i.data("fsslotamount"); for (var a = 0; a < x.slideamount; a++) { var n = Math.round(Math.random() * x.slideamount);
                    x.ul.find(">li:eq(" + n + ")").prependTo(x.ul) } var r = x.ul.find(">li:first-child");
                r.data("fstransition", e.fstransition), r.data("fsmasterspeed", e.fsmasterspeed), r.data("fsslotamount", e.fsslotamount), x.allli = x.ul.find(">li"), x.li = x.ul.find(">li").not(".tp-invisible-slide") } if (x.inli = x.ul.find(">li.tp-invisible-slide"), x.thumbs = new Array, x.slots = 4, x.act = -1, x.firststart = 1, x.loadqueue = new Array, x.syncload = 0, x.conw = t.width(), x.conh = t.height(), 1 < x.responsiveLevels.length ? x.responsiveLevels[0] = 9999 : x.responsiveLevels = 9999, jQuery.each(x.allli, function(e, i) { var t = (i = jQuery(i)).find(".rev-slidebg") || i.find("img").first(),
                        a = 0;
                    i.addClass("tp-revslider-slidesli"), i.data("index") === undefined && i.data("index", "rs-" + Math.round(999999 * Math.random())); var n = new Object;
                    n.params = new Array, n.id = i.data("index"), n.src = i.data("thumb") !== undefined ? i.data("thumb") : t.data("lazyload") !== undefined ? t.data("lazyload") : t.attr("src"), i.data("title") !== undefined && n.params.push({ from: RegExp("\\{\\{title\\}\\}", "g"), to: i.data("title") }), i.data("description") !== undefined && n.params.push({ from: RegExp("\\{\\{description\\}\\}", "g"), to: i.data("description") }); for (a = 1; a <= 10; a++) i.data("param" + a) !== undefined && n.params.push({ from: RegExp("\\{\\{param" + a + "\\}\\}", "g"), to: i.data("param" + a) }); if (x.thumbs.push(n), i.data("link") != undefined) { var r = i.data("link"),
                            o = i.data("target") || "_self",
                            s = "back" === i.data("slideindex") ? 0 : 60,
                            l = i.data("linktoslide"),
                            d = l;
                        l != undefined && "next" != l && "prev" != l && x.allli.each(function() { var e = jQuery(this);
                            e.data("origindex") + 1 == d && (l = e.data("index")) }), "slide" != r && (l = "no"); var c = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + s + ';" data-x="center" data-y="center" data-basealign="slide" ',
                            u = ' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';
                        c = "no" == l ? c + u + " >" : c + "data-actions='" + ("scroll_under" === l ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === l ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === l ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + l + '","delay":"0.2"}]') + "'" + u + " >", c += '<a style="width:100%;height:100%;display:block"', c = "slide" != r ? c + ' target="' + o + '" href="' + r + '"' : c, c += '><span style="width:100%;height:100%;display:block"></span></a></div>', i.append(c) } }), x.rle = x.responsiveLevels.length || 1, x.gridwidth = cArray(x.gridwidth, x.rle), x.gridheight = cArray(x.gridheight, x.rle), "on" == x.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (t.find(".tp-caption").each(function() { var e = jQuery(this);
                    e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400) }), x.allli.each(function() { var e = jQuery(this);
                    e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1), (e.find(".rev-slidebg") || e.find(">img").first()).data("kenburns", "off") })), x.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), x.autoHeight = "fullscreen" == x.sliderLayout ? "on" : x.autoHeight, "fullwidth" == x.sliderLayout && "off" == x.autoHeight && t.css({ maxHeight: x.gridheight[x.curWinRange] + "px" }), "auto" != x.sliderLayout && 0 == t.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== x.sliderLayout || "on" != x.fullScreenAutoWidth)) { var o = t.parent(),
                    s = o.css("marginBottom"),
                    l = o.css("marginTop"),
                    d = t.attr("id") + "_forcefullwidth";
                s = s === undefined ? 0 : s, l = l === undefined ? 0 : l, o.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + d + '" style="position:relative;width:100%;height:auto;margin-top:' + l + ";margin-bottom:" + s + '"></div>'), t.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + t.height() + 'px"></div>'), t.parent().css({ marginTop: "0px", marginBottom: "0px" }), t.parent().css({ position: "absolute" }) } if (x.shadow !== undefined && 0 < x.shadow && (t.parent().addClass("tp-shadow" + x.shadow), t.parent().append('<div class="tp-shadowcover"></div>'), t.parent().find(".tp-shadowcover").css({ backgroundColor: t.parent().css("backgroundColor"), backgroundImage: t.parent().css("backgroundImage") })), setCurWinRange(x), setCurWinRange(x, !0), !t.hasClass("revslider-initialised")) { t.addClass("revslider-initialised"), t.addClass("tp-simpleresponsive"), t.attr("id") == undefined && t.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), checkIDS(x, t), x.firefox13 = !1, x.ie = !jQuery.support.opacity, x.ie9 = 9 == document.documentMode, x.origcd = x.delay; var c = jQuery.fn.jquery.split("."),
                    u = parseFloat(c[0]),
                    p = parseFloat(c[1]);
                parseFloat(c[2] || "0");
                1 == u && p < 7 && t.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + c + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), 1 < u && (x.ie = !1); var j = new Object;
                j.addedyt = 0, j.addedvim = 0, j.addedvid = 0, x.scrolleffect.on && (x.scrolleffect.layers = new Array), t.find(".tp-caption, .rs-background-video-layer").each(function(e) { var n = jQuery(this),
                        i = n.data(),
                        t = i.autoplayonlyfirsttime,
                        a = i.autoplay,
                        r = (i.videomp4 !== undefined || i.videowebm !== undefined || i.videoogv, n.hasClass("tp-audiolayer")),
                        o = i.videoloop,
                        s = !0,
                        l = !1;
                    i.startclasses = n.attr("class"), i.isparallaxlayer = 0 <= i.startclasses.indexOf("rs-parallax"), n.hasClass("tp-static-layer") && _R.handleStaticLayers && (_R.handleStaticLayers(n, x), x.scrolleffect.on && ("on" === x.scrolleffect.on_parallax_static_layers && i.isparallaxlayer || "on" === x.scrolleffect.on_static_layers && !i.isparallaxlayer) && (l = !0), s = !1); var d = n.data("noposteronmobile") || n.data("noPosterOnMobile") || n.data("posteronmobile") || n.data("posterOnMobile") || n.data("posterOnMObile");
                    n.data("noposteronmobile", d); var c = 0; if (n.find("iframe").each(function() { punchgs.TweenLite.set(jQuery(this), { autoAlpha: 0 }), c++ }), 0 < c && n.data("iframes", !0), n.hasClass("tp-caption")) { var u = n.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "",
                            p = n.data(),
                            f = "",
                            h = p.type,
                            g = "row" === h || "column" === h ? "relative" : "absolute",
                            v = ""; "row" === h ? (n.addClass("rev_row").removeClass("tp-resizeme"), v = "rev_row_wrap") : "column" === h ? (f = p.verticalalign === undefined ? " vertical-align:bottom;" : " vertical-align:" + p.verticalalign + ";", v = "rev_column", n.addClass("rev_column_inner").removeClass("tp-resizeme"), n.data("width", "auto"), punchgs.TweenLite.set(n, { width: "auto" })) : "group" === h && n.removeClass("tp-resizeme"); var m = "",
                            y = ""; "row" !== h && "group" !== h && "column" !== h ? (m = "display:" + n.css("display") + ";", 0 < n.closest(".rev_column").length ? (n.addClass("rev_layer_in_column"), s = !1) : 0 < n.closest(".rev_group").length && (n.addClass("rev_layer_in_group"), s = !1)) : "column" === h && (s = !1), p.wrapper_class !== undefined && (v = v + " " + p.wrapper_class), p.wrapper_id !== undefined && (y = 'id="' + p.wrapper_id + '"'); var w = "";
                        n.hasClass("tp-no-events") && (w = ";pointer-events:none"), n.wrap("<div " + y + ' class="tp-parallax-wrap ' + v + '" style="' + f + " " + u + "position:" + g + ";" + m + ";visibility:hidden" + w + '"><div class="tp-loop-wrap" style="' + u + "position:" + g + ";" + m + ';"><div class="tp-mask-wrap" style="' + u + "position:" + g + ";" + m + ';" ></div></div></div>'), s && x.scrolleffect.on && ("on" === x.scrolleffect.on_parallax_layers && i.isparallaxlayer || "on" === x.scrolleffect.on_layers && !i.isparallaxlayer) && x.scrolleffect.layers.push(n.parent()), l && x.scrolleffect.layers.push(n.parent()), "column" === h && (n.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'), n.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>')); var b = n.closest(".tp-loop-wrap");
                        jQuery.each(["pendulum", "rotate", "slideloop", "pulse", "wave"], function(e, i) { var t = n.find(".rs-" + i),
                                a = t.data() || ""; "" != a && (b.data(a), b.addClass("rs-" + i), t.children(0).unwrap(), n.data("loopanimation", "on")) }), n.attr("id") === undefined && n.attr("id", "layer-" + Math.round(999999999 * Math.random())), checkIDS(x, n), punchgs.TweenLite.set(n, { visibility: "hidden" }) } var _ = n.data("actions");
                    _ !== undefined && _R.checkActions(n, x, _), checkHoverDependencies(n, x), _R.checkVideoApis && (j = _R.checkVideoApis(n, x, j)), r || 1 != t && "true" != t && "1sttime" != a || "loopandnoslidestop" == o || n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), r || 1 != a && "true" != a && "on" != a && "no1sttime" != a || "loopandnoslidestop" == o || n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always") }), t[0].addEventListener("mouseenter", function() { t.trigger("tp-mouseenter"), x.overcontainer = !0 }, { passive: !0 }), t[0].addEventListener("mouseover", function() { t.trigger("tp-mouseover"), x.overcontainer = !0 }, { passive: !0 }), t[0].addEventListener("mouseleave", function() { t.trigger("tp-mouseleft"), x.overcontainer = !1 }, { passive: !0 }), t.find(".tp-caption video").each(function(e) { var i = jQuery(this);
                    i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({ display: "none" }) }), "standard" !== x.sliderType && (x.lazyType = "all"), loadImages(t.find(".tp-static-layers"), x, 0, !0), waitForCurrentImages(t.find(".tp-static-layers"), x, function() { t.find(".tp-static-layers img").each(function() { var e = jQuery(this),
                            i = e.data("lazyload") != undefined ? e.data("lazyload") : e.attr("src"),
                            t = getLoadObj(x, i);
                        e.attr("src", t.src) }) }), x.rowzones = [], x.allli.each(function(e) { var i = jQuery(this);
                    x.rowzones[e] = [], i.find(".rev_row_zone").each(function() { x.rowzones[e].push(jQuery(this)) }), "all" != x.lazyType && ("smart" != x.lazyType || 0 != e && 1 != e && e != x.slideamount && e != x.slideamount - 1) || (loadImages(i, x, e), waitForCurrentImages(i, x, function() {})) }); var f = getUrlVars("#")[0]; if (f.length < 9 && 1 < f.split("slide").length) { var h = parseInt(f.split("slide")[1], 0);
                    h < 1 && (h = 1), h > x.slideamount && (h = x.slideamount), x.startWithSlide = h - 1 }
                t.append('<div class="tp-loader ' + x.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), x.loader = t.find(".tp-loader"), 0 === t.find(".tp-bannertimer").length && t.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), t.find(".tp-bannertimer").css({ width: "0%" }), x.ul.css({ display: "block" }), prepareSlides(t, x), ("off" !== x.parallax.type || x.scrolleffect.on) && _R.checkForParallax && _R.checkForParallax(t, x), _R.setSize(x), "hero" !== x.sliderType && _R.createNavigation && _R.createNavigation(t, x), _R.resizeThumbsTabs && _R.resizeThumbsTabs && _R.resizeThumbsTabs(x), contWidthManager(x); var g = x.viewPort;
                x.inviewport = !1, g != undefined && g.enable && (jQuery.isNumeric(g.visible_area) || -1 !== g.visible_area.indexOf("%") && (g.visible_area = parseInt(g.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(x, t)), "carousel" === x.sliderType && _R.prepareCarousel && (punchgs.TweenLite.set(x.ul, { opacity: 0 }), _R.prepareCarousel(x, new punchgs.TimelineLite, undefined, 0), x.onlyPreparedSlide = !0), setTimeout(function() { if (!g.enable || g.enable && x.inviewport || g.enable && !x.inviewport && "wait" == !g.outof) swapSlide(t);
                    else if (x.c.addClass("tp-waitforfirststart"), x.waitForFirstSlide = !0, g.presize) { var e = jQuery(x.li[0]);
                        loadImages(e, x, 0, !0), waitForCurrentImages(e.find(".tp-layers"), x, function() { _R.animateTheCaptions({ slide: e, opt: x, preset: !0 }) }) }
                    _R.manageNavigation && _R.manageNavigation(x), 1 < x.slideamount && (!g.enable || g.enable && x.inviewport ? countDown(t, x) : x.waitForCountDown = !0), setTimeout(function() { t.trigger("revolution.slide.onloaded") }, 100) }, x.startDelay), x.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", onFullScreenChange, { passive: !0 }), window.addEventListener("mozfullscreenchange", onFullScreenChange, { passive: !0 }), window.addEventListener("webkitfullscreenchange", onFullScreenChange, { passive: !0 }); var v = "resize.revslider-" + t.attr("id");
                jQuery(window).on(v, function() { if (t == undefined) return !1;
                    0 != jQuery("body").find(t) && contWidthManager(x); var e = !1; if ("fullscreen" == x.sliderLayout) { var i = jQuery(window).height(); "mobile" == x.fallbacks.ignoreHeightChanges && _ISM || "always" == x.fallbacks.ignoreHeightChanges ? (x.fallbacks.ignoreHeightChangesSize = x.fallbacks.ignoreHeightChangesSize == undefined ? 0 : x.fallbacks.ignoreHeightChangesSize, e = i != x.lastwindowheight && Math.abs(i - x.lastwindowheight) > x.fallbacks.ignoreHeightChangesSize) : e = i != x.lastwindowheight }(t.outerWidth(!0) != x.width || t.is(":hidden") || e) && (x.lastwindowheight = jQuery(window).height(), containerResized(t, x)) }), hideSliderUnder(t, x), contWidthManager(x), x.fallbacks.disableFocusListener || "true" == x.fallbacks.disableFocusListener || !0 === x.fallbacks.disableFocusListener || (t.addClass("rev_redraw_on_blurfocus"), tabBlurringCheck()) } },
        cArray = function(e, i) { if (!jQuery.isArray(e)) { var t = e;
                (e = new Array).push(t) } if (e.length < i) { t = e[e.length - 1]; for (var a = 0; a < i - e.length + 2; a++) e.push(t) } return e },
        checkHoverDependencies = function(e, n) { var i = e.data();
            ("sliderenter" === i.start || i.frames !== undefined && i.frames[0] != undefined && "sliderenter" === i.frames[0].delay) && (n.layersonhover === undefined && (n.c.on("tp-mouseenter", function() { n.layersonhover && jQuery.each(n.layersonhover, function(e, i) { var t = i.data("closestli") || i.closest(".tp-revslider-slidesli"),
                        a = i.data("staticli") || i.closest(".tp-static-layers");
                    i.data("closestli") === undefined && (i.data("closestli", t), i.data("staticli", a)), (0 < t.length && t.hasClass("active-revslide") || t.hasClass("processing-revslide") || 0 < a.length) && (i.data("animdirection", "in"), _R.playAnimationFrame && _R.playAnimationFrame({ caption: i, opt: n, frame: "frame_0", triggerdirection: "in", triggerframein: "frame_0", triggerframeout: "frame_999" }), i.data("triggerstate", "on")) }) }), n.c.on("tp-mouseleft", function() { n.layersonhover && jQuery.each(n.layersonhover, function(e, i) { i.data("animdirection", "out"), i.data("triggered", !0), i.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(i, n), _R.playAnimationFrame && _R.playAnimationFrame({ caption: i, opt: n, frame: "frame_999", triggerdirection: "out", triggerframein: "frame_0", triggerframeout: "frame_999" }) }) }), n.layersonhover = new Array), n.layersonhover.push(e)) },
        contWidthManager = function(e) { var i = _R.getHorizontalOffset(e.c, "left"); if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) "fullscreen" == e.sliderLayout && "on" == e.fullScreenAutoWidth ? punchgs.TweenLite.set(e.ul, { left: 0, width: e.c.width() }) : punchgs.TweenLite.set(e.ul, { left: i, width: e.c.width() - _R.getHorizontalOffset(e.c, "both") });
            else { var t = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i);
                punchgs.TweenLite.set(e.c.parent(), { left: 0 - t + "px", width: jQuery(window).width() - _R.getHorizontalOffset(e.c, "both") }) }
            e.slayers && "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout && punchgs.TweenLite.set(e.slayers, { left: i }) },
        cv = function(e, i) { return e === undefined ? i : e },
        hideSliderUnder = function(e, i, t) { var a = e.parent();
            jQuery(window).width() < i.hideSliderAtLimit ? (e.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({ display: "none" })) : e.is(":hidden") && t && (a.data("olddisplay") != undefined && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? a.css({ display: a.data("olddisplay") }) : a.css({ display: "block" }), e.trigger("restarttimer"), setTimeout(function() { containerResized(e, i) }, 150)), _R.hideUnHideNav && _R.hideUnHideNav(i) },
        containerResized = function(e, i) { if (e.trigger("revolution.slide.beforeredraw"), 1 == i.infullscreenmode && (i.minHeight = jQuery(window).height()), setCurWinRange(i), setCurWinRange(i, !0), !_R.resizeThumbsTabs || !0 === _R.resizeThumbsTabs(i)) { if (hideSliderUnder(e, i, !0), contWidthManager(i), "carousel" == i.sliderType && _R.prepareCarousel(i, !0), e === undefined) return !1;
                _R.setSize(i), i.conw = i.c.width(), i.conh = i.infullscreenmode ? i.minHeight : i.c.height(); var t = e.find(".active-revslide .slotholder"),
                    a = e.find(".processing-revslide .slotholder");
                removeSlots(e, i, e, 2), "standard" === i.sliderType && (punchgs.TweenLite.set(a.find(".defaultimg"), { opacity: 0 }), t.find(".defaultimg").css({ opacity: 1 })), "carousel" === i.sliderType && i.lastconw != i.conw && (clearTimeout(i.pcartimer), i.pcartimer = setTimeout(function() { _R.prepareCarousel(i, !0), "carousel" == i.sliderType && "on" === i.carousel.showLayersAllTime && jQuery.each(i.li, function(e) { _R.animateTheCaptions({ slide: jQuery(i.li[e]), opt: i, recall: !0 }) }) }, 100), i.lastconw = i.conw), _R.manageNavigation && _R.manageNavigation(i), _R.animateTheCaptions && 0 < e.find(".active-revslide").length && _R.animateTheCaptions({ slide: e.find(".active-revslide"), opt: i, recall: !0 }), "on" == a.data("kenburns") && _R.startKenBurn(a, i, a.data("kbtl") !== undefined ? a.data("kbtl").progress() : 0), "on" == t.data("kenburns") && _R.startKenBurn(t, i, t.data("kbtl") !== undefined ? t.data("kbtl").progress() : 0), _R.animateTheCaptions && 0 < e.find(".processing-revslide").length && _R.animateTheCaptions({ slide: e.find(".processing-revslide"), opt: i, recall: !0 }), _R.manageNavigation && _R.manageNavigation(i) }
            e.trigger("revolution.slide.afterdraw") },
        setScale = function(e) { e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (1 < e.bh || 1 < e.bw) && (e.bw = 1, e.bh = 1) },
        prepareSlides = function(e, u) { if (e.find(".tp-caption").each(function() { var e = jQuery(this);
                    e.data("transition") !== undefined && e.addClass(e.data("transition")) }), u.ul.css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: e.parent().css("maxHeight") }), "on" == u.autoHeight && (u.ul.css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: "none" }), e.css({ maxHeight: "none" }), e.parent().css({ maxHeight: "none" })), u.allli.each(function(e) { var i = jQuery(this),
                        t = i.data("originalindex");
                    (u.startWithSlide != undefined && t == u.startWithSlide || u.startWithSlide === undefined && 0 == e) && i.addClass("next-revslide"), i.css({ width: "100%", height: "100%", overflow: "hidden" }) }), "carousel" === u.sliderType) { u.ul.css({ overflow: "visible" }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>'); var i = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                u.c.parent().prepend(i), u.c.parent().append(i), _R.prepareCarousel(u) }
            e.parent().css({ overflow: "visible" }), u.allli.find(">img").each(function(e) { var i = jQuery(this),
                    t = i.closest("li"),
                    a = t.find(".rs-background-video-layer");
                a.addClass("defaultvid").css({ zIndex: 30 }), i.addClass("defaultimg"), "on" == u.fallbacks.panZoomDisableOnMobile && _ISM && (i.data("kenburns", "off"), i.data("bgfit", "cover")); var n = t.data("mediafilter");
                n = "none" === n || n === undefined ? "" : n, i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), a.appendTo(t.find(".slotholder")); var r = i.data();
                i.closest(".slotholder").data(r), 0 < a.length && r.bgparallax != undefined && (a.data("bgparallax", r.bgparallax), a.data("showcoveronpause", "on")), "none" != u.dottedOverlay && u.dottedOverlay != undefined && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + u.dottedOverlay + '"></div>'); var o = i.attr("src");
                r.src = o, r.bgfit = r.bgfit || "cover", r.bgrepeat = r.bgrepeat || "no-repeat", r.bgposition = r.bgposition || "center center";
                i.closest(".slotholder"); var s = i.data("bgcolor"),
                    l = "";
                l = s !== undefined && 0 <= s.indexOf("gradient") ? '"background:' + s + ';width:100%;height:100%;"' : '"background-color:' + s + ";background-repeat:" + r.bgrepeat + ";background-image:url(" + o + ");background-size:" + r.bgfit + ";background-position:" + r.bgposition + ';width:100%;height:100%;"', i.data("mediafilter", n), n = "on" === i.data("kenburns") ? "" : n; var d = jQuery('<div class="tp-bgimg defaultimg ' + n + '" data-bgcolor="' + s + '" style=' + l + "></div>");
                i.parent().append(d); var c = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                i.replaceWith(c), d.data(r), d.attr("src", o), "standard" !== u.sliderType && "undefined" !== u.sliderType || d.css({ opacity: 0 }) }), u.scrolleffect.on && "on" === u.scrolleffect.on_slidebg && (u.allslotholder = new Array, u.allli.find(".slotholder").each(function() { jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>') }), u.allslotholder = u.c.find(".slotholder_fadeoutwrap")) },
        removeSlots = function(e, i, t, a) { i.removePrepare = i.removePrepare + a, t.find(".slot, .slot-circle-wrapper").each(function() { jQuery(this).remove() }), i.transition = 0, i.removePrepare = 0 },
        cutParams = function(e) { var i = e; return e != undefined && 0 < e.length && (i = e.split("?")[0]), i },
        relativeRedir = function(e) { return location.pathname.replace(/(.*)\/[^/]*/, "$1/" + e) },
        abstorel = function(e, i) { var t = e.split("/"),
                a = i.split("/");
            t.pop(); for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? t.pop() : t.push(a[n])); return t.join("/") },
        imgLoaded = function(l, e, d) { e.syncload--, e.loadqueue && jQuery.each(e.loadqueue, function(e, i) { var t = i.src.replace(/\.\.\/\.\.\//gi, ""),
                    a = self.location.href,
                    n = document.location.origin,
                    r = a.substring(0, a.length - 1) + "/" + t,
                    o = n + "/" + t,
                    s = abstorel(self.location.href, i.src);
                a = a.substring(0, a.length - 1) + t, (cutParams(n += t) === cutParams(decodeURIComponent(l.src)) || cutParams(a) === cutParams(decodeURIComponent(l.src)) || cutParams(s) === cutParams(decodeURIComponent(l.src)) || cutParams(o) === cutParams(decodeURIComponent(l.src)) || cutParams(r) === cutParams(decodeURIComponent(l.src)) || cutParams(i.src) === cutParams(decodeURIComponent(l.src)) || cutParams(i.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(l.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(l.src).match(new RegExp(t))) && (i.progress = d, i.width = l.width, i.height = l.height) }), progressImageLoad(e) },
        progressImageLoad = function(a) { 3 != a.syncload && a.loadqueue && jQuery.each(a.loadqueue, function(e, i) { if (i.progress.match(/prepared/g) && a.syncload <= 3) { if (a.syncload++, "img" == i.type) { var t = new Image;
                        t.onload = function() { imgLoaded(this, a, "loaded"), i.error = !1 }, t.onerror = function() { imgLoaded(this, a, "failed"), i.error = !0 }, t.src = i.src } else jQuery.get(i.src, function(e) { i.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), i.progress = "loaded", a.syncload--, progressImageLoad(a) }).fail(function() { i.progress = "failed", a.syncload--, progressImageLoad(a) });
                    i.progress = "inload" } }) },
        addToLoadQueue = function(t, e, i, a, n) { var r = !1; if (e.loadqueue && jQuery.each(e.loadqueue, function(e, i) { i.src === t && (r = !0) }), !r) { var o = new Object;
                o.src = t, o.starttoload = jQuery.now(), o.type = a || "img", o.prio = i, o.progress = "prepared", o.static = n, e.loadqueue.push(o) } },
        loadImages = function(e, a, n, r) { e.find("img,.defaultimg, .tp-svg-layer").each(function() { var e = jQuery(this),
                    i = e.data("lazyload") !== undefined && "undefined" !== e.data("lazyload") ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
                    t = e.data("svg_src") != undefined ? "svg" : "img";
                e.data("start-to-load", jQuery.now()), addToLoadQueue(i, a, n, t, r) }), progressImageLoad(a) },
        getLoadObj = function(e, t) { var a = new Object; return e.loadqueue && jQuery.each(e.loadqueue, function(e, i) { i.src == t && (a = i) }), a },
        waitForCurrentImages = function(o, s, e) { var l = !1;
            o.find("img,.defaultimg, .tp-svg-layer").each(function() { var e = jQuery(this),
                    i = e.data("lazyload") != undefined ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
                    t = getLoadObj(s, i); if (e.data("loaded") === undefined && t !== undefined && t.progress && t.progress.match(/loaded/g)) { if (e.attr("src", t.src), "img" == t.type)
                        if (e.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", t.src) : -1 == t.src.indexOf("images/transparent.png") && -1 == t.src.indexOf("assets/transparent.png") || e.data("bgcolor") === undefined ? e.css({ backgroundImage: 'url("' + t.src + '")' }) : e.data("bgcolor") !== undefined && e.css({ background: e.data("bgcolor") }), o.data("owidth", t.width), o.data("oheight", t.height), o.find(".slotholder").data("owidth", t.width), o.find(".slotholder").data("oheight", t.height);
                        else { var a = e.data("ww"),
                                n = e.data("hh");
                            e.data("owidth", t.width), e.data("oheight", t.height), a = a == undefined || "auto" == a || "" == a ? t.width : a, n = n == undefined || "auto" == n || "" == n ? t.height : n, !jQuery.isNumeric(a) && 0 < a.indexOf("%") && (n = a), e.data("ww", a), e.data("hh", n) }
                    else "svg" == t.type && "loaded" == t.progress && (e.append('<div class="tp-svg-innercontainer"></div>'), e.find(".tp-svg-innercontainer").append(t.innerHTML));
                    e.data("loaded", !0) } if (t && t.progress && t.progress.match(/inprogress|inload|prepared/g) && (!t.error && jQuery.now() - e.data("start-to-load") < 5e3 ? l = !0 : (t.progress = "failed", t.reported_img || (t.reported_img = !0, console.warn(i + "  Could not be loaded !")))), 1 == s.youtubeapineeded && (!window.YT || YT.Player == undefined) && (l = !0, 5e3 < jQuery.now() - s.youtubestarttime && 1 != s.youtubewarning)) { s.youtubewarning = !0; var r = "YouTube Api Could not be loaded !"; "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>") } if (1 == s.vimeoapineeded && !window.Vimeo && (l = !0, 5e3 < jQuery.now() - s.vimeostarttime && 1 != s.vimeowarning)) { s.vimeowarning = !0;
                    r = "Vimeo Api Could not be loaded !"; "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>") } }), !_ISM && s.audioqueue && 0 < s.audioqueue.length && jQuery.each(s.audioqueue, function(e, i) { i.status && "prepared" === i.status && jQuery.now() - i.start < i.waittime && (l = !0) }), jQuery.each(s.loadqueue, function(e, i) {!0 !== i.static || "loaded" == i.progress && "failed" !== i.progress || ("failed" == i.progress ? i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded in time. Error Exists:" + i.error)) : !i.error && jQuery.now() - i.starttoload < 5e3 ? l = !0 : i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded within 5s! Error Exists:" + i.error))) }), l ? punchgs.TweenLite.delayedCall(.18, waitForCurrentImages, [o, s, e]) : punchgs.TweenLite.delayedCall(.18, e) },
        swapSlide = function(e) { var i = e[0].opt; if (clearTimeout(i.waitWithSwapSlide), 0 < e.find(".processing-revslide").length) return i.waitWithSwapSlide = setTimeout(function() { swapSlide(e) }, 150), !1; var t = e.find(".active-revslide"),
                a = e.find(".next-revslide"),
                n = a.find(".defaultimg"); if ("carousel" !== i.sliderType || i.carousel.fadein || (punchgs.TweenLite.to(i.ul, 1, { opacity: 1 }), i.carousel.fadein = !0), a.index() === t.index() && !0 !== i.onlyPreparedSlide) return a.removeClass("next-revslide"), !1;!0 === i.onlyPreparedSlide && (i.onlyPreparedSlide = !1, jQuery(i.li[0]).addClass("processing-revslide")), a.removeClass("next-revslide").addClass("processing-revslide"), -1 === a.index() && "carousel" === i.sliderType && (a = jQuery(i.li[0])), a.data("slide_on_focus_amount", a.data("slide_on_focus_amount") + 1 || 1), "on" == i.stopLoop && a.index() == i.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({ visibility: "hidden" }), e.trigger("revolution.slide.onstop"), i.noloopanymore = 1), a.index() === i.slideamount - 1 && (i.looptogo = i.looptogo - 1, i.looptogo <= 0 && (i.stopLoop = "on")), i.tonpause = !0, e.trigger("stoptimer"), i.cd = 0, "off" === i.spinner && (i.loader !== undefined ? i.loader.css({ display: "none" }) : i.loadertimer = setTimeout(function() { i.loader !== undefined && i.loader.css({ display: "block" }) }, 50)), loadImages(a, i, 1), _R.preLoadAudio && _R.preLoadAudio(a, i, 1), waitForCurrentImages(a, i, function() { a.find(".rs-background-video-layer").each(function() { var e = jQuery(this);
                    e.hasClass("HasListener") || (e.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(e, i)), 0 == e.find(".rs-fullvideo-cover").length && e.append('<div class="rs-fullvideo-cover"></div>') }), swapSlideProgress(n, e) }) },
        swapSlideProgress = function(e, i) { var t = i.find(".active-revslide"),
                a = i.find(".processing-revslide"),
                n = t.find(".slotholder"),
                r = a.find(".slotholder"),
                o = i[0].opt;
            o.tonpause = !1, o.cd = 0, clearTimeout(o.loadertimer), o.loader !== undefined && o.loader.css({ display: "none" }), _R.setSize(o), _R.slotSize(e, o), _R.manageNavigation && _R.manageNavigation(o); var s = {};
            s.nextslide = a, s.currentslide = t, i.trigger("revolution.slide.onbeforeswap", s), o.transition = 1, o.videoplaying = !1, a.data("delay") != undefined ? (o.cd = 0, o.delay = a.data("delay")) : o.delay = o.origcd, "true" == a.data("ssop") || !0 === a.data("ssop") ? o.ssop = !0 : o.ssop = !1, i.trigger("nulltimer"); var l = t.index(),
                d = a.index();
            o.sdir = d < l ? 1 : 0, "arrow" == o.sc_indicator && (0 == l && d == o.slideamount - 1 && (o.sdir = 1), l == o.slideamount - 1 && 0 == d && (o.sdir = 0)), o.lsdir = o.lsdir === undefined ? o.sdir : o.lsdir, o.dirc = o.lsdir != o.sdir, o.lsdir = o.sdir, t.index() != a.index() && 1 != o.firststart && _R.removeTheCaptions && _R.removeTheCaptions(t, o), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? o.videoplaying = !0 : i.trigger("restarttimer"), a.removeClass("rs-pause-timer-once"); var c; if (o.currentSlide = t.index(), o.nextSlide = a.index(), "carousel" == o.sliderType) c = new punchgs.TimelineLite, _R.prepareCarousel(o, c), letItFree(i, r, n, a, t, c), o.transition = 0, o.firststart = 0;
            else {
                (c = new punchgs.TimelineLite({ onComplete: function() { letItFree(i, r, n, a, t, c) } })).add(punchgs.TweenLite.set(r.find(".defaultimg"), { opacity: 0 })), c.pause(), _R.animateTheCaptions && _R.animateTheCaptions({ slide: a, opt: o, preset: !0 }), 1 == o.firststart && (punchgs.TweenLite.set(t, { autoAlpha: 0 }), o.firststart = 0), punchgs.TweenLite.set(t, { zIndex: 18 }), punchgs.TweenLite.set(a, { autoAlpha: 0, zIndex: 20 }), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != undefined && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == undefined && a.data("transition", "random"), 0; var u = a.data("transition") !== undefined ? a.data("transition").split(",") : "fade",
                    p = a.data("nexttransid") == undefined ? -1 : a.data("nexttransid"); "on" == a.data("randomtransition") ? p = Math.round(Math.random() * u.length) : p += 1, p == u.length && (p = 0), a.data("nexttransid", p); var f = u[p];
                o.ie && ("boxfade" == f && (f = "boxslide"), "slotfade-vertical" == f && (f = "slotzoom-vertical"), "slotfade-horizontal" == f && (f = "slotzoom-horizontal")), _R.isIE(8) && (f = 11), c = _R.animateSlide(0, f, i, a, t, r, n, c), "on" == r.data("kenburns") && (_R.startKenBurn(r, o), c.add(punchgs.TweenLite.set(r, { autoAlpha: 0 }))), c.pause() }
            _R.scrollHandling && (_R.scrollHandling(o, !0, 0), c.eventCallback("onUpdate", function() { _R.scrollHandling(o, !0, 0) })), "off" != o.parallax.type && o.parallax.firstgo == undefined && _R.scrollHandling && (o.parallax.firstgo = !0, o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0), setTimeout(function() { o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0) }, 210), setTimeout(function() { o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0) }, 420)), _R.animateTheCaptions ? "carousel" === o.sliderType && "on" === o.carousel.showLayersAllTime ? (jQuery.each(o.li, function(e) { o.carousel.allLayersStarted ? _R.animateTheCaptions({ slide: jQuery(o.li[e]), opt: o, recall: !0 }) : o.li[e] === a ? _R.animateTheCaptions({ slide: jQuery(o.li[e]), maintimeline: c, opt: o, startslideanimat: 0 }) : _R.animateTheCaptions({ slide: jQuery(o.li[e]), opt: o, startslideanimat: 0 }) }), o.carousel.allLayersStarted = !0) : _R.animateTheCaptions({ slide: a, opt: o, maintimeline: c, startslideanimat: 0 }) : c != undefined && setTimeout(function() { c.resume() }, 30), punchgs.TweenLite.to(a, .001, { autoAlpha: 1 }) },
        letItFree = function(e, i, t, a, n, r) { var o = e[0].opt; "carousel" === o.sliderType || (o.removePrepare = 0, punchgs.TweenLite.to(i.find(".defaultimg"), .001, { zIndex: 20, autoAlpha: 1, onComplete: function() { removeSlots(e, o, a, 1) } }), a.index() != n.index() && punchgs.TweenLite.to(n, .2, { zIndex: 18, autoAlpha: 0, onComplete: function() { removeSlots(e, o, n, 1) } })), e.find(".active-revslide").removeClass("active-revslide"), e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), o.act = a.index(), o.c.attr("data-slideactive", e.find(".active-revslide").data("index")), "scroll" != o.parallax.type && "scroll+mouse" != o.parallax.type && "mouse+scroll" != o.parallax.type || (o.lastscrolltop = -999, _R.scrollHandling(o)), r.clear(), t.data("kbtl") != undefined && (t.data("kbtl").reverse(), t.data("kbtl").timeScale(25)), "on" == i.data("kenburns") && (i.data("kbtl") != undefined ? (i.data("kbtl").timeScale(1), i.data("kbtl").play()) : _R.startKenBurn(i, o)), a.find(".rs-background-video-layer").each(function(e) { if (_ISM && !o.fallbacks.allowHTML5AutoPlayOnAndroid) return !1; var i = jQuery(this);
                _R.resetVideo(i, o, !1, !0), punchgs.TweenLite.fromTo(i, 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, delay: .2, onComplete: function() { _R.animcompleted && _R.animcompleted(i, o) } }) }), n.find(".rs-background-video-layer").each(function(e) { if (_ISM) return !1; var i = jQuery(this);
                _R.stopVideo && (_R.resetVideo(i, o), _R.stopVideo(i, o)), punchgs.TweenLite.to(i, 1, { autoAlpha: 0, ease: punchgs.Power3.easeInOut, delay: .2 }) }); var s = {}; if (s.slideIndex = a.index() + 1, s.slideLIIndex = a.index(), s.slide = a, s.currentslide = a, s.prevslide = n, o.last_shown_slide = n.index(), e.trigger("revolution.slide.onchange", s), e.trigger("revolution.slide.onafterswap", s), o.startWithSlide !== undefined && "done" !== o.startWithSlide && "carousel" === o.sliderType) { for (var l = o.startWithSlide, d = 0; d <= o.li.length - 1; d++) { jQuery(o.li[d]).data("originalindex") === o.startWithSlide && (l = d) }
                0 !== l && _R.callingNewSlide(o.c, l), o.startWithSlide = "done" }
            o.duringslidechange = !1; var c = n.data("slide_on_focus_amount"),
                u = n.data("hideafterloop");
            0 != u && u <= c && o.c.revremoveslide(n.index()); var p = -1 === o.nextSlide || o.nextSlide === undefined ? 0 : o.nextSlide;
            o.rowzones != undefined && (p = p > o.rowzones.length ? o.rowzones.length : p), o.rowzones != undefined && 0 < o.rowzones.length && o.rowzones[p] != undefined && 0 <= p && p <= o.rowzones.length && 0 < o.rowzones[p].length && _R.setSize(o) },
        removeAllListeners = function(e, i) { e.children().each(function() { try { jQuery(this).die("click") } catch (e) {} try { jQuery(this).die("mouseenter") } catch (e) {} try { jQuery(this).die("mouseleave") } catch (e) {} try { jQuery(this).unbind("hover") } catch (e) {} }); try { e.die("click", "mouseenter", "mouseleave") } catch (e) {}
            clearInterval(i.cdint), e = null },
        countDown = function(e, i) { i.cd = 0, i.loop = 0, i.stopAfterLoops != undefined && -1 < i.stopAfterLoops ? i.looptogo = i.stopAfterLoops : i.looptogo = 9999999, i.stopAtSlide != undefined && -1 < i.stopAtSlide ? i.lastslidetoshow = i.stopAtSlide : i.lastslidetoshow = 999, i.stopLoop = "off", 0 == i.looptogo && (i.stopLoop = "on"); var t = e.find(".tp-bannertimer");
            e.on("stoptimer", function() { var e = jQuery(this).find(".tp-bannertimer");
                e[0].tween.pause(), "on" == i.disableProgressBar && e.css({ visibility: "hidden" }), i.sliderstatus = "paused", _R.unToggleState(i.slidertoggledby) }), e.on("starttimer", function() { i.forcepause_viatoggle || (1 != i.conthover && 1 != i.videoplaying && i.width > i.hideSliderAtLimit && 1 != i.tonpause && 1 != i.overnav && 1 != i.ssop && (1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || (t.css({ visibility: "visible" }), t[0].tween.resume(), i.sliderstatus = "playing")), "on" == i.disableProgressBar && t.css({ visibility: "hidden" }), _R.toggleState(i.slidertoggledby)) }), e.on("restarttimer", function() { if (!i.forcepause_viatoggle) { var e = jQuery(this).find(".tp-bannertimer"); if (i.mouseoncontainer && "on" == i.navigation.onHoverStop && !_ISM) return !1;
                    1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || 1 == i.ssop || (e.css({ visibility: "visible" }), e[0].tween.kill(), e[0].tween = punchgs.TweenLite.fromTo(e, i.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: a, delay: 1 }), i.sliderstatus = "playing"), "on" == i.disableProgressBar && e.css({ visibility: "hidden" }), _R.toggleState(i.slidertoggledby) } }), e.on("nulltimer", function() { t[0].tween.kill(), t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: a, delay: 1 }), t[0].tween.pause(0), "on" == i.disableProgressBar && t.css({ visibility: "hidden" }), i.sliderstatus = "paused" }); var a = function() { 0 == jQuery("body").find(e).length && (removeAllListeners(e, i), clearInterval(i.cdint)), e.trigger("revolution.slide.slideatend"), 1 == e.data("conthover-changed") && (i.conthover = e.data("conthover"), e.data("conthover-changed", 0)), _R.callingNewSlide(e, 1) };
            t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: a, delay: 1 }), 1 < i.slideamount && (0 != i.stopAfterLoops || 1 != i.stopAtSlide) ? e.trigger("starttimer") : (i.noloopanymore = 1, e.trigger("nulltimer")), e.on("tp-mouseenter", function() { i.mouseoncontainer = !0, "on" != i.navigation.onHoverStop || _ISM || (e.trigger("stoptimer"), e.trigger("revolution.slide.onpause")) }), e.on("tp-mouseleft", function() { i.mouseoncontainer = !1, 1 != e.data("conthover") && "on" == i.navigation.onHoverStop && (1 == i.viewPort.enable && i.inviewport || 0 == i.viewPort.enable) && (e.trigger("revolution.slide.onresume"), e.trigger("starttimer")) }) },
        vis = function() { var i, t, e = { hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange" }; for (i in e)
                if (i in document) { t = e[i]; break }
            return function(e) { return e && document.addEventListener(t, e, { pasive: !0 }), !document[i] } }(),
        restartOnFocus = function() { jQuery(".rev_redraw_on_blurfocus").each(function() { var e = jQuery(this)[0].opt; if (e == undefined || e.c == undefined || 0 === e.c.length) return !1;
                1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() { "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume() })) }) },
        lastStatBlur = function() { jQuery(".rev_redraw_on_blurfocus").each(function() { var e = jQuery(this)[0].opt;
                e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause(); var i = e.c.find(".active-revslide .slotholder"),
                    t = e.c.find(".processing-revslide .slotholder"); "on" == t.data("kenburns") && _R.stopKenBurn(t, e), "on" == i.data("kenburns") && _R.stopKenBurn(i, e) }) },
        tabBlurringCheck = function() { var e = document.documentMode === undefined,
                i = window.chrome;
            1 !== jQuery("body").data("revslider_focus_blur_listener") && (jQuery("body").data("revslider_focus_blur_listener", 1), e && !i ? jQuery(window).on("focusin", function() { restartOnFocus() }).on("focusout", function() { lastStatBlur() }) : window.addEventListener ? (window.addEventListener("focus", function(e) { restartOnFocus() }, { capture: !1, passive: !0 }), window.addEventListener("blur", function(e) { lastStatBlur() }, { capture: !1, passive: !0 })) : (window.attachEvent("focus", function(e) { restartOnFocus() }), window.attachEvent("blur", function(e) { lastStatBlur() }))) },
        getUrlVars = function(e) { for (var i, t = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), i = a[n].split("="), t.push(i[0]), t[i[0]] = i[1]; return t } }(jQuery);
jQuery(window).load(function() {
    jQuery('#wptime-plugin-preloader').delay(250).fadeOut("slow");
    setTimeout(wptime_plugin_remove_preloader, 2000);

    function wptime_plugin_remove_preloader() {
        jQuery('#wptime-plugin-preloader').remove();
    }
});;
(function() {
    'use strict';
    var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    var supportTransform = function() {
        var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
        var div = document.createElement('div');
        for (var i = 0; i < prefixes.length; i++) {
            if (div && div.style[prefixes[i]] !== undefined) {
                return prefixes[i];
            }
        }
        return false;
    }();
    var ua = navigator.userAgent;
    var isAndroid = ua.toLowerCase().indexOf('android') > -1;
    var isIOs = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        setTimeout(callback, 1000 / 60);
    };

    function addEventListener(el, eventName, handler) {
        el.addEventListener(eventName, handler);
    }
    var wndW = void 0;
    var wndH = void 0;
    var wndY = void 0;
    var forceResizeParallax = false;

    function updateWndVars(e) {
        wndW = window.innerWidth || document.documentElement.clientWidth;
        wndH = window.innerHeight || document.documentElement.clientHeight;
        if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' && (e.type === 'load' || e.type === 'DOMContentLoaded')) {
            forceResizeParallax = true;
        }
    }
    updateWndVars();
    addEventListener(window, 'resize', updateWndVars);
    addEventListener(window, 'orientationchange', updateWndVars);
    addEventListener(window, 'load', updateWndVars);
    addEventListener(window, 'DOMContentLoaded', updateWndVars);
    var jarallaxList = [];
    var oldPageData = false;

    function updateParallax() {
        if (!jarallaxList.length) {
            return;
        }
        if (window.pageYOffset !== undefined) {
            wndY = window.pageYOffset;
        } else {
            wndY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
        }
        var isResized = forceResizeParallax || !oldPageData || oldPageData.width !== wndW || oldPageData.height !== wndH;
        var isScrolled = isResized || !oldPageData || oldPageData.y !== wndY;
        forceResizeParallax = false;
        if (isResized || isScrolled) {
            jarallaxList.forEach(function(item) {
                if (isResized) {
                    item.onResize();
                }
                if (isScrolled) {
                    item.onScroll();
                }
            });
            oldPageData = {
                width: wndW,
                height: wndH,
                y: wndY
            };
        }
        rAF(updateParallax);
    }
    var instanceID = 0;
    var Jarallax = function() {
        function Jarallax(item, userOptions) {
            _classCallCheck(this, Jarallax);
            var self = this;
            self.instanceID = instanceID++;
            self.$item = item;
            self.defaults = {
                type: 'scroll',
                speed: 0.5,
                imgSrc: null,
                imgElement: '.jarallax-img',
                imgSize: 'cover',
                imgPosition: '50% 50%',
                imgRepeat: 'no-repeat',
                keepImg: false,
                elementInViewport: null,
                zIndex: -100,
                noAndroid: false,
                noIos: false,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoPlayOnlyVisible: true,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            var deprecatedDataAttribute = self.$item.getAttribute('data-jarallax');
            var oldDataOptions = JSON.parse(deprecatedDataAttribute || '{}');
            if (deprecatedDataAttribute) {
                console.warn('Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53');
            }
            var dataOptions = self.$item.dataset || {};
            var pureDataOptions = {};
            Object.keys(dataOptions).forEach(function(key) {
                var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
                if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
                    pureDataOptions[loweCaseOption] = dataOptions[key];
                }
            });
            self.options = self.extend({}, self.defaults, oldDataOptions, pureDataOptions, userOptions);
            self.pureOptions = self.extend({}, self.options);
            Object.keys(self.options).forEach(function(key) {
                if (self.options[key] === 'true') {
                    self.options[key] = true;
                } else if (self.options[key] === 'false') {
                    self.options[key] = false;
                }
            });
            self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
            var elementInVP = self.options.elementInViewport;
            if (elementInVP && (typeof elementInVP === 'undefined' ? 'undefined' : _typeof(elementInVP)) === 'object' && typeof elementInVP.length !== 'undefined') {
                elementInVP = elementInVP[0];
            }
            if (!(elementInVP instanceof Element)) {
                elementInVP = null;
            }
            self.options.elementInViewport = elementInVP;
            self.image = {
                src: self.options.imgSrc || null,
                $container: null,
                useImgTag: false,
                position: isAndroid || isIOs ? 'absolute' : 'fixed'
            };
            if (self.initImg() && self.canInitParallax()) {
                self.init();
            }
        }
        _createClass(Jarallax, [{
            key: 'css',
            value: function css(el, styles) {
                if (typeof styles === 'string') {
                    return window.getComputedStyle(el).getPropertyValue(styles);
                }
                if (styles.transform && supportTransform) {
                    styles[supportTransform] = styles.transform;
                }
                Object.keys(styles).forEach(function(key) {
                    el.style[key] = styles[key];
                });
                return el;
            }
        }, {
            key: 'extend',
            value: function extend(out) {
                var _arguments = arguments;
                out = out || {};
                Object.keys(arguments).forEach(function(i) {
                    if (!_arguments[i]) {
                        return;
                    }
                    Object.keys(_arguments[i]).forEach(function(key) {
                        out[key] = _arguments[i][key];
                    });
                });
                return out;
            }
        }, {
            key: 'getWindowData',
            value: function getWindowData() {
                return {
                    width: wndW,
                    height: wndH,
                    y: wndY
                };
            }
        }, {
            key: 'initImg',
            value: function initImg() {
                var self = this;
                var $imgElement = self.options.imgElement;
                if ($imgElement && typeof $imgElement === 'string') {
                    $imgElement = self.$item.querySelector($imgElement);
                }
                if (!($imgElement instanceof Element)) {
                    $imgElement = null;
                }
                if ($imgElement) {
                    if (self.options.keepImg) {
                        self.image.$item = $imgElement.cloneNode(true);
                    } else {
                        self.image.$item = $imgElement;
                        self.image.$itemParent = $imgElement.parentNode;
                    }
                    self.image.useImgTag = true;
                }
                if (self.image.$item) {
                    return true;
                }
                if (self.image.src === null) {
                    self.image.src = self.css(self.$item, 'background-image').replace(/^url\(['"]?/g, '').replace(/['"]?\)$/g, '');
                }
                return !(!self.image.src || self.image.src === 'none');
            }
        }, {
            key: 'canInitParallax',
            value: function canInitParallax() {
                return supportTransform && !(isAndroid && this.options.noAndroid) && !(isIOs && this.options.noIos);
            }
        }, {
            key: 'init',
            value: function init() {
                var self = this;
                var containerStyles = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    pointerEvents: 'none'
                };
                var imageStyles = {};
                if (!self.options.keepImg) {
                    var curStyle = self.$item.getAttribute('style');
                    if (curStyle) {
                        self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                    }
                    if (self.image.useImgTag) {
                        var curImgStyle = self.image.$item.getAttribute('style');
                        if (curImgStyle) {
                            self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                        }
                    }
                }
                if (self.css(self.$item, 'position') === 'static') {
                    self.css(self.$item, {
                        position: 'relative'
                    });
                }
                if (self.css(self.$item, 'z-index') === 'auto') {
                    self.css(self.$item, {
                        zIndex: 0
                    });
                }
                self.image.$container = document.createElement('div');
                self.css(self.image.$container, containerStyles);
                self.css(self.image.$container, {
                    'z-index': self.options.zIndex
                });
                self.image.$container.setAttribute('id', 'jarallax-container-' + self.instanceID);
                self.$item.appendChild(self.image.$container);
                if (self.image.useImgTag) {
                    imageStyles = self.extend({
                        'object-fit': self.options.imgSize,
                        'object-position': self.options.imgPosition,
                        'font-family': 'object-fit: ' + self.options.imgSize + '; object-position: ' + self.options.imgPosition + ';',
                        'max-width': 'none'
                    }, containerStyles, imageStyles);
                } else {
                    self.image.$item = document.createElement('div');
                    imageStyles = self.extend({
                        'background-position': self.options.imgPosition,
                        'background-size': self.options.imgSize,
                        'background-repeat': self.options.imgRepeat,
                        'background-image': 'url("' + self.image.src + '")'
                    }, containerStyles, imageStyles);
                }
                if (self.options.type === 'opacity' || self.options.type === 'scale' || self.options.type === 'scale-opacity' || self.options.speed === 1) {
                    self.image.position = 'absolute';
                }
                if (self.image.position === 'fixed') {
                    var parentWithTransform = 0;
                    var $itemParents = self.$item;
                    while ($itemParents !== null && $itemParents !== document && parentWithTransform === 0) {
                        var parentTransform = self.css($itemParents, '-webkit-transform') || self.css($itemParents, '-moz-transform') || self.css($itemParents, 'transform');
                        if (parentTransform && parentTransform !== 'none') {
                            parentWithTransform = 1;
                            self.image.position = 'absolute';
                        }
                        $itemParents = $itemParents.parentNode;
                    }
                }
                imageStyles.position = self.image.position;
                self.css(self.image.$item, imageStyles);
                self.image.$container.appendChild(self.image.$item);
                self.coverImage();
                self.clipContainer();
                self.onScroll(true);
                if (self.options.onInit) {
                    self.options.onInit.call(self);
                }
                if (self.css(self.$item, 'background-image') !== 'none') {
                    self.css(self.$item, {
                        'background-image': 'none'
                    });
                }
                self.addToParallaxList();
            }
        }, {
            key: 'addToParallaxList',
            value: function addToParallaxList() {
                jarallaxList.push(this);
                if (jarallaxList.length === 1) {
                    updateParallax();
                }
            }
        }, {
            key: 'removeFromParallaxList',
            value: function removeFromParallaxList() {
                var self = this;
                jarallaxList.forEach(function(item, key) {
                    if (item.instanceID === self.instanceID) {
                        jarallaxList.splice(key, 1);
                    }
                });
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                var self = this;
                self.removeFromParallaxList();
                var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                self.$item.removeAttribute('data-jarallax-original-styles');
                if (!originalStylesTag) {
                    self.$item.removeAttribute('style');
                } else {
                    self.$item.setAttribute('style', originalStylesTag);
                }
                if (self.image.useImgTag) {
                    var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
                    self.image.$item.removeAttribute('data-jarallax-original-styles');
                    if (!originalStylesImgTag) {
                        self.image.$item.removeAttribute('style');
                    } else {
                        self.image.$item.setAttribute('style', originalStylesTag);
                    }
                    if (self.image.$itemParent) {
                        self.image.$itemParent.appendChild(self.image.$item);
                    }
                }
                if (self.$clipStyles) {
                    self.$clipStyles.parentNode.removeChild(self.$clipStyles);
                }
                if (self.image.$container) {
                    self.image.$container.parentNode.removeChild(self.image.$container);
                }
                if (self.options.onDestroy) {
                    self.options.onDestroy.call(self);
                }
                delete self.$item.jarallax;
            }
        }, {
            key: 'clipContainer',
            value: function clipContainer() {
                if (this.image.position !== 'fixed') {
                    return;
                }
                var self = this;
                var rect = self.image.$container.getBoundingClientRect();
                var width = rect.width;
                var height = rect.height;
                if (!self.$clipStyles) {
                    self.$clipStyles = document.createElement('style');
                    self.$clipStyles.setAttribute('type', 'text/css');
                    self.$clipStyles.setAttribute('id', 'jarallax-clip-' + self.instanceID);
                    var head = document.head || document.getElementsByTagName('head')[0];
                    head.appendChild(self.$clipStyles);
                }
                var styles = '#jarallax-container-' + self.instanceID + ' {\n           clip: rect(0 ' + width + 'px ' + height + 'px 0);\n           clip: rect(0, ' + width + 'px, ' + height + 'px, 0);\n        }';
                if (self.$clipStyles.styleSheet) {
                    self.$clipStyles.styleSheet.cssText = styles;
                } else {
                    self.$clipStyles.innerHTML = styles;
                }
            }
        }, {
            key: 'coverImage',
            value: function coverImage() {
                var self = this;
                var rect = self.image.$container.getBoundingClientRect();
                var contH = rect.height;
                var speed = self.options.speed;
                var isScroll = self.options.type === 'scroll' || self.options.type === 'scroll-opacity';
                var scrollDist = 0;
                var resultH = contH;
                var resultMT = 0;
                if (isScroll) {
                    if (speed < 0) {
                        scrollDist = speed * Math.max(contH, wndH);
                    } else {
                        scrollDist = speed * (contH + wndH);
                    }
                    if (speed > 1) {
                        resultH = Math.abs(scrollDist - wndH);
                    } else if (speed < 0) {
                        resultH = scrollDist / speed + Math.abs(scrollDist);
                    } else {
                        resultH += Math.abs(wndH - contH) * (1 - speed);
                    }
                    scrollDist /= 2;
                }
                self.parallaxScrollDistance = scrollDist;
                if (isScroll) {
                    resultMT = (wndH - resultH) / 2;
                } else {
                    resultMT = (contH - resultH) / 2;
                }
                self.css(self.image.$item, {
                    height: resultH + 'px',
                    marginTop: resultMT + 'px',
                    left: self.image.position === 'fixed' ? rect.left + 'px' : '0',
                    width: rect.width + 'px'
                });
                if (self.options.onCoverImage) {
                    self.options.onCoverImage.call(self);
                }
                return {
                    image: {
                        height: resultH,
                        marginTop: resultMT
                    },
                    container: rect
                };
            }
        }, {
            key: 'isVisible',
            value: function isVisible() {
                return this.isElementInViewport || false;
            }
        }, {
            key: 'onScroll',
            value: function onScroll(force) {
                var self = this;
                var rect = self.$item.getBoundingClientRect();
                var contT = rect.top;
                var contH = rect.height;
                var styles = {};
                var viewportRect = rect;
                if (self.options.elementInViewport) {
                    viewportRect = self.options.elementInViewport.getBoundingClientRect();
                }
                self.isElementInViewport = viewportRect.bottom >= 0 && viewportRect.right >= 0 && viewportRect.top <= wndH && viewportRect.left <= wndW;
                if (force ? false : !self.isElementInViewport) {
                    return;
                }
                var beforeTop = Math.max(0, contT);
                var beforeTopEnd = Math.max(0, contH + contT);
                var afterTop = Math.max(0, -contT);
                var beforeBottom = Math.max(0, contT + contH - wndH);
                var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
                var afterBottom = Math.max(0, -contT + wndH - contH);
                var fromViewportCenter = 1 - 2 * (wndH - contT) / (wndH + contH);
                var visiblePercent = 1;
                if (contH < wndH) {
                    visiblePercent = 1 - (afterTop || beforeBottom) / contH;
                } else if (beforeTopEnd <= wndH) {
                    visiblePercent = beforeTopEnd / wndH;
                } else if (beforeBottomEnd <= wndH) {
                    visiblePercent = beforeBottomEnd / wndH;
                }
                if (self.options.type === 'opacity' || self.options.type === 'scale-opacity' || self.options.type === 'scroll-opacity') {
                    styles.transform = 'translate3d(0,0,0)';
                    styles.opacity = visiblePercent;
                }
                if (self.options.type === 'scale' || self.options.type === 'scale-opacity') {
                    var scale = 1;
                    if (self.options.speed < 0) {
                        scale -= self.options.speed * visiblePercent;
                    } else {
                        scale += self.options.speed * (1 - visiblePercent);
                    }
                    styles.transform = 'scale(' + scale + ') translate3d(0,0,0)';
                }
                if (self.options.type === 'scroll' || self.options.type === 'scroll-opacity') {
                    var positionY = self.parallaxScrollDistance * fromViewportCenter;
                    if (self.image.position === 'absolute') {
                        positionY -= contT;
                    }
                    styles.transform = 'translate3d(0,' + positionY + 'px,0)';
                }
                self.css(self.image.$item, styles);
                if (self.options.onScroll) {
                    self.options.onScroll.call(self, {
                        section: rect,
                        beforeTop: beforeTop,
                        beforeTopEnd: beforeTopEnd,
                        afterTop: afterTop,
                        beforeBottom: beforeBottom,
                        beforeBottomEnd: beforeBottomEnd,
                        afterBottom: afterBottom,
                        visiblePercent: visiblePercent,
                        fromViewportCenter: fromViewportCenter
                    });
                }
            }
        }, {
            key: 'onResize',
            value: function onResize() {
                this.coverImage();
                this.clipContainer();
            }
        }]);
        return Jarallax;
    }();
    var plugin = function plugin(items) {
        if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? items instanceof HTMLElement : items && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
            items = [items];
        }
        var options = arguments[1];
        var args = Array.prototype.slice.call(arguments, 2);
        var len = items.length;
        var k = 0;
        var ret = void 0;
        for (k; k < len; k++) {
            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' || typeof options === 'undefined') {
                if (!items[k].jarallax) {
                    items[k].jarallax = new Jarallax(items[k], options);
                }
            } else if (items[k].jarallax) {
                ret = items[k].jarallax[options].apply(items[k].jarallax, args);
            }
            if (typeof ret !== 'undefined') {
                return ret;
            }
        }
        return items;
    };
    plugin.constructor = Jarallax;
    var oldPlugin = window.jarallax;
    window.jarallax = plugin;
    window.jarallax.noConflict = function() {
        window.jarallax = oldPlugin;
        return this;
    };
    if (typeof jQuery !== 'undefined') {
        var jQueryPlugin = function jQueryPlugin() {
            var args = arguments || [];
            Array.prototype.unshift.call(args, this);
            var res = plugin.apply(window, args);
            return (typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object' ? res : this;
        };
        jQueryPlugin.constructor = Jarallax;
        var oldJqPlugin = jQuery.fn.jarallax;
        jQuery.fn.jarallax = jQueryPlugin;
        jQuery.fn.jarallax.noConflict = function() {
            jQuery.fn.jarallax = oldJqPlugin;
            return this;
        };
    }
    addEventListener(window, 'DOMContentLoaded', function() {
        plugin(document.querySelectorAll('[data-jarallax]'));
    });
}());;
(function($, window, document, undefined) {
    function Owl(element, options) {
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': ['busy'],
                'dragging': ['interacting']
            }
        };
        $.each(['onResize', 'onThrottledResize'], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));
        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));
        $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));
        this.setup();
        this.initialize();
    }
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: 'swing',
        info: false,
        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',
        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };
    Owl.Plugins = {};
    Owl.Workers = [{
        filter: ['width', 'settings'],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };
            !grid && this.$stage.children().css(css);
            cache.css = css;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];
            cache.items = {
                merge: false,
                width: width
            };
            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
                cache.items.merge = merge > 1 || cache.items.merge;
                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }
            this._widths = widths;
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';
            repeat /= 2;
            while (repeat--) {
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            }
            this._clones = clones;
            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];
            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }
            this._coordinates = coordinates;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };
            this.$stage.css(css);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();
            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: ['items'],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: ['position'],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [],
                i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) ||
                    (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }
            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
            if (this.settings.center) {
                this.$stage.children('.center').removeClass('center');
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    }];
    Owl.prototype.initialize = function() {
        this.enter('initializing');
        this.trigger('initialize');
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
            .wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        if (this.$element.is(':visible')) {
            this.refresh();
        } else {
            this.invalidate('width');
        }
        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave('initializing');
        this.trigger('initialized');
    };
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }
        this.trigger('change', { property: { name: 'settings', value: settings } });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    };
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', { content: item });
        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item)
        }
        this.trigger('prepared', { content: event.data });
        return event.data;
    };
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) { return this[p] }, this._invalidated),
            cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this._invalidated = {};
        !this.is('valid') && this.enter('valid');
    };
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    Owl.prototype.refresh = function() {
        this.enter('refreshing');
        this.trigger('refresh');
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave('refreshing');
        this.trigger('refreshed');
    };
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }
        if (this._width === this.$element.width()) {
            return false;
        }
        if (!this.$element.is(':visible')) {
            return false;
        }
        this.enter('resizing');
        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }
        this.invalidate('width');
        this.refresh();
        this.leave('resizing');
        this.trigger('resized');
    };
    Owl.prototype.registerEventHandlers = function() {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }
        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }
        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
        }
        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };
    Owl.prototype.onDragStart = function(event) {
        var stage = null;
        if (event.which === 3) {
            return;
        }
        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
                y: stage.top
            };
        }
        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }
        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
        this.speed(0);
        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);
        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }
            event.preventDefault();
            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        if (!this.is('dragging')) {
            return;
        }
        event.preventDefault();
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        this._drag.stage.current = stage;
        this.animate(stage.x);
    };
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
        $(document).off('.owl.core');
        this.$element.removeClass(this.options.grabClass);
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();
            this._drag.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function() { return false; });
            }
        }
        if (!this.is('dragging')) {
            return;
        }
        this.leave('dragging');
        this.trigger('dragged');
    };
    Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function(index, value) {
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value) &&
                    this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;
        this.is('animating') && this.onTransitionEnd();
        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }
        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };
    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });
            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate('position');
            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }
        return this._current;
    };
    Owl.prototype.invalidate = function(part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function(v, i) { return i });
    };
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this.suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this.release(['translate', 'translated']);
    };
    Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;
        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }
        return position;
    };
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };
    Owl.prototype.maximum = function(relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }
        if (relative) {
            maximum -= this._clones.length / 2;
        }
        return Math.max(maximum, 0);
    };
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
    };
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return this._items[position];
    };
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
        if (position === undefined) {
            return $.map(this._clones, function(v, i) { return map(i) });
        }
        return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    };
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }
        coordinate = Math.ceil(coordinate);
        return coordinate;
    };
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }
        this.speed(this.duration(current, position, speed));
        this.current(position);
        if (this.$element.is(':visible')) {
            this.update();
        }
    };
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    Owl.prototype.onTransitionEnd = function(event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }
        this.leave('animating');
        this.trigger('translated');
    };
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn('Can not detect viewport width.');
        }
        return width;
    };
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }
        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }
        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate('items');
    };
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);
        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);
        this.trigger('add', { content: content, position: position });
        content = this.prepare(content);
        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }
        this._items[current] && this.reset(this._items[current].index());
        this.invalidate('items');
        this.trigger('added', { content: content, position: position });
    };
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);
        if (position === undefined) {
            return;
        }
        this.trigger('remove', { content: this._items[position], position: position });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate('items');
        this.trigger('removed', { content: null, position: position });
    };
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function(e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };
    Owl.prototype.destroy = function() {
        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');
        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }
        this.$stage.children('.cloned').remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
                item: { count: this._items.length, index: this.current() }
            },
            handler = $.camelCase($.grep(['on', name, namespace], function(v) { return v })
                .join('-').toLowerCase()
            ),
            event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
                $.extend({ relatedTarget: this }, status, data)
            );
        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });
            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }
        return event;
    };
    Owl.prototype.enter = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }
            this._states.current[name]++;
        }, this));
    };
    Owl.prototype.leave = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--;
        }, this));
    };
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }
            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    };
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    };
    Owl.prototype.pointer = function(event) {
        var result = { x: null, y: null };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
            event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }
        return result;
    };
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
    };
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this),
                data = $this.data('owl.carousel');
            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);
                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function(i, event) {
                    data.register({ type: Owl.Type.Event, name: event });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event]);
                        }
                    }, data));
                });
            }
            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };
    $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var AutoRefresh = function(carousel) {
        this._core = carousel;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };
    AutoRefresh.prototype.watch = function() {
        if (this._interval) {
            return;
        }
        this._visible = this._core.$element.is(':visible');
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };
    AutoRefresh.prototype.refresh = function() {
        if (this._core.$element.is(':visible') === this._visible) {
            return;
        }
        this._visible = !this._visible;
        this._core.$element.toggleClass('owl-hidden', !this._visible);
        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };
    AutoRefresh.prototype.destroy = function() {
        var handler, property;
        window.clearInterval(this._interval);
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Lazy = function(carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }
                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) { this.load(v) }, this);
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    Lazy.Defaults = {
        lazyLoad: false
    };
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }
        $elements.each($.proxy(function(index, element) {
            var $element = $(element),
                image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
            this._core.trigger('load', { element: $element, url: url }, 'lazy');
            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));
        this._loaded.push($item.get(0));
    };
    Lazy.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var AutoHeight = function(carousel) {
        this._core = carousel;
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight &&
                    e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;
        $.each(visible, function(index, item) {
            heights.push($(item).height());
        });
        maxheight = Math.max.apply(null, heights);
        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };
    AutoHeight.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Video = function(carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }
                var $element = $(e.content).find('.owl-video');
                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };
    Video.prototype.fetch = function(target, item) {
        var type = (function() {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo';
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar'
                } else {
                    return 'youtube';
                }
            })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');
        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }
        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };
        item.attr('data-video', url);
        this.thumbnail(target, this._videos[url]);
    };
    Video.prototype.thumbnail = function(target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }
        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html;
        if (this._playing) {
            return;
        }
        this._core.enter('playing');
        this._core.trigger('play', null, 'video');
        item = this._core.items(this._core.relative(item.index()));
        this._core.reset(item.index());
        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
                video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="//player.vimeo.com/video/' + video.id +
                '?autoplay=1" width="' + width + '" height="' + height +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (video.type === 'vzaar') {
            html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
                'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
        }
        $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
        this._playing = item.addClass('owl-video-playing');
    };
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement;
        return element && $(element).parent().hasClass('owl-video-frame');
    };
    Video.prototype.destroy = function() {
        var handler, property;
        this._core.$element.off('click.owl.video');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };
    Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1) {
            return;
        }
        if (!$.support.animation || !$.support.transition) {
            return;
        }
        this.core.speed(0);
        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css({ 'left': left + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }
        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };
    Animate.prototype.clear = function(e) {
        $(e.target).css({ 'left': '' })
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };
    Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Autoplay = function(carousel) {
        this._core = carousel;
        this._timeout = null;
        this._paused = false;
        this._handlers = {
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position') {
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval();
                    }
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };
    Autoplay.prototype.play = function(timeout, speed) {
        this._paused = false;
        if (this._core.is('rotating')) {
            return;
        }
        this._core.enter('rotating');
        this._setAutoPlayInterval();
    };
    Autoplay.prototype._getNextTimeout = function(timeout, speed) {
        if (this._timeout) {
            window.clearTimeout(this._timeout);
        }
        return window.setTimeout($.proxy(function() {
            if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }, this), timeout || this._core.settings.autoplayTimeout);
    };
    Autoplay.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
    };
    Autoplay.prototype.stop = function() {
        if (!this._core.is('rotating')) {
            return;
        }
        window.clearTimeout(this._timeout);
        this._core.leave('rotating');
    };
    Autoplay.prototype.pause = function() {
        if (!this._core.is('rotating')) {
            return;
        }
        this._paused = true;
    };
    Autoplay.prototype.destroy = function() {
        var handler, property;
        this.stop();
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    'use strict';
    var Navigation = function(carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers);
    };
    Navigation.Defaults = {
        nav: false,
        navText: ['prev', 'next'],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: ['owl-prev', 'owl-next'],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };
    Navigation.prototype.initialize = function() {
        var override,
            settings = this._core.settings;
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer) :
            $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.prev(settings.navSpeed);
            }, this));
        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.next(settings.navSpeed);
            }, this));
        if (!settings.dotsData) {
            this._templates = [$('<div>')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML')
            ];
        }
        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) :
            $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
        this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ?
                $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, settings.dotsSpeed);
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    Navigation.prototype.update = function() {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ?
            1 : settings.dotsEach || settings.items;
        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }
        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };
    Navigation.prototype.draw = function() {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }
        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }
            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ?
                1 : settings.dotsEach || settings.items)
        };
    };
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };
    Navigation.prototype.getPosition = function(successor) {
        var position, length,
            settings = this._core.settings;
        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }
        return position;
    };
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };
    Navigation.prototype.to = function(position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    'use strict';
    var Hash = function(carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
                    if (!hash) {
                        return;
                    }
                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null;
                        }).join();
                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }
                    window.location.hash = hash;
                }
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined || position === this._core.current()) {
                return;
            }
            this._core.to(this._core.relative(position), false, true);
        }, this));
    };
    Hash.Defaults = {
        URLhashListener: false
    };
    Hash.prototype.destroy = function() {
        var handler, property;
        $(window).off('hashchange.owl.navigation');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function() {
                return !!test('transform');
            },
            csstransforms3d: function() {
                return !!test('perspective');
            },
            csstransitions: function() {
                return !!test('transition');
            },
            cssanimations: function() {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);
        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });
        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }
    if (tests.csstransitions()) {
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[$.support.transition];
    }
    if (tests.cssanimations()) {
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[$.support.animation];
    }
    if (tests.csstransforms()) {
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }
})(window.Zepto || window.jQuery, window, document);