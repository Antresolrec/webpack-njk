/* eslint-disable */
!(function (e, r) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = r())
    : typeof define === 'function' && define.amd
    ? define([], r)
    : typeof exports === 'object'
    ? (exports.textMaskCore = r())
    : (e.textMaskCore = r());
})(this, () =>
  (function (e) {
    function r(n) {
      if (t[n]) return t[n].exports;
      const o = (t[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
    }
    var t = {};
    return (r.m = e), (r.c = t), (r.p = ''), r(0);
  })([
    function (e, r, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      const o = t(3);
      Object.defineProperty(r, 'conformToMask', {
        enumerable: !0,
        get() {
          return n(o).default;
        },
      });
      const i = t(2);
      Object.defineProperty(r, 'adjustCaretPosition', {
        enumerable: !0,
        get() {
          return n(i).default;
        },
      });
      const a = t(5);
      Object.defineProperty(r, 'createTextMaskInputElement', {
        enumerable: !0,
        get() {
          return n(a).default;
        },
      });
    },
    function (e, r) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.placeholderChar = '_'),
        (r.strFunction = 'function');
    },
    function (e, r) {
      function t(e) {
        const r = e.previousConformedValue;
        const t = void 0 === r ? o : r;
        const i = e.previousPlaceholder;
        const a = void 0 === i ? o : i;
        const u = e.currentCaretPosition;
        const l = void 0 === u ? 0 : u;
        const s = e.conformedValue;
        const f = e.rawValue;
        const d = e.placeholderChar;
        const c = e.placeholder;
        const p = e.indexesOfPipedChars;
        const v = void 0 === p ? n : p;
        const h = e.caretTrapIndexes;
        const m = void 0 === h ? n : h;
        if (l === 0 || !f.length) return 0;
        const y = f.length;
        const g = t.length;
        const b = c.length;
        const C = s.length;
        const P = y - g;
        const k = P > 0;
        const x = g === 0;
        const O = P > 1 && !k && !x;
        if (O) return l;
        const T = k && (t === s || s === c);
        let w = 0;
        let M = void 0;
        let S = void 0;
        if (T) w = l - P;
        else {
          const j = s.toLowerCase();
          const _ = f.toLowerCase();
          const V = _.substr(0, l).split(o);
          const A = V.filter((e) => j.indexOf(e) !== -1);
          S = A[A.length - 1];
          const N = a
            .substr(0, A.length)
            .split(o)
            .filter((e) => e !== d).length;
          const E = c
            .substr(0, A.length)
            .split(o)
            .filter((e) => e !== d).length;
          const F = E !== N;
          const R =
            void 0 !== a[A.length - 1] &&
            void 0 !== c[A.length - 2] &&
            a[A.length - 1] !== d &&
            a[A.length - 1] !== c[A.length - 1] &&
            a[A.length - 1] === c[A.length - 2];
          !k &&
            (F || R) &&
            N > 0 &&
            c.indexOf(S) > -1 &&
            void 0 !== f[l] &&
            ((M = !0), (S = f[l]));
          for (
            let I = v.map((e) => j[e]),
              J = I.filter((e) => e === S).length,
              W = A.filter((e) => e === S).length,
              q = c
                .substr(0, c.indexOf(d))
                .split(o)
                .filter((e, r) => e === S && f[r] !== e).length,
              L = q + W + J + (M ? 1 : 0),
              z = 0,
              B = 0;
            B < C;
            B++
          ) {
            const D = j[B];
            if (((w = B + 1), D === S && z++, z >= L)) break;
          }
        }
        if (k) {
          for (let G = w, H = w; H <= b; H++)
            if (
              (c[H] === d && (G = H),
              c[H] === d || m.indexOf(H) !== -1 || H === b)
            )
              return G;
        } else if (M) {
          for (let K = w - 1; K >= 0; K--)
            if (s[K] === S || m.indexOf(K) !== -1 || K === 0) return K;
        } else
          for (let Q = w; Q >= 0; Q--)
            if (c[Q - 1] === d || m.indexOf(Q) !== -1 || Q === 0) return Q;
      }
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.default = t);
      var n = [];
      var o = '';
    },
    function (e, r, t) {
      function n() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        const t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!(0, i.isArray)(r)) {
          if ((typeof r === 'undefined' ? 'undefined' : o(r)) !== a.strFunction)
            throw new Error(
              'Text-mask:conformToMask; The mask property must be an array.'
            );
          (r = r(e, t)),
            (r = (0, i.processCaretTraps)(r).maskWithoutCaretTraps);
        }
        const n = t.guide;
        const s = void 0 === n || n;
        const f = t.previousConformedValue;
        const d = void 0 === f ? l : f;
        const c = t.placeholderChar;
        const p = void 0 === c ? a.placeholderChar : c;
        const v = t.placeholder;
        const h = void 0 === v ? (0, i.convertMaskToPlaceholder)(r, p) : v;
        const m = t.currentCaretPosition;
        const y = t.keepCharPositions;
        const g = s === !1 && void 0 !== d;
        const b = e.length;
        const C = d.length;
        const P = h.length;
        const k = r.length;
        const x = b - C;
        const O = x > 0;
        const T = m + (O ? -x : 0);
        const w = T + Math.abs(x);
        if (y === !0 && !O) {
          for (var M = l, S = T; S < w; S++) h[S] === p && (M += p);
          e = e.slice(0, T) + M + e.slice(T, b);
        }
        for (
          var j = e
              .split(l)
              .map((e, r) => ({ char: e, isNew: r >= T && r < w })),
            _ = b - 1;
          _ >= 0;
          _--
        ) {
          const V = j[_].char;
          if (V !== p) {
            const A = _ >= T && C === k;
            V === h[A ? _ - x : _] && j.splice(_, 1);
          }
        }
        let N = l;
        let E = !1;
        e: for (let F = 0; F < P; F++) {
          const R = h[F];
          if (R === p) {
            if (j.length > 0)
              for (; j.length > 0; ) {
                const I = j.shift();
                const J = I.char;
                const W = I.isNew;
                if (J === p && g !== !0) {
                  N += p;
                  continue e;
                }
                if (r[F].test(J)) {
                  if (y === !0 && W !== !1 && d !== l && s !== !1 && O) {
                    for (var q = j.length, L = null, z = 0; z < q; z++) {
                      const B = j[z];
                      if (B.char !== p && B.isNew === !1) break;
                      if (B.char === p) {
                        L = z;
                        break;
                      }
                    }
                    L !== null ? ((N += J), j.splice(L, 1)) : F--;
                  } else N += J;
                  continue e;
                }
                E = !0;
              }
            g === !1 && (N += h.substr(F, P));
            break;
          }
          N += R;
        }
        if (g && O === !1) {
          for (var D = null, G = 0; G < N.length; G++) h[G] === p && (D = G);
          N = D !== null ? N.substr(0, D + 1) : l;
        }
        return { conformedValue: N, meta: { someCharsRejected: E } };
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      var o =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      r.default = n;
      var i = t(4);
      var a = t(1);
      var u = [];
      var l = '';
    },
    function (e, r, t) {
      function n() {
        const e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
        const r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : s.placeholderChar;
        if (!o(e))
          throw new Error(
            'Text-mask:convertMaskToPlaceholder; The mask property must be an array.'
          );
        if (e.indexOf(r) !== -1)
          throw new Error(
            `Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n` +
              `The placeholder character that was received is: ${JSON.stringify(
                r
              )}\n\n` +
              `The mask that was received is: ${JSON.stringify(e)}`
          );
        return e.map((e) => (e instanceof RegExp ? r : e)).join('');
      }
      function o(e) {
        return (Array.isArray && Array.isArray(e)) || e instanceof Array;
      }
      function i(e) {
        return typeof e === 'string' || e instanceof String;
      }
      function a(e) {
        return typeof e === 'number' && void 0 === e.length && !isNaN(e);
      }
      function u(e) {
        return typeof e === 'undefined' || e === null;
      }
      function l(e) {
        for (var r = [], t = void 0; (t = e.indexOf(d)), t !== -1; )
          r.push(t), e.splice(t, 1);
        return { maskWithoutCaretTraps: e, indexes: r };
      }
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.convertMaskToPlaceholder = n),
        (r.isArray = o),
        (r.isString = i),
        (r.isNumber = a),
        (r.isNil = u),
        (r.processCaretTraps = l);
      var s = t(1);
      var f = [];
      var d = '[]';
    },
    function (e, r, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e) {
        const r = {
          previousConformedValue: void 0,
          previousPlaceholder: void 0,
        };
        return {
          state: r,
          update(t) {
            const n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e;
            const o = n.inputElement;
            let s = n.mask;
            const d = n.guide;
            let m = n.pipe;
            const g = n.placeholderChar;
            const b = void 0 === g ? v.placeholderChar : g;
            const C = n.keepCharPositions;
            const P = void 0 !== C && C;
            const k = n.showMask;
            const x = void 0 !== k && k;
            if (
              (typeof t === 'undefined' && (t = o.value),
              t !== r.previousConformedValue)
            ) {
              (typeof s === 'undefined' ? 'undefined' : l(s)) === y &&
                void 0 !== s.pipe &&
                void 0 !== s.mask &&
                ((m = s.pipe), (s = s.mask));
              let O = void 0;
              let T = void 0;
              if (
                (s instanceof Array &&
                  (O = (0, p.convertMaskToPlaceholder)(s, b)),
                s !== !1)
              ) {
                const w = a(t);
                const M = o.selectionEnd;
                const S = r.previousConformedValue;
                const j = r.previousPlaceholder;
                let _ = void 0;
                if (
                  (typeof s === 'undefined' ? 'undefined' : l(s)) ===
                  v.strFunction
                ) {
                  if (
                    ((T = s(w, {
                      currentCaretPosition: M,
                      previousConformedValue: S,
                      placeholderChar: b,
                    })),
                    T === !1)
                  )
                    return;
                  const V = (0, p.processCaretTraps)(T);
                  const A = V.maskWithoutCaretTraps;
                  const N = V.indexes;
                  (T = A), (_ = N), (O = (0, p.convertMaskToPlaceholder)(T, b));
                } else T = s;
                const E = {
                  previousConformedValue: S,
                  guide: d,
                  placeholderChar: b,
                  pipe: m,
                  placeholder: O,
                  currentCaretPosition: M,
                  keepCharPositions: P,
                };
                const F = (0, c.default)(w, T, E);
                const R = F.conformedValue;
                const I =
                  (typeof m === 'undefined' ? 'undefined' : l(m)) ===
                  v.strFunction;
                let J = {};
                I &&
                  ((J = m(R, { rawValue: w, ...E })),
                  J === !1
                    ? (J = { value: S, rejected: !0 })
                    : (0, p.isString)(J) && (J = { value: J }));
                const W = I ? J.value : R;
                const q = (0, f.default)({
                  previousConformedValue: S,
                  previousPlaceholder: j,
                  conformedValue: W,
                  placeholder: O,
                  rawValue: w,
                  currentCaretPosition: M,
                  placeholderChar: b,
                  indexesOfPipedChars: J.indexesOfPipedChars,
                  caretTrapIndexes: _,
                });
                const L = W === O && q === 0;
                const z = x ? O : h;
                const B = L ? z : W;
                (r.previousConformedValue = B),
                  (r.previousPlaceholder = O),
                  o.value !== B && ((o.value = B), i(o, q));
              }
            }
          },
        };
      }
      function i(e, r) {
        document.activeElement === e &&
          (g
            ? b(() => e.setSelectionRange(r, r, m), 0)
            : e.setSelectionRange(r, r, m));
      }
      function a(e) {
        if ((0, p.isString)(e)) return e;
        if ((0, p.isNumber)(e)) return String(e);
        if (void 0 === e || e === null) return h;
        throw new Error(
          `The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n ${JSON.stringify(
            e
          )}`
        );
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      const u =
        Object.assign ||
        function (e) {
          for (let r = 1; r < arguments.length; r++) {
            const t = arguments[r];
            for (const n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        };
      var l =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol === 'function' &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      r.default = o;
      const s = t(2);
      var f = n(s);
      const d = t(3);
      var c = n(d);
      var p = t(4);
      var v = t(1);
      var h = '';
      var m = 'none';
      var y = 'object';
      var g =
        typeof navigator !== 'undefined' &&
        /Android/i.test(navigator.userAgent);
      var b =
        typeof requestAnimationFrame !== 'undefined'
          ? requestAnimationFrame
          : setTimeout;
    },
  ])
);
/* eslint-enable */
