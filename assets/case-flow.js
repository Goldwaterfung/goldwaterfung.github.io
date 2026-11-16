function $d(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var rd = { exports: {} }, Du = {};
var _y;
function O2() {
  if (_y) return Du;
  _y = 1;
  var l = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function o(r, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var g in s)
        g !== "key" && (f[g] = s[g]);
    } else f = s;
    return s = f.ref, {
      $$typeof: l,
      type: r,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return Du.Fragment = a, Du.jsx = o, Du.jsxs = o, Du;
}
var Ny;
function D2() {
  return Ny || (Ny = 1, rd.exports = O2()), rd.exports;
}
var G = D2(), sd = { exports: {} }, Et = {};
var Ty;
function R2() {
  if (Ty) return Et;
  Ty = 1;
  var l = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), x = Symbol.for("react.view_transition"), S = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object" ? null : (T = S && T[S] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, _ = {};
  function L(T, F, st) {
    this.props = T, this.context = F, this.refs = _, this.updater = st || A;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(T, F) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, F, "setState");
  }, L.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function w() {
  }
  w.prototype = L.prototype;
  function M(T, F, st) {
    this.props = T, this.context = F, this.refs = _, this.updater = st || A;
  }
  var Y = M.prototype = new w();
  Y.constructor = M, N(Y, L.prototype), Y.isPureReactComponent = !0;
  var H = Array.isArray;
  function R() {
  }
  var Z = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function at(T, F, st) {
    var ut = st.ref;
    return {
      $$typeof: l,
      type: T,
      key: F,
      ref: ut !== void 0 ? ut : null,
      props: st
    };
  }
  function tt(T, F) {
    return at(T.type, F, T.props);
  }
  function ot(T) {
    return typeof T == "object" && T !== null && T.$$typeof === l;
  }
  function lt(T) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(st) {
      return F[st];
    });
  }
  var C = /\/+/g;
  function V(T, F) {
    return typeof T == "object" && T !== null && T.key != null ? lt("" + T.key) : F.toString(36);
  }
  function O(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(R, R) : (T.status = "pending", T.then(
          function(F) {
            T.status === "pending" && (T.status = "fulfilled", T.value = F);
          },
          function(F) {
            T.status === "pending" && (T.status = "rejected", T.reason = F);
          }
        )), T.status) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function B(T, F, st, ut, k) {
    var ft = typeof T;
    (ft === "undefined" || ft === "boolean") && (T = null);
    var gt = !1;
    if (T === null) gt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case l:
            case a:
              gt = !0;
              break;
            case y:
              return gt = T._init, B(
                gt(T._payload),
                F,
                st,
                ut,
                k
              );
          }
      }
    if (gt)
      return k = k(T), gt = ut === "" ? "." + V(T, 0) : ut, H(k) ? (st = "", gt != null && (st = gt.replace(C, "$&/") + "/"), B(k, F, st, "", function(vt) {
        return vt;
      })) : k != null && (ot(k) && (k = tt(
        k,
        st + (k.key == null || T && T.key === k.key ? "" : ("" + k.key).replace(
          C,
          "$&/"
        ) + "/") + gt
      )), F.push(k)), 1;
    gt = 0;
    var ct = ut === "" ? "." : ut + ":";
    if (H(T))
      for (var rt = 0; rt < T.length; rt++)
        ut = T[rt], ft = ct + V(ut, rt), gt += B(
          ut,
          F,
          st,
          ft,
          k
        );
    else if (rt = E(T), typeof rt == "function")
      for (T = rt.call(T), rt = 0; !(ut = T.next()).done; )
        ut = ut.value, ft = ct + V(ut, rt++), gt += B(
          ut,
          F,
          st,
          ft,
          k
        );
    else if (ft === "object") {
      if (typeof T.then == "function")
        return B(
          O(T),
          F,
          st,
          ut,
          k
        );
      throw F = String(T), Error(
        "Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return gt;
  }
  function X(T, F, st) {
    if (T == null) return T;
    var ut = [], k = 0;
    return B(T, ut, "", "", function(ft) {
      return F.call(st, ft, k++);
    }), ut;
  }
  function $(T) {
    if (T._status === -1) {
      var F = T._result, st = F();
      st.then(
        function(ut) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ut, st.status === void 0 && (st.status = "fulfilled", st.value = ut));
        },
        function(ut) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ut, st.status === void 0 && (st.status = "rejected", st.reason = ut));
        }
      ), T._status === -1 && (T._status = 0, T._result = st);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var P = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var F = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(F)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  };
  function it(T) {
    var F = Z.T, st = {};
    st.types = F !== null ? F.types : null, Z.T = st;
    try {
      var ut = T(), k = Z.S;
      k !== null && k(st, ut), typeof ut == "object" && ut !== null && typeof ut.then == "function" && ut.then(R, P);
    } catch (ft) {
      P(ft);
    } finally {
      F !== null && st.types !== null && (F.types = st.types), Z.T = F;
    }
  }
  function dt(T) {
    var F = Z.T;
    if (F !== null) {
      var st = F.types;
      st === null ? F.types = [T] : st.indexOf(T) === -1 && st.push(T);
    } else it(dt.bind(null, T));
  }
  var xt = {
    map: X,
    forEach: function(T, F, st) {
      X(
        T,
        function() {
          F.apply(this, arguments);
        },
        st
      );
    },
    count: function(T) {
      var F = 0;
      return X(T, function() {
        F++;
      }), F;
    },
    toArray: function(T) {
      return X(T, function(F) {
        return F;
      }) || [];
    },
    only: function(T) {
      if (!ot(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  };
  return Et.Activity = m, Et.Children = xt, Et.Component = L, Et.Fragment = o, Et.Profiler = s, Et.PureComponent = M, Et.StrictMode = r, Et.Suspense = v, Et.ViewTransition = x, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return Z.H.useMemoCache(T);
    }
  }, Et.addTransitionType = dt, Et.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(T, F, st) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var ut = N({}, T.props), k = T.key;
    if (F != null)
      for (ft in F.key !== void 0 && (k = "" + F.key), F)
        !J.call(F, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && F.ref === void 0 || (ut[ft] = F[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) ut.children = st;
    else if (1 < ft) {
      for (var gt = Array(ft), ct = 0; ct < ft; ct++)
        gt[ct] = arguments[ct + 2];
      ut.children = gt;
    }
    return at(T.type, k, ut);
  }, Et.createContext = function(T) {
    return T = {
      $$typeof: d,
      _currentValue: T,
      _currentValue2: T,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, T.Provider = T, T.Consumer = {
      $$typeof: f,
      _context: T
    }, T;
  }, Et.createElement = function(T, F, st) {
    var ut, k = {}, ft = null;
    if (F != null)
      for (ut in F.key !== void 0 && (ft = "" + F.key), F)
        J.call(F, ut) && ut !== "key" && ut !== "__self" && ut !== "__source" && (k[ut] = F[ut]);
    var gt = arguments.length - 2;
    if (gt === 1) k.children = st;
    else if (1 < gt) {
      for (var ct = Array(gt), rt = 0; rt < gt; rt++)
        ct[rt] = arguments[rt + 2];
      k.children = ct;
    }
    if (T && T.defaultProps)
      for (ut in gt = T.defaultProps, gt)
        k[ut] === void 0 && (k[ut] = gt[ut]);
    return at(T, ft, k);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(T) {
    return { $$typeof: g, render: T };
  }, Et.isValidElement = ot, Et.lazy = function(T) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: T },
      _init: $
    };
  }, Et.memo = function(T, F) {
    return {
      $$typeof: p,
      type: T,
      compare: F === void 0 ? null : F
    };
  }, Et.startTransition = it, Et.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, Et.use = function(T) {
    return Z.H.use(T);
  }, Et.useActionState = function(T, F, st) {
    return Z.H.useActionState(T, F, st);
  }, Et.useCallback = function(T, F) {
    return Z.H.useCallback(T, F);
  }, Et.useContext = function(T) {
    return Z.H.useContext(T);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(T, F) {
    return Z.H.useDeferredValue(T, F);
  }, Et.useEffect = function(T, F) {
    return Z.H.useEffect(T, F);
  }, Et.useEffectEvent = function(T) {
    return Z.H.useEffectEvent(T);
  }, Et.useId = function() {
    return Z.H.useId();
  }, Et.useImperativeHandle = function(T, F, st) {
    return Z.H.useImperativeHandle(T, F, st);
  }, Et.useInsertionEffect = function(T, F) {
    return Z.H.useInsertionEffect(T, F);
  }, Et.useLayoutEffect = function(T, F) {
    return Z.H.useLayoutEffect(T, F);
  }, Et.useMemo = function(T, F) {
    return Z.H.useMemo(T, F);
  }, Et.useOptimistic = function(T, F) {
    return Z.H.useOptimistic(T, F);
  }, Et.useReducer = function(T, F, st) {
    return Z.H.useReducer(T, F, st);
  }, Et.useRef = function(T) {
    return Z.H.useRef(T);
  }, Et.useState = function(T) {
    return Z.H.useState(T);
  }, Et.useSyncExternalStore = function(T, F, st) {
    return Z.H.useSyncExternalStore(
      T,
      F,
      st
    );
  }, Et.useTransition = function() {
    return Z.H.useTransition();
  }, Et.version = "19.3.1", Et;
}
var My;
function Ju() {
  return My || (My = 1, sd.exports = R2()), sd.exports;
}
var W = Ju();
const Jv = /* @__PURE__ */ $d(W);
var fd = { exports: {} }, Ru = {}, dd = { exports: {} }, hd = {};
var Cy;
function H2() {
  return Cy || (Cy = 1, (function(l) {
    function a(O, B) {
      var X = O.length;
      O.push(B);
      t: for (; 0 < X; ) {
        var $ = X - 1 >>> 1, P = O[$];
        if (0 < s(P, B))
          O[$] = B, O[X] = P, X = $;
        else break t;
      }
    }
    function o(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var B = O[0], X = O.pop();
      if (X !== B) {
        O[0] = X;
        t: for (var $ = 0, P = O.length, it = P >>> 1; $ < it; ) {
          var dt = 2 * ($ + 1) - 1, xt = O[dt], T = dt + 1, F = O[T];
          if (0 > s(xt, X))
            T < P && 0 > s(F, xt) ? (O[$] = F, O[T] = X, $ = T) : (O[$] = xt, O[dt] = X, $ = dt);
          else if (T < P && 0 > s(F, X))
            O[$] = F, O[T] = X, $ = T;
          else break t;
        }
      }
      return B;
    }
    function s(O, B) {
      var X = O.sortIndex - B.sortIndex;
      return X !== 0 ? X : O.id - B.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      l.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, g = d.now();
      l.unstable_now = function() {
        return d.now() - g;
      };
    }
    var v = [], p = [], y = 1, m = null, x = 3, S = !1, E = !1, A = !1, N = !1, _ = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    function M(O) {
      for (var B = o(p); B !== null; ) {
        if (B.callback === null) r(p);
        else if (B.startTime <= O)
          r(p), B.sortIndex = B.expirationTime, a(v, B);
        else break;
        B = o(p);
      }
    }
    function Y(O) {
      if (A = !1, M(O), !E)
        if (o(v) !== null)
          E = !0, H || (H = !0, ot());
        else {
          var B = o(p);
          B !== null && V(Y, B.startTime - O);
        }
    }
    var H = !1, R = -1, Z = 5, J = -1;
    function at() {
      return N ? !0 : !(l.unstable_now() - J < Z);
    }
    function tt() {
      if (N = !1, H) {
        var O = l.unstable_now();
        J = O;
        var B = !0;
        try {
          t: {
            E = !1, A && (A = !1, L(R), R = -1), S = !0;
            var X = x;
            try {
              e: {
                for (M(O), m = o(v); m !== null && !(m.expirationTime > O && at()); ) {
                  var $ = m.callback;
                  if (typeof $ == "function") {
                    m.callback = null, x = m.priorityLevel;
                    var P = $(
                      m.expirationTime <= O
                    );
                    if (O = l.unstable_now(), typeof P == "function") {
                      m.callback = P, M(O), B = !0;
                      break e;
                    }
                    m === o(v) && r(v), M(O);
                  } else r(v);
                  m = o(v);
                }
                if (m !== null) B = !0;
                else {
                  var it = o(p);
                  it !== null && V(
                    Y,
                    it.startTime - O
                  ), B = !1;
                }
              }
              break t;
            } finally {
              m = null, x = X, S = !1;
            }
            B = void 0;
          }
        } finally {
          B ? ot() : H = !1;
        }
      }
    }
    var ot;
    if (typeof w == "function")
      ot = function() {
        w(tt);
      };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), C = lt.port2;
      lt.port1.onmessage = tt, ot = function() {
        C.postMessage(null);
      };
    } else
      ot = function() {
        _(tt, 0);
      };
    function V(O, B) {
      R = _(function() {
        O(l.unstable_now());
      }, B);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, l.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < O ? Math.floor(1e3 / O) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, l.unstable_next = function(O) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = x;
      }
      var X = x;
      x = B;
      try {
        return O();
      } finally {
        x = X;
      }
    }, l.unstable_requestPaint = function() {
      N = !0;
    }, l.unstable_runWithPriority = function(O, B) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var X = x;
      x = O;
      try {
        return B();
      } finally {
        x = X;
      }
    }, l.unstable_scheduleCallback = function(O, B, X) {
      var $ = l.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? $ + X : $) : X = $, O) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = X + P, O = {
        id: y++,
        callback: B,
        priorityLevel: O,
        startTime: X,
        expirationTime: P,
        sortIndex: -1
      }, X > $ ? (O.sortIndex = X, a(p, O), o(v) === null && O === o(p) && (A ? (L(R), R = -1) : A = !0, V(Y, X - $))) : (O.sortIndex = P, a(v, O), E || S || (E = !0, H || (H = !0, ot()))), O;
    }, l.unstable_shouldYield = at, l.unstable_wrapCallback = function(O) {
      var B = x;
      return function() {
        var X = x;
        x = B;
        try {
          return O.apply(this, arguments);
        } finally {
          x = X;
        }
      };
    };
  })(hd)), hd;
}
var zy;
function B2() {
  return zy || (zy = 1, dd.exports = H2()), dd.exports;
}
var gd = { exports: {} }, xe = {};
var Ay;
function L2() {
  if (Ay) return xe;
  Ay = 1;
  var l = Ju();
  function a(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        m += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(a(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal"), f = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function g(y, m, x) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: S == null ? null : S === d ? d : "" + S,
      children: y,
      containerInfo: m,
      implementation: x
    };
  }
  var v = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, m) {
    if (y === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, xe.browser = function(y) {
    return { $$typeof: f, _reason: y };
  }, xe.createPortal = function(y, m) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(a(299));
    return g(y, m, null, x);
  }, xe.flushSync = function(y) {
    var m = v.T, x = r.p;
    try {
      if (v.T = null, r.p = 2, y) return y();
    } finally {
      v.T = m, r.p = x, r.d.f();
    }
  }, xe.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(y, m));
  }, xe.prefetchDNS = function(y) {
    typeof y == "string" && r.d.D(y);
  }, xe.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var x = m.as, S = p(x, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      x === "style" ? r.d.S(
        y,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: S,
          integrity: E,
          fetchPriority: A
        }
      ) : x === "script" && r.d.X(y, {
        crossOrigin: S,
        integrity: E,
        fetchPriority: A,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, xe.preinitModule = function(y, m) {
    if (typeof y == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var x = p(
            m.as,
            m.crossOrigin
          );
          r.d.M(y, {
            crossOrigin: x,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && r.d.M(y);
  }, xe.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var x = m.as, S = p(x, m.crossOrigin);
      r.d.L(y, x, {
        crossOrigin: S,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, xe.preloadModule = function(y, m) {
    if (typeof y == "string")
      if (m) {
        var x = p(m.as, m.crossOrigin);
        r.d.m(y, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: x,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else r.d.m(y);
  }, xe.requestFormReset = function(y) {
    r.d.r(y);
  }, xe.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, xe.useFormState = function(y, m, x) {
    return v.H.useFormState(y, m, x);
  }, xe.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, xe.version = "19.3.1", xe;
}
var Oy;
function kv() {
  if (Oy) return gd.exports;
  Oy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (a) {
        console.error(a);
      }
  }
  return l(), gd.exports = L2(), gd.exports;
}
var Dy;
function U2() {
  if (Dy) return Ru;
  Dy = 1;
  var l = B2(), a = Ju(), o = kv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (f(t) !== t)
      throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (i = u.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === n) return v(u), t;
          if (c === i) return v(u), e;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) n = u, i = c;
      else {
        for (var h = !1, b = u.child; b; ) {
          if (b === n) {
            h = !0, n = u, i = c;
            break;
          }
          if (b === i) {
            h = !0, i = u, n = c;
            break;
          }
          b = b.sibling;
        }
        if (!h) {
          for (b = c.child; b; ) {
            if (b === n) {
              h = !0, n = c, i = u;
              break;
            }
            if (b === i) {
              h = !0, i = c, n = u;
              break;
            }
            b = b.sibling;
          }
          if (!h) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = y(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function m(t, e, n, i, u, c) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, i, u, c) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && m(
        t.child,
        e,
        n,
        i,
        u,
        c
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function x(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function S(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function E(t) {
    var e = [null, null], n = x(t);
    return n === null || A(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function A(t, e, n, i) {
    for (; n !== null; ) {
      if (n === e) i.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (i.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && A(
        t,
        e,
        n.child,
        i
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function N(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var _ = null, L = null;
  function w(t, e, n) {
    return t === n ? !0 : t === e ? (_ = t, !0) : !1;
  }
  function M(t, e, n) {
    return t === n ? (L = t, !1) : t === e ? (L !== null && (_ = t), !0) : !1;
  }
  function Y(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function H(t, e, n) {
    for (var i = 0, u = t; u; u = n(u)) i++;
    u = 0;
    for (var c = e; c; c = n(c)) u++;
    for (; 0 < i - u; ) t = n(t), i--;
    for (; 0 < u - i; ) e = n(e), u--;
    for (; i--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var R = Object.assign, Z = Symbol.for("react.element"), J = Symbol.for("react.transitional.element"), at = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), ot = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), V = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), it = Symbol.for("react.activity"), dt = Symbol.for("react.legacy_hidden"), xt = Symbol.for("react.memo_cache_sentinel"), T = Symbol.for("react.view_transition"), F = Symbol.for("react.recoverable"), st = Symbol.iterator;
  function ut(t) {
    return t === null || typeof t != "object" ? null : (t = st && t[st] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var k = Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === k ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case tt:
        return "Fragment";
      case lt:
        return "Profiler";
      case ot:
        return "StrictMode";
      case B:
        return "Suspense";
      case X:
        return "SuspenseList";
      case it:
        return "Activity";
      case T:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case at:
          return "Portal";
        case V:
          return t.displayName || "Context";
        case C:
          return (t._context.displayName || "Context") + ".Consumer";
        case O:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case $:
          return e = t.displayName || null, e !== null ? e : ft(t.type) || "Memo";
        case P:
          e = t._payload, t = t._init;
          try {
            return ft(t(e));
          } catch {
          }
      }
    return null;
  }
  var gt = Array.isArray, ct = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, vt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, _t = [], wt = -1;
  function Mt(t) {
    return { current: t };
  }
  function Ht(t) {
    0 > wt || (t.current = _t[wt], _t[wt] = null, wt--);
  }
  function Ot(t, e) {
    wt++, _t[wt] = t.current, t.current = e;
  }
  var Pt = Mt(null), be = Mt(null), re = Mt(null), En = Mt(null);
  function Je(t, e) {
    switch (Ot(re, e), Ot(be, t), Ot(Pt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Rm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Rm(e), t = Hm(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Ht(Pt), Ot(Pt, t);
  }
  function Oe() {
    Ht(Pt), Ht(be), Ht(re);
  }
  function we(t) {
    var e = t.memoizedState;
    e !== null && (ya._currentValue = e.memoizedState, Ot(En, t)), e = Pt.current;
    var n = Hm(e, t.type);
    e !== n && (Ot(be, t), Ot(Pt, n));
  }
  function De(t) {
    be.current === t && (Ht(Pt), Ht(be)), En.current === t && (Ht(En), ya._currentValue = vt);
  }
  var Ve, wn;
  function ke(t) {
    if (Ve === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ve = e && e[1] || "", wn = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ve + t + wn;
  }
  var Zl = !1;
  function Ha(t, e) {
    if (!t || Zl) return "";
    Zl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var nt = function() {
                throw Error();
              };
              if (Object.defineProperty(nt.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(nt, []);
                } catch (ht) {
                  var U = ht;
                }
                Reflect.construct(t, [], nt);
              } else {
                try {
                  nt.call();
                } catch (ht) {
                  U = ht;
                }
                nt = !1;
                try {
                  var K = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), nt = !0, new t();
                } finally {
                  nt && (K !== void 0 ? Object.defineProperty(t.prototype, "props", K) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ht) {
                U = ht;
              }
              (nt = t()) && typeof nt.catch == "function" && nt.catch(function() {
              });
            }
          } catch (ht) {
            if (ht && U && typeof ht.stack == "string")
              return [ht.stack, U.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = i.DetermineComponentFrameRoot(), h = c[0], b = c[1];
      if (h && b) {
        var z = h.split(`
`), q = b.split(`
`);
        for (u = i = 0; i < z.length && !z[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; u < q.length && !q[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (i === z.length || u === q.length)
          for (i = z.length - 1, u = q.length - 1; 1 <= i && 0 <= u && z[i] !== q[u]; )
            u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (z[i] !== q[u]) {
            if (i !== 1 || u !== 1)
              do
                if (i--, u--, 0 > u || z[i] !== q[u]) {
                  var I = `
` + z[i].replace(" at new ", " at ");
                  return t.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", t.displayName)), I;
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      Zl = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? ke(n) : "";
  }
  function Nr(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ke(t.type);
      case 16:
        return ke("Lazy");
      case 13:
        return t.child !== e && e !== null ? ke("Suspense Fallback") : ke("Suspense");
      case 19:
        return ke("SuspenseList");
      case 0:
      case 15:
        return Ha(t.type, !1);
      case 11:
        return Ha(t.type.render, !1);
      case 1:
        return Ha(t.type, !0);
      case 31:
        return ke("Activity");
      case 30:
        return ke("ViewTransition");
      default:
        return "";
    }
  }
  function lo(t) {
    try {
      var e = "", n = null;
      do
        e += Nr(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Ba = Object.prototype.hasOwnProperty, La = l.unstable_scheduleCallback, Ua = l.unstable_cancelCallback, Tr = l.unstable_shouldYield, Mr = l.unstable_requestPaint, _e = l.unstable_now, Cr = l.unstable_getCurrentPriorityLevel, io = l.unstable_ImmediatePriority, ao = l.unstable_UserBlockingPriority, Ti = l.unstable_NormalPriority, zr = l.unstable_LowPriority, uo = l.unstable_IdlePriority, Ar = l.log, Or = l.unstable_setDisableYieldValue, Gl = null, Ne = null;
  function _n(t) {
    if (typeof Ar == "function" && Or(t), Ne && typeof Ne.setStrictMode == "function")
      try {
        Ne.setStrictMode(Gl, t);
      } catch {
      }
  }
  var Te = Math.clz32 ? Math.clz32 : Hr, Dr = Math.log, Rr = Math.LN2;
  function Hr(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Dr(t) / Rr | 0) | 0;
  }
  var Mi = 256, Ci = 262144, zi = 4194304;
  function jn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ai(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var u = 0, c = t.suspendedLanes, h = t.pingedLanes;
    t = t.warmLanes;
    var b = i & 134217727;
    return b !== 0 ? (i = b & ~c, i !== 0 ? u = jn(i) : (h &= b, h !== 0 ? u = jn(h) : n || (n = b & ~t, n !== 0 && (u = jn(n))))) : (b = i & ~c, b !== 0 ? u = jn(b) : h !== 0 ? u = jn(h) : n || (n = i & ~t, n !== 0 && (u = jn(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & c) === 0 && (c = u & -u, n = e & -e, c >= n || c === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function Ql(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Va(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var i = 31 - Te(n), u = 1 << i;
        e |= t[i], n &= ~u;
      }
    return e;
  }
  function oo(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ya() {
    var t = zi;
    return zi <<= 1, (zi & 62914560) === 0 && (zi = 4194304), t;
  }
  function ja(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Kl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Br(t, e, n, i, u, c) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var b = t.entanglements, z = t.expirationTimes, q = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var I = 31 - Te(n), nt = 1 << I;
      b[I] = 0, z[I] = -1;
      var U = q[I];
      if (U !== null)
        for (q[I] = null, I = 0; I < U.length; I++) {
          var K = U[I];
          K !== null && (K.lane &= -536870913);
        }
      n &= ~nt;
    }
    i !== 0 && co(t, i, 0), c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(h & ~e));
  }
  function co(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - Te(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function ro(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - Te(n), u = 1 << i;
      u & e | t[i] & e && (t[i] |= e), n &= ~u;
    }
  }
  function so(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Oi(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Oi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function qa(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fo() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : vy(t.type));
  }
  function ho(t, e) {
    var n = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = n;
    }
  }
  var on = Math.random().toString(36).slice(2), oe = "__reactFiber$" + on, Se = "__reactProps$" + on, rl = "__reactContainer$" + on, go = "__reactEvents$" + on, mo = "__reactListeners$" + on, Lr = "__reactHandles$" + on, yo = "__reactResources$" + on, $l = "__reactMarker$" + on, Di = "__reactLoad$" + on;
  function Ri(t) {
    delete t[oe], delete t[Se], delete t[mo], delete t[Lr];
  }
  function qn(t) {
    var e;
    if (e = t[oe]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[rl] || n[oe]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Fm(t); t !== null; ) {
            if (n = t[oe]) return n;
            t = Fm(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function sl(t) {
    if (t = t[oe] || t[rl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Il(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Xn(t) {
    var e = t[yo];
    return e || (e = t[yo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[$l] = !0;
  }
  function Xa(t) {
    t[Di] = void 0;
  }
  var vo = /* @__PURE__ */ new Set(), po = {};
  function cn(t, e) {
    fl(t, e), fl(t + "Capture", e);
  }
  function fl(t, e) {
    for (po[t] = e, t = 0; t < e.length; t++)
      vo.add(e[t]);
  }
  var Ur = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Za = {}, ph = {};
  function k1(t) {
    return Ba.call(ph, t) ? !0 : Ba.call(Za, t) ? !1 : Ur.test(t) ? ph[t] = !0 : (Za[t] = !0, !1);
  }
  var Ut = !1;
  function xh() {
    var t = Ut;
    return Ut = !1, t;
  }
  function xo(t, e, n) {
    if (k1(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function bo(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Zn(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, i);
    }
  }
  function Ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function bh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function F1(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var u = i.get, c = i.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(h) {
          n = "" + h, c.call(this, h);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(h) {
          n = "" + h;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Vr(t) {
    if (!t._valueTracker) {
      var e = bh(t) ? "checked" : "value";
      t._valueTracker = F1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Sh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), i = "";
    return t && (i = bh(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
  }
  var W1 = /[\n"\\]/g;
  function Fe(t) {
    return t.replace(
      W1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yr(t, e, n, i, u, c, h, b) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ye(e)) : t.value !== "" + Ye(e) && (t.value = "" + Ye(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? jr(t, Ye(t.value)) : jr(t, Ye(e)) : n != null ? jr(t, Ye(n)) : i != null && t.removeAttribute("value"), u == null && c != null && (t.defaultChecked = !!c), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Ye(b) : t.removeAttribute("name");
  }
  function Eh(t, e, n, i, u, c, h, b) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || e != null)) {
        Vr(t);
        return;
      }
      n = n != null ? "" + Ye(n) : "", e = e != null ? "" + Ye(e) : n, b || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? u, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = b ? t.checked : !!i, t.defaultChecked = !!i, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Vr(t);
  }
  function jr(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Hi(t, e, n, i) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ye(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, i && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function wh(t, e, n) {
    if (e != null && (e = "" + Ye(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ye(n) : "";
  }
  function _h(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (gt(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = Ye(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), Vr(t);
  }
  function Bi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var P1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nh(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || P1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Th(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "", Ut = !0);
      for (var u in e)
        i = e[u], e.hasOwnProperty(u) && n[u] !== i && (Nh(t, u, i), Ut = !0);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && Nh(t, c, e[c]);
  }
  function qr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var tx = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ex = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function So(t) {
    return ex.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Nn() {
  }
  var Xr = null;
  function Zr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Li = null, Ui = null;
  function Mh(t) {
    var e = sl(t);
    if (e && (t = e.stateNode)) {
      var n = t[Se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Yr(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Fe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var u = i[Se] || null;
                if (!u) throw Error(r(90));
                Yr(
                  i,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              i = n[e], i.form === t.form && Sh(i);
          }
          break t;
        case "textarea":
          wh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Hi(t, !!n.multiple, e, !1);
      }
    }
  }
  var Gr = !1;
  function Ch(t, e, n) {
    if (Gr) return t(e, n);
    Gr = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Gr = !1, (Li !== null || Ui !== null) && (Sc(), Li && (e = Li, t = Ui, Ui = Li = null, Mh(e), t)))
        for (e = 0; e < t.length; e++) Mh(t[e]);
    }
  }
  function Ga(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[Se] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var Gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qr = !1;
  if (Gn)
    try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", {
        get: function() {
          Qr = !0;
        }
      }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
    } catch {
      Qr = !1;
    }
  var dl = null, Kr = null, Eo = null;
  function zh() {
    if (Eo) return Eo;
    var t, e = Kr, n = e.length, i, u = "value" in dl ? dl.value : dl.textContent, c = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var h = n - t;
    for (i = 1; i <= h && e[n - i] === u[c - i]; i++) ;
    return Eo = u.slice(t, 1 < i ? 1 - i : void 0);
  }
  function wo(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function _o() {
    return !0;
  }
  function Ah() {
    return !1;
  }
  function Me(t) {
    function e(n, i, u, c, h) {
      this._reactName = n, this._targetInst = u, this.type = i, this.nativeEvent = c, this.target = h, this.currentTarget = null;
      for (var b in t)
        t.hasOwnProperty(b) && (n = t[b], this[b] = n ? n(c) : c[b]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? _o : Ah, this.isPropagationStopped = Ah, this;
    }
    return R(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _o);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _o);
      },
      persist: function() {
      },
      isPersistent: _o
    }), e;
  }
  var hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, No = Me(hl), Ka = R({}, hl, { view: 0, detail: 0 }), nx = Me(Ka), $r, Ir, $a, To = R({}, Ka, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: kr,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== $a && ($a && t.type === "mousemove" ? ($r = t.screenX - $a.screenX, Ir = t.screenY - $a.screenY) : Ir = $r = 0, $a = t), $r);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ir;
    }
  }), Oh = Me(To), lx = R({}, To, { dataTransfer: 0 }), ix = Me(lx), ax = R({}, Ka, { relatedTarget: 0 }), Jr = Me(ax), ux = R({}, hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ox = Me(ux), cx = R({}, hl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), rx = Me(cx), sx = R({}, hl, { data: 0 }), Dh = Me(sx), fx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, dx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, hx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gx(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = hx[t]) ? !!e[t] : !1;
  }
  function kr() {
    return gx;
  }
  var mx = R({}, Ka, {
    key: function(t) {
      if (t.key) {
        var e = fx[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = wo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? dx[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: kr,
    charCode: function(t) {
      return t.type === "keypress" ? wo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? wo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), yx = Me(mx), vx = R({}, To, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Rh = Me(vx), px = R({}, hl, { submitter: 0 }), xx = Me(px), bx = R({}, Ka, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: kr
  }), Sx = Me(bx), Ex = R({}, hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wx = Me(Ex), _x = R({}, To, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nx = Me(_x), Tx = R({}, hl, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Mx = Me(Tx), Cx = [9, 13, 27, 32], Fr = Gn && "CompositionEvent" in window, Ia = null;
  Gn && "documentMode" in document && (Ia = document.documentMode);
  var zx = Gn && "TextEvent" in window && !Ia, Hh = Gn && (!Fr || Ia && 8 < Ia && 11 >= Ia), Bh = " ", Lh = !1;
  function Uh(t, e) {
    switch (t) {
      case "keyup":
        return Cx.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Vi = !1;
  function Ax(t, e) {
    switch (t) {
      case "compositionend":
        return Vh(e);
      case "keypress":
        return e.which !== 32 ? null : (Lh = !0, Bh);
      case "textInput":
        return t = e.data, t === Bh && Lh ? null : t;
      default:
        return null;
    }
  }
  function Ox(t, e) {
    if (Vi)
      return t === "compositionend" || !Fr && Uh(t, e) ? (t = zh(), Eo = Kr = dl = null, Vi = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Hh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Dx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Yh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Dx[t.type] : e === "textarea";
  }
  function jh(t, e, n, i) {
    Li ? Ui ? Ui.push(i) : Ui = [i] : Li = i, e = Mc(e, "onChange"), 0 < e.length && (n = new No(
      "onChange",
      "change",
      null,
      n,
      i
    ), t.push({ event: n, listeners: e }));
  }
  var Ja = null, ka = null;
  function Rx(t) {
    Mm(t, 0);
  }
  function Mo(t) {
    var e = Il(t);
    if (Sh(e)) return t;
  }
  function qh(t, e) {
    if (t === "change") return e;
  }
  var Xh = !1;
  if (Gn) {
    var Wr;
    if (Gn) {
      var Pr = "oninput" in document;
      if (!Pr) {
        var Zh = document.createElement("div");
        Zh.setAttribute("oninput", "return;"), Pr = typeof Zh.oninput == "function";
      }
      Wr = Pr;
    } else Wr = !1;
    Xh = Wr && (!document.documentMode || 9 < document.documentMode);
  }
  function Gh() {
    Ja && (Ja.detachEvent("onpropertychange", Qh), ka = Ja = null);
  }
  function Qh(t) {
    if (t.propertyName === "value" && Mo(ka)) {
      var e = [];
      jh(
        e,
        ka,
        t,
        Zr(t)
      ), Ch(Rx, e);
    }
  }
  function Hx(t, e, n) {
    t === "focusin" ? (Gh(), Ja = e, ka = n, Ja.attachEvent("onpropertychange", Qh)) : t === "focusout" && Gh();
  }
  function Bx(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Mo(ka);
  }
  function Lx(t, e) {
    if (t === "click") return Mo(e);
  }
  function Ux(t, e) {
    if (t === "input" || t === "change")
      return Mo(e);
  }
  function Vx(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var je = typeof Object.is == "function" ? Object.is : Vx;
  function Fa(t, e) {
    if (je(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var u = n[i];
      if (!Ba.call(e, u) || !je(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function ts(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Kh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function $h(t, e) {
    var n = Kh(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = t + n.textContent.length, t <= e && i >= e)
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Kh(n);
    }
  }
  function Ih(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ih(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Jh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ts(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ts(t.document);
    }
    return e;
  }
  function es(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Yx = Gn && "documentMode" in document && 11 >= document.documentMode, Yi = null, ns = null, Wa = null, ls = !1;
  function kh(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ls || Yi == null || Yi !== ts(i) || (i = Yi, "selectionStart" in i && es(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Wa && Fa(Wa, i) || (Wa = i, i = Mc(ns, "onSelect"), 0 < i.length && (e = new No(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: i }), e.target = Yi)));
  }
  function Jl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ji = {
    animationend: Jl("Animation", "AnimationEnd"),
    animationiteration: Jl("Animation", "AnimationIteration"),
    animationstart: Jl("Animation", "AnimationStart"),
    transitionrun: Jl("Transition", "TransitionRun"),
    transitionstart: Jl("Transition", "TransitionStart"),
    transitioncancel: Jl("Transition", "TransitionCancel"),
    transitionend: Jl("Transition", "TransitionEnd")
  }, is = {}, Fh = {};
  Gn && (Fh = document.createElement("div").style, "AnimationEvent" in window || (delete ji.animationend.animation, delete ji.animationiteration.animation, delete ji.animationstart.animation), "TransitionEvent" in window || delete ji.transitionend.transition);
  function kl(t) {
    if (is[t]) return is[t];
    if (!ji[t]) return t;
    var e = ji[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Fh)
        return is[t] = e[n];
    return t;
  }
  var Wh = kl("animationend"), Ph = kl("animationiteration"), t0 = kl("animationstart"), jx = kl("transitionrun"), qx = kl("transitionstart"), Xx = kl("transitioncancel"), e0 = kl("transitionend"), n0 = /* @__PURE__ */ new Map(), as = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  as.push("scrollEnd");
  function rn(t, e) {
    n0.set(t, e), cn(e, [t]);
  }
  var Zx = 0;
  function Qn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = hn.identifierPrefix;
    var n = Zx++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function l0(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = ua;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = t[n[i]];
        if (u != null) {
          if (u === "none") return "none";
          e = e == null ? u : e + (" " + u);
        }
      }
    return e ?? t.default;
  }
  function Kn(t, e) {
    return t = l0(t), e = l0(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Co = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, We = [], qi = 0, us = 0;
  function zo() {
    for (var t = qi, e = us = qi = 0; e < t; ) {
      var n = We[e];
      We[e++] = null;
      var i = We[e];
      We[e++] = null;
      var u = We[e];
      We[e++] = null;
      var c = We[e];
      if (We[e++] = null, i !== null && u !== null) {
        var h = i.pending;
        h === null ? u.next = u : (u.next = h.next, h.next = u), i.pending = u;
      }
      c !== 0 && i0(n, u, c);
    }
  }
  function Ao(t, e, n, i) {
    We[qi++] = t, We[qi++] = e, We[qi++] = n, We[qi++] = i, us |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function os(t, e, n, i) {
    return Ao(t, e, n, i), Oo(t);
  }
  function Fl(t, e) {
    return Ao(t, null, null, e), Oo(t);
  }
  function i0(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var u = !1, c = t.return; c !== null; )
      c.childLanes |= n, i = c.alternate, i !== null && (i.childLanes |= n), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (u = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, u && e !== null && (u = 31 - Te(n), t = c.hiddenUpdates, i = t[u], i === null ? t[u] = [e] : i.push(e), e.lane = n | 536870912), c) : null;
  }
  function Oo(t) {
    if (50 < bu)
      throw bu = 0, bc = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Xi = {};
  function Gx(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Re(t, e, n, i) {
    return new Gx(t, e, n, i);
  }
  function cs(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function $n(t, e) {
    var n = t.alternate;
    return n === null ? (n = Re(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function a0(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Do(t, e, n, i, u, c) {
    var h = 0;
    if (i = t, typeof i == "function") cs(i) && (h = 1);
    else if (typeof i == "string")
      h = p2(
        t,
        n,
        Pt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (i) {
        case it:
          return t = Re(31, n, e, u), t.elementType = it, t.lanes = c, t;
        case tt:
          return Wl(n.children, u, c, e);
        case ot:
          h = 8, u |= 24;
          break;
        case lt:
          return t = Re(12, n, e, u | 2), t.elementType = lt, t.lanes = c, t;
        case B:
          return t = Re(13, n, e, u), t.elementType = B, t.lanes = c, t;
        case X:
          return t = Re(19, n, e, u), t.elementType = X, t.lanes = c, t;
        case dt:
        case T:
          return t = u | 32, t = Re(30, n, e, t), t.elementType = T, t.lanes = c, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case V:
                h = 10;
                break t;
              case C:
                h = 9;
                break t;
              case O:
                h = 11;
                break t;
              case $:
                h = 14;
                break t;
              case P:
                h = 16, i = null;
                break t;
            }
          h = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), i = null;
      }
    return e = Re(h, n, e, u), e.elementType = t, e.type = i, e.lanes = c, e;
  }
  function Wl(t, e, n, i) {
    return t = Re(7, t, i, e), t.lanes = n, t;
  }
  function rs(t, e, n) {
    return t = Re(6, t, null, e), t.lanes = n, t;
  }
  function u0(t) {
    var e = Re(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function ss(t, e, n) {
    return e = Re(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var o0 = /* @__PURE__ */ new WeakMap();
  function Pe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = o0.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: lo(e)
      }, o0.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: lo(e)
    };
  }
  var Zi = [], Gi = 0, Ro = null, Pa = 0, tn = [], en = 0, gl = null, Tn = 1, Mn = "";
  function In(t, e) {
    Zi[Gi++] = Pa, Zi[Gi++] = Ro, Ro = t, Pa = e;
  }
  function c0(t, e, n) {
    tn[en++] = Tn, tn[en++] = Mn, tn[en++] = gl, gl = t;
    var i = Tn;
    t = Mn;
    var u = 32 - Te(i) - 1;
    i &= ~(1 << u), n += 1;
    var c = 32 - Te(e) + u;
    if (30 < c) {
      var h = u - u % 5;
      c = (i & (1 << h) - 1).toString(32), i >>= h, u -= h, Tn = 1 << 32 - Te(e) + u | n << u | i, Mn = c + t;
    } else
      Tn = 1 << c | n << u | i, Mn = t;
  }
  function Ho(t) {
    t.return !== null && (In(t, 1), c0(t, 1, 0));
  }
  function fs(t) {
    for (; t === Ro; )
      Ro = Zi[--Gi], Zi[Gi] = null, Pa = Zi[--Gi], Zi[Gi] = null;
    for (; t === gl; )
      gl = tn[--en], tn[en] = null, Mn = tn[--en], tn[en] = null, Tn = tn[--en], tn[en] = null;
  }
  function r0(t, e) {
    tn[en++] = Tn, tn[en++] = Mn, tn[en++] = gl, Tn = e.id, Mn = e.overflow, gl = t;
  }
  var se = null, Qt = null, Ct = !1, ml = null, nn = !1, ds = Error(r(519));
  function yl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw tu(Pe(e, t)), ds;
  }
  function s0(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[oe] = t, e[Se] = i, n) {
      case "dialog":
        At("cancel", e), At("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        At("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Eu.length; n++)
          At(Eu[n], e);
        break;
      case "source":
        At("error", e);
        break;
      case "img":
      case "image":
      case "link":
        At("error", e), At("load", e);
        break;
      case "details":
        At("toggle", e);
        break;
      case "input":
        At("invalid", e), Eh(
          e,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        At("invalid", e);
        break;
      case "textarea":
        At("invalid", e), _h(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || Om(e.textContent, n) ? (i.popover != null && (At("beforetoggle", e), At("toggle", e)), i.onScroll != null && At("scroll", e), i.onScrollEnd != null && At("scrollend", e), i.onClick != null && (e.onclick = Nn), e = !0) : e = !1, e || yl(t, !0);
  }
  function Bo(t) {
    for (se = t.return; se; )
      switch (se.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          se = se.return;
      }
  }
  function Qi(t) {
    if (t !== se) return !1;
    if (!Ct) return Bo(t), Ct = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Zf(t.type, t.memoizedProps)), n = !n), n && Qt && yl(t), Bo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Qt = km(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Qt = km(t);
    } else
      e === 27 ? (e = Qt, Dl(t.type) ? (t = Wf, Wf = null, Qt = t) : Qt = e) : Qt = se ? an(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Pl() {
    Qt = se = null, Ct = !1;
  }
  function hs() {
    var t = ml;
    return t !== null && (Le === null ? Le = t : Le.push.apply(
      Le,
      t
    ), ml = null), t;
  }
  function tu(t) {
    ml === null ? ml = [t] : ml.push(t);
  }
  var gs = Mt(null), ti = null, Jn = null;
  function vl(t, e, n) {
    Ot(gs, e._currentValue), e._currentValue = n;
  }
  function kn(t) {
    t._currentValue = gs.current, Ht(gs);
  }
  function Lo(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function ms(t, e, n, i) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var h = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var b = c;
          c = u;
          for (var z = 0; z < e.length; z++)
            if (b.context === e[z]) {
              c.lanes |= n, b = c.alternate, b !== null && (b.lanes |= n), Lo(
                c.return,
                n,
                t
              ), i || (h = null);
              break t;
            }
          c = b.next;
        }
      } else if (u.tag === 18) {
        if (h = u.return, h === null) throw Error(r(341));
        h.lanes |= n, c = h.alternate, c !== null && (c.lanes |= n), Lo(h, n, t), h = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), Lo(
          u.return,
          n,
          t
        ), h = u.child, h = h !== null ? h.sibling : null) : h = u.child;
      if (h !== null) h.return = u;
      else
        for (h = u; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (u = h.sibling, u !== null) {
            u.return = h.return, h = u;
            break;
          }
          h = h.return;
        }
      u = h;
    }
  }
  function ei(t, e, n, i) {
    t = null;
    for (var u = e, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var h = u.alternate;
        if (h === null) throw Error(r(387));
        if (h = h.memoizedProps, h !== null) {
          var b = u.type;
          je(u.pendingProps.value, h.value) || (t !== null ? t.push(b) : t = [b]);
        }
      } else if (u === En.current) {
        if (h = u.alternate, h === null) throw Error(r(387));
        h.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(ya) : t = [ya]);
      }
      u = u.return;
    }
    return t !== null && ms(
      e,
      t,
      n,
      i
    ), e.flags |= 262144, t !== null;
  }
  function Uo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!je(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ni(t) {
    ti = t, Jn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ge(t) {
    return f0(ti, t);
  }
  function Vo(t, e) {
    return ti === null && ni(t), f0(t, e);
  }
  function f0(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Jn === null) {
      if (t === null) throw Error(r(308));
      Jn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Jn = Jn.next = e;
    return n;
  }
  var Qx = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        t.push(i);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, Kx = l.unstable_scheduleCallback, $x = l.unstable_NormalPriority, ne = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ys() {
    return {
      controller: new Qx(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function eu(t) {
    t.refCount--, t.refCount === 0 && Kx($x, function() {
      t.controller.abort();
    });
  }
  function d0(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var i = e[t];
        n.indexOf(i) === -1 && n.push(i);
      }
    }
  }
  var nu = null;
  function Ix(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var lu = null, vs = 0, li = 0, Ki = null;
  function Jx(t, e) {
    if (lu === null) {
      var n = lu = [];
      vs = 0, li = Hf(), Ki = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return vs++, e.then(h0, h0), e;
  }
  function h0() {
    if (--vs === 0 && (nu = null, lu !== null)) {
      Ki !== null && (Ki.status = "fulfilled");
      var t = lu;
      lu = null, li = 0, Ki = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function kx(t, e) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return t.then(
      function() {
        i.status = "fulfilled", i.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      },
      function(u) {
        for (i.status = "rejected", i.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), i;
  }
  var g0 = ct.S;
  ct.S = function(t, e) {
    if (um = _e(), typeof e == "object" && e !== null && typeof e.then == "function" && Jx(t, e), nu !== null)
      for (var n = sa; n !== null; )
        d0(n, nu), n = n.next;
    if (n = t.types, n !== null) {
      for (var i = sa; i !== null; )
        d0(i, n), i = i.next;
      if (li !== 0) {
        i = nu, i === null && (i = nu = []);
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          i.indexOf(c) === -1 && i.push(c);
        }
      }
    }
    g0 !== null && g0(t, e);
  };
  var ii = Mt(null);
  function ps() {
    var t = ii.current;
    return t !== null ? t : Gt.pooledCache;
  }
  function Yo(t, e) {
    e === null ? Ot(ii, ii.current) : Ot(ii, e.pool);
  }
  function m0() {
    var t = ps();
    return t === null ? null : { parent: ne._currentValue, pool: t };
  }
  var $i = Error(r(460)), xs = Error(r(474)), jo = Error(r(542)), qo = { then: function() {
  } };
  function y0(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function v0(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Nn, Nn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, x0(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Nn, Nn);
        else {
          if (t = Gt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(i) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = i;
              }
            },
            function(i) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = i;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, x0(t), t;
        }
        throw ui = e, $i;
    }
  }
  function ai(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ui = n, $i) : n;
    }
  }
  var ui = null;
  function p0() {
    if (ui === null) throw Error(r(459));
    var t = ui;
    return ui = null, t;
  }
  function x0(t) {
    if (t === $i || t === jo)
      throw Error(r(483));
  }
  var Ii = null, iu = 0;
  function Xo(t) {
    var e = iu;
    return iu += 1, Ii === null && (Ii = []), v0(Ii, t, e);
  }
  function pl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Zo(t, e) {
    throw e.$$typeof === Z ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function b0(t) {
    function e(j, D) {
      if (t) {
        var Q = j.deletions;
        Q === null ? (j.deletions = [D], j.flags |= 16) : Q.push(D);
      }
    }
    function n(j, D) {
      if (!t) return null;
      for (; D !== null; )
        e(j, D), D = D.sibling;
      return null;
    }
    function i(j) {
      for (var D = /* @__PURE__ */ new Map(); j !== null; )
        j.key === null ? D.set(j.index, j) : D.set(j.key, j), j = j.sibling;
      return D;
    }
    function u(j, D) {
      return j = $n(j, D), j.index = 0, j.sibling = null, j;
    }
    function c(j, D, Q) {
      return j.index = Q, t ? (Q = j.alternate, Q !== null ? (Q = Q.index, Q < D ? (j.flags |= 2, D) : Q) : (j.flags |= 134217730, D)) : (j.flags |= 1048576, D);
    }
    function h(j) {
      return t && j.alternate === null && (j.flags |= 134217730), j;
    }
    function b(j, D, Q, et) {
      return D === null || D.tag !== 6 ? (D = rs(Q, j.mode, et), D.return = j, D) : (D = u(D, Q), D.return = j, D);
    }
    function z(j, D, Q, et) {
      var mt = Q.type;
      return mt === tt ? (j = I(
        j,
        D,
        Q.props.children,
        et,
        Q.key
      ), pl(j, Q), j) : D !== null && (D.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === P && ai(mt) === D.type) ? (D = u(D, Q.props), pl(D, Q), D.return = j, D) : (D = Do(
        Q.type,
        Q.key,
        Q.props,
        null,
        j.mode,
        et
      ), pl(D, Q), D.return = j, D);
    }
    function q(j, D, Q, et) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== Q.containerInfo || D.stateNode.implementation !== Q.implementation ? (D = ss(Q, j.mode, et), D.return = j, D) : (D = u(D, Q.children || []), D.return = j, D);
    }
    function I(j, D, Q, et, mt) {
      return D === null || D.tag !== 7 ? (D = Wl(
        Q,
        j.mode,
        et,
        mt
      ), D.return = j, D) : (D = u(D, Q), D.return = j, D);
    }
    function nt(j, D, Q) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = rs(
          "" + D,
          j.mode,
          Q
        ), D.return = j, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case J:
            return Q = Do(
              D.type,
              D.key,
              D.props,
              null,
              j.mode,
              Q
            ), pl(Q, D), Q.return = j, Q;
          case at:
            return D = ss(
              D,
              j.mode,
              Q
            ), D.return = j, D;
          case P:
            return D = ai(D), nt(j, D, Q);
        }
        if (gt(D) || ut(D))
          return D = Wl(
            D,
            j.mode,
            Q,
            null
          ), D.return = j, D;
        if (typeof D.then == "function")
          return nt(j, Xo(D), Q);
        if (D.$$typeof === V)
          return nt(
            j,
            Vo(j, D),
            Q
          );
        Zo(j, D);
      }
      return null;
    }
    function U(j, D, Q, et) {
      var mt = D !== null ? D.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return mt !== null ? null : b(j, D, "" + Q, et);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case J:
            return Q.key === mt ? z(j, D, Q, et) : null;
          case at:
            return Q.key === mt ? q(j, D, Q, et) : null;
          case P:
            return Q = ai(Q), U(j, D, Q, et);
        }
        if (gt(Q) || ut(Q))
          return mt !== null ? null : I(j, D, Q, et, null);
        if (typeof Q.then == "function")
          return U(
            j,
            D,
            Xo(Q),
            et
          );
        if (Q.$$typeof === V)
          return U(
            j,
            D,
            Vo(j, Q),
            et
          );
        Zo(j, Q);
      }
      return null;
    }
    function K(j, D, Q, et, mt) {
      if (typeof et == "string" && et !== "" || typeof et == "number" || typeof et == "bigint")
        return j = j.get(Q) || null, b(D, j, "" + et, mt);
      if (typeof et == "object" && et !== null) {
        switch (et.$$typeof) {
          case J:
            return j = j.get(
              et.key === null ? Q : et.key
            ) || null, z(D, j, et, mt);
          case at:
            return j = j.get(
              et.key === null ? Q : et.key
            ) || null, q(D, j, et, mt);
          case P:
            return et = ai(et), K(
              j,
              D,
              Q,
              et,
              mt
            );
        }
        if (gt(et) || ut(et))
          return j = j.get(Q) || null, I(D, j, et, mt, null);
        if (typeof et.then == "function")
          return K(
            j,
            D,
            Q,
            Xo(et),
            mt
          );
        if (et.$$typeof === V)
          return K(
            j,
            D,
            Q,
            Vo(D, et),
            mt
          );
        Zo(D, et);
      }
      return null;
    }
    function ht(j, D, Q, et) {
      for (var mt = null, Rt = null, bt = D, St = D = 0, ae = null; bt !== null && St < Q.length; St++) {
        bt.index > St ? (ae = bt, bt = null) : ae = bt.sibling;
        var Bt = U(
          j,
          bt,
          Q[St],
          et
        );
        if (Bt === null) {
          bt === null && (bt = ae);
          break;
        }
        t && bt && Bt.alternate === null && e(j, bt), D = c(Bt, D, St), Rt === null ? mt = Bt : Rt.sibling = Bt, Rt = Bt, bt = ae;
      }
      if (St === Q.length)
        return n(j, bt), Ct && In(j, St), mt;
      if (bt === null) {
        for (; St < Q.length; St++)
          bt = nt(j, Q[St], et), bt !== null && (D = c(
            bt,
            D,
            St
          ), Rt === null ? mt = bt : Rt.sibling = bt, Rt = bt);
        return Ct && In(j, St), mt;
      }
      for (bt = i(bt); St < Q.length; St++)
        ae = K(
          bt,
          j,
          St,
          Q[St],
          et
        ), ae !== null && (t && (Bt = ae.alternate, Bt !== null && bt.delete(Bt.key === null ? St : Bt.key)), D = c(
          ae,
          D,
          St
        ), Rt === null ? mt = ae : Rt.sibling = ae, Rt = ae);
      return t && bt.forEach(function(Ul) {
        return e(j, Ul);
      }), Ct && In(j, St), mt;
    }
    function yt(j, D, Q, et) {
      if (Q == null) throw Error(r(151));
      for (var mt = null, Rt = null, bt = D, St = D = 0, ae = null, Bt = Q.next(); bt !== null && !Bt.done; St++, Bt = Q.next()) {
        bt.index > St ? (ae = bt, bt = null) : ae = bt.sibling;
        var Ul = U(j, bt, Bt.value, et);
        if (Ul === null) {
          bt === null && (bt = ae);
          break;
        }
        t && bt && Ul.alternate === null && e(j, bt), D = c(Ul, D, St), Rt === null ? mt = Ul : Rt.sibling = Ul, Rt = Ul, bt = ae;
      }
      if (Bt.done)
        return n(j, bt), Ct && In(j, St), mt;
      if (bt === null) {
        for (; !Bt.done; St++, Bt = Q.next())
          Bt = nt(j, Bt.value, et), Bt !== null && (D = c(Bt, D, St), Rt === null ? mt = Bt : Rt.sibling = Bt, Rt = Bt);
        return Ct && In(j, St), mt;
      }
      for (bt = i(bt); !Bt.done; St++, Bt = Q.next())
        Bt = K(bt, j, St, Bt.value, et), Bt !== null && (t && (ae = Bt.alternate, ae !== null && bt.delete(
          ae.key === null ? St : ae.key
        )), D = c(Bt, D, St), Rt === null ? mt = Bt : Rt.sibling = Bt, Rt = Bt);
      return t && bt.forEach(function(A2) {
        return e(j, A2);
      }), Ct && In(j, St), mt;
    }
    function Tt(j, D, Q, et) {
      if (typeof Q == "object" && Q !== null && Q.type === tt && Q.key === null && Q.props.ref === void 0 && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case J:
            t: {
              for (var mt = Q.key; D !== null; ) {
                if (D.key === mt) {
                  if (mt = Q.type, mt === tt) {
                    if (D.tag === 7) {
                      n(
                        j,
                        D.sibling
                      ), et = u(
                        D,
                        Q.props.children
                      ), pl(et, Q), et.return = j, j = et;
                      break t;
                    }
                  } else if (D.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === P && ai(mt) === D.type) {
                    n(
                      j,
                      D.sibling
                    ), et = u(D, Q.props), pl(et, Q), et.return = j, j = et;
                    break t;
                  }
                  n(j, D);
                  break;
                } else e(j, D);
                D = D.sibling;
              }
              Q.type === tt ? (et = Wl(
                Q.props.children,
                j.mode,
                et,
                Q.key
              ), pl(et, Q), et.return = j, j = et) : (et = Do(
                Q.type,
                Q.key,
                Q.props,
                null,
                j.mode,
                et
              ), pl(et, Q), et.return = j, j = et);
            }
            return h(j);
          case at:
            t: {
              for (mt = Q.key; D !== null; ) {
                if (D.key === mt)
                  if (D.tag === 4 && D.stateNode.containerInfo === Q.containerInfo && D.stateNode.implementation === Q.implementation) {
                    n(
                      j,
                      D.sibling
                    ), et = u(D, Q.children || []), et.return = j, j = et;
                    break t;
                  } else {
                    n(j, D);
                    break;
                  }
                else e(j, D);
                D = D.sibling;
              }
              et = ss(Q, j.mode, et), et.return = j, j = et;
            }
            return h(j);
          case P:
            return Q = ai(Q), Tt(
              j,
              D,
              Q,
              et
            );
        }
        if (gt(Q))
          return ht(
            j,
            D,
            Q,
            et
          );
        if (ut(Q)) {
          if (mt = ut(Q), typeof mt != "function") throw Error(r(150));
          return Q = mt.call(Q), yt(
            j,
            D,
            Q,
            et
          );
        }
        if (typeof Q.then == "function")
          return Tt(
            j,
            D,
            Xo(Q),
            et
          );
        if (Q.$$typeof === V)
          return Tt(
            j,
            D,
            Vo(j, Q),
            et
          );
        Zo(j, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint" ? (Q = "" + Q, D !== null && D.tag === 6 ? (n(j, D.sibling), et = u(D, Q), et.return = j, j = et) : (n(j, D), et = rs(Q, j.mode, et), et.return = j, j = et), h(j)) : n(j, D);
    }
    return function(j, D, Q, et) {
      try {
        iu = 0;
        var mt = Tt(
          j,
          D,
          Q,
          et
        );
        return Ii = null, mt;
      } catch (bt) {
        if (bt === $i || bt === jo) throw bt;
        var Rt = Re(29, bt, null, j.mode);
        return Rt.lanes = et, Rt.return = j, Rt;
      } finally {
      }
    };
  }
  var oi = b0(!0), S0 = b0(!1), xl = !1;
  function bs(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ss(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function bl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sl(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Vt & 2) !== 0) {
      var u = i.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), i.pending = e, e = Oo(t), i0(t, null, n), e;
    }
    return Ao(t, i, e, n), Oo(t);
  }
  function au(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, ro(t, n);
    }
  }
  function Es(t, e) {
    var n = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var u = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? u = c = h : c = c.next = h, n = n.next;
        } while (n !== null);
        c === null ? u = c = e : c = c.next = e;
      } else u = c = e;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var ws = !1;
  function uu() {
    if (ws) {
      var t = Ki;
      if (t !== null) throw t;
    }
  }
  function ou(t, e, n, i) {
    ws = !1;
    var u = t.updateQueue;
    xl = !1;
    var c = u.firstBaseUpdate, h = u.lastBaseUpdate, b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var z = b, q = z.next;
      z.next = null, h === null ? c = q : h.next = q, h = z;
      var I = t.alternate;
      I !== null && (I = I.updateQueue, b = I.lastBaseUpdate, b !== h && (b === null ? I.firstBaseUpdate = q : b.next = q, I.lastBaseUpdate = z));
    }
    if (c !== null) {
      var nt = u.baseState;
      h = 0, I = q = z = null, b = c;
      do {
        var U = b.lane & -536870913, K = U !== b.lane;
        if (K ? (Dt & U) === U : (i & U) === U) {
          U !== 0 && U === li && (ws = !0), I !== null && (I = I.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          t: {
            var ht = t, yt = b;
            U = e;
            var Tt = n;
            switch (yt.tag) {
              case 1:
                if (ht = yt.payload, typeof ht == "function") {
                  nt = ht.call(Tt, nt, U);
                  break t;
                }
                nt = ht;
                break t;
              case 3:
                ht.flags = ht.flags & -65537 | 128;
              case 0:
                if (ht = yt.payload, U = typeof ht == "function" ? ht.call(Tt, nt, U) : ht, U == null) break t;
                nt = R({}, nt, U);
                break t;
              case 2:
                xl = !0;
            }
          }
          U = b.callback, U !== null && (t.flags |= 64, K && (t.flags |= 8192), K = u.callbacks, K === null ? u.callbacks = [U] : K.push(U));
        } else
          K = {
            lane: U,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, I === null ? (q = I = K, z = nt) : I = I.next = K, h |= U;
        if (b = b.next, b === null) {
          if (b = u.shared.pending, b === null)
            break;
          K = b, b = K.next, K.next = null, u.lastBaseUpdate = K, u.shared.pending = null;
        }
      } while (!0);
      I === null && (z = nt), u.baseState = z, u.firstBaseUpdate = q, u.lastBaseUpdate = I, c === null && (u.shared.lanes = 0), Cl |= h, t.lanes = h, t.memoizedState = nt;
    }
  }
  function E0(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function w0(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        E0(n[t], e);
  }
  var El = Mt(null), Go = Mt(0);
  function _0(t, e) {
    t = el, Ot(Go, t), Ot(El, e), el = t | e.baseLanes;
  }
  function _s() {
    Ot(Go, el), Ot(El, El.current);
  }
  function Ns() {
    el = Go.current, Ht(El), Ht(Go);
  }
  var me = Mt(null), Ee = null;
  function wl(t) {
    var e = t.alternate;
    Ot(ye, ye.current & 1), Ot(me, t), Ee === null && (e === null || El.current !== null || e.memoizedState !== null) && (Ee = t);
  }
  function Ts(t) {
    Ot(ye, ye.current), Ot(me, t), Ee === null && (Ee = t);
  }
  function N0(t) {
    t.tag === 22 ? (Ot(ye, ye.current), Ot(me, t), Ee === null && (Ee = t)) : _l();
  }
  function _l() {
    Ot(ye, ye.current), Ot(me, me.current);
  }
  function qe(t) {
    Ht(me), Ee === t && (Ee = null), Ht(ye);
  }
  var ye = Mt(0);
  function cu(t, e) {
    Ot(me, me.current), Ot(ye, e);
  }
  function Ms(t) {
    Ht(ye), Ht(me), Ee === t && (Ee = null);
  }
  function Qo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || kf(n) || Ff(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Fn = 0, Nt = null, Zt = null, le = null, Ko = !1, Ji = !1, ci = !1, $o = 0, ru = 0, ki = null, Fx = 0;
  function Ft() {
    throw Error(r(321));
  }
  function Cs(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!je(t[n], e[n])) return !1;
    return !0;
  }
  function zs(t, e, n, i, u, c) {
    return Fn = c, Nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ct.H = t === null || t.memoizedState === null ? cg : rg, ci = !1, c = n(i, u), ci = !1, Ji && (c = M0(
      e,
      n,
      i,
      u
    )), T0(t), c;
  }
  function T0(t) {
    ct.H = tc;
    var e = Zt !== null && Zt.next !== null;
    if (Fn = 0, le = Zt = Nt = null, Ko = !1, ru = 0, ki = null, e) throw Error(r(300));
    t === null || ie || (t = t.dependencies, t !== null && Uo(t) && (ie = !0));
  }
  function M0(t, e, n, i) {
    Nt = t;
    var u = 0;
    do {
      if (Ji && (ki = null), ru = 0, Ji = !1, 25 <= u) throw Error(r(301));
      if (u += 1, le = Zt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      ct.H = ab, c = e(n, i);
    } while (Ji);
    return c;
  }
  function Wx() {
    var t = ct.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? su(e) : e, t = t.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== t && (Nt.flags |= 1024), e;
  }
  function As() {
    var t = $o !== 0;
    return $o = 0, t;
  }
  function Os(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Ds(t) {
    if (Ko) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ko = !1;
    }
    Fn = 0, le = Zt = Nt = null, Ji = !1, ru = $o = 0, ki = null;
  }
  function Ce() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return le === null ? Nt.memoizedState = le = t : le = le.next = t, le;
  }
  function te() {
    if (Zt === null) {
      var t = Nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Zt.next;
    var e = le === null ? Nt.memoizedState : le.next;
    if (e !== null)
      le = e, Zt = t;
    else {
      if (t === null)
        throw Nt.alternate === null ? Error(r(467)) : Error(r(310));
      Zt = t, t = {
        memoizedState: Zt.memoizedState,
        baseState: Zt.baseState,
        baseQueue: Zt.baseQueue,
        queue: Zt.queue,
        next: null
      }, le === null ? Nt.memoizedState = le = t : le = le.next = t;
    }
    return le;
  }
  function Io() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function su(t) {
    var e = ru;
    return ru += 1, ki === null && (ki = []), t = v0(ki, t, e), e = Nt, (le === null ? e.memoizedState : le.next) === null && (e = e.alternate, ct.H = e === null || e.memoizedState === null ? cg : rg), t;
  }
  function Jo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return su(t);
      if (t.$$typeof === F) return;
      if (t.$$typeof === V) return ge(t);
    }
    throw Error(r(438, String(t)));
  }
  function Rs(t) {
    var e = null, n = Nt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var i = Nt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
        data: i.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Io(), Nt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++)
        n[i] = xt;
    return e.index++, n;
  }
  function Wn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ko(t) {
    var e = te();
    return Hs(e, Zt, t);
  }
  function Hs(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var u = t.baseQueue, c = i.pending;
    if (c !== null) {
      if (u !== null) {
        var h = u.next;
        u.next = c.next, c.next = h;
      }
      e.baseQueue = u = c, i.pending = null;
    }
    if (c = t.baseState, u === null) t.memoizedState = c;
    else {
      e = u.next;
      var b = h = null, z = null, q = e, I = !1;
      do {
        var nt = q.lane & -536870913;
        if (nt !== q.lane ? (Dt & nt) === nt : (Fn & nt) === nt) {
          var U = q.revertLane;
          if (U === 0)
            z !== null && (z = z.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), nt === li && (I = !0);
          else if ((Fn & U) === U) {
            q = q.next, U === li && (I = !0);
            continue;
          } else
            nt = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, z === null ? (b = z = nt, h = c) : z = z.next = nt, Nt.lanes |= U, Cl |= U;
          nt = q.action, ci && n(c, nt), c = q.hasEagerState ? q.eagerState : n(c, nt);
        } else
          U = {
            lane: nt,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, z === null ? (b = z = U, h = c) : z = z.next = U, Nt.lanes |= nt, Cl |= nt;
        q = q.next;
      } while (q !== null && q !== e);
      if (z === null ? h = c : z.next = b, !je(c, t.memoizedState) && (ie = !0, I && (n = Ki, n !== null)))
        throw n;
      t.memoizedState = c, t.baseState = h, t.baseQueue = z, i.lastRenderedState = c;
    }
    return u === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Bs(t) {
    var e = te(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch, u = n.pending, c = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var h = u = u.next;
      do
        c = t(c, h.action), h = h.next;
      while (h !== u);
      je(c, e.memoizedState) || (ie = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), n.lastRenderedState = c;
    }
    return [c, i];
  }
  function C0(t, e, n) {
    var i = Nt, u = te(), c = Ct;
    if (c) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var h = !je(
      (Zt || u).memoizedState,
      n
    );
    if (h && (u.memoizedState = n, ie = !0), u = u.queue, Vs(O0.bind(null, i, u, t), [
      t
    ]), t = u.getSnapshot !== e || h || le !== null && (le.memoizedState.tag & 1) !== 0, Fi(
      t ? 9 : 8,
      { destroy: void 0 },
      A0.bind(null, i, u, n, e),
      null
    ), t) {
      if (i.flags |= 2048, Gt === null) throw Error(r(349));
      c || (Fn & 127) !== 0 || z0(i, e, n);
    }
    return n;
  }
  function z0(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Nt.updateQueue, e === null ? (e = Io(), Nt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function A0(t, e, n, i) {
    e.value = n, e.getSnapshot = i, D0(e) && R0(t);
  }
  function O0(t, e, n) {
    return n(function() {
      D0(e) && R0(t);
    });
  }
  function D0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !je(t, n);
    } catch {
      return !0;
    }
  }
  function R0(t) {
    var e = Fl(t, 2);
    e !== null && Ue(e, t, 2);
  }
  function Ls(t) {
    var e = Ce();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), ci) {
        _n(!0);
        try {
          n();
        } finally {
          _n(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wn,
      lastRenderedState: t
    }, e;
  }
  function H0(t, e, n, i) {
    return t.baseState = n, Hs(
      t,
      Zt,
      typeof i == "function" ? i : Wn
    );
  }
  function Px(t, e, n, i, u) {
    if (Po(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(h) {
          c.listeners.push(h);
        }
      };
      ct.T !== null ? n(!0) : c.isTransition = !1, i(c), n = e.pending, n === null ? (c.next = e.pending = c, B0(e, c)) : (c.next = n.next, e.pending = n.next = c);
    }
  }
  function B0(t, e) {
    var n = e.action, i = e.payload, u = t.state;
    if (e.isTransition) {
      var c = ct.T, h = {};
      h.types = c !== null ? c.types : null, ct.T = h;
      try {
        var b = n(u, i), z = ct.S;
        z !== null && z(h, b), L0(t, e, b);
      } catch (q) {
        Us(t, e, q);
      } finally {
        c !== null && h.types !== null && (c.types = h.types), ct.T = c;
      }
    } else
      try {
        c = n(u, i), L0(t, e, c);
      } catch (q) {
        Us(t, e, q);
      }
  }
  function L0(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        U0(t, e, i);
      },
      function(i) {
        return Us(t, e, i);
      }
    ) : U0(t, e, n);
  }
  function U0(t, e, n) {
    e.status = "fulfilled", e.value = n, V0(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, B0(t, n)));
  }
  function Us(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, V0(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function V0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Y0(t, e) {
    return e;
  }
  function j0(t, e) {
    if (Ct) {
      var n = Gt.formState;
      if (n !== null) {
        t: {
          var i = Nt;
          if (Ct) {
            if (Qt) {
              e: {
                for (var u = Qt, c = nn; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (u = an(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                Qt = an(
                  u.nextSibling
                ), i = u.data === "F!";
                break t;
              }
            }
            yl(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return n = Ce(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Y0,
      lastRenderedState: e
    }, n.queue = i, n = ag.bind(
      null,
      Nt,
      i
    ), i.dispatch = n, i = Ls(!1), c = Zs.bind(
      null,
      Nt,
      !1,
      i.queue
    ), i = Ce(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = u, n = Px.bind(
      null,
      Nt,
      u,
      c,
      n
    ), u.dispatch = n, i.memoizedState = t, [e, n, !1];
  }
  function q0(t) {
    var e = te();
    return X0(e, Zt, t);
  }
  function X0(t, e, n) {
    if (e = Hs(
      t,
      e,
      Y0
    )[0], t = ko(Wn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = su(e);
      } catch (h) {
        throw h === $i ? jo : h;
      }
    else i = e;
    e = te();
    var u = e.queue, c = u.dispatch;
    return n !== e.memoizedState && (Nt.flags |= 2048, Fi(
      9,
      { destroy: void 0 },
      tb.bind(null, u, n),
      null
    )), [i, c, t];
  }
  function tb(t, e) {
    t.action = e;
  }
  function Z0(t) {
    var e = te(), n = Zt;
    if (n !== null)
      return X0(e, n, t);
    te(), e = e.memoizedState, n = te();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [e, i, !1];
  }
  function Fi(t, e, n, i) {
    return t = { tag: t, create: n, deps: i, inst: e, next: null }, e = Nt.updateQueue, e === null && (e = Io(), Nt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function G0() {
    return te().memoizedState;
  }
  function Fo(t, e, n, i) {
    var u = Ce();
    Nt.flags |= t, u.memoizedState = Fi(
      1 | e,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function Wo(t, e, n, i) {
    var u = te();
    i = i === void 0 ? null : i;
    var c = u.memoizedState.inst;
    Zt !== null && i !== null && Cs(i, Zt.memoizedState.deps) ? u.memoizedState = Fi(e, c, n, i) : (Nt.flags |= t, u.memoizedState = Fi(
      1 | e,
      c,
      n,
      i
    ));
  }
  function Q0(t, e) {
    Fo(8390656, 8, t, e);
  }
  function Vs(t, e) {
    Wo(2048, 8, t, e);
  }
  function eb(t) {
    Nt.flags |= 4;
    var e = Nt.updateQueue;
    if (e === null)
      e = Io(), Nt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function K0(t) {
    var e = te().memoizedState;
    return eb({ ref: e, nextImpl: t }), function() {
      if ((Vt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function $0(t, e) {
    return Wo(4, 2, t, e);
  }
  function I0(t, e) {
    return Wo(4, 4, t, e);
  }
  function J0(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function k0(t, e, n) {
    n = n != null ? n.concat([t]) : null, Wo(4, 4, J0.bind(null, e, t), n);
  }
  function Ys() {
  }
  function F0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Cs(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
  }
  function W0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Cs(e, i[1]))
      return i[0];
    if (i = t(), ci) {
      _n(!0);
      try {
        t();
      } finally {
        _n(!1);
      }
    }
    return n.memoizedState = [i, e], i;
  }
  function js(t, e, n) {
    return n === void 0 || (Fn & 1073741824) !== 0 && (Dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = cm(), Nt.lanes |= t, Cl |= t, n);
  }
  function P0(t, e, n, i) {
    return je(n, e) ? n : El.current !== null ? (t = js(t, n, i), je(t, e) || (ie = !0), t) : (Fn & 106) === 0 || (Fn & 1073741824) !== 0 && (Dt & 261930) === 0 ? (ie = !0, t.memoizedState = n) : (t = cm(), Nt.lanes |= t, Cl |= t, e);
  }
  function tg(t, e, n, i, u) {
    var c = rt.p;
    rt.p = c !== 0 && 8 > c ? c : 8;
    var h = ct.T, b = {};
    b.types = h !== null ? h.types : null, ct.T = b, Zs(t, !1, e, n);
    try {
      var z = u(), q = ct.S;
      if (q !== null && q(b, z), z !== null && typeof z == "object" && typeof z.then == "function") {
        var I = kx(
          z,
          i
        );
        fu(
          t,
          e,
          I,
          Qe(t)
        );
      } else
        fu(
          t,
          e,
          i,
          Qe(t)
        );
    } catch (nt) {
      fu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: nt },
        Qe()
      );
    } finally {
      rt.p = c, h !== null && b.types !== null && (h.types = b.types), ct.T = h;
    }
  }
  function nb() {
  }
  function qs(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var u = eg(t).queue;
    tg(
      t,
      u,
      e,
      vt,
      n === null ? nb : function() {
        return ng(t), n(i);
      }
    );
  }
  function eg(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: vt,
      baseState: vt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wn,
        lastRenderedState: vt
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ng(t) {
    var e = eg(t);
    e.next === null && (e = t.alternate.memoizedState), fu(
      t,
      e.next.queue,
      {},
      Qe()
    );
  }
  function Xs() {
    return ge(ya);
  }
  function lg() {
    return te().memoizedState;
  }
  function ig() {
    return te().memoizedState;
  }
  function lb(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Qe();
          t = bl(n);
          var i = Sl(e, t, n);
          i !== null && (Ue(i, e, n), au(i, e, n)), e = { cache: ys() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function ib(t, e, n) {
    var i = Qe();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Po(t) ? ug(e, n) : (n = os(t, e, n, i), n !== null && (Ue(n, t, i), og(n, e, i)));
  }
  function ag(t, e, n) {
    var i = Qe();
    fu(t, e, n, i);
  }
  function fu(t, e, n, i) {
    var u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Po(t)) ug(e, u);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var h = e.lastRenderedState, b = c(h, n);
          if (u.hasEagerState = !0, u.eagerState = b, je(b, h))
            return Ao(t, e, u, 0), Gt === null && zo(), !1;
        } catch {
        } finally {
        }
      if (n = os(t, e, u, i), n !== null)
        return Ue(n, t, i), og(n, e, i), !0;
    }
    return !1;
  }
  function Zs(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: Hf(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Po(t)) {
      if (e) throw Error(r(479));
    } else
      e = os(
        t,
        n,
        i,
        2
      ), e !== null && Ue(e, t, 2);
  }
  function Po(t) {
    var e = t.alternate;
    return t === Nt || e !== null && e === Nt;
  }
  function ug(t, e) {
    Ji = Ko = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function og(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, ro(t, n);
    }
  }
  var tc = {
    readContext: ge,
    use: Jo,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useLayoutEffect: Ft,
    useInsertionEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    useHostTransitionStatus: Ft,
    useFormState: Ft,
    useActionState: Ft,
    useOptimistic: Ft,
    useMemoCache: Ft,
    useCacheRefresh: Ft,
    useEffectEvent: Ft
  }, cg = {
    readContext: ge,
    use: Jo,
    useCallback: function(t, e) {
      return Ce().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ge,
    useEffect: Q0,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Fo(
        4194308,
        4,
        J0.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Fo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Fo(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Ce();
      e = e === void 0 ? null : e;
      var i = t();
      if (ci) {
        _n(!0);
        try {
          t();
        } finally {
          _n(!1);
        }
      }
      return n.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, n) {
      var i = Ce();
      if (n !== void 0) {
        var u = n(e);
        if (ci) {
          _n(!0);
          try {
            n(e);
          } finally {
            _n(!1);
          }
        }
      } else u = e;
      return i.memoizedState = i.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, i.queue = t, t = t.dispatch = ib.bind(
        null,
        Nt,
        t
      ), [i.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ce();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Ls(t);
      var e = t.queue, n = ag.bind(null, Nt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Ys,
    useDeferredValue: function(t, e) {
      var n = Ce();
      return js(n, t, e);
    },
    useTransition: function() {
      var t = Ls(!1);
      return t = tg.bind(
        null,
        Nt,
        t.queue,
        !0,
        !1
      ), Ce().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = Nt, u = Ce();
      if (Ct) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Gt === null)
          throw Error(r(349));
        (Dt & 127) !== 0 || z0(i, e, n);
      }
      u.memoizedState = n;
      var c = { value: n, getSnapshot: e };
      return u.queue = c, Q0(O0.bind(null, i, c, t), [
        t
      ]), i.flags |= 2048, Fi(
        9,
        { destroy: void 0 },
        A0.bind(
          null,
          i,
          c,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = Ce(), e = Gt.identifierPrefix;
      if (Ct) {
        var n = Mn, i = Tn;
        n = (i & ~(1 << 32 - Te(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = $o++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = Fx++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Xs,
    useFormState: j0,
    useActionState: j0,
    useOptimistic: function(t) {
      var e = Ce();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Zs.bind(
        null,
        Nt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Rs,
    useCacheRefresh: function() {
      return Ce().memoizedState = lb.bind(
        null,
        Nt
      );
    },
    useEffectEvent: function(t) {
      var e = Ce(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Vt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, rg = {
    readContext: ge,
    use: Jo,
    useCallback: F0,
    useContext: ge,
    useEffect: Vs,
    useImperativeHandle: k0,
    useInsertionEffect: $0,
    useLayoutEffect: I0,
    useMemo: W0,
    useReducer: ko,
    useRef: G0,
    useState: function() {
      return ko(Wn);
    },
    useDebugValue: Ys,
    useDeferredValue: function(t, e) {
      var n = te();
      return P0(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ko(Wn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : su(t),
        e
      ];
    },
    useSyncExternalStore: C0,
    useId: lg,
    useHostTransitionStatus: Xs,
    useFormState: q0,
    useActionState: q0,
    useOptimistic: function(t, e) {
      var n = te();
      return H0(n, Zt, t, e);
    },
    useMemoCache: Rs,
    useCacheRefresh: ig,
    useEffectEvent: K0
  }, ab = {
    readContext: ge,
    use: Jo,
    useCallback: F0,
    useContext: ge,
    useEffect: Vs,
    useImperativeHandle: k0,
    useInsertionEffect: $0,
    useLayoutEffect: I0,
    useMemo: W0,
    useReducer: Bs,
    useRef: G0,
    useState: function() {
      return Bs(Wn);
    },
    useDebugValue: Ys,
    useDeferredValue: function(t, e) {
      var n = te();
      return Zt === null ? js(n, t, e) : P0(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Bs(Wn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : su(t),
        e
      ];
    },
    useSyncExternalStore: C0,
    useId: lg,
    useHostTransitionStatus: Xs,
    useFormState: Z0,
    useActionState: Z0,
    useOptimistic: function(t, e) {
      var n = te();
      return Zt !== null ? H0(n, Zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Rs,
    useCacheRefresh: ig,
    useEffectEvent: K0
  };
  function Gs(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : R({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Qs = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = Qe(), u = bl(i);
      u.payload = e, n != null && (u.callback = n), e = Sl(t, u, i), e !== null && (Ue(e, t, i), au(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = Qe(), u = bl(i);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = Sl(t, u, i), e !== null && (Ue(e, t, i), au(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Qe(), i = bl(n);
      i.tag = 2, e != null && (i.callback = e), e = Sl(t, i, n), e !== null && (Ue(e, t, n), au(e, t, n));
    }
  };
  function sg(t, e, n, i, u, c, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, c, h) : e.prototype && e.prototype.isPureReactComponent ? !Fa(n, i) || !Fa(u, c) : !0;
  }
  function fg(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Qs.enqueueReplaceState(e, e.state, null);
  }
  function ri(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e)
        i !== "ref" && (n[i] = e[i]);
    }
    if (t = t.defaultProps) {
      n === e && (n = R({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function dg(t) {
    Co(t);
  }
  function hg(t) {
    console.error(t);
  }
  function gg(t) {
    Co(t);
  }
  function ec(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function mg(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Ks(t, e, n) {
    return n = bl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ec(t, e);
    }, n;
  }
  function yg(t) {
    return t = bl(t), t.tag = 3, t;
  }
  function vg(t, e, n, i) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = i.value;
      t.payload = function() {
        return u(c);
      }, t.callback = function() {
        mg(e, n, i);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
      mg(e, n, i), typeof u != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
      var b = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function ub(t, e, n, i, u) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && ei(
        e,
        n,
        u,
        !0
      ), n = me.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return Ee === null ? Ec() : n.alternate === null && Wt === 0 && (Wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, i === qo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), Of(t, i, u)), !1;
          case 22:
            return n.flags |= 65536, i === qo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), Of(t, i, u)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Of(t, i, u), Ec(), !1;
    }
    if (Ct)
      return e = me.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, i !== ds && (t = Error(r(422), { cause: i }), tu(Pe(t, n)))) : (i !== ds && (e = Error(r(423), {
        cause: i
      }), tu(
        Pe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, i = Pe(i, n), u = Ks(
        t.stateNode,
        i,
        u
      ), Es(t, u), Wt !== 4 && (Wt = 2)), !1;
    var c = Error(r(520), { cause: i });
    if (c = Pe(c, n), xu === null ? xu = [c] : xu.push(c), Wt !== 4 && (Wt = 2), e === null) return !0;
    i = Pe(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = Ks(n.stateNode, i, t), Es(n, t), !1;
        case 1:
          if (e = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (zl === null || !zl.has(c))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = yg(u), vg(
              u,
              t,
              n,
              i
            ), Es(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var $s = Error(r(461)), ie = !1;
  function ce(t, e, n, i) {
    e.child = t === null ? S0(e, null, n, i) : oi(
      e,
      t.child,
      n,
      i
    );
  }
  function pg(t, e, n, i, u) {
    n = n.render;
    var c = e.ref;
    if ("ref" in i) {
      var h = {};
      for (var b in i)
        b !== "ref" && (h[b] = i[b]);
    } else h = i;
    return ni(e), i = zs(
      t,
      e,
      n,
      h,
      c,
      u
    ), b = As(), t !== null && !ie ? (Os(t, e, u), Pn(t, e, u)) : (Ct && b && Ho(e), e.flags |= 1, ce(t, e, i, u), e.child);
  }
  function xg(t, e, n, i, u) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" && !cs(c) && c.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = c, bg(
        t,
        e,
        c,
        i,
        u
      )) : (t = Do(
        n.type,
        null,
        i,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !ef(t, u)) {
      var h = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Fa, n(h, i) && t.ref === e.ref)
        return Pn(t, e, u);
    }
    return e.flags |= 1, t = $n(c, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function bg(t, e, n, i, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Fa(c, i) && t.ref === e.ref)
        if (ie = !1, e.pendingProps = i = c, ef(t, u))
          (t.flags & 131072) !== 0 && (ie = !0);
        else
          return e.lanes = t.lanes, Pn(t, e, u);
    }
    return Is(
      t,
      e,
      n,
      i,
      u
    );
  }
  function Sg(t, e, n, i) {
    var u = i.children, c = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, u = 0; i !== null; )
            u = u | i.lanes | i.childLanes, i = i.sibling;
          i = u & ~c;
        } else i = 0, e.child = null;
        return Eg(
          t,
          e,
          c,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Yo(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? _0(e, c) : _s(), N0(e);
      else
        return i = e.lanes = 536870912, Eg(
          t,
          e,
          c !== null ? c.baseLanes | n : n,
          n,
          i
        );
    } else
      c !== null ? (Yo(e, c.cachePool), _0(e, c), _l(), e.memoizedState = null) : (t !== null && Yo(e, null), _s(), _l());
    return ce(t, e, u, n), e.child;
  }
  function du(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Eg(t, e, n, i, u) {
    var c = ps();
    return c = c === null ? null : { parent: ne._currentValue, pool: c }, e.memoizedState = {
      baseLanes: n,
      cachePool: c
    }, t !== null && Yo(e, null), _s(), N0(e), t !== null && ei(t, e, i, !0), e.childLanes = u, null;
  }
  function nc(t, e) {
    return e = lc(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function wg(t, e, n) {
    return oi(e, t.child, null, n), t = nc(e, e.pendingProps), t.flags |= 2, qe(e), e.memoizedState = null, t;
  }
  function ob(t, e, n) {
    var i = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Ct) {
        if (i.mode === "hidden")
          return t = nc(e, i), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, du(null, t);
        if (Ts(e), (t = Qt) ? (t = Jm(
          t,
          nn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: gl !== null ? { id: Tn, overflow: Mn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = u0(t), n.return = e, e.child = n, se = e, Qt = null)) : t = null, t === null) throw yl(e);
        return e.lanes = 536870912, null;
      }
      return nc(e, i);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var h = c.dehydrated;
      if (Ts(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = wg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (ie || ei(t, e, n, !1), u = (n & t.childLanes) !== 0, ie || u) {
        if (El.current === null) {
          if (i = Gt, i !== null && (h = so(i, n), h !== 0 && h !== c.retryLane))
            throw c.retryLane = h, Fl(t, h), Ue(i, t, h), $s;
          Ec();
        }
        e = wg(
          t,
          e,
          n
        );
      } else
        t = c.treeContext, Qt = an(h.nextSibling), se = e, Ct = !0, ml = null, nn = !1, t !== null && r0(e, t), e = nc(e, i), e.flags |= 134221824;
      return e;
    }
    return t = $n(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Wi(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Is(t, e, n, i, u) {
    return ni(e), n = zs(
      t,
      e,
      n,
      i,
      void 0,
      u
    ), i = As(), t !== null && !ie ? (Os(t, e, u), Pn(t, e, u)) : (Ct && i && Ho(e), e.flags |= 1, ce(t, e, n, u), e.child);
  }
  function _g(t, e, n, i, u, c) {
    return ni(e), e.updateQueue = null, n = M0(
      e,
      i,
      n,
      u
    ), T0(t), i = As(), t !== null && !ie ? (Os(t, e, c), Pn(t, e, c)) : (Ct && i && Ho(e), e.flags |= 1, ce(t, e, n, c), e.child);
  }
  function Ng(t, e, n, i, u) {
    if (ni(e), e.stateNode === null) {
      var c = Xi, h = n.contextType;
      typeof h == "object" && h !== null && (c = ge(h)), c = new n(i, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Qs, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = i, c.state = e.memoizedState, c.refs = {}, bs(e), h = n.contextType, c.context = typeof h == "object" && h !== null ? ge(h) : Xi, c.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Gs(
        e,
        n,
        h,
        i
      ), c.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (h = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), h !== c.state && Qs.enqueueReplaceState(c, c.state, null), ou(e, i, c, u), uu(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      c = e.stateNode;
      var b = e.memoizedProps, z = ri(n, b);
      c.props = z;
      var q = c.context, I = n.contextType;
      h = Xi, typeof I == "object" && I !== null && (h = ge(I));
      var nt = n.getDerivedStateFromProps;
      I = typeof nt == "function" || typeof c.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, I || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || q !== h) && fg(
        e,
        c,
        i,
        h
      ), xl = !1;
      var U = e.memoizedState;
      c.state = U, ou(e, i, c, u), uu(), q = e.memoizedState, b || U !== q || xl ? (typeof nt == "function" && (Gs(
        e,
        n,
        nt,
        i
      ), q = e.memoizedState), (z = xl || sg(
        e,
        n,
        z,
        i,
        U,
        q,
        h
      )) ? (I || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = q), c.props = i, c.state = q, c.context = h, i = z) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      c = e.stateNode, Ss(t, e), h = e.memoizedProps, I = ri(n, h), c.props = I, nt = e.pendingProps, U = c.context, q = n.contextType, z = Xi, typeof q == "object" && q !== null && (z = ge(q)), b = n.getDerivedStateFromProps, (q = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== nt || U !== z) && fg(
        e,
        c,
        i,
        z
      ), xl = !1, U = e.memoizedState, c.state = U, ou(e, i, c, u), uu();
      var K = e.memoizedState;
      h !== nt || U !== K || xl || t !== null && t.dependencies !== null && Uo(t.dependencies) ? (typeof b == "function" && (Gs(
        e,
        n,
        b,
        i
      ), K = e.memoizedState), (I = xl || sg(
        e,
        n,
        I,
        i,
        U,
        K,
        z
      ) || t !== null && t.dependencies !== null && Uo(t.dependencies)) ? (q || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, K, z), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        i,
        K,
        z
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === t.memoizedProps && U === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = K), c.props = i, c.state = K, c.context = z, i = I) : (typeof c.componentDidUpdate != "function" || h === t.memoizedProps && U === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return c = i, Wi(t, e), i = (e.flags & 128) !== 0, c || i ? (c = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && i ? (e.child = oi(
      e,
      t.child,
      null,
      u
    ), e.child = oi(
      e,
      null,
      n,
      u
    )) : ce(t, e, n, u), e.memoizedState = c.state, t = e.child) : t = Pn(
      t,
      e,
      u
    ), t;
  }
  function Tg(t, e, n, i) {
    return Pl(), e.flags |= 256, ce(t, e, n, i), e.child;
  }
  var Js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ks(t) {
    return { baseLanes: t, cachePool: m0() };
  }
  function Fs(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ge), t;
  }
  function Mg(t, e, n) {
    var i = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, h;
    if ((h = c) || (h = t !== null && t.memoizedState === null ? !1 : (ye.current & 2) !== 0), h && (u = !0, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Ct) {
        if (u ? wl(e) : _l(), (t = Qt) ? (t = Jm(
          t,
          nn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: gl !== null ? { id: Tn, overflow: Mn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = u0(t), n.return = e, e.child = n, se = e, Qt = null)) : t = null, t === null) throw yl(e);
        return Ff(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return c = i.children, i = i.fallback, u ? (_l(), u = e.mode, c = lc(
        { mode: "hidden", children: c },
        u
      ), i = Wl(
        i,
        u,
        n,
        null
      ), c.return = e, i.return = e, c.sibling = i, e.child = c, i = e.child, i.memoizedState = ks(n), i.childLanes = Fs(
        t,
        h,
        n
      ), e.memoizedState = Js, du(null, i)) : (wl(e), Ws(e, c));
    }
    var b = t.memoizedState;
    if (b !== null) {
      var z = b.dehydrated;
      if (z !== null)
        return cb(
          t,
          e,
          c,
          h,
          i,
          z,
          b,
          n
        );
    }
    return u ? (_l(), u = i.fallback, c = e.mode, b = t.child, z = b.sibling, i = $n(b, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = b.subtreeFlags & 1206910976, z !== null ? u = $n(z, u) : (u = Wl(
      u,
      c,
      n,
      null
    ), u.flags |= 2), u.return = e, i.return = e, i.sibling = u, e.child = i, du(null, i), i = e.child, u = t.child.memoizedState, u === null ? u = ks(n) : (c = u.cachePool, c !== null ? (b = ne._currentValue, c = c.parent !== b ? { parent: b, pool: b } : c) : c = m0(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: c
    }), i.memoizedState = u, i.childLanes = Fs(
      t,
      h,
      n
    ), e.memoizedState = Js, du(t.child, i)) : (wl(e), n = t.child, t = n.sibling, n = $n(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Ws(t, e) {
    return e = lc(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function lc(t, e) {
    return t = Re(22, t, null, e), t.lanes = 0, t;
  }
  function ic(t, e, n) {
    return oi(e, t.child, null, n), t = Ws(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function cb(t, e, n, i, u, c, h, b) {
    if (n)
      return e.flags & 256 ? (wl(e), e.flags &= -257, ic(
        t,
        e,
        b
      )) : e.memoizedState !== null ? (_l(), e.child = t.child, e.flags |= 128, null) : (_l(), c = u.fallback, h = e.mode, u = lc(
        { mode: "visible", children: u.children },
        h
      ), c = Wl(
        c,
        h,
        b,
        null
      ), c.flags |= 2, u.return = e, c.return = e, u.sibling = c, e.child = u, oi(e, t.child, null, b), u = e.child, u.memoizedState = ks(b), u.childLanes = Fs(
        t,
        i,
        b
      ), e.memoizedState = Js, du(null, u));
    if (wl(e), Ff(c)) {
      if (i = c.nextSibling && c.nextSibling.dataset, i) var z = i.dgst;
      return i = z, i !== "" && (u = Error(r(419)), u.stack = "", u.digest = i, tu({ value: u, source: null, stack: null })), ic(
        t,
        e,
        b
      );
    }
    if (ie || ei(t, e, b, !1), i = (b & t.childLanes) !== 0, ie || i) {
      if (El.current !== null)
        return ic(
          t,
          e,
          b
        );
      if (i = Gt, i !== null && (u = so(
        i,
        b
      ), u !== 0 && u !== h.retryLane))
        throw h.retryLane = u, Fl(t, u), Ue(i, t, u), $s;
      return kf(c) || Ec(), ic(
        t,
        e,
        b
      );
    }
    return kf(c) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Qt = an(c.nextSibling), se = e, Ct = !0, ml = null, nn = !1, t !== null && r0(e, t), e = Ws(
      e,
      u.children
    ), e.flags |= 134221824, e);
  }
  function Cg(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Lo(t.return, e, n);
  }
  function zg(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Qo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function ac(t, e, n, i, u, c) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: u,
      treeForkCount: c
    } : (h.isBackwards = e, h.rendering = null, h.renderingStartTime = 0, h.last = i, h.tail = n, h.tailMode = u, h.treeForkCount = c);
  }
  function Ps(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function tf(t, e, n) {
    var i = e.pendingProps, u = i.revealOrder, c = i.tail;
    i = i.children;
    var h = ye.current;
    if (e.flags & 128)
      return cu(e, h), null;
    var b = (h & 2) !== 0;
    if (b ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, cu(e, h), u === "backwards" && t !== null ? (Ps(t), ce(t, e, i, n), Ps(t)) : ce(t, e, i, n), i = Ct ? Pa : 0, !b && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Cg(t, n, e);
        else if (t.tag === 19)
          Cg(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "backwards":
        n = zg(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null, Ps(e)), ac(
          e,
          !0,
          u,
          null,
          c,
          i
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Qo(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        ac(
          e,
          !0,
          n,
          null,
          c,
          i
        );
        break;
      case "together":
        ac(
          e,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = zg(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), ac(
          e,
          !1,
          u,
          n,
          c,
          i
        );
    }
    return e.child;
  }
  function Ag(t, e, n) {
    var i = e.pendingProps;
    return vl(e, e.type, i.value), ce(t, e, i.children, n), e.child;
  }
  function Pn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Cl |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (ei(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = $n(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = $n(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function ef(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Uo(t)));
  }
  function rb(t, e, n) {
    switch (e.tag) {
      case 3:
        Je(e, e.stateNode.containerInfo), vl(e, ne, t.memoizedState.cache), Pl();
        break;
      case 27:
      case 5:
        we(e);
        break;
      case 4:
        Je(e, e.stateNode.containerInfo);
        break;
      case 10:
        vl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Ts(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) {
          if (i.dehydrated !== null)
            return wl(e), e.flags |= 128, null;
          i = ei(
            t,
            e,
            n,
            !1
          );
          var u = e.child.childLanes;
          return i || (n & u) !== 0 ? Mg(t, e, n) : (wl(e), t = Pn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        wl(e);
        break;
      case 19:
        if (e.flags & 128)
          return tf(
            t,
            e,
            n
          );
        if (u = (t.flags & 128) !== 0, i = (n & e.childLanes) !== 0, i || (ei(
          t,
          e,
          n,
          !1
        ), i = (n & e.childLanes) !== 0), u) {
          if (i)
            return tf(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), cu(e, ye.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, Sg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        vl(e, ne, t.memoizedState.cache);
    }
    return Pn(t, e, n);
  }
  function Og(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ie = !0;
      else {
        if (!ef(t, n) && (e.flags & 128) === 0)
          return ie = !1, rb(
            t,
            e,
            n
          );
        ie = (t.flags & 131072) !== 0;
      }
    else
      ie = !1, Ct && (e.flags & 1048576) !== 0 && c0(e, Pa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = ai(e.elementType), e.type = t, typeof t == "function")
            cs(t) ? (i = ri(t, i), e.tag = 1, e = Ng(
              null,
              e,
              t,
              i,
              n
            )) : (e.tag = 0, e = Is(
              null,
              e,
              t,
              i,
              n
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === O) {
                e.tag = 11, e = pg(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (u === $) {
                e.tag = 14, e = xg(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (u === V) {
                e.tag = 10, e.type = t, e = Ag(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ft(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Is(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return i = e.type, u = ri(
          i,
          e.pendingProps
        ), Ng(
          t,
          e,
          i,
          u,
          n
        );
      case 3:
        t: {
          if (Je(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          i = e.pendingProps;
          var c = e.memoizedState;
          u = c.element, Ss(t, e), ou(e, i, null, n);
          var h = e.memoizedState;
          if (i = h.cache, vl(e, ne, i), i !== c.cache && ms(
            e,
            [ne],
            n,
            !0
          ), uu(), i = h.element, c.isDehydrated)
            if (c = {
              element: i,
              isDehydrated: !1,
              cache: h.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = Tg(
                t,
                e,
                i,
                n
              );
              break t;
            } else if (i !== u) {
              u = Pe(
                Error(r(424)),
                e
              ), tu(u), e = Tg(
                t,
                e,
                i,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Qt = an(t.firstChild), se = e, Ct = !0, ml = null, nn = !0, n = S0(
                e,
                null,
                i,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (Pl(), i === u) {
              e = Pn(
                t,
                e,
                n
              );
              break t;
            }
            ce(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Wi(t, e), t === null ? (n = ny(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Ct || (e.stateNode = Bm(
          e.type,
          e.pendingProps,
          re.current,
          e
        )) : e.memoizedState = ny(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return we(e), t === null && Ct && (i = e.stateNode = Wm(
          e.type,
          e.pendingProps,
          re.current
        ), se = e, nn = !0, u = Qt, Dl(e.type) ? (Wf = u, Qt = an(i.firstChild)) : Qt = u), ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), Wi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Ct && ((u = i = Qt) && (i = l2(
          i,
          e.type,
          e.pendingProps,
          nn
        ), i !== null ? (e.stateNode = i, se = e, Qt = an(i.firstChild), nn = !1, u = !0) : u = !1), u || yl(e)), we(e), u = e.type, c = e.pendingProps, h = t !== null ? t.memoizedProps : null, i = c.children, Zf(u, c) ? i = null : h !== null && Zf(u, h) && (e.flags |= 32), e.memoizedState !== null && (u = zs(
          t,
          e,
          Wx,
          null,
          null,
          n
        ), ya._currentValue = u), Wi(t, e), ce(t, e, i, n), e.child;
      case 6:
        return t === null && Ct && ((t = n = Qt) && (n = i2(
          n,
          e.pendingProps,
          nn
        ), n !== null ? (e.stateNode = n, se = e, Qt = null, t = !0) : t = !1), t || yl(e)), null;
      case 13:
        return Mg(t, e, n);
      case 4:
        return Je(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = oi(
          e,
          null,
          i,
          n
        ) : ce(t, e, i, n), e.child;
      case 11:
        return pg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return i = e.pendingProps, Wi(t, e), ce(t, e, i, n), e.child;
      case 8:
        return ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return Ag(t, e, n);
      case 9:
        return u = e.type._context, i = e.pendingProps.children, ni(e), u = ge(u), i = i(u), e.flags |= 1, ce(t, e, i, n), e.child;
      case 14:
        return xg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return bg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return tf(t, e, n);
      case 31:
        return ob(t, e, n);
      case 22:
        return Sg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ni(e), i = ge(ne), t === null ? (u = ps(), u === null && (u = Gt, c = ys(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= n), u = c), e.memoizedState = { parent: i, cache: u }, bs(e), vl(e, ne, u)) : ((t.lanes & n) !== 0 && (Ss(t, e), ou(e, null, null, n), uu()), u = t.memoizedState, c = e.memoizedState, u.parent !== i ? (u = { parent: i, cache: i }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), vl(e, ne, i)) : (i = c.cache, vl(e, ne, i), i !== u.cache && ms(
          e,
          [ne],
          n,
          !0
        ))), ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), i = e.pendingProps, i.name != null && i.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Ct && Ho(e), t !== null && t.memoizedProps.name !== i.name ? e.flags |= 4194816 : Wi(t, e), ce(t, e, i.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function tl(t) {
    t.flags |= 4;
  }
  function nf(t, e, n, i, u) {
    var c;
    if ((c = (t.mode & 32) !== 0) && (c = n === null ? uy(e, i) : uy(e, i) && (i.src !== n.src || i.srcSet !== n.srcSet)), c) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (dm()) t.flags |= 8192;
        else
          throw ui = qo, xs;
    } else t.flags &= -16777217;
  }
  function Dg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !oy(e))
      if (dm()) t.flags |= 8192;
      else
        throw ui = qo, xs;
  }
  function uc(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ya() : 536870912, t.lanes |= e, la |= e);
  }
  function hu(t, e) {
    if (!Ct)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function Kt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, i |= u.subtreeFlags & 1206910976, i |= u.flags & 1206910976, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, i |= u.subtreeFlags, i |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e;
  }
  function sb(t, e, n) {
    var i = e.pendingProps;
    switch (fs(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Kt(e), null;
      case 1:
        return Kt(e), null;
      case 3:
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), kn(ne), Oe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Qi(e) ? tl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, hs())), Kt(e), null;
      case 26:
        var u = e.type, c = e.memoizedState;
        return t === null ? (tl(e), c !== null ? (Kt(e), Dg(e, c)) : (Kt(e), nf(
          e,
          u,
          null,
          i,
          n
        ))) : c ? c !== t.memoizedState ? (tl(e), Kt(e), Dg(e, c)) : (Kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && tl(e), Kt(e), nf(
          e,
          u,
          t,
          i,
          n
        )), null;
      case 27:
        if (De(e), n = re.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && tl(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), e.subtreeFlags &= -33554433, null;
          }
          t = Pt.current, Qi(e) ? s0(e) : (t = Wm(u, i, n), e.stateNode = t, tl(e));
        }
        return Kt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (De(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && tl(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), e.subtreeFlags &= -33554433, null;
          }
          if (c = Pt.current, Qi(e))
            s0(e);
          else {
            var h = _u(
              re.current
            );
            switch (c) {
              case 1:
                c = h.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                c = h.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    c = h.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    c = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    c = h.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof i.is == "string" ? h.createElement("select", {
                      is: i.is
                    }) : h.createElement("select"), i.multiple ? c.multiple = !0 : i.size && (c.size = i.size);
                    break;
                  default:
                    c = typeof i.is == "string" ? h.createElement(u, { is: i.is }) : h.createElement(u);
                }
            }
            c[oe] = e, c[Se] = i;
            t: for (h = e.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6)
                c.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === e) break t;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === e)
                  break t;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            e.stateNode = c;
            t: switch (pe(c, u, i), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && tl(e);
          }
        }
        return Kt(e), e.subtreeFlags &= -33554433, nf(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && tl(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = re.current, Qi(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, u = se, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  i = u.memoizedProps;
              }
            t[oe] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Om(t.nodeValue, n)), t || yl(e, !0);
          } else
            t = _u(t).createTextNode(
              i
            ), t[oe] = e, e.stateNode = t;
        }
        return Kt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = Qi(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[oe] = e;
            } else
              Pl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), t = !1;
          } else
            n = hs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Kt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Qi(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[oe] = e;
            } else
              Pl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), u = !1;
          } else
            u = hs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
        }
        return qe(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, u = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (u = i.alternate.memoizedState.cachePool.pool), c = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool), c !== u && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), uc(e, e.updateQueue), Kt(e), null);
      case 4:
        return Oe(), t === null && Vf(e.stateNode.containerInfo), e.flags |= 67108864, Kt(e), null;
      case 10:
        return kn(e.type), Kt(e), null;
      case 19:
        if (Ms(e), i = e.memoizedState, i === null) return Kt(e), null;
        if (u = (e.flags & 128) !== 0, c = i.rendering, c === null)
          if (u) hu(i, !1);
          else {
            if (Wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Qo(t), c !== null) {
                  for (e.flags |= 128, hu(i, !1), t = c.updateQueue, e.updateQueue = t, uc(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    a0(n, t), n = n.sibling;
                  return cu(
                    e,
                    ye.current & 1 | 2
                  ), Ct && In(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && _e() > pc && (e.flags |= 128, u = !0, hu(i, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Qo(c), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, uc(e, t), hu(i, !0), i.tail === null && i.tailMode !== "collapsed" && i.tailMode !== "visible" && !c.alternate && !Ct)
                return Kt(e), null;
            } else
              2 * _e() - i.renderingStartTime > pc && n !== 536870912 && (e.flags |= 128, u = !0, hu(i, !1), e.lanes = 4194304);
          i.isBackwards ? (c.sibling = e.child, e.child = c) : (t = i.last, t !== null ? t.sibling = c : e.child = c, i.last = c);
        }
        if (i.tail !== null) {
          t = i.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return i.rendering = t, i.tail = t.sibling, i.renderingStartTime = _e(), t.sibling = null, c = ye.current, c = u ? c & 1 | 2 : c & 1, i.tailMode === "visible" || i.tailMode === "collapsed" || !n || Ct ? cu(e, c) : (n = c, Ot(me, e), Ot(ye, n), Ee === null && (Ee = e)), Ct && In(e, i.treeForkCount), t;
        }
        return Kt(e), null;
      case 22:
      case 23:
        return qe(e), Ns(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Kt(e), n = e.updateQueue, n !== null && uc(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && Ht(ii), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), kn(ne), Kt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Kt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function fb(t, e) {
    switch (fs(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return kn(ne), Oe(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return De(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (qe(e), e.alternate === null)
            throw Error(r(340));
          Pl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Pl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Ms(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Oe(), null;
      case 10:
        return kn(e.type), null;
      case 22:
      case 23:
        return qe(e), Ns(), t !== null && Ht(ii), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return kn(ne), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rg(t, e) {
    switch (fs(e), e.tag) {
      case 3:
        kn(ne), Oe();
        break;
      case 26:
      case 27:
      case 5:
        De(e);
        break;
      case 4:
        Oe();
        break;
      case 31:
        e.memoizedState !== null && qe(e);
        break;
      case 13:
        qe(e);
        break;
      case 19:
        Ms(e);
        break;
      case 10:
        kn(e.type);
        break;
      case 22:
      case 23:
        qe(e), Ns(), t !== null && Ht(ii);
        break;
      case 24:
        kn(ne);
    }
  }
  function gu(t, e) {
    try {
      var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var c = n.create, h = n.inst;
            i = c(), h.destroy = i;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (b) {
      qt(e, e.return, b);
    }
  }
  function Nl(t, e, n) {
    try {
      var i = e.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        i = c;
        do {
          if ((i.tag & t) === t) {
            var h = i.inst, b = h.destroy;
            if (b !== void 0) {
              h.destroy = void 0, u = e;
              var z = n, q = b;
              try {
                q();
              } catch (I) {
                qt(
                  u,
                  z,
                  I
                );
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (I) {
      qt(e, e.return, I);
    }
  }
  function Hg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        w0(e, n);
      } catch (i) {
        qt(t, t.return, i);
      }
    }
  }
  function Bg(t, e, n) {
    n.props = ri(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      qt(t, e, i);
    }
  }
  function Cn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            var u = t.stateNode, c = Qn(t.memoizedProps, u);
            (u.ref === null || u.ref.name !== c) && (u.ref = Xm(c)), i = u.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ke(t);
              m(
                t.child,
                !1,
                e2,
                h,
                void 0,
                void 0
              ), t.stateNode = h;
            }
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (b) {
      qt(t, e, b);
    }
  }
  function ve(t, e) {
    var n = t.ref, i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (u) {
          qt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          qt(t, e, u);
        }
      else n.current = null;
  }
  function oc(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Im(
          t.stateNode,
          e[n]
        );
  }
  function Lg(t) {
    for (var e = t.return; e !== null && (af(e) && Im(t.stateNode, e.stateNode), !lf(e)); )
      e = e.return;
  }
  function mu(t) {
    for (var e = t.return; e !== null && (af(e) && n2(t.stateNode, e.stateNode), !lf(e)); )
      e = e.return;
  }
  function lf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function af(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function uf(t) {
    var e = t.type, n = t.memoizedProps, i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  function of(t, e, n) {
    try {
      var i = t.stateNode;
      Ub(i, t.type, n, e), i[Se] = e;
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  function Ug(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Dl(t.type) || t.tag === 4;
  }
  function cf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ug(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Dl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function rf(t, e, n, i) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(u), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Nn)), oc(t, i), Ut = !0;
    else if (u !== 4 && (u === 27 && (oc(t, i), i = null, Dl(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (rf(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        rf(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function cc(t, e, n, i) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? n.insertBefore(u, e) : n.appendChild(u), oc(t, i), Ut = !0;
    else if (u !== 4 && (u === 27 && (oc(t, i), i = null, Dl(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (cc(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        cc(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function Vg(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      pe(e, i, n), e[oe] = t, e[Se] = n;
    } catch (c) {
      qt(t, t.return, c);
    }
  }
  var rc = !1, Xe = null;
  function Yg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (rc = !0);
  }
  var zn = null;
  function jg() {
    var t = zn;
    return zn = null, t;
  }
  var He = 0;
  function Pi(t, e, n, i, u) {
    return He = 0, qg(
      t.child,
      e,
      n,
      i,
      u
    );
  }
  function qg(t, e, n, i, u) {
    for (var c = !1; t !== null; ) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (i !== null) {
          var b = Kf(h);
          i.push(b), b.view && (c = !0);
        } else
          c || Kf(h).view && (c = !0);
        rc = !0, jm(
          h,
          He === 0 ? e : e + "_" + He,
          n
        ), He++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && u || qg(
        t.child,
        e,
        n,
        i,
        u
      ) && (c = !0));
      t = t.sibling;
    }
    return c;
  }
  function An(t, e) {
    for (; t !== null; )
      t.tag === 5 ? qm(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || An(
        t.child,
        e
      )), t = t.sibling;
  }
  function sc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (sc(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = Kn(e.default, e.share), e !== "none" && (Pi(
            t,
            n,
            e,
            null,
            !1
          ) || An(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function sf(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, i = t.memoizedProps, u = Qn(i, n), c = Kn(
        i.default,
        n.paired ? i.share : i.enter
      );
      c !== "none" ? Pi(t, u, c, null, !1) ? (sc(t), n.paired || e || oa(t, i.onEnter)) : An(t.child, !1) : sc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        sf(t, e), t = t.sibling;
    else sc(t);
  }
  function ff(t) {
    if (Xe !== null && Xe.size !== 0) {
      var e = Xe;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, i = n.name;
              if (i != null && i !== "auto") {
                var u = e.get(i);
                if (u !== void 0) {
                  var c = Kn(
                    n.default,
                    n.share
                  );
                  if (c !== "none" && (Pi(
                    t,
                    i,
                    c,
                    null,
                    !1
                  ) ? (c = t.stateNode, u.paired = c, c.paired = u, oa(t, n.onShare)) : An(t.child, !1)), e.delete(i), e.size === 0) break;
                }
              }
            }
            ff(t);
          }
          t = t.sibling;
        }
    }
  }
  function df(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Qn(e, t.stateNode), i = Xe !== null ? Xe.get(n) : void 0, u = Kn(
        e.default,
        i !== void 0 ? e.share : e.exit
      );
      u !== "none" && (Pi(t, n, u, null, !1) ? i !== void 0 ? (u = t.stateNode, i.paired = u, u.paired = i, Xe.delete(n), oa(t, e.onShare)) : oa(t, e.onExit) : An(t.child, !1)), Xe !== null && ff(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        df(t), t = t.sibling;
    else
      Xe !== null && ff(t);
  }
  function Xg(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Qn(e, t.stateNode);
        e = Kn(e.default, e.update), t.flags &= -5, e !== "none" && Pi(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Xg(t);
      t = t.sibling;
    }
  }
  function hf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, An(t.child, !1));
          }
          hf(t);
        }
        t = t.sibling;
      }
  }
  function fc(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, An(t.child, !1), hf(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        fc(t), t = t.sibling;
    else hf(t);
  }
  function Zg(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? An(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Zg(t), t = t.sibling;
  }
  function gf(t, e, n, i, u, c, h) {
    for (var b = !1; e !== null; ) {
      if (e.tag === 5) {
        var z = e.stateNode;
        if (c !== null && He < c.length) {
          var q = c[He], I = Kf(z);
          (q.view || I.view) && (b = !0);
          var nt;
          if (nt = (t.flags & 4) === 0)
            if (I.clip) nt = !0;
            else {
              nt = q.rect;
              var U = I.rect;
              nt = nt.y !== U.y || nt.x !== U.x || nt.height !== U.height || nt.width !== U.width;
            }
          nt && (t.flags |= 4), I.abs ? I = !q.abs : (q = q.rect, I = I.rect, I = q.height !== I.height || q.width !== I.width), I && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && jm(
          z,
          He === 0 ? n : n + "_" + He,
          u
        ), b && (t.flags & 4) !== 0 || (zn === null && (zn = []), zn.push(
          z,
          He === 0 ? i : i + "_" + He,
          e.memoizedProps
        )), He++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : gf(
        t,
        e.child,
        n,
        i,
        u,
        c,
        h
      ) && (b = !0));
      e = e.sibling;
    }
    return b;
  }
  function Gg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, i = t.stateNode, u = Qn(n, i), c = Kn(n.default, n.update), h;
        h = t.memoizedState, t.memoizedState = null, i = t;
        var b = t.child;
        He = 0, u = gf(
          i,
          b,
          u,
          u,
          c,
          h,
          !1
        ), (t.flags & 4) !== 0 && u && oa(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Gg(t);
      t = t.sibling;
    }
  }
  var fe = !1, Yt = !1, On = !1, mf = !1, Qg = typeof WeakSet == "function" ? WeakSet : Set, de = null, Dn = !1, yu = !1, dc = !1, yf = !1;
  function db(t, e, n) {
    if (t = t.containerInfo, qf = va, t = Jh(t), es(t)) {
      if ("selectionStart" in t)
        var i = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          i = (i = t.ownerDocument) && i.defaultView || window;
          var u = i.getSelection && i.getSelection();
          if (u && u.rangeCount !== 0) {
            i = u.anchorNode;
            var c = u.anchorOffset, h = u.focusNode;
            u = u.focusOffset;
            try {
              i.nodeType, h.nodeType;
            } catch {
              i = null;
              break t;
            }
            var b = 0, z = -1, q = -1, I = 0, nt = 0, U = t, K = null;
            e: for (; ; ) {
              for (var ht; U !== i || c !== 0 && U.nodeType !== 3 || (z = b + c), U !== h || u !== 0 && U.nodeType !== 3 || (q = b + u), U.nodeType === 3 && (b += U.nodeValue.length), (ht = U.firstChild) !== null; )
                K = U, U = ht;
              for (; ; ) {
                if (U === t) break e;
                if (K === i && ++I === c && (z = b), K === h && ++nt === u && (q = b), (ht = U.nextSibling) !== null) break;
                U = K, K = U.parentNode;
              }
              U = ht;
            }
            i = z === -1 || q === -1 ? null : { start: z, end: q };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Xf = { focusedElem: t, selectionRange: i }, va = !1, n = (n & 335544064) === n, de = e, e = n ? 9270 : 1024; de !== null; ) {
      if (t = de, n && (i = t.deletions, i !== null))
        for (c = 0; c < i.length; c++)
          n && df(i[c]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && Yg(t), hc(n);
      else {
        if (t.tag === 22) {
          if (i = t.alternate, t.memoizedState !== null) {
            i !== null && i.memoizedState === null && n && df(i), hc(n);
            continue;
          } else if (i !== null && i.memoizedState !== null) {
            n && Yg(t), hc(n);
            continue;
          }
        }
        i = t.child, (t.subtreeFlags & e) !== 0 && i !== null ? (i.return = t, de = i) : (n && Xg(t), hc(n));
      }
    }
    Xe = null;
  }
  function hc(t) {
    for (; de !== null; ) {
      var e = de, n = t, i = e.alternate, u = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && i !== null) {
            n = void 0, u = i.memoizedProps, i = i.memoizedState;
            var c = e.stateNode;
            try {
              var h = ri(
                e.type,
                u
              );
              n = c.getSnapshotBeforeUpdate(
                h,
                i
              ), c.__reactInternalSnapshotBeforeUpdate = n;
            } catch (b) {
              qt(e, e.return, b);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (i = e.stateNode.containerInfo, n = i.nodeType, n === 9)
              Jf(i);
            else if (n === 1)
              switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Jf(i);
                  break;
                default:
                  i.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && i !== null && (n = Qn(
            i.memoizedProps,
            i.stateNode
          ), u = e.memoizedProps, u = Kn(u.default, u.update), u !== "none" && Pi(
            i,
            n,
            u,
            i.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(r(163));
      }
      if (i = e.sibling, i !== null) {
        i.return = e.return, de = i;
        break;
      }
      de = e.return;
    }
  }
  function Kg(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(t, n), i & 4 && gu(5, n);
        break;
      case 1:
        if (Rn(t, n), i & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (h) {
              qt(n, n.return, h);
            }
          else {
            var u = ri(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (h) {
              qt(
                n,
                n.return,
                h
              );
            }
          }
        i & 64 && Hg(n), i & 512 && Cn(n, n.return);
        break;
      case 3:
        if (Rn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            w0(t, e);
          } catch (h) {
            qt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Vg(n);
      case 26:
      case 5:
        Rn(t, n), e === null && i & 4 && uf(n), i & 512 && Cn(n, n.return);
        break;
      case 12:
        Rn(t, n);
        break;
      case 31:
        Rn(t, n), i & 4 && kg(t, n);
        break;
      case 13:
        Rn(t, n), i & 4 && Fg(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = _b.bind(
          null,
          n
        ), a2(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || fe, !i) {
          var c = e !== null && e.memoizedState !== null || Yt;
          e = fe, u = Yt, fe = i, (Yt = c) && !u ? (i = 2, (n.subtreeFlags & 8772) !== 0 && (i |= 1), dn(
            t,
            n,
            i
          )) : Rn(t, n), fe = e, Yt = u;
        }
        break;
      case 30:
        Rn(t, n), i & 512 && Cn(n, n.return);
        break;
      case 7:
        i & 512 && Cn(n, n.return);
      default:
        Rn(t, n);
    }
  }
  function vf(t, e) {
    for (t = t.child; t !== null; )
      $g(t, e), t = t.sibling;
  }
  function $g(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var i = n.style;
            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
          } else {
            var u = t.stateNode, c = t.memoizedProps.style, h = c != null && c.hasOwnProperty("display") ? c.display : null;
            u.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
          }
        } catch (z) {
          qt(t, t.return, z);
        }
        pf(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Ut = !0;
        } catch (z) {
          qt(t, t.return, z);
        }
        break;
      case 18:
        try {
          var b = t.stateNode;
          e ? Ym(b, !0) : Ym(t.stateNode, !1);
        } catch (z) {
          qt(t, t.return, z);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && vf(t, e);
        break;
      default:
        vf(t, e);
    }
  }
  function pf(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, i = e;
          switch (n.tag) {
            case 4:
              $g(n, i);
              break t;
            case 22:
              n.memoizedState === null && pf(n, i);
              break t;
            default:
              pf(n, i);
          }
        }
        t = t.sibling;
      }
  }
  function Ig(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ig(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ri(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var It = null, Be = !1;
  function sn(t, e, n) {
    for (n = n.child; n !== null; )
      Jg(t, e, n), n = n.sibling;
  }
  function Jg(t, e, n) {
    if (Ne && typeof Ne.onCommitFiberUnmount == "function")
      try {
        Ne.onCommitFiberUnmount(Gl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Yt || ve(n, e), sn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Yt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Yt || ve(n, e), mu(n);
        var i = It, u = Be;
        Dl(n.type) && (It = n.stateNode, Be = !1), sn(
          t,
          e,
          n
        ), Pm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), It = i, Be = u;
        break;
      case 5:
        Yt || ve(n, e), mu(n);
      case 6:
        if (n.tag === 6 && mu(n), i = It, u = Be, It = null, sn(
          t,
          e,
          n
        ), It = i, Be = u, It !== null)
          if (Be)
            try {
              (It.nodeType === 9 ? It.body : It.nodeName === "HTML" ? It.ownerDocument.body : It).removeChild(n.stateNode), Ut = !0;
            } catch (c) {
              qt(
                n,
                e,
                c
              );
            }
          else
            try {
              It.removeChild(n.stateNode), Ut = !0;
            } catch (c) {
              qt(
                n,
                e,
                c
              );
            }
        break;
      case 18:
        It !== null && (Be ? (t = It, Vm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), pa(t)) : Vm(It, n.stateNode));
        break;
      case 4:
        i = It, u = Be, It = n.stateNode.containerInfo, Be = !0, sn(
          t,
          e,
          n
        ), It = i, Be = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nl(2, n, e), Yt || Nl(4, n, e), sn(
          t,
          e,
          n
        );
        break;
      case 1:
        Yt || (ve(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && Bg(
          n,
          e,
          i
        )), sn(
          t,
          e,
          n
        );
        break;
      case 21:
        sn(
          t,
          e,
          n
        );
        break;
      case 22:
        Yt = (i = Yt) || n.memoizedState !== null, sn(
          t,
          e,
          n
        ), Yt = i;
        break;
      case 30:
        ve(n, e), sn(
          t,
          e,
          n
        );
        break;
      case 7:
        Yt || ve(n, e), sn(
          t,
          e,
          n
        );
        break;
      default:
        sn(
          t,
          e,
          n
        );
    }
  }
  function kg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        pa(t);
      } catch (n) {
        qt(e, e.return, n);
      }
    }
  }
  function Fg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        pa(t);
      } catch (n) {
        qt(e, e.return, n);
      }
  }
  function hb(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Qg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Qg()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function gc(t, e) {
    var n = hb(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var u = Nb.bind(null, t, i);
        i.then(u, u);
      }
    });
  }
  function ze(t, e, n) {
    var i = e.deletions;
    if (i !== null)
      for (var u = 0; u < i.length; u++) {
        var c = i[u], h = t, b = e, z = b;
        t: for (; z !== null; ) {
          switch (z.tag) {
            case 27:
              if (Dl(z.type)) {
                It = z.stateNode, Be = !1;
                break t;
              }
              break;
            case 5:
              It = z.stateNode, Be = !1;
              break t;
            case 3:
            case 4:
              It = z.stateNode.containerInfo, Be = !0;
              break t;
          }
          z = z.return;
        }
        if (It === null) throw Error(r(160));
        Jg(h, b, c), It = null, Be = !1, h = c.alternate, h !== null && (h.return = null), c.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Wg(e, t, n), e = e.sibling;
  }
  var fn = null;
  function Wg(t, e, n) {
    var i = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (i = t.updateQueue, i = i !== null ? i.events : null, i !== null))
          for (var c = 0; c < i.length; c++) {
            var h = i[c];
            h.ref.impl = h.nextImpl;
          }
        ze(e, t, n), Ae(t), u & 4 && (Nl(3, t, t.return), gu(3, t), Nl(5, t, t.return));
        break;
      case 1:
        ze(e, t, n), Ae(t), u & 512 && (Yt || i === null || ve(i, i.return)), u & 64 && fe && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (c = fn, ze(e, t, n), Ae(t), u & 512 && (Yt || i === null || ve(i, i.return)), u & 4)
          if (u = i !== null ? i.memoizedState : null, n = t.memoizedState, i === null)
            if (n === null)
              if (t.stateNode === null)
                if (fe)
                  t.stateNode = Bm(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, u = c.ownerDocument || c;
                    e: switch (e) {
                      case "title":
                        i = u.getElementsByTagName("title")[0], (!i || i[$l] || i[oe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = u.createElement(e), u.head.insertBefore(
                          i,
                          u.querySelector("head > title")
                        )), pe(i, e, n), i[oe] = t, ee(i), e = i;
                        break t;
                      case "link":
                        if (c = ay(
                          "link",
                          "href",
                          u
                        ).get(e + (n.href || ""))) {
                          for (h = 0; h < c.length; h++)
                            if (i = c[h], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              c.splice(h, 1);
                              break e;
                            }
                        }
                        i = u.createElement(e), pe(i, e, n), u.head.appendChild(i);
                        break;
                      case "meta":
                        if (c = ay(
                          "meta",
                          "content",
                          u
                        ).get(e + (n.content || ""))) {
                          for (h = 0; h < c.length; h++)
                            if (i = c[h], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              c.splice(h, 1);
                              break e;
                            }
                        }
                        i = u.createElement(e), pe(i, e, n), u.head.appendChild(i);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    i[oe] = t, ee(i), e = i;
                  }
                  t.stateNode = e;
                }
              else
                fe || nd(c, t.type, t.stateNode);
            else
              t.stateNode = iy(
                c,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? (e = i.stateNode, e === null || Yt || e.parentNode.removeChild(e)) : u.count--, n === null ? fe || nd(c, t.type, t.stateNode) : iy(c, n, t.memoizedProps)) : n === null && t.stateNode !== null && of(
              t,
              t.memoizedProps,
              i.memoizedProps
            );
        break;
      case 27:
        ze(e, t, n), Ae(t), u & 512 && (Yt || i === null || ve(i, i.return)), i !== null && u & 4 && of(
          t,
          t.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (c = On, On = !1, ze(e, t, n), On = c, Ae(t), u & 512 && (Yt || i === null || ve(i, i.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Bi(e, ""), Ut = !0;
          } catch (I) {
            qt(t, t.return, I);
          }
        }
        u & 4 && t.stateNode != null && (e = t.memoizedProps, of(
          t,
          e,
          i !== null ? i.memoizedProps : e
        )), u & 1024 && (mf = !0);
        break;
      case 6:
        if (ze(e, t, n), Ae(t), u & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Ut = !0;
          } catch (I) {
            qt(t, t.return, I);
          }
        }
        break;
      case 3:
        if (Ut = !1, zc = null, c = fn, fn = Nu(e.containerInfo), ze(e, t, n), fn = c, Ae(t), u & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            pa(e.containerInfo);
          } catch (I) {
            qt(t, t.return, I);
          }
        mf && (mf = !1, Pg(t)), Ut = !1;
        break;
      case 4:
        u = On, On = fe, i = xh(), c = fn, fn = Nu(
          t.stateNode.containerInfo
        ), ze(e, t, n), Ae(t), fn = c, Ut && yu && (dc = !0), Ut = i, On = u;
        break;
      case 12:
        ze(e, t, n), Ae(t);
        break;
      case 31:
        ze(e, t, n), Ae(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, gc(t, e)));
        break;
      case 13:
        ze(e, t, n), Ae(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (vc = _e()), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, gc(t, e)));
        break;
      case 22:
        c = t.memoizedState !== null, h = i !== null && i.memoizedState !== null;
        var b = fe, z = Yt, q = On;
        fe = b || c, On = q || c, Yt = z || h, ze(e, t, n), Yt = z, On = q, fe = b, Ae(t), u & 8192 && (e = t.stateNode, e._visibility = c ? e._visibility & -2 : e._visibility | 1, !c || i === null || h || fe || Yt || (e = h || Yt, n = fe, i = Yt, fe = c || fe, Yt = e, Tl(t, 2), fe = n, Yt = i), !c && On || vf(t, c)), u & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, gc(t, n))));
        break;
      case 19:
        ze(e, t, n), Ae(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, gc(t, e)));
        break;
      case 30:
        u & 512 && (Yt || i === null || ve(i, i.return)), u = xh(), c = yu, h = (n & 335544064) === n, b = t.memoizedProps, yu = h && Kn(
          b.default,
          b.update
        ) !== "none", ze(e, t, n), Ae(t), h && i !== null && Ut && (t.flags |= 4), yu = c, Ut = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Yt || i === null || ve(i, i.return)), i && i.stateNode !== null && (i.stateNode._fragmentFiber = t);
      default:
        ze(e, t, n), Ae(t);
    }
  }
  function Ae(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Ug(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        i = null;
        for (var u = t.return; u !== null; ) {
          if (af(u)) {
            var c = u.stateNode;
            i === null ? i = [c] : i.push(c);
          }
          if (lf(u)) break;
          u = u.return;
        }
        var h = i;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var b = n.stateNode, z = cf(t);
            cc(
              t,
              z,
              b,
              h
            );
            break;
          case 5:
            var q = n.stateNode;
            n.flags & 32 && (Bi(q, ""), n.flags &= -33);
            var I = cf(t);
            cc(
              t,
              I,
              q,
              h
            );
            break;
          case 3:
          case 4:
            var nt = n.stateNode.containerInfo, U = cf(t);
            rf(
              t,
              U,
              nt,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (K) {
        qt(t, t.return, K);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Pg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Pg(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, va = !0, e.reset(), va = !1), t = t.sibling;
      }
  }
  function ta(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        tm(e, t), e = e.sibling;
    else Gg(e);
  }
  function tm(t, e) {
    var n = t.alternate;
    if (n === null) sf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (yf = Dn = !1, jg(), ta(e, t), !Dn && !dc) {
            if (t = zn, t !== null)
              for (var i = 0; i < t.length; i += 3) {
                n = t[i];
                var u = t[i + 1];
                qm(n, t[i + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), yf = !0;
          }
          zn = null;
          break;
        case 5:
          ta(e, t);
          break;
        case 4:
          i = Dn, Dn = !1, ta(e, t), Dn && (dc = !0), Dn = i;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? sf(t, !1) : ta(e, t));
          break;
        case 30:
          i = Dn, u = jg(), Dn = !1, ta(e, t), Dn && (t.flags |= 4);
          var c = t.memoizedProps, h = t.stateNode;
          e = Qn(c, h), h = Qn(n.memoizedProps, h);
          var b = Kn(c.default, c.update);
          b === "none" ? e = !1 : (c = n.memoizedState, n.memoizedState = null, n = t.child, He = 0, e = gf(
            t,
            n,
            e,
            h,
            b,
            c,
            !0
          ), He !== (c === null ? 0 : c.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (oa(
            t,
            t.memoizedProps.onUpdate
          ), zn = u) : u !== null && (u.push.apply(u, zn), zn = u), Dn = (t.flags & 32) !== 0 ? !0 : i;
          break;
        default:
          ta(e, t);
      }
  }
  function Rn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Kg(t, e.alternate, e), e = e.sibling;
  }
  function Tl(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, i = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nl(4, n, n.return), Tl(
            n,
            i
          );
          break;
        case 1:
          ve(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Bg(
            n,
            n.return,
            u
          ), Tl(
            n,
            i
          );
          break;
        case 27:
          (i & 2) !== 0 && Pm(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          ve(n, n.return), n.tag !== 5 && n.tag !== 27 || mu(n), Tl(
            n,
            i
          );
          break;
        case 6:
          mu(n);
          break;
        case 26:
          ve(n, n.return), u = n.stateNode, n.memoizedState !== null || u === null || Yt || u.parentNode.removeChild(u), Tl(
            n,
            i
          );
          break;
        case 22:
          n.memoizedState === null && Tl(
            n,
            i
          );
          break;
        case 30:
          ve(n, n.return), Tl(
            n,
            i
          );
          break;
        case 7:
          ve(n, n.return);
        default:
          Tl(
            n,
            i
          );
      }
      t = t.sibling;
    }
  }
  function dn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var i = e.alternate, u = t, c = e, h = c.flags, b = (n & 1) !== 0;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          dn(
            u,
            c,
            n
          ), gu(4, c);
          break;
        case 1:
          if (dn(
            u,
            c,
            n
          ), i = c, u = i.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (I) {
              qt(i, i.return, I);
            }
          if (i = c, u = i.updateQueue, u !== null) {
            var z = i.stateNode;
            try {
              var q = u.shared.hiddenCallbacks;
              if (q !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < q.length; u++)
                  E0(q[u], z);
            } catch (I) {
              qt(i, i.return, I);
            }
          }
          b && h & 64 && Hg(c), Cn(c, c.return);
          break;
        case 27:
          (n & 2) !== 0 && Vg(c);
        case 5:
          c.tag !== 5 && c.tag !== 27 || Lg(c), dn(
            u,
            c,
            n
          ), b && i === null && h & 4 && uf(c), Cn(c, c.return);
          break;
        case 6:
          Lg(c);
          break;
        case 26:
          z = c.stateNode, c.memoizedState !== null || z === null || fe || nd(
            Nu(z.ownerDocument),
            c.type,
            z
          ), dn(
            u,
            c,
            n
          ), b && i === null && h & 4 && uf(c), Cn(c, c.return);
          break;
        case 12:
          dn(
            u,
            c,
            n
          );
          break;
        case 31:
          dn(
            u,
            c,
            n
          ), b && h & 4 && kg(u, c);
          break;
        case 13:
          dn(
            u,
            c,
            n
          ), b && h & 4 && Fg(u, c);
          break;
        case 22:
          c.memoizedState === null && dn(
            u,
            c,
            n
          ), Cn(c, c.return);
          break;
        case 30:
          dn(
            u,
            c,
            n
          ), Cn(c, c.return);
          break;
        case 7:
          Cn(c, c.return);
        default:
          dn(
            u,
            c,
            n
          );
      }
      e = e.sibling;
    }
  }
  function xf(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && eu(n));
  }
  function bf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && eu(t));
  }
  function ln(t, e, n, i) {
    var u = (n & 335544064) === n;
    if (e.subtreeFlags & (u ? 10262 : 10256))
      for (e = e.child; e !== null; )
        em(
          t,
          e,
          n,
          i
        ), e = e.sibling;
    else u && Zg(e);
  }
  function em(t, e, n, i) {
    var u = (n & 335544064) === n;
    u && e.alternate === null && e.return !== null && e.return.alternate !== null && fc(e);
    var c = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ln(
          t,
          e,
          n,
          i
        ), c & 2048 && gu(9, e);
        break;
      case 1:
        ln(
          t,
          e,
          n,
          i
        );
        break;
      case 3:
        ln(
          t,
          e,
          n,
          i
        ), u && yf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), c & 2048 && (c = null, e.alternate !== null && (c = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== c && (e.refCount++, c != null && eu(c)));
        break;
      case 12:
        if (c & 2048) {
          ln(
            t,
            e,
            n,
            i
          ), c = e.stateNode;
          try {
            var h = e.memoizedProps, b = h.id, z = h.onPostCommit;
            typeof z == "function" && z(
              b,
              e.alternate === null ? "mount" : "update",
              c.passiveEffectDuration,
              -0
            );
          } catch (q) {
            qt(e, e.return, q);
          }
        } else
          ln(
            t,
            e,
            n,
            i
          );
        break;
      case 31:
        ln(
          t,
          e,
          n,
          i
        );
        break;
      case 13:
        ln(
          t,
          e,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        h = e.stateNode, b = e.alternate, e.memoizedState !== null ? (u && b !== null && b.memoizedState === null && fc(b), h._visibility & 2 ? ln(
          t,
          e,
          n,
          i
        ) : vu(
          t,
          e
        )) : (u && b !== null && b.memoizedState !== null && fc(e), h._visibility & 2 ? ln(
          t,
          e,
          n,
          i
        ) : (h._visibility |= 2, ea(
          t,
          e,
          n,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), c & 2048 && xf(b, e);
        break;
      case 24:
        ln(
          t,
          e,
          n,
          i
        ), c & 2048 && bf(e.alternate, e);
        break;
      case 30:
        u && (c = e.alternate, c !== null && (An(c.child, !0), An(e.child, !0))), ln(
          t,
          e,
          n,
          i
        );
        break;
      default:
        ln(
          t,
          e,
          n,
          i
        );
    }
  }
  function ea(t, e, n, i, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t, h = e, b = n, z = i, q = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          ea(
            c,
            h,
            b,
            z,
            u
          ), gu(8, h);
          break;
        case 23:
          break;
        case 22:
          var I = h.stateNode;
          h.memoizedState !== null ? I._visibility & 2 ? ea(
            c,
            h,
            b,
            z,
            u
          ) : vu(
            c,
            h
          ) : (I._visibility |= 2, ea(
            c,
            h,
            b,
            z,
            u
          )), u && q & 2048 && xf(
            h.alternate,
            h
          );
          break;
        case 24:
          ea(
            c,
            h,
            b,
            z,
            u
          ), u && q & 2048 && bf(h.alternate, h);
          break;
        default:
          ea(
            c,
            h,
            b,
            z,
            u
          );
      }
      e = e.sibling;
    }
  }
  function vu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, i = e, u = i.flags;
        switch (i.tag) {
          case 22:
            vu(n, i), u & 2048 && xf(
              i.alternate,
              i
            );
            break;
          case 24:
            vu(n, i), u & 2048 && bf(i.alternate, i);
            break;
          default:
            vu(n, i);
        }
        e = e.sibling;
      }
  }
  var si = 8192;
  function fi(t, e, n) {
    if (t.subtreeFlags & si)
      for (t = t.child; t !== null; )
        nm(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function nm(t, e, n) {
    switch (t.tag) {
      case 26:
        fi(
          t,
          e,
          n
        ), t.flags & si && (t.memoizedState !== null ? x2(
          n,
          fn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && ry(n, t)));
        break;
      case 5:
        fi(
          t,
          e,
          n
        ), t.flags & si && (t = t.stateNode, (e & 335544128) === e && ry(n, t));
        break;
      case 3:
      case 4:
        var i = fn;
        fn = Nu(t.stateNode.containerInfo), fi(
          t,
          e,
          n
        ), fn = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = si, si = 16777216, fi(
          t,
          e,
          n
        ), si = i) : fi(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & si) !== 0 && (i = t.memoizedProps.name, i != null && i !== "auto")) {
          var u = t.stateNode;
          u.paired = null, Xe === null && (Xe = /* @__PURE__ */ new Map()), Xe.set(i, u);
        }
        fi(
          t,
          e,
          n
        );
        break;
      default:
        fi(
          t,
          e,
          n
        );
    }
  }
  function lm(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function pu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          de = i, am(
            i,
            t
          );
        }
      lm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        im(t), t = t.sibling;
  }
  function im(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pu(t), t.flags & 2048 && Nl(9, t, t.return);
        break;
      case 3:
        pu(t);
        break;
      case 12:
        pu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, mc(t)) : pu(t);
        break;
      default:
        pu(t);
    }
  }
  function mc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          de = i, am(
            i,
            t
          );
        }
      lm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, e, e.return), mc(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, mc(e));
          break;
        default:
          mc(e);
      }
      t = t.sibling;
    }
  }
  function am(t, e) {
    for (; de !== null; ) {
      var n = de;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          eu(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, de = i;
      else
        t: for (n = t; de !== null; ) {
          i = de;
          var u = i.sibling, c = i.return;
          if (Ig(i), i === n) {
            de = null;
            break t;
          }
          if (u !== null) {
            u.return = c, de = u;
            break t;
          }
          de = c;
        }
    }
  }
  var gb = {
    getCacheForType: function(t) {
      var e = ge(ne), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ge(ne).controller.signal;
    }
  }, mb = typeof WeakMap == "function" ? WeakMap : Map, Vt = 0, Gt = null, zt = null, Dt = 0, jt = 0, Ze = null, Ml = !1, na = !1, Sf = !1, el = 0, Wt = 0, Cl = 0, di = 0, yc = 0, Ge = 0, la = 0, xu = null, Le = null, Ef = !1, vc = 0, um = 0, pc = 1 / 0, xc = null, zl = null, Jt = 0, hn = null, hi = null, Hn = 0, wf = 0, _f = null, om = null, ia = null, aa = null, ua = null, bu = 0, bc = null;
  function Qe() {
    return (Vt & 2) !== 0 && Dt !== 0 ? Dt & -Dt : ct.T !== null ? Hf() : fo();
  }
  function cm() {
    if (Ge === 0)
      if ((Dt & 536870912) === 0 || Ct) {
        var t = Ci;
        Ci <<= 1, (Ci & 3932160) === 0 && (Ci = 262144), Ge = t;
      } else Ge = 536870912;
    return t = me.current, t !== null && (t.flags |= 32), Ge;
  }
  function oa(t, e) {
    if (e != null) {
      var n = t.stateNode, i = n.ref;
      i === null && (i = n.ref = Xm(
        Qn(t.memoizedProps, n)
      )), aa === null && (aa = []), aa.push(e.bind(null, i));
    }
  }
  function Ue(t, e, n) {
    (t === Gt && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null) && (ca(t, 0), Al(
      t,
      Dt,
      Ge,
      !1
    )), Kl(t, n), ((Vt & 2) === 0 || t !== Gt) && (t === Gt && ((Vt & 2) === 0 && (di |= n), Wt === 4 && Al(
      t,
      Dt,
      Ge,
      !1
    )), Bn(t));
  }
  function rm(t, e, n) {
    if ((Vt & 6) !== 0) throw Error(r(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ql(t, e), u = i ? pb(t, e) : Tf(t, e, !0), c = i;
    do {
      if (u === 0) {
        na && !i && Al(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, c && !yb(n)) {
          u = Tf(t, e, !1), c = !1;
          continue;
        }
        if (u === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var h = 0;
          else
            h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
          if (h !== 0) {
            e = h;
            t: {
              var b = t;
              u = xu;
              var z = b.current.memoizedState.isDehydrated;
              if (z && (ca(b, h).flags |= 256), h = Tf(
                b,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (Sf && !z) {
                  b.errorRecoveryDisabledLanes |= c, di |= c, u = 4;
                  break t;
                }
                c = Le, Le = u, c !== null && (Le === null ? Le = c : Le.push.apply(
                  Le,
                  c
                ));
              }
              u = h;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ca(t, 0), Al(t, e, 0, !0);
          break;
        }
        t: {
          switch (i = t, c = u, c) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              Al(
                i,
                e,
                Ge,
                !Ml
              );
              break t;
            case 2:
              Le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (u = vc + 300 - _e(), 10 < u)) {
            if (Al(
              i,
              e,
              Ge,
              !Ml
            ), Ai(i, 0, !0) !== 0) break t;
            Hn = e, i.timeoutHandle = Qf(
              sm.bind(
                null,
                i,
                n,
                Le,
                xc,
                Ef,
                e,
                Ge,
                di,
                la,
                Ml,
                c,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          sm(
            i,
            n,
            Le,
            xc,
            Ef,
            e,
            Ge,
            di,
            la,
            Ml,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bn(t);
  }
  function sm(t, e, n, i, u, c, h, b, z, q, I, nt, U, K) {
    t.timeoutHandle = -1;
    var ht = e.subtreeFlags, yt = (c & 335544064) === c;
    if (nt = null, (yt || ht & 8192 || (ht & 16785408) === 16785408) && (nt = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Nn
    }, Xe = null, nm(
      e,
      c,
      nt
    ), yt && (ht = nt, yt = t.containerInfo, yt = (yt.nodeType === 9 ? yt : yt.ownerDocument).__reactViewTransition, yt != null && (ht.count++, ht.waitingForViewTransition = !0, ht = Cu.bind(ht), yt.finished.then(ht, ht))), ht = (c & 62914560) === c ? vc - _e() : (c & 4194048) === c ? um - _e() : 0, ht = b2(
      nt,
      ht
    ), ht !== null)) {
      Hn = c, t.cancelPendingCommit = ht(
        pm.bind(
          null,
          t,
          e,
          c,
          n,
          i,
          u,
          h,
          b,
          z,
          q,
          I,
          nt,
          null,
          U,
          K
        )
      ), Al(t, c, h, !q);
      return;
    }
    pm(
      t,
      e,
      c,
      n,
      i,
      u,
      h,
      b,
      z,
      q,
      I,
      nt
    );
  }
  function yb(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var u = n[i], c = u.getSnapshot;
          u = u.value;
          try {
            if (!je(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Al(t, e, n, i) {
    e = Va(t, e), e &= ~yc, e &= ~di, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var c = 31 - Te(u), h = 1 << c;
      i[c] = -1, u &= ~h;
    }
    n !== 0 && co(t, n, e);
  }
  function Sc() {
    return (Vt & 6) === 0 ? (Su(0), !1) : !0;
  }
  function Nf() {
    if (zt !== null) {
      if (jt === 0)
        var t = zt.return;
      else
        t = zt, Jn = ti = null, Ds(t), Ii = null, iu = 0, t = zt;
      for (; t !== null; )
        Rg(t.alternate, t), t = t.return;
      zt = null;
    }
  }
  function ca(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, jb(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Hn = 0, Nf(), Gt = t, zt = n = $n(t.current, null), Dt = e, jt = 0, Ze = null, Ml = !1, na = Ql(t, e), Sf = !1, la = Ge = yc = di = Cl = Wt = 0, Le = xu = null, Ef = !1, el = Va(t, e), zo(), n;
  }
  function fm(t, e) {
    Nt = null, ct.H = tc, e === $i || e === jo ? (e = p0(), jt = 3) : e === xs ? (e = p0(), jt = 4) : jt = e === $s ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ze = e, zt === null && (Wt = 1, ec(
      t,
      Pe(e, t.current)
    ));
  }
  function dm() {
    var t = me.current;
    return t === null ? !0 : (Dt & 4194048) === Dt ? Ee === null : (Dt & 62914560) === Dt || (Dt & 536870912) !== 0 ? t === Ee : !1;
  }
  function hm() {
    var t = ct.H;
    return ct.H = tc, t === null ? tc : t;
  }
  function gm() {
    var t = ct.A;
    return ct.A = gb, t;
  }
  function Ec() {
    Wt = 4, Ml || (Dt & 4194048) !== Dt && me.current !== null || (na = !0), (Cl & 134217727) === 0 && (di & 134217727) === 0 || Gt === null || Al(
      Gt,
      Dt,
      Ge,
      !1
    );
  }
  function Tf(t, e, n) {
    var i = Vt;
    Vt |= 2;
    var u = hm(), c = gm();
    (Gt !== t || Dt !== e) && (xc = null, ca(t, e)), e = !1;
    var h = Wt;
    t: do
      try {
        if (jt !== 0 && zt !== null) {
          var b = zt, z = Ze;
          switch (jt) {
            case 8:
              Nf(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              me.current === null && (e = !0);
              var q = jt;
              if (jt = 0, Ze = null, ra(t, b, z, q), n && na) {
                h = 0;
                break t;
              }
              break;
            default:
              q = jt, jt = 0, Ze = null, ra(t, b, z, q);
          }
        }
        vb(), h = Wt;
        break;
      } catch (I) {
        fm(t, I);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Jn = ti = null, Vt = i, ct.H = u, ct.A = c, zt === null && (Gt = null, Dt = 0, zo()), h;
  }
  function vb() {
    for (; zt !== null; ) mm(zt);
  }
  function pb(t, e) {
    var n = Vt;
    Vt |= 2;
    var i = hm(), u = gm();
    Gt !== t || Dt !== e ? (xc = null, pc = _e() + 500, ca(t, e)) : na = Ql(
      t,
      e
    );
    t: do
      try {
        if (jt !== 0 && zt !== null) {
          e = zt;
          var c = Ze;
          e: switch (jt) {
            case 1:
              jt = 0, Ze = null, ra(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (y0(c)) {
                jt = 0, Ze = null, ym(e);
                break;
              }
              e = function() {
                jt !== 2 && jt !== 9 || Gt !== t || (jt = 7), Bn(t);
              }, c.then(e, e);
              break t;
            case 3:
              jt = 7;
              break t;
            case 4:
              jt = 5;
              break t;
            case 7:
              y0(c) ? (jt = 0, Ze = null, ym(e)) : (jt = 0, Ze = null, ra(t, e, c, 7));
              break;
            case 5:
              var h = null;
              switch (zt.tag) {
                case 26:
                  h = zt.memoizedState;
                case 5:
                case 27:
                  var b = zt;
                  if (h ? oy(h) : b.stateNode.complete) {
                    jt = 0, Ze = null;
                    var z = b.sibling;
                    if (z !== null) zt = z;
                    else {
                      var q = b.return;
                      q !== null ? (zt = q, wc(q)) : zt = null;
                    }
                    break e;
                  }
              }
              jt = 0, Ze = null, ra(t, e, c, 5);
              break;
            case 6:
              jt = 0, Ze = null, ra(t, e, c, 6);
              break;
            case 8:
              Nf(), Wt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        xb();
        break;
      } catch (I) {
        fm(t, I);
      }
    while (!0);
    return Jn = ti = null, ct.H = i, ct.A = u, Vt = n, zt !== null ? 0 : (Gt = null, Dt = 0, zo(), Wt);
  }
  function xb() {
    for (; zt !== null && !Tr(); )
      mm(zt);
  }
  function mm(t) {
    var e = Og(t.alternate, t, el);
    t.memoizedProps = t.pendingProps, e === null ? wc(t) : zt = e;
  }
  function ym(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = _g(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Dt
        );
        break;
      case 11:
        e = _g(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Dt
        );
        break;
      case 5:
        Ds(e);
        var i = e;
        i === se && (Ct ? (Bo(i), i.tag === 5 && i.stateNode != null && (Qt = i.stateNode)) : (Bo(i), Ct = !0));
      default:
        Rg(n, e), e = zt = a0(e, el), e = Og(n, e, el);
    }
    t.memoizedProps = t.pendingProps, e === null ? wc(t) : zt = e;
  }
  function ra(t, e, n, i) {
    Jn = ti = null, Ds(e), Ii = null, iu = 0;
    var u = e.return;
    try {
      if (ub(
        t,
        u,
        e,
        n,
        Dt
      )) {
        Wt = 1, ec(
          t,
          Pe(n, t.current)
        ), zt = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw zt = u, c;
      Wt = 1, ec(
        t,
        Pe(n, t.current)
      ), zt = null;
      return;
    }
    e.flags & 32768 ? (Ct || i === 1 ? t = !0 : na || (Dt & 536870912) !== 0 ? t = !1 : (Ml = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = me.current, i !== null && i.tag === 13 && (i.flags |= 16384))), vm(e, t)) : wc(e);
  }
  function wc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        vm(
          e,
          Ml
        );
        return;
      }
      t = e.return;
      var n = sb(
        e.alternate,
        e,
        el
      );
      if (n !== null) {
        zt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        zt = e;
        return;
      }
      zt = e = t;
    } while (e !== null);
    Wt === 0 && (Wt = 5);
  }
  function vm(t, e) {
    do {
      var n = fb(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, zt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        zt = t;
        return;
      }
      zt = t = n;
    } while (t !== null);
    Wt = 6, zt = null;
  }
  function pm(t, e, n, i, u, c, h, b, z, q, I, nt) {
    t.cancelPendingCommit = null;
    do
      _c();
    while (Jt !== 0);
    if ((Vt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Gt && (zt = Gt = null, Dt = 0), hi = e, hn = t, Hn = n, _f = u, om = i, bb(
        t,
        e,
        n,
        h,
        b,
        z,
        nt
      );
    }
  }
  function bb(t, e, n, i, u, c, h) {
    var b = e.lanes | e.childLanes;
    if (wf = b, b |= us, Br(
      t,
      n,
      b,
      i,
      u,
      c
    ), aa = null, (n & 335544064) === n ? (ua = Ix(t), i = 10262) : (ua = null, i = 10256), (e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Tb(Ti, function() {
      return Af(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), rc = !1, i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
      i = ct.T, ct.T = null, u = rt.p, rt.p = 2, c = Vt, Vt |= 4;
      try {
        db(t, e, n);
      } finally {
        Vt = c, rt.p = u, ct.T = i;
      }
    }
    Jt = 1, rc ? ia = Kb(
      h,
      t.containerInfo,
      ua,
      Mf,
      Cf,
      Eb,
      zf,
      Af,
      Sb
    ) : (Mf(), Cf(), zf());
  }
  function Sb(t) {
    if (Jt !== 0) {
      var e = hn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Eb() {
    Jt === 3 && (Jt = 0, tm(hi, hn), Jt = 4);
  }
  function Mf() {
    if (Jt === 1) {
      Jt = 0;
      var t = hn, e = hi, n = Hn, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = ct.T, ct.T = null;
        var u = rt.p;
        rt.p = 2;
        var c = Vt;
        Vt |= 4;
        try {
          yu = dc = !1, Wg(e, t, n), n = Xf;
          var h = Jh(t.containerInfo), b = n.focusedElem, z = n.selectionRange;
          if (h !== b && b && b.ownerDocument && Ih(
            b.ownerDocument.documentElement,
            b
          )) {
            if (z !== null && es(b)) {
              var q = z.start, I = z.end;
              if (I === void 0 && (I = q), "selectionStart" in b)
                b.selectionStart = q, b.selectionEnd = Math.min(
                  I,
                  b.value.length
                );
              else {
                var nt = b.ownerDocument || document, U = nt && nt.defaultView || window;
                if (U.getSelection) {
                  var K = U.getSelection(), ht = b.textContent.length, yt = Math.min(z.start, ht), Tt = z.end === void 0 ? yt : Math.min(z.end, ht);
                  !K.extend && yt > Tt && (h = Tt, Tt = yt, yt = h);
                  var j = $h(
                    b,
                    yt
                  ), D = $h(
                    b,
                    Tt
                  );
                  if (j && D && (K.rangeCount !== 1 || K.anchorNode !== j.node || K.anchorOffset !== j.offset || K.focusNode !== D.node || K.focusOffset !== D.offset)) {
                    var Q = nt.createRange();
                    Q.setStart(j.node, j.offset), K.removeAllRanges(), yt > Tt ? (K.addRange(Q), K.extend(D.node, D.offset)) : (Q.setEnd(D.node, D.offset), K.addRange(Q));
                  }
                }
              }
            }
            for (nt = [], K = b; K = K.parentNode; )
              K.nodeType === 1 && nt.push({
                element: K,
                left: K.scrollLeft,
                top: K.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < nt.length; b++) {
              var et = nt[b];
              et.element.scrollLeft = et.left, et.element.scrollTop = et.top;
            }
          }
          va = !!qf, Xf = qf = null;
        } finally {
          Vt = c, rt.p = u, ct.T = i;
        }
      }
      t.current = e, Jt = 2;
    }
  }
  function Cf() {
    if (Jt === 2) {
      Jt = 0;
      var t = hn, e = hi, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = ct.T, ct.T = null;
        var i = rt.p;
        rt.p = 2;
        var u = Vt;
        Vt |= 4;
        try {
          Kg(t, e.alternate, e);
        } finally {
          Vt = u, rt.p = i, ct.T = n;
        }
      }
      Jt = 3;
    }
  }
  function zf() {
    if (Jt === 4 || Jt === 3) {
      Jt = 0;
      var t = ia;
      ia = null, Mr();
      var e = hn, n = hi, i = Hn, u = om, c = (i & 335544064) === i ? 10262 : 10256;
      if ((n.subtreeFlags & c) !== 0 || (n.flags & c) !== 0 ? Jt = 5 : (Jt = 0, hi = hn = null, xm(e, e.pendingLanes)), c = e.pendingLanes, c === 0 && (zl = null), qa(i), n = n.stateNode, Ne && typeof Ne.onCommitFiberRoot == "function")
        try {
          Ne.onCommitFiberRoot(
            Gl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        n = ct.T, c = rt.p, rt.p = 2, ct.T = null;
        try {
          for (var h = e.onRecoverableError, b = 0; b < u.length; b++) {
            var z = u[b];
            h(z.value, {
              componentStack: z.stack
            });
          }
        } finally {
          ct.T = n, rt.p = c;
        }
      }
      if (u = aa, h = ua, ua = null, u !== null && (aa = null, h === null && (h = []), t !== null))
        for (z = 0; z < u.length; z++)
          n = (0, u[z])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (Hn & 3) !== 0 && _c(), Bn(e), c = e.pendingLanes, (i & 261930) !== 0 && (c & 42) !== 0 ? e === bc ? bu++ : (bu = 0, bc = e) : (bu = 0, bc = null), Su(0);
    }
  }
  function xm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, eu(e)));
  }
  function _c() {
    return ia !== null && (ia.skipTransition(), ia = null), Mf(), Cf(), zf(), Af();
  }
  function Af() {
    if (Jt !== 5) return !1;
    var t = hn, e = wf;
    wf = 0;
    var n = qa(Hn), i = ct.T, u = rt.p;
    try {
      rt.p = 32 > n ? 32 : n, ct.T = null, n = _f, _f = null;
      var c = hn, h = Hn;
      if (Jt = 0, hi = hn = null, Hn = 0, (Vt & 6) !== 0) throw Error(r(331));
      var b = Vt;
      if (Vt |= 4, im(c.current), em(
        c,
        c.current,
        h,
        n
      ), Vt = b, Su(0, !1), Ne && typeof Ne.onPostCommitFiberRoot == "function")
        try {
          Ne.onPostCommitFiberRoot(Gl, c);
        } catch {
        }
      return !0;
    } finally {
      rt.p = u, ct.T = i, xm(t, e);
    }
  }
  function bm(t, e, n) {
    e = Pe(n, e), e = Ks(t.stateNode, e, 2), t = Sl(t, e, 2), t !== null && (Kl(t, 2), Bn(t));
  }
  function qt(t, e, n) {
    if (t.tag === 3)
      bm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          bm(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (zl === null || !zl.has(i))) {
            t = Pe(n, t), n = yg(2), i = Sl(e, n, 2), i !== null && (vg(
              n,
              i,
              e,
              t
            ), Kl(i, 2), Bn(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function Of(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new mb();
      var u = /* @__PURE__ */ new Set();
      i.set(e, u);
    } else
      u = i.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(e, u));
    u.has(n) || (Sf = !0, u.add(n), t = wb.bind(null, t, e, n), e.then(t, t));
  }
  function wb(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Gt === t && (Dt & n) === n && ((Wt === 4 || Wt === 3 && (Dt & 62914560) === Dt && 300 > _e() - vc) && (Vt & 2) === 0 ? ca(t, 0) : yc |= n, la === Dt && (la = 0)), Bn(t);
  }
  function Sm(t, e) {
    e === 0 && (e = Ya()), t = Fl(t, e), t !== null && (Kl(t, e), Bn(t));
  }
  function _b(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Sm(t, n);
  }
  function Nb(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), Sm(t, n);
  }
  function Tb(t, e) {
    return La(t, e);
  }
  var sa = null, fa = null, Df = !1, Nc = !1, Rf = !1, Ol = 0;
  function Bn(t) {
    t !== fa && t.next === null && (fa === null ? sa = fa = t : fa = fa.next = t), Nc = !0, Df || (Df = !0, Cb());
  }
  function Su(t, e) {
    if (!Rf && Nc) {
      Rf = !0;
      do
        for (var n = !1, i = sa; i !== null; ) {
          if (t !== 0) {
            var u = i.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var h = i.suspendedLanes, b = i.pingedLanes;
              c = (1 << 31 - Te(42 | t) + 1) - 1, c &= u & ~(h & ~b), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, Nm(i, c));
          } else
            c = Dt, c = Ai(
              i,
              i === Gt ? c : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (c & 3) === 0 || Ql(i, c) || (n = !0, Nm(i, c));
          i = i.next;
        }
      while (n);
      Rf = !1;
    }
  }
  function Mb() {
    Em();
  }
  function Em() {
    Nc = Df = !1;
    var t = 0;
    Ol !== 0 && Yb() && (t = Ol);
    for (var e = _e(), n = null, i = sa; i !== null; ) {
      var u = i.next, c = wm(i, e);
      c === 0 ? (i.next = null, n === null ? sa = u : n.next = u, u === null && (fa = n)) : (n = i, (t !== 0 || (c & 3) !== 0) && (Nc = !0)), i = u;
    }
    Jt !== 0 && Jt !== 5 || Su(t), Ol !== 0 && (Ol = 0);
  }
  function wm(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var h = 31 - Te(c), b = 1 << h, z = u[h];
      z === -1 ? ((b & n) === 0 || (b & i) !== 0) && (u[h] = oo(b, e)) : z <= e && (t.expiredLanes |= b), c &= ~b;
    }
    if (e = Gt, n = Dt, n = Ai(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, n === 0 || t === e && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Ua(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ql(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Ua(i), qa(n)) {
        case 2:
        case 8:
          n = ao;
          break;
        case 32:
          n = Ti;
          break;
        case 268435456:
          n = uo;
          break;
        default:
          n = Ti;
      }
      return i = _m.bind(null, t), n = La(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Ua(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function _m(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (_c() && t.callbackNode !== n)
      return null;
    var i = Dt;
    return i = Ai(
      t,
      t === Gt ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (rm(t, i, e), wm(t, _e()), t.callbackNode != null && t.callbackNode === n ? _m.bind(null, t) : null);
  }
  function Nm(t, e) {
    if (_c()) return null;
    rm(t, e, !0);
  }
  function Cb() {
    qb(function() {
      (Vt & 6) !== 0 ? La(
        io,
        Mb
      ) : Em();
    });
  }
  function Hf() {
    if (Ol === 0) {
      var t = li;
      t === 0 && (t = Mi, Mi <<= 1, (Mi & 261888) === 0 && (Mi = 256)), Ol = t;
    }
    return Ol;
  }
  function Tm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : So(t);
  }
  function zb(t, e, n, i, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var c = Tm(
        (u[Se] || null).action
      ), h = i.submitter;
      h && (e = (e = h[Se] || null) ? Tm(e.formAction) : h.getAttribute("formAction"), e !== null && (c = e, h = null));
      var b = new No(
        "action",
        "action",
        null,
        i,
        u
      );
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (Ol !== 0) {
                  var z = new FormData(u, h);
                  qs(
                    n,
                    {
                      pending: !0,
                      data: z,
                      method: u.method,
                      action: c
                    },
                    null,
                    z
                  );
                }
              } else
                typeof c == "function" && (b.preventDefault(), z = new FormData(u, h), qs(
                  n,
                  {
                    pending: !0,
                    data: z,
                    method: u.method,
                    action: c
                  },
                  c,
                  z
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Bf = 0; Bf < as.length; Bf++) {
    var Lf = as[Bf], Ab = Lf.toLowerCase(), Ob = Lf[0].toUpperCase() + Lf.slice(1);
    rn(
      Ab,
      "on" + Ob
    );
  }
  rn(Wh, "onAnimationEnd"), rn(Ph, "onAnimationIteration"), rn(t0, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(jx, "onTransitionRun"), rn(qx, "onTransitionStart"), rn(Xx, "onTransitionCancel"), rn(e0, "onTransitionEnd"), fl("onMouseEnter", ["mouseout", "mouseover"]), fl("onMouseLeave", ["mouseout", "mouseover"]), fl("onPointerEnter", ["pointerout", "pointerover"]), fl("onPointerLeave", ["pointerout", "pointerover"]), cn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), cn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), cn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), cn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), cn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), cn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Eu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Db = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu)
  );
  function Mm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], u = i.event;
      i = i.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var h = i.length - 1; 0 <= h; h--) {
            var b = i[h], z = b.instance, q = b.currentTarget;
            if (b = b.listener, z !== c && u.isPropagationStopped())
              break t;
            c = b, u.currentTarget = q;
            try {
              c(u);
            } catch (I) {
              Co(I);
            }
            u.currentTarget = null, c = z;
          }
        else
          for (h = 0; h < i.length; h++) {
            if (b = i[h], z = b.instance, q = b.currentTarget, b = b.listener, z !== c && u.isPropagationStopped())
              break t;
            c = b, u.currentTarget = q;
            try {
              c(u);
            } catch (I) {
              Co(I);
            }
            u.currentTarget = null, c = z;
          }
      }
    }
  }
  function At(t, e) {
    var n = e[go];
    n === void 0 && (n = e[go] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (Cm(e, t, 2, !1), n.add(i));
  }
  function Uf(t, e, n) {
    var i = 0;
    e && (i |= 4), Cm(
      n,
      t,
      i,
      e
    );
  }
  var Tc = "_reactListening" + Math.random().toString(36).slice(2);
  function Vf(t) {
    if (!t[Tc]) {
      t[Tc] = !0, vo.forEach(function(n) {
        n !== "selectionchange" && (Db.has(n) || Uf(n, !1, t), Uf(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Tc] || (e[Tc] = !0, Uf("selectionchange", !1, e));
    }
  }
  function Cm(t, e, n, i) {
    switch (vy(e)) {
      case 2:
        var u = _2;
        break;
      case 8:
        u = N2;
        break;
      default:
        u = id;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Qr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), i ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Yf(t, e, n, i, u) {
    var c = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var h = i.tag;
        if (h === 3 || h === 4) {
          var b = i.stateNode.containerInfo;
          if (b === u) break;
          if (h === 4)
            for (h = i.return; h !== null; ) {
              var z = h.tag;
              if ((z === 3 || z === 4) && h.stateNode.containerInfo === u)
                return;
              h = h.return;
            }
          for (; b !== null; ) {
            if (h = qn(b), h === null) return;
            if (z = h.tag, z === 5 || z === 6 || z === 26 || z === 27) {
              i = c = h;
              continue t;
            }
            b = b.parentNode;
          }
        }
        i = i.return;
      }
    Ch(function() {
      var q = c, I = Zr(n), nt = [];
      t: {
        var U = n0.get(t);
        if (U !== void 0) {
          var K = No, ht = t;
          switch (t) {
            case "keypress":
              if (wo(n) === 0) break t;
            case "keydown":
            case "keyup":
              K = yx;
              break;
            case "focusin":
              ht = "focus", K = Jr;
              break;
            case "focusout":
              ht = "blur", K = Jr;
              break;
            case "beforeblur":
            case "afterblur":
              K = Jr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              K = Oh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = ix;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = Sx;
              break;
            case Wh:
            case Ph:
            case t0:
              K = ox;
              break;
            case e0:
              K = wx;
              break;
            case "scroll":
            case "scrollend":
              K = nx;
              break;
            case "wheel":
              K = Nx;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = rx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = Rh;
              break;
            case "submit":
              K = xx;
              break;
            case "toggle":
            case "beforetoggle":
              K = Mx;
          }
          var yt = (e & 4) !== 0, Tt = !yt && (t === "scroll" || t === "scrollend"), j = yt ? U !== null ? U + "Capture" : null : U;
          yt = [];
          for (var D = q, Q; D !== null; ) {
            var et = D;
            if (Q = et.stateNode, et = et.tag, et !== 5 && et !== 26 && et !== 27 || Q === null || j === null || (et = Ga(D, j), et != null && yt.push(
              wu(D, et, Q)
            )), Tt) break;
            D = D.return;
          }
          0 < yt.length && (U = new K(
            U,
            ht,
            null,
            n,
            I
          ), nt.push({ event: U, listeners: yt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (K = t === "mouseover" || t === "pointerover", U = t === "mouseout" || t === "pointerout", K && n !== Xr && (ht = n.relatedTarget || n.fromElement) && (qn(ht) || ht[rl]))
            break t;
          (U || K) && (ht = I.window === I ? I : (K = I.ownerDocument) ? K.defaultView || K.parentWindow : window, U ? (K = n.relatedTarget || n.toElement, U = q, K = K ? qn(K) : null, K !== null && (Tt = f(K), yt = K.tag, K !== Tt || yt !== 5 && yt !== 27 && yt !== 6) && (K = null)) : (U = null, K = q), U !== K && (yt = Oh, et = "onMouseLeave", j = "onMouseEnter", D = "mouse", (t === "pointerout" || t === "pointerover") && (yt = Rh, et = "onPointerLeave", j = "onPointerEnter", D = "pointer"), Tt = U == null ? ht : Il(U), Q = K == null ? ht : Il(K), ht = new yt(
            et,
            D + "leave",
            U,
            n,
            I
          ), ht.target = Tt, ht.relatedTarget = Q, et = null, qn(I) === q && (yt = new yt(
            j,
            D + "enter",
            K,
            n,
            I
          ), yt.target = Q, yt.relatedTarget = Tt, et = yt), Tt = et, yt = U && K ? H(
            U,
            K,
            Rb
          ) : null, U !== null && zm(
            nt,
            ht,
            U,
            yt,
            !1
          ), K !== null && Tt !== null && zm(
            nt,
            Tt,
            K,
            yt,
            !0
          )));
        }
        t: {
          if (U = q ? Il(q) : window, K = U.nodeName && U.nodeName.toLowerCase(), K === "select" || K === "input" && U.type === "file")
            var mt = qh;
          else if (Yh(U))
            if (Xh)
              mt = Ux;
            else {
              mt = Bx;
              var Rt = Hx;
            }
          else
            K = U.nodeName, !K || K.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? q && qr(q.elementType) && (mt = qh) : mt = Lx;
          if (mt && (mt = mt(t, q))) {
            jh(
              nt,
              mt,
              n,
              I
            );
            break t;
          }
          Rt && Rt(t, U, q);
        }
        switch (Rt = q ? Il(q) : window, t) {
          case "focusin":
            (Yh(Rt) || Rt.contentEditable === "true") && (Yi = Rt, ns = q, Wa = null);
            break;
          case "focusout":
            Wa = ns = Yi = null;
            break;
          case "mousedown":
            ls = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ls = !1, kh(nt, n, I);
            break;
          case "selectionchange":
            if (Yx) break;
          case "keydown":
          case "keyup":
            kh(nt, n, I);
        }
        var bt;
        if (Fr)
          t: {
            switch (t) {
              case "compositionstart":
                var St = "onCompositionStart";
                break t;
              case "compositionend":
                St = "onCompositionEnd";
                break t;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break t;
            }
            St = void 0;
          }
        else
          Vi ? Uh(t, n) && (St = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (St = "onCompositionStart");
        St && (Hh && n.locale !== "ko" && (Vi || St !== "onCompositionStart" ? St === "onCompositionEnd" && Vi && (bt = zh()) : (dl = I, Kr = "value" in dl ? dl.value : dl.textContent, Vi = !0)), Rt = Mc(q, St), 0 < Rt.length && (St = new Dh(
          St,
          t,
          null,
          n,
          I
        ), nt.push({ event: St, listeners: Rt }), bt ? St.data = bt : (bt = Vh(n), bt !== null && (St.data = bt)))), (bt = zx ? Ax(t, n) : Ox(t, n)) && (St = Mc(q, "onBeforeInput"), 0 < St.length && (Rt = new Dh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          I
        ), nt.push({
          event: Rt,
          listeners: St
        }), Rt.data = bt)), zb(
          nt,
          t,
          q,
          n,
          I
        );
      }
      Mm(nt, e);
    });
  }
  function wu(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Mc(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var u = t, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Ga(t, n), u != null && i.unshift(
        wu(t, u, c)
      ), u = Ga(t, e), u != null && i.push(
        wu(t, u, c)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function Rb(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function zm(t, e, n, i, u) {
    for (var c = e._reactName, h = []; n !== null && n !== i; ) {
      var b = n, z = b.alternate, q = b.stateNode;
      if (b = b.tag, z !== null && z === i) break;
      b !== 5 && b !== 26 && b !== 27 || q === null || (z = q, u ? (q = Ga(n, c), q != null && h.unshift(
        wu(n, q, z)
      )) : u || (q = Ga(n, c), q != null && h.push(
        wu(n, q, z)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Hb = /\r\n?/g, Bb = /\u0000|\uFFFD/g;
  function Am(t) {
    return (typeof t == "string" ? t : "" + t).replace(Hb, `
`).replace(Bb, "");
  }
  function Om(t, e) {
    return e = Am(e), Am(t) === e;
  }
  function Xt(t, e, n, i, u, c) {
    switch (n) {
      case "children":
        if (typeof i == "string")
          e === "body" || e === "textarea" && i === "" || Bi(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          e !== "body" && Bi(t, "" + i);
        else return;
        break;
      case "className":
        bo(t, "class", i);
        break;
      case "tabIndex":
        bo(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        bo(t, n, i);
        break;
      case "style":
        Th(t, i, c);
        return;
      case "data":
        if (e !== "object") {
          bo(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = So(i), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (n === "formAction" ? (e !== "input" && Xt(t, e, "name", u.name, u, null), Xt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Xt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Xt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Xt(t, e, "encType", u.encType, u, null), Xt(t, e, "method", u.method, u, null), Xt(t, e, "target", u.target, u, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = So(i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = Nn);
        return;
      case "onScroll":
        i != null && At("scroll", t);
        return;
      case "onScrollEnd":
        i != null && At("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (u.children != null) throw Error(r(60));
            c?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = So(i), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
        break;
      case "popover":
        At("beforetoggle", t), At("toggle", t), xo(t, "popover", i);
        break;
      case "xlinkActuate":
        Zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Zn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Zn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Zn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        xo(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = tx.get(n) || n, xo(t, n, i);
        else return;
    }
    Ut = !0;
  }
  function jf(t, e, n, i, u, c) {
    switch (n) {
      case "style":
        Th(t, i, c);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (u.children != null) throw Error(r(60));
            c?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof i == "string") Bi(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          Bi(t, "" + i);
        else return;
        break;
      case "onScroll":
        i != null && At("scroll", t);
        return;
      case "onScrollEnd":
        i != null && At("scrollend", t);
        return;
      case "onClick":
        i != null && (t.onclick = Nn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!po.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), c = n.slice(2, u ? n.length - 7 : void 0), e = t[Se] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(c, e, u), typeof i == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(c, i, u);
              break t;
            }
            Ut = !0, n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : xo(t, n, i);
          }
        return;
    }
    Ut = !0;
  }
  function pe(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        At("error", t), At("load", t);
        var i = !1, u = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var h = n[c];
            if (h != null)
              switch (c) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Xt(t, e, c, h, n, null);
              }
          }
        u && Xt(t, e, "srcSet", n.srcSet, n, null), i && Xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        At("invalid", t);
        var b = c = h = u = null, z = null, q = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var I = n[i];
            if (I != null)
              switch (i) {
                case "name":
                  u = I;
                  break;
                case "type":
                  h = I;
                  break;
                case "checked":
                  z = I;
                  break;
                case "defaultChecked":
                  q = I;
                  break;
                case "value":
                  c = I;
                  break;
                case "defaultValue":
                  b = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Xt(t, e, i, I, n, null);
              }
          }
        Eh(
          t,
          c,
          b,
          z,
          q,
          h,
          u,
          !1
        );
        return;
      case "select":
        At("invalid", t), i = h = c = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (b = n[u], b != null))
            switch (u) {
              case "value":
                c = b;
                break;
              case "defaultValue":
                h = b;
                break;
              case "multiple":
                i = b;
              default:
                Xt(t, e, u, b, n, null);
            }
        e = c, n = h, t.multiple = !!i, e != null ? Hi(t, !!i, e, !1) : n != null && Hi(t, !!i, n, !0);
        return;
      case "textarea":
        At("invalid", t), c = u = i = null;
        for (h in n)
          if (n.hasOwnProperty(h) && (b = n[h], b != null))
            switch (h) {
              case "value":
                i = b;
                break;
              case "defaultValue":
                u = b;
                break;
              case "children":
                c = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(91));
                break;
              default:
                Xt(t, e, h, b, n, null);
            }
        _h(t, i, u, c);
        return;
      case "option":
        for (z in n)
          if (n.hasOwnProperty(z) && (i = n[z], i != null))
            switch (z) {
              case "selected":
                t.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Xt(t, e, z, i, n, null);
            }
        return;
      case "dialog":
        At("beforetoggle", t), At("toggle", t), At("cancel", t), At("close", t);
        break;
      case "iframe":
      case "object":
        At("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Eu.length; i++)
          At(Eu[i], t);
        break;
      case "image":
        At("error", t), At("load", t);
        break;
      case "details":
        At("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        At("error", t), At("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in n)
          if (n.hasOwnProperty(q) && (i = n[q], i != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Xt(t, e, q, i, n, null);
            }
        return;
      default:
        if (qr(e)) {
          for (I in n)
            n.hasOwnProperty(I) && (i = n[I], i !== void 0 && jf(
              t,
              e,
              I,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (i = n[b], i != null && Xt(t, e, b, i, n, null));
  }
  var Lb = {};
  function Ub(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, c = null, h = null, b = null, z = null, q = null, I = null;
        for (K in n) {
          var nt = n[K];
          if (n.hasOwnProperty(K) && nt != null)
            switch (K) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                z = nt;
              default:
                i.hasOwnProperty(K) || Xt(t, e, K, null, i, nt);
            }
        }
        for (var U in i) {
          var K = i[U];
          if (nt = n[U], i.hasOwnProperty(U) && (K != null || nt != null))
            switch (U) {
              case "type":
                K !== nt && (Ut = !0), c = K;
                break;
              case "name":
                K !== nt && (Ut = !0), u = K;
                break;
              case "checked":
                K !== nt && (Ut = !0), q = K;
                break;
              case "defaultChecked":
                K !== nt && (Ut = !0), I = K;
                break;
              case "value":
                K !== nt && (Ut = !0), h = K;
                break;
              case "defaultValue":
                K !== nt && (Ut = !0), b = K;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (K != null)
                  throw Error(r(137, e));
                break;
              default:
                K !== nt && Xt(
                  t,
                  e,
                  U,
                  K,
                  i,
                  nt
                );
            }
        }
        Yr(
          t,
          h,
          b,
          z,
          q,
          I,
          c,
          u
        );
        return;
      case "select":
        K = h = b = U = null;
        for (c in n)
          if (z = n[c], n.hasOwnProperty(c) && z != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                K = z;
              default:
                i.hasOwnProperty(c) || Xt(
                  t,
                  e,
                  c,
                  null,
                  i,
                  z
                );
            }
        for (u in i)
          if (c = i[u], z = n[u], i.hasOwnProperty(u) && (c != null || z != null))
            switch (u) {
              case "value":
                c !== z && (Ut = !0), U = c;
                break;
              case "defaultValue":
                c !== z && (Ut = !0), b = c;
                break;
              case "multiple":
                c !== z && (Ut = !0), h = c;
              default:
                c !== z && Xt(
                  t,
                  e,
                  u,
                  c,
                  i,
                  z
                );
            }
        e = b, n = h, i = K, U != null ? Hi(t, !!n, U, !1) : !!i != !!n && (e != null ? Hi(t, !!n, e, !0) : Hi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        K = U = null;
        for (b in n)
          if (u = n[b], n.hasOwnProperty(b) && u != null && !i.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, b, null, i, u);
            }
        for (h in i)
          if (u = i[h], c = n[h], i.hasOwnProperty(h) && (u != null || c != null))
            switch (h) {
              case "value":
                u !== c && (Ut = !0), U = u;
                break;
              case "defaultValue":
                u !== c && (Ut = !0), K = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== c && Xt(t, e, h, u, i, c);
            }
        wh(t, U, K);
        return;
      case "option":
        for (var ht in n)
          if (U = n[ht], n.hasOwnProperty(ht) && U != null && !i.hasOwnProperty(ht))
            switch (ht) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Xt(
                  t,
                  e,
                  ht,
                  null,
                  i,
                  U
                );
            }
        for (z in i)
          if (U = i[z], K = n[z], i.hasOwnProperty(z) && U !== K && (U != null || K != null))
            switch (z) {
              case "selected":
                U !== K && (Ut = !0), t.selected = U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Xt(
                  t,
                  e,
                  z,
                  U,
                  i,
                  K
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var yt in n)
          U = n[yt], n.hasOwnProperty(yt) && U != null && !i.hasOwnProperty(yt) && Xt(t, e, yt, null, i, U);
        for (q in i)
          if (U = i[q], K = n[q], i.hasOwnProperty(q) && U !== K && (U != null || K != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(r(137, e));
                break;
              default:
                Xt(
                  t,
                  e,
                  q,
                  U,
                  i,
                  K
                );
            }
        return;
      default:
        if (qr(e)) {
          for (var Tt in n)
            U = n[Tt], n.hasOwnProperty(Tt) && U !== void 0 && !i.hasOwnProperty(Tt) && jf(
              t,
              e,
              Tt,
              void 0,
              i,
              U
            );
          for (I in i)
            U = i[I], K = n[I], !i.hasOwnProperty(I) || U === K || U === void 0 && K === void 0 || jf(
              t,
              e,
              I,
              U,
              i,
              K
            );
          return;
        }
    }
    for (var j in n)
      U = n[j], n.hasOwnProperty(j) && U != null && !i.hasOwnProperty(j) && Xt(t, e, j, null, i, U);
    for (nt in i)
      U = i[nt], K = n[nt], !i.hasOwnProperty(nt) || U === K || U == null && K == null || Xt(t, e, nt, U, i, K);
  }
  function Dm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Vb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var u = n[i], c = u.transferSize, h = u.initiatorType, b = u.duration;
        if (c && b && Dm(h)) {
          for (h = 0, b = u.responseEnd, i += 1; i < n.length; i++) {
            var z = n[i], q = z.startTime;
            if (q > b) break;
            var I = z.transferSize, nt = z.initiatorType;
            I && Dm(nt) && (z = z.responseEnd, h += I * (z < b ? 1 : (b - q) / (z - q)));
          }
          if (--i, e += 8 * (c + h) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var qf = null, Xf = null;
  function _u(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Rm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Bm(t, e, n, i) {
    return n = _u(
      n
    ).createElement(t), n[oe] = i, n[Se] = e, pe(n, t, e), ee(n), n;
  }
  function Zf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Gf = null;
  function Yb() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Gf ? !1 : (Gf = t, !0) : (Gf = null, !1);
  }
  var Qf = typeof setTimeout == "function" ? setTimeout : void 0, jb = typeof clearTimeout == "function" ? clearTimeout : void 0, Lm = typeof Promise == "function" ? Promise : void 0, Um = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Qf, qb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lm < "u" ? function(t) {
    return Lm.resolve(null).then(t).catch(Xb);
  } : Qf;
  function Xb(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Dl(t) {
    return t === "head";
  }
  function Vm(t, e) {
    var n = e, i = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (i === 0) {
            t.removeChild(u), pa(e);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          Pf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, Pf(n);
          for (var c = n.firstChild; c; ) {
            var h = c.nextSibling, b = c.nodeName;
            c[$l] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c), c = h;
          }
        } else
          n === "body" && Pf(t.ownerDocument.body);
      n = u;
    } while (n);
    pa(e);
  }
  function Ym(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = i;
    } while (n);
  }
  function jm(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var i = 1;
      else
        for (var u = i = 0; u < e.length; u++) {
          var c = e[u];
          0 < c.width && 0 < c.height && i++;
        }
      i === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function qm(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function Zb(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Kf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return Zb(e, n, t);
  }
  function Gb(t) {
    return t.documentElement.clientHeight;
  }
  function Qb(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Kb(t, e, n, i, u, c, h, b, z) {
    var q = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var I = q.startViewTransition({
        update: function() {
          var U = q.defaultView, K = U.navigation && U.navigation.transition, ht = q.fonts.status;
          i();
          var yt = [];
          if (ht === "loaded" && (Gb(q), q.fonts.status === "loading" && yt.push(q.fonts.ready)), ht = yt.length, t !== null)
            for (var Tt = t.suspenseyImages, j = 0, D = 0; D < Tt.length; D++) {
              var Q = Tt[D];
              if (!Q.complete) {
                var et = Q.getBoundingClientRect();
                if (0 < et.bottom && 0 < et.right && et.top < U.innerHeight && et.left < U.innerWidth) {
                  if (j += cy(Q), j > Ac) {
                    yt.length = ht;
                    break;
                  }
                  Q = new Promise(
                    Qb.bind(Q)
                  ), yt.push(Q);
                }
              }
            }
          if (0 < yt.length)
            return U = Promise.race([
              Promise.all(yt),
              new Promise(function(mt) {
                return setTimeout(mt, 500);
              })
            ]).then(u, u), (K ? Promise.allSettled([K.finished, U]) : U).then(c, c);
          if (u(), K)
            return K.finished.then(
              c,
              c
            );
          c();
        },
        types: n
      });
      q.__reactViewTransition = I;
      var nt = [];
      return I.ready.then(
        function() {
          for (var U = q.documentElement.getAnimations({
            subtree: !0
          }), K = 0; K < U.length; K++) {
            var ht = U[K], yt = ht.effect, Tt = yt.pseudoElement;
            if (Tt != null && Tt.startsWith("::view-transition")) {
              nt.push(ht), ht = yt.getKeyframes();
              for (var j = Tt = void 0, D = !0, Q = 0; Q < ht.length; Q++) {
                var et = ht[Q], mt = et.width;
                if (Tt === void 0) Tt = mt;
                else if (Tt !== mt) {
                  D = !1;
                  break;
                }
                if (mt = et.height, j === void 0) j = mt;
                else if (j !== mt) {
                  D = !1;
                  break;
                }
                delete et.width, delete et.height, et.transform === "none" && delete et.transform;
              }
              D && Tt !== void 0 && j !== void 0 && (yt.setKeyframes(ht), D = getComputedStyle(
                yt.target,
                yt.pseudoElement
              ), D.width !== Tt || D.height !== j) && (D = ht[0], D.width = Tt, D.height = j, D = ht[ht.length - 1], D.width = Tt, D.height = j, yt.setKeyframes(ht));
            }
          }
          h();
        },
        function(U) {
          q.__reactViewTransition === I && (q.__reactViewTransition = null);
          try {
            if (typeof U == "object" && U !== null)
              switch (U.name) {
                case "InvalidStateError":
                  (U.message === "View transition was skipped because document visibility state is hidden." || U.message === "Skipping view transition because document visibility state has become hidden." || U.message === "Skipping view transition because viewport size changed." || U.message === "Transition was aborted because of invalid state") && (U = null);
              }
            U !== null && z(U);
          } finally {
            i(), u(), h();
          }
        }
      ), I.finished.finally(function() {
        for (var U = 0; U < nt.length; U++)
          nt[U].cancel();
        q.__reactViewTransition === I && (q.__reactViewTransition = null), b();
      }), I;
    } catch {
      return i(), u(), h(), null;
    }
  }
  function gi(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  gi.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : R({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, gi.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), i = [], u = 0; u < n.length; u++) {
      var c = n[u].effect;
      c !== null && c.target === t && c.pseudoElement === e && i.push(n[u]);
    }
    return i;
  }, gi.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Xm(t) {
    return {
      name: t,
      group: new gi("group", t),
      imagePair: new gi("image-pair", t),
      old: new gi("old", t),
      new: new gi("new", t)
    };
  }
  function Ke(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Ke.prototype.addEventListener = function(t, e, n) {
    var i = null, u = null;
    if (!(n != null && typeof n != "boolean" && (i = n.signal || null, i !== null && i.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var c = this._eventListeners;
      if (Gm(c, t, e, n) === -1) {
        var h = this, b = e;
        n != null && typeof n != "boolean" && n.once === !0 && (b = function(z) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, z) : e.handleEvent(z);
        }), i !== null && (u = h.removeEventListener.bind(
          h,
          t,
          e,
          n
        ), i.addEventListener("abort", u, { once: !0 }), u = i.removeEventListener.bind(i, "abort", u)), i = da(n), c.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: b,
          cleanup: u
        }), m(
          this._fragmentFiber.child,
          !1,
          $b,
          t,
          b,
          i
        );
      }
      this._eventListeners = c;
    }
  };
  function $b(t, e, n, i) {
    return N(t).addEventListener(
      e,
      n,
      i
    ), !1;
  }
  Ke.prototype.removeEventListener = function(t, e, n) {
    var i = this._eventListeners;
    if (i !== null && (e = Gm(
      i,
      t,
      e,
      n
    ), e !== -1)) {
      var u = i[e];
      n = u.attachedListener;
      var c = u.cleanup;
      u = da(u.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        Ib,
        t,
        n,
        u
      ), i.splice(e, 1), c !== null && c();
    }
  };
  function Ib(t, e, n, i) {
    return N(t).removeEventListener(
      e,
      n,
      i
    ), !1;
  }
  function da(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Zm(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Gm(t, e, n, i) {
    if (t.length === 0) return -1;
    i = Zm(i);
    for (var u = 0; u < t.length; u++) {
      var c = t[u];
      if (c.type === e && c.listener === n && Zm(c.optionsOrUseCapture) === i)
        return u;
    }
    return -1;
  }
  Ke.prototype.dispatchEvent = function(t) {
    var e = x(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = N(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var i = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          i.addEventListener(
            c.type,
            c.attachedListener,
            da(c.optionsOrUseCapture)
          );
        }
      if (e.appendChild(i), t = i.dispatchEvent(t), n)
        for (u = 0; u < n.length; u++)
          c = n[u], i.removeEventListener(
            c.type,
            c.attachedListener,
            da(c.optionsOrUseCapture)
          );
      return e.removeChild(i), t;
    }
    return e.dispatchEvent(t);
  }, Ke.prototype.focus = function(t) {
    m(
      this._fragmentFiber.child,
      !0,
      Qm,
      t,
      void 0,
      void 0
    );
  };
  function Qm(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), u2(t, e));
  }
  Ke.prototype.focusLast = function(t) {
    var e = [];
    m(
      this._fragmentFiber.child,
      !0,
      $f,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Qm(e[n], t); n--) ;
  };
  function $f(t, e) {
    return e.push(t), !1;
  }
  Ke.prototype.blur = function() {
    var t = x(
      this._fragmentFiber
    );
    t !== null && (t = N(t), t = _u(t).activeElement, t !== null && m(
      this._fragmentFiber.child,
      !1,
      Jb,
      t,
      void 0,
      void 0
    ));
  };
  function Jb(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ke.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), m(
      this._fragmentFiber.child,
      !1,
      kb,
      t,
      void 0,
      void 0
    );
  };
  function kb(t, e) {
    return t.tag === 6 || (t = N(t), e.observe(t)), !1;
  }
  Ke.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), m(
        this._fragmentFiber.child,
        !1,
        Fb,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < gn.length; n++) {
        var i = gn[n];
        i.fragmentInstance === this && i.observer === t ? t.unobserve(i.instance) : gn[e++] = i;
      }
      gn.length = e;
    }
  };
  function Fb(t, e) {
    return t.tag === 6 || (t = N(t), e.unobserve(t)), !1;
  }
  var gn = [], If = !1;
  function Wb(t, e, n) {
    gn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), If || (If = !0, o2(function() {
      If = !1;
      var i = gn;
      gn = [];
      for (var u = 0; u < i.length; u++) {
        var c = i[u];
        c.observer.unobserve(c.instance);
      }
    }));
  }
  Ke.prototype.getClientRects = function() {
    var t = [];
    return m(
      this._fragmentFiber.child,
      !1,
      Pb,
      t,
      void 0,
      void 0
    ), t;
  };
  function Pb(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = N(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ke.prototype.getRootNode = function(t) {
    var e = x(
      this._fragmentFiber
    );
    return e === null ? this : N(e).getRootNode(t);
  }, Ke.prototype.compareDocumentPosition = function(t) {
    var e = x(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    m(
      this._fragmentFiber.child,
      !1,
      $f,
      n,
      void 0,
      void 0
    );
    var i = N(e);
    if (n.length === 0) {
      if (n = i, S(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var u = i = n.compareDocumentPosition(t);
      return n === t ? u = Node.DOCUMENT_POSITION_CONTAINS : i & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = E(e)[1], n === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (t = N(n).compareDocumentPosition(
        t
      ), u = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = N(n[0]), u = N(n[n.length - 1]);
    var c = S(this._fragmentFiber) ? e.parentElement : i;
    if (c == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    i = c.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, c = c.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), b = u.compareDocumentPosition(t), z = h & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = i && c && h & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, e = i && e === t || c && u === t || z || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !i && e === t || !c && u === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || t2(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function t2(t, e, n, i, u) {
    var c = qn(u);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!c)
        t: {
          for (; c !== null; ) {
            if (c.tag === 7 && (c === e || c.alternate === e)) {
              n = !0;
              break t;
            }
            c = c.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (c === null)
        return c = u.ownerDocument, u === c || u === c.documentElement || u === c.body;
      t: {
        for (c = e, e = x(e); c !== null; ) {
          if (!(c.tag !== 5 && c.tag !== 3 && c.tag !== 27 || c !== e && c.alternate !== e)) {
            c = !0;
            break t;
          }
          c = c.return;
        }
        c = !1;
      }
      return c;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!c) && !(e = c === n) && (e = H(
      n,
      c,
      Y
    ), e === null ? e = !1 : (m(
      e,
      !0,
      w,
      c,
      n
    ), c = _, _ = null, e = c !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!c) && !(e = c === i) && (e = H(
      i,
      c,
      Y
    ), e === null ? e = !1 : (m(
      e,
      !0,
      M,
      c,
      i
    ), c = _, L = _ = null, e = c !== null)), e) : !1;
  }
  function Km(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Ke.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    m(
      this._fragmentFiber.child,
      !1,
      $f,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var i = E(
        this._fragmentFiber
      );
      if (i = n ? i[1] || i[0] || x(this._fragmentFiber) : i[0] || i[1], i === null) return;
      if (i.tag === 6) {
        t = N(i), Km(t, n);
        return;
      }
      if (i = N(i), i.nodeType !== 9) {
        if (i.nodeType === 11) {
          n = "host" in i ? i.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        i.scrollIntoView(t);
      }
    }
    for (i = n ? e.length - 1 : 0; i !== (n ? -1 : e.length); ) {
      var u = e[i];
      u.tag === 6 ? (u = N(u), Km(u, n)) : N(u).scrollIntoView(t), i += n ? -1 : 1;
    }
  };
  function e2(t, e) {
    return t = N(t), $m(t, e), !1;
  }
  function $m(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Im(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = n[i];
        t.addEventListener(
          u.type,
          u.attachedListener,
          da(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(c) {
      for (var h = 0, b = 0; b < gn.length; b++) {
        var z = gn[b];
        (z.fragmentInstance !== e || z.observer !== c || z.instance !== t) && (gn[h++] = z);
      }
      gn.length = h, c.observe(t);
    }), $m(t, e));
  }
  function n2(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = n[i];
        t.removeEventListener(
          u.type,
          u.attachedListener,
          da(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(c) {
      typeof c.rootMargin == "string" ? Wb(
        e,
        c,
        t
      ) : c.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Jf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jf(n), Ri(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function l2(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (i) {
        if (!t[$l])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = an(t.nextSibling), t === null) break;
    }
    return null;
  }
  function i2(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = an(t.nextSibling), t === null)) return null;
    return t;
  }
  function Jm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = an(t.nextSibling), t === null)) return null;
    return t;
  }
  function kf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ff(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function a2(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var i = function() {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
    }
  }
  function an(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Wf = null;
  function km(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return an(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Fm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function u2(t, e) {
    function n() {
      i = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var i = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return i;
  }
  function o2(t) {
    Um(function() {
      Um(function(e) {
        return t(e);
      });
    });
  }
  function Wm(t, e, n) {
    switch (e = _u(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Pm(t, e, n) {
    for (var i in n) {
      var u = n[i];
      n.hasOwnProperty(i) && u != null && Xt(t, e, i, null, Lb, u);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Nn && (t.onclick = null), Ri(t);
  }
  function Pf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ri(t);
  }
  var un = /* @__PURE__ */ new Map(), ty = /* @__PURE__ */ new Set();
  function Nu(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var nl = rt.d;
  rt.d = {
    f: c2,
    r: r2,
    D: s2,
    C: f2,
    L: d2,
    m: h2,
    X: m2,
    S: g2,
    M: y2
  };
  function c2() {
    var t = nl.f(), e = Sc();
    return t || e;
  }
  function r2(t) {
    var e = sl(t);
    e !== null && e.tag === 5 && e.type === "form" ? ng(e) : nl.r(t);
  }
  var ha = typeof document > "u" ? null : document;
  function ey(t, e, n) {
    var i = ha;
    if (i && typeof e == "string" && e) {
      var u = Fe(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), ty.has(u) || (ty.add(u), t = { rel: t, crossOrigin: n, href: e }, i.querySelector(u) === null && (e = i.createElement("link"), pe(e, "link", t), ee(e), i.head.appendChild(e)));
    }
  }
  function s2(t) {
    nl.D(t), ey("dns-prefetch", t, null);
  }
  function f2(t, e) {
    nl.C(t, e), ey("preconnect", t, e);
  }
  function d2(t, e, n) {
    nl.L(t, e, n);
    var i = ha;
    if (i && t && e) {
      var u = 'link[rel="preload"][as="' + Fe(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Fe(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Fe(
        n.imageSizes
      ) + '"]')) : u += '[href="' + Fe(t) + '"]';
      var c = u;
      switch (e) {
        case "style":
          c = ga(t);
          break;
        case "script":
          c = ma(t);
      }
      if (!(un.has(c) || (t = R(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), un.set(c, t), i.querySelector(u) !== null || e === "style" && i.querySelector(Tu(c)) || e === "script" && i.querySelector(Mu(c))))) {
        var h = i.createElement("link");
        pe(h, "link", t), e === "style" && (h[Di] = !0, h.onload = h.onerror = function() {
          Xa(h);
        }), ee(h), i.head.appendChild(h);
      }
    }
  }
  function h2(t, e) {
    nl.m(t, e);
    var n = ha;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Fe(i) + '"][href="' + Fe(t) + '"]', c = u;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = ma(t);
      }
      if (!un.has(c) && (t = R({ rel: "modulepreload", href: t }, e), un.set(c, t), n.querySelector(u) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Mu(c)))
              return;
        }
        i = n.createElement("link"), pe(i, "link", t), ee(i), n.head.appendChild(i);
      }
    }
  }
  function g2(t, e, n) {
    nl.S(t, e, n);
    var i = ha;
    if (i && t) {
      var u = Xn(i).hoistableStyles, c = ga(t);
      e = e || "default";
      var h = u.get(c);
      if (!h) {
        var b = { loading: 0, preload: null };
        if (h = i.querySelector(
          Tu(c)
        ))
          b.loading = 5;
        else {
          t = R(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = un.get(c)) && td(t, n);
          var z = h = i.createElement("link");
          ee(z), pe(z, "link", t), z._p = new Promise(function(q, I) {
            z.onload = q, z.onerror = I;
          }), z.addEventListener("load", function() {
            b.loading |= 1;
          }), z.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, Cc(h, e, i);
        }
        h = {
          type: "stylesheet",
          instance: h,
          count: 1,
          state: b
        }, u.set(c, h);
      }
    }
  }
  function m2(t, e) {
    nl.X(t, e);
    var n = ha;
    if (n && t) {
      var i = Xn(n).hoistableScripts, u = ma(t), c = i.get(u);
      c || (c = n.querySelector(Mu(u)), c || (t = R({ src: t, async: !0 }, e), (e = un.get(u)) && ed(t, e), c = n.createElement("script"), ee(c), pe(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(u, c));
    }
  }
  function y2(t, e) {
    nl.M(t, e);
    var n = ha;
    if (n && t) {
      var i = Xn(n).hoistableScripts, u = ma(t), c = i.get(u);
      c || (c = n.querySelector(Mu(u)), c || (t = R({ src: t, async: !0, type: "module" }, e), (e = un.get(u)) && ed(t, e), c = n.createElement("script"), ee(c), pe(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(u, c));
    }
  }
  function ny(t, e, n, i) {
    var u = (u = re.current) ? Nu(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = ga(n.href), e = Xn(
          u
        ).hoistableStyles, i = e.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ga(n.href);
          var c = Xn(
            u
          ).hoistableStyles, h = c.get(t);
          if (h || (u = u.ownerDocument || u, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, h), (c = u.querySelector(
            Tu(t)
          )) ? c._p || (h.instance = c, h.state.loading = 5) : (c = un.get(t), c || (c = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, un.set(t, c)), v2(
            u,
            t,
            c,
            h.state
          ))), e && i === null)
            throw Error(r(528, ""));
          return h;
        }
        if (e && i !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = ma(n), e = Xn(
          u
        ).hoistableScripts, i = e.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function ga(t) {
    return 'href="' + Fe(t) + '"';
  }
  function Tu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ly(t) {
    return R({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function v2(t, e, n, i) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Di] !== !0) {
        i.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Di] = !0, e.onload = e.onerror = Xa.bind(null, e), pe(e, "link", n), ee(e), t.head.appendChild(e);
    i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    });
  }
  function ma(t) {
    return '[src="' + Fe(t) + '"]';
  }
  function Mu(t) {
    return "script[async]" + t;
  }
  function iy(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var i = t.querySelector(
            'style[data-href~="' + Fe(n.href) + '"]'
          );
          if (i)
            return e.instance = i, ee(i), i;
          var u = R({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (t.ownerDocument || t).createElement(
            "style"
          ), ee(i), pe(i, "style", u), Cc(i, n.precedence, t), e.instance = i;
        case "stylesheet":
          u = ga(n.href);
          var c = t.querySelector(
            Tu(u)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ee(c), c;
          i = ly(n), (u = un.get(u)) && td(i, u), c = (t.ownerDocument || t).createElement("link"), ee(c);
          var h = c;
          return h._p = new Promise(function(b, z) {
            h.onload = b, h.onerror = z;
          }), pe(c, "link", i), e.state.loading |= 4, Cc(c, n.precedence, t), e.instance = c;
        case "script":
          return c = ma(n.src), (u = t.querySelector(
            Mu(c)
          )) ? (e.instance = u, ee(u), u) : (i = n, (u = un.get(c)) && (i = R({}, n), ed(i, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), pe(u, "link", i), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, Cc(i, n.precedence, t));
    return e.instance;
  }
  function Cc(t, e, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = i.length ? i[i.length - 1] : null, c = u, h = 0; h < i.length; h++) {
      var b = i[h];
      if (b.dataset.precedence === e) c = b;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function td(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function ed(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var zc = null;
  function ay(t, e, n) {
    if (zc === null) {
      var i = /* @__PURE__ */ new Map(), u = zc = /* @__PURE__ */ new Map();
      u.set(n, i);
    } else
      u = zc, i = u.get(n), i || (i = /* @__PURE__ */ new Map(), u.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var c = n[u];
      if (!(c[$l] || c[oe] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = c.getAttribute(e) || "";
        h = t + h;
        var b = i.get(h);
        b ? b.push(c) : i.set(h, [c]);
      }
    }
    return i;
  }
  function nd(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function p2(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function uy(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function oy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function cy(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function ry(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += cy(e), t.suspenseyImages.push(e)), t = S2.bind(t), e.decode().then(t, t));
  }
  function x2(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = ga(i.href), c = e.querySelector(
          Tu(u)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Cu.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = c, ee(c);
          return;
        }
        c = e.ownerDocument || e, i = ly(i), (u = un.get(u)) && td(i, u), c = c.createElement("link"), ee(c);
        var h = c;
        h._p = new Promise(function(b, z) {
          h.onload = b, h.onerror = z;
        }), pe(c, "link", i), n.instance = c;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Cu.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Ac = 0;
  function b2(t, e) {
    return t.stylesheets && t.count === 0 && Dc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Dc(t, t.stylesheets), t.unsuspend) {
          var c = t.unsuspend;
          t.unsuspend = null, c();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ac === 0 && (Ac = 62500 * Vb());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Dc(t, t.stylesheets), t.unsuspend)) {
            var c = t.unsuspend;
            t.unsuspend = null, c();
          }
        },
        (t.imgBytes > Ac ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(u);
      };
    } : null;
  }
  function sy(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Dc(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Cu() {
    this.count--, sy(this);
  }
  function S2() {
    this.imgCount--, sy(this);
  }
  var Oc = null;
  function Dc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Oc = /* @__PURE__ */ new Map(), e.forEach(E2, t), Oc = null, Cu.call(t));
  }
  function E2(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Oc.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Oc.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var h = u[c];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), i = h);
        }
        i && n.set(null, i);
      }
      u = e.instance, h = u.getAttribute("data-precedence"), c = n.get(h) || i, c === i && n.set(null, u), n.set(h, u), this.count++, i = Cu.bind(this), u.addEventListener("load", i), u.addEventListener("error", i), c ? c.parentNode.insertBefore(u, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ya = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: vt,
    _currentValue2: vt,
    _threadCount: 0
  };
  function w2(t, e, n, i, u, c, h, b, z) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ja(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ja(0), this.hiddenUpdates = ja(null), this.identifierPrefix = i, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = z, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fy(t, e, n, i, u, c, h, b, z, q, I, nt) {
    return t = new w2(
      t,
      e,
      n,
      h,
      z,
      q,
      I,
      nt,
      b
    ), e = 1, c === !0 && (e |= 24), c = Re(3, null, null, e), t.current = c, c.stateNode = t, e = ys(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, bs(c), t;
  }
  function dy(t) {
    return t ? (t = Xi, t) : Xi;
  }
  function hy(t, e, n, i, u, c) {
    u = dy(u), i.context === null ? i.context = u : i.pendingContext = u, i = bl(e), i.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (i.callback = c), n = Sl(t, i, e), n !== null && (Ue(n, t, e), au(n, t, e));
  }
  function gy(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function ld(t, e) {
    gy(t, e), (t = t.alternate) && gy(t, e);
  }
  function my(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fl(t, 67108864);
      e !== null && Ue(e, t, 67108864), ld(t, 67108864);
    }
  }
  function yy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Qe();
      e = Oi(e);
      var n = Fl(t, e);
      n !== null && Ue(n, t, e), ld(t, e);
    }
  }
  var va = !0;
  function _2(t, e, n, i) {
    var u = ct.T;
    ct.T = null;
    var c = rt.p;
    try {
      rt.p = 2, id(t, e, n, i);
    } finally {
      rt.p = c, ct.T = u;
    }
  }
  function N2(t, e, n, i) {
    var u = ct.T;
    ct.T = null;
    var c = rt.p;
    try {
      rt.p = 8, id(t, e, n, i);
    } finally {
      rt.p = c, ct.T = u;
    }
  }
  function id(t, e, n, i) {
    if (va) {
      var u = ad(i);
      if (u === null)
        Yf(
          t,
          e,
          i,
          Rc,
          n
        ), py(t, i);
      else if (M2(
        u,
        t,
        e,
        n,
        i
      ))
        i.stopPropagation();
      else if (py(t, i), e & 4 && -1 < T2.indexOf(t)) {
        for (; u !== null; ) {
          var c = sl(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var h = jn(c.pendingLanes);
                  if (h !== 0) {
                    var b = c;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; h; ) {
                      var z = 1 << 31 - Te(h);
                      b.entanglements[1] |= z, h &= ~z;
                    }
                    Bn(c), (Vt & 6) === 0 && (pc = _e() + 500, Su(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Fl(c, 2), b !== null && Ue(b, c, 2), Sc(), ld(c, 2);
            }
          if (c = ad(i), c === null && Yf(
            t,
            e,
            i,
            Rc,
            n
          ), c === u) break;
          u = c;
        }
        u !== null && i.stopPropagation();
      } else
        Yf(
          t,
          e,
          i,
          null,
          n
        );
    }
  }
  function ad(t) {
    return t = Zr(t), ud(t);
  }
  var Rc = null;
  function ud(t) {
    if (Rc = null, t = qn(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Rc = t, null;
  }
  function vy(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Cr()) {
          case io:
            return 2;
          case ao:
            return 8;
          case Ti:
          case zr:
            return 32;
          case uo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var od = !1, Rl = null, Hl = null, Bl = null, zu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), Ll = [], T2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function py(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Hl = null;
        break;
      case "mouseover":
      case "mouseout":
        Bl = null;
        break;
      case "pointerover":
      case "pointerout":
        zu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Au.delete(e.pointerId);
    }
  }
  function Ou(t, e, n, i, u, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: c,
      targetContainers: [u]
    }, e !== null && (e = sl(e), e !== null && my(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function M2(t, e, n, i, u) {
    switch (e) {
      case "focusin":
        return Rl = Ou(
          Rl,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "dragenter":
        return Hl = Ou(
          Hl,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "mouseover":
        return Bl = Ou(
          Bl,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return zu.set(
          c,
          Ou(
            zu.get(c) || null,
            t,
            e,
            n,
            i,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, Au.set(
          c,
          Ou(
            Au.get(c) || null,
            t,
            e,
            n,
            i,
            u
          )
        ), !0;
    }
    return !1;
  }
  function xy(t) {
    var e = qn(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, ho(t.priority, function() {
              yy(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(n), e !== null) {
            t.blockedOn = e, ho(t.priority, function() {
              yy(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Hc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = ad(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        Xr = i, n.target.dispatchEvent(i), Xr = null;
      } else
        return e = sl(n), e !== null && my(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function by(t, e, n) {
    Hc(t) && n.delete(e);
  }
  function C2() {
    od = !1, Rl !== null && Hc(Rl) && (Rl = null), Hl !== null && Hc(Hl) && (Hl = null), Bl !== null && Hc(Bl) && (Bl = null), zu.forEach(by), Au.forEach(by);
  }
  function Bc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, od || (od = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      C2
    )));
  }
  var Lc = null;
  function Sy(t) {
    Lc !== t && (Lc = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        Lc === t && (Lc = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], i = t[e + 1], u = t[e + 2];
          if (typeof i != "function") {
            if (ud(i || n) === null)
              continue;
            break;
          }
          var c = sl(n);
          c !== null && (t.splice(e, 3), e -= 3, qs(
            c,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: i
            },
            i,
            u
          ));
        }
      }
    ));
  }
  function pa(t) {
    function e(z) {
      return Bc(z, t);
    }
    Rl !== null && Bc(Rl, t), Hl !== null && Bc(Hl, t), Bl !== null && Bc(Bl, t), zu.forEach(e), Au.forEach(e);
    for (var n = 0; n < Ll.length; n++) {
      var i = Ll[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Ll.length && (n = Ll[0], n.blockedOn === null); )
      xy(n), n.blockedOn === null && Ll.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var u = n[i], c = n[i + 1], h = u[Se] || null;
        if (typeof c == "function")
          h || Sy(n);
        else if (h) {
          var b = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, h = c[Se] || null)
              b = h.formAction;
            else if (ud(u) !== null) continue;
          } else b = h.action;
          typeof b == "function" ? n[i + 1] = b : (n.splice(i, 3), i -= 3), Sy(n);
        }
      }
  }
  function Ey() {
    function t(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(h) {
            return u = h;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function cd(t) {
    this._internalRoot = t;
  }
  Uc.prototype.render = cd.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, i = Qe();
    hy(n, i, t, e, null, null);
  }, Uc.prototype.unmount = cd.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      hy(t.current, 2, null, t, null, null), Sc(), e[rl] = null;
    }
  };
  function Uc(t) {
    this._internalRoot = t;
  }
  Uc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = fo();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ll.length && e !== 0 && e < Ll[n].priority; n++) ;
      Ll.splice(n, 0, t), n === 0 && xy(t);
    }
  };
  var wy = a.version;
  if (wy !== "19.3.1")
    throw Error(
      r(
        527,
        wy,
        "19.3.1"
      )
    );
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = p(e), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var z2 = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ct,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vc.isDisabled && Vc.supportsFiber)
      try {
        Gl = Vc.inject(
          z2
        ), Ne = Vc;
      } catch {
      }
  }
  return Ru.createRoot = function(t, e) {
    if (!s(t)) throw Error(r(299));
    var n = !1, i = "", u = dg, c = hg, h = gg;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = fy(
      t,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      u,
      c,
      h,
      Ey
    ), t[rl] = e.current, Vf(t), new cd(e);
  }, Ru.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(r(299));
    var i = !1, u = "", c = dg, h = hg, b = gg, z = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (z = n.formState)), e = fy(
      t,
      1,
      !0,
      e,
      n ?? null,
      i,
      u,
      z,
      c,
      h,
      b,
      Ey
    ), e.context = dy(null), n = e.current, i = Qe(), i = Oi(i), u = bl(i), u.callback = null, Sl(n, u, i), n = i, e.current.lanes = n, Kl(e, n), Bn(e), t[rl] = e.current, Vf(t), new Uc(e);
  }, Ru.version = "19.3.1", Ru;
}
var Ry;
function V2() {
  if (Ry) return fd.exports;
  Ry = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (a) {
        console.error(a);
      }
  }
  return l(), fd.exports = U2(), fd.exports;
}
var Y2 = V2();
const j2 = /* @__PURE__ */ $d(Y2), q2 = {
  slug: "innova-medical",
  title: "Innova Medical",
  heroNode: {
    position: { x: -840, y: 220 },
    width: 760,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 220 },
      width: 760,
      chapterLabel: "Problem Discovery"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 840, y: 0 },
      width: 780,
      chapterLabel: "Interaction Design"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 840, y: 840 },
      width: 760,
      chapterLabel: "Product Strategy"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 1720, y: 0 },
      width: 760,
      chapterLabel: "Diagnostic Audit"
    },
    {
      id: "section-4",
      sectionIndex: 4,
      position: { x: 1720, y: 840 },
      width: 820,
      chapterLabel: "Spatial Affordance Design"
    },
    {
      id: "section-5",
      sectionIndex: 5,
      position: { x: 2640, y: 0 },
      width: 760,
      chapterLabel: "Cross-Functional Alignment"
    },
    {
      id: "section-6",
      sectionIndex: 6,
      position: { x: 2640, y: 840 },
      width: 740,
      chapterLabel: "Performance Engineering"
    },
    {
      id: "section-7",
      sectionIndex: 7,
      position: { x: 3500, y: 420 },
      width: 740,
      chapterLabel: "Measurable Impact"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-0-2", source: "section-0", target: "section-2" },
    { id: "e-1-3", source: "section-1", target: "section-3" },
    { id: "e-2-3", source: "section-2", target: "section-3" },
    { id: "e-3-4", source: "section-3", target: "section-4" },
    { id: "e-3-5", source: "section-3", target: "section-5" },
    { id: "e-4-7", source: "section-4", target: "section-7" },
    { id: "e-5-6", source: "section-5", target: "section-6" },
    { id: "e-6-7", source: "section-6", target: "section-7" }
  ]
}, X2 = {
  slug: "mrke-3d",
  title: "MRKE 360 Hairstyle Viewer Application",
  heroNode: {
    position: { x: -880, y: 680 },
    width: 800,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 680 },
      width: 840,
      chapterLabel: "Problem Discovery"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 940, y: 0 },
      width: 840,
      chapterLabel: "User Research"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 940, y: 1360 },
      width: 860,
      chapterLabel: "Prototype Trade Offs"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 1880, y: 0 },
      width: 860,
      chapterLabel: "Consultation User Flow"
    },
    {
      id: "section-4",
      sectionIndex: 4,
      position: { x: 1880, y: 1360 },
      width: 800,
      chapterLabel: "Usability Iteration"
    },
    {
      id: "section-5",
      sectionIndex: 5,
      position: { x: 2800, y: 560 },
      width: 820,
      chapterLabel: "Technical Architecture"
    },
    {
      id: "section-6",
      sectionIndex: 6,
      position: { x: 3720, y: 680 },
      width: 780,
      chapterLabel: "Business Impact"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-0-2", source: "section-0", target: "section-2" },
    { id: "e-1-3", source: "section-1", target: "section-3" },
    { id: "e-2-4", source: "section-2", target: "section-4" },
    { id: "e-3-4", source: "section-3", target: "section-4", dashed: !0 },
    { id: "e-3-5", source: "section-3", target: "section-5" },
    { id: "e-4-5", source: "section-4", target: "section-5" },
    { id: "e-3-6", source: "section-3", target: "section-6", dashed: !0 },
    { id: "e-5-6", source: "section-5", target: "section-6" }
  ]
}, Z2 = {
  slug: "live-concert-sync",
  title: "Live Concert Telemetry & AI MoCap Sync",
  heroNode: {
    position: { x: -880, y: 460 },
    width: 800,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 460 },
      width: 800,
      chapterLabel: "Live Stage Problem"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 900, y: 0 },
      width: 920,
      chapterLabel: "Telemetry Data Flow"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 900, y: 960 },
      width: 920,
      chapterLabel: "Engineering Interventions"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 1920, y: 460 },
      width: 800,
      chapterLabel: "Technical Stack"
    },
    {
      id: "section-4",
      sectionIndex: 4,
      position: { x: 2820, y: 460 },
      width: 820,
      chapterLabel: "Outcomes and Lessons"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-0-2", source: "section-0", target: "section-2" },
    { id: "e-1-2", source: "section-1", target: "section-2", dashed: !0 },
    { id: "e-1-3", source: "section-1", target: "section-3" },
    { id: "e-2-3", source: "section-2", target: "section-3" },
    { id: "e-1-4", source: "section-1", target: "section-4", dashed: !0 },
    { id: "e-3-4", source: "section-3", target: "section-4" }
  ]
}, G2 = {
  slug: "collaragent",
  title: "CollarAgent Visual Research Studio",
  heroNode: {
    position: { x: -900, y: 380 },
    width: 840,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 380 },
      width: 820,
      chapterLabel: "Problem Discovery"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 920, y: 0 },
      width: 880,
      chapterLabel: "Design Exploration"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 920, y: 840 },
      width: 840,
      chapterLabel: "Technical Stack"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 1900, y: 380 },
      width: 820,
      chapterLabel: "Outcomes and Verification"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-0-2", source: "section-0", target: "section-2" },
    { id: "e-1-2", source: "section-1", target: "section-2", dashed: !0 },
    { id: "e-1-3", source: "section-1", target: "section-3" },
    { id: "e-2-3", source: "section-2", target: "section-3" }
  ]
}, Q2 = {
  slug: "stratawright",
  title: "Stratawright Agentic DAW",
  heroNode: {
    position: { x: -900, y: 380 },
    width: 840,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 380 },
      width: 880,
      chapterLabel: "Problem Discovery"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 980, y: 0 },
      width: 920,
      chapterLabel: "System Exploration"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 980, y: 960 },
      width: 860,
      chapterLabel: "Domain Architecture"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 2e3, y: 380 },
      width: 840,
      chapterLabel: "Outcomes and Verification"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-0-2", source: "section-0", target: "section-2" },
    { id: "e-1-2", source: "section-1", target: "section-2", dashed: !0 },
    { id: "e-1-3", source: "section-1", target: "section-3" },
    { id: "e-2-3", source: "section-2", target: "section-3" }
  ]
}, K2 = {
  slug: "musegrid",
  title: "MuseGrid Music Notation & Audio Platform",
  heroNode: {
    position: { x: -900, y: 380 },
    width: 840,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 380 },
      width: 880,
      chapterLabel: "Problem Discovery"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 980, y: 0 },
      width: 920,
      chapterLabel: "System Exploration"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 980, y: 1220 },
      width: 880,
      chapterLabel: "Audio & Notation Core"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 2e3, y: 380 },
      width: 840,
      chapterLabel: "Outcomes and Verification"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-0-2", source: "section-0", target: "section-2" },
    { id: "e-1-2", source: "section-1", target: "section-2", dashed: !0 },
    { id: "e-1-3", source: "section-1", target: "section-3" },
    { id: "e-2-3", source: "section-2", target: "section-3" }
  ]
}, Hy = {
  slug: "ieee-vr",
  title: "IEEE ICVR Spatial Audio Perception Research",
  heroNode: {
    position: { x: -900, y: 0 },
    width: 840,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 0 },
      width: 820,
      chapterLabel: "Problem Discovery"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 900, y: 0 },
      width: 920,
      chapterLabel: "Experimental System"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 1900, y: 0 },
      width: 920,
      chapterLabel: "Empirical Findings"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 2900, y: 0 },
      width: 820,
      chapterLabel: "Engineering Takeaways"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-1-2", source: "section-1", target: "section-2" },
    { id: "e-2-3", source: "section-2", target: "section-3" },
    { id: "e-1-3", source: "section-1", target: "section-3", dashed: !0 }
  ]
}, $2 = {
  slug: "virtual-principal",
  title: "Local GPU Multimodal AI Virtual Principal",
  heroNode: {
    position: { x: -960, y: 0 },
    width: 880,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 0 },
      width: 800,
      chapterLabel: "Problem Discovery"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 880, y: 0 },
      width: 920,
      chapterLabel: "Design Exploration"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 1880, y: 0 },
      width: 980,
      chapterLabel: "On-Site Deployment"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 2940, y: 0 },
      width: 980,
      chapterLabel: "Pipeline Tuning"
    },
    {
      id: "section-4",
      sectionIndex: 4,
      position: { x: 4e3, y: 0 },
      width: 920,
      chapterLabel: "Systems Integration"
    },
    {
      id: "section-5",
      sectionIndex: 5,
      position: { x: 5e3, y: 0 },
      width: 960,
      chapterLabel: "Technical Stack"
    },
    {
      id: "section-6",
      sectionIndex: 6,
      position: { x: 6040, y: 0 },
      width: 840,
      chapterLabel: "Practical Outcomes"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-1-2", source: "section-1", target: "section-2" },
    { id: "e-2-3", source: "section-2", target: "section-3" },
    { id: "e-3-4", source: "section-3", target: "section-4" },
    { id: "e-4-5", source: "section-4", target: "section-5" },
    { id: "e-5-6", source: "section-5", target: "section-6" },
    { id: "e-1-4", source: "section-1", target: "section-4", dashed: !0 },
    { id: "e-3-5", source: "section-3", target: "section-5", dashed: !0 }
  ]
}, I2 = {
  slug: "splat-room-editor",
  title: "Gaussian Splatting Room Editor",
  heroNode: {
    position: { x: -960, y: 0 },
    width: 880,
    chapterLabel: "Project Overview"
  },
  nodes: [
    {
      id: "section-0",
      sectionIndex: 0,
      position: { x: 0, y: 0 },
      width: 820,
      chapterLabel: "Motivation & Brief"
    },
    {
      id: "section-1",
      sectionIndex: 1,
      position: { x: 900, y: 0 },
      width: 820,
      chapterLabel: "Splat Pipeline"
    },
    {
      id: "section-2",
      sectionIndex: 2,
      position: { x: 1800, y: 0 },
      width: 820,
      chapterLabel: "Camera Boundary"
    },
    {
      id: "section-3",
      sectionIndex: 3,
      position: { x: 2700, y: 0 },
      width: 840,
      chapterLabel: "Mobile Optimization"
    },
    {
      id: "section-4",
      sectionIndex: 4,
      position: { x: 3620, y: 0 },
      width: 920,
      chapterLabel: "Furniture Staging"
    },
    {
      id: "section-5",
      sectionIndex: 5,
      position: { x: 4620, y: 0 },
      width: 840,
      chapterLabel: "Transform Gizmos"
    },
    {
      id: "section-6",
      sectionIndex: 6,
      position: { x: 5540, y: 0 },
      width: 860,
      chapterLabel: "Floor Calibration"
    },
    {
      id: "section-7",
      sectionIndex: 7,
      position: { x: 6480, y: 0 },
      width: 800,
      chapterLabel: "Future Trajectory"
    }
  ],
  edges: [
    { id: "e-hero-0", source: "hero", target: "section-0" },
    { id: "e-0-1", source: "section-0", target: "section-1" },
    { id: "e-1-2", source: "section-1", target: "section-2" },
    { id: "e-2-3", source: "section-2", target: "section-3" },
    { id: "e-3-4", source: "section-3", target: "section-4" },
    { id: "e-4-5", source: "section-4", target: "section-5" },
    { id: "e-5-6", source: "section-5", target: "section-6" },
    { id: "e-6-7", source: "section-6", target: "section-7" },
    { id: "e-2-5", source: "section-2", target: "section-5", dashed: !0 },
    { id: "e-3-6", source: "section-3", target: "section-6", dashed: !0 }
  ]
}, J2 = {
  "innova-medical": q2,
  "mrke-3d": X2,
  "live-concert-sync": Z2,
  collaragent: G2,
  stratawright: Q2,
  musegrid: K2,
  "ieee-vr": Hy,
  "ieee-vr-conflict": Hy,
  "virtual-principal": $2,
  "splat-room-editor": I2
};
function k2(l) {
  return J2[l] || null;
}
class F2 {
  trackedElements = [];
  currentMode = "whiteboard";
  toggleButton = null;
  config;
  constructor(a) {
    this.config = a;
  }
  prepareNodesAndEdges() {
    const a = Array.from(
      document.querySelectorAll(".case-section")
    ), o = document.querySelector(".case-hero"), r = [];
    if (this.config.heroNode && o) {
      const f = document.createComment("placeholder-hero");
      o.parentNode?.insertBefore(f, o), this.trackedElements.push({ element: o, placeholder: f }), r.push({
        id: "hero",
        type: "heroNode",
        position: this.config.heroNode.position,
        data: {
          domElement: o,
          chapterLabel: this.config.heroNode.chapterLabel || "Overview",
          width: this.config.heroNode.width || 760
        }
      });
    }
    this.config.nodes.forEach((f, d) => {
      const g = a[f.sectionIndex];
      if (!g) return;
      const v = document.createComment(
        `placeholder-section-${f.sectionIndex}`
      );
      g.parentNode?.insertBefore(v, g), this.trackedElements.push({ element: g, placeholder: v }), r.push({
        id: f.id,
        type: f.type || "sectionNode",
        position: f.position,
        data: {
          domElement: g,
          chapterLabel: f.chapterLabel,
          chapterIndex: d,
          width: f.width || 760,
          variant: f.variant || "default"
        }
      });
    });
    const s = this.config.edges.map((f) => ({
      id: f.id,
      source: f.source,
      target: f.target,
      sourceHandle: f.sourceHandle,
      targetHandle: f.targetHandle,
      type: "custom",
      animated: f.animated ?? !1,
      data: {
        dashed: f.dashed ?? !1
      }
    }));
    return { nodes: r, edges: s };
  }
  attachNavigationToggle() {
    const a = document.querySelector(".case-nav-links");
    if (!a) return;
    let o = document.getElementById(
      "case-view-toggle"
    );
    o || (o = document.createElement("button"), o.id = "case-view-toggle", o.type = "button", o.className = "case-view-mode-toggle", a.prepend(o)), this.toggleButton = o, this.updateToggleButton(), o.addEventListener("click", () => {
      const r = this.currentMode === "whiteboard" ? "reading" : "whiteboard";
      this.setMode(r);
    });
  }
  setMode(a) {
    this.currentMode = a;
    try {
      localStorage.setItem("case_view_preference", a);
    } catch {
    }
    a === "reading" ? (document.body.classList.remove("is-whiteboard-active"), document.documentElement.classList.remove("is-whiteboard-active", "is-whiteboard-loading"), this.restoreElementsToReading()) : (document.body.classList.add("is-whiteboard-active"), document.documentElement.classList.add("is-whiteboard-active"), this.moveElementsToWhiteboard()), this.updateToggleButton();
  }
  restoreElementsToReading() {
    this.trackedElements.forEach(({ element: a, placeholder: o }) => {
      o.parentNode && o.parentNode.insertBefore(a, o);
    });
  }
  moveElementsToWhiteboard() {
    window.dispatchEvent(new CustomEvent("caseflow:sync-nodes"));
  }
  updateToggleButton() {
    if (!this.toggleButton) return;
    const a = this.currentMode === "whiteboard", o = a ? "Reading View" : "Whiteboard View", r = a ? "Reading" : "Whiteboard", s = a ? "Switch to linear reading layout" : "Switch to interactive spatial whiteboard", f = a ? '<svg class="case-nav-btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="18" y2="18"/></svg>' : '<svg class="case-nav-btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M3 9h18M9 21V9"/></svg>';
    this.toggleButton.innerHTML = `${f}<span class="toggle-text-full">${o}</span><span class="toggle-text-short">${r}</span>`, this.toggleButton.setAttribute("aria-label", s);
  }
  getInitialMode() {
    if (window.innerWidth < 768)
      return "reading";
    try {
      const a = localStorage.getItem("case_view_preference");
      if (a === "reading" || a === "whiteboard")
        return a;
    } catch {
    }
    return "whiteboard";
  }
}
function ue(l) {
  if (typeof l == "string" || typeof l == "number") return "" + l;
  let a = "";
  if (Array.isArray(l))
    for (let o = 0, r; o < l.length; o++)
      (r = ue(l[o])) !== "" && (a += (a && " ") + r);
  else
    for (let o in l)
      l[o] && (a += (a && " ") + o);
  return a;
}
var W2 = { value: () => {
} };
function fr() {
  for (var l = 0, a = arguments.length, o = {}, r; l < a; ++l) {
    if (!(r = arguments[l] + "") || r in o || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    o[r] = [];
  }
  return new Ic(o);
}
function Ic(l) {
  this._ = l;
}
function P2(l, a) {
  return l.trim().split(/^|\s+/).map(function(o) {
    var r = "", s = o.indexOf(".");
    if (s >= 0 && (r = o.slice(s + 1), o = o.slice(0, s)), o && !a.hasOwnProperty(o)) throw new Error("unknown type: " + o);
    return { type: o, name: r };
  });
}
Ic.prototype = fr.prototype = {
  constructor: Ic,
  on: function(l, a) {
    var o = this._, r = P2(l + "", o), s, f = -1, d = r.length;
    if (arguments.length < 2) {
      for (; ++f < d; ) if ((s = (l = r[f]).type) && (s = tS(o[s], l.name))) return s;
      return;
    }
    if (a != null && typeof a != "function") throw new Error("invalid callback: " + a);
    for (; ++f < d; )
      if (s = (l = r[f]).type) o[s] = By(o[s], l.name, a);
      else if (a == null) for (s in o) o[s] = By(o[s], l.name, null);
    return this;
  },
  copy: function() {
    var l = {}, a = this._;
    for (var o in a) l[o] = a[o].slice();
    return new Ic(l);
  },
  call: function(l, a) {
    if ((s = arguments.length - 2) > 0) for (var o = new Array(s), r = 0, s, f; r < s; ++r) o[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(l)) throw new Error("unknown type: " + l);
    for (f = this._[l], r = 0, s = f.length; r < s; ++r) f[r].value.apply(a, o);
  },
  apply: function(l, a, o) {
    if (!this._.hasOwnProperty(l)) throw new Error("unknown type: " + l);
    for (var r = this._[l], s = 0, f = r.length; s < f; ++s) r[s].value.apply(a, o);
  }
};
function tS(l, a) {
  for (var o = 0, r = l.length, s; o < r; ++o)
    if ((s = l[o]).name === a)
      return s.value;
}
function By(l, a, o) {
  for (var r = 0, s = l.length; r < s; ++r)
    if (l[r].name === a) {
      l[r] = W2, l = l.slice(0, r).concat(l.slice(r + 1));
      break;
    }
  return o != null && l.push({ name: a, value: o }), l;
}
var Dd = "http://www.w3.org/1999/xhtml", Ly = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Dd,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function dr(l) {
  var a = l += "", o = a.indexOf(":");
  return o >= 0 && (a = l.slice(0, o)) !== "xmlns" && (l = l.slice(o + 1)), Ly.hasOwnProperty(a) ? { space: Ly[a], local: l } : l;
}
function eS(l) {
  return function() {
    var a = this.ownerDocument, o = this.namespaceURI;
    return o === Dd && a.documentElement.namespaceURI === Dd ? a.createElement(l) : a.createElementNS(o, l);
  };
}
function nS(l) {
  return function() {
    return this.ownerDocument.createElementNS(l.space, l.local);
  };
}
function Fv(l) {
  var a = dr(l);
  return (a.local ? nS : eS)(a);
}
function lS() {
}
function Id(l) {
  return l == null ? lS : function() {
    return this.querySelector(l);
  };
}
function iS(l) {
  typeof l != "function" && (l = Id(l));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var f = a[s], d = f.length, g = r[s] = new Array(d), v, p, y = 0; y < d; ++y)
      (v = f[y]) && (p = l.call(v, v.__data__, y, f)) && ("__data__" in v && (p.__data__ = v.__data__), g[y] = p);
  return new Ie(r, this._parents);
}
function aS(l) {
  return l == null ? [] : Array.isArray(l) ? l : Array.from(l);
}
function uS() {
  return [];
}
function Wv(l) {
  return l == null ? uS : function() {
    return this.querySelectorAll(l);
  };
}
function oS(l) {
  return function() {
    return aS(l.apply(this, arguments));
  };
}
function cS(l) {
  typeof l == "function" ? l = oS(l) : l = Wv(l);
  for (var a = this._groups, o = a.length, r = [], s = [], f = 0; f < o; ++f)
    for (var d = a[f], g = d.length, v, p = 0; p < g; ++p)
      (v = d[p]) && (r.push(l.call(v, v.__data__, p, d)), s.push(v));
  return new Ie(r, s);
}
function Pv(l) {
  return function() {
    return this.matches(l);
  };
}
function tp(l) {
  return function(a) {
    return a.matches(l);
  };
}
var rS = Array.prototype.find;
function sS(l) {
  return function() {
    return rS.call(this.children, l);
  };
}
function fS() {
  return this.firstElementChild;
}
function dS(l) {
  return this.select(l == null ? fS : sS(typeof l == "function" ? l : tp(l)));
}
var hS = Array.prototype.filter;
function gS() {
  return Array.from(this.children);
}
function mS(l) {
  return function() {
    return hS.call(this.children, l);
  };
}
function yS(l) {
  return this.selectAll(l == null ? gS : mS(typeof l == "function" ? l : tp(l)));
}
function vS(l) {
  typeof l != "function" && (l = Pv(l));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var f = a[s], d = f.length, g = r[s] = [], v, p = 0; p < d; ++p)
      (v = f[p]) && l.call(v, v.__data__, p, f) && g.push(v);
  return new Ie(r, this._parents);
}
function ep(l) {
  return new Array(l.length);
}
function pS() {
  return new Ie(this._enter || this._groups.map(ep), this._parents);
}
function Pc(l, a) {
  this.ownerDocument = l.ownerDocument, this.namespaceURI = l.namespaceURI, this._next = null, this._parent = l, this.__data__ = a;
}
Pc.prototype = {
  constructor: Pc,
  appendChild: function(l) {
    return this._parent.insertBefore(l, this._next);
  },
  insertBefore: function(l, a) {
    return this._parent.insertBefore(l, a);
  },
  querySelector: function(l) {
    return this._parent.querySelector(l);
  },
  querySelectorAll: function(l) {
    return this._parent.querySelectorAll(l);
  }
};
function xS(l) {
  return function() {
    return l;
  };
}
function bS(l, a, o, r, s, f) {
  for (var d = 0, g, v = a.length, p = f.length; d < p; ++d)
    (g = a[d]) ? (g.__data__ = f[d], r[d] = g) : o[d] = new Pc(l, f[d]);
  for (; d < v; ++d)
    (g = a[d]) && (s[d] = g);
}
function SS(l, a, o, r, s, f, d) {
  var g, v, p = /* @__PURE__ */ new Map(), y = a.length, m = f.length, x = new Array(y), S;
  for (g = 0; g < y; ++g)
    (v = a[g]) && (x[g] = S = d.call(v, v.__data__, g, a) + "", p.has(S) ? s[g] = v : p.set(S, v));
  for (g = 0; g < m; ++g)
    S = d.call(l, f[g], g, f) + "", (v = p.get(S)) ? (r[g] = v, v.__data__ = f[g], p.delete(S)) : o[g] = new Pc(l, f[g]);
  for (g = 0; g < y; ++g)
    (v = a[g]) && p.get(x[g]) === v && (s[g] = v);
}
function ES(l) {
  return l.__data__;
}
function wS(l, a) {
  if (!arguments.length) return Array.from(this, ES);
  var o = a ? SS : bS, r = this._parents, s = this._groups;
  typeof l != "function" && (l = xS(l));
  for (var f = s.length, d = new Array(f), g = new Array(f), v = new Array(f), p = 0; p < f; ++p) {
    var y = r[p], m = s[p], x = m.length, S = _S(l.call(y, y && y.__data__, p, r)), E = S.length, A = g[p] = new Array(E), N = d[p] = new Array(E), _ = v[p] = new Array(x);
    o(y, m, A, N, _, S, a);
    for (var L = 0, w = 0, M, Y; L < E; ++L)
      if (M = A[L]) {
        for (L >= w && (w = L + 1); !(Y = N[w]) && ++w < E; ) ;
        M._next = Y || null;
      }
  }
  return d = new Ie(d, r), d._enter = g, d._exit = v, d;
}
function _S(l) {
  return typeof l == "object" && "length" in l ? l : Array.from(l);
}
function NS() {
  return new Ie(this._exit || this._groups.map(ep), this._parents);
}
function TS(l, a, o) {
  var r = this.enter(), s = this, f = this.exit();
  return typeof l == "function" ? (r = l(r), r && (r = r.selection())) : r = r.append(l + ""), a != null && (s = a(s), s && (s = s.selection())), o == null ? f.remove() : o(f), r && s ? r.merge(s).order() : s;
}
function MS(l) {
  for (var a = l.selection ? l.selection() : l, o = this._groups, r = a._groups, s = o.length, f = r.length, d = Math.min(s, f), g = new Array(s), v = 0; v < d; ++v)
    for (var p = o[v], y = r[v], m = p.length, x = g[v] = new Array(m), S, E = 0; E < m; ++E)
      (S = p[E] || y[E]) && (x[E] = S);
  for (; v < s; ++v)
    g[v] = o[v];
  return new Ie(g, this._parents);
}
function CS() {
  for (var l = this._groups, a = -1, o = l.length; ++a < o; )
    for (var r = l[a], s = r.length - 1, f = r[s], d; --s >= 0; )
      (d = r[s]) && (f && d.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(d, f), f = d);
  return this;
}
function zS(l) {
  l || (l = AS);
  function a(m, x) {
    return m && x ? l(m.__data__, x.__data__) : !m - !x;
  }
  for (var o = this._groups, r = o.length, s = new Array(r), f = 0; f < r; ++f) {
    for (var d = o[f], g = d.length, v = s[f] = new Array(g), p, y = 0; y < g; ++y)
      (p = d[y]) && (v[y] = p);
    v.sort(a);
  }
  return new Ie(s, this._parents).order();
}
function AS(l, a) {
  return l < a ? -1 : l > a ? 1 : l >= a ? 0 : NaN;
}
function OS() {
  var l = arguments[0];
  return arguments[0] = this, l.apply(null, arguments), this;
}
function DS() {
  return Array.from(this);
}
function RS() {
  for (var l = this._groups, a = 0, o = l.length; a < o; ++a)
    for (var r = l[a], s = 0, f = r.length; s < f; ++s) {
      var d = r[s];
      if (d) return d;
    }
  return null;
}
function HS() {
  let l = 0;
  for (const a of this) ++l;
  return l;
}
function BS() {
  return !this.node();
}
function LS(l) {
  for (var a = this._groups, o = 0, r = a.length; o < r; ++o)
    for (var s = a[o], f = 0, d = s.length, g; f < d; ++f)
      (g = s[f]) && l.call(g, g.__data__, f, s);
  return this;
}
function US(l) {
  return function() {
    this.removeAttribute(l);
  };
}
function VS(l) {
  return function() {
    this.removeAttributeNS(l.space, l.local);
  };
}
function YS(l, a) {
  return function() {
    this.setAttribute(l, a);
  };
}
function jS(l, a) {
  return function() {
    this.setAttributeNS(l.space, l.local, a);
  };
}
function qS(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    o == null ? this.removeAttribute(l) : this.setAttribute(l, o);
  };
}
function XS(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    o == null ? this.removeAttributeNS(l.space, l.local) : this.setAttributeNS(l.space, l.local, o);
  };
}
function ZS(l, a) {
  var o = dr(l);
  if (arguments.length < 2) {
    var r = this.node();
    return o.local ? r.getAttributeNS(o.space, o.local) : r.getAttribute(o);
  }
  return this.each((a == null ? o.local ? VS : US : typeof a == "function" ? o.local ? XS : qS : o.local ? jS : YS)(o, a));
}
function np(l) {
  return l.ownerDocument && l.ownerDocument.defaultView || l.document && l || l.defaultView;
}
function GS(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function QS(l, a, o) {
  return function() {
    this.style.setProperty(l, a, o);
  };
}
function KS(l, a, o) {
  return function() {
    var r = a.apply(this, arguments);
    r == null ? this.style.removeProperty(l) : this.style.setProperty(l, r, o);
  };
}
function $S(l, a, o) {
  return arguments.length > 1 ? this.each((a == null ? GS : typeof a == "function" ? KS : QS)(l, a, o ?? "")) : Na(this.node(), l);
}
function Na(l, a) {
  return l.style.getPropertyValue(a) || np(l).getComputedStyle(l, null).getPropertyValue(a);
}
function IS(l) {
  return function() {
    delete this[l];
  };
}
function JS(l, a) {
  return function() {
    this[l] = a;
  };
}
function kS(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    o == null ? delete this[l] : this[l] = o;
  };
}
function FS(l, a) {
  return arguments.length > 1 ? this.each((a == null ? IS : typeof a == "function" ? kS : JS)(l, a)) : this.node()[l];
}
function lp(l) {
  return l.trim().split(/^|\s+/);
}
function Jd(l) {
  return l.classList || new ip(l);
}
function ip(l) {
  this._node = l, this._names = lp(l.getAttribute("class") || "");
}
ip.prototype = {
  add: function(l) {
    var a = this._names.indexOf(l);
    a < 0 && (this._names.push(l), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(l) {
    var a = this._names.indexOf(l);
    a >= 0 && (this._names.splice(a, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(l) {
    return this._names.indexOf(l) >= 0;
  }
};
function ap(l, a) {
  for (var o = Jd(l), r = -1, s = a.length; ++r < s; ) o.add(a[r]);
}
function up(l, a) {
  for (var o = Jd(l), r = -1, s = a.length; ++r < s; ) o.remove(a[r]);
}
function WS(l) {
  return function() {
    ap(this, l);
  };
}
function PS(l) {
  return function() {
    up(this, l);
  };
}
function tE(l, a) {
  return function() {
    (a.apply(this, arguments) ? ap : up)(this, l);
  };
}
function eE(l, a) {
  var o = lp(l + "");
  if (arguments.length < 2) {
    for (var r = Jd(this.node()), s = -1, f = o.length; ++s < f; ) if (!r.contains(o[s])) return !1;
    return !0;
  }
  return this.each((typeof a == "function" ? tE : a ? WS : PS)(o, a));
}
function nE() {
  this.textContent = "";
}
function lE(l) {
  return function() {
    this.textContent = l;
  };
}
function iE(l) {
  return function() {
    var a = l.apply(this, arguments);
    this.textContent = a ?? "";
  };
}
function aE(l) {
  return arguments.length ? this.each(l == null ? nE : (typeof l == "function" ? iE : lE)(l)) : this.node().textContent;
}
function uE() {
  this.innerHTML = "";
}
function oE(l) {
  return function() {
    this.innerHTML = l;
  };
}
function cE(l) {
  return function() {
    var a = l.apply(this, arguments);
    this.innerHTML = a ?? "";
  };
}
function rE(l) {
  return arguments.length ? this.each(l == null ? uE : (typeof l == "function" ? cE : oE)(l)) : this.node().innerHTML;
}
function sE() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function fE() {
  return this.each(sE);
}
function dE() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function hE() {
  return this.each(dE);
}
function gE(l) {
  var a = typeof l == "function" ? l : Fv(l);
  return this.select(function() {
    return this.appendChild(a.apply(this, arguments));
  });
}
function mE() {
  return null;
}
function yE(l, a) {
  var o = typeof l == "function" ? l : Fv(l), r = a == null ? mE : typeof a == "function" ? a : Id(a);
  return this.select(function() {
    return this.insertBefore(o.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function vE() {
  var l = this.parentNode;
  l && l.removeChild(this);
}
function pE() {
  return this.each(vE);
}
function xE() {
  var l = this.cloneNode(!1), a = this.parentNode;
  return a ? a.insertBefore(l, this.nextSibling) : l;
}
function bE() {
  var l = this.cloneNode(!0), a = this.parentNode;
  return a ? a.insertBefore(l, this.nextSibling) : l;
}
function SE(l) {
  return this.select(l ? bE : xE);
}
function EE(l) {
  return arguments.length ? this.property("__data__", l) : this.node().__data__;
}
function wE(l) {
  return function(a) {
    l.call(this, a, this.__data__);
  };
}
function _E(l) {
  return l.trim().split(/^|\s+/).map(function(a) {
    var o = "", r = a.indexOf(".");
    return r >= 0 && (o = a.slice(r + 1), a = a.slice(0, r)), { type: a, name: o };
  });
}
function NE(l) {
  return function() {
    var a = this.__on;
    if (a) {
      for (var o = 0, r = -1, s = a.length, f; o < s; ++o)
        f = a[o], (!l.type || f.type === l.type) && f.name === l.name ? this.removeEventListener(f.type, f.listener, f.options) : a[++r] = f;
      ++r ? a.length = r : delete this.__on;
    }
  };
}
function TE(l, a, o) {
  return function() {
    var r = this.__on, s, f = wE(a);
    if (r) {
      for (var d = 0, g = r.length; d < g; ++d)
        if ((s = r[d]).type === l.type && s.name === l.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = f, s.options = o), s.value = a;
          return;
        }
    }
    this.addEventListener(l.type, f, o), s = { type: l.type, name: l.name, value: a, listener: f, options: o }, r ? r.push(s) : this.__on = [s];
  };
}
function ME(l, a, o) {
  var r = _E(l + ""), s, f = r.length, d;
  if (arguments.length < 2) {
    var g = this.node().__on;
    if (g) {
      for (var v = 0, p = g.length, y; v < p; ++v)
        for (s = 0, y = g[v]; s < f; ++s)
          if ((d = r[s]).type === y.type && d.name === y.name)
            return y.value;
    }
    return;
  }
  for (g = a ? TE : NE, s = 0; s < f; ++s) this.each(g(r[s], a, o));
  return this;
}
function op(l, a, o) {
  var r = np(l), s = r.CustomEvent;
  typeof s == "function" ? s = new s(a, o) : (s = r.document.createEvent("Event"), o ? (s.initEvent(a, o.bubbles, o.cancelable), s.detail = o.detail) : s.initEvent(a, !1, !1)), l.dispatchEvent(s);
}
function CE(l, a) {
  return function() {
    return op(this, l, a);
  };
}
function zE(l, a) {
  return function() {
    return op(this, l, a.apply(this, arguments));
  };
}
function AE(l, a) {
  return this.each((typeof a == "function" ? zE : CE)(l, a));
}
function* OE() {
  for (var l = this._groups, a = 0, o = l.length; a < o; ++a)
    for (var r = l[a], s = 0, f = r.length, d; s < f; ++s)
      (d = r[s]) && (yield d);
}
var cp = [null];
function Ie(l, a) {
  this._groups = l, this._parents = a;
}
function ku() {
  return new Ie([[document.documentElement]], cp);
}
function DE() {
  return this;
}
Ie.prototype = ku.prototype = {
  constructor: Ie,
  select: iS,
  selectAll: cS,
  selectChild: dS,
  selectChildren: yS,
  filter: vS,
  data: wS,
  enter: pS,
  exit: NS,
  join: TS,
  merge: MS,
  selection: DE,
  order: CS,
  sort: zS,
  call: OS,
  nodes: DS,
  node: RS,
  size: HS,
  empty: BS,
  each: LS,
  attr: ZS,
  style: $S,
  property: FS,
  classed: eE,
  text: aE,
  html: rE,
  raise: fE,
  lower: hE,
  append: gE,
  insert: yE,
  remove: pE,
  clone: SE,
  datum: EE,
  on: ME,
  dispatch: AE,
  [Symbol.iterator]: OE
};
function $e(l) {
  return typeof l == "string" ? new Ie([[document.querySelector(l)]], [document.documentElement]) : new Ie([[l]], cp);
}
var RE = 0;
function Uy() {
  this._ = "@" + (++RE).toString(36);
}
Uy.prototype = {
  constructor: Uy,
  get: function(l) {
    for (var a = this._; !(a in l); ) if (!(l = l.parentNode)) return;
    return l[a];
  },
  set: function(l, a) {
    return l[this._] = a;
  },
  remove: function(l) {
    return this._ in l && delete l[this._];
  },
  toString: function() {
    return this._;
  }
};
function HE(l) {
  let a;
  for (; a = l.sourceEvent; ) l = a;
  return l;
}
function mn(l, a) {
  if (l = HE(l), a === void 0 && (a = l.currentTarget), a) {
    var o = a.ownerSVGElement || a;
    if (o.createSVGPoint) {
      var r = o.createSVGPoint();
      return r.x = l.clientX, r.y = l.clientY, r = r.matrixTransform(a.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (a.getBoundingClientRect) {
      var s = a.getBoundingClientRect();
      return [l.clientX - s.left - a.clientLeft, l.clientY - s.top - a.clientTop];
    }
  }
  return [l.pageX, l.pageY];
}
const BE = { passive: !1 }, ju = { capture: !0, passive: !1 };
function md(l) {
  l.stopImmediatePropagation();
}
function Sa(l) {
  l.preventDefault(), l.stopImmediatePropagation();
}
function rp(l) {
  var a = l.document.documentElement, o = $e(l).on("dragstart.drag", Sa, ju);
  "onselectstart" in a ? o.on("selectstart.drag", Sa, ju) : (a.__noselect = a.style.MozUserSelect, a.style.MozUserSelect = "none");
}
function sp(l, a) {
  var o = l.document.documentElement, r = $e(l).on("dragstart.drag", null);
  a && (r.on("click.drag", Sa, ju), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in o ? r.on("selectstart.drag", null) : (o.style.MozUserSelect = o.__noselect, delete o.__noselect);
}
var Yc = (l) => () => l;
function Rd(l, {
  sourceEvent: a,
  subject: o,
  target: r,
  identifier: s,
  active: f,
  x: d,
  y: g,
  dx: v,
  dy: p,
  dispatch: y
}) {
  Object.defineProperties(this, {
    type: { value: l, enumerable: !0, configurable: !0 },
    sourceEvent: { value: a, enumerable: !0, configurable: !0 },
    subject: { value: o, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: f, enumerable: !0, configurable: !0 },
    x: { value: d, enumerable: !0, configurable: !0 },
    y: { value: g, enumerable: !0, configurable: !0 },
    dx: { value: v, enumerable: !0, configurable: !0 },
    dy: { value: p, enumerable: !0, configurable: !0 },
    _: { value: y }
  });
}
Rd.prototype.on = function() {
  var l = this._.on.apply(this._, arguments);
  return l === this._ ? this : l;
};
function LE(l) {
  return !l.ctrlKey && !l.button;
}
function UE() {
  return this.parentNode;
}
function VE(l, a) {
  return a ?? { x: l.x, y: l.y };
}
function YE() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function fp() {
  var l = LE, a = UE, o = VE, r = YE, s = {}, f = fr("start", "drag", "end"), d = 0, g, v, p, y, m = 0;
  function x(M) {
    M.on("mousedown.drag", S).filter(r).on("touchstart.drag", N).on("touchmove.drag", _, BE).on("touchend.drag touchcancel.drag", L).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function S(M, Y) {
    if (!(y || !l.call(this, M, Y))) {
      var H = w(this, a.call(this, M, Y), M, Y, "mouse");
      H && ($e(M.view).on("mousemove.drag", E, ju).on("mouseup.drag", A, ju), rp(M.view), md(M), p = !1, g = M.clientX, v = M.clientY, H("start", M));
    }
  }
  function E(M) {
    if (Sa(M), !p) {
      var Y = M.clientX - g, H = M.clientY - v;
      p = Y * Y + H * H > m;
    }
    s.mouse("drag", M);
  }
  function A(M) {
    $e(M.view).on("mousemove.drag mouseup.drag", null), sp(M.view, p), Sa(M), s.mouse("end", M);
  }
  function N(M, Y) {
    if (l.call(this, M, Y)) {
      var H = M.changedTouches, R = a.call(this, M, Y), Z = H.length, J, at;
      for (J = 0; J < Z; ++J)
        (at = w(this, R, M, Y, H[J].identifier, H[J])) && (md(M), at("start", M, H[J]));
    }
  }
  function _(M) {
    var Y = M.changedTouches, H = Y.length, R, Z;
    for (R = 0; R < H; ++R)
      (Z = s[Y[R].identifier]) && (Sa(M), Z("drag", M, Y[R]));
  }
  function L(M) {
    var Y = M.changedTouches, H = Y.length, R, Z;
    for (y && clearTimeout(y), y = setTimeout(function() {
      y = null;
    }, 500), R = 0; R < H; ++R)
      (Z = s[Y[R].identifier]) && (md(M), Z("end", M, Y[R]));
  }
  function w(M, Y, H, R, Z, J) {
    var at = f.copy(), tt = mn(J || H, Y), ot, lt, C;
    if ((C = o.call(M, new Rd("beforestart", {
      sourceEvent: H,
      target: x,
      identifier: Z,
      active: d,
      x: tt[0],
      y: tt[1],
      dx: 0,
      dy: 0,
      dispatch: at
    }), R)) != null)
      return ot = C.x - tt[0] || 0, lt = C.y - tt[1] || 0, function V(O, B, X) {
        var $ = tt, P;
        switch (O) {
          case "start":
            s[Z] = V, P = d++;
            break;
          case "end":
            delete s[Z], --d;
          // falls through
          case "drag":
            tt = mn(X || B, Y), P = d;
            break;
        }
        at.call(
          O,
          M,
          new Rd(O, {
            sourceEvent: B,
            subject: C,
            target: x,
            identifier: Z,
            active: P,
            x: tt[0] + ot,
            y: tt[1] + lt,
            dx: tt[0] - $[0],
            dy: tt[1] - $[1],
            dispatch: at
          }),
          R
        );
      };
  }
  return x.filter = function(M) {
    return arguments.length ? (l = typeof M == "function" ? M : Yc(!!M), x) : l;
  }, x.container = function(M) {
    return arguments.length ? (a = typeof M == "function" ? M : Yc(M), x) : a;
  }, x.subject = function(M) {
    return arguments.length ? (o = typeof M == "function" ? M : Yc(M), x) : o;
  }, x.touchable = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : Yc(!!M), x) : r;
  }, x.on = function() {
    var M = f.on.apply(f, arguments);
    return M === f ? x : M;
  }, x.clickDistance = function(M) {
    return arguments.length ? (m = (M = +M) * M, x) : Math.sqrt(m);
  }, x;
}
function Ra(l, a, o) {
  l.prototype = a.prototype = o, o.constructor = l;
}
function Fu(l, a) {
  var o = Object.create(l.prototype);
  for (var r in a) o[r] = a[r];
  return o;
}
function Xl() {
}
var bi = 0.7, Ta = 1 / bi, Ea = "\\s*([+-]?\\d+)\\s*", qu = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", jE = /^#([0-9a-f]{3,8})$/, qE = new RegExp(`^rgb\\(${Ea},${Ea},${Ea}\\)$`), XE = new RegExp(`^rgb\\(${Un},${Un},${Un}\\)$`), ZE = new RegExp(`^rgba\\(${Ea},${Ea},${Ea},${qu}\\)$`), GE = new RegExp(`^rgba\\(${Un},${Un},${Un},${qu}\\)$`), QE = new RegExp(`^hsl\\(${qu},${Un},${Un}\\)$`), KE = new RegExp(`^hsla\\(${qu},${Un},${Un},${qu}\\)$`), Vy = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ra(Xl, Si, {
  copy(l) {
    return Object.assign(new this.constructor(), this, l);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Yy,
  // Deprecated! Use color.formatHex.
  formatHex: Yy,
  formatHex8: $E,
  formatHsl: IE,
  formatRgb: jy,
  toString: jy
});
function Yy() {
  return this.rgb().formatHex();
}
function $E() {
  return this.rgb().formatHex8();
}
function IE() {
  return dp(this).formatHsl();
}
function jy() {
  return this.rgb().formatRgb();
}
function Si(l) {
  var a, o;
  return l = (l + "").trim().toLowerCase(), (a = jE.exec(l)) ? (o = a[1].length, a = parseInt(a[1], 16), o === 6 ? qy(a) : o === 3 ? new he(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : o === 8 ? jc(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : o === 4 ? jc(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = qE.exec(l)) ? new he(a[1], a[2], a[3], 1) : (a = XE.exec(l)) ? new he(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = ZE.exec(l)) ? jc(a[1], a[2], a[3], a[4]) : (a = GE.exec(l)) ? jc(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = QE.exec(l)) ? Gy(a[1], a[2] / 100, a[3] / 100, 1) : (a = KE.exec(l)) ? Gy(a[1], a[2] / 100, a[3] / 100, a[4]) : Vy.hasOwnProperty(l) ? qy(Vy[l]) : l === "transparent" ? new he(NaN, NaN, NaN, 0) : null;
}
function qy(l) {
  return new he(l >> 16 & 255, l >> 8 & 255, l & 255, 1);
}
function jc(l, a, o, r) {
  return r <= 0 && (l = a = o = NaN), new he(l, a, o, r);
}
function kd(l) {
  return l instanceof Xl || (l = Si(l)), l ? (l = l.rgb(), new he(l.r, l.g, l.b, l.opacity)) : new he();
}
function Hd(l, a, o, r) {
  return arguments.length === 1 ? kd(l) : new he(l, a, o, r ?? 1);
}
function he(l, a, o, r) {
  this.r = +l, this.g = +a, this.b = +o, this.opacity = +r;
}
Ra(he, Hd, Fu(Xl, {
  brighter(l) {
    return l = l == null ? Ta : Math.pow(Ta, l), new he(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? bi : Math.pow(bi, l), new he(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new he(vi(this.r), vi(this.g), vi(this.b), tr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xy,
  // Deprecated! Use color.formatHex.
  formatHex: Xy,
  formatHex8: JE,
  formatRgb: Zy,
  toString: Zy
}));
function Xy() {
  return `#${yi(this.r)}${yi(this.g)}${yi(this.b)}`;
}
function JE() {
  return `#${yi(this.r)}${yi(this.g)}${yi(this.b)}${yi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Zy() {
  const l = tr(this.opacity);
  return `${l === 1 ? "rgb(" : "rgba("}${vi(this.r)}, ${vi(this.g)}, ${vi(this.b)}${l === 1 ? ")" : `, ${l})`}`;
}
function tr(l) {
  return isNaN(l) ? 1 : Math.max(0, Math.min(1, l));
}
function vi(l) {
  return Math.max(0, Math.min(255, Math.round(l) || 0));
}
function yi(l) {
  return l = vi(l), (l < 16 ? "0" : "") + l.toString(16);
}
function Gy(l, a, o, r) {
  return r <= 0 ? l = a = o = NaN : o <= 0 || o >= 1 ? l = a = NaN : a <= 0 && (l = NaN), new yn(l, a, o, r);
}
function dp(l) {
  if (l instanceof yn) return new yn(l.h, l.s, l.l, l.opacity);
  if (l instanceof Xl || (l = Si(l)), !l) return new yn();
  if (l instanceof yn) return l;
  l = l.rgb();
  var a = l.r / 255, o = l.g / 255, r = l.b / 255, s = Math.min(a, o, r), f = Math.max(a, o, r), d = NaN, g = f - s, v = (f + s) / 2;
  return g ? (a === f ? d = (o - r) / g + (o < r) * 6 : o === f ? d = (r - a) / g + 2 : d = (a - o) / g + 4, g /= v < 0.5 ? f + s : 2 - f - s, d *= 60) : g = v > 0 && v < 1 ? 0 : d, new yn(d, g, v, l.opacity);
}
function kE(l, a, o, r) {
  return arguments.length === 1 ? dp(l) : new yn(l, a, o, r ?? 1);
}
function yn(l, a, o, r) {
  this.h = +l, this.s = +a, this.l = +o, this.opacity = +r;
}
Ra(yn, kE, Fu(Xl, {
  brighter(l) {
    return l = l == null ? Ta : Math.pow(Ta, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? bi : Math.pow(bi, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  rgb() {
    var l = this.h % 360 + (this.h < 0) * 360, a = isNaN(l) || isNaN(this.s) ? 0 : this.s, o = this.l, r = o + (o < 0.5 ? o : 1 - o) * a, s = 2 * o - r;
    return new he(
      yd(l >= 240 ? l - 240 : l + 120, s, r),
      yd(l, s, r),
      yd(l < 120 ? l + 240 : l - 120, s, r),
      this.opacity
    );
  },
  clamp() {
    return new yn(Qy(this.h), qc(this.s), qc(this.l), tr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const l = tr(this.opacity);
    return `${l === 1 ? "hsl(" : "hsla("}${Qy(this.h)}, ${qc(this.s) * 100}%, ${qc(this.l) * 100}%${l === 1 ? ")" : `, ${l})`}`;
  }
}));
function Qy(l) {
  return l = (l || 0) % 360, l < 0 ? l + 360 : l;
}
function qc(l) {
  return Math.max(0, Math.min(1, l || 0));
}
function yd(l, a, o) {
  return (l < 60 ? a + (o - a) * l / 60 : l < 180 ? o : l < 240 ? a + (o - a) * (240 - l) / 60 : a) * 255;
}
const hp = Math.PI / 180, gp = 180 / Math.PI, er = 18, mp = 0.96422, yp = 1, vp = 0.82521, pp = 4 / 29, wa = 6 / 29, xp = 3 * wa * wa, FE = wa * wa * wa;
function bp(l) {
  if (l instanceof Vn) return new Vn(l.l, l.a, l.b, l.opacity);
  if (l instanceof il) return Sp(l);
  l instanceof he || (l = kd(l));
  var a = bd(l.r), o = bd(l.g), r = bd(l.b), s = vd((0.2225045 * a + 0.7168786 * o + 0.0606169 * r) / yp), f, d;
  return a === o && o === r ? f = d = s : (f = vd((0.4360747 * a + 0.3850649 * o + 0.1430804 * r) / mp), d = vd((0.0139322 * a + 0.0971045 * o + 0.7141733 * r) / vp)), new Vn(116 * s - 16, 500 * (f - s), 200 * (s - d), l.opacity);
}
function WE(l, a, o, r) {
  return arguments.length === 1 ? bp(l) : new Vn(l, a, o, r ?? 1);
}
function Vn(l, a, o, r) {
  this.l = +l, this.a = +a, this.b = +o, this.opacity = +r;
}
Ra(Vn, WE, Fu(Xl, {
  brighter(l) {
    return new Vn(this.l + er * (l ?? 1), this.a, this.b, this.opacity);
  },
  darker(l) {
    return new Vn(this.l - er * (l ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var l = (this.l + 16) / 116, a = isNaN(this.a) ? l : l + this.a / 500, o = isNaN(this.b) ? l : l - this.b / 200;
    return a = mp * pd(a), l = yp * pd(l), o = vp * pd(o), new he(
      xd(3.1338561 * a - 1.6168667 * l - 0.4906146 * o),
      xd(-0.9787684 * a + 1.9161415 * l + 0.033454 * o),
      xd(0.0719453 * a - 0.2289914 * l + 1.4052427 * o),
      this.opacity
    );
  }
}));
function vd(l) {
  return l > FE ? Math.pow(l, 1 / 3) : l / xp + pp;
}
function pd(l) {
  return l > wa ? l * l * l : xp * (l - pp);
}
function xd(l) {
  return 255 * (l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055);
}
function bd(l) {
  return (l /= 255) <= 0.04045 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4);
}
function PE(l) {
  if (l instanceof il) return new il(l.h, l.c, l.l, l.opacity);
  if (l instanceof Vn || (l = bp(l)), l.a === 0 && l.b === 0) return new il(NaN, 0 < l.l && l.l < 100 ? 0 : NaN, l.l, l.opacity);
  var a = Math.atan2(l.b, l.a) * gp;
  return new il(a < 0 ? a + 360 : a, Math.sqrt(l.a * l.a + l.b * l.b), l.l, l.opacity);
}
function tw(l, a, o, r) {
  return arguments.length === 1 ? PE(l) : new il(l, a, o, r ?? 1);
}
function il(l, a, o, r) {
  this.h = +l, this.c = +a, this.l = +o, this.opacity = +r;
}
function Sp(l) {
  if (isNaN(l.h)) return new Vn(l.l, 0, 0, l.opacity);
  var a = l.h * hp;
  return new Vn(l.l, Math.cos(a) * l.c, Math.sin(a) * l.c, l.opacity);
}
Ra(il, tw, Fu(Xl, {
  brighter(l) {
    return new il(this.h, this.c, this.l + er * (l ?? 1), this.opacity);
  },
  darker(l) {
    return new il(this.h, this.c, this.l - er * (l ?? 1), this.opacity);
  },
  rgb() {
    return Sp(this).rgb();
  }
}));
var Ep = -0.14861, Fd = 1.78277, Wd = -0.29227, hr = -0.90649, Xu = 1.97294, Ky = Xu * hr, $y = Xu * Fd, Iy = Fd * Wd - hr * Ep;
function ew(l) {
  if (l instanceof pi) return new pi(l.h, l.s, l.l, l.opacity);
  l instanceof he || (l = kd(l));
  var a = l.r / 255, o = l.g / 255, r = l.b / 255, s = (Iy * r + Ky * a - $y * o) / (Iy + Ky - $y), f = r - s, d = (Xu * (o - s) - Wd * f) / hr, g = Math.sqrt(d * d + f * f) / (Xu * s * (1 - s)), v = g ? Math.atan2(d, f) * gp - 120 : NaN;
  return new pi(v < 0 ? v + 360 : v, g, s, l.opacity);
}
function Bd(l, a, o, r) {
  return arguments.length === 1 ? ew(l) : new pi(l, a, o, r ?? 1);
}
function pi(l, a, o, r) {
  this.h = +l, this.s = +a, this.l = +o, this.opacity = +r;
}
Ra(pi, Bd, Fu(Xl, {
  brighter(l) {
    return l = l == null ? Ta : Math.pow(Ta, l), new pi(this.h, this.s, this.l * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? bi : Math.pow(bi, l), new pi(this.h, this.s, this.l * l, this.opacity);
  },
  rgb() {
    var l = isNaN(this.h) ? 0 : (this.h + 120) * hp, a = +this.l, o = isNaN(this.s) ? 0 : this.s * a * (1 - a), r = Math.cos(l), s = Math.sin(l);
    return new he(
      255 * (a + o * (Ep * r + Fd * s)),
      255 * (a + o * (Wd * r + hr * s)),
      255 * (a + o * (Xu * r)),
      this.opacity
    );
  }
}));
var gr = (l) => () => l;
function wp(l, a) {
  return function(o) {
    return l + o * a;
  };
}
function nw(l, a, o) {
  return l = Math.pow(l, o), a = Math.pow(a, o) - l, o = 1 / o, function(r) {
    return Math.pow(l + r * a, o);
  };
}
function lw(l, a) {
  var o = a - l;
  return o ? wp(l, o > 180 || o < -180 ? o - 360 * Math.round(o / 360) : o) : gr(isNaN(l) ? a : l);
}
function iw(l) {
  return (l = +l) == 1 ? _a : function(a, o) {
    return o - a ? nw(a, o, l) : gr(isNaN(a) ? o : a);
  };
}
function _a(l, a) {
  var o = a - l;
  return o ? wp(l, o) : gr(isNaN(l) ? a : l);
}
var nr = (function l(a) {
  var o = iw(a);
  function r(s, f) {
    var d = o((s = Hd(s)).r, (f = Hd(f)).r), g = o(s.g, f.g), v = o(s.b, f.b), p = _a(s.opacity, f.opacity);
    return function(y) {
      return s.r = d(y), s.g = g(y), s.b = v(y), s.opacity = p(y), s + "";
    };
  }
  return r.gamma = l, r;
})(1);
function aw(l, a) {
  a || (a = []);
  var o = l ? Math.min(a.length, l.length) : 0, r = a.slice(), s;
  return function(f) {
    for (s = 0; s < o; ++s) r[s] = l[s] * (1 - f) + a[s] * f;
    return r;
  };
}
function uw(l) {
  return ArrayBuffer.isView(l) && !(l instanceof DataView);
}
function ow(l, a) {
  var o = a ? a.length : 0, r = l ? Math.min(o, l.length) : 0, s = new Array(r), f = new Array(o), d;
  for (d = 0; d < r; ++d) s[d] = Vu(l[d], a[d]);
  for (; d < o; ++d) f[d] = a[d];
  return function(g) {
    for (d = 0; d < r; ++d) f[d] = s[d](g);
    return f;
  };
}
function cw(l, a) {
  var o = /* @__PURE__ */ new Date();
  return l = +l, a = +a, function(r) {
    return o.setTime(l * (1 - r) + a * r), o;
  };
}
function Ln(l, a) {
  return l = +l, a = +a, function(o) {
    return l * (1 - o) + a * o;
  };
}
function rw(l, a) {
  var o = {}, r = {}, s;
  (l === null || typeof l != "object") && (l = {}), (a === null || typeof a != "object") && (a = {});
  for (s in a)
    s in l ? o[s] = Vu(l[s], a[s]) : r[s] = a[s];
  return function(f) {
    for (s in o) r[s] = o[s](f);
    return r;
  };
}
var Ld = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sd = new RegExp(Ld.source, "g");
function sw(l) {
  return function() {
    return l;
  };
}
function fw(l) {
  return function(a) {
    return l(a) + "";
  };
}
function _p(l, a) {
  var o = Ld.lastIndex = Sd.lastIndex = 0, r, s, f, d = -1, g = [], v = [];
  for (l = l + "", a = a + ""; (r = Ld.exec(l)) && (s = Sd.exec(a)); )
    (f = s.index) > o && (f = a.slice(o, f), g[d] ? g[d] += f : g[++d] = f), (r = r[0]) === (s = s[0]) ? g[d] ? g[d] += s : g[++d] = s : (g[++d] = null, v.push({ i: d, x: Ln(r, s) })), o = Sd.lastIndex;
  return o < a.length && (f = a.slice(o), g[d] ? g[d] += f : g[++d] = f), g.length < 2 ? v[0] ? fw(v[0].x) : sw(a) : (a = v.length, function(p) {
    for (var y = 0, m; y < a; ++y) g[(m = v[y]).i] = m.x(p);
    return g.join("");
  });
}
function Vu(l, a) {
  var o = typeof a, r;
  return a == null || o === "boolean" ? gr(a) : (o === "number" ? Ln : o === "string" ? (r = Si(a)) ? (a = r, nr) : _p : a instanceof Si ? nr : a instanceof Date ? cw : uw(a) ? aw : Array.isArray(a) ? ow : typeof a.valueOf != "function" && typeof a.toString != "function" || isNaN(a) ? rw : Ln)(l, a);
}
var Jy = 180 / Math.PI, Ud = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Np(l, a, o, r, s, f) {
  var d, g, v;
  return (d = Math.sqrt(l * l + a * a)) && (l /= d, a /= d), (v = l * o + a * r) && (o -= l * v, r -= a * v), (g = Math.sqrt(o * o + r * r)) && (o /= g, r /= g, v /= g), l * r < a * o && (l = -l, a = -a, v = -v, d = -d), {
    translateX: s,
    translateY: f,
    rotate: Math.atan2(a, l) * Jy,
    skewX: Math.atan(v) * Jy,
    scaleX: d,
    scaleY: g
  };
}
var Xc;
function dw(l) {
  const a = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(l + "");
  return a.isIdentity ? Ud : Np(a.a, a.b, a.c, a.d, a.e, a.f);
}
function hw(l) {
  return l == null || (Xc || (Xc = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xc.setAttribute("transform", l), !(l = Xc.transform.baseVal.consolidate())) ? Ud : (l = l.matrix, Np(l.a, l.b, l.c, l.d, l.e, l.f));
}
function Tp(l, a, o, r) {
  function s(p) {
    return p.length ? p.pop() + " " : "";
  }
  function f(p, y, m, x, S, E) {
    if (p !== m || y !== x) {
      var A = S.push("translate(", null, a, null, o);
      E.push({ i: A - 4, x: Ln(p, m) }, { i: A - 2, x: Ln(y, x) });
    } else (m || x) && S.push("translate(" + m + a + x + o);
  }
  function d(p, y, m, x) {
    p !== y ? (p - y > 180 ? y += 360 : y - p > 180 && (p += 360), x.push({ i: m.push(s(m) + "rotate(", null, r) - 2, x: Ln(p, y) })) : y && m.push(s(m) + "rotate(" + y + r);
  }
  function g(p, y, m, x) {
    p !== y ? x.push({ i: m.push(s(m) + "skewX(", null, r) - 2, x: Ln(p, y) }) : y && m.push(s(m) + "skewX(" + y + r);
  }
  function v(p, y, m, x, S, E) {
    if (p !== m || y !== x) {
      var A = S.push(s(S) + "scale(", null, ",", null, ")");
      E.push({ i: A - 4, x: Ln(p, m) }, { i: A - 2, x: Ln(y, x) });
    } else (m !== 1 || x !== 1) && S.push(s(S) + "scale(" + m + "," + x + ")");
  }
  return function(p, y) {
    var m = [], x = [];
    return p = l(p), y = l(y), f(p.translateX, p.translateY, y.translateX, y.translateY, m, x), d(p.rotate, y.rotate, m, x), g(p.skewX, y.skewX, m, x), v(p.scaleX, p.scaleY, y.scaleX, y.scaleY, m, x), p = y = null, function(S) {
      for (var E = -1, A = x.length, N; ++E < A; ) m[(N = x[E]).i] = N.x(S);
      return m.join("");
    };
  };
}
var gw = Tp(dw, "px, ", "px)", "deg)"), mw = Tp(hw, ", ", ")", ")"), yw = 1e-12;
function ky(l) {
  return ((l = Math.exp(l)) + 1 / l) / 2;
}
function vw(l) {
  return ((l = Math.exp(l)) - 1 / l) / 2;
}
function pw(l) {
  return ((l = Math.exp(2 * l)) - 1) / (l + 1);
}
var Jc = (function l(a, o, r) {
  function s(f, d) {
    var g = f[0], v = f[1], p = f[2], y = d[0], m = d[1], x = d[2], S = y - g, E = m - v, A = S * S + E * E, N, _;
    if (A < yw)
      _ = Math.log(x / p) / a, N = function(R) {
        return [
          g + R * S,
          v + R * E,
          p * Math.exp(a * R * _)
        ];
      };
    else {
      var L = Math.sqrt(A), w = (x * x - p * p + r * A) / (2 * p * o * L), M = (x * x - p * p - r * A) / (2 * x * o * L), Y = Math.log(Math.sqrt(w * w + 1) - w), H = Math.log(Math.sqrt(M * M + 1) - M);
      _ = (H - Y) / a, N = function(R) {
        var Z = R * _, J = ky(Y), at = p / (o * L) * (J * pw(a * Z + Y) - vw(Y));
        return [
          g + at * S,
          v + at * E,
          p * J / ky(a * Z + Y)
        ];
      };
    }
    return N.duration = Math.abs(_) * 1e3 * a / Math.SQRT2, N;
  }
  return s.rho = function(f) {
    var d = Math.max(1e-3, +f), g = d * d, v = g * g;
    return l(d, g, v);
  }, s;
})(Math.SQRT2, 2, 4);
function Mp(l) {
  return (function a(o) {
    o = +o;
    function r(s, f) {
      var d = l((s = Bd(s)).h, (f = Bd(f)).h), g = _a(s.s, f.s), v = _a(s.l, f.l), p = _a(s.opacity, f.opacity);
      return function(y) {
        return s.h = d(y), s.s = g(y), s.l = v(Math.pow(y, o)), s.opacity = p(y), s + "";
      };
    }
    return r.gamma = a, r;
  })(1);
}
Mp(lw);
Mp(_a);
var Ma = 0, Lu = 0, Hu = 0, Cp = 1e3, lr, Uu, ir = 0, Ei = 0, mr = 0, Zu = typeof performance == "object" && performance.now ? performance : Date, zp = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(l) {
  setTimeout(l, 17);
};
function Pd() {
  return Ei || (zp(xw), Ei = Zu.now() + mr);
}
function xw() {
  Ei = 0;
}
function ar() {
  this._call = this._time = this._next = null;
}
ar.prototype = Ap.prototype = {
  constructor: ar,
  restart: function(l, a, o) {
    if (typeof l != "function") throw new TypeError("callback is not a function");
    o = (o == null ? Pd() : +o) + (a == null ? 0 : +a), !this._next && Uu !== this && (Uu ? Uu._next = this : lr = this, Uu = this), this._call = l, this._time = o, Vd();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Vd());
  }
};
function Ap(l, a, o) {
  var r = new ar();
  return r.restart(l, a, o), r;
}
function bw() {
  Pd(), ++Ma;
  for (var l = lr, a; l; )
    (a = Ei - l._time) >= 0 && l._call.call(void 0, a), l = l._next;
  --Ma;
}
function Fy() {
  Ei = (ir = Zu.now()) + mr, Ma = Lu = 0;
  try {
    bw();
  } finally {
    Ma = 0, Ew(), Ei = 0;
  }
}
function Sw() {
  var l = Zu.now(), a = l - ir;
  a > Cp && (mr -= a, ir = l);
}
function Ew() {
  for (var l, a = lr, o, r = 1 / 0; a; )
    a._call ? (r > a._time && (r = a._time), l = a, a = a._next) : (o = a._next, a._next = null, a = l ? l._next = o : lr = o);
  Uu = l, Vd(r);
}
function Vd(l) {
  if (!Ma) {
    Lu && (Lu = clearTimeout(Lu));
    var a = l - Ei;
    a > 24 ? (l < 1 / 0 && (Lu = setTimeout(Fy, Math.ceil(l - Zu.now() - mr) + 1)), Hu && (Hu = clearInterval(Hu))) : (Hu || (ir = Zu.now(), Hu = setInterval(Sw, Cp)), Ma = 1, zp(Fy));
  }
}
function Wy(l, a, o) {
  var r = new ar();
  return a = a == null ? 0 : +a, r.restart((s) => {
    r.stop(), l(s + a);
  }, a, o), r;
}
function ww(l) {
  return ((l *= 2) <= 1 ? l * l * l : (l -= 2) * l * l + 2) / 2;
}
var th = 3;
(function l(a) {
  a = +a;
  function o(r) {
    return Math.pow(r, a);
  }
  return o.exponent = l, o;
})(th);
(function l(a) {
  a = +a;
  function o(r) {
    return 1 - Math.pow(1 - r, a);
  }
  return o.exponent = l, o;
})(th);
(function l(a) {
  a = +a;
  function o(r) {
    return ((r *= 2) <= 1 ? Math.pow(r, a) : 2 - Math.pow(2 - r, a)) / 2;
  }
  return o.exponent = l, o;
})(th);
function ur(l) {
  return (Math.pow(2, -10 * l) - 9765625e-10) * 1.0009775171065494;
}
var eh = 1.70158;
(function l(a) {
  a = +a;
  function o(r) {
    return (r = +r) * r * (a * (r - 1) + r);
  }
  return o.overshoot = l, o;
})(eh);
(function l(a) {
  a = +a;
  function o(r) {
    return --r * r * ((r + 1) * a + r) + 1;
  }
  return o.overshoot = l, o;
})(eh);
(function l(a) {
  a = +a;
  function o(r) {
    return ((r *= 2) < 1 ? r * r * ((a + 1) * r - a) : (r -= 2) * r * ((a + 1) * r + a) + 2) / 2;
  }
  return o.overshoot = l, o;
})(eh);
var Ca = 2 * Math.PI, nh = 1, lh = 0.3;
(function l(a, o) {
  var r = Math.asin(1 / (a = Math.max(1, a))) * (o /= Ca);
  function s(f) {
    return a * ur(- --f) * Math.sin((r - f) / o);
  }
  return s.amplitude = function(f) {
    return l(f, o * Ca);
  }, s.period = function(f) {
    return l(a, f);
  }, s;
})(nh, lh);
(function l(a, o) {
  var r = Math.asin(1 / (a = Math.max(1, a))) * (o /= Ca);
  function s(f) {
    return 1 - a * ur(f = +f) * Math.sin((f + r) / o);
  }
  return s.amplitude = function(f) {
    return l(f, o * Ca);
  }, s.period = function(f) {
    return l(a, f);
  }, s;
})(nh, lh);
(function l(a, o) {
  var r = Math.asin(1 / (a = Math.max(1, a))) * (o /= Ca);
  function s(f) {
    return ((f = f * 2 - 1) < 0 ? a * ur(-f) * Math.sin((r - f) / o) : 2 - a * ur(f) * Math.sin((r + f) / o)) / 2;
  }
  return s.amplitude = function(f) {
    return l(f, o * Ca);
  }, s.period = function(f) {
    return l(a, f);
  }, s;
})(nh, lh);
var _w = fr("start", "end", "cancel", "interrupt"), Nw = [], Op = 0, Py = 1, Yd = 2, kc = 3, tv = 4, jd = 5, Fc = 6;
function yr(l, a, o, r, s, f) {
  var d = l.__transition;
  if (!d) l.__transition = {};
  else if (o in d) return;
  Tw(l, o, {
    name: a,
    index: r,
    // For context during callback.
    group: s,
    // For context during callback.
    on: _w,
    tween: Nw,
    time: f.time,
    delay: f.delay,
    duration: f.duration,
    ease: f.ease,
    timer: null,
    state: Op
  });
}
function ih(l, a) {
  var o = bn(l, a);
  if (o.state > Op) throw new Error("too late; already scheduled");
  return o;
}
function Yn(l, a) {
  var o = bn(l, a);
  if (o.state > kc) throw new Error("too late; already running");
  return o;
}
function bn(l, a) {
  var o = l.__transition;
  if (!o || !(o = o[a])) throw new Error("transition not found");
  return o;
}
function Tw(l, a, o) {
  var r = l.__transition, s;
  r[a] = o, o.timer = Ap(f, 0, o.time);
  function f(p) {
    o.state = Py, o.timer.restart(d, o.delay, o.time), o.delay <= p && d(p - o.delay);
  }
  function d(p) {
    var y, m, x, S;
    if (o.state !== Py) return v();
    for (y in r)
      if (S = r[y], S.name === o.name) {
        if (S.state === kc) return Wy(d);
        S.state === tv ? (S.state = Fc, S.timer.stop(), S.on.call("interrupt", l, l.__data__, S.index, S.group), delete r[y]) : +y < a && (S.state = Fc, S.timer.stop(), S.on.call("cancel", l, l.__data__, S.index, S.group), delete r[y]);
      }
    if (Wy(function() {
      o.state === kc && (o.state = tv, o.timer.restart(g, o.delay, o.time), g(p));
    }), o.state = Yd, o.on.call("start", l, l.__data__, o.index, o.group), o.state === Yd) {
      for (o.state = kc, s = new Array(x = o.tween.length), y = 0, m = -1; y < x; ++y)
        (S = o.tween[y].value.call(l, l.__data__, o.index, o.group)) && (s[++m] = S);
      s.length = m + 1;
    }
  }
  function g(p) {
    for (var y = p < o.duration ? o.ease.call(null, p / o.duration) : (o.timer.restart(v), o.state = jd, 1), m = -1, x = s.length; ++m < x; )
      s[m].call(l, y);
    o.state === jd && (o.on.call("end", l, l.__data__, o.index, o.group), v());
  }
  function v() {
    o.state = Fc, o.timer.stop(), delete r[a];
    for (var p in r) return;
    delete l.__transition;
  }
}
function Wc(l, a) {
  var o = l.__transition, r, s, f = !0, d;
  if (o) {
    a = a == null ? null : a + "";
    for (d in o) {
      if ((r = o[d]).name !== a) {
        f = !1;
        continue;
      }
      s = r.state > Yd && r.state < jd, r.state = Fc, r.timer.stop(), r.on.call(s ? "interrupt" : "cancel", l, l.__data__, r.index, r.group), delete o[d];
    }
    f && delete l.__transition;
  }
}
function Mw(l) {
  return this.each(function() {
    Wc(this, l);
  });
}
function Cw(l, a) {
  var o, r;
  return function() {
    var s = Yn(this, l), f = s.tween;
    if (f !== o) {
      r = o = f;
      for (var d = 0, g = r.length; d < g; ++d)
        if (r[d].name === a) {
          r = r.slice(), r.splice(d, 1);
          break;
        }
    }
    s.tween = r;
  };
}
function zw(l, a, o) {
  var r, s;
  if (typeof o != "function") throw new Error();
  return function() {
    var f = Yn(this, l), d = f.tween;
    if (d !== r) {
      s = (r = d).slice();
      for (var g = { name: a, value: o }, v = 0, p = s.length; v < p; ++v)
        if (s[v].name === a) {
          s[v] = g;
          break;
        }
      v === p && s.push(g);
    }
    f.tween = s;
  };
}
function Aw(l, a) {
  var o = this._id;
  if (l += "", arguments.length < 2) {
    for (var r = bn(this.node(), o).tween, s = 0, f = r.length, d; s < f; ++s)
      if ((d = r[s]).name === l)
        return d.value;
    return null;
  }
  return this.each((a == null ? Cw : zw)(o, l, a));
}
function ah(l, a, o) {
  var r = l._id;
  return l.each(function() {
    var s = Yn(this, r);
    (s.value || (s.value = {}))[a] = o.apply(this, arguments);
  }), function(s) {
    return bn(s, r).value[a];
  };
}
function Dp(l, a) {
  var o;
  return (typeof a == "number" ? Ln : a instanceof Si ? nr : (o = Si(a)) ? (a = o, nr) : _p)(l, a);
}
function Ow(l) {
  return function() {
    this.removeAttribute(l);
  };
}
function Dw(l) {
  return function() {
    this.removeAttributeNS(l.space, l.local);
  };
}
function Rw(l, a, o) {
  var r, s = o + "", f;
  return function() {
    var d = this.getAttribute(l);
    return d === s ? null : d === r ? f : f = a(r = d, o);
  };
}
function Hw(l, a, o) {
  var r, s = o + "", f;
  return function() {
    var d = this.getAttributeNS(l.space, l.local);
    return d === s ? null : d === r ? f : f = a(r = d, o);
  };
}
function Bw(l, a, o) {
  var r, s, f;
  return function() {
    var d, g = o(this), v;
    return g == null ? void this.removeAttribute(l) : (d = this.getAttribute(l), v = g + "", d === v ? null : d === r && v === s ? f : (s = v, f = a(r = d, g)));
  };
}
function Lw(l, a, o) {
  var r, s, f;
  return function() {
    var d, g = o(this), v;
    return g == null ? void this.removeAttributeNS(l.space, l.local) : (d = this.getAttributeNS(l.space, l.local), v = g + "", d === v ? null : d === r && v === s ? f : (s = v, f = a(r = d, g)));
  };
}
function Uw(l, a) {
  var o = dr(l), r = o === "transform" ? mw : Dp;
  return this.attrTween(l, typeof a == "function" ? (o.local ? Lw : Bw)(o, r, ah(this, "attr." + l, a)) : a == null ? (o.local ? Dw : Ow)(o) : (o.local ? Hw : Rw)(o, r, a));
}
function Vw(l, a) {
  return function(o) {
    this.setAttribute(l, a.call(this, o));
  };
}
function Yw(l, a) {
  return function(o) {
    this.setAttributeNS(l.space, l.local, a.call(this, o));
  };
}
function jw(l, a) {
  var o, r;
  function s() {
    var f = a.apply(this, arguments);
    return f !== r && (o = (r = f) && Yw(l, f)), o;
  }
  return s._value = a, s;
}
function qw(l, a) {
  var o, r;
  function s() {
    var f = a.apply(this, arguments);
    return f !== r && (o = (r = f) && Vw(l, f)), o;
  }
  return s._value = a, s;
}
function Xw(l, a) {
  var o = "attr." + l;
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (a == null) return this.tween(o, null);
  if (typeof a != "function") throw new Error();
  var r = dr(l);
  return this.tween(o, (r.local ? jw : qw)(r, a));
}
function Zw(l, a) {
  return function() {
    ih(this, l).delay = +a.apply(this, arguments);
  };
}
function Gw(l, a) {
  return a = +a, function() {
    ih(this, l).delay = a;
  };
}
function Qw(l) {
  var a = this._id;
  return arguments.length ? this.each((typeof l == "function" ? Zw : Gw)(a, l)) : bn(this.node(), a).delay;
}
function Kw(l, a) {
  return function() {
    Yn(this, l).duration = +a.apply(this, arguments);
  };
}
function $w(l, a) {
  return a = +a, function() {
    Yn(this, l).duration = a;
  };
}
function Iw(l) {
  var a = this._id;
  return arguments.length ? this.each((typeof l == "function" ? Kw : $w)(a, l)) : bn(this.node(), a).duration;
}
function Jw(l, a) {
  if (typeof a != "function") throw new Error();
  return function() {
    Yn(this, l).ease = a;
  };
}
function kw(l) {
  var a = this._id;
  return arguments.length ? this.each(Jw(a, l)) : bn(this.node(), a).ease;
}
function Fw(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    if (typeof o != "function") throw new Error();
    Yn(this, l).ease = o;
  };
}
function Ww(l) {
  if (typeof l != "function") throw new Error();
  return this.each(Fw(this._id, l));
}
function Pw(l) {
  typeof l != "function" && (l = Pv(l));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var f = a[s], d = f.length, g = r[s] = [], v, p = 0; p < d; ++p)
      (v = f[p]) && l.call(v, v.__data__, p, f) && g.push(v);
  return new cl(r, this._parents, this._name, this._id);
}
function t_(l) {
  if (l._id !== this._id) throw new Error();
  for (var a = this._groups, o = l._groups, r = a.length, s = o.length, f = Math.min(r, s), d = new Array(r), g = 0; g < f; ++g)
    for (var v = a[g], p = o[g], y = v.length, m = d[g] = new Array(y), x, S = 0; S < y; ++S)
      (x = v[S] || p[S]) && (m[S] = x);
  for (; g < r; ++g)
    d[g] = a[g];
  return new cl(d, this._parents, this._name, this._id);
}
function e_(l) {
  return (l + "").trim().split(/^|\s+/).every(function(a) {
    var o = a.indexOf(".");
    return o >= 0 && (a = a.slice(0, o)), !a || a === "start";
  });
}
function n_(l, a, o) {
  var r, s, f = e_(a) ? ih : Yn;
  return function() {
    var d = f(this, l), g = d.on;
    g !== r && (s = (r = g).copy()).on(a, o), d.on = s;
  };
}
function l_(l, a) {
  var o = this._id;
  return arguments.length < 2 ? bn(this.node(), o).on.on(l) : this.each(n_(o, l, a));
}
function i_(l) {
  return function() {
    var a = this.parentNode;
    for (var o in this.__transition) if (+o !== l) return;
    a && a.removeChild(this);
  };
}
function a_() {
  return this.on("end.remove", i_(this._id));
}
function u_(l) {
  var a = this._name, o = this._id;
  typeof l != "function" && (l = Id(l));
  for (var r = this._groups, s = r.length, f = new Array(s), d = 0; d < s; ++d)
    for (var g = r[d], v = g.length, p = f[d] = new Array(v), y, m, x = 0; x < v; ++x)
      (y = g[x]) && (m = l.call(y, y.__data__, x, g)) && ("__data__" in y && (m.__data__ = y.__data__), p[x] = m, yr(p[x], a, o, x, p, bn(y, o)));
  return new cl(f, this._parents, a, o);
}
function o_(l) {
  var a = this._name, o = this._id;
  typeof l != "function" && (l = Wv(l));
  for (var r = this._groups, s = r.length, f = [], d = [], g = 0; g < s; ++g)
    for (var v = r[g], p = v.length, y, m = 0; m < p; ++m)
      if (y = v[m]) {
        for (var x = l.call(y, y.__data__, m, v), S, E = bn(y, o), A = 0, N = x.length; A < N; ++A)
          (S = x[A]) && yr(S, a, o, A, x, E);
        f.push(x), d.push(y);
      }
  return new cl(f, d, a, o);
}
var c_ = ku.prototype.constructor;
function r_() {
  return new c_(this._groups, this._parents);
}
function s_(l, a) {
  var o, r, s;
  return function() {
    var f = Na(this, l), d = (this.style.removeProperty(l), Na(this, l));
    return f === d ? null : f === o && d === r ? s : s = a(o = f, r = d);
  };
}
function Rp(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function f_(l, a, o) {
  var r, s = o + "", f;
  return function() {
    var d = Na(this, l);
    return d === s ? null : d === r ? f : f = a(r = d, o);
  };
}
function d_(l, a, o) {
  var r, s, f;
  return function() {
    var d = Na(this, l), g = o(this), v = g + "";
    return g == null && (v = g = (this.style.removeProperty(l), Na(this, l))), d === v ? null : d === r && v === s ? f : (s = v, f = a(r = d, g));
  };
}
function h_(l, a) {
  var o, r, s, f = "style." + a, d = "end." + f, g;
  return function() {
    var v = Yn(this, l), p = v.on, y = v.value[f] == null ? g || (g = Rp(a)) : void 0;
    (p !== o || s !== y) && (r = (o = p).copy()).on(d, s = y), v.on = r;
  };
}
function g_(l, a, o) {
  var r = (l += "") == "transform" ? gw : Dp;
  return a == null ? this.styleTween(l, s_(l, r)).on("end.style." + l, Rp(l)) : typeof a == "function" ? this.styleTween(l, d_(l, r, ah(this, "style." + l, a))).each(h_(this._id, l)) : this.styleTween(l, f_(l, r, a), o).on("end.style." + l, null);
}
function m_(l, a, o) {
  return function(r) {
    this.style.setProperty(l, a.call(this, r), o);
  };
}
function y_(l, a, o) {
  var r, s;
  function f() {
    var d = a.apply(this, arguments);
    return d !== s && (r = (s = d) && m_(l, d, o)), r;
  }
  return f._value = a, f;
}
function v_(l, a, o) {
  var r = "style." + (l += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (a == null) return this.tween(r, null);
  if (typeof a != "function") throw new Error();
  return this.tween(r, y_(l, a, o ?? ""));
}
function p_(l) {
  return function() {
    this.textContent = l;
  };
}
function x_(l) {
  return function() {
    var a = l(this);
    this.textContent = a ?? "";
  };
}
function b_(l) {
  return this.tween("text", typeof l == "function" ? x_(ah(this, "text", l)) : p_(l == null ? "" : l + ""));
}
function S_(l) {
  return function(a) {
    this.textContent = l.call(this, a);
  };
}
function E_(l) {
  var a, o;
  function r() {
    var s = l.apply(this, arguments);
    return s !== o && (a = (o = s) && S_(s)), a;
  }
  return r._value = l, r;
}
function w_(l) {
  var a = "text";
  if (arguments.length < 1) return (a = this.tween(a)) && a._value;
  if (l == null) return this.tween(a, null);
  if (typeof l != "function") throw new Error();
  return this.tween(a, E_(l));
}
function __() {
  for (var l = this._name, a = this._id, o = Hp(), r = this._groups, s = r.length, f = 0; f < s; ++f)
    for (var d = r[f], g = d.length, v, p = 0; p < g; ++p)
      if (v = d[p]) {
        var y = bn(v, a);
        yr(v, l, o, p, d, {
          time: y.time + y.delay + y.duration,
          delay: 0,
          duration: y.duration,
          ease: y.ease
        });
      }
  return new cl(r, this._parents, l, o);
}
function N_() {
  var l, a, o = this, r = o._id, s = o.size();
  return new Promise(function(f, d) {
    var g = { value: d }, v = { value: function() {
      --s === 0 && f();
    } };
    o.each(function() {
      var p = Yn(this, r), y = p.on;
      y !== l && (a = (l = y).copy(), a._.cancel.push(g), a._.interrupt.push(g), a._.end.push(v)), p.on = a;
    }), s === 0 && f();
  });
}
var T_ = 0;
function cl(l, a, o, r) {
  this._groups = l, this._parents = a, this._name = o, this._id = r;
}
function Hp() {
  return ++T_;
}
var ll = ku.prototype;
cl.prototype = {
  constructor: cl,
  select: u_,
  selectAll: o_,
  selectChild: ll.selectChild,
  selectChildren: ll.selectChildren,
  filter: Pw,
  merge: t_,
  selection: r_,
  transition: __,
  call: ll.call,
  nodes: ll.nodes,
  node: ll.node,
  size: ll.size,
  empty: ll.empty,
  each: ll.each,
  on: l_,
  attr: Uw,
  attrTween: Xw,
  style: g_,
  styleTween: v_,
  text: b_,
  textTween: w_,
  remove: a_,
  tween: Aw,
  delay: Qw,
  duration: Iw,
  ease: kw,
  easeVarying: Ww,
  end: N_,
  [Symbol.iterator]: ll[Symbol.iterator]
};
var M_ = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ww
};
function C_(l, a) {
  for (var o; !(o = l.__transition) || !(o = o[a]); )
    if (!(l = l.parentNode))
      throw new Error(`transition ${a} not found`);
  return o;
}
function z_(l) {
  var a, o;
  l instanceof cl ? (a = l._id, l = l._name) : (a = Hp(), (o = M_).time = Pd(), l = l == null ? null : l + "");
  for (var r = this._groups, s = r.length, f = 0; f < s; ++f)
    for (var d = r[f], g = d.length, v, p = 0; p < g; ++p)
      (v = d[p]) && yr(v, l, a, p, d, o || C_(v, a));
  return new cl(r, this._parents, l, a);
}
ku.prototype.interrupt = Mw;
ku.prototype.transition = z_;
var Zc = (l) => () => l;
function A_(l, {
  sourceEvent: a,
  target: o,
  transform: r,
  dispatch: s
}) {
  Object.defineProperties(this, {
    type: { value: l, enumerable: !0, configurable: !0 },
    sourceEvent: { value: a, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: s }
  });
}
function al(l, a, o) {
  this.k = l, this.x = a, this.y = o;
}
al.prototype = {
  constructor: al,
  scale: function(l) {
    return l === 1 ? this : new al(this.k * l, this.x, this.y);
  },
  translate: function(l, a) {
    return l === 0 & a === 0 ? this : new al(this.k, this.x + this.k * l, this.y + this.k * a);
  },
  apply: function(l) {
    return [l[0] * this.k + this.x, l[1] * this.k + this.y];
  },
  applyX: function(l) {
    return l * this.k + this.x;
  },
  applyY: function(l) {
    return l * this.k + this.y;
  },
  invert: function(l) {
    return [(l[0] - this.x) / this.k, (l[1] - this.y) / this.k];
  },
  invertX: function(l) {
    return (l - this.x) / this.k;
  },
  invertY: function(l) {
    return (l - this.y) / this.k;
  },
  rescaleX: function(l) {
    return l.copy().domain(l.range().map(this.invertX, this).map(l.invert, l));
  },
  rescaleY: function(l) {
    return l.copy().domain(l.range().map(this.invertY, this).map(l.invert, l));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var vr = new al(1, 0, 0);
Bp.prototype = al.prototype;
function Bp(l) {
  for (; !l.__zoom; ) if (!(l = l.parentNode)) return vr;
  return l.__zoom;
}
function Ed(l) {
  l.stopImmediatePropagation();
}
function Bu(l) {
  l.preventDefault(), l.stopImmediatePropagation();
}
function O_(l) {
  return (!l.ctrlKey || l.type === "wheel") && !l.button;
}
function D_() {
  var l = this;
  return l instanceof SVGElement ? (l = l.ownerSVGElement || l, l.hasAttribute("viewBox") ? (l = l.viewBox.baseVal, [[l.x, l.y], [l.x + l.width, l.y + l.height]]) : [[0, 0], [l.width.baseVal.value, l.height.baseVal.value]]) : [[0, 0], [l.clientWidth, l.clientHeight]];
}
function ev() {
  return this.__zoom || vr;
}
function R_(l) {
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * (l.ctrlKey ? 10 : 1);
}
function H_() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function B_(l, a, o) {
  var r = l.invertX(a[0][0]) - o[0][0], s = l.invertX(a[1][0]) - o[1][0], f = l.invertY(a[0][1]) - o[0][1], d = l.invertY(a[1][1]) - o[1][1];
  return l.translate(
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s),
    d > f ? (f + d) / 2 : Math.min(0, f) || Math.max(0, d)
  );
}
function Lp() {
  var l = O_, a = D_, o = B_, r = R_, s = H_, f = [0, 1 / 0], d = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], g = 250, v = Jc, p = fr("start", "zoom", "end"), y, m, x, S = 500, E = 150, A = 0, N = 10;
  function _(C) {
    C.property("__zoom", ev).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", J).on("dblclick.zoom", at).filter(s).on("touchstart.zoom", tt).on("touchmove.zoom", ot).on("touchend.zoom touchcancel.zoom", lt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(C, V, O, B) {
    var X = C.selection ? C.selection() : C;
    X.property("__zoom", ev), C !== X ? Y(C, V, O, B) : X.interrupt().each(function() {
      H(this, arguments).event(B).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, _.scaleBy = function(C, V, O, B) {
    _.scaleTo(C, function() {
      var X = this.__zoom.k, $ = typeof V == "function" ? V.apply(this, arguments) : V;
      return X * $;
    }, O, B);
  }, _.scaleTo = function(C, V, O, B) {
    _.transform(C, function() {
      var X = a.apply(this, arguments), $ = this.__zoom, P = O == null ? M(X) : typeof O == "function" ? O.apply(this, arguments) : O, it = $.invert(P), dt = typeof V == "function" ? V.apply(this, arguments) : V;
      return o(w(L($, dt), P, it), X, d);
    }, O, B);
  }, _.translateBy = function(C, V, O, B) {
    _.transform(C, function() {
      return o(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), a.apply(this, arguments), d);
    }, null, B);
  }, _.translateTo = function(C, V, O, B, X) {
    _.transform(C, function() {
      var $ = a.apply(this, arguments), P = this.__zoom, it = B == null ? M($) : typeof B == "function" ? B.apply(this, arguments) : B;
      return o(vr.translate(it[0], it[1]).scale(P.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), $, d);
    }, B, X);
  };
  function L(C, V) {
    return V = Math.max(f[0], Math.min(f[1], V)), V === C.k ? C : new al(V, C.x, C.y);
  }
  function w(C, V, O) {
    var B = V[0] - O[0] * C.k, X = V[1] - O[1] * C.k;
    return B === C.x && X === C.y ? C : new al(C.k, B, X);
  }
  function M(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function Y(C, V, O, B) {
    C.on("start.zoom", function() {
      H(this, arguments).event(B).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(B).end();
    }).tween("zoom", function() {
      var X = this, $ = arguments, P = H(X, $).event(B), it = a.apply(X, $), dt = O == null ? M(it) : typeof O == "function" ? O.apply(X, $) : O, xt = Math.max(it[1][0] - it[0][0], it[1][1] - it[0][1]), T = X.__zoom, F = typeof V == "function" ? V.apply(X, $) : V, st = v(T.invert(dt).concat(xt / T.k), F.invert(dt).concat(xt / F.k));
      return function(ut) {
        if (ut === 1) ut = F;
        else {
          var k = st(ut), ft = xt / k[2];
          ut = new al(ft, dt[0] - k[0] * ft, dt[1] - k[1] * ft);
        }
        P.zoom(null, ut);
      };
    });
  }
  function H(C, V, O) {
    return !O && C.__zooming || new R(C, V);
  }
  function R(C, V) {
    this.that = C, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = a.apply(C, V), this.taps = 0;
  }
  R.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, V) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var V = $e(this.that).datum();
      p.call(
        C,
        this.that,
        new A_(C, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: p
        }),
        V
      );
    }
  };
  function Z(C, ...V) {
    if (!l.apply(this, arguments)) return;
    var O = H(this, V).event(C), B = this.__zoom, X = Math.max(f[0], Math.min(f[1], B.k * Math.pow(2, r.apply(this, arguments)))), $ = mn(C);
    if (O.wheel)
      (O.mouse[0][0] !== $[0] || O.mouse[0][1] !== $[1]) && (O.mouse[1] = B.invert(O.mouse[0] = $)), clearTimeout(O.wheel);
    else {
      if (B.k === X) return;
      O.mouse = [$, B.invert($)], Wc(this), O.start();
    }
    Bu(C), O.wheel = setTimeout(P, E), O.zoom("mouse", o(w(L(B, X), O.mouse[0], O.mouse[1]), O.extent, d));
    function P() {
      O.wheel = null, O.end();
    }
  }
  function J(C, ...V) {
    if (x || !l.apply(this, arguments)) return;
    var O = C.currentTarget, B = H(this, V, !0).event(C), X = $e(C.view).on("mousemove.zoom", dt, !0).on("mouseup.zoom", xt, !0), $ = mn(C, O), P = C.clientX, it = C.clientY;
    rp(C.view), Ed(C), B.mouse = [$, this.__zoom.invert($)], Wc(this), B.start();
    function dt(T) {
      if (Bu(T), !B.moved) {
        var F = T.clientX - P, st = T.clientY - it;
        B.moved = F * F + st * st > A;
      }
      B.event(T).zoom("mouse", o(w(B.that.__zoom, B.mouse[0] = mn(T, O), B.mouse[1]), B.extent, d));
    }
    function xt(T) {
      X.on("mousemove.zoom mouseup.zoom", null), sp(T.view, B.moved), Bu(T), B.event(T).end();
    }
  }
  function at(C, ...V) {
    if (l.apply(this, arguments)) {
      var O = this.__zoom, B = mn(C.changedTouches ? C.changedTouches[0] : C, this), X = O.invert(B), $ = O.k * (C.shiftKey ? 0.5 : 2), P = o(w(L(O, $), B, X), a.apply(this, V), d);
      Bu(C), g > 0 ? $e(this).transition().duration(g).call(Y, P, B, C) : $e(this).call(_.transform, P, B, C);
    }
  }
  function tt(C, ...V) {
    if (l.apply(this, arguments)) {
      var O = C.touches, B = O.length, X = H(this, V, C.changedTouches.length === B).event(C), $, P, it, dt;
      for (Ed(C), P = 0; P < B; ++P)
        it = O[P], dt = mn(it, this), dt = [dt, this.__zoom.invert(dt), it.identifier], X.touch0 ? !X.touch1 && X.touch0[2] !== dt[2] && (X.touch1 = dt, X.taps = 0) : (X.touch0 = dt, $ = !0, X.taps = 1 + !!y);
      y && (y = clearTimeout(y)), $ && (X.taps < 2 && (m = dt[0], y = setTimeout(function() {
        y = null;
      }, S)), Wc(this), X.start());
    }
  }
  function ot(C, ...V) {
    if (this.__zooming) {
      var O = H(this, V).event(C), B = C.changedTouches, X = B.length, $, P, it, dt;
      for (Bu(C), $ = 0; $ < X; ++$)
        P = B[$], it = mn(P, this), O.touch0 && O.touch0[2] === P.identifier ? O.touch0[0] = it : O.touch1 && O.touch1[2] === P.identifier && (O.touch1[0] = it);
      if (P = O.that.__zoom, O.touch1) {
        var xt = O.touch0[0], T = O.touch0[1], F = O.touch1[0], st = O.touch1[1], ut = (ut = F[0] - xt[0]) * ut + (ut = F[1] - xt[1]) * ut, k = (k = st[0] - T[0]) * k + (k = st[1] - T[1]) * k;
        P = L(P, Math.sqrt(ut / k)), it = [(xt[0] + F[0]) / 2, (xt[1] + F[1]) / 2], dt = [(T[0] + st[0]) / 2, (T[1] + st[1]) / 2];
      } else if (O.touch0) it = O.touch0[0], dt = O.touch0[1];
      else return;
      O.zoom("touch", o(w(P, it, dt), O.extent, d));
    }
  }
  function lt(C, ...V) {
    if (this.__zooming) {
      var O = H(this, V).event(C), B = C.changedTouches, X = B.length, $, P;
      for (Ed(C), x && clearTimeout(x), x = setTimeout(function() {
        x = null;
      }, S), $ = 0; $ < X; ++$)
        P = B[$], O.touch0 && O.touch0[2] === P.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === P.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (P = mn(P, this), Math.hypot(m[0] - P[0], m[1] - P[1]) < N)) {
        var it = $e(this).on("dblclick.zoom");
        it && it.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Zc(+C), _) : r;
  }, _.filter = function(C) {
    return arguments.length ? (l = typeof C == "function" ? C : Zc(!!C), _) : l;
  }, _.touchable = function(C) {
    return arguments.length ? (s = typeof C == "function" ? C : Zc(!!C), _) : s;
  }, _.extent = function(C) {
    return arguments.length ? (a = typeof C == "function" ? C : Zc([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), _) : a;
  }, _.scaleExtent = function(C) {
    return arguments.length ? (f[0] = +C[0], f[1] = +C[1], _) : [f[0], f[1]];
  }, _.translateExtent = function(C) {
    return arguments.length ? (d[0][0] = +C[0][0], d[1][0] = +C[1][0], d[0][1] = +C[0][1], d[1][1] = +C[1][1], _) : [[d[0][0], d[0][1]], [d[1][0], d[1][1]]];
  }, _.constrain = function(C) {
    return arguments.length ? (o = C, _) : o;
  }, _.duration = function(C) {
    return arguments.length ? (g = +C, _) : g;
  }, _.interpolate = function(C) {
    return arguments.length ? (v = C, _) : v;
  }, _.on = function() {
    var C = p.on.apply(p, arguments);
    return C === p ? _ : C;
  }, _.clickDistance = function(C) {
    return arguments.length ? (A = (C = +C) * C, _) : Math.sqrt(A);
  }, _.tapDistance = function(C) {
    return arguments.length ? (N = +C, _) : N;
  }, _;
}
const xn = {
  error001: (l = "react") => `Seems like you have not used ${l === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${l}flow.dev/error#001`,
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (l) => `Node type "${l}" not found. Using fallback type "default".`,
  error004: () => "The parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (l) => `The old edge with id=${l} does not exist.`,
  error009: (l) => `Marker type "${l}" doesn't exist.`,
  error008: (l, { id: a, sourceHandle: o, targetHandle: r }) => `Couldn't create edge for ${l} handle id: "${l === "source" ? o : r}", edge id: ${a}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (l) => `Edge type "${l}" not found. Using fallback type "default".`,
  error012: (l) => `Node with id "${l}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (l = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${l}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  error016: (l) => `Edge with id "${l}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, Gu = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Up = ["Enter", " ", "Escape"], Vp = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: l, x: a, y: o }) => `Moved selected node ${l}. New position, x: ${a}, y: ${o}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var za;
(function(l) {
  l.Strict = "strict", l.Loose = "loose";
})(za || (za = {}));
var xi;
(function(l) {
  l.Free = "free", l.Vertical = "vertical", l.Horizontal = "horizontal";
})(xi || (xi = {}));
var Qu;
(function(l) {
  l.Partial = "partial", l.Full = "full";
})(Qu || (Qu = {}));
const Yp = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var ql;
(function(l) {
  l.Bezier = "default", l.Straight = "straight", l.Step = "step", l.SmoothStep = "smoothstep", l.SimpleBezier = "simplebezier";
})(ql || (ql = {}));
var or;
(function(l) {
  l.Arrow = "arrow", l.ArrowClosed = "arrowclosed";
})(or || (or = {}));
var pt;
(function(l) {
  l.Left = "left", l.Top = "top", l.Right = "right", l.Bottom = "bottom";
})(pt || (pt = {}));
const nv = {
  [pt.Left]: pt.Right,
  [pt.Right]: pt.Left,
  [pt.Top]: pt.Bottom,
  [pt.Bottom]: pt.Top
}, jp = (l) => !!l && typeof l == "object" && "id" in l && "source" in l && "target" in l, L_ = (l) => !!l && typeof l == "object" && "id" in l && "position" in l && !("source" in l) && !("target" in l), uh = (l) => !!l && typeof l == "object" && "id" in l && "internals" in l && !("source" in l) && !("target" in l), Wu = (l, a = [0, 0]) => {
  const { width: o, height: r } = Sn(l), s = l.origin ?? a, f = o * s[0], d = r * s[1];
  return {
    x: l.position.x - f,
    y: l.position.y - d
  };
}, U_ = (l, a = { nodeOrigin: [0, 0] }) => {
  if (l.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let o = !1;
  const r = l.reduce((s, f) => {
    const d = typeof f == "string";
    let g = !a.nodeLookup && !d ? f : void 0;
    return a.nodeLookup && (g = d ? a.nodeLookup.get(f) : uh(f) ? f : a.nodeLookup.get(f.id)), g ? (o = !0, pr(s, cr(g, a.nodeOrigin))) : s;
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return o ? xr(r) : { x: 0, y: 0, width: 0, height: 0 };
}, Pu = (l, a = {}) => {
  let o = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return l.forEach((s) => {
    (a.filter === void 0 || a.filter(s)) && (o = pr(o, cr(s)), r = !0);
  }), r ? xr(o) : { x: 0, y: 0, width: 0, height: 0 };
}, oh = (l, a, [o, r, s] = [0, 0, 1], f = !1, d = !1) => {
  const g = (a.x - o) / s, v = (a.y - r) / s, p = a.width / s, y = a.height / s, m = [];
  for (const x of l.values()) {
    const { measured: S, selectable: E = !0, hidden: A = !1 } = x;
    if (d && !E || A)
      continue;
    const N = S.width ?? x.width ?? x.initialWidth ?? 0, _ = S.height ?? x.height ?? x.initialHeight ?? 0, { x: L, y: w } = x.internals.positionAbsolute, M = Gp(g, v, p, y, L, w, N, _), Y = N * _, H = f && M > 0;
    (!x.internals.handleBounds || H || M >= Y || x.dragging) && m.push(x);
  }
  return m;
}, V_ = (l, a) => {
  const o = /* @__PURE__ */ new Set();
  return l.forEach((r) => {
    o.add(r.id);
  }), a.filter((r) => o.has(r.source) || o.has(r.target));
};
function Y_(l, a) {
  const o = /* @__PURE__ */ new Map(), r = a?.nodes ? new Set(a.nodes.map((s) => s.id)) : null;
  return l.forEach((s) => {
    let f;
    if (a?.includeHiddenNodes) {
      const { width: d, height: g } = Sn(s);
      f = d > 0 && g > 0;
    } else
      f = !!(s.measured.width && s.measured.height && !s.hidden);
    f && (!r || r.has(s.id)) && o.set(s.id, s);
  }), o;
}
async function j_({ nodes: l, width: a, height: o, panZoom: r, minZoom: s, maxZoom: f }, d) {
  if (l.size === 0)
    return !0;
  const g = Y_(l, d), v = Pu(g), p = rh(v, a, o, d?.minZoom ?? s, d?.maxZoom ?? f, d?.padding ?? 0.1);
  return await r.setViewport(p, {
    duration: d?.duration,
    ease: d?.ease,
    interpolate: d?.interpolate
  }), !0;
}
function qp({ nodeId: l, nextPosition: a, nodeLookup: o, nodeOrigin: r = [0, 0], nodeExtent: s, onError: f }) {
  const d = o.get(l), g = d.parentId ? o.get(d.parentId) : void 0, { x: v, y: p } = g ? g.internals.positionAbsolute : { x: 0, y: 0 }, y = d.origin ?? r;
  let m = d.extent || s;
  if (d.extent === "parent" && !d.expandParent)
    if (!g)
      f?.("005", xn.error005());
    else {
      const { width: S, height: E } = Sn(g);
      S && E && (m = [
        [v, p],
        [v + S, p + E]
      ]);
    }
  else g && _i(d.extent) && (m = [
    [d.extent[0][0] + v, d.extent[0][1] + p],
    [d.extent[1][0] + v, d.extent[1][1] + p]
  ]);
  const x = _i(m) ? wi(a, m, d.measured) : a;
  return (d.measured.width === void 0 || d.measured.height === void 0) && f?.("015", xn.error015()), {
    position: {
      x: x.x - v + (d.measured.width ?? 0) * y[0],
      y: x.y - p + (d.measured.height ?? 0) * y[1]
    },
    positionAbsolute: x
  };
}
async function q_({ nodesToRemove: l = [], edgesToRemove: a = [], nodes: o, edges: r, onBeforeDelete: s }) {
  const f = new Set(l.map((x) => x.id)), d = [];
  for (const x of o) {
    if (x.deletable === !1)
      continue;
    const S = f.has(x.id), E = !S && x.parentId && d.find((A) => A.id === x.parentId);
    (S || E) && d.push(x);
  }
  const g = new Set(a.map((x) => x.id)), v = r.filter((x) => x.deletable !== !1), y = V_(d, v);
  for (const x of v)
    g.has(x.id) && !y.find((E) => E.id === x.id) && y.push(x);
  if (!s)
    return {
      edges: y,
      nodes: d
    };
  const m = await s({
    nodes: d,
    edges: y
  });
  return typeof m == "boolean" ? m ? { edges: y, nodes: d } : { edges: [], nodes: [] } : m;
}
const Aa = (l, a = 0, o = 1) => Math.min(Math.max(l, a), o), wi = (l = { x: 0, y: 0 }, a, o) => ({
  x: Aa(l.x, a[0][0], a[1][0] - (o?.width ?? 0)),
  y: Aa(l.y, a[0][1], a[1][1] - (o?.height ?? 0))
});
function Xp(l, a, o) {
  const { width: r, height: s } = Sn(o), { x: f, y: d } = o.internals.positionAbsolute;
  return wi(l, [
    [f, d],
    [f + r, d + s]
  ], a);
}
const lv = (l, a, o) => l < a ? Aa(Math.abs(l - a), 1, a) / a : l > o ? -Aa(Math.abs(l - o), 1, a) / a : 0, ch = (l, a, o = 15, r = 40) => {
  const s = lv(l.x, r, a.width - r) * o, f = lv(l.y, r, a.height - r) * o;
  return [s, f];
}, pr = (l, a) => ({
  x: Math.min(l.x, a.x),
  y: Math.min(l.y, a.y),
  x2: Math.max(l.x2, a.x2),
  y2: Math.max(l.y2, a.y2)
}), qd = ({ x: l, y: a, width: o, height: r }) => ({
  x: l,
  y: a,
  x2: l + o,
  y2: a + r
}), xr = ({ x: l, y: a, x2: o, y2: r }) => ({
  x: l,
  y: a,
  width: o - l,
  height: r - a
}), Ku = (l, a = [0, 0]) => {
  const { x: o, y: r } = uh(l) ? l.internals.positionAbsolute : Wu(l, a);
  return {
    x: o,
    y: r,
    width: l.measured?.width ?? l.width ?? l.initialWidth ?? 0,
    height: l.measured?.height ?? l.height ?? l.initialHeight ?? 0
  };
}, cr = (l, a = [0, 0]) => {
  const { x: o, y: r } = uh(l) ? l.internals.positionAbsolute : Wu(l, a);
  return {
    x: o,
    y: r,
    x2: o + (l.measured?.width ?? l.width ?? l.initialWidth ?? 0),
    y2: r + (l.measured?.height ?? l.height ?? l.initialHeight ?? 0)
  };
}, Zp = (l, a) => xr(pr(qd(l), qd(a))), Gp = (l, a, o, r, s, f, d, g) => {
  const v = Math.max(0, Math.min(l + o, s + d) - Math.max(l, s)), p = Math.max(0, Math.min(a + r, f + g) - Math.max(a, f));
  return Math.ceil(v * p);
}, rr = (l, a) => Gp(l.x, l.y, l.width, l.height, a.x, a.y, a.width, a.height), iv = (l) => vn(l.width) && vn(l.height) && vn(l.x) && vn(l.y), vn = (l) => !isNaN(l) && isFinite(l), Qp = (l, a) => (o, r) => {
}, to = (l, a = [1, 1]) => ({
  x: a[0] * Math.round(l.x / a[0]),
  y: a[1] * Math.round(l.y / a[1])
}), eo = ({ x: l, y: a }, [o, r, s], f = !1, d = [1, 1]) => {
  const g = {
    x: (l - o) / s,
    y: (a - r) / s
  };
  return f ? to(g, d) : g;
}, Oa = ({ x: l, y: a }, [o, r, s]) => ({
  x: l * s + o,
  y: a * s + r
});
function xa(l, a) {
  if (typeof l == "number")
    return Math.floor((a - a / (1 + l)) * 0.5);
  if (typeof l == "string" && l.endsWith("px")) {
    const o = parseFloat(l);
    if (!Number.isNaN(o))
      return Math.floor(o);
  }
  if (typeof l == "string" && l.endsWith("%")) {
    const o = parseFloat(l);
    if (!Number.isNaN(o))
      return Math.floor(a * o * 0.01);
  }
  return console.error(`The padding value "${l}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function X_(l, a, o) {
  if (typeof l == "string" || typeof l == "number") {
    const r = xa(l, o), s = xa(l, a);
    return {
      top: r,
      right: s,
      bottom: r,
      left: s,
      x: s * 2,
      y: r * 2
    };
  }
  if (typeof l == "object") {
    const r = xa(l.top ?? l.y ?? 0, o), s = xa(l.bottom ?? l.y ?? 0, o), f = xa(l.left ?? l.x ?? 0, a), d = xa(l.right ?? l.x ?? 0, a);
    return { top: r, right: d, bottom: s, left: f, x: f + d, y: r + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Z_(l, a, o, r, s, f) {
  const { x: d, y: g } = Oa(l, [a, o, r]), { x: v, y: p } = Oa({ x: l.x + l.width, y: l.y + l.height }, [a, o, r]), y = s - v, m = f - p;
  return {
    left: Math.floor(d),
    top: Math.floor(g),
    right: Math.floor(y),
    bottom: Math.floor(m)
  };
}
const rh = (l, a, o, r, s, f) => {
  const d = X_(f, a, o), g = (a - d.x) / l.width, v = (o - d.y) / l.height, p = Math.min(g, v), y = Aa(p, r, s), m = l.x + l.width / 2, x = l.y + l.height / 2, S = a / 2 - m * y, E = o / 2 - x * y, A = Z_(l, S, E, y, a, o), N = {
    left: Math.min(A.left - d.left, 0),
    top: Math.min(A.top - d.top, 0),
    right: Math.min(A.right - d.right, 0),
    bottom: Math.min(A.bottom - d.bottom, 0)
  };
  return {
    x: S - N.left + N.right,
    y: E - N.top + N.bottom,
    zoom: y
  };
}, $u = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function _i(l) {
  return l != null && l !== "parent";
}
function Sn(l) {
  return {
    width: l.measured?.width ?? l.width ?? l.initialWidth ?? 0,
    height: l.measured?.height ?? l.height ?? l.initialHeight ?? 0
  };
}
function Kp(l) {
  return (l.measured?.width ?? l.width ?? l.initialWidth) !== void 0 && (l.measured?.height ?? l.height ?? l.initialHeight) !== void 0;
}
function $p(l, a = { width: 0, height: 0 }, o, r, s) {
  const f = { ...l }, d = r.get(o);
  if (d) {
    const g = d.origin || s;
    f.x += d.internals.positionAbsolute.x - (a.width ?? 0) * g[0], f.y += d.internals.positionAbsolute.y - (a.height ?? 0) * g[1];
  }
  return f;
}
function av(l, a) {
  if (l.size !== a.size)
    return !1;
  for (const o of l)
    if (!a.has(o))
      return !1;
  return !0;
}
function G_() {
  let l, a;
  return { promise: new Promise((r, s) => {
    l = r, a = s;
  }), resolve: l, reject: a };
}
function Q_(l) {
  return { ...Vp, ...l || {} };
}
function Ip(l) {
  return l === null ? null : l ? "valid" : "invalid";
}
function Yu(l, { snapGrid: a = [0, 0], snapToGrid: o = !1, transform: r, containerBounds: s }) {
  const { x: f, y: d } = pn(l), g = eo({ x: f - (s?.left ?? 0), y: d - (s?.top ?? 0) }, r), { x: v, y: p } = o ? to(g, a) : g;
  return {
    xSnapped: v,
    ySnapped: p,
    ...g
  };
}
const sh = (l) => ({
  width: l.offsetWidth,
  height: l.offsetHeight
}), Jp = (l) => l?.getRootNode?.() || window?.document, K_ = ["INPUT", "SELECT", "TEXTAREA"];
function kp(l) {
  const a = l.composedPath?.()?.[0] || l.target;
  return a?.nodeType !== 1 ? !1 : K_.includes(a.nodeName) || a.hasAttribute("contenteditable") || !!a.closest(".nokey");
}
const Fp = (l) => "clientX" in l, pn = (l, a) => {
  const o = Fp(l), r = o ? l.clientX : l.touches?.[0].clientX, s = o ? l.clientY : l.touches?.[0].clientY;
  return {
    x: r - (a?.left ?? 0),
    y: s - (a?.top ?? 0)
  };
}, uv = (l, a, o, r, s) => {
  const f = a.querySelectorAll(`.${l}`);
  return !f || !f.length ? null : Array.from(f).map((d) => {
    const g = d.getBoundingClientRect();
    return {
      id: d.getAttribute("data-handleid"),
      type: l,
      nodeId: s,
      position: d.getAttribute("data-handlepos"),
      x: (g.left - o.left) / r,
      y: (g.top - o.top) / r,
      ...sh(d)
    };
  });
};
function Wp({ sourceX: l, sourceY: a, targetX: o, targetY: r, sourceControlX: s, sourceControlY: f, targetControlX: d, targetControlY: g }) {
  const v = l * 0.125 + s * 0.375 + d * 0.375 + o * 0.125, p = a * 0.125 + f * 0.375 + g * 0.375 + r * 0.125, y = Math.abs(v - l), m = Math.abs(p - a);
  return [v, p, y, m];
}
function Gc(l, a) {
  return l >= 0 ? 0.5 * l : a * 25 * Math.sqrt(-l);
}
function ov({ pos: l, x1: a, y1: o, x2: r, y2: s, c: f }) {
  switch (l) {
    case pt.Left:
      return [a - Gc(a - r, f), o];
    case pt.Right:
      return [a + Gc(r - a, f), o];
    case pt.Top:
      return [a, o - Gc(o - s, f)];
    case pt.Bottom:
      return [a, o + Gc(s - o, f)];
  }
}
function fh({ sourceX: l, sourceY: a, sourcePosition: o = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top, curvature: d = 0.25 }) {
  const [g, v] = ov({
    pos: o,
    x1: l,
    y1: a,
    x2: r,
    y2: s,
    c: d
  }), [p, y] = ov({
    pos: f,
    x1: r,
    y1: s,
    x2: l,
    y2: a,
    c: d
  }), [m, x, S, E] = Wp({
    sourceX: l,
    sourceY: a,
    targetX: r,
    targetY: s,
    sourceControlX: g,
    sourceControlY: v,
    targetControlX: p,
    targetControlY: y
  });
  return [
    `M${l},${a} C${g},${v} ${p},${y} ${r},${s}`,
    m,
    x,
    S,
    E
  ];
}
function Pp({ sourceX: l, sourceY: a, targetX: o, targetY: r }) {
  const s = Math.abs(o - l) / 2, f = o < l ? o + s : o - s, d = Math.abs(r - a) / 2, g = r < a ? r + d : r - d;
  return [f, g, s, d];
}
function $_({ sourceNode: l, targetNode: a, selected: o = !1, zIndex: r = 0, elevateOnSelect: s = !1, zIndexMode: f = "basic" }) {
  if (f === "manual")
    return r;
  const d = s && o ? r + 1e3 : r, g = Math.max(l.parentId || s && l.selected ? l.internals.z : 0, a.parentId || s && a.selected ? a.internals.z : 0);
  return d + g;
}
function I_({ sourceNode: l, targetNode: a, width: o, height: r, transform: s }) {
  const f = pr(cr(l), cr(a));
  f.x === f.x2 && (f.x2 += 1), f.y === f.y2 && (f.y2 += 1);
  const d = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: o / s[2],
    height: r / s[2]
  };
  return rr(d, xr(f)) > 0;
}
const J_ = ({ source: l, sourceHandle: a, target: o, targetHandle: r }) => `xy-edge__${l}${a || ""}-${o}${r || ""}`, k_ = (l, a) => a.some((o) => o.source === l.source && o.target === l.target && (o.sourceHandle === l.sourceHandle || !o.sourceHandle && !l.sourceHandle) && (o.targetHandle === l.targetHandle || !o.targetHandle && !l.targetHandle)), F_ = (l, a, o = {}) => {
  if (!l.source || !l.target)
    return o.onError?.("006", xn.error006()), a;
  const r = o.getEdgeId || J_;
  let s;
  return jp(l) ? s = { ...l } : s = {
    ...l,
    id: r(l)
  }, k_(s, a) ? a : (s.sourceHandle === null && delete s.sourceHandle, s.targetHandle === null && delete s.targetHandle, a.concat(s));
};
function t1({ sourceX: l, sourceY: a, targetX: o, targetY: r }) {
  const [s, f, d, g] = Pp({
    sourceX: l,
    sourceY: a,
    targetX: o,
    targetY: r
  });
  return [`M ${l},${a}L ${o},${r}`, s, f, d, g];
}
const cv = {
  [pt.Left]: { x: -1, y: 0 },
  [pt.Right]: { x: 1, y: 0 },
  [pt.Top]: { x: 0, y: -1 },
  [pt.Bottom]: { x: 0, y: 1 }
}, W_ = ({ source: l, sourcePosition: a = pt.Bottom, target: o }) => a === pt.Left || a === pt.Right ? l.x < o.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : l.y < o.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, rv = (l, a) => Math.sqrt(Math.pow(a.x - l.x, 2) + Math.pow(a.y - l.y, 2)), P_ = (l, a, o) => l.x === a.x && a.x === o.x && (a.y - l.y) * (o.y - a.y) >= 0 || l.y === a.y && a.y === o.y && (a.x - l.x) * (o.x - a.x) >= 0;
function t3({ source: l, sourcePosition: a = pt.Bottom, target: o, targetPosition: r = pt.Top, center: s, offset: f, stepPosition: d }) {
  const g = cv[a], v = cv[r], p = { x: l.x + g.x * f, y: l.y + g.y * f }, y = { x: o.x + v.x * f, y: o.y + v.y * f }, m = W_({
    source: p,
    sourcePosition: a,
    target: y
  }), x = m.x !== 0 ? "x" : "y", S = m[x];
  let E = [], A, N;
  const _ = { x: 0, y: 0 }, L = { x: 0, y: 0 }, [, , w, M] = Pp({
    sourceX: l.x,
    sourceY: l.y,
    targetX: o.x,
    targetY: o.y
  });
  if (g[x] * v[x] === -1) {
    x === "x" ? (A = s.x ?? p.x + (y.x - p.x) * d, N = s.y ?? (p.y + y.y) / 2) : (A = s.x ?? (p.x + y.x) / 2, N = s.y ?? p.y + (y.y - p.y) * d);
    const Z = [
      { x: A, y: p.y },
      { x: A, y: y.y }
    ], J = [
      { x: p.x, y: N },
      { x: y.x, y: N }
    ];
    g[x] === S ? E = x === "x" ? Z : J : E = x === "x" ? J : Z;
  } else {
    const Z = [{ x: p.x, y: y.y }], J = [{ x: y.x, y: p.y }];
    if (x === "x" ? E = g.x === S ? J : Z : E = g.y === S ? Z : J, a === r) {
      const C = Math.abs(l[x] - o[x]);
      if (C <= f) {
        const V = Math.min(f - 1, f - C);
        g[x] === S ? _[x] = (p[x] > l[x] ? -1 : 1) * V : L[x] = (y[x] > o[x] ? -1 : 1) * V;
      }
    }
    if (a !== r) {
      const C = x === "x" ? "y" : "x", V = g[x] === v[C], O = p[C] > y[C], B = p[C] < y[C];
      (g[x] === 1 && (!V && O || V && B) || g[x] !== 1 && (!V && B || V && O)) && (E = x === "x" ? Z : J);
    }
    const at = { x: p.x + _.x, y: p.y + _.y }, tt = { x: y.x + L.x, y: y.y + L.y }, ot = Math.max(Math.abs(at.x - E[0].x), Math.abs(tt.x - E[0].x)), lt = Math.max(Math.abs(at.y - E[0].y), Math.abs(tt.y - E[0].y));
    ot >= lt ? (A = (at.x + tt.x) / 2, N = E[0].y) : (A = E[0].x, N = (at.y + tt.y) / 2);
  }
  const Y = { x: p.x + _.x, y: p.y + _.y }, H = { x: y.x + L.x, y: y.y + L.y }, R = [];
  for (const Z of [l, Y, ...E, H, o]) {
    const [J, at] = R.slice(-2);
    at && P_(J, at, Z) && R.pop(), R.push(Z);
  }
  return [R, A, N, w, M];
}
function e3(l, a, o, r) {
  const s = Math.min(rv(l, a) / 2, rv(a, o) / 2, r), { x: f, y: d } = a;
  if (l.x === f && f === o.x || l.y === d && d === o.y)
    return `L${f} ${d}`;
  if (l.y === d) {
    const p = l.x < o.x ? -1 : 1, y = l.y < o.y ? 1 : -1;
    return `L ${f + s * p},${d}Q ${f},${d} ${f},${d + s * y}`;
  }
  const g = l.x < o.x ? 1 : -1, v = l.y < o.y ? -1 : 1;
  return `L ${f},${d + s * v}Q ${f},${d} ${f + s * g},${d}`;
}
function Xd({ sourceX: l, sourceY: a, sourcePosition: o = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top, borderRadius: d = 5, centerX: g, centerY: v, offset: p = 20, stepPosition: y = 0.5 }) {
  const [m, x, S, E, A] = t3({
    source: { x: l, y: a },
    sourcePosition: o,
    target: { x: r, y: s },
    targetPosition: f,
    center: { x: g, y: v },
    offset: p,
    stepPosition: y
  });
  let N = `M${m[0].x} ${m[0].y}`;
  for (let _ = 1; _ < m.length - 1; _++)
    N += e3(m[_ - 1], m[_], m[_ + 1], d);
  return N += `L${m[m.length - 1].x} ${m[m.length - 1].y}`, [N, x, S, E, A];
}
function sv(l) {
  return l && !!(l.internals.handleBounds || l.handles?.length) && !!(l.measured.width || l.width || l.initialWidth);
}
function n3(l) {
  const { sourceNode: a, targetNode: o } = l;
  if (!sv(a) || !sv(o))
    return null;
  const r = a.internals.handleBounds || fv(a.handles), s = o.internals.handleBounds || fv(o.handles), f = dv(r?.source ?? [], l.sourceHandle), d = dv(
    // when connection type is loose we can define all handles as sources and connect source -> source
    l.connectionMode === za.Strict ? s?.target ?? [] : (s?.target ?? []).concat(s?.source ?? []),
    l.targetHandle
  );
  if (!f || !d)
    return l.onError?.("008", xn.error008(f ? "target" : "source", {
      id: l.id,
      sourceHandle: l.sourceHandle,
      targetHandle: l.targetHandle
    })), null;
  const g = f?.position || pt.Bottom, v = d?.position || pt.Top, p = Ni(a, f, g), y = Ni(o, d, v);
  return {
    sourceX: p.x,
    sourceY: p.y,
    targetX: y.x,
    targetY: y.y,
    sourcePosition: g,
    targetPosition: v
  };
}
function fv(l) {
  if (!l)
    return null;
  const a = [], o = [];
  for (const r of l)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? a.push(r) : r.type === "target" && o.push(r);
  return {
    source: a,
    target: o
  };
}
function Ni(l, a, o = pt.Left, r = !1) {
  const s = (a?.x ?? 0) + l.internals.positionAbsolute.x, f = (a?.y ?? 0) + l.internals.positionAbsolute.y, { width: d, height: g } = a ?? Sn(l);
  if (r)
    return { x: s + d / 2, y: f + g / 2 };
  switch (a?.position ?? o) {
    case pt.Top:
      return { x: s + d / 2, y: f };
    case pt.Right:
      return { x: s + d, y: f + g / 2 };
    case pt.Bottom:
      return { x: s + d / 2, y: f + g };
    case pt.Left:
      return { x: s, y: f + g / 2 };
  }
}
function dv(l, a) {
  return l && (a ? l.find((o) => o.id === a) : l[0]) || null;
}
function Zd(l, a) {
  return l ? typeof l == "string" ? l : `${a ? `${a}__` : ""}${Object.keys(l).sort().map((r) => `${r}=${l[r]}`).join("&")}` : "";
}
function l3(l, { id: a, defaultColor: o, defaultMarkerStart: r, defaultMarkerEnd: s }) {
  const f = /* @__PURE__ */ new Set();
  return l.reduce((d, g) => ([g.markerStart || r, g.markerEnd || s].forEach((v) => {
    if (v && typeof v == "object") {
      const p = Zd(v, a);
      f.has(p) || (d.push({ id: p, color: v.color || o, ...v }), f.add(p));
    }
  }), d), []).sort((d, g) => d.id.localeCompare(g.id));
}
const e1 = 1e3, i3 = 10, dh = {
  nodeOrigin: [0, 0],
  nodeExtent: Gu,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, a3 = {
  ...dh,
  checkEquality: !0
};
function hh(l, a) {
  const o = { ...l };
  for (const r in a)
    a[r] !== void 0 && (o[r] = a[r]);
  return o;
}
function u3(l, a, o) {
  const r = hh(dh, o);
  for (const s of l.values())
    if (s.parentId)
      mh(s, l, a, r);
    else {
      const f = Wu(s, r.nodeOrigin), d = _i(s.extent) ? s.extent : r.nodeExtent, g = wi(f, d, Sn(s));
      s.internals.positionAbsolute = g;
    }
}
function o3(l, a) {
  if (!l.handles)
    return l.measured ? a?.internals.handleBounds : void 0;
  const o = [], r = [];
  for (const s of l.handles) {
    const f = {
      id: s.id,
      width: s.width ?? 1,
      height: s.height ?? 1,
      nodeId: l.id,
      x: s.x,
      y: s.y,
      position: s.position,
      type: s.type
    };
    s.type === "source" ? o.push(f) : s.type === "target" && r.push(f);
  }
  return {
    source: o,
    target: r
  };
}
function gh(l) {
  return l === "manual";
}
function Gd(l, a, o, r = {}) {
  const s = hh(a3, r), f = { i: 0 }, d = new Map(a), g = s?.elevateNodesOnSelect && !gh(s.zIndexMode) ? e1 : 0;
  let v = l.length > 0, p = !1;
  a.clear(), o.clear();
  for (const y of l) {
    let m = d.get(y.id);
    if (s.checkEquality && y === m?.internals.userNode)
      a.set(y.id, m);
    else {
      const x = Wu(y, s.nodeOrigin), S = _i(y.extent) ? y.extent : s.nodeExtent, E = wi(x, S, Sn(y));
      m = {
        ...s.defaults,
        ...y,
        measured: {
          width: y.measured?.width,
          height: y.measured?.height
        },
        internals: {
          positionAbsolute: E,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: o3(y, m),
          z: n1(y, g, s.zIndexMode),
          userNode: y
        }
      }, a.set(y.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (v = !1), y.parentId && mh(m, a, o, r, f), p ||= y.selected ?? !1;
  }
  return { nodesInitialized: v, hasSelectedNodes: p };
}
function c3(l, a) {
  if (!l.parentId)
    return;
  const o = a.get(l.parentId);
  o ? o.set(l.id, l) : a.set(l.parentId, /* @__PURE__ */ new Map([[l.id, l]]));
}
function mh(l, a, o, r, s) {
  const { elevateNodesOnSelect: f, nodeOrigin: d, nodeExtent: g, zIndexMode: v } = hh(dh, r), p = l.parentId, y = a.get(p);
  if (!y) {
    console.warn(`Parent node ${p} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  c3(l, o), s && !y.parentId && y.internals.rootParentIndex === void 0 && v === "auto" && (y.internals.rootParentIndex = ++s.i, y.internals.z = y.internals.z + s.i * i3), s && y.internals.rootParentIndex !== void 0 && (s.i = y.internals.rootParentIndex);
  const m = f && !gh(v) ? e1 : 0, { x, y: S, z: E } = r3(l, y, d, g, m, v), { positionAbsolute: A } = l.internals, N = x !== A.x || S !== A.y;
  (N || E !== l.internals.z) && a.set(l.id, {
    ...l,
    internals: {
      ...l.internals,
      positionAbsolute: N ? { x, y: S } : A,
      z: E
    }
  });
}
function n1(l, a, o) {
  const r = vn(l.zIndex) ? l.zIndex : 0;
  return gh(o) ? r : r + (l.selected ? a : 0);
}
function r3(l, a, o, r, s, f) {
  const { x: d, y: g } = a.internals.positionAbsolute, v = Sn(l), p = Wu(l, o), y = _i(l.extent) ? wi(p, l.extent, v) : p;
  let m = wi({ x: d + y.x, y: g + y.y }, r, v);
  l.extent === "parent" && (m = Xp(m, v, a));
  const x = n1(l, s, f), S = a.internals.z ?? 0;
  return {
    x: m.x,
    y: m.y,
    z: S >= x ? S + 1 : x
  };
}
function yh(l, a, o, r = [0, 0]) {
  const s = [], f = /* @__PURE__ */ new Map();
  for (const d of l) {
    const g = a.get(d.parentId);
    if (!g)
      continue;
    const v = f.get(d.parentId)?.expandedRect ?? Ku(g), p = Zp(v, d.rect);
    f.set(d.parentId, { expandedRect: p, parent: g });
  }
  return f.size > 0 && f.forEach(({ expandedRect: d, parent: g }, v) => {
    const p = g.internals.positionAbsolute, y = Sn(g), m = g.origin ?? r, x = d.x < p.x ? Math.round(Math.abs(p.x - d.x)) : 0, S = d.y < p.y ? Math.round(Math.abs(p.y - d.y)) : 0, E = Math.max(y.width, Math.round(d.width)), A = Math.max(y.height, Math.round(d.height)), N = (E - y.width) * m[0], _ = (A - y.height) * m[1];
    (x > 0 || S > 0 || N || _) && (s.push({
      id: v,
      type: "position",
      position: {
        x: g.position.x - x + N,
        y: g.position.y - S + _
      }
    }), o.get(v)?.forEach((L) => {
      l.some((w) => w.id === L.id) || s.push({
        id: L.id,
        type: "position",
        position: {
          x: L.position.x + x,
          y: L.position.y + S
        }
      });
    })), (y.width < d.width || y.height < d.height || x || S) && s.push({
      id: v,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: E + (x ? m[0] * x - N : 0),
        height: A + (S ? m[1] * S - _ : 0)
      }
    });
  }), s;
}
function s3(l, a, o, r, s, f, d) {
  const g = r?.querySelector(".xyflow__viewport");
  let v = !1;
  if (!g)
    return { changes: [], updatedInternals: v };
  const p = [], y = window.getComputedStyle(g), { m22: m } = new window.DOMMatrixReadOnly(y.transform), x = [];
  for (const S of l.values()) {
    const E = a.get(S.id);
    if (!E)
      continue;
    if (E.hidden) {
      a.set(E.id, {
        ...E,
        internals: {
          ...E.internals,
          handleBounds: void 0
        }
      }), v = !0;
      continue;
    }
    const A = sh(S.nodeElement), N = E.measured.width !== A.width || E.measured.height !== A.height;
    if (!!(A.width && A.height && (N || !E.internals.handleBounds || S.force))) {
      const L = S.nodeElement.getBoundingClientRect(), w = _i(E.extent) ? E.extent : f;
      let { positionAbsolute: M } = E.internals;
      if (E.parentId && E.extent === "parent") {
        const H = a.get(E.parentId);
        H && (M = Xp(M, A, H));
      } else w && (M = wi(M, w, A));
      const Y = {
        ...E,
        measured: A,
        internals: {
          ...E.internals,
          positionAbsolute: M,
          handleBounds: {
            source: uv("source", S.nodeElement, L, m, E.id),
            target: uv("target", S.nodeElement, L, m, E.id)
          }
        }
      };
      a.set(E.id, Y), E.parentId && mh(Y, a, o, { nodeOrigin: s, zIndexMode: d }), v = !0, N && (p.push({
        id: E.id,
        type: "dimensions",
        dimensions: A
      }), E.expandParent && E.parentId && x.push({
        id: E.id,
        parentId: E.parentId,
        rect: Ku(Y, s)
      }));
    }
  }
  if (x.length > 0) {
    const S = yh(x, a, o, s);
    p.push(...S);
  }
  return { changes: p, updatedInternals: v };
}
async function f3({ delta: l, panZoom: a, transform: o, translateExtent: r, width: s, height: f }) {
  if (!a || !l.x && !l.y)
    return !1;
  const d = await a.setViewportConstrained({
    x: o[0] + l.x,
    y: o[1] + l.y,
    zoom: o[2]
  }, [
    [0, 0],
    [s, f]
  ], r);
  return !!d && (d.x !== o[0] || d.y !== o[1] || d.k !== o[2]);
}
function hv(l, a, o, r, s, f) {
  let d = s;
  const g = r.get(d) || /* @__PURE__ */ new Map();
  r.set(d, g.set(o, a)), d = `${s}-${l}`;
  const v = r.get(d) || /* @__PURE__ */ new Map();
  if (r.set(d, v.set(o, a)), f) {
    d = `${s}-${l}-${f}`;
    const p = r.get(d) || /* @__PURE__ */ new Map();
    r.set(d, p.set(o, a));
  }
}
function l1(l, a, o) {
  l.clear(), a.clear();
  for (const r of o) {
    const { source: s, target: f, sourceHandle: d = null, targetHandle: g = null } = r, v = { edgeId: r.id, source: s, target: f, sourceHandle: d, targetHandle: g }, p = `${s}-${d}--${f}-${g}`, y = `${f}-${g}--${s}-${d}`;
    hv("source", v, y, l, s, d), hv("target", v, p, l, f, g), a.set(r.id, r);
  }
}
function i1(l, a) {
  if (!l.parentId)
    return !1;
  const o = a.get(l.parentId);
  return o ? o.selected ? !0 : i1(o, a) : !1;
}
function gv(l, a, o) {
  let r = l;
  do {
    if (r?.matches?.(a))
      return !0;
    if (r === o)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function d3(l, a, o, r, s) {
  const f = /* @__PURE__ */ new Map();
  for (const [d, g] of l)
    if ((s ? g.id === r : g.selected || g.id === r) && (s || !g.parentId || !i1(g, l)) && (g.draggable || a && typeof g.draggable > "u")) {
      const p = l.get(d);
      p && f.set(d, {
        id: d,
        position: p.position || { x: 0, y: 0 },
        distance: {
          x: o.x - p.internals.positionAbsolute.x,
          y: o.y - p.internals.positionAbsolute.y
        },
        extent: p.extent,
        parentId: p.parentId,
        origin: p.origin,
        expandParent: p.expandParent,
        internals: {
          positionAbsolute: p.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: p.measured.width ?? 0,
          height: p.measured.height ?? 0
        }
      });
    }
  return f;
}
function wd({ nodeId: l, dragItems: a, nodeLookup: o, dragging: r = !0 }) {
  const s = [];
  for (const [d, g] of a) {
    const v = o.get(d)?.internals.userNode;
    v && s.push({
      ...v,
      position: g.position,
      dragging: r
    });
  }
  if (!l)
    return [s[0], s];
  const f = o.get(l)?.internals.userNode;
  return [
    f ? {
      ...f,
      position: a.get(l)?.position || f.position,
      dragging: r
    } : s[0],
    s
  ];
}
function h3({ dragItems: l, snapGrid: a, x: o, y: r }) {
  const s = l.values().next().value;
  if (!s)
    return null;
  const f = {
    x: o - s.distance.x,
    y: r - s.distance.y
  }, d = to(f, a);
  return {
    x: d.x - f.x,
    y: d.y - f.y
  };
}
function g3({ onNodeMouseDown: l, getStoreItems: a, onDragStart: o, onDrag: r, onDragStop: s }) {
  let f = { x: null, y: null }, d = 0, g = /* @__PURE__ */ new Map(), v = !1, p = { x: 0, y: 0 }, y = null, m = !1, x = null, S = !1, E = !1, A = null;
  function N({ noDragClassName: L, handleSelector: w, domNode: M, isSelectable: Y, nodeId: H, nodeClickDistance: R = 0 }) {
    x = $e(M);
    function Z({ x: ot, y: lt }) {
      const { nodeLookup: C, nodeExtent: V, snapGrid: O, snapToGrid: B, nodeOrigin: X, onNodeDrag: $, onSelectionDrag: P, onError: it, updateNodePositions: dt } = a();
      f = { x: ot, y: lt };
      let xt = !1;
      const T = g.size > 1, F = T && V ? qd(Pu(g)) : null, st = T && B ? h3({
        dragItems: g,
        snapGrid: O,
        x: ot,
        y: lt
      }) : null;
      for (const [ut, k] of g) {
        if (!C.has(ut))
          continue;
        let ft = { x: ot - k.distance.x, y: lt - k.distance.y };
        B && (ft = st ? {
          x: Math.round(ft.x + st.x),
          y: Math.round(ft.y + st.y)
        } : to(ft, O));
        let gt = null;
        if (T && V && !k.extent && F) {
          const { positionAbsolute: vt } = k.internals, _t = vt.x - F.x + V[0][0], wt = vt.x + k.measured.width - F.x2 + V[1][0], Mt = vt.y - F.y + V[0][1], Ht = vt.y + k.measured.height - F.y2 + V[1][1];
          gt = [
            [_t, Mt],
            [wt, Ht]
          ];
        }
        const { position: ct, positionAbsolute: rt } = qp({
          nodeId: ut,
          nextPosition: ft,
          nodeLookup: C,
          nodeExtent: gt || V,
          nodeOrigin: X,
          onError: it
        });
        xt = xt || k.position.x !== ct.x || k.position.y !== ct.y, k.position = ct, k.internals.positionAbsolute = rt;
      }
      if (E = E || xt, !!xt && (dt(g, !0), A && (r || $ || !H && P))) {
        const [ut, k] = wd({
          nodeId: H,
          dragItems: g,
          nodeLookup: C
        });
        r?.(A, g, ut, k), $?.(A, ut, k), H || P?.(A, k);
      }
    }
    async function J() {
      if (!y)
        return;
      const { transform: ot, panBy: lt, autoPanSpeed: C, autoPanOnNodeDrag: V } = a();
      if (!V) {
        v = !1, cancelAnimationFrame(d);
        return;
      }
      const [O, B] = ch(p, y, C);
      (O !== 0 || B !== 0) && (f.x = (f.x ?? 0) - O / ot[2], f.y = (f.y ?? 0) - B / ot[2], await lt({ x: O, y: B }) && Z(f)), d = requestAnimationFrame(J);
    }
    function at(ot) {
      const { nodeLookup: lt, multiSelectionActive: C, nodesDraggable: V, transform: O, snapGrid: B, snapToGrid: X, selectNodesOnDrag: $, onNodeDragStart: P, onSelectionDragStart: it, unselectNodesAndEdges: dt } = a();
      m = !0;
      const xt = !!H && !C && !lt.get(H)?.selected;
      (!$ || !Y) && !C && H && (lt.get(H)?.selected || dt()), Y && $ && H && l?.(H);
      const T = Yu(ot.sourceEvent, { transform: O, snapGrid: B, snapToGrid: X, containerBounds: y });
      if (f = T, g = d3(lt, V, T, H, xt), g.size > 0 && (o || P || !H && it)) {
        const [F, st] = wd({
          nodeId: H,
          dragItems: g,
          nodeLookup: lt
        });
        o?.(ot.sourceEvent, g, F, st), P?.(ot.sourceEvent, F, st), H || it?.(ot.sourceEvent, st);
      }
    }
    const tt = fp().clickDistance(R).on("start", (ot) => {
      const { domNode: lt, nodeDragThreshold: C, transform: V, snapGrid: O, snapToGrid: B } = a();
      y = lt?.getBoundingClientRect() || null, S = !1, E = !1, A = ot.sourceEvent, C === 0 && at(ot), f = Yu(ot.sourceEvent, { transform: V, snapGrid: O, snapToGrid: B, containerBounds: y }), p = pn(ot.sourceEvent, y);
    }).on("drag", (ot) => {
      const { autoPanOnNodeDrag: lt, transform: C, snapGrid: V, snapToGrid: O, nodeDragThreshold: B, nodeLookup: X } = a(), $ = Yu(ot.sourceEvent, { transform: C, snapGrid: V, snapToGrid: O, containerBounds: y });
      if (A = ot.sourceEvent, (ot.sourceEvent.type === "touchmove" && ot.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      H && !X.has(H)) && (S = !0), !S) {
        if (!v && lt && m && (v = !0, J()), !m) {
          const P = pn(ot.sourceEvent, y), it = P.x - p.x, dt = P.y - p.y;
          Math.sqrt(it * it + dt * dt) > B && at(ot);
        }
        (f.x !== $.xSnapped || f.y !== $.ySnapped) && g && m && (p = pn(ot.sourceEvent, y), Z($));
      }
    }).on("end", (ot) => {
      if (!m || S) {
        S && g.size > 0 && a().updateNodePositions(g, !1);
        return;
      }
      if (v = !1, m = !1, cancelAnimationFrame(d), g.size > 0) {
        const { nodeLookup: lt, updateNodePositions: C, onNodeDragStop: V, onSelectionDragStop: O } = a();
        if (E && (C(g, !1), E = !1), s || V || !H && O) {
          const [B, X] = wd({
            nodeId: H,
            dragItems: g,
            nodeLookup: lt,
            dragging: !1
          });
          s?.(ot.sourceEvent, g, B, X), V?.(ot.sourceEvent, B, X), H || O?.(ot.sourceEvent, X);
        }
      }
    }).filter((ot) => {
      const lt = ot.target;
      return !ot.button && (!L || !gv(lt, `.${L}`, M)) && (!w || gv(lt, w, M));
    });
    x.call(tt);
  }
  function _() {
    x?.on(".drag", null);
  }
  return {
    update: N,
    destroy: _
  };
}
function m3(l, a, o) {
  const r = [], s = {
    x: l.x - o,
    y: l.y - o,
    width: o * 2,
    height: o * 2
  };
  for (const f of a.values())
    rr(s, Ku(f)) > 0 && r.push(f);
  return r;
}
const y3 = 250;
function v3(l, a, o, r) {
  let s = [], f = 1 / 0;
  const d = m3(l, o, a + y3);
  for (const g of d) {
    const v = [...g.internals.handleBounds?.source ?? [], ...g.internals.handleBounds?.target ?? []];
    for (const p of v) {
      if (r.nodeId === p.nodeId && r.type === p.type && r.id === p.id)
        continue;
      const { x: y, y: m } = Ni(g, p, p.position, !0), x = Math.sqrt(Math.pow(y - l.x, 2) + Math.pow(m - l.y, 2));
      x > a || (x < f ? (s = [{ ...p, x: y, y: m }], f = x) : x === f && s.push({ ...p, x: y, y: m }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const g = r.type === "source" ? "target" : "source";
    return s.find((v) => v.type === g) ?? s[0];
  }
  return s[0];
}
function a1(l, a, o, r, s, f = !1) {
  const d = r.get(l);
  if (!d)
    return null;
  const g = s === "strict" ? d.internals.handleBounds?.[a] : [...d.internals.handleBounds?.source ?? [], ...d.internals.handleBounds?.target ?? []], v = (o ? g?.find((p) => p.id === o) : g?.[0]) ?? null;
  return v && f ? { ...v, ...Ni(d, v, v.position, !0) } : v;
}
function u1(l, a) {
  return l || (a?.classList.contains("target") ? "target" : a?.classList.contains("source") ? "source" : null);
}
function p3(l, a) {
  let o = null;
  return a ? o = !0 : l && !a && (o = !1), o;
}
const o1 = () => !0;
function x3(l, { connectionMode: a, connectionRadius: o, handleId: r, nodeId: s, edgeUpdaterType: f, isTarget: d, domNode: g, nodeLookup: v, lib: p, autoPanOnConnect: y, flowId: m, panBy: x, cancelConnection: S, onConnectStart: E, onConnect: A, onConnectEnd: N, isValidConnection: _ = o1, onReconnectEnd: L, updateConnection: w, getTransform: M, getFromHandle: Y, autoPanSpeed: H, dragThreshold: R = 1, handleDomNode: Z }) {
  const J = Jp(l.target);
  let at = 0, tt;
  const { x: ot, y: lt } = pn(l), C = u1(f, Z), V = g?.getBoundingClientRect();
  let O = !1;
  if (!V || !C)
    return;
  const B = a1(s, C, r, v, a);
  if (!B)
    return;
  let X = pn(l, V), $ = !1, P = null, it = !1, dt = null;
  function xt() {
    if (!y || !V)
      return;
    const [ct, rt] = ch(X, V, H);
    x({ x: ct, y: rt }), at = requestAnimationFrame(xt);
  }
  const T = {
    ...B,
    nodeId: s,
    type: C,
    position: B.position
  }, F = v.get(s);
  let ut = {
    inProgress: !0,
    isValid: null,
    from: Ni(F, T, pt.Left, !0),
    fromHandle: T,
    fromPosition: T.position,
    fromNode: F,
    to: X,
    toHandle: null,
    toPosition: nv[T.position],
    toNode: null,
    pointer: X
  };
  function k() {
    O = !0, w(ut), E?.(l, { nodeId: s, handleId: r, handleType: C });
  }
  R === 0 && k();
  function ft(ct) {
    if (!O) {
      const { x: Ht, y: Ot } = pn(ct), Pt = Ht - ot, be = Ot - lt;
      if (!(Pt * Pt + be * be > R * R))
        return;
      k();
    }
    if (!Y() || !T) {
      gt(ct);
      return;
    }
    const rt = M();
    X = pn(ct, V), tt = v3(eo(X, rt, !1, [1, 1]), o, v, T), $ || (xt(), $ = !0);
    const vt = c1(ct, {
      handle: tt,
      connectionMode: a,
      fromNodeId: s,
      fromHandleId: r,
      fromType: d ? "target" : "source",
      isValidConnection: _,
      doc: J,
      lib: p,
      flowId: m,
      nodeLookup: v
    });
    dt = vt.handleDomNode, P = vt.connection, it = p3(!!tt, vt.isValid);
    const _t = v.get(s), wt = _t ? Ni(_t, T, pt.Left, !0) : ut.from, Mt = {
      ...ut,
      from: wt,
      isValid: it,
      to: vt.toHandle && it ? Oa({ x: vt.toHandle.x, y: vt.toHandle.y }, rt) : X,
      toHandle: vt.toHandle,
      toPosition: it && vt.toHandle ? vt.toHandle.position : nv[T.position],
      toNode: vt.toHandle ? v.get(vt.toHandle.nodeId) : null,
      pointer: X
    };
    w(Mt), ut = Mt;
  }
  function gt(ct) {
    if (!("touches" in ct && ct.touches.length > 0)) {
      if (O) {
        (tt || dt) && P && it && A?.(P);
        const { inProgress: rt, ...vt } = ut, _t = {
          ...vt,
          toPosition: ut.toHandle ? ut.toPosition : null
        };
        N?.(ct, _t), f && L?.(ct, _t);
      }
      S(), cancelAnimationFrame(at), $ = !1, it = !1, P = null, dt = null, J.removeEventListener("mousemove", ft), J.removeEventListener("mouseup", gt), J.removeEventListener("touchmove", ft), J.removeEventListener("touchend", gt);
    }
  }
  J.addEventListener("mousemove", ft), J.addEventListener("mouseup", gt), J.addEventListener("touchmove", ft), J.addEventListener("touchend", gt);
}
function c1(l, { handle: a, connectionMode: o, fromNodeId: r, fromHandleId: s, fromType: f, doc: d, lib: g, flowId: v, isValidConnection: p = o1, nodeLookup: y }) {
  const m = f === "target", x = a ? d.querySelector(`.${g}-flow__handle[data-id="${v}-${a?.nodeId}-${a?.id}-${a?.type}"]`) : null, { x: S, y: E } = pn(l), A = d.elementFromPoint(S, E), N = A?.classList.contains(`${g}-flow__handle`) ? A : x, _ = {
    handleDomNode: N,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (N) {
    const L = u1(void 0, N), w = N.getAttribute("data-nodeid"), M = N.getAttribute("data-handleid"), Y = N.classList.contains("connectable"), H = N.classList.contains("connectableend");
    if (!w || !L)
      return _;
    const R = {
      source: m ? w : r,
      sourceHandle: m ? M : s,
      target: m ? r : w,
      targetHandle: m ? s : M
    };
    _.connection = R;
    const J = Y && H && (o === za.Strict ? m && L === "source" || !m && L === "target" : w !== r || M !== s);
    _.isValid = J && p(R), _.toHandle = a1(w, L, M, y, o, !0);
  }
  return _;
}
const Qd = {
  onPointerDown: x3,
  isValid: c1
};
function b3({ domNode: l, panZoom: a, getTransform: o, getViewScale: r }) {
  const s = $e(l);
  function f({ translateExtent: g, width: v, height: p, zoomStep: y = 1, pannable: m = !0, zoomable: x = !0, inversePan: S = !1 }) {
    const E = (w) => {
      if (w.sourceEvent.type !== "wheel" || !a)
        return;
      const M = o(), Y = w.sourceEvent.ctrlKey && $u() ? 10 : 1, H = -w.sourceEvent.deltaY * (w.sourceEvent.deltaMode === 1 ? 0.05 : w.sourceEvent.deltaMode ? 1 : 2e-3) * y, R = M[2] * Math.pow(2, H * Y);
      a.scaleTo(R);
    };
    let A = [0, 0];
    const N = (w) => {
      (w.sourceEvent.type === "mousedown" || w.sourceEvent.type === "touchstart") && (A = [
        w.sourceEvent.clientX ?? w.sourceEvent.touches[0].clientX,
        w.sourceEvent.clientY ?? w.sourceEvent.touches[0].clientY
      ]);
    }, _ = (w) => {
      const M = o();
      if (w.sourceEvent.type !== "mousemove" && w.sourceEvent.type !== "touchmove" || !a)
        return;
      const Y = [
        w.sourceEvent.clientX ?? w.sourceEvent.touches[0].clientX,
        w.sourceEvent.clientY ?? w.sourceEvent.touches[0].clientY
      ], H = [Y[0] - A[0], Y[1] - A[1]];
      A = Y;
      const R = r() * Math.max(M[2], Math.log(M[2])) * (S ? -1 : 1), Z = {
        x: M[0] - H[0] * R,
        y: M[1] - H[1] * R
      }, J = [
        [0, 0],
        [v, p]
      ];
      a.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: M[2]
      }, J, g);
    }, L = Lp().on("start", N).on("zoom", m ? _ : null).on("zoom.wheel", x ? E : null);
    s.call(L, {});
  }
  function d() {
    s.on("zoom", null);
  }
  return {
    update: f,
    destroy: d,
    pointer: mn
  };
}
const br = (l) => ({
  x: l.x,
  y: l.y,
  zoom: l.k
}), _d = ({ x: l, y: a, zoom: o }) => vr.translate(l, a).scale(o), jl = (l, a) => l.target.closest(`.${a}`), r1 = (l, a) => a === 2 && Array.isArray(l) && l.includes(2), S3 = (l) => ((l *= 2) <= 1 ? l * l * l : (l -= 2) * l * l + 2) / 2, Nd = (l, a = 0, o = S3, r = () => {
}) => {
  const s = typeof a == "number" && a > 0;
  return s || r(), s ? l.transition().duration(a).ease(o).on("end", r) : l;
}, s1 = (l) => {
  const a = l.ctrlKey && $u() ? 10 : 1;
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * a;
};
function E3({ zoomPanValues: l, noWheelClassName: a, d3Selection: o, d3Zoom: r, panOnScrollMode: s, panOnScrollSpeed: f, zoomOnPinch: d, onPanZoomStart: g, onPanZoom: v, onPanZoomEnd: p }) {
  return (y) => {
    if (jl(y, a))
      return y.ctrlKey && y.preventDefault(), !1;
    y.preventDefault(), y.stopImmediatePropagation();
    const m = o.property("__zoom").k || 1;
    if (y.ctrlKey && d) {
      const N = mn(y), _ = s1(y), L = m * Math.pow(2, _);
      r.scaleTo(o, L, N, y);
      return;
    }
    const x = y.deltaMode === 1 ? 20 : 1;
    let S = s === xi.Vertical ? 0 : y.deltaX * x, E = s === xi.Horizontal ? 0 : y.deltaY * x;
    !$u() && y.shiftKey && s !== xi.Vertical && (S = y.deltaY * x, E = 0), r.translateBy(
      o,
      -(S / m) * f,
      -(E / m) * f,
      // @ts-ignore
      { internal: !0 }
    );
    const A = br(o.property("__zoom"));
    clearTimeout(l.panScrollTimeout), l.isPanScrolling ? v?.(y, A) : (l.isPanScrolling = !0, g?.(y, A)), l.panScrollTimeout = setTimeout(() => {
      p?.(y, A), l.isPanScrolling = !1;
    }, 150);
  };
}
function w3({ noWheelClassName: l, preventScrolling: a, d3ZoomHandler: o }) {
  return function(r, s) {
    const f = r.type === "wheel", d = !a && f && !r.ctrlKey, g = jl(r, l);
    if (r.ctrlKey && f && g && r.preventDefault(), d || g)
      return null;
    r.preventDefault(), o.call(this, r, s);
  };
}
function _3({ zoomPanValues: l, onDraggingChange: a, onPanZoomStart: o }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const s = br(r.transform);
    l.mouseButton = r.sourceEvent?.button || 0, l.isZoomingOrPanning = !0, l.prevViewport = s, r.sourceEvent?.type === "mousedown" && a(!0), o && o?.(r.sourceEvent, s);
  };
}
function N3({ zoomPanValues: l, panOnDrag: a, onPaneContextMenu: o, onTransformChange: r, onPanZoom: s }) {
  return (f) => {
    l.usedRightMouseButton = !!(o && r1(a, l.mouseButton ?? 0)), f.sourceEvent?.sync || r([f.transform.x, f.transform.y, f.transform.k]), s && !f.sourceEvent?.internal && s?.(f.sourceEvent, br(f.transform));
  };
}
function T3({ zoomPanValues: l, panOnDrag: a, panOnScroll: o, onDraggingChange: r, onPanZoomEnd: s, onPaneContextMenu: f }) {
  return (d) => {
    if (!d.sourceEvent?.internal && (l.isZoomingOrPanning = !1, f && r1(a, l.mouseButton ?? 0) && !l.usedRightMouseButton && d.sourceEvent && f(d.sourceEvent), l.usedRightMouseButton = !1, r(!1), s)) {
      const g = br(d.transform);
      l.prevViewport = g, clearTimeout(l.timerId), l.timerId = setTimeout(
        () => {
          s?.(d.sourceEvent, g);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        o ? 150 : 0
      );
    }
  };
}
function M3({ panActivationKeyPressed: l, zoomActivationKeyPressed: a, zoomOnScroll: o, zoomOnPinch: r, panOnDrag: s, panOnScroll: f, zoomOnDoubleClick: d, userSelectionActive: g, noWheelClassName: v, noPanClassName: p, lib: y, connectionInProgress: m }) {
  return (x) => {
    const S = a || o, E = r && x.ctrlKey, A = x.type === "wheel";
    if (x.button === 1 && x.type === "mousedown" && (jl(x, `${y}-flow__node`) || jl(x, `${y}-flow__edge`) || jl(x, `${y}-flow__selection`) || jl(x, `${y}-flow__nodesselection`)))
      return !0;
    if (!s && !S && !f && !d && !r || g || m && !A || jl(x, v) && A || jl(x, p) && (!A || f && A && !a) || !r && x.ctrlKey && A)
      return !1;
    if (!r && x.type === "touchstart" && x.touches?.length > 1)
      return x.preventDefault(), !1;
    if (!S && !f && !E && A || !s && (x.type === "mousedown" || x.type === "touchstart") || Array.isArray(s) && !s.includes(x.button) && x.type === "mousedown")
      return !1;
    const N = Array.isArray(s) && s.includes(x.button) || !x.button || x.button <= 1;
    return (!x.ctrlKey || A || l) && N;
  };
}
function C3({ domNode: l, minZoom: a, maxZoom: o, translateExtent: r, viewport: s, onPanZoom: f, onPanZoomStart: d, onPanZoomEnd: g, onDraggingChange: v }) {
  const p = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, y = l.getBoundingClientRect();
  let m = [
    [0, 0],
    [y.width, y.height]
  ];
  const x = typeof ResizeObserver < "u" ? new ResizeObserver((lt) => {
    const C = lt[0];
    C?.contentRect && (m = [
      [0, 0],
      [C.contentRect.width, C.contentRect.height]
    ]);
  }) : null;
  x?.observe(l);
  const S = Lp().extent(() => m).scaleExtent([a, o]).translateExtent(r), E = $e(l).call(S);
  M({
    x: s.x,
    y: s.y,
    zoom: Aa(s.zoom, a, o)
  }, [
    [0, 0],
    [y.width, y.height]
  ], r);
  const A = E.on("wheel.zoom"), N = E.on("dblclick.zoom");
  S.wheelDelta(s1);
  async function _(lt, C) {
    return E ? new Promise((V) => {
      S?.interpolate(C?.interpolate === "linear" ? Vu : Jc).transform(Nd(E, C?.duration, C?.ease, () => V(!0)), lt);
    }) : !1;
  }
  function L({ noWheelClassName: lt, noPanClassName: C, onPaneContextMenu: V, userSelectionActive: O, panOnScroll: B, panOnDrag: X, panOnScrollMode: $, panOnScrollSpeed: P, preventScrolling: it, zoomOnPinch: dt, zoomOnScroll: xt, zoomOnDoubleClick: T, panActivationKeyPressed: F = !1, zoomActivationKeyPressed: st, lib: ut, onTransformChange: k, connectionInProgress: ft, paneClickDistance: gt, selectionOnDrag: ct }) {
    O && !p.isZoomingOrPanning && S.on("zoom", null);
    const rt = B && !st && !O;
    S.clickDistance(ct ? 1 / 0 : !vn(gt) || gt < 0 ? 0 : gt);
    const vt = rt ? E3({
      zoomPanValues: p,
      noWheelClassName: lt,
      d3Selection: E,
      d3Zoom: S,
      panOnScrollMode: $,
      panOnScrollSpeed: P,
      zoomOnPinch: dt,
      onPanZoomStart: d,
      onPanZoom: f,
      onPanZoomEnd: g
    }) : w3({
      noWheelClassName: lt,
      preventScrolling: it,
      d3ZoomHandler: A
    });
    E.on("wheel.zoom", vt, { passive: !1 });
    const _t = _3({
      zoomPanValues: p,
      onDraggingChange: v,
      onPanZoomStart: d
    });
    S.on("start", _t);
    const wt = N3({
      zoomPanValues: p,
      panOnDrag: X,
      onPaneContextMenu: !!V,
      onPanZoom: f,
      onTransformChange: k
    });
    S.on("zoom", wt);
    const Mt = T3({
      zoomPanValues: p,
      panOnDrag: X,
      panOnScroll: B,
      onPaneContextMenu: V,
      onPanZoomEnd: g,
      onDraggingChange: v
    });
    S.on("end", Mt);
    const Ht = M3({
      panActivationKeyPressed: F,
      zoomActivationKeyPressed: st,
      panOnDrag: X,
      zoomOnScroll: xt,
      panOnScroll: B,
      zoomOnDoubleClick: T,
      zoomOnPinch: dt,
      userSelectionActive: O,
      noPanClassName: C,
      noWheelClassName: lt,
      lib: ut,
      connectionInProgress: ft
    });
    S.filter(Ht), T ? E.on("dblclick.zoom", N) : E.on("dblclick.zoom", null);
  }
  function w() {
    S.on("zoom", null), x?.disconnect();
  }
  async function M(lt, C, V) {
    const O = _d(lt), B = S?.constrain()(O, C, V);
    return B && await _(B), B;
  }
  async function Y(lt, C) {
    const V = _d(lt);
    return await _(V, C), V;
  }
  function H(lt) {
    if (E) {
      const C = _d(lt), V = E.property("__zoom");
      (V.k !== lt.zoom || V.x !== lt.x || V.y !== lt.y) && S?.transform(E, C, null, { sync: !0 });
    }
  }
  function R() {
    const lt = E ? Bp(E.node()) : { x: 0, y: 0, k: 1 };
    return { x: lt.x, y: lt.y, zoom: lt.k };
  }
  async function Z(lt, C) {
    return E ? new Promise((V) => {
      S?.interpolate(C?.interpolate === "linear" ? Vu : Jc).scaleTo(Nd(E, C?.duration, C?.ease, () => V(!0)), lt);
    }) : !1;
  }
  async function J(lt, C) {
    return E ? new Promise((V) => {
      S?.interpolate(C?.interpolate === "linear" ? Vu : Jc).scaleBy(Nd(E, C?.duration, C?.ease, () => V(!0)), lt);
    }) : !1;
  }
  function at(lt) {
    S?.scaleExtent(lt);
  }
  function tt(lt) {
    S?.translateExtent(lt);
  }
  function ot(lt) {
    const C = !vn(lt) || lt < 0 ? 0 : lt;
    S?.clickDistance(C);
  }
  return {
    update: L,
    destroy: w,
    setViewport: Y,
    setViewportConstrained: M,
    getViewport: R,
    scaleTo: Z,
    scaleBy: J,
    setScaleExtent: at,
    setTranslateExtent: tt,
    syncViewport: H,
    setClickDistance: ot
  };
}
var Da;
(function(l) {
  l.Line = "line", l.Handle = "handle";
})(Da || (Da = {}));
function z3({ width: l, prevWidth: a, height: o, prevHeight: r, affectsX: s, affectsY: f }) {
  const d = l - a, g = o - r, v = [d > 0 ? 1 : d < 0 ? -1 : 0, g > 0 ? 1 : g < 0 ? -1 : 0];
  return d && s && (v[0] = v[0] * -1), g && f && (v[1] = v[1] * -1), v;
}
function mv(l) {
  const a = l.includes("right") || l.includes("left"), o = l.includes("bottom") || l.includes("top"), r = l.includes("left"), s = l.includes("top");
  return {
    isHorizontal: a,
    isVertical: o,
    affectsX: r,
    affectsY: s
  };
}
function Vl(l, a) {
  return Math.max(0, a - l);
}
function Yl(l, a) {
  return Math.max(0, l - a);
}
function Qc(l, a, o) {
  return Math.max(0, a - l, l - o);
}
function yv(l, a) {
  return l ? !a : a;
}
function A3(l, a, o, r, s, f, d, g) {
  let { affectsX: v, affectsY: p } = a;
  const { isHorizontal: y, isVertical: m } = a, x = y && m, { xSnapped: S, ySnapped: E } = o, { minWidth: A, maxWidth: N, minHeight: _, maxHeight: L } = r, { x: w, y: M, width: Y, height: H, aspectRatio: R } = l;
  let Z = Math.floor(y ? S - l.pointerX : 0), J = Math.floor(m ? E - l.pointerY : 0);
  const at = Y + (v ? -Z : Z), tt = H + (p ? -J : J), ot = -f[0] * Y, lt = -f[1] * H;
  let C = Qc(at, A, N), V = Qc(tt, _, L);
  if (d) {
    let X = 0, $ = 0;
    v && Z < 0 ? X = Vl(w + Z + ot, d[0][0]) : !v && Z > 0 && (X = Yl(w + at + ot, d[1][0])), p && J < 0 ? $ = Vl(M + J + lt, d[0][1]) : !p && J > 0 && ($ = Yl(M + tt + lt, d[1][1])), C = Math.max(C, X), V = Math.max(V, $);
  }
  if (g) {
    let X = 0, $ = 0;
    v && Z > 0 ? X = Yl(w + Z, g[0][0]) : !v && Z < 0 && (X = Vl(w + at, g[1][0])), p && J > 0 ? $ = Yl(M + J, g[0][1]) : !p && J < 0 && ($ = Vl(M + tt, g[1][1])), C = Math.max(C, X), V = Math.max(V, $);
  }
  if (s) {
    if (y) {
      const X = Qc(at / R, _, L) * R;
      if (C = Math.max(C, X), d) {
        let $ = 0;
        !v && !p || v && !p && x ? $ = Yl(M + lt + at / R, d[1][1]) * R : $ = Vl(M + lt + (v ? Z : -Z) / R, d[0][1]) * R, C = Math.max(C, $);
      }
      if (g) {
        let $ = 0;
        !v && !p || v && !p && x ? $ = Vl(M + at / R, g[1][1]) * R : $ = Yl(M + (v ? Z : -Z) / R, g[0][1]) * R, C = Math.max(C, $);
      }
    }
    if (m) {
      const X = Qc(tt * R, A, N) / R;
      if (V = Math.max(V, X), d) {
        let $ = 0;
        !v && !p || p && !v && x ? $ = Yl(w + tt * R + ot, d[1][0]) / R : $ = Vl(w + (p ? J : -J) * R + ot, d[0][0]) / R, V = Math.max(V, $);
      }
      if (g) {
        let $ = 0;
        !v && !p || p && !v && x ? $ = Vl(w + tt * R, g[1][0]) / R : $ = Yl(w + (p ? J : -J) * R, g[0][0]) / R, V = Math.max(V, $);
      }
    }
  }
  J = J + (J < 0 ? V : -V), Z = Z + (Z < 0 ? C : -C), s && (x ? at > tt * R ? J = (yv(v, p) ? -Z : Z) / R : Z = (yv(v, p) ? -J : J) * R : y ? (J = Z / R, p = v) : (Z = J * R, v = p));
  const O = v ? w + Z : w, B = p ? M + J : M;
  return {
    width: Y + (v ? -Z : Z),
    height: H + (p ? -J : J),
    x: f[0] * Z * (v ? -1 : 1) + O,
    y: f[1] * J * (p ? -1 : 1) + B
  };
}
const f1 = { width: 0, height: 0, x: 0, y: 0 }, O3 = {
  ...f1,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function D3(l, a, o) {
  const r = a.position.x + l.position.x, s = a.position.y + l.position.y, f = l.measured.width ?? 0, d = l.measured.height ?? 0, g = o[0] * f, v = o[1] * d;
  return [
    [r - g, s - v],
    [r + f - g, s + d - v]
  ];
}
function R3({ domNode: l, nodeId: a, getStoreItems: o, onChange: r, onEnd: s }) {
  const f = $e(l);
  let d = {
    controlDirection: mv("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function g({ controlPosition: p, boundaries: y, keepAspectRatio: m, resizeDirection: x, onResizeStart: S, onResize: E, onResizeEnd: A, shouldResize: N }) {
    let _ = { ...f1 }, L = { ...O3 };
    d = {
      boundaries: y,
      resizeDirection: x,
      keepAspectRatio: m,
      controlDirection: mv(p)
    };
    let w, M = null, Y = [], H, R, Z;
    const J = fp().on("start", (at) => {
      const { nodeLookup: tt, transform: ot, snapGrid: lt, snapToGrid: C, nodeOrigin: V, paneDomNode: O } = o();
      if (w = tt.get(a), !w)
        return;
      M = O?.getBoundingClientRect() ?? null;
      const { xSnapped: B, ySnapped: X } = Yu(at.sourceEvent, {
        transform: ot,
        snapGrid: lt,
        snapToGrid: C,
        containerBounds: M
      });
      _ = {
        width: w.measured.width ?? 0,
        height: w.measured.height ?? 0,
        x: w.position.x ?? 0,
        y: w.position.y ?? 0
      }, L = {
        ..._,
        pointerX: B,
        pointerY: X,
        aspectRatio: _.width / _.height
      }, H = void 0, R = _i(w.extent) ? w.extent : void 0, w.parentId && (w.extent === "parent" || w.expandParent) && (H = tt.get(w.parentId)), H && w.extent === "parent" && (R = [
        [0, 0],
        [H.measured.width, H.measured.height]
      ]), Y = [], Z = void 0;
      for (const [$, P] of tt)
        if (P.parentId === a && (Y.push({
          id: $,
          position: { ...P.position },
          extent: P.extent
        }), P.extent === "parent" || P.expandParent)) {
          const it = D3(P, w, P.origin ?? V);
          Z ? Z = [
            [Math.min(it[0][0], Z[0][0]), Math.min(it[0][1], Z[0][1])],
            [Math.max(it[1][0], Z[1][0]), Math.max(it[1][1], Z[1][1])]
          ] : Z = it;
        }
      S?.(at, { ..._ });
    }).on("drag", (at) => {
      const { transform: tt, snapGrid: ot, snapToGrid: lt, nodeOrigin: C } = o(), V = Yu(at.sourceEvent, {
        transform: tt,
        snapGrid: ot,
        snapToGrid: lt,
        containerBounds: M
      }), O = [];
      if (!w)
        return;
      const { x: B, y: X, width: $, height: P } = _, it = {}, dt = w.origin ?? C, { width: xt, height: T, x: F, y: st } = A3(L, d.controlDirection, V, d.boundaries, d.keepAspectRatio, dt, R, Z), ut = xt !== $, k = T !== P, ft = F !== B && ut, gt = st !== X && k;
      if (!ft && !gt && !ut && !k)
        return;
      const ct = {
        prevValues: { ..._ },
        startX: L.x,
        startY: L.y,
        childNodes: Y.map((wt) => ({
          ...wt,
          position: { ...wt.position }
        }))
      };
      if ((ft || gt || dt[0] === 1 || dt[1] === 1) && (it.x = ft ? F : _.x, it.y = gt ? st : _.y, _.x = it.x, _.y = it.y, Y.length > 0)) {
        const wt = F - B, Mt = st - X;
        for (const Ht of Y)
          Ht.position = {
            x: Ht.position.x - wt + dt[0] * (xt - $),
            y: Ht.position.y - Mt + dt[1] * (T - P)
          }, O.push(Ht);
      }
      if ((ut || k) && (it.width = ut && (!d.resizeDirection || d.resizeDirection === "horizontal") ? xt : _.width, it.height = k && (!d.resizeDirection || d.resizeDirection === "vertical") ? T : _.height, _.width = it.width, _.height = it.height), H && w.expandParent) {
        const wt = dt[0] * (it.width ?? 0);
        it.x && it.x < wt && (_.x = wt, L.x = L.x - (it.x - wt));
        const Mt = dt[1] * (it.height ?? 0);
        it.y && it.y < Mt && (_.y = Mt, L.y = L.y - (it.y - Mt));
      }
      const rt = z3({
        width: _.width,
        prevWidth: $,
        height: _.height,
        prevHeight: P,
        affectsX: d.controlDirection.affectsX,
        affectsY: d.controlDirection.affectsY
      }), vt = { ..._, direction: rt };
      if (N?.(at, vt) === !1) {
        _ = ct.prevValues, L.x = ct.startX, L.y = ct.startY, Y.forEach((wt, Mt) => {
          wt.position = ct.childNodes[Mt].position;
        });
        return;
      }
      E?.(at, vt), r(it, O);
    }).on("end", (at) => {
      A?.(at, { ..._ }), s?.({ ..._ });
    });
    f.call(J);
  }
  function v() {
    f.on(".drag", null);
  }
  return {
    update: g,
    destroy: v
  };
}
var Td = { exports: {} }, Md = {}, Cd = { exports: {} }, zd = {};
var vv;
function H3() {
  if (vv) return zd;
  vv = 1;
  var l = Ju();
  function a(m, x) {
    return m === x && (m !== 0 || 1 / m === 1 / x) || m !== m && x !== x;
  }
  var o = typeof Object.is == "function" ? Object.is : a, r = l.useState, s = l.useEffect, f = l.useLayoutEffect, d = l.useDebugValue;
  function g(m, x) {
    var S = x(), E = r({ inst: { value: S, getSnapshot: x } }), A = E[0].inst, N = E[1];
    return f(
      function() {
        A.value = S, A.getSnapshot = x, v(A) && N({ inst: A });
      },
      [m, S, x]
    ), s(
      function() {
        return v(A) && N({ inst: A }), m(function() {
          v(A) && N({ inst: A });
        });
      },
      [m]
    ), d(S), S;
  }
  function v(m) {
    var x = m.getSnapshot;
    m = m.value;
    try {
      var S = x();
      return !o(m, S);
    } catch {
      return !0;
    }
  }
  function p(m, x) {
    return x();
  }
  var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : g;
  return zd.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : y, zd;
}
var pv;
function B3() {
  return pv || (pv = 1, Cd.exports = H3()), Cd.exports;
}
var xv;
function L3() {
  if (xv) return Md;
  xv = 1;
  var l = Ju(), a = B3();
  function o(p, y) {
    return p === y && (p !== 0 || 1 / p === 1 / y) || p !== p && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : o, s = a.useSyncExternalStore, f = l.useRef, d = l.useEffect, g = l.useMemo, v = l.useDebugValue;
  return Md.useSyncExternalStoreWithSelector = function(p, y, m, x, S) {
    var E = f(null);
    if (E.current === null) {
      var A = { hasValue: !1, value: null };
      E.current = A;
    } else A = E.current;
    E = g(
      function() {
        function _(H) {
          if (!L) {
            if (L = !0, w = H, H = x(H), S !== void 0 && A.hasValue) {
              var R = A.value;
              if (S(R, H))
                return M = R;
            }
            return M = H;
          }
          if (R = M, r(w, H)) return R;
          var Z = x(H);
          return S !== void 0 && S(R, Z) ? (w = H, R) : (w = H, M = Z);
        }
        var L = !1, w, M, Y = m === void 0 ? null : m;
        return [
          function() {
            return _(y());
          },
          Y === null ? void 0 : function() {
            return _(Y());
          }
        ];
      },
      [y, m, x, S]
    );
    var N = s(p, E[0], E[1]);
    return d(
      function() {
        A.hasValue = !0, A.value = N;
      },
      [N]
    ), v(N), N;
  }, Md;
}
var bv;
function U3() {
  return bv || (bv = 1, Td.exports = L3()), Td.exports;
}
var V3 = U3();
const Y3 = /* @__PURE__ */ $d(V3), j3 = {}, Sv = (l) => {
  let a;
  const o = /* @__PURE__ */ new Set(), r = (y, m) => {
    const x = typeof y == "function" ? y(a) : y;
    if (!Object.is(x, a)) {
      const S = a;
      a = m ?? (typeof x != "object" || x === null) ? x : Object.assign({}, a, x), o.forEach((E) => E(a, S));
    }
  }, s = () => a, v = { setState: r, getState: s, getInitialState: () => p, subscribe: (y) => (o.add(y), () => o.delete(y)), destroy: () => {
    (j3 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), o.clear();
  } }, p = a = l(r, s, v);
  return v;
}, q3 = (l) => l ? Sv(l) : Sv, { useDebugValue: X3 } = Jv, { useSyncExternalStoreWithSelector: Z3 } = Y3, G3 = (l) => l;
function d1(l, a = G3, o) {
  const r = Z3(
    l.subscribe,
    l.getState,
    l.getServerState || l.getInitialState,
    a,
    o
  );
  return X3(r), r;
}
const Ev = (l, a) => {
  const o = q3(l), r = (s, f = a) => d1(o, s, f);
  return Object.assign(r, o), r;
}, Q3 = (l, a) => l ? Ev(l, a) : Ev;
function kt(l, a) {
  if (Object.is(l, a))
    return !0;
  if (typeof l != "object" || l === null || typeof a != "object" || a === null)
    return !1;
  if (l instanceof Map && a instanceof Map) {
    if (l.size !== a.size) return !1;
    for (const [r, s] of l)
      if (!Object.is(s, a.get(r)))
        return !1;
    return !0;
  }
  if (l instanceof Set && a instanceof Set) {
    if (l.size !== a.size) return !1;
    for (const r of l)
      if (!a.has(r))
        return !1;
    return !0;
  }
  const o = Object.keys(l);
  if (o.length !== Object.keys(a).length)
    return !1;
  for (const r of o)
    if (!Object.prototype.hasOwnProperty.call(a, r) || !Object.is(l[r], a[r]))
      return !1;
  return !0;
}
kv();
const Sr = W.createContext(null), K3 = Sr.Provider, h1 = xn.error001("react");
function Lt(l, a) {
  const o = W.useContext(Sr);
  if (o === null)
    throw new Error(h1);
  return d1(o, l, a);
}
function $t() {
  const l = W.useContext(Sr);
  if (l === null)
    throw new Error(h1);
  return W.useMemo(() => ({
    getState: l.getState,
    setState: l.setState,
    subscribe: l.subscribe
  }), [l]);
}
const wv = { display: "none" }, $3 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, g1 = "react-flow__node-desc", m1 = "react-flow__edge-desc", I3 = "react-flow__aria-live", J3 = (l) => l.ariaLiveMessage, k3 = (l) => l.ariaLabelConfig;
function F3({ rfId: l }) {
  const a = Lt(J3);
  return G.jsx("div", { id: `${I3}-${l}`, "aria-live": "assertive", "aria-atomic": "true", style: $3, children: a });
}
function W3({ rfId: l, disableKeyboardA11y: a }) {
  const o = Lt(k3);
  return G.jsxs(G.Fragment, { children: [G.jsx("div", { id: `${g1}-${l}`, style: wv, children: a ? o["node.a11yDescription.default"] : o["node.a11yDescription.keyboardDisabled"] }), G.jsx("div", { id: `${m1}-${l}`, style: wv, children: o["edge.a11yDescription.default"] }), !a && G.jsx(F3, { rfId: l })] });
}
const Er = W.forwardRef(({ position: l = "top-left", children: a, className: o, style: r, ...s }, f) => {
  const d = `${l}`.split("-");
  return G.jsx("div", { className: ue(["react-flow__panel", o, ...d]), style: r, ref: f, ...s, children: a });
});
Er.displayName = "Panel";
const _v = "https://reactflow.dev?utm_source=attribution";
function P3({ proOptions: l, position: a = "bottom-right" }) {
  return W.useEffect(() => {
  }, []), l?.hideAttribution ? null : G.jsx(Er, { position: a, className: "react-flow__attribution", "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${_v}`, children: G.jsx("a", { href: _v, target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const tN = (l) => {
  const a = [], o = [];
  for (const [, r] of l.nodeLookup)
    r.selected && a.push(r.internals.userNode);
  for (const [, r] of l.edgeLookup)
    r.selected && o.push(r);
  return { selectedNodes: a, selectedEdges: o };
}, Kc = (l) => l.id;
function eN(l, a) {
  return kt(l.selectedNodes.map(Kc), a.selectedNodes.map(Kc)) && kt(l.selectedEdges.map(Kc), a.selectedEdges.map(Kc));
}
function nN({ onSelectionChange: l }) {
  const a = $t(), { selectedNodes: o, selectedEdges: r } = Lt(tN, eN);
  return W.useEffect(() => {
    const s = { nodes: o, edges: r };
    l?.(s), a.getState().onSelectionChangeHandlers.forEach((f) => f(s));
  }, [o, r, l]), null;
}
const lN = (l) => !!l.onSelectionChangeHandlers;
function iN({ onSelectionChange: l }) {
  const a = Lt(lN);
  return l || a ? G.jsx(nN, { onSelectionChange: l }) : null;
}
const y1 = [0, 0], aN = { x: 0, y: 0, zoom: 1 }, uN = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], Nv = [...uN, "rfId"], oN = (l) => ({
  setNodes: l.setNodes,
  setEdges: l.setEdges,
  setMinZoom: l.setMinZoom,
  setMaxZoom: l.setMaxZoom,
  setTranslateExtent: l.setTranslateExtent,
  setNodeExtent: l.setNodeExtent,
  reset: l.reset,
  setDefaultNodesAndEdges: l.setDefaultNodesAndEdges
}), Tv = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Gu,
  nodeOrigin: y1,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function cN(l) {
  const { setNodes: a, setEdges: o, setMinZoom: r, setMaxZoom: s, setTranslateExtent: f, setNodeExtent: d, reset: g, setDefaultNodesAndEdges: v } = Lt(oN, kt), p = $t();
  W.useEffect(() => (v(l.defaultNodes, l.defaultEdges), () => {
    y.current = Tv, g();
  }), []);
  const y = W.useRef(Tv);
  return W.useEffect(
    () => {
      for (const m of Nv) {
        const x = l[m], S = y.current[m];
        x !== S && (typeof l[m] > "u" || (m === "nodes" ? a(x) : m === "edges" ? o(x) : m === "minZoom" ? r(x) : m === "maxZoom" ? s(x) : m === "translateExtent" ? f(x) : m === "nodeExtent" ? d(x) : m === "ariaLabelConfig" ? p.setState({ ariaLabelConfig: Q_(x) }) : m === "fitView" ? p.setState({ fitViewQueued: x }) : m === "fitViewOptions" ? p.setState({ fitViewOptions: x }) : p.setState({ [m]: x })));
      }
      y.current = l;
    },
    // Only re-run the effect if one of the fields we track changes
    Nv.map((m) => l[m])
  ), null;
}
function Mv() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function rN(l) {
  const [a, o] = W.useState(l === "system" ? null : l);
  return W.useEffect(() => {
    if (l !== "system") {
      o(l);
      return;
    }
    const r = Mv(), s = () => o(r?.matches ? "dark" : "light");
    return s(), r?.addEventListener("change", s), () => {
      r?.removeEventListener("change", s);
    };
  }, [l]), a !== null ? a : Mv()?.matches ? "dark" : "light";
}
const Cv = typeof document < "u" ? document : null;
function Iu(l = null, a = { target: Cv, actInsideInputWithModifier: !0 }) {
  const [o, r] = W.useState(!1), s = W.useRef(!1), f = W.useRef(/* @__PURE__ */ new Set([])), [d, g] = W.useMemo(() => {
    if (l !== null) {
      const p = (Array.isArray(l) ? l : [l]).filter((m) => typeof m == "string").map((m) => m.replace(/\+/g, `
`).replace(`

`, `
+`).split(`
`)), y = p.reduce((m, x) => m.concat(...x), []);
      return [p, y];
    }
    return [[], []];
  }, [l]);
  return W.useEffect(() => {
    const v = a?.target ?? Cv, p = a?.actInsideInputWithModifier ?? !0;
    if (l !== null) {
      const y = (S) => {
        if (s.current = S.ctrlKey || S.metaKey || S.shiftKey || S.altKey, (!s.current || s.current && !p) && kp(S))
          return !1;
        const A = Av(S.code, g);
        if (f.current.add(S[A]), zv(d, f.current, !1)) {
          const N = S.composedPath?.()?.[0] || S.target, _ = N?.nodeName === "BUTTON" || N?.nodeName === "A";
          a.preventDefault !== !1 && (s.current || !_) && S.preventDefault(), r(!0);
        }
      }, m = (S) => {
        const E = Av(S.code, g);
        zv(d, f.current, !0) ? (r(!1), f.current.clear()) : f.current.delete(S[E]), S.key === "Meta" && f.current.clear(), s.current = !1;
      }, x = () => {
        f.current.clear(), r(!1);
      };
      return v?.addEventListener("keydown", y), v?.addEventListener("keyup", m), window.addEventListener("blur", x), window.addEventListener("contextmenu", x), () => {
        v?.removeEventListener("keydown", y), v?.removeEventListener("keyup", m), window.removeEventListener("blur", x), window.removeEventListener("contextmenu", x);
      };
    }
  }, [l, r]), o;
}
function zv(l, a, o) {
  return l.filter((r) => o || r.length === a.size).some((r) => r.every((s) => a.has(s)));
}
function Av(l, a) {
  return a.includes(l) ? "code" : "key";
}
const sN = () => {
  const l = $t();
  return W.useMemo(() => ({
    zoomIn: async (a) => {
      const { panZoom: o } = l.getState();
      return o ? o.scaleBy(1.2, a) : !1;
    },
    zoomOut: async (a) => {
      const { panZoom: o } = l.getState();
      return o ? o.scaleBy(1 / 1.2, a) : !1;
    },
    zoomTo: async (a, o) => {
      const { panZoom: r } = l.getState();
      return r ? r.scaleTo(a, o) : !1;
    },
    getZoom: () => l.getState().transform[2],
    setViewport: async (a, o) => {
      const { transform: [r, s, f], panZoom: d } = l.getState();
      return d ? (await d.setViewport({
        x: a.x ?? r,
        y: a.y ?? s,
        zoom: a.zoom ?? f
      }, o), !0) : !1;
    },
    getViewport: () => {
      const [a, o, r] = l.getState().transform;
      return { x: a, y: o, zoom: r };
    },
    setCenter: async (a, o, r) => l.getState().setCenter(a, o, r),
    fitBounds: async (a, o) => {
      const { width: r, height: s, minZoom: f, maxZoom: d, panZoom: g } = l.getState(), v = rh(a, r, s, f, d, o?.padding ?? 0.1);
      return g ? (await g.setViewport(v, {
        duration: o?.duration,
        ease: o?.ease,
        interpolate: o?.interpolate
      }), !0) : !1;
    },
    screenToFlowPosition: (a, o = {}) => {
      const { transform: r, snapGrid: s, snapToGrid: f, domNode: d } = l.getState();
      if (!d)
        return a;
      const { x: g, y: v } = d.getBoundingClientRect(), p = {
        x: a.x - g,
        y: a.y - v
      }, y = o.snapGrid ?? s, m = o.snapToGrid ?? f;
      return eo(p, r, m, y);
    },
    flowToScreenPosition: (a) => {
      const { transform: o, domNode: r } = l.getState();
      if (!r)
        return a;
      const { x: s, y: f } = r.getBoundingClientRect(), d = Oa(a, o);
      return {
        x: d.x + s,
        y: d.y + f
      };
    }
  }), []);
};
function v1(l, a) {
  const o = [], r = /* @__PURE__ */ new Map(), s = [];
  for (const f of l)
    if (f.type === "add") {
      s.push(f);
      continue;
    } else if (f.type === "remove" || f.type === "replace")
      r.set(f.id, [f]);
    else {
      const d = r.get(f.id);
      d ? d.push(f) : r.set(f.id, [f]);
    }
  for (const f of a) {
    const d = r.get(f.id);
    if (!d) {
      o.push(f);
      continue;
    }
    if (d[0].type === "remove")
      continue;
    if (d[0].type === "replace") {
      o.push({ ...d[0].item });
      continue;
    }
    const g = { ...f };
    for (const v of d)
      fN(v, g);
    o.push(g);
  }
  return s.length && s.forEach((f) => {
    f.index !== void 0 ? o.splice(f.index, 0, { ...f.item }) : o.push({ ...f.item });
  }), o;
}
function fN(l, a) {
  switch (l.type) {
    case "select": {
      a.selected = l.selected;
      break;
    }
    case "position": {
      typeof l.position < "u" && (a.position = l.position), typeof l.dragging < "u" && (a.dragging = l.dragging);
      break;
    }
    case "dimensions": {
      typeof l.dimensions < "u" && (a.measured = {
        ...l.dimensions
      }, l.setAttributes && ((l.setAttributes === !0 || l.setAttributes === "width") && (a.width = l.dimensions.width), (l.setAttributes === !0 || l.setAttributes === "height") && (a.height = l.dimensions.height))), typeof l.resizing == "boolean" && (a.resizing = l.resizing);
      break;
    }
  }
}
function p1(l, a) {
  return v1(l, a);
}
function x1(l, a) {
  return v1(l, a);
}
function mi(l, a) {
  return {
    id: l,
    type: "select",
    selected: a
  };
}
function ba(l, a = /* @__PURE__ */ new Set()) {
  const o = [];
  for (const [r, s] of l) {
    const f = a.has(r);
    !(s.selected === void 0 && !f) && s.selected !== f && o.push(mi(s.id, f));
  }
  return o;
}
function Ov({ items: l = [], lookup: a }) {
  const o = [], r = new Map(l.map((s) => [s.id, s]));
  for (const [s, f] of l.entries()) {
    const d = a.get(f.id), g = d?.internals?.userNode ?? d;
    g !== void 0 && g !== f && o.push({ id: f.id, item: f, type: "replace" }), g === void 0 && o.push({ item: f, type: "add", index: s });
  }
  for (const [s] of a)
    r.get(s) === void 0 && o.push({ id: s, type: "remove" });
  return o;
}
function Dv(l) {
  return {
    id: l.id,
    type: "remove"
  };
}
const dN = Qp();
function hN(l, a, o = {}) {
  return F_(l, a, {
    ...o,
    onError: o.onError ?? dN
  });
}
const Rv = (l) => L_(l), gN = (l) => jp(l);
function b1(l) {
  return W.forwardRef(l);
}
const S1 = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function Hv(l) {
  const [a, o] = W.useState(BigInt(0)), [r] = W.useState(() => mN(() => o((s) => s + BigInt(1))));
  return S1(() => {
    const s = r.get();
    s.length && (l(s), r.reset());
  }, [a]), r;
}
function mN(l) {
  let a = [];
  return {
    get: () => a,
    reset: () => {
      a = [];
    },
    push: (o) => {
      a.push(o), l();
    }
  };
}
const E1 = W.createContext(null);
function yN({ children: l }) {
  const a = $t(), o = W.useCallback((g) => {
    const { nodes: v = [], setNodes: p, hasDefaultNodes: y, onNodesChange: m, nodeLookup: x, fitViewQueued: S, onNodesChangeMiddlewareMap: E } = a.getState();
    let A = v;
    for (const _ of g)
      A = typeof _ == "function" ? _(A) : _;
    let N = Ov({
      items: A,
      lookup: x
    });
    for (const _ of E.values())
      N = _(N);
    y && p(A), N.length > 0 ? m?.(N) : S && window.requestAnimationFrame(() => {
      const { fitViewQueued: _, nodes: L, setNodes: w } = a.getState();
      _ && w(L);
    });
  }, []), r = Hv(o), s = W.useCallback((g) => {
    const { edges: v = [], setEdges: p, hasDefaultEdges: y, onEdgesChange: m, edgeLookup: x } = a.getState();
    let S = v;
    for (const E of g)
      S = typeof E == "function" ? E(S) : E;
    y ? p(S) : m && m(Ov({
      items: S,
      lookup: x
    }));
  }, []), f = Hv(s), d = W.useMemo(() => ({ nodeQueue: r, edgeQueue: f }), []);
  return G.jsx(E1.Provider, { value: d, children: l });
}
function vN() {
  const l = W.useContext(E1);
  if (!l)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return l;
}
const pN = (l) => !!l.panZoom;
function wr() {
  const l = sN(), a = $t(), o = vN(), r = Lt(pN), s = W.useMemo(() => {
    const f = (m) => a.getState().nodeLookup.get(m), d = (m) => {
      o.nodeQueue.push(m);
    }, g = (m) => {
      o.edgeQueue.push(m);
    }, v = (m) => {
      const { nodeLookup: x, nodeOrigin: S } = a.getState(), E = Rv(m) ? m : x.get(m.id), A = E.parentId ? $p(E.position, E.measured, E.parentId, x, S) : E.position, N = {
        ...E,
        position: A,
        width: E.measured?.width ?? E.width,
        height: E.measured?.height ?? E.height
      };
      return Ku(N, E.parentId ? void 0 : S);
    }, p = (m, x, S = { replace: !1 }) => {
      d((E) => E.map((A) => {
        if (A.id === m) {
          const N = typeof x == "function" ? x(A) : x;
          return S.replace && Rv(N) ? N : { ...A, ...N };
        }
        return A;
      }));
    }, y = (m, x, S = { replace: !1 }) => {
      g((E) => E.map((A) => {
        if (A.id === m) {
          const N = typeof x == "function" ? x(A) : x;
          return S.replace && gN(N) ? N : { ...A, ...N };
        }
        return A;
      }));
    };
    return {
      getNodes: () => a.getState().nodes.map((m) => ({ ...m })),
      getNode: (m) => f(m)?.internals.userNode,
      getInternalNode: f,
      getEdges: () => {
        const { edges: m = [] } = a.getState();
        return m.map((x) => ({ ...x }));
      },
      getEdge: (m) => a.getState().edgeLookup.get(m),
      setNodes: d,
      setEdges: g,
      addNodes: (m) => {
        const x = Array.isArray(m) ? m : [m];
        o.nodeQueue.push((S) => [...S, ...x]);
      },
      addEdges: (m) => {
        const x = Array.isArray(m) ? m : [m];
        o.edgeQueue.push((S) => [...S, ...x]);
      },
      toObject: () => {
        const { nodes: m = [], edges: x = [], transform: S } = a.getState(), [E, A, N] = S;
        return {
          nodes: m.map((_) => ({ ..._ })),
          edges: x.map((_) => ({ ..._ })),
          viewport: {
            x: E,
            y: A,
            zoom: N
          }
        };
      },
      deleteElements: async ({ nodes: m = [], edges: x = [] }) => {
        const { nodes: S, edges: E, onNodesDelete: A, onEdgesDelete: N, triggerNodeChanges: _, triggerEdgeChanges: L, onDelete: w, onBeforeDelete: M } = a.getState(), { nodes: Y, edges: H } = await q_({
          nodesToRemove: m,
          edgesToRemove: x,
          nodes: S,
          edges: E,
          onBeforeDelete: M
        }), R = H.length > 0, Z = Y.length > 0;
        if (R) {
          const J = H.map(Dv);
          N?.(H), L(J);
        }
        if (Z) {
          const J = Y.map(Dv);
          A?.(Y), _(J);
        }
        return (Z || R) && w?.({ nodes: Y, edges: H }), { deletedNodes: Y, deletedEdges: H };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (m, x = !0, S) => {
        const E = iv(m), A = E ? m : v(m), N = S !== void 0;
        if (!A)
          return [];
        const { nodeOrigin: _ } = a.getState();
        return (S || a.getState().nodes).filter((L) => {
          const w = a.getState().nodeLookup.get(L.id);
          if (w && !E && (L.id === m.id || !w.internals.positionAbsolute))
            return !1;
          const M = Ku(N ? L : w, _), Y = rr(M, A);
          return x && Y > 0 || Y >= M.width * M.height || Y >= A.width * A.height;
        });
      },
      isNodeIntersecting: (m, x, S = !0) => {
        const A = iv(m) ? m : v(m);
        if (!A)
          return !1;
        const N = rr(A, x);
        return S && N > 0 || N >= x.width * x.height || N >= A.width * A.height;
      },
      updateNode: p,
      updateNodeData: (m, x, S = { replace: !1 }) => {
        p(m, (E) => {
          const A = typeof x == "function" ? x(E) : x;
          return S.replace ? { ...E, data: A } : { ...E, data: { ...E.data, ...A } };
        }, S);
      },
      updateEdge: y,
      updateEdgeData: (m, x, S = { replace: !1 }) => {
        y(m, (E) => {
          const A = typeof x == "function" ? x(E) : x;
          return S.replace ? { ...E, data: A } : { ...E, data: { ...E.data, ...A } };
        }, S);
      },
      getNodesBounds: (m) => {
        const { nodeLookup: x, nodeOrigin: S } = a.getState();
        return U_(m, { nodeLookup: x, nodeOrigin: S });
      },
      getHandleConnections: ({ type: m, id: x, nodeId: S }) => Array.from(a.getState().connectionLookup.get(`${S}-${m}${x ? `-${x}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: m, handleId: x, nodeId: S }) => Array.from(a.getState().connectionLookup.get(`${S}${m ? x ? `-${m}-${x}` : `-${m}` : ""}`)?.values() ?? []),
      fitView: async (m) => {
        const x = a.getState().fitViewResolver ?? G_();
        return a.setState({ fitViewQueued: !0, fitViewOptions: m, fitViewResolver: x }), o.nodeQueue.push((S) => [...S]), x.promise;
      }
    };
  }, []);
  return W.useMemo(() => ({
    ...s,
    ...l,
    viewportInitialized: r
  }), [r]);
}
const Bv = (l) => l.selected, xN = typeof window < "u" ? window : void 0;
function bN({ deleteKeyCode: l, multiSelectionKeyCode: a }) {
  const o = $t(), { deleteElements: r } = wr(), s = Iu(l, { actInsideInputWithModifier: !1 }), f = Iu(a, { target: xN });
  W.useEffect(() => {
    if (s) {
      const { edges: d, nodes: g } = o.getState();
      r({ nodes: g.filter(Bv), edges: d.filter(Bv) }), o.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), W.useEffect(() => {
    o.setState({ multiSelectionActive: f });
  }, [f]);
}
function SN(l) {
  const a = $t();
  W.useEffect(() => {
    const o = () => {
      if (!l.current || !(l.current.checkVisibility?.() ?? !0))
        return !1;
      const r = sh(l.current);
      (r.height === 0 || r.width === 0) && a.getState().onError?.("004", xn.error004()), a.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (l.current) {
      o(), window.addEventListener("resize", o);
      const r = new ResizeObserver(() => o());
      return r.observe(l.current), () => {
        window.removeEventListener("resize", o), r.disconnect();
      };
    }
  }, []);
}
const _r = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, EN = (l) => ({
  userSelectionActive: l.userSelectionActive,
  lib: l.lib,
  connectionInProgress: l.connection.inProgress
});
function wN({ onPaneContextMenu: l, zoomOnScroll: a = !0, zoomOnPinch: o = !0, panOnScroll: r = !1, panActivationKeyPressed: s, panOnScrollSpeed: f = 0.5, panOnScrollMode: d = xi.Free, zoomOnDoubleClick: g = !0, panOnDrag: v = !0, defaultViewport: p, translateExtent: y, minZoom: m, maxZoom: x, zoomActivationKeyCode: S, preventScrolling: E = !0, children: A, noWheelClassName: N, noPanClassName: _, onViewportChange: L, isControlledViewport: w, paneClickDistance: M, selectionOnDrag: Y }) {
  const H = $t(), R = W.useRef(null), { userSelectionActive: Z, lib: J, connectionInProgress: at } = Lt(EN, kt), tt = Iu(S), ot = W.useRef();
  SN(R);
  const lt = W.useCallback((C) => {
    L?.({ x: C[0], y: C[1], zoom: C[2] }), w || H.setState({ transform: C });
  }, [L, w]);
  return W.useEffect(() => {
    if (R.current) {
      ot.current = C3({
        domNode: R.current,
        minZoom: m,
        maxZoom: x,
        translateExtent: y,
        viewport: p,
        onDraggingChange: (B) => H.setState((X) => X.paneDragging === B ? X : { paneDragging: B }),
        onPanZoomStart: (B, X) => {
          const { onViewportChangeStart: $, onMoveStart: P } = H.getState();
          P?.(B, X), $?.(X);
        },
        onPanZoom: (B, X) => {
          const { onViewportChange: $, onMove: P } = H.getState();
          P?.(B, X), $?.(X);
        },
        onPanZoomEnd: (B, X) => {
          const { onViewportChangeEnd: $, onMoveEnd: P } = H.getState();
          P?.(B, X), $?.(X);
        }
      });
      const { x: C, y: V, zoom: O } = ot.current.getViewport();
      return H.setState({
        panZoom: ot.current,
        transform: [C, V, O],
        domNode: R.current.closest(".react-flow")
      }), () => {
        ot.current?.destroy();
      };
    }
  }, []), W.useEffect(() => {
    ot.current?.update({
      onPaneContextMenu: l,
      zoomOnScroll: a,
      zoomOnPinch: o,
      panOnScroll: r,
      panActivationKeyPressed: s,
      panOnScrollSpeed: f,
      panOnScrollMode: d,
      zoomOnDoubleClick: g,
      panOnDrag: v,
      zoomActivationKeyPressed: tt,
      preventScrolling: E,
      noPanClassName: _,
      userSelectionActive: Z,
      noWheelClassName: N,
      lib: J,
      onTransformChange: lt,
      connectionInProgress: at,
      selectionOnDrag: Y,
      paneClickDistance: M
    });
  }, [
    l,
    a,
    o,
    r,
    s,
    f,
    d,
    g,
    v,
    tt,
    E,
    _,
    Z,
    N,
    J,
    lt,
    at,
    Y,
    M
  ]), G.jsx("div", { className: "react-flow__renderer", ref: R, style: _r, children: A });
}
const _N = (l) => ({
  userSelectionActive: l.userSelectionActive,
  userSelectionRect: l.userSelectionRect
});
function NN() {
  const { userSelectionActive: l, userSelectionRect: a } = Lt(_N, kt);
  return l && a ? G.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: a.width,
    height: a.height,
    transform: `translate(${a.x}px, ${a.y}px)`
  } }) : null;
}
const Ad = (l, a) => (o) => {
  o.target === a.current && l?.(o);
}, TN = (l) => ({
  userSelectionActive: l.userSelectionActive,
  elementsSelectable: l.elementsSelectable,
  dragging: l.paneDragging,
  panBy: l.panBy,
  autoPanSpeed: l.autoPanSpeed
});
function MN({ isSelecting: l, selectionKeyPressed: a, selectionMode: o = Qu.Full, panOnDrag: r, autoPanOnSelection: s, paneClickDistance: f, selectionOnDrag: d, onSelectionStart: g, onSelectionEnd: v, onPaneClick: p, onPaneContextMenu: y, onPaneScroll: m, onPaneMouseEnter: x, onPaneMouseMove: S, onPaneMouseLeave: E, children: A }) {
  const N = W.useRef(0), _ = $t(), { userSelectionActive: L, elementsSelectable: w, dragging: M, panBy: Y, autoPanSpeed: H } = Lt(TN, kt), R = w && (l || L), Z = W.useRef(null), J = W.useRef(), at = W.useRef(/* @__PURE__ */ new Set()), tt = W.useRef(/* @__PURE__ */ new Set()), ot = W.useRef(!1), lt = W.useRef(!1), C = W.useRef({ x: 0, y: 0 }), V = W.useRef(!1), O = (k) => {
    if (lt.current || ot.current || _.getState().connection.inProgress) {
      lt.current = !1, ot.current = !1;
      return;
    }
    const { connectionClickStartHandle: ft, connection: gt, onClickConnectEnd: ct, resetSelectedElements: rt } = _.getState();
    if (ft) {
      const vt = structuredClone(gt);
      delete vt.inProgress, vt.toPosition = vt.toHandle ? vt.toHandle.position : null, ct?.(k.nativeEvent, vt), _.setState({ connectionClickStartHandle: null });
    }
    p?.(k), rt(), _.setState({ nodesSelectionActive: !1 });
  }, B = (k) => {
    if (Array.isArray(r) && r?.includes(2)) {
      k.preventDefault();
      return;
    }
    y?.(k);
  }, X = m ? (k) => m(k) : void 0, $ = (k) => {
    lt.current && (k.stopPropagation(), lt.current = !1);
  }, P = (k) => {
    if (k.pointerType === "touch" && r !== !1 && !a)
      return;
    const { domNode: ft, transform: gt } = _.getState();
    if (J.current = ft?.getBoundingClientRect(), !J.current)
      return;
    const ct = k.target === Z.current;
    if (!ct && !!k.target.closest(".nokey") || !l || !(d && ct || a) || k.button !== 0 || !k.isPrimary)
      return;
    k.target?.setPointerCapture?.(k.pointerId), lt.current = !1;
    const { x: _t, y: wt } = pn(k.nativeEvent, J.current), Mt = eo({ x: _t, y: wt }, gt);
    _.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: Mt.x,
        startY: Mt.y,
        x: _t,
        y: wt
      }
    }), ct || (k.stopPropagation(), k.preventDefault());
  };
  function it(k, ft) {
    const { userSelectionRect: gt } = _.getState();
    if (!gt)
      return;
    const { transform: ct, nodeLookup: rt, edgeLookup: vt, connectionLookup: _t, triggerNodeChanges: wt, triggerEdgeChanges: Mt, defaultEdgeOptions: Ht } = _.getState(), Ot = { x: gt.startX, y: gt.startY }, { x: Pt, y: be } = Oa(Ot, ct), re = {
      startX: Ot.x,
      startY: Ot.y,
      x: k < Pt ? k : Pt,
      y: ft < be ? ft : be,
      width: Math.abs(k - Pt),
      height: Math.abs(ft - be)
    }, En = at.current, Je = tt.current;
    at.current = new Set(oh(rt, re, ct, o === Qu.Partial, !0).map((we) => we.id)), tt.current = /* @__PURE__ */ new Set();
    const Oe = Ht?.selectable ?? !0;
    for (const we of at.current) {
      const De = _t.get(we);
      if (De)
        for (const { edgeId: Ve } of De.values()) {
          const wn = vt.get(Ve);
          wn && (wn.selectable ?? Oe) && tt.current.add(Ve);
        }
    }
    if (!av(En, at.current)) {
      const we = ba(rt, at.current);
      wt(we);
    }
    if (!av(Je, tt.current)) {
      const we = ba(vt, tt.current);
      Mt(we);
    }
    _.setState({
      userSelectionRect: re,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function dt() {
    if (!s || !J.current)
      return;
    const [k, ft] = ch(C.current, J.current, H);
    Y({ x: k, y: ft }).then((gt) => {
      if (!lt.current || !gt) {
        N.current = requestAnimationFrame(dt);
        return;
      }
      const { x: ct, y: rt } = C.current;
      it(ct, rt), N.current = requestAnimationFrame(dt);
    });
  }
  const xt = () => {
    cancelAnimationFrame(N.current), N.current = 0, V.current = !1;
  };
  W.useEffect(() => () => xt(), []);
  const T = (k) => {
    const { userSelectionRect: ft, transform: gt, resetSelectedElements: ct } = _.getState();
    if (!J.current || !ft)
      return;
    const { x: rt, y: vt } = pn(k.nativeEvent, J.current);
    C.current = { x: rt, y: vt };
    const _t = Oa({ x: ft.startX, y: ft.startY }, gt);
    if (!lt.current) {
      const wt = a ? 0 : f;
      if (Math.hypot(rt - _t.x, vt - _t.y) <= wt)
        return;
      ct(), g?.(k);
    }
    lt.current = !0, V.current || (dt(), V.current = !0), it(rt, vt);
  }, F = (k) => {
    if (!R) {
      k.target === Z.current && _.getState().connection.inProgress && (ot.current = !0);
      return;
    }
    k.button === 0 && (k.target?.releasePointerCapture?.(k.pointerId), !L && k.target === Z.current && _.getState().userSelectionRect && O?.(k), _.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), lt.current && (v?.(k), _.setState({
      nodesSelectionActive: at.current.size > 0
    })), xt());
  }, st = (k) => {
    k.target?.releasePointerCapture?.(k.pointerId), xt();
  }, ut = r === !0 || Array.isArray(r) && r.includes(0);
  return G.jsxs("div", { className: ue(["react-flow__pane", { draggable: ut, dragging: M, selection: l }]), onClick: R ? void 0 : Ad(O, Z), onContextMenu: Ad(B, Z), onWheel: Ad(X, Z), onPointerEnter: R ? void 0 : x, onPointerMove: R ? T : S, onPointerUp: F, onPointerCancel: R ? st : void 0, onPointerDownCapture: R ? P : void 0, onClickCapture: R ? $ : void 0, onPointerLeave: E, ref: Z, style: _r, children: [A, G.jsx(NN, {})] });
}
function Kd({ id: l, store: a, unselect: o = !1, nodeRef: r }) {
  const { addSelectedNodes: s, unselectNodesAndEdges: f, multiSelectionActive: d, nodeLookup: g, onError: v } = a.getState(), p = g.get(l);
  if (!p) {
    v?.("012", xn.error012(l));
    return;
  }
  a.setState({ nodesSelectionActive: !1 }), p.selected ? (o || p.selected && d) && (f({ nodes: [p], edges: [] }), requestAnimationFrame(() => r?.current?.blur())) : s([l]);
}
function w1({ nodeRef: l, disabled: a = !1, noDragClassName: o, handleSelector: r, nodeId: s, isSelectable: f, nodeClickDistance: d }) {
  const g = $t(), [v, p] = W.useState(!1), y = W.useRef();
  return W.useEffect(() => {
    if (!a)
      return y.current = g3({
        getStoreItems: () => g.getState(),
        onNodeMouseDown: (m) => {
          Kd({
            id: m,
            store: g,
            nodeRef: l
          });
        },
        onDragStart: () => {
          p(!0);
        },
        onDragStop: () => {
          p(!1);
        }
      }), () => {
        y.current?.destroy(), y.current = void 0;
      };
  }, [a, g, l]), W.useEffect(() => {
    a || !l.current || !y.current || y.current.update({
      noDragClassName: o,
      handleSelector: r,
      domNode: l.current,
      isSelectable: f,
      nodeId: s,
      nodeClickDistance: d
    });
  }, [o, r, a, f, l, s, d]), v;
}
const CN = (l) => (a) => a.selected && (a.draggable || l && typeof a.draggable > "u");
function _1() {
  const l = $t();
  return W.useCallback((o) => {
    const { nodeExtent: r, snapToGrid: s, snapGrid: f, nodesDraggable: d, onError: g, updateNodePositions: v, nodeLookup: p, nodeOrigin: y } = l.getState(), m = /* @__PURE__ */ new Map(), x = CN(d), S = s ? f[0] : 5, E = s ? f[1] : 5, A = o.direction.x * S * o.factor, N = o.direction.y * E * o.factor;
    for (const [, _] of p) {
      if (!x(_))
        continue;
      let L = {
        x: _.internals.positionAbsolute.x + A,
        y: _.internals.positionAbsolute.y + N
      };
      s && (L = to(L, f));
      const { position: w, positionAbsolute: M } = qp({
        nodeId: _.id,
        nextPosition: L,
        nodeLookup: p,
        nodeExtent: r,
        nodeOrigin: y,
        onError: g
      });
      _.position = w, _.internals.positionAbsolute = M, m.set(_.id, _);
    }
    v(m);
  }, []);
}
const vh = W.createContext(null), zN = vh.Provider;
vh.Consumer;
const N1 = () => W.useContext(vh), AN = (l) => ({
  connectOnClick: l.connectOnClick,
  noPanClassName: l.noPanClassName,
  rfId: l.rfId
}), T1 = W.createContext(null);
function ON({ children: l }) {
  const a = Lt(AN, kt);
  return G.jsx(T1.Provider, { value: a, children: l });
}
function DN() {
  const l = W.useContext(T1);
  if (!l)
    throw new Error("useHandleConfig must be used within a HandleConfigProvider");
  return l;
}
const RN = {
  connectingFrom: !1,
  connectingTo: !1,
  clickConnecting: !1,
  isPossibleEndHandle: !0,
  connectionInProcess: !1,
  clickConnectionInProcess: !1,
  valid: !1
}, HN = (l, a, o) => (r) => {
  const { connectionClickStartHandle: s, connectionMode: f, connection: d } = r, { fromHandle: g, toHandle: v, isValid: p } = d;
  if (!g && !s)
    return RN;
  const y = v?.nodeId === l && v?.id === a && v?.type === o;
  return {
    connectingFrom: g?.nodeId === l && g?.id === a && g?.type === o,
    connectingTo: y,
    clickConnecting: s?.nodeId === l && s?.id === a && s?.type === o,
    isPossibleEndHandle: f === za.Strict ? g?.type !== o : l !== g?.nodeId || a !== g?.id,
    connectionInProcess: !!g,
    clickConnectionInProcess: !!s,
    valid: y && p
  };
};
function BN({ type: l = "source", position: a = pt.Top, isValidConnection: o, isConnectable: r = !0, isConnectableStart: s = !0, isConnectableEnd: f = !0, id: d, onConnect: g, children: v, className: p, onMouseDown: y, onTouchStart: m, ...x }, S) {
  const E = d || null, A = l === "target", N = $t(), _ = N1(), { connectOnClick: L, noPanClassName: w, rfId: M } = DN(), { connectingFrom: Y, connectingTo: H, clickConnecting: R, isPossibleEndHandle: Z, connectionInProcess: J, clickConnectionInProcess: at, valid: tt } = Lt(HN(_, E, l), kt);
  _ || N.getState().onError?.("010", xn.error010());
  const ot = (V) => {
    const { defaultEdgeOptions: O, onConnect: B, hasDefaultEdges: X } = N.getState(), $ = {
      ...O,
      ...V
    };
    if (X) {
      const { edges: P, setEdges: it, onError: dt } = N.getState();
      it(hN($, P, { onError: dt }));
    }
    B?.($), g?.($);
  }, lt = (V) => {
    if (!_)
      return;
    const O = Fp(V.nativeEvent);
    if (s && (O && V.button === 0 || !O)) {
      const B = N.getState();
      Qd.onPointerDown(V.nativeEvent, {
        handleDomNode: V.currentTarget,
        autoPanOnConnect: B.autoPanOnConnect,
        connectionMode: B.connectionMode,
        connectionRadius: B.connectionRadius,
        domNode: B.domNode,
        nodeLookup: B.nodeLookup,
        lib: B.lib,
        isTarget: A,
        handleId: E,
        nodeId: _,
        flowId: B.rfId,
        panBy: B.panBy,
        cancelConnection: B.cancelConnection,
        onConnectStart: B.onConnectStart,
        onConnectEnd: (...X) => N.getState().onConnectEnd?.(...X),
        updateConnection: B.updateConnection,
        onConnect: ot,
        isValidConnection: o || ((...X) => N.getState().isValidConnection?.(...X) ?? !0),
        getTransform: () => N.getState().transform,
        getFromHandle: () => N.getState().connection.fromHandle,
        autoPanSpeed: B.autoPanSpeed,
        dragThreshold: B.connectionDragThreshold
      });
    }
    O ? y?.(V) : m?.(V);
  }, C = (V) => {
    const { onClickConnectStart: O, onClickConnectEnd: B, connectionClickStartHandle: X, connectionMode: $, isValidConnection: P, lib: it, rfId: dt, nodeLookup: xt, connection: T } = N.getState();
    if (!_ || !X && !s)
      return;
    if (!X) {
      O?.(V.nativeEvent, { nodeId: _, handleId: E, handleType: l }), N.setState({ connectionClickStartHandle: { nodeId: _, type: l, id: E } });
      return;
    }
    const F = Jp(V.target), st = o || P, { connection: ut, isValid: k } = Qd.isValid(V.nativeEvent, {
      handle: {
        nodeId: _,
        id: E,
        type: l
      },
      connectionMode: $,
      fromNodeId: X.nodeId,
      fromHandleId: X.id || null,
      fromType: X.type,
      isValidConnection: st,
      flowId: dt,
      doc: F,
      lib: it,
      nodeLookup: xt
    });
    k && ut && ot(ut);
    const ft = structuredClone(T);
    delete ft.inProgress, ft.toPosition = ft.toHandle ? ft.toHandle.position : null, B?.(V, ft), N.setState({ connectionClickStartHandle: null });
  };
  return G.jsx("div", { "data-handleid": E, "data-nodeid": _, "data-handlepos": a, "data-id": `${M}-${_}-${E}-${l}`, className: ue([
    "react-flow__handle",
    `react-flow__handle-${a}`,
    "nodrag",
    w,
    p,
    {
      source: !A,
      target: A,
      connectable: r,
      connectablestart: s,
      connectableend: f,
      clickconnecting: R,
      connectingfrom: Y,
      connectingto: H,
      valid: tt,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!J || Z) && (J || at ? f : s)
    }
  ]), onMouseDown: lt, onTouchStart: lt, onClick: L ? C : void 0, ref: S, ...x, children: v });
}
const ul = W.memo(b1(BN));
function LN({ data: l, isConnectable: a, sourcePosition: o = pt.Bottom }) {
  return G.jsxs(G.Fragment, { children: [l?.label, G.jsx(ul, { type: "source", position: o, isConnectable: a })] });
}
function UN({ data: l, isConnectable: a, targetPosition: o = pt.Top, sourcePosition: r = pt.Bottom }) {
  return G.jsxs(G.Fragment, { children: [G.jsx(ul, { type: "target", position: o, isConnectable: a }), l?.label, G.jsx(ul, { type: "source", position: r, isConnectable: a })] });
}
function VN() {
  return null;
}
function YN({ data: l, isConnectable: a, targetPosition: o = pt.Top }) {
  return G.jsxs(G.Fragment, { children: [G.jsx(ul, { type: "target", position: o, isConnectable: a }), l?.label] });
}
const sr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, Lv = {
  input: LN,
  default: UN,
  output: YN,
  group: VN
};
function jN(l) {
  return l.internals.handleBounds === void 0 ? {
    width: l.width ?? l.initialWidth ?? l.style?.width,
    height: l.height ?? l.initialHeight ?? l.style?.height
  } : {
    width: l.width ?? l.style?.width,
    height: l.height ?? l.style?.height
  };
}
const qN = (l) => {
  const { width: a, height: o, x: r, y: s } = Pu(l.nodeLookup, {
    filter: (f) => !!f.selected
  });
  return {
    width: vn(a) ? a : null,
    height: vn(o) ? o : null,
    userSelectionActive: l.userSelectionActive,
    transformString: `translate(${l.transform[0]}px,${l.transform[1]}px) scale(${l.transform[2]}) translate(${r}px,${s}px)`
  };
};
function XN({ onSelectionContextMenu: l, noPanClassName: a, disableKeyboardA11y: o }) {
  const r = $t(), { width: s, height: f, transformString: d, userSelectionActive: g } = Lt(qN, kt), v = _1(), p = W.useRef(null);
  W.useEffect(() => {
    o || p.current?.focus({
      preventScroll: !0
    });
  }, [o]);
  const y = !g && s !== null && f !== null;
  if (w1({
    nodeRef: p,
    disabled: !y
  }), !y)
    return null;
  const m = l ? (S) => {
    const E = r.getState().nodes.filter((A) => A.selected);
    l(S, E);
  } : void 0, x = (S) => {
    Object.prototype.hasOwnProperty.call(sr, S.key) && (S.preventDefault(), v({
      direction: sr[S.key],
      factor: S.shiftKey ? 4 : 1
    }));
  };
  return G.jsx("div", { className: ue(["react-flow__nodesselection", "react-flow__container", a]), style: {
    transform: d
  }, children: G.jsx("div", { ref: p, className: "react-flow__nodesselection-rect", onContextMenu: m, tabIndex: o ? void 0 : -1, onKeyDown: o ? void 0 : x, style: {
    width: s,
    height: f
  } }) });
}
const Uv = typeof window < "u" ? window : void 0, ZN = (l) => ({ nodesSelectionActive: l.nodesSelectionActive, userSelectionActive: l.userSelectionActive });
function M1({ children: l, onPaneClick: a, onPaneMouseEnter: o, onPaneMouseMove: r, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, paneClickDistance: g, deleteKeyCode: v, selectionKeyCode: p, selectionOnDrag: y, selectionMode: m, onSelectionStart: x, onSelectionEnd: S, multiSelectionKeyCode: E, panActivationKeyCode: A, zoomActivationKeyCode: N, elementsSelectable: _, zoomOnScroll: L, zoomOnPinch: w, panOnScroll: M, panOnScrollSpeed: Y, panOnScrollMode: H, zoomOnDoubleClick: R, panOnDrag: Z, autoPanOnSelection: J, defaultViewport: at, translateExtent: tt, minZoom: ot, maxZoom: lt, preventScrolling: C, onSelectionContextMenu: V, noWheelClassName: O, noPanClassName: B, disableKeyboardA11y: X, onViewportChange: $, isControlledViewport: P }) {
  const { nodesSelectionActive: it, userSelectionActive: dt } = Lt(ZN, kt), xt = Iu(p, { target: Uv }), T = Iu(A, { target: Uv }), F = T || Z, st = T || M, ut = y && F !== !0, k = xt || dt || ut;
  return bN({ deleteKeyCode: v, multiSelectionKeyCode: E }), G.jsx(wN, { onPaneContextMenu: f, elementsSelectable: _, zoomOnScroll: L, zoomOnPinch: w, panOnScroll: st, panActivationKeyPressed: T, panOnScrollSpeed: Y, panOnScrollMode: H, zoomOnDoubleClick: R, panOnDrag: !xt && F, defaultViewport: at, translateExtent: tt, minZoom: ot, maxZoom: lt, zoomActivationKeyCode: N, preventScrolling: C, noWheelClassName: O, noPanClassName: B, onViewportChange: $, isControlledViewport: P, paneClickDistance: g, selectionOnDrag: ut, children: G.jsxs(MN, { onSelectionStart: x, onSelectionEnd: S, onPaneClick: a, onPaneMouseEnter: o, onPaneMouseMove: r, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, panOnDrag: F, autoPanOnSelection: J, isSelecting: !!k, selectionMode: m, selectionKeyPressed: xt, paneClickDistance: g, selectionOnDrag: ut, children: [l, it && G.jsx(XN, { onSelectionContextMenu: V, noPanClassName: B, disableKeyboardA11y: X })] }) });
}
M1.displayName = "FlowRenderer";
const GN = W.memo(M1), QN = (l) => (a) => l ? oh(a.nodeLookup, { x: 0, y: 0, width: a.width, height: a.height }, a.transform, !0).map((o) => o.id) : Array.from(a.nodeLookup.keys());
function KN(l) {
  return Lt(W.useCallback(QN(l), [l]), kt);
}
const $N = (l) => l.updateNodeInternals;
function IN() {
  const l = Lt($N), [a] = W.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((o) => {
    const r = /* @__PURE__ */ new Map();
    o.forEach((s) => {
      const f = s.target.getAttribute("data-id");
      r.set(f, {
        id: f,
        nodeElement: s.target,
        force: !0
      });
    }), l(r);
  }));
  return W.useEffect(() => () => {
    a?.disconnect();
  }, [a]), a;
}
function JN({ node: l, nodeType: a, hasDimensions: o, resizeObserver: r }) {
  const s = $t(), f = W.useRef(null), d = W.useRef(null), g = W.useRef(l.sourcePosition), v = W.useRef(l.targetPosition), p = W.useRef(a), y = o && !!l.internals.handleBounds;
  return W.useEffect(() => {
    f.current && !l.hidden && (!y || d.current !== f.current) && (d.current && r?.unobserve(d.current), r?.observe(f.current), d.current = f.current);
  }, [y, l.hidden]), W.useEffect(() => () => {
    d.current && (r?.unobserve(d.current), d.current = null);
  }, []), W.useEffect(() => {
    if (f.current) {
      const m = p.current !== a, x = g.current !== l.sourcePosition, S = v.current !== l.targetPosition;
      (m || x || S) && (p.current = a, g.current = l.sourcePosition, v.current = l.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[l.id, { id: l.id, nodeElement: f.current, force: !0 }]])));
    }
  }, [l.id, a, l.sourcePosition, l.targetPosition]), f;
}
function kN({ id: l, onClick: a, onMouseEnter: o, onMouseMove: r, onMouseLeave: s, onContextMenu: f, onDoubleClick: d, nodesDraggable: g, elementsSelectable: v, nodesConnectable: p, nodesFocusable: y, resizeObserver: m, noDragClassName: x, noPanClassName: S, disableKeyboardA11y: E, rfId: A, nodeTypes: N, nodeClickDistance: _, onError: L }) {
  const { node: w, internals: M, isParent: Y } = Lt((k) => {
    const ft = k.nodeLookup.get(l), gt = k.parentLookup.has(l);
    return {
      node: ft,
      internals: ft.internals,
      isParent: gt
    };
  }, kt);
  let H = w.type || "default", R = N?.[H] || Lv[H];
  R === void 0 && (L?.("003", xn.error003(H)), H = "default", R = N?.default || Lv.default);
  const Z = !!(w.draggable || g && typeof w.draggable > "u"), J = !!(w.selectable || v && typeof w.selectable > "u"), at = !!(w.connectable || p && typeof w.connectable > "u"), tt = !!(w.focusable || y && typeof w.focusable > "u"), ot = $t(), lt = Kp(w), C = JN({ node: w, nodeType: H, hasDimensions: lt, resizeObserver: m }), V = w1({
    nodeRef: C,
    disabled: w.hidden || !Z,
    noDragClassName: x,
    handleSelector: w.dragHandle,
    nodeId: l,
    isSelectable: J,
    nodeClickDistance: _
  }), O = _1();
  if (w.hidden)
    return null;
  const B = Sn(w), X = jN(w), $ = J || Z || a || o || r || s, P = o ? (k) => o(k, { ...M.userNode }) : void 0, it = r ? (k) => r(k, { ...M.userNode }) : void 0, dt = s ? (k) => s(k, { ...M.userNode }) : void 0, xt = f ? (k) => f(k, { ...M.userNode }) : void 0, T = d ? (k) => d(k, { ...M.userNode }) : void 0, F = (k) => {
    const { selectNodesOnDrag: ft, nodeDragThreshold: gt } = ot.getState();
    J && (!ft || !Z || gt > 0) && Kd({
      id: l,
      store: ot,
      nodeRef: C
    }), a && a(k, { ...M.userNode });
  }, st = (k) => {
    if (!(kp(k.nativeEvent) || E)) {
      if (Up.includes(k.key) && J) {
        const ft = k.key === "Escape";
        Kd({
          id: l,
          store: ot,
          unselect: ft,
          nodeRef: C
        });
      } else if (Z && w.selected && Object.prototype.hasOwnProperty.call(sr, k.key)) {
        k.preventDefault();
        const { ariaLabelConfig: ft } = ot.getState();
        ot.setState({
          ariaLiveMessage: ft["node.a11yDescription.ariaLiveMessage"]({
            direction: k.key.replace("Arrow", "").toLowerCase(),
            x: ~~M.positionAbsolute.x,
            y: ~~M.positionAbsolute.y
          })
        }), O({
          direction: sr[k.key],
          factor: k.shiftKey ? 4 : 1
        });
      }
    }
  }, ut = () => {
    if (E || !C.current?.matches(":focus-visible"))
      return;
    const { transform: k, width: ft, height: gt, autoPanOnNodeFocus: ct, setCenter: rt } = ot.getState();
    if (!ct)
      return;
    oh(/* @__PURE__ */ new Map([[l, w]]), { x: 0, y: 0, width: ft, height: gt }, k, !0).length > 0 || rt(w.position.x + B.width / 2, w.position.y + B.height / 2, {
      zoom: k[2]
    });
  };
  return G.jsx("div", { className: ue([
    "react-flow__node",
    `react-flow__node-${H}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [S]: Z
    },
    w.className,
    {
      selected: w.selected,
      selectable: J,
      parent: Y,
      draggable: Z,
      dragging: V
    }
  ]), ref: C, style: {
    zIndex: M.z,
    transform: `translate(${M.positionAbsolute.x}px,${M.positionAbsolute.y}px)`,
    pointerEvents: $ ? "all" : "none",
    visibility: lt ? "visible" : "hidden",
    ...w.style,
    ...X
  }, "data-id": l, "data-testid": `rf__node-${l}`, onMouseEnter: P, onMouseMove: it, onMouseLeave: dt, onContextMenu: xt, onClick: F, onDoubleClick: T, onKeyDown: tt ? st : void 0, tabIndex: tt ? 0 : void 0, onFocus: tt ? ut : void 0, role: w.ariaRole ?? (tt ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${g1}-${A}`, "aria-label": w.ariaLabel, ...w.domAttributes, children: G.jsx(zN, { value: l, children: G.jsx(R, { id: l, data: w.data, type: H, positionAbsoluteX: M.positionAbsolute.x, positionAbsoluteY: M.positionAbsolute.y, selected: w.selected ?? !1, selectable: J, draggable: Z, deletable: w.deletable ?? !0, isConnectable: at, sourcePosition: w.sourcePosition, targetPosition: w.targetPosition, dragging: V, dragHandle: w.dragHandle, zIndex: M.z, parentId: w.parentId, ...B }) }) });
}
var FN = W.memo(kN);
const WN = (l) => ({
  nodesConnectable: l.nodesConnectable,
  nodesFocusable: l.nodesFocusable,
  elementsSelectable: l.elementsSelectable,
  onError: l.onError
});
function C1(l) {
  const { nodesConnectable: a, nodesFocusable: o, elementsSelectable: r, onError: s } = Lt(WN, kt), f = KN(l.onlyRenderVisibleElements), d = IN();
  return G.jsx("div", { className: "react-flow__nodes", style: _r, children: f.map((g) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    G.jsx(FN, { id: g, nodeTypes: l.nodeTypes, nodeExtent: l.nodeExtent, onClick: l.onNodeClick, onMouseEnter: l.onNodeMouseEnter, onMouseMove: l.onNodeMouseMove, onMouseLeave: l.onNodeMouseLeave, onContextMenu: l.onNodeContextMenu, onDoubleClick: l.onNodeDoubleClick, noDragClassName: l.noDragClassName, noPanClassName: l.noPanClassName, rfId: l.rfId, disableKeyboardA11y: l.disableKeyboardA11y, resizeObserver: d, nodesDraggable: l.nodesDraggable ?? !0, nodesConnectable: a, nodesFocusable: o, elementsSelectable: r, nodeClickDistance: l.nodeClickDistance, onError: s }, g)
  )) });
}
C1.displayName = "NodeRenderer";
const PN = W.memo(C1);
function tT(l) {
  return Lt(W.useCallback((o) => {
    if (!l)
      return o.edges.map((s) => s.id);
    const r = [];
    if (o.width && o.height)
      for (const s of o.edges) {
        const f = o.nodeLookup.get(s.source), d = o.nodeLookup.get(s.target);
        f && d && I_({
          sourceNode: f,
          targetNode: d,
          width: o.width,
          height: o.height,
          transform: o.transform
        }) && r.push(s.id);
      }
    return r;
  }, [l]), kt);
}
const eT = ({ color: l = "none", strokeWidth: a = 1 }) => {
  const o = {
    strokeWidth: a,
    ...l && { stroke: l }
  };
  return G.jsx("polyline", { className: "arrow", style: o, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, nT = ({ color: l = "none", strokeWidth: a = 1 }) => {
  const o = {
    strokeWidth: a,
    ...l && { stroke: l, fill: l }
  };
  return G.jsx("polyline", { className: "arrowclosed", style: o, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, Vv = {
  [or.Arrow]: eT,
  [or.ArrowClosed]: nT
};
function lT(l) {
  const a = $t();
  return W.useMemo(() => Object.prototype.hasOwnProperty.call(Vv, l) ? Vv[l] : (a.getState().onError?.("009", xn.error009(l)), null), [l]);
}
const iT = ({ id: l, type: a, color: o, width: r = 12.5, height: s = 12.5, markerUnits: f = "strokeWidth", strokeWidth: d, orient: g = "auto-start-reverse" }) => {
  const v = lT(a);
  return v ? G.jsx("marker", { className: "react-flow__arrowhead", id: l, markerWidth: `${r}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: f, orient: g, refX: "0", refY: "0", children: G.jsx(v, { color: o, strokeWidth: d }) }) : null;
}, z1 = ({ defaultColor: l, rfId: a }) => {
  const o = Lt((f) => f.edges), r = Lt((f) => f.defaultEdgeOptions), s = W.useMemo(() => l3(o, {
    id: a,
    defaultColor: l,
    defaultMarkerStart: r?.markerStart,
    defaultMarkerEnd: r?.markerEnd
  }), [o, r, a, l]);
  return s.length ? G.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: G.jsx("defs", { children: s.map((f) => G.jsx(iT, { id: f.id, type: f.type, color: f.color, width: f.width, height: f.height, markerUnits: f.markerUnits, strokeWidth: f.strokeWidth, orient: f.orient }, f.id)) }) }) : null;
};
z1.displayName = "MarkerDefinitions";
var aT = W.memo(z1);
function A1({ x: l, y: a, label: o, labelStyle: r, labelShowBg: s = !0, labelBgStyle: f, labelBgPadding: d = [2, 4], labelBgBorderRadius: g = 2, children: v, className: p, ...y }) {
  const [m, x] = W.useState({ x: 1, y: 0, width: 0, height: 0 }), S = ue(["react-flow__edge-textwrapper", p]), E = W.useRef(null);
  return W.useEffect(() => {
    if (E.current) {
      const A = E.current.getBBox();
      x({
        x: A.x,
        y: A.y,
        width: A.width,
        height: A.height
      });
    }
  }, [o]), o ? G.jsxs("g", { transform: `translate(${l - m.width / 2} ${a - m.height / 2})`, className: S, visibility: m.width ? "visible" : "hidden", ...y, children: [s && G.jsx("rect", { width: m.width + 2 * d[0], x: -d[0], y: -d[1], height: m.height + 2 * d[1], className: "react-flow__edge-textbg", style: f, rx: g, ry: g }), G.jsx("text", { className: "react-flow__edge-text", y: m.height / 2, dy: "0.3em", ref: E, style: r, children: o }), v] }) : null;
}
A1.displayName = "EdgeText";
const uT = W.memo(A1);
function no({ path: l, labelX: a, labelY: o, label: r, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: v, interactionWidth: p = 20, ...y }) {
  return G.jsxs(G.Fragment, { children: [G.jsx("path", { ...y, d: l, fill: "none", className: ue(["react-flow__edge-path", y.className]) }), p ? G.jsx("path", { d: l, fill: "none", strokeOpacity: 0, strokeWidth: p, className: "react-flow__edge-interaction" }) : null, r && vn(a) && vn(o) ? G.jsx(uT, { x: a, y: o, label: r, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: v }) : null] });
}
function Yv({ pos: l, x1: a, y1: o, x2: r, y2: s }) {
  return l === pt.Left || l === pt.Right ? [0.5 * (a + r), o] : [a, 0.5 * (o + s)];
}
function O1({ sourceX: l, sourceY: a, sourcePosition: o = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top }) {
  const [d, g] = Yv({
    pos: o,
    x1: l,
    y1: a,
    x2: r,
    y2: s
  }), [v, p] = Yv({
    pos: f,
    x1: r,
    y1: s,
    x2: l,
    y2: a
  }), [y, m, x, S] = Wp({
    sourceX: l,
    sourceY: a,
    targetX: r,
    targetY: s,
    sourceControlX: d,
    sourceControlY: g,
    targetControlX: v,
    targetControlY: p
  });
  return [
    `M${l},${a} C${d},${g} ${v},${p} ${r},${s}`,
    y,
    m,
    x,
    S
  ];
}
function D1(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, sourcePosition: d, targetPosition: g, label: v, labelStyle: p, labelShowBg: y, labelBgStyle: m, labelBgPadding: x, labelBgBorderRadius: S, style: E, markerEnd: A, markerStart: N, interactionWidth: _ }) => {
    const [L, w, M] = O1({
      sourceX: o,
      sourceY: r,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g
    }), Y = l.isInternal ? void 0 : a;
    return G.jsx(no, { id: Y, path: L, labelX: w, labelY: M, label: v, labelStyle: p, labelShowBg: y, labelBgStyle: m, labelBgPadding: x, labelBgBorderRadius: S, style: E, markerEnd: A, markerStart: N, interactionWidth: _ });
  });
}
const oT = D1({ isInternal: !1 }), R1 = D1({ isInternal: !0 });
oT.displayName = "SimpleBezierEdge";
R1.displayName = "SimpleBezierEdgeInternal";
function H1(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: p, labelBgPadding: y, labelBgBorderRadius: m, style: x, sourcePosition: S = pt.Bottom, targetPosition: E = pt.Top, markerEnd: A, markerStart: N, pathOptions: _, interactionWidth: L }) => {
    const [w, M, Y] = Xd({
      sourceX: o,
      sourceY: r,
      sourcePosition: S,
      targetX: s,
      targetY: f,
      targetPosition: E,
      borderRadius: _?.borderRadius,
      offset: _?.offset,
      stepPosition: _?.stepPosition
    }), H = l.isInternal ? void 0 : a;
    return G.jsx(no, { id: H, path: w, labelX: M, labelY: Y, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: p, labelBgPadding: y, labelBgBorderRadius: m, style: x, markerEnd: A, markerStart: N, interactionWidth: L });
  });
}
const B1 = H1({ isInternal: !1 }), L1 = H1({ isInternal: !0 });
B1.displayName = "SmoothStepEdge";
L1.displayName = "SmoothStepEdgeInternal";
function U1(l) {
  return W.memo(({ id: a, ...o }) => {
    const r = l.isInternal ? void 0 : a;
    return G.jsx(B1, { ...o, id: r, pathOptions: W.useMemo(() => ({ borderRadius: 0, offset: o.pathOptions?.offset }), [o.pathOptions?.offset]) });
  });
}
const cT = U1({ isInternal: !1 }), V1 = U1({ isInternal: !0 });
cT.displayName = "StepEdge";
V1.displayName = "StepEdgeInternal";
function Y1(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: p, labelBgPadding: y, labelBgBorderRadius: m, style: x, markerEnd: S, markerStart: E, interactionWidth: A }) => {
    const [N, _, L] = t1({ sourceX: o, sourceY: r, targetX: s, targetY: f }), w = l.isInternal ? void 0 : a;
    return G.jsx(no, { id: w, path: N, labelX: _, labelY: L, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: p, labelBgPadding: y, labelBgBorderRadius: m, style: x, markerEnd: S, markerStart: E, interactionWidth: A });
  });
}
const rT = Y1({ isInternal: !1 }), j1 = Y1({ isInternal: !0 });
rT.displayName = "StraightEdge";
j1.displayName = "StraightEdgeInternal";
function q1(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, sourcePosition: d = pt.Bottom, targetPosition: g = pt.Top, label: v, labelStyle: p, labelShowBg: y, labelBgStyle: m, labelBgPadding: x, labelBgBorderRadius: S, style: E, markerEnd: A, markerStart: N, pathOptions: _, interactionWidth: L }) => {
    const [w, M, Y] = fh({
      sourceX: o,
      sourceY: r,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g,
      curvature: _?.curvature
    }), H = l.isInternal ? void 0 : a;
    return G.jsx(no, { id: H, path: w, labelX: M, labelY: Y, label: v, labelStyle: p, labelShowBg: y, labelBgStyle: m, labelBgPadding: x, labelBgBorderRadius: S, style: E, markerEnd: A, markerStart: N, interactionWidth: L });
  });
}
const sT = q1({ isInternal: !1 }), X1 = q1({ isInternal: !0 });
sT.displayName = "BezierEdge";
X1.displayName = "BezierEdgeInternal";
const jv = {
  default: X1,
  straight: j1,
  step: V1,
  smoothstep: L1,
  simplebezier: R1
}, qv = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null,
  zIndex: void 0
}, fT = (l, a, o) => o === pt.Left ? l - a : o === pt.Right ? l + a : l, dT = (l, a, o) => o === pt.Top ? l - a : o === pt.Bottom ? l + a : l, Xv = "react-flow__edgeupdater";
function Zv({ position: l, centerX: a, centerY: o, radius: r = 10, onMouseDown: s, onMouseEnter: f, onMouseOut: d, type: g }) {
  return G.jsx("circle", { onMouseDown: s, onMouseEnter: f, onMouseOut: d, className: ue([Xv, `${Xv}-${g}`]), cx: fT(a, r, l), cy: dT(o, r, l), r, stroke: "transparent", fill: "transparent" });
}
function hT({ isReconnectable: l, reconnectRadius: a, edge: o, sourceX: r, sourceY: s, targetX: f, targetY: d, sourcePosition: g, targetPosition: v, onReconnect: p, onReconnectStart: y, onReconnectEnd: m, setReconnecting: x, setUpdateHover: S }) {
  const E = $t(), A = (M, Y) => {
    if (M.button !== 0)
      return;
    const { autoPanOnConnect: H, domNode: R, connectionMode: Z, connectionRadius: J, lib: at, onConnectStart: tt, cancelConnection: ot, nodeLookup: lt, rfId: C, panBy: V, updateConnection: O } = E.getState(), B = Y.type === "target", X = (it, dt) => {
      x(!1), m?.(it, o, Y.type, dt);
    }, $ = (it) => p?.(o, it), P = (it, dt) => {
      x(!0), y?.(M, o, Y.type), tt?.(it, dt);
    };
    Qd.onPointerDown(M.nativeEvent, {
      autoPanOnConnect: H,
      connectionMode: Z,
      connectionRadius: J,
      domNode: R,
      handleId: Y.id,
      nodeId: Y.nodeId,
      nodeLookup: lt,
      isTarget: B,
      edgeUpdaterType: Y.type,
      lib: at,
      flowId: C,
      cancelConnection: ot,
      panBy: V,
      isValidConnection: (...it) => E.getState().isValidConnection?.(...it) ?? !0,
      onConnect: $,
      onConnectStart: P,
      onConnectEnd: (...it) => E.getState().onConnectEnd?.(...it),
      onReconnectEnd: X,
      updateConnection: O,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: M.currentTarget
    });
  }, N = (M) => A(M, { nodeId: o.target, id: o.targetHandle ?? null, type: "target" }), _ = (M) => A(M, { nodeId: o.source, id: o.sourceHandle ?? null, type: "source" }), L = () => S(!0), w = () => S(!1);
  return G.jsxs(G.Fragment, { children: [(l === !0 || l === "source") && G.jsx(Zv, { position: g, centerX: r, centerY: s, radius: a, onMouseDown: N, onMouseEnter: L, onMouseOut: w, type: "source" }), (l === !0 || l === "target") && G.jsx(Zv, { position: v, centerX: f, centerY: d, radius: a, onMouseDown: _, onMouseEnter: L, onMouseOut: w, type: "target" })] });
}
function gT({ id: l, edgesFocusable: a, edgesReconnectable: o, elementsSelectable: r, onClick: s, onDoubleClick: f, onContextMenu: d, onMouseEnter: g, onMouseMove: v, onMouseLeave: p, reconnectRadius: y, onReconnect: m, onReconnectStart: x, onReconnectEnd: S, rfId: E, edgeTypes: A, noPanClassName: N, onError: _, disableKeyboardA11y: L }) {
  let w = Lt((rt) => rt.edgeLookup.get(l));
  const M = Lt((rt) => rt.defaultEdgeOptions);
  w = M ? { ...M, ...w } : w;
  let Y = w.type || "default", H = A?.[Y] || jv[Y];
  H === void 0 && (_?.("011", xn.error011(Y)), Y = "default", H = A?.default || jv.default);
  const R = !!(w.focusable || a && typeof w.focusable > "u"), Z = typeof m < "u" && (w.reconnectable || o && typeof w.reconnectable > "u"), J = !!(w.selectable || r && typeof w.selectable > "u"), at = W.useRef(null), [tt, ot] = W.useState(!1), [lt, C] = W.useState(!1), V = $t(), { zIndex: O = w.zIndex, sourceX: B, sourceY: X, targetX: $, targetY: P, sourcePosition: it, targetPosition: dt } = Lt(W.useCallback((rt) => {
    const vt = rt.nodeLookup.get(w.source), _t = rt.nodeLookup.get(w.target);
    if (!vt || !_t)
      return qv;
    const wt = n3({
      id: l,
      sourceNode: vt,
      targetNode: _t,
      sourceHandle: w.sourceHandle || null,
      targetHandle: w.targetHandle || null,
      connectionMode: rt.connectionMode,
      onError: _
    }), Mt = $_({
      selected: w.selected,
      zIndex: w.zIndex,
      sourceNode: vt,
      targetNode: _t,
      elevateOnSelect: rt.elevateEdgesOnSelect,
      zIndexMode: rt.zIndexMode
    });
    return {
      ...wt || qv,
      zIndex: Mt
    };
  }, [w.source, w.target, w.sourceHandle, w.targetHandle, w.selected, w.zIndex, _]), kt), xt = W.useMemo(() => w.markerStart ? `url('#${Zd(w.markerStart, E)}')` : void 0, [w.markerStart, E]), T = W.useMemo(() => w.markerEnd ? `url('#${Zd(w.markerEnd, E)}')` : void 0, [w.markerEnd, E]);
  if (w.hidden || B === null || X === null || $ === null || P === null)
    return null;
  const F = (rt) => {
    const { addSelectedEdges: vt, unselectNodesAndEdges: _t, multiSelectionActive: wt } = V.getState();
    J && (V.setState({ nodesSelectionActive: !1 }), w.selected && wt ? (_t({ nodes: [], edges: [w] }), at.current?.blur()) : vt([l])), s && s(rt, w);
  }, st = f ? (rt) => {
    f(rt, { ...w });
  } : void 0, ut = d ? (rt) => {
    d(rt, { ...w });
  } : void 0, k = g ? (rt) => {
    g(rt, { ...w });
  } : void 0, ft = v ? (rt) => {
    v(rt, { ...w });
  } : void 0, gt = p ? (rt) => {
    p(rt, { ...w });
  } : void 0, ct = (rt) => {
    if (!L && Up.includes(rt.key) && J) {
      const { unselectNodesAndEdges: vt, addSelectedEdges: _t } = V.getState();
      rt.key === "Escape" ? (at.current?.blur(), vt({ edges: [w] })) : _t([l]);
    }
  };
  return G.jsx("svg", { style: { zIndex: O }, children: G.jsxs("g", { className: ue([
    "react-flow__edge",
    `react-flow__edge-${Y}`,
    w.className,
    N,
    {
      selected: w.selected,
      animated: w.animated,
      inactive: !J && !s,
      updating: tt,
      selectable: J
    }
  ]), onClick: F, onDoubleClick: st, onContextMenu: ut, onMouseEnter: k, onMouseMove: ft, onMouseLeave: gt, onKeyDown: R ? ct : void 0, tabIndex: R ? 0 : void 0, role: w.ariaRole ?? (R ? "group" : "img"), "aria-roledescription": "edge", "data-id": l, "data-testid": `rf__edge-${l}`, "aria-label": w.ariaLabel === null ? void 0 : w.ariaLabel || `Edge from ${w.source} to ${w.target}`, "aria-describedby": R ? `${m1}-${E}` : void 0, ref: at, ...w.domAttributes, children: [!lt && G.jsx(H, { id: l, source: w.source, target: w.target, type: w.type, selected: w.selected, animated: w.animated, selectable: J, deletable: w.deletable ?? !0, label: w.label, labelStyle: w.labelStyle, labelShowBg: w.labelShowBg, labelBgStyle: w.labelBgStyle, labelBgPadding: w.labelBgPadding, labelBgBorderRadius: w.labelBgBorderRadius, sourceX: B, sourceY: X, targetX: $, targetY: P, sourcePosition: it, targetPosition: dt, data: w.data, style: w.style, sourceHandleId: w.sourceHandle, targetHandleId: w.targetHandle, markerStart: xt, markerEnd: T, pathOptions: "pathOptions" in w ? w.pathOptions : void 0, interactionWidth: w.interactionWidth }), Z && G.jsx(hT, { edge: w, isReconnectable: Z, reconnectRadius: y, onReconnect: m, onReconnectStart: x, onReconnectEnd: S, sourceX: B, sourceY: X, targetX: $, targetY: P, sourcePosition: it, targetPosition: dt, setUpdateHover: ot, setReconnecting: C })] }) });
}
var mT = W.memo(gT);
const yT = (l) => ({
  edgesFocusable: l.edgesFocusable,
  edgesReconnectable: l.edgesReconnectable,
  elementsSelectable: l.elementsSelectable,
  connectionMode: l.connectionMode,
  onError: l.onError
});
function Z1({ defaultMarkerColor: l, onlyRenderVisibleElements: a, rfId: o, edgeTypes: r, noPanClassName: s, onReconnect: f, onEdgeContextMenu: d, onEdgeMouseEnter: g, onEdgeMouseMove: v, onEdgeMouseLeave: p, onEdgeClick: y, reconnectRadius: m, onEdgeDoubleClick: x, onReconnectStart: S, onReconnectEnd: E, disableKeyboardA11y: A }) {
  const { edgesFocusable: N, edgesReconnectable: _, elementsSelectable: L, onError: w } = Lt(yT, kt), M = tT(a);
  return G.jsxs("div", { className: "react-flow__edges", children: [G.jsx(aT, { defaultColor: l, rfId: o }), M.map((Y) => G.jsx(mT, { id: Y, edgesFocusable: N, edgesReconnectable: _, elementsSelectable: L, noPanClassName: s, onReconnect: f, onContextMenu: d, onMouseEnter: g, onMouseMove: v, onMouseLeave: p, onClick: y, reconnectRadius: m, onDoubleClick: x, onReconnectStart: S, onReconnectEnd: E, rfId: o, onError: w, edgeTypes: r, disableKeyboardA11y: A }, Y))] });
}
Z1.displayName = "EdgeRenderer";
const vT = W.memo(Z1), Gv = (l) => `translate(${l[0]}px,${l[1]}px) scale(${l[2]})`;
function pT({ children: l }) {
  const a = $t(), o = W.useRef(null), [r] = W.useState(() => a.getState().transform);
  return S1(() => {
    let s = null;
    const f = () => {
      const d = a.getState().transform;
      s && d[0] === s[0] && d[1] === s[1] && d[2] === s[2] || (s = d, o.current && (o.current.style.transform = Gv(d)));
    };
    return f(), a.subscribe(f);
  }, [a]), G.jsx("div", { ref: o, className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: Gv(r) }, children: l });
}
function xT(l) {
  const a = wr(), o = W.useRef(!1);
  W.useEffect(() => {
    !o.current && a.viewportInitialized && l && (setTimeout(() => l(a), 1), o.current = !0);
  }, [l, a.viewportInitialized]);
}
const bT = (l) => l.panZoom?.syncViewport;
function ST(l) {
  const a = Lt(bT), o = $t();
  return W.useEffect(() => {
    l && (a?.(l), o.setState({ transform: [l.x, l.y, l.zoom] }));
  }, [l, a]), null;
}
function ET(l) {
  return l.connection.inProgress ? { ...l.connection, to: eo(l.connection.to, l.transform) } : { ...l.connection };
}
function wT(l) {
  return ET;
}
function _T(l) {
  const a = wT();
  return Lt(a, kt);
}
const NT = (l) => ({
  nodesConnectable: l.nodesConnectable,
  isValid: l.connection.isValid,
  inProgress: l.connection.inProgress,
  width: l.width,
  height: l.height
});
function TT({ containerStyle: l, style: a, type: o, component: r }) {
  const { nodesConnectable: s, width: f, height: d, isValid: g, inProgress: v } = Lt(NT, kt);
  return !(f && s && v) ? null : G.jsx("svg", { style: l, width: f, height: d, className: "react-flow__connectionline react-flow__container", children: G.jsx("g", { className: ue(["react-flow__connection", Ip(g)]), children: G.jsx(G1, { style: a, type: o, CustomComponent: r, isValid: g }) }) });
}
const G1 = ({ style: l, type: a = ql.Bezier, CustomComponent: o, isValid: r }) => {
  const { inProgress: s, from: f, fromNode: d, fromHandle: g, fromPosition: v, to: p, toNode: y, toHandle: m, toPosition: x, pointer: S } = _T();
  if (!s)
    return;
  if (o)
    return G.jsx(o, { connectionLineType: a, connectionLineStyle: l, fromNode: d, fromHandle: g, fromX: f.x, fromY: f.y, toX: p.x, toY: p.y, fromPosition: v, toPosition: x, connectionStatus: Ip(r), toNode: y, toHandle: m, pointer: S });
  let E = "";
  const A = {
    sourceX: f.x,
    sourceY: f.y,
    sourcePosition: v,
    targetX: p.x,
    targetY: p.y,
    targetPosition: x
  };
  switch (a) {
    case ql.Bezier:
      [E] = fh(A);
      break;
    case ql.SimpleBezier:
      [E] = O1(A);
      break;
    case ql.Step:
      [E] = Xd({
        ...A,
        borderRadius: 0
      });
      break;
    case ql.SmoothStep:
      [E] = Xd(A);
      break;
    default:
      [E] = t1(A);
  }
  return G.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: l });
};
G1.displayName = "ConnectionLine";
const MT = {};
function Qv(l = MT) {
  W.useRef(l), $t(), W.useEffect(() => {
  }, [l]);
}
function CT() {
  $t(), W.useRef(!1), W.useEffect(() => {
  }, []);
}
function Q1({ nodeTypes: l, edgeTypes: a, onInit: o, onNodeClick: r, onEdgeClick: s, onNodeDoubleClick: f, onEdgeDoubleClick: d, onNodeMouseEnter: g, onNodeMouseMove: v, onNodeMouseLeave: p, onNodeContextMenu: y, onSelectionContextMenu: m, onSelectionStart: x, onSelectionEnd: S, connectionLineType: E, connectionLineStyle: A, connectionLineComponent: N, connectionLineContainerStyle: _, selectionKeyCode: L, selectionOnDrag: w, selectionMode: M, multiSelectionKeyCode: Y, panActivationKeyCode: H, zoomActivationKeyCode: R, deleteKeyCode: Z, onlyRenderVisibleElements: J, elementsSelectable: at, defaultViewport: tt, translateExtent: ot, minZoom: lt, maxZoom: C, preventScrolling: V, defaultMarkerColor: O, zoomOnScroll: B, zoomOnPinch: X, panOnScroll: $, panOnScrollSpeed: P, panOnScrollMode: it, zoomOnDoubleClick: dt, panOnDrag: xt, autoPanOnSelection: T, onPaneClick: F, onPaneMouseEnter: st, onPaneMouseMove: ut, onPaneMouseLeave: k, onPaneScroll: ft, onPaneContextMenu: gt, paneClickDistance: ct, nodeClickDistance: rt, onEdgeContextMenu: vt, onEdgeMouseEnter: _t, onEdgeMouseMove: wt, onEdgeMouseLeave: Mt, reconnectRadius: Ht, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: be, noDragClassName: re, noWheelClassName: En, noPanClassName: Je, disableKeyboardA11y: Oe, nodeExtent: we, rfId: De, viewport: Ve, onViewportChange: wn, nodesDraggable: ke }) {
  return Qv(l), Qv(a), CT(), xT(o), ST(Ve), G.jsx(GN, { onPaneClick: F, onPaneMouseEnter: st, onPaneMouseMove: ut, onPaneMouseLeave: k, onPaneContextMenu: gt, onPaneScroll: ft, paneClickDistance: ct, deleteKeyCode: Z, selectionKeyCode: L, selectionOnDrag: w, selectionMode: M, onSelectionStart: x, onSelectionEnd: S, multiSelectionKeyCode: Y, panActivationKeyCode: H, zoomActivationKeyCode: R, elementsSelectable: at, zoomOnScroll: B, zoomOnPinch: X, zoomOnDoubleClick: dt, panOnScroll: $, panOnScrollSpeed: P, panOnScrollMode: it, panOnDrag: xt, autoPanOnSelection: T, defaultViewport: tt, translateExtent: ot, minZoom: lt, maxZoom: C, onSelectionContextMenu: m, preventScrolling: V, noDragClassName: re, noWheelClassName: En, noPanClassName: Je, disableKeyboardA11y: Oe, onViewportChange: wn, isControlledViewport: !!Ve, children: G.jsxs(pT, { children: [G.jsx(vT, { edgeTypes: a, onEdgeClick: s, onEdgeDoubleClick: d, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: be, onlyRenderVisibleElements: J, onEdgeContextMenu: vt, onEdgeMouseEnter: _t, onEdgeMouseMove: wt, onEdgeMouseLeave: Mt, reconnectRadius: Ht, defaultMarkerColor: O, noPanClassName: Je, disableKeyboardA11y: Oe, rfId: De }), G.jsx(TT, { style: A, type: E, component: N, containerStyle: _ }), G.jsx("div", { className: "react-flow__edgelabel-renderer" }), G.jsx(PN, { nodeTypes: l, onNodeClick: r, onNodeDoubleClick: f, onNodeMouseEnter: g, onNodeMouseMove: v, onNodeMouseLeave: p, onNodeContextMenu: y, nodeClickDistance: rt, onlyRenderVisibleElements: J, noPanClassName: Je, noDragClassName: re, disableKeyboardA11y: Oe, nodeExtent: we, rfId: De, nodesDraggable: ke }), G.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
Q1.displayName = "GraphView";
const zT = W.memo(Q1), AT = Qp(), Kv = ({ nodes: l, edges: a, defaultNodes: o, defaultEdges: r, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: v = 0.5, maxZoom: p = 2, nodeOrigin: y, nodeExtent: m, zIndexMode: x = "basic" } = {}) => {
  const S = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), _ = r ?? a ?? [], L = o ?? l ?? [], w = y ?? [0, 0], M = m ?? Gu;
  l1(A, N, _);
  const { nodesInitialized: Y } = Gd(L, S, E, {
    nodeOrigin: w,
    nodeExtent: M,
    zIndexMode: x
  });
  let H = [0, 0, 1];
  if (d && s && f) {
    const R = Pu(S, {
      filter: (tt) => !!((tt.width || tt.initialWidth) && (tt.height || tt.initialHeight))
    }), { x: Z, y: J, zoom: at } = rh(R, s, f, v, p, g?.padding ?? 0.1);
    H = [Z, J, at];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: f ?? 0,
    transform: H,
    nodes: L,
    nodesInitialized: Y,
    nodeLookup: S,
    parentLookup: E,
    edges: _,
    edgeLookup: N,
    connectionLookup: A,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: o !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: v,
    maxZoom: p,
    translateExtent: Gu,
    nodeExtent: M,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: za.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: w,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: d ?? !1,
    fitViewOptions: g,
    fitViewResolver: null,
    connection: { ...Yp },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: AT,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: Vp,
    zIndexMode: x,
    defaultEdgeOptions: void 0,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onNodesDelete: void 0,
    onEdgesDelete: void 0,
    onDelete: void 0,
    onBeforeDelete: void 0,
    onViewportChangeStart: void 0,
    onViewportChange: void 0,
    onViewportChangeEnd: void 0,
    onNodeDragStart: void 0,
    onNodeDrag: void 0,
    onNodeDragStop: void 0,
    onSelectionDragStart: void 0,
    onSelectionDrag: void 0,
    onSelectionDragStop: void 0,
    onMoveStart: void 0,
    onMove: void 0,
    onMoveEnd: void 0,
    onConnect: void 0,
    onConnectStart: void 0,
    onConnectEnd: void 0,
    onClickConnectStart: void 0,
    onClickConnectEnd: void 0
  };
}, OT = ({ nodes: l, edges: a, defaultNodes: o, defaultEdges: r, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: v, maxZoom: p, nodeOrigin: y, nodeExtent: m, zIndexMode: x }) => Q3((S, E) => {
  async function A() {
    const { nodeLookup: N, panZoom: _, fitViewOptions: L, fitViewResolver: w, width: M, height: Y, minZoom: H, maxZoom: R } = E();
    _ && (await j_({
      nodes: N,
      width: M,
      height: Y,
      panZoom: _,
      minZoom: H,
      maxZoom: R
    }, L), w?.resolve(!0), S({ fitViewResolver: null }));
  }
  return {
    ...Kv({
      nodes: l,
      edges: a,
      width: s,
      height: f,
      fitView: d,
      fitViewOptions: g,
      minZoom: v,
      maxZoom: p,
      nodeOrigin: y,
      nodeExtent: m,
      defaultNodes: o,
      defaultEdges: r,
      zIndexMode: x
    }),
    setNodes: (N) => {
      const { nodeLookup: _, parentLookup: L, nodeOrigin: w, nodeExtent: M, elevateNodesOnSelect: Y, fitViewQueued: H, zIndexMode: R, nodesSelectionActive: Z } = E(), { nodesInitialized: J, hasSelectedNodes: at } = Gd(N, _, L, {
        nodeOrigin: w,
        nodeExtent: M,
        elevateNodesOnSelect: Y,
        checkEquality: !0,
        zIndexMode: R
      }), tt = Z && at;
      H && J ? (A(), S({
        nodes: N,
        nodesInitialized: J,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: tt
      })) : S({ nodes: N, nodesInitialized: J, nodesSelectionActive: tt });
    },
    setEdges: (N) => {
      const { connectionLookup: _, edgeLookup: L } = E();
      l1(_, L, N), S({ edges: N });
    },
    setDefaultNodesAndEdges: (N, _) => {
      if (N) {
        const { setNodes: L } = E();
        L(N), S({ hasDefaultNodes: !0 });
      }
      if (_) {
        const { setEdges: L } = E();
        L(_), S({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (N) => {
      const { triggerNodeChanges: _, nodeLookup: L, parentLookup: w, domNode: M, nodeOrigin: Y, nodeExtent: H, debug: R, fitViewQueued: Z, zIndexMode: J } = E(), { changes: at, updatedInternals: tt } = s3(N, L, w, M, Y, H, J);
      tt && (u3(L, w, { nodeOrigin: Y, nodeExtent: H, zIndexMode: J }), Z ? (A(), S({ fitViewQueued: !1, fitViewOptions: void 0 })) : S({}), at?.length > 0 && (R && console.log("React Flow: trigger node changes", at), _?.(at)));
    },
    updateNodePositions: (N, _ = !1) => {
      const L = [];
      let w = [];
      const { nodeLookup: M, triggerNodeChanges: Y, connection: H, updateConnection: R, onNodesChangeMiddlewareMap: Z } = E();
      for (const [J, at] of N) {
        const tt = M.get(J), ot = !!(tt?.expandParent && tt?.parentId && at?.position), lt = {
          id: J,
          type: "position",
          position: ot ? {
            x: Math.max(0, at.position.x),
            y: Math.max(0, at.position.y)
          } : at.position,
          dragging: _
        };
        if (tt && H.inProgress && H.fromNode.id === tt.id) {
          const C = Ni(tt, H.fromHandle, pt.Left, !0);
          R({ ...H, from: C });
        }
        ot && tt.parentId && L.push({
          id: J,
          parentId: tt.parentId,
          rect: {
            ...at.internals.positionAbsolute,
            width: at.measured.width ?? 0,
            height: at.measured.height ?? 0
          }
        }), w.push(lt);
      }
      if (L.length > 0) {
        const { parentLookup: J, nodeOrigin: at } = E(), tt = yh(L, M, J, at);
        w.push(...tt);
      }
      for (const J of Z.values())
        w = J(w);
      Y(w);
    },
    triggerNodeChanges: (N) => {
      const { onNodesChange: _, setNodes: L, nodes: w, hasDefaultNodes: M, debug: Y } = E();
      if (N?.length) {
        if (M) {
          const H = p1(N, w);
          L(H);
        }
        Y && console.log("React Flow: trigger node changes", N), _?.(N);
      }
    },
    triggerEdgeChanges: (N) => {
      const { onEdgesChange: _, setEdges: L, edges: w, hasDefaultEdges: M, debug: Y } = E();
      if (N?.length) {
        if (M) {
          const H = x1(N, w);
          L(H);
        }
        Y && console.log("React Flow: trigger edge changes", N), _?.(N);
      }
    },
    addSelectedNodes: (N) => {
      const { multiSelectionActive: _, edgeLookup: L, nodeLookup: w, triggerNodeChanges: M, triggerEdgeChanges: Y } = E();
      if (_) {
        const H = N.map((R) => mi(R, !0));
        M(H);
        return;
      }
      M(ba(w, /* @__PURE__ */ new Set([...N]))), Y(ba(L));
    },
    addSelectedEdges: (N) => {
      const { multiSelectionActive: _, edgeLookup: L, nodeLookup: w, triggerNodeChanges: M, triggerEdgeChanges: Y } = E();
      if (_) {
        const H = N.map((R) => mi(R, !0));
        Y(H);
        return;
      }
      Y(ba(L, /* @__PURE__ */ new Set([...N]))), M(ba(w, /* @__PURE__ */ new Set()));
    },
    unselectNodesAndEdges: ({ nodes: N, edges: _ } = {}) => {
      const { edges: L, nodes: w, nodeLookup: M, triggerNodeChanges: Y, triggerEdgeChanges: H } = E(), R = N || w, Z = _ || L, J = [];
      for (const tt of R)
        tt.selected && J.push(mi(tt.id, !1));
      const at = [];
      for (const tt of Z)
        tt.selected && at.push(mi(tt.id, !1));
      Y(J), H(at);
    },
    setMinZoom: (N) => {
      const { panZoom: _, maxZoom: L } = E();
      _?.setScaleExtent([N, L]), S({ minZoom: N });
    },
    setMaxZoom: (N) => {
      const { panZoom: _, minZoom: L } = E();
      _?.setScaleExtent([L, N]), S({ maxZoom: N });
    },
    setTranslateExtent: (N) => {
      E().panZoom?.setTranslateExtent(N), S({ translateExtent: N });
    },
    resetSelectedElements: () => {
      const { edges: N, nodes: _, triggerNodeChanges: L, triggerEdgeChanges: w, elementsSelectable: M } = E();
      if (!M)
        return;
      const Y = _.reduce((R, Z) => Z.selected ? [...R, mi(Z.id, !1)] : R, []), H = N.reduce((R, Z) => Z.selected ? [...R, mi(Z.id, !1)] : R, []);
      L(Y), w(H);
    },
    setNodeExtent: (N) => {
      const { nodes: _, nodeLookup: L, parentLookup: w, nodeOrigin: M, elevateNodesOnSelect: Y, nodeExtent: H, zIndexMode: R } = E();
      N[0][0] === H[0][0] && N[0][1] === H[0][1] && N[1][0] === H[1][0] && N[1][1] === H[1][1] || (Gd(_, L, w, {
        nodeOrigin: M,
        nodeExtent: N,
        elevateNodesOnSelect: Y,
        checkEquality: !1,
        zIndexMode: R
      }), S({ nodeExtent: N }));
    },
    panBy: (N) => {
      const { transform: _, width: L, height: w, panZoom: M, translateExtent: Y } = E();
      return f3({ delta: N, panZoom: M, transform: _, translateExtent: Y, width: L, height: w });
    },
    setCenter: async (N, _, L) => {
      const { width: w, height: M, maxZoom: Y, panZoom: H } = E();
      if (!H)
        return !1;
      const R = typeof L?.zoom < "u" ? L.zoom : Y;
      return await H.setViewport({
        x: w / 2 - N * R,
        y: M / 2 - _ * R,
        zoom: R
      }, { duration: L?.duration, ease: L?.ease, interpolate: L?.interpolate }), !0;
    },
    cancelConnection: () => {
      S({
        connection: { ...Yp }
      });
    },
    updateConnection: (N) => {
      S({ connection: N });
    },
    reset: () => S({ ...Kv() })
  };
}, Object.is);
function K1({ initialNodes: l, initialEdges: a, defaultNodes: o, defaultEdges: r, initialWidth: s, initialHeight: f, initialMinZoom: d, initialMaxZoom: g, initialFitViewOptions: v, fitView: p, nodeOrigin: y, nodeExtent: m, zIndexMode: x, children: S }) {
  const [E] = W.useState(() => OT({
    nodes: l,
    edges: a,
    defaultNodes: o,
    defaultEdges: r,
    width: s,
    height: f,
    fitView: p,
    minZoom: d,
    maxZoom: g,
    fitViewOptions: v,
    nodeOrigin: y,
    nodeExtent: m,
    zIndexMode: x
  }));
  return G.jsx(K3, { value: E, children: G.jsx(yN, { children: G.jsx(ON, { children: S }) }) });
}
function DT({ children: l, nodes: a, edges: o, defaultNodes: r, defaultEdges: s, width: f, height: d, fitView: g, fitViewOptions: v, minZoom: p, maxZoom: y, nodeOrigin: m, nodeExtent: x, zIndexMode: S }) {
  return W.useContext(Sr) ? G.jsx(G.Fragment, { children: l }) : G.jsx(K1, { initialNodes: a, initialEdges: o, defaultNodes: r, defaultEdges: s, initialWidth: f, initialHeight: d, fitView: g, initialFitViewOptions: v, initialMinZoom: p, initialMaxZoom: y, nodeOrigin: m, nodeExtent: x, zIndexMode: S, children: l });
}
const RT = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function HT({ nodes: l, edges: a, defaultNodes: o, defaultEdges: r, className: s, nodeTypes: f, edgeTypes: d, onNodeClick: g, onEdgeClick: v, onInit: p, onMove: y, onMoveStart: m, onMoveEnd: x, onConnect: S, onConnectStart: E, onConnectEnd: A, onClickConnectStart: N, onClickConnectEnd: _, onNodeMouseEnter: L, onNodeMouseMove: w, onNodeMouseLeave: M, onNodeContextMenu: Y, onNodeDoubleClick: H, onNodeDragStart: R, onNodeDrag: Z, onNodeDragStop: J, onNodesDelete: at, onEdgesDelete: tt, onDelete: ot, onSelectionChange: lt, onSelectionDragStart: C, onSelectionDrag: V, onSelectionDragStop: O, onSelectionContextMenu: B, onSelectionStart: X, onSelectionEnd: $, onBeforeDelete: P, connectionMode: it, connectionLineType: dt = ql.Bezier, connectionLineStyle: xt, connectionLineComponent: T, connectionLineContainerStyle: F, deleteKeyCode: st = "Backspace", selectionKeyCode: ut = "Shift", selectionOnDrag: k = !1, selectionMode: ft = Qu.Full, panActivationKeyCode: gt = "Space", multiSelectionKeyCode: ct = $u() ? "Meta" : "Control", zoomActivationKeyCode: rt = $u() ? "Meta" : "Control", snapToGrid: vt, snapGrid: _t, onlyRenderVisibleElements: wt = !1, selectNodesOnDrag: Mt, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: be, nodeOrigin: re = y1, edgesFocusable: En, edgesReconnectable: Je, elementsSelectable: Oe = !0, defaultViewport: we = aN, minZoom: De = 0.5, maxZoom: Ve = 2, translateExtent: wn = Gu, preventScrolling: ke = !0, nodeExtent: Zl, defaultMarkerColor: Ha = "#b1b1b7", zoomOnScroll: Nr = !0, zoomOnPinch: lo = !0, panOnScroll: Ba = !1, panOnScrollSpeed: La = 0.5, panOnScrollMode: Ua = xi.Free, zoomOnDoubleClick: Tr = !0, panOnDrag: Mr = !0, onPaneClick: _e, onPaneMouseEnter: Cr, onPaneMouseMove: io, onPaneMouseLeave: ao, onPaneScroll: Ti, onPaneContextMenu: zr, paneClickDistance: uo = 1, nodeClickDistance: Ar = 0, children: Or, onReconnect: Gl, onReconnectStart: Ne, onReconnectEnd: _n, onEdgeContextMenu: Te, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Rr, onEdgeMouseMove: Hr, onEdgeMouseLeave: Mi, reconnectRadius: Ci = 10, onNodesChange: zi, onEdgesChange: jn, noDragClassName: Ai = "nodrag", noWheelClassName: Ql = "nowheel", noPanClassName: Va = "nopan", fitView: oo, fitViewOptions: Ya, connectOnClick: ja, attributionPosition: Kl, proOptions: Br, defaultEdgeOptions: co, elevateNodesOnSelect: ro = !0, elevateEdgesOnSelect: so = !1, disableKeyboardA11y: Oi = !1, autoPanOnConnect: qa, autoPanOnNodeDrag: fo, autoPanOnSelection: ho = !0, autoPanSpeed: on, connectionRadius: oe, isValidConnection: Se, onError: rl, style: go, id: mo, nodeDragThreshold: Lr, connectionDragThreshold: yo, viewport: $l, onViewportChange: Di, width: Ri, height: qn, colorMode: sl = "light", debug: Il, onScroll: Xn, ariaLabelConfig: ee, zIndexMode: Xa = "basic", ...vo }, po) {
  const cn = mo || "1", fl = rN(sl), Ur = W.useCallback((Za) => {
    Za.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Xn?.(Za);
  }, [Xn]);
  return G.jsx("div", { "data-testid": "rf__wrapper", ...vo, onScroll: Ur, style: { ...go, ...RT }, ref: po, className: ue(["react-flow", s, fl]), id: mo, role: "application", children: G.jsxs(DT, { nodes: l, edges: a, width: Ri, height: qn, fitView: oo, fitViewOptions: Ya, minZoom: De, maxZoom: Ve, nodeOrigin: re, nodeExtent: Zl, zIndexMode: Xa, children: [G.jsx(cN, { nodes: l, edges: a, defaultNodes: o, defaultEdges: r, onConnect: S, onConnectStart: E, onConnectEnd: A, onClickConnectStart: N, onClickConnectEnd: _, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: be, edgesFocusable: En, edgesReconnectable: Je, elementsSelectable: Oe, elevateNodesOnSelect: ro, elevateEdgesOnSelect: so, minZoom: De, maxZoom: Ve, nodeExtent: Zl, onNodesChange: zi, onEdgesChange: jn, snapToGrid: vt, snapGrid: _t, connectionMode: it, translateExtent: wn, connectOnClick: ja, defaultEdgeOptions: co, fitView: oo, fitViewOptions: Ya, onNodesDelete: at, onEdgesDelete: tt, onDelete: ot, onNodeDragStart: R, onNodeDrag: Z, onNodeDragStop: J, onSelectionDrag: V, onSelectionDragStart: C, onSelectionDragStop: O, onMove: y, onMoveStart: m, onMoveEnd: x, noPanClassName: Va, nodeOrigin: re, rfId: cn, autoPanOnConnect: qa, autoPanOnNodeDrag: fo, autoPanSpeed: on, onError: rl, connectionRadius: oe, isValidConnection: Se, selectNodesOnDrag: Mt, nodeDragThreshold: Lr, connectionDragThreshold: yo, onBeforeDelete: P, debug: Il, ariaLabelConfig: ee, zIndexMode: Xa }), G.jsx(zT, { onInit: p, onNodeClick: g, onEdgeClick: v, onNodeMouseEnter: L, onNodeMouseMove: w, onNodeMouseLeave: M, onNodeContextMenu: Y, onNodeDoubleClick: H, nodeTypes: f, edgeTypes: d, connectionLineType: dt, connectionLineStyle: xt, connectionLineComponent: T, connectionLineContainerStyle: F, selectionKeyCode: ut, selectionOnDrag: k, selectionMode: ft, deleteKeyCode: st, multiSelectionKeyCode: ct, panActivationKeyCode: gt, zoomActivationKeyCode: rt, onlyRenderVisibleElements: wt, defaultViewport: we, translateExtent: wn, minZoom: De, maxZoom: Ve, preventScrolling: ke, zoomOnScroll: Nr, zoomOnPinch: lo, zoomOnDoubleClick: Tr, panOnScroll: Ba, panOnScrollSpeed: La, panOnScrollMode: Ua, panOnDrag: Mr, autoPanOnSelection: ho, onPaneClick: _e, onPaneMouseEnter: Cr, onPaneMouseMove: io, onPaneMouseLeave: ao, onPaneScroll: Ti, onPaneContextMenu: zr, paneClickDistance: uo, nodeClickDistance: Ar, onSelectionContextMenu: B, onSelectionStart: X, onSelectionEnd: $, onReconnect: Gl, onReconnectStart: Ne, onReconnectEnd: _n, onEdgeContextMenu: Te, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Rr, onEdgeMouseMove: Hr, onEdgeMouseLeave: Mi, reconnectRadius: Ci, defaultMarkerColor: Ha, noDragClassName: Ai, noWheelClassName: Ql, noPanClassName: Va, rfId: cn, disableKeyboardA11y: Oi, nodeExtent: Zl, viewport: $l, onViewportChange: Di, nodesDraggable: Ht }), G.jsx(iN, { onSelectionChange: lt }), Or, G.jsx(P3, { proOptions: Br, position: Kl }), G.jsx(W3, { rfId: cn, disableKeyboardA11y: Oi })] }) });
}
var BT = b1(HT);
function LT(l) {
  const [a, o] = W.useState(l), r = W.useCallback((s) => o((f) => p1(s, f)), []);
  return [a, o, r];
}
function UT(l) {
  const [a, o] = W.useState(l), r = W.useCallback((s) => o((f) => x1(s, f)), []);
  return [a, o, r];
}
function VT({ dimensions: l, lineWidth: a, variant: o, className: r }) {
  return G.jsx("path", { strokeWidth: a, d: `M${l[0] / 2} 0 V${l[1]} M0 ${l[1] / 2} H${l[0]}`, className: ue(["react-flow__background-pattern", o, r]) });
}
function YT({ radius: l, className: a }) {
  return G.jsx("circle", { cx: l, cy: l, r: l, className: ue(["react-flow__background-pattern", "dots", a]) });
}
var ol;
(function(l) {
  l.Lines = "lines", l.Dots = "dots", l.Cross = "cross";
})(ol || (ol = {}));
const jT = {
  [ol.Dots]: 1,
  [ol.Lines]: 1,
  [ol.Cross]: 6
}, qT = (l) => ({ transform: l.transform, patternId: `pattern-${l.rfId}` });
function $1({
  id: l,
  variant: a = ol.Dots,
  // only used for dots and cross
  gap: o = 20,
  // only used for lines and cross
  size: r,
  lineWidth: s = 1,
  offset: f = 0,
  color: d,
  bgColor: g,
  style: v,
  className: p,
  patternClassName: y
}) {
  const m = W.useRef(null), { transform: x, patternId: S } = Lt(qT, kt), E = r || jT[a], A = a === ol.Dots, N = a === ol.Cross, _ = Array.isArray(o) ? o : [o, o], L = [_[0] * x[2] || 1, _[1] * x[2] || 1], w = E * x[2], M = Array.isArray(f) ? f : [f, f], Y = N ? [w, w] : L, H = [
    M[0] * x[2] + Y[0] / 2,
    M[1] * x[2] + Y[1] / 2
  ], R = `${S}${l || ""}`;
  return G.jsxs("svg", { className: ue(["react-flow__background", p]), style: {
    ...v,
    ..._r,
    "--xy-background-color-props": g,
    "--xy-background-pattern-color-props": d
  }, ref: m, "data-testid": "rf__background", children: [G.jsx("pattern", { id: R, x: x[0] % L[0], y: x[1] % L[1], width: L[0], height: L[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${H[0]},-${H[1]})`, children: A ? G.jsx(YT, { radius: w / 2, className: y }) : G.jsx(VT, { dimensions: Y, lineWidth: s, variant: a, className: y }) }), G.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${R})` })] });
}
$1.displayName = "Background";
const XT = W.memo($1);
function ZT() {
  return G.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: G.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function GT() {
  return G.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: G.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function QT() {
  return G.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: G.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function KT() {
  return G.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: G.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function $T() {
  return G.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: G.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function $c({ children: l, className: a, ...o }) {
  return G.jsx("button", { type: "button", className: ue(["react-flow__controls-button", a]), ...o, children: l });
}
const IT = (l) => ({
  isInteractive: l.nodesDraggable || l.nodesConnectable || l.elementsSelectable,
  minZoomReached: l.transform[2] <= l.minZoom,
  maxZoomReached: l.transform[2] >= l.maxZoom,
  ariaLabelConfig: l.ariaLabelConfig
});
function I1({ style: l, showZoom: a = !0, showFitView: o = !0, showInteractive: r = !0, fitViewOptions: s, onZoomIn: f, onZoomOut: d, onFitView: g, onInteractiveChange: v, className: p, children: y, position: m = "bottom-left", orientation: x = "vertical", "aria-label": S }) {
  const E = $t(), { isInteractive: A, minZoomReached: N, maxZoomReached: _, ariaLabelConfig: L } = Lt(IT, kt), { zoomIn: w, zoomOut: M, fitView: Y } = wr(), H = () => {
    w(), f?.();
  }, R = () => {
    M(), d?.();
  }, Z = () => {
    Y(s), g?.();
  }, J = () => {
    E.setState({
      nodesDraggable: !A,
      nodesConnectable: !A,
      elementsSelectable: !A
    }), v?.(!A);
  }, at = x === "horizontal" ? "horizontal" : "vertical";
  return G.jsxs(Er, { className: ue(["react-flow__controls", at, p]), position: m, style: l, "data-testid": "rf__controls", "aria-label": S ?? L["controls.ariaLabel"], children: [a && G.jsxs(G.Fragment, { children: [G.jsx($c, { onClick: H, className: "react-flow__controls-zoomin", title: L["controls.zoomIn.ariaLabel"], "aria-label": L["controls.zoomIn.ariaLabel"], disabled: _, children: G.jsx(ZT, {}) }), G.jsx($c, { onClick: R, className: "react-flow__controls-zoomout", title: L["controls.zoomOut.ariaLabel"], "aria-label": L["controls.zoomOut.ariaLabel"], disabled: N, children: G.jsx(GT, {}) })] }), o && G.jsx($c, { className: "react-flow__controls-fitview", onClick: Z, title: L["controls.fitView.ariaLabel"], "aria-label": L["controls.fitView.ariaLabel"], children: G.jsx(QT, {}) }), r && G.jsx($c, { className: "react-flow__controls-interactive", onClick: J, title: L["controls.interactive.ariaLabel"], "aria-label": L["controls.interactive.ariaLabel"], children: A ? G.jsx($T, {}) : G.jsx(KT, {}) }), y] });
}
I1.displayName = "Controls";
W.memo(I1);
function JT({ id: l, x: a, y: o, width: r, height: s, style: f, color: d, strokeColor: g, strokeWidth: v, className: p, borderRadius: y, shapeRendering: m, selected: x, onClick: S }) {
  const { background: E, backgroundColor: A } = f || {}, N = d || E || A;
  return G.jsx("rect", { className: ue(["react-flow__minimap-node", { selected: x }, p]), x: a, y: o, rx: y, ry: y, width: r, height: s, style: {
    fill: N,
    stroke: g,
    strokeWidth: v
  }, shapeRendering: m, onClick: S ? (_) => S(_, l) : void 0 });
}
const kT = W.memo(JT), FT = (l) => l.nodes.map((a) => a.id), Od = (l) => l instanceof Function ? l : () => l;
function WT({
  nodeStrokeColor: l,
  nodeColor: a,
  nodeClassName: o = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: f = kT,
  onClick: d
}) {
  const g = Lt(FT, kt), v = Od(a), p = Od(l), y = Od(o), m = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return G.jsx(G.Fragment, { children: g.map((x) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    G.jsx(t4, { id: x, nodeColorFunc: v, nodeStrokeColorFunc: p, nodeClassNameFunc: y, nodeBorderRadius: r, nodeStrokeWidth: s, NodeComponent: f, onClick: d, shapeRendering: m }, x)
  )) });
}
function PT({ id: l, nodeColorFunc: a, nodeStrokeColorFunc: o, nodeClassNameFunc: r, nodeBorderRadius: s, nodeStrokeWidth: f, shapeRendering: d, NodeComponent: g, onClick: v }) {
  const { node: p, x: y, y: m, width: x, height: S } = Lt((E) => {
    const A = E.nodeLookup.get(l);
    if (!A)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const N = A.internals.userNode, { x: _, y: L } = A.internals.positionAbsolute, { width: w, height: M } = Sn(N);
    return {
      node: N,
      x: _,
      y: L,
      width: w,
      height: M
    };
  }, kt);
  return !p || p.hidden || !Kp(p) ? null : G.jsx(g, { x: y, y: m, width: x, height: S, style: p.style, selected: !!p.selected, className: r(p), color: a(p), borderRadius: s, strokeColor: o(p), strokeWidth: f, shapeRendering: d, onClick: v, id: p.id });
}
const t4 = W.memo(PT);
var e4 = W.memo(WT);
const n4 = 200, l4 = 150, i4 = (l) => !l.hidden, a4 = (l) => {
  const a = {
    x: -l.transform[0] / l.transform[2],
    y: -l.transform[1] / l.transform[2],
    width: l.width / l.transform[2],
    height: l.height / l.transform[2]
  };
  let o = !1;
  for (const r of l.nodeLookup.values())
    if (!r.hidden) {
      o = !0;
      break;
    }
  return {
    viewBB: a,
    boundingRect: o ? Zp(Pu(l.nodeLookup, { filter: i4 }), a) : a,
    rfId: l.rfId,
    panZoom: l.panZoom,
    translateExtent: l.translateExtent,
    flowWidth: l.width,
    flowHeight: l.height,
    ariaLabelConfig: l.ariaLabelConfig
  };
}, $v = (l, a) => l.x === a.x && l.y === a.y && l.width === a.width && l.height === a.height, u4 = (l, a) => $v(l.viewBB, a.viewBB) && $v(l.boundingRect, a.boundingRect) && l.rfId === a.rfId && l.panZoom === a.panZoom && l.translateExtent === a.translateExtent && l.flowWidth === a.flowWidth && l.flowHeight === a.flowHeight && l.ariaLabelConfig === a.ariaLabelConfig, o4 = "react-flow__minimap-desc";
function J1({
  style: l,
  className: a,
  nodeStrokeColor: o,
  nodeColor: r,
  nodeClassName: s = "",
  nodeBorderRadius: f = 5,
  nodeStrokeWidth: d,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: g,
  bgColor: v,
  maskColor: p,
  maskStrokeColor: y,
  maskStrokeWidth: m,
  position: x = "bottom-right",
  onClick: S,
  onNodeClick: E,
  pannable: A = !1,
  zoomable: N = !1,
  ariaLabel: _,
  inversePan: L,
  zoomStep: w = 1,
  offsetScale: M = 5
}) {
  const Y = $t(), H = W.useRef(null), { boundingRect: R, panZoom: Z, viewBB: J, rfId: at, translateExtent: tt, flowWidth: ot, flowHeight: lt, ariaLabelConfig: C } = Lt(a4, u4), V = l?.width ?? n4, O = l?.height ?? l4, B = R.width / V, X = R.height / O, $ = Math.max(B, X), P = $ * V, it = $ * O, dt = M * $, xt = R.x - (P - R.width) / 2 - dt, T = R.y - (it - R.height) / 2 - dt, F = P + dt * 2, st = it + dt * 2, ut = `${o4}-${at}`, k = W.useRef(0), ft = W.useRef();
  k.current = $, W.useEffect(() => {
    const _t = Y.getState().panZoom;
    if (H.current && _t)
      return ft.current = b3({
        domNode: H.current,
        panZoom: _t,
        getTransform: () => Y.getState().transform,
        getViewScale: () => k.current
      }), () => {
        ft.current?.destroy();
      };
  }, [Z]), W.useEffect(() => {
    ft.current?.update({
      translateExtent: tt,
      width: ot,
      height: lt,
      inversePan: L,
      pannable: A,
      zoomStep: w,
      zoomable: N
    });
  }, [A, N, L, w, tt, ot, lt]);
  const gt = S ? (_t) => {
    const [wt, Mt] = ft.current?.pointer(_t) || [0, 0];
    S(_t, { x: wt, y: Mt });
  } : void 0, ct = W.useCallback((_t, wt) => {
    const Mt = Y.getState().nodeLookup.get(wt).internals.userNode;
    E?.(_t, Mt);
  }, [E]), rt = E ? ct : void 0, vt = _ ?? C["minimap.ariaLabel"];
  return G.jsx(Er, { position: x, style: {
    ...l,
    "--xy-minimap-background-color-props": typeof v == "string" ? v : void 0,
    "--xy-minimap-mask-background-color-props": typeof p == "string" ? p : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof y == "string" ? y : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * $ : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-width-props": typeof d == "number" ? d : void 0
  }, className: ue(["react-flow__minimap", a]), "data-testid": "rf__minimap", children: G.jsxs("svg", { width: V, height: O, viewBox: `${xt} ${T} ${F} ${st}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": ut, ref: H, onClick: gt, children: [vt && G.jsx("title", { id: ut, children: vt }), G.jsx(e4, { onClick: rt, nodeColor: r, nodeStrokeColor: o, nodeBorderRadius: f, nodeClassName: s, nodeStrokeWidth: d, nodeComponent: g }), G.jsx("path", { className: "react-flow__minimap-mask", d: `M${xt - dt},${T - dt}h${F + dt * 2}v${st + dt * 2}h${-F - dt * 2}z
        M${J.x},${J.y}h${J.width}v${J.height}h${-J.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
J1.displayName = "MiniMap";
W.memo(J1);
const c4 = (l) => (a) => l ? `${Math.max(1 / a.transform[2], 1)}` : void 0, r4 = {
  [Da.Line]: "right",
  [Da.Handle]: "bottom-right"
};
function s4({ nodeId: l, position: a, variant: o = Da.Handle, className: r, style: s = void 0, children: f, color: d, minWidth: g = 10, minHeight: v = 10, maxWidth: p = Number.MAX_VALUE, maxHeight: y = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: x, autoScale: S = !0, shouldResize: E, onResizeStart: A, onResize: N, onResizeEnd: _ }) {
  const L = N1(), w = typeof l == "string" ? l : L, M = $t(), Y = W.useRef(null), H = o === Da.Handle, R = Lt(W.useCallback(c4(H && S), [H, S]), kt), Z = W.useRef(null), J = a ?? r4[o];
  W.useEffect(() => {
    if (!(!Y.current || !w))
      return Z.current || (Z.current = R3({
        domNode: Y.current,
        nodeId: w,
        getStoreItems: () => {
          const { nodeLookup: tt, transform: ot, snapGrid: lt, snapToGrid: C, nodeOrigin: V, domNode: O } = M.getState();
          return {
            nodeLookup: tt,
            transform: ot,
            snapGrid: lt,
            snapToGrid: C,
            nodeOrigin: V,
            paneDomNode: O
          };
        },
        onChange: (tt, ot) => {
          const { triggerNodeChanges: lt, nodeLookup: C, parentLookup: V, nodeOrigin: O } = M.getState(), B = [], X = { x: tt.x, y: tt.y }, $ = C.get(w);
          if ($ && $.expandParent && $.parentId) {
            const P = $.origin ?? O, it = tt.width ?? $.measured.width ?? 0, dt = tt.height ?? $.measured.height ?? 0, xt = {
              id: $.id,
              parentId: $.parentId,
              rect: {
                width: it,
                height: dt,
                ...$p({
                  x: tt.x ?? $.position.x,
                  y: tt.y ?? $.position.y
                }, { width: it, height: dt }, $.parentId, C, P)
              }
            }, T = yh([xt], C, V, O);
            B.push(...T), X.x = tt.x ? Math.max(P[0] * it, tt.x) : void 0, X.y = tt.y ? Math.max(P[1] * dt, tt.y) : void 0;
          }
          if (X.x !== void 0 && X.y !== void 0) {
            const P = {
              id: w,
              type: "position",
              position: { ...X }
            };
            B.push(P);
          }
          if (tt.width !== void 0 && tt.height !== void 0) {
            const it = {
              id: w,
              type: "dimensions",
              resizing: !0,
              setAttributes: x ? x === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: tt.width,
                height: tt.height
              }
            };
            B.push(it);
          }
          for (const P of ot) {
            const it = {
              ...P,
              type: "position"
            };
            B.push(it);
          }
          lt(B);
        },
        onEnd: ({ width: tt, height: ot }) => {
          const lt = {
            id: w,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: tt,
              height: ot
            }
          };
          M.getState().triggerNodeChanges([lt]);
        }
      })), Z.current.update({
        controlPosition: J,
        boundaries: {
          minWidth: g,
          minHeight: v,
          maxWidth: p,
          maxHeight: y
        },
        keepAspectRatio: m,
        resizeDirection: x,
        onResizeStart: A,
        onResize: N,
        onResizeEnd: _,
        shouldResize: E
      }), () => {
        Z.current?.destroy();
      };
  }, [
    J,
    g,
    v,
    p,
    y,
    m,
    A,
    N,
    _,
    E
  ]);
  const at = J.split("-");
  return G.jsx("div", { className: ue(["react-flow__resize-control", "nodrag", ...at, o, r]), ref: Y, style: {
    ...s,
    scale: R,
    ...d && { [H ? "backgroundColor" : "borderColor"]: d }
  }, children: f });
}
W.memo(s4);
const f4 = ({ data: l, selected: a }) => {
  const o = l, r = W.useRef(null);
  W.useEffect(() => {
    const f = r.current, d = o.domElement;
    if (!f || !d) return;
    const g = () => {
      (document.body.classList.contains("is-whiteboard-active") || document.documentElement.classList.contains("is-whiteboard-active")) && f && d && !f.contains(d) && f.appendChild(d);
    };
    g();
    const v = [
      "button",
      "input",
      "select",
      "textarea",
      "a",
      "video",
      "audio",
      "pre",
      "code",
      ".affordance-card",
      ".affordance-panel",
      ".case-window-frame",
      ".case-diagram-box"
    ].join(", ");
    return d.querySelectorAll(v).forEach((y) => {
      y.classList.add("nodrag", "nopan");
    }), window.addEventListener("caseflow:sync-nodes", g), () => {
      window.removeEventListener("caseflow:sync-nodes", g);
    };
  }, [o.domElement]);
  const s = o.width ? `${o.width}px` : "760px";
  return /* @__PURE__ */ G.jsxs(
    "div",
    {
      className: `case-whiteboard-card ${a ? "is-selected" : ""}`,
      style: { width: s },
      children: [
        /* @__PURE__ */ G.jsx(ul, { type: "target", position: pt.Left, className: "case-flow-handle" }),
        /* @__PURE__ */ G.jsx(
          ul,
          {
            type: "target",
            position: pt.Top,
            className: "case-flow-handle",
            id: "top-target"
          }
        ),
        /* @__PURE__ */ G.jsx("div", { ref: r, className: "case-node-dom-content nodrag nopan" }),
        /* @__PURE__ */ G.jsx(ul, { type: "source", position: pt.Right, className: "case-flow-handle" }),
        /* @__PURE__ */ G.jsx(
          ul,
          {
            type: "source",
            position: pt.Bottom,
            className: "case-flow-handle",
            id: "bottom-source"
          }
        )
      ]
    }
  );
}, d4 = ({ data: l, selected: a }) => {
  const o = l, r = W.useRef(null);
  W.useEffect(() => {
    const f = r.current, d = o.domElement;
    if (!f || !d) return;
    const g = () => {
      (document.body.classList.contains("is-whiteboard-active") || document.documentElement.classList.contains("is-whiteboard-active")) && f && d && !f.contains(d) && f.appendChild(d);
    };
    g();
    const v = [
      "button",
      "input",
      "select",
      "textarea",
      "a",
      "video",
      "audio",
      "img",
      ".case-window-frame"
    ].join(", ");
    return d.querySelectorAll(v).forEach((y) => {
      y.classList.add("nodrag", "nopan");
    }), window.addEventListener("caseflow:sync-nodes", g), () => {
      window.removeEventListener("caseflow:sync-nodes", g);
    };
  }, [o.domElement]);
  const s = o.width ? `${o.width}px` : "780px";
  return /* @__PURE__ */ G.jsxs(
    "div",
    {
      className: `case-whiteboard-card ${a ? "is-selected" : ""}`,
      style: { width: s },
      children: [
        /* @__PURE__ */ G.jsx("div", { ref: r, className: "case-node-dom-content nodrag nopan" }),
        /* @__PURE__ */ G.jsx(ul, { type: "source", position: pt.Right, className: "case-flow-handle" })
      ]
    }
  );
}, h4 = ({
  id: l,
  sourceX: a,
  sourceY: o,
  targetX: r,
  targetY: s,
  sourcePosition: f,
  targetPosition: d,
  style: g,
  markerEnd: v,
  data: p
}) => {
  const [y] = fh({
    sourceX: a,
    sourceY: o,
    sourcePosition: f,
    targetX: r,
    targetY: s,
    targetPosition: d
  }), m = !!(p && p.dashed), x = {
    ...g,
    stroke: m ? "#8e8d88" : "#2c2c2e",
    strokeWidth: 2,
    strokeDasharray: m ? "6 6" : void 0
  };
  return /* @__PURE__ */ G.jsx(
    no,
    {
      id: l,
      path: y,
      markerEnd: v,
      style: x
    }
  );
}, g4 = {
  sectionNode: f4,
  heroNode: d4
}, m4 = {
  custom: h4
}, y4 = ({
  config: l,
  initialNodes: a,
  initialEdges: o,
  onReady: r
}) => {
  const [s, , f] = LT(a), [d, , g] = UT(o), [v, p] = W.useState(
    a[0]?.id || ""
  ), {
    fitBounds: y,
    getNode: m,
    getNodes: x,
    getNodesBounds: S,
    zoomIn: E,
    zoomOut: A,
    setNodes: N
  } = wr(), _ = [];
  l.heroNode && _.push({
    id: "hero",
    label: l.heroNode.chapterLabel || "Overview",
    index: 0
  }), l.nodes.forEach((M) => {
    _.push({
      id: M.id,
      label: M.chapterLabel,
      index: _.length
    });
  });
  const L = W.useCallback(
    (M) => {
      p(M), N(
        (H) => H.map((R) => ({
          ...R,
          selected: R.id === M
        }))
      );
      const Y = m(M);
      if (Y) {
        const H = Y.position.x, R = Y.position.y, Z = Y.data, J = Y.measured?.width || Z?.width || 760, at = Y.measured?.height || 600;
        y(
          { x: H, y: R, width: J, height: at },
          { duration: 550, padding: 0.22 }
        );
      }
    },
    [m, y, N]
  ), w = W.useCallback(() => {
    p(""), N(
      (Y) => Y.map((H) => ({
        ...H,
        selected: !1
      }))
    );
    const M = x();
    if (M.length) {
      const Y = S(M);
      y(Y, { duration: 550, padding: 0.12 });
    }
  }, [x, S, y, N]);
  return /* @__PURE__ */ G.jsxs("div", { style: { width: "100%", height: "100%", position: "relative" }, children: [
    /* @__PURE__ */ G.jsx(
      BT,
      {
        nodes: s,
        edges: d,
        onNodesChange: f,
        onEdgesChange: g,
        nodeTypes: g4,
        edgeTypes: m4,
        fitView: !0,
        fitViewOptions: { padding: 0.18, duration: 0 },
        onInit: () => {
          requestAnimationFrame(() => {
            r && r();
          });
        },
        minZoom: 0.25,
        maxZoom: 1.5,
        zoomOnScroll: !1,
        panOnScroll: !0,
        proOptions: { hideAttribution: !0 },
        children: /* @__PURE__ */ G.jsx(
          XT,
          {
            variant: ol.Dots,
            gap: 24,
            size: 1.2,
            color: "#d6d4cb"
          }
        )
      }
    ),
    /* @__PURE__ */ G.jsx(
      "nav",
      {
        className: "case-storyboard-stepper",
        "aria-label": "Case Study Storyboard Navigation",
        children: _.map((M) => {
          const Y = v === M.id;
          return /* @__PURE__ */ G.jsx(
            "button",
            {
              type: "button",
              className: `stepper-btn ${Y ? "is-active" : ""}`,
              onClick: () => L(M.id),
              children: M.label
            },
            M.id
          );
        })
      }
    ),
    /* @__PURE__ */ G.jsxs("div", { className: "case-viewport-controls", "aria-label": "Canvas Zoom Controls", children: [
      /* @__PURE__ */ G.jsx(
        "button",
        {
          type: "button",
          className: "control-btn",
          onClick: () => E({ duration: 250 }),
          title: "Zoom In",
          "aria-label": "Zoom In",
          children: /* @__PURE__ */ G.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
            /* @__PURE__ */ G.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ G.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
            /* @__PURE__ */ G.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
            /* @__PURE__ */ G.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
          ] })
        }
      ),
      /* @__PURE__ */ G.jsx(
        "button",
        {
          type: "button",
          className: "control-btn",
          onClick: () => A({ duration: 250 }),
          title: "Zoom Out",
          "aria-label": "Zoom Out",
          children: /* @__PURE__ */ G.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
            /* @__PURE__ */ G.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ G.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
            /* @__PURE__ */ G.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
          ] })
        }
      ),
      /* @__PURE__ */ G.jsx(
        "button",
        {
          type: "button",
          className: "control-btn",
          onClick: w,
          title: "Fit All",
          "aria-label": "Fit All",
          children: /* @__PURE__ */ G.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ G.jsx("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }) })
        }
      )
    ] })
  ] });
}, v4 = (l) => /* @__PURE__ */ G.jsx(K1, { children: /* @__PURE__ */ G.jsx(y4, { ...l }) });
function p4() {
  const l = document.body.dataset.caseSlug;
  if (l) return l;
  const a = document.querySelector("main")?.getAttribute("data-case-slug");
  if (a) return a;
  const r = window.location.pathname.match(/\/cases\/([^/.]+)(?:\.html)?/);
  return r && r[1] ? r[1] : null;
}
function Iv() {
  const l = p4();
  if (!l) {
    document.documentElement.classList.remove("is-whiteboard-active", "is-whiteboard-loading"), document.body.classList.remove("is-whiteboard-active");
    return;
  }
  const a = k2(l);
  if (!a) {
    document.documentElement.classList.remove("is-whiteboard-active", "is-whiteboard-loading"), document.body.classList.remove("is-whiteboard-active");
    return;
  }
  let o = document.getElementById("whiteboard-stage");
  if (!o) {
    o = document.createElement("div"), o.id = "whiteboard-stage", o.className = "whiteboard-stage";
    const v = document.getElementById("main-content");
    v && v.parentNode ? v.parentNode.insertBefore(o, v) : document.body.appendChild(o);
  }
  const r = new F2(a), { nodes: s, edges: f } = r.prepareNodesAndEdges();
  if (!s.length) {
    document.documentElement.classList.remove("is-whiteboard-active", "is-whiteboard-loading"), document.body.classList.remove("is-whiteboard-active");
    return;
  }
  r.attachNavigationToggle();
  const d = r.getInitialMode();
  r.setMode(d), j2.createRoot(o).render(
    /* @__PURE__ */ G.jsx(Jv.StrictMode, { children: /* @__PURE__ */ G.jsx(
      v4,
      {
        config: a,
        initialNodes: s,
        initialEdges: f,
        onReady: () => {
          document.documentElement.classList.remove("is-whiteboard-loading");
        }
      }
    ) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Iv) : Iv();
