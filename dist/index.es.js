var xi = Object.defineProperty;
var Ei = (e, t, r) => t in e ? xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Tt = (e, t, r) => Ei(e, typeof t != "symbol" ? t + "" : t, r);
import * as M from "react";
import nt, { forwardRef as wi, useContext as Ti, Children as Ri, isValidElement as Jt, cloneElement as Qt } from "react";
function Oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lr = { exports: {} }, Rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function $i() {
  if (kn) return Rt;
  kn = 1;
  var e = nt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, d) {
    var m, p = {}, y = null, x = null;
    d !== void 0 && (y = "" + d), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (m in u) n.call(u, m) && !i.hasOwnProperty(m) && (p[m] = u[m]);
    if (c && c.defaultProps) for (m in u = c.defaultProps, u) p[m] === void 0 && (p[m] = u[m]);
    return { $$typeof: t, type: c, key: y, ref: x, props: p, _owner: o.current };
  }
  return Rt.Fragment = r, Rt.jsx = a, Rt.jsxs = a, Rt;
}
var Ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function _i() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function h(l) {
      if (l === null || typeof l != "object")
        return null;
      var w = S && l[S] || l[g];
      return typeof w == "function" ? w : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(l) {
      {
        for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), Y = 1; Y < w; Y++)
          P[Y - 1] = arguments[Y];
        T("error", l, P);
      }
    }
    function T(l, w, P) {
      {
        var Y = E.ReactDebugCurrentFrame, ae = Y.getStackAddendum();
        ae !== "" && (w += "%s", P = P.concat([ae]));
        var de = P.map(function(ne) {
          return String(ne);
        });
        de.unshift("Warning: " + w), Function.prototype.apply.call(console[l], console, de);
      }
    }
    var C = !1, b = !1, k = !1, I = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function s(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || J || l === o || l === d || l === m || I || l === x || C || b || k || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === p || l.$$typeof === a || l.$$typeof === c || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Z || l.getModuleId !== void 0));
    }
    function $(l, w, P) {
      var Y = l.displayName;
      if (Y)
        return Y;
      var ae = w.displayName || w.name || "";
      return ae !== "" ? P + "(" + ae + ")" : P;
    }
    function B(l) {
      return l.displayName || "Context";
    }
    function N(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            var w = l;
            return B(w) + ".Consumer";
          case a:
            var P = l;
            return B(P._context) + ".Provider";
          case u:
            return $(l, l.render, "ForwardRef");
          case p:
            var Y = l.displayName || null;
            return Y !== null ? Y : N(l.type) || "Memo";
          case y: {
            var ae = l, de = ae._payload, ne = ae._init;
            try {
              return N(ne(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, re = 0, ee, ye, be, ve, R, _, V;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function D() {
      {
        if (re === 0) {
          ee = console.log, ye = console.info, be = console.warn, ve = console.error, R = console.group, _ = console.groupCollapsed, V = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        re++;
      }
    }
    function Q() {
      {
        if (re--, re === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, l, {
              value: ee
            }),
            info: L({}, l, {
              value: ye
            }),
            warn: L({}, l, {
              value: be
            }),
            error: L({}, l, {
              value: ve
            }),
            group: L({}, l, {
              value: R
            }),
            groupCollapsed: L({}, l, {
              value: _
            }),
            groupEnd: L({}, l, {
              value: V
            })
          });
        }
        re < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = E.ReactCurrentDispatcher, U;
    function q(l, w, P) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (ae) {
            var Y = ae.stack.trim().match(/\n( *(at )?)/);
            U = Y && Y[1] || "";
          }
        return `
` + U + l;
      }
    }
    var H = !1, F;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      F = new G();
    }
    function O(l, w) {
      if (!l || H)
        return "";
      {
        var P = F.get(l);
        if (P !== void 0)
          return P;
      }
      var Y;
      H = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = z.current, z.current = null, D();
      try {
        if (w) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (je) {
              Y = je;
            }
            Reflect.construct(l, [], ne);
          } else {
            try {
              ne.call();
            } catch (je) {
              Y = je;
            }
            l.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            Y = je;
          }
          l();
        }
      } catch (je) {
        if (je && Y && typeof je.stack == "string") {
          for (var te = je.stack.split(`
`), Ie = Y.stack.split(`
`), Ee = te.length - 1, Te = Ie.length - 1; Ee >= 1 && Te >= 0 && te[Ee] !== Ie[Te]; )
            Te--;
          for (; Ee >= 1 && Te >= 0; Ee--, Te--)
            if (te[Ee] !== Ie[Te]) {
              if (Ee !== 1 || Te !== 1)
                do
                  if (Ee--, Te--, Te < 0 || te[Ee] !== Ie[Te]) {
                    var Ve = `
` + te[Ee].replace(" at new ", " at ");
                    return l.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", l.displayName)), typeof l == "function" && F.set(l, Ve), Ve;
                  }
                while (Ee >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = de, Q(), Error.prepareStackTrace = ae;
      }
      var ct = l ? l.displayName || l.name : "", rt = ct ? q(ct) : "";
      return typeof l == "function" && F.set(l, rt), rt;
    }
    function fe(l, w, P) {
      return O(l, !1);
    }
    function j(l) {
      var w = l.prototype;
      return !!(w && w.isReactComponent);
    }
    function Se(l, w, P) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return O(l, j(l));
      if (typeof l == "string")
        return q(l);
      switch (l) {
        case d:
          return q("Suspense");
        case m:
          return q("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return fe(l.render);
          case p:
            return Se(l.type, w, P);
          case y: {
            var Y = l, ae = Y._payload, de = Y._init;
            try {
              return Se(de(ae), w, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, _e = {}, Pe = E.ReactDebugCurrentFrame;
    function Me(l) {
      if (l) {
        var w = l._owner, P = Se(l.type, l._source, w ? w.type : null);
        Pe.setExtraStackFrame(P);
      } else
        Pe.setExtraStackFrame(null);
    }
    function wr(l, w, P, Y, ae) {
      {
        var de = Function.call.bind(Oe);
        for (var ne in l)
          if (de(l, ne)) {
            var te = void 0;
            try {
              if (typeof l[ne] != "function") {
                var Ie = Error((Y || "React class") + ": " + P + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ie.name = "Invariant Violation", Ie;
              }
              te = l[ne](w, ne, Y, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              te = Ee;
            }
            te && !(te instanceof Error) && (Me(ae), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", P, ne, typeof te), Me(null)), te instanceof Error && !(te.message in _e) && (_e[te.message] = !0, Me(ae), A("Failed %s type: %s", P, te.message), Me(null));
          }
      }
    }
    var Wt = Array.isArray;
    function Et(l) {
      return Wt(l);
    }
    function K(l) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, P = w && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return P;
      }
    }
    function Ut(l) {
      try {
        return Yt(l), !1;
      } catch {
        return !0;
      }
    }
    function Yt(l) {
      return "" + l;
    }
    function wt(l) {
      if (Ut(l))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", K(l)), Yt(l);
    }
    var at = E.ReactCurrentOwner, oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xn, En, Tr;
    Tr = {};
    function ii(l) {
      if (Oe.call(l, "ref")) {
        var w = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ai(l) {
      if (Oe.call(l, "key")) {
        var w = Object.getOwnPropertyDescriptor(l, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function si(l, w) {
      if (typeof l.ref == "string" && at.current && w && at.current.stateNode !== w) {
        var P = N(at.current.type);
        Tr[P] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(at.current.type), l.ref), Tr[P] = !0);
      }
    }
    function ci(l, w) {
      {
        var P = function() {
          xn || (xn = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function li(l, w) {
      {
        var P = function() {
          En || (En = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var ui = function(l, w, P, Y, ae, de, ne) {
      var te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: w,
        ref: P,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return te._store = {}, Object.defineProperty(te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function fi(l, w, P, Y, ae) {
      {
        var de, ne = {}, te = null, Ie = null;
        P !== void 0 && (wt(P), te = "" + P), ai(w) && (wt(w.key), te = "" + w.key), ii(w) && (Ie = w.ref, si(w, ae));
        for (de in w)
          Oe.call(w, de) && !oi.hasOwnProperty(de) && (ne[de] = w[de]);
        if (l && l.defaultProps) {
          var Ee = l.defaultProps;
          for (de in Ee)
            ne[de] === void 0 && (ne[de] = Ee[de]);
        }
        if (te || Ie) {
          var Te = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          te && ci(ne, Te), Ie && li(ne, Te);
        }
        return ui(l, te, Ie, ae, Y, at.current, ne);
      }
    }
    var Rr = E.ReactCurrentOwner, wn = E.ReactDebugCurrentFrame;
    function st(l) {
      if (l) {
        var w = l._owner, P = Se(l.type, l._source, w ? w.type : null);
        wn.setExtraStackFrame(P);
      } else
        wn.setExtraStackFrame(null);
    }
    var Or;
    Or = !1;
    function $r(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function Tn() {
      {
        if (Rr.current) {
          var l = N(Rr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function di(l) {
      return "";
    }
    var Rn = {};
    function pi(l) {
      {
        var w = Tn();
        if (!w) {
          var P = typeof l == "string" ? l : l.displayName || l.name;
          P && (w = `

Check the top-level render call using <` + P + ">.");
        }
        return w;
      }
    }
    function On(l, w) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var P = pi(w);
        if (Rn[P])
          return;
        Rn[P] = !0;
        var Y = "";
        l && l._owner && l._owner !== Rr.current && (Y = " It was passed a child from " + N(l._owner.type) + "."), st(l), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, Y), st(null);
      }
    }
    function $n(l, w) {
      {
        if (typeof l != "object")
          return;
        if (Et(l))
          for (var P = 0; P < l.length; P++) {
            var Y = l[P];
            $r(Y) && On(Y, w);
          }
        else if ($r(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var ae = h(l);
          if (typeof ae == "function" && ae !== l.entries)
            for (var de = ae.call(l), ne; !(ne = de.next()).done; )
              $r(ne.value) && On(ne.value, w);
        }
      }
    }
    function mi(l) {
      {
        var w = l.type;
        if (w == null || typeof w == "string")
          return;
        var P;
        if (typeof w == "function")
          P = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === p))
          P = w.propTypes;
        else
          return;
        if (P) {
          var Y = N(w);
          wr(P, l.props, "prop", Y, l);
        } else if (w.PropTypes !== void 0 && !Or) {
          Or = !0;
          var ae = N(w);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hi(l) {
      {
        for (var w = Object.keys(l.props), P = 0; P < w.length; P++) {
          var Y = w[P];
          if (Y !== "children" && Y !== "key") {
            st(l), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), st(null);
            break;
          }
        }
        l.ref !== null && (st(l), A("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
      }
    }
    var _n = {};
    function An(l, w, P, Y, ae, de) {
      {
        var ne = s(l);
        if (!ne) {
          var te = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ie = di();
          Ie ? te += Ie : te += Tn();
          var Ee;
          l === null ? Ee = "null" : Et(l) ? Ee = "array" : l !== void 0 && l.$$typeof === t ? (Ee = "<" + (N(l.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof l, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, te);
        }
        var Te = fi(l, w, P, ae, de);
        if (Te == null)
          return Te;
        if (ne) {
          var Ve = w.children;
          if (Ve !== void 0)
            if (Y)
              if (Et(Ve)) {
                for (var ct = 0; ct < Ve.length; ct++)
                  $n(Ve[ct], l);
                Object.freeze && Object.freeze(Ve);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $n(Ve, l);
        }
        if (Oe.call(w, "key")) {
          var rt = N(l), je = Object.keys(w).filter(function(Ci) {
            return Ci !== "key";
          }), _r = je.length > 0 ? "{key: someKey, " + je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_n[rt + _r]) {
            var Si = je.length > 0 ? "{" + je.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, rt, Si, rt), _n[rt + _r] = !0;
          }
        }
        return l === n ? hi(Te) : mi(Te), Te;
      }
    }
    function gi(l, w, P) {
      return An(l, w, P, !0);
    }
    function yi(l, w, P) {
      return An(l, w, P, !1);
    }
    var bi = yi, vi = gi;
    Ot.Fragment = n, Ot.jsx = bi, Ot.jsxs = vi;
  }()), Ot;
}
process.env.NODE_ENV === "production" ? Lr.exports = $i() : Lr.exports = _i();
var X = Lr.exports, Wr = { exports: {} }, qt = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Ai() {
  if (In) return se;
  In = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function T(b) {
    if (typeof b == "object" && b !== null) {
      var k = b.$$typeof;
      switch (k) {
        case t:
          switch (b = b.type, b) {
            case u:
            case d:
            case n:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case m:
                case S:
                case x:
                case a:
                  return b;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function C(b) {
    return T(b) === d;
  }
  return se.AsyncMode = u, se.ConcurrentMode = d, se.ContextConsumer = c, se.ContextProvider = a, se.Element = t, se.ForwardRef = m, se.Fragment = n, se.Lazy = S, se.Memo = x, se.Portal = r, se.Profiler = i, se.StrictMode = o, se.Suspense = p, se.isAsyncMode = function(b) {
    return C(b) || T(b) === u;
  }, se.isConcurrentMode = C, se.isContextConsumer = function(b) {
    return T(b) === c;
  }, se.isContextProvider = function(b) {
    return T(b) === a;
  }, se.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, se.isForwardRef = function(b) {
    return T(b) === m;
  }, se.isFragment = function(b) {
    return T(b) === n;
  }, se.isLazy = function(b) {
    return T(b) === S;
  }, se.isMemo = function(b) {
    return T(b) === x;
  }, se.isPortal = function(b) {
    return T(b) === r;
  }, se.isProfiler = function(b) {
    return T(b) === i;
  }, se.isStrictMode = function(b) {
    return T(b) === o;
  }, se.isSuspense = function(b) {
    return T(b) === p;
  }, se.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === p || b === y || typeof b == "object" && b !== null && (b.$$typeof === S || b.$$typeof === x || b.$$typeof === a || b.$$typeof === c || b.$$typeof === m || b.$$typeof === h || b.$$typeof === E || b.$$typeof === A || b.$$typeof === g);
  }, se.typeOf = T, se;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function ki() {
  return Mn || (Mn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function T(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === d || O === i || O === o || O === p || O === y || typeof O == "object" && O !== null && (O.$$typeof === S || O.$$typeof === x || O.$$typeof === a || O.$$typeof === c || O.$$typeof === m || O.$$typeof === h || O.$$typeof === E || O.$$typeof === A || O.$$typeof === g);
    }
    function C(O) {
      if (typeof O == "object" && O !== null) {
        var fe = O.$$typeof;
        switch (fe) {
          case t:
            var j = O.type;
            switch (j) {
              case u:
              case d:
              case n:
              case i:
              case o:
              case p:
                return j;
              default:
                var Se = j && j.$$typeof;
                switch (Se) {
                  case c:
                  case m:
                  case S:
                  case x:
                  case a:
                    return Se;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var b = u, k = d, I = c, J = a, Z = t, s = m, $ = n, B = S, N = x, L = r, re = i, ee = o, ye = p, be = !1;
    function ve(O) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(O) || C(O) === u;
    }
    function R(O) {
      return C(O) === d;
    }
    function _(O) {
      return C(O) === c;
    }
    function V(O) {
      return C(O) === a;
    }
    function W(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function D(O) {
      return C(O) === m;
    }
    function Q(O) {
      return C(O) === n;
    }
    function z(O) {
      return C(O) === S;
    }
    function U(O) {
      return C(O) === x;
    }
    function q(O) {
      return C(O) === r;
    }
    function H(O) {
      return C(O) === i;
    }
    function F(O) {
      return C(O) === o;
    }
    function G(O) {
      return C(O) === p;
    }
    ce.AsyncMode = b, ce.ConcurrentMode = k, ce.ContextConsumer = I, ce.ContextProvider = J, ce.Element = Z, ce.ForwardRef = s, ce.Fragment = $, ce.Lazy = B, ce.Memo = N, ce.Portal = L, ce.Profiler = re, ce.StrictMode = ee, ce.Suspense = ye, ce.isAsyncMode = ve, ce.isConcurrentMode = R, ce.isContextConsumer = _, ce.isContextProvider = V, ce.isElement = W, ce.isForwardRef = D, ce.isFragment = Q, ce.isLazy = z, ce.isMemo = U, ce.isPortal = q, ce.isProfiler = H, ce.isStrictMode = F, ce.isSuspense = G, ce.isValidElementType = T, ce.typeOf = C;
  }()), ce;
}
var jn;
function tn() {
  return jn || (jn = 1, process.env.NODE_ENV === "production" ? qt.exports = Ai() : qt.exports = ki()), qt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ar, Nn;
function Pi() {
  if (Nn) return Ar;
  Nn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        d[m] = m;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ar = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), d, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var p in c)
        t.call(c, p) && (u[p] = c[p]);
      if (e) {
        d = e(c);
        for (var y = 0; y < d.length; y++)
          r.call(c, d[y]) && (u[d[y]] = c[d[y]]);
      }
    }
    return u;
  }, Ar;
}
var kr, Bn;
function rn() {
  if (Bn) return kr;
  Bn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kr = e, kr;
}
var Pr, Dn;
function vo() {
  return Dn || (Dn = 1, Pr = Function.call.bind(Object.prototype.hasOwnProperty)), Pr;
}
var Ir, Fn;
function Ii() {
  if (Fn) return Ir;
  Fn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = rn(), r = {}, n = vo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var y = Error(
                (u || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            p = i[m](a, m, u, c, null, t);
          } catch (S) {
            p = S;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + c + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ir = o, Ir;
}
var Mr, Vn;
function Mi() {
  if (Vn) return Mr;
  Vn = 1;
  var e = tn(), t = Pi(), r = rn(), n = vo(), o = Ii(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Mr = function(c, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(R) {
      var _ = R && (d && R[d] || R[m]);
      if (typeof _ == "function")
        return _;
    }
    var y = "<<anonymous>>", x = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: A(),
      arrayOf: T,
      element: C(),
      elementType: b(),
      instanceOf: k,
      node: s(),
      objectOf: J,
      oneOf: I,
      oneOfType: Z,
      shape: B,
      exact: N
    };
    function S(R, _) {
      return R === _ ? R !== 0 || 1 / R === 1 / _ : R !== R && _ !== _;
    }
    function g(R, _) {
      this.message = R, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function h(R) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, V = 0;
      function W(Q, z, U, q, H, F, G) {
        if (q = q || y, F = F || U, G !== r) {
          if (u) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = q + ":" + U;
            !_[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[fe] = !0, V++);
          }
        }
        return z[U] == null ? Q ? z[U] === null ? new g("The " + H + " `" + F + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new g("The " + H + " `" + F + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : R(z, U, q, H, F);
      }
      var D = W.bind(null, !1);
      return D.isRequired = W.bind(null, !0), D;
    }
    function E(R) {
      function _(V, W, D, Q, z, U) {
        var q = V[W], H = ee(q);
        if (H !== R) {
          var F = ye(q);
          return new g(
            "Invalid " + Q + " `" + z + "` of type " + ("`" + F + "` supplied to `" + D + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return h(_);
    }
    function A() {
      return h(a);
    }
    function T(R) {
      function _(V, W, D, Q, z) {
        if (typeof R != "function")
          return new g("Property `" + z + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var U = V[W];
        if (!Array.isArray(U)) {
          var q = ee(U);
          return new g("Invalid " + Q + " `" + z + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected an array."));
        }
        for (var H = 0; H < U.length; H++) {
          var F = R(U, H, D, Q, z + "[" + H + "]", r);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return h(_);
    }
    function C() {
      function R(_, V, W, D, Q) {
        var z = _[V];
        if (!c(z)) {
          var U = ee(z);
          return new g("Invalid " + D + " `" + Q + "` of type " + ("`" + U + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(R);
    }
    function b() {
      function R(_, V, W, D, Q) {
        var z = _[V];
        if (!e.isValidElementType(z)) {
          var U = ee(z);
          return new g("Invalid " + D + " `" + Q + "` of type " + ("`" + U + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(R);
    }
    function k(R) {
      function _(V, W, D, Q, z) {
        if (!(V[W] instanceof R)) {
          var U = R.name || y, q = ve(V[W]);
          return new g("Invalid " + Q + " `" + z + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return h(_);
    }
    function I(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function _(V, W, D, Q, z) {
        for (var U = V[W], q = 0; q < R.length; q++)
          if (S(U, R[q]))
            return null;
        var H = JSON.stringify(R, function(G, O) {
          var fe = ye(O);
          return fe === "symbol" ? String(O) : O;
        });
        return new g("Invalid " + Q + " `" + z + "` of value `" + String(U) + "` " + ("supplied to `" + D + "`, expected one of " + H + "."));
      }
      return h(_);
    }
    function J(R) {
      function _(V, W, D, Q, z) {
        if (typeof R != "function")
          return new g("Property `" + z + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var U = V[W], q = ee(U);
        if (q !== "object")
          return new g("Invalid " + Q + " `" + z + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected an object."));
        for (var H in U)
          if (n(U, H)) {
            var F = R(U, H, D, Q, z + "." + H, r);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return h(_);
    }
    function Z(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var _ = 0; _ < R.length; _++) {
        var V = R[_];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(V) + " at index " + _ + "."
          ), a;
      }
      function W(D, Q, z, U, q) {
        for (var H = [], F = 0; F < R.length; F++) {
          var G = R[F], O = G(D, Q, z, U, q, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && H.push(O.data.expectedType);
        }
        var fe = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new g("Invalid " + U + " `" + q + "` supplied to " + ("`" + z + "`" + fe + "."));
      }
      return h(W);
    }
    function s() {
      function R(_, V, W, D, Q) {
        return L(_[V]) ? null : new g("Invalid " + D + " `" + Q + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return h(R);
    }
    function $(R, _, V, W, D) {
      return new g(
        (R || "React class") + ": " + _ + " type `" + V + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function B(R) {
      function _(V, W, D, Q, z) {
        var U = V[W], q = ee(U);
        if (q !== "object")
          return new g("Invalid " + Q + " `" + z + "` of type `" + q + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var H in R) {
          var F = R[H];
          if (typeof F != "function")
            return $(D, Q, z, H, ye(F));
          var G = F(U, H, D, Q, z + "." + H, r);
          if (G)
            return G;
        }
        return null;
      }
      return h(_);
    }
    function N(R) {
      function _(V, W, D, Q, z) {
        var U = V[W], q = ee(U);
        if (q !== "object")
          return new g("Invalid " + Q + " `" + z + "` of type `" + q + "` " + ("supplied to `" + D + "`, expected `object`."));
        var H = t({}, V[W], R);
        for (var F in H) {
          var G = R[F];
          if (n(R, F) && typeof G != "function")
            return $(D, Q, z, F, ye(G));
          if (!G)
            return new g(
              "Invalid " + Q + " `" + z + "` key `" + F + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(V[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var O = G(U, F, D, Q, z + "." + F, r);
          if (O)
            return O;
        }
        return null;
      }
      return h(_);
    }
    function L(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(L);
          if (R === null || c(R))
            return !0;
          var _ = p(R);
          if (_) {
            var V = _.call(R), W;
            if (_ !== R.entries) {
              for (; !(W = V.next()).done; )
                if (!L(W.value))
                  return !1;
            } else
              for (; !(W = V.next()).done; ) {
                var D = W.value;
                if (D && !L(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(R, _) {
      return R === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ee(R) {
      var _ = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : re(_, R) ? "symbol" : _;
    }
    function ye(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var _ = ee(R);
      if (_ === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function be(R) {
      var _ = ye(R);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function ve(R) {
      return !R.constructor || !R.constructor.name ? y : R.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Mr;
}
var jr, zn;
function ji() {
  if (zn) return jr;
  zn = 1;
  var e = rn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, jr = function() {
    function n(a, c, u, d, m, p) {
      if (p !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, jr;
}
if (process.env.NODE_ENV !== "production") {
  var Ni = tn(), Bi = !0;
  Wr.exports = Mi()(Ni.isElement, Bi);
} else
  Wr.exports = ji()();
var Di = Wr.exports;
const f = /* @__PURE__ */ Oi(Di);
function So(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = So(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function $e() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = So(e)) && (n && (n += " "), n += t);
  return n;
}
function nr(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const u = c;
              r[o][u] = nr(i[u], a[u]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Ft(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const d = i[u];
      d && (a += (c === !0 ? "" : " ") + t(d), c = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function Ze(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Co(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function nn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Co(e, t, r);
}
function Fi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function et(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return et(Fi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ze(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ze(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Vi = (e) => {
  const t = et(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, kt = (e, t) => {
  try {
    return Vi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function lr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function xo(e) {
  e = et(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, m = (d + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), lr({
    type: c,
    values: u
  });
}
function Ur(e) {
  e = et(e);
  let t = e.type === "hsl" || e.type === "hsla" ? et(xo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ln(e, t) {
  const r = Ur(e), n = Ur(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Qe(e, t) {
  return e = et(e), t = nn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, lr(e);
}
function Ht(e, t, r) {
  try {
    return Qe(e, t);
  } catch {
    return e;
  }
}
function on(e, t) {
  if (e = et(e), t = nn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return lr(e);
}
function pe(e, t, r) {
  try {
    return on(e, t);
  } catch {
    return e;
  }
}
function an(e, t) {
  if (e = et(e), t = nn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return lr(e);
}
function me(e, t, r) {
  try {
    return an(e, t);
  } catch {
    return e;
  }
}
function zi(e, t = 0.15) {
  return Ur(e) > 0.5 ? on(e, t) : an(e, t);
}
function Gt(e, t, r) {
  try {
    return zi(e, t);
  } catch {
    return e;
  }
}
function Eo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const wo = (e) => Eo(e) && e !== "classes";
function he(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ze(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function To(e) {
  if (!Xe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = To(e[r]);
  }), t;
}
function De(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Xe(e) && Xe(t) && Object.keys(t).forEach((o) => {
    Xe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Xe(e[o]) ? n[o] = De(e[o], t[o], r) : r.clone ? n[o] = Xe(t[o]) ? To(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function It(e, t) {
  return t ? De(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const tt = process.env.NODE_ENV !== "production" ? f.oneOfType([f.number, f.string, f.object, f.array]) : {};
function Li(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Wi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ui(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ze(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Yi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const u = t(e.breakpoints.not(...c), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const ur = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Wn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ur[e]}px)`
}, qi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : ur[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Je(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Wn;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Wn;
    return Object.keys(t).reduce((a, c) => {
      if (Wi(i.keys, c)) {
        const u = Ui(n.containerQueries ? n : qi, c);
        u && (a[u] = r(t[c], c));
      } else if (Object.keys(i.values || ur).includes(c)) {
        const u = i.up(c);
        a[u] = r(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Hi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Gi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function fr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function or(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = fr(e, r) || n, t && (o = t(o, n, e)), o;
}
function we(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, d = fr(u, n) || {};
    return Je(a, c, (p) => {
      let y = or(d, o, p);
      return p === y && typeof p == "string" && (y = or(d, o, `${t}${p === "default" ? "" : he(p)}`, p)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: tt
  } : {}, i.filterProps = [t], i;
}
function Ki(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Xi = {
  m: "margin",
  p: "padding"
}, Ji = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Un = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Qi = Ki((e) => {
  if (e.length > 2)
    if (Un[e])
      e = Un[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Xi[t], o = Ji[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), dr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], pr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Zi = [...dr, ...pr];
function Vt(e, t, r, n) {
  const o = fr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function sn(e) {
  return Vt(e, "spacing", 8, "spacing");
}
function zt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ea(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = zt(t, r), n), {});
}
function ta(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Qi(r), i = ea(o, n), a = e[r];
  return Je(e, a, i);
}
function Ro(e, t) {
  const r = sn(e.theme);
  return Object.keys(e).map((n) => ta(e, t, n, r)).reduce(It, {});
}
function Ce(e) {
  return Ro(e, dr);
}
Ce.propTypes = process.env.NODE_ENV !== "production" ? dr.reduce((e, t) => (e[t] = tt, e), {}) : {};
Ce.filterProps = dr;
function xe(e) {
  return Ro(e, pr);
}
xe.propTypes = process.env.NODE_ENV !== "production" ? pr.reduce((e, t) => (e[t] = tt, e), {}) : {};
xe.filterProps = pr;
process.env.NODE_ENV !== "production" && Zi.reduce((e, t) => (e[t] = tt, e), {});
function mr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? It(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Le(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function We(e, t) {
  return we({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ra = We("border", Le), na = We("borderTop", Le), oa = We("borderRight", Le), ia = We("borderBottom", Le), aa = We("borderLeft", Le), sa = We("borderColor"), ca = We("borderTopColor"), la = We("borderRightColor"), ua = We("borderBottomColor"), fa = We("borderLeftColor"), da = We("outline", Le), pa = We("outlineColor"), hr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Vt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: zt(t, n)
    });
    return Je(e, e.borderRadius, r);
  }
  return null;
};
hr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: tt
} : {};
hr.filterProps = ["borderRadius"];
mr(ra, na, oa, ia, aa, sa, ca, la, ua, fa, hr, da, pa);
const gr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Vt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: zt(t, n)
    });
    return Je(e, e.gap, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: tt
} : {};
gr.filterProps = ["gap"];
const yr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Vt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: zt(t, n)
    });
    return Je(e, e.columnGap, r);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: tt
} : {};
yr.filterProps = ["columnGap"];
const br = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Vt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: zt(t, n)
    });
    return Je(e, e.rowGap, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: tt
} : {};
br.filterProps = ["rowGap"];
const ma = we({
  prop: "gridColumn"
}), ha = we({
  prop: "gridRow"
}), ga = we({
  prop: "gridAutoFlow"
}), ya = we({
  prop: "gridAutoColumns"
}), ba = we({
  prop: "gridAutoRows"
}), va = we({
  prop: "gridTemplateColumns"
}), Sa = we({
  prop: "gridTemplateRows"
}), Ca = we({
  prop: "gridTemplateAreas"
}), xa = we({
  prop: "gridArea"
});
mr(gr, yr, br, ma, ha, ga, ya, ba, va, Sa, Ca, xa);
function ht(e, t) {
  return t === "grey" ? t : e;
}
const Ea = we({
  prop: "color",
  themeKey: "palette",
  transform: ht
}), wa = we({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ht
}), Ta = we({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ht
});
mr(Ea, wa, Ta);
function Be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ra = we({
  prop: "width",
  transform: Be
}), cn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, u;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || ur[r];
      return n ? ((u = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Be(r)
      };
    };
    return Je(e, e.maxWidth, t);
  }
  return null;
};
cn.filterProps = ["maxWidth"];
const Oa = we({
  prop: "minWidth",
  transform: Be
}), $a = we({
  prop: "height",
  transform: Be
}), _a = we({
  prop: "maxHeight",
  transform: Be
}), Aa = we({
  prop: "minHeight",
  transform: Be
});
we({
  prop: "size",
  cssProperty: "width",
  transform: Be
});
we({
  prop: "size",
  cssProperty: "height",
  transform: Be
});
const ka = we({
  prop: "boxSizing"
});
mr(Ra, cn, Oa, $a, _a, Aa, ka);
const vr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Le
  },
  borderTop: {
    themeKey: "borders",
    transform: Le
  },
  borderRight: {
    themeKey: "borders",
    transform: Le
  },
  borderBottom: {
    themeKey: "borders",
    transform: Le
  },
  borderLeft: {
    themeKey: "borders",
    transform: Le
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Le
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: hr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ht
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ht
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ht
  },
  // spacing
  p: {
    style: xe
  },
  pt: {
    style: xe
  },
  pr: {
    style: xe
  },
  pb: {
    style: xe
  },
  pl: {
    style: xe
  },
  px: {
    style: xe
  },
  py: {
    style: xe
  },
  padding: {
    style: xe
  },
  paddingTop: {
    style: xe
  },
  paddingRight: {
    style: xe
  },
  paddingBottom: {
    style: xe
  },
  paddingLeft: {
    style: xe
  },
  paddingX: {
    style: xe
  },
  paddingY: {
    style: xe
  },
  paddingInline: {
    style: xe
  },
  paddingInlineStart: {
    style: xe
  },
  paddingInlineEnd: {
    style: xe
  },
  paddingBlock: {
    style: xe
  },
  paddingBlockStart: {
    style: xe
  },
  paddingBlockEnd: {
    style: xe
  },
  m: {
    style: Ce
  },
  mt: {
    style: Ce
  },
  mr: {
    style: Ce
  },
  mb: {
    style: Ce
  },
  ml: {
    style: Ce
  },
  mx: {
    style: Ce
  },
  my: {
    style: Ce
  },
  margin: {
    style: Ce
  },
  marginTop: {
    style: Ce
  },
  marginRight: {
    style: Ce
  },
  marginBottom: {
    style: Ce
  },
  marginLeft: {
    style: Ce
  },
  marginX: {
    style: Ce
  },
  marginY: {
    style: Ce
  },
  marginInline: {
    style: Ce
  },
  marginInlineStart: {
    style: Ce
  },
  marginInlineEnd: {
    style: Ce
  },
  marginBlock: {
    style: Ce
  },
  marginBlockStart: {
    style: Ce
  },
  marginBlockEnd: {
    style: Ce
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gr
  },
  rowGap: {
    style: br
  },
  columnGap: {
    style: yr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Be
  },
  maxWidth: {
    style: cn
  },
  minWidth: {
    transform: Be
  },
  height: {
    transform: Be
  },
  maxHeight: {
    transform: Be
  },
  minHeight: {
    transform: Be
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Pa(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ia(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ma() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: d,
      transform: m,
      style: p
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = fr(o, d) || {};
    return p ? p(a) : Je(a, n, (S) => {
      let g = or(y, m, S);
      return S === g && typeof S == "string" && (g = or(y, m, `${r}${S === "default" ? "" : he(S)}`, S)), u === !1 ? g : {
        [u]: g
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? vr;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Hi(o.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((y) => {
        const x = Ia(u[y], o);
        if (x != null)
          if (typeof x == "object")
            if (i[y])
              p = It(p, e(y, x, o, i));
            else {
              const S = Je({
                theme: o
              }, x, (g) => ({
                [y]: g
              }));
              Pa(S, x) ? p[y] = t({
                sx: x,
                theme: o
              }) : p = It(p, S);
            }
          else
            p = It(p, e(y, x, o, i));
      }), Li(o, Gi(m, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const yt = Ma();
yt.filterProps = ["sx"];
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ir.apply(null, arguments);
}
function Oo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ja = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Na = /* @__PURE__ */ Oo(
  function(e) {
    return ja.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ba = !1;
function Da(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Fa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Va = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Ba : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Da(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ke = "-ms-", ar = "-moz-", oe = "-webkit-", $o = "comm", ln = "rule", un = "decl", za = "@import", _o = "@keyframes", La = "@layer", Wa = Math.abs, Sr = String.fromCharCode, Ua = Object.assign;
function Ya(e, t) {
  return Ae(e, 0) ^ 45 ? (((t << 2 ^ Ae(e, 0)) << 2 ^ Ae(e, 1)) << 2 ^ Ae(e, 2)) << 2 ^ Ae(e, 3) : 0;
}
function Ao(e) {
  return e.trim();
}
function qa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, r) {
  return e.replace(t, r);
}
function Yr(e, t) {
  return e.indexOf(t);
}
function Ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function Mt(e, t, r) {
  return e.slice(t, r);
}
function qe(e) {
  return e.length;
}
function fn(e) {
  return e.length;
}
function Kt(e, t) {
  return t.push(e), e;
}
function Ha(e, t) {
  return e.map(t).join("");
}
var Cr = 1, bt = 1, ko = 0, Ne = 0, Re = 0, St = "";
function xr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Cr, column: bt, length: a, return: "" };
}
function $t(e, t) {
  return Ua(xr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ga() {
  return Re;
}
function Ka() {
  return Re = Ne > 0 ? Ae(St, --Ne) : 0, bt--, Re === 10 && (bt = 1, Cr--), Re;
}
function Fe() {
  return Re = Ne < ko ? Ae(St, Ne++) : 0, bt++, Re === 10 && (bt = 1, Cr++), Re;
}
function Ge() {
  return Ae(St, Ne);
}
function Zt() {
  return Ne;
}
function Lt(e, t) {
  return Mt(St, e, t);
}
function jt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Po(e) {
  return Cr = bt = 1, ko = qe(St = e), Ne = 0, [];
}
function Io(e) {
  return St = "", e;
}
function er(e) {
  return Ao(Lt(Ne - 1, qr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xa(e) {
  for (; (Re = Ge()) && Re < 33; )
    Fe();
  return jt(e) > 2 || jt(Re) > 3 ? "" : " ";
}
function Ja(e, t) {
  for (; --t && Fe() && !(Re < 48 || Re > 102 || Re > 57 && Re < 65 || Re > 70 && Re < 97); )
    ;
  return Lt(e, Zt() + (t < 6 && Ge() == 32 && Fe() == 32));
}
function qr(e) {
  for (; Fe(); )
    switch (Re) {
      case e:
        return Ne;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qr(Re);
        break;
      case 40:
        e === 41 && qr(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Ne;
}
function Qa(e, t) {
  for (; Fe() && e + Re !== 57; )
    if (e + Re === 84 && Ge() === 47)
      break;
  return "/*" + Lt(t, Ne - 1) + "*" + Sr(e === 47 ? e : Fe());
}
function Za(e) {
  for (; !jt(Ge()); )
    Fe();
  return Lt(e, Ne);
}
function es(e) {
  return Io(tr("", null, null, null, [""], e = Po(e), 0, [0], e));
}
function tr(e, t, r, n, o, i, a, c, u) {
  for (var d = 0, m = 0, p = a, y = 0, x = 0, S = 0, g = 1, h = 1, E = 1, A = 0, T = "", C = o, b = i, k = n, I = T; h; )
    switch (S = A, A = Fe()) {
      case 40:
        if (S != 108 && Ae(I, p - 1) == 58) {
          Yr(I += ie(er(A), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += er(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += Xa(S);
        break;
      case 92:
        I += Ja(Zt() - 1, 7);
        continue;
      case 47:
        switch (Ge()) {
          case 42:
          case 47:
            Kt(ts(Qa(Fe(), Zt()), t, r), u);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * g:
        c[d++] = qe(I) * E;
      case 125 * g:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            h = 0;
          case 59 + m:
            E == -1 && (I = ie(I, /\f/g, "")), x > 0 && qe(I) - p && Kt(x > 32 ? qn(I + ";", n, r, p - 1) : qn(ie(I, " ", "") + ";", n, r, p - 2), u);
            break;
          case 59:
            I += ";";
          default:
            if (Kt(k = Yn(I, t, r, d, m, o, c, T, C = [], b = [], p), i), A === 123)
              if (m === 0)
                tr(I, t, k, k, C, i, p, c, b);
              else
                switch (y === 99 && Ae(I, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tr(e, k, k, n && Kt(Yn(e, k, k, 0, 0, o, c, T, o, C = [], p), b), o, b, p, c, n ? C : b);
                    break;
                  default:
                    tr(I, k, k, k, [""], b, 0, c, b);
                }
        }
        d = m = x = 0, g = E = 1, T = I = "", p = a;
        break;
      case 58:
        p = 1 + qe(I), x = S;
      default:
        if (g < 1) {
          if (A == 123)
            --g;
          else if (A == 125 && g++ == 0 && Ka() == 125)
            continue;
        }
        switch (I += Sr(A), A * g) {
          case 38:
            E = m > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            c[d++] = (qe(I) - 1) * E, E = 1;
            break;
          case 64:
            Ge() === 45 && (I += er(Fe())), y = Ge(), m = p = qe(T = I += Za(Zt())), A++;
            break;
          case 45:
            S === 45 && qe(I) == 2 && (g = 0);
        }
    }
  return i;
}
function Yn(e, t, r, n, o, i, a, c, u, d, m) {
  for (var p = o - 1, y = o === 0 ? i : [""], x = fn(y), S = 0, g = 0, h = 0; S < n; ++S)
    for (var E = 0, A = Mt(e, p + 1, p = Wa(g = a[S])), T = e; E < x; ++E)
      (T = Ao(g > 0 ? y[E] + " " + A : ie(A, /&\f/g, y[E]))) && (u[h++] = T);
  return xr(e, t, r, o === 0 ? ln : c, u, d, m);
}
function ts(e, t, r) {
  return xr(e, t, r, $o, Sr(Ga()), Mt(e, 2, -2), 0);
}
function qn(e, t, r, n) {
  return xr(e, t, r, un, Mt(e, 0, n), Mt(e, n + 1, -1), n);
}
function gt(e, t) {
  for (var r = "", n = fn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function rs(e, t, r, n) {
  switch (e.type) {
    case La:
      if (e.children.length) break;
    case za:
    case un:
      return e.return = e.return || e.value;
    case $o:
      return "";
    case _o:
      return e.return = e.value + "{" + gt(e.children, n) + "}";
    case ln:
      e.value = e.props.join(",");
  }
  return qe(r = gt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ns(e) {
  var t = fn(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function os(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var is = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ge(), o === 38 && i === 12 && (r[n] = 1), !jt(i); )
    Fe();
  return Lt(t, Ne);
}, as = function(t, r) {
  var n = -1, o = 44;
  do
    switch (jt(o)) {
      case 0:
        o === 38 && Ge() === 12 && (r[n] = 1), t[n] += is(Ne - 1, r, n);
        break;
      case 2:
        t[n] += er(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ge() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Sr(o);
    }
  while (o = Fe());
  return t;
}, ss = function(t, r) {
  return Io(as(Po(t), r));
}, Hn = /* @__PURE__ */ new WeakMap(), cs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Hn.get(n)) && !o) {
      Hn.set(t, !0);
      for (var i = [], a = ss(r, i), c = n.props, u = 0, d = 0; u < a.length; u++)
        for (var m = 0; m < c.length; m++, d++)
          t.props[d] = i[u] ? a[u].replace(/&\f/g, c[m]) : c[m] + " " + a[u];
    }
  }
}, ls = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Mo(e, t) {
  switch (Ya(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + ar + e + ke + e + e;
    case 6828:
    case 4268:
      return oe + e + ke + e + e;
    case 6165:
      return oe + e + ke + "flex-" + e + e;
    case 5187:
      return oe + e + ie(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + ke + "flex-$1$2") + e;
    case 5443:
      return oe + e + ke + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + ke + "flex-line-pack" + ie(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + ke + ie(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + ke + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ie(e, "-grow", "") + oe + e + ke + ie(e, "grow", "positive") + e;
    case 4554:
      return oe + ie(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (qe(e) - 1 - t > 6) switch (Ae(e, t + 1)) {
        case 109:
          if (Ae(e, t + 4) !== 45) break;
        case 102:
          return ie(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + ar + (Ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Yr(e, "stretch") ? Mo(ie(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ae(e, t + 1) !== 115) break;
    case 6444:
      switch (Ae(e, qe(e) - 3 - (~Yr(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + oe) + e;
        case 101:
          return ie(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (Ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ae(e, t + 11)) {
        case 114:
          return oe + e + ke + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + ke + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + ke + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + ke + e + e;
  }
  return e;
}
var us = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case un:
      t.return = Mo(t.value, t.length);
      break;
    case _o:
      return gt([$t(t, {
        value: ie(t.value, "@", "@" + oe)
      })], o);
    case ln:
      if (t.length) return Ha(t.props, function(i) {
        switch (qa(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return gt([$t(t, {
              props: [ie(i, /:(read-\w+)/, ":" + ar + "$1")]
            })], o);
          case "::placeholder":
            return gt([$t(t, {
              props: [ie(i, /:(plac\w+)/, ":" + oe + "input-$1")]
            }), $t(t, {
              props: [ie(i, /:(plac\w+)/, ":" + ar + "$1")]
            }), $t(t, {
              props: [ie(i, /:(plac\w+)/, ke + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, fs = [us], ds = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var h = g.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || fs, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var h = g.getAttribute("data-emotion").split(" "), E = 1; E < h.length; E++)
        i[h[E]] = !0;
      c.push(g);
    }
  );
  var u, d = [cs, ls];
  {
    var m, p = [rs, os(function(g) {
      m.insert(g);
    })], y = ns(d.concat(o, p)), x = function(h) {
      return gt(es(h), y);
    };
    u = function(h, E, A, T) {
      m = A, x(h ? h + "{" + E.styles + "}" : E.styles), T && (S.inserted[E.name] = !0);
    };
  }
  var S = {
    key: r,
    sheet: new Va({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return S.sheet.hydrate(c), S;
}, jo = tn(), ps = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ms = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, No = {};
No[jo.ForwardRef] = ps;
No[jo.Memo] = ms;
var hs = !0;
function gs(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Bo = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  hs === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ys = function(t, r, n) {
  Bo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function bs(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var vs = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ss = !1, Cs = /[A-Z]|^ms/g, xs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Do = function(t) {
  return t.charCodeAt(1) === 45;
}, Gn = function(t) {
  return t != null && typeof t != "boolean";
}, Nr = /* @__PURE__ */ Oo(function(e) {
  return Do(e) ? e : e.replace(Cs, "-$&").toLowerCase();
}), Kn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(xs, function(n, o, i) {
          return He = {
            name: o,
            styles: i,
            next: He
          }, o;
        });
  }
  return vs[t] !== 1 && !Do(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, Es = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Nt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return He = {
          name: o.name,
          styles: o.styles,
          next: He
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            He = {
              name: a.name,
              styles: a.styles,
              next: He
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return ws(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = He, d = r(e);
        return He = u, Nt(e, t, d);
      }
      break;
    }
  }
  var m = r;
  if (t == null)
    return m;
  var p = t[m];
  return p !== void 0 ? p : m;
}
function ws(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Nt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : Gn(c) && (n += Nr(i) + ":" + Kn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Ss)
          throw new Error(Es);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var u = 0; u < a.length; u++)
            Gn(a[u]) && (n += Nr(i) + ":" + Kn(i, a[u]) + ";");
        else {
          var d = Nt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Nr(i) + ":" + d + ";";
              break;
            }
            default:
              n += i + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Xn = /label:\s*([^\s;{]+)\s*(;|$)/g, He;
function dn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  He = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Nt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Nt(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  Xn.lastIndex = 0;
  for (var d = "", m; (m = Xn.exec(o)) !== null; )
    d += "-" + m[1];
  var p = bs(o) + d;
  return {
    name: p,
    styles: o,
    next: He
  };
}
var Ts = function(t) {
  return t();
}, Rs = M.useInsertionEffect ? M.useInsertionEffect : !1, Os = Rs || Ts, Fo = /* @__PURE__ */ M.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ds({
    key: "css"
  }) : null
);
Fo.Provider;
var $s = function(t) {
  return /* @__PURE__ */ wi(function(r, n) {
    var o = Ti(Fo);
    return t(r, o, n);
  });
}, _s = /* @__PURE__ */ M.createContext({});
function As() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return dn(t);
}
var pn = function() {
  var t = As.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ks = Na, Ps = function(t) {
  return t !== "theme";
}, Jn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ks : Ps;
}, Qn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Is = !1, Ms = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Bo(r, n, o), Os(function() {
    return ys(r, n, o);
  }), null;
}, js = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Qn(t, r, n), u = c || Jn(o), d = !u("as");
  return function() {
    var m = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      p.push.apply(p, m);
    else {
      p.push(m[0][0]);
      for (var y = m.length, x = 1; x < y; x++)
        p.push(m[x], m[0][x]);
    }
    var S = $s(function(g, h, E) {
      var A = d && g.as || o, T = "", C = [], b = g;
      if (g.theme == null) {
        b = {};
        for (var k in g)
          b[k] = g[k];
        b.theme = M.useContext(_s);
      }
      typeof g.className == "string" ? T = gs(h.registered, C, g.className) : g.className != null && (T = g.className + " ");
      var I = dn(p.concat(C), h.registered, b);
      T += h.key + "-" + I.name, a !== void 0 && (T += " " + a);
      var J = d && c === void 0 ? Jn(A) : u, Z = {};
      for (var s in g)
        d && s === "as" || J(s) && (Z[s] = g[s]);
      return Z.className = T, E && (Z.ref = E), /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(Ms, {
        cache: h,
        serialized: I,
        isStringTag: typeof A == "string"
      }), /* @__PURE__ */ M.createElement(A, Z));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = c, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && Is ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(g, h) {
      return e(g, ir({}, r, h, {
        shouldForwardProp: Qn(S, h, !0)
      })).apply(void 0, p);
    }, S;
  };
}, Ns = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Hr = js.bind();
Ns.forEach(function(e) {
  Hr[e] = Hr(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Bs(e, t) {
  const r = Hr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ds(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Zn = [];
function eo(e) {
  return Zn[0] = e, dn(Zn);
}
const Fs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Vs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Fs(t), a = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function u(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function d(y, x) {
    const S = a.indexOf(x);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : x) - n / 100}${r})`;
  }
  function m(y) {
    return a.indexOf(y) + 1 < a.length ? d(y, a[a.indexOf(y) + 1]) : c(y);
  }
  function p(y) {
    const x = a.indexOf(y);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? u(a[x]) : d(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: d,
    only: m,
    not: p,
    unit: r,
    ...o
  };
}
const zs = {
  borderRadius: 4
};
function Vo(e = 8, t = sn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ls(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function zo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = Vs(r), u = Vo(o);
  let d = De({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...zs,
      ...i
    }
  }, a);
  return d = Yi(d), d.applyStyles = Ls, d = t.reduce((m, p) => De(m, p), d), d.unstable_sxConfig = {
    ...vr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return yt({
      sx: p,
      theme: this
    });
  }, d;
}
const to = (e) => e, Ws = () => {
  let e = to;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = to;
    }
  };
}, Us = Ws(), Ys = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function it(e, t, r = "Mui") {
  const n = Ys[t];
  return n ? `${r}-${n}` : `${Us.generate(e)}-${t}`;
}
function Ct(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = it(e, o, r);
  }), n;
}
var Gr = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function qs() {
  if (ro) return le;
  ro = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case d:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case u:
                case y:
                case p:
                case i:
                  return h;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return le.ContextConsumer = a, le.ContextProvider = i, le.Element = e, le.ForwardRef = u, le.Fragment = r, le.Lazy = y, le.Memo = p, le.Portal = t, le.Profiler = o, le.StrictMode = n, le.Suspense = d, le.SuspenseList = m, le.isAsyncMode = function() {
    return !1;
  }, le.isConcurrentMode = function() {
    return !1;
  }, le.isContextConsumer = function(h) {
    return g(h) === a;
  }, le.isContextProvider = function(h) {
    return g(h) === i;
  }, le.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, le.isForwardRef = function(h) {
    return g(h) === u;
  }, le.isFragment = function(h) {
    return g(h) === r;
  }, le.isLazy = function(h) {
    return g(h) === y;
  }, le.isMemo = function(h) {
    return g(h) === p;
  }, le.isPortal = function(h) {
    return g(h) === t;
  }, le.isProfiler = function(h) {
    return g(h) === o;
  }, le.isStrictMode = function(h) {
    return g(h) === n;
  }, le.isSuspense = function(h) {
    return g(h) === d;
  }, le.isSuspenseList = function(h) {
    return g(h) === m;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === d || h === m || h === x || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === p || h.$$typeof === i || h.$$typeof === a || h.$$typeof === u || h.$$typeof === S || h.getModuleId !== void 0);
  }, le.typeOf = g, le;
}
var ue = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function Hs() {
  return no || (no = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = !1, g = !1, h = !1, E = !1, A = !1, T;
    T = Symbol.for("react.module.reference");
    function C(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === o || A || j === n || j === d || j === m || E || j === x || S || g || h || typeof j == "object" && j !== null && (j.$$typeof === y || j.$$typeof === p || j.$$typeof === i || j.$$typeof === a || j.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === T || j.getModuleId !== void 0));
    }
    function b(j) {
      if (typeof j == "object" && j !== null) {
        var Se = j.$$typeof;
        switch (Se) {
          case e:
            var Oe = j.type;
            switch (Oe) {
              case r:
              case o:
              case n:
              case d:
              case m:
                return Oe;
              default:
                var _e = Oe && Oe.$$typeof;
                switch (_e) {
                  case c:
                  case a:
                  case u:
                  case y:
                  case p:
                  case i:
                    return _e;
                  default:
                    return Se;
                }
            }
          case t:
            return Se;
        }
      }
    }
    var k = a, I = i, J = e, Z = u, s = r, $ = y, B = p, N = t, L = o, re = n, ee = d, ye = m, be = !1, ve = !1;
    function R(j) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(j) {
      return ve || (ve = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(j) {
      return b(j) === a;
    }
    function W(j) {
      return b(j) === i;
    }
    function D(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function Q(j) {
      return b(j) === u;
    }
    function z(j) {
      return b(j) === r;
    }
    function U(j) {
      return b(j) === y;
    }
    function q(j) {
      return b(j) === p;
    }
    function H(j) {
      return b(j) === t;
    }
    function F(j) {
      return b(j) === o;
    }
    function G(j) {
      return b(j) === n;
    }
    function O(j) {
      return b(j) === d;
    }
    function fe(j) {
      return b(j) === m;
    }
    ue.ContextConsumer = k, ue.ContextProvider = I, ue.Element = J, ue.ForwardRef = Z, ue.Fragment = s, ue.Lazy = $, ue.Memo = B, ue.Portal = N, ue.Profiler = L, ue.StrictMode = re, ue.Suspense = ee, ue.SuspenseList = ye, ue.isAsyncMode = R, ue.isConcurrentMode = _, ue.isContextConsumer = V, ue.isContextProvider = W, ue.isElement = D, ue.isForwardRef = Q, ue.isFragment = z, ue.isLazy = U, ue.isMemo = q, ue.isPortal = H, ue.isProfiler = F, ue.isStrictMode = G, ue.isSuspense = O, ue.isSuspenseList = fe, ue.isValidElementType = C, ue.typeOf = b;
  }()), ue;
}
process.env.NODE_ENV === "production" ? Gr.exports = qs() : Gr.exports = Hs();
var oo = Gr.exports;
function Lo(e, t = "") {
  return e.displayName || e.name || t;
}
function io(e, t, r) {
  const n = Lo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Gs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Lo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case oo.ForwardRef:
          return io(e, e.render, "ForwardRef");
        case oo.Memo:
          return io(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Wo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: eo(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = eo(o.style));
  }), n;
}
const Ks = zo();
function Br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Xs(e) {
  return e ? (t, r) => r[e] : null;
}
function Js(e, t, r) {
  e.theme = tc(e.theme) ? r : e.theme[t] || e.theme;
}
function rr(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => rr(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Uo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Uo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function Qs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ks,
    rootShouldForwardProp: n = Br,
    slotShouldForwardProp: o = Br
  } = e;
  function i(c) {
    Js(c, t, r);
  }
  return (c, u = {}) => {
    Ds(c, (b) => b.filter((k) => k !== yt));
    const {
      name: d,
      slot: m,
      skipVariantsResolver: p,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Xs(Yo(m)),
      ...S
    } = u, g = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), h = y || !1;
    let E = Br;
    m === "Root" || m === "root" ? E = n : m ? E = o : rc(c) && (E = void 0);
    const A = Bs(c, {
      shouldForwardProp: E,
      label: ec(d, m),
      ...S
    }), T = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(I) {
          return rr(I, b);
        };
      if (Xe(b)) {
        const k = Wo(b);
        return k.variants ? function(J) {
          return rr(J, k);
        } : k.style;
      }
      return b;
    }, C = (...b) => {
      const k = [], I = b.map(T), J = [];
      if (k.push(i), d && x && J.push(function(B) {
        var ee, ye;
        const L = (ye = (ee = B.theme.components) == null ? void 0 : ee[d]) == null ? void 0 : ye.styleOverrides;
        if (!L)
          return null;
        const re = {};
        for (const be in L)
          re[be] = rr(B, L[be]);
        return x(B, re);
      }), d && !g && J.push(function(B) {
        var re, ee;
        const N = B.theme, L = (ee = (re = N == null ? void 0 : N.components) == null ? void 0 : re[d]) == null ? void 0 : ee.variants;
        return L ? Uo(B, L) : null;
      }), h || J.push(yt), Array.isArray(I[0])) {
        const $ = I.shift(), B = new Array(k.length).fill(""), N = new Array(J.length).fill("");
        let L;
        L = [...B, ...$, ...N], L.raw = [...B, ...$.raw, ...N], k.unshift(L);
      }
      const Z = [...k, ...I, ...J], s = A(...Z);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = Zs(d, m, c)), s;
    };
    return A.withConfig && (C.withConfig = A.withConfig), C;
  };
}
function Zs(e, t, r) {
  return e ? `${e}${he(t || "")}` : `Styled(${Gs(r)})`;
}
function ec(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Yo(t || "Root")}`), r;
}
function tc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function rc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Yo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const nc = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
function mn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function oc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ic(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !oc(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ac = mn(f.elementType, ic), sc = f.oneOfType([f.func, f.object]);
function cc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let ao = 0;
function lc(e) {
  const [t, r] = M.useState(e), n = e || t;
  return M.useEffect(() => {
    t == null && (ao += 1, r(`mui-${ao}`));
  }, [t]), n;
}
const uc = {
  ...M
}, so = uc.useId;
function qo(e) {
  if (so !== void 0) {
    const t = so();
    return e ?? t;
  }
  return lc(e);
}
function fc({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = M.useRef(e !== void 0), [i, a] = M.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    M.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: d
    } = M.useRef(t);
    M.useEffect(() => {
      !o && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const u = M.useCallback((d) => {
    o || a(d);
  }, []);
  return [c, u];
}
function Xt(e) {
  const t = M.useRef(e);
  return nc(() => {
    t.current = e;
  }), M.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Kr(...e) {
  return M.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      cc(r, t);
    });
  }, e);
}
const co = {};
function Ho(e, t) {
  const r = M.useRef(co);
  return r.current === co && (r.current = e(t)), r;
}
const dc = [];
function pc(e) {
  M.useEffect(e, dc);
}
class hn {
  constructor() {
    Tt(this, "currentId", null);
    Tt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Tt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new hn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function mc() {
  const e = Ho(hn.create).current;
  return pc(e.disposeEffect), e;
}
function sr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const hc = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
}, gc = /* @__PURE__ */ M.createContext();
process.env.NODE_ENV !== "production" && (f.node, f.bool);
const yc = () => M.useContext(gc) ?? !1, bc = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (f.node, f.object);
function vc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? nr(o.defaultProps, n) : !o.styleOverrides && !o.variants ? nr(o, n) : n;
}
function Sc({
  props: e,
  name: t
}) {
  const r = M.useContext(bc);
  return vc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const lo = {
  theme: void 0
};
function Cc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (lo.theme = o.theme, i = Wo(e(lo)), t = i, r = o.theme), i;
  };
}
function xc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const uo = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ec = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || r && !r([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : t([...i, c], u, a));
    });
  }
  n(e);
}, wc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Dr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Ec(
    e,
    (c, u, d) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const m = `--${r ? `${r}-` : ""}${c.join("-")}`, p = wc(c, u);
        Object.assign(o, {
          [m]: p
        }), uo(i, c, `var(${m})`, d), uo(a, c, `var(${m}, ${p})`, d);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Tc(e, t = {}) {
  const {
    getSelector: r = h,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: p
  } = Dr(u, t);
  let y = p;
  const x = {}, {
    [c]: S,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([T, C]) => {
    const {
      vars: b,
      css: k,
      varsWithDefaults: I
    } = Dr(C, t);
    y = De(y, I), x[T] = {
      css: k,
      vars: b
    };
  }), S) {
    const {
      css: T,
      vars: C,
      varsWithDefaults: b
    } = Dr(S, t);
    y = De(y, b), x[c] = {
      css: T,
      vars: C
    };
  }
  function h(T, C) {
    var k, I;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), T) {
      if (b === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (k = i[T]) == null ? void 0 : k.palette) == null ? void 0 : I.mode) || T})`]: {
            ":root": C
          }
        };
      if (b)
        return e.defaultColorScheme === T ? `:root, ${b.replace("%s", String(T))}` : b.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let T = {
        ...d
      };
      return Object.entries(x).forEach(([, {
        vars: C
      }]) => {
        T = De(T, C);
      }), T;
    },
    generateStyleSheets: () => {
      var J, Z;
      const T = [], C = e.defaultColorScheme || "light";
      function b(s, $) {
        Object.keys($).length && T.push(typeof s == "string" ? {
          [s]: {
            ...$
          }
        } : s);
      }
      b(r(void 0, {
        ...m
      }), m);
      const {
        [C]: k,
        ...I
      } = x;
      if (k) {
        const {
          css: s
        } = k, $ = (Z = (J = i[C]) == null ? void 0 : J.palette) == null ? void 0 : Z.mode, B = !n && $ ? {
          colorScheme: $,
          ...s
        } : {
          ...s
        };
        b(r(C, {
          ...B
        }), B);
      }
      return Object.entries(I).forEach(([s, {
        css: $
      }]) => {
        var L, re;
        const B = (re = (L = i[s]) == null ? void 0 : L.palette) == null ? void 0 : re.mode, N = !n && B ? {
          colorScheme: B,
          ...$
        } : {
          ...$
        };
        b(r(s, {
          ...N
        }), N);
      }), T;
    }
  };
}
function Rc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Bt = {
  black: "#000",
  white: "#fff"
}, Oc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, lt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, ut = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, _t = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ft = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, dt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, pt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, fo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Bt.white,
    default: Bt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Fr = {
  text: {
    primary: Bt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Bt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function po(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = an(e.main, o) : t === "dark" && (e.dark = on(e.main, i)));
}
function $c(e = "light") {
  return e === "dark" ? {
    main: ft[200],
    light: ft[50],
    dark: ft[400]
  } : {
    main: ft[700],
    light: ft[400],
    dark: ft[800]
  };
}
function _c(e = "light") {
  return e === "dark" ? {
    main: lt[200],
    light: lt[50],
    dark: lt[400]
  } : {
    main: lt[500],
    light: lt[300],
    dark: lt[700]
  };
}
function Ac(e = "light") {
  return e === "dark" ? {
    main: ut[500],
    light: ut[300],
    dark: ut[700]
  } : {
    main: ut[700],
    light: ut[400],
    dark: ut[800]
  };
}
function kc(e = "light") {
  return e === "dark" ? {
    main: dt[400],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[700],
    light: dt[500],
    dark: dt[900]
  };
}
function Pc(e = "light") {
  return e === "dark" ? {
    main: pt[400],
    light: pt[300],
    dark: pt[700]
  } : {
    main: pt[800],
    light: pt[500],
    dark: pt[900]
  };
}
function Ic(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _t[500],
    dark: _t[900]
  };
}
function gn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || $c(t), a = e.secondary || _c(t), c = e.error || Ac(t), u = e.info || kc(t), d = e.success || Pc(t), m = e.warning || Ic(t);
  function p(g) {
    const h = Ln(g, Fr.text.primary) >= r ? Fr.text.primary : fo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Ln(g, h);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${h} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const y = ({
    color: g,
    name: h,
    mainShade: E = 500,
    lightShade: A = 300,
    darkShade: T = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[E] && (g.main = g[E]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Ze(11, h ? ` (${h})` : "", E));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ze(12, h ? ` (${h})` : "", JSON.stringify(g.main)));
    return po(g, "light", A, n), po(g, "dark", T, n), g.contrastText || (g.contrastText = p(g.main)), g;
  }, x = {
    dark: Fr,
    light: fo
  };
  return process.env.NODE_ENV !== "production" && (x[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), De({
    // A collection of common colors.
    common: {
      ...Bt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Oc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x[t]
  }, o);
}
function Mc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function jc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Nc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const mo = {
  textTransform: "uppercase"
}, ho = '"Roboto", "Helvetica", "Arial", sans-serif';
function Bc(e, t) {
  const {
    fontFamily: r = ho,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, x = m || ((h) => `${h / u * y}rem`), S = (h, E, A, T, C) => ({
    fontFamily: r,
    fontWeight: h,
    fontSize: x(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: A,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ho ? {
      letterSpacing: `${Nc(T / E)}em`
    } : {},
    ...C,
    ...d
  }), g = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(i, 48, 1.167, 0),
    h4: S(i, 34, 1.235, 0.25),
    h5: S(i, 24, 1.334, 0),
    h6: S(a, 20, 1.6, 0.15),
    subtitle1: S(i, 16, 1.75, 0.15),
    subtitle2: S(a, 14, 1.57, 0.1),
    body1: S(i, 16, 1.5, 0.15),
    body2: S(i, 14, 1.43, 0.15),
    button: S(a, 14, 1.75, 0.4, mo),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, mo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return De({
    htmlFontSize: u,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...g
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Dc = 0.2, Fc = 0.14, Vc = 0.12;
function ge(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Dc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Fc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Vc})`].join(",");
}
const zc = ["none", ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Lc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function go(e) {
  return `${Math.round(e)}ms`;
}
function Uc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Yc(e) {
  const t = {
    ...Lc,
    ...e.easing
  }, r = {
    ...Wc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Uc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (y) => typeof y == "string", p = (y) => !Number.isNaN(parseFloat(y));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(c) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !m(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : go(a)} ${c} ${typeof u == "string" ? u : go(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const qc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Xr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ze(20));
  const m = gn(i), p = zo(e);
  let y = De(p, {
    mixins: jc(p.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: zc.slice(),
    typography: Bc(m, c),
    transitions: Yc(a),
    zIndex: {
      ...qc
    }
  });
  if (y = De(y, d), y = t.reduce((x, S) => De(x, S), y), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (g, h) => {
      let E;
      for (E in g) {
        const A = g[E];
        if (x.includes(E) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = it("", E);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[E] = {};
        }
      }
    };
    Object.keys(y.components).forEach((g) => {
      const h = y.components[g].styleOverrides;
      h && g.startsWith("Mui") && S(h, g);
    });
  }
  return y.unstable_sxConfig = {
    ...vr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(S) {
    return yt({
      sx: S,
      theme: this
    });
  }, y;
}
function Hc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Gc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Hc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Go(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ko(e) {
  return e === "dark" ? Gc : [];
}
function Kc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = gn(t);
  return {
    palette: i,
    opacity: {
      ...Go(i.mode),
      ...r
    },
    overlays: n || Ko(i.mode),
    ...o
  };
}
function Xc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Jc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Qc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Jc(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Zc(e) {
  return Xe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function el(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Zc(c) || a.startsWith("unstable_") ? delete n[a] : Xe(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function tl(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Pt(e) {
  return !e || !e.startsWith("hsl") ? e : xo(e);
}
function Ke(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = kt(Pt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function rl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ye = (e) => {
  try {
    return e();
  } catch {
  }
}, nl = (e = "mui") => xc(e);
function Vr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Kc({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Xr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Go(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ko(o)
  }, a;
}
function ol(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Xc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, m = Object.keys(r)[0], p = n || (r.light && m !== "light" ? "light" : m), y = nl(i), {
    [p]: x,
    light: S,
    dark: g,
    ...h
  } = r, E = {
    ...h
  };
  let A = x;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ze(21, p));
  const T = Vr(E, A, d, p);
  S && !E.light && Vr(E, S, void 0, "light"), g && !E.dark && Vr(E, g, void 0, "dark");
  let C = {
    defaultColorScheme: p,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: y,
    colorSchemes: E,
    font: {
      ...Mc(T.typography),
      ...T.font
    },
    spacing: rl(d.spacing)
  };
  Object.keys(C.colorSchemes).forEach((Z) => {
    const s = C.colorSchemes[Z].palette, $ = (B) => {
      const N = B.split("-"), L = N[1], re = N[2];
      return y(B, s[L][re]);
    };
    if (s.mode === "light" && (v(s.common, "background", "#fff"), v(s.common, "onBackground", "#000")), s.mode === "dark" && (v(s.common, "background", "#000"), v(s.common, "onBackground", "#fff")), tl(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      v(s.Alert, "errorColor", pe(s.error.light, 0.6)), v(s.Alert, "infoColor", pe(s.info.light, 0.6)), v(s.Alert, "successColor", pe(s.success.light, 0.6)), v(s.Alert, "warningColor", pe(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", $("palette-error-main")), v(s.Alert, "infoFilledBg", $("palette-info-main")), v(s.Alert, "successFilledBg", $("palette-success-main")), v(s.Alert, "warningFilledBg", $("palette-warning-main")), v(s.Alert, "errorFilledColor", Ye(() => s.getContrastText(s.error.main))), v(s.Alert, "infoFilledColor", Ye(() => s.getContrastText(s.info.main))), v(s.Alert, "successFilledColor", Ye(() => s.getContrastText(s.success.main))), v(s.Alert, "warningFilledColor", Ye(() => s.getContrastText(s.warning.main))), v(s.Alert, "errorStandardBg", me(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", me(s.info.light, 0.9)), v(s.Alert, "successStandardBg", me(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", me(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", $("palette-error-main")), v(s.Alert, "infoIconColor", $("palette-info-main")), v(s.Alert, "successIconColor", $("palette-success-main")), v(s.Alert, "warningIconColor", $("palette-warning-main")), v(s.AppBar, "defaultBg", $("palette-grey-100")), v(s.Avatar, "defaultBg", $("palette-grey-400")), v(s.Button, "inheritContainedBg", $("palette-grey-300")), v(s.Button, "inheritContainedHoverBg", $("palette-grey-A100")), v(s.Chip, "defaultBorder", $("palette-grey-400")), v(s.Chip, "defaultAvatarColor", $("palette-grey-700")), v(s.Chip, "defaultIconColor", $("palette-grey-700")), v(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(s.LinearProgress, "primaryBg", me(s.primary.main, 0.62)), v(s.LinearProgress, "secondaryBg", me(s.secondary.main, 0.62)), v(s.LinearProgress, "errorBg", me(s.error.main, 0.62)), v(s.LinearProgress, "infoBg", me(s.info.main, 0.62)), v(s.LinearProgress, "successBg", me(s.success.main, 0.62)), v(s.LinearProgress, "warningBg", me(s.warning.main, 0.62)), v(s.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), v(s.Slider, "primaryTrack", me(s.primary.main, 0.62)), v(s.Slider, "secondaryTrack", me(s.secondary.main, 0.62)), v(s.Slider, "errorTrack", me(s.error.main, 0.62)), v(s.Slider, "infoTrack", me(s.info.main, 0.62)), v(s.Slider, "successTrack", me(s.success.main, 0.62)), v(s.Slider, "warningTrack", me(s.warning.main, 0.62));
      const B = Gt(s.background.default, 0.8);
      v(s.SnackbarContent, "bg", B), v(s.SnackbarContent, "color", Ye(() => s.getContrastText(B))), v(s.SpeedDialAction, "fabHoverBg", Gt(s.background.paper, 0.15)), v(s.StepConnector, "border", $("palette-grey-400")), v(s.StepContent, "border", $("palette-grey-400")), v(s.Switch, "defaultColor", $("palette-common-white")), v(s.Switch, "defaultDisabledColor", $("palette-grey-100")), v(s.Switch, "primaryDisabledColor", me(s.primary.main, 0.62)), v(s.Switch, "secondaryDisabledColor", me(s.secondary.main, 0.62)), v(s.Switch, "errorDisabledColor", me(s.error.main, 0.62)), v(s.Switch, "infoDisabledColor", me(s.info.main, 0.62)), v(s.Switch, "successDisabledColor", me(s.success.main, 0.62)), v(s.Switch, "warningDisabledColor", me(s.warning.main, 0.62)), v(s.TableCell, "border", me(Ht(s.divider, 1), 0.88)), v(s.Tooltip, "bg", Ht(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      v(s.Alert, "errorColor", me(s.error.light, 0.6)), v(s.Alert, "infoColor", me(s.info.light, 0.6)), v(s.Alert, "successColor", me(s.success.light, 0.6)), v(s.Alert, "warningColor", me(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", $("palette-error-dark")), v(s.Alert, "infoFilledBg", $("palette-info-dark")), v(s.Alert, "successFilledBg", $("palette-success-dark")), v(s.Alert, "warningFilledBg", $("palette-warning-dark")), v(s.Alert, "errorFilledColor", Ye(() => s.getContrastText(s.error.dark))), v(s.Alert, "infoFilledColor", Ye(() => s.getContrastText(s.info.dark))), v(s.Alert, "successFilledColor", Ye(() => s.getContrastText(s.success.dark))), v(s.Alert, "warningFilledColor", Ye(() => s.getContrastText(s.warning.dark))), v(s.Alert, "errorStandardBg", pe(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", pe(s.info.light, 0.9)), v(s.Alert, "successStandardBg", pe(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", pe(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", $("palette-error-main")), v(s.Alert, "infoIconColor", $("palette-info-main")), v(s.Alert, "successIconColor", $("palette-success-main")), v(s.Alert, "warningIconColor", $("palette-warning-main")), v(s.AppBar, "defaultBg", $("palette-grey-900")), v(s.AppBar, "darkBg", $("palette-background-paper")), v(s.AppBar, "darkColor", $("palette-text-primary")), v(s.Avatar, "defaultBg", $("palette-grey-600")), v(s.Button, "inheritContainedBg", $("palette-grey-800")), v(s.Button, "inheritContainedHoverBg", $("palette-grey-700")), v(s.Chip, "defaultBorder", $("palette-grey-700")), v(s.Chip, "defaultAvatarColor", $("palette-grey-300")), v(s.Chip, "defaultIconColor", $("palette-grey-300")), v(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(s.LinearProgress, "primaryBg", pe(s.primary.main, 0.5)), v(s.LinearProgress, "secondaryBg", pe(s.secondary.main, 0.5)), v(s.LinearProgress, "errorBg", pe(s.error.main, 0.5)), v(s.LinearProgress, "infoBg", pe(s.info.main, 0.5)), v(s.LinearProgress, "successBg", pe(s.success.main, 0.5)), v(s.LinearProgress, "warningBg", pe(s.warning.main, 0.5)), v(s.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), v(s.Slider, "primaryTrack", pe(s.primary.main, 0.5)), v(s.Slider, "secondaryTrack", pe(s.secondary.main, 0.5)), v(s.Slider, "errorTrack", pe(s.error.main, 0.5)), v(s.Slider, "infoTrack", pe(s.info.main, 0.5)), v(s.Slider, "successTrack", pe(s.success.main, 0.5)), v(s.Slider, "warningTrack", pe(s.warning.main, 0.5));
      const B = Gt(s.background.default, 0.98);
      v(s.SnackbarContent, "bg", B), v(s.SnackbarContent, "color", Ye(() => s.getContrastText(B))), v(s.SpeedDialAction, "fabHoverBg", Gt(s.background.paper, 0.15)), v(s.StepConnector, "border", $("palette-grey-600")), v(s.StepContent, "border", $("palette-grey-600")), v(s.Switch, "defaultColor", $("palette-grey-300")), v(s.Switch, "defaultDisabledColor", $("palette-grey-600")), v(s.Switch, "primaryDisabledColor", pe(s.primary.main, 0.55)), v(s.Switch, "secondaryDisabledColor", pe(s.secondary.main, 0.55)), v(s.Switch, "errorDisabledColor", pe(s.error.main, 0.55)), v(s.Switch, "infoDisabledColor", pe(s.info.main, 0.55)), v(s.Switch, "successDisabledColor", pe(s.success.main, 0.55)), v(s.Switch, "warningDisabledColor", pe(s.warning.main, 0.55)), v(s.TableCell, "border", pe(Ht(s.divider, 1), 0.68)), v(s.Tooltip, "bg", Ht(s.grey[700], 0.92));
    }
    Ke(s.background, "default"), Ke(s.background, "paper"), Ke(s.common, "background"), Ke(s.common, "onBackground"), Ke(s, "divider"), Object.keys(s).forEach((B) => {
      const N = s[B];
      N && typeof N == "object" && (N.main && v(s[B], "mainChannel", kt(Pt(N.main))), N.light && v(s[B], "lightChannel", kt(Pt(N.light))), N.dark && v(s[B], "darkChannel", kt(Pt(N.dark))), N.contrastText && v(s[B], "contrastTextChannel", kt(Pt(N.contrastText))), B === "text" && (Ke(s[B], "primary"), Ke(s[B], "secondary")), B === "action" && (N.active && Ke(s[B], "active"), N.selected && Ke(s[B], "selected")));
    });
  }), C = t.reduce((Z, s) => De(Z, s), C);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Qc(C)
  }, {
    vars: k,
    generateThemeVars: I,
    generateStyleSheets: J
  } = Tc(C, b);
  return C.vars = k, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([Z, s]) => {
    C[Z] = s;
  }), C.generateThemeVars = I, C.generateStyleSheets = J, C.generateSpacing = function() {
    return Vo(d.spacing, sn(this));
  }, C.getColorSchemeSelector = Rc(c), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = a, C.unstable_sxConfig = {
    ...vr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, C.unstable_sx = function(s) {
    return yt({
      sx: s,
      theme: this
    });
  }, C.toRuntimeSource = el, C;
}
function yo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: gn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function il(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", u = o == null ? void 0 : o[c], d = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Xr(e, ...t);
    let m = r;
    "palette" in e || d[c] && (d[c] !== !0 ? m = d[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const p = Xr({
      ...e,
      palette: m
    }, ...t);
    return p.defaultColorScheme = c, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, yo(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, yo(p, "light", d.light)), p;
  }
  return !r && !("light" in d) && c === "light" && (d.light = !0), ol({
    ...a,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const al = il(), sl = "$$material", Ue = Qs({
  themeId: sl,
  defaultTheme: al,
  rootShouldForwardProp: wo
}), vt = Cc;
process.env.NODE_ENV !== "production" && (f.node, f.object.isRequired);
function xt(e) {
  return Sc(e);
}
class cr {
  constructor() {
    Tt(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new cr();
  }
  static use() {
    const t = Ho(cr.create).current, [r, n] = M.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, M.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = ll(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function cl() {
  return cr.use();
}
function ll() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function ul(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Jr(e, t) {
  return Jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Jr(e, t);
}
function fl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jr(e, t);
}
const bo = nt.createContext(null);
function dl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yn(e, t) {
  var r = function(i) {
    return t && Jt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ri.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function pl(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var d = n[u][a];
        c[n[u][a]] = r(d);
      }
    c[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function ot(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function ml(e, t) {
  return yn(e.children, function(r) {
    return Qt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ot(r, "appear", e),
      enter: ot(r, "enter", e),
      exit: ot(r, "exit", e)
    });
  });
}
function hl(e, t, r) {
  var n = yn(e.children), o = pl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Jt(a)) {
      var c = i in t, u = i in n, d = t[i], m = Jt(d) && !d.props.in;
      u && (!c || m) ? o[i] = Qt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }) : !u && c && !m ? o[i] = Qt(a, {
        in: !1
      }) : u && c && Jt(d) && (o[i] = Qt(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }));
    }
  }), o;
}
var gl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, yl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, bn = /* @__PURE__ */ function(e) {
  fl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(dl(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? ml(o, c) : hl(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = yn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = ir({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = ul(o, ["component", "childFactory"]), u = this.state.contextValue, d = gl(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ nt.createElement(bo.Provider, {
      value: u
    }, d) : /* @__PURE__ */ nt.createElement(bo.Provider, {
      value: u
    }, /* @__PURE__ */ nt.createElement(i, c, d));
  }, t;
}(nt.Component);
bn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: f.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: f.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: f.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: f.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: f.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: f.func
} : {};
bn.defaultProps = yl;
function Xo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: d
  } = e, [m, p] = M.useState(!1), y = $e(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = $e(r.child, m && r.childLeaving, n && r.childPulsate);
  return !c && !m && p(!0), M.useEffect(() => {
    if (!c && u != null) {
      const g = setTimeout(u, d);
      return () => {
        clearTimeout(g);
      };
    }
  }, [u, c, d]), /* @__PURE__ */ X.jsx("span", {
    className: y,
    style: x,
    children: /* @__PURE__ */ X.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object.isRequired,
  className: f.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: f.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: f.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: f.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: f.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: f.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: f.number,
  /**
   * exit delay
   */
  timeout: f.number.isRequired
});
const ze = Ct("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Qr = 550, bl = 80, vl = pn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Sl = pn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Cl = pn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, xl = Ue("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), El = Ue(Xo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ze.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${vl};
    animation-duration: ${Qr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ze.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ze.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ze.childLeaving} {
    opacity: 0;
    animation-name: ${Sl};
    animation-duration: ${Qr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ze.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Cl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Jo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [u, d] = M.useState([]), m = M.useRef(0), p = M.useRef(null);
  M.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [u]);
  const y = M.useRef(!1), x = mc(), S = M.useRef(null), g = M.useRef(null), h = M.useCallback((C) => {
    const {
      pulsate: b,
      rippleX: k,
      rippleY: I,
      rippleSize: J,
      cb: Z
    } = C;
    d((s) => [...s, /* @__PURE__ */ X.jsx(El, {
      classes: {
        ripple: $e(i.ripple, ze.ripple),
        rippleVisible: $e(i.rippleVisible, ze.rippleVisible),
        ripplePulsate: $e(i.ripplePulsate, ze.ripplePulsate),
        child: $e(i.child, ze.child),
        childLeaving: $e(i.childLeaving, ze.childLeaving),
        childPulsate: $e(i.childPulsate, ze.childPulsate)
      },
      timeout: Qr,
      pulsate: b,
      rippleX: k,
      rippleY: I,
      rippleSize: J
    }, m.current)]), m.current += 1, p.current = Z;
  }, [i]), E = M.useCallback((C = {}, b = {}, k = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: J = o || b.pulsate,
      fakeElement: Z = !1
      // For test purposes
    } = b;
    if ((C == null ? void 0 : C.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (y.current = !0);
    const s = Z ? null : g.current, $ = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, N, L;
    if (J || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      B = Math.round($.width / 2), N = Math.round($.height / 2);
    else {
      const {
        clientX: re,
        clientY: ee
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      B = Math.round(re - $.left), N = Math.round(ee - $.top);
    }
    if (J)
      L = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const re = Math.max(Math.abs((s ? s.clientWidth : 0) - B), B) * 2 + 2, ee = Math.max(Math.abs((s ? s.clientHeight : 0) - N), N) * 2 + 2;
      L = Math.sqrt(re ** 2 + ee ** 2);
    }
    C != null && C.touches ? S.current === null && (S.current = () => {
      h({
        pulsate: I,
        rippleX: B,
        rippleY: N,
        rippleSize: L,
        cb: k
      });
    }, x.start(bl, () => {
      S.current && (S.current(), S.current = null);
    })) : h({
      pulsate: I,
      rippleX: B,
      rippleY: N,
      rippleSize: L,
      cb: k
    });
  }, [o, h, x]), A = M.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), T = M.useCallback((C, b) => {
    if (x.clear(), (C == null ? void 0 : C.type) === "touchend" && S.current) {
      S.current(), S.current = null, x.start(0, () => {
        T(C, b);
      });
      return;
    }
    S.current = null, d((k) => k.length > 0 ? k.slice(1) : k), p.current = b;
  }, [x]);
  return M.useImperativeHandle(r, () => ({
    pulsate: A,
    start: E,
    stop: T
  }), [A, E, T]), /* @__PURE__ */ X.jsx(xl, {
    className: $e(ze.root, i.root, a),
    ref: g,
    ...c,
    children: /* @__PURE__ */ X.jsx(bn, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: f.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string
});
function wl(e) {
  return it("MuiButtonBase", e);
}
const Tl = Ct("MuiButtonBase", ["root", "disabled", "focusVisible"]), Rl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Ft({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, wl, o);
  return r && n && (a.root += ` ${n}`), a;
}, Ol = Ue("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Tl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), vn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: d = !1,
    disableRipple: m = !1,
    disableTouchRipple: p = !1,
    focusRipple: y = !1,
    focusVisibleClassName: x,
    LinkComponent: S = "a",
    onBlur: g,
    onClick: h,
    onContextMenu: E,
    onDragLeave: A,
    onFocus: T,
    onFocusVisible: C,
    onKeyDown: b,
    onKeyUp: k,
    onMouseDown: I,
    onMouseLeave: J,
    onMouseUp: Z,
    onTouchEnd: s,
    onTouchMove: $,
    onTouchStart: B,
    tabIndex: N = 0,
    TouchRippleProps: L,
    touchRippleRef: re,
    type: ee,
    ...ye
  } = n, be = M.useRef(null), ve = cl(), R = Kr(ve.ref, re), [_, V] = M.useState(!1);
  d && _ && V(!1), M.useImperativeHandle(o, () => ({
    focusVisible: () => {
      V(!0), be.current.focus();
    }
  }), []);
  const W = ve.shouldMount && !m && !d;
  M.useEffect(() => {
    _ && y && !m && ve.pulsate();
  }, [m, y, _, ve]);
  function D(K, Ut, Yt = p) {
    return Xt((wt) => (Ut && Ut(wt), Yt || ve[K](wt), !0));
  }
  const Q = D("start", I), z = D("stop", E), U = D("stop", A), q = D("stop", Z), H = D("stop", (K) => {
    _ && K.preventDefault(), J && J(K);
  }), F = D("start", B), G = D("stop", s), O = D("stop", $), fe = D("stop", (K) => {
    sr(K.target) || V(!1), g && g(K);
  }, !1), j = Xt((K) => {
    be.current || (be.current = K.currentTarget), sr(K.target) && (V(!0), C && C(K)), T && T(K);
  }), Se = () => {
    const K = be.current;
    return u && u !== "button" && !(K.tagName === "A" && K.href);
  }, Oe = Xt((K) => {
    y && !K.repeat && _ && K.key === " " && ve.stop(K, () => {
      ve.start(K);
    }), K.target === K.currentTarget && Se() && K.key === " " && K.preventDefault(), b && b(K), K.target === K.currentTarget && Se() && K.key === "Enter" && !d && (K.preventDefault(), h && h(K));
  }), _e = Xt((K) => {
    y && K.key === " " && _ && !K.defaultPrevented && ve.stop(K, () => {
      ve.pulsate(K);
    }), k && k(K), h && K.target === K.currentTarget && Se() && K.key === " " && !K.defaultPrevented && h(K);
  });
  let Pe = u;
  Pe === "button" && (ye.href || ye.to) && (Pe = S);
  const Me = {};
  Pe === "button" ? (Me.type = ee === void 0 ? "button" : ee, Me.disabled = d) : (!ye.href && !ye.to && (Me.role = "button"), d && (Me["aria-disabled"] = d));
  const wr = Kr(r, be), Wt = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: d,
    disableRipple: m,
    disableTouchRipple: p,
    focusRipple: y,
    tabIndex: N,
    focusVisible: _
  }, Et = Rl(Wt);
  return /* @__PURE__ */ X.jsxs(Ol, {
    as: Pe,
    className: $e(Et.root, c),
    ownerState: Wt,
    onBlur: fe,
    onClick: h,
    onContextMenu: z,
    onFocus: j,
    onKeyDown: Oe,
    onKeyUp: _e,
    onMouseDown: Q,
    onMouseLeave: H,
    onMouseUp: q,
    onDragLeave: U,
    onTouchEnd: G,
    onTouchMove: O,
    onTouchStart: F,
    ref: wr,
    tabIndex: d ? -1 : N,
    type: ee,
    ...Me,
    ...ye,
    children: [a, W ? /* @__PURE__ */ X.jsx(Jo, {
      ref: R,
      center: i,
      ...L
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: sc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: f.bool,
  /**
   * The content of the component.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ac,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: f.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: f.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: f.string,
  /**
   * @ignore
   */
  href: f.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: f.elementType,
  /**
   * @ignore
   */
  onBlur: f.func,
  /**
   * @ignore
   */
  onClick: f.func,
  /**
   * @ignore
   */
  onContextMenu: f.func,
  /**
   * @ignore
   */
  onDragLeave: f.func,
  /**
   * @ignore
   */
  onFocus: f.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: f.func,
  /**
   * @ignore
   */
  onKeyDown: f.func,
  /**
   * @ignore
   */
  onKeyUp: f.func,
  /**
   * @ignore
   */
  onMouseDown: f.func,
  /**
   * @ignore
   */
  onMouseLeave: f.func,
  /**
   * @ignore
   */
  onMouseUp: f.func,
  /**
   * @ignore
   */
  onTouchEnd: f.func,
  /**
   * @ignore
   */
  onTouchMove: f.func,
  /**
   * @ignore
   */
  onTouchStart: f.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * @default 0
   */
  tabIndex: f.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: f.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: f.oneOfType([f.func, f.shape({
    current: f.shape({
      pulsate: f.func.isRequired,
      start: f.func.isRequired,
      stop: f.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: f.oneOfType([f.oneOf(["button", "reset", "submit"]), f.string])
});
function $l(e) {
  return typeof e.main == "string";
}
function _l(e, t = []) {
  if (!$l(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Zr(e = []) {
  return ([, t]) => t && _l(t, e);
}
function Al(e) {
  return it("MuiButton", e);
}
const mt = Ct("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Qo = /* @__PURE__ */ M.createContext({});
process.env.NODE_ENV !== "production" && (Qo.displayName = "ButtonGroupContext");
const Zo = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (Zo.displayName = "ButtonGroupButtonContext");
const kl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${he(t)}`, `size${he(o)}`, `${i}Size${he(o)}`, `color${he(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${he(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${he(o)}`]
  }, u = Ft(c, Al, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, ei = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Pl = Ue(vn, {
  shouldForwardProp: (e) => wo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${he(r.color)}`], t[`size${he(r.size)}`], t[`${r.variant}Size${he(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(vt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${mt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${mt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${mt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${mt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Zr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Qe(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${mt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${mt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Il = Ue("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${he(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...ei]
}), Ml = Ue("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${he(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...ei]
}), Sn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = M.useContext(Qo), o = M.useContext(Zo), i = nr(n, t), a = xt({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: d = "button",
    className: m,
    disabled: p = !1,
    disableElevation: y = !1,
    disableFocusRipple: x = !1,
    endIcon: S,
    focusVisibleClassName: g,
    fullWidth: h = !1,
    size: E = "medium",
    startIcon: A,
    type: T,
    variant: C = "text",
    ...b
  } = a, k = {
    ...a,
    color: u,
    component: d,
    disabled: p,
    disableElevation: y,
    disableFocusRipple: x,
    fullWidth: h,
    size: E,
    type: T,
    variant: C
  }, I = kl(k), J = A && /* @__PURE__ */ X.jsx(Il, {
    className: I.startIcon,
    ownerState: k,
    children: A
  }), Z = S && /* @__PURE__ */ X.jsx(Ml, {
    className: I.endIcon,
    ownerState: k,
    children: S
  }), s = o || "";
  return /* @__PURE__ */ X.jsxs(Pl, {
    ownerState: k,
    className: $e(n.className, I.root, m, s),
    component: d,
    disabled: p,
    focusRipple: !x,
    focusVisibleClassName: $e(I.focusVisible, g),
    ref: r,
    type: T,
    ...b,
    classes: I,
    children: [J, c, Z]
  });
});
process.env.NODE_ENV !== "production" && (Sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: f.oneOfType([f.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), f.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: f.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: f.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * Element placed after the children.
   */
  endIcon: f.node,
  /**
   * @ignore
   */
  focusVisibleClassName: f.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: f.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: f.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * Element placed before the children.
   */
  startIcon: f.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * @ignore
   */
  type: f.oneOfType([f.oneOf(["button", "reset", "submit"]), f.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: f.oneOfType([f.oneOf(["contained", "outlined", "text"]), f.string])
});
function nu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ X.jsx(
      Sn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
function ou(e) {
  const { bgColor: t, text: r, txtColor: n, disabled: o, onClick: i, size: a, borderColor: c, border: u, hoverTxtColor: d, hoverBgColor: m } = e;
  return (
    // Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente
    /* @__PURE__ */ X.jsx(
      Sn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: {
          backgroundColor: t,
          color: n,
          border: `${u}px solid ${c}`,
          ":hover": {
            backgroundColor: m,
            color: d
          }
        },
        children: r
      }
    )
  );
}
function jl(e) {
  return it("MuiIconButton", e);
}
const Nl = Ct("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Bl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${he(n)}`, o && `edge${he(o)}`, `size${he(i)}`]
  };
  return Ft(a, jl, t);
}, Dl = Ue(vn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${he(r.color)}`], r.edge && t[`edge${he(r.edge)}`], t[`size${he(r.size)}`]];
  }
})(vt(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), vt(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Zr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Zr()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Nl.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Cn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: u = !1,
    disableFocusRipple: d = !1,
    disableRipple: m = !1,
    size: p = "medium",
    ...y
  } = n, x = {
    ...n,
    edge: o,
    color: c,
    disabled: u,
    disableFocusRipple: d,
    disableRipple: m,
    size: p
  }, S = Bl(x);
  return /* @__PURE__ */ X.jsx(Dl, {
    className: $e(S.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: u,
    disableRipple: m,
    ref: r,
    ...y,
    ownerState: x,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Cn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: mn(f.node, (e) => M.Children.toArray(e.children).some((r) => /* @__PURE__ */ M.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: f.oneOfType([f.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), f.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: f.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object])
});
function Fl(e) {
  return it("MuiSvgIcon", e);
}
Ct("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Vl = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${he(t)}`, `fontSize${he(r)}`]
  };
  return Ft(o, Fl, n);
}, zl = Ue("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${he(r.color)}`], t[`fontSize${he(r.fontSize)}`]];
  }
})(vt(({
  theme: e
}) => {
  var t, r, n, o, i, a, c, u, d, m, p, y, x, S;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (g) => !g.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((u = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var h, E;
        return {
          props: {
            color: g
          },
          style: {
            color: (E = (h = (e.vars ?? e).palette) == null ? void 0 : h[g]) == null ? void 0 : E.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (y = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : y.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (S = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) == null ? void 0 : S.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Dt = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: d,
    inheritViewBox: m = !1,
    titleAccess: p,
    viewBox: y = "0 0 24 24",
    ...x
  } = n, S = /* @__PURE__ */ M.isValidElement(o) && o.type === "svg", g = {
    ...n,
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: y,
    hasSvgAsChild: S
  }, h = {};
  m || (h.viewBox = y);
  const E = Vl(g);
  return /* @__PURE__ */ X.jsxs(zl, {
    as: c,
    className: $e(E.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r,
    ...h,
    ...x,
    ...S && o.props,
    ownerState: g,
    children: [S ? o.props.children : o, p ? /* @__PURE__ */ X.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Dt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: f.oneOfType([f.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), f.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: f.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: f.oneOfType([f.oneOf(["inherit", "large", "medium", "small"]), f.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: f.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: f.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: f.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: f.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: f.string
});
Dt && (Dt.muiName = "SvgIcon");
function Er(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ X.jsx(Dt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Dt.muiName, /* @__PURE__ */ M.memo(/* @__PURE__ */ M.forwardRef(r));
}
const Ll = Er(/* @__PURE__ */ X.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function iu(e) {
  const { color: t, disabled: r, onClick: n } = e;
  return (
    // Uso el IconButton de la librería MUI y lo personalizo con las props que pasan a mi componente
    /* @__PURE__ */ X.jsx(
      Cn,
      {
        onClick: n,
        disabled: r,
        sx: {
          color: t
        },
        children: /* @__PURE__ */ X.jsx(Ll, {})
      }
    )
  );
}
const Wl = Er(/* @__PURE__ */ X.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function au(e) {
  const { color: t, disabled: r, onClick: n } = e;
  return (
    // Uso el IconButton de la librería MUI y lo personalizo con las props que pasan a mi componente
    /* @__PURE__ */ X.jsx(
      Cn,
      {
        onClick: n,
        disabled: r,
        sx: {
          color: t
        },
        children: /* @__PURE__ */ X.jsx(Wl, {})
      }
    )
  );
}
const Ul = Er(/* @__PURE__ */ X.jsx("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), Yl = Er(/* @__PURE__ */ X.jsx("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), "StarBorder");
function ql(e) {
  return it("MuiRating", e);
}
const At = Ct("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]);
function Hl(e) {
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function zr(e, t) {
  if (e == null)
    return e;
  const r = Math.round(e / t) * t;
  return Number(r.toFixed(Hl(t)));
}
const Gl = (e) => {
  const {
    classes: t,
    size: r,
    readOnly: n,
    disabled: o,
    emptyValueFocused: i,
    focusVisible: a
  } = e, c = {
    root: ["root", `size${he(r)}`, o && "disabled", a && "focusVisible", n && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [i && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return Ft(c, ql, t);
}, Kl = Ue("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${At.visuallyHidden}`]: t.visuallyHidden
    }, t.root, t[`size${he(r.size)}`], r.readOnly && t.readOnly];
  }
})(vt(({
  theme: e
}) => ({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: e.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${At.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${At.focusVisible} .${At.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${At.visuallyHidden}`]: hc,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      fontSize: e.typography.pxToRem(30)
    }
  }, {
    // TODO v6: use the .Mui-readOnly global state class
    props: ({
      ownerState: t
    }) => t.readOnly,
    style: {
      pointerEvents: "none"
    }
  }]
}))), ti = Ue("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState: e
  }, t) => [t.label, e.emptyValueFocused && t.labelEmptyValueActive]
})({
  cursor: "inherit",
  variants: [{
    props: ({
      ownerState: e
    }) => e.emptyValueFocused,
    style: {
      top: 0,
      bottom: 0,
      position: "absolute",
      outline: "1px solid #999",
      width: "100%"
    }
  }]
}), Xl = Ue("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.icon, r.iconEmpty && t.iconEmpty, r.iconFilled && t.iconFilled, r.iconHover && t.iconHover, r.iconFocus && t.iconFocus, r.iconActive && t.iconActive];
  }
})(vt(({
  theme: e
}) => ({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => t.iconActive,
    style: {
      transform: "scale(1.2)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.iconEmpty,
    style: {
      color: (e.vars || e).palette.action.disabled
    }
  }]
}))), Jl = Ue("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (e) => Eo(e) && e !== "iconActive",
  overridesResolver: (e, t) => {
    const {
      iconActive: r
    } = e;
    return [t.decimal, r && t.iconActive];
  }
})({
  position: "relative",
  variants: [{
    props: ({
      iconActive: e
    }) => e,
    style: {
      transform: "scale(1.2)"
    }
  }]
});
function ri(e) {
  const {
    value: t,
    ...r
  } = e;
  return /* @__PURE__ */ X.jsx("span", {
    ...r
  });
}
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  value: f.number.isRequired
});
function en(e) {
  const {
    classes: t,
    disabled: r,
    emptyIcon: n,
    focus: o,
    getLabelText: i,
    highlightSelectedOnly: a,
    hover: c,
    icon: u,
    IconContainerComponent: d,
    isActive: m,
    itemValue: p,
    labelProps: y,
    name: x,
    onBlur: S,
    onChange: g,
    onClick: h,
    onFocus: E,
    readOnly: A,
    ownerState: T,
    ratingValue: C,
    ratingValueRounded: b
  } = e, k = a ? p === C : p <= C, I = p <= c, J = p <= o, Z = p === b, s = `${x}-${qo()}`, $ = /* @__PURE__ */ X.jsx(Xl, {
    as: d,
    value: p,
    className: $e(t.icon, k ? t.iconFilled : t.iconEmpty, I && t.iconHover, J && t.iconFocus, m && t.iconActive),
    ownerState: {
      ...T,
      iconEmpty: !k,
      iconFilled: k,
      iconHover: I,
      iconFocus: J,
      iconActive: m
    },
    children: n && !k ? n : u
  });
  return A ? /* @__PURE__ */ X.jsx("span", {
    ...y,
    children: $
  }) : /* @__PURE__ */ X.jsxs(M.Fragment, {
    children: [/* @__PURE__ */ X.jsxs(ti, {
      ownerState: {
        ...T,
        emptyValueFocused: void 0
      },
      htmlFor: s,
      ...y,
      children: [$, /* @__PURE__ */ X.jsx("span", {
        className: t.visuallyHidden,
        children: i(p)
      })]
    }), /* @__PURE__ */ X.jsx("input", {
      className: t.visuallyHidden,
      onFocus: E,
      onBlur: S,
      onChange: g,
      onClick: h,
      disabled: r,
      value: p,
      id: s,
      type: "radio",
      name: x,
      checked: Z
    })]
  });
}
process.env.NODE_ENV !== "production" && (en.propTypes = {
  classes: f.object.isRequired,
  disabled: f.bool.isRequired,
  emptyIcon: f.node,
  focus: f.number.isRequired,
  getLabelText: f.func.isRequired,
  highlightSelectedOnly: f.bool.isRequired,
  hover: f.number.isRequired,
  icon: f.node,
  IconContainerComponent: f.elementType.isRequired,
  isActive: f.bool.isRequired,
  itemValue: f.number.isRequired,
  labelProps: f.object,
  name: f.string,
  onBlur: f.func.isRequired,
  onChange: f.func.isRequired,
  onClick: f.func.isRequired,
  onFocus: f.func.isRequired,
  ownerState: f.object.isRequired,
  ratingValue: f.number,
  ratingValueRounded: f.number,
  readOnly: f.bool.isRequired
});
const Ql = /* @__PURE__ */ X.jsx(Ul, {
  fontSize: "inherit"
}), Zl = /* @__PURE__ */ X.jsx(Yl, {
  fontSize: "inherit"
});
function eu(e) {
  return `${e || "0"} Star${e !== 1 ? "s" : ""}`;
}
const ni = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    name: "MuiRating",
    props: t
  }), {
    className: o,
    defaultValue: i = null,
    disabled: a = !1,
    emptyIcon: c = Zl,
    emptyLabelText: u = "Empty",
    getLabelText: d = eu,
    highlightSelectedOnly: m = !1,
    icon: p = Ql,
    IconContainerComponent: y = ri,
    max: x = 5,
    name: S,
    onChange: g,
    onChangeActive: h,
    onMouseLeave: E,
    onMouseMove: A,
    precision: T = 1,
    readOnly: C = !1,
    size: b = "medium",
    value: k,
    ...I
  } = n, J = qo(S), [Z, s] = fc({
    controlled: k,
    default: i,
    name: "Rating"
  }), $ = zr(Z, T), B = yc(), [{
    hover: N,
    focus: L
  }, re] = M.useState({
    hover: -1,
    focus: -1
  });
  let ee = $;
  N !== -1 && (ee = N), L !== -1 && (ee = L);
  const [ye, be] = M.useState(!1), ve = M.useRef(), R = Kr(ve, r), _ = (G) => {
    A && A(G);
    const O = ve.current, {
      right: fe,
      left: j,
      width: Se
    } = O.getBoundingClientRect();
    let Oe;
    B ? Oe = (fe - G.clientX) / Se : Oe = (G.clientX - j) / Se;
    let _e = zr(x * Oe + T / 2, T);
    _e = Co(_e, T, x), re((Pe) => Pe.hover === _e && Pe.focus === _e ? Pe : {
      hover: _e,
      focus: _e
    }), be(!1), h && N !== _e && h(G, _e);
  }, V = (G) => {
    E && E(G);
    const O = -1;
    re({
      hover: O,
      focus: O
    }), h && N !== O && h(G, O);
  }, W = (G) => {
    let O = G.target.value === "" ? null : parseFloat(G.target.value);
    N !== -1 && (O = N), s(O), g && g(G, O);
  }, D = (G) => {
    G.clientX === 0 && G.clientY === 0 || (re({
      hover: -1,
      focus: -1
    }), s(null), g && parseFloat(G.target.value) === $ && g(G, null));
  }, Q = (G) => {
    sr(G.target) && be(!0);
    const O = parseFloat(G.target.value);
    re((fe) => ({
      hover: fe.hover,
      focus: O
    }));
  }, z = (G) => {
    if (N !== -1)
      return;
    sr(G.target) || be(!1);
    const O = -1;
    re((fe) => ({
      hover: fe.hover,
      focus: O
    }));
  }, [U, q] = M.useState(!1), H = {
    ...n,
    defaultValue: i,
    disabled: a,
    emptyIcon: c,
    emptyLabelText: u,
    emptyValueFocused: U,
    focusVisible: ye,
    getLabelText: d,
    icon: p,
    IconContainerComponent: y,
    max: x,
    precision: T,
    readOnly: C,
    size: b
  }, F = Gl(H);
  return /* @__PURE__ */ X.jsxs(Kl, {
    ref: R,
    onMouseMove: _,
    onMouseLeave: V,
    className: $e(F.root, o, C && "MuiRating-readOnly"),
    ownerState: H,
    role: C ? "img" : null,
    "aria-label": C ? d(ee) : null,
    ...I,
    children: [Array.from(new Array(x)).map((G, O) => {
      const fe = O + 1, j = {
        classes: F,
        disabled: a,
        emptyIcon: c,
        focus: L,
        getLabelText: d,
        highlightSelectedOnly: m,
        hover: N,
        icon: p,
        IconContainerComponent: y,
        name: J,
        onBlur: z,
        onChange: W,
        onClick: D,
        onFocus: Q,
        ratingValue: ee,
        ratingValueRounded: $,
        readOnly: C,
        ownerState: H
      }, Se = fe === Math.ceil(ee) && (N !== -1 || L !== -1);
      if (T < 1) {
        const Oe = Array.from(new Array(1 / T));
        return /* @__PURE__ */ X.jsx(Jl, {
          className: $e(F.decimal, Se && F.iconActive),
          ownerState: H,
          iconActive: Se,
          children: Oe.map((_e, Pe) => {
            const Me = zr(fe - 1 + (Pe + 1) * T, T);
            return /* @__PURE__ */ X.jsx(en, {
              ...j,
              // The icon is already displayed as active
              isActive: !1,
              itemValue: Me,
              labelProps: {
                style: Oe.length - 1 === Pe ? {} : {
                  width: Me === ee ? `${(Pe + 1) * T * 100}%` : "0%",
                  overflow: "hidden",
                  position: "absolute"
                }
              }
            }, Me);
          })
        }, fe);
      }
      return /* @__PURE__ */ X.jsx(en, {
        ...j,
        isActive: Se,
        itemValue: fe
      }, fe);
    }), !C && !a && /* @__PURE__ */ X.jsxs(ti, {
      className: $e(F.label, F.labelEmptyValue),
      ownerState: H,
      children: [/* @__PURE__ */ X.jsx("input", {
        className: F.visuallyHidden,
        value: "",
        id: `${J}-empty`,
        type: "radio",
        name: J,
        checked: $ == null,
        onFocus: () => q(!0),
        onBlur: () => q(!1),
        onChange: W
      }), /* @__PURE__ */ X.jsx("span", {
        className: F.visuallyHidden,
        children: u
      })]
    })]
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The default value. Use when the component is not controlled.
   * @default null
   */
  defaultValue: f.number,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * The icon to display when empty.
   * @default <StarBorder fontSize="inherit" />
   */
  emptyIcon: f.node,
  /**
   * The label read when the rating input is empty.
   * @default 'Empty'
   */
  emptyLabelText: f.node,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {number} value The rating label's value to format.
   * @returns {string}
   * @default function defaultLabelText(value) {
   *   return `${value || '0'} Star${value !== 1 ? 's' : ''}`;
   * }
   */
  getLabelText: f.func,
  /**
   * If `true`, only the selected icon will be highlighted.
   * @default false
   */
  highlightSelectedOnly: f.bool,
  /**
   * The icon to display.
   * @default <Star fontSize="inherit" />
   */
  icon: f.node,
  /**
   * The component containing the icon.
   * @default function IconContainer(props) {
   *   const { value, ...other } = props;
   *   return <span {...other} />;
   * }
   */
  IconContainerComponent: f.elementType,
  /**
   * Maximum rating.
   * @default 5
   */
  max: f.number,
  /**
   * The name attribute of the radio `input` elements.
   * This input `name` should be unique within the page.
   * Being unique within a form is insufficient since the `name` is used to generate IDs.
   */
  name: f.string,
  /**
   * Callback fired when the value changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number|null} value The new value.
   */
  onChange: f.func,
  /**
   * Callback function that is fired when the hover state changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChangeActive: f.func,
  /**
   * @ignore
   */
  onMouseLeave: f.func,
  /**
   * @ignore
   */
  onMouseMove: f.func,
  /**
   * The minimum increment value change allowed.
   * @default 1
   */
  precision: mn(f.number, (e) => e.precision < 0.1 ? new Error(["MUI: The prop `precision` should be above 0.1.", "A value below this limit has an imperceptible impact."].join(`
`)) : null),
  /**
   * Removes all hover effects and pointer events.
   * @default false
   */
  readOnly: f.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * The rating value.
   */
  value: f.number
});
function su(e) {
  const { defaultValue: t, color: r, precision: n, max: o, readOnly: i, disabled: a, size: c } = e;
  return (
    // Uso el IconButton de la librería MUI y lo personalizo con las props que pasan a mi componente
    /* @__PURE__ */ X.jsx(
      ni,
      {
        defaultValue: t,
        precision: n,
        max: o,
        readOnly: i,
        disabled: a,
        size: c,
        sx: {
          color: r
        }
      }
    )
  );
}
export {
  nu as CustomButton,
  su as DanielVS,
  ou as MyButton,
  iu as MyFavorite,
  au as MyFavoriteBorder
};
//# sourceMappingURL=index.es.js.map
