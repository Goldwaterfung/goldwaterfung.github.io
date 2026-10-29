function Md(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var kf = { exports: {} }, Eu = {};
var ey;
function JS() {
  if (ey) return Eu;
  ey = 1;
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
  return Eu.Fragment = a, Eu.jsx = o, Eu.jsxs = o, Eu;
}
var ny;
function IS() {
  return ny || (ny = 1, kf.exports = JS()), kf.exports;
}
var Z = IS(), Ff = { exports: {} }, Et = {};
var ly;
function kS() {
  if (ly) return Et;
  ly = 1;
  var l = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), b = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object" ? null : (T = b && T[b] || T["@@iterator"], typeof T == "function" ? T : null);
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
  }, N = Object.assign, w = {};
  function U(T, k, st) {
    this.props = T, this.context = k, this.refs = w, this.updater = st || A;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(T, k) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, k, "setState");
  }, U.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function _() {
  }
  _.prototype = U.prototype;
  function C(T, k, st) {
    this.props = T, this.context = k, this.refs = w, this.updater = st || A;
  }
  var X = C.prototype = new _();
  X.constructor = C, N(X, U.prototype), X.isPureReactComponent = !0;
  var B = Array.isArray;
  function R() {
  }
  var G = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function ot(T, k, st) {
    var ut = st.ref;
    return {
      $$typeof: l,
      type: T,
      key: k,
      ref: ut !== void 0 ? ut : null,
      props: st
    };
  }
  function tt(T, k) {
    return ot(T.type, k, T.props);
  }
  function at(T) {
    return typeof T == "object" && T !== null && T.$$typeof === l;
  }
  function lt(T) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(st) {
      return k[st];
    });
  }
  var z = /\/+/g;
  function V(T, k) {
    return typeof T == "object" && T !== null && T.key != null ? lt("" + T.key) : k.toString(36);
  }
  function O(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(R, R) : (T.status = "pending", T.then(
          function(k) {
            T.status === "pending" && (T.status = "fulfilled", T.value = k);
          },
          function(k) {
            T.status === "pending" && (T.status = "rejected", T.reason = k);
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
  function H(T, k, st, ut, F) {
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
              return gt = T._init, H(
                gt(T._payload),
                k,
                st,
                ut,
                F
              );
          }
      }
    if (gt)
      return F = F(T), gt = ut === "" ? "." + V(T, 0) : ut, B(F) ? (st = "", gt != null && (st = gt.replace(z, "$&/") + "/"), H(F, k, st, "", function(xt) {
        return xt;
      })) : F != null && (at(F) && (F = tt(
        F,
        st + (F.key == null || T && T.key === F.key ? "" : ("" + F.key).replace(
          z,
          "$&/"
        ) + "/") + gt
      )), k.push(F)), 1;
    gt = 0;
    var ct = ut === "" ? "." : ut + ":";
    if (B(T))
      for (var rt = 0; rt < T.length; rt++)
        ut = T[rt], ft = ct + V(ut, rt), gt += H(
          ut,
          k,
          st,
          ft,
          F
        );
    else if (rt = E(T), typeof rt == "function")
      for (T = rt.call(T), rt = 0; !(ut = T.next()).done; )
        ut = ut.value, ft = ct + V(ut, rt++), gt += H(
          ut,
          k,
          st,
          ft,
          F
        );
    else if (ft === "object") {
      if (typeof T.then == "function")
        return H(
          O(T),
          k,
          st,
          ut,
          F
        );
      throw k = String(T), Error(
        "Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return gt;
  }
  function q(T, k, st) {
    if (T == null) return T;
    var ut = [], F = 0;
    return H(T, ut, "", "", function(ft) {
      return k.call(st, ft, F++);
    }), ut;
  }
  function $(T) {
    if (T._status === -1) {
      var k = T._result, st = k();
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
      var k = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(k)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  };
  function it(T) {
    var k = G.T, st = {};
    st.types = k !== null ? k.types : null, G.T = st;
    try {
      var ut = T(), F = G.S;
      F !== null && F(st, ut), typeof ut == "object" && ut !== null && typeof ut.then == "function" && ut.then(R, P);
    } catch (ft) {
      P(ft);
    } finally {
      k !== null && st.types !== null && (k.types = st.types), G.T = k;
    }
  }
  function dt(T) {
    var k = G.T;
    if (k !== null) {
      var st = k.types;
      st === null ? k.types = [T] : st.indexOf(T) === -1 && st.push(T);
    } else it(dt.bind(null, T));
  }
  var vt = {
    map: q,
    forEach: function(T, k, st) {
      q(
        T,
        function() {
          k.apply(this, arguments);
        },
        st
      );
    },
    count: function(T) {
      var k = 0;
      return q(T, function() {
        k++;
      }), k;
    },
    toArray: function(T) {
      return q(T, function(k) {
        return k;
      }) || [];
    },
    only: function(T) {
      if (!at(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  };
  return Et.Activity = m, Et.Children = vt, Et.Component = U, Et.Fragment = o, Et.Profiler = s, Et.PureComponent = C, Et.StrictMode = r, Et.Suspense = v, Et.ViewTransition = p, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return G.H.useMemoCache(T);
    }
  }, Et.addTransitionType = dt, Et.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(T, k, st) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var ut = N({}, T.props), F = T.key;
    if (k != null)
      for (ft in k.key !== void 0 && (F = "" + k.key), k)
        !I.call(k, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && k.ref === void 0 || (ut[ft] = k[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) ut.children = st;
    else if (1 < ft) {
      for (var gt = Array(ft), ct = 0; ct < ft; ct++)
        gt[ct] = arguments[ct + 2];
      ut.children = gt;
    }
    return ot(T.type, F, ut);
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
  }, Et.createElement = function(T, k, st) {
    var ut, F = {}, ft = null;
    if (k != null)
      for (ut in k.key !== void 0 && (ft = "" + k.key), k)
        I.call(k, ut) && ut !== "key" && ut !== "__self" && ut !== "__source" && (F[ut] = k[ut]);
    var gt = arguments.length - 2;
    if (gt === 1) F.children = st;
    else if (1 < gt) {
      for (var ct = Array(gt), rt = 0; rt < gt; rt++)
        ct[rt] = arguments[rt + 2];
      F.children = ct;
    }
    if (T && T.defaultProps)
      for (ut in gt = T.defaultProps, gt)
        F[ut] === void 0 && (F[ut] = gt[ut]);
    return ot(T, ft, F);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(T) {
    return { $$typeof: g, render: T };
  }, Et.isValidElement = at, Et.lazy = function(T) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: T },
      _init: $
    };
  }, Et.memo = function(T, k) {
    return {
      $$typeof: x,
      type: T,
      compare: k === void 0 ? null : k
    };
  }, Et.startTransition = it, Et.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, Et.use = function(T) {
    return G.H.use(T);
  }, Et.useActionState = function(T, k, st) {
    return G.H.useActionState(T, k, st);
  }, Et.useCallback = function(T, k) {
    return G.H.useCallback(T, k);
  }, Et.useContext = function(T) {
    return G.H.useContext(T);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(T, k) {
    return G.H.useDeferredValue(T, k);
  }, Et.useEffect = function(T, k) {
    return G.H.useEffect(T, k);
  }, Et.useEffectEvent = function(T) {
    return G.H.useEffectEvent(T);
  }, Et.useId = function() {
    return G.H.useId();
  }, Et.useImperativeHandle = function(T, k, st) {
    return G.H.useImperativeHandle(T, k, st);
  }, Et.useInsertionEffect = function(T, k) {
    return G.H.useInsertionEffect(T, k);
  }, Et.useLayoutEffect = function(T, k) {
    return G.H.useLayoutEffect(T, k);
  }, Et.useMemo = function(T, k) {
    return G.H.useMemo(T, k);
  }, Et.useOptimistic = function(T, k) {
    return G.H.useOptimistic(T, k);
  }, Et.useReducer = function(T, k, st) {
    return G.H.useReducer(T, k, st);
  }, Et.useRef = function(T) {
    return G.H.useRef(T);
  }, Et.useState = function(T) {
    return G.H.useState(T);
  }, Et.useSyncExternalStore = function(T, k, st) {
    return G.H.useSyncExternalStore(
      T,
      k,
      st
    );
  }, Et.useTransition = function() {
    return G.H.useTransition();
  }, Et.version = "19.3.0", Et;
}
var iy;
function Yu() {
  return iy || (iy = 1, Ff.exports = kS()), Ff.exports;
}
var W = Yu();
const Ev = /* @__PURE__ */ Md(W);
var Wf = { exports: {} }, _u = {}, Pf = { exports: {} }, td = {};
var ay;
function FS() {
  return ay || (ay = 1, (function(l) {
    function a(O, H) {
      var q = O.length;
      O.push(H);
      t: for (; 0 < q; ) {
        var $ = q - 1 >>> 1, P = O[$];
        if (0 < s(P, H))
          O[$] = H, O[q] = P, q = $;
        else break t;
      }
    }
    function o(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var H = O[0], q = O.pop();
      if (q !== H) {
        O[0] = q;
        t: for (var $ = 0, P = O.length, it = P >>> 1; $ < it; ) {
          var dt = 2 * ($ + 1) - 1, vt = O[dt], T = dt + 1, k = O[T];
          if (0 > s(vt, q))
            T < P && 0 > s(k, vt) ? (O[$] = k, O[T] = q, $ = T) : (O[$] = vt, O[dt] = q, $ = dt);
          else if (T < P && 0 > s(k, q))
            O[$] = k, O[T] = q, $ = T;
          else break t;
        }
      }
      return H;
    }
    function s(O, H) {
      var q = O.sortIndex - H.sortIndex;
      return q !== 0 ? q : O.id - H.id;
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
    var v = [], x = [], y = 1, m = null, p = 3, b = !1, E = !1, A = !1, N = !1, w = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    function C(O) {
      for (var H = o(x); H !== null; ) {
        if (H.callback === null) r(x);
        else if (H.startTime <= O)
          r(x), H.sortIndex = H.expirationTime, a(v, H);
        else break;
        H = o(x);
      }
    }
    function X(O) {
      if (A = !1, C(O), !E)
        if (o(v) !== null)
          E = !0, B || (B = !0, at());
        else {
          var H = o(x);
          H !== null && V(X, H.startTime - O);
        }
    }
    var B = !1, R = -1, G = 5, I = -1;
    function ot() {
      return N ? !0 : !(l.unstable_now() - I < G);
    }
    function tt() {
      if (N = !1, B) {
        var O = l.unstable_now();
        I = O;
        var H = !0;
        try {
          t: {
            E = !1, A && (A = !1, U(R), R = -1), b = !0;
            var q = p;
            try {
              e: {
                for (C(O), m = o(v); m !== null && !(m.expirationTime > O && ot()); ) {
                  var $ = m.callback;
                  if (typeof $ == "function") {
                    m.callback = null, p = m.priorityLevel;
                    var P = $(
                      m.expirationTime <= O
                    );
                    if (O = l.unstable_now(), typeof P == "function") {
                      m.callback = P, C(O), H = !0;
                      break e;
                    }
                    m === o(v) && r(v), C(O);
                  } else r(v);
                  m = o(v);
                }
                if (m !== null) H = !0;
                else {
                  var it = o(x);
                  it !== null && V(
                    X,
                    it.startTime - O
                  ), H = !1;
                }
              }
              break t;
            } finally {
              m = null, p = q, b = !1;
            }
            H = void 0;
          }
        } finally {
          H ? at() : B = !1;
        }
      }
    }
    var at;
    if (typeof _ == "function")
      at = function() {
        _(tt);
      };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), z = lt.port2;
      lt.port1.onmessage = tt, at = function() {
        z.postMessage(null);
      };
    } else
      at = function() {
        w(tt, 0);
      };
    function V(O, H) {
      R = w(function() {
        O(l.unstable_now());
      }, H);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, l.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < O ? Math.floor(1e3 / O) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return p;
    }, l.unstable_next = function(O) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = p;
      }
      var q = p;
      p = H;
      try {
        return O();
      } finally {
        p = q;
      }
    }, l.unstable_requestPaint = function() {
      N = !0;
    }, l.unstable_runWithPriority = function(O, H) {
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
      var q = p;
      p = O;
      try {
        return H();
      } finally {
        p = q;
      }
    }, l.unstable_scheduleCallback = function(O, H, q) {
      var $ = l.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? $ + q : $) : q = $, O) {
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
      return P = q + P, O = {
        id: y++,
        callback: H,
        priorityLevel: O,
        startTime: q,
        expirationTime: P,
        sortIndex: -1
      }, q > $ ? (O.sortIndex = q, a(x, O), o(v) === null && O === o(x) && (A ? (U(R), R = -1) : A = !0, V(X, q - $))) : (O.sortIndex = P, a(v, O), E || b || (E = !0, B || (B = !0, at()))), O;
    }, l.unstable_shouldYield = ot, l.unstable_wrapCallback = function(O) {
      var H = p;
      return function() {
        var q = p;
        p = H;
        try {
          return O.apply(this, arguments);
        } finally {
          p = q;
        }
      };
    };
  })(td)), td;
}
var uy;
function WS() {
  return uy || (uy = 1, Pf.exports = FS()), Pf.exports;
}
var ed = { exports: {} }, pe = {};
var oy;
function PS() {
  if (oy) return pe;
  oy = 1;
  var l = Yu();
  function a(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        m += "&args[]=" + encodeURIComponent(arguments[p]);
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
  function g(y, m, p) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : b === d ? d : "" + b,
      children: y,
      containerInfo: m,
      implementation: p
    };
  }
  var v = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(y, m) {
    if (y === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, pe.browser = function(y) {
    return { $$typeof: f, _reason: y };
  }, pe.createPortal = function(y, m) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(a(299));
    return g(y, m, null, p);
  }, pe.flushSync = function(y) {
    var m = v.T, p = r.p;
    try {
      if (v.T = null, r.p = 2, y) return y();
    } finally {
      v.T = m, r.p = p, r.d.f();
    }
  }, pe.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(y, m));
  }, pe.prefetchDNS = function(y) {
    typeof y == "string" && r.d.D(y);
  }, pe.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var p = m.as, b = x(p, m.crossOrigin), E = typeof m.integrity == "string" ? m.integrity : void 0, A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      p === "style" ? r.d.S(
        y,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: b,
          integrity: E,
          fetchPriority: A
        }
      ) : p === "script" && r.d.X(y, {
        crossOrigin: b,
        integrity: E,
        fetchPriority: A,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, pe.preinitModule = function(y, m) {
    if (typeof y == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var p = x(
            m.as,
            m.crossOrigin
          );
          r.d.M(y, {
            crossOrigin: p,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && r.d.M(y);
  }, pe.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var p = m.as, b = x(p, m.crossOrigin);
      r.d.L(y, p, {
        crossOrigin: b,
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
  }, pe.preloadModule = function(y, m) {
    if (typeof y == "string")
      if (m) {
        var p = x(m.as, m.crossOrigin);
        r.d.m(y, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: p,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else r.d.m(y);
  }, pe.requestFormReset = function(y) {
    r.d.r(y);
  }, pe.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, pe.useFormState = function(y, m, p) {
    return v.H.useFormState(y, m, p);
  }, pe.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, pe.version = "19.3.0", pe;
}
var cy;
function _v() {
  if (cy) return ed.exports;
  cy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (a) {
        console.error(a);
      }
  }
  return l(), ed.exports = PS(), ed.exports;
}
var ry;
function tb() {
  if (ry) return _u;
  ry = 1;
  var l = WS(), a = Yu(), o = _v();
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
  function x(t) {
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
        for (var h = !1, S = u.child; S; ) {
          if (S === n) {
            h = !0, n = u, i = c;
            break;
          }
          if (S === i) {
            h = !0, i = u, n = c;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = c.child; S; ) {
            if (S === n) {
              h = !0, n = c, i = u;
              break;
            }
            if (S === i) {
              h = !0, i = c, n = u;
              break;
            }
            S = S.sibling;
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
  function p(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function b(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function E(t) {
    var e = [null, null], n = p(t);
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
  var w = null, U = null;
  function _(t, e, n) {
    return t === n ? !0 : t === e ? (w = t, !0) : !1;
  }
  function C(t, e, n) {
    return t === n ? (U = t, !1) : t === e ? (U !== null && (w = t), !0) : !1;
  }
  function X(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function B(t, e, n) {
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
  var R = Object.assign, G = Symbol.for("react.element"), I = Symbol.for("react.transitional.element"), ot = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), at = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), it = Symbol.for("react.activity"), dt = Symbol.for("react.legacy_hidden"), vt = Symbol.for("react.memo_cache_sentinel"), T = Symbol.for("react.view_transition"), k = Symbol.for("react.recoverable"), st = Symbol.iterator;
  function ut(t) {
    return t === null || typeof t != "object" ? null : (t = st && t[st] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === F ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case tt:
        return "Fragment";
      case lt:
        return "Profiler";
      case at:
        return "StrictMode";
      case H:
        return "Suspense";
      case q:
        return "SuspenseList";
      case it:
        return "Activity";
      case T:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ot:
          return "Portal";
        case V:
          return t.displayName || "Context";
        case z:
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
  var gt = Array.isArray, ct = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, wt = [], _t = -1;
  function Ct(t) {
    return { current: t };
  }
  function Ht(t) {
    0 > _t || (t.current = wt[_t], wt[_t] = null, _t--);
  }
  function Ot(t, e) {
    _t++, wt[_t] = t.current, t.current = e;
  }
  var Pt = Ct(null), xe = Ct(null), re = Ct(null), En = Ct(null);
  function Ie(t, e) {
    switch (Ot(re, e), Ot(xe, t), Ot(Pt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = sm(e), t = fm(e, t);
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
  function Ae() {
    Ht(Pt), Ht(xe), Ht(re);
  }
  function Ee(t) {
    var e = t.memoizedState;
    e !== null && (fa._currentValue = e.memoizedState, Ot(En, t)), e = Pt.current;
    var n = fm(e, t.type);
    e !== n && (Ot(xe, t), Ot(Pt, n));
  }
  function Oe(t) {
    xe.current === t && (Ht(Pt), Ht(xe)), En.current === t && (Ht(En), fa._currentValue = xt);
  }
  var Ve, _n;
  function ke(t) {
    if (Ve === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ve = e && e[1] || "", _n = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ve + t + _n;
  }
  var jl = !1;
  function wa(t, e) {
    if (!t || jl) return "";
    jl = !0;
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
                  var L = ht;
                }
                Reflect.construct(t, [], nt);
              } else {
                try {
                  nt.call();
                } catch (ht) {
                  L = ht;
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
                L = ht;
              }
              (nt = t()) && typeof nt.catch == "function" && nt.catch(function() {
              });
            }
          } catch (ht) {
            if (ht && L && typeof ht.stack == "string")
              return [ht.stack, L.stack];
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
      var c = i.DetermineComponentFrameRoot(), h = c[0], S = c[1];
      if (h && S) {
        var M = h.split(`
`), j = S.split(`
`);
        for (u = i = 0; i < M.length && !M[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; u < j.length && !j[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (i === M.length || u === j.length)
          for (i = M.length - 1, u = j.length - 1; 1 <= i && 0 <= u && M[i] !== j[u]; )
            u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (M[i] !== j[u]) {
            if (i !== 1 || u !== 1)
              do
                if (i--, u--, 0 > u || M[i] !== j[u]) {
                  var J = `
` + M[i].replace(" at new ", " at ");
                  return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), J;
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      jl = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? ke(n) : "";
  }
  function dr(t, e) {
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
        return wa(t.type, !1);
      case 11:
        return wa(t.type.render, !1);
      case 1:
        return wa(t.type, !0);
      case 31:
        return ke("Activity");
      case 30:
        return ke("ViewTransition");
      default:
        return "";
    }
  }
  function $u(t) {
    try {
      var e = "", n = null;
      do
        e += dr(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Na = Object.prototype.hasOwnProperty, Ta = l.unstable_scheduleCallback, Ca = l.unstable_cancelCallback, hr = l.unstable_shouldYield, gr = l.unstable_requestPaint, _e = l.unstable_now, mr = l.unstable_getCurrentPriorityLevel, Ju = l.unstable_ImmediatePriority, Iu = l.unstable_UserBlockingPriority, bi = l.unstable_NormalPriority, yr = l.unstable_LowPriority, ku = l.unstable_IdlePriority, vr = l.log, pr = l.unstable_setDisableYieldValue, ql = null, we = null;
  function wn(t) {
    if (typeof vr == "function" && pr(t), we && typeof we.setStrictMode == "function")
      try {
        we.setStrictMode(ql, t);
      } catch {
      }
  }
  var Ne = Math.clz32 ? Math.clz32 : br, xr = Math.log, Sr = Math.LN2;
  function br(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (xr(t) / Sr | 0) | 0;
  }
  var Ei = 256, _i = 262144, wi = 4194304;
  function Yn(t) {
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
  function Ni(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var u = 0, c = t.suspendedLanes, h = t.pingedLanes;
    t = t.warmLanes;
    var S = i & 134217727;
    return S !== 0 ? (i = S & ~c, i !== 0 ? u = Yn(i) : (h &= S, h !== 0 ? u = Yn(h) : n || (n = S & ~t, n !== 0 && (u = Yn(n))))) : (S = i & ~c, S !== 0 ? u = Yn(S) : h !== 0 ? u = Yn(h) : n || (n = i & ~t, n !== 0 && (u = Yn(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & c) === 0 && (c = u & -u, n = e & -e, c >= n || c === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function Xl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function za(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var i = 31 - Ne(n), u = 1 << i;
        e |= t[i], n &= ~u;
      }
    return e;
  }
  function Fu(t, e) {
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
  function Ma() {
    var t = wi;
    return wi <<= 1, (wi & 62914560) === 0 && (wi = 4194304), t;
  }
  function Aa(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Zl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Er(t, e, n, i, u, c) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var S = t.entanglements, M = t.expirationTimes, j = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var J = 31 - Ne(n), nt = 1 << J;
      S[J] = 0, M[J] = -1;
      var L = j[J];
      if (L !== null)
        for (j[J] = null, J = 0; J < L.length; J++) {
          var K = L[J];
          K !== null && (K.lane &= -536870913);
        }
      n &= ~nt;
    }
    i !== 0 && Wu(t, i, 0), c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(h & ~e));
  }
  function Wu(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - Ne(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function Pu(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - Ne(n), u = 1 << i;
      u & e | t[i] & e && (t[i] |= e), n &= ~u;
    }
  }
  function to(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Ti(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Ti(t) {
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
  function Oa(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function eo() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Jm(t.type));
  }
  function no(t, e) {
    var n = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = n;
    }
  }
  var on = Math.random().toString(36).slice(2), oe = "__reactFiber$" + on, Se = "__reactProps$" + on, ol = "__reactContainer$" + on, lo = "__reactEvents$" + on, io = "__reactListeners$" + on, _r = "__reactHandles$" + on, ao = "__reactResources$" + on, Gl = "__reactMarker$" + on, Ci = "__reactLoad$" + on;
  function zi(t) {
    delete t[oe], delete t[Se], delete t[io], delete t[_r];
  }
  function jn(t) {
    var e;
    if (e = t[oe]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ol] || n[oe]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = zm(t); t !== null; ) {
            if (n = t[oe]) return n;
            t = zm(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function cl(t) {
    if (t = t[oe] || t[ol]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ql(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function qn(t) {
    var e = t[ao];
    return e || (e = t[ao] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[Gl] = !0;
  }
  function Da(t) {
    t[Ci] = void 0;
  }
  var uo = /* @__PURE__ */ new Set(), oo = {};
  function cn(t, e) {
    rl(t, e), rl(t + "Capture", e);
  }
  function rl(t, e) {
    for (oo[t] = e, t = 0; t < e.length; t++)
      uo.add(e[t]);
  }
  var wr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ra = {}, Id = {};
  function h1(t) {
    return Na.call(Id, t) ? !0 : Na.call(Ra, t) ? !1 : wr.test(t) ? Id[t] = !0 : (Ra[t] = !0, !1);
  }
  var Lt = !1;
  function kd() {
    var t = Lt;
    return Lt = !1, t;
  }
  function co(t, e, n) {
    if (h1(e))
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
  function ro(t, e, n) {
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
  function Xn(t, e, n, i) {
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
  function Fd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function g1(t, e, n) {
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
  function Nr(t) {
    if (!t._valueTracker) {
      var e = Fd(t) ? "checked" : "value";
      t._valueTracker = g1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Wd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), i = "";
    return t && (i = Fd(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
  }
  var m1 = /[\n"\\]/g;
  function Fe(t) {
    return t.replace(
      m1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Tr(t, e, n, i, u, c, h, S) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ye(e)) : t.value !== "" + Ye(e) && (t.value = "" + Ye(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? Cr(t, Ye(t.value)) : Cr(t, Ye(e)) : n != null ? Cr(t, Ye(n)) : i != null && t.removeAttribute("value"), u == null && c != null && (t.defaultChecked = !!c), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? t.name = "" + Ye(S) : t.removeAttribute("name");
  }
  function Pd(t, e, n, i, u, c, h, S) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || e != null)) {
        Nr(t);
        return;
      }
      n = n != null ? "" + Ye(n) : "", e = e != null ? "" + Ye(e) : n, S || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? u, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = S ? t.checked : !!i, t.defaultChecked = !!i, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Nr(t);
  }
  function Cr(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Mi(t, e, n, i) {
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
  function th(t, e, n) {
    if (e != null && (e = "" + Ye(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ye(n) : "";
  }
  function eh(t, e, n, i) {
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
    n = Ye(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), Nr(t);
  }
  function Ai(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var y1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function nh(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || y1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function lh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "", Lt = !0);
      for (var u in e)
        i = e[u], e.hasOwnProperty(u) && n[u] !== i && (nh(t, u, i), Lt = !0);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && nh(t, c, e[c]);
  }
  function zr(t) {
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
  var v1 = /* @__PURE__ */ new Map([
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
  ]), p1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function so(t) {
    return p1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Nn() {
  }
  var Mr = null;
  function Ar(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Oi = null, Di = null;
  function ih(t) {
    var e = cl(t);
    if (e && (t = e.stateNode)) {
      var n = t[Se] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Tr(
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
                Tr(
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
              i = n[e], i.form === t.form && Wd(i);
          }
          break t;
        case "textarea":
          th(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Mi(t, !!n.multiple, e, !1);
      }
    }
  }
  var Or = !1;
  function ah(t, e, n) {
    if (Or) return t(e, n);
    Or = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Or = !1, (Oi !== null || Di !== null) && (fc(), Oi && (e = Oi, t = Di, Di = Oi = null, ih(e), t)))
        for (e = 0; e < t.length; e++) ih(t[e]);
    }
  }
  function Ha(t, e) {
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
  var Zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Dr = !1;
  if (Zn)
    try {
      var Ba = {};
      Object.defineProperty(Ba, "passive", {
        get: function() {
          Dr = !0;
        }
      }), window.addEventListener("test", Ba, Ba), window.removeEventListener("test", Ba, Ba);
    } catch {
      Dr = !1;
    }
  var sl = null, Rr = null, fo = null;
  function uh() {
    if (fo) return fo;
    var t, e = Rr, n = e.length, i, u = "value" in sl ? sl.value : sl.textContent, c = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var h = n - t;
    for (i = 1; i <= h && e[n - i] === u[c - i]; i++) ;
    return fo = u.slice(t, 1 < i ? 1 - i : void 0);
  }
  function ho(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function go() {
    return !0;
  }
  function oh() {
    return !1;
  }
  function Te(t) {
    function e(n, i, u, c, h) {
      this._reactName = n, this._targetInst = u, this.type = i, this.nativeEvent = c, this.target = h, this.currentTarget = null;
      for (var S in t)
        t.hasOwnProperty(S) && (n = t[S], this[S] = n ? n(c) : c[S]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? go : oh, this.isPropagationStopped = oh, this;
    }
    return R(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = go);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = go);
      },
      persist: function() {
      },
      isPersistent: go
    }), e;
  }
  var fl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, mo = Te(fl), Ua = R({}, fl, { view: 0, detail: 0 }), x1 = Te(Ua), Hr, Br, La, yo = R({}, Ua, {
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
    getModifierState: Lr,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== La && (La && t.type === "mousemove" ? (Hr = t.screenX - La.screenX, Br = t.screenY - La.screenY) : Br = Hr = 0, La = t), Hr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Br;
    }
  }), ch = Te(yo), S1 = R({}, yo, { dataTransfer: 0 }), b1 = Te(S1), E1 = R({}, Ua, { relatedTarget: 0 }), Ur = Te(E1), _1 = R({}, fl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), w1 = Te(_1), N1 = R({}, fl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), T1 = Te(N1), C1 = R({}, fl, { data: 0 }), rh = Te(C1), z1 = {
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
  }, M1 = {
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
  }, A1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function O1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = A1[t]) ? !!e[t] : !1;
  }
  function Lr() {
    return O1;
  }
  var D1 = R({}, Ua, {
    key: function(t) {
      if (t.key) {
        var e = z1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = ho(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? M1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lr,
    charCode: function(t) {
      return t.type === "keypress" ? ho(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ho(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), R1 = Te(D1), H1 = R({}, yo, {
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
  }), sh = Te(H1), B1 = R({}, fl, { submitter: 0 }), U1 = Te(B1), L1 = R({}, Ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lr
  }), V1 = Te(L1), Y1 = R({}, fl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), j1 = Te(Y1), q1 = R({}, yo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), X1 = Te(q1), Z1 = R({}, fl, {
    newState: 0,
    oldState: 0,
    source: 0
  }), G1 = Te(Z1), Q1 = [9, 13, 27, 32], Vr = Zn && "CompositionEvent" in window, Va = null;
  Zn && "documentMode" in document && (Va = document.documentMode);
  var K1 = Zn && "TextEvent" in window && !Va, fh = Zn && (!Vr || Va && 8 < Va && 11 >= Va), dh = " ", hh = !1;
  function gh(t, e) {
    switch (t) {
      case "keyup":
        return Q1.indexOf(e.keyCode) !== -1;
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
  function mh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ri = !1;
  function $1(t, e) {
    switch (t) {
      case "compositionend":
        return mh(e);
      case "keypress":
        return e.which !== 32 ? null : (hh = !0, dh);
      case "textInput":
        return t = e.data, t === dh && hh ? null : t;
      default:
        return null;
    }
  }
  function J1(t, e) {
    if (Ri)
      return t === "compositionend" || !Vr && gh(t, e) ? (t = uh(), fo = Rr = sl = null, Ri = !1, t) : null;
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
        return fh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var I1 = {
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
  function yh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!I1[t.type] : e === "textarea";
  }
  function vh(t, e, n, i) {
    Oi ? Di ? Di.push(i) : Di = [i] : Oi = i, e = vc(e, "onChange"), 0 < e.length && (n = new mo(
      "onChange",
      "change",
      null,
      n,
      i
    ), t.push({ event: n, listeners: e }));
  }
  var Ya = null, ja = null;
  function k1(t) {
    im(t, 0);
  }
  function vo(t) {
    var e = Ql(t);
    if (Wd(e)) return t;
  }
  function ph(t, e) {
    if (t === "change") return e;
  }
  var xh = !1;
  if (Zn) {
    var Yr;
    if (Zn) {
      var jr = "oninput" in document;
      if (!jr) {
        var Sh = document.createElement("div");
        Sh.setAttribute("oninput", "return;"), jr = typeof Sh.oninput == "function";
      }
      Yr = jr;
    } else Yr = !1;
    xh = Yr && (!document.documentMode || 9 < document.documentMode);
  }
  function bh() {
    Ya && (Ya.detachEvent("onpropertychange", Eh), ja = Ya = null);
  }
  function Eh(t) {
    if (t.propertyName === "value" && vo(ja)) {
      var e = [];
      vh(
        e,
        ja,
        t,
        Ar(t)
      ), ah(k1, e);
    }
  }
  function F1(t, e, n) {
    t === "focusin" ? (bh(), Ya = e, ja = n, Ya.attachEvent("onpropertychange", Eh)) : t === "focusout" && bh();
  }
  function W1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return vo(ja);
  }
  function P1(t, e) {
    if (t === "click") return vo(e);
  }
  function tx(t, e) {
    if (t === "input" || t === "change")
      return vo(e);
  }
  function ex(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var je = typeof Object.is == "function" ? Object.is : ex;
  function qa(t, e) {
    if (je(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var u = n[i];
      if (!Na.call(e, u) || !je(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function qr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function _h(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function wh(t, e) {
    var n = _h(t);
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
      n = _h(n);
    }
  }
  function Nh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Nh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Th(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = qr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = qr(t.document);
    }
    return e;
  }
  function Xr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var nx = Zn && "documentMode" in document && 11 >= document.documentMode, Hi = null, Zr = null, Xa = null, Gr = !1;
  function Ch(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gr || Hi == null || Hi !== qr(i) || (i = Hi, "selectionStart" in i && Xr(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Xa && qa(Xa, i) || (Xa = i, i = vc(Zr, "onSelect"), 0 < i.length && (e = new mo(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: i }), e.target = Hi)));
  }
  function Kl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Bi = {
    animationend: Kl("Animation", "AnimationEnd"),
    animationiteration: Kl("Animation", "AnimationIteration"),
    animationstart: Kl("Animation", "AnimationStart"),
    transitionrun: Kl("Transition", "TransitionRun"),
    transitionstart: Kl("Transition", "TransitionStart"),
    transitioncancel: Kl("Transition", "TransitionCancel"),
    transitionend: Kl("Transition", "TransitionEnd")
  }, Qr = {}, zh = {};
  Zn && (zh = document.createElement("div").style, "AnimationEvent" in window || (delete Bi.animationend.animation, delete Bi.animationiteration.animation, delete Bi.animationstart.animation), "TransitionEvent" in window || delete Bi.transitionend.transition);
  function $l(t) {
    if (Qr[t]) return Qr[t];
    if (!Bi[t]) return t;
    var e = Bi[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in zh)
        return Qr[t] = e[n];
    return t;
  }
  var Mh = $l("animationend"), Ah = $l("animationiteration"), Oh = $l("animationstart"), lx = $l("transitionrun"), ix = $l("transitionstart"), ax = $l("transitioncancel"), Dh = $l("transitionend"), Rh = /* @__PURE__ */ new Map(), Kr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Kr.push("scrollEnd");
  function rn(t, e) {
    Rh.set(t, e), cn(e, [t]);
  }
  var ux = 0;
  function Gn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = hn.identifierPrefix;
    var n = ux++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Hh(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = ea;
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
  function Qn(t, e) {
    return t = Hh(t), e = Hh(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var po = typeof reportError == "function" ? reportError : function(t) {
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
  }, We = [], Ui = 0, $r = 0;
  function xo() {
    for (var t = Ui, e = $r = Ui = 0; e < t; ) {
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
      c !== 0 && Bh(n, u, c);
    }
  }
  function So(t, e, n, i) {
    We[Ui++] = t, We[Ui++] = e, We[Ui++] = n, We[Ui++] = i, $r |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function Jr(t, e, n, i) {
    return So(t, e, n, i), bo(t);
  }
  function Jl(t, e) {
    return So(t, null, null, e), bo(t);
  }
  function Bh(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var u = !1, c = t.return; c !== null; )
      c.childLanes |= n, i = c.alternate, i !== null && (i.childLanes |= n), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (u = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, u && e !== null && (u = 31 - Ne(n), t = c.hiddenUpdates, i = t[u], i === null ? t[u] = [e] : i.push(e), e.lane = n | 536870912), c) : null;
  }
  function bo(t) {
    if (50 < su)
      throw su = 0, sc = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Li = {};
  function ox(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function De(t, e, n, i) {
    return new ox(t, e, n, i);
  }
  function Ir(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Kn(t, e) {
    var n = t.alternate;
    return n === null ? (n = De(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Uh(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Eo(t, e, n, i, u, c) {
    var h = 0;
    if (i = t, typeof i == "function") Ir(i) && (h = 1);
    else if (typeof i == "string")
      h = BS(
        t,
        n,
        Pt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (i) {
        case it:
          return t = De(31, n, e, u), t.elementType = it, t.lanes = c, t;
        case tt:
          return Il(n.children, u, c, e);
        case at:
          h = 8, u |= 24;
          break;
        case lt:
          return t = De(12, n, e, u | 2), t.elementType = lt, t.lanes = c, t;
        case H:
          return t = De(13, n, e, u), t.elementType = H, t.lanes = c, t;
        case q:
          return t = De(19, n, e, u), t.elementType = q, t.lanes = c, t;
        case dt:
        case T:
          return t = u | 32, t = De(30, n, e, t), t.elementType = T, t.lanes = c, t.stateNode = {
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
              case z:
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
    return e = De(h, n, e, u), e.elementType = t, e.type = i, e.lanes = c, e;
  }
  function Il(t, e, n, i) {
    return t = De(7, t, i, e), t.lanes = n, t;
  }
  function kr(t, e, n) {
    return t = De(6, t, null, e), t.lanes = n, t;
  }
  function Lh(t) {
    var e = De(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Fr(t, e, n) {
    return e = De(
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
  var Vh = /* @__PURE__ */ new WeakMap();
  function Pe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Vh.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: $u(e)
      }, Vh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: $u(e)
    };
  }
  var Vi = [], Yi = 0, _o = null, Za = 0, tn = [], en = 0, dl = null, Tn = 1, Cn = "";
  function $n(t, e) {
    Vi[Yi++] = Za, Vi[Yi++] = _o, _o = t, Za = e;
  }
  function Yh(t, e, n) {
    tn[en++] = Tn, tn[en++] = Cn, tn[en++] = dl, dl = t;
    var i = Tn;
    t = Cn;
    var u = 32 - Ne(i) - 1;
    i &= ~(1 << u), n += 1;
    var c = 32 - Ne(e) + u;
    if (30 < c) {
      var h = u - u % 5;
      c = (i & (1 << h) - 1).toString(32), i >>= h, u -= h, Tn = 1 << 32 - Ne(e) + u | n << u | i, Cn = c + t;
    } else
      Tn = 1 << c | n << u | i, Cn = t;
  }
  function wo(t) {
    t.return !== null && ($n(t, 1), Yh(t, 1, 0));
  }
  function Wr(t) {
    for (; t === _o; )
      _o = Vi[--Yi], Vi[Yi] = null, Za = Vi[--Yi], Vi[Yi] = null;
    for (; t === dl; )
      dl = tn[--en], tn[en] = null, Cn = tn[--en], tn[en] = null, Tn = tn[--en], tn[en] = null;
  }
  function jh(t, e) {
    tn[en++] = Tn, tn[en++] = Cn, tn[en++] = dl, Tn = e.id, Cn = e.overflow, dl = t;
  }
  var se = null, Qt = null, zt = !1, hl = null, nn = !1, Pr = Error(r(519));
  function gl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ga(Pe(e, t)), Pr;
  }
  function qh(t) {
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
        for (n = 0; n < du.length; n++)
          At(du[n], e);
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
        At("invalid", e), Pd(
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
        At("invalid", e), eh(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || cm(e.textContent, n) ? (i.popover != null && (At("beforetoggle", e), At("toggle", e)), i.onScroll != null && At("scroll", e), i.onScrollEnd != null && At("scrollend", e), i.onClick != null && (e.onclick = Nn), e = !0) : e = !1, e || gl(t, !0);
  }
  function No(t) {
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
  function ji(t) {
    if (t !== se) return !1;
    if (!zt) return No(t), zt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Af(t.type, t.memoizedProps)), n = !n), n && Qt && gl(t), No(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Qt = Cm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Qt = Cm(t);
    } else
      e === 27 ? (e = Qt, Al(t.type) ? (t = Yf, Yf = null, Qt = t) : Qt = e) : Qt = se ? an(t.stateNode.nextSibling) : null;
    return !0;
  }
  function kl() {
    Qt = se = null, zt = !1;
  }
  function ts() {
    var t = hl;
    return t !== null && (Be === null ? Be = t : Be.push.apply(
      Be,
      t
    ), hl = null), t;
  }
  function Ga(t) {
    hl === null ? hl = [t] : hl.push(t);
  }
  var es = Ct(null), Fl = null, Jn = null;
  function ml(t, e, n) {
    Ot(es, e._currentValue), e._currentValue = n;
  }
  function In(t) {
    t._currentValue = es.current, Ht(es);
  }
  function To(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function ns(t, e, n, i) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var h = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var S = c;
          c = u;
          for (var M = 0; M < e.length; M++)
            if (S.context === e[M]) {
              c.lanes |= n, S = c.alternate, S !== null && (S.lanes |= n), To(
                c.return,
                n,
                t
              ), i || (h = null);
              break t;
            }
          c = S.next;
        }
      } else if (u.tag === 18) {
        if (h = u.return, h === null) throw Error(r(341));
        h.lanes |= n, c = h.alternate, c !== null && (c.lanes |= n), To(h, n, t), h = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), To(
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
  function Wl(t, e, n, i) {
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
          var S = u.type;
          je(u.pendingProps.value, h.value) || (t !== null ? t.push(S) : t = [S]);
        }
      } else if (u === En.current) {
        if (h = u.alternate, h === null) throw Error(r(387));
        h.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(fa) : t = [fa]);
      }
      u = u.return;
    }
    return t !== null && ns(
      e,
      t,
      n,
      i
    ), e.flags |= 262144, t !== null;
  }
  function Co(t) {
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
  function Pl(t) {
    Fl = t, Jn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function he(t) {
    return Xh(Fl, t);
  }
  function zo(t, e) {
    return Fl === null && Pl(t), Xh(t, e);
  }
  function Xh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Jn === null) {
      if (t === null) throw Error(r(308));
      Jn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Jn = Jn.next = e;
    return n;
  }
  var cx = typeof AbortController < "u" ? AbortController : function() {
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
  }, rx = l.unstable_scheduleCallback, sx = l.unstable_NormalPriority, ne = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ls() {
    return {
      controller: new cx(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qa(t) {
    t.refCount--, t.refCount === 0 && rx(sx, function() {
      t.controller.abort();
    });
  }
  function Zh(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var i = e[t];
        n.indexOf(i) === -1 && n.push(i);
      }
    }
  }
  var Ka = null;
  function fx(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var $a = null, is = 0, ti = 0, qi = null;
  function dx(t, e) {
    if ($a === null) {
      var n = $a = [];
      is = 0, ti = bf(), qi = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return is++, e.then(Gh, Gh), e;
  }
  function Gh() {
    if (--is === 0 && (Ka = null, $a !== null)) {
      qi !== null && (qi.status = "fulfilled");
      var t = $a;
      $a = null, ti = 0, qi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function hx(t, e) {
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
  var Qh = ct.S;
  ct.S = function(t, e) {
    if (Lg = _e(), typeof e == "object" && e !== null && typeof e.then == "function" && dx(t, e), Ka !== null)
      for (var n = aa; n !== null; )
        Zh(n, Ka), n = n.next;
    if (n = t.types, n !== null) {
      for (var i = aa; i !== null; )
        Zh(i, n), i = i.next;
      if (ti !== 0) {
        i = Ka, i === null && (i = Ka = []);
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          i.indexOf(c) === -1 && i.push(c);
        }
      }
    }
    Qh !== null && Qh(t, e);
  };
  var ei = Ct(null);
  function as() {
    var t = ei.current;
    return t !== null ? t : Gt.pooledCache;
  }
  function Mo(t, e) {
    e === null ? Ot(ei, ei.current) : Ot(ei, e.pool);
  }
  function Kh() {
    var t = as();
    return t === null ? null : { parent: ne._currentValue, pool: t };
  }
  var Xi = Error(r(460)), us = Error(r(474)), Ao = Error(r(542)), Oo = { then: function() {
  } };
  function $h(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Jh(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Nn, Nn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, kh(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
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
            throw t = e.reason, kh(t), t;
        }
        throw li = e, Xi;
    }
  }
  function ni(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (li = n, Xi) : n;
    }
  }
  var li = null;
  function Ih() {
    if (li === null) throw Error(r(459));
    var t = li;
    return li = null, t;
  }
  function kh(t) {
    if (t === Xi || t === Ao)
      throw Error(r(483));
  }
  var Zi = null, Ja = 0;
  function Do(t) {
    var e = Ja;
    return Ja += 1, Zi === null && (Zi = []), Jh(Zi, t, e);
  }
  function yl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ro(t, e) {
    throw e.$$typeof === G ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Fh(t) {
    function e(Y, D) {
      if (t) {
        var Q = Y.deletions;
        Q === null ? (Y.deletions = [D], Y.flags |= 16) : Q.push(D);
      }
    }
    function n(Y, D) {
      if (!t) return null;
      for (; D !== null; )
        e(Y, D), D = D.sibling;
      return null;
    }
    function i(Y) {
      for (var D = /* @__PURE__ */ new Map(); Y !== null; )
        Y.key === null ? D.set(Y.index, Y) : D.set(Y.key, Y), Y = Y.sibling;
      return D;
    }
    function u(Y, D) {
      return Y = Kn(Y, D), Y.index = 0, Y.sibling = null, Y;
    }
    function c(Y, D, Q) {
      return Y.index = Q, t ? (Q = Y.alternate, Q !== null ? (Q = Q.index, Q < D ? (Y.flags |= 2, D) : Q) : (Y.flags |= 134217730, D)) : (Y.flags |= 1048576, D);
    }
    function h(Y) {
      return t && Y.alternate === null && (Y.flags |= 134217730), Y;
    }
    function S(Y, D, Q, et) {
      return D === null || D.tag !== 6 ? (D = kr(Q, Y.mode, et), D.return = Y, D) : (D = u(D, Q), D.return = Y, D);
    }
    function M(Y, D, Q, et) {
      var mt = Q.type;
      return mt === tt ? (Y = J(
        Y,
        D,
        Q.props.children,
        et,
        Q.key
      ), yl(Y, Q), Y) : D !== null && (D.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === P && ni(mt) === D.type) ? (D = u(D, Q.props), yl(D, Q), D.return = Y, D) : (D = Eo(
        Q.type,
        Q.key,
        Q.props,
        null,
        Y.mode,
        et
      ), yl(D, Q), D.return = Y, D);
    }
    function j(Y, D, Q, et) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== Q.containerInfo || D.stateNode.implementation !== Q.implementation ? (D = Fr(Q, Y.mode, et), D.return = Y, D) : (D = u(D, Q.children || []), D.return = Y, D);
    }
    function J(Y, D, Q, et, mt) {
      return D === null || D.tag !== 7 ? (D = Il(
        Q,
        Y.mode,
        et,
        mt
      ), D.return = Y, D) : (D = u(D, Q), D.return = Y, D);
    }
    function nt(Y, D, Q) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = kr(
          "" + D,
          Y.mode,
          Q
        ), D.return = Y, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case I:
            return Q = Eo(
              D.type,
              D.key,
              D.props,
              null,
              Y.mode,
              Q
            ), yl(Q, D), Q.return = Y, Q;
          case ot:
            return D = Fr(
              D,
              Y.mode,
              Q
            ), D.return = Y, D;
          case P:
            return D = ni(D), nt(Y, D, Q);
        }
        if (gt(D) || ut(D))
          return D = Il(
            D,
            Y.mode,
            Q,
            null
          ), D.return = Y, D;
        if (typeof D.then == "function")
          return nt(Y, Do(D), Q);
        if (D.$$typeof === V)
          return nt(
            Y,
            zo(Y, D),
            Q
          );
        Ro(Y, D);
      }
      return null;
    }
    function L(Y, D, Q, et) {
      var mt = D !== null ? D.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return mt !== null ? null : S(Y, D, "" + Q, et);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case I:
            return Q.key === mt ? M(Y, D, Q, et) : null;
          case ot:
            return Q.key === mt ? j(Y, D, Q, et) : null;
          case P:
            return Q = ni(Q), L(Y, D, Q, et);
        }
        if (gt(Q) || ut(Q))
          return mt !== null ? null : J(Y, D, Q, et, null);
        if (typeof Q.then == "function")
          return L(
            Y,
            D,
            Do(Q),
            et
          );
        if (Q.$$typeof === V)
          return L(
            Y,
            D,
            zo(Y, Q),
            et
          );
        Ro(Y, Q);
      }
      return null;
    }
    function K(Y, D, Q, et, mt) {
      if (typeof et == "string" && et !== "" || typeof et == "number" || typeof et == "bigint")
        return Y = Y.get(Q) || null, S(D, Y, "" + et, mt);
      if (typeof et == "object" && et !== null) {
        switch (et.$$typeof) {
          case I:
            return Y = Y.get(
              et.key === null ? Q : et.key
            ) || null, M(D, Y, et, mt);
          case ot:
            return Y = Y.get(
              et.key === null ? Q : et.key
            ) || null, j(D, Y, et, mt);
          case P:
            return et = ni(et), K(
              Y,
              D,
              Q,
              et,
              mt
            );
        }
        if (gt(et) || ut(et))
          return Y = Y.get(Q) || null, J(D, Y, et, mt, null);
        if (typeof et.then == "function")
          return K(
            Y,
            D,
            Q,
            Do(et),
            mt
          );
        if (et.$$typeof === V)
          return K(
            Y,
            D,
            Q,
            zo(D, et),
            mt
          );
        Ro(D, et);
      }
      return null;
    }
    function ht(Y, D, Q, et) {
      for (var mt = null, Rt = null, St = D, bt = D = 0, ae = null; St !== null && bt < Q.length; bt++) {
        St.index > bt ? (ae = St, St = null) : ae = St.sibling;
        var Bt = L(
          Y,
          St,
          Q[bt],
          et
        );
        if (Bt === null) {
          St === null && (St = ae);
          break;
        }
        t && St && Bt.alternate === null && e(Y, St), D = c(Bt, D, bt), Rt === null ? mt = Bt : Rt.sibling = Bt, Rt = Bt, St = ae;
      }
      if (bt === Q.length)
        return n(Y, St), zt && $n(Y, bt), mt;
      if (St === null) {
        for (; bt < Q.length; bt++)
          St = nt(Y, Q[bt], et), St !== null && (D = c(
            St,
            D,
            bt
          ), Rt === null ? mt = St : Rt.sibling = St, Rt = St);
        return zt && $n(Y, bt), mt;
      }
      for (St = i(St); bt < Q.length; bt++)
        ae = K(
          St,
          Y,
          bt,
          Q[bt],
          et
        ), ae !== null && (t && (Bt = ae.alternate, Bt !== null && St.delete(Bt.key === null ? bt : Bt.key)), D = c(
          ae,
          D,
          bt
        ), Rt === null ? mt = ae : Rt.sibling = ae, Rt = ae);
      return t && St.forEach(function(Bl) {
        return e(Y, Bl);
      }), zt && $n(Y, bt), mt;
    }
    function yt(Y, D, Q, et) {
      if (Q == null) throw Error(r(151));
      for (var mt = null, Rt = null, St = D, bt = D = 0, ae = null, Bt = Q.next(); St !== null && !Bt.done; bt++, Bt = Q.next()) {
        St.index > bt ? (ae = St, St = null) : ae = St.sibling;
        var Bl = L(Y, St, Bt.value, et);
        if (Bl === null) {
          St === null && (St = ae);
          break;
        }
        t && St && Bl.alternate === null && e(Y, St), D = c(Bl, D, bt), Rt === null ? mt = Bl : Rt.sibling = Bl, Rt = Bl, St = ae;
      }
      if (Bt.done)
        return n(Y, St), zt && $n(Y, bt), mt;
      if (St === null) {
        for (; !Bt.done; bt++, Bt = Q.next())
          Bt = nt(Y, Bt.value, et), Bt !== null && (D = c(Bt, D, bt), Rt === null ? mt = Bt : Rt.sibling = Bt, Rt = Bt);
        return zt && $n(Y, bt), mt;
      }
      for (St = i(St); !Bt.done; bt++, Bt = Q.next())
        Bt = K(St, Y, bt, Bt.value, et), Bt !== null && (t && (ae = Bt.alternate, ae !== null && St.delete(
          ae.key === null ? bt : ae.key
        )), D = c(Bt, D, bt), Rt === null ? mt = Bt : Rt.sibling = Bt, Rt = Bt);
      return t && St.forEach(function($S) {
        return e(Y, $S);
      }), zt && $n(Y, bt), mt;
    }
    function Tt(Y, D, Q, et) {
      if (typeof Q == "object" && Q !== null && Q.type === tt && Q.key === null && Q.props.ref === void 0 && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case I:
            t: {
              for (var mt = Q.key; D !== null; ) {
                if (D.key === mt) {
                  if (mt = Q.type, mt === tt) {
                    if (D.tag === 7) {
                      n(
                        Y,
                        D.sibling
                      ), et = u(
                        D,
                        Q.props.children
                      ), yl(et, Q), et.return = Y, Y = et;
                      break t;
                    }
                  } else if (D.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === P && ni(mt) === D.type) {
                    n(
                      Y,
                      D.sibling
                    ), et = u(D, Q.props), yl(et, Q), et.return = Y, Y = et;
                    break t;
                  }
                  n(Y, D);
                  break;
                } else e(Y, D);
                D = D.sibling;
              }
              Q.type === tt ? (et = Il(
                Q.props.children,
                Y.mode,
                et,
                Q.key
              ), yl(et, Q), et.return = Y, Y = et) : (et = Eo(
                Q.type,
                Q.key,
                Q.props,
                null,
                Y.mode,
                et
              ), yl(et, Q), et.return = Y, Y = et);
            }
            return h(Y);
          case ot:
            t: {
              for (mt = Q.key; D !== null; ) {
                if (D.key === mt)
                  if (D.tag === 4 && D.stateNode.containerInfo === Q.containerInfo && D.stateNode.implementation === Q.implementation) {
                    n(
                      Y,
                      D.sibling
                    ), et = u(D, Q.children || []), et.return = Y, Y = et;
                    break t;
                  } else {
                    n(Y, D);
                    break;
                  }
                else e(Y, D);
                D = D.sibling;
              }
              et = Fr(Q, Y.mode, et), et.return = Y, Y = et;
            }
            return h(Y);
          case P:
            return Q = ni(Q), Tt(
              Y,
              D,
              Q,
              et
            );
        }
        if (gt(Q))
          return ht(
            Y,
            D,
            Q,
            et
          );
        if (ut(Q)) {
          if (mt = ut(Q), typeof mt != "function") throw Error(r(150));
          return Q = mt.call(Q), yt(
            Y,
            D,
            Q,
            et
          );
        }
        if (typeof Q.then == "function")
          return Tt(
            Y,
            D,
            Do(Q),
            et
          );
        if (Q.$$typeof === V)
          return Tt(
            Y,
            D,
            zo(Y, Q),
            et
          );
        Ro(Y, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint" ? (Q = "" + Q, D !== null && D.tag === 6 ? (n(Y, D.sibling), et = u(D, Q), et.return = Y, Y = et) : (n(Y, D), et = kr(Q, Y.mode, et), et.return = Y, Y = et), h(Y)) : n(Y, D);
    }
    return function(Y, D, Q, et) {
      try {
        Ja = 0;
        var mt = Tt(
          Y,
          D,
          Q,
          et
        );
        return Zi = null, mt;
      } catch (St) {
        if (St === Xi || St === Ao) throw St;
        var Rt = De(29, St, null, Y.mode);
        return Rt.lanes = et, Rt.return = Y, Rt;
      } finally {
      }
    };
  }
  var ii = Fh(!0), Wh = Fh(!1), vl = !1;
  function os(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function cs(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function pl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xl(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Vt & 2) !== 0) {
      var u = i.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), i.pending = e, e = bo(t), Bh(t, null, n), e;
    }
    return So(t, i, e, n), bo(t);
  }
  function Ia(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Pu(t, n);
    }
  }
  function rs(t, e) {
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
  var ss = !1;
  function ka() {
    if (ss) {
      var t = qi;
      if (t !== null) throw t;
    }
  }
  function Fa(t, e, n, i) {
    ss = !1;
    var u = t.updateQueue;
    vl = !1;
    var c = u.firstBaseUpdate, h = u.lastBaseUpdate, S = u.shared.pending;
    if (S !== null) {
      u.shared.pending = null;
      var M = S, j = M.next;
      M.next = null, h === null ? c = j : h.next = j, h = M;
      var J = t.alternate;
      J !== null && (J = J.updateQueue, S = J.lastBaseUpdate, S !== h && (S === null ? J.firstBaseUpdate = j : S.next = j, J.lastBaseUpdate = M));
    }
    if (c !== null) {
      var nt = u.baseState;
      h = 0, J = j = M = null, S = c;
      do {
        var L = S.lane & -536870913, K = L !== S.lane;
        if (K ? (Dt & L) === L : (i & L) === L) {
          L !== 0 && L === ti && (ss = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          t: {
            var ht = t, yt = S;
            L = e;
            var Tt = n;
            switch (yt.tag) {
              case 1:
                if (ht = yt.payload, typeof ht == "function") {
                  nt = ht.call(Tt, nt, L);
                  break t;
                }
                nt = ht;
                break t;
              case 3:
                ht.flags = ht.flags & -65537 | 128;
              case 0:
                if (ht = yt.payload, L = typeof ht == "function" ? ht.call(Tt, nt, L) : ht, L == null) break t;
                nt = R({}, nt, L);
                break t;
              case 2:
                vl = !0;
            }
          }
          L = S.callback, L !== null && (t.flags |= 64, K && (t.flags |= 8192), K = u.callbacks, K === null ? u.callbacks = [L] : K.push(L));
        } else
          K = {
            lane: L,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, J === null ? (j = J = K, M = nt) : J = J.next = K, h |= L;
        if (S = S.next, S === null) {
          if (S = u.shared.pending, S === null)
            break;
          K = S, S = K.next, K.next = null, u.lastBaseUpdate = K, u.shared.pending = null;
        }
      } while (!0);
      J === null && (M = nt), u.baseState = M, u.firstBaseUpdate = j, u.lastBaseUpdate = J, c === null && (u.shared.lanes = 0), Tl |= h, t.lanes = h, t.memoizedState = nt;
    }
  }
  function Ph(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function t0(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Ph(n[t], e);
  }
  var Sl = Ct(null), Ho = Ct(0);
  function e0(t, e) {
    t = tl, Ot(Ho, t), Ot(Sl, e), tl = t | e.baseLanes;
  }
  function fs() {
    Ot(Ho, tl), Ot(Sl, Sl.current);
  }
  function ds() {
    tl = Ho.current, Ht(Sl), Ht(Ho);
  }
  var ge = Ct(null), be = null;
  function bl(t) {
    var e = t.alternate;
    Ot(me, me.current & 1), Ot(ge, t), be === null && (e === null || Sl.current !== null || e.memoizedState !== null) && (be = t);
  }
  function hs(t) {
    Ot(me, me.current), Ot(ge, t), be === null && (be = t);
  }
  function n0(t) {
    t.tag === 22 ? (Ot(me, me.current), Ot(ge, t), be === null && (be = t)) : El();
  }
  function El() {
    Ot(me, me.current), Ot(ge, ge.current);
  }
  function qe(t) {
    Ht(ge), be === t && (be = null), Ht(me);
  }
  var me = Ct(0);
  function Wa(t, e) {
    Ot(ge, ge.current), Ot(me, e);
  }
  function gs(t) {
    Ht(me), Ht(ge), be === t && (be = null);
  }
  function Bo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Lf(n) || Vf(n)))
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
  var kn = 0, Nt = null, Zt = null, le = null, Uo = !1, Gi = !1, ai = !1, Lo = 0, Pa = 0, Qi = null, gx = 0;
  function Ft() {
    throw Error(r(321));
  }
  function ms(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!je(t[n], e[n])) return !1;
    return !0;
  }
  function ys(t, e, n, i, u, c) {
    return kn = c, Nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ct.H = t === null || t.memoizedState === null ? Y0 : j0, ai = !1, c = n(i, u), ai = !1, Gi && (c = i0(
      e,
      n,
      i,
      u
    )), l0(t), c;
  }
  function l0(t) {
    ct.H = Go;
    var e = Zt !== null && Zt.next !== null;
    if (kn = 0, le = Zt = Nt = null, Uo = !1, Pa = 0, Qi = null, e) throw Error(r(300));
    t === null || ie || (t = t.dependencies, t !== null && Co(t) && (ie = !0));
  }
  function i0(t, e, n, i) {
    Nt = t;
    var u = 0;
    do {
      if (Gi && (Qi = null), Pa = 0, Gi = !1, 25 <= u) throw Error(r(301));
      if (u += 1, le = Zt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      ct.H = Ex, c = e(n, i);
    } while (Gi);
    return c;
  }
  function mx() {
    var t = ct.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? tu(e) : e, t = t.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== t && (Nt.flags |= 1024), e;
  }
  function vs() {
    var t = Lo !== 0;
    return Lo = 0, t;
  }
  function ps(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function xs(t) {
    if (Uo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Uo = !1;
    }
    kn = 0, le = Zt = Nt = null, Gi = !1, Pa = Lo = 0, Qi = null;
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
  function Vo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tu(t) {
    var e = Pa;
    return Pa += 1, Qi === null && (Qi = []), t = Jh(Qi, t, e), e = Nt, (le === null ? e.memoizedState : le.next) === null && (e = e.alternate, ct.H = e === null || e.memoizedState === null ? Y0 : j0), t;
  }
  function Yo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return tu(t);
      if (t.$$typeof === k) return;
      if (t.$$typeof === V) return he(t);
    }
    throw Error(r(438, String(t)));
  }
  function Ss(t) {
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
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Vo(), Nt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++)
        n[i] = vt;
    return e.index++, n;
  }
  function Fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function jo(t) {
    var e = te();
    return bs(e, Zt, t);
  }
  function bs(t, e, n) {
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
      var S = h = null, M = null, j = e, J = !1;
      do {
        var nt = j.lane & -536870913;
        if (nt !== j.lane ? (Dt & nt) === nt : (kn & nt) === nt) {
          var L = j.revertLane;
          if (L === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), nt === ti && (J = !0);
          else if ((kn & L) === L) {
            j = j.next, L === ti && (J = !0);
            continue;
          } else
            nt = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, M === null ? (S = M = nt, h = c) : M = M.next = nt, Nt.lanes |= L, Tl |= L;
          nt = j.action, ai && n(c, nt), c = j.hasEagerState ? j.eagerState : n(c, nt);
        } else
          L = {
            lane: nt,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, M === null ? (S = M = L, h = c) : M = M.next = L, Nt.lanes |= nt, Tl |= nt;
        j = j.next;
      } while (j !== null && j !== e);
      if (M === null ? h = c : M.next = S, !je(c, t.memoizedState) && (ie = !0, J && (n = qi, n !== null)))
        throw n;
      t.memoizedState = c, t.baseState = h, t.baseQueue = M, i.lastRenderedState = c;
    }
    return u === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Es(t) {
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
  function a0(t, e, n) {
    var i = Nt, u = te(), c = zt;
    if (c) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var h = !je(
      (Zt || u).memoizedState,
      n
    );
    if (h && (u.memoizedState = n, ie = !0), u = u.queue, Ns(c0.bind(null, i, u, t), [
      t
    ]), t = u.getSnapshot !== e || h || le !== null && (le.memoizedState.tag & 1) !== 0, Ki(
      t ? 9 : 8,
      { destroy: void 0 },
      o0.bind(null, i, u, n, e),
      null
    ), t) {
      if (i.flags |= 2048, Gt === null) throw Error(r(349));
      c || (kn & 127) !== 0 || u0(i, e, n);
    }
    return n;
  }
  function u0(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Nt.updateQueue, e === null ? (e = Vo(), Nt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function o0(t, e, n, i) {
    e.value = n, e.getSnapshot = i, r0(e) && s0(t);
  }
  function c0(t, e, n) {
    return n(function() {
      r0(e) && s0(t);
    });
  }
  function r0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !je(t, n);
    } catch {
      return !0;
    }
  }
  function s0(t) {
    var e = Jl(t, 2);
    e !== null && Ue(e, t, 2);
  }
  function _s(t) {
    var e = Ce();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), ai) {
        wn(!0);
        try {
          n();
        } finally {
          wn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fn,
      lastRenderedState: t
    }, e;
  }
  function f0(t, e, n, i) {
    return t.baseState = n, bs(
      t,
      Zt,
      typeof i == "function" ? i : Fn
    );
  }
  function yx(t, e, n, i, u) {
    if (Zo(t)) throw Error(r(485));
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
      ct.T !== null ? n(!0) : c.isTransition = !1, i(c), n = e.pending, n === null ? (c.next = e.pending = c, d0(e, c)) : (c.next = n.next, e.pending = n.next = c);
    }
  }
  function d0(t, e) {
    var n = e.action, i = e.payload, u = t.state;
    if (e.isTransition) {
      var c = ct.T, h = {};
      h.types = c !== null ? c.types : null, ct.T = h;
      try {
        var S = n(u, i), M = ct.S;
        M !== null && M(h, S), h0(t, e, S);
      } catch (j) {
        ws(t, e, j);
      } finally {
        c !== null && h.types !== null && (c.types = h.types), ct.T = c;
      }
    } else
      try {
        c = n(u, i), h0(t, e, c);
      } catch (j) {
        ws(t, e, j);
      }
  }
  function h0(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        g0(t, e, i);
      },
      function(i) {
        return ws(t, e, i);
      }
    ) : g0(t, e, n);
  }
  function g0(t, e, n) {
    e.status = "fulfilled", e.value = n, m0(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, d0(t, n)));
  }
  function ws(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, m0(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function m0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function y0(t, e) {
    return e;
  }
  function v0(t, e) {
    if (zt) {
      var n = Gt.formState;
      if (n !== null) {
        t: {
          var i = Nt;
          if (zt) {
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
            gl(i);
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
      lastRenderedReducer: y0,
      lastRenderedState: e
    }, n.queue = i, n = U0.bind(
      null,
      Nt,
      i
    ), i.dispatch = n, i = _s(!1), c = As.bind(
      null,
      Nt,
      !1,
      i.queue
    ), i = Ce(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = u, n = yx.bind(
      null,
      Nt,
      u,
      c,
      n
    ), u.dispatch = n, i.memoizedState = t, [e, n, !1];
  }
  function p0(t) {
    var e = te();
    return x0(e, Zt, t);
  }
  function x0(t, e, n) {
    if (e = bs(
      t,
      e,
      y0
    )[0], t = jo(Fn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = tu(e);
      } catch (h) {
        throw h === Xi ? Ao : h;
      }
    else i = e;
    e = te();
    var u = e.queue, c = u.dispatch;
    return n !== e.memoizedState && (Nt.flags |= 2048, Ki(
      9,
      { destroy: void 0 },
      vx.bind(null, u, n),
      null
    )), [i, c, t];
  }
  function vx(t, e) {
    t.action = e;
  }
  function S0(t) {
    var e = te(), n = Zt;
    if (n !== null)
      return x0(e, n, t);
    te(), e = e.memoizedState, n = te();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [e, i, !1];
  }
  function Ki(t, e, n, i) {
    return t = { tag: t, create: n, deps: i, inst: e, next: null }, e = Nt.updateQueue, e === null && (e = Vo(), Nt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function b0() {
    return te().memoizedState;
  }
  function qo(t, e, n, i) {
    var u = Ce();
    Nt.flags |= t, u.memoizedState = Ki(
      1 | e,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function Xo(t, e, n, i) {
    var u = te();
    i = i === void 0 ? null : i;
    var c = u.memoizedState.inst;
    Zt !== null && i !== null && ms(i, Zt.memoizedState.deps) ? u.memoizedState = Ki(e, c, n, i) : (Nt.flags |= t, u.memoizedState = Ki(
      1 | e,
      c,
      n,
      i
    ));
  }
  function E0(t, e) {
    qo(8390656, 8, t, e);
  }
  function Ns(t, e) {
    Xo(2048, 8, t, e);
  }
  function px(t) {
    Nt.flags |= 4;
    var e = Nt.updateQueue;
    if (e === null)
      e = Vo(), Nt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function _0(t) {
    var e = te().memoizedState;
    return px({ ref: e, nextImpl: t }), function() {
      if ((Vt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function w0(t, e) {
    return Xo(4, 2, t, e);
  }
  function N0(t, e) {
    return Xo(4, 4, t, e);
  }
  function T0(t, e) {
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
  function C0(t, e, n) {
    n = n != null ? n.concat([t]) : null, Xo(4, 4, T0.bind(null, e, t), n);
  }
  function Ts() {
  }
  function z0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && ms(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
  }
  function M0(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && ms(e, i[1]))
      return i[0];
    if (i = t(), ai) {
      wn(!0);
      try {
        t();
      } finally {
        wn(!1);
      }
    }
    return n.memoizedState = [i, e], i;
  }
  function Cs(t, e, n) {
    return n === void 0 || (kn & 1073741824) !== 0 && (Dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Yg(), Nt.lanes |= t, Tl |= t, n);
  }
  function A0(t, e, n, i) {
    return je(n, e) ? n : Sl.current !== null ? (t = Cs(t, n, i), je(t, e) || (ie = !0), t) : (kn & 106) === 0 || (kn & 1073741824) !== 0 && (Dt & 261930) === 0 ? (ie = !0, t.memoizedState = n) : (t = Yg(), Nt.lanes |= t, Tl |= t, e);
  }
  function O0(t, e, n, i, u) {
    var c = rt.p;
    rt.p = c !== 0 && 8 > c ? c : 8;
    var h = ct.T, S = {};
    S.types = h !== null ? h.types : null, ct.T = S, As(t, !1, e, n);
    try {
      var M = u(), j = ct.S;
      if (j !== null && j(S, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var J = hx(
          M,
          i
        );
        eu(
          t,
          e,
          J,
          Qe(t)
        );
      } else
        eu(
          t,
          e,
          i,
          Qe(t)
        );
    } catch (nt) {
      eu(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: nt },
        Qe()
      );
    } finally {
      rt.p = c, h !== null && S.types !== null && (h.types = S.types), ct.T = h;
    }
  }
  function xx() {
  }
  function zs(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var u = D0(t).queue;
    O0(
      t,
      u,
      e,
      xt,
      n === null ? xx : function() {
        return R0(t), n(i);
      }
    );
  }
  function D0(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: xt,
      baseState: xt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: xt
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
        lastRenderedReducer: Fn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function R0(t) {
    var e = D0(t);
    e.next === null && (e = t.alternate.memoizedState), eu(
      t,
      e.next.queue,
      {},
      Qe()
    );
  }
  function Ms() {
    return he(fa);
  }
  function H0() {
    return te().memoizedState;
  }
  function B0() {
    return te().memoizedState;
  }
  function Sx(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Qe();
          t = pl(n);
          var i = xl(e, t, n);
          i !== null && (Ue(i, e, n), Ia(i, e, n)), e = { cache: ls() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function bx(t, e, n) {
    var i = Qe();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(t) ? L0(e, n) : (n = Jr(t, e, n, i), n !== null && (Ue(n, t, i), V0(n, e, i)));
  }
  function U0(t, e, n) {
    var i = Qe();
    eu(t, e, n, i);
  }
  function eu(t, e, n, i) {
    var u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zo(t)) L0(e, u);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var h = e.lastRenderedState, S = c(h, n);
          if (u.hasEagerState = !0, u.eagerState = S, je(S, h))
            return So(t, e, u, 0), Gt === null && xo(), !1;
        } catch {
        } finally {
        }
      if (n = Jr(t, e, u, i), n !== null)
        return Ue(n, t, i), V0(n, e, i), !0;
    }
    return !1;
  }
  function As(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: bf(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(t)) {
      if (e) throw Error(r(479));
    } else
      e = Jr(
        t,
        n,
        i,
        2
      ), e !== null && Ue(e, t, 2);
  }
  function Zo(t) {
    var e = t.alternate;
    return t === Nt || e !== null && e === Nt;
  }
  function L0(t, e) {
    Gi = Uo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function V0(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Pu(t, n);
    }
  }
  var Go = {
    readContext: he,
    use: Yo,
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
  }, Y0 = {
    readContext: he,
    use: Yo,
    useCallback: function(t, e) {
      return Ce().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: he,
    useEffect: E0,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, qo(
        4194308,
        4,
        T0.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return qo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      qo(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Ce();
      e = e === void 0 ? null : e;
      var i = t();
      if (ai) {
        wn(!0);
        try {
          t();
        } finally {
          wn(!1);
        }
      }
      return n.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, n) {
      var i = Ce();
      if (n !== void 0) {
        var u = n(e);
        if (ai) {
          wn(!0);
          try {
            n(e);
          } finally {
            wn(!1);
          }
        }
      } else u = e;
      return i.memoizedState = i.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, i.queue = t, t = t.dispatch = bx.bind(
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
      t = _s(t);
      var e = t.queue, n = U0.bind(null, Nt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Ts,
    useDeferredValue: function(t, e) {
      var n = Ce();
      return Cs(n, t, e);
    },
    useTransition: function() {
      var t = _s(!1);
      return t = O0.bind(
        null,
        Nt,
        t.queue,
        !0,
        !1
      ), Ce().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = Nt, u = Ce();
      if (zt) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Gt === null)
          throw Error(r(349));
        (Dt & 127) !== 0 || u0(i, e, n);
      }
      u.memoizedState = n;
      var c = { value: n, getSnapshot: e };
      return u.queue = c, E0(c0.bind(null, i, c, t), [
        t
      ]), i.flags |= 2048, Ki(
        9,
        { destroy: void 0 },
        o0.bind(
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
      if (zt) {
        var n = Cn, i = Tn;
        n = (i & ~(1 << 32 - Ne(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Lo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = gx++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ms,
    useFormState: v0,
    useActionState: v0,
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
      return e.queue = n, e = As.bind(
        null,
        Nt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Ss,
    useCacheRefresh: function() {
      return Ce().memoizedState = Sx.bind(
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
  }, j0 = {
    readContext: he,
    use: Yo,
    useCallback: z0,
    useContext: he,
    useEffect: Ns,
    useImperativeHandle: C0,
    useInsertionEffect: w0,
    useLayoutEffect: N0,
    useMemo: M0,
    useReducer: jo,
    useRef: b0,
    useState: function() {
      return jo(Fn);
    },
    useDebugValue: Ts,
    useDeferredValue: function(t, e) {
      var n = te();
      return A0(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = jo(Fn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : tu(t),
        e
      ];
    },
    useSyncExternalStore: a0,
    useId: H0,
    useHostTransitionStatus: Ms,
    useFormState: p0,
    useActionState: p0,
    useOptimistic: function(t, e) {
      var n = te();
      return f0(n, Zt, t, e);
    },
    useMemoCache: Ss,
    useCacheRefresh: B0,
    useEffectEvent: _0
  }, Ex = {
    readContext: he,
    use: Yo,
    useCallback: z0,
    useContext: he,
    useEffect: Ns,
    useImperativeHandle: C0,
    useInsertionEffect: w0,
    useLayoutEffect: N0,
    useMemo: M0,
    useReducer: Es,
    useRef: b0,
    useState: function() {
      return Es(Fn);
    },
    useDebugValue: Ts,
    useDeferredValue: function(t, e) {
      var n = te();
      return Zt === null ? Cs(n, t, e) : A0(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Es(Fn)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : tu(t),
        e
      ];
    },
    useSyncExternalStore: a0,
    useId: H0,
    useHostTransitionStatus: Ms,
    useFormState: S0,
    useActionState: S0,
    useOptimistic: function(t, e) {
      var n = te();
      return Zt !== null ? f0(n, Zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Ss,
    useCacheRefresh: B0,
    useEffectEvent: _0
  };
  function Os(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : R({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Ds = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = Qe(), u = pl(i);
      u.payload = e, n != null && (u.callback = n), e = xl(t, u, i), e !== null && (Ue(e, t, i), Ia(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = Qe(), u = pl(i);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = xl(t, u, i), e !== null && (Ue(e, t, i), Ia(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Qe(), i = pl(n);
      i.tag = 2, e != null && (i.callback = e), e = xl(t, i, n), e !== null && (Ue(e, t, n), Ia(e, t, n));
    }
  };
  function q0(t, e, n, i, u, c, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, c, h) : e.prototype && e.prototype.isPureReactComponent ? !qa(n, i) || !qa(u, c) : !0;
  }
  function X0(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Ds.enqueueReplaceState(e, e.state, null);
  }
  function ui(t, e) {
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
  function Z0(t) {
    po(t);
  }
  function G0(t) {
    console.error(t);
  }
  function Q0(t) {
    po(t);
  }
  function Qo(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function K0(t, e, n) {
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
  function Rs(t, e, n) {
    return n = pl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Qo(t, e);
    }, n;
  }
  function $0(t) {
    return t = pl(t), t.tag = 3, t;
  }
  function J0(t, e, n, i) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = i.value;
      t.payload = function() {
        return u(c);
      }, t.callback = function() {
        K0(e, n, i);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
      K0(e, n, i), typeof u != "function" && (Cl === null ? Cl = /* @__PURE__ */ new Set([this]) : Cl.add(this));
      var S = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function _x(t, e, n, i, u) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && Wl(
        e,
        n,
        u,
        !0
      ), n = ge.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return be === null ? dc() : n.alternate === null && Wt === 0 && (Wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, i === Oo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), pf(t, i, u)), !1;
          case 22:
            return n.flags |= 65536, i === Oo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), pf(t, i, u)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return pf(t, i, u), dc(), !1;
    }
    if (zt)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, i !== Pr && (t = Error(r(422), { cause: i }), Ga(Pe(t, n)))) : (i !== Pr && (e = Error(r(423), {
        cause: i
      }), Ga(
        Pe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, i = Pe(i, n), u = Rs(
        t.stateNode,
        i,
        u
      ), rs(t, u), Wt !== 4 && (Wt = 2)), !1;
    var c = Error(r(520), { cause: i });
    if (c = Pe(c, n), ru === null ? ru = [c] : ru.push(c), Wt !== 4 && (Wt = 2), e === null) return !0;
    i = Pe(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = Rs(n.stateNode, i, t), rs(n, t), !1;
        case 1:
          if (e = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Cl === null || !Cl.has(c))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = $0(u), J0(
              u,
              t,
              n,
              i
            ), rs(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Hs = Error(r(461)), ie = !1;
  function ce(t, e, n, i) {
    e.child = t === null ? Wh(e, null, n, i) : ii(
      e,
      t.child,
      n,
      i
    );
  }
  function I0(t, e, n, i, u) {
    n = n.render;
    var c = e.ref;
    if ("ref" in i) {
      var h = {};
      for (var S in i)
        S !== "ref" && (h[S] = i[S]);
    } else h = i;
    return Pl(e), i = ys(
      t,
      e,
      n,
      h,
      c,
      u
    ), S = vs(), t !== null && !ie ? (ps(t, e, u), Wn(t, e, u)) : (zt && S && wo(e), e.flags |= 1, ce(t, e, i, u), e.child);
  }
  function k0(t, e, n, i, u) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" && !Ir(c) && c.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = c, F0(
        t,
        e,
        c,
        i,
        u
      )) : (t = Eo(
        n.type,
        null,
        i,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !Xs(t, u)) {
      var h = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qa, n(h, i) && t.ref === e.ref)
        return Wn(t, e, u);
    }
    return e.flags |= 1, t = Kn(c, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function F0(t, e, n, i, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (qa(c, i) && t.ref === e.ref)
        if (ie = !1, e.pendingProps = i = c, Xs(t, u))
          (t.flags & 131072) !== 0 && (ie = !0);
        else
          return e.lanes = t.lanes, Wn(t, e, u);
    }
    return Bs(
      t,
      e,
      n,
      i,
      u
    );
  }
  function W0(t, e, n, i) {
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
        return P0(
          t,
          e,
          c,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Mo(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? e0(e, c) : fs(), n0(e);
      else
        return i = e.lanes = 536870912, P0(
          t,
          e,
          c !== null ? c.baseLanes | n : n,
          n,
          i
        );
    } else
      c !== null ? (Mo(e, c.cachePool), e0(e, c), El(), e.memoizedState = null) : (t !== null && Mo(e, null), fs(), El());
    return ce(t, e, u, n), e.child;
  }
  function nu(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function P0(t, e, n, i, u) {
    var c = as();
    return c = c === null ? null : { parent: ne._currentValue, pool: c }, e.memoizedState = {
      baseLanes: n,
      cachePool: c
    }, t !== null && Mo(e, null), fs(), n0(e), t !== null && Wl(t, e, i, !0), e.childLanes = u, null;
  }
  function Ko(t, e) {
    return e = $o(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function tg(t, e, n) {
    return ii(e, t.child, null, n), t = Ko(e, e.pendingProps), t.flags |= 2, qe(e), e.memoizedState = null, t;
  }
  function wx(t, e, n) {
    var i = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (zt) {
        if (i.mode === "hidden")
          return t = Ko(e, i), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, nu(null, t);
        if (hs(e), (t = Qt) ? (t = Tm(
          t,
          nn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: dl !== null ? { id: Tn, overflow: Cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Lh(t), n.return = e, e.child = n, se = e, Qt = null)) : t = null, t === null) throw gl(e);
        return e.lanes = 536870912, null;
      }
      return Ko(e, i);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var h = c.dehydrated;
      if (hs(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = tg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (ie || Wl(t, e, n, !1), u = (n & t.childLanes) !== 0, ie || u) {
        if (Sl.current === null) {
          if (i = Gt, i !== null && (h = to(i, n), h !== 0 && h !== c.retryLane))
            throw c.retryLane = h, Jl(t, h), Ue(i, t, h), Hs;
          dc();
        }
        e = tg(
          t,
          e,
          n
        );
      } else
        t = c.treeContext, Qt = an(h.nextSibling), se = e, zt = !0, hl = null, nn = !1, t !== null && jh(e, t), e = Ko(e, i), e.flags |= 134221824;
      return e;
    }
    return t = Kn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function $i(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Bs(t, e, n, i, u) {
    return Pl(e), n = ys(
      t,
      e,
      n,
      i,
      void 0,
      u
    ), i = vs(), t !== null && !ie ? (ps(t, e, u), Wn(t, e, u)) : (zt && i && wo(e), e.flags |= 1, ce(t, e, n, u), e.child);
  }
  function eg(t, e, n, i, u, c) {
    return Pl(e), e.updateQueue = null, n = i0(
      e,
      i,
      n,
      u
    ), l0(t), i = vs(), t !== null && !ie ? (ps(t, e, c), Wn(t, e, c)) : (zt && i && wo(e), e.flags |= 1, ce(t, e, n, c), e.child);
  }
  function ng(t, e, n, i, u) {
    if (Pl(e), e.stateNode === null) {
      var c = Li, h = n.contextType;
      typeof h == "object" && h !== null && (c = he(h)), c = new n(i, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Ds, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = i, c.state = e.memoizedState, c.refs = {}, os(e), h = n.contextType, c.context = typeof h == "object" && h !== null ? he(h) : Li, c.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Os(
        e,
        n,
        h,
        i
      ), c.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (h = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), h !== c.state && Ds.enqueueReplaceState(c, c.state, null), Fa(e, i, c, u), ka(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      c = e.stateNode;
      var S = e.memoizedProps, M = ui(n, S);
      c.props = M;
      var j = c.context, J = n.contextType;
      h = Li, typeof J == "object" && J !== null && (h = he(J));
      var nt = n.getDerivedStateFromProps;
      J = typeof nt == "function" || typeof c.getSnapshotBeforeUpdate == "function", S = e.pendingProps !== S, J || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (S || j !== h) && X0(
        e,
        c,
        i,
        h
      ), vl = !1;
      var L = e.memoizedState;
      c.state = L, Fa(e, i, c, u), ka(), j = e.memoizedState, S || L !== j || vl ? (typeof nt == "function" && (Os(
        e,
        n,
        nt,
        i
      ), j = e.memoizedState), (M = vl || q0(
        e,
        n,
        M,
        i,
        L,
        j,
        h
      )) ? (J || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = j), c.props = i, c.state = j, c.context = h, i = M) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      c = e.stateNode, cs(t, e), h = e.memoizedProps, J = ui(n, h), c.props = J, nt = e.pendingProps, L = c.context, j = n.contextType, M = Li, typeof j == "object" && j !== null && (M = he(j)), S = n.getDerivedStateFromProps, (j = typeof S == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== nt || L !== M) && X0(
        e,
        c,
        i,
        M
      ), vl = !1, L = e.memoizedState, c.state = L, Fa(e, i, c, u), ka();
      var K = e.memoizedState;
      h !== nt || L !== K || vl || t !== null && t.dependencies !== null && Co(t.dependencies) ? (typeof S == "function" && (Os(
        e,
        n,
        S,
        i
      ), K = e.memoizedState), (J = vl || q0(
        e,
        n,
        J,
        i,
        L,
        K,
        M
      ) || t !== null && t.dependencies !== null && Co(t.dependencies)) ? (j || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, K, M), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        i,
        K,
        M
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = K), c.props = i, c.state = K, c.context = M, i = J) : (typeof c.componentDidUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return c = i, $i(t, e), i = (e.flags & 128) !== 0, c || i ? (c = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && i ? (e.child = ii(
      e,
      t.child,
      null,
      u
    ), e.child = ii(
      e,
      null,
      n,
      u
    )) : ce(t, e, n, u), e.memoizedState = c.state, t = e.child) : t = Wn(
      t,
      e,
      u
    ), t;
  }
  function lg(t, e, n, i) {
    return kl(), e.flags |= 256, ce(t, e, n, i), e.child;
  }
  var Us = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ls(t) {
    return { baseLanes: t, cachePool: Kh() };
  }
  function Vs(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ge), t;
  }
  function ig(t, e, n) {
    var i = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, h;
    if ((h = c) || (h = t !== null && t.memoizedState === null ? !1 : (me.current & 2) !== 0), h && (u = !0, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (zt) {
        if (u ? bl(e) : El(), (t = Qt) ? (t = Tm(
          t,
          nn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: dl !== null ? { id: Tn, overflow: Cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Lh(t), n.return = e, e.child = n, se = e, Qt = null)) : t = null, t === null) throw gl(e);
        return Vf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return c = i.children, i = i.fallback, u ? (El(), u = e.mode, c = $o(
        { mode: "hidden", children: c },
        u
      ), i = Il(
        i,
        u,
        n,
        null
      ), c.return = e, i.return = e, c.sibling = i, e.child = c, i = e.child, i.memoizedState = Ls(n), i.childLanes = Vs(
        t,
        h,
        n
      ), e.memoizedState = Us, nu(null, i)) : (bl(e), Ys(e, c));
    }
    var S = t.memoizedState;
    if (S !== null) {
      var M = S.dehydrated;
      if (M !== null)
        return Nx(
          t,
          e,
          c,
          h,
          i,
          M,
          S,
          n
        );
    }
    return u ? (El(), u = i.fallback, c = e.mode, S = t.child, M = S.sibling, i = Kn(S, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = S.subtreeFlags & 1206910976, M !== null ? u = Kn(M, u) : (u = Il(
      u,
      c,
      n,
      null
    ), u.flags |= 2), u.return = e, i.return = e, i.sibling = u, e.child = i, nu(null, i), i = e.child, u = t.child.memoizedState, u === null ? u = Ls(n) : (c = u.cachePool, c !== null ? (S = ne._currentValue, c = c.parent !== S ? { parent: S, pool: S } : c) : c = Kh(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: c
    }), i.memoizedState = u, i.childLanes = Vs(
      t,
      h,
      n
    ), e.memoizedState = Us, nu(t.child, i)) : (bl(e), n = t.child, t = n.sibling, n = Kn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Ys(t, e) {
    return e = $o(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function $o(t, e) {
    return t = De(22, t, null, e), t.lanes = 0, t;
  }
  function Jo(t, e, n) {
    return ii(e, t.child, null, n), t = Ys(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Nx(t, e, n, i, u, c, h, S) {
    if (n)
      return e.flags & 256 ? (bl(e), e.flags &= -257, Jo(
        t,
        e,
        S
      )) : e.memoizedState !== null ? (El(), e.child = t.child, e.flags |= 128, null) : (El(), c = u.fallback, h = e.mode, u = $o(
        { mode: "visible", children: u.children },
        h
      ), c = Il(
        c,
        h,
        S,
        null
      ), c.flags |= 2, u.return = e, c.return = e, u.sibling = c, e.child = u, ii(e, t.child, null, S), u = e.child, u.memoizedState = Ls(S), u.childLanes = Vs(
        t,
        i,
        S
      ), e.memoizedState = Us, nu(null, u));
    if (bl(e), Vf(c)) {
      if (i = c.nextSibling && c.nextSibling.dataset, i) var M = i.dgst;
      return i = M, i !== "" && (u = Error(r(419)), u.stack = "", u.digest = i, Ga({ value: u, source: null, stack: null })), Jo(
        t,
        e,
        S
      );
    }
    if (ie || Wl(t, e, S, !1), i = (S & t.childLanes) !== 0, ie || i) {
      if (Sl.current !== null)
        return Jo(
          t,
          e,
          S
        );
      if (i = Gt, i !== null && (u = to(
        i,
        S
      ), u !== 0 && u !== h.retryLane))
        throw h.retryLane = u, Jl(t, u), Ue(i, t, u), Hs;
      return Lf(c) || dc(), Jo(
        t,
        e,
        S
      );
    }
    return Lf(c) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Qt = an(c.nextSibling), se = e, zt = !0, hl = null, nn = !1, t !== null && jh(e, t), e = Ys(
      e,
      u.children
    ), e.flags |= 134221824, e);
  }
  function ag(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), To(t.return, e, n);
  }
  function ug(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Bo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Io(t, e, n, i, u, c) {
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
  function js(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function qs(t, e, n) {
    var i = e.pendingProps, u = i.revealOrder, c = i.tail;
    i = i.children;
    var h = me.current;
    if (e.flags & 128)
      return Wa(e, h), null;
    var S = (h & 2) !== 0;
    if (S ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, Wa(e, h), u === "backwards" && t !== null ? (js(t), ce(t, e, i, n), js(t)) : ce(t, e, i, n), i = zt ? Za : 0, !S && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && ag(t, n, e);
        else if (t.tag === 19)
          ag(t, n, e);
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
        n = ug(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null, js(e)), Io(
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
          if (t = u.alternate, t !== null && Bo(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        Io(
          e,
          !0,
          n,
          null,
          c,
          i
        );
        break;
      case "together":
        Io(
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
        n = ug(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), Io(
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
  function og(t, e, n) {
    var i = e.pendingProps;
    return ml(e, e.type, i.value), ce(t, e, i.children, n), e.child;
  }
  function Wn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Tl |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Wl(
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
      for (t = e.child, n = Kn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Kn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Xs(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Co(t)));
  }
  function Tx(t, e, n) {
    switch (e.tag) {
      case 3:
        Ie(e, e.stateNode.containerInfo), ml(e, ne, t.memoizedState.cache), kl();
        break;
      case 27:
      case 5:
        Ee(e);
        break;
      case 4:
        Ie(e, e.stateNode.containerInfo);
        break;
      case 10:
        ml(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, hs(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) {
          if (i.dehydrated !== null)
            return bl(e), e.flags |= 128, null;
          i = Wl(
            t,
            e,
            n,
            !1
          );
          var u = e.child.childLanes;
          return i || (n & u) !== 0 ? ig(t, e, n) : (bl(e), t = Wn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        bl(e);
        break;
      case 19:
        if (e.flags & 128)
          return qs(
            t,
            e,
            n
          );
        if (u = (t.flags & 128) !== 0, i = (n & e.childLanes) !== 0, i || (Wl(
          t,
          e,
          n,
          !1
        ), i = (n & e.childLanes) !== 0), u) {
          if (i)
            return qs(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Wa(e, me.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, W0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        ml(e, ne, t.memoizedState.cache);
    }
    return Wn(t, e, n);
  }
  function cg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ie = !0;
      else {
        if (!Xs(t, n) && (e.flags & 128) === 0)
          return ie = !1, Tx(
            t,
            e,
            n
          );
        ie = (t.flags & 131072) !== 0;
      }
    else
      ie = !1, zt && (e.flags & 1048576) !== 0 && Yh(e, Za, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = ni(e.elementType), e.type = t, typeof t == "function")
            Ir(t) ? (i = ui(t, i), e.tag = 1, e = ng(
              null,
              e,
              t,
              i,
              n
            )) : (e.tag = 0, e = Bs(
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
                e.tag = 11, e = I0(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (u === $) {
                e.tag = 14, e = k0(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (u === V) {
                e.tag = 10, e.type = t, e = og(
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
        return Bs(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return i = e.type, u = ui(
          i,
          e.pendingProps
        ), ng(
          t,
          e,
          i,
          u,
          n
        );
      case 3:
        t: {
          if (Ie(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          i = e.pendingProps;
          var c = e.memoizedState;
          u = c.element, cs(t, e), Fa(e, i, null, n);
          var h = e.memoizedState;
          if (i = h.cache, ml(e, ne, i), i !== c.cache && ns(
            e,
            [ne],
            n,
            !0
          ), ka(), i = h.element, c.isDehydrated)
            if (c = {
              element: i,
              isDehydrated: !1,
              cache: h.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = lg(
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
              ), Ga(u), e = lg(
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
              for (Qt = an(t.firstChild), se = e, zt = !0, hl = null, nn = !0, n = Wh(
                e,
                null,
                i,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (kl(), i === u) {
              e = Wn(
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
        return $i(t, e), t === null ? (n = Rm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : zt || (e.stateNode = dm(
          e.type,
          e.pendingProps,
          re.current,
          e
        )) : e.memoizedState = Rm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ee(e), t === null && zt && (i = e.stateNode = Mm(
          e.type,
          e.pendingProps,
          re.current
        ), se = e, nn = !0, u = Qt, Al(e.type) ? (Yf = u, Qt = an(i.firstChild)) : Qt = u), ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), $i(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && zt && ((u = i = Qt) && (i = SS(
          i,
          e.type,
          e.pendingProps,
          nn
        ), i !== null ? (e.stateNode = i, se = e, Qt = an(i.firstChild), nn = !1, u = !0) : u = !1), u || gl(e)), Ee(e), u = e.type, c = e.pendingProps, h = t !== null ? t.memoizedProps : null, i = c.children, Af(u, c) ? i = null : h !== null && Af(u, h) && (e.flags |= 32), e.memoizedState !== null && (u = ys(
          t,
          e,
          mx,
          null,
          null,
          n
        ), fa._currentValue = u), $i(t, e), ce(t, e, i, n), e.child;
      case 6:
        return t === null && zt && ((t = n = Qt) && (n = bS(
          n,
          e.pendingProps,
          nn
        ), n !== null ? (e.stateNode = n, se = e, Qt = null, t = !0) : t = !1), t || gl(e)), null;
      case 13:
        return ig(t, e, n);
      case 4:
        return Ie(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = ii(
          e,
          null,
          i,
          n
        ) : ce(t, e, i, n), e.child;
      case 11:
        return I0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return i = e.pendingProps, $i(t, e), ce(t, e, i, n), e.child;
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
        return og(t, e, n);
      case 9:
        return u = e.type._context, i = e.pendingProps.children, Pl(e), u = he(u), i = i(u), e.flags |= 1, ce(t, e, i, n), e.child;
      case 14:
        return k0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return F0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return qs(t, e, n);
      case 31:
        return wx(t, e, n);
      case 22:
        return W0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Pl(e), i = he(ne), t === null ? (u = as(), u === null && (u = Gt, c = ls(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= n), u = c), e.memoizedState = { parent: i, cache: u }, os(e), ml(e, ne, u)) : ((t.lanes & n) !== 0 && (cs(t, e), Fa(e, null, null, n), ka()), u = t.memoizedState, c = e.memoizedState, u.parent !== i ? (u = { parent: i, cache: i }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), ml(e, ne, i)) : (i = c.cache, ml(e, ne, i), i !== u.cache && ns(
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
        }), i = e.pendingProps, i.name != null && i.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : zt && wo(e), t !== null && t.memoizedProps.name !== i.name ? e.flags |= 4194816 : $i(t, e), ce(t, e, i.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Pn(t) {
    t.flags |= 4;
  }
  function Zs(t, e, n, i, u) {
    var c;
    if ((c = (t.mode & 32) !== 0) && (c = n === null ? Lm(e, i) : Lm(e, i) && (i.src !== n.src || i.srcSet !== n.srcSet)), c) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Zg()) t.flags |= 8192;
        else
          throw li = Oo, us;
    } else t.flags &= -16777217;
  }
  function rg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Vm(e))
      if (Zg()) t.flags |= 8192;
      else
        throw li = Oo, us;
  }
  function ko(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ma() : 536870912, t.lanes |= e, Wi |= e);
  }
  function lu(t, e) {
    if (!zt)
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
  function Cx(t, e, n) {
    var i = e.pendingProps;
    switch (Wr(e), e.tag) {
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
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), In(ne), Ae(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (ji(e) ? Pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ts())), Kt(e), null;
      case 26:
        var u = e.type, c = e.memoizedState;
        return t === null ? (Pn(e), c !== null ? (Kt(e), rg(e, c)) : (Kt(e), Zs(
          e,
          u,
          null,
          i,
          n
        ))) : c ? c !== t.memoizedState ? (Pn(e), Kt(e), rg(e, c)) : (Kt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && Pn(e), Kt(e), Zs(
          e,
          u,
          t,
          i,
          n
        )), null;
      case 27:
        if (Oe(e), n = re.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Pn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), e.subtreeFlags &= -33554433, null;
          }
          t = Pt.current, ji(e) ? qh(e) : (t = Mm(u, i, n), e.stateNode = t, Pn(e));
        }
        return Kt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Oe(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Pn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Kt(e), e.subtreeFlags &= -33554433, null;
          }
          if (c = Pt.current, ji(e))
            qh(e);
          else {
            var h = gu(
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
            t: switch (ve(c, u, i), u) {
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
            i && Pn(e);
          }
        }
        return Kt(e), e.subtreeFlags &= -33554433, Zs(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && Pn(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = re.current, ji(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, u = se, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  i = u.memoizedProps;
              }
            t[oe] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || cm(t.nodeValue, n)), t || gl(e, !0);
          } else
            t = gu(t).createTextNode(
              i
            ), t[oe] = e, e.stateNode = t;
        }
        return Kt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = ji(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[oe] = e;
            } else
              kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), t = !1;
          } else
            n = ts(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Kt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ji(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[oe] = e;
            } else
              kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Kt(e), u = !1;
          } else
            u = ts(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (qe(e), e) : (qe(e), null);
        }
        return qe(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, u = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (u = i.alternate.memoizedState.cachePool.pool), c = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool), c !== u && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ko(e, e.updateQueue), Kt(e), null);
      case 4:
        return Ae(), t === null && Nf(e.stateNode.containerInfo), e.flags |= 67108864, Kt(e), null;
      case 10:
        return In(e.type), Kt(e), null;
      case 19:
        if (gs(e), i = e.memoizedState, i === null) return Kt(e), null;
        if (u = (e.flags & 128) !== 0, c = i.rendering, c === null)
          if (u) lu(i, !1);
          else {
            if (Wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Bo(t), c !== null) {
                  for (e.flags |= 128, lu(i, !1), t = c.updateQueue, e.updateQueue = t, ko(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Uh(n, t), n = n.sibling;
                  return Wa(
                    e,
                    me.current & 1 | 2
                  ), zt && $n(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && _e() > cc && (e.flags |= 128, u = !0, lu(i, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Bo(c), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, ko(e, t), lu(i, !0), i.tail === null && i.tailMode !== "collapsed" && i.tailMode !== "visible" && !c.alternate && !zt)
                return Kt(e), null;
            } else
              2 * _e() - i.renderingStartTime > cc && n !== 536870912 && (e.flags |= 128, u = !0, lu(i, !1), e.lanes = 4194304);
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
          return i.rendering = t, i.tail = t.sibling, i.renderingStartTime = _e(), t.sibling = null, c = me.current, c = u ? c & 1 | 2 : c & 1, i.tailMode === "visible" || i.tailMode === "collapsed" || !n || zt ? Wa(e, c) : (n = c, Ot(ge, e), Ot(me, n), be === null && (be = e)), zt && $n(e, i.treeForkCount), t;
        }
        return Kt(e), null;
      case 22:
      case 23:
        return qe(e), ds(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Kt(e), n = e.updateQueue, n !== null && ko(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && Ht(ei), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), In(ne), Kt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Kt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function zx(t, e) {
    switch (Wr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return In(ne), Ae(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Oe(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (qe(e), e.alternate === null)
            throw Error(r(340));
          kl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (qe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          kl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return gs(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Ae(), null;
      case 10:
        return In(e.type), null;
      case 22:
      case 23:
        return qe(e), ds(), t !== null && Ht(ei), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return In(ne), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sg(t, e) {
    switch (Wr(e), e.tag) {
      case 3:
        In(ne), Ae();
        break;
      case 26:
      case 27:
      case 5:
        Oe(e);
        break;
      case 4:
        Ae();
        break;
      case 31:
        e.memoizedState !== null && qe(e);
        break;
      case 13:
        qe(e);
        break;
      case 19:
        gs(e);
        break;
      case 10:
        In(e.type);
        break;
      case 22:
      case 23:
        qe(e), ds(), t !== null && Ht(ei);
        break;
      case 24:
        In(ne);
    }
  }
  function iu(t, e) {
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
    } catch (S) {
      qt(e, e.return, S);
    }
  }
  function _l(t, e, n) {
    try {
      var i = e.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        i = c;
        do {
          if ((i.tag & t) === t) {
            var h = i.inst, S = h.destroy;
            if (S !== void 0) {
              h.destroy = void 0, u = e;
              var M = n, j = S;
              try {
                j();
              } catch (J) {
                qt(
                  u,
                  M,
                  J
                );
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (J) {
      qt(e, e.return, J);
    }
  }
  function fg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        t0(e, n);
      } catch (i) {
        qt(t, t.return, i);
      }
    }
  }
  function dg(t, e, n) {
    n.props = ui(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      qt(t, e, i);
    }
  }
  function zn(t, e) {
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
            var u = t.stateNode, c = Gn(t.memoizedProps, u);
            (u.ref === null || u.ref.name !== c) && (u.ref = xm(c)), i = u.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ke(t);
              m(
                t.child,
                !1,
                pS,
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
    } catch (S) {
      qt(t, e, S);
    }
  }
  function ye(t, e) {
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
  function Fo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Nm(
          t.stateNode,
          e[n]
        );
  }
  function hg(t) {
    for (var e = t.return; e !== null && (Qs(e) && Nm(t.stateNode, e.stateNode), !Gs(e)); )
      e = e.return;
  }
  function au(t) {
    for (var e = t.return; e !== null && (Qs(e) && xS(t.stateNode, e.stateNode), !Gs(e)); )
      e = e.return;
  }
  function Gs(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Qs(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Ks(t) {
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
  function $s(t, e, n) {
    try {
      var i = t.stateNode;
      tS(i, t.type, n, e), i[Se] = e;
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  function gg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Al(t.type) || t.tag === 4;
  }
  function Js(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || gg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Al(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Is(t, e, n, i) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(u), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Nn)), Fo(t, i), Lt = !0;
    else if (u !== 4 && (u === 27 && (Fo(t, i), i = null, Al(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Is(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        Is(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function Wo(t, e, n, i) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? n.insertBefore(u, e) : n.appendChild(u), Fo(t, i), Lt = !0;
    else if (u !== 4 && (u === 27 && (Fo(t, i), i = null, Al(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (Wo(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        Wo(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function mg(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ve(e, i, n), e[oe] = t, e[Se] = n;
    } catch (c) {
      qt(t, t.return, c);
    }
  }
  var Po = !1, Xe = null;
  function yg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Po = !0);
  }
  var Mn = null;
  function vg() {
    var t = Mn;
    return Mn = null, t;
  }
  var Re = 0;
  function Ji(t, e, n, i, u) {
    return Re = 0, pg(
      t.child,
      e,
      n,
      i,
      u
    );
  }
  function pg(t, e, n, i, u) {
    for (var c = !1; t !== null; ) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (i !== null) {
          var S = Rf(h);
          i.push(S), S.view && (c = !0);
        } else
          c || Rf(h).view && (c = !0);
        Po = !0, vm(
          h,
          Re === 0 ? e : e + "_" + Re,
          n
        ), Re++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && u || pg(
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
      t.tag === 5 ? pm(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || An(
        t.child,
        e
      )), t = t.sibling;
  }
  function tc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (tc(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = Qn(e.default, e.share), e !== "none" && (Ji(
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
  function ks(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, i = t.memoizedProps, u = Gn(i, n), c = Qn(
        i.default,
        n.paired ? i.share : i.enter
      );
      c !== "none" ? Ji(t, u, c, null, !1) ? (tc(t), n.paired || e || na(t, i.onEnter)) : An(t.child, !1) : tc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        ks(t, e), t = t.sibling;
    else tc(t);
  }
  function Fs(t) {
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
                  var c = Qn(
                    n.default,
                    n.share
                  );
                  if (c !== "none" && (Ji(
                    t,
                    i,
                    c,
                    null,
                    !1
                  ) ? (c = t.stateNode, u.paired = c, c.paired = u, na(t, n.onShare)) : An(t.child, !1)), e.delete(i), e.size === 0) break;
                }
              }
            }
            Fs(t);
          }
          t = t.sibling;
        }
    }
  }
  function Ws(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Gn(e, t.stateNode), i = Xe !== null ? Xe.get(n) : void 0, u = Qn(
        e.default,
        i !== void 0 ? e.share : e.exit
      );
      u !== "none" && (Ji(t, n, u, null, !1) ? i !== void 0 ? (u = t.stateNode, i.paired = u, u.paired = i, Xe.delete(n), na(t, e.onShare)) : na(t, e.onExit) : An(t.child, !1)), Xe !== null && Fs(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ws(t), t = t.sibling;
    else
      Xe !== null && Fs(t);
  }
  function xg(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Gn(e, t.stateNode);
        e = Qn(e.default, e.update), t.flags &= -5, e !== "none" && Ji(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && xg(t);
      t = t.sibling;
    }
  }
  function Ps(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, An(t.child, !1));
          }
          Ps(t);
        }
        t = t.sibling;
      }
  }
  function ec(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, An(t.child, !1), Ps(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        ec(t), t = t.sibling;
    else Ps(t);
  }
  function Sg(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? An(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Sg(t), t = t.sibling;
  }
  function tf(t, e, n, i, u, c, h) {
    for (var S = !1; e !== null; ) {
      if (e.tag === 5) {
        var M = e.stateNode;
        if (c !== null && Re < c.length) {
          var j = c[Re], J = Rf(M);
          (j.view || J.view) && (S = !0);
          var nt;
          if (nt = (t.flags & 4) === 0)
            if (J.clip) nt = !0;
            else {
              nt = j.rect;
              var L = J.rect;
              nt = nt.y !== L.y || nt.x !== L.x || nt.height !== L.height || nt.width !== L.width;
            }
          nt && (t.flags |= 4), J.abs ? J = !j.abs : (j = j.rect, J = J.rect, J = j.height !== J.height || j.width !== J.width), J && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && vm(
          M,
          Re === 0 ? n : n + "_" + Re,
          u
        ), S && (t.flags & 4) !== 0 || (Mn === null && (Mn = []), Mn.push(
          M,
          Re === 0 ? i : i + "_" + Re,
          e.memoizedProps
        )), Re++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : tf(
        t,
        e.child,
        n,
        i,
        u,
        c,
        h
      ) && (S = !0));
      e = e.sibling;
    }
    return S;
  }
  function bg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, i = t.stateNode, u = Gn(n, i), c = Qn(n.default, n.update), h;
        h = t.memoizedState, t.memoizedState = null, i = t;
        var S = t.child;
        Re = 0, u = tf(
          i,
          S,
          u,
          u,
          c,
          h,
          !1
        ), (t.flags & 4) !== 0 && u && na(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && bg(t);
      t = t.sibling;
    }
  }
  var fe = !1, Yt = !1, On = !1, ef = !1, Eg = typeof WeakSet == "function" ? WeakSet : Set, de = null, Dn = !1, uu = !1, nc = !1, nf = !1;
  function Mx(t, e, n) {
    if (t = t.containerInfo, zf = da, t = Th(t), Xr(t)) {
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
            var S = 0, M = -1, j = -1, J = 0, nt = 0, L = t, K = null;
            e: for (; ; ) {
              for (var ht; L !== i || c !== 0 && L.nodeType !== 3 || (M = S + c), L !== h || u !== 0 && L.nodeType !== 3 || (j = S + u), L.nodeType === 3 && (S += L.nodeValue.length), (ht = L.firstChild) !== null; )
                K = L, L = ht;
              for (; ; ) {
                if (L === t) break e;
                if (K === i && ++J === c && (M = S), K === h && ++nt === u && (j = S), (ht = L.nextSibling) !== null) break;
                L = K, K = L.parentNode;
              }
              L = ht;
            }
            i = M === -1 || j === -1 ? null : { start: M, end: j };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Mf = { focusedElem: t, selectionRange: i }, da = !1, n = (n & 335544064) === n, de = e, e = n ? 9270 : 1024; de !== null; ) {
      if (t = de, n && (i = t.deletions, i !== null))
        for (c = 0; c < i.length; c++)
          n && Ws(i[c]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && yg(t), lc(n);
      else {
        if (t.tag === 22) {
          if (i = t.alternate, t.memoizedState !== null) {
            i !== null && i.memoizedState === null && n && Ws(i), lc(n);
            continue;
          } else if (i !== null && i.memoizedState !== null) {
            n && yg(t), lc(n);
            continue;
          }
        }
        i = t.child, (t.subtreeFlags & e) !== 0 && i !== null ? (i.return = t, de = i) : (n && xg(t), lc(n));
      }
    }
    Xe = null;
  }
  function lc(t) {
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
              var h = ui(
                e.type,
                u
              );
              n = c.getSnapshotBeforeUpdate(
                h,
                i
              ), c.__reactInternalSnapshotBeforeUpdate = n;
            } catch (S) {
              qt(e, e.return, S);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (i = e.stateNode.containerInfo, n = i.nodeType, n === 9)
              Uf(i);
            else if (n === 1)
              switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Uf(i);
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
          n && i !== null && (n = Gn(
            i.memoizedProps,
            i.stateNode
          ), u = e.memoizedProps, u = Qn(u.default, u.update), u !== "none" && Ji(
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
  function _g(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(t, n), i & 4 && iu(5, n);
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
            var u = ui(
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
        i & 64 && fg(n), i & 512 && zn(n, n.return);
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
            t0(t, e);
          } catch (h) {
            qt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && i & 4 && mg(n);
      case 26:
      case 5:
        Rn(t, n), e === null && i & 4 && Ks(n), i & 512 && zn(n, n.return);
        break;
      case 12:
        Rn(t, n);
        break;
      case 31:
        Rn(t, n), i & 4 && Cg(t, n);
        break;
      case 13:
        Rn(t, n), i & 4 && zg(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = qx.bind(
          null,
          n
        ), ES(t, n))));
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
        Rn(t, n), i & 512 && zn(n, n.return);
        break;
      case 7:
        i & 512 && zn(n, n.return);
      default:
        Rn(t, n);
    }
  }
  function lf(t, e) {
    for (t = t.child; t !== null; )
      wg(t, e), t = t.sibling;
  }
  function wg(t, e) {
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
        } catch (M) {
          qt(t, t.return, M);
        }
        af(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Lt = !0;
        } catch (M) {
          qt(t, t.return, M);
        }
        break;
      case 18:
        try {
          var S = t.stateNode;
          e ? ym(S, !0) : ym(t.stateNode, !1);
        } catch (M) {
          qt(t, t.return, M);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && lf(t, e);
        break;
      default:
        lf(t, e);
    }
  }
  function af(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, i = e;
          switch (n.tag) {
            case 4:
              wg(n, i);
              break t;
            case 22:
              n.memoizedState === null && af(n, i);
              break t;
            default:
              af(n, i);
          }
        }
        t = t.sibling;
      }
  }
  function Ng(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ng(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && zi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Jt = null, He = !1;
  function sn(t, e, n) {
    for (n = n.child; n !== null; )
      Tg(t, e, n), n = n.sibling;
  }
  function Tg(t, e, n) {
    if (we && typeof we.onCommitFiberUnmount == "function")
      try {
        we.onCommitFiberUnmount(ql, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Yt || ye(n, e), sn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Yt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Yt || ye(n, e), au(n);
        var i = Jt, u = He;
        Al(n.type) && (Jt = n.stateNode, He = !1), sn(
          t,
          e,
          n
        ), Am(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Jt = i, He = u;
        break;
      case 5:
        Yt || ye(n, e), au(n);
      case 6:
        if (n.tag === 6 && au(n), i = Jt, u = He, Jt = null, sn(
          t,
          e,
          n
        ), Jt = i, He = u, Jt !== null)
          if (He)
            try {
              (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(n.stateNode), Lt = !0;
            } catch (c) {
              qt(
                n,
                e,
                c
              );
            }
          else
            try {
              Jt.removeChild(n.stateNode), Lt = !0;
            } catch (c) {
              qt(
                n,
                e,
                c
              );
            }
        break;
      case 18:
        Jt !== null && (He ? (t = Jt, mm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), ha(t)) : mm(Jt, n.stateNode));
        break;
      case 4:
        i = Jt, u = He, Jt = n.stateNode.containerInfo, He = !0, sn(
          t,
          e,
          n
        ), Jt = i, He = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _l(2, n, e), Yt || _l(4, n, e), sn(
          t,
          e,
          n
        );
        break;
      case 1:
        Yt || (ye(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && dg(
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
        ye(n, e), sn(
          t,
          e,
          n
        );
        break;
      case 7:
        Yt || ye(n, e), sn(
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
  function Cg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ha(t);
      } catch (n) {
        qt(e, e.return, n);
      }
    }
  }
  function zg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ha(t);
      } catch (n) {
        qt(e, e.return, n);
      }
  }
  function Ax(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Eg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Eg()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ic(t, e) {
    var n = Ax(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var u = Xx.bind(null, t, i);
        i.then(u, u);
      }
    });
  }
  function ze(t, e, n) {
    var i = e.deletions;
    if (i !== null)
      for (var u = 0; u < i.length; u++) {
        var c = i[u], h = t, S = e, M = S;
        t: for (; M !== null; ) {
          switch (M.tag) {
            case 27:
              if (Al(M.type)) {
                Jt = M.stateNode, He = !1;
                break t;
              }
              break;
            case 5:
              Jt = M.stateNode, He = !1;
              break t;
            case 3:
            case 4:
              Jt = M.stateNode.containerInfo, He = !0;
              break t;
          }
          M = M.return;
        }
        if (Jt === null) throw Error(r(160));
        Tg(h, S, c), Jt = null, He = !1, h = c.alternate, h !== null && (h.return = null), c.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Mg(e, t, n), e = e.sibling;
  }
  var fn = null;
  function Mg(t, e, n) {
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
        ze(e, t, n), Me(t), u & 4 && (_l(3, t, t.return), iu(3, t), _l(5, t, t.return));
        break;
      case 1:
        ze(e, t, n), Me(t), u & 512 && (Yt || i === null || ye(i, i.return)), u & 64 && fe && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (c = fn, ze(e, t, n), Me(t), u & 512 && (Yt || i === null || ye(i, i.return)), u & 4)
          if (u = i !== null ? i.memoizedState : null, n = t.memoizedState, i === null)
            if (n === null)
              if (t.stateNode === null)
                if (fe)
                  t.stateNode = dm(
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
                        i = u.getElementsByTagName("title")[0], (!i || i[Gl] || i[oe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = u.createElement(e), u.head.insertBefore(
                          i,
                          u.querySelector("head > title")
                        )), ve(i, e, n), i[oe] = t, ee(i), e = i;
                        break t;
                      case "link":
                        if (c = Um(
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
                        i = u.createElement(e), ve(i, e, n), u.head.appendChild(i);
                        break;
                      case "meta":
                        if (c = Um(
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
                        i = u.createElement(e), ve(i, e, n), u.head.appendChild(i);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    i[oe] = t, ee(i), e = i;
                  }
                  t.stateNode = e;
                }
              else
                fe || Zf(c, t.type, t.stateNode);
            else
              t.stateNode = Bm(
                c,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? (e = i.stateNode, e === null || Yt || e.parentNode.removeChild(e)) : u.count--, n === null ? fe || Zf(c, t.type, t.stateNode) : Bm(c, n, t.memoizedProps)) : n === null && t.stateNode !== null && $s(
              t,
              t.memoizedProps,
              i.memoizedProps
            );
        break;
      case 27:
        ze(e, t, n), Me(t), u & 512 && (Yt || i === null || ye(i, i.return)), i !== null && u & 4 && $s(
          t,
          t.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (c = On, On = !1, ze(e, t, n), On = c, Me(t), u & 512 && (Yt || i === null || ye(i, i.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Ai(e, ""), Lt = !0;
          } catch (J) {
            qt(t, t.return, J);
          }
        }
        u & 4 && t.stateNode != null && (e = t.memoizedProps, $s(
          t,
          e,
          i !== null ? i.memoizedProps : e
        )), u & 1024 && (ef = !0);
        break;
      case 6:
        if (ze(e, t, n), Me(t), u & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Lt = !0;
          } catch (J) {
            qt(t, t.return, J);
          }
        }
        break;
      case 3:
        if (Lt = !1, xc = null, c = fn, fn = mu(e.containerInfo), ze(e, t, n), fn = c, Me(t), u & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            ha(e.containerInfo);
          } catch (J) {
            qt(t, t.return, J);
          }
        ef && (ef = !1, Ag(t)), Lt = !1;
        break;
      case 4:
        u = On, On = fe, i = kd(), c = fn, fn = mu(
          t.stateNode.containerInfo
        ), ze(e, t, n), Me(t), fn = c, Lt && uu && (nc = !0), Lt = i, On = u;
        break;
      case 12:
        ze(e, t, n), Me(t);
        break;
      case 31:
        ze(e, t, n), Me(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ic(t, e)));
        break;
      case 13:
        ze(e, t, n), Me(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (oc = _e()), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ic(t, e)));
        break;
      case 22:
        c = t.memoizedState !== null, h = i !== null && i.memoizedState !== null;
        var S = fe, M = Yt, j = On;
        fe = S || c, On = j || c, Yt = M || h, ze(e, t, n), Yt = M, On = j, fe = S, Me(t), u & 8192 && (e = t.stateNode, e._visibility = c ? e._visibility & -2 : e._visibility | 1, !c || i === null || h || fe || Yt || (e = h || Yt, n = fe, i = Yt, fe = c || fe, Yt = e, wl(t, 2), fe = n, Yt = i), !c && On || lf(t, c)), u & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, ic(t, n))));
        break;
      case 19:
        ze(e, t, n), Me(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ic(t, e)));
        break;
      case 30:
        u & 512 && (Yt || i === null || ye(i, i.return)), u = kd(), c = uu, h = (n & 335544064) === n, S = t.memoizedProps, uu = h && Qn(
          S.default,
          S.update
        ) !== "none", ze(e, t, n), Me(t), h && i !== null && Lt && (t.flags |= 4), uu = c, Lt = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Yt || i === null || ye(i, i.return)), i && i.stateNode !== null && (i.stateNode._fragmentFiber = t);
      default:
        ze(e, t, n), Me(t);
    }
  }
  function Me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (gg(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        i = null;
        for (var u = t.return; u !== null; ) {
          if (Qs(u)) {
            var c = u.stateNode;
            i === null ? i = [c] : i.push(c);
          }
          if (Gs(u)) break;
          u = u.return;
        }
        var h = i;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var S = n.stateNode, M = Js(t);
            Wo(
              t,
              M,
              S,
              h
            );
            break;
          case 5:
            var j = n.stateNode;
            n.flags & 32 && (Ai(j, ""), n.flags &= -33);
            var J = Js(t);
            Wo(
              t,
              J,
              j,
              h
            );
            break;
          case 3:
          case 4:
            var nt = n.stateNode.containerInfo, L = Js(t);
            Is(
              t,
              L,
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
  function Ag(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Ag(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, da = !0, e.reset(), da = !1), t = t.sibling;
      }
  }
  function Ii(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Og(e, t), e = e.sibling;
    else bg(e);
  }
  function Og(t, e) {
    var n = t.alternate;
    if (n === null) ks(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (nf = Dn = !1, vg(), Ii(e, t), !Dn && !nc) {
            if (t = Mn, t !== null)
              for (var i = 0; i < t.length; i += 3) {
                n = t[i];
                var u = t[i + 1];
                pm(n, t[i + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), nf = !0;
          }
          Mn = null;
          break;
        case 5:
          Ii(e, t);
          break;
        case 4:
          i = Dn, Dn = !1, Ii(e, t), Dn && (nc = !0), Dn = i;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? ks(t, !1) : Ii(e, t));
          break;
        case 30:
          i = Dn, u = vg(), Dn = !1, Ii(e, t), Dn && (t.flags |= 4);
          var c = t.memoizedProps, h = t.stateNode;
          e = Gn(c, h), h = Gn(n.memoizedProps, h);
          var S = Qn(c.default, c.update);
          S === "none" ? e = !1 : (c = n.memoizedState, n.memoizedState = null, n = t.child, Re = 0, e = tf(
            t,
            n,
            e,
            h,
            S,
            c,
            !0
          ), Re !== (c === null ? 0 : c.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (na(
            t,
            t.memoizedProps.onUpdate
          ), Mn = u) : u !== null && (u.push.apply(u, Mn), Mn = u), Dn = (t.flags & 32) !== 0 ? !0 : i;
          break;
        default:
          Ii(e, t);
      }
  }
  function Rn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        _g(t, e.alternate, e), e = e.sibling;
  }
  function wl(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, i = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _l(4, n, n.return), wl(
            n,
            i
          );
          break;
        case 1:
          ye(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && dg(
            n,
            n.return,
            u
          ), wl(
            n,
            i
          );
          break;
        case 27:
          (i & 2) !== 0 && Am(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          ye(n, n.return), n.tag !== 5 && n.tag !== 27 || au(n), wl(
            n,
            i
          );
          break;
        case 6:
          au(n);
          break;
        case 26:
          ye(n, n.return), u = n.stateNode, n.memoizedState !== null || u === null || Yt || u.parentNode.removeChild(u), wl(
            n,
            i
          );
          break;
        case 22:
          n.memoizedState === null && wl(
            n,
            i
          );
          break;
        case 30:
          ye(n, n.return), wl(
            n,
            i
          );
          break;
        case 7:
          ye(n, n.return);
        default:
          wl(
            n,
            i
          );
      }
      t = t.sibling;
    }
  }
  function dn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var i = e.alternate, u = t, c = e, h = c.flags, S = (n & 1) !== 0;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          dn(
            u,
            c,
            n
          ), iu(4, c);
          break;
        case 1:
          if (dn(
            u,
            c,
            n
          ), i = c, u = i.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (J) {
              qt(i, i.return, J);
            }
          if (i = c, u = i.updateQueue, u !== null) {
            var M = i.stateNode;
            try {
              var j = u.shared.hiddenCallbacks;
              if (j !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < j.length; u++)
                  Ph(j[u], M);
            } catch (J) {
              qt(i, i.return, J);
            }
          }
          S && h & 64 && fg(c), zn(c, c.return);
          break;
        case 27:
          (n & 2) !== 0 && mg(c);
        case 5:
          c.tag !== 5 && c.tag !== 27 || hg(c), dn(
            u,
            c,
            n
          ), S && i === null && h & 4 && Ks(c), zn(c, c.return);
          break;
        case 6:
          hg(c);
          break;
        case 26:
          M = c.stateNode, c.memoizedState !== null || M === null || fe || Zf(
            mu(M.ownerDocument),
            c.type,
            M
          ), dn(
            u,
            c,
            n
          ), S && i === null && h & 4 && Ks(c), zn(c, c.return);
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
          ), S && h & 4 && Cg(u, c);
          break;
        case 13:
          dn(
            u,
            c,
            n
          ), S && h & 4 && zg(u, c);
          break;
        case 22:
          c.memoizedState === null && dn(
            u,
            c,
            n
          ), zn(c, c.return);
          break;
        case 30:
          dn(
            u,
            c,
            n
          ), zn(c, c.return);
          break;
        case 7:
          zn(c, c.return);
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
  function uf(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Qa(n));
  }
  function of(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Qa(t));
  }
  function ln(t, e, n, i) {
    var u = (n & 335544064) === n;
    if (e.subtreeFlags & (u ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Dg(
          t,
          e,
          n,
          i
        ), e = e.sibling;
    else u && Sg(e);
  }
  function Dg(t, e, n, i) {
    var u = (n & 335544064) === n;
    u && e.alternate === null && e.return !== null && e.return.alternate !== null && ec(e);
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
        ), c & 2048 && iu(9, e);
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
        ), u && nf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), c & 2048 && (c = null, e.alternate !== null && (c = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== c && (e.refCount++, c != null && Qa(c)));
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
            var h = e.memoizedProps, S = h.id, M = h.onPostCommit;
            typeof M == "function" && M(
              S,
              e.alternate === null ? "mount" : "update",
              c.passiveEffectDuration,
              -0
            );
          } catch (j) {
            qt(e, e.return, j);
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
        h = e.stateNode, S = e.alternate, e.memoizedState !== null ? (u && S !== null && S.memoizedState === null && ec(S), h._visibility & 2 ? ln(
          t,
          e,
          n,
          i
        ) : ou(
          t,
          e
        )) : (u && S !== null && S.memoizedState !== null && ec(e), h._visibility & 2 ? ln(
          t,
          e,
          n,
          i
        ) : (h._visibility |= 2, ki(
          t,
          e,
          n,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), c & 2048 && uf(S, e);
        break;
      case 24:
        ln(
          t,
          e,
          n,
          i
        ), c & 2048 && of(e.alternate, e);
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
  function ki(t, e, n, i, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t, h = e, S = n, M = i, j = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          ki(
            c,
            h,
            S,
            M,
            u
          ), iu(8, h);
          break;
        case 23:
          break;
        case 22:
          var J = h.stateNode;
          h.memoizedState !== null ? J._visibility & 2 ? ki(
            c,
            h,
            S,
            M,
            u
          ) : ou(
            c,
            h
          ) : (J._visibility |= 2, ki(
            c,
            h,
            S,
            M,
            u
          )), u && j & 2048 && uf(
            h.alternate,
            h
          );
          break;
        case 24:
          ki(
            c,
            h,
            S,
            M,
            u
          ), u && j & 2048 && of(h.alternate, h);
          break;
        default:
          ki(
            c,
            h,
            S,
            M,
            u
          );
      }
      e = e.sibling;
    }
  }
  function ou(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, i = e, u = i.flags;
        switch (i.tag) {
          case 22:
            ou(n, i), u & 2048 && uf(
              i.alternate,
              i
            );
            break;
          case 24:
            ou(n, i), u & 2048 && of(i.alternate, i);
            break;
          default:
            ou(n, i);
        }
        e = e.sibling;
      }
  }
  var oi = 8192;
  function ci(t, e, n) {
    if (t.subtreeFlags & oi)
      for (t = t.child; t !== null; )
        Rg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Rg(t, e, n) {
    switch (t.tag) {
      case 26:
        ci(
          t,
          e,
          n
        ), t.flags & oi && (t.memoizedState !== null ? US(
          n,
          fn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && jm(n, t)));
        break;
      case 5:
        ci(
          t,
          e,
          n
        ), t.flags & oi && (t = t.stateNode, (e & 335544128) === e && jm(n, t));
        break;
      case 3:
      case 4:
        var i = fn;
        fn = mu(t.stateNode.containerInfo), ci(
          t,
          e,
          n
        ), fn = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = oi, oi = 16777216, ci(
          t,
          e,
          n
        ), oi = i) : ci(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & oi) !== 0 && (i = t.memoizedProps.name, i != null && i !== "auto")) {
          var u = t.stateNode;
          u.paired = null, Xe === null && (Xe = /* @__PURE__ */ new Map()), Xe.set(i, u);
        }
        ci(
          t,
          e,
          n
        );
        break;
      default:
        ci(
          t,
          e,
          n
        );
    }
  }
  function Hg(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          de = i, Ug(
            i,
            t
          );
        }
      Hg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bg(t), t = t.sibling;
  }
  function Bg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cu(t), t.flags & 2048 && _l(9, t, t.return);
        break;
      case 3:
        cu(t);
        break;
      case 12:
        cu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ac(t)) : cu(t);
        break;
      default:
        cu(t);
    }
  }
  function ac(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          de = i, Ug(
            i,
            t
          );
        }
      Hg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, e, e.return), ac(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ac(e));
          break;
        default:
          ac(e);
      }
      t = t.sibling;
    }
  }
  function Ug(t, e) {
    for (; de !== null; ) {
      var n = de;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Qa(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, de = i;
      else
        t: for (n = t; de !== null; ) {
          i = de;
          var u = i.sibling, c = i.return;
          if (Ng(i), i === n) {
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
  var Ox = {
    getCacheForType: function(t) {
      var e = he(ne), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return he(ne).controller.signal;
    }
  }, Dx = typeof WeakMap == "function" ? WeakMap : Map, Vt = 0, Gt = null, Mt = null, Dt = 0, jt = 0, Ze = null, Nl = !1, Fi = !1, cf = !1, tl = 0, Wt = 0, Tl = 0, ri = 0, uc = 0, Ge = 0, Wi = 0, ru = null, Be = null, rf = !1, oc = 0, Lg = 0, cc = 1 / 0, rc = null, Cl = null, It = 0, hn = null, si = null, Hn = 0, sf = 0, ff = null, Vg = null, Pi = null, ta = null, ea = null, su = 0, sc = null;
  function Qe() {
    return (Vt & 2) !== 0 && Dt !== 0 ? Dt & -Dt : ct.T !== null ? bf() : eo();
  }
  function Yg() {
    if (Ge === 0)
      if ((Dt & 536870912) === 0 || zt) {
        var t = _i;
        _i <<= 1, (_i & 3932160) === 0 && (_i = 262144), Ge = t;
      } else Ge = 536870912;
    return t = ge.current, t !== null && (t.flags |= 32), Ge;
  }
  function na(t, e) {
    if (e != null) {
      var n = t.stateNode, i = n.ref;
      i === null && (i = n.ref = xm(
        Gn(t.memoizedProps, n)
      )), ta === null && (ta = []), ta.push(e.bind(null, i));
    }
  }
  function Ue(t, e, n) {
    (t === Gt && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null) && (la(t, 0), zl(
      t,
      Dt,
      Ge,
      !1
    )), Zl(t, n), ((Vt & 2) === 0 || t !== Gt) && (t === Gt && ((Vt & 2) === 0 && (ri |= n), Wt === 4 && zl(
      t,
      Dt,
      Ge,
      !1
    )), Bn(t));
  }
  function jg(t, e, n) {
    if ((Vt & 6) !== 0) throw Error(r(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Xl(t, e), u = i ? Bx(t, e) : hf(t, e, !0), c = i;
    do {
      if (u === 0) {
        Fi && !i && zl(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, c && !Rx(n)) {
          u = hf(t, e, !1), c = !1;
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
              var S = t;
              u = ru;
              var M = S.current.memoizedState.isDehydrated;
              if (M && (la(S, h).flags |= 256), h = hf(
                S,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (cf && !M) {
                  S.errorRecoveryDisabledLanes |= c, ri |= c, u = 4;
                  break t;
                }
                c = Be, Be = u, c !== null && (Be === null ? Be = c : Be.push.apply(
                  Be,
                  c
                ));
              }
              u = h;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          la(t, 0), zl(t, e, 0, !0);
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
              zl(
                i,
                e,
                Ge,
                !Nl
              );
              break t;
            case 2:
              Be = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (u = oc + 300 - _e(), 10 < u)) {
            if (zl(
              i,
              e,
              Ge,
              !Nl
            ), Ni(i, 0, !0) !== 0) break t;
            Hn = e, i.timeoutHandle = Df(
              qg.bind(
                null,
                i,
                n,
                Be,
                rc,
                rf,
                e,
                Ge,
                ri,
                Wi,
                Nl,
                c,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          qg(
            i,
            n,
            Be,
            rc,
            rf,
            e,
            Ge,
            ri,
            Wi,
            Nl,
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
  function qg(t, e, n, i, u, c, h, S, M, j, J, nt, L, K) {
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
    }, Xe = null, Rg(
      e,
      c,
      nt
    ), yt && (ht = nt, yt = t.containerInfo, yt = (yt.nodeType === 9 ? yt : yt.ownerDocument).__reactViewTransition, yt != null && (ht.count++, ht.waitingForViewTransition = !0, ht = pu.bind(ht), yt.finished.then(ht, ht))), ht = (c & 62914560) === c ? oc - _e() : (c & 4194048) === c ? Lg - _e() : 0, ht = LS(
      nt,
      ht
    ), ht !== null)) {
      Hn = c, t.cancelPendingCommit = ht(
        Ig.bind(
          null,
          t,
          e,
          c,
          n,
          i,
          u,
          h,
          S,
          M,
          j,
          J,
          nt,
          null,
          L,
          K
        )
      ), zl(t, c, h, !j);
      return;
    }
    Ig(
      t,
      e,
      c,
      n,
      i,
      u,
      h,
      S,
      M,
      j,
      J,
      nt
    );
  }
  function Rx(t) {
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
  function zl(t, e, n, i) {
    e = za(t, e), e &= ~uc, e &= ~ri, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var c = 31 - Ne(u), h = 1 << c;
      i[c] = -1, u &= ~h;
    }
    n !== 0 && Wu(t, n, e);
  }
  function fc() {
    return (Vt & 6) === 0 ? (fu(0), !1) : !0;
  }
  function df() {
    if (Mt !== null) {
      if (jt === 0)
        var t = Mt.return;
      else
        t = Mt, Jn = Fl = null, xs(t), Zi = null, Ja = 0, t = Mt;
      for (; t !== null; )
        sg(t.alternate, t), t = t.return;
      Mt = null;
    }
  }
  function la(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, lS(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Hn = 0, df(), Gt = t, Mt = n = Kn(t.current, null), Dt = e, jt = 0, Ze = null, Nl = !1, Fi = Xl(t, e), cf = !1, Wi = Ge = uc = ri = Tl = Wt = 0, Be = ru = null, rf = !1, tl = za(t, e), xo(), n;
  }
  function Xg(t, e) {
    Nt = null, ct.H = Go, e === Xi || e === Ao ? (e = Ih(), jt = 3) : e === us ? (e = Ih(), jt = 4) : jt = e === Hs ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ze = e, Mt === null && (Wt = 1, Qo(
      t,
      Pe(e, t.current)
    ));
  }
  function Zg() {
    var t = ge.current;
    return t === null ? !0 : (Dt & 4194048) === Dt ? be === null : (Dt & 62914560) === Dt || (Dt & 536870912) !== 0 ? t === be : !1;
  }
  function Gg() {
    var t = ct.H;
    return ct.H = Go, t === null ? Go : t;
  }
  function Qg() {
    var t = ct.A;
    return ct.A = Ox, t;
  }
  function dc() {
    Wt = 4, Nl || (Dt & 4194048) !== Dt && ge.current !== null || (Fi = !0), (Tl & 134217727) === 0 && (ri & 134217727) === 0 || Gt === null || zl(
      Gt,
      Dt,
      Ge,
      !1
    );
  }
  function hf(t, e, n) {
    var i = Vt;
    Vt |= 2;
    var u = Gg(), c = Qg();
    (Gt !== t || Dt !== e) && (rc = null, la(t, e)), e = !1;
    var h = Wt;
    t: do
      try {
        if (jt !== 0 && Mt !== null) {
          var S = Mt, M = Ze;
          switch (jt) {
            case 8:
              df(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var j = jt;
              if (jt = 0, Ze = null, ia(t, S, M, j), n && Fi) {
                h = 0;
                break t;
              }
              break;
            default:
              j = jt, jt = 0, Ze = null, ia(t, S, M, j);
          }
        }
        Hx(), h = Wt;
        break;
      } catch (J) {
        Xg(t, J);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Jn = Fl = null, Vt = i, ct.H = u, ct.A = c, Mt === null && (Gt = null, Dt = 0, xo()), h;
  }
  function Hx() {
    for (; Mt !== null; ) Kg(Mt);
  }
  function Bx(t, e) {
    var n = Vt;
    Vt |= 2;
    var i = Gg(), u = Qg();
    Gt !== t || Dt !== e ? (rc = null, cc = _e() + 500, la(t, e)) : Fi = Xl(
      t,
      e
    );
    t: do
      try {
        if (jt !== 0 && Mt !== null) {
          e = Mt;
          var c = Ze;
          e: switch (jt) {
            case 1:
              jt = 0, Ze = null, ia(t, e, c, 1);
              break;
            case 2:
            case 9:
              if ($h(c)) {
                jt = 0, Ze = null, $g(e);
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
              $h(c) ? (jt = 0, Ze = null, $g(e)) : (jt = 0, Ze = null, ia(t, e, c, 7));
              break;
            case 5:
              var h = null;
              switch (Mt.tag) {
                case 26:
                  h = Mt.memoizedState;
                case 5:
                case 27:
                  var S = Mt;
                  if (h ? Vm(h) : S.stateNode.complete) {
                    jt = 0, Ze = null;
                    var M = S.sibling;
                    if (M !== null) Mt = M;
                    else {
                      var j = S.return;
                      j !== null ? (Mt = j, hc(j)) : Mt = null;
                    }
                    break e;
                  }
              }
              jt = 0, Ze = null, ia(t, e, c, 5);
              break;
            case 6:
              jt = 0, Ze = null, ia(t, e, c, 6);
              break;
            case 8:
              df(), Wt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Ux();
        break;
      } catch (J) {
        Xg(t, J);
      }
    while (!0);
    return Jn = Fl = null, ct.H = i, ct.A = u, Vt = n, Mt !== null ? 0 : (Gt = null, Dt = 0, xo(), Wt);
  }
  function Ux() {
    for (; Mt !== null && !hr(); )
      Kg(Mt);
  }
  function Kg(t) {
    var e = cg(t.alternate, t, tl);
    t.memoizedProps = t.pendingProps, e === null ? hc(t) : Mt = e;
  }
  function $g(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = eg(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Dt
        );
        break;
      case 11:
        e = eg(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Dt
        );
        break;
      case 5:
        xs(e);
        var i = e;
        i === se && (zt ? (No(i), i.tag === 5 && i.stateNode != null && (Qt = i.stateNode)) : (No(i), zt = !0));
      default:
        sg(n, e), e = Mt = Uh(e, tl), e = cg(n, e, tl);
    }
    t.memoizedProps = t.pendingProps, e === null ? hc(t) : Mt = e;
  }
  function ia(t, e, n, i) {
    Jn = Fl = null, xs(e), Zi = null, Ja = 0;
    var u = e.return;
    try {
      if (_x(
        t,
        u,
        e,
        n,
        Dt
      )) {
        Wt = 1, Qo(
          t,
          Pe(n, t.current)
        ), Mt = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw Mt = u, c;
      Wt = 1, Qo(
        t,
        Pe(n, t.current)
      ), Mt = null;
      return;
    }
    e.flags & 32768 ? (zt || i === 1 ? t = !0 : Fi || (Dt & 536870912) !== 0 ? t = !1 : (Nl = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = ge.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Jg(e, t)) : hc(e);
  }
  function hc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Jg(
          e,
          Nl
        );
        return;
      }
      t = e.return;
      var n = Cx(
        e.alternate,
        e,
        tl
      );
      if (n !== null) {
        Mt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Mt = e;
        return;
      }
      Mt = e = t;
    } while (e !== null);
    Wt === 0 && (Wt = 5);
  }
  function Jg(t, e) {
    do {
      var n = zx(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Mt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Mt = t;
        return;
      }
      Mt = t = n;
    } while (t !== null);
    Wt = 6, Mt = null;
  }
  function Ig(t, e, n, i, u, c, h, S, M, j, J, nt) {
    t.cancelPendingCommit = null;
    do
      gc();
    while (It !== 0);
    if ((Vt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Gt && (Mt = Gt = null, Dt = 0), si = e, hn = t, Hn = n, ff = u, Vg = i, Lx(
        t,
        e,
        n,
        h,
        S,
        M,
        nt
      );
    }
  }
  function Lx(t, e, n, i, u, c, h) {
    var S = e.lanes | e.childLanes;
    if (sf = S, S |= $r, Er(
      t,
      n,
      S,
      i,
      u,
      c
    ), ta = null, (n & 335544064) === n ? (ea = fx(t), i = 10262) : (ea = null, i = 10256), (e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Zx(bi, function() {
      return vf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Po = !1, i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
      i = ct.T, ct.T = null, u = rt.p, rt.p = 2, c = Vt, Vt |= 4;
      try {
        Mx(t, e, n);
      } finally {
        Vt = c, rt.p = u, ct.T = i;
      }
    }
    It = 1, Po ? Pi = rS(
      h,
      t.containerInfo,
      ea,
      gf,
      mf,
      Yx,
      yf,
      vf,
      Vx
    ) : (gf(), mf(), yf());
  }
  function Vx(t) {
    if (It !== 0) {
      var e = hn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Yx() {
    It === 3 && (It = 0, Og(si, hn), It = 4);
  }
  function gf() {
    if (It === 1) {
      It = 0;
      var t = hn, e = si, n = Hn, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = ct.T, ct.T = null;
        var u = rt.p;
        rt.p = 2;
        var c = Vt;
        Vt |= 4;
        try {
          uu = nc = !1, Mg(e, t, n), n = Mf;
          var h = Th(t.containerInfo), S = n.focusedElem, M = n.selectionRange;
          if (h !== S && S && S.ownerDocument && Nh(
            S.ownerDocument.documentElement,
            S
          )) {
            if (M !== null && Xr(S)) {
              var j = M.start, J = M.end;
              if (J === void 0 && (J = j), "selectionStart" in S)
                S.selectionStart = j, S.selectionEnd = Math.min(
                  J,
                  S.value.length
                );
              else {
                var nt = S.ownerDocument || document, L = nt && nt.defaultView || window;
                if (L.getSelection) {
                  var K = L.getSelection(), ht = S.textContent.length, yt = Math.min(M.start, ht), Tt = M.end === void 0 ? yt : Math.min(M.end, ht);
                  !K.extend && yt > Tt && (h = Tt, Tt = yt, yt = h);
                  var Y = wh(
                    S,
                    yt
                  ), D = wh(
                    S,
                    Tt
                  );
                  if (Y && D && (K.rangeCount !== 1 || K.anchorNode !== Y.node || K.anchorOffset !== Y.offset || K.focusNode !== D.node || K.focusOffset !== D.offset)) {
                    var Q = nt.createRange();
                    Q.setStart(Y.node, Y.offset), K.removeAllRanges(), yt > Tt ? (K.addRange(Q), K.extend(D.node, D.offset)) : (Q.setEnd(D.node, D.offset), K.addRange(Q));
                  }
                }
              }
            }
            for (nt = [], K = S; K = K.parentNode; )
              K.nodeType === 1 && nt.push({
                element: K,
                left: K.scrollLeft,
                top: K.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < nt.length; S++) {
              var et = nt[S];
              et.element.scrollLeft = et.left, et.element.scrollTop = et.top;
            }
          }
          da = !!zf, Mf = zf = null;
        } finally {
          Vt = c, rt.p = u, ct.T = i;
        }
      }
      t.current = e, It = 2;
    }
  }
  function mf() {
    if (It === 2) {
      It = 0;
      var t = hn, e = si, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = ct.T, ct.T = null;
        var i = rt.p;
        rt.p = 2;
        var u = Vt;
        Vt |= 4;
        try {
          _g(t, e.alternate, e);
        } finally {
          Vt = u, rt.p = i, ct.T = n;
        }
      }
      It = 3;
    }
  }
  function yf() {
    if (It === 4 || It === 3) {
      It = 0;
      var t = Pi;
      Pi = null, gr();
      var e = hn, n = si, i = Hn, u = Vg, c = (i & 335544064) === i ? 10262 : 10256;
      if ((n.subtreeFlags & c) !== 0 || (n.flags & c) !== 0 ? It = 5 : (It = 0, si = hn = null, kg(e, e.pendingLanes)), c = e.pendingLanes, c === 0 && (Cl = null), Oa(i), n = n.stateNode, we && typeof we.onCommitFiberRoot == "function")
        try {
          we.onCommitFiberRoot(
            ql,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        n = ct.T, c = rt.p, rt.p = 2, ct.T = null;
        try {
          for (var h = e.onRecoverableError, S = 0; S < u.length; S++) {
            var M = u[S];
            h(M.value, {
              componentStack: M.stack
            });
          }
        } finally {
          ct.T = n, rt.p = c;
        }
      }
      if (u = ta, h = ea, ea = null, u !== null && (ta = null, h === null && (h = []), t !== null))
        for (M = 0; M < u.length; M++)
          n = (0, u[M])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (Hn & 3) !== 0 && gc(), Bn(e), c = e.pendingLanes, (i & 261930) !== 0 && (c & 42) !== 0 ? e === sc ? su++ : (su = 0, sc = e) : (su = 0, sc = null), fu(0);
    }
  }
  function kg(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Qa(e)));
  }
  function gc() {
    return Pi !== null && (Pi.skipTransition(), Pi = null), gf(), mf(), yf(), vf();
  }
  function vf() {
    if (It !== 5) return !1;
    var t = hn, e = sf;
    sf = 0;
    var n = Oa(Hn), i = ct.T, u = rt.p;
    try {
      rt.p = 32 > n ? 32 : n, ct.T = null, n = ff, ff = null;
      var c = hn, h = Hn;
      if (It = 0, si = hn = null, Hn = 0, (Vt & 6) !== 0) throw Error(r(331));
      var S = Vt;
      if (Vt |= 4, Bg(c.current), Dg(
        c,
        c.current,
        h,
        n
      ), Vt = S, fu(0, !1), we && typeof we.onPostCommitFiberRoot == "function")
        try {
          we.onPostCommitFiberRoot(ql, c);
        } catch {
        }
      return !0;
    } finally {
      rt.p = u, ct.T = i, kg(t, e);
    }
  }
  function Fg(t, e, n) {
    e = Pe(n, e), e = Rs(t.stateNode, e, 2), t = xl(t, e, 2), t !== null && (Zl(t, 2), Bn(t));
  }
  function qt(t, e, n) {
    if (t.tag === 3)
      Fg(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Fg(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Cl === null || !Cl.has(i))) {
            t = Pe(n, t), n = $0(2), i = xl(e, n, 2), i !== null && (J0(
              n,
              i,
              e,
              t
            ), Zl(i, 2), Bn(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function pf(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Dx();
      var u = /* @__PURE__ */ new Set();
      i.set(e, u);
    } else
      u = i.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(e, u));
    u.has(n) || (cf = !0, u.add(n), t = jx.bind(null, t, e, n), e.then(t, t));
  }
  function jx(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Gt === t && (Dt & n) === n && ((Wt === 4 || Wt === 3 && (Dt & 62914560) === Dt && 300 > _e() - oc) && (Vt & 2) === 0 ? la(t, 0) : uc |= n, Wi === Dt && (Wi = 0)), Bn(t);
  }
  function Wg(t, e) {
    e === 0 && (e = Ma()), t = Jl(t, e), t !== null && (Zl(t, e), Bn(t));
  }
  function qx(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Wg(t, n);
  }
  function Xx(t, e) {
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
    i !== null && i.delete(e), Wg(t, n);
  }
  function Zx(t, e) {
    return Ta(t, e);
  }
  var aa = null, ua = null, xf = !1, mc = !1, Sf = !1, Ml = 0;
  function Bn(t) {
    t !== ua && t.next === null && (ua === null ? aa = ua = t : ua = ua.next = t), mc = !0, xf || (xf = !0, Qx());
  }
  function fu(t, e) {
    if (!Sf && mc) {
      Sf = !0;
      do
        for (var n = !1, i = aa; i !== null; ) {
          if (t !== 0) {
            var u = i.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var h = i.suspendedLanes, S = i.pingedLanes;
              c = (1 << 31 - Ne(42 | t) + 1) - 1, c &= u & ~(h & ~S), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, nm(i, c));
          } else
            c = Dt, c = Ni(
              i,
              i === Gt ? c : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (c & 3) === 0 || Xl(i, c) || (n = !0, nm(i, c));
          i = i.next;
        }
      while (n);
      Sf = !1;
    }
  }
  function Gx() {
    Pg();
  }
  function Pg() {
    mc = xf = !1;
    var t = 0;
    Ml !== 0 && nS() && (t = Ml);
    for (var e = _e(), n = null, i = aa; i !== null; ) {
      var u = i.next, c = tm(i, e);
      c === 0 ? (i.next = null, n === null ? aa = u : n.next = u, u === null && (ua = n)) : (n = i, (t !== 0 || (c & 3) !== 0) && (mc = !0)), i = u;
    }
    It !== 0 && It !== 5 || fu(t), Ml !== 0 && (Ml = 0);
  }
  function tm(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var h = 31 - Ne(c), S = 1 << h, M = u[h];
      M === -1 ? ((S & n) === 0 || (S & i) !== 0) && (u[h] = Fu(S, e)) : M <= e && (t.expiredLanes |= S), c &= ~S;
    }
    if (e = Gt, n = Dt, n = Ni(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, n === 0 || t === e && (jt === 2 || jt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Ca(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Xl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Ca(i), Oa(n)) {
        case 2:
        case 8:
          n = Iu;
          break;
        case 32:
          n = bi;
          break;
        case 268435456:
          n = ku;
          break;
        default:
          n = bi;
      }
      return i = em.bind(null, t), n = Ta(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Ca(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function em(t, e) {
    if (It !== 0 && It !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (gc() && t.callbackNode !== n)
      return null;
    var i = Dt;
    return i = Ni(
      t,
      t === Gt ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (jg(t, i, e), tm(t, _e()), t.callbackNode != null && t.callbackNode === n ? em.bind(null, t) : null);
  }
  function nm(t, e) {
    if (gc()) return null;
    jg(t, e, !0);
  }
  function Qx() {
    iS(function() {
      (Vt & 6) !== 0 ? Ta(
        Ju,
        Gx
      ) : Pg();
    });
  }
  function bf() {
    if (Ml === 0) {
      var t = ti;
      t === 0 && (t = Ei, Ei <<= 1, (Ei & 261888) === 0 && (Ei = 256)), Ml = t;
    }
    return Ml;
  }
  function lm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : so(t);
  }
  function Kx(t, e, n, i, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var c = lm(
        (u[Se] || null).action
      ), h = i.submitter;
      h && (e = (e = h[Se] || null) ? lm(e.formAction) : h.getAttribute("formAction"), e !== null && (c = e, h = null));
      var S = new mo(
        "action",
        "action",
        null,
        i,
        u
      );
      t.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (Ml !== 0) {
                  var M = new FormData(u, h);
                  zs(
                    n,
                    {
                      pending: !0,
                      data: M,
                      method: u.method,
                      action: c
                    },
                    null,
                    M
                  );
                }
              } else
                typeof c == "function" && (S.preventDefault(), M = new FormData(u, h), zs(
                  n,
                  {
                    pending: !0,
                    data: M,
                    method: u.method,
                    action: c
                  },
                  c,
                  M
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Ef = 0; Ef < Kr.length; Ef++) {
    var _f = Kr[Ef], $x = _f.toLowerCase(), Jx = _f[0].toUpperCase() + _f.slice(1);
    rn(
      $x,
      "on" + Jx
    );
  }
  rn(Mh, "onAnimationEnd"), rn(Ah, "onAnimationIteration"), rn(Oh, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(lx, "onTransitionRun"), rn(ix, "onTransitionStart"), rn(ax, "onTransitionCancel"), rn(Dh, "onTransitionEnd"), rl("onMouseEnter", ["mouseout", "mouseover"]), rl("onMouseLeave", ["mouseout", "mouseover"]), rl("onPointerEnter", ["pointerout", "pointerover"]), rl("onPointerLeave", ["pointerout", "pointerover"]), cn(
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
  var du = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ix = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du)
  );
  function im(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], u = i.event;
      i = i.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var h = i.length - 1; 0 <= h; h--) {
            var S = i[h], M = S.instance, j = S.currentTarget;
            if (S = S.listener, M !== c && u.isPropagationStopped())
              break t;
            c = S, u.currentTarget = j;
            try {
              c(u);
            } catch (J) {
              po(J);
            }
            u.currentTarget = null, c = M;
          }
        else
          for (h = 0; h < i.length; h++) {
            if (S = i[h], M = S.instance, j = S.currentTarget, S = S.listener, M !== c && u.isPropagationStopped())
              break t;
            c = S, u.currentTarget = j;
            try {
              c(u);
            } catch (J) {
              po(J);
            }
            u.currentTarget = null, c = M;
          }
      }
    }
  }
  function At(t, e) {
    var n = e[lo];
    n === void 0 && (n = e[lo] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (am(e, t, 2, !1), n.add(i));
  }
  function wf(t, e, n) {
    var i = 0;
    e && (i |= 4), am(
      n,
      t,
      i,
      e
    );
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function Nf(t) {
    if (!t[yc]) {
      t[yc] = !0, uo.forEach(function(n) {
        n !== "selectionchange" && (Ix.has(n) || wf(n, !1, t), wf(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[yc] || (e[yc] = !0, wf("selectionchange", !1, e));
    }
  }
  function am(t, e, n, i) {
    switch (Jm(e)) {
      case 2:
        var u = qS;
        break;
      case 8:
        u = XS;
        break;
      default:
        u = Qf;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !Dr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), i ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Tf(t, e, n, i, u) {
    var c = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var h = i.tag;
        if (h === 3 || h === 4) {
          var S = i.stateNode.containerInfo;
          if (S === u) break;
          if (h === 4)
            for (h = i.return; h !== null; ) {
              var M = h.tag;
              if ((M === 3 || M === 4) && h.stateNode.containerInfo === u)
                return;
              h = h.return;
            }
          for (; S !== null; ) {
            if (h = jn(S), h === null) return;
            if (M = h.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              i = c = h;
              continue t;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    ah(function() {
      var j = c, J = Ar(n), nt = [];
      t: {
        var L = Rh.get(t);
        if (L !== void 0) {
          var K = mo, ht = t;
          switch (t) {
            case "keypress":
              if (ho(n) === 0) break t;
            case "keydown":
            case "keyup":
              K = R1;
              break;
            case "focusin":
              ht = "focus", K = Ur;
              break;
            case "focusout":
              ht = "blur", K = Ur;
              break;
            case "beforeblur":
            case "afterblur":
              K = Ur;
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
              K = ch;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = b1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = V1;
              break;
            case Mh:
            case Ah:
            case Oh:
              K = w1;
              break;
            case Dh:
              K = j1;
              break;
            case "scroll":
            case "scrollend":
              K = x1;
              break;
            case "wheel":
              K = X1;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = T1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = sh;
              break;
            case "submit":
              K = U1;
              break;
            case "toggle":
            case "beforetoggle":
              K = G1;
          }
          var yt = (e & 4) !== 0, Tt = !yt && (t === "scroll" || t === "scrollend"), Y = yt ? L !== null ? L + "Capture" : null : L;
          yt = [];
          for (var D = j, Q; D !== null; ) {
            var et = D;
            if (Q = et.stateNode, et = et.tag, et !== 5 && et !== 26 && et !== 27 || Q === null || Y === null || (et = Ha(D, Y), et != null && yt.push(
              hu(D, et, Q)
            )), Tt) break;
            D = D.return;
          }
          0 < yt.length && (L = new K(
            L,
            ht,
            null,
            n,
            J
          ), nt.push({ event: L, listeners: yt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (K = t === "mouseover" || t === "pointerover", L = t === "mouseout" || t === "pointerout", K && n !== Mr && (ht = n.relatedTarget || n.fromElement) && (jn(ht) || ht[ol]))
            break t;
          (L || K) && (ht = J.window === J ? J : (K = J.ownerDocument) ? K.defaultView || K.parentWindow : window, L ? (K = n.relatedTarget || n.toElement, L = j, K = K ? jn(K) : null, K !== null && (Tt = f(K), yt = K.tag, K !== Tt || yt !== 5 && yt !== 27 && yt !== 6) && (K = null)) : (L = null, K = j), L !== K && (yt = ch, et = "onMouseLeave", Y = "onMouseEnter", D = "mouse", (t === "pointerout" || t === "pointerover") && (yt = sh, et = "onPointerLeave", Y = "onPointerEnter", D = "pointer"), Tt = L == null ? ht : Ql(L), Q = K == null ? ht : Ql(K), ht = new yt(
            et,
            D + "leave",
            L,
            n,
            J
          ), ht.target = Tt, ht.relatedTarget = Q, et = null, jn(J) === j && (yt = new yt(
            Y,
            D + "enter",
            K,
            n,
            J
          ), yt.target = Q, yt.relatedTarget = Tt, et = yt), Tt = et, yt = L && K ? B(
            L,
            K,
            kx
          ) : null, L !== null && um(
            nt,
            ht,
            L,
            yt,
            !1
          ), K !== null && Tt !== null && um(
            nt,
            Tt,
            K,
            yt,
            !0
          )));
        }
        t: {
          if (L = j ? Ql(j) : window, K = L.nodeName && L.nodeName.toLowerCase(), K === "select" || K === "input" && L.type === "file")
            var mt = ph;
          else if (yh(L))
            if (xh)
              mt = tx;
            else {
              mt = W1;
              var Rt = F1;
            }
          else
            K = L.nodeName, !K || K.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? j && zr(j.elementType) && (mt = ph) : mt = P1;
          if (mt && (mt = mt(t, j))) {
            vh(
              nt,
              mt,
              n,
              J
            );
            break t;
          }
          Rt && Rt(t, L, j);
        }
        switch (Rt = j ? Ql(j) : window, t) {
          case "focusin":
            (yh(Rt) || Rt.contentEditable === "true") && (Hi = Rt, Zr = j, Xa = null);
            break;
          case "focusout":
            Xa = Zr = Hi = null;
            break;
          case "mousedown":
            Gr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gr = !1, Ch(nt, n, J);
            break;
          case "selectionchange":
            if (nx) break;
          case "keydown":
          case "keyup":
            Ch(nt, n, J);
        }
        var St;
        if (Vr)
          t: {
            switch (t) {
              case "compositionstart":
                var bt = "onCompositionStart";
                break t;
              case "compositionend":
                bt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                bt = "onCompositionUpdate";
                break t;
            }
            bt = void 0;
          }
        else
          Ri ? gh(t, n) && (bt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (bt = "onCompositionStart");
        bt && (fh && n.locale !== "ko" && (Ri || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && Ri && (St = uh()) : (sl = J, Rr = "value" in sl ? sl.value : sl.textContent, Ri = !0)), Rt = vc(j, bt), 0 < Rt.length && (bt = new rh(
          bt,
          t,
          null,
          n,
          J
        ), nt.push({ event: bt, listeners: Rt }), St ? bt.data = St : (St = mh(n), St !== null && (bt.data = St)))), (St = K1 ? $1(t, n) : J1(t, n)) && (bt = vc(j, "onBeforeInput"), 0 < bt.length && (Rt = new rh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          J
        ), nt.push({
          event: Rt,
          listeners: bt
        }), Rt.data = St)), Kx(
          nt,
          t,
          j,
          n,
          J
        );
      }
      im(nt, e);
    });
  }
  function hu(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function vc(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var u = t, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Ha(t, n), u != null && i.unshift(
        hu(t, u, c)
      ), u = Ha(t, e), u != null && i.push(
        hu(t, u, c)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function kx(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function um(t, e, n, i, u) {
    for (var c = e._reactName, h = []; n !== null && n !== i; ) {
      var S = n, M = S.alternate, j = S.stateNode;
      if (S = S.tag, M !== null && M === i) break;
      S !== 5 && S !== 26 && S !== 27 || j === null || (M = j, u ? (j = Ha(n, c), j != null && h.unshift(
        hu(n, j, M)
      )) : u || (j = Ha(n, c), j != null && h.push(
        hu(n, j, M)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Fx = /\r\n?/g, Wx = /\u0000|\uFFFD/g;
  function om(t) {
    return (typeof t == "string" ? t : "" + t).replace(Fx, `
`).replace(Wx, "");
  }
  function cm(t, e) {
    return e = om(e), om(t) === e;
  }
  function Xt(t, e, n, i, u, c) {
    switch (n) {
      case "children":
        if (typeof i == "string")
          e === "body" || e === "textarea" && i === "" || Ai(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          e !== "body" && Ai(t, "" + i);
        else return;
        break;
      case "className":
        ro(t, "class", i);
        break;
      case "tabIndex":
        ro(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ro(t, n, i);
        break;
      case "style":
        lh(t, i, c);
        return;
      case "data":
        if (e !== "object") {
          ro(t, "data", i);
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
        i = so(i), t.setAttribute(n, i);
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
        i = so(i), t.setAttribute(n, i);
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
        n = so(i), t.setAttributeNS(
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
        At("beforetoggle", t), At("toggle", t), co(t, "popover", i);
        break;
      case "xlinkActuate":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Xn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Xn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Xn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Xn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        co(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = v1.get(n) || n, co(t, n, i);
        else return;
    }
    Lt = !0;
  }
  function Cf(t, e, n, i, u, c) {
    switch (n) {
      case "style":
        lh(t, i, c);
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
        if (typeof i == "string") Ai(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          Ai(t, "" + i);
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
        if (!oo.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), c = n.slice(2, u ? n.length - 7 : void 0), e = t[Se] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(c, e, u), typeof i == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(c, i, u);
              break t;
            }
            Lt = !0, n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : co(t, n, i);
          }
        return;
    }
    Lt = !0;
  }
  function ve(t, e, n) {
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
        var S = c = h = u = null, M = null, j = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var J = n[i];
            if (J != null)
              switch (i) {
                case "name":
                  u = J;
                  break;
                case "type":
                  h = J;
                  break;
                case "checked":
                  M = J;
                  break;
                case "defaultChecked":
                  j = J;
                  break;
                case "value":
                  c = J;
                  break;
                case "defaultValue":
                  S = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Xt(t, e, i, J, n, null);
              }
          }
        Pd(
          t,
          c,
          S,
          M,
          j,
          h,
          u,
          !1
        );
        return;
      case "select":
        At("invalid", t), i = h = c = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (S = n[u], S != null))
            switch (u) {
              case "value":
                c = S;
                break;
              case "defaultValue":
                h = S;
                break;
              case "multiple":
                i = S;
              default:
                Xt(t, e, u, S, n, null);
            }
        e = c, n = h, t.multiple = !!i, e != null ? Mi(t, !!i, e, !1) : n != null && Mi(t, !!i, n, !0);
        return;
      case "textarea":
        At("invalid", t), c = u = i = null;
        for (h in n)
          if (n.hasOwnProperty(h) && (S = n[h], S != null))
            switch (h) {
              case "value":
                i = S;
                break;
              case "defaultValue":
                u = S;
                break;
              case "children":
                c = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(91));
                break;
              default:
                Xt(t, e, h, S, n, null);
            }
        eh(t, i, u, c);
        return;
      case "option":
        for (M in n)
          if (n.hasOwnProperty(M) && (i = n[M], i != null))
            switch (M) {
              case "selected":
                t.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Xt(t, e, M, i, n, null);
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
        for (i = 0; i < du.length; i++)
          At(du[i], t);
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
        for (j in n)
          if (n.hasOwnProperty(j) && (i = n[j], i != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Xt(t, e, j, i, n, null);
            }
        return;
      default:
        if (zr(e)) {
          for (J in n)
            n.hasOwnProperty(J) && (i = n[J], i !== void 0 && Cf(
              t,
              e,
              J,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (S in n)
      n.hasOwnProperty(S) && (i = n[S], i != null && Xt(t, e, S, i, n, null));
  }
  var Px = {};
  function tS(t, e, n, i) {
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
        var u = null, c = null, h = null, S = null, M = null, j = null, J = null;
        for (K in n) {
          var nt = n[K];
          if (n.hasOwnProperty(K) && nt != null)
            switch (K) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = nt;
              default:
                i.hasOwnProperty(K) || Xt(t, e, K, null, i, nt);
            }
        }
        for (var L in i) {
          var K = i[L];
          if (nt = n[L], i.hasOwnProperty(L) && (K != null || nt != null))
            switch (L) {
              case "type":
                K !== nt && (Lt = !0), c = K;
                break;
              case "name":
                K !== nt && (Lt = !0), u = K;
                break;
              case "checked":
                K !== nt && (Lt = !0), j = K;
                break;
              case "defaultChecked":
                K !== nt && (Lt = !0), J = K;
                break;
              case "value":
                K !== nt && (Lt = !0), h = K;
                break;
              case "defaultValue":
                K !== nt && (Lt = !0), S = K;
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
                  L,
                  K,
                  i,
                  nt
                );
            }
        }
        Tr(
          t,
          h,
          S,
          M,
          j,
          J,
          c,
          u
        );
        return;
      case "select":
        K = h = S = L = null;
        for (c in n)
          if (M = n[c], n.hasOwnProperty(c) && M != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                K = M;
              default:
                i.hasOwnProperty(c) || Xt(
                  t,
                  e,
                  c,
                  null,
                  i,
                  M
                );
            }
        for (u in i)
          if (c = i[u], M = n[u], i.hasOwnProperty(u) && (c != null || M != null))
            switch (u) {
              case "value":
                c !== M && (Lt = !0), L = c;
                break;
              case "defaultValue":
                c !== M && (Lt = !0), S = c;
                break;
              case "multiple":
                c !== M && (Lt = !0), h = c;
              default:
                c !== M && Xt(
                  t,
                  e,
                  u,
                  c,
                  i,
                  M
                );
            }
        e = S, n = h, i = K, L != null ? Mi(t, !!n, L, !1) : !!i != !!n && (e != null ? Mi(t, !!n, e, !0) : Mi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        K = L = null;
        for (S in n)
          if (u = n[S], n.hasOwnProperty(S) && u != null && !i.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, S, null, i, u);
            }
        for (h in i)
          if (u = i[h], c = n[h], i.hasOwnProperty(h) && (u != null || c != null))
            switch (h) {
              case "value":
                u !== c && (Lt = !0), L = u;
                break;
              case "defaultValue":
                u !== c && (Lt = !0), K = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== c && Xt(t, e, h, u, i, c);
            }
        th(t, L, K);
        return;
      case "option":
        for (var ht in n)
          if (L = n[ht], n.hasOwnProperty(ht) && L != null && !i.hasOwnProperty(ht))
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
                  L
                );
            }
        for (M in i)
          if (L = i[M], K = n[M], i.hasOwnProperty(M) && L !== K && (L != null || K != null))
            switch (M) {
              case "selected":
                L !== K && (Lt = !0), t.selected = L && typeof L != "function" && typeof L != "symbol";
                break;
              default:
                Xt(
                  t,
                  e,
                  M,
                  L,
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
          L = n[yt], n.hasOwnProperty(yt) && L != null && !i.hasOwnProperty(yt) && Xt(t, e, yt, null, i, L);
        for (j in i)
          if (L = i[j], K = n[j], i.hasOwnProperty(j) && L !== K && (L != null || K != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(r(137, e));
                break;
              default:
                Xt(
                  t,
                  e,
                  j,
                  L,
                  i,
                  K
                );
            }
        return;
      default:
        if (zr(e)) {
          for (var Tt in n)
            L = n[Tt], n.hasOwnProperty(Tt) && L !== void 0 && !i.hasOwnProperty(Tt) && Cf(
              t,
              e,
              Tt,
              void 0,
              i,
              L
            );
          for (J in i)
            L = i[J], K = n[J], !i.hasOwnProperty(J) || L === K || L === void 0 && K === void 0 || Cf(
              t,
              e,
              J,
              L,
              i,
              K
            );
          return;
        }
    }
    for (var Y in n)
      L = n[Y], n.hasOwnProperty(Y) && L != null && !i.hasOwnProperty(Y) && Xt(t, e, Y, null, i, L);
    for (nt in i)
      L = i[nt], K = n[nt], !i.hasOwnProperty(nt) || L === K || L == null && K == null || Xt(t, e, nt, L, i, K);
  }
  function rm(t) {
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
  function eS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var u = n[i], c = u.transferSize, h = u.initiatorType, S = u.duration;
        if (c && S && rm(h)) {
          for (h = 0, S = u.responseEnd, i += 1; i < n.length; i++) {
            var M = n[i], j = M.startTime;
            if (j > S) break;
            var J = M.transferSize, nt = M.initiatorType;
            J && rm(nt) && (M = M.responseEnd, h += J * (M < S ? 1 : (S - j) / (M - j)));
          }
          if (--i, e += 8 * (c + h) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var zf = null, Mf = null;
  function gu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fm(t, e) {
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
  function dm(t, e, n, i) {
    return n = gu(
      n
    ).createElement(t), n[oe] = i, n[Se] = e, ve(n, t, e), ee(n), n;
  }
  function Af(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Of = null;
  function nS() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Of ? !1 : (Of = t, !0) : (Of = null, !1);
  }
  var Df = typeof setTimeout == "function" ? setTimeout : void 0, lS = typeof clearTimeout == "function" ? clearTimeout : void 0, hm = typeof Promise == "function" ? Promise : void 0, gm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Df, iS = typeof queueMicrotask == "function" ? queueMicrotask : typeof hm < "u" ? function(t) {
    return hm.resolve(null).then(t).catch(aS);
  } : Df;
  function aS(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Al(t) {
    return t === "head";
  }
  function mm(t, e) {
    var n = e, i = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (i === 0) {
            t.removeChild(u), ha(e);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          jf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, jf(n);
          for (var c = n.firstChild; c; ) {
            var h = c.nextSibling, S = c.nodeName;
            c[Gl] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c), c = h;
          }
        } else
          n === "body" && jf(t.ownerDocument.body);
      n = u;
    } while (n);
    ha(e);
  }
  function ym(t, e) {
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
  function vm(t, e, n) {
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
  function pm(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function uS(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Rf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return uS(e, n, t);
  }
  function oS(t) {
    return t.documentElement.clientHeight;
  }
  function cS(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function rS(t, e, n, i, u, c, h, S, M) {
    var j = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var J = j.startViewTransition({
        update: function() {
          var L = j.defaultView, K = L.navigation && L.navigation.transition, ht = j.fonts.status;
          i();
          var yt = [];
          if (ht === "loaded" && (oS(j), j.fonts.status === "loading" && yt.push(j.fonts.ready)), ht = yt.length, t !== null)
            for (var Tt = t.suspenseyImages, Y = 0, D = 0; D < Tt.length; D++) {
              var Q = Tt[D];
              if (!Q.complete) {
                var et = Q.getBoundingClientRect();
                if (0 < et.bottom && 0 < et.right && et.top < L.innerHeight && et.left < L.innerWidth) {
                  if (Y += Ym(Q), Y > Sc) {
                    yt.length = ht;
                    break;
                  }
                  Q = new Promise(
                    cS.bind(Q)
                  ), yt.push(Q);
                }
              }
            }
          if (0 < yt.length)
            return L = Promise.race([
              Promise.all(yt),
              new Promise(function(mt) {
                return setTimeout(mt, 500);
              })
            ]).then(u, u), (K ? Promise.allSettled([K.finished, L]) : L).then(c, c);
          if (u(), K)
            return K.finished.then(
              c,
              c
            );
          c();
        },
        types: n
      });
      j.__reactViewTransition = J;
      var nt = [];
      return J.ready.then(
        function() {
          for (var L = j.documentElement.getAnimations({
            subtree: !0
          }), K = 0; K < L.length; K++) {
            var ht = L[K], yt = ht.effect, Tt = yt.pseudoElement;
            if (Tt != null && Tt.startsWith("::view-transition")) {
              nt.push(ht), ht = yt.getKeyframes();
              for (var Y = Tt = void 0, D = !0, Q = 0; Q < ht.length; Q++) {
                var et = ht[Q], mt = et.width;
                if (Tt === void 0) Tt = mt;
                else if (Tt !== mt) {
                  D = !1;
                  break;
                }
                if (mt = et.height, Y === void 0) Y = mt;
                else if (Y !== mt) {
                  D = !1;
                  break;
                }
                delete et.width, delete et.height, et.transform === "none" && delete et.transform;
              }
              D && Tt !== void 0 && Y !== void 0 && (yt.setKeyframes(ht), D = getComputedStyle(
                yt.target,
                yt.pseudoElement
              ), D.width !== Tt || D.height !== Y) && (D = ht[0], D.width = Tt, D.height = Y, D = ht[ht.length - 1], D.width = Tt, D.height = Y, yt.setKeyframes(ht));
            }
          }
          h();
        },
        function(L) {
          j.__reactViewTransition === J && (j.__reactViewTransition = null);
          try {
            if (typeof L == "object" && L !== null)
              switch (L.name) {
                case "InvalidStateError":
                  (L.message === "View transition was skipped because document visibility state is hidden." || L.message === "Skipping view transition because document visibility state has become hidden." || L.message === "Skipping view transition because viewport size changed." || L.message === "Transition was aborted because of invalid state") && (L = null);
              }
            L !== null && M(L);
          } finally {
            i(), u(), h();
          }
        }
      ), J.finished.finally(function() {
        for (var L = 0; L < nt.length; L++)
          nt[L].cancel();
        j.__reactViewTransition === J && (j.__reactViewTransition = null), S();
      }), J;
    } catch {
      return i(), u(), h(), null;
    }
  }
  function fi(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  fi.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : R({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, fi.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), i = [], u = 0; u < n.length; u++) {
      var c = n[u].effect;
      c !== null && c.target === t && c.pseudoElement === e && i.push(n[u]);
    }
    return i;
  }, fi.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function xm(t) {
    return {
      name: t,
      group: new fi("group", t),
      imagePair: new fi("image-pair", t),
      old: new fi("old", t),
      new: new fi("new", t)
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
      if (bm(c, t, e, n) === -1) {
        var h = this, S = e;
        n != null && typeof n != "boolean" && n.once === !0 && (S = function(M) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, M) : e.handleEvent(M);
        }), i !== null && (u = h.removeEventListener.bind(
          h,
          t,
          e,
          n
        ), i.addEventListener("abort", u, { once: !0 }), u = i.removeEventListener.bind(i, "abort", u)), i = oa(n), c.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: S,
          cleanup: u
        }), m(
          this._fragmentFiber.child,
          !1,
          sS,
          t,
          S,
          i
        );
      }
      this._eventListeners = c;
    }
  };
  function sS(t, e, n, i) {
    return N(t).addEventListener(
      e,
      n,
      i
    ), !1;
  }
  Ke.prototype.removeEventListener = function(t, e, n) {
    var i = this._eventListeners;
    if (i !== null && (e = bm(
      i,
      t,
      e,
      n
    ), e !== -1)) {
      var u = i[e];
      n = u.attachedListener;
      var c = u.cleanup;
      u = oa(u.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        fS,
        t,
        n,
        u
      ), i.splice(e, 1), c !== null && c();
    }
  };
  function fS(t, e, n, i) {
    return N(t).removeEventListener(
      e,
      n,
      i
    ), !1;
  }
  function oa(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Sm(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function bm(t, e, n, i) {
    if (t.length === 0) return -1;
    i = Sm(i);
    for (var u = 0; u < t.length; u++) {
      var c = t[u];
      if (c.type === e && c.listener === n && Sm(c.optionsOrUseCapture) === i)
        return u;
    }
    return -1;
  }
  Ke.prototype.dispatchEvent = function(t) {
    var e = p(
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
            oa(c.optionsOrUseCapture)
          );
        }
      if (e.appendChild(i), t = i.dispatchEvent(t), n)
        for (u = 0; u < n.length; u++)
          c = n[u], i.removeEventListener(
            c.type,
            c.attachedListener,
            oa(c.optionsOrUseCapture)
          );
      return e.removeChild(i), t;
    }
    return e.dispatchEvent(t);
  }, Ke.prototype.focus = function(t) {
    m(
      this._fragmentFiber.child,
      !0,
      Em,
      t,
      void 0,
      void 0
    );
  };
  function Em(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), _S(t, e));
  }
  Ke.prototype.focusLast = function(t) {
    var e = [];
    m(
      this._fragmentFiber.child,
      !0,
      Hf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Em(e[n], t); n--) ;
  };
  function Hf(t, e) {
    return e.push(t), !1;
  }
  Ke.prototype.blur = function() {
    var t = p(
      this._fragmentFiber
    );
    t !== null && (t = N(t), t = gu(t).activeElement, t !== null && m(
      this._fragmentFiber.child,
      !1,
      dS,
      t,
      void 0,
      void 0
    ));
  };
  function dS(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ke.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), m(
      this._fragmentFiber.child,
      !1,
      hS,
      t,
      void 0,
      void 0
    );
  };
  function hS(t, e) {
    return t.tag === 6 || (t = N(t), e.observe(t)), !1;
  }
  Ke.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), m(
        this._fragmentFiber.child,
        !1,
        gS,
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
  function gS(t, e) {
    return t.tag === 6 || (t = N(t), e.unobserve(t)), !1;
  }
  var gn = [], Bf = !1;
  function mS(t, e, n) {
    gn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Bf || (Bf = !0, wS(function() {
      Bf = !1;
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
      yS,
      t,
      void 0,
      void 0
    ), t;
  };
  function yS(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = N(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ke.prototype.getRootNode = function(t) {
    var e = p(
      this._fragmentFiber
    );
    return e === null ? this : N(e).getRootNode(t);
  }, Ke.prototype.compareDocumentPosition = function(t) {
    var e = p(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    m(
      this._fragmentFiber.child,
      !1,
      Hf,
      n,
      void 0,
      void 0
    );
    var i = N(e);
    if (n.length === 0) {
      if (n = i, b(this._fragmentFiber)) {
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
    var c = b(this._fragmentFiber) ? e.parentElement : i;
    if (c == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    i = c.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, c = c.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), S = u.compareDocumentPosition(t), M = h & Node.DOCUMENT_POSITION_CONTAINED_BY || S & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return S = i && c && h & Node.DOCUMENT_POSITION_FOLLOWING && S & Node.DOCUMENT_POSITION_PRECEDING, e = i && e === t || c && u === t || M || S ? Node.DOCUMENT_POSITION_CONTAINED_BY : !i && e === t || !c && u === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || vS(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function vS(t, e, n, i, u) {
    var c = jn(u);
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
        for (c = e, e = p(e); c !== null; ) {
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!c) && !(e = c === n) && (e = B(
      n,
      c,
      X
    ), e === null ? e = !1 : (m(
      e,
      !0,
      _,
      c,
      n
    ), c = w, w = null, e = c !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!c) && !(e = c === i) && (e = B(
      i,
      c,
      X
    ), e === null ? e = !1 : (m(
      e,
      !0,
      C,
      c,
      i
    ), c = w, U = w = null, e = c !== null)), e) : !1;
  }
  function _m(t, e) {
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
      Hf,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var i = E(
        this._fragmentFiber
      );
      if (i = n ? i[1] || i[0] || p(this._fragmentFiber) : i[0] || i[1], i === null) return;
      if (i.tag === 6) {
        t = N(i), _m(t, n);
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
      u.tag === 6 ? (u = N(u), _m(u, n)) : N(u).scrollIntoView(t), i += n ? -1 : 1;
    }
  };
  function pS(t, e) {
    return t = N(t), wm(t, e), !1;
  }
  function wm(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Nm(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = n[i];
        t.addEventListener(
          u.type,
          u.attachedListener,
          oa(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(c) {
      for (var h = 0, S = 0; S < gn.length; S++) {
        var M = gn[S];
        (M.fragmentInstance !== e || M.observer !== c || M.instance !== t) && (gn[h++] = M);
      }
      gn.length = h, c.observe(t);
    }), wm(t, e));
  }
  function xS(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = n[i];
        t.removeEventListener(
          u.type,
          u.attachedListener,
          oa(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(c) {
      typeof c.rootMargin == "string" ? mS(
        e,
        c,
        t
      ) : c.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Uf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uf(n), zi(n);
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
  function SS(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (i) {
        if (!t[Gl])
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
  function bS(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = an(t.nextSibling), t === null)) return null;
    return t;
  }
  function Tm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = an(t.nextSibling), t === null)) return null;
    return t;
  }
  function Lf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Vf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function ES(t, e) {
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
  var Yf = null;
  function Cm(t) {
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
  function zm(t) {
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
  function _S(t, e) {
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
  function wS(t) {
    gm(function() {
      gm(function(e) {
        return t(e);
      });
    });
  }
  function Mm(t, e, n) {
    switch (e = gu(n), t) {
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
  function Am(t, e, n) {
    for (var i in n) {
      var u = n[i];
      n.hasOwnProperty(i) && u != null && Xt(t, e, i, null, Px, u);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Nn && (t.onclick = null), zi(t);
  }
  function jf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    zi(t);
  }
  var un = /* @__PURE__ */ new Map(), Om = /* @__PURE__ */ new Set();
  function mu(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var el = rt.d;
  rt.d = {
    f: NS,
    r: TS,
    D: CS,
    C: zS,
    L: MS,
    m: AS,
    X: DS,
    S: OS,
    M: RS
  };
  function NS() {
    var t = el.f(), e = fc();
    return t || e;
  }
  function TS(t) {
    var e = cl(t);
    e !== null && e.tag === 5 && e.type === "form" ? R0(e) : el.r(t);
  }
  var ca = typeof document > "u" ? null : document;
  function Dm(t, e, n) {
    var i = ca;
    if (i && typeof e == "string" && e) {
      var u = Fe(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), Om.has(u) || (Om.add(u), t = { rel: t, crossOrigin: n, href: e }, i.querySelector(u) === null && (e = i.createElement("link"), ve(e, "link", t), ee(e), i.head.appendChild(e)));
    }
  }
  function CS(t) {
    el.D(t), Dm("dns-prefetch", t, null);
  }
  function zS(t, e) {
    el.C(t, e), Dm("preconnect", t, e);
  }
  function MS(t, e, n) {
    el.L(t, e, n);
    var i = ca;
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
          c = ra(t);
          break;
        case "script":
          c = sa(t);
      }
      if (!(un.has(c) || (t = R(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), un.set(c, t), i.querySelector(u) !== null || e === "style" && i.querySelector(yu(c)) || e === "script" && i.querySelector(vu(c))))) {
        var h = i.createElement("link");
        ve(h, "link", t), e === "style" && (h[Ci] = !0, h.onload = h.onerror = function() {
          Da(h);
        }), ee(h), i.head.appendChild(h);
      }
    }
  }
  function AS(t, e) {
    el.m(t, e);
    var n = ca;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Fe(i) + '"][href="' + Fe(t) + '"]', c = u;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = sa(t);
      }
      if (!un.has(c) && (t = R({ rel: "modulepreload", href: t }, e), un.set(c, t), n.querySelector(u) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(vu(c)))
              return;
        }
        i = n.createElement("link"), ve(i, "link", t), ee(i), n.head.appendChild(i);
      }
    }
  }
  function OS(t, e, n) {
    el.S(t, e, n);
    var i = ca;
    if (i && t) {
      var u = qn(i).hoistableStyles, c = ra(t);
      e = e || "default";
      var h = u.get(c);
      if (!h) {
        var S = { loading: 0, preload: null };
        if (h = i.querySelector(
          yu(c)
        ))
          S.loading = 5;
        else {
          t = R(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = un.get(c)) && qf(t, n);
          var M = h = i.createElement("link");
          ee(M), ve(M, "link", t), M._p = new Promise(function(j, J) {
            M.onload = j, M.onerror = J;
          }), M.addEventListener("load", function() {
            S.loading |= 1;
          }), M.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, pc(h, e, i);
        }
        h = {
          type: "stylesheet",
          instance: h,
          count: 1,
          state: S
        }, u.set(c, h);
      }
    }
  }
  function DS(t, e) {
    el.X(t, e);
    var n = ca;
    if (n && t) {
      var i = qn(n).hoistableScripts, u = sa(t), c = i.get(u);
      c || (c = n.querySelector(vu(u)), c || (t = R({ src: t, async: !0 }, e), (e = un.get(u)) && Xf(t, e), c = n.createElement("script"), ee(c), ve(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(u, c));
    }
  }
  function RS(t, e) {
    el.M(t, e);
    var n = ca;
    if (n && t) {
      var i = qn(n).hoistableScripts, u = sa(t), c = i.get(u);
      c || (c = n.querySelector(vu(u)), c || (t = R({ src: t, async: !0, type: "module" }, e), (e = un.get(u)) && Xf(t, e), c = n.createElement("script"), ee(c), ve(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(u, c));
    }
  }
  function Rm(t, e, n, i) {
    var u = (u = re.current) ? mu(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = ra(n.href), e = qn(
          u
        ).hoistableStyles, i = e.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ra(n.href);
          var c = qn(
            u
          ).hoistableStyles, h = c.get(t);
          if (h || (u = u.ownerDocument || u, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, h), (c = u.querySelector(
            yu(t)
          )) ? c._p || (h.instance = c, h.state.loading = 5) : (c = un.get(t), c || (c = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, un.set(t, c)), HS(
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
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = sa(n), e = qn(
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
  function ra(t) {
    return 'href="' + Fe(t) + '"';
  }
  function yu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Hm(t) {
    return R({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function HS(t, e, n, i) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Ci] !== !0) {
        i.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Ci] = !0, e.onload = e.onerror = Da.bind(null, e), ve(e, "link", n), ee(e), t.head.appendChild(e);
    i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    });
  }
  function sa(t) {
    return '[src="' + Fe(t) + '"]';
  }
  function vu(t) {
    return "script[async]" + t;
  }
  function Bm(t, e, n) {
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
          ), ee(i), ve(i, "style", u), pc(i, n.precedence, t), e.instance = i;
        case "stylesheet":
          u = ra(n.href);
          var c = t.querySelector(
            yu(u)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ee(c), c;
          i = Hm(n), (u = un.get(u)) && qf(i, u), c = (t.ownerDocument || t).createElement("link"), ee(c);
          var h = c;
          return h._p = new Promise(function(S, M) {
            h.onload = S, h.onerror = M;
          }), ve(c, "link", i), e.state.loading |= 4, pc(c, n.precedence, t), e.instance = c;
        case "script":
          return c = sa(n.src), (u = t.querySelector(
            vu(c)
          )) ? (e.instance = u, ee(u), u) : (i = n, (u = un.get(c)) && (i = R({}, n), Xf(i, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), ve(u, "link", i), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, pc(i, n.precedence, t));
    return e.instance;
  }
  function pc(t, e, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = i.length ? i[i.length - 1] : null, c = u, h = 0; h < i.length; h++) {
      var S = i[h];
      if (S.dataset.precedence === e) c = S;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function qf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Xf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var xc = null;
  function Um(t, e, n) {
    if (xc === null) {
      var i = /* @__PURE__ */ new Map(), u = xc = /* @__PURE__ */ new Map();
      u.set(n, i);
    } else
      u = xc, i = u.get(n), i || (i = /* @__PURE__ */ new Map(), u.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var c = n[u];
      if (!(c[Gl] || c[oe] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = c.getAttribute(e) || "";
        h = t + h;
        var S = i.get(h);
        S ? S.push(c) : i.set(h, [c]);
      }
    }
    return i;
  }
  function Zf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function BS(t, e, n) {
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
  function Lm(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Vm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Ym(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function jm(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Ym(e), t.suspenseyImages.push(e)), t = VS.bind(t), e.decode().then(t, t));
  }
  function US(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = ra(i.href), c = e.querySelector(
          yu(u)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = pu.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = c, ee(c);
          return;
        }
        c = e.ownerDocument || e, i = Hm(i), (u = un.get(u)) && qf(i, u), c = c.createElement("link"), ee(c);
        var h = c;
        h._p = new Promise(function(S, M) {
          h.onload = S, h.onerror = M;
        }), ve(c, "link", i), n.instance = c;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = pu.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Sc = 0;
  function LS(t, e) {
    return t.stylesheets && t.count === 0 && Ec(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Ec(t, t.stylesheets), t.unsuspend) {
          var c = t.unsuspend;
          t.unsuspend = null, c();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Sc === 0 && (Sc = 62500 * eS());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ec(t, t.stylesheets), t.unsuspend)) {
            var c = t.unsuspend;
            t.unsuspend = null, c();
          }
        },
        (t.imgBytes > Sc ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(u);
      };
    } : null;
  }
  function qm(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Ec(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function pu() {
    this.count--, qm(this);
  }
  function VS() {
    this.imgCount--, qm(this);
  }
  var bc = null;
  function Ec(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, bc = /* @__PURE__ */ new Map(), e.forEach(YS, t), bc = null, pu.call(t));
  }
  function YS(t, e) {
    if (!(e.state.loading & 4)) {
      var n = bc.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), bc.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var h = u[c];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), i = h);
        }
        i && n.set(null, i);
      }
      u = e.instance, h = u.getAttribute("data-precedence"), c = n.get(h) || i, c === i && n.set(null, u), n.set(h, u), this.count++, i = pu.bind(this), u.addEventListener("load", i), u.addEventListener("error", i), c ? c.parentNode.insertBefore(u, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var fa = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: xt,
    _currentValue2: xt,
    _threadCount: 0
  };
  function jS(t, e, n, i, u, c, h, S, M) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Aa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Aa(0), this.hiddenUpdates = Aa(null), this.identifierPrefix = i, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = M, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xm(t, e, n, i, u, c, h, S, M, j, J, nt) {
    return t = new jS(
      t,
      e,
      n,
      h,
      M,
      j,
      J,
      nt,
      S
    ), e = 1, c === !0 && (e |= 24), c = De(3, null, null, e), t.current = c, c.stateNode = t, e = ls(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, os(c), t;
  }
  function Zm(t) {
    return t ? (t = Li, t) : Li;
  }
  function Gm(t, e, n, i, u, c) {
    u = Zm(u), i.context === null ? i.context = u : i.pendingContext = u, i = pl(e), i.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (i.callback = c), n = xl(t, i, e), n !== null && (Ue(n, t, e), Ia(n, t, e));
  }
  function Qm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Gf(t, e) {
    Qm(t, e), (t = t.alternate) && Qm(t, e);
  }
  function Km(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Jl(t, 67108864);
      e !== null && Ue(e, t, 67108864), Gf(t, 67108864);
    }
  }
  function $m(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Qe();
      e = Ti(e);
      var n = Jl(t, e);
      n !== null && Ue(n, t, e), Gf(t, e);
    }
  }
  var da = !0;
  function qS(t, e, n, i) {
    var u = ct.T;
    ct.T = null;
    var c = rt.p;
    try {
      rt.p = 2, Qf(t, e, n, i);
    } finally {
      rt.p = c, ct.T = u;
    }
  }
  function XS(t, e, n, i) {
    var u = ct.T;
    ct.T = null;
    var c = rt.p;
    try {
      rt.p = 8, Qf(t, e, n, i);
    } finally {
      rt.p = c, ct.T = u;
    }
  }
  function Qf(t, e, n, i) {
    if (da) {
      var u = Kf(i);
      if (u === null)
        Tf(
          t,
          e,
          i,
          _c,
          n
        ), Im(t, i);
      else if (GS(
        u,
        t,
        e,
        n,
        i
      ))
        i.stopPropagation();
      else if (Im(t, i), e & 4 && -1 < ZS.indexOf(t)) {
        for (; u !== null; ) {
          var c = cl(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var h = Yn(c.pendingLanes);
                  if (h !== 0) {
                    var S = c;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; h; ) {
                      var M = 1 << 31 - Ne(h);
                      S.entanglements[1] |= M, h &= ~M;
                    }
                    Bn(c), (Vt & 6) === 0 && (cc = _e() + 500, fu(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Jl(c, 2), S !== null && Ue(S, c, 2), fc(), Gf(c, 2);
            }
          if (c = Kf(i), c === null && Tf(
            t,
            e,
            i,
            _c,
            n
          ), c === u) break;
          u = c;
        }
        u !== null && i.stopPropagation();
      } else
        Tf(
          t,
          e,
          i,
          null,
          n
        );
    }
  }
  function Kf(t) {
    return t = Ar(t), $f(t);
  }
  var _c = null;
  function $f(t) {
    if (_c = null, t = jn(t), t !== null) {
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
    return _c = t, null;
  }
  function Jm(t) {
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
        switch (mr()) {
          case Ju:
            return 2;
          case Iu:
            return 8;
          case bi:
          case yr:
            return 32;
          case ku:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jf = !1, Ol = null, Dl = null, Rl = null, xu = /* @__PURE__ */ new Map(), Su = /* @__PURE__ */ new Map(), Hl = [], ZS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Im(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ol = null;
        break;
      case "dragenter":
      case "dragleave":
        Dl = null;
        break;
      case "mouseover":
      case "mouseout":
        Rl = null;
        break;
      case "pointerover":
      case "pointerout":
        xu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Su.delete(e.pointerId);
    }
  }
  function bu(t, e, n, i, u, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: c,
      targetContainers: [u]
    }, e !== null && (e = cl(e), e !== null && Km(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function GS(t, e, n, i, u) {
    switch (e) {
      case "focusin":
        return Ol = bu(
          Ol,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "dragenter":
        return Dl = bu(
          Dl,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "mouseover":
        return Rl = bu(
          Rl,
          t,
          e,
          n,
          i,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return xu.set(
          c,
          bu(
            xu.get(c) || null,
            t,
            e,
            n,
            i,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, Su.set(
          c,
          bu(
            Su.get(c) || null,
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
  function km(t) {
    var e = jn(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              $m(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(n), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              $m(n);
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
  function wc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Kf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        Mr = i, n.target.dispatchEvent(i), Mr = null;
      } else
        return e = cl(n), e !== null && Km(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Fm(t, e, n) {
    wc(t) && n.delete(e);
  }
  function QS() {
    Jf = !1, Ol !== null && wc(Ol) && (Ol = null), Dl !== null && wc(Dl) && (Dl = null), Rl !== null && wc(Rl) && (Rl = null), xu.forEach(Fm), Su.forEach(Fm);
  }
  function Nc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Jf || (Jf = !0, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      QS
    )));
  }
  var Tc = null;
  function Wm(t) {
    Tc !== t && (Tc = t, l.unstable_scheduleCallback(
      l.unstable_NormalPriority,
      function() {
        Tc === t && (Tc = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], i = t[e + 1], u = t[e + 2];
          if (typeof i != "function") {
            if ($f(i || n) === null)
              continue;
            break;
          }
          var c = cl(n);
          c !== null && (t.splice(e, 3), e -= 3, zs(
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
  function ha(t) {
    function e(M) {
      return Nc(M, t);
    }
    Ol !== null && Nc(Ol, t), Dl !== null && Nc(Dl, t), Rl !== null && Nc(Rl, t), xu.forEach(e), Su.forEach(e);
    for (var n = 0; n < Hl.length; n++) {
      var i = Hl[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Hl.length && (n = Hl[0], n.blockedOn === null); )
      km(n), n.blockedOn === null && Hl.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var u = n[i], c = n[i + 1], h = u[Se] || null;
        if (typeof c == "function")
          h || Wm(n);
        else if (h) {
          var S = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, h = c[Se] || null)
              S = h.formAction;
            else if ($f(u) !== null) continue;
          } else S = h.action;
          typeof S == "function" ? n[i + 1] = S : (n.splice(i, 3), i -= 3), Wm(n);
        }
      }
  }
  function Pm() {
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
  function If(t) {
    this._internalRoot = t;
  }
  Cc.prototype.render = If.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, i = Qe();
    Gm(n, i, t, e, null, null);
  }, Cc.prototype.unmount = If.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Gm(t.current, 2, null, t, null, null), fc(), e[ol] = null;
    }
  };
  function Cc(t) {
    this._internalRoot = t;
  }
  Cc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = eo();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Hl.length && e !== 0 && e < Hl[n].priority; n++) ;
      Hl.splice(n, 0, t), n === 0 && km(t);
    }
  };
  var ty = a.version;
  if (ty !== "19.3.0")
    throw Error(
      r(
        527,
        ty,
        "19.3.0"
      )
    );
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = x(e), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var KS = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ct,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zc.isDisabled && zc.supportsFiber)
      try {
        ql = zc.inject(
          KS
        ), we = zc;
      } catch {
      }
  }
  return _u.createRoot = function(t, e) {
    if (!s(t)) throw Error(r(299));
    var n = !1, i = "", u = Z0, c = G0, h = Q0;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = Xm(
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
      Pm
    ), t[ol] = e.current, Nf(t), new If(e);
  }, _u.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(r(299));
    var i = !1, u = "", c = Z0, h = G0, S = Q0, M = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (M = n.formState)), e = Xm(
      t,
      1,
      !0,
      e,
      n ?? null,
      i,
      u,
      M,
      c,
      h,
      S,
      Pm
    ), e.context = Zm(null), n = e.current, i = Qe(), i = Ti(i), u = pl(i), u.callback = null, xl(n, u, i), n = i, e.current.lanes = n, Zl(e, n), Bn(e), t[ol] = e.current, Nf(t), new Cc(e);
  }, _u.version = "19.3.0", _u;
}
var sy;
function eb() {
  if (sy) return Wf.exports;
  sy = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (a) {
        console.error(a);
      }
  }
  return l(), Wf.exports = tb(), Wf.exports;
}
var nb = eb();
const lb = /* @__PURE__ */ Md(nb), ib = {
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
}, ab = {
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
}, ub = {
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
}, ob = {
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
}, cb = {
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
}, fy = {
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
}, rb = {
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
}, sb = {
  "innova-medical": ib,
  "mrke-3d": ab,
  "live-concert-sync": ub,
  collaragent: ob,
  stratawright: cb,
  "ieee-vr": fy,
  "ieee-vr-conflict": fy,
  "virtual-principal": rb
};
function fb(l) {
  return sb[l] || null;
}
class db {
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
    a === "reading" ? (document.body.classList.remove("is-whiteboard-active"), this.restoreElementsToReading()) : (document.body.classList.add("is-whiteboard-active"), this.moveElementsToWhiteboard()), this.updateToggleButton();
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
    this.toggleButton && (this.toggleButton.textContent = this.currentMode === "whiteboard" ? "Reading View" : "Whiteboard View", this.toggleButton.setAttribute(
      "aria-label",
      this.currentMode === "whiteboard" ? "Switch to linear reading layout" : "Switch to interactive spatial whiteboard"
    ));
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
var hb = { value: () => {
} };
function tr() {
  for (var l = 0, a = arguments.length, o = {}, r; l < a; ++l) {
    if (!(r = arguments[l] + "") || r in o || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    o[r] = [];
  }
  return new Vc(o);
}
function Vc(l) {
  this._ = l;
}
function gb(l, a) {
  return l.trim().split(/^|\s+/).map(function(o) {
    var r = "", s = o.indexOf(".");
    if (s >= 0 && (r = o.slice(s + 1), o = o.slice(0, s)), o && !a.hasOwnProperty(o)) throw new Error("unknown type: " + o);
    return { type: o, name: r };
  });
}
Vc.prototype = tr.prototype = {
  constructor: Vc,
  on: function(l, a) {
    var o = this._, r = gb(l + "", o), s, f = -1, d = r.length;
    if (arguments.length < 2) {
      for (; ++f < d; ) if ((s = (l = r[f]).type) && (s = mb(o[s], l.name))) return s;
      return;
    }
    if (a != null && typeof a != "function") throw new Error("invalid callback: " + a);
    for (; ++f < d; )
      if (s = (l = r[f]).type) o[s] = dy(o[s], l.name, a);
      else if (a == null) for (s in o) o[s] = dy(o[s], l.name, null);
    return this;
  },
  copy: function() {
    var l = {}, a = this._;
    for (var o in a) l[o] = a[o].slice();
    return new Vc(l);
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
function mb(l, a) {
  for (var o = 0, r = l.length, s; o < r; ++o)
    if ((s = l[o]).name === a)
      return s.value;
}
function dy(l, a, o) {
  for (var r = 0, s = l.length; r < s; ++r)
    if (l[r].name === a) {
      l[r] = hb, l = l.slice(0, r).concat(l.slice(r + 1));
      break;
    }
  return o != null && l.push({ name: a, value: o }), l;
}
var md = "http://www.w3.org/1999/xhtml";
const hy = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: md,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function er(l) {
  var a = l += "", o = a.indexOf(":");
  return o >= 0 && (a = l.slice(0, o)) !== "xmlns" && (l = l.slice(o + 1)), hy.hasOwnProperty(a) ? { space: hy[a], local: l } : l;
}
function yb(l) {
  return function() {
    var a = this.ownerDocument, o = this.namespaceURI;
    return o === md && a.documentElement.namespaceURI === md ? a.createElement(l) : a.createElementNS(o, l);
  };
}
function vb(l) {
  return function() {
    return this.ownerDocument.createElementNS(l.space, l.local);
  };
}
function wv(l) {
  var a = er(l);
  return (a.local ? vb : yb)(a);
}
function pb() {
}
function Ad(l) {
  return l == null ? pb : function() {
    return this.querySelector(l);
  };
}
function xb(l) {
  typeof l != "function" && (l = Ad(l));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var f = a[s], d = f.length, g = r[s] = new Array(d), v, x, y = 0; y < d; ++y)
      (v = f[y]) && (x = l.call(v, v.__data__, y, f)) && ("__data__" in v && (x.__data__ = v.__data__), g[y] = x);
  return new Je(r, this._parents);
}
function Sb(l) {
  return l == null ? [] : Array.isArray(l) ? l : Array.from(l);
}
function bb() {
  return [];
}
function Nv(l) {
  return l == null ? bb : function() {
    return this.querySelectorAll(l);
  };
}
function Eb(l) {
  return function() {
    return Sb(l.apply(this, arguments));
  };
}
function _b(l) {
  typeof l == "function" ? l = Eb(l) : l = Nv(l);
  for (var a = this._groups, o = a.length, r = [], s = [], f = 0; f < o; ++f)
    for (var d = a[f], g = d.length, v, x = 0; x < g; ++x)
      (v = d[x]) && (r.push(l.call(v, v.__data__, x, d)), s.push(v));
  return new Je(r, s);
}
function Tv(l) {
  return function() {
    return this.matches(l);
  };
}
function Cv(l) {
  return function(a) {
    return a.matches(l);
  };
}
var wb = Array.prototype.find;
function Nb(l) {
  return function() {
    return wb.call(this.children, l);
  };
}
function Tb() {
  return this.firstElementChild;
}
function Cb(l) {
  return this.select(l == null ? Tb : Nb(typeof l == "function" ? l : Cv(l)));
}
var zb = Array.prototype.filter;
function Mb() {
  return Array.from(this.children);
}
function Ab(l) {
  return function() {
    return zb.call(this.children, l);
  };
}
function Ob(l) {
  return this.selectAll(l == null ? Mb : Ab(typeof l == "function" ? l : Cv(l)));
}
function Db(l) {
  typeof l != "function" && (l = Tv(l));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var f = a[s], d = f.length, g = r[s] = [], v, x = 0; x < d; ++x)
      (v = f[x]) && l.call(v, v.__data__, x, f) && g.push(v);
  return new Je(r, this._parents);
}
function zv(l) {
  return new Array(l.length);
}
function Rb() {
  return new Je(this._enter || this._groups.map(zv), this._parents);
}
function Zc(l, a) {
  this.ownerDocument = l.ownerDocument, this.namespaceURI = l.namespaceURI, this._next = null, this._parent = l, this.__data__ = a;
}
Zc.prototype = {
  constructor: Zc,
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
function Hb(l) {
  return function() {
    return l;
  };
}
function Bb(l, a, o, r, s, f) {
  for (var d = 0, g, v = a.length, x = f.length; d < x; ++d)
    (g = a[d]) ? (g.__data__ = f[d], r[d] = g) : o[d] = new Zc(l, f[d]);
  for (; d < v; ++d)
    (g = a[d]) && (s[d] = g);
}
function Ub(l, a, o, r, s, f, d) {
  var g, v, x = /* @__PURE__ */ new Map(), y = a.length, m = f.length, p = new Array(y), b;
  for (g = 0; g < y; ++g)
    (v = a[g]) && (p[g] = b = d.call(v, v.__data__, g, a) + "", x.has(b) ? s[g] = v : x.set(b, v));
  for (g = 0; g < m; ++g)
    b = d.call(l, f[g], g, f) + "", (v = x.get(b)) ? (r[g] = v, v.__data__ = f[g], x.delete(b)) : o[g] = new Zc(l, f[g]);
  for (g = 0; g < y; ++g)
    (v = a[g]) && x.get(p[g]) === v && (s[g] = v);
}
function Lb(l) {
  return l.__data__;
}
function Vb(l, a) {
  if (!arguments.length) return Array.from(this, Lb);
  var o = a ? Ub : Bb, r = this._parents, s = this._groups;
  typeof l != "function" && (l = Hb(l));
  for (var f = s.length, d = new Array(f), g = new Array(f), v = new Array(f), x = 0; x < f; ++x) {
    var y = r[x], m = s[x], p = m.length, b = Yb(l.call(y, y && y.__data__, x, r)), E = b.length, A = g[x] = new Array(E), N = d[x] = new Array(E), w = v[x] = new Array(p);
    o(y, m, A, N, w, b, a);
    for (var U = 0, _ = 0, C, X; U < E; ++U)
      if (C = A[U]) {
        for (U >= _ && (_ = U + 1); !(X = N[_]) && ++_ < E; ) ;
        C._next = X || null;
      }
  }
  return d = new Je(d, r), d._enter = g, d._exit = v, d;
}
function Yb(l) {
  return typeof l == "object" && "length" in l ? l : Array.from(l);
}
function jb() {
  return new Je(this._exit || this._groups.map(zv), this._parents);
}
function qb(l, a, o) {
  var r = this.enter(), s = this, f = this.exit();
  return typeof l == "function" ? (r = l(r), r && (r = r.selection())) : r = r.append(l + ""), a != null && (s = a(s), s && (s = s.selection())), o == null ? f.remove() : o(f), r && s ? r.merge(s).order() : s;
}
function Xb(l) {
  for (var a = l.selection ? l.selection() : l, o = this._groups, r = a._groups, s = o.length, f = r.length, d = Math.min(s, f), g = new Array(s), v = 0; v < d; ++v)
    for (var x = o[v], y = r[v], m = x.length, p = g[v] = new Array(m), b, E = 0; E < m; ++E)
      (b = x[E] || y[E]) && (p[E] = b);
  for (; v < s; ++v)
    g[v] = o[v];
  return new Je(g, this._parents);
}
function Zb() {
  for (var l = this._groups, a = -1, o = l.length; ++a < o; )
    for (var r = l[a], s = r.length - 1, f = r[s], d; --s >= 0; )
      (d = r[s]) && (f && d.compareDocumentPosition(f) ^ 4 && f.parentNode.insertBefore(d, f), f = d);
  return this;
}
function Gb(l) {
  l || (l = Qb);
  function a(m, p) {
    return m && p ? l(m.__data__, p.__data__) : !m - !p;
  }
  for (var o = this._groups, r = o.length, s = new Array(r), f = 0; f < r; ++f) {
    for (var d = o[f], g = d.length, v = s[f] = new Array(g), x, y = 0; y < g; ++y)
      (x = d[y]) && (v[y] = x);
    v.sort(a);
  }
  return new Je(s, this._parents).order();
}
function Qb(l, a) {
  return l < a ? -1 : l > a ? 1 : l >= a ? 0 : NaN;
}
function Kb() {
  var l = arguments[0];
  return arguments[0] = this, l.apply(null, arguments), this;
}
function $b() {
  return Array.from(this);
}
function Jb() {
  for (var l = this._groups, a = 0, o = l.length; a < o; ++a)
    for (var r = l[a], s = 0, f = r.length; s < f; ++s) {
      var d = r[s];
      if (d) return d;
    }
  return null;
}
function Ib() {
  let l = 0;
  for (const a of this) ++l;
  return l;
}
function kb() {
  return !this.node();
}
function Fb(l) {
  for (var a = this._groups, o = 0, r = a.length; o < r; ++o)
    for (var s = a[o], f = 0, d = s.length, g; f < d; ++f)
      (g = s[f]) && l.call(g, g.__data__, f, s);
  return this;
}
function Wb(l) {
  return function() {
    this.removeAttribute(l);
  };
}
function Pb(l) {
  return function() {
    this.removeAttributeNS(l.space, l.local);
  };
}
function t2(l, a) {
  return function() {
    this.setAttribute(l, a);
  };
}
function e2(l, a) {
  return function() {
    this.setAttributeNS(l.space, l.local, a);
  };
}
function n2(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    o == null ? this.removeAttribute(l) : this.setAttribute(l, o);
  };
}
function l2(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    o == null ? this.removeAttributeNS(l.space, l.local) : this.setAttributeNS(l.space, l.local, o);
  };
}
function i2(l, a) {
  var o = er(l);
  if (arguments.length < 2) {
    var r = this.node();
    return o.local ? r.getAttributeNS(o.space, o.local) : r.getAttribute(o);
  }
  return this.each((a == null ? o.local ? Pb : Wb : typeof a == "function" ? o.local ? l2 : n2 : o.local ? e2 : t2)(o, a));
}
function Mv(l) {
  return l.ownerDocument && l.ownerDocument.defaultView || l.document && l || l.defaultView;
}
function a2(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function u2(l, a, o) {
  return function() {
    this.style.setProperty(l, a, o);
  };
}
function o2(l, a, o) {
  return function() {
    var r = a.apply(this, arguments);
    r == null ? this.style.removeProperty(l) : this.style.setProperty(l, r, o);
  };
}
function c2(l, a, o) {
  return arguments.length > 1 ? this.each((a == null ? a2 : typeof a == "function" ? o2 : u2)(l, a, o ?? "")) : pa(this.node(), l);
}
function pa(l, a) {
  return l.style.getPropertyValue(a) || Mv(l).getComputedStyle(l, null).getPropertyValue(a);
}
function r2(l) {
  return function() {
    delete this[l];
  };
}
function s2(l, a) {
  return function() {
    this[l] = a;
  };
}
function f2(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    o == null ? delete this[l] : this[l] = o;
  };
}
function d2(l, a) {
  return arguments.length > 1 ? this.each((a == null ? r2 : typeof a == "function" ? f2 : s2)(l, a)) : this.node()[l];
}
function Av(l) {
  return l.trim().split(/^|\s+/);
}
function Od(l) {
  return l.classList || new Ov(l);
}
function Ov(l) {
  this._node = l, this._names = Av(l.getAttribute("class") || "");
}
Ov.prototype = {
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
function Dv(l, a) {
  for (var o = Od(l), r = -1, s = a.length; ++r < s; ) o.add(a[r]);
}
function Rv(l, a) {
  for (var o = Od(l), r = -1, s = a.length; ++r < s; ) o.remove(a[r]);
}
function h2(l) {
  return function() {
    Dv(this, l);
  };
}
function g2(l) {
  return function() {
    Rv(this, l);
  };
}
function m2(l, a) {
  return function() {
    (a.apply(this, arguments) ? Dv : Rv)(this, l);
  };
}
function y2(l, a) {
  var o = Av(l + "");
  if (arguments.length < 2) {
    for (var r = Od(this.node()), s = -1, f = o.length; ++s < f; ) if (!r.contains(o[s])) return !1;
    return !0;
  }
  return this.each((typeof a == "function" ? m2 : a ? h2 : g2)(o, a));
}
function v2() {
  this.textContent = "";
}
function p2(l) {
  return function() {
    this.textContent = l;
  };
}
function x2(l) {
  return function() {
    var a = l.apply(this, arguments);
    this.textContent = a ?? "";
  };
}
function S2(l) {
  return arguments.length ? this.each(l == null ? v2 : (typeof l == "function" ? x2 : p2)(l)) : this.node().textContent;
}
function b2() {
  this.innerHTML = "";
}
function E2(l) {
  return function() {
    this.innerHTML = l;
  };
}
function _2(l) {
  return function() {
    var a = l.apply(this, arguments);
    this.innerHTML = a ?? "";
  };
}
function w2(l) {
  return arguments.length ? this.each(l == null ? b2 : (typeof l == "function" ? _2 : E2)(l)) : this.node().innerHTML;
}
function N2() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function T2() {
  return this.each(N2);
}
function C2() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function z2() {
  return this.each(C2);
}
function M2(l) {
  var a = typeof l == "function" ? l : wv(l);
  return this.select(function() {
    return this.appendChild(a.apply(this, arguments));
  });
}
function A2() {
  return null;
}
function O2(l, a) {
  var o = typeof l == "function" ? l : wv(l), r = a == null ? A2 : typeof a == "function" ? a : Ad(a);
  return this.select(function() {
    return this.insertBefore(o.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function D2() {
  var l = this.parentNode;
  l && l.removeChild(this);
}
function R2() {
  return this.each(D2);
}
function H2() {
  var l = this.cloneNode(!1), a = this.parentNode;
  return a ? a.insertBefore(l, this.nextSibling) : l;
}
function B2() {
  var l = this.cloneNode(!0), a = this.parentNode;
  return a ? a.insertBefore(l, this.nextSibling) : l;
}
function U2(l) {
  return this.select(l ? B2 : H2);
}
function L2(l) {
  return arguments.length ? this.property("__data__", l) : this.node().__data__;
}
function V2(l) {
  return function(a) {
    l.call(this, a, this.__data__);
  };
}
function Y2(l) {
  return l.trim().split(/^|\s+/).map(function(a) {
    var o = "", r = a.indexOf(".");
    return r >= 0 && (o = a.slice(r + 1), a = a.slice(0, r)), { type: a, name: o };
  });
}
function j2(l) {
  return function() {
    var a = this.__on;
    if (a) {
      for (var o = 0, r = -1, s = a.length, f; o < s; ++o)
        f = a[o], (!l.type || f.type === l.type) && f.name === l.name ? this.removeEventListener(f.type, f.listener, f.options) : a[++r] = f;
      ++r ? a.length = r : delete this.__on;
    }
  };
}
function q2(l, a, o) {
  return function() {
    var r = this.__on, s, f = V2(a);
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
function X2(l, a, o) {
  var r = Y2(l + ""), s, f = r.length, d;
  if (arguments.length < 2) {
    var g = this.node().__on;
    if (g) {
      for (var v = 0, x = g.length, y; v < x; ++v)
        for (s = 0, y = g[v]; s < f; ++s)
          if ((d = r[s]).type === y.type && d.name === y.name)
            return y.value;
    }
    return;
  }
  for (g = a ? q2 : j2, s = 0; s < f; ++s) this.each(g(r[s], a, o));
  return this;
}
function Hv(l, a, o) {
  var r = Mv(l), s = r.CustomEvent;
  typeof s == "function" ? s = new s(a, o) : (s = r.document.createEvent("Event"), o ? (s.initEvent(a, o.bubbles, o.cancelable), s.detail = o.detail) : s.initEvent(a, !1, !1)), l.dispatchEvent(s);
}
function Z2(l, a) {
  return function() {
    return Hv(this, l, a);
  };
}
function G2(l, a) {
  return function() {
    return Hv(this, l, a.apply(this, arguments));
  };
}
function Q2(l, a) {
  return this.each((typeof a == "function" ? G2 : Z2)(l, a));
}
function* K2() {
  for (var l = this._groups, a = 0, o = l.length; a < o; ++a)
    for (var r = l[a], s = 0, f = r.length, d; s < f; ++s)
      (d = r[s]) && (yield d);
}
var Bv = [null];
function Je(l, a) {
  this._groups = l, this._parents = a;
}
function ju() {
  return new Je([[document.documentElement]], Bv);
}
function $2() {
  return this;
}
Je.prototype = ju.prototype = {
  constructor: Je,
  select: xb,
  selectAll: _b,
  selectChild: Cb,
  selectChildren: Ob,
  filter: Db,
  data: Vb,
  enter: Rb,
  exit: jb,
  join: qb,
  merge: Xb,
  selection: $2,
  order: Zb,
  sort: Gb,
  call: Kb,
  nodes: $b,
  node: Jb,
  size: Ib,
  empty: kb,
  each: Fb,
  attr: i2,
  style: c2,
  property: d2,
  classed: y2,
  text: S2,
  html: w2,
  raise: T2,
  lower: z2,
  append: M2,
  insert: O2,
  remove: R2,
  clone: U2,
  datum: L2,
  on: X2,
  dispatch: Q2,
  [Symbol.iterator]: K2
};
function $e(l) {
  return typeof l == "string" ? new Je([[document.querySelector(l)]], [document.documentElement]) : new Je([[l]], Bv);
}
function J2(l) {
  let a;
  for (; a = l.sourceEvent; ) l = a;
  return l;
}
function mn(l, a) {
  if (l = J2(l), a === void 0 && (a = l.currentTarget), a) {
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
const I2 = { passive: !1 }, Au = { capture: !0, passive: !1 };
function nd(l) {
  l.stopImmediatePropagation();
}
function ya(l) {
  l.preventDefault(), l.stopImmediatePropagation();
}
function Uv(l) {
  var a = l.document.documentElement, o = $e(l).on("dragstart.drag", ya, Au);
  "onselectstart" in a ? o.on("selectstart.drag", ya, Au) : (a.__noselect = a.style.MozUserSelect, a.style.MozUserSelect = "none");
}
function Lv(l, a) {
  var o = l.document.documentElement, r = $e(l).on("dragstart.drag", null);
  a && (r.on("click.drag", ya, Au), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in o ? r.on("selectstart.drag", null) : (o.style.MozUserSelect = o.__noselect, delete o.__noselect);
}
const Mc = (l) => () => l;
function yd(l, {
  sourceEvent: a,
  subject: o,
  target: r,
  identifier: s,
  active: f,
  x: d,
  y: g,
  dx: v,
  dy: x,
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
    dy: { value: x, enumerable: !0, configurable: !0 },
    _: { value: y }
  });
}
yd.prototype.on = function() {
  var l = this._.on.apply(this._, arguments);
  return l === this._ ? this : l;
};
function k2(l) {
  return !l.ctrlKey && !l.button;
}
function F2() {
  return this.parentNode;
}
function W2(l, a) {
  return a ?? { x: l.x, y: l.y };
}
function P2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Vv() {
  var l = k2, a = F2, o = W2, r = P2, s = {}, f = tr("start", "drag", "end"), d = 0, g, v, x, y, m = 0;
  function p(C) {
    C.on("mousedown.drag", b).filter(r).on("touchstart.drag", N).on("touchmove.drag", w, I2).on("touchend.drag touchcancel.drag", U).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function b(C, X) {
    if (!(y || !l.call(this, C, X))) {
      var B = _(this, a.call(this, C, X), C, X, "mouse");
      B && ($e(C.view).on("mousemove.drag", E, Au).on("mouseup.drag", A, Au), Uv(C.view), nd(C), x = !1, g = C.clientX, v = C.clientY, B("start", C));
    }
  }
  function E(C) {
    if (ya(C), !x) {
      var X = C.clientX - g, B = C.clientY - v;
      x = X * X + B * B > m;
    }
    s.mouse("drag", C);
  }
  function A(C) {
    $e(C.view).on("mousemove.drag mouseup.drag", null), Lv(C.view, x), ya(C), s.mouse("end", C);
  }
  function N(C, X) {
    if (l.call(this, C, X)) {
      var B = C.changedTouches, R = a.call(this, C, X), G = B.length, I, ot;
      for (I = 0; I < G; ++I)
        (ot = _(this, R, C, X, B[I].identifier, B[I])) && (nd(C), ot("start", C, B[I]));
    }
  }
  function w(C) {
    var X = C.changedTouches, B = X.length, R, G;
    for (R = 0; R < B; ++R)
      (G = s[X[R].identifier]) && (ya(C), G("drag", C, X[R]));
  }
  function U(C) {
    var X = C.changedTouches, B = X.length, R, G;
    for (y && clearTimeout(y), y = setTimeout(function() {
      y = null;
    }, 500), R = 0; R < B; ++R)
      (G = s[X[R].identifier]) && (nd(C), G("end", C, X[R]));
  }
  function _(C, X, B, R, G, I) {
    var ot = f.copy(), tt = mn(I || B, X), at, lt, z;
    if ((z = o.call(C, new yd("beforestart", {
      sourceEvent: B,
      target: p,
      identifier: G,
      active: d,
      x: tt[0],
      y: tt[1],
      dx: 0,
      dy: 0,
      dispatch: ot
    }), R)) != null)
      return at = z.x - tt[0] || 0, lt = z.y - tt[1] || 0, function V(O, H, q) {
        var $ = tt, P;
        switch (O) {
          case "start":
            s[G] = V, P = d++;
            break;
          case "end":
            delete s[G], --d;
          // falls through
          case "drag":
            tt = mn(q || H, X), P = d;
            break;
        }
        ot.call(
          O,
          C,
          new yd(O, {
            sourceEvent: H,
            subject: z,
            target: p,
            identifier: G,
            active: P,
            x: tt[0] + at,
            y: tt[1] + lt,
            dx: tt[0] - $[0],
            dy: tt[1] - $[1],
            dispatch: ot
          }),
          R
        );
      };
  }
  return p.filter = function(C) {
    return arguments.length ? (l = typeof C == "function" ? C : Mc(!!C), p) : l;
  }, p.container = function(C) {
    return arguments.length ? (a = typeof C == "function" ? C : Mc(C), p) : a;
  }, p.subject = function(C) {
    return arguments.length ? (o = typeof C == "function" ? C : Mc(C), p) : o;
  }, p.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Mc(!!C), p) : r;
  }, p.on = function() {
    var C = f.on.apply(f, arguments);
    return C === f ? p : C;
  }, p.clickDistance = function(C) {
    return arguments.length ? (m = (C = +C) * C, p) : Math.sqrt(m);
  }, p;
}
function Dd(l, a, o) {
  l.prototype = a.prototype = o, o.constructor = l;
}
function Yv(l, a) {
  var o = Object.create(l.prototype);
  for (var r in a) o[r] = a[r];
  return o;
}
function qu() {
}
var Ou = 0.7, Gc = 1 / Ou, va = "\\s*([+-]?\\d+)\\s*", Du = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", tE = /^#([0-9a-f]{3,8})$/, eE = new RegExp(`^rgb\\(${va},${va},${va}\\)$`), nE = new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`), lE = new RegExp(`^rgba\\(${va},${va},${va},${Du}\\)$`), iE = new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${Du}\\)$`), aE = new RegExp(`^hsl\\(${Du},${Ln},${Ln}\\)$`), uE = new RegExp(`^hsla\\(${Du},${Ln},${Ln},${Du}\\)$`), gy = {
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
Dd(qu, yi, {
  copy(l) {
    return Object.assign(new this.constructor(), this, l);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: my,
  // Deprecated! Use color.formatHex.
  formatHex: my,
  formatHex8: oE,
  formatHsl: cE,
  formatRgb: yy,
  toString: yy
});
function my() {
  return this.rgb().formatHex();
}
function oE() {
  return this.rgb().formatHex8();
}
function cE() {
  return jv(this).formatHsl();
}
function yy() {
  return this.rgb().formatRgb();
}
function yi(l) {
  var a, o;
  return l = (l + "").trim().toLowerCase(), (a = tE.exec(l)) ? (o = a[1].length, a = parseInt(a[1], 16), o === 6 ? vy(a) : o === 3 ? new Le(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : o === 8 ? Ac(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : o === 4 ? Ac(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = eE.exec(l)) ? new Le(a[1], a[2], a[3], 1) : (a = nE.exec(l)) ? new Le(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = lE.exec(l)) ? Ac(a[1], a[2], a[3], a[4]) : (a = iE.exec(l)) ? Ac(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = aE.exec(l)) ? Sy(a[1], a[2] / 100, a[3] / 100, 1) : (a = uE.exec(l)) ? Sy(a[1], a[2] / 100, a[3] / 100, a[4]) : gy.hasOwnProperty(l) ? vy(gy[l]) : l === "transparent" ? new Le(NaN, NaN, NaN, 0) : null;
}
function vy(l) {
  return new Le(l >> 16 & 255, l >> 8 & 255, l & 255, 1);
}
function Ac(l, a, o, r) {
  return r <= 0 && (l = a = o = NaN), new Le(l, a, o, r);
}
function rE(l) {
  return l instanceof qu || (l = yi(l)), l ? (l = l.rgb(), new Le(l.r, l.g, l.b, l.opacity)) : new Le();
}
function vd(l, a, o, r) {
  return arguments.length === 1 ? rE(l) : new Le(l, a, o, r ?? 1);
}
function Le(l, a, o, r) {
  this.r = +l, this.g = +a, this.b = +o, this.opacity = +r;
}
Dd(Le, vd, Yv(qu, {
  brighter(l) {
    return l = l == null ? Gc : Math.pow(Gc, l), new Le(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? Ou : Math.pow(Ou, l), new Le(this.r * l, this.g * l, this.b * l, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Le(gi(this.r), gi(this.g), gi(this.b), Qc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: py,
  // Deprecated! Use color.formatHex.
  formatHex: py,
  formatHex8: sE,
  formatRgb: xy,
  toString: xy
}));
function py() {
  return `#${hi(this.r)}${hi(this.g)}${hi(this.b)}`;
}
function sE() {
  return `#${hi(this.r)}${hi(this.g)}${hi(this.b)}${hi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xy() {
  const l = Qc(this.opacity);
  return `${l === 1 ? "rgb(" : "rgba("}${gi(this.r)}, ${gi(this.g)}, ${gi(this.b)}${l === 1 ? ")" : `, ${l})`}`;
}
function Qc(l) {
  return isNaN(l) ? 1 : Math.max(0, Math.min(1, l));
}
function gi(l) {
  return Math.max(0, Math.min(255, Math.round(l) || 0));
}
function hi(l) {
  return l = gi(l), (l < 16 ? "0" : "") + l.toString(16);
}
function Sy(l, a, o, r) {
  return r <= 0 ? l = a = o = NaN : o <= 0 || o >= 1 ? l = a = NaN : a <= 0 && (l = NaN), new yn(l, a, o, r);
}
function jv(l) {
  if (l instanceof yn) return new yn(l.h, l.s, l.l, l.opacity);
  if (l instanceof qu || (l = yi(l)), !l) return new yn();
  if (l instanceof yn) return l;
  l = l.rgb();
  var a = l.r / 255, o = l.g / 255, r = l.b / 255, s = Math.min(a, o, r), f = Math.max(a, o, r), d = NaN, g = f - s, v = (f + s) / 2;
  return g ? (a === f ? d = (o - r) / g + (o < r) * 6 : o === f ? d = (r - a) / g + 2 : d = (a - o) / g + 4, g /= v < 0.5 ? f + s : 2 - f - s, d *= 60) : g = v > 0 && v < 1 ? 0 : d, new yn(d, g, v, l.opacity);
}
function fE(l, a, o, r) {
  return arguments.length === 1 ? jv(l) : new yn(l, a, o, r ?? 1);
}
function yn(l, a, o, r) {
  this.h = +l, this.s = +a, this.l = +o, this.opacity = +r;
}
Dd(yn, fE, Yv(qu, {
  brighter(l) {
    return l = l == null ? Gc : Math.pow(Gc, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  darker(l) {
    return l = l == null ? Ou : Math.pow(Ou, l), new yn(this.h, this.s, this.l * l, this.opacity);
  },
  rgb() {
    var l = this.h % 360 + (this.h < 0) * 360, a = isNaN(l) || isNaN(this.s) ? 0 : this.s, o = this.l, r = o + (o < 0.5 ? o : 1 - o) * a, s = 2 * o - r;
    return new Le(
      ld(l >= 240 ? l - 240 : l + 120, s, r),
      ld(l, s, r),
      ld(l < 120 ? l + 240 : l - 120, s, r),
      this.opacity
    );
  },
  clamp() {
    return new yn(by(this.h), Oc(this.s), Oc(this.l), Qc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const l = Qc(this.opacity);
    return `${l === 1 ? "hsl(" : "hsla("}${by(this.h)}, ${Oc(this.s) * 100}%, ${Oc(this.l) * 100}%${l === 1 ? ")" : `, ${l})`}`;
  }
}));
function by(l) {
  return l = (l || 0) % 360, l < 0 ? l + 360 : l;
}
function Oc(l) {
  return Math.max(0, Math.min(1, l || 0));
}
function ld(l, a, o) {
  return (l < 60 ? a + (o - a) * l / 60 : l < 180 ? o : l < 240 ? a + (o - a) * (240 - l) / 60 : a) * 255;
}
const Rd = (l) => () => l;
function dE(l, a) {
  return function(o) {
    return l + o * a;
  };
}
function hE(l, a, o) {
  return l = Math.pow(l, o), a = Math.pow(a, o) - l, o = 1 / o, function(r) {
    return Math.pow(l + r * a, o);
  };
}
function gE(l) {
  return (l = +l) == 1 ? qv : function(a, o) {
    return o - a ? hE(a, o, l) : Rd(isNaN(a) ? o : a);
  };
}
function qv(l, a) {
  var o = a - l;
  return o ? dE(l, o) : Rd(isNaN(l) ? a : l);
}
const Kc = (function l(a) {
  var o = gE(a);
  function r(s, f) {
    var d = o((s = vd(s)).r, (f = vd(f)).r), g = o(s.g, f.g), v = o(s.b, f.b), x = qv(s.opacity, f.opacity);
    return function(y) {
      return s.r = d(y), s.g = g(y), s.b = v(y), s.opacity = x(y), s + "";
    };
  }
  return r.gamma = l, r;
})(1);
function mE(l, a) {
  a || (a = []);
  var o = l ? Math.min(a.length, l.length) : 0, r = a.slice(), s;
  return function(f) {
    for (s = 0; s < o; ++s) r[s] = l[s] * (1 - f) + a[s] * f;
    return r;
  };
}
function yE(l) {
  return ArrayBuffer.isView(l) && !(l instanceof DataView);
}
function vE(l, a) {
  var o = a ? a.length : 0, r = l ? Math.min(o, l.length) : 0, s = new Array(r), f = new Array(o), d;
  for (d = 0; d < r; ++d) s[d] = zu(l[d], a[d]);
  for (; d < o; ++d) f[d] = a[d];
  return function(g) {
    for (d = 0; d < r; ++d) f[d] = s[d](g);
    return f;
  };
}
function pE(l, a) {
  var o = /* @__PURE__ */ new Date();
  return l = +l, a = +a, function(r) {
    return o.setTime(l * (1 - r) + a * r), o;
  };
}
function Un(l, a) {
  return l = +l, a = +a, function(o) {
    return l * (1 - o) + a * o;
  };
}
function xE(l, a) {
  var o = {}, r = {}, s;
  (l === null || typeof l != "object") && (l = {}), (a === null || typeof a != "object") && (a = {});
  for (s in a)
    s in l ? o[s] = zu(l[s], a[s]) : r[s] = a[s];
  return function(f) {
    for (s in o) r[s] = o[s](f);
    return r;
  };
}
var pd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, id = new RegExp(pd.source, "g");
function SE(l) {
  return function() {
    return l;
  };
}
function bE(l) {
  return function(a) {
    return l(a) + "";
  };
}
function Xv(l, a) {
  var o = pd.lastIndex = id.lastIndex = 0, r, s, f, d = -1, g = [], v = [];
  for (l = l + "", a = a + ""; (r = pd.exec(l)) && (s = id.exec(a)); )
    (f = s.index) > o && (f = a.slice(o, f), g[d] ? g[d] += f : g[++d] = f), (r = r[0]) === (s = s[0]) ? g[d] ? g[d] += s : g[++d] = s : (g[++d] = null, v.push({ i: d, x: Un(r, s) })), o = id.lastIndex;
  return o < a.length && (f = a.slice(o), g[d] ? g[d] += f : g[++d] = f), g.length < 2 ? v[0] ? bE(v[0].x) : SE(a) : (a = v.length, function(x) {
    for (var y = 0, m; y < a; ++y) g[(m = v[y]).i] = m.x(x);
    return g.join("");
  });
}
function zu(l, a) {
  var o = typeof a, r;
  return a == null || o === "boolean" ? Rd(a) : (o === "number" ? Un : o === "string" ? (r = yi(a)) ? (a = r, Kc) : Xv : a instanceof yi ? Kc : a instanceof Date ? pE : yE(a) ? mE : Array.isArray(a) ? vE : typeof a.valueOf != "function" && typeof a.toString != "function" || isNaN(a) ? xE : Un)(l, a);
}
var Ey = 180 / Math.PI, xd = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zv(l, a, o, r, s, f) {
  var d, g, v;
  return (d = Math.sqrt(l * l + a * a)) && (l /= d, a /= d), (v = l * o + a * r) && (o -= l * v, r -= a * v), (g = Math.sqrt(o * o + r * r)) && (o /= g, r /= g, v /= g), l * r < a * o && (l = -l, a = -a, v = -v, d = -d), {
    translateX: s,
    translateY: f,
    rotate: Math.atan2(a, l) * Ey,
    skewX: Math.atan(v) * Ey,
    scaleX: d,
    scaleY: g
  };
}
var Dc;
function EE(l) {
  const a = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(l + "");
  return a.isIdentity ? xd : Zv(a.a, a.b, a.c, a.d, a.e, a.f);
}
function _E(l) {
  return l == null || (Dc || (Dc = document.createElementNS("http://www.w3.org/2000/svg", "g")), Dc.setAttribute("transform", l), !(l = Dc.transform.baseVal.consolidate())) ? xd : (l = l.matrix, Zv(l.a, l.b, l.c, l.d, l.e, l.f));
}
function Gv(l, a, o, r) {
  function s(x) {
    return x.length ? x.pop() + " " : "";
  }
  function f(x, y, m, p, b, E) {
    if (x !== m || y !== p) {
      var A = b.push("translate(", null, a, null, o);
      E.push({ i: A - 4, x: Un(x, m) }, { i: A - 2, x: Un(y, p) });
    } else (m || p) && b.push("translate(" + m + a + p + o);
  }
  function d(x, y, m, p) {
    x !== y ? (x - y > 180 ? y += 360 : y - x > 180 && (x += 360), p.push({ i: m.push(s(m) + "rotate(", null, r) - 2, x: Un(x, y) })) : y && m.push(s(m) + "rotate(" + y + r);
  }
  function g(x, y, m, p) {
    x !== y ? p.push({ i: m.push(s(m) + "skewX(", null, r) - 2, x: Un(x, y) }) : y && m.push(s(m) + "skewX(" + y + r);
  }
  function v(x, y, m, p, b, E) {
    if (x !== m || y !== p) {
      var A = b.push(s(b) + "scale(", null, ",", null, ")");
      E.push({ i: A - 4, x: Un(x, m) }, { i: A - 2, x: Un(y, p) });
    } else (m !== 1 || p !== 1) && b.push(s(b) + "scale(" + m + "," + p + ")");
  }
  return function(x, y) {
    var m = [], p = [];
    return x = l(x), y = l(y), f(x.translateX, x.translateY, y.translateX, y.translateY, m, p), d(x.rotate, y.rotate, m, p), g(x.skewX, y.skewX, m, p), v(x.scaleX, x.scaleY, y.scaleX, y.scaleY, m, p), x = y = null, function(b) {
      for (var E = -1, A = p.length, N; ++E < A; ) m[(N = p[E]).i] = N.x(b);
      return m.join("");
    };
  };
}
var wE = Gv(EE, "px, ", "px)", "deg)"), NE = Gv(_E, ", ", ")", ")"), TE = 1e-12;
function _y(l) {
  return ((l = Math.exp(l)) + 1 / l) / 2;
}
function CE(l) {
  return ((l = Math.exp(l)) - 1 / l) / 2;
}
function zE(l) {
  return ((l = Math.exp(2 * l)) - 1) / (l + 1);
}
const Yc = (function l(a, o, r) {
  function s(f, d) {
    var g = f[0], v = f[1], x = f[2], y = d[0], m = d[1], p = d[2], b = y - g, E = m - v, A = b * b + E * E, N, w;
    if (A < TE)
      w = Math.log(p / x) / a, N = function(R) {
        return [
          g + R * b,
          v + R * E,
          x * Math.exp(a * R * w)
        ];
      };
    else {
      var U = Math.sqrt(A), _ = (p * p - x * x + r * A) / (2 * x * o * U), C = (p * p - x * x - r * A) / (2 * p * o * U), X = Math.log(Math.sqrt(_ * _ + 1) - _), B = Math.log(Math.sqrt(C * C + 1) - C);
      w = (B - X) / a, N = function(R) {
        var G = R * w, I = _y(X), ot = x / (o * U) * (I * zE(a * G + X) - CE(X));
        return [
          g + ot * b,
          v + ot * E,
          x * I / _y(a * G + X)
        ];
      };
    }
    return N.duration = w * 1e3 * a / Math.SQRT2, N;
  }
  return s.rho = function(f) {
    var d = Math.max(1e-3, +f), g = d * d, v = g * g;
    return l(d, g, v);
  }, s;
})(Math.SQRT2, 2, 4);
var xa = 0, Tu = 0, wu = 0, Qv = 1e3, $c, Cu, Jc = 0, vi = 0, nr = 0, Ru = typeof performance == "object" && performance.now ? performance : Date, Kv = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(l) {
  setTimeout(l, 17);
};
function Hd() {
  return vi || (Kv(ME), vi = Ru.now() + nr);
}
function ME() {
  vi = 0;
}
function Ic() {
  this._call = this._time = this._next = null;
}
Ic.prototype = $v.prototype = {
  constructor: Ic,
  restart: function(l, a, o) {
    if (typeof l != "function") throw new TypeError("callback is not a function");
    o = (o == null ? Hd() : +o) + (a == null ? 0 : +a), !this._next && Cu !== this && (Cu ? Cu._next = this : $c = this, Cu = this), this._call = l, this._time = o, Sd();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Sd());
  }
};
function $v(l, a, o) {
  var r = new Ic();
  return r.restart(l, a, o), r;
}
function AE() {
  Hd(), ++xa;
  for (var l = $c, a; l; )
    (a = vi - l._time) >= 0 && l._call.call(void 0, a), l = l._next;
  --xa;
}
function wy() {
  vi = (Jc = Ru.now()) + nr, xa = Tu = 0;
  try {
    AE();
  } finally {
    xa = 0, DE(), vi = 0;
  }
}
function OE() {
  var l = Ru.now(), a = l - Jc;
  a > Qv && (nr -= a, Jc = l);
}
function DE() {
  for (var l, a = $c, o, r = 1 / 0; a; )
    a._call ? (r > a._time && (r = a._time), l = a, a = a._next) : (o = a._next, a._next = null, a = l ? l._next = o : $c = o);
  Cu = l, Sd(r);
}
function Sd(l) {
  if (!xa) {
    Tu && (Tu = clearTimeout(Tu));
    var a = l - vi;
    a > 24 ? (l < 1 / 0 && (Tu = setTimeout(wy, l - Ru.now() - nr)), wu && (wu = clearInterval(wu))) : (wu || (Jc = Ru.now(), wu = setInterval(OE, Qv)), xa = 1, Kv(wy));
  }
}
function Ny(l, a, o) {
  var r = new Ic();
  return a = a == null ? 0 : +a, r.restart((s) => {
    r.stop(), l(s + a);
  }, a, o), r;
}
var RE = tr("start", "end", "cancel", "interrupt"), HE = [], Jv = 0, Ty = 1, bd = 2, jc = 3, Cy = 4, Ed = 5, qc = 6;
function lr(l, a, o, r, s, f) {
  var d = l.__transition;
  if (!d) l.__transition = {};
  else if (o in d) return;
  BE(l, o, {
    name: a,
    index: r,
    // For context during callback.
    group: s,
    // For context during callback.
    on: RE,
    tween: HE,
    time: f.time,
    delay: f.delay,
    duration: f.duration,
    ease: f.ease,
    timer: null,
    state: Jv
  });
}
function Bd(l, a) {
  var o = Sn(l, a);
  if (o.state > Jv) throw new Error("too late; already scheduled");
  return o;
}
function Vn(l, a) {
  var o = Sn(l, a);
  if (o.state > jc) throw new Error("too late; already running");
  return o;
}
function Sn(l, a) {
  var o = l.__transition;
  if (!o || !(o = o[a])) throw new Error("transition not found");
  return o;
}
function BE(l, a, o) {
  var r = l.__transition, s;
  r[a] = o, o.timer = $v(f, 0, o.time);
  function f(x) {
    o.state = Ty, o.timer.restart(d, o.delay, o.time), o.delay <= x && d(x - o.delay);
  }
  function d(x) {
    var y, m, p, b;
    if (o.state !== Ty) return v();
    for (y in r)
      if (b = r[y], b.name === o.name) {
        if (b.state === jc) return Ny(d);
        b.state === Cy ? (b.state = qc, b.timer.stop(), b.on.call("interrupt", l, l.__data__, b.index, b.group), delete r[y]) : +y < a && (b.state = qc, b.timer.stop(), b.on.call("cancel", l, l.__data__, b.index, b.group), delete r[y]);
      }
    if (Ny(function() {
      o.state === jc && (o.state = Cy, o.timer.restart(g, o.delay, o.time), g(x));
    }), o.state = bd, o.on.call("start", l, l.__data__, o.index, o.group), o.state === bd) {
      for (o.state = jc, s = new Array(p = o.tween.length), y = 0, m = -1; y < p; ++y)
        (b = o.tween[y].value.call(l, l.__data__, o.index, o.group)) && (s[++m] = b);
      s.length = m + 1;
    }
  }
  function g(x) {
    for (var y = x < o.duration ? o.ease.call(null, x / o.duration) : (o.timer.restart(v), o.state = Ed, 1), m = -1, p = s.length; ++m < p; )
      s[m].call(l, y);
    o.state === Ed && (o.on.call("end", l, l.__data__, o.index, o.group), v());
  }
  function v() {
    o.state = qc, o.timer.stop(), delete r[a];
    for (var x in r) return;
    delete l.__transition;
  }
}
function Xc(l, a) {
  var o = l.__transition, r, s, f = !0, d;
  if (o) {
    a = a == null ? null : a + "";
    for (d in o) {
      if ((r = o[d]).name !== a) {
        f = !1;
        continue;
      }
      s = r.state > bd && r.state < Ed, r.state = qc, r.timer.stop(), r.on.call(s ? "interrupt" : "cancel", l, l.__data__, r.index, r.group), delete o[d];
    }
    f && delete l.__transition;
  }
}
function UE(l) {
  return this.each(function() {
    Xc(this, l);
  });
}
function LE(l, a) {
  var o, r;
  return function() {
    var s = Vn(this, l), f = s.tween;
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
function VE(l, a, o) {
  var r, s;
  if (typeof o != "function") throw new Error();
  return function() {
    var f = Vn(this, l), d = f.tween;
    if (d !== r) {
      s = (r = d).slice();
      for (var g = { name: a, value: o }, v = 0, x = s.length; v < x; ++v)
        if (s[v].name === a) {
          s[v] = g;
          break;
        }
      v === x && s.push(g);
    }
    f.tween = s;
  };
}
function YE(l, a) {
  var o = this._id;
  if (l += "", arguments.length < 2) {
    for (var r = Sn(this.node(), o).tween, s = 0, f = r.length, d; s < f; ++s)
      if ((d = r[s]).name === l)
        return d.value;
    return null;
  }
  return this.each((a == null ? LE : VE)(o, l, a));
}
function Ud(l, a, o) {
  var r = l._id;
  return l.each(function() {
    var s = Vn(this, r);
    (s.value || (s.value = {}))[a] = o.apply(this, arguments);
  }), function(s) {
    return Sn(s, r).value[a];
  };
}
function Iv(l, a) {
  var o;
  return (typeof a == "number" ? Un : a instanceof yi ? Kc : (o = yi(a)) ? (a = o, Kc) : Xv)(l, a);
}
function jE(l) {
  return function() {
    this.removeAttribute(l);
  };
}
function qE(l) {
  return function() {
    this.removeAttributeNS(l.space, l.local);
  };
}
function XE(l, a, o) {
  var r, s = o + "", f;
  return function() {
    var d = this.getAttribute(l);
    return d === s ? null : d === r ? f : f = a(r = d, o);
  };
}
function ZE(l, a, o) {
  var r, s = o + "", f;
  return function() {
    var d = this.getAttributeNS(l.space, l.local);
    return d === s ? null : d === r ? f : f = a(r = d, o);
  };
}
function GE(l, a, o) {
  var r, s, f;
  return function() {
    var d, g = o(this), v;
    return g == null ? void this.removeAttribute(l) : (d = this.getAttribute(l), v = g + "", d === v ? null : d === r && v === s ? f : (s = v, f = a(r = d, g)));
  };
}
function QE(l, a, o) {
  var r, s, f;
  return function() {
    var d, g = o(this), v;
    return g == null ? void this.removeAttributeNS(l.space, l.local) : (d = this.getAttributeNS(l.space, l.local), v = g + "", d === v ? null : d === r && v === s ? f : (s = v, f = a(r = d, g)));
  };
}
function KE(l, a) {
  var o = er(l), r = o === "transform" ? NE : Iv;
  return this.attrTween(l, typeof a == "function" ? (o.local ? QE : GE)(o, r, Ud(this, "attr." + l, a)) : a == null ? (o.local ? qE : jE)(o) : (o.local ? ZE : XE)(o, r, a));
}
function $E(l, a) {
  return function(o) {
    this.setAttribute(l, a.call(this, o));
  };
}
function JE(l, a) {
  return function(o) {
    this.setAttributeNS(l.space, l.local, a.call(this, o));
  };
}
function IE(l, a) {
  var o, r;
  function s() {
    var f = a.apply(this, arguments);
    return f !== r && (o = (r = f) && JE(l, f)), o;
  }
  return s._value = a, s;
}
function kE(l, a) {
  var o, r;
  function s() {
    var f = a.apply(this, arguments);
    return f !== r && (o = (r = f) && $E(l, f)), o;
  }
  return s._value = a, s;
}
function FE(l, a) {
  var o = "attr." + l;
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (a == null) return this.tween(o, null);
  if (typeof a != "function") throw new Error();
  var r = er(l);
  return this.tween(o, (r.local ? IE : kE)(r, a));
}
function WE(l, a) {
  return function() {
    Bd(this, l).delay = +a.apply(this, arguments);
  };
}
function PE(l, a) {
  return a = +a, function() {
    Bd(this, l).delay = a;
  };
}
function t_(l) {
  var a = this._id;
  return arguments.length ? this.each((typeof l == "function" ? WE : PE)(a, l)) : Sn(this.node(), a).delay;
}
function e_(l, a) {
  return function() {
    Vn(this, l).duration = +a.apply(this, arguments);
  };
}
function n_(l, a) {
  return a = +a, function() {
    Vn(this, l).duration = a;
  };
}
function l_(l) {
  var a = this._id;
  return arguments.length ? this.each((typeof l == "function" ? e_ : n_)(a, l)) : Sn(this.node(), a).duration;
}
function i_(l, a) {
  if (typeof a != "function") throw new Error();
  return function() {
    Vn(this, l).ease = a;
  };
}
function a_(l) {
  var a = this._id;
  return arguments.length ? this.each(i_(a, l)) : Sn(this.node(), a).ease;
}
function u_(l, a) {
  return function() {
    var o = a.apply(this, arguments);
    if (typeof o != "function") throw new Error();
    Vn(this, l).ease = o;
  };
}
function o_(l) {
  if (typeof l != "function") throw new Error();
  return this.each(u_(this._id, l));
}
function c_(l) {
  typeof l != "function" && (l = Tv(l));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var f = a[s], d = f.length, g = r[s] = [], v, x = 0; x < d; ++x)
      (v = f[x]) && l.call(v, v.__data__, x, f) && g.push(v);
  return new ul(r, this._parents, this._name, this._id);
}
function r_(l) {
  if (l._id !== this._id) throw new Error();
  for (var a = this._groups, o = l._groups, r = a.length, s = o.length, f = Math.min(r, s), d = new Array(r), g = 0; g < f; ++g)
    for (var v = a[g], x = o[g], y = v.length, m = d[g] = new Array(y), p, b = 0; b < y; ++b)
      (p = v[b] || x[b]) && (m[b] = p);
  for (; g < r; ++g)
    d[g] = a[g];
  return new ul(d, this._parents, this._name, this._id);
}
function s_(l) {
  return (l + "").trim().split(/^|\s+/).every(function(a) {
    var o = a.indexOf(".");
    return o >= 0 && (a = a.slice(0, o)), !a || a === "start";
  });
}
function f_(l, a, o) {
  var r, s, f = s_(a) ? Bd : Vn;
  return function() {
    var d = f(this, l), g = d.on;
    g !== r && (s = (r = g).copy()).on(a, o), d.on = s;
  };
}
function d_(l, a) {
  var o = this._id;
  return arguments.length < 2 ? Sn(this.node(), o).on.on(l) : this.each(f_(o, l, a));
}
function h_(l) {
  return function() {
    var a = this.parentNode;
    for (var o in this.__transition) if (+o !== l) return;
    a && a.removeChild(this);
  };
}
function g_() {
  return this.on("end.remove", h_(this._id));
}
function m_(l) {
  var a = this._name, o = this._id;
  typeof l != "function" && (l = Ad(l));
  for (var r = this._groups, s = r.length, f = new Array(s), d = 0; d < s; ++d)
    for (var g = r[d], v = g.length, x = f[d] = new Array(v), y, m, p = 0; p < v; ++p)
      (y = g[p]) && (m = l.call(y, y.__data__, p, g)) && ("__data__" in y && (m.__data__ = y.__data__), x[p] = m, lr(x[p], a, o, p, x, Sn(y, o)));
  return new ul(f, this._parents, a, o);
}
function y_(l) {
  var a = this._name, o = this._id;
  typeof l != "function" && (l = Nv(l));
  for (var r = this._groups, s = r.length, f = [], d = [], g = 0; g < s; ++g)
    for (var v = r[g], x = v.length, y, m = 0; m < x; ++m)
      if (y = v[m]) {
        for (var p = l.call(y, y.__data__, m, v), b, E = Sn(y, o), A = 0, N = p.length; A < N; ++A)
          (b = p[A]) && lr(b, a, o, A, p, E);
        f.push(p), d.push(y);
      }
  return new ul(f, d, a, o);
}
var v_ = ju.prototype.constructor;
function p_() {
  return new v_(this._groups, this._parents);
}
function x_(l, a) {
  var o, r, s;
  return function() {
    var f = pa(this, l), d = (this.style.removeProperty(l), pa(this, l));
    return f === d ? null : f === o && d === r ? s : s = a(o = f, r = d);
  };
}
function kv(l) {
  return function() {
    this.style.removeProperty(l);
  };
}
function S_(l, a, o) {
  var r, s = o + "", f;
  return function() {
    var d = pa(this, l);
    return d === s ? null : d === r ? f : f = a(r = d, o);
  };
}
function b_(l, a, o) {
  var r, s, f;
  return function() {
    var d = pa(this, l), g = o(this), v = g + "";
    return g == null && (v = g = (this.style.removeProperty(l), pa(this, l))), d === v ? null : d === r && v === s ? f : (s = v, f = a(r = d, g));
  };
}
function E_(l, a) {
  var o, r, s, f = "style." + a, d = "end." + f, g;
  return function() {
    var v = Vn(this, l), x = v.on, y = v.value[f] == null ? g || (g = kv(a)) : void 0;
    (x !== o || s !== y) && (r = (o = x).copy()).on(d, s = y), v.on = r;
  };
}
function __(l, a, o) {
  var r = (l += "") == "transform" ? wE : Iv;
  return a == null ? this.styleTween(l, x_(l, r)).on("end.style." + l, kv(l)) : typeof a == "function" ? this.styleTween(l, b_(l, r, Ud(this, "style." + l, a))).each(E_(this._id, l)) : this.styleTween(l, S_(l, r, a), o).on("end.style." + l, null);
}
function w_(l, a, o) {
  return function(r) {
    this.style.setProperty(l, a.call(this, r), o);
  };
}
function N_(l, a, o) {
  var r, s;
  function f() {
    var d = a.apply(this, arguments);
    return d !== s && (r = (s = d) && w_(l, d, o)), r;
  }
  return f._value = a, f;
}
function T_(l, a, o) {
  var r = "style." + (l += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (a == null) return this.tween(r, null);
  if (typeof a != "function") throw new Error();
  return this.tween(r, N_(l, a, o ?? ""));
}
function C_(l) {
  return function() {
    this.textContent = l;
  };
}
function z_(l) {
  return function() {
    var a = l(this);
    this.textContent = a ?? "";
  };
}
function M_(l) {
  return this.tween("text", typeof l == "function" ? z_(Ud(this, "text", l)) : C_(l == null ? "" : l + ""));
}
function A_(l) {
  return function(a) {
    this.textContent = l.call(this, a);
  };
}
function O_(l) {
  var a, o;
  function r() {
    var s = l.apply(this, arguments);
    return s !== o && (a = (o = s) && A_(s)), a;
  }
  return r._value = l, r;
}
function D_(l) {
  var a = "text";
  if (arguments.length < 1) return (a = this.tween(a)) && a._value;
  if (l == null) return this.tween(a, null);
  if (typeof l != "function") throw new Error();
  return this.tween(a, O_(l));
}
function R_() {
  for (var l = this._name, a = this._id, o = Fv(), r = this._groups, s = r.length, f = 0; f < s; ++f)
    for (var d = r[f], g = d.length, v, x = 0; x < g; ++x)
      if (v = d[x]) {
        var y = Sn(v, a);
        lr(v, l, o, x, d, {
          time: y.time + y.delay + y.duration,
          delay: 0,
          duration: y.duration,
          ease: y.ease
        });
      }
  return new ul(r, this._parents, l, o);
}
function H_() {
  var l, a, o = this, r = o._id, s = o.size();
  return new Promise(function(f, d) {
    var g = { value: d }, v = { value: function() {
      --s === 0 && f();
    } };
    o.each(function() {
      var x = Vn(this, r), y = x.on;
      y !== l && (a = (l = y).copy(), a._.cancel.push(g), a._.interrupt.push(g), a._.end.push(v)), x.on = a;
    }), s === 0 && f();
  });
}
var B_ = 0;
function ul(l, a, o, r) {
  this._groups = l, this._parents = a, this._name = o, this._id = r;
}
function Fv() {
  return ++B_;
}
var nl = ju.prototype;
ul.prototype = {
  constructor: ul,
  select: m_,
  selectAll: y_,
  selectChild: nl.selectChild,
  selectChildren: nl.selectChildren,
  filter: c_,
  merge: r_,
  selection: p_,
  transition: R_,
  call: nl.call,
  nodes: nl.nodes,
  node: nl.node,
  size: nl.size,
  empty: nl.empty,
  each: nl.each,
  on: d_,
  attr: KE,
  attrTween: FE,
  style: __,
  styleTween: T_,
  text: M_,
  textTween: D_,
  remove: g_,
  tween: YE,
  delay: t_,
  duration: l_,
  ease: a_,
  easeVarying: o_,
  end: H_,
  [Symbol.iterator]: nl[Symbol.iterator]
};
function U_(l) {
  return ((l *= 2) <= 1 ? l * l * l : (l -= 2) * l * l + 2) / 2;
}
var L_ = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: U_
};
function V_(l, a) {
  for (var o; !(o = l.__transition) || !(o = o[a]); )
    if (!(l = l.parentNode))
      throw new Error(`transition ${a} not found`);
  return o;
}
function Y_(l) {
  var a, o;
  l instanceof ul ? (a = l._id, l = l._name) : (a = Fv(), (o = L_).time = Hd(), l = l == null ? null : l + "");
  for (var r = this._groups, s = r.length, f = 0; f < s; ++f)
    for (var d = r[f], g = d.length, v, x = 0; x < g; ++x)
      (v = d[x]) && lr(v, l, a, x, d, o || V_(v, a));
  return new ul(r, this._parents, l, a);
}
ju.prototype.interrupt = UE;
ju.prototype.transition = Y_;
const Rc = (l) => () => l;
function j_(l, {
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
function ll(l, a, o) {
  this.k = l, this.x = a, this.y = o;
}
ll.prototype = {
  constructor: ll,
  scale: function(l) {
    return l === 1 ? this : new ll(this.k * l, this.x, this.y);
  },
  translate: function(l, a) {
    return l === 0 & a === 0 ? this : new ll(this.k, this.x + this.k * l, this.y + this.k * a);
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
var ir = new ll(1, 0, 0);
Wv.prototype = ll.prototype;
function Wv(l) {
  for (; !l.__zoom; ) if (!(l = l.parentNode)) return ir;
  return l.__zoom;
}
function ad(l) {
  l.stopImmediatePropagation();
}
function Nu(l) {
  l.preventDefault(), l.stopImmediatePropagation();
}
function q_(l) {
  return (!l.ctrlKey || l.type === "wheel") && !l.button;
}
function X_() {
  var l = this;
  return l instanceof SVGElement ? (l = l.ownerSVGElement || l, l.hasAttribute("viewBox") ? (l = l.viewBox.baseVal, [[l.x, l.y], [l.x + l.width, l.y + l.height]]) : [[0, 0], [l.width.baseVal.value, l.height.baseVal.value]]) : [[0, 0], [l.clientWidth, l.clientHeight]];
}
function zy() {
  return this.__zoom || ir;
}
function Z_(l) {
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * (l.ctrlKey ? 10 : 1);
}
function G_() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Q_(l, a, o) {
  var r = l.invertX(a[0][0]) - o[0][0], s = l.invertX(a[1][0]) - o[1][0], f = l.invertY(a[0][1]) - o[0][1], d = l.invertY(a[1][1]) - o[1][1];
  return l.translate(
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s),
    d > f ? (f + d) / 2 : Math.min(0, f) || Math.max(0, d)
  );
}
function Pv() {
  var l = q_, a = X_, o = Q_, r = Z_, s = G_, f = [0, 1 / 0], d = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], g = 250, v = Yc, x = tr("start", "zoom", "end"), y, m, p, b = 500, E = 150, A = 0, N = 10;
  function w(z) {
    z.property("__zoom", zy).on("wheel.zoom", G, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", ot).filter(s).on("touchstart.zoom", tt).on("touchmove.zoom", at).on("touchend.zoom touchcancel.zoom", lt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(z, V, O, H) {
    var q = z.selection ? z.selection() : z;
    q.property("__zoom", zy), z !== q ? X(z, V, O, H) : q.interrupt().each(function() {
      B(this, arguments).event(H).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, w.scaleBy = function(z, V, O, H) {
    w.scaleTo(z, function() {
      var q = this.__zoom.k, $ = typeof V == "function" ? V.apply(this, arguments) : V;
      return q * $;
    }, O, H);
  }, w.scaleTo = function(z, V, O, H) {
    w.transform(z, function() {
      var q = a.apply(this, arguments), $ = this.__zoom, P = O == null ? C(q) : typeof O == "function" ? O.apply(this, arguments) : O, it = $.invert(P), dt = typeof V == "function" ? V.apply(this, arguments) : V;
      return o(_(U($, dt), P, it), q, d);
    }, O, H);
  }, w.translateBy = function(z, V, O, H) {
    w.transform(z, function() {
      return o(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), a.apply(this, arguments), d);
    }, null, H);
  }, w.translateTo = function(z, V, O, H, q) {
    w.transform(z, function() {
      var $ = a.apply(this, arguments), P = this.__zoom, it = H == null ? C($) : typeof H == "function" ? H.apply(this, arguments) : H;
      return o(ir.translate(it[0], it[1]).scale(P.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), $, d);
    }, H, q);
  };
  function U(z, V) {
    return V = Math.max(f[0], Math.min(f[1], V)), V === z.k ? z : new ll(V, z.x, z.y);
  }
  function _(z, V, O) {
    var H = V[0] - O[0] * z.k, q = V[1] - O[1] * z.k;
    return H === z.x && q === z.y ? z : new ll(z.k, H, q);
  }
  function C(z) {
    return [(+z[0][0] + +z[1][0]) / 2, (+z[0][1] + +z[1][1]) / 2];
  }
  function X(z, V, O, H) {
    z.on("start.zoom", function() {
      B(this, arguments).event(H).start();
    }).on("interrupt.zoom end.zoom", function() {
      B(this, arguments).event(H).end();
    }).tween("zoom", function() {
      var q = this, $ = arguments, P = B(q, $).event(H), it = a.apply(q, $), dt = O == null ? C(it) : typeof O == "function" ? O.apply(q, $) : O, vt = Math.max(it[1][0] - it[0][0], it[1][1] - it[0][1]), T = q.__zoom, k = typeof V == "function" ? V.apply(q, $) : V, st = v(T.invert(dt).concat(vt / T.k), k.invert(dt).concat(vt / k.k));
      return function(ut) {
        if (ut === 1) ut = k;
        else {
          var F = st(ut), ft = vt / F[2];
          ut = new ll(ft, dt[0] - F[0] * ft, dt[1] - F[1] * ft);
        }
        P.zoom(null, ut);
      };
    });
  }
  function B(z, V, O) {
    return !O && z.__zooming || new R(z, V);
  }
  function R(z, V) {
    this.that = z, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = a.apply(z, V), this.taps = 0;
  }
  R.prototype = {
    event: function(z) {
      return z && (this.sourceEvent = z), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(z, V) {
      return this.mouse && z !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && z !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && z !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(z) {
      var V = $e(this.that).datum();
      x.call(
        z,
        this.that,
        new j_(z, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: x
        }),
        V
      );
    }
  };
  function G(z, ...V) {
    if (!l.apply(this, arguments)) return;
    var O = B(this, V).event(z), H = this.__zoom, q = Math.max(f[0], Math.min(f[1], H.k * Math.pow(2, r.apply(this, arguments)))), $ = mn(z);
    if (O.wheel)
      (O.mouse[0][0] !== $[0] || O.mouse[0][1] !== $[1]) && (O.mouse[1] = H.invert(O.mouse[0] = $)), clearTimeout(O.wheel);
    else {
      if (H.k === q) return;
      O.mouse = [$, H.invert($)], Xc(this), O.start();
    }
    Nu(z), O.wheel = setTimeout(P, E), O.zoom("mouse", o(_(U(H, q), O.mouse[0], O.mouse[1]), O.extent, d));
    function P() {
      O.wheel = null, O.end();
    }
  }
  function I(z, ...V) {
    if (p || !l.apply(this, arguments)) return;
    var O = z.currentTarget, H = B(this, V, !0).event(z), q = $e(z.view).on("mousemove.zoom", dt, !0).on("mouseup.zoom", vt, !0), $ = mn(z, O), P = z.clientX, it = z.clientY;
    Uv(z.view), ad(z), H.mouse = [$, this.__zoom.invert($)], Xc(this), H.start();
    function dt(T) {
      if (Nu(T), !H.moved) {
        var k = T.clientX - P, st = T.clientY - it;
        H.moved = k * k + st * st > A;
      }
      H.event(T).zoom("mouse", o(_(H.that.__zoom, H.mouse[0] = mn(T, O), H.mouse[1]), H.extent, d));
    }
    function vt(T) {
      q.on("mousemove.zoom mouseup.zoom", null), Lv(T.view, H.moved), Nu(T), H.event(T).end();
    }
  }
  function ot(z, ...V) {
    if (l.apply(this, arguments)) {
      var O = this.__zoom, H = mn(z.changedTouches ? z.changedTouches[0] : z, this), q = O.invert(H), $ = O.k * (z.shiftKey ? 0.5 : 2), P = o(_(U(O, $), H, q), a.apply(this, V), d);
      Nu(z), g > 0 ? $e(this).transition().duration(g).call(X, P, H, z) : $e(this).call(w.transform, P, H, z);
    }
  }
  function tt(z, ...V) {
    if (l.apply(this, arguments)) {
      var O = z.touches, H = O.length, q = B(this, V, z.changedTouches.length === H).event(z), $, P, it, dt;
      for (ad(z), P = 0; P < H; ++P)
        it = O[P], dt = mn(it, this), dt = [dt, this.__zoom.invert(dt), it.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== dt[2] && (q.touch1 = dt, q.taps = 0) : (q.touch0 = dt, $ = !0, q.taps = 1 + !!y);
      y && (y = clearTimeout(y)), $ && (q.taps < 2 && (m = dt[0], y = setTimeout(function() {
        y = null;
      }, b)), Xc(this), q.start());
    }
  }
  function at(z, ...V) {
    if (this.__zooming) {
      var O = B(this, V).event(z), H = z.changedTouches, q = H.length, $, P, it, dt;
      for (Nu(z), $ = 0; $ < q; ++$)
        P = H[$], it = mn(P, this), O.touch0 && O.touch0[2] === P.identifier ? O.touch0[0] = it : O.touch1 && O.touch1[2] === P.identifier && (O.touch1[0] = it);
      if (P = O.that.__zoom, O.touch1) {
        var vt = O.touch0[0], T = O.touch0[1], k = O.touch1[0], st = O.touch1[1], ut = (ut = k[0] - vt[0]) * ut + (ut = k[1] - vt[1]) * ut, F = (F = st[0] - T[0]) * F + (F = st[1] - T[1]) * F;
        P = U(P, Math.sqrt(ut / F)), it = [(vt[0] + k[0]) / 2, (vt[1] + k[1]) / 2], dt = [(T[0] + st[0]) / 2, (T[1] + st[1]) / 2];
      } else if (O.touch0) it = O.touch0[0], dt = O.touch0[1];
      else return;
      O.zoom("touch", o(_(P, it, dt), O.extent, d));
    }
  }
  function lt(z, ...V) {
    if (this.__zooming) {
      var O = B(this, V).event(z), H = z.changedTouches, q = H.length, $, P;
      for (ad(z), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, b), $ = 0; $ < q; ++$)
        P = H[$], O.touch0 && O.touch0[2] === P.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === P.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (P = mn(P, this), Math.hypot(m[0] - P[0], m[1] - P[1]) < N)) {
        var it = $e(this).on("dblclick.zoom");
        it && it.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(z) {
    return arguments.length ? (r = typeof z == "function" ? z : Rc(+z), w) : r;
  }, w.filter = function(z) {
    return arguments.length ? (l = typeof z == "function" ? z : Rc(!!z), w) : l;
  }, w.touchable = function(z) {
    return arguments.length ? (s = typeof z == "function" ? z : Rc(!!z), w) : s;
  }, w.extent = function(z) {
    return arguments.length ? (a = typeof z == "function" ? z : Rc([[+z[0][0], +z[0][1]], [+z[1][0], +z[1][1]]]), w) : a;
  }, w.scaleExtent = function(z) {
    return arguments.length ? (f[0] = +z[0], f[1] = +z[1], w) : [f[0], f[1]];
  }, w.translateExtent = function(z) {
    return arguments.length ? (d[0][0] = +z[0][0], d[1][0] = +z[1][0], d[0][1] = +z[0][1], d[1][1] = +z[1][1], w) : [[d[0][0], d[0][1]], [d[1][0], d[1][1]]];
  }, w.constrain = function(z) {
    return arguments.length ? (o = z, w) : o;
  }, w.duration = function(z) {
    return arguments.length ? (g = +z, w) : g;
  }, w.interpolate = function(z) {
    return arguments.length ? (v = z, w) : v;
  }, w.on = function() {
    var z = x.on.apply(x, arguments);
    return z === x ? w : z;
  }, w.clickDistance = function(z) {
    return arguments.length ? (A = (z = +z) * z, w) : Math.sqrt(A);
  }, w.tapDistance = function(z) {
    return arguments.length ? (N = +z, w) : N;
  }, w;
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
}, Hu = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], tp = ["Enter", " ", "Escape"], ep = {
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
var Sa;
(function(l) {
  l.Strict = "strict", l.Loose = "loose";
})(Sa || (Sa = {}));
var mi;
(function(l) {
  l.Free = "free", l.Vertical = "vertical", l.Horizontal = "horizontal";
})(mi || (mi = {}));
var Bu;
(function(l) {
  l.Partial = "partial", l.Full = "full";
})(Bu || (Bu = {}));
const np = {
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
var Yl;
(function(l) {
  l.Bezier = "default", l.Straight = "straight", l.Step = "step", l.SmoothStep = "smoothstep", l.SimpleBezier = "simplebezier";
})(Yl || (Yl = {}));
var kc;
(function(l) {
  l.Arrow = "arrow", l.ArrowClosed = "arrowclosed";
})(kc || (kc = {}));
var pt;
(function(l) {
  l.Left = "left", l.Top = "top", l.Right = "right", l.Bottom = "bottom";
})(pt || (pt = {}));
const My = {
  [pt.Left]: pt.Right,
  [pt.Right]: pt.Left,
  [pt.Top]: pt.Bottom,
  [pt.Bottom]: pt.Top
}, lp = (l) => !!l && typeof l == "object" && "id" in l && "source" in l && "target" in l, K_ = (l) => !!l && typeof l == "object" && "id" in l && "position" in l && !("source" in l) && !("target" in l), Ld = (l) => !!l && typeof l == "object" && "id" in l && "internals" in l && !("source" in l) && !("target" in l), Xu = (l, a = [0, 0]) => {
  const { width: o, height: r } = bn(l), s = l.origin ?? a, f = o * s[0], d = r * s[1];
  return {
    x: l.position.x - f,
    y: l.position.y - d
  };
}, $_ = (l, a = { nodeOrigin: [0, 0] }) => {
  if (l.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let o = !1;
  const r = l.reduce((s, f) => {
    const d = typeof f == "string";
    let g = !a.nodeLookup && !d ? f : void 0;
    return a.nodeLookup && (g = d ? a.nodeLookup.get(f) : Ld(f) ? f : a.nodeLookup.get(f.id)), g ? (o = !0, ar(s, Fc(g, a.nodeOrigin))) : s;
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return o ? ur(r) : { x: 0, y: 0, width: 0, height: 0 };
}, Zu = (l, a = {}) => {
  let o = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return l.forEach((s) => {
    (a.filter === void 0 || a.filter(s)) && (o = ar(o, Fc(s)), r = !0);
  }), r ? ur(o) : { x: 0, y: 0, width: 0, height: 0 };
}, Vd = (l, a, [o, r, s] = [0, 0, 1], f = !1, d = !1) => {
  const g = (a.x - o) / s, v = (a.y - r) / s, x = a.width / s, y = a.height / s, m = [];
  for (const p of l.values()) {
    const { measured: b, selectable: E = !0, hidden: A = !1 } = p;
    if (d && !E || A)
      continue;
    const N = b.width ?? p.width ?? p.initialWidth ?? 0, w = b.height ?? p.height ?? p.initialHeight ?? 0, { x: U, y: _ } = p.internals.positionAbsolute, C = op(g, v, x, y, U, _, N, w), X = N * w, B = f && C > 0;
    (!p.internals.handleBounds || B || C >= X || p.dragging) && m.push(p);
  }
  return m;
}, J_ = (l, a) => {
  const o = /* @__PURE__ */ new Set();
  return l.forEach((r) => {
    o.add(r.id);
  }), a.filter((r) => o.has(r.source) || o.has(r.target));
};
function I_(l, a) {
  const o = /* @__PURE__ */ new Map(), r = a?.nodes ? new Set(a.nodes.map((s) => s.id)) : null;
  return l.forEach((s) => {
    let f;
    if (a?.includeHiddenNodes) {
      const { width: d, height: g } = bn(s);
      f = d > 0 && g > 0;
    } else
      f = !!(s.measured.width && s.measured.height && !s.hidden);
    f && (!r || r.has(s.id)) && o.set(s.id, s);
  }), o;
}
async function k_({ nodes: l, width: a, height: o, panZoom: r, minZoom: s, maxZoom: f }, d) {
  if (l.size === 0)
    return !0;
  const g = I_(l, d), v = Zu(g), x = jd(v, a, o, d?.minZoom ?? s, d?.maxZoom ?? f, d?.padding ?? 0.1);
  return await r.setViewport(x, {
    duration: d?.duration,
    ease: d?.ease,
    interpolate: d?.interpolate
  }), !0;
}
function ip({ nodeId: l, nextPosition: a, nodeLookup: o, nodeOrigin: r = [0, 0], nodeExtent: s, onError: f }) {
  const d = o.get(l), g = d.parentId ? o.get(d.parentId) : void 0, { x: v, y: x } = g ? g.internals.positionAbsolute : { x: 0, y: 0 }, y = d.origin ?? r;
  let m = d.extent || s;
  if (d.extent === "parent" && !d.expandParent)
    if (!g)
      f?.("005", xn.error005());
    else {
      const { width: b, height: E } = bn(g);
      b && E && (m = [
        [v, x],
        [v + b, x + E]
      ]);
    }
  else g && xi(d.extent) && (m = [
    [d.extent[0][0] + v, d.extent[0][1] + x],
    [d.extent[1][0] + v, d.extent[1][1] + x]
  ]);
  const p = xi(m) ? pi(a, m, d.measured) : a;
  return (d.measured.width === void 0 || d.measured.height === void 0) && f?.("015", xn.error015()), {
    position: {
      x: p.x - v + (d.measured.width ?? 0) * y[0],
      y: p.y - x + (d.measured.height ?? 0) * y[1]
    },
    positionAbsolute: p
  };
}
async function F_({ nodesToRemove: l = [], edgesToRemove: a = [], nodes: o, edges: r, onBeforeDelete: s }) {
  const f = new Set(l.map((p) => p.id)), d = [];
  for (const p of o) {
    if (p.deletable === !1)
      continue;
    const b = f.has(p.id), E = !b && p.parentId && d.find((A) => A.id === p.parentId);
    (b || E) && d.push(p);
  }
  const g = new Set(a.map((p) => p.id)), v = r.filter((p) => p.deletable !== !1), y = J_(d, v);
  for (const p of v)
    g.has(p.id) && !y.find((E) => E.id === p.id) && y.push(p);
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
const ba = (l, a = 0, o = 1) => Math.min(Math.max(l, a), o), pi = (l = { x: 0, y: 0 }, a, o) => ({
  x: ba(l.x, a[0][0], a[1][0] - (o?.width ?? 0)),
  y: ba(l.y, a[0][1], a[1][1] - (o?.height ?? 0))
});
function ap(l, a, o) {
  const { width: r, height: s } = bn(o), { x: f, y: d } = o.internals.positionAbsolute;
  return pi(l, [
    [f, d],
    [f + r, d + s]
  ], a);
}
const Ay = (l, a, o) => l < a ? ba(Math.abs(l - a), 1, a) / a : l > o ? -ba(Math.abs(l - o), 1, a) / a : 0, Yd = (l, a, o = 15, r = 40) => {
  const s = Ay(l.x, r, a.width - r) * o, f = Ay(l.y, r, a.height - r) * o;
  return [s, f];
}, ar = (l, a) => ({
  x: Math.min(l.x, a.x),
  y: Math.min(l.y, a.y),
  x2: Math.max(l.x2, a.x2),
  y2: Math.max(l.y2, a.y2)
}), _d = ({ x: l, y: a, width: o, height: r }) => ({
  x: l,
  y: a,
  x2: l + o,
  y2: a + r
}), ur = ({ x: l, y: a, x2: o, y2: r }) => ({
  x: l,
  y: a,
  width: o - l,
  height: r - a
}), Uu = (l, a = [0, 0]) => {
  const { x: o, y: r } = Ld(l) ? l.internals.positionAbsolute : Xu(l, a);
  return {
    x: o,
    y: r,
    width: l.measured?.width ?? l.width ?? l.initialWidth ?? 0,
    height: l.measured?.height ?? l.height ?? l.initialHeight ?? 0
  };
}, Fc = (l, a = [0, 0]) => {
  const { x: o, y: r } = Ld(l) ? l.internals.positionAbsolute : Xu(l, a);
  return {
    x: o,
    y: r,
    x2: o + (l.measured?.width ?? l.width ?? l.initialWidth ?? 0),
    y2: r + (l.measured?.height ?? l.height ?? l.initialHeight ?? 0)
  };
}, up = (l, a) => ur(ar(_d(l), _d(a))), op = (l, a, o, r, s, f, d, g) => {
  const v = Math.max(0, Math.min(l + o, s + d) - Math.max(l, s)), x = Math.max(0, Math.min(a + r, f + g) - Math.max(a, f));
  return Math.ceil(v * x);
}, Wc = (l, a) => op(l.x, l.y, l.width, l.height, a.x, a.y, a.width, a.height), Oy = (l) => vn(l.width) && vn(l.height) && vn(l.x) && vn(l.y), vn = (l) => !isNaN(l) && isFinite(l), cp = (l, a) => (o, r) => {
}, Gu = (l, a = [1, 1]) => ({
  x: a[0] * Math.round(l.x / a[0]),
  y: a[1] * Math.round(l.y / a[1])
}), Qu = ({ x: l, y: a }, [o, r, s], f = !1, d = [1, 1]) => {
  const g = {
    x: (l - o) / s,
    y: (a - r) / s
  };
  return f ? Gu(g, d) : g;
}, Ea = ({ x: l, y: a }, [o, r, s]) => ({
  x: l * s + o,
  y: a * s + r
});
function ga(l, a) {
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
function W_(l, a, o) {
  if (typeof l == "string" || typeof l == "number") {
    const r = ga(l, o), s = ga(l, a);
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
    const r = ga(l.top ?? l.y ?? 0, o), s = ga(l.bottom ?? l.y ?? 0, o), f = ga(l.left ?? l.x ?? 0, a), d = ga(l.right ?? l.x ?? 0, a);
    return { top: r, right: d, bottom: s, left: f, x: f + d, y: r + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function P_(l, a, o, r, s, f) {
  const { x: d, y: g } = Ea(l, [a, o, r]), { x: v, y: x } = Ea({ x: l.x + l.width, y: l.y + l.height }, [a, o, r]), y = s - v, m = f - x;
  return {
    left: Math.floor(d),
    top: Math.floor(g),
    right: Math.floor(y),
    bottom: Math.floor(m)
  };
}
const jd = (l, a, o, r, s, f) => {
  const d = W_(f, a, o), g = (a - d.x) / l.width, v = (o - d.y) / l.height, x = Math.min(g, v), y = ba(x, r, s), m = l.x + l.width / 2, p = l.y + l.height / 2, b = a / 2 - m * y, E = o / 2 - p * y, A = P_(l, b, E, y, a, o), N = {
    left: Math.min(A.left - d.left, 0),
    top: Math.min(A.top - d.top, 0),
    right: Math.min(A.right - d.right, 0),
    bottom: Math.min(A.bottom - d.bottom, 0)
  };
  return {
    x: b - N.left + N.right,
    y: E - N.top + N.bottom,
    zoom: y
  };
}, Lu = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function xi(l) {
  return l != null && l !== "parent";
}
function bn(l) {
  return {
    width: l.measured?.width ?? l.width ?? l.initialWidth ?? 0,
    height: l.measured?.height ?? l.height ?? l.initialHeight ?? 0
  };
}
function rp(l) {
  return (l.measured?.width ?? l.width ?? l.initialWidth) !== void 0 && (l.measured?.height ?? l.height ?? l.initialHeight) !== void 0;
}
function sp(l, a = { width: 0, height: 0 }, o, r, s) {
  const f = { ...l }, d = r.get(o);
  if (d) {
    const g = d.origin || s;
    f.x += d.internals.positionAbsolute.x - (a.width ?? 0) * g[0], f.y += d.internals.positionAbsolute.y - (a.height ?? 0) * g[1];
  }
  return f;
}
function Dy(l, a) {
  if (l.size !== a.size)
    return !1;
  for (const o of l)
    if (!a.has(o))
      return !1;
  return !0;
}
function tw() {
  let l, a;
  return { promise: new Promise((r, s) => {
    l = r, a = s;
  }), resolve: l, reject: a };
}
function ew(l) {
  return { ...ep, ...l || {} };
}
function fp(l) {
  return l === null ? null : l ? "valid" : "invalid";
}
function Mu(l, { snapGrid: a = [0, 0], snapToGrid: o = !1, transform: r, containerBounds: s }) {
  const { x: f, y: d } = pn(l), g = Qu({ x: f - (s?.left ?? 0), y: d - (s?.top ?? 0) }, r), { x: v, y: x } = o ? Gu(g, a) : g;
  return {
    xSnapped: v,
    ySnapped: x,
    ...g
  };
}
const qd = (l) => ({
  width: l.offsetWidth,
  height: l.offsetHeight
}), dp = (l) => l?.getRootNode?.() || window?.document, nw = ["INPUT", "SELECT", "TEXTAREA"];
function hp(l) {
  const a = l.composedPath?.()?.[0] || l.target;
  return a?.nodeType !== 1 ? !1 : nw.includes(a.nodeName) || a.hasAttribute("contenteditable") || !!a.closest(".nokey");
}
const gp = (l) => "clientX" in l, pn = (l, a) => {
  const o = gp(l), r = o ? l.clientX : l.touches?.[0].clientX, s = o ? l.clientY : l.touches?.[0].clientY;
  return {
    x: r - (a?.left ?? 0),
    y: s - (a?.top ?? 0)
  };
}, Ry = (l, a, o, r, s) => {
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
      ...qd(d)
    };
  });
};
function mp({ sourceX: l, sourceY: a, targetX: o, targetY: r, sourceControlX: s, sourceControlY: f, targetControlX: d, targetControlY: g }) {
  const v = l * 0.125 + s * 0.375 + d * 0.375 + o * 0.125, x = a * 0.125 + f * 0.375 + g * 0.375 + r * 0.125, y = Math.abs(v - l), m = Math.abs(x - a);
  return [v, x, y, m];
}
function Hc(l, a) {
  return l >= 0 ? 0.5 * l : a * 25 * Math.sqrt(-l);
}
function Hy({ pos: l, x1: a, y1: o, x2: r, y2: s, c: f }) {
  switch (l) {
    case pt.Left:
      return [a - Hc(a - r, f), o];
    case pt.Right:
      return [a + Hc(r - a, f), o];
    case pt.Top:
      return [a, o - Hc(o - s, f)];
    case pt.Bottom:
      return [a, o + Hc(s - o, f)];
  }
}
function Xd({ sourceX: l, sourceY: a, sourcePosition: o = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top, curvature: d = 0.25 }) {
  const [g, v] = Hy({
    pos: o,
    x1: l,
    y1: a,
    x2: r,
    y2: s,
    c: d
  }), [x, y] = Hy({
    pos: f,
    x1: r,
    y1: s,
    x2: l,
    y2: a,
    c: d
  }), [m, p, b, E] = mp({
    sourceX: l,
    sourceY: a,
    targetX: r,
    targetY: s,
    sourceControlX: g,
    sourceControlY: v,
    targetControlX: x,
    targetControlY: y
  });
  return [
    `M${l},${a} C${g},${v} ${x},${y} ${r},${s}`,
    m,
    p,
    b,
    E
  ];
}
function yp({ sourceX: l, sourceY: a, targetX: o, targetY: r }) {
  const s = Math.abs(o - l) / 2, f = o < l ? o + s : o - s, d = Math.abs(r - a) / 2, g = r < a ? r + d : r - d;
  return [f, g, s, d];
}
function lw({ sourceNode: l, targetNode: a, selected: o = !1, zIndex: r = 0, elevateOnSelect: s = !1, zIndexMode: f = "basic" }) {
  if (f === "manual")
    return r;
  const d = s && o ? r + 1e3 : r, g = Math.max(l.parentId || s && l.selected ? l.internals.z : 0, a.parentId || s && a.selected ? a.internals.z : 0);
  return d + g;
}
function iw({ sourceNode: l, targetNode: a, width: o, height: r, transform: s }) {
  const f = ar(Fc(l), Fc(a));
  f.x === f.x2 && (f.x2 += 1), f.y === f.y2 && (f.y2 += 1);
  const d = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: o / s[2],
    height: r / s[2]
  };
  return Wc(d, ur(f)) > 0;
}
const aw = ({ source: l, sourceHandle: a, target: o, targetHandle: r }) => `xy-edge__${l}${a || ""}-${o}${r || ""}`, uw = (l, a) => a.some((o) => o.source === l.source && o.target === l.target && (o.sourceHandle === l.sourceHandle || !o.sourceHandle && !l.sourceHandle) && (o.targetHandle === l.targetHandle || !o.targetHandle && !l.targetHandle)), ow = (l, a, o = {}) => {
  if (!l.source || !l.target)
    return o.onError?.("006", xn.error006()), a;
  const r = o.getEdgeId || aw;
  let s;
  return lp(l) ? s = { ...l } : s = {
    ...l,
    id: r(l)
  }, uw(s, a) ? a : (s.sourceHandle === null && delete s.sourceHandle, s.targetHandle === null && delete s.targetHandle, a.concat(s));
};
function vp({ sourceX: l, sourceY: a, targetX: o, targetY: r }) {
  const [s, f, d, g] = yp({
    sourceX: l,
    sourceY: a,
    targetX: o,
    targetY: r
  });
  return [`M ${l},${a}L ${o},${r}`, s, f, d, g];
}
const By = {
  [pt.Left]: { x: -1, y: 0 },
  [pt.Right]: { x: 1, y: 0 },
  [pt.Top]: { x: 0, y: -1 },
  [pt.Bottom]: { x: 0, y: 1 }
}, cw = ({ source: l, sourcePosition: a = pt.Bottom, target: o }) => a === pt.Left || a === pt.Right ? l.x < o.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : l.y < o.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Uy = (l, a) => Math.sqrt(Math.pow(a.x - l.x, 2) + Math.pow(a.y - l.y, 2));
function rw({ source: l, sourcePosition: a = pt.Bottom, target: o, targetPosition: r = pt.Top, center: s, offset: f, stepPosition: d }) {
  const g = By[a], v = By[r], x = { x: l.x + g.x * f, y: l.y + g.y * f }, y = { x: o.x + v.x * f, y: o.y + v.y * f }, m = cw({
    source: x,
    sourcePosition: a,
    target: y
  }), p = m.x !== 0 ? "x" : "y", b = m[p];
  let E = [], A, N;
  const w = { x: 0, y: 0 }, U = { x: 0, y: 0 }, [, , _, C] = yp({
    sourceX: l.x,
    sourceY: l.y,
    targetX: o.x,
    targetY: o.y
  });
  if (g[p] * v[p] === -1) {
    p === "x" ? (A = s.x ?? x.x + (y.x - x.x) * d, N = s.y ?? (x.y + y.y) / 2) : (A = s.x ?? (x.x + y.x) / 2, N = s.y ?? x.y + (y.y - x.y) * d);
    const G = [
      { x: A, y: x.y },
      { x: A, y: y.y }
    ], I = [
      { x: x.x, y: N },
      { x: y.x, y: N }
    ];
    g[p] === b ? E = p === "x" ? G : I : E = p === "x" ? I : G;
  } else {
    const G = [{ x: x.x, y: y.y }], I = [{ x: y.x, y: x.y }];
    if (p === "x" ? E = g.x === b ? I : G : E = g.y === b ? G : I, a === r) {
      const z = Math.abs(l[p] - o[p]);
      if (z <= f) {
        const V = Math.min(f - 1, f - z);
        g[p] === b ? w[p] = (x[p] > l[p] ? -1 : 1) * V : U[p] = (y[p] > o[p] ? -1 : 1) * V;
      }
    }
    if (a !== r) {
      const z = p === "x" ? "y" : "x", V = g[p] === v[z], O = x[z] > y[z], H = x[z] < y[z];
      (g[p] === 1 && (!V && O || V && H) || g[p] !== 1 && (!V && H || V && O)) && (E = p === "x" ? G : I);
    }
    const ot = { x: x.x + w.x, y: x.y + w.y }, tt = { x: y.x + U.x, y: y.y + U.y }, at = Math.max(Math.abs(ot.x - E[0].x), Math.abs(tt.x - E[0].x)), lt = Math.max(Math.abs(ot.y - E[0].y), Math.abs(tt.y - E[0].y));
    at >= lt ? (A = (ot.x + tt.x) / 2, N = E[0].y) : (A = E[0].x, N = (ot.y + tt.y) / 2);
  }
  const X = { x: x.x + w.x, y: x.y + w.y }, B = { x: y.x + U.x, y: y.y + U.y };
  return [[
    l,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...X.x !== E[0].x || X.y !== E[0].y ? [X] : [],
    ...E,
    ...B.x !== E[E.length - 1].x || B.y !== E[E.length - 1].y ? [B] : [],
    o
  ], A, N, _, C];
}
function sw(l, a, o, r) {
  const s = Math.min(Uy(l, a) / 2, Uy(a, o) / 2, r), { x: f, y: d } = a;
  if (l.x === f && f === o.x || l.y === d && d === o.y)
    return `L${f} ${d}`;
  if (l.y === d) {
    const x = l.x < o.x ? -1 : 1, y = l.y < o.y ? 1 : -1;
    return `L ${f + s * x},${d}Q ${f},${d} ${f},${d + s * y}`;
  }
  const g = l.x < o.x ? 1 : -1, v = l.y < o.y ? -1 : 1;
  return `L ${f},${d + s * v}Q ${f},${d} ${f + s * g},${d}`;
}
function wd({ sourceX: l, sourceY: a, sourcePosition: o = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top, borderRadius: d = 5, centerX: g, centerY: v, offset: x = 20, stepPosition: y = 0.5 }) {
  const [m, p, b, E, A] = rw({
    source: { x: l, y: a },
    sourcePosition: o,
    target: { x: r, y: s },
    targetPosition: f,
    center: { x: g, y: v },
    offset: x,
    stepPosition: y
  });
  let N = `M${m[0].x} ${m[0].y}`;
  for (let w = 1; w < m.length - 1; w++)
    N += sw(m[w - 1], m[w], m[w + 1], d);
  return N += `L${m[m.length - 1].x} ${m[m.length - 1].y}`, [N, p, b, E, A];
}
function Ly(l) {
  return l && !!(l.internals.handleBounds || l.handles?.length) && !!(l.measured.width || l.width || l.initialWidth);
}
function fw(l) {
  const { sourceNode: a, targetNode: o } = l;
  if (!Ly(a) || !Ly(o))
    return null;
  const r = a.internals.handleBounds || Vy(a.handles), s = o.internals.handleBounds || Vy(o.handles), f = Yy(r?.source ?? [], l.sourceHandle), d = Yy(
    // when connection type is loose we can define all handles as sources and connect source -> source
    l.connectionMode === Sa.Strict ? s?.target ?? [] : (s?.target ?? []).concat(s?.source ?? []),
    l.targetHandle
  );
  if (!f || !d)
    return l.onError?.("008", xn.error008(f ? "target" : "source", {
      id: l.id,
      sourceHandle: l.sourceHandle,
      targetHandle: l.targetHandle
    })), null;
  const g = f?.position || pt.Bottom, v = d?.position || pt.Top, x = Si(a, f, g), y = Si(o, d, v);
  return {
    sourceX: x.x,
    sourceY: x.y,
    targetX: y.x,
    targetY: y.y,
    sourcePosition: g,
    targetPosition: v
  };
}
function Vy(l) {
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
function Si(l, a, o = pt.Left, r = !1) {
  const s = (a?.x ?? 0) + l.internals.positionAbsolute.x, f = (a?.y ?? 0) + l.internals.positionAbsolute.y, { width: d, height: g } = a ?? bn(l);
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
function Yy(l, a) {
  return l && (a ? l.find((o) => o.id === a) : l[0]) || null;
}
function Nd(l, a) {
  return l ? typeof l == "string" ? l : `${a ? `${a}__` : ""}${Object.keys(l).sort().map((r) => `${r}=${l[r]}`).join("&")}` : "";
}
function dw(l, { id: a, defaultColor: o, defaultMarkerStart: r, defaultMarkerEnd: s }) {
  const f = /* @__PURE__ */ new Set();
  return l.reduce((d, g) => ([g.markerStart || r, g.markerEnd || s].forEach((v) => {
    if (v && typeof v == "object") {
      const x = Nd(v, a);
      f.has(x) || (d.push({ id: x, color: v.color || o, ...v }), f.add(x));
    }
  }), d), []).sort((d, g) => d.id.localeCompare(g.id));
}
const pp = 1e3, hw = 10, Zd = {
  nodeOrigin: [0, 0],
  nodeExtent: Hu,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, gw = {
  ...Zd,
  checkEquality: !0
};
function Gd(l, a) {
  const o = { ...l };
  for (const r in a)
    a[r] !== void 0 && (o[r] = a[r]);
  return o;
}
function mw(l, a, o) {
  const r = Gd(Zd, o);
  for (const s of l.values())
    if (s.parentId)
      Kd(s, l, a, r);
    else {
      const f = Xu(s, r.nodeOrigin), d = xi(s.extent) ? s.extent : r.nodeExtent, g = pi(f, d, bn(s));
      s.internals.positionAbsolute = g;
    }
}
function yw(l, a) {
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
function Qd(l) {
  return l === "manual";
}
function Td(l, a, o, r = {}) {
  const s = Gd(gw, r), f = { i: 0 }, d = new Map(a), g = s?.elevateNodesOnSelect && !Qd(s.zIndexMode) ? pp : 0;
  let v = l.length > 0, x = !1;
  a.clear(), o.clear();
  for (const y of l) {
    let m = d.get(y.id);
    if (s.checkEquality && y === m?.internals.userNode)
      a.set(y.id, m);
    else {
      const p = Xu(y, s.nodeOrigin), b = xi(y.extent) ? y.extent : s.nodeExtent, E = pi(p, b, bn(y));
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
          handleBounds: yw(y, m),
          z: xp(y, g, s.zIndexMode),
          userNode: y
        }
      }, a.set(y.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (v = !1), y.parentId && Kd(m, a, o, r, f), x ||= y.selected ?? !1;
  }
  return { nodesInitialized: v, hasSelectedNodes: x };
}
function vw(l, a) {
  if (!l.parentId)
    return;
  const o = a.get(l.parentId);
  o ? o.set(l.id, l) : a.set(l.parentId, /* @__PURE__ */ new Map([[l.id, l]]));
}
function Kd(l, a, o, r, s) {
  const { elevateNodesOnSelect: f, nodeOrigin: d, nodeExtent: g, zIndexMode: v } = Gd(Zd, r), x = l.parentId, y = a.get(x);
  if (!y) {
    console.warn(`Parent node ${x} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  vw(l, o), s && !y.parentId && y.internals.rootParentIndex === void 0 && v === "auto" && (y.internals.rootParentIndex = ++s.i, y.internals.z = y.internals.z + s.i * hw), s && y.internals.rootParentIndex !== void 0 && (s.i = y.internals.rootParentIndex);
  const m = f && !Qd(v) ? pp : 0, { x: p, y: b, z: E } = pw(l, y, d, g, m, v), { positionAbsolute: A } = l.internals, N = p !== A.x || b !== A.y;
  (N || E !== l.internals.z) && a.set(l.id, {
    ...l,
    internals: {
      ...l.internals,
      positionAbsolute: N ? { x: p, y: b } : A,
      z: E
    }
  });
}
function xp(l, a, o) {
  const r = vn(l.zIndex) ? l.zIndex : 0;
  return Qd(o) ? r : r + (l.selected ? a : 0);
}
function pw(l, a, o, r, s, f) {
  const { x: d, y: g } = a.internals.positionAbsolute, v = bn(l), x = Xu(l, o), y = xi(l.extent) ? pi(x, l.extent, v) : x;
  let m = pi({ x: d + y.x, y: g + y.y }, r, v);
  l.extent === "parent" && (m = ap(m, v, a));
  const p = xp(l, s, f), b = a.internals.z ?? 0;
  return {
    x: m.x,
    y: m.y,
    z: b >= p ? b + 1 : p
  };
}
function $d(l, a, o, r = [0, 0]) {
  const s = [], f = /* @__PURE__ */ new Map();
  for (const d of l) {
    const g = a.get(d.parentId);
    if (!g)
      continue;
    const v = f.get(d.parentId)?.expandedRect ?? Uu(g), x = up(v, d.rect);
    f.set(d.parentId, { expandedRect: x, parent: g });
  }
  return f.size > 0 && f.forEach(({ expandedRect: d, parent: g }, v) => {
    const x = g.internals.positionAbsolute, y = bn(g), m = g.origin ?? r, p = d.x < x.x ? Math.round(Math.abs(x.x - d.x)) : 0, b = d.y < x.y ? Math.round(Math.abs(x.y - d.y)) : 0, E = Math.max(y.width, Math.round(d.width)), A = Math.max(y.height, Math.round(d.height)), N = (E - y.width) * m[0], w = (A - y.height) * m[1];
    (p > 0 || b > 0 || N || w) && (s.push({
      id: v,
      type: "position",
      position: {
        x: g.position.x - p + N,
        y: g.position.y - b + w
      }
    }), o.get(v)?.forEach((U) => {
      l.some((_) => _.id === U.id) || s.push({
        id: U.id,
        type: "position",
        position: {
          x: U.position.x + p,
          y: U.position.y + b
        }
      });
    })), (y.width < d.width || y.height < d.height || p || b) && s.push({
      id: v,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: E + (p ? m[0] * p - N : 0),
        height: A + (b ? m[1] * b - w : 0)
      }
    });
  }), s;
}
function xw(l, a, o, r, s, f, d) {
  const g = r?.querySelector(".xyflow__viewport");
  let v = !1;
  if (!g)
    return { changes: [], updatedInternals: v };
  const x = [], y = window.getComputedStyle(g), { m22: m } = new window.DOMMatrixReadOnly(y.transform), p = [];
  for (const b of l.values()) {
    const E = a.get(b.id);
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
    const A = qd(b.nodeElement), N = E.measured.width !== A.width || E.measured.height !== A.height;
    if (!!(A.width && A.height && (N || !E.internals.handleBounds || b.force))) {
      const U = b.nodeElement.getBoundingClientRect(), _ = xi(E.extent) ? E.extent : f;
      let { positionAbsolute: C } = E.internals;
      if (E.parentId && E.extent === "parent") {
        const B = a.get(E.parentId);
        B && (C = ap(C, A, B));
      } else _ && (C = pi(C, _, A));
      const X = {
        ...E,
        measured: A,
        internals: {
          ...E.internals,
          positionAbsolute: C,
          handleBounds: {
            source: Ry("source", b.nodeElement, U, m, E.id),
            target: Ry("target", b.nodeElement, U, m, E.id)
          }
        }
      };
      a.set(E.id, X), E.parentId && Kd(X, a, o, { nodeOrigin: s, zIndexMode: d }), v = !0, N && (x.push({
        id: E.id,
        type: "dimensions",
        dimensions: A
      }), E.expandParent && E.parentId && p.push({
        id: E.id,
        parentId: E.parentId,
        rect: Uu(X, s)
      }));
    }
  }
  if (p.length > 0) {
    const b = $d(p, a, o, s);
    x.push(...b);
  }
  return { changes: x, updatedInternals: v };
}
async function Sw({ delta: l, panZoom: a, transform: o, translateExtent: r, width: s, height: f }) {
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
function jy(l, a, o, r, s, f) {
  let d = s;
  const g = r.get(d) || /* @__PURE__ */ new Map();
  r.set(d, g.set(o, a)), d = `${s}-${l}`;
  const v = r.get(d) || /* @__PURE__ */ new Map();
  if (r.set(d, v.set(o, a)), f) {
    d = `${s}-${l}-${f}`;
    const x = r.get(d) || /* @__PURE__ */ new Map();
    r.set(d, x.set(o, a));
  }
}
function Sp(l, a, o) {
  l.clear(), a.clear();
  for (const r of o) {
    const { source: s, target: f, sourceHandle: d = null, targetHandle: g = null } = r, v = { edgeId: r.id, source: s, target: f, sourceHandle: d, targetHandle: g }, x = `${s}-${d}--${f}-${g}`, y = `${f}-${g}--${s}-${d}`;
    jy("source", v, y, l, s, d), jy("target", v, x, l, f, g), a.set(r.id, r);
  }
}
function bp(l, a) {
  if (!l.parentId)
    return !1;
  const o = a.get(l.parentId);
  return o ? o.selected ? !0 : bp(o, a) : !1;
}
function qy(l, a, o) {
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
function bw(l, a, o, r) {
  const s = /* @__PURE__ */ new Map();
  for (const [f, d] of l)
    if ((d.selected || d.id === r) && (!d.parentId || !bp(d, l)) && (d.draggable || a && typeof d.draggable > "u")) {
      const g = l.get(f);
      g && s.set(f, {
        id: f,
        position: g.position || { x: 0, y: 0 },
        distance: {
          x: o.x - g.internals.positionAbsolute.x,
          y: o.y - g.internals.positionAbsolute.y
        },
        extent: g.extent,
        parentId: g.parentId,
        origin: g.origin,
        expandParent: g.expandParent,
        internals: {
          positionAbsolute: g.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: g.measured.width ?? 0,
          height: g.measured.height ?? 0
        }
      });
    }
  return s;
}
function ud({ nodeId: l, dragItems: a, nodeLookup: o, dragging: r = !0 }) {
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
function Ew({ dragItems: l, snapGrid: a, x: o, y: r }) {
  const s = l.values().next().value;
  if (!s)
    return null;
  const f = {
    x: o - s.distance.x,
    y: r - s.distance.y
  }, d = Gu(f, a);
  return {
    x: d.x - f.x,
    y: d.y - f.y
  };
}
function _w({ onNodeMouseDown: l, getStoreItems: a, onDragStart: o, onDrag: r, onDragStop: s }) {
  let f = { x: null, y: null }, d = 0, g = /* @__PURE__ */ new Map(), v = !1, x = { x: 0, y: 0 }, y = null, m = !1, p = null, b = !1, E = !1, A = null;
  function N({ noDragClassName: U, handleSelector: _, domNode: C, isSelectable: X, nodeId: B, nodeClickDistance: R = 0 }) {
    p = $e(C);
    function G({ x: at, y: lt }) {
      const { nodeLookup: z, nodeExtent: V, snapGrid: O, snapToGrid: H, nodeOrigin: q, onNodeDrag: $, onSelectionDrag: P, onError: it, updateNodePositions: dt } = a();
      f = { x: at, y: lt };
      let vt = !1;
      const T = g.size > 1, k = T && V ? _d(Zu(g)) : null, st = T && H ? Ew({
        dragItems: g,
        snapGrid: O,
        x: at,
        y: lt
      }) : null;
      for (const [ut, F] of g) {
        if (!z.has(ut))
          continue;
        let ft = { x: at - F.distance.x, y: lt - F.distance.y };
        H && (ft = st ? {
          x: Math.round(ft.x + st.x),
          y: Math.round(ft.y + st.y)
        } : Gu(ft, O));
        let gt = null;
        if (T && V && !F.extent && k) {
          const { positionAbsolute: xt } = F.internals, wt = xt.x - k.x + V[0][0], _t = xt.x + F.measured.width - k.x2 + V[1][0], Ct = xt.y - k.y + V[0][1], Ht = xt.y + F.measured.height - k.y2 + V[1][1];
          gt = [
            [wt, Ct],
            [_t, Ht]
          ];
        }
        const { position: ct, positionAbsolute: rt } = ip({
          nodeId: ut,
          nextPosition: ft,
          nodeLookup: z,
          nodeExtent: gt || V,
          nodeOrigin: q,
          onError: it
        });
        vt = vt || F.position.x !== ct.x || F.position.y !== ct.y, F.position = ct, F.internals.positionAbsolute = rt;
      }
      if (E = E || vt, !!vt && (dt(g, !0), A && (r || $ || !B && P))) {
        const [ut, F] = ud({
          nodeId: B,
          dragItems: g,
          nodeLookup: z
        });
        r?.(A, g, ut, F), $?.(A, ut, F), B || P?.(A, F);
      }
    }
    async function I() {
      if (!y)
        return;
      const { transform: at, panBy: lt, autoPanSpeed: z, autoPanOnNodeDrag: V } = a();
      if (!V) {
        v = !1, cancelAnimationFrame(d);
        return;
      }
      const [O, H] = Yd(x, y, z);
      (O !== 0 || H !== 0) && (f.x = (f.x ?? 0) - O / at[2], f.y = (f.y ?? 0) - H / at[2], await lt({ x: O, y: H }) && G(f)), d = requestAnimationFrame(I);
    }
    function ot(at) {
      const { nodeLookup: lt, multiSelectionActive: z, nodesDraggable: V, transform: O, snapGrid: H, snapToGrid: q, selectNodesOnDrag: $, onNodeDragStart: P, onSelectionDragStart: it, unselectNodesAndEdges: dt } = a();
      m = !0, (!$ || !X) && !z && B && (lt.get(B)?.selected || dt()), X && $ && B && l?.(B);
      const vt = Mu(at.sourceEvent, { transform: O, snapGrid: H, snapToGrid: q, containerBounds: y });
      if (f = vt, g = bw(lt, V, vt, B), g.size > 0 && (o || P || !B && it)) {
        const [T, k] = ud({
          nodeId: B,
          dragItems: g,
          nodeLookup: lt
        });
        o?.(at.sourceEvent, g, T, k), P?.(at.sourceEvent, T, k), B || it?.(at.sourceEvent, k);
      }
    }
    const tt = Vv().clickDistance(R).on("start", (at) => {
      const { domNode: lt, nodeDragThreshold: z, transform: V, snapGrid: O, snapToGrid: H } = a();
      y = lt?.getBoundingClientRect() || null, b = !1, E = !1, A = at.sourceEvent, z === 0 && ot(at), f = Mu(at.sourceEvent, { transform: V, snapGrid: O, snapToGrid: H, containerBounds: y }), x = pn(at.sourceEvent, y);
    }).on("drag", (at) => {
      const { autoPanOnNodeDrag: lt, transform: z, snapGrid: V, snapToGrid: O, nodeDragThreshold: H, nodeLookup: q } = a(), $ = Mu(at.sourceEvent, { transform: z, snapGrid: V, snapToGrid: O, containerBounds: y });
      if (A = at.sourceEvent, (at.sourceEvent.type === "touchmove" && at.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      B && !q.has(B)) && (b = !0), !b) {
        if (!v && lt && m && (v = !0, I()), !m) {
          const P = pn(at.sourceEvent, y), it = P.x - x.x, dt = P.y - x.y;
          Math.sqrt(it * it + dt * dt) > H && ot(at);
        }
        (f.x !== $.xSnapped || f.y !== $.ySnapped) && g && m && (x = pn(at.sourceEvent, y), G($));
      }
    }).on("end", (at) => {
      if (!m || b) {
        b && g.size > 0 && a().updateNodePositions(g, !1);
        return;
      }
      if (v = !1, m = !1, cancelAnimationFrame(d), g.size > 0) {
        const { nodeLookup: lt, updateNodePositions: z, onNodeDragStop: V, onSelectionDragStop: O } = a();
        if (E && (z(g, !1), E = !1), s || V || !B && O) {
          const [H, q] = ud({
            nodeId: B,
            dragItems: g,
            nodeLookup: lt,
            dragging: !1
          });
          s?.(at.sourceEvent, g, H, q), V?.(at.sourceEvent, H, q), B || O?.(at.sourceEvent, q);
        }
      }
    }).filter((at) => {
      const lt = at.target;
      return !at.button && (!U || !qy(lt, `.${U}`, C)) && (!_ || qy(lt, _, C));
    });
    p.call(tt);
  }
  function w() {
    p?.on(".drag", null);
  }
  return {
    update: N,
    destroy: w
  };
}
function ww(l, a, o) {
  const r = [], s = {
    x: l.x - o,
    y: l.y - o,
    width: o * 2,
    height: o * 2
  };
  for (const f of a.values())
    Wc(s, Uu(f)) > 0 && r.push(f);
  return r;
}
const Nw = 250;
function Tw(l, a, o, r) {
  let s = [], f = 1 / 0;
  const d = ww(l, o, a + Nw);
  for (const g of d) {
    const v = [...g.internals.handleBounds?.source ?? [], ...g.internals.handleBounds?.target ?? []];
    for (const x of v) {
      if (r.nodeId === x.nodeId && r.type === x.type && r.id === x.id)
        continue;
      const { x: y, y: m } = Si(g, x, x.position, !0), p = Math.sqrt(Math.pow(y - l.x, 2) + Math.pow(m - l.y, 2));
      p > a || (p < f ? (s = [{ ...x, x: y, y: m }], f = p) : p === f && s.push({ ...x, x: y, y: m }));
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
function Ep(l, a, o, r, s, f = !1) {
  const d = r.get(l);
  if (!d)
    return null;
  const g = s === "strict" ? d.internals.handleBounds?.[a] : [...d.internals.handleBounds?.source ?? [], ...d.internals.handleBounds?.target ?? []], v = (o ? g?.find((x) => x.id === o) : g?.[0]) ?? null;
  return v && f ? { ...v, ...Si(d, v, v.position, !0) } : v;
}
function _p(l, a) {
  return l || (a?.classList.contains("target") ? "target" : a?.classList.contains("source") ? "source" : null);
}
function Cw(l, a) {
  let o = null;
  return a ? o = !0 : l && !a && (o = !1), o;
}
const wp = () => !0;
function zw(l, { connectionMode: a, connectionRadius: o, handleId: r, nodeId: s, edgeUpdaterType: f, isTarget: d, domNode: g, nodeLookup: v, lib: x, autoPanOnConnect: y, flowId: m, panBy: p, cancelConnection: b, onConnectStart: E, onConnect: A, onConnectEnd: N, isValidConnection: w = wp, onReconnectEnd: U, updateConnection: _, getTransform: C, getFromHandle: X, autoPanSpeed: B, dragThreshold: R = 1, handleDomNode: G }) {
  const I = dp(l.target);
  let ot = 0, tt;
  const { x: at, y: lt } = pn(l), z = _p(f, G), V = g?.getBoundingClientRect();
  let O = !1;
  if (!V || !z)
    return;
  const H = Ep(s, z, r, v, a);
  if (!H)
    return;
  let q = pn(l, V), $ = !1, P = null, it = !1, dt = null;
  function vt() {
    if (!y || !V)
      return;
    const [ct, rt] = Yd(q, V, B);
    p({ x: ct, y: rt }), ot = requestAnimationFrame(vt);
  }
  const T = {
    ...H,
    nodeId: s,
    type: z,
    position: H.position
  }, k = v.get(s);
  let ut = {
    inProgress: !0,
    isValid: null,
    from: Si(k, T, pt.Left, !0),
    fromHandle: T,
    fromPosition: T.position,
    fromNode: k,
    to: q,
    toHandle: null,
    toPosition: My[T.position],
    toNode: null,
    pointer: q
  };
  function F() {
    O = !0, _(ut), E?.(l, { nodeId: s, handleId: r, handleType: z });
  }
  R === 0 && F();
  function ft(ct) {
    if (!O) {
      const { x: Ht, y: Ot } = pn(ct), Pt = Ht - at, xe = Ot - lt;
      if (!(Pt * Pt + xe * xe > R * R))
        return;
      F();
    }
    if (!X() || !T) {
      gt(ct);
      return;
    }
    const rt = C();
    q = pn(ct, V), tt = Tw(Qu(q, rt, !1, [1, 1]), o, v, T), $ || (vt(), $ = !0);
    const xt = Np(ct, {
      handle: tt,
      connectionMode: a,
      fromNodeId: s,
      fromHandleId: r,
      fromType: d ? "target" : "source",
      isValidConnection: w,
      doc: I,
      lib: x,
      flowId: m,
      nodeLookup: v
    });
    dt = xt.handleDomNode, P = xt.connection, it = Cw(!!tt, xt.isValid);
    const wt = v.get(s), _t = wt ? Si(wt, T, pt.Left, !0) : ut.from, Ct = {
      ...ut,
      from: _t,
      isValid: it,
      to: xt.toHandle && it ? Ea({ x: xt.toHandle.x, y: xt.toHandle.y }, rt) : q,
      toHandle: xt.toHandle,
      toPosition: it && xt.toHandle ? xt.toHandle.position : My[T.position],
      toNode: xt.toHandle ? v.get(xt.toHandle.nodeId) : null,
      pointer: q
    };
    _(Ct), ut = Ct;
  }
  function gt(ct) {
    if (!("touches" in ct && ct.touches.length > 0)) {
      if (O) {
        (tt || dt) && P && it && A?.(P);
        const { inProgress: rt, ...xt } = ut, wt = {
          ...xt,
          toPosition: ut.toHandle ? ut.toPosition : null
        };
        N?.(ct, wt), f && U?.(ct, wt);
      }
      b(), cancelAnimationFrame(ot), $ = !1, it = !1, P = null, dt = null, I.removeEventListener("mousemove", ft), I.removeEventListener("mouseup", gt), I.removeEventListener("touchmove", ft), I.removeEventListener("touchend", gt);
    }
  }
  I.addEventListener("mousemove", ft), I.addEventListener("mouseup", gt), I.addEventListener("touchmove", ft), I.addEventListener("touchend", gt);
}
function Np(l, { handle: a, connectionMode: o, fromNodeId: r, fromHandleId: s, fromType: f, doc: d, lib: g, flowId: v, isValidConnection: x = wp, nodeLookup: y }) {
  const m = f === "target", p = a ? d.querySelector(`.${g}-flow__handle[data-id="${v}-${a?.nodeId}-${a?.id}-${a?.type}"]`) : null, { x: b, y: E } = pn(l), A = d.elementFromPoint(b, E), N = A?.classList.contains(`${g}-flow__handle`) ? A : p, w = {
    handleDomNode: N,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (N) {
    const U = _p(void 0, N), _ = N.getAttribute("data-nodeid"), C = N.getAttribute("data-handleid"), X = N.classList.contains("connectable"), B = N.classList.contains("connectableend");
    if (!_ || !U)
      return w;
    const R = {
      source: m ? _ : r,
      sourceHandle: m ? C : s,
      target: m ? r : _,
      targetHandle: m ? s : C
    };
    w.connection = R;
    const I = X && B && (o === Sa.Strict ? m && U === "source" || !m && U === "target" : _ !== r || C !== s);
    w.isValid = I && x(R), w.toHandle = Ep(_, U, C, y, o, !0);
  }
  return w;
}
const Cd = {
  onPointerDown: zw,
  isValid: Np
};
function Mw({ domNode: l, panZoom: a, getTransform: o, getViewScale: r }) {
  const s = $e(l);
  function f({ translateExtent: g, width: v, height: x, zoomStep: y = 1, pannable: m = !0, zoomable: p = !0, inversePan: b = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !a)
        return;
      const C = o(), X = _.sourceEvent.ctrlKey && Lu() ? 10 : 1, B = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * y, R = C[2] * Math.pow(2, B * X);
      a.scaleTo(R);
    };
    let A = [0, 0];
    const N = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (A = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, w = (_) => {
      const C = o();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !a)
        return;
      const X = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], B = [X[0] - A[0], X[1] - A[1]];
      A = X;
      const R = r() * Math.max(C[2], Math.log(C[2])) * (b ? -1 : 1), G = {
        x: C[0] - B[0] * R,
        y: C[1] - B[1] * R
      }, I = [
        [0, 0],
        [v, x]
      ];
      a.setViewportConstrained({
        x: G.x,
        y: G.y,
        zoom: C[2]
      }, I, g);
    }, U = Pv().on("start", N).on("zoom", m ? w : null).on("zoom.wheel", p ? E : null);
    s.call(U, {});
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
const or = (l) => ({
  x: l.x,
  y: l.y,
  zoom: l.k
}), od = ({ x: l, y: a, zoom: o }) => ir.translate(l, a).scale(o), Vl = (l, a) => l.target.closest(`.${a}`), Tp = (l, a) => a === 2 && Array.isArray(l) && l.includes(2), Aw = (l) => ((l *= 2) <= 1 ? l * l * l : (l -= 2) * l * l + 2) / 2, cd = (l, a = 0, o = Aw, r = () => {
}) => {
  const s = typeof a == "number" && a > 0;
  return s || r(), s ? l.transition().duration(a).ease(o).on("end", r) : l;
}, Cp = (l) => {
  const a = l.ctrlKey && Lu() ? 10 : 1;
  return -l.deltaY * (l.deltaMode === 1 ? 0.05 : l.deltaMode ? 1 : 2e-3) * a;
};
function Ow({ zoomPanValues: l, noWheelClassName: a, d3Selection: o, d3Zoom: r, panOnScrollMode: s, panOnScrollSpeed: f, zoomOnPinch: d, onPanZoomStart: g, onPanZoom: v, onPanZoomEnd: x }) {
  return (y) => {
    if (Vl(y, a))
      return y.ctrlKey && y.preventDefault(), !1;
    y.preventDefault(), y.stopImmediatePropagation();
    const m = o.property("__zoom").k || 1;
    if (y.ctrlKey && d) {
      const N = mn(y), w = Cp(y), U = m * Math.pow(2, w);
      r.scaleTo(o, U, N, y);
      return;
    }
    const p = y.deltaMode === 1 ? 20 : 1;
    let b = s === mi.Vertical ? 0 : y.deltaX * p, E = s === mi.Horizontal ? 0 : y.deltaY * p;
    !Lu() && y.shiftKey && s !== mi.Vertical && (b = y.deltaY * p, E = 0), r.translateBy(
      o,
      -(b / m) * f,
      -(E / m) * f,
      // @ts-ignore
      { internal: !0 }
    );
    const A = or(o.property("__zoom"));
    clearTimeout(l.panScrollTimeout), l.isPanScrolling ? v?.(y, A) : (l.isPanScrolling = !0, g?.(y, A)), l.panScrollTimeout = setTimeout(() => {
      x?.(y, A), l.isPanScrolling = !1;
    }, 150);
  };
}
function Dw({ noWheelClassName: l, preventScrolling: a, d3ZoomHandler: o }) {
  return function(r, s) {
    const f = r.type === "wheel", d = !a && f && !r.ctrlKey, g = Vl(r, l);
    if (r.ctrlKey && f && g && r.preventDefault(), d || g)
      return null;
    r.preventDefault(), o.call(this, r, s);
  };
}
function Rw({ zoomPanValues: l, onDraggingChange: a, onPanZoomStart: o }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const s = or(r.transform);
    l.mouseButton = r.sourceEvent?.button || 0, l.isZoomingOrPanning = !0, l.prevViewport = s, r.sourceEvent?.type === "mousedown" && a(!0), o && o?.(r.sourceEvent, s);
  };
}
function Hw({ zoomPanValues: l, panOnDrag: a, onPaneContextMenu: o, onTransformChange: r, onPanZoom: s }) {
  return (f) => {
    l.usedRightMouseButton = !!(o && Tp(a, l.mouseButton ?? 0)), f.sourceEvent?.sync || r([f.transform.x, f.transform.y, f.transform.k]), s && !f.sourceEvent?.internal && s?.(f.sourceEvent, or(f.transform));
  };
}
function Bw({ zoomPanValues: l, panOnDrag: a, panOnScroll: o, onDraggingChange: r, onPanZoomEnd: s, onPaneContextMenu: f }) {
  return (d) => {
    if (!d.sourceEvent?.internal && (l.isZoomingOrPanning = !1, f && Tp(a, l.mouseButton ?? 0) && !l.usedRightMouseButton && d.sourceEvent && f(d.sourceEvent), l.usedRightMouseButton = !1, r(!1), s)) {
      const g = or(d.transform);
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
function Uw({ panActivationKeyPressed: l, zoomActivationKeyPressed: a, zoomOnScroll: o, zoomOnPinch: r, panOnDrag: s, panOnScroll: f, zoomOnDoubleClick: d, userSelectionActive: g, noWheelClassName: v, noPanClassName: x, lib: y, connectionInProgress: m }) {
  return (p) => {
    const b = a || o, E = r && p.ctrlKey, A = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (Vl(p, `${y}-flow__node`) || Vl(p, `${y}-flow__edge`) || Vl(p, `${y}-flow__selection`) || Vl(p, `${y}-flow__nodesselection`)))
      return !0;
    if (!s && !b && !f && !d && !r || g || m && !A || Vl(p, v) && A || Vl(p, x) && (!A || f && A && !a) || !r && p.ctrlKey && A)
      return !1;
    if (!r && p.type === "touchstart" && p.touches?.length > 1)
      return p.preventDefault(), !1;
    if (!b && !f && !E && A || !s && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(s) && !s.includes(p.button) && p.type === "mousedown")
      return !1;
    const N = Array.isArray(s) && s.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || A || l) && N;
  };
}
function Lw({ domNode: l, minZoom: a, maxZoom: o, translateExtent: r, viewport: s, onPanZoom: f, onPanZoomStart: d, onPanZoomEnd: g, onDraggingChange: v }) {
  const x = {
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
  (typeof ResizeObserver < "u" ? new ResizeObserver((lt) => {
    const z = lt[0];
    z && (m = [
      [0, 0],
      [z.contentRect.width, z.contentRect.height]
    ]);
  }) : null)?.observe(l);
  const b = Pv().extent(() => m).scaleExtent([a, o]).translateExtent(r), E = $e(l).call(b);
  C({
    x: s.x,
    y: s.y,
    zoom: ba(s.zoom, a, o)
  }, [
    [0, 0],
    [y.width, y.height]
  ], r);
  const A = E.on("wheel.zoom"), N = E.on("dblclick.zoom");
  b.wheelDelta(Cp);
  async function w(lt, z) {
    return E ? new Promise((V) => {
      b?.interpolate(z?.interpolate === "linear" ? zu : Yc).transform(cd(E, z?.duration, z?.ease, () => V(!0)), lt);
    }) : !1;
  }
  function U({ noWheelClassName: lt, noPanClassName: z, onPaneContextMenu: V, userSelectionActive: O, panOnScroll: H, panOnDrag: q, panOnScrollMode: $, panOnScrollSpeed: P, preventScrolling: it, zoomOnPinch: dt, zoomOnScroll: vt, zoomOnDoubleClick: T, panActivationKeyPressed: k = !1, zoomActivationKeyPressed: st, lib: ut, onTransformChange: F, connectionInProgress: ft, paneClickDistance: gt, selectionOnDrag: ct }) {
    O && !x.isZoomingOrPanning && _();
    const rt = H && !st && !O;
    b.clickDistance(ct ? 1 / 0 : !vn(gt) || gt < 0 ? 0 : gt);
    const xt = rt ? Ow({
      zoomPanValues: x,
      noWheelClassName: lt,
      d3Selection: E,
      d3Zoom: b,
      panOnScrollMode: $,
      panOnScrollSpeed: P,
      zoomOnPinch: dt,
      onPanZoomStart: d,
      onPanZoom: f,
      onPanZoomEnd: g
    }) : Dw({
      noWheelClassName: lt,
      preventScrolling: it,
      d3ZoomHandler: A
    });
    E.on("wheel.zoom", xt, { passive: !1 });
    const wt = Rw({
      zoomPanValues: x,
      onDraggingChange: v,
      onPanZoomStart: d
    });
    b.on("start", wt);
    const _t = Hw({
      zoomPanValues: x,
      panOnDrag: q,
      onPaneContextMenu: !!V,
      onPanZoom: f,
      onTransformChange: F
    });
    b.on("zoom", _t);
    const Ct = Bw({
      zoomPanValues: x,
      panOnDrag: q,
      panOnScroll: H,
      onPaneContextMenu: V,
      onPanZoomEnd: g,
      onDraggingChange: v
    });
    b.on("end", Ct);
    const Ht = Uw({
      panActivationKeyPressed: k,
      zoomActivationKeyPressed: st,
      panOnDrag: q,
      zoomOnScroll: vt,
      panOnScroll: H,
      zoomOnDoubleClick: T,
      zoomOnPinch: dt,
      userSelectionActive: O,
      noPanClassName: z,
      noWheelClassName: lt,
      lib: ut,
      connectionInProgress: ft
    });
    b.filter(Ht), T ? E.on("dblclick.zoom", N) : E.on("dblclick.zoom", null);
  }
  function _() {
    b.on("zoom", null);
  }
  async function C(lt, z, V) {
    const O = od(lt), H = b?.constrain()(O, z, V);
    return H && await w(H), H;
  }
  async function X(lt, z) {
    const V = od(lt);
    return await w(V, z), V;
  }
  function B(lt) {
    if (E) {
      const z = od(lt), V = E.property("__zoom");
      (V.k !== lt.zoom || V.x !== lt.x || V.y !== lt.y) && b?.transform(E, z, null, { sync: !0 });
    }
  }
  function R() {
    const lt = E ? Wv(E.node()) : { x: 0, y: 0, k: 1 };
    return { x: lt.x, y: lt.y, zoom: lt.k };
  }
  async function G(lt, z) {
    return E ? new Promise((V) => {
      b?.interpolate(z?.interpolate === "linear" ? zu : Yc).scaleTo(cd(E, z?.duration, z?.ease, () => V(!0)), lt);
    }) : !1;
  }
  async function I(lt, z) {
    return E ? new Promise((V) => {
      b?.interpolate(z?.interpolate === "linear" ? zu : Yc).scaleBy(cd(E, z?.duration, z?.ease, () => V(!0)), lt);
    }) : !1;
  }
  function ot(lt) {
    b?.scaleExtent(lt);
  }
  function tt(lt) {
    b?.translateExtent(lt);
  }
  function at(lt) {
    const z = !vn(lt) || lt < 0 ? 0 : lt;
    b?.clickDistance(z);
  }
  return {
    update: U,
    destroy: _,
    setViewport: X,
    setViewportConstrained: C,
    getViewport: R,
    scaleTo: G,
    scaleBy: I,
    setScaleExtent: ot,
    setTranslateExtent: tt,
    syncViewport: B,
    setClickDistance: at
  };
}
var _a;
(function(l) {
  l.Line = "line", l.Handle = "handle";
})(_a || (_a = {}));
function Vw({ width: l, prevWidth: a, height: o, prevHeight: r, affectsX: s, affectsY: f }) {
  const d = l - a, g = o - r, v = [d > 0 ? 1 : d < 0 ? -1 : 0, g > 0 ? 1 : g < 0 ? -1 : 0];
  return d && s && (v[0] = v[0] * -1), g && f && (v[1] = v[1] * -1), v;
}
function Xy(l) {
  const a = l.includes("right") || l.includes("left"), o = l.includes("bottom") || l.includes("top"), r = l.includes("left"), s = l.includes("top");
  return {
    isHorizontal: a,
    isVertical: o,
    affectsX: r,
    affectsY: s
  };
}
function Ul(l, a) {
  return Math.max(0, a - l);
}
function Ll(l, a) {
  return Math.max(0, l - a);
}
function Bc(l, a, o) {
  return Math.max(0, a - l, l - o);
}
function Zy(l, a) {
  return l ? !a : a;
}
function Yw(l, a, o, r, s, f, d, g) {
  let { affectsX: v, affectsY: x } = a;
  const { isHorizontal: y, isVertical: m } = a, p = y && m, { xSnapped: b, ySnapped: E } = o, { minWidth: A, maxWidth: N, minHeight: w, maxHeight: U } = r, { x: _, y: C, width: X, height: B, aspectRatio: R } = l;
  let G = Math.floor(y ? b - l.pointerX : 0), I = Math.floor(m ? E - l.pointerY : 0);
  const ot = X + (v ? -G : G), tt = B + (x ? -I : I), at = -f[0] * X, lt = -f[1] * B;
  let z = Bc(ot, A, N), V = Bc(tt, w, U);
  if (d) {
    let q = 0, $ = 0;
    v && G < 0 ? q = Ul(_ + G + at, d[0][0]) : !v && G > 0 && (q = Ll(_ + ot + at, d[1][0])), x && I < 0 ? $ = Ul(C + I + lt, d[0][1]) : !x && I > 0 && ($ = Ll(C + tt + lt, d[1][1])), z = Math.max(z, q), V = Math.max(V, $);
  }
  if (g) {
    let q = 0, $ = 0;
    v && G > 0 ? q = Ll(_ + G, g[0][0]) : !v && G < 0 && (q = Ul(_ + ot, g[1][0])), x && I > 0 ? $ = Ll(C + I, g[0][1]) : !x && I < 0 && ($ = Ul(C + tt, g[1][1])), z = Math.max(z, q), V = Math.max(V, $);
  }
  if (s) {
    if (y) {
      const q = Bc(ot / R, w, U) * R;
      if (z = Math.max(z, q), d) {
        let $ = 0;
        !v && !x || v && !x && p ? $ = Ll(C + lt + ot / R, d[1][1]) * R : $ = Ul(C + lt + (v ? G : -G) / R, d[0][1]) * R, z = Math.max(z, $);
      }
      if (g) {
        let $ = 0;
        !v && !x || v && !x && p ? $ = Ul(C + ot / R, g[1][1]) * R : $ = Ll(C + (v ? G : -G) / R, g[0][1]) * R, z = Math.max(z, $);
      }
    }
    if (m) {
      const q = Bc(tt * R, A, N) / R;
      if (V = Math.max(V, q), d) {
        let $ = 0;
        !v && !x || x && !v && p ? $ = Ll(_ + tt * R + at, d[1][0]) / R : $ = Ul(_ + (x ? I : -I) * R + at, d[0][0]) / R, V = Math.max(V, $);
      }
      if (g) {
        let $ = 0;
        !v && !x || x && !v && p ? $ = Ul(_ + tt * R, g[1][0]) / R : $ = Ll(_ + (x ? I : -I) * R, g[0][0]) / R, V = Math.max(V, $);
      }
    }
  }
  I = I + (I < 0 ? V : -V), G = G + (G < 0 ? z : -z), s && (p ? ot > tt * R ? I = (Zy(v, x) ? -G : G) / R : G = (Zy(v, x) ? -I : I) * R : y ? (I = G / R, x = v) : (G = I * R, v = x));
  const O = v ? _ + G : _, H = x ? C + I : C;
  return {
    width: X + (v ? -G : G),
    height: B + (x ? -I : I),
    x: f[0] * G * (v ? -1 : 1) + O,
    y: f[1] * I * (x ? -1 : 1) + H
  };
}
const zp = { width: 0, height: 0, x: 0, y: 0 }, jw = {
  ...zp,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function qw(l, a, o) {
  const r = a.position.x + l.position.x, s = a.position.y + l.position.y, f = l.measured.width ?? 0, d = l.measured.height ?? 0, g = o[0] * f, v = o[1] * d;
  return [
    [r - g, s - v],
    [r + f - g, s + d - v]
  ];
}
function Xw({ domNode: l, nodeId: a, getStoreItems: o, onChange: r, onEnd: s }) {
  const f = $e(l);
  let d = {
    controlDirection: Xy("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function g({ controlPosition: x, boundaries: y, keepAspectRatio: m, resizeDirection: p, onResizeStart: b, onResize: E, onResizeEnd: A, shouldResize: N }) {
    let w = { ...zp }, U = { ...jw };
    d = {
      boundaries: y,
      resizeDirection: p,
      keepAspectRatio: m,
      controlDirection: Xy(x)
    };
    let _, C = null, X = [], B, R, G;
    const I = Vv().on("start", (ot) => {
      const { nodeLookup: tt, transform: at, snapGrid: lt, snapToGrid: z, nodeOrigin: V, paneDomNode: O } = o();
      if (_ = tt.get(a), !_)
        return;
      C = O?.getBoundingClientRect() ?? null;
      const { xSnapped: H, ySnapped: q } = Mu(ot.sourceEvent, {
        transform: at,
        snapGrid: lt,
        snapToGrid: z,
        containerBounds: C
      });
      w = {
        width: _.measured.width ?? 0,
        height: _.measured.height ?? 0,
        x: _.position.x ?? 0,
        y: _.position.y ?? 0
      }, U = {
        ...w,
        pointerX: H,
        pointerY: q,
        aspectRatio: w.width / w.height
      }, B = void 0, R = xi(_.extent) ? _.extent : void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (B = tt.get(_.parentId)), B && _.extent === "parent" && (R = [
        [0, 0],
        [B.measured.width, B.measured.height]
      ]), X = [], G = void 0;
      for (const [$, P] of tt)
        if (P.parentId === a && (X.push({
          id: $,
          position: { ...P.position },
          extent: P.extent
        }), P.extent === "parent" || P.expandParent)) {
          const it = qw(P, _, P.origin ?? V);
          G ? G = [
            [Math.min(it[0][0], G[0][0]), Math.min(it[0][1], G[0][1])],
            [Math.max(it[1][0], G[1][0]), Math.max(it[1][1], G[1][1])]
          ] : G = it;
        }
      b?.(ot, { ...w });
    }).on("drag", (ot) => {
      const { transform: tt, snapGrid: at, snapToGrid: lt, nodeOrigin: z } = o(), V = Mu(ot.sourceEvent, {
        transform: tt,
        snapGrid: at,
        snapToGrid: lt,
        containerBounds: C
      }), O = [];
      if (!_)
        return;
      const { x: H, y: q, width: $, height: P } = w, it = {}, dt = _.origin ?? z, { width: vt, height: T, x: k, y: st } = Yw(U, d.controlDirection, V, d.boundaries, d.keepAspectRatio, dt, R, G), ut = vt !== $, F = T !== P, ft = k !== H && ut, gt = st !== q && F;
      if (!ft && !gt && !ut && !F)
        return;
      const ct = {
        prevValues: { ...w },
        startX: U.x,
        startY: U.y,
        childNodes: X.map((_t) => ({
          ..._t,
          position: { ..._t.position }
        }))
      };
      if ((ft || gt || dt[0] === 1 || dt[1] === 1) && (it.x = ft ? k : w.x, it.y = gt ? st : w.y, w.x = it.x, w.y = it.y, X.length > 0)) {
        const _t = k - H, Ct = st - q;
        for (const Ht of X)
          Ht.position = {
            x: Ht.position.x - _t + dt[0] * (vt - $),
            y: Ht.position.y - Ct + dt[1] * (T - P)
          }, O.push(Ht);
      }
      if ((ut || F) && (it.width = ut && (!d.resizeDirection || d.resizeDirection === "horizontal") ? vt : w.width, it.height = F && (!d.resizeDirection || d.resizeDirection === "vertical") ? T : w.height, w.width = it.width, w.height = it.height), B && _.expandParent) {
        const _t = dt[0] * (it.width ?? 0);
        it.x && it.x < _t && (w.x = _t, U.x = U.x - (it.x - _t));
        const Ct = dt[1] * (it.height ?? 0);
        it.y && it.y < Ct && (w.y = Ct, U.y = U.y - (it.y - Ct));
      }
      const rt = Vw({
        width: w.width,
        prevWidth: $,
        height: w.height,
        prevHeight: P,
        affectsX: d.controlDirection.affectsX,
        affectsY: d.controlDirection.affectsY
      }), xt = { ...w, direction: rt };
      if (N?.(ot, xt) === !1) {
        w = ct.prevValues, U.x = ct.startX, U.y = ct.startY, X.forEach((_t, Ct) => {
          _t.position = ct.childNodes[Ct].position;
        });
        return;
      }
      E?.(ot, xt), r(it, O);
    }).on("end", (ot) => {
      A?.(ot, { ...w }), s?.({ ...w });
    });
    f.call(I);
  }
  function v() {
    f.on(".drag", null);
  }
  return {
    update: g,
    destroy: v
  };
}
var rd = { exports: {} }, sd = {}, fd = { exports: {} }, dd = {};
var Gy;
function Zw() {
  if (Gy) return dd;
  Gy = 1;
  var l = Yu();
  function a(m, p) {
    return m === p && (m !== 0 || 1 / m === 1 / p) || m !== m && p !== p;
  }
  var o = typeof Object.is == "function" ? Object.is : a, r = l.useState, s = l.useEffect, f = l.useLayoutEffect, d = l.useDebugValue;
  function g(m, p) {
    var b = p(), E = r({ inst: { value: b, getSnapshot: p } }), A = E[0].inst, N = E[1];
    return f(
      function() {
        A.value = b, A.getSnapshot = p, v(A) && N({ inst: A });
      },
      [m, b, p]
    ), s(
      function() {
        return v(A) && N({ inst: A }), m(function() {
          v(A) && N({ inst: A });
        });
      },
      [m]
    ), d(b), b;
  }
  function v(m) {
    var p = m.getSnapshot;
    m = m.value;
    try {
      var b = p();
      return !o(m, b);
    } catch {
      return !0;
    }
  }
  function x(m, p) {
    return p();
  }
  var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? x : g;
  return dd.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : y, dd;
}
var Qy;
function Gw() {
  return Qy || (Qy = 1, fd.exports = Zw()), fd.exports;
}
var Ky;
function Qw() {
  if (Ky) return sd;
  Ky = 1;
  var l = Yu(), a = Gw();
  function o(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : o, s = a.useSyncExternalStore, f = l.useRef, d = l.useEffect, g = l.useMemo, v = l.useDebugValue;
  return sd.useSyncExternalStoreWithSelector = function(x, y, m, p, b) {
    var E = f(null);
    if (E.current === null) {
      var A = { hasValue: !1, value: null };
      E.current = A;
    } else A = E.current;
    E = g(
      function() {
        function w(B) {
          if (!U) {
            if (U = !0, _ = B, B = p(B), b !== void 0 && A.hasValue) {
              var R = A.value;
              if (b(R, B))
                return C = R;
            }
            return C = B;
          }
          if (R = C, r(_, B)) return R;
          var G = p(B);
          return b !== void 0 && b(R, G) ? (_ = B, R) : (_ = B, C = G);
        }
        var U = !1, _, C, X = m === void 0 ? null : m;
        return [
          function() {
            return w(y());
          },
          X === null ? void 0 : function() {
            return w(X());
          }
        ];
      },
      [y, m, p, b]
    );
    var N = s(x, E[0], E[1]);
    return d(
      function() {
        A.hasValue = !0, A.value = N;
      },
      [N]
    ), v(N), N;
  }, sd;
}
var $y;
function Kw() {
  return $y || ($y = 1, rd.exports = Qw()), rd.exports;
}
var $w = Kw();
const Jw = /* @__PURE__ */ Md($w), Iw = {}, Jy = (l) => {
  let a;
  const o = /* @__PURE__ */ new Set(), r = (y, m) => {
    const p = typeof y == "function" ? y(a) : y;
    if (!Object.is(p, a)) {
      const b = a;
      a = m ?? (typeof p != "object" || p === null) ? p : Object.assign({}, a, p), o.forEach((E) => E(a, b));
    }
  }, s = () => a, v = { setState: r, getState: s, getInitialState: () => x, subscribe: (y) => (o.add(y), () => o.delete(y)), destroy: () => {
    (Iw ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), o.clear();
  } }, x = a = l(r, s, v);
  return v;
}, kw = (l) => l ? Jy(l) : Jy, { useDebugValue: Fw } = Ev, { useSyncExternalStoreWithSelector: Ww } = Jw, Pw = (l) => l;
function Mp(l, a = Pw, o) {
  const r = Ww(
    l.subscribe,
    l.getState,
    l.getServerState || l.getInitialState,
    a,
    o
  );
  return Fw(r), r;
}
const Iy = (l, a) => {
  const o = kw(l), r = (s, f = a) => Mp(o, s, f);
  return Object.assign(r, o), r;
}, t3 = (l, a) => l ? Iy(l, a) : Iy;
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
_v();
const cr = W.createContext(null), e3 = cr.Provider, Ap = xn.error001("react");
function Ut(l, a) {
  const o = W.useContext(cr);
  if (o === null)
    throw new Error(Ap);
  return Mp(o, l, a);
}
function $t() {
  const l = W.useContext(cr);
  if (l === null)
    throw new Error(Ap);
  return W.useMemo(() => ({
    getState: l.getState,
    setState: l.setState,
    subscribe: l.subscribe
  }), [l]);
}
const ky = { display: "none" }, n3 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Op = "react-flow__node-desc", Dp = "react-flow__edge-desc", l3 = "react-flow__aria-live", i3 = (l) => l.ariaLiveMessage, a3 = (l) => l.ariaLabelConfig;
function u3({ rfId: l }) {
  const a = Ut(i3);
  return Z.jsx("div", { id: `${l3}-${l}`, "aria-live": "assertive", "aria-atomic": "true", style: n3, children: a });
}
function o3({ rfId: l, disableKeyboardA11y: a }) {
  const o = Ut(a3);
  return Z.jsxs(Z.Fragment, { children: [Z.jsx("div", { id: `${Op}-${l}`, style: ky, children: a ? o["node.a11yDescription.default"] : o["node.a11yDescription.keyboardDisabled"] }), Z.jsx("div", { id: `${Dp}-${l}`, style: ky, children: o["edge.a11yDescription.default"] }), !a && Z.jsx(u3, { rfId: l })] });
}
const rr = W.forwardRef(({ position: l = "top-left", children: a, className: o, style: r, ...s }, f) => {
  const d = `${l}`.split("-");
  return Z.jsx("div", { className: ue(["react-flow__panel", o, ...d]), style: r, ref: f, ...s, children: a });
});
rr.displayName = "Panel";
const Fy = "https://reactflow.dev?utm_source=attribution";
function c3({ proOptions: l, position: a = "bottom-right" }) {
  return W.useEffect(() => {
  }, []), l?.hideAttribution ? null : Z.jsx(rr, { position: a, className: "react-flow__attribution", "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${Fy}`, children: Z.jsx("a", { href: Fy, target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const r3 = (l) => {
  const a = [], o = [];
  for (const [, r] of l.nodeLookup)
    r.selected && a.push(r.internals.userNode);
  for (const [, r] of l.edgeLookup)
    r.selected && o.push(r);
  return { selectedNodes: a, selectedEdges: o };
}, Uc = (l) => l.id;
function s3(l, a) {
  return kt(l.selectedNodes.map(Uc), a.selectedNodes.map(Uc)) && kt(l.selectedEdges.map(Uc), a.selectedEdges.map(Uc));
}
function f3({ onSelectionChange: l }) {
  const a = $t(), { selectedNodes: o, selectedEdges: r } = Ut(r3, s3);
  return W.useEffect(() => {
    const s = { nodes: o, edges: r };
    l?.(s), a.getState().onSelectionChangeHandlers.forEach((f) => f(s));
  }, [o, r, l]), null;
}
const d3 = (l) => !!l.onSelectionChangeHandlers;
function h3({ onSelectionChange: l }) {
  const a = Ut(d3);
  return l || a ? Z.jsx(f3, { onSelectionChange: l }) : null;
}
const Rp = [0, 0], g3 = { x: 0, y: 0, zoom: 1 }, m3 = [
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
], Wy = [...m3, "rfId"], y3 = (l) => ({
  setNodes: l.setNodes,
  setEdges: l.setEdges,
  setMinZoom: l.setMinZoom,
  setMaxZoom: l.setMaxZoom,
  setTranslateExtent: l.setTranslateExtent,
  setNodeExtent: l.setNodeExtent,
  reset: l.reset,
  setDefaultNodesAndEdges: l.setDefaultNodesAndEdges
}), Py = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Hu,
  nodeOrigin: Rp,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function v3(l) {
  const { setNodes: a, setEdges: o, setMinZoom: r, setMaxZoom: s, setTranslateExtent: f, setNodeExtent: d, reset: g, setDefaultNodesAndEdges: v } = Ut(y3, kt), x = $t();
  W.useEffect(() => (v(l.defaultNodes, l.defaultEdges), () => {
    y.current = Py, g();
  }), []);
  const y = W.useRef(Py);
  return W.useEffect(
    () => {
      for (const m of Wy) {
        const p = l[m], b = y.current[m];
        p !== b && (typeof l[m] > "u" || (m === "nodes" ? a(p) : m === "edges" ? o(p) : m === "minZoom" ? r(p) : m === "maxZoom" ? s(p) : m === "translateExtent" ? f(p) : m === "nodeExtent" ? d(p) : m === "ariaLabelConfig" ? x.setState({ ariaLabelConfig: ew(p) }) : m === "fitView" ? x.setState({ fitViewQueued: p }) : m === "fitViewOptions" ? x.setState({ fitViewOptions: p }) : x.setState({ [m]: p })));
      }
      y.current = l;
    },
    // Only re-run the effect if one of the fields we track changes
    Wy.map((m) => l[m])
  ), null;
}
function tv() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function p3(l) {
  const [a, o] = W.useState(l === "system" ? null : l);
  return W.useEffect(() => {
    if (l !== "system") {
      o(l);
      return;
    }
    const r = tv(), s = () => o(r?.matches ? "dark" : "light");
    return s(), r?.addEventListener("change", s), () => {
      r?.removeEventListener("change", s);
    };
  }, [l]), a !== null ? a : tv()?.matches ? "dark" : "light";
}
const ev = typeof document < "u" ? document : null;
function Vu(l = null, a = { target: ev, actInsideInputWithModifier: !0 }) {
  const [o, r] = W.useState(!1), s = W.useRef(!1), f = W.useRef(/* @__PURE__ */ new Set([])), [d, g] = W.useMemo(() => {
    if (l !== null) {
      const x = (Array.isArray(l) ? l : [l]).filter((m) => typeof m == "string").map((m) => m.replace(/\+/g, `
`).replace(`

`, `
+`).split(`
`)), y = x.reduce((m, p) => m.concat(...p), []);
      return [x, y];
    }
    return [[], []];
  }, [l]);
  return W.useEffect(() => {
    const v = a?.target ?? ev, x = a?.actInsideInputWithModifier ?? !0;
    if (l !== null) {
      const y = (b) => {
        if (s.current = b.ctrlKey || b.metaKey || b.shiftKey || b.altKey, (!s.current || s.current && !x) && hp(b))
          return !1;
        const A = lv(b.code, g);
        if (f.current.add(b[A]), nv(d, f.current, !1)) {
          const N = b.composedPath?.()?.[0] || b.target, w = N?.nodeName === "BUTTON" || N?.nodeName === "A";
          a.preventDefault !== !1 && (s.current || !w) && b.preventDefault(), r(!0);
        }
      }, m = (b) => {
        const E = lv(b.code, g);
        nv(d, f.current, !0) ? (r(!1), f.current.clear()) : f.current.delete(b[E]), b.key === "Meta" && f.current.clear(), s.current = !1;
      }, p = () => {
        f.current.clear(), r(!1);
      };
      return v?.addEventListener("keydown", y), v?.addEventListener("keyup", m), window.addEventListener("blur", p), window.addEventListener("contextmenu", p), () => {
        v?.removeEventListener("keydown", y), v?.removeEventListener("keyup", m), window.removeEventListener("blur", p), window.removeEventListener("contextmenu", p);
      };
    }
  }, [l, r]), o;
}
function nv(l, a, o) {
  return l.filter((r) => o || r.length === a.size).some((r) => r.every((s) => a.has(s)));
}
function lv(l, a) {
  return a.includes(l) ? "code" : "key";
}
const x3 = () => {
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
      const { width: r, height: s, minZoom: f, maxZoom: d, panZoom: g } = l.getState(), v = jd(a, r, s, f, d, o?.padding ?? 0.1);
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
      const { x: g, y: v } = d.getBoundingClientRect(), x = {
        x: a.x - g,
        y: a.y - v
      }, y = o.snapGrid ?? s, m = o.snapToGrid ?? f;
      return Qu(x, r, m, y);
    },
    flowToScreenPosition: (a) => {
      const { transform: o, domNode: r } = l.getState();
      if (!r)
        return a;
      const { x: s, y: f } = r.getBoundingClientRect(), d = Ea(a, o);
      return {
        x: d.x + s,
        y: d.y + f
      };
    }
  }), []);
};
function Hp(l, a) {
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
      S3(v, g);
    o.push(g);
  }
  return s.length && s.forEach((f) => {
    f.index !== void 0 ? o.splice(f.index, 0, { ...f.item }) : o.push({ ...f.item });
  }), o;
}
function S3(l, a) {
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
function Bp(l, a) {
  return Hp(l, a);
}
function Up(l, a) {
  return Hp(l, a);
}
function di(l, a) {
  return {
    id: l,
    type: "select",
    selected: a
  };
}
function ma(l, a = /* @__PURE__ */ new Set(), o = !1) {
  const r = [];
  for (const [s, f] of l) {
    const d = a.has(s);
    !(f.selected === void 0 && !d) && f.selected !== d && (o && (f.selected = d), r.push(di(f.id, d)));
  }
  return r;
}
function iv({ items: l = [], lookup: a }) {
  const o = [], r = new Map(l.map((s) => [s.id, s]));
  for (const [s, f] of l.entries()) {
    const d = a.get(f.id), g = d?.internals?.userNode ?? d;
    g !== void 0 && g !== f && o.push({ id: f.id, item: f, type: "replace" }), g === void 0 && o.push({ item: f, type: "add", index: s });
  }
  for (const [s] of a)
    r.get(s) === void 0 && o.push({ id: s, type: "remove" });
  return o;
}
function av(l) {
  return {
    id: l.id,
    type: "remove"
  };
}
const b3 = cp();
function E3(l, a, o = {}) {
  return ow(l, a, {
    ...o,
    onError: o.onError ?? b3
  });
}
const uv = (l) => K_(l), _3 = (l) => lp(l);
function Lp(l) {
  return W.forwardRef(l);
}
const Vp = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function ov(l) {
  const [a, o] = W.useState(BigInt(0)), [r] = W.useState(() => w3(() => o((s) => s + BigInt(1))));
  return Vp(() => {
    const s = r.get();
    s.length && (l(s), r.reset());
  }, [a]), r;
}
function w3(l) {
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
const Yp = W.createContext(null);
function N3({ children: l }) {
  const a = $t(), o = W.useCallback((g) => {
    const { nodes: v = [], setNodes: x, hasDefaultNodes: y, onNodesChange: m, nodeLookup: p, fitViewQueued: b, onNodesChangeMiddlewareMap: E } = a.getState();
    let A = v;
    for (const w of g)
      A = typeof w == "function" ? w(A) : w;
    let N = iv({
      items: A,
      lookup: p
    });
    for (const w of E.values())
      N = w(N);
    y && x(A), N.length > 0 ? m?.(N) : b && window.requestAnimationFrame(() => {
      const { fitViewQueued: w, nodes: U, setNodes: _ } = a.getState();
      w && _(U);
    });
  }, []), r = ov(o), s = W.useCallback((g) => {
    const { edges: v = [], setEdges: x, hasDefaultEdges: y, onEdgesChange: m, edgeLookup: p } = a.getState();
    let b = v;
    for (const E of g)
      b = typeof E == "function" ? E(b) : E;
    y ? x(b) : m && m(iv({
      items: b,
      lookup: p
    }));
  }, []), f = ov(s), d = W.useMemo(() => ({ nodeQueue: r, edgeQueue: f }), []);
  return Z.jsx(Yp.Provider, { value: d, children: l });
}
function T3() {
  const l = W.useContext(Yp);
  if (!l)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return l;
}
const C3 = (l) => !!l.panZoom;
function sr() {
  const l = x3(), a = $t(), o = T3(), r = Ut(C3), s = W.useMemo(() => {
    const f = (m) => a.getState().nodeLookup.get(m), d = (m) => {
      o.nodeQueue.push(m);
    }, g = (m) => {
      o.edgeQueue.push(m);
    }, v = (m) => {
      const { nodeLookup: p, nodeOrigin: b } = a.getState(), E = uv(m) ? m : p.get(m.id), A = E.parentId ? sp(E.position, E.measured, E.parentId, p, b) : E.position, N = {
        ...E,
        position: A,
        width: E.measured?.width ?? E.width,
        height: E.measured?.height ?? E.height
      };
      return Uu(N);
    }, x = (m, p, b = { replace: !1 }) => {
      d((E) => E.map((A) => {
        if (A.id === m) {
          const N = typeof p == "function" ? p(A) : p;
          return b.replace && uv(N) ? N : { ...A, ...N };
        }
        return A;
      }));
    }, y = (m, p, b = { replace: !1 }) => {
      g((E) => E.map((A) => {
        if (A.id === m) {
          const N = typeof p == "function" ? p(A) : p;
          return b.replace && _3(N) ? N : { ...A, ...N };
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
        return m.map((p) => ({ ...p }));
      },
      getEdge: (m) => a.getState().edgeLookup.get(m),
      setNodes: d,
      setEdges: g,
      addNodes: (m) => {
        const p = Array.isArray(m) ? m : [m];
        o.nodeQueue.push((b) => [...b, ...p]);
      },
      addEdges: (m) => {
        const p = Array.isArray(m) ? m : [m];
        o.edgeQueue.push((b) => [...b, ...p]);
      },
      toObject: () => {
        const { nodes: m = [], edges: p = [], transform: b } = a.getState(), [E, A, N] = b;
        return {
          nodes: m.map((w) => ({ ...w })),
          edges: p.map((w) => ({ ...w })),
          viewport: {
            x: E,
            y: A,
            zoom: N
          }
        };
      },
      deleteElements: async ({ nodes: m = [], edges: p = [] }) => {
        const { nodes: b, edges: E, onNodesDelete: A, onEdgesDelete: N, triggerNodeChanges: w, triggerEdgeChanges: U, onDelete: _, onBeforeDelete: C } = a.getState(), { nodes: X, edges: B } = await F_({
          nodesToRemove: m,
          edgesToRemove: p,
          nodes: b,
          edges: E,
          onBeforeDelete: C
        }), R = B.length > 0, G = X.length > 0;
        if (R) {
          const I = B.map(av);
          N?.(B), U(I);
        }
        if (G) {
          const I = X.map(av);
          A?.(X), w(I);
        }
        return (G || R) && _?.({ nodes: X, edges: B }), { deletedNodes: X, deletedEdges: B };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (m, p = !0, b) => {
        const E = Oy(m), A = E ? m : v(m), N = b !== void 0;
        return A ? (b || a.getState().nodes).filter((w) => {
          const U = a.getState().nodeLookup.get(w.id);
          if (U && !E && (w.id === m.id || !U.internals.positionAbsolute))
            return !1;
          const _ = Uu(N ? w : U), C = Wc(_, A);
          return p && C > 0 || C >= _.width * _.height || C >= A.width * A.height;
        }) : [];
      },
      isNodeIntersecting: (m, p, b = !0) => {
        const A = Oy(m) ? m : v(m);
        if (!A)
          return !1;
        const N = Wc(A, p);
        return b && N > 0 || N >= p.width * p.height || N >= A.width * A.height;
      },
      updateNode: x,
      updateNodeData: (m, p, b = { replace: !1 }) => {
        x(m, (E) => {
          const A = typeof p == "function" ? p(E) : p;
          return b.replace ? { ...E, data: A } : { ...E, data: { ...E.data, ...A } };
        }, b);
      },
      updateEdge: y,
      updateEdgeData: (m, p, b = { replace: !1 }) => {
        y(m, (E) => {
          const A = typeof p == "function" ? p(E) : p;
          return b.replace ? { ...E, data: A } : { ...E, data: { ...E.data, ...A } };
        }, b);
      },
      getNodesBounds: (m) => {
        const { nodeLookup: p, nodeOrigin: b } = a.getState();
        return $_(m, { nodeLookup: p, nodeOrigin: b });
      },
      getHandleConnections: ({ type: m, id: p, nodeId: b }) => Array.from(a.getState().connectionLookup.get(`${b}-${m}${p ? `-${p}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: m, handleId: p, nodeId: b }) => Array.from(a.getState().connectionLookup.get(`${b}${m ? p ? `-${m}-${p}` : `-${m}` : ""}`)?.values() ?? []),
      fitView: async (m) => {
        const p = a.getState().fitViewResolver ?? tw();
        return a.setState({ fitViewQueued: !0, fitViewOptions: m, fitViewResolver: p }), o.nodeQueue.push((b) => [...b]), p.promise;
      }
    };
  }, []);
  return W.useMemo(() => ({
    ...s,
    ...l,
    viewportInitialized: r
  }), [r]);
}
const cv = (l) => l.selected, z3 = typeof window < "u" ? window : void 0;
function M3({ deleteKeyCode: l, multiSelectionKeyCode: a }) {
  const o = $t(), { deleteElements: r } = sr(), s = Vu(l, { actInsideInputWithModifier: !1 }), f = Vu(a, { target: z3 });
  W.useEffect(() => {
    if (s) {
      const { edges: d, nodes: g } = o.getState();
      r({ nodes: g.filter(cv), edges: d.filter(cv) }), o.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), W.useEffect(() => {
    o.setState({ multiSelectionActive: f });
  }, [f]);
}
function A3(l) {
  const a = $t();
  W.useEffect(() => {
    const o = () => {
      if (!l.current || !(l.current.checkVisibility?.() ?? !0))
        return !1;
      const r = qd(l.current);
      (r.height === 0 || r.width === 0) && a.getState().onError?.("004", xn.error004()), a.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (l.current) {
      o(), window.addEventListener("resize", o);
      const r = new ResizeObserver(() => o());
      return r.observe(l.current), () => {
        window.removeEventListener("resize", o), r && l.current && r.unobserve(l.current);
      };
    }
  }, []);
}
const fr = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, O3 = (l) => ({
  userSelectionActive: l.userSelectionActive,
  lib: l.lib,
  connectionInProgress: l.connection.inProgress
});
function D3({ onPaneContextMenu: l, zoomOnScroll: a = !0, zoomOnPinch: o = !0, panOnScroll: r = !1, panActivationKeyPressed: s, panOnScrollSpeed: f = 0.5, panOnScrollMode: d = mi.Free, zoomOnDoubleClick: g = !0, panOnDrag: v = !0, defaultViewport: x, translateExtent: y, minZoom: m, maxZoom: p, zoomActivationKeyCode: b, preventScrolling: E = !0, children: A, noWheelClassName: N, noPanClassName: w, onViewportChange: U, isControlledViewport: _, paneClickDistance: C, selectionOnDrag: X }) {
  const B = $t(), R = W.useRef(null), { userSelectionActive: G, lib: I, connectionInProgress: ot } = Ut(O3, kt), tt = Vu(b), at = W.useRef();
  A3(R);
  const lt = W.useCallback((z) => {
    U?.({ x: z[0], y: z[1], zoom: z[2] }), _ || B.setState({ transform: z });
  }, [U, _]);
  return W.useEffect(() => {
    if (R.current) {
      at.current = Lw({
        domNode: R.current,
        minZoom: m,
        maxZoom: p,
        translateExtent: y,
        viewport: x,
        onDraggingChange: (H) => B.setState((q) => q.paneDragging === H ? q : { paneDragging: H }),
        onPanZoomStart: (H, q) => {
          const { onViewportChangeStart: $, onMoveStart: P } = B.getState();
          P?.(H, q), $?.(q);
        },
        onPanZoom: (H, q) => {
          const { onViewportChange: $, onMove: P } = B.getState();
          P?.(H, q), $?.(q);
        },
        onPanZoomEnd: (H, q) => {
          const { onViewportChangeEnd: $, onMoveEnd: P } = B.getState();
          P?.(H, q), $?.(q);
        }
      });
      const { x: z, y: V, zoom: O } = at.current.getViewport();
      return B.setState({
        panZoom: at.current,
        transform: [z, V, O],
        domNode: R.current.closest(".react-flow")
      }), () => {
        at.current?.destroy();
      };
    }
  }, []), W.useEffect(() => {
    at.current?.update({
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
      noPanClassName: w,
      userSelectionActive: G,
      noWheelClassName: N,
      lib: I,
      onTransformChange: lt,
      connectionInProgress: ot,
      selectionOnDrag: X,
      paneClickDistance: C
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
    w,
    G,
    N,
    I,
    lt,
    ot,
    X,
    C
  ]), Z.jsx("div", { className: "react-flow__renderer", ref: R, style: fr, children: A });
}
const R3 = (l) => ({
  userSelectionActive: l.userSelectionActive,
  userSelectionRect: l.userSelectionRect
});
function H3() {
  const { userSelectionActive: l, userSelectionRect: a } = Ut(R3, kt);
  return l && a ? Z.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: a.width,
    height: a.height,
    transform: `translate(${a.x}px, ${a.y}px)`
  } }) : null;
}
const hd = (l, a) => (o) => {
  o.target === a.current && l?.(o);
}, B3 = (l) => ({
  userSelectionActive: l.userSelectionActive,
  elementsSelectable: l.elementsSelectable,
  dragging: l.paneDragging,
  panBy: l.panBy,
  autoPanSpeed: l.autoPanSpeed
});
function U3({ isSelecting: l, selectionKeyPressed: a, selectionMode: o = Bu.Full, panOnDrag: r, autoPanOnSelection: s, paneClickDistance: f, selectionOnDrag: d, onSelectionStart: g, onSelectionEnd: v, onPaneClick: x, onPaneContextMenu: y, onPaneScroll: m, onPaneMouseEnter: p, onPaneMouseMove: b, onPaneMouseLeave: E, children: A }) {
  const N = W.useRef(0), w = $t(), { userSelectionActive: U, elementsSelectable: _, dragging: C, panBy: X, autoPanSpeed: B } = Ut(B3, kt), R = _ && (l || U), G = W.useRef(null), I = W.useRef(), ot = W.useRef(/* @__PURE__ */ new Set()), tt = W.useRef(/* @__PURE__ */ new Set()), at = W.useRef(!1), lt = W.useRef(!1), z = W.useRef({ x: 0, y: 0 }), V = W.useRef(!1), O = (F) => {
    if (lt.current || at.current || w.getState().connection.inProgress) {
      lt.current = !1, at.current = !1;
      return;
    }
    x?.(F), w.getState().resetSelectedElements(), w.setState({ nodesSelectionActive: !1 });
  }, H = (F) => {
    if (Array.isArray(r) && r?.includes(2)) {
      F.preventDefault();
      return;
    }
    y?.(F);
  }, q = m ? (F) => m(F) : void 0, $ = (F) => {
    lt.current && (F.stopPropagation(), lt.current = !1);
  }, P = (F) => {
    if (F.pointerType === "touch" && r !== !1 && !a)
      return;
    const { domNode: ft, transform: gt } = w.getState();
    if (I.current = ft?.getBoundingClientRect(), !I.current)
      return;
    const ct = F.target === G.current;
    if (!ct && !!F.target.closest(".nokey") || !l || !(d && ct || a) || F.button !== 0 || !F.isPrimary)
      return;
    F.target?.setPointerCapture?.(F.pointerId), lt.current = !1;
    const { x: wt, y: _t } = pn(F.nativeEvent, I.current), Ct = Qu({ x: wt, y: _t }, gt);
    w.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: Ct.x,
        startY: Ct.y,
        x: wt,
        y: _t
      }
    }), ct || (F.stopPropagation(), F.preventDefault());
  };
  function it(F, ft) {
    const { userSelectionRect: gt } = w.getState();
    if (!gt)
      return;
    const { transform: ct, nodeLookup: rt, edgeLookup: xt, connectionLookup: wt, triggerNodeChanges: _t, triggerEdgeChanges: Ct, defaultEdgeOptions: Ht } = w.getState(), Ot = { x: gt.startX, y: gt.startY }, { x: Pt, y: xe } = Ea(Ot, ct), re = {
      startX: Ot.x,
      startY: Ot.y,
      x: F < Pt ? F : Pt,
      y: ft < xe ? ft : xe,
      width: Math.abs(F - Pt),
      height: Math.abs(ft - xe)
    }, En = ot.current, Ie = tt.current;
    ot.current = new Set(Vd(rt, re, ct, o === Bu.Partial, !0).map((Ee) => Ee.id)), tt.current = /* @__PURE__ */ new Set();
    const Ae = Ht?.selectable ?? !0;
    for (const Ee of ot.current) {
      const Oe = wt.get(Ee);
      if (Oe)
        for (const { edgeId: Ve } of Oe.values()) {
          const _n = xt.get(Ve);
          _n && (_n.selectable ?? Ae) && tt.current.add(Ve);
        }
    }
    if (!Dy(En, ot.current)) {
      const Ee = ma(rt, ot.current, !0);
      _t(Ee);
    }
    if (!Dy(Ie, tt.current)) {
      const Ee = ma(xt, tt.current);
      Ct(Ee);
    }
    w.setState({
      userSelectionRect: re,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function dt() {
    if (!s || !I.current)
      return;
    const [F, ft] = Yd(z.current, I.current, B);
    X({ x: F, y: ft }).then((gt) => {
      if (!lt.current || !gt) {
        N.current = requestAnimationFrame(dt);
        return;
      }
      const { x: ct, y: rt } = z.current;
      it(ct, rt), N.current = requestAnimationFrame(dt);
    });
  }
  const vt = () => {
    cancelAnimationFrame(N.current), N.current = 0, V.current = !1;
  };
  W.useEffect(() => () => vt(), []);
  const T = (F) => {
    const { userSelectionRect: ft, transform: gt, resetSelectedElements: ct } = w.getState();
    if (!I.current || !ft)
      return;
    const { x: rt, y: xt } = pn(F.nativeEvent, I.current);
    z.current = { x: rt, y: xt };
    const wt = Ea({ x: ft.startX, y: ft.startY }, gt);
    if (!lt.current) {
      const _t = a ? 0 : f;
      if (Math.hypot(rt - wt.x, xt - wt.y) <= _t)
        return;
      ct(), g?.(F);
    }
    lt.current = !0, V.current || (dt(), V.current = !0), it(rt, xt);
  }, k = (F) => {
    if (!R) {
      F.target === G.current && w.getState().connection.inProgress && (at.current = !0);
      return;
    }
    F.button === 0 && (F.target?.releasePointerCapture?.(F.pointerId), !U && F.target === G.current && w.getState().userSelectionRect && O?.(F), w.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), lt.current && (v?.(F), w.setState({
      nodesSelectionActive: ot.current.size > 0
    })), vt());
  }, st = (F) => {
    F.target?.releasePointerCapture?.(F.pointerId), vt();
  }, ut = r === !0 || Array.isArray(r) && r.includes(0);
  return Z.jsxs("div", { className: ue(["react-flow__pane", { draggable: ut, dragging: C, selection: l }]), onClick: R ? void 0 : hd(O, G), onContextMenu: hd(H, G), onWheel: hd(q, G), onPointerEnter: R ? void 0 : p, onPointerMove: R ? T : b, onPointerUp: k, onPointerCancel: R ? st : void 0, onPointerDownCapture: R ? P : void 0, onClickCapture: R ? $ : void 0, onPointerLeave: E, ref: G, style: fr, children: [A, Z.jsx(H3, {})] });
}
function zd({ id: l, store: a, unselect: o = !1, nodeRef: r }) {
  const { addSelectedNodes: s, unselectNodesAndEdges: f, multiSelectionActive: d, nodeLookup: g, onError: v } = a.getState(), x = g.get(l);
  if (!x) {
    v?.("012", xn.error012(l));
    return;
  }
  a.setState({ nodesSelectionActive: !1 }), x.selected ? (o || x.selected && d) && (f({ nodes: [x], edges: [] }), requestAnimationFrame(() => r?.current?.blur())) : s([l]);
}
function jp({ nodeRef: l, disabled: a = !1, noDragClassName: o, handleSelector: r, nodeId: s, isSelectable: f, nodeClickDistance: d }) {
  const g = $t(), [v, x] = W.useState(!1), y = W.useRef();
  return W.useEffect(() => {
    if (!a)
      return y.current = _w({
        getStoreItems: () => g.getState(),
        onNodeMouseDown: (m) => {
          zd({
            id: m,
            store: g,
            nodeRef: l
          });
        },
        onDragStart: () => {
          x(!0);
        },
        onDragStop: () => {
          x(!1);
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
const L3 = (l) => (a) => a.selected && (a.draggable || l && typeof a.draggable > "u");
function qp() {
  const l = $t();
  return W.useCallback((o) => {
    const { nodeExtent: r, snapToGrid: s, snapGrid: f, nodesDraggable: d, onError: g, updateNodePositions: v, nodeLookup: x, nodeOrigin: y } = l.getState(), m = /* @__PURE__ */ new Map(), p = L3(d), b = s ? f[0] : 5, E = s ? f[1] : 5, A = o.direction.x * b * o.factor, N = o.direction.y * E * o.factor;
    for (const [, w] of x) {
      if (!p(w))
        continue;
      let U = {
        x: w.internals.positionAbsolute.x + A,
        y: w.internals.positionAbsolute.y + N
      };
      s && (U = Gu(U, f));
      const { position: _, positionAbsolute: C } = ip({
        nodeId: w.id,
        nextPosition: U,
        nodeLookup: x,
        nodeExtent: r,
        nodeOrigin: y,
        onError: g
      });
      w.position = _, w.internals.positionAbsolute = C, m.set(w.id, w);
    }
    v(m);
  }, []);
}
const Jd = W.createContext(null), V3 = Jd.Provider;
Jd.Consumer;
const Xp = () => W.useContext(Jd), Y3 = (l) => ({
  connectOnClick: l.connectOnClick,
  noPanClassName: l.noPanClassName,
  rfId: l.rfId
}), Zp = W.createContext(null);
function j3({ children: l }) {
  const a = Ut(Y3, kt);
  return Z.jsx(Zp.Provider, { value: a, children: l });
}
function q3() {
  const l = W.useContext(Zp);
  if (!l)
    throw new Error("useHandleConfig must be used within a HandleConfigProvider");
  return l;
}
const X3 = {
  connectingFrom: !1,
  connectingTo: !1,
  clickConnecting: !1,
  isPossibleEndHandle: !0,
  connectionInProcess: !1,
  clickConnectionInProcess: !1,
  valid: !1
}, Z3 = (l, a, o) => (r) => {
  const { connectionClickStartHandle: s, connectionMode: f, connection: d } = r, { fromHandle: g, toHandle: v, isValid: x } = d;
  if (!g && !s)
    return X3;
  const y = v?.nodeId === l && v?.id === a && v?.type === o;
  return {
    connectingFrom: g?.nodeId === l && g?.id === a && g?.type === o,
    connectingTo: y,
    clickConnecting: s?.nodeId === l && s?.id === a && s?.type === o,
    isPossibleEndHandle: f === Sa.Strict ? g?.type !== o : l !== g?.nodeId || a !== g?.id,
    connectionInProcess: !!g,
    clickConnectionInProcess: !!s,
    valid: y && x
  };
};
function G3({ type: l = "source", position: a = pt.Top, isValidConnection: o, isConnectable: r = !0, isConnectableStart: s = !0, isConnectableEnd: f = !0, id: d, onConnect: g, children: v, className: x, onMouseDown: y, onTouchStart: m, ...p }, b) {
  const E = d || null, A = l === "target", N = $t(), w = Xp(), { connectOnClick: U, noPanClassName: _, rfId: C } = q3(), { connectingFrom: X, connectingTo: B, clickConnecting: R, isPossibleEndHandle: G, connectionInProcess: I, clickConnectionInProcess: ot, valid: tt } = Ut(Z3(w, E, l), kt);
  w || N.getState().onError?.("010", xn.error010());
  const at = (V) => {
    const { defaultEdgeOptions: O, onConnect: H, hasDefaultEdges: q } = N.getState(), $ = {
      ...O,
      ...V
    };
    if (q) {
      const { edges: P, setEdges: it, onError: dt } = N.getState();
      it(E3($, P, { onError: dt }));
    }
    H?.($), g?.($);
  }, lt = (V) => {
    if (!w)
      return;
    const O = gp(V.nativeEvent);
    if (s && (O && V.button === 0 || !O)) {
      const H = N.getState();
      Cd.onPointerDown(V.nativeEvent, {
        handleDomNode: V.currentTarget,
        autoPanOnConnect: H.autoPanOnConnect,
        connectionMode: H.connectionMode,
        connectionRadius: H.connectionRadius,
        domNode: H.domNode,
        nodeLookup: H.nodeLookup,
        lib: H.lib,
        isTarget: A,
        handleId: E,
        nodeId: w,
        flowId: H.rfId,
        panBy: H.panBy,
        cancelConnection: H.cancelConnection,
        onConnectStart: H.onConnectStart,
        onConnectEnd: (...q) => N.getState().onConnectEnd?.(...q),
        updateConnection: H.updateConnection,
        onConnect: at,
        isValidConnection: o || ((...q) => N.getState().isValidConnection?.(...q) ?? !0),
        getTransform: () => N.getState().transform,
        getFromHandle: () => N.getState().connection.fromHandle,
        autoPanSpeed: H.autoPanSpeed,
        dragThreshold: H.connectionDragThreshold
      });
    }
    O ? y?.(V) : m?.(V);
  }, z = (V) => {
    const { onClickConnectStart: O, onClickConnectEnd: H, connectionClickStartHandle: q, connectionMode: $, isValidConnection: P, lib: it, rfId: dt, nodeLookup: vt, connection: T } = N.getState();
    if (!w || !q && !s)
      return;
    if (!q) {
      O?.(V.nativeEvent, { nodeId: w, handleId: E, handleType: l }), N.setState({ connectionClickStartHandle: { nodeId: w, type: l, id: E } });
      return;
    }
    const k = dp(V.target), st = o || P, { connection: ut, isValid: F } = Cd.isValid(V.nativeEvent, {
      handle: {
        nodeId: w,
        id: E,
        type: l
      },
      connectionMode: $,
      fromNodeId: q.nodeId,
      fromHandleId: q.id || null,
      fromType: q.type,
      isValidConnection: st,
      flowId: dt,
      doc: k,
      lib: it,
      nodeLookup: vt
    });
    F && ut && at(ut);
    const ft = structuredClone(T);
    delete ft.inProgress, ft.toPosition = ft.toHandle ? ft.toHandle.position : null, H?.(V, ft), N.setState({ connectionClickStartHandle: null });
  };
  return Z.jsx("div", { "data-handleid": E, "data-nodeid": w, "data-handlepos": a, "data-id": `${C}-${w}-${E}-${l}`, className: ue([
    "react-flow__handle",
    `react-flow__handle-${a}`,
    "nodrag",
    _,
    x,
    {
      source: !A,
      target: A,
      connectable: r,
      connectablestart: s,
      connectableend: f,
      clickconnecting: R,
      connectingfrom: X,
      connectingto: B,
      valid: tt,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!I || G) && (I || ot ? f : s)
    }
  ]), onMouseDown: lt, onTouchStart: lt, onClick: U ? z : void 0, ref: b, ...p, children: v });
}
const il = W.memo(Lp(G3));
function Q3({ data: l, isConnectable: a, sourcePosition: o = pt.Bottom }) {
  return Z.jsxs(Z.Fragment, { children: [l?.label, Z.jsx(il, { type: "source", position: o, isConnectable: a })] });
}
function K3({ data: l, isConnectable: a, targetPosition: o = pt.Top, sourcePosition: r = pt.Bottom }) {
  return Z.jsxs(Z.Fragment, { children: [Z.jsx(il, { type: "target", position: o, isConnectable: a }), l?.label, Z.jsx(il, { type: "source", position: r, isConnectable: a })] });
}
function $3() {
  return null;
}
function J3({ data: l, isConnectable: a, targetPosition: o = pt.Top }) {
  return Z.jsxs(Z.Fragment, { children: [Z.jsx(il, { type: "target", position: o, isConnectable: a }), l?.label] });
}
const Pc = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, rv = {
  input: Q3,
  default: K3,
  output: J3,
  group: $3
};
function I3(l) {
  return l.internals.handleBounds === void 0 ? {
    width: l.width ?? l.initialWidth ?? l.style?.width,
    height: l.height ?? l.initialHeight ?? l.style?.height
  } : {
    width: l.width ?? l.style?.width,
    height: l.height ?? l.style?.height
  };
}
const k3 = (l) => {
  const { width: a, height: o, x: r, y: s } = Zu(l.nodeLookup, {
    filter: (f) => !!f.selected
  });
  return {
    width: vn(a) ? a : null,
    height: vn(o) ? o : null,
    userSelectionActive: l.userSelectionActive,
    transformString: `translate(${l.transform[0]}px,${l.transform[1]}px) scale(${l.transform[2]}) translate(${r}px,${s}px)`
  };
};
function F3({ onSelectionContextMenu: l, noPanClassName: a, disableKeyboardA11y: o }) {
  const r = $t(), { width: s, height: f, transformString: d, userSelectionActive: g } = Ut(k3, kt), v = qp(), x = W.useRef(null);
  W.useEffect(() => {
    o || x.current?.focus({
      preventScroll: !0
    });
  }, [o]);
  const y = !g && s !== null && f !== null;
  if (jp({
    nodeRef: x,
    disabled: !y
  }), !y)
    return null;
  const m = l ? (b) => {
    const E = r.getState().nodes.filter((A) => A.selected);
    l(b, E);
  } : void 0, p = (b) => {
    Object.prototype.hasOwnProperty.call(Pc, b.key) && (b.preventDefault(), v({
      direction: Pc[b.key],
      factor: b.shiftKey ? 4 : 1
    }));
  };
  return Z.jsx("div", { className: ue(["react-flow__nodesselection", "react-flow__container", a]), style: {
    transform: d
  }, children: Z.jsx("div", { ref: x, className: "react-flow__nodesselection-rect", onContextMenu: m, tabIndex: o ? void 0 : -1, onKeyDown: o ? void 0 : p, style: {
    width: s,
    height: f
  } }) });
}
const sv = typeof window < "u" ? window : void 0, W3 = (l) => ({ nodesSelectionActive: l.nodesSelectionActive, userSelectionActive: l.userSelectionActive });
function Gp({ children: l, onPaneClick: a, onPaneMouseEnter: o, onPaneMouseMove: r, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, paneClickDistance: g, deleteKeyCode: v, selectionKeyCode: x, selectionOnDrag: y, selectionMode: m, onSelectionStart: p, onSelectionEnd: b, multiSelectionKeyCode: E, panActivationKeyCode: A, zoomActivationKeyCode: N, elementsSelectable: w, zoomOnScroll: U, zoomOnPinch: _, panOnScroll: C, panOnScrollSpeed: X, panOnScrollMode: B, zoomOnDoubleClick: R, panOnDrag: G, autoPanOnSelection: I, defaultViewport: ot, translateExtent: tt, minZoom: at, maxZoom: lt, preventScrolling: z, onSelectionContextMenu: V, noWheelClassName: O, noPanClassName: H, disableKeyboardA11y: q, onViewportChange: $, isControlledViewport: P }) {
  const { nodesSelectionActive: it, userSelectionActive: dt } = Ut(W3, kt), vt = Vu(x, { target: sv }), T = Vu(A, { target: sv }), k = T || G, st = T || C, ut = y && k !== !0, F = vt || dt || ut;
  return M3({ deleteKeyCode: v, multiSelectionKeyCode: E }), Z.jsx(D3, { onPaneContextMenu: f, elementsSelectable: w, zoomOnScroll: U, zoomOnPinch: _, panOnScroll: st, panActivationKeyPressed: T, panOnScrollSpeed: X, panOnScrollMode: B, zoomOnDoubleClick: R, panOnDrag: !vt && k, defaultViewport: ot, translateExtent: tt, minZoom: at, maxZoom: lt, zoomActivationKeyCode: N, preventScrolling: z, noWheelClassName: O, noPanClassName: H, onViewportChange: $, isControlledViewport: P, paneClickDistance: g, selectionOnDrag: ut, children: Z.jsxs(U3, { onSelectionStart: p, onSelectionEnd: b, onPaneClick: a, onPaneMouseEnter: o, onPaneMouseMove: r, onPaneMouseLeave: s, onPaneContextMenu: f, onPaneScroll: d, panOnDrag: k, autoPanOnSelection: I, isSelecting: !!F, selectionMode: m, selectionKeyPressed: vt, paneClickDistance: g, selectionOnDrag: ut, children: [l, it && Z.jsx(F3, { onSelectionContextMenu: V, noPanClassName: H, disableKeyboardA11y: q })] }) });
}
Gp.displayName = "FlowRenderer";
const P3 = W.memo(Gp), tN = (l) => (a) => l ? Vd(a.nodeLookup, { x: 0, y: 0, width: a.width, height: a.height }, a.transform, !0).map((o) => o.id) : Array.from(a.nodeLookup.keys());
function eN(l) {
  return Ut(W.useCallback(tN(l), [l]), kt);
}
const nN = (l) => l.updateNodeInternals;
function lN() {
  const l = Ut(nN), [a] = W.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((o) => {
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
function iN({ node: l, nodeType: a, hasDimensions: o, resizeObserver: r }) {
  const s = $t(), f = W.useRef(null), d = W.useRef(null), g = W.useRef(l.sourcePosition), v = W.useRef(l.targetPosition), x = W.useRef(a), y = o && !!l.internals.handleBounds;
  return W.useEffect(() => {
    f.current && !l.hidden && (!y || d.current !== f.current) && (d.current && r?.unobserve(d.current), r?.observe(f.current), d.current = f.current);
  }, [y, l.hidden]), W.useEffect(() => () => {
    d.current && (r?.unobserve(d.current), d.current = null);
  }, []), W.useEffect(() => {
    if (f.current) {
      const m = x.current !== a, p = g.current !== l.sourcePosition, b = v.current !== l.targetPosition;
      (m || p || b) && (x.current = a, g.current = l.sourcePosition, v.current = l.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[l.id, { id: l.id, nodeElement: f.current, force: !0 }]])));
    }
  }, [l.id, a, l.sourcePosition, l.targetPosition]), f;
}
function aN({ id: l, onClick: a, onMouseEnter: o, onMouseMove: r, onMouseLeave: s, onContextMenu: f, onDoubleClick: d, nodesDraggable: g, elementsSelectable: v, nodesConnectable: x, nodesFocusable: y, resizeObserver: m, noDragClassName: p, noPanClassName: b, disableKeyboardA11y: E, rfId: A, nodeTypes: N, nodeClickDistance: w, onError: U }) {
  const { node: _, internals: C, isParent: X } = Ut((F) => {
    const ft = F.nodeLookup.get(l), gt = F.parentLookup.has(l);
    return {
      node: ft,
      internals: ft.internals,
      isParent: gt
    };
  }, kt);
  let B = _.type || "default", R = N?.[B] || rv[B];
  R === void 0 && (U?.("003", xn.error003(B)), B = "default", R = N?.default || rv.default);
  const G = !!(_.draggable || g && typeof _.draggable > "u"), I = !!(_.selectable || v && typeof _.selectable > "u"), ot = !!(_.connectable || x && typeof _.connectable > "u"), tt = !!(_.focusable || y && typeof _.focusable > "u"), at = $t(), lt = rp(_), z = iN({ node: _, nodeType: B, hasDimensions: lt, resizeObserver: m }), V = jp({
    nodeRef: z,
    disabled: _.hidden || !G,
    noDragClassName: p,
    handleSelector: _.dragHandle,
    nodeId: l,
    isSelectable: I,
    nodeClickDistance: w
  }), O = qp();
  if (_.hidden)
    return null;
  const H = bn(_), q = I3(_), $ = I || G || a || o || r || s, P = o ? (F) => o(F, { ...C.userNode }) : void 0, it = r ? (F) => r(F, { ...C.userNode }) : void 0, dt = s ? (F) => s(F, { ...C.userNode }) : void 0, vt = f ? (F) => f(F, { ...C.userNode }) : void 0, T = d ? (F) => d(F, { ...C.userNode }) : void 0, k = (F) => {
    const { selectNodesOnDrag: ft, nodeDragThreshold: gt } = at.getState();
    I && (!ft || !G || gt > 0) && zd({
      id: l,
      store: at,
      nodeRef: z
    }), a && a(F, { ...C.userNode });
  }, st = (F) => {
    if (!(hp(F.nativeEvent) || E)) {
      if (tp.includes(F.key) && I) {
        const ft = F.key === "Escape";
        zd({
          id: l,
          store: at,
          unselect: ft,
          nodeRef: z
        });
      } else if (G && _.selected && Object.prototype.hasOwnProperty.call(Pc, F.key)) {
        F.preventDefault();
        const { ariaLabelConfig: ft } = at.getState();
        at.setState({
          ariaLiveMessage: ft["node.a11yDescription.ariaLiveMessage"]({
            direction: F.key.replace("Arrow", "").toLowerCase(),
            x: ~~C.positionAbsolute.x,
            y: ~~C.positionAbsolute.y
          })
        }), O({
          direction: Pc[F.key],
          factor: F.shiftKey ? 4 : 1
        });
      }
    }
  }, ut = () => {
    if (E || !z.current?.matches(":focus-visible"))
      return;
    const { transform: F, width: ft, height: gt, autoPanOnNodeFocus: ct, setCenter: rt } = at.getState();
    if (!ct)
      return;
    Vd(/* @__PURE__ */ new Map([[l, _]]), { x: 0, y: 0, width: ft, height: gt }, F, !0).length > 0 || rt(_.position.x + H.width / 2, _.position.y + H.height / 2, {
      zoom: F[2]
    });
  };
  return Z.jsx("div", { className: ue([
    "react-flow__node",
    `react-flow__node-${B}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [b]: G
    },
    _.className,
    {
      selected: _.selected,
      selectable: I,
      parent: X,
      draggable: G,
      dragging: V
    }
  ]), ref: z, style: {
    zIndex: C.z,
    transform: `translate(${C.positionAbsolute.x}px,${C.positionAbsolute.y}px)`,
    pointerEvents: $ ? "all" : "none",
    visibility: lt ? "visible" : "hidden",
    ..._.style,
    ...q
  }, "data-id": l, "data-testid": `rf__node-${l}`, onMouseEnter: P, onMouseMove: it, onMouseLeave: dt, onContextMenu: vt, onClick: k, onDoubleClick: T, onKeyDown: tt ? st : void 0, tabIndex: tt ? 0 : void 0, onFocus: tt ? ut : void 0, role: _.ariaRole ?? (tt ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${Op}-${A}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: Z.jsx(V3, { value: l, children: Z.jsx(R, { id: l, data: _.data, type: B, positionAbsoluteX: C.positionAbsolute.x, positionAbsoluteY: C.positionAbsolute.y, selected: _.selected ?? !1, selectable: I, draggable: G, deletable: _.deletable ?? !0, isConnectable: ot, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: V, dragHandle: _.dragHandle, zIndex: C.z, parentId: _.parentId, ...H }) }) });
}
var uN = W.memo(aN);
const oN = (l) => ({
  nodesConnectable: l.nodesConnectable,
  nodesFocusable: l.nodesFocusable,
  elementsSelectable: l.elementsSelectable,
  onError: l.onError
});
function Qp(l) {
  const { nodesConnectable: a, nodesFocusable: o, elementsSelectable: r, onError: s } = Ut(oN, kt), f = eN(l.onlyRenderVisibleElements), d = lN();
  return Z.jsx("div", { className: "react-flow__nodes", style: fr, children: f.map((g) => (
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
    Z.jsx(uN, { id: g, nodeTypes: l.nodeTypes, nodeExtent: l.nodeExtent, onClick: l.onNodeClick, onMouseEnter: l.onNodeMouseEnter, onMouseMove: l.onNodeMouseMove, onMouseLeave: l.onNodeMouseLeave, onContextMenu: l.onNodeContextMenu, onDoubleClick: l.onNodeDoubleClick, noDragClassName: l.noDragClassName, noPanClassName: l.noPanClassName, rfId: l.rfId, disableKeyboardA11y: l.disableKeyboardA11y, resizeObserver: d, nodesDraggable: l.nodesDraggable ?? !0, nodesConnectable: a, nodesFocusable: o, elementsSelectable: r, nodeClickDistance: l.nodeClickDistance, onError: s }, g)
  )) });
}
Qp.displayName = "NodeRenderer";
const cN = W.memo(Qp);
function rN(l) {
  return Ut(W.useCallback((o) => {
    if (!l)
      return o.edges.map((s) => s.id);
    const r = [];
    if (o.width && o.height)
      for (const s of o.edges) {
        const f = o.nodeLookup.get(s.source), d = o.nodeLookup.get(s.target);
        f && d && iw({
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
const sN = ({ color: l = "none", strokeWidth: a = 1 }) => {
  const o = {
    strokeWidth: a,
    ...l && { stroke: l }
  };
  return Z.jsx("polyline", { className: "arrow", style: o, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, fN = ({ color: l = "none", strokeWidth: a = 1 }) => {
  const o = {
    strokeWidth: a,
    ...l && { stroke: l, fill: l }
  };
  return Z.jsx("polyline", { className: "arrowclosed", style: o, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, fv = {
  [kc.Arrow]: sN,
  [kc.ArrowClosed]: fN
};
function dN(l) {
  const a = $t();
  return W.useMemo(() => Object.prototype.hasOwnProperty.call(fv, l) ? fv[l] : (a.getState().onError?.("009", xn.error009(l)), null), [l]);
}
const hN = ({ id: l, type: a, color: o, width: r = 12.5, height: s = 12.5, markerUnits: f = "strokeWidth", strokeWidth: d, orient: g = "auto-start-reverse" }) => {
  const v = dN(a);
  return v ? Z.jsx("marker", { className: "react-flow__arrowhead", id: l, markerWidth: `${r}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: f, orient: g, refX: "0", refY: "0", children: Z.jsx(v, { color: o, strokeWidth: d }) }) : null;
}, Kp = ({ defaultColor: l, rfId: a }) => {
  const o = Ut((f) => f.edges), r = Ut((f) => f.defaultEdgeOptions), s = W.useMemo(() => dw(o, {
    id: a,
    defaultColor: l,
    defaultMarkerStart: r?.markerStart,
    defaultMarkerEnd: r?.markerEnd
  }), [o, r, a, l]);
  return s.length ? Z.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: Z.jsx("defs", { children: s.map((f) => Z.jsx(hN, { id: f.id, type: f.type, color: f.color, width: f.width, height: f.height, markerUnits: f.markerUnits, strokeWidth: f.strokeWidth, orient: f.orient }, f.id)) }) }) : null;
};
Kp.displayName = "MarkerDefinitions";
var gN = W.memo(Kp);
function $p({ x: l, y: a, label: o, labelStyle: r, labelShowBg: s = !0, labelBgStyle: f, labelBgPadding: d = [2, 4], labelBgBorderRadius: g = 2, children: v, className: x, ...y }) {
  const [m, p] = W.useState({ x: 1, y: 0, width: 0, height: 0 }), b = ue(["react-flow__edge-textwrapper", x]), E = W.useRef(null);
  return W.useEffect(() => {
    if (E.current) {
      const A = E.current.getBBox();
      p({
        x: A.x,
        y: A.y,
        width: A.width,
        height: A.height
      });
    }
  }, [o]), o ? Z.jsxs("g", { transform: `translate(${l - m.width / 2} ${a - m.height / 2})`, className: b, visibility: m.width ? "visible" : "hidden", ...y, children: [s && Z.jsx("rect", { width: m.width + 2 * d[0], x: -d[0], y: -d[1], height: m.height + 2 * d[1], className: "react-flow__edge-textbg", style: f, rx: g, ry: g }), Z.jsx("text", { className: "react-flow__edge-text", y: m.height / 2, dy: "0.3em", ref: E, style: r, children: o }), v] }) : null;
}
$p.displayName = "EdgeText";
const mN = W.memo($p);
function Ku({ path: l, labelX: a, labelY: o, label: r, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: v, interactionWidth: x = 20, ...y }) {
  return Z.jsxs(Z.Fragment, { children: [Z.jsx("path", { ...y, d: l, fill: "none", className: ue(["react-flow__edge-path", y.className]) }), x ? Z.jsx("path", { d: l, fill: "none", strokeOpacity: 0, strokeWidth: x, className: "react-flow__edge-interaction" }) : null, r && vn(a) && vn(o) ? Z.jsx(mN, { x: a, y: o, label: r, labelStyle: s, labelShowBg: f, labelBgStyle: d, labelBgPadding: g, labelBgBorderRadius: v }) : null] });
}
function dv({ pos: l, x1: a, y1: o, x2: r, y2: s }) {
  return l === pt.Left || l === pt.Right ? [0.5 * (a + r), o] : [a, 0.5 * (o + s)];
}
function Jp({ sourceX: l, sourceY: a, sourcePosition: o = pt.Bottom, targetX: r, targetY: s, targetPosition: f = pt.Top }) {
  const [d, g] = dv({
    pos: o,
    x1: l,
    y1: a,
    x2: r,
    y2: s
  }), [v, x] = dv({
    pos: f,
    x1: r,
    y1: s,
    x2: l,
    y2: a
  }), [y, m, p, b] = mp({
    sourceX: l,
    sourceY: a,
    targetX: r,
    targetY: s,
    sourceControlX: d,
    sourceControlY: g,
    targetControlX: v,
    targetControlY: x
  });
  return [
    `M${l},${a} C${d},${g} ${v},${x} ${r},${s}`,
    y,
    m,
    p,
    b
  ];
}
function Ip(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, sourcePosition: d, targetPosition: g, label: v, labelStyle: x, labelShowBg: y, labelBgStyle: m, labelBgPadding: p, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: N, interactionWidth: w }) => {
    const [U, _, C] = Jp({
      sourceX: o,
      sourceY: r,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g
    }), X = l.isInternal ? void 0 : a;
    return Z.jsx(Ku, { id: X, path: U, labelX: _, labelY: C, label: v, labelStyle: x, labelShowBg: y, labelBgStyle: m, labelBgPadding: p, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: N, interactionWidth: w });
  });
}
const yN = Ip({ isInternal: !1 }), kp = Ip({ isInternal: !0 });
yN.displayName = "SimpleBezierEdge";
kp.displayName = "SimpleBezierEdgeInternal";
function Fp(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: x, labelBgPadding: y, labelBgBorderRadius: m, style: p, sourcePosition: b = pt.Bottom, targetPosition: E = pt.Top, markerEnd: A, markerStart: N, pathOptions: w, interactionWidth: U }) => {
    const [_, C, X] = wd({
      sourceX: o,
      sourceY: r,
      sourcePosition: b,
      targetX: s,
      targetY: f,
      targetPosition: E,
      borderRadius: w?.borderRadius,
      offset: w?.offset,
      stepPosition: w?.stepPosition
    }), B = l.isInternal ? void 0 : a;
    return Z.jsx(Ku, { id: B, path: _, labelX: C, labelY: X, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: x, labelBgPadding: y, labelBgBorderRadius: m, style: p, markerEnd: A, markerStart: N, interactionWidth: U });
  });
}
const Wp = Fp({ isInternal: !1 }), Pp = Fp({ isInternal: !0 });
Wp.displayName = "SmoothStepEdge";
Pp.displayName = "SmoothStepEdgeInternal";
function t1(l) {
  return W.memo(({ id: a, ...o }) => {
    const r = l.isInternal ? void 0 : a;
    return Z.jsx(Wp, { ...o, id: r, pathOptions: W.useMemo(() => ({ borderRadius: 0, offset: o.pathOptions?.offset }), [o.pathOptions?.offset]) });
  });
}
const vN = t1({ isInternal: !1 }), e1 = t1({ isInternal: !0 });
vN.displayName = "StepEdge";
e1.displayName = "StepEdgeInternal";
function n1(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: x, labelBgPadding: y, labelBgBorderRadius: m, style: p, markerEnd: b, markerStart: E, interactionWidth: A }) => {
    const [N, w, U] = vp({ sourceX: o, sourceY: r, targetX: s, targetY: f }), _ = l.isInternal ? void 0 : a;
    return Z.jsx(Ku, { id: _, path: N, labelX: w, labelY: U, label: d, labelStyle: g, labelShowBg: v, labelBgStyle: x, labelBgPadding: y, labelBgBorderRadius: m, style: p, markerEnd: b, markerStart: E, interactionWidth: A });
  });
}
const pN = n1({ isInternal: !1 }), l1 = n1({ isInternal: !0 });
pN.displayName = "StraightEdge";
l1.displayName = "StraightEdgeInternal";
function i1(l) {
  return W.memo(({ id: a, sourceX: o, sourceY: r, targetX: s, targetY: f, sourcePosition: d = pt.Bottom, targetPosition: g = pt.Top, label: v, labelStyle: x, labelShowBg: y, labelBgStyle: m, labelBgPadding: p, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: N, pathOptions: w, interactionWidth: U }) => {
    const [_, C, X] = Xd({
      sourceX: o,
      sourceY: r,
      sourcePosition: d,
      targetX: s,
      targetY: f,
      targetPosition: g,
      curvature: w?.curvature
    }), B = l.isInternal ? void 0 : a;
    return Z.jsx(Ku, { id: B, path: _, labelX: C, labelY: X, label: v, labelStyle: x, labelShowBg: y, labelBgStyle: m, labelBgPadding: p, labelBgBorderRadius: b, style: E, markerEnd: A, markerStart: N, interactionWidth: U });
  });
}
const xN = i1({ isInternal: !1 }), a1 = i1({ isInternal: !0 });
xN.displayName = "BezierEdge";
a1.displayName = "BezierEdgeInternal";
const hv = {
  default: a1,
  straight: l1,
  step: e1,
  smoothstep: Pp,
  simplebezier: kp
}, gv = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null,
  zIndex: void 0
}, SN = (l, a, o) => o === pt.Left ? l - a : o === pt.Right ? l + a : l, bN = (l, a, o) => o === pt.Top ? l - a : o === pt.Bottom ? l + a : l, mv = "react-flow__edgeupdater";
function yv({ position: l, centerX: a, centerY: o, radius: r = 10, onMouseDown: s, onMouseEnter: f, onMouseOut: d, type: g }) {
  return Z.jsx("circle", { onMouseDown: s, onMouseEnter: f, onMouseOut: d, className: ue([mv, `${mv}-${g}`]), cx: SN(a, r, l), cy: bN(o, r, l), r, stroke: "transparent", fill: "transparent" });
}
function EN({ isReconnectable: l, reconnectRadius: a, edge: o, sourceX: r, sourceY: s, targetX: f, targetY: d, sourcePosition: g, targetPosition: v, onReconnect: x, onReconnectStart: y, onReconnectEnd: m, setReconnecting: p, setUpdateHover: b }) {
  const E = $t(), A = (C, X) => {
    if (C.button !== 0)
      return;
    const { autoPanOnConnect: B, domNode: R, connectionMode: G, connectionRadius: I, lib: ot, onConnectStart: tt, cancelConnection: at, nodeLookup: lt, rfId: z, panBy: V, updateConnection: O } = E.getState(), H = X.type === "target", q = (it, dt) => {
      p(!1), m?.(it, o, X.type, dt);
    }, $ = (it) => x?.(o, it), P = (it, dt) => {
      p(!0), y?.(C, o, X.type), tt?.(it, dt);
    };
    Cd.onPointerDown(C.nativeEvent, {
      autoPanOnConnect: B,
      connectionMode: G,
      connectionRadius: I,
      domNode: R,
      handleId: X.id,
      nodeId: X.nodeId,
      nodeLookup: lt,
      isTarget: H,
      edgeUpdaterType: X.type,
      lib: ot,
      flowId: z,
      cancelConnection: at,
      panBy: V,
      isValidConnection: (...it) => E.getState().isValidConnection?.(...it) ?? !0,
      onConnect: $,
      onConnectStart: P,
      onConnectEnd: (...it) => E.getState().onConnectEnd?.(...it),
      onReconnectEnd: q,
      updateConnection: O,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: C.currentTarget
    });
  }, N = (C) => A(C, { nodeId: o.target, id: o.targetHandle ?? null, type: "target" }), w = (C) => A(C, { nodeId: o.source, id: o.sourceHandle ?? null, type: "source" }), U = () => b(!0), _ = () => b(!1);
  return Z.jsxs(Z.Fragment, { children: [(l === !0 || l === "source") && Z.jsx(yv, { position: g, centerX: r, centerY: s, radius: a, onMouseDown: N, onMouseEnter: U, onMouseOut: _, type: "source" }), (l === !0 || l === "target") && Z.jsx(yv, { position: v, centerX: f, centerY: d, radius: a, onMouseDown: w, onMouseEnter: U, onMouseOut: _, type: "target" })] });
}
function _N({ id: l, edgesFocusable: a, edgesReconnectable: o, elementsSelectable: r, onClick: s, onDoubleClick: f, onContextMenu: d, onMouseEnter: g, onMouseMove: v, onMouseLeave: x, reconnectRadius: y, onReconnect: m, onReconnectStart: p, onReconnectEnd: b, rfId: E, edgeTypes: A, noPanClassName: N, onError: w, disableKeyboardA11y: U }) {
  let _ = Ut((rt) => rt.edgeLookup.get(l));
  const C = Ut((rt) => rt.defaultEdgeOptions);
  _ = C ? { ...C, ..._ } : _;
  let X = _.type || "default", B = A?.[X] || hv[X];
  B === void 0 && (w?.("011", xn.error011(X)), X = "default", B = A?.default || hv.default);
  const R = !!(_.focusable || a && typeof _.focusable > "u"), G = typeof m < "u" && (_.reconnectable || o && typeof _.reconnectable > "u"), I = !!(_.selectable || r && typeof _.selectable > "u"), ot = W.useRef(null), [tt, at] = W.useState(!1), [lt, z] = W.useState(!1), V = $t(), { zIndex: O = _.zIndex, sourceX: H, sourceY: q, targetX: $, targetY: P, sourcePosition: it, targetPosition: dt } = Ut(W.useCallback((rt) => {
    const xt = rt.nodeLookup.get(_.source), wt = rt.nodeLookup.get(_.target);
    if (!xt || !wt)
      return gv;
    const _t = fw({
      id: l,
      sourceNode: xt,
      targetNode: wt,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: rt.connectionMode,
      onError: w
    }), Ct = lw({
      selected: _.selected,
      zIndex: _.zIndex,
      sourceNode: xt,
      targetNode: wt,
      elevateOnSelect: rt.elevateEdgesOnSelect,
      zIndexMode: rt.zIndexMode
    });
    return {
      ..._t || gv,
      zIndex: Ct
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex, w]), kt), vt = W.useMemo(() => _.markerStart ? `url('#${Nd(_.markerStart, E)}')` : void 0, [_.markerStart, E]), T = W.useMemo(() => _.markerEnd ? `url('#${Nd(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || H === null || q === null || $ === null || P === null)
    return null;
  const k = (rt) => {
    const { addSelectedEdges: xt, unselectNodesAndEdges: wt, multiSelectionActive: _t } = V.getState();
    I && (V.setState({ nodesSelectionActive: !1 }), _.selected && _t ? (wt({ nodes: [], edges: [_] }), ot.current?.blur()) : xt([l])), s && s(rt, _);
  }, st = f ? (rt) => {
    f(rt, { ..._ });
  } : void 0, ut = d ? (rt) => {
    d(rt, { ..._ });
  } : void 0, F = g ? (rt) => {
    g(rt, { ..._ });
  } : void 0, ft = v ? (rt) => {
    v(rt, { ..._ });
  } : void 0, gt = x ? (rt) => {
    x(rt, { ..._ });
  } : void 0, ct = (rt) => {
    if (!U && tp.includes(rt.key) && I) {
      const { unselectNodesAndEdges: xt, addSelectedEdges: wt } = V.getState();
      rt.key === "Escape" ? (ot.current?.blur(), xt({ edges: [_] })) : wt([l]);
    }
  };
  return Z.jsx("svg", { style: { zIndex: O }, children: Z.jsxs("g", { className: ue([
    "react-flow__edge",
    `react-flow__edge-${X}`,
    _.className,
    N,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !I && !s,
      updating: tt,
      selectable: I
    }
  ]), onClick: k, onDoubleClick: st, onContextMenu: ut, onMouseEnter: F, onMouseMove: ft, onMouseLeave: gt, onKeyDown: R ? ct : void 0, tabIndex: R ? 0 : void 0, role: _.ariaRole ?? (R ? "group" : "img"), "aria-roledescription": "edge", "data-id": l, "data-testid": `rf__edge-${l}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": R ? `${Dp}-${E}` : void 0, ref: ot, ..._.domAttributes, children: [!lt && Z.jsx(B, { id: l, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: I, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: H, sourceY: q, targetX: $, targetY: P, sourcePosition: it, targetPosition: dt, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: vt, markerEnd: T, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), G && Z.jsx(EN, { edge: _, isReconnectable: G, reconnectRadius: y, onReconnect: m, onReconnectStart: p, onReconnectEnd: b, sourceX: H, sourceY: q, targetX: $, targetY: P, sourcePosition: it, targetPosition: dt, setUpdateHover: at, setReconnecting: z })] }) });
}
var wN = W.memo(_N);
const NN = (l) => ({
  edgesFocusable: l.edgesFocusable,
  edgesReconnectable: l.edgesReconnectable,
  elementsSelectable: l.elementsSelectable,
  connectionMode: l.connectionMode,
  onError: l.onError
});
function u1({ defaultMarkerColor: l, onlyRenderVisibleElements: a, rfId: o, edgeTypes: r, noPanClassName: s, onReconnect: f, onEdgeContextMenu: d, onEdgeMouseEnter: g, onEdgeMouseMove: v, onEdgeMouseLeave: x, onEdgeClick: y, reconnectRadius: m, onEdgeDoubleClick: p, onReconnectStart: b, onReconnectEnd: E, disableKeyboardA11y: A }) {
  const { edgesFocusable: N, edgesReconnectable: w, elementsSelectable: U, onError: _ } = Ut(NN, kt), C = rN(a);
  return Z.jsxs("div", { className: "react-flow__edges", children: [Z.jsx(gN, { defaultColor: l, rfId: o }), C.map((X) => Z.jsx(wN, { id: X, edgesFocusable: N, edgesReconnectable: w, elementsSelectable: U, noPanClassName: s, onReconnect: f, onContextMenu: d, onMouseEnter: g, onMouseMove: v, onMouseLeave: x, onClick: y, reconnectRadius: m, onDoubleClick: p, onReconnectStart: b, onReconnectEnd: E, rfId: o, onError: _, edgeTypes: r, disableKeyboardA11y: A }, X))] });
}
u1.displayName = "EdgeRenderer";
const TN = W.memo(u1), vv = (l) => `translate(${l[0]}px,${l[1]}px) scale(${l[2]})`;
function CN({ children: l }) {
  const a = $t(), o = W.useRef(null), [r] = W.useState(() => a.getState().transform);
  return Vp(() => {
    let s = null;
    const f = () => {
      const d = a.getState().transform;
      s && d[0] === s[0] && d[1] === s[1] && d[2] === s[2] || (s = d, o.current && (o.current.style.transform = vv(d)));
    };
    return f(), a.subscribe(f);
  }, [a]), Z.jsx("div", { ref: o, className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: vv(r) }, children: l });
}
function zN(l) {
  const a = sr(), o = W.useRef(!1);
  W.useEffect(() => {
    !o.current && a.viewportInitialized && l && (setTimeout(() => l(a), 1), o.current = !0);
  }, [l, a.viewportInitialized]);
}
const MN = (l) => l.panZoom?.syncViewport;
function AN(l) {
  const a = Ut(MN), o = $t();
  return W.useEffect(() => {
    l && (a?.(l), o.setState({ transform: [l.x, l.y, l.zoom] }));
  }, [l, a]), null;
}
function ON(l) {
  return l.connection.inProgress ? { ...l.connection, to: Qu(l.connection.to, l.transform) } : { ...l.connection };
}
function DN(l) {
  return ON;
}
function RN(l) {
  const a = DN();
  return Ut(a, kt);
}
const HN = (l) => ({
  nodesConnectable: l.nodesConnectable,
  isValid: l.connection.isValid,
  inProgress: l.connection.inProgress,
  width: l.width,
  height: l.height
});
function BN({ containerStyle: l, style: a, type: o, component: r }) {
  const { nodesConnectable: s, width: f, height: d, isValid: g, inProgress: v } = Ut(HN, kt);
  return !(f && s && v) ? null : Z.jsx("svg", { style: l, width: f, height: d, className: "react-flow__connectionline react-flow__container", children: Z.jsx("g", { className: ue(["react-flow__connection", fp(g)]), children: Z.jsx(o1, { style: a, type: o, CustomComponent: r, isValid: g }) }) });
}
const o1 = ({ style: l, type: a = Yl.Bezier, CustomComponent: o, isValid: r }) => {
  const { inProgress: s, from: f, fromNode: d, fromHandle: g, fromPosition: v, to: x, toNode: y, toHandle: m, toPosition: p, pointer: b } = RN();
  if (!s)
    return;
  if (o)
    return Z.jsx(o, { connectionLineType: a, connectionLineStyle: l, fromNode: d, fromHandle: g, fromX: f.x, fromY: f.y, toX: x.x, toY: x.y, fromPosition: v, toPosition: p, connectionStatus: fp(r), toNode: y, toHandle: m, pointer: b });
  let E = "";
  const A = {
    sourceX: f.x,
    sourceY: f.y,
    sourcePosition: v,
    targetX: x.x,
    targetY: x.y,
    targetPosition: p
  };
  switch (a) {
    case Yl.Bezier:
      [E] = Xd(A);
      break;
    case Yl.SimpleBezier:
      [E] = Jp(A);
      break;
    case Yl.Step:
      [E] = wd({
        ...A,
        borderRadius: 0
      });
      break;
    case Yl.SmoothStep:
      [E] = wd(A);
      break;
    default:
      [E] = vp(A);
  }
  return Z.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: l });
};
o1.displayName = "ConnectionLine";
const UN = {};
function pv(l = UN) {
  W.useRef(l), $t(), W.useEffect(() => {
  }, [l]);
}
function LN() {
  $t(), W.useRef(!1), W.useEffect(() => {
  }, []);
}
function c1({ nodeTypes: l, edgeTypes: a, onInit: o, onNodeClick: r, onEdgeClick: s, onNodeDoubleClick: f, onEdgeDoubleClick: d, onNodeMouseEnter: g, onNodeMouseMove: v, onNodeMouseLeave: x, onNodeContextMenu: y, onSelectionContextMenu: m, onSelectionStart: p, onSelectionEnd: b, connectionLineType: E, connectionLineStyle: A, connectionLineComponent: N, connectionLineContainerStyle: w, selectionKeyCode: U, selectionOnDrag: _, selectionMode: C, multiSelectionKeyCode: X, panActivationKeyCode: B, zoomActivationKeyCode: R, deleteKeyCode: G, onlyRenderVisibleElements: I, elementsSelectable: ot, defaultViewport: tt, translateExtent: at, minZoom: lt, maxZoom: z, preventScrolling: V, defaultMarkerColor: O, zoomOnScroll: H, zoomOnPinch: q, panOnScroll: $, panOnScrollSpeed: P, panOnScrollMode: it, zoomOnDoubleClick: dt, panOnDrag: vt, autoPanOnSelection: T, onPaneClick: k, onPaneMouseEnter: st, onPaneMouseMove: ut, onPaneMouseLeave: F, onPaneScroll: ft, onPaneContextMenu: gt, paneClickDistance: ct, nodeClickDistance: rt, onEdgeContextMenu: xt, onEdgeMouseEnter: wt, onEdgeMouseMove: _t, onEdgeMouseLeave: Ct, reconnectRadius: Ht, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: xe, noDragClassName: re, noWheelClassName: En, noPanClassName: Ie, disableKeyboardA11y: Ae, nodeExtent: Ee, rfId: Oe, viewport: Ve, onViewportChange: _n, nodesDraggable: ke }) {
  return pv(l), pv(a), LN(), zN(o), AN(Ve), Z.jsx(P3, { onPaneClick: k, onPaneMouseEnter: st, onPaneMouseMove: ut, onPaneMouseLeave: F, onPaneContextMenu: gt, onPaneScroll: ft, paneClickDistance: ct, deleteKeyCode: G, selectionKeyCode: U, selectionOnDrag: _, selectionMode: C, onSelectionStart: p, onSelectionEnd: b, multiSelectionKeyCode: X, panActivationKeyCode: B, zoomActivationKeyCode: R, elementsSelectable: ot, zoomOnScroll: H, zoomOnPinch: q, zoomOnDoubleClick: dt, panOnScroll: $, panOnScrollSpeed: P, panOnScrollMode: it, panOnDrag: vt, autoPanOnSelection: T, defaultViewport: tt, translateExtent: at, minZoom: lt, maxZoom: z, onSelectionContextMenu: m, preventScrolling: V, noDragClassName: re, noWheelClassName: En, noPanClassName: Ie, disableKeyboardA11y: Ae, onViewportChange: _n, isControlledViewport: !!Ve, children: Z.jsxs(CN, { children: [Z.jsx(TN, { edgeTypes: a, onEdgeClick: s, onEdgeDoubleClick: d, onReconnect: Ot, onReconnectStart: Pt, onReconnectEnd: xe, onlyRenderVisibleElements: I, onEdgeContextMenu: xt, onEdgeMouseEnter: wt, onEdgeMouseMove: _t, onEdgeMouseLeave: Ct, reconnectRadius: Ht, defaultMarkerColor: O, noPanClassName: Ie, disableKeyboardA11y: Ae, rfId: Oe }), Z.jsx(BN, { style: A, type: E, component: N, containerStyle: w }), Z.jsx("div", { className: "react-flow__edgelabel-renderer" }), Z.jsx(cN, { nodeTypes: l, onNodeClick: r, onNodeDoubleClick: f, onNodeMouseEnter: g, onNodeMouseMove: v, onNodeMouseLeave: x, onNodeContextMenu: y, nodeClickDistance: rt, onlyRenderVisibleElements: I, noPanClassName: Ie, noDragClassName: re, disableKeyboardA11y: Ae, nodeExtent: Ee, rfId: Oe, nodesDraggable: ke }), Z.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
c1.displayName = "GraphView";
const VN = W.memo(c1), YN = cp(), xv = ({ nodes: l, edges: a, defaultNodes: o, defaultEdges: r, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: v = 0.5, maxZoom: x = 2, nodeOrigin: y, nodeExtent: m, zIndexMode: p = "basic" } = {}) => {
  const b = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), w = r ?? a ?? [], U = o ?? l ?? [], _ = y ?? [0, 0], C = m ?? Hu;
  Sp(A, N, w);
  const { nodesInitialized: X } = Td(U, b, E, {
    nodeOrigin: _,
    nodeExtent: C,
    zIndexMode: p
  });
  let B = [0, 0, 1];
  if (d && s && f) {
    const R = Zu(b, {
      filter: (tt) => !!((tt.width || tt.initialWidth) && (tt.height || tt.initialHeight))
    }), { x: G, y: I, zoom: ot } = jd(R, s, f, v, x, g?.padding ?? 0.1);
    B = [G, I, ot];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: f ?? 0,
    transform: B,
    nodes: U,
    nodesInitialized: X,
    nodeLookup: b,
    parentLookup: E,
    edges: w,
    edgeLookup: N,
    connectionLookup: A,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: o !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: v,
    maxZoom: x,
    translateExtent: Hu,
    nodeExtent: C,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: Sa.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: _,
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
    connection: { ...np },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: YN,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: ep,
    zIndexMode: p,
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
}, jN = ({ nodes: l, edges: a, defaultNodes: o, defaultEdges: r, width: s, height: f, fitView: d, fitViewOptions: g, minZoom: v, maxZoom: x, nodeOrigin: y, nodeExtent: m, zIndexMode: p }) => t3((b, E) => {
  async function A() {
    const { nodeLookup: N, panZoom: w, fitViewOptions: U, fitViewResolver: _, width: C, height: X, minZoom: B, maxZoom: R } = E();
    w && (await k_({
      nodes: N,
      width: C,
      height: X,
      panZoom: w,
      minZoom: B,
      maxZoom: R
    }, U), _?.resolve(!0), b({ fitViewResolver: null }));
  }
  return {
    ...xv({
      nodes: l,
      edges: a,
      width: s,
      height: f,
      fitView: d,
      fitViewOptions: g,
      minZoom: v,
      maxZoom: x,
      nodeOrigin: y,
      nodeExtent: m,
      defaultNodes: o,
      defaultEdges: r,
      zIndexMode: p
    }),
    setNodes: (N) => {
      const { nodeLookup: w, parentLookup: U, nodeOrigin: _, nodeExtent: C, elevateNodesOnSelect: X, fitViewQueued: B, zIndexMode: R, nodesSelectionActive: G } = E(), { nodesInitialized: I, hasSelectedNodes: ot } = Td(N, w, U, {
        nodeOrigin: _,
        nodeExtent: C,
        elevateNodesOnSelect: X,
        checkEquality: !0,
        zIndexMode: R
      }), tt = G && ot;
      B && I ? (A(), b({
        nodes: N,
        nodesInitialized: I,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: tt
      })) : b({ nodes: N, nodesInitialized: I, nodesSelectionActive: tt });
    },
    setEdges: (N) => {
      const { connectionLookup: w, edgeLookup: U } = E();
      Sp(w, U, N), b({ edges: N });
    },
    setDefaultNodesAndEdges: (N, w) => {
      if (N) {
        const { setNodes: U } = E();
        U(N), b({ hasDefaultNodes: !0 });
      }
      if (w) {
        const { setEdges: U } = E();
        U(w), b({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (N) => {
      const { triggerNodeChanges: w, nodeLookup: U, parentLookup: _, domNode: C, nodeOrigin: X, nodeExtent: B, debug: R, fitViewQueued: G, zIndexMode: I } = E(), { changes: ot, updatedInternals: tt } = xw(N, U, _, C, X, B, I);
      tt && (mw(U, _, { nodeOrigin: X, nodeExtent: B, zIndexMode: I }), G ? (A(), b({ fitViewQueued: !1, fitViewOptions: void 0 })) : b({}), ot?.length > 0 && (R && console.log("React Flow: trigger node changes", ot), w?.(ot)));
    },
    updateNodePositions: (N, w = !1) => {
      const U = [];
      let _ = [];
      const { nodeLookup: C, triggerNodeChanges: X, connection: B, updateConnection: R, onNodesChangeMiddlewareMap: G } = E();
      for (const [I, ot] of N) {
        const tt = C.get(I), at = !!(tt?.expandParent && tt?.parentId && ot?.position), lt = {
          id: I,
          type: "position",
          position: at ? {
            x: Math.max(0, ot.position.x),
            y: Math.max(0, ot.position.y)
          } : ot.position,
          dragging: w
        };
        if (tt && B.inProgress && B.fromNode.id === tt.id) {
          const z = Si(tt, B.fromHandle, pt.Left, !0);
          R({ ...B, from: z });
        }
        at && tt.parentId && U.push({
          id: I,
          parentId: tt.parentId,
          rect: {
            ...ot.internals.positionAbsolute,
            width: ot.measured.width ?? 0,
            height: ot.measured.height ?? 0
          }
        }), _.push(lt);
      }
      if (U.length > 0) {
        const { parentLookup: I, nodeOrigin: ot } = E(), tt = $d(U, C, I, ot);
        _.push(...tt);
      }
      for (const I of G.values())
        _ = I(_);
      X(_);
    },
    triggerNodeChanges: (N) => {
      const { onNodesChange: w, setNodes: U, nodes: _, hasDefaultNodes: C, debug: X } = E();
      if (N?.length) {
        if (C) {
          const B = Bp(N, _);
          U(B);
        }
        X && console.log("React Flow: trigger node changes", N), w?.(N);
      }
    },
    triggerEdgeChanges: (N) => {
      const { onEdgesChange: w, setEdges: U, edges: _, hasDefaultEdges: C, debug: X } = E();
      if (N?.length) {
        if (C) {
          const B = Up(N, _);
          U(B);
        }
        X && console.log("React Flow: trigger edge changes", N), w?.(N);
      }
    },
    addSelectedNodes: (N) => {
      const { multiSelectionActive: w, edgeLookup: U, nodeLookup: _, triggerNodeChanges: C, triggerEdgeChanges: X } = E();
      if (w) {
        const B = N.map((R) => di(R, !0));
        C(B);
        return;
      }
      C(ma(_, /* @__PURE__ */ new Set([...N]), !0)), X(ma(U));
    },
    addSelectedEdges: (N) => {
      const { multiSelectionActive: w, edgeLookup: U, nodeLookup: _, triggerNodeChanges: C, triggerEdgeChanges: X } = E();
      if (w) {
        const B = N.map((R) => di(R, !0));
        X(B);
        return;
      }
      X(ma(U, /* @__PURE__ */ new Set([...N]))), C(ma(_, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: N, edges: w } = {}) => {
      const { edges: U, nodes: _, nodeLookup: C, triggerNodeChanges: X, triggerEdgeChanges: B } = E(), R = N || _, G = w || U, I = [];
      for (const tt of R) {
        if (!tt.selected)
          continue;
        const at = C.get(tt.id);
        at && (at.selected = !1), I.push(di(tt.id, !1));
      }
      const ot = [];
      for (const tt of G)
        tt.selected && ot.push(di(tt.id, !1));
      X(I), B(ot);
    },
    setMinZoom: (N) => {
      const { panZoom: w, maxZoom: U } = E();
      w?.setScaleExtent([N, U]), b({ minZoom: N });
    },
    setMaxZoom: (N) => {
      const { panZoom: w, minZoom: U } = E();
      w?.setScaleExtent([U, N]), b({ maxZoom: N });
    },
    setTranslateExtent: (N) => {
      E().panZoom?.setTranslateExtent(N), b({ translateExtent: N });
    },
    resetSelectedElements: () => {
      const { edges: N, nodes: w, triggerNodeChanges: U, triggerEdgeChanges: _, elementsSelectable: C } = E();
      if (!C)
        return;
      const X = w.reduce((R, G) => G.selected ? [...R, di(G.id, !1)] : R, []), B = N.reduce((R, G) => G.selected ? [...R, di(G.id, !1)] : R, []);
      U(X), _(B);
    },
    setNodeExtent: (N) => {
      const { nodes: w, nodeLookup: U, parentLookup: _, nodeOrigin: C, elevateNodesOnSelect: X, nodeExtent: B, zIndexMode: R } = E();
      N[0][0] === B[0][0] && N[0][1] === B[0][1] && N[1][0] === B[1][0] && N[1][1] === B[1][1] || (Td(w, U, _, {
        nodeOrigin: C,
        nodeExtent: N,
        elevateNodesOnSelect: X,
        checkEquality: !1,
        zIndexMode: R
      }), b({ nodeExtent: N }));
    },
    panBy: (N) => {
      const { transform: w, width: U, height: _, panZoom: C, translateExtent: X } = E();
      return Sw({ delta: N, panZoom: C, transform: w, translateExtent: X, width: U, height: _ });
    },
    setCenter: async (N, w, U) => {
      const { width: _, height: C, maxZoom: X, panZoom: B } = E();
      if (!B)
        return !1;
      const R = typeof U?.zoom < "u" ? U.zoom : X;
      return await B.setViewport({
        x: _ / 2 - N * R,
        y: C / 2 - w * R,
        zoom: R
      }, { duration: U?.duration, ease: U?.ease, interpolate: U?.interpolate }), !0;
    },
    cancelConnection: () => {
      b({
        connection: { ...np }
      });
    },
    updateConnection: (N) => {
      b({ connection: N });
    },
    reset: () => b({ ...xv() })
  };
}, Object.is);
function r1({ initialNodes: l, initialEdges: a, defaultNodes: o, defaultEdges: r, initialWidth: s, initialHeight: f, initialMinZoom: d, initialMaxZoom: g, initialFitViewOptions: v, fitView: x, nodeOrigin: y, nodeExtent: m, zIndexMode: p, children: b }) {
  const [E] = W.useState(() => jN({
    nodes: l,
    edges: a,
    defaultNodes: o,
    defaultEdges: r,
    width: s,
    height: f,
    fitView: x,
    minZoom: d,
    maxZoom: g,
    fitViewOptions: v,
    nodeOrigin: y,
    nodeExtent: m,
    zIndexMode: p
  }));
  return Z.jsx(e3, { value: E, children: Z.jsx(N3, { children: Z.jsx(j3, { children: b }) }) });
}
function qN({ children: l, nodes: a, edges: o, defaultNodes: r, defaultEdges: s, width: f, height: d, fitView: g, fitViewOptions: v, minZoom: x, maxZoom: y, nodeOrigin: m, nodeExtent: p, zIndexMode: b }) {
  return W.useContext(cr) ? Z.jsx(Z.Fragment, { children: l }) : Z.jsx(r1, { initialNodes: a, initialEdges: o, defaultNodes: r, defaultEdges: s, initialWidth: f, initialHeight: d, fitView: g, initialFitViewOptions: v, initialMinZoom: x, initialMaxZoom: y, nodeOrigin: m, nodeExtent: p, zIndexMode: b, children: l });
}
const XN = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function ZN({ nodes: l, edges: a, defaultNodes: o, defaultEdges: r, className: s, nodeTypes: f, edgeTypes: d, onNodeClick: g, onEdgeClick: v, onInit: x, onMove: y, onMoveStart: m, onMoveEnd: p, onConnect: b, onConnectStart: E, onConnectEnd: A, onClickConnectStart: N, onClickConnectEnd: w, onNodeMouseEnter: U, onNodeMouseMove: _, onNodeMouseLeave: C, onNodeContextMenu: X, onNodeDoubleClick: B, onNodeDragStart: R, onNodeDrag: G, onNodeDragStop: I, onNodesDelete: ot, onEdgesDelete: tt, onDelete: at, onSelectionChange: lt, onSelectionDragStart: z, onSelectionDrag: V, onSelectionDragStop: O, onSelectionContextMenu: H, onSelectionStart: q, onSelectionEnd: $, onBeforeDelete: P, connectionMode: it, connectionLineType: dt = Yl.Bezier, connectionLineStyle: vt, connectionLineComponent: T, connectionLineContainerStyle: k, deleteKeyCode: st = "Backspace", selectionKeyCode: ut = "Shift", selectionOnDrag: F = !1, selectionMode: ft = Bu.Full, panActivationKeyCode: gt = "Space", multiSelectionKeyCode: ct = Lu() ? "Meta" : "Control", zoomActivationKeyCode: rt = Lu() ? "Meta" : "Control", snapToGrid: xt, snapGrid: wt, onlyRenderVisibleElements: _t = !1, selectNodesOnDrag: Ct, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: xe, nodeOrigin: re = Rp, edgesFocusable: En, edgesReconnectable: Ie, elementsSelectable: Ae = !0, defaultViewport: Ee = g3, minZoom: Oe = 0.5, maxZoom: Ve = 2, translateExtent: _n = Hu, preventScrolling: ke = !0, nodeExtent: jl, defaultMarkerColor: wa = "#b1b1b7", zoomOnScroll: dr = !0, zoomOnPinch: $u = !0, panOnScroll: Na = !1, panOnScrollSpeed: Ta = 0.5, panOnScrollMode: Ca = mi.Free, zoomOnDoubleClick: hr = !0, panOnDrag: gr = !0, onPaneClick: _e, onPaneMouseEnter: mr, onPaneMouseMove: Ju, onPaneMouseLeave: Iu, onPaneScroll: bi, onPaneContextMenu: yr, paneClickDistance: ku = 1, nodeClickDistance: vr = 0, children: pr, onReconnect: ql, onReconnectStart: we, onReconnectEnd: wn, onEdgeContextMenu: Ne, onEdgeDoubleClick: xr, onEdgeMouseEnter: Sr, onEdgeMouseMove: br, onEdgeMouseLeave: Ei, reconnectRadius: _i = 10, onNodesChange: wi, onEdgesChange: Yn, noDragClassName: Ni = "nodrag", noWheelClassName: Xl = "nowheel", noPanClassName: za = "nopan", fitView: Fu, fitViewOptions: Ma, connectOnClick: Aa, attributionPosition: Zl, proOptions: Er, defaultEdgeOptions: Wu, elevateNodesOnSelect: Pu = !0, elevateEdgesOnSelect: to = !1, disableKeyboardA11y: Ti = !1, autoPanOnConnect: Oa, autoPanOnNodeDrag: eo, autoPanOnSelection: no = !0, autoPanSpeed: on, connectionRadius: oe, isValidConnection: Se, onError: ol, style: lo, id: io, nodeDragThreshold: _r, connectionDragThreshold: ao, viewport: Gl, onViewportChange: Ci, width: zi, height: jn, colorMode: cl = "light", debug: Ql, onScroll: qn, ariaLabelConfig: ee, zIndexMode: Da = "basic", ...uo }, oo) {
  const cn = io || "1", rl = p3(cl), wr = W.useCallback((Ra) => {
    Ra.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), qn?.(Ra);
  }, [qn]);
  return Z.jsx("div", { "data-testid": "rf__wrapper", ...uo, onScroll: wr, style: { ...lo, ...XN }, ref: oo, className: ue(["react-flow", s, rl]), id: io, role: "application", children: Z.jsxs(qN, { nodes: l, edges: a, width: zi, height: jn, fitView: Fu, fitViewOptions: Ma, minZoom: Oe, maxZoom: Ve, nodeOrigin: re, nodeExtent: jl, zIndexMode: Da, children: [Z.jsx(v3, { nodes: l, edges: a, defaultNodes: o, defaultEdges: r, onConnect: b, onConnectStart: E, onConnectEnd: A, onClickConnectStart: N, onClickConnectEnd: w, nodesDraggable: Ht, autoPanOnNodeFocus: Ot, nodesConnectable: Pt, nodesFocusable: xe, edgesFocusable: En, edgesReconnectable: Ie, elementsSelectable: Ae, elevateNodesOnSelect: Pu, elevateEdgesOnSelect: to, minZoom: Oe, maxZoom: Ve, nodeExtent: jl, onNodesChange: wi, onEdgesChange: Yn, snapToGrid: xt, snapGrid: wt, connectionMode: it, translateExtent: _n, connectOnClick: Aa, defaultEdgeOptions: Wu, fitView: Fu, fitViewOptions: Ma, onNodesDelete: ot, onEdgesDelete: tt, onDelete: at, onNodeDragStart: R, onNodeDrag: G, onNodeDragStop: I, onSelectionDrag: V, onSelectionDragStart: z, onSelectionDragStop: O, onMove: y, onMoveStart: m, onMoveEnd: p, noPanClassName: za, nodeOrigin: re, rfId: cn, autoPanOnConnect: Oa, autoPanOnNodeDrag: eo, autoPanSpeed: on, onError: ol, connectionRadius: oe, isValidConnection: Se, selectNodesOnDrag: Ct, nodeDragThreshold: _r, connectionDragThreshold: ao, onBeforeDelete: P, debug: Ql, ariaLabelConfig: ee, zIndexMode: Da }), Z.jsx(VN, { onInit: x, onNodeClick: g, onEdgeClick: v, onNodeMouseEnter: U, onNodeMouseMove: _, onNodeMouseLeave: C, onNodeContextMenu: X, onNodeDoubleClick: B, nodeTypes: f, edgeTypes: d, connectionLineType: dt, connectionLineStyle: vt, connectionLineComponent: T, connectionLineContainerStyle: k, selectionKeyCode: ut, selectionOnDrag: F, selectionMode: ft, deleteKeyCode: st, multiSelectionKeyCode: ct, panActivationKeyCode: gt, zoomActivationKeyCode: rt, onlyRenderVisibleElements: _t, defaultViewport: Ee, translateExtent: _n, minZoom: Oe, maxZoom: Ve, preventScrolling: ke, zoomOnScroll: dr, zoomOnPinch: $u, zoomOnDoubleClick: hr, panOnScroll: Na, panOnScrollSpeed: Ta, panOnScrollMode: Ca, panOnDrag: gr, autoPanOnSelection: no, onPaneClick: _e, onPaneMouseEnter: mr, onPaneMouseMove: Ju, onPaneMouseLeave: Iu, onPaneScroll: bi, onPaneContextMenu: yr, paneClickDistance: ku, nodeClickDistance: vr, onSelectionContextMenu: H, onSelectionStart: q, onSelectionEnd: $, onReconnect: ql, onReconnectStart: we, onReconnectEnd: wn, onEdgeContextMenu: Ne, onEdgeDoubleClick: xr, onEdgeMouseEnter: Sr, onEdgeMouseMove: br, onEdgeMouseLeave: Ei, reconnectRadius: _i, defaultMarkerColor: wa, noDragClassName: Ni, noWheelClassName: Xl, noPanClassName: za, rfId: cn, disableKeyboardA11y: Ti, nodeExtent: jl, viewport: Gl, onViewportChange: Ci, nodesDraggable: Ht }), Z.jsx(h3, { onSelectionChange: lt }), pr, Z.jsx(c3, { proOptions: Er, position: Zl }), Z.jsx(o3, { rfId: cn, disableKeyboardA11y: Ti })] }) });
}
var GN = Lp(ZN);
function QN(l) {
  const [a, o] = W.useState(l), r = W.useCallback((s) => o((f) => Bp(s, f)), []);
  return [a, o, r];
}
function KN(l) {
  const [a, o] = W.useState(l), r = W.useCallback((s) => o((f) => Up(s, f)), []);
  return [a, o, r];
}
function $N({ dimensions: l, lineWidth: a, variant: o, className: r }) {
  return Z.jsx("path", { strokeWidth: a, d: `M${l[0] / 2} 0 V${l[1]} M0 ${l[1] / 2} H${l[0]}`, className: ue(["react-flow__background-pattern", o, r]) });
}
function JN({ radius: l, className: a }) {
  return Z.jsx("circle", { cx: l, cy: l, r: l, className: ue(["react-flow__background-pattern", "dots", a]) });
}
var al;
(function(l) {
  l.Lines = "lines", l.Dots = "dots", l.Cross = "cross";
})(al || (al = {}));
const IN = {
  [al.Dots]: 1,
  [al.Lines]: 1,
  [al.Cross]: 6
}, kN = (l) => ({ transform: l.transform, patternId: `pattern-${l.rfId}` });
function s1({
  id: l,
  variant: a = al.Dots,
  // only used for dots and cross
  gap: o = 20,
  // only used for lines and cross
  size: r,
  lineWidth: s = 1,
  offset: f = 0,
  color: d,
  bgColor: g,
  style: v,
  className: x,
  patternClassName: y
}) {
  const m = W.useRef(null), { transform: p, patternId: b } = Ut(kN, kt), E = r || IN[a], A = a === al.Dots, N = a === al.Cross, w = Array.isArray(o) ? o : [o, o], U = [w[0] * p[2] || 1, w[1] * p[2] || 1], _ = E * p[2], C = Array.isArray(f) ? f : [f, f], X = N ? [_, _] : U, B = [
    C[0] * p[2] + X[0] / 2,
    C[1] * p[2] + X[1] / 2
  ], R = `${b}${l || ""}`;
  return Z.jsxs("svg", { className: ue(["react-flow__background", x]), style: {
    ...v,
    ...fr,
    "--xy-background-color-props": g,
    "--xy-background-pattern-color-props": d
  }, ref: m, "data-testid": "rf__background", children: [Z.jsx("pattern", { id: R, x: p[0] % U[0], y: p[1] % U[1], width: U[0], height: U[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${B[0]},-${B[1]})`, children: A ? Z.jsx(JN, { radius: _ / 2, className: y }) : Z.jsx($N, { dimensions: X, lineWidth: s, variant: a, className: y }) }), Z.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${R})` })] });
}
s1.displayName = "Background";
const FN = W.memo(s1);
function WN() {
  return Z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: Z.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function PN() {
  return Z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: Z.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function tT() {
  return Z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: Z.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function eT() {
  return Z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: Z.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function nT() {
  return Z.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: Z.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Lc({ children: l, className: a, ...o }) {
  return Z.jsx("button", { type: "button", className: ue(["react-flow__controls-button", a]), ...o, children: l });
}
const lT = (l) => ({
  isInteractive: l.nodesDraggable || l.nodesConnectable || l.elementsSelectable,
  minZoomReached: l.transform[2] <= l.minZoom,
  maxZoomReached: l.transform[2] >= l.maxZoom,
  ariaLabelConfig: l.ariaLabelConfig
});
function f1({ style: l, showZoom: a = !0, showFitView: o = !0, showInteractive: r = !0, fitViewOptions: s, onZoomIn: f, onZoomOut: d, onFitView: g, onInteractiveChange: v, className: x, children: y, position: m = "bottom-left", orientation: p = "vertical", "aria-label": b }) {
  const E = $t(), { isInteractive: A, minZoomReached: N, maxZoomReached: w, ariaLabelConfig: U } = Ut(lT, kt), { zoomIn: _, zoomOut: C, fitView: X } = sr(), B = () => {
    _(), f?.();
  }, R = () => {
    C(), d?.();
  }, G = () => {
    X(s), g?.();
  }, I = () => {
    E.setState({
      nodesDraggable: !A,
      nodesConnectable: !A,
      elementsSelectable: !A
    }), v?.(!A);
  }, ot = p === "horizontal" ? "horizontal" : "vertical";
  return Z.jsxs(rr, { className: ue(["react-flow__controls", ot, x]), position: m, style: l, "data-testid": "rf__controls", "aria-label": b ?? U["controls.ariaLabel"], children: [a && Z.jsxs(Z.Fragment, { children: [Z.jsx(Lc, { onClick: B, className: "react-flow__controls-zoomin", title: U["controls.zoomIn.ariaLabel"], "aria-label": U["controls.zoomIn.ariaLabel"], disabled: w, children: Z.jsx(WN, {}) }), Z.jsx(Lc, { onClick: R, className: "react-flow__controls-zoomout", title: U["controls.zoomOut.ariaLabel"], "aria-label": U["controls.zoomOut.ariaLabel"], disabled: N, children: Z.jsx(PN, {}) })] }), o && Z.jsx(Lc, { className: "react-flow__controls-fitview", onClick: G, title: U["controls.fitView.ariaLabel"], "aria-label": U["controls.fitView.ariaLabel"], children: Z.jsx(tT, {}) }), r && Z.jsx(Lc, { className: "react-flow__controls-interactive", onClick: I, title: U["controls.interactive.ariaLabel"], "aria-label": U["controls.interactive.ariaLabel"], children: A ? Z.jsx(nT, {}) : Z.jsx(eT, {}) }), y] });
}
f1.displayName = "Controls";
W.memo(f1);
function iT({ id: l, x: a, y: o, width: r, height: s, style: f, color: d, strokeColor: g, strokeWidth: v, className: x, borderRadius: y, shapeRendering: m, selected: p, onClick: b }) {
  const { background: E, backgroundColor: A } = f || {}, N = d || E || A;
  return Z.jsx("rect", { className: ue(["react-flow__minimap-node", { selected: p }, x]), x: a, y: o, rx: y, ry: y, width: r, height: s, style: {
    fill: N,
    stroke: g,
    strokeWidth: v
  }, shapeRendering: m, onClick: b ? (w) => b(w, l) : void 0 });
}
const aT = W.memo(iT), uT = (l) => l.nodes.map((a) => a.id), gd = (l) => l instanceof Function ? l : () => l;
function oT({
  nodeStrokeColor: l,
  nodeColor: a,
  nodeClassName: o = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: f = aT,
  onClick: d
}) {
  const g = Ut(uT, kt), v = gd(a), x = gd(l), y = gd(o), m = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return Z.jsx(Z.Fragment, { children: g.map((p) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    Z.jsx(rT, { id: p, nodeColorFunc: v, nodeStrokeColorFunc: x, nodeClassNameFunc: y, nodeBorderRadius: r, nodeStrokeWidth: s, NodeComponent: f, onClick: d, shapeRendering: m }, p)
  )) });
}
function cT({ id: l, nodeColorFunc: a, nodeStrokeColorFunc: o, nodeClassNameFunc: r, nodeBorderRadius: s, nodeStrokeWidth: f, shapeRendering: d, NodeComponent: g, onClick: v }) {
  const { node: x, x: y, y: m, width: p, height: b } = Ut((E) => {
    const A = E.nodeLookup.get(l);
    if (!A)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const N = A.internals.userNode, { x: w, y: U } = A.internals.positionAbsolute, { width: _, height: C } = bn(N);
    return {
      node: N,
      x: w,
      y: U,
      width: _,
      height: C
    };
  }, kt);
  return !x || x.hidden || !rp(x) ? null : Z.jsx(g, { x: y, y: m, width: p, height: b, style: x.style, selected: !!x.selected, className: r(x), color: a(x), borderRadius: s, strokeColor: o(x), strokeWidth: f, shapeRendering: d, onClick: v, id: x.id });
}
const rT = W.memo(cT);
var sT = W.memo(oT);
const fT = 200, dT = 150, hT = (l) => !l.hidden, gT = (l) => {
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
    boundingRect: o ? up(Zu(l.nodeLookup, { filter: hT }), a) : a,
    rfId: l.rfId,
    panZoom: l.panZoom,
    translateExtent: l.translateExtent,
    flowWidth: l.width,
    flowHeight: l.height,
    ariaLabelConfig: l.ariaLabelConfig
  };
}, Sv = (l, a) => l.x === a.x && l.y === a.y && l.width === a.width && l.height === a.height, mT = (l, a) => Sv(l.viewBB, a.viewBB) && Sv(l.boundingRect, a.boundingRect) && l.rfId === a.rfId && l.panZoom === a.panZoom && l.translateExtent === a.translateExtent && l.flowWidth === a.flowWidth && l.flowHeight === a.flowHeight && l.ariaLabelConfig === a.ariaLabelConfig, yT = "react-flow__minimap-desc";
function d1({
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
  maskColor: x,
  maskStrokeColor: y,
  maskStrokeWidth: m,
  position: p = "bottom-right",
  onClick: b,
  onNodeClick: E,
  pannable: A = !1,
  zoomable: N = !1,
  ariaLabel: w,
  inversePan: U,
  zoomStep: _ = 1,
  offsetScale: C = 5
}) {
  const X = $t(), B = W.useRef(null), { boundingRect: R, panZoom: G, viewBB: I, rfId: ot, translateExtent: tt, flowWidth: at, flowHeight: lt, ariaLabelConfig: z } = Ut(gT, mT), V = l?.width ?? fT, O = l?.height ?? dT, H = R.width / V, q = R.height / O, $ = Math.max(H, q), P = $ * V, it = $ * O, dt = C * $, vt = R.x - (P - R.width) / 2 - dt, T = R.y - (it - R.height) / 2 - dt, k = P + dt * 2, st = it + dt * 2, ut = `${yT}-${ot}`, F = W.useRef(0), ft = W.useRef();
  F.current = $, W.useEffect(() => {
    const wt = X.getState().panZoom;
    if (B.current && wt)
      return ft.current = Mw({
        domNode: B.current,
        panZoom: wt,
        getTransform: () => X.getState().transform,
        getViewScale: () => F.current
      }), () => {
        ft.current?.destroy();
      };
  }, [G]), W.useEffect(() => {
    ft.current?.update({
      translateExtent: tt,
      width: at,
      height: lt,
      inversePan: U,
      pannable: A,
      zoomStep: _,
      zoomable: N
    });
  }, [A, N, U, _, tt, at, lt]);
  const gt = b ? (wt) => {
    const [_t, Ct] = ft.current?.pointer(wt) || [0, 0];
    b(wt, { x: _t, y: Ct });
  } : void 0, ct = W.useCallback((wt, _t) => {
    const Ct = X.getState().nodeLookup.get(_t).internals.userNode;
    E?.(wt, Ct);
  }, [E]), rt = E ? ct : void 0, xt = w ?? z["minimap.ariaLabel"];
  return Z.jsx(rr, { position: p, style: {
    ...l,
    "--xy-minimap-background-color-props": typeof v == "string" ? v : void 0,
    "--xy-minimap-mask-background-color-props": typeof x == "string" ? x : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof y == "string" ? y : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * $ : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-width-props": typeof d == "number" ? d : void 0
  }, className: ue(["react-flow__minimap", a]), "data-testid": "rf__minimap", children: Z.jsxs("svg", { width: V, height: O, viewBox: `${vt} ${T} ${k} ${st}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": ut, ref: B, onClick: gt, children: [xt && Z.jsx("title", { id: ut, children: xt }), Z.jsx(sT, { onClick: rt, nodeColor: r, nodeStrokeColor: o, nodeBorderRadius: f, nodeClassName: s, nodeStrokeWidth: d, nodeComponent: g }), Z.jsx("path", { className: "react-flow__minimap-mask", d: `M${vt - dt},${T - dt}h${k + dt * 2}v${st + dt * 2}h${-k - dt * 2}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
d1.displayName = "MiniMap";
W.memo(d1);
const vT = (l) => (a) => l ? `${Math.max(1 / a.transform[2], 1)}` : void 0, pT = {
  [_a.Line]: "right",
  [_a.Handle]: "bottom-right"
};
function xT({ nodeId: l, position: a, variant: o = _a.Handle, className: r, style: s = void 0, children: f, color: d, minWidth: g = 10, minHeight: v = 10, maxWidth: x = Number.MAX_VALUE, maxHeight: y = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: p, autoScale: b = !0, shouldResize: E, onResizeStart: A, onResize: N, onResizeEnd: w }) {
  const U = Xp(), _ = typeof l == "string" ? l : U, C = $t(), X = W.useRef(null), B = o === _a.Handle, R = Ut(W.useCallback(vT(B && b), [B, b]), kt), G = W.useRef(null), I = a ?? pT[o];
  W.useEffect(() => {
    if (!(!X.current || !_))
      return G.current || (G.current = Xw({
        domNode: X.current,
        nodeId: _,
        getStoreItems: () => {
          const { nodeLookup: tt, transform: at, snapGrid: lt, snapToGrid: z, nodeOrigin: V, domNode: O } = C.getState();
          return {
            nodeLookup: tt,
            transform: at,
            snapGrid: lt,
            snapToGrid: z,
            nodeOrigin: V,
            paneDomNode: O
          };
        },
        onChange: (tt, at) => {
          const { triggerNodeChanges: lt, nodeLookup: z, parentLookup: V, nodeOrigin: O } = C.getState(), H = [], q = { x: tt.x, y: tt.y }, $ = z.get(_);
          if ($ && $.expandParent && $.parentId) {
            const P = $.origin ?? O, it = tt.width ?? $.measured.width ?? 0, dt = tt.height ?? $.measured.height ?? 0, vt = {
              id: $.id,
              parentId: $.parentId,
              rect: {
                width: it,
                height: dt,
                ...sp({
                  x: tt.x ?? $.position.x,
                  y: tt.y ?? $.position.y
                }, { width: it, height: dt }, $.parentId, z, P)
              }
            }, T = $d([vt], z, V, O);
            H.push(...T), q.x = tt.x ? Math.max(P[0] * it, tt.x) : void 0, q.y = tt.y ? Math.max(P[1] * dt, tt.y) : void 0;
          }
          if (q.x !== void 0 && q.y !== void 0) {
            const P = {
              id: _,
              type: "position",
              position: { ...q }
            };
            H.push(P);
          }
          if (tt.width !== void 0 && tt.height !== void 0) {
            const it = {
              id: _,
              type: "dimensions",
              resizing: !0,
              setAttributes: p ? p === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: tt.width,
                height: tt.height
              }
            };
            H.push(it);
          }
          for (const P of at) {
            const it = {
              ...P,
              type: "position"
            };
            H.push(it);
          }
          lt(H);
        },
        onEnd: ({ width: tt, height: at }) => {
          const lt = {
            id: _,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: tt,
              height: at
            }
          };
          C.getState().triggerNodeChanges([lt]);
        }
      })), G.current.update({
        controlPosition: I,
        boundaries: {
          minWidth: g,
          minHeight: v,
          maxWidth: x,
          maxHeight: y
        },
        keepAspectRatio: m,
        resizeDirection: p,
        onResizeStart: A,
        onResize: N,
        onResizeEnd: w,
        shouldResize: E
      }), () => {
        G.current?.destroy();
      };
  }, [
    I,
    g,
    v,
    x,
    y,
    m,
    A,
    N,
    w,
    E
  ]);
  const ot = I.split("-");
  return Z.jsx("div", { className: ue(["react-flow__resize-control", "nodrag", ...ot, o, r]), ref: X, style: {
    ...s,
    scale: R,
    ...d && { [B ? "backgroundColor" : "borderColor"]: d }
  }, children: f });
}
W.memo(xT);
const ST = ({ data: l, selected: a }) => {
  const o = l, r = W.useRef(null);
  W.useEffect(() => {
    const f = r.current, d = o.domElement;
    if (!f || !d) return;
    const g = () => {
      document.body.classList.contains("is-whiteboard-active") && f && d && !f.contains(d) && f.appendChild(d);
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
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      className: `case-whiteboard-card ${a ? "is-selected" : ""}`,
      style: { width: s },
      children: [
        /* @__PURE__ */ Z.jsx(il, { type: "target", position: pt.Left, className: "case-flow-handle" }),
        /* @__PURE__ */ Z.jsx(
          il,
          {
            type: "target",
            position: pt.Top,
            className: "case-flow-handle",
            id: "top-target"
          }
        ),
        /* @__PURE__ */ Z.jsx("div", { ref: r, className: "case-node-dom-content nodrag nopan" }),
        /* @__PURE__ */ Z.jsx(il, { type: "source", position: pt.Right, className: "case-flow-handle" }),
        /* @__PURE__ */ Z.jsx(
          il,
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
}, bT = ({ data: l, selected: a }) => {
  const o = l, r = W.useRef(null);
  W.useEffect(() => {
    const f = r.current, d = o.domElement;
    if (!f || !d) return;
    const g = () => {
      document.body.classList.contains("is-whiteboard-active") && f && d && !f.contains(d) && f.appendChild(d);
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
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      className: `case-whiteboard-card ${a ? "is-selected" : ""}`,
      style: { width: s },
      children: [
        /* @__PURE__ */ Z.jsx("div", { ref: r, className: "case-node-dom-content nodrag nopan" }),
        /* @__PURE__ */ Z.jsx(il, { type: "source", position: pt.Right, className: "case-flow-handle" })
      ]
    }
  );
}, ET = ({
  id: l,
  sourceX: a,
  sourceY: o,
  targetX: r,
  targetY: s,
  sourcePosition: f,
  targetPosition: d,
  style: g,
  markerEnd: v,
  data: x
}) => {
  const [y] = Xd({
    sourceX: a,
    sourceY: o,
    sourcePosition: f,
    targetX: r,
    targetY: s,
    targetPosition: d
  }), m = !!(x && x.dashed), p = {
    ...g,
    stroke: m ? "#8e8d88" : "#2c2c2e",
    strokeWidth: 2,
    strokeDasharray: m ? "6 6" : void 0
  };
  return /* @__PURE__ */ Z.jsx(
    Ku,
    {
      id: l,
      path: y,
      markerEnd: v,
      style: p
    }
  );
}, _T = {
  sectionNode: ST,
  heroNode: bT
}, wT = {
  custom: ET
}, NT = ({
  config: l,
  initialNodes: a,
  initialEdges: o
}) => {
  const [r, , s] = QN(a), [f, , d] = KN(o), [g, v] = W.useState(
    a[0]?.id || ""
  ), {
    fitBounds: x,
    getNode: y,
    getNodes: m,
    getNodesBounds: p,
    zoomIn: b,
    zoomOut: E,
    setNodes: A
  } = sr(), N = [];
  l.heroNode && N.push({
    id: "hero",
    label: l.heroNode.chapterLabel || "Overview",
    index: 0
  }), l.nodes.forEach((_) => {
    N.push({
      id: _.id,
      label: _.chapterLabel,
      index: N.length
    });
  });
  const w = W.useCallback(
    (_) => {
      v(_), A(
        (X) => X.map((B) => ({
          ...B,
          selected: B.id === _
        }))
      );
      const C = y(_);
      if (C) {
        const X = C.position.x, B = C.position.y, R = C.data, G = C.measured?.width || R?.width || 760, I = C.measured?.height || 600;
        x(
          { x: X, y: B, width: G, height: I },
          { duration: 550, padding: 0.22 }
        );
      }
    },
    [y, x, A]
  ), U = W.useCallback(() => {
    v(""), A(
      (C) => C.map((X) => ({
        ...X,
        selected: !1
      }))
    );
    const _ = m();
    if (_.length) {
      const C = p(_);
      x(C, { duration: 550, padding: 0.12 });
    }
  }, [m, p, x, A]);
  return /* @__PURE__ */ Z.jsxs("div", { style: { width: "100%", height: "100%", position: "relative" }, children: [
    /* @__PURE__ */ Z.jsx(
      GN,
      {
        nodes: r,
        edges: f,
        onNodesChange: s,
        onEdgesChange: d,
        nodeTypes: _T,
        edgeTypes: wT,
        fitView: !0,
        fitViewOptions: { padding: 0.18, duration: 400 },
        minZoom: 0.25,
        maxZoom: 1.5,
        zoomOnScroll: !1,
        panOnScroll: !0,
        proOptions: { hideAttribution: !0 },
        children: /* @__PURE__ */ Z.jsx(
          FN,
          {
            variant: al.Dots,
            gap: 24,
            size: 1.2,
            color: "#d6d4cb"
          }
        )
      }
    ),
    /* @__PURE__ */ Z.jsx(
      "nav",
      {
        className: "case-storyboard-stepper",
        "aria-label": "Case Study Storyboard Navigation",
        children: N.map((_) => {
          const C = g === _.id;
          return /* @__PURE__ */ Z.jsx(
            "button",
            {
              type: "button",
              className: `stepper-btn ${C ? "is-active" : ""}`,
              onClick: () => w(_.id),
              children: _.label
            },
            _.id
          );
        })
      }
    ),
    /* @__PURE__ */ Z.jsxs("div", { className: "case-viewport-controls", "aria-label": "Canvas Zoom Controls", children: [
      /* @__PURE__ */ Z.jsx(
        "button",
        {
          type: "button",
          className: "control-btn",
          onClick: () => b({ duration: 250 }),
          title: "Zoom In",
          "aria-label": "Zoom In",
          children: /* @__PURE__ */ Z.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
            /* @__PURE__ */ Z.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ Z.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
            /* @__PURE__ */ Z.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
            /* @__PURE__ */ Z.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
          ] })
        }
      ),
      /* @__PURE__ */ Z.jsx(
        "button",
        {
          type: "button",
          className: "control-btn",
          onClick: () => E({ duration: 250 }),
          title: "Zoom Out",
          "aria-label": "Zoom Out",
          children: /* @__PURE__ */ Z.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
            /* @__PURE__ */ Z.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ Z.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
            /* @__PURE__ */ Z.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
          ] })
        }
      ),
      /* @__PURE__ */ Z.jsx(
        "button",
        {
          type: "button",
          className: "control-btn",
          onClick: U,
          title: "Fit All",
          "aria-label": "Fit All",
          children: /* @__PURE__ */ Z.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ Z.jsx("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }) })
        }
      )
    ] })
  ] });
}, TT = (l) => /* @__PURE__ */ Z.jsx(r1, { children: /* @__PURE__ */ Z.jsx(NT, { ...l }) });
function CT() {
  const l = document.body.dataset.caseSlug;
  if (l) return l;
  const a = document.querySelector("main")?.getAttribute("data-case-slug");
  if (a) return a;
  const r = window.location.pathname.match(/\/cases\/([^/.]+)(?:\.html)?/);
  return r && r[1] ? r[1] : null;
}
function bv() {
  const l = CT();
  if (!l) return;
  const a = fb(l);
  if (!a) return;
  let o = document.getElementById("whiteboard-stage");
  if (!o) {
    o = document.createElement("div"), o.id = "whiteboard-stage", o.className = "whiteboard-stage";
    const v = document.getElementById("main-content");
    v && v.parentNode ? v.parentNode.insertBefore(o, v) : document.body.appendChild(o);
  }
  const r = new db(a), { nodes: s, edges: f } = r.prepareNodesAndEdges();
  if (!s.length) return;
  r.attachNavigationToggle();
  const d = r.getInitialMode();
  r.setMode(d), lb.createRoot(o).render(
    /* @__PURE__ */ Z.jsx(Ev.StrictMode, { children: /* @__PURE__ */ Z.jsx(
      TT,
      {
        config: a,
        initialNodes: s,
        initialEdges: f
      }
    ) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", bv) : bv();
