var Ie = /* @__PURE__ */ ((e) => (e[e.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", e[e.WEBGL = 1] = "WEBGL", e[e.WEBGL2 = 2] = "WEBGL2", e))(Ie || {}), Jn = /* @__PURE__ */ ((e) => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WEBGL = 1] = "WEBGL", e[e.CANVAS = 2] = "CANVAS", e))(Jn || {}), Ki = /* @__PURE__ */ ((e) => (e[e.COLOR = 16384] = "COLOR", e[e.DEPTH = 256] = "DEPTH", e[e.STENCIL = 1024] = "STENCIL", e))(Ki || {}), G = /* @__PURE__ */ ((e) => (e[e.NORMAL = 0] = "NORMAL", e[e.ADD = 1] = "ADD", e[e.MULTIPLY = 2] = "MULTIPLY", e[e.SCREEN = 3] = "SCREEN", e[e.OVERLAY = 4] = "OVERLAY", e[e.DARKEN = 5] = "DARKEN", e[e.LIGHTEN = 6] = "LIGHTEN", e[e.COLOR_DODGE = 7] = "COLOR_DODGE", e[e.COLOR_BURN = 8] = "COLOR_BURN", e[e.HARD_LIGHT = 9] = "HARD_LIGHT", e[e.SOFT_LIGHT = 10] = "SOFT_LIGHT", e[e.DIFFERENCE = 11] = "DIFFERENCE", e[e.EXCLUSION = 12] = "EXCLUSION", e[e.HUE = 13] = "HUE", e[e.SATURATION = 14] = "SATURATION", e[e.COLOR = 15] = "COLOR", e[e.LUMINOSITY = 16] = "LUMINOSITY", e[e.NORMAL_NPM = 17] = "NORMAL_NPM", e[e.ADD_NPM = 18] = "ADD_NPM", e[e.SCREEN_NPM = 19] = "SCREEN_NPM", e[e.NONE = 20] = "NONE", e[e.SRC_OVER = 0] = "SRC_OVER", e[e.SRC_IN = 21] = "SRC_IN", e[e.SRC_OUT = 22] = "SRC_OUT", e[e.SRC_ATOP = 23] = "SRC_ATOP", e[e.DST_OVER = 24] = "DST_OVER", e[e.DST_IN = 25] = "DST_IN", e[e.DST_OUT = 26] = "DST_OUT", e[e.DST_ATOP = 27] = "DST_ATOP", e[e.ERASE = 26] = "ERASE", e[e.SUBTRACT = 28] = "SUBTRACT", e[e.XOR = 29] = "XOR", e))(G || {}), jt = /* @__PURE__ */ ((e) => (e[e.POINTS = 0] = "POINTS", e[e.LINES = 1] = "LINES", e[e.LINE_LOOP = 2] = "LINE_LOOP", e[e.LINE_STRIP = 3] = "LINE_STRIP", e[e.TRIANGLES = 4] = "TRIANGLES", e[e.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", e[e.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", e))(jt || {}), C = /* @__PURE__ */ ((e) => (e[e.RGBA = 6408] = "RGBA", e[e.RGB = 6407] = "RGB", e[e.RG = 33319] = "RG", e[e.RED = 6403] = "RED", e[e.RGBA_INTEGER = 36249] = "RGBA_INTEGER", e[e.RGB_INTEGER = 36248] = "RGB_INTEGER", e[e.RG_INTEGER = 33320] = "RG_INTEGER", e[e.RED_INTEGER = 36244] = "RED_INTEGER", e[e.ALPHA = 6406] = "ALPHA", e[e.LUMINANCE = 6409] = "LUMINANCE", e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", e))(C || {}), Ge = /* @__PURE__ */ ((e) => (e[e.TEXTURE_2D = 3553] = "TEXTURE_2D", e[e.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", e[e.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", e[e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", e[e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", e[e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", e[e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", e))(Ge || {}), O = /* @__PURE__ */ ((e) => (e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", e[e.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", e[e.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", e[e.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", e[e.UNSIGNED_INT = 5125] = "UNSIGNED_INT", e[e.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", e[e.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", e[e.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", e[e.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", e[e.BYTE = 5120] = "BYTE", e[e.SHORT = 5122] = "SHORT", e[e.INT = 5124] = "INT", e[e.FLOAT = 5126] = "FLOAT", e[e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", e[e.HALF_FLOAT = 36193] = "HALF_FLOAT", e))(O || {}), Zi = /* @__PURE__ */ ((e) => (e[e.FLOAT = 0] = "FLOAT", e[e.INT = 1] = "INT", e[e.UINT = 2] = "UINT", e))(Zi || {}), ee = /* @__PURE__ */ ((e) => (e[e.NEAREST = 0] = "NEAREST", e[e.LINEAR = 1] = "LINEAR", e))(ee || {}), ce = /* @__PURE__ */ ((e) => (e[e.CLAMP = 33071] = "CLAMP", e[e.REPEAT = 10497] = "REPEAT", e[e.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", e))(ce || {}), Kt = /* @__PURE__ */ ((e) => (e[e.OFF = 0] = "OFF", e[e.POW2 = 1] = "POW2", e[e.ON = 2] = "ON", e[e.ON_MANUAL = 3] = "ON_MANUAL", e))(Kt || {}), Gt = /* @__PURE__ */ ((e) => (e[e.NPM = 0] = "NPM", e[e.UNPACK = 1] = "UNPACK", e[e.PMA = 2] = "PMA", e[e.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", e[e.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", e[e.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", e))(Gt || {}), $t = /* @__PURE__ */ ((e) => (e[e.NO = 0] = "NO", e[e.YES = 1] = "YES", e[e.AUTO = 2] = "AUTO", e[e.BLEND = 0] = "BLEND", e[e.CLEAR = 1] = "CLEAR", e[e.BLIT = 2] = "BLIT", e))($t || {}), Mr = /* @__PURE__ */ ((e) => (e[e.AUTO = 0] = "AUTO", e[e.MANUAL = 1] = "MANUAL", e))(Mr || {}), At = /* @__PURE__ */ ((e) => (e.LOW = "lowp", e.MEDIUM = "mediump", e.HIGH = "highp", e))(At || {}), ut = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.SCISSOR = 1] = "SCISSOR", e[e.STENCIL = 2] = "STENCIL", e[e.SPRITE = 3] = "SPRITE", e[e.COLOR = 4] = "COLOR", e))(ut || {}), nt = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.LOW = 2] = "LOW", e[e.MEDIUM = 4] = "MEDIUM", e[e.HIGH = 8] = "HIGH", e))(nt || {}), Yt = /* @__PURE__ */ ((e) => (e[e.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", e[e.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", e[e.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", e))(Yt || {});
const pa = {
  createCanvas: (e, t) => {
    const s = document.createElement("canvas");
    return s.width = e, s.height = t, s;
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (e, t) => fetch(e, t),
  parseXML: (e) => new DOMParser().parseFromString(e, "text/xml")
}, I = {
  ADAPTER: pa,
  RESOLUTION: 1,
  CREATE_IMAGE_BITMAP: !1,
  ROUND_PIXELS: !1
};
var bi = /iPhone/i, Gr = /iPod/i, Hr = /iPad/i, Xr = /\biOS-universal(?:.+)Mac\b/i, Ti = /\bAndroid(?:.+)Mobile\b/i, Vr = /Android/i, Me = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, Ts = /Silk/i, Jt = /Windows Phone/i, zr = /\bWindows(?:.+)ARM\b/i, $r = /BlackBerry/i, Wr = /BB10/i, jr = /Opera Mini/i, Yr = /\b(CriOS|Chrome)(?:.+)Mobile/i, qr = /Mobile(?:.+)Firefox\b/i, Kr = function(e) {
  return typeof e < "u" && e.platform === "MacIntel" && typeof e.maxTouchPoints == "number" && e.maxTouchPoints > 1 && typeof MSStream > "u";
};
function ma(e) {
  return function(t) {
    return t.test(e);
  };
}
function Zr(e) {
  var t = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  !e && typeof navigator < "u" ? t = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints || 0
  } : typeof e == "string" ? t.userAgent = e : e && e.userAgent && (t = {
    userAgent: e.userAgent,
    platform: e.platform,
    maxTouchPoints: e.maxTouchPoints || 0
  });
  var s = t.userAgent, i = s.split("[FBAN");
  typeof i[1] < "u" && (s = i[0]), i = s.split("Twitter"), typeof i[1] < "u" && (s = i[0]);
  var r = ma(s), n = {
    apple: {
      phone: r(bi) && !r(Jt),
      ipod: r(Gr),
      tablet: !r(bi) && (r(Hr) || Kr(t)) && !r(Jt),
      universal: r(Xr),
      device: (r(bi) || r(Gr) || r(Hr) || r(Xr) || Kr(t)) && !r(Jt)
    },
    amazon: {
      phone: r(Me),
      tablet: !r(Me) && r(Ts),
      device: r(Me) || r(Ts)
    },
    android: {
      phone: !r(Jt) && r(Me) || !r(Jt) && r(Ti),
      tablet: !r(Jt) && !r(Me) && !r(Ti) && (r(Ts) || r(Vr)),
      device: !r(Jt) && (r(Me) || r(Ts) || r(Ti) || r(Vr)) || r(/\bokhttp\b/i)
    },
    windows: {
      phone: r(Jt),
      tablet: r(zr),
      device: r(Jt) || r(zr)
    },
    other: {
      blackberry: r($r),
      blackberry10: r(Wr),
      opera: r(jr),
      firefox: r(qr),
      chrome: r(Yr),
      device: r($r) || r(Wr) || r(jr) || r(qr) || r(Yr)
    },
    any: !1,
    phone: !1,
    tablet: !1
  };
  return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n;
}
const ga = Zr.default ?? Zr, se = ga(globalThis.navigator);
I.RETINA_PREFIX = /@([0-9\.]+)x/;
I.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var Ei = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Se = {}, _a = {
  get exports() {
    return Se;
  },
  set exports(e) {
    Se = e;
  }
};
(function(e) {
  var t = Object.prototype.hasOwnProperty, s = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (s = !1));
  function r(h, l, c) {
    this.fn = h, this.context = l, this.once = c || !1;
  }
  function n(h, l, c, u, d) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var f = new r(c, u || h, d), p = s ? s + l : l;
    return h._events[p] ? h._events[p].fn ? h._events[p] = [h._events[p], f] : h._events[p].push(f) : (h._events[p] = f, h._eventsCount++), h;
  }
  function o(h, l) {
    --h._eventsCount === 0 ? h._events = new i() : delete h._events[l];
  }
  function a() {
    this._events = new i(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var l = [], c, u;
    if (this._eventsCount === 0)
      return l;
    for (u in c = this._events)
      t.call(c, u) && l.push(s ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
  }, a.prototype.listeners = function(l) {
    var c = s ? s + l : l, u = this._events[c];
    if (!u)
      return [];
    if (u.fn)
      return [u.fn];
    for (var d = 0, f = u.length, p = new Array(f); d < f; d++)
      p[d] = u[d].fn;
    return p;
  }, a.prototype.listenerCount = function(l) {
    var c = s ? s + l : l, u = this._events[c];
    return u ? u.fn ? 1 : u.length : 0;
  }, a.prototype.emit = function(l, c, u, d, f, p) {
    var _ = s ? s + l : l;
    if (!this._events[_])
      return !1;
    var m = this._events[_], x = arguments.length, v, g;
    if (m.fn) {
      switch (m.once && this.removeListener(l, m.fn, void 0, !0), x) {
        case 1:
          return m.fn.call(m.context), !0;
        case 2:
          return m.fn.call(m.context, c), !0;
        case 3:
          return m.fn.call(m.context, c, u), !0;
        case 4:
          return m.fn.call(m.context, c, u, d), !0;
        case 5:
          return m.fn.call(m.context, c, u, d, f), !0;
        case 6:
          return m.fn.call(m.context, c, u, d, f, p), !0;
      }
      for (g = 1, v = new Array(x - 1); g < x; g++)
        v[g - 1] = arguments[g];
      m.fn.apply(m.context, v);
    } else {
      var y = m.length, T;
      for (g = 0; g < y; g++)
        switch (m[g].once && this.removeListener(l, m[g].fn, void 0, !0), x) {
          case 1:
            m[g].fn.call(m[g].context);
            break;
          case 2:
            m[g].fn.call(m[g].context, c);
            break;
          case 3:
            m[g].fn.call(m[g].context, c, u);
            break;
          case 4:
            m[g].fn.call(m[g].context, c, u, d);
            break;
          default:
            if (!v)
              for (T = 1, v = new Array(x - 1); T < x; T++)
                v[T - 1] = arguments[T];
            m[g].fn.apply(m[g].context, v);
        }
    }
    return !0;
  }, a.prototype.on = function(l, c, u) {
    return n(this, l, c, u, !1);
  }, a.prototype.once = function(l, c, u) {
    return n(this, l, c, u, !0);
  }, a.prototype.removeListener = function(l, c, u, d) {
    var f = s ? s + l : l;
    if (!this._events[f])
      return this;
    if (!c)
      return o(this, f), this;
    var p = this._events[f];
    if (p.fn)
      p.fn === c && (!d || p.once) && (!u || p.context === u) && o(this, f);
    else {
      for (var _ = 0, m = [], x = p.length; _ < x; _++)
        (p[_].fn !== c || d && !p[_].once || u && p[_].context !== u) && m.push(p[_]);
      m.length ? this._events[f] = m.length === 1 ? m[0] : m : o(this, f);
    }
    return this;
  }, a.prototype.removeAllListeners = function(l) {
    var c;
    return l ? (c = s ? s + l : l, this._events[c] && o(this, c)) : (this._events = new i(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = s, a.EventEmitter = a, e.exports = a;
})(_a);
var qs = {}, xa = {
  get exports() {
    return qs;
  },
  set exports(e) {
    qs = e;
  }
};
xa.exports = hi;
qs.default = hi;
function hi(e, t, s) {
  s = s || 2;
  var i = t && t.length, r = i ? t[0] * s : e.length, n = Qn(e, 0, r, s, !0), o = [];
  if (!n || n.next === n.prev)
    return o;
  var a, h, l, c, u, d, f;
  if (i && (n = Ea(e, t, n, s)), e.length > 80 * s) {
    a = l = e[0], h = c = e[1];
    for (var p = s; p < r; p += s)
      u = e[p], d = e[p + 1], u < a && (a = u), d < h && (h = d), u > l && (l = u), d > c && (c = d);
    f = Math.max(l - a, c - h), f = f !== 0 ? 32767 / f : 0;
  }
  return cs(n, o, s, a, h, f, 0), o;
}
function Qn(e, t, s, i, r) {
  var n, o;
  if (r === tr(e, t, s, i) > 0)
    for (n = t; n < s; n += i)
      o = Jr(n, e[n], e[n + 1], o);
  else
    for (n = s - i; n >= t; n -= i)
      o = Jr(n, e[n], e[n + 1], o);
  return o && li(o, o.next) && (ds(o), o = o.next), o;
}
function Ae(e, t) {
  if (!e)
    return e;
  t || (t = e);
  var s = e, i;
  do
    if (i = !1, !s.steiner && (li(s, s.next) || st(s.prev, s, s.next) === 0)) {
      if (ds(s), s = t = s.prev, s === s.next)
        break;
      i = !0;
    } else
      s = s.next;
  while (i || s !== t);
  return t;
}
function cs(e, t, s, i, r, n, o) {
  if (e) {
    !o && n && Ia(e, i, r, n);
    for (var a = e, h, l; e.prev !== e.next; ) {
      if (h = e.prev, l = e.next, n ? va(e, i, r, n) : ya(e)) {
        t.push(h.i / s | 0), t.push(e.i / s | 0), t.push(l.i / s | 0), ds(e), e = l.next, a = l.next;
        continue;
      }
      if (e = l, e === a) {
        o ? o === 1 ? (e = ba(Ae(e), t, s), cs(e, t, s, i, r, n, 2)) : o === 2 && Ta(e, t, s, i, r, n) : cs(Ae(e), t, s, i, r, n, 1);
        break;
      }
    }
  }
}
function ya(e) {
  var t = e.prev, s = e, i = e.next;
  if (st(t, s, i) >= 0)
    return !1;
  for (var r = t.x, n = s.x, o = i.x, a = t.y, h = s.y, l = i.y, c = r < n ? r < o ? r : o : n < o ? n : o, u = a < h ? a < l ? a : l : h < l ? h : l, d = r > n ? r > o ? r : o : n > o ? n : o, f = a > h ? a > l ? a : l : h > l ? h : l, p = i.next; p !== t; ) {
    if (p.x >= c && p.x <= d && p.y >= u && p.y <= f && Oe(r, a, n, h, o, l, p.x, p.y) && st(p.prev, p, p.next) >= 0)
      return !1;
    p = p.next;
  }
  return !0;
}
function va(e, t, s, i) {
  var r = e.prev, n = e, o = e.next;
  if (st(r, n, o) >= 0)
    return !1;
  for (var a = r.x, h = n.x, l = o.x, c = r.y, u = n.y, d = o.y, f = a < h ? a < l ? a : l : h < l ? h : l, p = c < u ? c < d ? c : d : u < d ? u : d, _ = a > h ? a > l ? a : l : h > l ? h : l, m = c > u ? c > d ? c : d : u > d ? u : d, x = Ji(f, p, t, s, i), v = Ji(_, m, t, s, i), g = e.prevZ, y = e.nextZ; g && g.z >= x && y && y.z <= v; ) {
    if (g.x >= f && g.x <= _ && g.y >= p && g.y <= m && g !== r && g !== o && Oe(a, c, h, u, l, d, g.x, g.y) && st(g.prev, g, g.next) >= 0 || (g = g.prevZ, y.x >= f && y.x <= _ && y.y >= p && y.y <= m && y !== r && y !== o && Oe(a, c, h, u, l, d, y.x, y.y) && st(y.prev, y, y.next) >= 0))
      return !1;
    y = y.nextZ;
  }
  for (; g && g.z >= x; ) {
    if (g.x >= f && g.x <= _ && g.y >= p && g.y <= m && g !== r && g !== o && Oe(a, c, h, u, l, d, g.x, g.y) && st(g.prev, g, g.next) >= 0)
      return !1;
    g = g.prevZ;
  }
  for (; y && y.z <= v; ) {
    if (y.x >= f && y.x <= _ && y.y >= p && y.y <= m && y !== r && y !== o && Oe(a, c, h, u, l, d, y.x, y.y) && st(y.prev, y, y.next) >= 0)
      return !1;
    y = y.nextZ;
  }
  return !0;
}
function ba(e, t, s) {
  var i = e;
  do {
    var r = i.prev, n = i.next.next;
    !li(r, n) && to(r, i, i.next, n) && us(r, n) && us(n, r) && (t.push(r.i / s | 0), t.push(i.i / s | 0), t.push(n.i / s | 0), ds(i), ds(i.next), i = e = n), i = i.next;
  } while (i !== e);
  return Ae(i);
}
function Ta(e, t, s, i, r, n) {
  var o = e;
  do {
    for (var a = o.next.next; a !== o.prev; ) {
      if (o.i !== a.i && Pa(o, a)) {
        var h = eo(o, a);
        o = Ae(o, o.next), h = Ae(h, h.next), cs(o, t, s, i, r, n, 0), cs(h, t, s, i, r, n, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== e);
}
function Ea(e, t, s, i) {
  var r = [], n, o, a, h, l;
  for (n = 0, o = t.length; n < o; n++)
    a = t[n] * i, h = n < o - 1 ? t[n + 1] * i : e.length, l = Qn(e, a, h, i, !1), l === l.next && (l.steiner = !0), r.push(Ma(l));
  for (r.sort(wa), n = 0; n < r.length; n++)
    s = Sa(r[n], s);
  return s;
}
function wa(e, t) {
  return e.x - t.x;
}
function Sa(e, t) {
  var s = Aa(e, t);
  if (!s)
    return t;
  var i = eo(s, e);
  return Ae(i, i.next), Ae(s, s.next);
}
function Aa(e, t) {
  var s = t, i = e.x, r = e.y, n = -1 / 0, o;
  do {
    if (r <= s.y && r >= s.next.y && s.next.y !== s.y) {
      var a = s.x + (r - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
      if (a <= i && a > n && (n = a, o = s.x < s.next.x ? s : s.next, a === i))
        return o;
    }
    s = s.next;
  } while (s !== t);
  if (!o)
    return null;
  var h = o, l = o.x, c = o.y, u = 1 / 0, d;
  s = o;
  do
    i >= s.x && s.x >= l && i !== s.x && Oe(r < c ? i : n, r, l, c, r < c ? n : i, r, s.x, s.y) && (d = Math.abs(r - s.y) / (i - s.x), us(s, e) && (d < u || d === u && (s.x > o.x || s.x === o.x && Ca(o, s))) && (o = s, u = d)), s = s.next;
  while (s !== h);
  return o;
}
function Ca(e, t) {
  return st(e.prev, e, t.prev) < 0 && st(t.next, e, e.next) < 0;
}
function Ia(e, t, s, i) {
  var r = e;
  do
    r.z === 0 && (r.z = Ji(r.x, r.y, t, s, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== e);
  r.prevZ.nextZ = null, r.prevZ = null, Ra(r);
}
function Ra(e) {
  var t, s, i, r, n, o, a, h, l = 1;
  do {
    for (s = e, e = null, n = null, o = 0; s; ) {
      for (o++, i = s, a = 0, t = 0; t < l && (a++, i = i.nextZ, !!i); t++)
        ;
      for (h = l; a > 0 || h > 0 && i; )
        a !== 0 && (h === 0 || !i || s.z <= i.z) ? (r = s, s = s.nextZ, a--) : (r = i, i = i.nextZ, h--), n ? n.nextZ = r : e = r, r.prevZ = n, n = r;
      s = i;
    }
    n.nextZ = null, l *= 2;
  } while (o > 1);
  return e;
}
function Ji(e, t, s, i, r) {
  return e = (e - s) * r | 0, t = (t - i) * r | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Ma(e) {
  var t = e, s = e;
  do
    (t.x < s.x || t.x === s.x && t.y < s.y) && (s = t), t = t.next;
  while (t !== e);
  return s;
}
function Oe(e, t, s, i, r, n, o, a) {
  return (r - o) * (t - a) >= (e - o) * (n - a) && (e - o) * (i - a) >= (s - o) * (t - a) && (s - o) * (n - a) >= (r - o) * (i - a);
}
function Pa(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !Ba(e, t) && // dones't intersect other edges
  (us(e, t) && us(t, e) && Da(e, t) && // locally visible
  (st(e.prev, e, t.prev) || st(e, t.prev, t)) || // does not create opposite-facing sectors
  li(e, t) && st(e.prev, e, e.next) > 0 && st(t.prev, t, t.next) > 0);
}
function st(e, t, s) {
  return (t.y - e.y) * (s.x - t.x) - (t.x - e.x) * (s.y - t.y);
}
function li(e, t) {
  return e.x === t.x && e.y === t.y;
}
function to(e, t, s, i) {
  var r = ws(st(e, t, s)), n = ws(st(e, t, i)), o = ws(st(s, i, e)), a = ws(st(s, i, t));
  return !!(r !== n && o !== a || r === 0 && Es(e, s, t) || n === 0 && Es(e, i, t) || o === 0 && Es(s, e, i) || a === 0 && Es(s, t, i));
}
function Es(e, t, s) {
  return t.x <= Math.max(e.x, s.x) && t.x >= Math.min(e.x, s.x) && t.y <= Math.max(e.y, s.y) && t.y >= Math.min(e.y, s.y);
}
function ws(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Ba(e, t) {
  var s = e;
  do {
    if (s.i !== e.i && s.next.i !== e.i && s.i !== t.i && s.next.i !== t.i && to(s, s.next, e, t))
      return !0;
    s = s.next;
  } while (s !== e);
  return !1;
}
function us(e, t) {
  return st(e.prev, e, e.next) < 0 ? st(e, t, e.next) >= 0 && st(e, e.prev, t) >= 0 : st(e, t, e.prev) < 0 || st(e, e.next, t) < 0;
}
function Da(e, t) {
  var s = e, i = !1, r = (e.x + t.x) / 2, n = (e.y + t.y) / 2;
  do
    s.y > n != s.next.y > n && s.next.y !== s.y && r < (s.next.x - s.x) * (n - s.y) / (s.next.y - s.y) + s.x && (i = !i), s = s.next;
  while (s !== e);
  return i;
}
function eo(e, t) {
  var s = new Qi(e.i, e.x, e.y), i = new Qi(t.i, t.x, t.y), r = e.next, n = t.prev;
  return e.next = t, t.prev = e, s.next = r, r.prev = s, i.next = s, s.prev = i, n.next = i, i.prev = n, i;
}
function Jr(e, t, s, i) {
  var r = new Qi(e, t, s);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function ds(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Qi(e, t, s) {
  this.i = e, this.x = t, this.y = s, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
hi.deviation = function(e, t, s, i) {
  var r = t && t.length, n = r ? t[0] * s : e.length, o = Math.abs(tr(e, 0, n, s));
  if (r)
    for (var a = 0, h = t.length; a < h; a++) {
      var l = t[a] * s, c = a < h - 1 ? t[a + 1] * s : e.length;
      o -= Math.abs(tr(e, l, c, s));
    }
  var u = 0;
  for (a = 0; a < i.length; a += 3) {
    var d = i[a] * s, f = i[a + 1] * s, p = i[a + 2] * s;
    u += Math.abs(
      (e[d] - e[p]) * (e[f + 1] - e[d + 1]) - (e[d] - e[f]) * (e[p + 1] - e[d + 1])
    );
  }
  return o === 0 && u === 0 ? 0 : Math.abs((u - o) / o);
};
function tr(e, t, s, i) {
  for (var r = 0, n = t, o = s - i; n < s; n += i)
    r += (e[o] - e[n]) * (e[n + 1] + e[o + 1]), o = n;
  return r;
}
hi.flatten = function(e) {
  for (var t = e[0][0].length, s = { vertices: [], holes: [], dimensions: t }, i = 0, r = 0; r < e.length; r++) {
    for (var n = 0; n < e[r].length; n++)
      for (var o = 0; o < t; o++)
        s.vertices.push(e[r][n][o]);
    r > 0 && (i += e[r - 1].length, s.holes.push(i));
  }
  return s;
};
var Ks = {}, Fa = {
  get exports() {
    return Ks;
  },
  set exports(e) {
    Ks = e;
  }
};
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(s) {
    var i = t && !t.nodeType && t, r = e && !e.nodeType && e, n = typeof Ei == "object" && Ei;
    (n.global === n || n.window === n || n.self === n) && (s = n);
    var o, a = 2147483647, h = 36, l = 1, c = 26, u = 38, d = 700, f = 72, p = 128, _ = "-", m = /^xn--/, x = /[^\x20-\x7E]/, v = /[\x2E\u3002\uFF0E\uFF61]/g, g = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, y = h - l, T = Math.floor, P = String.fromCharCode, A;
    function E(S) {
      throw RangeError(g[S]);
    }
    function N(S, H) {
      for (var j = S.length, K = []; j--; )
        K[j] = H(S[j]);
      return K;
    }
    function U(S, H) {
      var j = S.split("@"), K = "";
      j.length > 1 && (K = j[0] + "@", S = j[1]), S = S.replace(v, ".");
      var J = S.split("."), dt = N(J, H).join(".");
      return K + dt;
    }
    function R(S) {
      for (var H = [], j = 0, K = S.length, J, dt; j < K; )
        J = S.charCodeAt(j++), J >= 55296 && J <= 56319 && j < K ? (dt = S.charCodeAt(j++), (dt & 64512) == 56320 ? H.push(((J & 1023) << 10) + (dt & 1023) + 65536) : (H.push(J), j--)) : H.push(J);
      return H;
    }
    function L(S) {
      return N(S, function(H) {
        var j = "";
        return H > 65535 && (H -= 65536, j += P(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), j += P(H), j;
      }).join("");
    }
    function w(S) {
      return S - 48 < 10 ? S - 22 : S - 65 < 26 ? S - 65 : S - 97 < 26 ? S - 97 : h;
    }
    function b(S, H) {
      return S + 22 + 75 * (S < 26) - ((H != 0) << 5);
    }
    function V(S, H, j) {
      var K = 0;
      for (S = j ? T(S / d) : S >> 1, S += T(S / H); S > y * c >> 1; K += h)
        S = T(S / y);
      return T(K + (y + 1) * S / (S + u));
    }
    function W(S) {
      var H = [], j = S.length, K, J = 0, dt = p, at = f, ft, yt, Et, mt, Q, ht, ct, Ht, Xt;
      for (ft = S.lastIndexOf(_), ft < 0 && (ft = 0), yt = 0; yt < ft; ++yt)
        S.charCodeAt(yt) >= 128 && E("not-basic"), H.push(S.charCodeAt(yt));
      for (Et = ft > 0 ? ft + 1 : 0; Et < j; ) {
        for (mt = J, Q = 1, ht = h; Et >= j && E("invalid-input"), ct = w(S.charCodeAt(Et++)), (ct >= h || ct > T((a - J) / Q)) && E("overflow"), J += ct * Q, Ht = ht <= at ? l : ht >= at + c ? c : ht - at, !(ct < Ht); ht += h)
          Xt = h - Ht, Q > T(a / Xt) && E("overflow"), Q *= Xt;
        K = H.length + 1, at = V(J - mt, K, mt == 0), T(J / K) > a - dt && E("overflow"), dt += T(J / K), J %= K, H.splice(J++, 0, dt);
      }
      return L(H);
    }
    function D(S) {
      var H, j, K, J, dt, at, ft, yt, Et, mt, Q, ht = [], ct, Ht, Xt, Ze;
      for (S = R(S), ct = S.length, H = p, j = 0, dt = f, at = 0; at < ct; ++at)
        Q = S[at], Q < 128 && ht.push(P(Q));
      for (K = J = ht.length, J && ht.push(_); K < ct; ) {
        for (ft = a, at = 0; at < ct; ++at)
          Q = S[at], Q >= H && Q < ft && (ft = Q);
        for (Ht = K + 1, ft - H > T((a - j) / Ht) && E("overflow"), j += (ft - H) * Ht, H = ft, at = 0; at < ct; ++at)
          if (Q = S[at], Q < H && ++j > a && E("overflow"), Q == H) {
            for (yt = j, Et = h; mt = Et <= dt ? l : Et >= dt + c ? c : Et - dt, !(yt < mt); Et += h)
              Ze = yt - mt, Xt = h - mt, ht.push(
                P(b(mt + Ze % Xt, 0))
              ), yt = T(Ze / Xt);
            ht.push(P(b(yt, 0))), dt = V(j, Ht, K == J), j = 0, ++K;
          }
        ++j, ++H;
      }
      return ht.join("");
    }
    function q(S) {
      return U(S, function(H) {
        return m.test(H) ? W(H.slice(4).toLowerCase()) : H;
      });
    }
    function rt(S) {
      return U(S, function(H) {
        return x.test(H) ? "xn--" + D(H) : H;
      });
    }
    if (o = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.3.2",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: R,
        encode: L
      },
      decode: W,
      encode: D,
      toASCII: rt,
      toUnicode: q
    }, i && r)
      if (e.exports == i)
        r.exports = o;
      else
        for (A in o)
          o.hasOwnProperty(A) && (i[A] = o[A]);
    else
      s.punycode = o;
  })(Ei);
})(Fa, Ks);
var La = {
  isString: function(e) {
    return typeof e == "string";
  },
  isObject: function(e) {
    return typeof e == "object" && e !== null;
  },
  isNull: function(e) {
    return e === null;
  },
  isNullOrUndefined: function(e) {
    return e == null;
  }
}, fs = {};
function Na(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var ka = function(e, t, s, i) {
  t = t || "&", s = s || "=";
  var r = {};
  if (typeof e != "string" || e.length === 0)
    return r;
  var n = /\+/g;
  e = e.split(t);
  var o = 1e3;
  i && typeof i.maxKeys == "number" && (o = i.maxKeys);
  var a = e.length;
  o > 0 && a > o && (a = o);
  for (var h = 0; h < a; ++h) {
    var l = e[h].replace(n, "%20"), c = l.indexOf(s), u, d, f, p;
    c >= 0 ? (u = l.substr(0, c), d = l.substr(c + 1)) : (u = l, d = ""), f = decodeURIComponent(u), p = decodeURIComponent(d), Na(r, f) ? Array.isArray(r[f]) ? r[f].push(p) : r[f] = [r[f], p] : r[f] = p;
  }
  return r;
}, Je = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, Oa = function(e, t, s, i) {
  return t = t || "&", s = s || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(r) {
    var n = encodeURIComponent(Je(r)) + s;
    return Array.isArray(e[r]) ? e[r].map(function(o) {
      return n + encodeURIComponent(Je(o));
    }).join(t) : n + encodeURIComponent(Je(e[r]));
  }).join(t) : i ? encodeURIComponent(Je(i)) + s + encodeURIComponent(Je(e)) : "";
};
fs.decode = fs.parse = ka;
fs.encode = fs.stringify = Oa;
var Ua = Ks, Wt = La, Ga = ci, Ha = Ja, Xa = Za;
function kt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var Va = /^([a-z0-9.+-]+:)/i, za = /:[0-9]*$/, $a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Wa = ["<", ">", '"', "`", " ", "\r", `
`, "	"], ja = ["{", "}", "|", "\\", "^", "`"].concat(Wa), er = ["'"].concat(ja), Qr = ["%", "/", "?", ";", "#"].concat(er), tn = ["/", "?", "#"], Ya = 255, en = /^[+a-z0-9A-Z_-]{0,63}$/, qa = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ka = {
  javascript: !0,
  "javascript:": !0
}, sr = {
  javascript: !0,
  "javascript:": !0
}, He = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, ir = fs;
function ci(e, t, s) {
  if (e && Wt.isObject(e) && e instanceof kt)
    return e;
  var i = new kt();
  return i.parse(e, t, s), i;
}
kt.prototype.parse = function(e, t, s) {
  if (!Wt.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var i = e.indexOf("?"), r = i !== -1 && i < e.indexOf("#") ? "?" : "#", n = e.split(r), o = /\\/g;
  n[0] = n[0].replace(o, "/"), e = n.join(r);
  var a = e;
  if (a = a.trim(), !s && e.split("#").length === 1) {
    var h = $a.exec(a);
    if (h)
      return this.path = a, this.href = a, this.pathname = h[1], h[2] ? (this.search = h[2], t ? this.query = ir.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var l = Va.exec(a);
  if (l) {
    l = l[0];
    var c = l.toLowerCase();
    this.protocol = c, a = a.substr(l.length);
  }
  if (s || l || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var u = a.substr(0, 2) === "//";
    u && !(l && sr[l]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!sr[l] && (u || l && !He[l])) {
    for (var d = -1, f = 0; f < tn.length; f++) {
      var p = a.indexOf(tn[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    var _, m;
    d === -1 ? m = a.lastIndexOf("@") : m = a.lastIndexOf("@", d), m !== -1 && (_ = a.slice(0, m), a = a.slice(m + 1), this.auth = decodeURIComponent(_)), d = -1;
    for (var f = 0; f < Qr.length; f++) {
      var p = a.indexOf(Qr[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!x)
      for (var v = this.hostname.split(/\./), f = 0, g = v.length; f < g; f++) {
        var y = v[f];
        if (y && !y.match(en)) {
          for (var T = "", P = 0, A = y.length; P < A; P++)
            y.charCodeAt(P) > 127 ? T += "x" : T += y[P];
          if (!T.match(en)) {
            var E = v.slice(0, f), N = v.slice(f + 1), U = y.match(qa);
            U && (E.push(U[1]), N.unshift(U[2])), N.length && (a = "/" + N.join(".") + a), this.hostname = E.join(".");
            break;
          }
        }
      }
    this.hostname.length > Ya ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), x || (this.hostname = Ua.toASCII(this.hostname));
    var R = this.port ? ":" + this.port : "", L = this.hostname || "";
    this.host = L + R, this.href += this.host, x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!Ka[c])
    for (var f = 0, g = er.length; f < g; f++) {
      var w = er[f];
      if (a.indexOf(w) !== -1) {
        var b = encodeURIComponent(w);
        b === w && (b = escape(w)), a = a.split(w).join(b);
      }
    }
  var V = a.indexOf("#");
  V !== -1 && (this.hash = a.substr(V), a = a.slice(0, V));
  var W = a.indexOf("?");
  if (W !== -1 ? (this.search = a.substr(W), this.query = a.substr(W + 1), t && (this.query = ir.parse(this.query)), a = a.slice(0, W)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), He[c] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var R = this.pathname || "", D = this.search || "";
    this.path = R + D;
  }
  return this.href = this.format(), this;
};
function Za(e) {
  return Wt.isString(e) && (e = ci(e)), e instanceof kt ? e.format() : kt.prototype.format.call(e);
}
kt.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", s = this.pathname || "", i = this.hash || "", r = !1, n = "";
  this.host ? r = e + this.host : this.hostname && (r = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && Wt.isObject(this.query) && Object.keys(this.query).length && (n = ir.stringify(this.query));
  var o = this.search || n && "?" + n || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || He[t]) && r !== !1 ? (r = "//" + (r || ""), s && s.charAt(0) !== "/" && (s = "/" + s)) : r || (r = ""), i && i.charAt(0) !== "#" && (i = "#" + i), o && o.charAt(0) !== "?" && (o = "?" + o), s = s.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), o = o.replace("#", "%23"), t + r + s + o + i;
};
function Ja(e, t) {
  return ci(e, !1, !0).resolve(t);
}
kt.prototype.resolve = function(e) {
  return this.resolveObject(ci(e, !1, !0)).format();
};
kt.prototype.resolveObject = function(e) {
  if (Wt.isString(e)) {
    var t = new kt();
    t.parse(e, !1, !0), e = t;
  }
  for (var s = new kt(), i = Object.keys(this), r = 0; r < i.length; r++) {
    var n = i[r];
    s[n] = this[n];
  }
  if (s.hash = e.hash, e.href === "")
    return s.href = s.format(), s;
  if (e.slashes && !e.protocol) {
    for (var o = Object.keys(e), a = 0; a < o.length; a++) {
      var h = o[a];
      h !== "protocol" && (s[h] = e[h]);
    }
    return He[s.protocol] && s.hostname && !s.pathname && (s.path = s.pathname = "/"), s.href = s.format(), s;
  }
  if (e.protocol && e.protocol !== s.protocol) {
    if (!He[e.protocol]) {
      for (var l = Object.keys(e), c = 0; c < l.length; c++) {
        var u = l[c];
        s[u] = e[u];
      }
      return s.href = s.format(), s;
    }
    if (s.protocol = e.protocol, !e.host && !sr[e.protocol]) {
      for (var g = (e.pathname || "").split("/"); g.length && !(e.host = g.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), g[0] !== "" && g.unshift(""), g.length < 2 && g.unshift(""), s.pathname = g.join("/");
    } else
      s.pathname = e.pathname;
    if (s.search = e.search, s.query = e.query, s.host = e.host || "", s.auth = e.auth, s.hostname = e.hostname || e.host, s.port = e.port, s.pathname || s.search) {
      var d = s.pathname || "", f = s.search || "";
      s.path = d + f;
    }
    return s.slashes = s.slashes || e.slashes, s.href = s.format(), s;
  }
  var p = s.pathname && s.pathname.charAt(0) === "/", _ = e.host || e.pathname && e.pathname.charAt(0) === "/", m = _ || p || s.host && e.pathname, x = m, v = s.pathname && s.pathname.split("/") || [], g = e.pathname && e.pathname.split("/") || [], y = s.protocol && !He[s.protocol];
  if (y && (s.hostname = "", s.port = null, s.host && (v[0] === "" ? v[0] = s.host : v.unshift(s.host)), s.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (g[0] === "" ? g[0] = e.host : g.unshift(e.host)), e.host = null), m = m && (g[0] === "" || v[0] === "")), _)
    s.host = e.host || e.host === "" ? e.host : s.host, s.hostname = e.hostname || e.hostname === "" ? e.hostname : s.hostname, s.search = e.search, s.query = e.query, v = g;
  else if (g.length)
    v || (v = []), v.pop(), v = v.concat(g), s.search = e.search, s.query = e.query;
  else if (!Wt.isNullOrUndefined(e.search)) {
    if (y) {
      s.hostname = s.host = v.shift();
      var T = s.host && s.host.indexOf("@") > 0 ? s.host.split("@") : !1;
      T && (s.auth = T.shift(), s.host = s.hostname = T.shift());
    }
    return s.search = e.search, s.query = e.query, (!Wt.isNull(s.pathname) || !Wt.isNull(s.search)) && (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")), s.href = s.format(), s;
  }
  if (!v.length)
    return s.pathname = null, s.search ? s.path = "/" + s.search : s.path = null, s.href = s.format(), s;
  for (var P = v.slice(-1)[0], A = (s.host || e.host || v.length > 1) && (P === "." || P === "..") || P === "", E = 0, N = v.length; N >= 0; N--)
    P = v[N], P === "." ? v.splice(N, 1) : P === ".." ? (v.splice(N, 1), E++) : E && (v.splice(N, 1), E--);
  if (!m && !x)
    for (; E--; E)
      v.unshift("..");
  m && v[0] !== "" && (!v[0] || v[0].charAt(0) !== "/") && v.unshift(""), A && v.join("/").substr(-1) !== "/" && v.push("");
  var U = v[0] === "" || v[0] && v[0].charAt(0) === "/";
  if (y) {
    s.hostname = s.host = U ? "" : v.length ? v.shift() : "";
    var T = s.host && s.host.indexOf("@") > 0 ? s.host.split("@") : !1;
    T && (s.auth = T.shift(), s.host = s.hostname = T.shift());
  }
  return m = m || s.host && v.length, m && !U && v.unshift(""), v.length ? s.pathname = v.join("/") : (s.pathname = null, s.path = null), (!Wt.isNull(s.pathname) || !Wt.isNull(s.search)) && (s.path = (s.pathname ? s.pathname : "") + (s.search ? s.search : "")), s.auth = e.auth || s.auth, s.slashes = s.slashes || e.slashes, s.href = s.format(), s;
};
kt.prototype.parseHost = function() {
  var e = this.host, t = za.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Qa = {
  parse: Ga,
  format: Xa,
  resolve: Ha
};
function It(e) {
  if (typeof e != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
}
function Qe(e) {
  return e.split("?")[0].split("#")[0];
}
function th(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function eh(e, t, s) {
  return e.replace(new RegExp(th(t), "g"), s);
}
function sh(e, t) {
  let s = "", i = 0, r = -1, n = 0, o = -1;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      o = e.charCodeAt(a);
    else {
      if (o === 47)
        break;
      o = 47;
    }
    if (o === 47) {
      if (!(r === a - 1 || n === 1))
        if (r !== a - 1 && n === 2) {
          if (s.length < 2 || i !== 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
            if (s.length > 2) {
              const h = s.lastIndexOf("/");
              if (h !== s.length - 1) {
                h === -1 ? (s = "", i = 0) : (s = s.slice(0, h), i = s.length - 1 - s.lastIndexOf("/")), r = a, n = 0;
                continue;
              }
            } else if (s.length === 2 || s.length === 1) {
              s = "", i = 0, r = a, n = 0;
              continue;
            }
          }
          t && (s.length > 0 ? s += "/.." : s = "..", i = 2);
        } else
          s.length > 0 ? s += `/${e.slice(r + 1, a)}` : s = e.slice(r + 1, a), i = a - r - 1;
      r = a, n = 0;
    } else
      o === 46 && n !== -1 ? ++n : n = -1;
  }
  return s;
}
const vt = {
  toPosix(e) {
    return eh(e, "\\", "/");
  },
  isUrl(e) {
    return /^https?:/.test(this.toPosix(e));
  },
  isDataUrl(e) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e);
  },
  hasProtocol(e) {
    return /^[^/:]+:\//.test(this.toPosix(e));
  },
  getProtocol(e) {
    It(e), e = this.toPosix(e);
    let t = "";
    const s = /^file:\/\/\//.exec(e), i = /^[^/:]+:\/\//.exec(e), r = /^[^/:]+:\//.exec(e);
    if (s || i || r) {
      const n = (s == null ? void 0 : s[0]) || (i == null ? void 0 : i[0]) || (r == null ? void 0 : r[0]);
      t = n, e = e.slice(n.length);
    }
    return t;
  },
  toAbsolute(e, t, s) {
    if (this.isDataUrl(e))
      return e;
    const i = Qe(this.toPosix(t ?? I.ADAPTER.getBaseUrl())), r = Qe(this.toPosix(s ?? this.rootname(i)));
    return It(e), e = this.toPosix(e), e.startsWith("/") ? vt.join(r, e.slice(1)) : this.isAbsolute(e) ? e : this.join(i, e);
  },
  normalize(e) {
    if (e = this.toPosix(e), It(e), e.length === 0)
      return ".";
    let t = "";
    const s = e.startsWith("/");
    this.hasProtocol(e) && (t = this.rootname(e), e = e.slice(t.length));
    const i = e.endsWith("/");
    return e = sh(e, !1), e.length > 0 && i && (e += "/"), s ? `/${e}` : t + e;
  },
  isAbsolute(e) {
    return It(e), e = this.toPosix(e), this.hasProtocol(e) ? !0 : e.startsWith("/");
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    let t;
    for (let s = 0; s < e.length; ++s) {
      const i = e[s];
      if (It(i), i.length > 0)
        if (t === void 0)
          t = i;
        else {
          const r = e[s - 1] ?? "";
          this.extname(r) ? t += `/../${i}` : t += `/${i}`;
        }
    }
    return t === void 0 ? "." : this.normalize(t);
  },
  dirname(e) {
    if (It(e), e.length === 0)
      return ".";
    e = this.toPosix(e);
    let t = e.charCodeAt(0);
    const s = t === 47;
    let i = -1, r = !0;
    const n = this.getProtocol(e), o = e;
    e = e.slice(n.length);
    for (let a = e.length - 1; a >= 1; --a)
      if (t = e.charCodeAt(a), t === 47) {
        if (!r) {
          i = a;
          break;
        }
      } else
        r = !1;
    return i === -1 ? s ? "/" : this.isUrl(o) ? n + e : n : s && i === 1 ? "//" : n + e.slice(0, i);
  },
  rootname(e) {
    It(e), e = this.toPosix(e);
    let t = "";
    if (e.startsWith("/") ? t = "/" : t = this.getProtocol(e), this.isUrl(e)) {
      const s = e.indexOf("/", t.length);
      s !== -1 ? t = e.slice(0, s) : t = e, t.endsWith("/") || (t += "/");
    }
    return t;
  },
  basename(e, t) {
    It(e), t && It(t), e = Qe(this.toPosix(e));
    let s = 0, i = -1, r = !0, n;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e)
        return "";
      let o = t.length - 1, a = -1;
      for (n = e.length - 1; n >= 0; --n) {
        const h = e.charCodeAt(n);
        if (h === 47) {
          if (!r) {
            s = n + 1;
            break;
          }
        } else
          a === -1 && (r = !1, a = n + 1), o >= 0 && (h === t.charCodeAt(o) ? --o === -1 && (i = n) : (o = -1, i = a));
      }
      return s === i ? i = a : i === -1 && (i = e.length), e.slice(s, i);
    }
    for (n = e.length - 1; n >= 0; --n)
      if (e.charCodeAt(n) === 47) {
        if (!r) {
          s = n + 1;
          break;
        }
      } else
        i === -1 && (r = !1, i = n + 1);
    return i === -1 ? "" : e.slice(s, i);
  },
  extname(e) {
    It(e), e = Qe(this.toPosix(e));
    let t = -1, s = 0, i = -1, r = !0, n = 0;
    for (let o = e.length - 1; o >= 0; --o) {
      const a = e.charCodeAt(o);
      if (a === 47) {
        if (!r) {
          s = o + 1;
          break;
        }
        continue;
      }
      i === -1 && (r = !1, i = o + 1), a === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    }
    return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === s + 1 ? "" : e.slice(t, i);
  },
  parse(e) {
    It(e);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    e = Qe(this.toPosix(e));
    let s = e.charCodeAt(0);
    const i = this.isAbsolute(e);
    let r;
    t.root = this.rootname(e), i || this.hasProtocol(e) ? r = 1 : r = 0;
    let n = -1, o = 0, a = -1, h = !0, l = e.length - 1, c = 0;
    for (; l >= r; --l) {
      if (s = e.charCodeAt(l), s === 47) {
        if (!h) {
          o = l + 1;
          break;
        }
        continue;
      }
      a === -1 && (h = !1, a = l + 1), s === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1);
    }
    return n === -1 || a === -1 || c === 0 || c === 1 && n === a - 1 && n === o + 1 ? a !== -1 && (o === 0 && i ? t.base = t.name = e.slice(1, a) : t.base = t.name = e.slice(o, a)) : (o === 0 && i ? (t.name = e.slice(1, n), t.base = e.slice(1, a)) : (t.name = e.slice(o, n), t.base = e.slice(o, a)), t.ext = e.slice(n, a)), t.dir = this.dirname(e), t;
  },
  sep: "/",
  delimiter: ":"
}, sn = {};
function $(e, t, s = 3) {
  if (sn[t])
    return;
  let i = new Error().stack;
  typeof i > "u" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${e}`) : (i = i.split(`
`).splice(s).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${e}`), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${e}`), console.warn(i))), sn[t] = !0;
}
let wi;
function ih() {
  return typeof wi > "u" && (wi = function() {
    var s;
    const t = {
      stencil: !0,
      failIfMajorPerformanceCaveat: I.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
    };
    try {
      if (!I.ADAPTER.getWebGLRenderingContext())
        return !1;
      const i = I.ADAPTER.createCanvas();
      let r = i.getContext("webgl", t) || i.getContext("experimental-webgl", t);
      const n = !!((s = r == null ? void 0 : r.getContextAttributes()) != null && s.stencil);
      if (r) {
        const o = r.getExtension("WEBGL_lose_context");
        o && o.loseContext();
      }
      return r = null, n;
    } catch {
      return !1;
    }
  }()), wi;
}
var rh = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, Qt = function(e) {
  return typeof e == "string" ? e.length > 0 : typeof e == "number";
}, pt = function(e, t, s) {
  return t === void 0 && (t = 0), s === void 0 && (s = Math.pow(10, t)), Math.round(s * e) / s + 0;
}, Ct = function(e, t, s) {
  return t === void 0 && (t = 0), s === void 0 && (s = 1), e > s ? s : e > t ? e : t;
}, so = function(e) {
  return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
}, rn = function(e) {
  return { r: Ct(e.r, 0, 255), g: Ct(e.g, 0, 255), b: Ct(e.b, 0, 255), a: Ct(e.a) };
}, Si = function(e) {
  return { r: pt(e.r), g: pt(e.g), b: pt(e.b), a: pt(e.a, 3) };
}, nh = /^#([0-9a-f]{3,8})$/i, Ss = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, io = function(e) {
  var t = e.r, s = e.g, i = e.b, r = e.a, n = Math.max(t, s, i), o = n - Math.min(t, s, i), a = o ? n === t ? (s - i) / o : n === s ? 2 + (i - t) / o : 4 + (t - s) / o : 0;
  return { h: 60 * (a < 0 ? a + 6 : a), s: n ? o / n * 100 : 0, v: n / 255 * 100, a: r };
}, ro = function(e) {
  var t = e.h, s = e.s, i = e.v, r = e.a;
  t = t / 360 * 6, s /= 100, i /= 100;
  var n = Math.floor(t), o = i * (1 - s), a = i * (1 - (t - n) * s), h = i * (1 - (1 - t + n) * s), l = n % 6;
  return { r: 255 * [i, a, o, o, h, i][l], g: 255 * [h, i, i, a, o, o][l], b: 255 * [o, o, h, i, i, a][l], a: r };
}, nn = function(e) {
  return { h: so(e.h), s: Ct(e.s, 0, 100), l: Ct(e.l, 0, 100), a: Ct(e.a) };
}, on = function(e) {
  return { h: pt(e.h), s: pt(e.s), l: pt(e.l), a: pt(e.a, 3) };
}, an = function(e) {
  return ro((s = (t = e).s, { h: t.h, s: (s *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * s / (i + s) * 100 : 0, v: i + s, a: t.a }));
  var t, s, i;
}, hs = function(e) {
  return { h: (t = io(e)).h, s: (r = (200 - (s = t.s)) * (i = t.v) / 100) > 0 && r < 200 ? s * i / 100 / (r <= 100 ? r : 200 - r) * 100 : 0, l: r / 2, a: t.a };
  var t, s, i, r;
}, oh = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, ah = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, hh = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, lh = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, rr = { string: [[function(e) {
  var t = nh.exec(e);
  return t ? (e = t[1]).length <= 4 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? pt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : e.length === 6 || e.length === 8 ? { r: parseInt(e.substr(0, 2), 16), g: parseInt(e.substr(2, 2), 16), b: parseInt(e.substr(4, 2), 16), a: e.length === 8 ? pt(parseInt(e.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(e) {
  var t = hh.exec(e) || lh.exec(e);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : rn({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(e) {
  var t = oh.exec(e) || ah.exec(e);
  if (!t)
    return null;
  var s, i, r = nn({ h: (s = t[1], i = t[2], i === void 0 && (i = "deg"), Number(s) * (rh[i] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return an(r);
}, "hsl"]], object: [[function(e) {
  var t = e.r, s = e.g, i = e.b, r = e.a, n = r === void 0 ? 1 : r;
  return Qt(t) && Qt(s) && Qt(i) ? rn({ r: Number(t), g: Number(s), b: Number(i), a: Number(n) }) : null;
}, "rgb"], [function(e) {
  var t = e.h, s = e.s, i = e.l, r = e.a, n = r === void 0 ? 1 : r;
  if (!Qt(t) || !Qt(s) || !Qt(i))
    return null;
  var o = nn({ h: Number(t), s: Number(s), l: Number(i), a: Number(n) });
  return an(o);
}, "hsl"], [function(e) {
  var t = e.h, s = e.s, i = e.v, r = e.a, n = r === void 0 ? 1 : r;
  if (!Qt(t) || !Qt(s) || !Qt(i))
    return null;
  var o = function(a) {
    return { h: so(a.h), s: Ct(a.s, 0, 100), v: Ct(a.v, 0, 100), a: Ct(a.a) };
  }({ h: Number(t), s: Number(s), v: Number(i), a: Number(n) });
  return ro(o);
}, "hsv"]] }, hn = function(e, t) {
  for (var s = 0; s < t.length; s++) {
    var i = t[s][0](e);
    if (i)
      return [i, t[s][1]];
  }
  return [null, void 0];
}, ch = function(e) {
  return typeof e == "string" ? hn(e.trim(), rr.string) : typeof e == "object" && e !== null ? hn(e, rr.object) : [null, void 0];
}, Ai = function(e, t) {
  var s = hs(e);
  return { h: s.h, s: Ct(s.s + 100 * t, 0, 100), l: s.l, a: s.a };
}, Ci = function(e) {
  return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
}, ln = function(e, t) {
  var s = hs(e);
  return { h: s.h, s: s.s, l: Ct(s.l + 100 * t, 0, 100), a: s.a };
}, nr = function() {
  function e(t) {
    this.parsed = ch(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return e.prototype.isValid = function() {
    return this.parsed !== null;
  }, e.prototype.brightness = function() {
    return pt(Ci(this.rgba), 2);
  }, e.prototype.isDark = function() {
    return Ci(this.rgba) < 0.5;
  }, e.prototype.isLight = function() {
    return Ci(this.rgba) >= 0.5;
  }, e.prototype.toHex = function() {
    return t = Si(this.rgba), s = t.r, i = t.g, r = t.b, o = (n = t.a) < 1 ? Ss(pt(255 * n)) : "", "#" + Ss(s) + Ss(i) + Ss(r) + o;
    var t, s, i, r, n, o;
  }, e.prototype.toRgb = function() {
    return Si(this.rgba);
  }, e.prototype.toRgbString = function() {
    return t = Si(this.rgba), s = t.r, i = t.g, r = t.b, (n = t.a) < 1 ? "rgba(" + s + ", " + i + ", " + r + ", " + n + ")" : "rgb(" + s + ", " + i + ", " + r + ")";
    var t, s, i, r, n;
  }, e.prototype.toHsl = function() {
    return on(hs(this.rgba));
  }, e.prototype.toHslString = function() {
    return t = on(hs(this.rgba)), s = t.h, i = t.s, r = t.l, (n = t.a) < 1 ? "hsla(" + s + ", " + i + "%, " + r + "%, " + n + ")" : "hsl(" + s + ", " + i + "%, " + r + "%)";
    var t, s, i, r, n;
  }, e.prototype.toHsv = function() {
    return t = io(this.rgba), { h: pt(t.h), s: pt(t.s), v: pt(t.v), a: pt(t.a, 3) };
    var t;
  }, e.prototype.invert = function() {
    return Vt({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, e.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), Vt(Ai(this.rgba, t));
  }, e.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), Vt(Ai(this.rgba, -t));
  }, e.prototype.grayscale = function() {
    return Vt(Ai(this.rgba, -1));
  }, e.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), Vt(ln(this.rgba, t));
  }, e.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), Vt(ln(this.rgba, -t));
  }, e.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, e.prototype.alpha = function(t) {
    return typeof t == "number" ? Vt({ r: (s = this.rgba).r, g: s.g, b: s.b, a: t }) : pt(this.rgba.a, 3);
    var s;
  }, e.prototype.hue = function(t) {
    var s = hs(this.rgba);
    return typeof t == "number" ? Vt({ h: t, s: s.s, l: s.l, a: s.a }) : pt(s.h);
  }, e.prototype.isEqual = function(t) {
    return this.toHex() === Vt(t).toHex();
  }, e;
}(), Vt = function(e) {
  return e instanceof nr ? e : new nr(e);
}, cn = [], uh = function(e) {
  e.forEach(function(t) {
    cn.indexOf(t) < 0 && (t(nr, rr), cn.push(t));
  });
};
function dh(e, t) {
  var s = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, i = {};
  for (var r in s)
    i[s[r]] = r;
  var n = {};
  e.prototype.toName = function(o) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var a, h, l = i[this.toHex()];
    if (l)
      return l;
    if (o != null && o.closest) {
      var c = this.toRgb(), u = 1 / 0, d = "black";
      if (!n.length)
        for (var f in s)
          n[f] = new e(s[f]).toRgb();
      for (var p in s) {
        var _ = (a = c, h = n[p], Math.pow(a.r - h.r, 2) + Math.pow(a.g - h.g, 2) + Math.pow(a.b - h.b, 2));
        _ < u && (u = _, d = p);
      }
      return d;
    }
  }, t.string.push([function(o) {
    var a = o.toLowerCase(), h = a === "transparent" ? "#0000" : s[a];
    return h ? new e(h).toRgb() : null;
  }, "name"]);
}
uh([dh]);
const Xe = class {
  constructor(e = 16777215) {
    this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = e;
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(e) {
    return this.value = e, this;
  }
  set value(e) {
    if (e instanceof Xe)
      this._value = this.cloneSource(e._value), this._int = e._int, this._components.set(e._components);
    else {
      if (e === null)
        throw new Error("Cannot set PIXI.Color#value to null");
      (this._value === null || !this.isSourceEqual(this._value, e)) && (this.normalize(e), this._value = this.cloneSource(e));
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(e) {
    return typeof e == "string" || typeof e == "number" || e instanceof Number || e === null ? e : Array.isArray(e) || ArrayBuffer.isView(e) ? e.slice(0) : typeof e == "object" && e !== null ? { ...e } : e;
  }
  isSourceEqual(e, t) {
    const s = typeof e;
    if (s !== typeof t)
      return !1;
    if (s === "number" || s === "string" || e instanceof Number)
      return e === t;
    if (Array.isArray(e) && Array.isArray(t) || ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
      return e.length !== t.length ? !1 : e.every((r, n) => r === t[n]);
    if (e !== null && t !== null) {
      const r = Object.keys(e), n = Object.keys(t);
      return r.length !== n.length ? !1 : r.every((o) => e[o] === t[o]);
    }
    return e === t;
  }
  toRgba() {
    const [e, t, s, i] = this._components;
    return { r: e, g: t, b: s, a: i };
  }
  toRgb() {
    const [e, t, s] = this._components;
    return { r: e, g: t, b: s };
  }
  toRgbaString() {
    const [e, t, s] = this.toUint8RgbArray();
    return `rgba(${e},${t},${s},${this.alpha})`;
  }
  toUint8RgbArray(e) {
    const [t, s, i] = this._components;
    return e = e ?? [], e[0] = Math.round(t * 255), e[1] = Math.round(s * 255), e[2] = Math.round(i * 255), e;
  }
  toRgbArray(e) {
    e = e ?? [];
    const [t, s, i] = this._components;
    return e[0] = t, e[1] = s, e[2] = i, e;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const e = this._int;
    return (e >> 16) + (e & 65280) + ((e & 255) << 16);
  }
  multiply(e) {
    const [t, s, i, r] = Xe.temp.setValue(e)._components;
    return this._components[0] *= t, this._components[1] *= s, this._components[2] *= i, this._components[3] *= r, this.refreshInt(), this._value = null, this;
  }
  premultiply(e, t = !0) {
    return t && (this._components[0] *= e, this._components[1] *= e, this._components[2] *= e), this._components[3] = e, this.refreshInt(), this._value = null, this;
  }
  toPremultiplied(e) {
    if (e === 1)
      return (e * 255 << 24) + this._int;
    if (e === 0)
      return 0;
    let t = this._int >> 16 & 255, s = this._int >> 8 & 255, i = this._int & 255;
    return t = t * e + 0.5 | 0, s = s * e + 0.5 | 0, i = i * e + 0.5 | 0, (e * 255 << 24) + (t << 16) + (s << 8) + i;
  }
  toHex() {
    const e = this._int.toString(16);
    return `#${"000000".substring(0, 6 - e.length) + e}`;
  }
  toHexa() {
    const t = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t;
  }
  setAlpha(e) {
    return this._components[3] = this._clamp(e), this;
  }
  round(e) {
    const [t, s, i] = this._components;
    return this._components[0] = Math.round(t * e) / e, this._components[1] = Math.round(s * e) / e, this._components[2] = Math.round(i * e) / e, this.refreshInt(), this._value = null, this;
  }
  toArray(e) {
    e = e ?? [];
    const [t, s, i, r] = this._components;
    return e[0] = t, e[1] = s, e[2] = i, e[3] = r, e;
  }
  normalize(e) {
    let t;
    if ((typeof e == "number" || e instanceof Number) && e >= 0 && e <= 16777215) {
      const s = e;
      t = [
        (s >> 16 & 255) / 255,
        (s >> 8 & 255) / 255,
        (s & 255) / 255,
        1
      ];
    } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) {
      e = this._clamp(e);
      const [s, i, r, n = 1] = e;
      t = [s, i, r, n];
    } else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) {
      e = this._clamp(e, 0, 255);
      const [s, i, r, n = 255] = e;
      t = [s / 255, i / 255, r / 255, n / 255];
    } else if (typeof e == "string" || typeof e == "object") {
      if (typeof e == "string") {
        const i = Xe.HEX_PATTERN.exec(e);
        i && (e = `#${i[2]}`);
      }
      const s = Vt(e);
      if (s.isValid()) {
        const { r: i, g: r, b: n, a: o } = s.rgba;
        t = [i / 255, r / 255, n / 255, o];
      }
    }
    if (t)
      this._components.set(t), this.refreshInt();
    else
      throw new Error(`Unable to convert color ${e}`);
  }
  refreshInt() {
    this._clamp(this._components);
    const [e, t, s] = this._components;
    this._int = (e * 255 << 16) + (t * 255 << 8) + (s * 255 | 0);
  }
  _clamp(e, t = 0, s = 1) {
    return typeof e == "number" ? Math.min(Math.max(e, t), s) : (e.forEach((i, r) => {
      e[r] = Math.min(Math.max(i, t), s);
    }), e);
  }
};
let Z = Xe;
Z.shared = new Xe();
Z.temp = new Xe();
Z.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
function fh(e) {
  return $("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"), Z.shared.setValue(e).toHex();
}
function ph(e) {
  return $("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"), Z.shared.setValue(e).toNumber();
}
function mh() {
  const e = [], t = [];
  for (let i = 0; i < 32; i++)
    e[i] = i, t[i] = i;
  e[G.NORMAL_NPM] = G.NORMAL, e[G.ADD_NPM] = G.ADD, e[G.SCREEN_NPM] = G.SCREEN, t[G.NORMAL] = G.NORMAL_NPM, t[G.ADD] = G.ADD_NPM, t[G.SCREEN] = G.SCREEN_NPM;
  const s = [];
  return s.push(t), s.push(e), s;
}
const no = mh();
function oo(e, t) {
  return no[t ? 1 : 0][e];
}
function gh(e, t = null) {
  const s = e * 6;
  if (t = t || new Uint16Array(s), t.length !== s)
    throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${s}`);
  for (let i = 0, r = 0; i < s; i += 6, r += 4)
    t[i + 0] = r + 0, t[i + 1] = r + 1, t[i + 2] = r + 2, t[i + 3] = r + 0, t[i + 4] = r + 2, t[i + 5] = r + 3;
  return t;
}
function ao(e) {
  if (e.BYTES_PER_ELEMENT === 4)
    return e instanceof Float32Array ? "Float32Array" : e instanceof Uint32Array ? "Uint32Array" : "Int32Array";
  if (e.BYTES_PER_ELEMENT === 2) {
    if (e instanceof Uint16Array)
      return "Uint16Array";
  } else if (e.BYTES_PER_ELEMENT === 1 && e instanceof Uint8Array)
    return "Uint8Array";
  return null;
}
function Zs(e) {
  return e += e === 0 ? 1 : 0, --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e + 1;
}
function un(e) {
  return !(e & e - 1) && !!e;
}
function dn(e) {
  let t = (e > 65535 ? 1 : 0) << 4;
  e >>>= t;
  let s = (e > 255 ? 1 : 0) << 3;
  return e >>>= s, t |= s, s = (e > 15 ? 1 : 0) << 2, e >>>= s, t |= s, s = (e > 3 ? 1 : 0) << 1, e >>>= s, t |= s, t | e >> 1;
}
function Ve(e, t, s) {
  const i = e.length;
  let r;
  if (t >= i || s === 0)
    return;
  s = t + s > i ? i - t : s;
  const n = i - s;
  for (r = t; r < n; ++r)
    e[r] = e[r + s];
  e.length = n;
}
function he(e) {
  return e === 0 ? 0 : e < 0 ? -1 : 1;
}
let _h = 0;
function Ce() {
  return ++_h;
}
const ho = class {
  constructor(e, t, s, i) {
    this.left = e, this.top = t, this.right = s, this.bottom = i;
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
let or = ho;
or.EMPTY = new ho(0, 0, 0, 0);
const fn = {}, zt = /* @__PURE__ */ Object.create(null), oe = /* @__PURE__ */ Object.create(null);
class pn {
  constructor(t, s, i) {
    this._canvas = I.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = i || I.RESOLUTION, this.resize(t, s);
  }
  clear() {
    this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(t, s) {
    this._checkDestroyed(), this._canvas.width = Math.round(t * this.resolution), this._canvas.height = Math.round(s * this.resolution);
  }
  destroy() {
    this._context = null, this._canvas = null;
  }
  get width() {
    return this._checkDestroyed(), this._canvas.width;
  }
  set width(t) {
    this._checkDestroyed(), this._canvas.width = Math.round(t);
  }
  get height() {
    return this._checkDestroyed(), this._canvas.height;
  }
  set height(t) {
    this._checkDestroyed(), this._canvas.height = Math.round(t);
  }
  get canvas() {
    return this._checkDestroyed(), this._canvas;
  }
  get context() {
    return this._checkDestroyed(), this._context;
  }
  _checkDestroyed() {
    if (this._canvas === null)
      throw new TypeError("The CanvasRenderTarget has already been destroyed");
  }
}
function mn(e, t, s) {
  for (let i = 0, r = 4 * s * t; i < t; ++i, r += 4)
    if (e[r + 3] !== 0)
      return !1;
  return !0;
}
function gn(e, t, s, i, r) {
  const n = 4 * t;
  for (let o = i, a = i * n + 4 * s; o <= r; ++o, a += n)
    if (e[a + 3] !== 0)
      return !1;
  return !0;
}
function xh(e) {
  const { width: t, height: s } = e, i = e.getContext("2d", {
    willReadFrequently: !0
  });
  if (i === null)
    throw new TypeError("Failed to get canvas 2D context");
  const n = i.getImageData(0, 0, t, s).data;
  let o = 0, a = 0, h = t - 1, l = s - 1;
  for (; a < s && mn(n, t, a); )
    ++a;
  if (a === s)
    return or.EMPTY;
  for (; mn(n, t, l); )
    --l;
  for (; gn(n, t, o, a, l); )
    ++o;
  for (; gn(n, t, h, a, l); )
    --h;
  return ++h, ++l, new or(o, a, h, l);
}
function yh(e) {
  const t = xh(e), { width: s, height: i } = t;
  let r = null;
  if (!t.isEmpty()) {
    const n = e.getContext("2d");
    if (n === null)
      throw new TypeError("Failed to get canvas 2D context");
    r = n.getImageData(t.left, t.top, s, i);
  }
  return { width: s, height: i, data: r };
}
let As;
function vh(e, t = globalThis.location) {
  if (e.startsWith("data:"))
    return "";
  t = t || globalThis.location, As || (As = document.createElement("a")), As.href = e;
  const s = Qa.parse(As.href), i = !s.port && t.port === "" || s.port === t.port;
  return s.hostname !== t.hostname || !i || s.protocol !== t.protocol ? "anonymous" : "";
}
function ue(e, t = 1) {
  var i;
  const s = (i = I.RETINA_PREFIX) == null ? void 0 : i.exec(e);
  return s ? parseFloat(s[1]) : t;
}
var M = /* @__PURE__ */ ((e) => (e.Renderer = "renderer", e.Application = "application", e.RendererSystem = "renderer-webgl-system", e.RendererPlugin = "renderer-webgl-plugin", e.CanvasRendererSystem = "renderer-canvas-system", e.CanvasRendererPlugin = "renderer-canvas-plugin", e.Asset = "asset", e.LoadParser = "load-parser", e.ResolveParser = "resolve-parser", e.CacheParser = "cache-parser", e.DetectionParser = "detection-parser", e))(M || {});
const ar = (e) => {
  if (typeof e == "function" || typeof e == "object" && e.extension) {
    if (!e.extension)
      throw new Error("Extension class must have an extension object");
    e = { ...typeof e.extension != "object" ? { type: e.extension } : e.extension, ref: e };
  }
  if (typeof e == "object")
    e = { ...e };
  else
    throw new Error("Invalid extension type");
  return typeof e.type == "string" && (e.type = [e.type]), e;
}, _n = (e, t) => ar(e).priority ?? t, k = {
  _addHandlers: {},
  _removeHandlers: {},
  _queue: {},
  remove(...e) {
    return e.map(ar).forEach((t) => {
      t.type.forEach((s) => {
        var i, r;
        return (r = (i = this._removeHandlers)[s]) == null ? void 0 : r.call(i, t);
      });
    }), this;
  },
  add(...e) {
    return e.map(ar).forEach((t) => {
      t.type.forEach((s) => {
        const i = this._addHandlers, r = this._queue;
        i[s] ? i[s](t) : (r[s] = r[s] || [], r[s].push(t));
      });
    }), this;
  },
  handle(e, t, s) {
    const i = this._addHandlers, r = this._removeHandlers;
    if (i[e] || r[e])
      throw new Error(`Extension type ${e} already has a handler`);
    i[e] = t, r[e] = s;
    const n = this._queue;
    return n[e] && (n[e].forEach((o) => t(o)), delete n[e]), this;
  },
  handleByMap(e, t) {
    return this.handle(e, (s) => {
      t[s.name] = s.ref;
    }, (s) => {
      delete t[s.name];
    });
  },
  handleByList(e, t, s = -1) {
    return this.handle(e, (i) => {
      t.includes(i.ref) || (t.push(i.ref), t.sort((r, n) => _n(n, s) - _n(r, s)));
    }, (i) => {
      const r = t.indexOf(i.ref);
      r !== -1 && t.splice(r, 1);
    });
  }
};
class hr {
  constructor(t) {
    typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
  }
  get int8View() {
    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
  }
  get uint8View() {
    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
  }
  get int16View() {
    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
  }
  get uint16View() {
    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
  }
  get int32View() {
    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
  }
  view(t) {
    return this[`${t}View`];
  }
  destroy() {
    this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
const bh = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}"
].join(`
`);
function Th(e) {
  let t = "";
  for (let s = 0; s < e; ++s)
    s > 0 && (t += `
else `), s < e - 1 && (t += `if(test == ${s}.0){}`);
  return t;
}
function Eh(e, t) {
  if (e === 0)
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const s = t.createShader(t.FRAGMENT_SHADER);
  for (; ; ) {
    const i = bh.replace(/%forloop%/gi, Th(e));
    if (t.shaderSource(s, i), t.compileShader(s), !t.getShaderParameter(s, t.COMPILE_STATUS))
      e = e / 2 | 0;
    else
      break;
  }
  return e;
}
const Ii = 0, Ri = 1, Mi = 2, Pi = 3, Bi = 4, Di = 5;
class ne {
  constructor() {
    this.data = 0, this.blendMode = G.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
  }
  get blend() {
    return !!(this.data & 1 << Ii);
  }
  set blend(t) {
    !!(this.data & 1 << Ii) !== t && (this.data ^= 1 << Ii);
  }
  get offsets() {
    return !!(this.data & 1 << Ri);
  }
  set offsets(t) {
    !!(this.data & 1 << Ri) !== t && (this.data ^= 1 << Ri);
  }
  get culling() {
    return !!(this.data & 1 << Mi);
  }
  set culling(t) {
    !!(this.data & 1 << Mi) !== t && (this.data ^= 1 << Mi);
  }
  get depthTest() {
    return !!(this.data & 1 << Pi);
  }
  set depthTest(t) {
    !!(this.data & 1 << Pi) !== t && (this.data ^= 1 << Pi);
  }
  get depthMask() {
    return !!(this.data & 1 << Di);
  }
  set depthMask(t) {
    !!(this.data & 1 << Di) !== t && (this.data ^= 1 << Di);
  }
  get clockwiseFrontFace() {
    return !!(this.data & 1 << Bi);
  }
  set clockwiseFrontFace(t) {
    !!(this.data & 1 << Bi) !== t && (this.data ^= 1 << Bi);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this.blend = t !== G.NONE, this._blendMode = t;
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(t) {
    this.offsets = !!t, this._polygonOffset = t;
  }
  toString() {
    return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
  }
  static for2d() {
    const t = new ne();
    return t.depthTest = !1, t.blend = !0, t;
  }
}
const lr = [];
function lo(e, t) {
  if (!e)
    return null;
  let s = "";
  if (typeof e == "string") {
    const i = /\.(\w{3,4})(?:$|\?|#)/i.exec(e);
    i && (s = i[1].toLowerCase());
  }
  for (let i = lr.length - 1; i >= 0; --i) {
    const r = lr[i];
    if (r.test && r.test(e, s))
      return new r(e, t);
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class Ot {
  constructor(t) {
    this.items = [], this._name = t, this._aliasCount = 0;
  }
  emit(t, s, i, r, n, o, a, h) {
    if (arguments.length > 8)
      throw new Error("max arguments reached");
    const { name: l, items: c } = this;
    this._aliasCount++;
    for (let u = 0, d = c.length; u < d; u++)
      c[u][l](t, s, i, r, n, o, a, h);
    return c === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
  }
  add(t) {
    return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this;
  }
  remove(t) {
    const s = this.items.indexOf(t);
    return s !== -1 && (this.ensureNonAliasedItems(), this.items.splice(s, 1)), this;
  }
  contains(t) {
    return this.items.includes(t);
  }
  removeAll() {
    return this.ensureNonAliasedItems(), this.items.length = 0, this;
  }
  destroy() {
    this.removeAll(), this.items = null, this._name = null;
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties(Ot.prototype, {
  dispatch: { value: Ot.prototype.emit },
  run: { value: Ot.prototype.emit }
});
class ps {
  constructor(t = 0, s = 0) {
    this._width = t, this._height = s, this.destroyed = !1, this.internal = !1, this.onResize = new Ot("setRealSize"), this.onUpdate = new Ot("update"), this.onError = new Ot("onError");
  }
  bind(t) {
    this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height);
  }
  unbind(t) {
    this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
  }
  resize(t, s) {
    (t !== this._width || s !== this._height) && (this._width = t, this._height = s, this.onResize.emit(t, s));
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    this.destroyed || this.onUpdate.emit();
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(t, s, i) {
    return !1;
  }
  dispose() {
  }
  destroy() {
    this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
  }
  static test(t, s) {
    return !1;
  }
}
class _s extends ps {
  constructor(t, s) {
    const { width: i, height: r } = s || {};
    if (!i || !r)
      throw new Error("BufferResource width or height invalid");
    super(i, r), this.data = t;
  }
  upload(t, s, i) {
    const r = t.gl;
    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.alphaMode === Gt.UNPACK);
    const n = s.realWidth, o = s.realHeight;
    return i.width === n && i.height === o ? r.texSubImage2D(s.target, 0, 0, 0, n, o, s.format, i.type, this.data) : (i.width = n, i.height = o, r.texImage2D(s.target, 0, i.internalFormat, n, o, 0, s.format, i.type, this.data)), !0;
  }
  dispose() {
    this.data = null;
  }
  static test(t) {
    return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array;
  }
}
const wh = {
  scaleMode: ee.NEAREST,
  format: C.RGBA,
  alphaMode: Gt.NPM
}, De = class extends Se {
  constructor(e = null, t = null) {
    super(), t = Object.assign({}, De.defaultOptions, t);
    const {
      alphaMode: s,
      mipmap: i,
      anisotropicLevel: r,
      scaleMode: n,
      width: o,
      height: a,
      wrapMode: h,
      format: l,
      type: c,
      target: u,
      resolution: d,
      resourceOptions: f
    } = t;
    e && !(e instanceof ps) && (e = lo(e, f), e.internal = !0), this.resolution = d || I.RESOLUTION, this.width = Math.round((o || 0) * this.resolution) / this.resolution, this.height = Math.round((a || 0) * this.resolution) / this.resolution, this._mipmap = i, this.anisotropicLevel = r, this._wrapMode = h, this._scaleMode = n, this.format = l, this.type = c, this.target = u, this.alphaMode = s, this.uid = Ce(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = o > 0 && a > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(e);
  }
  get realWidth() {
    return Math.round(this.width * this.resolution);
  }
  get realHeight() {
    return Math.round(this.height * this.resolution);
  }
  get mipmap() {
    return this._mipmap;
  }
  set mipmap(e) {
    this._mipmap !== e && (this._mipmap = e, this.dirtyStyleId++);
  }
  get scaleMode() {
    return this._scaleMode;
  }
  set scaleMode(e) {
    this._scaleMode !== e && (this._scaleMode = e, this.dirtyStyleId++);
  }
  get wrapMode() {
    return this._wrapMode;
  }
  set wrapMode(e) {
    this._wrapMode !== e && (this._wrapMode = e, this.dirtyStyleId++);
  }
  setStyle(e, t) {
    let s;
    return e !== void 0 && e !== this.scaleMode && (this.scaleMode = e, s = !0), t !== void 0 && t !== this.mipmap && (this.mipmap = t, s = !0), s && this.dirtyStyleId++, this;
  }
  setSize(e, t, s) {
    return s = s || this.resolution, this.setRealSize(e * s, t * s, s);
  }
  setRealSize(e, t, s) {
    return this.resolution = s || this.resolution, this.width = Math.round(e) / this.resolution, this.height = Math.round(t) / this.resolution, this._refreshPOT(), this.update(), this;
  }
  _refreshPOT() {
    this.isPowerOfTwo = un(this.realWidth) && un(this.realHeight);
  }
  setResolution(e) {
    const t = this.resolution;
    return t === e ? this : (this.resolution = e, this.valid && (this.width = Math.round(this.width * t) / e, this.height = Math.round(this.height * t) / e, this.emit("update", this)), this._refreshPOT(), this);
  }
  setResource(e) {
    if (this.resource === e)
      return this;
    if (this.resource)
      throw new Error("Resource can be set only once");
    return e.bind(this), this.resource = e, this;
  }
  update() {
    this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this));
  }
  onError(e) {
    this.emit("error", this, e);
  }
  destroy() {
    this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete oe[this.cacheId], delete zt[this.cacheId], this.cacheId = null), this.dispose(), De.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0;
  }
  dispose() {
    this.emit("dispose", this);
  }
  castToBaseTexture() {
    return this;
  }
  static from(e, t, s = I.STRICT_TEXTURE_CACHE) {
    const i = typeof e == "string";
    let r = null;
    if (i)
      r = e;
    else {
      if (!e._pixiId) {
        const o = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
        e._pixiId = `${o}_${Ce()}`;
      }
      r = e._pixiId;
    }
    let n = oe[r];
    if (i && s && !n)
      throw new Error(`The cacheId "${r}" does not exist in BaseTextureCache.`);
    return n || (n = new De(e, t), n.cacheId = r, De.addToCache(n, r)), n;
  }
  static fromBuffer(e, t, s, i) {
    e = e || new Float32Array(t * s * 4);
    const r = new _s(e, { width: t, height: s }), n = e instanceof Float32Array ? O.FLOAT : O.UNSIGNED_BYTE;
    return new De(r, Object.assign({}, wh, i || { width: t, height: s, type: n }));
  }
  static addToCache(e, t) {
    t && (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t), oe[t] && oe[t] !== e && console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`), oe[t] = e);
  }
  static removeFromCache(e) {
    if (typeof e == "string") {
      const t = oe[e];
      if (t) {
        const s = t.textureCacheIds.indexOf(e);
        return s > -1 && t.textureCacheIds.splice(s, 1), delete oe[e], t;
      }
    } else if (e != null && e.textureCacheIds) {
      for (let t = 0; t < e.textureCacheIds.length; ++t)
        delete oe[e.textureCacheIds[t]];
      return e.textureCacheIds.length = 0, e;
    }
    return null;
  }
};
let X = De;
X.defaultOptions = {
  mipmap: Kt.POW2,
  anisotropicLevel: 0,
  scaleMode: ee.LINEAR,
  wrapMode: ce.CLAMP,
  alphaMode: Gt.UNPACK,
  target: Ge.TEXTURE_2D,
  format: C.RGBA,
  type: O.UNSIGNED_BYTE
};
X._globalBatch = 0;
class cr {
  constructor() {
    this.texArray = null, this.blend = 0, this.type = jt.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
  }
}
let Sh = 0;
class ot {
  constructor(t, s = !0, i = !1) {
    this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = s, this.id = Sh++, this.disposeRunner = new Ot("disposeBuffer");
  }
  update(t) {
    t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(), this.data = null;
  }
  set index(t) {
    this.type = t ? Yt.ELEMENT_ARRAY_BUFFER : Yt.ARRAY_BUFFER;
  }
  get index() {
    return this.type === Yt.ELEMENT_ARRAY_BUFFER;
  }
  static from(t) {
    return t instanceof Array && (t = new Float32Array(t)), new ot(t);
  }
}
class Js {
  constructor(t, s = 0, i = !1, r = O.FLOAT, n, o, a, h = 1) {
    this.buffer = t, this.size = s, this.normalized = i, this.type = r, this.stride = n, this.start = o, this.instance = a, this.divisor = h;
  }
  destroy() {
    this.buffer = null;
  }
  static from(t, s, i, r, n) {
    return new Js(t, s, i, r, n);
  }
}
const Ah = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array
};
function Ch(e, t) {
  let s = 0, i = 0;
  const r = {};
  for (let h = 0; h < e.length; h++)
    i += t[h], s += e[h].length;
  const n = new ArrayBuffer(s * 4);
  let o = null, a = 0;
  for (let h = 0; h < e.length; h++) {
    const l = t[h], c = e[h], u = ao(c);
    r[u] || (r[u] = new Ah[u](n)), o = r[u];
    for (let d = 0; d < c.length; d++) {
      const f = (d / l | 0) * i + a, p = d % l;
      o[f + p] = c[d];
    }
    a += l;
  }
  return new Float32Array(n);
}
const xn = { 5126: 4, 5123: 2, 5121: 1 };
let Ih = 0;
const Rh = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array,
  Uint16Array
};
class de {
  constructor(t = [], s = {}) {
    this.buffers = t, this.indexBuffer = null, this.attributes = s, this.glVertexArrayObjects = {}, this.id = Ih++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new Ot("disposeGeometry"), this.refCount = 0;
  }
  addAttribute(t, s, i = 0, r = !1, n, o, a, h = !1) {
    if (!s)
      throw new Error("You must pass a buffer when creating an attribute");
    s instanceof ot || (s instanceof Array && (s = new Float32Array(s)), s = new ot(s));
    const l = t.split("|");
    if (l.length > 1) {
      for (let u = 0; u < l.length; u++)
        this.addAttribute(l[u], s, i, r, n);
      return this;
    }
    let c = this.buffers.indexOf(s);
    return c === -1 && (this.buffers.push(s), c = this.buffers.length - 1), this.attributes[t] = new Js(c, i, r, n, o, a, h), this.instanced = this.instanced || h, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  getBuffer(t) {
    return this.buffers[this.getAttribute(t).buffer];
  }
  addIndex(t) {
    return t instanceof ot || (t instanceof Array && (t = new Uint16Array(t)), t = new ot(t)), t.type = Yt.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, this.buffers.includes(t) || this.buffers.push(t), this;
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
      return this;
    const t = [], s = [], i = new ot();
    let r;
    for (r in this.attributes) {
      const n = this.attributes[r], o = this.buffers[n.buffer];
      t.push(o.data), s.push(n.size * xn[n.type] / 4), n.buffer = 0;
    }
    for (i.data = Ch(t, s), r = 0; r < this.buffers.length; r++)
      this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy();
    return this.buffers = [i], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
  }
  getSize() {
    for (const t in this.attributes) {
      const s = this.attributes[t];
      return this.buffers[s.buffer].data.length / (s.stride / 4 || s.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
  }
  clone() {
    const t = new de();
    for (let s = 0; s < this.buffers.length; s++)
      t.buffers[s] = new ot(this.buffers[s].data.slice(0));
    for (const s in this.attributes) {
      const i = this.attributes[s];
      t.attributes[s] = new Js(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance);
    }
    return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.type = Yt.ELEMENT_ARRAY_BUFFER), t;
  }
  static merge(t) {
    const s = new de(), i = [], r = [], n = [];
    let o;
    for (let a = 0; a < t.length; a++) {
      o = t[a];
      for (let h = 0; h < o.buffers.length; h++)
        r[h] = r[h] || 0, r[h] += o.buffers[h].data.length, n[h] = 0;
    }
    for (let a = 0; a < o.buffers.length; a++)
      i[a] = new Rh[ao(o.buffers[a].data)](r[a]), s.buffers[a] = new ot(i[a]);
    for (let a = 0; a < t.length; a++) {
      o = t[a];
      for (let h = 0; h < o.buffers.length; h++)
        i[h].set(o.buffers[h].data, n[h]), n[h] += o.buffers[h].data.length;
    }
    if (s.attributes = o.attributes, o.indexBuffer) {
      s.indexBuffer = s.buffers[o.buffers.indexOf(o.indexBuffer)], s.indexBuffer.type = Yt.ELEMENT_ARRAY_BUFFER;
      let a = 0, h = 0, l = 0, c = 0;
      for (let u = 0; u < o.buffers.length; u++)
        if (o.buffers[u] !== o.indexBuffer) {
          c = u;
          break;
        }
      for (const u in o.attributes) {
        const d = o.attributes[u];
        (d.buffer | 0) === c && (h += d.size * xn[d.type] / 4);
      }
      for (let u = 0; u < t.length; u++) {
        const d = t[u].indexBuffer.data;
        for (let f = 0; f < d.length; f++)
          s.indexBuffer.data[f + l] += a;
        a += t[u].buffers[c].data.length / h, l += d.length;
      }
    }
    return s;
  }
}
class co extends de {
  constructor(t = !1) {
    super(), this._buffer = new ot(null, t, !1), this._indexBuffer = new ot(null, t, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, O.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, O.FLOAT).addAttribute("aColor", this._buffer, 4, !0, O.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, O.FLOAT).addIndex(this._indexBuffer);
  }
}
const Qs = Math.PI * 2, Mh = 180 / Math.PI, Ph = Math.PI / 180;
var _t = /* @__PURE__ */ ((e) => (e[e.POLY = 0] = "POLY", e[e.RECT = 1] = "RECT", e[e.CIRC = 2] = "CIRC", e[e.ELIP = 3] = "ELIP", e[e.RREC = 4] = "RREC", e))(_t || {});
class Y {
  constructor(t = 0, s = 0) {
    this.x = 0, this.y = 0, this.x = t, this.y = s;
  }
  clone() {
    return new Y(this.x, this.y);
  }
  copyFrom(t) {
    return this.set(t.x, t.y), this;
  }
  copyTo(t) {
    return t.set(this.x, this.y), t;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  set(t = 0, s = t) {
    return this.x = t, this.y = s, this;
  }
  toString() {
    return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
  }
}
const Cs = [new Y(), new Y(), new Y(), new Y()];
class z {
  constructor(t = 0, s = 0, i = 0, r = 0) {
    this.x = Number(t), this.y = Number(s), this.width = Number(i), this.height = Number(r), this.type = _t.RECT;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new z(0, 0, 0, 0);
  }
  clone() {
    return new z(this.x, this.y, this.width, this.height);
  }
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
  }
  copyTo(t) {
    return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
  }
  contains(t, s) {
    return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && s >= this.y && s < this.y + this.height;
  }
  intersects(t, s) {
    if (!s) {
      const E = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= E)
        return !1;
      const U = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > U;
    }
    const i = this.left, r = this.right, n = this.top, o = this.bottom;
    if (r <= i || o <= n)
      return !1;
    const a = Cs[0].set(t.left, t.top), h = Cs[1].set(t.left, t.bottom), l = Cs[2].set(t.right, t.top), c = Cs[3].set(t.right, t.bottom);
    if (l.x <= a.x || h.y <= a.y)
      return !1;
    const u = Math.sign(s.a * s.d - s.b * s.c);
    if (u === 0 || (s.apply(a, a), s.apply(h, h), s.apply(l, l), s.apply(c, c), Math.max(a.x, h.x, l.x, c.x) <= i || Math.min(a.x, h.x, l.x, c.x) >= r || Math.max(a.y, h.y, l.y, c.y) <= n || Math.min(a.y, h.y, l.y, c.y) >= o))
      return !1;
    const d = u * (h.y - a.y), f = u * (a.x - h.x), p = d * i + f * n, _ = d * r + f * n, m = d * i + f * o, x = d * r + f * o;
    if (Math.max(p, _, m, x) <= d * a.x + f * a.y || Math.min(p, _, m, x) >= d * c.x + f * c.y)
      return !1;
    const v = u * (a.y - l.y), g = u * (l.x - a.x), y = v * i + g * n, T = v * r + g * n, P = v * i + g * o, A = v * r + g * o;
    return !(Math.max(y, T, P, A) <= v * a.x + g * a.y || Math.min(y, T, P, A) >= v * c.x + g * c.y);
  }
  pad(t = 0, s = t) {
    return this.x -= t, this.y -= s, this.width += t * 2, this.height += s * 2, this;
  }
  fit(t) {
    const s = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
    return this.x = s, this.width = Math.max(i - s, 0), this.y = r, this.height = Math.max(n - r, 0), this;
  }
  ceil(t = 1, s = 1e-3) {
    const i = Math.ceil((this.x + this.width - s) * t) / t, r = Math.ceil((this.y + this.height - s) * t) / t;
    return this.x = Math.floor((this.x + s) * t) / t, this.y = Math.floor((this.y + s) * t) / t, this.width = i - this.x, this.height = r - this.y, this;
  }
  enlarge(t) {
    const s = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
    return this.x = s, this.width = i - s, this.y = r, this.height = n - r, this;
  }
  toString() {
    return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}
class Pr {
  constructor(t = 0, s = 0, i = 0) {
    this.x = t, this.y = s, this.radius = i, this.type = _t.CIRC;
  }
  clone() {
    return new Pr(this.x, this.y, this.radius);
  }
  contains(t, s) {
    if (this.radius <= 0)
      return !1;
    const i = this.radius * this.radius;
    let r = this.x - t, n = this.y - s;
    return r *= r, n *= n, r + n <= i;
  }
  getBounds() {
    return new z(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
  toString() {
    return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
  }
}
class Br {
  constructor(t = 0, s = 0, i = 0, r = 0) {
    this.x = t, this.y = s, this.width = i, this.height = r, this.type = _t.ELIP;
  }
  clone() {
    return new Br(this.x, this.y, this.width, this.height);
  }
  contains(t, s) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    let i = (t - this.x) / this.width, r = (s - this.y) / this.height;
    return i *= i, r *= r, i + r <= 1;
  }
  getBounds() {
    return new z(this.x - this.width, this.y - this.height, this.width, this.height);
  }
  toString() {
    return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
  }
}
class ze {
  constructor(...t) {
    let s = Array.isArray(t[0]) ? t[0] : t;
    if (typeof s[0] != "number") {
      const i = [];
      for (let r = 0, n = s.length; r < n; r++)
        i.push(s[r].x, s[r].y);
      s = i;
    }
    this.points = s, this.type = _t.POLY, this.closeStroke = !0;
  }
  clone() {
    const t = this.points.slice(), s = new ze(t);
    return s.closeStroke = this.closeStroke, s;
  }
  contains(t, s) {
    let i = !1;
    const r = this.points.length / 2;
    for (let n = 0, o = r - 1; n < r; o = n++) {
      const a = this.points[n * 2], h = this.points[n * 2 + 1], l = this.points[o * 2], c = this.points[o * 2 + 1];
      h > s != c > s && t < (l - a) * ((s - h) / (c - h)) + a && (i = !i);
    }
    return i;
  }
  toString() {
    return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((t, s) => `${t}, ${s}`, "")}]`;
  }
}
class Dr {
  constructor(t = 0, s = 0, i = 0, r = 0, n = 20) {
    this.x = t, this.y = s, this.width = i, this.height = r, this.radius = n, this.type = _t.RREC;
  }
  clone() {
    return new Dr(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(t, s) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    if (t >= this.x && t <= this.x + this.width && s >= this.y && s <= this.y + this.height) {
      const i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (s >= this.y + i && s <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i)
        return !0;
      let r = t - (this.x + i), n = s - (this.y + i);
      const o = i * i;
      if (r * r + n * n <= o || (r = t - (this.x + this.width - i), r * r + n * n <= o) || (n = s - (this.y + this.height - i), r * r + n * n <= o) || (r = t - (this.x + i), r * r + n * n <= o))
        return !0;
    }
    return !1;
  }
  toString() {
    return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
  }
}
class tt {
  constructor(t = 1, s = 0, i = 0, r = 1, n = 0, o = 0) {
    this.array = null, this.a = t, this.b = s, this.c = i, this.d = r, this.tx = n, this.ty = o;
  }
  fromArray(t) {
    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
  }
  set(t, s, i, r, n, o) {
    return this.a = t, this.b = s, this.c = i, this.d = r, this.tx = n, this.ty = o, this;
  }
  toArray(t, s) {
    this.array || (this.array = new Float32Array(9));
    const i = s || this.array;
    return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i;
  }
  apply(t, s) {
    s = s || new Y();
    const i = t.x, r = t.y;
    return s.x = this.a * i + this.c * r + this.tx, s.y = this.b * i + this.d * r + this.ty, s;
  }
  applyInverse(t, s) {
    s = s || new Y();
    const i = 1 / (this.a * this.d + this.c * -this.b), r = t.x, n = t.y;
    return s.x = this.d * i * r + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, s.y = this.a * i * n + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, s;
  }
  translate(t, s) {
    return this.tx += t, this.ty += s, this;
  }
  scale(t, s) {
    return this.a *= t, this.d *= s, this.c *= t, this.b *= s, this.tx *= t, this.ty *= s, this;
  }
  rotate(t) {
    const s = Math.cos(t), i = Math.sin(t), r = this.a, n = this.c, o = this.tx;
    return this.a = r * s - this.b * i, this.b = r * i + this.b * s, this.c = n * s - this.d * i, this.d = n * i + this.d * s, this.tx = o * s - this.ty * i, this.ty = o * i + this.ty * s, this;
  }
  append(t) {
    const s = this.a, i = this.b, r = this.c, n = this.d;
    return this.a = t.a * s + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * s + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * s + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this;
  }
  setTransform(t, s, i, r, n, o, a, h, l) {
    return this.a = Math.cos(a + l) * n, this.b = Math.sin(a + l) * n, this.c = -Math.sin(a - h) * o, this.d = Math.cos(a - h) * o, this.tx = t - (i * this.a + r * this.c), this.ty = s - (i * this.b + r * this.d), this;
  }
  prepend(t) {
    const s = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const i = this.a, r = this.c;
      this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d;
    }
    return this.tx = s * t.a + this.ty * t.c + t.tx, this.ty = s * t.b + this.ty * t.d + t.ty, this;
  }
  decompose(t) {
    const s = this.a, i = this.b, r = this.c, n = this.d, o = t.pivot, a = -Math.atan2(-r, n), h = Math.atan2(i, s), l = Math.abs(a + h);
    return l < 1e-5 || Math.abs(Qs - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = h), t.scale.x = Math.sqrt(s * s + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * s + o.y * r), t.position.y = this.ty + (o.x * i + o.y * n), t;
  }
  invert() {
    const t = this.a, s = this.b, i = this.c, r = this.d, n = this.tx, o = t * r - s * i;
    return this.a = r / o, this.b = -s / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - s * n) / o, this;
  }
  identity() {
    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
  }
  clone() {
    const t = new tt();
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  copyTo(t) {
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  copyFrom(t) {
    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
  }
  toString() {
    return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
  }
  static get IDENTITY() {
    return new tt();
  }
  static get TEMP_MATRIX() {
    return new tt();
  }
}
const ye = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], ve = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], be = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], Te = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], ur = [], uo = [], Is = Math.sign;
function Bh() {
  for (let e = 0; e < 16; e++) {
    const t = [];
    ur.push(t);
    for (let s = 0; s < 16; s++) {
      const i = Is(ye[e] * ye[s] + be[e] * ve[s]), r = Is(ve[e] * ye[s] + Te[e] * ve[s]), n = Is(ye[e] * be[s] + be[e] * Te[s]), o = Is(ve[e] * be[s] + Te[e] * Te[s]);
      for (let a = 0; a < 16; a++)
        if (ye[a] === i && ve[a] === r && be[a] === n && Te[a] === o) {
          t.push(a);
          break;
        }
    }
  }
  for (let e = 0; e < 16; e++) {
    const t = new tt();
    t.set(ye[e], ve[e], be[e], Te[e], 0, 0), uo.push(t);
  }
}
Bh();
const et = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: (e) => ye[e],
  uY: (e) => ve[e],
  vX: (e) => be[e],
  vY: (e) => Te[e],
  inv: (e) => e & 8 ? e & 15 : -e & 7,
  add: (e, t) => ur[e][t],
  sub: (e, t) => ur[e][et.inv(t)],
  rotate180: (e) => e ^ 4,
  isVertical: (e) => (e & 3) === 2,
  byDirection: (e, t) => Math.abs(e) * 2 <= Math.abs(t) ? t >= 0 ? et.S : et.N : Math.abs(t) * 2 <= Math.abs(e) ? e > 0 ? et.E : et.W : t > 0 ? e > 0 ? et.SE : et.SW : e > 0 ? et.NE : et.NW,
  matrixAppendRotationInv: (e, t, s = 0, i = 0) => {
    const r = uo[et.inv(t)];
    r.tx = s, r.ty = i, e.append(r);
  }
};
class le {
  constructor(t, s, i = 0, r = 0) {
    this._x = i, this._y = r, this.cb = t, this.scope = s;
  }
  clone(t = this.cb, s = this.scope) {
    return new le(t, s, this._x, this._y);
  }
  set(t = 0, s = t) {
    return (this._x !== t || this._y !== s) && (this._x = t, this._y = s, this.cb.call(this.scope)), this;
  }
  copyFrom(t) {
    return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this;
  }
  copyTo(t) {
    return t.set(this._x, this._y), t;
  }
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  toString() {
    return `[@pixi/math:ObservablePoint x=0 y=0 scope=${this.scope}]`;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x !== t && (this._x = t, this.cb.call(this.scope));
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y !== t && (this._y = t, this.cb.call(this.scope));
  }
}
const fo = class {
  constructor() {
    this.worldTransform = new tt(), this.localTransform = new tt(), this.position = new le(this.onChange, this, 0, 0), this.scale = new le(this.onChange, this, 1, 1), this.pivot = new le(this.onChange, this, 0, 0), this.skew = new le(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
  }
  toString() {
    return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
  }
  updateLocalTransform() {
    const e = this.localTransform;
    this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1);
  }
  updateTransform(e) {
    const t = this.localTransform;
    if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== e._worldID) {
      const s = e.worldTransform, i = this.worldTransform;
      i.a = t.a * s.a + t.b * s.c, i.b = t.a * s.b + t.b * s.d, i.c = t.c * s.a + t.d * s.c, i.d = t.c * s.b + t.d * s.d, i.tx = t.tx * s.a + t.ty * s.c + s.tx, i.ty = t.tx * s.b + t.ty * s.d + s.ty, this._parentID = e._worldID, this._worldID++;
    }
  }
  setFromMatrix(e) {
    e.decompose(this), this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    this._rotation !== e && (this._rotation = e, this.updateSkew());
  }
};
let Fr = fo;
Fr.IDENTITY = new fo();
var Dh = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`, Fh = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function yn(e, t, s) {
  const i = e.createShader(t);
  return e.shaderSource(i, s), e.compileShader(i), i;
}
function Fi(e) {
  const t = new Array(e);
  for (let s = 0; s < t.length; s++)
    t[s] = !1;
  return t;
}
function po(e, t) {
  switch (e) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * t);
    case "vec3":
      return new Float32Array(3 * t);
    case "vec4":
      return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * t);
    case "ivec3":
      return new Int32Array(3 * t);
    case "ivec4":
      return new Int32Array(4 * t);
    case "uvec2":
      return new Uint32Array(2 * t);
    case "uvec3":
      return new Uint32Array(3 * t);
    case "uvec4":
      return new Uint32Array(4 * t);
    case "bool":
      return !1;
    case "bvec2":
      return Fi(2 * t);
    case "bvec3":
      return Fi(3 * t);
    case "bvec4":
      return Fi(4 * t);
    case "mat2":
      return new Float32Array([
        1,
        0,
        0,
        1
      ]);
    case "mat3":
      return new Float32Array([
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ]);
    case "mat4":
      return new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
  }
  return null;
}
const $e = [
  {
    test: (e) => e.type === "float" && e.size === 1 && !e.isArray,
    code: (e) => `
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `
  },
  {
    test: (e, t) => (e.type === "sampler2D" || e.type === "samplerCube" || e.type === "sampler2DArray") && e.size === 1 && !e.isArray && (t == null || t.castToBaseTexture !== void 0),
    code: (e) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`
  },
  {
    test: (e, t) => e.type === "mat3" && e.size === 1 && !e.isArray && t.a !== void 0,
    code: (e) => `
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,
    codeUbo: (e) => `
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];
        
                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];
        
                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `
  },
  {
    test: (e, t) => e.type === "vec2" && e.size === 1 && !e.isArray && t.x !== void 0,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,
    codeUbo: (e) => `
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
  },
  {
    test: (e) => e.type === "vec2" && e.size === 1 && !e.isArray,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `
  },
  {
    test: (e, t) => e.type === "vec4" && e.size === 1 && !e.isArray && t.width !== void 0,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,
    codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
  },
  {
    test: (e, t) => e.type === "vec4" && e.size === 1 && !e.isArray && t.red !== void 0,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${e}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
    codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `
  },
  {
    test: (e, t) => e.type === "vec3" && e.size === 1 && !e.isArray && t.red !== void 0,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${e}"].location, v.red, v.green, v.blue)
                }`,
    codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `
  },
  {
    test: (e) => e.type === "vec4" && e.size === 1 && !e.isArray,
    code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`
  }
], Lh = {
  float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
  vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
  vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
  vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
  int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
  uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
  uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
  uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
  bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
  bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
}, Nh = {
  float: "gl.uniform1fv(location, v)",
  vec2: "gl.uniform2fv(location, v)",
  vec3: "gl.uniform3fv(location, v)",
  vec4: "gl.uniform4fv(location, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  int: "gl.uniform1iv(location, v)",
  ivec2: "gl.uniform2iv(location, v)",
  ivec3: "gl.uniform3iv(location, v)",
  ivec4: "gl.uniform4iv(location, v)",
  uint: "gl.uniform1uiv(location, v)",
  uvec2: "gl.uniform2uiv(location, v)",
  uvec3: "gl.uniform3uiv(location, v)",
  uvec4: "gl.uniform4uiv(location, v)",
  bool: "gl.uniform1iv(location, v)",
  bvec2: "gl.uniform2iv(location, v)",
  bvec3: "gl.uniform3iv(location, v)",
  bvec4: "gl.uniform4iv(location, v)",
  sampler2D: "gl.uniform1iv(location, v)",
  samplerCube: "gl.uniform1iv(location, v)",
  sampler2DArray: "gl.uniform1iv(location, v)"
};
function kh(e, t) {
  var i;
  const s = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
  for (const r in e.uniforms) {
    const n = t[r];
    if (!n) {
      (i = e.uniforms[r]) != null && i.group && (e.uniforms[r].ubo ? s.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                    `) : s.push(`
                        renderer.shader.syncUniformGroup(uv.${r}, syncData);
                    `));
      continue;
    }
    const o = e.uniforms[r];
    let a = !1;
    for (let h = 0; h < $e.length; h++)
      if ($e[h].test(n, o)) {
        s.push($e[h].code(r, o)), a = !0;
        break;
      }
    if (!a) {
      const l = (n.size === 1 && !n.isArray ? Lh : Nh)[n.type].replace("location", `ud["${r}"].location`);
      s.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${l};`);
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", s.join(`
`));
}
const mo = {};
let Pe = mo;
function Oh() {
  if (Pe === mo || Pe != null && Pe.isContextLost()) {
    const e = I.ADAPTER.createCanvas();
    let t;
    I.PREFER_ENV >= Ie.WEBGL2 && (t = e.getContext("webgl2", {})), t || (t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {}), t ? t.getExtension("WEBGL_draw_buffers") : t = null), Pe = t;
  }
  return Pe;
}
let Rs;
function Uh() {
  if (!Rs) {
    Rs = At.MEDIUM;
    const e = Oh();
    e && e.getShaderPrecisionFormat && (Rs = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision ? At.HIGH : At.MEDIUM);
  }
  return Rs;
}
function vn(e, t) {
  const s = e.getShaderSource(t).split(`
`).map((l, c) => `${c}: ${l}`), i = e.getShaderInfoLog(t), r = i.split(`
`), n = {}, o = r.map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((l) => l && !n[l] ? (n[l] = !0, !0) : !1), a = [""];
  o.forEach((l) => {
    s[l - 1] = `%c${s[l - 1]}%c`, a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  const h = s.join(`
`);
  a[0] = h, console.error(i), console.groupCollapsed("click to view full shader code"), console.warn(...a), console.groupEnd();
}
function Gh(e, t, s, i) {
  e.getProgramParameter(t, e.LINK_STATUS) || (e.getShaderParameter(s, e.COMPILE_STATUS) || vn(e, s), e.getShaderParameter(i, e.COMPILE_STATUS) || vn(e, i), console.error("PixiJS Error: Could not initialize shader."), e.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(t)));
}
const Hh = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
};
function go(e) {
  return Hh[e];
}
let Ms = null;
const bn = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function _o(e, t) {
  if (!Ms) {
    const s = Object.keys(bn);
    Ms = {};
    for (let i = 0; i < s.length; ++i) {
      const r = s[i];
      Ms[e[r]] = bn[r];
    }
  }
  return Ms[t];
}
function Tn(e, t, s) {
  if (e.substring(0, 9) !== "precision") {
    let i = t;
    return t === At.HIGH && s !== At.HIGH && (i = At.MEDIUM), `precision ${i} float;
${e}`;
  } else if (s !== At.HIGH && e.substring(0, 15) === "precision highp")
    return e.replace("precision highp", "precision mediump");
  return e;
}
let ts;
function Xh() {
  if (typeof ts == "boolean")
    return ts;
  try {
    ts = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
  } catch {
    ts = !1;
  }
  return ts;
}
let Vh = 0;
const Ps = {}, Fe = class {
  constructor(e, t, s = "pixi-shader", i = {}) {
    this.extra = {}, this.id = Vh++, this.vertexSrc = e || Fe.defaultVertexSrc, this.fragmentSrc = t || Fe.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = i, this.vertexSrc.substring(0, 8) !== "#version" && (s = s.replace(/\s+/g, "-"), Ps[s] ? (Ps[s]++, s += `-${Ps[s]}`) : Ps[s] = 1, this.vertexSrc = `#define SHADER_NAME ${s}
${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${s}
${this.fragmentSrc}`, this.vertexSrc = Tn(this.vertexSrc, Fe.defaultVertexPrecision, At.HIGH), this.fragmentSrc = Tn(this.fragmentSrc, Fe.defaultFragmentPrecision, Uh())), this.glPrograms = {}, this.syncUniforms = null;
  }
  static get defaultVertexSrc() {
    return Fh;
  }
  static get defaultFragmentSrc() {
    return Dh;
  }
  static from(e, t, s) {
    const i = e + t;
    let r = fn[i];
    return r || (fn[i] = r = new Fe(e, t, s)), r;
  }
};
let Nt = Fe;
Nt.defaultVertexPrecision = At.HIGH;
Nt.defaultFragmentPrecision = se.apple.device ? At.HIGH : At.MEDIUM;
let zh = 0;
class Ut {
  constructor(t, s, i) {
    this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = zh++, this.static = !!s, this.ubo = !!i, t instanceof ot ? (this.buffer = t, this.buffer.type = Yt.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new ot(new Float32Array(1)), this.buffer.type = Yt.UNIFORM_BUFFER, this.autoManage = !0));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(t, s, i) {
    if (!this.ubo)
      this.uniforms[t] = new Ut(s, i);
    else
      throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
  }
  static from(t, s, i) {
    return new Ut(t, s, i);
  }
  static uboFrom(t, s) {
    return new Ut(t, s ?? !0, !0);
  }
}
class qt {
  constructor(t, s) {
    this.uniformBindCount = 0, this.program = t, s ? s instanceof Ut ? this.uniformGroup = s : this.uniformGroup = new Ut(s) : this.uniformGroup = new Ut({}), this.disposeRunner = new Ot("disposeShader");
  }
  checkUniformExists(t, s) {
    if (s.uniforms[t])
      return !0;
    for (const i in s.uniforms) {
      const r = s.uniforms[i];
      if (r.group && this.checkUniformExists(t, r))
        return !0;
    }
    return !1;
  }
  destroy() {
    this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(t, s, i) {
    const r = Nt.from(t, s);
    return new qt(r, i);
  }
}
class $h {
  constructor(t, s) {
    if (this.vertexSrc = t, this.fragTemplate = s, this.programCache = {}, this.defaultGroupCache = {}, !s.includes("%count%"))
      throw new Error('Fragment template must contain "%count%".');
    if (!s.includes("%forloop%"))
      throw new Error('Fragment template must contain "%forloop%".');
  }
  generateShader(t) {
    if (!this.programCache[t]) {
      const i = new Int32Array(t);
      for (let n = 0; n < t; n++)
        i[n] = n;
      this.defaultGroupCache[t] = Ut.from({ uSamplers: i }, !0);
      let r = this.fragTemplate;
      r = r.replace(/%count%/gi, `${t}`), r = r.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Nt(this.vertexSrc, r);
    }
    const s = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new tt(),
      default: this.defaultGroupCache[t]
    };
    return new qt(this.programCache[t], s);
  }
  generateSampleSrc(t) {
    let s = "";
    s += `
`, s += `
`;
    for (let i = 0; i < t; i++)
      i > 0 && (s += `
else `), i < t - 1 && (s += `if(vTextureId < ${i}.5)`), s += `
{`, s += `
	color = texture2D(uSamplers[${i}], vTextureCoord);`, s += `
}`;
    return s += `
`, s += `
`, s;
  }
}
class dr {
  constructor() {
    this.elements = [], this.ids = [], this.count = 0;
  }
  clear() {
    for (let t = 0; t < this.count; t++)
      this.elements[t] = null;
    this.count = 0;
  }
}
function Wh() {
  return !se.apple.device;
}
function jh(e) {
  let t = !0;
  const s = I.ADAPTER.getNavigator();
  if (se.tablet || se.phone) {
    if (se.apple.device) {
      const i = s.userAgent.match(/OS (\d+)_(\d+)?/);
      i && parseInt(i[1], 10) < 11 && (t = !1);
    }
    if (se.android.device) {
      const i = s.userAgent.match(/Android\s([0-9.]*)/);
      i && parseInt(i[1], 10) < 7 && (t = !1);
    }
  }
  return t ? e : 4;
}
class ui {
  constructor(t) {
    this.renderer = t;
  }
  flush() {
  }
  destroy() {
    this.renderer = null;
  }
  start() {
  }
  stop() {
    this.flush();
  }
  render(t) {
  }
}
var Yh = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`, qh = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const Mt = class extends ui {
  constructor(e) {
    super(e), this.setShaderGenerator(), this.geometryClass = co, this.vertexSize = 6, this.state = ne.for2d(), this.size = Mt.defaultBatchSize * 4, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = [];
  }
  static get defaultMaxTextures() {
    return this._defaultMaxTextures = this._defaultMaxTextures ?? jh(32), this._defaultMaxTextures;
  }
  static set defaultMaxTextures(e) {
    this._defaultMaxTextures = e;
  }
  static get canUploadSameBuffer() {
    return this._canUploadSameBuffer = this._canUploadSameBuffer ?? Wh(), this._canUploadSameBuffer;
  }
  static set canUploadSameBuffer(e) {
    this._canUploadSameBuffer = e;
  }
  get MAX_TEXTURES() {
    return $("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"), this.maxTextures;
  }
  static get defaultVertexSrc() {
    return qh;
  }
  static get defaultFragmentTemplate() {
    return Yh;
  }
  setShaderGenerator({
    vertex: e = Mt.defaultVertexSrc,
    fragment: t = Mt.defaultFragmentTemplate
  } = {}) {
    this.shaderGenerator = new $h(e, t);
  }
  contextChange() {
    const e = this.renderer.gl;
    I.PREFER_ENV === Ie.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), Mt.defaultMaxTextures), this.maxTextures = Eh(this.maxTextures, e)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
    for (let t = 0; t < this._packedGeometryPoolSize; t++)
      this._packedGeometries[t] = new this.geometryClass();
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const {
      _drawCallPool: e,
      _textureArrayPool: t
    } = Mt, s = this.size / 4, i = Math.floor(s / this.maxTextures) + 1;
    for (; e.length < s; )
      e.push(new cr());
    for (; t.length < i; )
      t.push(new dr());
    for (let r = 0; r < this.maxTextures; r++)
      this._tempBoundTextures[r] = null;
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(e) {
    e._texture.valid && (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += e.vertexData.length / 2, this._indexCount += e.indices.length, this._bufferedTextures[this._bufferSize] = e._texture.baseTexture, this._bufferedElements[this._bufferSize++] = e);
  }
  buildTexturesAndDrawCalls() {
    const {
      _bufferedTextures: e,
      maxTextures: t
    } = this, s = Mt._textureArrayPool, i = this.renderer.batch, r = this._tempBoundTextures, n = this.renderer.textureGC.count;
    let o = ++X._globalBatch, a = 0, h = s[0], l = 0;
    i.copyBoundTextures(r, t);
    for (let c = 0; c < this._bufferSize; ++c) {
      const u = e[c];
      e[c] = null, u._batchEnabled !== o && (h.count >= t && (i.boundArray(h, r, o, t), this.buildDrawCalls(h, l, c), l = c, h = s[++a], ++o), u._batchEnabled = o, u.touched = n, h.elements[h.count++] = u);
    }
    h.count > 0 && (i.boundArray(h, r, o, t), this.buildDrawCalls(h, l, this._bufferSize), ++a, ++o);
    for (let c = 0; c < r.length; c++)
      r[c] = null;
    X._globalBatch = o;
  }
  buildDrawCalls(e, t, s) {
    const {
      _bufferedElements: i,
      _attributeBuffer: r,
      _indexBuffer: n,
      vertexSize: o
    } = this, a = Mt._drawCallPool;
    let h = this._dcIndex, l = this._aIndex, c = this._iIndex, u = a[h];
    u.start = this._iIndex, u.texArray = e;
    for (let d = t; d < s; ++d) {
      const f = i[d], p = f._texture.baseTexture, _ = no[p.alphaMode ? 1 : 0][f.blendMode];
      i[d] = null, t < d && u.blend !== _ && (u.size = c - u.start, t = d, u = a[++h], u.texArray = e, u.start = c), this.packInterleavedGeometry(f, r, n, l, c), l += f.vertexData.length / 2 * o, c += f.indices.length, u.blend = _;
    }
    t < s && (u.size = c - u.start, ++h), this._dcIndex = h, this._aIndex = l, this._iIndex = c;
  }
  bindAndClearTexArray(e) {
    const t = this.renderer.texture;
    for (let s = 0; s < e.count; s++)
      t.bind(e.elements[s], e.ids[s]), e.elements[s] = null;
    e.count = 0;
  }
  updateGeometry() {
    const {
      _packedGeometries: e,
      _attributeBuffer: t,
      _indexBuffer: s
    } = this;
    Mt.canUploadSameBuffer ? (e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(s), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass()), e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(s), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
  }
  drawBatches() {
    const e = this._dcIndex, { gl: t, state: s } = this.renderer, i = Mt._drawCallPool;
    let r = null;
    for (let n = 0; n < e; n++) {
      const { texArray: o, type: a, size: h, start: l, blend: c } = i[n];
      r !== o && (r = o, this.bindAndClearTexArray(o)), this.state.blendMode = c, s.set(this.state), t.drawElements(a, h, t.UNSIGNED_SHORT, l * 2);
    }
  }
  flush() {
    this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
  }
  start() {
    this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), Mt.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let e = 0; e < this._packedGeometryPoolSize; e++)
      this._packedGeometries[e] && this._packedGeometries[e].destroy();
    this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy();
  }
  getAttributeBuffer(e) {
    const t = Zs(Math.ceil(e / 8)), s = dn(t), i = t * 8;
    this._aBuffers.length <= s && (this._iBuffers.length = s + 1);
    let r = this._aBuffers[i];
    return r || (this._aBuffers[i] = r = new hr(i * this.vertexSize * 4)), r;
  }
  getIndexBuffer(e) {
    const t = Zs(Math.ceil(e / 12)), s = dn(t), i = t * 12;
    this._iBuffers.length <= s && (this._iBuffers.length = s + 1);
    let r = this._iBuffers[s];
    return r || (this._iBuffers[s] = r = new Uint16Array(i)), r;
  }
  packInterleavedGeometry(e, t, s, i, r) {
    const {
      uint32View: n,
      float32View: o
    } = t, a = i / this.vertexSize, h = e.uvs, l = e.indices, c = e.vertexData, u = e._texture.baseTexture._batchLocation, d = Math.min(e.worldAlpha, 1), f = Z.shared.setValue(e._tintRGB).toPremultiplied(d);
    for (let p = 0; p < c.length; p += 2)
      o[i++] = c[p], o[i++] = c[p + 1], o[i++] = h[p], o[i++] = h[p + 1], n[i++] = f, o[i++] = u;
    for (let p = 0; p < l.length; p++)
      s[r++] = a + l[p];
  }
};
let Ft = Mt;
Ft.defaultBatchSize = 4096;
Ft.extension = {
  name: "batch",
  type: M.RendererPlugin
};
Ft._drawCallPool = [];
Ft._textureArrayPool = [];
k.add(Ft);
var Kh = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`, Zh = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const rs = class extends qt {
  constructor(e, t, s) {
    const i = Nt.from(e || rs.defaultVertexSrc, t || rs.defaultFragmentSrc);
    super(i, s), this.padding = 0, this.resolution = rs.defaultResolution, this.multisample = rs.defaultMultisample, this.enabled = !0, this.autoFit = !0, this.state = new ne();
  }
  apply(e, t, s, i, r) {
    e.applyFilter(this, t, s, i);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._resolution = e;
  }
  static get defaultVertexSrc() {
    return Zh;
  }
  static get defaultFragmentSrc() {
    return Kh;
  }
};
let xt = rs;
xt.defaultResolution = 1;
xt.defaultMultisample = nt.NONE;
class di {
  constructor() {
    this.clearBeforeRender = !0, this._backgroundColor = new Z(0), this.alpha = 1;
  }
  init(t) {
    this.clearBeforeRender = t.clearBeforeRender;
    const { backgroundColor: s, background: i, backgroundAlpha: r } = t, n = i ?? s;
    n !== void 0 && (this.color = n), this.alpha = r;
  }
  get color() {
    return this._backgroundColor.value;
  }
  set color(t) {
    this._backgroundColor.setValue(t);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(t) {
    this._backgroundColor.setAlpha(t);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {
  }
}
di.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: !0
};
di.extension = {
  type: [
    M.RendererSystem,
    M.CanvasRendererSystem
  ],
  name: "background"
};
k.add(di);
class xo {
  constructor(t) {
    this.renderer = t, this.emptyRenderer = new ui(t), this.currentRenderer = this.emptyRenderer;
  }
  setObjectRenderer(t) {
    this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start());
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(t, s) {
    const { boundTextures: i } = this.renderer.texture;
    for (let r = s - 1; r >= 0; --r)
      t[r] = i[r] || null, t[r] && (t[r]._batchLocation = r);
  }
  boundArray(t, s, i, r) {
    const { elements: n, ids: o, count: a } = t;
    let h = 0;
    for (let l = 0; l < a; l++) {
      const c = n[l], u = c._batchLocation;
      if (u >= 0 && u < r && s[u] === c) {
        o[l] = u;
        continue;
      }
      for (; h < r; ) {
        const d = s[h];
        if (d && d._batchEnabled === i && d._batchLocation === h) {
          h++;
          continue;
        }
        o[l] = h, c._batchLocation = h, s[h] = c;
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
xo.extension = {
  type: M.RendererSystem,
  name: "batch"
};
k.add(xo);
let En = 0;
class fi {
  constructor(t) {
    this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
      uint32Indices: !1
    }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(t) {
    this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = En++;
  }
  init(t) {
    if (t.context)
      this.initFromContext(t.context);
    else {
      const s = this.renderer.background.alpha < 1, i = t.premultipliedAlpha;
      this.preserveDrawingBuffer = t.preserveDrawingBuffer, this.useContextAlpha = t.useContextAlpha, this.powerPreference = t.powerPreference, this.initFromOptions({
        alpha: s,
        premultipliedAlpha: i,
        antialias: t.antialias,
        stencil: !0,
        preserveDrawingBuffer: t.preserveDrawingBuffer,
        powerPreference: t.powerPreference
      });
    }
  }
  initFromContext(t) {
    this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = En++, this.renderer.runners.contextChange.emit(t);
    const s = this.renderer.view;
    s.addEventListener !== void 0 && (s.addEventListener("webglcontextlost", this.handleContextLost, !1), s.addEventListener("webglcontextrestored", this.handleContextRestored, !1));
  }
  initFromOptions(t) {
    const s = this.createContext(this.renderer.view, t);
    this.initFromContext(s);
  }
  createContext(t, s) {
    let i;
    if (I.PREFER_ENV >= Ie.WEBGL2 && (i = t.getContext("webgl2", s)), i)
      this.webGLVersion = 2;
    else if (this.webGLVersion = 1, i = t.getContext("webgl", s) || t.getContext("experimental-webgl", s), !i)
      throw new Error("This browser does not support WebGL. Try using the canvas renderer");
    return this.gl = i, this.getExtensions(), this.gl;
  }
  getExtensions() {
    const { gl: t } = this, s = {
      loseContext: t.getExtension("WEBGL_lose_context"),
      anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
      s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
      etc: t.getExtension("WEBGL_compressed_texture_etc"),
      etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
      pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      atc: t.getExtension("WEBGL_compressed_texture_atc"),
      astc: t.getExtension("WEBGL_compressed_texture_astc")
    };
    this.webGLVersion === 1 ? Object.assign(this.extensions, s, {
      drawBuffers: t.getExtension("WEBGL_draw_buffers"),
      depthTexture: t.getExtension("WEBGL_depth_texture"),
      vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
      uint32ElementIndex: t.getExtension("OES_element_index_uint"),
      floatTexture: t.getExtension("OES_texture_float"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      textureHalfFloat: t.getExtension("OES_texture_half_float"),
      textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
    }) : this.webGLVersion === 2 && Object.assign(this.extensions, s, {
      colorBufferFloat: t.getExtension("EXT_color_buffer_float")
    });
  }
  handleContextLost(t) {
    t.preventDefault(), setTimeout(() => {
      this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext();
    }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const t = this.renderer.view;
    this.renderer = null, t.removeEventListener !== void 0 && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
  }
  validateContext(t) {
    const s = t.getContextAttributes(), i = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
    i && (this.webGLVersion = 2), s && !s.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    const r = i || !!t.getExtension("OES_element_index_uint");
    this.supports.uint32Indices = r, r || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
  }
}
fi.defaultOptions = {
  context: null,
  antialias: !1,
  premultipliedAlpha: !0,
  preserveDrawingBuffer: !1,
  powerPreference: "default"
};
fi.extension = {
  type: M.RendererSystem,
  name: "context"
};
k.add(fi);
class Jh extends _s {
  upload(t, s, i) {
    const r = t.gl;
    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.alphaMode === Gt.UNPACK);
    const n = s.realWidth, o = s.realHeight;
    return i.width === n && i.height === o ? r.texSubImage2D(s.target, 0, 0, 0, n, o, s.format, i.type, this.data) : (i.width = n, i.height = o, r.texImage2D(s.target, 0, i.internalFormat, n, o, 0, s.format, i.type, this.data)), !0;
  }
}
class fr {
  constructor(t, s) {
    this.width = Math.round(t || 100), this.height = Math.round(s || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new Ot("disposeFramebuffer"), this.multisample = nt.NONE;
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(t = 0, s) {
    return this.colorTextures[t] = s || new X(null, {
      scaleMode: ee.NEAREST,
      resolution: 1,
      mipmap: Kt.OFF,
      width: this.width,
      height: this.height
    }), this.dirtyId++, this.dirtyFormat++, this;
  }
  addDepthTexture(t) {
    return this.depthTexture = t || new X(new Jh(null, { width: this.width, height: this.height }), {
      scaleMode: ee.NEAREST,
      resolution: 1,
      width: this.width,
      height: this.height,
      mipmap: Kt.OFF,
      format: C.DEPTH_COMPONENT,
      type: O.UNSIGNED_SHORT
    }), this.dirtyId++, this.dirtyFormat++, this;
  }
  enableDepth() {
    return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this;
  }
  enableStencil() {
    return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this;
  }
  resize(t, s) {
    if (t = Math.round(t), s = Math.round(s), !(t === this.width && s === this.height)) {
      this.width = t, this.height = s, this.dirtyId++, this.dirtySize++;
      for (let i = 0; i < this.colorTextures.length; i++) {
        const r = this.colorTextures[i], n = r.resolution;
        r.setSize(t / n, s / n);
      }
      if (this.depthTexture) {
        const i = this.depthTexture.resolution;
        this.depthTexture.setSize(t / i, s / i);
      }
    }
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroyDepthTexture() {
    this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat);
  }
}
class yo extends X {
  constructor(t = {}) {
    if (typeof t == "number") {
      const s = arguments[0], i = arguments[1], r = arguments[2], n = arguments[3];
      t = { width: s, height: i, scaleMode: r, resolution: n };
    }
    t.width = t.width || 100, t.height = t.height || 100, t.multisample ?? (t.multisample = nt.NONE), super(null, t), this.mipmap = Kt.OFF, this.valid = !0, this._clear = new Z([0, 0, 0, 0]), this.framebuffer = new fr(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = t.multisample, this.maskStack = [], this.filterStack = [{}];
  }
  set clearColor(t) {
    this._clear.setValue(t);
  }
  get clearColor() {
    return this._clear.value;
  }
  get clear() {
    return this._clear;
  }
  resize(t, s) {
    this.framebuffer.resize(t * this.resolution, s * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  destroy() {
    super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null;
  }
}
class fe extends ps {
  constructor(t) {
    const s = t, i = s.naturalWidth || s.videoWidth || s.width, r = s.naturalHeight || s.videoHeight || s.height;
    super(i, r), this.source = t, this.noSubImage = !1;
  }
  static crossOrigin(t, s, i) {
    i === void 0 && !s.startsWith("data:") ? t.crossOrigin = vh(s) : i !== !1 && (t.crossOrigin = typeof i == "string" ? i : "anonymous");
  }
  upload(t, s, i, r) {
    const n = t.gl, o = s.realWidth, a = s.realHeight;
    if (r = r || this.source, typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) {
      if (!r.complete || r.naturalWidth === 0)
        return !1;
    } else if (typeof HTMLVideoElement < "u" && r instanceof HTMLVideoElement && r.readyState <= 1 && r.buffered.length === 0)
      return !1;
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.alphaMode === Gt.UNPACK), !this.noSubImage && s.target === n.TEXTURE_2D && i.width === o && i.height === a ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, s.format, i.type, r) : (i.width = o, i.height = a, n.texImage2D(s.target, 0, i.internalFormat, s.format, i.type, r)), !0;
  }
  update() {
    if (this.destroyed)
      return;
    const t = this.source, s = t.naturalWidth || t.videoWidth || t.width, i = t.naturalHeight || t.videoHeight || t.height;
    this.resize(s, i), super.update();
  }
  dispose() {
    this.source = null;
  }
}
class vo extends fe {
  constructor(t, s) {
    if (s = s || {}, typeof t == "string") {
      const i = new Image();
      fe.crossOrigin(i, t, s.crossorigin), i.src = t, t = i;
    }
    super(t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (s.createBitmap ?? I.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof s.alphaMode == "number" ? s.alphaMode : null, this.bitmap = null, this._load = null, s.autoLoad !== !1 && this.load();
  }
  load(t) {
    return this._load ? this._load : (t !== void 0 && (this.createBitmap = t), this._load = new Promise((s, i) => {
      const r = this.source;
      this.url = r.src;
      const n = () => {
        this.destroyed || (r.onload = null, r.onerror = null, this.resize(r.width, r.height), this._load = null, this.createBitmap ? s(this.process()) : s(this));
      };
      r.complete && r.src ? n() : (r.onload = n, r.onerror = (o) => {
        i(o), this.onError.emit(o);
      });
    }), this._load);
  }
  process() {
    const t = this.source;
    if (this._process !== null)
      return this._process;
    if (this.bitmap !== null || !globalThis.createImageBitmap)
      return Promise.resolve(this);
    const s = globalThis.createImageBitmap, i = !t.crossOrigin || t.crossOrigin === "anonymous";
    return this._process = fetch(t.src, {
      mode: i ? "cors" : "no-cors"
    }).then((r) => r.blob()).then((r) => s(r, 0, 0, t.width, t.height, {
      premultiplyAlpha: this.alphaMode === null || this.alphaMode === Gt.UNPACK ? "premultiply" : "none"
    })).then((r) => this.destroyed ? Promise.reject() : (this.bitmap = r, this.update(), this._process = null, Promise.resolve(this))), this._process;
  }
  upload(t, s, i) {
    if (typeof this.alphaMode == "number" && (s.alphaMode = this.alphaMode), !this.createBitmap)
      return super.upload(t, s, i);
    if (!this.bitmap && (this.process(), !this.bitmap))
      return !1;
    if (super.upload(t, s, i, this.bitmap), !this.preserveBitmap) {
      let r = !0;
      const n = s._glTextures;
      for (const o in n) {
        const a = n[o];
        if (a !== i && a.dirtyId !== s.dirtyId) {
          r = !1;
          break;
        }
      }
      r && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
    }
    return !0;
  }
  dispose() {
    this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null;
  }
  static test(t) {
    return typeof HTMLImageElement < "u" && (typeof t == "string" || t instanceof HTMLImageElement);
  }
}
class bo {
  constructor() {
    this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
  }
  set(t, s, i) {
    const r = s.width, n = s.height;
    if (i) {
      const o = t.width / 2 / r, a = t.height / 2 / n, h = t.x / r + o, l = t.y / n + a;
      i = et.add(i, et.NW), this.x0 = h + o * et.uX(i), this.y0 = l + a * et.uY(i), i = et.add(i, 2), this.x1 = h + o * et.uX(i), this.y1 = l + a * et.uY(i), i = et.add(i, 2), this.x2 = h + o * et.uX(i), this.y2 = l + a * et.uY(i), i = et.add(i, 2), this.x3 = h + o * et.uX(i), this.y3 = l + a * et.uY(i);
    } else
      this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
    this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
  }
  toString() {
    return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
  }
}
const wn = new bo();
function Bs(e) {
  e.destroy = function() {
  }, e.on = function() {
  }, e.once = function() {
  }, e.emit = function() {
  };
}
class B extends Se {
  constructor(t, s, i, r, n, o, a) {
    if (super(), this.noFrame = !1, s || (this.noFrame = !0, s = new z(0, 0, 1, 1)), t instanceof B && (t = t.baseTexture), this.baseTexture = t, this._frame = s, this.trim = r, this.valid = !1, this._uvs = wn, this.uvMatrix = null, this.orig = i || s, this._rotate = Number(n || 0), n === !0)
      this._rotate = 2;
    else if (this._rotate % 2 !== 0)
      throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
    this.defaultAnchor = o ? new Y(o.x, o.y) : new Y(0, 0), this.defaultBorders = a, this._updateID = 0, this.textureCacheIds = [], t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = s : t.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && t.on("update", this.onBaseTextureUpdated, this);
  }
  update() {
    this.baseTexture.resource && this.baseTexture.resource.update();
  }
  onBaseTextureUpdated(t) {
    if (this.noFrame) {
      if (!this.baseTexture.valid)
        return;
      this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs();
    } else
      this.frame = this._frame;
    this.emit("update", this);
  }
  destroy(t) {
    if (this.baseTexture) {
      if (t) {
        const { resource: s } = this.baseTexture;
        s != null && s.url && zt[s.url] && B.removeFromCache(s.url), this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
    }
    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, B.removeFromCache(this), this.textureCacheIds = null;
  }
  clone() {
    var r;
    const t = this._frame.clone(), s = this._frame === this.orig ? t : this.orig.clone(), i = new B(this.baseTexture, !this.noFrame && t, s, (r = this.trim) == null ? void 0 : r.clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
    return this.noFrame && (i._frame = t), i;
  }
  updateUvs() {
    this._uvs === wn && (this._uvs = new bo()), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
  }
  static from(t, s = {}, i = I.STRICT_TEXTURE_CACHE) {
    const r = typeof t == "string";
    let n = null;
    if (r)
      n = t;
    else if (t instanceof X) {
      if (!t.cacheId) {
        const a = (s == null ? void 0 : s.pixiIdPrefix) || "pixiid";
        t.cacheId = `${a}-${Ce()}`, X.addToCache(t, t.cacheId);
      }
      n = t.cacheId;
    } else {
      if (!t._pixiId) {
        const a = (s == null ? void 0 : s.pixiIdPrefix) || "pixiid";
        t._pixiId = `${a}_${Ce()}`;
      }
      n = t._pixiId;
    }
    let o = zt[n];
    if (r && i && !o)
      throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
    return !o && !(t instanceof X) ? (s.resolution || (s.resolution = ue(t)), o = new B(new X(t, s)), o.baseTexture.cacheId = n, X.addToCache(o.baseTexture, n), B.addToCache(o, n)) : !o && t instanceof X && (o = new B(t), B.addToCache(o, n)), o;
  }
  static fromURL(t, s) {
    const i = Object.assign({ autoLoad: !1 }, s == null ? void 0 : s.resourceOptions), r = B.from(t, Object.assign({ resourceOptions: i }, s), !1), n = r.baseTexture.resource;
    return r.baseTexture.valid ? Promise.resolve(r) : n.load().then(() => Promise.resolve(r));
  }
  static fromBuffer(t, s, i, r) {
    return new B(X.fromBuffer(t, s, i, r));
  }
  static fromLoader(t, s, i, r) {
    const n = new X(t, Object.assign({
      scaleMode: X.defaultOptions.scaleMode,
      resolution: ue(s)
    }, r)), { resource: o } = n;
    o instanceof vo && (o.url = s);
    const a = new B(n);
    return i || (i = s), X.addToCache(a.baseTexture, i), B.addToCache(a, i), i !== s && (X.addToCache(a.baseTexture, s), B.addToCache(a, s)), a.baseTexture.valid ? Promise.resolve(a) : new Promise((h) => {
      a.baseTexture.once("loaded", () => h(a));
    });
  }
  static addToCache(t, s) {
    s && (t.textureCacheIds.includes(s) || t.textureCacheIds.push(s), zt[s] && zt[s] !== t && console.warn(`Texture added to the cache with an id [${s}] that already had an entry`), zt[s] = t);
  }
  static removeFromCache(t) {
    if (typeof t == "string") {
      const s = zt[t];
      if (s) {
        const i = s.textureCacheIds.indexOf(t);
        return i > -1 && s.textureCacheIds.splice(i, 1), delete zt[t], s;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let s = 0; s < t.textureCacheIds.length; ++s)
        zt[t.textureCacheIds[s]] === t && delete zt[t.textureCacheIds[s]];
      return t.textureCacheIds.length = 0, t;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(t) {
    this._frame = t, this.noFrame = !1;
    const { x: s, y: i, width: r, height: n } = t, o = s + r > this.baseTexture.width, a = i + n > this.baseTexture.height;
    if (o || a) {
      const h = o && a ? "and" : "or", l = `X: ${s} + ${r} = ${s + r} > ${this.baseTexture.width}`, c = `Y: ${i} + ${n} = ${i + n} > ${this.baseTexture.height}`;
      throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${c}`);
    }
    this.valid = r && n && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = t), this.valid && this.updateUvs();
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(t) {
    this._rotate = t, this.valid && this.updateUvs();
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    return B._EMPTY || (B._EMPTY = new B(new X()), Bs(B._EMPTY), Bs(B._EMPTY.baseTexture)), B._EMPTY;
  }
  static get WHITE() {
    if (!B._WHITE) {
      const t = I.ADAPTER.createCanvas(16, 16), s = t.getContext("2d");
      t.width = 16, t.height = 16, s.fillStyle = "white", s.fillRect(0, 0, 16, 16), B._WHITE = new B(X.from(t)), Bs(B._WHITE), Bs(B._WHITE.baseTexture);
    }
    return B._WHITE;
  }
}
class pe extends B {
  constructor(t, s) {
    super(t, s), this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  resize(t, s, i = !0) {
    const r = this.baseTexture.resolution, n = Math.round(t * r) / r, o = Math.round(s * r) / r;
    this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, i && this.baseTexture.resize(n, o), this.updateUvs();
  }
  setResolution(t) {
    const { baseTexture: s } = this;
    s.resolution !== t && (s.setResolution(t), this.resize(s.width, s.height, !1));
  }
  static create(t) {
    return new pe(new yo(t));
  }
}
class To {
  constructor(t) {
    this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0;
  }
  createTexture(t, s, i = nt.NONE) {
    const r = new yo(Object.assign({
      width: t,
      height: s,
      resolution: 1,
      multisample: i
    }, this.textureOptions));
    return new pe(r);
  }
  getOptimalTexture(t, s, i = 1, r = nt.NONE) {
    let n;
    t = Math.ceil(t * i - 1e-6), s = Math.ceil(s * i - 1e-6), !this.enableFullScreen || t !== this._pixelsWidth || s !== this._pixelsHeight ? (t = Zs(t), s = Zs(s), n = ((t & 65535) << 16 | s & 65535) >>> 0, r > 1 && (n += r * 4294967296)) : n = r > 1 ? -r : -1, this.texturePool[n] || (this.texturePool[n] = []);
    let o = this.texturePool[n].pop();
    return o || (o = this.createTexture(t, s, r)), o.filterPoolKey = n, o.setResolution(i), o;
  }
  getFilterTexture(t, s, i) {
    const r = this.getOptimalTexture(t.width, t.height, s || t.resolution, i || nt.NONE);
    return r.filterFrame = t.filterFrame, r;
  }
  returnTexture(t) {
    const s = t.filterPoolKey;
    t.filterFrame = null, this.texturePool[s].push(t);
  }
  returnFilterTexture(t) {
    this.returnTexture(t);
  }
  clear(t) {
    if (t = t !== !1, t)
      for (const s in this.texturePool) {
        const i = this.texturePool[s];
        if (i)
          for (let r = 0; r < i.length; r++)
            i[r].destroy(!0);
      }
    this.texturePool = {};
  }
  setScreenSize(t) {
    if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
      this.enableFullScreen = t.width > 0 && t.height > 0;
      for (const s in this.texturePool) {
        if (!(Number(s) < 0))
          continue;
        const i = this.texturePool[s];
        if (i)
          for (let r = 0; r < i.length; r++)
            i[r].destroy(!0);
        this.texturePool[s] = [];
      }
      this._pixelsWidth = t.width, this._pixelsHeight = t.height;
    }
  }
}
To.SCREEN_KEY = -1;
class Qh extends de {
  constructor() {
    super(), this.addAttribute("aVertexPosition", new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ])).addIndex([0, 1, 3, 2]);
  }
}
class Eo extends de {
  constructor() {
    super(), this.vertices = new Float32Array([
      -1,
      -1,
      1,
      -1,
      1,
      1,
      -1,
      1
    ]), this.uvs = new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ]), this.vertexBuffer = new ot(this.vertices), this.uvBuffer = new ot(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(t, s) {
    let i = 0, r = 0;
    return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + s.width / t.width, this.uvs[3] = r, this.uvs[4] = i + s.width / t.width, this.uvs[5] = r + s.height / t.height, this.uvs[6] = i, this.uvs[7] = r + s.height / t.height, i = s.x, r = s.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + s.width, this.vertices[3] = r, this.vertices[4] = i + s.width, this.vertices[5] = r + s.height, this.vertices[6] = i, this.vertices[7] = r + s.height, this.invalidate(), this;
  }
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class tl {
  constructor() {
    this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = nt.NONE, this.sourceFrame = new z(), this.destinationFrame = new z(), this.bindingSourceFrame = new z(), this.bindingDestinationFrame = new z(), this.filters = [], this.transform = null;
  }
  clear() {
    this.target = null, this.filters = null, this.renderTexture = null;
  }
}
const Ds = [new Y(), new Y(), new Y(), new Y()], Li = new tt();
class wo {
  constructor(t) {
    this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new To(), this.statePool = [], this.quad = new Qh(), this.quadUv = new Eo(), this.tempRect = new z(), this.activeState = {}, this.globalUniforms = new Ut({
      outputFrame: new z(),
      inputSize: new Float32Array(4),
      inputPixel: new Float32Array(4),
      inputClamp: new Float32Array(4),
      resolution: 1,
      filterArea: new Float32Array(4),
      filterClamp: new Float32Array(4)
    }, !0), this.forceClear = !1, this.useMaxPadding = !1;
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(t, s) {
    const i = this.renderer, r = this.defaultFilterStack, n = this.statePool.pop() || new tl(), o = this.renderer.renderTexture;
    let a = s[0].resolution, h = s[0].multisample, l = s[0].padding, c = s[0].autoFit, u = s[0].legacy ?? !0;
    for (let p = 1; p < s.length; p++) {
      const _ = s[p];
      a = Math.min(a, _.resolution), h = Math.min(h, _.multisample), l = this.useMaxPadding ? Math.max(l, _.padding) : l + _.padding, c = c && _.autoFit, u = u || (_.legacy ?? !0);
    }
    r.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current), r.push(n), n.resolution = a, n.multisample = h, n.legacy = u, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(l);
    const d = this.tempRect.copyFrom(o.sourceFrame);
    i.projection.transform && this.transformAABB(Li.copyFrom(i.projection.transform).invert(), d), c ? (n.sourceFrame.fit(d), (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) && (n.sourceFrame.width = 0, n.sourceFrame.height = 0)) : n.sourceFrame.intersects(d) || (n.sourceFrame.width = 0, n.sourceFrame.height = 0), this.roundFrame(n.sourceFrame, o.current ? o.current.resolution : i.resolution, o.sourceFrame, o.destinationFrame, i.projection.transform), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, a, h), n.filters = s, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height;
    const f = this.tempRect;
    f.x = 0, f.y = 0, f.width = n.sourceFrame.width, f.height = n.sourceFrame.height, n.renderTexture.filterFrame = n.sourceFrame, n.bindingSourceFrame.copyFrom(o.sourceFrame), n.bindingDestinationFrame.copyFrom(o.destinationFrame), n.transform = i.projection.transform, i.projection.transform = null, o.bind(n.renderTexture, n.sourceFrame, f), i.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const t = this.defaultFilterStack, s = t.pop(), i = s.filters;
    this.activeState = s;
    const r = this.globalUniforms.uniforms;
    r.outputFrame = s.sourceFrame, r.resolution = s.resolution;
    const n = r.inputSize, o = r.inputPixel, a = r.inputClamp;
    if (n[0] = s.destinationFrame.width, n[1] = s.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = Math.round(n[0] * s.resolution), o[1] = Math.round(n[1] * s.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], a[0] = 0.5 * o[2], a[1] = 0.5 * o[3], a[2] = s.sourceFrame.width * n[2] - 0.5 * o[2], a[3] = s.sourceFrame.height * n[3] - 0.5 * o[3], s.legacy) {
      const l = r.filterArea;
      l[0] = s.destinationFrame.width, l[1] = s.destinationFrame.height, l[2] = s.sourceFrame.x, l[3] = s.sourceFrame.y, r.filterClamp = r.inputClamp;
    }
    this.globalUniforms.update();
    const h = t[t.length - 1];
    if (this.renderer.framebuffer.blit(), i.length === 1)
      i[0].apply(this, s.renderTexture, h.renderTexture, $t.BLEND, s), this.returnFilterTexture(s.renderTexture);
    else {
      let l = s.renderTexture, c = this.getOptimalFilterTexture(l.width, l.height, s.resolution);
      c.filterFrame = l.filterFrame;
      let u = 0;
      for (u = 0; u < i.length - 1; ++u) {
        u === 1 && s.multisample > 1 && (c = this.getOptimalFilterTexture(l.width, l.height, s.resolution), c.filterFrame = l.filterFrame), i[u].apply(this, l, c, $t.CLEAR, s);
        const d = l;
        l = c, c = d;
      }
      i[u].apply(this, l, h.renderTexture, $t.BLEND, s), u > 1 && s.multisample > 1 && this.returnFilterTexture(s.renderTexture), this.returnFilterTexture(l), this.returnFilterTexture(c);
    }
    s.clear(), this.statePool.push(s);
  }
  bindAndClear(t, s = $t.CLEAR) {
    const {
      renderTexture: i,
      state: r
    } = this.renderer;
    if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t != null && t.filterFrame) {
      const o = this.tempRect;
      o.x = 0, o.y = 0, o.width = t.filterFrame.width, o.height = t.filterFrame.height, i.bind(t, t.filterFrame, o);
    } else
      t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? i.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
    const n = r.stateId & 1 || this.forceClear;
    (s === $t.CLEAR || s === $t.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  applyFilter(t, s, i, r) {
    const n = this.renderer;
    n.state.set(t.state), this.bindAndClear(i, r), t.uniforms.uSampler = s, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(s._frame, s.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(jt.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(jt.TRIANGLE_STRIP));
  }
  calculateSpriteMatrix(t, s) {
    const { sourceFrame: i, destinationFrame: r } = this.activeState, { orig: n } = s._texture, o = t.set(r.width, 0, 0, r.height, i.x, i.y), a = s.worldTransform.copyTo(tt.TEMP_MATRIX);
    return a.invert(), o.prepend(a), o.scale(1 / n.width, 1 / n.height), o.translate(s.anchor.x, s.anchor.y), o;
  }
  destroy() {
    this.renderer = null, this.texturePool.clear(!1);
  }
  getOptimalFilterTexture(t, s, i = 1, r = nt.NONE) {
    return this.texturePool.getOptimalTexture(t, s, i, r);
  }
  getFilterTexture(t, s, i) {
    if (typeof t == "number") {
      const n = t;
      t = s, s = n;
    }
    t = t || this.activeState.renderTexture;
    const r = this.texturePool.getOptimalTexture(t.width, t.height, s || t.resolution, i || nt.NONE);
    return r.filterFrame = t.filterFrame, r;
  }
  returnFilterTexture(t) {
    this.texturePool.returnTexture(t);
  }
  emptyPool() {
    this.texturePool.clear(!0);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(t, s) {
    const i = Ds[0], r = Ds[1], n = Ds[2], o = Ds[3];
    i.set(s.left, s.top), r.set(s.left, s.bottom), n.set(s.right, s.top), o.set(s.right, s.bottom), t.apply(i, i), t.apply(r, r), t.apply(n, n), t.apply(o, o);
    const a = Math.min(i.x, r.x, n.x, o.x), h = Math.min(i.y, r.y, n.y, o.y), l = Math.max(i.x, r.x, n.x, o.x), c = Math.max(i.y, r.y, n.y, o.y);
    s.x = a, s.y = h, s.width = l - a, s.height = c - h;
  }
  roundFrame(t, s, i, r, n) {
    if (!(t.width <= 0 || t.height <= 0 || i.width <= 0 || i.height <= 0)) {
      if (n) {
        const { a: o, b: a, c: h, d: l } = n;
        if ((Math.abs(a) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4))
          return;
      }
      n = n ? Li.copyFrom(n) : Li.identity(), n.translate(-i.x, -i.y).scale(r.width / i.width, r.height / i.height).translate(r.x, r.y), this.transformAABB(n, t), t.ceil(s), this.transformAABB(n.invert(), t);
    }
  }
}
wo.extension = {
  type: M.RendererSystem,
  name: "filter"
};
k.add(wo);
class el {
  constructor(t) {
    this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = nt.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
  }
}
const sl = new z();
class So {
  constructor(t) {
    this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new fr(10, 10), this.msaaSamples = null;
  }
  contextChange() {
    this.disposeAll(!0);
    const t = this.gl = this.renderer.gl;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new z(), this.hasMRT = !0, this.writeDepthTexture = !0, this.renderer.context.webGLVersion === 1) {
      let s = this.renderer.context.extensions.drawBuffers, i = this.renderer.context.extensions.depthTexture;
      I.PREFER_ENV === Ie.WEBGL_LEGACY && (s = null, i = null), s ? t.drawBuffers = (r) => s.drawBuffersWEBGL(r) : (this.hasMRT = !1, t.drawBuffers = () => {
      }), i || (this.writeDepthTexture = !1);
    } else
      this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES);
  }
  bind(t, s, i = 0) {
    const { gl: r } = this;
    if (t) {
      const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
      this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== i && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = i), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, i)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
      for (let o = 0; o < t.colorTextures.length; o++) {
        const a = t.colorTextures[o];
        this.renderer.texture.unbind(a.parentTextureArray || a);
      }
      if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), s) {
        const o = s.width >> i, a = s.height >> i, h = o / s.width;
        this.setViewport(s.x * h, s.y * h, o, a);
      } else {
        const o = t.width >> i, a = t.height >> i;
        this.setViewport(0, 0, o, a);
      }
    } else
      this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), s ? this.setViewport(s.x, s.y, s.width, s.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  setViewport(t, s, i, r) {
    const n = this.viewport;
    t = Math.round(t), s = Math.round(s), i = Math.round(i), r = Math.round(r), (n.width !== i || n.height !== r || n.x !== t || n.y !== s) && (n.x = t, n.y = s, n.width = i, n.height = r, this.gl.viewport(t, s, i, r));
  }
  get size() {
    return this.current ? { x: 0, y: 0, width: this.current.width, height: this.current.height } : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
  }
  clear(t, s, i, r, n = Ki.COLOR | Ki.DEPTH) {
    const { gl: o } = this;
    o.clearColor(t, s, i, r), o.clear(n);
  }
  initFramebuffer(t) {
    const { gl: s } = this, i = new el(s.createFramebuffer());
    return i.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = i, this.managedFramebuffers.push(t), t.disposeRunner.add(this), i;
  }
  resizeFramebuffer(t) {
    const { gl: s } = this, i = t.glFramebuffers[this.CONTEXT_UID];
    i.stencil && (s.bindRenderbuffer(s.RENDERBUFFER, i.stencil), i.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, i.multisample, s.DEPTH24_STENCIL8, t.width, t.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, t.width, t.height));
    const r = t.colorTextures;
    let n = r.length;
    s.drawBuffers || (n = Math.min(n, 1));
    for (let o = 0; o < n; o++) {
      const a = r[o], h = a.parentTextureArray || a;
      this.renderer.texture.bind(h, 0), o === 0 && i.msaaBuffer && (s.bindRenderbuffer(s.RENDERBUFFER, i.msaaBuffer), s.renderbufferStorageMultisample(s.RENDERBUFFER, i.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height));
    }
    t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0);
  }
  updateFramebuffer(t, s) {
    const { gl: i } = this, r = t.glFramebuffers[this.CONTEXT_UID], n = t.colorTextures;
    let o = n.length;
    i.drawBuffers || (o = Math.min(o, 1)), r.multisample > 1 && this.canMultisampleFramebuffer(t) ? r.msaaBuffer = r.msaaBuffer || i.createRenderbuffer() : r.msaaBuffer && (i.deleteRenderbuffer(r.msaaBuffer), r.msaaBuffer = null, r.blitFramebuffer && (r.blitFramebuffer.dispose(), r.blitFramebuffer = null));
    const a = [];
    for (let h = 0; h < o; h++) {
      const l = n[h], c = l.parentTextureArray || l;
      this.renderer.texture.bind(c, 0), h === 0 && r.msaaBuffer ? (i.bindRenderbuffer(i.RENDERBUFFER, r.msaaBuffer), i.renderbufferStorageMultisample(i.RENDERBUFFER, r.multisample, c._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, r.msaaBuffer)) : (i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + h, l.target, c._glTextures[this.CONTEXT_UID].texture, s), a.push(i.COLOR_ATTACHMENT0 + h));
    }
    if (a.length > 1 && i.drawBuffers(a), t.depthTexture && this.writeDepthTexture) {
      const l = t.depthTexture;
      this.renderer.texture.bind(l, 0), i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, s);
    }
    (t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture) ? (r.stencil = r.stencil || i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, r.stencil), r.msaaBuffer ? i.renderbufferStorageMultisample(i.RENDERBUFFER, r.multisample, i.DEPTH24_STENCIL8, t.width, t.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t.width, t.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, r.stencil)) : r.stencil && (i.deleteRenderbuffer(r.stencil), r.stencil = null);
  }
  canMultisampleFramebuffer(t) {
    return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture;
  }
  detectSamples(t) {
    const { msaaSamples: s } = this;
    let i = nt.NONE;
    if (t <= 1 || s === null)
      return i;
    for (let r = 0; r < s.length; r++)
      if (s[r] <= t) {
        i = s[r];
        break;
      }
    return i === 1 && (i = nt.NONE), i;
  }
  blit(t, s, i) {
    const { current: r, renderer: n, gl: o, CONTEXT_UID: a } = this;
    if (n.context.webGLVersion !== 2 || !r)
      return;
    const h = r.glFramebuffers[a];
    if (!h)
      return;
    if (!t) {
      if (!h.msaaBuffer)
        return;
      const c = r.colorTextures[0];
      if (!c)
        return;
      h.blitFramebuffer || (h.blitFramebuffer = new fr(r.width, r.height), h.blitFramebuffer.addColorTexture(0, c)), t = h.blitFramebuffer, t.colorTextures[0] !== c && (t.colorTextures[0] = c, t.dirtyId++, t.dirtyFormat++), (t.width !== r.width || t.height !== r.height) && (t.width = r.width, t.height = r.height, t.dirtyId++, t.dirtySize++);
    }
    s || (s = sl, s.width = r.width, s.height = r.height), i || (i = s);
    const l = s.width === i.width && s.height === i.height;
    this.bind(t), o.bindFramebuffer(o.READ_FRAMEBUFFER, h.framebuffer), o.blitFramebuffer(s.left, s.top, s.right, s.bottom, i.left, i.top, i.right, i.bottom, o.COLOR_BUFFER_BIT, l ? o.NEAREST : o.LINEAR);
  }
  disposeFramebuffer(t, s) {
    const i = t.glFramebuffers[this.CONTEXT_UID], r = this.gl;
    if (!i)
      return;
    delete t.glFramebuffers[this.CONTEXT_UID];
    const n = this.managedFramebuffers.indexOf(t);
    n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), s || (r.deleteFramebuffer(i.framebuffer), i.msaaBuffer && r.deleteRenderbuffer(i.msaaBuffer), i.stencil && r.deleteRenderbuffer(i.stencil)), i.blitFramebuffer && this.disposeFramebuffer(i.blitFramebuffer, s);
  }
  disposeAll(t) {
    const s = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let i = 0; i < s.length; i++)
      this.disposeFramebuffer(s[i], t);
  }
  forceStencil() {
    const t = this.current;
    if (!t)
      return;
    const s = t.glFramebuffers[this.CONTEXT_UID];
    if (!s || s.stencil)
      return;
    t.stencil = !0;
    const i = t.width, r = t.height, n = this.gl, o = n.createRenderbuffer();
    n.bindRenderbuffer(n.RENDERBUFFER, o), s.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, s.multisample, n.DEPTH24_STENCIL8, i, r) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, i, r), s.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o);
  }
  reset() {
    this.current = this.unknownFramebuffer, this.viewport = new z();
  }
  destroy() {
    this.renderer = null;
  }
}
So.extension = {
  type: M.RendererSystem,
  name: "framebuffer"
};
k.add(So);
const Ni = { 5126: 4, 5123: 2, 5121: 1 };
class Ao {
  constructor(t) {
    this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {};
  }
  contextChange() {
    this.disposeAll(!0);
    const t = this.gl = this.renderer.gl, s = this.renderer.context;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, s.webGLVersion !== 2) {
      let i = this.renderer.context.extensions.vertexArrayObject;
      I.PREFER_ENV === Ie.WEBGL_LEGACY && (i = null), i ? (t.createVertexArray = () => i.createVertexArrayOES(), t.bindVertexArray = (r) => i.bindVertexArrayOES(r), t.deleteVertexArray = (r) => i.deleteVertexArrayOES(r)) : (this.hasVao = !1, t.createVertexArray = () => null, t.bindVertexArray = () => null, t.deleteVertexArray = () => null);
    }
    if (s.webGLVersion !== 2) {
      const i = t.getExtension("ANGLE_instanced_arrays");
      i ? (t.vertexAttribDivisor = (r, n) => i.vertexAttribDivisorANGLE(r, n), t.drawElementsInstanced = (r, n, o, a, h) => i.drawElementsInstancedANGLE(r, n, o, a, h), t.drawArraysInstanced = (r, n, o, a) => i.drawArraysInstancedANGLE(r, n, o, a)) : this.hasInstance = !1;
    }
    this.canUseUInt32ElementIndex = s.webGLVersion === 2 || !!s.extensions.uint32ElementIndex;
  }
  bind(t, s) {
    s = s || this.renderer.shader.shader;
    const { gl: i } = this;
    let r = t.glVertexArrayObjects[this.CONTEXT_UID], n = !1;
    r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}, n = !0);
    const o = r[s.program.id] || this.initGeometryVao(t, s, n);
    this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? i.bindVertexArray(o) : this.activateVao(t, s.program)), this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const t = this._activeGeometry, s = this.renderer.buffer;
    for (let i = 0; i < t.buffers.length; i++) {
      const r = t.buffers[i];
      s.update(r);
    }
  }
  checkCompatibility(t, s) {
    const i = t.attributes, r = s.attributeData;
    for (const n in r)
      if (!i[n])
        throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`);
  }
  getSignature(t, s) {
    const i = t.attributes, r = s.attributeData, n = ["g", t.id];
    for (const o in i)
      r[o] && n.push(o, r[o].location);
    return n.join("-");
  }
  initGeometryVao(t, s, i = !0) {
    const r = this.gl, n = this.CONTEXT_UID, o = this.renderer.buffer, a = s.program;
    a.glPrograms[n] || this.renderer.shader.generateProgram(s), this.checkCompatibility(t, a);
    const h = this.getSignature(t, a), l = t.glVertexArrayObjects[this.CONTEXT_UID];
    let c = l[h];
    if (c)
      return l[a.id] = c, c;
    const u = t.buffers, d = t.attributes, f = {}, p = {};
    for (const _ in u)
      f[_] = 0, p[_] = 0;
    for (const _ in d)
      !d[_].size && a.attributeData[_] ? d[_].size = a.attributeData[_].size : d[_].size || console.warn(`PIXI Geometry attribute '${_}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[_].buffer] += d[_].size * Ni[d[_].type];
    for (const _ in d) {
      const m = d[_], x = m.size;
      m.stride === void 0 && (f[m.buffer] === x * Ni[m.type] ? m.stride = 0 : m.stride = f[m.buffer]), m.start === void 0 && (m.start = p[m.buffer], p[m.buffer] += x * Ni[m.type]);
    }
    c = r.createVertexArray(), r.bindVertexArray(c);
    for (let _ = 0; _ < u.length; _++) {
      const m = u[_];
      o.bind(m), i && m._glBuffers[n].refCount++;
    }
    return this.activateVao(t, a), l[a.id] = c, l[h] = c, r.bindVertexArray(null), o.unbind(Yt.ARRAY_BUFFER), c;
  }
  disposeGeometry(t, s) {
    var a;
    if (!this.managedGeometries[t.id])
      return;
    delete this.managedGeometries[t.id];
    const i = t.glVertexArrayObjects[this.CONTEXT_UID], r = this.gl, n = t.buffers, o = (a = this.renderer) == null ? void 0 : a.buffer;
    if (t.disposeRunner.remove(this), !!i) {
      if (o)
        for (let h = 0; h < n.length; h++) {
          const l = n[h]._glBuffers[this.CONTEXT_UID];
          l && (l.refCount--, l.refCount === 0 && !s && o.dispose(n[h], s));
        }
      if (!s) {
        for (const h in i)
          if (h[0] === "g") {
            const l = i[h];
            this._activeVao === l && this.unbind(), r.deleteVertexArray(l);
          }
      }
      delete t.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(t) {
    const s = Object.keys(this.managedGeometries);
    for (let i = 0; i < s.length; i++)
      this.disposeGeometry(this.managedGeometries[s[i]], t);
  }
  activateVao(t, s) {
    const i = this.gl, r = this.CONTEXT_UID, n = this.renderer.buffer, o = t.buffers, a = t.attributes;
    t.indexBuffer && n.bind(t.indexBuffer);
    let h = null;
    for (const l in a) {
      const c = a[l], u = o[c.buffer], d = u._glBuffers[r];
      if (s.attributeData[l]) {
        h !== d && (n.bind(u), h = d);
        const f = s.attributeData[l].location;
        if (i.enableVertexAttribArray(f), i.vertexAttribPointer(f, c.size, c.type || i.FLOAT, c.normalized, c.stride, c.start), c.instance)
          if (this.hasInstance)
            i.vertexAttribDivisor(f, c.divisor);
          else
            throw new Error("geometry error, GPU Instancing is not supported on this device");
      }
    }
  }
  draw(t, s, i, r) {
    const { gl: n } = this, o = this._activeGeometry;
    if (o.indexBuffer) {
      const a = o.indexBuffer.data.BYTES_PER_ELEMENT, h = a === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
      a === 2 || a === 4 && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, s || o.indexBuffer.data.length, h, (i || 0) * a, r || 1) : n.drawElements(t, s || o.indexBuffer.data.length, h, (i || 0) * a) : console.warn("unsupported index buffer type: uint32");
    } else
      o.instanced ? n.drawArraysInstanced(t, i, s || o.getSize(), r || 1) : n.drawArrays(t, i, s || o.getSize());
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
  }
  destroy() {
    this.renderer = null;
  }
}
Ao.extension = {
  type: M.RendererSystem,
  name: "geometry"
};
k.add(Ao);
const Sn = new tt();
class Co {
  constructor(t, s) {
    this._texture = t, this.mapCoord = new tt(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof s > "u" ? 0.5 : s, this.isSimple = !1;
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture = t, this._textureID = -1;
  }
  multiplyUvs(t, s) {
    s === void 0 && (s = t);
    const i = this.mapCoord;
    for (let r = 0; r < t.length; r += 2) {
      const n = t[r], o = t[r + 1];
      s[r] = n * i.a + o * i.c + i.tx, s[r + 1] = n * i.b + o * i.d + i.ty;
    }
    return s;
  }
  update(t) {
    const s = this._texture;
    if (!s || !s.valid || !t && this._textureID === s._updateID)
      return !1;
    this._textureID = s._updateID, this._updateID++;
    const i = s._uvs;
    this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
    const r = s.orig, n = s.trim;
    n && (Sn.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Sn));
    const o = s.baseTexture, a = this.uClampFrame, h = this.clampMargin / o.resolution, l = this.clampOffset;
    return a[0] = (s._frame.x + h + l) / o.width, a[1] = (s._frame.y + h + l) / o.height, a[2] = (s._frame.x + s._frame.width - h + l) / o.width, a[3] = (s._frame.y + s._frame.height - h + l) / o.height, this.uClampOffset[0] = l / o.realWidth, this.uClampOffset[1] = l / o.realHeight, this.isSimple = s._frame.width === o.width && s._frame.height === o.height && s.rotate === 0, !0;
  }
}
var il = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`, rl = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class nl extends xt {
  constructor(t, s, i) {
    let r = null;
    typeof t != "string" && s === void 0 && i === void 0 && (r = t, t = void 0, s = void 0, i = void 0), super(t || rl, s || il, i), this.maskSprite = r, this.maskMatrix = new tt();
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(t) {
    this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1);
  }
  apply(t, s, i, r) {
    const n = this._maskSprite, o = n._texture;
    o.valid && (o.uvMatrix || (o.uvMatrix = new Co(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, s, i, r));
  }
}
class ol {
  constructor(t = null) {
    this.type = ut.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = xt.defaultMultisample, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null;
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(t) {
    t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null;
  }
  reset() {
    this.pooled && (this.maskObject = null, this.type = ut.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null;
  }
  copyCountersOrReset(t) {
    t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
  }
}
class Io {
  constructor(t) {
    this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
  }
  setMaskStack(t) {
    this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t);
  }
  push(t, s) {
    let i = s;
    if (!i.isMaskData) {
      const n = this.maskDataPool.pop() || new ol();
      n.pooled = !0, n.maskObject = s, i = n;
    }
    const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
    if (i.copyCountersOrReset(r), i._colorMask = r ? r._colorMask : 15, i.autoDetect && this.detect(i), i._target = t, i.type !== ut.SPRITE && this.maskStack.push(i), i.enabled)
      switch (i.type) {
        case ut.SCISSOR:
          this.renderer.scissor.push(i);
          break;
        case ut.STENCIL:
          this.renderer.stencil.push(i);
          break;
        case ut.SPRITE:
          i.copyCountersOrReset(null), this.pushSpriteMask(i);
          break;
        case ut.COLOR:
          this.pushColorMask(i);
          break;
      }
    i.type === ut.SPRITE && this.maskStack.push(i);
  }
  pop(t) {
    const s = this.maskStack.pop();
    if (!(!s || s._target !== t)) {
      if (s.enabled)
        switch (s.type) {
          case ut.SCISSOR:
            this.renderer.scissor.pop(s);
            break;
          case ut.STENCIL:
            this.renderer.stencil.pop(s.maskObject);
            break;
          case ut.SPRITE:
            this.popSpriteMask(s);
            break;
          case ut.COLOR:
            this.popColorMask(s);
            break;
        }
      if (s.reset(), s.pooled && this.maskDataPool.push(s), this.maskStack.length !== 0) {
        const i = this.maskStack[this.maskStack.length - 1];
        i.type === ut.SPRITE && i._filters && (i._filters[0].maskSprite = i.maskObject);
      }
    }
  }
  detect(t) {
    const s = t.maskObject;
    s ? s.isSprite ? t.type = ut.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = ut.SCISSOR : t.type = ut.STENCIL : t.type = ut.COLOR;
  }
  pushSpriteMask(t) {
    const { maskObject: s } = t, i = t._target;
    let r = t._filters;
    r || (r = this.alphaMaskPool[this.alphaMaskIndex], r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new nl()]));
    const n = this.renderer, o = n.renderTexture;
    let a, h;
    if (o.current) {
      const c = o.current;
      a = t.resolution || c.resolution, h = t.multisample ?? c.multisample;
    } else
      a = t.resolution || n.resolution, h = t.multisample ?? n.multisample;
    r[0].resolution = a, r[0].multisample = h, r[0].maskSprite = s;
    const l = i.filterArea;
    i.filterArea = s.getBounds(!0), n.filter.push(i, r), i.filterArea = l, t._filters || this.alphaMaskIndex++;
  }
  popSpriteMask(t) {
    this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null);
  }
  pushColorMask(t) {
    const s = t._colorMask, i = t._colorMask = s & t.colorMask;
    i !== s && this.renderer.gl.colorMask((i & 1) !== 0, (i & 2) !== 0, (i & 4) !== 0, (i & 8) !== 0);
  }
  popColorMask(t) {
    const s = t._colorMask, i = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
    i !== s && this.renderer.gl.colorMask((i & 1) !== 0, (i & 2) !== 0, (i & 4) !== 0, (i & 8) !== 0);
  }
  destroy() {
    this.renderer = null;
  }
}
Io.extension = {
  type: M.RendererSystem,
  name: "mask"
};
k.add(Io);
class Ro {
  constructor(t) {
    this.renderer = t, this.maskStack = [], this.glConst = 0;
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(t) {
    const { gl: s } = this.renderer, i = this.getStackLength();
    this.maskStack = t;
    const r = this.getStackLength();
    r !== i && (r === 0 ? s.disable(this.glConst) : (s.enable(this.glConst), this._useCurrent()));
  }
  _useCurrent() {
  }
  destroy() {
    this.renderer = null, this.maskStack = null;
  }
}
const An = new tt(), Cn = [], Vs = class extends Ro {
  constructor(e) {
    super(e), this.glConst = I.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
  }
  getStackLength() {
    const e = this.maskStack[this.maskStack.length - 1];
    return e ? e._scissorCounter : 0;
  }
  calcScissorRect(e) {
    if (e._scissorRectLocal)
      return;
    const t = e._scissorRect, { maskObject: s } = e, { renderer: i } = this, r = i.renderTexture, n = s.getBounds(!0, Cn.pop() ?? new z());
    this.roundFrameToPixels(n, r.current ? r.current.resolution : i.resolution, r.sourceFrame, r.destinationFrame, i.projection.transform), t && n.fit(t), e._scissorRectLocal = n;
  }
  static isMatrixRotated(e) {
    if (!e)
      return !1;
    const { a: t, b: s, c: i, d: r } = e;
    return (Math.abs(s) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(t) > 1e-4 || Math.abs(r) > 1e-4);
  }
  testScissor(e) {
    const { maskObject: t } = e;
    if (!t.isFastRect || !t.isFastRect() || Vs.isMatrixRotated(t.worldTransform) || Vs.isMatrixRotated(this.renderer.projection.transform))
      return !1;
    this.calcScissorRect(e);
    const s = e._scissorRectLocal;
    return s.width > 0 && s.height > 0;
  }
  roundFrameToPixels(e, t, s, i, r) {
    Vs.isMatrixRotated(r) || (r = r ? An.copyFrom(r) : An.identity(), r.translate(-s.x, -s.y).scale(i.width / s.width, i.height / s.height).translate(i.x, i.y), this.renderer.filter.transformAABB(r, e), e.fit(i), e.x = Math.round(e.x * t), e.y = Math.round(e.y * t), e.width = Math.round(e.width * t), e.height = Math.round(e.height * t));
  }
  push(e) {
    e._scissorRectLocal || this.calcScissorRect(e);
    const { gl: t } = this.renderer;
    e._scissorRect || t.enable(t.SCISSOR_TEST), e._scissorCounter++, e._scissorRect = e._scissorRectLocal, this._useCurrent();
  }
  pop(e) {
    const { gl: t } = this.renderer;
    e && Cn.push(e._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST);
  }
  _useCurrent() {
    const e = this.maskStack[this.maskStack.length - 1]._scissorRect;
    let t;
    this.renderer.renderTexture.current ? t = e.y : t = this.renderer.height - e.height - e.y, this.renderer.gl.scissor(e.x, t, e.width, e.height);
  }
};
let Mo = Vs;
Mo.extension = {
  type: M.RendererSystem,
  name: "scissor"
};
k.add(Mo);
class Po extends Ro {
  constructor(t) {
    super(t), this.glConst = I.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    return t ? t._stencilCounter : 0;
  }
  push(t) {
    const s = t.maskObject, { gl: i } = this.renderer, r = t._stencilCounter;
    r === 0 && (this.renderer.framebuffer.forceStencil(), i.clearStencil(0), i.clear(i.STENCIL_BUFFER_BIT), i.enable(i.STENCIL_TEST)), t._stencilCounter++;
    const n = t._colorMask;
    n !== 0 && (t._colorMask = 0, i.colorMask(!1, !1, !1, !1)), i.stencilFunc(i.EQUAL, r, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.INCR), s.renderable = !0, s.render(this.renderer), this.renderer.batch.flush(), s.renderable = !1, n !== 0 && (t._colorMask = n, i.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)), this._useCurrent();
  }
  pop(t) {
    const s = this.renderer.gl;
    if (this.getStackLength() === 0)
      s.disable(s.STENCIL_TEST);
    else {
      const i = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null, r = i ? i._colorMask : 15;
      r !== 0 && (i._colorMask = 0, s.colorMask(!1, !1, !1, !1)), s.stencilOp(s.KEEP, s.KEEP, s.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, r !== 0 && (i._colorMask = r, s.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)), this._useCurrent();
    }
  }
  _useCurrent() {
    const t = this.renderer.gl;
    t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
  }
}
Po.extension = {
  type: M.RendererSystem,
  name: "stencil"
};
k.add(Po);
class Bo {
  constructor(t) {
    this.renderer = t, this.plugins = {}, Object.defineProperties(this.plugins, {
      extract: {
        enumerable: !1,
        get() {
          return $("7.0.0", "renderer.plugins.extract has moved to renderer.extract"), t.extract;
        }
      },
      prepare: {
        enumerable: !1,
        get() {
          return $("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"), t.prepare;
        }
      },
      interaction: {
        enumerable: !1,
        get() {
          return $("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"), t.events;
        }
      }
    });
  }
  init() {
    const t = this.rendererPlugins;
    for (const s in t)
      this.plugins[s] = new t[s](this.renderer);
  }
  destroy() {
    for (const t in this.plugins)
      this.plugins[t].destroy(), this.plugins[t] = null;
  }
}
Bo.extension = {
  type: [
    M.RendererSystem,
    M.CanvasRendererSystem
  ],
  name: "_plugin"
};
k.add(Bo);
class Do {
  constructor(t) {
    this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new tt(), this.transform = null;
  }
  update(t, s, i, r) {
    this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = s || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r), this.transform && this.projectionMatrix.append(this.transform);
    const n = this.renderer;
    n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
  }
  calculateProjection(t, s, i, r) {
    const n = this.projectionMatrix, o = r ? -1 : 1;
    n.identity(), n.a = 1 / s.width * 2, n.d = o * (1 / s.height * 2), n.tx = -1 - s.x * n.a, n.ty = -o - s.y * n.d;
  }
  setTransform(t) {
  }
  destroy() {
    this.renderer = null;
  }
}
Do.extension = {
  type: M.RendererSystem,
  name: "projection"
};
k.add(Do);
const al = new Fr();
class Fo {
  constructor(t) {
    this.renderer = t, this._tempMatrix = new tt();
  }
  generateTexture(t, s) {
    const { region: i, ...r } = s || {}, n = i || t.getLocalBounds(null, !0);
    n.width === 0 && (n.width = 1), n.height === 0 && (n.height = 1);
    const o = pe.create({
      width: n.width,
      height: n.height,
      ...r
    });
    this._tempMatrix.tx = -n.x, this._tempMatrix.ty = -n.y;
    const a = t.transform;
    return t.transform = al, this.renderer.render(t, {
      renderTexture: o,
      transform: this._tempMatrix,
      skipUpdateTransform: !!t.parent,
      blit: !0
    }), t.transform = a, o;
  }
  destroy() {
  }
}
Fo.extension = {
  type: [
    M.RendererSystem,
    M.CanvasRendererSystem
  ],
  name: "textureGenerator"
};
k.add(Fo);
const _e = new z(), es = new z();
class Lo {
  constructor(t) {
    this.renderer = t, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new z(), this.destinationFrame = new z(), this.viewportFrame = new z();
  }
  bind(t = null, s, i) {
    const r = this.renderer;
    this.current = t;
    let n, o, a;
    t ? (n = t.baseTexture, a = n.resolution, s || (_e.width = t.frame.width, _e.height = t.frame.height, s = _e), i || (es.x = t.frame.x, es.y = t.frame.y, es.width = s.width, es.height = s.height, i = es), o = n.framebuffer) : (a = r.resolution, s || (_e.width = r._view.screen.width, _e.height = r._view.screen.height, s = _e), i || (i = _e, i.width = s.width, i.height = s.height));
    const h = this.viewportFrame;
    h.x = i.x * a, h.y = i.y * a, h.width = i.width * a, h.height = i.height * a, t || (h.y = r.view.height - (h.y + h.height)), h.ceil(), this.renderer.framebuffer.bind(o, h), this.renderer.projection.update(i, s, a, !o), t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(s), this.destinationFrame.copyFrom(i);
  }
  clear(t, s) {
    const i = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor, r = t ? Z.shared.setValue(t) : i, n = this.destinationFrame, o = this.current ? this.current.baseTexture : this.renderer._view.screen, a = n.width !== o.width || n.height !== o.height;
    if (a) {
      let { x: h, y: l, width: c, height: u } = this.viewportFrame;
      h = Math.round(h), l = Math.round(l), c = Math.round(c), u = Math.round(u), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(h, l, c, u);
    }
    this.renderer.framebuffer.clear(r.red, r.green, r.blue, r.alpha, s), a && this.renderer.scissor.pop();
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
Lo.extension = {
  type: M.RendererSystem,
  name: "renderTexture"
};
k.add(Lo);
class hl {
  constructor(t, s) {
    this.program = t, this.uniformData = s, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {};
  }
  destroy() {
    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null;
  }
}
function ll(e, t) {
  const s = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const n = t.getActiveAttrib(e, r);
    if (n.name.startsWith("gl_"))
      continue;
    const o = _o(t, n.type), a = {
      type: o,
      name: n.name,
      size: go(o),
      location: t.getAttribLocation(e, n.name)
    };
    s[n.name] = a;
  }
  return s;
}
function cl(e, t) {
  const s = {}, i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
  for (let r = 0; r < i; r++) {
    const n = t.getActiveUniform(e, r), o = n.name.replace(/\[.*?\]$/, ""), a = !!n.name.match(/\[.*?\]$/), h = _o(t, n.type);
    s[o] = {
      name: o,
      index: r,
      type: h,
      size: n.size,
      isArray: a,
      value: po(h, n.size)
    };
  }
  return s;
}
function ul(e, t) {
  var h;
  const s = yn(e, e.VERTEX_SHADER, t.vertexSrc), i = yn(e, e.FRAGMENT_SHADER, t.fragmentSrc), r = e.createProgram();
  e.attachShader(r, s), e.attachShader(r, i);
  const n = (h = t.extra) == null ? void 0 : h.transformFeedbackVaryings;
  if (n && (typeof e.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : e.transformFeedbackVaryings(r, n.names, n.bufferMode === "separate" ? e.SEPARATE_ATTRIBS : e.INTERLEAVED_ATTRIBS)), e.linkProgram(r), e.getProgramParameter(r, e.LINK_STATUS) || Gh(e, r, s, i), t.attributeData = ll(r, e), t.uniformData = cl(r, e), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
    const l = Object.keys(t.attributeData);
    l.sort((c, u) => c > u ? 1 : -1);
    for (let c = 0; c < l.length; c++)
      t.attributeData[l[c]].location = c, e.bindAttribLocation(r, c, l[c]);
    e.linkProgram(r);
  }
  e.deleteShader(s), e.deleteShader(i);
  const o = {};
  for (const l in t.uniformData) {
    const c = t.uniformData[l];
    o[l] = {
      location: e.getUniformLocation(r, l),
      value: po(c.type, c.size)
    };
  }
  return new hl(r, o);
}
function dl(e, t, s, i, r) {
  s.buffer.update(r);
}
const fl = {
  float: `
        data[offset] = v;
    `,
  vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
  vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
  vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
  mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
  mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
  mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
}, No = {
  float: 4,
  vec2: 8,
  vec3: 12,
  vec4: 16,
  int: 4,
  ivec2: 8,
  ivec3: 12,
  ivec4: 16,
  uint: 4,
  uvec2: 8,
  uvec3: 12,
  uvec4: 16,
  bool: 4,
  bvec2: 8,
  bvec3: 12,
  bvec4: 16,
  mat2: 16 * 2,
  mat3: 16 * 3,
  mat4: 16 * 4
};
function pl(e) {
  const t = e.map((n) => ({
    data: n,
    offset: 0,
    dataLen: 0,
    dirty: 0
  }));
  let s = 0, i = 0, r = 0;
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (s = No[o.data.type], o.data.size > 1 && (s = Math.max(s, 16) * o.data.size), o.dataLen = s, i % s !== 0 && i < 16) {
      const a = i % s % 16;
      i += a, r += a;
    }
    i + s > 16 ? (r = Math.ceil(r / 16) * 16, o.offset = r, r += s, i = s) : (o.offset = r, i += s, r += s);
  }
  return r = Math.ceil(r / 16) * 16, { uboElements: t, size: r };
}
function ml(e, t) {
  const s = [];
  for (const i in e)
    t[i] && s.push(t[i]);
  return s.sort((i, r) => i.index - r.index), s;
}
function gl(e, t) {
  if (!e.autoManage)
    return { size: 0, syncFunc: dl };
  const s = ml(e.uniforms, t), { uboElements: i, size: r } = pl(s), n = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
  for (let o = 0; o < i.length; o++) {
    const a = i[o], h = e.uniforms[a.data.name], l = a.data.name;
    let c = !1;
    for (let u = 0; u < $e.length; u++) {
      const d = $e[u];
      if (d.codeUbo && d.test(a.data, h)) {
        n.push(`offset = ${a.offset / 4};`, $e[u].codeUbo(a.data.name, h)), c = !0;
        break;
      }
    }
    if (!c)
      if (a.data.size > 1) {
        const u = go(a.data.type), d = Math.max(No[a.data.type] / 16, 1), f = u / d, p = (4 - f % 4) % 4;
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};

                t = 0;

                for(var i=0; i < ${a.data.size * d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `);
      } else {
        const u = fl[a.data.type];
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};
                ${u};
                `);
      }
  }
  return n.push(`
       renderer.buffer.update(buffer);
    `), {
    size: r,
    syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", n.join(`
`))
  };
}
let _l = 0;
const Fs = { textureCount: 0, uboCount: 0 };
class ko {
  constructor(t) {
    this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = _l++;
  }
  systemCheck() {
    if (!Xh())
      throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
  }
  contextChange(t) {
    this.gl = t, this.reset();
  }
  bind(t, s) {
    t.disposeRunner.add(this), t.uniforms.globals = this.renderer.globalUniforms;
    const i = t.program, r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
    return this.shader = t, this.program !== i && (this.program = i, this.gl.useProgram(r.program)), s || (Fs.textureCount = 0, Fs.uboCount = 0, this.syncUniformGroup(t.uniformGroup, Fs)), r;
  }
  setUniforms(t) {
    const s = this.shader.program, i = s.glPrograms[this.renderer.CONTEXT_UID];
    s.syncUniforms(i.uniformData, t, this.renderer);
  }
  syncUniformGroup(t, s) {
    const i = this.getGlProgram();
    (!t.static || t.dirtyId !== i.uniformDirtyGroups[t.id]) && (i.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, i, s));
  }
  syncUniforms(t, s, i) {
    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(s.uniformData, t.uniforms, this.renderer, i);
  }
  createSyncGroups(t) {
    const s = this.getSignature(t, this.shader.program.uniformData, "u");
    return this.cache[s] || (this.cache[s] = kh(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[s], t.syncUniforms[this.shader.program.id];
  }
  syncUniformBufferGroup(t, s) {
    const i = this.getGlProgram();
    if (!t.static || t.dirtyId !== 0 || !i.uniformGroups[t.id]) {
      t.dirtyId = 0;
      const r = i.uniformGroups[t.id] || this.createSyncBufferGroup(t, i, s);
      t.buffer.update(), r(i.uniformData, t.uniforms, this.renderer, Fs, t.buffer);
    }
    this.renderer.buffer.bindBufferBase(t.buffer, i.uniformBufferBindings[s]);
  }
  createSyncBufferGroup(t, s, i) {
    const { gl: r } = this.renderer;
    this.renderer.buffer.bind(t.buffer);
    const n = this.gl.getUniformBlockIndex(s.program, i);
    s.uniformBufferBindings[i] = this.shader.uniformBindCount, r.uniformBlockBinding(s.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
    const o = this.getSignature(t, this.shader.program.uniformData, "ubo");
    let a = this._uboCache[o];
    if (a || (a = this._uboCache[o] = gl(t, this.shader.program.uniformData)), t.autoManage) {
      const h = new Float32Array(a.size / 4);
      t.buffer.update(h);
    }
    return s.uniformGroups[t.id] = a.syncFunc, s.uniformGroups[t.id];
  }
  getSignature(t, s, i) {
    const r = t.uniforms, n = [`${i}-`];
    for (const o in r)
      n.push(o), s[o] && n.push(s[o].type);
    return n.join("-");
  }
  getGlProgram() {
    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
  }
  generateProgram(t) {
    const s = this.gl, i = t.program, r = ul(s, i);
    return i.glPrograms[this.renderer.CONTEXT_UID] = r, r;
  }
  reset() {
    this.program = null, this.shader = null;
  }
  disposeShader(t) {
    this.shader === t && (this.shader = null);
  }
  destroy() {
    this.renderer = null, this.destroyed = !0;
  }
}
ko.extension = {
  type: M.RendererSystem,
  name: "shader"
};
k.add(ko);
class pi {
  constructor(t) {
    this.renderer = t;
  }
  run(t) {
    const { renderer: s } = this;
    s.runners.init.emit(s.options), t.hello && console.log(`PixiJS 7.2.3 - ${s.rendererLogId} - https://pixijs.com`), s.resize(s.screen.width, s.screen.height);
  }
  destroy() {
  }
}
pi.defaultOptions = {
  hello: !1
};
pi.extension = {
  type: [
    M.RendererSystem,
    M.CanvasRendererSystem
  ],
  name: "startup"
};
k.add(pi);
function xl(e, t = []) {
  return t[G.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.ADD] = [e.ONE, e.ONE], t[G.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.NONE] = [0, 0], t[G.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE], t[G.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SRC_IN] = [e.DST_ALPHA, e.ZERO], t[G.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO], t[G.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[G.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE], t[G.DST_IN] = [e.ZERO, e.SRC_ALPHA], t[G.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA], t[G.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA], t[G.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[G.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD], t;
}
const yl = 0, vl = 1, bl = 2, Tl = 3, El = 4, wl = 5, pr = class {
  constructor() {
    this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = G.NONE, this._blendEq = !1, this.map = [], this.map[yl] = this.setBlend, this.map[vl] = this.setOffset, this.map[bl] = this.setCullFace, this.map[Tl] = this.setDepthTest, this.map[El] = this.setFrontFace, this.map[wl] = this.setDepthMask, this.checks = [], this.defaultState = new ne(), this.defaultState.blend = !0;
  }
  contextChange(e) {
    this.gl = e, this.blendModes = xl(e), this.set(this.defaultState), this.reset();
  }
  set(e) {
    if (e = e || this.defaultState, this.stateId !== e.data) {
      let t = this.stateId ^ e.data, s = 0;
      for (; t; )
        t & 1 && this.map[s].call(this, !!(e.data & 1 << s)), t = t >> 1, s++;
      this.stateId = e.data;
    }
    for (let t = 0; t < this.checks.length; t++)
      this.checks[t](this, e);
  }
  forceState(e) {
    e = e || this.defaultState;
    for (let t = 0; t < this.map.length; t++)
      this.map[t].call(this, !!(e.data & 1 << t));
    for (let t = 0; t < this.checks.length; t++)
      this.checks[t](this, e);
    this.stateId = e.data;
  }
  setBlend(e) {
    this.updateCheck(pr.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND);
  }
  setOffset(e) {
    this.updateCheck(pr.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
  }
  setDepthTest(e) {
    this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
  }
  setDepthMask(e) {
    this.gl.depthMask(e);
  }
  setCullFace(e) {
    this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE);
  }
  setFrontFace(e) {
    this.gl.frontFace(this.gl[e ? "CW" : "CCW"]);
  }
  setBlendMode(e) {
    if (e === this.blendMode)
      return;
    this.blendMode = e;
    const t = this.blendModes[e], s = this.gl;
    t.length === 2 ? s.blendFunc(t[0], t[1]) : s.blendFuncSeparate(t[0], t[1], t[2], t[3]), t.length === 6 ? (this._blendEq = !0, s.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, s.blendEquationSeparate(s.FUNC_ADD, s.FUNC_ADD));
  }
  setPolygonOffset(e, t) {
    this.gl.polygonOffset(e, t);
  }
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0);
  }
  updateCheck(e, t) {
    const s = this.checks.indexOf(e);
    t && s === -1 ? this.checks.push(e) : !t && s !== -1 && this.checks.splice(s, 1);
  }
  static checkBlendMode(e, t) {
    e.setBlendMode(t.blendMode);
  }
  static checkPolygonOffset(e, t) {
    e.setPolygonOffset(1, t.polygonOffset);
  }
  destroy() {
    this.gl = null;
  }
};
let Oo = pr;
Oo.extension = {
  type: M.RendererSystem,
  name: "state"
};
k.add(Oo);
class Sl extends Se {
  constructor() {
    super(...arguments), this.runners = {}, this._systemsHash = {};
  }
  setup(t) {
    this.addRunners(...t.runners);
    const s = (t.priority ?? []).filter((r) => t.systems[r]), i = [
      ...s,
      ...Object.keys(t.systems).filter((r) => !s.includes(r))
    ];
    for (const r of i)
      this.addSystem(t.systems[r], r);
  }
  addRunners(...t) {
    t.forEach((s) => {
      this.runners[s] = new Ot(s);
    });
  }
  addSystem(t, s) {
    const i = new t(this);
    if (this[s])
      throw new Error(`Whoops! The name "${s}" is already in use`);
    this[s] = i, this._systemsHash[s] = i;
    for (const r in this.runners)
      this.runners[r].add(i);
    return this;
  }
  emitWithCustomOptions(t, s) {
    const i = Object.keys(this._systemsHash);
    t.items.forEach((r) => {
      const n = i.find((o) => this._systemsHash[o] === r);
      r[t.name](s[n]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((t) => {
      t.destroy();
    }), this._systemsHash = {};
  }
}
const zs = class {
  constructor(e) {
    this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = zs.defaultMaxIdle, this.checkCountMax = zs.defaultCheckCountMax, this.mode = zs.defaultMode;
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== Mr.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
  }
  run() {
    const e = this.renderer.texture, t = e.managedTextures;
    let s = !1;
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      !r.framebuffer && this.count - r.touched > this.maxIdle && (e.destroyTexture(r, !0), t[i] = null, s = !0);
    }
    if (s) {
      let i = 0;
      for (let r = 0; r < t.length; r++)
        t[r] !== null && (t[i++] = t[r]);
      t.length = i;
    }
  }
  unload(e) {
    const t = this.renderer.texture, s = e._texture;
    s && !s.framebuffer && t.destroyTexture(s);
    for (let i = e.children.length - 1; i >= 0; i--)
      this.unload(e.children[i]);
  }
  destroy() {
    this.renderer = null;
  }
};
let Lt = zs;
Lt.defaultMode = Mr.AUTO;
Lt.defaultMaxIdle = 60 * 60;
Lt.defaultCheckCountMax = 60 * 10;
Lt.extension = {
  type: M.RendererSystem,
  name: "textureGC"
};
k.add(Lt);
class ki {
  constructor(t) {
    this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = O.UNSIGNED_BYTE, this.internalFormat = C.RGBA, this.samplerType = 0;
  }
}
function Al(e) {
  let t;
  return "WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext ? t = {
    [O.UNSIGNED_BYTE]: {
      [C.RGBA]: e.RGBA8,
      [C.RGB]: e.RGB8,
      [C.RG]: e.RG8,
      [C.RED]: e.R8,
      [C.RGBA_INTEGER]: e.RGBA8UI,
      [C.RGB_INTEGER]: e.RGB8UI,
      [C.RG_INTEGER]: e.RG8UI,
      [C.RED_INTEGER]: e.R8UI,
      [C.ALPHA]: e.ALPHA,
      [C.LUMINANCE]: e.LUMINANCE,
      [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA
    },
    [O.BYTE]: {
      [C.RGBA]: e.RGBA8_SNORM,
      [C.RGB]: e.RGB8_SNORM,
      [C.RG]: e.RG8_SNORM,
      [C.RED]: e.R8_SNORM,
      [C.RGBA_INTEGER]: e.RGBA8I,
      [C.RGB_INTEGER]: e.RGB8I,
      [C.RG_INTEGER]: e.RG8I,
      [C.RED_INTEGER]: e.R8I
    },
    [O.UNSIGNED_SHORT]: {
      [C.RGBA_INTEGER]: e.RGBA16UI,
      [C.RGB_INTEGER]: e.RGB16UI,
      [C.RG_INTEGER]: e.RG16UI,
      [C.RED_INTEGER]: e.R16UI,
      [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT16
    },
    [O.SHORT]: {
      [C.RGBA_INTEGER]: e.RGBA16I,
      [C.RGB_INTEGER]: e.RGB16I,
      [C.RG_INTEGER]: e.RG16I,
      [C.RED_INTEGER]: e.R16I
    },
    [O.UNSIGNED_INT]: {
      [C.RGBA_INTEGER]: e.RGBA32UI,
      [C.RGB_INTEGER]: e.RGB32UI,
      [C.RG_INTEGER]: e.RG32UI,
      [C.RED_INTEGER]: e.R32UI,
      [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT24
    },
    [O.INT]: {
      [C.RGBA_INTEGER]: e.RGBA32I,
      [C.RGB_INTEGER]: e.RGB32I,
      [C.RG_INTEGER]: e.RG32I,
      [C.RED_INTEGER]: e.R32I
    },
    [O.FLOAT]: {
      [C.RGBA]: e.RGBA32F,
      [C.RGB]: e.RGB32F,
      [C.RG]: e.RG32F,
      [C.RED]: e.R32F,
      [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT32F
    },
    [O.HALF_FLOAT]: {
      [C.RGBA]: e.RGBA16F,
      [C.RGB]: e.RGB16F,
      [C.RG]: e.RG16F,
      [C.RED]: e.R16F
    },
    [O.UNSIGNED_SHORT_5_6_5]: {
      [C.RGB]: e.RGB565
    },
    [O.UNSIGNED_SHORT_4_4_4_4]: {
      [C.RGBA]: e.RGBA4
    },
    [O.UNSIGNED_SHORT_5_5_5_1]: {
      [C.RGBA]: e.RGB5_A1
    },
    [O.UNSIGNED_INT_2_10_10_10_REV]: {
      [C.RGBA]: e.RGB10_A2,
      [C.RGBA_INTEGER]: e.RGB10_A2UI
    },
    [O.UNSIGNED_INT_10F_11F_11F_REV]: {
      [C.RGB]: e.R11F_G11F_B10F
    },
    [O.UNSIGNED_INT_5_9_9_9_REV]: {
      [C.RGB]: e.RGB9_E5
    },
    [O.UNSIGNED_INT_24_8]: {
      [C.DEPTH_STENCIL]: e.DEPTH24_STENCIL8
    },
    [O.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
      [C.DEPTH_STENCIL]: e.DEPTH32F_STENCIL8
    }
  } : t = {
    [O.UNSIGNED_BYTE]: {
      [C.RGBA]: e.RGBA,
      [C.RGB]: e.RGB,
      [C.ALPHA]: e.ALPHA,
      [C.LUMINANCE]: e.LUMINANCE,
      [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA
    },
    [O.UNSIGNED_SHORT_5_6_5]: {
      [C.RGB]: e.RGB
    },
    [O.UNSIGNED_SHORT_4_4_4_4]: {
      [C.RGBA]: e.RGBA
    },
    [O.UNSIGNED_SHORT_5_5_5_1]: {
      [C.RGBA]: e.RGBA
    }
  }, t;
}
class Uo {
  constructor(t) {
    this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new X(), this.hasIntegerTextures = !1;
  }
  contextChange() {
    const t = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = Al(t);
    const s = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = s;
    for (let r = 0; r < s; r++)
      this.boundTextures[r] = null;
    this.emptyTextures = {};
    const i = new ki(t.createTexture());
    t.bindTexture(t.TEXTURE_2D, i.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = i, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new ki(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
    for (let r = 0; r < 6; r++)
      t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
    for (let r = 0; r < this.boundTextures.length; r++)
      this.bind(null, r);
  }
  bind(t, s = 0) {
    const { gl: i } = this;
    if (t = t == null ? void 0 : t.castToBaseTexture(), t != null && t.valid && !t.parentTextureArray) {
      t.touched = this.renderer.textureGC.count;
      const r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
      this.boundTextures[s] !== t && (this.currentLocation !== s && (this.currentLocation = s, i.activeTexture(i.TEXTURE0 + s)), i.bindTexture(t.target, r.texture)), r.dirtyId !== t.dirtyId ? (this.currentLocation !== s && (this.currentLocation = s, i.activeTexture(i.TEXTURE0 + s)), this.updateTexture(t)) : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t), this.boundTextures[s] = t;
    } else
      this.currentLocation !== s && (this.currentLocation = s, i.activeTexture(i.TEXTURE0 + s)), i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture), this.boundTextures[s] = null;
  }
  reset() {
    this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
    for (let t = 0; t < this.boundTextures.length; t++)
      this.boundTextures[t] = this.unknownTexture;
  }
  unbind(t) {
    const { gl: s, boundTextures: i } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = !1;
      for (let r = 0; r < i.length; r++)
        i[r] === this.unknownTexture && this.bind(null, r);
    }
    for (let r = 0; r < i.length; r++)
      i[r] === t && (this.currentLocation !== r && (s.activeTexture(s.TEXTURE0 + r), this.currentLocation = r), s.bindTexture(t.target, this.emptyTextures[t.target].texture), i[r] = null);
  }
  ensureSamplerType(t) {
    const { boundTextures: s, hasIntegerTextures: i, CONTEXT_UID: r } = this;
    if (i)
      for (let n = t - 1; n >= 0; --n) {
        const o = s[n];
        o && o._glTextures[r].samplerType !== Zi.FLOAT && this.renderer.texture.unbind(o);
      }
  }
  initTexture(t) {
    const s = new ki(this.gl.createTexture());
    return s.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = s, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), s;
  }
  initTextureType(t, s) {
    var i;
    s.internalFormat = ((i = this.internalFormats[t.type]) == null ? void 0 : i[t.format]) ?? t.format, this.webGLVersion === 2 && t.type === O.HALF_FLOAT ? s.type = this.gl.HALF_FLOAT : s.type = t.type;
  }
  updateTexture(t) {
    var r;
    const s = t._glTextures[this.CONTEXT_UID];
    if (!s)
      return;
    const i = this.renderer;
    if (this.initTextureType(t, s), (r = t.resource) != null && r.upload(i, t, s))
      s.samplerType !== Zi.FLOAT && (this.hasIntegerTextures = !0);
    else {
      const n = t.realWidth, o = t.realHeight, a = i.gl;
      (s.width !== n || s.height !== o || s.dirtyId < 0) && (s.width = n, s.height = o, a.texImage2D(t.target, 0, s.internalFormat, n, o, 0, t.format, s.type, null));
    }
    t.dirtyStyleId !== s.dirtyStyleId && this.updateTextureStyle(t), s.dirtyId = t.dirtyId;
  }
  destroyTexture(t, s) {
    const { gl: i } = this;
    if (t = t.castToBaseTexture(), t._glTextures[this.CONTEXT_UID] && (this.unbind(t), i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !s)) {
      const r = this.managedTextures.indexOf(t);
      r !== -1 && Ve(this.managedTextures, r, 1);
    }
  }
  updateTextureStyle(t) {
    var i;
    const s = t._glTextures[this.CONTEXT_UID];
    s && ((t.mipmap === Kt.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? s.mipmap = !1 : s.mipmap = t.mipmap >= 1, this.webGLVersion !== 2 && !t.isPowerOfTwo ? s.wrapMode = ce.CLAMP : s.wrapMode = t.wrapMode, (i = t.resource) != null && i.style(this.renderer, t, s) || this.setStyle(t, s), s.dirtyStyleId = t.dirtyStyleId);
  }
  setStyle(t, s) {
    const i = this.gl;
    if (s.mipmap && t.mipmap !== Kt.ON_MANUAL && i.generateMipmap(t.target), i.texParameteri(t.target, i.TEXTURE_WRAP_S, s.wrapMode), i.texParameteri(t.target, i.TEXTURE_WRAP_T, s.wrapMode), s.mipmap) {
      i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === ee.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST);
      const r = this.renderer.context.extensions.anisotropicFiltering;
      if (r && t.anisotropicLevel > 0 && t.scaleMode === ee.LINEAR) {
        const n = Math.min(t.anisotropicLevel, i.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        i.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n);
      }
    } else
      i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode === ee.LINEAR ? i.LINEAR : i.NEAREST);
    i.texParameteri(t.target, i.TEXTURE_MAG_FILTER, t.scaleMode === ee.LINEAR ? i.LINEAR : i.NEAREST);
  }
  destroy() {
    this.renderer = null;
  }
}
Uo.extension = {
  type: M.RendererSystem,
  name: "texture"
};
k.add(Uo);
class Go {
  constructor(t) {
    this.renderer = t;
  }
  contextChange() {
    this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(t) {
    const { gl: s, CONTEXT_UID: i } = this, r = t._glTransformFeedbacks[i] || this.createGLTransformFeedback(t);
    s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, r);
  }
  unbind() {
    const { gl: t } = this;
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(t, s) {
    const { gl: i, renderer: r } = this;
    s && r.shader.bind(s), i.beginTransformFeedback(t);
  }
  endTransformFeedback() {
    const { gl: t } = this;
    t.endTransformFeedback();
  }
  createGLTransformFeedback(t) {
    const { gl: s, renderer: i, CONTEXT_UID: r } = this, n = s.createTransformFeedback();
    t._glTransformFeedbacks[r] = n, s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, n);
    for (let o = 0; o < t.buffers.length; o++) {
      const a = t.buffers[o];
      a && (i.buffer.update(a), a._glBuffers[r].refCount++, s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[r].buffer || null));
    }
    return s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), n;
  }
  disposeTransformFeedback(t, s) {
    const i = t._glTransformFeedbacks[this.CONTEXT_UID], r = this.gl;
    t.disposeRunner.remove(this);
    const n = this.renderer.buffer;
    if (n)
      for (let o = 0; o < t.buffers.length; o++) {
        const a = t.buffers[o];
        if (!a)
          continue;
        const h = a._glBuffers[this.CONTEXT_UID];
        h && (h.refCount--, h.refCount === 0 && !s && n.dispose(a, s));
      }
    i && (s || r.deleteTransformFeedback(i), delete t._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
Go.extension = {
  type: M.RendererSystem,
  name: "transformFeedback"
};
k.add(Go);
class mi {
  constructor(t) {
    this.renderer = t;
  }
  init(t) {
    this.screen = new z(0, 0, t.width, t.height), this.element = t.view || I.ADAPTER.createCanvas(), this.resolution = t.resolution || I.RESOLUTION, this.autoDensity = !!t.autoDensity;
  }
  resizeView(t, s) {
    this.element.width = Math.round(t * this.resolution), this.element.height = Math.round(s * this.resolution);
    const i = this.element.width / this.resolution, r = this.element.height / this.resolution;
    this.screen.width = i, this.screen.height = r, this.autoDensity && (this.element.style.width = `${i}px`, this.element.style.height = `${r}px`), this.renderer.emit("resize", i, r), this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(t) {
    var s;
    t && ((s = this.element.parentNode) == null || s.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null;
  }
}
mi.defaultOptions = {
  width: 800,
  height: 600,
  resolution: I.RESOLUTION,
  autoDensity: !1
};
mi.extension = {
  type: [
    M.RendererSystem,
    M.CanvasRendererSystem
  ],
  name: "_view"
};
k.add(mi);
I.PREFER_ENV = Ie.WEBGL2;
I.STRICT_TEXTURE_CACHE = !1;
I.RENDER_OPTIONS = {
  ...fi.defaultOptions,
  ...di.defaultOptions,
  ...mi.defaultOptions,
  ...pi.defaultOptions
};
Object.defineProperties(I, {
  WRAP_MODE: {
    get() {
      return X.defaultOptions.wrapMode;
    },
    set(e) {
      $("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), X.defaultOptions.wrapMode = e;
    }
  },
  SCALE_MODE: {
    get() {
      return X.defaultOptions.scaleMode;
    },
    set(e) {
      $("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), X.defaultOptions.scaleMode = e;
    }
  },
  MIPMAP_TEXTURES: {
    get() {
      return X.defaultOptions.mipmap;
    },
    set(e) {
      $("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), X.defaultOptions.mipmap = e;
    }
  },
  ANISOTROPIC_LEVEL: {
    get() {
      return X.defaultOptions.anisotropicLevel;
    },
    set(e) {
      $("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"), X.defaultOptions.anisotropicLevel = e;
    }
  },
  FILTER_RESOLUTION: {
    get() {
      return $("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), xt.defaultResolution;
    },
    set(e) {
      xt.defaultResolution = e;
    }
  },
  FILTER_MULTISAMPLE: {
    get() {
      return $("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), xt.defaultMultisample;
    },
    set(e) {
      xt.defaultMultisample = e;
    }
  },
  SPRITE_MAX_TEXTURES: {
    get() {
      return Ft.defaultMaxTextures;
    },
    set(e) {
      $("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), Ft.defaultMaxTextures = e;
    }
  },
  SPRITE_BATCH_SIZE: {
    get() {
      return Ft.defaultBatchSize;
    },
    set(e) {
      $("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), Ft.defaultBatchSize = e;
    }
  },
  CAN_UPLOAD_SAME_BUFFER: {
    get() {
      return Ft.canUploadSameBuffer;
    },
    set(e) {
      $("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), Ft.canUploadSameBuffer = e;
    }
  },
  GC_MODE: {
    get() {
      return Lt.defaultMode;
    },
    set(e) {
      $("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), Lt.defaultMode = e;
    }
  },
  GC_MAX_IDLE: {
    get() {
      return Lt.defaultMaxIdle;
    },
    set(e) {
      $("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), Lt.defaultMaxIdle = e;
    }
  },
  GC_MAX_CHECK_COUNT: {
    get() {
      return Lt.defaultCheckCountMax;
    },
    set(e) {
      $("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), Lt.defaultCheckCountMax = e;
    }
  },
  PRECISION_VERTEX: {
    get() {
      return Nt.defaultVertexPrecision;
    },
    set(e) {
      $("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), Nt.defaultVertexPrecision = e;
    }
  },
  PRECISION_FRAGMENT: {
    get() {
      return Nt.defaultFragmentPrecision;
    },
    set(e) {
      $("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), Nt.defaultFragmentPrecision = e;
    }
  }
});
var me = /* @__PURE__ */ ((e) => (e[e.INTERACTION = 50] = "INTERACTION", e[e.HIGH = 25] = "HIGH", e[e.NORMAL = 0] = "NORMAL", e[e.LOW = -25] = "LOW", e[e.UTILITY = -50] = "UTILITY", e))(me || {});
class Oi {
  constructor(t, s = null, i = 0, r = !1) {
    this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = s, this.priority = i, this.once = r;
  }
  match(t, s = null) {
    return this.fn === t && this.context === s;
  }
  emit(t) {
    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
    const s = this.next;
    return this.once && this.destroy(!0), this._destroyed && (this.next = null), s;
  }
  connect(t) {
    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
  }
  destroy(t = !1) {
    this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
    const s = this.next;
    return this.next = t ? null : s, this.previous = null, s;
  }
}
const wt = class {
  constructor() {
    this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new Oi(null, null, 1 / 0), this.deltaMS = 1 / wt.targetFPMS, this.elapsedMS = 1 / wt.targetFPMS, this._tick = (e) => {
      this._requestId = null, this.started && (this.update(e), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
    };
  }
  _requestIfNeeded() {
    this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
  }
  _cancelIfNeeded() {
    this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  add(e, t, s = me.NORMAL) {
    return this._addListener(new Oi(e, t, s));
  }
  addOnce(e, t, s = me.NORMAL) {
    return this._addListener(new Oi(e, t, s, !0));
  }
  _addListener(e) {
    let t = this._head.next, s = this._head;
    if (!t)
      e.connect(s);
    else {
      for (; t; ) {
        if (e.priority > t.priority) {
          e.connect(s);
          break;
        }
        s = t, t = t.next;
      }
      e.previous || e.connect(s);
    }
    return this._startIfPossible(), this;
  }
  remove(e, t) {
    let s = this._head.next;
    for (; s; )
      s.match(e, t) ? s = s.destroy() : s = s.next;
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head)
      return 0;
    let e = 0, t = this._head;
    for (; t = t.next; )
      e++;
    return e;
  }
  start() {
    this.started || (this.started = !0, this._requestIfNeeded());
  }
  stop() {
    this.started && (this.started = !1, this._cancelIfNeeded());
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let e = this._head.next;
      for (; e; )
        e = e.destroy(!0);
      this._head.destroy(), this._head = null;
    }
  }
  update(e = performance.now()) {
    let t;
    if (e > this.lastTime) {
      if (t = this.elapsedMS = e - this.lastTime, t > this._maxElapsedMS && (t = this._maxElapsedMS), t *= this.speed, this._minElapsedMS) {
        const r = e - this._lastFrame | 0;
        if (r < this._minElapsedMS)
          return;
        this._lastFrame = e - r % this._minElapsedMS;
      }
      this.deltaMS = t, this.deltaTime = this.deltaMS * wt.targetFPMS;
      const s = this._head;
      let i = s.next;
      for (; i; )
        i = i.emit(this.deltaTime);
      s.next || this._cancelIfNeeded();
    } else
      this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = e;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(e) {
    const t = Math.min(this.maxFPS, e), s = Math.min(Math.max(0, t) / 1e3, wt.targetFPMS);
    this._maxElapsedMS = 1 / s;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(e) {
    if (e === 0)
      this._minElapsedMS = 0;
    else {
      const t = Math.max(this.minFPS, e);
      this._minElapsedMS = 1 / (t / 1e3);
    }
  }
  static get shared() {
    if (!wt._shared) {
      const e = wt._shared = new wt();
      e.autoStart = !0, e._protected = !0;
    }
    return wt._shared;
  }
  static get system() {
    if (!wt._system) {
      const e = wt._system = new wt();
      e.autoStart = !0, e._protected = !0;
    }
    return wt._system;
  }
};
let lt = wt;
lt.targetFPMS = 0.06;
Object.defineProperties(I, {
  TARGET_FPMS: {
    get() {
      return lt.targetFPMS;
    },
    set(e) {
      $("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), lt.targetFPMS = e;
    }
  }
});
class Ho {
  static init(t) {
    t = Object.assign({
      autoStart: !0,
      sharedTicker: !1
    }, t), Object.defineProperty(this, "ticker", {
      set(s) {
        this._ticker && this._ticker.remove(this.render, this), this._ticker = s, s && s.add(this.render, this, me.LOW);
      },
      get() {
        return this._ticker;
      }
    }), this.stop = () => {
      this._ticker.stop();
    }, this.start = () => {
      this._ticker.start();
    }, this._ticker = null, this.ticker = t.sharedTicker ? lt.shared : new lt(), t.autoStart && this.start();
  }
  static destroy() {
    if (this._ticker) {
      const t = this._ticker;
      this.ticker = null, t.destroy();
    }
  }
}
Ho.extension = M.Application;
k.add(Ho);
const Xo = [];
k.handleByList(M.Renderer, Xo);
function Cl(e) {
  for (const t of Xo)
    if (t.test(e))
      return new t(e);
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var Il = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, Rl = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Ml = Il, Vo = Rl;
class zo {
  constructor(t) {
    this.renderer = t;
  }
  contextChange(t) {
    let s;
    if (this.renderer.context.webGLVersion === 1) {
      const i = t.getParameter(t.FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.FRAMEBUFFER, null), s = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.FRAMEBUFFER, i);
    } else {
      const i = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), s = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, i);
    }
    s >= nt.HIGH ? this.multisample = nt.HIGH : s >= nt.MEDIUM ? this.multisample = nt.MEDIUM : s >= nt.LOW ? this.multisample = nt.LOW : this.multisample = nt.NONE;
  }
  destroy() {
  }
}
zo.extension = {
  type: M.RendererSystem,
  name: "_multisample"
};
k.add(zo);
class Pl {
  constructor(t) {
    this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
  }
}
class $o {
  constructor(t) {
    this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {};
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(t) {
    const { gl: s, CONTEXT_UID: i } = this, r = t._glBuffers[i] || this.createGLBuffer(t);
    s.bindBuffer(t.type, r.buffer);
  }
  unbind(t) {
    const { gl: s } = this;
    s.bindBuffer(t, null);
  }
  bindBufferBase(t, s) {
    const { gl: i, CONTEXT_UID: r } = this;
    if (this.boundBufferBases[s] !== t) {
      const n = t._glBuffers[r] || this.createGLBuffer(t);
      this.boundBufferBases[s] = t, i.bindBufferBase(i.UNIFORM_BUFFER, s, n.buffer);
    }
  }
  bindBufferRange(t, s, i) {
    const { gl: r, CONTEXT_UID: n } = this;
    i = i || 0;
    const o = t._glBuffers[n] || this.createGLBuffer(t);
    r.bindBufferRange(r.UNIFORM_BUFFER, s || 0, o.buffer, i * 256, 256);
  }
  update(t) {
    const { gl: s, CONTEXT_UID: i } = this, r = t._glBuffers[i] || this.createGLBuffer(t);
    if (t._updateID !== r.updateID)
      if (r.updateID = t._updateID, s.bindBuffer(t.type, r.buffer), r.byteLength >= t.data.byteLength)
        s.bufferSubData(t.type, 0, t.data);
      else {
        const n = t.static ? s.STATIC_DRAW : s.DYNAMIC_DRAW;
        r.byteLength = t.data.byteLength, s.bufferData(t.type, t.data, n);
      }
  }
  dispose(t, s) {
    if (!this.managedBuffers[t.id])
      return;
    delete this.managedBuffers[t.id];
    const i = t._glBuffers[this.CONTEXT_UID], r = this.gl;
    t.disposeRunner.remove(this), i && (s || r.deleteBuffer(i.buffer), delete t._glBuffers[this.CONTEXT_UID]);
  }
  disposeAll(t) {
    const s = Object.keys(this.managedBuffers);
    for (let i = 0; i < s.length; i++)
      this.dispose(this.managedBuffers[s[i]], t);
  }
  createGLBuffer(t) {
    const { CONTEXT_UID: s, gl: i } = this;
    return t._glBuffers[s] = new Pl(i.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[s];
  }
}
$o.extension = {
  type: M.RendererSystem,
  name: "buffer"
};
k.add($o);
class Wo {
  constructor(t) {
    this.renderer = t;
  }
  render(t, s) {
    const i = this.renderer;
    let r, n, o, a;
    if (s && (r = s.renderTexture, n = s.clear, o = s.transform, a = s.skipUpdateTransform), this.renderingToScreen = !r, i.runners.prerender.emit(), i.emit("prerender"), i.projection.transform = o, !i.context.isLost) {
      if (r || (this.lastObjectRendered = t), !a) {
        const h = t.enableTempParent();
        t.updateTransform(), t.disableTempParent(h);
      }
      i.renderTexture.bind(r), i.batch.currentRenderer.start(), (n ?? i.background.clearBeforeRender) && i.renderTexture.clear(), t.render(i), i.batch.currentRenderer.flush(), r && (s.blit && i.framebuffer.blit(), r.baseTexture.update()), i.runners.postrender.emit(), i.projection.transform = null, i.emit("postrender");
    }
  }
  destroy() {
    this.renderer = null, this.lastObjectRendered = null;
  }
}
Wo.extension = {
  type: M.RendererSystem,
  name: "objectRenderer"
};
k.add(Wo);
const mr = class extends Sl {
  constructor(e) {
    super(), this.type = Jn.WEBGL, e = Object.assign({}, I.RENDER_OPTIONS, e), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new Ut({
      projectionMatrix: new tt()
    }, !0);
    const t = {
      runners: [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "update",
        "postrender",
        "prerender",
        "resize"
      ],
      systems: mr.__systems,
      priority: [
        "_view",
        "textureGenerator",
        "background",
        "_plugin",
        "startup",
        "context",
        "state",
        "texture",
        "buffer",
        "geometry",
        "framebuffer",
        "transformFeedback",
        "mask",
        "scissor",
        "stencil",
        "projection",
        "textureGC",
        "filter",
        "renderTexture",
        "batch",
        "objectRenderer",
        "_multisample"
      ]
    };
    this.setup(t), "useContextAlpha" in e && ($("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), e.premultipliedAlpha = e.useContextAlpha && e.useContextAlpha !== "notMultiplied", e.backgroundAlpha = e.useContextAlpha === !1 ? 1 : e.backgroundAlpha), this._plugin.rendererPlugins = mr.__plugins, this.options = e, this.startup.run(this.options);
  }
  static test(e) {
    return e != null && e.forceCanvas ? !1 : ih();
  }
  render(e, t) {
    this.objectRenderer.render(e, t);
  }
  resize(e, t) {
    this._view.resizeView(e, t);
  }
  reset() {
    return this.runners.reset.emit(), this;
  }
  clear() {
    this.renderTexture.bind(), this.renderTexture.clear();
  }
  destroy(e = !1) {
    this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, {
      _view: e
    }), super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(e) {
    this._view.resolution = e, this.runners.resolutionChange.emit(e);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    return $("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender;
  }
  get useContextAlpha() {
    return $("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha;
  }
  get preserveDrawingBuffer() {
    return $("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer;
  }
  get backgroundColor() {
    return $("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color;
  }
  set backgroundColor(e) {
    $("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = e;
  }
  get backgroundAlpha() {
    return $("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha;
  }
  set backgroundAlpha(e) {
    $("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = e;
  }
  get powerPreference() {
    return $("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference;
  }
  generateTexture(e, t) {
    return this.textureGenerator.generateTexture(e, t);
  }
};
let qe = mr;
qe.extension = {
  type: M.Renderer,
  priority: 1
};
qe.__plugins = {};
qe.__systems = {};
k.handleByMap(M.RendererPlugin, qe.__plugins);
k.handleByMap(M.RendererSystem, qe.__systems);
k.add(qe);
class jo extends ps {
  constructor(t, s) {
    const { width: i, height: r } = s || {};
    super(i, r), this.items = [], this.itemDirtyIds = [];
    for (let n = 0; n < t; n++) {
      const o = new X();
      this.items.push(o), this.itemDirtyIds.push(-2);
    }
    this.length = t, this._load = null, this.baseTexture = null;
  }
  initFromArray(t, s) {
    for (let i = 0; i < this.length; i++)
      t[i] && (t[i].castToBaseTexture ? this.addBaseTextureAt(t[i].castToBaseTexture(), i) : t[i] instanceof ps ? this.addResourceAt(t[i], i) : this.addResourceAt(lo(t[i], s), i));
  }
  dispose() {
    for (let t = 0, s = this.length; t < s; t++)
      this.items[t].destroy();
    this.items = null, this.itemDirtyIds = null, this._load = null;
  }
  addResourceAt(t, s) {
    if (!this.items[s])
      throw new Error(`Index ${s} is out of bounds`);
    return t.valid && !this.valid && this.resize(t.width, t.height), this.items[s].setResource(t), this;
  }
  bind(t) {
    if (this.baseTexture !== null)
      throw new Error("Only one base texture per TextureArray is allowed");
    super.bind(t);
    for (let s = 0; s < this.length; s++)
      this.items[s].parentTextureArray = t, this.items[s].on("update", t.update, t);
  }
  unbind(t) {
    super.unbind(t);
    for (let s = 0; s < this.length; s++)
      this.items[s].parentTextureArray = null, this.items[s].off("update", t.update, t);
  }
  load() {
    if (this._load)
      return this._load;
    const s = this.items.map((i) => i.resource).filter((i) => i).map((i) => i.load());
    return this._load = Promise.all(s).then(() => {
      const { realWidth: i, realHeight: r } = this.items[0];
      return this.resize(i, r), Promise.resolve(this);
    }), this._load;
  }
}
class Bl extends jo {
  constructor(t, s) {
    const { width: i, height: r } = s || {};
    let n, o;
    Array.isArray(t) ? (n = t, o = t.length) : o = t, super(o, { width: i, height: r }), n && this.initFromArray(n, s);
  }
  addBaseTextureAt(t, s) {
    if (t.resource)
      this.addResourceAt(t.resource, s);
    else
      throw new Error("ArrayResource does not support RenderTexture");
    return this;
  }
  bind(t) {
    super.bind(t), t.target = Ge.TEXTURE_2D_ARRAY;
  }
  upload(t, s, i) {
    const { length: r, itemDirtyIds: n, items: o } = this, { gl: a } = t;
    i.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, i.internalFormat, this._width, this._height, r, 0, s.format, i.type, null);
    for (let h = 0; h < r; h++) {
      const l = o[h];
      n[h] < l.dirtyId && (n[h] = l.dirtyId, l.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, h, l.resource.width, l.resource.height, 1, s.format, i.type, l.resource.source));
    }
    return !0;
  }
}
class Dl extends fe {
  constructor(t) {
    super(t);
  }
  static test(t) {
    const { OffscreenCanvas: s } = globalThis;
    return s && t instanceof s ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
  }
}
const ns = class extends jo {
  constructor(e, t) {
    const { width: s, height: i, autoLoad: r, linkBaseTexture: n } = t || {};
    if (e && e.length !== ns.SIDES)
      throw new Error(`Invalid length. Got ${e.length}, expected 6`);
    super(6, { width: s, height: i });
    for (let o = 0; o < ns.SIDES; o++)
      this.items[o].target = Ge.TEXTURE_CUBE_MAP_POSITIVE_X + o;
    this.linkBaseTexture = n !== !1, e && this.initFromArray(e, t), r !== !1 && this.load();
  }
  bind(e) {
    super.bind(e), e.target = Ge.TEXTURE_CUBE_MAP;
  }
  addBaseTextureAt(e, t, s) {
    if (s === void 0 && (s = this.linkBaseTexture), !this.items[t])
      throw new Error(`Index ${t} is out of bounds`);
    if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0)
      if (e.resource)
        this.addResourceAt(e.resource, t);
      else
        throw new Error("CubeResource does not support copying of renderTexture.");
    else
      e.target = Ge.TEXTURE_CUBE_MAP_POSITIVE_X + t, e.parentTextureArray = this.baseTexture, this.items[t] = e;
    return e.valid && !this.valid && this.resize(e.realWidth, e.realHeight), this.items[t] = e, this;
  }
  upload(e, t, s) {
    const i = this.itemDirtyIds;
    for (let r = 0; r < ns.SIDES; r++) {
      const n = this.items[r];
      (i[r] < n.dirtyId || s.dirtyId < t.dirtyId) && (n.valid && n.resource ? (n.resource.upload(e, n, s), i[r] = n.dirtyId) : i[r] < -1 && (e.gl.texImage2D(n.target, 0, s.internalFormat, t.realWidth, t.realHeight, 0, t.format, s.type, null), i[r] = -1));
    }
    return !0;
  }
  static test(e) {
    return Array.isArray(e) && e.length === ns.SIDES;
  }
};
let Yo = ns;
Yo.SIDES = 6;
class Ue extends fe {
  constructor(t, s) {
    s = s || {};
    let i, r;
    typeof t == "string" ? (i = Ue.EMPTY, r = t) : (i = t, r = null), super(i), this.url = r, this.crossOrigin = s.crossOrigin ?? !0, this.alphaMode = typeof s.alphaMode == "number" ? s.alphaMode : null, this._load = null, s.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise(async (t, s) => {
      if (this.url === null) {
        t(this);
        return;
      }
      try {
        const i = await I.ADAPTER.fetch(this.url, {
          mode: this.crossOrigin ? "cors" : "no-cors"
        });
        if (this.destroyed)
          return;
        const r = await i.blob();
        if (this.destroyed)
          return;
        const n = await createImageBitmap(r, {
          premultiplyAlpha: this.alphaMode === null || this.alphaMode === Gt.UNPACK ? "premultiply" : "none"
        });
        if (this.destroyed)
          return;
        this.source = n, this.update(), t(this);
      } catch (i) {
        if (this.destroyed)
          return;
        s(i), this.onError.emit(i);
      }
    }), this._load);
  }
  upload(t, s, i) {
    return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (s.alphaMode = this.alphaMode), super.upload(t, s, i)) : (this.load(), !1);
  }
  dispose() {
    this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null;
  }
  static test(t) {
    return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && (typeof t == "string" || t instanceof ImageBitmap);
  }
  static get EMPTY() {
    return Ue._EMPTY = Ue._EMPTY ?? I.ADAPTER.createCanvas(0, 0), Ue._EMPTY;
  }
}
const $s = class extends fe {
  constructor(e, t) {
    t = t || {}, super(I.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = e, this.scale = t.scale || 1, this._overrideWidth = t.width, this._overrideHeight = t.height, this._resolve = null, this._crossorigin = t.crossorigin, this._load = null, t.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise((e) => {
      if (this._resolve = () => {
        this.resize(this.source.width, this.source.height), e(this);
      }, $s.SVG_XML.test(this.svg.trim())) {
        if (!btoa)
          throw new Error("Your browser doesn't support base64 conversions.");
        this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
      }
      this._loadSvg();
    }), this._load);
  }
  _loadSvg() {
    const e = new Image();
    fe.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = (t) => {
      this._resolve && (e.onerror = null, this.onError.emit(t));
    }, e.onload = () => {
      if (!this._resolve)
        return;
      const t = e.width, s = e.height;
      if (!t || !s)
        throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
      let i = t * this.scale, r = s * this.scale;
      (this._overrideWidth || this._overrideHeight) && (i = this._overrideWidth || this._overrideHeight / s * t, r = this._overrideHeight || this._overrideWidth / t * s), i = Math.round(i), r = Math.round(r);
      const n = this.source;
      n.width = i, n.height = r, n._pixiId = `canvas_${Ce()}`, n.getContext("2d").drawImage(e, 0, 0, t, s, 0, 0, i, r), this._resolve(), this._resolve = null;
    };
  }
  static getSize(e) {
    const t = $s.SVG_SIZE.exec(e), s = {};
    return t && (s[t[1]] = Math.round(parseFloat(t[3])), s[t[5]] = Math.round(parseFloat(t[7]))), s;
  }
  dispose() {
    super.dispose(), this._resolve = null, this._crossorigin = null;
  }
  static test(e, t) {
    return t === "svg" || typeof e == "string" && e.startsWith("data:image/svg+xml") || typeof e == "string" && $s.SVG_XML.test(e);
  }
};
let ms = $s;
ms.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
ms.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
const gr = class extends fe {
  constructor(e, t) {
    if (t = t || {}, !(e instanceof HTMLVideoElement)) {
      const s = document.createElement("video");
      s.setAttribute("preload", "auto"), s.setAttribute("webkit-playsinline", ""), s.setAttribute("playsinline", ""), typeof e == "string" && (e = [e]);
      const i = e[0].src || e[0];
      fe.crossOrigin(s, i, t.crossorigin);
      for (let r = 0; r < e.length; ++r) {
        const n = document.createElement("source");
        let { src: o, mime: a } = e[r];
        o = o || e[r];
        const h = o.split("?").shift().toLowerCase(), l = h.slice(h.lastIndexOf(".") + 1);
        a = a || gr.MIME_TYPES[l] || `video/${l}`, n.src = o, n.type = a, s.appendChild(n);
      }
      e = s;
    }
    super(e), this.noSubImage = !0, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), t.autoLoad !== !1 && this.load();
  }
  update(e = 0) {
    if (!this.destroyed) {
      const t = lt.shared.elapsedMS * this.source.playbackRate;
      this._msToNextUpdate = Math.floor(this._msToNextUpdate - t), (!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
    }
  }
  load() {
    if (this._load)
      return this._load;
    const e = this.source;
    return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise((t) => {
      this.valid ? t(this) : (this._resolve = t, e.load());
    }), this._load;
  }
  _onError(e) {
    this.source.removeEventListener("error", this._onError, !0), this.onError.emit(e);
  }
  _isSourcePlaying() {
    const e = this.source;
    return !e.paused && !e.ended && this._isSourceReady();
  }
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  _onPlayStart() {
    this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (lt.shared.add(this.update, this), this._isConnectedToTicker = !0);
  }
  _onPlayStop() {
    this._isConnectedToTicker && (lt.shared.remove(this.update, this), this._isConnectedToTicker = !1);
  }
  _onCanPlay() {
    const e = this.source;
    e.removeEventListener("canplay", this._onCanPlay), e.removeEventListener("canplaythrough", this._onCanPlay);
    const t = this.valid;
    this.resize(e.videoWidth, e.videoHeight), !t && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play();
  }
  dispose() {
    this._isConnectedToTicker && (lt.shared.remove(this.update, this), this._isConnectedToTicker = !1);
    const e = this.source;
    e && (e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(e) {
    e !== this._autoUpdate && (this._autoUpdate = e, !this._autoUpdate && this._isConnectedToTicker ? (lt.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (lt.shared.add(this.update, this), this._isConnectedToTicker = !0));
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(e) {
    e !== this._updateFPS && (this._updateFPS = e);
  }
  static test(e, t) {
    return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement || gr.TYPES.includes(t);
  }
};
let Lr = gr;
Lr.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
Lr.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};
lr.push(Ue, vo, Dl, Lr, ms, _s, Yo, Bl);
class ti {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1;
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
  getRectangle(t) {
    return this.minX > this.maxX || this.minY > this.maxY ? z.EMPTY : (t = t || new z(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t);
  }
  addPoint(t) {
    this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y);
  }
  addPointMatrix(t, s) {
    const { a: i, b: r, c: n, d: o, tx: a, ty: h } = t, l = i * s.x + n * s.y + a, c = r * s.x + o * s.y + h;
    this.minX = Math.min(this.minX, l), this.maxX = Math.max(this.maxX, l), this.minY = Math.min(this.minY, c), this.maxY = Math.max(this.maxY, c);
  }
  addQuad(t) {
    let s = this.minX, i = this.minY, r = this.maxX, n = this.maxY, o = t[0], a = t[1];
    s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, o = t[2], a = t[3], s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, o = t[4], a = t[5], s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, o = t[6], a = t[7], s = o < s ? o : s, i = a < i ? a : i, r = o > r ? o : r, n = a > n ? a : n, this.minX = s, this.minY = i, this.maxX = r, this.maxY = n;
  }
  addFrame(t, s, i, r, n) {
    this.addFrameMatrix(t.worldTransform, s, i, r, n);
  }
  addFrameMatrix(t, s, i, r, n) {
    const o = t.a, a = t.b, h = t.c, l = t.d, c = t.tx, u = t.ty;
    let d = this.minX, f = this.minY, p = this.maxX, _ = this.maxY, m = o * s + h * i + c, x = a * s + l * i + u;
    d = m < d ? m : d, f = x < f ? x : f, p = m > p ? m : p, _ = x > _ ? x : _, m = o * r + h * i + c, x = a * r + l * i + u, d = m < d ? m : d, f = x < f ? x : f, p = m > p ? m : p, _ = x > _ ? x : _, m = o * s + h * n + c, x = a * s + l * n + u, d = m < d ? m : d, f = x < f ? x : f, p = m > p ? m : p, _ = x > _ ? x : _, m = o * r + h * n + c, x = a * r + l * n + u, d = m < d ? m : d, f = x < f ? x : f, p = m > p ? m : p, _ = x > _ ? x : _, this.minX = d, this.minY = f, this.maxX = p, this.maxY = _;
  }
  addVertexData(t, s, i) {
    let r = this.minX, n = this.minY, o = this.maxX, a = this.maxY;
    for (let h = s; h < i; h += 2) {
      const l = t[h], c = t[h + 1];
      r = l < r ? l : r, n = c < n ? c : n, o = l > o ? l : o, a = c > a ? c : a;
    }
    this.minX = r, this.minY = n, this.maxX = o, this.maxY = a;
  }
  addVertices(t, s, i, r) {
    this.addVerticesMatrix(t.worldTransform, s, i, r);
  }
  addVerticesMatrix(t, s, i, r, n = 0, o = n) {
    const a = t.a, h = t.b, l = t.c, c = t.d, u = t.tx, d = t.ty;
    let f = this.minX, p = this.minY, _ = this.maxX, m = this.maxY;
    for (let x = i; x < r; x += 2) {
      const v = s[x], g = s[x + 1], y = a * v + l * g + u, T = c * g + h * v + d;
      f = Math.min(f, y - n), _ = Math.max(_, y + n), p = Math.min(p, T - o), m = Math.max(m, T + o);
    }
    this.minX = f, this.minY = p, this.maxX = _, this.maxY = m;
  }
  addBounds(t) {
    const s = this.minX, i = this.minY, r = this.maxX, n = this.maxY;
    this.minX = t.minX < s ? t.minX : s, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n;
  }
  addBoundsMask(t, s) {
    const i = t.minX > s.minX ? t.minX : s.minX, r = t.minY > s.minY ? t.minY : s.minY, n = t.maxX < s.maxX ? t.maxX : s.maxX, o = t.maxY < s.maxY ? t.maxY : s.maxY;
    if (i <= n && r <= o) {
      const a = this.minX, h = this.minY, l = this.maxX, c = this.maxY;
      this.minX = i < a ? i : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c;
    }
  }
  addBoundsMatrix(t, s) {
    this.addFrameMatrix(s, t.minX, t.minY, t.maxX, t.maxY);
  }
  addBoundsArea(t, s) {
    const i = t.minX > s.x ? t.minX : s.x, r = t.minY > s.y ? t.minY : s.y, n = t.maxX < s.x + s.width ? t.maxX : s.x + s.width, o = t.maxY < s.y + s.height ? t.maxY : s.y + s.height;
    if (i <= n && r <= o) {
      const a = this.minX, h = this.minY, l = this.maxX, c = this.maxY;
      this.minX = i < a ? i : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c;
    }
  }
  pad(t = 0, s = t) {
    this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= s, this.maxY += s);
  }
  addFramePad(t, s, i, r, n, o) {
    t -= n, s -= o, i += n, r += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > i ? this.maxX : i, this.minY = this.minY < s ? this.minY : s, this.maxY = this.maxY > r ? this.maxY : r;
  }
}
class it extends Se {
  constructor() {
    super(), this.tempDisplayObjectParent = null, this.transform = new Fr(), this.alpha = 1, this.visible = !0, this.renderable = !0, this.cullable = !1, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new ti(), this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = !1, this.isSprite = !1, this.isMask = !1;
  }
  static mixin(t) {
    const s = Object.keys(t);
    for (let i = 0; i < s.length; ++i) {
      const r = s[i];
      Object.defineProperty(it.prototype, r, Object.getOwnPropertyDescriptor(t, r));
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
  }
  updateTransform() {
    this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
  }
  getBounds(t, s) {
    return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), s || (this._boundsRect || (this._boundsRect = new z()), s = this._boundsRect), this._bounds.getRectangle(s);
  }
  getLocalBounds(t) {
    t || (this._localBoundsRect || (this._localBoundsRect = new z()), t = this._localBoundsRect), this._localBounds || (this._localBounds = new ti());
    const s = this.transform, i = this.parent;
    this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
    const r = this._bounds, n = this._boundsID;
    this._bounds = this._localBounds;
    const o = this.getBounds(!1, t);
    return this.parent = i, this.transform = s, this._bounds = r, this._bounds.updateID += this._boundsID - n, o;
  }
  toGlobal(t, s, i = !1) {
    return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, s);
  }
  toLocal(t, s, i, r) {
    return s && (t = s.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i);
  }
  setParent(t) {
    if (!t || !t.addChild)
      throw new Error("setParent: Argument must be a Container");
    return t.addChild(this), t;
  }
  removeFromParent() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
  }
  setTransform(t = 0, s = 0, i = 1, r = 1, n = 0, o = 0, a = 0, h = 0, l = 0) {
    return this.position.x = t, this.position.y = s, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = a, this.pivot.x = h, this.pivot.y = l, this;
  }
  destroy(t) {
    this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.eventMode = "auto", this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new Fl()), this.tempDisplayObjectParent;
  }
  enableTempParent() {
    const t = this.parent;
    return this.parent = this._tempDisplayObjectParent, t;
  }
  disableTempParent(t) {
    this.parent = t;
  }
  get x() {
    return this.position.x;
  }
  set x(t) {
    this.transform.position.x = t;
  }
  get y() {
    return this.position.y;
  }
  set y(t) {
    this.transform.position.y = t;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(t) {
    this.transform.position.copyFrom(t);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(t) {
    this.transform.scale.copyFrom(t);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(t) {
    this.transform.pivot.copyFrom(t);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(t) {
    this.transform.skew.copyFrom(t);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(t) {
    this.transform.rotation = t;
  }
  get angle() {
    return this.transform.rotation * Mh;
  }
  set angle(t) {
    this.transform.rotation = t * Ph;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(t) {
    this._zIndex = t, this.parent && (this.parent.sortDirty = !0);
  }
  get worldVisible() {
    let t = this;
    do {
      if (!t.visible)
        return !1;
      t = t.parent;
    } while (t);
    return !0;
  }
  get mask() {
    return this._mask;
  }
  set mask(t) {
    if (this._mask !== t) {
      if (this._mask) {
        const s = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        s && (s._maskRefCount--, s._maskRefCount === 0 && (s.renderable = !0, s.isMask = !1));
      }
      if (this._mask = t, this._mask) {
        const s = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        s && (s._maskRefCount === 0 && (s.renderable = !1, s.isMask = !0), s._maskRefCount++);
      }
    }
  }
}
class Fl extends it {
  constructor() {
    super(...arguments), this.sortDirty = null;
  }
}
it.prototype.displayObjectUpdateTransform = it.prototype.updateTransform;
const Ll = new tt();
function Nl(e, t) {
  return e.zIndex === t.zIndex ? e._lastSortedIndex - t._lastSortedIndex : e.zIndex - t.zIndex;
}
const _r = class extends it {
  constructor() {
    super(), this.children = [], this.sortableChildren = _r.defaultSortableChildren, this.sortDirty = !1;
  }
  onChildrenChange(e) {
  }
  addChild(...e) {
    if (e.length > 1)
      for (let t = 0; t < e.length; t++)
        this.addChild(e[t]);
    else {
      const t = e[0];
      t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this);
    }
    return e[0];
  }
  addChildAt(e, t) {
    if (t < 0 || t > this.children.length)
      throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`);
    return e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.splice(t, 0, e), this._boundsID++, this.onChildrenChange(t), e.emit("added", this), this.emit("childAdded", e, this, t), e;
  }
  swapChildren(e, t) {
    if (e === t)
      return;
    const s = this.getChildIndex(e), i = this.getChildIndex(t);
    this.children[s] = t, this.children[i] = e, this.onChildrenChange(s < i ? s : i);
  }
  getChildIndex(e) {
    const t = this.children.indexOf(e);
    if (t === -1)
      throw new Error("The supplied DisplayObject must be a child of the caller");
    return t;
  }
  setChildIndex(e, t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
    const s = this.getChildIndex(e);
    Ve(this.children, s, 1), this.children.splice(t, 0, e), this.onChildrenChange(t);
  }
  getChildAt(e) {
    if (e < 0 || e >= this.children.length)
      throw new Error(`getChildAt: Index (${e}) does not exist.`);
    return this.children[e];
  }
  removeChild(...e) {
    if (e.length > 1)
      for (let t = 0; t < e.length; t++)
        this.removeChild(e[t]);
    else {
      const t = e[0], s = this.children.indexOf(t);
      if (s === -1)
        return null;
      t.parent = null, t.transform._parentID = -1, Ve(this.children, s, 1), this._boundsID++, this.onChildrenChange(s), t.emit("removed", this), this.emit("childRemoved", t, this, s);
    }
    return e[0];
  }
  removeChildAt(e) {
    const t = this.getChildAt(e);
    return t.parent = null, t.transform._parentID = -1, Ve(this.children, e, 1), this._boundsID++, this.onChildrenChange(e), t.emit("removed", this), this.emit("childRemoved", t, this, e), t;
  }
  removeChildren(e = 0, t = this.children.length) {
    const s = e, i = t, r = i - s;
    let n;
    if (r > 0 && r <= i) {
      n = this.children.splice(s, r);
      for (let o = 0; o < n.length; ++o)
        n[o].parent = null, n[o].transform && (n[o].transform._parentID = -1);
      this._boundsID++, this.onChildrenChange(e);
      for (let o = 0; o < n.length; ++o)
        n[o].emit("removed", this), this.emit("childRemoved", n[o], this, o);
      return n;
    } else if (r === 0 && this.children.length === 0)
      return [];
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  }
  sortChildren() {
    let e = !1;
    for (let t = 0, s = this.children.length; t < s; ++t) {
      const i = this.children[t];
      i._lastSortedIndex = t, !e && i.zIndex !== 0 && (e = !0);
    }
    e && this.children.length > 1 && this.children.sort(Nl), this.sortDirty = !1;
  }
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
    for (let e = 0, t = this.children.length; e < t; ++e) {
      const s = this.children[e];
      s.visible && s.updateTransform();
    }
  }
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      if (!(!t.visible || !t.renderable))
        if (t.calculateBounds(), t._mask) {
          const s = t._mask.isMaskData ? t._mask.maskObject : t._mask;
          s ? (s.calculateBounds(), this._bounds.addBoundsMask(t._bounds, s._bounds)) : this._bounds.addBounds(t._bounds);
        } else
          t.filterArea ? this._bounds.addBoundsArea(t._bounds, t.filterArea) : this._bounds.addBounds(t._bounds);
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(e, t = !1) {
    const s = super.getLocalBounds(e);
    if (!t)
      for (let i = 0, r = this.children.length; i < r; ++i) {
        const n = this.children[i];
        n.visible && n.updateTransform();
      }
    return s;
  }
  _calculateBounds() {
  }
  _renderWithCulling(e) {
    const t = e.renderTexture.sourceFrame;
    if (!(t.width > 0 && t.height > 0))
      return;
    let s, i;
    this.cullArea ? (s = this.cullArea, i = this.worldTransform) : this._render !== _r.prototype._render && (s = this.getBounds(!0));
    const r = e.projection.transform;
    if (r && (i ? (i = Ll.copyFrom(i), i.prepend(r)) : i = r), s && t.intersects(s, i))
      this._render(e);
    else if (this.cullArea)
      return;
    for (let n = 0, o = this.children.length; n < o; ++n) {
      const a = this.children[n], h = a.cullable;
      a.cullable = h || !this.cullArea, a.render(e), a.cullable = h;
    }
  }
  render(e) {
    var t;
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
      if (this._mask || (t = this.filters) != null && t.length)
        this.renderAdvanced(e);
      else if (this.cullable)
        this._renderWithCulling(e);
      else {
        this._render(e);
        for (let s = 0, i = this.children.length; s < i; ++s)
          this.children[s].render(e);
      }
  }
  renderAdvanced(e) {
    var r, n, o;
    const t = this.filters, s = this._mask;
    if (t) {
      this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
      for (let a = 0; a < t.length; a++)
        t[a].enabled && this._enabledFilters.push(t[a]);
    }
    const i = t && ((r = this._enabledFilters) == null ? void 0 : r.length) || s && (!s.isMaskData || s.enabled && (s.autoDetect || s.type !== ut.NONE));
    if (i && e.batch.flush(), t && ((n = this._enabledFilters) != null && n.length) && e.filter.push(this, this._enabledFilters), s && e.mask.push(this, this._mask), this.cullable)
      this._renderWithCulling(e);
    else {
      this._render(e);
      for (let a = 0, h = this.children.length; a < h; ++a)
        this.children[a].render(e);
    }
    i && e.batch.flush(), s && e.mask.pop(this), t && ((o = this._enabledFilters) != null && o.length) && e.filter.pop();
  }
  _render(e) {
  }
  destroy(e) {
    super.destroy(), this.sortDirty = !1;
    const t = typeof e == "boolean" ? e : e == null ? void 0 : e.children, s = this.removeChildren(0, this.children.length);
    if (t)
      for (let i = 0; i < s.length; ++i)
        s[i].destroy(e);
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(e) {
    const t = this.getLocalBounds().width;
    t !== 0 ? this.scale.x = e / t : this.scale.x = 1, this._width = e;
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(e) {
    const t = this.getLocalBounds().height;
    t !== 0 ? this.scale.y = e / t : this.scale.y = 1, this._height = e;
  }
};
let Tt = _r;
Tt.defaultSortableChildren = !1;
Tt.prototype.containerUpdateTransform = Tt.prototype.updateTransform;
Object.defineProperties(I, {
  SORTABLE_CHILDREN: {
    get() {
      return Tt.defaultSortableChildren;
    },
    set(e) {
      $("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), Tt.defaultSortableChildren = e;
    }
  }
});
const ss = new Y(), kl = new Uint16Array([0, 1, 2, 0, 2, 3]);
let Ke = class qo extends Tt {
  constructor(t) {
    super(), this._anchor = new le(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tintColor = new Z(16777215), this._tintRGB = null, this.tint = 16777215, this.blendMode = G.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = t || B.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = kl, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = I.ROUND_PIXELS;
  }
  _onTextureUpdate() {
    this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = he(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = he(this.scale.y) * this._height / this._texture.orig.height);
  }
  _onAnchorUpdate() {
    this._transformID = -1, this._transformTrimmedID = -1;
  }
  calculateVertices() {
    const t = this._texture;
    if (this._transformID === this.transform._worldID && this._textureID === t._updateID)
      return;
    this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
    const s = this.transform.worldTransform, i = s.a, r = s.b, n = s.c, o = s.d, a = s.tx, h = s.ty, l = this.vertexData, c = t.trim, u = t.orig, d = this._anchor;
    let f = 0, p = 0, _ = 0, m = 0;
    if (c ? (p = c.x - d._x * u.width, f = p + c.width, m = c.y - d._y * u.height, _ = m + c.height) : (p = -d._x * u.width, f = p + u.width, m = -d._y * u.height, _ = m + u.height), l[0] = i * p + n * m + a, l[1] = o * m + r * p + h, l[2] = i * f + n * m + a, l[3] = o * m + r * f + h, l[4] = i * f + n * _ + a, l[5] = o * _ + r * f + h, l[6] = i * p + n * _ + a, l[7] = o * _ + r * p + h, this._roundPixels) {
      const x = I.RESOLUTION;
      for (let v = 0; v < l.length; ++v)
        l[v] = Math.round(l[v] * x) / x;
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData)
      this.vertexTrimmedData = new Float32Array(8);
    else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
      return;
    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
    const t = this._texture, s = this.vertexTrimmedData, i = t.orig, r = this._anchor, n = this.transform.worldTransform, o = n.a, a = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty, d = -r._x * i.width, f = d + i.width, p = -r._y * i.height, _ = p + i.height;
    s[0] = o * d + h * p + c, s[1] = l * p + a * d + u, s[2] = o * f + h * p + c, s[3] = l * p + a * f + u, s[4] = o * f + h * _ + c, s[5] = l * _ + a * f + u, s[6] = o * d + h * _ + c, s[7] = l * _ + a * d + u;
  }
  _render(t) {
    this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const t = this._texture.trim, s = this._texture.orig;
    !t || t.width === s.width && t.height === s.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
  }
  getLocalBounds(t) {
    return this.children.length === 0 ? (this._localBounds || (this._localBounds = new ti()), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new z()), t = this._localBoundsRect), this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t);
  }
  containsPoint(t) {
    this.worldTransform.applyInverse(t, ss);
    const s = this._texture.orig.width, i = this._texture.orig.height, r = -s * this.anchor.x;
    let n = 0;
    return ss.x >= r && ss.x < r + s && (n = -i * this.anchor.y, ss.y >= n && ss.y < n + i);
  }
  destroy(t) {
    if (super.destroy(t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
      const i = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
      this._texture.destroy(!!i);
    }
    this._texture = null;
  }
  static from(t, s) {
    const i = t instanceof B ? t : B.from(t, s);
    return new qo(i);
  }
  set roundPixels(t) {
    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    const s = he(this.scale.x) || 1;
    this.scale.x = s * t / this._texture.orig.width, this._width = t;
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    const s = he(this.scale.y) || 1;
    this.scale.y = s * t / this._texture.orig.height, this._height = t;
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    this._anchor.copyFrom(t);
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber();
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || B.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)));
  }
};
const Ko = new tt();
it.prototype._cacheAsBitmap = !1;
it.prototype._cacheData = null;
it.prototype._cacheAsBitmapResolution = null;
it.prototype._cacheAsBitmapMultisample = null;
class Ol {
  constructor() {
    this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
  }
}
Object.defineProperties(it.prototype, {
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(e) {
      e !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = e, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
    }
  },
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(e) {
      e !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = e, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
    }
  },
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(e) {
      if (this._cacheAsBitmap === e)
        return;
      this._cacheAsBitmap = e;
      let t;
      e ? (this._cacheData || (this._cacheData = new Ol()), t = this._cacheData, t.originalRender = this.render, t.originalRenderCanvas = this.renderCanvas, t.originalUpdateTransform = this.updateTransform, t.originalCalculateBounds = this.calculateBounds, t.originalGetLocalBounds = this.getLocalBounds, t.originalDestroy = this.destroy, t.originalContainsPoint = this.containsPoint, t.originalMask = this._mask, t.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (t = this._cacheData, t.sprite && this._destroyCachedDisplayObject(), this.render = t.originalRender, this.renderCanvas = t.originalRenderCanvas, this.calculateBounds = t.originalCalculateBounds, this.getLocalBounds = t.originalGetLocalBounds, this.destroy = t.originalDestroy, this.updateTransform = t.originalUpdateTransform, this.containsPoint = t.originalContainsPoint, this._mask = t.originalMask, this.filterArea = t.originalFilterArea);
    }
  }
});
it.prototype._renderCached = function(t) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t));
};
it.prototype._initCachedDisplayObject = function(t) {
  var d, f;
  if ((d = this._cacheData) != null && d.sprite)
    return;
  const s = this.alpha;
  this.alpha = 1, t.batch.flush();
  const i = this.getLocalBounds(null, !0).clone();
  if ((f = this.filters) != null && f.length) {
    const p = this.filters[0].padding;
    i.pad(p);
  }
  i.ceil(I.RESOLUTION);
  const r = t.renderTexture.current, n = t.renderTexture.sourceFrame.clone(), o = t.renderTexture.destinationFrame.clone(), a = t.projection.transform, h = pe.create({
    width: i.width,
    height: i.height,
    resolution: this.cacheAsBitmapResolution || t.resolution,
    multisample: this.cacheAsBitmapMultisample ?? t.multisample
  }), l = `cacheAsBitmap_${Ce()}`;
  this._cacheData.textureCacheId = l, X.addToCache(h.baseTexture, l), B.addToCache(h, l);
  const c = this.transform.localTransform.copyTo(Ko).invert().translate(-i.x, -i.y);
  this.render = this._cacheData.originalRender, t.render(this, { renderTexture: h, clear: !0, transform: c, skipUpdateTransform: !1 }), t.framebuffer.blit(), t.projection.transform = a, t.renderTexture.bind(r, n, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = s;
  const u = new Ke(h);
  u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(i.x / i.width), u.anchor.y = -(i.y / i.height), u.alpha = s, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = u.containsPoint.bind(u);
};
it.prototype._renderCachedCanvas = function(t) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t));
};
it.prototype._initCachedDisplayObjectCanvas = function(t) {
  var c;
  if ((c = this._cacheData) != null && c.sprite)
    return;
  const s = this.getLocalBounds(null, !0), i = this.alpha;
  this.alpha = 1;
  const r = t.canvasContext.activeContext, n = t._projTransform;
  s.ceil(I.RESOLUTION);
  const o = pe.create({ width: s.width, height: s.height }), a = `cacheAsBitmap_${Ce()}`;
  this._cacheData.textureCacheId = a, X.addToCache(o.baseTexture, a), B.addToCache(o, a);
  const h = Ko;
  this.transform.localTransform.copyTo(h), h.invert(), h.tx -= s.x, h.ty -= s.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, { renderTexture: o, clear: !0, transform: h, skipUpdateTransform: !1 }), t.canvasContext.activeContext = r, t._projTransform = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = i;
  const l = new Ke(o);
  l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -(s.x / s.width), l.anchor.y = -(s.y / s.height), l.alpha = i, l._bounds = this._bounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = l.containsPoint.bind(l);
};
it.prototype._calculateCachedBounds = function() {
  this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
};
it.prototype._getCachedLocalBounds = function() {
  return this._cacheData.sprite.getLocalBounds(null);
};
it.prototype._destroyCachedDisplayObject = function() {
  this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, X.removeFromCache(this._cacheData.textureCacheId), B.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
};
it.prototype._cacheAsBitmapDestroy = function(t) {
  this.cacheAsBitmap = !1, this.destroy(t);
};
it.prototype.name = null;
Tt.prototype.getChildByName = function(t, s) {
  for (let i = 0, r = this.children.length; i < r; i++)
    if (this.children[i].name === t)
      return this.children[i];
  if (s)
    for (let i = 0, r = this.children.length; i < r; i++) {
      const n = this.children[i];
      if (!n.getChildByName)
        continue;
      const o = n.getChildByName(t, !0);
      if (o)
        return o;
    }
  return null;
};
it.prototype.getGlobalPosition = function(t = new Y(), s = !1) {
  return this.parent ? this.parent.toGlobal(this.position, t, s) : (t.x = this.position.x, t.y = this.position.y), t;
};
var Ul = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class Gl extends xt {
  constructor(t = 1) {
    super(Ml, Ul, { uAlpha: 1 }), this.alpha = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
const Hl = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
}, Xl = [
  "varying vec2 vBlurTexCoords[%size%];",
  "uniform sampler2D uSampler;",
  "void main(void)",
  "{",
  "    gl_FragColor = vec4(0.0);",
  "    %blur%",
  "}"
].join(`
`);
function Vl(e) {
  const t = Hl[e], s = t.length;
  let i = Xl, r = "";
  const n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let o;
  for (let a = 0; a < e; a++) {
    let h = n.replace("%index%", a.toString());
    o = a, a >= s && (o = e - a - 1), h = h.replace("%value%", t[o].toString()), r += h, r += `
`;
  }
  return i = i.replace("%blur%", r), i = i.replace("%size%", e.toString()), i;
}
const zl = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function $l(e, t) {
  const s = Math.ceil(e / 2);
  let i = zl, r = "", n;
  t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  for (let o = 0; o < e; o++) {
    let a = n.replace("%index%", o.toString());
    a = a.replace("%sampleIndex%", `${o - (s - 1)}.0`), r += a, r += `
`;
  }
  return i = i.replace("%blur%", r), i = i.replace("%size%", e.toString()), i;
}
class xr extends xt {
  constructor(t, s = 8, i = 4, r = xt.defaultResolution, n = 5) {
    const o = $l(n, t), a = Vl(n);
    super(o, a), this.horizontal = t, this.resolution = r, this._quality = 0, this.quality = i, this.blur = s;
  }
  apply(t, s, i, r) {
    if (i ? this.horizontal ? this.uniforms.strength = 1 / i.width * (i.width / s.width) : this.uniforms.strength = 1 / i.height * (i.height / s.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / s.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / s.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1)
      t.applyFilter(this, s, i, r);
    else {
      const n = t.getFilterTexture(), o = t.renderer;
      let a = s, h = n;
      this.state.blend = !1, t.applyFilter(this, a, h, $t.CLEAR);
      for (let l = 1; l < this.passes - 1; l++) {
        t.bindAndClear(a, $t.BLIT), this.uniforms.uSampler = h;
        const c = h;
        h = a, a = c, o.shader.bind(this), o.geometry.draw(5);
      }
      this.state.blend = !0, t.applyFilter(this, h, i, r), t.returnFilterTexture(n);
    }
  }
  get blur() {
    return this.strength;
  }
  set blur(t) {
    this.padding = 1 + Math.abs(t) * 2, this.strength = t;
  }
  get quality() {
    return this._quality;
  }
  set quality(t) {
    this._quality = t, this.passes = t;
  }
}
class Wl extends xt {
  constructor(t = 8, s = 4, i = xt.defaultResolution, r = 5) {
    super(), this._repeatEdgePixels = !1, this.blurXFilter = new xr(!0, t, s, i, r), this.blurYFilter = new xr(!1, t, s, i, r), this.resolution = i, this.quality = s, this.blur = t, this.repeatEdgePixels = !1;
  }
  apply(t, s, i, r) {
    const n = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength);
    if (n && o) {
      const a = t.getFilterTexture();
      this.blurXFilter.apply(t, s, a, $t.CLEAR), this.blurYFilter.apply(t, a, i, r), t.returnFilterTexture(a);
    } else
      o ? this.blurYFilter.apply(t, s, i, r) : this.blurXFilter.apply(t, s, i, r);
  }
  updatePadding() {
    this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
  }
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(t) {
    this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
  }
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(t) {
    this.blurXFilter.quality = this.blurYFilter.quality = t;
  }
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(t) {
    this.blurXFilter.blur = t, this.updatePadding();
  }
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(t) {
    this.blurYFilter.blur = t, this.updatePadding();
  }
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(t) {
    this.blurYFilter.blendMode = t;
  }
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(t) {
    this._repeatEdgePixels = t, this.updatePadding();
  }
}
var jl = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class yr extends xt {
  constructor() {
    const t = {
      m: new Float32Array([
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]),
      uAlpha: 1
    };
    super(Vo, jl, t), this.alpha = 1;
  }
  _loadMatrix(t, s = !1) {
    let i = t;
    s && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i;
  }
  _multiply(t, s, i) {
    return t[0] = s[0] * i[0] + s[1] * i[5] + s[2] * i[10] + s[3] * i[15], t[1] = s[0] * i[1] + s[1] * i[6] + s[2] * i[11] + s[3] * i[16], t[2] = s[0] * i[2] + s[1] * i[7] + s[2] * i[12] + s[3] * i[17], t[3] = s[0] * i[3] + s[1] * i[8] + s[2] * i[13] + s[3] * i[18], t[4] = s[0] * i[4] + s[1] * i[9] + s[2] * i[14] + s[3] * i[19] + s[4], t[5] = s[5] * i[0] + s[6] * i[5] + s[7] * i[10] + s[8] * i[15], t[6] = s[5] * i[1] + s[6] * i[6] + s[7] * i[11] + s[8] * i[16], t[7] = s[5] * i[2] + s[6] * i[7] + s[7] * i[12] + s[8] * i[17], t[8] = s[5] * i[3] + s[6] * i[8] + s[7] * i[13] + s[8] * i[18], t[9] = s[5] * i[4] + s[6] * i[9] + s[7] * i[14] + s[8] * i[19] + s[9], t[10] = s[10] * i[0] + s[11] * i[5] + s[12] * i[10] + s[13] * i[15], t[11] = s[10] * i[1] + s[11] * i[6] + s[12] * i[11] + s[13] * i[16], t[12] = s[10] * i[2] + s[11] * i[7] + s[12] * i[12] + s[13] * i[17], t[13] = s[10] * i[3] + s[11] * i[8] + s[12] * i[13] + s[13] * i[18], t[14] = s[10] * i[4] + s[11] * i[9] + s[12] * i[14] + s[13] * i[19] + s[14], t[15] = s[15] * i[0] + s[16] * i[5] + s[17] * i[10] + s[18] * i[15], t[16] = s[15] * i[1] + s[16] * i[6] + s[17] * i[11] + s[18] * i[16], t[17] = s[15] * i[2] + s[16] * i[7] + s[17] * i[12] + s[18] * i[17], t[18] = s[15] * i[3] + s[16] * i[8] + s[17] * i[13] + s[18] * i[18], t[19] = s[15] * i[4] + s[16] * i[9] + s[17] * i[14] + s[18] * i[19] + s[19], t;
  }
  _colorMatrix(t) {
    const s = new Float32Array(t);
    return s[4] /= 255, s[9] /= 255, s[14] /= 255, s[19] /= 255, s;
  }
  brightness(t, s) {
    const i = [
      t,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  tint(t, s) {
    const [i, r, n] = Z.shared.setValue(t).toArray(), o = [
      i,
      0,
      0,
      0,
      0,
      0,
      r,
      0,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(o, s);
  }
  greyscale(t, s) {
    const i = [
      t,
      t,
      t,
      0,
      0,
      t,
      t,
      t,
      0,
      0,
      t,
      t,
      t,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  blackAndWhite(t) {
    const s = [
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  hue(t, s) {
    t = (t || 0) / 180 * Math.PI;
    const i = Math.cos(t), r = Math.sin(t), n = Math.sqrt, o = 1 / 3, a = n(o), h = i + (1 - i) * o, l = o * (1 - i) - a * r, c = o * (1 - i) + a * r, u = o * (1 - i) + a * r, d = i + o * (1 - i), f = o * (1 - i) - a * r, p = o * (1 - i) - a * r, _ = o * (1 - i) + a * r, m = i + o * (1 - i), x = [
      h,
      l,
      c,
      0,
      0,
      u,
      d,
      f,
      0,
      0,
      p,
      _,
      m,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(x, s);
  }
  contrast(t, s) {
    const i = (t || 0) + 1, r = -0.5 * (i - 1), n = [
      i,
      0,
      0,
      0,
      r,
      0,
      i,
      0,
      0,
      r,
      0,
      0,
      i,
      0,
      r,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(n, s);
  }
  saturate(t = 0, s) {
    const i = t * 2 / 3 + 1, r = (i - 1) * -0.5, n = [
      i,
      r,
      r,
      0,
      0,
      r,
      i,
      r,
      0,
      0,
      r,
      r,
      i,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(n, s);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(t) {
    const s = [
      -1,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      -1,
      1,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  sepia(t) {
    const s = [
      0.393,
      0.7689999,
      0.18899999,
      0,
      0,
      0.349,
      0.6859999,
      0.16799999,
      0,
      0,
      0.272,
      0.5339999,
      0.13099999,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  technicolor(t) {
    const s = [
      1.9125277891456083,
      -0.8545344976951645,
      -0.09155508482755585,
      0,
      11.793603434377337,
      -0.3087833385928097,
      1.7658908555458428,
      -0.10601743074722245,
      0,
      -70.35205161461398,
      -0.231103377548616,
      -0.7501899197440212,
      1.847597816108189,
      0,
      30.950940869491138,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  polaroid(t) {
    const s = [
      1.438,
      -0.062,
      -0.062,
      0,
      0,
      -0.122,
      1.378,
      -0.122,
      0,
      0,
      -0.016,
      -0.016,
      1.483,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  toBGR(t) {
    const s = [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  kodachrome(t) {
    const s = [
      1.1285582396593525,
      -0.3967382283601348,
      -0.03992559172921793,
      0,
      63.72958762196502,
      -0.16404339962244616,
      1.0835251566291304,
      -0.05498805115633132,
      0,
      24.732407896706203,
      -0.16786010706155763,
      -0.5603416277695248,
      1.6014850761964943,
      0,
      35.62982807460946,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  browni(t) {
    const s = [
      0.5997023498159715,
      0.34553243048391263,
      -0.2708298674538042,
      0,
      47.43192855600873,
      -0.037703249837783157,
      0.8609577587992641,
      0.15059552388459913,
      0,
      -36.96841498319127,
      0.24113635128153335,
      -0.07441037908422492,
      0.44972182064877153,
      0,
      -7.562075277591283,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  vintage(t) {
    const s = [
      0.6279345635605994,
      0.3202183420819367,
      -0.03965408211312453,
      0,
      9.651285835294123,
      0.02578397704808868,
      0.6441188644374771,
      0.03259127616149294,
      0,
      7.462829176470591,
      0.0466055556782719,
      -0.0851232987247891,
      0.5241648018700465,
      0,
      5.159190588235296,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  colorTone(t, s, i, r, n) {
    t = t || 0.2, s = s || 0.15, i = i || 16770432, r = r || 3375104;
    const o = Z.shared, [a, h, l] = o.setValue(i).toArray(), [c, u, d] = o.setValue(r).toArray(), f = [
      0.3,
      0.59,
      0.11,
      0,
      0,
      a,
      h,
      l,
      t,
      0,
      c,
      u,
      d,
      s,
      0,
      a - c,
      h - u,
      l - d,
      0,
      0
    ];
    this._loadMatrix(f, n);
  }
  night(t, s) {
    t = t || 0.1;
    const i = [
      t * -2,
      -t,
      0,
      0,
      0,
      -t,
      0,
      t,
      0,
      0,
      0,
      t,
      t * 2,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  predator(t, s) {
    const i = [
      11.224130630493164 * t,
      -4.794486999511719 * t,
      -2.8746118545532227 * t,
      0 * t,
      0.40342438220977783 * t,
      -3.6330697536468506 * t,
      9.193157196044922 * t,
      -2.951810836791992 * t,
      0 * t,
      -1.316135048866272 * t,
      -3.2184197902679443 * t,
      -4.2375030517578125 * t,
      7.476448059082031 * t,
      0 * t,
      0.8044459223747253 * t,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(i, s);
  }
  lsd(t) {
    const s = [
      2,
      -0.4,
      0.5,
      0,
      0,
      -0.5,
      2,
      -0.4,
      0,
      0,
      -0.4,
      -0.5,
      3,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, t);
  }
  reset() {
    const t = [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(t, !1);
  }
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(t) {
    this.uniforms.m = t;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
yr.prototype.grayscale = yr.prototype.greyscale;
var Yl = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`, ql = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class Kl extends xt {
  constructor(t, s) {
    const i = new tt();
    t.renderable = !1, super(ql, Yl, {
      mapSampler: t._texture,
      filterMatrix: i,
      scale: { x: 1, y: 1 },
      rotation: new Float32Array([1, 0, 0, 1])
    }), this.maskSprite = t, this.maskMatrix = i, s == null && (s = 20), this.scale = new Y(s, s);
  }
  apply(t, s, i, r) {
    this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
    const n = this.maskSprite.worldTransform, o = Math.sqrt(n.a * n.a + n.b * n.b), a = Math.sqrt(n.c * n.c + n.d * n.d);
    o !== 0 && a !== 0 && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / a, this.uniforms.rotation[3] = n.d / a), t.applyFilter(this, s, i, r);
  }
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(t) {
    this.uniforms.mapSampler = t;
  }
}
var Zl = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`, Jl = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class Ql extends xt {
  constructor() {
    super(Jl, Zl);
  }
}
var tc = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class ec extends xt {
  constructor(t = 0.5, s = Math.random()) {
    super(Vo, tc, {
      uNoise: 0,
      uSeed: 0
    }), this.noise = t, this.seed = s;
  }
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(t) {
    this.uniforms.uNoise = t;
  }
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(t) {
    this.uniforms.uSeed = t;
  }
}
const In = {
  AlphaFilter: Gl,
  BlurFilter: Wl,
  BlurFilterPass: xr,
  ColorMatrixFilter: yr,
  DisplacementFilter: Kl,
  FXAAFilter: Ql,
  NoiseFilter: ec
};
Object.entries(In).forEach(([e, t]) => {
  Object.defineProperty(In, e, {
    get() {
      return $("7.1.0", `filters.${e} has moved to ${e}`), t;
    }
  });
});
class sc {
  constructor() {
    this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0;
  }
  init(t) {
    this.removeTickerListener(), this.events = t, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0;
  }
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(t) {
    this._pauseUpdate = t;
  }
  addTickerListener() {
    this.tickerAdded || !this.domElement || (lt.system.add(this.tickerUpdate, this, me.INTERACTION), this.tickerAdded = !0);
  }
  removeTickerListener() {
    this.tickerAdded && (lt.system.remove(this.tickerUpdate, this), this.tickerAdded = !1);
  }
  pointerMoved() {
    this._didMove = !0;
  }
  update() {
    if (!this.domElement || this._pauseUpdate)
      return;
    if (this._didMove) {
      this._didMove = !1;
      return;
    }
    const t = this.events.rootPointerEvent;
    this.events.supportsTouchEvents && t.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
      clientX: t.clientX,
      clientY: t.clientY
    }));
  }
  tickerUpdate(t) {
    this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.update());
  }
}
const ae = new sc();
class xs {
  constructor(t) {
    this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = xs.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new Y(), this.page = new Y(), this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t;
  }
  get layerX() {
    return this.layer.x;
  }
  get layerY() {
    return this.layer.y;
  }
  get pageX() {
    return this.page.x;
  }
  get pageY() {
    return this.page.y;
  }
  get data() {
    return this;
  }
  composedPath() {
    return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
  }
  initEvent(t, s, i) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  initUIEvent(t, s, i, r, n) {
    throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  preventDefault() {
    this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0;
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class ei extends xs {
  constructor() {
    super(...arguments), this.client = new Y(), this.movement = new Y(), this.offset = new Y(), this.global = new Y(), this.screen = new Y();
  }
  get clientX() {
    return this.client.x;
  }
  get clientY() {
    return this.client.y;
  }
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get movementX() {
    return this.movement.x;
  }
  get movementY() {
    return this.movement.y;
  }
  get offsetX() {
    return this.offset.x;
  }
  get offsetY() {
    return this.offset.y;
  }
  get globalX() {
    return this.global.x;
  }
  get globalY() {
    return this.global.y;
  }
  get screenX() {
    return this.screen.x;
  }
  get screenY() {
    return this.screen.y;
  }
  getLocalPosition(t, s, i) {
    return t.worldTransform.applyInverse(i || this.global, s);
  }
  getModifierState(t) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t);
  }
  initMouseEvent(t, s, i, r, n, o, a, h, l, c, u, d, f, p, _) {
    throw new Error("Method not implemented.");
  }
}
class Pt extends ei {
  constructor() {
    super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1;
  }
  getCoalescedEvents() {
    return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : [];
  }
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
}
class We extends ei {
  constructor() {
    super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2;
  }
}
We.DOM_DELTA_PIXEL = 0;
We.DOM_DELTA_LINE = 1;
We.DOM_DELTA_PAGE = 2;
const ic = 2048, rc = new Y(), Ui = new Y();
class nc {
  constructor(t) {
    this.dispatch = new Se(), this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = {
      trackingData: {}
    }, this.eventPool = /* @__PURE__ */ new Map(), this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(t, s) {
    this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({
      fn: s,
      priority: 0
    }), this.mappingTable[t].sort((i, r) => i.priority - r.priority);
  }
  dispatchEvent(t, s) {
    t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, s), this.dispatch.emit(s || t.type, t);
  }
  mapEvent(t) {
    if (!this.rootTarget)
      return;
    const s = this.mappingTable[t.type];
    if (s)
      for (let i = 0, r = s.length; i < r; i++)
        s[i].fn(t);
    else
      console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`);
  }
  hitTest(t, s) {
    ae.pauseUpdate = !0;
    const r = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", n = this[r](this.rootTarget, this.rootTarget.eventMode, rc.set(t, s), this.hitTestFn, this.hitPruneFn);
    return n && n[0];
  }
  propagate(t, s) {
    if (!t.target)
      return;
    const i = t.composedPath();
    t.eventPhase = t.CAPTURING_PHASE;
    for (let r = 0, n = i.length - 1; r < n; r++)
      if (t.currentTarget = i[r], this.notifyTarget(t, s), t.propagationStopped || t.propagationImmediatelyStopped)
        return;
    if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, s), !(t.propagationStopped || t.propagationImmediatelyStopped)) {
      t.eventPhase = t.BUBBLING_PHASE;
      for (let r = i.length - 2; r >= 0; r--)
        if (t.currentTarget = i[r], this.notifyTarget(t, s), t.propagationStopped || t.propagationImmediatelyStopped)
          return;
    }
  }
  all(t, s, i = this._allInteractiveElements) {
    if (i.length === 0)
      return;
    t.eventPhase = t.BUBBLING_PHASE;
    const r = Array.isArray(s) ? s : [s];
    for (let n = i.length - 1; n >= 0; n--)
      r.forEach((o) => {
        t.currentTarget = i[n], this.notifyTarget(t, o);
      });
  }
  propagationPath(t) {
    const s = [t];
    for (let i = 0; i < ic && t !== this.rootTarget; i++) {
      if (!t.parent)
        throw new Error("Cannot find propagation path to disconnected target");
      s.push(t.parent), t = t.parent;
    }
    return s.reverse(), s;
  }
  hitTestMoveRecursive(t, s, i, r, n, o = !1) {
    if (this._interactivePrune(t))
      return null;
    if ((t.eventMode === "dynamic" || s === "dynamic") && (ae.pauseUpdate = !1), t.interactiveChildren && t.children) {
      const l = t.children;
      for (let c = l.length - 1; c >= 0; c--) {
        const u = l[c], d = this.hitTestMoveRecursive(u, this._isInteractive(s) ? s : u.eventMode, i, r, n, n(t, i));
        if (d) {
          if (d.length > 0 && !d[d.length - 1].parent)
            continue;
          const f = t.isInteractive();
          (d.length > 0 || f) && (f && this._allInteractiveElements.push(t), d.push(t)), this._hitElements.length === 0 && (this._hitElements = d);
        }
      }
    }
    const a = this._isInteractive(s), h = t.isInteractive();
    return h && h && this._allInteractiveElements.push(t), o || this._hitElements.length > 0 ? null : a && !n(t, i) && r(t, i) ? h ? [t] : [] : null;
  }
  hitTestRecursive(t, s, i, r, n) {
    if (this._interactivePrune(t) || n(t, i))
      return null;
    if ((t.eventMode === "dynamic" || s === "dynamic") && (ae.pauseUpdate = !1), t.interactiveChildren && t.children) {
      const h = t.children;
      for (let l = h.length - 1; l >= 0; l--) {
        const c = h[l], u = this.hitTestRecursive(c, this._isInteractive(s) ? s : c.eventMode, i, r, n);
        if (u) {
          if (u.length > 0 && !u[u.length - 1].parent)
            continue;
          const d = t.isInteractive();
          return (u.length > 0 || d) && u.push(t), u;
        }
      }
    }
    const o = this._isInteractive(s), a = t.isInteractive();
    return o && r(t, i) ? a ? [t] : [] : null;
  }
  _isInteractive(t) {
    return t === "static" || t === "dynamic";
  }
  _interactivePrune(t) {
    return !!(!t || t.isMask || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren || t.isMask);
  }
  hitPruneFn(t, s) {
    var i;
    if (t.hitArea && (t.worldTransform.applyInverse(s, Ui), !t.hitArea.contains(Ui.x, Ui.y)))
      return !0;
    if (t._mask) {
      const r = t._mask.isMaskData ? t._mask.maskObject : t._mask;
      if (r && !((i = r.containsPoint) != null && i.call(r, s)))
        return !0;
    }
    return !1;
  }
  hitTestFn(t, s) {
    return t.eventMode === "passive" ? !1 : t.hitArea ? !0 : t.containsPoint ? t.containsPoint(s) : !1;
  }
  notifyTarget(t, s) {
    var n, o;
    s = s ?? t.type;
    const i = `on${s}`;
    (o = (n = t.currentTarget)[i]) == null || o.call(n, t);
    const r = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${s}capture` : s;
    this.notifyListeners(t, r), t.eventPhase === t.AT_TARGET && this.notifyListeners(t, s);
  }
  mapPointerDown(t) {
    if (!(t instanceof Pt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.createPointerEvent(t);
    if (this.dispatchEvent(s, "pointerdown"), s.pointerType === "touch")
      this.dispatchEvent(s, "touchstart");
    else if (s.pointerType === "mouse" || s.pointerType === "pen") {
      const r = s.button === 2;
      this.dispatchEvent(s, r ? "rightdown" : "mousedown");
    }
    const i = this.trackingData(t.pointerId);
    i.pressTargetsByButton[t.button] = s.composedPath(), this.freeEvent(s);
  }
  mapPointerMove(t) {
    var h, l;
    if (!(t instanceof Pt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0;
    const s = this.createPointerEvent(t);
    this._isPointerMoveEvent = !1;
    const i = s.pointerType === "mouse" || s.pointerType === "pen", r = this.trackingData(t.pointerId), n = this.findMountedTarget(r.overTargets);
    if (((h = r.overTargets) == null ? void 0 : h.length) > 0 && n !== s.target) {
      const c = t.type === "mousemove" ? "mouseout" : "pointerout", u = this.createPointerEvent(t, c, n);
      if (this.dispatchEvent(u, "pointerout"), i && this.dispatchEvent(u, "mouseout"), !s.composedPath().includes(n)) {
        const d = this.createPointerEvent(t, "pointerleave", n);
        for (d.eventPhase = d.AT_TARGET; d.target && !s.composedPath().includes(d.target); )
          d.currentTarget = d.target, this.notifyTarget(d), i && this.notifyTarget(d, "mouseleave"), d.target = d.target.parent;
        this.freeEvent(d);
      }
      this.freeEvent(u);
    }
    if (n !== s.target) {
      const c = t.type === "mousemove" ? "mouseover" : "pointerover", u = this.clonePointerEvent(s, c);
      this.dispatchEvent(u, "pointerover"), i && this.dispatchEvent(u, "mouseover");
      let d = n == null ? void 0 : n.parent;
      for (; d && d !== this.rootTarget.parent && d !== s.target; )
        d = d.parent;
      if (!d || d === this.rootTarget.parent) {
        const p = this.clonePointerEvent(s, "pointerenter");
        for (p.eventPhase = p.AT_TARGET; p.target && p.target !== n && p.target !== this.rootTarget.parent; )
          p.currentTarget = p.target, this.notifyTarget(p), i && this.notifyTarget(p, "mouseenter"), p.target = p.target.parent;
        this.freeEvent(p);
      }
      this.freeEvent(u);
    }
    const o = [], a = this.enableGlobalMoveEvents ?? !0;
    this.moveOnAll ? o.push("pointermove") : this.dispatchEvent(s, "pointermove"), a && o.push("globalpointermove"), s.pointerType === "touch" && (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(s, "touchmove"), a && o.push("globaltouchmove")), i && (this.moveOnAll ? o.splice(1, 0, "mousemove") : this.dispatchEvent(s, "mousemove"), a && o.push("globalmousemove"), this.cursor = (l = s.target) == null ? void 0 : l.cursor), o.length > 0 && this.all(s, o), this._allInteractiveElements.length = 0, this._hitElements.length = 0, r.overTargets = s.composedPath(), this.freeEvent(s);
  }
  mapPointerOver(t) {
    var o;
    if (!(t instanceof Pt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.trackingData(t.pointerId), i = this.createPointerEvent(t), r = i.pointerType === "mouse" || i.pointerType === "pen";
    this.dispatchEvent(i, "pointerover"), r && this.dispatchEvent(i, "mouseover"), i.pointerType === "mouse" && (this.cursor = (o = i.target) == null ? void 0 : o.cursor);
    const n = this.clonePointerEvent(i, "pointerenter");
    for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent; )
      n.currentTarget = n.target, this.notifyTarget(n), r && this.notifyTarget(n, "mouseenter"), n.target = n.target.parent;
    s.overTargets = i.composedPath(), this.freeEvent(i), this.freeEvent(n);
  }
  mapPointerOut(t) {
    if (!(t instanceof Pt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.trackingData(t.pointerId);
    if (s.overTargets) {
      const i = t.pointerType === "mouse" || t.pointerType === "pen", r = this.findMountedTarget(s.overTargets), n = this.createPointerEvent(t, "pointerout", r);
      this.dispatchEvent(n), i && this.dispatchEvent(n, "mouseout");
      const o = this.createPointerEvent(t, "pointerleave", r);
      for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent; )
        o.currentTarget = o.target, this.notifyTarget(o), i && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
      s.overTargets = null, this.freeEvent(n), this.freeEvent(o);
    }
    this.cursor = null;
  }
  mapPointerUp(t) {
    if (!(t instanceof Pt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = performance.now(), i = this.createPointerEvent(t);
    if (this.dispatchEvent(i, "pointerup"), i.pointerType === "touch")
      this.dispatchEvent(i, "touchend");
    else if (i.pointerType === "mouse" || i.pointerType === "pen") {
      const a = i.button === 2;
      this.dispatchEvent(i, a ? "rightup" : "mouseup");
    }
    const r = this.trackingData(t.pointerId), n = this.findMountedTarget(r.pressTargetsByButton[t.button]);
    let o = n;
    if (n && !i.composedPath().includes(n)) {
      let a = n;
      for (; a && !i.composedPath().includes(a); ) {
        if (i.currentTarget = a, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch")
          this.notifyTarget(i, "touchendoutside");
        else if (i.pointerType === "mouse" || i.pointerType === "pen") {
          const h = i.button === 2;
          this.notifyTarget(i, h ? "rightupoutside" : "mouseupoutside");
        }
        a = a.parent;
      }
      delete r.pressTargetsByButton[t.button], o = a;
    }
    if (o) {
      const a = this.clonePointerEvent(i, "click");
      a.target = o, a.path = null, r.clicksByButton[t.button] || (r.clicksByButton[t.button] = {
        clickCount: 0,
        target: a.target,
        timeStamp: s
      });
      const h = r.clicksByButton[t.button];
      if (h.target === a.target && s - h.timeStamp < 200 ? ++h.clickCount : h.clickCount = 1, h.target = a.target, h.timeStamp = s, a.detail = h.clickCount, a.pointerType === "mouse") {
        const l = a.button === 2;
        this.dispatchEvent(a, l ? "rightclick" : "click");
      } else
        a.pointerType === "touch" && this.dispatchEvent(a, "tap");
      this.dispatchEvent(a, "pointertap"), this.freeEvent(a);
    }
    this.freeEvent(i);
  }
  mapPointerUpOutside(t) {
    if (!(t instanceof Pt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const s = this.trackingData(t.pointerId), i = this.findMountedTarget(s.pressTargetsByButton[t.button]), r = this.createPointerEvent(t);
    if (i) {
      let n = i;
      for (; n; )
        r.currentTarget = n, this.notifyTarget(r, "pointerupoutside"), r.pointerType === "touch" ? this.notifyTarget(r, "touchendoutside") : (r.pointerType === "mouse" || r.pointerType === "pen") && this.notifyTarget(r, r.button === 2 ? "rightupoutside" : "mouseupoutside"), n = n.parent;
      delete s.pressTargetsByButton[t.button];
    }
    this.freeEvent(r);
  }
  mapWheel(t) {
    if (!(t instanceof We)) {
      console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
      return;
    }
    const s = this.createWheelEvent(t);
    this.dispatchEvent(s), this.freeEvent(s);
  }
  findMountedTarget(t) {
    if (!t)
      return null;
    let s = t[0];
    for (let i = 1; i < t.length && t[i].parent === s; i++)
      s = t[i];
    return s;
  }
  createPointerEvent(t, s, i) {
    const r = this.allocateEvent(Pt);
    return this.copyPointerData(t, r), this.copyMouseData(t, r), this.copyData(t, r), r.nativeEvent = t.nativeEvent, r.originalEvent = t, r.target = i ?? this.hitTest(r.global.x, r.global.y) ?? this._hitElements[0], typeof s == "string" && (r.type = s), r;
  }
  createWheelEvent(t) {
    const s = this.allocateEvent(We);
    return this.copyWheelData(t, s), this.copyMouseData(t, s), this.copyData(t, s), s.nativeEvent = t.nativeEvent, s.originalEvent = t, s.target = this.hitTest(s.global.x, s.global.y), s;
  }
  clonePointerEvent(t, s) {
    const i = this.allocateEvent(Pt);
    return i.nativeEvent = t.nativeEvent, i.originalEvent = t.originalEvent, this.copyPointerData(t, i), this.copyMouseData(t, i), this.copyData(t, i), i.target = t.target, i.path = t.composedPath().slice(), i.type = s ?? i.type, i;
  }
  copyWheelData(t, s) {
    s.deltaMode = t.deltaMode, s.deltaX = t.deltaX, s.deltaY = t.deltaY, s.deltaZ = t.deltaZ;
  }
  copyPointerData(t, s) {
    t instanceof Pt && s instanceof Pt && (s.pointerId = t.pointerId, s.width = t.width, s.height = t.height, s.isPrimary = t.isPrimary, s.pointerType = t.pointerType, s.pressure = t.pressure, s.tangentialPressure = t.tangentialPressure, s.tiltX = t.tiltX, s.tiltY = t.tiltY, s.twist = t.twist);
  }
  copyMouseData(t, s) {
    t instanceof ei && s instanceof ei && (s.altKey = t.altKey, s.button = t.button, s.buttons = t.buttons, s.client.copyFrom(t.client), s.ctrlKey = t.ctrlKey, s.metaKey = t.metaKey, s.movement.copyFrom(t.movement), s.screen.copyFrom(t.screen), s.shiftKey = t.shiftKey, s.global.copyFrom(t.global));
  }
  copyData(t, s) {
    s.isTrusted = t.isTrusted, s.srcElement = t.srcElement, s.timeStamp = performance.now(), s.type = t.type, s.detail = t.detail, s.view = t.view, s.which = t.which, s.layer.copyFrom(t.layer), s.page.copyFrom(t.page);
  }
  trackingData(t) {
    return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
      pressTargetsByButton: {},
      clicksByButton: {},
      overTarget: null
    }), this.mappingState.trackingData[t];
  }
  allocateEvent(t) {
    this.eventPool.has(t) || this.eventPool.set(t, []);
    const s = this.eventPool.get(t).pop() || new t(this);
    return s.eventPhase = s.NONE, s.currentTarget = null, s.path = null, s.target = null, s;
  }
  freeEvent(t) {
    if (t.manager !== this)
      throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    const s = t.constructor;
    this.eventPool.has(s) || this.eventPool.set(s, []), this.eventPool.get(s).push(t);
  }
  notifyListeners(t, s) {
    const i = t.currentTarget._events[s];
    if (i && t.currentTarget.isInteractive())
      if ("fn" in i)
        i.once && t.currentTarget.removeListener(s, i.fn, void 0, !0), i.fn.call(i.context, t);
      else
        for (let r = 0, n = i.length; r < n && !t.propagationImmediatelyStopped; r++)
          i[r].once && t.currentTarget.removeListener(s, i[r].fn, void 0, !0), i[r].fn.call(i[r].context, t);
  }
}
const oc = 1, ac = {
  touchstart: "pointerdown",
  touchend: "pointerup",
  touchendoutside: "pointerupoutside",
  touchmove: "pointermove",
  touchcancel: "pointercancel"
}, vr = class {
  constructor(e) {
    this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = e, this.rootBoundary = new nc(null), ae.init(this), this.autoPreventDefault = !0, this.eventsAdded = !1, this.rootPointerEvent = new Pt(null), this.rootWheelEvent = new We(null), this.cursorStyles = {
      default: "inherit",
      pointer: "pointer"
    }, this.features = new Proxy({ ...vr.defaultEventFeatures }, {
      set: (t, s, i) => (s === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = i), t[s] = i, !0)
    }), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
  }
  static get defaultEventMode() {
    return this._defaultEventMode;
  }
  init(e) {
    const { view: t, resolution: s } = this.renderer;
    this.setTargetElement(t), this.resolution = s, vr._defaultEventMode = e.eventMode ?? "auto", Object.assign(this.features, e.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
  }
  resolutionChange(e) {
    this.resolution = e;
  }
  destroy() {
    this.setTargetElement(null), this.renderer = null;
  }
  setCursor(e) {
    e = e || "default";
    let t = !0;
    if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (t = !1), this.currentCursor === e)
      return;
    this.currentCursor = e;
    const s = this.cursorStyles[e];
    if (s)
      switch (typeof s) {
        case "string":
          t && (this.domElement.style.cursor = s);
          break;
        case "function":
          s(e);
          break;
        case "object":
          t && Object.assign(this.domElement.style, s);
          break;
      }
    else
      t && typeof e == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) && (this.domElement.style.cursor = e);
  }
  get pointer() {
    return this.rootPointerEvent;
  }
  onPointerDown(e) {
    if (!this.features.click || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch"))
      return;
    const t = this.normalizeToPointerData(e);
    this.autoPreventDefault && t[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault();
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s], n = this.bootstrapEvent(this.rootPointerEvent, r);
      this.rootBoundary.mapEvent(n);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerMove(e) {
    if (!this.features.move || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch"))
      return;
    ae.pointerMoved();
    const t = this.normalizeToPointerData(e);
    for (let s = 0, i = t.length; s < i; s++) {
      const r = this.bootstrapEvent(this.rootPointerEvent, t[s]);
      this.rootBoundary.mapEvent(r);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerUp(e) {
    if (!this.features.click || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch"))
      return;
    let t = e.target;
    e.composedPath && e.composedPath().length > 0 && (t = e.composedPath()[0]);
    const s = t !== this.domElement ? "outside" : "", i = this.normalizeToPointerData(e);
    for (let r = 0, n = i.length; r < n; r++) {
      const o = this.bootstrapEvent(this.rootPointerEvent, i[r]);
      o.type += s, this.rootBoundary.mapEvent(o);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerOverOut(e) {
    if (!this.features.click || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch"))
      return;
    const t = this.normalizeToPointerData(e);
    for (let s = 0, i = t.length; s < i; s++) {
      const r = this.bootstrapEvent(this.rootPointerEvent, t[s]);
      this.rootBoundary.mapEvent(r);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onWheel(e) {
    if (!this.features.wheel)
      return;
    const t = this.normalizeWheelEvent(e);
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(t);
  }
  setTargetElement(e) {
    this.removeEvents(), this.domElement = e, ae.domElement = e, this.addEvents();
  }
  addEvents() {
    if (this.eventsAdded || !this.domElement)
      return;
    ae.addTickerListener();
    const e = this.domElement.style;
    e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "none", e.msTouchAction = "none") : this.supportsPointerEvents && (e.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, !0), this.domElement.addEventListener("pointerdown", this.onPointerDown, !0), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this.onPointerOverOut, !0), globalThis.addEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, !0), this.domElement.addEventListener("mousedown", this.onPointerDown, !0), this.domElement.addEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this.onPointerOverOut, !0), globalThis.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, !0), this.domElement.addEventListener("touchend", this.onPointerUp, !0), this.domElement.addEventListener("touchmove", this.onPointerMove, !0)), this.domElement.addEventListener("wheel", this.onWheel, {
      passive: !0,
      capture: !0
    }), this.eventsAdded = !0;
  }
  removeEvents() {
    if (!this.eventsAdded || !this.domElement)
      return;
    ae.removeTickerListener();
    const e = this.domElement.style;
    globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "", e.msTouchAction = "") : this.supportsPointerEvents && (e.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, !0), this.domElement.removeEventListener("mousedown", this.onPointerDown, !0), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, !0), this.domElement.removeEventListener("touchend", this.onPointerUp, !0), this.domElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this.eventsAdded = !1;
  }
  mapPositionToPoint(e, t, s) {
    let i;
    this.domElement.parentElement ? i = this.domElement.getBoundingClientRect() : i = {
      x: 0,
      y: 0,
      width: this.domElement.width,
      height: this.domElement.height,
      left: 0,
      top: 0
    };
    const r = 1 / this.resolution;
    e.x = (t - i.left) * (this.domElement.width / i.width) * r, e.y = (s - i.top) * (this.domElement.height / i.height) * r;
  }
  normalizeToPointerData(e) {
    const t = [];
    if (this.supportsTouchEvents && e instanceof TouchEvent)
      for (let s = 0, i = e.changedTouches.length; s < i; s++) {
        const r = e.changedTouches[s];
        typeof r.button > "u" && (r.button = 0), typeof r.buttons > "u" && (r.buttons = 1), typeof r.isPrimary > "u" && (r.isPrimary = e.touches.length === 1 && e.type === "touchstart"), typeof r.width > "u" && (r.width = r.radiusX || 1), typeof r.height > "u" && (r.height = r.radiusY || 1), typeof r.tiltX > "u" && (r.tiltX = 0), typeof r.tiltY > "u" && (r.tiltY = 0), typeof r.pointerType > "u" && (r.pointerType = "touch"), typeof r.pointerId > "u" && (r.pointerId = r.identifier || 0), typeof r.pressure > "u" && (r.pressure = r.force || 0.5), typeof r.twist > "u" && (r.twist = 0), typeof r.tangentialPressure > "u" && (r.tangentialPressure = 0), typeof r.layerX > "u" && (r.layerX = r.offsetX = r.clientX), typeof r.layerY > "u" && (r.layerY = r.offsetY = r.clientY), r.isNormalized = !0, r.type = e.type, t.push(r);
      }
    else if (!globalThis.MouseEvent || e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent))) {
      const s = e;
      typeof s.isPrimary > "u" && (s.isPrimary = !0), typeof s.width > "u" && (s.width = 1), typeof s.height > "u" && (s.height = 1), typeof s.tiltX > "u" && (s.tiltX = 0), typeof s.tiltY > "u" && (s.tiltY = 0), typeof s.pointerType > "u" && (s.pointerType = "mouse"), typeof s.pointerId > "u" && (s.pointerId = oc), typeof s.pressure > "u" && (s.pressure = 0.5), typeof s.twist > "u" && (s.twist = 0), typeof s.tangentialPressure > "u" && (s.tangentialPressure = 0), s.isNormalized = !0, t.push(s);
    } else
      t.push(e);
    return t;
  }
  normalizeWheelEvent(e) {
    const t = this.rootWheelEvent;
    return this.transferMouseData(t, e), t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ, t.deltaMode = e.deltaMode, this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.nativeEvent = e, t.type = e.type, t;
  }
  bootstrapEvent(e, t) {
    return e.originalEvent = null, e.nativeEvent = t, e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist, this.transferMouseData(e, t), this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.isTrusted = t.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = ac[e.type] || e.type), e;
  }
  transferMouseData(e, t) {
    e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.x = t.clientX, e.client.y = t.clientY, e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.x = t.movementX, e.movement.y = t.movementY, e.page.x = t.pageX, e.page.y = t.pageY, e.relatedTarget = null, e.shiftKey = t.shiftKey;
  }
};
let gs = vr;
gs.extension = {
  name: "events",
  type: [
    M.RendererSystem,
    M.CanvasRendererSystem
  ]
};
gs.defaultEventFeatures = {
  move: !0,
  globalMove: !0,
  click: !0,
  wheel: !0
};
k.add(gs);
function Rn(e) {
  return e === "dynamic" || e === "static";
}
const hc = {
  onclick: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onglobalmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onmouseupoutside: null,
  onpointercancel: null,
  onpointerdown: null,
  onpointerenter: null,
  onpointerleave: null,
  onpointermove: null,
  onglobalpointermove: null,
  onpointerout: null,
  onpointerover: null,
  onpointertap: null,
  onpointerup: null,
  onpointerupoutside: null,
  onrightclick: null,
  onrightdown: null,
  onrightup: null,
  onrightupoutside: null,
  ontap: null,
  ontouchcancel: null,
  ontouchend: null,
  ontouchendoutside: null,
  ontouchmove: null,
  onglobaltouchmove: null,
  ontouchstart: null,
  onwheel: null,
  _internalInteractive: void 0,
  get interactive() {
    return this._internalInteractive ?? Rn(gs.defaultEventMode);
  },
  set interactive(e) {
    $("7.2.0", "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."), this._internalInteractive = e, this.eventMode = e ? "static" : "auto";
  },
  _internalEventMode: void 0,
  get eventMode() {
    return this._internalEventMode ?? gs.defaultEventMode;
  },
  set eventMode(e) {
    this._internalInteractive = Rn(e), this._internalEventMode = e;
  },
  isInteractive() {
    return this.eventMode === "static" || this.eventMode === "dynamic";
  },
  interactiveChildren: !0,
  hitArea: null,
  addEventListener(e, t, s) {
    const i = typeof s == "boolean" && s || typeof s == "object" && s.capture, r = typeof t == "function" ? void 0 : t;
    e = i ? `${e}capture` : e, t = typeof t == "function" ? t : t.handleEvent, this.on(e, t, r);
  },
  removeEventListener(e, t, s) {
    const i = typeof s == "boolean" && s || typeof s == "object" && s.capture, r = typeof t == "function" ? void 0 : t;
    e = i ? `${e}capture` : e, t = typeof t == "function" ? t : t.handleEvent, this.off(e, t, r);
  },
  dispatchEvent(e) {
    if (!(e instanceof xs))
      throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
    return e.defaultPrevented = !1, e.path = null, e.target = this, e.manager.dispatchEvent(e), !e.defaultPrevented;
  }
};
it.mixin(hc);
const lc = {
  accessible: !1,
  accessibleTitle: null,
  accessibleHint: null,
  tabIndex: 0,
  _accessibleActive: !1,
  _accessibleDiv: null,
  accessibleType: "button",
  accessiblePointerEvents: "auto",
  accessibleChildren: !0,
  renderId: -1
};
it.mixin(lc);
const cc = 9, Ls = 100, uc = 0, dc = 0, Mn = 2, Pn = 1, fc = -1e3, pc = -1e3, mc = 2;
class Zo {
  constructor(t) {
    this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (se.tablet || se.phone) && this.createTouchHook();
    const s = document.createElement("div");
    s.style.width = `${Ls}px`, s.style.height = `${Ls}px`, s.style.position = "absolute", s.style.top = `${uc}px`, s.style.left = `${dc}px`, s.style.zIndex = Mn.toString(), this.div = s, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    const t = document.createElement("button");
    t.style.width = `${Pn}px`, t.style.height = `${Pn}px`, t.style.position = "absolute", t.style.top = `${fc}px`, t.style.left = `${pc}px`, t.style.zIndex = mc.toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", () => {
      this._isMobileAccessibility = !0, this.activate(), this.destroyTouchHook();
    }), document.body.appendChild(t), this._hookDiv = t;
  }
  destroyTouchHook() {
    this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
  }
  activate() {
    var t;
    this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), (t = this.renderer.view.parentNode) == null || t.appendChild(this.div));
  }
  deactivate() {
    var t;
    !this._isActive || this._isMobileAccessibility || (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), (t = this.div.parentNode) == null || t.removeChild(this.div));
  }
  updateAccessibleObjects(t) {
    if (!t.visible || !t.accessibleChildren)
      return;
    t.accessible && t.isInteractive() && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
    const s = t.children;
    if (s)
      for (let i = 0; i < s.length; i++)
        this.updateAccessibleObjects(s[i]);
  }
  update() {
    const t = performance.now();
    if (se.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency, !this.renderer.renderingToScreen))
      return;
    this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const { x: s, y: i, width: r, height: n } = this.renderer.view.getBoundingClientRect(), { width: o, height: a, resolution: h } = this.renderer, l = r / o * h, c = n / a * h;
    let u = this.div;
    u.style.left = `${s}px`, u.style.top = `${i}px`, u.style.width = `${o}px`, u.style.height = `${a}px`;
    for (let d = 0; d < this.children.length; d++) {
      const f = this.children[d];
      if (f.renderId !== this.renderId)
        f._accessibleActive = !1, Ve(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
      else {
        u = f._accessibleDiv;
        let p = f.hitArea;
        const _ = f.worldTransform;
        f.hitArea ? (u.style.left = `${(_.tx + p.x * _.a) * l}px`, u.style.top = `${(_.ty + p.y * _.d) * c}px`, u.style.width = `${p.width * _.a * l}px`, u.style.height = `${p.height * _.d * c}px`) : (p = f.getBounds(), this.capHitArea(p), u.style.left = `${p.x * l}px`, u.style.top = `${p.y * c}px`, u.style.width = `${p.width * l}px`, u.style.height = `${p.height * c}px`, u.title !== f.accessibleTitle && f.accessibleTitle !== null && (u.title = f.accessibleTitle), u.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && u.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== u.title || f.tabIndex !== u.tabIndex) && (u.title = f.accessibleTitle, u.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(u));
      }
    }
    this.renderId++;
  }
  updateDebugHTML(t) {
    t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
  }
  capHitArea(t) {
    t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
    const { width: s, height: i } = this.renderer;
    t.x + t.width > s && (t.width = s - t.x), t.y + t.height > i && (t.height = i - t.y);
  }
  addChild(t) {
    let s = this.pool.pop();
    s || (s = document.createElement("button"), s.style.width = `${Ls}px`, s.style.height = `${Ls}px`, s.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", s.style.position = "absolute", s.style.zIndex = Mn.toString(), s.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? s.setAttribute("aria-live", "off") : s.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? s.setAttribute("aria-relevant", "additions") : s.setAttribute("aria-relevant", "text"), s.addEventListener("click", this._onClick.bind(this)), s.addEventListener("focus", this._onFocus.bind(this)), s.addEventListener("focusout", this._onFocusOut.bind(this))), s.style.pointerEvents = t.accessiblePointerEvents, s.type = t.accessibleType, t.accessibleTitle && t.accessibleTitle !== null ? s.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (s.title = `displayObject ${t.tabIndex}`), t.accessibleHint && t.accessibleHint !== null && s.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(s), t._accessibleActive = !0, t._accessibleDiv = s, s.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex;
  }
  _dispatchEvent(t, s) {
    const { displayObject: i } = t.target, r = this.renderer.events.rootBoundary, n = Object.assign(new xs(r), { target: i });
    r.rootTarget = this.renderer.lastObjectRendered, s.forEach((o) => r.dispatchEvent(n, o));
  }
  _onClick(t) {
    this._dispatchEvent(t, ["click", "pointertap", "tap"]);
  }
  _onFocus(t) {
    t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, ["mouseover"]);
  }
  _onFocusOut(t) {
    t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, ["mouseout"]);
  }
  _onKeyDown(t) {
    t.keyCode === cc && this.activate();
  }
  _onMouseMove(t) {
    t.movementX === 0 && t.movementY === 0 || this.deactivate();
  }
  destroy() {
    this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
  }
}
Zo.extension = {
  name: "accessibility",
  type: [
    M.RendererPlugin,
    M.CanvasRendererPlugin
  ]
};
k.add(Zo);
const br = class {
  constructor(e) {
    this.stage = new Tt(), e = Object.assign({
      forceCanvas: !1
    }, e), this.renderer = Cl(e), br._plugins.forEach((t) => {
      t.init.call(this, e);
    });
  }
  render() {
    this.renderer.render(this.stage);
  }
  get view() {
    return this.renderer.view;
  }
  get screen() {
    return this.renderer.screen;
  }
  destroy(e, t) {
    const s = br._plugins.slice(0);
    s.reverse(), s.forEach((i) => {
      i.destroy.call(this);
    }), this.stage.destroy(t), this.stage = null, this.renderer.destroy(e), this.renderer = null;
  }
};
let Nr = br;
Nr._plugins = [];
k.handleByList(M.Application, Nr._plugins);
class Jo {
  static init(t) {
    Object.defineProperty(this, "resizeTo", {
      set(s) {
        globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = s, s && (globalThis.addEventListener("resize", this.queueResize), this.resize());
      },
      get() {
        return this._resizeTo;
      }
    }), this.queueResize = () => {
      this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
    }, this.cancelResize = () => {
      this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
    }, this.resize = () => {
      if (!this._resizeTo)
        return;
      this.cancelResize();
      let s, i;
      if (this._resizeTo === globalThis.window)
        s = globalThis.innerWidth, i = globalThis.innerHeight;
      else {
        const { clientWidth: r, clientHeight: n } = this._resizeTo;
        s = r, i = n;
      }
      this.renderer.resize(s, i), this.render();
    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
  }
}
Jo.extension = M.Application;
k.add(Jo);
const Bn = {
  loader: M.LoadParser,
  resolver: M.ResolveParser,
  cache: M.CacheParser,
  detection: M.DetectionParser
};
k.handle(M.Asset, (e) => {
  const t = e.ref;
  Object.entries(Bn).filter(([s]) => !!t[s]).forEach(([s, i]) => k.add(Object.assign(t[s], { extension: t[s].extension ?? i })));
}, (e) => {
  const t = e.ref;
  Object.keys(Bn).filter((s) => !!t[s]).forEach((s) => k.remove(t[s]));
});
class gc {
  constructor(t, s = !1) {
    this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = s;
  }
  add(t) {
    t.forEach((s) => {
      this._assetList.push(s);
    }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      const t = [], s = Math.min(this._assetList.length, this._maxConcurrent);
      for (let i = 0; i < s; i++)
        t.push(this._assetList.pop());
      await this._loader.load(t), this._isLoading = !1, this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(t) {
    this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next());
  }
}
function ys(e, t) {
  if (Array.isArray(t)) {
    for (const s of t)
      if (e.startsWith(`data:${s}`))
        return !0;
    return !1;
  }
  return e.startsWith(`data:${t}`);
}
function Re(e, t) {
  const s = e.split("?")[0], i = vt.extname(s).toLowerCase();
  return Array.isArray(t) ? t.includes(i) : i === t;
}
const ie = (e, t) => (Array.isArray(e) || (e = [e]), t ? e.map((s) => typeof s == "string" ? t(s) : s) : e), Tr = (e, t) => {
  const s = t.split("?")[1];
  return s && (e += `?${s}`), e;
};
function Qo(e, t, s, i, r) {
  const n = t[s];
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    s < t.length - 1 ? Qo(e.replace(i[s], a), t, s + 1, i, r) : r.push(e.replace(i[s], a));
  }
}
function _c(e) {
  const t = /\{(.*?)\}/g, s = e.match(t), i = [];
  if (s) {
    const r = [];
    s.forEach((n) => {
      const o = n.substring(1, n.length - 1).split(",");
      r.push(o);
    }), Qo(e, r, 0, s, i);
  } else
    i.push(e);
  return i;
}
const si = (e) => !Array.isArray(e);
class xc {
  constructor() {
    this._parsers = [], this._cache = /* @__PURE__ */ new Map(), this._cacheMap = /* @__PURE__ */ new Map();
  }
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  has(t) {
    return this._cache.has(t);
  }
  get(t) {
    const s = this._cache.get(t);
    return s || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), s;
  }
  set(t, s) {
    const i = ie(t);
    let r;
    for (let a = 0; a < this.parsers.length; a++) {
      const h = this.parsers[a];
      if (h.test(s)) {
        r = h.getCacheableAssets(i, s);
        break;
      }
    }
    r || (r = {}, i.forEach((a) => {
      r[a] = s;
    }));
    const n = Object.keys(r), o = {
      cacheKeys: n,
      keys: i
    };
    if (i.forEach((a) => {
      this._cacheMap.set(a, o);
    }), n.forEach((a) => {
      this._cache.has(a) && this._cache.get(a) !== s && console.warn("[Cache] already has key:", a), this._cache.set(a, r[a]);
    }), s instanceof B) {
      const a = s;
      i.forEach((h) => {
        a.baseTexture !== B.EMPTY.baseTexture && X.addToCache(a.baseTexture, h), B.addToCache(a, h);
      });
    }
  }
  remove(t) {
    if (this._cacheMap.get(t), !this._cacheMap.has(t)) {
      console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const s = this._cacheMap.get(t);
    s.cacheKeys.forEach((r) => {
      this._cache.delete(r);
    }), s.keys.forEach((r) => {
      this._cacheMap.delete(r);
    });
  }
  get parsers() {
    return this._parsers;
  }
}
const is = new xc();
class yc {
  constructor() {
    this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
      set: (t, s, i) => (this._parsersValidated = !1, t[s] = i, !0)
    }), this.promiseCache = {};
  }
  reset() {
    this._parsersValidated = !1, this.promiseCache = {};
  }
  _getLoadPromiseAndParser(t, s) {
    const i = {
      promise: null,
      parser: null
    };
    return i.promise = (async () => {
      var o, a;
      let r = null, n = null;
      if (s.loadParser && (n = this._parserHash[s.loadParser], n || console.warn(`[Assets] specified load parser "${s.loadParser}" not found while loading ${t}`)), !n) {
        for (let h = 0; h < this.parsers.length; h++) {
          const l = this.parsers[h];
          if (l.load && ((o = l.test) != null && o.call(l, t, s, this))) {
            n = l;
            break;
          }
        }
        if (!n)
          return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
      }
      r = await n.load(t, s, this), i.parser = n;
      for (let h = 0; h < this.parsers.length; h++) {
        const l = this.parsers[h];
        l.parse && l.parse && await ((a = l.testParse) == null ? void 0 : a.call(l, r, s, this)) && (r = await l.parse(r, s, this) || r, i.parser = l);
      }
      return r;
    })(), i;
  }
  async load(t, s) {
    this._parsersValidated || this._validateParsers();
    let i = 0;
    const r = {}, n = si(t), o = ie(t, (l) => ({
      src: l
    })), a = o.length, h = o.map(async (l) => {
      const c = vt.toAbsolute(l.src);
      if (!r[l.src])
        try {
          this.promiseCache[c] || (this.promiseCache[c] = this._getLoadPromiseAndParser(c, l)), r[l.src] = await this.promiseCache[c].promise, s && s(++i / a);
        } catch (u) {
          throw delete this.promiseCache[c], delete r[l.src], new Error(`[Loader.load] Failed to load ${c}.
${u}`);
        }
    });
    return await Promise.all(h), n ? r[o[0].src] : r;
  }
  async unload(t) {
    const i = ie(t, (r) => ({
      src: r
    })).map(async (r) => {
      var a, h;
      const n = vt.toAbsolute(r.src), o = this.promiseCache[n];
      if (o) {
        const l = await o.promise;
        (h = (a = o.parser) == null ? void 0 : a.unload) == null || h.call(a, l, r, this), delete this.promiseCache[n];
      }
    });
    await Promise.all(i);
  }
  _validateParsers() {
    this._parsersValidated = !0, this._parserHash = this._parsers.filter((t) => t.name).reduce((t, s) => (t[s.name] && console.warn(`[Assets] loadParser name conflict "${s.name}"`), { ...t, [s.name]: s }), {});
  }
}
var Zt = /* @__PURE__ */ ((e) => (e[e.Low = 0] = "Low", e[e.Normal = 1] = "Normal", e[e.High = 2] = "High", e))(Zt || {});
const vc = ".json", bc = "application/json", Tc = {
  extension: {
    type: M.LoadParser,
    priority: Zt.Low
  },
  name: "loadJson",
  test(e) {
    return ys(e, bc) || Re(e, vc);
  },
  async load(e) {
    return await (await I.ADAPTER.fetch(e)).json();
  }
};
k.add(Tc);
const Ec = ".txt", wc = "text/plain", Sc = {
  name: "loadTxt",
  extension: {
    type: M.LoadParser,
    priority: Zt.Low
  },
  test(e) {
    return ys(e, wc) || Re(e, Ec);
  },
  async load(e) {
    return await (await I.ADAPTER.fetch(e)).text();
  }
};
k.add(Sc);
const Ac = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
], Cc = [".ttf", ".otf", ".woff", ".woff2"], Ic = [
  "font/ttf",
  "font/otf",
  "font/woff",
  "font/woff2"
];
function Rc(e) {
  const t = vt.extname(e);
  return vt.basename(e, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(" ");
}
const Mc = {
  extension: {
    type: M.LoadParser,
    priority: Zt.Low
  },
  name: "loadWebFont",
  test(e) {
    return ys(e, Ic) || Re(e, Cc);
  },
  async load(e, t) {
    var i, r, n;
    const s = I.ADAPTER.getFontFaceSet();
    if (s) {
      const o = [], a = ((i = t.data) == null ? void 0 : i.family) ?? Rc(e), h = ((n = (r = t.data) == null ? void 0 : r.weights) == null ? void 0 : n.filter((c) => Ac.includes(c))) ?? ["normal"], l = t.data ?? {};
      for (let c = 0; c < h.length; c++) {
        const u = h[c], d = new FontFace(a, `url(${encodeURI(e)})`, {
          ...l,
          weight: u
        });
        await d.load(), s.add(d), o.push(d);
      }
      return o.length === 1 ? o[0] : o;
    }
    return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
  },
  unload(e) {
    (Array.isArray(e) ? e : [e]).forEach((t) => I.ADAPTER.getFontFaceSet().delete(t));
  }
};
k.add(Mc);
let Dn = 0, Gi;
const Pc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=", Bc = {
  id: "checkImageBitmap",
  code: `
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('${Pc}');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `
}, Dc = {
  id: "loadImageBitmap",
  code: `
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`
};
let Hi;
class Fc {
  constructor() {
    this._initialized = !1, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {};
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((t) => {
      const s = URL.createObjectURL(new Blob([Bc.code], { type: "application/javascript" })), i = new Worker(s);
      i.addEventListener("message", (r) => {
        i.terminate(), URL.revokeObjectURL(s), t(r.data);
      });
    }), this._isImageBitmapSupported);
  }
  loadImageBitmap(t) {
    return this._run("loadImageBitmap", [t]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = !0);
  }
  getWorker() {
    Gi === void 0 && (Gi = navigator.hardwareConcurrency || 4);
    let t = this.workerPool.pop();
    return !t && this._createdWorkers < Gi && (Hi || (Hi = URL.createObjectURL(new Blob([Dc.code], { type: "application/javascript" }))), this._createdWorkers++, t = new Worker(Hi), t.addEventListener("message", (s) => {
      this.complete(s.data), this.returnWorker(s.target), this.next();
    })), t;
  }
  returnWorker(t) {
    this.workerPool.push(t);
  }
  complete(t) {
    t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data), this.resolveHash[t.uuid] = null;
  }
  async _run(t, s) {
    await this._initWorkers();
    const i = new Promise((r, n) => {
      this.queue.push({ id: t, arguments: s, resolve: r, reject: n });
    });
    return this.next(), i;
  }
  next() {
    if (!this.queue.length)
      return;
    const t = this.getWorker();
    if (!t)
      return;
    const s = this.queue.pop(), i = s.id;
    this.resolveHash[Dn] = { resolve: s.resolve, reject: s.reject }, t.postMessage({
      data: s.arguments,
      uuid: Dn++,
      id: i
    });
  }
}
const Fn = new Fc();
function gi(e, t, s) {
  const i = new B(e);
  return i.baseTexture.on("dispose", () => {
    delete t.promiseCache[s];
  }), i;
}
const Lc = [".jpeg", ".jpg", ".png", ".webp", ".avif"], Nc = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif"
];
async function kc(e) {
  const t = await I.ADAPTER.fetch(e);
  if (!t.ok)
    throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);
  const s = await t.blob();
  return await createImageBitmap(s);
}
const _i = {
  name: "loadTextures",
  extension: {
    type: M.LoadParser,
    priority: Zt.High
  },
  config: {
    preferWorkers: !0,
    preferCreateImageBitmap: !0,
    crossOrigin: "anonymous"
  },
  test(e) {
    return ys(e, Nc) || Re(e, Lc);
  },
  async load(e, t, s) {
    let i = null;
    globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await Fn.isImageBitmapSupported() ? i = await Fn.loadImageBitmap(e) : i = await kc(e) : i = await new Promise((n) => {
      i = new Image(), i.crossOrigin = this.config.crossOrigin, i.src = e, i.complete ? n(i) : i.onload = () => {
        n(i);
      };
    });
    const r = new X(i, {
      resolution: ue(e),
      ...t.data
    });
    return r.resource.src = e, gi(r, s, e);
  },
  unload(e) {
    e.destroy(!0);
  }
};
k.add(_i);
const Oc = ".svg", Uc = "image/svg+xml", Gc = {
  extension: {
    type: M.LoadParser,
    priority: Zt.High
  },
  name: "loadSVG",
  test(e) {
    return ys(e, Uc) || Re(e, Oc);
  },
  async testParse(e) {
    return ms.test(e);
  },
  async parse(e, t, s) {
    var o, a, h;
    const i = new ms(e, (o = t == null ? void 0 : t.data) == null ? void 0 : o.resourceOptions), r = new X(i, {
      resolution: ue(e),
      ...t == null ? void 0 : t.data
    });
    r.resource.src = e;
    const n = gi(r, s, e);
    return (h = (a = t == null ? void 0 : t.data) == null ? void 0 : a.resourceOptions) != null && h.autoLoad || await i.load(), n;
  },
  async load(e, t) {
    return (await I.ADAPTER.fetch(e)).text();
  },
  unload: _i.unload
};
k.add(Gc);
class Hc {
  constructor() {
    this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, s) => `${t}${this._bundleIdConnector}${s}`,
      extractAssetIdFromBundle: (t, s) => s.replace(`${t}${this._bundleIdConnector}`, "")
    }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
  }
  setBundleIdentifier(t) {
    if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
      throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  prefer(...t) {
    t.forEach((s) => {
      this._preferredOrder.push(s), s.priority || (s.priority = Object.keys(s.params));
    }), this._resolverHash = {};
  }
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
  }
  setDefaultSearchParams(t) {
    if (typeof t == "string")
      this._defaultSearchParams = t;
    else {
      const s = t;
      this._defaultSearchParams = Object.keys(s).map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(s[i])}`).join("&");
    }
  }
  addManifest(t) {
    this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((s) => {
      this.addBundle(s.name, s.assets);
    });
  }
  addBundle(t, s) {
    const i = [];
    Array.isArray(s) ? s.forEach((r) => {
      if (typeof r.name == "string") {
        const n = this._createBundleAssetId(t, r.name);
        i.push(n), this.add([r.name, n], r.srcs, r.data);
      } else {
        const n = r.name.map((o) => this._createBundleAssetId(t, o));
        n.forEach((o) => {
          i.push(o);
        }), this.add([...r.name, ...n], r.srcs);
      }
    }) : Object.keys(s).forEach((r) => {
      i.push(this._createBundleAssetId(t, r)), this.add([r, this._createBundleAssetId(t, r)], s[r]);
    }), this._bundles[t] = i;
  }
  add(t, s, i) {
    const r = ie(t);
    r.forEach((o) => {
      this.hasKey(o) && console.warn(`[Resolver] already has key: ${o} overwriting`);
    }), Array.isArray(s) || (typeof s == "string" ? s = _c(s) : s = [s]);
    const n = s.map((o) => {
      let a = o;
      if (typeof o == "string") {
        let h = !1;
        for (let l = 0; l < this._parsers.length; l++) {
          const c = this._parsers[l];
          if (c.test(o)) {
            a = c.parse(o), h = !0;
            break;
          }
        }
        h || (a = {
          src: o
        });
      }
      return a.format || (a.format = a.src.split(".").pop()), a.alias || (a.alias = r), (this._basePath || this._rootPath) && (a.src = vt.toAbsolute(a.src, this._basePath, this._rootPath)), a.src = this._appendDefaultSearchParams(a.src), a.data = a.data ?? i, a;
    });
    r.forEach((o) => {
      this._assetMap[o] = n;
    });
  }
  resolveBundle(t) {
    const s = si(t);
    t = ie(t);
    const i = {};
    return t.forEach((r) => {
      const n = this._bundles[r];
      if (n) {
        const o = this.resolve(n), a = {};
        for (const h in o) {
          const l = o[h];
          a[this._extractAssetIdFromBundle(r, h)] = l;
        }
        i[r] = a;
      }
    }), s ? i[t[0]] : i;
  }
  resolveUrl(t) {
    const s = this.resolve(t);
    if (typeof t != "string") {
      const i = {};
      for (const r in s)
        i[r] = s[r].src;
      return i;
    }
    return s.src;
  }
  resolve(t) {
    const s = si(t);
    t = ie(t);
    const i = {};
    return t.forEach((r) => {
      if (!this._resolverHash[r])
        if (this._assetMap[r]) {
          let n = this._assetMap[r];
          const o = this._getPreferredOrder(n), a = n[0];
          o == null || o.priority.forEach((h) => {
            o.params[h].forEach((l) => {
              const c = n.filter((u) => u[h] ? u[h] === l : !1);
              c.length && (n = c);
            });
          }), this._resolverHash[r] = n[0] ?? a;
        } else {
          let n = r;
          (this._basePath || this._rootPath) && (n = vt.toAbsolute(n, this._basePath, this._rootPath)), n = this._appendDefaultSearchParams(n), this._resolverHash[r] = {
            src: n
          };
        }
      i[r] = this._resolverHash[r];
    }), s ? i[t[0]] : i;
  }
  hasKey(t) {
    return !!this._assetMap[t];
  }
  hasBundle(t) {
    return !!this._bundles[t];
  }
  _getPreferredOrder(t) {
    for (let s = 0; s < t.length; s++) {
      const i = t[0], r = this._preferredOrder.find((n) => n.params.format.includes(i.format));
      if (r)
        return r;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams)
      return t;
    const s = /\?/.test(t) ? "&" : "?";
    return `${t}${s}${this._defaultSearchParams}`;
  }
}
class Xc {
  constructor() {
    this._detections = [], this._initialized = !1, this.resolver = new Hc(), this.loader = new yc(), this.cache = is, this._backgroundLoader = new gc(this.loader), this._backgroundLoader.active = !0, this.reset();
  }
  async init(t = {}) {
    var n, o, a;
    if (this._initialized) {
      console.warn("[Assets]AssetManager already initialized, did you load before calling this Asset.init()?");
      return;
    }
    if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
      let h = t.manifest;
      typeof h == "string" && (h = await this.load(h)), this.resolver.addManifest(h);
    }
    const s = ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1, i = typeof s == "number" ? [s] : s;
    let r = [];
    if ((o = t.texturePreference) != null && o.format) {
      const h = (a = t.texturePreference) == null ? void 0 : a.format;
      r = typeof h == "string" ? [h] : h;
      for (const l of this._detections)
        await l.test() || (r = await l.remove(r));
    } else
      for (const h of this._detections)
        await h.test() && (r = await h.add(r));
    this.resolver.prefer({
      params: {
        format: r,
        resolution: i
      }
    }), t.preferences && this.setPreferences(t.preferences);
  }
  add(t, s, i) {
    this.resolver.add(t, s, i);
  }
  async load(t, s) {
    this._initialized || await this.init();
    const i = si(t), r = ie(t).map((a) => typeof a != "string" ? (this.resolver.add(a.src, a), a.src) : (this.resolver.hasKey(a) || this.resolver.add(a, a), a)), n = this.resolver.resolve(r), o = await this._mapLoadToResolve(n, s);
    return i ? o[r[0]] : o;
  }
  addBundle(t, s) {
    this.resolver.addBundle(t, s);
  }
  async loadBundle(t, s) {
    this._initialized || await this.init();
    let i = !1;
    typeof t == "string" && (i = !0, t = [t]);
    const r = this.resolver.resolveBundle(t), n = {}, o = Object.keys(r);
    let a = 0, h = 0;
    const l = () => {
      s == null || s(++a / h);
    }, c = o.map((u) => {
      const d = r[u];
      return h += Object.keys(d).length, this._mapLoadToResolve(d, l).then((f) => {
        n[u] = f;
      });
    });
    return await Promise.all(c), i ? n[t[0]] : n;
  }
  async backgroundLoad(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const s = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(s));
  }
  async backgroundLoadBundle(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const s = this.resolver.resolveBundle(t);
    Object.values(s).forEach((i) => {
      this._backgroundLoader.add(Object.values(i));
    });
  }
  reset() {
    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1;
  }
  get(t) {
    if (typeof t == "string")
      return is.get(t);
    const s = {};
    for (let i = 0; i < t.length; i++)
      s[i] = is.get(t[i]);
    return s;
  }
  async _mapLoadToResolve(t, s) {
    const i = Object.values(t), r = Object.keys(t);
    this._backgroundLoader.active = !1;
    const n = await this.loader.load(i, s);
    this._backgroundLoader.active = !0;
    const o = {};
    return i.forEach((a, h) => {
      const l = n[a.src], c = [a.src];
      a.alias && c.push(...a.alias), o[r[h]] = l, is.set(c, l);
    }), o;
  }
  async unload(t) {
    this._initialized || await this.init();
    const s = ie(t).map((r) => typeof r != "string" ? r.src : r), i = this.resolver.resolve(s);
    await this._unloadFromResolved(i);
  }
  async unloadBundle(t) {
    this._initialized || await this.init(), t = ie(t);
    const s = this.resolver.resolveBundle(t), i = Object.keys(s).map((r) => this._unloadFromResolved(s[r]));
    await Promise.all(i);
  }
  async _unloadFromResolved(t) {
    const s = Object.values(t);
    s.forEach((i) => {
      is.remove(i.src);
    }), await this.loader.unload(s);
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return _i.config.preferWorkers;
  }
  set preferWorkers(t) {
    $("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."), this.setPreferences({ preferWorkers: t });
  }
  setPreferences(t) {
    this.loader.parsers.forEach((s) => {
      s.config && Object.keys(s.config).filter((i) => i in t).forEach((i) => {
        s.config[i] = t[i];
      });
    });
  }
}
const Ns = new Xc();
k.handleByList(M.LoadParser, Ns.loader.parsers).handleByList(M.ResolveParser, Ns.resolver.parsers).handleByList(M.CacheParser, Ns.cache.parsers).handleByList(M.DetectionParser, Ns.detections);
const Vc = {
  extension: M.CacheParser,
  test: (e) => Array.isArray(e) && e.every((t) => t instanceof B),
  getCacheableAssets: (e, t) => {
    const s = {};
    return e.forEach((i) => {
      t.forEach((r, n) => {
        s[i + (n === 0 ? "" : n + 1)] = r;
      });
    }), s;
  }
};
k.add(Vc);
const zc = {
  extension: {
    type: M.DetectionParser,
    priority: 1
  },
  test: async () => {
    if (!globalThis.createImageBitmap)
      return !1;
    const e = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=", t = await I.ADAPTER.fetch(e).then((s) => s.blob());
    return createImageBitmap(t).then(() => !0, () => !1);
  },
  add: async (e) => [...e, "avif"],
  remove: async (e) => e.filter((t) => t !== "avif")
};
k.add(zc);
const $c = {
  extension: {
    type: M.DetectionParser,
    priority: 0
  },
  test: async () => {
    if (!globalThis.createImageBitmap)
      return !1;
    const e = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", t = await I.ADAPTER.fetch(e).then((s) => s.blob());
    return createImageBitmap(t).then(() => !0, () => !1);
  },
  add: async (e) => [...e, "webp"],
  remove: async (e) => e.filter((t) => t !== "webp")
};
k.add($c);
const Ln = ["png", "jpg", "jpeg"], Wc = {
  extension: {
    type: M.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(!0),
  add: async (e) => [...e, ...Ln],
  remove: async (e) => e.filter((t) => !Ln.includes(t))
};
k.add(Wc);
const jc = {
  extension: M.ResolveParser,
  test: _i.test,
  parse: (e) => {
    var t;
    return {
      resolution: parseFloat(((t = I.RETINA_PREFIX.exec(e)) == null ? void 0 : t[1]) ?? "1"),
      format: e.split(".").pop(),
      src: e
    };
  }
};
k.add(jc);
var St = /* @__PURE__ */ ((e) => (e[e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", e[e.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", e[e.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", e[e.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", e[e.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", e[e.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", e[e.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", e[e.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", e[e.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", e[e.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", e[e.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", e))(St || {});
const ii = {
  [
    33776
    /* COMPRESSED_RGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33777
    /* COMPRESSED_RGBA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    33778
    /* COMPRESSED_RGBA_S3TC_DXT3_EXT */
  ]: 1,
  [
    33779
    /* COMPRESSED_RGBA_S3TC_DXT5_EXT */
  ]: 1,
  [
    35916
    /* COMPRESSED_SRGB_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35917
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT */
  ]: 0.5,
  [
    35918
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT */
  ]: 1,
  [
    35919
    /* COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT */
  ]: 1,
  [
    37488
    /* COMPRESSED_R11_EAC */
  ]: 0.5,
  [
    37489
    /* COMPRESSED_SIGNED_R11_EAC */
  ]: 0.5,
  [
    37490
    /* COMPRESSED_RG11_EAC */
  ]: 1,
  [
    37491
    /* COMPRESSED_SIGNED_RG11_EAC */
  ]: 1,
  [
    37492
    /* COMPRESSED_RGB8_ETC2 */
  ]: 0.5,
  [
    37496
    /* COMPRESSED_RGBA8_ETC2_EAC */
  ]: 1,
  [
    37493
    /* COMPRESSED_SRGB8_ETC2 */
  ]: 0.5,
  [
    37497
    /* COMPRESSED_SRGB8_ALPHA8_ETC2_EAC */
  ]: 1,
  [
    37494
    /* COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    37495
    /* COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 */
  ]: 0.5,
  [
    35840
    /* COMPRESSED_RGB_PVRTC_4BPPV1_IMG */
  ]: 0.5,
  [
    35842
    /* COMPRESSED_RGBA_PVRTC_4BPPV1_IMG */
  ]: 0.5,
  [
    35841
    /* COMPRESSED_RGB_PVRTC_2BPPV1_IMG */
  ]: 0.25,
  [
    35843
    /* COMPRESSED_RGBA_PVRTC_2BPPV1_IMG */
  ]: 0.25,
  [
    36196
    /* COMPRESSED_RGB_ETC1_WEBGL */
  ]: 0.5,
  [
    35986
    /* COMPRESSED_RGB_ATC_WEBGL */
  ]: 0.5,
  [
    35986
    /* COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL */
  ]: 1,
  [
    34798
    /* COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL */
  ]: 1,
  [
    37808
    /* COMPRESSED_RGBA_ASTC_4x4_KHR */
  ]: 1
};
let te, Le;
function Nn() {
  Le = {
    s3tc: te.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: te.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    etc: te.getExtension("WEBGL_compressed_texture_etc"),
    etc1: te.getExtension("WEBGL_compressed_texture_etc1"),
    pvrtc: te.getExtension("WEBGL_compressed_texture_pvrtc") || te.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    atc: te.getExtension("WEBGL_compressed_texture_atc"),
    astc: te.getExtension("WEBGL_compressed_texture_astc")
  };
}
const Yc = {
  extension: {
    type: M.DetectionParser,
    priority: 2
  },
  test: async () => {
    const t = I.ADAPTER.createCanvas().getContext("webgl");
    return t ? (te = t, !0) : (console.warn("WebGL not available for compressed textures."), !1);
  },
  add: async (e) => {
    Le || Nn();
    const t = [];
    for (const s in Le)
      Le[s] && t.push(s);
    return [...t, ...e];
  },
  remove: async (e) => (Le || Nn(), e.filter((t) => !(t in Le)))
};
k.add(Yc);
class qc extends _s {
  constructor(t, s = { width: 1, height: 1, autoLoad: !0 }) {
    let i, r;
    typeof t == "string" ? (i = t, r = new Uint8Array()) : (i = null, r = t), super(r, s), this.origin = i, this.buffer = r ? new hr(r) : null, this.origin && s.autoLoad !== !1 && this.load(), r != null && r.length && (this.loaded = !0, this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(t) {
  }
  async load() {
    const i = await (await (await fetch(this.origin)).blob()).arrayBuffer();
    return this.data = new Uint32Array(i), this.buffer = new hr(i), this.loaded = !0, this.onBlobLoaded(i), this.update(), this;
  }
}
class we extends qc {
  constructor(t, s) {
    super(t, s), this.format = s.format, this.levels = s.levels || 1, this._width = s.width, this._height = s.height, this._extension = we._formatToExtension(this.format), (s.levelBuffers || this.buffer) && (this._levelBuffers = s.levelBuffers || we._createLevelBuffers(t instanceof Uint8Array ? t : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height));
  }
  upload(t, s, i) {
    const r = t.gl;
    if (!t.context.extensions[this._extension])
      throw new Error(`${this._extension} textures are not supported on the current machine`);
    if (!this._levelBuffers)
      return !1;
    for (let o = 0, a = this.levels; o < a; o++) {
      const { levelID: h, levelWidth: l, levelHeight: c, levelBuffer: u } = this._levelBuffers[o];
      r.compressedTexImage2D(r.TEXTURE_2D, h, this.format, l, c, 0, u);
    }
    return !0;
  }
  onBlobLoaded() {
    this._levelBuffers = we._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
  }
  static _formatToExtension(t) {
    if (t >= 33776 && t <= 33779)
      return "s3tc";
    if (t >= 37488 && t <= 37497)
      return "etc";
    if (t >= 35840 && t <= 35843)
      return "pvrtc";
    if (t >= 36196)
      return "etc1";
    if (t >= 35986 && t <= 34798)
      return "atc";
    throw new Error("Invalid (compressed) texture format given!");
  }
  static _createLevelBuffers(t, s, i, r, n, o, a) {
    const h = new Array(i);
    let l = t.byteOffset, c = o, u = a, d = c + r - 1 & ~(r - 1), f = u + n - 1 & ~(n - 1), p = d * f * ii[s];
    for (let _ = 0; _ < i; _++)
      h[_] = {
        levelID: _,
        levelWidth: i > 1 ? c : d,
        levelHeight: i > 1 ? u : f,
        levelBuffer: new Uint8Array(t.buffer, l, p)
      }, l += p, c = c >> 1 || 1, u = u >> 1 || 1, d = c + r - 1 & ~(r - 1), f = u + n - 1 & ~(n - 1), p = d * f * ii[s];
    return h;
  }
}
const Xi = 4, ks = 124, Kc = 32, kn = 20, Zc = 542327876, Os = {
  SIZE: 1,
  FLAGS: 2,
  HEIGHT: 3,
  WIDTH: 4,
  MIPMAP_COUNT: 7,
  PIXEL_FORMAT: 19
}, Jc = {
  SIZE: 0,
  FLAGS: 1,
  FOURCC: 2,
  RGB_BITCOUNT: 3,
  R_BIT_MASK: 4,
  G_BIT_MASK: 5,
  B_BIT_MASK: 6,
  A_BIT_MASK: 7
}, Us = {
  DXGI_FORMAT: 0,
  RESOURCE_DIMENSION: 1,
  MISC_FLAG: 2,
  ARRAY_SIZE: 3,
  MISC_FLAGS2: 4
}, Qc = 1, tu = 2, eu = 4, su = 64, iu = 512, ru = 131072, nu = 827611204, ou = 861165636, au = 894720068, hu = 808540228, lu = 4, cu = {
  [nu]: St.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [ou]: St.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [au]: St.COMPRESSED_RGBA_S3TC_DXT5_EXT
}, uu = {
  [
    70
    /* DXGI_FORMAT_BC1_TYPELESS */
  ]: St.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [
    71
    /* DXGI_FORMAT_BC1_UNORM */
  ]: St.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [
    73
    /* DXGI_FORMAT_BC2_TYPELESS */
  ]: St.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [
    74
    /* DXGI_FORMAT_BC2_UNORM */
  ]: St.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [
    76
    /* DXGI_FORMAT_BC3_TYPELESS */
  ]: St.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  [
    77
    /* DXGI_FORMAT_BC3_UNORM */
  ]: St.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  [
    72
    /* DXGI_FORMAT_BC1_UNORM_SRGB */
  ]: St.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
  [
    75
    /* DXGI_FORMAT_BC2_UNORM_SRGB */
  ]: St.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
  [
    78
    /* DXGI_FORMAT_BC3_UNORM_SRGB */
  ]: St.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
};
function du(e) {
  const t = new Uint32Array(e);
  if (t[0] !== Zc)
    throw new Error("Invalid DDS file magic word");
  const i = new Uint32Array(e, 0, ks / Uint32Array.BYTES_PER_ELEMENT), r = i[Os.HEIGHT], n = i[Os.WIDTH], o = i[Os.MIPMAP_COUNT], a = new Uint32Array(e, Os.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, Kc / Uint32Array.BYTES_PER_ELEMENT), h = a[Qc];
  if (h & eu) {
    const l = a[Jc.FOURCC];
    if (l !== hu) {
      const g = cu[l], y = Xi + ks, T = new Uint8Array(e, y);
      return [new we(T, {
        format: g,
        width: n,
        height: r,
        levels: o
      })];
    }
    const c = Xi + ks, u = new Uint32Array(t.buffer, c, kn / Uint32Array.BYTES_PER_ELEMENT), d = u[Us.DXGI_FORMAT], f = u[Us.RESOURCE_DIMENSION], p = u[Us.MISC_FLAG], _ = u[Us.ARRAY_SIZE], m = uu[d];
    if (m === void 0)
      throw new Error(`DDSParser cannot parse texture data with DXGI format ${d}`);
    if (p === lu)
      throw new Error("DDSParser does not support cubemap textures");
    if (f === 6)
      throw new Error("DDSParser does not supported 3D texture data");
    const x = new Array(), v = Xi + ks + kn;
    if (_ === 1)
      x.push(new Uint8Array(e, v));
    else {
      const g = ii[m];
      let y = 0, T = n, P = r;
      for (let E = 0; E < o; E++) {
        const N = Math.max(1, T + 3 & -4), U = Math.max(1, P + 3 & -4), R = N * U * g;
        y += R, T = T >>> 1, P = P >>> 1;
      }
      let A = v;
      for (let E = 0; E < _; E++)
        x.push(new Uint8Array(e, A, y)), A += y;
    }
    return x.map((g) => new we(g, {
      format: m,
      width: n,
      height: r,
      levels: o
    }));
  }
  throw h & su ? new Error("DDSParser does not support uncompressed texture data.") : h & iu ? new Error("DDSParser does not supported YUV uncompressed texture data.") : h & ru ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : h & tu ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
const On = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], fu = 67305985, Rt = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
}, Er = 64, Un = {
  [O.UNSIGNED_BYTE]: 1,
  [O.UNSIGNED_SHORT]: 2,
  [O.INT]: 4,
  [O.UNSIGNED_INT]: 4,
  [O.FLOAT]: 4,
  [O.HALF_FLOAT]: 8
}, pu = {
  [C.RGBA]: 4,
  [C.RGB]: 3,
  [C.RG]: 2,
  [C.RED]: 1,
  [C.LUMINANCE]: 1,
  [C.LUMINANCE_ALPHA]: 2,
  [C.ALPHA]: 1
}, mu = {
  [O.UNSIGNED_SHORT_4_4_4_4]: 2,
  [O.UNSIGNED_SHORT_5_5_5_1]: 2,
  [O.UNSIGNED_SHORT_5_6_5]: 2
};
function gu(e, t, s = !1) {
  const i = new DataView(t);
  if (!_u(e, i))
    return null;
  const r = i.getUint32(Rt.ENDIANNESS, !0) === fu, n = i.getUint32(Rt.GL_TYPE, r), o = i.getUint32(Rt.GL_FORMAT, r), a = i.getUint32(Rt.GL_INTERNAL_FORMAT, r), h = i.getUint32(Rt.PIXEL_WIDTH, r), l = i.getUint32(Rt.PIXEL_HEIGHT, r) || 1, c = i.getUint32(Rt.PIXEL_DEPTH, r) || 1, u = i.getUint32(Rt.NUMBER_OF_ARRAY_ELEMENTS, r) || 1, d = i.getUint32(Rt.NUMBER_OF_FACES, r), f = i.getUint32(Rt.NUMBER_OF_MIPMAP_LEVELS, r), p = i.getUint32(Rt.BYTES_OF_KEY_VALUE_DATA, r);
  if (l === 0 || c !== 1)
    throw new Error("Only 2D textures are supported");
  if (d !== 1)
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (u !== 1)
    throw new Error("WebGL does not support array textures");
  const _ = 4, m = 4, x = h + 3 & -4, v = l + 3 & -4, g = new Array(u);
  let y = h * l;
  n === 0 && (y = x * v);
  let T;
  if (n !== 0 ? Un[n] ? T = Un[n] * pu[o] : T = mu[n] : T = ii[a], T === void 0)
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  const P = s ? yu(i, p, r) : null;
  let E = y * T, N = h, U = l, R = x, L = v, w = Er + p;
  for (let b = 0; b < f; b++) {
    const V = i.getUint32(w, r);
    let W = w + 4;
    for (let D = 0; D < u; D++) {
      let q = g[D];
      q || (q = g[D] = new Array(f)), q[b] = {
        levelID: b,
        levelWidth: f > 1 || n !== 0 ? N : R,
        levelHeight: f > 1 || n !== 0 ? U : L,
        levelBuffer: new Uint8Array(t, W, E)
      }, W += E;
    }
    w += V + 4, w = w % 4 !== 0 ? w + 4 - w % 4 : w, N = N >> 1 || 1, U = U >> 1 || 1, R = N + _ - 1 & ~(_ - 1), L = U + m - 1 & ~(m - 1), E = R * L * T;
  }
  return n !== 0 ? {
    uncompressed: g.map((b) => {
      let V = b[0].levelBuffer, W = !1;
      return n === O.FLOAT ? V = new Float32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4) : n === O.UNSIGNED_INT ? (W = !0, V = new Uint32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)) : n === O.INT && (W = !0, V = new Int32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)), {
        resource: new _s(V, {
          width: b[0].levelWidth,
          height: b[0].levelHeight
        }),
        type: n,
        format: W ? xu(o) : o
      };
    }),
    kvData: P
  } : {
    compressed: g.map((b) => new we(null, {
      format: a,
      width: h,
      height: l,
      levels: f,
      levelBuffers: b
    })),
    kvData: P
  };
}
function _u(e, t) {
  for (let s = 0; s < On.length; s++)
    if (t.getUint8(s) !== On[s])
      return console.error(`${e} is not a valid *.ktx file!`), !1;
  return !0;
}
function xu(e) {
  switch (e) {
    case C.RGBA:
      return C.RGBA_INTEGER;
    case C.RGB:
      return C.RGB_INTEGER;
    case C.RG:
      return C.RG_INTEGER;
    case C.RED:
      return C.RED_INTEGER;
    default:
      return e;
  }
}
function yu(e, t, s) {
  const i = /* @__PURE__ */ new Map();
  let r = 0;
  for (; r < t; ) {
    const n = e.getUint32(Er + r, s), o = Er + r + 4, a = 3 - (n + 3) % 4;
    if (n === 0 || n > t - r) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let h = 0;
    for (; h < n && e.getUint8(o + h) !== 0; h++)
      ;
    if (h === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    const l = new TextDecoder().decode(new Uint8Array(e.buffer, o, h)), c = new DataView(e.buffer, o + h + 1, n - h - 1);
    i.set(l, c), r += 4 + n + a;
  }
  return i;
}
const vu = {
  extension: {
    type: M.LoadParser,
    priority: Zt.High
  },
  name: "loadDDS",
  test(e) {
    return Re(e, ".dds");
  },
  async load(e, t, s) {
    const r = await (await I.ADAPTER.fetch(e)).arrayBuffer(), o = du(r).map((a) => {
      const h = new X(a, {
        mipmap: Kt.OFF,
        alphaMode: Gt.NO_PREMULTIPLIED_ALPHA,
        resolution: ue(e),
        ...t.data
      });
      return gi(h, s, e);
    });
    return o.length === 1 ? o[0] : o;
  },
  unload(e) {
    Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
  }
};
k.add(vu);
const bu = {
  extension: {
    type: M.LoadParser,
    priority: Zt.High
  },
  name: "loadKTX",
  test(e) {
    return Re(e, ".ktx");
  },
  async load(e, t, s) {
    const r = await (await I.ADAPTER.fetch(e)).arrayBuffer(), { compressed: n, uncompressed: o, kvData: a } = gu(e, r), h = n ?? o, l = {
      mipmap: Kt.OFF,
      alphaMode: Gt.NO_PREMULTIPLIED_ALPHA,
      resolution: ue(e),
      ...t.data
    }, c = h.map((u) => {
      h === o && Object.assign(l, {
        type: u.type,
        format: u.format
      });
      const d = new X(u, l);
      return d.ktxKeyValueData = a, gi(d, s, e);
    });
    return c.length === 1 ? c[0] : c;
  },
  unload(e) {
    Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
  }
};
k.add(bu);
const Tu = {
  extension: M.ResolveParser,
  test: (e) => {
    const s = e.split("?")[0].split(".").pop();
    return ["basis", "ktx", "dds"].includes(s);
  },
  parse: (e) => {
    var i, r;
    if (e.split("?")[0].split(".").pop() === "ktx") {
      const n = [
        ".s3tc.ktx",
        ".s3tc_sRGB.ktx",
        ".etc.ktx",
        ".etc1.ktx",
        ".pvrt.ktx",
        ".atc.ktx",
        ".astc.ktx"
      ];
      if (n.some((o) => e.endsWith(o)))
        return {
          resolution: parseFloat(((i = I.RETINA_PREFIX.exec(e)) == null ? void 0 : i[1]) ?? "1"),
          format: n.find((o) => e.endsWith(o)),
          src: e
        };
    }
    return {
      resolution: parseFloat(((r = I.RETINA_PREFIX.exec(e)) == null ? void 0 : r[1]) ?? "1"),
      format: e.split(".").pop(),
      src: e
    };
  }
};
k.add(Tu);
const Eu = new z(), wu = 4, wr = class {
  constructor(e) {
    this.renderer = e;
  }
  async image(e, t, s) {
    const i = new Image();
    return i.src = await this.base64(e, t, s), i;
  }
  async base64(e, t, s) {
    const i = this.canvas(e);
    if (i.toDataURL !== void 0)
      return i.toDataURL(t, s);
    if (i.convertToBlob !== void 0) {
      const r = await i.convertToBlob({ type: t, quality: s });
      return await new Promise((n) => {
        const o = new FileReader();
        o.onload = () => n(o.result), o.readAsDataURL(r);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL or ICanvas.convertToBlob to be implemented");
  }
  canvas(e, t) {
    const { pixels: s, width: i, height: r, flipY: n } = this._rawPixels(e, t);
    let o = new pn(i, r, 1);
    const a = o.context.getImageData(0, 0, i, r);
    if (wr.arrayPostDivide(s, a.data), o.context.putImageData(a, 0, 0), n) {
      const h = new pn(o.width, o.height, 1);
      h.context.scale(1, -1), h.context.drawImage(o.canvas, 0, -r), o.destroy(), o = h;
    }
    return o.canvas;
  }
  pixels(e, t) {
    const { pixels: s } = this._rawPixels(e, t);
    return wr.arrayPostDivide(s, s), s;
  }
  _rawPixels(e, t) {
    const s = this.renderer;
    if (!s)
      throw new Error("The Extract has already been destroyed");
    let i, r = !1, n, o = !1;
    if (e)
      if (e instanceof pe)
        n = e;
      else {
        const u = s.context.webGLVersion >= 2 ? s.multisample : nt.NONE;
        if (n = s.generateTexture(e, { multisample: u }), u !== nt.NONE) {
          const d = pe.create({
            width: n.width,
            height: n.height
          });
          s.framebuffer.bind(n.framebuffer), s.framebuffer.blit(d.framebuffer), s.framebuffer.bind(), n.destroy(!0), n = d;
        }
        o = !0;
      }
    n ? (i = n.baseTexture.resolution, t = t ?? n.frame, r = !1, s.renderTexture.bind(n)) : (i = s.resolution, t || (t = Eu, t.width = s.width, t.height = s.height), r = !0, s.renderTexture.bind());
    const a = Math.round(t.width * i), h = Math.round(t.height * i), l = new Uint8Array(wu * a * h), c = s.gl;
    return c.readPixels(Math.round(t.x * i), Math.round(t.y * i), a, h, c.RGBA, c.UNSIGNED_BYTE, l), o && (n == null || n.destroy(!0)), { pixels: l, width: a, height: h, flipY: r };
  }
  destroy() {
    this.renderer = null;
  }
  static arrayPostDivide(e, t) {
    for (let s = 0; s < e.length; s += 4) {
      const i = t[s + 3] = e[s + 3];
      i !== 0 ? (t[s] = Math.round(Math.min(e[s] * 255 / i, 255)), t[s + 1] = Math.round(Math.min(e[s + 1] * 255 / i, 255)), t[s + 2] = Math.round(Math.min(e[s + 2] * 255 / i, 255))) : (t[s] = e[s], t[s + 1] = e[s + 1], t[s + 2] = e[s + 2]);
    }
  }
};
let ta = wr;
ta.extension = {
  name: "extract",
  type: M.RendererSystem
};
k.add(ta);
const ri = {
  build(e) {
    const t = e.points;
    let s, i, r, n, o, a;
    if (e.type === _t.CIRC) {
      const p = e.shape;
      s = p.x, i = p.y, o = a = p.radius, r = n = 0;
    } else if (e.type === _t.ELIP) {
      const p = e.shape;
      s = p.x, i = p.y, o = p.width, a = p.height, r = n = 0;
    } else {
      const p = e.shape, _ = p.width / 2, m = p.height / 2;
      s = p.x + _, i = p.y + m, o = a = Math.max(0, Math.min(p.radius, Math.min(_, m))), r = _ - o, n = m - a;
    }
    if (!(o >= 0 && a >= 0 && r >= 0 && n >= 0)) {
      t.length = 0;
      return;
    }
    const h = Math.ceil(2.3 * Math.sqrt(o + a)), l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
    if (t.length = l, l === 0)
      return;
    if (h === 0) {
      t.length = 8, t[0] = t[6] = s + r, t[1] = t[3] = i + n, t[2] = t[4] = s - r, t[5] = t[7] = i - n;
      return;
    }
    let c = 0, u = h * 4 + (r ? 2 : 0) + 2, d = u, f = l;
    {
      const p = r + o, _ = n, m = s + p, x = s - p, v = i + _;
      if (t[c++] = m, t[c++] = v, t[--u] = v, t[--u] = x, n) {
        const g = i - _;
        t[d++] = x, t[d++] = g, t[--f] = g, t[--f] = m;
      }
    }
    for (let p = 1; p < h; p++) {
      const _ = Math.PI / 2 * (p / h), m = r + Math.cos(_) * o, x = n + Math.sin(_) * a, v = s + m, g = s - m, y = i + x, T = i - x;
      t[c++] = v, t[c++] = y, t[--u] = y, t[--u] = g, t[d++] = g, t[d++] = T, t[--f] = T, t[--f] = v;
    }
    {
      const p = r, _ = n + a, m = s + p, x = s - p, v = i + _, g = i - _;
      t[c++] = m, t[c++] = v, t[--f] = g, t[--f] = m, r && (t[c++] = x, t[c++] = v, t[--f] = g, t[--f] = x);
    }
  },
  triangulate(e, t) {
    const s = e.points, i = t.points, r = t.indices;
    if (s.length === 0)
      return;
    let n = i.length / 2;
    const o = n;
    let a, h;
    if (e.type !== _t.RREC) {
      const c = e.shape;
      a = c.x, h = c.y;
    } else {
      const c = e.shape;
      a = c.x + c.width / 2, h = c.y + c.height / 2;
    }
    const l = e.matrix;
    i.push(e.matrix ? l.a * a + l.c * h + l.tx : a, e.matrix ? l.b * a + l.d * h + l.ty : h), n++, i.push(s[0], s[1]);
    for (let c = 2; c < s.length; c += 2)
      i.push(s[c], s[c + 1]), r.push(n++, o, n);
    r.push(o + 1, o, n);
  }
};
function Gn(e, t = !1) {
  const s = e.length;
  if (s < 6)
    return;
  let i = 0;
  for (let r = 0, n = e[s - 2], o = e[s - 1]; r < s; r += 2) {
    const a = e[r], h = e[r + 1];
    i += (a - n) * (h + o), n = a, o = h;
  }
  if (!t && i > 0 || t && i <= 0) {
    const r = s / 2;
    for (let n = r + r % 2; n < s; n += 2) {
      const o = s - n - 2, a = s - n - 1, h = n, l = n + 1;
      [e[o], e[h]] = [e[h], e[o]], [e[a], e[l]] = [e[l], e[a]];
    }
  }
}
const ea = {
  build(e) {
    e.points = e.shape.points.slice();
  },
  triangulate(e, t) {
    let s = e.points;
    const i = e.holes, r = t.points, n = t.indices;
    if (s.length >= 6) {
      Gn(s, !1);
      const o = [];
      for (let l = 0; l < i.length; l++) {
        const c = i[l];
        Gn(c.points, !0), o.push(s.length / 2), s = s.concat(c.points);
      }
      const a = qs(s, o, 2);
      if (!a)
        return;
      const h = r.length / 2;
      for (let l = 0; l < a.length; l += 3)
        n.push(a[l] + h), n.push(a[l + 1] + h), n.push(a[l + 2] + h);
      for (let l = 0; l < s.length; l++)
        r.push(s[l]);
    }
  }
}, Su = {
  build(e) {
    const t = e.shape, s = t.x, i = t.y, r = t.width, n = t.height, o = e.points;
    o.length = 0, r >= 0 && n >= 0 && o.push(s, i, s + r, i, s + r, i + n, s, i + n);
  },
  triangulate(e, t) {
    const s = e.points, i = t.points;
    if (s.length === 0)
      return;
    const r = i.length / 2;
    i.push(s[0], s[1], s[2], s[3], s[6], s[7], s[4], s[5]), t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3);
  }
}, Au = {
  build(e) {
    ri.build(e);
  },
  triangulate(e, t) {
    ri.triangulate(e, t);
  }
};
var Dt = /* @__PURE__ */ ((e) => (e.MITER = "miter", e.BEVEL = "bevel", e.ROUND = "round", e))(Dt || {}), Ee = /* @__PURE__ */ ((e) => (e.BUTT = "butt", e.ROUND = "round", e.SQUARE = "square", e))(Ee || {});
const je = {
  adaptive: !0,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount(e, t = 20) {
    if (!this.adaptive || !e || isNaN(e))
      return t;
    let s = Math.ceil(e / this.maxLength);
    return s < this.minSegments ? s = this.minSegments : s > this.maxSegments && (s = this.maxSegments), s;
  }
};
class Hn {
  static curveTo(t, s, i, r, n, o) {
    const a = o[o.length - 2], l = o[o.length - 1] - s, c = a - t, u = r - s, d = i - t, f = Math.abs(l * d - c * u);
    if (f < 1e-8 || n === 0)
      return (o[o.length - 2] !== t || o[o.length - 1] !== s) && o.push(t, s), null;
    const p = l * l + c * c, _ = u * u + d * d, m = l * u + c * d, x = n * Math.sqrt(p) / f, v = n * Math.sqrt(_) / f, g = x * m / p, y = v * m / _, T = x * d + v * c, P = x * u + v * l, A = c * (v + g), E = l * (v + g), N = d * (x + y), U = u * (x + y), R = Math.atan2(E - P, A - T), L = Math.atan2(U - P, N - T);
    return {
      cx: T + t,
      cy: P + s,
      radius: n,
      startAngle: R,
      endAngle: L,
      anticlockwise: c * u > d * l
    };
  }
  static arc(t, s, i, r, n, o, a, h, l) {
    const c = a - o, u = je._segmentsCount(Math.abs(c) * n, Math.ceil(Math.abs(c) / Qs) * 40), d = c / (u * 2), f = d * 2, p = Math.cos(d), _ = Math.sin(d), m = u - 1, x = m % 1 / m;
    for (let v = 0; v <= m; ++v) {
      const g = v + x * v, y = d + o + f * g, T = Math.cos(y), P = -Math.sin(y);
      l.push((p * T + _ * P) * n + i, (p * -P + _ * T) * n + r);
    }
  }
}
class Cu {
  constructor() {
    this.reset();
  }
  begin(t, s, i) {
    this.reset(), this.style = t, this.start = s, this.attribStart = i;
  }
  end(t, s) {
    this.attribSize = s - this.attribStart, this.size = t - this.start;
  }
  reset() {
    this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
  }
}
class kr {
  static curveLength(t, s, i, r, n, o, a, h) {
    let c = 0, u = 0, d = 0, f = 0, p = 0, _ = 0, m = 0, x = 0, v = 0, g = 0, y = 0, T = t, P = s;
    for (let A = 1; A <= 10; ++A)
      u = A / 10, d = u * u, f = d * u, p = 1 - u, _ = p * p, m = _ * p, x = m * t + 3 * _ * u * i + 3 * p * d * n + f * a, v = m * s + 3 * _ * u * r + 3 * p * d * o + f * h, g = T - x, y = P - v, T = x, P = v, c += Math.sqrt(g * g + y * y);
    return c;
  }
  static curveTo(t, s, i, r, n, o, a) {
    const h = a[a.length - 2], l = a[a.length - 1];
    a.length -= 2;
    const c = je._segmentsCount(kr.curveLength(h, l, t, s, i, r, n, o));
    let u = 0, d = 0, f = 0, p = 0, _ = 0;
    a.push(h, l);
    for (let m = 1, x = 0; m <= c; ++m)
      x = m / c, u = 1 - x, d = u * u, f = d * u, p = x * x, _ = p * x, a.push(f * h + 3 * d * x * t + 3 * u * p * i + _ * n, f * l + 3 * d * x * s + 3 * u * p * r + _ * o);
  }
}
function Xn(e, t, s, i, r, n, o, a) {
  const h = e - s * r, l = t - i * r, c = e + s * n, u = t + i * n;
  let d, f;
  o ? (d = i, f = -s) : (d = -i, f = s);
  const p = h + d, _ = l + f, m = c + d, x = u + f;
  return a.push(p, _, m, x), 2;
}
function xe(e, t, s, i, r, n, o, a) {
  const h = s - e, l = i - t;
  let c = Math.atan2(h, l), u = Math.atan2(r - e, n - t);
  a && c < u ? c += Math.PI * 2 : !a && c > u && (u += Math.PI * 2);
  let d = c;
  const f = u - c, p = Math.abs(f), _ = Math.sqrt(h * h + l * l), m = (15 * p * Math.sqrt(_) / Math.PI >> 0) + 1, x = f / m;
  if (d += x, a) {
    o.push(e, t, s, i);
    for (let v = 1, g = d; v < m; v++, g += x)
      o.push(e, t, e + Math.sin(g) * _, t + Math.cos(g) * _);
    o.push(e, t, r, n);
  } else {
    o.push(s, i, e, t);
    for (let v = 1, g = d; v < m; v++, g += x)
      o.push(e + Math.sin(g) * _, t + Math.cos(g) * _, e, t);
    o.push(r, n, e, t);
  }
  return m * 2;
}
function Iu(e, t) {
  const s = e.shape;
  let i = e.points || s.points.slice();
  const r = t.closePointEps;
  if (i.length === 0)
    return;
  const n = e.lineStyle, o = new Y(i[0], i[1]), a = new Y(i[i.length - 2], i[i.length - 1]), h = s.type !== _t.POLY || s.closeStroke, l = Math.abs(o.x - a.x) < r && Math.abs(o.y - a.y) < r;
  if (h) {
    i = i.slice(), l && (i.pop(), i.pop(), a.set(i[i.length - 2], i[i.length - 1]));
    const D = (o.x + a.x) * 0.5, q = (a.y + o.y) * 0.5;
    i.unshift(D, q), i.push(D, q);
  }
  const c = t.points, u = i.length / 2;
  let d = i.length;
  const f = c.length / 2, p = n.width / 2, _ = p * p, m = n.miterLimit * n.miterLimit;
  let x = i[0], v = i[1], g = i[2], y = i[3], T = 0, P = 0, A = -(v - y), E = x - g, N = 0, U = 0, R = Math.sqrt(A * A + E * E);
  A /= R, E /= R, A *= p, E *= p;
  const L = n.alignment, w = (1 - L) * 2, b = L * 2;
  h || (n.cap === Ee.ROUND ? d += xe(x - A * (w - b) * 0.5, v - E * (w - b) * 0.5, x - A * w, v - E * w, x + A * b, v + E * b, c, !0) + 2 : n.cap === Ee.SQUARE && (d += Xn(x, v, A, E, w, b, !0, c))), c.push(x - A * w, v - E * w, x + A * b, v + E * b);
  for (let D = 1; D < u - 1; ++D) {
    x = i[(D - 1) * 2], v = i[(D - 1) * 2 + 1], g = i[D * 2], y = i[D * 2 + 1], T = i[(D + 1) * 2], P = i[(D + 1) * 2 + 1], A = -(v - y), E = x - g, R = Math.sqrt(A * A + E * E), A /= R, E /= R, A *= p, E *= p, N = -(y - P), U = g - T, R = Math.sqrt(N * N + U * U), N /= R, U /= R, N *= p, U *= p;
    const q = g - x, rt = v - y, S = g - T, H = P - y, j = q * S + rt * H, K = rt * S - H * q, J = K < 0;
    if (Math.abs(K) < 1e-3 * Math.abs(j)) {
      c.push(g - A * w, y - E * w, g + A * b, y + E * b), j >= 0 && (n.join === Dt.ROUND ? d += xe(g, y, g - A * w, y - E * w, g - N * w, y - U * w, c, !1) + 4 : d += 2, c.push(g - N * b, y - U * b, g + N * w, y + U * w));
      continue;
    }
    const dt = (-A + x) * (-E + y) - (-A + g) * (-E + v), at = (-N + T) * (-U + y) - (-N + g) * (-U + P), ft = (q * at - S * dt) / K, yt = (H * dt - rt * at) / K, Et = (ft - g) * (ft - g) + (yt - y) * (yt - y), mt = g + (ft - g) * w, Q = y + (yt - y) * w, ht = g - (ft - g) * b, ct = y - (yt - y) * b, Ht = Math.min(q * q + rt * rt, S * S + H * H), Xt = J ? w : b, Ze = Ht + Xt * Xt * _, fa = Et <= Ze;
    let bs = n.join;
    if (bs === Dt.MITER && Et / _ > m && (bs = Dt.BEVEL), fa)
      switch (bs) {
        case Dt.MITER: {
          c.push(mt, Q, ht, ct);
          break;
        }
        case Dt.BEVEL: {
          J ? c.push(mt, Q, g + A * b, y + E * b, mt, Q, g + N * b, y + U * b) : c.push(g - A * w, y - E * w, ht, ct, g - N * w, y - U * w, ht, ct), d += 2;
          break;
        }
        case Dt.ROUND: {
          J ? (c.push(mt, Q, g + A * b, y + E * b), d += xe(g, y, g + A * b, y + E * b, g + N * b, y + U * b, c, !0) + 4, c.push(mt, Q, g + N * b, y + U * b)) : (c.push(g - A * w, y - E * w, ht, ct), d += xe(g, y, g - A * w, y - E * w, g - N * w, y - U * w, c, !1) + 4, c.push(g - N * w, y - U * w, ht, ct));
          break;
        }
      }
    else {
      switch (c.push(g - A * w, y - E * w, g + A * b, y + E * b), bs) {
        case Dt.MITER: {
          J ? c.push(ht, ct, ht, ct) : c.push(mt, Q, mt, Q), d += 2;
          break;
        }
        case Dt.ROUND: {
          J ? d += xe(g, y, g + A * b, y + E * b, g + N * b, y + U * b, c, !0) + 2 : d += xe(g, y, g - A * w, y - E * w, g - N * w, y - U * w, c, !1) + 2;
          break;
        }
      }
      c.push(g - N * w, y - U * w, g + N * b, y + U * b), d += 2;
    }
  }
  x = i[(u - 2) * 2], v = i[(u - 2) * 2 + 1], g = i[(u - 1) * 2], y = i[(u - 1) * 2 + 1], A = -(v - y), E = x - g, R = Math.sqrt(A * A + E * E), A /= R, E /= R, A *= p, E *= p, c.push(g - A * w, y - E * w, g + A * b, y + E * b), h || (n.cap === Ee.ROUND ? d += xe(g - A * (w - b) * 0.5, y - E * (w - b) * 0.5, g - A * w, y - E * w, g + A * b, y + E * b, c, !1) + 2 : n.cap === Ee.SQUARE && (d += Xn(g, y, A, E, w, b, !1, c)));
  const V = t.indices, W = je.epsilon * je.epsilon;
  for (let D = f; D < d + f - 2; ++D)
    x = c[D * 2], v = c[D * 2 + 1], g = c[(D + 1) * 2], y = c[(D + 1) * 2 + 1], T = c[(D + 2) * 2], P = c[(D + 2) * 2 + 1], !(Math.abs(x * (y - P) + g * (P - v) + T * (v - y)) < W) && V.push(D, D + 1, D + 2);
}
function Ru(e, t) {
  let s = 0;
  const i = e.shape, r = e.points || i.points, n = i.type !== _t.POLY || i.closeStroke;
  if (r.length === 0)
    return;
  const o = t.points, a = t.indices, h = r.length / 2, l = o.length / 2;
  let c = l;
  for (o.push(r[0], r[1]), s = 1; s < h; s++)
    o.push(r[s * 2], r[s * 2 + 1]), a.push(c, c + 1), c++;
  n && a.push(c, l);
}
function Vn(e, t) {
  e.lineStyle.native ? Ru(e, t) : Iu(e, t);
}
class Or {
  static curveLength(t, s, i, r, n, o) {
    const a = t - 2 * i + n, h = s - 2 * r + o, l = 2 * i - 2 * t, c = 2 * r - 2 * s, u = 4 * (a * a + h * h), d = 4 * (a * l + h * c), f = l * l + c * c, p = 2 * Math.sqrt(u + d + f), _ = Math.sqrt(u), m = 2 * u * _, x = 2 * Math.sqrt(f), v = d / _;
    return (m * p + _ * d * (p - x) + (4 * f * u - d * d) * Math.log((2 * _ + v + p) / (v + x))) / (4 * m);
  }
  static curveTo(t, s, i, r, n) {
    const o = n[n.length - 2], a = n[n.length - 1], h = je._segmentsCount(Or.curveLength(o, a, t, s, i, r));
    let l = 0, c = 0;
    for (let u = 1; u <= h; ++u) {
      const d = u / h;
      l = o + (t - o) * d, c = a + (s - a) * d, n.push(l + (t + (i - t) * d - l) * d, c + (s + (r - s) * d - c) * d);
    }
  }
}
const Vi = {
  [_t.POLY]: ea,
  [_t.CIRC]: ri,
  [_t.ELIP]: ri,
  [_t.RECT]: Su,
  [_t.RREC]: Au
}, zn = [], Gs = [];
class ni {
  constructor(t, s = null, i = null, r = null) {
    this.points = [], this.holes = [], this.shape = t, this.lineStyle = i, this.fillStyle = s, this.matrix = r, this.type = t.type;
  }
  clone() {
    return new ni(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
  }
}
const Be = new Y(), sa = class extends co {
  constructor() {
    super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = !1, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new ti(), this.boundsDirty = -1;
  }
  get bounds() {
    return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
  }
  invalidate() {
    this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
    for (let e = 0; e < this.drawCalls.length; e++)
      this.drawCalls[e].texArray.clear(), Gs.push(this.drawCalls[e]);
    this.drawCalls.length = 0;
    for (let e = 0; e < this.batches.length; e++) {
      const t = this.batches[e];
      t.reset(), zn.push(t);
    }
    this.batches.length = 0;
  }
  clear() {
    return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
  }
  drawShape(e, t = null, s = null, i = null) {
    const r = new ni(e, t, s, i);
    return this.graphicsData.push(r), this.dirty++, this;
  }
  drawHole(e, t = null) {
    if (!this.graphicsData.length)
      return null;
    const s = new ni(e, null, null, t), i = this.graphicsData[this.graphicsData.length - 1];
    return s.lineStyle = i.lineStyle, i.holes.push(s), this.dirty++, this;
  }
  destroy() {
    super.destroy();
    for (let e = 0; e < this.graphicsData.length; ++e)
      this.graphicsData[e].destroy();
    this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
  }
  containsPoint(e) {
    const t = this.graphicsData;
    for (let s = 0; s < t.length; ++s) {
      const i = t[s];
      if (i.fillStyle.visible && i.shape && (i.matrix ? i.matrix.applyInverse(e, Be) : Be.copyFrom(e), i.shape.contains(Be.x, Be.y))) {
        let r = !1;
        if (i.holes) {
          for (let n = 0; n < i.holes.length; n++)
            if (i.holes[n].shape.contains(Be.x, Be.y)) {
              r = !0;
              break;
            }
        }
        if (!r)
          return !0;
      }
    }
    return !1;
  }
  updateBatches() {
    if (!this.graphicsData.length) {
      this.batchable = !0;
      return;
    }
    if (!this.validateBatching())
      return;
    this.cacheDirty = this.dirty;
    const e = this.uvs, t = this.graphicsData;
    let s = null, i = null;
    this.batches.length > 0 && (s = this.batches[this.batches.length - 1], i = s.style);
    for (let a = this.shapeIndex; a < t.length; a++) {
      this.shapeIndex++;
      const h = t[a], l = h.fillStyle, c = h.lineStyle;
      Vi[h.type].build(h), h.matrix && this.transformPoints(h.points, h.matrix), (l.visible || c.visible) && this.processHoles(h.holes);
      for (let d = 0; d < 2; d++) {
        const f = d === 0 ? l : c;
        if (!f.visible)
          continue;
        const p = f.texture.baseTexture, _ = this.indices.length, m = this.points.length / 2;
        p.wrapMode = ce.REPEAT, d === 0 ? this.processFill(h) : this.processLine(h);
        const x = this.points.length / 2 - m;
        x !== 0 && (s && !this._compareStyles(i, f) && (s.end(_, m), s = null), s || (s = zn.pop() || new Cu(), s.begin(f, _, m), this.batches.push(s), i = f), this.addUvs(this.points, e, f.texture, m, x, f.matrix));
      }
    }
    const r = this.indices.length, n = this.points.length / 2;
    if (s && s.end(r, n), this.batches.length === 0) {
      this.batchable = !0;
      return;
    }
    const o = n > 65535;
    this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls();
  }
  _compareStyles(e, t) {
    return !(!e || !t || e.texture.baseTexture !== t.texture.baseTexture || e.color + e.alpha !== t.color + t.alpha || !!e.native != !!t.native);
  }
  validateBatching() {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length)
      return !1;
    for (let e = 0, t = this.graphicsData.length; e < t; e++) {
      const s = this.graphicsData[e], i = s.fillStyle, r = s.lineStyle;
      if (i && !i.texture.baseTexture.valid || r && !r.texture.baseTexture.valid)
        return !1;
    }
    return !0;
  }
  packBatches() {
    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
    const e = this.batches;
    for (let t = 0, s = e.length; t < s; t++) {
      const i = e[t];
      for (let r = 0; r < i.size; r++) {
        const n = i.start + r;
        this.indicesUint16[n] = this.indicesUint16[n] - i.attribStart;
      }
    }
  }
  isBatchable() {
    if (this.points.length > 65535 * 2)
      return !1;
    const e = this.batches;
    for (let t = 0; t < e.length; t++)
      if (e[t].style.native)
        return !1;
    return this.points.length < sa.BATCHABLE_SIZE * 2;
  }
  buildDrawCalls() {
    let e = ++X._globalBatch;
    for (let c = 0; c < this.drawCalls.length; c++)
      this.drawCalls[c].texArray.clear(), Gs.push(this.drawCalls[c]);
    this.drawCalls.length = 0;
    const t = this.colors, s = this.textureIds;
    let i = Gs.pop();
    i || (i = new cr(), i.texArray = new dr()), i.texArray.count = 0, i.start = 0, i.size = 0, i.type = jt.TRIANGLES;
    let r = 0, n = null, o = 0, a = !1, h = jt.TRIANGLES, l = 0;
    this.drawCalls.push(i);
    for (let c = 0; c < this.batches.length; c++) {
      const u = this.batches[c], d = 8, f = u.style, p = f.texture.baseTexture;
      a !== !!f.native && (a = !!f.native, h = a ? jt.LINES : jt.TRIANGLES, n = null, r = d, e++), n !== p && (n = p, p._batchEnabled !== e && (r === d && (e++, r = 0, i.size > 0 && (i = Gs.pop(), i || (i = new cr(), i.texArray = new dr()), this.drawCalls.push(i)), i.start = l, i.size = 0, i.texArray.count = 0, i.type = h), p.touched = 1, p._batchEnabled = e, p._batchLocation = r, p.wrapMode = ce.REPEAT, i.texArray.elements[i.texArray.count++] = p, r++)), i.size += u.size, l += u.size, o = p._batchLocation, this.addColors(t, f.color, f.alpha, u.attribSize, u.attribStart), this.addTextureIds(s, o, u.attribSize, u.attribStart);
    }
    X._globalBatch = e, this.packAttributes();
  }
  packAttributes() {
    const e = this.points, t = this.uvs, s = this.colors, i = this.textureIds, r = new ArrayBuffer(e.length * 3 * 4), n = new Float32Array(r), o = new Uint32Array(r);
    let a = 0;
    for (let h = 0; h < e.length / 2; h++)
      n[a++] = e[h * 2], n[a++] = e[h * 2 + 1], n[a++] = t[h * 2], n[a++] = t[h * 2 + 1], o[a++] = s[h], n[a++] = i[h];
    this._buffer.update(r), this._indexBuffer.update(this.indicesUint16);
  }
  processFill(e) {
    e.holes.length ? ea.triangulate(e, this) : Vi[e.type].triangulate(e, this);
  }
  processLine(e) {
    Vn(e, this);
    for (let t = 0; t < e.holes.length; t++)
      Vn(e.holes[t], this);
  }
  processHoles(e) {
    for (let t = 0; t < e.length; t++) {
      const s = e[t];
      Vi[s.type].build(s), s.matrix && this.transformPoints(s.points, s.matrix);
    }
  }
  calculateBounds() {
    const e = this._bounds;
    e.clear(), e.addVertexData(this.points, 0, this.points.length), e.pad(this.boundsPadding, this.boundsPadding);
  }
  transformPoints(e, t) {
    for (let s = 0; s < e.length / 2; s++) {
      const i = e[s * 2], r = e[s * 2 + 1];
      e[s * 2] = t.a * i + t.c * r + t.tx, e[s * 2 + 1] = t.b * i + t.d * r + t.ty;
    }
  }
  addColors(e, t, s, i, r = 0) {
    const n = Z.shared.setValue(t).toLittleEndianNumber(), o = Z.shared.setValue(n).toPremultiplied(s);
    e.length = Math.max(e.length, r + i);
    for (let a = 0; a < i; a++)
      e[r + a] = o;
  }
  addTextureIds(e, t, s, i = 0) {
    e.length = Math.max(e.length, i + s);
    for (let r = 0; r < s; r++)
      e[i + r] = t;
  }
  addUvs(e, t, s, i, r, n = null) {
    let o = 0;
    const a = t.length, h = s.frame;
    for (; o < r; ) {
      let c = e[(i + o) * 2], u = e[(i + o) * 2 + 1];
      if (n) {
        const d = n.a * c + n.c * u + n.tx;
        u = n.b * c + n.d * u + n.ty, c = d;
      }
      o++, t.push(c / h.width, u / h.height);
    }
    const l = s.baseTexture;
    (h.width < l.width || h.height < l.height) && this.adjustUvs(t, s, a, r);
  }
  adjustUvs(e, t, s, i) {
    const r = t.baseTexture, n = 1e-6, o = s + i * 2, a = t.frame, h = a.width / r.width, l = a.height / r.height;
    let c = a.x / a.width, u = a.y / a.height, d = Math.floor(e[s] + n), f = Math.floor(e[s + 1] + n);
    for (let p = s + 2; p < o; p += 2)
      d = Math.min(d, Math.floor(e[p] + n)), f = Math.min(f, Math.floor(e[p + 1] + n));
    c -= d, u -= f;
    for (let p = s; p < o; p += 2)
      e[p] = (e[p] + c) * h, e[p + 1] = (e[p + 1] + u) * l;
  }
};
let ia = sa;
ia.BATCHABLE_SIZE = 100;
class xi {
  constructor() {
    this.color = 16777215, this.alpha = 1, this.texture = B.WHITE, this.matrix = null, this.visible = !1, this.reset();
  }
  clone() {
    const t = new xi();
    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t;
  }
  reset() {
    this.color = 16777215, this.alpha = 1, this.texture = B.WHITE, this.matrix = null, this.visible = !1;
  }
  destroy() {
    this.texture = null, this.matrix = null;
  }
}
class Ur extends xi {
  constructor() {
    super(...arguments), this.width = 0, this.alignment = 0.5, this.native = !1, this.cap = Ee.BUTT, this.join = Dt.MITER, this.miterLimit = 10;
  }
  clone() {
    const t = new Ur();
    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t;
  }
  reset() {
    super.reset(), this.color = 0, this.alignment = 0.5, this.width = 0, this.native = !1;
  }
}
const zi = {}, Ws = class extends Tt {
  constructor(e = null) {
    super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new xi(), this._lineStyle = new Ur(), this._matrix = null, this._holeMode = !1, this.state = ne.for2d(), this._geometry = e || new ia(), this._geometry.refCount++, this._transformID = -1, this._tintColor = new Z(16777215), this.blendMode = G.NORMAL;
  }
  get geometry() {
    return this._geometry;
  }
  clone() {
    return this.finishPoly(), new Ws(this._geometry);
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(e) {
    this._tintColor.setValue(e);
  }
  get fill() {
    return this._fillStyle;
  }
  get line() {
    return this._lineStyle;
  }
  lineStyle(e = null, t = 0, s, i = 0.5, r = !1) {
    return typeof e == "number" && (e = { width: e, color: t, alpha: s, alignment: i, native: r }), this.lineTextureStyle(e);
  }
  lineTextureStyle(e) {
    const t = {
      width: 0,
      texture: B.WHITE,
      color: e != null && e.texture ? 16777215 : 0,
      matrix: null,
      alignment: 0.5,
      native: !1,
      cap: Ee.BUTT,
      join: Dt.MITER,
      miterLimit: 10
    };
    e = Object.assign(t, e), this.normalizeColor(e), this.currentPath && this.startPoly();
    const s = e.width > 0 && e.alpha > 0;
    return s ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._lineStyle, { visible: s }, e)) : this._lineStyle.reset(), this;
  }
  startPoly() {
    if (this.currentPath) {
      const e = this.currentPath.points, t = this.currentPath.points.length;
      t > 2 && (this.drawShape(this.currentPath), this.currentPath = new ze(), this.currentPath.closeStroke = !1, this.currentPath.points.push(e[t - 2], e[t - 1]));
    } else
      this.currentPath = new ze(), this.currentPath.closeStroke = !1;
  }
  finishPoly() {
    this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
  }
  moveTo(e, t) {
    return this.startPoly(), this.currentPath.points[0] = e, this.currentPath.points[1] = t, this;
  }
  lineTo(e, t) {
    this.currentPath || this.moveTo(0, 0);
    const s = this.currentPath.points, i = s[s.length - 2], r = s[s.length - 1];
    return (i !== e || r !== t) && s.push(e, t), this;
  }
  _initCurve(e = 0, t = 0) {
    this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [e, t]) : this.moveTo(e, t);
  }
  quadraticCurveTo(e, t, s, i) {
    this._initCurve();
    const r = this.currentPath.points;
    return r.length === 0 && this.moveTo(0, 0), Or.curveTo(e, t, s, i, r), this;
  }
  bezierCurveTo(e, t, s, i, r, n) {
    return this._initCurve(), kr.curveTo(e, t, s, i, r, n, this.currentPath.points), this;
  }
  arcTo(e, t, s, i, r) {
    this._initCurve(e, t);
    const n = this.currentPath.points, o = Hn.curveTo(e, t, s, i, r, n);
    if (o) {
      const { cx: a, cy: h, radius: l, startAngle: c, endAngle: u, anticlockwise: d } = o;
      this.arc(a, h, l, c, u, d);
    }
    return this;
  }
  arc(e, t, s, i, r, n = !1) {
    if (i === r)
      return this;
    if (!n && r <= i ? r += Qs : n && i <= r && (i += Qs), r - i === 0)
      return this;
    const a = e + Math.cos(i) * s, h = t + Math.sin(i) * s, l = this._geometry.closePointEps;
    let c = this.currentPath ? this.currentPath.points : null;
    if (c) {
      const u = Math.abs(c[c.length - 2] - a), d = Math.abs(c[c.length - 1] - h);
      u < l && d < l || c.push(a, h);
    } else
      this.moveTo(a, h), c = this.currentPath.points;
    return Hn.arc(a, h, e, t, s, i, r, n, c), this;
  }
  beginFill(e = 0, t) {
    return this.beginTextureFill({ texture: B.WHITE, color: e, alpha: t });
  }
  normalizeColor(e) {
    const t = Z.shared.setValue(e.color ?? 0);
    e.color = t.toNumber(), e.alpha ?? (e.alpha = t.alpha);
  }
  beginTextureFill(e) {
    const t = {
      texture: B.WHITE,
      color: 16777215,
      matrix: null
    };
    e = Object.assign(t, e), this.normalizeColor(e), this.currentPath && this.startPoly();
    const s = e.alpha > 0;
    return s ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._fillStyle, { visible: s }, e)) : this._fillStyle.reset(), this;
  }
  endFill() {
    return this.finishPoly(), this._fillStyle.reset(), this;
  }
  drawRect(e, t, s, i) {
    return this.drawShape(new z(e, t, s, i));
  }
  drawRoundedRect(e, t, s, i, r) {
    return this.drawShape(new Dr(e, t, s, i, r));
  }
  drawCircle(e, t, s) {
    return this.drawShape(new Pr(e, t, s));
  }
  drawEllipse(e, t, s, i) {
    return this.drawShape(new Br(e, t, s, i));
  }
  drawPolygon(...e) {
    let t, s = !0;
    const i = e[0];
    i.points ? (s = i.closeStroke, t = i.points) : Array.isArray(e[0]) ? t = e[0] : t = e;
    const r = new ze(t);
    return r.closeStroke = s, this.drawShape(r), this;
  }
  drawShape(e) {
    return this._holeMode ? this._geometry.drawHole(e, this._matrix) : this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this;
  }
  clear() {
    return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this;
  }
  isFastRect() {
    const e = this._geometry.graphicsData;
    return e.length === 1 && e[0].shape.type === _t.RECT && !e[0].matrix && !e[0].holes.length && !(e[0].lineStyle.visible && e[0].lineStyle.width);
  }
  _render(e) {
    this.finishPoly();
    const t = this._geometry;
    t.updateBatches(), t.batchable ? (this.batchDirty !== t.batchDirty && this._populateBatches(), this._renderBatched(e)) : (e.batch.flush(), this._renderDirect(e));
  }
  _populateBatches() {
    const e = this._geometry, t = this.blendMode, s = e.batches.length;
    this.batchTint = -1, this._transformID = -1, this.batchDirty = e.batchDirty, this.batches.length = s, this.vertexData = new Float32Array(e.points);
    for (let i = 0; i < s; i++) {
      const r = e.batches[i], n = r.style.color, o = new Float32Array(this.vertexData.buffer, r.attribStart * 4 * 2, r.attribSize * 2), a = new Float32Array(e.uvsFloat32.buffer, r.attribStart * 4 * 2, r.attribSize * 2), h = new Uint16Array(e.indicesUint16.buffer, r.start * 2, r.size), l = {
        vertexData: o,
        blendMode: t,
        indices: h,
        uvs: a,
        _batchRGB: Z.shared.setValue(n).toRgbArray(),
        _tintRGB: n,
        _texture: r.style.texture,
        alpha: r.style.alpha,
        worldAlpha: 1
      };
      this.batches[i] = l;
    }
  }
  _renderBatched(e) {
    if (this.batches.length) {
      e.batch.setObjectRenderer(e.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
      for (let t = 0, s = this.batches.length; t < s; t++) {
        const i = this.batches[t];
        i.worldAlpha = this.worldAlpha * i.alpha, e.plugins[this.pluginName].render(i);
      }
    }
  }
  _renderDirect(e) {
    const t = this._resolveDirectShader(e), s = this._geometry, i = this.worldAlpha, r = t.uniforms, n = s.drawCalls;
    r.translationMatrix = this.transform.worldTransform, Z.shared.setValue(this._tintColor).premultiply(i).toArray(r.tint), e.shader.bind(t), e.geometry.bind(s, t), e.state.set(this.state);
    for (let o = 0, a = n.length; o < a; o++)
      this._renderDrawCallDirect(e, s.drawCalls[o]);
  }
  _renderDrawCallDirect(e, t) {
    const { texArray: s, type: i, size: r, start: n } = t, o = s.count;
    for (let a = 0; a < o; a++)
      e.texture.bind(s.elements[a], a);
    e.geometry.draw(i, r, n);
  }
  _resolveDirectShader(e) {
    let t = this.shader;
    const s = this.pluginName;
    if (!t) {
      if (!zi[s]) {
        const { maxTextures: i } = e.plugins[s], r = new Int32Array(i);
        for (let a = 0; a < i; a++)
          r[a] = a;
        const n = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new tt(),
          default: Ut.from({ uSamplers: r }, !0)
        }, o = e.plugins[s]._shader.program;
        zi[s] = new qt(o, n);
      }
      t = zi[s];
    }
    return t;
  }
  _calculateBounds() {
    this.finishPoly();
    const e = this._geometry;
    if (!e.graphicsData.length)
      return;
    const { minX: t, minY: s, maxX: i, maxY: r } = e.bounds;
    this._bounds.addFrame(this.transform, t, s, i, r);
  }
  containsPoint(e) {
    return this.worldTransform.applyInverse(e, Ws._TEMP_POINT), this._geometry.containsPoint(Ws._TEMP_POINT);
  }
  calculateTints() {
    if (this.batchTint !== this.tint) {
      this.batchTint = this._tintColor.toNumber();
      for (let e = 0; e < this.batches.length; e++) {
        const t = this.batches[e];
        t._tintRGB = Z.shared.setValue(this._tintColor).multiply(t._batchRGB).toLittleEndianNumber();
      }
    }
  }
  calculateVertices() {
    const e = this.transform._worldID;
    if (this._transformID === e)
      return;
    this._transformID = e;
    const t = this.transform.worldTransform, s = t.a, i = t.b, r = t.c, n = t.d, o = t.tx, a = t.ty, h = this._geometry.points, l = this.vertexData;
    let c = 0;
    for (let u = 0; u < h.length; u += 2) {
      const d = h[u], f = h[u + 1];
      l[c++] = s * d + r * f + o, l[c++] = n * f + i * d + a;
    }
  }
  closePath() {
    const e = this.currentPath;
    return e && (e.closeStroke = !0, this.finishPoly()), this;
  }
  setMatrix(e) {
    return this._matrix = e, this;
  }
  beginHole() {
    return this.finishPoly(), this._holeMode = !0, this;
  }
  endHole() {
    return this.finishPoly(), this._holeMode = !1, this;
  }
  destroy(e) {
    this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(e);
  }
};
let ge = Ws;
ge.curves = je;
ge._TEMP_POINT = new Y();
class Mu {
  constructor(t, s) {
    this.uvBuffer = t, this.uvMatrix = s, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
  }
  update(t) {
    if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID)
      return;
    this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
    const s = this.uvBuffer.data;
    (!this.data || this.data.length !== s.length) && (this.data = new Float32Array(s.length)), this.uvMatrix.multiplyUvs(s, this.data), this._updateID++;
  }
}
const $i = new Y(), $n = new ze(), ra = class extends Tt {
  constructor(e, t, s, i = jt.TRIANGLES) {
    super(), this.geometry = e, this.shader = t, this.state = s || ne.for2d(), this.drawMode = i, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = I.ROUND_PIXELS, this.batchUvs = null;
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e) {
    this._geometry !== e && (this._geometry && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()), this._geometry = e, this._geometry && this._geometry.refCount++, this.vertexDirty = -1);
  }
  get uvBuffer() {
    return this.geometry.buffers[1];
  }
  get verticesBuffer() {
    return this.geometry.buffers[0];
  }
  set material(e) {
    this.shader = e;
  }
  get material() {
    return this.shader;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set roundPixels(e) {
    this._roundPixels !== e && (this._transformID = -1), this._roundPixels = e;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get tint() {
    return "tint" in this.shader ? this.shader.tint : null;
  }
  set tint(e) {
    this.shader.tint = e;
  }
  get tintValue() {
    return this.shader.tintValue;
  }
  get texture() {
    return "texture" in this.shader ? this.shader.texture : null;
  }
  set texture(e) {
    this.shader.texture = e;
  }
  _render(e) {
    const t = this.geometry.buffers[0].data;
    this.shader.batchable && this.drawMode === jt.TRIANGLES && t.length < ra.BATCHABLE_SIZE * 2 ? this._renderToBatch(e) : this._renderDefault(e);
  }
  _renderDefault(e) {
    const t = this.shader;
    t.alpha = this.worldAlpha, t.update && t.update(), e.batch.flush(), t.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), e.shader.bind(t), e.state.set(this.state), e.geometry.bind(this.geometry, t), e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
  }
  _renderToBatch(e) {
    const t = this.geometry, s = this.shader;
    s.uvMatrix && (s.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = t.indexBuffer.data, this._tintRGB = s._tintRGB, this._texture = s.texture;
    const i = this.material.pluginName;
    e.batch.setObjectRenderer(e.plugins[i]), e.plugins[i].render(this);
  }
  calculateVertices() {
    const t = this.geometry.buffers[0], s = t.data, i = t._updateID;
    if (i === this.vertexDirty && this._transformID === this.transform._worldID)
      return;
    this._transformID = this.transform._worldID, this.vertexData.length !== s.length && (this.vertexData = new Float32Array(s.length));
    const r = this.transform.worldTransform, n = r.a, o = r.b, a = r.c, h = r.d, l = r.tx, c = r.ty, u = this.vertexData;
    for (let d = 0; d < u.length / 2; d++) {
      const f = s[d * 2], p = s[d * 2 + 1];
      u[d * 2] = n * f + a * p + l, u[d * 2 + 1] = o * f + h * p + c;
    }
    if (this._roundPixels) {
      const d = I.RESOLUTION;
      for (let f = 0; f < u.length; ++f)
        u[f] = Math.round(u[f] * d) / d;
    }
    this.vertexDirty = i;
  }
  calculateUvs() {
    const e = this.geometry.buffers[1], t = this.shader;
    t.uvMatrix.isSimple ? this.uvs = e.data : (this.batchUvs || (this.batchUvs = new Mu(e, t.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
  }
  containsPoint(e) {
    if (!this.getBounds().contains(e.x, e.y))
      return !1;
    this.worldTransform.applyInverse(e, $i);
    const t = this.geometry.getBuffer("aVertexPosition").data, s = $n.points, i = this.geometry.getIndex().data, r = i.length, n = this.drawMode === 4 ? 3 : 1;
    for (let o = 0; o + 2 < r; o += n) {
      const a = i[o] * 2, h = i[o + 1] * 2, l = i[o + 2] * 2;
      if (s[0] = t[a], s[1] = t[a + 1], s[2] = t[h], s[3] = t[h + 1], s[4] = t[l], s[5] = t[l + 1], $n.contains($i.x, $i.y))
        return !0;
    }
    return !1;
  }
  destroy(e) {
    super.destroy(e), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
  }
};
let Sr = ra;
Sr.BATCHABLE_SIZE = 100;
class Pu extends de {
  constructor(t, s, i) {
    super();
    const r = new ot(t), n = new ot(s, !0), o = new ot(i, !0, !0);
    this.addAttribute("aVertexPosition", r, 2, !1, O.FLOAT).addAttribute("aTextureCoord", n, 2, !1, O.FLOAT).addIndex(o), this._updateId = -1;
  }
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var Bu = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`, Du = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class Wn extends qt {
  constructor(t, s) {
    const i = {
      uSampler: t,
      alpha: 1,
      uTextureMatrix: tt.IDENTITY,
      uColor: new Float32Array([1, 1, 1, 1])
    };
    s = Object.assign({
      tint: 16777215,
      alpha: 1,
      pluginName: "batch"
    }, s), s.uniforms && Object.assign(i, s.uniforms), super(s.program || Nt.from(Du, Bu), i), this._colorDirty = !1, this.uvMatrix = new Co(t), this.batchable = s.program === void 0, this.pluginName = s.pluginName, this._tintColor = new Z(s.tint), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0, this.alpha = s.alpha;
  }
  get texture() {
    return this.uniforms.uSampler;
  }
  set texture(t) {
    this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t);
  }
  set alpha(t) {
    t !== this._alpha && (this._alpha = t, this._colorDirty = !0);
  }
  get alpha() {
    return this._alpha;
  }
  set tint(t) {
    t !== this.tint && (this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0);
  }
  get tint() {
    return this._tintColor.value;
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  update() {
    if (this._colorDirty) {
      this._colorDirty = !1;
      const s = this.texture.baseTexture.alphaMode;
      Z.shared.setValue(this._tintColor).premultiply(this._alpha, s).toArray(this.uniforms.uColor);
    }
    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
  }
}
class jn {
  constructor(t, s, i) {
    this.geometry = new de(), this.indexBuffer = null, this.size = i, this.dynamicProperties = [], this.staticProperties = [];
    for (let r = 0; r < t.length; ++r) {
      let n = t[r];
      n = {
        attributeName: n.attributeName,
        size: n.size,
        uploadFunction: n.uploadFunction,
        type: n.type || O.FLOAT,
        offset: n.offset
      }, s[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
    }
    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
  }
  initBuffers() {
    const t = this.geometry;
    let s = 0;
    this.indexBuffer = new ot(gh(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      a.offset = s, s += a.size, this.dynamicStride += a.size;
    }
    const i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    this.dynamicData = new Float32Array(i), this.dynamicDataUint32 = new Uint32Array(i), this.dynamicBuffer = new ot(this.dynamicData, !1, !1);
    let r = 0;
    this.staticStride = 0;
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      a.offset = r, r += a.size, this.staticStride += a.size;
    }
    const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), this.staticBuffer = new ot(this.staticData, !0, !1);
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      t.addAttribute(a.attributeName, this.dynamicBuffer, 0, a.type === O.UNSIGNED_BYTE, a.type, this.dynamicStride * 4, a.offset * 4);
    }
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      t.addAttribute(a.attributeName, this.staticBuffer, 0, a.type === O.UNSIGNED_BYTE, a.type, this.staticStride * 4, a.offset * 4);
    }
  }
  uploadDynamic(t, s, i) {
    for (let r = 0; r < this.dynamicProperties.length; r++) {
      const n = this.dynamicProperties[r];
      n.uploadFunction(t, s, i, n.type === O.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset);
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(t, s, i) {
    for (let r = 0; r < this.staticProperties.length; r++) {
      const n = this.staticProperties[r];
      n.uploadFunction(t, s, i, n.type === O.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset);
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
  }
}
var Fu = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`, Lu = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class na extends ui {
  constructor(t) {
    super(t), this.shader = null, this.properties = null, this.tempMatrix = new tt(), this.properties = [
      {
        attributeName: "aVertexPosition",
        size: 2,
        uploadFunction: this.uploadVertices,
        offset: 0
      },
      {
        attributeName: "aPositionCoord",
        size: 2,
        uploadFunction: this.uploadPosition,
        offset: 0
      },
      {
        attributeName: "aRotation",
        size: 1,
        uploadFunction: this.uploadRotation,
        offset: 0
      },
      {
        attributeName: "aTextureCoord",
        size: 2,
        uploadFunction: this.uploadUvs,
        offset: 0
      },
      {
        attributeName: "aColor",
        size: 1,
        type: O.UNSIGNED_BYTE,
        uploadFunction: this.uploadTint,
        offset: 0
      }
    ], this.shader = qt.from(Lu, Fu, {}), this.state = ne.for2d();
  }
  render(t) {
    const s = t.children, i = t._maxSize, r = t._batchSize, n = this.renderer;
    let o = s.length;
    if (o === 0)
      return;
    o > i && !t.autoResize && (o = i);
    let a = t._buffers;
    a || (a = t._buffers = this.generateBuffers(t));
    const h = s[0]._texture.baseTexture, l = h.alphaMode > 0;
    this.state.blendMode = oo(t.blendMode, l), n.state.set(this.state);
    const c = n.gl, u = t.worldTransform.copyTo(this.tempMatrix);
    u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = Z.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, l).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader);
    let d = !1;
    for (let f = 0, p = 0; f < o; f += r, p += 1) {
      let _ = o - f;
      _ > r && (_ = r), p >= a.length && a.push(this._generateOneMoreBuffer(t));
      const m = a[p];
      m.uploadDynamic(s, f, _);
      const x = t._bufferUpdateIDs[p] || 0;
      d = d || m._updateID < x, d && (m._updateID = t._updateID, m.uploadStatic(s, f, _)), n.geometry.bind(m.geometry), c.drawElements(c.TRIANGLES, _ * 6, c.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(t) {
    const s = [], i = t._maxSize, r = t._batchSize, n = t._properties;
    for (let o = 0; o < i; o += r)
      s.push(new jn(this.properties, n, r));
    return s;
  }
  _generateOneMoreBuffer(t) {
    const s = t._batchSize, i = t._properties;
    return new jn(this.properties, i, s);
  }
  uploadVertices(t, s, i, r, n, o) {
    let a = 0, h = 0, l = 0, c = 0;
    for (let u = 0; u < i; ++u) {
      const d = t[s + u], f = d._texture, p = d.scale.x, _ = d.scale.y, m = f.trim, x = f.orig;
      m ? (h = m.x - d.anchor.x * x.width, a = h + m.width, c = m.y - d.anchor.y * x.height, l = c + m.height) : (a = x.width * (1 - d.anchor.x), h = x.width * -d.anchor.x, l = x.height * (1 - d.anchor.y), c = x.height * -d.anchor.y), r[o] = h * p, r[o + 1] = c * _, r[o + n] = a * p, r[o + n + 1] = c * _, r[o + n * 2] = a * p, r[o + n * 2 + 1] = l * _, r[o + n * 3] = h * p, r[o + n * 3 + 1] = l * _, o += n * 4;
    }
  }
  uploadPosition(t, s, i, r, n, o) {
    for (let a = 0; a < i; a++) {
      const h = t[s + a].position;
      r[o] = h.x, r[o + 1] = h.y, r[o + n] = h.x, r[o + n + 1] = h.y, r[o + n * 2] = h.x, r[o + n * 2 + 1] = h.y, r[o + n * 3] = h.x, r[o + n * 3 + 1] = h.y, o += n * 4;
    }
  }
  uploadRotation(t, s, i, r, n, o) {
    for (let a = 0; a < i; a++) {
      const h = t[s + a].rotation;
      r[o] = h, r[o + n] = h, r[o + n * 2] = h, r[o + n * 3] = h, o += n * 4;
    }
  }
  uploadUvs(t, s, i, r, n, o) {
    for (let a = 0; a < i; ++a) {
      const h = t[s + a]._texture._uvs;
      h ? (r[o] = h.x0, r[o + 1] = h.y0, r[o + n] = h.x1, r[o + n + 1] = h.y1, r[o + n * 2] = h.x2, r[o + n * 2 + 1] = h.y2, r[o + n * 3] = h.x3, r[o + n * 3 + 1] = h.y3, o += n * 4) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + n * 2] = 0, r[o + n * 2 + 1] = 0, r[o + n * 3] = 0, r[o + n * 3 + 1] = 0, o += n * 4);
    }
  }
  uploadTint(t, s, i, r, n, o) {
    for (let a = 0; a < i; ++a) {
      const h = t[s + a], l = Z.shared.setValue(h._tintRGB).toPremultiplied(h.alpha);
      r[o] = l, r[o + n] = l, r[o + n * 2] = l, r[o + n * 3] = l, o += n * 4;
    }
  }
  destroy() {
    super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
  }
}
na.extension = {
  name: "particle",
  type: M.RendererPlugin
};
k.add(na);
var yi = /* @__PURE__ */ ((e) => (e[e.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", e[e.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", e))(yi || {});
const Hs = {
  willReadFrequently: !0
}, F = class {
  static get experimentalLetterSpacingSupported() {
    let e = F._experimentalLetterSpacingSupported;
    if (e !== void 0) {
      const t = I.ADAPTER.getCanvasRenderingContext2D().prototype;
      e = F._experimentalLetterSpacingSupported = "letterSpacing" in t || "textLetterSpacing" in t;
    }
    return e;
  }
  constructor(e, t, s, i, r, n, o, a, h) {
    this.text = e, this.style = t, this.width = s, this.height = i, this.lines = r, this.lineWidths = n, this.lineHeight = o, this.maxLineWidth = a, this.fontProperties = h;
  }
  static measureText(e, t, s, i = F._canvas) {
    s = s ?? t.wordWrap;
    const r = t.toFontString(), n = F.measureFont(r);
    n.fontSize === 0 && (n.fontSize = t.fontSize, n.ascent = t.fontSize);
    const o = i.getContext("2d", Hs);
    o.font = r;
    const h = (s ? F.wordWrap(e, t, i) : e).split(/(?:\r\n|\r|\n)/), l = new Array(h.length);
    let c = 0;
    for (let p = 0; p < h.length; p++) {
      const _ = F._measureText(h[p], t.letterSpacing, o);
      l[p] = _, c = Math.max(c, _);
    }
    let u = c + t.strokeThickness;
    t.dropShadow && (u += t.dropShadowDistance);
    const d = t.lineHeight || n.fontSize + t.strokeThickness;
    let f = Math.max(d, n.fontSize + t.strokeThickness * 2) + (h.length - 1) * (d + t.leading);
    return t.dropShadow && (f += t.dropShadowDistance), new F(e, t, u, f, h, l, d + t.leading, c, n);
  }
  static _measureText(e, t, s) {
    let i = !1;
    F.experimentalLetterSpacingSupported && (F.experimentalLetterSpacing ? (s.letterSpacing = `${t}px`, s.textLetterSpacing = `${t}px`, i = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
    let r = s.measureText(e).width;
    return r > 0 && (i ? r -= t : r += (F.graphemeSegmenter(e).length - 1) * t), r;
  }
  static wordWrap(e, t, s = F._canvas) {
    const i = s.getContext("2d", Hs);
    let r = 0, n = "", o = "";
    const a = /* @__PURE__ */ Object.create(null), { letterSpacing: h, whiteSpace: l } = t, c = F.collapseSpaces(l), u = F.collapseNewlines(l);
    let d = !c;
    const f = t.wordWrapWidth + h, p = F.tokenize(e);
    for (let _ = 0; _ < p.length; _++) {
      let m = p[_];
      if (F.isNewline(m)) {
        if (!u) {
          o += F.addLine(n), d = !c, n = "", r = 0;
          continue;
        }
        m = " ";
      }
      if (c) {
        const v = F.isBreakingSpace(m), g = F.isBreakingSpace(n[n.length - 1]);
        if (v && g)
          continue;
      }
      const x = F.getFromCache(m, h, a, i);
      if (x > f)
        if (n !== "" && (o += F.addLine(n), n = "", r = 0), F.canBreakWords(m, t.breakWords)) {
          const v = F.wordWrapSplit(m);
          for (let g = 0; g < v.length; g++) {
            let y = v[g], T = y, P = 1;
            for (; v[g + P]; ) {
              const E = v[g + P];
              if (!F.canBreakChars(T, E, m, g, t.breakWords))
                y += E;
              else
                break;
              T = E, P++;
            }
            g += P - 1;
            const A = F.getFromCache(y, h, a, i);
            A + r > f && (o += F.addLine(n), d = !1, n = "", r = 0), n += y, r += A;
          }
        } else {
          n.length > 0 && (o += F.addLine(n), n = "", r = 0);
          const v = _ === p.length - 1;
          o += F.addLine(m, !v), d = !1, n = "", r = 0;
        }
      else
        x + r > f && (d = !1, o += F.addLine(n), n = "", r = 0), (n.length > 0 || !F.isBreakingSpace(m) || d) && (n += m, r += x);
    }
    return o += F.addLine(n, !1), o;
  }
  static addLine(e, t = !0) {
    return e = F.trimRight(e), e = t ? `${e}
` : e, e;
  }
  static getFromCache(e, t, s, i) {
    let r = s[e];
    return typeof r != "number" && (r = F._measureText(e, t, i) + t, s[e] = r), r;
  }
  static collapseSpaces(e) {
    return e === "normal" || e === "pre-line";
  }
  static collapseNewlines(e) {
    return e === "normal";
  }
  static trimRight(e) {
    if (typeof e != "string")
      return "";
    for (let t = e.length - 1; t >= 0; t--) {
      const s = e[t];
      if (!F.isBreakingSpace(s))
        break;
      e = e.slice(0, -1);
    }
    return e;
  }
  static isNewline(e) {
    return typeof e != "string" ? !1 : F._newlines.includes(e.charCodeAt(0));
  }
  static isBreakingSpace(e, t) {
    return typeof e != "string" ? !1 : F._breakingSpaces.includes(e.charCodeAt(0));
  }
  static tokenize(e) {
    const t = [];
    let s = "";
    if (typeof e != "string")
      return t;
    for (let i = 0; i < e.length; i++) {
      const r = e[i], n = e[i + 1];
      if (F.isBreakingSpace(r, n) || F.isNewline(r)) {
        s !== "" && (t.push(s), s = ""), t.push(r);
        continue;
      }
      s += r;
    }
    return s !== "" && t.push(s), t;
  }
  static canBreakWords(e, t) {
    return t;
  }
  static canBreakChars(e, t, s, i, r) {
    return !0;
  }
  static wordWrapSplit(e) {
    return F.graphemeSegmenter(e);
  }
  static measureFont(e) {
    if (F._fonts[e])
      return F._fonts[e];
    const t = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    }, s = F._canvas, i = F._context;
    i.font = e;
    const r = F.METRICS_STRING + F.BASELINE_SYMBOL, n = Math.ceil(i.measureText(r).width);
    let o = Math.ceil(i.measureText(F.BASELINE_SYMBOL).width);
    const a = Math.ceil(F.HEIGHT_MULTIPLIER * o);
    if (o = o * F.BASELINE_MULTIPLIER | 0, n === 0 || a === 0)
      return F._fonts[e] = t, t;
    s.width = n, s.height = a, i.fillStyle = "#f00", i.fillRect(0, 0, n, a), i.font = e, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(r, 0, o);
    const h = i.getImageData(0, 0, n, a).data, l = h.length, c = n * 4;
    let u = 0, d = 0, f = !1;
    for (u = 0; u < o; ++u) {
      for (let p = 0; p < c; p += 4)
        if (h[d + p] !== 255) {
          f = !0;
          break;
        }
      if (!f)
        d += c;
      else
        break;
    }
    for (t.ascent = o - u, d = l - c, f = !1, u = a; u > o; --u) {
      for (let p = 0; p < c; p += 4)
        if (h[d + p] !== 255) {
          f = !0;
          break;
        }
      if (!f)
        d -= c;
      else
        break;
    }
    return t.descent = u - o, t.fontSize = t.ascent + t.descent, F._fonts[e] = t, t;
  }
  static clearMetrics(e = "") {
    e ? delete F._fonts[e] : F._fonts = {};
  }
  static get _canvas() {
    if (!F.__canvas) {
      let e;
      try {
        const t = new OffscreenCanvas(0, 0), s = t.getContext("2d", Hs);
        if (s != null && s.measureText)
          return F.__canvas = t, t;
        e = I.ADAPTER.createCanvas();
      } catch {
        e = I.ADAPTER.createCanvas();
      }
      e.width = e.height = 10, F.__canvas = e;
    }
    return F.__canvas;
  }
  static get _context() {
    return F.__context || (F.__context = F._canvas.getContext("2d", Hs)), F.__context;
  }
};
let gt = F;
gt.METRICS_STRING = "|ÉqÅ";
gt.BASELINE_SYMBOL = "M";
gt.BASELINE_MULTIPLIER = 1.4;
gt.HEIGHT_MULTIPLIER = 2;
gt.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
    const e = new Intl.Segmenter();
    return (t) => [...e.segment(t)].map((s) => s.segment);
  }
  return (e) => [...e];
})();
gt.experimentalLetterSpacing = !1;
gt._fonts = {};
gt._newlines = [
  10,
  13
];
gt._breakingSpaces = [
  9,
  32,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8200,
  8201,
  8202,
  8287,
  12288
];
const Nu = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui"
], os = class {
  constructor(e) {
    this.styleID = 0, this.reset(), ji(this, e, e);
  }
  clone() {
    const e = {};
    return ji(e, this, os.defaultStyle), new os(e);
  }
  reset() {
    ji(this, os.defaultStyle, os.defaultStyle);
  }
  get align() {
    return this._align;
  }
  set align(e) {
    this._align !== e && (this._align = e, this.styleID++);
  }
  get breakWords() {
    return this._breakWords;
  }
  set breakWords(e) {
    this._breakWords !== e && (this._breakWords = e, this.styleID++);
  }
  get dropShadow() {
    return this._dropShadow;
  }
  set dropShadow(e) {
    this._dropShadow !== e && (this._dropShadow = e, this.styleID++);
  }
  get dropShadowAlpha() {
    return this._dropShadowAlpha;
  }
  set dropShadowAlpha(e) {
    this._dropShadowAlpha !== e && (this._dropShadowAlpha = e, this.styleID++);
  }
  get dropShadowAngle() {
    return this._dropShadowAngle;
  }
  set dropShadowAngle(e) {
    this._dropShadowAngle !== e && (this._dropShadowAngle = e, this.styleID++);
  }
  get dropShadowBlur() {
    return this._dropShadowBlur;
  }
  set dropShadowBlur(e) {
    this._dropShadowBlur !== e && (this._dropShadowBlur = e, this.styleID++);
  }
  get dropShadowColor() {
    return this._dropShadowColor;
  }
  set dropShadowColor(e) {
    const t = Wi(e);
    this._dropShadowColor !== t && (this._dropShadowColor = t, this.styleID++);
  }
  get dropShadowDistance() {
    return this._dropShadowDistance;
  }
  set dropShadowDistance(e) {
    this._dropShadowDistance !== e && (this._dropShadowDistance = e, this.styleID++);
  }
  get fill() {
    return this._fill;
  }
  set fill(e) {
    const t = Wi(e);
    this._fill !== t && (this._fill = t, this.styleID++);
  }
  get fillGradientType() {
    return this._fillGradientType;
  }
  set fillGradientType(e) {
    this._fillGradientType !== e && (this._fillGradientType = e, this.styleID++);
  }
  get fillGradientStops() {
    return this._fillGradientStops;
  }
  set fillGradientStops(e) {
    ku(this._fillGradientStops, e) || (this._fillGradientStops = e, this.styleID++);
  }
  get fontFamily() {
    return this._fontFamily;
  }
  set fontFamily(e) {
    this.fontFamily !== e && (this._fontFamily = e, this.styleID++);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(e) {
    this._fontSize !== e && (this._fontSize = e, this.styleID++);
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(e) {
    this._fontStyle !== e && (this._fontStyle = e, this.styleID++);
  }
  get fontVariant() {
    return this._fontVariant;
  }
  set fontVariant(e) {
    this._fontVariant !== e && (this._fontVariant = e, this.styleID++);
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(e) {
    this._fontWeight !== e && (this._fontWeight = e, this.styleID++);
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(e) {
    this._letterSpacing !== e && (this._letterSpacing = e, this.styleID++);
  }
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(e) {
    this._lineHeight !== e && (this._lineHeight = e, this.styleID++);
  }
  get leading() {
    return this._leading;
  }
  set leading(e) {
    this._leading !== e && (this._leading = e, this.styleID++);
  }
  get lineJoin() {
    return this._lineJoin;
  }
  set lineJoin(e) {
    this._lineJoin !== e && (this._lineJoin = e, this.styleID++);
  }
  get miterLimit() {
    return this._miterLimit;
  }
  set miterLimit(e) {
    this._miterLimit !== e && (this._miterLimit = e, this.styleID++);
  }
  get padding() {
    return this._padding;
  }
  set padding(e) {
    this._padding !== e && (this._padding = e, this.styleID++);
  }
  get stroke() {
    return this._stroke;
  }
  set stroke(e) {
    const t = Wi(e);
    this._stroke !== t && (this._stroke = t, this.styleID++);
  }
  get strokeThickness() {
    return this._strokeThickness;
  }
  set strokeThickness(e) {
    this._strokeThickness !== e && (this._strokeThickness = e, this.styleID++);
  }
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(e) {
    this._textBaseline !== e && (this._textBaseline = e, this.styleID++);
  }
  get trim() {
    return this._trim;
  }
  set trim(e) {
    this._trim !== e && (this._trim = e, this.styleID++);
  }
  get whiteSpace() {
    return this._whiteSpace;
  }
  set whiteSpace(e) {
    this._whiteSpace !== e && (this._whiteSpace = e, this.styleID++);
  }
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(e) {
    this._wordWrap !== e && (this._wordWrap = e, this.styleID++);
  }
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(e) {
    this._wordWrapWidth !== e && (this._wordWrapWidth = e, this.styleID++);
  }
  toFontString() {
    const e = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
    let t = this.fontFamily;
    Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","));
    for (let s = t.length - 1; s >= 0; s--) {
      let i = t[s].trim();
      !/([\"\'])[^\'\"]+\1/.test(i) && !Nu.includes(i) && (i = `"${i}"`), t[s] = i;
    }
    return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${t.join(",")}`;
  }
};
let re = os;
re.defaultStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: !1,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: yi.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100
};
function Wi(e) {
  const t = Z.shared;
  return Array.isArray(e) ? e.map((s) => t.setValue(s).toHex()) : t.setValue(e).toHex();
}
function ku(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)
    return !1;
  for (let s = 0; s < e.length; ++s)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
function ji(e, t, s) {
  for (const i in s)
    Array.isArray(t[i]) ? e[i] = t[i].slice() : e[i] = t[i];
}
const Ou = {
  texture: !0,
  children: !1,
  baseTexture: !0
}, Ar = class extends Ke {
  constructor(e, t, s) {
    let i = !1;
    s || (s = I.ADAPTER.createCanvas(), i = !0), s.width = 3, s.height = 3;
    const r = B.from(s);
    r.orig = new z(), r.trim = new z(), super(r), this._ownCanvas = i, this.canvas = s, this.context = s.getContext("2d", {
      willReadFrequently: !0
    }), this._resolution = Ar.defaultResolution ?? I.RESOLUTION, this._autoResolution = Ar.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = t, this.localStyleID = -1;
  }
  static get experimentalLetterSpacing() {
    return gt.experimentalLetterSpacing;
  }
  static set experimentalLetterSpacing(e) {
    $("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"), gt.experimentalLetterSpacing = e;
  }
  updateText(e) {
    const t = this._style;
    if (this.localStyleID !== t.styleID && (this.dirty = !0, this.localStyleID = t.styleID), !this.dirty && e)
      return;
    this._font = this._style.toFontString();
    const s = this.context, i = gt.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), r = i.width, n = i.height, o = i.lines, a = i.lineHeight, h = i.lineWidths, l = i.maxLineWidth, c = i.fontProperties;
    this.canvas.width = Math.ceil(Math.ceil(Math.max(1, r) + t.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, n) + t.padding * 2) * this._resolution), s.scale(this._resolution, this._resolution), s.clearRect(0, 0, this.canvas.width, this.canvas.height), s.font = this._font, s.lineWidth = t.strokeThickness, s.textBaseline = t.textBaseline, s.lineJoin = t.lineJoin, s.miterLimit = t.miterLimit;
    let u, d;
    const f = t.dropShadow ? 2 : 1;
    for (let p = 0; p < f; ++p) {
      const _ = t.dropShadow && p === 0, m = _ ? Math.ceil(Math.max(1, n) + t.padding * 2) : 0, x = m * this._resolution;
      if (_) {
        s.fillStyle = "black", s.strokeStyle = "black";
        const g = t.dropShadowColor, y = t.dropShadowBlur * this._resolution, T = t.dropShadowDistance * this._resolution;
        s.shadowColor = Z.shared.setValue(g).setAlpha(t.dropShadowAlpha).toRgbaString(), s.shadowBlur = y, s.shadowOffsetX = Math.cos(t.dropShadowAngle) * T, s.shadowOffsetY = Math.sin(t.dropShadowAngle) * T + x;
      } else
        s.fillStyle = this._generateFillStyle(t, o, i), s.strokeStyle = t.stroke, s.shadowColor = "black", s.shadowBlur = 0, s.shadowOffsetX = 0, s.shadowOffsetY = 0;
      let v = (a - c.fontSize) / 2;
      a - c.fontSize < 0 && (v = 0);
      for (let g = 0; g < o.length; g++)
        u = t.strokeThickness / 2, d = t.strokeThickness / 2 + g * a + c.ascent + v, t.align === "right" ? u += l - h[g] : t.align === "center" && (u += (l - h[g]) / 2), t.stroke && t.strokeThickness && this.drawLetterSpacing(o[g], u + t.padding, d + t.padding - m, !0), t.fill && this.drawLetterSpacing(o[g], u + t.padding, d + t.padding - m);
    }
    this.updateTexture();
  }
  drawLetterSpacing(e, t, s, i = !1) {
    const n = this._style.letterSpacing;
    let o = !1;
    if (gt.experimentalLetterSpacingSupported && (gt.experimentalLetterSpacing ? (this.context.letterSpacing = `${n}px`, this.context.textLetterSpacing = `${n}px`, o = !0) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), n === 0 || o) {
      i ? this.context.strokeText(e, t, s) : this.context.fillText(e, t, s);
      return;
    }
    let a = t;
    const h = gt.graphemeSegmenter(e);
    let l = this.context.measureText(e).width, c = 0;
    for (let u = 0; u < h.length; ++u) {
      const d = h[u];
      i ? this.context.strokeText(d, a, s) : this.context.fillText(d, a, s);
      let f = "";
      for (let p = u + 1; p < h.length; ++p)
        f += h[p];
      c = this.context.measureText(f).width, a += l - c + n, l = c;
    }
  }
  updateTexture() {
    const e = this.canvas;
    if (this._style.trim) {
      const n = yh(e);
      n.data && (e.width = n.width, e.height = n.height, this.context.putImageData(n.data, 0, 0));
    }
    const t = this._texture, s = this._style, i = s.trim ? 0 : s.padding, r = t.baseTexture;
    t.trim.width = t._frame.width = e.width / this._resolution, t.trim.height = t._frame.height = e.height / this._resolution, t.trim.x = -i, t.trim.y = -i, t.orig.width = t._frame.width - i * 2, t.orig.height = t._frame.height - i * 2, this._onTextureUpdate(), r.setRealSize(e.width, e.height, this._resolution), t.updateUvs(), this.dirty = !1;
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), super._render(e);
  }
  updateTransform() {
    this.updateText(!0), super.updateTransform();
  }
  getBounds(e, t) {
    return this.updateText(!0), this._textureID === -1 && (e = !1), super.getBounds(e, t);
  }
  getLocalBounds(e) {
    return this.updateText(!0), super.getLocalBounds.call(this, e);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  _generateFillStyle(e, t, s) {
    const i = e.fill;
    if (Array.isArray(i)) {
      if (i.length === 1)
        return i[0];
    } else
      return i;
    let r;
    const n = e.dropShadow ? e.dropShadowDistance : 0, o = e.padding || 0, a = this.canvas.width / this._resolution - n - o * 2, h = this.canvas.height / this._resolution - n - o * 2, l = i.slice(), c = e.fillGradientStops.slice();
    if (!c.length) {
      const u = l.length + 1;
      for (let d = 1; d < u; ++d)
        c.push(d / u);
    }
    if (l.unshift(i[0]), c.unshift(0), l.push(i[i.length - 1]), c.push(1), e.fillGradientType === yi.LINEAR_VERTICAL) {
      r = this.context.createLinearGradient(a / 2, o, a / 2, h + o);
      const u = s.fontProperties.fontSize + e.strokeThickness;
      for (let d = 0; d < t.length; d++) {
        const f = s.lineHeight * (d - 1) + u, p = s.lineHeight * d;
        let _ = p;
        d > 0 && f > p && (_ = (p + f) / 2);
        const m = p + u, x = s.lineHeight * (d + 1);
        let v = m;
        d + 1 < t.length && x < m && (v = (m + x) / 2);
        const g = (v - _) / h;
        for (let y = 0; y < l.length; y++) {
          let T = 0;
          typeof c[y] == "number" ? T = c[y] : T = y / l.length;
          let P = Math.min(1, Math.max(0, _ / h + T * g));
          P = Number(P.toFixed(5)), r.addColorStop(P, l[y]);
        }
      }
    } else {
      r = this.context.createLinearGradient(o, h / 2, a + o, h / 2);
      const u = l.length + 1;
      let d = 1;
      for (let f = 0; f < l.length; f++) {
        let p;
        typeof c[f] == "number" ? p = c[f] : p = d / u, r.addColorStop(p, l[f]), d++;
      }
    }
    return r;
  }
  destroy(e) {
    typeof e == "boolean" && (e = { children: e }), e = Object.assign({}, Ou, e), super.destroy(e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null;
  }
  get width() {
    return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(e) {
    this.updateText(!0);
    const t = he(this.scale.x) || 1;
    this.scale.x = t * e / this._texture.orig.width, this._width = e;
  }
  get height() {
    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    this.updateText(!0);
    const t = he(this.scale.y) || 1;
    this.scale.y = t * e / this._texture.orig.height, this._height = e;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    e = e || {}, e instanceof re ? this._style = e : this._style = new re(e), this.localStyleID = -1, this.dirty = !0;
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = !0);
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0);
  }
};
let vs = Ar;
vs.defaultAutoResolution = !0;
class Uu {
  constructor(t) {
    this.maxItemsPerFrame = t, this.itemsLeft = 0;
  }
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function Gu(e, t) {
  var i;
  let s = !1;
  if ((i = e == null ? void 0 : e._textures) != null && i.length) {
    for (let r = 0; r < e._textures.length; r++)
      if (e._textures[r] instanceof B) {
        const n = e._textures[r].baseTexture;
        t.includes(n) || (t.push(n), s = !0);
      }
  }
  return s;
}
function Hu(e, t) {
  if (e.baseTexture instanceof X) {
    const s = e.baseTexture;
    return t.includes(s) || t.push(s), !0;
  }
  return !1;
}
function Xu(e, t) {
  if (e._texture && e._texture instanceof B) {
    const s = e._texture.baseTexture;
    return t.includes(s) || t.push(s), !0;
  }
  return !1;
}
function Vu(e, t) {
  return t instanceof vs ? (t.updateText(!0), !0) : !1;
}
function zu(e, t) {
  if (t instanceof re) {
    const s = t.toFontString();
    return gt.measureFont(s), !0;
  }
  return !1;
}
function $u(e, t) {
  if (e instanceof vs) {
    t.includes(e.style) || t.push(e.style), t.includes(e) || t.push(e);
    const s = e._texture.baseTexture;
    return t.includes(s) || t.push(s), !0;
  }
  return !1;
}
function Wu(e, t) {
  return e instanceof re ? (t.includes(e) || t.push(e), !0) : !1;
}
const oa = class {
  constructor(e) {
    this.limiter = new Uu(oa.uploadsPerFrame), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = () => {
      this.queue && this.prepareItems();
    }, this.registerFindHook($u), this.registerFindHook(Wu), this.registerFindHook(Gu), this.registerFindHook(Hu), this.registerFindHook(Xu), this.registerUploadHook(Vu), this.registerUploadHook(zu);
  }
  upload(e) {
    return new Promise((t) => {
      e && this.add(e), this.queue.length ? (this.completes.push(t), this.ticking || (this.ticking = !0, lt.system.addOnce(this.tick, this, me.UTILITY))) : t();
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
      const e = this.queue[0];
      let t = !1;
      if (e && !e._destroyed) {
        for (let s = 0, i = this.uploadHooks.length; s < i; s++)
          if (this.uploadHooks[s](this.uploadHookHelper, e)) {
            this.queue.shift(), t = !0;
            break;
          }
      }
      t || this.queue.shift();
    }
    if (this.queue.length)
      lt.system.addOnce(this.tick, this, me.UTILITY);
    else {
      this.ticking = !1;
      const e = this.completes.slice(0);
      this.completes.length = 0;
      for (let t = 0, s = e.length; t < s; t++)
        e[t]();
    }
  }
  registerFindHook(e) {
    return e && this.addHooks.push(e), this;
  }
  registerUploadHook(e) {
    return e && this.uploadHooks.push(e), this;
  }
  add(e) {
    for (let t = 0, s = this.addHooks.length; t < s && !this.addHooks[t](e, this.queue); t++)
      ;
    if (e instanceof Tt)
      for (let t = e.children.length - 1; t >= 0; t--)
        this.add(e.children[t]);
    return this;
  }
  destroy() {
    this.ticking && lt.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
  }
};
let oi = oa;
oi.uploadsPerFrame = 4;
Object.defineProperties(I, {
  UPLOADS_PER_FRAME: {
    get() {
      return oi.uploadsPerFrame;
    },
    set(e) {
      $("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"), oi.uploadsPerFrame = e;
    }
  }
});
function aa(e, t) {
  return t instanceof X ? (t._glTextures[e.CONTEXT_UID] || e.texture.bind(t), !0) : !1;
}
function ju(e, t) {
  if (!(t instanceof ge))
    return !1;
  const { geometry: s } = t;
  t.finishPoly(), s.updateBatches();
  const { batches: i } = s;
  for (let r = 0; r < i.length; r++) {
    const { texture: n } = i[r].style;
    n && aa(e, n.baseTexture);
  }
  return s.batchable || e.geometry.bind(s, t._resolveDirectShader(e)), !0;
}
function Yu(e, t) {
  return e instanceof ge ? (t.push(e), !0) : !1;
}
class ha extends oi {
  constructor(t) {
    super(t), this.uploadHookHelper = this.renderer, this.registerFindHook(Yu), this.registerUploadHook(aa), this.registerUploadHook(ju);
  }
}
ha.extension = {
  name: "prepare",
  type: M.RendererSystem
};
k.add(ha);
class Ye extends Ke {
  constructor(t, s = !0) {
    super(t[0] instanceof B ? t[0] : t[0].texture), this._textures = null, this._durations = null, this._autoUpdate = s, this._isConnectedToTicker = !1, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this._playing = !1, this._previousFrame = null, this.textures = t;
  }
  stop() {
    this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (lt.shared.remove(this.update, this), this._isConnectedToTicker = !1));
  }
  play() {
    this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (lt.shared.add(this.update, this, me.HIGH), this._isConnectedToTicker = !0));
  }
  gotoAndStop(t) {
    this.stop(), this.currentFrame = t;
  }
  gotoAndPlay(t) {
    this.currentFrame = t, this.play();
  }
  update(t) {
    if (!this._playing)
      return;
    const s = this.animationSpeed * t, i = this.currentFrame;
    if (this._durations !== null) {
      let r = this._currentTime % 1 * this._durations[this.currentFrame];
      for (r += s / 60 * 1e3; r < 0; )
        this._currentTime--, r += this._durations[this.currentFrame];
      const n = Math.sign(this.animationSpeed * t);
      for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame]; )
        r -= this._durations[this.currentFrame] * n, this._currentTime += n;
      this._currentTime += r / this._durations[this.currentFrame];
    } else
      this._currentTime += s;
    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < i || this.animationSpeed < 0 && this.currentFrame > i) && this.onLoop(), this.updateTexture());
  }
  updateTexture() {
    const t = this.currentFrame;
    this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
  }
  destroy(t) {
    this.stop(), super.destroy(t), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
  }
  static fromFrames(t) {
    const s = [];
    for (let i = 0; i < t.length; ++i)
      s.push(B.from(t[i]));
    return new Ye(s);
  }
  static fromImages(t) {
    const s = [];
    for (let i = 0; i < t.length; ++i)
      s.push(B.from(t[i]));
    return new Ye(s);
  }
  get totalFrames() {
    return this._textures.length;
  }
  get textures() {
    return this._textures;
  }
  set textures(t) {
    if (t[0] instanceof B)
      this._textures = t, this._durations = null;
    else {
      this._textures = [], this._durations = [];
      for (let s = 0; s < t.length; s++)
        this._textures.push(t[s].texture), this._durations.push(t[s].time);
    }
    this._previousFrame = null, this.gotoAndStop(0), this.updateTexture();
  }
  get currentFrame() {
    let t = Math.floor(this._currentTime) % this._textures.length;
    return t < 0 && (t += this._textures.length), t;
  }
  set currentFrame(t) {
    if (t < 0 || t > this.totalFrames - 1)
      throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
    const s = this.currentFrame;
    this._currentTime = t, s !== this.currentFrame && this.updateTexture();
  }
  get playing() {
    return this._playing;
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (lt.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (lt.shared.add(this.update, this), this._isConnectedToTicker = !0));
  }
}
var qu = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`, Ku = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, Zu = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`, Yn = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, Ju = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const Xs = new tt();
class la extends ui {
  constructor(t) {
    super(t), t.runners.contextChange.add(this), this.quad = new Eo(), this.state = ne.for2d();
  }
  contextChange() {
    const t = this.renderer, s = { globals: t.globalUniforms };
    this.simpleShader = qt.from(Yn, Ju, s), this.shader = t.context.webGLVersion > 1 ? qt.from(Ku, qu, s) : qt.from(Yn, Zu, s);
  }
  render(t) {
    const s = this.renderer, i = this.quad;
    let r = i.vertices;
    r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y);
    const n = t.uvRespectAnchor ? t.anchor.x : 0, o = t.uvRespectAnchor ? t.anchor.y : 0;
    r = i.uvs, r[0] = r[6] = -n, r[1] = r[3] = -o, r[2] = r[4] = 1 - n, r[5] = r[7] = 1 - o, i.invalidate();
    const a = t._texture, h = a.baseTexture, l = h.alphaMode > 0, c = t.tileTransform.localTransform, u = t.uvMatrix;
    let d = h.isPowerOfTwo && a.frame.width === h.width && a.frame.height === h.height;
    d && (h._glTextures[s.CONTEXT_UID] ? d = h.wrapMode !== ce.CLAMP : h.wrapMode === ce.CLAMP && (h.wrapMode = ce.REPEAT));
    const f = d ? this.simpleShader : this.shader, p = a.width, _ = a.height, m = t._width, x = t._height;
    Xs.set(c.a * p / m, c.b * p / x, c.c * _ / m, c.d * _ / x, c.tx / m, c.ty / x), Xs.invert(), d ? Xs.prepend(u.mapCoord) : (f.uniforms.uMapCoord = u.mapCoord.toArray(!0), f.uniforms.uClampFrame = u.uClampFrame, f.uniforms.uClampOffset = u.uClampOffset), f.uniforms.uTransform = Xs.toArray(!0), f.uniforms.uColor = Z.shared.setValue(t.tint).premultiply(t.worldAlpha, l).toArray(f.uniforms.uColor), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = a, s.shader.bind(f), s.geometry.bind(i), this.state.blendMode = oo(t.blendMode, l), s.state.set(this.state), s.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
la.extension = {
  name: "tilingSprite",
  type: M.RendererPlugin
};
k.add(la);
const as = class {
  constructor(e, t, s = null) {
    this.linkedSheets = [], this._texture = e instanceof B ? e : null, this.baseTexture = e instanceof X ? e : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = t;
    const i = this.baseTexture.resource;
    this.resolution = this._updateResolution(s || (i ? i.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  _updateResolution(e = null) {
    const { scale: t } = this.data.meta;
    let s = ue(e, null);
    return s === null && (s = parseFloat(t ?? "1")), s !== 1 && this.baseTexture.setResolution(s), s;
  }
  parse() {
    return new Promise((e) => {
      this._callback = e, this._batchIndex = 0, this._frameKeys.length <= as.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  _processFrames(e) {
    let t = e;
    const s = as.BATCH_SIZE;
    for (; t - e < s && t < this._frameKeys.length; ) {
      const i = this._frameKeys[t], r = this._frames[i], n = r.frame;
      if (n) {
        let o = null, a = null;
        const h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame, l = new z(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
        r.rotated ? o = new z(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.h) / this.resolution, Math.floor(n.w) / this.resolution) : o = new z(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution), r.trimmed !== !1 && r.spriteSourceSize && (a = new z(Math.floor(r.spriteSourceSize.x) / this.resolution, Math.floor(r.spriteSourceSize.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution)), this.textures[i] = new B(this.baseTexture, o, l, a, r.rotated ? 2 : 0, r.anchor, r.borders), B.addToCache(this.textures[i], i);
      }
      t++;
    }
  }
  _processAnimations() {
    const e = this.data.animations || {};
    for (const t in e) {
      this.animations[t] = [];
      for (let s = 0; s < e[t].length; s++) {
        const i = e[t][s];
        this.animations[t].push(this.textures[i]);
      }
    }
  }
  _parseComplete() {
    const e = this._callback;
    this._callback = null, this._batchIndex = 0, e.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * as.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * as.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
    }, 0);
  }
  destroy(e = !1) {
    var t;
    for (const s in this.textures)
      this.textures[s].destroy();
    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, e && ((t = this._texture) == null || t.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = [];
  }
};
let Cr = as;
Cr.BATCH_SIZE = 1e3;
const Qu = ["jpg", "png", "jpeg", "avif", "webp"];
function ca(e, t, s) {
  const i = {};
  if (e.forEach((r) => {
    i[r] = t;
  }), Object.keys(t.textures).forEach((r) => {
    i[r] = t.textures[r];
  }), !s) {
    const r = vt.dirname(e[0]);
    t.linkedSheets.forEach((n, o) => {
      const a = ca([`${r}/${t.data.meta.related_multi_packs[o]}`], n, !0);
      Object.assign(i, a);
    });
  }
  return i;
}
const td = {
  extension: M.Asset,
  cache: {
    test: (e) => e instanceof Cr,
    getCacheableAssets: (e, t) => ca(e, t, !1)
  },
  resolver: {
    test: (e) => {
      const s = e.split("?")[0].split("."), i = s.pop(), r = s.pop();
      return i === "json" && Qu.includes(r);
    },
    parse: (e) => {
      var s;
      const t = e.split(".");
      return {
        resolution: parseFloat(((s = I.RETINA_PREFIX.exec(e)) == null ? void 0 : s[1]) ?? "1"),
        format: t[t.length - 2],
        src: e
      };
    }
  },
  loader: {
    name: "spritesheetLoader",
    extension: {
      type: M.LoadParser,
      priority: Zt.Normal
    },
    async testParse(e, t) {
      return vt.extname(t.src).toLowerCase() === ".json" && !!e.frames;
    },
    async parse(e, t, s) {
      var l, c;
      let i = vt.dirname(t.src);
      i && i.lastIndexOf("/") !== i.length - 1 && (i += "/");
      let r = i + e.meta.image;
      r = Tr(r, t.src);
      const o = (await s.load([r]))[r], a = new Cr(o.baseTexture, e, t.src);
      await a.parse();
      const h = (l = e == null ? void 0 : e.meta) == null ? void 0 : l.related_multi_packs;
      if (Array.isArray(h)) {
        const u = [];
        for (const f of h) {
          if (typeof f != "string")
            continue;
          let p = i + f;
          (c = t.data) != null && c.ignoreMultiPack || (p = Tr(p, t.src), u.push(s.load({
            src: p,
            data: {
              ignoreMultiPack: !0
            }
          })));
        }
        const d = await Promise.all(u);
        a.linkedSheets = d, d.forEach((f) => {
          f.linkedSheets = [a].concat(a.linkedSheets.filter((p) => p !== f));
        });
      }
      return a;
    },
    unload(e) {
      e.destroy(!0);
    }
  }
};
k.add(td);
class ai {
  constructor() {
    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
  }
}
class js {
  static test(t) {
    return typeof t == "string" && t.startsWith("info face=");
  }
  static parse(t) {
    const s = t.match(/^[a-z]+\s+.+$/gm), i = {
      info: [],
      common: [],
      page: [],
      char: [],
      chars: [],
      kerning: [],
      kernings: [],
      distanceField: []
    };
    for (const n in s) {
      const o = s[n].match(/^[a-z]+/gm)[0], a = s[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), h = {};
      for (const l in a) {
        const c = a[l].split("="), u = c[0], d = c[1].replace(/"/gm, ""), f = parseFloat(d), p = isNaN(f) ? d : f;
        h[u] = p;
      }
      i[o].push(h);
    }
    const r = new ai();
    return i.info.forEach((n) => r.info.push({
      face: n.face,
      size: parseInt(n.size, 10)
    })), i.common.forEach((n) => r.common.push({
      lineHeight: parseInt(n.lineHeight, 10)
    })), i.page.forEach((n) => r.page.push({
      id: parseInt(n.id, 10),
      file: n.file
    })), i.char.forEach((n) => r.char.push({
      id: parseInt(n.id, 10),
      page: parseInt(n.page, 10),
      x: parseInt(n.x, 10),
      y: parseInt(n.y, 10),
      width: parseInt(n.width, 10),
      height: parseInt(n.height, 10),
      xoffset: parseInt(n.xoffset, 10),
      yoffset: parseInt(n.yoffset, 10),
      xadvance: parseInt(n.xadvance, 10)
    })), i.kerning.forEach((n) => r.kerning.push({
      first: parseInt(n.first, 10),
      second: parseInt(n.second, 10),
      amount: parseInt(n.amount, 10)
    })), i.distanceField.forEach((n) => r.distanceField.push({
      distanceRange: parseInt(n.distanceRange, 10),
      fieldType: n.fieldType
    })), r;
  }
}
class Ir {
  static test(t) {
    const s = t;
    return "getElementsByTagName" in s && s.getElementsByTagName("page").length && s.getElementsByTagName("info")[0].getAttribute("face") !== null;
  }
  static parse(t) {
    const s = new ai(), i = t.getElementsByTagName("info"), r = t.getElementsByTagName("common"), n = t.getElementsByTagName("page"), o = t.getElementsByTagName("char"), a = t.getElementsByTagName("kerning"), h = t.getElementsByTagName("distanceField");
    for (let l = 0; l < i.length; l++)
      s.info.push({
        face: i[l].getAttribute("face"),
        size: parseInt(i[l].getAttribute("size"), 10)
      });
    for (let l = 0; l < r.length; l++)
      s.common.push({
        lineHeight: parseInt(r[l].getAttribute("lineHeight"), 10)
      });
    for (let l = 0; l < n.length; l++)
      s.page.push({
        id: parseInt(n[l].getAttribute("id"), 10) || 0,
        file: n[l].getAttribute("file")
      });
    for (let l = 0; l < o.length; l++) {
      const c = o[l];
      s.char.push({
        id: parseInt(c.getAttribute("id"), 10),
        page: parseInt(c.getAttribute("page"), 10) || 0,
        x: parseInt(c.getAttribute("x"), 10),
        y: parseInt(c.getAttribute("y"), 10),
        width: parseInt(c.getAttribute("width"), 10),
        height: parseInt(c.getAttribute("height"), 10),
        xoffset: parseInt(c.getAttribute("xoffset"), 10),
        yoffset: parseInt(c.getAttribute("yoffset"), 10),
        xadvance: parseInt(c.getAttribute("xadvance"), 10)
      });
    }
    for (let l = 0; l < a.length; l++)
      s.kerning.push({
        first: parseInt(a[l].getAttribute("first"), 10),
        second: parseInt(a[l].getAttribute("second"), 10),
        amount: parseInt(a[l].getAttribute("amount"), 10)
      });
    for (let l = 0; l < h.length; l++)
      s.distanceField.push({
        fieldType: h[l].getAttribute("fieldType"),
        distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10)
      });
    return s;
  }
}
class Rr {
  static test(t) {
    return typeof t == "string" && t.includes("<font>") ? Ir.test(I.ADAPTER.parseXML(t)) : !1;
  }
  static parse(t) {
    return Ir.parse(I.ADAPTER.parseXML(t));
  }
}
const Yi = [
  js,
  Ir,
  Rr
];
function ed(e) {
  for (let t = 0; t < Yi.length; t++)
    if (Yi[t].test(e))
      return Yi[t];
  return null;
}
function sd(e, t, s, i, r, n) {
  const o = s.fill;
  if (Array.isArray(o)) {
    if (o.length === 1)
      return o[0];
  } else
    return o;
  let a;
  const h = s.dropShadow ? s.dropShadowDistance : 0, l = s.padding || 0, c = e.width / i - h - l * 2, u = e.height / i - h - l * 2, d = o.slice(), f = s.fillGradientStops.slice();
  if (!f.length) {
    const p = d.length + 1;
    for (let _ = 1; _ < p; ++_)
      f.push(_ / p);
  }
  if (d.unshift(o[0]), f.unshift(0), d.push(o[o.length - 1]), f.push(1), s.fillGradientType === yi.LINEAR_VERTICAL) {
    a = t.createLinearGradient(c / 2, l, c / 2, u + l);
    let p = 0;
    const m = (n.fontProperties.fontSize + s.strokeThickness) / u;
    for (let x = 0; x < r.length; x++) {
      const v = n.lineHeight * x;
      for (let g = 0; g < d.length; g++) {
        let y = 0;
        typeof f[g] == "number" ? y = f[g] : y = g / d.length;
        const T = v / u + y * m;
        let P = Math.max(p, T);
        P = Math.min(P, 1), a.addColorStop(P, d[g]), p = P;
      }
    }
  } else {
    a = t.createLinearGradient(l, u / 2, c + l, u / 2);
    const p = d.length + 1;
    let _ = 1;
    for (let m = 0; m < d.length; m++) {
      let x;
      typeof f[m] == "number" ? x = f[m] : x = _ / p, a.addColorStop(x, d[m]), _++;
    }
  }
  return a;
}
function id(e, t, s, i, r, n, o) {
  const a = s.text, h = s.fontProperties;
  t.translate(i, r), t.scale(n, n);
  const l = o.strokeThickness / 2, c = -(o.strokeThickness / 2);
  if (t.font = o.toFontString(), t.lineWidth = o.strokeThickness, t.textBaseline = o.textBaseline, t.lineJoin = o.lineJoin, t.miterLimit = o.miterLimit, t.fillStyle = sd(e, t, o, n, [a], s), t.strokeStyle = o.stroke, o.dropShadow) {
    const u = o.dropShadowColor, d = o.dropShadowBlur * n, f = o.dropShadowDistance * n;
    t.shadowColor = Z.shared.setValue(u).setAlpha(o.dropShadowAlpha).toRgbaString(), t.shadowBlur = d, t.shadowOffsetX = Math.cos(o.dropShadowAngle) * f, t.shadowOffsetY = Math.sin(o.dropShadowAngle) * f;
  } else
    t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
  o.stroke && o.strokeThickness && t.strokeText(a, l, c + s.lineHeight - h.descent), o.fill && t.fillText(a, l, c + s.lineHeight - h.descent), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0)";
}
function Ys(e) {
  return e.codePointAt ? e.codePointAt(0) : e.charCodeAt(0);
}
function ua(e) {
  return Array.from ? Array.from(e) : e.split("");
}
function rd(e) {
  typeof e == "string" && (e = [e]);
  const t = [];
  for (let s = 0, i = e.length; s < i; s++) {
    const r = e[s];
    if (Array.isArray(r)) {
      if (r.length !== 2)
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);
      const n = r[0].charCodeAt(0), o = r[1].charCodeAt(0);
      if (o < n)
        throw new Error("[BitmapFont]: Invalid character range.");
      for (let a = n, h = o; a <= h; a++)
        t.push(String.fromCharCode(a));
    } else
      t.push(...ua(r));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
const Bt = class {
  constructor(e, t, s) {
    var l;
    const [i] = e.info, [r] = e.common, [n] = e.page, [o] = e.distanceField, a = ue(n.file), h = {};
    this._ownsTextures = s, this.font = i.face, this.size = i.size, this.lineHeight = r.lineHeight / a, this.chars = {}, this.pageTextures = h;
    for (let c = 0; c < e.page.length; c++) {
      const { id: u, file: d } = e.page[c];
      h[u] = t instanceof Array ? t[c] : t[d], o != null && o.fieldType && o.fieldType !== "none" && (h[u].baseTexture.alphaMode = Gt.NO_PREMULTIPLIED_ALPHA, h[u].baseTexture.mipmap = Kt.OFF);
    }
    for (let c = 0; c < e.char.length; c++) {
      const { id: u, page: d } = e.char[c];
      let { x: f, y: p, width: _, height: m, xoffset: x, yoffset: v, xadvance: g } = e.char[c];
      f /= a, p /= a, _ /= a, m /= a, x /= a, v /= a, g /= a;
      const y = new z(f + h[d].frame.x / a, p + h[d].frame.y / a, _, m);
      this.chars[u] = {
        xOffset: x,
        yOffset: v,
        xAdvance: g,
        kerning: {},
        texture: new B(h[d].baseTexture, y),
        page: d
      };
    }
    for (let c = 0; c < e.kerning.length; c++) {
      let { first: u, second: d, amount: f } = e.kerning[c];
      u /= a, d /= a, f /= a, this.chars[d] && (this.chars[d].kerning[u] = f);
    }
    this.distanceFieldRange = o == null ? void 0 : o.distanceRange, this.distanceFieldType = ((l = o == null ? void 0 : o.fieldType) == null ? void 0 : l.toLowerCase()) ?? "none";
  }
  destroy() {
    for (const e in this.chars)
      this.chars[e].texture.destroy(), this.chars[e].texture = null;
    for (const e in this.pageTextures)
      this._ownsTextures && this.pageTextures[e].destroy(!0), this.pageTextures[e] = null;
    this.chars = null, this.pageTextures = null;
  }
  static install(e, t, s) {
    let i;
    if (e instanceof ai)
      i = e;
    else {
      const n = ed(e);
      if (!n)
        throw new Error("Unrecognized data format for font.");
      i = n.parse(e);
    }
    t instanceof B && (t = [t]);
    const r = new Bt(i, t, s);
    return Bt.available[r.font] = r, r;
  }
  static uninstall(e) {
    const t = Bt.available[e];
    if (!t)
      throw new Error(`No font found named '${e}'`);
    t.destroy(), delete Bt.available[e];
  }
  static from(e, t, s) {
    if (!e)
      throw new Error("[BitmapFont] Property `name` is required.");
    const {
      chars: i,
      padding: r,
      resolution: n,
      textureWidth: o,
      textureHeight: a,
      ...h
    } = Object.assign({}, Bt.defaultOptions, s), l = rd(i), c = t instanceof re ? t : new re(t), u = o, d = new ai();
    d.info[0] = {
      face: c.fontFamily,
      size: c.fontSize
    }, d.common[0] = {
      lineHeight: c.fontSize
    };
    let f = 0, p = 0, _, m, x, v = 0;
    const g = [];
    for (let T = 0; T < l.length; T++) {
      _ || (_ = I.ADAPTER.createCanvas(), _.width = o, _.height = a, m = _.getContext("2d"), x = new X(_, { resolution: n, ...h }), g.push(new B(x)), d.page.push({
        id: g.length - 1,
        file: ""
      }));
      const P = l[T], A = gt.measureText(P, c, !1, _), E = A.width, N = Math.ceil(A.height), U = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * E);
      if (p >= a - N * n) {
        if (p === 0)
          throw new Error(`[BitmapFont] textureHeight ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${P}')`);
        --T, _ = null, m = null, x = null, p = 0, f = 0, v = 0;
        continue;
      }
      if (v = Math.max(N + A.fontProperties.descent, v), U * n + f >= u) {
        if (f === 0)
          throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${P}')`);
        --T, p += v * n, p = Math.ceil(p), f = 0, v = 0;
        continue;
      }
      id(_, m, A, f, p, n, c);
      const R = Ys(A.text);
      d.char.push({
        id: R,
        page: g.length - 1,
        x: f / n,
        y: p / n,
        width: U,
        height: N,
        xoffset: 0,
        yoffset: 0,
        xadvance: E - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0)
      }), f += (U + 2 * r) * n, f = Math.ceil(f);
    }
    for (let T = 0, P = l.length; T < P; T++) {
      const A = l[T];
      for (let E = 0; E < P; E++) {
        const N = l[E], U = m.measureText(A).width, R = m.measureText(N).width, w = m.measureText(A + N).width - (U + R);
        w && d.kerning.push({
          first: Ys(A),
          second: Ys(N),
          amount: w
        });
      }
    }
    const y = new Bt(d, g, !0);
    return Bt.available[e] !== void 0 && Bt.uninstall(e), Bt.available[e] = y, y;
  }
};
let bt = Bt;
bt.ALPHA = [["a", "z"], ["A", "Z"], " "];
bt.NUMERIC = [["0", "9"]];
bt.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "];
bt.ASCII = [[" ", "~"]];
bt.defaultOptions = {
  resolution: 1,
  textureWidth: 512,
  textureHeight: 512,
  padding: 4,
  chars: Bt.ALPHANUMERIC
};
bt.available = {};
var nd = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`, od = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const qn = [], Kn = [], Zn = [], da = class extends Tt {
  constructor(e, t = {}) {
    super();
    const { align: s, tint: i, maxWidth: r, letterSpacing: n, fontName: o, fontSize: a } = Object.assign({}, da.styleDefaults, t);
    if (!bt.available[o])
      throw new Error(`Missing BitmapFont "${o}"`);
    this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = s, this._tintColor = new Z(i), this._font = void 0, this._fontName = o, this._fontSize = a, this.text = e, this._maxWidth = r, this._maxLineHeight = 0, this._letterSpacing = n, this._anchor = new le(() => {
      this.dirty = !0;
    }, this, 0, 0), this._roundPixels = I.ROUND_PIXELS, this.dirty = !0, this._resolution = I.RESOLUTION, this._autoResolution = !0, this._textureCache = {};
  }
  updateText() {
    var U;
    const e = bt.available[this._fontName], t = this.fontSize, s = t / e.size, i = new Y(), r = [], n = [], o = [], a = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ", h = ua(a), l = this._maxWidth * e.size / t, c = e.distanceFieldType === "none" ? qn : Kn;
    let u = null, d = 0, f = 0, p = 0, _ = -1, m = 0, x = 0, v = 0, g = 0;
    for (let R = 0; R < h.length; R++) {
      const L = h[R], w = Ys(L);
      if (/(?:\s)/.test(L) && (_ = R, m = d, g++), L === "\r" || L === `
`) {
        n.push(d), o.push(-1), f = Math.max(f, d), ++p, ++x, i.x = 0, i.y += e.lineHeight, u = null, g = 0;
        continue;
      }
      const b = e.chars[w];
      if (!b)
        continue;
      u && b.kerning[u] && (i.x += b.kerning[u]);
      const V = Zn.pop() || {
        texture: B.EMPTY,
        line: 0,
        charCode: 0,
        prevSpaces: 0,
        position: new Y()
      };
      V.texture = b.texture, V.line = p, V.charCode = w, V.position.x = Math.round(i.x + b.xOffset + this._letterSpacing / 2), V.position.y = Math.round(i.y + b.yOffset), V.prevSpaces = g, r.push(V), d = V.position.x + Math.max(b.xAdvance - b.xOffset, b.texture.orig.width), i.x += b.xAdvance + this._letterSpacing, v = Math.max(v, b.yOffset + b.texture.height), u = w, _ !== -1 && l > 0 && i.x > l && (++x, Ve(r, 1 + _ - x, 1 + R - _), R = _, _ = -1, n.push(m), o.push(r.length > 0 ? r[r.length - 1].prevSpaces : 0), f = Math.max(f, m), p++, i.x = 0, i.y += e.lineHeight, u = null, g = 0);
    }
    const y = h[h.length - 1];
    y !== "\r" && y !== `
` && (/(?:\s)/.test(y) && (d = m), n.push(d), f = Math.max(f, d), o.push(-1));
    const T = [];
    for (let R = 0; R <= p; R++) {
      let L = 0;
      this._align === "right" ? L = f - n[R] : this._align === "center" ? L = (f - n[R]) / 2 : this._align === "justify" && (L = o[R] < 0 ? 0 : (f - n[R]) / o[R]), T.push(L);
    }
    const P = r.length, A = {}, E = [], N = this._activePagesMeshData;
    c.push(...N);
    for (let R = 0; R < P; R++) {
      const L = r[R].texture, w = L.baseTexture.uid;
      if (!A[w]) {
        let b = c.pop();
        if (!b) {
          const W = new Pu();
          let D, q;
          e.distanceFieldType === "none" ? (D = new Wn(B.EMPTY), q = G.NORMAL) : (D = new Wn(B.EMPTY, { program: Nt.from(od, nd), uniforms: { uFWidth: 0 } }), q = G.NORMAL_NPM);
          const rt = new Sr(W, D);
          rt.blendMode = q, b = {
            index: 0,
            indexCount: 0,
            vertexCount: 0,
            uvsCount: 0,
            total: 0,
            mesh: rt,
            vertices: null,
            uvs: null,
            indices: null
          };
        }
        b.index = 0, b.indexCount = 0, b.vertexCount = 0, b.uvsCount = 0, b.total = 0;
        const { _textureCache: V } = this;
        V[w] = V[w] || new B(L.baseTexture), b.mesh.texture = V[w], b.mesh.tint = this._tintColor.value, E.push(b), A[w] = b;
      }
      A[w].total++;
    }
    for (let R = 0; R < N.length; R++)
      E.includes(N[R]) || this.removeChild(N[R].mesh);
    for (let R = 0; R < E.length; R++)
      E[R].mesh.parent !== this && this.addChild(E[R].mesh);
    this._activePagesMeshData = E;
    for (const R in A) {
      const L = A[R], w = L.total;
      if (!(((U = L.indices) == null ? void 0 : U.length) > 6 * w) || L.vertices.length < Sr.BATCHABLE_SIZE * 2)
        L.vertices = new Float32Array(4 * 2 * w), L.uvs = new Float32Array(4 * 2 * w), L.indices = new Uint16Array(6 * w);
      else {
        const b = L.total, V = L.vertices;
        for (let W = b * 4 * 2; W < V.length; W++)
          V[W] = 0;
      }
      L.mesh.size = 6 * w;
    }
    for (let R = 0; R < P; R++) {
      const L = r[R];
      let w = L.position.x + T[L.line] * (this._align === "justify" ? L.prevSpaces : 1);
      this._roundPixels && (w = Math.round(w));
      const b = w * s, V = L.position.y * s, W = L.texture, D = A[W.baseTexture.uid], q = W.frame, rt = W._uvs, S = D.index++;
      D.indices[S * 6 + 0] = 0 + S * 4, D.indices[S * 6 + 1] = 1 + S * 4, D.indices[S * 6 + 2] = 2 + S * 4, D.indices[S * 6 + 3] = 0 + S * 4, D.indices[S * 6 + 4] = 2 + S * 4, D.indices[S * 6 + 5] = 3 + S * 4, D.vertices[S * 8 + 0] = b, D.vertices[S * 8 + 1] = V, D.vertices[S * 8 + 2] = b + q.width * s, D.vertices[S * 8 + 3] = V, D.vertices[S * 8 + 4] = b + q.width * s, D.vertices[S * 8 + 5] = V + q.height * s, D.vertices[S * 8 + 6] = b, D.vertices[S * 8 + 7] = V + q.height * s, D.uvs[S * 8 + 0] = rt.x0, D.uvs[S * 8 + 1] = rt.y0, D.uvs[S * 8 + 2] = rt.x1, D.uvs[S * 8 + 3] = rt.y1, D.uvs[S * 8 + 4] = rt.x2, D.uvs[S * 8 + 5] = rt.y2, D.uvs[S * 8 + 6] = rt.x3, D.uvs[S * 8 + 7] = rt.y3;
    }
    this._textWidth = f * s, this._textHeight = (i.y + e.lineHeight) * s;
    for (const R in A) {
      const L = A[R];
      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
        let W = 0;
        const D = this._textWidth * this.anchor.x, q = this._textHeight * this.anchor.y;
        for (let rt = 0; rt < L.total; rt++)
          L.vertices[W++] -= D, L.vertices[W++] -= q, L.vertices[W++] -= D, L.vertices[W++] -= q, L.vertices[W++] -= D, L.vertices[W++] -= q, L.vertices[W++] -= D, L.vertices[W++] -= q;
      }
      this._maxLineHeight = v * s;
      const w = L.mesh.geometry.getBuffer("aVertexPosition"), b = L.mesh.geometry.getBuffer("aTextureCoord"), V = L.mesh.geometry.getIndex();
      w.data = L.vertices, b.data = L.uvs, V.data = L.indices, w.update(), b.update(), V.update();
    }
    for (let R = 0; R < r.length; R++)
      Zn.push(r[R]);
    this._font = e, this.dirty = !1;
  }
  updateTransform() {
    this.validate(), this.containerUpdateTransform();
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0);
    const { distanceFieldRange: t, distanceFieldType: s, size: i } = bt.available[this._fontName];
    if (s !== "none") {
      const { a: r, b: n, c: o, d: a } = this.worldTransform, h = Math.sqrt(r * r + n * n), l = Math.sqrt(o * o + a * a), c = (Math.abs(h) + Math.abs(l)) / 2, u = this.fontSize / i, d = e._view.resolution;
      for (const f of this._activePagesMeshData)
        f.mesh.shader.uniforms.uFWidth = c * t * u * d;
    }
    super._render(e);
  }
  getLocalBounds() {
    return this.validate(), super.getLocalBounds();
  }
  validate() {
    const e = bt.available[this._fontName];
    if (!e)
      throw new Error(`Missing BitmapFont "${this._fontName}"`);
    this._font !== e && (this.dirty = !0), this.dirty && this.updateText();
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(e) {
    if (this.tint !== e) {
      this._tintColor.setValue(e);
      for (let t = 0; t < this._activePagesMeshData.length; t++)
        this._activePagesMeshData[t].mesh.tint = e;
    }
  }
  get align() {
    return this._align;
  }
  set align(e) {
    this._align !== e && (this._align = e, this.dirty = !0);
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(e) {
    if (!bt.available[e])
      throw new Error(`Missing BitmapFont "${e}"`);
    this._fontName !== e && (this._fontName = e, this.dirty = !0);
  }
  get fontSize() {
    return this._fontSize ?? bt.available[this._fontName].size;
  }
  set fontSize(e) {
    this._fontSize !== e && (this._fontSize = e, this.dirty = !0);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e);
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = !0);
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(e) {
    this._maxWidth !== e && (this._maxWidth = e, this.dirty = !0);
  }
  get maxLineHeight() {
    return this.validate(), this._maxLineHeight;
  }
  get textWidth() {
    return this.validate(), this._textWidth;
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(e) {
    this._letterSpacing !== e && (this._letterSpacing = e, this.dirty = !0);
  }
  get roundPixels() {
    return this._roundPixels;
  }
  set roundPixels(e) {
    e !== this._roundPixels && (this._roundPixels = e, this.dirty = !0);
  }
  get textHeight() {
    return this.validate(), this._textHeight;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0);
  }
  destroy(e) {
    const { _textureCache: t } = this, i = bt.available[this._fontName].distanceFieldType === "none" ? qn : Kn;
    i.push(...this._activePagesMeshData);
    for (const r of this._activePagesMeshData)
      this.removeChild(r.mesh);
    this._activePagesMeshData = [], i.filter((r) => t[r.mesh.texture.baseTexture.uid]).forEach((r) => {
      r.mesh.texture = B.EMPTY;
    });
    for (const r in t)
      t[r].destroy(), delete t[r];
    this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(e);
  }
};
let ad = da;
ad.styleDefaults = {
  align: "left",
  tint: 16777215,
  maxWidth: 0,
  letterSpacing: 0
};
const hd = [".xml", ".fnt"], ld = {
  extension: {
    type: M.LoadParser,
    priority: Zt.Normal
  },
  name: "loadBitmapFont",
  test(e) {
    return hd.includes(vt.extname(e).toLowerCase());
  },
  async testParse(e) {
    return js.test(e) || Rr.test(e);
  },
  async parse(e, t, s) {
    const i = js.test(e) ? js.parse(e) : Rr.parse(e), { src: r } = t, { page: n } = i, o = [];
    for (let l = 0; l < n.length; ++l) {
      const c = n[l].file;
      let u = vt.join(vt.dirname(r), c);
      u = Tr(u, r), o.push(u);
    }
    const a = await s.load(o), h = o.map((l) => a[l]);
    return bt.install(i, h, !0);
  },
  async load(e, t) {
    return (await I.ADAPTER.fetch(e)).text();
  },
  unload(e) {
    e.destroy();
  }
};
k.add(ld);
const Ne = class extends re {
  constructor() {
    super(...arguments), this._fonts = [], this._overrides = [], this._stylesheet = "", this.fontsDirty = !1;
  }
  static from(e) {
    return new Ne(Object.keys(Ne.defaultOptions).reduce((t, s) => ({ ...t, [s]: e[s] }), {}));
  }
  cleanFonts() {
    this._fonts.length > 0 && (this._fonts.forEach((e) => {
      URL.revokeObjectURL(e.src), e.refs--, e.refs === 0 && (e.fontFace && document.fonts.delete(e.fontFace), delete Ne.availableFonts[e.originalUrl]);
    }), this.fontFamily = "Arial", this._fonts.length = 0, this.styleID++, this.fontsDirty = !0);
  }
  loadFont(e, t = {}) {
    const { availableFonts: s } = Ne;
    if (s[e]) {
      const i = s[e];
      return this._fonts.push(i), i.refs++, this.styleID++, this.fontsDirty = !0, Promise.resolve();
    }
    return I.ADAPTER.fetch(e).then((i) => i.blob()).then(async (i) => new Promise((r, n) => {
      const o = URL.createObjectURL(i), a = new FileReader();
      a.onload = () => r([o, a.result]), a.onerror = n, a.readAsDataURL(i);
    })).then(async ([i, r]) => {
      const n = Object.assign({
        family: vt.basename(e, vt.extname(e)),
        weight: "normal",
        style: "normal",
        src: i,
        dataSrc: r,
        refs: 1,
        originalUrl: e,
        fontFace: null
      }, t);
      s[e] = n, this._fonts.push(n), this.styleID++;
      const o = new FontFace(n.family, `url(${n.src})`, {
        weight: n.weight,
        style: n.style
      });
      n.fontFace = o, await o.load(), document.fonts.add(o), await document.fonts.ready, this.styleID++, this.fontsDirty = !0;
    });
  }
  addOverride(...e) {
    const t = e.filter((s) => !this._overrides.includes(s));
    t.length > 0 && (this._overrides.push(...t), this.styleID++);
  }
  removeOverride(...e) {
    const t = e.filter((s) => this._overrides.includes(s));
    t.length > 0 && (this._overrides = this._overrides.filter((s) => !t.includes(s)), this.styleID++);
  }
  toCSS(e) {
    return [
      `transform: scale(${e})`,
      "transform-origin: top left",
      "display: inline-block",
      `color: ${this.normalizeColor(this.fill)}`,
      `font-size: ${this.fontSize}px`,
      `font-family: ${this.fontFamily}`,
      `font-weight: ${this.fontWeight}`,
      `font-style: ${this.fontStyle}`,
      `font-variant: ${this.fontVariant}`,
      `letter-spacing: ${this.letterSpacing}px`,
      `text-align: ${this.align}`,
      `padding: ${this.padding}px`,
      `white-space: ${this.whiteSpace}`,
      ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [],
      ...this.wordWrap ? [
        `word-wrap: ${this.breakWords ? "break-all" : "break-word"}`,
        `max-width: ${this.wordWrapWidth}px`
      ] : [],
      ...this.strokeThickness ? [
        `-webkit-text-stroke-width: ${this.strokeThickness}px`,
        `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,
        `text-stroke-width: ${this.strokeThickness}px`,
        `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
        "paint-order: stroke"
      ] : [],
      ...this.dropShadow ? [this.dropShadowToCSS()] : [],
      ...this._overrides
    ].join(";");
  }
  toGlobalCSS() {
    return this._fonts.reduce((e, t) => `${e}
            @font-face {
                font-family: "${t.family}";
                src: url('${t.dataSrc}');
                font-weight: ${t.weight};
                font-style: ${t.style}; 
            }`, this._stylesheet);
  }
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(e) {
    this._stylesheet !== e && (this._stylesheet = e, this.styleID++);
  }
  normalizeColor(e) {
    return Array.isArray(e) && (e = ph(e)), typeof e == "number" ? fh(e) : e;
  }
  dropShadowToCSS() {
    let e = this.normalizeColor(this.dropShadowColor);
    const t = this.dropShadowAlpha, s = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance), i = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    e.startsWith("#") && t < 1 && (e += (t * 255 | 0).toString(16).padStart(2, "0"));
    const r = `${s}px ${i}px`;
    return this.dropShadowBlur > 0 ? `text-shadow: ${r} ${this.dropShadowBlur}px ${e}` : `text-shadow: ${r} ${e}`;
  }
  reset() {
    Object.assign(this, Ne.defaultOptions);
  }
  onBeforeDraw() {
    const { fontsDirty: e } = this;
    return this.fontsDirty = !1, this.isSafari && this._fonts.length > 0 && e ? new Promise((t) => setTimeout(t, 100)) : Promise.resolve();
  }
  get isSafari() {
    const { userAgent: e } = I.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(e);
  }
  set fillGradientStops(e) {
    console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText");
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(e) {
    console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText");
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(e) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(e) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(e) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(e) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(e) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
let ls = Ne;
ls.availableFonts = {};
ls.defaultOptions = {
  align: "left",
  breakWords: !1,
  dropShadow: !1,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  letterSpacing: 0,
  lineHeight: 0,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  whiteSpace: "normal",
  wordWrap: !1,
  wordWrapWidth: 100
};
const ke = class extends Ke {
  constructor(e = "", t = {}) {
    super(B.EMPTY), this._text = null, this._style = null, this._autoResolution = !0, this._loading = !1, this.localStyleID = -1, this.dirty = !1, this.ownsStyle = !1;
    const s = new Image(), i = B.from(s, {
      scaleMode: I.SCALE_MODE,
      resourceOptions: {
        autoLoad: !1
      }
    });
    i.orig = new z(), i.trim = new z(), this.texture = i;
    const r = "http://www.w3.org/2000/svg", n = "http://www.w3.org/1999/xhtml", o = document.createElementNS(r, "svg"), a = document.createElementNS(r, "foreignObject"), h = document.createElementNS(n, "div"), l = document.createElementNS(n, "style");
    a.setAttribute("width", "10000"), a.setAttribute("height", "10000"), a.style.overflow = "hidden", o.appendChild(a), this.maxWidth = ke.defaultMaxWidth, this.maxHeight = ke.defaultMaxHeight, this._domElement = h, this._styleElement = l, this._svgRoot = o, this._foreignObject = a, this._foreignObject.appendChild(l), this._foreignObject.appendChild(h), this._image = s, this._loadImage = new Image(), this._autoResolution = ke.defaultAutoResolution, this._resolution = ke.defaultResolution ?? I.RESOLUTION, this.text = e, this.style = t;
  }
  measureText(e) {
    var a, h;
    const { text: t, style: s, resolution: i } = Object.assign({
      text: this._text,
      style: this._style,
      resolution: this._resolution
    }, e);
    Object.assign(this._domElement, {
      innerHTML: t,
      style: s.toCSS(i)
    }), this._styleElement.textContent = s.toGlobalCSS(), document.body.appendChild(this._svgRoot);
    const r = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const n = Math.min(this.maxWidth, Math.ceil(r.width)), o = Math.min(this.maxHeight, Math.ceil(r.height));
    return this._svgRoot.setAttribute("width", n.toString()), this._svgRoot.setAttribute("height", o.toString()), t !== this._text && (this._domElement.innerHTML = this._text), s !== this._style && (Object.assign(this._domElement, { style: (a = this._style) == null ? void 0 : a.toCSS(i) }), this._styleElement.textContent = (h = this._style) == null ? void 0 : h.toGlobalCSS()), {
      width: n + s.padding * 2,
      height: o + s.padding * 2
    };
  }
  async updateText(e = !0) {
    const { style: t, _image: s, _loadImage: i } = this;
    if (this.localStyleID !== t.styleID && (this.dirty = !0, this.localStyleID = t.styleID), !this.dirty && e)
      return;
    const { width: r, height: n } = this.measureText();
    s.width = i.width = Math.ceil(Math.max(1, r)), s.height = i.height = Math.ceil(Math.max(1, n)), this._loading || (this._loading = !0, await new Promise((o) => {
      i.onload = async () => {
        await t.onBeforeDraw(), this._loading = !1, s.src = i.src, i.onload = null, i.src = "", this.updateTexture(), o();
      };
      const a = new XMLSerializer().serializeToString(this._svgRoot);
      i.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(a)}`;
    }));
  }
  get source() {
    return this._image;
  }
  updateTexture() {
    const { style: e, texture: t, _image: s, resolution: i } = this, { padding: r } = e, { baseTexture: n } = t;
    t.trim.width = t._frame.width = s.width / i, t.trim.height = t._frame.height = s.height / i, t.trim.x = -r, t.trim.y = -r, t.orig.width = t._frame.width - r * 2, t.orig.height = t._frame.height - r * 2, this._onTextureUpdate(), n.setRealSize(s.width, s.height, i), this.dirty = !1;
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), super._render(e);
  }
  _renderCanvas(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), super._renderCanvas(e);
  }
  getLocalBounds(e) {
    return this.updateText(!0), super.getLocalBounds(e);
  }
  _calculateBounds() {
    this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  _onStyleChange() {
    this.dirty = !0;
  }
  destroy(e) {
    var s, i, r, n, o;
    typeof e == "boolean" && (e = { children: e }), e = Object.assign({}, ke.defaultDestroyOptions, e), super.destroy(e);
    const t = null;
    this.ownsStyle && ((s = this._style) == null || s.cleanFonts()), this._style = t, (i = this._svgRoot) == null || i.remove(), this._svgRoot = t, (r = this._domElement) == null || r.remove(), this._domElement = t, (n = this._foreignObject) == null || n.remove(), this._foreignObject = t, (o = this._styleElement) == null || o.remove(), this._styleElement = t, this._loadImage.src = "", this._loadImage.onload = null, this._loadImage = t, this._image.src = "", this._image = t;
  }
  get width() {
    return this.updateText(!0), Math.abs(this.scale.x) * this._image.width / this.resolution;
  }
  set width(e) {
    this.updateText(!0);
    const t = he(this.scale.x) || 1;
    this.scale.x = t * e / this._image.width / this.resolution, this._width = e;
  }
  get height() {
    return this.updateText(!0), Math.abs(this.scale.y) * this._image.height / this.resolution;
  }
  set height(e) {
    this.updateText(!0);
    const t = he(this.scale.y) || 1;
    this.scale.y = t * e / this._image.height / this.resolution, this._height = e;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    this._style !== e && (e = e || {}, e instanceof ls ? (this.ownsStyle = !1, this._style = e) : e instanceof re ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"), this.ownsStyle = !0, this._style = ls.from(e)) : (this.ownsStyle = !0, this._style = new ls(e)), this.localStyleID = -1, this.dirty = !0);
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e === "" || e === null || e === void 0 ? " " : e), e = this.sanitiseText(e), this._text !== e && (this._text = e, this.dirty = !0);
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0);
  }
  sanitiseText(e) {
    return e.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;");
  }
};
let vi = ke;
vi.defaultDestroyOptions = {
  texture: !0,
  children: !1,
  baseTexture: !0
};
vi.defaultMaxWidth = 2024;
vi.defaultMaxHeight = 2024;
vi.defaultAutoResolution = !0;
class cd {
  constructor(t, s) {
    this.sprite = t, this.animationManager = s, this.currentMovementState = "idle", this.char1Velocity = { x: 0, y: 0 }, this.grounded = !0, this.jumpStartY = 0, this.jumpTime = 0, this.jumpHeight = 200, this.jumpDuration = 30, this.groundLevel = 0;
  }
  parabolicJump(t, s, i) {
    const r = 4 * s / Math.pow(i, 2);
    return Math.sqrt(2 * r * s) * t - 0.5 * r * Math.pow(t, 2);
  }
  updateMovement(t, s) {
    const { char1Velocity: i, grounded: r, jumpTime: n, jumpHeight: o, jumpDuration: a, parabolicJump: h } = this;
    if (this.sprite, this.groundLevel = t.screen.height / 1.31, i.x > 5 && (i.x = 5), i.x < -5 && (i.x = -5), i.y != 0 && console.log(i.y), !r) {
      this.jumpTime += s;
      const l = this.jumpStartY - this.parabolicJump(n, o, a);
      this.sprite.spriteContainer.y = l, l > this.groundLevel && (this.grounded = !0, this.jumpTime = 0, this.sprite.spriteContainer.y = this.groundLevel);
    }
    r ? i.x !== 0 ? this.currentMovementState = "run" : this.currentMovementState = "idle" : this.currentMovementState = "jump", this.sprite.spriteContainer.x += i.x * s, this.sprite.spriteContainer.y += i.y * s, i.x < 0 && (this.sprite.lookDirection = "left"), i.x > 0 && (this.sprite.lookDirection = "right");
  }
  updateVelocityX(t) {
    t === "right" ? this.char1Velocity.x += 8 : t === "left" && (this.char1Velocity.x -= 8);
  }
  stopVelocity() {
    this.char1Velocity.x = 0;
  }
  jump() {
    this.grounded === !0 && (this.grounded = !1, this.jumpStartY = this.sprite.spriteContainer.position.y, this.jumpTime = 0);
  }
  getCurrentMovementState() {
    return this.currentMovementState;
  }
}
function ud() {
  const e = [];
  for (let s = 1; s <= 10; s++) {
    const i = B.from(`../assets/images/the_knight/Idle (${s}).png`);
    e.push(i);
  }
  const t = new Ye(e);
  return t.animationSpeed = 0.25, t;
}
function dd() {
  const e = [];
  for (let s = 1; s <= 10; s++) {
    const i = B.from(`../assets/images/the_knight/Run (${s}).png`);
    e.push(i);
  }
  const t = new Ye(e);
  return t.animationSpeed = 0.25, t;
}
function fd() {
  const e = [];
  for (let s = 1; s <= 10; s++) {
    const i = B.from(`../assets/images/the_knight/Jump (${s}).png`);
    e.push(i);
  }
  const t = new Ye(e);
  return t.animationSpeed = 0.25, t;
}
class pd {
  constructor() {
    this.idleSprite = ud(), this.runSprite = dd(), this.jumpSprite = fd(), this.activeSprite = this.idleSprite;
  }
  setActiveAnimation(t, s) {
    this.idleSprite.visible = !1, this.runSprite.visible = !1, this.jumpSprite.visible = !1;
    let i;
    t === "idle" ? i = this.idleSprite : t === "run" ? i = this.runSprite : t === "jump" && (i = this.jumpSprite), i && (i.visible = !0, i.play(), s === "left" ? i.scale.x = -Math.abs(i.scale.x) : s === "right" && (i.scale.x = Math.abs(i.scale.x)), this.activeSprite = i);
  }
  syncSpritePositions() {
    [this.idleSprite, this.runSprite, this.jumpSprite].forEach((t) => {
      t.x = 0, t.y = 0;
    });
  }
}
class md {
  constructor(t) {
    this.app = t, this.animationManager = new pd(), this.movementManager = new cd(this, this.animationManager), this.lookDirection = "right", this.spriteContainer = new Tt(), t.stage.addChild(this.spriteContainer);
  }
  updateSprite(t, s) {
    this.movementManager.updateMovement(t, s), this.animationManager.setActiveAnimation(this.movementManager.getCurrentMovementState(), this.lookDirection), this.animationManager.syncSpritePositions();
  }
  renderSprite() {
    const { idleSprite: t, runSprite: s, jumpSprite: i } = this.animationManager;
    this.spriteContainer.addChild(t), this.spriteContainer.addChild(s), this.spriteContainer.addChild(i), [t, s, i].forEach((r) => {
      r.width = 200, r.height = 200, r.position.set(0, 0), r.anchor.set(0.5, 0.5), r.interactive = !0, r.buttonmode = !0;
    }), this.spriteContainer.position.set(this.app.screen.width / 8, this.app.screen.height / 1.31), t.on("pointerdown", () => {
      t.scale.x += 0.1, t.scale.y += 0.1;
    });
  }
  move(t) {
    this.movementManager.updateVelocityX(t);
  }
  stopMove() {
    this.movementManager.stopVelocity();
  }
  jump() {
    this.movementManager.jump();
  }
  getMovementManager() {
    return this.MovementManager;
  }
}
class gd {
  constructor(t, s, i, r, n) {
    this.keyDownCallbacks = [], this.keyUpCallbacks = [], this.gameController = s, this.attack = i, this.menu = r, this.sprite = n, t.addEventListener("keydown", (o) => this.handleKeyDown(o)), t.addEventListener("keyup", (o) => this.handleKeyUp(o));
  }
  registerKeyDownCallback(t) {
    this.keyDownCallbacks.push(t);
  }
  registerKeyUpCallback(t) {
    this.keyUpCallbacks.push(t);
  }
  handleKeyDown(t) {
    this.gameController.getGameState() === this.gameController.GameState.InGame ? ((t.key === "ArrowRight" || t.key === "d") && this.sprite.move("right"), (t.key === "ArrowLeft" || t.key === "a") && this.sprite.move("left"), (t.key === "ArrowUp" || t.key === "w") && this.sprite.jump()) : this.gameController.getGameState() === this.gameController.GameState.StartMenu ? ["ArrowUp", "w", "ArrowDown", "s"].includes(t.key) ? this.menu.updateMenu(t.key) : ["e", "Enter"].includes(t.key) && this.menu.selectOption() : (this.gameController.getGameState(), this.gameController.GameState.Paused);
  }
  handleKeyUp(t) {
    this.gameController.getGameState() === this.gameController.GameState.InGame ? ((t.key === "ArrowRight" || t.key === "d" || t.key === "ArrowLeft" || t.key === "a") && this.sprite.stopMove(), this.keyUpCallbacks.forEach((s) => s(t))) : this.gameController.getGameState() === this.gameController.GameState.StartMenu || (this.gameController.getGameState(), this.gameController.GameState.Paused);
  }
}
class _d {
  constructor(t) {
    this.app = t, this.renderWindow(this.app);
  }
  renderWindow(t) {
    t.renderer.resize(window.innerWidth, window.innerHeight), t.renderer.view.style.position = "absolute", document.body.appendChild(t.view), new Tt();
  }
}
class xd {
  constructor(t, s, i, r) {
    this.app = t, this.gameController = s, this.menu = i, this.sprite = r, this.startTicker(this.app, this.menu, this.sprite);
  }
  startTicker(t, s, i) {
    t.ticker.add((r) => {
      this.menu.updateMenu(r), this.gameController.getGameState() === this.gameController.GameState.InGame && this.sprite.updateSprite(this.app, r);
    });
  }
}
class yd {
  constructor(t) {
    this.app = t, this.createBackground(this.app);
  }
  createBackground(t) {
    const s = B.from("/../../assets/images/backgrounds/forest_01.jpg"), i = new Ke(s);
    i.width = t.screen.width, i.height = t.screen.height, t.stage.addChild(i), new ge().beginFill(16777215).drawRect(Math.random() * t.screen.width, Math.random() * t.screen.height, 10, 10).endFill();
  }
  // function createBackground(app) {
  // 	const Graphics = PIXI.Graphics;
  //
  // 	const rectangle = new Graphics();
  // 	rectangle.beginFill(0xAA33BB)
  // 	.lineStyle(4, 0xFFEA00)
  // 	.drawRect(200, 200, 100, 120)
  // 	.endFill();
  //
  // 	app.stage.addChild(rectangle);
  //
  // 	app.renderer.backgroundColor = 0xFFA71A;
  // 	const rect = new Graphics();
  // 	rect.beginFill(0xFFFFFF)
  // 	.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
  // 	.endFill()
  //
  // }
  updateBackground(t, s) {
    const i = ge, r = new i();
    r.beginFill(16777215).drawRect(Math.random() * t.screen.width, Math.random() * t.screen.height, 10, 10).endFill(), t.stage.addChild(r), setTimeout(() => {
      fadeOut(t, r, 1e3);
    }, 1e3);
  }
  fadeOut(t, s, i) {
    const r = 60 / i;
    t.ticker.add(n);
    function n() {
      s.alpha -= r, s.alpha <= 0 && (s.alpha = 0, t.stage.removeChild(s), t.ticker.remove(n));
    }
  }
}
class qi {
  constructor(t, s, i, r, n = !1) {
    this.text = new vs(t, {
      fontFamily: "Arial",
      fontSize: 24,
      fill: n ? "white" : "gray"
    }), this.text.x = s - this.text.width / 2, this.text.y = i - this.text.height / 2;
    const o = this.text.width + 20, a = this.text.height + 10, h = n ? "0xAAAAAA" : 4473924;
    this.bg = new ge(), this.bg.beginFill(h), this.bg.drawRect(
      this.text.x - 10,
      this.text.y - 5,
      o,
      a
    ), this.bg.endFill(), r.stage.addChild(this.bg), this.box = new ge(), this.box.lineStyle(2, 16777215), this.box.drawRect(
      this.text.x - 10,
      this.text.y - 5,
      o,
      a
    ), r.stage.addChild(this.box), r.stage.addChild(this.text);
  }
  setSelected(t) {
    this.text.style.fill = t ? "white" : "gray";
    const s = t ? 11184810 : 4473924;
    this.box.clear().lineStyle(2, 16777215).beginFill(s).drawRect(
      this.text.x - 10,
      this.text.y - 5,
      this.text.width + 20,
      this.text.height + 10
    ).endFill();
  }
  setVisible(t) {
    this.text.visible = t, this.box.visible = t, this.bg.visible = t;
  }
}
class vd {
  constructor(t, s) {
    this.currentMenu = 0, this.app = t, this.gameController = s, this.mainMenuChoices = ["Start Game", "Options", "Credits"], this.optionsChoices = ["Volume", "Music", "Back"], this.selectedIndex = 0, this.mainMenuSelectedIndex = 0, this.optionsMenuSelectedIndex = 0, this.credits = ["Chricke", "Erik", "Anton", "Basse", "Baiwei"], this.creditsTexts = [], this.createMenuButtons(), this.createCredits(), this.createOptions(), this.showMenu(
      0
      /* Main */
    );
  }
  showMenu(t) {
    switch (this.hideAllMenus(), t) {
      case 0:
        this.mainMenuButtons.forEach((s) => s.setVisible(!0));
        break;
      case 1:
        this.optionsButtons.forEach((s) => s.setVisible(!0));
        break;
      case 2:
        this.creditsTexts.forEach((s) => s.visible = !0), this.backButton.setVisible(!0);
        break;
    }
    this.currentMenu = t;
  }
  hideAllMenus() {
    this.mainMenuButtons.forEach((t) => t.setVisible(!1)), this.optionsButtons.forEach((t) => t.setVisible(!1)), this.creditsTexts.forEach((t) => t.visible = !1), this.backButton.setVisible(!1);
  }
  createMenuButtons() {
    this.mainMenuButtons = this.mainMenuChoices.map((t, s) => {
      const i = this.app.screen.width / 2, r = this.app.screen.height / 2 - this.mainMenuChoices.length * 20 / 2 + s * 50, n = s === this.mainMenuSelectedIndex;
      return new qi(t, i, r, this.app, n);
    });
  }
  createCredits() {
    this.credits.forEach((i, r) => {
      const n = new vs(i, {
        fontFamily: "Arial",
        fontSize: 24,
        fill: "white"
      });
      n.x = this.app.screen.width / 2 - n.width / 2, n.y = this.app.screen.height / 2 - this.credits.length * 30 / 2 + r * 30, n.visible = !1, this.creditsTexts.push(n), this.app.stage.addChild(n);
    });
    const t = this.app.screen.width / 2, s = this.app.screen.height / 2 + this.credits.length * 30 / 2 + 30;
    this.backButton = new qi("Back", t, s, this.app, 1), this.backButton.setVisible(!1);
  }
  createOptions() {
    this.optionsButtons = this.optionsChoices.map((t, s) => {
      const i = this.app.screen.width / 2, r = this.app.screen.height / 2 - this.optionsChoices.length * 20 / 2 + s * 50, n = s === this.optionsMenuSelectedIndex;
      return new qi(t, i, r, this.app, n);
    }), this.optionsButtons.forEach((t) => {
      t.setVisible(!1);
    });
  }
  updateMenu(t) {
    let s, i;
    switch (this.currentMenu) {
      case 0:
        s = this.mainMenuButtons, i = this.mainMenuSelectedIndex;
        break;
      case 1:
        s = this.optionsButtons, i = this.optionsMenuSelectedIndex;
        break;
      default:
        return;
    }
    switch (s[i].text.style.fill = "gray", s[i].setSelected(!1), ["ArrowUp", "w"].includes(t) ? i = (i - 1 + s.length) % s.length : ["ArrowDown", "s"].includes(t) && (i = (i + 1) % s.length), this.currentMenu) {
      case 0:
        this.mainMenuSelectedIndex = i;
        break;
      case 1:
        this.optionsMenuSelectedIndex = i;
        break;
    }
    s[i].text.style.fill = "white", s[i].setSelected(!0);
  }
  selectOption() {
    switch (this.currentMenu) {
      case 0:
        const t = this.mainMenuChoices[this.mainMenuSelectedIndex];
        switch (console.log(`Selected option: ${t}`), t) {
          case "Start Game":
            this.hideAllMenus(), this.gameController.startGame();
            break;
          case "Options":
            this.showMenu(
              1
              /* Options */
            );
            break;
          case "Credits":
            this.showMenu(
              2
              /* Credits */
            );
            break;
        }
        break;
      case 1:
        const s = this.optionsChoices[this.optionsMenuSelectedIndex];
        switch (console.log(`Selected option: ${s}`), s) {
          case "Volume":
            break;
          case "Music":
            break;
          case "Back":
            this.showMenu(
              0
              /* Main */
            );
            break;
        }
        break;
      case 2:
        this.showMenu(
          0
          /* Main */
        );
        break;
    }
  }
  hideMainMenu() {
    this.mainMenuButtons.forEach((t) => t.setVisible(!1));
  }
  showMainMenu() {
    this.mainMenuButtons.forEach((t) => t.setVisible(!0));
  }
}
class bd {
  constructor(t) {
    this.GameState = {
      StartMenu: 0,
      InGame: 1,
      Paused: 2
    }, this.app = t, this.gameState = this.GameState.StartMenu, this.window = new _d(this.app), this.background = new yd(this.app), this.menu = new vd(this.app, this), this.sprite = new md(this.app), this.inputManager = new gd(window, this, this.sprite, this.menu, this.sprite), this.ticker = new xd(this.app, this, this.menu, this.sprite);
  }
  getGameState() {
    return this.gameState;
  }
  setGameState(t) {
    this.gameState = t;
  }
  startGame() {
    this.setGameState(this.GameState.InGame), this.sprite.renderSprite(this.app);
  }
}
const Td = Nr, Ed = new Td({
  width: 1920,
  height: 1080,
  antialias: !0
});
new bd(Ed);
//# sourceMappingURL=main.bundle.mjs.map
